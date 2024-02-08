var W = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function R(g) {
    return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g
}
var X = {};
/*!
	By André Rinas, www.andrerinas.de
	Documentation, www.simplelightbox.com
	Available for use under the MIT License
	Version 2.14.2
*/
(function(g) {
    Object.defineProperty(g, "__esModule", {
        value: !0
    }),
    g.default = void 0;
    function S(r) {
        "@babel/helpers - typeof";
        return S = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
            return typeof n
        }
        : function(n) {
            return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
        }
        ,
        S(r)
    }
    function m(r, n) {
        var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
        if (!t) {
            if (Array.isArray(r) || (t = E(r)) || n && r && typeof r.length == "number") {
                t && (r = t);
                var e = 0
                  , o = function() {};
                return {
                    s: o,
                    n: function() {
                        return e >= r.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: r[e++]
                        }
                    },
                    e: function(l) {
                        throw l
                    },
                    f: o
                }
            }
            throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
        }
        var i = !0, a = !1, d;
        return {
            s: function() {
                t = t.call(r)
            },
            n: function() {
                var l = t.next();
                return i = l.done,
                l
            },
            e: function(l) {
                a = !0,
                d = l
            },
            f: function() {
                try {
                    !i && t.return != null && t.return()
                } finally {
                    if (a)
                        throw d
                }
            }
        }
    }
    function P(r) {
        return A(r) || T(r) || E(r) || D()
    }
    function D() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    function E(r, n) {
        if (r) {
            if (typeof r == "string")
                return b(r, n);
            var t = Object.prototype.toString.call(r).slice(8, -1);
            if (t === "Object" && r.constructor && (t = r.constructor.name),
            t === "Map" || t === "Set")
                return Array.from(r);
            if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return b(r, n)
        }
    }
    function T(r) {
        if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null)
            return Array.from(r)
    }
    function A(r) {
        if (Array.isArray(r))
            return b(r)
    }
    function b(r, n) {
        (n == null || n > r.length) && (n = r.length);
        for (var t = 0, e = new Array(n); t < n; t++)
            e[t] = r[t];
        return e
    }
    function H(r, n) {
        if (!(r instanceof n))
            throw new TypeError("Cannot call a class as a function")
    }
    function x(r, n) {
        for (var t = 0; t < n.length; t++) {
            var e = n[t];
            e.enumerable = e.enumerable || !1,
            e.configurable = !0,
            "value"in e && (e.writable = !0),
            Object.defineProperty(r, e.key, e)
        }
    }
    function k(r, n, t) {
        return n && x(r.prototype, n),
        t && x(r, t),
        Object.defineProperty(r, "prototype", {
            writable: !1
        }),
        r
    }
    function f(r, n, t) {
        return n in r ? Object.defineProperty(r, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : r[n] = t,
        r
    }
    var Y = function() {
        function r(n, t) {
            var e = this;
            if (H(this, r),
            f(this, "defaultOptions", {
                sourceAttr: "href",
                overlay: !0,
                overlayOpacity: .7,
                spinner: !0,
                nav: !0,
                navText: ["&lsaquo;", "&rsaquo;"],
                captions: !0,
                captionDelay: 0,
                captionSelector: "img",
                captionType: "attr",
                captionsData: "title",
                captionPosition: "bottom",
                captionClass: "",
                captionHTML: !0,
                close: !0,
                closeText: "&times;",
                swipeClose: !0,
                showCounter: !0,
                fileExt: "png|jpg|jpeg|gif|webp",
                animationSlide: !0,
                animationSpeed: 250,
                preloading: !0,
                enableKeyboard: !0,
                loop: !0,
                rel: !1,
                docClose: !0,
                swipeTolerance: 50,
                className: "simple-lightbox",
                widthRatio: .8,
                heightRatio: .9,
                scaleImageToRatio: !1,
                disableRightClick: !1,
                disableScroll: !0,
                alertError: !0,
                alertErrorMessage: "Image not found, next image will be loaded",
                additionalHtml: !1,
                history: !0,
                throttleInterval: 0,
                doubleTapZoom: 2,
                maxZoom: 10,
                htmlClass: "has-lightbox",
                rtl: !1,
                fixedClass: "sl-fixed",
                fadeSpeed: 300,
                uniqueImages: !0,
                focus: !0,
                scrollZoom: !0,
                scrollZoomFactor: .5,
                download: !1
            }),
            f(this, "transitionPrefix", void 0),
            f(this, "isPassiveEventsSupported", void 0),
            f(this, "transitionCapable", !1),
            f(this, "isTouchDevice", "ontouchstart"in window),
            f(this, "isAppleDevice", /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)),
            f(this, "initialLocationHash", void 0),
            f(this, "pushStateSupport", "pushState"in history),
            f(this, "isOpen", !1),
            f(this, "isAnimating", !1),
            f(this, "isClosing", !1),
            f(this, "isFadeIn", !1),
            f(this, "urlChangedOnce", !1),
            f(this, "hashReseted", !1),
            f(this, "historyHasChanges", !1),
            f(this, "historyUpdateTimeout", null),
            f(this, "currentImage", void 0),
            f(this, "eventNamespace", "simplelightbox"),
            f(this, "domNodes", {}),
            f(this, "loadedImages", []),
            f(this, "initialImageIndex", 0),
            f(this, "currentImageIndex", 0),
            f(this, "initialSelector", null),
            f(this, "globalScrollbarWidth", 0),
            f(this, "controlCoordinates", {
                swipeDiff: 0,
                swipeYDiff: 0,
                swipeStart: 0,
                swipeEnd: 0,
                swipeYStart: 0,
                swipeYEnd: 0,
                mousedown: !1,
                imageLeft: 0,
                zoomed: !1,
                containerHeight: 0,
                containerWidth: 0,
                containerOffsetX: 0,
                containerOffsetY: 0,
                imgHeight: 0,
                imgWidth: 0,
                capture: !1,
                initialOffsetX: 0,
                initialOffsetY: 0,
                initialPointerOffsetX: 0,
                initialPointerOffsetY: 0,
                initialPointerOffsetX2: 0,
                initialPointerOffsetY2: 0,
                initialScale: 1,
                initialPinchDistance: 0,
                pointerOffsetX: 0,
                pointerOffsetY: 0,
                pointerOffsetX2: 0,
                pointerOffsetY2: 0,
                targetOffsetX: 0,
                targetOffsetY: 0,
                targetScale: 0,
                pinchOffsetX: 0,
                pinchOffsetY: 0,
                limitOffsetX: 0,
                limitOffsetY: 0,
                scaleDifference: 0,
                targetPinchDistance: 0,
                touchCount: 0,
                doubleTapped: !1,
                touchmoveCount: 0
            }),
            this.options = Object.assign(this.defaultOptions, t),
            this.isPassiveEventsSupported = this.checkPassiveEventsSupport(),
            typeof n == "string" ? (this.initialSelector = n,
            this.elements = Array.from(document.querySelectorAll(n))) : this.elements = typeof n.length < "u" && n.length > 0 ? Array.from(n) : [n],
            this.relatedElements = [],
            this.transitionPrefix = this.calculateTransitionPrefix(),
            this.transitionCapable = this.transitionPrefix !== !1,
            this.initialLocationHash = this.hash,
            this.options.rel && (this.elements = this.getRelated(this.options.rel)),
            this.options.uniqueImages) {
                var o = [];
                this.elements = Array.from(this.elements).filter(function(i) {
                    var a = i.getAttribute(e.options.sourceAttr);
                    return o.indexOf(a) === -1 ? (o.push(a),
                    !0) : !1
                })
            }
            this.createDomNodes(),
            this.options.close && this.domNodes.wrapper.appendChild(this.domNodes.closeButton),
            this.options.nav && this.domNodes.wrapper.appendChild(this.domNodes.navigation),
            this.options.spinner && this.domNodes.wrapper.appendChild(this.domNodes.spinner),
            this.addEventListener(this.elements, "click." + this.eventNamespace, function(i) {
                if (e.isValidLink(i.currentTarget)) {
                    if (i.preventDefault(),
                    e.isAnimating)
                        return !1;
                    e.initialImageIndex = e.elements.indexOf(i.currentTarget),
                    e.openImage(i.currentTarget)
                }
            }),
            this.options.docClose && this.addEventListener(this.domNodes.wrapper, ["click." + this.eventNamespace, "touchstart." + this.eventNamespace], function(i) {
                e.isOpen && i.target === i.currentTarget && e.close()
            }),
            this.options.disableRightClick && this.addEventListener(document.body, "contextmenu." + this.eventNamespace, function(i) {
                i.target.parentElement.classList.contains("sl-image") && i.preventDefault()
            }),
            this.options.enableKeyboard && this.addEventListener(document.body, "keyup." + this.eventNamespace, this.throttle(function(i) {
                if (e.controlCoordinates.swipeDiff = 0,
                e.isAnimating && i.key === "Escape") {
                    e.currentImage.setAttribute("src", ""),
                    e.isAnimating = !1,
                    e.close();
                    return
                }
                e.isOpen && (i.preventDefault(),
                i.key === "Escape" && e.close(),
                !e.isAnimating && ["ArrowLeft", "ArrowRight"].indexOf(i.key) > -1 && e.loadImage(i.key === "ArrowRight" ? 1 : -1))
            }, this.options.throttleInterval)),
            this.addEvents()
        }
        return k(r, [{
            key: "checkPassiveEventsSupport",
            value: function() {
                var t = !1;
                try {
                    var e = Object.defineProperty({}, "passive", {
                        get: function() {
                            t = !0
                        }
                    });
                    window.addEventListener("testPassive", null, e),
                    window.removeEventListener("testPassive", null, e)
                } catch {}
                return t
            }
        }, {
            key: "getCaptionElement",
            value: function(t) {
                if (this.options.captionSelector.startsWith("+")) {
                    var e = this.options.captionSelector.replace(/^\+/, "").trimStart()
                      , o = t.nextElementSibling;
                    return o && o.matches(e) ? o : !1
                } else if (this.options.captionSelector.startsWith(">")) {
                    var i = this.options.captionSelector.replace(/^>/, "").trimStart();
                    return t.querySelector(i)
                } else
                    return t.querySelector(this.options.captionSelector)
            }
        }, {
            key: "generateQuerySelector",
            value: function(t) {
                var e = t.tagName
                  , o = t.id
                  , i = t.className
                  , a = t.parentNode;
                if (e === "HTML")
                    return "HTML";
                var d = e;
                if (d += o !== "" ? "#".concat(o) : "",
                i)
                    for (var s = i.trim().split(/\s/), l = 0; l < s.length; l++)
                        d += ".".concat(s[l]);
                for (var c = 1, h = t; h.previousElementSibling; h = h.previousElementSibling)
                    c += 1;
                return d += ":nth-child(".concat(c, ")"),
                "".concat(this.generateQuerySelector(a), " > ").concat(d)
            }
        }, {
            key: "createDomNodes",
            value: function() {
                if (this.domNodes.overlay = document.createElement("div"),
                this.domNodes.overlay.classList.add("sl-overlay"),
                this.domNodes.overlay.dataset.opacityTarget = this.options.overlayOpacity,
                this.domNodes.closeButton = document.createElement("button"),
                this.domNodes.closeButton.classList.add("sl-close"),
                this.domNodes.closeButton.innerHTML = this.options.closeText,
                this.domNodes.spinner = document.createElement("div"),
                this.domNodes.spinner.classList.add("sl-spinner"),
                this.domNodes.spinner.innerHTML = "<div></div>",
                this.domNodes.navigation = document.createElement("div"),
                this.domNodes.navigation.classList.add("sl-navigation"),
                this.domNodes.navigation.innerHTML = '<button class="sl-prev">'.concat(this.options.navText[0], '</button><button class="sl-next">').concat(this.options.navText[1], "</button>"),
                this.domNodes.counter = document.createElement("div"),
                this.domNodes.counter.classList.add("sl-counter"),
                this.domNodes.counter.innerHTML = '<span class="sl-current"></span>/<span class="sl-total"></span>',
                this.domNodes.download = document.createElement("div"),
                this.domNodes.download.classList.add("sl-download"),
                this.domNodes.downloadLink = document.createElement("a"),
                this.domNodes.downloadLink.setAttribute("download", ""),
                this.domNodes.downloadLink.textContent = this.options.download,
                this.domNodes.download.appendChild(this.domNodes.downloadLink),
                this.domNodes.caption = document.createElement("div"),
                this.domNodes.caption.classList.add("sl-caption", "pos-" + this.options.captionPosition),
                this.options.captionClass) {
                    var t, e = this.options.captionClass.split(/[\s,]+/);
                    (t = this.domNodes.caption.classList).add.apply(t, P(e))
                }
                this.domNodes.image = document.createElement("div"),
                this.domNodes.image.classList.add("sl-image"),
                this.domNodes.wrapper = document.createElement("div"),
                this.domNodes.wrapper.classList.add("sl-wrapper"),
                this.domNodes.wrapper.setAttribute("tabindex", -1),
                this.domNodes.wrapper.setAttribute("role", "dialog"),
                this.domNodes.wrapper.setAttribute("aria-hidden", !1),
                this.options.className && this.domNodes.wrapper.classList.add(this.options.className),
                this.options.rtl && this.domNodes.wrapper.classList.add("sl-dir-rtl")
            }
        }, {
            key: "throttle",
            value: function(t, e) {
                var o;
                return function() {
                    o || (t.apply(this, arguments),
                    o = !0,
                    setTimeout(function() {
                        return o = !1
                    }, e))
                }
            }
        }, {
            key: "isValidLink",
            value: function(t) {
                return !this.options.fileExt || t.getAttribute(this.options.sourceAttr) && new RegExp("(" + this.options.fileExt + ")($|\\?.*$)","i").test(t.getAttribute(this.options.sourceAttr))
            }
        }, {
            key: "calculateTransitionPrefix",
            value: function() {
                var t = (document.body || document.documentElement).style;
                return "transition"in t ? "" : "WebkitTransition"in t ? "-webkit-" : "MozTransition"in t ? "-moz-" : "OTransition"in t ? "-o" : !1
            }
        }, {
            key: "getScrollbarWidth",
            value: function() {
                var t = 0
                  , e = document.createElement("div");
                return e.classList.add("sl-scrollbar-measure"),
                document.body.appendChild(e),
                t = e.offsetWidth - e.clientWidth,
                document.body.removeChild(e),
                t
            }
        }, {
            key: "toggleScrollbar",
            value: function(t) {
                var e = 0
                  , o = [].slice.call(document.querySelectorAll("." + this.options.fixedClass));
                if (t === "hide") {
                    var i = window.innerWidth;
                    if (!i) {
                        var a = document.documentElement.getBoundingClientRect();
                        i = a.right - Math.abs(a.left)
                    }
                    if (document.body.clientWidth < i || this.isAppleDevice) {
                        var d = parseInt(window.getComputedStyle(document.body).paddingRight || 0, 10);
                        e = this.getScrollbarWidth(),
                        document.body.dataset.originalPaddingRight = d,
                        (e > 0 || e == 0 && this.isAppleDevice) && (document.body.classList.add("hidden-scroll"),
                        document.body.style.paddingRight = d + e + "px",
                        o.forEach(function(s) {
                            var l = s.style.paddingRight
                              , c = window.getComputedStyle(s)["padding-right"];
                            s.dataset.originalPaddingRight = l,
                            s.style.paddingRight = "".concat(parseFloat(c) + e, "px")
                        }))
                    }
                } else
                    document.body.classList.remove("hidden-scroll"),
                    document.body.style.paddingRight = document.body.dataset.originalPaddingRight + "px",
                    o.forEach(function(s) {
                        var l = s.dataset.originalPaddingRight;
                        typeof l < "u" && (s.style.paddingRight = l)
                    });
                return e
            }
        }, {
            key: "close",
            value: function() {
                var t = this;
                if (!this.isOpen || this.isAnimating || this.isClosing)
                    return !1;
                this.isClosing = !0;
                var e = this.relatedElements[this.currentImageIndex];
                e.dispatchEvent(new Event("close.simplelightbox")),
                this.options.history && (this.historyHasChanges = !1,
                this.hashReseted || this.resetHash()),
                this.removeEventListener(document, "focusin." + this.eventNamespace),
                this.fadeOut(this.domNodes.overlay, this.options.fadeSpeed),
                this.fadeOut(document.querySelectorAll(".sl-image img,  .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter"), this.options.fadeSpeed, function() {
                    t.options.disableScroll && t.toggleScrollbar("show"),
                    t.options.htmlClass && t.options.htmlClass !== "" && document.querySelector("html").classList.remove(t.options.htmlClass),
                    document.body.removeChild(t.domNodes.wrapper),
                    t.options.overlay && document.body.removeChild(t.domNodes.overlay),
                    t.domNodes.additionalHtml = null,
                    t.domNodes.download = null,
                    e.dispatchEvent(new Event("closed.simplelightbox")),
                    t.isClosing = !1
                }),
                this.currentImage = null,
                this.isOpen = !1,
                this.isAnimating = !1;
                for (var o in this.controlCoordinates)
                    this.controlCoordinates[o] = 0;
                this.controlCoordinates.mousedown = !1,
                this.controlCoordinates.zoomed = !1,
                this.controlCoordinates.capture = !1,
                this.controlCoordinates.initialScale = this.minMax(1, 1, this.options.maxZoom),
                this.controlCoordinates.doubleTapped = !1
            }
        }, {
            key: "hash",
            get: function() {
                return window.location.hash.substring(1)
            }
        }, {
            key: "preload",
            value: function() {
                var t = this
                  , e = this.currentImageIndex
                  , o = this.relatedElements.length
                  , i = e + 1 < 0 ? o - 1 : e + 1 >= o - 1 ? 0 : e + 1
                  , a = e - 1 < 0 ? o - 1 : e - 1 >= o - 1 ? 0 : e - 1
                  , d = new Image
                  , s = new Image;
                d.addEventListener("load", function(l) {
                    var c = l.target.getAttribute("src");
                    t.loadedImages.indexOf(c) === -1 && t.loadedImages.push(c),
                    t.relatedElements[e].dispatchEvent(new Event("nextImageLoaded." + t.eventNamespace))
                }),
                d.setAttribute("src", this.relatedElements[i].getAttribute(this.options.sourceAttr)),
                s.addEventListener("load", function(l) {
                    var c = l.target.getAttribute("src");
                    t.loadedImages.indexOf(c) === -1 && t.loadedImages.push(c),
                    t.relatedElements[e].dispatchEvent(new Event("prevImageLoaded." + t.eventNamespace))
                }),
                s.setAttribute("src", this.relatedElements[a].getAttribute(this.options.sourceAttr))
            }
        }, {
            key: "loadImage",
            value: function(t) {
                var e = this
                  , o = t;
                this.options.rtl && (t = -t),
                this.relatedElements[this.currentImageIndex].dispatchEvent(new Event("change." + this.eventNamespace)),
                this.relatedElements[this.currentImageIndex].dispatchEvent(new Event((t === 1 ? "next" : "prev") + "." + this.eventNamespace));
                var i = this.currentImageIndex + t;
                if (this.isAnimating || (i < 0 || i >= this.relatedElements.length) && this.options.loop === !1)
                    return !1;
                this.currentImageIndex = i < 0 ? this.relatedElements.length - 1 : i > this.relatedElements.length - 1 ? 0 : i,
                this.domNodes.counter.querySelector(".sl-current").innerHTML = this.currentImageIndex + 1,
                this.options.animationSlide && this.slide(this.options.animationSpeed / 1e3, -100 * o - this.controlCoordinates.swipeDiff + "px"),
                this.fadeOut(this.domNodes.image, this.options.fadeSpeed, function() {
                    e.isAnimating = !0,
                    e.isClosing ? e.isAnimating = !1 : setTimeout(function() {
                        var a = e.relatedElements[e.currentImageIndex];
                        e.currentImage && (e.currentImage.setAttribute("src", a.getAttribute(e.options.sourceAttr)),
                        e.loadedImages.indexOf(a.getAttribute(e.options.sourceAttr)) === -1 && e.show(e.domNodes.spinner),
                        e.domNodes.image.contains(e.domNodes.caption) && e.domNodes.image.removeChild(e.domNodes.caption),
                        e.adjustImage(o),
                        e.options.preloading && e.preload())
                    }, 100)
                })
            }
        }, {
            key: "adjustImage",
            value: function(t) {
                var e = this;
                if (!this.currentImage)
                    return !1;
                var o = new Image
                  , i = window.innerWidth * this.options.widthRatio
                  , a = window.innerHeight * this.options.heightRatio;
                o.setAttribute("src", this.currentImage.getAttribute("src")),
                this.currentImage.dataset.scale = 1,
                this.currentImage.dataset.translateX = 0,
                this.currentImage.dataset.translateY = 0,
                this.zoomPanElement(0, 0, 1),
                o.addEventListener("error", function(d) {
                    e.relatedElements[e.currentImageIndex].dispatchEvent(new Event("error." + e.eventNamespace)),
                    e.isAnimating = !1,
                    e.isOpen = !0,
                    e.domNodes.spinner.style.display = "none";
                    var s = t === 1 || t === -1;
                    if (e.initialImageIndex === e.currentImageIndex && s)
                        return e.close();
                    e.options.alertError && alert(e.options.alertErrorMessage),
                    e.loadImage(s ? t : 1)
                }),
                o.addEventListener("load", function(d) {
                    typeof t < "u" && (e.relatedElements[e.currentImageIndex].dispatchEvent(new Event("changed." + e.eventNamespace)),
                    e.relatedElements[e.currentImageIndex].dispatchEvent(new Event((t === 1 ? "nextDone" : "prevDone") + "." + e.eventNamespace))),
                    e.options.history && e.updateURL(),
                    e.loadedImages.indexOf(e.currentImage.getAttribute("src")) === -1 && e.loadedImages.push(e.currentImage.getAttribute("src"));
                    var s = d.target.width
                      , l = d.target.height;
                    if (e.options.scaleImageToRatio || s > i || l > a) {
                        var c = s / l > i / a ? s / i : l / a;
                        s /= c,
                        l /= c
                    }
                    e.domNodes.image.style.top = (window.innerHeight - l) / 2 + "px",
                    e.domNodes.image.style.left = (window.innerWidth - s - e.globalScrollbarWidth) / 2 + "px",
                    e.domNodes.image.style.width = s + "px",
                    e.domNodes.image.style.height = l + "px",
                    e.domNodes.spinner.style.display = "none",
                    e.options.focus && e.forceFocus(),
                    e.fadeIn(e.currentImage, e.options.fadeSpeed, function() {
                        e.options.focus && e.domNodes.wrapper.focus()
                    }),
                    e.isOpen = !0;
                    var h, p;
                    typeof e.options.captionSelector == "string" ? h = e.options.captionSelector === "self" ? e.relatedElements[e.currentImageIndex] : e.getCaptionElement(e.relatedElements[e.currentImageIndex]) : typeof e.options.captionSelector == "function" && (h = e.options.captionSelector(e.relatedElements[e.currentImageIndex])),
                    e.options.captions && h && (e.options.captionType === "data" ? p = h.dataset[e.options.captionsData] : e.options.captionType === "text" ? p = h.innerHTML : p = h.getAttribute(e.options.captionsData)),
                    e.options.loop ? e.relatedElements.length === 1 ? e.hide(e.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")) : e.show(e.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")) : (e.currentImageIndex === 0 && e.hide(e.domNodes.navigation.querySelector(".sl-prev")),
                    e.currentImageIndex >= e.relatedElements.length - 1 && e.hide(e.domNodes.navigation.querySelector(".sl-next")),
                    e.currentImageIndex > 0 && e.show(e.domNodes.navigation.querySelector(".sl-prev")),
                    e.currentImageIndex < e.relatedElements.length - 1 && e.show(e.domNodes.navigation.querySelector(".sl-next"))),
                    t === 1 || t === -1 ? (e.options.animationSlide && (e.slide(0, 100 * t + "px"),
                    setTimeout(function() {
                        e.slide(e.options.animationSpeed / 1e3, "0px")
                    }, 50)),
                    e.fadeIn(e.domNodes.image, e.options.fadeSpeed, function() {
                        e.isAnimating = !1,
                        e.setCaption(p, s)
                    })) : (e.isAnimating = !1,
                    e.setCaption(p, s)),
                    e.options.additionalHtml && !e.domNodes.additionalHtml && (e.domNodes.additionalHtml = document.createElement("div"),
                    e.domNodes.additionalHtml.classList.add("sl-additional-html"),
                    e.domNodes.additionalHtml.innerHTML = e.options.additionalHtml,
                    e.domNodes.image.appendChild(e.domNodes.additionalHtml)),
                    e.options.download && e.domNodes.downloadLink.setAttribute("href", e.currentImage.getAttribute("src"))
                })
            }
        }, {
            key: "zoomPanElement",
            value: function(t, e, o) {
                this.currentImage.style[this.transitionPrefix + "transform"] = "translate(" + t + "," + e + ") scale(" + o + ")"
            }
        }, {
            key: "minMax",
            value: function(t, e, o) {
                return t < e ? e : t > o ? o : t
            }
        }, {
            key: "setZoomData",
            value: function(t, e, o) {
                this.currentImage.dataset.scale = t,
                this.currentImage.dataset.translateX = e,
                this.currentImage.dataset.translateY = o
            }
        }, {
            key: "hashchangeHandler",
            value: function() {
                this.isOpen && this.hash === this.initialLocationHash && (this.hashReseted = !0,
                this.close())
            }
        }, {
            key: "addEvents",
            value: function() {
                var t = this;
                if (this.addEventListener(window, "resize." + this.eventNamespace, function(o) {
                    t.isOpen && t.adjustImage()
                }),
                this.addEventListener(this.domNodes.closeButton, ["click." + this.eventNamespace, "touchstart." + this.eventNamespace], this.close.bind(this)),
                this.options.history && setTimeout(function() {
                    t.addEventListener(window, "hashchange." + t.eventNamespace, function(o) {
                        t.isOpen && t.hashchangeHandler()
                    })
                }, 40),
                this.addEventListener(this.domNodes.navigation.getElementsByTagName("button"), "click." + this.eventNamespace, function(o) {
                    if (!o.currentTarget.tagName.match(/button/i))
                        return !0;
                    o.preventDefault(),
                    t.controlCoordinates.swipeDiff = 0,
                    t.loadImage(o.currentTarget.classList.contains("sl-next") ? 1 : -1)
                }),
                this.options.scrollZoom) {
                    var e = 1;
                    this.addEventListener(this.domNodes.image, ["mousewheel", "DOMMouseScroll"], function(o) {
                        if (t.controlCoordinates.mousedown || t.isAnimating || t.isClosing || !t.isOpen)
                            return !0;
                        t.controlCoordinates.containerHeight == 0 && (t.controlCoordinates.containerHeight = t.getDimensions(t.domNodes.image).height,
                        t.controlCoordinates.containerWidth = t.getDimensions(t.domNodes.image).width,
                        t.controlCoordinates.imgHeight = t.getDimensions(t.currentImage).height,
                        t.controlCoordinates.imgWidth = t.getDimensions(t.currentImage).width,
                        t.controlCoordinates.containerOffsetX = t.domNodes.image.offsetLeft,
                        t.controlCoordinates.containerOffsetY = t.domNodes.image.offsetTop,
                        t.controlCoordinates.initialOffsetX = parseFloat(t.currentImage.dataset.translateX),
                        t.controlCoordinates.initialOffsetY = parseFloat(t.currentImage.dataset.translateY));
                        var i = o.delta || o.wheelDelta;
                        i === void 0 && (i = o.detail),
                        i = Math.max(-1, Math.min(1, i)),
                        e += i * t.options.scrollZoomFactor * e,
                        e = Math.max(1, Math.min(t.options.maxZoom, e)),
                        t.controlCoordinates.targetScale = e;
                        var a = document.documentElement.scrollTop || document.body.scrollTop;
                        t.controlCoordinates.pinchOffsetX = o.pageX,
                        t.controlCoordinates.pinchOffsetY = o.pageY - a || 0,
                        t.controlCoordinates.limitOffsetX = (t.controlCoordinates.imgWidth * t.controlCoordinates.targetScale - t.controlCoordinates.containerWidth) / 2,
                        t.controlCoordinates.limitOffsetY = (t.controlCoordinates.imgHeight * t.controlCoordinates.targetScale - t.controlCoordinates.containerHeight) / 2,
                        t.controlCoordinates.scaleDifference = t.controlCoordinates.targetScale - t.controlCoordinates.initialScale,
                        t.controlCoordinates.targetOffsetX = t.controlCoordinates.imgWidth * t.controlCoordinates.targetScale <= t.controlCoordinates.containerWidth ? 0 : t.minMax(t.controlCoordinates.initialOffsetX - (t.controlCoordinates.pinchOffsetX - t.controlCoordinates.containerOffsetX - t.controlCoordinates.containerWidth / 2 - t.controlCoordinates.initialOffsetX) / (t.controlCoordinates.targetScale - t.controlCoordinates.scaleDifference) * t.controlCoordinates.scaleDifference, t.controlCoordinates.limitOffsetX * -1, t.controlCoordinates.limitOffsetX),
                        t.controlCoordinates.targetOffsetY = t.controlCoordinates.imgHeight * t.controlCoordinates.targetScale <= t.controlCoordinates.containerHeight ? 0 : t.minMax(t.controlCoordinates.initialOffsetY - (t.controlCoordinates.pinchOffsetY - t.controlCoordinates.containerOffsetY - t.controlCoordinates.containerHeight / 2 - t.controlCoordinates.initialOffsetY) / (t.controlCoordinates.targetScale - t.controlCoordinates.scaleDifference) * t.controlCoordinates.scaleDifference, t.controlCoordinates.limitOffsetY * -1, t.controlCoordinates.limitOffsetY),
                        t.zoomPanElement(t.controlCoordinates.targetOffsetX + "px", t.controlCoordinates.targetOffsetY + "px", t.controlCoordinates.targetScale),
                        t.controlCoordinates.targetScale > 1 ? (t.controlCoordinates.zoomed = !0,
                        (!t.domNodes.caption.style.opacity || t.domNodes.caption.style.opacity > 0) && t.domNodes.caption.style.display !== "none" && t.fadeOut(t.domNodes.caption, t.options.fadeSpeed)) : (t.controlCoordinates.initialScale === 1 && (t.controlCoordinates.zoomed = !1,
                        t.domNodes.caption.style.display === "none" && t.fadeIn(t.domNodes.caption, t.options.fadeSpeed)),
                        t.controlCoordinates.initialPinchDistance = null,
                        t.controlCoordinates.capture = !1),
                        t.controlCoordinates.initialPinchDistance = t.controlCoordinates.targetPinchDistance,
                        t.controlCoordinates.initialScale = t.controlCoordinates.targetScale,
                        t.controlCoordinates.initialOffsetX = t.controlCoordinates.targetOffsetX,
                        t.controlCoordinates.initialOffsetY = t.controlCoordinates.targetOffsetY,
                        t.setZoomData(t.controlCoordinates.targetScale, t.controlCoordinates.targetOffsetX, t.controlCoordinates.targetOffsetY),
                        t.zoomPanElement(t.controlCoordinates.targetOffsetX + "px", t.controlCoordinates.targetOffsetY + "px", t.controlCoordinates.targetScale)
                    })
                }
                this.addEventListener(this.domNodes.image, ["touchstart." + this.eventNamespace, "mousedown." + this.eventNamespace], function(o) {
                    if (o.target.tagName === "A" && o.type === "touchstart")
                        return !0;
                    if (o.type === "mousedown")
                        o.preventDefault(),
                        t.controlCoordinates.initialPointerOffsetX = o.clientX,
                        t.controlCoordinates.initialPointerOffsetY = o.clientY,
                        t.controlCoordinates.containerHeight = t.getDimensions(t.domNodes.image).height,
                        t.controlCoordinates.containerWidth = t.getDimensions(t.domNodes.image).width,
                        t.controlCoordinates.imgHeight = t.getDimensions(t.currentImage).height,
                        t.controlCoordinates.imgWidth = t.getDimensions(t.currentImage).width,
                        t.controlCoordinates.containerOffsetX = t.domNodes.image.offsetLeft,
                        t.controlCoordinates.containerOffsetY = t.domNodes.image.offsetTop,
                        t.controlCoordinates.initialOffsetX = parseFloat(t.currentImage.dataset.translateX),
                        t.controlCoordinates.initialOffsetY = parseFloat(t.currentImage.dataset.translateY),
                        t.controlCoordinates.capture = !0;
                    else {
                        if (t.controlCoordinates.touchCount = o.touches.length,
                        t.controlCoordinates.initialPointerOffsetX = o.touches[0].clientX,
                        t.controlCoordinates.initialPointerOffsetY = o.touches[0].clientY,
                        t.controlCoordinates.containerHeight = t.getDimensions(t.domNodes.image).height,
                        t.controlCoordinates.containerWidth = t.getDimensions(t.domNodes.image).width,
                        t.controlCoordinates.imgHeight = t.getDimensions(t.currentImage).height,
                        t.controlCoordinates.imgWidth = t.getDimensions(t.currentImage).width,
                        t.controlCoordinates.containerOffsetX = t.domNodes.image.offsetLeft,
                        t.controlCoordinates.containerOffsetY = t.domNodes.image.offsetTop,
                        t.controlCoordinates.touchCount === 1) {
                            if (!t.controlCoordinates.doubleTapped)
                                t.controlCoordinates.doubleTapped = !0,
                                setTimeout(function() {
                                    t.controlCoordinates.doubleTapped = !1
                                }, 300);
                            else
                                return t.currentImage.classList.add("sl-transition"),
                                t.controlCoordinates.zoomed ? (t.controlCoordinates.initialScale = 1,
                                t.setZoomData(t.controlCoordinates.initialScale, 0, 0),
                                t.zoomPanElement("0px", "0px", t.controlCoordinates.initialScale),
                                t.controlCoordinates.zoomed = !1) : (t.controlCoordinates.initialScale = t.options.doubleTapZoom,
                                t.setZoomData(t.controlCoordinates.initialScale, 0, 0),
                                t.zoomPanElement("0px", "0px", t.controlCoordinates.initialScale),
                                (!t.domNodes.caption.style.opacity || t.domNodes.caption.style.opacity > 0) && t.domNodes.caption.style.display !== "none" && t.fadeOut(t.domNodes.caption, t.options.fadeSpeed),
                                t.controlCoordinates.zoomed = !0),
                                setTimeout(function() {
                                    t.currentImage && t.currentImage.classList.remove("sl-transition")
                                }, 200),
                                !1;
                            t.controlCoordinates.initialOffsetX = parseFloat(t.currentImage.dataset.translateX),
                            t.controlCoordinates.initialOffsetY = parseFloat(t.currentImage.dataset.translateY)
                        } else
                            t.controlCoordinates.touchCount === 2 && (t.controlCoordinates.initialPointerOffsetX2 = o.touches[1].clientX,
                            t.controlCoordinates.initialPointerOffsetY2 = o.touches[1].clientY,
                            t.controlCoordinates.initialOffsetX = parseFloat(t.currentImage.dataset.translateX),
                            t.controlCoordinates.initialOffsetY = parseFloat(t.currentImage.dataset.translateY),
                            t.controlCoordinates.pinchOffsetX = (t.controlCoordinates.initialPointerOffsetX + t.controlCoordinates.initialPointerOffsetX2) / 2,
                            t.controlCoordinates.pinchOffsetY = (t.controlCoordinates.initialPointerOffsetY + t.controlCoordinates.initialPointerOffsetY2) / 2,
                            t.controlCoordinates.initialPinchDistance = Math.sqrt((t.controlCoordinates.initialPointerOffsetX - t.controlCoordinates.initialPointerOffsetX2) * (t.controlCoordinates.initialPointerOffsetX - t.controlCoordinates.initialPointerOffsetX2) + (t.controlCoordinates.initialPointerOffsetY - t.controlCoordinates.initialPointerOffsetY2) * (t.controlCoordinates.initialPointerOffsetY - t.controlCoordinates.initialPointerOffsetY2)));
                        t.controlCoordinates.capture = !0
                    }
                    return t.controlCoordinates.mousedown ? !0 : (t.transitionCapable && (t.controlCoordinates.imageLeft = parseInt(t.domNodes.image.style.left, 10)),
                    t.controlCoordinates.mousedown = !0,
                    t.controlCoordinates.swipeDiff = 0,
                    t.controlCoordinates.swipeYDiff = 0,
                    t.controlCoordinates.swipeStart = o.pageX || o.touches[0].pageX,
                    t.controlCoordinates.swipeYStart = o.pageY || o.touches[0].pageY,
                    !1)
                }),
                this.addEventListener(this.domNodes.image, ["touchmove." + this.eventNamespace, "mousemove." + this.eventNamespace, "MSPointerMove"], function(o) {
                    if (!t.controlCoordinates.mousedown)
                        return !0;
                    if (o.type === "touchmove") {
                        if (t.controlCoordinates.capture === !1)
                            return !1;
                        t.controlCoordinates.pointerOffsetX = o.touches[0].clientX,
                        t.controlCoordinates.pointerOffsetY = o.touches[0].clientY,
                        t.controlCoordinates.touchCount = o.touches.length,
                        t.controlCoordinates.touchmoveCount++,
                        t.controlCoordinates.touchCount > 1 ? (t.controlCoordinates.pointerOffsetX2 = o.touches[1].clientX,
                        t.controlCoordinates.pointerOffsetY2 = o.touches[1].clientY,
                        t.controlCoordinates.targetPinchDistance = Math.sqrt((t.controlCoordinates.pointerOffsetX - t.controlCoordinates.pointerOffsetX2) * (t.controlCoordinates.pointerOffsetX - t.controlCoordinates.pointerOffsetX2) + (t.controlCoordinates.pointerOffsetY - t.controlCoordinates.pointerOffsetY2) * (t.controlCoordinates.pointerOffsetY - t.controlCoordinates.pointerOffsetY2)),
                        t.controlCoordinates.initialPinchDistance === null && (t.controlCoordinates.initialPinchDistance = t.controlCoordinates.targetPinchDistance),
                        Math.abs(t.controlCoordinates.initialPinchDistance - t.controlCoordinates.targetPinchDistance) >= 1 && (t.controlCoordinates.targetScale = t.minMax(t.controlCoordinates.targetPinchDistance / t.controlCoordinates.initialPinchDistance * t.controlCoordinates.initialScale, 1, t.options.maxZoom),
                        t.controlCoordinates.limitOffsetX = (t.controlCoordinates.imgWidth * t.controlCoordinates.targetScale - t.controlCoordinates.containerWidth) / 2,
                        t.controlCoordinates.limitOffsetY = (t.controlCoordinates.imgHeight * t.controlCoordinates.targetScale - t.controlCoordinates.containerHeight) / 2,
                        t.controlCoordinates.scaleDifference = t.controlCoordinates.targetScale - t.controlCoordinates.initialScale,
                        t.controlCoordinates.targetOffsetX = t.controlCoordinates.imgWidth * t.controlCoordinates.targetScale <= t.controlCoordinates.containerWidth ? 0 : t.minMax(t.controlCoordinates.initialOffsetX - (t.controlCoordinates.pinchOffsetX - t.controlCoordinates.containerOffsetX - t.controlCoordinates.containerWidth / 2 - t.controlCoordinates.initialOffsetX) / (t.controlCoordinates.targetScale - t.controlCoordinates.scaleDifference) * t.controlCoordinates.scaleDifference, t.controlCoordinates.limitOffsetX * -1, t.controlCoordinates.limitOffsetX),
                        t.controlCoordinates.targetOffsetY = t.controlCoordinates.imgHeight * t.controlCoordinates.targetScale <= t.controlCoordinates.containerHeight ? 0 : t.minMax(t.controlCoordinates.initialOffsetY - (t.controlCoordinates.pinchOffsetY - t.controlCoordinates.containerOffsetY - t.controlCoordinates.containerHeight / 2 - t.controlCoordinates.initialOffsetY) / (t.controlCoordinates.targetScale - t.controlCoordinates.scaleDifference) * t.controlCoordinates.scaleDifference, t.controlCoordinates.limitOffsetY * -1, t.controlCoordinates.limitOffsetY),
                        t.zoomPanElement(t.controlCoordinates.targetOffsetX + "px", t.controlCoordinates.targetOffsetY + "px", t.controlCoordinates.targetScale),
                        t.controlCoordinates.targetScale > 1 && (t.controlCoordinates.zoomed = !0,
                        (!t.domNodes.caption.style.opacity || t.domNodes.caption.style.opacity > 0) && t.domNodes.caption.style.display !== "none" && t.fadeOut(t.domNodes.caption, t.options.fadeSpeed)),
                        t.controlCoordinates.initialPinchDistance = t.controlCoordinates.targetPinchDistance,
                        t.controlCoordinates.initialScale = t.controlCoordinates.targetScale,
                        t.controlCoordinates.initialOffsetX = t.controlCoordinates.targetOffsetX,
                        t.controlCoordinates.initialOffsetY = t.controlCoordinates.targetOffsetY)) : (t.controlCoordinates.targetScale = t.controlCoordinates.initialScale,
                        t.controlCoordinates.limitOffsetX = (t.controlCoordinates.imgWidth * t.controlCoordinates.targetScale - t.controlCoordinates.containerWidth) / 2,
                        t.controlCoordinates.limitOffsetY = (t.controlCoordinates.imgHeight * t.controlCoordinates.targetScale - t.controlCoordinates.containerHeight) / 2,
                        t.controlCoordinates.targetOffsetX = t.controlCoordinates.imgWidth * t.controlCoordinates.targetScale <= t.controlCoordinates.containerWidth ? 0 : t.minMax(t.controlCoordinates.pointerOffsetX - (t.controlCoordinates.initialPointerOffsetX - t.controlCoordinates.initialOffsetX), t.controlCoordinates.limitOffsetX * -1, t.controlCoordinates.limitOffsetX),
                        t.controlCoordinates.targetOffsetY = t.controlCoordinates.imgHeight * t.controlCoordinates.targetScale <= t.controlCoordinates.containerHeight ? 0 : t.minMax(t.controlCoordinates.pointerOffsetY - (t.controlCoordinates.initialPointerOffsetY - t.controlCoordinates.initialOffsetY), t.controlCoordinates.limitOffsetY * -1, t.controlCoordinates.limitOffsetY),
                        Math.abs(t.controlCoordinates.targetOffsetX) === Math.abs(t.controlCoordinates.limitOffsetX) && (t.controlCoordinates.initialOffsetX = t.controlCoordinates.targetOffsetX,
                        t.controlCoordinates.initialPointerOffsetX = t.controlCoordinates.pointerOffsetX),
                        Math.abs(t.controlCoordinates.targetOffsetY) === Math.abs(t.controlCoordinates.limitOffsetY) && (t.controlCoordinates.initialOffsetY = t.controlCoordinates.targetOffsetY,
                        t.controlCoordinates.initialPointerOffsetY = t.controlCoordinates.pointerOffsetY),
                        t.setZoomData(t.controlCoordinates.initialScale, t.controlCoordinates.targetOffsetX, t.controlCoordinates.targetOffsetY),
                        t.zoomPanElement(t.controlCoordinates.targetOffsetX + "px", t.controlCoordinates.targetOffsetY + "px", t.controlCoordinates.targetScale))
                    }
                    if (o.type === "mousemove" && t.controlCoordinates.mousedown) {
                        if (o.type == "touchmove")
                            return !0;
                        if (o.preventDefault(),
                        t.controlCoordinates.capture === !1)
                            return !1;
                        t.controlCoordinates.pointerOffsetX = o.clientX,
                        t.controlCoordinates.pointerOffsetY = o.clientY,
                        t.controlCoordinates.targetScale = t.controlCoordinates.initialScale,
                        t.controlCoordinates.limitOffsetX = (t.controlCoordinates.imgWidth * t.controlCoordinates.targetScale - t.controlCoordinates.containerWidth) / 2,
                        t.controlCoordinates.limitOffsetY = (t.controlCoordinates.imgHeight * t.controlCoordinates.targetScale - t.controlCoordinates.containerHeight) / 2,
                        t.controlCoordinates.targetOffsetX = t.controlCoordinates.imgWidth * t.controlCoordinates.targetScale <= t.controlCoordinates.containerWidth ? 0 : t.minMax(t.controlCoordinates.pointerOffsetX - (t.controlCoordinates.initialPointerOffsetX - t.controlCoordinates.initialOffsetX), t.controlCoordinates.limitOffsetX * -1, t.controlCoordinates.limitOffsetX),
                        t.controlCoordinates.targetOffsetY = t.controlCoordinates.imgHeight * t.controlCoordinates.targetScale <= t.controlCoordinates.containerHeight ? 0 : t.minMax(t.controlCoordinates.pointerOffsetY - (t.controlCoordinates.initialPointerOffsetY - t.controlCoordinates.initialOffsetY), t.controlCoordinates.limitOffsetY * -1, t.controlCoordinates.limitOffsetY),
                        Math.abs(t.controlCoordinates.targetOffsetX) === Math.abs(t.controlCoordinates.limitOffsetX) && (t.controlCoordinates.initialOffsetX = t.controlCoordinates.targetOffsetX,
                        t.controlCoordinates.initialPointerOffsetX = t.controlCoordinates.pointerOffsetX),
                        Math.abs(t.controlCoordinates.targetOffsetY) === Math.abs(t.controlCoordinates.limitOffsetY) && (t.controlCoordinates.initialOffsetY = t.controlCoordinates.targetOffsetY,
                        t.controlCoordinates.initialPointerOffsetY = t.controlCoordinates.pointerOffsetY),
                        t.setZoomData(t.controlCoordinates.initialScale, t.controlCoordinates.targetOffsetX, t.controlCoordinates.targetOffsetY),
                        t.zoomPanElement(t.controlCoordinates.targetOffsetX + "px", t.controlCoordinates.targetOffsetY + "px", t.controlCoordinates.targetScale)
                    }
                    t.controlCoordinates.zoomed || (t.controlCoordinates.swipeEnd = o.pageX || o.touches[0].pageX,
                    t.controlCoordinates.swipeYEnd = o.pageY || o.touches[0].pageY,
                    t.controlCoordinates.swipeDiff = t.controlCoordinates.swipeStart - t.controlCoordinates.swipeEnd,
                    t.controlCoordinates.swipeYDiff = t.controlCoordinates.swipeYStart - t.controlCoordinates.swipeYEnd,
                    t.options.animationSlide && t.slide(0, -t.controlCoordinates.swipeDiff + "px"))
                }),
                this.addEventListener(this.domNodes.image, ["touchend." + this.eventNamespace, "mouseup." + this.eventNamespace, "touchcancel." + this.eventNamespace, "mouseleave." + this.eventNamespace, "pointerup", "pointercancel", "MSPointerUp", "MSPointerCancel"], function(o) {
                    if (t.isTouchDevice && o.type === "touchend" && (t.controlCoordinates.touchCount = o.touches.length,
                    t.controlCoordinates.touchCount === 0 ? (t.currentImage && t.setZoomData(t.controlCoordinates.initialScale, t.controlCoordinates.targetOffsetX, t.controlCoordinates.targetOffsetY),
                    t.controlCoordinates.initialScale === 1 && (t.controlCoordinates.zoomed = !1,
                    t.domNodes.caption.style.display === "none" && t.fadeIn(t.domNodes.caption, t.options.fadeSpeed)),
                    t.controlCoordinates.initialPinchDistance = null,
                    t.controlCoordinates.capture = !1) : t.controlCoordinates.touchCount === 1 ? (t.controlCoordinates.initialPointerOffsetX = o.touches[0].clientX,
                    t.controlCoordinates.initialPointerOffsetY = o.touches[0].clientY) : t.controlCoordinates.touchCount > 1 && (t.controlCoordinates.initialPinchDistance = null)),
                    t.controlCoordinates.mousedown) {
                        t.controlCoordinates.mousedown = !1;
                        var i = !0;
                        t.options.loop || (t.currentImageIndex === 0 && t.controlCoordinates.swipeDiff < 0 && (i = !1),
                        t.currentImageIndex >= t.relatedElements.length - 1 && t.controlCoordinates.swipeDiff > 0 && (i = !1)),
                        Math.abs(t.controlCoordinates.swipeDiff) > t.options.swipeTolerance && i ? t.loadImage(t.controlCoordinates.swipeDiff > 0 ? 1 : -1) : t.options.animationSlide && t.slide(t.options.animationSpeed / 1e3, "0px"),
                        t.options.swipeClose && Math.abs(t.controlCoordinates.swipeYDiff) > 50 && Math.abs(t.controlCoordinates.swipeDiff) < t.options.swipeTolerance && t.close()
                    }
                }),
                this.addEventListener(this.domNodes.image, ["dblclick"], function(o) {
                    if (!t.isTouchDevice)
                        return t.controlCoordinates.initialPointerOffsetX = o.clientX,
                        t.controlCoordinates.initialPointerOffsetY = o.clientY,
                        t.controlCoordinates.containerHeight = t.getDimensions(t.domNodes.image).height,
                        t.controlCoordinates.containerWidth = t.getDimensions(t.domNodes.image).width,
                        t.controlCoordinates.imgHeight = t.getDimensions(t.currentImage).height,
                        t.controlCoordinates.imgWidth = t.getDimensions(t.currentImage).width,
                        t.controlCoordinates.containerOffsetX = t.domNodes.image.offsetLeft,
                        t.controlCoordinates.containerOffsetY = t.domNodes.image.offsetTop,
                        t.currentImage.classList.add("sl-transition"),
                        t.controlCoordinates.zoomed ? (t.controlCoordinates.initialScale = 1,
                        t.setZoomData(t.controlCoordinates.initialScale, 0, 0),
                        t.zoomPanElement("0px", "0px", t.controlCoordinates.initialScale),
                        t.controlCoordinates.zoomed = !1,
                        t.domNodes.caption.style.display === "none" && t.fadeIn(t.domNodes.caption, t.options.fadeSpeed)) : (t.controlCoordinates.initialScale = t.options.doubleTapZoom,
                        t.setZoomData(t.controlCoordinates.initialScale, 0, 0),
                        t.zoomPanElement("0px", "0px", t.controlCoordinates.initialScale),
                        (!t.domNodes.caption.style.opacity || t.domNodes.caption.style.opacity > 0) && t.domNodes.caption.style.display !== "none" && t.fadeOut(t.domNodes.caption, t.options.fadeSpeed),
                        t.controlCoordinates.zoomed = !0),
                        setTimeout(function() {
                            t.currentImage && (t.currentImage.classList.remove("sl-transition"),
                            t.currentImage.style[t.transitionPrefix + "transform-origin"] = null)
                        }, 200),
                        t.controlCoordinates.capture = !0,
                        !1
                })
            }
        }, {
            key: "getDimensions",
            value: function(t) {
                var e = window.getComputedStyle(t)
                  , o = t.offsetHeight
                  , i = t.offsetWidth
                  , a = parseFloat(e.borderTopWidth)
                  , d = parseFloat(e.borderBottomWidth)
                  , s = parseFloat(e.paddingTop)
                  , l = parseFloat(e.paddingBottom)
                  , c = parseFloat(e.borderLeftWidth)
                  , h = parseFloat(e.borderRightWidth)
                  , p = parseFloat(e.paddingLeft)
                  , u = parseFloat(e.paddingRight);
                return {
                    height: o - d - a - s - l,
                    width: i - c - h - p - u
                }
            }
        }, {
            key: "updateHash",
            value: function() {
                var t = "pid=" + (this.currentImageIndex + 1)
                  , e = window.location.href.split("#")[0] + "#" + t;
                this.hashReseted = !1,
                this.pushStateSupport ? window.history[this.historyHasChanges ? "replaceState" : "pushState"]("", document.title, e) : this.historyHasChanges ? window.location.replace(e) : window.location.hash = t,
                this.historyHasChanges || (this.urlChangedOnce = !0),
                this.historyHasChanges = !0
            }
        }, {
            key: "resetHash",
            value: function() {
                this.hashReseted = !0,
                this.urlChangedOnce ? history.back() : this.pushStateSupport ? history.pushState("", document.title, window.location.pathname + window.location.search) : window.location.hash = "",
                clearTimeout(this.historyUpdateTimeout)
            }
        }, {
            key: "updateURL",
            value: function() {
                clearTimeout(this.historyUpdateTimeout),
                this.historyHasChanges ? this.historyUpdateTimeout = setTimeout(this.updateHash.bind(this), 800) : this.updateHash()
            }
        }, {
            key: "setCaption",
            value: function(t, e, o) {
                var i = this;
                if (this.options.captions && t && t !== "" && typeof t < "u") {
                    var a, d = !((a = o ?? this.options.captionHTML) !== null && a !== void 0) || a ? "innerHTML" : "innerText";
                    this.hide(this.domNodes.caption),
                    this.domNodes.caption.style.width = e + "px",
                    this.domNodes.caption[d] = t,
                    this.domNodes.image.appendChild(this.domNodes.caption),
                    setTimeout(function() {
                        i.fadeIn(i.domNodes.caption, i.options.fadeSpeed)
                    }, this.options.captionDelay)
                }
            }
        }, {
            key: "slide",
            value: function(t, e) {
                if (!this.transitionCapable)
                    return this.domNodes.image.style.left = e;
                this.domNodes.image.style[this.transitionPrefix + "transform"] = "translateX(" + e + ")",
                this.domNodes.image.style[this.transitionPrefix + "transition"] = this.transitionPrefix + "transform " + t + "s linear"
            }
        }, {
            key: "getRelated",
            value: function(t) {
                var e;
                return t && t !== !1 && t !== "nofollow" ? e = Array.from(this.elements).filter(function(o) {
                    return o.getAttribute("rel") === t
                }) : e = this.elements,
                e
            }
        }, {
            key: "openImage",
            value: function(t) {
                var e = this;
                t.dispatchEvent(new Event("show." + this.eventNamespace)),
                this.globalScrollbarWidth = this.getScrollbarWidth(),
                this.options.disableScroll && (this.toggleScrollbar("hide"),
                this.globalScrollbarWidth = 0),
                this.options.htmlClass && this.options.htmlClass !== "" && document.querySelector("html").classList.add(this.options.htmlClass),
                document.body.appendChild(this.domNodes.wrapper),
                this.domNodes.wrapper.appendChild(this.domNodes.image),
                this.options.overlay && document.body.appendChild(this.domNodes.overlay),
                this.relatedElements = this.getRelated(t.rel),
                this.options.showCounter && (this.relatedElements.length == 1 && this.domNodes.wrapper.contains(this.domNodes.counter) ? this.domNodes.wrapper.removeChild(this.domNodes.counter) : this.relatedElements.length > 1 && !this.domNodes.wrapper.contains(this.domNodes.counter) && this.domNodes.wrapper.appendChild(this.domNodes.counter)),
                this.options.download && this.domNodes.download && this.domNodes.wrapper.appendChild(this.domNodes.download),
                this.isAnimating = !0,
                this.currentImageIndex = this.relatedElements.indexOf(t);
                var o = t.getAttribute(this.options.sourceAttr);
                this.currentImage = document.createElement("img"),
                this.currentImage.style.display = "none",
                this.currentImage.setAttribute("src", o),
                this.currentImage.dataset.scale = 1,
                this.currentImage.dataset.translateX = 0,
                this.currentImage.dataset.translateY = 0,
                this.loadedImages.indexOf(o) === -1 && this.loadedImages.push(o),
                this.domNodes.image.innerHTML = "",
                this.domNodes.image.setAttribute("style", ""),
                this.domNodes.image.appendChild(this.currentImage),
                this.fadeIn(this.domNodes.overlay, this.options.fadeSpeed),
                this.fadeIn([this.domNodes.counter, this.domNodes.navigation, this.domNodes.closeButton, this.domNodes.download], this.options.fadeSpeed),
                this.show(this.domNodes.spinner),
                this.domNodes.counter.querySelector(".sl-current").innerHTML = this.currentImageIndex + 1,
                this.domNodes.counter.querySelector(".sl-total").innerHTML = this.relatedElements.length,
                this.adjustImage(),
                this.options.preloading && this.preload(),
                setTimeout(function() {
                    t.dispatchEvent(new Event("shown." + e.eventNamespace))
                }, this.options.animationSpeed)
            }
        }, {
            key: "forceFocus",
            value: function() {
                var t = this;
                this.removeEventListener(document, "focusin." + this.eventNamespace),
                this.addEventListener(document, "focusin." + this.eventNamespace, function(e) {
                    document !== e.target && t.domNodes.wrapper !== e.target && !t.domNodes.wrapper.contains(e.target) && t.domNodes.wrapper.focus()
                })
            }
        }, {
            key: "addEventListener",
            value: function(t, e, o, i) {
                t = this.wrap(t),
                e = this.wrap(e);
                var a = m(t), d;
                try {
                    for (a.s(); !(d = a.n()).done; ) {
                        var s = d.value;
                        s.namespaces || (s.namespaces = {});
                        var l = m(e), c;
                        try {
                            for (l.s(); !(c = l.n()).done; ) {
                                var h = c.value
                                  , p = i || !1
                                  , u = ["touchstart", "touchmove", "mousewheel", "DOMMouseScroll"].indexOf(h.split(".")[0]) >= 0;
                                u && this.isPassiveEventsSupported && (S(p) === "object" ? p.passive = !0 : p = {
                                    passive: !0
                                }),
                                s.namespaces[h] = o,
                                s.addEventListener(h.split(".")[0], o, p)
                            }
                        } catch (C) {
                            l.e(C)
                        } finally {
                            l.f()
                        }
                    }
                } catch (C) {
                    a.e(C)
                } finally {
                    a.f()
                }
            }
        }, {
            key: "removeEventListener",
            value: function(t, e) {
                t = this.wrap(t),
                e = this.wrap(e);
                var o = m(t), i;
                try {
                    for (o.s(); !(i = o.n()).done; ) {
                        var a = i.value, d = m(e), s;
                        try {
                            for (d.s(); !(s = d.n()).done; ) {
                                var l = s.value;
                                a.namespaces && a.namespaces[l] && (a.removeEventListener(l.split(".")[0], a.namespaces[l]),
                                delete a.namespaces[l])
                            }
                        } catch (c) {
                            d.e(c)
                        } finally {
                            d.f()
                        }
                    }
                } catch (c) {
                    o.e(c)
                } finally {
                    o.f()
                }
            }
        }, {
            key: "fadeOut",
            value: function(t, e, o) {
                var i = this;
                t = this.wrap(t);
                var a = m(t), d;
                try {
                    for (a.s(); !(d = a.n()).done; ) {
                        var s = d.value;
                        s.style.opacity = parseFloat(s) || window.getComputedStyle(s).getPropertyValue("opacity")
                    }
                } catch (h) {
                    a.e(h)
                } finally {
                    a.f()
                }
                this.isFadeIn = !1;
                var l = 16.66666 / (e || this.options.fadeSpeed)
                  , c = function h() {
                    var p = parseFloat(t[0].style.opacity);
                    if ((p -= l) < 0) {
                        var u = m(t), C;
                        try {
                            for (u.s(); !(C = u.n()).done; ) {
                                var v = C.value;
                                v.style.display = "none",
                                v.style.opacity = 1
                            }
                        } catch (N) {
                            u.e(N)
                        } finally {
                            u.f()
                        }
                        o && o.call(i, t)
                    } else {
                        var y = m(t), w;
                        try {
                            for (y.s(); !(w = y.n()).done; ) {
                                var O = w.value;
                                O.style.opacity = p
                            }
                        } catch (N) {
                            y.e(N)
                        } finally {
                            y.f()
                        }
                        requestAnimationFrame(h)
                    }
                };
                c()
            }
        }, {
            key: "fadeIn",
            value: function(t, e, o, i) {
                var a = this;
                t = this.wrap(t);
                var d = m(t), s;
                try {
                    for (d.s(); !(s = d.n()).done; ) {
                        var l = s.value;
                        l && (l.style.opacity = 0,
                        l.style.display = i || "block")
                    }
                } catch (u) {
                    d.e(u)
                } finally {
                    d.f()
                }
                this.isFadeIn = !0;
                var c = parseFloat(t[0].dataset.opacityTarget || 1)
                  , h = 16.66666 * c / (e || this.options.fadeSpeed)
                  , p = function u() {
                    var C = parseFloat(t[0].style.opacity);
                    if ((C += h) > c) {
                        var O = m(t), N;
                        try {
                            for (O.s(); !(N = O.n()).done; ) {
                                var L = N.value;
                                L && (L.style.opacity = c)
                            }
                        } catch (I) {
                            O.e(I)
                        } finally {
                            O.f()
                        }
                        o && o.call(a, t)
                    } else {
                        var v = m(t), y;
                        try {
                            for (v.s(); !(y = v.n()).done; ) {
                                var w = y.value;
                                w && (w.style.opacity = C)
                            }
                        } catch (I) {
                            v.e(I)
                        } finally {
                            v.f()
                        }
                        if (!a.isFadeIn)
                            return;
                        requestAnimationFrame(u)
                    }
                };
                p()
            }
        }, {
            key: "hide",
            value: function(t) {
                t = this.wrap(t);
                var e = m(t), o;
                try {
                    for (e.s(); !(o = e.n()).done; ) {
                        var i = o.value;
                        i.style.display != "none" && (i.dataset.initialDisplay = i.style.display),
                        i.style.display = "none"
                    }
                } catch (a) {
                    e.e(a)
                } finally {
                    e.f()
                }
            }
        }, {
            key: "show",
            value: function(t, e) {
                t = this.wrap(t);
                var o = m(t), i;
                try {
                    for (o.s(); !(i = o.n()).done; ) {
                        var a = i.value;
                        a.style.display = a.dataset.initialDisplay || e || "block"
                    }
                } catch (d) {
                    o.e(d)
                } finally {
                    o.f()
                }
            }
        }, {
            key: "wrap",
            value: function(t) {
                return typeof t[Symbol.iterator] == "function" && typeof t != "string" ? t : [t]
            }
        }, {
            key: "on",
            value: function(t, e) {
                t = this.wrap(t);
                var o = m(this.elements), i;
                try {
                    for (o.s(); !(i = o.n()).done; ) {
                        var a = i.value;
                        a.fullyNamespacedEvents || (a.fullyNamespacedEvents = {});
                        var d = m(t), s;
                        try {
                            for (d.s(); !(s = d.n()).done; ) {
                                var l = s.value;
                                a.fullyNamespacedEvents[l] = e,
                                a.addEventListener(l, e)
                            }
                        } catch (c) {
                            d.e(c)
                        } finally {
                            d.f()
                        }
                    }
                } catch (c) {
                    o.e(c)
                } finally {
                    o.f()
                }
                return this
            }
        }, {
            key: "off",
            value: function(t) {
                t = this.wrap(t);
                var e = m(this.elements), o;
                try {
                    for (e.s(); !(o = e.n()).done; ) {
                        var i = o.value, a = m(t), d;
                        try {
                            for (a.s(); !(d = a.n()).done; ) {
                                var s = d.value;
                                typeof i.fullyNamespacedEvents < "u" && s in i.fullyNamespacedEvents && i.removeEventListener(s, i.fullyNamespacedEvents[s])
                            }
                        } catch (l) {
                            a.e(l)
                        } finally {
                            a.f()
                        }
                    }
                } catch (l) {
                    e.e(l)
                } finally {
                    e.f()
                }
                return this
            }
        }, {
            key: "open",
            value: function(t) {
                var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                t = t || this.elements[0],
                typeof jQuery < "u" && t instanceof jQuery && (t = t.get(0)),
                e > 0 && (t = this.elements[e]),
                this.initialImageIndex = this.elements.indexOf(t),
                this.initialImageIndex > -1 && this.openImage(t)
            }
        }, {
            key: "openPosition",
            value: function(t) {
                var e = this.elements[t];
                this.open(e, t)
            }
        }, {
            key: "next",
            value: function() {
                this.loadImage(1)
            }
        }, {
            key: "prev",
            value: function() {
                this.loadImage(-1)
            }
        }, {
            key: "getLighboxData",
            value: function() {
                return {
                    currentImageIndex: this.currentImageIndex,
                    currentImage: this.currentImage,
                    globalScrollbarWidth: this.globalScrollbarWidth
                }
            }
        }, {
            key: "destroy",
            value: function() {
                this.off(["close." + this.eventNamespace, "closed." + this.eventNamespace, "nextImageLoaded." + this.eventNamespace, "prevImageLoaded." + this.eventNamespace, "change." + this.eventNamespace, "nextDone." + this.eventNamespace, "prevDone." + this.eventNamespace, "error." + this.eventNamespace, "changed." + this.eventNamespace, "next." + this.eventNamespace, "prev." + this.eventNamespace, "show." + this.eventNamespace, "shown." + this.eventNamespace]),
                this.removeEventListener(this.elements, "click." + this.eventNamespace),
                this.removeEventListener(document, "focusin." + this.eventNamespace),
                this.removeEventListener(document.body, "contextmenu." + this.eventNamespace),
                this.removeEventListener(document.body, "keyup." + this.eventNamespace),
                this.removeEventListener(this.domNodes.navigation.getElementsByTagName("button"), "click." + this.eventNamespace),
                this.removeEventListener(this.domNodes.closeButton, "click." + this.eventNamespace),
                this.removeEventListener(window, "resize." + this.eventNamespace),
                this.removeEventListener(window, "hashchange." + this.eventNamespace),
                this.close(),
                this.isOpen && (document.body.removeChild(this.domNodes.wrapper),
                document.body.removeChild(this.domNodes.overlay)),
                this.elements = null
            }
        }, {
            key: "refresh",
            value: function() {
                if (!this.initialSelector)
                    throw "refreshing only works when you initialize using a selector!";
                var t = this.options
                  , e = this.initialSelector;
                return this.destroy(),
                this.constructor(e, t),
                this
            }
        }]),
        r
    }()
      , M = Y;
    g.default = M,
    W.SimpleLightbox = Y
}
)(X);
const F = R(X);
export {F as S};
//# sourceMappingURL=vendor-870f0eb5.js.map
