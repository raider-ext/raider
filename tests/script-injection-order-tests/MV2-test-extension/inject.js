window.extensionDetected=true;
console.log("Injected from Content Script via src");
window.sourceInjection=true;
window.mv2=true;
window.sourceAPIView = Array.prototype.forEach.toString()==='function forEach() { [native code] }';