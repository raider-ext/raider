var PdfSignExtension = PdfSignExtension || {};
var PdfSigningExtensionUtils = PdfSigningExtensionUtils || {};


PdfSignExtension.CustomCertificateDialogController = function (id, certificates, clearFunction) {

    var self = this;

    self.isNullOrEmptyString = PdfSigningExtensionUtils.isNullOrEmptyString;
    self.extensionId = "dfjbpjcgbmpmjacdgflidcbdojphlhmd";
    self.id = id;

    self.certificateFileUploadId = self.extensionId + "_fileUpload";
    self.passwordId = self.extensionId + "_password";
    self.saveCertificateId = self.extensionId + "_saveCertificate";
    self.passwordSignId = self.extensionId + "_passwordSignId";

    self.divCertificateContener = self.extensionId + "_divCertificates";
    self.signPdfId = self.extensionId + "_signPdf";

    self.radioCertificateGroup = self.extensionId + "_radioCertificateGroup";


    self.dialogWidth = 800;
    self.dialogHeight = 600;
    self.cerificates = certificates;

    var PDF_SIGN_HEADER = PdfSigningExtensionUtils.localizeString("PDF_SIGN_HEADER", "dialogMessages");
    var PDF_ADD_CERTIFICATE = PdfSigningExtensionUtils.localizeString("PDF_ADD_CERTIFICATE", "dialogMessages");
    var PDF_ADD_PASSWORD = PdfSigningExtensionUtils.localizeString("PDF_ADD_PASSWORD", "dialogMessages");
    var PDF_SAVE_CERTIFICATE = PdfSigningExtensionUtils.localizeString("PDF_SAVE_CERTIFICATE", "dialogMessages");
    var PDF_CHOOSE_CERTIFICATE = PdfSigningExtensionUtils.localizeString("PDF_CHOOSE_CERTIFICATE", "dialogMessages");
    var PDF_ISSUER = PdfSigningExtensionUtils.localizeString("PDF_ISSUER", "dialogMessages");
    var PDF_DATE_TO = PdfSigningExtensionUtils.localizeString("PDF_DATE_TO", "dialogMessages");
    var PDF_SIGNING_PASSWORD = PdfSigningExtensionUtils.localizeString("PDF_SIGNING_PASSWORD", "dialogMessages");
    var PDF_SIGN_PDF = PdfSigningExtensionUtils.localizeString("PDF_SIGN_PDF", "dialogMessages");
    var PDF_INFO = PdfSigningExtensionUtils.localizeString("PDF_INFO", "dialogMessages");

    self.getCertificateTemplate = function (full) {

        var certificatesTemplate = "";

        if (full)
            certificatesTemplate += "<h5 class='" + self.extensionId + "_toggle'>" + PDF_CHOOSE_CERTIFICATE + "</h5><div class='accordion-content default focus' id='" + self.divCertificateContener + "' style='width: 100%; overflow-y: auto ;'><ul class='inner'>";

        for (var i = 0; i < self.cerificates.length; i++) {
            certificatesTemplate += "<li>";

            certificatesTemplate += "<input type='radio' name='" + self.radioCertificateGroup + "' value='" + self.cerificates[i].Thumbprint + "'></input>";

            certificatesTemplate += "<p>" +
                                        "<strong>" + self.cerificates[i].Name + "</strong>" +
                                    "</p>";

            certificatesTemplate += "<p>" +
                                        "<label><strong>" + PDF_ISSUER + ":</strong> </label>" +
                                        "<span>" + self.cerificates[i].Issuer + "</span>" +
                                    "</p>";


            certificatesTemplate += "<p>" +
                                        "<label><strong>" + PDF_DATE_TO + ":</strong> </label>" +
                                        "<span>" + self.cerificates[i].ValidTo + "</span>" +
                                    "</p>";

            certificatesTemplate += "<a class='" + self.extensionId + "_delCert' id='delCert_" + self.cerificates[i].Thumbprint + "'><span>x</span></a>";

            certificatesTemplate += "</li>";
        }

        if (full)
            certificatesTemplate += '</ul></div>';

        return certificatesTemplate;

    }

    self.getHeaderTemplate = function () {
        var HeaderTemplate = '<h3>' + PDF_SIGN_HEADER + '</h3>';
        return HeaderTemplate;
    }

    self.getAddNewCertificateTemplate = function () {
        var addNewCertificateTemplate = '<h5 class="' + self.extensionId + '_toggle ' + self.extensionId + '_bb1">' + PDF_ADD_CERTIFICATE + '<span class="' + self.extensionId + '_add">+</span></h5>' +
		                         '<div class="accordion-content pl35">' +
                    				'<div class="inner">' +
                                        '<div id="DnD">' +
                                            '<input type="file" id="' + self.certificateFileUploadId + '"/>' +
                                        '</div>' +
                                        '<label>' + PDF_ADD_PASSWORD + '</label>' +
                                        '<div class="inlineBtn"><input class="modal-form-control" type="password" id="' + self.passwordId + '"/>' +
                                            '<input type="button" class="addNew" value="' + PDF_SAVE_CERTIFICATE + '" id="' + self.saveCertificateId + '"/>' +
                                        '</div>' +
                                    '</div>' +
                                 '</div>';

        return addNewCertificateTemplate;
    }

    self.getSignXmlTemplate = function () {
        var signXmlTempate = '<div id="signBox" class="inlineBtn">' +
                                    '<label>' + PDF_SIGNING_PASSWORD + ' </label>' +
                                    '<input type="password" class="modal-form-control" id="' + self.passwordSignId + '"/>' +
                                    '<input type="button" class="addNew" value="' + PDF_SIGN_PDF + '" id="' + self.signPdfId + '"/>' +
                             '</div>';
        return signXmlTempate;
    }


    self.getInfoXmlTemplate = function () {
        var infoXmlTemplate = '<div id="infoBox">' +
                                    '<div id="errorBoxTop"><p style="display:none"></p></div>' +
									'<div id="successBoxTop"><p style="display:none"></p></div>' +
                                    '<p>' + PDF_INFO + '</p>' +


                              '</div>';

        return infoXmlTemplate;
    }

    self.getLoaderTemplate = function () {
        var loaderTemplate = '<div id="' + self.extensionId + '_loader" style="display:none;">' +
            '<div class="' + self.extensionId + '_loader"></div>' +
            '</div>';

        return loaderTemplate;
    }


    self.getModalTemplate = function () {

        var newCertificateTemplate = self.getAddNewCertificateTemplate();

        var certificatesTemplate = self.getCertificateTemplate(true);

        var signXmlTempate = self.getSignXmlTemplate();

        var infoXmlTempate = self.getInfoXmlTemplate();

        var headerTemplate = self.getHeaderTemplate();

        var loaderTemplate = self.getLoaderTemplate();


        return "<div id='cert_modal'>" + headerTemplate + '<div id="boxLeft">' + infoXmlTempate + '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAApEAAABjCAYAAADD7lvwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAADnVJREFUeNrs3e1x4kgXhuHHLiegzWDYBFaFayLAIeAQwBmYEEwGY0IwIZgIpkalCAZn8CoEvz/U2mWwBBJSf6H7qqJ21sbQOn2QDlK3+ubz81N9fPvxUyP3Iml69LMHIQofT98JAgAAF7gjBL1NJc0IAwAAGJNbQgAAAACKSAAAAFBEAgAAgCISAAAAFJEAAACgiAQAAAAoIgEAAGDDzefnp779+DlVedPsPnbmkbV8/kzd7rFYmNfeStrX/D6R9Gr+e2zVoV1tX2shaW62IamJxaG6m48vJE309Ubl5zx4iK2P/AgyPh9P3/fsNgAA+K+InEl6H+g1d5IezYG3qUB7U78bdK/No6gpdn7VPH8v6f5Em469mQKxroBcm38/dyisbo4KmFdTIF3UZ2eKXxuxdZkfUcTn4+l7we4DADBmNi5nVwVH0nAQf1f/FV6eTaFxLJO0rPn5xBQPbV+7roDcHBSQl5qa7Z9YiLvt2LrID+IDAMCIi8iqGFjU/Hyh7pcnm8wbCoKmYm/W4uA/V/3ZxabitKsXi33pIra28yOa+Jiz9wAAUERaOmi3+VnfYqfOSuX4vrr3X5wobOqKzL3ajbM7Z2K5MHMVW1vtJT4AAETk7sTvVh9P389evv3246fMwf9Nf16inJjH/uj/DxUqx8ftWrS1bgziqaJjqfqJGa8qzyweTvBomkhTta9u/Fs1drDuEmnduLy6tmbm9ftO1nAd26pQb3t5v01+eInPx9P3XYscvyQ+AABctaHORO5UXkauO3jX/buyaVnkVEVbduL11aEAPB6T96b6S51LdZvVfUrSsE1DzPZ1HVsb+RFsfMyXKZvxAQBgtEWk1H7mc5+/6fr8pkvR1SQLqTzDNGsoILeW418E9NpFgNs6pvgAADDaItK2RJdNjGiaFFPNBH6u+d1G9WfOhjaNPLajiM+3Hz9DjQ8AAN7cBdKO5xbPWej8Tb2bbMzfthnXttMwM7HritljL/pzXGCTLjfpdh3bqONjxjvGEB8AACgiG4qFS3Q5kK9NQbI4U8g8WtrGncpLoklNgdLGXs2zzn3HlvgAADAyMa+dXaj7JedTyx8WKs9A2hz71udm5dUN0xeBxpb4AABAERlFAXlJwZeoeVbtqd8NWST1LT5eLbfTRTEdfXxY9hAAQBEZn43KdbC7Xras1k1OzhQgtidQLNX/1kGLwGI7qvh8PH3fsusAAIxdKGMi26wIU/QsLNoUiFWheS+7Z+Kq2d9tZv0u9HV1lFlgsb36+Hw8fc/YXQAAEF4RaXuSwqvql6lb6+vM24nKW//cO9juosW27yT91p+XaKcBxTbq+LRZsQbN0jQ9/hI2lZ/bIa3pDQC42HPXfWue58EUkTY1rZe9UTnRZq+va2ZX62gvA9mGvVghhfiEKTFf0Bbyey9NikgAuNzLJftW30Wk7QP/rKZAlMpLt6uDYnJSU4UvTHESwsFpEmBsQ0J8PEjTtPp8EUsAGCGXRWTdmLKqUMsufL1T4xanKsc3HitUjoM7/NuVef6spjIf+nYus47PX9QcpDPPsbVd+DuLz7cfPy+Kz9hnZ6dpumj4ggYAoIgcXDV5Y1pTqF3iQc3j5RJzgEsa/q6uAHhUORayrn2Zhpt48j7Aa+w8xtY24hN+ATmngAQAuL7Fj6sbNL+pfnzWqVvHNN0fMTGFTRJQv208xjYGxMdeAZn0KL4BABSRvQ7uLmZizxre+1whkal+Mk1IhWQ1GchHbGNAfOyaizGQAAD5udn4gznQ2xhT1jQTe6f2M623+m/SzaFqxrYve5WX3NeeYhs64uPGuRu5b0w//CXpxuEDAODY3cEB+Lhw6joGMKt5jX3Dc6vl7frcU+74tRPzWDUc2Lo4VYhMj2KzVbczXKsLtjXr8B42YusyP2KMzyiYS9mnYrYUwwYAYDRuPj8/iQKANkXkTM0TnzYK576qAIBumorBxis9eZ5HuXY2AD9OnYVkvCkAjAxFJIAhUEQCAEUkAHTGZCUAoIgEAAAAKCIBAABAEQkAAADf7tI0JQpApPI8JwgAAC84EwkAAIDO7lo8Z6JyLepqtQob60c/tHzei86vMvLQsy2zg+2cDrBthcoVVQqVt0G5dLWTl4Ha47rdQ/RbzNtuNdeOriT80e48z0e5sk5HVeyHzK+9eWQD5EaohtjGGPslxnb7yKVYY12Ydu9GEOu2bX0+cfzJThWR1TrUIe3IpmbDhzYxgZpbKpLnB//OVK7usQlk2223e4i2x7zt3nItTdNM0ibPc5Yi/HrwWZhY2dy/FSqXRe26NGqV8y8RxLLaxs0ABUMM/RJju33mko1Yzx3VJtuDxzXGum1bTz1nddtwkHuX9Br4N+GhPEv6bZIycfB+UxPbdxPrWMTa7pC23UuupWn6nqbp2PrsVJH9W27OblfFxbukN0d97qsg/2U+I8nI+oV8chvrXw5rk7lp83sktZCX/LitOej8kvuzPr68evzWMDOxjq1Qj7Xdvrfde66laTrGPju08HjwnZude3Ll8b1kG2PtF/LJfax9fBmeRVRIOs+P26Mq9lq/Ldd5Nonp+5tDjDEfW6703fZgci1N0zH2WbVTffXchqnZsV+zrtsYa7+QT+OKdaI4rx5az4/bowPdWC55TRTOeKNqjFyMMXzWOHXZdnItjML/NZC2TEfQB223MdZ+IZ/GGetEcYxTdpoftwfBGdPB5TnA9kwijeNYx9q13fbgcm2E4yNdjUGNdf/jaxtj7Rfyabyxnkd4zHNSRC40LnPaNPp2u9p2ci387d1IepR0M8Djb0krnb4tVNKzD/q0r8mqw2vcD7SNsfbLNeXTjYWHj1j/NVC7lzo/s3lxJbFet9w3NL5/nufrqogcy0SaaluTQNsVazzHakauBe/cPTiX5rEd6P32Zud8r9O3vIl5klM2wDbG2i/kU5ixLgZq90blPYs3kew/vedHlyKyMB02RMXf9tuxDW2DuTUd02e7/jIxa5PgQyTmUP3hut260m23nmt5nt/keR5rn/n+vA9178+m/eXjlRaRQ2xjrP1CPl1/rKsCdT+iWPcqItueKamq80Jxa7O9W9Mh2QAdW32zGaptrhIyxnaHtu3Oci3P88LcVLxVu0c0S3t6Jva2zxLsrriIrLYxG7iIDLlfyCc3+XHu9zsHbd9EVrT3iXWvIrLNi29ld/miUA4qlfXA75m13MGElpixtjuUbXeea3mej7nPutp5fI9kBHFMRtYv5FO34jqx8JpDHwMUWby3rtt7O0Awr1EWyWvGGgu2nVzD9SgIATBOt4QAAAAAtopI1t0FAABjwZCflkXkvsXz5hrnEncAAGB8Tt3FYkd4uhWRMa4bCQAA0NXiRBG5Jzz/uTP/zdRuuv1v89xLBlLvzN/t6AQAABCYxBSQL2dqGRwVkTu1v/5/6TiBw6o+k/2bhQIAgOv3ov5jGJOWr0ERWVNEbuV2EfeppFdT8S/FLUkAAMDlNYWLlbj2cnOPymhUs7MzT9X1VOVYS2ZBAQCAkC0JQX0RWQXHx01jq0k7zP4GAAChFpBcyj5RRO4lrTy1I9HpgawAAACuFaaAZA7HmSJSJkiP8nNGciFuIQQAAMIoHjeS7ikgm93V/GyrcozksynsXJpLWtMtAACgpaEm5+7Nw9c8kasoIqtALlVe3p6rnPgykf3ZTzOKSAAA0MGKEIRVRFaq07l9JKYQfdH5yTMzugQAACB8tw7eoypEH1o+n3GRAAAAFJH/ytTuJp0UkQAAABSRXwpJAAAAUEQCAACAItKuWJY3ZBlGkGvdsOIUAFBEWj1Yzls8b2+5HW0uqT+TGiDXOpnR5k7vUfDx8GpuoV/IJ//9hyssIhOVNy1/b/l820Vk0TJB38QZSZBrbYviWYRttn0gOnVvXcaH+zM58XnLyCf2N7i8iHyX9Dnw43+SXtXuctfOc2Ie7xB+9dz2d1Js1KznWpqm1ePd8/Ys5H6Fq5DbnJgvB31zA2H1C/l0/Z9d9Cgifds5eg8uJUHkWjd5nhdnduyv5jFXOGMku7R5CBNzcPul02eXKSLdmqocOtK3X8inMD+7jMn25C6w9mwdvg/fYkCudbcxO+7QzhDcnOmDaUBtLhzu667BZ2D9Qj653X+GEOuVWJK5VkhnIjeyPx6yshZnI0GuXbpT30fW5k1gfcDBKNzPKvnEZxcRFpF7uV1Afc+OHORad+aS9iqyZheSloG0JWPfE6Qu/UI+jfOzi0CLyELSo4dvG2vzLQcg17oVktsId+whtDmT9MDHIcgC8oF84rOL+IrITNK9/A0KXiq+syqI01XlWp7nG3MAi+nS9sbTF9bqQPggLs2FmBOX9gv55P6zuydlKSKr4nFpCkjfSbGW9LcYewFyrWshuTOf4aXimR26NX2wctDm4qBIeRT7l1BU/VLlbkE+RfPZjW1/c/Xuaoo7W8mfmf/uehSOttq3N4m5VHkT06nKWwb0vQH0kO319aGp+uzcc2y2PeZtjzHXLjmwbQ62I/QbpxemoF9bavPePLKe/WnjzPXKQv7Yauu5NvvolxjzyXb/uHx/X/ubbASxvujvbv755x9KaTeeJb2cec6D3NwrE1ciz/MvP0vTtFWumTOJvaRpSidg6P3hDeEB4jj+3BIGZ7gZKsg1AMDVoIh0p80KBoyZArkGAKCIxL9eVS5fdQ6DhdFLmqatci3Pc3INANDLHSFotFD/y4KJyrNCbQpIbl1Arl1SNJJrAACKyMDMVc6edYUJNeQauQYAiAaXs8PBgR3kGgCAIhKd7FXeSBWwnmtm2UIAACgirwDrgoJcAwBQRKKTtbi8CEe5NsQNxgEAkJhYE0IBuSIMcFRADp5rdSvmAC33fWvCAFBEortq/WTOCsFJrnEGEgBAERn3wXxnHkxsgJNcYxINAIAi0r2VhlmDuBAr0cBRrrESDQDAlf8PABgMhhRW/OyzAAAAAElFTkSuQmCC" /></div>' + '<div id="boxRight">' + newCertificateTemplate + certificatesTemplate + signXmlTempate + '</div>' + loaderTemplate + "</div>";
    };

    self.unblockUI = function () {
        setTimeout(function () {
            $('#simplemodal-container').unblock();
        }, 750);
    }

    self.blockUI = function () {
        $('#simplemodal-container').block({
            baseZ: 2000,
            message: $("#" + self.extensionId + "_loader"),
            css: {
                border: 'none',
                padding: '15px',
                backgroundColor: '#0000ff',
                '-webkit-border-radius': '10px',
                '-moz-border-radius': '10px',
                opacity: .5,
                color: '#fff'
            }
        });
    }

    self.openModal = function (certificates) {
        self.cerificates = certificates;
        $.modal(
            self.getModalTemplate(),
            {
                containerCss: {
                    height: self.dialogHeight,
                    width: self.dialogWidth
                }
            });

        self.initButtonActions();

        self.stateDepentOfCertificate();

    }

    self.closeModal = function () {
        clearFunction();
        $.modal.close();
    }

    self.openAccordion = function () {
        $("." + self.extensionId + "_bb1").trigger("click");
    }


    self.stateDepentOfCertificate = function () {
        if (self.cerificates.length === 0)
            $("." + self.extensionId + "_bb1").trigger("click");

        if (self.cerificates.length === 1) {
            $("input[name='" + self.radioCertificateGroup + "']").prop("checked", true);
            $("#" + self.signPdfId).prop('disabled', false);
        }

        if (self.cerificates.length > 1)
            $("#" + self.signPdfId).prop('disabled', true);
    }

    self.reloadCertificate = function (certificates) {

        self.cerificates = certificates;

        var certificatesTemplate = self.getCertificateTemplate(false);

        $("#" + self.divCertificateContener + " ul").html("");

        $("#" + self.divCertificateContener + " ul").append(certificatesTemplate);

        self.initRadioButtonActions();

        self.deleteCertificateButtonActions();

        self.stateDepentOfCertificate();
    }

    self.errorInfo = function (message) {
        $("#simplemodal-data #errorBoxTop p").text(message);

        $("#simplemodal-data #errorBoxTop p").slideToggle("fast", function () {
            setTimeout(function () { $("#simplemodal-data #errorBoxTop p").slideToggle("fast"); }, 3000);
        });


        self.unblockUI();
    }

    self.successInfo = function (message) {
        $("#simplemodal-data #successBoxTop p").text(message);

        $("#simplemodal-data #successBoxTop p").slideToggle("fast", function () {
            setTimeout(function () { $("#simplemodal-data #successBoxTop p").slideToggle("fast"); }, 3000);
        });

        self.unblockUI();
    }

    self.initRadioButtonActions = function () {
        $("input[name='" + self.radioCertificateGroup + "']").off("change").on("change", function () {
            $("#" + self.signPdfId).prop('disabled', false);
        });
    }

    self.deleteCertificateButtonActions = function () {
        $("." + self.extensionId + "_delCert").off('click').on('click', function () {
            var certificateThumbprint = $(this).attr("id").replace("delCert_", "");
            window.postMessage({
                "EventName": "DeleteCertificate",
                model: {
                    "id": self.id,
                    "certificateThumbprint": certificateThumbprint
                }
            }, '*');
        });
    }

    self.initButtonActions = function () {
        $("#" + self.saveCertificateId).off('click').on('click', function () {

            var certificate = document.getElementById(self.certificateFileUploadId).files[0];

            if (certificate === undefined)
                $("#DnD").addClass(self.extensionId + "_error");
            else
                $("#DnD").removeClass(self.extensionId + "_error");

            var password = $("#" + self.passwordId).val();

            if (password === "")
                $("#" + self.passwordId).addClass(self.extensionId + "_error");
            else
                $("#" + self.passwordId).removeClass(self.extensionId + "_error");

            var base64Certificate = "";
            var reader;
            if (certificate) {
                reader = new FileReader();
                reader.readAsDataURL(certificate);
                reader.onload = function (evt) {

                    if (evt.target.result.indexOf("data:application/x-pkcs12;base64,") === -1) {
                        self.errorInfo(PdfSigningExtensionUtils.localizeString("INVALID_EXTENSION", "dialogMessages"));
                        return;
                    }

                    base64Certificate = evt.target.result.replace("data:application/x-pkcs12;base64,", "");


                    window.postMessage({
                        "EventName": "SaveCertificate",
                        model: {
                            "id": self.id,
                            "certificate": base64Certificate,
                            "password": password
                        }
                    }, '*');
                }
            }
        });

        $("#" + self.signPdfId).off('click').on('click', function () {
            self.blockUI();
            var certificateThumbprint = $("input[name='" + self.radioCertificateGroup + "']:checked").val();
            var password = $("#" + self.passwordSignId).val();

            if (password === "")
                $("#" + self.passwordSignId).addClass(self.extensionId + "_error");
            else
                $("#" + self.passwordSignId).removeClass(self.extensionId + "_error");


            window.postMessage({
                "EventName": "SignPdfWithCustomDialog",

                model: {
                    "id": self.id,
                    "certificateThumbprint": certificateThumbprint,
                    "password": password
                }
            }, '*');
        });

        self.initRadioButtonActions();

        self.deleteCertificateButtonActions();

        $("input[name='" + self.radioCertificateGroup + "']").click(function () {
            $('input[name="' + self.radioCertificateGroup + '"]:not(:checked)').parent().removeClass("selectedCert");
            $('input[name="' + self.radioCertificateGroup + '"]:checked').parent().addClass("selectedCert");
            if ($('#simplemodal-data .accordion-content:first-of-type').hasClass('focus')) {
                $('#simplemodal-data .accordion-content:first-of-type').removeClass('focus').slideUp('fast');
                $('#simplemodal-data .accordion-content.default').removeClass('smallBox');
            }
        });

        $('#simplemodal-data').find('.' + self.extensionId + '_toggle').click(function () {
            $(this).next().slideToggle('fast').toggleClass('focus');
            $(".accordion-content").not($(this).next()).slideUp('fast').removeClass('focus');
            if ($('#simplemodal-data .accordion-content:first-of-type').hasClass('focus')) {
                $('#simplemodal-data .default').addClass('smallBox');
            } else {
                $('#simplemodal-data .default').removeClass('smallBox');
            }
        });
    }
};