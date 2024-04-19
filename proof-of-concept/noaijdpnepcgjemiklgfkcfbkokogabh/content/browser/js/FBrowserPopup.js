function FBrowserPopup() {
	throw new Error("FBrowserPopup is abstract and cannot be instantiated!");
}

FBrowserPopup.prototype.constructor = FBrowserPopup;

FBrowserPopup.prototype.initFBrowserPopup = function(siteHost) {
	// TODO - add common code here...
}

FBrowserPopup.prototype.openNewTab = function(url) {
	throw new Error("FBrowserPopup is abstract and openNewTab() method must be re-defined!");
}

FBrowserPopup.prototype.executeForSelectedTab = function(windowId, tabFunction) {
	throw new Error("FBrowserPopup is abstract and executeForSelectedTab() method must be re-defined!");
}

FBrowserPopup.prototype.addOnRequestListener = function(onRequestListener) {
	throw new Error("FBrowserPopup is abstract and addOnTabActivatedListener() method must be re-defined!");
}

FBrowserPopup.prototype.getVersion = function(callback) {
	throw new Error("FBrowserPopup is abstract and getVersion() method must be re-defined!");
}

FBrowserPopup.prototype.extensionSendRequest = function(data, callback) {
	throw new Error("FBrowserPopup is abstract and extensionSendRequest method must be re-defined!");
}

FBrowserPopup.prototype.tabSendRequest = function(id, data, callback) {
	throw new Error("FBrowserPopup is abstract and tabSendRequest method must be re-defined!");
}
