;
(function () {
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray2(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
  function _unsupportedIterableToArray2(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray2(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray2(r, a) : void 0; } }
  function _arrayLikeToArray2(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  System.register(['./mui-legacy-b38CRKaY.js', './vendor-legacy-lhtLtiSI.js'], function (exports, module) {
    'use strict';

    var toPropertyKey, _setPrototypeOf, _typeof$3, _assertThisInitialized, reactExports;
    return {
      setters: [module => {
        toPropertyKey = module.t;
        _setPrototypeOf = module._;
        _typeof$3 = module.a;
        _assertThisInitialized = module.b;
      }, module => {
        reactExports = module.r;
      }],
      execute: function execute() {
        exports({
          I: I18nextProvider,
          _: _defineProperty$2,
          u: useTranslation
        });
        const scriptRel = 'modulepreload';
        const assetsURL = function assetsURL(dep) {
          return "/" + dep;
        };
        const seen = {};
        const __vitePreload = exports("a", function preload(baseModule, deps, importerUrl) {
          let promise = Promise.resolve();
          if (false && deps && deps.length > 0) {
            document.getElementsByTagName("link");
            const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
            const cspNonce = (cspNonceMeta === null || cspNonceMeta === void 0 ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta === null || cspNonceMeta === void 0 ? void 0 : cspNonceMeta.getAttribute("nonce"));
            promise = Promise.allSettled(deps.map(dep => {
              dep = assetsURL(dep);
              if (dep in seen) return;
              seen[dep] = true;
              const isCss = dep.endsWith(".css");
              const cssSelector = isCss ? '[rel="stylesheet"]' : "";
              if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
                return;
              }
              const link = document.createElement("link");
              link.rel = isCss ? "stylesheet" : scriptRel;
              if (!isCss) {
                link.as = "script";
              }
              link.crossOrigin = "";
              link.href = dep;
              if (cspNonce) {
                link.setAttribute("nonce", cspNonce);
              }
              document.head.appendChild(link);
              if (isCss) {
                return new Promise((res, rej) => {
                  link.addEventListener("load", res);
                  link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
                });
              }
            }));
          }
          function handlePreloadError(err) {
            const e = new Event("vite:preloadError", {
              cancelable: true
            });
            e.payload = err;
            window.dispatchEvent(e);
            if (!e.defaultPrevented) {
              throw err;
            }
          }
          return promise.then(res => {
            var _iterator = _createForOfIteratorHelper(res || []),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                const item = _step.value;
                if (item.status !== "rejected") continue;
                handlePreloadError(item.reason);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            return baseModule().catch(handlePreloadError);
          });
        });
        function _classCallCheck$1(a, n) {
          if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
        }
        function _defineProperties$1(e, r) {
          for (var t = 0; t < r.length; t++) {
            var o = r[t];
            o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
          }
        }
        function _createClass$1(e, r, t) {
          return r && _defineProperties$1(e.prototype, r), t && _defineProperties$1(e, t), Object.defineProperty(e, "prototype", {
            writable: false
          }), e;
        }
        function _inherits(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: true,
              configurable: true
            }
          }), Object.defineProperty(t, "prototype", {
            writable: false
          }), e && _setPrototypeOf(t, e);
        }
        function _possibleConstructorReturn(t, e) {
          if (e && ("object" == _typeof$3(e) || "function" == typeof e)) return e;
          if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
          return _assertThisInitialized(t);
        }
        function _getPrototypeOf(t) {
          return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          }, _getPrototypeOf(t);
        }
        function _defineProperty$2(e, r, t) {
          return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[r] = t, e;
        }
        function _arrayWithHoles(r) {
          if (Array.isArray(r)) return r;
        }
        function _iterableToArray(r) {
          if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
        }
        function _arrayLikeToArray(r, a) {
          (null == a || a > r.length) && (a = r.length);
          for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
          return n;
        }
        function _unsupportedIterableToArray(r, a) {
          if (r) {
            if ("string" == typeof r) return _arrayLikeToArray(r, a);
            var t = {}.toString.call(r).slice(8, -1);
            return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
          }
        }
        function _nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _toArray(r) {
          return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest();
        }
        function ownKeys$3(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) {
              symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            }
            keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread$3(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys$3(Object(source), true).forEach(function (key) {
                _defineProperty$2(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys$3(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }
          return target;
        }
        var consoleLogger = {
          type: 'logger',
          log: function log(args) {
            this.output('log', args);
          },
          warn: function warn(args) {
            this.output('warn', args);
          },
          error: function error(args) {
            this.output('error', args);
          },
          output: function output(type, args) {
            if (console && console[type]) console[type].apply(console, args);
          }
        };
        var Logger = function () {
          function Logger(concreteLogger) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            _classCallCheck$1(this, Logger);
            this.init(concreteLogger, options);
          }
          _createClass$1(Logger, [{
            key: "init",
            value: function init(concreteLogger) {
              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              this.prefix = options.prefix || 'i18next:';
              this.logger = concreteLogger || consoleLogger;
              this.options = options;
              this.debug = options.debug;
            }
          }, {
            key: "setDebug",
            value: function setDebug(bool) {
              this.debug = bool;
            }
          }, {
            key: "log",
            value: function log() {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              return this.forward(args, 'log', '', true);
            }
          }, {
            key: "warn",
            value: function warn() {
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }
              return this.forward(args, 'warn', '', true);
            }
          }, {
            key: "error",
            value: function error() {
              for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
              }
              return this.forward(args, 'error', '');
            }
          }, {
            key: "deprecate",
            value: function deprecate() {
              for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                args[_key4] = arguments[_key4];
              }
              return this.forward(args, 'warn', 'WARNING DEPRECATED: ', true);
            }
          }, {
            key: "forward",
            value: function forward(args, lvl, prefix, debugOnly) {
              if (debugOnly && !this.debug) return null;
              if (typeof args[0] === 'string') args[0] = "".concat(prefix).concat(this.prefix, " ").concat(args[0]);
              return this.logger[lvl](args);
            }
          }, {
            key: "create",
            value: function create(moduleName) {
              return new Logger(this.logger, _objectSpread$3(_objectSpread$3({}, {
                prefix: "".concat(this.prefix, ":").concat(moduleName, ":")
              }), this.options));
            }
          }, {
            key: "clone",
            value: function clone(options) {
              options = options || this.options;
              options.prefix = options.prefix || this.prefix;
              return new Logger(this.logger, options);
            }
          }]);
          return Logger;
        }();
        var baseLogger = new Logger();
        var EventEmitter = function () {
          function EventEmitter() {
            _classCallCheck$1(this, EventEmitter);
            this.observers = {};
          }
          _createClass$1(EventEmitter, [{
            key: "on",
            value: function on(events, listener) {
              var _this = this;
              events.split(' ').forEach(function (event) {
                _this.observers[event] = _this.observers[event] || [];
                _this.observers[event].push(listener);
              });
              return this;
            }
          }, {
            key: "off",
            value: function off(event, listener) {
              if (!this.observers[event]) return;
              if (!listener) {
                delete this.observers[event];
                return;
              }
              this.observers[event] = this.observers[event].filter(function (l) {
                return l !== listener;
              });
            }
          }, {
            key: "emit",
            value: function emit(event) {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              if (this.observers[event]) {
                var cloned = [].concat(this.observers[event]);
                cloned.forEach(function (observer) {
                  observer.apply(void 0, args);
                });
              }
              if (this.observers['*']) {
                var _cloned = [].concat(this.observers['*']);
                _cloned.forEach(function (observer) {
                  observer.apply(observer, [event].concat(args));
                });
              }
            }
          }]);
          return EventEmitter;
        }();
        function defer() {
          var res;
          var rej;
          var promise = new Promise(function (resolve, reject) {
            res = resolve;
            rej = reject;
          });
          promise.resolve = res;
          promise.reject = rej;
          return promise;
        }
        function makeString(object) {
          if (object == null) return '';
          return '' + object;
        }
        function copy(a, s, t) {
          a.forEach(function (m) {
            if (s[m]) t[m] = s[m];
          });
        }
        function getLastOfPath(object, path, Empty) {
          function cleanKey(key) {
            return key && key.indexOf('###') > -1 ? key.replace(/###/g, '.') : key;
          }
          function canNotTraverseDeeper() {
            return !object || typeof object === 'string';
          }
          var stack = typeof path !== 'string' ? [].concat(path) : path.split('.');
          while (stack.length > 1) {
            if (canNotTraverseDeeper()) return {};
            var key = cleanKey(stack.shift());
            if (!object[key] && Empty) object[key] = new Empty();
            if (Object.prototype.hasOwnProperty.call(object, key)) {
              object = object[key];
            } else {
              object = {};
            }
          }
          if (canNotTraverseDeeper()) return {};
          return {
            obj: object,
            k: cleanKey(stack.shift())
          };
        }
        function setPath(object, path, newValue) {
          var _getLastOfPath = getLastOfPath(object, path, Object),
            obj = _getLastOfPath.obj,
            k = _getLastOfPath.k;
          obj[k] = newValue;
        }
        function pushPath(object, path, newValue, concat) {
          var _getLastOfPath2 = getLastOfPath(object, path, Object),
            obj = _getLastOfPath2.obj,
            k = _getLastOfPath2.k;
          obj[k] = obj[k] || [];
          obj[k].push(newValue);
        }
        function getPath(object, path) {
          var _getLastOfPath3 = getLastOfPath(object, path),
            obj = _getLastOfPath3.obj,
            k = _getLastOfPath3.k;
          if (!obj) return undefined;
          return obj[k];
        }
        function getPathWithDefaults(data, defaultData, key) {
          var value = getPath(data, key);
          if (value !== undefined) {
            return value;
          }
          return getPath(defaultData, key);
        }
        function deepExtend(target, source, overwrite) {
          for (var prop in source) {
            if (prop !== '__proto__' && prop !== 'constructor') {
              if (prop in target) {
                if (typeof target[prop] === 'string' || target[prop] instanceof String || typeof source[prop] === 'string' || source[prop] instanceof String) {
                  if (overwrite) target[prop] = source[prop];
                } else {
                  deepExtend(target[prop], source[prop], overwrite);
                }
              } else {
                target[prop] = source[prop];
              }
            }
          }
          return target;
        }
        function regexEscape(str) {
          return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
        }
        var _entityMap = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#39;',
          '/': '&#x2F;'
        };
        function escape(data) {
          if (typeof data === 'string') {
            return data.replace(/[&<>"'\/]/g, function (s) {
              return _entityMap[s];
            });
          }
          return data;
        }
        var isIE10 = typeof window !== 'undefined' && window.navigator && typeof window.navigator.userAgentData === 'undefined' && window.navigator.userAgent && window.navigator.userAgent.indexOf('MSIE') > -1;
        var chars = [' ', ',', '?', '!', ';'];
        function looksLikeObjectPath(key, nsSeparator, keySeparator) {
          nsSeparator = nsSeparator || '';
          keySeparator = keySeparator || '';
          var possibleChars = chars.filter(function (c) {
            return nsSeparator.indexOf(c) < 0 && keySeparator.indexOf(c) < 0;
          });
          if (possibleChars.length === 0) return true;
          var r = new RegExp("(".concat(possibleChars.map(function (c) {
            return c === '?' ? '\\?' : c;
          }).join('|'), ")"));
          var matched = !r.test(key);
          if (!matched) {
            var ki = key.indexOf(keySeparator);
            if (ki > 0 && !r.test(key.substring(0, ki))) {
              matched = true;
            }
          }
          return matched;
        }
        function ownKeys$1$1(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) {
              symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            }
            keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread$1$1(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys$1$1(Object(source), true).forEach(function (key) {
                _defineProperty$2(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys$1$1(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }
          return target;
        }
        function _createSuper(Derived) {
          var hasNativeReflectConstruct = _isNativeReflectConstruct();
          return function _createSuperInternal() {
            var Super = _getPrototypeOf(Derived),
              result;
            if (hasNativeReflectConstruct) {
              var NewTarget = _getPrototypeOf(this).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }
            return _possibleConstructorReturn(this, result);
          };
        }
        function _isNativeReflectConstruct() {
          if (typeof Reflect === "undefined" || !Reflect.construct) return false;
          if (Reflect.construct.sham) return false;
          if (typeof Proxy === "function") return true;
          try {
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
            return true;
          } catch (e) {
            return false;
          }
        }
        function deepFind(obj, path) {
          var keySeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
          if (!obj) return undefined;
          if (obj[path]) return obj[path];
          var paths = path.split(keySeparator);
          var current = obj;
          for (var i = 0; i < paths.length; ++i) {
            if (!current) return undefined;
            if (typeof current[paths[i]] === 'string' && i + 1 < paths.length) {
              return undefined;
            }
            if (current[paths[i]] === undefined) {
              var j = 2;
              var p = paths.slice(i, i + j).join(keySeparator);
              var mix = current[p];
              while (mix === undefined && paths.length > i + j) {
                j++;
                p = paths.slice(i, i + j).join(keySeparator);
                mix = current[p];
              }
              if (mix === undefined) return undefined;
              if (mix === null) return null;
              if (path.endsWith(p)) {
                if (typeof mix === 'string') return mix;
                if (p && typeof mix[p] === 'string') return mix[p];
              }
              var joinedPath = paths.slice(i + j).join(keySeparator);
              if (joinedPath) return deepFind(mix, joinedPath, keySeparator);
              return undefined;
            }
            current = current[paths[i]];
          }
          return current;
        }
        var ResourceStore = function (_EventEmitter) {
          _inherits(ResourceStore, _EventEmitter);
          var _super = _createSuper(ResourceStore);
          function ResourceStore(data) {
            var _this;
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
              ns: ['translation'],
              defaultNS: 'translation'
            };
            _classCallCheck$1(this, ResourceStore);
            _this = _super.call(this);
            if (isIE10) {
              EventEmitter.call(_assertThisInitialized(_this));
            }
            _this.data = data || {};
            _this.options = options;
            if (_this.options.keySeparator === undefined) {
              _this.options.keySeparator = '.';
            }
            if (_this.options.ignoreJSONStructure === undefined) {
              _this.options.ignoreJSONStructure = true;
            }
            return _this;
          }
          _createClass$1(ResourceStore, [{
            key: "addNamespaces",
            value: function addNamespaces(ns) {
              if (this.options.ns.indexOf(ns) < 0) {
                this.options.ns.push(ns);
              }
            }
          }, {
            key: "removeNamespaces",
            value: function removeNamespaces(ns) {
              var index = this.options.ns.indexOf(ns);
              if (index > -1) {
                this.options.ns.splice(index, 1);
              }
            }
          }, {
            key: "getResource",
            value: function getResource(lng, ns, key) {
              var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
              var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
              var ignoreJSONStructure = options.ignoreJSONStructure !== undefined ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
              var path = [lng, ns];
              if (key && typeof key !== 'string') path = path.concat(key);
              if (key && typeof key === 'string') path = path.concat(keySeparator ? key.split(keySeparator) : key);
              if (lng.indexOf('.') > -1) {
                path = lng.split('.');
              }
              var result = getPath(this.data, path);
              if (result || !ignoreJSONStructure || typeof key !== 'string') return result;
              return deepFind(this.data && this.data[lng] && this.data[lng][ns], key, keySeparator);
            }
          }, {
            key: "addResource",
            value: function addResource(lng, ns, key, value) {
              var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
                silent: false
              };
              var keySeparator = this.options.keySeparator;
              if (keySeparator === undefined) keySeparator = '.';
              var path = [lng, ns];
              if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);
              if (lng.indexOf('.') > -1) {
                path = lng.split('.');
                value = ns;
                ns = path[1];
              }
              this.addNamespaces(ns);
              setPath(this.data, path, value);
              if (!options.silent) this.emit('added', lng, ns, key, value);
            }
          }, {
            key: "addResources",
            value: function addResources(lng, ns, resources) {
              var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
                silent: false
              };
              for (var m in resources) {
                if (typeof resources[m] === 'string' || Object.prototype.toString.apply(resources[m]) === '[object Array]') this.addResource(lng, ns, m, resources[m], {
                  silent: true
                });
              }
              if (!options.silent) this.emit('added', lng, ns, resources);
            }
          }, {
            key: "addResourceBundle",
            value: function addResourceBundle(lng, ns, resources, deep, overwrite) {
              var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {
                silent: false
              };
              var path = [lng, ns];
              if (lng.indexOf('.') > -1) {
                path = lng.split('.');
                deep = resources;
                resources = ns;
                ns = path[1];
              }
              this.addNamespaces(ns);
              var pack = getPath(this.data, path) || {};
              if (deep) {
                deepExtend(pack, resources, overwrite);
              } else {
                pack = _objectSpread$1$1(_objectSpread$1$1({}, pack), resources);
              }
              setPath(this.data, path, pack);
              if (!options.silent) this.emit('added', lng, ns, resources);
            }
          }, {
            key: "removeResourceBundle",
            value: function removeResourceBundle(lng, ns) {
              if (this.hasResourceBundle(lng, ns)) {
                delete this.data[lng][ns];
              }
              this.removeNamespaces(ns);
              this.emit('removed', lng, ns);
            }
          }, {
            key: "hasResourceBundle",
            value: function hasResourceBundle(lng, ns) {
              return this.getResource(lng, ns) !== undefined;
            }
          }, {
            key: "getResourceBundle",
            value: function getResourceBundle(lng, ns) {
              if (!ns) ns = this.options.defaultNS;
              if (this.options.compatibilityAPI === 'v1') return _objectSpread$1$1(_objectSpread$1$1({}, {}), this.getResource(lng, ns));
              return this.getResource(lng, ns);
            }
          }, {
            key: "getDataByLanguage",
            value: function getDataByLanguage(lng) {
              return this.data[lng];
            }
          }, {
            key: "hasLanguageSomeTranslations",
            value: function hasLanguageSomeTranslations(lng) {
              var data = this.getDataByLanguage(lng);
              var n = data && Object.keys(data) || [];
              return !!n.find(function (v) {
                return data[v] && Object.keys(data[v]).length > 0;
              });
            }
          }, {
            key: "toJSON",
            value: function toJSON() {
              return this.data;
            }
          }]);
          return ResourceStore;
        }(EventEmitter);
        var postProcessor = {
          processors: {},
          addPostProcessor: function addPostProcessor(module) {
            this.processors[module.name] = module;
          },
          handle: function handle(processors, value, key, options, translator) {
            var _this = this;
            processors.forEach(function (processor) {
              if (_this.processors[processor]) value = _this.processors[processor].process(value, key, options, translator);
            });
            return value;
          }
        };
        function ownKeys$2$1(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) {
              symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            }
            keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread$2$1(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys$2$1(Object(source), true).forEach(function (key) {
                _defineProperty$2(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys$2$1(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }
          return target;
        }
        function _createSuper$1(Derived) {
          var hasNativeReflectConstruct = _isNativeReflectConstruct$1();
          return function _createSuperInternal() {
            var Super = _getPrototypeOf(Derived),
              result;
            if (hasNativeReflectConstruct) {
              var NewTarget = _getPrototypeOf(this).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }
            return _possibleConstructorReturn(this, result);
          };
        }
        function _isNativeReflectConstruct$1() {
          if (typeof Reflect === "undefined" || !Reflect.construct) return false;
          if (Reflect.construct.sham) return false;
          if (typeof Proxy === "function") return true;
          try {
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
            return true;
          } catch (e) {
            return false;
          }
        }
        var checkedLoadedFor = {};
        var Translator = function (_EventEmitter) {
          _inherits(Translator, _EventEmitter);
          var _super = _createSuper$1(Translator);
          function Translator(services) {
            var _this;
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            _classCallCheck$1(this, Translator);
            _this = _super.call(this);
            if (isIE10) {
              EventEmitter.call(_assertThisInitialized(_this));
            }
            copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat', 'utils'], services, _assertThisInitialized(_this));
            _this.options = options;
            if (_this.options.keySeparator === undefined) {
              _this.options.keySeparator = '.';
            }
            _this.logger = baseLogger.create('translator');
            return _this;
          }
          _createClass$1(Translator, [{
            key: "changeLanguage",
            value: function changeLanguage(lng) {
              if (lng) this.language = lng;
            }
          }, {
            key: "exists",
            value: function exists(key) {
              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                interpolation: {}
              };
              if (key === undefined || key === null) {
                return false;
              }
              var resolved = this.resolve(key, options);
              return resolved && resolved.res !== undefined;
            }
          }, {
            key: "extractFromKey",
            value: function extractFromKey(key, options) {
              var nsSeparator = options.nsSeparator !== undefined ? options.nsSeparator : this.options.nsSeparator;
              if (nsSeparator === undefined) nsSeparator = ':';
              var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
              var namespaces = options.ns || this.options.defaultNS || [];
              var wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
              var seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !options.keySeparator && !this.options.userDefinedNsSeparator && !options.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
              if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
                var m = key.match(this.interpolator.nestingRegexp);
                if (m && m.length > 0) {
                  return {
                    key: key,
                    namespaces: namespaces
                  };
                }
                var parts = key.split(nsSeparator);
                if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
                key = parts.join(keySeparator);
              }
              if (typeof namespaces === 'string') namespaces = [namespaces];
              return {
                key: key,
                namespaces: namespaces
              };
            }
          }, {
            key: "translate",
            value: function translate(keys, options, lastKey) {
              var _this2 = this;
              if (_typeof$3(options) !== 'object' && this.options.overloadTranslationOptionHandler) {
                options = this.options.overloadTranslationOptionHandler(arguments);
              }
              if (!options) options = {};
              if (keys === undefined || keys === null) return '';
              if (!Array.isArray(keys)) keys = [String(keys)];
              var returnDetails = options.returnDetails !== undefined ? options.returnDetails : this.options.returnDetails;
              var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
              var _this$extractFromKey = this.extractFromKey(keys[keys.length - 1], options),
                key = _this$extractFromKey.key,
                namespaces = _this$extractFromKey.namespaces;
              var namespace = namespaces[namespaces.length - 1];
              var lng = options.lng || this.language;
              var appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
              if (lng && lng.toLowerCase() === 'cimode') {
                if (appendNamespaceToCIMode) {
                  var nsSeparator = options.nsSeparator || this.options.nsSeparator;
                  if (returnDetails) {
                    resolved.res = "".concat(namespace).concat(nsSeparator).concat(key);
                    return resolved;
                  }
                  return "".concat(namespace).concat(nsSeparator).concat(key);
                }
                if (returnDetails) {
                  resolved.res = key;
                  return resolved;
                }
                return key;
              }
              var resolved = this.resolve(keys, options);
              var res = resolved && resolved.res;
              var resUsedKey = resolved && resolved.usedKey || key;
              var resExactUsedKey = resolved && resolved.exactUsedKey || key;
              var resType = Object.prototype.toString.apply(res);
              var noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
              var joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays;
              var handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
              var handleAsObject = typeof res !== 'string' && typeof res !== 'boolean' && typeof res !== 'number';
              if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === 'string' && resType === '[object Array]')) {
                if (!options.returnObjects && !this.options.returnObjects) {
                  if (!this.options.returnedObjectHandler) {
                    this.logger.warn('accessing an object - but returnObjects options is not enabled!');
                  }
                  var r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, _objectSpread$2$1(_objectSpread$2$1({}, options), {}, {
                    ns: namespaces
                  })) : "key '".concat(key, " (").concat(this.language, ")' returned an object instead of string.");
                  if (returnDetails) {
                    resolved.res = r;
                    return resolved;
                  }
                  return r;
                }
                if (keySeparator) {
                  var resTypeIsArray = resType === '[object Array]';
                  var copy = resTypeIsArray ? [] : {};
                  var newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
                  for (var m in res) {
                    if (Object.prototype.hasOwnProperty.call(res, m)) {
                      var deepKey = "".concat(newKeyToUse).concat(keySeparator).concat(m);
                      copy[m] = this.translate(deepKey, _objectSpread$2$1(_objectSpread$2$1({}, options), {
                        joinArrays: false,
                        ns: namespaces
                      }));
                      if (copy[m] === deepKey) copy[m] = res[m];
                    }
                  }
                  res = copy;
                }
              } else if (handleAsObjectInI18nFormat && typeof joinArrays === 'string' && resType === '[object Array]') {
                res = res.join(joinArrays);
                if (res) res = this.extendTranslation(res, keys, options, lastKey);
              } else {
                var usedDefault = false;
                var usedKey = false;
                var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
                var hasDefaultValue = Translator.hasDefaultValue(options);
                var defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, options) : '';
                var defaultValue = options["defaultValue".concat(defaultValueSuffix)] || options.defaultValue;
                if (!this.isValidLookup(res) && hasDefaultValue) {
                  usedDefault = true;
                  res = defaultValue;
                }
                if (!this.isValidLookup(res)) {
                  usedKey = true;
                  res = key;
                }
                var missingKeyNoValueFallbackToKey = options.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
                var resForMissing = missingKeyNoValueFallbackToKey && usedKey ? undefined : res;
                var updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
                if (usedKey || usedDefault || updateMissing) {
                  this.logger.log(updateMissing ? 'updateKey' : 'missingKey', lng, namespace, key, updateMissing ? defaultValue : res);
                  if (keySeparator) {
                    var fk = this.resolve(key, _objectSpread$2$1(_objectSpread$2$1({}, options), {}, {
                      keySeparator: false
                    }));
                    if (fk && fk.res) this.logger.warn('Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.');
                  }
                  var lngs = [];
                  var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);
                  if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
                    for (var i = 0; i < fallbackLngs.length; i++) {
                      lngs.push(fallbackLngs[i]);
                    }
                  } else if (this.options.saveMissingTo === 'all') {
                    lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
                  } else {
                    lngs.push(options.lng || this.language);
                  }
                  var send = function send(l, k, specificDefaultValue) {
                    var defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
                    if (_this2.options.missingKeyHandler) {
                      _this2.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, options);
                    } else if (_this2.backendConnector && _this2.backendConnector.saveMissing) {
                      _this2.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, options);
                    }
                    _this2.emit('missingKey', l, namespace, k, res);
                  };
                  if (this.options.saveMissing) {
                    if (this.options.saveMissingPlurals && needsPluralHandling) {
                      lngs.forEach(function (language) {
                        _this2.pluralResolver.getSuffixes(language, options).forEach(function (suffix) {
                          send([language], key + suffix, options["defaultValue".concat(suffix)] || defaultValue);
                        });
                      });
                    } else {
                      send(lngs, key, defaultValue);
                    }
                  }
                }
                res = this.extendTranslation(res, keys, options, resolved, lastKey);
                if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = "".concat(namespace, ":").concat(key);
                if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
                  if (this.options.compatibilityAPI !== 'v1') {
                    res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(namespace, ":").concat(key) : key, usedDefault ? res : undefined);
                  } else {
                    res = this.options.parseMissingKeyHandler(res);
                  }
                }
              }
              if (returnDetails) {
                resolved.res = res;
                return resolved;
              }
              return res;
            }
          }, {
            key: "extendTranslation",
            value: function extendTranslation(res, key, options, resolved, lastKey) {
              var _this3 = this;
              if (this.i18nFormat && this.i18nFormat.parse) {
                res = this.i18nFormat.parse(res, _objectSpread$2$1(_objectSpread$2$1({}, this.options.interpolation.defaultVariables), options), resolved.usedLng, resolved.usedNS, resolved.usedKey, {
                  resolved: resolved
                });
              } else if (!options.skipInterpolation) {
                if (options.interpolation) this.interpolator.init(_objectSpread$2$1(_objectSpread$2$1({}, options), {
                  interpolation: _objectSpread$2$1(_objectSpread$2$1({}, this.options.interpolation), options.interpolation)
                }));
                var skipOnVariables = typeof res === 'string' && (options && options.interpolation && options.interpolation.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
                var nestBef;
                if (skipOnVariables) {
                  var nb = res.match(this.interpolator.nestingRegexp);
                  nestBef = nb && nb.length;
                }
                var data = options.replace && typeof options.replace !== 'string' ? options.replace : options;
                if (this.options.interpolation.defaultVariables) data = _objectSpread$2$1(_objectSpread$2$1({}, this.options.interpolation.defaultVariables), data);
                res = this.interpolator.interpolate(res, data, options.lng || this.language, options);
                if (skipOnVariables) {
                  var na = res.match(this.interpolator.nestingRegexp);
                  var nestAft = na && na.length;
                  if (nestBef < nestAft) options.nest = false;
                }
                if (options.nest !== false) res = this.interpolator.nest(res, function () {
                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }
                  if (lastKey && lastKey[0] === args[0] && !options.context) {
                    _this3.logger.warn("It seems you are nesting recursively key: ".concat(args[0], " in key: ").concat(key[0]));
                    return null;
                  }
                  return _this3.translate.apply(_this3, args.concat([key]));
                }, options);
                if (options.interpolation) this.interpolator.reset();
              }
              var postProcess = options.postProcess || this.options.postProcess;
              var postProcessorNames = typeof postProcess === 'string' ? [postProcess] : postProcess;
              if (res !== undefined && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
                res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? _objectSpread$2$1({
                  i18nResolved: resolved
                }, options) : options, this);
              }
              return res;
            }
          }, {
            key: "resolve",
            value: function resolve(keys) {
              var _this4 = this;
              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              var found;
              var usedKey;
              var exactUsedKey;
              var usedLng;
              var usedNS;
              if (typeof keys === 'string') keys = [keys];
              keys.forEach(function (k) {
                if (_this4.isValidLookup(found)) return;
                var extracted = _this4.extractFromKey(k, options);
                var key = extracted.key;
                usedKey = key;
                var namespaces = extracted.namespaces;
                if (_this4.options.fallbackNS) namespaces = namespaces.concat(_this4.options.fallbackNS);
                var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
                var needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && _this4.pluralResolver.shouldUseIntlApi();
                var needsContextHandling = options.context !== undefined && (typeof options.context === 'string' || typeof options.context === 'number') && options.context !== '';
                var codes = options.lngs ? options.lngs : _this4.languageUtils.toResolveHierarchy(options.lng || _this4.language, options.fallbackLng);
                namespaces.forEach(function (ns) {
                  if (_this4.isValidLookup(found)) return;
                  usedNS = ns;
                  if (!checkedLoadedFor["".concat(codes[0], "-").concat(ns)] && _this4.utils && _this4.utils.hasLoadedNamespace && !_this4.utils.hasLoadedNamespace(usedNS)) {
                    checkedLoadedFor["".concat(codes[0], "-").concat(ns)] = true;
                    _this4.logger.warn("key \"".concat(usedKey, "\" for languages \"").concat(codes.join(', '), "\" won't get resolved as namespace \"").concat(usedNS, "\" was not yet loaded"), 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
                  }
                  codes.forEach(function (code) {
                    if (_this4.isValidLookup(found)) return;
                    usedLng = code;
                    var finalKeys = [key];
                    if (_this4.i18nFormat && _this4.i18nFormat.addLookupKeys) {
                      _this4.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
                    } else {
                      var pluralSuffix;
                      if (needsPluralHandling) pluralSuffix = _this4.pluralResolver.getSuffix(code, options.count, options);
                      var zeroSuffix = "".concat(_this4.options.pluralSeparator, "zero");
                      if (needsPluralHandling) {
                        finalKeys.push(key + pluralSuffix);
                        if (needsZeroSuffixLookup) {
                          finalKeys.push(key + zeroSuffix);
                        }
                      }
                      if (needsContextHandling) {
                        var contextKey = "".concat(key).concat(_this4.options.contextSeparator).concat(options.context);
                        finalKeys.push(contextKey);
                        if (needsPluralHandling) {
                          finalKeys.push(contextKey + pluralSuffix);
                          if (needsZeroSuffixLookup) {
                            finalKeys.push(contextKey + zeroSuffix);
                          }
                        }
                      }
                    }
                    var possibleKey;
                    while (possibleKey = finalKeys.pop()) {
                      if (!_this4.isValidLookup(found)) {
                        exactUsedKey = possibleKey;
                        found = _this4.getResource(code, ns, possibleKey, options);
                      }
                    }
                  });
                });
              });
              return {
                res: found,
                usedKey: usedKey,
                exactUsedKey: exactUsedKey,
                usedLng: usedLng,
                usedNS: usedNS
              };
            }
          }, {
            key: "isValidLookup",
            value: function isValidLookup(res) {
              return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
            }
          }, {
            key: "getResource",
            value: function getResource(code, ns, key) {
              var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
              if (this.i18nFormat && this.i18nFormat.getResource) return this.i18nFormat.getResource(code, ns, key, options);
              return this.resourceStore.getResource(code, ns, key, options);
            }
          }], [{
            key: "hasDefaultValue",
            value: function hasDefaultValue(options) {
              var prefix = 'defaultValue';
              for (var option in options) {
                if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && undefined !== options[option]) {
                  return true;
                }
              }
              return false;
            }
          }]);
          return Translator;
        }(EventEmitter);
        function capitalize(string) {
          return string.charAt(0).toUpperCase() + string.slice(1);
        }
        var LanguageUtil = function () {
          function LanguageUtil(options) {
            _classCallCheck$1(this, LanguageUtil);
            this.options = options;
            this.supportedLngs = this.options.supportedLngs || false;
            this.logger = baseLogger.create('languageUtils');
          }
          _createClass$1(LanguageUtil, [{
            key: "getScriptPartFromCode",
            value: function getScriptPartFromCode(code) {
              if (!code || code.indexOf('-') < 0) return null;
              var p = code.split('-');
              if (p.length === 2) return null;
              p.pop();
              if (p[p.length - 1].toLowerCase() === 'x') return null;
              return this.formatLanguageCode(p.join('-'));
            }
          }, {
            key: "getLanguagePartFromCode",
            value: function getLanguagePartFromCode(code) {
              if (!code || code.indexOf('-') < 0) return code;
              var p = code.split('-');
              return this.formatLanguageCode(p[0]);
            }
          }, {
            key: "formatLanguageCode",
            value: function formatLanguageCode(code) {
              if (typeof code === 'string' && code.indexOf('-') > -1) {
                var specialCases = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
                var p = code.split('-');
                if (this.options.lowerCaseLng) {
                  p = p.map(function (part) {
                    return part.toLowerCase();
                  });
                } else if (p.length === 2) {
                  p[0] = p[0].toLowerCase();
                  p[1] = p[1].toUpperCase();
                  if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
                } else if (p.length === 3) {
                  p[0] = p[0].toLowerCase();
                  if (p[1].length === 2) p[1] = p[1].toUpperCase();
                  if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();
                  if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
                  if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize(p[2].toLowerCase());
                }
                return p.join('-');
              }
              return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
            }
          }, {
            key: "isSupportedCode",
            value: function isSupportedCode(code) {
              if (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) {
                code = this.getLanguagePartFromCode(code);
              }
              return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
            }
          }, {
            key: "getBestMatchFromCodes",
            value: function getBestMatchFromCodes(codes) {
              var _this = this;
              if (!codes) return null;
              var found;
              codes.forEach(function (code) {
                if (found) return;
                var cleanedLng = _this.formatLanguageCode(code);
                if (!_this.options.supportedLngs || _this.isSupportedCode(cleanedLng)) found = cleanedLng;
              });
              if (!found && this.options.supportedLngs) {
                codes.forEach(function (code) {
                  if (found) return;
                  var lngOnly = _this.getLanguagePartFromCode(code);
                  if (_this.isSupportedCode(lngOnly)) return found = lngOnly;
                  found = _this.options.supportedLngs.find(function (supportedLng) {
                    if (supportedLng.indexOf(lngOnly) === 0) return supportedLng;
                  });
                });
              }
              if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
              return found;
            }
          }, {
            key: "getFallbackCodes",
            value: function getFallbackCodes(fallbacks, code) {
              if (!fallbacks) return [];
              if (typeof fallbacks === 'function') fallbacks = fallbacks(code);
              if (typeof fallbacks === 'string') fallbacks = [fallbacks];
              if (Object.prototype.toString.apply(fallbacks) === '[object Array]') return fallbacks;
              if (!code) return fallbacks["default"] || [];
              var found = fallbacks[code];
              if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
              if (!found) found = fallbacks[this.formatLanguageCode(code)];
              if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
              if (!found) found = fallbacks["default"];
              return found || [];
            }
          }, {
            key: "toResolveHierarchy",
            value: function toResolveHierarchy(code, fallbackCode) {
              var _this2 = this;
              var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
              var codes = [];
              var addCode = function addCode(c) {
                if (!c) return;
                if (_this2.isSupportedCode(c)) {
                  codes.push(c);
                } else {
                  _this2.logger.warn("rejecting language code not found in supportedLngs: ".concat(c));
                }
              };
              if (typeof code === 'string' && code.indexOf('-') > -1) {
                if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code));
                if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code));
                if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
              } else if (typeof code === 'string') {
                addCode(this.formatLanguageCode(code));
              }
              fallbackCodes.forEach(function (fc) {
                if (codes.indexOf(fc) < 0) addCode(_this2.formatLanguageCode(fc));
              });
              return codes;
            }
          }]);
          return LanguageUtil;
        }();
        var sets = [{
          lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'pt', 'pt-BR', 'tg', 'tl', 'ti', 'tr', 'uz', 'wa'],
          nr: [1, 2],
          fc: 1
        }, {
          lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'hi', 'hu', 'hy', 'ia', 'it', 'kk', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt-PT', 'rm', 'sco', 'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'],
          nr: [1, 2],
          fc: 2
        }, {
          lngs: ['ay', 'bo', 'cgg', 'fa', 'ht', 'id', 'ja', 'jbo', 'ka', 'km', 'ko', 'ky', 'lo', 'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'],
          nr: [1],
          fc: 3
        }, {
          lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
          nr: [1, 2, 5],
          fc: 4
        }, {
          lngs: ['ar'],
          nr: [0, 1, 2, 3, 11, 100],
          fc: 5
        }, {
          lngs: ['cs', 'sk'],
          nr: [1, 2, 5],
          fc: 6
        }, {
          lngs: ['csb', 'pl'],
          nr: [1, 2, 5],
          fc: 7
        }, {
          lngs: ['cy'],
          nr: [1, 2, 3, 8],
          fc: 8
        }, {
          lngs: ['fr'],
          nr: [1, 2],
          fc: 9
        }, {
          lngs: ['ga'],
          nr: [1, 2, 3, 7, 11],
          fc: 10
        }, {
          lngs: ['gd'],
          nr: [1, 2, 3, 20],
          fc: 11
        }, {
          lngs: ['is'],
          nr: [1, 2],
          fc: 12
        }, {
          lngs: ['jv'],
          nr: [0, 1],
          fc: 13
        }, {
          lngs: ['kw'],
          nr: [1, 2, 3, 4],
          fc: 14
        }, {
          lngs: ['lt'],
          nr: [1, 2, 10],
          fc: 15
        }, {
          lngs: ['lv'],
          nr: [1, 2, 0],
          fc: 16
        }, {
          lngs: ['mk'],
          nr: [1, 2],
          fc: 17
        }, {
          lngs: ['mnk'],
          nr: [0, 1, 2],
          fc: 18
        }, {
          lngs: ['mt'],
          nr: [1, 2, 11, 20],
          fc: 19
        }, {
          lngs: ['or'],
          nr: [2, 1],
          fc: 2
        }, {
          lngs: ['ro'],
          nr: [1, 2, 20],
          fc: 20
        }, {
          lngs: ['sl'],
          nr: [5, 1, 2, 3],
          fc: 21
        }, {
          lngs: ['he', 'iw'],
          nr: [1, 2, 20, 21],
          fc: 22
        }];
        var _rulesPluralsTypes = {
          1: function _(n) {
            return Number(n > 1);
          },
          2: function _(n) {
            return Number(n != 1);
          },
          3: function _(n) {
            return 0;
          },
          4: function _(n) {
            return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
          },
          5: function _(n) {
            return Number(n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
          },
          6: function _(n) {
            return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
          },
          7: function _(n) {
            return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
          },
          8: function _(n) {
            return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
          },
          9: function _(n) {
            return Number(n >= 2);
          },
          10: function _(n) {
            return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
          },
          11: function _(n) {
            return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
          },
          12: function _(n) {
            return Number(n % 10 != 1 || n % 100 == 11);
          },
          13: function _(n) {
            return Number(n !== 0);
          },
          14: function _(n) {
            return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
          },
          15: function _(n) {
            return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
          },
          16: function _(n) {
            return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
          },
          17: function _(n) {
            return Number(n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1);
          },
          18: function _(n) {
            return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
          },
          19: function _(n) {
            return Number(n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
          },
          20: function _(n) {
            return Number(n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
          },
          21: function _(n) {
            return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
          },
          22: function _(n) {
            return Number(n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3);
          }
        };
        var deprecatedJsonVersions = ['v1', 'v2', 'v3'];
        var suffixesOrder = {
          zero: 0,
          one: 1,
          two: 2,
          few: 3,
          many: 4,
          other: 5
        };
        function createRules() {
          var rules = {};
          sets.forEach(function (set) {
            set.lngs.forEach(function (l) {
              rules[l] = {
                numbers: set.nr,
                plurals: _rulesPluralsTypes[set.fc]
              };
            });
          });
          return rules;
        }
        var PluralResolver = function () {
          function PluralResolver(languageUtils) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            _classCallCheck$1(this, PluralResolver);
            this.languageUtils = languageUtils;
            this.options = options;
            this.logger = baseLogger.create('pluralResolver');
            if ((!this.options.compatibilityJSON || this.options.compatibilityJSON === 'v4') && (typeof Intl === 'undefined' || !Intl.PluralRules)) {
              this.options.compatibilityJSON = 'v3';
              this.logger.error('Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.');
            }
            this.rules = createRules();
          }
          _createClass$1(PluralResolver, [{
            key: "addRule",
            value: function addRule(lng, obj) {
              this.rules[lng] = obj;
            }
          }, {
            key: "getRule",
            value: function getRule(code) {
              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              if (this.shouldUseIntlApi()) {
                try {
                  return new Intl.PluralRules(code, {
                    type: options.ordinal ? 'ordinal' : 'cardinal'
                  });
                } catch (_unused) {
                  return;
                }
              }
              return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
            }
          }, {
            key: "needsPlural",
            value: function needsPlural(code) {
              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              var rule = this.getRule(code, options);
              if (this.shouldUseIntlApi()) {
                return rule && rule.resolvedOptions().pluralCategories.length > 1;
              }
              return rule && rule.numbers.length > 1;
            }
          }, {
            key: "getPluralFormsOfKey",
            value: function getPluralFormsOfKey(code, key) {
              var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
              return this.getSuffixes(code, options).map(function (suffix) {
                return "".concat(key).concat(suffix);
              });
            }
          }, {
            key: "getSuffixes",
            value: function getSuffixes(code) {
              var _this = this;
              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              var rule = this.getRule(code, options);
              if (!rule) {
                return [];
              }
              if (this.shouldUseIntlApi()) {
                return rule.resolvedOptions().pluralCategories.sort(function (pluralCategory1, pluralCategory2) {
                  return suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2];
                }).map(function (pluralCategory) {
                  return "".concat(_this.options.prepend).concat(pluralCategory);
                });
              }
              return rule.numbers.map(function (number) {
                return _this.getSuffix(code, number, options);
              });
            }
          }, {
            key: "getSuffix",
            value: function getSuffix(code, count) {
              var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
              var rule = this.getRule(code, options);
              if (rule) {
                if (this.shouldUseIntlApi()) {
                  return "".concat(this.options.prepend).concat(rule.select(count));
                }
                return this.getSuffixRetroCompatible(rule, count);
              }
              this.logger.warn("no plural rule found for: ".concat(code));
              return '';
            }
          }, {
            key: "getSuffixRetroCompatible",
            value: function getSuffixRetroCompatible(rule, count) {
              var _this2 = this;
              var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
              var suffix = rule.numbers[idx];
              if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
                if (suffix === 2) {
                  suffix = 'plural';
                } else if (suffix === 1) {
                  suffix = '';
                }
              }
              var returnSuffix = function returnSuffix() {
                return _this2.options.prepend && suffix.toString() ? _this2.options.prepend + suffix.toString() : suffix.toString();
              };
              if (this.options.compatibilityJSON === 'v1') {
                if (suffix === 1) return '';
                if (typeof suffix === 'number') return "_plural_".concat(suffix.toString());
                return returnSuffix();
              } else if (this.options.compatibilityJSON === 'v2') {
                return returnSuffix();
              } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
                return returnSuffix();
              }
              return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
            }
          }, {
            key: "shouldUseIntlApi",
            value: function shouldUseIntlApi() {
              return !deprecatedJsonVersions.includes(this.options.compatibilityJSON);
            }
          }]);
          return PluralResolver;
        }();
        function ownKeys$3$1(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) {
              symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            }
            keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread$3$1(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys$3$1(Object(source), true).forEach(function (key) {
                _defineProperty$2(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys$3$1(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }
          return target;
        }
        var Interpolator = function () {
          function Interpolator() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            _classCallCheck$1(this, Interpolator);
            this.logger = baseLogger.create('interpolator');
            this.options = options;
            this.format = options.interpolation && options.interpolation.format || function (value) {
              return value;
            };
            this.init(options);
          }
          _createClass$1(Interpolator, [{
            key: "init",
            value: function init() {
              var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              if (!options.interpolation) options.interpolation = {
                escapeValue: true
              };
              var iOpts = options.interpolation;
              this.escape = iOpts.escape !== undefined ? iOpts.escape : escape;
              this.escapeValue = iOpts.escapeValue !== undefined ? iOpts.escapeValue : true;
              this.useRawValueToEscape = iOpts.useRawValueToEscape !== undefined ? iOpts.useRawValueToEscape : false;
              this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || '{{';
              this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || '}}';
              this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
              this.unescapePrefix = iOpts.unescapeSuffix ? '' : iOpts.unescapePrefix || '-';
              this.unescapeSuffix = this.unescapePrefix ? '' : iOpts.unescapeSuffix || '';
              this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape('$t(');
              this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(')');
              this.nestingOptionsSeparator = iOpts.nestingOptionsSeparator ? iOpts.nestingOptionsSeparator : iOpts.nestingOptionsSeparator || ',';
              this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1000;
              this.alwaysFormat = iOpts.alwaysFormat !== undefined ? iOpts.alwaysFormat : false;
              this.resetRegExp();
            }
          }, {
            key: "reset",
            value: function reset() {
              if (this.options) this.init(this.options);
            }
          }, {
            key: "resetRegExp",
            value: function resetRegExp() {
              var regexpStr = "".concat(this.prefix, "(.+?)").concat(this.suffix);
              this.regexp = new RegExp(regexpStr, 'g');
              var regexpUnescapeStr = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
              this.regexpUnescape = new RegExp(regexpUnescapeStr, 'g');
              var nestingRegexpStr = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
              this.nestingRegexp = new RegExp(nestingRegexpStr, 'g');
            }
          }, {
            key: "interpolate",
            value: function interpolate(str, data, lng, options) {
              var _this = this;
              var match;
              var value;
              var replaces;
              var defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
              function regexSafe(val) {
                return val.replace(/\$/g, '$$$$');
              }
              var handleFormat = function handleFormat(key) {
                if (key.indexOf(_this.formatSeparator) < 0) {
                  var path = getPathWithDefaults(data, defaultData, key);
                  return _this.alwaysFormat ? _this.format(path, undefined, lng, _objectSpread$3$1(_objectSpread$3$1(_objectSpread$3$1({}, options), data), {}, {
                    interpolationkey: key
                  })) : path;
                }
                var p = key.split(_this.formatSeparator);
                var k = p.shift().trim();
                var f = p.join(_this.formatSeparator).trim();
                return _this.format(getPathWithDefaults(data, defaultData, k), f, lng, _objectSpread$3$1(_objectSpread$3$1(_objectSpread$3$1({}, options), data), {}, {
                  interpolationkey: k
                }));
              };
              this.resetRegExp();
              var missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
              var skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
              var todos = [{
                regex: this.regexpUnescape,
                safeValue: function safeValue(val) {
                  return regexSafe(val);
                }
              }, {
                regex: this.regexp,
                safeValue: function safeValue(val) {
                  return _this.escapeValue ? regexSafe(_this.escape(val)) : regexSafe(val);
                }
              }];
              todos.forEach(function (todo) {
                replaces = 0;
                while (match = todo.regex.exec(str)) {
                  var matchedVar = match[1].trim();
                  value = handleFormat(matchedVar);
                  if (value === undefined) {
                    if (typeof missingInterpolationHandler === 'function') {
                      var temp = missingInterpolationHandler(str, match, options);
                      value = typeof temp === 'string' ? temp : '';
                    } else if (options && options.hasOwnProperty(matchedVar)) {
                      value = '';
                    } else if (skipOnVariables) {
                      value = match[0];
                      continue;
                    } else {
                      _this.logger.warn("missed to pass in variable ".concat(matchedVar, " for interpolating ").concat(str));
                      value = '';
                    }
                  } else if (typeof value !== 'string' && !_this.useRawValueToEscape) {
                    value = makeString(value);
                  }
                  var safeValue = todo.safeValue(value);
                  str = str.replace(match[0], safeValue);
                  if (skipOnVariables) {
                    todo.regex.lastIndex += value.length;
                    todo.regex.lastIndex -= match[0].length;
                  } else {
                    todo.regex.lastIndex = 0;
                  }
                  replaces++;
                  if (replaces >= _this.maxReplaces) {
                    break;
                  }
                }
              });
              return str;
            }
          }, {
            key: "nest",
            value: function nest(str, fc) {
              var _this2 = this;
              var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
              var match;
              var value;
              var clonedOptions = _objectSpread$3$1({}, options);
              clonedOptions.applyPostProcessor = false;
              delete clonedOptions.defaultValue;
              function handleHasOptions(key, inheritedOptions) {
                var sep = this.nestingOptionsSeparator;
                if (key.indexOf(sep) < 0) return key;
                var c = key.split(new RegExp("".concat(sep, "[ ]*{")));
                var optionsString = "{".concat(c[1]);
                key = c[0];
                optionsString = this.interpolate(optionsString, clonedOptions);
                var matchedSingleQuotes = optionsString.match(/'/g);
                var matchedDoubleQuotes = optionsString.match(/"/g);
                if (matchedSingleQuotes && matchedSingleQuotes.length % 2 === 0 && !matchedDoubleQuotes || matchedDoubleQuotes.length % 2 !== 0) {
                  optionsString = optionsString.replace(/'/g, '"');
                }
                try {
                  clonedOptions = JSON.parse(optionsString);
                  if (inheritedOptions) clonedOptions = _objectSpread$3$1(_objectSpread$3$1({}, inheritedOptions), clonedOptions);
                } catch (e) {
                  this.logger.warn("failed parsing options string in nesting for key ".concat(key), e);
                  return "".concat(key).concat(sep).concat(optionsString);
                }
                delete clonedOptions.defaultValue;
                return key;
              }
              while (match = this.nestingRegexp.exec(str)) {
                var formatters = [];
                var doReduce = false;
                if (match[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match[1])) {
                  var r = match[1].split(this.formatSeparator).map(function (elem) {
                    return elem.trim();
                  });
                  match[1] = r.shift();
                  formatters = r;
                  doReduce = true;
                }
                value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
                if (value && match[0] === str && typeof value !== 'string') return value;
                if (typeof value !== 'string') value = makeString(value);
                if (!value) {
                  this.logger.warn("missed to resolve ".concat(match[1], " for nesting ").concat(str));
                  value = '';
                }
                if (doReduce) {
                  value = formatters.reduce(function (v, f) {
                    return _this2.format(v, f, options.lng, _objectSpread$3$1(_objectSpread$3$1({}, options), {}, {
                      interpolationkey: match[1].trim()
                    }));
                  }, value.trim());
                }
                str = str.replace(match[0], value);
                this.regexp.lastIndex = 0;
              }
              return str;
            }
          }]);
          return Interpolator;
        }();
        function ownKeys$4(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) {
              symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            }
            keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread$4(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys$4(Object(source), true).forEach(function (key) {
                _defineProperty$2(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys$4(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }
          return target;
        }
        function parseFormatStr(formatStr) {
          var formatName = formatStr.toLowerCase().trim();
          var formatOptions = {};
          if (formatStr.indexOf('(') > -1) {
            var p = formatStr.split('(');
            formatName = p[0].toLowerCase().trim();
            var optStr = p[1].substring(0, p[1].length - 1);
            if (formatName === 'currency' && optStr.indexOf(':') < 0) {
              if (!formatOptions.currency) formatOptions.currency = optStr.trim();
            } else if (formatName === 'relativetime' && optStr.indexOf(':') < 0) {
              if (!formatOptions.range) formatOptions.range = optStr.trim();
            } else {
              var opts = optStr.split(';');
              opts.forEach(function (opt) {
                if (!opt) return;
                var _opt$split = opt.split(':'),
                  _opt$split2 = _toArray(_opt$split),
                  key = _opt$split2[0],
                  rest = _opt$split2.slice(1);
                var val = rest.join(':').trim().replace(/^'+|'+$/g, '');
                if (!formatOptions[key.trim()]) formatOptions[key.trim()] = val;
                if (val === 'false') formatOptions[key.trim()] = false;
                if (val === 'true') formatOptions[key.trim()] = true;
                if (!isNaN(val)) formatOptions[key.trim()] = parseInt(val, 10);
              });
            }
          }
          return {
            formatName: formatName,
            formatOptions: formatOptions
          };
        }
        function createCachedFormatter(fn) {
          var cache = {};
          return function invokeFormatter(val, lng, options) {
            var key = lng + JSON.stringify(options);
            var formatter = cache[key];
            if (!formatter) {
              formatter = fn(lng, options);
              cache[key] = formatter;
            }
            return formatter(val);
          };
        }
        var Formatter = function () {
          function Formatter() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            _classCallCheck$1(this, Formatter);
            this.logger = baseLogger.create('formatter');
            this.options = options;
            this.formats = {
              number: createCachedFormatter(function (lng, options) {
                var formatter = new Intl.NumberFormat(lng, options);
                return function (val) {
                  return formatter.format(val);
                };
              }),
              currency: createCachedFormatter(function (lng, options) {
                var formatter = new Intl.NumberFormat(lng, _objectSpread$4(_objectSpread$4({}, options), {}, {
                  style: 'currency'
                }));
                return function (val) {
                  return formatter.format(val);
                };
              }),
              datetime: createCachedFormatter(function (lng, options) {
                var formatter = new Intl.DateTimeFormat(lng, _objectSpread$4({}, options));
                return function (val) {
                  return formatter.format(val);
                };
              }),
              relativetime: createCachedFormatter(function (lng, options) {
                var formatter = new Intl.RelativeTimeFormat(lng, _objectSpread$4({}, options));
                return function (val) {
                  return formatter.format(val, options.range || 'day');
                };
              }),
              list: createCachedFormatter(function (lng, options) {
                var formatter = new Intl.ListFormat(lng, _objectSpread$4({}, options));
                return function (val) {
                  return formatter.format(val);
                };
              })
            };
            this.init(options);
          }
          _createClass$1(Formatter, [{
            key: "init",
            value: function init(services) {
              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                interpolation: {}
              };
              var iOpts = options.interpolation;
              this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
            }
          }, {
            key: "add",
            value: function add(name, fc) {
              this.formats[name.toLowerCase().trim()] = fc;
            }
          }, {
            key: "addCached",
            value: function addCached(name, fc) {
              this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
            }
          }, {
            key: "format",
            value: function format(value, _format, lng, options) {
              var _this = this;
              var formats = _format.split(this.formatSeparator);
              var result = formats.reduce(function (mem, f) {
                var _parseFormatStr = parseFormatStr(f),
                  formatName = _parseFormatStr.formatName,
                  formatOptions = _parseFormatStr.formatOptions;
                if (_this.formats[formatName]) {
                  var formatted = mem;
                  try {
                    var valOptions = options && options.formatParams && options.formatParams[options.interpolationkey] || {};
                    var l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
                    formatted = _this.formats[formatName](mem, l, _objectSpread$4(_objectSpread$4(_objectSpread$4({}, formatOptions), options), valOptions));
                  } catch (error) {
                    _this.logger.warn(error);
                  }
                  return formatted;
                } else {
                  _this.logger.warn("there was no format function for ".concat(formatName));
                }
                return mem;
              }, value);
              return result;
            }
          }]);
          return Formatter;
        }();
        function ownKeys$5(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) {
              symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            }
            keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread$5(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys$5(Object(source), true).forEach(function (key) {
                _defineProperty$2(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys$5(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }
          return target;
        }
        function _createSuper$2(Derived) {
          var hasNativeReflectConstruct = _isNativeReflectConstruct$2();
          return function _createSuperInternal() {
            var Super = _getPrototypeOf(Derived),
              result;
            if (hasNativeReflectConstruct) {
              var NewTarget = _getPrototypeOf(this).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }
            return _possibleConstructorReturn(this, result);
          };
        }
        function _isNativeReflectConstruct$2() {
          if (typeof Reflect === "undefined" || !Reflect.construct) return false;
          if (Reflect.construct.sham) return false;
          if (typeof Proxy === "function") return true;
          try {
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
            return true;
          } catch (e) {
            return false;
          }
        }
        function removePending(q, name) {
          if (q.pending[name] !== undefined) {
            delete q.pending[name];
            q.pendingCount--;
          }
        }
        var Connector = function (_EventEmitter) {
          _inherits(Connector, _EventEmitter);
          var _super = _createSuper$2(Connector);
          function Connector(backend, store, services) {
            var _this;
            var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            _classCallCheck$1(this, Connector);
            _this = _super.call(this);
            if (isIE10) {
              EventEmitter.call(_assertThisInitialized(_this));
            }
            _this.backend = backend;
            _this.store = store;
            _this.services = services;
            _this.languageUtils = services.languageUtils;
            _this.options = options;
            _this.logger = baseLogger.create('backendConnector');
            _this.waitingReads = [];
            _this.maxParallelReads = options.maxParallelReads || 10;
            _this.readingCalls = 0;
            _this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
            _this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
            _this.state = {};
            _this.queue = [];
            if (_this.backend && _this.backend.init) {
              _this.backend.init(services, options.backend, options);
            }
            return _this;
          }
          _createClass$1(Connector, [{
            key: "queueLoad",
            value: function queueLoad(languages, namespaces, options, callback) {
              var _this2 = this;
              var toLoad = {};
              var pending = {};
              var toLoadLanguages = {};
              var toLoadNamespaces = {};
              languages.forEach(function (lng) {
                var hasAllNamespaces = true;
                namespaces.forEach(function (ns) {
                  var name = "".concat(lng, "|").concat(ns);
                  if (!options.reload && _this2.store.hasResourceBundle(lng, ns)) {
                    _this2.state[name] = 2;
                  } else if (_this2.state[name] < 0) ;else if (_this2.state[name] === 1) {
                    if (pending[name] === undefined) pending[name] = true;
                  } else {
                    _this2.state[name] = 1;
                    hasAllNamespaces = false;
                    if (pending[name] === undefined) pending[name] = true;
                    if (toLoad[name] === undefined) toLoad[name] = true;
                    if (toLoadNamespaces[ns] === undefined) toLoadNamespaces[ns] = true;
                  }
                });
                if (!hasAllNamespaces) toLoadLanguages[lng] = true;
              });
              if (Object.keys(toLoad).length || Object.keys(pending).length) {
                this.queue.push({
                  pending: pending,
                  pendingCount: Object.keys(pending).length,
                  loaded: {},
                  errors: [],
                  callback: callback
                });
              }
              return {
                toLoad: Object.keys(toLoad),
                pending: Object.keys(pending),
                toLoadLanguages: Object.keys(toLoadLanguages),
                toLoadNamespaces: Object.keys(toLoadNamespaces)
              };
            }
          }, {
            key: "loaded",
            value: function loaded(name, err, data) {
              var s = name.split('|');
              var lng = s[0];
              var ns = s[1];
              if (err) this.emit('failedLoading', lng, ns, err);
              if (data) {
                this.store.addResourceBundle(lng, ns, data);
              }
              this.state[name] = err ? -1 : 2;
              var loaded = {};
              this.queue.forEach(function (q) {
                pushPath(q.loaded, [lng], ns);
                removePending(q, name);
                if (err) q.errors.push(err);
                if (q.pendingCount === 0 && !q.done) {
                  Object.keys(q.loaded).forEach(function (l) {
                    if (!loaded[l]) loaded[l] = {};
                    var loadedKeys = q.loaded[l];
                    if (loadedKeys.length) {
                      loadedKeys.forEach(function (ns) {
                        if (loaded[l][ns] === undefined) loaded[l][ns] = true;
                      });
                    }
                  });
                  q.done = true;
                  if (q.errors.length) {
                    q.callback(q.errors);
                  } else {
                    q.callback();
                  }
                }
              });
              this.emit('loaded', loaded);
              this.queue = this.queue.filter(function (q) {
                return !q.done;
              });
            }
          }, {
            key: "read",
            value: function read(lng, ns, fcName) {
              var _this3 = this;
              var tried = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
              var wait = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.retryTimeout;
              var callback = arguments.length > 5 ? arguments[5] : undefined;
              if (!lng.length) return callback(null, {});
              if (this.readingCalls >= this.maxParallelReads) {
                this.waitingReads.push({
                  lng: lng,
                  ns: ns,
                  fcName: fcName,
                  tried: tried,
                  wait: wait,
                  callback: callback
                });
                return;
              }
              this.readingCalls++;
              return this.backend[fcName](lng, ns, function (err, data) {
                _this3.readingCalls--;
                if (_this3.waitingReads.length > 0) {
                  var next = _this3.waitingReads.shift();
                  _this3.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
                }
                if (err && data && tried < _this3.maxRetries) {
                  setTimeout(function () {
                    _this3.read.call(_this3, lng, ns, fcName, tried + 1, wait * 2, callback);
                  }, wait);
                  return;
                }
                callback(err, data);
              });
            }
          }, {
            key: "prepareLoading",
            value: function prepareLoading(languages, namespaces) {
              var _this4 = this;
              var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
              var callback = arguments.length > 3 ? arguments[3] : undefined;
              if (!this.backend) {
                this.logger.warn('No backend was added via i18next.use. Will not load resources.');
                return callback && callback();
              }
              if (typeof languages === 'string') languages = this.languageUtils.toResolveHierarchy(languages);
              if (typeof namespaces === 'string') namespaces = [namespaces];
              var toLoad = this.queueLoad(languages, namespaces, options, callback);
              if (!toLoad.toLoad.length) {
                if (!toLoad.pending.length) callback();
                return null;
              }
              toLoad.toLoad.forEach(function (name) {
                _this4.loadOne(name);
              });
            }
          }, {
            key: "load",
            value: function load(languages, namespaces, callback) {
              this.prepareLoading(languages, namespaces, {}, callback);
            }
          }, {
            key: "reload",
            value: function reload(languages, namespaces, callback) {
              this.prepareLoading(languages, namespaces, {
                reload: true
              }, callback);
            }
          }, {
            key: "loadOne",
            value: function loadOne(name) {
              var _this5 = this;
              var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
              var s = name.split('|');
              var lng = s[0];
              var ns = s[1];
              this.read(lng, ns, 'read', undefined, undefined, function (err, data) {
                if (err) _this5.logger.warn("".concat(prefix, "loading namespace ").concat(ns, " for language ").concat(lng, " failed"), err);
                if (!err && data) _this5.logger.log("".concat(prefix, "loaded namespace ").concat(ns, " for language ").concat(lng), data);
                _this5.loaded(name, err, data);
              });
            }
          }, {
            key: "saveMissing",
            value: function saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
              var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
              if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
                this.logger.warn("did not save key \"".concat(key, "\" as the namespace \"").concat(namespace, "\" was not yet loaded"), 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
                return;
              }
              if (key === undefined || key === null || key === '') return;
              if (this.backend && this.backend.create) {
                this.backend.create(languages, namespace, key, fallbackValue, null, _objectSpread$5(_objectSpread$5({}, options), {}, {
                  isUpdate: isUpdate
                }));
              }
              if (!languages || !languages[0]) return;
              this.store.addResource(languages[0], namespace, key, fallbackValue);
            }
          }]);
          return Connector;
        }(EventEmitter);
        function get() {
          return {
            debug: false,
            initImmediate: true,
            ns: ['translation'],
            defaultNS: ['translation'],
            fallbackLng: ['dev'],
            fallbackNS: false,
            supportedLngs: false,
            nonExplicitSupportedLngs: false,
            load: 'all',
            preload: false,
            simplifyPluralSuffix: true,
            keySeparator: '.',
            nsSeparator: ':',
            pluralSeparator: '_',
            contextSeparator: '_',
            partialBundledLanguages: false,
            saveMissing: false,
            updateMissing: false,
            saveMissingTo: 'fallback',
            saveMissingPlurals: true,
            missingKeyHandler: false,
            missingInterpolationHandler: false,
            postProcess: false,
            postProcessPassResolved: false,
            returnNull: true,
            returnEmptyString: true,
            returnObjects: false,
            joinArrays: false,
            returnedObjectHandler: false,
            parseMissingKeyHandler: false,
            appendNamespaceToMissingKey: false,
            appendNamespaceToCIMode: false,
            overloadTranslationOptionHandler: function handle(args) {
              var ret = {};
              if (_typeof$3(args[1]) === 'object') ret = args[1];
              if (typeof args[1] === 'string') ret.defaultValue = args[1];
              if (typeof args[2] === 'string') ret.tDescription = args[2];
              if (_typeof$3(args[2]) === 'object' || _typeof$3(args[3]) === 'object') {
                var options = args[3] || args[2];
                Object.keys(options).forEach(function (key) {
                  ret[key] = options[key];
                });
              }
              return ret;
            },
            interpolation: {
              escapeValue: true,
              format: function format(value, _format, lng, options) {
                return value;
              },
              prefix: '{{',
              suffix: '}}',
              formatSeparator: ',',
              unescapePrefix: '-',
              nestingPrefix: '$t(',
              nestingSuffix: ')',
              nestingOptionsSeparator: ',',
              maxReplaces: 1000,
              skipOnVariables: true
            }
          };
        }
        function transformOptions(options) {
          if (typeof options.ns === 'string') options.ns = [options.ns];
          if (typeof options.fallbackLng === 'string') options.fallbackLng = [options.fallbackLng];
          if (typeof options.fallbackNS === 'string') options.fallbackNS = [options.fallbackNS];
          if (options.supportedLngs && options.supportedLngs.indexOf('cimode') < 0) {
            options.supportedLngs = options.supportedLngs.concat(['cimode']);
          }
          return options;
        }
        function ownKeys$6(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) {
              symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            }
            keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread$6(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys$6(Object(source), true).forEach(function (key) {
                _defineProperty$2(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys$6(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }
          return target;
        }
        function _createSuper$3(Derived) {
          var hasNativeReflectConstruct = _isNativeReflectConstruct$3();
          return function _createSuperInternal() {
            var Super = _getPrototypeOf(Derived),
              result;
            if (hasNativeReflectConstruct) {
              var NewTarget = _getPrototypeOf(this).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }
            return _possibleConstructorReturn(this, result);
          };
        }
        function _isNativeReflectConstruct$3() {
          if (typeof Reflect === "undefined" || !Reflect.construct) return false;
          if (Reflect.construct.sham) return false;
          if (typeof Proxy === "function") return true;
          try {
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
            return true;
          } catch (e) {
            return false;
          }
        }
        function noop() {}
        function bindMemberFunctions(inst) {
          var mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
          mems.forEach(function (mem) {
            if (typeof inst[mem] === 'function') {
              inst[mem] = inst[mem].bind(inst);
            }
          });
        }
        var I18n = function (_EventEmitter) {
          _inherits(I18n, _EventEmitter);
          var _super = _createSuper$3(I18n);
          function I18n() {
            var _this;
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments.length > 1 ? arguments[1] : undefined;
            _classCallCheck$1(this, I18n);
            _this = _super.call(this);
            if (isIE10) {
              EventEmitter.call(_assertThisInitialized(_this));
            }
            _this.options = transformOptions(options);
            _this.services = {};
            _this.logger = baseLogger;
            _this.modules = {
              external: []
            };
            bindMemberFunctions(_assertThisInitialized(_this));
            if (callback && !_this.isInitialized && !options.isClone) {
              if (!_this.options.initImmediate) {
                _this.init(options, callback);
                return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
              }
              setTimeout(function () {
                _this.init(options, callback);
              }, 0);
            }
            return _this;
          }
          _createClass$1(I18n, [{
            key: "init",
            value: function init() {
              var _this2 = this;
              var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              var callback = arguments.length > 1 ? arguments[1] : undefined;
              if (typeof options === 'function') {
                callback = options;
                options = {};
              }
              if (!options.defaultNS && options.defaultNS !== false && options.ns) {
                if (typeof options.ns === 'string') {
                  options.defaultNS = options.ns;
                } else if (options.ns.indexOf('translation') < 0) {
                  options.defaultNS = options.ns[0];
                }
              }
              var defOpts = get();
              this.options = _objectSpread$6(_objectSpread$6(_objectSpread$6({}, defOpts), this.options), transformOptions(options));
              if (this.options.compatibilityAPI !== 'v1') {
                this.options.interpolation = _objectSpread$6(_objectSpread$6({}, defOpts.interpolation), this.options.interpolation);
              }
              if (options.keySeparator !== undefined) {
                this.options.userDefinedKeySeparator = options.keySeparator;
              }
              if (options.nsSeparator !== undefined) {
                this.options.userDefinedNsSeparator = options.nsSeparator;
              }
              function createClassOnDemand(ClassOrObject) {
                if (!ClassOrObject) return null;
                if (typeof ClassOrObject === 'function') return new ClassOrObject();
                return ClassOrObject;
              }
              if (!this.options.isClone) {
                if (this.modules.logger) {
                  baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
                } else {
                  baseLogger.init(null, this.options);
                }
                var formatter;
                if (this.modules.formatter) {
                  formatter = this.modules.formatter;
                } else if (typeof Intl !== 'undefined') {
                  formatter = Formatter;
                }
                var lu = new LanguageUtil(this.options);
                this.store = new ResourceStore(this.options.resources, this.options);
                var s = this.services;
                s.logger = baseLogger;
                s.resourceStore = this.store;
                s.languageUtils = lu;
                s.pluralResolver = new PluralResolver(lu, {
                  prepend: this.options.pluralSeparator,
                  compatibilityJSON: this.options.compatibilityJSON,
                  simplifyPluralSuffix: this.options.simplifyPluralSuffix
                });
                if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
                  s.formatter = createClassOnDemand(formatter);
                  s.formatter.init(s, this.options);
                  this.options.interpolation.format = s.formatter.format.bind(s.formatter);
                }
                s.interpolator = new Interpolator(this.options);
                s.utils = {
                  hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                };
                s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
                s.backendConnector.on('*', function (event) {
                  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                  }
                  _this2.emit.apply(_this2, [event].concat(args));
                });
                if (this.modules.languageDetector) {
                  s.languageDetector = createClassOnDemand(this.modules.languageDetector);
                  s.languageDetector.init(s, this.options.detection, this.options);
                }
                if (this.modules.i18nFormat) {
                  s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
                  if (s.i18nFormat.init) s.i18nFormat.init(this);
                }
                this.translator = new Translator(this.services, this.options);
                this.translator.on('*', function (event) {
                  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                    args[_key2 - 1] = arguments[_key2];
                  }
                  _this2.emit.apply(_this2, [event].concat(args));
                });
                this.modules.external.forEach(function (m) {
                  if (m.init) m.init(_this2);
                });
              }
              this.format = this.options.interpolation.format;
              if (!callback) callback = noop;
              if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                var codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                if (codes.length > 0 && codes[0] !== 'dev') this.options.lng = codes[0];
              }
              if (!this.services.languageDetector && !this.options.lng) {
                this.logger.warn('init: no languageDetector is used and no lng is defined');
              }
              var storeApi = ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'];
              storeApi.forEach(function (fcName) {
                _this2[fcName] = function () {
                  var _this2$store;
                  return (_this2$store = _this2.store)[fcName].apply(_this2$store, arguments);
                };
              });
              var storeApiChained = ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'];
              storeApiChained.forEach(function (fcName) {
                _this2[fcName] = function () {
                  var _this2$store2;
                  (_this2$store2 = _this2.store)[fcName].apply(_this2$store2, arguments);
                  return _this2;
                };
              });
              var deferred = defer();
              var load = function load() {
                var finish = function finish(err, t) {
                  if (_this2.isInitialized && !_this2.initializedStoreOnce) _this2.logger.warn('init: i18next is already initialized. You should call init just once!');
                  _this2.isInitialized = true;
                  if (!_this2.options.isClone) _this2.logger.log('initialized', _this2.options);
                  _this2.emit('initialized', _this2.options);
                  deferred.resolve(t);
                  callback(err, t);
                };
                if (_this2.languages && _this2.options.compatibilityAPI !== 'v1' && !_this2.isInitialized) return finish(null, _this2.t.bind(_this2));
                _this2.changeLanguage(_this2.options.lng, finish);
              };
              if (this.options.resources || !this.options.initImmediate) {
                load();
              } else {
                setTimeout(load, 0);
              }
              return deferred;
            }
          }, {
            key: "loadResources",
            value: function loadResources(language) {
              var _this3 = this;
              var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
              var usedCallback = callback;
              var usedLng = typeof language === 'string' ? language : this.language;
              if (typeof language === 'function') usedCallback = language;
              if (!this.options.resources || this.options.partialBundledLanguages) {
                if (usedLng && usedLng.toLowerCase() === 'cimode') return usedCallback();
                var toLoad = [];
                var append = function append(lng) {
                  if (!lng) return;
                  var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);
                  lngs.forEach(function (l) {
                    if (toLoad.indexOf(l) < 0) toLoad.push(l);
                  });
                };
                if (!usedLng) {
                  var fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                  fallbacks.forEach(function (l) {
                    return append(l);
                  });
                } else {
                  append(usedLng);
                }
                if (this.options.preload) {
                  this.options.preload.forEach(function (l) {
                    return append(l);
                  });
                }
                this.services.backendConnector.load(toLoad, this.options.ns, function (e) {
                  if (!e && !_this3.resolvedLanguage && _this3.language) _this3.setResolvedLanguage(_this3.language);
                  usedCallback(e);
                });
              } else {
                usedCallback(null);
              }
            }
          }, {
            key: "reloadResources",
            value: function reloadResources(lngs, ns, callback) {
              var deferred = defer();
              if (!lngs) lngs = this.languages;
              if (!ns) ns = this.options.ns;
              if (!callback) callback = noop;
              this.services.backendConnector.reload(lngs, ns, function (err) {
                deferred.resolve();
                callback(err);
              });
              return deferred;
            }
          }, {
            key: "use",
            value: function use(module) {
              if (!module) throw new Error('You are passing an undefined module! Please check the object you are passing to i18next.use()');
              if (!module.type) throw new Error('You are passing a wrong module! Please check the object you are passing to i18next.use()');
              if (module.type === 'backend') {
                this.modules.backend = module;
              }
              if (module.type === 'logger' || module.log && module.warn && module.error) {
                this.modules.logger = module;
              }
              if (module.type === 'languageDetector') {
                this.modules.languageDetector = module;
              }
              if (module.type === 'i18nFormat') {
                this.modules.i18nFormat = module;
              }
              if (module.type === 'postProcessor') {
                postProcessor.addPostProcessor(module);
              }
              if (module.type === 'formatter') {
                this.modules.formatter = module;
              }
              if (module.type === '3rdParty') {
                this.modules.external.push(module);
              }
              return this;
            }
          }, {
            key: "setResolvedLanguage",
            value: function setResolvedLanguage(l) {
              if (!l || !this.languages) return;
              if (['cimode', 'dev'].indexOf(l) > -1) return;
              for (var li = 0; li < this.languages.length; li++) {
                var lngInLngs = this.languages[li];
                if (['cimode', 'dev'].indexOf(lngInLngs) > -1) continue;
                if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
                  this.resolvedLanguage = lngInLngs;
                  break;
                }
              }
            }
          }, {
            key: "changeLanguage",
            value: function changeLanguage(lng, callback) {
              var _this4 = this;
              this.isLanguageChangingTo = lng;
              var deferred = defer();
              this.emit('languageChanging', lng);
              var setLngProps = function setLngProps(l) {
                _this4.language = l;
                _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l);
                _this4.resolvedLanguage = undefined;
                _this4.setResolvedLanguage(l);
              };
              var done = function done(err, l) {
                if (l) {
                  setLngProps(l);
                  _this4.translator.changeLanguage(l);
                  _this4.isLanguageChangingTo = undefined;
                  _this4.emit('languageChanged', l);
                  _this4.logger.log('languageChanged', l);
                } else {
                  _this4.isLanguageChangingTo = undefined;
                }
                deferred.resolve(function () {
                  return _this4.t.apply(_this4, arguments);
                });
                if (callback) callback(err, function () {
                  return _this4.t.apply(_this4, arguments);
                });
              };
              var setLng = function setLng(lngs) {
                if (!lng && !lngs && _this4.services.languageDetector) lngs = [];
                var l = typeof lngs === 'string' ? lngs : _this4.services.languageUtils.getBestMatchFromCodes(lngs);
                if (l) {
                  if (!_this4.language) {
                    setLngProps(l);
                  }
                  if (!_this4.translator.language) _this4.translator.changeLanguage(l);
                  if (_this4.services.languageDetector) _this4.services.languageDetector.cacheUserLanguage(l);
                }
                _this4.loadResources(l, function (err) {
                  done(err, l);
                });
              };
              if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
                setLng(this.services.languageDetector.detect());
              } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
                this.services.languageDetector.detect(setLng);
              } else {
                setLng(lng);
              }
              return deferred;
            }
          }, {
            key: "getFixedT",
            value: function getFixedT(lng, ns, keyPrefix) {
              var _this5 = this;
              var fixedT = function fixedT(key, opts) {
                var options;
                if (_typeof$3(opts) !== 'object') {
                  for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
                    rest[_key3 - 2] = arguments[_key3];
                  }
                  options = _this5.options.overloadTranslationOptionHandler([key, opts].concat(rest));
                } else {
                  options = _objectSpread$6({}, opts);
                }
                options.lng = options.lng || fixedT.lng;
                options.lngs = options.lngs || fixedT.lngs;
                options.ns = options.ns || fixedT.ns;
                options.keyPrefix = options.keyPrefix || keyPrefix || fixedT.keyPrefix;
                var keySeparator = _this5.options.keySeparator || '.';
                var resultKey = options.keyPrefix ? "".concat(options.keyPrefix).concat(keySeparator).concat(key) : key;
                return _this5.t(resultKey, options);
              };
              if (typeof lng === 'string') {
                fixedT.lng = lng;
              } else {
                fixedT.lngs = lng;
              }
              fixedT.ns = ns;
              fixedT.keyPrefix = keyPrefix;
              return fixedT;
            }
          }, {
            key: "t",
            value: function t() {
              var _this$translator;
              return this.translator && (_this$translator = this.translator).translate.apply(_this$translator, arguments);
            }
          }, {
            key: "exists",
            value: function exists() {
              var _this$translator2;
              return this.translator && (_this$translator2 = this.translator).exists.apply(_this$translator2, arguments);
            }
          }, {
            key: "setDefaultNamespace",
            value: function setDefaultNamespace(ns) {
              this.options.defaultNS = ns;
            }
          }, {
            key: "hasLoadedNamespace",
            value: function hasLoadedNamespace(ns) {
              var _this6 = this;
              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              if (!this.isInitialized) {
                this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages);
                return false;
              }
              if (!this.languages || !this.languages.length) {
                this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages);
                return false;
              }
              var lng = this.resolvedLanguage || this.languages[0];
              var fallbackLng = this.options ? this.options.fallbackLng : false;
              var lastLng = this.languages[this.languages.length - 1];
              if (lng.toLowerCase() === 'cimode') return true;
              var loadNotPending = function loadNotPending(l, n) {
                var loadState = _this6.services.backendConnector.state["".concat(l, "|").concat(n)];
                return loadState === -1 || loadState === 2;
              };
              if (options.precheck) {
                var preResult = options.precheck(this, loadNotPending);
                if (preResult !== undefined) return preResult;
              }
              if (this.hasResourceBundle(lng, ns)) return true;
              if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages) return true;
              if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
              return false;
            }
          }, {
            key: "loadNamespaces",
            value: function loadNamespaces(ns, callback) {
              var _this7 = this;
              var deferred = defer();
              if (!this.options.ns) {
                callback && callback();
                return Promise.resolve();
              }
              if (typeof ns === 'string') ns = [ns];
              ns.forEach(function (n) {
                if (_this7.options.ns.indexOf(n) < 0) _this7.options.ns.push(n);
              });
              this.loadResources(function (err) {
                deferred.resolve();
                if (callback) callback(err);
              });
              return deferred;
            }
          }, {
            key: "loadLanguages",
            value: function loadLanguages(lngs, callback) {
              var deferred = defer();
              if (typeof lngs === 'string') lngs = [lngs];
              var preloaded = this.options.preload || [];
              var newLngs = lngs.filter(function (lng) {
                return preloaded.indexOf(lng) < 0;
              });
              if (!newLngs.length) {
                if (callback) callback();
                return Promise.resolve();
              }
              this.options.preload = preloaded.concat(newLngs);
              this.loadResources(function (err) {
                deferred.resolve();
                if (callback) callback(err);
              });
              return deferred;
            }
          }, {
            key: "dir",
            value: function dir(lng) {
              if (!lng) lng = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language);
              if (!lng) return 'rtl';
              var rtlLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ug', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam', 'ckb'];
              return rtlLngs.indexOf(this.services.languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf('-arab') > 1 ? 'rtl' : 'ltr';
            }
          }, {
            key: "cloneInstance",
            value: function cloneInstance() {
              var _this8 = this;
              var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
              var mergedOptions = _objectSpread$6(_objectSpread$6(_objectSpread$6({}, this.options), options), {
                isClone: true
              });
              var clone = new I18n(mergedOptions);
              if (options.debug !== undefined || options.prefix !== undefined) {
                clone.logger = clone.logger.clone(options);
              }
              var membersToCopy = ['store', 'services', 'language'];
              membersToCopy.forEach(function (m) {
                clone[m] = _this8[m];
              });
              clone.services = _objectSpread$6({}, this.services);
              clone.services.utils = {
                hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
              };
              clone.translator = new Translator(clone.services, clone.options);
              clone.translator.on('*', function (event) {
                for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
                  args[_key4 - 1] = arguments[_key4];
                }
                clone.emit.apply(clone, [event].concat(args));
              });
              clone.init(mergedOptions, callback);
              clone.translator.options = clone.options;
              clone.translator.backendConnector.services.utils = {
                hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
              };
              return clone;
            }
          }, {
            key: "toJSON",
            value: function toJSON() {
              return {
                options: this.options,
                store: this.store,
                language: this.language,
                languages: this.languages,
                resolvedLanguage: this.resolvedLanguage
              };
            }
          }]);
          return I18n;
        }(EventEmitter);
        _defineProperty$2(I18n, "createInstance", function () {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var callback = arguments.length > 1 ? arguments[1] : undefined;
          return new I18n(options, callback);
        });
        var instance = exports("i", I18n.createInstance());
        instance.createInstance = I18n.createInstance;
        instance.createInstance;
        instance.init;
        instance.loadResources;
        instance.reloadResources;
        instance.use;
        instance.changeLanguage;
        instance.getFixedT;
        instance.t;
        instance.exists;
        instance.setDefaultNamespace;
        instance.hasLoadedNamespace;
        instance.loadNamespaces;
        instance.loadLanguages;
        var matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
        var htmlEntities = {
          '&amp;': '&',
          '&#38;': '&',
          '&lt;': '<',
          '&#60;': '<',
          '&gt;': '>',
          '&#62;': '>',
          '&apos;': "'",
          '&#39;': "'",
          '&quot;': '"',
          '&#34;': '"',
          '&nbsp;': ' ',
          '&#160;': ' ',
          '&copy;': '©',
          '&#169;': '©',
          '&reg;': '®',
          '&#174;': '®',
          '&hellip;': '…',
          '&#8230;': '…',
          '&#x2F;': '/',
          '&#47;': '/'
        };
        var unescapeHtmlEntity = function unescapeHtmlEntity(m) {
          return htmlEntities[m];
        };
        var unescape = function unescape(text) {
          return text.replace(matchHtmlEntity, unescapeHtmlEntity);
        };
        var defaultOptions = {
          bindI18n: 'languageChanged',
          bindI18nStore: '',
          transEmptyNodeValue: '',
          transSupportBasicHtmlNodes: true,
          transWrapTextNodes: '',
          transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
          useSuspense: true,
          unescape: unescape
        };
        var i18nInstance;
        var I18nContext = reactExports.createContext();
        function getDefaults$2() {
          return defaultOptions;
        }
        var ReportNamespaces = function () {
          function ReportNamespaces() {
            _classCallCheck$1(this, ReportNamespaces);
            this.usedNamespaces = {};
          }
          _createClass$1(ReportNamespaces, [{
            key: "addUsedNamespaces",
            value: function addUsedNamespaces(namespaces) {
              var _this = this;
              namespaces.forEach(function (ns) {
                if (!_this.usedNamespaces[ns]) _this.usedNamespaces[ns] = true;
              });
            }
          }, {
            key: "getUsedNamespaces",
            value: function getUsedNamespaces() {
              return Object.keys(this.usedNamespaces);
            }
          }]);
          return ReportNamespaces;
        }();
        function getI18n() {
          return i18nInstance;
        }
        function warn() {
          if (console && console.warn) {
            var _console;
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            if (typeof args[0] === 'string') args[0] = "react-i18next:: ".concat(args[0]);
            (_console = console).warn.apply(_console, args);
          }
        }
        var alreadyWarned = {};
        function warnOnce() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          if (typeof args[0] === 'string' && alreadyWarned[args[0]]) return;
          if (typeof args[0] === 'string') alreadyWarned[args[0]] = new Date();
          warn.apply(void 0, args);
        }
        function loadNamespaces(i18n, ns, cb) {
          i18n.loadNamespaces(ns, function () {
            if (i18n.isInitialized) {
              cb();
            } else {
              var initialized = function initialized() {
                setTimeout(function () {
                  i18n.off('initialized', initialized);
                }, 0);
                cb();
              };
              i18n.on('initialized', initialized);
            }
          });
        }
        function oldI18nextHasLoadedNamespace(ns, i18n) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var lng = i18n.languages[0];
          var fallbackLng = i18n.options ? i18n.options.fallbackLng : false;
          var lastLng = i18n.languages[i18n.languages.length - 1];
          if (lng.toLowerCase() === 'cimode') return true;
          var loadNotPending = function loadNotPending(l, n) {
            var loadState = i18n.services.backendConnector.state["".concat(l, "|").concat(n)];
            return loadState === -1 || loadState === 2;
          };
          if (options.bindI18n && options.bindI18n.indexOf('languageChanging') > -1 && i18n.services.backendConnector.backend && i18n.isLanguageChangingTo && !loadNotPending(i18n.isLanguageChangingTo, ns)) return false;
          if (i18n.hasResourceBundle(lng, ns)) return true;
          if (!i18n.services.backendConnector.backend || i18n.options.resources && !i18n.options.partialBundledLanguages) return true;
          if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
          return false;
        }
        function hasLoadedNamespace(ns, i18n) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          if (!i18n.languages || !i18n.languages.length) {
            warnOnce('i18n.languages were undefined or empty', i18n.languages);
            return true;
          }
          var isNewerI18next = i18n.options.ignoreJSONStructure !== undefined;
          if (!isNewerI18next) {
            return oldI18nextHasLoadedNamespace(ns, i18n, options);
          }
          return i18n.hasLoadedNamespace(ns, {
            precheck: function precheck(i18nInstance, loadNotPending) {
              if (options.bindI18n && options.bindI18n.indexOf('languageChanging') > -1 && i18nInstance.services.backendConnector.backend && i18nInstance.isLanguageChangingTo && !loadNotPending(i18nInstance.isLanguageChangingTo, ns)) return false;
            }
          });
        }
        function _iterableToArrayLimit(r, l) {
          var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
          if (null != t) {
            var e,
              n,
              i,
              u,
              a = [],
              f = true,
              o = false;
            try {
              if (i = (t = t.call(r)).next, 0 === l) ;else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
            } catch (r) {
              o = true, n = r;
            } finally {
              try {
                if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
              } finally {
                if (o) throw n;
              }
            }
            return a;
          }
        }
        function _slicedToArray(r, e) {
          return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
        }
        function ownKeys$2(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) {
              symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            }
            keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread$2(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys$2(Object(source), true).forEach(function (key) {
                _defineProperty$2(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys$2(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }
          return target;
        }
        var usePrevious = function usePrevious(value, ignore) {
          var ref = reactExports.useRef();
          reactExports.useEffect(function () {
            ref.current = value;
          }, [value, ignore]);
          return ref.current;
        };
        function useTranslation(ns) {
          var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var i18nFromProps = props.i18n;
          var _ref = reactExports.useContext(I18nContext) || {},
            i18nFromContext = _ref.i18n,
            defaultNSFromContext = _ref.defaultNS;
          var i18n = i18nFromProps || i18nFromContext || getI18n();
          if (i18n && !i18n.reportNamespaces) i18n.reportNamespaces = new ReportNamespaces();
          if (!i18n) {
            warnOnce('You will need to pass in an i18next instance by using initReactI18next');
            var notReadyT = function notReadyT(k) {
              return Array.isArray(k) ? k[k.length - 1] : k;
            };
            var retNotReady = [notReadyT, {}, false];
            retNotReady.t = notReadyT;
            retNotReady.i18n = {};
            retNotReady.ready = false;
            return retNotReady;
          }
          if (i18n.options.react && i18n.options.react.wait !== undefined) warnOnce('It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.');
          var i18nOptions = _objectSpread$2(_objectSpread$2(_objectSpread$2({}, getDefaults$2()), i18n.options.react), props);
          var useSuspense = i18nOptions.useSuspense,
            keyPrefix = i18nOptions.keyPrefix;
          var namespaces = ns || defaultNSFromContext || i18n.options && i18n.options.defaultNS;
          namespaces = typeof namespaces === 'string' ? [namespaces] : namespaces || ['translation'];
          if (i18n.reportNamespaces.addUsedNamespaces) i18n.reportNamespaces.addUsedNamespaces(namespaces);
          var ready = (i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every(function (n) {
            return hasLoadedNamespace(n, i18n, i18nOptions);
          });
          function getT() {
            return i18n.getFixedT(null, i18nOptions.nsMode === 'fallback' ? namespaces : namespaces[0], keyPrefix);
          }
          var _useState = reactExports.useState(getT),
            _useState2 = _slicedToArray(_useState, 2),
            t = _useState2[0],
            setT = _useState2[1];
          var joinedNS = namespaces.join();
          var previousJoinedNS = usePrevious(joinedNS);
          var isMounted = reactExports.useRef(true);
          reactExports.useEffect(function () {
            var bindI18n = i18nOptions.bindI18n,
              bindI18nStore = i18nOptions.bindI18nStore;
            isMounted.current = true;
            if (!ready && !useSuspense) {
              loadNamespaces(i18n, namespaces, function () {
                if (isMounted.current) setT(getT);
              });
            }
            if (ready && previousJoinedNS && previousJoinedNS !== joinedNS && isMounted.current) {
              setT(getT);
            }
            function boundReset() {
              if (isMounted.current) setT(getT);
            }
            if (bindI18n && i18n) i18n.on(bindI18n, boundReset);
            if (bindI18nStore && i18n) i18n.store.on(bindI18nStore, boundReset);
            return function () {
              isMounted.current = false;
              if (bindI18n && i18n) bindI18n.split(' ').forEach(function (e) {
                return i18n.off(e, boundReset);
              });
              if (bindI18nStore && i18n) bindI18nStore.split(' ').forEach(function (e) {
                return i18n.store.off(e, boundReset);
              });
            };
          }, [i18n, joinedNS]);
          var isInitial = reactExports.useRef(true);
          reactExports.useEffect(function () {
            if (isMounted.current && !isInitial.current) {
              setT(getT);
            }
            isInitial.current = false;
          }, [i18n, keyPrefix]);
          var ret = [t, i18n, ready];
          ret.t = t;
          ret.i18n = i18n;
          ret.ready = ready;
          if (ready) return ret;
          if (!ready && !useSuspense) return ret;
          throw new Promise(function (resolve) {
            loadNamespaces(i18n, namespaces, function () {
              resolve();
            });
          });
        }
        function I18nextProvider(_ref) {
          var i18n = _ref.i18n,
            defaultNS = _ref.defaultNS,
            children = _ref.children;
          var value = reactExports.useMemo(function () {
            return {
              i18n: i18n,
              defaultNS: defaultNS
            };
          }, [i18n, defaultNS]);
          return reactExports.createElement(I18nContext.Provider, {
            value: value
          }, children);
        }
        function _typeof$2(o) {
          "@babel/helpers - typeof";

          return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
            return typeof o;
          } : function (o) {
            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
          }, _typeof$2(o);
        }
        function hasXMLHttpRequest() {
          return typeof XMLHttpRequest === 'function' || (typeof XMLHttpRequest === "undefined" ? "undefined" : _typeof$2(XMLHttpRequest)) === 'object';
        }
        function isPromise(maybePromise) {
          return !!maybePromise && typeof maybePromise.then === 'function';
        }
        function makePromise(maybePromise) {
          if (isPromise(maybePromise)) {
            return maybePromise;
          }
          return Promise.resolve(maybePromise);
        }
        function ownKeys$1(e, r) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            r && (o = o.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })), t.push.apply(t, o);
          }
          return t;
        }
        function _objectSpread$1(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {};
            r % 2 ? ownKeys$1(Object(t), true).forEach(function (r) {
              _defineProperty$1(e, r, t[r]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) {
              Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
            });
          }
          return e;
        }
        function _defineProperty$1(e, r, t) {
          return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[r] = t, e;
        }
        function _toPropertyKey$1(t) {
          var i = _toPrimitive$1(t, "string");
          return "symbol" == _typeof$1(i) ? i : i + "";
        }
        function _toPrimitive$1(t, r) {
          if ("object" != _typeof$1(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var i = e.call(t, r);
            if ("object" != _typeof$1(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === r ? String : Number)(t);
        }
        function _typeof$1(o) {
          "@babel/helpers - typeof";

          return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
            return typeof o;
          } : function (o) {
            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
          }, _typeof$1(o);
        }
        var fetchApi = typeof fetch === 'function' ? fetch : undefined;
        if (typeof global !== 'undefined' && global.fetch) {
          fetchApi = global.fetch;
        } else if (typeof window !== 'undefined' && window.fetch) {
          fetchApi = window.fetch;
        }
        var XmlHttpRequestApi;
        if (hasXMLHttpRequest()) {
          if (typeof global !== 'undefined' && global.XMLHttpRequest) {
            XmlHttpRequestApi = global.XMLHttpRequest;
          } else if (typeof window !== 'undefined' && window.XMLHttpRequest) {
            XmlHttpRequestApi = window.XMLHttpRequest;
          }
        }
        var ActiveXObjectApi;
        if (typeof ActiveXObject === 'function') {
          if (typeof global !== 'undefined' && global.ActiveXObject) {
            ActiveXObjectApi = global.ActiveXObject;
          } else if (typeof window !== 'undefined' && window.ActiveXObject) {
            ActiveXObjectApi = window.ActiveXObject;
          }
        }
        if (typeof fetchApi !== 'function') fetchApi = undefined;
        if (!fetchApi && !XmlHttpRequestApi && !ActiveXObjectApi) {
          try {
            __vitePreload(() => module.import('./browser-ponyfill-legacy-Po_msgFb.js').then(n => n.b), false ? __VITE_PRELOAD__ : void 0).then(function (mod) {
              fetchApi = mod.default;
            }).catch(function () {});
          } catch (e) {}
        }
        var addQueryString = function addQueryString(url, params) {
          if (params && _typeof$1(params) === 'object') {
            var queryString = '';
            for (var paramName in params) {
              queryString += '&' + encodeURIComponent(paramName) + '=' + encodeURIComponent(params[paramName]);
            }
            if (!queryString) return url;
            url = url + (url.indexOf('?') !== -1 ? '&' : '?') + queryString.slice(1);
          }
          return url;
        };
        var fetchIt = function fetchIt(url, fetchOptions, callback, altFetch) {
          var resolver = function resolver(response) {
            if (!response.ok) return callback(response.statusText || 'Error', {
              status: response.status
            });
            response.text().then(function (data) {
              callback(null, {
                status: response.status,
                data: data
              });
            }).catch(callback);
          };
          if (altFetch) {
            var altResponse = altFetch(url, fetchOptions);
            if (altResponse instanceof Promise) {
              altResponse.then(resolver).catch(callback);
              return;
            }
          }
          if (typeof fetch === 'function') {
            fetch(url, fetchOptions).then(resolver).catch(callback);
          } else {
            fetchApi(url, fetchOptions).then(resolver).catch(callback);
          }
        };
        var omitFetchOptions = false;
        var requestWithFetch = function requestWithFetch(options, url, payload, callback) {
          if (options.queryStringParams) {
            url = addQueryString(url, options.queryStringParams);
          }
          var headers = _objectSpread$1({}, typeof options.customHeaders === 'function' ? options.customHeaders() : options.customHeaders);
          if (typeof window === 'undefined' && typeof global !== 'undefined' && typeof global.process !== 'undefined' && global.process.versions && global.process.versions.node) {
            headers['User-Agent'] = "i18next-http-backend (node/".concat(global.process.version, "; ").concat(global.process.platform, " ").concat(global.process.arch, ")");
          }
          if (payload) headers['Content-Type'] = 'application/json';
          var reqOptions = typeof options.requestOptions === 'function' ? options.requestOptions(payload) : options.requestOptions;
          var fetchOptions = _objectSpread$1({
            method: payload ? 'POST' : 'GET',
            body: payload ? options.stringify(payload) : undefined,
            headers: headers
          }, omitFetchOptions ? {} : reqOptions);
          var altFetch = typeof options.alternateFetch === 'function' && options.alternateFetch.length >= 1 ? options.alternateFetch : undefined;
          try {
            fetchIt(url, fetchOptions, callback, altFetch);
          } catch (e) {
            if (!reqOptions || Object.keys(reqOptions).length === 0 || !e.message || e.message.indexOf('not implemented') < 0) {
              return callback(e);
            }
            try {
              Object.keys(reqOptions).forEach(function (opt) {
                delete fetchOptions[opt];
              });
              fetchIt(url, fetchOptions, callback, altFetch);
              omitFetchOptions = true;
            } catch (err) {
              callback(err);
            }
          }
        };
        var requestWithXmlHttpRequest = function requestWithXmlHttpRequest(options, url, payload, callback) {
          if (payload && _typeof$1(payload) === 'object') {
            payload = addQueryString('', payload).slice(1);
          }
          if (options.queryStringParams) {
            url = addQueryString(url, options.queryStringParams);
          }
          try {
            var x = XmlHttpRequestApi ? new XmlHttpRequestApi() : new ActiveXObjectApi('MSXML2.XMLHTTP.3.0');
            x.open(payload ? 'POST' : 'GET', url, 1);
            if (!options.crossDomain) {
              x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            }
            x.withCredentials = !!options.withCredentials;
            if (payload) {
              x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            }
            if (x.overrideMimeType) {
              x.overrideMimeType('application/json');
            }
            var h = options.customHeaders;
            h = typeof h === 'function' ? h() : h;
            if (h) {
              for (var i in h) {
                x.setRequestHeader(i, h[i]);
              }
            }
            x.onreadystatechange = function () {
              x.readyState > 3 && callback(x.status >= 400 ? x.statusText : null, {
                status: x.status,
                data: x.responseText
              });
            };
            x.send(payload);
          } catch (e) {
            console && console.log(e);
          }
        };
        var request = function request(options, url, payload, callback) {
          if (typeof payload === 'function') {
            callback = payload;
            payload = undefined;
          }
          callback = callback || function () {};
          if (fetchApi && url.indexOf('file:') !== 0) {
            return requestWithFetch(options, url, payload, callback);
          }
          if (hasXMLHttpRequest() || typeof ActiveXObject === 'function') {
            return requestWithXmlHttpRequest(options, url, payload, callback);
          }
          callback(new Error('No fetch and no xhr implementation found!'));
        };
        function _typeof(o) {
          "@babel/helpers - typeof";

          return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
            return typeof o;
          } : function (o) {
            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
          }, _typeof(o);
        }
        function ownKeys(e, r) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            r && (o = o.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })), t.push.apply(t, o);
          }
          return t;
        }
        function _objectSpread(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {};
            r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
              _defineProperty(e, r, t[r]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
              Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
            });
          }
          return e;
        }
        function _classCallCheck(a, n) {
          if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
        }
        function _defineProperties(e, r) {
          for (var t = 0; t < r.length; t++) {
            var o = r[t];
            o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
          }
        }
        function _createClass(e, r, t) {
          return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
            writable: false
          }), e;
        }
        function _defineProperty(e, r, t) {
          return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[r] = t, e;
        }
        function _toPropertyKey(t) {
          var i = _toPrimitive(t, "string");
          return "symbol" == _typeof(i) ? i : i + "";
        }
        function _toPrimitive(t, r) {
          if ("object" != _typeof(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var i = e.call(t, r);
            if ("object" != _typeof(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        }
        var getDefaults$1 = function getDefaults() {
          return {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
            addPath: '/locales/add/{{lng}}/{{ns}}',
            parse: function parse(data) {
              return JSON.parse(data);
            },
            stringify: JSON.stringify,
            parsePayload: function parsePayload(namespace, key, fallbackValue) {
              return _defineProperty({}, key, fallbackValue || '');
            },
            parseLoadPayload: function parseLoadPayload(languages, namespaces) {
              return undefined;
            },
            request: request,
            reloadInterval: typeof window !== 'undefined' ? false : 60 * 60 * 1000,
            customHeaders: {},
            queryStringParams: {},
            crossDomain: false,
            withCredentials: false,
            overrideMimeType: false,
            requestOptions: {
              mode: 'cors',
              credentials: 'same-origin',
              cache: 'default'
            }
          };
        };
        var Backend = exports("B", function () {
          function Backend(services) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var allOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            _classCallCheck(this, Backend);
            this.services = services;
            this.options = options;
            this.allOptions = allOptions;
            this.type = 'backend';
            this.init(services, options, allOptions);
          }
          return _createClass(Backend, [{
            key: "init",
            value: function init(services) {
              var _this = this;
              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              var allOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
              this.services = services;
              this.options = _objectSpread(_objectSpread(_objectSpread({}, getDefaults$1()), this.options || {}), options);
              this.allOptions = allOptions;
              if (this.services && this.options.reloadInterval) {
                var timer = setInterval(function () {
                  return _this.reload();
                }, this.options.reloadInterval);
                if (_typeof(timer) === 'object' && typeof timer.unref === 'function') timer.unref();
              }
            }
          }, {
            key: "readMulti",
            value: function readMulti(languages, namespaces, callback) {
              this._readAny(languages, languages, namespaces, namespaces, callback);
            }
          }, {
            key: "read",
            value: function read(language, namespace, callback) {
              this._readAny([language], language, [namespace], namespace, callback);
            }
          }, {
            key: "_readAny",
            value: function _readAny(languages, loadUrlLanguages, namespaces, loadUrlNamespaces, callback) {
              var _this2 = this;
              var loadPath = this.options.loadPath;
              if (typeof this.options.loadPath === 'function') {
                loadPath = this.options.loadPath(languages, namespaces);
              }
              loadPath = makePromise(loadPath);
              loadPath.then(function (resolvedLoadPath) {
                if (!resolvedLoadPath) return callback(null, {});
                var url = _this2.services.interpolator.interpolate(resolvedLoadPath, {
                  lng: languages.join('+'),
                  ns: namespaces.join('+')
                });
                _this2.loadUrl(url, callback, loadUrlLanguages, loadUrlNamespaces);
              });
            }
          }, {
            key: "loadUrl",
            value: function loadUrl(url, callback, languages, namespaces) {
              var _this3 = this;
              var lng = typeof languages === 'string' ? [languages] : languages;
              var ns = typeof namespaces === 'string' ? [namespaces] : namespaces;
              var payload = this.options.parseLoadPayload(lng, ns);
              this.options.request(this.options, url, payload, function (err, res) {
                if (res && (res.status >= 500 && res.status < 600 || !res.status)) return callback('failed loading ' + url + '; status code: ' + res.status, true);
                if (res && res.status >= 400 && res.status < 500) return callback('failed loading ' + url + '; status code: ' + res.status, false);
                if (!res && err && err.message) {
                  var errorMessage = err.message.toLowerCase();
                  var isNetworkError = ['failed', 'fetch', 'network', 'load'].find(function (term) {
                    return errorMessage.indexOf(term) > -1;
                  });
                  if (isNetworkError) {
                    return callback('failed loading ' + url + ': ' + err.message, true);
                  }
                }
                if (err) return callback(err, false);
                var ret, parseErr;
                try {
                  if (typeof res.data === 'string') {
                    ret = _this3.options.parse(res.data, languages, namespaces);
                  } else {
                    ret = res.data;
                  }
                } catch (e) {
                  parseErr = 'failed parsing ' + url + ' to json';
                }
                if (parseErr) return callback(parseErr, false);
                callback(null, ret);
              });
            }
          }, {
            key: "create",
            value: function create(languages, namespace, key, fallbackValue, callback) {
              var _this4 = this;
              if (!this.options.addPath) return;
              if (typeof languages === 'string') languages = [languages];
              var payload = this.options.parsePayload(namespace, key, fallbackValue);
              var finished = 0;
              var dataArray = [];
              var resArray = [];
              languages.forEach(function (lng) {
                var addPath = _this4.options.addPath;
                if (typeof _this4.options.addPath === 'function') {
                  addPath = _this4.options.addPath(lng, namespace);
                }
                var url = _this4.services.interpolator.interpolate(addPath, {
                  lng: lng,
                  ns: namespace
                });
                _this4.options.request(_this4.options, url, payload, function (data, res) {
                  finished += 1;
                  dataArray.push(data);
                  resArray.push(res);
                  if (finished === languages.length) {
                    if (typeof callback === 'function') callback(dataArray, resArray);
                  }
                });
              });
            }
          }, {
            key: "reload",
            value: function reload() {
              var _this5 = this;
              var _this$services = this.services,
                backendConnector = _this$services.backendConnector,
                languageUtils = _this$services.languageUtils,
                logger = _this$services.logger;
              var currentLanguage = backendConnector.language;
              if (currentLanguage && currentLanguage.toLowerCase() === 'cimode') return;
              var toLoad = [];
              var append = function append(lng) {
                var lngs = languageUtils.toResolveHierarchy(lng);
                lngs.forEach(function (l) {
                  if (toLoad.indexOf(l) < 0) toLoad.push(l);
                });
              };
              append(currentLanguage);
              if (this.allOptions.preload) this.allOptions.preload.forEach(function (l) {
                return append(l);
              });
              toLoad.forEach(function (lng) {
                _this5.allOptions.ns.forEach(function (ns) {
                  backendConnector.read(lng, ns, 'read', null, null, function (err, data) {
                    if (err) logger.warn("loading namespace ".concat(ns, " for language ").concat(lng, " failed"), err);
                    if (!err && data) logger.log("loaded namespace ".concat(ns, " for language ").concat(lng), data);
                    backendConnector.loaded("".concat(lng, "|").concat(ns), err, data);
                  });
                });
              });
            }
          }]);
        }());
        Backend.type = 'backend';
        const _ref3 = [],
          slice = _ref3.slice,
          forEach = _ref3.forEach;
        function defaults(obj) {
          forEach.call(slice.call(arguments, 1), source => {
            if (source) {
              for (const prop in source) {
                if (obj[prop] === undefined) obj[prop] = source[prop];
              }
            }
          });
          return obj;
        }
        function hasXSS(input) {
          if (typeof input !== 'string') return false;

          // Common XSS attack patterns
          const xssPatterns = [/<\s*script.*?>/i, /<\s*\/\s*script\s*>/i, /<\s*img.*?on\w+\s*=/i, /<\s*\w+\s*on\w+\s*=.*?>/i, /javascript\s*:/i, /vbscript\s*:/i, /expression\s*\(/i, /eval\s*\(/i, /alert\s*\(/i, /document\.cookie/i, /document\.write\s*\(/i, /window\.location/i, /innerHTML/i];
          return xssPatterns.some(pattern => pattern.test(input));
        }

        // eslint-disable-next-line no-control-regex
        const fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        const serializeCookie = function serializeCookie(name, val) {
          let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
            path: '/'
          };
          const opt = options;
          const value = encodeURIComponent(val);
          let str = `${name}=${value}`;
          if (opt.maxAge > 0) {
            const maxAge = opt.maxAge - 0;
            if (Number.isNaN(maxAge)) throw new Error('maxAge should be a Number');
            str += `; Max-Age=${Math.floor(maxAge)}`;
          }
          if (opt.domain) {
            if (!fieldContentRegExp.test(opt.domain)) {
              throw new TypeError('option domain is invalid');
            }
            str += `; Domain=${opt.domain}`;
          }
          if (opt.path) {
            if (!fieldContentRegExp.test(opt.path)) {
              throw new TypeError('option path is invalid');
            }
            str += `; Path=${opt.path}`;
          }
          if (opt.expires) {
            if (typeof opt.expires.toUTCString !== 'function') {
              throw new TypeError('option expires is invalid');
            }
            str += `; Expires=${opt.expires.toUTCString()}`;
          }
          if (opt.httpOnly) str += '; HttpOnly';
          if (opt.secure) str += '; Secure';
          if (opt.sameSite) {
            const sameSite = typeof opt.sameSite === 'string' ? opt.sameSite.toLowerCase() : opt.sameSite;
            switch (sameSite) {
              case true:
                str += '; SameSite=Strict';
                break;
              case 'lax':
                str += '; SameSite=Lax';
                break;
              case 'strict':
                str += '; SameSite=Strict';
                break;
              case 'none':
                str += '; SameSite=None';
                break;
              default:
                throw new TypeError('option sameSite is invalid');
            }
          }
          if (opt.partitioned) str += '; Partitioned';
          return str;
        };
        const cookie = {
          create(name, value, minutes, domain) {
            let cookieOptions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
              path: '/',
              sameSite: 'strict'
            };
            if (minutes) {
              cookieOptions.expires = new Date();
              cookieOptions.expires.setTime(cookieOptions.expires.getTime() + minutes * 60 * 1000);
            }
            if (domain) cookieOptions.domain = domain;
            document.cookie = serializeCookie(name, value, cookieOptions);
          },
          read(name) {
            const nameEQ = `${name}=`;
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
              let c = ca[i];
              while (c.charAt(0) === ' ') c = c.substring(1, c.length);
              if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
          },
          remove(name, domain) {
            this.create(name, '', -1, domain);
          }
        };
        var cookie$1 = {
          name: 'cookie',
          // Deconstruct the options object and extract the lookupCookie property
          lookup(_ref) {
            let lookupCookie = _ref.lookupCookie;
            if (lookupCookie && typeof document !== 'undefined') {
              return cookie.read(lookupCookie) || undefined;
            }
            return undefined;
          },
          // Deconstruct the options object and extract the lookupCookie, cookieMinutes, cookieDomain, and cookieOptions properties
          cacheUserLanguage(lng, _ref2) {
            let lookupCookie = _ref2.lookupCookie,
              cookieMinutes = _ref2.cookieMinutes,
              cookieDomain = _ref2.cookieDomain,
              cookieOptions = _ref2.cookieOptions;
            if (lookupCookie && typeof document !== 'undefined') {
              cookie.create(lookupCookie, lng, cookieMinutes, cookieDomain, cookieOptions);
            }
          }
        };
        var querystring = {
          name: 'querystring',
          // Deconstruct the options object and extract the lookupQuerystring property
          lookup(_ref) {
            let lookupQuerystring = _ref.lookupQuerystring;
            let found;
            if (typeof window !== 'undefined') {
              var _window$location$hash;
              let search = window.location.search;
              if (!window.location.search && ((_window$location$hash = window.location.hash) === null || _window$location$hash === void 0 ? void 0 : _window$location$hash.indexOf('?')) > -1) {
                search = window.location.hash.substring(window.location.hash.indexOf('?'));
              }
              const query = search.substring(1);
              const params = query.split('&');
              for (let i = 0; i < params.length; i++) {
                const pos = params[i].indexOf('=');
                if (pos > 0) {
                  const key = params[i].substring(0, pos);
                  if (key === lookupQuerystring) {
                    found = params[i].substring(pos + 1);
                  }
                }
              }
            }
            return found;
          }
        };
        var hash = {
          name: 'hash',
          // Deconstruct the options object and extract the lookupHash property and the lookupFromHashIndex property
          lookup(_ref) {
            let lookupHash = _ref.lookupHash,
              lookupFromHashIndex = _ref.lookupFromHashIndex;
            let found;
            if (typeof window !== 'undefined') {
              const hash = window.location.hash;
              if (hash && hash.length > 2) {
                const query = hash.substring(1);
                if (lookupHash) {
                  const params = query.split('&');
                  for (let i = 0; i < params.length; i++) {
                    const pos = params[i].indexOf('=');
                    if (pos > 0) {
                      const key = params[i].substring(0, pos);
                      if (key === lookupHash) {
                        found = params[i].substring(pos + 1);
                      }
                    }
                  }
                }
                if (found) return found;
                if (!found && lookupFromHashIndex > -1) {
                  var _language$index;
                  const language = hash.match(/\/([a-zA-Z-]*)/g);
                  if (!Array.isArray(language)) return undefined;
                  const index = typeof lookupFromHashIndex === 'number' ? lookupFromHashIndex : 0;
                  return (_language$index = language[index]) === null || _language$index === void 0 ? void 0 : _language$index.replace('/', '');
                }
              }
            }
            return found;
          }
        };
        let hasLocalStorageSupport = null;
        const localStorageAvailable = () => {
          if (hasLocalStorageSupport !== null) return hasLocalStorageSupport;
          try {
            hasLocalStorageSupport = typeof window !== 'undefined' && window.localStorage !== null;
            if (!hasLocalStorageSupport) {
              return false;
            }
            const testKey = 'i18next.translate.boo';
            window.localStorage.setItem(testKey, 'foo');
            window.localStorage.removeItem(testKey);
          } catch (e) {
            hasLocalStorageSupport = false;
          }
          return hasLocalStorageSupport;
        };
        var localStorage = {
          name: 'localStorage',
          // Deconstruct the options object and extract the lookupLocalStorage property
          lookup(_ref) {
            let lookupLocalStorage = _ref.lookupLocalStorage;
            if (lookupLocalStorage && localStorageAvailable()) {
              return window.localStorage.getItem(lookupLocalStorage) || undefined; // Undefined ensures type consistency with the previous version of this function
            }
            return undefined;
          },
          // Deconstruct the options object and extract the lookupLocalStorage property
          cacheUserLanguage(lng, _ref2) {
            let lookupLocalStorage = _ref2.lookupLocalStorage;
            if (lookupLocalStorage && localStorageAvailable()) {
              window.localStorage.setItem(lookupLocalStorage, lng);
            }
          }
        };
        let hasSessionStorageSupport = null;
        const sessionStorageAvailable = () => {
          if (hasSessionStorageSupport !== null) return hasSessionStorageSupport;
          try {
            hasSessionStorageSupport = typeof window !== 'undefined' && window.sessionStorage !== null;
            if (!hasSessionStorageSupport) {
              return false;
            }
            const testKey = 'i18next.translate.boo';
            window.sessionStorage.setItem(testKey, 'foo');
            window.sessionStorage.removeItem(testKey);
          } catch (e) {
            hasSessionStorageSupport = false;
          }
          return hasSessionStorageSupport;
        };
        var sessionStorage = {
          name: 'sessionStorage',
          lookup(_ref) {
            let lookupSessionStorage = _ref.lookupSessionStorage;
            if (lookupSessionStorage && sessionStorageAvailable()) {
              return window.sessionStorage.getItem(lookupSessionStorage) || undefined;
            }
            return undefined;
          },
          cacheUserLanguage(lng, _ref2) {
            let lookupSessionStorage = _ref2.lookupSessionStorage;
            if (lookupSessionStorage && sessionStorageAvailable()) {
              window.sessionStorage.setItem(lookupSessionStorage, lng);
            }
          }
        };
        var navigator$1 = {
          name: 'navigator',
          lookup(options) {
            const found = [];
            if (typeof navigator !== 'undefined') {
              const _navigator = navigator,
                languages = _navigator.languages,
                userLanguage = _navigator.userLanguage,
                language = _navigator.language;
              if (languages) {
                // chrome only; not an array, so can't use .push.apply instead of iterating
                for (let i = 0; i < languages.length; i++) {
                  found.push(languages[i]);
                }
              }
              if (userLanguage) {
                found.push(userLanguage);
              }
              if (language) {
                found.push(language);
              }
            }
            return found.length > 0 ? found : undefined;
          }
        };
        var htmlTag = {
          name: 'htmlTag',
          // Deconstruct the options object and extract the htmlTag property
          lookup(_ref) {
            let htmlTag = _ref.htmlTag;
            let found;
            const internalHtmlTag = htmlTag || (typeof document !== 'undefined' ? document.documentElement : null);
            if (internalHtmlTag && typeof internalHtmlTag.getAttribute === 'function') {
              found = internalHtmlTag.getAttribute('lang');
            }
            return found;
          }
        };
        var path = {
          name: 'path',
          // Deconstruct the options object and extract the lookupFromPathIndex property
          lookup(_ref) {
            var _language$index2;
            let lookupFromPathIndex = _ref.lookupFromPathIndex;
            if (typeof window === 'undefined') return undefined;
            const language = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
            if (!Array.isArray(language)) return undefined;
            const index = typeof lookupFromPathIndex === 'number' ? lookupFromPathIndex : 0;
            return (_language$index2 = language[index]) === null || _language$index2 === void 0 ? void 0 : _language$index2.replace('/', '');
          }
        };
        var subdomain = {
          name: 'subdomain',
          lookup(_ref) {
            var _window$location;
            let lookupFromSubdomainIndex = _ref.lookupFromSubdomainIndex;
            // If given get the subdomain index else 1
            const internalLookupFromSubdomainIndex = typeof lookupFromSubdomainIndex === 'number' ? lookupFromSubdomainIndex + 1 : 1;
            // get all matches if window.location. is existing
            // first item of match is the match itself and the second is the first group match which should be the first subdomain match
            // is the hostname no public domain get the or option of localhost
            const language = typeof window !== 'undefined' && ((_window$location = window.location) === null || _window$location === void 0 || (_window$location = _window$location.hostname) === null || _window$location === void 0 ? void 0 : _window$location.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));

            // if there is no match (null) return undefined
            if (!language) return undefined;
            // return the given group match
            return language[internalLookupFromSubdomainIndex];
          }
        };

        // some environments, throws when accessing document.cookie
        let canCookies = false;
        try {
          // eslint-disable-next-line no-unused-expressions
          document.cookie;
          canCookies = true;
          // eslint-disable-next-line no-empty
        } catch (e) {}
        const order = ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'];
        if (!canCookies) order.splice(1, 1);
        const getDefaults = () => ({
          order,
          lookupQuerystring: 'lng',
          lookupCookie: 'i18next',
          lookupLocalStorage: 'i18nextLng',
          lookupSessionStorage: 'i18nextLng',
          // cache user language
          caches: ['localStorage'],
          excludeCacheFor: ['cimode'],
          // cookieMinutes: 10,
          // cookieDomain: 'myDomain'

          convertDetectedLanguage: l => l
        });
        class Browser {
          constructor(services) {
            let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            this.type = 'languageDetector';
            this.detectors = {};
            this.init(services, options);
          }
          init() {
            let services = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
              languageUtils: {}
            };
            let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            let i18nOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            this.services = services;
            this.options = defaults(options, this.options || {}, getDefaults());
            if (typeof this.options.convertDetectedLanguage === 'string' && this.options.convertDetectedLanguage.indexOf('15897') > -1) {
              this.options.convertDetectedLanguage = l => l.replace('-', '_');
            }

            // backwards compatibility
            if (this.options.lookupFromUrlIndex) this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex;
            this.i18nOptions = i18nOptions;
            this.addDetector(cookie$1);
            this.addDetector(querystring);
            this.addDetector(localStorage);
            this.addDetector(sessionStorage);
            this.addDetector(navigator$1);
            this.addDetector(htmlTag);
            this.addDetector(path);
            this.addDetector(subdomain);
            this.addDetector(hash);
          }
          addDetector(detector) {
            this.detectors[detector.name] = detector;
            return this;
          }
          detect() {
            let detectionOrder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.options.order;
            let detected = [];
            detectionOrder.forEach(detectorName => {
              if (this.detectors[detectorName]) {
                let lookup = this.detectors[detectorName].lookup(this.options);
                if (lookup && typeof lookup === 'string') lookup = [lookup];
                if (lookup) detected = detected.concat(lookup);
              }
            });
            detected = detected.filter(d => d !== undefined && d !== null && !hasXSS(d)).map(d => this.options.convertDetectedLanguage(d));
            if (this.services && this.services.languageUtils && this.services.languageUtils.getBestMatchFromCodes) return detected; // new i18next v19.5.0
            return detected.length > 0 ? detected[0] : null; // a little backward compatibility
          }
          cacheUserLanguage(lng) {
            let caches = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.options.caches;
            if (!caches) return;
            if (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(lng) > -1) return;
            caches.forEach(cacheName => {
              if (this.detectors[cacheName]) this.detectors[cacheName].cacheUserLanguage(lng, this.options);
            });
          }
        }
        exports("b", Browser);
        Browser.type = 'languageDetector';
      }
    };
  });
})();
//# sourceMappingURL=i18n-legacy-BRT6G2_g.js.map
