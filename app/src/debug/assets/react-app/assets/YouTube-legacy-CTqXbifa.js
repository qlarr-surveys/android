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
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  System.register(['./index-legacy-BPhVO2yG.js', './index-legacy-BGKVw6gP.js'], function (exports, module) {
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
        var YouTube_exports = {};
        __export(YouTube_exports, {
          default: () => YouTube
        });
        var YouTube_1 = __toCommonJS(YouTube_exports);
        var import_react = __toESM(reactExports);
        var import_utils = utils;
        var import_patterns = patterns;
        const SDK_URL = "https://www.youtube.com/iframe_api";
        const SDK_GLOBAL = "YT";
        const SDK_GLOBAL_READY = "onYouTubeIframeAPIReady";
        const MATCH_PLAYLIST = /[?&](?:list|channel)=([a-zA-Z0-9_-]+)/;
        const MATCH_USER_UPLOADS = /user\/([a-zA-Z0-9_-]+)\/?/;
        const MATCH_NOCOOKIE = /youtube-nocookie\.com/;
        const NOCOOKIE_HOST = "https://www.youtube-nocookie.com";
        class YouTube extends import_react.Component {
          constructor() {
            super(...arguments);
            __publicField(this, "callPlayer", import_utils.callPlayer);
            __publicField(this, "parsePlaylist", url => {
              if (url instanceof Array) {
                return {
                  listType: "playlist",
                  playlist: url.map(this.getID).join(",")
                };
              }
              if (MATCH_PLAYLIST.test(url)) {
                const _url$match = url.match(MATCH_PLAYLIST),
                  _url$match2 = _slicedToArray(_url$match, 2),
                  playlistId = _url$match2[1];
                return {
                  listType: "playlist",
                  list: playlistId.replace(/^UC/, "UU")
                };
              }
              if (MATCH_USER_UPLOADS.test(url)) {
                const _url$match3 = url.match(MATCH_USER_UPLOADS),
                  _url$match4 = _slicedToArray(_url$match3, 2),
                  username = _url$match4[1];
                return {
                  listType: "user_uploads",
                  list: username
                };
              }
              return {};
            });
            __publicField(this, "onStateChange", event => {
              const data = event.data;
              const _this$props = this.props,
                onPlay = _this$props.onPlay,
                onPause = _this$props.onPause,
                onBuffer = _this$props.onBuffer,
                onBufferEnd = _this$props.onBufferEnd,
                onEnded = _this$props.onEnded,
                onReady = _this$props.onReady,
                loop = _this$props.loop,
                _this$props$config = _this$props.config,
                playerVars = _this$props$config.playerVars,
                onUnstarted = _this$props$config.onUnstarted;
              const _window$SDK_GLOBAL$Pl = window[SDK_GLOBAL].PlayerState,
                UNSTARTED = _window$SDK_GLOBAL$Pl.UNSTARTED,
                PLAYING = _window$SDK_GLOBAL$Pl.PLAYING,
                PAUSED = _window$SDK_GLOBAL$Pl.PAUSED,
                BUFFERING = _window$SDK_GLOBAL$Pl.BUFFERING,
                ENDED = _window$SDK_GLOBAL$Pl.ENDED,
                CUED = _window$SDK_GLOBAL$Pl.CUED;
              if (data === UNSTARTED) onUnstarted();
              if (data === PLAYING) {
                onPlay();
                onBufferEnd();
              }
              if (data === PAUSED) onPause();
              if (data === BUFFERING) onBuffer();
              if (data === ENDED) {
                const isPlaylist = !!this.callPlayer("getPlaylist");
                if (loop && !isPlaylist) {
                  if (playerVars.start) {
                    this.seekTo(playerVars.start);
                  } else {
                    this.play();
                  }
                }
                onEnded();
              }
              if (data === CUED) onReady();
            });
            __publicField(this, "mute", () => {
              this.callPlayer("mute");
            });
            __publicField(this, "unmute", () => {
              this.callPlayer("unMute");
            });
            __publicField(this, "ref", container => {
              this.container = container;
            });
          }
          componentDidMount() {
            this.props.onMount && this.props.onMount(this);
          }
          getID(url) {
            if (!url || url instanceof Array || MATCH_PLAYLIST.test(url)) {
              return null;
            }
            return url.match(import_patterns.MATCH_URL_YOUTUBE)[1];
          }
          load(url, isReady) {
            const _this$props2 = this.props,
              playing = _this$props2.playing,
              muted = _this$props2.muted,
              playsinline = _this$props2.playsinline,
              controls = _this$props2.controls,
              loop = _this$props2.loop,
              config = _this$props2.config,
              _onError = _this$props2.onError;
            const playerVars = config.playerVars,
              embedOptions = config.embedOptions;
            const id = this.getID(url);
            if (isReady) {
              if (MATCH_PLAYLIST.test(url) || MATCH_USER_UPLOADS.test(url) || url instanceof Array) {
                this.player.loadPlaylist(this.parsePlaylist(url));
                return;
              }
              this.player.cueVideoById({
                videoId: id,
                startSeconds: (0, import_utils.parseStartTime)(url) || playerVars.start,
                endSeconds: (0, import_utils.parseEndTime)(url) || playerVars.end
              });
              return;
            }
            (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY, YT => YT.loaded).then(YT => {
              if (!this.container) return;
              this.player = new YT.Player(this.container, _objectSpread({
                width: "100%",
                height: "100%",
                videoId: id,
                playerVars: _objectSpread(_objectSpread({
                  autoplay: playing ? 1 : 0,
                  mute: muted ? 1 : 0,
                  controls: controls ? 1 : 0,
                  start: (0, import_utils.parseStartTime)(url),
                  end: (0, import_utils.parseEndTime)(url),
                  origin: window.location.origin,
                  playsinline: playsinline ? 1 : 0
                }, this.parsePlaylist(url)), playerVars),
                events: {
                  onReady: () => {
                    if (loop) {
                      this.player.setLoop(true);
                    }
                    this.props.onReady();
                  },
                  onPlaybackRateChange: event => this.props.onPlaybackRateChange(event.data),
                  onPlaybackQualityChange: event => this.props.onPlaybackQualityChange(event),
                  onStateChange: this.onStateChange,
                  onError: event => _onError(event.data)
                },
                host: MATCH_NOCOOKIE.test(url) ? NOCOOKIE_HOST : void 0
              }, embedOptions));
            }, _onError);
            if (embedOptions.events) {
              console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer\u2019s callback props instead, eg onReady, onPlay, onPause");
            }
          }
          play() {
            this.callPlayer("playVideo");
          }
          pause() {
            this.callPlayer("pauseVideo");
          }
          stop() {
            if (!document.body.contains(this.callPlayer("getIframe"))) return;
            this.callPlayer("stopVideo");
          }
          seekTo(amount, keepPlaying = false) {
            this.callPlayer("seekTo", amount);
            if (!keepPlaying && !this.props.playing) {
              this.pause();
            }
          }
          setVolume(fraction) {
            this.callPlayer("setVolume", fraction * 100);
          }
          setPlaybackRate(rate) {
            this.callPlayer("setPlaybackRate", rate);
          }
          setLoop(loop) {
            this.callPlayer("setLoop", loop);
          }
          getDuration() {
            return this.callPlayer("getDuration");
          }
          getCurrentTime() {
            return this.callPlayer("getCurrentTime");
          }
          getSecondsLoaded() {
            return this.callPlayer("getVideoLoadedFraction") * this.getDuration();
          }
          render() {
            const display = this.props.display;
            const style = {
              width: "100%",
              height: "100%",
              display
            };
            return /* @__PURE__ */import_react.default.createElement("div", {
              style
            }, /* @__PURE__ */import_react.default.createElement("div", {
              ref: this.ref
            }));
          }
        }
        __publicField(YouTube, "displayName", "YouTube");
        __publicField(YouTube, "canPlay", import_patterns.canPlay.youtube);
        const YouTube$1 = /*@__PURE__*/getDefaultExportFromCjs(YouTube_1);
        const YouTube$2 = /*#__PURE__*/_mergeNamespaces({
          __proto__: null,
          default: YouTube$1
        }, [YouTube_1]);
        exports("Y", YouTube$2);
      }
    };
  });
})();
//# sourceMappingURL=YouTube-legacy-CTqXbifa.js.map
