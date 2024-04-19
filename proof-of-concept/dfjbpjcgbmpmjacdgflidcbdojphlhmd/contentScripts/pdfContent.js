var dialogPdf = undefined;
var PdfSigningExtensionUtils = PdfSigningExtensionUtils || {};

var PdfSigningExtensionLocalisation = PdfSigningExtensionLocalisation || {};
PdfSigningExtensionLocalisation.languageId = "eng";

var dialogCustomCertificate = undefined;

//slusa od ekstenzija
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.EventName) {
    if (message.IsSuccess != undefined && message.IsSuccess === false) {
      message.Data = {
        ErrorCode: message.ErrorCode,
        ErrorMessage: PdfSigningExtensionLocalisation[PdfSigningExtensionLocalisation.languageId]["errorCodes"][message.ErrorCode],
        ErrorStacktrace: message.Data.length === 0 ? PdfSigningExtensionLocalisation[PdfSigningExtensionLocalisation.languageId]["errorCodes"][message.ErrorCode] : message.Data
      }
    }
    if (message.EventName === "AfterPreviewPdf") {
      if (dialogPdf == undefined) {
        dialogPdf = new PdfSignExtension.DialogController(
          message.Id,
          URL.createObjectURL(PdfSigningExtensionUtils.b64toBlob(message.Data, 'application/pdf')),
          message.Left,
          message.Top,
          message.CurrentSignaturePage,
          message.CurrentPage,
          message.TotalPages,
          message.SigningImageBackground,
          message.HasVisibleSigniture,
          message.Signatures,
          message.ShowCoordinate,
          clearFunction);
        
        dialogPdf.openModal();
        window.postMessage({
          "EventName": "OnOpenModal",
          model: {
            "Id": message.Id
          }
        }, '*');
      } else {
        var pdfUrl = URL.createObjectURL(PdfSigningExtensionUtils.b64toBlob(message.Data, 'application/pdf'));
        dialogPdf.loadPdf(
          pdfUrl,
          message.CurrentPage,
          message.TotalPages);
      }
    }
    else if (message.EventName === "AfterSigningPdfWithCustomDialog" && message.IsSuccess === true) {
      if (dialogCustomCertificate === undefined) {
        dialogCustomCertificate = new PdfSignExtension.CustomCertificateDialogController(message.Id, message.Certificates, clearFunction);
      }
      dialogCustomCertificate.openModal(message.Certificates);
    }
    else if (message.EventName === "AfterSignPdfWithCustomDialog" && message.IsSuccess === false) {
      dialogCustomCertificate.errorInfo(message.Data.ErrorMessage);
    }
    else if (message.EventName === "AfterSaveCertificate") {
      if (message.IsSuccess === true) {
        dialogCustomCertificate.reloadCertificate(message.Certificates);
        dialogCustomCertificate.successInfo(PdfSigningExtensionUtils.localizeString("ADD_CERTIFICATE", "dialogMessages"));
        dialogCustomCertificate.openAccordion();
      } else
        dialogCustomCertificate.errorInfo(message.Data.ErrorMessage);
    }
    else if (message.EventName === "AfterDeleteCertificate") {
      if (message.IsSuccess === true) {
        dialogCustomCertificate.reloadCertificate(message.Certificates);
        dialogCustomCertificate.successInfo(PdfSigningExtensionUtils.localizeString("DELETE_CERTIFICATE", "dialogMessages"));
      } else
        dialogCustomCertificate.errorInfo(message.Data.ErrorMessage);
    }
    else if (message.EventName === "Setup") {
      PdfSigningExtensionLocalisation.languageId = message.languageId;
    } else if (message.EventName === "GetLocalizedErrorMessage") {
      window.postMessage({
        "EventName": "AfterGetLocalizedErrorMessage",
        model: {
          "Id": message.Id,
          "Data": {
            ErrorCode: message.Message,
            ErrorMessage: PdfSigningExtensionUtils.localizeString(message.Message, "errorCodes"),
            ErrorStacktrace: PdfSigningExtensionUtils.localizeString(message.Message, "errorCodes")
          }
        }
      }, '*');
    } else {
      if (message.EventName === "AfterSignPdfWithCustomDialog" && message.IsSuccess)
        dialogCustomCertificate.closeModal();
      window.postMessage(message, '*');
    }
  }
  delete message;
});
var clearFunction = function () {
  dialogPdf = undefined;
};

//ja injectira extensionApi.js na strana na webot
var injectApiJs = function () {
  if (document.URL.slice(-4) === ".pdf") {
    return;
  }
  var s = document.createElement('script');
  s.src = chrome.extension.getURL('extensionApi/pdfExtensionApi.js');
  s.onload = function () { this.parentNode.removeChild(this); };
  (document.head || document.documentElement).appendChild(s);
}
injectApiJs();