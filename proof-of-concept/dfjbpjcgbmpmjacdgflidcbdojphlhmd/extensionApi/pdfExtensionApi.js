var PdfSignExtension = PdfSignExtension || {};
PdfSignExtension.Enum = {
    EventName: {
        ListCertificates: "ListCertificates",
        SignPdf: "SignPdf",
        ListCertificatesAndSignPdf: "ListCertificatesAndSignPdf",
        PreviewPdf: "PreviewPdf",
        GetCoordinates: "GetCoordinates",
        PdfChunk: "PdfChunk",
        GetPdfPage: "GetPdfPage",
        OnOpenModal: "OnOpenModal",
        ListAndChooseCertificate: "ListAndChooseCertificate",
        GetCertificates: "GetCertificates",
        GetLocalizedErrorMessage: "GetLocalizedErrorMessage",
        Setup: "Setup",
        IsNativeAppInstalled: "IsNativeAppInstalled",
        EncryptPdfWithPassword: "EncryptPdfWithPassword",
        EncryptPdfWithPasswordChunk: "EncryptPdfWithPasswordChunk",
        EncryptPdfWithCertificate: "EncryptPdfWithCertificate",
        EncryptPdfWithCertificateChunk: "EncryptPdfWithCertificateChunk",
        IsNativeHostApplicationUpToDate: "IsNativeHostApplicationUpToDate",
        SigningPdfWithCustomDialog: "SigningPdfWithCustomDialog",
        SignPdfWithCustomDialog: "SignPdfWithCustomDialog",
        SaveCertificate: "SaveCertificate",
        DeleteCertificate: "DeleteCertificate",
        GetCoordinate: "GetCoordinate",
        SilentSignPdf: "SilentSignPdf",
        SignHashCmsSignedData: "SignHashCmsSignedData",
        SignHashSignature: "SignHashSignature",
        CloseDialog: "CloseDialog",
        GetNativeHostApplicationVersion: "GetNativeHostApplicationVersion"
    },
    Extensions: {
        PdfSignExtension: "dfjbpjcgbmpmjacdgflidcbdojphlhmd"
    },
    SignTypeEnum: {
        Certificate: 1,
        TimeStamp: 2,
        EmbededTimeStampInCertificateSign: 3
    },
    LanguageEnum: {
        "mk": "mk",
        "eng": "eng",
        "hr": "hr",
        "hu": "hu",
        "slo": "slo",
        "al": "al",
        "cz": "cz",
        "srb": "srb",
        "ro": "ro"
    },
    ErrorCodes: {
        PdfMaxSizeExceeded: "PdfMaxSizeExceeded"
    },
    NativeHostApplication: {
        Version: "1.0.0.7",
        Url: "https://signingextension.nextsense.com/Installation/NextsenseSigningComponent.msi",
        UrlMac: "https://signingextension.nextsense.com/Installation/NextsenseSigningComponent.pkg"
    },
    OS:
    {
        Win: 1,
        Mac: 2,
        X11: 3,
        Linux: 4
    },
    SignatureAlgoritham: {
        SHA1: 1,
        SHA256: 2,
        SHA512: 3
    }
};

//check os
PdfSignExtension.CheckOS = function () {
    var osName = 0;
    if (navigator.appVersion.indexOf("Win") !== -1) osName = PdfSignExtension.Enum.OS.Win;
    if (navigator.appVersion.indexOf("Mac") !== -1) osName = PdfSignExtension.Enum.OS.Mac;
    if (navigator.appVersion.indexOf("X11") !== -1) osName = PdfSignExtension.Enum.OS.X11;
    if (navigator.appVersion.indexOf("Linux") !== -1) osName = PdfSignExtension.Enum.OS.Linux;

    return osName;
}

var osName = PdfSignExtension.CheckOS();
PdfSignExtension.pdfMaxFileSize = 1024 * 1024 * 50;
PdfSignExtension.chunkSize = osName === PdfSignExtension.Enum.OS.Mac ? 10 * 1024 : 64 * 1024;
PdfSignExtension.callbacks = {};
PdfSignExtension.pdfInfo = {
    pdf: [],
    counter: 0
};
//setira inicijalni parametri
PdfSignExtension.Setup = function (setupModel) {
    if (PdfSignExtension.Enum.LanguageEnum[setupModel.languageId] == undefined) {
        setupModel.languageId = PdfSignExtension.Enum.LanguageEnum["eng"];
    }
    if (setupModel.pdfMaxFileSize == undefined || isNaN(parseInt(setupModel.pdfMaxFileSize))) {
        PdfSignExtension.pdfMaxFileSize = 1024 * 1024 * 50;
    } else {
        PdfSignExtension.pdfMaxFileSize = parseInt(setupModel.pdfMaxFileSize) * 1024 * 1024;
    }

    chrome.runtime.sendMessage(PdfSignExtension.Enum.Extensions.PdfSignExtension, {
        EventName: PdfSignExtension.Enum.EventName.Setup,
        model: setupModel
    });
    delete setupModel;
};

PdfSignExtension.IsNativeAppInstalled = function (callback) {
    chrome.runtime.sendMessage(PdfSignExtension.Enum.Extensions.PdfSignExtension, {
        EventName: PdfSignExtension.Enum.EventName.IsNativeAppInstalled
    }, null, callback);
}

//zemi posledna verzija na extension
PdfSignExtension.IsNativeHostApplicationUpToDate = function (successfulCallback, errorCallback) {
    var id = PdfSignExtension.CreateGuid() + '_' + PdfSignExtension.Enum.EventName.IsNativeHostApplicationUpToDate;
    var signInfoModel = {};
    signInfoModel.id = id;
    PdfSignExtension.callbacks[id] = new PdfSignExtension.CallbackData(successfulCallback, errorCallback);

    chrome.runtime.sendMessage(PdfSignExtension.Enum.Extensions.PdfSignExtension, {
        EventName: PdfSignExtension.Enum.EventName.IsNativeHostApplicationUpToDate,
        model: signInfoModel
    });

    delete signInfoModel;
}

//zemi verzija na host
PdfSignExtension.GetNativeHostApplicationVersion = function (successfulCallBack, errorCallback) {
    var id = PdfSignExtension.CreateGuid() + '_' + PdfSignExtension.Enum.EventName.GetNativeHostApplicationVersion;
    var signInfoModel = {};
    signInfoModel.id = id;
    PdfSignExtension.callbacks[id] = new PdfSignExtension.CallbackData(successfulCallBack, errorCallback);

    chrome.runtime.sendMessage(PdfSignExtension.Enum.Extensions.PdfSignExtension, {
        EventName: PdfSignExtension.Enum.EventName.IsNativeHostApplicationUpToDate,
        model: signInfoModel
    });
}

//zema certificates
PdfSignExtension.GetCertificates = function (filterModel, successfulCallback, errorCallback) {
    var id = PdfSignExtension.CreateGuid();
    filterModel.id = id;

    PdfSignExtension.callbacks[id] = new PdfSignExtension.CallbackData(successfulCallback, errorCallback);

    chrome.runtime.sendMessage(PdfSignExtension.Enum.Extensions.PdfSignExtension, {
        EventName: PdfSignExtension.Enum.EventName.GetCertificates,
        model: filterModel
    });

    delete filterModel;
};

//pravi pregled na pdf
PdfSignExtension.SignPdf = function (signInfoModel, successfulCallback, errorCallback, onDialogShownCallback, onSignStartCallback, onCloseDialogCallback) {
    var id = PdfSignExtension.CreateGuid();
    signInfoModel.id = id;

    if (signInfoModel.signatureType == undefined) {
        signInfoModel.signatureType = PdfSignExtension.Enum.SignTypeEnum.Certificate;
    }

    if (signInfoModel.hasVisibleSigniture == undefined) {
        signInfoModel.hasVisibleSigniture = true;
    }

    if (signInfoModel.isLtvEnabled == undefined) {
        signInfoModel.isLtvEnabled = false;
    }

    if (signInfoModel.signatureAlgorithamType == undefined) {
        signInfoModel.signatureAlgorithamType = PdfSignExtension.Enum.SignatureAlgoritham.SHA1;
    }

    if (signInfoModel.signingContract == undefined) {
        signInfoModel.SigningContract = '';
    }

    if (signInfoModel.signData == undefined) {
        signInfoModel.signData = '';
    }

    if (signInfoModel.signatureCoordinates == undefined) {
        signInfoModel.signatureCoordinates = '';
    }

    signInfoModel.isCertificateEncrypted = false;

    signInfoModel.showCoordinate = false;

    PdfSignExtension.callbacks[id] = new PdfSignExtension.CallbackData(successfulCallback, errorCallback, onDialogShownCallback, onSignStartCallback, onCloseDialogCallback);

    var pdf = signInfoModel.pdfContent;

    if (PdfSignExtension.pdfMaxFileSize < pdf.length) {
        chrome.runtime.sendMessage(PdfSignExtension.Enum.Extensions.PdfSignExtension, {
            EventName: PdfSignExtension.Enum.EventName.GetLocalizedErrorMessage,
            model: {
                message: PdfSignExtension.Enum.ErrorCodes.PdfMaxSizeExceeded,
                id: id
            }
        });
    } else {
        var totalChunks = Math.ceil(pdf.length / PdfSignExtension.chunkSize);
        signInfoModel.pdfContent = null;
        signInfoModel.chunksCount = totalChunks;
        if (signInfoModel.signatureType && parseInt(signInfoModel.signatureType) === parseInt(PdfSignExtension.Enum.SignTypeEnum.TimeStamp)) {
            signInfoModel.hasVisibleSigniture = false;
        }

        chrome.runtime.sendMessage(PdfSignExtension.Enum.Extensions.PdfSignExtension, {
            EventName: PdfSignExtension.Enum.EventName.PreviewPdf,
            model: signInfoModel
        });

        delete signInfoModel;


        PdfSignExtension.SendPdfInChunk(pdf, id);
    }

    pdf = null;
}

//silent sign pdf
PdfSignExtension.SilentSignPdf = function (signInfoModel, successfulCallback, errorCallback, onDialogShownCallback, onSignStartCallback) {
    var id = PdfSignExtension.CreateGuid();
    signInfoModel.id = id;
    signInfoModel.isCertificateEncrypted = false;

    if (signInfoModel.signatureType == undefined) {
        signInfoModel.signatureType = PdfSignExtension.Enum.SignTypeEnum.Certificate;
    }

    signInfoModel.hasVisibleSigniture = false;

    if (signInfoModel.isLtvEnabled == undefined) {
        signInfoModel.isLtvEnabled = false;
    }

    if (signInfoModel.signatureAlgorithamType == undefined) {
        signInfoModel.signatureAlgorithamType = PdfSignExtension.Enum.SignatureAlgoritham.SHA1;
    }

    if (signInfoModel.signingContract == undefined) {
        signInfoModel.SigningContract = '';
    }

    if (signInfoModel.signData == undefined) {
        signInfoModel.signData = '';
    }

    if (signInfoModel.signatureCoordinates == undefined) {
        signInfoModel.signatureCoordinates = '';
    }

    signInfoModel.showCoordinate = false;

    PdfSignExtension.callbacks[id] = new PdfSignExtension.CallbackData(successfulCallback, errorCallback, onDialogShownCallback, onSignStartCallback);

    var pdf = signInfoModel.pdfContent;

    if (PdfSignExtension.pdfMaxFileSize < pdf.length) {
        chrome.runtime.sendMessage(PdfSignExtension.Enum.Extensions.PdfSignExtension, {
            EventName: PdfSignExtension.Enum.EventName.GetLocalizedErrorMessage,
            model: {
                message: PdfSignExtension.Enum.ErrorCodes.PdfMaxSizeExceeded,
                id: id
            },
            direction: PdfSignExtension.SendMessageFromPage,
            extensionId: PdfSignExtension.ExtensionId
        });
    } else {
        signInfoModel.pdfContent = null;

        var totalChunks = Math.ceil(pdf.length / PdfSignExtension.chunkSize);
        signInfoModel.chunksCount = totalChunks;

        chrome.runtime.sendMessage(PdfSignExtension.Enum.Extensions.PdfSignExtension, {
            EventName: PdfSignExtension.Enum.EventName.SilentSignPdf,
            model: signInfoModel,
            direction: PdfSignExtension.SendMessageFromPage,
            extensionId: PdfSignExtension.ExtensionId
        });

        delete signInfoModel;

        PdfSignExtension.SendPdfInChunk(pdf, id);
    }

    pdf = null;
}

//get coordinates
PdfSignExtension.GetCoordinates = function (signInfoModel, successfulCallback, errorCallback, onDialogShownCallback, onSignStartCallback) {
    var id = PdfSignExtension.CreateGuid();
    signInfoModel.id = id;
    signInfoModel.showCoordinate = true;
    signInfoModel.isCertificateEncrypted = false;

    PdfSignExtension.callbacks[id] = new PdfSignExtension.CallbackData(successfulCallback, errorCallback, onDialogShownCallback, onSignStartCallback);

    var pdf = signInfoModel.pdfContent;

    if (PdfSignExtension.pdfMaxFileSize < pdf.length) {
        chrome.runtime.sendMessage(PdfSignExtension.Enum.Extensions.PdfSignExtension, {
            EventName: PdfSignExtension.Enum.EventName.GetLocalizedErrorMessage,
            model: {
                message: PdfSignExtension.Enum.ErrorCodes.PdfMaxSizeExceeded,
                id: id
            }
        });
    } else {
        var totalChunks = Math.ceil(pdf.length / PdfSignExtension.chunkSize);
        signInfoModel.pdfContent = null;
        signInfoModel.chunksCount = totalChunks;
        if (signInfoModel.signatureType && parseInt(signInfoModel.signatureType) === parseInt(PdfSignExtension.Enum.SignTypeEnum.TimeStamp)) {
            signInfoModel.hasVisibleSigniture = false;
        }

        chrome.runtime.sendMessage(PdfSignExtension.Enum.Extensions.PdfSignExtension, {
            EventName: PdfSignExtension.Enum.EventName.PreviewPdf,
            model: signInfoModel
        });

        delete signInfoModel;


        PdfSignExtension.SendPdfInChunk(pdf, id);
    }

    pdf = null;
}

//preview na pdf pred da prezeme nekoja od akciite: potpisi, zemi koordinati
PdfSignExtension.PreviewPdf = function (pdf, signInfoModel) {

    if (PdfSignExtension.pdfMaxFileSize < pdf.length) {
        chrome.runtime.sendMessage(PdfSignExtension.Enum.Extensions.PdfSignExtension, {
            EventName: PdfSignExtension.Enum.EventName.GetLocalizedErrorMessage,
            model: {
                message: PdfSignExtension.Enum.ErrorCodes.PdfMaxSizeExceeded,
                id: id
            }
        });
    } else {
        var totalChunks = Math.ceil(pdf.length / PdfSignExtension.chunkSize);
        signInfoModel.pdfContent = null;
        signInfoModel.chunksCount = totalChunks;
        if (signInfoModel.signatureType && parseInt(signInfoModel.signatureType) === parseInt(PdfSignExtension.Enum.SignTypeEnum.TimeStamp)) {
            signInfoModel.hasVisibleSigniture = false;
        }

        chrome.runtime.sendMessage(PdfSignExtension.Enum.Extensions.PdfSignExtension, {
            EventName: PdfSignExtension.Enum.EventName.PreviewPdf,
            model: signInfoModel
        });

        delete signInfoModel;


        PdfSignExtension.SendPdfInChunk(pdf, id);
    }

    pdf = null;
}

//zema lista so sertifikati
PdfSignExtension.ChooseCertificate = function (signInfoModel, successfulCallback, errorCallback) {
    var id = PdfSignExtension.CreateGuid();
    signInfoModel.id = id;
    PdfSignExtension.callbacks[id] = new PdfSignExtension.CallbackData(successfulCallback, errorCallback);
    chrome.runtime.sendMessage(PdfSignExtension.Enum.Extensions.PdfSignExtension, {
        EventName: PdfSignExtension.Enum.EventName.ListAndChooseCertificate,
        model: signInfoModel
    });
    delete signInfoModel;
};


//enkriptira pdf so password
PdfSignExtension.EncryptPdfWithPassword = function (model, successfulCallback, errorCallback) {
    var id = PdfSignExtension.CreateGuid();
    model.id = id;
    PdfSignExtension.callbacks[id] = new PdfSignExtension.CallbackData(successfulCallback, errorCallback);
    var pdf = model.pdfContent;
    if (PdfSignExtension.pdfMaxFileSize < pdf.length) {
        chrome.runtime.sendMessage(PdfSignExtension.Enum.Extensions.PdfSignExtension, {
            EventName: PdfSignExtension.Enum.EventName.GetLocalizedErrorMessage,
            model: {
                message: PdfSignExtension.Enum.ErrorCodes.PdfMaxSizeExceeded,
                id: id
            }
        });
    } else {
        var totalChunks = Math.ceil(pdf.length / PdfSignExtension.chunkSize);
        model.pdfContent = null;
        model.chunksCount = totalChunks;

        chrome.runtime.sendMessage(PdfSignExtension.Enum.Extensions.PdfSignExtension, {
            EventName: PdfSignExtension.Enum.EventName.EncryptPdfWithPassword,
            model: model
        });
        delete model;

        var stringChunk = "";
        for (var i = 0; i < totalChunks; i++) {
            stringChunk = pdf.slice(i * PdfSignExtension.chunkSize, (i + 1) * PdfSignExtension.chunkSize).toString();
            chrome.runtime.sendMessage(PdfSignExtension.Enum.Extensions.PdfSignExtension, {
                EventName: PdfSignExtension.Enum.EventName.EncryptPdfWithPasswordChunk,
                model: { id: id, chunk: stringChunk, orderNumber: i + 1, chunksCount: totalChunks }
            });
        }
        stringChunk = null;
    }

    pdf = null;
};

//enkriptira pdf so certificate
PdfSignExtension.EncryptPdfWithCertificate = function (model, successfulCallback, errorCallback) {
    var id = PdfSignExtension.CreateGuid();
    model.id = id;
    PdfSignExtension.callbacks[id] = new PdfSignExtension.CallbackData(successfulCallback, errorCallback);

    var pdf = model.pdfContent;
    if (PdfSignExtension.pdfMaxFileSize < pdf.length) {
        chrome.runtime.sendMessage(PdfSignExtension.Enum.Extensions.PdfSignExtension, {
            EventName: PdfSignExtension.Enum.EventName.GetLocalizedErrorMessage,
            model: {
                message: PdfSignExtension.Enum.ErrorCodes.PdfMaxSizeExceeded,
                id: id
            }
        });
    } else {
        var totalChunks = Math.ceil(pdf.length / PdfSignExtension.chunkSize);
        model.pdfContent = null;
        model.chunksCount = totalChunks;

        chrome.runtime.sendMessage(PdfSignExtension.Enum.Extensions.PdfSignExtension, {
            EventName: PdfSignExtension.Enum.EventName.EncryptPdfWithCertificate,
            model: model
        });
        delete model;

        var stringChunk = "";
        for (var i = 0; i < totalChunks; i++) {
            stringChunk = pdf.slice(i * PdfSignExtension.chunkSize, (i + 1) * PdfSignExtension.chunkSize).toString();
            chrome.runtime.sendMessage(PdfSignExtension.Enum.Extensions.PdfSignExtension, {
                EventName: PdfSignExtension.Enum.EventName.EncryptPdfWithCertificateChunk,
                model: { id: id, chunk: stringChunk, orderNumber: i + 1, chunksCount: totalChunks }
            });
        }
        stringChunk = null;
    }

    pdf = null;
};

//sign hash
PdfSignExtension.SignHashCmsSignedData = function (model, successfulCallback, errorCallback) {
    var id = PdfSignExtension.CreateGuid();
    model.id = id;

    PdfSignExtension.callbacks[id] = new PdfSignExtension.CallbackData(successfulCallback, errorCallback);

    chrome.runtime.sendMessage(PdfSignExtension.Enum.Extensions.PdfSignExtension, {
        EventName: PdfSignExtension.Enum.EventName.SignHashCmsSignedData,
        model: model,
        direction: PdfSignExtension.SendMessageFromPage,
        extensionId: PdfSignExtension.ExtensionId
    });

    delete model;
};

PdfSignExtension.SignHashSignature = function (model, successfulCallback, errorCallback) {
    var id = PdfSignExtension.CreateGuid();
    model.id = id;

    PdfSignExtension.callbacks[id] = new PdfSignExtension.CallbackData(successfulCallback, errorCallback);

    chrome.runtime.sendMessage(PdfSignExtension.Enum.Extensions.PdfSignExtension, {
        EventName: PdfSignExtension.Enum.EventName.SignHashSignature,
        model: model,
        direction: PdfSignExtension.SendMessageFromPage,
        extensionId: PdfSignExtension.ExtensionId
    });

    delete model;
};

PdfSignExtension.b64toArray = function (b64Data) {
    var byteCharacters = atob(b64Data);
    var byteNumbers = new Array(byteCharacters.length);
    for (var i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    return new Uint8Array(byteNumbers);
}


//content.js listener
window.addEventListener("message", function (event) {
    if (event.source !== window) return;

    var checkEvent = false;
    if (event.data && event.data.Id && PdfSignExtension.callbacks[event.data.Id]) checkEvent = true;

    if (event.data && event.data.model && event.data.model.Id && PdfSignExtension.callbacks[event.data.model.Id]) checkEvent = true;

    if (event.data && event.data.model && event.data.model.id && PdfSignExtension.callbacks[event.data.model.id]) checkEvent = true;

    if (!checkEvent)
        return;

    if (event.data.EventName) {
        if (event.data.EventName === PdfSignExtension.Enum.EventName.ListCertificatesAndSignPdf) {
            chrome.runtime.sendMessage(PdfSignExtension.Enum.Extensions.PdfSignExtension, {
                EventName: PdfSignExtension.Enum.EventName.ListCertificatesAndSignPdf,
                model: event.data.model
            });
            PdfSignExtension.callbacks[event.data.model.id].onSignStartCallback();
        } else if (event.data.EventName === PdfSignExtension.Enum.EventName.GetPdfPage) {
            chrome.runtime.sendMessage(PdfSignExtension.Enum.Extensions.PdfSignExtension, {
                EventName: PdfSignExtension.Enum.EventName.GetPdfPage,
                model: event.data.model
            });
        } else if (event.data.EventName === PdfSignExtension.Enum.EventName.SaveCertificate) {
            chrome.runtime.sendMessage(PdfSignExtension.Enum.Extensions.PdfSignExtension, {
                EventName: PdfSignExtension.Enum.EventName.SaveCertificate,
                model: event.data.model
            });
        } else if (event.data.EventName === PdfSignExtension.Enum.EventName.SigningPdfWithCustomDialog) {
            chrome.runtime.sendMessage(PdfSignExtension.Enum.Extensions.PdfSignExtension, {
                EventName: PdfSignExtension.Enum.EventName.SigningPdfWithCustomDialog,
                model: event.data.model
            });
        } else if (event.data.EventName === PdfSignExtension.Enum.EventName.SignPdfWithCustomDialog) {
            chrome.runtime.sendMessage(PdfSignExtension.Enum.Extensions.PdfSignExtension, {
                EventName: PdfSignExtension.Enum.EventName.SignPdfWithCustomDialog,
                model: event.data.model
            });
        } else if (event.data.EventName === PdfSignExtension.Enum.EventName.DeleteCertificate) {
            chrome.runtime.sendMessage(PdfSignExtension.Enum.Extensions.PdfSignExtension, {
                EventName: PdfSignExtension.Enum.EventName.DeleteCertificate,
                model: event.data.model
            });
        } else if (event.data.EventName === PdfSignExtension.Enum.EventName.OnOpenModal) {
            PdfSignExtension.callbacks[event.data.model.Id].onDialogShownCallback();
        } else if (event.data.EventName === PdfSignExtension.Enum.EventName.Setup) {
        } else if (event.data.EventName === "After" + PdfSignExtension.Enum.EventName.GetCertificates && event.data.IsSuccess) {
            PdfSignExtension.callbacks[event.data.Id].successfulCallback(event.data.Certificates);
        } else if (event.data.EventName === "After" + PdfSignExtension.Enum.EventName.SignHashCmsSignedData && event.data.IsSuccess) {
            PdfSignExtension.callbacks[event.data.Id].successfulCallback(event.data.SignHash);
        } else if (event.data.EventName === "After" + PdfSignExtension.Enum.EventName.SignHashSignature && event.data.IsSuccess) {
            PdfSignExtension.callbacks[event.data.Id].successfulCallback(event.data.SignHash);
        }
        else if (event.data.EventName === "After" + PdfSignExtension.Enum.EventName.IsNativeHostApplicationUpToDate) {

            if (event.data.Id.endsWith(PdfSignExtension.Enum.EventName.GetNativeHostApplicationVersion)) {
                PdfSignExtension.callbacks[event.data.Id].successfulCallback(event.data.Data);
                return;
            }

            var returnData = [];
            returnData.IsNativeHostAppUpToDate = event.data.Data >= PdfSignExtension.Enum.NativeHostApplication.Version;

            var osName = PdfSignExtension.CheckOS();
            if (osName === PdfSignExtension.Enum.OS.Win) {
                returnData.DownLoadUrl = PdfSignExtension.Enum.NativeHostApplication.Url;
            }

            if (osName === PdfSignExtension.Enum.OS.Mac) {
                returnData.DownLoadUrl = PdfSignExtension.Enum.NativeHostApplication.UrlMac;
            }

            PdfSignExtension.callbacks[event.data.Id].successfulCallback(returnData);
        }
        else if (event.data.EventName === "After" + PdfSignExtension.Enum.EventName.GetLocalizedErrorMessage) {
            PdfSignExtension.callbacks[event.data.model.Id].errorCallback(event.data.model.Data);
        } else if (event.data.EventName === PdfSignExtension.Enum.EventName.GetCoordinate) {
            PdfSignExtension.callbacks[event.data.model.id].successfulCallback(event.data);
        }
        else if (event.data.EventName === PdfSignExtension.Enum.EventName.CloseDialog) {
            PdfSignExtension.callbacks[event.data.model.id].onCloseDialogCallback(event.data);
        }
        else {
            if (event.data.IsSuccess) {
                var eventsWithChunks = [
                    PdfSignExtension.Enum.EventName.ListCertificatesAndSignPdf,
                    PdfSignExtension.Enum.EventName.EncryptPdfWithPassword,
                    PdfSignExtension.Enum.EventName.EncryptPdfWithCertificate,
                    PdfSignExtension.Enum.EventName.SignPdfWithCustomDialog,
                    PdfSignExtension.Enum.EventName.SilentSignPdf
                ];
                eventsWithChunks = eventsWithChunks.map(function (eventName) {
                    return "After" + eventName;
                });
                if (event.data.EventName && eventsWithChunks.indexOf(event.data.EventName) !== -1) {
                    PdfSignExtension.pdfInfo.pdf[event.data.CurrentPage] = PdfSignExtension.b64toArray(event.data.Data);
                    PdfSignExtension.pdfInfo.counter++;
                    if (PdfSignExtension.pdfInfo.counter === event.data.TotalPages) {
                        var pageSize = PdfSignExtension.pdfInfo.pdf[0].length;
                        var catArray = new Uint8Array((PdfSignExtension.pdfInfo.pdf.length - 1) * pageSize + PdfSignExtension.pdfInfo.pdf[PdfSignExtension.pdfInfo.pdf.length - 1].length);
                        for (var i = 0; i < PdfSignExtension.pdfInfo.pdf.length; i++) {
                            catArray.set(PdfSignExtension.pdfInfo.pdf[i], pageSize * i);
                            PdfSignExtension.pdfInfo.pdf[i] = null;
                        }
                        PdfSignExtension.callbacks[event.data.Id].successfulCallback(catArray);
                        PdfSignExtension.pdfInfo = { pdf: [], counter: 0 };
                    }
                } else {
                    PdfSignExtension.callbacks[event.data.Id].successfulCallback(event.data.Data);
                }
            } else {
                PdfSignExtension.pdfInfo = { pdf: [], counter: 0 };;
                PdfSignExtension.callbacks[event.data.Id].errorCallback(event.data.Data);
            }
        }
        delete event;
    }
}, false);

//Kreiranje na unikatno id
PdfSignExtension.CreateGuid = function () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

//Klasa za hendlanje na povratnite poraki
PdfSignExtension.CallbackData = function (successfulCallback, errorCallback, onDialogShownCallback, onSignStartCallback, onCloseDialogCallback) {

    var defaultErrorCallback = function (data) {
        console.log("Error occured: " + data);
    }
    var defaultSuccessfulCallback = function (data) {
        console.log("Successful action");
    }
    var defaultOnDialogShownCallback = function (data) {
        console.log("On dialog shown");
    }
    var defaultOnSignStartCallback = function (data) {
        console.log("On sign start");
    }
    var defaultOnCloseDialogCallback = function (data) {
        console.log("On dialog close");
    }

    errorCallback = errorCallback == undefined || typeof errorCallback != "function" ? defaultErrorCallback : errorCallback;
    successfulCallback = successfulCallback == undefined || typeof successfulCallback != "function" ? defaultSuccessfulCallback : successfulCallback;
    onDialogShownCallback = onDialogShownCallback == undefined || typeof onDialogShownCallback != "function" ? defaultOnDialogShownCallback : onDialogShownCallback;
    onSignStartCallback = onSignStartCallback == undefined || typeof onSignStartCallback != "function" ? defaultOnSignStartCallback : onSignStartCallback;
    onCloseDialogCallback = onCloseDialogCallback == undefined || typeof onCloseDialogCallback != "function" ? defaultOnCloseDialogCallback : onCloseDialogCallback;

    this.successfulCallback = successfulCallback;
    this.errorCallback = errorCallback;
    this.onDialogShownCallback = onDialogShownCallback;
    this.onSignStartCallback = onSignStartCallback;
    this.onCloseDialogCallback = onCloseDialogCallback;
}

PdfSignExtension.SendPdfInChunk = function (pdf, id) {
    var totalChunks = Math.ceil(pdf.length / PdfSignExtension.chunkSize);

    var stringChunk = "";
    for (var i = 0; i < totalChunks; i++) {
        stringChunk = pdf.slice(i * PdfSignExtension.chunkSize, (i + 1) * PdfSignExtension.chunkSize).toString();

        chrome.runtime.sendMessage(PdfSignExtension.Enum.Extensions.PdfSignExtension, {
            EventName: PdfSignExtension.Enum.EventName.PdfChunk,
            model: { id: id, chunk: stringChunk, orderNumber: i + 1, chunksCount: totalChunks }
        });
    }
    stringChunk = null;
};





