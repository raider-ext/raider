var PdfSigningExtensionLocalisation = PdfSigningExtensionLocalisation || {};

PdfSigningExtensionLocalisation.ro = {
  errorCodes: {
      "DefaultError":"A apărut o eroare netratată. Vă rugăm să contactați administratorul.", 
"NotImplementedEvent":"Evenimentul nu este implementat.", 
"NotValidCertificate":"Nu este un certificat valabil.", 
"InvalidXmlForSigning":"Nu este un XML valid pentru semnare.", 
"InvalidXmlFormat":"Nu este un format xml valid.", 
"PageExtractFail":"Eroare la extragerea paginii din pdf.", 
"InvalidTimeStampResponse":"Răspuns nevalid de la serverul TSA.", 
"NotImplementedSigningType":"Tipul de semnare nu este implementat.", 
"NullXml":"XML-ul este nul", 
"NullCertificate":"Certificatul este nul.", 
"NullTsaResponseStream":"Fluxul de la serverul TSA este nul.", 
"PdfMaxSizeExceeded":"Dimensiunea fișierului PDF prea mare. Fișierul nu va fi procesat.", 
"BadUserPassword":"Parolă proprietarului incorectă. Fișierul nu va fi procesat.", 
"EncryptedDocument":"Documentele criptate nu pot fi semnate", 
"EmptyCertificate":"Alegeți un certificat", 
"EmptyPassword":"Alegeți o parolă pentru certificat", 
"InvalidCertificateOrPassword":"Certificat sau parolă de certificat incorecte.", 
"NotFoundCertificate":"Nu se poate găsi certificatul ales", 
"ErrorParsingParameter":"Parametri nevalizi", 
"EmptyOrInvalidSignatureProductionPlace":"Date nevalide pentru locul de generare a semnăturii", 
"UnableToFindLtvData":"Nu se pot prelua informațiile necesare de la emitentul certificatului pentru crearea semnăturii", 
"BadHash":"Hash incorect", 
"InvalidDigest":"Șir de caractere Base-64 nevalid"
  },
  dialogMessages: {
      "SIGNATURES_PANEL_DESC":"Panoul de semnături.", 
"UPLOAD_IMAGE_DESC":"Faceți clic pentru a încărca o imagine care va reprezenta semnătura dumneavoastră.", 
"PREVIOUS_PAGE_DESC":"Afișează pagina anterioară a PDF-ului.", 
"NEXT_PAGE_DESC":"Afișează următoarea pagină a PDF-ului.", 
"SIGN_PDF_DESC":"Faceți clic pentru a semna PDF-ul folosind semnătura digitală.", 
"PDF_SIGN_HEADER":"Semnează documentul", 
"PDF_ADD_CERTIFICATE":"Adăugați un certificat nou", 
"PDF_ADD_PASSWORD":"Parola", 
"PDF_SAVE_CERTIFICATE":"Crează", 
"PDF_CHOOSE_CERTIFICATE":"Alege certificatul", 
"PDF_ISSUER":"Emitent", 
"PDF_DATE_TO":"Expiră", 
"PDF_SIGNING_PASSWORD":"Parola certificatului", 
"PDF_SIGN_PDF":"Semnează documentul", 
"PDF_INFO":"Certificatul digital este necesar pentru semnarea digitală a unui document. Fișierele în care sunt stocate certificatele au, în general, extensia .PFX sau .P12. Aceste tipuri de fișiere conțin cheia publică și cheia privată. </br></br>Pentru a semna cu un certificat din fișier, adăugați certificatul sau alegeți-l din lista de certificate adăugate anterior.", 
"INVALID_EXTENSION":"Alegeți un fișier cu extensia .pfx sau .p12", 
"ADD_CERTIFICATE":"Certificatul a fost adăugat cu succes", 
"DELETE_CERTIFICATE":"Certificatul a fost eliminat cu succes", 
"DRAW_SIGNATURE_DESC":"Desenează-ți semnătura.", 
"CLOSE":"Închide", 
"SAVE":"Salvează", 
"GET_COORDINATE_DESC":"Obțineți coordonatele semnăturii."
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