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
  System.register(['./index-legacy-NtFnlkty.js', './index-legacy-CdYNQy24.js'], function (exports, module) {
    'use strict';

    var getDefaultExportFromCjs, reactExports, utils, patterns;
    return {
      setters: [module => {
        getDefaultExportFromCjs = module.e;
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
        var Facebook_exports = {};
        __export(Facebook_exports, {
          default: () => Facebook
        });
        var Facebook_1 = __toCommonJS(Facebook_exports);
        var import_react = __toESM(reactExports);
        var import_utils = utils;
        var import_patterns = patterns;
        const SDK_URL = "https://connect.facebook.net/en_US/sdk.js";
        const SDK_GLOBAL = "FB";
        const SDK_GLOBAL_READY = "fbAsyncInit";
        const PLAYER_ID_PREFIX = "facebook-player-";
        class Facebook extends import_react.Component {
          constructor() {
            super(...arguments);
            __publicField(this, "callPlayer", import_utils.callPlayer);
            __publicField(this, "playerID", this.props.config.playerId || `${PLAYER_ID_PREFIX}${(0, import_utils.randomString)()}`);
            __publicField(this, "mute", () => {
              this.callPlayer("mute");
            });
            __publicField(this, "unmute", () => {
              this.callPlayer("unmute");
            });
          }
          componentDidMount() {
            this.props.onMount && this.props.onMount(this);
          }
          load(url, isReady) {
            if (isReady) {
              (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then(FB => FB.XFBML.parse());
              return;
            }
            (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then(FB => {
              FB.init({
                appId: this.props.config.appId,
                xfbml: true,
                version: this.props.config.version
              });
              FB.Event.subscribe("xfbml.render", msg => {
                this.props.onLoaded();
              });
              FB.Event.subscribe("xfbml.ready", msg => {
                if (msg.type === "video" && msg.id === this.playerID) {
                  this.player = msg.instance;
                  this.player.subscribe("startedPlaying", this.props.onPlay);
                  this.player.subscribe("paused", this.props.onPause);
                  this.player.subscribe("finishedPlaying", this.props.onEnded);
                  this.player.subscribe("startedBuffering", this.props.onBuffer);
                  this.player.subscribe("finishedBuffering", this.props.onBufferEnd);
                  this.player.subscribe("error", this.props.onError);
                  if (this.props.muted) {
                    this.callPlayer("mute");
                  } else {
                    this.callPlayer("unmute");
                  }
                  this.props.onReady();
                  document.getElementById(this.playerID).querySelector("iframe").style.visibility = "visible";
                }
              });
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
            this.callPlayer("seek", seconds);
            if (!keepPlaying) {
              this.pause();
            }
          }
          setVolume(fraction) {
            this.callPlayer("setVolume", fraction);
          }
          getDuration() {
            return this.callPlayer("getDuration");
          }
          getCurrentTime() {
            return this.callPlayer("getCurrentPosition");
          }
          getSecondsLoaded() {
            return null;
          }
          render() {
            const attributes = this.props.config.attributes;
            const style = {
              width: "100%",
              height: "100%"
            };
            return /* @__PURE__ */import_react.default.createElement("div", _objectSpread({
              style,
              id: this.playerID,
              className: "fb-video",
              "data-href": this.props.url,
              "data-autoplay": this.props.playing ? "true" : "false",
              "data-allowfullscreen": "true",
              "data-controls": this.props.controls ? "true" : "false"
            }, attributes));
          }
        }
        __publicField(Facebook, "displayName", "Facebook");
        __publicField(Facebook, "canPlay", import_patterns.canPlay.facebook);
        __publicField(Facebook, "loopOnEnded", true);
        const Facebook$1 = /*@__PURE__*/getDefaultExportFromCjs(Facebook_1);
        const Facebook$2 = /*#__PURE__*/_mergeNamespaces({
          __proto__: null,
          default: Facebook$1
        }, [Facebook_1]);
        exports("F", Facebook$2);
      }
    };
  });
})();
//# sourceMappingURL=Facebook-legacy-GEmX1Ju0.js.map
