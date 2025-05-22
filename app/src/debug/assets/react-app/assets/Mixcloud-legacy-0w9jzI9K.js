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
<<<<<<<< HEAD:app/src/debug/assets/react-app/assets/Mixcloud-legacy-BT7PO_IG.js
  System.register(['./index-legacy-D2IAuBBo.js', './index-legacy-BNnFOp2_.js'], function (exports, module) {
========
  System.register(['./index-legacy-ppEgxGbl.js', './index-legacy-Cu0CslXm.js'], function (exports, module) {
>>>>>>>> main:app/src/debug/assets/react-app/assets/Mixcloud-legacy-0w9jzI9K.js
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
        var Mixcloud_exports = {};
        __export(Mixcloud_exports, {
          default: () => Mixcloud
        });
        var Mixcloud_1 = __toCommonJS(Mixcloud_exports);
        var import_react = __toESM(reactExports);
        var import_utils = utils;
        var import_patterns = patterns;
        const SDK_URL = "https://widget.mixcloud.com/media/js/widgetApi.js";
        const SDK_GLOBAL = "Mixcloud";
        class Mixcloud extends import_react.Component {
          constructor() {
            super(...arguments);
            __publicField(this, "callPlayer", import_utils.callPlayer);
            __publicField(this, "duration", null);
            __publicField(this, "currentTime", null);
            __publicField(this, "secondsLoaded", null);
            __publicField(this, "mute", () => {});
            __publicField(this, "unmute", () => {});
            __publicField(this, "ref", iframe => {
              this.iframe = iframe;
            });
          }
          componentDidMount() {
            this.props.onMount && this.props.onMount(this);
          }
          load(url) {
            (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL).then(Mixcloud2 => {
              this.player = Mixcloud2.PlayerWidget(this.iframe);
              this.player.ready.then(() => {
                this.player.events.play.on(this.props.onPlay);
                this.player.events.pause.on(this.props.onPause);
                this.player.events.ended.on(this.props.onEnded);
                this.player.events.error.on(this.props.error);
                this.player.events.progress.on((seconds, duration) => {
                  this.currentTime = seconds;
                  this.duration = duration;
                });
                this.props.onReady();
              });
            }, this.props.onError);
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
          setVolume(fraction) {}
          getDuration() {
            return this.duration;
          }
          getCurrentTime() {
            return this.currentTime;
          }
          getSecondsLoaded() {
            return null;
          }
          render() {
            const _this$props = this.props,
              url = _this$props.url,
              config = _this$props.config;
            const id = url.match(import_patterns.MATCH_URL_MIXCLOUD)[1];
            const style = {
              width: "100%",
              height: "100%"
            };
            const query = (0, import_utils.queryString)(_objectSpread(_objectSpread({}, config.options), {}, {
              feed: `/${id}/`
            }));
            return /* @__PURE__ */import_react.default.createElement("iframe", {
              key: id,
              ref: this.ref,
              style,
              src: `https://www.mixcloud.com/widget/iframe/?${query}`,
              frameBorder: "0",
              allow: "autoplay"
            });
          }
        }
        __publicField(Mixcloud, "displayName", "Mixcloud");
        __publicField(Mixcloud, "canPlay", import_patterns.canPlay.mixcloud);
        __publicField(Mixcloud, "loopOnEnded", true);
        const Mixcloud$1 = /*@__PURE__*/getDefaultExportFromCjs(Mixcloud_1);
        const Mixcloud$2 = /*#__PURE__*/_mergeNamespaces({
          __proto__: null,
          default: Mixcloud$1
        }, [Mixcloud_1]);
        exports("M", Mixcloud$2);
      }
    };
  });
})();
<<<<<<<< HEAD:app/src/debug/assets/react-app/assets/Mixcloud-legacy-BT7PO_IG.js
//# sourceMappingURL=Mixcloud-legacy-BT7PO_IG.js.map
========
//# sourceMappingURL=Mixcloud-legacy-0w9jzI9K.js.map
>>>>>>>> main:app/src/debug/assets/react-app/assets/Mixcloud-legacy-0w9jzI9K.js
