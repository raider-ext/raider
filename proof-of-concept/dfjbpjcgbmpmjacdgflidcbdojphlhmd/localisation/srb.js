var PdfSigningExtensionLocalisation = PdfSigningExtensionLocalisation || {};

PdfSigningExtensionLocalisation.srb = {
    errorCodes: {
        "DefaultError": "Došlo je do greške u radu sistema. Molimo kontaktirajte administratora",
        "NotImplementedEvent": "Događaj nije podržan",
        "NotValidCertificate": "Sertifikat nije validan",
        "InvalidXmlForSigning": "XML dokument nije validan za potpisivanje",
        "InvalidXmlFormat": "XML format nije validan",
        "PageExtractFail": "Došlo je do greške prilikom izdvajanja stranice iz PDF dokumenta",
        "InvalidTimeStampResponse": "Nevažeći odgovor od TSA servera",
        "NotImplementedSigningType": "Vrsta potpisa nije podržana",
        "NullXml": "XML je prazan",
        "NullCertificate": "Sertifikat je prazan",
        "NullTsaResponseStream": "Nedostupan prenos podataka sa TSA servera",
        "PdfMaxSizeExceeded": "Prekoračena veličina PDF dokumenta. Dokument neće biti procesuiran",
        "BadUserPassword": "Pogrešna lozinka. Dokument neće biti procesuiran",
        "EncryptedDocument": "Kriptovani dokumenti se ne mogu potpisati",
        "EmptyCertificate": "Izaberite sertifikat",
        "EmptyPassword": "Izaberite šifru za sertifikat",
        "InvalidCertificateOrPassword": "Nevažeči sertifikat ili šifra",
        "NotFoundCertificate": "Izabrani sertifikat nije pronađen",
        "ErrorParsingParameter": "Nevažeči parametri",
        "UnableToFindLtvData": "Ne mogu dobiti potrebne informacije od izdavaoca sertifikata za kreiranje potpisa",
        "BadHash": "Лош хеш",
        "InvalidDigest": "Неважећи Base-64 string хеша"
    },
    dialogMessages: {
        "SIGNATURES_PANEL_DESC": "Panel za potpisivanje",
        "UPLOAD_IMAGE_DESC": "Kliknite da biste postavili sliku koja će predstavljati Vaš potpis",
        "PREVIOUS_PAGE_DESC": "Prikaži prethodnu stranicu PDF dokumenta",
        "NEXT_PAGE_DESC": "Prikaži sledeću stranicu PDF dokumenta",
        "SIGN_PDF_DESC": "Kliknite da biste potpisali PDF dokument koristeći digitalni potpis",
        "PDF_SIGN_HEADER": "Potpiši dokument",
        "PDF_ADD_CERTIFICATE": "Dodajte novi sertifikat",
        "PDF_ADD_PASSWORD": "Šifra",
        "PDF_SAVE_CERTIFICATE": "Kreiraj",
        "PDF_CHOOSE_CERTIFICATE": "Izaberi sertifikat",
        "PDF_ISSUER": "Izdavač",
        "PDF_DATE_TO": "Ističe",
        "PDF_SIGNING_PASSWORD": "Šifra za sertifikat",
        "PDF_SIGN_PDF": "Potpiši dokument",
        "PDF_INFO": "Za digitalno potpisivanje dokumenata potreban je digitalni sertifikat. Dokuemnta u kojima se čuvaju sertifikati obično imaju .PFX ili .P12 ekstenziju. Ove vrste dokumenata sadrže javni i privatni ključ. </br> </br> Da biste se potpisali sa sertifikatom iz dokumenta, dodajte ga ili ga izaberite sa liste prethodno dodatih sertifikata",
        "INVALID_EXTENSION": "Izaberi dokument ili .pfx ili .p12 ekstenziju",
        "ADD_CERTIFICATE": "Ubacivanje sertifikata je uspešno ",
        "DELETE_CERTIFICATE": "Brisanje sertifikata je uspešno",
        "DRAW_SIGNATURE_DESC": "Potpišite se ",
        "CLOSE": "Zatvori",
        "SAVE": "Sačuvaj",
        "GET_COORDINATE_DESC": "Izaberi mesto potpisa"
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