var PdfSigningExtensionLocalisation = PdfSigningExtensionLocalisation || {};

PdfSigningExtensionLocalisation.slo = {
    errorCodes: {
        "DefaultError": "Prišlo je do neobdelane napake. Obrnite se na svojega skrbnika.",
        "NotImplementedEvent": "Dogodek se ne izvaja.",
        "NotValidCertificate": "Digitalno potrdilo ni veljavno.",
        "InvalidXmlForSigning": "Ni veljaven XML dokument za podpisovanje.",
        "InvalidXmlFormat": "Ni veljavna oblika XML",
        "PageExtractFail": "Napaka pri pridobivanju strani iz pdf-ja.",
        "InvalidTimeStampResponse": "Neveljaven odziv TSA strežnika.",
        "NotImplementedSigningType": "Vrsta podpisa se ne izvaja.",
        "NullXml": "XLM je ničen.",
        "NullCertificate": "Potrdilo je nično.",
        "NullTsaResponseStream": "Prenos s TSA strežnika je ničen. ",
        "PdfMaxSizeExceeded": "PDF datoteka je preobsežna in ne bo obdelana.",
        "BadUserPassword": "Napačno geslo. Datoteka ne bo obdelana.",
        "EncryptedDocument": "Šifriranih dokumentov ni mogoče podpisati",
        "EmptyCertificate": "Izberite digitalno potrdilo",
        "EmptyPassword": "Izberite geslo za digitalno potrdilo",
        "InvalidCertificateOrPassword": "Neveljavno digitalno potrdilo ali geslo za potrdilo.",
        "NotFoundCertificate": "Izbranega potrdila ni mogoče najti",
        "ErrorParsingParameter": "Neveljavni parametri",
        "EmptyOrInvalidSignatureProductionPlace": "Neveljavni podatki za mesto izdelave podpisov",
        "UnableToFindLtvData": "Ne morem pridobiti potrebnih informacij od izdajatelja potrdil za izdelavo podpisa LTV",
        "BadHash": "Slab haš",
        "InvalidDigest": "Neveljaven niz razprševanja Base-64"
    },
    dialogMessages: {
        "SIGNATURES_PANEL_DESC": "Plošča s podpisi",
        "UPLOAD_IMAGE_DESC": "Kliknite, če želite naložiti sliko, ki bo predstavljala vaš podpis.",
        "PREVIOUS_PAGE_DESC": "Predogled prejšnje strani PDF dokumenta.",
        "NEXT_PAGE_DESC": "Predogled naslednje strani PDF dokumenta.",
        "SIGN_PDF_DESC": "Kliknite, da podpišete PDF s svojim digitalnim podpisom.",
        "PDF_SIGN_HEADER": "Podpiši dokument",
        "PDF_ADD_CERTIFICATE": "Dodaj novo potrdilo",
        "PDF_ADD_PASSWORD": "Geslo",
        "PDF_SAVE_CERTIFICATE": "Ustvari",
        "PDF_CHOOSE_CERTIFICATE": "Izberi digitalno potrdilo",
        "PDF_ISSUER": "Izdajatelj",
        "PDF_DATE_TO": "Poteče",
        "PDF_SIGNING_PASSWORD": "Geslo za digitalno potrdilo",
        "PDF_SIGN_PDF": "Podpiši dokument",
        "PDF_INFO": "Digitalno potrdilo je potrebno za digitalno podpisovanje dokumenta. Datoteke, v katerih so shranjeni certifikati, imajo navadno razširitev .PFX ali .P12. Te vrste datotek vsebujejo javni in zasebni ključ. </br> </br> Če želite podpisati s potrdilom iz datoteke, ga dodajte ali ga izberite na seznamu prej dodanih potrdil.",
        "INVALID_EXTENSION": "Izberite datoteko s končnico .pfx ali .p12 ",
        "ADD_CERTIFICATE": "Potrdilo je bilo uspešno dodano",
        "DELETE_CERTIFICATE": "Potrdilo je bilo uspešno izbrisano",
        "DRAW_SIGNATURE_DESC": "Nariši svoj podpis",
        "CLOSE": "Zapri",
        "SAVE": "Shrani",
        "GET_COORDINATE_DESC": "Pridobi koordinate podpisa."
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