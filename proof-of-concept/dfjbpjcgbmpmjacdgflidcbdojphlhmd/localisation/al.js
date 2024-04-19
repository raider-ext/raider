var PdfSigningExtensionLocalisation = PdfSigningExtensionLocalisation || {};

PdfSigningExtensionLocalisation.al = {
    errorCodes: {
        "DefaultError": "Ka ndodhur nje gabim i pa trajtuar. Ju lutem kontaktoni me adminsitratorin tuaj",
        "NotImplementedEvent": "Eventi nuk eshte implementuar",
        "NotValidCertificate": "Nje certifikate jo e vlefshme",
        "InvalidXmlForSigning": "Nje xml jo e vlefshme per firmosje",
        "InvalidXmlFormat": "Nje format xml jo e vlefshme",
        "PageExtractFail": "Gabim gjate nxjerrjes se faqes nga pdf",
        "InvalidTimeStampResponse": "Pergjigje jo e vlefshme nga serveri TSA",
        "NotImplementedSigningType": "The signing type is not implemented",
        "NullXml": "xml eshte nul",
        "NullCertificate": "certifikata eshte nul",
        "NullTsaResponseStream": "Stream-i nga serveri TSA eshte nul",
        "PdfMaxSizeExceeded": "Madhesia e file-it pdf eshte kaluar. File-i nuk do te procesohet",
        "BadUserPassword": "Fjalekalimi i nje perdoruesi te keq. File-i nuk do te procesohet",
        "EncryptedDocument": "Dokumentet e shifruara nuk mund te firmosen",
        "EmptyCertificate": "Zgjidhni nje certifikate",
        "EmptyPassword": "Zgjidhni nje password per certifikate",
        "InvalidCertificateOrPassword": "certifikate e pa vlefshme ose fjalekalimi i certifikates",
        "NotFoundCertificate": "Nuk mund te gjej certifikaten e perzgjedhur",
        "ErrorParsingParameter": "Parametra te pa vlefshme",
        "EmptyOrInvalidSignatureProductionPlace": "Të dhëna të pavlefshme për vendin e prodhimit të nënshkrimit",
        "UnableToFindLtvData": "Nuk mund të marr informacionin e nevojshëm nga lëshuesi i certifikatës për krijimin e nënshkrimit",
        "BadHash": "Hasha i keq",
        "InvalidDigest": "Varg i pavlefshëm Base-64 i hash"
    },
    dialogMessages: {
        "SIGNATURES_PANEL_DESC": "Paneli i Firmosjeve",
        "UPLOAD_IMAGE_DESC": "Kliko per te ngarkuar nje imazh qe do te perfaqesoje firmen tende",
        "PREVIOUS_PAGE_DESC": "Shiko faqen e kaluar te PDF",
        "NEXT_PAGE_DESC": "Shiko faqen tjeter te PDF",
        "SIGN_PDF_DESC": "Kliko per te firmosur PDF duke perdorur firmen tuaj digitale",
        "PDF_SIGN_HEADER": "Firmos Dokumentin",
        "PDF_ADD_CERTIFICATE": "Shto nje certifikate te re",
        "PDF_ADD_PASSWORD": "Fjalekalimi",
        "PDF_SAVE_CERTIFICATE": "Krijo",
        "PDF_CHOOSE_CERTIFICATE": "Zgjidh Certifikaten",
        "PDF_ISSUER": "Leshuesi",
        "PDF_DATE_TO": "Skadon",
        "PDF_SIGNING_PASSWORD": "Fjalekalimi i certifikates",
        "PDF_SIGN_PDF": "Firmos dokumentin",
        "PDF_INFO": "Certifikata digitale kerkohet per firmosjen digitale te nje dokumenti. File-t ku certifikatat jane ruajtur, pergjithesisht kane shtojcen .PFX ose .P12.  Ky tip file permban celesin publik dhe privat </br></br>. Per te firmosur me nje certifikate nga file, ju lutem te shtoni certifikaten ose te zgjidhni  ate nga lista e certifikatave te shtuara me pare.",
        "INVALID_EXTENSION": "zgjidh nje file me shtojce .pfx ose .p12",
        "ADD_CERTIFICATE": "certifikata u shtua me sukses",
        "DELETE_CERTIFICATE": "certifikata u fshi me sukses",
        "DRAW_SIGNATURE_DESC": "Vizato firmen tuaj",
        "CLOSE": "Mbyll",
        "SAVE": "Ruaj",
        "GET_COORDINATE_DESC": "Zgjidh pozicionin e firmes"
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