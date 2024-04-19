var inlinerUserStyle = "";
var inlinerInjectBefore = false;
var inlinerInjectBrackets = true;
var inlinerInjectLineBreak = false;
var inlinerInjectWholeWord = false;
var inlinerInjectHideTranslation = false;
var inlinerInjectDictionary = false;
var SL_ListOfAvailableLanguages = "";
var SL_langSrc = "auto";
var SL_langDst = "en";
// ==== Message Management ====

FExtension.browserInject.getDocument().addEventListener('mousedown',function(e){inlinerInjectStop();},!1);
       


//request inliner settings from background
function inlinerInjectHandleMessage(msgEvent) {
    if (msgEvent.name == "inlinerSelectionResponse") {

        /* By VK (I removed this block to avoid braking the translation process oo blank segment

         if (typeof msgEvent.message == "undefined" || msgEvent.message.length == 0) {
         alert('Inline translation error: No translation received.');
         inlinerInjectStop();
         return;
         }
         */
        var doc = FExtension.browserInject.getDocument(true);
        inlinerCoreInjectTranslation(doc, msgEvent.message, inlinerUserStyle, inlinerInjectBefore, inlinerInjectBrackets, inlinerInjectLineBreak);
        FExtension.browserInject.getNextNode(doc);
        hideOriginText(doc);
        var sentence = inlinerInjectTranslateNextSentence(doc);

        if (sentence) {
            DODetectionLang(sentence);
            doc.currentSentence = sentence;
        }
    } else if (msgEvent.name == "styleDestinationValue") {
        inlinerUserStyle = msgEvent.message;
    } else if (msgEvent.name == "injectBeforeValue") {
        inlinerInjectBefore = (msgEvent.message == "true");
    } else if (msgEvent.name == "injectBracketsValue") {
        inlinerInjectBrackets = (msgEvent.message == "true");
    } else if (msgEvent.name == "injectLineBreak") {
        inlinerInjectLineBreak = (msgEvent.message == "true");
    } else if (msgEvent.name == "injectWholeWord") {
        inlinerInjectWholeWord = (msgEvent.message == "true");
    } else if (msgEvent.name == "injectHideTranslation") {
        inlinerInjectHideTranslation = (msgEvent.message == "true");
    } else if (msgEvent.name == "injectDictionary") {
        inlinerInjectDictionary = (msgEvent.message == "true");
    } else if (msgEvent.name == "updateSettings") {
        updateSettings();
    } else if (msgEvent.name == "inlinerInjectInliner") {
        inlinerInjectInliner();
    } else if (msgEvent.name == "injectLang") {
        SL_ListOfAvailableLanguages = msgEvent.message;
    } else if (msgEvent.name == "injectLangSrc") {
        SL_langSrc = msgEvent.message;
    } else if (msgEvent.name == "injectLangDst") {
        SL_langDst = msgEvent.message;
    } else if (msgEvent.name == "stop") {
        inlinerInjectStop();
        return;
    }
}

FExtension.browserInject.addOnMessageListener(
    function(request, sender, sendResponse){
        mainFunctionControl(request);
    }
);

function mainFunctionControl(request) {
    switch(request){
        case "inlinerInjectInliner":
            inlinerInjectInliner();
            break;
        case "inlinerInjectClean":
            inlinerInjectClean();
            break;
        case "inlinerInjectShowOrigin":
            inlinerInjectShowOrigin();
            break;
        case "refreshSettings":
            refreshSettings();
            break;
    }
}

// ==== Inliner ====
//start inliner process translation
function inlinerInjectInliner() {
    runinliner();
}
//inliner process translation
function runinliner() {
    var doc = FExtension.browserInject.getDocument(true);
    if (inlinerCoreInit(doc) == 0) {
        inlinerInjectCoverShow(doc);
        inlinerInjectInitPort();
        hideOriginText(doc);

        var sentence = inlinerInjectTranslateNextSentence(doc);

        if (sentence) {
            DODetectionLang(sentence);
            doc.currentSentence = sentence;
        } else {
            inlinerInjectStop();
        }

    }
}


function hideOriginText(doc) {
    if (inlinerInjectHideTranslation) {
        var nodes = doc.getElementsByClassName('im-inliner-orig-text');
        for (var i = 0; i < nodes.length; i++) {
            var orig = nodes[i];
            if (orig) {
                orig.style.display = "none";
            }
        }
    }
}

//get next sentence
function inlinerInjectTranslateNextSentence(doc) {
    var srcText = "";
    while (srcText == "") {
        if (inlinerCoreSelectNextSentence(doc) != 0) {
            if (SL_SEGMENTS_CNT < 0 && document.getElementById('inlinercovertext')) document.getElementById('inlinercovertext').innerText=FExtension.element(TranslatorIM.SL_LOC,"extInlineLimit").replace("XXX",SL_SEGMENTS);
	    else inlinerInjectStop();
            return null;
        }
        srcText = inlinerCoreGetSelectedText(doc, true);
    }
    return srcText;
}

function inlinerInjectClean() {
    var docs = FExtension.browserInject.getDocuments();
    docs.forEach(function(doc) {
        inlinerInjectShowOrigin(doc);
        inlinerCoreClean(doc);
    });
}
//show original text
function inlinerInjectShowOrigin() {   
    var docs = FExtension.browserInject.getDocuments();
    docs.forEach(function(doc) {
        var nodes = doc.getElementsByClassName('im-inliner-orig-text');

        for (var i = 0; i < nodes.length; i++) {
            var orig = nodes[i];
            if (orig) {
                //orig.style.display = "";
                var text = doc.createTextNode('');
                text.textContent = orig.textContent;
                orig.parentNode.replaceChild(text, orig)
                i -= 1;
            }
        }
        var tops = doc.getElementsByClassName('im-inliner-br-top');
        for (var i = 0; i < tops.length; i++) {
            var top = tops[i];
            if (top) {
                top.style.display = "";
            }
        }
        var bottoms = doc.getElementsByClassName('im-inliner-br-bottom');
        for (var i = 0; i < bottoms.length; i++) {
            var bottom = bottoms[i];
            if (bottom) {
                bottom.style.display = "";
            }
        }
        var texts = doc.getElementsByClassName('im-inliner-dst-text');
        for (var i = 0; i < texts.length; i++) {
            var text = texts[i];
            if (text) {
                var brs = text.getElementsByTagName('br');
                for (var j = 0; j < brs.length; j++) {
                    var br = brs[j];
                    if (br.className == "im-inliner-br-top") {
                        br.style.display = calculateTopBreak(text, inlinerInjectBefore);
                    }
                    if (br.className == "im-inliner-br-bottom") {
                        br.style.display = calculateBottomBreak(text, inlinerInjectBefore);
                    }
                }
            }
        }
    });
}

// ==== Cover ====

function inlinerInjectPutInCenter(element, doc) {
    var rootElm = doc.body;
    var vpw = self.innerWidth ? self.innerWidth : rootElm.clientWidth; // viewport width
    var vph = self.innerHeight ? self.innerHeight : rootElm.clientHeight; // viewport height
    var myDiv = element;
    myDiv.style.position = 'absolute';
    myDiv.style.left = ((vpw - 100) / 2) + 'px';
    var bodyScrollTop = doc.documentElement.scrollTop || rootElm.scrollTop;
    myDiv.style.top = (bodyScrollTop + (vph - 100) / 2 ) + 'px';
}

function inlinerInjectCoverShow(doc) {
    // - cover -
    var cover = doc.createElement('div');
    cover.id = "inliner_removable_cover";
    cover.style.height =doc.documentElement.scrollHeight + "px";
    cover.setAttribute("onmousedown", "var event = arguments[0] || window.event; event.preventDefault();");

    var coverText = doc.createElement('div');
    coverText.id = "inlinercovertext";
    coverText.appendChild(doc.createTextNode(""));

    cover.appendChild(coverText);
    doc.body.appendChild(cover);

    inlinerInjectPutInCenter(coverText, doc);
    doc.getElementById(coverText.id).innerText = FExtension.element(TranslatorIM.SL_LOC,"extTranslating")+" ...";
}

function inlinerInjectCoverHide() {
    var docs = FExtension.browserInject.getDocuments();
    docs.forEach(function(doc) {
        try{
            var cover = doc.getElementById('inliner_removable_cover');
            if (typeof cover != "undefined" && cover.parentNode && cover.parentNode.contains(cover)) {
                cover.parentNode.removeChild(cover);
            }
        }catch(e){}
    });
}

function inlinerInjectStop() {
    FExtension.browserInject.stopInlinerPort();
    inlinerInjectCoverHide();

    var IS_INLINER = FExtension.browserInject.getDocument().getElementsByTagName("inliner").length;
    if(IS_INLINER > 0){
	    chrome.runtime.sendMessage({greeting: "Clear"}, function(response) {
 		  //console.log(response.farewell);
	    });
    }
}

// ==== Initial ====
//var inlinerPort;
function inlinerInjectInitPort() {
    FExtension.browserInject.stopInlinerPort();
    FExtension.browserInject.inlinerPortListener(inlinerInjectHandleMessage);
}

//init inliner
function init() {
    updateSettings();		
}
//update inliner settings
function updateSettings() {
    inlinerInjectInitPort();
    FExtension.browserInject.inlinerPostMessage({name: "shortcutInlinerSelectionRequest"});
    FExtension.browserInject.inlinerPostMessage({name: "shortcutInlinerCleanRequest"});
    FExtension.browserInject.inlinerPostMessage({name: "styleDestinationRequest"});
    FExtension.browserInject.inlinerPostMessage({name: "injectBeforeRequest"});
    FExtension.browserInject.inlinerPostMessage({name: "injectBracketsRequest"});
    FExtension.browserInject.inlinerPostMessage({name: "injectLineBreak"});
    FExtension.browserInject.inlinerPostMessage({name: "injectWholeWord"});
    FExtension.browserInject.inlinerPostMessage({name: "injectHideTranslation"});
    FExtension.browserInject.inlinerPostMessage({name: "injectLang"});
    FExtension.browserInject.inlinerPostMessage({name: "injectLangSrc"});
    FExtension.browserInject.inlinerPostMessage({name: "injectDictionary"});
    FExtension.browserInject.inlinerPostMessage({name: "injectLangDst"});
}
//update inliner settings after save
function refreshSettings() {
    updateSettings();
}

// filtering out weird pages (like facebook blocks on dn.se)
if (FExtension.browserInject.getDocument().body != null) {
    init();
}

