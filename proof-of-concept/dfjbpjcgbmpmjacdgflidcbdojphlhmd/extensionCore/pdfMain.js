var PdfSignExtensionInternal = PdfSignExtensionInternal || {};
PdfSignExtensionInternal.images = PdfSignExtensionInternal.images || {};
PdfSignExtensionInternal.ownerPasswords = PdfSignExtensionInternal.ownerPasswords || {};
PdfSignExtensionInternal.currentSignaturePages = PdfSignExtensionInternal.currentSignaturePages || {};
PdfSignExtensionInternal.leftCoordinates = PdfSignExtensionInternal.leftCoordinates || {};
PdfSignExtensionInternal.topCoordinates = PdfSignExtensionInternal.topCoordinates || {};
PdfSignExtensionInternal.showCoordinates = PdfSignExtensionInternal.showCoordinates || {};


PdfSignExtensionInternal.Enum = {
    EventName: {
        ListCertificatesAndSignPdf: "ListCertificatesAndSignPdf",
        PreviewPdf: "PreviewPdf",
        PdfChunk: "PdfChunk",
        GetPdfPage: "GetPdfPage",
        ListAndChooseCertificate: "ListAndChooseCertificate",
        Setup: "Setup",
        GetCertificates: "GetCertificates",
        GetLocalizedErrorMessage: "GetLocalizedErrorMessage",
        IsNativeAppInstalled: "IsNativeAppInstalled",
        EncryptPdfWithPassword: "EncryptPdfWithPassword",
        EncryptPdfWithPasswordChunk: "EncryptPdfWithPasswordChunk",
        EncryptPdfWithCertificate: "EncryptPdfWithCertificate",
        EncryptPdfWithCertificateChunk: "EncryptPdfWithCertificateChunk",
        IsNativeHostApplicationUpToDate: "IsNativeHostApplicationUpToDate",
        SigningPdfWithCustomDialog: "SigningPdfWithCustomDialog",
        SaveCertificate: "SaveCertificate",
        SignPdfWithCustomDialog: "SignPdfWithCustomDialog",
        DeleteCertificate: "DeleteCertificate",
        SilentSignPdf: "SilentSignPdf",
        SignHashCmsSignedData: "SignHashCmsSignedData",
        SignHashSignature: "SignHashSignature"
    },
    PageStatusEnum: {
        Start: 1,
        Append: 2,
        Finish: 3
    },
    Url: "https://signingextension.nextsense.com/Installation/NextsenseSigningComponent.msi",
    UrlMac: "https://signingextension.nextsense.com/Installation/NextsenseSigningComponent.pkg",
    CheckPage: "https://signingextension.nextsense.com/ExtensionVerify.html?typeExtension=pdf",
    OS:
    {
        Win: 1,
        Mac: 2,
        X11: 3,
        Linux: 4
    },
    Browser: {
        Chrome: 1,
        Opera: 2,
        ChromiumEdge: 6
    }
};

var CheckBrowser = function () {
    var ua = navigator.userAgent, tem,
        M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

    var tempBrowser = "";

    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        tempBrowser = 'IE ' + (tem[1] || '');
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if (tem != null)
            tempBrowser = tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    else
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];

    if ((tem = ua.match(/version\/(\d+)/i)) != null)
        M.splice(1, 1, tem[1]);

    var fullBrowser = "";

    if (tempBrowser != "")
        fullBrowser = tempBrowser;
    else
        fullBrowser = M[0];

    if (fullBrowser.includes("Chrome"))
        return PdfSignExtensionInternal.Enum.Browser.Chrome;

    if (fullBrowser.includes("Opera"))
        return PdfSignExtensionInternal.Enum.Browser.Opera;

    if (fullBrowser.includes("Edge"))
        return PdfSignExtensionInternal.Enum.Browser.ChromiumEdge;

    return 0;
};

var browserType = CheckBrowser();

function handleInstalled(details) {
    if (details.reason === "install") {
        chrome.tabs.create({
            url: PdfSignExtensionInternal.Enum.CheckPage
        });
    }
}

chrome.runtime.onInstalled.addListener(handleInstalled);

var port = null;
var connectToNative = function () {
    var hostName = "nextsense.signing.component";
    port = chrome.runtime.connectNative(hostName);
    port.onMessage.addListener(onNativeMessage);
    port.onDisconnect.addListener(onDisconnected);
};

var chrome = chrome || {};
var selectedTabs = [];

//povik od extension api js
chrome.runtime.onMessageExternal.addListener(
    function (request, sender, sendResponse) {
        var message;

        chrome.tabs.getSelected(null, function (tab) {
            if (request != undefined && request.model != undefined && request.model.id != undefined) {
                var isAdded = false;
                for (var i = 0; i < selectedTabs.length; i++) {
                    if (selectedTabs[i].Value == request.model.id) {
                        isAdded = true;
                        break;
                    }
                }

                if (!isAdded) {
                    var selectedTab = {};
                    selectedTab.Key = tab.id;
                    selectedTab.Value = request.model.id;
                    selectedTabs.push(selectedTab);
                }
            }
        });

        switch (request.EventName) {
            case PdfSignExtensionInternal.Enum.EventName.Setup:
                message = {
                    "EventName": PdfSignExtensionInternal.Enum.EventName.Setup,
                    "languageId": request.model.languageId
                }
                chrome.tabs.getSelected(null, function (tab) {
                    chrome.tabs.sendMessage(tab.id, message);
                    delete message;
                });
                break;
            case PdfSignExtensionInternal.Enum.EventName.IsNativeHostApplicationUpToDate:
                message = {
                    "Id": request.model.id,
                    "EventName": PdfSignExtensionInternal.Enum.EventName.IsNativeHostApplicationUpToDate,
                    "ExtensionType": 'PdfExtension'
                }
                port.postMessage(message);
                message = null;
                break;
            case PdfSignExtensionInternal.Enum.EventName.GetCertificates:
                message = {
                    "Id": request.model.id,
                    "EventName": PdfSignExtensionInternal.Enum.EventName.GetCertificates,
                    "CertificateSubject": request.model.certificateSubject,
                    "CertificateIssuer": request.model.certificateIssuer,
                    "CertificateThumbprint": request.model.certificateThumbprint,
                    "OnlyValidCertificate": request.model.onlyValidCertificate,
                    "BrowserType": browserType
                };
                port.postMessage(message);
                message = null;
                break;
            case PdfSignExtensionInternal.Enum.EventName.GetLocalizedErrorMessage:
                message = {
                    "EventName": PdfSignExtensionInternal.Enum.EventName.GetLocalizedErrorMessage,
                    "Message": request.model.message,
                    "Id": request.model.id
                }
                chrome.tabs.getSelected(null, function (tab) {
                    chrome.tabs.sendMessage(tab.id, message);
                    delete message;
                });
                break;
            case PdfSignExtensionInternal.Enum.EventName.ListCertificatesAndSignPdf:
                message = {
                    "Id": request.model.id,
                    "EventName": PdfSignExtensionInternal.Enum.EventName.ListCertificatesAndSignPdf,
                    "PdfSigningPage": request.model.pdfSigningPage,
                    "PdfLeftCoordinate": request.model.pdfLeftCoordinate,
                    "PdfTopCoordinate": request.model.pdfTopCoordinate,
                    "PdfSigningImage": request.model.pdfSigningImage,
                    "OwnerPassword": PdfSignExtensionInternal.ownerPasswords[request.model.id]
                };
                port.postMessage(message);
                PdfSignExtensionInternal.images[request.model.id] = undefined;
                PdfSignExtensionInternal.ownerPasswords[request.model.id] = undefined;
                PdfSignExtensionInternal.currentSignaturePages[request.model.id] = undefined;
                PdfSignExtensionInternal.leftCoordinates[request.model.id] = undefined;
                PdfSignExtensionInternal.topCoordinates[request.model.id] = undefined;
                PdfSignExtensionInternal.showCoordinates[request.model.id] = undefined;
                message = null;
                break;
            case PdfSignExtensionInternal.Enum.EventName.PreviewPdf:
                PdfSignExtensionInternal.images[request.model.id] = request.model.pdfSigningImage;
                PdfSignExtensionInternal.ownerPasswords[request.model.id] = request.model.ownerPassword;
                PdfSignExtensionInternal.currentSignaturePages[request.model.id] = request.model.currentPage;
                PdfSignExtensionInternal.leftCoordinates[request.model.id] = request.model.left;
                PdfSignExtensionInternal.topCoordinates[request.model.id] = request.model.top;
                PdfSignExtensionInternal.showCoordinates[request.model.id] = request.model.showCoordinate;
                var currentPage = 1;
                if (request.model.currentPage != undefined)
                    currentPage = request.model.currentPage;

                message = {
                    "Id": request.model.id,
                    "EventName": PdfSignExtensionInternal.Enum.EventName.PreviewPdf,
                    "PdfSigningLocation": request.model.pdfSigningLocation,
                    "PdfSigningReason": request.model.pdfSigningReason,
                    "PdfSigningImage": "",
                    "CertificateSubject": request.model.certificateSubject,
                    "CertificateIssuer": request.model.certificateIssuer,
                    "CertificateThumbprint": request.model.certificateThumbprint,
                    "OnlyValidCertificate": request.model.onlyValidCertificate,
                    "BrowserType": browserType,
                    "ChunksCount": request.model.chunksCount,
                    "HasVisibleSigniture": request.model.hasVisibleSigniture,
                    "SignatureType": request.model.signatureType,
                    "OwnerPassword": PdfSignExtensionInternal.ownerPasswords[request.model.id],
                    "EncryptionCertificateSubject": request.model.encryptionCertificateSubject,
                    "EncryptionCertificateIssuer": request.model.encryptionCertificateIssuer,
                    "EncryptionCertificateThumbprint": request.model.encryptionCertificateThumbprint,
                    "TsaUrl": request.model.tsaUrl,
                    "IsCertificateEncrypted": request.model.isCertificateEncrypted,
                    "UserName": request.model.userName,
                    "Password": request.model.password,
                    "TokenSizeEstimate": request.model.tokenSizeEstimate,
                    "DigestAlgorithm": request.model.digestAlgorithm,
                    "IsLtvEnabled": request.model.isLtvEnabled,
                    "PdfSigningPage": currentPage,
                    "SignatureAlgorithamType": request.model.signatureAlgorithamType
                };
                port.postMessage(message);
                message = null;
                break;
            case PdfSignExtensionInternal.Enum.EventName.SilentSignPdf:
                var currentSigningPage = 1;
                if (request.model.currentPage != undefined)
                    currentSigningPage = request.model.currentPage;

                message = {
                    "Id": request.model.id,
                    "EventName": PdfSignExtensionInternal.Enum.EventName.SilentSignPdf,
                    "PdfSigningLocation": request.model.pdfSigningLocation,
                    "PdfSigningReason": request.model.pdfSigningReason,
                    "PdfSigningImage": request.model.pdfSigningImage,
                    "CertificateSubject": request.model.certificateSubject,
                    "CertificateIssuer": request.model.certificateIssuer,
                    "CertificateThumbprint": request.model.certificateThumbprint,
                    "OnlyValidCertificate": request.model.onlyValidCertificate,
                    "BrowserType": browserType,
                    "ChunksCount": request.model.chunksCount,
                    "HasVisibleSigniture": request.model.hasVisibleSigniture,
                    "SignatureType": request.model.signatureType,
                    "OwnerPassword": PdfSignExtensionInternal.ownerPasswords[request.model.id],
                    "EncryptionCertificateSubject": request.model.encryptionCertificateSubject,
                    "EncryptionCertificateIssuer": request.model.encryptionCertificateIssuer,
                    "IsCertificateEncrypted": request.model.isCertificateEncrypted,
                    "EncryptionCertificateThumbprint": request.model.encryptionCertificateThumbprint,
                    "TsaUrl": request.model.tsaUrl,
                    "UserName": request.model.userName,
                    "Password": request.model.password,
                    "TokenSizeEstimate": request.model.tokenSizeEstimate,
                    "DigestAlgorithm": request.model.digestAlgorithm,
                    "IsLtvEnabled": request.model.isLtvEnabled,
                    "PdfSigningPage": currentSigningPage,
                    "SignatureAlgorithamType": request.model.signatureAlgorithamType,
                    "PdfLeftCoordinate": request.model.left,
                    "PdfTopCoordinate": request.model.top,
                    "SigningContract": request.model.signingContract,
                    "SignData": request.model.signData,
                    "SignatureCoordinates": request.model.signatureCoordinates
                };
                port.postMessage(message);
                message = null;
                break;
            case PdfSignExtensionInternal.Enum.EventName.PdfChunk:
                message = {
                    "Id": request.model.id,
                    "EventName": PdfSignExtensionInternal.Enum.EventName.PdfChunk,
                    "Chunk": request.model.chunk,
                    "OrderNumber": request.model.orderNumber,
                    "ChunksCount": request.model.chunksCount,
                    "OwnerPassword": PdfSignExtensionInternal.ownerPasswords[request.model.id]
                }
                port.postMessage(message);
                message = null;
                break;
            case PdfSignExtensionInternal.Enum.EventName.EncryptPdfWithPasswordChunk:
                message = {
                    "Id": request.model.id,
                    "EventName": PdfSignExtensionInternal.Enum.EventName.EncryptPdfWithPasswordChunk,
                    "Chunk": request.model.chunk,
                    "OrderNumber": request.model.orderNumber,
                    "ChunksCount": request.model.chunksCount
                }
                port.postMessage(message);
                message = null;
                break;
            case PdfSignExtensionInternal.Enum.EventName.EncryptPdfWithCertificateChunk:
                message = {
                    "Id": request.model.id,
                    "EventName": PdfSignExtensionInternal.Enum.EventName.EncryptPdfWithCertificateChunk,
                    "Chunk": request.model.chunk,
                    "OrderNumber": request.model.orderNumber,
                    "ChunksCount": request.model.chunksCount
                }
                port.postMessage(message);
                message = null;
                break;
            case PdfSignExtensionInternal.Enum.EventName.GetPdfPage:
                message = {
                    "Id": request.model.id,
                    "EventName": PdfSignExtensionInternal.Enum.EventName.GetPdfPage,
                    "OrderNumber": request.model.orderNumber,
                    "OwnerPassword": PdfSignExtensionInternal.ownerPasswords[request.model.id]
                }
                port.postMessage(message);
                message = null;
                break;
            case PdfSignExtensionInternal.Enum.EventName.EncryptPdfWithPassword:
                message = {
                    "Id": request.model.id,
                    "EventName": PdfSignExtensionInternal.Enum.EventName.EncryptPdfWithPassword,
                    "CurrentOwnerPassword": request.model.currentOwnerPassword,
                    "OwnerPassword": request.model.ownerPassword
                }
                port.postMessage(message);
                message = null;
                break;
            case PdfSignExtensionInternal.Enum.EventName.EncryptPdfWithCertificate:
                message = {
                    "Id": request.model.id,
                    "EventName": PdfSignExtensionInternal.Enum.EventName.EncryptPdfWithCertificate,
                    "CertificatePublicPart": request.model.certificatePublicPart,
                }
                port.postMessage(message);
                message = null;
                break;
            case PdfSignExtensionInternal.Enum.EventName.ListAndChooseCertificate:
                message = {
                    "Id": request.model.id,
                    "EventName": PdfSignExtensionInternal.Enum.EventName.ListAndChooseCertificate,
                    "CertificateSubject": request.model.certificateSubject,
                    "CertificateIssuer": request.model.certificateIssuer,
                    "CertificateThumbprint": request.model.certificateThumbprint,
                    "OnlyValidCertificate": request.model.onlyValidCertificate,
                    "BrowserType": browserType
                };
                port.postMessage(message);
                message = null;
                break;
            case PdfSignExtensionInternal.Enum.EventName.IsNativeAppInstalled:

                var oS = CheckOS();

                var downloadUrl = "";
                if (oS === PdfSignExtensionInternal.Enum.OS.Win)
                    downloadUrl = PdfSignExtensionInternal.Enum.Url;
                if (oS === PdfSignExtensionInternal.Enum.OS.Mac || oS === PdfSignExtensionInternal.Enum.OS.Linux)
                    downloadUrl = PdfSignExtensionInternal.Enum.UrlMac;

                sendResponse({ IsNativeAppInstalled: port != null, NativeAppUrl: downloadUrl });
                break;
            case PdfSignExtensionInternal.Enum.EventName.SigningPdfWithCustomDialog:
                message = {
                    "Id": request.model.id,
                    "EventName": PdfSignExtensionInternal.Enum.EventName.SigningPdfWithCustomDialog,
                    "PdfSigningPage": request.model.pdfSigningPage,
                    "PdfLeftCoordinate": request.model.pdfLeftCoordinate,
                    "PdfTopCoordinate": request.model.pdfTopCoordinate,
                    "PdfSigningImage": request.model.pdfSigningImage,
                    "OwnerPassword": PdfSignExtensionInternal.ownerPasswords[request.model.id]
                };
                port.postMessage(message);
                PdfSignExtensionInternal.images[request.model.id] = undefined;
                PdfSignExtensionInternal.ownerPasswords[request.model.id] = undefined;
                PdfSignExtensionInternal.currentSignaturePages[request.model.id] = undefined;
                PdfSignExtensionInternal.leftCoordinates[request.model.id] = undefined;
                PdfSignExtensionInternal.topCoordinates[request.model.id] = undefined;
                PdfSignExtensionInternal.showCoordinates[request.model.id] = undefined;
                message = null;
                break;
            case PdfSignExtensionInternal.Enum.EventName.SaveCertificate:
                message = {
                    "Id": request.model.id,
                    "EventName": PdfSignExtensionInternal.Enum.EventName.SaveCertificate,
                    "Certificate": request.model.certificate,
                    "Password": request.model.password
                }

                port.postMessage(message);
                message = null;
                break;
            case PdfSignExtensionInternal.Enum.EventName.DeleteCertificate:
                message = {
                    "Id": request.model.id,
                    "EventName": PdfSignExtensionInternal.Enum.EventName.DeleteCertificate,
                    "CertificateThumbprint": request.model.certificateThumbprint
                }

                port.postMessage(message);
                message = null;
                break;
            case PdfSignExtensionInternal.Enum.EventName.SignPdfWithCustomDialog:
                message = {
                    "Id": request.model.id,
                    "EventName": PdfSignExtensionInternal.Enum.EventName.SignPdfWithCustomDialog,
                    "CertificateThumbprint": request.model.certificateThumbprint,
                    "Password": request.model.password
                }

                port.postMessage(message);
                message = null;
                break;
            case PdfSignExtensionInternal.Enum.EventName.SignHashCmsSignedData:
                message = {
                    "Id": request.model.id,
                    "EventName": PdfSignExtensionInternal.Enum.EventName.SignHashCmsSignedData,
                    "CertificateSubject": request.model.certificateSubject,
                    "CertificateIssuer": request.model.certificateIssuer,
                    "CertificateThumbprint": request.model.certificateThumbprint,
                    "OnlyValidCertificate": request.model.onlyValidCertificate,
                    "Digest": request.model.hash,
                    "SignatureAlgorithamType": request.model.signatureAlgorithamType,
                    "TsaUrl": request.model.tsaUrl,
                    "UserName": request.model.userName,
                    "Password": request.model.password
                };
                port.postMessage(message);
                message = null;
                break;

            case PdfSignExtensionInternal.Enum.EventName.SignHashSignature:
                message = {
                    "Id": request.model.id,
                    "EventName": PdfSignExtensionInternal.Enum.EventName.SignHashSignature,
                    "CertificateSubject": request.model.certificateSubject,
                    "CertificateIssuer": request.model.certificateIssuer,
                    "CertificateThumbprint": request.model.certificateThumbprint,
                    "OnlyValidCertificate": request.model.onlyValidCertificate,
                    "Digest": request.model.hash,
                    "SignatureAlgorithamType": request.model.signatureAlgorithamType
                };
                port.postMessage(message);
                message = null;
                break;
        }
    });


var data = "";
var onNativeMessage = function (message) {

    var tabId = "";
    for (var i = 0; i < selectedTabs.length; i++) {
        if (selectedTabs[i].Value == message.Id) {
            tabId = selectedTabs[i].Key;
            break;
        }
    }

    var eventsWithChunks = [
        PdfSignExtensionInternal.Enum.EventName.ListCertificatesAndSignPdf,
        PdfSignExtensionInternal.Enum.EventName.EncryptPdfWithPassword,
        PdfSignExtensionInternal.Enum.EventName.EncryptPdfWithCertificate,
        PdfSignExtensionInternal.Enum.EventName.SignPdfWithCustomDialog,
        PdfSignExtensionInternal.Enum.EventName.SilentSignPdf];

    eventsWithChunks = eventsWithChunks.map(function (eventName) {
        return "After" + eventName;
    });

    if (message.EventName && eventsWithChunks.indexOf(message.EventName) !== -1) {
        chrome.tabs.sendMessage(tabId, message);
        delete message;
    } else {
        if (message.Status === PdfSignExtensionInternal.Enum.PageStatusEnum.Start) {
            data = "";
            data += message.Data;
        }
        if (message.Status === PdfSignExtensionInternal.Enum.PageStatusEnum.Append) {
            data += message.Data;
        }
        if (message.Status === PdfSignExtensionInternal.Enum.PageStatusEnum.Finish) {
            data += message.Data;
            message.Data = data;
            message.CurrentSignaturePage = PdfSignExtensionInternal.currentSignaturePages[message.Id] == undefined ? null : PdfSignExtensionInternal.currentSignaturePages[message.Id];
            message.Left = PdfSignExtensionInternal.leftCoordinates[message.Id] == undefined ? null : PdfSignExtensionInternal.leftCoordinates[message.Id];
            message.Top = PdfSignExtensionInternal.topCoordinates[message.Id] == undefined ? null : PdfSignExtensionInternal.topCoordinates[message.Id];
            message.ShowCoordinate = PdfSignExtensionInternal.showCoordinates[message.Id] == undefined ? null : PdfSignExtensionInternal.showCoordinates[message.Id];
            message.SigningImageBackground = PdfSignExtensionInternal.images[message.Id] == undefined ? null : PdfSignExtensionInternal.images[message.Id];
            chrome.tabs.sendMessage(tabId, message);
            delete message;
            data = "";
        }
    }
}

var CheckOS = function () {
    var osName = 0;
    if (navigator.appVersion.indexOf("Win") !== -1) osName = PdfSignExtensionInternal.Enum.OS.Win;
    if (navigator.appVersion.indexOf("Mac") !== -1) osName = PdfSignExtensionInternal.Enum.OS.Mac;
    if (navigator.appVersion.indexOf("X11") !== -1) osName = PdfSignExtensionInternal.Enum.OS.X11;
    if (navigator.appVersion.indexOf("Linux") !== -1) osName = PdfSignExtensionInternal.Enum.OS.Linux;

    return osName;
}

var onDisconnected = function () {
    port = null;
}


connectToNative();