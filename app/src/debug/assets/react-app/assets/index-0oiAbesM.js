const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/YouTube-DJYCfcGF.js","assets/index-GLBW3_uR.js","assets/index-DPI6aY9b.css","assets/SoundCloud-CufWGLPa.js","assets/Vimeo-s4stu5e5.js","assets/Mux-BKO4Iv6x.js","assets/Facebook-B5kcuABY.js","assets/Streamable-BRTMV3Dd.js","assets/Wistia-BZJmZrz6.js","assets/Twitch-BEgjm8rh.js","assets/DailyMotion-tKly2_TS.js","assets/Mixcloud-CfyRqvxR.js","assets/Vidyard-DD7cK0Qq.js","assets/Kaltura-CjI2cxrV.js","assets/FilePlayer-C2QvQwKX.js","assets/Preview-ldfW089M.js"])))=>i.map(i=>d[i]);
import { r as reactExports, y as __vitePreload, aa as getAugmentedNamespace, p as commonjsGlobal, w as getDefaultExportFromCjs } from "./index-GLBW3_uR.js";
import { F as propTypesExports } from "./use-service-BKPqOjBj.js";
var loadScript = function load(src, opts, cb) {
  var head = document.head || document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  if (typeof opts === "function") {
    cb = opts;
    opts = {};
  }
  opts = opts || {};
  cb = cb || function() {
  };
  script.type = opts.type || "text/javascript";
  script.charset = opts.charset || "utf8";
  script.async = "async" in opts ? !!opts.async : true;
  script.src = src;
  if (opts.attrs) {
    setAttributes(script, opts.attrs);
  }
  if (opts.text) {
    script.text = "" + opts.text;
  }
  var onend = "onload" in script ? stdOnEnd : ieOnEnd;
  onend(script, cb);
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
  script.onload = function() {
    this.onerror = this.onload = null;
    cb(null, script);
  };
  script.onerror = function() {
    this.onerror = this.onload = null;
    cb(new Error("Failed to load " + this.src), script);
  };
}
function ieOnEnd(script, cb) {
  script.onreadystatechange = function() {
    if (this.readyState != "complete" && this.readyState != "loaded") return;
    this.onreadystatechange = null;
    cb(null, script);
  };
}
var isMergeableObject = function isMergeableObject2(value) {
  return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
  return !!value && typeof value === "object";
}
function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
}
var canUseSymbol = typeof Symbol === "function" && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
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
  return target.concat(source).map(function(element) {
    return cloneUnlessOtherwiseSpecified(element, options);
  });
}
function getMergeFunction(key, options) {
  if (!options.customMerge) {
    return deepmerge;
  }
  var customMerge = options.customMerge(key);
  return typeof customMerge === "function" ? customMerge : deepmerge;
}
function getEnumerableOwnPropertySymbols(target) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
    return Object.propertyIsEnumerable.call(target, symbol);
  }) : [];
}
function getKeys(target) {
  return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}
function propertyIsOnObject(object2, property) {
  try {
    return property in object2;
  } catch (_) {
    return false;
  }
}
function propertyIsUnsafe(target, key) {
  return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
}
function mergeObject(target, source, options) {
  var destination = {};
  if (options.isMergeableObject(target)) {
    getKeys(target).forEach(function(key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
  }
  getKeys(source).forEach(function(key) {
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
deepmerge.all = function deepmergeAll(array2, options) {
  if (!Array.isArray(array2)) {
    throw new Error("first argument should be an array");
  }
  return array2.reduce(function(prev, next) {
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
  for (var name in all)
    __defProp$6(target, name, { get: all[name], enumerable: true });
};
var __copyProps$6 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames$6(from))
      if (!__hasOwnProp$6.call(to, key) && key !== except)
        __defProp$6(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc$6(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM$4 = (mod, isNodeMode, target) => (target = mod != null ? __create$4(__getProtoOf$4(mod)) : {}, __copyProps$6(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !mod || !mod.__esModule ? __defProp$6(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS$6 = (mod) => __copyProps$6(__defProp$6({}, "__esModule", { value: true }), mod);
var utils_exports = {};
__export$6(utils_exports, {
  callPlayer: () => callPlayer,
  getConfig: () => getConfig,
  getSDK: () => getSDK,
  isBlobUrl: () => isBlobUrl,
  isMediaStream: () => isMediaStream,
  lazy: () => lazy,
  omit: () => omit,
  parseEndTime: () => parseEndTime,
  parseStartTime: () => parseStartTime,
  queryString: () => queryString,
  randomString: () => randomString,
  supportsWebKitPresentationMode: () => supportsWebKitPresentationMode
});
var utils = __toCommonJS$6(utils_exports);
var import_react$2 = __toESM$4(reactExports);
var import_load_script = __toESM$4(loadScript);
var import_deepmerge$1 = __toESM$4(cjs);
const lazy = (componentImportFn) => import_react$2.default.lazy(async () => {
  const obj = await componentImportFn();
  return typeof obj.default === "function" ? obj : obj.default;
});
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
  let array2 = MATCH_START_STAMP.exec(stamp);
  while (array2 !== null) {
    const [, count, period] = array2;
    if (period === "h")
      seconds += parseInt(count, 10) * 60 * 60;
    if (period === "m")
      seconds += parseInt(count, 10) * 60;
    if (period === "s")
      seconds += parseInt(count, 10);
    array2 = MATCH_START_STAMP.exec(stamp);
  }
  return seconds;
}
function parseStartTime(url) {
  return parseTimeParam(url, MATCH_START_QUERY);
}
function parseEndTime(url) {
  return parseTimeParam(url, MATCH_END_QUERY);
}
function randomString() {
  return Math.random().toString(36).substr(2, 5);
}
function queryString(object2) {
  return Object.keys(object2).map((key) => "".concat(key, "=").concat(object2[key])).join("&");
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
const getSDK = enableStubOn(function getSDK2(url, sdkGlobal, sdkReady = null, isLoaded = () => true, fetchScript = import_load_script.default) {
  const existingGlobal = getGlobal(sdkGlobal);
  if (existingGlobal && isLoaded(existingGlobal)) {
    return Promise.resolve(existingGlobal);
  }
  return new Promise((resolve, reject) => {
    if (requests[url]) {
      requests[url].push({ resolve, reject });
      return;
    }
    requests[url] = [{ resolve, reject }];
    const onLoaded = (sdk) => {
      requests[url].forEach((request) => request.resolve(sdk));
    };
    if (sdkReady) {
      const previousOnReady = window[sdkReady];
      window[sdkReady] = function() {
        if (previousOnReady)
          previousOnReady();
        onLoaded(getGlobal(sdkGlobal));
      };
    }
    fetchScript(url, (err) => {
      if (err) {
        requests[url].forEach((request) => request.reject(err));
        requests[url] = null;
      } else if (!sdkReady) {
        onLoaded(getGlobal(sdkGlobal));
      }
    });
  });
});
function getConfig(props2, defaultProps2) {
  return (0, import_deepmerge$1.default)(defaultProps2.config, props2.config);
}
function omit(object2, ...arrays) {
  const omitKeys = [].concat(...arrays);
  const output = {};
  const keys = Object.keys(object2);
  for (const key of keys) {
    if (omitKeys.indexOf(key) === -1) {
      output[key] = object2[key];
    }
  }
  return output;
}
function callPlayer(method, ...args) {
  if (!this.player || !this.player[method]) {
    let message = "ReactPlayer: ".concat(this.constructor.displayName, " player could not call %c").concat(method, "%c – ");
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
function isMediaStream(url) {
  return typeof window !== "undefined" && typeof window.MediaStream !== "undefined" && url instanceof window.MediaStream;
}
function isBlobUrl(url) {
  return /^blob:/.test(url);
}
function supportsWebKitPresentationMode(video = document.createElement("video")) {
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
  for (var name in all)
    __defProp$5(target, name, { get: all[name], enumerable: true });
};
var __copyProps$5 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames$5(from))
      if (!__hasOwnProp$5.call(to, key) && key !== except)
        __defProp$5(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc$5(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS$5 = (mod) => __copyProps$5(__defProp$5({}, "__esModule", { value: true }), mod);
var patterns_exports = {};
__export$5(patterns_exports, {
  AUDIO_EXTENSIONS: () => AUDIO_EXTENSIONS,
  DASH_EXTENSIONS: () => DASH_EXTENSIONS,
  FLV_EXTENSIONS: () => FLV_EXTENSIONS,
  HLS_EXTENSIONS: () => HLS_EXTENSIONS,
  MATCH_URL_DAILYMOTION: () => MATCH_URL_DAILYMOTION,
  MATCH_URL_FACEBOOK: () => MATCH_URL_FACEBOOK,
  MATCH_URL_FACEBOOK_WATCH: () => MATCH_URL_FACEBOOK_WATCH,
  MATCH_URL_KALTURA: () => MATCH_URL_KALTURA,
  MATCH_URL_MIXCLOUD: () => MATCH_URL_MIXCLOUD,
  MATCH_URL_MUX: () => MATCH_URL_MUX,
  MATCH_URL_SOUNDCLOUD: () => MATCH_URL_SOUNDCLOUD,
  MATCH_URL_STREAMABLE: () => MATCH_URL_STREAMABLE,
  MATCH_URL_TWITCH_CHANNEL: () => MATCH_URL_TWITCH_CHANNEL,
  MATCH_URL_TWITCH_VIDEO: () => MATCH_URL_TWITCH_VIDEO,
  MATCH_URL_VIDYARD: () => MATCH_URL_VIDYARD,
  MATCH_URL_VIMEO: () => MATCH_URL_VIMEO,
  MATCH_URL_WISTIA: () => MATCH_URL_WISTIA,
  MATCH_URL_YOUTUBE: () => MATCH_URL_YOUTUBE,
  VIDEO_EXTENSIONS: () => VIDEO_EXTENSIONS,
  canPlay: () => canPlay
});
var patterns = __toCommonJS$5(patterns_exports);
var import_utils$3 = utils;
const MATCH_URL_YOUTUBE = /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
const MATCH_URL_SOUNDCLOUD = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/;
const MATCH_URL_VIMEO = /vimeo\.com\/(?!progressive_redirect).+/;
const MATCH_URL_MUX = /stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/;
const MATCH_URL_FACEBOOK = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;
const MATCH_URL_FACEBOOK_WATCH = /^https?:\/\/fb\.watch\/.+$/;
const MATCH_URL_STREAMABLE = /streamable\.com\/([a-z0-9]+)$/;
const MATCH_URL_WISTIA = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/;
const MATCH_URL_TWITCH_VIDEO = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
const MATCH_URL_TWITCH_CHANNEL = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;
const MATCH_URL_DAILYMOTION = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/;
const MATCH_URL_MIXCLOUD = /mixcloud\.com\/([^/]+\/[^/]+)/;
const MATCH_URL_VIDYARD = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/;
const MATCH_URL_KALTURA = /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/;
const AUDIO_EXTENSIONS = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
const VIDEO_EXTENSIONS = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i;
const HLS_EXTENSIONS = /\.(m3u8)($|\?)/i;
const DASH_EXTENSIONS = /\.(mpd)($|\?)/i;
const FLV_EXTENSIONS = /\.(flv)($|\?)/i;
const canPlayFile = (url) => {
  if (url instanceof Array) {
    for (const item of url) {
      if (typeof item === "string" && canPlayFile(item)) {
        return true;
      }
      if (canPlayFile(item.src)) {
        return true;
      }
    }
    return false;
  }
  if ((0, import_utils$3.isMediaStream)(url) || (0, import_utils$3.isBlobUrl)(url)) {
    return true;
  }
  return AUDIO_EXTENSIONS.test(url) || VIDEO_EXTENSIONS.test(url) || HLS_EXTENSIONS.test(url) || DASH_EXTENSIONS.test(url) || FLV_EXTENSIONS.test(url);
};
const canPlay = {
  youtube: (url) => {
    if (url instanceof Array) {
      return url.every((item) => MATCH_URL_YOUTUBE.test(item));
    }
    return MATCH_URL_YOUTUBE.test(url);
  },
  soundcloud: (url) => MATCH_URL_SOUNDCLOUD.test(url) && !AUDIO_EXTENSIONS.test(url),
  vimeo: (url) => MATCH_URL_VIMEO.test(url) && !VIDEO_EXTENSIONS.test(url) && !HLS_EXTENSIONS.test(url),
  mux: (url) => MATCH_URL_MUX.test(url),
  facebook: (url) => MATCH_URL_FACEBOOK.test(url) || MATCH_URL_FACEBOOK_WATCH.test(url),
  streamable: (url) => MATCH_URL_STREAMABLE.test(url),
  wistia: (url) => MATCH_URL_WISTIA.test(url),
  twitch: (url) => MATCH_URL_TWITCH_VIDEO.test(url) || MATCH_URL_TWITCH_CHANNEL.test(url),
  dailymotion: (url) => MATCH_URL_DAILYMOTION.test(url),
  mixcloud: (url) => MATCH_URL_MIXCLOUD.test(url),
  vidyard: (url) => MATCH_URL_VIDYARD.test(url),
  kaltura: (url) => MATCH_URL_KALTURA.test(url),
  file: canPlayFile
};
var __defProp$4 = Object.defineProperty;
var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames$4 = Object.getOwnPropertyNames;
var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
var __export$4 = (target, all) => {
  for (var name in all)
    __defProp$4(target, name, { get: all[name], enumerable: true });
};
var __copyProps$4 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames$4(from))
      if (!__hasOwnProp$4.call(to, key) && key !== except)
        __defProp$4(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc$4(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS$4 = (mod) => __copyProps$4(__defProp$4({}, "__esModule", { value: true }), mod);
var players_exports = {};
__export$4(players_exports, {
  default: () => players_default
});
var players = __toCommonJS$4(players_exports);
var import_utils$2 = utils;
var import_patterns = patterns;
var players_default = [
  {
    key: "youtube",
    name: "YouTube",
    canPlay: import_patterns.canPlay.youtube,
    lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => import(
      /* webpackChunkName: 'reactPlayerYouTube' */
      "./YouTube-DJYCfcGF.js"
    ).then((n) => n.Y), true ? __vite__mapDeps([0,1,2]) : void 0))
  },
  {
    key: "soundcloud",
    name: "SoundCloud",
    canPlay: import_patterns.canPlay.soundcloud,
    lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => import(
      /* webpackChunkName: 'reactPlayerSoundCloud' */
      "./SoundCloud-CufWGLPa.js"
    ).then((n) => n.S), true ? __vite__mapDeps([3,1,2]) : void 0))
  },
  {
    key: "vimeo",
    name: "Vimeo",
    canPlay: import_patterns.canPlay.vimeo,
    lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => import(
      /* webpackChunkName: 'reactPlayerVimeo' */
      "./Vimeo-s4stu5e5.js"
    ).then((n) => n.V), true ? __vite__mapDeps([4,1,2]) : void 0))
  },
  {
    key: "mux",
    name: "Mux",
    canPlay: import_patterns.canPlay.mux,
    lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => import(
      /* webpackChunkName: 'reactPlayerMux' */
      "./Mux-BKO4Iv6x.js"
    ).then((n) => n.M), true ? __vite__mapDeps([5,1,2]) : void 0))
  },
  {
    key: "facebook",
    name: "Facebook",
    canPlay: import_patterns.canPlay.facebook,
    lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => import(
      /* webpackChunkName: 'reactPlayerFacebook' */
      "./Facebook-B5kcuABY.js"
    ).then((n) => n.F), true ? __vite__mapDeps([6,1,2]) : void 0))
  },
  {
    key: "streamable",
    name: "Streamable",
    canPlay: import_patterns.canPlay.streamable,
    lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => import(
      /* webpackChunkName: 'reactPlayerStreamable' */
      "./Streamable-BRTMV3Dd.js"
    ).then((n) => n.S), true ? __vite__mapDeps([7,1,2]) : void 0))
  },
  {
    key: "wistia",
    name: "Wistia",
    canPlay: import_patterns.canPlay.wistia,
    lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => import(
      /* webpackChunkName: 'reactPlayerWistia' */
      "./Wistia-BZJmZrz6.js"
    ).then((n) => n.W), true ? __vite__mapDeps([8,1,2]) : void 0))
  },
  {
    key: "twitch",
    name: "Twitch",
    canPlay: import_patterns.canPlay.twitch,
    lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => import(
      /* webpackChunkName: 'reactPlayerTwitch' */
      "./Twitch-BEgjm8rh.js"
    ).then((n) => n.T), true ? __vite__mapDeps([9,1,2]) : void 0))
  },
  {
    key: "dailymotion",
    name: "DailyMotion",
    canPlay: import_patterns.canPlay.dailymotion,
    lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => import(
      /* webpackChunkName: 'reactPlayerDailyMotion' */
      "./DailyMotion-tKly2_TS.js"
    ).then((n) => n.D), true ? __vite__mapDeps([10,1,2]) : void 0))
  },
  {
    key: "mixcloud",
    name: "Mixcloud",
    canPlay: import_patterns.canPlay.mixcloud,
    lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => import(
      /* webpackChunkName: 'reactPlayerMixcloud' */
      "./Mixcloud-CfyRqvxR.js"
    ).then((n) => n.M), true ? __vite__mapDeps([11,1,2]) : void 0))
  },
  {
    key: "vidyard",
    name: "Vidyard",
    canPlay: import_patterns.canPlay.vidyard,
    lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => import(
      /* webpackChunkName: 'reactPlayerVidyard' */
      "./Vidyard-DD7cK0Qq.js"
    ).then((n) => n.V), true ? __vite__mapDeps([12,1,2]) : void 0))
  },
  {
    key: "kaltura",
    name: "Kaltura",
    canPlay: import_patterns.canPlay.kaltura,
    lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => import(
      /* webpackChunkName: 'reactPlayerKaltura' */
      "./Kaltura-CjI2cxrV.js"
    ).then((n) => n.K), true ? __vite__mapDeps([13,1,2]) : void 0))
  },
  {
    key: "file",
    name: "FilePlayer",
    canPlay: import_patterns.canPlay.file,
    canEnablePIP: (url) => {
      return import_patterns.canPlay.file(url) && (document.pictureInPictureEnabled || (0, import_utils$2.supportsWebKitPresentationMode)()) && !import_patterns.AUDIO_EXTENSIONS.test(url);
    },
    lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => import(
      /* webpackChunkName: 'reactPlayerFilePlayer' */
      "./FilePlayer-C2QvQwKX.js"
    ).then((n) => n.F), true ? __vite__mapDeps([14,1,2]) : void 0))
  }
];
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === "number" && value !== value;
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
function memoizeOne(resultFn, isEqual3) {
  if (isEqual3 === void 0) {
    isEqual3 = areInputsEqual;
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
    if (calledOnce && lastThis === this && isEqual3(newArgs, lastArgs)) {
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
const memoizeOne_esm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: memoizeOne
}, Symbol.toStringTag, { value: "Module" }));
const require$$2 = /* @__PURE__ */ getAugmentedNamespace(memoizeOne_esm);
var hasElementType = typeof Element !== "undefined";
var hasMap = typeof Map === "function";
var hasSet = typeof Set === "function";
var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
function equal(a, b) {
  if (a === b) return true;
  if (a && b && typeof a == "object" && typeof b == "object") {
    if (a.constructor !== b.constructor) return false;
    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0; )
        if (!equal(a[i], b[i])) return false;
      return true;
    }
    var it;
    if (hasMap && a instanceof Map && b instanceof Map) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }
    if (hasSet && a instanceof Set && b instanceof Set) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0; )
        if (a[i] !== b[i]) return false;
      return true;
    }
    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === "function" && typeof b.valueOf === "function") return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString && typeof a.toString === "function" && typeof b.toString === "function") return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;
    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    if (hasElementType && a instanceof Element) return false;
    for (i = length; i-- !== 0; ) {
      if ((keys[i] === "_owner" || keys[i] === "__v" || keys[i] === "__o") && a.$$typeof) {
        continue;
      }
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    return true;
  }
  return a !== a && b !== b;
}
var reactFastCompare = function isEqual2(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if ((error.message || "").match(/stack|recursion/i)) {
      console.warn("react-fast-compare cannot handle circular refs");
      return false;
    }
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
  for (var name in all)
    __defProp$3(target, name, { get: all[name], enumerable: true });
};
var __copyProps$3 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames$3(from))
      if (!__hasOwnProp$3.call(to, key) && key !== except)
        __defProp$3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc$3(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM$3 = (mod, isNodeMode, target) => (target = mod != null ? __create$3(__getProtoOf$3(mod)) : {}, __copyProps$3(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !mod || !mod.__esModule ? __defProp$3(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS$3 = (mod) => __copyProps$3(__defProp$3({}, "__esModule", { value: true }), mod);
var props_exports = {};
__export$3(props_exports, {
  defaultProps: () => defaultProps,
  propTypes: () => propTypes
});
var props = __toCommonJS$3(props_exports);
var import_prop_types = __toESM$3(propTypesExports);
const { string, bool, number, array, oneOfType, shape, object, func, node } = import_prop_types.default;
const propTypes = {
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
  wrapper: oneOfType([
    string,
    func,
    shape({ render: func.isRequired })
  ]),
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
const noop = () => {
};
const defaultProps = {
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
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export$2 = (target, all) => {
  for (var name in all)
    __defProp$2(target, name, { get: all[name], enumerable: true });
};
var __copyProps$2 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames$2(from))
      if (!__hasOwnProp$2.call(to, key) && key !== except)
        __defProp$2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc$2(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM$2 = (mod, isNodeMode, target) => (target = mod != null ? __create$2(__getProtoOf$2(mod)) : {}, __copyProps$2(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !mod || !mod.__esModule ? __defProp$2(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS$2 = (mod) => __copyProps$2(__defProp$2({}, "__esModule", { value: true }), mod);
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
    __publicField$1(this, "isLoading", true);
    __publicField$1(this, "loadOnReady", null);
    __publicField$1(this, "startOnPlay", true);
    __publicField$1(this, "seekOnPlay", null);
    __publicField$1(this, "onDurationCalled", false);
    __publicField$1(this, "handlePlayerMount", (player) => {
      if (this.player) {
        this.progress();
        return;
      }
      this.player = player;
      this.player.load(this.props.url);
      this.progress();
    });
    __publicField$1(this, "getInternalPlayer", (key) => {
      if (!this.player)
        return null;
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
      if (!this.mounted)
        return;
      this.isReady = true;
      this.isLoading = false;
      const { onReady, playing, volume, muted } = this.props;
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
      const { onStart, onPlay, playbackRate } = this.props;
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
    __publicField$1(this, "handlePause", (e) => {
      this.isPlaying = false;
      if (!this.isLoading) {
        this.props.onPause(e);
      }
    });
    __publicField$1(this, "handleEnded", () => {
      const { activePlayer, loop, onEnded } = this.props;
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
    const { url, playing, volume, muted, playbackRate, pip, loop, activePlayer, disableDeferredLoading } = this.props;
    if (!(0, import_react_fast_compare$1.default)(prevProps.url, url)) {
      if (this.isLoading && !activePlayer.forceLoad && !disableDeferredLoading && !(0, import_utils$1.isMediaStream)(url)) {
        console.warn("ReactPlayer: the attempt to load ".concat(url, " is being deferred until the player has loaded"));
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
    if (!this.isReady)
      return null;
    return this.player.getDuration();
  }
  getCurrentTime() {
    if (!this.isReady)
      return null;
    return this.player.getCurrentTime();
  }
  getSecondsLoaded() {
    if (!this.isReady)
      return null;
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
        console.warn("ReactPlayer: could not seek using fraction – duration not yet available");
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
    return /* @__PURE__ */ import_react$1.default.createElement(
      Player2,
      {
        ...this.props,
        onMount: this.handlePlayerMount,
        onReady: this.handleReady,
        onPlay: this.handlePlay,
        onPause: this.handlePause,
        onEnded: this.handleEnded,
        onLoaded: this.handleLoaded,
        onError: this.handleError
      }
    );
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
var __defNormalProp = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export$1 = (target, all) => {
  for (var name in all)
    __defProp$1(target, name, { get: all[name], enumerable: true });
};
var __copyProps$1 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames$1(from))
      if (!__hasOwnProp$1.call(to, key) && key !== except)
        __defProp$1(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc$1(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM$1 = (mod, isNodeMode, target) => (target = mod != null ? __create$1(__getProtoOf$1(mod)) : {}, __copyProps$1(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !mod || !mod.__esModule ? __defProp$1(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS$1 = (mod) => __copyProps$1(__defProp$1({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var ReactPlayer_exports = {};
__export$1(ReactPlayer_exports, {
  createReactPlayer: () => createReactPlayer
});
var ReactPlayer$1 = __toCommonJS$1(ReactPlayer_exports);
var import_react = __toESM$1(reactExports);
var import_deepmerge = __toESM$1(cjs);
var import_memoize_one = __toESM$1(require$$2);
var import_react_fast_compare = __toESM$1(reactFastCompare);
var import_props = props;
var import_utils = utils;
var import_Player = __toESM$1(Player_1);
const Preview = (0, import_utils.lazy)(() => __vitePreload(() => import(
  /* webpackChunkName: 'reactPlayerPreview' */
  "./Preview-ldfW089M.js"
).then((n) => n.P), true ? __vite__mapDeps([15,1,2]) : void 0));
const IS_BROWSER = typeof window !== "undefined" && window.document && typeof document !== "undefined";
const IS_GLOBAL = typeof commonjsGlobal !== "undefined" && commonjsGlobal.window && commonjsGlobal.window.document;
const SUPPORTED_PROPS = Object.keys(import_props.propTypes);
const UniversalSuspense = IS_BROWSER || IS_GLOBAL ? import_react.Suspense : () => null;
const customPlayers = [];
const createReactPlayer = (players2, fallback2) => {
  var _a;
  return _a = class extends import_react.Component {
    constructor() {
      super(...arguments);
      __publicField(this, "state", {
        showPreview: !!this.props.light
      });
      __publicField(this, "references", {
        wrapper: (wrapper) => {
          this.wrapper = wrapper;
        },
        player: (player) => {
          this.player = player;
        }
      });
      __publicField(this, "handleClickPreview", (e) => {
        this.setState({ showPreview: false });
        this.props.onClickPreview(e);
      });
      __publicField(this, "showPreview", () => {
        this.setState({ showPreview: true });
      });
      __publicField(this, "getDuration", () => {
        if (!this.player)
          return null;
        return this.player.getDuration();
      });
      __publicField(this, "getCurrentTime", () => {
        if (!this.player)
          return null;
        return this.player.getCurrentTime();
      });
      __publicField(this, "getSecondsLoaded", () => {
        if (!this.player)
          return null;
        return this.player.getSecondsLoaded();
      });
      __publicField(this, "getInternalPlayer", (key = "player") => {
        if (!this.player)
          return null;
        return this.player.getInternalPlayer(key);
      });
      __publicField(this, "seekTo", (fraction, type, keepPlaying) => {
        if (!this.player)
          return null;
        this.player.seekTo(fraction, type, keepPlaying);
      });
      __publicField(this, "handleReady", () => {
        this.props.onReady(this);
      });
      __publicField(this, "getActivePlayer", (0, import_memoize_one.default)((url) => {
        for (const player of [...customPlayers, ...players2]) {
          if (player.canPlay(url)) {
            return player;
          }
        }
        if (fallback2) {
          return fallback2;
        }
        return null;
      }));
      __publicField(this, "getConfig", (0, import_memoize_one.default)((url, key) => {
        const { config } = this.props;
        return import_deepmerge.default.all([
          import_props.defaultProps.config,
          import_props.defaultProps.config[key] || {},
          config,
          config[key] || {}
        ]);
      }));
      __publicField(this, "getAttributes", (0, import_memoize_one.default)((url) => {
        return (0, import_utils.omit)(this.props, SUPPORTED_PROPS);
      }));
      __publicField(this, "renderActivePlayer", (url) => {
        if (!url)
          return null;
        const player = this.getActivePlayer(url);
        if (!player)
          return null;
        const config = this.getConfig(url, player.key);
        return /* @__PURE__ */ import_react.default.createElement(
          import_Player.default,
          {
            ...this.props,
            key: player.key,
            ref: this.references.player,
            config,
            activePlayer: player.lazyPlayer || player,
            onReady: this.handleReady
          }
        );
      });
    }
    shouldComponentUpdate(nextProps, nextState) {
      return !(0, import_react_fast_compare.default)(this.props, nextProps) || !(0, import_react_fast_compare.default)(this.state, nextState);
    }
    componentDidUpdate(prevProps) {
      const { light } = this.props;
      if (!prevProps.light && light) {
        this.setState({ showPreview: true });
      }
      if (prevProps.light && !light) {
        this.setState({ showPreview: false });
      }
    }
    renderPreview(url) {
      if (!url)
        return null;
      const { light, playIcon, previewTabIndex, oEmbedUrl, previewAriaLabel } = this.props;
      return /* @__PURE__ */ import_react.default.createElement(
        Preview,
        {
          url,
          light,
          playIcon,
          previewTabIndex,
          previewAriaLabel,
          oEmbedUrl,
          onClick: this.handleClickPreview
        }
      );
    }
    render() {
      const { url, style, width, height, fallback: fallback22, wrapper: Wrapper } = this.props;
      const { showPreview } = this.state;
      const attributes = this.getAttributes(url);
      const wrapperRef = typeof Wrapper === "string" ? this.references.wrapper : void 0;
      return /* @__PURE__ */ import_react.default.createElement(Wrapper, { ref: wrapperRef, style: { ...style, width, height }, ...attributes }, /* @__PURE__ */ import_react.default.createElement(UniversalSuspense, { fallback: fallback22 }, showPreview ? this.renderPreview(url) : this.renderActivePlayer(url)));
    }
  }, __publicField(_a, "displayName", "ReactPlayer"), __publicField(_a, "propTypes", import_props.propTypes), __publicField(_a, "defaultProps", import_props.defaultProps), __publicField(_a, "addCustomPlayer", (player) => {
    customPlayers.push(player);
  }), __publicField(_a, "removeCustomPlayers", () => {
    customPlayers.length = 0;
  }), __publicField(_a, "canPlay", (url) => {
    for (const Player2 of [...customPlayers, ...players2]) {
      if (Player2.canPlay(url)) {
        return true;
      }
    }
    return false;
  }), __publicField(_a, "canEnablePIP", (url) => {
    for (const Player2 of [...customPlayers, ...players2]) {
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
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
var lib = __toCommonJS(src_exports);
var import_players = __toESM(players);
var import_ReactPlayer = ReactPlayer$1;
const fallback = import_players.default[import_players.default.length - 1];
var src_default = (0, import_ReactPlayer.createReactPlayer)(import_players.default, fallback);
const ReactPlayer = /* @__PURE__ */ getDefaultExportFromCjs(lib);
export {
  ReactPlayer as R,
  patterns as p,
  utils as u
};
//# sourceMappingURL=index-0oiAbesM.js.map
