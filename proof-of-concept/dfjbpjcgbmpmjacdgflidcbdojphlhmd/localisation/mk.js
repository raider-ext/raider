var PdfSigningExtensionLocalisation = PdfSigningExtensionLocalisation || {};

PdfSigningExtensionLocalisation.mk = {
    errorCodes: {
        "DefaultError": "Се случи грешка, ве молиме контактирајте го администраторот.",
        "NotImplementedEvent": "Не постои имплементација за настанот.",
        "NotValidCertificate": "Сертификатот е невалиден.",
        "InvalidXmlForSigning": "Xml-от е невалиден.",
        "InvalidXmlFormat": "Xml-от е во невалиден формат.",
        "PageExtractFail": "Се случи грешка при земање на страна од документот.",
        "InvalidTimeStampResponse": "Невалиден одговор од TSA сервер.",
        "NotImplementedSigningType": "Не постои имплементација за избраниот тип на потпишување.",
        "NullXml": "Xml-от е празен.",
        "NullCertificate": "Сертификатот е празен.",
        "NullTsaResponseStream": "Одговорот од ТSA серверот е празен.",
        "PdfMaxSizeExceeded": "Ја надминавте дозволената големина на PDF документ",
        "BadUserPassword": "Невалидна лозинка за пристап до документот.",
        "EncryptedDocument": "Не може да се потпишуваат документи кои што се енкриптирани",
        "EmptyCertificate": "Изберете сертификат",
        "EmptyPassword": "Изберете лозинка",
        "InvalidCertificateOrPassword": "Невалиден сертификат или пак негова лозинка",
        "NotFoundCertificate": "Сертификатот кој што го избравте не е пронајден",
        "ErrorParsingParameter": "Невалидни параметри",
        "EmptyOrInvalidSignatureProductionPlace": "Невалидни податоци за место на крериање на потписот",
        "UnableToFindLtvData": "Проблем со превземање на потребните податоци од извадчот на сертификатот при креирање на потписот",
        "BadHash": "Невалидна hash вредност",
        "InvalidDigest": "Невалиден Base-64 string на хаш вредноста"
    },
    dialogMessages: {
        "SIGNATURES_PANEL_DESC": "Преглед на потписи.",
        "UPLOAD_IMAGE_DESC": "Прикачете ја сликата која го репрезентира вашиот потпис.",
        "PREVIOUS_PAGE_DESC": "Предходна страна од документот.",
        "NEXT_PAGE_DESC": "Следна страна од документот.",
        "SIGN_PDF_DESC": "Потпишете го документот.",
        "PDF_SIGN_HEADER": "Потпишување на документ",
        "PDF_ADD_CERTIFICATE": "Додади сертификат",
        "PDF_ADD_PASSWORD": "Лозинка",
        "PDF_SAVE_CERTIFICATE": "Креирај",
        "PDF_CHOOSE_CERTIFICATE": "Избери сертификат",
        "PDF_ISSUER": "Издавач",
        "PDF_DATE_TO": "Датум до",
        "PDF_SIGNING_PASSWORD": "Лозинка на сертификатот",
        "PDF_SIGN_PDF": "Потпиши",
        "PDF_INFO": "Дигиталниот сертификатот е задолжителен за да го потпишете дигитално документот. Датотеките каде што се сместени дигиталните сертификатите потребно е да бидат со екстензија .PFX или .P12. Ваквите типови на датотеки во себе содржат приватен и јавен клуч.</br></br>За да потпишете со помош на сертификат кој што потекнува од датотека, потребно е да додадете сертификат или пак да изберете еден од листата на веќе додадените сертификати.",
        "INVALID_EXTENSION": "Изберете file со ектензија .pfx или .p12",
        "ADD_CERTIFICATE": "Сертификатот е додаден",
        "DELETE_CERTIFICATE": "Сертификатот е избришан",
        "DRAW_SIGNATURE_DESC": "Нацртај го вашиот потпис.",
        "CLOSE": "Затвори",
        "SAVE": "Зачувај",
        "GET_COORDINATE_DESC": "Земи ги координатите на потписот."
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
        var lineThickness = [{ "value": "Тенка", "thick": "1", "css": "font-weight: lighter" },
        { "value": "Средна", "thick": "3", "css": "font-weight: bold" },
        { "value": "Дебела", "thick": "5", "css": "font-weight: 1000" }];
        var options = "";
        for (var i = 0; i < lineThickness.length; i++) {
            options += '<option value="' + lineThickness[i].thick + '" style="' + lineThickness[i].css + '">' + lineThickness[i].value + '</option>';
        }
        return options;
    },
    localizeLineColor: function () {
        var lineColor = [{ "value": "Црна", "color": "000000", "css": "color: #000000; font-weight: bold" },
        { "value": "Виолетова", "color": "cb3594", "css": "color: #cb3594; font-weight: bold" },
        { "value": "Зелена", "color": "659b41", "css": "color: #659b41; font-weight: bold" },
        { "value": "Жолта", "color": "ffcf33", "css": "color: #ffcf33; font-weight: bold" },
        { "value": "Кафена", "color": "986928", "css": "color: #986928; font-weight: bold" }];
        var options = "";
        for (var i = 0; i < lineColor.length; i++) {
            options += '<option value="' + lineColor[i].color + '" style="' + lineColor[i].css + '">' + lineColor[i].value + '</option>';
        }
        return options;
    }
};