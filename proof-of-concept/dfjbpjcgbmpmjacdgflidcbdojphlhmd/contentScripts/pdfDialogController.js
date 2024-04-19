var PdfSignExtension = PdfSignExtension || {};
var PdfSigningExtensionUtils = PdfSigningExtensionUtils || {};
PdfSignExtension.DialogController = function (id, url, left, top, currentSignaturePage, currentPage, totalPages, image, hasVisibleSignature, signatures, showCoordinate, clearFunction) {

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = (function () {
            return window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (callback, element) {
                    window.setTimeout(callback, 1000 / 60);
                };
        })();
    }

    var self = this;
    self.isNullOrEmptyString = PdfSigningExtensionUtils.isNullOrEmptyString;
    self.extensionId = "dfjbpjcgbmpmjacdgflidcbdojphlhmd";
    self.id = id;
    self.nextButtonId = self.extensionId + "_nextPageBtn";
    self.previousButtonId = self.extensionId + "_previousPageBtn";
    self.currentPageTextInputId = self.extensionId + "_currentPageText";
    self.locateSignature = self.extensionId + "_locateSignature";
    self.previewSignaturesButtonId = self.extensionId + "_previewSignaturesBtn";
    self.canvasId = self.extensionId + "_canvas";
    self.canvasUpperId = self.extensionId + "_canvasUppper";
    self.canvasDrawing = self.extensionId + "_canvasDrawing";
    self.closeActionsId = self.extensionId + "_close-action-button";
    self.pdfContainerId = self.extensionId + "_page";
    self.currentPageTextId = self.extensionId + "_currentPage";
    self.signPdfButtonId = self.extensionId + "_sign-pdf";
    self.getCoordinateButtonId = self.extensionId + "_get-coordinate";
    self.uploadControlId = self.extensionId + "_upload-signature-img";
    self.uploadButtonId = self.extensionId + "_upload-signature-button";
    self.drawButtonId = self.extensionId + "_draw-signature-button";
    self.closeDrawButtonId = self.extensionId + "_close_draw-signature-button";
    self.clearDrawButtonId = self.extensionId + "_clear_draw-signature-button";
    self.addDrawButtonId = self.extensionId + "_add_draw-signature-button";
    self.markerDrawButtonId = self.extensionId + "_marker_draw-signature-button";
    self.eraserDrawButtonId = self.extensionId + "_eraser_draw-signature-button";
    self.thicknessLineSelect = self.extensionId + "_thickness-line-select";
    self.colorLineSelect = self.extensionId + "_color-line-select";
    self.actionButtonId = self.extensionId + "_actionButtonId";
    self.zoomed = false;
    self.fitScale = 1;
    self.numberOfPages = totalPages;
    if (!currentSignaturePage)
        self.currPageNumber = parseInt(currentPage);
    else
        self.currPageNumber = parseInt(currentSignaturePage);
    self.hasVisibleSignature = hasVisibleSignature;
    self.signatures = signatures;
    self.rectHeight = 70;
    self.rectWidth = 160;
    self.dialogWidth = 730;
    self.dialogHeight = 600;
    self.imageFromClient = false;
    self.originalPdfHeight = 0;
    self.originalPdfWidth = 0;
    self.canvasContainerWidth = 750;
    self.canvasContainerHeight = 600;
    self.isSetCoordinate = false;
    self.isPredefinedCoordinate = true;
    self.showCoordinate = showCoordinate;

    if (!left || !top || !currentSignaturePage)
        self.isPredefinedCoordinate = false;
    else {
        left = parseInt(left);
        top = parseInt(top);
        currentSignaturePage = parseInt(currentSignaturePage);
    }

    self.rect = {
        scale: 1,
        dragging: false,
        selected: false,
        x: 110,
        y: 50,
        width: self.rectWidth,
        height: self.rectHeight,
        insideBox: function (eventX, eventY) {
            return eventX - self.canvasUpper.offsetLeft > self.rect.width / 2 &&
                eventX - self.canvasUpper.offsetLeft < self.canvasUpper.width - self.rect.width / 2 &&
                eventY - self.canvasUpper.offsetTop > self.rect.height / 2 &&
                eventY - self.canvasUpper.offsetTop < self.canvasUpper.height - self.rect.height / 2;
        },
        rectClicked: function (eventX, eventY) {
            return eventX < self.rect.x + self.rect.width / 2 + self.canvasUpper.offsetLeft &&
                eventX > self.rect.x - self.rect.width / 2 + self.canvasUpper.offsetLeft &&
                eventY < self.rect.y + self.rect.height / 2 + self.canvasUpper.offsetTop &&
                eventY > self.rect.y - self.rect.height / 2 + self.canvasUpper.offsetTop;
        }
    }

    self.setImageParams = function (base64) {
        self.image = new Image();
        self.image.src = base64;
        self.image.width = self.rectWidth;
        self.image.height = self.rectHeight;
    }

    if (image && typeof image == 'string' && image.length !== 0) {
        self.imageFromClient = true;
        self.setImageParams(image);
    }

    self.getSignImage = function () {
        return self.image == null ? "" : self.image.src.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
    }
    self.fixTextContainerWidth = function (delay) {
        delay = delay || 1000;
        setTimeout(function () {
            var fixedWidth = $("." + self.extensionId + "_actions-main-container").width() -
                $("." + self.extensionId + "_actions-container").width() -
                $("." + self.extensionId + "_page-actions-container").width() - 10;
            $("." + self.extensionId + "_action-information-text-container")
                .css({ "width": fixedWidth + 'px' });
        }, delay);
    }
    self.changeText = function (elementId, newText, delayOnFix) {
        document.getElementById(elementId).innerHTML = newText;
        self.fixTextContainerWidth(delayOnFix);
    };
    self.setValue = function (elementId, newText) {
        document.getElementById(elementId).value = newText;
    }
    self.goToPage = function (elementId) {
        var page = parseInt(document.getElementById(elementId).value);
        var pageString = document.getElementById(elementId).value;

        if (pageString === "") {
            self.setValue(elementId, self.currPageNumber);
            return;
        }

        if (page > self.numberOfPages || page < 1) {
            self.setValue(elementId, self.currPageNumber);
            return;
        }

        if (page === self.currPageNumber)
            return;

        self.openExactPage(page);
        self.currPageNumber = page;
        self.shouldDraw = true;
        self.shouldDrawTimeout = null;
    }
    self.getModalTemplate = function () {
        var actionInformationTextContainerWidth = {
            1: '541px',
            2: '462px',
            3: '446px'
        };
        var shouldDisplayUploadLink = !(self.imageFromClient || self.hasVisibleSignature === false);
        var getSignaturesTemplate = function () {
            var extractSignatures = function () {
                var temp = '';
                for (var i = 0; i < self.signatures.length; i++) {
                    temp += '<li class="' + self.extensionId + '_signature-preview-item">' +
                        (self.isNullOrEmptyString(self.signatures[i].Name) ? "" : self.signatures[i].Name + '<br/>') +
                        (self.isNullOrEmptyString(self.signatures[i].Email) ? "" : self.signatures[i].Email + '<br/>') +
                        (self.isNullOrEmptyString(self.signatures[i].SignDate) ? "" : self.signatures[i].SignDate) +
                        (self.signatures[i].HasTimeStamp ? "<i class='" + self.extensionId + "_material-icons " + self.extensionId + "_timestamp-marker'>av_timer</i>" : '') +
                        (self.signatures[i].HasVisibleSignature ? "<i class='" + self.extensionId + "_material-icons " + self.extensionId + "_navigate_to_page' data='" + self.signatures[i].VisibleSignaturePage + "'>picture_in_picture</i>" : '') +
                        '</li>';
                }

                return temp;
            }
            var bulletHeight = self.signatures.length < 6 ? "auto" : "400px";
            return '<div class="' + self.extensionId + '_signatures-preview-container">' +
                '<div>' +
                '<ol class="' + self.extensionId + '_custom-bullet ' + self.extensionId + '_custom-bullet--b" style="height:' + bulletHeight + ' !important;">' +
                extractSignatures() +
                '</ol>' +
                '</div>' +
                '</div>';
        }
        var signaturesTemplate = "";
        var numberOfActions = 3;
        if (!shouldDisplayUploadLink) {
            numberOfActions--;
        }
        if (self.signatures.length === 0) {
            numberOfActions--;
        } else {
            signaturesTemplate = getSignaturesTemplate();
        }

        var lineThickness = PdfSigningExtensionUtils.localizeLineThickness();
        var lineColor = PdfSigningExtensionUtils.localizeLineColor();

        return signaturesTemplate +
            '<div class="' + self.extensionId + '_borderBlue"></div><div class="' + self.extensionId + '_actions-main-container">' +
            '<span class="' + self.extensionId + '_actions-container">' +
            (!shouldDisplayUploadLink ? '' : '<span id="' + self.uploadButtonId + '" class="' + self.extensionId + '_upload-button ' + self.extensionId + '_small-icon"><i class="' + self.extensionId + '_material-icons"><img src="data:image/png;base64,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" /></i></span>') +
            (!shouldDisplayUploadLink ? '' : '<button type="button" id="' + self.drawButtonId + '"><img src="data:image/png;base64,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" /></button>') +
            (self.signatures.length === 0 ? '' : '<span id="' + self.previewSignaturesButtonId + '" class="' + self.extensionId + '_preview-signatures-button ' + self.extensionId + '_small-icon"><i class="' + self.extensionId + '_material-icons"><img src="data:image/png;base64,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" /></i></span>') +
            (!self.showCoordinate ? '<span id="' + self.signPdfButtonId + '" class="' + self.extensionId + '_sign-button ' + self.extensionId + '_small-icon"><i class="' + self.extensionId + '_material-icons"><img src="data:image/png;base64,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" /></i></span>' : '') +
            (self.showCoordinate ? '<button type="button" id="' + self.getCoordinateButtonId + '"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAlCAYAAAAwYKuzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMjHxIGmVAAAEEElEQVRYR62YTWwNURiGqZ/SKEolRAVpCN0gYk3CxqIhRCxLWzaSRiz8LAULViQkYoeQiJ2NBImIEAv/0iKEhEpIiJZL73Vvez3v9Gt7p3PnzpmZ+yZvz5lz3u/73jl3fs50QrFY9BgXxEwaGhqaCzcPDg5egC9hHxyA3+B95k7AdbAefY2FOsPzlcQg+kaKbsfEA9pBjkOBZgjeQdcK51gKJxAe3yBFVlLwLG1WBlyB/g88SXeJpYoE2ngGKdACb2hViIkN4v7Cc+RospQVQYi7QZLqersOCyqWFMR/h0fozrDUoUDjbrBQKBzk7DNoA6DgL3gP6qc/he4ifEM/cDKMCc/gRksdCuRuBknWRMFuZVaREegY9MA9HK7IZDLzaXUDNeVyuTW0R+FvT1wCcmUZ1x1ebyXKAqmzwd3wp5KXgkKfGG+lW2dSHxifzXybDHkBJWD8Nlxl0rJA5mzwEvQV4fgfhU/QnWqyskBXi+78cNQYdHL5fL7VZGWBLNogc5Mp8gj6nncU6GdskckqAl0zet/1yHGO8Ta6E00WAHNOButI1E3rAwWe04QmL4V06N95gSUg7z6aySYLgLlogySphz1ofKDgbZM4gRz3LHQUjHXRTDFJAMxFG2ROP/ET6LuDMfiUJs4KvvUCDRwXSNlON91PLJDsKsly6EbBWP/AwECzSSqCWL0efdcgY73cJFtMUhbI3AzykO6gQJ8Sj4ACecbO0EY9yxrQXRmOGgNxd2hWm6wsmHczSDI9qF/Q+u5kjr9CXeiNJvWBucXwOPStPsd/bbw6D2rmJ7KK+5WY/ig4FvSw1kpuyWaz2kwsZWotbTu8Bv8Mq8fAmK7fDZY+FGjcDApoGlnFxyQP7GQY14ro3XsX3oIPYS8M7BUZk/Y03epuFgRWsZPk/9AnBvG6mzdZyopAF88gulms1ivaRNDJQd0wZd/d44EunkGBAh2w4jY/DMT9iHq0lIKQ+AbR1rGKgddWFDCnb5MHdKdZqkigjW9QQL8XxgL+8rDNUjiBsMQGp3HDfKF1Bqv3EYO1lsIJhCUzKFDsgAq7AG2RE+qyUGcQmtwgMXoufqaNBOY+YHK6hTqD0FQGp8DDFK74lcdJaNfSaWGxQHhygwKFWzDwRkbCwLzePjMtJBYIT22wHgPHwlaRcT2Yd9J12jeOB3HpDBJXg4H1mHxNPwDGtYtuMHlsEJvOoECsvoO1mxm/FdNzbxvdSSaNDWKrYrAGbmW13tOOgmPtbOaZLBFIk96ggJEF8DL0tmKY02rugKEfRC7wfOmP10kB4nUtaoPqPRfxp39eLrTpxPB86Y/XSQkMaXt/01ZvF3TeFIShqgbJoc+CQ/jTjnqZDadCVQ0KGFsO18OKH0OuKBaLE/4DRVwLSFnu6AwAAAAASUVORK5CYII=" /></button>' : '') +
            (self.isPredefinedCoordinate ? '<button type="button" id="' + self.locateSignature + '"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA+CAYAAAArvjtdAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQBwYWludC5uZXQgNC4wLjIx8SBplQAAAMlJREFUWEftjsENwjAMRX1iGO40kzAGYgNgVM4s0RKST5Ngx2nN0V96kqVET4/uFOZ/4kI7LrTjQjsutONCOy6040I7LrTjQjsutONCO4PC6Zng3mpU4ePNjU6XSLy5PyUDhdPrTMdDJN78n5WuMNWFK+XFW6tUClNd9tFIpShs6zCtslNY12FaJSuU6rBepVDI12G9yh+hVodJlUxhvw6TKivhaB3GVTaFY3UYV/kVbq3D2sqicFsd1lZ+hHvrsLIyF+6rw9bKMC+o0mhKFotyeQAAAABJRU5ErkJggg==" /></button>' : '') +
            (self.imageFromClient ? '' : '<input type="file" accept="image/*" id="' + self.uploadControlId + '" style="display:none;" />') +
            '</span>' +
            '<span class="' + self.extensionId + '_action-information-text-container" style="width:' + actionInformationTextContainerWidth[numberOfActions] + ' !important">' +
            '<div class="' + self.extensionId + '_action-text">Sign pdf</div>' +
            '</span>' +
            '<span class="' + self.extensionId + '_page-actions-container">' +
            '<span id=' + self.previousButtonId + ' class="' + self.extensionId + '_small-icon ' + self.extensionId + '_previous-page-button"><i class="' + self.extensionId + '_material-icons">play_arrow</i></span>' +
            '<input style="height: 20px; width: 35px;" type="number" id="' + self.currentPageTextInputId + '"/>' +
            '<span id=' + self.currentPageTextId + ' class="' + self.extensionId + '_curr-page-text"></span>' +
            '<span id=' + self.nextButtonId + ' class="' + self.extensionId + '_small-icon ' + self.extensionId + '_next-page-button"><i class="' + self.extensionId + '_material-icons">play_arrow</i></span>' +
            '</span>' +
            '</div>' +
            '<div id="' + self.extensionId + '_loader" style="display:none;">' +
            '<div class="' + self.extensionId + '_loader"></div>' +
            '</div>' +

            '<div class="' + self.extensionId + '_canvasDiv" style="display: none">' +
            '<div class="' + self.extensionId + '_canvasBackdrop">' +
            '<div class="' + self.extensionId + '_canvasContainer">' +
            '<div class="' + self.closeDrawButtonId + '_header_draw"> ' +
            '<button type="button" id="' + self.closeDrawButtonId + '">' + PdfSigningExtensionUtils.localizeString("CLOSE", "dialogMessages") + '</button>' +
            '<button type="button" id="' + self.markerDrawButtonId + '"><img src="data:image/png;base64,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"/></button>' +
            '<button type="button" id="' + self.eraserDrawButtonId + '"><img src="data:image/png;base64,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"/></button>' +
            '<button type="button" id="' + self.clearDrawButtonId + '"><img src="data:image/png;base64,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"/></button>' +
            '<button type="button" id="' + self.addDrawButtonId + '">' + PdfSigningExtensionUtils.localizeString("SAVE", "dialogMessages") + '</button>' +
            '</div>' +
            '<canvas id="' + self.extensionId + '_canvasDrawing" width="398"></canvas>' +
            '<div class="' + self.closeDrawButtonId + '_footer_Draw"> ' +
            '<select id="' + self.thicknessLineSelect + '">' + lineThickness + '</select>' +
            '<select id="' + self.colorLineSelect + '">' + lineColor + '</select>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +

            '<div id="' + self.pdfContainerId + '" style="position: relative; height: ' + (self.dialogHeight - 52) + 'px; width: 100%; overflow-x: hidden; overflow-y:auto; padding-right: 17px;">' +
            '<canvas id="' + self.canvasId + '" style="position: absolute; left: 0; top: 0; z-index: 1003; border:1px solid black;"></canvas>' +
            '<canvas id="' + self.canvasUpperId + '" style="position: absolute; left: 0; top: 0; z-index: 1004; border:1px solid black;"></canvas>' +
            '</div>' +
            '<div class="' + self.extensionId + '_actions-main-container ' + self.extensionId + '_pdf-footer"><img src="data:image/png;base64,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"></div>';
    };
    self.initFileUploadActions = function () {
        if (!self.imageFromClient) {
            document.getElementById(self.uploadControlId).onchange = function (event) {
                self.image = new Image();
                var imageUploaded = document.getElementById(self.uploadControlId).files[0];

                var reader = new FileReader();
                reader.readAsDataURL(imageUploaded);
                reader.onload = function (e) {
                    self.setImageParams(e.target.result);
                    self.shouldDraw = true;
                    self.shouldDrawTimeout = null;
                };
            };
        }
    };

    self.animatingActionButtons = false;
    self.hoveringPreviewItem = false;
    self.startLoadPage = false;
    self.navigationHelper = {
        reachedBottom: false,
        reachedTop: false
    };

    self.initNavigationActions = function () {
        $(self.pageElement).bind('mousewheel', function (e) {

            var elem = $(e.currentTarget);
            if (e.originalEvent.wheelDelta / 120 > 0) {
                //scrolling up
                if (elem.scrollTop() === 0) {
                    //reached top
                    if (!self.navigationHelper.reachedTop) {
                        self.navigationHelper.reachedTop = true;
                    } else {
                        if (!self.startLoadPage) {
                            self.startLoadPage = true;
                            self.navigationHelper.reachedTop = false;
                            self.openPrevPage();
                            self.shouldDraw = true;
                            self.shouldDrawTimeout = null;
                            self.onPageLoadCallback = function () {
                                $(self.pageElement).scrollTop($(self.pageElement)[0].scrollHeight);
                                self.startLoadPage = false;
                            }
                        }
                    }
                }
            }
            else {
                //scrolling down
                if (elem[0].scrollHeight - elem.scrollTop() === elem.outerHeight()) {
                    //reached bottom
                    if (!self.navigationHelper.reachedBottom) {
                        self.navigationHelper.reachedBottom = true;
                    } else {
                        if (!self.startLoadPage) {
                            self.startLoadPage = true;
                            self.navigationHelper.reachedBottom = false;
                            self.openNextPage();
                            self.shouldDraw = true;
                            self.shouldDrawTimeout = null;
                            self.onPageLoadCallback = function () {
                                $(self.pageElement).scrollTop(0);
                                self.startLoadPage = false;
                            }
                        }
                    }
                }
            }
        });
    };
    self.initButtonActions = function () {

        self.signaturesContainer = $("." + self.extensionId + "_signatures-preview-container");

        var canvasDrawingId = self.extensionId + "_canvasDrawing";
        var context = document.getElementById(canvasDrawingId).getContext("2d");

        context.lineJoin = "round";

        var clickX = new Array();
        var clickY = new Array();
        var clickDrag = new Array();
        var clickColor = new Array();
        var clickSize = new Array();

        var curTool = "marker";
        var curColor = "#000000";
        var curSize = 1;

        var paint;

        function addClick(x, y, dragging) {
            clickX.push(x);
            clickY.push(y);
            clickDrag.push(dragging);
            clickSize.push(curSize);

            if (curTool === "eraser")
                clickColor.push("#ffffff");
            else
                clickColor.push(curColor);
        }

        function redraw() {
            context.fillStyle = "white";
            context.fillRect(0, 0, context.canvas.width, context.canvas.height);

            for (var i = 0; i < clickX.length; i++) {
                context.beginPath();
                if (clickDrag[i] && i) {
                    context.moveTo(clickX[i - 1], clickY[i - 1]);
                } else {
                    context.moveTo(clickX[i] - 1, clickY[i]);
                }
                context.lineTo(clickX[i], clickY[i]);
                context.closePath();
                context.strokeStyle = clickColor[i];
                context.lineWidth = clickSize[i];
                context.stroke();
            }
        }

        $('#' + canvasDrawingId).mousedown(function (e) {
            var mouseX = e.pageX - this.offsetLeft;
            var mouseY = e.pageY - this.offsetTop;
            paint = true;
            addClick(mouseX, mouseY);
            redraw();
        });

        $('#' + canvasDrawingId).mousemove(function (e) {
            if (paint) {
                var mouseX = e.pageX - this.offsetLeft;
                var mouseY = e.pageY - this.offsetTop;
                addClick(mouseX, mouseY, true);
                redraw();
            }
        });

        $('#' + canvasDrawingId).mouseup(function (e) {
            paint = false;
        });

        $('#' + canvasDrawingId).mouseleave(function (e) {
            paint = false;
        });

        document.getElementById(self.nextButtonId).addEventListener("click", function (e) {
            self.openNextPage();
            self.shouldDraw = true;
            self.shouldDrawTimeout = null;
        });


        if (self.isPredefinedCoordinate)
            document.getElementById(self.locateSignature).addEventListener("click", function (e) {
                if (self.currPageNumber === currentSignaturePage)
                    return;
                self.openExactPage(currentSignaturePage);
                self.currPageNumber = currentSignaturePage;
                self.shouldDraw = true;
                self.shouldDrawTimeout = null;

                self.onPageLoadCallback = function () {
                    $(self.pageElement).scrollTop(self.rect.y);
                }
            });

        document.getElementById(self.previousButtonId).addEventListener("click", function (e) {
            self.openPrevPage();
            self.shouldDraw = true;
            self.shouldDrawTimeout = null;
        });

        document.getElementById(self.currentPageTextInputId).addEventListener("blur", function (e) {
            self.goToPage(self.currentPageTextInputId);
        });

        document.getElementById(self.currentPageTextInputId).addEventListener("keyup", function (e) {
            if (e.keyCode === 13) {
                self.goToPage(self.currentPageTextInputId);
            }
        });

        $("." + self.extensionId + "_navigate_to_page").off('click').on('click', function () {
            var page = Number($(this).attr('data'));
            if (self.currPageNumber != page) {
                self.openExactPage(page);
            }
        });

        $("." + self.extensionId + "_signature-preview-item")
            .on("mouseenter", function () {
                self.hoveringPreviewItem = true;
                if (!self.signaturesContainer.is(":visible")) {
                    self.signaturesContainer.addClass(self.extensionId + "_show-div");

                }
            })
            .on("mouseleave", function () {
                self.hoveringPreviewItem = false;
                if (self.signaturesContainer.is(":visible")) {
                    self.signaturesContainer.removeClass(self.extensionId + "_show-div");
                }
            });

        $("#" + self.drawButtonId).click(function () {
            $("." + self.extensionId + "_canvasDiv").show();
        });

        $("#" + self.closeDrawButtonId).click(function () {
            $("." + self.extensionId + "_canvasDiv").hide();
        });

        $("#" + self.clearDrawButtonId).click(function () {
            context.clearRect(0, 0, context.canvas.width, context.canvas.height);
            clickX = new Array();
            clickY = new Array();
            clickDrag = new Array();
            clickColor = new Array();
            clickSize = new Array();
            curTool = "marker";
        });

        $("#" + self.addDrawButtonId).click(function () {
            $("." + self.extensionId + "_canvasDiv").hide();
            var canvas = document.getElementById(canvasDrawingId);
            var dataUrlSignature = canvas.toDataURL();
            self.setImageParams(dataUrlSignature);
            self.shouldDraw = true;
            self.shouldDrawTimeout = null;
        });

        $("#" + self.markerDrawButtonId).click(function () {
            curTool = "marke";
        });

        $("#" + self.eraserDrawButtonId).click(function () {
            curTool = "eraser";
        });

        $("#" + self.thicknessLineSelect).change(function () {
            curSize = ($("#" + self.thicknessLineSelect + " option:selected"))[0].value;
            redraw();
        });

        $("#" + self.colorLineSelect).change(function () {
            curColor = "#" + ($("#" + self.colorLineSelect + " option:selected"))[0].value;
            curTool = "marker";
            redraw();
        });

        $("#" + self.previewSignaturesButtonId).hover(
            function () {
                clearTimeout(self.signaturesContainerTimeout);
                $("." + self.extensionId + "_action-text").text(PdfSigningExtensionUtils.localizeString("SIGNATURES_PANEL_DESC", "dialogMessages"));
                $("." + self.extensionId + "_action-text").addClass(self.extensionId + "_action-text-show");
                if (!self.signaturesContainer.is(":visible")) {
                    self.signaturesContainer.addClass(self.extensionId + "_show-div");
                }
            },
            function () {
                self.signaturesContainerTimeout = setTimeout(function () {
                    if (self.signaturesContainer.is(":visible") && !self.hoveringPreviewItem) {
                        self.signaturesContainer.removeClass(self.extensionId + "_show-div");
                    }
                }, 1000);
                $("." + self.extensionId + "_action-text").text("");
                $("." + self.extensionId + "_action-text").removeClass(self.extensionId + "_action-text-show");
            });


        $("#" + self.uploadButtonId).hover(
            function () {
                $("." + self.extensionId + "_action-text").text(PdfSigningExtensionUtils.localizeString("UPLOAD_IMAGE_DESC", "dialogMessages"));
                $("." + self.extensionId + "_action-text").addClass(self.extensionId + "_action-text-show");
            },
            function () {
                $("." + self.extensionId + "_action-text").text("");
                $("." + self.extensionId + "_action-text").removeClass(self.extensionId + "_action-text-show");
            });

        $("#" + self.drawButtonId).hover(
            function () {
                $("." + self.extensionId + "_action-text").text(PdfSigningExtensionUtils.localizeString("DRAW_SIGNATURE_DESC", "dialogMessages"));
                $("." + self.extensionId + "_action-text").addClass(self.extensionId + "_action-text-show");
            },
            function () {
                $("." + self.extensionId + "_action-text").text("");
                $("." + self.extensionId + "_action-text").removeClass(self.extensionId + "_action-text-show");
            });

        $("#" + self.getCoordinateButtonId).hover(
            function () {
                $("." + self.extensionId + "_action-text").text(PdfSigningExtensionUtils.localizeString("GET_COORDINATE_DESC", "dialogMessages"));
                $("." + self.extensionId + "_action-text").addClass(self.extensionId + "_action-text-show");
            },
            function () {
                $("." + self.extensionId + "_action-text").text("");
                $("." + self.extensionId + "_action-text").removeClass(self.extensionId + "_action-text-show");
            });

        $("#" + self.previousButtonId).hover(
            function () {
                $("." + self.extensionId + "_action-text").text(PdfSigningExtensionUtils.localizeString("PREVIOUS_PAGE_DESC", "dialogMessages"));
                $("." + self.extensionId + "_action-text").addClass(self.extensionId + "_action-text-show");
            },
            function () {
                $("." + self.extensionId + "_action-text").text("");
                $("." + self.extensionId + "_action-text").removeClass(self.extensionId + "_action-text-show");
            });
        $("#" + self.nextButtonId).hover(
            function () {
                $("." + self.extensionId + "_action-text").text(PdfSigningExtensionUtils.localizeString("NEXT_PAGE_DESC", "dialogMessages"));
                $("." + self.extensionId + "_action-text").addClass(self.extensionId + "_action-text-show");
            },
            function () {
                $("." + self.extensionId + "_action-text").text("");
                $("." + self.extensionId + "_action-text").removeClass(self.extensionId + "_action-text-show");
            });
        $("#" + self.signPdfButtonId).hover(
            function () {
                $("." + self.extensionId + "_action-text").text(PdfSigningExtensionUtils.localizeString("SIGN_PDF_DESC", "dialogMessages"));
                $("." + self.extensionId + "_action-text").addClass(self.extensionId + "_action-text-show");
            },
            function () {
                $("." + self.extensionId + "_action-text").text("");
                $("." + self.extensionId + "_action-text").removeClass(self.extensionId + "_action-text-show");
            });

        $("#" + self.uploadButtonId).click(function () {
            $(this).parent().find("input[type=file]").click();
        });

        $('#simplemodal-container a.modalCloseImg').on('click', function (event) {
            $("body").removeClass(self.extensionId + "_modal-open");

            if (event.originalEvent !== undefined) {
                window.postMessage({
                    "EventName": "CloseDialog",
                    model: {
                        "id": self.id
                    }
                },
                    '*');
            }
            self.clearVariables();
        });

        document.onkeydown = function (evt) {
            evt = evt || window.event;
            if (evt.key.toLowerCase() == 'escape') {
                $("body").removeClass(self.extensionId + "_modal-open");

                window.postMessage({
                    "EventName": "CloseDialog",
                    model: {
                        "id": self.id
                    }
                },
                    '*');

                self.clearVariables();
            }
        };

        $('#' + self.getCoordinateButtonId).off('click').on('click',
            function () {
                var cordinatesAndPageNumber = self.getCoordinatesAndPageNumber();
                window.postMessage({
                    "EventName": "GetCoordinate",
                    model: {
                        "id": self.id,
                        "pdfSigningPage": cordinatesAndPageNumber.page,
                        "pdfLeftCoordinate": cordinatesAndPageNumber.left,
                        "pdfTopCoordinate": cordinatesAndPageNumber.top
                    }
                }, '*');

                $("#simplemodal-container a.modalCloseImg").click();
                if (self) {
                    self.clearVariables();
                }
            });

        $('#' + self.signPdfButtonId).off('click').on('click', function () {
            var cordinatesAndPageNumber = self.getCoordinatesAndPageNumber();

            var osName = PdfSigningExtensionUtils.CheckOS();

            if (osName === PdfSigningExtensionUtils.Enum.OS.Win || osName === PdfSigningExtensionUtils.Enum.OS.Mac) {
                window.postMessage({
                    "EventName": "ListCertificatesAndSignPdf",
                    model: {
                        "id": self.id,
                        "pdfSigningPage": cordinatesAndPageNumber.page,
                        "pdfLeftCoordinate": cordinatesAndPageNumber.left,
                        "pdfTopCoordinate": cordinatesAndPageNumber.top,
                        "pdfSigningImage": dialogPdf.getSignImage()
                    }
                }, '*');
            }

            if (osName === PdfSigningExtensionUtils.Enum.OS.Linux) {
                window.postMessage({
                    "EventName": "SigningPdfWithCustomDialog",
                    model: {
                        "id": self.id,
                        "pdfSigningPage": cordinatesAndPageNumber.page,
                        "pdfLeftCoordinate": cordinatesAndPageNumber.left,
                        "pdfTopCoordinate": cordinatesAndPageNumber.top,
                        "pdfSigningImage": dialogPdf.getSignImage()
                    }
                }, '*');
            }

            $("#simplemodal-container a.modalCloseImg").click();
            if (self) {
                self.clearVariables();
            }
        });
    };
    self.clearVariables = function () {
        clearTimeout(self.shouldDrawTimeout);
        clearInterval(self.drawInterval);
        clearTimeout(self.signaturesContainerTimeout);
        self = undefined;
        clearFunction();
    };
    self.openPage = function () {
        self.pdfFile.getPage(1).then(function (page) {
            self.viewport = page.getViewport(1);
            self.originalPdfHeight = self.viewport.height;
            self.originalPdfWidth = self.viewport.width;
            var scale = self.dialogWidth / self.viewport.width;
            self.viewport = page.getViewport(scale);
            self.rect.scale = scale;
            self.rect.width = self.rectWidth * scale;
            self.rect.height = self.rectHeight * scale;

            if (!self.isSetCoordinate) {
                var yAdjust = self.image == null ? 20 : 15;
                var xAdjust = self.image == null ? 20 : 15;

                if (!left)
                    self.rect.x = 110;
                else {
                    left = parseInt(left);
                    self.rect.x = self.rect.scale * (left + self.rect.width / 2 - xAdjust);
                }

                if (!top)
                    self.rect.y = 50;
                else {
                    top = parseInt(top);
                    self.rect.y = self.rect.scale * (self.originalPdfHeight - top - self.rect.height / 2 + yAdjust);
                }
                self.isSetCoordinate = true;
            }

            if (self.isPredefinedCoordinate) {
                self.canvasUpper.onmousedown = null;
                self.canvasUpper.onmouseup = null;
            }

            self.canvas.height = self.viewport.height;
            self.canvas.width = self.viewport.width;

            var renderContext = {
                canvasContext: self.context,
                viewport: self.viewport
            };

            page.render(renderContext);
            self.canvasUpper.height = self.canvas.height;
            self.canvasUpper.width = self.canvas.width;
            self.shouldDraw = true;
            clearInterval(self.shouldDrawTimeout);
            self.shouldDrawTimeout = null;

            self.changeText(self.currentPageTextId, "/" + self.numberOfPages, 50);
            self.setValue(self.currentPageTextInputId, self.currPageNumber, 50);
        });
    };
    self.getNextPage = function () {
        window.postMessage({
            "EventName": "GetPdfPage",
            model: {
                "id": self.id,
                "orderNumber": self.currPageNumber
            }
        }, '*');
    };

    self.setMarkerOpacity = function () {
        if (self.currPageNumber === currentSignaturePage) {
            $("#" + self.locateSignature + " img").css("opacity", "1");
        } else {
            $("#" + self.locateSignature + " img").css("opacity", "0.6");
        }
    }

    self.openPrevPage = function () {
        if (self.numberOfPages === 1) {
            return;
        }
        self.blockUI();
        var pageNumber = Math.max(1, self.currPageNumber - 1);
        if (pageNumber !== self.currPageNumber) {
            self.currPageNumber = pageNumber;
        } else {
            self.currPageNumber = self.numberOfPages;
        }
        self.getNextPage();
        self.setMarkerOpacity();
    };

    self.openExactPage = function (page) {
        self.blockUI();
        self.currPageNumber = page;
        self.getNextPage();
        self.setMarkerOpacity();
    };

    self.openNextPage = function () {
        if (self.numberOfPages === 1) {
            return;
        }
        self.blockUI();
        var pageNumber = Math.min(self.numberOfPages, self.currPageNumber + 1);
        if (pageNumber !== self.currPageNumber) {
            self.currPageNumber = pageNumber;
        } else {
            self.currPageNumber = 1;
        }
        self.getNextPage();
        self.setMarkerOpacity();
    };

    self.loadPdf = function (urlNew, currentPage, totalPages) {
        PDFJS.disableStream = true;
        if (urlNew != undefined && currentPage != undefined && totalPages != undefined) {
            self.currPageNumber = currentPage;
            self.numberOfPages = totalPages;
            self.changeText(self.currentPageTextId, "/" + self.numberOfPages);
            url = urlNew;
        }

        PDFJS.getDocument(url).then(function (pdf) {
            self.pdfFile = pdf;
            self.openPage();
            self.unblockUI();
            if (self.onPageLoadCallback != undefined && typeof self.onPageLoadCallback == 'function') {
                self.onPageLoadCallback();
            }
        });
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

    self.shouldDraw = true;
    self.shouldDrawTimeout = null;
    self.initCanvasDrawing = function () {
        if (!self.hasVisibleSignature && !self.showCoordinate) {
            return;
        }
        var ctx = self.canvasUpper.getContext('2d');

        var clear = function () {
            ctx.clearRect(0, 0, self.canvasUpper.width, self.canvasUpper.height);
        }

        var draw = function () {
            if (self == undefined) {
                return;
            }
            if (!self.shouldDraw) {
                return;
            }
            clear();
            ctx.fillStyle = "#444444";
            ctx.shadowBlur = 10;
            ctx.shadowColor = "black";
            if (self.image == null) {

                if ((self.isPredefinedCoordinate && self.currPageNumber === currentSignaturePage) || !self.isPredefinedCoordinate) {
                    ctx.strokeRect(self.rect.x - self.rect.width / 2, self.rect.y - self.rect.height / 2, self.rect.width, self.rect.height);
                }
            } else {
                if ((self.isPredefinedCoordinate && self.currPageNumber === currentSignaturePage) ||
                    !self.isPredefinedCoordinate) {
                    ctx.strokeRect(self.rect.x - self.rect.width / 2,
                        self.rect.y - self.rect.height / 2,
                        self.rect.width,
                        self.rect.height);
                    ctx.drawImage(self.image,
                        self.rect.x - self.rect.width / 2,
                        self.rect.y - self.rect.height / 2,
                        self.rect.width,
                        self.rect.height);
                }
            };

            if (self.shouldDrawTimeout == null) {
                self.shouldDrawTimeout = setTimeout(function () {
                    self.shouldDraw = false;
                }, 1000);
            }
        }

        var init = function () {
            self.drawInterval = setInterval(draw, 10);
        }
        var resetTimeout = function () {
            self.shouldDraw = true;
            clearTimeout(self.shouldDrawTimeout);
            self.shouldDrawTimeout = null;
        }
        var onMouseMove = function (e) {
            if (self.rect.dragging) {
                if (self.rect.insideBox(e.offsetX, e.offsetY)) {
                    self.rect.x = e.offsetX - self.canvasUpper.offsetLeft;
                    self.rect.y = e.offsetY - self.canvasUpper.offsetTop;
                    self.canvasUpper.style.cursor = "move";
                    resetTimeout();
                }
            }
        }

        var onMouseDown = function (e) {
            self.canvasUpper.style.cursor = "auto";
            if (self.rect.insideBox(e.offsetX, e.offsetY)) {
                self.rect.x = e.offsetX - self.canvasUpper.offsetLeft;
                self.rect.y = e.offsetY - self.canvasUpper.offsetTop;
                self.rect.dragging = true;
                self.canvasUpper.onmousemove = onMouseMove;
                resetTimeout();
            }
        }

        var onMouseUp = function () {
            self.canvasUpper.style.cursor = "auto";
            self.rect.dragging = false;
            self.canvasUpper.onmousemove = null;
        }

        init();
        self.canvasUpper.onmousedown = onMouseDown;
        self.canvasUpper.onmouseup = onMouseUp;
    };

    self.setSetInitialElements = function () {
        self.canvas = document.getElementById(self.canvasId);
        self.canvasUpper = document.getElementById(self.canvasUpperId);
        self.context = self.canvas.getContext('2d');
        self.pageElement = document.getElementById(self.pdfContainerId);
    }


    self.openModal = function () {
        $.modal(
            self.getModalTemplate(),
            {
                containerCss: {
                    height: self.dialogHeight,
                    width: self.dialogWidth
                }
            });
        self.loadPdf();
        self.setSetInitialElements();
        self.initButtonActions();
        self.initNavigationActions();
        self.initFileUploadActions();
        self.initCanvasDrawing();
        $("body").addClass(self.extensionId + "_modal-open");
    }

    self.getCoordinatesAndPageNumber = function () {
        var yAdjust = self.image == null ? 20 : 15;
        var xAdjust = self.image == null ? 20 : 15;
        return {
            left: self.rect.x / self.rect.scale - self.rect.width / 2 + xAdjust,
            top: self.originalPdfHeight - (self.rect.y / self.rect.scale + self.rect.height / 2) + yAdjust,
            page: self.currPageNumber
        };
    }
};