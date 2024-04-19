var x = function() {
    console.log("Injected from background!");
    window.extensionDetected=true;
    window.bgInjection=true;
    window.mv3=true;
    window.bgInjectAPIView=Array.prototype.forEach.toString()==='function forEach() { [native code] }';
}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo?.status !== "complete") return;
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        function: x,
        world: 'MAIN',
    });
});

