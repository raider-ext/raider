console.log("Content Script active now!");

try {
    var t = document.createElement('script');
    t.innerText = "window.extensionDetected=true;window.mv3=true;console.log('Injected from Content Script via innerText');window.inlineInjection=true;window.inlineAPIView = Array.prototype.forEach.toString()==='function forEach() { [native code] }';";
    (document.head || document.documentElement).appendChild(t);

} catch (e) { }

var s = document.createElement('script');
s.src = chrome.runtime.getURL('inject.js');
(document.head || document.documentElement).appendChild(s);
