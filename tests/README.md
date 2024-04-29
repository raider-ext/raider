# Raider
## Peeking through the ``window``: Fingerprinting Browser Extensions through Page-Visible Execution Traces and Interactions

### Test: Script injection by browser extensions \& their order of execution

According to the [Google Chrome source code](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/extension_types.json) and the [Mozilla documentation](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/extensionTypes/RunAt), a browser extension can inject JavaScript into the Web page visited by the user as early as the first script to be executed by the browser, when injected at ``document_start``.
However, we observe that the injection and execution of JavaScript code injected by browser extensions with respect to the execution of the Web page JavaScript actually depend on:
- how they were injected, and
- the extension context used for injection

First, we observe distinct behavior between JavaScript injection from the content script. That is, when an extension injects a piece of code into the page from their content script, the execution order depends on whether it was injected inline, using the ``innerText`` property, or through the ``src`` property of the ``script`` element.

 + The inline script, when injected, will be able to execute before the Web page JavaScript, and thus, will also be able to obtain clear reference of the built-in global JavaScript APIs to avoid fingerprinting.

 ``` javascript
var t = document.createElement('script');
t.innerText = "console.log('Script Injected Successfully!');";
(document.head || document.documentElement).appendChild(t);
 ```

 + However, scripts injected through the ``src`` property executes only after _some_ Web page JavaScript has executed, thus, not being able to obtain the clean references to built-in APIs.

``` javascript
var s = document.createElement('script');
s.src = chrome.runtime.getURL('inject.js');
(document.head || document.documentElement).appendChild(s);
```
**Importantly, inline code injection is only possible with extensions adhering to the MV2 standards and while this is forbidden in the MV3 standards.**

Secondly, if an extension injects JavaScript from their background/service worker (using the `scripting`/`tabs` API), the injected script behaves identical to the script injected by the content script through the `src` property of the `script` element, as shown above.

``` javascript
    // Manifest V2
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        chrome.tabs.executeScript(tabId=tabId, {
            allFrames: true,
            code: "console.log('Script Injected Successfully!');",
            runAt: "document_start"
    ,    });
    });

    // Manifest V3:
    let x = function() { console.log('Script Injected Successfully!');}
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            function: x,
            world: 'MAIN',
        });
    });
```

We demonstrate this with a minimal set of extensions (with MV2 & MV3 standards) with script injection capabilities, as shown above. To verify above claims, please do the following:
- Install the ``MV2-test-extension`` extension in your browser available in this folder.
- Navigate to [our test page](https://raider-ext.github.io/raider/pages/script-exec-order.html).
- The test page displays whether the scripts injected by the test extension through all possible means and contexts, as discussed above, was able to obtain the clean reference to the _hooked_ API. We overwrite the definition of ``Array.prototype.forEach`` in our test page for example purposes.
- The console logs provide with script execution order for both injected scripts as well as scripts emebdded in the page.
- Repeat the above steps for ``MV3-test-extension``.