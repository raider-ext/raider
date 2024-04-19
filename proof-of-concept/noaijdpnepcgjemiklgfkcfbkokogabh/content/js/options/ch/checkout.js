"use strict";

!function(t, e) {
    var i = 2, n = {
        onSuccess: [],
        onFailure: [],
        onPaymentDetected: []
    };
    (!t.BuyWithCrypto || t.BuyWithCrypto.version < i) && function() {
        function s(t, e) {
            this.root = "https://commerce.coinbase.com", this.messageOrigin = "https://commerce.coinbase.com:443", 
            this.state = "none", this._listeningForEvents = !1, this._pauseTimeout = 0, this.preloadModal = this.preloadModal.bind(this), 
            this.showModal = this.showModal.bind(this), this.handleMessage = this.handleMessage.bind(this), 
            t && t instanceof HTMLElement && this.install(t, e);
        }
        s.version = i, s.findButtonAndInstall = function(e) {
            for (var i = 0; e && i < 3; i++) if ((e = e.previousSibling) && 1 === e.nodeType) {
                if ("A" === e.tagName && /(buy|donate)-with-crypto/.test(e.className)) {
                    var n = new t.BuyWithCrypto();
                    n.install(e);
                    break;
                }
                if ("SCRIPT" === e.tagName) break;
            }
        }, s.registerCallback = function(t, e) {
            n[t].push(e);
        };
        var a = s.prototype;
        function o(t, e) {
            h(t, e) || (t.className = t.className + " " + e);
        }
        function r(t, e) {
            var i = d(t), n = i.indexOf(e);
            n >= 0 && (i.splice(n, 1), t.className = i.join(" "));
        }
        function h(t, e) {
            return d(t).indexOf(e) >= 0;
        }
        function d(t) {
            return t.className.split(/\s+/);
        }
        if (a.triggerCallbacks = function(t, e) {
            var i = n[t];
            if (i) for (var s = 0; s < i.length; s++) i[s](e);
        }, a.install = function(i, n) {
            if (this.link) throw new Error("payment button already installed");
            "object" != typeof n && (n = null);
            var s = this.extractProductId(i), a = this.extractChargeCode(i);
            if (a) this.code = a; else {
                if (!s) return !1;
                this.checkout = s, this.product = s;
            }
            return this.link = i, this.buttonId = i.id || "bwc-" + t.Math.floor(1e16 * t.Math.random()).toString(16), 
            this.params = t.Object.assign({
                buttonId: this.buttonId
            }, i.dataset), n && (n.omitStyles || !1 === n.styles) || this.turnIntoButton(i), 
            i.addEventListener("click", this.showModal, !1), i.addEventListener("mouseover", this.preloadModal, !1), 
            function(t) {
                if (!e.head.querySelector('link[href="' + t + '"]')) {
                    var i = e.createElement("link");
                    i.rel = "stylesheet", i.href = t, e.head.appendChild(i);
                }
            }(this.root + "/v1/button.css"), !0;
        }, a.uninstall = function() {
            this.link && (this._hideSpinner(), this.link.removeEventListener("click", this.showModal, !1), 
            this.link.removeEventListener("mouseover", this.preloadModal, !1), this.link = null), 
            this._tearDownModal();
        }, a._tearDownModal = function() {
            this.state = "none", this.modalContainer && (this.modalContainer.parentNode === e.body && e.body.removeChild(this.modalContainer), 
            this.modalContainer = null), this.iframe = null, this._listeningForEvents && (t.removeEventListener("message", this.handleMessage, !1), 
            this._listeningForEvents = !1), this._pauseTimeout && (clearTimeout(this._pauseTimeout), 
            this._pauseTimeout = 0);
        }, a.loadModal = function() {
            var i;
            if (this.code) i = "/embed/charges/" + encodeURI(this.code); else {
                if (!this.checkout) return;
                i = "/embed/checkout/" + encodeURI(this.checkout);
            }
            if (this._listeningForEvents || (t.addEventListener("message", this.handleMessage, !1), 
            this._listeningForEvents = !0), this._pauseTimeout && (clearTimeout(this._pauseTimeout), 
            this._pauseTimeout = 0), !this.modalContainer) {
                var n = e.createElement("div");
                n.className = "bwc-modal-container bwc-fade", n.style.display = "none", n.dataset.buttonId = this.buttonId, 
                e.body.appendChild(n), this.modalContainer = n;
                var s = e.createElement("div");
                s.className = "bwc-dimmer", this.modalContainer.appendChild(s);
            }
            this.iframe || (this.state = "preloading", this.iframe = function(i, n, s) {
                var a, r = {};
                for (var h in s) "product" !== h && "checkout" !== h && "charge" !== h && s.hasOwnProperty(h) && (r[h] = s[h]);
                r.version = "201807";
                try {
                    a = t.top.location.origin;
                } catch (e) {
                    a = t.location.origin;
                }
                r.origin = a;
                var d = e.createElement("iframe");
                return d.allowTransparency = !0, d.frameBorder = "no", d.scrolling = "no", d.src = i + n + "?" + function(e) {
                    var i = [], n = t.encodeURIComponent;
                    for (var s in e) e.hasOwnProperty(s) && i.push(n(s) + "=" + n(e[s]));
                    return i.join("&");
                }(r), o(d, "bwc-iframe"), d;
            }(this.root, i, this.params), this.modalContainer.appendChild(this.iframe));
        }, a.preloadModal = function() {
            this.link && this.link.removeEventListener("mouseover", this.preloadModal, !1), 
            this.modalContainer || this.loadModal();
        }, a.showModal = function(t) {
            if (t) {
                if (t.button > 0 || t.ctrlKey || t.shiftKey || t.metaKey) return;
                t.preventDefault && t.preventDefault();
            }
            this.link && h(this.link, "disabled") || (this.modalContainer || this.loadModal(), 
            "preloading" === this.state ? (this.state = "loadThenShow", this._showSpinner()) : "hidden" !== this.state && "fading" !== this.state || (this.state = "show", 
            this._pauseTimeout && (clearTimeout(this._pauseTimeout), this._pauseTimeout = 0), 
            this._fadeIn()));
        }, a.hideModal = function(t) {
            "show" === this.state && this._fadeOut(), !0 !== t ? this._pauseTimeout || (this._pauseTimeout = setTimeout(this._expired.bind(this), 3e4)) : this._tearDownModal();
        }, a._expired = function() {
            this._pauseTimeout = 0, "hidden" === this.state && this._tearDownModal();
        }, a.handleMessage = function(t) {
            if (function(t) {
                if (/^[a-zA-Z0-9:\/.-]+$/.test(t)) return /^https?:\/\//i.test(t) || (t = "https://" + t), 
                /:\d+$/.test(t) || (t += /^https:/i.test(t) ? ":443" : ":80"), t.toLowerCase();
            }(t.origin) === this.messageOrigin && t.data.buttonId === this.buttonId) switch (t.data.event) {
              case "checkout_modal_loaded":
                "preloading" === this.state ? this.state = "hidden" : "loadThenShow" === this.state && (this.state = "show", 
                this._hideSpinner(), this._fadeIn());
                break;

              case "checkout_modal_closed":
                this.iframe && this.iframe.contentWindow === t.source && this.hideModal(!0);
                break;

              case "charge_confirmed":
                this.triggerCallbacks("onSuccess", t.data);
                break;

              case "charge_failed":
                this.triggerCallbacks("onFailure", t.data);
                break;

              case "payment_detected":
                this.triggerCallbacks("onPaymentDetected", t.data);
            }
        }, a.extractCheckoutId = function(t) {
            if (t) {
                var e = /\/(?:products|checkout)\/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/i.exec(t.href);
                if (e) return e[1];
                if (t.dataset) {
                    var i = t.dataset.checkout || t.dataset.product;
                    if (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(i)) return t.href = this.root + "/checkout/" + i, 
                    i;
                }
            }
        }, a.extractProductId = a.extractCheckoutId, a.extractChargeCode = function(t) {
            if (t) {
                var e = /\/charges\/([0-9A-Z]{8})(?![0-9A-Z])/i.exec(t.href);
                if (e) return e[1].toUpperCase();
                if (t.dataset) {
                    var i = t.dataset.charge;
                    if (/^[0-9A-Z]{8}$/i.test(i)) return t.href = this.root + "/charges/" + i, i;
                }
            }
        }, a.turnIntoButton = function(t) {
            for (var i, n = h(t, "donate-with-crypto"), s = !0, a = t.firstChild; a; a = a.nextSibling) if (3 !== a.nodeType && 8 !== a.nodeType && (s = !1), 
            1 === a.nodeType && "SPAN" === a.tagName) {
                i = a;
                break;
            }
            if (!i) {
                i = e.createElement("span");
                var o = s && t.textContent.trim();
                for (o || (o = (n ? "Donate" : "Buy") + " with Crypto"), i.textContent = o; t.lastChild; ) t.removeChild(t.lastChild);
                t.appendChild(i);
            }
            "" === t.rel && "" === t.target && (t.rel = "noopener noreferrer", t.target = "_blank");
        }, a._fadeIn = function() {
            var t = this.modalContainer;
            !t || "block" === t.style.display && "fading" !== this.state || (o(t, "bwc-fade"), 
            t.style.display = "block", setTimeout(function() {
                r(t, "bwc-fade");
            }, 50));
        }, a._fadeOut = function() {
            var t = this.modalContainer;
            t && "block" === t.style.display && (o(t, "bwc-fade"), this.state = "fading", setTimeout(function() {
                "fading" === this.state && (this.state = "hidden", t.style.display = "none");
            }.bind(this), 800));
        }, a._showSpinner = function() {
            this.link && (o(this.link, "loading"), this._spinner || (this._spinner = e.createElement("div"), 
            o(this._spinner, "spinner"), this.link.appendChild(this._spinner)));
        }, a._hideSpinner = function() {
            this.link && (r(this.link, "loading"), this._spinner && (this.link.removeChild(this._spinner), 
            this._spinner = null));
        }, t.BuyWithCrypto = s, e.currentScript.src.split("?").length > 1) {
            var l = e.currentScript.src.split("?")[1], c = function(t) {
                for (var e = t.split("&"), i = {}, n = 0; n < e.length; n++) {
                    var s = e[n].split("="), a = decodeURIComponent(s[0]), o = decodeURIComponent(s[1]);
                    if (void 0 === i[a]) i[a] = decodeURIComponent(o); else if ("string" == typeof i[a]) {
                        var r = [ i[a], decodeURIComponent(o) ];
                        i[a] = r;
                    } else i[a].push(decodeURIComponent(o));
                }
                return i;
            }(l), u = t[c.onload];
            u && u.constructor && u.call && u.apply && u();
        }
    }();
    var s = e.currentScript;
    s && t.BuyWithCrypto.findButtonAndInstall(s);
}(this, this.document);