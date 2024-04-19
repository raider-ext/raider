/**
 * Default FBrowserInjectChrome ctor.
 * Creates instance of FBrowserInjectChrome class that contains ALL Chrome browser-specific implementation  
 *         of the core browser functionality required for the rest of the code.
 *
 * @param {String} siteDomain The domain name of the site.
 */
function FBrowserInjectChrome() {
	this.initFBrowserInjectChrome();
}
	
FBrowserInjectChrome.prototype = FExtension.extend(FBrowserInject.prototype, FBrowserInjectChrome);

FBrowserInjectChrome.prototype.inlinerPort = null;

FBrowserInjectChrome.prototype.getBrowserName = function(){
    return 'chrome';
}

FBrowserInjectChrome.prototype.inlinerPortListener = function(callback) {
	this.inlinerPort = chrome.extension.connect({name: "iminliner"});
	this.inlinerPort.onMessage.addListener(callback);
}

FBrowserInjectChrome.prototype.inlinerPostMessage = function(data) {
	this.inlinerPort.postMessage(data);
}

FBrowserInjectChrome.prototype.stopInlinerPort = function(port, callback) {
    try{
	if (typeof this.inlinerPort != "undefined" && this.inlinerPort != null) {
		this.inlinerPort.disconnect();
	}
    }catch(e){}
}

FBrowserInjectChrome.prototype.initFBrowserInjectChrome = function() {
	// Call parent class implementation first
	this.initFBrowserInject();
}

FBrowserInjectChrome.prototype.isLocalStoragePreset = function() {
	return true;
};

FBrowserInjectChrome.prototype.openNewTab = function(url) {
	chrome.tabs.create({"url": url});
}

FBrowserInjectChrome.prototype.runtimeSendMessage = function(msg, callback) {
	chrome.runtime.sendMessage(msg, callback);
}

FBrowserInjectChrome.prototype.extensionSendMessage = function(msg, callback) {
    try{
	chrome.extension.sendMessage(msg, callback);
    }catch(e){}
}

FBrowserInjectChrome.prototype.setEvent = function(e) {
}



FBrowserInjectChrome.prototype.getDocument = function() {
    try{
        var text = document.getSelection().toString();
        if (text == "") {
            if(self.frames.length > 0){
                var selectedTexts = [];
                Array.prototype.forEach.call(window.frames, function(frameWin) {
                    selectedTexts.push( frameWin.getSelection().toString() );
                });
                for(var i = 0; i < self.frames.length; i++){
                    if(self.frames[i].getSelection){
                        text = self.frames[i].getSelection() + "";
                        if(text != ""){
                            return self.frames[i].document;
                        }
                    }
                }
            }
        }
        return document;
    }catch(e){
        return document;
    }
}





FBrowserInjectChrome.prototype.getDocuments = function() {
    var docs = [];
    docs.push(document);
    //var browser = gBrowser.getBrowserAtIndex(gBrowser.mTabContainer.selectedIndex);
    //var doc= browser.docShell.document;
    try{
        if(window.frames.length > 0){
            for(var i = 0; i < window.frames.length; i++){
                docs.push(window.frames[i].document);
            }
        }
        return docs;
    }catch(e){
        return docs;
    }
}

FBrowserInjectChrome.prototype.getSelectionText = function() {
    try{
        var text = window.getSelection().toString();
	//text = text.replace(/(<([^>]+)>)/ig, '');


	text = text.replace(/</ig, ' ');
	text = text.replace(/>/ig, ' ');

        if (text == "") {
            var selectedTexts = [];
            Array.prototype.forEach.call(window.frames, function(frameWin) {
                selectedTexts.push( frameWin.getSelection().toString() );
            });
            if(self.frames.length > 0){
                for(var i = 0; i < self.frames.length; i++){
                    text = self.frames[i].getSelection() + "";
                    if(text != ""){
                        break;
                    }
                }
            }
        }
        return text;
    }catch(e){
        return text;
    }
}

FBrowserInjectChrome.prototype.getSelection = function(doc) {
    try{
        var text = doc.getSelection().toString();
        if (text == "") {
            if(self.frames.length > 0){
                var selectedTexts = [];
                Array.prototype.forEach.call(window.frames, function(frameWin) {
                    selectedTexts.push( frameWin.getSelection().toString() );
                });
                for(var i = 0; i < self.frames.length; i++){
                    if(self.frames[i].getSelection){
                        text = self.frames[i].getSelection() + "";
                        if(text != ""){
                            return self.frames[i].getSelection();
                        }
                    }
                }
            }
        }
        return doc.getSelection();
    }catch(e){
        return  doc.getSelection();
    }
}

FBrowserInjectChrome.prototype.setStyle = function(){}

FBrowserInjectChrome.prototype.getURL = function(filePath, opt) {
	if(typeof opt == "undefined"){
		return chrome.extension.getURL(filePath);
	}
	if(opt){
		return chrome.extension.getURL("content/html/options/" + filePath);
	}else{
		return chrome.extension.getURL("content/html/options/" + filePath);
	}
	//return chrome.extension.getURL(filePath);
}

FBrowserInjectChrome.prototype.extensionSendRequest = function(data, callback) {
	chrome.extension.sendRequest(data, callback);
}

FBrowserInjectChrome.prototype.addOnRequestListener = function(onRequestListener) {
	chrome.extension.onRequest.addListener(onRequestListener);
}

FBrowserInjectChrome.prototype.addOnMessageListener = function(onMessageListener) {
    chrome.extension.onMessage.addListener(onMessageListener);
}

FBrowserInjectChrome.prototype.modifySentence = function(selection, doc, replace) {

    if(googleText.length == 0){
        return;
    }
    selection.modify("extend", "forward", "sentence");
    var text = selection.toString();

    while(text.length > 0 && (text[0] == '\n' || text[0] == '\r' || text[0] == '\t' || text[0] == ' ')){
        text = text.substr(1, text.length);
        if(text.length == 0){
            selection.collapseToEnd();
            selection.modify("extend", "forward", "sentence");
            text = selection.toString();
            //break;
        }
    }

    if(replace){
        if(text.length <= googleText.length && googleText.indexOf(text) > -1){
            googleText = googleText.replace(text, "");
        }else{
            var originalRange = selection.getRangeAt(0).cloneRange();
            selection.collapseToStart();
            //selection.modify("extend", "backward", "sentence");
            selection.modify('extend', 'forward', 'character');
            text = selection.toString();
            while(googleText.indexOf(text) > -1){
                selection.modify('extend', 'forward', 'character');
                text = selection.toString();
            }
            selection.modify('extend', 'backward', 'character');
            googleText = "";
        }
    }
    /*var text = selection.toString();
    while(text == '\n' || text == '\r' || text == '\t' || text == ''){
        if(text == '')
            selection.collapseToStart();
        else
            selection.collapseToEnd();
        selection.modify("extend", "forward", "sentence");
        text = selection.toString();
    }
    while(googleText[0] == '\n' || googleText[0] == '\r'){
        googleText = googleText.substr(1);
    }
    if(replace){
        if(text.length <= googleText.length){
            var textArray = googleText.split(text);
            while(textArray[0] == ""){
                textArray.splice(0, 1);
            }
            googleText = textArray.length > 0 ? textArray[0] : "";
            //googleText = textArray.length > 1 ? textArray[1] : textArray[0];
        }else{
            selection.modify("extend", "backward", "sentence");
            text = selection.toString();
            while(text.length <= googleText.length){
                selection.modify('extend', 'forward', 'character');
                text = selection.toString();
                if(googleText == text){
                    googleText = googleText.replace(text, "");
                    break;
                }
            }
        }
    }*/
}

FBrowserInjectChrome.prototype.refreshSelection = function(selection, originalRange) {}

FBrowserInjectChrome.prototype.getSentence = function(doc, selection){
    return "";
}

FBrowserInjectChrome.prototype.getNextNode = function(doc){}

FExtension.browserInject = new FBrowserInjectChrome();
FExtension.browser = FExtension.browserInject;