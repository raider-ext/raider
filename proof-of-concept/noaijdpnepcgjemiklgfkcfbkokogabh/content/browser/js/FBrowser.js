function FBrowser() {
	throw new Error("FBrowser is abstract and cannot be instantiated!");
}

FBrowser.prototype.constructor = FBrowser;

FBrowser.prototype.initFBrowser = function() {}

FBrowser.prototype.openNewTab = function(url) {
	throw new Error("FBrowser is abstract and openNewTab() method must be re-defined!");
}

FBrowser.prototype.addOnRequestListener = function(onRequestListener) {
	throw new Error("FBrowser is abstract and addOnTabActivatedListener() method must be re-defined!");
}

FBrowser.prototype.getVersion = function(callback) {
	throw new Error("FBrowser is abstract and getVersion() method must be re-defined!");
}

FBrowser.prototype.createContextMenus = function(url) {
	throw new Error("FBrowser is abstract and createContextMenus() method must be re-defined!");
}

FBrowser.prototype.updateContextMenus = function(url) {
	throw new Error("FBrowser is abstract and updateContextMenus() method must be re-defined!");
}

FBrowser.prototype.addOnMessageListener = function(onMessageListener) {
	throw new Error("FBrowser is abstract and addOnMessageListener() method must be re-defined!");
}

FBrowser.prototype.executeForSelectedTab = function(windowId, tabFunction) {
	throw new Error("FBrowser is abstract and executeForSelectedTab() method must be re-defined!");
}

FBrowser.prototype.portOnConnectListener = function(onConnectListener) {
	throw new Error("FBrowser is abstract and portOnConnectListener() method must be re-defined!");
}

FBrowser.prototype.executeScript = function(info, tab) {
	throw new Error("FBrowser is abstract and executeForSelectedTab() method must be re-defined!");
}

FBrowser.prototype.tabsSendMessage = function(activeInfo) {
	throw new Error("FBrowser is abstract and tabsSendMessage() method must be re-defined!");
}