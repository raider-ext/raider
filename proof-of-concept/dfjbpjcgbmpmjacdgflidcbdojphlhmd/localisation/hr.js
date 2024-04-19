var PdfSigningExtensionLocalisation = PdfSigningExtensionLocalisation || {};

PdfSigningExtensionLocalisation.hr = {
    errorCodes: {
        "DefaultError": "Dogodila se neodgovorena iznimka. Treba kontaktirati administratora.",
        "NotImplementedEvent": "Događaj nije implementiran.",
        "NotValidCertificate": "Nema pravosnažnog certifikata.",
        "InvalidXmlForSigning": "Neispravan XML za potpisivanje.",
        "InvalidXmlFormat": "Neispravan XML format.",
        "PageExtractFail": "Dogodila se greška pri izdvajanju stranice iz PDF-a.",
        "InvalidTimeStampResponse": "Neispravan odaziv TSA poslužitelja.",
        "NotImplementedSigningType": "Vrsta potpisivanja nije implementirana.",
        "NullXml": "XML je prazan.",
        "NullCertificate": "Certifikat je prazan.",
        "NullTsaResponseStream": "Podaci sa TSA poslužitelja su prazni.",
        "PdfMaxSizeExceeded": "Ograničenje veličine PDF datoteke je dosegnuto. Datoteka se ne može obraditi.",
        "BadUserPassword": "Loša vlasnička lozinka. Datoteka se ne može obraditi.",
        "EncryptedDocument": "Šifrirani dokument ne može biti potpisan.",
        "EmptyCertificate": "Odabir certifikata.",
        "EmptyPassword": "Odabir lozinke za certifikat.",
        "InvalidCertificateOrPassword": "Neispravan certifikat ili lozinka.",
        "NotFoundCertificate": "Odabrani certifikat nije pronađen.",
        "ErrorParsingParameter": "Invalid parametars",
        "EmptyOrInvalidSignatureProductionPlace": "Nevažeći podaci za mjesto proizvodnje potpisa",
        "UnableToFindLtvData": "Ne mogu dohvatiti potrebne podatke od izdavatelja sertifikata za stvaranje potpisa",
        "BadHash": "Loš hash",
        "InvalidDigest": "Nevažeći niz heširanja Base-64"
    },
    dialogMessages: {
        "SIGNATURES_PANEL_DESC": "Ploča s potpisima.",
        "UPLOAD_IMAGE_DESC": "Kliknite za prijenos slike koja će predstavljati potpis.",
        "PREVIOUS_PAGE_DESC": "Pregled prethodne stranice PDF-a.",
        "NEXT_PAGE_DESC": "Pregled sljedeće stranice PDF-a.",
        "SIGN_PDF_DESC": "Kliknite za potpisivanje PDF-a koristeći vaš digitalni potpis.",
        "PDF_SIGN_HEADER": "Potpis dokumenta.",
        "PDF_ADD_CERTIFICATE": "Dodavanje novog certifikata.",
        "PDF_ADD_PASSWORD": "Lozinka",
        "PDF_SAVE_CERTIFICATE": "Kreiranje",
        "PDF_CHOOSE_CERTIFICATE": "Odabir certifikata",
        "PDF_ISSUER": "Izdavatelj",
        "PDF_DATE_TO": "Ističe",
        "PDF_SIGNING_PASSWORD": "Lozinka certifikata",
        "PDF_SIGN_PDF": "Potpis dokumenta",
        "PDF_INFO": "Digitalni certifikat je neophodan za fdigitalno potpisivanje dokumenta. Takve datoteke uobičajeno imaju nastavke .PFX ili .P12, a sadrže javni i privatni ključ.</br></br>Za potpisivanje sa certifikatom iz datoteke, molimo dodavanje certifikata ili odabir s popisa prethodno dodanih certifikata.",
        "INVALID_EXTENSION": "Odabir datoteke s nastavkom .pfx ili .p12",
        "ADD_CERTIFICATE": "Certifikat je uspješno dodan",
        "DELETE_CERTIFICATE": "Certifikat je uspješno obrisan",
        "DRAW_SIGNATURE_DESC": "Crtanje vašeg potpisa.",
        "CLOSE": "Zatvaranje",
        "SAVE": "Čuvanje",
        "GET_COORDINATE_DESC": "Get coordinate of signature."
    },
    dateFormatFunction: function (date) {
        var dateInfos = {
            dayNames: [
                "Нед", "Пон", "Вто", "Среда", "Чет", "Петок", "Саб",
                "Недела", "Понеделник", "Вторник", "Среда", "Четврток", "Петок", "Сабота"
            ],
            monthNames: [
                "Јан", "Фев", "Март", "Април", "Мај", "Јуни", "Јули", "Авг", "Септ", "Окт", "Ное", "Дек",
                "Јануари", "Февруари", "Март", "Април", "Мај", "Јуни", "Јули", "Август", "Септември", "Октомври", "Ноември", "Декември"
            ]
        };

        var year = date.getFullYear();
        var month = PdfSigningExtensionUtils.padLeft(date.getMonth() + 1, 2);
        var day = PdfSigningExtensionUtils.padLeft(date.getDay(), 2);
        var hours = PdfSigningExtensionUtils.padLeft(date.getHours(), 2);
        var minutes = PdfSigningExtensionUtils.padLeft(date.getMinutes(), 2);
        var seconds = PdfSigningExtensionUtils.padLeft(date.getSeconds(), 2);

        var dateString = day + "." + month + "." + year + " " + hours + ":" + minutes + ":" + seconds;
        return dateString;
    },
    localizeLineThickness: function () {
        var lineThickness = [{ "value": "Fino", "thick": "1", "css": "font-weight: lighter" }, { "value": "Srednje", "thick": "3", "css": "font-weight: bold" }, { "value": "Puno", "thick": "5", "css": "font-weight: 1000" }];
        var options = "";
        for (var i = 0; i < lineThickness.length; i++) {
            options += '<option value="' + lineThickness[i].thick + '" style="' + lineThickness[i].css + '">' + lineThickness[i].value + '</option>';
        }
        return options;
    },
    localizeLineColor: function () {
        var lineColor = [{ "value": "Crno", "color": "000000", "css": "color: #000000; font-weight: bold" },
        { "value": "Ljubičasto", "color": "cb3594", "css": "color: #cb3594; font-weight: bold" },
        { "value": "Zeleno", "color": "659b41", "css": "color: #659b41; font-weight: bold" },
        { "value": "Žuto", "color": "ffcf33", "css": "color: #ffcf33; font-weight: bold" },
        { "value": "Smeđe", "color": "986928", "css": "color: #986928; font-weight: bold" }];
        var options = "";
        for (var i = 0; i < lineColor.length; i++) {
            options += '<option value="' + lineColor[i].color + '" style="' + lineColor[i].css + '">' + lineColor[i].value + '</option>';
        }
        return options;
    }
};