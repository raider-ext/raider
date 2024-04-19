var PdfSigningExtensionLocalisation = PdfSigningExtensionLocalisation || {};

PdfSigningExtensionLocalisation.cz = {
    errorCodes: {
        "DefaultError": "Neočekávaná chyba. Prosím kontaktujte administrátora.",
        "NotImplementedEvent": "Neočekávaná chyba.",
        "NotValidCertificate": "Neplatný certifikát.",
        "InvalidXmlForSigning": "Není možné podepsat XML dokument. Dokument je neplatný.",
        "InvalidXmlFormat": "Neplatný formát XML dokumentu.",
        "PageExtractFail": "Chyba při exportu stránky z PDF dokumentu.",
        "InvalidTimeStampResponse": "Chybná odpověď ze strany TSA serveru.",
        "NotImplementedSigningType": "Typ podpisu není definován.",
        "NullXml": "XML dokument je prázdný.",
        "NullCertificate": "Certifikát je prázdný.",
        "NullTsaResponseStream": "Chybí vstupní data od TSA serveru.",
        "PdfMaxSizeExceeded": "Velikost PDF souboru je příliš velká. Operace ukončena.",
        "BadUserPassword": "Nesprávné heslo. Operace zrušena.",
        "EncryptedDocument": "Šifrované dokumenty nemohou být digitálně podepsány.",
        "EmptyCertificate": "Zvolte certifikát.",
        "EmptyPassword": "Zvolte heslo k certifikátu.",
        "InvalidCertificateOrPassword": "Neplatný certifikát, nebo heslo k certifikátu.",
        "NotFoundCertificate": "Vybraný certifikát nemohl být nalezen.",
        "ErrorParsingParameter": "Neplatné parametry.",
        "EmptyOrInvalidSignatureProductionPlace": "Neplatná data pro místo výroby podpisů",
        "UnableToFindLtvData": "Nelze načíst potřebné informace od vydavatele certifikátů pro vytvoření podpisu",
        "BadHash": "Špatný hash",
        "InvalidDigest": "Neplatný řetězec hash Base-64"
    },
    dialogMessages: {
        "SIGNATURES_PANEL_DESC": "Panel podpisů",
        "UPLOAD_IMAGE_DESC": "Kliknutím nahrajete obrázek reprezentující Váš podpis.",
        "PREVIOUS_PAGE_DESC": "Náhled předchozí stránky PDF dokumentu.",
        "NEXT_PAGE_DESC": "Náhled další stránky PDF dokumentu.",
        "SIGN_PDF_DESC": "Kliknutím podepíšete PDF dokument digitálním podpisem.",
        "PDF_SIGN_HEADER": "Podepsat dokument",
        "PDF_ADD_CERTIFICATE": "Přidat nový certifikát",
        "PDF_ADD_PASSWORD": "Heslo",
        "PDF_SAVE_CERTIFICATE": "Vytvořit",
        "PDF_CHOOSE_CERTIFICATE": "Vyberte certifikát",
        "PDF_ISSUER": "Vydavatel",
        "PDF_DATE_TO": "Vyprší",
        "PDF_SIGNING_PASSWORD": "Heslo k certifikátu",
        "PDF_SIGN_PDF": "Podepsat dokument",
        "PDF_INFO": "Pro digitální podepsání dokumentu je vyžadován digitální certifikát. Soubory s příponou .PFX nebo .P12 většinou obsahují veřejný a privátní klíč certifikátu. Pro podepsání certifikátu uloženého v souboru ho prosím přidejte, nebo vyberte ze seznamu dříve přidaných certifikátů.",
        "INVALID_EXTENSION": "Vyberte prosím soubor s příponou .PFX nebo .P12",
        "ADD_CERTIFICATE": "Certifikát byl úspěšně přidán.",
        "DELETE_CERTIFICATE": "Certifikát byl úspěšně odstraněn.",
        "DRAW_SIGNATURE_DESC": "Vytvořte grafickou podobu vašeho podpisu",
        "CLOSE": "Zavřít",
        "SAVE": "Uložit",
        "GET_COORDINATE_DESC": "Zvolte umístění podpisu"
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