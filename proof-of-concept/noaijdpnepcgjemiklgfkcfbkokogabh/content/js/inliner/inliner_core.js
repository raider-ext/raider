//default language
var DetLang = "en";
var dictionary = false;
var dictionaryWord = "";
var historySentense = "";
var googleText = "";
var SL_SEGMENTS = 150;
var SL_SEGMENTS_FLAG = 0;
var SL_SEGMENTS_CNT = 0;
// initializes inliner variables, remembers user selection bounds.
// call once at the very begining.
// returns 0 on success, -1 otherwise (means 'nothing selected')
function inlinerCoreInit(doc) {
    var selection = FExtension.browserInject.getSelection(doc);
    var text = inlinerUtilTrimString(selection.toString());
    googleText = "";
    if (text == "") {
        return -1;
    }

    dictionary = false;
    historySentense = dictionaryWord = "";
    if(inlinerInjectDictionary){
        var origText = text.replace(/[\.,-\/#!$%\^&\*;:{}=\-_—`~()""'«»]/g,"");
        var t = origText.split ('\r'), s = t.join ('');

        t = s.split ('\n'); s = t.join (' ');
        t = s.split ('\t'); s = t.join (' ');

        while (s.indexOf ('  ') >= 0)
        {
            t = s.split ('  '); s = t.join (' ')
        }
        if (s.charAt (0) == ' ') s = s.substr (1);
        if (s.charAt (s.length - 1) == ' ') s = s.substring (0, s.length - 1);

        var q = s.split (' ');
        if(q.length == 1 && q[0] != ""){
            dictionaryWord = q[0];
            dictionary = true;
        }
    }
    //var words = text.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(/[\s,\.]+/gm);

    clearWhitespase(doc);

/*
        clearWhitespase(doc);
        if (inlinerInjectWholeWord) {
            snapSelectionToWord(doc);
        }
*/
        clearOriginalSentence(doc, selection);
        clearTranslateSentence(doc, selection);
        text = inlinerUtilTrimString(selection.toString());
        if (text == "") {
            return -1;
        }

    historySentense = googleText = text;
    selection = FExtension.browserInject.getSelection(doc);

    doc.inlinerUserRange = selection.getRangeAt(0).cloneRange();
    doc.inlinerInfinityGuard = SL_SEGMENTS;

    selection.collapseToStart();
    try {
        FExtension.browserInject.modifySentence(selection, doc, false);
    } catch (e) {
        console.log(e);
    }
    var boundaryCheck = doc.inlinerUserRange.compareBoundaryPoints(Range.END_TO_END, selection.getRangeAt(0));
    doc.inlinerSimpleRange = (boundaryCheck <= 0);


    inlinerCoreSelect(doc, doc.inlinerUserRange, !doc.inlinerSimpleRange);
    return 0;
}

//clear old inliner sentece into selection
function clearTranslateSentence(doc, selection) {
    var range = selection.getRangeAt(0);
    var inlines = doc.getElementsByClassName('im-inliner-dst-text');
    for (var i = 0; i < inlines.length; i++) {
        if (selection.containsNode(inlines[i], false)
            || inlines[i] == range.endContainer.parentElement || inlines[i] == range.endContainer
            || inlines[i] == range.startContainer || inlines[i] == range.startContainer.parentElement) {
            try {
                inlines[i].parentNode.removeChild(inlines[i]);
            } catch (e) {
                inlines[i].remove();
            }
            i = -1;
        }
    }
}

//replace origin element on text sentece into selection
function clearOriginalSentence(doc, selection) {
    var range = selection.getRangeAt(0);
    var inlines = doc.getElementsByClassName('im-inliner-orig-text');
    for (var i = 0; i < inlines.length; i++) {
        if (selection.containsNode(inlines[i], false)
            || inlines[i] == range.endContainer.parentElement || inlines[i] == range.endContainer
            || inlines[i] == range.startContainer || inlines[i] == range.startContainer.parentElement) {
            var text = doc.createTextNode('');
            text.textContent = inlines[i].textContent;
            inlines[i].parentNode.replaceChild(text, inlines[i])
            i -= 1;
        }
    }
}

// extracted solely for inliner for iPhone/iPad
// used there to re-select the text after user interaction is disabled
function inlinerCoreSelect(doc, range, collapse) {
    var selection = FExtension.browserInject.getSelection(doc);
    selection.removeAllRanges();
    selection.addRange(range.cloneRange());
    if (collapse) {
        selection.collapseToStart();
    }
}

// selects next sentence
// does nothing and returns 'success' if the very small piece of text was selected.
// does nothing and returns 'failure' if user selection boundary reached or infinity guard zeroed (max 150 calls in a row supported)
// call immediately after inlinerCoreInit() and after each inlinerCoreInjectTranslation()
// may select "empty" sentence, in this case just call the method again
// returns 0 on success, -1 otherwise (means 'stop now')
function inlinerCoreSelectNextSentence(doc) {
    SL_SEGMENTS_CNT = SL_SEGMENTS;
    if (doc.inlinerSimpleRange) { // just do nothing if only part of sentence was selected
        // if nothing is actually selected then stop (also means we translated simple range already)
        return (inlinerCoreGetSelectedText(doc, true) != 0) ? 0 : -1;
    }
    var selection = FExtension.browserInject.getSelection(doc);
    var sentence = FExtension.browserInject.getSentence(doc, selection);
    doc.inlinerInfinityGuard--;

    selection = FExtension.browserInject.getSelection(doc);
    try {
        var sel = FExtension.browserInject.modifySentence(selection, doc, true);
    } catch (e) {
        console.log(e);
    }

    var boundaryCheck = doc.inlinerUserRange.compareBoundaryPoints(Range.START_TO_END, selection.getRangeAt(0));

    if(selection.getRangeAt(0)=="" && boundaryCheck == 1) {boundaryCheck=-1;}

    SL_SEGMENTS_FLAG=0;
//        console.log(doc.inlinerInfinityGuard + " : " +boundaryCheck + " > " +selection.getRangeAt(0));
    if (doc.inlinerInfinityGuard < 0) SL_SEGMENTS_FLAG=1;
    if ((doc.inlinerInfinityGuard < 0 || boundaryCheck <= 0)
        || FExtension.browserInject.getBrowserName() == 'firefox' && sel != sentence){// && (doc.inlinerInfinityGuard < 0 || boundaryCheck <= 0) //&& sel1 != sentence) {
        selection.removeAllRanges();
	delete(doc.inlinerUserRange);
        SL_SEGMENTS_CNT = doc.inlinerInfinityGuard;
        doc.inlinerInfinityGuard = SL_SEGMENTS;
        return -1;
    }

    inlinerUtilTrimSelection(selection);
    return 0;
}

// injects a block of text (translation) directly after current selection (original text)
// alternatively (before == true) translation is injected before original text
// translation can be optionally surrounded by brackets
// call after inlinerCoreSelectNextSentence() + inlinerCoreGetSelectedText()
// returns 0 always
function inlinerCoreInjectTranslation(doc, translation, style, before, brackets, lineBreak) {

    SL_SEGMENTS_CNT = SL_SEGMENTS;
    var cleanText = translation.replace(/&quot;/g, "\"").replace(/&#39;/g, "'").replace(/&amp;/g, "&");
    cleanText = cleanText.replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/<br>/g, "\n");

    var translationText;
    if (brackets) {
        translationText = doc.createTextNode(" [" + cleanText + "] ");
        //} else if (before) {
        //    translationText = doc.createTextNode(cleanText + " ");
    } else {
        //translationText = doc.createTextNode(" " + cleanText);
        translationText = doc.createTextNode(cleanText);
    }
    var translationNode = doc.createElement("inliner");
    translationNode.setAttribute("class", "im-inliner-dst-text");
    if (style != '') {
        translationNode.setAttribute("style", "color: #" + style + ";");
    }

    //insert top break
    var brTop = null;
    if (lineBreak) {
        brTop = doc.createElement("br");
        brTop.setAttribute("class", "im-inliner-br-top");
        translationNode.appendChild(brTop);
    }
    //insert translation text
    translationNode.appendChild(translationText);

    //insert bottom break
    var brBottom = null;
    if (lineBreak) {
        brBottom = doc.createElement("br");
        brBottom.setAttribute("class", "im-inliner-br-bottom");
        translationNode.appendChild(brBottom);
    }

    var selection = FExtension.browserInject.getSelection(doc);

    inlinerUtilTrimSelection(selection);

    //hide origin text
    if (inlinerInjectHideTranslation) {
            var range = selection.getRangeAt(0);
            var span = doc.createElement("span");
            span.setAttribute("class", "im-inliner-orig-text");
        try{
            range.surroundContents(span);
        }catch(e){
            var selectionContents = range.extractContents();
            span.appendChild(selectionContents);
            range.insertNode(span);
        }
    }

    if (before) {
        if (inlinerInjectHideTranslation) {
            selection.collapseToEnd();
            span.parentElement.insertBefore(translationNode, span);
            selection.removeAllRanges();
            var origRange = doc.createRange();
            origRange.selectNode(translationNode);
        } else {
            var origRange = selection.getRangeAt(0);
            selection.getRangeAt(0).insertNode(translationNode);
            selection.removeAllRanges();
        }
        selection.addRange(origRange);
    } else {
        try {
            selection.collapseToEnd();
        } catch (e) {
            console.log(e);
        }
        if (inlinerInjectHideTranslation) {
            span.parentElement.insertBefore(translationNode, span.nextSibling);
        } else {
            selection.getRangeAt(0).insertNode(translationNode);
        }
        selection.removeAllRanges();
        var newRange = doc.createRange();
        newRange.selectNode(translationNode);
        selection.addRange(newRange);
    }

    //calculate top and bottom break style
    if (brTop) {
        brTop.setAttribute("style", "display:" + calculateTopBreak(translationNode, before) + ";");
    }
    if (brBottom) {
        brBottom.setAttribute("style", "display:" + calculateBottomBreak(translationNode, before) + ";");
    }

    inlinerUtilExpandSelection(selection); // includes trailing whitespaces into the selection
    selection.collapseToEnd();

    return 0;
}

tagsBreak = ['DIV', 'P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'BR'];
//calculate visibility bottom tag <br>
function calculateBottomBreak(translationNode, before) {
    if (translationNode.nextSibling == null) {
        if (!before) {
            return 'none';
        }
    }
    if (translationNode.nextSibling != null) {
        if (!before && tagsBreak.indexOf(translationNode.nextSibling.tagName) != -1) {
            return 'none';
        }
        if (translationNode.nextSibling.nodeType == 3) {
            if (translationNode.nextSibling.nodeValue == "" || translationNode.nextSibling.nodeValue == "\n") {
                return 'none';
            }
        }
    }
    return 'block';
}

//calculate visibility top tag <br>
function calculateTopBreak(translationNode, before) {
    if (translationNode.previousSibling == null) {
        if (before) {
            return 'none';
        }
    }
    if (translationNode.previousSibling != null) {
        if (inlinerInjectHideTranslation) {
            if (translationNode.previousSibling.className == "im-inliner-orig-text") {
                return 'none';
            }
        }

        if (before && tagsBreak.indexOf(translationNode.previousSibling.tagName) != -1) {
            return 'none';
        }
        if (translationNode.previousSibling.nodeType == 3) {
            if (before && (translationNode.previousSibling.nodeValue == "" || translationNode.previousSibling.nodeValue == "\n")) {
                return 'none';
            }
        }
    }
    return 'block';
}

// removes all injected translation blocks (elements with class="im-inliner-dst-text")
// returns 0 always
function inlinerCoreClean(doc) {
    var nodes = doc.getElementsByClassName('im-inliner-dst-text');
    while (nodes.length > 0) {
        nodes[0].parentNode.removeChild(nodes[0]);
    }
    return 0;
}

// retrieves current selection, converts it to string and trims it
// returns trimmed selected string
function inlinerCoreGetSelectedText(doc, trim) {
    var selection = FExtension.browserInject.getSelection(doc);
    return (trim) ? inlinerUtilTrimString(selection + "") : selection + "";
}

// ==== Utils ====
function inlinerUtilTrimString(str) {
    return str.replace(/^\s*/, "").replace(/\s*$/, "");
}

function inlinerUtilTrimSelection(selection) {
    if (inlinerUtilTrimString(selection + "") == "") {
        try {
            selection.collapseToEnd();
        } catch (e) {
            console.log(e);
        }
        return;
    }

    var originalRange = selection.getRangeAt(0).cloneRange();
    FExtension.browserInject.refreshSelection(selection, originalRange);

    selection.collapseToStart();
    selection.modify('extend', 'forward', 'character');
    while (!selection.toString().match(/\S/)) {
        selection.modify('extend', 'forward', 'character');
    }
    selection.collapseToEnd();
    selection.modify('move', 'backward', 'character');
    var startRange = selection.getRangeAt(0).cloneRange();

    selection.removeAllRanges();
    selection.addRange(originalRange);

    selection.collapseToEnd();
    selection.modify('extend', 'backward', 'character');
    while (!selection.toString().match(/\S/)) {
        selection.modify('extend', 'backward', 'character');
    }
    selection.collapseToStart();
    selection.modify('move', 'forward', 'character');
    var endRange = selection.getRangeAt(0).cloneRange();

    originalRange.setStart(startRange.startContainer, startRange.startOffset);
    originalRange.setEnd(endRange.endContainer, endRange.endOffset);

    selection.removeAllRanges();
    selection.addRange(originalRange);
}

function inlinerUtilExpandSelection(selection) {
    var originalRange = selection.getRangeAt(0).cloneRange();

    selection.collapseToEnd();
    selection.modify('extend', 'forward', 'character');
    var guard = 150;
    // following loop can run endlessly if the sentence selected is the very last at the page, so we need a guard here
    while (!selection.toString().match(/\S/) && guard > 0) {
        selection.modify('extend', 'forward', 'character');
        guard--;
    }
    selection.collapseToEnd();
    if (guard > 0) {
        selection.modify('move', 'backward', 'character');
    }

    var workRange = selection.getRangeAt(0).cloneRange();
    originalRange.setEnd(workRange.endContainer, workRange.endOffset);
    selection.removeAllRanges();
    selection.addRange(originalRange);
}

function snapSelectionToWord(doc) {
    // Check for existence of window.getSelection() and that it has a
    // modify() method. IE 9 has both selection APIs but no modify() method.
    if (window.getSelection && (selection = window.getSelection()).modify) {
        var selection = FExtension.browserInject.getSelection(doc);;
        if (!selection.isCollapsed) {
            // Detect if selection is backwards
            var originalRange = selection.getRangeAt(0).cloneRange();
            selection.collapseToStart();
            selection.modify('extend', 'backward', 'character');
            var i = 0;
            if(selection.toString()[0] != ""){
                while (!selection.toString().match(/\s/)) {
                    i = selection.toString() == "" ? (i+1) : 0;
                    selection.modify('extend', 'backward', 'character');
                    if(i > 100){
                        break;
                    }
                }
            }
            selection.modify('extend', 'forward', 'character');

            var startRange = selection.getRangeAt(0).cloneRange();

            selection.removeAllRanges();
            selection.addRange(originalRange);

            selection.collapseToEnd();
            selection.modify('extend', 'forward', 'character');
            i = 0;
            if(selection.toString()[0] != ""){
                while (!selection.toString().match(/\s/)) {
                    i = selection.toString() == "" ? (i+1) : 0;
                    selection.modify('extend', 'forward', 'character');
                    if(i > 100){
                        break;
                    }
                }
            }
            selection.modify('extend', 'backward', 'character');
            var endRange = selection.getRangeAt(0).cloneRange();

            originalRange.setStart(startRange.startContainer, startRange.startOffset);
            if(i > 100){
                originalRange.setEnd(originalRange.endContainer, originalRange.endOffset);
            }else{
                originalRange.setEnd(endRange.endContainer, endRange.endOffset);
            }

            selection.removeAllRanges();
            selection.addRange(originalRange);
        }
    }
}

function clearWhitespase(doc) {
    var sel;
    // Check for existence of window.getSelection() and that it has a
    // modify() method. IE 9 has both selection APIs but no modify() method.
    if (window.getSelection && (window.getSelection()).modify) {
        var sel = FExtension.browserInject.getSelection(doc);;
        if (!sel.isCollapsed) {
            var sourceRange = sel.getRangeAt(0).cloneRange();
            var sourceText = sel.toString();

            var selection = sel.toString();
            var originalRange = sel.getRangeAt(0).cloneRange();
            sel.collapseToStart();

            if(FExtension.browserInject.getBrowserName() == 'firefox'){
                var selection = selection[0];
                while (selection.toString()[0] == " ") {
                    sel.modify("move", 'forward', "character");

                    var originalRange1 = sel.getRangeAt(0).cloneRange();
                    originalRange1.setEnd(originalRange.endContainer, originalRange.endOffset);
                    sel.removeAllRanges();
                    sel.addRange(originalRange1);
                    selection = sel.toString();

                    if(sel.anchorNode != sel.focusNode){
                        sel.collapseToStart();
                        sel.modify("move", 'forward', "character");
                        var originalRange1 = sel.getRangeAt(0).cloneRange();
                        originalRange1.setEnd(originalRange.endContainer, originalRange.endOffset);
                        sel.removeAllRanges();
                        sel.addRange(originalRange1);

                        selection = sel.toString();
                        sel.collapseToStart();
                    }
                }

                var originalRange1 = sel.getRangeAt(0).cloneRange();
                originalRange1.setEnd(originalRange.endContainer, originalRange.endOffset);
                sel.removeAllRanges();
                sel.addRange(originalRange1);

                selection = sel.toString();
                sel.collapseToEnd();
                while (selection[selection.length - 1] == " ") {
                    sel.modify("move", 'backward', "character");
                    selection = sel.toString();
                }

                var originalRange2 = sel.getRangeAt(0).cloneRange();
                originalRange2.setStart(originalRange1.startContainer, originalRange1.startOffset);
                originalRange2.setEnd(originalRange2.endContainer, originalRange2.endOffset);
                sel.removeAllRanges();
                sel.addRange(originalRange2);

            }else{
                //****************
                //old version
                //***************
                var startRange = sel.getRangeAt(0).cloneRange();
                var selection = selection[0];
                var startOffset = -1;
                while (selection.toString()[0] == " ") {
                    sel.modify("extend", 'forward', "character");
                    startOffset = startRange.startOffset + 1;
                    startRange.setStart(startRange.startContainer, startOffset);
                    sel.removeAllRanges();
                    sel.addRange(startRange);
                    selection = sel.toString();
                }
                //if(startOffset> -1 && startOffset < sel.anchorOffset){
                //    var startRange = originalRange;
                //}else{
                    var startRange = sel.getRangeAt(0).cloneRange();
                //}

                sel.removeAllRanges();
                sel.addRange(originalRange);
                selection = sel.toString();
                while (selection[selection.length - 1] == " ") {
                    sel.modify("extend", 'backward', "character");                    
                    selection = sel.toString();
                }

                var endRange = sel.getRangeAt(0).cloneRange();

                originalRange.setStart(startRange.startContainer, startRange.startOffset);
                originalRange.setEnd(endRange.endContainer, endRange.endOffset);

                sel.removeAllRanges();
                sel.addRange(originalRange);

                var text = sourceText.split(sel.toString());
                text = text[0].replace(/\s/g, "");
                if(text.length > 0){
                    sel.removeAllRanges();
                    sel.addRange(sourceRange);
                }
            }
        }
    }
}

/***********************************************************************************/