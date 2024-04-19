/**
 * Default FBrowserChrome ctor.
 * Creates instance of FBrowserChrome class that contains ALL Chrome browser-specific implementation  
 *         of the core browser functionality required for the rest of the code.
 *
 * @param {String} siteDomain The domain name of the site.
 */
function FBrowserChrome() {
	this.initFBrowserChrome();
}
	
FBrowserChrome.prototype = FExtension.extend(FBrowser.prototype, FBrowserChrome);

FBrowserChrome.prototype.inlinerPort = null;

FBrowserChrome.prototype.getBrowserName = function(){
    return 'chrome';
}

FBrowserChrome.prototype.isLocalStoragePreset = function() {
	return true;
}

FBrowserChrome.prototype.inlinerPortListener = function(port, callback) {
	this.inlinerPort = port;
	console.assert(port.name == "iminliner");
	port.onMessage.addListener(callback);
}

FBrowserChrome.prototype.sendMessageTabs = function(obj, callback) {
    chrome.extension.sendMessage(obj, callback);
}

FBrowserChrome.prototype.inlinerPostMessage = function(data) {
	this.inlinerPort.postMessage(data);
}

FBrowserChrome.prototype.openNewTab = function(url) {
	chrome.tabs.create({"url": url});
}

FBrowserChrome.prototype.addOnRequestListener = function(onRequestListener) {
	chrome.extension.onRequest.addListener(onRequestListener);
}

FBrowserChrome.prototype.getVersion = function(callback) {
	var version = chrome.app.getDetails().version;
	if (callback) {
		callback(version);
	}
	return version;
}

FBrowserChrome.prototype.createContextMenus = function(title, callback, selection) {
	var obj = {};
	obj.title = title;
	obj.onclick = callback;
	if(selection){
		obj.contexts = ["selection"];
	}
	return chrome.contextMenus.create(obj);
}

FBrowserChrome.prototype.removeContextMenus = function(menu) {
	try{ if(menu) chrome.contextMenus.remove(menu);} catch(ex){}
}

FBrowserChrome.prototype.updateContextMenus = function(menu, title) {
	chrome.contextMenus.update(menu, {"title": title});
}

FBrowserChrome.prototype.addOnMessageListener = function(onMessageListener) {
	chrome.extension.onMessage.addListener(onMessageListener);
}

FBrowserChrome.prototype.executeForSelectedTab = function(windowId, tabFunction) {
	chrome.tabs.getSelected(null, tabFunction);
}

FBrowserChrome.prototype.portOnConnectListener = function(onConnectListener) {
	chrome.extension.onConnect.addListener(onConnectListener);
}

FBrowserChrome.prototype.executeScript = function(info, tab, callback) {
	chrome.tabs.executeScript(tab.id,{code:callback, allFrames:true});
}

FBrowserChrome.prototype.tabsSendMessage = function(tabID, msg) {
	chrome.tabs.sendMessage(tabID, msg);
}

FBrowserChrome.prototype.getPopUpURL = function(filePath, opt) {
	if(opt){
		return chrome.extension.getURL("content/html/options/" + filePath);
	}else{
		return chrome.extension.getURL("content/html/popup/" + filePath);
	}
}

FBrowserChrome.prototype.openPopUpByURL = function(file, s) {

	if(s!="undefined"){
//		s=s.replace(/%/g,"");
		var location = FExtension.browser.getPopUpURL(file, false) + "?text="+encodeURIComponent(s);
	} else
		var location = FExtension.browser.getPopUpURL(file, false);

	var winWidth = 480 ;
	var winHeight = 650 ;
	var posLeft = ( screen.width - winWidth ) / 2 ;
	var posTop = ( screen.height - winHeight ) / 2 ;
	var win = null;
	try{
	    win =  window.open( location,'ImTranslator','width=' + winWidth + ',height=' + winHeight +',top=' + posTop + ',left=' +
			posLeft +  ',resizable=yes,scrollbars=yes,toolbar=no,titlebar=no,' + 'location=no,directories=no,status=no,menubar=no,copyhistory=no');
	}catch(e){
		//alert(e);
		console.log(e);
	}
	return win;
}

FBrowserChrome.prototype.openPopUpWithAttributes = function(TOP, LEFT, HEIGHT, WIDTH, file, s) {

	if(s!="undefined"){
//		s=s.replace(/%/g,"");
		var location = FExtension.browser.getPopUpURL(file, false) + "?text="+encodeURIComponent(s);
	} else
		var location = FExtension.browser.getPopUpURL(file, false);

	var winWidth = WIDTH; //480 ;
	var winHeight = HEIGHT; //650 ;
	var posLeft = LEFT;
	var posTop = TOP;
	var win = null;
	try{
	    win =  window.open( location,'ImTranslator','width=' + winWidth + ',height=' + winHeight +',top=' + posTop + ',left=' +
			posLeft +  ',resizable=yes,scrollbars=yes,toolbar=no,titlebar=no,' + 'location=no,directories=no,status=no,menubar=no,copyhistory=no');
	}catch(e){
		//alert(e);
		console.log(e);
	}
	return win;
}


FBrowserChrome.prototype.getCurrentUrl = function(tab){
	try{
		return tab.url;
	}catch(e){
		return '';
	}
}

FBrowserChrome.prototype.getSelectionText = function() {
	var selection = "";
	return selection;
}

FBrowserChrome.prototype.initFBrowserChrome = function() {
	// Call parent class implementation first
	this.initFBrowser();
}

FBrowserChrome.prototype.refreshSettings = function() {
    ImTranslator_inliner.refreshInlineSettings()
}

FExtension.browser = new FBrowserChrome();