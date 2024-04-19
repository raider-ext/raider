// this background script is used to invoke desktopCapture API
// to capture screen-MediaStream.

var screenOptions = ['screen', 'window'];
var imageTemp;
var iconTemp = [];
var portb

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if ((message.from === "home.component.ts")
        && (message.to === "background-script.js")
        && (message.actionName === "toggle-painting-toolbox")
        && (message.hasOwnProperty("data"))
    ) {
        openExtensionUI(message.data.browserTabInfo);
    }

    if ((message.from === "PaintingToolbox.js")
        && (message.to === "background-script.js")
        && (message.actionName === "screenshot")
    ) {
        chrome.tabs.captureVisibleTab(sender.tab.windowId, { format: "png" }, (dataUrl) => {
            sendResponse({
                "data": {
                    "dataURL": dataUrl
                }
            });
        });
    }

    // Due to this process is async (chrome.tabs.captureVisibleTab)
    // therefore it should return true at the end of process,
    // or sendResponse() wouldn't work
    return true;
});


chrome.runtime.onConnect.addListener(function (port) {
    portb = port;
    port.onMessage.addListener(portOnMessageHanlder);
    port.postMessage('background_conncect_to_port');

    // this one is called for each message from "content-script.js"
    function portOnMessageHanlder(message) {
        if (message == 'get-sourceId') {
            chrome.desktopCapture.chooseDesktopMedia(screenOptions, port.sender.tab, onAccessApproved);
        }

        if (message == 'mvb-get-sourceId') {
            chrome.desktopCapture.chooseDesktopMedia(['screen'], port.sender.tab, onAccessApproved);
        }

        if (message == 'audio-plus-tab') {
            screenOptions = ['audio', 'tab'];
            chrome.desktopCapture.chooseDesktopMedia(screenOptions, port.sender.tab, onAccessApproved);
        }

        if (message === 'mvb-ext-log-out') {
            logoutweb()
        }

        if (message === 'mvb-ext-log-in') {
            loginweb()
        }

        if (message === 'scratch-capture-tab') {
            chrome.desktopCapture.chooseDesktopMedia(['tab'], port.sender.tab, onScratchAccessApproved);
        }

    }

    function logoutweb() {
        //port.postMessage('mvb-ext-log-out-2');
        chrome.tabs.query({ url: '*://stage.myViewBoard.com/*' }, (q) => {
            tabs = q.map(q => chrome.tabs.sendMessage(q.id, 'mvb-ext-log-out'));
        })
        chrome.tabs.query({ url: '*://myViewBoard.com/*' }, (q) => {
            tabs = q.map(q => chrome.tabs.sendMessage(q.id, 'mvb-ext-log-out'));
        })
        chrome.tabs.query({ url: 'http://localhost:4200/*' }, (q) => {
            tabs = q.map(q => chrome.tabs.sendMessage(q.id, 'mvb-ext-log-out'));
        })
    }
    function loginweb() {
        //port.postMessage('mvb-ext-log-out-2');
        chrome.tabs.query({ url: '*://stage.myViewBoard.com/*' }, (q) => {
            tabs = q.map(q => chrome.tabs.sendMessage(q.id, 'mvb-ext-log-in'));
        })
        chrome.tabs.query({ url: '*://myViewBoard.com/*' }, (q) => {
            tabs = q.map(q => chrome.tabs.sendMessage(q.id, 'mvb-ext-log-in'));
        })
        chrome.tabs.query({ url: 'http://localhost:4200/*' }, (q) => {
            tabs = q.map(q => chrome.tabs.sendMessage(q.id, 'mvb-ext-log-in'));

        })
    }

    function onScratchAccessApproved(sourceId) {

    }

    // on getting sourceId
    // "sourceId" will be empty if permission is denied.
    function onAccessApproved(sourceId) {
        // if "cancel" button is clicked
        if (!sourceId || !sourceId.length) {
            return port.postMessage('PermissionDeniedError');
        }
        // "ok" button is clicked; share "sourceId" with the
        // content-script which will forward it to the webpage
        port.postMessage({
            sourceId: sourceId
        });
    }
});

chrome.runtime.onMessageExternal.addListener(
    function (request, sender, sendResponse) {
        if (request.getVersion) {
            sendResponse({ version: chrome.runtime.getManifest().version });
            return false; // Dispose of sendResponse
        }
        if (request.getStream) {
            // Desktop video stream sources
            console.log("get request", request, sender);
            var sources = ["screen", "window"];
            if (request.sources) {
                // Default
                sources = request.sources;
            }
            var tab = sender.tab;
            tab.url = sender.url;
            chrome.desktopCapture.chooseDesktopMedia(
                sources, tab,
                function (streamId) {
                    console.log(streamId);
                    sendResponse({ streamId: streamId });
                });
            return true; // Preserve sendResponse for future use
        }
        if (request.action === 'getCapture') {
            const { x, y, w, h } = request.payload;
            chrome.tabs.captureVisibleTab(sender.tab.windowId, { format: 'png' }, (image) => {
                var canvas = document.createElement('canvas');
                canvas.width = w;
                canvas.height = h;
                var context = canvas.getContext('2d');
                var imageObj = new Image();
                imageObj.onload = function () {
                    context.drawImage(imageObj, x, y, w, h, 0, 0, w, h);
                    var croppedImage = canvas.toDataURL('image/png');
                    var img = new Image();
                    sendResponse(croppedImage);
                }
                imageObj.src = image;
            })
        }

        return true;
    }
);

/*
var parent = chrome.contextMenus.create({
  "title": "myViewBoard",
  "contexts": ['all'],
  "onclick": genericOnClick
});

var normal = chrome.contextMenus.create({
  "title": "capture visible in this tab",
  "type": "normal",
  "contexts": ['all'],
  "parentId": parent,
  "onclick": contextClickCaptureVisible
});


console.log(normal);
*/


function genericOnClick(info, tab) {
    console.log(info, tab)
}


function contextClickCaptureVisible(info, tab) {
    chrome.tabs.captureVisibleTab(tab.windowId, { format: 'png' }, (image) => {
        imageTemp = image;
    })
}

//

function openExtensionUI(browserTabInfo = null) {
    if (!browserTabInfo) {
        chrome.runtime.sendMessage(chrome.app.getDetails().id,
            {
                messageText: "no active tab available"
            }
        );
        return false;
    }

    if (!browserTabInfo.url.startsWith("http")
        || browserTabInfo.url.includes("chrome.google.com/webstore")
    ) {
        alert("The function is not supported in Chrome Web Store and any non-HTTP protocol web page. Please open in other web pages.");
        return false;
    }

    chrome.tabs.sendMessage(browserTabInfo.tabId, {
        "from": "background-script.js",
        "actionName": "toggle-painting-toolbox"
    }, (response) => {
        // console.log("response", response);
    });
}

/*
    createMenus() and handlePaintingToolboxMenuRootClick()
    is for context menus ( when mouse right click )
*/

// function handlePaintingToolboxMenuRootClick() {
//     // Extension to content script
//     chrome.tabs.query({ "active": true, "currentWindow": true }, (tabs) => {
//         if (tabs[0]) {
//             const browserTabInfo = {
//                 "tabId": tabs[0].id,
//                 "url": tabs[0].url
//             }
//             openExtensionUI(browserTabInfo);
//         }
//     });
// }

// function createMenus() {
//     const paintingToolboxMenuRoot = chrome.contextMenus.create({
//         "title": "myViewBoard - Web Marker",
//         "type": "normal",
//         "contexts": ["all"],
//         "onclick": handlePaintingToolboxMenuRootClick
//     });
// }

// createMenus();
