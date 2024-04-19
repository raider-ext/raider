(function () {
  var skipAds_classList = [
    'videoAdUiSkipButton', // Old close ad button
    'ytp-ad-skip-button ytp-button', // New close ad button
    'ytp-ad-overlay-close-button', // Close overlay button
  ];

  var skipAds_timeoutId;
  var skipAds_observedSkipBtn;
  var skipAds_skipBtnObserver;

  /**
   * Loops over all the class names of buttons that we need to click to skip an
   * ad or overlay, and returns an array of those elements.
   *
   * @param {Array<String>} classNames - an array of class names of buttons that we need to click
   * @returns {Array<Element>} - An array of DOM elements
   */
  function skipAds_existingButtons(classNames) {
    return classNames
      .map(name => {
        return Array.from(document.getElementsByClassName(name)) || [];
      })
      .reduce(function(acc, elems) {
        return acc.concat(elems);
      }, [])
  }

  /**
   * We check if the button is visible by using the `offsetParent` attribute
   * on an element. It is `null` if the element, or any of its parents, is set
   * to have style `display:none`.
   * 
   * @param {Element} button - The button element
   * @returns {boolean} - Whether the element is visible on the screen
   */
  function skipAds_isBtnVisible(button) {
    return button.offsetParent === null ? false : true;
  }

  /**
   * Since we do not click the button as long as it is not visible, we can
   * attach an observer to listen for the button's attribute changes to figure
   * out when the element becomes visible.
   * 
   * @param {Element} button - The button element to click
   */
  function skipAds_skipAds_triggerClickWhenVisible(button) {
    if (button === skipAds_observedSkipBtn) {
      // We are already observing this button.
      return;
    }

    // Find the actual parent with the display style 'none' so that we can
    // listen to that element's changes.
    var parentWithDisplayStyle = (function() {
      var currentParent = button;
      while (currentParent !== null) {
        if (currentParent.style.display === 'none') {
          return currentParent;
        }

        currentParent = currentParent.parentElement;
      }

      return null;
    })();

    if (!parentWithDisplayStyle) {
      // Give up.
      return;
    }

    // If we had been observing another button, disconnect from that. If that
    // element still exists in the DOM, click on it for good measure.
    if (skipAds_skipBtnObserver && skipAds_observedSkipBtn) {
      skipAds_skipBtnObserver.disconnect();
      skipAds_triggerClick(skipAds_observedSkipBtn);
    }

    // If this is the first skip button we have encountered, we will have to
    // set up the observer first.
    if (!skipAds_skipBtnObserver) {
      skipAds_skipBtnObserver = new MutationObserver(function() {
        if (!skipAds_isBtnVisible(skipAds_observedSkipBtn)) {
          return;
        }

        skipAds_triggerClick(skipAds_observedSkipBtn);
        skipAds_observedSkipBtn = undefined;
        skipAds_skipBtnObserver.disconnect();
      });
    }

    // Since we will eventually be working on the button we need to have this
    // reference stored.
    skipAds_observedSkipBtn = button;
    
    // Note that we are actually observing the button's parent that has the
    // display attribute, as the skip button's visibilty is controlled by its
    // parent.
    skipAds_skipBtnObserver.observe(parentWithDisplayStyle, { attributes: true });
  }

  /**
   * Loops over all the buttons that need to be clicked and triggers the click
   * even on those buttons.
   */
  function skipAds_checkAndClickButtons() {
    skipAds_existingButtons(skipAds_classList).forEach(button => {
      // We want to make sure that we are only pressing the skip button when it
      // is visible on the screen, so that it is like an actual user is pressing
      // it. This also gives a user time to not-skip the ad in the future.
      if (!skipAds_isBtnVisible(button)) {
        skipAds_skipAds_triggerClickWhenVisible(button);
        
        return;
      } 

      skipAds_triggerClick(button);
    })
  }

  /**
   * Triggers a click event on the given DOM element.
   * 
   * This function is based on an answer here:
   * http://stackoverflow.com/questions/2705583/how-to-simulate-a-click-with-javascript
   * 
   * @param {Element} el - The element on which to trigger the event
   */
  function skipAds_triggerClick(el) {
    var etype = 'click';

    if (typeof el.fireEvent === 'function') {
      el.fireEvent('on' + etype);
    } else if (typeof el.dispatchEvent === 'function') {
      var evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  }

  /**
   * Initializes an observer on the YouTube Video Player to get events when any
   * of its child elements change. We can check for the existance of the skip ad
   * buttons on those changes.
   *
   * @returns {Boolean} - true if observer could be set up, false otherwise
   */
  function skipAds_initObserver() {
    if (!('MutationObserver' in window)) {
      return false;
    }

    var ytdPlayer = document.querySelector('ytd-player#ytd-player');

    if (!ytdPlayer) {
      return false;
    }

    var observer = new MutationObserver(function() {
      skipAds_checkAndClickButtons();
    });

    observer.observe(ytdPlayer, { childList: true, subtree: true });

    clearTimeout(skipAds_timeoutId); // Just for good measure

    return true;
  } 

  /**
   * We have two implementations to check for the skip ad buttons: one is based on
   * MutationObserver, that is only triggered when the video-player is updated in
   * the page; second is a simple poll that constantly checks for the existence of
   * the skip ad buttons.
   * 
   * We first try to set up the mutation observer. It can sometimes fail even when the
   * browser supports it, if the video player has not yet been attached to the DOM.
   * In such cases, we continue the polling implementation until the observer can be
   * set up.
   */
  function skipAds_initTimeout() {
    clearTimeout(skipAds_timeoutId);

    if (skipAds_initObserver()) {
      // We can stop the polling as the observer is set up.
      return;
    }

    /**
     * Starts the poll to see if any of the ad buttons are present in the page now.
     * The interval of 2 seconds is arbitrary. I believe it is a good compromise.
     */
    skipAds_timeoutId = setTimeout(function() {
      skipAds_checkAndClickButtons();

      skipAds_initTimeout();
    }, 2000);
  }

  /**
   * Check if we are running in an iframe. We do that by checking if our current
   * window is the same as the top parent window. The try..catch is there because
   * some browsers will not let a script in an iframe access the parent window.
   */
  var skipAds_inIframe = (function() {
    try {
      return window.self !== window.top;
    } catch (e) {
      // The browser did not let us access the parent window. Which also means we
      // are in an iframe.
      return true;
    }
  })();

  /**
   * Only start the script if we are at the top level. YouTube has a few iframes
   * in the page which would also be running this content script.
   */
  if (!skipAds_inIframe) {
    // main:
    skipAds_initTimeout();
  }
})();

window.originalSetTimeout = window.setTimeout;
window.originalClearTimeout = window.clearTimeout;

window.setTimeout = function(func, delay) {
  if (delay == 1000 )
  {
    delay = 25;
  }
  return window.originalSetTimeout(func, delay);
};

window.clearTimeout = function(timerID) {
    window.originalClearTimeout(timerID);
};
