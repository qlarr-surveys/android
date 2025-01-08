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
  System.register(['./index-legacy-VHGc_nGn.js', './index-legacy-Dtc24V4J.js'], function (exports, module) {
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
        var SoundCloud_exports = {};
        __export(SoundCloud_exports, {
          default: () => SoundCloud
        });
        var SoundCloud_1 = __toCommonJS(SoundCloud_exports);
        var import_react = __toESM(reactExports);
        var import_utils = utils;
        var import_patterns = patterns;
        const SDK_URL = "https://w.soundcloud.com/player/api.js";
        const SDK_GLOBAL = "SC";
        class SoundCloud extends import_react.Component {
          constructor() {
            super(...arguments);
            __publicField(this, "callPlayer", import_utils.callPlayer);
            __publicField(this, "duration", null);
            __publicField(this, "currentTime", null);
            __publicField(this, "fractionLoaded", null);
            __publicField(this, "mute", () => {
              this.setVolume(0);
            });
            __publicField(this, "unmute", () => {
              if (this.props.volume !== null) {
                this.setVolume(this.props.volume);
              }
            });
            __publicField(this, "ref", iframe => {
              this.iframe = iframe;
            });
          }
          componentDidMount() {
            this.props.onMount && this.props.onMount(this);
          }
          load(url, isReady) {
            (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL).then(SC => {
              if (!this.iframe) return;
              const _SC$Widget$Events = SC.Widget.Events,
                PLAY = _SC$Widget$Events.PLAY,
                PLAY_PROGRESS = _SC$Widget$Events.PLAY_PROGRESS,
                PAUSE = _SC$Widget$Events.PAUSE,
                FINISH = _SC$Widget$Events.FINISH,
                ERROR = _SC$Widget$Events.ERROR;
              if (!isReady) {
                this.player = SC.Widget(this.iframe);
                this.player.bind(PLAY, this.props.onPlay);
                this.player.bind(PAUSE, () => {
                  const remaining = this.duration - this.currentTime;
                  if (remaining < 0.05) {
                    return;
                  }
                  this.props.onPause();
                });
                this.player.bind(PLAY_PROGRESS, e => {
                  this.currentTime = e.currentPosition / 1e3;
                  this.fractionLoaded = e.loadedProgress;
                });
                this.player.bind(FINISH, () => this.props.onEnded());
                this.player.bind(ERROR, e => this.props.onError(e));
              }
              this.player.load(url, _objectSpread(_objectSpread({}, this.props.config.options), {}, {
                callback: () => {
                  this.player.getDuration(duration => {
                    this.duration = duration / 1e3;
                    this.props.onReady();
                  });
                }
              }));
            });
          }
          play() {
            this.callPlayer("play");
          }
          pause() {
            this.callPlayer("pause");
          }
          stop() {}
          seekTo(seconds, keepPlaying = true) {
            this.callPlayer("seekTo", seconds * 1e3);
            if (!keepPlaying) {
              this.pause();
            }
          }
          setVolume(fraction) {
            this.callPlayer("setVolume", fraction * 100);
          }
          getDuration() {
            return this.duration;
          }
          getCurrentTime() {
            return this.currentTime;
          }
          getSecondsLoaded() {
            return this.fractionLoaded * this.duration;
          }
          render() {
            const display = this.props.display;
            const style = {
              width: "100%",
              height: "100%",
              display
            };
            return /* @__PURE__ */import_react.default.createElement("iframe", {
              ref: this.ref,
              src: `https://w.soundcloud.com/player/?url=${encodeURIComponent(this.props.url)}`,
              style,
              frameBorder: 0,
              allow: "autoplay"
            });
          }
        }
        __publicField(SoundCloud, "displayName", "SoundCloud");
        __publicField(SoundCloud, "canPlay", import_patterns.canPlay.soundcloud);
        __publicField(SoundCloud, "loopOnEnded", true);
        const SoundCloud$1 = /*@__PURE__*/getDefaultExportFromCjs(SoundCloud_1);
        const SoundCloud$2 = /*#__PURE__*/_mergeNamespaces({
          __proto__: null,
          default: SoundCloud$1
        }, [SoundCloud_1]);
        exports("S", SoundCloud$2);
      }
    };
  });
})();
//# sourceMappingURL=SoundCloud-legacy-CkTPWUmD.js.map
