;
(function () {
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
  function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  System.register(['./index-legacy-BE0djssm.js', './index-legacy-BOx5EyM9.js'], function (exports, module) {
    'use strict';

    var getDefaultExportFromCjs, __vitePreload, reactExports, patterns;
    return {
      setters: [module => {
        getDefaultExportFromCjs = module.e;
        __vitePreload = module.a9;
        reactExports = module.r;
      }, module => {
        patterns = module.p;
      }],
      execute: function execute() {
        function _mergeNamespaces(n, m) {
          for (var i = 0; i < m.length; i++) {
            const e = m[i];
            if (typeof e !== 'string' && !Array.isArray(e)) {
              for (const k in e) {
                if (k !== 'default' && !(k in n)) {
                  const d = Object.getOwnPropertyDescriptor(e, k);
                  if (d) {
                    Object.defineProperty(n, k, d.get ? d : {
                      enumerable: true,
                      get: () => e[k]
                    });
                  }
                }
              }
            }
          }
          return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, {
            value: 'Module'
          }));
        }
        var __create = Object.create;
        var __defProp = Object.defineProperty;
        var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
        var __getOwnPropNames = Object.getOwnPropertyNames;
        var __getProtoOf = Object.getPrototypeOf;
        var __hasOwnProp = Object.prototype.hasOwnProperty;
        var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
          enumerable: true,
          configurable: true,
          writable: true,
          value
        }) : obj[key] = value;
        var __export = (target, all) => {
          for (var name in all) __defProp(target, name, {
            get: all[name],
            enumerable: true
          });
        };
        var __copyProps = (to, from, except, desc) => {
          if (from && typeof from === "object" || typeof from === "function") {
            var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                let key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                  get: () => from[key],
                  enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
          return to;
        };
        var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        !mod || !mod.__esModule ? __defProp(target, "default", {
          value: mod,
          enumerable: true
        }) : target, mod));
        var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
          value: true
        }), mod);
        var __publicField = (obj, key, value) => {
          __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
          return value;
        };
        var Mux_exports = {};
        __export(Mux_exports, {
          default: () => Mux
        });
        var Mux_1 = __toCommonJS(Mux_exports);
        var import_react = __toESM(reactExports);
        var import_patterns = patterns;
        const SDK_URL = "https://cdn.jsdelivr.net/npm/@mux/mux-player@VERSION/dist/mux-player.mjs";
        class Mux extends import_react.Component {
          constructor() {
            super(...arguments);
            // Proxy methods to prevent listener leaks
            __publicField(this, "onReady", (...args) => this.props.onReady(...args));
            __publicField(this, "onPlay", (...args) => this.props.onPlay(...args));
            __publicField(this, "onBuffer", (...args) => this.props.onBuffer(...args));
            __publicField(this, "onBufferEnd", (...args) => this.props.onBufferEnd(...args));
            __publicField(this, "onPause", (...args) => this.props.onPause(...args));
            __publicField(this, "onEnded", (...args) => this.props.onEnded(...args));
            __publicField(this, "onError", (...args) => this.props.onError(...args));
            __publicField(this, "onPlayBackRateChange", event => this.props.onPlaybackRateChange(event.target.playbackRate));
            __publicField(this, "onEnablePIP", (...args) => this.props.onEnablePIP(...args));
            __publicField(this, "onSeek", e => {
              this.props.onSeek(e.target.currentTime);
            });
            __publicField(this, "onDurationChange", () => {
              const duration = this.getDuration();
              this.props.onDuration(duration);
            });
            __publicField(this, "mute", () => {
              this.player.muted = true;
            });
            __publicField(this, "unmute", () => {
              this.player.muted = false;
            });
            __publicField(this, "ref", player => {
              this.player = player;
            });
          }
          componentDidMount() {
            this.props.onMount && this.props.onMount(this);
            this.addListeners(this.player);
            const playbackId = this.getPlaybackId(this.props.url);
            if (playbackId) {
              this.player.playbackId = playbackId;
            }
          }
          componentWillUnmount() {
            this.player.playbackId = null;
            this.removeListeners(this.player);
          }
          addListeners(player) {
            const playsinline = this.props.playsinline;
            player.addEventListener("play", this.onPlay);
            player.addEventListener("waiting", this.onBuffer);
            player.addEventListener("playing", this.onBufferEnd);
            player.addEventListener("pause", this.onPause);
            player.addEventListener("seeked", this.onSeek);
            player.addEventListener("ended", this.onEnded);
            player.addEventListener("error", this.onError);
            player.addEventListener("ratechange", this.onPlayBackRateChange);
            player.addEventListener("enterpictureinpicture", this.onEnablePIP);
            player.addEventListener("leavepictureinpicture", this.onDisablePIP);
            player.addEventListener("webkitpresentationmodechanged", this.onPresentationModeChange);
            player.addEventListener("canplay", this.onReady);
            if (playsinline) {
              player.setAttribute("playsinline", "");
            }
          }
          removeListeners(player) {
            player.removeEventListener("canplay", this.onReady);
            player.removeEventListener("play", this.onPlay);
            player.removeEventListener("waiting", this.onBuffer);
            player.removeEventListener("playing", this.onBufferEnd);
            player.removeEventListener("pause", this.onPause);
            player.removeEventListener("seeked", this.onSeek);
            player.removeEventListener("ended", this.onEnded);
            player.removeEventListener("error", this.onError);
            player.removeEventListener("ratechange", this.onPlayBackRateChange);
            player.removeEventListener("enterpictureinpicture", this.onEnablePIP);
            player.removeEventListener("leavepictureinpicture", this.onDisablePIP);
            player.removeEventListener("canplay", this.onReady);
          }
          load(url) {
            var _this = this;
            return _asyncToGenerator(function* () {
              var _a;
              const _this$props = _this.props,
                onError = _this$props.onError,
                config = _this$props.config;
              if (!((_a = globalThis.customElements) == null ? void 0 : _a.get("mux-player"))) {
                try {
                  const sdkUrl = SDK_URL.replace("VERSION", config.version);
                  yield __vitePreload(() => module.import(/* webpackIgnore: true */
                  `${sdkUrl}`), false ? __VITE_PRELOAD__ : void 0);
                  _this.props.onLoaded();
                } catch (error) {
                  onError(error);
                }
              }
              const _url$match = url.match(import_patterns.MATCH_URL_MUX),
                _url$match2 = _slicedToArray(_url$match, 2),
                id = _url$match2[1];
              _this.player.playbackId = id;
            })();
          }
          play() {
            const promise = this.player.play();
            if (promise) {
              promise.catch(this.props.onError);
            }
          }
          pause() {
            this.player.pause();
          }
          stop() {
            this.player.playbackId = null;
          }
          seekTo(seconds, keepPlaying = true) {
            this.player.currentTime = seconds;
            if (!keepPlaying) {
              this.pause();
            }
          }
          setVolume(fraction) {
            this.player.volume = fraction;
          }
          enablePIP() {
            if (this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player) {
              this.player.requestPictureInPicture();
            }
          }
          disablePIP() {
            if (document.exitPictureInPicture && document.pictureInPictureElement === this.player) {
              document.exitPictureInPicture();
            }
          }
          setPlaybackRate(rate) {
            try {
              this.player.playbackRate = rate;
            } catch (error) {
              this.props.onError(error);
            }
          }
          getDuration() {
            if (!this.player) return null;
            const _this$player = this.player,
              duration = _this$player.duration,
              seekable = _this$player.seekable;
            if (duration === Infinity && seekable.length > 0) {
              return seekable.end(seekable.length - 1);
            }
            return duration;
          }
          getCurrentTime() {
            if (!this.player) return null;
            return this.player.currentTime;
          }
          getSecondsLoaded() {
            if (!this.player) return null;
            const buffered = this.player.buffered;
            if (buffered.length === 0) {
              return 0;
            }
            const end = buffered.end(buffered.length - 1);
            const duration = this.getDuration();
            if (end > duration) {
              return duration;
            }
            return end;
          }
          getPlaybackId(url) {
            const _url$match3 = url.match(import_patterns.MATCH_URL_MUX),
              _url$match4 = _slicedToArray(_url$match3, 2),
              id = _url$match4[1];
            return id;
          }
          render() {
            const _this$props2 = this.props,
              url = _this$props2.url,
              playing = _this$props2.playing,
              loop = _this$props2.loop,
              controls = _this$props2.controls,
              muted = _this$props2.muted,
              config = _this$props2.config,
              width = _this$props2.width,
              height = _this$props2.height;
            const style = {
              width: width === "auto" ? width : "100%",
              height: height === "auto" ? height : "100%"
            };
            if (controls === false) {
              style["--controls"] = "none";
            }
            return /* @__PURE__ */import_react.default.createElement("mux-player", _objectSpread({
              ref: this.ref,
              "playback-id": this.getPlaybackId(url),
              style,
              preload: "auto",
              autoPlay: playing || void 0,
              muted: muted ? "" : void 0,
              loop: loop ? "" : void 0
            }, config.attributes));
          }
        }
        __publicField(Mux, "displayName", "Mux");
        __publicField(Mux, "canPlay", import_patterns.canPlay.mux);
        const Mux$1 = /*@__PURE__*/getDefaultExportFromCjs(Mux_1);
        const Mux$2 = /*#__PURE__*/_mergeNamespaces({
          __proto__: null,
          default: Mux$1
        }, [Mux_1]);
        exports("M", Mux$2);
      }
    };
  });
})();
//# sourceMappingURL=Mux-legacy-BSl1bgBf.js.map
