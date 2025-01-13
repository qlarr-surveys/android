;
(function () {
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  System.register(['./index-legacy-DHZhPI7F.js', './index-legacy-CPXc7o2U.js'], function (exports, module) {
    'use strict';

    var getDefaultExportFromCjs, reactExports, utils, patterns;
    return {
      setters: [module => {
        getDefaultExportFromCjs = module.w;
        reactExports = module.r;
      }, module => {
        utils = module.u;
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
        var Vimeo_exports = {};
        __export(Vimeo_exports, {
          default: () => Vimeo
        });
        var Vimeo_1 = __toCommonJS(Vimeo_exports);
        var import_react = __toESM(reactExports);
        var import_utils = utils;
        var import_patterns = patterns;
        const SDK_URL = "https://player.vimeo.com/api/player.js";
        const SDK_GLOBAL = "Vimeo";
        const cleanUrl = url => {
          return url.replace("/manage/videos", "");
        };
        class Vimeo extends import_react.Component {
          constructor() {
            super(...arguments);
            // Prevent checking isLoading when URL changes
            __publicField(this, "callPlayer", import_utils.callPlayer);
            __publicField(this, "duration", null);
            __publicField(this, "currentTime", null);
            __publicField(this, "secondsLoaded", null);
            __publicField(this, "mute", () => {
              this.setMuted(true);
            });
            __publicField(this, "unmute", () => {
              this.setMuted(false);
            });
            __publicField(this, "ref", container => {
              this.container = container;
            });
          }
          componentDidMount() {
            this.props.onMount && this.props.onMount(this);
          }
          load(url) {
            this.duration = null;
            (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL).then(Vimeo2 => {
              if (!this.container) return;
              const _this$props$config = this.props.config,
                playerOptions = _this$props$config.playerOptions,
                title = _this$props$config.title;
              this.player = new Vimeo2.Player(this.container, _objectSpread({
                url: cleanUrl(url),
                autoplay: this.props.playing,
                muted: this.props.muted,
                loop: this.props.loop,
                playsinline: this.props.playsinline,
                controls: this.props.controls
              }, playerOptions));
              this.player.ready().then(() => {
                const iframe = this.container.querySelector("iframe");
                iframe.style.width = "100%";
                iframe.style.height = "100%";
                if (title) {
                  iframe.title = title;
                }
              }).catch(this.props.onError);
              this.player.on("loaded", () => {
                this.props.onReady();
                this.refreshDuration();
              });
              this.player.on("play", () => {
                this.props.onPlay();
                this.refreshDuration();
              });
              this.player.on("pause", this.props.onPause);
              this.player.on("seeked", e => this.props.onSeek(e.seconds));
              this.player.on("ended", this.props.onEnded);
              this.player.on("error", this.props.onError);
              this.player.on("timeupdate", ({
                seconds
              }) => {
                this.currentTime = seconds;
              });
              this.player.on("progress", ({
                seconds
              }) => {
                this.secondsLoaded = seconds;
              });
              this.player.on("bufferstart", this.props.onBuffer);
              this.player.on("bufferend", this.props.onBufferEnd);
              this.player.on("playbackratechange", e => this.props.onPlaybackRateChange(e.playbackRate));
            }, this.props.onError);
          }
          refreshDuration() {
            this.player.getDuration().then(duration => {
              this.duration = duration;
            });
          }
          play() {
            const promise = this.callPlayer("play");
            if (promise) {
              promise.catch(this.props.onError);
            }
          }
          pause() {
            this.callPlayer("pause");
          }
          stop() {
            this.callPlayer("unload");
          }
          seekTo(seconds, keepPlaying = true) {
            this.callPlayer("setCurrentTime", seconds);
            if (!keepPlaying) {
              this.pause();
            }
          }
          setVolume(fraction) {
            this.callPlayer("setVolume", fraction);
          }
          setMuted(muted) {
            this.callPlayer("setMuted", muted);
          }
          setLoop(loop) {
            this.callPlayer("setLoop", loop);
          }
          setPlaybackRate(rate) {
            this.callPlayer("setPlaybackRate", rate);
          }
          getDuration() {
            return this.duration;
          }
          getCurrentTime() {
            return this.currentTime;
          }
          getSecondsLoaded() {
            return this.secondsLoaded;
          }
          render() {
            const display = this.props.display;
            const style = {
              width: "100%",
              height: "100%",
              overflow: "hidden",
              display
            };
            return /* @__PURE__ */import_react.default.createElement("div", {
              key: this.props.url,
              ref: this.ref,
              style
            });
          }
        }
        __publicField(Vimeo, "displayName", "Vimeo");
        __publicField(Vimeo, "canPlay", import_patterns.canPlay.vimeo);
        __publicField(Vimeo, "forceLoad", true);
        const Vimeo$1 = /*@__PURE__*/getDefaultExportFromCjs(Vimeo_1);
        const Vimeo$2 = /*#__PURE__*/_mergeNamespaces({
          __proto__: null,
          default: Vimeo$1
        }, [Vimeo_1]);
        exports("V", Vimeo$2);
      }
    };
  });
})();
//# sourceMappingURL=Vimeo-legacy-CaZRiZmY.js.map
