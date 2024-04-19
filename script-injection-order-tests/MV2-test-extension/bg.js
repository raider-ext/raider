chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo?.status !== "complete") return;
    chrome.tabs.executeScript(tabId=tabId, {
        allFrames: true,
        code: "window.extensionDetected=true;console.log('Injected from background!');document.getElementById('bg-test').innerHTML = '<p><b>Script injection from extension background:</b> Script injection by extension background/service-worker works!</br>Clean reference to JS API <b>NOT</b> obtained.</p>';;",
        runAt: "document_start",
        matchAboutBlank: true
,    });
});