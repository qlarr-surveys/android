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
  System.register(['./index-legacy-ppEgxGbl.js', './use-service-legacy-BbL3A7cT.js'], function (exports, module) {
    'use strict';

    var reactExports, __vitePreload, getAugmentedNamespace, commonjsGlobal, getDefaultExportFromCjs, propTypesExports;
    return {
      setters: [module => {
        reactExports = module.r;
        __vitePreload = module.y;
        getAugmentedNamespace = module.aa;
        commonjsGlobal = module.p;
        getDefaultExportFromCjs = module.w;
      }, module => {
        propTypesExports = module.F;
      }],
      execute: function execute() {
        var loadScript = function load(src, opts, cb) {
          var head = document.head || document.getElementsByTagName('head')[0];
          var script = document.createElement('script');
          if (typeof opts === 'function') {
            cb = opts;
            opts = {};
          }
          opts = opts || {};
          cb = cb || function () {};
          script.type = opts.type || 'text/javascript';
          script.charset = opts.charset || 'utf8';
          script.async = 'async' in opts ? !!opts.async : true;
          script.src = src;
          if (opts.attrs) {
            setAttributes(script, opts.attrs);
          }
          if (opts.text) {
            script.text = '' + opts.text;
          }
          var onend = 'onload' in script ? stdOnEnd : ieOnEnd;
          onend(script, cb);

          // some good legacy browsers (firefox) fail the 'in' detection above
          // so as a fallback we always set onload
          // old IE will ignore this and new IE will set onload
          if (!script.onload) {
            stdOnEnd(script, cb);
          }
          head.appendChild(script);
        };
        function setAttributes(script, attrs) {
          for (var attr in attrs) {
            script.setAttribute(attr, attrs[attr]);
          }
        }
        function stdOnEnd(script, cb) {
          script.onload = function () {
            this.onerror = this.onload = null;
            cb(null, script);
          };
          script.onerror = function () {
            // this.onload = null here is necessary
            // because even IE9 works not like others
            this.onerror = this.onload = null;
            cb(new Error('Failed to load ' + this.src), script);
          };
        }
        function ieOnEnd(script, cb) {
          script.onreadystatechange = function () {
            if (this.readyState != 'complete' && this.readyState != 'loaded') return;
            this.onreadystatechange = null;
            cb(null, script); // there is no way to catch loading errors in IE8
          };
        }
        var isMergeableObject = function isMergeableObject(value) {
          return isNonNullObject(value) && !isSpecial(value);
        };
        function isNonNullObject(value) {
          return !!value && typeof value === 'object';
        }
        function isSpecial(value) {
          var stringValue = Object.prototype.toString.call(value);
          return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
        }

        // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
        var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;
        function isReactElement(value) {
          return value.$$typeof === REACT_ELEMENT_TYPE;
        }
        function emptyTarget(val) {
          return Array.isArray(val) ? [] : {};
        }
        function cloneUnlessOtherwiseSpecified(value, options) {
          return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
        }
        function defaultArrayMerge(target, source, options) {
          return target.concat(source).map(function (element) {
            return cloneUnlessOtherwiseSpecified(element, options);
          });
        }
        function getMergeFunction(key, options) {
          if (!options.customMerge) {
            return deepmerge;
          }
          var customMerge = options.customMerge(key);
          return typeof customMerge === 'function' ? customMerge : deepmerge;
        }
        function getEnumerableOwnPropertySymbols(target) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
            return Object.propertyIsEnumerable.call(target, symbol);
          }) : [];
        }
        function getKeys(target) {
          return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
        }
        function propertyIsOnObject(object, property) {
          try {
            return property in object;
          } catch (_) {
            return false;
          }
        }

        // Protects from prototype poisoning and unexpected merging up the prototype chain.
        function propertyIsUnsafe(target, key) {
          return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
          && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
          && Object.propertyIsEnumerable.call(target, key)); // and also unsafe if they're nonenumerable.
        }
        function mergeObject(target, source, options) {
          var destination = {};
          if (options.isMergeableObject(target)) {
            getKeys(target).forEach(function (key) {
              destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
            });
          }
          getKeys(source).forEach(function (key) {
            if (propertyIsUnsafe(target, key)) {
              return;
            }
            if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
              destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
            } else {
              destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
            }
          });
          return destination;
        }
        function deepmerge(target, source, options) {
          options = options || {};
          options.arrayMerge = options.arrayMerge || defaultArrayMerge;
          options.isMergeableObject = options.isMergeableObject || isMergeableObject;
          // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
          // implementations can use it. The caller may not replace it.
          options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
          var sourceIsArray = Array.isArray(source);
          var targetIsArray = Array.isArray(target);
          var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
          if (!sourceAndTargetTypesMatch) {
            return cloneUnlessOtherwiseSpecified(source, options);
          } else if (sourceIsArray) {
            return options.arrayMerge(target, source, options);
          } else {
            return mergeObject(target, source, options);
          }
        }
        deepmerge.all = function deepmergeAll(array, options) {
          if (!Array.isArray(array)) {
            throw new Error('first argument should be an array');
          }
          return array.reduce(function (prev, next) {
            return deepmerge(prev, next, options);
          }, {});
        };
        var deepmerge_1 = deepmerge;
        var cjs = deepmerge_1;
        var __create$4 = Object.create;
        var __defProp$6 = Object.defineProperty;
        var __getOwnPropDesc$6 = Object.getOwnPropertyDescriptor;
        var __getOwnPropNames$6 = Object.getOwnPropertyNames;
        var __getProtoOf$4 = Object.getPrototypeOf;
        var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
        var __export$6 = (target, all) => {
          for (var name in all) __defProp$6(target, name, {
            get: all[name],
            enumerable: true
          });
        };
        var __copyProps$6 = (to, from, except, desc) => {
          if (from && typeof from === "object" || typeof from === "function") {
            var _iterator = _createForOfIteratorHelper(__getOwnPropNames$6(from)),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                let key = _step.value;
                if (!__hasOwnProp$6.call(to, key) && key !== except) __defProp$6(to, key, {
                  get: () => from[key],
                  enumerable: !(desc = __getOwnPropDesc$6(from, key)) || desc.enumerable
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
        var __toESM$4 = (mod, isNodeMode, target) => (target = mod != null ? __create$4(__getProtoOf$4(mod)) : {}, __copyProps$6(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        !mod || !mod.__esModule ? __defProp$6(target, "default", {
          value: mod,
          enumerable: true
        }) : target, mod));
        var __toCommonJS$6 = mod => __copyProps$6(__defProp$6({}, "__esModule", {
          value: true
        }), mod);
        var utils_exports = {};
        __export$6(utils_exports, {
          callPlayer: () => _callPlayer,
          getConfig: () => _getConfig,
          getSDK: () => _getSDK,
          isBlobUrl: () => _isBlobUrl,
          isMediaStream: () => _isMediaStream,
          lazy: () => _lazy,
          omit: () => _omit,
          parseEndTime: () => _parseEndTime,
          parseStartTime: () => _parseStartTime,
          queryString: () => _queryString,
          randomString: () => _randomString,
          supportsWebKitPresentationMode: () => _supportsWebKitPresentationMode
        });
        var utils = exports("u", __toCommonJS$6(utils_exports));
        var import_react$2 = __toESM$4(reactExports);
        var import_load_script = __toESM$4(loadScript);
        var import_deepmerge$1 = __toESM$4(cjs);
        const _lazy = componentImportFn => import_react$2.default.lazy(/*#__PURE__*/_asyncToGenerator(function* () {
          const obj = yield componentImportFn();
          return typeof obj.default === "function" ? obj : obj.default;
        }));
        const MATCH_START_QUERY = /[?&#](?:start|t)=([0-9hms]+)/;
        const MATCH_END_QUERY = /[?&#]end=([0-9hms]+)/;
        const MATCH_START_STAMP = /(\d+)(h|m|s)/g;
        const MATCH_NUMERIC = /^\d+$/;
        function parseTimeParam(url, pattern) {
          if (url instanceof Array) {
            return void 0;
          }
          const match = url.match(pattern);
          if (match) {
            const stamp = match[1];
            if (stamp.match(MATCH_START_STAMP)) {
              return parseTimeString(stamp);
            }
            if (MATCH_NUMERIC.test(stamp)) {
              return parseInt(stamp);
            }
          }
          return void 0;
        }
        function parseTimeString(stamp) {
          let seconds = 0;
          let array = MATCH_START_STAMP.exec(stamp);
          while (array !== null) {
            const _array = array,
              _array2 = _slicedToArray(_array, 3),
              count = _array2[1],
              period = _array2[2];
            if (period === "h") seconds += parseInt(count, 10) * 60 * 60;
            if (period === "m") seconds += parseInt(count, 10) * 60;
            if (period === "s") seconds += parseInt(count, 10);
            array = MATCH_START_STAMP.exec(stamp);
          }
          return seconds;
        }
        function _parseStartTime(url) {
          return parseTimeParam(url, MATCH_START_QUERY);
        }
        function _parseEndTime(url) {
          return parseTimeParam(url, MATCH_END_QUERY);
        }
        function _randomString() {
          return Math.random().toString(36).substr(2, 5);
        }
        function _queryString(object) {
          return Object.keys(object).map(key => `${key}=${object[key]}`).join("&");
        }
        function getGlobal(key) {
          if (window[key]) {
            return window[key];
          }
          if (window.exports && window.exports[key]) {
            return window.exports[key];
          }
          if (window.module && window.module.exports && window.module.exports[key]) {
            return window.module.exports[key];
          }
          return null;
        }
        const requests = {};
        const _getSDK = enableStubOn(function getSDK2(url, sdkGlobal, sdkReady = null, isLoaded = () => true, fetchScript = import_load_script.default) {
          const existingGlobal = getGlobal(sdkGlobal);
          if (existingGlobal && isLoaded(existingGlobal)) {
            return Promise.resolve(existingGlobal);
          }
          return new Promise((resolve, reject) => {
            if (requests[url]) {
              requests[url].push({
                resolve,
                reject
              });
              return;
            }
            requests[url] = [{
              resolve,
              reject
            }];
            const onLoaded = sdk => {
              requests[url].forEach(request => request.resolve(sdk));
            };
            if (sdkReady) {
              const previousOnReady = window[sdkReady];
              window[sdkReady] = function () {
                if (previousOnReady) previousOnReady();
                onLoaded(getGlobal(sdkGlobal));
              };
            }
            fetchScript(url, err => {
              if (err) {
                requests[url].forEach(request => request.reject(err));
                requests[url] = null;
              } else if (!sdkReady) {
                onLoaded(getGlobal(sdkGlobal));
              }
            });
          });
        });
        function _getConfig(props, defaultProps) {
          return (0, import_deepmerge$1.default)(defaultProps.config, props.config);
        }
        function _omit(object, ...arrays) {
          const omitKeys = [].concat(...arrays);
          const output = {};
          const keys = Object.keys(object);
          for (var _i2 = 0, _keys = keys; _i2 < _keys.length; _i2++) {
            const key = _keys[_i2];
            if (omitKeys.indexOf(key) === -1) {
              output[key] = object[key];
            }
          }
          return output;
        }
        function _callPlayer(method, ...args) {
          if (!this.player || !this.player[method]) {
            let message = `ReactPlayer: ${this.constructor.displayName} player could not call %c${method}%c \u2013 `;
            if (!this.player) {
              message += "The player was not available";
            } else if (!this.player[method]) {
              message += "The method was not available";
            }
            console.warn(message, "font-weight: bold", "");
            return null;
          }
          return this.player[method](...args);
        }
        function _isMediaStream(url) {
          return typeof window !== "undefined" && typeof window.MediaStream !== "undefined" && url instanceof window.MediaStream;
        }
        function _isBlobUrl(url) {
          return /^blob:/.test(url);
        }
        function _supportsWebKitPresentationMode(video = document.createElement("video")) {
          const notMobile = /iPhone|iPod/.test(navigator.userAgent) === false;
          return video.webkitSupportsPresentationMode && typeof video.webkitSetPresentationMode === "function" && notMobile;
        }
        function enableStubOn(fn) {
          return fn;
        }
        var __defProp$5 = Object.defineProperty;
        var __getOwnPropDesc$5 = Object.getOwnPropertyDescriptor;
        var __getOwnPropNames$5 = Object.getOwnPropertyNames;
        var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
        var __export$5 = (target, all) => {
          for (var name in all) __defProp$5(target, name, {
            get: all[name],
            enumerable: true
          });
        };
        var __copyProps$5 = (to, from, except, desc) => {
          if (from && typeof from === "object" || typeof from === "function") {
            var _iterator2 = _createForOfIteratorHelper(__getOwnPropNames$5(from)),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                let key = _step2.value;
                if (!__hasOwnProp$5.call(to, key) && key !== except) __defProp$5(to, key, {
                  get: () => from[key],
                  enumerable: !(desc = __getOwnPropDesc$5(from, key)) || desc.enumerable
                });
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
          return to;
        };
        var __toCommonJS$5 = mod => __copyProps$5(__defProp$5({}, "__esModule", {
          value: true
        }), mod);
        var patterns_exports = {};
        __export$5(patterns_exports, {
          AUDIO_EXTENSIONS: () => _AUDIO_EXTENSIONS,
          DASH_EXTENSIONS: () => _DASH_EXTENSIONS,
          FLV_EXTENSIONS: () => _FLV_EXTENSIONS,
          HLS_EXTENSIONS: () => _HLS_EXTENSIONS,
          MATCH_URL_DAILYMOTION: () => _MATCH_URL_DAILYMOTION,
          MATCH_URL_FACEBOOK: () => _MATCH_URL_FACEBOOK,
          MATCH_URL_FACEBOOK_WATCH: () => _MATCH_URL_FACEBOOK_WATCH,
          MATCH_URL_KALTURA: () => _MATCH_URL_KALTURA,
          MATCH_URL_MIXCLOUD: () => _MATCH_URL_MIXCLOUD,
          MATCH_URL_MUX: () => _MATCH_URL_MUX,
          MATCH_URL_SOUNDCLOUD: () => _MATCH_URL_SOUNDCLOUD,
          MATCH_URL_STREAMABLE: () => _MATCH_URL_STREAMABLE,
          MATCH_URL_TWITCH_CHANNEL: () => _MATCH_URL_TWITCH_CHANNEL,
          MATCH_URL_TWITCH_VIDEO: () => _MATCH_URL_TWITCH_VIDEO,
          MATCH_URL_VIDYARD: () => _MATCH_URL_VIDYARD,
          MATCH_URL_VIMEO: () => _MATCH_URL_VIMEO,
          MATCH_URL_WISTIA: () => _MATCH_URL_WISTIA,
          MATCH_URL_YOUTUBE: () => _MATCH_URL_YOUTUBE,
          VIDEO_EXTENSIONS: () => _VIDEO_EXTENSIONS,
          canPlay: () => _canPlay
        });
        var patterns = exports("p", __toCommonJS$5(patterns_exports));
        var import_utils$3 = utils;
        const _MATCH_URL_YOUTUBE = /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
        const _MATCH_URL_SOUNDCLOUD = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/;
        const _MATCH_URL_VIMEO = /vimeo\.com\/(?!progressive_redirect).+/;
        const _MATCH_URL_MUX = /stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/;
        const _MATCH_URL_FACEBOOK = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;
        const _MATCH_URL_FACEBOOK_WATCH = /^https?:\/\/fb\.watch\/.+$/;
        const _MATCH_URL_STREAMABLE = /streamable\.com\/([a-z0-9]+)$/;
        const _MATCH_URL_WISTIA = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/;
        const _MATCH_URL_TWITCH_VIDEO = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
        const _MATCH_URL_TWITCH_CHANNEL = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;
        const _MATCH_URL_DAILYMOTION = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/;
        const _MATCH_URL_MIXCLOUD = /mixcloud\.com\/([^/]+\/[^/]+)/;
        const _MATCH_URL_VIDYARD = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/;
        const _MATCH_URL_KALTURA = /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/;
        const _AUDIO_EXTENSIONS = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
        const _VIDEO_EXTENSIONS = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i;
        const _HLS_EXTENSIONS = /\.(m3u8)($|\?)/i;
        const _DASH_EXTENSIONS = /\.(mpd)($|\?)/i;
        const _FLV_EXTENSIONS = /\.(flv)($|\?)/i;
        const canPlayFile = url => {
          if (url instanceof Array) {
            var _iterator3 = _createForOfIteratorHelper(url),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                const item = _step3.value;
                if (typeof item === "string" && canPlayFile(item)) {
                  return true;
                }
                if (canPlayFile(item.src)) {
                  return true;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
            return false;
          }
          if ((0, import_utils$3.isMediaStream)(url) || (0, import_utils$3.isBlobUrl)(url)) {
            return true;
          }
          return _AUDIO_EXTENSIONS.test(url) || _VIDEO_EXTENSIONS.test(url) || _HLS_EXTENSIONS.test(url) || _DASH_EXTENSIONS.test(url) || _FLV_EXTENSIONS.test(url);
        };
        const _canPlay = {
          youtube: url => {
            if (url instanceof Array) {
              return url.every(item => _MATCH_URL_YOUTUBE.test(item));
            }
            return _MATCH_URL_YOUTUBE.test(url);
          },
          soundcloud: url => _MATCH_URL_SOUNDCLOUD.test(url) && !_AUDIO_EXTENSIONS.test(url),
          vimeo: url => _MATCH_URL_VIMEO.test(url) && !_VIDEO_EXTENSIONS.test(url) && !_HLS_EXTENSIONS.test(url),
          mux: url => _MATCH_URL_MUX.test(url),
          facebook: url => _MATCH_URL_FACEBOOK.test(url) || _MATCH_URL_FACEBOOK_WATCH.test(url),
          streamable: url => _MATCH_URL_STREAMABLE.test(url),
          wistia: url => _MATCH_URL_WISTIA.test(url),
          twitch: url => _MATCH_URL_TWITCH_VIDEO.test(url) || _MATCH_URL_TWITCH_CHANNEL.test(url),
          dailymotion: url => _MATCH_URL_DAILYMOTION.test(url),
          mixcloud: url => _MATCH_URL_MIXCLOUD.test(url),
          vidyard: url => _MATCH_URL_VIDYARD.test(url),
          kaltura: url => _MATCH_URL_KALTURA.test(url),
          file: canPlayFile
        };
        var __defProp$4 = Object.defineProperty;
        var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
        var __getOwnPropNames$4 = Object.getOwnPropertyNames;
        var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
        var __export$4 = (target, all) => {
          for (var name in all) __defProp$4(target, name, {
            get: all[name],
            enumerable: true
          });
        };
        var __copyProps$4 = (to, from, except, desc) => {
          if (from && typeof from === "object" || typeof from === "function") {
            var _iterator4 = _createForOfIteratorHelper(__getOwnPropNames$4(from)),
              _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                let key = _step4.value;
                if (!__hasOwnProp$4.call(to, key) && key !== except) __defProp$4(to, key, {
                  get: () => from[key],
                  enumerable: !(desc = __getOwnPropDesc$4(from, key)) || desc.enumerable
                });
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
          return to;
        };
        var __toCommonJS$4 = mod => __copyProps$4(__defProp$4({}, "__esModule", {
          value: true
        }), mod);
        var players_exports = {};
        __export$4(players_exports, {
          default: () => players_default
        });
        var players = __toCommonJS$4(players_exports);
        var import_utils$2 = utils;
        var import_patterns = patterns;
        var players_default = [{
          key: "youtube",
          name: "YouTube",
          canPlay: import_patterns.canPlay.youtube,
          lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => module.import(/* webpackChunkName: 'reactPlayerYouTube' */
          './YouTube-legacy-B76kyUYD.js').then(n => n.Y), false ? __VITE_PRELOAD__ : void 0))
        }, {
          key: "soundcloud",
          name: "SoundCloud",
          canPlay: import_patterns.canPlay.soundcloud,
          lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => module.import(/* webpackChunkName: 'reactPlayerSoundCloud' */
          './SoundCloud-legacy-BNCkvlEs.js').then(n => n.S), false ? __VITE_PRELOAD__ : void 0))
        }, {
          key: "vimeo",
          name: "Vimeo",
          canPlay: import_patterns.canPlay.vimeo,
          lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => module.import(/* webpackChunkName: 'reactPlayerVimeo' */
          './Vimeo-legacy-BJB5A20D.js').then(n => n.V), false ? __VITE_PRELOAD__ : void 0))
        }, {
          key: "mux",
          name: "Mux",
          canPlay: import_patterns.canPlay.mux,
          lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => module.import(/* webpackChunkName: 'reactPlayerMux' */
          './Mux-legacy-CxxZFbVC.js').then(n => n.M), false ? __VITE_PRELOAD__ : void 0))
        }, {
          key: "facebook",
          name: "Facebook",
          canPlay: import_patterns.canPlay.facebook,
          lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => module.import(/* webpackChunkName: 'reactPlayerFacebook' */
          './Facebook-legacy-CKYfDSvq.js').then(n => n.F), false ? __VITE_PRELOAD__ : void 0))
        }, {
          key: "streamable",
          name: "Streamable",
          canPlay: import_patterns.canPlay.streamable,
          lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => module.import(/* webpackChunkName: 'reactPlayerStreamable' */
          './Streamable-legacy-X4h9quWI.js').then(n => n.S), false ? __VITE_PRELOAD__ : void 0))
        }, {
          key: "wistia",
          name: "Wistia",
          canPlay: import_patterns.canPlay.wistia,
          lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => module.import(/* webpackChunkName: 'reactPlayerWistia' */
          './Wistia-legacy-BP8d4YTl.js').then(n => n.W), false ? __VITE_PRELOAD__ : void 0))
        }, {
          key: "twitch",
          name: "Twitch",
          canPlay: import_patterns.canPlay.twitch,
          lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => module.import(/* webpackChunkName: 'reactPlayerTwitch' */
          './Twitch-legacy-dzdQ0EXV.js').then(n => n.T), false ? __VITE_PRELOAD__ : void 0))
        }, {
          key: "dailymotion",
          name: "DailyMotion",
          canPlay: import_patterns.canPlay.dailymotion,
          lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => module.import(/* webpackChunkName: 'reactPlayerDailyMotion' */
          './DailyMotion-legacy-DvKaOTOx.js').then(n => n.D), false ? __VITE_PRELOAD__ : void 0))
        }, {
          key: "mixcloud",
          name: "Mixcloud",
          canPlay: import_patterns.canPlay.mixcloud,
          lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => module.import(/* webpackChunkName: 'reactPlayerMixcloud' */
          './Mixcloud-legacy-0w9jzI9K.js').then(n => n.M), false ? __VITE_PRELOAD__ : void 0))
        }, {
          key: "vidyard",
          name: "Vidyard",
          canPlay: import_patterns.canPlay.vidyard,
          lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => module.import(/* webpackChunkName: 'reactPlayerVidyard' */
          './Vidyard-legacy-CqizheQ0.js').then(n => n.V), false ? __VITE_PRELOAD__ : void 0))
        }, {
          key: "kaltura",
          name: "Kaltura",
          canPlay: import_patterns.canPlay.kaltura,
          lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => module.import(/* webpackChunkName: 'reactPlayerKaltura' */
          './Kaltura-legacy-CBKt7T5p.js').then(n => n.K), false ? __VITE_PRELOAD__ : void 0))
        }, {
          key: "file",
          name: "FilePlayer",
          canPlay: import_patterns.canPlay.file,
          canEnablePIP: url => {
            return import_patterns.canPlay.file(url) && (document.pictureInPictureEnabled || (0, import_utils$2.supportsWebKitPresentationMode)()) && !import_patterns.AUDIO_EXTENSIONS.test(url);
          },
          lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => module.import(/* webpackChunkName: 'reactPlayerFilePlayer' */
          './FilePlayer-legacy-B47C7bqn.js').then(n => n.F), false ? __VITE_PRELOAD__ : void 0))
        }];
        var safeIsNaN = Number.isNaN || function ponyfill(value) {
          return typeof value === 'number' && value !== value;
        };
        function isEqual(first, second) {
          if (first === second) {
            return true;
          }
          if (safeIsNaN(first) && safeIsNaN(second)) {
            return true;
          }
          return false;
        }
        function areInputsEqual(newInputs, lastInputs) {
          if (newInputs.length !== lastInputs.length) {
            return false;
          }
          for (var i = 0; i < newInputs.length; i++) {
            if (!isEqual(newInputs[i], lastInputs[i])) {
              return false;
            }
          }
          return true;
        }
        function memoizeOne(resultFn, isEqual) {
          if (isEqual === void 0) {
            isEqual = areInputsEqual;
          }
          var lastThis;
          var lastArgs = [];
          var lastResult;
          var calledOnce = false;
          function memoized() {
            var newArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              newArgs[_i] = arguments[_i];
            }
            if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
              return lastResult;
            }
            lastResult = resultFn.apply(this, newArgs);
            calledOnce = true;
            lastThis = this;
            lastArgs = newArgs;
            return lastResult;
          }
          return memoized;
        }
        const memoizeOne_esm = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
          __proto__: null,
          default: memoizeOne
        }, Symbol.toStringTag, {
          value: 'Module'
        }));
        const require$$2 = /*@__PURE__*/getAugmentedNamespace(memoizeOne_esm);

        /* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

        var hasElementType = typeof Element !== 'undefined';
        var hasMap = typeof Map === 'function';
        var hasSet = typeof Set === 'function';
        var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

        // Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

        function equal(a, b) {
          // START: fast-deep-equal es6/index.js 3.1.3
          if (a === b) return true;
          if (a && b && typeof a == 'object' && typeof b == 'object') {
            if (a.constructor !== b.constructor) return false;
            var length, i, keys;
            if (Array.isArray(a)) {
              length = a.length;
              if (length != b.length) return false;
              for (i = length; i-- !== 0;) if (!equal(a[i], b[i])) return false;
              return true;
            }

            // START: Modifications:
            // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
            //    to co-exist with es5.
            // 2. Replace `for of` with es5 compliant iteration using `for`.
            //    Basically, take:
            //
            //    ```js
            //    for (i of a.entries())
            //      if (!b.has(i[0])) return false;
            //    ```
            //
            //    ... and convert to:
            //
            //    ```js
            //    it = a.entries();
            //    while (!(i = it.next()).done)
            //      if (!b.has(i.value[0])) return false;
            //    ```
            //
            //    **Note**: `i` access switches to `i.value`.
            var it;
            if (hasMap && a instanceof Map && b instanceof Map) {
              if (a.size !== b.size) return false;
              it = a.entries();
              while (!(i = it.next()).done) if (!b.has(i.value[0])) return false;
              it = a.entries();
              while (!(i = it.next()).done) if (!equal(i.value[1], b.get(i.value[0]))) return false;
              return true;
            }
            if (hasSet && a instanceof Set && b instanceof Set) {
              if (a.size !== b.size) return false;
              it = a.entries();
              while (!(i = it.next()).done) if (!b.has(i.value[0])) return false;
              return true;
            }
            // END: Modifications

            if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
              length = a.length;
              if (length != b.length) return false;
              for (i = length; i-- !== 0;) if (a[i] !== b[i]) return false;
              return true;
            }
            if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
            // START: Modifications:
            // Apply guards for `Object.create(null)` handling. See:
            // - https://github.com/FormidableLabs/react-fast-compare/issues/64
            // - https://github.com/epoberezkin/fast-deep-equal/issues/49
            if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === 'function' && typeof b.valueOf === 'function') return a.valueOf() === b.valueOf();
            if (a.toString !== Object.prototype.toString && typeof a.toString === 'function' && typeof b.toString === 'function') return a.toString() === b.toString();
            // END: Modifications

            keys = Object.keys(a);
            length = keys.length;
            if (length !== Object.keys(b).length) return false;
            for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
            // END: fast-deep-equal

            // START: react-fast-compare
            // custom handling for DOM elements
            if (hasElementType && a instanceof Element) return false;

            // custom handling for React/Preact
            for (i = length; i-- !== 0;) {
              if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
                // React-specific: avoid traversing React elements' _owner
                // Preact-specific: avoid traversing Preact elements' __v and __o
                //    __v = $_original / $_vnode
                //    __o = $_owner
                // These properties contain circular references and are not needed when
                // comparing the actual elements (and not their owners)
                // .$$typeof and ._store on just reasonable markers of elements

                continue;
              }

              // all other properties should be traversed as usual
              if (!equal(a[keys[i]], b[keys[i]])) return false;
            }
            // END: react-fast-compare

            // START: fast-deep-equal
            return true;
          }
          return a !== a && b !== b;
        }
        // end fast-deep-equal

        var reactFastCompare = function isEqual(a, b) {
          try {
            return equal(a, b);
          } catch (error) {
            if ((error.message || '').match(/stack|recursion/i)) {
              // warn on circular references, don't crash
              // browsers give this different errors name and messages:
              // chrome/safari: "RangeError", "Maximum call stack size exceeded"
              // firefox: "InternalError", too much recursion"
              // edge: "Error", "Out of stack space"
              console.warn('react-fast-compare cannot handle circular refs');
              return false;
            }
            // some other error. we should definitely know about these
            throw error;
          }
        };
        var __create$3 = Object.create;
        var __defProp$3 = Object.defineProperty;
        var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
        var __getOwnPropNames$3 = Object.getOwnPropertyNames;
        var __getProtoOf$3 = Object.getPrototypeOf;
        var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
        var __export$3 = (target, all) => {
          for (var name in all) __defProp$3(target, name, {
            get: all[name],
            enumerable: true
          });
        };
        var __copyProps$3 = (to, from, except, desc) => {
          if (from && typeof from === "object" || typeof from === "function") {
            var _iterator5 = _createForOfIteratorHelper(__getOwnPropNames$3(from)),
              _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                let key = _step5.value;
                if (!__hasOwnProp$3.call(to, key) && key !== except) __defProp$3(to, key, {
                  get: () => from[key],
                  enumerable: !(desc = __getOwnPropDesc$3(from, key)) || desc.enumerable
                });
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
          return to;
        };
        var __toESM$3 = (mod, isNodeMode, target) => (target = mod != null ? __create$3(__getProtoOf$3(mod)) : {}, __copyProps$3(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        !mod || !mod.__esModule ? __defProp$3(target, "default", {
          value: mod,
          enumerable: true
        }) : target, mod));
        var __toCommonJS$3 = mod => __copyProps$3(__defProp$3({}, "__esModule", {
          value: true
        }), mod);
        var props_exports = {};
        __export$3(props_exports, {
          defaultProps: () => _defaultProps,
          propTypes: () => _propTypes
        });
        var props = __toCommonJS$3(props_exports);
        var import_prop_types = __toESM$3(propTypesExports);
        const _import_prop_types$de = import_prop_types.default,
          string = _import_prop_types$de.string,
          bool = _import_prop_types$de.bool,
          number = _import_prop_types$de.number,
          array = _import_prop_types$de.array,
          oneOfType = _import_prop_types$de.oneOfType,
          shape = _import_prop_types$de.shape,
          object = _import_prop_types$de.object,
          func = _import_prop_types$de.func,
          node = _import_prop_types$de.node;
        const _propTypes = {
          url: oneOfType([string, array, object]),
          playing: bool,
          loop: bool,
          controls: bool,
          volume: number,
          muted: bool,
          playbackRate: number,
          width: oneOfType([string, number]),
          height: oneOfType([string, number]),
          style: object,
          progressInterval: number,
          playsinline: bool,
          pip: bool,
          stopOnUnmount: bool,
          light: oneOfType([bool, string, object]),
          playIcon: node,
          previewTabIndex: number,
          previewAriaLabel: string,
          fallback: node,
          oEmbedUrl: string,
          wrapper: oneOfType([string, func, shape({
            render: func.isRequired
          })]),
          config: shape({
            soundcloud: shape({
              options: object
            }),
            youtube: shape({
              playerVars: object,
              embedOptions: object,
              onUnstarted: func
            }),
            facebook: shape({
              appId: string,
              version: string,
              playerId: string,
              attributes: object
            }),
            dailymotion: shape({
              params: object
            }),
            vimeo: shape({
              playerOptions: object,
              title: string
            }),
            mux: shape({
              attributes: object,
              version: string
            }),
            file: shape({
              attributes: object,
              tracks: array,
              forceVideo: bool,
              forceAudio: bool,
              forceHLS: bool,
              forceSafariHLS: bool,
              forceDisableHls: bool,
              forceDASH: bool,
              forceFLV: bool,
              hlsOptions: object,
              hlsVersion: string,
              dashVersion: string,
              flvVersion: string
            }),
            wistia: shape({
              options: object,
              playerId: string,
              customControls: array
            }),
            mixcloud: shape({
              options: object
            }),
            twitch: shape({
              options: object,
              playerId: string
            }),
            vidyard: shape({
              options: object
            })
          }),
          onReady: func,
          onStart: func,
          onPlay: func,
          onPause: func,
          onBuffer: func,
          onBufferEnd: func,
          onEnded: func,
          onError: func,
          onDuration: func,
          onSeek: func,
          onPlaybackRateChange: func,
          onPlaybackQualityChange: func,
          onProgress: func,
          onClickPreview: func,
          onEnablePIP: func,
          onDisablePIP: func
        };
        const noop = () => {};
        const _defaultProps = {
          playing: false,
          loop: false,
          controls: false,
          volume: null,
          muted: false,
          playbackRate: 1,
          width: "640px",
          height: "360px",
          style: {},
          progressInterval: 1e3,
          playsinline: false,
          pip: false,
          stopOnUnmount: true,
          light: false,
          fallback: null,
          wrapper: "div",
          previewTabIndex: 0,
          previewAriaLabel: "",
          oEmbedUrl: "https://noembed.com/embed?url={url}",
          config: {
            soundcloud: {
              options: {
                visual: true,
                // Undocumented, but makes player fill container and look better
                buying: false,
                liking: false,
                download: false,
                sharing: false,
                show_comments: false,
                show_playcount: false
              }
            },
            youtube: {
              playerVars: {
                playsinline: 1,
                showinfo: 0,
                rel: 0,
                iv_load_policy: 3,
                modestbranding: 1
              },
              embedOptions: {},
              onUnstarted: noop
            },
            facebook: {
              appId: "1309697205772819",
              version: "v3.3",
              playerId: null,
              attributes: {}
            },
            dailymotion: {
              params: {
                api: 1,
                "endscreen-enable": false
              }
            },
            vimeo: {
              playerOptions: {
                autopause: false,
                byline: false,
                portrait: false,
                title: false
              },
              title: null
            },
            mux: {
              attributes: {},
              version: "2"
            },
            file: {
              attributes: {},
              tracks: [],
              forceVideo: false,
              forceAudio: false,
              forceHLS: false,
              forceDASH: false,
              forceFLV: false,
              hlsOptions: {},
              hlsVersion: "1.1.4",
              dashVersion: "3.1.3",
              flvVersion: "1.5.0",
              forceDisableHls: false
            },
            wistia: {
              options: {},
              playerId: null,
              customControls: null
            },
            mixcloud: {
              options: {
                hide_cover: 1
              }
            },
            twitch: {
              options: {},
              playerId: null
            },
            vidyard: {
              options: {}
            }
          },
          onReady: noop,
          onStart: noop,
          onPlay: noop,
          onPause: noop,
          onBuffer: noop,
          onBufferEnd: noop,
          onEnded: noop,
          onError: noop,
          onDuration: noop,
          onSeek: noop,
          onPlaybackRateChange: noop,
          onPlaybackQualityChange: noop,
          onProgress: noop,
          onClickPreview: noop,
          onEnablePIP: noop,
          onDisablePIP: noop
        };
        var __create$2 = Object.create;
        var __defProp$2 = Object.defineProperty;
        var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
        var __getOwnPropNames$2 = Object.getOwnPropertyNames;
        var __getProtoOf$2 = Object.getPrototypeOf;
        var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
        var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$2(obj, key, {
          enumerable: true,
          configurable: true,
          writable: true,
          value
        }) : obj[key] = value;
        var __export$2 = (target, all) => {
          for (var name in all) __defProp$2(target, name, {
            get: all[name],
            enumerable: true
          });
        };
        var __copyProps$2 = (to, from, except, desc) => {
          if (from && typeof from === "object" || typeof from === "function") {
            var _iterator6 = _createForOfIteratorHelper(__getOwnPropNames$2(from)),
              _step6;
            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                let key = _step6.value;
                if (!__hasOwnProp$2.call(to, key) && key !== except) __defProp$2(to, key, {
                  get: () => from[key],
                  enumerable: !(desc = __getOwnPropDesc$2(from, key)) || desc.enumerable
                });
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }
          return to;
        };
        var __toESM$2 = (mod, isNodeMode, target) => (target = mod != null ? __create$2(__getProtoOf$2(mod)) : {}, __copyProps$2(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        !mod || !mod.__esModule ? __defProp$2(target, "default", {
          value: mod,
          enumerable: true
        }) : target, mod));
        var __toCommonJS$2 = mod => __copyProps$2(__defProp$2({}, "__esModule", {
          value: true
        }), mod);
        var __publicField$1 = (obj, key, value) => {
          __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
          return value;
        };
        var Player_exports = {};
        __export$2(Player_exports, {
          default: () => Player
        });
        var Player_1 = __toCommonJS$2(Player_exports);
        var import_react$1 = __toESM$2(reactExports);
        var import_react_fast_compare$1 = __toESM$2(reactFastCompare);
        var import_props$1 = props;
        var import_utils$1 = utils;
        const SEEK_ON_PLAY_EXPIRY = 5e3;
        class Player extends import_react$1.Component {
          constructor() {
            super(...arguments);
            __publicField$1(this, "mounted", false);
            __publicField$1(this, "isReady", false);
            __publicField$1(this, "isPlaying", false);
            // Track playing state internally to prevent bugs
            __publicField$1(this, "isLoading", true);
            // Use isLoading to prevent onPause when switching URL
            __publicField$1(this, "loadOnReady", null);
            __publicField$1(this, "startOnPlay", true);
            __publicField$1(this, "seekOnPlay", null);
            __publicField$1(this, "onDurationCalled", false);
            __publicField$1(this, "handlePlayerMount", player => {
              if (this.player) {
                this.progress();
                return;
              }
              this.player = player;
              this.player.load(this.props.url);
              this.progress();
            });
            __publicField$1(this, "getInternalPlayer", key => {
              if (!this.player) return null;
              return this.player[key];
            });
            __publicField$1(this, "progress", () => {
              if (this.props.url && this.player && this.isReady) {
                const playedSeconds = this.getCurrentTime() || 0;
                const loadedSeconds = this.getSecondsLoaded();
                const duration = this.getDuration();
                if (duration) {
                  const progress = {
                    playedSeconds,
                    played: playedSeconds / duration
                  };
                  if (loadedSeconds !== null) {
                    progress.loadedSeconds = loadedSeconds;
                    progress.loaded = loadedSeconds / duration;
                  }
                  if (progress.playedSeconds !== this.prevPlayed || progress.loadedSeconds !== this.prevLoaded) {
                    this.props.onProgress(progress);
                  }
                  this.prevPlayed = progress.playedSeconds;
                  this.prevLoaded = progress.loadedSeconds;
                }
              }
              this.progressTimeout = setTimeout(this.progress, this.props.progressFrequency || this.props.progressInterval);
            });
            __publicField$1(this, "handleReady", () => {
              if (!this.mounted) return;
              this.isReady = true;
              this.isLoading = false;
              const _this$props = this.props,
                onReady = _this$props.onReady,
                playing = _this$props.playing,
                volume = _this$props.volume,
                muted = _this$props.muted;
              onReady();
              if (!muted && volume !== null) {
                this.player.setVolume(volume);
              }
              if (this.loadOnReady) {
                this.player.load(this.loadOnReady, true);
                this.loadOnReady = null;
              } else if (playing) {
                this.player.play();
              }
              this.handleDurationCheck();
            });
            __publicField$1(this, "handlePlay", () => {
              this.isPlaying = true;
              this.isLoading = false;
              const _this$props2 = this.props,
                onStart = _this$props2.onStart,
                onPlay = _this$props2.onPlay,
                playbackRate = _this$props2.playbackRate;
              if (this.startOnPlay) {
                if (this.player.setPlaybackRate && playbackRate !== 1) {
                  this.player.setPlaybackRate(playbackRate);
                }
                onStart();
                this.startOnPlay = false;
              }
              onPlay();
              if (this.seekOnPlay) {
                this.seekTo(this.seekOnPlay);
                this.seekOnPlay = null;
              }
              this.handleDurationCheck();
            });
            __publicField$1(this, "handlePause", e => {
              this.isPlaying = false;
              if (!this.isLoading) {
                this.props.onPause(e);
              }
            });
            __publicField$1(this, "handleEnded", () => {
              const _this$props3 = this.props,
                activePlayer = _this$props3.activePlayer,
                loop = _this$props3.loop,
                onEnded = _this$props3.onEnded;
              if (activePlayer.loopOnEnded && loop) {
                this.seekTo(0);
              }
              if (!loop) {
                this.isPlaying = false;
                onEnded();
              }
            });
            __publicField$1(this, "handleError", (...args) => {
              this.isLoading = false;
              this.props.onError(...args);
            });
            __publicField$1(this, "handleDurationCheck", () => {
              clearTimeout(this.durationCheckTimeout);
              const duration = this.getDuration();
              if (duration) {
                if (!this.onDurationCalled) {
                  this.props.onDuration(duration);
                  this.onDurationCalled = true;
                }
              } else {
                this.durationCheckTimeout = setTimeout(this.handleDurationCheck, 100);
              }
            });
            __publicField$1(this, "handleLoaded", () => {
              this.isLoading = false;
            });
          }
          componentDidMount() {
            this.mounted = true;
          }
          componentWillUnmount() {
            clearTimeout(this.progressTimeout);
            clearTimeout(this.durationCheckTimeout);
            if (this.isReady && this.props.stopOnUnmount) {
              this.player.stop();
              if (this.player.disablePIP) {
                this.player.disablePIP();
              }
            }
            this.mounted = false;
          }
          componentDidUpdate(prevProps) {
            if (!this.player) {
              return;
            }
            const _this$props4 = this.props,
              url = _this$props4.url,
              playing = _this$props4.playing,
              volume = _this$props4.volume,
              muted = _this$props4.muted,
              playbackRate = _this$props4.playbackRate,
              pip = _this$props4.pip,
              loop = _this$props4.loop,
              activePlayer = _this$props4.activePlayer,
              disableDeferredLoading = _this$props4.disableDeferredLoading;
            if (!(0, import_react_fast_compare$1.default)(prevProps.url, url)) {
              if (this.isLoading && !activePlayer.forceLoad && !disableDeferredLoading && !(0, import_utils$1.isMediaStream)(url)) {
                console.warn(`ReactPlayer: the attempt to load ${url} is being deferred until the player has loaded`);
                this.loadOnReady = url;
                return;
              }
              this.isLoading = true;
              this.startOnPlay = true;
              this.onDurationCalled = false;
              this.player.load(url, this.isReady);
            }
            if (!prevProps.playing && playing && !this.isPlaying) {
              this.player.play();
            }
            if (prevProps.playing && !playing && this.isPlaying) {
              this.player.pause();
            }
            if (!prevProps.pip && pip && this.player.enablePIP) {
              this.player.enablePIP();
            }
            if (prevProps.pip && !pip && this.player.disablePIP) {
              this.player.disablePIP();
            }
            if (prevProps.volume !== volume && volume !== null) {
              this.player.setVolume(volume);
            }
            if (prevProps.muted !== muted) {
              if (muted) {
                this.player.mute();
              } else {
                this.player.unmute();
                if (volume !== null) {
                  setTimeout(() => this.player.setVolume(volume));
                }
              }
            }
            if (prevProps.playbackRate !== playbackRate && this.player.setPlaybackRate) {
              this.player.setPlaybackRate(playbackRate);
            }
            if (prevProps.loop !== loop && this.player.setLoop) {
              this.player.setLoop(loop);
            }
          }
          getDuration() {
            if (!this.isReady) return null;
            return this.player.getDuration();
          }
          getCurrentTime() {
            if (!this.isReady) return null;
            return this.player.getCurrentTime();
          }
          getSecondsLoaded() {
            if (!this.isReady) return null;
            return this.player.getSecondsLoaded();
          }
          seekTo(amount, type, keepPlaying) {
            if (!this.isReady) {
              if (amount !== 0) {
                this.seekOnPlay = amount;
                setTimeout(() => {
                  this.seekOnPlay = null;
                }, SEEK_ON_PLAY_EXPIRY);
              }
              return;
            }
            const isFraction = !type ? amount > 0 && amount < 1 : type === "fraction";
            if (isFraction) {
              const duration = this.player.getDuration();
              if (!duration) {
                console.warn("ReactPlayer: could not seek using fraction \u2013\xA0duration not yet available");
                return;
              }
              this.player.seekTo(duration * amount, keepPlaying);
              return;
            }
            this.player.seekTo(amount, keepPlaying);
          }
          render() {
            const Player2 = this.props.activePlayer;
            if (!Player2) {
              return null;
            }
            return /* @__PURE__ */import_react$1.default.createElement(Player2, _objectSpread(_objectSpread({}, this.props), {}, {
              onMount: this.handlePlayerMount,
              onReady: this.handleReady,
              onPlay: this.handlePlay,
              onPause: this.handlePause,
              onEnded: this.handleEnded,
              onLoaded: this.handleLoaded,
              onError: this.handleError
            }));
          }
        }
        __publicField$1(Player, "displayName", "Player");
        __publicField$1(Player, "propTypes", import_props$1.propTypes);
        __publicField$1(Player, "defaultProps", import_props$1.defaultProps);
        var __create$1 = Object.create;
        var __defProp$1 = Object.defineProperty;
        var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
        var __getOwnPropNames$1 = Object.getOwnPropertyNames;
        var __getProtoOf$1 = Object.getPrototypeOf;
        var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
        var __defNormalProp = (obj, key, value) => key in obj ? __defProp$1(obj, key, {
          enumerable: true,
          configurable: true,
          writable: true,
          value
        }) : obj[key] = value;
        var __export$1 = (target, all) => {
          for (var name in all) __defProp$1(target, name, {
            get: all[name],
            enumerable: true
          });
        };
        var __copyProps$1 = (to, from, except, desc) => {
          if (from && typeof from === "object" || typeof from === "function") {
            var _iterator7 = _createForOfIteratorHelper(__getOwnPropNames$1(from)),
              _step7;
            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                let key = _step7.value;
                if (!__hasOwnProp$1.call(to, key) && key !== except) __defProp$1(to, key, {
                  get: () => from[key],
                  enumerable: !(desc = __getOwnPropDesc$1(from, key)) || desc.enumerable
                });
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }
          return to;
        };
        var __toESM$1 = (mod, isNodeMode, target) => (target = mod != null ? __create$1(__getProtoOf$1(mod)) : {}, __copyProps$1(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        !mod || !mod.__esModule ? __defProp$1(target, "default", {
          value: mod,
          enumerable: true
        }) : target, mod));
        var __toCommonJS$1 = mod => __copyProps$1(__defProp$1({}, "__esModule", {
          value: true
        }), mod);
        var __publicField = (obj, key, value) => {
          __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
          return value;
        };
        var ReactPlayer_exports = {};
        __export$1(ReactPlayer_exports, {
          createReactPlayer: () => _createReactPlayer
        });
        var ReactPlayer$1 = __toCommonJS$1(ReactPlayer_exports);
        var import_react = __toESM$1(reactExports);
        var import_deepmerge = __toESM$1(cjs);
        var import_memoize_one = __toESM$1(require$$2);
        var import_react_fast_compare = __toESM$1(reactFastCompare);
        var import_props = props;
        var import_utils = utils;
        var import_Player = __toESM$1(Player_1);
        const Preview = (0, import_utils.lazy)(() => __vitePreload(() => module.import(/* webpackChunkName: 'reactPlayerPreview' */
        './Preview-legacy-BmDzbpfk.js').then(n => n.P), false ? __VITE_PRELOAD__ : void 0));
        const IS_BROWSER = typeof window !== "undefined" && window.document && typeof document !== "undefined";
        const IS_GLOBAL = typeof commonjsGlobal !== "undefined" && commonjsGlobal.window && commonjsGlobal.window.document;
        const SUPPORTED_PROPS = Object.keys(import_props.propTypes);
        const UniversalSuspense = IS_BROWSER || IS_GLOBAL ? import_react.Suspense : () => null;
        const customPlayers = [];
        const _createReactPlayer = (players, fallback) => {
          var _a;
          return _a = class extends import_react.Component {
            constructor() {
              super(...arguments);
              __publicField(this, "state", {
                showPreview: !!this.props.light
              });
              // Use references, as refs is used by React
              __publicField(this, "references", {
                wrapper: _wrapper => {
                  this.wrapper = _wrapper;
                },
                player: _player => {
                  this.player = _player;
                }
              });
              __publicField(this, "handleClickPreview", e => {
                this.setState({
                  showPreview: false
                });
                this.props.onClickPreview(e);
              });
              __publicField(this, "showPreview", () => {
                this.setState({
                  showPreview: true
                });
              });
              __publicField(this, "getDuration", () => {
                if (!this.player) return null;
                return this.player.getDuration();
              });
              __publicField(this, "getCurrentTime", () => {
                if (!this.player) return null;
                return this.player.getCurrentTime();
              });
              __publicField(this, "getSecondsLoaded", () => {
                if (!this.player) return null;
                return this.player.getSecondsLoaded();
              });
              __publicField(this, "getInternalPlayer", (key = "player") => {
                if (!this.player) return null;
                return this.player.getInternalPlayer(key);
              });
              __publicField(this, "seekTo", (fraction, type, keepPlaying) => {
                if (!this.player) return null;
                this.player.seekTo(fraction, type, keepPlaying);
              });
              __publicField(this, "handleReady", () => {
                this.props.onReady(this);
              });
              __publicField(this, "getActivePlayer", (0, import_memoize_one.default)(url => {
                for (var _i3 = 0, _arr = [...customPlayers, ...players]; _i3 < _arr.length; _i3++) {
                  const player = _arr[_i3];
                  if (player.canPlay(url)) {
                    return player;
                  }
                }
                if (fallback) {
                  return fallback;
                }
                return null;
              }));
              __publicField(this, "getConfig", (0, import_memoize_one.default)((url, key) => {
                const config = this.props.config;
                return import_deepmerge.default.all([import_props.defaultProps.config, import_props.defaultProps.config[key] || {}, config, config[key] || {}]);
              }));
              __publicField(this, "getAttributes", (0, import_memoize_one.default)(url => {
                return (0, import_utils.omit)(this.props, SUPPORTED_PROPS);
              }));
              __publicField(this, "renderActivePlayer", url => {
                if (!url) return null;
                const player = this.getActivePlayer(url);
                if (!player) return null;
                const config = this.getConfig(url, player.key);
                return /* @__PURE__ */import_react.default.createElement(import_Player.default, _objectSpread(_objectSpread({}, this.props), {}, {
                  key: player.key,
                  ref: this.references.player,
                  config,
                  activePlayer: player.lazyPlayer || player,
                  onReady: this.handleReady
                }));
              });
            }
            shouldComponentUpdate(nextProps, nextState) {
              return !(0, import_react_fast_compare.default)(this.props, nextProps) || !(0, import_react_fast_compare.default)(this.state, nextState);
            }
            componentDidUpdate(prevProps) {
              const light = this.props.light;
              if (!prevProps.light && light) {
                this.setState({
                  showPreview: true
                });
              }
              if (prevProps.light && !light) {
                this.setState({
                  showPreview: false
                });
              }
            }
            renderPreview(url) {
              if (!url) return null;
              const _this$props5 = this.props,
                light = _this$props5.light,
                playIcon = _this$props5.playIcon,
                previewTabIndex = _this$props5.previewTabIndex,
                oEmbedUrl = _this$props5.oEmbedUrl,
                previewAriaLabel = _this$props5.previewAriaLabel;
              return /* @__PURE__ */import_react.default.createElement(Preview, {
                url,
                light,
                playIcon,
                previewTabIndex,
                previewAriaLabel,
                oEmbedUrl,
                onClick: this.handleClickPreview
              });
            }
            render() {
              const _this$props6 = this.props,
                url = _this$props6.url,
                style = _this$props6.style,
                width = _this$props6.width,
                height = _this$props6.height,
                fallback2 = _this$props6.fallback,
                Wrapper = _this$props6.wrapper;
              const showPreview = this.state.showPreview;
              const attributes = this.getAttributes(url);
              const wrapperRef = typeof Wrapper === "string" ? this.references.wrapper : void 0;
              return /* @__PURE__ */import_react.default.createElement(Wrapper, _objectSpread({
                ref: wrapperRef,
                style: _objectSpread(_objectSpread({}, style), {}, {
                  width,
                  height
                })
              }, attributes), /* @__PURE__ */import_react.default.createElement(UniversalSuspense, {
                fallback: fallback2
              }, showPreview ? this.renderPreview(url) : this.renderActivePlayer(url)));
            }
          }, __publicField(_a, "displayName", "ReactPlayer"), __publicField(_a, "propTypes", import_props.propTypes), __publicField(_a, "defaultProps", import_props.defaultProps), __publicField(_a, "addCustomPlayer", player => {
            customPlayers.push(player);
          }), __publicField(_a, "removeCustomPlayers", () => {
            customPlayers.length = 0;
          }), __publicField(_a, "canPlay", url => {
            for (var _i4 = 0, _arr2 = [...customPlayers, ...players]; _i4 < _arr2.length; _i4++) {
              const Player2 = _arr2[_i4];
              if (Player2.canPlay(url)) {
                return true;
              }
            }
            return false;
          }), __publicField(_a, "canEnablePIP", url => {
            for (var _i5 = 0, _arr3 = [...customPlayers, ...players]; _i5 < _arr3.length; _i5++) {
              const Player2 = _arr3[_i5];
              if (Player2.canEnablePIP && Player2.canEnablePIP(url)) {
                return true;
              }
            }
            return false;
          }), _a;
        };
        var __create = Object.create;
        var __defProp = Object.defineProperty;
        var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
        var __getOwnPropNames = Object.getOwnPropertyNames;
        var __getProtoOf = Object.getPrototypeOf;
        var __hasOwnProp = Object.prototype.hasOwnProperty;
        var __export = (target, all) => {
          for (var name in all) __defProp(target, name, {
            get: all[name],
            enumerable: true
          });
        };
        var __copyProps = (to, from, except, desc) => {
          if (from && typeof from === "object" || typeof from === "function") {
            var _iterator8 = _createForOfIteratorHelper(__getOwnPropNames(from)),
              _step8;
            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                let key = _step8.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                  get: () => from[key],
                  enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
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
        var src_exports = {};
        __export(src_exports, {
          default: () => src_default
        });
        var lib = __toCommonJS(src_exports);
        var import_players = __toESM(players);
        var import_ReactPlayer = ReactPlayer$1;
        const fallback = import_players.default[import_players.default.length - 1];
        var src_default = (0, import_ReactPlayer.createReactPlayer)(import_players.default, fallback);
        const ReactPlayer = exports("R", /*@__PURE__*/getDefaultExportFromCjs(lib));
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-Cu0CslXm.js.map
