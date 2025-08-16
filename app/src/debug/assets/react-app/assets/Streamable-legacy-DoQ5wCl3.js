;
(function () {
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  System.register(['./index-legacy-BE0djssm.js', './index-legacy-BOx5EyM9.js'], function (exports, module) {
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
        var Streamable_exports = {};
        __export(Streamable_exports, {
          default: () => Streamable
        });
        var Streamable_1 = __toCommonJS(Streamable_exports);
        var import_react = __toESM(reactExports);
        var import_utils = utils;
        var import_patterns = patterns;
        const SDK_URL = "https://cdn.embed.ly/player-0.1.0.min.js";
        const SDK_GLOBAL = "playerjs";
        class Streamable extends import_react.Component {
          constructor() {
            super(...arguments);
            __publicField(this, "callPlayer", import_utils.callPlayer);
            __publicField(this, "duration", null);
            __publicField(this, "currentTime", null);
            __publicField(this, "secondsLoaded", null);
            __publicField(this, "mute", () => {
              this.callPlayer("mute");
            });
            __publicField(this, "unmute", () => {
              this.callPlayer("unmute");
            });
            __publicField(this, "ref", iframe => {
              this.iframe = iframe;
            });
          }
          componentDidMount() {
            this.props.onMount && this.props.onMount(this);
          }
          load(url) {
            (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL).then(playerjs => {
              if (!this.iframe) return;
              this.player = new playerjs.Player(this.iframe);
              this.player.setLoop(this.props.loop);
              this.player.on("ready", this.props.onReady);
              this.player.on("play", this.props.onPlay);
              this.player.on("pause", this.props.onPause);
              this.player.on("seeked", this.props.onSeek);
              this.player.on("ended", this.props.onEnded);
              this.player.on("error", this.props.onError);
              this.player.on("timeupdate", ({
                duration,
                seconds
              }) => {
                this.duration = duration;
                this.currentTime = seconds;
              });
              this.player.on("buffered", ({
                percent
              }) => {
                if (this.duration) {
                  this.secondsLoaded = this.duration * percent;
                }
              });
              if (this.props.muted) {
                this.player.mute();
              }
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
            this.callPlayer("setCurrentTime", seconds);
            if (!keepPlaying) {
              this.pause();
            }
          }
          setVolume(fraction) {
            this.callPlayer("setVolume", fraction * 100);
          }
          setLoop(loop) {
            this.callPlayer("setLoop", loop);
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
            const id = this.props.url.match(import_patterns.MATCH_URL_STREAMABLE)[1];
            const style = {
              width: "100%",
              height: "100%"
            };
            return /* @__PURE__ */import_react.default.createElement("iframe", {
              ref: this.ref,
              src: `https://streamable.com/o/${id}`,
              frameBorder: "0",
              scrolling: "no",
              style,
              allow: "encrypted-media; autoplay; fullscreen;"
            });
          }
        }
        __publicField(Streamable, "displayName", "Streamable");
        __publicField(Streamable, "canPlay", import_patterns.canPlay.streamable);
        const Streamable$1 = /*@__PURE__*/getDefaultExportFromCjs(Streamable_1);
        const Streamable$2 = /*#__PURE__*/_mergeNamespaces({
          __proto__: null,
          default: Streamable$1
        }, [Streamable_1]);
        exports("S", Streamable$2);
      }
    };
  });
})();
//# sourceMappingURL=Streamable-legacy-DoQ5wCl3.js.map
