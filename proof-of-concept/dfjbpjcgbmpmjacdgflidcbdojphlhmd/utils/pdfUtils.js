var PdfSigningExtensionUtils = PdfSigningExtensionUtils || {};
var PdfSigningExtensionLocalisation = PdfSigningExtensionLocalisation || {};

PdfSigningExtensionUtils.Enum = {
    OS:
     {
         Win: 1,
         Mac: 2,
         X11: 3,
         Linux: 4
     }
}

PdfSigningExtensionUtils.b64toBlob = function (b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
};
PdfSigningExtensionUtils.isNullOrEmptyString = function (string) {
    return string == undefined || typeof string != "string" || string.length === 0;
};
PdfSigningExtensionUtils.localizeString = function (stringKey, type) {
    return PdfSigningExtensionLocalisation[PdfSigningExtensionLocalisation.languageId][type][stringKey];
};
PdfSigningExtensionUtils.localizeDate = function (date) {
    return PdfSigningExtensionLocalisation[PdfSigningExtensionLocalisation.languageId]["dateFormatFunction"](date);
};
PdfSigningExtensionUtils.localizeLineThickness = function() {
    return PdfSigningExtensionLocalisation[PdfSigningExtensionLocalisation.languageId]["localizeLineThickness"]();
};
PdfSigningExtensionUtils.localizeLineColor = function() {
    return PdfSigningExtensionLocalisation[PdfSigningExtensionLocalisation.languageId]["localizeLineColor"]();
};
PdfSigningExtensionUtils.padLeft = function (str, size) {
    str = str.toString();
    var zeroes = "0";
    zeroes = zeroes.repeat(size);
    var paddedLeft = zeroes.substring(0, zeroes.length - str.length) + str;
    return paddedLeft;
};
PdfSigningExtensionUtils.CheckOS = function () {
    var osName = 0;
    if (navigator.appVersion.indexOf("Win") !== -1) osName = PdfSigningExtensionUtils.Enum.OS.Win;
    if (navigator.appVersion.indexOf("Mac") !== -1) osName = PdfSigningExtensionUtils.Enum.OS.Mac;
    if (navigator.appVersion.indexOf("X11") !== -1) osName = PdfSigningExtensionUtils.Enum.OS.X11;
    if (navigator.appVersion.indexOf("Linux") !== -1) osName = PdfSigningExtensionUtils.Enum.OS.Linux;

    return osName;
}

