var PdfSigningExtensionLocalisation = PdfSigningExtensionLocalisation || {};

PdfSigningExtensionLocalisation.eng = {
    errorCodes: {
        "DefaultError": "Unhandled error occured. Please contact your administrator.",
        "NotImplementedEvent": "The event is not implemented.",
        "NotValidCertificate": "Not a valid certificate.",
        "InvalidXmlForSigning": "Not a valid xml for signing.",
        "InvalidXmlFormat": "Not a valid xml format.",
        "PageExtractFail": "Error while extracting page from pdf.",
        "InvalidTimeStampResponse": "Invalid response from TSA server.",
        "NotImplementedSigningType": "The signing type is not implemented.",
        "NullXml": "The xml is null.",
        "NullCertificate": "The certificate is null.",
        "NullTsaResponseStream": "The stream from TSA server is null.",
        "PdfMaxSizeExceeded": "PDF file size exceeded. The file won't be processed.",
        "BadUserPassword": "Bad owner password. The file won`t be processed.",
        "EncryptedDocument": "Encrypted documents can not be signed",
        "EmptyCertificate": "Choose a certificate",
        "EmptyPassword": "Choose a password for certificate",
        "InvalidCertificateOrPassword": "Invalid certificate or a certificate password.",
        "NotFoundCertificate": "Can not find chosen certificate",
        "ErrorParsingParameter": "Invalid parametars",
        "EmptyOrInvalidSignatureProductionPlace": "Invalid data for signature production place",
        "UnableToFindLtvData": "Can not retrieve needed information from certificate issuer for signature creation",
        "BadHash": "Bad hash",
        "InvalidDigest": "Invalid Base-64 string"
    },
    dialogMessages: {
        "SIGNATURES_PANEL_DESC": "Signatures panel.",
        "UPLOAD_IMAGE_DESC": "Click to upload an image that will represent your signature.",
        "PREVIOUS_PAGE_DESC": "Preview the previous page of the PDF.",
        "NEXT_PAGE_DESC": "Preview the next page of the PDF.",
        "SIGN_PDF_DESC": "Click to sign the PDF using your digital signature.",
        "PDF_SIGN_HEADER": "Sign the document",
        "PDF_ADD_CERTIFICATE": "Add new certificate",
        "PDF_ADD_PASSWORD": "Password",
        "PDF_SAVE_CERTIFICATE": "Create",
        "PDF_CHOOSE_CERTIFICATE": "Choose certificate",
        "PDF_ISSUER": "Issuer",
        "PDF_DATE_TO": "Expires",
        "PDF_SIGNING_PASSWORD": "Certificate password",
        "PDF_SIGN_PDF": "Sign the document",
        "PDF_INFO": "The digital certificate is required for digital signing of а document. Files where certificates are stored, generally have .PFX or .P12 extension. This types of files contain the public and the private key. </br></br>To sign with a certificate from file, please add the certificate or choose it from the list of previously added certificates.",
        "INVALID_EXTENSION": "Choose file with .pfx or .p12 extension",
        "ADD_CERTIFICATE": "Certificate was successfully added",
        "DELETE_CERTIFICATE": "Certificate was successfully deleted",
        "DRAW_SIGNATURE_DESC": "Draw Your signature.",
        "CLOSE": "Close",
        "SAVE": "Save",
        "GET_COORDINATE_DESC": "Get coordinate of signature."
    },
    dateFormatFunction: function (date) {
        var dateInfos = {
            dayNames: [
                "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
                "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
            ],
            monthNames: [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
                "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
            ]
        };

        var year = date.getFullYear();
        var month = PdfSigningExtensionUtils.padLeft(date.getMonth() + 1, 2);
        var day = PdfSigningExtensionUtils.padLeft(date.getDay(), 2);
        var hours = PdfSigningExtensionUtils.padLeft(date.getHours(), 2);
        var minutes = PdfSigningExtensionUtils.padLeft(date.getMinutes(), 2);
        var seconds = PdfSigningExtensionUtils.padLeft(date.getSeconds(), 2);

        var dateString = month + "/" + day + "/" + year + " " + hours + ":" + minutes + ":" + seconds;
        return dateString;
    },
    localizeLineThickness: function () {
        var lineThickness = [{ "value": "Fine", "thick": "1", "css": "font-weight: lighter" }, { "value": "Medium", "thick": "3", "css": "font-weight: bold" }, { "value": "Thick", "thick": "5", "css": "font-weight: bolder" }];
        var options = "";
        for (var i = 0; i < lineThickness.length; i++) {
            options += '<option value="' + lineThickness[i].thick + '" style="' + lineThickness[i].css + '">' + lineThickness[i].value + '</option>';
        }
        return options;
    },
    localizeLineColor: function () {
        var lineColor = [{ "value": "Black", "color": "000000", "css": "color: #000000; font-weight: bold" },
        { "value": "Purple", "color": "cb3594", "css": "color: #cb3594; font-weight: bold" },
        { "value": "Green", "color": "659b41", "css": "color: #659b41; font-weight: bold" },
        { "value": "Yellow", "color": "ffcf33", "css": "color: #ffcf33; font-weight: bold" },
        { "value": "Brown", "color": "986928", "css": "color: #986928; font-weight: bold" }];
        var options = "";
        for (var i = 0; i < lineColor.length; i++) {
            options += '<option value="' + lineColor[i].color + '" style="' + lineColor[i].css + '">' + lineColor[i].value + '</option>';
        }
        return options;
    }
};