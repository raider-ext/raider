// Last time updated at Feb 16, 2017, 08:32:23

// Latest file can be found here: https://cdn.webrtc-experiment.com/getScreenId.js

// Muaz Khan         - www.MuazKhan.com
// MIT License       - www.WebRTC-Experiment.com/licence
// Documentation     - https://github.com/muaz-khan/getScreenId.

// ______________
// getScreenId.js

/*
getScreenId(function (error, sourceId, screen_constraints) {
    // error    == null || 'permission-denied' || 'not-installed' || 'installed-disabled' || 'not-chrome'
    // sourceId == null || 'string' || 'firefox'

    if(sourceId == 'firefox') {
        navigator.mozGetUserMedia(screen_constraints, onSuccess, onFailure);
    }
    else navigator.webkitGetUserMedia(screen_constraints, onSuccess, onFailure);
});
*/

(function() {
    window.getScreenId = function(callback) {
        // for Firefox:
        // sourceId == 'firefox'
        // screen_constraints = {...}
        if (!!navigator.mozGetUserMedia) {
            callback(null, 'firefox', {
                video: {
                    mozMediaSource: 'window',
                    mediaSource: 'window'
                }
            });
            return;
        }

        window.addEventListener('message', onIFrameCallback);

        function onIFrameCallback(event) {
            if (!event.data) return;

            if (event.data.chromeMediaSourceId) {
                if (event.data.chromeMediaSourceId === 'PermissionDeniedError') {
                    callback('permission-denied');
                } else callback(null, event.data.chromeMediaSourceId, getScreenConstraints(null, event.data.chromeMediaSourceId));
            }

            if (event.data.chromeExtensionStatus) {
                callback(event.data.chromeExtensionStatus, null, getScreenConstraints(event.data.chromeExtensionStatus));
            }

            // this event listener is no more needed
            window.removeEventListener('message', onIFrameCallback);
        }
        setTimeout(postGetSourceIdMessage, 100);
    };

    function getScreenConstraints(error, sourceId) {
      console.log(sourceId);
        var screen_constraints = {
          audio: connection.DetectRTC.audioOutputDevices.length > 0 ? {
            mandatory: {
              chromeMediaSource: 'desktop',
            }
          } : false,
            video: {
                mandatory: {
                  chromeMediaSource: error ? 'screen' : 'desktop',
               //   minWidth:window.screen.width,
                //  minHeight:window.screen.height,
                  maxWidth:window.screen.width > 1920 ? 1920: window.screen.width ,
                  maxHeight:window.screen.height > 1080 ? 1080: window.screen.height
                   },
                optional: []
            }
        };
      /*if(modVideoConstraints){
        screen_constraints.video.mandatory.minWidth=modVideoConstraints.minWidth;
        screen_constraints.video.mandatory.minHeight=modVideoConstraints.minHeight;
        screen_constraints.video.mandatory.maxWidth=modVideoConstraints.maxWidth;
        screen_constraints.video.mandatory.maxHeight=modVideoConstraints.maxHeight;
      }*/
      window.screen_constraints=screen_constraints;

        console.log(screen_constraints);

      /* maxWidth: window.screen.width > 1920 ? window.screen.width : 1920,
       maxHeight: window.screen.height > 1080 ? window.screen.height : 1080*/

        if (sourceId) {
            screen_constraints.video.mandatory.chromeMediaSourceId = sourceId;
        }

        return screen_constraints;
    }

    function postGetSourceIdMessage() {
        if (!iframe) {
            loadIFrame(postGetSourceIdMessage);
            return;
        }

        if (!iframe.isLoaded) {
            setTimeout(postGetSourceIdMessage, 100);
            return;
        }

        iframe.contentWindow.postMessage({
            captureSourceId: true
        }, '*');
    }

    var iframe;

    // this function is used in RTCMultiConnection v3
    window.getScreenConstraints = function(callback) {
        loadIFrame(function() {
            getScreenId(function(error, sourceId, screen_constraints) {
                callback(error, screen_constraints.video);
            });
        });
    };

    function loadIFrame(loadCallback) {
        if (iframe) {
            loadCallback();
            return;
        }

        iframe = document.createElement('iframe');
        iframe.onload = function() {
            iframe.isLoaded = true;

            loadCallback();
        };
        iframe.src = '/castin/getScreenId.html'; // https://wwww.yourdomain.com/getScreenId.html
        iframe.style.display = 'none';
        (document.body || document.documentElement).appendChild(iframe);
    }

    window.getChromeExtensionStatus = function(callback) {
        // for Firefox:
        if (!!navigator.mozGetUserMedia) {
            callback('installed-enabled');
            return;
        }

        window.addEventListener('message', onIFrameCallback);

        function onIFrameCallback(event) {
            if (!event.data) return;

            if (event.data.chromeExtensionStatus) {
                callback(event.data.chromeExtensionStatus);
            }

            // this event listener is no more needed
            window.removeEventListener('message', onIFrameCallback);
        }

        setTimeout(postGetChromeExtensionStatusMessage, 100);
    };

    function postGetChromeExtensionStatusMessage() {
        if (!iframe) {
            loadIFrame(postGetChromeExtensionStatusMessage);
            return;
        }

        if (!iframe.isLoaded) {
            setTimeout(postGetChromeExtensionStatusMessage, 100);
            return;
        }

        iframe.contentWindow.postMessage({
            getChromeExtensionStatus: true
        }, '*');
    }
})();
