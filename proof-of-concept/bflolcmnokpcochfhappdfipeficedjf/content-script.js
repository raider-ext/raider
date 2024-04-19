// this content-script plays role of medium to publish/subscribe messages from webpage to the background script

// this object is used to make sure our extension isn't conflicted with irrelevant messages!
var rtcmulticonnectionMessages = {
    'are-you-there': true,
    'mvb-get-sourceId': true,
    'get-sourceId': true,
    'audio-plus-tab': true,
    'mvb-classroom-get-sourceId': true,
    'mvb-ext-log-out': true
};
// this port connects with background script
var port = chrome.runtime.connect();
// if background script sent a message
port.onMessage.addListener(function (message) {
    // get message from background script and forward to the webpage
    window.postMessage(message, '*');
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // do something with msgObj
    window.postMessage(message, '*');

    // Run sendResponse() even if it is not used,
    // otherwise you will get an error message:
    // "The message port closed before a response was received."
    sendResponse({
        "from": "content-script.js"
    });
});

// this event handler watches for messages sent from the webpage
// it receives those messages and forwards to background script
window.addEventListener('message', function (event) {
    // if invalid source
    if (event.data == 'mvb-ext-log-out') {
        window.postMessage('mvb-ext-log-out-2', '*');
    }
    if (event.source != window)
        return;
    // it is 3rd party message
    if (!rtcmulticonnectionMessages[event.data]) return;
    // if browser is asking whether extension is available
    if (event.data === 'are-you-there') {
        window.postMessage('rtcmulticonnection-extension-loaded', '*');
    }

    // if it is something that need to be shared with background script
    if (event.data === 'mvb-get-sourceId'
        || event.data === 'get-sourceId'
        || event.data === 'audio-plus-tab'
        || event.data === 'mvb-classroom-get-sourceId'
        || event.data === 'scratch-capture-tab'
        //|| event.data === 'mvb-ext-log-out'
    ) {
        // forward message to background script
        port.postMessage(event.data);
    }
});

// inform browser that you're available!
window.postMessage('rtcmulticonnection-extension-loaded', '*');

////

/*
    Content scripts running at "document_idle" do not need to listen for the window.onload event,
    they are guaranteed to run after the DOM is complete. If a script definitely needs to run after window.onload,
    the extension can check if onload has already fired by using the document.readyState property.
    
    ref: https://developer.chrome.com/docs/extensions/mv2/content_scripts/

    //

    For some old and worst web page (e.g. https://toneoz.com/),
    we still need to use readystatechange event to detect the readyState if complete 
    and make sure the content script will execute after readyState ture to complete.
*/
document.addEventListener("readystatechange", function (event) {
    if (event.target.readyState === "complete") {
        (() => {
            "use strict";

            //

            class Extension {
                constructor() {
                    this.paintingToolboxRoot = document.createElement("div");
                    this.paintingToolboxIframe = document.createElement("iframe");

                    this.paintingCanvas = document.createElement("canvas");
                    this.paintingCanvasCtx = this.paintingCanvas.getContext("2d");

                    this.paintingCanvasBackUp = document.createElement("canvas");
                    this.paintingCanvasBackUpCtx = this.paintingCanvasBackUp.getContext("2d");

                    ////

                    this.enumBrushMode = {
                        "Basics": 0,
                        "PointBase": 1
                    };

                    this.brushMode = this.enumBrushMode.PointBase;

                    ////

                    this.isDrawing = false;
                    this.isDrawingDot = false;
                    this.isEraserMode = false;
                    this.isCursorMode = false;
                    this.dialogDOMRect = null;

                    this.prevX = 0;
                    this.currX = 0;
                    this.prevY = 0;
                    this.currY = 0;
                    this.points = [];

                    this.strokeStyle = "#000000ff";
                    this.eraserStyle = "#ffffffff";
                    this.lineWidth = 10;
                    this.eraserArc = 10;

                    ////

                    // left: 37, up: 38, right: 39, down: 40,
                    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
                    this.scrollRelevantKeys = [32, 33, 34, 35, 36, 37, 38, 39, 40];

                    // modern Chrome requires { passive: false } when adding event
                    let supportsPassive = false;

                    try {
                        window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                            get: function () { supportsPassive = true; }
                        }));
                    } catch (e) { }

                    this.wheelOpt = (supportsPassive)
                        ? ({ "passive": false })
                        : (false);

                    this.wheelEvent = ("onwheel" in document.createElement("div"))
                        ? ("wheel")
                        : ("mousewheel");

                    //

                    this.preventDefaultProcessHandler = this.preventDefaultProcess.bind(this);
                    this.preventDefaultScrollKeysProcessHandler = this.preventDefaultScrollKeysProcess.bind(this);

                    this.pointerDownEventProcessHandler = this.pointerDownEventProcess.bind(this);
                    this.pointerMoveEventProcessHandler = this.pointerMoveEventProcess.bind(this);
                    this.pointerUpEventProcessHandler = this.pointerUpEventProcess.bind(this);
                };

                //

                initPaintingToolboxRoot() {
                    this.paintingToolboxRoot.id = "painting-toolbox-root";
                    this.paintingToolboxRoot.style.cssText = `
                        position: fixed;
                        right: 0;
                        top: 0;
                        height: 100%;
                        width: 100%;
                        display: none;
                        align-items: center;
                        justify-content: center;
                        background-color: transparent;
                        z-index: 2147483647;
                        user-select: none;
                        -moz-user-select: none;
                        -webkit-user-select: none;
                        -ms-user-select: none;
                    `;

                    document.body.appendChild(this.paintingToolboxRoot);
                };

                initPaintingToolboxIframe() {
                    this.paintingToolboxIframe.id = "painting-toolbox-iframe";
                    this.paintingToolboxIframe.style.cssText = `
                        border: none;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                        z-index: 2147483647;
                    `;

                    // ⚠️ important: <iframe> src is chrome extension URL
                    this.paintingToolboxIframe.src = chrome.runtime.getURL("assets/extension/react-web-marker/index.html");

                    // add <iframe> to root element
                    this.paintingToolboxRoot.prepend(this.paintingToolboxIframe);
                };

                initPaintingCanvas() {
                    const self = this;

                    this.paintingCanvas.id = "painting-canvas";
                    this.paintingCanvas.width = window.innerWidth;
                    this.paintingCanvas.height = window.innerHeight;
                    this.paintingCanvas.style.cssText = `
                        top: 0;
                        left: 0;
                        position: absolute;
                        z-index: 2147483646;
                        display: none;
                        user-select: none;
                        -moz-user-select: none;
                        -webkit-user-select: none;
                        -ms-user-select: none;
                    `;

                    this.paintingCanvas.addEventListener("pointermove", function (event) {
                        if (!self.detectInDialogDOMRect(event)) {
                            self.findxy("move", event);
                        }
                    }, false);
                    this.paintingCanvas.addEventListener("pointerdown", function (event) {
                        if (!self.detectInDialogDOMRect(event)) {
                            self.findxy("down", event);
                        }
                    }, false);
                    this.paintingCanvas.addEventListener("pointerup", function (event) {
                        if (!self.detectInDialogDOMRect(event)) {
                            self.findxy("up", event);
                        }
                    }, false);
                    this.paintingCanvas.addEventListener("pointerleave", function (event) {
                        if (!self.detectInDialogDOMRect(event)) {
                            self.findxy("leave", event);
                        }
                    }, false);

                    document.body.appendChild(this.paintingCanvas);
                };

                initBodyResizeObserver() {
                    // create an Observer instance
                    const bodyResizeObserver = new ResizeObserver((entries) => {
                        if (!(this.paintingCanvas.width > 0) || !(this.paintingCanvas.height > 0)) {
                            return;
                        }

                        const bodyDOM = entries[0].target;

                        this.backupCanvas();

                        // Measure the maximum width, height and assign to this.paintingCanvas
                        this.paintingCanvas.width = (
                            (bodyDOM.scrollWidth > window.outerWidth)
                                ? bodyDOM.scrollWidth
                                : window.outerWidth
                        );

                        this.paintingCanvas.height = (
                            (bodyDOM.scrollHeight > window.outerHeight)
                                ? bodyDOM.scrollHeight
                                : window.outerHeight
                        );

                        this.restoreCanvas();
                    });

                    // start observing a DOM node
                    bodyResizeObserver.observe(document.getElementsByTagName("body")[0]);
                };

                //

                preventDefaultProcess(event) {
                    event.preventDefault();
                    return false;
                };

                preventDefaultScrollKeysProcess(event) {
                    if (this.scrollRelevantKeys.includes(event.keyCode)) {
                        this.preventDefaultProcess(event);
                        return false;
                    }
                };

                disableScroll() {
                    window.addEventListener("DOMMouseScroll", this.preventDefaultProcessHandler, false);            // older Firefox
                    window.addEventListener(this.wheelEvent, this.preventDefaultProcessHandler, this.wheelOpt);     // modern desktop
                    window.addEventListener("touchmove", this.preventDefaultProcessHandler, this.wheelOpt);         // mobile
                    window.addEventListener("pointermove", this.preventDefaultProcessHandler, this.wheelOpt);       // touchScreen
                    window.addEventListener("keydown", this.preventDefaultScrollKeysProcessHandler, false);
                };

                enableScroll() {
                    window.removeEventListener("DOMMouseScroll", this.preventDefaultProcessHandler, false);
                    window.removeEventListener(this.wheelEvent, this.preventDefaultProcessHandler, this.wheelOpt);
                    window.removeEventListener("touchmove", this.preventDefaultProcessHandler, this.wheelOpt);
                    window.removeEventListener("pointermove", this.preventDefaultProcessHandler, this.wheelOpt);
                    window.removeEventListener("keydown", this.preventDefaultScrollKeysProcessHandler, false);
                };

                //

                draw() {
                    this.paintingCanvasCtx.lineWidth = this.lineWidth;
                    this.paintingCanvasCtx.strokeStyle = ((this.isEraserMode) ? this.eraserStyle : this.strokeStyle);

                    this.paintingCanvasCtx.lineJoin = "round";
                    this.paintingCanvasCtx.lineCap = "round";

                    this.paintingCanvasCtx.beginPath();

                    switch (this.brushMode) {
                        case this.enumBrushMode.Basics:
                            this.paintingCanvasCtx.moveTo(this.prevX, this.prevY);
                            this.paintingCanvasCtx.lineTo(this.currX, this.currY);
                            break;

                        case this.enumBrushMode.PointBase:
                            this.paintingCanvasCtx.moveTo(this.points[0].x, this.points[0].y);
                            for (var i = 1; i < this.points.length; i++) {
                                this.paintingCanvasCtx.lineTo(this.points[i].x, this.points[i].y);
                            }
                            break;

                        default:
                            break;
                    }

                    this.paintingCanvasCtx.stroke();
                    this.paintingCanvasCtx.closePath();
                };

                changeColor(colorCode) {
                    this.enableBrush();
                    this.strokeStyle = colorCode;
                };

                changeBrushMode(newBrushMode) {
                    this.brushMode = newBrushMode;
                };

                enableBrush() {
                    this.disableCursor();
                    this.isEraserMode = false;
                    this.paintingCanvasCtx.globalCompositeOperation = "source-over";
                    this.changeBrushMode(this.enumBrushMode.PointBase);
                };

                enableEraser() {
                    this.disableCursor();
                    this.isEraserMode = true;
                    this.paintingCanvasCtx.globalCompositeOperation = "destination-out";
                    this.changeBrushMode(this.enumBrushMode.Basics);
                };

                enableCursor() {
                    this.enableScroll();
                    this.isCursorMode = true;
                    this.paintingCanvas.style.pointerEvents = "none";
                };

                disableCursor() {
                    this.disableScroll();
                    this.isCursorMode = false;
                    this.paintingCanvas.style.pointerEvents = "auto";
                };

                clearCanvas() {
                    this.paintingCanvasCtx.clearRect(0, 0, this.paintingCanvas.width, this.paintingCanvas.height);
                };

                save(dataURL) {
                    this.openPaintingImage(dataURL.replace("data:image/png;base64,", ""), "image/png");
                };

                changeSliderValue(newSliderValue) {
                    this.lineWidth = newSliderValue;
                    this.eraserArc = newSliderValue;
                };

                openExtensionUI() {
                    this.paintingToolboxRoot.style.display = "flex";
                    this.paintingCanvas.style.display = "initial";

                    //

                    chrome.runtime.sendMessage({
                        "from": "content-script.js",
                        "to": "PaintingToolbox.js",
                        "actionName": "toggle-painting-toolbox"
                    }, (response) => {
                        if (response.hasOwnProperty("data")) {
                            this.updateDialogDOMRect(response.data.dialogDOMRect);
                            this.disableCursor();
                            this.switchPaintingMode(true);
                            document.addEventListener("pointerdown", this.pointerDownEventProcessHandler, false);
                            document.addEventListener("pointermove", this.pointerMoveEventProcessHandler, false);
                            document.addEventListener("pointerup", this.pointerUpEventProcessHandler, false);
                        }
                    });
                };

                closeExtensionUI() {
                    this.enableScroll();
                    this.paintingToolboxRoot.style.display = "none";
                    this.paintingCanvas.style.display = "none";
                    document.removeEventListener("pointerdown", this.pointerDownEventProcessHandler, false);
                    document.removeEventListener("pointermove", this.pointerMoveEventProcessHandler, false);
                    document.removeEventListener("pointerup", this.pointerUpEventProcessHandler, false);
                };

                restoreCanvas() {
                    this.paintingCanvasCtx.drawImage(this.paintingCanvasBackUp, 0, 0);
                };

                backupCanvas() {
                    // Back Up this.paintingCanvas
                    this.paintingCanvasBackUp.width = this.paintingCanvas.width;
                    this.paintingCanvasBackUp.height = this.paintingCanvas.height;
                    this.paintingCanvasBackUpCtx.drawImage(this.paintingCanvas, 0, 0);
                };

                switchPaintingMode(isPaintingMode) {
                    if (isPaintingMode) {
                        this.paintingCanvas.style.pointerEvents = ((this.isCursorMode) ? "none" : "auto");
                        this.paintingToolboxRoot.style.pointerEvents = "none";
                        this.paintingToolboxRoot.style.opacity = "0.75";
                    }
                    else {
                        // set dialog's backdrop opacity to 1
                        chrome.runtime.sendMessage({
                            "from": "content-script.js",
                            "to": "PaintingToolbox.js",
                            "actionName": "change-backdrop-opacity",
                            "data": {
                                "opacity": 1
                            }
                        }, (response) => {
                            if (response.hasOwnProperty("data") && response.data.success) {
                                this.paintingCanvas.style.pointerEvents = "none";
                                this.paintingToolboxRoot.style.pointerEvents = "auto";
                                this.paintingToolboxRoot.style.opacity = "1.0";
                            }
                        });
                    }
                };

                findxy(mouseAction, event) {
                    if (mouseAction == "down") {
                        this.isDrawing = true;

                        //

                        switch (this.brushMode) {
                            case this.enumBrushMode.Basics:
                                this.prevX = this.currX;
                                this.prevY = this.currY;
                                this.currX = (event.clientX - this.paintingCanvas.getBoundingClientRect().left);
                                this.currY = (event.clientY - this.paintingCanvas.getBoundingClientRect().top);
                                break;

                            case this.enumBrushMode.PointBase:
                                this.backupCanvas();
                                this.points.push({
                                    "x": (event.clientX - this.paintingCanvas.getBoundingClientRect().left),
                                    "y": (event.clientY - this.paintingCanvas.getBoundingClientRect().top)
                                });
                                break;

                            default:
                                break;
                        }
                    }

                    if (mouseAction == "up" || mouseAction == "leave") {
                        this.isDrawing = false;
                        this.points.length = 0;
                    }

                    if (mouseAction == "move") {
                        if (this.isDrawing) {
                            switch (this.brushMode) {
                                case this.enumBrushMode.Basics:
                                    this.prevX = this.currX;
                                    this.prevY = this.currY;
                                    this.currX = (event.clientX - this.paintingCanvas.getBoundingClientRect().left);
                                    this.currY = (event.clientY - this.paintingCanvas.getBoundingClientRect().top);
                                    break;

                                case this.enumBrushMode.PointBase:
                                    this.clearCanvas();
                                    this.restoreCanvas();
                                    this.points.push({
                                        "x": (event.clientX - this.paintingCanvas.getBoundingClientRect().left),
                                        "y": (event.clientY - this.paintingCanvas.getBoundingClientRect().top)
                                    });
                                    break;

                                default:
                                    break;
                            }
                            this.draw();
                        }
                    }
                };

                base64ToArrayBuffer(base64Str) {
                    let binaryString = window.atob(base64Str);
                    let binaryLen = binaryString.length;
                    let bytes = new Uint8Array(binaryLen);

                    for (let i = 0; i < binaryLen; i++) {
                        let ascii = binaryString.charCodeAt(i);
                        bytes[i] = ascii;
                    }

                    return bytes;
                };

                openPaintingImage(base64Str, contentType) {
                    let byte = this.base64ToArrayBuffer(base64Str);
                    let blob = new Blob([byte], { "type": contentType });
                    window.open(URL.createObjectURL(blob), "_blank");
                };

                updateDialogDOMRect(newDialogDOMRect) {
                    this.dialogDOMRect = newDialogDOMRect;
                };

                detectInDialogDOMRect(event) {
                    // this.paintingToolboxRoot & this.paintingCanvas must displayed
                    return (
                        (
                            this.dialogDOMRect
                            && (this.paintingToolboxRoot.style.display !== "none")
                            && (this.paintingCanvas.style.display !== "none")
                        )
                        && (
                            (event.clientX > this.dialogDOMRect.left)
                            && (event.clientX < (this.dialogDOMRect.left + this.dialogDOMRect.width))
                        )
                        && (
                            (event.clientY > this.dialogDOMRect.top)
                            && (event.clientY < (this.dialogDOMRect.top + this.dialogDOMRect.height))
                        )
                    );
                };

                //

                /*
                    Somehow, the pointermove event will fire before pointerdown event
                    in some touch screen device when use pen to draw.
        
                    TODO:
                        Should handle event with specific process when event.pointerType is "pen".
                */
                pointerDownEventProcess(event) {
                    if (this.detectInDialogDOMRect(event)) {
                        this.switchPaintingMode(false);
                    }
                };

                pointerMoveEventProcess(event) {
                    if (this.detectInDialogDOMRect(event)) {
                        this.switchPaintingMode(false);
                    }
                };

                pointerUpEventProcess(event) {
                    if (this.detectInDialogDOMRect(event)) {
                        this.switchPaintingMode(false);
                    }
                };

                //

                run() {
                    this.initPaintingToolboxRoot();
                    this.initPaintingToolboxIframe();
                    this.initPaintingCanvas();
                    this.initBodyResizeObserver();

                    //

                    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
                        if ((message.from === "PaintingToolbox.js")
                            || (message.from === "background-script.js")
                        ) {
                            switch (message.actionName) {
                                case "toggle-painting-toolbox":
                                    if (this.paintingCanvas.style.display === "none") {
                                        this.openExtensionUI();
                                    }
                                    else {
                                        this.closeExtensionUI();
                                    }
                                    break;

                                case "close-extension-ui":
                                    this.closeExtensionUI();
                                    break;

                                case "brush":
                                    this.enableBrush();
                                    break;

                                case "palette":
                                    if (message.hasOwnProperty("data")) {
                                        this.changeColor(message.data.colorHex8String);
                                    }
                                    break;

                                case "eraser":
                                    this.enableEraser();
                                    break;

                                case "cursor":
                                    this.enableCursor();
                                    break;

                                case "screenshot":
                                    if (message.hasOwnProperty("data")) {
                                        this.save(message.data.dataURL);
                                    }
                                    break;

                                case "clear":
                                    this.clearCanvas();
                                    break;

                                case "change-slider-value":
                                    if (message.hasOwnProperty("data")) {
                                        this.changeSliderValue(message.data.sliderValue);
                                    }
                                    break;

                                case "record-latest-dialog-position":
                                    if (message.hasOwnProperty("data")) {
                                        this.updateDialogDOMRect(message.data.dialogDOMRect);
                                    }
                                    break;

                                case "dialog-mouse-leave":
                                    this.switchPaintingMode(true);
                                    break;

                                case "dialog-DOM-rect-changed":
                                    if (message.hasOwnProperty("data")) {
                                        this.updateDialogDOMRect(message.data.dialogDOMRect);
                                    }
                                    break;

                                default:
                                    break;
                            }

                            // Run sendResponse() even if it is not used,
                            // otherwise you will get an error message:
                            // "The message port closed before a response was received."
                            sendResponse({
                                "from": "content-script.js",
                                "actionName": message.actionName
                            });
                        }
                    });
                };
            };

            //

            const webMarker = new Extension();
            webMarker.run();
        })();
    }
});