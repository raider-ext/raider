var PdfSigningExtensionLocalisation = PdfSigningExtensionLocalisation || {};

PdfSigningExtensionLocalisation.hu = {
    errorCodes: {
        "DefaultError": "Nem várt hiba történt. Kérem lépjen kapcsolatba rendszergazdával",
        "NotImplementedEvent": "Az esemény nem elérhető.",
        "NotValidCertificate": "Érvénytelen tanúsítvány.",
        "InvalidXmlForSigning": "Aláírásra érvénytelen XML dokumentum.",
        "InvalidXmlFormat": "Hibás XML formátum.",
        "PageExtractFail": "Hiba történt a PDF feldolgozása során.",
        "InvalidTimeStampResponse": "Érvénytelen válasz a TSA szervertől.",
        "NotImplementedSigningType": "Aláírás-típus nem használható.",
        "NullXml": "Üres XML fájl.",
        "NullCertificate": "Üres tanúsítvány fájl.",
        "NullTsaResponseStream": "TSA szervertől nem érkezett adatfolyam.",
        "PdfMaxSizeExceeded": "PDF mérete túl nagy, a fájl nem kerül feldolgozásra.",
        "BadUserPassword": "Rossz tulajdonosi jelszó, a fájl nem kerül feldolgozásra.",
        "EncryptedDocument": "Titkosított dokumentumokat nem lehet aláírni.",
        "EmptyCertificate": "Válasszon tanúsítványt.",
        "EmptyPassword": "Adja meg a tanúsítványhoz tartozó jelszavát.",
        "InvalidCertificateOrPassword": "Hibás tanúsítvány vagy jelszó.",
        "NotFoundCertificate": "Hivatkozott tanúsítvány nem található.",
        "ErrorParsingParameter": "Érvénytelen paraméter(ek).",
        "EmptyOrInvalidSignatureProductionPlace": "Érvénytelen adatok az aláírás előállítási helyén",
        "UnableToFindLtvData": "Nem lehet beolvasni a szükséges információkat az igazolás kibocsátójától az aláírás létrehozásához",
        "BadHash": "Rossz hash",
        "InvalidDigest": "Érvénytelen a 64-es hash karakterlánc"

    },
    dialogMessages: {
        "SIGNATURES_PANEL_DESC": "Aláírás",
        "UPLOAD_IMAGE_DESC": "Töltse fel az aláírásáról készült képet.",
        "PREVIOUS_PAGE_DESC": "PDF fájl előző oldalának előnézete.",
        "NEXT_PAGE_DESC": "PDF fájl következő oldalának előnézete.",
        "SIGN_PDF_DESC": "PDF fájl digitális aláírása.",
        "PDF_SIGN_HEADER": "Írja alá a dokumentumot.",
        "PDF_ADD_CERTIFICATE": "Új tanúsítvány hozzáadása.",
        "PDF_ADD_PASSWORD": "Jelszó",
        "PDF_SAVE_CERTIFICATE": "Létrehozás",
        "PDF_CHOOSE_CERTIFICATE": "Tanúsítvány kiválasztása",
        "PDF_ISSUER": "Kibocsátó",
        "PDF_DATE_TO": "Lejárat",
        "PDF_SIGNING_PASSWORD": "Tanúsítvány jelszava",
        "PDF_SIGN_PDF": "Írja alá a dokumentumot.",
        "PDF_INFO": "Digitális tanúsítvány szükséges az aláíráshoz. Ezen fájloknak alapértelmezetten PFX vagy P12 kiterjesztése van. Ezen fájlok tartalmazzák a publikus és privát kulcsot egyaránt. Ahhoz, hogy digitális aláírást tudjon végrehajtani először szüksége lesz tanúsítványra. Kérem töltsön fel új tanúsítványt vagy válasszon a meglévőek közül.",
        "INVALID_EXTENSION": "PFX vagy P12 fájl kiválasztása.",
        "ADD_CERTIFICATE": "Tanúsítványt sikeresen hozzáadtuk.",
        "DELETE_CERTIFICATE": "Tanúsítvány törlésre került.",
        "DRAW_SIGNATURE_DESC": "Aláírásával kérem hitelesítse",
        "CLOSE": "Bezárás",
        "SAVE": "Mentés",
        "GET_COORDINATE_DESC": "Aláírás helyének megadása."
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