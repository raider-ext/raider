function FBrowserInject() {
	throw new Error("FBrowserInject is abstract and cannot be instantiated!");
}

FBrowserInject.prototype.constructor = FBrowserInject;

FBrowserInject.prototype.initFBrowserInject = function() {}

FBrowserInject.prototype.getBrowserName = function(){
    throw new Error("FBrowser is abstract and getBrowserName() method must be re-defined!");
}

FBrowserInject.prototype.openNewTab = function(url) {
	throw new Error("FBrowser is abstract and openNewTab() method must be re-defined!");
}

FBrowserInject.prototype.getURL = function(filePath) {
	throw new Error("FBrowserInject is abstract and getURL() method must be re-defined!");
}

FBrowserInject.prototype.extensionSendMessage = function(msg, callback) {
	throw new Error("FBrowserInject is abstract and tabsSendMessage() method must be re-defined!");
}

FBrowserInject.prototype.runtimeSendMessage = function(msg, callback) {
	throw new Error("FBrowserInject is abstract and runtimeSendMessage() method must be re-defined!");
}

FBrowserInject.prototype.extensionSendRequest = function(data, callback) {
	throw new Error("FBrowserInject is abstract and getURL() method must be re-defined!");
}

FBrowserInject.prototype.addOnRequestListener = function(onRequestListener) {
	throw new Error("FBrowserInject is abstract and addOnTabActivatedListener() method must be re-defined!");
}





FBrowserInject.prototype.addOnBgMessageListener = function(onMessageListener) { //function(data, sender) {
	throw new Error("FBrowserInject is abstract and addOnBgMessageListener() method must be re-defined!");
}

FBrowserInject.prototype.sendBgMessage = function(eventName, tabId, callbackFunction) {
	throw new Error("FBrowserInject is abstract and sendBgMessage() method must be re-defined!");
}

FBrowserInject.prototype.addWindowEventListener = function(windowEventListener) {
	throw new Error("FBrowserInject is abstract and addWindowEventListener() method must be re-defined!");
}

FBrowserInject.prototype.createEventInjectionCode = function(message) {
	throw new Error("FBrowserInject is abstract and createEventInjectionCode() method must be re-defined!");
}

FBrowserInject.prototype.isInjectPagePreActivated = function() {
	throw new Error("FBrowserInject is abstract and isInjectPagePreActivated() method must be re-defined!");
}

FBrowserInject.prototype.jumpToURL = function(doc, url) {
	throw new Error("FBrowserInject is abstract and jumpToURL() method must be re-defined!");
}

FBrowserInject.prototype.getDocumentByID = function(tabId) {
	throw new Error("FBrowserInject is abstract and getDocumentByID() method must be re-defined!");
}

FBrowserInject.prototype.showLoginScreen = function(url) {
	throw new Error("FBrowserInject is abstract and showLoginScreen() method must be re-defined!");
}
