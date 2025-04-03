;
(function () {
  function _slicedToArray(r, e) { return _arrayWithHoles2(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray2(r, e) || _nonIterableRest2(); }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _toArray2(r) { return _arrayWithHoles2(r) || _iterableToArray2(r) || _unsupportedIterableToArray2(r) || _nonIterableRest2(); }
  function _nonIterableRest2() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArray2(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
  function _arrayWithHoles2(r) { if (Array.isArray(r)) return r; }
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray2(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
  function _unsupportedIterableToArray2(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray2(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray2(r, a) : void 0; } }
  function _arrayLikeToArray2(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  System.register([], function (exports, module) {
    'use strict';

    return {
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._loadingWrapper_blx2p_1 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100%;\n}\n\n._loadingDots_blx2p_9 {\n  width: 60px;\n  aspect-ratio: 4;\n  clip-path: inset(0 100% 0 0);\n  animation: _l1_blx2p_1 1s steps(4) infinite;\n}\n@keyframes _l1_blx2p_1 {\n  to {\n    clip-path: inset(0 -34% 0 0);\n  }\n}\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n\n::-webkit-scrollbar {\n  width: 15px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: #16205b;\n  border-radius: 20px;\n  border: 3px solid #f1f1f1;\n}\n.MuiFormControl-root {\n  width: 100%;\n}\n\n.text-left {\n  text-align: left !important;\n}\n\n.mt-20 {\n  margin-top: 20px !important;\n}\n\n.mt-40 {\n  margin-top: 40px !important;\n}\n\n.mr-10 {\n  margin-right: 10px !important;\n}\n\n.mr-14 {\n  margin-right: 14px !important;\n}\n\n.ml-14 {\n  margin-left: 14px !important;\n}\n\n.ml-5 {\n  margin-left: 5px !important;\n}\n\n.mb-0 {\n  margin-bottom: 0 !important;\n}\n\n.mb-10 {\n  margin-bottom: 10px !important;\n}\n\n.pb-10 {\n  padding-bottom: 10px !important;\n}\n\n.ta-center {\n  text-align: center;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.w-100 {\n  width: 100%;\n}\n\n.card-custom {\n  position: relative;\n  margin-top: 12px;\n  margin-bottom: 12px;\n  border: 1px solid;\n  border-radius: 8px;\n  cursor: default;\n}\n\n.required {\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.1px;\n}\n\n.inputSurvey {\n  max-width: 400px;\n  width: 100%;\n  margin-bottom: 15px;\n}\n\n.MuiSelect-select {\n  display: flex !important;\n  align-items: center;\n}\n\n.MuiSwitch-root {\n  margin-right: -4px;\n}\n\n.jsx-parser {\n  p {\n    margin: 0;\n  }\n}\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
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
        exports({
          $: styled,
          D: useSearchParams,
          E: Routes,
          F: Route,
          G: _arrayWithHoles,
          H: _unsupportedIterableToArray,
          I: _nonIterableRest,
          M: getDefaults,
          N: Navigate,
          O: _defineProperty,
          P: getI18n,
          Q: deepmerge,
          S: isPlainObject,
          T: createBreakpoints,
          U: applyStyles,
          V: GlobalStyles,
          X: unstable_createStyleFunctionSx,
          _: _extends,
          a: useTheme,
          a0: formatMuiErrorMessage$1,
          a1: clamp$1,
          a3: useTheme$1,
          a5: handleBreakpoints,
          a6: resolveBreakpointValues,
          a7: createUnarySpacing,
          a8: mergeBreakpointsInOrder,
          a9: getValue,
          ab: getAugmentedNamespace,
          af: _setPrototypeOf,
          ah: _assertThisInitialized,
          ak: createBox,
          al: getPath,
          an: _typeof,
          ao: _arrayLikeToArray,
          ap: _iterableToArray,
          aq: _toArray,
          ar: _inherits,
          as: _createClass,
          at: _classCallCheck,
          au: _getPrototypeOf,
          av: _possibleConstructorReturn,
          aw: I18nextProvider,
          b: _objectWithoutPropertiesLoose$1,
          c: createTheme$1,
          d: clsx,
          e: extendSxProp,
          f: generateUtilityClasses,
          g: generateUtilityClass,
          h: capitalize,
          n: css,
          s: useNavigate,
          t: useLocation,
          u: useParams,
          w: getDefaultExportFromCjs,
          x: createTheme
        });
        false && function polyfill() {
          const relList = document.createElement("link").relList;
          if (relList && relList.supports && relList.supports("modulepreload")) {
            return;
          }
          var _iterator = _createForOfIteratorHelper(document.querySelectorAll('link[rel="modulepreload"]')),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              const link = _step.value;
              processPreload(link);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          new MutationObserver(mutations => {
            var _iterator2 = _createForOfIteratorHelper(mutations),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                const mutation = _step2.value;
                if (mutation.type !== "childList") {
                  continue;
                }
                var _iterator3 = _createForOfIteratorHelper(mutation.addedNodes),
                  _step3;
                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    const node = _step3.value;
                    if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }).observe(document, {
            childList: true,
            subtree: true
          });
          function getFetchOpts(link) {
            const fetchOpts = {};
            if (link.integrity) fetchOpts.integrity = link.integrity;
            if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
            if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";else fetchOpts.credentials = "same-origin";
            return fetchOpts;
          }
          function processPreload(link) {
            if (link.ep) return;
            link.ep = true;
            const fetchOpts = getFetchOpts(link);
            fetch(link.href, fetchOpts);
          }
        }();
        var commonjsGlobal = exports("p", typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {});
        function getDefaultExportFromCjs(x) {
          return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
        }
        function getAugmentedNamespace(n) {
          if (n.__esModule) return n;
          var f = n.default;
          if (typeof f == "function") {
            var a = function a() {
              if (this instanceof a) {
                return Reflect.construct(f, arguments, this.constructor);
              }
              return f.apply(this, arguments);
            };
            a.prototype = f.prototype;
          } else a = {};
          Object.defineProperty(a, '__esModule', {
            value: true
          });
          Object.keys(n).forEach(function (k) {
            var d = Object.getOwnPropertyDescriptor(n, k);
            Object.defineProperty(a, k, d.get ? d : {
              enumerable: true,
              get: function get() {
                return n[k];
              }
            });
          });
          return a;
        }
        var jsxRuntime = {
          exports: {}
        };
        var reactJsxRuntime_production_min = {};
        var react = {
          exports: {}
        };
        var react_production_min = {};

        /**
         * @license React
         * react.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        var l$2 = Symbol.for("react.element"),
          n$2 = Symbol.for("react.portal"),
          p$3 = Symbol.for("react.fragment"),
          q$2 = Symbol.for("react.strict_mode"),
          r$2 = Symbol.for("react.profiler"),
          t$1 = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          v$2 = Symbol.for("react.forward_ref"),
          w$1 = Symbol.for("react.suspense"),
          x$1 = Symbol.for("react.memo"),
          y$1 = Symbol.for("react.lazy"),
          z$2 = Symbol.iterator;
        function A$2(a) {
          if (null === a || "object" !== typeof a) return null;
          a = z$2 && a[z$2] || a["@@iterator"];
          return "function" === typeof a ? a : null;
        }
        var B$1 = {
            isMounted: function isMounted() {
              return !1;
            },
            enqueueForceUpdate: function enqueueForceUpdate() {},
            enqueueReplaceState: function enqueueReplaceState() {},
            enqueueSetState: function enqueueSetState() {}
          },
          C$1 = Object.assign,
          D$1 = {};
        function E$1(a, b, e) {
          this.props = a;
          this.context = b;
          this.refs = D$1;
          this.updater = e || B$1;
        }
        E$1.prototype.isReactComponent = {};
        E$1.prototype.setState = function (a, b) {
          if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          this.updater.enqueueSetState(this, a, b, "setState");
        };
        E$1.prototype.forceUpdate = function (a) {
          this.updater.enqueueForceUpdate(this, a, "forceUpdate");
        };
        function F() {}
        F.prototype = E$1.prototype;
        function G$1(a, b, e) {
          this.props = a;
          this.context = b;
          this.refs = D$1;
          this.updater = e || B$1;
        }
        var H$1 = G$1.prototype = new F();
        H$1.constructor = G$1;
        C$1(H$1, E$1.prototype);
        H$1.isPureReactComponent = !0;
        var I$1 = Array.isArray,
          J = Object.prototype.hasOwnProperty,
          K$1 = {
            current: null
          },
          L$1 = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
          };
        function M$1(a, b, e) {
          var d,
            c = {},
            k = null,
            h = null;
          if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L$1.hasOwnProperty(d) && (c[d] = b[d]);
          var g = arguments.length - 2;
          if (1 === g) c.children = e;else if (1 < g) {
            for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
            c.children = f;
          }
          if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
          return {
            $$typeof: l$2,
            type: a,
            key: k,
            ref: h,
            props: c,
            _owner: K$1.current
          };
        }
        function N$1(a, b) {
          return {
            $$typeof: l$2,
            type: a.type,
            key: b,
            ref: a.ref,
            props: a.props,
            _owner: a._owner
          };
        }
        function O$1(a) {
          return "object" === typeof a && null !== a && a.$$typeof === l$2;
        }
        function escape$1(a) {
          var b = {
            "=": "=0",
            ":": "=2"
          };
          return "$" + a.replace(/[=:]/g, function (a) {
            return b[a];
          });
        }
        var P$1 = /\/+/g;
        function Q$1(a, b) {
          return "object" === typeof a && null !== a && null != a.key ? escape$1("" + a.key) : b.toString(36);
        }
        function R$1(a, b, e, d, c) {
          var k = typeof a;
          if ("undefined" === k || "boolean" === k) a = null;
          var h = !1;
          if (null === a) h = !0;else switch (k) {
            case "string":
            case "number":
              h = !0;
              break;
            case "object":
              switch (a.$$typeof) {
                case l$2:
                case n$2:
                  h = !0;
              }
          }
          if (h) return h = a, c = c(h), a = "" === d ? "." + Q$1(h, 0) : d, I$1(c) ? (e = "", null != a && (e = a.replace(P$1, "$&/") + "/"), R$1(c, b, e, "", function (a) {
            return a;
          })) : null != c && (O$1(c) && (c = N$1(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P$1, "$&/") + "/") + a)), b.push(c)), 1;
          h = 0;
          d = "" === d ? "." : d + ":";
          if (I$1(a)) for (var g = 0; g < a.length; g++) {
            k = a[g];
            var f = d + Q$1(k, g);
            h += R$1(k, b, e, f, c);
          } else if (f = A$2(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = d + Q$1(k, g++), h += R$1(k, b, e, f, c);else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
          return h;
        }
        function S$1(a, b, e) {
          if (null == a) return a;
          var d = [],
            c = 0;
          R$1(a, d, "", "", function (a) {
            return b.call(e, a, c++);
          });
          return d;
        }
        function T$1(a) {
          if (-1 === a._status) {
            var b = a._result;
            b = b();
            b.then(function (b) {
              if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
            }, function (b) {
              if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
            });
            -1 === a._status && (a._status = 0, a._result = b);
          }
          if (1 === a._status) return a._result.default;
          throw a._result;
        }
        var U$1 = {
            current: null
          },
          V$1 = {
            transition: null
          },
          W$1 = {
            ReactCurrentDispatcher: U$1,
            ReactCurrentBatchConfig: V$1,
            ReactCurrentOwner: K$1
          };
        function X$1() {
          throw Error("act(...) is not supported in production builds of React.");
        }
        react_production_min.Children = {
          map: S$1,
          forEach: function forEach(a, b, e) {
            S$1(a, function () {
              b.apply(this, arguments);
            }, e);
          },
          count: function count(a) {
            var b = 0;
            S$1(a, function () {
              b++;
            });
            return b;
          },
          toArray: function toArray(a) {
            return S$1(a, function (a) {
              return a;
            }) || [];
          },
          only: function only(a) {
            if (!O$1(a)) throw Error("React.Children.only expected to receive a single React element child.");
            return a;
          }
        };
        react_production_min.Component = E$1;
        react_production_min.Fragment = p$3;
        react_production_min.Profiler = r$2;
        react_production_min.PureComponent = G$1;
        react_production_min.StrictMode = q$2;
        react_production_min.Suspense = w$1;
        react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
        react_production_min.act = X$1;
        react_production_min.cloneElement = function (a, b, e) {
          if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
          var d = C$1({}, a.props),
            c = a.key,
            k = a.ref,
            h = a._owner;
          if (null != b) {
            void 0 !== b.ref && (k = b.ref, h = K$1.current);
            void 0 !== b.key && (c = "" + b.key);
            if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
            for (f in b) J.call(b, f) && !L$1.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
          }
          var f = arguments.length - 2;
          if (1 === f) d.children = e;else if (1 < f) {
            g = Array(f);
            for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
            d.children = g;
          }
          return {
            $$typeof: l$2,
            type: a.type,
            key: c,
            ref: k,
            props: d,
            _owner: h
          };
        };
        react_production_min.createContext = function (a) {
          a = {
            $$typeof: u,
            _currentValue: a,
            _currentValue2: a,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
          };
          a.Provider = {
            $$typeof: t$1,
            _context: a
          };
          return a.Consumer = a;
        };
        react_production_min.createElement = M$1;
        react_production_min.createFactory = function (a) {
          var b = M$1.bind(null, a);
          b.type = a;
          return b;
        };
        react_production_min.createRef = function () {
          return {
            current: null
          };
        };
        react_production_min.forwardRef = function (a) {
          return {
            $$typeof: v$2,
            render: a
          };
        };
        react_production_min.isValidElement = O$1;
        react_production_min.lazy = function (a) {
          return {
            $$typeof: y$1,
            _payload: {
              _status: -1,
              _result: a
            },
            _init: T$1
          };
        };
        react_production_min.memo = function (a, b) {
          return {
            $$typeof: x$1,
            type: a,
            compare: void 0 === b ? null : b
          };
        };
        react_production_min.startTransition = function (a) {
          var b = V$1.transition;
          V$1.transition = {};
          try {
            a();
          } finally {
            V$1.transition = b;
          }
        };
        react_production_min.unstable_act = X$1;
        react_production_min.useCallback = function (a, b) {
          return U$1.current.useCallback(a, b);
        };
        react_production_min.useContext = function (a) {
          return U$1.current.useContext(a);
        };
        react_production_min.useDebugValue = function () {};
        react_production_min.useDeferredValue = function (a) {
          return U$1.current.useDeferredValue(a);
        };
        react_production_min.useEffect = function (a, b) {
          return U$1.current.useEffect(a, b);
        };
        react_production_min.useId = function () {
          return U$1.current.useId();
        };
        react_production_min.useImperativeHandle = function (a, b, e) {
          return U$1.current.useImperativeHandle(a, b, e);
        };
        react_production_min.useInsertionEffect = function (a, b) {
          return U$1.current.useInsertionEffect(a, b);
        };
        react_production_min.useLayoutEffect = function (a, b) {
          return U$1.current.useLayoutEffect(a, b);
        };
        react_production_min.useMemo = function (a, b) {
          return U$1.current.useMemo(a, b);
        };
        react_production_min.useReducer = function (a, b, e) {
          return U$1.current.useReducer(a, b, e);
        };
        react_production_min.useRef = function (a) {
          return U$1.current.useRef(a);
        };
        react_production_min.useState = function (a) {
          return U$1.current.useState(a);
        };
        react_production_min.useSyncExternalStore = function (a, b, e) {
          return U$1.current.useSyncExternalStore(a, b, e);
        };
        react_production_min.useTransition = function () {
          return U$1.current.useTransition();
        };
        react_production_min.version = "18.3.1";
        {
          react.exports = react_production_min;
        }
        var reactExports = exports("r", react.exports);
        const React = exports("R", /*@__PURE__*/getDefaultExportFromCjs(reactExports));
        const React$1 = /*#__PURE__*/_mergeNamespaces({
          __proto__: null,
          default: React
        }, [reactExports]);
        exports("a2", React$1);

        /**
         * @license React
         * react-jsx-runtime.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        var f$1 = reactExports,
          k$1 = Symbol.for("react.element"),
          l$1 = Symbol.for("react.fragment"),
          m$2 = Object.prototype.hasOwnProperty,
          n$1 = f$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
          p$2 = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
          };
        function q$1(c, a, g) {
          var b,
            d = {},
            e = null,
            h = null;
          void 0 !== g && (e = "" + g);
          void 0 !== a.key && (e = "" + a.key);
          void 0 !== a.ref && (h = a.ref);
          for (b in a) m$2.call(a, b) && !p$2.hasOwnProperty(b) && (d[b] = a[b]);
          if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
          return {
            $$typeof: k$1,
            type: c,
            key: e,
            ref: h,
            props: d,
            _owner: n$1.current
          };
        }
        reactJsxRuntime_production_min.Fragment = l$1;
        reactJsxRuntime_production_min.jsx = q$1;
        reactJsxRuntime_production_min.jsxs = q$1;
        {
          jsxRuntime.exports = reactJsxRuntime_production_min;
        }
        var jsxRuntimeExports = exports("j", jsxRuntime.exports);
        function _typeof(o) {
          "@babel/helpers - typeof";

          return exports("an", _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
            return typeof o;
          } : function (o) {
            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
          }), _typeof(o);
        }
        function _classCallCheck(a, n) {
          if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
        }
        function toPrimitive(t, r) {
          if ("object" != _typeof(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var i = e.call(t, r || "default");
            if ("object" != _typeof(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === r ? String : Number)(t);
        }
        function toPropertyKey(t) {
          var i = toPrimitive(t, "string");
          return "symbol" == _typeof(i) ? i : i + "";
        }
        function _defineProperties(e, r) {
          for (var t = 0; t < r.length; t++) {
            var o = r[t];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey(o.key), o);
          }
        }
        function _createClass(e, r, t) {
          return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
            writable: !1
          }), e;
        }
        function _assertThisInitialized(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        }
        function _setPrototypeOf(t, e) {
          return exports("af", _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
            return t.__proto__ = e, t;
          }), _setPrototypeOf(t, e);
        }
        function _inherits(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(t, "prototype", {
            writable: !1
          }), e && _setPrototypeOf(t, e);
        }
        function _possibleConstructorReturn(t, e) {
          if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
          if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
          return _assertThisInitialized(t);
        }
        function _getPrototypeOf(t) {
          return exports("au", _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          }), _getPrototypeOf(t);
        }
        function _defineProperty(e, r, t) {
          return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
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
        function ownKeys(object, enumerableOnly) {
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
        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys(Object(source)).forEach(function (key) {
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
            _classCallCheck(this, Logger);
            this.init(concreteLogger, options);
          }
          _createClass(Logger, [{
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
              return new Logger(this.logger, _objectSpread(_objectSpread({}, {
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
            _classCallCheck(this, EventEmitter);
            this.observers = {};
          }
          _createClass(EventEmitter, [{
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
        function copy$1(a, s, t) {
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
        function getPath$1(object, path) {
          var _getLastOfPath3 = getLastOfPath(object, path),
            obj = _getLastOfPath3.obj,
            k = _getLastOfPath3.k;
          if (!obj) return undefined;
          return obj[k];
        }
        function getPathWithDefaults(data, defaultData, key) {
          var value = getPath$1(data, key);
          if (value !== undefined) {
            return value;
          }
          return getPath$1(defaultData, key);
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
        function ownKeys$1(object, enumerableOnly) {
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
        function _objectSpread$1(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys$1(Object(source), true).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys$1(Object(source)).forEach(function (key) {
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
            _classCallCheck(this, ResourceStore);
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
          _createClass(ResourceStore, [{
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
              var result = getPath$1(this.data, path);
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
              var pack = getPath$1(this.data, path) || {};
              if (deep) {
                deepExtend(pack, resources, overwrite);
              } else {
                pack = _objectSpread$1(_objectSpread$1({}, pack), resources);
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
              if (this.options.compatibilityAPI === 'v1') return _objectSpread$1(_objectSpread$1({}, {}), this.getResource(lng, ns));
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
                _defineProperty(target, key, source[key]);
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
            _classCallCheck(this, Translator);
            _this = _super.call(this);
            if (isIE10) {
              EventEmitter.call(_assertThisInitialized(_this));
            }
            copy$1(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat', 'utils'], services, _assertThisInitialized(_this));
            _this.options = options;
            if (_this.options.keySeparator === undefined) {
              _this.options.keySeparator = '.';
            }
            _this.logger = baseLogger.create('translator');
            return _this;
          }
          _createClass(Translator, [{
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
              if (_typeof(options) !== 'object' && this.options.overloadTranslationOptionHandler) {
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
                  var r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, _objectSpread$2(_objectSpread$2({}, options), {}, {
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
                      copy[m] = this.translate(deepKey, _objectSpread$2(_objectSpread$2({}, options), {
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
                    var fk = this.resolve(key, _objectSpread$2(_objectSpread$2({}, options), {}, {
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
                res = this.i18nFormat.parse(res, _objectSpread$2(_objectSpread$2({}, this.options.interpolation.defaultVariables), options), resolved.usedLng, resolved.usedNS, resolved.usedKey, {
                  resolved: resolved
                });
              } else if (!options.skipInterpolation) {
                if (options.interpolation) this.interpolator.init(_objectSpread$2(_objectSpread$2({}, options), {
                  interpolation: _objectSpread$2(_objectSpread$2({}, this.options.interpolation), options.interpolation)
                }));
                var skipOnVariables = typeof res === 'string' && (options && options.interpolation && options.interpolation.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
                var nestBef;
                if (skipOnVariables) {
                  var nb = res.match(this.interpolator.nestingRegexp);
                  nestBef = nb && nb.length;
                }
                var data = options.replace && typeof options.replace !== 'string' ? options.replace : options;
                if (this.options.interpolation.defaultVariables) data = _objectSpread$2(_objectSpread$2({}, this.options.interpolation.defaultVariables), data);
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
                res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? _objectSpread$2({
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
        function capitalize$1(string) {
          return string.charAt(0).toUpperCase() + string.slice(1);
        }
        var LanguageUtil = function () {
          function LanguageUtil(options) {
            _classCallCheck(this, LanguageUtil);
            this.options = options;
            this.supportedLngs = this.options.supportedLngs || false;
            this.logger = baseLogger.create('languageUtils');
          }
          _createClass(LanguageUtil, [{
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
                  if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize$1(p[1].toLowerCase());
                } else if (p.length === 3) {
                  p[0] = p[0].toLowerCase();
                  if (p[1].length === 2) p[1] = p[1].toUpperCase();
                  if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();
                  if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize$1(p[1].toLowerCase());
                  if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize$1(p[2].toLowerCase());
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
            _classCallCheck(this, PluralResolver);
            this.languageUtils = languageUtils;
            this.options = options;
            this.logger = baseLogger.create('pluralResolver');
            if ((!this.options.compatibilityJSON || this.options.compatibilityJSON === 'v4') && (typeof Intl === 'undefined' || !Intl.PluralRules)) {
              this.options.compatibilityJSON = 'v3';
              this.logger.error('Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.');
            }
            this.rules = createRules();
          }
          _createClass(PluralResolver, [{
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
                _defineProperty(target, key, source[key]);
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
        var Interpolator = function () {
          function Interpolator() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            _classCallCheck(this, Interpolator);
            this.logger = baseLogger.create('interpolator');
            this.options = options;
            this.format = options.interpolation && options.interpolation.format || function (value) {
              return value;
            };
            this.init(options);
          }
          _createClass(Interpolator, [{
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
                  return _this.alwaysFormat ? _this.format(path, undefined, lng, _objectSpread$3(_objectSpread$3(_objectSpread$3({}, options), data), {}, {
                    interpolationkey: key
                  })) : path;
                }
                var p = key.split(_this.formatSeparator);
                var k = p.shift().trim();
                var f = p.join(_this.formatSeparator).trim();
                return _this.format(getPathWithDefaults(data, defaultData, k), f, lng, _objectSpread$3(_objectSpread$3(_objectSpread$3({}, options), data), {}, {
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
              var clonedOptions = _objectSpread$3({}, options);
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
                  if (inheritedOptions) clonedOptions = _objectSpread$3(_objectSpread$3({}, inheritedOptions), clonedOptions);
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
                    return _this2.format(v, f, options.lng, _objectSpread$3(_objectSpread$3({}, options), {}, {
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
                _defineProperty(target, key, source[key]);
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
            _classCallCheck(this, Formatter);
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
          _createClass(Formatter, [{
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
                _defineProperty(target, key, source[key]);
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
            _classCallCheck(this, Connector);
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
          _createClass(Connector, [{
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
              if (_typeof(args[1]) === 'object') ret = args[1];
              if (typeof args[1] === 'string') ret.defaultValue = args[1];
              if (typeof args[2] === 'string') ret.tDescription = args[2];
              if (_typeof(args[2]) === 'object' || _typeof(args[3]) === 'object') {
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
                _defineProperty(target, key, source[key]);
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
            _classCallCheck(this, I18n);
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
          _createClass(I18n, [{
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
                if (_typeof(opts) !== 'object') {
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
        _defineProperty(I18n, "createInstance", function () {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var callback = arguments.length > 1 ? arguments[1] : undefined;
          return new I18n(options, callback);
        });
        var instance = I18n.createInstance();
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
        function _objectWithoutPropertiesLoose$1(r, e) {
          if (null == r) return {};
          var t = {};
          for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
            if (e.includes(n)) continue;
            t[n] = r[n];
          }
          return t;
        }
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
        var I18nContext = exports("J", reactExports.createContext());
        function getDefaults() {
          return defaultOptions;
        }
        var ReportNamespaces = exports("K", function () {
          function ReportNamespaces() {
            _classCallCheck(this, ReportNamespaces);
            this.usedNamespaces = {};
          }
          _createClass(ReportNamespaces, [{
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
        }());
        function getI18n() {
          return i18nInstance;
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
        var reactDom = {
          exports: {}
        };
        var reactDom_production_min = {};
        var scheduler = {
          exports: {}
        };
        var scheduler_production_min = {};

        /**
         * @license React
         * scheduler.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        (function (exports) {
          function f(a, b) {
            var c = a.length;
            a.push(b);
            a: for (; 0 < c;) {
              var d = c - 1 >>> 1,
                e = a[d];
              if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;else break a;
            }
          }
          function h(a) {
            return 0 === a.length ? null : a[0];
          }
          function k(a) {
            if (0 === a.length) return null;
            var b = a[0],
              c = a.pop();
            if (c !== b) {
              a[0] = c;
              a: for (var d = 0, e = a.length, w = e >>> 1; d < w;) {
                var m = 2 * (d + 1) - 1,
                  C = a[m],
                  n = m + 1,
                  x = a[n];
                if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;else break a;
              }
            }
            return b;
          }
          function g(a, b) {
            var c = a.sortIndex - b.sortIndex;
            return 0 !== c ? c : a.id - b.id;
          }
          if ("object" === typeof performance && "function" === typeof performance.now) {
            var l = performance;
            exports.unstable_now = function () {
              return l.now();
            };
          } else {
            var p = Date,
              q = p.now();
            exports.unstable_now = function () {
              return p.now() - q;
            };
          }
          var r = [],
            t = [],
            u = 1,
            v = null,
            y = 3,
            z = !1,
            A = !1,
            B = !1,
            D = "function" === typeof setTimeout ? setTimeout : null,
            E = "function" === typeof clearTimeout ? clearTimeout : null,
            F = "undefined" !== typeof setImmediate ? setImmediate : null;
          "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
          function G(a) {
            for (var b = h(t); null !== b;) {
              if (null === b.callback) k(t);else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);else break;
              b = h(t);
            }
          }
          function H(a) {
            B = !1;
            G(a);
            if (!A) if (null !== h(r)) A = !0, I(J);else {
              var b = h(t);
              null !== b && K(H, b.startTime - a);
            }
          }
          function J(a, b) {
            A = !1;
            B && (B = !1, E(L), L = -1);
            z = !0;
            var c = y;
            try {
              G(b);
              for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M());) {
                var d = v.callback;
                if ("function" === typeof d) {
                  v.callback = null;
                  y = v.priorityLevel;
                  var e = d(v.expirationTime <= b);
                  b = exports.unstable_now();
                  "function" === typeof e ? v.callback = e : v === h(r) && k(r);
                  G(b);
                } else k(r);
                v = h(r);
              }
              if (null !== v) var w = !0;else {
                var m = h(t);
                null !== m && K(H, m.startTime - b);
                w = !1;
              }
              return w;
            } finally {
              v = null, y = c, z = !1;
            }
          }
          var N = !1,
            O = null,
            L = -1,
            P = 5,
            Q = -1;
          function M() {
            return exports.unstable_now() - Q < P ? !1 : !0;
          }
          function R() {
            if (null !== O) {
              var a = exports.unstable_now();
              Q = a;
              var b = !0;
              try {
                b = O(!0, a);
              } finally {
                b ? S() : (N = !1, O = null);
              }
            } else N = !1;
          }
          var S;
          if ("function" === typeof F) S = function S() {
            F(R);
          };else if ("undefined" !== typeof MessageChannel) {
            var T = new MessageChannel(),
              U = T.port2;
            T.port1.onmessage = R;
            S = function S() {
              U.postMessage(null);
            };
          } else S = function S() {
            D(R, 0);
          };
          function I(a) {
            O = a;
            N || (N = !0, S());
          }
          function K(a, b) {
            L = D(function () {
              a(exports.unstable_now());
            }, b);
          }
          exports.unstable_IdlePriority = 5;
          exports.unstable_ImmediatePriority = 1;
          exports.unstable_LowPriority = 4;
          exports.unstable_NormalPriority = 3;
          exports.unstable_Profiling = null;
          exports.unstable_UserBlockingPriority = 2;
          exports.unstable_cancelCallback = function (a) {
            a.callback = null;
          };
          exports.unstable_continueExecution = function () {
            A || z || (A = !0, I(J));
          };
          exports.unstable_forceFrameRate = function (a) {
            0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1E3 / a) : 5;
          };
          exports.unstable_getCurrentPriorityLevel = function () {
            return y;
          };
          exports.unstable_getFirstCallbackNode = function () {
            return h(r);
          };
          exports.unstable_next = function (a) {
            switch (y) {
              case 1:
              case 2:
              case 3:
                var b = 3;
                break;
              default:
                b = y;
            }
            var c = y;
            y = b;
            try {
              return a();
            } finally {
              y = c;
            }
          };
          exports.unstable_pauseExecution = function () {};
          exports.unstable_requestPaint = function () {};
          exports.unstable_runWithPriority = function (a, b) {
            switch (a) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                a = 3;
            }
            var c = y;
            y = a;
            try {
              return b();
            } finally {
              y = c;
            }
          };
          exports.unstable_scheduleCallback = function (a, b, c) {
            var d = exports.unstable_now();
            "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
            switch (a) {
              case 1:
                var e = -1;
                break;
              case 2:
                e = 250;
                break;
              case 5:
                e = 1073741823;
                break;
              case 4:
                e = 1E4;
                break;
              default:
                e = 5E3;
            }
            e = c + e;
            a = {
              id: u++,
              callback: b,
              priorityLevel: a,
              startTime: c,
              expirationTime: e,
              sortIndex: -1
            };
            c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = !0, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = !0, I(J)));
            return a;
          };
          exports.unstable_shouldYield = M;
          exports.unstable_wrapCallback = function (a) {
            var b = y;
            return function () {
              var c = y;
              y = b;
              try {
                return a.apply(this, arguments);
              } finally {
                y = c;
              }
            };
          };
        })(scheduler_production_min);
        {
          scheduler.exports = scheduler_production_min;
        }
        var schedulerExports = scheduler.exports;

        /**
         * @license React
         * react-dom.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        var aa = reactExports,
          ca = schedulerExports;
        function p$1(a) {
          for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
          return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        var da = new Set(),
          ea = {};
        function fa(a, b) {
          ha(a, b);
          ha(a + "Capture", b);
        }
        function ha(a, b) {
          ea[a] = b;
          for (a = 0; a < b.length; a++) da.add(b[a]);
        }
        var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
          ja = Object.prototype.hasOwnProperty,
          ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          la = {},
          ma = {};
        function oa(a) {
          if (ja.call(ma, a)) return !0;
          if (ja.call(la, a)) return !1;
          if (ka.test(a)) return ma[a] = !0;
          la[a] = !0;
          return !1;
        }
        function pa(a, b, c, d) {
          if (null !== c && 0 === c.type) return !1;
          switch (typeof b) {
            case "function":
            case "symbol":
              return !0;
            case "boolean":
              if (d) return !1;
              if (null !== c) return !c.acceptsBooleans;
              a = a.toLowerCase().slice(0, 5);
              return "data-" !== a && "aria-" !== a;
            default:
              return !1;
          }
        }
        function qa(a, b, c, d) {
          if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return !0;
          if (d) return !1;
          if (null !== c) switch (c.type) {
            case 3:
              return !b;
            case 4:
              return !1 === b;
            case 5:
              return isNaN(b);
            case 6:
              return isNaN(b) || 1 > b;
          }
          return !1;
        }
        function v$1(a, b, c, d, e, f, g) {
          this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
          this.attributeName = d;
          this.attributeNamespace = e;
          this.mustUseProperty = c;
          this.propertyName = a;
          this.type = b;
          this.sanitizeURL = f;
          this.removeEmptyString = g;
        }
        var z$1 = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a) {
          z$1[a] = new v$1(a, 0, !1, a, null, !1, !1);
        });
        [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (a) {
          var b = a[0];
          z$1[b] = new v$1(b, 1, !1, a[1], null, !1, !1);
        });
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
          z$1[a] = new v$1(a, 2, !1, a.toLowerCase(), null, !1, !1);
        });
        ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a) {
          z$1[a] = new v$1(a, 2, !1, a, null, !1, !1);
        });
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a) {
          z$1[a] = new v$1(a, 3, !1, a.toLowerCase(), null, !1, !1);
        });
        ["checked", "multiple", "muted", "selected"].forEach(function (a) {
          z$1[a] = new v$1(a, 3, !0, a, null, !1, !1);
        });
        ["capture", "download"].forEach(function (a) {
          z$1[a] = new v$1(a, 4, !1, a, null, !1, !1);
        });
        ["cols", "rows", "size", "span"].forEach(function (a) {
          z$1[a] = new v$1(a, 6, !1, a, null, !1, !1);
        });
        ["rowSpan", "start"].forEach(function (a) {
          z$1[a] = new v$1(a, 5, !1, a.toLowerCase(), null, !1, !1);
        });
        var ra = /[\-:]([a-z])/g;
        function sa(a) {
          return a[1].toUpperCase();
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a) {
          var b = a.replace(ra, sa);
          z$1[b] = new v$1(b, 1, !1, a, null, !1, !1);
        });
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a) {
          var b = a.replace(ra, sa);
          z$1[b] = new v$1(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
        });
        ["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
          var b = a.replace(ra, sa);
          z$1[b] = new v$1(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
        });
        ["tabIndex", "crossOrigin"].forEach(function (a) {
          z$1[a] = new v$1(a, 1, !1, a.toLowerCase(), null, !1, !1);
        });
        z$1.xlinkHref = new v$1("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
        ["src", "href", "action", "formAction"].forEach(function (a) {
          z$1[a] = new v$1(a, 1, !1, a.toLowerCase(), null, !0, !0);
        });
        function ta(a, b, c, d) {
          var e = z$1.hasOwnProperty(b) ? z$1[b] : null;
          if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
        }
        var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          va = Symbol.for("react.element"),
          wa = Symbol.for("react.portal"),
          ya = Symbol.for("react.fragment"),
          za = Symbol.for("react.strict_mode"),
          Aa = Symbol.for("react.profiler"),
          Ba = Symbol.for("react.provider"),
          Ca = Symbol.for("react.context"),
          Da = Symbol.for("react.forward_ref"),
          Ea = Symbol.for("react.suspense"),
          Fa = Symbol.for("react.suspense_list"),
          Ga = Symbol.for("react.memo"),
          Ha = Symbol.for("react.lazy");
        var Ia = Symbol.for("react.offscreen");
        var Ja = Symbol.iterator;
        function Ka(a) {
          if (null === a || "object" !== typeof a) return null;
          a = Ja && a[Ja] || a["@@iterator"];
          return "function" === typeof a ? a : null;
        }
        var A$1 = Object.assign,
          La;
        function Ma(a) {
          if (void 0 === La) try {
            throw Error();
          } catch (c) {
            var b = c.stack.trim().match(/\n( *(at )?)/);
            La = b && b[1] || "";
          }
          return "\n" + La + a;
        }
        var Na = !1;
        function Oa(a, b) {
          if (!a || Na) return "";
          Na = !0;
          var c = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (b) {
              if (b = function b() {
                throw Error();
              }, Object.defineProperty(b.prototype, "props", {
                set: function set() {
                  throw Error();
                }
              }), "object" === typeof Reflect && Reflect.construct) {
                try {
                  Reflect.construct(b, []);
                } catch (l) {
                  var d = l;
                }
                Reflect.construct(a, [], b);
              } else {
                try {
                  b.call();
                } catch (l) {
                  d = l;
                }
                a.call(b.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (l) {
                d = l;
              }
              a();
            }
          } catch (l) {
            if (l && d && "string" === typeof l.stack) {
              for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];) h--;
              for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
                if (1 !== g || 1 !== h) {
                  do if (g--, h--, 0 > h || e[g] !== f[h]) {
                    var k = "\n" + e[g].replace(" at new ", " at ");
                    a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                    return k;
                  } while (1 <= g && 0 <= h);
                }
                break;
              }
            }
          } finally {
            Na = !1, Error.prepareStackTrace = c;
          }
          return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
        }
        function Pa(a) {
          switch (a.tag) {
            case 5:
              return Ma(a.type);
            case 16:
              return Ma("Lazy");
            case 13:
              return Ma("Suspense");
            case 19:
              return Ma("SuspenseList");
            case 0:
            case 2:
            case 15:
              return a = Oa(a.type, !1), a;
            case 11:
              return a = Oa(a.type.render, !1), a;
            case 1:
              return a = Oa(a.type, !0), a;
            default:
              return "";
          }
        }
        function Qa(a) {
          if (null == a) return null;
          if ("function" === typeof a) return a.displayName || a.name || null;
          if ("string" === typeof a) return a;
          switch (a) {
            case ya:
              return "Fragment";
            case wa:
              return "Portal";
            case Aa:
              return "Profiler";
            case za:
              return "StrictMode";
            case Ea:
              return "Suspense";
            case Fa:
              return "SuspenseList";
          }
          if ("object" === typeof a) switch (a.$$typeof) {
            case Ca:
              return (a.displayName || "Context") + ".Consumer";
            case Ba:
              return (a._context.displayName || "Context") + ".Provider";
            case Da:
              var b = a.render;
              a = a.displayName;
              a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
              return a;
            case Ga:
              return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
            case Ha:
              b = a._payload;
              a = a._init;
              try {
                return Qa(a(b));
              } catch (c) {}
          }
          return null;
        }
        function Ra(a) {
          var b = a.type;
          switch (a.tag) {
            case 24:
              return "Cache";
            case 9:
              return (b.displayName || "Context") + ".Consumer";
            case 10:
              return (b._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
            case 7:
              return "Fragment";
            case 5:
              return b;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return Qa(b);
            case 8:
              return b === za ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof b) return b.displayName || b.name || null;
              if ("string" === typeof b) return b;
          }
          return null;
        }
        function Sa(a) {
          switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
              return a;
            case "object":
              return a;
            default:
              return "";
          }
        }
        function Ta(a) {
          var b = a.type;
          return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
        }
        function Ua(a) {
          var b = Ta(a) ? "checked" : "value",
            c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b),
            d = "" + a[b];
          if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
            var e = c.get,
              f = c.set;
            Object.defineProperty(a, b, {
              configurable: !0,
              get: function get() {
                return e.call(this);
              },
              set: function set(a) {
                d = "" + a;
                f.call(this, a);
              }
            });
            Object.defineProperty(a, b, {
              enumerable: c.enumerable
            });
            return {
              getValue: function getValue() {
                return d;
              },
              setValue: function setValue(a) {
                d = "" + a;
              },
              stopTracking: function stopTracking() {
                a._valueTracker = null;
                delete a[b];
              }
            };
          }
        }
        function Va(a) {
          a._valueTracker || (a._valueTracker = Ua(a));
        }
        function Wa(a) {
          if (!a) return !1;
          var b = a._valueTracker;
          if (!b) return !0;
          var c = b.getValue();
          var d = "";
          a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
          a = d;
          return a !== c ? (b.setValue(a), !0) : !1;
        }
        function Xa(a) {
          a = a || ("undefined" !== typeof document ? document : void 0);
          if ("undefined" === typeof a) return null;
          try {
            return a.activeElement || a.body;
          } catch (b) {
            return a.body;
          }
        }
        function Ya(a, b) {
          var c = b.checked;
          return A$1({}, b, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != c ? c : a._wrapperState.initialChecked
          });
        }
        function Za(a, b) {
          var c = null == b.defaultValue ? "" : b.defaultValue,
            d = null != b.checked ? b.checked : b.defaultChecked;
          c = Sa(null != b.value ? b.value : c);
          a._wrapperState = {
            initialChecked: d,
            initialValue: c,
            controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
          };
        }
        function ab(a, b) {
          b = b.checked;
          null != b && ta(a, "checked", b, !1);
        }
        function bb(a, b) {
          ab(a, b);
          var c = Sa(b.value),
            d = b.type;
          if (null != c) {
            if ("number" === d) {
              if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
            } else a.value !== "" + c && (a.value = "" + c);
          } else if ("submit" === d || "reset" === d) {
            a.removeAttribute("value");
            return;
          }
          b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
          null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
        }
        function db(a, b, c) {
          if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
            var d = b.type;
            if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
            b = "" + a._wrapperState.initialValue;
            c || b === a.value || (a.value = b);
            a.defaultValue = b;
          }
          c = a.name;
          "" !== c && (a.name = "");
          a.defaultChecked = !!a._wrapperState.initialChecked;
          "" !== c && (a.name = c);
        }
        function cb(a, b, c) {
          if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
        }
        var eb = Array.isArray;
        function fb(a, b, c, d) {
          a = a.options;
          if (b) {
            b = {};
            for (var e = 0; e < c.length; e++) b["$" + c[e]] = !0;
            for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
          } else {
            c = "" + Sa(c);
            b = null;
            for (e = 0; e < a.length; e++) {
              if (a[e].value === c) {
                a[e].selected = !0;
                d && (a[e].defaultSelected = !0);
                return;
              }
              null !== b || a[e].disabled || (b = a[e]);
            }
            null !== b && (b.selected = !0);
          }
        }
        function gb(a, b) {
          if (null != b.dangerouslySetInnerHTML) throw Error(p$1(91));
          return A$1({}, b, {
            value: void 0,
            defaultValue: void 0,
            children: "" + a._wrapperState.initialValue
          });
        }
        function hb(a, b) {
          var c = b.value;
          if (null == c) {
            c = b.children;
            b = b.defaultValue;
            if (null != c) {
              if (null != b) throw Error(p$1(92));
              if (eb(c)) {
                if (1 < c.length) throw Error(p$1(93));
                c = c[0];
              }
              b = c;
            }
            null == b && (b = "");
            c = b;
          }
          a._wrapperState = {
            initialValue: Sa(c)
          };
        }
        function ib(a, b) {
          var c = Sa(b.value),
            d = Sa(b.defaultValue);
          null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
          null != d && (a.defaultValue = "" + d);
        }
        function jb(a) {
          var b = a.textContent;
          b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
        }
        function kb(a) {
          switch (a) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function lb(a, b) {
          return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
        }
        var mb,
          nb = function (a) {
            return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (b, c, d, e) {
              MSApp.execUnsafeLocalFunction(function () {
                return a(b, c, d, e);
              });
            } : a;
          }(function (a, b) {
            if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;else {
              mb = mb || document.createElement("div");
              mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
              for (b = mb.firstChild; a.firstChild;) a.removeChild(a.firstChild);
              for (; b.firstChild;) a.appendChild(b.firstChild);
            }
          });
        function ob(a, b) {
          if (b) {
            var c = a.firstChild;
            if (c && c === a.lastChild && 3 === c.nodeType) {
              c.nodeValue = b;
              return;
            }
          }
          a.textContent = b;
        }
        var pb = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
          },
          qb = ["Webkit", "ms", "Moz", "O"];
        Object.keys(pb).forEach(function (a) {
          qb.forEach(function (b) {
            b = b + a.charAt(0).toUpperCase() + a.substring(1);
            pb[b] = pb[a];
          });
        });
        function rb(a, b, c) {
          return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
        }
        function sb(a, b) {
          a = a.style;
          for (var c in b) if (b.hasOwnProperty(c)) {
            var d = 0 === c.indexOf("--"),
              e = rb(c, b[c], d);
            "float" === c && (c = "cssFloat");
            d ? a.setProperty(c, e) : a[c] = e;
          }
        }
        var tb = A$1({
          menuitem: !0
        }, {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0
        });
        function ub(a, b) {
          if (b) {
            if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p$1(137, a));
            if (null != b.dangerouslySetInnerHTML) {
              if (null != b.children) throw Error(p$1(60));
              if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p$1(61));
            }
            if (null != b.style && "object" !== typeof b.style) throw Error(p$1(62));
          }
        }
        function vb(a, b) {
          if (-1 === a.indexOf("-")) return "string" === typeof b.is;
          switch (a) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var wb = null;
        function xb(a) {
          a = a.target || a.srcElement || window;
          a.correspondingUseElement && (a = a.correspondingUseElement);
          return 3 === a.nodeType ? a.parentNode : a;
        }
        var yb = null,
          zb = null,
          Ab = null;
        function Bb(a) {
          if (a = Cb(a)) {
            if ("function" !== typeof yb) throw Error(p$1(280));
            var b = a.stateNode;
            b && (b = Db(b), yb(a.stateNode, a.type, b));
          }
        }
        function Eb(a) {
          zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
        }
        function Fb() {
          if (zb) {
            var a = zb,
              b = Ab;
            Ab = zb = null;
            Bb(a);
            if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
          }
        }
        function Gb(a, b) {
          return a(b);
        }
        function Hb() {}
        var Ib = !1;
        function Jb(a, b, c) {
          if (Ib) return a(b, c);
          Ib = !0;
          try {
            return Gb(a, b, c);
          } finally {
            if (Ib = !1, null !== zb || null !== Ab) Hb(), Fb();
          }
        }
        function Kb(a, b) {
          var c = a.stateNode;
          if (null === c) return null;
          var d = Db(c);
          if (null === d) return null;
          c = d[b];
          a: switch (b) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
              a = !d;
              break a;
            default:
              a = !1;
          }
          if (a) return null;
          if (c && "function" !== typeof c) throw Error(p$1(231, b, typeof c));
          return c;
        }
        var Lb = !1;
        if (ia) try {
          var Mb = {};
          Object.defineProperty(Mb, "passive", {
            get: function get() {
              Lb = !0;
            }
          });
          window.addEventListener("test", Mb, Mb);
          window.removeEventListener("test", Mb, Mb);
        } catch (a) {
          Lb = !1;
        }
        function Nb(a, b, c, d, e, f, g, h, k) {
          var l = Array.prototype.slice.call(arguments, 3);
          try {
            b.apply(c, l);
          } catch (m) {
            this.onError(m);
          }
        }
        var Ob = !1,
          Pb = null,
          Qb = !1,
          Rb = null,
          Sb = {
            onError: function onError(a) {
              Ob = !0;
              Pb = a;
            }
          };
        function Tb(a, b, c, d, e, f, g, h, k) {
          Ob = !1;
          Pb = null;
          Nb.apply(Sb, arguments);
        }
        function Ub(a, b, c, d, e, f, g, h, k) {
          Tb.apply(this, arguments);
          if (Ob) {
            if (Ob) {
              var l = Pb;
              Ob = !1;
              Pb = null;
            } else throw Error(p$1(198));
            Qb || (Qb = !0, Rb = l);
          }
        }
        function Vb(a) {
          var b = a,
            c = a;
          if (a.alternate) for (; b.return;) b = b.return;else {
            a = b;
            do b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return; while (a);
          }
          return 3 === b.tag ? c : null;
        }
        function Wb(a) {
          if (13 === a.tag) {
            var b = a.memoizedState;
            null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
            if (null !== b) return b.dehydrated;
          }
          return null;
        }
        function Xb(a) {
          if (Vb(a) !== a) throw Error(p$1(188));
        }
        function Yb(a) {
          var b = a.alternate;
          if (!b) {
            b = Vb(a);
            if (null === b) throw Error(p$1(188));
            return b !== a ? null : a;
          }
          for (var c = a, d = b;;) {
            var e = c.return;
            if (null === e) break;
            var f = e.alternate;
            if (null === f) {
              d = e.return;
              if (null !== d) {
                c = d;
                continue;
              }
              break;
            }
            if (e.child === f.child) {
              for (f = e.child; f;) {
                if (f === c) return Xb(e), a;
                if (f === d) return Xb(e), b;
                f = f.sibling;
              }
              throw Error(p$1(188));
            }
            if (c.return !== d.return) c = e, d = f;else {
              for (var g = !1, h = e.child; h;) {
                if (h === c) {
                  g = !0;
                  c = e;
                  d = f;
                  break;
                }
                if (h === d) {
                  g = !0;
                  d = e;
                  c = f;
                  break;
                }
                h = h.sibling;
              }
              if (!g) {
                for (h = f.child; h;) {
                  if (h === c) {
                    g = !0;
                    c = f;
                    d = e;
                    break;
                  }
                  if (h === d) {
                    g = !0;
                    d = f;
                    c = e;
                    break;
                  }
                  h = h.sibling;
                }
                if (!g) throw Error(p$1(189));
              }
            }
            if (c.alternate !== d) throw Error(p$1(190));
          }
          if (3 !== c.tag) throw Error(p$1(188));
          return c.stateNode.current === c ? a : b;
        }
        function Zb(a) {
          a = Yb(a);
          return null !== a ? $b(a) : null;
        }
        function $b(a) {
          if (5 === a.tag || 6 === a.tag) return a;
          for (a = a.child; null !== a;) {
            var b = $b(a);
            if (null !== b) return b;
            a = a.sibling;
          }
          return null;
        }
        var ac = ca.unstable_scheduleCallback,
          bc = ca.unstable_cancelCallback,
          cc = ca.unstable_shouldYield,
          dc = ca.unstable_requestPaint,
          B = ca.unstable_now,
          ec = ca.unstable_getCurrentPriorityLevel,
          fc = ca.unstable_ImmediatePriority,
          gc = ca.unstable_UserBlockingPriority,
          hc = ca.unstable_NormalPriority,
          ic = ca.unstable_LowPriority,
          jc = ca.unstable_IdlePriority,
          kc = null,
          lc = null;
        function mc(a) {
          if (lc && "function" === typeof lc.onCommitFiberRoot) try {
            lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
          } catch (b) {}
        }
        var oc = Math.clz32 ? Math.clz32 : nc,
          pc = Math.log,
          qc = Math.LN2;
        function nc(a) {
          a >>>= 0;
          return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
        }
        var rc = 64,
          sc = 4194304;
        function tc(a) {
          switch (a & -a) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return a & 4194240;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return a & 130023424;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return a;
          }
        }
        function uc(a, b) {
          var c = a.pendingLanes;
          if (0 === c) return 0;
          var d = 0,
            e = a.suspendedLanes,
            f = a.pingedLanes,
            g = c & 268435455;
          if (0 !== g) {
            var h = g & ~e;
            0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
          } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
          if (0 === d) return 0;
          if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
          0 !== (d & 4) && (d |= c & 16);
          b = a.entangledLanes;
          if (0 !== b) for (a = a.entanglements, b &= d; 0 < b;) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
          return d;
        }
        function vc(a, b) {
          switch (a) {
            case 1:
            case 2:
            case 4:
              return b + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return b + 5E3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return -1;
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
              return -1;
            default:
              return -1;
          }
        }
        function wc(a, b) {
          for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f;) {
            var g = 31 - oc(f),
              h = 1 << g,
              k = e[g];
            if (-1 === k) {
              if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
            } else k <= b && (a.expiredLanes |= h);
            f &= ~h;
          }
        }
        function xc(a) {
          a = a.pendingLanes & -1073741825;
          return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
        }
        function yc() {
          var a = rc;
          rc <<= 1;
          0 === (rc & 4194240) && (rc = 64);
          return a;
        }
        function zc(a) {
          for (var b = [], c = 0; 31 > c; c++) b.push(a);
          return b;
        }
        function Ac(a, b, c) {
          a.pendingLanes |= b;
          536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
          a = a.eventTimes;
          b = 31 - oc(b);
          a[b] = c;
        }
        function Bc(a, b) {
          var c = a.pendingLanes & ~b;
          a.pendingLanes = b;
          a.suspendedLanes = 0;
          a.pingedLanes = 0;
          a.expiredLanes &= b;
          a.mutableReadLanes &= b;
          a.entangledLanes &= b;
          b = a.entanglements;
          var d = a.eventTimes;
          for (a = a.expirationTimes; 0 < c;) {
            var e = 31 - oc(c),
              f = 1 << e;
            b[e] = 0;
            d[e] = -1;
            a[e] = -1;
            c &= ~f;
          }
        }
        function Cc(a, b) {
          var c = a.entangledLanes |= b;
          for (a = a.entanglements; c;) {
            var d = 31 - oc(c),
              e = 1 << d;
            e & b | a[d] & b && (a[d] |= b);
            c &= ~e;
          }
        }
        var C = 0;
        function Dc(a) {
          a &= -a;
          return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
        }
        var Ec,
          Fc,
          Gc,
          Hc,
          Ic,
          Jc = !1,
          Kc = [],
          Lc = null,
          Mc = null,
          Nc = null,
          Oc = new Map(),
          Pc = new Map(),
          Qc = [],
          Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
        function Sc(a, b) {
          switch (a) {
            case "focusin":
            case "focusout":
              Lc = null;
              break;
            case "dragenter":
            case "dragleave":
              Mc = null;
              break;
            case "mouseover":
            case "mouseout":
              Nc = null;
              break;
            case "pointerover":
            case "pointerout":
              Oc.delete(b.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Pc.delete(b.pointerId);
          }
        }
        function Tc(a, b, c, d, e, f) {
          if (null === a || a.nativeEvent !== f) return a = {
            blockedOn: b,
            domEventName: c,
            eventSystemFlags: d,
            nativeEvent: f,
            targetContainers: [e]
          }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
          a.eventSystemFlags |= d;
          b = a.targetContainers;
          null !== e && -1 === b.indexOf(e) && b.push(e);
          return a;
        }
        function Uc(a, b, c, d, e) {
          switch (b) {
            case "focusin":
              return Lc = Tc(Lc, a, b, c, d, e), !0;
            case "dragenter":
              return Mc = Tc(Mc, a, b, c, d, e), !0;
            case "mouseover":
              return Nc = Tc(Nc, a, b, c, d, e), !0;
            case "pointerover":
              var f = e.pointerId;
              Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
              return !0;
            case "gotpointercapture":
              return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), !0;
          }
          return !1;
        }
        function Vc(a) {
          var b = Wc(a.target);
          if (null !== b) {
            var c = Vb(b);
            if (null !== c) if (b = c.tag, 13 === b) {
              if (b = Wb(c), null !== b) {
                a.blockedOn = b;
                Ic(a.priority, function () {
                  Gc(c);
                });
                return;
              }
            } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
              a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
              return;
            }
          }
          a.blockedOn = null;
        }
        function Xc(a) {
          if (null !== a.blockedOn) return !1;
          for (var b = a.targetContainers; 0 < b.length;) {
            var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
            if (null === c) {
              c = a.nativeEvent;
              var d = new c.constructor(c.type, c);
              wb = d;
              c.target.dispatchEvent(d);
              wb = null;
            } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, !1;
            b.shift();
          }
          return !0;
        }
        function Zc(a, b, c) {
          Xc(a) && c.delete(b);
        }
        function $c() {
          Jc = !1;
          null !== Lc && Xc(Lc) && (Lc = null);
          null !== Mc && Xc(Mc) && (Mc = null);
          null !== Nc && Xc(Nc) && (Nc = null);
          Oc.forEach(Zc);
          Pc.forEach(Zc);
        }
        function ad(a, b) {
          a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = !0, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
        }
        function bd(a) {
          function b(b) {
            return ad(b, a);
          }
          if (0 < Kc.length) {
            ad(Kc[0], a);
            for (var c = 1; c < Kc.length; c++) {
              var d = Kc[c];
              d.blockedOn === a && (d.blockedOn = null);
            }
          }
          null !== Lc && ad(Lc, a);
          null !== Mc && ad(Mc, a);
          null !== Nc && ad(Nc, a);
          Oc.forEach(b);
          Pc.forEach(b);
          for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
          for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn);) Vc(c), null === c.blockedOn && Qc.shift();
        }
        var cd = ua.ReactCurrentBatchConfig,
          dd = !0;
        function ed(a, b, c, d) {
          var e = C,
            f = cd.transition;
          cd.transition = null;
          try {
            C = 1, fd(a, b, c, d);
          } finally {
            C = e, cd.transition = f;
          }
        }
        function gd(a, b, c, d) {
          var e = C,
            f = cd.transition;
          cd.transition = null;
          try {
            C = 4, fd(a, b, c, d);
          } finally {
            C = e, cd.transition = f;
          }
        }
        function fd(a, b, c, d) {
          if (dd) {
            var e = Yc(a, b, c, d);
            if (null === e) hd(a, b, d, id, c), Sc(a, d);else if (Uc(e, a, b, c, d)) d.stopPropagation();else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
              for (; null !== e;) {
                var f = Cb(e);
                null !== f && Ec(f);
                f = Yc(a, b, c, d);
                null === f && hd(a, b, d, id, c);
                if (f === e) break;
                e = f;
              }
              null !== e && d.stopPropagation();
            } else hd(a, b, d, null, c);
          }
        }
        var id = null;
        function Yc(a, b, c, d) {
          id = null;
          a = xb(d);
          a = Wc(a);
          if (null !== a) if (b = Vb(a), null === b) a = null;else if (c = b.tag, 13 === c) {
            a = Wb(b);
            if (null !== a) return a;
            a = null;
          } else if (3 === c) {
            if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
            a = null;
          } else b !== a && (a = null);
          id = a;
          return null;
        }
        function jd(a) {
          switch (a) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (ec()) {
                case fc:
                  return 1;
                case gc:
                  return 4;
                case hc:
                case ic:
                  return 16;
                case jc:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var kd = null,
          ld = null,
          md = null;
        function nd() {
          if (md) return md;
          var a,
            b = ld,
            c = b.length,
            d,
            e = "value" in kd ? kd.value : kd.textContent,
            f = e.length;
          for (a = 0; a < c && b[a] === e[a]; a++);
          var g = c - a;
          for (d = 1; d <= g && b[c - d] === e[f - d]; d++);
          return md = e.slice(a, 1 < d ? 1 - d : void 0);
        }
        function od(a) {
          var b = a.keyCode;
          "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
          10 === a && (a = 13);
          return 32 <= a || 13 === a ? a : 0;
        }
        function pd() {
          return !0;
        }
        function qd() {
          return !1;
        }
        function rd(a) {
          function b(b, d, e, f, g) {
            this._reactName = b;
            this._targetInst = e;
            this.type = d;
            this.nativeEvent = f;
            this.target = g;
            this.currentTarget = null;
            for (var c in a) a.hasOwnProperty(c) && (b = a[c], this[c] = b ? b(f) : f[c]);
            this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : !1 === f.returnValue) ? pd : qd;
            this.isPropagationStopped = qd;
            return this;
          }
          A$1(b.prototype, {
            preventDefault: function preventDefault() {
              this.defaultPrevented = !0;
              var a = this.nativeEvent;
              a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = pd);
            },
            stopPropagation: function stopPropagation() {
              var a = this.nativeEvent;
              a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = pd);
            },
            persist: function persist() {},
            isPersistent: pd
          });
          return b;
        }
        var sd = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function timeStamp(a) {
              return a.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0
          },
          td = rd(sd),
          ud = A$1({}, sd, {
            view: 0,
            detail: 0
          }),
          vd = rd(ud),
          wd,
          xd,
          yd,
          Ad = A$1({}, ud, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: zd,
            button: 0,
            buttons: 0,
            relatedTarget: function relatedTarget(a) {
              return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
            },
            movementX: function movementX(a) {
              if ("movementX" in a) return a.movementX;
              a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
              return wd;
            },
            movementY: function movementY(a) {
              return "movementY" in a ? a.movementY : xd;
            }
          }),
          Bd = rd(Ad),
          Cd = A$1({}, Ad, {
            dataTransfer: 0
          }),
          Dd = rd(Cd),
          Ed = A$1({}, ud, {
            relatedTarget: 0
          }),
          Fd = rd(Ed),
          Gd = A$1({}, sd, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
          }),
          Hd = rd(Gd),
          Id = A$1({}, sd, {
            clipboardData: function clipboardData(a) {
              return "clipboardData" in a ? a.clipboardData : window.clipboardData;
            }
          }),
          Jd = rd(Id),
          Kd = A$1({}, sd, {
            data: 0
          }),
          Ld = rd(Kd),
          Md = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
          },
          Nd = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
          },
          Od = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
          };
        function Pd(a) {
          var b = this.nativeEvent;
          return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : !1;
        }
        function zd() {
          return Pd;
        }
        var Qd = A$1({}, ud, {
            key: function key(a) {
              if (a.key) {
                var b = Md[a.key] || a.key;
                if ("Unidentified" !== b) return b;
              }
              return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: zd,
            charCode: function charCode(a) {
              return "keypress" === a.type ? od(a) : 0;
            },
            keyCode: function keyCode(a) {
              return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
            },
            which: function which(a) {
              return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
            }
          }),
          Rd = rd(Qd),
          Sd = A$1({}, Ad, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
          }),
          Td = rd(Sd),
          Ud = A$1({}, ud, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: zd
          }),
          Vd = rd(Ud),
          Wd = A$1({}, sd, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
          }),
          Xd = rd(Wd),
          Yd = A$1({}, Ad, {
            deltaX: function deltaX(a) {
              return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
            },
            deltaY: function deltaY(a) {
              return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
            },
            deltaZ: 0,
            deltaMode: 0
          }),
          Zd = rd(Yd),
          $d = [9, 13, 27, 32],
          ae = ia && "CompositionEvent" in window,
          be = null;
        ia && "documentMode" in document && (be = document.documentMode);
        var ce = ia && "TextEvent" in window && !be,
          de = ia && (!ae || be && 8 < be && 11 >= be),
          ee = String.fromCharCode(32),
          fe = !1;
        function ge(a, b) {
          switch (a) {
            case "keyup":
              return -1 !== $d.indexOf(b.keyCode);
            case "keydown":
              return 229 !== b.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function he(a) {
          a = a.detail;
          return "object" === typeof a && "data" in a ? a.data : null;
        }
        var ie = !1;
        function je(a, b) {
          switch (a) {
            case "compositionend":
              return he(b);
            case "keypress":
              if (32 !== b.which) return null;
              fe = !0;
              return ee;
            case "textInput":
              return a = b.data, a === ee && fe ? null : a;
            default:
              return null;
          }
        }
        function ke(a, b) {
          if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = !1, a) : null;
          switch (a) {
            case "paste":
              return null;
            case "keypress":
              if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
                if (b.char && 1 < b.char.length) return b.char;
                if (b.which) return String.fromCharCode(b.which);
              }
              return null;
            case "compositionend":
              return de && "ko" !== b.locale ? null : b.data;
            default:
              return null;
          }
        }
        var le = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0
        };
        function me(a) {
          var b = a && a.nodeName && a.nodeName.toLowerCase();
          return "input" === b ? !!le[a.type] : "textarea" === b ? !0 : !1;
        }
        function ne(a, b, c, d) {
          Eb(d);
          b = oe(b, "onChange");
          0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({
            event: c,
            listeners: b
          }));
        }
        var pe = null,
          qe = null;
        function re(a) {
          se(a, 0);
        }
        function te(a) {
          var b = ue(a);
          if (Wa(b)) return a;
        }
        function ve(a, b) {
          if ("change" === a) return b;
        }
        var we = !1;
        if (ia) {
          var xe;
          if (ia) {
            var ye = "oninput" in document;
            if (!ye) {
              var ze = document.createElement("div");
              ze.setAttribute("oninput", "return;");
              ye = "function" === typeof ze.oninput;
            }
            xe = ye;
          } else xe = !1;
          we = xe && (!document.documentMode || 9 < document.documentMode);
        }
        function Ae() {
          pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
        }
        function Be(a) {
          if ("value" === a.propertyName && te(qe)) {
            var b = [];
            ne(b, qe, a, xb(a));
            Jb(re, b);
          }
        }
        function Ce(a, b, c) {
          "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
        }
        function De(a) {
          if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
        }
        function Ee(a, b) {
          if ("click" === a) return te(b);
        }
        function Fe(a, b) {
          if ("input" === a || "change" === a) return te(b);
        }
        function Ge(a, b) {
          return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
        }
        var He = "function" === typeof Object.is ? Object.is : Ge;
        function Ie(a, b) {
          if (He(a, b)) return !0;
          if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
          var c = Object.keys(a),
            d = Object.keys(b);
          if (c.length !== d.length) return !1;
          for (d = 0; d < c.length; d++) {
            var e = c[d];
            if (!ja.call(b, e) || !He(a[e], b[e])) return !1;
          }
          return !0;
        }
        function Je(a) {
          for (; a && a.firstChild;) a = a.firstChild;
          return a;
        }
        function Ke(a, b) {
          var c = Je(a);
          a = 0;
          for (var d; c;) {
            if (3 === c.nodeType) {
              d = a + c.textContent.length;
              if (a <= b && d >= b) return {
                node: c,
                offset: b - a
              };
              a = d;
            }
            a: {
              for (; c;) {
                if (c.nextSibling) {
                  c = c.nextSibling;
                  break a;
                }
                c = c.parentNode;
              }
              c = void 0;
            }
            c = Je(c);
          }
        }
        function Le(a, b) {
          return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
        }
        function Me() {
          for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement;) {
            try {
              var c = "string" === typeof b.contentWindow.location.href;
            } catch (d) {
              c = !1;
            }
            if (c) a = b.contentWindow;else break;
            b = Xa(a.document);
          }
          return b;
        }
        function Ne(a) {
          var b = a && a.nodeName && a.nodeName.toLowerCase();
          return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
        }
        function Oe(a) {
          var b = Me(),
            c = a.focusedElem,
            d = a.selectionRange;
          if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
            if (null !== d && Ne(c)) if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
              a = a.getSelection();
              var e = c.textContent.length,
                f = Math.min(d.start, e);
              d = void 0 === d.end ? f : Math.min(d.end, e);
              !a.extend && f > d && (e = d, d = f, f = e);
              e = Ke(c, f);
              var g = Ke(c, d);
              e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
            }
            b = [];
            for (a = c; a = a.parentNode;) 1 === a.nodeType && b.push({
              element: a,
              left: a.scrollLeft,
              top: a.scrollTop
            });
            "function" === typeof c.focus && c.focus();
            for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
          }
        }
        var Pe = ia && "documentMode" in document && 11 >= document.documentMode,
          Qe = null,
          Re = null,
          Se = null,
          Te = !1;
        function Ue(a, b, c) {
          var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
          Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = {
            start: d.selectionStart,
            end: d.selectionEnd
          } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {
            anchorNode: d.anchorNode,
            anchorOffset: d.anchorOffset,
            focusNode: d.focusNode,
            focusOffset: d.focusOffset
          }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({
            event: b,
            listeners: d
          }), b.target = Qe)));
        }
        function Ve(a, b) {
          var c = {};
          c[a.toLowerCase()] = b.toLowerCase();
          c["Webkit" + a] = "webkit" + b;
          c["Moz" + a] = "moz" + b;
          return c;
        }
        var We = {
            animationend: Ve("Animation", "AnimationEnd"),
            animationiteration: Ve("Animation", "AnimationIteration"),
            animationstart: Ve("Animation", "AnimationStart"),
            transitionend: Ve("Transition", "TransitionEnd")
          },
          Xe = {},
          Ye = {};
        ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
        function Ze(a) {
          if (Xe[a]) return Xe[a];
          if (!We[a]) return a;
          var b = We[a],
            c;
          for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
          return a;
        }
        var $e = Ze("animationend"),
          af = Ze("animationiteration"),
          bf = Ze("animationstart"),
          cf = Ze("transitionend"),
          df = new Map(),
          ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        function ff(a, b) {
          df.set(a, b);
          fa(b, [a]);
        }
        for (var gf = 0; gf < ef.length; gf++) {
          var hf = ef[gf],
            jf = hf.toLowerCase(),
            kf = hf[0].toUpperCase() + hf.slice(1);
          ff(jf, "on" + kf);
        }
        ff($e, "onAnimationEnd");
        ff(af, "onAnimationIteration");
        ff(bf, "onAnimationStart");
        ff("dblclick", "onDoubleClick");
        ff("focusin", "onFocus");
        ff("focusout", "onBlur");
        ff(cf, "onTransitionEnd");
        ha("onMouseEnter", ["mouseout", "mouseover"]);
        ha("onMouseLeave", ["mouseout", "mouseover"]);
        ha("onPointerEnter", ["pointerout", "pointerover"]);
        ha("onPointerLeave", ["pointerout", "pointerover"]);
        fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
        fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
        fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
        fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
        fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
        fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
          mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
        function nf(a, b, c) {
          var d = a.type || "unknown-event";
          a.currentTarget = c;
          Ub(d, b, void 0, a);
          a.currentTarget = null;
        }
        function se(a, b) {
          b = 0 !== (b & 4);
          for (var c = 0; c < a.length; c++) {
            var d = a[c],
              e = d.event;
            d = d.listeners;
            a: {
              var f = void 0;
              if (b) for (var g = d.length - 1; 0 <= g; g--) {
                var h = d[g],
                  k = h.instance,
                  l = h.currentTarget;
                h = h.listener;
                if (k !== f && e.isPropagationStopped()) break a;
                nf(e, h, l);
                f = k;
              } else for (g = 0; g < d.length; g++) {
                h = d[g];
                k = h.instance;
                l = h.currentTarget;
                h = h.listener;
                if (k !== f && e.isPropagationStopped()) break a;
                nf(e, h, l);
                f = k;
              }
            }
          }
          if (Qb) throw a = Rb, Qb = !1, Rb = null, a;
        }
        function D(a, b) {
          var c = b[of];
          void 0 === c && (c = b[of] = new Set());
          var d = a + "__bubble";
          c.has(d) || (pf(b, a, 2, !1), c.add(d));
        }
        function qf(a, b, c) {
          var d = 0;
          b && (d |= 4);
          pf(c, a, d, b);
        }
        var rf = "_reactListening" + Math.random().toString(36).slice(2);
        function sf(a) {
          if (!a[rf]) {
            a[rf] = !0;
            da.forEach(function (b) {
              "selectionchange" !== b && (mf.has(b) || qf(b, !1, a), qf(b, !0, a));
            });
            var b = 9 === a.nodeType ? a : a.ownerDocument;
            null === b || b[rf] || (b[rf] = !0, qf("selectionchange", !1, b));
          }
        }
        function pf(a, b, c, d) {
          switch (jd(b)) {
            case 1:
              var e = ed;
              break;
            case 4:
              e = gd;
              break;
            default:
              e = fd;
          }
          c = e.bind(null, b, c, a);
          e = void 0;
          !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = !0);
          d ? void 0 !== e ? a.addEventListener(b, c, {
            capture: !0,
            passive: e
          }) : a.addEventListener(b, c, !0) : void 0 !== e ? a.addEventListener(b, c, {
            passive: e
          }) : a.addEventListener(b, c, !1);
        }
        function hd(a, b, c, d, e) {
          var f = d;
          if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (;;) {
            if (null === d) return;
            var g = d.tag;
            if (3 === g || 4 === g) {
              var h = d.stateNode.containerInfo;
              if (h === e || 8 === h.nodeType && h.parentNode === e) break;
              if (4 === g) for (g = d.return; null !== g;) {
                var k = g.tag;
                if (3 === k || 4 === k) if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
                g = g.return;
              }
              for (; null !== h;) {
                g = Wc(h);
                if (null === g) return;
                k = g.tag;
                if (5 === k || 6 === k) {
                  d = f = g;
                  continue a;
                }
                h = h.parentNode;
              }
            }
            d = d.return;
          }
          Jb(function () {
            var d = f,
              e = xb(c),
              g = [];
            a: {
              var h = df.get(a);
              if (void 0 !== h) {
                var k = td,
                  n = a;
                switch (a) {
                  case "keypress":
                    if (0 === od(c)) break a;
                  case "keydown":
                  case "keyup":
                    k = Rd;
                    break;
                  case "focusin":
                    n = "focus";
                    k = Fd;
                    break;
                  case "focusout":
                    n = "blur";
                    k = Fd;
                    break;
                  case "beforeblur":
                  case "afterblur":
                    k = Fd;
                    break;
                  case "click":
                    if (2 === c.button) break a;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    k = Bd;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    k = Dd;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    k = Vd;
                    break;
                  case $e:
                  case af:
                  case bf:
                    k = Hd;
                    break;
                  case cf:
                    k = Xd;
                    break;
                  case "scroll":
                    k = vd;
                    break;
                  case "wheel":
                    k = Zd;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    k = Jd;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    k = Td;
                }
                var t = 0 !== (b & 4),
                  J = !t && "scroll" === a,
                  x = t ? null !== h ? h + "Capture" : null : h;
                t = [];
                for (var w = d, u; null !== w;) {
                  u = w;
                  var F = u.stateNode;
                  5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u))));
                  if (J) break;
                  w = w.return;
                }
                0 < t.length && (h = new k(h, n, null, c, e), g.push({
                  event: h,
                  listeners: t
                }));
              }
            }
            if (0 === (b & 7)) {
              a: {
                h = "mouseover" === a || "pointerover" === a;
                k = "mouseout" === a || "pointerout" === a;
                if (h && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
                if (k || h) {
                  h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window;
                  if (k) {
                    if (n = c.relatedTarget || c.toElement, k = d, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
                  } else k = null, n = d;
                  if (k !== n) {
                    t = Bd;
                    F = "onMouseLeave";
                    x = "onMouseEnter";
                    w = "mouse";
                    if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
                    J = null == k ? h : ue(k);
                    u = null == n ? h : ue(n);
                    h = new t(F, w + "leave", k, c, e);
                    h.target = J;
                    h.relatedTarget = u;
                    F = null;
                    Wc(e) === d && (t = new t(x, w + "enter", n, c, e), t.target = u, t.relatedTarget = J, F = t);
                    J = F;
                    if (k && n) b: {
                      t = k;
                      x = n;
                      w = 0;
                      for (u = t; u; u = vf(u)) w++;
                      u = 0;
                      for (F = x; F; F = vf(F)) u++;
                      for (; 0 < w - u;) t = vf(t), w--;
                      for (; 0 < u - w;) x = vf(x), u--;
                      for (; w--;) {
                        if (t === x || null !== x && t === x.alternate) break b;
                        t = vf(t);
                        x = vf(x);
                      }
                      t = null;
                    } else t = null;
                    null !== k && wf(g, h, k, t, !1);
                    null !== n && null !== J && wf(g, J, n, t, !0);
                  }
                }
              }
              a: {
                h = d ? ue(d) : window;
                k = h.nodeName && h.nodeName.toLowerCase();
                if ("select" === k || "input" === k && "file" === h.type) var na = ve;else if (me(h)) {
                  if (we) na = Fe;else {
                    na = De;
                    var xa = Ce;
                  }
                } else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (na = Ee);
                if (na && (na = na(a, d))) {
                  ne(g, na, c, e);
                  break a;
                }
                xa && xa(a, h, d);
                "focusout" === a && (xa = h._wrapperState) && xa.controlled && "number" === h.type && cb(h, "number", h.value);
              }
              xa = d ? ue(d) : window;
              switch (a) {
                case "focusin":
                  if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d, Se = null;
                  break;
                case "focusout":
                  Se = Re = Qe = null;
                  break;
                case "mousedown":
                  Te = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  Te = !1;
                  Ue(g, c, e);
                  break;
                case "selectionchange":
                  if (Pe) break;
                case "keydown":
                case "keyup":
                  Ue(g, c, e);
              }
              var $a;
              if (ae) b: {
                switch (a) {
                  case "compositionstart":
                    var ba = "onCompositionStart";
                    break b;
                  case "compositionend":
                    ba = "onCompositionEnd";
                    break b;
                  case "compositionupdate":
                    ba = "onCompositionUpdate";
                    break b;
                }
                ba = void 0;
              } else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
              ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e, ld = "value" in kd ? kd.value : kd.textContent, ie = !0)), xa = oe(d, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e), g.push({
                event: ba,
                listeners: xa
              }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
              if ($a = ce ? je(a, c) : ke(a, c)) d = oe(d, "onBeforeInput"), 0 < d.length && (e = new Ld("onBeforeInput", "beforeinput", null, c, e), g.push({
                event: e,
                listeners: d
              }), e.data = $a);
            }
            se(g, b);
          });
        }
        function tf(a, b, c) {
          return {
            instance: a,
            listener: b,
            currentTarget: c
          };
        }
        function oe(a, b) {
          for (var c = b + "Capture", d = []; null !== a;) {
            var e = a,
              f = e.stateNode;
            5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), f = Kb(a, b), null != f && d.push(tf(a, f, e)));
            a = a.return;
          }
          return d;
        }
        function vf(a) {
          if (null === a) return null;
          do a = a.return; while (a && 5 !== a.tag);
          return a ? a : null;
        }
        function wf(a, b, c, d, e) {
          for (var f = b._reactName, g = []; null !== c && c !== d;) {
            var h = c,
              k = h.alternate,
              l = h.stateNode;
            if (null !== k && k === d) break;
            5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), null != k && g.push(tf(c, k, h))));
            c = c.return;
          }
          0 !== g.length && a.push({
            event: b,
            listeners: g
          });
        }
        var xf = /\r\n?/g,
          yf = /\u0000|\uFFFD/g;
        function zf(a) {
          return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
        }
        function Af(a, b, c) {
          b = zf(b);
          if (zf(a) !== b && c) throw Error(p$1(425));
        }
        function Bf() {}
        var Cf = null,
          Df = null;
        function Ef(a, b) {
          return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
        }
        var Ff = "function" === typeof setTimeout ? setTimeout : void 0,
          Gf = "function" === typeof clearTimeout ? clearTimeout : void 0,
          Hf = "function" === typeof Promise ? Promise : void 0,
          Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function (a) {
            return Hf.resolve(null).then(a).catch(If);
          } : Ff;
        function If(a) {
          setTimeout(function () {
            throw a;
          });
        }
        function Kf(a, b) {
          var c = b,
            d = 0;
          do {
            var e = c.nextSibling;
            a.removeChild(c);
            if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
              if (0 === d) {
                a.removeChild(e);
                bd(b);
                return;
              }
              d--;
            } else "$" !== c && "$?" !== c && "$!" !== c || d++;
            c = e;
          } while (c);
          bd(b);
        }
        function Lf(a) {
          for (; null != a; a = a.nextSibling) {
            var b = a.nodeType;
            if (1 === b || 3 === b) break;
            if (8 === b) {
              b = a.data;
              if ("$" === b || "$!" === b || "$?" === b) break;
              if ("/$" === b) return null;
            }
          }
          return a;
        }
        function Mf(a) {
          a = a.previousSibling;
          for (var b = 0; a;) {
            if (8 === a.nodeType) {
              var c = a.data;
              if ("$" === c || "$!" === c || "$?" === c) {
                if (0 === b) return a;
                b--;
              } else "/$" === c && b++;
            }
            a = a.previousSibling;
          }
          return null;
        }
        var Nf = Math.random().toString(36).slice(2),
          Of = "__reactFiber$" + Nf,
          Pf = "__reactProps$" + Nf,
          uf = "__reactContainer$" + Nf,
          of = "__reactEvents$" + Nf,
          Qf = "__reactListeners$" + Nf,
          Rf = "__reactHandles$" + Nf;
        function Wc(a) {
          var b = a[Of];
          if (b) return b;
          for (var c = a.parentNode; c;) {
            if (b = c[uf] || c[Of]) {
              c = b.alternate;
              if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a;) {
                if (c = a[Of]) return c;
                a = Mf(a);
              }
              return b;
            }
            a = c;
            c = a.parentNode;
          }
          return null;
        }
        function Cb(a) {
          a = a[Of] || a[uf];
          return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
        }
        function ue(a) {
          if (5 === a.tag || 6 === a.tag) return a.stateNode;
          throw Error(p$1(33));
        }
        function Db(a) {
          return a[Pf] || null;
        }
        var Sf = [],
          Tf = -1;
        function Uf(a) {
          return {
            current: a
          };
        }
        function E(a) {
          0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
        }
        function G(a, b) {
          Tf++;
          Sf[Tf] = a.current;
          a.current = b;
        }
        var Vf = {},
          H = Uf(Vf),
          Wf = Uf(!1),
          Xf = Vf;
        function Yf(a, b) {
          var c = a.type.contextTypes;
          if (!c) return Vf;
          var d = a.stateNode;
          if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
          var e = {},
            f;
          for (f in c) e[f] = b[f];
          d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
          return e;
        }
        function Zf(a) {
          a = a.childContextTypes;
          return null !== a && void 0 !== a;
        }
        function $f() {
          E(Wf);
          E(H);
        }
        function ag(a, b, c) {
          if (H.current !== Vf) throw Error(p$1(168));
          G(H, b);
          G(Wf, c);
        }
        function bg(a, b, c) {
          var d = a.stateNode;
          b = b.childContextTypes;
          if ("function" !== typeof d.getChildContext) return c;
          d = d.getChildContext();
          for (var e in d) if (!(e in b)) throw Error(p$1(108, Ra(a) || "Unknown", e));
          return A$1({}, c, d);
        }
        function cg(a) {
          a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
          Xf = H.current;
          G(H, a);
          G(Wf, Wf.current);
          return !0;
        }
        function dg(a, b, c) {
          var d = a.stateNode;
          if (!d) throw Error(p$1(169));
          c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
          G(Wf, c);
        }
        var eg = null,
          fg = !1,
          gg = !1;
        function hg(a) {
          null === eg ? eg = [a] : eg.push(a);
        }
        function ig(a) {
          fg = !0;
          hg(a);
        }
        function jg() {
          if (!gg && null !== eg) {
            gg = !0;
            var a = 0,
              b = C;
            try {
              var c = eg;
              for (C = 1; a < c.length; a++) {
                var d = c[a];
                do d = d(!0); while (null !== d);
              }
              eg = null;
              fg = !1;
            } catch (e) {
              throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
            } finally {
              C = b, gg = !1;
            }
          }
          return null;
        }
        var kg = [],
          lg = 0,
          mg = null,
          ng = 0,
          og = [],
          pg = 0,
          qg = null,
          rg = 1,
          sg = "";
        function tg(a, b) {
          kg[lg++] = ng;
          kg[lg++] = mg;
          mg = a;
          ng = b;
        }
        function ug(a, b, c) {
          og[pg++] = rg;
          og[pg++] = sg;
          og[pg++] = qg;
          qg = a;
          var d = rg;
          a = sg;
          var e = 32 - oc(d) - 1;
          d &= ~(1 << e);
          c += 1;
          var f = 32 - oc(b) + e;
          if (30 < f) {
            var g = e - e % 5;
            f = (d & (1 << g) - 1).toString(32);
            d >>= g;
            e -= g;
            rg = 1 << 32 - oc(b) + e | c << e | d;
            sg = f + a;
          } else rg = 1 << f | c << e | d, sg = a;
        }
        function vg(a) {
          null !== a.return && (tg(a, 1), ug(a, 1, 0));
        }
        function wg(a) {
          for (; a === mg;) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
          for (; a === qg;) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
        }
        var xg = null,
          yg = null,
          I = !1,
          zg = null;
        function Ag(a, b) {
          var c = Bg(5, null, null, 0);
          c.elementType = "DELETED";
          c.stateNode = b;
          c.return = a;
          b = a.deletions;
          null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
        }
        function Cg(a, b) {
          switch (a.tag) {
            case 5:
              var c = a.type;
              b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
              return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), !0) : !1;
            case 6:
              return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, !0) : !1;
            case 13:
              return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? {
                id: rg,
                overflow: sg
              } : null, a.memoizedState = {
                dehydrated: b,
                treeContext: c,
                retryLane: 1073741824
              }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, !0) : !1;
            default:
              return !1;
          }
        }
        function Dg(a) {
          return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
        }
        function Eg(a) {
          if (I) {
            var b = yg;
            if (b) {
              var c = b;
              if (!Cg(a, b)) {
                if (Dg(a)) throw Error(p$1(418));
                b = Lf(c.nextSibling);
                var d = xg;
                b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = !1, xg = a);
              }
            } else {
              if (Dg(a)) throw Error(p$1(418));
              a.flags = a.flags & -4097 | 2;
              I = !1;
              xg = a;
            }
          }
        }
        function Fg(a) {
          for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) a = a.return;
          xg = a;
        }
        function Gg(a) {
          if (a !== xg) return !1;
          if (!I) return Fg(a), I = !0, !1;
          var b;
          (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
          if (b && (b = yg)) {
            if (Dg(a)) throw Hg(), Error(p$1(418));
            for (; b;) Ag(a, b), b = Lf(b.nextSibling);
          }
          Fg(a);
          if (13 === a.tag) {
            a = a.memoizedState;
            a = null !== a ? a.dehydrated : null;
            if (!a) throw Error(p$1(317));
            a: {
              a = a.nextSibling;
              for (b = 0; a;) {
                if (8 === a.nodeType) {
                  var c = a.data;
                  if ("/$" === c) {
                    if (0 === b) {
                      yg = Lf(a.nextSibling);
                      break a;
                    }
                    b--;
                  } else "$" !== c && "$!" !== c && "$?" !== c || b++;
                }
                a = a.nextSibling;
              }
              yg = null;
            }
          } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
          return !0;
        }
        function Hg() {
          for (var a = yg; a;) a = Lf(a.nextSibling);
        }
        function Ig() {
          yg = xg = null;
          I = !1;
        }
        function Jg(a) {
          null === zg ? zg = [a] : zg.push(a);
        }
        var Kg = ua.ReactCurrentBatchConfig;
        function Lg(a, b, c) {
          a = c.ref;
          if (null !== a && "function" !== typeof a && "object" !== typeof a) {
            if (c._owner) {
              c = c._owner;
              if (c) {
                if (1 !== c.tag) throw Error(p$1(309));
                var d = c.stateNode;
              }
              if (!d) throw Error(p$1(147, a));
              var e = d,
                f = "" + a;
              if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
              b = function b(a) {
                var b = e.refs;
                null === a ? delete b[f] : b[f] = a;
              };
              b._stringRef = f;
              return b;
            }
            if ("string" !== typeof a) throw Error(p$1(284));
            if (!c._owner) throw Error(p$1(290, a));
          }
          return a;
        }
        function Mg(a, b) {
          a = Object.prototype.toString.call(b);
          throw Error(p$1(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
        }
        function Ng(a) {
          var b = a._init;
          return b(a._payload);
        }
        function Og(a) {
          function b(b, c) {
            if (a) {
              var d = b.deletions;
              null === d ? (b.deletions = [c], b.flags |= 16) : d.push(c);
            }
          }
          function c(c, d) {
            if (!a) return null;
            for (; null !== d;) b(c, d), d = d.sibling;
            return null;
          }
          function d(a, b) {
            for (a = new Map(); null !== b;) null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
            return a;
          }
          function e(a, b) {
            a = Pg(a, b);
            a.index = 0;
            a.sibling = null;
            return a;
          }
          function f(b, c, d) {
            b.index = d;
            if (!a) return b.flags |= 1048576, c;
            d = b.alternate;
            if (null !== d) return d = d.index, d < c ? (b.flags |= 2, c) : d;
            b.flags |= 2;
            return c;
          }
          function g(b) {
            a && null === b.alternate && (b.flags |= 2);
            return b;
          }
          function h(a, b, c, d) {
            if (null === b || 6 !== b.tag) return b = Qg(c, a.mode, d), b.return = a, b;
            b = e(b, c);
            b.return = a;
            return b;
          }
          function k(a, b, c, d) {
            var f = c.type;
            if (f === ya) return m(a, b, c.props.children, d, c.key);
            if (null !== b && (b.elementType === f || "object" === typeof f && null !== f && f.$$typeof === Ha && Ng(f) === b.type)) return d = e(b, c.props), d.ref = Lg(a, b, c), d.return = a, d;
            d = Rg(c.type, c.key, c.props, null, a.mode, d);
            d.ref = Lg(a, b, c);
            d.return = a;
            return d;
          }
          function l(a, b, c, d) {
            if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = Sg(c, a.mode, d), b.return = a, b;
            b = e(b, c.children || []);
            b.return = a;
            return b;
          }
          function m(a, b, c, d, f) {
            if (null === b || 7 !== b.tag) return b = Tg(c, a.mode, d, f), b.return = a, b;
            b = e(b, c);
            b.return = a;
            return b;
          }
          function q(a, b, c) {
            if ("string" === typeof b && "" !== b || "number" === typeof b) return b = Qg("" + b, a.mode, c), b.return = a, b;
            if ("object" === typeof b && null !== b) {
              switch (b.$$typeof) {
                case va:
                  return c = Rg(b.type, b.key, b.props, null, a.mode, c), c.ref = Lg(a, null, b), c.return = a, c;
                case wa:
                  return b = Sg(b, a.mode, c), b.return = a, b;
                case Ha:
                  var d = b._init;
                  return q(a, d(b._payload), c);
              }
              if (eb(b) || Ka(b)) return b = Tg(b, a.mode, c, null), b.return = a, b;
              Mg(a, b);
            }
            return null;
          }
          function r(a, b, c, d) {
            var e = null !== b ? b.key : null;
            if ("string" === typeof c && "" !== c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
            if ("object" === typeof c && null !== c) {
              switch (c.$$typeof) {
                case va:
                  return c.key === e ? k(a, b, c, d) : null;
                case wa:
                  return c.key === e ? l(a, b, c, d) : null;
                case Ha:
                  return e = c._init, r(a, b, e(c._payload), d);
              }
              if (eb(c) || Ka(c)) return null !== e ? null : m(a, b, c, d, null);
              Mg(a, c);
            }
            return null;
          }
          function y(a, b, c, d, e) {
            if ("string" === typeof d && "" !== d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);
            if ("object" === typeof d && null !== d) {
              switch (d.$$typeof) {
                case va:
                  return a = a.get(null === d.key ? c : d.key) || null, k(b, a, d, e);
                case wa:
                  return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
                case Ha:
                  var f = d._init;
                  return y(a, b, c, f(d._payload), e);
              }
              if (eb(d) || Ka(d)) return a = a.get(c) || null, m(b, a, d, e, null);
              Mg(b, d);
            }
            return null;
          }
          function n(e, g, h, k) {
            for (var l = null, m = null, u = g, w = g = 0, x = null; null !== u && w < h.length; w++) {
              u.index > w ? (x = u, u = null) : x = u.sibling;
              var n = r(e, u, h[w], k);
              if (null === n) {
                null === u && (u = x);
                break;
              }
              a && u && null === n.alternate && b(e, u);
              g = f(n, g, w);
              null === m ? l = n : m.sibling = n;
              m = n;
              u = x;
            }
            if (w === h.length) return c(e, u), I && tg(e, w), l;
            if (null === u) {
              for (; w < h.length; w++) u = q(e, h[w], k), null !== u && (g = f(u, g, w), null === m ? l = u : m.sibling = u, m = u);
              I && tg(e, w);
              return l;
            }
            for (u = d(e, u); w < h.length; w++) x = y(u, e, w, h[w], k), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), g = f(x, g, w), null === m ? l = x : m.sibling = x, m = x);
            a && u.forEach(function (a) {
              return b(e, a);
            });
            I && tg(e, w);
            return l;
          }
          function t(e, g, h, k) {
            var l = Ka(h);
            if ("function" !== typeof l) throw Error(p$1(150));
            h = l.call(h);
            if (null == h) throw Error(p$1(151));
            for (var u = l = null, m = g, w = g = 0, x = null, n = h.next(); null !== m && !n.done; w++, n = h.next()) {
              m.index > w ? (x = m, m = null) : x = m.sibling;
              var t = r(e, m, n.value, k);
              if (null === t) {
                null === m && (m = x);
                break;
              }
              a && m && null === t.alternate && b(e, m);
              g = f(t, g, w);
              null === u ? l = t : u.sibling = t;
              u = t;
              m = x;
            }
            if (n.done) return c(e, m), I && tg(e, w), l;
            if (null === m) {
              for (; !n.done; w++, n = h.next()) n = q(e, n.value, k), null !== n && (g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
              I && tg(e, w);
              return l;
            }
            for (m = d(e, m); !n.done; w++, n = h.next()) n = y(m, e, w, n.value, k), null !== n && (a && null !== n.alternate && m.delete(null === n.key ? w : n.key), g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
            a && m.forEach(function (a) {
              return b(e, a);
            });
            I && tg(e, w);
            return l;
          }
          function J(a, d, f, h) {
            "object" === typeof f && null !== f && f.type === ya && null === f.key && (f = f.props.children);
            if ("object" === typeof f && null !== f) {
              switch (f.$$typeof) {
                case va:
                  a: {
                    for (var k = f.key, l = d; null !== l;) {
                      if (l.key === k) {
                        k = f.type;
                        if (k === ya) {
                          if (7 === l.tag) {
                            c(a, l.sibling);
                            d = e(l, f.props.children);
                            d.return = a;
                            a = d;
                            break a;
                          }
                        } else if (l.elementType === k || "object" === typeof k && null !== k && k.$$typeof === Ha && Ng(k) === l.type) {
                          c(a, l.sibling);
                          d = e(l, f.props);
                          d.ref = Lg(a, l, f);
                          d.return = a;
                          a = d;
                          break a;
                        }
                        c(a, l);
                        break;
                      } else b(a, l);
                      l = l.sibling;
                    }
                    f.type === ya ? (d = Tg(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = Rg(f.type, f.key, f.props, null, a.mode, h), h.ref = Lg(a, d, f), h.return = a, a = h);
                  }
                  return g(a);
                case wa:
                  a: {
                    for (l = f.key; null !== d;) {
                      if (d.key === l) {
                        if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                          c(a, d.sibling);
                          d = e(d, f.children || []);
                          d.return = a;
                          a = d;
                          break a;
                        } else {
                          c(a, d);
                          break;
                        }
                      } else b(a, d);
                      d = d.sibling;
                    }
                    d = Sg(f, a.mode, h);
                    d.return = a;
                    a = d;
                  }
                  return g(a);
                case Ha:
                  return l = f._init, J(a, d, l(f._payload), h);
              }
              if (eb(f)) return n(a, d, f, h);
              if (Ka(f)) return t(a, d, f, h);
              Mg(a, f);
            }
            return "string" === typeof f && "" !== f || "number" === typeof f ? (f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = Qg(f, a.mode, h), d.return = a, a = d), g(a)) : c(a, d);
          }
          return J;
        }
        var Ug = Og(!0),
          Vg = Og(!1),
          Wg = Uf(null),
          Xg = null,
          Yg = null,
          Zg = null;
        function $g() {
          Zg = Yg = Xg = null;
        }
        function ah(a) {
          var b = Wg.current;
          E(Wg);
          a._currentValue = b;
        }
        function bh(a, b, c) {
          for (; null !== a;) {
            var d = a.alternate;
            (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
            if (a === c) break;
            a = a.return;
          }
        }
        function ch(a, b) {
          Xg = a;
          Zg = Yg = null;
          a = a.dependencies;
          null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = !0), a.firstContext = null);
        }
        function eh(a) {
          var b = a._currentValue;
          if (Zg !== a) if (a = {
            context: a,
            memoizedValue: b,
            next: null
          }, null === Yg) {
            if (null === Xg) throw Error(p$1(308));
            Yg = a;
            Xg.dependencies = {
              lanes: 0,
              firstContext: a
            };
          } else Yg = Yg.next = a;
          return b;
        }
        var fh = null;
        function gh(a) {
          null === fh ? fh = [a] : fh.push(a);
        }
        function hh(a, b, c, d) {
          var e = b.interleaved;
          null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
          b.interleaved = c;
          return ih(a, d);
        }
        function ih(a, b) {
          a.lanes |= b;
          var c = a.alternate;
          null !== c && (c.lanes |= b);
          c = a;
          for (a = a.return; null !== a;) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
          return 3 === c.tag ? c.stateNode : null;
        }
        var jh = !1;
        function kh(a) {
          a.updateQueue = {
            baseState: a.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
              pending: null,
              interleaved: null,
              lanes: 0
            },
            effects: null
          };
        }
        function lh(a, b) {
          a = a.updateQueue;
          b.updateQueue === a && (b.updateQueue = {
            baseState: a.baseState,
            firstBaseUpdate: a.firstBaseUpdate,
            lastBaseUpdate: a.lastBaseUpdate,
            shared: a.shared,
            effects: a.effects
          });
        }
        function mh(a, b) {
          return {
            eventTime: a,
            lane: b,
            tag: 0,
            payload: null,
            callback: null,
            next: null
          };
        }
        function nh(a, b, c) {
          var d = a.updateQueue;
          if (null === d) return null;
          d = d.shared;
          if (0 !== (K & 2)) {
            var e = d.pending;
            null === e ? b.next = b : (b.next = e.next, e.next = b);
            d.pending = b;
            return ih(a, c);
          }
          e = d.interleaved;
          null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
          d.interleaved = b;
          return ih(a, c);
        }
        function oh(a, b, c) {
          b = b.updateQueue;
          if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
            var d = b.lanes;
            d &= a.pendingLanes;
            c |= d;
            b.lanes = c;
            Cc(a, c);
          }
        }
        function ph(a, b) {
          var c = a.updateQueue,
            d = a.alternate;
          if (null !== d && (d = d.updateQueue, c === d)) {
            var e = null,
              f = null;
            c = c.firstBaseUpdate;
            if (null !== c) {
              do {
                var g = {
                  eventTime: c.eventTime,
                  lane: c.lane,
                  tag: c.tag,
                  payload: c.payload,
                  callback: c.callback,
                  next: null
                };
                null === f ? e = f = g : f = f.next = g;
                c = c.next;
              } while (null !== c);
              null === f ? e = f = b : f = f.next = b;
            } else e = f = b;
            c = {
              baseState: d.baseState,
              firstBaseUpdate: e,
              lastBaseUpdate: f,
              shared: d.shared,
              effects: d.effects
            };
            a.updateQueue = c;
            return;
          }
          a = c.lastBaseUpdate;
          null === a ? c.firstBaseUpdate = b : a.next = b;
          c.lastBaseUpdate = b;
        }
        function qh(a, b, c, d) {
          var e = a.updateQueue;
          jh = !1;
          var f = e.firstBaseUpdate,
            g = e.lastBaseUpdate,
            h = e.shared.pending;
          if (null !== h) {
            e.shared.pending = null;
            var k = h,
              l = k.next;
            k.next = null;
            null === g ? f = l : g.next = l;
            g = k;
            var m = a.alternate;
            null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
          }
          if (null !== f) {
            var q = e.baseState;
            g = 0;
            m = l = k = null;
            h = f;
            do {
              var r = h.lane,
                y = h.eventTime;
              if ((d & r) === r) {
                null !== m && (m = m.next = {
                  eventTime: y,
                  lane: 0,
                  tag: h.tag,
                  payload: h.payload,
                  callback: h.callback,
                  next: null
                });
                a: {
                  var n = a,
                    t = h;
                  r = b;
                  y = c;
                  switch (t.tag) {
                    case 1:
                      n = t.payload;
                      if ("function" === typeof n) {
                        q = n.call(y, q, r);
                        break a;
                      }
                      q = n;
                      break a;
                    case 3:
                      n.flags = n.flags & -65537 | 128;
                    case 0:
                      n = t.payload;
                      r = "function" === typeof n ? n.call(y, q, r) : n;
                      if (null === r || void 0 === r) break a;
                      q = A$1({}, q, r);
                      break a;
                    case 2:
                      jh = !0;
                  }
                }
                null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [h] : r.push(h));
              } else y = {
                eventTime: y,
                lane: r,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
              }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
              h = h.next;
              if (null === h) if (h = e.shared.pending, null === h) break;else r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
            } while (1);
            null === m && (k = q);
            e.baseState = k;
            e.firstBaseUpdate = l;
            e.lastBaseUpdate = m;
            b = e.shared.interleaved;
            if (null !== b) {
              e = b;
              do g |= e.lane, e = e.next; while (e !== b);
            } else null === f && (e.shared.lanes = 0);
            rh |= g;
            a.lanes = g;
            a.memoizedState = q;
          }
        }
        function sh(a, b, c) {
          a = b.effects;
          b.effects = null;
          if (null !== a) for (b = 0; b < a.length; b++) {
            var d = a[b],
              e = d.callback;
            if (null !== e) {
              d.callback = null;
              d = c;
              if ("function" !== typeof e) throw Error(p$1(191, e));
              e.call(d);
            }
          }
        }
        var th = {},
          uh = Uf(th),
          vh = Uf(th),
          wh = Uf(th);
        function xh(a) {
          if (a === th) throw Error(p$1(174));
          return a;
        }
        function yh(a, b) {
          G(wh, b);
          G(vh, a);
          G(uh, th);
          a = b.nodeType;
          switch (a) {
            case 9:
            case 11:
              b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
              break;
            default:
              a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
          }
          E(uh);
          G(uh, b);
        }
        function zh() {
          E(uh);
          E(vh);
          E(wh);
        }
        function Ah(a) {
          xh(wh.current);
          var b = xh(uh.current);
          var c = lb(b, a.type);
          b !== c && (G(vh, a), G(uh, c));
        }
        function Bh(a) {
          vh.current === a && (E(uh), E(vh));
        }
        var L = Uf(0);
        function Ch(a) {
          for (var b = a; null !== b;) {
            if (13 === b.tag) {
              var c = b.memoizedState;
              if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
            } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
              if (0 !== (b.flags & 128)) return b;
            } else if (null !== b.child) {
              b.child.return = b;
              b = b.child;
              continue;
            }
            if (b === a) break;
            for (; null === b.sibling;) {
              if (null === b.return || b.return === a) return null;
              b = b.return;
            }
            b.sibling.return = b.return;
            b = b.sibling;
          }
          return null;
        }
        var Dh = [];
        function Eh() {
          for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
          Dh.length = 0;
        }
        var Fh = ua.ReactCurrentDispatcher,
          Gh = ua.ReactCurrentBatchConfig,
          Hh = 0,
          M = null,
          N = null,
          O = null,
          Ih = !1,
          Jh = !1,
          Kh = 0,
          Lh = 0;
        function P() {
          throw Error(p$1(321));
        }
        function Mh(a, b) {
          if (null === b) return !1;
          for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return !1;
          return !0;
        }
        function Nh(a, b, c, d, e, f) {
          Hh = f;
          M = b;
          b.memoizedState = null;
          b.updateQueue = null;
          b.lanes = 0;
          Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
          a = c(d, e);
          if (Jh) {
            f = 0;
            do {
              Jh = !1;
              Kh = 0;
              if (25 <= f) throw Error(p$1(301));
              f += 1;
              O = N = null;
              b.updateQueue = null;
              Fh.current = Qh;
              a = c(d, e);
            } while (Jh);
          }
          Fh.current = Rh;
          b = null !== N && null !== N.next;
          Hh = 0;
          O = N = M = null;
          Ih = !1;
          if (b) throw Error(p$1(300));
          return a;
        }
        function Sh() {
          var a = 0 !== Kh;
          Kh = 0;
          return a;
        }
        function Th() {
          var a = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
          };
          null === O ? M.memoizedState = O = a : O = O.next = a;
          return O;
        }
        function Uh() {
          if (null === N) {
            var a = M.alternate;
            a = null !== a ? a.memoizedState : null;
          } else a = N.next;
          var b = null === O ? M.memoizedState : O.next;
          if (null !== b) O = b, N = a;else {
            if (null === a) throw Error(p$1(310));
            N = a;
            a = {
              memoizedState: N.memoizedState,
              baseState: N.baseState,
              baseQueue: N.baseQueue,
              queue: N.queue,
              next: null
            };
            null === O ? M.memoizedState = O = a : O = O.next = a;
          }
          return O;
        }
        function Vh(a, b) {
          return "function" === typeof b ? b(a) : b;
        }
        function Wh(a) {
          var b = Uh(),
            c = b.queue;
          if (null === c) throw Error(p$1(311));
          c.lastRenderedReducer = a;
          var d = N,
            e = d.baseQueue,
            f = c.pending;
          if (null !== f) {
            if (null !== e) {
              var g = e.next;
              e.next = f.next;
              f.next = g;
            }
            d.baseQueue = e = f;
            c.pending = null;
          }
          if (null !== e) {
            f = e.next;
            d = d.baseState;
            var h = g = null,
              k = null,
              l = f;
            do {
              var m = l.lane;
              if ((Hh & m) === m) null !== k && (k = k.next = {
                lane: 0,
                action: l.action,
                hasEagerState: l.hasEagerState,
                eagerState: l.eagerState,
                next: null
              }), d = l.hasEagerState ? l.eagerState : a(d, l.action);else {
                var q = {
                  lane: m,
                  action: l.action,
                  hasEagerState: l.hasEagerState,
                  eagerState: l.eagerState,
                  next: null
                };
                null === k ? (h = k = q, g = d) : k = k.next = q;
                M.lanes |= m;
                rh |= m;
              }
              l = l.next;
            } while (null !== l && l !== f);
            null === k ? g = d : k.next = h;
            He(d, b.memoizedState) || (dh = !0);
            b.memoizedState = d;
            b.baseState = g;
            b.baseQueue = k;
            c.lastRenderedState = d;
          }
          a = c.interleaved;
          if (null !== a) {
            e = a;
            do f = e.lane, M.lanes |= f, rh |= f, e = e.next; while (e !== a);
          } else null === e && (c.lanes = 0);
          return [b.memoizedState, c.dispatch];
        }
        function Xh(a) {
          var b = Uh(),
            c = b.queue;
          if (null === c) throw Error(p$1(311));
          c.lastRenderedReducer = a;
          var d = c.dispatch,
            e = c.pending,
            f = b.memoizedState;
          if (null !== e) {
            c.pending = null;
            var g = e = e.next;
            do f = a(f, g.action), g = g.next; while (g !== e);
            He(f, b.memoizedState) || (dh = !0);
            b.memoizedState = f;
            null === b.baseQueue && (b.baseState = f);
            c.lastRenderedState = f;
          }
          return [f, d];
        }
        function Yh() {}
        function Zh(a, b) {
          var c = M,
            d = Uh(),
            e = b(),
            f = !He(d.memoizedState, e);
          f && (d.memoizedState = e, dh = !0);
          d = d.queue;
          $h(ai.bind(null, c, d, a), [a]);
          if (d.getSnapshot !== b || f || null !== O && O.memoizedState.tag & 1) {
            c.flags |= 2048;
            bi(9, ci.bind(null, c, d, e, b), void 0, null);
            if (null === Q) throw Error(p$1(349));
            0 !== (Hh & 30) || di(c, b, e);
          }
          return e;
        }
        function di(a, b, c) {
          a.flags |= 16384;
          a = {
            getSnapshot: b,
            value: c
          };
          b = M.updateQueue;
          null === b ? (b = {
            lastEffect: null,
            stores: null
          }, M.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
        }
        function ci(a, b, c, d) {
          b.value = c;
          b.getSnapshot = d;
          ei(b) && fi(a);
        }
        function ai(a, b, c) {
          return c(function () {
            ei(b) && fi(a);
          });
        }
        function ei(a) {
          var b = a.getSnapshot;
          a = a.value;
          try {
            var c = b();
            return !He(a, c);
          } catch (d) {
            return !0;
          }
        }
        function fi(a) {
          var b = ih(a, 1);
          null !== b && gi(b, a, 1, -1);
        }
        function hi(a) {
          var b = Th();
          "function" === typeof a && (a = a());
          b.memoizedState = b.baseState = a;
          a = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Vh,
            lastRenderedState: a
          };
          b.queue = a;
          a = a.dispatch = ii.bind(null, M, a);
          return [b.memoizedState, a];
        }
        function bi(a, b, c, d) {
          a = {
            tag: a,
            create: b,
            destroy: c,
            deps: d,
            next: null
          };
          b = M.updateQueue;
          null === b ? (b = {
            lastEffect: null,
            stores: null
          }, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
          return a;
        }
        function ji() {
          return Uh().memoizedState;
        }
        function ki(a, b, c, d) {
          var e = Th();
          M.flags |= a;
          e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
        }
        function li(a, b, c, d) {
          var e = Uh();
          d = void 0 === d ? null : d;
          var f = void 0;
          if (null !== N) {
            var g = N.memoizedState;
            f = g.destroy;
            if (null !== d && Mh(d, g.deps)) {
              e.memoizedState = bi(b, c, f, d);
              return;
            }
          }
          M.flags |= a;
          e.memoizedState = bi(1 | b, c, f, d);
        }
        function mi(a, b) {
          return ki(8390656, 8, a, b);
        }
        function $h(a, b) {
          return li(2048, 8, a, b);
        }
        function ni(a, b) {
          return li(4, 2, a, b);
        }
        function oi(a, b) {
          return li(4, 4, a, b);
        }
        function pi(a, b) {
          if ("function" === typeof b) return a = a(), b(a), function () {
            b(null);
          };
          if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
            b.current = null;
          };
        }
        function qi(a, b, c) {
          c = null !== c && void 0 !== c ? c.concat([a]) : null;
          return li(4, 4, pi.bind(null, b, a), c);
        }
        function ri() {}
        function si(a, b) {
          var c = Uh();
          b = void 0 === b ? null : b;
          var d = c.memoizedState;
          if (null !== d && null !== b && Mh(b, d[1])) return d[0];
          c.memoizedState = [a, b];
          return a;
        }
        function ti(a, b) {
          var c = Uh();
          b = void 0 === b ? null : b;
          var d = c.memoizedState;
          if (null !== d && null !== b && Mh(b, d[1])) return d[0];
          a = a();
          c.memoizedState = [a, b];
          return a;
        }
        function ui(a, b, c) {
          if (0 === (Hh & 21)) return a.baseState && (a.baseState = !1, dh = !0), a.memoizedState = c;
          He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = !0);
          return b;
        }
        function vi(a, b) {
          var c = C;
          C = 0 !== c && 4 > c ? c : 4;
          a(!0);
          var d = Gh.transition;
          Gh.transition = {};
          try {
            a(!1), b();
          } finally {
            C = c, Gh.transition = d;
          }
        }
        function wi() {
          return Uh().memoizedState;
        }
        function xi(a, b, c) {
          var d = yi(a);
          c = {
            lane: d,
            action: c,
            hasEagerState: !1,
            eagerState: null,
            next: null
          };
          if (zi(a)) Ai(b, c);else if (c = hh(a, b, c, d), null !== c) {
            var e = R();
            gi(c, a, d, e);
            Bi(c, b, d);
          }
        }
        function ii(a, b, c) {
          var d = yi(a),
            e = {
              lane: d,
              action: c,
              hasEagerState: !1,
              eagerState: null,
              next: null
            };
          if (zi(a)) Ai(b, e);else {
            var f = a.alternate;
            if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
              var g = b.lastRenderedState,
                h = f(g, c);
              e.hasEagerState = !0;
              e.eagerState = h;
              if (He(h, g)) {
                var k = b.interleaved;
                null === k ? (e.next = e, gh(b)) : (e.next = k.next, k.next = e);
                b.interleaved = e;
                return;
              }
            } catch (l) {} finally {}
            c = hh(a, b, e, d);
            null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
          }
        }
        function zi(a) {
          var b = a.alternate;
          return a === M || null !== b && b === M;
        }
        function Ai(a, b) {
          Jh = Ih = !0;
          var c = a.pending;
          null === c ? b.next = b : (b.next = c.next, c.next = b);
          a.pending = b;
        }
        function Bi(a, b, c) {
          if (0 !== (c & 4194240)) {
            var d = b.lanes;
            d &= a.pendingLanes;
            c |= d;
            b.lanes = c;
            Cc(a, c);
          }
        }
        var Rh = {
            readContext: eh,
            useCallback: P,
            useContext: P,
            useEffect: P,
            useImperativeHandle: P,
            useInsertionEffect: P,
            useLayoutEffect: P,
            useMemo: P,
            useReducer: P,
            useRef: P,
            useState: P,
            useDebugValue: P,
            useDeferredValue: P,
            useTransition: P,
            useMutableSource: P,
            useSyncExternalStore: P,
            useId: P,
            unstable_isNewReconciler: !1
          },
          Oh = {
            readContext: eh,
            useCallback: function useCallback(a, b) {
              Th().memoizedState = [a, void 0 === b ? null : b];
              return a;
            },
            useContext: eh,
            useEffect: mi,
            useImperativeHandle: function useImperativeHandle(a, b, c) {
              c = null !== c && void 0 !== c ? c.concat([a]) : null;
              return ki(4194308, 4, pi.bind(null, b, a), c);
            },
            useLayoutEffect: function useLayoutEffect(a, b) {
              return ki(4194308, 4, a, b);
            },
            useInsertionEffect: function useInsertionEffect(a, b) {
              return ki(4, 2, a, b);
            },
            useMemo: function useMemo(a, b) {
              var c = Th();
              b = void 0 === b ? null : b;
              a = a();
              c.memoizedState = [a, b];
              return a;
            },
            useReducer: function useReducer(a, b, c) {
              var d = Th();
              b = void 0 !== c ? c(b) : b;
              d.memoizedState = d.baseState = b;
              a = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: a,
                lastRenderedState: b
              };
              d.queue = a;
              a = a.dispatch = xi.bind(null, M, a);
              return [d.memoizedState, a];
            },
            useRef: function useRef(a) {
              var b = Th();
              a = {
                current: a
              };
              return b.memoizedState = a;
            },
            useState: hi,
            useDebugValue: ri,
            useDeferredValue: function useDeferredValue(a) {
              return Th().memoizedState = a;
            },
            useTransition: function useTransition() {
              var a = hi(!1),
                b = a[0];
              a = vi.bind(null, a[1]);
              Th().memoizedState = a;
              return [b, a];
            },
            useMutableSource: function useMutableSource() {},
            useSyncExternalStore: function useSyncExternalStore(a, b, c) {
              var d = M,
                e = Th();
              if (I) {
                if (void 0 === c) throw Error(p$1(407));
                c = c();
              } else {
                c = b();
                if (null === Q) throw Error(p$1(349));
                0 !== (Hh & 30) || di(d, b, c);
              }
              e.memoizedState = c;
              var f = {
                value: c,
                getSnapshot: b
              };
              e.queue = f;
              mi(ai.bind(null, d, f, a), [a]);
              d.flags |= 2048;
              bi(9, ci.bind(null, d, f, c, b), void 0, null);
              return c;
            },
            useId: function useId() {
              var a = Th(),
                b = Q.identifierPrefix;
              if (I) {
                var c = sg;
                var d = rg;
                c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
                b = ":" + b + "R" + c;
                c = Kh++;
                0 < c && (b += "H" + c.toString(32));
                b += ":";
              } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
              return a.memoizedState = b;
            },
            unstable_isNewReconciler: !1
          },
          Ph = {
            readContext: eh,
            useCallback: si,
            useContext: eh,
            useEffect: $h,
            useImperativeHandle: qi,
            useInsertionEffect: ni,
            useLayoutEffect: oi,
            useMemo: ti,
            useReducer: Wh,
            useRef: ji,
            useState: function useState() {
              return Wh(Vh);
            },
            useDebugValue: ri,
            useDeferredValue: function useDeferredValue(a) {
              var b = Uh();
              return ui(b, N.memoizedState, a);
            },
            useTransition: function useTransition() {
              var a = Wh(Vh)[0],
                b = Uh().memoizedState;
              return [a, b];
            },
            useMutableSource: Yh,
            useSyncExternalStore: Zh,
            useId: wi,
            unstable_isNewReconciler: !1
          },
          Qh = {
            readContext: eh,
            useCallback: si,
            useContext: eh,
            useEffect: $h,
            useImperativeHandle: qi,
            useInsertionEffect: ni,
            useLayoutEffect: oi,
            useMemo: ti,
            useReducer: Xh,
            useRef: ji,
            useState: function useState() {
              return Xh(Vh);
            },
            useDebugValue: ri,
            useDeferredValue: function useDeferredValue(a) {
              var b = Uh();
              return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
            },
            useTransition: function useTransition() {
              var a = Xh(Vh)[0],
                b = Uh().memoizedState;
              return [a, b];
            },
            useMutableSource: Yh,
            useSyncExternalStore: Zh,
            useId: wi,
            unstable_isNewReconciler: !1
          };
        function Ci(a, b) {
          if (a && a.defaultProps) {
            b = A$1({}, b);
            a = a.defaultProps;
            for (var c in a) void 0 === b[c] && (b[c] = a[c]);
            return b;
          }
          return b;
        }
        function Di(a, b, c, d) {
          b = a.memoizedState;
          c = c(d, b);
          c = null === c || void 0 === c ? b : A$1({}, b, c);
          a.memoizedState = c;
          0 === a.lanes && (a.updateQueue.baseState = c);
        }
        var Ei = {
          isMounted: function isMounted(a) {
            return (a = a._reactInternals) ? Vb(a) === a : !1;
          },
          enqueueSetState: function enqueueSetState(a, b, c) {
            a = a._reactInternals;
            var d = R(),
              e = yi(a),
              f = mh(d, e);
            f.payload = b;
            void 0 !== c && null !== c && (f.callback = c);
            b = nh(a, f, e);
            null !== b && (gi(b, a, e, d), oh(b, a, e));
          },
          enqueueReplaceState: function enqueueReplaceState(a, b, c) {
            a = a._reactInternals;
            var d = R(),
              e = yi(a),
              f = mh(d, e);
            f.tag = 1;
            f.payload = b;
            void 0 !== c && null !== c && (f.callback = c);
            b = nh(a, f, e);
            null !== b && (gi(b, a, e, d), oh(b, a, e));
          },
          enqueueForceUpdate: function enqueueForceUpdate(a, b) {
            a = a._reactInternals;
            var c = R(),
              d = yi(a),
              e = mh(c, d);
            e.tag = 2;
            void 0 !== b && null !== b && (e.callback = b);
            b = nh(a, e, d);
            null !== b && (gi(b, a, d, c), oh(b, a, d));
          }
        };
        function Fi(a, b, c, d, e, f, g) {
          a = a.stateNode;
          return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : !0;
        }
        function Gi(a, b, c) {
          var d = !1,
            e = Vf;
          var f = b.contextType;
          "object" === typeof f && null !== f ? f = eh(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
          b = new b(c, f);
          a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
          b.updater = Ei;
          a.stateNode = b;
          b._reactInternals = a;
          d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
          return b;
        }
        function Hi(a, b, c, d) {
          a = b.state;
          "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
          "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
          b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
        }
        function Ii(a, b, c, d) {
          var e = a.stateNode;
          e.props = c;
          e.state = a.memoizedState;
          e.refs = {};
          kh(a);
          var f = b.contextType;
          "object" === typeof f && null !== f ? e.context = eh(f) : (f = Zf(b) ? Xf : H.current, e.context = Yf(a, f));
          e.state = a.memoizedState;
          f = b.getDerivedStateFromProps;
          "function" === typeof f && (Di(a, b, f, c), e.state = a.memoizedState);
          "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
          "function" === typeof e.componentDidMount && (a.flags |= 4194308);
        }
        function Ji(a, b) {
          try {
            var c = "",
              d = b;
            do c += Pa(d), d = d.return; while (d);
            var e = c;
          } catch (f) {
            e = "\nError generating stack: " + f.message + "\n" + f.stack;
          }
          return {
            value: a,
            source: b,
            stack: e,
            digest: null
          };
        }
        function Ki(a, b, c) {
          return {
            value: a,
            source: null,
            stack: null != c ? c : null,
            digest: null != b ? b : null
          };
        }
        function Li(a, b) {
          try {
            console.error(b.value);
          } catch (c) {
            setTimeout(function () {
              throw c;
            });
          }
        }
        var Mi = "function" === typeof WeakMap ? WeakMap : Map;
        function Ni(a, b, c) {
          c = mh(-1, c);
          c.tag = 3;
          c.payload = {
            element: null
          };
          var d = b.value;
          c.callback = function () {
            Oi || (Oi = !0, Pi = d);
            Li(a, b);
          };
          return c;
        }
        function Qi(a, b, c) {
          c = mh(-1, c);
          c.tag = 3;
          var d = a.type.getDerivedStateFromError;
          if ("function" === typeof d) {
            var e = b.value;
            c.payload = function () {
              return d(e);
            };
            c.callback = function () {
              Li(a, b);
            };
          }
          var f = a.stateNode;
          null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
            Li(a, b);
            "function" !== typeof d && (null === Ri ? Ri = new Set([this]) : Ri.add(this));
            var c = b.stack;
            this.componentDidCatch(b.value, {
              componentStack: null !== c ? c : ""
            });
          });
          return c;
        }
        function Si(a, b, c) {
          var d = a.pingCache;
          if (null === d) {
            d = a.pingCache = new Mi();
            var e = new Set();
            d.set(b, e);
          } else e = d.get(b), void 0 === e && (e = new Set(), d.set(b, e));
          e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
        }
        function Ui(a) {
          do {
            var b;
            if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? !0 : !1 : !0;
            if (b) return a;
            a = a.return;
          } while (null !== a);
          return null;
        }
        function Vi(a, b, c, d, e) {
          if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
          a.flags |= 65536;
          a.lanes = e;
          return a;
        }
        var Wi = ua.ReactCurrentOwner,
          dh = !1;
        function Xi(a, b, c, d) {
          b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
        }
        function Yi(a, b, c, d, e) {
          c = c.render;
          var f = b.ref;
          ch(b, e);
          d = Nh(a, b, c, d, f, e);
          c = Sh();
          if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
          I && c && vg(b);
          b.flags |= 1;
          Xi(a, b, d, e);
          return b.child;
        }
        function $i(a, b, c, d, e) {
          if (null === a) {
            var f = c.type;
            if ("function" === typeof f && !aj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, bj(a, b, f, d, e);
            a = Rg(c.type, null, d, b, b.mode, e);
            a.ref = b.ref;
            a.return = b;
            return b.child = a;
          }
          f = a.child;
          if (0 === (a.lanes & e)) {
            var g = f.memoizedProps;
            c = c.compare;
            c = null !== c ? c : Ie;
            if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
          }
          b.flags |= 1;
          a = Pg(f, d);
          a.ref = b.ref;
          a.return = b;
          return b.child = a;
        }
        function bj(a, b, c, d, e) {
          if (null !== a) {
            var f = a.memoizedProps;
            if (Ie(f, d) && a.ref === b.ref) if (dh = !1, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = !0);else return b.lanes = a.lanes, Zi(a, b, e);
          }
          return cj(a, b, c, d, e);
        }
        function dj(a, b, c) {
          var d = b.pendingProps,
            e = d.children,
            f = null !== a ? a.memoizedState : null;
          if ("hidden" === d.mode) {
            if (0 === (b.mode & 1)) b.memoizedState = {
              baseLanes: 0,
              cachePool: null,
              transitions: null
            }, G(ej, fj), fj |= c;else {
              if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
                baseLanes: a,
                cachePool: null,
                transitions: null
              }, b.updateQueue = null, G(ej, fj), fj |= a, null;
              b.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
              };
              d = null !== f ? f.baseLanes : c;
              G(ej, fj);
              fj |= d;
            }
          } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), fj |= d;
          Xi(a, b, e, c);
          return b.child;
        }
        function gj(a, b) {
          var c = b.ref;
          if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
        }
        function cj(a, b, c, d, e) {
          var f = Zf(c) ? Xf : H.current;
          f = Yf(b, f);
          ch(b, e);
          c = Nh(a, b, c, d, f, e);
          d = Sh();
          if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
          I && d && vg(b);
          b.flags |= 1;
          Xi(a, b, c, e);
          return b.child;
        }
        function hj(a, b, c, d, e) {
          if (Zf(c)) {
            var f = !0;
            cg(b);
          } else f = !1;
          ch(b, e);
          if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = !0;else if (null === a) {
            var g = b.stateNode,
              h = b.memoizedProps;
            g.props = h;
            var k = g.context,
              l = c.contextType;
            "object" === typeof l && null !== l ? l = eh(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
            var m = c.getDerivedStateFromProps,
              q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
            q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Hi(b, g, d, l);
            jh = !1;
            var r = b.memoizedState;
            g.state = r;
            qh(b, d, g, e);
            k = b.memoizedState;
            h !== d || r !== k || Wf.current || jh ? ("function" === typeof m && (Di(b, c, m, d), k = b.memoizedState), (h = jh || Fi(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = !1);
          } else {
            g = b.stateNode;
            lh(a, b);
            h = b.memoizedProps;
            l = b.type === b.elementType ? h : Ci(b.type, h);
            g.props = l;
            q = b.pendingProps;
            r = g.context;
            k = c.contextType;
            "object" === typeof k && null !== k ? k = eh(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
            var y = c.getDerivedStateFromProps;
            (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && Hi(b, g, d, k);
            jh = !1;
            r = b.memoizedState;
            g.state = r;
            qh(b, d, g, e);
            var n = b.memoizedState;
            h !== q || r !== n || Wf.current || jh ? ("function" === typeof y && (Di(b, c, y, d), n = b.memoizedState), (l = jh || Fi(b, c, l, d, r, n, k) || !1) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = !1);
          }
          return jj(a, b, c, d, f, e);
        }
        function jj(a, b, c, d, e, f) {
          gj(a, b);
          var g = 0 !== (b.flags & 128);
          if (!d && !g) return e && dg(b, c, !1), Zi(a, b, f);
          d = b.stateNode;
          Wi.current = b;
          var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
          b.flags |= 1;
          null !== a && g ? (b.child = Ug(b, a.child, null, f), b.child = Ug(b, null, h, f)) : Xi(a, b, h, f);
          b.memoizedState = d.state;
          e && dg(b, c, !0);
          return b.child;
        }
        function kj(a) {
          var b = a.stateNode;
          b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, !1);
          yh(a, b.containerInfo);
        }
        function lj(a, b, c, d, e) {
          Ig();
          Jg(e);
          b.flags |= 256;
          Xi(a, b, c, d);
          return b.child;
        }
        var mj = {
          dehydrated: null,
          treeContext: null,
          retryLane: 0
        };
        function nj(a) {
          return {
            baseLanes: a,
            cachePool: null,
            transitions: null
          };
        }
        function oj(a, b, c) {
          var d = b.pendingProps,
            e = L.current,
            f = !1,
            g = 0 !== (b.flags & 128),
            h;
          (h = g) || (h = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
          if (h) f = !0, b.flags &= -129;else if (null === a || null !== a.memoizedState) e |= 1;
          G(L, e & 1);
          if (null === a) {
            Eg(b);
            a = b.memoizedState;
            if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
            g = d.children;
            a = d.fallback;
            return f ? (d = b.mode, f = b.child, g = {
              mode: "hidden",
              children: g
            }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = pj(g, d, 0, null), a = Tg(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
          }
          e = a.memoizedState;
          if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b, g, d, h, e, c);
          if (f) {
            f = d.fallback;
            g = b.mode;
            e = a.child;
            h = e.sibling;
            var k = {
              mode: "hidden",
              children: d.children
            };
            0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = Pg(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
            null !== h ? f = Pg(h, f) : (f = Tg(f, g, c, null), f.flags |= 2);
            f.return = b;
            d.return = b;
            d.sibling = f;
            b.child = d;
            d = f;
            f = b.child;
            g = a.child.memoizedState;
            g = null === g ? nj(c) : {
              baseLanes: g.baseLanes | c,
              cachePool: null,
              transitions: g.transitions
            };
            f.memoizedState = g;
            f.childLanes = a.childLanes & ~c;
            b.memoizedState = mj;
            return d;
          }
          f = a.child;
          a = f.sibling;
          d = Pg(f, {
            mode: "visible",
            children: d.children
          });
          0 === (b.mode & 1) && (d.lanes = c);
          d.return = b;
          d.sibling = null;
          null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
          b.child = d;
          b.memoizedState = null;
          return d;
        }
        function qj(a, b) {
          b = pj({
            mode: "visible",
            children: b
          }, a.mode, 0, null);
          b.return = a;
          return a.child = b;
        }
        function sj(a, b, c, d) {
          null !== d && Jg(d);
          Ug(b, a.child, null, c);
          a = qj(b, b.pendingProps.children);
          a.flags |= 2;
          b.memoizedState = null;
          return a;
        }
        function rj(a, b, c, d, e, f, g) {
          if (c) {
            if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p$1(422))), sj(a, b, g, d);
            if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
            f = d.fallback;
            e = b.mode;
            d = pj({
              mode: "visible",
              children: d.children
            }, e, 0, null);
            f = Tg(f, e, g, null);
            f.flags |= 2;
            d.return = b;
            f.return = b;
            d.sibling = f;
            b.child = d;
            0 !== (b.mode & 1) && Ug(b, a.child, null, g);
            b.child.memoizedState = nj(g);
            b.memoizedState = mj;
            return f;
          }
          if (0 === (b.mode & 1)) return sj(a, b, g, null);
          if ("$!" === e.data) {
            d = e.nextSibling && e.nextSibling.dataset;
            if (d) var h = d.dgst;
            d = h;
            f = Error(p$1(419));
            d = Ki(f, d, void 0);
            return sj(a, b, g, d);
          }
          h = 0 !== (g & a.childLanes);
          if (dh || h) {
            d = Q;
            if (null !== d) {
              switch (g & -g) {
                case 4:
                  e = 2;
                  break;
                case 16:
                  e = 8;
                  break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                  e = 32;
                  break;
                case 536870912:
                  e = 268435456;
                  break;
                default:
                  e = 0;
              }
              e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
              0 !== e && e !== f.retryLane && (f.retryLane = e, ih(a, e), gi(d, a, e, -1));
            }
            tj();
            d = Ki(Error(p$1(421)));
            return sj(a, b, g, d);
          }
          if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
          a = f.treeContext;
          yg = Lf(e.nextSibling);
          xg = b;
          I = !0;
          zg = null;
          null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
          b = qj(b, d.children);
          b.flags |= 4096;
          return b;
        }
        function vj(a, b, c) {
          a.lanes |= b;
          var d = a.alternate;
          null !== d && (d.lanes |= b);
          bh(a.return, b, c);
        }
        function wj(a, b, c, d, e) {
          var f = a.memoizedState;
          null === f ? a.memoizedState = {
            isBackwards: b,
            rendering: null,
            renderingStartTime: 0,
            last: d,
            tail: c,
            tailMode: e
          } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
        }
        function xj(a, b, c) {
          var d = b.pendingProps,
            e = d.revealOrder,
            f = d.tail;
          Xi(a, b, d.children, c);
          d = L.current;
          if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;else {
            if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a;) {
              if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);else if (19 === a.tag) vj(a, c, b);else if (null !== a.child) {
                a.child.return = a;
                a = a.child;
                continue;
              }
              if (a === b) break a;
              for (; null === a.sibling;) {
                if (null === a.return || a.return === b) break a;
                a = a.return;
              }
              a.sibling.return = a.return;
              a = a.sibling;
            }
            d &= 1;
          }
          G(L, d);
          if (0 === (b.mode & 1)) b.memoizedState = null;else switch (e) {
            case "forwards":
              c = b.child;
              for (e = null; null !== c;) a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
              c = e;
              null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
              wj(b, !1, e, c, f);
              break;
            case "backwards":
              c = null;
              e = b.child;
              for (b.child = null; null !== e;) {
                a = e.alternate;
                if (null !== a && null === Ch(a)) {
                  b.child = e;
                  break;
                }
                a = e.sibling;
                e.sibling = c;
                c = e;
                e = a;
              }
              wj(b, !0, c, null, f);
              break;
            case "together":
              wj(b, !1, null, null, void 0);
              break;
            default:
              b.memoizedState = null;
          }
          return b.child;
        }
        function ij(a, b) {
          0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
        }
        function Zi(a, b, c) {
          null !== a && (b.dependencies = a.dependencies);
          rh |= b.lanes;
          if (0 === (c & b.childLanes)) return null;
          if (null !== a && b.child !== a.child) throw Error(p$1(153));
          if (null !== b.child) {
            a = b.child;
            c = Pg(a, a.pendingProps);
            b.child = c;
            for (c.return = b; null !== a.sibling;) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
            c.sibling = null;
          }
          return b.child;
        }
        function yj(a, b, c) {
          switch (b.tag) {
            case 3:
              kj(b);
              Ig();
              break;
            case 5:
              Ah(b);
              break;
            case 1:
              Zf(b.type) && cg(b);
              break;
            case 4:
              yh(b, b.stateNode.containerInfo);
              break;
            case 10:
              var d = b.type._context,
                e = b.memoizedProps.value;
              G(Wg, d._currentValue);
              d._currentValue = e;
              break;
            case 13:
              d = b.memoizedState;
              if (null !== d) {
                if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
                if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
                G(L, L.current & 1);
                a = Zi(a, b, c);
                return null !== a ? a.sibling : null;
              }
              G(L, L.current & 1);
              break;
            case 19:
              d = 0 !== (c & b.childLanes);
              if (0 !== (a.flags & 128)) {
                if (d) return xj(a, b, c);
                b.flags |= 128;
              }
              e = b.memoizedState;
              null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
              G(L, L.current);
              if (d) break;else return null;
            case 22:
            case 23:
              return b.lanes = 0, dj(a, b, c);
          }
          return Zi(a, b, c);
        }
        var zj, Aj, Bj, Cj;
        zj = function zj(a, b) {
          for (var c = b.child; null !== c;) {
            if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);else if (4 !== c.tag && null !== c.child) {
              c.child.return = c;
              c = c.child;
              continue;
            }
            if (c === b) break;
            for (; null === c.sibling;) {
              if (null === c.return || c.return === b) return;
              c = c.return;
            }
            c.sibling.return = c.return;
            c = c.sibling;
          }
        };
        Aj = function Aj() {};
        Bj = function Bj(a, b, c, d) {
          var e = a.memoizedProps;
          if (e !== d) {
            a = b.stateNode;
            xh(uh.current);
            var f = null;
            switch (c) {
              case "input":
                e = Ya(a, e);
                d = Ya(a, d);
                f = [];
                break;
              case "select":
                e = A$1({}, e, {
                  value: void 0
                });
                d = A$1({}, d, {
                  value: void 0
                });
                f = [];
                break;
              case "textarea":
                e = gb(a, e);
                d = gb(a, d);
                f = [];
                break;
              default:
                "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
            }
            ub(c, d);
            var g;
            c = null;
            for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
              var h = e[l];
              for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
            } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
            for (l in d) {
              var k = d[l];
              h = null != e ? e[l] : void 0;
              if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) {
                if (h) {
                  for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
                  for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
                } else c || (f || (f = []), f.push(l, c)), c = k;
              } else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
            }
            c && (f = f || []).push("style", c);
            var l = f;
            if (b.updateQueue = l) b.flags |= 4;
          }
        };
        Cj = function Cj(a, b, c, d) {
          c !== d && (b.flags |= 4);
        };
        function Dj(a, b) {
          if (!I) switch (a.tailMode) {
            case "hidden":
              b = a.tail;
              for (var c = null; null !== b;) null !== b.alternate && (c = b), b = b.sibling;
              null === c ? a.tail = null : c.sibling = null;
              break;
            case "collapsed":
              c = a.tail;
              for (var d = null; null !== c;) null !== c.alternate && (d = c), c = c.sibling;
              null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
          }
        }
        function S(a) {
          var b = null !== a.alternate && a.alternate.child === a.child,
            c = 0,
            d = 0;
          if (b) for (var e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;else for (e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
          a.subtreeFlags |= d;
          a.childLanes = c;
          return b;
        }
        function Ej(a, b, c) {
          var d = b.pendingProps;
          wg(b);
          switch (b.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return S(b), null;
            case 1:
              return Zf(b.type) && $f(), S(b), null;
            case 3:
              d = b.stateNode;
              zh();
              E(Wf);
              E(H);
              Eh();
              d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
              if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
              Aj(a, b);
              S(b);
              return null;
            case 5:
              Bh(b);
              var e = xh(wh.current);
              c = b.type;
              if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);else {
                if (!d) {
                  if (null === b.stateNode) throw Error(p$1(166));
                  S(b);
                  return null;
                }
                a = xh(uh.current);
                if (Gg(b)) {
                  d = b.stateNode;
                  c = b.type;
                  var f = b.memoizedProps;
                  d[Of] = b;
                  d[Pf] = f;
                  a = 0 !== (b.mode & 1);
                  switch (c) {
                    case "dialog":
                      D("cancel", d);
                      D("close", d);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      D("load", d);
                      break;
                    case "video":
                    case "audio":
                      for (e = 0; e < lf.length; e++) D(lf[e], d);
                      break;
                    case "source":
                      D("error", d);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      D("error", d);
                      D("load", d);
                      break;
                    case "details":
                      D("toggle", d);
                      break;
                    case "input":
                      Za(d, f);
                      D("invalid", d);
                      break;
                    case "select":
                      d._wrapperState = {
                        wasMultiple: !!f.multiple
                      };
                      D("invalid", d);
                      break;
                    case "textarea":
                      hb(d, f), D("invalid", d);
                  }
                  ub(c, f);
                  e = null;
                  for (var g in f) if (f.hasOwnProperty(g)) {
                    var h = f[g];
                    "children" === g ? "string" === typeof h ? d.textContent !== h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
                  }
                  switch (c) {
                    case "input":
                      Va(d);
                      db(d, f, !0);
                      break;
                    case "textarea":
                      Va(d);
                      jb(d);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof f.onClick && (d.onclick = Bf);
                  }
                  d = e;
                  b.updateQueue = d;
                  null !== d && (b.flags |= 4);
                } else {
                  g = 9 === e.nodeType ? e : e.ownerDocument;
                  "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
                  "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script>\x3c/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, {
                    is: d.is
                  }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
                  a[Of] = b;
                  a[Pf] = d;
                  zj(a, b, !1, !1);
                  b.stateNode = a;
                  a: {
                    g = vb(c, d);
                    switch (c) {
                      case "dialog":
                        D("cancel", a);
                        D("close", a);
                        e = d;
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        D("load", a);
                        e = d;
                        break;
                      case "video":
                      case "audio":
                        for (e = 0; e < lf.length; e++) D(lf[e], a);
                        e = d;
                        break;
                      case "source":
                        D("error", a);
                        e = d;
                        break;
                      case "img":
                      case "image":
                      case "link":
                        D("error", a);
                        D("load", a);
                        e = d;
                        break;
                      case "details":
                        D("toggle", a);
                        e = d;
                        break;
                      case "input":
                        Za(a, d);
                        e = Ya(a, d);
                        D("invalid", a);
                        break;
                      case "option":
                        e = d;
                        break;
                      case "select":
                        a._wrapperState = {
                          wasMultiple: !!d.multiple
                        };
                        e = A$1({}, d, {
                          value: void 0
                        });
                        D("invalid", a);
                        break;
                      case "textarea":
                        hb(a, d);
                        e = gb(a, d);
                        D("invalid", a);
                        break;
                      default:
                        e = d;
                    }
                    ub(c, e);
                    h = e;
                    for (f in h) if (h.hasOwnProperty(f)) {
                      var k = h[f];
                      "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
                    }
                    switch (c) {
                      case "input":
                        Va(a);
                        db(a, d, !1);
                        break;
                      case "textarea":
                        Va(a);
                        jb(a);
                        break;
                      case "option":
                        null != d.value && a.setAttribute("value", "" + Sa(d.value));
                        break;
                      case "select":
                        a.multiple = !!d.multiple;
                        f = d.value;
                        null != f ? fb(a, !!d.multiple, f, !1) : null != d.defaultValue && fb(a, !!d.multiple, d.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof e.onClick && (a.onclick = Bf);
                    }
                    switch (c) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        d = !!d.autoFocus;
                        break a;
                      case "img":
                        d = !0;
                        break a;
                      default:
                        d = !1;
                    }
                  }
                  d && (b.flags |= 4);
                }
                null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
              }
              S(b);
              return null;
            case 6:
              if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);else {
                if ("string" !== typeof d && null === b.stateNode) throw Error(p$1(166));
                c = xh(wh.current);
                xh(uh.current);
                if (Gg(b)) {
                  d = b.stateNode;
                  c = b.memoizedProps;
                  d[Of] = b;
                  if (f = d.nodeValue !== c) if (a = xg, null !== a) switch (a.tag) {
                    case 3:
                      Af(d.nodeValue, c, 0 !== (a.mode & 1));
                      break;
                    case 5:
                      !0 !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
                  }
                  f && (b.flags |= 4);
                } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
              }
              S(b);
              return null;
            case 13:
              E(L);
              d = b.memoizedState;
              if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
                if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f = !1;else if (f = Gg(b), null !== d && null !== d.dehydrated) {
                  if (null === a) {
                    if (!f) throw Error(p$1(318));
                    f = b.memoizedState;
                    f = null !== f ? f.dehydrated : null;
                    if (!f) throw Error(p$1(317));
                    f[Of] = b;
                  } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
                  S(b);
                  f = !1;
                } else null !== zg && (Fj(zg), zg = null), f = !0;
                if (!f) return b.flags & 65536 ? b : null;
              }
              if (0 !== (b.flags & 128)) return b.lanes = c, b;
              d = null !== d;
              d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
              null !== b.updateQueue && (b.flags |= 4);
              S(b);
              return null;
            case 4:
              return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
            case 10:
              return ah(b.type._context), S(b), null;
            case 17:
              return Zf(b.type) && $f(), S(b), null;
            case 19:
              E(L);
              f = b.memoizedState;
              if (null === f) return S(b), null;
              d = 0 !== (b.flags & 128);
              g = f.rendering;
              if (null === g) {
                if (d) Dj(f, !1);else {
                  if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a;) {
                    g = Ch(a);
                    if (null !== g) {
                      b.flags |= 128;
                      Dj(f, !1);
                      d = g.updateQueue;
                      null !== d && (b.updateQueue = d, b.flags |= 4);
                      b.subtreeFlags = 0;
                      d = c;
                      for (c = b.child; null !== c;) f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
                        lanes: a.lanes,
                        firstContext: a.firstContext
                      }), c = c.sibling;
                      G(L, L.current & 1 | 2);
                      return b.child;
                    }
                    a = a.sibling;
                  }
                  null !== f.tail && B() > Gj && (b.flags |= 128, d = !0, Dj(f, !1), b.lanes = 4194304);
                }
              } else {
                if (!d) if (a = Ch(g), null !== a) {
                  if (b.flags |= 128, d = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f, !0), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b), null;
                } else 2 * B() - f.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = !0, Dj(f, !1), b.lanes = 4194304);
                f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
              }
              if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
              S(b);
              return null;
            case 22:
            case 23:
              return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
            case 24:
              return null;
            case 25:
              return null;
          }
          throw Error(p$1(156, b.tag));
        }
        function Ij(a, b) {
          wg(b);
          switch (b.tag) {
            case 1:
              return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
            case 3:
              return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
            case 5:
              return Bh(b), null;
            case 13:
              E(L);
              a = b.memoizedState;
              if (null !== a && null !== a.dehydrated) {
                if (null === b.alternate) throw Error(p$1(340));
                Ig();
              }
              a = b.flags;
              return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
            case 19:
              return E(L), null;
            case 4:
              return zh(), null;
            case 10:
              return ah(b.type._context), null;
            case 22:
            case 23:
              return Hj(), null;
            case 24:
              return null;
            default:
              return null;
          }
        }
        var Jj = !1,
          U = !1,
          Kj = "function" === typeof WeakSet ? WeakSet : Set,
          V = null;
        function Lj(a, b) {
          var c = a.ref;
          if (null !== c) if ("function" === typeof c) try {
            c(null);
          } catch (d) {
            W(a, b, d);
          } else c.current = null;
        }
        function Mj(a, b, c) {
          try {
            c();
          } catch (d) {
            W(a, b, d);
          }
        }
        var Nj = !1;
        function Oj(a, b) {
          Cf = dd;
          a = Me();
          if (Ne(a)) {
            if ("selectionStart" in a) var c = {
              start: a.selectionStart,
              end: a.selectionEnd
            };else a: {
              c = (c = a.ownerDocument) && c.defaultView || window;
              var d = c.getSelection && c.getSelection();
              if (d && 0 !== d.rangeCount) {
                c = d.anchorNode;
                var e = d.anchorOffset,
                  f = d.focusNode;
                d = d.focusOffset;
                try {
                  c.nodeType, f.nodeType;
                } catch (F) {
                  c = null;
                  break a;
                }
                var g = 0,
                  h = -1,
                  k = -1,
                  l = 0,
                  m = 0,
                  q = a,
                  r = null;
                b: for (;;) {
                  for (var y;;) {
                    q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
                    q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
                    3 === q.nodeType && (g += q.nodeValue.length);
                    if (null === (y = q.firstChild)) break;
                    r = q;
                    q = y;
                  }
                  for (;;) {
                    if (q === a) break b;
                    r === c && ++l === e && (h = g);
                    r === f && ++m === d && (k = g);
                    if (null !== (y = q.nextSibling)) break;
                    q = r;
                    r = q.parentNode;
                  }
                  q = y;
                }
                c = -1 === h || -1 === k ? null : {
                  start: h,
                  end: k
                };
              } else c = null;
            }
            c = c || {
              start: 0,
              end: 0
            };
          } else c = null;
          Df = {
            focusedElem: a,
            selectionRange: c
          };
          dd = !1;
          for (V = b; null !== V;) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;else for (; null !== V;) {
            b = V;
            try {
              var n = b.alternate;
              if (0 !== (b.flags & 1024)) switch (b.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (null !== n) {
                    var t = n.memoizedProps,
                      J = n.memoizedState,
                      x = b.stateNode,
                      w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Ci(b.type, t), J);
                    x.__reactInternalSnapshotBeforeUpdate = w;
                  }
                  break;
                case 3:
                  var u = b.stateNode.containerInfo;
                  1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(p$1(163));
              }
            } catch (F) {
              W(b, b.return, F);
            }
            a = b.sibling;
            if (null !== a) {
              a.return = b.return;
              V = a;
              break;
            }
            V = b.return;
          }
          n = Nj;
          Nj = !1;
          return n;
        }
        function Pj(a, b, c) {
          var d = b.updateQueue;
          d = null !== d ? d.lastEffect : null;
          if (null !== d) {
            var e = d = d.next;
            do {
              if ((e.tag & a) === a) {
                var f = e.destroy;
                e.destroy = void 0;
                void 0 !== f && Mj(b, c, f);
              }
              e = e.next;
            } while (e !== d);
          }
        }
        function Qj(a, b) {
          b = b.updateQueue;
          b = null !== b ? b.lastEffect : null;
          if (null !== b) {
            var c = b = b.next;
            do {
              if ((c.tag & a) === a) {
                var d = c.create;
                c.destroy = d();
              }
              c = c.next;
            } while (c !== b);
          }
        }
        function Rj(a) {
          var b = a.ref;
          if (null !== b) {
            var c = a.stateNode;
            switch (a.tag) {
              case 5:
                a = c;
                break;
              default:
                a = c;
            }
            "function" === typeof b ? b(a) : b.current = a;
          }
        }
        function Sj(a) {
          var b = a.alternate;
          null !== b && (a.alternate = null, Sj(b));
          a.child = null;
          a.deletions = null;
          a.sibling = null;
          5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
          a.stateNode = null;
          a.return = null;
          a.dependencies = null;
          a.memoizedProps = null;
          a.memoizedState = null;
          a.pendingProps = null;
          a.stateNode = null;
          a.updateQueue = null;
        }
        function Tj(a) {
          return 5 === a.tag || 3 === a.tag || 4 === a.tag;
        }
        function Uj(a) {
          a: for (;;) {
            for (; null === a.sibling;) {
              if (null === a.return || Tj(a.return)) return null;
              a = a.return;
            }
            a.sibling.return = a.return;
            for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag;) {
              if (a.flags & 2) continue a;
              if (null === a.child || 4 === a.tag) continue a;else a.child.return = a, a = a.child;
            }
            if (!(a.flags & 2)) return a.stateNode;
          }
        }
        function Vj(a, b, c) {
          var d = a.tag;
          if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a;) Vj(a, b, c), a = a.sibling;
        }
        function Wj(a, b, c) {
          var d = a.tag;
          if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a;) Wj(a, b, c), a = a.sibling;
        }
        var X = null,
          Xj = !1;
        function Yj(a, b, c) {
          for (c = c.child; null !== c;) Zj(a, b, c), c = c.sibling;
        }
        function Zj(a, b, c) {
          if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
            lc.onCommitFiberUnmount(kc, c);
          } catch (h) {}
          switch (c.tag) {
            case 5:
              U || Lj(c, b);
            case 6:
              var d = X,
                e = Xj;
              X = null;
              Yj(a, b, c);
              X = d;
              Xj = e;
              null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
              break;
            case 18:
              null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
              break;
            case 4:
              d = X;
              e = Xj;
              X = c.stateNode.containerInfo;
              Xj = !0;
              Yj(a, b, c);
              X = d;
              Xj = e;
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
                e = d = d.next;
                do {
                  var f = e,
                    g = f.destroy;
                  f = f.tag;
                  void 0 !== g && (0 !== (f & 2) ? Mj(c, b, g) : 0 !== (f & 4) && Mj(c, b, g));
                  e = e.next;
                } while (e !== d);
              }
              Yj(a, b, c);
              break;
            case 1:
              if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
                d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
              } catch (h) {
                W(c, b, h);
              }
              Yj(a, b, c);
              break;
            case 21:
              Yj(a, b, c);
              break;
            case 22:
              c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
              break;
            default:
              Yj(a, b, c);
          }
        }
        function ak(a) {
          var b = a.updateQueue;
          if (null !== b) {
            a.updateQueue = null;
            var c = a.stateNode;
            null === c && (c = a.stateNode = new Kj());
            b.forEach(function (b) {
              var d = bk.bind(null, a, b);
              c.has(b) || (c.add(b), b.then(d, d));
            });
          }
        }
        function ck(a, b) {
          var c = b.deletions;
          if (null !== c) for (var d = 0; d < c.length; d++) {
            var e = c[d];
            try {
              var f = a,
                g = b,
                h = g;
              a: for (; null !== h;) {
                switch (h.tag) {
                  case 5:
                    X = h.stateNode;
                    Xj = !1;
                    break a;
                  case 3:
                    X = h.stateNode.containerInfo;
                    Xj = !0;
                    break a;
                  case 4:
                    X = h.stateNode.containerInfo;
                    Xj = !0;
                    break a;
                }
                h = h.return;
              }
              if (null === X) throw Error(p$1(160));
              Zj(f, g, e);
              X = null;
              Xj = !1;
              var k = e.alternate;
              null !== k && (k.return = null);
              e.return = null;
            } catch (l) {
              W(e, b, l);
            }
          }
          if (b.subtreeFlags & 12854) for (b = b.child; null !== b;) dk(b, a), b = b.sibling;
        }
        function dk(a, b) {
          var c = a.alternate,
            d = a.flags;
          switch (a.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              ck(b, a);
              ek(a);
              if (d & 4) {
                try {
                  Pj(3, a, a.return), Qj(3, a);
                } catch (t) {
                  W(a, a.return, t);
                }
                try {
                  Pj(5, a, a.return);
                } catch (t) {
                  W(a, a.return, t);
                }
              }
              break;
            case 1:
              ck(b, a);
              ek(a);
              d & 512 && null !== c && Lj(c, c.return);
              break;
            case 5:
              ck(b, a);
              ek(a);
              d & 512 && null !== c && Lj(c, c.return);
              if (a.flags & 32) {
                var e = a.stateNode;
                try {
                  ob(e, "");
                } catch (t) {
                  W(a, a.return, t);
                }
              }
              if (d & 4 && (e = a.stateNode, null != e)) {
                var f = a.memoizedProps,
                  g = null !== c ? c.memoizedProps : f,
                  h = a.type,
                  k = a.updateQueue;
                a.updateQueue = null;
                if (null !== k) try {
                  "input" === h && "radio" === f.type && null != f.name && ab(e, f);
                  vb(h, g);
                  var l = vb(h, f);
                  for (g = 0; g < k.length; g += 2) {
                    var m = k[g],
                      q = k[g + 1];
                    "style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
                  }
                  switch (h) {
                    case "input":
                      bb(e, f);
                      break;
                    case "textarea":
                      ib(e, f);
                      break;
                    case "select":
                      var r = e._wrapperState.wasMultiple;
                      e._wrapperState.wasMultiple = !!f.multiple;
                      var y = f.value;
                      null != y ? fb(e, !!f.multiple, y, !1) : r !== !!f.multiple && (null != f.defaultValue ? fb(e, !!f.multiple, f.defaultValue, !0) : fb(e, !!f.multiple, f.multiple ? [] : "", !1));
                  }
                  e[Pf] = f;
                } catch (t) {
                  W(a, a.return, t);
                }
              }
              break;
            case 6:
              ck(b, a);
              ek(a);
              if (d & 4) {
                if (null === a.stateNode) throw Error(p$1(162));
                e = a.stateNode;
                f = a.memoizedProps;
                try {
                  e.nodeValue = f;
                } catch (t) {
                  W(a, a.return, t);
                }
              }
              break;
            case 3:
              ck(b, a);
              ek(a);
              if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
                bd(b.containerInfo);
              } catch (t) {
                W(a, a.return, t);
              }
              break;
            case 4:
              ck(b, a);
              ek(a);
              break;
            case 13:
              ck(b, a);
              ek(a);
              e = a.child;
              e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
              d & 4 && ak(a);
              break;
            case 22:
              m = null !== c && null !== c.memoizedState;
              a.mode & 1 ? (U = (l = U) || m, ck(b, a), U = l) : ck(b, a);
              ek(a);
              if (d & 8192) {
                l = null !== a.memoizedState;
                if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for (V = a, m = a.child; null !== m;) {
                  for (q = V = m; null !== V;) {
                    r = V;
                    y = r.child;
                    switch (r.tag) {
                      case 0:
                      case 11:
                      case 14:
                      case 15:
                        Pj(4, r, r.return);
                        break;
                      case 1:
                        Lj(r, r.return);
                        var n = r.stateNode;
                        if ("function" === typeof n.componentWillUnmount) {
                          d = r;
                          c = r.return;
                          try {
                            b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                          } catch (t) {
                            W(d, c, t);
                          }
                        }
                        break;
                      case 5:
                        Lj(r, r.return);
                        break;
                      case 22:
                        if (null !== r.memoizedState) {
                          gk(q);
                          continue;
                        }
                    }
                    null !== y ? (y.return = r, V = y) : gk(q);
                  }
                  m = m.sibling;
                }
                a: for (m = null, q = a;;) {
                  if (5 === q.tag) {
                    if (null === m) {
                      m = q;
                      try {
                        e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
                      } catch (t) {
                        W(a, a.return, t);
                      }
                    }
                  } else if (6 === q.tag) {
                    if (null === m) try {
                      q.stateNode.nodeValue = l ? "" : q.memoizedProps;
                    } catch (t) {
                      W(a, a.return, t);
                    }
                  } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
                    q.child.return = q;
                    q = q.child;
                    continue;
                  }
                  if (q === a) break a;
                  for (; null === q.sibling;) {
                    if (null === q.return || q.return === a) break a;
                    m === q && (m = null);
                    q = q.return;
                  }
                  m === q && (m = null);
                  q.sibling.return = q.return;
                  q = q.sibling;
                }
              }
              break;
            case 19:
              ck(b, a);
              ek(a);
              d & 4 && ak(a);
              break;
            case 21:
              break;
            default:
              ck(b, a), ek(a);
          }
        }
        function ek(a) {
          var b = a.flags;
          if (b & 2) {
            try {
              a: {
                for (var c = a.return; null !== c;) {
                  if (Tj(c)) {
                    var d = c;
                    break a;
                  }
                  c = c.return;
                }
                throw Error(p$1(160));
              }
              switch (d.tag) {
                case 5:
                  var e = d.stateNode;
                  d.flags & 32 && (ob(e, ""), d.flags &= -33);
                  var f = Uj(a);
                  Wj(a, f, e);
                  break;
                case 3:
                case 4:
                  var g = d.stateNode.containerInfo,
                    h = Uj(a);
                  Vj(a, h, g);
                  break;
                default:
                  throw Error(p$1(161));
              }
            } catch (k) {
              W(a, a.return, k);
            }
            a.flags &= -3;
          }
          b & 4096 && (a.flags &= -4097);
        }
        function hk(a, b, c) {
          V = a;
          ik(a);
        }
        function ik(a, b, c) {
          for (var d = 0 !== (a.mode & 1); null !== V;) {
            var e = V,
              f = e.child;
            if (22 === e.tag && d) {
              var g = null !== e.memoizedState || Jj;
              if (!g) {
                var h = e.alternate,
                  k = null !== h && null !== h.memoizedState || U;
                h = Jj;
                var l = U;
                Jj = g;
                if ((U = k) && !l) for (V = e; null !== V;) g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k ? (k.return = g, V = k) : jk(e);
                for (; null !== f;) V = f, ik(f), f = f.sibling;
                V = e;
                Jj = h;
                U = l;
              }
              kk(a);
            } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : kk(a);
          }
        }
        function kk(a) {
          for (; null !== V;) {
            var b = V;
            if (0 !== (b.flags & 8772)) {
              var c = b.alternate;
              try {
                if (0 !== (b.flags & 8772)) switch (b.tag) {
                  case 0:
                  case 11:
                  case 15:
                    U || Qj(5, b);
                    break;
                  case 1:
                    var d = b.stateNode;
                    if (b.flags & 4 && !U) if (null === c) d.componentDidMount();else {
                      var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
                      d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                    }
                    var f = b.updateQueue;
                    null !== f && sh(b, f, d);
                    break;
                  case 3:
                    var g = b.updateQueue;
                    if (null !== g) {
                      c = null;
                      if (null !== b.child) switch (b.child.tag) {
                        case 5:
                          c = b.child.stateNode;
                          break;
                        case 1:
                          c = b.child.stateNode;
                      }
                      sh(b, g, c);
                    }
                    break;
                  case 5:
                    var h = b.stateNode;
                    if (null === c && b.flags & 4) {
                      c = h;
                      var k = b.memoizedProps;
                      switch (b.type) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                          k.autoFocus && c.focus();
                          break;
                        case "img":
                          k.src && (c.src = k.src);
                      }
                    }
                    break;
                  case 6:
                    break;
                  case 4:
                    break;
                  case 12:
                    break;
                  case 13:
                    if (null === b.memoizedState) {
                      var l = b.alternate;
                      if (null !== l) {
                        var m = l.memoizedState;
                        if (null !== m) {
                          var q = m.dehydrated;
                          null !== q && bd(q);
                        }
                      }
                    }
                    break;
                  case 19:
                  case 17:
                  case 21:
                  case 22:
                  case 23:
                  case 25:
                    break;
                  default:
                    throw Error(p$1(163));
                }
                U || b.flags & 512 && Rj(b);
              } catch (r) {
                W(b, b.return, r);
              }
            }
            if (b === a) {
              V = null;
              break;
            }
            c = b.sibling;
            if (null !== c) {
              c.return = b.return;
              V = c;
              break;
            }
            V = b.return;
          }
        }
        function gk(a) {
          for (; null !== V;) {
            var b = V;
            if (b === a) {
              V = null;
              break;
            }
            var c = b.sibling;
            if (null !== c) {
              c.return = b.return;
              V = c;
              break;
            }
            V = b.return;
          }
        }
        function jk(a) {
          for (; null !== V;) {
            var b = V;
            try {
              switch (b.tag) {
                case 0:
                case 11:
                case 15:
                  var c = b.return;
                  try {
                    Qj(4, b);
                  } catch (k) {
                    W(b, c, k);
                  }
                  break;
                case 1:
                  var d = b.stateNode;
                  if ("function" === typeof d.componentDidMount) {
                    var e = b.return;
                    try {
                      d.componentDidMount();
                    } catch (k) {
                      W(b, e, k);
                    }
                  }
                  var f = b.return;
                  try {
                    Rj(b);
                  } catch (k) {
                    W(b, f, k);
                  }
                  break;
                case 5:
                  var g = b.return;
                  try {
                    Rj(b);
                  } catch (k) {
                    W(b, g, k);
                  }
              }
            } catch (k) {
              W(b, b.return, k);
            }
            if (b === a) {
              V = null;
              break;
            }
            var h = b.sibling;
            if (null !== h) {
              h.return = b.return;
              V = h;
              break;
            }
            V = b.return;
          }
        }
        var lk = Math.ceil,
          mk = ua.ReactCurrentDispatcher,
          nk = ua.ReactCurrentOwner,
          ok$3 = ua.ReactCurrentBatchConfig,
          K = 0,
          Q = null,
          Y = null,
          Z = 0,
          fj = 0,
          ej = Uf(0),
          T = 0,
          pk = null,
          rh = 0,
          qk = 0,
          rk = 0,
          sk = null,
          tk = null,
          fk = 0,
          Gj = Infinity,
          uk = null,
          Oi = !1,
          Pi = null,
          Ri = null,
          vk = !1,
          wk = null,
          xk = 0,
          yk = 0,
          zk = null,
          Ak = -1,
          Bk = 0;
        function R() {
          return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
        }
        function yi(a) {
          if (0 === (a.mode & 1)) return 1;
          if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
          if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
          a = C;
          if (0 !== a) return a;
          a = window.event;
          a = void 0 === a ? 16 : jd(a.type);
          return a;
        }
        function gi(a, b, c, d) {
          if (50 < yk) throw yk = 0, zk = null, Error(p$1(185));
          Ac(a, c, d);
          if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
        }
        function Dk(a, b) {
          var c = a.callbackNode;
          wc(a, b);
          var d = uc(a, a === Q ? Z : 0);
          if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;else if (b = d & -d, a.callbackPriority !== b) {
            null != c && bc(c);
            if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function () {
              0 === (K & 6) && jg();
            }), c = null;else {
              switch (Dc(d)) {
                case 1:
                  c = fc;
                  break;
                case 4:
                  c = gc;
                  break;
                case 16:
                  c = hc;
                  break;
                case 536870912:
                  c = jc;
                  break;
                default:
                  c = hc;
              }
              c = Fk(c, Gk.bind(null, a));
            }
            a.callbackPriority = b;
            a.callbackNode = c;
          }
        }
        function Gk(a, b) {
          Ak = -1;
          Bk = 0;
          if (0 !== (K & 6)) throw Error(p$1(327));
          var c = a.callbackNode;
          if (Hk() && a.callbackNode !== c) return null;
          var d = uc(a, a === Q ? Z : 0);
          if (0 === d) return null;
          if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);else {
            b = d;
            var e = K;
            K |= 2;
            var f = Jk();
            if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
            do try {
              Lk();
              break;
            } catch (h) {
              Mk(a, h);
            } while (1);
            $g();
            mk.current = f;
            K = e;
            null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
          }
          if (0 !== b) {
            2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
            if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
            if (6 === b) Ck(a, d);else {
              e = a.current.alternate;
              if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, b = Nk(a, f))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
              a.finishedWork = e;
              a.finishedLanes = d;
              switch (b) {
                case 0:
                case 1:
                  throw Error(p$1(345));
                case 2:
                  Pk(a, tk, uk);
                  break;
                case 3:
                  Ck(a, d);
                  if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
                    if (0 !== uc(a, 0)) break;
                    e = a.suspendedLanes;
                    if ((e & d) !== d) {
                      R();
                      a.pingedLanes |= a.suspendedLanes & e;
                      break;
                    }
                    a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
                    break;
                  }
                  Pk(a, tk, uk);
                  break;
                case 4:
                  Ck(a, d);
                  if ((d & 4194240) === d) break;
                  b = a.eventTimes;
                  for (e = -1; 0 < d;) {
                    var g = 31 - oc(d);
                    f = 1 << g;
                    g = b[g];
                    g > e && (e = g);
                    d &= ~f;
                  }
                  d = e;
                  d = B() - d;
                  d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3E3 > d ? 3E3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
                  if (10 < d) {
                    a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
                    break;
                  }
                  Pk(a, tk, uk);
                  break;
                case 5:
                  Pk(a, tk, uk);
                  break;
                default:
                  throw Error(p$1(329));
              }
            }
          }
          Dk(a, B());
          return a.callbackNode === c ? Gk.bind(null, a) : null;
        }
        function Nk(a, b) {
          var c = sk;
          a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
          a = Ik(a, b);
          2 !== a && (b = tk, tk = c, null !== b && Fj(b));
          return a;
        }
        function Fj(a) {
          null === tk ? tk = a : tk.push.apply(tk, a);
        }
        function Ok(a) {
          for (var b = a;;) {
            if (b.flags & 16384) {
              var c = b.updateQueue;
              if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
                var e = c[d],
                  f = e.getSnapshot;
                e = e.value;
                try {
                  if (!He(f(), e)) return !1;
                } catch (g) {
                  return !1;
                }
              }
            }
            c = b.child;
            if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;else {
              if (b === a) break;
              for (; null === b.sibling;) {
                if (null === b.return || b.return === a) return !0;
                b = b.return;
              }
              b.sibling.return = b.return;
              b = b.sibling;
            }
          }
          return !0;
        }
        function Ck(a, b) {
          b &= ~rk;
          b &= ~qk;
          a.suspendedLanes |= b;
          a.pingedLanes &= ~b;
          for (a = a.expirationTimes; 0 < b;) {
            var c = 31 - oc(b),
              d = 1 << c;
            a[c] = -1;
            b &= ~d;
          }
        }
        function Ek(a) {
          if (0 !== (K & 6)) throw Error(p$1(327));
          Hk();
          var b = uc(a, 0);
          if (0 === (b & 1)) return Dk(a, B()), null;
          var c = Ik(a, b);
          if (0 !== a.tag && 2 === c) {
            var d = xc(a);
            0 !== d && (b = d, c = Nk(a, d));
          }
          if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
          if (6 === c) throw Error(p$1(345));
          a.finishedWork = a.current.alternate;
          a.finishedLanes = b;
          Pk(a, tk, uk);
          Dk(a, B());
          return null;
        }
        function Qk(a, b) {
          var c = K;
          K |= 1;
          try {
            return a(b);
          } finally {
            K = c, 0 === K && (Gj = B() + 500, fg && jg());
          }
        }
        function Rk(a) {
          null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
          var b = K;
          K |= 1;
          var c = ok$3.transition,
            d = C;
          try {
            if (ok$3.transition = null, C = 1, a) return a();
          } finally {
            C = d, ok$3.transition = c, K = b, 0 === (K & 6) && jg();
          }
        }
        function Hj() {
          fj = ej.current;
          E(ej);
        }
        function Kk(a, b) {
          a.finishedWork = null;
          a.finishedLanes = 0;
          var c = a.timeoutHandle;
          -1 !== c && (a.timeoutHandle = -1, Gf(c));
          if (null !== Y) for (c = Y.return; null !== c;) {
            var d = c;
            wg(d);
            switch (d.tag) {
              case 1:
                d = d.type.childContextTypes;
                null !== d && void 0 !== d && $f();
                break;
              case 3:
                zh();
                E(Wf);
                E(H);
                Eh();
                break;
              case 5:
                Bh(d);
                break;
              case 4:
                zh();
                break;
              case 13:
                E(L);
                break;
              case 19:
                E(L);
                break;
              case 10:
                ah(d.type._context);
                break;
              case 22:
              case 23:
                Hj();
            }
            c = c.return;
          }
          Q = a;
          Y = a = Pg(a.current, null);
          Z = fj = b;
          T = 0;
          pk = null;
          rk = qk = rh = 0;
          tk = sk = null;
          if (null !== fh) {
            for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
              c.interleaved = null;
              var e = d.next,
                f = c.pending;
              if (null !== f) {
                var g = f.next;
                f.next = e;
                d.next = g;
              }
              c.pending = d;
            }
            fh = null;
          }
          return a;
        }
        function Mk(a, b) {
          do {
            var c = Y;
            try {
              $g();
              Fh.current = Rh;
              if (Ih) {
                for (var d = M.memoizedState; null !== d;) {
                  var e = d.queue;
                  null !== e && (e.pending = null);
                  d = d.next;
                }
                Ih = !1;
              }
              Hh = 0;
              O = N = M = null;
              Jh = !1;
              Kh = 0;
              nk.current = null;
              if (null === c || null === c.return) {
                T = 1;
                pk = b;
                Y = null;
                break;
              }
              a: {
                var f = a,
                  g = c.return,
                  h = c,
                  k = b;
                b = Z;
                h.flags |= 32768;
                if (null !== k && "object" === typeof k && "function" === typeof k.then) {
                  var l = k,
                    m = h,
                    q = m.tag;
                  if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
                    var r = m.alternate;
                    r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
                  }
                  var y = Ui(g);
                  if (null !== y) {
                    y.flags &= -257;
                    Vi(y, g, h, f, b);
                    y.mode & 1 && Si(f, l, b);
                    b = y;
                    k = l;
                    var n = b.updateQueue;
                    if (null === n) {
                      var t = new Set();
                      t.add(k);
                      b.updateQueue = t;
                    } else n.add(k);
                    break a;
                  } else {
                    if (0 === (b & 1)) {
                      Si(f, l, b);
                      tj();
                      break a;
                    }
                    k = Error(p$1(426));
                  }
                } else if (I && h.mode & 1) {
                  var J = Ui(g);
                  if (null !== J) {
                    0 === (J.flags & 65536) && (J.flags |= 256);
                    Vi(J, g, h, f, b);
                    Jg(Ji(k, h));
                    break a;
                  }
                }
                f = k = Ji(k, h);
                4 !== T && (T = 2);
                null === sk ? sk = [f] : sk.push(f);
                f = g;
                do {
                  switch (f.tag) {
                    case 3:
                      f.flags |= 65536;
                      b &= -b;
                      f.lanes |= b;
                      var x = Ni(f, k, b);
                      ph(f, x);
                      break a;
                    case 1:
                      h = k;
                      var w = f.type,
                        u = f.stateNode;
                      if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri || !Ri.has(u)))) {
                        f.flags |= 65536;
                        b &= -b;
                        f.lanes |= b;
                        var F = Qi(f, h, b);
                        ph(f, F);
                        break a;
                      }
                  }
                  f = f.return;
                } while (null !== f);
              }
              Sk(c);
            } catch (na) {
              b = na;
              Y === c && null !== c && (Y = c = c.return);
              continue;
            }
            break;
          } while (1);
        }
        function Jk() {
          var a = mk.current;
          mk.current = Rh;
          return null === a ? Rh : a;
        }
        function tj() {
          if (0 === T || 3 === T || 2 === T) T = 4;
          null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
        }
        function Ik(a, b) {
          var c = K;
          K |= 2;
          var d = Jk();
          if (Q !== a || Z !== b) uk = null, Kk(a, b);
          do try {
            Tk();
            break;
          } catch (e) {
            Mk(a, e);
          } while (1);
          $g();
          K = c;
          mk.current = d;
          if (null !== Y) throw Error(p$1(261));
          Q = null;
          Z = 0;
          return T;
        }
        function Tk() {
          for (; null !== Y;) Uk(Y);
        }
        function Lk() {
          for (; null !== Y && !cc();) Uk(Y);
        }
        function Uk(a) {
          var b = Vk(a.alternate, a, fj);
          a.memoizedProps = a.pendingProps;
          null === b ? Sk(a) : Y = b;
          nk.current = null;
        }
        function Sk(a) {
          var b = a;
          do {
            var c = b.alternate;
            a = b.return;
            if (0 === (b.flags & 32768)) {
              if (c = Ej(c, b, fj), null !== c) {
                Y = c;
                return;
              }
            } else {
              c = Ij(c, b);
              if (null !== c) {
                c.flags &= 32767;
                Y = c;
                return;
              }
              if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;else {
                T = 6;
                Y = null;
                return;
              }
            }
            b = b.sibling;
            if (null !== b) {
              Y = b;
              return;
            }
            Y = b = a;
          } while (null !== b);
          0 === T && (T = 5);
        }
        function Pk(a, b, c) {
          var d = C,
            e = ok$3.transition;
          try {
            ok$3.transition = null, C = 1, Wk(a, b, c, d);
          } finally {
            ok$3.transition = e, C = d;
          }
          return null;
        }
        function Wk(a, b, c, d) {
          do Hk(); while (null !== wk);
          if (0 !== (K & 6)) throw Error(p$1(327));
          c = a.finishedWork;
          var e = a.finishedLanes;
          if (null === c) return null;
          a.finishedWork = null;
          a.finishedLanes = 0;
          if (c === a.current) throw Error(p$1(177));
          a.callbackNode = null;
          a.callbackPriority = 0;
          var f = c.lanes | c.childLanes;
          Bc(a, f);
          a === Q && (Y = Q = null, Z = 0);
          0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = !0, Fk(hc, function () {
            Hk();
            return null;
          }));
          f = 0 !== (c.flags & 15990);
          if (0 !== (c.subtreeFlags & 15990) || f) {
            f = ok$3.transition;
            ok$3.transition = null;
            var g = C;
            C = 1;
            var h = K;
            K |= 4;
            nk.current = null;
            Oj(a, c);
            dk(c, a);
            Oe(Df);
            dd = !!Cf;
            Df = Cf = null;
            a.current = c;
            hk(c);
            dc();
            K = h;
            C = g;
            ok$3.transition = f;
          } else a.current = c;
          vk && (vk = !1, wk = a, xk = e);
          f = a.pendingLanes;
          0 === f && (Ri = null);
          mc(c.stateNode);
          Dk(a, B());
          if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, {
            componentStack: e.stack,
            digest: e.digest
          });
          if (Oi) throw Oi = !1, a = Pi, Pi = null, a;
          0 !== (xk & 1) && 0 !== a.tag && Hk();
          f = a.pendingLanes;
          0 !== (f & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
          jg();
          return null;
        }
        function Hk() {
          if (null !== wk) {
            var a = Dc(xk),
              b = ok$3.transition,
              c = C;
            try {
              ok$3.transition = null;
              C = 16 > a ? 16 : a;
              if (null === wk) var d = !1;else {
                a = wk;
                wk = null;
                xk = 0;
                if (0 !== (K & 6)) throw Error(p$1(331));
                var e = K;
                K |= 4;
                for (V = a.current; null !== V;) {
                  var f = V,
                    g = f.child;
                  if (0 !== (V.flags & 16)) {
                    var h = f.deletions;
                    if (null !== h) {
                      for (var k = 0; k < h.length; k++) {
                        var l = h[k];
                        for (V = l; null !== V;) {
                          var m = V;
                          switch (m.tag) {
                            case 0:
                            case 11:
                            case 15:
                              Pj(8, m, f);
                          }
                          var q = m.child;
                          if (null !== q) q.return = m, V = q;else for (; null !== V;) {
                            m = V;
                            var r = m.sibling,
                              y = m.return;
                            Sj(m);
                            if (m === l) {
                              V = null;
                              break;
                            }
                            if (null !== r) {
                              r.return = y;
                              V = r;
                              break;
                            }
                            V = y;
                          }
                        }
                      }
                      var n = f.alternate;
                      if (null !== n) {
                        var t = n.child;
                        if (null !== t) {
                          n.child = null;
                          do {
                            var J = t.sibling;
                            t.sibling = null;
                            t = J;
                          } while (null !== t);
                        }
                      }
                      V = f;
                    }
                  }
                  if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V = g;else b: for (; null !== V;) {
                    f = V;
                    if (0 !== (f.flags & 2048)) switch (f.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Pj(9, f, f.return);
                    }
                    var x = f.sibling;
                    if (null !== x) {
                      x.return = f.return;
                      V = x;
                      break b;
                    }
                    V = f.return;
                  }
                }
                var w = a.current;
                for (V = w; null !== V;) {
                  g = V;
                  var u = g.child;
                  if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u;else b: for (g = w; null !== V;) {
                    h = V;
                    if (0 !== (h.flags & 2048)) try {
                      switch (h.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Qj(9, h);
                      }
                    } catch (na) {
                      W(h, h.return, na);
                    }
                    if (h === g) {
                      V = null;
                      break b;
                    }
                    var F = h.sibling;
                    if (null !== F) {
                      F.return = h.return;
                      V = F;
                      break b;
                    }
                    V = h.return;
                  }
                }
                K = e;
                jg();
                if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
                  lc.onPostCommitFiberRoot(kc, a);
                } catch (na) {}
                d = !0;
              }
              return d;
            } finally {
              C = c, ok$3.transition = b;
            }
          }
          return !1;
        }
        function Xk(a, b, c) {
          b = Ji(c, b);
          b = Ni(a, b, 1);
          a = nh(a, b, 1);
          b = R();
          null !== a && (Ac(a, 1, b), Dk(a, b));
        }
        function W(a, b, c) {
          if (3 === a.tag) Xk(a, a, c);else for (; null !== b;) {
            if (3 === b.tag) {
              Xk(b, a, c);
              break;
            } else if (1 === b.tag) {
              var d = b.stateNode;
              if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
                a = Ji(c, a);
                a = Qi(b, a, 1);
                b = nh(b, a, 1);
                a = R();
                null !== b && (Ac(b, 1, a), Dk(b, a));
                break;
              }
            }
            b = b.return;
          }
        }
        function Ti(a, b, c) {
          var d = a.pingCache;
          null !== d && d.delete(b);
          b = R();
          a.pingedLanes |= a.suspendedLanes & c;
          Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
          Dk(a, b);
        }
        function Yk(a, b) {
          0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
          var c = R();
          a = ih(a, b);
          null !== a && (Ac(a, b, c), Dk(a, c));
        }
        function uj(a) {
          var b = a.memoizedState,
            c = 0;
          null !== b && (c = b.retryLane);
          Yk(a, c);
        }
        function bk(a, b) {
          var c = 0;
          switch (a.tag) {
            case 13:
              var d = a.stateNode;
              var e = a.memoizedState;
              null !== e && (c = e.retryLane);
              break;
            case 19:
              d = a.stateNode;
              break;
            default:
              throw Error(p$1(314));
          }
          null !== d && d.delete(b);
          Yk(a, c);
        }
        var Vk;
        Vk = function Vk(a, b, c) {
          if (null !== a) {
            if (a.memoizedProps !== b.pendingProps || Wf.current) dh = !0;else {
              if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = !1, yj(a, b, c);
              dh = 0 !== (a.flags & 131072) ? !0 : !1;
            }
          } else dh = !1, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
          b.lanes = 0;
          switch (b.tag) {
            case 2:
              var d = b.type;
              ij(a, b);
              a = b.pendingProps;
              var e = Yf(b, H.current);
              ch(b, c);
              e = Nh(null, b, d, a, e, c);
              var f = Sh();
              b.flags |= 1;
              "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = !0, cg(b)) : f = !1, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, !0, f, c)) : (b.tag = 0, I && f && vg(b), Xi(null, b, e, c), b = b.child);
              return b;
            case 16:
              d = b.elementType;
              a: {
                ij(a, b);
                a = b.pendingProps;
                e = d._init;
                d = e(d._payload);
                b.type = d;
                e = b.tag = Zk(d);
                a = Ci(d, a);
                switch (e) {
                  case 0:
                    b = cj(null, b, d, a, c);
                    break a;
                  case 1:
                    b = hj(null, b, d, a, c);
                    break a;
                  case 11:
                    b = Yi(null, b, d, a, c);
                    break a;
                  case 14:
                    b = $i(null, b, d, Ci(d.type, a), c);
                    break a;
                }
                throw Error(p$1(306, d, ""));
              }
              return b;
            case 0:
              return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);
            case 1:
              return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);
            case 3:
              a: {
                kj(b);
                if (null === a) throw Error(p$1(387));
                d = b.pendingProps;
                f = b.memoizedState;
                e = f.element;
                lh(a, b);
                qh(b, d, null, c);
                var g = b.memoizedState;
                d = g.element;
                if (f.isDehydrated) {
                  if (f = {
                    element: d,
                    isDehydrated: !1,
                    cache: g.cache,
                    pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
                    transitions: g.transitions
                  }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
                    e = Ji(Error(p$1(423)), b);
                    b = lj(a, b, d, c, e);
                    break a;
                  } else if (d !== e) {
                    e = Ji(Error(p$1(424)), b);
                    b = lj(a, b, d, c, e);
                    break a;
                  } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = !0, zg = null, c = Vg(b, null, d, c), b.child = c; c;) c.flags = c.flags & -3 | 4096, c = c.sibling;
                } else {
                  Ig();
                  if (d === e) {
                    b = Zi(a, b, c);
                    break a;
                  }
                  Xi(a, b, d, c);
                }
                b = b.child;
              }
              return b;
            case 5:
              return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), gj(a, b), Xi(a, b, g, c), b.child;
            case 6:
              return null === a && Eg(b), null;
            case 13:
              return oj(a, b, c);
            case 4:
              return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), b.child;
            case 11:
              return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);
            case 7:
              return Xi(a, b, b.pendingProps, c), b.child;
            case 8:
              return Xi(a, b, b.pendingProps.children, c), b.child;
            case 12:
              return Xi(a, b, b.pendingProps.children, c), b.child;
            case 10:
              a: {
                d = b.type._context;
                e = b.pendingProps;
                f = b.memoizedProps;
                g = e.value;
                G(Wg, d._currentValue);
                d._currentValue = g;
                if (null !== f) if (He(f.value, g)) {
                  if (f.children === e.children && !Wf.current) {
                    b = Zi(a, b, c);
                    break a;
                  }
                } else for (f = b.child, null !== f && (f.return = b); null !== f;) {
                  var h = f.dependencies;
                  if (null !== h) {
                    g = f.child;
                    for (var k = h.firstContext; null !== k;) {
                      if (k.context === d) {
                        if (1 === f.tag) {
                          k = mh(-1, c & -c);
                          k.tag = 2;
                          var l = f.updateQueue;
                          if (null !== l) {
                            l = l.shared;
                            var m = l.pending;
                            null === m ? k.next = k : (k.next = m.next, m.next = k);
                            l.pending = k;
                          }
                        }
                        f.lanes |= c;
                        k = f.alternate;
                        null !== k && (k.lanes |= c);
                        bh(f.return, c, b);
                        h.lanes |= c;
                        break;
                      }
                      k = k.next;
                    }
                  } else if (10 === f.tag) g = f.type === b.type ? null : f.child;else if (18 === f.tag) {
                    g = f.return;
                    if (null === g) throw Error(p$1(341));
                    g.lanes |= c;
                    h = g.alternate;
                    null !== h && (h.lanes |= c);
                    bh(g, c, b);
                    g = f.sibling;
                  } else g = f.child;
                  if (null !== g) g.return = f;else for (g = f; null !== g;) {
                    if (g === b) {
                      g = null;
                      break;
                    }
                    f = g.sibling;
                    if (null !== f) {
                      f.return = g.return;
                      g = f;
                      break;
                    }
                    g = g.return;
                  }
                  f = g;
                }
                Xi(a, b, e.children, c);
                b = b.child;
              }
              return b;
            case 9:
              return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, Xi(a, b, d, c), b.child;
            case 14:
              return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);
            case 15:
              return bj(a, b, b.type, b.pendingProps, c);
            case 17:
              return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), b.tag = 1, Zf(d) ? (a = !0, cg(b)) : a = !1, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), jj(null, b, d, !0, a, c);
            case 19:
              return xj(a, b, c);
            case 22:
              return dj(a, b, c);
          }
          throw Error(p$1(156, b.tag));
        };
        function Fk(a, b) {
          return ac(a, b);
        }
        function $k(a, b, c, d) {
          this.tag = a;
          this.key = c;
          this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
          this.index = 0;
          this.ref = null;
          this.pendingProps = b;
          this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
          this.mode = d;
          this.subtreeFlags = this.flags = 0;
          this.deletions = null;
          this.childLanes = this.lanes = 0;
          this.alternate = null;
        }
        function Bg(a, b, c, d) {
          return new $k(a, b, c, d);
        }
        function aj(a) {
          a = a.prototype;
          return !(!a || !a.isReactComponent);
        }
        function Zk(a) {
          if ("function" === typeof a) return aj(a) ? 1 : 0;
          if (void 0 !== a && null !== a) {
            a = a.$$typeof;
            if (a === Da) return 11;
            if (a === Ga) return 14;
          }
          return 2;
        }
        function Pg(a, b) {
          var c = a.alternate;
          null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
          c.flags = a.flags & 14680064;
          c.childLanes = a.childLanes;
          c.lanes = a.lanes;
          c.child = a.child;
          c.memoizedProps = a.memoizedProps;
          c.memoizedState = a.memoizedState;
          c.updateQueue = a.updateQueue;
          b = a.dependencies;
          c.dependencies = null === b ? null : {
            lanes: b.lanes,
            firstContext: b.firstContext
          };
          c.sibling = a.sibling;
          c.index = a.index;
          c.ref = a.ref;
          return c;
        }
        function Rg(a, b, c, d, e, f) {
          var g = 2;
          d = a;
          if ("function" === typeof a) aj(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {
            case ya:
              return Tg(c.children, e, f, b);
            case za:
              g = 8;
              e |= 8;
              break;
            case Aa:
              return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
            case Ea:
              return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
            case Fa:
              return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
            case Ia:
              return pj(c, e, f, b);
            default:
              if ("object" === typeof a && null !== a) switch (a.$$typeof) {
                case Ba:
                  g = 10;
                  break a;
                case Ca:
                  g = 9;
                  break a;
                case Da:
                  g = 11;
                  break a;
                case Ga:
                  g = 14;
                  break a;
                case Ha:
                  g = 16;
                  d = null;
                  break a;
              }
              throw Error(p$1(130, null == a ? a : typeof a, ""));
          }
          b = Bg(g, c, b, e);
          b.elementType = a;
          b.type = d;
          b.lanes = f;
          return b;
        }
        function Tg(a, b, c, d) {
          a = Bg(7, a, d, b);
          a.lanes = c;
          return a;
        }
        function pj(a, b, c, d) {
          a = Bg(22, a, d, b);
          a.elementType = Ia;
          a.lanes = c;
          a.stateNode = {
            isHidden: !1
          };
          return a;
        }
        function Qg(a, b, c) {
          a = Bg(6, a, null, b);
          a.lanes = c;
          return a;
        }
        function Sg(a, b, c) {
          b = Bg(4, null !== a.children ? a.children : [], a.key, b);
          b.lanes = c;
          b.stateNode = {
            containerInfo: a.containerInfo,
            pendingChildren: null,
            implementation: a.implementation
          };
          return b;
        }
        function al(a, b, c, d, e) {
          this.tag = b;
          this.containerInfo = a;
          this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
          this.timeoutHandle = -1;
          this.callbackNode = this.pendingContext = this.context = null;
          this.callbackPriority = 0;
          this.eventTimes = zc(0);
          this.expirationTimes = zc(-1);
          this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
          this.entanglements = zc(0);
          this.identifierPrefix = d;
          this.onRecoverableError = e;
          this.mutableSourceEagerHydrationData = null;
        }
        function bl(a, b, c, d, e, f, g, h, k) {
          a = new al(a, b, c, h, k);
          1 === b ? (b = 1, !0 === f && (b |= 8)) : b = 0;
          f = Bg(3, null, null, b);
          a.current = f;
          f.stateNode = a;
          f.memoizedState = {
            element: d,
            isDehydrated: c,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
          };
          kh(f);
          return a;
        }
        function cl(a, b, c) {
          var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
          return {
            $$typeof: wa,
            key: null == d ? null : "" + d,
            children: a,
            containerInfo: b,
            implementation: c
          };
        }
        function dl(a) {
          if (!a) return Vf;
          a = a._reactInternals;
          a: {
            if (Vb(a) !== a || 1 !== a.tag) throw Error(p$1(170));
            var b = a;
            do {
              switch (b.tag) {
                case 3:
                  b = b.stateNode.context;
                  break a;
                case 1:
                  if (Zf(b.type)) {
                    b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                    break a;
                  }
              }
              b = b.return;
            } while (null !== b);
            throw Error(p$1(171));
          }
          if (1 === a.tag) {
            var c = a.type;
            if (Zf(c)) return bg(a, c, b);
          }
          return b;
        }
        function el(a, b, c, d, e, f, g, h, k) {
          a = bl(c, d, !0, a, e, f, g, h, k);
          a.context = dl(null);
          c = a.current;
          d = R();
          e = yi(c);
          f = mh(d, e);
          f.callback = void 0 !== b && null !== b ? b : null;
          nh(c, f, e);
          a.current.lanes = e;
          Ac(a, e, d);
          Dk(a, d);
          return a;
        }
        function fl(a, b, c, d) {
          var e = b.current,
            f = R(),
            g = yi(e);
          c = dl(c);
          null === b.context ? b.context = c : b.pendingContext = c;
          b = mh(f, g);
          b.payload = {
            element: a
          };
          d = void 0 === d ? null : d;
          null !== d && (b.callback = d);
          a = nh(e, b, g);
          null !== a && (gi(a, e, g, f), oh(a, e, g));
          return g;
        }
        function gl(a) {
          a = a.current;
          if (!a.child) return null;
          switch (a.child.tag) {
            case 5:
              return a.child.stateNode;
            default:
              return a.child.stateNode;
          }
        }
        function hl(a, b) {
          a = a.memoizedState;
          if (null !== a && null !== a.dehydrated) {
            var c = a.retryLane;
            a.retryLane = 0 !== c && c < b ? c : b;
          }
        }
        function il(a, b) {
          hl(a, b);
          (a = a.alternate) && hl(a, b);
        }
        function jl() {
          return null;
        }
        var kl = "function" === typeof reportError ? reportError : function (a) {
          console.error(a);
        };
        function ll(a) {
          this._internalRoot = a;
        }
        ml.prototype.render = ll.prototype.render = function (a) {
          var b = this._internalRoot;
          if (null === b) throw Error(p$1(409));
          fl(a, b, null, null);
        };
        ml.prototype.unmount = ll.prototype.unmount = function () {
          var a = this._internalRoot;
          if (null !== a) {
            this._internalRoot = null;
            var b = a.containerInfo;
            Rk(function () {
              fl(null, a, null, null);
            });
            b[uf] = null;
          }
        };
        function ml(a) {
          this._internalRoot = a;
        }
        ml.prototype.unstable_scheduleHydration = function (a) {
          if (a) {
            var b = Hc();
            a = {
              blockedOn: null,
              target: a,
              priority: b
            };
            for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++);
            Qc.splice(c, 0, a);
            0 === c && Vc(a);
          }
        };
        function nl(a) {
          return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
        }
        function ol(a) {
          return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
        }
        function pl() {}
        function ql(a, b, c, d, e) {
          if (e) {
            if ("function" === typeof d) {
              var f = d;
              d = function d() {
                var a = gl(g);
                f.call(a);
              };
            }
            var g = el(b, d, a, 0, null, !1, !1, "", pl);
            a._reactRootContainer = g;
            a[uf] = g.current;
            sf(8 === a.nodeType ? a.parentNode : a);
            Rk();
            return g;
          }
          for (; e = a.lastChild;) a.removeChild(e);
          if ("function" === typeof d) {
            var h = d;
            d = function d() {
              var a = gl(k);
              h.call(a);
            };
          }
          var k = bl(a, 0, !1, null, null, !1, !1, "", pl);
          a._reactRootContainer = k;
          a[uf] = k.current;
          sf(8 === a.nodeType ? a.parentNode : a);
          Rk(function () {
            fl(b, k, c, d);
          });
          return k;
        }
        function rl(a, b, c, d, e) {
          var f = c._reactRootContainer;
          if (f) {
            var g = f;
            if ("function" === typeof e) {
              var h = e;
              e = function e() {
                var a = gl(g);
                h.call(a);
              };
            }
            fl(b, g, a, e);
          } else g = ql(c, b, a, e, d);
          return gl(g);
        }
        Ec = function Ec(a) {
          switch (a.tag) {
            case 3:
              var b = a.stateNode;
              if (b.current.memoizedState.isDehydrated) {
                var c = tc(b.pendingLanes);
                0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
              }
              break;
            case 13:
              Rk(function () {
                var b = ih(a, 1);
                if (null !== b) {
                  var c = R();
                  gi(b, a, 1, c);
                }
              }), il(a, 1);
          }
        };
        Fc = function Fc(a) {
          if (13 === a.tag) {
            var b = ih(a, 134217728);
            if (null !== b) {
              var c = R();
              gi(b, a, 134217728, c);
            }
            il(a, 134217728);
          }
        };
        Gc = function Gc(a) {
          if (13 === a.tag) {
            var b = yi(a),
              c = ih(a, b);
            if (null !== c) {
              var d = R();
              gi(c, a, b, d);
            }
            il(a, b);
          }
        };
        Hc = function Hc() {
          return C;
        };
        Ic = function Ic(a, b) {
          var c = C;
          try {
            return C = a, b();
          } finally {
            C = c;
          }
        };
        yb = function yb(a, b, c) {
          switch (b) {
            case "input":
              bb(a, c);
              b = c.name;
              if ("radio" === c.type && null != b) {
                for (c = a; c.parentNode;) c = c.parentNode;
                c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
                for (b = 0; b < c.length; b++) {
                  var d = c[b];
                  if (d !== a && d.form === a.form) {
                    var e = Db(d);
                    if (!e) throw Error(p$1(90));
                    Wa(d);
                    bb(d, e);
                  }
                }
              }
              break;
            case "textarea":
              ib(a, c);
              break;
            case "select":
              b = c.value, null != b && fb(a, !!c.multiple, b, !1);
          }
        };
        Gb = Qk;
        Hb = Rk;
        var sl = {
            usingClientEntryPoint: !1,
            Events: [Cb, ue, Db, Eb, Fb, Qk]
          },
          tl = {
            findFiberByHostInstance: Wc,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom"
          };
        var ul = {
          bundleType: tl.bundleType,
          version: tl.version,
          rendererPackageName: tl.rendererPackageName,
          rendererConfig: tl.rendererConfig,
          overrideHookState: null,
          overrideHookStateDeletePath: null,
          overrideHookStateRenamePath: null,
          overrideProps: null,
          overridePropsDeletePath: null,
          overridePropsRenamePath: null,
          setErrorHandler: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: ua.ReactCurrentDispatcher,
          findHostInstanceByFiber: function findHostInstanceByFiber(a) {
            a = Zb(a);
            return null === a ? null : a.stateNode;
          },
          findFiberByHostInstance: tl.findFiberByHostInstance || jl,
          findHostInstancesForRefresh: null,
          scheduleRefresh: null,
          scheduleRoot: null,
          setRefreshHandler: null,
          getCurrentFiber: null,
          reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
        };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!vl.isDisabled && vl.supportsFiber) try {
            kc = vl.inject(ul), lc = vl;
          } catch (a) {}
        }
        reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
        reactDom_production_min.createPortal = function (a, b) {
          var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
          if (!nl(b)) throw Error(p$1(200));
          return cl(a, b, null, c);
        };
        reactDom_production_min.createRoot = function (a, b) {
          if (!nl(a)) throw Error(p$1(299));
          var c = !1,
            d = "",
            e = kl;
          null !== b && void 0 !== b && (!0 === b.unstable_strictMode && (c = !0), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
          b = bl(a, 1, !1, null, null, c, !1, d, e);
          a[uf] = b.current;
          sf(8 === a.nodeType ? a.parentNode : a);
          return new ll(b);
        };
        reactDom_production_min.findDOMNode = function (a) {
          if (null == a) return null;
          if (1 === a.nodeType) return a;
          var b = a._reactInternals;
          if (void 0 === b) {
            if ("function" === typeof a.render) throw Error(p$1(188));
            a = Object.keys(a).join(",");
            throw Error(p$1(268, a));
          }
          a = Zb(b);
          a = null === a ? null : a.stateNode;
          return a;
        };
        reactDom_production_min.flushSync = function (a) {
          return Rk(a);
        };
        reactDom_production_min.hydrate = function (a, b, c) {
          if (!ol(b)) throw Error(p$1(200));
          return rl(null, a, b, !0, c);
        };
        reactDom_production_min.hydrateRoot = function (a, b, c) {
          if (!nl(a)) throw Error(p$1(405));
          var d = null != c && c.hydratedSources || null,
            e = !1,
            f = "",
            g = kl;
          null !== c && void 0 !== c && (!0 === c.unstable_strictMode && (e = !0), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
          b = el(b, null, a, 1, null != c ? c : null, e, !1, f, g);
          a[uf] = b.current;
          sf(a);
          if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(c, e);
          return new ml(b);
        };
        reactDom_production_min.render = function (a, b, c) {
          if (!ol(b)) throw Error(p$1(200));
          return rl(null, a, b, !1, c);
        };
        reactDom_production_min.unmountComponentAtNode = function (a) {
          if (!ol(a)) throw Error(p$1(40));
          return a._reactRootContainer ? (Rk(function () {
            rl(null, null, a, !1, function () {
              a._reactRootContainer = null;
              a[uf] = null;
            });
          }), !0) : !1;
        };
        reactDom_production_min.unstable_batchedUpdates = Qk;
        reactDom_production_min.unstable_renderSubtreeIntoContainer = function (a, b, c, d) {
          if (!ol(c)) throw Error(p$1(200));
          if (null == a || void 0 === a._reactInternals) throw Error(p$1(38));
          return rl(a, b, c, !1, d);
        };
        reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
        function checkDCE() {
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
            return;
          }
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
          } catch (err) {
            console.error(err);
          }
        }
        {
          checkDCE();
          reactDom.exports = reactDom_production_min;
        }
        var reactDomExports = exports("ai", reactDom.exports);
        const ReactDOM = exports("ag", /*@__PURE__*/getDefaultExportFromCjs(reactDomExports));
        var createRoot;
        var m$1 = reactDomExports;
        {
          createRoot = m$1.createRoot;
          m$1.hydrateRoot;
        }

        /**
         * @remix-run/router v1.20.0
         *
         * Copyright (c) Remix Software Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE.md file in the root directory of this source tree.
         *
         * @license MIT
         */
        function _extends$4() {
          _extends$4 = Object.assign ? Object.assign.bind() : function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
          return _extends$4.apply(this, arguments);
        }

        ////////////////////////////////////////////////////////////////////////////////
        //#region Types and Constants
        ////////////////////////////////////////////////////////////////////////////////
        /**
         * Actions represent the type of change to a location value.
         */
        var Action;
        (function (Action) {
          /**
           * A POP indicates a change to an arbitrary index in the history stack, such
           * as a back or forward navigation. It does not describe the direction of the
           * navigation, only that the current index changed.
           *
           * Note: This is the default action for newly created history objects.
           */
          Action["Pop"] = "POP";
          /**
           * A PUSH indicates a new entry being added to the history stack, such as when
           * a link is clicked and a new page loads. When this happens, all subsequent
           * entries in the stack are lost.
           */
          Action["Push"] = "PUSH";
          /**
           * A REPLACE indicates the entry at the current index in the history stack
           * being replaced by a new one.
           */
          Action["Replace"] = "REPLACE";
        })(Action || (Action = {}));
        const PopStateEventType = "popstate";
        /**
         * Browser history stores the location in regular URLs. This is the standard for
         * most web apps, but it requires some configuration on the server to ensure you
         * serve the same app at multiple URLs.
         *
         * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
         */
        function createBrowserHistory(options) {
          if (options === void 0) {
            options = {};
          }
          function createBrowserLocation(window, globalHistory) {
            let _window$location = window.location,
              pathname = _window$location.pathname,
              search = _window$location.search,
              hash = _window$location.hash;
            return createLocation("", {
              pathname,
              search,
              hash
            },
            // state defaults to `null` because `window.history.state` does
            globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
          }
          function createBrowserHref(window, to) {
            return typeof to === "string" ? to : createPath(to);
          }
          return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
        }
        function invariant(value, message) {
          if (value === false || value === null || typeof value === "undefined") {
            throw new Error(message);
          }
        }
        function warning(cond, message) {
          if (!cond) {
            // eslint-disable-next-line no-console
            if (typeof console !== "undefined") console.warn(message);
            try {
              // Welcome to debugging history!
              //
              // This error is thrown as a convenience, so you can more easily
              // find the source for a warning that appears in the console by
              // enabling "pause on exceptions" in your JavaScript debugger.
              throw new Error(message);
              // eslint-disable-next-line no-empty
            } catch (e) {}
          }
        }
        function createKey() {
          return Math.random().toString(36).substr(2, 8);
        }
        /**
         * For browser-based histories, we combine the state and key into an object
         */
        function getHistoryState(location, index) {
          return {
            usr: location.state,
            key: location.key,
            idx: index
          };
        }
        /**
         * Creates a Location object with a unique key from the given Path
         */
        function createLocation(current, to, state, key) {
          if (state === void 0) {
            state = null;
          }
          let location = _extends$4({
            pathname: typeof current === "string" ? current : current.pathname,
            search: "",
            hash: ""
          }, typeof to === "string" ? parsePath(to) : to, {
            state,
            // TODO: This could be cleaned up.  push/replace should probably just take
            // full Locations now and avoid the need to run through this flow at all
            // But that's a pretty big refactor to the current test suite so going to
            // keep as is for the time being and just let any incoming keys take precedence
            key: to && to.key || key || createKey()
          });
          return location;
        }
        /**
         * Creates a string URL path from the given pathname, search, and hash components.
         */
        function createPath(_ref) {
          let _ref$pathname = _ref.pathname,
            pathname = _ref$pathname === void 0 ? "/" : _ref$pathname,
            _ref$search = _ref.search,
            search = _ref$search === void 0 ? "" : _ref$search,
            _ref$hash = _ref.hash,
            hash = _ref$hash === void 0 ? "" : _ref$hash;
          if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
          if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
          return pathname;
        }
        /**
         * Parses a string URL path into its separate pathname, search, and hash components.
         */
        function parsePath(path) {
          let parsedPath = {};
          if (path) {
            let hashIndex = path.indexOf("#");
            if (hashIndex >= 0) {
              parsedPath.hash = path.substr(hashIndex);
              path = path.substr(0, hashIndex);
            }
            let searchIndex = path.indexOf("?");
            if (searchIndex >= 0) {
              parsedPath.search = path.substr(searchIndex);
              path = path.substr(0, searchIndex);
            }
            if (path) {
              parsedPath.pathname = path;
            }
          }
          return parsedPath;
        }
        function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
          if (options === void 0) {
            options = {};
          }
          let _options = options,
            _options$window = _options.window,
            window = _options$window === void 0 ? document.defaultView : _options$window,
            _options$v5Compat = _options.v5Compat,
            v5Compat = _options$v5Compat === void 0 ? false : _options$v5Compat;
          let globalHistory = window.history;
          let action = Action.Pop;
          let listener = null;
          let index = getIndex();
          // Index should only be null when we initialize. If not, it's because the
          // user called history.pushState or history.replaceState directly, in which
          // case we should log a warning as it will result in bugs.
          if (index == null) {
            index = 0;
            globalHistory.replaceState(_extends$4({}, globalHistory.state, {
              idx: index
            }), "");
          }
          function getIndex() {
            let state = globalHistory.state || {
              idx: null
            };
            return state.idx;
          }
          function handlePop() {
            action = Action.Pop;
            let nextIndex = getIndex();
            let delta = nextIndex == null ? null : nextIndex - index;
            index = nextIndex;
            if (listener) {
              listener({
                action,
                location: history.location,
                delta
              });
            }
          }
          function push(to, state) {
            action = Action.Push;
            let location = createLocation(history.location, to, state);
            index = getIndex() + 1;
            let historyState = getHistoryState(location, index);
            let url = history.createHref(location);
            // try...catch because iOS limits us to 100 pushState calls :/
            try {
              globalHistory.pushState(historyState, "", url);
            } catch (error) {
              // If the exception is because `state` can't be serialized, let that throw
              // outwards just like a replace call would so the dev knows the cause
              // https://html.spec.whatwg.org/multipage/nav-history-apis.html#shared-history-push/replace-state-steps
              // https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal
              if (error instanceof DOMException && error.name === "DataCloneError") {
                throw error;
              }
              // They are going to lose state here, but there is no real
              // way to warn them about it since the page will refresh...
              window.location.assign(url);
            }
            if (v5Compat && listener) {
              listener({
                action,
                location: history.location,
                delta: 1
              });
            }
          }
          function replace(to, state) {
            action = Action.Replace;
            let location = createLocation(history.location, to, state);
            index = getIndex();
            let historyState = getHistoryState(location, index);
            let url = history.createHref(location);
            globalHistory.replaceState(historyState, "", url);
            if (v5Compat && listener) {
              listener({
                action,
                location: history.location,
                delta: 0
              });
            }
          }
          function createURL(to) {
            // window.location.origin is "null" (the literal string value) in Firefox
            // under certain conditions, notably when serving from a local HTML file
            // See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
            let base = window.location.origin !== "null" ? window.location.origin : window.location.href;
            let href = typeof to === "string" ? to : createPath(to);
            // Treating this as a full URL will strip any trailing spaces so we need to
            // pre-encode them since they might be part of a matching splat param from
            // an ancestor route
            href = href.replace(/ $/, "%20");
            invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
            return new URL(href, base);
          }
          let history = {
            get action() {
              return action;
            },
            get location() {
              return getLocation(window, globalHistory);
            },
            listen(fn) {
              if (listener) {
                throw new Error("A history only accepts one active listener");
              }
              window.addEventListener(PopStateEventType, handlePop);
              listener = fn;
              return () => {
                window.removeEventListener(PopStateEventType, handlePop);
                listener = null;
              };
            },
            createHref(to) {
              return createHref(window, to);
            },
            createURL,
            encodeLocation(to) {
              // Encode a Location the same way window.location would
              let url = createURL(to);
              return {
                pathname: url.pathname,
                search: url.search,
                hash: url.hash
              };
            },
            push,
            replace,
            go(n) {
              return globalHistory.go(n);
            }
          };
          return history;
        }
        //#endregion

        var ResultType;
        (function (ResultType) {
          ResultType["data"] = "data";
          ResultType["deferred"] = "deferred";
          ResultType["redirect"] = "redirect";
          ResultType["error"] = "error";
        })(ResultType || (ResultType = {}));
        /**
         * Matches the given routes to a location and returns the match data.
         *
         * @see https://reactrouter.com/utils/match-routes
         */
        function matchRoutes(routes, locationArg, basename) {
          if (basename === void 0) {
            basename = "/";
          }
          return matchRoutesImpl(routes, locationArg, basename, false);
        }
        function matchRoutesImpl(routes, locationArg, basename, allowPartial) {
          let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
          let pathname = stripBasename(location.pathname || "/", basename);
          if (pathname == null) {
            return null;
          }
          let branches = flattenRoutes(routes);
          rankRouteBranches(branches);
          let matches = null;
          for (let i = 0; matches == null && i < branches.length; ++i) {
            // Incoming pathnames are generally encoded from either window.location
            // or from router.navigate, but we want to match against the unencoded
            // paths in the route definitions.  Memory router locations won't be
            // encoded here but there also shouldn't be anything to decode so this
            // should be a safe operation.  This avoids needing matchRoutes to be
            // history-aware.
            let decoded = decodePath(pathname);
            matches = matchRouteBranch(branches[i], decoded, allowPartial);
          }
          return matches;
        }
        function flattenRoutes(routes, branches, parentsMeta, parentPath) {
          if (branches === void 0) {
            branches = [];
          }
          if (parentsMeta === void 0) {
            parentsMeta = [];
          }
          if (parentPath === void 0) {
            parentPath = "";
          }
          let flattenRoute = (route, index, relativePath) => {
            let meta = {
              relativePath: relativePath === undefined ? route.path || "" : relativePath,
              caseSensitive: route.caseSensitive === true,
              childrenIndex: index,
              route
            };
            if (meta.relativePath.startsWith("/")) {
              invariant(meta.relativePath.startsWith(parentPath), "Absolute route path \"" + meta.relativePath + "\" nested under path " + ("\"" + parentPath + "\" is not valid. An absolute child route path ") + "must start with the combined path of all its parent routes.");
              meta.relativePath = meta.relativePath.slice(parentPath.length);
            }
            let path = joinPaths([parentPath, meta.relativePath]);
            let routesMeta = parentsMeta.concat(meta);
            // Add the children before adding this route to the array, so we traverse the
            // route tree depth-first and child routes appear before their parents in
            // the "flattened" version.
            if (route.children && route.children.length > 0) {
              invariant(
              // Our types know better, but runtime JS may not!
              // @ts-expect-error
              route.index !== true, "Index routes must not have child routes. Please remove " + ("all child routes from route path \"" + path + "\"."));
              flattenRoutes(route.children, branches, routesMeta, path);
            }
            // Routes without a path shouldn't ever match by themselves unless they are
            // index routes, so don't add them to the list of possible branches.
            if (route.path == null && !route.index) {
              return;
            }
            branches.push({
              path,
              score: computeScore(path, route.index),
              routesMeta
            });
          };
          routes.forEach((route, index) => {
            var _route$path;
            // coarse-grain check for optional params
            if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
              flattenRoute(route, index);
            } else {
              var _iterator4 = _createForOfIteratorHelper(explodeOptionalSegments(route.path)),
                _step4;
              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  let exploded = _step4.value;
                  flattenRoute(route, index, exploded);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            }
          });
          return branches;
        }
        /**
         * Computes all combinations of optional path segments for a given path,
         * excluding combinations that are ambiguous and of lower priority.
         *
         * For example, `/one/:two?/three/:four?/:five?` explodes to:
         * - `/one/three`
         * - `/one/:two/three`
         * - `/one/three/:four`
         * - `/one/three/:five`
         * - `/one/:two/three/:four`
         * - `/one/:two/three/:five`
         * - `/one/three/:four/:five`
         * - `/one/:two/three/:four/:five`
         */
        function explodeOptionalSegments(path) {
          let segments = path.split("/");
          if (segments.length === 0) return [];
          let _segments = _toArray2(segments),
            first = _segments[0],
            rest = _segments.slice(1);
          // Optional path segments are denoted by a trailing `?`
          let isOptional = first.endsWith("?");
          // Compute the corresponding required segment: `foo?` -> `foo`
          let required = first.replace(/\?$/, "");
          if (rest.length === 0) {
            // Intepret empty string as omitting an optional segment
            // `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
            return isOptional ? [required, ""] : [required];
          }
          let restExploded = explodeOptionalSegments(rest.join("/"));
          let result = [];
          // All child paths with the prefix.  Do this for all children before the
          // optional version for all children, so we get consistent ordering where the
          // parent optional aspect is preferred as required.  Otherwise, we can get
          // child sections interspersed where deeper optional segments are higher than
          // parent optional segments, where for example, /:two would explode _earlier_
          // then /:one.  By always including the parent as required _for all children_
          // first, we avoid this issue
          result.push(...restExploded.map(subpath => subpath === "" ? required : [required, subpath].join("/")));
          // Then, if this is an optional value, add all child versions without
          if (isOptional) {
            result.push(...restExploded);
          }
          // for absolute paths, ensure `/` instead of empty segment
          return result.map(exploded => path.startsWith("/") && exploded === "" ? "/" : exploded);
        }
        function rankRouteBranches(branches) {
          branches.sort((a, b) => a.score !== b.score ? b.score - a.score // Higher score first
          : compareIndexes(a.routesMeta.map(meta => meta.childrenIndex), b.routesMeta.map(meta => meta.childrenIndex)));
        }
        const paramRe = /^:[\w-]+$/;
        const dynamicSegmentValue = 3;
        const indexRouteValue = 2;
        const emptySegmentValue = 1;
        const staticSegmentValue = 10;
        const splatPenalty = -2;
        const isSplat = s => s === "*";
        function computeScore(path, index) {
          let segments = path.split("/");
          let initialScore = segments.length;
          if (segments.some(isSplat)) {
            initialScore += splatPenalty;
          }
          if (index) {
            initialScore += indexRouteValue;
          }
          return segments.filter(s => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
        }
        function compareIndexes(a, b) {
          let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
          return siblings ?
          // If two routes are siblings, we should try to match the earlier sibling
          // first. This allows people to have fine-grained control over the matching
          // behavior by simply putting routes with identical paths in the order they
          // want them tried.
          a[a.length - 1] - b[b.length - 1] :
          // Otherwise, it doesn't really make sense to rank non-siblings by index,
          // so they sort equally.
          0;
        }
        function matchRouteBranch(branch, pathname, allowPartial) {
          let routesMeta = branch.routesMeta;
          let matchedParams = {};
          let matchedPathname = "/";
          let matches = [];
          for (let i = 0; i < routesMeta.length; ++i) {
            let meta = routesMeta[i];
            let end = i === routesMeta.length - 1;
            let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
            let match = matchPath({
              path: meta.relativePath,
              caseSensitive: meta.caseSensitive,
              end
            }, remainingPathname);
            let route = meta.route;
            if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
              match = matchPath({
                path: meta.relativePath,
                caseSensitive: meta.caseSensitive,
                end: false
              }, remainingPathname);
            }
            if (!match) {
              return null;
            }
            Object.assign(matchedParams, match.params);
            matches.push({
              // TODO: Can this as be avoided?
              params: matchedParams,
              pathname: joinPaths([matchedPathname, match.pathname]),
              pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
              route
            });
            if (match.pathnameBase !== "/") {
              matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
            }
          }
          return matches;
        }
        /**
         * Performs pattern matching on a URL pathname and returns information about
         * the match.
         *
         * @see https://reactrouter.com/utils/match-path
         */
        function matchPath(pattern, pathname) {
          if (typeof pattern === "string") {
            pattern = {
              path: pattern,
              caseSensitive: false,
              end: true
            };
          }
          let _compilePath = compilePath(pattern.path, pattern.caseSensitive, pattern.end),
            _compilePath2 = _slicedToArray(_compilePath, 2),
            matcher = _compilePath2[0],
            compiledParams = _compilePath2[1];
          let match = pathname.match(matcher);
          if (!match) return null;
          let matchedPathname = match[0];
          let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
          let captureGroups = match.slice(1);
          let params = compiledParams.reduce((memo, _ref, index) => {
            let paramName = _ref.paramName,
              isOptional = _ref.isOptional;
            // We need to compute the pathnameBase here using the raw splat value
            // instead of using params["*"] later because it will be decoded then
            if (paramName === "*") {
              let splatValue = captureGroups[index] || "";
              pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
            }
            const value = captureGroups[index];
            if (isOptional && !value) {
              memo[paramName] = undefined;
            } else {
              memo[paramName] = (value || "").replace(/%2F/g, "/");
            }
            return memo;
          }, {});
          return {
            params,
            pathname: matchedPathname,
            pathnameBase,
            pattern
          };
        }
        function compilePath(path, caseSensitive, end) {
          if (caseSensitive === void 0) {
            caseSensitive = false;
          }
          if (end === void 0) {
            end = true;
          }
          warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
          let params = [];
          let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
          .replace(/^\/*/, "/") // Make sure it has a leading /
          .replace(/[\\.*+^${}|()[\]]/g, "\\$&") // Escape special regex chars
          .replace(/\/:([\w-]+)(\?)?/g, (_, paramName, isOptional) => {
            params.push({
              paramName,
              isOptional: isOptional != null
            });
            return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
          });
          if (path.endsWith("*")) {
            params.push({
              paramName: "*"
            });
            regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
            : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
          } else if (end) {
            // When matching to the end, ignore trailing slashes
            regexpSource += "\\/*$";
          } else if (path !== "" && path !== "/") {
            // If our path is non-empty and contains anything beyond an initial slash,
            // then we have _some_ form of path in our regex, so we should expect to
            // match only if we find the end of this path segment.  Look for an optional
            // non-captured trailing slash (to match a portion of the URL) or the end
            // of the path (if we've matched to the end).  We used to do this with a
            // word boundary but that gives false positives on routes like
            // /user-preferences since `-` counts as a word boundary.
            regexpSource += "(?:(?=\\/|$))";
          } else ;
          let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
          return [matcher, params];
        }
        function decodePath(value) {
          try {
            return value.split("/").map(v => decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
          } catch (error) {
            warning(false, "The URL path \"" + value + "\" could not be decoded because it is is a " + "malformed URL segment. This is probably due to a bad percent " + ("encoding (" + error + ")."));
            return value;
          }
        }
        /**
         * @private
         */
        function stripBasename(pathname, basename) {
          if (basename === "/") return pathname;
          if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
            return null;
          }
          // We want to leave trailing slash behavior in the user's control, so if they
          // specify a basename with a trailing slash, we should support it
          let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
          let nextChar = pathname.charAt(startIndex);
          if (nextChar && nextChar !== "/") {
            // pathname does not start with basename/
            return null;
          }
          return pathname.slice(startIndex) || "/";
        }
        /**
         * Returns a resolved path object relative to the given pathname.
         *
         * @see https://reactrouter.com/utils/resolve-path
         */
        function resolvePath(to, fromPathname) {
          if (fromPathname === void 0) {
            fromPathname = "/";
          }
          let _ref2 = typeof to === "string" ? parsePath(to) : to,
            toPathname = _ref2.pathname,
            _ref2$search = _ref2.search,
            search = _ref2$search === void 0 ? "" : _ref2$search,
            _ref2$hash = _ref2.hash,
            hash = _ref2$hash === void 0 ? "" : _ref2$hash;
          let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
          return {
            pathname,
            search: normalizeSearch(search),
            hash: normalizeHash(hash)
          };
        }
        function resolvePathname(relativePath, fromPathname) {
          let segments = fromPathname.replace(/\/+$/, "").split("/");
          let relativeSegments = relativePath.split("/");
          relativeSegments.forEach(segment => {
            if (segment === "..") {
              // Keep the root "" segment so the pathname starts at /
              if (segments.length > 1) segments.pop();
            } else if (segment !== ".") {
              segments.push(segment);
            }
          });
          return segments.length > 1 ? segments.join("/") : "/";
        }
        function getInvalidPathError(char, field, dest, path) {
          return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + "a string in <Link to=\"...\"> and the router will parse it for you.";
        }
        /**
         * @private
         *
         * When processing relative navigation we want to ignore ancestor routes that
         * do not contribute to the path, such that index/pathless layout routes don't
         * interfere.
         *
         * For example, when moving a route element into an index route and/or a
         * pathless layout route, relative link behavior contained within should stay
         * the same.  Both of the following examples should link back to the root:
         *
         *   <Route path="/">
         *     <Route path="accounts" element={<Link to=".."}>
         *   </Route>
         *
         *   <Route path="/">
         *     <Route path="accounts">
         *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
         *         <Route index element={<Link to=".."} />  // <-- Does not contribute
         *       </Route
         *     </Route>
         *   </Route>
         */
        function getPathContributingMatches(matches) {
          return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
        }
        // Return the array of pathnames for the current route matches - used to
        // generate the routePathnames input for resolveTo()
        function getResolveToMatches(matches, v7_relativeSplatPath) {
          let pathMatches = getPathContributingMatches(matches);
          // When v7_relativeSplatPath is enabled, use the full pathname for the leaf
          // match so we include splat values for "." links.  See:
          // https://github.com/remix-run/react-router/issues/11052#issuecomment-1836589329
          if (v7_relativeSplatPath) {
            return pathMatches.map((match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase);
          }
          return pathMatches.map(match => match.pathnameBase);
        }
        /**
         * @private
         */
        function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
          if (isPathRelative === void 0) {
            isPathRelative = false;
          }
          let to;
          if (typeof toArg === "string") {
            to = parsePath(toArg);
          } else {
            to = _extends$4({}, toArg);
            invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
            invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
            invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
          }
          let isEmptyPath = toArg === "" || to.pathname === "";
          let toPathname = isEmptyPath ? "/" : to.pathname;
          let from;
          // Routing is relative to the current pathname if explicitly requested.
          //
          // If a pathname is explicitly provided in `to`, it should be relative to the
          // route context. This is explained in `Note on `<Link to>` values` in our
          // migration guide from v5 as a means of disambiguation between `to` values
          // that begin with `/` and those that do not. However, this is problematic for
          // `to` values that do not provide a pathname. `to` can simply be a search or
          // hash string, in which case we should assume that the navigation is relative
          // to the current location's pathname and *not* the route pathname.
          if (toPathname == null) {
            from = locationPathname;
          } else {
            let routePathnameIndex = routePathnames.length - 1;
            // With relative="route" (the default), each leading .. segment means
            // "go up one route" instead of "go up one URL segment".  This is a key
            // difference from how <a href> works and a major reason we call this a
            // "to" value instead of a "href".
            if (!isPathRelative && toPathname.startsWith("..")) {
              let toSegments = toPathname.split("/");
              while (toSegments[0] === "..") {
                toSegments.shift();
                routePathnameIndex -= 1;
              }
              to.pathname = toSegments.join("/");
            }
            from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
          }
          let path = resolvePath(to, from);
          // Ensure the pathname has a trailing slash if the original "to" had one
          let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
          // Or if this was a link to the current path which has a trailing slash
          let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
          if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
            path.pathname += "/";
          }
          return path;
        }
        /**
         * @private
         */
        const joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");
        /**
         * @private
         */
        const normalizePathname = pathname => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
        /**
         * @private
         */
        const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
        /**
         * @private
         */
        const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
        /**
         * Check if the given error is an ErrorResponse generated from a 4xx/5xx
         * Response thrown from an action/loader
         */
        function isRouteErrorResponse(error) {
          return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
        }
        const validMutationMethodsArr = ["post", "put", "patch", "delete"];
        new Set(validMutationMethodsArr);
        const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
        new Set(validRequestMethodsArr);

        /**
         * React Router v6.27.0
         *
         * Copyright (c) Remix Software Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE.md file in the root directory of this source tree.
         *
         * @license MIT
         */
        function _extends$3() {
          _extends$3 = Object.assign ? Object.assign.bind() : function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
          return _extends$3.apply(this, arguments);
        }
        const DataRouterContext = /* @__PURE__ */reactExports.createContext(null);
        const DataRouterStateContext = /* @__PURE__ */reactExports.createContext(null);
        const NavigationContext = /* @__PURE__ */reactExports.createContext(null);
        const LocationContext = /* @__PURE__ */reactExports.createContext(null);
        const RouteContext = /* @__PURE__ */reactExports.createContext({
          outlet: null,
          matches: [],
          isDataRoute: false
        });
        const RouteErrorContext = /* @__PURE__ */reactExports.createContext(null);
        function useHref(to, _temp) {
          let _ref3 = _temp === void 0 ? {} : _temp,
            relative = _ref3.relative;
          !useInRouterContext() ? invariant(false) : void 0;
          let _reactExports$useCont = reactExports.useContext(NavigationContext),
            basename = _reactExports$useCont.basename,
            navigator = _reactExports$useCont.navigator;
          let _useResolvedPath = useResolvedPath(to, {
              relative
            }),
            hash = _useResolvedPath.hash,
            pathname = _useResolvedPath.pathname,
            search = _useResolvedPath.search;
          let joinedPathname = pathname;
          if (basename !== "/") {
            joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
          }
          return navigator.createHref({
            pathname: joinedPathname,
            search,
            hash
          });
        }
        function useInRouterContext() {
          return reactExports.useContext(LocationContext) != null;
        }
        function useLocation() {
          !useInRouterContext() ? invariant(false) : void 0;
          return reactExports.useContext(LocationContext).location;
        }
        function useIsomorphicLayoutEffect(cb) {
          let isStatic = reactExports.useContext(NavigationContext).static;
          if (!isStatic) {
            reactExports.useLayoutEffect(cb);
          }
        }
        function useNavigate() {
          let _reactExports$useCont2 = reactExports.useContext(RouteContext),
            isDataRoute = _reactExports$useCont2.isDataRoute;
          return isDataRoute ? useNavigateStable() : useNavigateUnstable();
        }
        function useNavigateUnstable() {
          !useInRouterContext() ? invariant(false) : void 0;
          let dataRouterContext = reactExports.useContext(DataRouterContext);
          let _reactExports$useCont3 = reactExports.useContext(NavigationContext),
            basename = _reactExports$useCont3.basename,
            future = _reactExports$useCont3.future,
            navigator = _reactExports$useCont3.navigator;
          let _reactExports$useCont4 = reactExports.useContext(RouteContext),
            matches = _reactExports$useCont4.matches;
          let _useLocation = useLocation(),
            locationPathname = _useLocation.pathname;
          let routePathnamesJson = JSON.stringify(getResolveToMatches(matches, future.v7_relativeSplatPath));
          let activeRef = reactExports.useRef(false);
          useIsomorphicLayoutEffect(() => {
            activeRef.current = true;
          });
          let navigate = reactExports.useCallback(function (to, options) {
            if (options === void 0) {
              options = {};
            }
            if (!activeRef.current) return;
            if (typeof to === "number") {
              navigator.go(to);
              return;
            }
            let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
            if (dataRouterContext == null && basename !== "/") {
              path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
            }
            (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
          }, [basename, navigator, routePathnamesJson, locationPathname, dataRouterContext]);
          return navigate;
        }
        function useParams() {
          let _reactExports$useCont5 = reactExports.useContext(RouteContext),
            matches = _reactExports$useCont5.matches;
          let routeMatch = matches[matches.length - 1];
          return routeMatch ? routeMatch.params : {};
        }
        function useResolvedPath(to, _temp2) {
          let _ref8 = _temp2 === void 0 ? {} : _temp2,
            relative = _ref8.relative;
          let _reactExports$useCont6 = reactExports.useContext(NavigationContext),
            future = _reactExports$useCont6.future;
          let _reactExports$useCont7 = reactExports.useContext(RouteContext),
            matches = _reactExports$useCont7.matches;
          let _useLocation2 = useLocation(),
            locationPathname = _useLocation2.pathname;
          let routePathnamesJson = JSON.stringify(getResolveToMatches(matches, future.v7_relativeSplatPath));
          return reactExports.useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
        }
        function useRoutes(routes, locationArg) {
          return useRoutesImpl(routes, locationArg);
        }
        function useRoutesImpl(routes, locationArg, dataRouterState, future) {
          !useInRouterContext() ? invariant(false) : void 0;
          let _reactExports$useCont8 = reactExports.useContext(NavigationContext),
            navigator = _reactExports$useCont8.navigator;
          let _reactExports$useCont9 = reactExports.useContext(RouteContext),
            parentMatches = _reactExports$useCont9.matches;
          let routeMatch = parentMatches[parentMatches.length - 1];
          let parentParams = routeMatch ? routeMatch.params : {};
          routeMatch ? routeMatch.pathname : "/";
          let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
          routeMatch && routeMatch.route;
          let locationFromContext = useLocation();
          let location;
          if (locationArg) {
            var _parsedLocationArg$pa;
            let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
            !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant(false) : void 0;
            location = parsedLocationArg;
          } else {
            location = locationFromContext;
          }
          let pathname = location.pathname || "/";
          let remainingPathname = pathname;
          if (parentPathnameBase !== "/") {
            let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
            let segments = pathname.replace(/^\//, "").split("/");
            remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
          }
          let matches = matchRoutes(routes, {
            pathname: remainingPathname
          });
          let renderedMatches = _renderMatches(matches && matches.map(match => Object.assign({}, match, {
            params: Object.assign({}, parentParams, match.params),
            pathname: joinPaths([parentPathnameBase,
            // Re-encode pathnames that were decoded inside matchRoutes
            navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname]),
            pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase,
            // Re-encode pathnames that were decoded inside matchRoutes
            navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase])
          })), parentMatches, dataRouterState, future);
          if (locationArg && renderedMatches) {
            return /* @__PURE__ */reactExports.createElement(LocationContext.Provider, {
              value: {
                location: _extends$3({
                  pathname: "/",
                  search: "",
                  hash: "",
                  state: null,
                  key: "default"
                }, location),
                navigationType: Action.Pop
              }
            }, renderedMatches);
          }
          return renderedMatches;
        }
        function DefaultErrorComponent() {
          let error = useRouteError();
          let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
          let stack = error instanceof Error ? error.stack : null;
          let lightgrey = "rgba(200,200,200, 0.5)";
          let preStyles = {
            padding: "0.5rem",
            backgroundColor: lightgrey
          };
          let devInfo = null;
          return /* @__PURE__ */reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */reactExports.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */reactExports.createElement("h3", {
            style: {
              fontStyle: "italic"
            }
          }, message), stack ? /* @__PURE__ */reactExports.createElement("pre", {
            style: preStyles
          }, stack) : null, devInfo);
        }
        const defaultErrorElement = /* @__PURE__ */reactExports.createElement(DefaultErrorComponent, null);
        class RenderErrorBoundary extends reactExports.Component {
          constructor(props) {
            super(props);
            this.state = {
              location: props.location,
              revalidation: props.revalidation,
              error: props.error
            };
          }
          static getDerivedStateFromError(error) {
            return {
              error
            };
          }
          static getDerivedStateFromProps(props, state) {
            if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
              return {
                error: props.error,
                location: props.location,
                revalidation: props.revalidation
              };
            }
            return {
              error: props.error !== void 0 ? props.error : state.error,
              location: state.location,
              revalidation: props.revalidation || state.revalidation
            };
          }
          componentDidCatch(error, errorInfo) {
            console.error("React Router caught the following error during render", error, errorInfo);
          }
          render() {
            return this.state.error !== void 0 ? /* @__PURE__ */reactExports.createElement(RouteContext.Provider, {
              value: this.props.routeContext
            }, /* @__PURE__ */reactExports.createElement(RouteErrorContext.Provider, {
              value: this.state.error,
              children: this.props.component
            })) : this.props.children;
          }
        }
        function RenderedRoute(_ref) {
          let routeContext = _ref.routeContext,
            match = _ref.match,
            children = _ref.children;
          let dataRouterContext = reactExports.useContext(DataRouterContext);
          if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
            dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
          }
          return /* @__PURE__ */reactExports.createElement(RouteContext.Provider, {
            value: routeContext
          }, children);
        }
        function _renderMatches(matches, parentMatches, dataRouterState, future) {
          var _dataRouterState;
          if (parentMatches === void 0) {
            parentMatches = [];
          }
          if (dataRouterState === void 0) {
            dataRouterState = null;
          }
          if (future === void 0) {
            future = null;
          }
          if (matches == null) {
            var _future;
            if (!dataRouterState) {
              return null;
            }
            if (dataRouterState.errors) {
              matches = dataRouterState.matches;
            } else if ((_future = future) != null && _future.v7_partialHydration && parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
              matches = dataRouterState.matches;
            } else {
              return null;
            }
          }
          let renderedMatches = matches;
          let errors = (_dataRouterState = dataRouterState) == null ? void 0 : _dataRouterState.errors;
          if (errors != null) {
            let errorIndex = renderedMatches.findIndex(m => m.route.id && (errors == null ? void 0 : errors[m.route.id]) !== void 0);
            !(errorIndex >= 0) ? invariant(false) : void 0;
            renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
          }
          let renderFallback = false;
          let fallbackIndex = -1;
          if (dataRouterState && future && future.v7_partialHydration) {
            for (let i = 0; i < renderedMatches.length; i++) {
              let match = renderedMatches[i];
              if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
                fallbackIndex = i;
              }
              if (match.route.id) {
                let _dataRouterState2 = dataRouterState,
                  loaderData = _dataRouterState2.loaderData,
                  errors2 = _dataRouterState2.errors;
                let needsToRunLoader = match.route.loader && loaderData[match.route.id] === void 0 && (!errors2 || errors2[match.route.id] === void 0);
                if (match.route.lazy || needsToRunLoader) {
                  renderFallback = true;
                  if (fallbackIndex >= 0) {
                    renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
                  } else {
                    renderedMatches = [renderedMatches[0]];
                  }
                  break;
                }
              }
            }
          }
          return renderedMatches.reduceRight((outlet, match, index) => {
            let error;
            let shouldRenderHydrateFallback = false;
            let errorElement = null;
            let hydrateFallbackElement = null;
            if (dataRouterState) {
              error = errors && match.route.id ? errors[match.route.id] : void 0;
              errorElement = match.route.errorElement || defaultErrorElement;
              if (renderFallback) {
                if (fallbackIndex < 0 && index === 0) {
                  shouldRenderHydrateFallback = true;
                  hydrateFallbackElement = null;
                } else if (fallbackIndex === index) {
                  shouldRenderHydrateFallback = true;
                  hydrateFallbackElement = match.route.hydrateFallbackElement || null;
                }
              }
            }
            let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
            let getChildren = () => {
              let children;
              if (error) {
                children = errorElement;
              } else if (shouldRenderHydrateFallback) {
                children = hydrateFallbackElement;
              } else if (match.route.Component) {
                children = /* @__PURE__ */reactExports.createElement(match.route.Component, null);
              } else if (match.route.element) {
                children = match.route.element;
              } else {
                children = outlet;
              }
              return /* @__PURE__ */reactExports.createElement(RenderedRoute, {
                match,
                routeContext: {
                  outlet,
                  matches: matches2,
                  isDataRoute: dataRouterState != null
                },
                children
              });
            };
            return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /* @__PURE__ */reactExports.createElement(RenderErrorBoundary, {
              location: dataRouterState.location,
              revalidation: dataRouterState.revalidation,
              component: errorElement,
              error,
              children: getChildren(),
              routeContext: {
                outlet: null,
                matches: matches2,
                isDataRoute: true
              }
            }) : getChildren();
          }, null);
        }
        var DataRouterHook$1 = /* @__PURE__ */function (DataRouterHook2) {
          DataRouterHook2["UseBlocker"] = "useBlocker";
          DataRouterHook2["UseRevalidator"] = "useRevalidator";
          DataRouterHook2["UseNavigateStable"] = "useNavigate";
          return DataRouterHook2;
        }(DataRouterHook$1 || {});
        var DataRouterStateHook$1 = /* @__PURE__ */function (DataRouterStateHook2) {
          DataRouterStateHook2["UseBlocker"] = "useBlocker";
          DataRouterStateHook2["UseLoaderData"] = "useLoaderData";
          DataRouterStateHook2["UseActionData"] = "useActionData";
          DataRouterStateHook2["UseRouteError"] = "useRouteError";
          DataRouterStateHook2["UseNavigation"] = "useNavigation";
          DataRouterStateHook2["UseRouteLoaderData"] = "useRouteLoaderData";
          DataRouterStateHook2["UseMatches"] = "useMatches";
          DataRouterStateHook2["UseRevalidator"] = "useRevalidator";
          DataRouterStateHook2["UseNavigateStable"] = "useNavigate";
          DataRouterStateHook2["UseRouteId"] = "useRouteId";
          return DataRouterStateHook2;
        }(DataRouterStateHook$1 || {});
        function useDataRouterContext(hookName) {
          let ctx = reactExports.useContext(DataRouterContext);
          !ctx ? invariant(false) : void 0;
          return ctx;
        }
        function useDataRouterState(hookName) {
          let state = reactExports.useContext(DataRouterStateContext);
          !state ? invariant(false) : void 0;
          return state;
        }
        function useRouteContext(hookName) {
          let route = reactExports.useContext(RouteContext);
          !route ? invariant(false) : void 0;
          return route;
        }
        function useCurrentRouteId(hookName) {
          let route = useRouteContext();
          let thisRoute = route.matches[route.matches.length - 1];
          !thisRoute.route.id ? invariant(false) : void 0;
          return thisRoute.route.id;
        }
        function useRouteError() {
          var _state$errors;
          let error = reactExports.useContext(RouteErrorContext);
          let state = useDataRouterState(DataRouterStateHook$1.UseRouteError);
          let routeId = useCurrentRouteId(DataRouterStateHook$1.UseRouteError);
          if (error !== void 0) {
            return error;
          }
          return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
        }
        function useNavigateStable() {
          let _useDataRouterContext = useDataRouterContext(DataRouterHook$1.UseNavigateStable),
            router = _useDataRouterContext.router;
          let id = useCurrentRouteId(DataRouterStateHook$1.UseNavigateStable);
          let activeRef = reactExports.useRef(false);
          useIsomorphicLayoutEffect(() => {
            activeRef.current = true;
          });
          let navigate = reactExports.useCallback(function (to, options) {
            if (options === void 0) {
              options = {};
            }
            if (!activeRef.current) return;
            if (typeof to === "number") {
              router.navigate(to);
            } else {
              router.navigate(to, _extends$3({
                fromRouteId: id
              }, options));
            }
          }, [router, id]);
          return navigate;
        }
        function Navigate(_ref4) {
          let to = _ref4.to,
            replace2 = _ref4.replace,
            state = _ref4.state,
            relative = _ref4.relative;
          !useInRouterContext() ? invariant(false) : void 0;
          let _reactExports$useCont10 = reactExports.useContext(NavigationContext),
            future = _reactExports$useCont10.future,
            isStatic = _reactExports$useCont10.static;
          let _reactExports$useCont11 = reactExports.useContext(RouteContext),
            matches = _reactExports$useCont11.matches;
          let _useLocation3 = useLocation(),
            locationPathname = _useLocation3.pathname;
          let navigate = useNavigate();
          let path = resolveTo(to, getResolveToMatches(matches, future.v7_relativeSplatPath), locationPathname, relative === "path");
          let jsonPath = JSON.stringify(path);
          reactExports.useEffect(() => navigate(JSON.parse(jsonPath), {
            replace: replace2,
            state,
            relative
          }), [navigate, jsonPath, relative, replace2, state]);
          return null;
        }
        function Route(_props) {
          invariant(false);
        }
        function Router(_ref5) {
          let _ref5$basename = _ref5.basename,
            basenameProp = _ref5$basename === void 0 ? "/" : _ref5$basename,
            _ref5$children = _ref5.children,
            children = _ref5$children === void 0 ? null : _ref5$children,
            locationProp = _ref5.location,
            _ref5$navigationType = _ref5.navigationType,
            navigationType = _ref5$navigationType === void 0 ? Action.Pop : _ref5$navigationType,
            navigator = _ref5.navigator,
            _ref5$static = _ref5.static,
            staticProp = _ref5$static === void 0 ? false : _ref5$static,
            future = _ref5.future;
          !!useInRouterContext() ? invariant(false) : void 0;
          let basename = basenameProp.replace(/^\/*/, "/");
          let navigationContext = reactExports.useMemo(() => ({
            basename,
            navigator,
            static: staticProp,
            future: _extends$3({
              v7_relativeSplatPath: false
            }, future)
          }), [basename, future, navigator, staticProp]);
          if (typeof locationProp === "string") {
            locationProp = parsePath(locationProp);
          }
          let _locationProp = locationProp,
            _locationProp$pathnam = _locationProp.pathname,
            pathname = _locationProp$pathnam === void 0 ? "/" : _locationProp$pathnam,
            _locationProp$search = _locationProp.search,
            search = _locationProp$search === void 0 ? "" : _locationProp$search,
            _locationProp$hash = _locationProp.hash,
            hash = _locationProp$hash === void 0 ? "" : _locationProp$hash,
            _locationProp$state = _locationProp.state,
            state = _locationProp$state === void 0 ? null : _locationProp$state,
            _locationProp$key = _locationProp.key,
            key = _locationProp$key === void 0 ? "default" : _locationProp$key;
          let locationContext = reactExports.useMemo(() => {
            let trailingPathname = stripBasename(pathname, basename);
            if (trailingPathname == null) {
              return null;
            }
            return {
              location: {
                pathname: trailingPathname,
                search,
                hash,
                state,
                key
              },
              navigationType
            };
          }, [basename, pathname, search, hash, state, key, navigationType]);
          if (locationContext == null) {
            return null;
          }
          return /* @__PURE__ */reactExports.createElement(NavigationContext.Provider, {
            value: navigationContext
          }, /* @__PURE__ */reactExports.createElement(LocationContext.Provider, {
            children,
            value: locationContext
          }));
        }
        function Routes(_ref6) {
          let children = _ref6.children,
            location = _ref6.location;
          return useRoutes(createRoutesFromChildren(children), location);
        }
        new Promise(() => {});
        function createRoutesFromChildren(children, parentPath) {
          if (parentPath === void 0) {
            parentPath = [];
          }
          let routes = [];
          reactExports.Children.forEach(children, (element, index) => {
            if (! /* @__PURE__ */reactExports.isValidElement(element)) {
              return;
            }
            let treePath = [...parentPath, index];
            if (element.type === reactExports.Fragment) {
              routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
              return;
            }
            !(element.type === Route) ? invariant(false) : void 0;
            !(!element.props.index || !element.props.children) ? invariant(false) : void 0;
            let route = {
              id: element.props.id || treePath.join("-"),
              caseSensitive: element.props.caseSensitive,
              element: element.props.element,
              Component: element.props.Component,
              index: element.props.index,
              path: element.props.path,
              loader: element.props.loader,
              action: element.props.action,
              errorElement: element.props.errorElement,
              ErrorBoundary: element.props.ErrorBoundary,
              hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
              shouldRevalidate: element.props.shouldRevalidate,
              handle: element.props.handle,
              lazy: element.props.lazy
            };
            if (element.props.children) {
              route.children = createRoutesFromChildren(element.props.children, treePath);
            }
            routes.push(route);
          });
          return routes;
        }

        /**
         * React Router DOM v6.27.0
         *
         * Copyright (c) Remix Software Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE.md file in the root directory of this source tree.
         *
         * @license MIT
         */
        function _extends$2() {
          _extends$2 = Object.assign ? Object.assign.bind() : function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
          return _extends$2.apply(this, arguments);
        }
        function _objectWithoutPropertiesLoose(source, excluded) {
          if (source == null) return {};
          var target = {};
          var sourceKeys = Object.keys(source);
          var key, i;
          for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
          }
          return target;
        }
        function isModifiedEvent(event) {
          return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
        }
        function shouldProcessLinkClick(event, target) {
          return event.button === 0 && (
          // Ignore everything but left clicks
          !target || target === "_self") &&
          // Let browser handle "target=_blank" etc.
          !isModifiedEvent(event);
        }
        function createSearchParams(init) {
          if (init === void 0) {
            init = "";
          }
          return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key) => {
            let value = init[key];
            return memo.concat(Array.isArray(value) ? value.map(v => [key, v]) : [[key, value]]);
          }, []));
        }
        function getSearchParamsForLocation(locationSearch, defaultSearchParams) {
          let searchParams = createSearchParams(locationSearch);
          if (defaultSearchParams) {
            defaultSearchParams.forEach((_, key) => {
              if (!searchParams.has(key)) {
                defaultSearchParams.getAll(key).forEach(value => {
                  searchParams.append(key, value);
                });
              }
            });
          }
          return searchParams;
        }
        const _excluded$8 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"];
        const REACT_ROUTER_VERSION = "6";
        try {
          window.__reactRouterVersion = REACT_ROUTER_VERSION;
        } catch (e) {}
        const START_TRANSITION = "startTransition";
        const startTransitionImpl = React$1[START_TRANSITION];
        function BrowserRouter(_ref4) {
          let basename = _ref4.basename,
            children = _ref4.children,
            future = _ref4.future,
            window2 = _ref4.window;
          let historyRef = reactExports.useRef();
          if (historyRef.current == null) {
            historyRef.current = createBrowserHistory({
              window: window2,
              v5Compat: true
            });
          }
          let history = historyRef.current;
          let _reactExports$useStat = reactExports.useState({
              action: history.action,
              location: history.location
            }),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            state = _reactExports$useStat2[0],
            setStateImpl = _reactExports$useStat2[1];
          let _ref9 = future || {},
            v7_startTransition = _ref9.v7_startTransition;
          let setState = reactExports.useCallback(newState => {
            v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
          }, [setStateImpl, v7_startTransition]);
          reactExports.useLayoutEffect(() => history.listen(setState), [history, setState]);
          return /* @__PURE__ */reactExports.createElement(Router, {
            basename,
            children,
            location: state.location,
            navigationType: state.action,
            navigator: history,
            future
          });
        }
        const isBrowser$1 = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
        const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
        const Link = exports("L", /* @__PURE__ */reactExports.forwardRef(function LinkWithRef(_ref7, ref) {
          let onClick = _ref7.onClick,
            relative = _ref7.relative,
            reloadDocument = _ref7.reloadDocument,
            replace2 = _ref7.replace,
            state = _ref7.state,
            target = _ref7.target,
            to = _ref7.to,
            preventScrollReset = _ref7.preventScrollReset,
            viewTransition = _ref7.viewTransition,
            rest = _objectWithoutPropertiesLoose(_ref7, _excluded$8);
          let _reactExports$useCont12 = reactExports.useContext(NavigationContext),
            basename = _reactExports$useCont12.basename;
          let absoluteHref;
          let isExternal = false;
          if (typeof to === "string" && ABSOLUTE_URL_REGEX.test(to)) {
            absoluteHref = to;
            if (isBrowser$1) {
              try {
                let currentUrl = new URL(window.location.href);
                let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
                let path = stripBasename(targetUrl.pathname, basename);
                if (targetUrl.origin === currentUrl.origin && path != null) {
                  to = path + targetUrl.search + targetUrl.hash;
                } else {
                  isExternal = true;
                }
              } catch (e) {}
            }
          }
          let href = useHref(to, {
            relative
          });
          let internalOnClick = useLinkClickHandler(to, {
            replace: replace2,
            state,
            target,
            preventScrollReset,
            relative,
            viewTransition
          });
          function handleClick(event) {
            if (onClick) onClick(event);
            if (!event.defaultPrevented) {
              internalOnClick(event);
            }
          }
          return (
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            /* @__PURE__ */
            reactExports.createElement("a", _extends$2({}, rest, {
              href: absoluteHref || href,
              onClick: isExternal || reloadDocument ? onClick : handleClick,
              ref,
              target
            }))
          );
        }));
        var DataRouterHook;
        (function (DataRouterHook2) {
          DataRouterHook2["UseScrollRestoration"] = "useScrollRestoration";
          DataRouterHook2["UseSubmit"] = "useSubmit";
          DataRouterHook2["UseSubmitFetcher"] = "useSubmitFetcher";
          DataRouterHook2["UseFetcher"] = "useFetcher";
          DataRouterHook2["useViewTransitionState"] = "useViewTransitionState";
        })(DataRouterHook || (DataRouterHook = {}));
        var DataRouterStateHook;
        (function (DataRouterStateHook2) {
          DataRouterStateHook2["UseFetcher"] = "useFetcher";
          DataRouterStateHook2["UseFetchers"] = "useFetchers";
          DataRouterStateHook2["UseScrollRestoration"] = "useScrollRestoration";
        })(DataRouterStateHook || (DataRouterStateHook = {}));
        function useLinkClickHandler(to, _temp) {
          let _ref10 = _temp === void 0 ? {} : _temp,
            target = _ref10.target,
            replaceProp = _ref10.replace,
            state = _ref10.state,
            preventScrollReset = _ref10.preventScrollReset,
            relative = _ref10.relative,
            viewTransition = _ref10.viewTransition;
          let navigate = useNavigate();
          let location = useLocation();
          let path = useResolvedPath(to, {
            relative
          });
          return reactExports.useCallback(event => {
            if (shouldProcessLinkClick(event, target)) {
              event.preventDefault();
              let replace2 = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
              navigate(to, {
                replace: replace2,
                state,
                preventScrollReset,
                relative,
                viewTransition
              });
            }
          }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative, viewTransition]);
        }
        function useSearchParams(defaultInit) {
          let defaultSearchParamsRef = reactExports.useRef(createSearchParams(defaultInit));
          let hasSetSearchParamsRef = reactExports.useRef(false);
          let location = useLocation();
          let searchParams = reactExports.useMemo(() =>
          // Only merge in the defaults if we haven't yet called setSearchParams.
          // Once we call that we want those to take precedence, otherwise you can't
          // remove a param with setSearchParams({}) if it has an initial value
          getSearchParamsForLocation(location.search, hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current), [location.search]);
          let navigate = useNavigate();
          let setSearchParams = reactExports.useCallback((nextInit, navigateOptions) => {
            const newSearchParams = createSearchParams(typeof nextInit === "function" ? nextInit(searchParams) : nextInit);
            hasSetSearchParamsRef.current = true;
            navigate("?" + newSearchParams, navigateOptions);
          }, [navigate, searchParams]);
          return [searchParams, setSearchParams];
        }
        Boolean(window.location.hostname === "localhost" ||
        // [::1] is the IPv6 localhost address.
        window.location.hostname === "[::1]" ||
        // 127.0.0.0/8 are considered localhost for IPv4.
        window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
        function unregister() {
          if ("serviceWorker" in navigator) {
            navigator.serviceWorker.ready.then(registration => {
              registration.unregister();
            }).catch(error => {
              console.error(error.message);
            });
          }
        }
        const components$2 = "Komponenten";
        const design$2 = "Design";
        const settings$2 = "Einstellungen";
        const responses$5 = "Antworten";
        const preview$5 = "Vorschau";
        const launch$5 = "Start";
        const add_column$2 = "Spalte hinzufügen";
        const add_new_random_rule$2 = "Neue Zufallsregel hinzufügen";
        const add_option$2 = "Option hinzufügen";
        const add_other$2 = "\"Andere\" hinzufügen";
        const add_priority_rule$2 = "Prioritätsregel hinzufügen";
        const add_random_rule$2 = "Zufallsregel hinzufügen";
        const add_row$2 = "Zeile hinzufügen";
        const all_in_one$2 = "Alles in einem";
        const allow_incomplete$2 = "Unvollständig/Fortsetzen zulassen";
        const allow_jump$2 = "Jump/Show Survey Index zulassen";
        const allow_previous$2 = "Zurück zulassen";
        const are_you_sure$2 = "Bist du sicher?";
        const delete_question$2 = "Sind Sie sicher, dass Sie diese Frage löschen wollen?";
        const as_is$2 = "Wie es ist";
        const audio_only$2 = "Nur Audio";
        const background_color$2 = "Hintergrundfarbe";
        const back_to_design$2 = "Zurück zum Design";
        const cancel$5 = "stornieren";
        const confirm$2 = "Bestätigen Sie";
        const choose_image$2 = "Bild auswählen";
        const columns$2 = "Spalten";
        const columns_number$2 = "Spaltennummer";
        const columns_order$2 = "Reihenfolge der Spalten";
        const columns_priority$2 = "Spaltenpriorität";
        const component_barcode_title$2 = "Barcode Scanner";
        const component_date_time_title$2 = "Datum und Uhrzeit";
        const component_date_title$2 = "Datum";
        const component_email_title$2 = "E-Mail";
        const component_end_title$2 = "Ende Seite";
        const component_file_upload_title$2 = "Datei-Upload";
        const component_group_title$2 = "Seite";
        const component_icon_mcq_title$2 = "Mehrere Symbolauswahl";
        const component_icon_scq_title$2 = "Einzelne Symbolauswahl";
        const component_image_display_title$2 = "Bildanzeige";
        const component_image_mcq_title$2 = "Mehrere Bildauswahl";
        const component_image_ranking_title$2 = "Bildranking";
        const component_image_scq_title$2 = "Einzelbildauswahl";
        const component_mcq_title$2 = "Mehrfachauswahl";
        const component_nps_title$2 = "NPS";
        const component_number_title$2 = "Nummer";
        const component_paragraph_title$2 = "Langer Text";
        const component_photo_capture_title$2 = "Foto aufnehmen";
        const component_ranking_title$2 = "Ranking";
        const component_scq_array_title$2 = "Einzelauswahl-Array";
        const component_scq_icon_array_title$2 = "Single-Choice-Symbol-Array";
        const component_scq_title$2 = "Einzelauswahl";
        const component_signature_title$2 = "Signatur";
        const component_text_display_title$2 = "Textanzeige";
        const component_text_title$2 = "Kurztext";
        const component_time_title$2 = "Zeit";
        const component_video_capture_title$2 = "Video aufnehmen";
        const component_video_display_title$2 = "Videoanzeige";
        const component_welcome_title$2 = "Willkommens-Seite";
        const condition_to_hide$2 = "Zu verbergende Bedingung";
        const condition_to_show$2 = "Zu zeigende Bedingung";
        const content_editor_placeholder_description$2 = "Beschreibung";
        const content_editor_placeholder_option$2 = "Option";
        const content_editor_placeholder_title$2 = "Titel";
        const custom_error$2 = "Benutzerdefinierter Fehler";
        const custom_random$2 = "Benutzerdefiniert";
        const date_format$2 = "Datumsformat";
        const image_width$2 = "Bildbreite";
        const decimal_separator$2 = "Dezimaltrennzeichen";
        const unspecified$2 = "nicht spezifiziert";
        const no_decimals_allowed$2 = "Keine Dezimalstellen erlaubt";
        const display$1 = "Anzeigen";
        const edit_priority_rule$2 = "Prioritätsregel bearbeiten";
        const edit_random_rule$2 = "Zufallsregel bearbeiten";
        const empty_group_hint$2 = "Hier fallen lassen";
        const empty_survey_hint$2 = "Hier fallen lassen";
        const err_duplicate_code$2 = "Diese {{component_name}} hat einen doppelten Code";
        const err_duplicate_priority_group_items$2 = "Diese Elemente sind in mehr als einer Prioritätsgruppe vorhanden: <strong>{{iterms}}</strong>";
        const err_duplicate_random_group_items$2 = "Diese Artikel sind in mehr als einer Zufallsgruppe vorhanden: <strong>{{items}}</strong>";
        const err_empty_parent$2 = "Dieses {{component_name}} darf nicht leer sein, bitte fügen Sie mindestens ein {{child_name}} hinzu";
        const err_misplaced_end_group$2 = "Die Endseite muss immer die letzte Seite sein";
        const err_misplaced_welcome_group$2 = "Willkommensseite muss immer die erste Seite sein";
        const err_no_end_group$2 = "Es muss eine gültige Endseite vorhanden sein";
        const err_priority$2 = "Prioritätsgruppenbefehlsfehler";
        const err_priority_group_item_not_child$2 = "Diese Elemente sind entweder gelöscht oder haben Fehler und können daher nicht in der Prioritätsgruppe sein: <strong>{{items}}</strong>";
        const err_priority_limit_mismatch$2 = "In einer der Prioritätsgruppen ist das Limit größer oder gleich der Anzahl der Artikel";
        const err_random$2 = "Zufälliger Gruppenbefehlsfehler";
        const err_random_group_item_not_child$2 = "Diese Elemente wurden entweder gelöscht oder sind fehlerhaft und können daher nicht in der Zufallsgruppe enthalten sein: <strong>{{items}}</strong>";
        const err_reference$2 = "Fehler: Weiterleitung eines fehlenden Werts oder einer nachgestellten Frage: <strong>{{codes}}</strong>, in Sprache: <strong>{{lang}}</strong>";
        const err_relevance$2 = "Problem mit Logik zum Ein-/Ausblenden";
        const err_skip$2 = "Problem mit einer der Skip-Anweisungen";
        const err_value_in_end_group$2 = "Kann keine Fragen haben, die Benutzereingaben in der Endgruppe erfassen";
        const file_type$2 = "Dateityp";
        const file_types$2 = {
          audio: "Audio",
          document: "Dokument",
          image: "Bild",
          pdf: "PDF",
          presentation: "Präsentation",
          spreadsheet: "Spreadsheet",
          video: "Video"
        };
        const flip_order$2 = "Flip-Order";
        const foreground_color$2 = "Vordergrundfarbe";
        const text_color$2 = "Textfarbe";
        const fullday_format$2 = "Ganztägiges Format";
        const group$2 = "Seite";
        const group_by_group$2 = "Seite für Seite";
        const group_title$2 = "Titel der Seite";
        const font$2 = "Schriftart";
        const groups_order$2 = "Gruppenreihenfolge";
        const value_beyond_bounds$2 = "Ungültiger Wert für {{label}}, muss zwischen {{lower_bound}} und {{upper_bound}} liegen, aktueller Wert ist: {{setup_value}}";
        const value_beyond_bounds_no_label$2 = "Ungültiger Wert! aktueller Wert ist: {{setup_value}}";
        const groups_priority$2 = "Gruppenpriorität";
        const hide_always$2 = "Immer ausblenden";
        const hide_if$2 = "Ausblenden, wenn";
        const hide_text$2 = "Text verbergen";
        const highlight_color$2 = "Farbe hervorheben";
        const if_answer_is$2 = "Wenn die Antwort <strong>{{code}}</strong> ist";
        const image_aspect_ratio$2 = "Bildseitenverhältnis";
        const image_icon_size$2 = "Symbolgröße in px";
        const image_height$2 = "Bildhöhe";
        const invalid_skip_destination_err$2 = "<strong>{{code}}</strong> ist kein gültiges Skip-Ziel...";
        const loop_video$2 = "Videoschleife";
        const lower_bound_hint$2 = "Hinweis zur Untergrenze";
        const max_date$2 = "Maximaldatum";
        const min_date$2 = "Min. Datum";
        const navigation_mode$2 = "Navigationsmodus";
        const navigation_options$2 = "Navigation Options";
        const no_condition$2 = "KEINE BEDINGUNG";
        const no_logic_err$2 = "❌ Ohne Logik wird dies auf <strong>Immer anzeigen</strong> zurückgesetzt";
        const no_priority$2 = "Keine";
        const offline_only$2 = "Offline";
        const ok$2 = "OK";
        const option$1 = "Option";
        const options_order$2 = "Optionsreihenfolge";
        const options_priority$2 = "Priorität der Optionen";
        const or$2 = "oder";
        const reorder$2 = "Ordnen";
        const reorder_setup$2 = "Seiten und Fragen neu ordnen";
        const Auftragsmodus = "Bestellmodus";
        const collapse_none$2 = "Keine";
        const collapse_groups$2 = "Seiten neu ordnen";
        const collapse_questions$2 = "Frage neu ordnen";
        const order_priority$2 = "Reihenfolge und Priorität";
        const prioritise$1 = "Priorisieren";
        const prioritise_columns$2 = "Spalten priorisieren";
        const prioritise_groups$2 = "Gruppen priorisieren";
        const prioritise_options$2 = "Optionen priorisieren";
        const prioritise_questions$2 = "Fragen priorisieren";
        const prioritise_rows$2 = "Zeilen priorisieren";
        const priority_show$2 = "Anzeigen";
        const priority_show_limit_from_count$2 = "Zeige {{limit}} von {{count}}";
        const proceed_as_usual$2 = "Wie gewohnt fortfahren";
        const question$1 = "Frage";
        const question_by_question$2 = "Frage für Frage";
        const question_title$2 = "Titel der Frage";
        const questions_order$2 = "Reihenfolge der Fragen";
        const questions_priority$2 = "Priorität der Fragen";
        const random_order$2 = "Zufällige Reihenfolge";
        const replace_image$2 = "Bild ersetzen";
        const replace_video$2 = "Video ersetzen";
        const rows$1 = "Zeilen";
        const rows_order$2 = "Reihenfolge";
        const rows_priority$2 = "Zeilenpriorität";
        const section_choice_based$2 = "Auswahl basiert";
        const section_date_time$2 = "Datum / Uhrzeit";
        const section_file_based$2 = "Dateibasiert";
        const section_info$2 = "Info";
        const section_other$2 = "Andere";
        const section_sections$2 = "Abschnitte";
        const section_text_based$2 = "Textbasiert";
        const setup$2 = "Setup";
        const show_always$2 = "Immer anzeigen";
        const show_description$2 = "Beschreibung anzeigen";
        const show_hide$2 = "Anzeigen/Ausblenden";
        const show_if$2 = "Zeige wenn";
        const show_question_hint$2 = "Fragehinweis anzeigen";
        const show_word_count$2 = "Wortanzahl anzeigen";
        const skip_invalid$2 = "Validierung nur beim Absenden erzwingen";
        const skip_logic$2 = "Überspringen Logik";
        const skip_to$2 = "Überspringen zu";
        const sort_by_label$2 = "Nach Etikett sortieren";
        const spacing$1 = "Abstand";
        const standard_error$2 = "Standardfehler";
        const submit$2 = "Absenden";
        const survey$1 = "Umfrage";
        const text_field_size$2 = "Textfeldgröße";
        const text_style$2 = "Textstil";
        const textarea_lines$2 = "TextArea-Zeilen";
        const theme$2 = "Thema";
        const translation$2 = "Übersetzung";
        const upload_background$2 = "Hintergrund hochladen";
        const theme_text$2 = "Text";
        const to_group_end$2 = "Zum Seitenende";
        const upload_image$2 = "Bild hochladen";
        const upload_video$2 = "Video hochladen";
        const uploading_image$2 = "Bild wird hochgeladen";
        const uploading_video$2 = "Video hochladen";
        const upper_bound_hint$2 = "Hinweis zur oberen Grenze";
        const validation$2 = "Validierung";
        const validation_between_subtitle$2 = "Zwischen:";
        const validation_between_title$2 = "Wert zwischen";
        const validation_contains_subtitle$2 = "Enthält:";
        const validation_contains_title$2 = "Enthält";
        const validation_equals_subtitle$2 = "Gleich:";
        const validation_equals_title$2 = "Wert gleich";
        const validation_file_types_title$2 = "Dateitypen";
        const validation_gt_subtitle$2 = "Größer als:";
        const validation_gt_title$2 = "Wert größer als";
        const validation_gte_subtitle$2 = "Größer als oder gleich:";
        const validation_gte_title$2 = "Wert größer oder gleich";
        const validation_lt_subtitle$2 = "Kleiner als:";
        const validation_lt_title$2 = "Wert kleiner als";
        const validation_lte_subtitle$2 = "Kleiner als oder gleich:";
        const validation_lte_title$2 = "Wert kleiner oder gleich";
        const validation_max_char_length_subtitle$2 = "Maximale Länge:";
        const validation_max_char_length_title$2 = "Maximale Zeichenlänge";
        const validation_max_file_size_subtitle$2 = "Maximale Dateigröße (KB)";
        const validation_max_file_size_title$2 = "Maximale Dateigröße";
        const validation_max_option_count_subtitle$2 = "Maximale Anzahl:";
        const validation_max_option_count_title$2 = "Maximale Optionsanzahl";
        const validation_max_ranking_count_subtitle$2 = "Maximale Anzahl";
        const validation_max_ranking_count_title$2 = "Maximale Anzahl in der Rangliste";
        const validation_max_word_count_subtitle$2 = "Maximale Anzahl:";
        const validation_max_word_count_title$2 = "Maximale Wortzahl";
        const validation_min_char_length_subtitle$2 = "Mindestlänge:";
        const validation_min_char_length_title$2 = "Mindestzeichenlänge";
        const validation_min_option_count_subtitle$2 = "Mindestanzahl:";
        const validation_min_option_count_title$2 = "Mindestzahl der Optionen";
        const validation_min_ranking_count_subtitle$2 = "Mindestanzahl";
        const validation_min_ranking_count_title$2 = "Mindestplatzierte Anzahl";
        const validation_min_word_count_subtitle$2 = "Mindestanzahl:";
        const validation_min_word_count_title$2 = "Mindestwortzahl";
        const validation_not_between_subtitle$2 = "Nicht zwischen:";
        const validation_not_between_title$2 = "Wert nicht zwischen";
        const validation_not_contains_subtitle$2 = "Enthält nicht:";
        const validation_not_contains_title$2 = "Enthält nicht";
        const validation_not_equal_subtitle$2 = "Ungleich:";
        const validation_not_equal_title$2 = "Wert ungleich";
        const validation_one_response_per_col_title$2 = "Eine Antwort pro Spalte";
        const validation_option_count_subtitle$2 = "Anzahl:";
        const validation_option_count_title$2 = "Genaue Optionsanzahl";
        const validation_pattern_email_title$2 = "Muster-E-Mail";
        const validation_pattern_subtitle$2 = "Muster:";
        const validation_pattern_title$2 = "Entspricht Regex-Muster";
        const validation_ranking_count_subtitle$2 = "Anzahl:";
        const validation_ranking_count_title$2 = "Genaue Rangliste";
        const validation_required_title$2 = "Erforderlich";
        const video_options$2 = "Videooptionen";
        const wrong_logic_err$2 = "❌ Es gab einen Fehler in Logic, daher wurde dies auf <strong>Immer anzeigen</strong> zurückgesetzt";
        const design_de = {
          components: components$2,
          design: design$2,
          settings: settings$2,
          responses: responses$5,
          preview: preview$5,
          launch: launch$5,
          add_column: add_column$2,
          add_new_random_rule: add_new_random_rule$2,
          add_option: add_option$2,
          add_other: add_other$2,
          add_priority_rule: add_priority_rule$2,
          add_random_rule: add_random_rule$2,
          add_row: add_row$2,
          all_in_one: all_in_one$2,
          allow_incomplete: allow_incomplete$2,
          allow_jump: allow_jump$2,
          allow_previous: allow_previous$2,
          are_you_sure: are_you_sure$2,
          delete_question: delete_question$2,
          as_is: as_is$2,
          audio_only: audio_only$2,
          background_color: background_color$2,
          back_to_design: back_to_design$2,
          cancel: cancel$5,
          confirm: confirm$2,
          choose_image: choose_image$2,
          columns: columns$2,
          columns_number: columns_number$2,
          columns_order: columns_order$2,
          columns_priority: columns_priority$2,
          component_barcode_title: component_barcode_title$2,
          component_date_time_title: component_date_time_title$2,
          component_date_title: component_date_title$2,
          component_email_title: component_email_title$2,
          component_end_title: component_end_title$2,
          component_file_upload_title: component_file_upload_title$2,
          component_group_title: component_group_title$2,
          component_icon_mcq_title: component_icon_mcq_title$2,
          component_icon_scq_title: component_icon_scq_title$2,
          component_image_display_title: component_image_display_title$2,
          component_image_mcq_title: component_image_mcq_title$2,
          component_image_ranking_title: component_image_ranking_title$2,
          component_image_scq_title: component_image_scq_title$2,
          component_mcq_title: component_mcq_title$2,
          component_nps_title: component_nps_title$2,
          component_number_title: component_number_title$2,
          component_paragraph_title: component_paragraph_title$2,
          component_photo_capture_title: component_photo_capture_title$2,
          component_ranking_title: component_ranking_title$2,
          component_scq_array_title: component_scq_array_title$2,
          component_scq_icon_array_title: component_scq_icon_array_title$2,
          component_scq_title: component_scq_title$2,
          component_signature_title: component_signature_title$2,
          component_text_display_title: component_text_display_title$2,
          component_text_title: component_text_title$2,
          component_time_title: component_time_title$2,
          component_video_capture_title: component_video_capture_title$2,
          component_video_display_title: component_video_display_title$2,
          component_welcome_title: component_welcome_title$2,
          condition_to_hide: condition_to_hide$2,
          condition_to_show: condition_to_show$2,
          content_editor_placeholder_description: content_editor_placeholder_description$2,
          content_editor_placeholder_option: content_editor_placeholder_option$2,
          content_editor_placeholder_title: content_editor_placeholder_title$2,
          custom_error: custom_error$2,
          custom_random: custom_random$2,
          date_format: date_format$2,
          image_width: image_width$2,
          decimal_separator: decimal_separator$2,
          unspecified: unspecified$2,
          no_decimals_allowed: no_decimals_allowed$2,
          display: display$1,
          edit_priority_rule: edit_priority_rule$2,
          edit_random_rule: edit_random_rule$2,
          empty_group_hint: empty_group_hint$2,
          empty_survey_hint: empty_survey_hint$2,
          err_duplicate_code: err_duplicate_code$2,
          err_duplicate_priority_group_items: err_duplicate_priority_group_items$2,
          err_duplicate_random_group_items: err_duplicate_random_group_items$2,
          err_empty_parent: err_empty_parent$2,
          err_misplaced_end_group: err_misplaced_end_group$2,
          err_misplaced_welcome_group: err_misplaced_welcome_group$2,
          err_no_end_group: err_no_end_group$2,
          err_priority: err_priority$2,
          err_priority_group_item_not_child: err_priority_group_item_not_child$2,
          err_priority_limit_mismatch: err_priority_limit_mismatch$2,
          err_random: err_random$2,
          err_random_group_item_not_child: err_random_group_item_not_child$2,
          err_reference: err_reference$2,
          err_relevance: err_relevance$2,
          err_skip: err_skip$2,
          err_value_in_end_group: err_value_in_end_group$2,
          file_type: file_type$2,
          file_types: file_types$2,
          flip_order: flip_order$2,
          foreground_color: foreground_color$2,
          text_color: text_color$2,
          fullday_format: fullday_format$2,
          group: group$2,
          group_by_group: group_by_group$2,
          group_title: group_title$2,
          font: font$2,
          groups_order: groups_order$2,
          value_beyond_bounds: value_beyond_bounds$2,
          value_beyond_bounds_no_label: value_beyond_bounds_no_label$2,
          groups_priority: groups_priority$2,
          hide_always: hide_always$2,
          hide_if: hide_if$2,
          hide_text: hide_text$2,
          highlight_color: highlight_color$2,
          if_answer_is: if_answer_is$2,
          image_aspect_ratio: image_aspect_ratio$2,
          image_icon_size: image_icon_size$2,
          image_height: image_height$2,
          invalid_skip_destination_err: invalid_skip_destination_err$2,
          loop_video: loop_video$2,
          lower_bound_hint: lower_bound_hint$2,
          max_date: max_date$2,
          min_date: min_date$2,
          navigation_mode: navigation_mode$2,
          navigation_options: navigation_options$2,
          no_condition: no_condition$2,
          no_logic_err: no_logic_err$2,
          no_priority: no_priority$2,
          offline_only: offline_only$2,
          ok: ok$2,
          option: option$1,
          options_order: options_order$2,
          options_priority: options_priority$2,
          or: or$2,
          reorder: reorder$2,
          reorder_setup: reorder_setup$2,
          Auftragsmodus: Auftragsmodus,
          collapse_none: collapse_none$2,
          collapse_groups: collapse_groups$2,
          collapse_questions: collapse_questions$2,
          order_priority: order_priority$2,
          prioritise: prioritise$1,
          prioritise_columns: prioritise_columns$2,
          prioritise_groups: prioritise_groups$2,
          prioritise_options: prioritise_options$2,
          prioritise_questions: prioritise_questions$2,
          prioritise_rows: prioritise_rows$2,
          priority_show: priority_show$2,
          priority_show_limit_from_count: priority_show_limit_from_count$2,
          proceed_as_usual: proceed_as_usual$2,
          question: question$1,
          question_by_question: question_by_question$2,
          question_title: question_title$2,
          questions_order: questions_order$2,
          questions_priority: questions_priority$2,
          random_order: random_order$2,
          replace_image: replace_image$2,
          replace_video: replace_video$2,
          rows: rows$1,
          rows_order: rows_order$2,
          rows_priority: rows_priority$2,
          section_choice_based: section_choice_based$2,
          section_date_time: section_date_time$2,
          section_file_based: section_file_based$2,
          section_info: section_info$2,
          section_other: section_other$2,
          section_sections: section_sections$2,
          section_text_based: section_text_based$2,
          setup: setup$2,
          show_always: show_always$2,
          show_description: show_description$2,
          show_hide: show_hide$2,
          show_if: show_if$2,
          show_question_hint: show_question_hint$2,
          show_word_count: show_word_count$2,
          skip_invalid: skip_invalid$2,
          skip_logic: skip_logic$2,
          skip_to: skip_to$2,
          sort_by_label: sort_by_label$2,
          spacing: spacing$1,
          standard_error: standard_error$2,
          submit: submit$2,
          survey: survey$1,
          text_field_size: text_field_size$2,
          text_style: text_style$2,
          textarea_lines: textarea_lines$2,
          theme: theme$2,
          translation: translation$2,
          upload_background: upload_background$2,
          theme_text: theme_text$2,
          to_group_end: to_group_end$2,
          upload_image: upload_image$2,
          upload_video: upload_video$2,
          uploading_image: uploading_image$2,
          uploading_video: uploading_video$2,
          upper_bound_hint: upper_bound_hint$2,
          validation: validation$2,
          validation_between_subtitle: validation_between_subtitle$2,
          validation_between_title: validation_between_title$2,
          validation_contains_subtitle: validation_contains_subtitle$2,
          validation_contains_title: validation_contains_title$2,
          validation_equals_subtitle: validation_equals_subtitle$2,
          validation_equals_title: validation_equals_title$2,
          validation_file_types_title: validation_file_types_title$2,
          validation_gt_subtitle: validation_gt_subtitle$2,
          validation_gt_title: validation_gt_title$2,
          validation_gte_subtitle: validation_gte_subtitle$2,
          validation_gte_title: validation_gte_title$2,
          validation_lt_subtitle: validation_lt_subtitle$2,
          validation_lt_title: validation_lt_title$2,
          validation_lte_subtitle: validation_lte_subtitle$2,
          validation_lte_title: validation_lte_title$2,
          validation_max_char_length_subtitle: validation_max_char_length_subtitle$2,
          validation_max_char_length_title: validation_max_char_length_title$2,
          validation_max_file_size_subtitle: validation_max_file_size_subtitle$2,
          validation_max_file_size_title: validation_max_file_size_title$2,
          validation_max_option_count_subtitle: validation_max_option_count_subtitle$2,
          validation_max_option_count_title: validation_max_option_count_title$2,
          validation_max_ranking_count_subtitle: validation_max_ranking_count_subtitle$2,
          validation_max_ranking_count_title: validation_max_ranking_count_title$2,
          validation_max_word_count_subtitle: validation_max_word_count_subtitle$2,
          validation_max_word_count_title: validation_max_word_count_title$2,
          validation_min_char_length_subtitle: validation_min_char_length_subtitle$2,
          validation_min_char_length_title: validation_min_char_length_title$2,
          validation_min_option_count_subtitle: validation_min_option_count_subtitle$2,
          validation_min_option_count_title: validation_min_option_count_title$2,
          validation_min_ranking_count_subtitle: validation_min_ranking_count_subtitle$2,
          validation_min_ranking_count_title: validation_min_ranking_count_title$2,
          validation_min_word_count_subtitle: validation_min_word_count_subtitle$2,
          validation_min_word_count_title: validation_min_word_count_title$2,
          validation_not_between_subtitle: validation_not_between_subtitle$2,
          validation_not_between_title: validation_not_between_title$2,
          validation_not_contains_subtitle: validation_not_contains_subtitle$2,
          validation_not_contains_title: validation_not_contains_title$2,
          validation_not_equal_subtitle: validation_not_equal_subtitle$2,
          validation_not_equal_title: validation_not_equal_title$2,
          validation_one_response_per_col_title: validation_one_response_per_col_title$2,
          validation_option_count_subtitle: validation_option_count_subtitle$2,
          validation_option_count_title: validation_option_count_title$2,
          validation_pattern_email_title: validation_pattern_email_title$2,
          validation_pattern_subtitle: validation_pattern_subtitle$2,
          validation_pattern_title: validation_pattern_title$2,
          validation_ranking_count_subtitle: validation_ranking_count_subtitle$2,
          validation_ranking_count_title: validation_ranking_count_title$2,
          validation_required_title: validation_required_title$2,
          video_options: video_options$2,
          wrong_logic_err: wrong_logic_err$2
        };
        const components$1 = "Components";
        const design$1 = "Design";
        const settings$1 = "Settings";
        const responses$4 = "Responses";
        const preview$4 = "Preview";
        const launch$4 = "Launch";
        const add_column$1 = "Add Column";
        const add_new_random_rule$1 = "Add New Random Rule";
        const add_option$1 = "Add Option";
        const add_other$1 = "Add \"Other\"";
        const add_priority_rule$1 = "Add Priority Rule";
        const add_random_rule$1 = "Add Random Rule";
        const add_row$1 = "Add Row";
        const all_in_one$1 = "All In One";
        const allow_incomplete$1 = "Allow Incomplete/Resume";
        const allow_jump$1 = "Allow Jump/Show survey Index";
        const allow_previous$1 = "Allow Previous";
        const are_you_sure$1 = "Are you sure?";
        const delete_question$1 = "Are you sure you want to delete this question?";
        const as_is$1 = "As is";
        const audio_only$1 = "Audio Only";
        const background_color$1 = "Background Color";
        const back_to_design$1 = "Back to design";
        const cancel$4 = "Cancel";
        const confirm$1 = "Confirm";
        const choose_image$1 = "Choose Image";
        const columns$1 = "Columns";
        const columns_number$1 = "Columns Number";
        const columns_order$1 = "Columns Order";
        const columns_priority$1 = "Columns Priority";
        const component_barcode_title$1 = "Barcode Scanner";
        const component_date_time_title$1 = "Date and Time";
        const component_date_title$1 = "Date";
        const component_email_title$1 = "Email";
        const component_end_title$1 = "End Page";
        const component_file_upload_title$1 = "File Upload";
        const component_group_title$1 = "Page";
        const component_icon_mcq_title$1 = "Multiple Icon Choice";
        const component_icon_scq_title$1 = "Single Icon Choice";
        const component_image_display_title$1 = "Image Display";
        const component_image_mcq_title$1 = "Multiple Image Choice";
        const component_image_ranking_title$1 = "Image Ranking";
        const component_image_scq_title$1 = "Single Image Choice";
        const component_mcq_title$1 = "Multiple Choice";
        const component_nps_title$1 = "NPS";
        const component_number_title$1 = "Number";
        const component_paragraph_title$1 = "Long Text";
        const component_photo_capture_title$1 = "Capture Photo";
        const component_ranking_title$1 = "Ranking";
        const component_scq_array_title$1 = "Single Choice Array";
        const component_scq_icon_array_title$1 = "Single Choice Icon Array";
        const component_scq_title$1 = "Single Choice";
        const component_signature_title$1 = "Signature";
        const component_text_display_title$1 = "Text Display";
        const component_text_title$1 = "Short Text";
        const component_time_title$1 = "Time";
        const component_video_capture_title$1 = "Capture Video";
        const component_video_display_title$1 = "Video Display";
        const component_welcome_title$1 = "Welcome Page";
        const condition_to_hide$1 = "Condition to Hide";
        const condition_to_show$1 = "Condition to Show";
        const content_editor_placeholder_description$1 = "Description";
        const content_editor_placeholder_option$1 = "Option";
        const content_editor_placeholder_title$1 = "Title";
        const custom_error$1 = "Custom Error";
        const custom_random$1 = "Custom";
        const date_format$1 = "Date Format";
        const image_width$1 = "Image Width";
        const decimal_separator$1 = "Decimal Separator";
        const unspecified$1 = "Unspecified";
        const no_decimals_allowed$1 = "No Decimals Allowed";
        const display = "Display";
        const edit_priority_rule$1 = "Edit Priority Rule";
        const edit_random_rule$1 = "Edit Random Rule";
        const empty_group_hint$1 = "Drop here";
        const empty_survey_hint$1 = "Drop here";
        const err_duplicate_code$1 = "This {{component_name}} has a duplicate code";
        const err_duplicate_priority_group_items$1 = "Those items are present in more than one priority Group: <strong>{{iterms}}</strong>";
        const err_duplicate_random_group_items$1 = "Those items are present in more than one random group: <strong>{{items}}</strong>";
        const err_empty_parent$1 = "This {{component_name}} cannot be empty, Please add at least one {{child_name}}";
        const err_misplaced_end_group$1 = "End Page must always be the last page";
        const err_misplaced_welcome_group$1 = "Welcome Page must always be the first page";
        const err_no_end_group$1 = "There must be an valid end page";
        const err_priority$1 = "Priority Group instruction Error";
        const err_priority_group_item_not_child$1 = "Those items are either deleted or have errors and therefore cannot be in Priority Group: <strong>{{items}}</strong>";
        const err_priority_limit_mismatch$1 = "In one of the priority groups, the limit is more than or equal to number of items";
        const err_random$1 = "Random Group instruction Error";
        const err_random_group_item_not_child$1 = "Those items are either deleted or have errors and therefore cannot be in Random Group: <strong>{{items}}</strong>";
        const err_reference$1 = "Error: piping a value of missing or a trailing question: <strong>{{codes}}</strong>, in Language: <strong>{{lang}}</strong>";
        const err_relevance$1 = "Problem with Show/Hide Logic";
        const err_skip$1 = "Problem with one of the skip instructions";
        const err_value_in_end_group$1 = "Cannot have questions that capture user input in End Group";
        const file_type$1 = "File Type";
        const file_types$1 = {
          audio: "Audio",
          document: "Document",
          image: "Image",
          pdf: "Pdf",
          presentation: "Presentation",
          spreadsheet: "Spreadsheet",
          video: "Video"
        };
        const flip_order$1 = "Flip Order";
        const foreground_color$1 = "Foreground Color";
        const text_color$1 = "Text Color";
        const fullday_format$1 = "FullDay Format";
        const group$1 = "Page";
        const group_by_group$1 = "Page By Page";
        const group_title$1 = "Page Title";
        const font$1 = "Font";
        const groups_order$1 = "Groups Order";
        const value_beyond_bounds$1 = "invalid value for {{label}}, must be between {{lower_bound}} and {{upper_bound}}, actual value is: {{setup_value}} ";
        const value_beyond_bounds_no_label$1 = "invalid value! actual value is: {{setup_value}} ";
        const groups_priority$1 = "Groups Priority";
        const hide_always$1 = "Hide Always";
        const hide_if$1 = "Hide If";
        const hide_text$1 = "Hide Text";
        const highlight_color$1 = "Highlight Color";
        const if_answer_is$1 = "If answer is <strong>{{code}}</strong>";
        const image_aspect_ratio$1 = "Image Aspect Ratio";
        const image_icon_size$1 = "Icon Size in px";
        const image_height$1 = "Image Height";
        const invalid_skip_destination_err$1 = "<strong>{{code}}</strong> is not a valid Skip Destination...";
        const loop_video$1 = "Loop Video";
        const lower_bound_hint$1 = "Lower Bound hint";
        const max_date$1 = "Max Date";
        const min_date$1 = "Min Date";
        const navigation_mode$1 = "Navigation Mode";
        const navigation_options$1 = "Navigation Options";
        const no_condition$1 = "NO CONDITION";
        const no_logic_err$1 = "❌ Without Logic, this will be reset to <strong>Always Show</strong>";
        const no_priority$1 = "None";
        const offline_only$1 = "Offline";
        const ok$1 = "OK";
        const option = "Option";
        const options_order$1 = "Options Order";
        const options_priority$1 = "Options Priority";
        const or$1 = "Or";
        const reorder$1 = "Reorder";
        const reorder_setup$1 = "Reorder Pages and Questions";
        const order_mode = "Order Mode";
        const collapse_none$1 = "None";
        const collapse_groups$1 = "Reorder Pages";
        const collapse_questions$1 = "Reorder Question";
        const order_priority$1 = "Order and Priority";
        const prioritise = "Prioritise";
        const prioritise_columns$1 = "Prioritise Columns";
        const prioritise_groups$1 = "Prioritise Groups";
        const prioritise_options$1 = "Prioritise Options";
        const prioritise_questions$1 = "Prioritise Questions";
        const prioritise_rows$1 = "Prioritise Rows";
        const priority_show$1 = "Show";
        const priority_show_limit_from_count$1 = "Show {{limit}} from {{count}}";
        const proceed_as_usual$1 = "Proceed as usual";
        const question = "Question";
        const question_by_question$1 = "Question By Question";
        const question_title$1 = "Question Title";
        const questions_order$1 = "Questions Order";
        const questions_priority$1 = "Questions Priority";
        const random_order$1 = "Random Order";
        const replace_image$1 = "Replace Image";
        const replace_video$1 = "Replace Video";
        const rows = "Rows";
        const rows_order$1 = "Rows Order";
        const rows_priority$1 = "Rows Priority";
        const section_choice_based$1 = "Choice based";
        const section_date_time$1 = "Date / Time";
        const section_file_based$1 = "File based";
        const section_info$1 = "Info";
        const section_other$1 = "Other";
        const section_sections$1 = "Sections";
        const section_text_based$1 = "Text based";
        const setup$1 = "Setup";
        const show_always$1 = "Show Always";
        const show_description$1 = "Show Description";
        const show_hide$1 = "Show/Hide";
        const show_if$1 = "Show If";
        const show_question_hint$1 = "Show Question Hint";
        const show_word_count$1 = "Show Word Count";
        const skip_invalid$1 = "Enforce validation only on submit";
        const skip_logic$1 = "Skip Logic";
        const skip_to$1 = "Skip To";
        const sort_by_label$1 = "Sort By Label";
        const spacing = "Spacing";
        const standard_error$1 = "Standard Error";
        const submit$1 = "Submit";
        const survey = "Survey";
        const text_field_size$1 = "Text Field Size";
        const text_style$1 = "Text Style";
        const textarea_lines$1 = "TextArea Lines";
        const theme$1 = "Theme";
        const translation$1 = "Translation";
        const upload_background$1 = "Upload background";
        const theme_text$1 = "Text";
        const to_group_end$1 = "To Page End";
        const upload_image$1 = "Upload Image";
        const upload_video$1 = "Upload Video";
        const uploading_image$1 = "Uploading Image";
        const uploading_video$1 = "Uploading Video";
        const upper_bound_hint$1 = "Upper Bound hint";
        const validation$1 = "Validation";
        const validation_between_subtitle$1 = "Between:";
        const validation_between_title$1 = "Value Between";
        const validation_contains_subtitle$1 = "Contains:";
        const validation_contains_title$1 = "Contains";
        const validation_equals_subtitle$1 = "Equals:";
        const validation_equals_title$1 = "Value equals";
        const validation_file_types_title$1 = "File Types";
        const validation_gt_subtitle$1 = "Greater than:";
        const validation_gt_title$1 = "Value greater than";
        const validation_gte_subtitle$1 = "Greater than or equals:";
        const validation_gte_title$1 = "Value greater than or equals";
        const validation_lt_subtitle$1 = "Less than:";
        const validation_lt_title$1 = "Value less than";
        const validation_lte_subtitle$1 = "Less than or equals:";
        const validation_lte_title$1 = "Value less than or equals";
        const validation_max_char_length_subtitle$1 = "Max Length:";
        const validation_max_char_length_title$1 = "Max Character Length";
        const validation_max_file_size_subtitle$1 = "Max File Size (KB)";
        const validation_max_file_size_title$1 = "Max File Size";
        const validation_max_option_count_subtitle$1 = "Max Count:";
        const validation_max_option_count_title$1 = "Maximum Option Count";
        const validation_max_ranking_count_subtitle$1 = "Max Count";
        const validation_max_ranking_count_title$1 = "Maximum Ranked Count";
        const validation_max_word_count_subtitle$1 = "Max Count:";
        const validation_max_word_count_title$1 = "Max Word Count";
        const validation_min_char_length_subtitle$1 = "Min Length:";
        const validation_min_char_length_title$1 = "Min Character Length";
        const validation_min_option_count_subtitle$1 = "Min Count:";
        const validation_min_option_count_title$1 = "Minimum Option Count";
        const validation_min_ranking_count_subtitle$1 = "Min Count";
        const validation_min_ranking_count_title$1 = "Minimum Ranked Count";
        const validation_min_word_count_subtitle$1 = "Min Count:";
        const validation_min_word_count_title$1 = "Min Word Count";
        const validation_not_between_subtitle$1 = "Not between:";
        const validation_not_between_title$1 = "Value not between";
        const validation_not_contains_subtitle$1 = "Does not contain:";
        const validation_not_contains_title$1 = "Does not contain";
        const validation_not_equal_subtitle$1 = "Not equals:";
        const validation_not_equal_title$1 = "Value not equals";
        const validation_one_response_per_col_title$1 = "One Response Per Column";
        const validation_option_count_subtitle$1 = "Count:";
        const validation_option_count_title$1 = "Exact Option Count";
        const validation_pattern_email_title$1 = "Pattern Email";
        const validation_pattern_subtitle$1 = "Pattern:";
        const validation_pattern_title$1 = "Matches Regex Pattern";
        const validation_ranking_count_subtitle$1 = "Count:";
        const validation_ranking_count_title$1 = "Exact Ranked Count";
        const validation_required_title$1 = "Required";
        const video_options$1 = "Video Options";
        const wrong_logic_err$1 = "❌ There was an error in Logic therefore this was reset to <strong>Always Show</strong>";
        const design_en = {
          components: components$1,
          design: design$1,
          settings: settings$1,
          responses: responses$4,
          preview: preview$4,
          launch: launch$4,
          add_column: add_column$1,
          add_new_random_rule: add_new_random_rule$1,
          add_option: add_option$1,
          add_other: add_other$1,
          add_priority_rule: add_priority_rule$1,
          add_random_rule: add_random_rule$1,
          add_row: add_row$1,
          all_in_one: all_in_one$1,
          allow_incomplete: allow_incomplete$1,
          allow_jump: allow_jump$1,
          allow_previous: allow_previous$1,
          are_you_sure: are_you_sure$1,
          delete_question: delete_question$1,
          as_is: as_is$1,
          audio_only: audio_only$1,
          background_color: background_color$1,
          back_to_design: back_to_design$1,
          cancel: cancel$4,
          confirm: confirm$1,
          choose_image: choose_image$1,
          columns: columns$1,
          columns_number: columns_number$1,
          columns_order: columns_order$1,
          columns_priority: columns_priority$1,
          component_barcode_title: component_barcode_title$1,
          component_date_time_title: component_date_time_title$1,
          component_date_title: component_date_title$1,
          component_email_title: component_email_title$1,
          component_end_title: component_end_title$1,
          component_file_upload_title: component_file_upload_title$1,
          component_group_title: component_group_title$1,
          component_icon_mcq_title: component_icon_mcq_title$1,
          component_icon_scq_title: component_icon_scq_title$1,
          component_image_display_title: component_image_display_title$1,
          component_image_mcq_title: component_image_mcq_title$1,
          component_image_ranking_title: component_image_ranking_title$1,
          component_image_scq_title: component_image_scq_title$1,
          component_mcq_title: component_mcq_title$1,
          component_nps_title: component_nps_title$1,
          component_number_title: component_number_title$1,
          component_paragraph_title: component_paragraph_title$1,
          component_photo_capture_title: component_photo_capture_title$1,
          component_ranking_title: component_ranking_title$1,
          component_scq_array_title: component_scq_array_title$1,
          component_scq_icon_array_title: component_scq_icon_array_title$1,
          component_scq_title: component_scq_title$1,
          component_signature_title: component_signature_title$1,
          component_text_display_title: component_text_display_title$1,
          component_text_title: component_text_title$1,
          component_time_title: component_time_title$1,
          component_video_capture_title: component_video_capture_title$1,
          component_video_display_title: component_video_display_title$1,
          component_welcome_title: component_welcome_title$1,
          condition_to_hide: condition_to_hide$1,
          condition_to_show: condition_to_show$1,
          content_editor_placeholder_description: content_editor_placeholder_description$1,
          content_editor_placeholder_option: content_editor_placeholder_option$1,
          content_editor_placeholder_title: content_editor_placeholder_title$1,
          custom_error: custom_error$1,
          custom_random: custom_random$1,
          date_format: date_format$1,
          image_width: image_width$1,
          decimal_separator: decimal_separator$1,
          unspecified: unspecified$1,
          no_decimals_allowed: no_decimals_allowed$1,
          display: display,
          edit_priority_rule: edit_priority_rule$1,
          edit_random_rule: edit_random_rule$1,
          empty_group_hint: empty_group_hint$1,
          empty_survey_hint: empty_survey_hint$1,
          err_duplicate_code: err_duplicate_code$1,
          err_duplicate_priority_group_items: err_duplicate_priority_group_items$1,
          err_duplicate_random_group_items: err_duplicate_random_group_items$1,
          err_empty_parent: err_empty_parent$1,
          err_misplaced_end_group: err_misplaced_end_group$1,
          err_misplaced_welcome_group: err_misplaced_welcome_group$1,
          err_no_end_group: err_no_end_group$1,
          err_priority: err_priority$1,
          err_priority_group_item_not_child: err_priority_group_item_not_child$1,
          err_priority_limit_mismatch: err_priority_limit_mismatch$1,
          err_random: err_random$1,
          err_random_group_item_not_child: err_random_group_item_not_child$1,
          err_reference: err_reference$1,
          err_relevance: err_relevance$1,
          err_skip: err_skip$1,
          err_value_in_end_group: err_value_in_end_group$1,
          file_type: file_type$1,
          file_types: file_types$1,
          flip_order: flip_order$1,
          foreground_color: foreground_color$1,
          text_color: text_color$1,
          fullday_format: fullday_format$1,
          group: group$1,
          group_by_group: group_by_group$1,
          group_title: group_title$1,
          font: font$1,
          groups_order: groups_order$1,
          value_beyond_bounds: value_beyond_bounds$1,
          value_beyond_bounds_no_label: value_beyond_bounds_no_label$1,
          groups_priority: groups_priority$1,
          hide_always: hide_always$1,
          hide_if: hide_if$1,
          hide_text: hide_text$1,
          highlight_color: highlight_color$1,
          if_answer_is: if_answer_is$1,
          image_aspect_ratio: image_aspect_ratio$1,
          image_icon_size: image_icon_size$1,
          image_height: image_height$1,
          invalid_skip_destination_err: invalid_skip_destination_err$1,
          loop_video: loop_video$1,
          lower_bound_hint: lower_bound_hint$1,
          max_date: max_date$1,
          min_date: min_date$1,
          navigation_mode: navigation_mode$1,
          navigation_options: navigation_options$1,
          no_condition: no_condition$1,
          no_logic_err: no_logic_err$1,
          no_priority: no_priority$1,
          offline_only: offline_only$1,
          ok: ok$1,
          option: option,
          options_order: options_order$1,
          options_priority: options_priority$1,
          or: or$1,
          reorder: reorder$1,
          reorder_setup: reorder_setup$1,
          order_mode: order_mode,
          collapse_none: collapse_none$1,
          collapse_groups: collapse_groups$1,
          collapse_questions: collapse_questions$1,
          order_priority: order_priority$1,
          prioritise: prioritise,
          prioritise_columns: prioritise_columns$1,
          prioritise_groups: prioritise_groups$1,
          prioritise_options: prioritise_options$1,
          prioritise_questions: prioritise_questions$1,
          prioritise_rows: prioritise_rows$1,
          priority_show: priority_show$1,
          priority_show_limit_from_count: priority_show_limit_from_count$1,
          proceed_as_usual: proceed_as_usual$1,
          question: question,
          question_by_question: question_by_question$1,
          question_title: question_title$1,
          questions_order: questions_order$1,
          questions_priority: questions_priority$1,
          random_order: random_order$1,
          replace_image: replace_image$1,
          replace_video: replace_video$1,
          rows: rows,
          rows_order: rows_order$1,
          rows_priority: rows_priority$1,
          section_choice_based: section_choice_based$1,
          section_date_time: section_date_time$1,
          section_file_based: section_file_based$1,
          section_info: section_info$1,
          section_other: section_other$1,
          section_sections: section_sections$1,
          section_text_based: section_text_based$1,
          setup: setup$1,
          show_always: show_always$1,
          show_description: show_description$1,
          show_hide: show_hide$1,
          show_if: show_if$1,
          show_question_hint: show_question_hint$1,
          show_word_count: show_word_count$1,
          skip_invalid: skip_invalid$1,
          skip_logic: skip_logic$1,
          skip_to: skip_to$1,
          sort_by_label: sort_by_label$1,
          spacing: spacing,
          standard_error: standard_error$1,
          submit: submit$1,
          survey: survey,
          text_field_size: text_field_size$1,
          text_style: text_style$1,
          textarea_lines: textarea_lines$1,
          theme: theme$1,
          translation: translation$1,
          upload_background: upload_background$1,
          theme_text: theme_text$1,
          to_group_end: to_group_end$1,
          upload_image: upload_image$1,
          upload_video: upload_video$1,
          uploading_image: uploading_image$1,
          uploading_video: uploading_video$1,
          upper_bound_hint: upper_bound_hint$1,
          validation: validation$1,
          validation_between_subtitle: validation_between_subtitle$1,
          validation_between_title: validation_between_title$1,
          validation_contains_subtitle: validation_contains_subtitle$1,
          validation_contains_title: validation_contains_title$1,
          validation_equals_subtitle: validation_equals_subtitle$1,
          validation_equals_title: validation_equals_title$1,
          validation_file_types_title: validation_file_types_title$1,
          validation_gt_subtitle: validation_gt_subtitle$1,
          validation_gt_title: validation_gt_title$1,
          validation_gte_subtitle: validation_gte_subtitle$1,
          validation_gte_title: validation_gte_title$1,
          validation_lt_subtitle: validation_lt_subtitle$1,
          validation_lt_title: validation_lt_title$1,
          validation_lte_subtitle: validation_lte_subtitle$1,
          validation_lte_title: validation_lte_title$1,
          validation_max_char_length_subtitle: validation_max_char_length_subtitle$1,
          validation_max_char_length_title: validation_max_char_length_title$1,
          validation_max_file_size_subtitle: validation_max_file_size_subtitle$1,
          validation_max_file_size_title: validation_max_file_size_title$1,
          validation_max_option_count_subtitle: validation_max_option_count_subtitle$1,
          validation_max_option_count_title: validation_max_option_count_title$1,
          validation_max_ranking_count_subtitle: validation_max_ranking_count_subtitle$1,
          validation_max_ranking_count_title: validation_max_ranking_count_title$1,
          validation_max_word_count_subtitle: validation_max_word_count_subtitle$1,
          validation_max_word_count_title: validation_max_word_count_title$1,
          validation_min_char_length_subtitle: validation_min_char_length_subtitle$1,
          validation_min_char_length_title: validation_min_char_length_title$1,
          validation_min_option_count_subtitle: validation_min_option_count_subtitle$1,
          validation_min_option_count_title: validation_min_option_count_title$1,
          validation_min_ranking_count_subtitle: validation_min_ranking_count_subtitle$1,
          validation_min_ranking_count_title: validation_min_ranking_count_title$1,
          validation_min_word_count_subtitle: validation_min_word_count_subtitle$1,
          validation_min_word_count_title: validation_min_word_count_title$1,
          validation_not_between_subtitle: validation_not_between_subtitle$1,
          validation_not_between_title: validation_not_between_title$1,
          validation_not_contains_subtitle: validation_not_contains_subtitle$1,
          validation_not_contains_title: validation_not_contains_title$1,
          validation_not_equal_subtitle: validation_not_equal_subtitle$1,
          validation_not_equal_title: validation_not_equal_title$1,
          validation_one_response_per_col_title: validation_one_response_per_col_title$1,
          validation_option_count_subtitle: validation_option_count_subtitle$1,
          validation_option_count_title: validation_option_count_title$1,
          validation_pattern_email_title: validation_pattern_email_title$1,
          validation_pattern_subtitle: validation_pattern_subtitle$1,
          validation_pattern_title: validation_pattern_title$1,
          validation_ranking_count_subtitle: validation_ranking_count_subtitle$1,
          validation_ranking_count_title: validation_ranking_count_title$1,
          validation_required_title: validation_required_title$1,
          video_options: video_options$1,
          wrong_logic_err: wrong_logic_err$1
        };
        const components = "المكونات";
        const setup = "الإعداد";
        const design = "التصميم";
        const settings = "الإعدادات";
        const responses$3 = "الردود";
        const preview$3 = "معاينة";
        const launch$3 = "الإطلاق";
        const add_column = "إضافة عمود";
        const add_new_random_rule = "أضف قاعدة عشوائية جديدة";
        const add_option = "إضافة خيار";
        const add_other = "أضف \"أخرى\"";
        const add_priority_rule = "أضف قاعدة الأولوية";
        const add_random_rule = "أضف قاعدة عشوائية";
        const add_row = "إضافة صف";
        const all_in_one = "الكل في واحد";
        const allow_incomplete = "السماح بعدم الاكتمال/الاستئناف";
        const allow_jump = "السماح بالانتقال السريع/إظهار فهرس الاستطلاع";
        const allow_previous = "السماح بالسابق";
        const are_you_sure = "هل أنت متأكد؟";
        const delete_question = "هل أنت متأكد من رغبتك في حذف هذا السؤال؟";
        const as_is = "كما هو";
        const audio_only = "الصوت فقط";
        const background_color = "لون الخلفية";
        const back_to_design = "العودة إلى التصميم";
        const cancel$3 = "إلغاء";
        const confirm = "تأكيد";
        const choose_image = "اختر صورة";
        const columns = "الأعمدة";
        const columns_number = "رقم الأعمدة";
        const columns_order = "ترتيب الأعمدة";
        const columns_priority = "أولوية الأعمدة";
        const component_barcode_title = "ماسح الباركود";
        const component_date_time_title = "التاريخ والوقت";
        const component_date_title = "التاريخ";
        const component_email_title = "البريد الإلكتروني";
        const component_end_title = "نهاية الصفحة";
        const component_file_upload_title = "رفع الملف";
        const component_group_title = "الصفحة";
        const component_icon_mcq_title = "اختيار أيقونات متعددة";
        const component_icon_scq_title = "اختيار رمز واحد";
        const component_image_display_title = "عرض الصورة";
        const component_image_mcq_title = "اختيار صور متعددة";
        const component_image_ranking_title = "تصنيف الصور";
        const component_image_scq_title = "اختيار صورة واحدة";
        const component_mcq_title = "الاختيار من متعدد";
        const component_nps_title = "NPS";
        const component_number_title = "الرقم";
        const component_paragraph_title = "نص طويل";
        const component_photo_capture_title = "التقاط صورة";
        const component_ranking_title = "التصنيف";
        const component_scq_array_title = "مصفوفة الاختيار الفردي";
        const component_scq_icon_array_title = "مصفوفة أيقونات الاختيار الفردي";
        const component_scq_title = "اختيار واحد";
        const component_signature_title = "التوقيع";
        const component_text_display_title = "عرض النص";
        const component_text_title = "نص قصير";
        const component_time_title = "الوقت";
        const component_video_capture_title = "التقاط فيديو";
        const component_video_display_title = "عرض الفيديو";
        const component_welcome_title = "صفحة الترحيب";
        const condition_to_hide = "شرط للإخفاء";
        const condition_to_show = "شرط العرض";
        const content_editor_placeholder_description = "الوصف";
        const content_editor_placeholder_option = "خيار";
        const content_editor_placeholder_title = "العنوان";
        const custom_error = "خطأ مخصص";
        const custom_random = "مخصص";
        const date_format = "تنسيق التاريخ";
        const image_width = "عرض الصورة";
        const decimal_separator = "الفاصل العشري";
        const unspecified = "غير محدد";
        const no_decimals_allowed = "غير مسموح بالكسور العشرية";
        const edit_priority_rule = "تحرير قاعدة الأولوية";
        const edit_random_rule = "تحرير القاعدة العشوائية";
        const empty_group_hint = "أسقط هنا";
        const empty_survey_hint = "أسقط هنا";
        const err_duplicate_code = "يحتوي {{component_name}} هذا على رمز مكرر";
        const err_duplicate_priority_group_items = "هذه العناصر موجودة في أكثر من مجموعة ذات أولوية: <strong>{{iterms}}</strong>";
        const err_duplicate_random_group_items = "هذه العناصر موجودة في أكثر من مجموعة عشوائية: <strong>{{items}}</strong>";
        const err_empty_parent = "لا يمكن أن يكون هذا {{component_name}} فارغًا, يرجى إضافة {{child_name}} واحد على الأقل";
        const err_misplaced_end_group = "يجب أن تكون صفحة النهاية هي الصفحة الأخيرة دائماً";
        const err_misplaced_welcome_group = "يجب أن تكون صفحة الترحيب دائماً الصفحة الأولى";
        const err_no_end_group = "يجب أن تكون هناك صفحة نهاية صالحة";
        const err_priority = "خطأ في تعليمات المجموعة ذات الأولوية";
        const err_priority_group_item_not_child = "هذه العناصر إما محذوفة أو تحتوي على أخطاء وبالتالي لا يمكن أن تكون في المجموعة ذات الأولوية: <strong>{{items}}</strong>";
        const err_priority_limit_mismatch = "في إحدى المجموعات ذات الأولوية, يكون الحد أكبر من أو يساوي عدد العناصر";
        const err_random = "خطأ في تعليمات المجموعة العشوائية";
        const err_random_group_item_not_child = "هذه العناصر إما محذوفة أو تحتوي على أخطاء وبالتالي لا يمكن أن تكون في المجموعة العشوائية: <strong>{{items}}</strong>";
        const err_reference = "خطأ: إدخال قيمة مفقودة أو سؤال لاحق: <strong>{{codes}}</strong>, باللغة: <strong>{{lang}}</strong>";
        const err_relevance = "مشكلة في إظهار/إخفاء المنطق";
        const err_skip = "مشكلة في أحد تعليمات التخطي";
        const err_value_in_end_group = "لا يمكن أن يكون لديك أسئلة تلتقط مدخلات المستخدم في المجموعة النهائية";
        const file_type = "نوع الملف";
        const file_types = {
          "صوت": "صوت",
          "مستند": "مستند",
          "صورة": "صورة",
          pdf: "بي دي إف",
          "عرض": "عرض تقديمي",
          "جدول البيانات": "جدول البيانات",
          "فيديو": "فيديو"
        };
        const flip_order = "ترتيب الوجه";
        const foreground_color = "لون المقدمة";
        const text_color = "لون النص";
        const fullday_format = "تنسيق Fullday";
        const group = "الصفحة";
        const group_by_group = "صفحة بصفحة";
        const group_title = "عنوان الصفحة";
        const font = "الخط";
        const groups_order = "ترتيب المجموعات";
        const value_beyond_bounds = "قيمة غير صالحة لـ {{label}}، يجب أن تكون بين {{lower_bound}} و {{upper_bound}}، القيمة الحالية: {{setup_value}}";
        const value_beyond_bounds_no_label = "قيمة غير صالحة! القيمة الحالية: {{setup_value}}";
        const groups_priority = "أولوية المجموعات";
        const hide_always = "الإخفاء دائمًا";
        const hide_if = "إخفاء إذا";
        const hide_text = "إخفاء النص";
        const highlight_color = "لون التمييز";
        const if_answer_is = "إذا كانت الإجابة <strong>{{code}}</strong>";
        const image_aspect_ratio = "نسبة أبعاد الصورة";
        const image_icon_size = "حجم الأيقونة بالبكسل";
        const image_height = "ارتفاع الصورة";
        const invalid_skip_destination_err = "<strong>{{code}}</strong> ليس وجهة تخطي صالحة...";
        const loop_video = "فيديو متكرر";
        const lower_bound_hint = "تلميح الحد الأدنى";
        const max_date = "التاريخ الأقصى";
        const min_date = "التاريخ الأدنى";
        const navigation_mode = "وضع التنقل";
        const navigation_options = "خيارات التنقل";
        const no_condition = "لا يوجد شرط";
        const no_logic_err = "❌ بدون المنطق, ستتم إعادة ضبط هذا على <strong>العرض دائمًا</strong>";
        const no_priority = "لا شيء";
        const offline_only = "غير متصل";
        const ok = "حسنا";
        const options_order = "ترتيب الخيارات";
        const options_priority = "أولوية الخيارات";
        const or = "او";
        const order_priority = "الترتيب والأولوية";
        const reorder = "إعادة الترتيب";
        const reorder_setup = "إعادة ترتيب الصفحات والأسئلة";
        const collapse_none = "بلا";
        const collapse_groups = "إعادة ترتيب الصفحات";
        const collapse_questions = "إعادة ترتيب الأسئلة";
        const prioritise_columns = "ترتيب الأعمدة حسب الأولوية";
        const prioritise_groups = "ترتيب المجموعات ذات الأولوية";
        const prioritise_options = "خيارات الأولوية";
        const prioritise_questions = "الأسئلة ذات الأولوية";
        const prioritise_rows = "ترتيب الصفوف ذات الأولوية";
        const priority_show = "عرض";
        const priority_show_limit_from_count = "عرض {{limit}} من {{count}}";
        const proceed_as_usual = "تابع كالمعتاد";
        const question_by_question = "سؤال بسؤال";
        const question_title = "عنوان السؤال";
        const questions_order = "ترتيب الأسئلة";
        const questions_priority = "أولوية الأسئلة";
        const random_order = "ترتيب عشوائي";
        const replace_image = "استبدال الصورة";
        const replace_video = "استبدال الفيديو";
        const rows_order = "ترتيب الصفوف";
        const rows_priority = "أولوية الصفوف";
        const section_choice_based = "معتمد على الاختيار";
        const section_date_time = "التاريخ/الوقت";
        const section_file_based = "يعتمد على الملف";
        const section_info = "معلومات";
        const section_other = "أخرى";
        const section_sections = "الأقسام";
        const section_text_based = "معتمد على النص";
        const show_always = "العرض دائمًا";
        const show_description = "أظهر الوصف";
        const show_hide = "إظهار/إخفاء";
        const show_if = "أظهر إذا";
        const show_question_hint = "أظهر تلميح السؤال";
        const show_word_count = "إظهار عدد الكلمات";
        const skip_invalid = "فرض التحقق عند الإرسال فقط";
        const skip_logic = "تخطي المنطق";
        const skip_to = "انتقل إلى";
        const sort_by_label = "الفرز حسب التسمية";
        const standard_error = "خطأ قياسي";
        const submit = "إرسال";
        const text_field_size = "حجم حقل النص";
        const text_style = "نمط النص";
        const textarea_lines = "خطوط منطقة النص";
        const theme = "تصميم";
        const translation = "ترجمة";
        const upload_background = "تحميل الخلفية";
        const theme_text = "نص";
        const to_group_end = "إلى نهاية الصفحة";
        const upload_image = "رفع الصورة";
        const upload_video = "تحميل فيديو";
        const uploading_image = "جاري تحميل الصورة";
        const uploading_video = "جاري تحميل الفيديو";
        const upper_bound_hint = "تلميح الحد العلوي";
        const validation = "التحقق من الصحة";
        const validation_between_subtitle = "بين:";
        const validation_between_title = "القيمة بين";
        const validation_contains_subtitle = "يحتوي على:";
        const validation_contains_title = "يحتوي على";
        const validation_equals_subtitle = "يساوي:";
        const validation_equals_title = "القيمة تساوي";
        const validation_file_types_title = "أنواع الملفات";
        const validation_gt_subtitle = "أكبر من:";
        const validation_gt_title = "القيمة أكبر من";
        const validation_gte_subtitle = "أكبر من أو يساوي:";
        const validation_gte_title = "القيمة أكبر من أو تساوي";
        const validation_lt_subtitle = "أقل من:";
        const validation_lt_title = "القيمة أقل من";
        const validation_lte_subtitle = "أقل من أو يساوي:";
        const validation_lte_title = "القيمة أقل من أو تساوي";
        const validation_max_char_length_subtitle = "الطول الأقصى:";
        const validation_max_char_length_title = "الحد الأقصى لطول الحرف";
        const validation_max_file_size_subtitle = "الحد الأقصى لحجم الملف (كيلو بايت)";
        const validation_max_file_size_title = "الحد الأقصى لحجم الملف";
        const validation_max_option_count_subtitle = "العدد الأقصى:";
        const validation_max_option_count_title = "الحد الأقصى لعدد الخيارات";
        const validation_max_ranking_count_subtitle = "العدد الأقصى";
        const validation_max_ranking_count_title = "الحد الأقصى لعدد التصنيفات";
        const validation_max_word_count_subtitle = "العدد الأقصى:";
        const validation_max_word_count_title = "الحد الأقصى لعدد الكلمات";
        const validation_min_char_length_subtitle = "الحد الأدنى للطول:";
        const validation_min_char_length_title = "الحد الأدنى لطول الحرف";
        const validation_min_option_count_subtitle = "العدد الأدنى:";
        const validation_min_option_count_title = "الحد الأدنى لعدد الخيارات";
        const validation_min_ranking_count_subtitle = "العدد الأدنى";
        const validation_min_ranking_count_title = "الحد الأدنى لعدد التصنيفات";
        const validation_min_word_count_subtitle = "العدد الأدنى:";
        const validation_min_word_count_title = "الحد الأدنى لعدد الكلمات";
        const validation_not_between_subtitle = "ليس بين:";
        const validation_not_between_title = "القيمة ليست بين";
        const validation_not_contains_subtitle = "لا يحتوي على:";
        const validation_not_contains_title = "لا يحتوي على";
        const validation_not_equal_subtitle = "لا يساوي:";
        const validation_not_equal_title = "القيمة لا تساوي";
        const validation_one_response_per_col_title = "استجابة واحدة لكل عمود";
        const validation_option_count_subtitle = "العدد:";
        const validation_option_count_title = "العدد الدقيق للخيارات";
        const validation_pattern_email_title = "نموذج البريد الإلكتروني";
        const validation_pattern_subtitle = "النمط:";
        const validation_pattern_title = "يطابق نمط التعبير العادي";
        const validation_ranking_count_subtitle = "العدد:";
        const validation_ranking_count_title = "العدد المصنف بالضبط";
        const validation_required_title = "مطلوب";
        const video_options = "خيارات الفيديو";
        const wrong_logic_err = "❌ حدث خطأ في المنطق ولذلك تمت إعادة ضبطه على <strong>العرض دائمًا</strong>";
        const design_ar = {
          components: components,
          setup: setup,
          design: design,
          settings: settings,
          responses: responses$3,
          preview: preview$3,
          launch: launch$3,
          add_column: add_column,
          add_new_random_rule: add_new_random_rule,
          add_option: add_option,
          add_other: add_other,
          add_priority_rule: add_priority_rule,
          add_random_rule: add_random_rule,
          add_row: add_row,
          all_in_one: all_in_one,
          allow_incomplete: allow_incomplete,
          allow_jump: allow_jump,
          allow_previous: allow_previous,
          are_you_sure: are_you_sure,
          delete_question: delete_question,
          as_is: as_is,
          audio_only: audio_only,
          background_color: background_color,
          back_to_design: back_to_design,
          cancel: cancel$3,
          confirm: confirm,
          choose_image: choose_image,
          columns: columns,
          columns_number: columns_number,
          columns_order: columns_order,
          columns_priority: columns_priority,
          component_barcode_title: component_barcode_title,
          component_date_time_title: component_date_time_title,
          component_date_title: component_date_title,
          component_email_title: component_email_title,
          component_end_title: component_end_title,
          component_file_upload_title: component_file_upload_title,
          component_group_title: component_group_title,
          component_icon_mcq_title: component_icon_mcq_title,
          component_icon_scq_title: component_icon_scq_title,
          component_image_display_title: component_image_display_title,
          component_image_mcq_title: component_image_mcq_title,
          component_image_ranking_title: component_image_ranking_title,
          component_image_scq_title: component_image_scq_title,
          component_mcq_title: component_mcq_title,
          component_nps_title: component_nps_title,
          component_number_title: component_number_title,
          component_paragraph_title: component_paragraph_title,
          component_photo_capture_title: component_photo_capture_title,
          component_ranking_title: component_ranking_title,
          component_scq_array_title: component_scq_array_title,
          component_scq_icon_array_title: component_scq_icon_array_title,
          component_scq_title: component_scq_title,
          component_signature_title: component_signature_title,
          component_text_display_title: component_text_display_title,
          component_text_title: component_text_title,
          component_time_title: component_time_title,
          component_video_capture_title: component_video_capture_title,
          component_video_display_title: component_video_display_title,
          component_welcome_title: component_welcome_title,
          condition_to_hide: condition_to_hide,
          condition_to_show: condition_to_show,
          content_editor_placeholder_description: content_editor_placeholder_description,
          content_editor_placeholder_option: content_editor_placeholder_option,
          content_editor_placeholder_title: content_editor_placeholder_title,
          custom_error: custom_error,
          custom_random: custom_random,
          date_format: date_format,
          image_width: image_width,
          decimal_separator: decimal_separator,
          unspecified: unspecified,
          no_decimals_allowed: no_decimals_allowed,
          "عرض": "عرض",
          edit_priority_rule: edit_priority_rule,
          edit_random_rule: edit_random_rule,
          empty_group_hint: empty_group_hint,
          empty_survey_hint: empty_survey_hint,
          err_duplicate_code: err_duplicate_code,
          err_duplicate_priority_group_items: err_duplicate_priority_group_items,
          err_duplicate_random_group_items: err_duplicate_random_group_items,
          err_empty_parent: err_empty_parent,
          err_misplaced_end_group: err_misplaced_end_group,
          err_misplaced_welcome_group: err_misplaced_welcome_group,
          err_no_end_group: err_no_end_group,
          err_priority: err_priority,
          err_priority_group_item_not_child: err_priority_group_item_not_child,
          err_priority_limit_mismatch: err_priority_limit_mismatch,
          err_random: err_random,
          err_random_group_item_not_child: err_random_group_item_not_child,
          err_reference: err_reference,
          err_relevance: err_relevance,
          err_skip: err_skip,
          err_value_in_end_group: err_value_in_end_group,
          file_type: file_type,
          file_types: file_types,
          flip_order: flip_order,
          foreground_color: foreground_color,
          text_color: text_color,
          fullday_format: fullday_format,
          "المجموعة": "المجموعة",
          group: group,
          group_by_group: group_by_group,
          group_title: group_title,
          font: font,
          groups_order: groups_order,
          value_beyond_bounds: value_beyond_bounds,
          value_beyond_bounds_no_label: value_beyond_bounds_no_label,
          groups_priority: groups_priority,
          hide_always: hide_always,
          hide_if: hide_if,
          hide_text: hide_text,
          highlight_color: highlight_color,
          if_answer_is: if_answer_is,
          image_aspect_ratio: image_aspect_ratio,
          image_icon_size: image_icon_size,
          image_height: image_height,
          invalid_skip_destination_err: invalid_skip_destination_err,
          loop_video: loop_video,
          lower_bound_hint: lower_bound_hint,
          max_date: max_date,
          min_date: min_date,
          navigation_mode: navigation_mode,
          navigation_options: navigation_options,
          no_condition: no_condition,
          no_logic_err: no_logic_err,
          no_priority: no_priority,
          offline_only: offline_only,
          ok: ok,
          "الخيار": "الخيار",
          options_order: options_order,
          options_priority: options_priority,
          or: or,
          order_priority: order_priority,
          reorder: reorder,
          reorder_setup: reorder_setup,
          "وضع_الطلب": "وضع الترتيب",
          collapse_none: collapse_none,
          collapse_groups: collapse_groups,
          collapse_questions: collapse_questions,
          "تحديد الأولويات": "تحديد الأولويات",
          prioritise_columns: prioritise_columns,
          prioritise_groups: prioritise_groups,
          prioritise_options: prioritise_options,
          prioritise_questions: prioritise_questions,
          prioritise_rows: prioritise_rows,
          priority_show: priority_show,
          priority_show_limit_from_count: priority_show_limit_from_count,
          proceed_as_usual: proceed_as_usual,
          "سؤال": "سؤال",
          question_by_question: question_by_question,
          question_title: question_title,
          questions_order: questions_order,
          questions_priority: questions_priority,
          random_order: random_order,
          replace_image: replace_image,
          replace_video: replace_video,
          "صفوف": "صفوف",
          rows_order: rows_order,
          rows_priority: rows_priority,
          section_choice_based: section_choice_based,
          section_date_time: section_date_time,
          section_file_based: section_file_based,
          section_info: section_info,
          section_other: section_other,
          section_sections: section_sections,
          section_text_based: section_text_based,
          "الإعداد": "الإعداد",
          show_always: show_always,
          show_description: show_description,
          show_hide: show_hide,
          show_if: show_if,
          show_question_hint: show_question_hint,
          show_word_count: show_word_count,
          skip_invalid: skip_invalid,
          skip_logic: skip_logic,
          skip_to: skip_to,
          sort_by_label: sort_by_label,
          "تباعد": "تباعد",
          standard_error: standard_error,
          submit: submit,
          "استطلاع": "استطلاع",
          text_field_size: text_field_size,
          text_style: text_style,
          textarea_lines: textarea_lines,
          theme: theme,
          translation: translation,
          upload_background: upload_background,
          theme_text: theme_text,
          to_group_end: to_group_end,
          upload_image: upload_image,
          upload_video: upload_video,
          uploading_image: uploading_image,
          uploading_video: uploading_video,
          upper_bound_hint: upper_bound_hint,
          validation: validation,
          validation_between_subtitle: validation_between_subtitle,
          validation_between_title: validation_between_title,
          validation_contains_subtitle: validation_contains_subtitle,
          validation_contains_title: validation_contains_title,
          validation_equals_subtitle: validation_equals_subtitle,
          validation_equals_title: validation_equals_title,
          validation_file_types_title: validation_file_types_title,
          validation_gt_subtitle: validation_gt_subtitle,
          validation_gt_title: validation_gt_title,
          validation_gte_subtitle: validation_gte_subtitle,
          validation_gte_title: validation_gte_title,
          validation_lt_subtitle: validation_lt_subtitle,
          validation_lt_title: validation_lt_title,
          validation_lte_subtitle: validation_lte_subtitle,
          validation_lte_title: validation_lte_title,
          validation_max_char_length_subtitle: validation_max_char_length_subtitle,
          validation_max_char_length_title: validation_max_char_length_title,
          validation_max_file_size_subtitle: validation_max_file_size_subtitle,
          validation_max_file_size_title: validation_max_file_size_title,
          validation_max_option_count_subtitle: validation_max_option_count_subtitle,
          validation_max_option_count_title: validation_max_option_count_title,
          validation_max_ranking_count_subtitle: validation_max_ranking_count_subtitle,
          validation_max_ranking_count_title: validation_max_ranking_count_title,
          validation_max_word_count_subtitle: validation_max_word_count_subtitle,
          validation_max_word_count_title: validation_max_word_count_title,
          validation_min_char_length_subtitle: validation_min_char_length_subtitle,
          validation_min_char_length_title: validation_min_char_length_title,
          validation_min_option_count_subtitle: validation_min_option_count_subtitle,
          validation_min_option_count_title: validation_min_option_count_title,
          validation_min_ranking_count_subtitle: validation_min_ranking_count_subtitle,
          validation_min_ranking_count_title: validation_min_ranking_count_title,
          validation_min_word_count_subtitle: validation_min_word_count_subtitle,
          validation_min_word_count_title: validation_min_word_count_title,
          validation_not_between_subtitle: validation_not_between_subtitle,
          validation_not_between_title: validation_not_between_title,
          validation_not_contains_subtitle: validation_not_contains_subtitle,
          validation_not_contains_title: validation_not_contains_title,
          validation_not_equal_subtitle: validation_not_equal_subtitle,
          validation_not_equal_title: validation_not_equal_title,
          validation_one_response_per_col_title: validation_one_response_per_col_title,
          validation_option_count_subtitle: validation_option_count_subtitle,
          validation_option_count_title: validation_option_count_title,
          validation_pattern_email_title: validation_pattern_email_title,
          validation_pattern_subtitle: validation_pattern_subtitle,
          validation_pattern_title: validation_pattern_title,
          validation_ranking_count_subtitle: validation_ranking_count_subtitle,
          validation_ranking_count_title: validation_ranking_count_title,
          validation_required_title: validation_required_title,
          video_options: video_options,
          wrong_logic_err: wrong_logic_err
        };
        const cancel$2 = "Abbrechen";
        const choose_file$2 = "Datei auswählen";
        const finish$2 = "Fertig";
        const lang$2 = "Sprache";
        const next$3 = "Weiter";
        const previous$2 = "Zuruck";
        const error$5 = "Fehler";
        const goBack$5 = "Zurückgehen";
        const survey_navigation$2 = "Umfragenavigation";
        const processed_errors$5 = {
          survey_closed: "Diese Umfrage ist nicht aktiv",
          survey_design_error: "Fehler im Umfragedesign... Überprüfen Sie das Umfragedesign",
          survey_expired: "Diese Umfrage ist abgelaufen",
          survey_not_active: "Diese Umfrage ist nicht aktiv",
          survey_scheduled: "Diese Umfrage soll in der Zukunft beginnen"
        };
        const upload$2 = "Upload";
        const preview$2 = "Sie befinden sich im Vorschaumodus";
        const uploading$2 = "Wird hochgeladen";
        const validation_between$2 = "Muss zwischen {{lower_limit}} und {{upper_limit}} liegen";
        const validation_contains$2 = "Muss \"{{contains}}\" enthalten";
        const validation_equals$2 = "Muss {{number}} sein";
        const validation_file_types$2 = "Unbekannter Dateityp";
        const validation_gt$2 = "Muss größer als {{number}} sein";
        const validation_gte$2 = "Muss größer oder gleich {{number}} sein";
        const validation_lt$2 = "Muss kleiner als {{number}} sein";
        const validation_lte$2 = "Muss kleiner oder gleich {{number}} sein";
        const validation_max_char_length$2 = "Muss kleiner als {{max_length}} Zeichen sein";
        const validation_max_file_size$2 = "Die Dateigröße muss kleiner als {{max_size}} KB sein";
        const validation_max_option_count$2 = "Bitte höchstens {{max_count}} Optionen auswählen";
        const validation_max_ranking_count$2 = "Bitte höchstens {{max_count}} Optionen auswählen";
        const validation_max_word_count$2 = "Muss kleiner als {{max_count}} Wörter sein";
        const validation_min_char_length$2 = "Muss größer als {{min_length}} Zeichen sein";
        const validation_min_option_count$2 = "Bitte mindestens {{min_count}} Optionen auswählen";
        const validation_min_ranking_count$2 = "Bitte mindestens {{min_count}} Optionen auswählen";
        const validation_min_word_count$2 = "Muss größer als {{min_count}} Wörter sein";
        const validation_not_between$2 = "muss kleiner als {{lower_limit}} oder größer als {{upper_limit}} sein";
        const validation_not_contains$2 = "Darf nicht \"{{not_contains}}\" enthalten";
        const validation_not_equal$2 = "Darf nicht {{number}} sein";
        const validation_one_response_per_col$2 = "Bitte wählen Sie nicht mehr als eine Antwort pro Spalte aus";
        const validation_option_count$2 = "Bitte wählen Sie höchstens {{count}} Optionen aus";
        const validation_pattern$2 = "Muster muss übereinstimmen";
        const validation_pattern_email$2 = "Sollte wie eine E-Mail aussehen";
        const validation_ranking_count$2 = "Bitte wählen Sie höchstens {{count}} Optionen aus";
        const validation_required$2 = "Dies ist erforderlich";
        const word_count$2 = "Wortzahl: {{count}}";
        const run_de = {
          cancel: cancel$2,
          choose_file: choose_file$2,
          finish: finish$2,
          lang: lang$2,
          next: next$3,
          previous: previous$2,
          error: error$5,
          goBack: goBack$5,
          survey_navigation: survey_navigation$2,
          processed_errors: processed_errors$5,
          upload: upload$2,
          preview: preview$2,
          uploading: uploading$2,
          validation_between: validation_between$2,
          validation_contains: validation_contains$2,
          validation_equals: validation_equals$2,
          validation_file_types: validation_file_types$2,
          validation_gt: validation_gt$2,
          validation_gte: validation_gte$2,
          validation_lt: validation_lt$2,
          validation_lte: validation_lte$2,
          validation_max_char_length: validation_max_char_length$2,
          validation_max_file_size: validation_max_file_size$2,
          validation_max_option_count: validation_max_option_count$2,
          validation_max_ranking_count: validation_max_ranking_count$2,
          validation_max_word_count: validation_max_word_count$2,
          validation_min_char_length: validation_min_char_length$2,
          validation_min_option_count: validation_min_option_count$2,
          validation_min_ranking_count: validation_min_ranking_count$2,
          validation_min_word_count: validation_min_word_count$2,
          validation_not_between: validation_not_between$2,
          validation_not_contains: validation_not_contains$2,
          validation_not_equal: validation_not_equal$2,
          validation_one_response_per_col: validation_one_response_per_col$2,
          validation_option_count: validation_option_count$2,
          validation_pattern: validation_pattern$2,
          validation_pattern_email: validation_pattern_email$2,
          validation_ranking_count: validation_ranking_count$2,
          validation_required: validation_required$2,
          word_count: word_count$2
        };
        const cancel$1 = "Cancel";
        const choose_file$1 = "Choose File";
        const finish$1 = "Submit";
        const lang$1 = "Language";
        const next$2 = "Next";
        const previous$1 = "Previous";
        const error$4 = "Error";
        const goBack$4 = "Go Back";
        const survey_navigation$1 = "Survey Navigation";
        const processed_errors$4 = {
          survey_closed: "This survey is not active",
          survey_design_error: "Survey Design Error... Check Survey Design",
          survey_expired: "This survey is expired",
          survey_not_active: "This survey is not active",
          survey_scheduled: "This survey is scheduled to start in the future"
        };
        const preview$1 = "You're in preview mode";
        const upload$1 = "Upload";
        const uploading$1 = "Uploading";
        const validation_between$1 = "Must be between {{lower_limit}} and {{upper_limit}}";
        const validation_contains$1 = "Must contain \"{{contains}}\"";
        const validation_equals$1 = "Must be {{number}}";
        const validation_file_types$1 = "Unrecognized file type";
        const validation_gt$1 = "Must be greater than {{number}}";
        const validation_gte$1 = "Must be greater than or equals {{number}}";
        const validation_lt$1 = "Must be less than {{number}}";
        const validation_lte$1 = "Must be less than or equals {{number}}";
        const validation_max_char_length$1 = "Must be smaller than {{max_length}} chars";
        const validation_max_file_size$1 = "File size must be smaller than {{max_size}} KB";
        const validation_max_option_count$1 = "Please choose at most {{max_count}} options";
        const validation_max_ranking_count$1 = "Please rank at most {{max_count}} options";
        const validation_max_word_count$1 = "Must be less than {{max_count}} words";
        const validation_min_char_length$1 = "Must be larger than {{min_length}} chars";
        const validation_min_option_count$1 = "Please choose at least {{min_count}} options";
        const validation_min_ranking_count$1 = "Please rank at least {{min_count}} options";
        const validation_min_word_count$1 = "Must be more than {{min_count}} words";
        const validation_not_between$1 = "Must be less than {{lower_limit}} or higher than {{upper_limit}}";
        const validation_not_contains$1 = "Must not contain \"{{not_contains}}\"";
        const validation_not_equal$1 = "Must not be {{number}}";
        const validation_one_response_per_col$1 = "Please don't select more than one response per column";
        const validation_option_count$1 = "Please choose at most {{count}} options";
        const validation_pattern$1 = "Must match pattern";
        const validation_pattern_email$1 = "Should look like an email";
        const validation_ranking_count$1 = "Please rank at most {{count}} options";
        const validation_required$1 = "This is required";
        const word_count$1 = "Word count: {{count}}";
        const run_en = {
          cancel: cancel$1,
          choose_file: choose_file$1,
          finish: finish$1,
          lang: lang$1,
          next: next$2,
          previous: previous$1,
          error: error$4,
          goBack: goBack$4,
          survey_navigation: survey_navigation$1,
          processed_errors: processed_errors$4,
          preview: preview$1,
          upload: upload$1,
          uploading: uploading$1,
          validation_between: validation_between$1,
          validation_contains: validation_contains$1,
          validation_equals: validation_equals$1,
          validation_file_types: validation_file_types$1,
          validation_gt: validation_gt$1,
          validation_gte: validation_gte$1,
          validation_lt: validation_lt$1,
          validation_lte: validation_lte$1,
          validation_max_char_length: validation_max_char_length$1,
          validation_max_file_size: validation_max_file_size$1,
          validation_max_option_count: validation_max_option_count$1,
          validation_max_ranking_count: validation_max_ranking_count$1,
          validation_max_word_count: validation_max_word_count$1,
          validation_min_char_length: validation_min_char_length$1,
          validation_min_option_count: validation_min_option_count$1,
          validation_min_ranking_count: validation_min_ranking_count$1,
          validation_min_word_count: validation_min_word_count$1,
          validation_not_between: validation_not_between$1,
          validation_not_contains: validation_not_contains$1,
          validation_not_equal: validation_not_equal$1,
          validation_one_response_per_col: validation_one_response_per_col$1,
          validation_option_count: validation_option_count$1,
          validation_pattern: validation_pattern$1,
          validation_pattern_email: validation_pattern_email$1,
          validation_ranking_count: validation_ranking_count$1,
          validation_required: validation_required$1,
          word_count: word_count$1
        };
        const cancel = "إلغاء";
        const choose_file = "اختر ملفًا";
        const finish = "إرسال";
        const lang = "اللغة";
        const next$1 = "التالي";
        const previous = "السابق";
        const error$3 = "خطأ";
        const goBack$3 = "العودة إلى الوراء";
        const survey_navigation = "تنقل الاستطلاع";
        const processed_errors$3 = {
          survey_closed: "هذا الاستطلاع غير نشط",
          survey_design_error: "خطأ في تصميم الاستبيان ... تحقق من تصميم الاستبيان",
          survey_expired: "هذا الاستطلاع منتهي الصلاحية",
          survey_not_active: "هذا الاستطلاع غير نشط",
          survey_scheduled: "من المقرر أن يبدأ هذا الاستطلاع في المستقبل"
        };
        const upload = "تحميل";
        const preview = "أنت في وضع المعاينة";
        const uploading = "جاري التحميل";
        const validation_between = "يجب أن يكون بين {{lower_limit}} و {{upper_limit}}";
        const validation_contains = "يجب أن يحتوي على  \"{{contains}}\"";
        const validation_equals = "يجب أن يكون {{number}}";
        const validation_file_types = "نوع ملف غير معروف";
        const validation_gt = "يجب أن يكون أكبر من {{number}}";
        const validation_gte = "يجب أن يكون أكبر من أو يساوي {{number}}";
        const validation_lt = "يجب أن يكون أقل من {{number}}";
        const validation_lte = "يجب أن يكون أقل من أو يساوي {{number}}";
        const validation_max_char_length = "يجب أن يكون أصغر من {{max_length}} حرفًا";
        const validation_max_file_size = "يجب أن يكون حجم الملف أصغر من {{max_size}} كيلوبايت";
        const validation_max_option_count = "يُرجى اختيار {{max_count}} من الخيارات على الأكثر";
        const validation_max_ranking_count = "يُرجى اختيار {{max_count}} من الخيارات على الأكثر";
        const validation_max_word_count = "يجب أن يكون أقل من {{max_count}} كلمة";
        const validation_min_char_length = "يجب أن يكون أكبر من {{min_length}} حرفًا";
        const validation_min_option_count = "يُرجى اختيار {{min_count}} خيارات على الأقل";
        const validation_min_ranking_count = "يُرجى اختيار {{min_count}} خيارات على الأقل";
        const validation_min_word_count = "يجب أن يكون أكثر من {{min_count}} كلمة";
        const validation_not_between = "يجب أن يكون أقل من {{lower_limit}} أو أعلى من {{upper_limit}}";
        const validation_not_contains = "يجب ألا يحتوي على  \"{{not_contains}}\"";
        const validation_not_equal = "يجب ألا يكون {{number}}";
        const validation_one_response_per_col = "يُرجى عدم تحديد أكثر من إجابة واحدة لكل عمود";
        const validation_option_count = "الرجاء تحديد {{count}} على الأكثر من الخيارات";
        const validation_pattern = "يجب أن يتطابق مع النمط";
        const validation_pattern_email = "يجب أن تبدو كرسالة بريد إلكتروني";
        const validation_ranking_count = "الرجاء تحديد {{count}} على الأكثر من الخيارات";
        const validation_required = "هذا مطلوب";
        const word_count = "عدد الكلمات: {{count}}";
        const run_ar = {
          cancel: cancel,
          choose_file: choose_file,
          finish: finish,
          lang: lang,
          next: next$1,
          previous: previous,
          error: error$3,
          goBack: goBack$3,
          survey_navigation: survey_navigation,
          processed_errors: processed_errors$3,
          upload: upload,
          preview: preview,
          uploading: uploading,
          validation_between: validation_between,
          validation_contains: validation_contains,
          validation_equals: validation_equals,
          validation_file_types: validation_file_types,
          validation_gt: validation_gt,
          validation_gte: validation_gte,
          validation_lt: validation_lt,
          validation_lte: validation_lte,
          validation_max_char_length: validation_max_char_length,
          validation_max_file_size: validation_max_file_size,
          validation_max_option_count: validation_max_option_count,
          validation_max_ranking_count: validation_max_ranking_count,
          validation_max_word_count: validation_max_word_count,
          validation_min_char_length: validation_min_char_length,
          validation_min_option_count: validation_min_option_count,
          validation_min_ranking_count: validation_min_ranking_count,
          validation_min_word_count: validation_min_word_count,
          validation_not_between: validation_not_between,
          validation_not_contains: validation_not_contains,
          validation_not_equal: validation_not_equal,
          validation_one_response_per_col: validation_one_response_per_col,
          validation_option_count: validation_option_count,
          validation_pattern: validation_pattern,
          validation_pattern_email: validation_pattern_email,
          validation_ranking_count: validation_ranking_count,
          validation_required: validation_required,
          word_count: word_count
        };
        const action_btn$2 = {
          add: "Hinzufügen",
          add_user: "Benutzer hinzufügen",
          cancel: "Stornieren",
          clone: "Klon",
          close: "Schließen",
          "delete": "Löschen",
          save: "Speichern",
          create: "Erstellen"
        };
        const add_user$2 = {
          cancel: "Stornieren",
          roles: "Rollen",
          save: "Speichern",
          title: "Neuen Benutzer hinzufügen"
        };
        const goBack$2 = "Zurückgehen";
        const timezone_info$2 = "Wir verwenden Ihre lokale Zeitzone, um die Ablaufzeit der Umfrage zu berechnen.";
        const timezone_tooltip$2 = "Die Umfrage läuft um 00:00 Uhr am ausgewählten Enddatum in Ihrer lokalen Zeitzone ab";
        const added$2 = "Hinzugefügt:";
        const admins$2 = "admins";
        const analysts$2 = "analysten";
        const base_language_required$2 = "Basissprache ist erforderlich";
        const confirm_password_required$2 = "Sie müssen das Passwort wiederholen";
        const create_survey$2 = {
          title: "Umfrage erstellen",
          empty_state_message: "Keine Umfragen verfügbar.",
          or: "oder",
          empty_state_cta_copy: "um loszulegen!"
        };
        const edit_survey$2 = {
          "export": "Umfrage exportieren",
          close_title: "Umfrage schließen",
          can_lock_survey: "Erlauben Sie Vermessern, die Vermessung zu sperren",
          clone_survey: "Klon-Umfrage",
          count: "Zählen",
          default_survey_url: "Standard-Umfrage-URL",
          close_survey: "Sind Sie sicher, dass Sie {{survey_name}} schließen möchten?",
          delete_survey: "Möchten Sie {{survey_name}} wirklich löschen?",
          general: "Allgemein",
          limit: "Grenze",
          limit_responses: "Begrenzen Sie die Antworten von Vermessern",
          navigation: "Navigation",
          launch: "Start",
          offline: "Offline",
          privacy: "Privatsphäre",
          quotas: "Quoten",
          responses: "antworten",
          sharing: "Teilen",
          social_sharing: "Soziales Teilen",
          status: "Status",
          survey_users: "Benutzer befragen",
          surveyor: "Landvermesserin",
          title: "Umfrage bearbeiten",
          to: "zu",
          metadata: {
            created: "Erstellt",
            last_modified: "Zuletzt geändert",
            start_date: "Startdatum",
            end_date: "Enddatum"
          }
        };
        const edit_user$2 = {
          title: "Benutzer bearbeiten"
        };
        const email_required$2 = "E-Mail ist erforderlich";
        const error$2 = {
          invalid_email: "Ungültige E-Mail",
          invalid_first_name: "Ungültiger Vorname",
          invalid_last_name: "Ungültiger Nachname",
          invalid_password: "Das Passwort muss mindestens 8 Zeichen lang sein und eine Mischung aus Großbuchstaben, Kleinbuchstaben und Zahlen enthalten.",
          incorrect_password: "Das Passwort ist falsch.",
          password_should_match: "Passwort sollte übereinstimmen.",
          first_name_too_long: "Der Vorname darf maximal 50 Zeichen lang sein.",
          last_name_too_long: "Der Nachname darf maximal 50 Zeichen lang sein.",
          at_least_one_role: "Es muss mindestens eine Rolle ausgewählt werden.",
          roles_required: "Rollen sind erforderlich.",
          required: "Is required",
          survey_expired: "Umfrage Abgelaufen"
        };
        const event_response$2 = {
          details: "Einzelheiten",
          direction: "Richtung",
          name: "Name",
          time: "Zeit",
          title: "Antwortereignisse"
        };
        const firstname_required$2 = "Vorname ist erforderlich";
        const forgot_password$2 = {
          helper_text: "Bitte geben Sie die mit Ihrem Konto verknüpfte E-Mail-Adresse ein. Wir senden Ihnen dann einen Link zum Zurücksetzen Ihres Passworts zu.",
          send: "Schicken",
          success: "Ein Link zum Zurücksetzen des Passworts wurde an Ihre E-Mail-Adresse gesendet. Er ist nur eine Stunde lang gültig",
          title: "Passwort vergessen",
          return_to_signin: "Zurück zur Anmeldung"
        };
        const label$2 = {
          additional_languages: "Weitere Sprachen",
          analyst: "Analytikerin",
          apply_quota: "Keine Quote",
          base_language: "Basissprache",
          code: "Code",
          confirm_new_password: "Bestätige neues Passwort",
          current_password: "Aktuelles Passwort",
          email: "Email",
          first_name: "Vorname",
          from: "Aus",
          last_name: "Familienname, Nachname",
          new_password: "Neues Kennwort",
          new_survey_name: "Neuer Umfragename",
          password: "Passwort",
          responses_limit: "Antwortlimit:",
          server_name: "Server Name",
          super_admin: "Höchster Vorgesetzter",
          survey_active: "Umfrage aktiv",
          survey_admin: "Umfrage Admin",
          survey_mode: "Umfragemodus",
          survey_name: "Umfragename",
          surveyor: "Landvermesser",
          surveyor_admin: "Surveyor-Administrator",
          to: "Zu",
          total_responses_limit: "Beantwortungslimit insgesamt: ",
          sort_by: "Sortieren nach"
        };
        const language$2 = {
          ar: "Arabisch",
          de: "Deutsch",
          en: "Englisch"
        };
        const last_modified$2 = "Zuletzt bearbeitet:";
        const lastname_required$2 = "Nachname ist erforderlich";
        const login$2 = {
          dont_have_acc: "Sie haben noch kein Konto?",
          forgot_password: "Passwort vergessen",
          submit: "Anmeldung",
          login: "Anmelden"
        };
        const manage_users = "Manage-Benutzer";
        const mode$2 = {
          mixed: "Web und Offline",
          offline: "Offline",
          web: "Web"
        };
        const my_surveys$2 = "Ihre Umfragen";
        const new_survey$2 = "Neue Umfrage";
        const example_surveys$2 = "Beispielumfragen";
        const create_new_survey$2 = "Neue Umfrage erstellen";
        const copy_example_surveys$2 = "Beispielumfragen kopieren";
        const import_survey$2 = "Umfrage importieren";
        const password_required$2 = "Passwort ist erforderlich";
        const processed_errors$2 = {
          backend_down: "Backend ist nicht erreichbar... Bitte versuchen Sie es später erneut",
          duplicate_email: "E-Mail-Adresse ist bereits registriert.",
          duplicate_survey_name: "Doppelter Umfragename",
          expired_confirmation_token: "Abgelaufenes Bestätigungstoken, bitte erneut registrieren",
          expired_reset_token: "Abgelaufenes Bestätigungstoken, bitte klicken Sie noch einmal auf Passwort vergessen",
          invalid_survey_dates: "Startdatum muss vor Enddatum liegen",
          network_err: "Dieser Browser ist offline",
          survey_closed: "Diese Umfrage ist geschlossen und kann nicht bearbeitet werden",
          unidentified_error: "Unerwarteter Fehler aufgetreten, bitte melden Sie sich an support@qlarr.com",
          used_confirmation_token: "Diese Bestätigung war bereits ein Benutzer. Versuchen Sie, sich mit dem Benutzer anzumelden, den Sie gerade registriert haben",
          wrong_credentials: "Falsche E-Mail oder Passwort",
          wrong_password: "Falsches Passwort",
          component_deleted: "Umfrageelemente können nicht gelöscht werden, nachdem die Umfrage veröffentlicht wurde",
          design_out_of_sync: "Jemand anderes bearbeitet das Umfragedesign",
          wrong_reset_token: "Dieses Reset-Token ist falsch.",
          code_invalid: "Ungültiger Code. Bitte versuchen Sie es erneut.",
          wrong_confirmation_token: "Dieses Bestätigungs-Token ist falsch, bitte registrieren Sie sich noch einmal",
          survey_quota: "Für diese Umfrage werden leider keine Antworten mehr angenommen."
        };
        const processed_successes$2 = {
          copied: "In die Zwischenablage kopiert",
          updated: "Erfolgreich aktualisiert"
        };
        const profile$2 = {
          cancel: "Stornieren",
          change_email: "E-Mail ändern",
          change_password: "Passwort ändern",
          hint: "Wenn Sie Ihre E-Mail-Adresse oder Ihr Passwort ändern, werden Sie abgemeldet",
          password_required: "Aktuelles Passwort ist erforderlich, um Ihre E-Mail oder Ihr Passwort bearbeiten zu können",
          save: "Speichern",
          title: "Profil",
          manage_users: "Benutzer verwalten",
          logout: "Abmelden"
        };
        const registered$2 = "eingetragen";
        const reset_password$2 = {
          reset: "Zurücksetzen",
          title: "Passwort Zurücksetzen"
        };
        const responses$2 = {
          "export": "Antworten exportieren",
          filter_completed: "Erledigte Antworten filtern",
          filter_completed_show_all: "Alle Antworten",
          filter_completed_show_completed: "Nur vollständige Antworten",
          filter_completed_show_incomplete: "Nur unvollständige Antworten",
          filter_preview: "Erledigte Antworten filtern",
          filter_preview_show_actual: "Nur tatsächliche Antworten",
          filter_preview_show_all: "Alle Antworten",
          filter_preview_show_preview: "Nur Vorschau der Antworten",
          ip_addr: "IP-Adresse",
          label_displayed_rows: "{{from}}-{{to}} von {{count}}",
          label_rows_per_page: "Zeilen pro Seite:",
          label_surveys_per_page: "Umfragen pro Seite:",
          lang: "Sprache",
          preview: "Vorschau",
          raw_values: "Rohwerte anzeigen",
          reset_surveyor_filter: "Vermessungsfilter zurücksetzen",
          start_date: "Startdatum",
          submit_date: "Sendedatum",
          title: "Antworten",
          title_delete_response: "Antwort löschen?",
          version: "Version"
        };
        const responses_count$2 = "Antworten";
        const roles_required$2 = "Roles ist erforderlich";
        const status$2 = {
          all: "Alle",
          expired: "Abgelaufen",
          geplant: "Geplant",
          active: "Aktiv",
          closed: "Geschlossen",
          Entwurf: "Entwurf"
        };
        const survey_sort_options$2 = {
          responses_desc: "Höchste Antworten zuerst",
          last_modified_desc: "Zuletzt geändert zuerst"
        };
        const super_admins$2 = "super admins";
        const survey_mode$2 = "Der Umfragemodus ist erforderlich";
        const survey_required$2 = "Name der Umfrage ist erforderlich";
        const file_required$2 = "Bitte wählen Sie eine ZIP-Datei, um eine Umfrage zu importieren";
        const survey_too_long$2 = "Umfrage Name darf nicht länger als 50 Zeichen sein";
        const save_changes$2 = "Änderung speichern";
        const surveyor_auditor$2 = "vermessungsprüfer";
        const surveyors$2 = "vermesser";
        const users_manage$2 = {
          users: "Benutzer",
          add_user: "Benutzer hinzufügen",
          delete_title: "Sind Sie sicher, dass Sie den Benutzer löschen wollen: {{name}} ?",
          email: "Email",
          name: "Name",
          roles: "Rollen",
          title_delete: "Löschen",
          title_edit: "Bearbeiten",
          status: "Status",
          active: "Aktiv",
          invitation_sent: "Einladung gesendet"
        };
        const launch$2 = {
          publish_text: "Vergessen Sie nicht, Ihre Umfrage zu veröffentlichen, um die vorgenommenen Änderungen zu übernehmen.",
          publish: "Veröffentlichen",
          email_link: "E-Mail-Link",
          copy_link: "Link kopieren",
          qr_code: "QR-Code",
          settings: "Einstellungen",
          publish_tooltip: "Ihre Änderungen sind noch nicht live. Veröffentlichen Sie, um Ihre Umfrage für alle zu aktualisieren.",
          publish_error: "Bitte beheben Sie die Fehler in Ihrer Umfrage, bevor Sie beginnen."
        };
        const email$2 = {
          check: "Prüfen Sie Ihre E-Mail",
          confirmation_code1: "Wir haben einen 6-stelligen Bestätigungscode per E-Mail an",
          confirmation_code2: ",bitte geben Sie den Code in das unten stehende Feld ein, um Ihre E-Mail zu bestätigen.",
          verify: "Verifizieren",
          dont_have_code: "Sie haben keinen Code?",
          resend_code: "Code erneut senden",
          code_required: "Code ist erforderlich",
          code_characters: "Der Code muss aus mindestens 6 Zahlen bestehen",
          email_changed: "Ihre E-Mail wurde erfolgreich aktualisiert!"
        };
        const mobile_view$2 = "Die mobile Ansicht wird derzeit nicht unterstützt";
        const mobile_view_working$2 = "Wir arbeiten hart daran, diese Funktion zu ermöglichen!";
        const manage_de = {
          action_btn: action_btn$2,
          add_user: add_user$2,
          goBack: goBack$2,
          timezone_info: timezone_info$2,
          timezone_tooltip: timezone_tooltip$2,
          added: added$2,
          admins: admins$2,
          analysts: analysts$2,
          base_language_required: base_language_required$2,
          confirm_password_required: confirm_password_required$2,
          create_survey: create_survey$2,
          edit_survey: edit_survey$2,
          edit_user: edit_user$2,
          email_required: email_required$2,
          error: error$2,
          event_response: event_response$2,
          firstname_required: firstname_required$2,
          forgot_password: forgot_password$2,
          label: label$2,
          language: language$2,
          last_modified: last_modified$2,
          lastname_required: lastname_required$2,
          login: login$2,
          manage_users: manage_users,
          mode: mode$2,
          my_surveys: my_surveys$2,
          new_survey: new_survey$2,
          example_surveys: example_surveys$2,
          create_new_survey: create_new_survey$2,
          copy_example_surveys: copy_example_surveys$2,
          import_survey: import_survey$2,
          password_required: password_required$2,
          processed_errors: processed_errors$2,
          processed_successes: processed_successes$2,
          profile: profile$2,
          registered: registered$2,
          reset_password: reset_password$2,
          responses: responses$2,
          responses_count: responses_count$2,
          roles_required: roles_required$2,
          status: status$2,
          survey_sort_options: survey_sort_options$2,
          super_admins: super_admins$2,
          survey_mode: survey_mode$2,
          survey_required: survey_required$2,
          file_required: file_required$2,
          survey_too_long: survey_too_long$2,
          save_changes: save_changes$2,
          surveyor_auditor: surveyor_auditor$2,
          surveyors: surveyors$2,
          users_manage: users_manage$2,
          launch: launch$2,
          email: email$2,
          mobile_view: mobile_view$2,
          mobile_view_working: mobile_view_working$2
        };
        const action_btn$1 = {
          add: "Add",
          add_user: "Add User",
          cancel: "Cancel",
          clone: "Clone",
          close: "Close",
          "delete": "Delete",
          save: "Save",
          create: "Create"
        };
        const add_user$1 = {
          cancel: "Cancel",
          roles: "Roles",
          save: "Save",
          title: "Add New User"
        };
        const timezone_info$1 = "We use your local timezone to calculate the survey expiration time.";
        const timezone_tooltip$1 = "The survey will expire at 00:00 on the selected end date in your local timezone";
        const goBack$1 = "Go Back";
        const added$1 = "Added:";
        const admins$1 = "admins";
        const analysts$1 = "analysts";
        const base_language_required$1 = "Base Language is Required";
        const confirm_password_required$1 = "You must repeat password";
        const create_survey$1 = {
          title: "Create Survey",
          empty_state_message: "No surveys available.",
          or: "or",
          empty_state_cta_copy: "to get started!"
        };
        const edit_survey$1 = {
          "export": "Export Survey",
          close_title: "Close Survey",
          can_lock_survey: "Allow surveyors to lock survey",
          clone_survey: "Clone Survey",
          count: "Count",
          default_survey_url: "Default survey URL",
          close_survey: "Are you sure you want to close {{survey_name}}?",
          delete_survey: "Are you sure you want to delete {{survey_name}}?",
          general: "General",
          limit: "Limit",
          limit_responses: "Limit Responses by Surveyors",
          navigation: "Navigation",
          launch: "Launch",
          offline: "Offline",
          privacy: "Privacy",
          quotas: "Quotas",
          responses: "responses",
          sharing: "Sharing",
          social_sharing: "Social Sharing",
          status: "Status",
          survey_users: "Survey Users",
          surveyor: "Surveyor",
          title: "Edit Survey",
          to: "to",
          metadata: {
            created: "Created",
            last_modified: "Last Modified",
            start_date: "Start Date",
            end_date: "End Date"
          }
        };
        const edit_user$1 = {
          title: "Edit User"
        };
        const email_required$1 = "Email is Required";
        const error$1 = {
          invalid_email: "Invalid Email",
          invalid_first_name: "Invalid First Name",
          invalid_last_name: "Invalid Last Name",
          invalid_password: "Password must be at least 8 characters long and include a mix of uppercase letters, lowercase letters, and numbers.",
          incorrect_password: "Password is incorrect.",
          password_should_match: "Password should match",
          first_name_too_long: "First name must be 50 characters or less.",
          last_name_too_long: "Last name must be 50 characters or less.",
          required: "Is required",
          at_least_one_role: "At least one role must be selected.",
          roles_required: "Roles are required.",
          survey_expired: "Survey Expired"
        };
        const event_response$1 = {
          details: "Details",
          direction: "Direction",
          name: "Name",
          time: "Time",
          title: "Response Events"
        };
        const firstname_required$1 = "First Name is Required";
        const forgot_password$1 = {
          helper_text: "Please enter the email address associated with your account and We will email you a link to reset your password.",
          send: "Send",
          success: "A reset password link was sent to your email.. It is valid for only one hour",
          title: "Forgot Password",
          return_to_signin: "Return to sign in"
        };
        const label$1 = {
          additional_languages: "Additional Languages",
          analyst: "Analyst",
          apply_quota: "Apply Quota",
          base_language: "Base Language",
          code: "Code",
          confirm_new_password: "Confirm New Password",
          current_password: "Current Password",
          email: "Email",
          first_name: "First Name",
          from: "From",
          last_name: "Last Name",
          new_password: "New Password",
          new_survey_name: "New Survey Name",
          password: "Password",
          responses_limit: "Responses Limit: ",
          server_name: "Server Name",
          super_admin: "Super Admin",
          survey_active: "Survey Active",
          survey_admin: "Survey Admin",
          survey_mode: "Survey Mode",
          survey_name: "Survey Name",
          surveyor: "Surveyor",
          surveyor_admin: "Surveyor admin",
          to: "To",
          total_responses_limit: "Total Responses Limit: ",
          sort_by: "Sort By"
        };
        const language$1 = {
          ar: "Arabic",
          de: "German",
          en: "English"
        };
        const last_modified$1 = "Last Modified:";
        const lastname_required$1 = "Last Name is Required";
        const login$1 = {
          dont_have_acc: "Don’t have an account?",
          forgot_password: "Forgot password?",
          submit: "Submit",
          login: "Login",
          title: "Sign In"
        };
        const mode$1 = {
          mixed: "Web and Offline",
          offline: "Offline",
          web: "Web"
        };
        const my_surveys$1 = "Your Surveys";
        const new_survey$1 = "New Survey";
        const example_surveys$1 = "Example Surveys";
        const create_new_survey$1 = "Create New Surey";
        const copy_example_surveys$1 = "Copy Example Surveys";
        const import_survey$1 = "Import a survey";
        const password_required$1 = "Password is Required";
        const processed_errors$1 = {
          backend_down: "Backend is Unreachable... Please Try again later",
          duplicate_email: "Email address is already registered.",
          duplicate_survey_name: "Duplicate Survey Name",
          expired_confirmation_token: "Expired Confirmation Token, Please Register Once more",
          expired_reset_token: "Expired Confirmation Token, Please Click on Forgot password once more",
          invalid_survey_dates: "Start Date must be before end date",
          network_err: "This browser is offline",
          survey_closed: "This Survey is closed and cannot be edited",
          unidentified_error: "Unexpected Error occurred, please report to support@qlarr.com",
          used_confirmation_token: "This confirmation was already user. Try to login with the user you just registered",
          wrong_credentials: "Wrong email or password",
          wrong_password: "Wrong password",
          component_deleted: "Cannot delete survey elements after survey was published",
          design_out_of_sync: "Someone else is editing the survey design",
          wrong_reset_token: "This Reset Token is incorrect.",
          wrong_confirmation_token: "This Confirmation Token is incorrect, Please Register Once more",
          code_invalid: "Invalid code. Please try again.",
          survey_quota: "Sorry, this survey is no longer accepting responses."
        };
        const processed_successes$1 = {
          copied: "Copied to clipboard",
          updated: "Updated successfully"
        };
        const profile$1 = {
          cancel: "Cancel",
          change_email: "Change Email",
          change_password: "Change Password",
          hint: "When you change your email or password, you will be logged out",
          password_required: "Current Password is Required to be able to edit your email or password",
          save: "Save",
          title: "Profile",
          manage_users: "Manage Users",
          logout: "Logout"
        };
        const registered$1 = "registered";
        const reset_password$1 = {
          reset: "Reset",
          title: "Reset Password"
        };
        const responses$1 = {
          "export": "Export Responses",
          filter_completed: "Filter Completed Responses",
          filter_completed_show_all: "All Responses",
          filter_completed_show_completed: "Complete Responses only",
          filter_completed_show_incomplete: "Incomplete Responses only",
          filter_preview: "Filter Preview Responses",
          filter_preview_show_actual: "Actual Responses only",
          filter_preview_show_all: "All Responses",
          filter_preview_show_preview: "Preview Responses only",
          ip_addr: "IP Address",
          label_displayed_rows: "{{from}}-{{to}} of {{count}}",
          label_rows_per_page: "Rows per page:",
          label_surveys_per_page: "Surveys per page:",
          lang: "Language",
          preview: "Preview",
          raw_values: "Show Raw Values",
          reset_surveyor_filter: "Reset Surveyor Filter",
          start_date: "Start Date",
          submit_date: "Submit Date",
          title: "Responses",
          title_delete_response: "Delete Response?",
          version: "Version"
        };
        const responses_count$1 = "Responses";
        const roles_required$1 = "Roles is Required";
        const status$1 = {
          all: "All",
          expired: "Expired",
          scheduled: "Scheduled",
          active: "Active",
          closed: "Closed",
          draft: "Draft"
        };
        const survey_sort_options$1 = {
          responses_desc: "Higest Responses First",
          last_modified_desc: "Last Modified First"
        };
        const super_admins$1 = "super admins";
        const survey_mode$1 = "Survey Mode is Required";
        const survey_required$1 = "Survey Name is Required";
        const file_required$1 = "Please select a zip file to import a survey";
        const survey_too_long$1 = "Survey name cannot be longer than 50 characters";
        const save_changes$1 = "Save Changes";
        const surveyor_auditor$1 = "surveyor auditor";
        const surveyors$1 = "surveyors";
        const users_manage$1 = {
          users: "Users",
          add_user: "Add User",
          delete_title: "Are you sure you want to delete user: {{name}} ?",
          email: "Email",
          name: "Name",
          roles: "Roles",
          title_delete: "Delete",
          title_edit: "Edit",
          status: "Status",
          active: "Active",
          invitation_sent: "Invitation Sent"
        };
        const launch$1 = {
          publish_text: "Don’t forget to publish your survey to apply the changes you’ve made.",
          publish: "Publish",
          email_link: "Email Link",
          copy_link: "Copy Link",
          qr_code: "QR Code",
          settings: "Settings",
          publish_tooltip: "Your changes are not live yet. Publish to update your survey for everyone.",
          publish_error: "Please fix the errors in your survey before starting."
        };
        const email$1 = {
          check: "Check Your Email",
          confirmation_code1: "We have emailed a 6-digit confirmation code to",
          confirmation_code2: ", please enter the code in below box to verify your email.",
          verify: "Verify",
          dont_have_code: "Don't have a code?",
          resend_code: "Resend code",
          code_required: "Code is required",
          code_characters: "Code must be at least 6 numbers",
          email_changed: "Your email has been updated successfully!"
        };
        const mobile_view$1 = "Mobile view is currently not supported";
        const mobile_view_working$1 = "We're working hard to enable this feature!";
        const manage_en = {
          action_btn: action_btn$1,
          add_user: add_user$1,
          timezone_info: timezone_info$1,
          timezone_tooltip: timezone_tooltip$1,
          goBack: goBack$1,
          added: added$1,
          admins: admins$1,
          analysts: analysts$1,
          base_language_required: base_language_required$1,
          confirm_password_required: confirm_password_required$1,
          create_survey: create_survey$1,
          edit_survey: edit_survey$1,
          edit_user: edit_user$1,
          email_required: email_required$1,
          error: error$1,
          event_response: event_response$1,
          firstname_required: firstname_required$1,
          forgot_password: forgot_password$1,
          label: label$1,
          language: language$1,
          last_modified: last_modified$1,
          lastname_required: lastname_required$1,
          login: login$1,
          mode: mode$1,
          my_surveys: my_surveys$1,
          new_survey: new_survey$1,
          example_surveys: example_surveys$1,
          create_new_survey: create_new_survey$1,
          copy_example_surveys: copy_example_surveys$1,
          import_survey: import_survey$1,
          password_required: password_required$1,
          processed_errors: processed_errors$1,
          processed_successes: processed_successes$1,
          profile: profile$1,
          registered: registered$1,
          reset_password: reset_password$1,
          responses: responses$1,
          responses_count: responses_count$1,
          roles_required: roles_required$1,
          status: status$1,
          survey_sort_options: survey_sort_options$1,
          super_admins: super_admins$1,
          survey_mode: survey_mode$1,
          survey_required: survey_required$1,
          file_required: file_required$1,
          survey_too_long: survey_too_long$1,
          save_changes: save_changes$1,
          surveyor_auditor: surveyor_auditor$1,
          surveyors: surveyors$1,
          users_manage: users_manage$1,
          launch: launch$1,
          email: email$1,
          mobile_view: mobile_view$1,
          mobile_view_working: mobile_view_working$1
        };
        const action_btn = {
          add: "يضيف",
          add_user: "إضافة مستخدم",
          cancel: "يلغي",
          clone: "استنساخ",
          close: "يغلق",
          "delete": "يمسح",
          save: "يحفظ",
          create: "إنشاء"
        };
        const add_user = {
          cancel: "يلغي",
          roles: "الأدوار",
          save: "يحفظ",
          title: "إضافة مستخدم جديد"
        };
        const added = "تمت الإضافة:";
        const admins = "المسؤولون";
        const goBack = "العودة إلى الوراء";
        const timezone_info = "نحن نستخدم منطقتك الزمنية المحلية لحساب وقت انتهاء صلاحية الاستطلاع.";
        const timezone_tooltip = "ستنتهي صلاحية الاستطلاع في الساعة 00:00 في تاريخ الانتهاء المحدد في منطقتك الزمنية المحلية";
        const analysts = "محللون";
        const base_language_required = "اللغة الأساسية مطلوبة";
        const confirm_password_required = "يجب عليك تكرار كلمة المرور";
        const create_survey = {
          title: "إنشاء الاستبيان",
          empty_state_message: "لا توجد استبيانات متاحة.",
          or: "أو",
          empty_state_cta_copy: "للبدء!"
        };
        const edit_survey = {
          "export": "تصدير الإستطلاع",
          close_title: "إغلاق الاستطلاع",
          can_lock_survey: "السماح للمساحين لقفل المسح",
          clone_survey: "مسح استنساخ",
          count: "عدد",
          default_survey_url: "عنوان URL الافتراضي للاستطلاع",
          close_survey: "هل أنت متأكد أنك تريد إغلاق {{survey_name}}؟",
          delete_survey: "هل أنت متأكد أنك تريد حذف {{survey_name}}؟",
          general: "عام",
          limit: "حد",
          limit_responses: "الحد من الردود من قبل المساحين",
          navigation: "ملاحة",
          launch: "الإطلاق",
          offline: "غير متصل على الانترنت",
          privacy: "خصوصية",
          quotas: "الحصص",
          responses: "استجابات",
          sharing: "مشاركة",
          social_sharing: "مشاركه إجتماعيه",
          status: "حالة",
          survey_users: "مسح المستخدمين",
          surveyor: "مساح",
          title: "تحرير الاستطلاع",
          to: "ل",
          metadata: {
            created: "تم الإنشاء",
            last_modified: "آخر تعديل",
            start_date: "تاريخ البدء",
            end_date: "تاريخ الانتهاء"
          }
        };
        const edit_user = {
          title: "تحرير العضو"
        };
        const email_required = "البريد الإلكتروني مطلوب";
        const error = {
          invalid_email: "بريد إلكتروني غير صالح",
          invalid_first_name: "الاسم الأول غير صالح",
          invalid_last_name: "اسم العائلة غير صالح",
          invalid_password: "يجب ألا يقل طول كلمة المرور عن 8 أحرف وأن تتضمن مزيجًا من الأحرف الكبيرة والأحرف الصغيرة والأرقام.",
          incorrect_password: "كلمة المرور غير صحيحة.",
          password_should_match: "يجب أن تتطابق كلمة المرور",
          first_name_too_long: "يجب أن يكون الاسم الأول 50 حرفًا أو أقل.",
          at_least_one_role: "يجب اختيار دور واحد على الأقل.",
          roles_required: "الأدوار مطلوبة.",
          last_name_too_long: "يجب أن يكون الاسم الأخير 50 حرفًا أو أقل.",
          required: "مطلوب",
          survey_expired: "انتهت صلاحية الاستبيان"
        };
        const event_response = {
          details: "تفاصيل",
          direction: "اتجاه",
          name: "اسم",
          time: "وقت",
          title: "أحداث الاستجابة"
        };
        const firstname_required = "الاسم الأول مطلوب";
        const forgot_password = {
          helper_text: "يُرجى إدخال عنوان البريد الإلكتروني المرتبط بحسابك وسنرسل لك رابطًا عبر البريد الإلكتروني لإعادة تعيين كلمة المرور الخاصة بك.",
          send: "إرسال",
          success: "تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني .. وهو صالح لمدة ساعة واحدة فقط",
          title: "نسيت كلمة المرور",
          return_to_signin: "العودة إلى تسجيل الدخول"
        };
        const label = {
          additional_languages: "لغات إضافية",
          analyst: "المحلل",
          apply_quota: "تطبيق الحصة النسبية",
          base_language: "لغة الأساس",
          code: "كود",
          confirm_new_password: "تأكيد كلمة المرور الجديدة",
          current_password: "كلمة السر الحالية",
          email: "البريد الإلكتروني",
          first_name: "الاسم الأول",
          from: "من",
          last_name: "اسم العائلة",
          new_password: "كلمة المرور الجديدة",
          new_survey_name: "اسم الاستطلاع الجديد",
          password: "كلمة المرور",
          responses_limit: "حد الاستجابات:",
          server_name: "اسم الخادم",
          super_admin: "مشرف فائق",
          survey_active: "المسح نشط",
          survey_admin: "مسؤول المسح",
          survey_mode: "وضع المسح",
          survey_name: "اسم الاستطلاع",
          surveyor: "مساح",
          surveyor_admin: "مشرف المساح",
          to: "ل",
          total_responses_limit: "حد الردود الإجمالي:",
          sort_by: "ترتيب حسب"
        };
        const language = {
          ar: "عربي",
          de: "ألمانية",
          en: "إنجليزي"
        };
        const last_modified = "آخر تعديل:";
        const lastname_required = "إسم العائلة مطلوب";
        const login = {
          dont_have_acc: "ليس لديك حساب حتى الآن؟",
          forgot_password: "نسيت كلمة المرور",
          submit: "إرسال تقديم",
          title: "تسجيل الدخول",
          login: "تسجيل الدخول"
        };
        const mode = {
          mixed: "عبر الإنترنت والجوال",
          offline: "متحرك",
          web: "متصل"
        };
        const my_surveys = "استبياناتك";
        const new_survey = "استبيان جديد";
        const example_surveys = "نماذج إستطلاع";
        const create_new_survey = "إنشاء استطلاع جديد";
        const copy_example_surveys = "نسخ نماذج إستطلاع";
        const import_survey = "تحميل استطلاع";
        const password_required = "كلمة المرور مطلوبة";
        const processed_errors = {
          backend_down: "الخلفية لا يمكن الوصول إليها ... يرجى المحاولة مرة أخرى لاحقًا",
          duplicate_email: "عنوان البريد الإلكتروني مسجل بالفعل.",
          duplicate_survey_name: "تكرار اسم الاستطلاع",
          expired_confirmation_token: "رمز التأكيد منتهي الصلاحية , الرجاء التسجيل مرة أخرى",
          expired_reset_token: "رمز التأكيد منتهي الصلاحية , الرجاء النقر فوق نسيت كلمة المرور مرة أخرى",
          invalid_survey_dates: "يجب أن يكون تاريخ البدء قبل تاريخ الانتهاء",
          network_err: "هذا المتصفح غير متصل",
          survey_closed: "هذا الاستطلاع مغلق ولا يمكن تعديله",
          unidentified_error: "حدث خطأ غير متوقع ، يرجى إبلاغ support@qlarr.com",
          used_confirmation_token: "هذا التأكيد كان مستخدمًا بالفعل. حاول تسجيل الدخول مع المستخدم الذي قمت بتسجيله للتو",
          wrong_credentials: "البريد الإلكتروني أو كلمة المرور خاطئة",
          wrong_password: " كلمة مرور خاطئة",
          component_deleted: "لا يمكن حذف عناصر الاستطلاع بعد نشر الاستطلاع",
          design_out_of_sync: "يقوم شخص آخر بتحرير تصميم الاستطلاع",
          wrong_reset_token: "رمز إعادة التعيين هذا غير صحيح.",
          code_invalid: "الرمز غير صالح. يرجى المحاولة مرة أخرى.",
          wrong_confirmation_token: "رمز التأكيد هذا غير صحيح، يرجى التسجيل مرة أخرى",
          survey_quota: "عذرًا، لم يعد هذا الاستبيان يقبل الردود."
        };
        const processed_successes = {
          copied: "نسخ إلى الحافظة",
          updated: "تم التحديث بنجاح"
        };
        const profile = {
          cancel: "يلغي",
          change_email: "تغيير البريد الإلكتروني",
          change_password: "تغيير كلمة المرور",
          hint: "عندما تقوم بتغيير بريدك الإلكتروني أو كلمة المرور الخاصة بك , سيتم تسجيل خروجك",
          password_required: "كلمة المرور الحالية مطلوبة لتتمكن من تعديل بريدك الإلكتروني أو كلمة المرور",
          save: "يحفظ",
          title: "حساب تعريفي",
          manage_users: "إدارة المستخدمين",
          logout: "تسجيل الخروج"
        };
        const registered = "مسجلة";
        const reset_password = {
          reset: "إعادة تعيين",
          title: "إعادة تعيين كلمة المرور"
        };
        const responses = {
          "export": "تصدير الردود",
          filter_completed: "استجابات الفلتر المكتملة",
          filter_completed_show_all: "كل الردود",
          filter_completed_show_completed: "الردود الكاملة فقط",
          filter_completed_show_incomplete: "الردود غير المكتملة فقط",
          filter_preview: "تصفية الردود المكتملة",
          filter_preview_show_actual: "الردود الفعلية فقط",
          filter_preview_show_all: "كل الردود",
          filter_preview_show_preview: "معاينة الردود فقط",
          ip_addr: "عنوان IP",
          label_displayed_rows: "{{from}} - {{to}} من {{count}}",
          label_rows_per_page: "عدد الصفوف في كل صفحة:",
          label_surveys_per_page: "الاستطلاعات لكل صفحة:",
          lang: "اللغة",
          preview: "معاينة",
          raw_values: "إظهار القيم الأولية",
          reset_surveyor_filter: "إعادة تعيين عامل تصفية المساح",
          start_date: "تاريخ البدء",
          submit_date: "تاريخ الإرسال",
          title: "الردود",
          title_delete_response: "حذف الرد؟",
          version: "الإصدار"
        };
        const responses_count = "الردود";
        const roles_required = "الأدوار مطلوبة";
        const status = {
          all: "all",
          expired: "انتهت صلاحيتها",
          scheduled: "مجدول",
          active: "نشط",
          closed: "مغلق",
          draft: "مسودة"
        };
        const survey_sort_options = {
          responses_desc: "أعلى الردود أولاً",
          last_modified_desc: "آخر تعديل أولاً"
        };
        const super_admins = "المشرفون المتميزون";
        const survey_mode = "وضع الاستطلاع مطلوب";
        const survey_required = "اسم الاستطلاع مطلوب";
        const file_required = "يرجى اختيار ملف ZIP لتحميل استطلاع";
        const survey_too_long = "لا يمكن أن يكون اسم الاستطلاع أطول من 50 حرفًا";
        const surveyor_auditor = "مدقق مساح";
        const save_changes = "حفظ التغيير";
        const surveyors = "مساحون";
        const users_manage = {
          users: "المستخدمون",
          add_user: "إضافة مستخدم",
          delete_title: "هل أنت متأكد أنك تريد حذف المستخدم: {{name}} ؟",
          email: "بريد إلكتروني",
          name: "اسم",
          roles: "رولين",
          title_delete: "يمسح",
          title_edit: "يحرر",
          status: "الحالة",
          active: "نشط",
          invitation_sent: "تم إرسال الدعوة"
        };
        const launch = {
          publish_text: "لا تنس نشر استبيانك لتطبيق التغييرات التي أجريتها.",
          publish: "النشر",
          email_link: "رابط البريد الإلكتروني",
          copy_link: "نسخ الرابط",
          qr_code: "رمز الاستجابة السريعة",
          settings: "الإعدادات",
          publish_tooltip: "تغييراتك لم يتم نشرها بعد. انشر لتحديث الاستطلاع الخاص بك للجميع.",
          publish_error: "يرجى إصلاح الأخطاء في الاستبيان قبل البدء."
        };
        const email = {
          check: "تحقق من بريدك الإلكتروني",
          confirmation_code1: "لقد قمنا بإرسال رمز تأكيد مكون من 6 أرقام عبر البريد الإلكتروني إلى",
          confirmation_code2: "، يرجى إدخال الرمز في المربع أدناه للتحقق من بريدك الإلكتروني.",
          verify: "تحقق",
          dont_have_code: "ليس لديك رمز؟",
          resend_code: "إعادة إرسال الرمز",
          code_required: "الرمز مطلوب",
          code_characters: "يجب أن يكون الرمز 6 أرقام على الأقل",
          email_changed: "تم تحديث بريدك الإلكتروني بنجاح!"
        };
        const mobile_view = "العرض على الهاتف المحمول غير مدعوم حاليًا";
        const mobile_view_working = "نحن نعمل بجد لتفعيل هذه الميزة!";
        const manage_ar = {
          action_btn: action_btn,
          add_user: add_user,
          added: added,
          admins: admins,
          goBack: goBack,
          timezone_info: timezone_info,
          timezone_tooltip: timezone_tooltip,
          analysts: analysts,
          base_language_required: base_language_required,
          confirm_password_required: confirm_password_required,
          create_survey: create_survey,
          edit_survey: edit_survey,
          edit_user: edit_user,
          email_required: email_required,
          error: error,
          event_response: event_response,
          firstname_required: firstname_required,
          forgot_password: forgot_password,
          label: label,
          language: language,
          last_modified: last_modified,
          lastname_required: lastname_required,
          login: login,
          mode: mode,
          my_surveys: my_surveys,
          new_survey: new_survey,
          example_surveys: example_surveys,
          create_new_survey: create_new_survey,
          copy_example_surveys: copy_example_surveys,
          import_survey: import_survey,
          password_required: password_required,
          processed_errors: processed_errors,
          processed_successes: processed_successes,
          profile: profile,
          registered: registered,
          reset_password: reset_password,
          responses: responses,
          responses_count: responses_count,
          roles_required: roles_required,
          status: status,
          survey_sort_options: survey_sort_options,
          super_admins: super_admins,
          survey_mode: survey_mode,
          survey_required: survey_required,
          file_required: file_required,
          survey_too_long: survey_too_long,
          surveyor_auditor: surveyor_auditor,
          save_changes: save_changes,
          surveyors: surveyors,
          users_manage: users_manage,
          launch: launch,
          email: email,
          mobile_view: mobile_view,
          mobile_view_working: mobile_view_working
        };
        const scriptRel = 'modulepreload';
        const assetsURL = function assetsURL(dep) {
          return "/" + dep;
        };
        const seen = {};
        const __vitePreload = exports("z", function preload(baseModule, deps, importerUrl) {
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
            var _iterator5 = _createForOfIteratorHelper(res || []),
              _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                const item = _step5.value;
                if (item.status !== "rejected") continue;
                handlePreloadError(item.reason);
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
            return baseModule().catch(handlePreloadError);
          });
        });
        var isDevelopment$2 = false;

        /*
         Based off glamor's StyleSheet, thanks Sunil ❤️
         high performance StyleSheet for css-in-js systems
         - uses multiple style tags behind the scenes for millions of rules
        - uses `insertRule` for appending in production for *much* faster performance
         // usage
         import { StyleSheet } from '@emotion/sheet'
         let styleSheet = new StyleSheet({ key: '', container: document.head })
         styleSheet.insert('#box { border: 1px solid red; }')
        - appends a css rule into the stylesheet
         styleSheet.flush()
        - empties the stylesheet of all its contents
         */

        function sheetForTag(tag) {
          if (tag.sheet) {
            return tag.sheet;
          } // this weirdness brought to you by firefox

          /* istanbul ignore next */

          for (var i = 0; i < document.styleSheets.length; i++) {
            if (document.styleSheets[i].ownerNode === tag) {
              return document.styleSheets[i];
            }
          } // this function should always return with a value
          // TS can't understand it though so we make it stop complaining here

          return undefined;
        }
        function createStyleElement(options) {
          var tag = document.createElement('style');
          tag.setAttribute('data-emotion', options.key);
          if (options.nonce !== undefined) {
            tag.setAttribute('nonce', options.nonce);
          }
          tag.appendChild(document.createTextNode(''));
          tag.setAttribute('data-s', '');
          return tag;
        }
        var StyleSheet = /*#__PURE__*/function () {
          // Using Node instead of HTMLElement since container may be a ShadowRoot
          function StyleSheet(options) {
            var _this = this;
            this._insertTag = function (tag) {
              var before;
              if (_this.tags.length === 0) {
                if (_this.insertionPoint) {
                  before = _this.insertionPoint.nextSibling;
                } else if (_this.prepend) {
                  before = _this.container.firstChild;
                } else {
                  before = _this.before;
                }
              } else {
                before = _this.tags[_this.tags.length - 1].nextSibling;
              }
              _this.container.insertBefore(tag, before);
              _this.tags.push(tag);
            };
            this.isSpeedy = options.speedy === undefined ? !isDevelopment$2 : options.speedy;
            this.tags = [];
            this.ctr = 0;
            this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

            this.key = options.key;
            this.container = options.container;
            this.prepend = options.prepend;
            this.insertionPoint = options.insertionPoint;
            this.before = null;
          }
          var _proto = StyleSheet.prototype;
          _proto.hydrate = function hydrate(nodes) {
            nodes.forEach(this._insertTag);
          };
          _proto.insert = function insert(rule) {
            // the max length is how many rules we have per style tag, it's 65000 in speedy mode
            // it's 1 in dev because we insert source maps that map a single rule to a location
            // and you can only have one source map per style tag
            if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
              this._insertTag(createStyleElement(this));
            }
            var tag = this.tags[this.tags.length - 1];
            if (this.isSpeedy) {
              var sheet = sheetForTag(tag);
              try {
                // this is the ultrafast version, works across browsers
                // the big drawback is that the css won't be editable in devtools
                sheet.insertRule(rule, sheet.cssRules.length);
              } catch (e) {}
            } else {
              tag.appendChild(document.createTextNode(rule));
            }
            this.ctr++;
          };
          _proto.flush = function flush() {
            this.tags.forEach(function (tag) {
              var _tag$parentNode;
              return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
            });
            this.tags = [];
            this.ctr = 0;
          };
          return StyleSheet;
        }();
        var MS = '-ms-';
        var MOZ = '-moz-';
        var WEBKIT = '-webkit-';
        var COMMENT = 'comm';
        var RULESET = 'rule';
        var DECLARATION = 'decl';
        var IMPORT = '@import';
        var KEYFRAMES = '@keyframes';
        var LAYER = '@layer';

        /**
         * @param {number}
         * @return {number}
         */
        var abs = Math.abs;

        /**
         * @param {number}
         * @return {string}
         */
        var from = String.fromCharCode;

        /**
         * @param {object}
         * @return {object}
         */
        var assign = Object.assign;

        /**
         * @param {string} value
         * @param {number} length
         * @return {number}
         */
        function hash(value, length) {
          return charat(value, 0) ^ 45 ? (((length << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
        }

        /**
         * @param {string} value
         * @return {string}
         */
        function trim(value) {
          return value.trim();
        }

        /**
         * @param {string} value
         * @param {RegExp} pattern
         * @return {string?}
         */
        function match(value, pattern) {
          return (value = pattern.exec(value)) ? value[0] : value;
        }

        /**
         * @param {string} value
         * @param {(string|RegExp)} pattern
         * @param {string} replacement
         * @return {string}
         */
        function replace(value, pattern, replacement) {
          return value.replace(pattern, replacement);
        }

        /**
         * @param {string} value
         * @param {string} search
         * @return {number}
         */
        function indexof(value, search) {
          return value.indexOf(search);
        }

        /**
         * @param {string} value
         * @param {number} index
         * @return {number}
         */
        function charat(value, index) {
          return value.charCodeAt(index) | 0;
        }

        /**
         * @param {string} value
         * @param {number} begin
         * @param {number} end
         * @return {string}
         */
        function substr(value, begin, end) {
          return value.slice(begin, end);
        }

        /**
         * @param {string} value
         * @return {number}
         */
        function strlen(value) {
          return value.length;
        }

        /**
         * @param {any[]} value
         * @return {number}
         */
        function sizeof(value) {
          return value.length;
        }

        /**
         * @param {any} value
         * @param {any[]} array
         * @return {any}
         */
        function append(value, array) {
          return array.push(value), value;
        }

        /**
         * @param {string[]} array
         * @param {function} callback
         * @return {string}
         */
        function combine(array, callback) {
          return array.map(callback).join('');
        }
        var line = 1;
        var column = 1;
        var length = 0;
        var position = 0;
        var character = 0;
        var characters = '';

        /**
         * @param {string} value
         * @param {object | null} root
         * @param {object | null} parent
         * @param {string} type
         * @param {string[] | string} props
         * @param {object[] | string} children
         * @param {number} length
         */
        function node(value, root, parent, type, props, children, length) {
          return {
            value: value,
            root: root,
            parent: parent,
            type: type,
            props: props,
            children: children,
            line: line,
            column: column,
            length: length,
            return: ''
          };
        }

        /**
         * @param {object} root
         * @param {object} props
         * @return {object}
         */
        function copy(root, props) {
          return assign(node('', null, null, '', null, null, 0), root, {
            length: -root.length
          }, props);
        }

        /**
         * @return {number}
         */
        function char() {
          return character;
        }

        /**
         * @return {number}
         */
        function prev() {
          character = position > 0 ? charat(characters, --position) : 0;
          if (column--, character === 10) column = 1, line--;
          return character;
        }

        /**
         * @return {number}
         */
        function next() {
          character = position < length ? charat(characters, position++) : 0;
          if (column++, character === 10) column = 1, line++;
          return character;
        }

        /**
         * @return {number}
         */
        function peek() {
          return charat(characters, position);
        }

        /**
         * @return {number}
         */
        function caret() {
          return position;
        }

        /**
         * @param {number} begin
         * @param {number} end
         * @return {string}
         */
        function slice(begin, end) {
          return substr(characters, begin, end);
        }

        /**
         * @param {number} type
         * @return {number}
         */
        function token(type) {
          switch (type) {
            // \0 \t \n \r \s whitespace token
            case 0:
            case 9:
            case 10:
            case 13:
            case 32:
              return 5;
            // ! + , / > @ ~ isolate token
            case 33:
            case 43:
            case 44:
            case 47:
            case 62:
            case 64:
            case 126:
            // ; { } breakpoint token
            case 59:
            case 123:
            case 125:
              return 4;
            // : accompanied token
            case 58:
              return 3;
            // " ' ( [ opening delimit token
            case 34:
            case 39:
            case 40:
            case 91:
              return 2;
            // ) ] closing delimit token
            case 41:
            case 93:
              return 1;
          }
          return 0;
        }

        /**
         * @param {string} value
         * @return {any[]}
         */
        function alloc(value) {
          return line = column = 1, length = strlen(characters = value), position = 0, [];
        }

        /**
         * @param {any} value
         * @return {any}
         */
        function dealloc(value) {
          return characters = '', value;
        }

        /**
         * @param {number} type
         * @return {string}
         */
        function delimit(type) {
          return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
        }

        /**
         * @param {number} type
         * @return {string}
         */
        function whitespace(type) {
          while (character = peek()) if (character < 33) next();else break;
          return token(type) > 2 || token(character) > 3 ? '' : ' ';
        }

        /**
         * @param {number} index
         * @param {number} count
         * @return {string}
         */
        function escaping(index, count) {
          while (--count && next())
          // not 0-9 A-F a-f
          if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
          return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
        }

        /**
         * @param {number} type
         * @return {number}
         */
        function delimiter(type) {
          while (next()) switch (character) {
            // ] ) " '
            case type:
              return position;
            // " '
            case 34:
            case 39:
              if (type !== 34 && type !== 39) delimiter(character);
              break;
            // (
            case 40:
              if (type === 41) delimiter(type);
              break;
            // \
            case 92:
              next();
              break;
          }
          return position;
        }

        /**
         * @param {number} type
         * @param {number} index
         * @return {number}
         */
        function commenter(type, index) {
          while (next())
          // //
          if (type + character === 47 + 10) break;
          // /*
          else if (type + character === 42 + 42 && peek() === 47) break;
          return '/*' + slice(index, position - 1) + '*' + from(type === 47 ? type : next());
        }

        /**
         * @param {number} index
         * @return {string}
         */
        function identifier(index) {
          while (!token(peek())) next();
          return slice(index, position);
        }

        /**
         * @param {string} value
         * @return {object[]}
         */
        function compile(value) {
          return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value));
        }

        /**
         * @param {string} value
         * @param {object} root
         * @param {object?} parent
         * @param {string[]} rule
         * @param {string[]} rules
         * @param {string[]} rulesets
         * @param {number[]} pseudo
         * @param {number[]} points
         * @param {string[]} declarations
         * @return {object}
         */
        function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
          var index = 0;
          var offset = 0;
          var length = pseudo;
          var atrule = 0;
          var property = 0;
          var previous = 0;
          var variable = 1;
          var scanning = 1;
          var ampersand = 1;
          var character = 0;
          var type = '';
          var props = rules;
          var children = rulesets;
          var reference = rule;
          var characters = type;
          while (scanning) switch (previous = character, character = next()) {
            // (
            case 40:
              if (previous != 108 && charat(characters, length - 1) == 58) {
                if (indexof(characters += replace(delimit(character), '&', '&\f'), '&\f') != -1) ampersand = -1;
                break;
              }
            // " ' [
            case 34:
            case 39:
            case 91:
              characters += delimit(character);
              break;
            // \t \n \r \s
            case 9:
            case 10:
            case 13:
            case 32:
              characters += whitespace(previous);
              break;
            // \
            case 92:
              characters += escaping(caret() - 1, 7);
              continue;
            // /
            case 47:
              switch (peek()) {
                case 42:
                case 47:
                  append(comment(commenter(next(), caret()), root, parent), declarations);
                  break;
                default:
                  characters += '/';
              }
              break;
            // {
            case 123 * variable:
              points[index++] = strlen(characters) * ampersand;
            // } ; \0
            case 125 * variable:
            case 59:
            case 0:
              switch (character) {
                // \0 }
                case 0:
                case 125:
                  scanning = 0;
                // ;
                case 59 + offset:
                  if (ampersand == -1) characters = replace(characters, /\f/g, '');
                  if (property > 0 && strlen(characters) - length) append(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2), declarations);
                  break;
                // @ ;
                case 59:
                  characters += ';';
                // { rule/at-rule
                default:
                  append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);
                  if (character === 123) if (offset === 0) parse(characters, root, reference, reference, props, rulesets, length, points, children);else switch (atrule === 99 && charat(characters, 3) === 110 ? 100 : atrule) {
                    // d l m s
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
                      break;
                    default:
                      parse(characters, reference, reference, reference, [''], children, 0, points, children);
                  }
              }
              index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
              break;
            // :
            case 58:
              length = 1 + strlen(characters), property = previous;
            default:
              if (variable < 1) if (character == 123) --variable;else if (character == 125 && variable++ == 0 && prev() == 125) continue;
              switch (characters += from(character), character * variable) {
                // &
                case 38:
                  ampersand = offset > 0 ? 1 : (characters += '\f', -1);
                  break;
                // ,
                case 44:
                  points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
                  break;
                // @
                case 64:
                  // -
                  if (peek() === 45) characters += delimit(next());
                  atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
                  break;
                // -
                case 45:
                  if (previous === 45 && strlen(characters) == 2) variable = 0;
              }
          }
          return rulesets;
        }

        /**
         * @param {string} value
         * @param {object} root
         * @param {object?} parent
         * @param {number} index
         * @param {number} offset
         * @param {string[]} rules
         * @param {number[]} points
         * @param {string} type
         * @param {string[]} props
         * @param {string[]} children
         * @param {number} length
         * @return {object}
         */
        function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length) {
          var post = offset - 1;
          var rule = offset === 0 ? rules : [''];
          var size = sizeof(rule);
          for (var i = 0, j = 0, k = 0; i < index; ++i) for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x) if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x]))) props[k++] = z;
          return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length);
        }

        /**
         * @param {number} value
         * @param {object} root
         * @param {object?} parent
         * @return {object}
         */
        function comment(value, root, parent) {
          return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
        }

        /**
         * @param {string} value
         * @param {object} root
         * @param {object?} parent
         * @param {number} length
         * @return {object}
         */
        function declaration(value, root, parent, length) {
          return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length);
        }

        /**
         * @param {object[]} children
         * @param {function} callback
         * @return {string}
         */
        function serialize(children, callback) {
          var output = '';
          var length = sizeof(children);
          for (var i = 0; i < length; i++) output += callback(children[i], i, children, callback) || '';
          return output;
        }

        /**
         * @param {object} element
         * @param {number} index
         * @param {object[]} children
         * @param {function} callback
         * @return {string}
         */
        function stringify(element, index, children, callback) {
          switch (element.type) {
            case LAYER:
              if (element.children.length) break;
            case IMPORT:
            case DECLARATION:
              return element.return = element.return || element.value;
            case COMMENT:
              return '';
            case KEYFRAMES:
              return element.return = element.value + '{' + serialize(element.children, callback) + '}';
            case RULESET:
              element.value = element.props.join(',');
          }
          return strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : '';
        }

        /**
         * @param {function[]} collection
         * @return {function}
         */
        function middleware(collection) {
          var length = sizeof(collection);
          return function (element, index, children, callback) {
            var output = '';
            for (var i = 0; i < length; i++) output += collection[i](element, index, children, callback) || '';
            return output;
          };
        }

        /**
         * @param {function} callback
         * @return {function}
         */
        function rulesheet(callback) {
          return function (element) {
            if (!element.root) if (element = element.return) callback(element);
          };
        }
        function memoize$1(fn) {
          var cache = Object.create(null);
          return function (arg) {
            if (cache[arg] === undefined) cache[arg] = fn(arg);
            return cache[arg];
          };
        }
        var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
          var previous = 0;
          var character = 0;
          while (true) {
            previous = character;
            character = peek(); // &\f

            if (previous === 38 && character === 12) {
              points[index] = 1;
            }
            if (token(character)) {
              break;
            }
            next();
          }
          return slice(begin, position);
        };
        var toRules = function toRules(parsed, points) {
          // pretend we've started with a comma
          var index = -1;
          var character = 44;
          do {
            switch (token(character)) {
              case 0:
                // &\f
                if (character === 38 && peek() === 12) {
                  // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
                  // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
                  // and when it should just concatenate the outer and inner selectors
                  // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
                  points[index] = 1;
                }
                parsed[index] += identifierWithPointTracking(position - 1, points, index);
                break;
              case 2:
                parsed[index] += delimit(character);
                break;
              case 4:
                // comma
                if (character === 44) {
                  // colon
                  parsed[++index] = peek() === 58 ? '&\f' : '';
                  points[index] = parsed[index].length;
                  break;
                }

              // fallthrough

              default:
                parsed[index] += from(character);
            }
          } while (character = next());
          return parsed;
        };
        var getRules = function getRules(value, points) {
          return dealloc(toRules(alloc(value), points));
        }; // WeakSet would be more appropriate, but only WeakMap is supported in IE11

        var fixedElements = /* #__PURE__ */new WeakMap();
        var compat = function compat(element) {
          if (element.type !== 'rule' || !element.parent ||
          // positive .length indicates that this rule contains pseudo
          // negative .length indicates that this rule has been already prefixed
          element.length < 1) {
            return;
          }
          var value = element.value,
            parent = element.parent;
          var isImplicitRule = element.column === parent.column && element.line === parent.line;
          while (parent.type !== 'rule') {
            parent = parent.parent;
            if (!parent) return;
          } // short-circuit for the simplest case

          if (element.props.length === 1 && value.charCodeAt(0) !== 58
          /* colon */ && !fixedElements.get(parent)) {
            return;
          } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
          // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"

          if (isImplicitRule) {
            return;
          }
          fixedElements.set(element, true);
          var points = [];
          var rules = getRules(value, points);
          var parentRules = parent.props;
          for (var i = 0, k = 0; i < rules.length; i++) {
            for (var j = 0; j < parentRules.length; j++, k++) {
              element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
            }
          }
        };
        var removeLabel = function removeLabel(element) {
          if (element.type === 'decl') {
            var value = element.value;
            if (
            // charcode for l
            value.charCodeAt(0) === 108 &&
            // charcode for b
            value.charCodeAt(2) === 98) {
              // this ignores label
              element["return"] = '';
              element.value = '';
            }
          }
        };

        /* eslint-disable no-fallthrough */

        function prefix(value, length) {
          switch (hash(value, length)) {
            // color-adjust
            case 5103:
              return WEBKIT + 'print-' + value + value;
            // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

            case 5737:
            case 4201:
            case 3177:
            case 3433:
            case 1641:
            case 4457:
            case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

            case 5572:
            case 6356:
            case 5844:
            case 3191:
            case 6645:
            case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

            case 6391:
            case 5879:
            case 5623:
            case 6135:
            case 4599:
            case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

            case 4215:
            case 6389:
            case 5109:
            case 5365:
            case 5621:
            case 3829:
              return WEBKIT + value + value;
            // appearance, user-select, transform, hyphens, text-size-adjust

            case 5349:
            case 4246:
            case 4810:
            case 6968:
            case 2756:
              return WEBKIT + value + MOZ + value + MS + value + value;
            // flex, flex-direction

            case 6828:
            case 4268:
              return WEBKIT + value + MS + value + value;
            // order

            case 6165:
              return WEBKIT + value + MS + 'flex-' + value + value;
            // align-items

            case 5187:
              return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + value;
            // align-self

            case 5443:
              return WEBKIT + value + MS + 'flex-item-' + replace(value, /flex-|-self/, '') + value;
            // align-content

            case 4675:
              return WEBKIT + value + MS + 'flex-line-pack' + replace(value, /align-content|flex-|-self/, '') + value;
            // flex-shrink

            case 5548:
              return WEBKIT + value + MS + replace(value, 'shrink', 'negative') + value;
            // flex-basis

            case 5292:
              return WEBKIT + value + MS + replace(value, 'basis', 'preferred-size') + value;
            // flex-grow

            case 6060:
              return WEBKIT + 'box-' + replace(value, '-grow', '') + WEBKIT + value + MS + replace(value, 'grow', 'positive') + value;
            // transition

            case 4554:
              return WEBKIT + replace(value, /([^-])(transform)/g, '$1' + WEBKIT + '$2') + value;
            // cursor

            case 6187:
              return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'), value, '') + value;
            // background, background-image

            case 5495:
            case 3959:
              return replace(value, /(image-set\([^]*)/, WEBKIT + '$1' + '$`$1');
            // justify-content

            case 4968:
              return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + WEBKIT + value + value;
            // (margin|padding)-inline-(start|end)

            case 4095:
            case 3583:
            case 4068:
            case 2532:
              return replace(value, /(.+)-inline(.+)/, WEBKIT + '$1$2') + value;
            // (min|max)?(width|height|inline-size|block-size)

            case 8116:
            case 7059:
            case 5753:
            case 5535:
            case 5445:
            case 5701:
            case 4933:
            case 4677:
            case 5533:
            case 5789:
            case 5021:
            case 4765:
              // stretch, max-content, min-content, fill-available
              if (strlen(value) - 1 - length > 6) switch (charat(value, length + 1)) {
                // (m)ax-content, (m)in-content
                case 109:
                  // -
                  if (charat(value, length + 4) !== 45) break;
                // (f)ill-available, (f)it-content

                case 102:
                  return replace(value, /(.+:)(.+)-([^]+)/, '$1' + WEBKIT + '$2-$3' + '$1' + MOZ + (charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
                // (s)tretch

                case 115:
                  return ~indexof(value, 'stretch') ? prefix(replace(value, 'stretch', 'fill-available'), length) + value : value;
              }
              break;
            // position: sticky

            case 4949:
              // (s)ticky?
              if (charat(value, length + 1) !== 115) break;
            // display: (flex|inline-flex)

            case 6444:
              switch (charat(value, strlen(value) - 3 - (~indexof(value, '!important') && 10))) {
                // stic(k)y
                case 107:
                  return replace(value, ':', ':' + WEBKIT) + value;
                // (inline-)?fl(e)x

                case 101:
                  return replace(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + WEBKIT + (charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + WEBKIT + '$2$3' + '$1' + MS + '$2box$3') + value;
              }
              break;
            // writing-mode

            case 5936:
              switch (charat(value, length + 11)) {
                // vertical-l(r)
                case 114:
                  return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
                // vertical-r(l)

                case 108:
                  return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
                // horizontal(-)tb

                case 45:
                  return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
              }
              return WEBKIT + value + MS + value + value;
          }
          return value;
        }
        var prefixer = function prefixer(element, index, children, callback) {
          if (element.length > -1) if (!element["return"]) switch (element.type) {
            case DECLARATION:
              element["return"] = prefix(element.value, element.length);
              break;
            case KEYFRAMES:
              return serialize([copy(element, {
                value: replace(element.value, '@', '@' + WEBKIT)
              })], callback);
            case RULESET:
              if (element.length) return combine(element.props, function (value) {
                switch (match(value, /(::plac\w+|:read-\w+)/)) {
                  // :read-(only|write)
                  case ':read-only':
                  case ':read-write':
                    return serialize([copy(element, {
                      props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]
                    })], callback);
                  // :placeholder

                  case '::placeholder':
                    return serialize([copy(element, {
                      props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]
                    }), copy(element, {
                      props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]
                    }), copy(element, {
                      props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]
                    })], callback);
                }
                return '';
              });
          }
        };
        var defaultStylisPlugins = [prefixer];
        var createCache = exports("v", function /*: EmotionCache */
        createCache(options
        /*: Options */) {
          var key = options.key;
          if (key === 'css') {
            var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
            // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
            // note this very very intentionally targets all style elements regardless of the key to ensure
            // that creating a cache works inside of render of a React component

            Array.prototype.forEach.call(ssrStyles, function (node
            /*: HTMLStyleElement */) {
              // we want to only move elements which have a space in the data-emotion attribute value
              // because that indicates that it is an Emotion 11 server-side rendered style elements
              // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
              // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
              // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
              // will not result in the Emotion 10 styles being destroyed
              var dataEmotionAttribute = node.getAttribute('data-emotion');
              if (dataEmotionAttribute.indexOf(' ') === -1) {
                return;
              }
              document.head.appendChild(node);
              node.setAttribute('data-s', '');
            });
          }
          var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
          var inserted = {};
          var container;
          /* : Node */

          var nodesToHydrate = [];
          {
            container = options.container || document.head;
            Array.prototype.forEach.call(
            // this means we will ignore elements which don't have a space in them which
            // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
            document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node
            /*: HTMLStyleElement */) {
              var attrib = node.getAttribute("data-emotion").split(' ');
              for (var i = 1; i < attrib.length; i++) {
                inserted[attrib[i]] = true;
              }
              nodesToHydrate.push(node);
            });
          }
          var _insert;
          /*: (
          selector: string,
          serialized: SerializedStyles,
          sheet: StyleSheet,
          shouldCache: boolean
          ) => string | void */

          var omnipresentPlugins = [compat, removeLabel];
          {
            var currentSheet;
            var finalizingPlugins = [stringify, rulesheet(function (rule) {
              currentSheet.insert(rule);
            })];
            var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
            var stylis = function stylis(styles) {
              return serialize(compile(styles), serializer);
            };
            _insert = function /*: void */
            insert(selector
            /*: string */, serialized
            /*: SerializedStyles */, sheet
            /*: StyleSheet */, shouldCache
            /*: boolean */) {
              currentSheet = sheet;
              stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
              if (shouldCache) {
                cache.inserted[serialized.name] = true;
              }
            };
          }
          var cache
          /*: EmotionCache */ = {
            key: key,
            sheet: new StyleSheet({
              key: key,
              container: container,
              nonce: options.nonce,
              speedy: options.speedy,
              prepend: options.prepend,
              insertionPoint: options.insertionPoint
            }),
            nonce: options.nonce,
            inserted: inserted,
            registered: {},
            insert: _insert
          };
          cache.sheet.hydrate(nodesToHydrate);
          return cache;
        });
        function _extends() {
          return exports("_", _extends = Object.assign ? Object.assign.bind() : function (n) {
            for (var e = 1; e < arguments.length; e++) {
              var t = arguments[e];
              for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
            }
            return n;
          }), _extends.apply(null, arguments);
        }
        const _extends$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
          __proto__: null,
          get default() {
            return _extends;
          }
        }, Symbol.toStringTag, {
          value: 'Module'
        }));
        exports("ac", _extends$1);
        var reactIs$1 = {
          exports: {}
        };
        var reactIs_production_min = {};

        /** @license React v16.13.1
         * react-is.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        var b = "function" === typeof Symbol && Symbol.for,
          c = b ? Symbol.for("react.element") : 60103,
          d = b ? Symbol.for("react.portal") : 60106,
          e = b ? Symbol.for("react.fragment") : 60107,
          f = b ? Symbol.for("react.strict_mode") : 60108,
          g = b ? Symbol.for("react.profiler") : 60114,
          h = b ? Symbol.for("react.provider") : 60109,
          k = b ? Symbol.for("react.context") : 60110,
          l = b ? Symbol.for("react.async_mode") : 60111,
          m = b ? Symbol.for("react.concurrent_mode") : 60111,
          n = b ? Symbol.for("react.forward_ref") : 60112,
          p = b ? Symbol.for("react.suspense") : 60113,
          q = b ? Symbol.for("react.suspense_list") : 60120,
          r$1 = b ? Symbol.for("react.memo") : 60115,
          t = b ? Symbol.for("react.lazy") : 60116,
          v = b ? Symbol.for("react.block") : 60121,
          w = b ? Symbol.for("react.fundamental") : 60117,
          x = b ? Symbol.for("react.responder") : 60118,
          y = b ? Symbol.for("react.scope") : 60119;
        function z(a) {
          if ("object" === typeof a && null !== a) {
            var u = a.$$typeof;
            switch (u) {
              case c:
                switch (a = a.type, a) {
                  case l:
                  case m:
                  case e:
                  case g:
                  case f:
                  case p:
                    return a;
                  default:
                    switch (a = a && a.$$typeof, a) {
                      case k:
                      case n:
                      case t:
                      case r$1:
                      case h:
                        return a;
                      default:
                        return u;
                    }
                }
              case d:
                return u;
            }
          }
        }
        function A(a) {
          return z(a) === m;
        }
        reactIs_production_min.AsyncMode = l;
        reactIs_production_min.ConcurrentMode = m;
        reactIs_production_min.ContextConsumer = k;
        reactIs_production_min.ContextProvider = h;
        reactIs_production_min.Element = c;
        reactIs_production_min.ForwardRef = n;
        reactIs_production_min.Fragment = e;
        reactIs_production_min.Lazy = t;
        reactIs_production_min.Memo = r$1;
        reactIs_production_min.Portal = d;
        reactIs_production_min.Profiler = g;
        reactIs_production_min.StrictMode = f;
        reactIs_production_min.Suspense = p;
        reactIs_production_min.isAsyncMode = function (a) {
          return A(a) || z(a) === l;
        };
        reactIs_production_min.isConcurrentMode = A;
        reactIs_production_min.isContextConsumer = function (a) {
          return z(a) === k;
        };
        reactIs_production_min.isContextProvider = function (a) {
          return z(a) === h;
        };
        reactIs_production_min.isElement = function (a) {
          return "object" === typeof a && null !== a && a.$$typeof === c;
        };
        reactIs_production_min.isForwardRef = function (a) {
          return z(a) === n;
        };
        reactIs_production_min.isFragment = function (a) {
          return z(a) === e;
        };
        reactIs_production_min.isLazy = function (a) {
          return z(a) === t;
        };
        reactIs_production_min.isMemo = function (a) {
          return z(a) === r$1;
        };
        reactIs_production_min.isPortal = function (a) {
          return z(a) === d;
        };
        reactIs_production_min.isProfiler = function (a) {
          return z(a) === g;
        };
        reactIs_production_min.isStrictMode = function (a) {
          return z(a) === f;
        };
        reactIs_production_min.isSuspense = function (a) {
          return z(a) === p;
        };
        reactIs_production_min.isValidElementType = function (a) {
          return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r$1 || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
        };
        reactIs_production_min.typeOf = z;
        {
          reactIs$1.exports = reactIs_production_min;
        }
        var reactIsExports = reactIs$1.exports;
        var reactIs = reactIsExports;

        /**
         * Copyright 2015, Yahoo! Inc.
         * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
         */
        var REACT_STATICS = {
          childContextTypes: true,
          contextType: true,
          contextTypes: true,
          defaultProps: true,
          displayName: true,
          getDefaultProps: true,
          getDerivedStateFromError: true,
          getDerivedStateFromProps: true,
          mixins: true,
          propTypes: true,
          type: true
        };
        var KNOWN_STATICS = {
          name: true,
          length: true,
          prototype: true,
          caller: true,
          callee: true,
          arguments: true,
          arity: true
        };
        var FORWARD_REF_STATICS = {
          '$$typeof': true,
          render: true,
          defaultProps: true,
          displayName: true,
          propTypes: true
        };
        var MEMO_STATICS = {
          '$$typeof': true,
          compare: true,
          defaultProps: true,
          displayName: true,
          propTypes: true,
          type: true
        };
        var TYPE_STATICS = {};
        TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
        TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
        function getStatics(component) {
          // React v16.11 and below
          if (reactIs.isMemo(component)) {
            return MEMO_STATICS;
          } // React v16.12 and above

          return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
        }
        var defineProperty = Object.defineProperty;
        var getOwnPropertyNames = Object.getOwnPropertyNames;
        var getOwnPropertySymbols = Object.getOwnPropertySymbols;
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var getPrototypeOf = Object.getPrototypeOf;
        var objectPrototype = Object.prototype;
        function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
          if (typeof sourceComponent !== 'string') {
            // don't hoist over string (html) components
            if (objectPrototype) {
              var inheritedComponent = getPrototypeOf(sourceComponent);
              if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
              }
            }
            var keys = getOwnPropertyNames(sourceComponent);
            if (getOwnPropertySymbols) {
              keys = keys.concat(getOwnPropertySymbols(sourceComponent));
            }
            var targetStatics = getStatics(targetComponent);
            var sourceStatics = getStatics(sourceComponent);
            for (var i = 0; i < keys.length; ++i) {
              var key = keys[i];
              if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                  // Avoid failures from read-only properties
                  defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
              }
            }
          }
          return targetComponent;
        }
        var hoistNonReactStatics_cjs = hoistNonReactStatics;
        const hoistStatics = exports("aj", /*@__PURE__*/getDefaultExportFromCjs(hoistNonReactStatics_cjs));
        var isBrowser = true;
        function getRegisteredStyles(registered, registeredStyles, classNames) {
          var rawClassName = '';
          classNames.split(' ').forEach(function (className) {
            if (registered[className] !== undefined) {
              registeredStyles.push(registered[className] + ";");
            } else if (className) {
              rawClassName += className + " ";
            }
          });
          return rawClassName;
        }
        var registerStyles = function registerStyles(cache, serialized, isStringTag) {
          var className = cache.key + "-" + serialized.name;
          if (
          // we only need to add the styles to the registered cache if the
          // class name could be used further down
          // the tree but if it's a string tag, we know it won't
          // so we don't have to add it to registered cache.
          // this improves memory usage since we can avoid storing the whole style string
          (isStringTag === false ||
          // we need to always store it if we're in compat mode and
          // in node since emotion-server relies on whether a style is in
          // the registered cache to know whether a style is global or not
          // also, note that this check will be dead code eliminated in the browser
          isBrowser === false) && cache.registered[className] === undefined) {
            cache.registered[className] = serialized.styles;
          }
        };
        var insertStyles = function insertStyles(cache, serialized, isStringTag) {
          registerStyles(cache, serialized, isStringTag);
          var className = cache.key + "-" + serialized.name;
          if (cache.inserted[serialized.name] === undefined) {
            var current = serialized;
            do {
              cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);
              current = current.next;
            } while (current !== undefined);
          }
        };

        /* eslint-disable */
        // Inspired by https://github.com/garycourt/murmurhash-js
        // Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
        function murmur2(str) {
          // 'm' and 'r' are mixing constants generated offline.
          // They're not really 'magic', they just happen to work well.
          // const m = 0x5bd1e995;
          // const r = 24;
          // Initialize the hash
          var h = 0; // Mix 4 bytes at a time into the hash

          var k,
            i = 0,
            len = str.length;
          for (; len >= 4; ++i, len -= 4) {
            k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
            k = /* Math.imul(k, m): */
            (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
            k ^= /* k >>> r: */
            k >>> 24;
            h = /* Math.imul(k, m): */
            (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^ /* Math.imul(h, m): */
            (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
          } // Handle the last few bytes of the input array

          switch (len) {
            case 3:
              h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
            case 2:
              h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
            case 1:
              h ^= str.charCodeAt(i) & 0xff;
              h = /* Math.imul(h, m): */
              (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
          } // Do a few final mixes of the hash to ensure the last few
          // bytes are well-incorporated.

          h ^= h >>> 13;
          h = /* Math.imul(h, m): */
          (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
          return ((h ^ h >>> 15) >>> 0).toString(36);
        }
        var unitlessKeys = {
          animationIterationCount: 1,
          aspectRatio: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          scale: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          // SVG-related properties
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1
        };
        var isDevelopment$1 = false;
        var hyphenateRegex = /[A-Z]|^ms/g;
        var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
        var isCustomProperty = function isCustomProperty(property) {
          return property.charCodeAt(1) === 45;
        };
        var isProcessableValue = function isProcessableValue(value) {
          return value != null && typeof value !== 'boolean';
        };
        var processStyleName = /* #__PURE__ */memoize$1(function (styleName) {
          return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
        });
        var processStyleValue = function processStyleValue(key, value) {
          switch (key) {
            case 'animation':
            case 'animationName':
              {
                if (typeof value === 'string') {
                  return value.replace(animationRegex, function (match, p1, p2) {
                    cursor = {
                      name: p1,
                      styles: p2,
                      next: cursor
                    };
                    return p1;
                  });
                }
              }
          }
          if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
            return value + 'px';
          }
          return value;
        };
        var noComponentSelectorMessage = 'Component selectors can only be used in conjunction with ' + '@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware ' + 'compiler transform.';
        function handleInterpolation(mergedProps, registered, interpolation) {
          if (interpolation == null) {
            return '';
          }
          var componentSelector = interpolation;
          if (componentSelector.__emotion_styles !== undefined) {
            return componentSelector;
          }
          switch (typeof interpolation) {
            case 'boolean':
              {
                return '';
              }
            case 'object':
              {
                var keyframes = interpolation;
                if (keyframes.anim === 1) {
                  cursor = {
                    name: keyframes.name,
                    styles: keyframes.styles,
                    next: cursor
                  };
                  return keyframes.name;
                }
                var serializedStyles = interpolation;
                if (serializedStyles.styles !== undefined) {
                  var next = serializedStyles.next;
                  if (next !== undefined) {
                    // not the most efficient thing ever but this is a pretty rare case
                    // and there will be very few iterations of this generally
                    while (next !== undefined) {
                      cursor = {
                        name: next.name,
                        styles: next.styles,
                        next: cursor
                      };
                      next = next.next;
                    }
                  }
                  var styles = serializedStyles.styles + ";";
                  return styles;
                }
                return createStringFromObject(mergedProps, registered, interpolation);
              }
            case 'function':
              {
                if (mergedProps !== undefined) {
                  var previousCursor = cursor;
                  var result = interpolation(mergedProps);
                  cursor = previousCursor;
                  return handleInterpolation(mergedProps, registered, result);
                }
                break;
              }
          } // finalize string values (regular strings and functions interpolated into css calls)

          var asString = interpolation;
          if (registered == null) {
            return asString;
          }
          var cached = registered[asString];
          return cached !== undefined ? cached : asString;
        }
        function createStringFromObject(mergedProps, registered, obj) {
          var string = '';
          if (Array.isArray(obj)) {
            for (var i = 0; i < obj.length; i++) {
              string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
            }
          } else {
            for (var key in obj) {
              var value = obj[key];
              if (typeof value !== 'object') {
                var asString = value;
                if (registered != null && registered[asString] !== undefined) {
                  string += key + "{" + registered[asString] + "}";
                } else if (isProcessableValue(asString)) {
                  string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
                }
              } else {
                if (key === 'NO_COMPONENT_SELECTOR' && isDevelopment$1) {
                  throw new Error(noComponentSelectorMessage);
                }
                if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
                  for (var _i = 0; _i < value.length; _i++) {
                    if (isProcessableValue(value[_i])) {
                      string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
                    }
                  }
                } else {
                  var interpolated = handleInterpolation(mergedProps, registered, value);
                  switch (key) {
                    case 'animation':
                    case 'animationName':
                      {
                        string += processStyleName(key) + ":" + interpolated + ";";
                        break;
                      }
                    default:
                      {
                        string += key + "{" + interpolated + "}";
                      }
                  }
                }
              }
            }
          }
          return string;
        }
        var labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g;
        // keyframes are stored on the SerializedStyles object as a linked list

        var cursor;
        function serializeStyles(args, registered, mergedProps) {
          if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
            return args[0];
          }
          var stringMode = true;
          var styles = '';
          cursor = undefined;
          var strings = args[0];
          if (strings == null || strings.raw === undefined) {
            stringMode = false;
            styles += handleInterpolation(mergedProps, registered, strings);
          } else {
            var asTemplateStringsArr = strings;
            styles += asTemplateStringsArr[0];
          } // we start at 1 since we've already handled the first arg

          for (var i = 1; i < args.length; i++) {
            styles += handleInterpolation(mergedProps, registered, args[i]);
            if (stringMode) {
              var templateStringsArr = strings;
              styles += templateStringsArr[i];
            }
          }
          labelPattern.lastIndex = 0;
          var identifierName = '';
          var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

          while ((match = labelPattern.exec(styles)) !== null) {
            identifierName += '-' + match[1];
          }
          var name = murmur2(styles) + identifierName;
          return {
            name: name,
            styles: styles,
            next: cursor
          };
        }
        var syncFallback = function syncFallback(create) {
          return create();
        };
        var useInsertionEffect = React$1['useInsertion' + 'Effect'] ? React$1['useInsertion' + 'Effect'] : false;
        var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect || syncFallback;
        var useInsertionEffectWithLayoutFallback = useInsertionEffect || reactExports.useLayoutEffect;

        /* import { type EmotionCache } from '@emotion/utils' */
        var EmotionCacheContext
        /*: React.Context<EmotionCache | null> */ = /* #__PURE__ */reactExports.createContext(
        // we're doing this to avoid preconstruct's dead code elimination in this one case
        // because this module is primarily intended for the browser and node
        // but it's also required in react native and similar environments sometimes
        // and we could have a special build just for that
        // but this is much easier and the native packages
        // might use a different theme context in the future anyway
        typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
          key: 'css'
        }) : null);
        var CacheProvider = exports("C", EmotionCacheContext.Provider);
        var withEmotionCache = function withEmotionCache
        /* <Props, Ref: React.Ref<*>> */(func
        /*: (props: Props, cache: EmotionCache, ref: Ref) => React.Node */) /*: React.AbstractComponent<Props> */
        {
          return /*#__PURE__*/reactExports.forwardRef(function (props
          /*: Props */, ref
          /*: Ref */) {
            // the cache will never be null in the browser
            var cache = reactExports.useContext(EmotionCacheContext);
            return func(props, cache, ref);
          });
        };
        var ThemeContext = exports("a4", /* #__PURE__ */reactExports.createContext({}));
        var useTheme$2 = exports("y", function useTheme() {
          return reactExports.useContext(ThemeContext);
        });

        // initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
        // initial client-side render from SSR, use place of hydrating tag

        var Global
        /*: React.AbstractComponent<
        GlobalProps
        > */ = /* #__PURE__ */withEmotionCache(function (props
        /*: GlobalProps */, cache) {
          var styles = props.styles;
          var serialized = serializeStyles([styles], undefined, reactExports.useContext(ThemeContext));
          // but it is based on a constant that will never change at runtime
          // it's effectively like having two implementations and switching them out
          // so it's not actually breaking anything

          var sheetRef = reactExports.useRef();
          useInsertionEffectWithLayoutFallback(function () {
            var key = cache.key + "-global"; // use case of https://github.com/emotion-js/emotion/issues/2675

            var sheet = new cache.sheet.constructor({
              key: key,
              nonce: cache.sheet.nonce,
              container: cache.sheet.container,
              speedy: cache.sheet.isSpeedy
            });
            var rehydrating = false;
            var node
            /*: HTMLStyleElement | null*/ = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");
            if (cache.sheet.tags.length) {
              sheet.before = cache.sheet.tags[0];
            }
            if (node !== null) {
              rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s

              node.setAttribute('data-emotion', key);
              sheet.hydrate([node]);
            }
            sheetRef.current = [sheet, rehydrating];
            return function () {
              sheet.flush();
            };
          }, [cache]);
          useInsertionEffectWithLayoutFallback(function () {
            var sheetRefCurrent = sheetRef.current;
            var sheet = sheetRefCurrent[0],
              rehydrating = sheetRefCurrent[1];
            if (rehydrating) {
              sheetRefCurrent[1] = false;
              return;
            }
            if (serialized.next !== undefined) {
              // insert keyframes
              insertStyles(cache, serialized.next, true);
            }
            if (sheet.tags.length) {
              // if this doesn't exist then it will be null so the style element will be appended
              var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
              sheet.before = element;
              sheet.flush();
            }
            cache.insert("", serialized, sheet, false);
          }, [cache, serialized.name]);
          return null;
        });

        /* import type { Interpolation, SerializedStyles } from '@emotion/utils' */

        function css() /*: SerializedStyles */
        {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return serializeStyles(args);
        }

        /*
        type Keyframes = {|
          name: string,
          styles: string,
          anim: 1,
          toString: () => string
        |} & string
        */

        var keyframes = exports("m", function /*: Keyframes */
        keyframes() {
          var insertable = css.apply(void 0, arguments);
          var name = "animation-" + insertable.name;
          return {
            name: name,
            styles: "@keyframes " + name + "{" + insertable.styles + "}",
            anim: 1,
            toString: function toString() {
              return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
            }
          };
        });
        const common = {
          black: '#000',
          white: '#fff'
        };
        const red = {
          50: '#ffebee',
          100: '#ffcdd2',
          200: '#ef9a9a',
          300: '#e57373',
          400: '#ef5350',
          500: '#f44336',
          600: '#e53935',
          700: '#d32f2f',
          800: '#c62828',
          900: '#b71c1c',
          A100: '#ff8a80',
          A200: '#ff5252',
          A400: '#ff1744',
          A700: '#d50000'
        };
        const purple = {
          50: '#f3e5f5',
          100: '#e1bee7',
          200: '#ce93d8',
          300: '#ba68c8',
          400: '#ab47bc',
          500: '#9c27b0',
          600: '#8e24aa',
          700: '#7b1fa2',
          800: '#6a1b9a',
          900: '#4a148c',
          A100: '#ea80fc',
          A200: '#e040fb',
          A400: '#d500f9',
          A700: '#aa00ff'
        };
        const blue = {
          50: '#e3f2fd',
          100: '#bbdefb',
          200: '#90caf9',
          300: '#64b5f6',
          400: '#42a5f5',
          500: '#2196f3',
          600: '#1e88e5',
          700: '#1976d2',
          800: '#1565c0',
          900: '#0d47a1',
          A100: '#82b1ff',
          A200: '#448aff',
          A400: '#2979ff',
          A700: '#2962ff'
        };
        const lightBlue = {
          50: '#e1f5fe',
          100: '#b3e5fc',
          200: '#81d4fa',
          300: '#4fc3f7',
          400: '#29b6f6',
          500: '#03a9f4',
          600: '#039be5',
          700: '#0288d1',
          800: '#0277bd',
          900: '#01579b',
          A100: '#80d8ff',
          A200: '#40c4ff',
          A400: '#00b0ff',
          A700: '#0091ea'
        };
        const green = {
          50: '#e8f5e9',
          100: '#c8e6c9',
          200: '#a5d6a7',
          300: '#81c784',
          400: '#66bb6a',
          500: '#4caf50',
          600: '#43a047',
          700: '#388e3c',
          800: '#2e7d32',
          900: '#1b5e20',
          A100: '#b9f6ca',
          A200: '#69f0ae',
          A400: '#00e676',
          A700: '#00c853'
        };
        const orange = {
          50: '#fff3e0',
          100: '#ffe0b2',
          200: '#ffcc80',
          300: '#ffb74d',
          400: '#ffa726',
          500: '#ff9800',
          600: '#fb8c00',
          700: '#f57c00',
          800: '#ef6c00',
          900: '#e65100',
          A100: '#ffd180',
          A200: '#ffab40',
          A400: '#ff9100',
          A700: '#ff6d00'
        };
        const grey = {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
          A100: '#f5f5f5',
          A200: '#eeeeee',
          A400: '#bdbdbd',
          A700: '#616161'
        };

        /**
         * WARNING: Don't import this directly.
         * Use `MuiError` from `@mui/internal-babel-macros/MuiError.macro` instead.
         * @param {number} code
         */
        function formatMuiErrorMessage$1(code) {
          // Apply babel-plugin-transform-template-literals in loose mode
          // loose mode is safe if we're concatenating primitives
          // see https://babeljs.io/docs/en/babel-plugin-transform-template-literals#loose
          /* eslint-disable prefer-template */
          let url = 'https://mui.com/production-error/?code=' + code;
          for (let i = 1; i < arguments.length; i += 1) {
            // rest params over-transpile for this case
            // eslint-disable-next-line prefer-rest-params
            url += '&args[]=' + encodeURIComponent(arguments[i]);
          }
          return 'Minified MUI error #' + code + '; visit ' + url + ' for the full message.';
          /* eslint-enable prefer-template */
        }
        const formatMuiErrorMessage = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
          __proto__: null,
          default: formatMuiErrorMessage$1
        }, Symbol.toStringTag, {
          value: 'Module'
        }));
        const THEME_ID = exports("aa", '$$material');

        // eslint-disable-next-line no-undef
        var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

        var isPropValid = /* #__PURE__ */memoize$1(function (prop) {
          return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
          /* o */ && prop.charCodeAt(1) === 110
          /* n */ && prop.charCodeAt(2) < 91;
        }
        /* Z+1 */);

        /* import type {
          ElementType,
          StatelessFunctionalComponent,
          AbstractComponent
        } from 'react' */
        /*
        export type Interpolations = Array<any>
         export type StyledElementType<Props> =
          | string
          | AbstractComponent<{ ...Props, className: string }, mixed>
         export type StyledOptions = {
          label?: string,
          shouldForwardProp?: string => boolean,
          target?: string
        }
         export type StyledComponent<Props> = StatelessFunctionalComponent<Props> & {
          defaultProps: any,
          toString: () => string,
          withComponent: (
            nextTag: StyledElementType<Props>,
            nextOptions?: StyledOptions
          ) => StyledComponent<Props>
        }
         export type PrivateStyledComponent<Props> = StyledComponent<Props> & {
          __emotion_real: StyledComponent<Props>,
          __emotion_base: any,
          __emotion_styles: any,
          __emotion_forwardProp: any
        }
        */

        var testOmitPropsOnStringTag = isPropValid;
        var testOmitPropsOnComponent = function testOmitPropsOnComponent(key
        /*: string */) {
          return key !== 'theme';
        };
        var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag
        /*: ElementType */) {
          return typeof tag === 'string' &&
          // 96 is one less than the char code
          // for "a" so this is checking that
          // it's a lowercase character
          tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
        };
        var composeShouldForwardProps = function composeShouldForwardProps(tag
        /*: PrivateStyledComponent<any> */, options
        /*: StyledOptions | void */, isReal
        /*: boolean */) {
          var shouldForwardProp;
          if (options) {
            var optionsShouldForwardProp = options.shouldForwardProp;
            shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function (propName
            /*: string */) {
              return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
            } : optionsShouldForwardProp;
          }
          if (typeof shouldForwardProp !== 'function' && isReal) {
            shouldForwardProp = tag.__emotion_forwardProp;
          }
          return shouldForwardProp;
        };
        /*
        export type CreateStyledComponent = <Props>(
          ...args: Interpolations
        ) => StyledComponent<Props>
         export type CreateStyled = {
          <Props>(
            tag: StyledElementType<Props>,
            options?: StyledOptions
          ): (...args: Interpolations) => StyledComponent<Props>,
          [key: string]: CreateStyledComponent,
          bind: () => CreateStyled
        }
        */

        var isDevelopment = false;
        var Insertion = function Insertion(_ref) {
          var cache = _ref.cache,
            serialized = _ref.serialized,
            isStringTag = _ref.isStringTag;
          registerStyles(cache, serialized, isStringTag);
          useInsertionEffectAlwaysWithSyncFallback(function () {
            return insertStyles(cache, serialized, isStringTag);
          });
          return null;
        };
        var createStyled
        /*: CreateStyled */ = function createStyled
        /*: CreateStyled */(tag
        /*: any */, options
        /* ?: StyledOptions */) {
          var isReal = tag.__emotion_real === tag;
          var baseTag = isReal && tag.__emotion_base || tag;
          var identifierName;
          var targetClassName;
          if (options !== undefined) {
            identifierName = options.label;
            targetClassName = options.target;
          }
          var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
          var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
          var shouldUseAs = !defaultShouldForwardProp('as');
          /* return function<Props>(): PrivateStyledComponent<Props> { */

          return function () {
            var args = arguments;
            var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];
            if (identifierName !== undefined) {
              styles.push("label:" + identifierName + ";");
            }
            if (args[0] == null || args[0].raw === undefined) {
              styles.push.apply(styles, args);
            } else {
              styles.push(args[0][0]);
              var len = args.length;
              var i = 1;
              for (; i < len; i++) {
                styles.push(args[i], args[0][i]);
              }
            }
            var Styled
            /*: PrivateStyledComponent<Props> */ = withEmotionCache(function (props, cache, ref) {
              var FinalTag = shouldUseAs && props.as || baseTag;
              var className = '';
              var classInterpolations = [];
              var mergedProps = props;
              if (props.theme == null) {
                mergedProps = {};
                for (var key in props) {
                  mergedProps[key] = props[key];
                }
                mergedProps.theme = reactExports.useContext(ThemeContext);
              }
              if (typeof props.className === 'string') {
                className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
              } else if (props.className != null) {
                className = props.className + " ";
              }
              var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
              className += cache.key + "-" + serialized.name;
              if (targetClassName !== undefined) {
                className += " " + targetClassName;
              }
              var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
              var newProps = {};
              for (var _key in props) {
                if (shouldUseAs && _key === 'as') continue;
                if (finalShouldForwardProp(_key)) {
                  newProps[_key] = props[_key];
                }
              }
              newProps.className = className;
              if (ref) {
                newProps.ref = ref;
              }
              return /*#__PURE__*/reactExports.createElement(reactExports.Fragment, null, /*#__PURE__*/reactExports.createElement(Insertion, {
                cache: cache,
                serialized: serialized,
                isStringTag: typeof FinalTag === 'string'
              }), /*#__PURE__*/reactExports.createElement(FinalTag, newProps));
            });
            Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
            Styled.defaultProps = tag.defaultProps;
            Styled.__emotion_real = Styled;
            Styled.__emotion_base = baseTag;
            Styled.__emotion_styles = styles;
            Styled.__emotion_forwardProp = shouldForwardProp;
            Object.defineProperty(Styled, 'toString', {
              value: function value() {
                if (targetClassName === undefined && isDevelopment) {
                  return 'NO_COMPONENT_SELECTOR';
                }
                return "." + targetClassName;
              }
            });
            Styled.withComponent = function (nextTag
            /*: StyledElementType<Props> */, nextOptions
            /* ?: StyledOptions */) {
              return createStyled(nextTag, _extends({}, options, nextOptions, {
                shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
              })).apply(void 0, styles);
            };
            return Styled;
          };
        };
        var tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',
        // SVG
        'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
        var newStyled = createStyled.bind();
        tags.forEach(function (tagName) {
          newStyled[tagName] = newStyled(tagName);
        });
        let cache;
        if (typeof document === "object") {
          cache = createCache({
            key: "css",
            prepend: true
          });
        }
        function StyledEngineProvider(props) {
          const injectFirst = props.injectFirst,
            children = props.children;
          return injectFirst && cache ? /* @__PURE__ */jsxRuntimeExports.jsx(CacheProvider, {
            value: cache,
            children
          }) : children;
        }
        function isEmpty(obj) {
          return obj === void 0 || obj === null || Object.keys(obj).length === 0;
        }
        function GlobalStyles(props) {
          const styles = props.styles,
            _props$defaultTheme = props.defaultTheme,
            defaultTheme = _props$defaultTheme === void 0 ? {} : _props$defaultTheme;
          const globalStyles = typeof styles === "function" ? themeInput => styles(isEmpty(themeInput) ? defaultTheme : themeInput) : styles;
          return /* @__PURE__ */jsxRuntimeExports.jsx(Global, {
            styles: globalStyles
          });
        }
        function styled(tag, options) {
          const stylesFactory = newStyled(tag, options);
          return stylesFactory;
        }
        const internal_processStyles = exports("Z", (tag, processor) => {
          if (Array.isArray(tag.__emotion_styles)) {
            tag.__emotion_styles = processor(tag.__emotion_styles);
          }
        });
        const styledEngine = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
          __proto__: null,
          GlobalStyles,
          StyledEngineProvider,
          ThemeContext,
          css,
          default: styled,
          internal_processStyles,
          keyframes
        }, Symbol.toStringTag, {
          value: 'Module'
        }));
        exports("ad", styledEngine);

        // https://github.com/sindresorhus/is-plain-obj/blob/main/index.js
        function isPlainObject(item) {
          if (typeof item !== 'object' || item === null) {
            return false;
          }
          const prototype = Object.getPrototypeOf(item);
          return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in item) && !(Symbol.iterator in item);
        }
        function deepClone(source) {
          if (!isPlainObject(source)) {
            return source;
          }
          const output = {};
          Object.keys(source).forEach(key => {
            output[key] = deepClone(source[key]);
          });
          return output;
        }
        function deepmerge(target, source, options = {
          clone: true
        }) {
          const output = options.clone ? _extends({}, target) : target;
          if (isPlainObject(target) && isPlainObject(source)) {
            Object.keys(source).forEach(key => {
              if (isPlainObject(source[key]) &&
              // Avoid prototype pollution
              Object.prototype.hasOwnProperty.call(target, key) && isPlainObject(target[key])) {
                // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
                output[key] = deepmerge(target[key], source[key], options);
              } else if (options.clone) {
                output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
              } else {
                output[key] = source[key];
              }
            });
          }
          return output;
        }
        const _excluded$7 = ["values", "unit", "step"];
        const sortBreakpointsValues = values => {
          const breakpointsAsArray = Object.keys(values).map(key => ({
            key,
            val: values[key]
          })) || [];
          // Sort in ascending order
          breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
          return breakpointsAsArray.reduce((acc, obj) => {
            return _extends({}, acc, {
              [obj.key]: obj.val
            });
          }, {});
        };

        // Keep in mind that @media is inclusive by the CSS specification.
        function createBreakpoints(breakpoints) {
          const _breakpoints$values = breakpoints.values,
            values = _breakpoints$values === void 0 ? {
              xs: 0,
              // phone
              sm: 600,
              // tablet
              md: 900,
              // small laptop
              lg: 1200,
              // desktop
              xl: 1536 // large screen
            } : _breakpoints$values,
            _breakpoints$unit = breakpoints.unit,
            unit = _breakpoints$unit === void 0 ? 'px' : _breakpoints$unit,
            _breakpoints$step = breakpoints.step,
            step = _breakpoints$step === void 0 ? 5 : _breakpoints$step,
            other = _objectWithoutPropertiesLoose$1(breakpoints, _excluded$7);
          const sortedValues = sortBreakpointsValues(values);
          const keys = Object.keys(sortedValues);
          function up(key) {
            const value = typeof values[key] === 'number' ? values[key] : key;
            return `@media (min-width:${value}${unit})`;
          }
          function down(key) {
            const value = typeof values[key] === 'number' ? values[key] : key;
            return `@media (max-width:${value - step / 100}${unit})`;
          }
          function between(start, end) {
            const endIndex = keys.indexOf(end);
            return `@media (min-width:${typeof values[start] === 'number' ? values[start] : start}${unit}) and ` + `(max-width:${(endIndex !== -1 && typeof values[keys[endIndex]] === 'number' ? values[keys[endIndex]] : end) - step / 100}${unit})`;
          }
          function only(key) {
            if (keys.indexOf(key) + 1 < keys.length) {
              return between(key, keys[keys.indexOf(key) + 1]);
            }
            return up(key);
          }
          function not(key) {
            // handle first and last key separately, for better readability
            const keyIndex = keys.indexOf(key);
            if (keyIndex === 0) {
              return up(keys[1]);
            }
            if (keyIndex === keys.length - 1) {
              return down(keys[keyIndex]);
            }
            return between(key, keys[keys.indexOf(key) + 1]).replace('@media', '@media not all and');
          }
          return _extends({
            keys,
            values: sortedValues,
            up,
            down,
            between,
            only,
            not,
            unit
          }, other);
        }
        const shape = {
          borderRadius: 4
        };
        function merge(acc, item) {
          if (!item) {
            return acc;
          }
          return deepmerge(acc, item, {
            clone: false // No need to clone deep, it's way faster.
          });
        }
        const values = {
          xs: 0,
          // phone
          sm: 600,
          // tablet
          md: 900,
          // small laptop
          lg: 1200,
          // desktop
          xl: 1536
          // large screen
        };
        const defaultBreakpoints = {
          // Sorted ASC by size. That's important.
          // It can't be configured as it's used statically for propTypes.
          keys: ["xs", "sm", "md", "lg", "xl"],
          up: key => `@media (min-width:${values[key]}px)`
        };
        function handleBreakpoints(props, propValue, styleFromPropValue) {
          const theme = props.theme || {};
          if (Array.isArray(propValue)) {
            const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
            return propValue.reduce((acc, item, index) => {
              acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
              return acc;
            }, {});
          }
          if (typeof propValue === "object") {
            const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
            return Object.keys(propValue).reduce((acc, breakpoint) => {
              if (Object.keys(themeBreakpoints.values || values).indexOf(breakpoint) !== -1) {
                const mediaKey = themeBreakpoints.up(breakpoint);
                acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
              } else {
                const cssKey = breakpoint;
                acc[cssKey] = propValue[cssKey];
              }
              return acc;
            }, {});
          }
          const output = styleFromPropValue(propValue);
          return output;
        }
        function createEmptyBreakpointObject(breakpointsInput = {}) {
          var _breakpointsInput$key;
          const breakpointsInOrder = (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
            const breakpointStyleKey = breakpointsInput.up(key);
            acc[breakpointStyleKey] = {};
            return acc;
          }, {});
          return breakpointsInOrder || {};
        }
        function removeUnusedBreakpoints(breakpointKeys, style) {
          return breakpointKeys.reduce((acc, key) => {
            const breakpointOutput = acc[key];
            const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;
            if (isBreakpointUnused) {
              delete acc[key];
            }
            return acc;
          }, style);
        }
        function mergeBreakpointsInOrder(breakpointsInput, ...styles) {
          const emptyBreakpoints = createEmptyBreakpointObject(breakpointsInput);
          const mergedOutput = [emptyBreakpoints, ...styles].reduce((prev, next) => deepmerge(prev, next), {});
          return removeUnusedBreakpoints(Object.keys(emptyBreakpoints), mergedOutput);
        }
        function computeBreakpointsBase(breakpointValues, themeBreakpoints) {
          if (typeof breakpointValues !== "object") {
            return {};
          }
          const base = {};
          const breakpointsKeys = Object.keys(themeBreakpoints);
          if (Array.isArray(breakpointValues)) {
            breakpointsKeys.forEach((breakpoint, i) => {
              if (i < breakpointValues.length) {
                base[breakpoint] = true;
              }
            });
          } else {
            breakpointsKeys.forEach(breakpoint => {
              if (breakpointValues[breakpoint] != null) {
                base[breakpoint] = true;
              }
            });
          }
          return base;
        }
        function resolveBreakpointValues({
          values: breakpointValues,
          breakpoints: themeBreakpoints,
          base: customBase
        }) {
          const base = customBase || computeBreakpointsBase(breakpointValues, themeBreakpoints);
          const keys = Object.keys(base);
          if (keys.length === 0) {
            return breakpointValues;
          }
          let previous;
          return keys.reduce((acc, breakpoint, i) => {
            if (Array.isArray(breakpointValues)) {
              acc[breakpoint] = breakpointValues[i] != null ? breakpointValues[i] : breakpointValues[previous];
              previous = i;
            } else if (typeof breakpointValues === "object") {
              acc[breakpoint] = breakpointValues[breakpoint] != null ? breakpointValues[breakpoint] : breakpointValues[previous];
              previous = breakpoint;
            } else {
              acc[breakpoint] = breakpointValues;
            }
            return acc;
          }, {});
        }
        function capitalize(string) {
          if (typeof string !== "string") {
            throw new Error(formatMuiErrorMessage$1(7));
          }
          return string.charAt(0).toUpperCase() + string.slice(1);
        }
        function getPath(obj, path, checkVars = true) {
          if (!path || typeof path !== "string") {
            return null;
          }
          if (obj && obj.vars && checkVars) {
            const val = `vars.${path}`.split(".").reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
            if (val != null) {
              return val;
            }
          }
          return path.split(".").reduce((acc, item) => {
            if (acc && acc[item] != null) {
              return acc[item];
            }
            return null;
          }, obj);
        }
        function getStyleValue(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
          let value;
          if (typeof themeMapping === "function") {
            value = themeMapping(propValueFinal);
          } else if (Array.isArray(themeMapping)) {
            value = themeMapping[propValueFinal] || userValue;
          } else {
            value = getPath(themeMapping, propValueFinal) || userValue;
          }
          if (transform) {
            value = transform(value, userValue, themeMapping);
          }
          return value;
        }
        function style$1(options) {
          const prop = options.prop,
            _options$cssProperty = options.cssProperty,
            cssProperty = _options$cssProperty === void 0 ? options.prop : _options$cssProperty,
            themeKey = options.themeKey,
            transform = options.transform;
          const fn = props => {
            if (props[prop] == null) {
              return null;
            }
            const propValue = props[prop];
            const theme = props.theme;
            const themeMapping = getPath(theme, themeKey) || {};
            const styleFromPropValue = propValueFinal => {
              let value = getStyleValue(themeMapping, transform, propValueFinal);
              if (propValueFinal === value && typeof propValueFinal === "string") {
                value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === "default" ? "" : capitalize(propValueFinal)}`, propValueFinal);
              }
              if (cssProperty === false) {
                return value;
              }
              return {
                [cssProperty]: value
              };
            };
            return handleBreakpoints(props, propValue, styleFromPropValue);
          };
          fn.propTypes = {};
          fn.filterProps = [prop];
          return fn;
        }
        function memoize(fn) {
          const cache = {};
          return arg => {
            if (cache[arg] === undefined) {
              cache[arg] = fn(arg);
            }
            return cache[arg];
          };
        }
        const properties = {
          m: "margin",
          p: "padding"
        };
        const directions = {
          t: "Top",
          r: "Right",
          b: "Bottom",
          l: "Left",
          x: ["Left", "Right"],
          y: ["Top", "Bottom"]
        };
        const aliases = {
          marginX: "mx",
          marginY: "my",
          paddingX: "px",
          paddingY: "py"
        };
        const getCssProperties = memoize(prop => {
          if (prop.length > 2) {
            if (aliases[prop]) {
              prop = aliases[prop];
            } else {
              return [prop];
            }
          }
          const _prop$split = prop.split(""),
            _prop$split2 = _slicedToArray(_prop$split, 2),
            a = _prop$split2[0],
            b = _prop$split2[1];
          const property = properties[a];
          const direction = directions[b] || "";
          return Array.isArray(direction) ? direction.map(dir => property + dir) : [property + direction];
        });
        const marginKeys = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"];
        const paddingKeys = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
        [...marginKeys, ...paddingKeys];
        function createUnaryUnit(theme, themeKey, defaultValue, propName) {
          var _getPath;
          const themeSpacing = (_getPath = getPath(theme, themeKey, false)) != null ? _getPath : defaultValue;
          if (typeof themeSpacing === "number") {
            return abs => {
              if (typeof abs === "string") {
                return abs;
              }
              return themeSpacing * abs;
            };
          }
          if (Array.isArray(themeSpacing)) {
            return abs => {
              if (typeof abs === "string") {
                return abs;
              }
              return themeSpacing[abs];
            };
          }
          if (typeof themeSpacing === "function") {
            return themeSpacing;
          }
          return () => void 0;
        }
        function createUnarySpacing(theme) {
          return createUnaryUnit(theme, "spacing", 8);
        }
        function getValue(transformer, propValue) {
          if (typeof propValue === "string" || propValue == null) {
            return propValue;
          }
          const abs = Math.abs(propValue);
          const transformed = transformer(abs);
          if (propValue >= 0) {
            return transformed;
          }
          if (typeof transformed === "number") {
            return -transformed;
          }
          return `-${transformed}`;
        }
        function getStyleFromPropValue(cssProperties, transformer) {
          return propValue => cssProperties.reduce((acc, cssProperty) => {
            acc[cssProperty] = getValue(transformer, propValue);
            return acc;
          }, {});
        }
        function resolveCssProperty(props, keys, prop, transformer) {
          if (keys.indexOf(prop) === -1) {
            return null;
          }
          const cssProperties = getCssProperties(prop);
          const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
          const propValue = props[prop];
          return handleBreakpoints(props, propValue, styleFromPropValue);
        }
        function style(props, keys) {
          const transformer = createUnarySpacing(props.theme);
          return Object.keys(props).map(prop => resolveCssProperty(props, keys, prop, transformer)).reduce(merge, {});
        }
        function margin(props) {
          return style(props, marginKeys);
        }
        margin.propTypes = {};
        margin.filterProps = marginKeys;
        function padding(props) {
          return style(props, paddingKeys);
        }
        padding.propTypes = {};
        padding.filterProps = paddingKeys;
        function createSpacing(spacingInput = 8) {
          if (spacingInput.mui) {
            return spacingInput;
          }
          const transform = createUnarySpacing({
            spacing: spacingInput
          });
          const spacing = (...argsInput) => {
            const args = argsInput.length === 0 ? [1] : argsInput;
            return args.map(argument => {
              const output = transform(argument);
              return typeof output === "number" ? `${output}px` : output;
            }).join(" ");
          };
          spacing.mui = true;
          return spacing;
        }
        function compose(...styles) {
          const handlers = styles.reduce((acc, style) => {
            style.filterProps.forEach(prop => {
              acc[prop] = style;
            });
            return acc;
          }, {});
          const fn = props => {
            return Object.keys(props).reduce((acc, prop) => {
              if (handlers[prop]) {
                return merge(acc, handlers[prop](props));
              }
              return acc;
            }, {});
          };
          fn.propTypes = {};
          fn.filterProps = styles.reduce((acc, style) => acc.concat(style.filterProps), []);
          return fn;
        }
        function borderTransform(value) {
          if (typeof value !== "number") {
            return value;
          }
          return `${value}px solid`;
        }
        function createBorderStyle(prop, transform) {
          return style$1({
            prop,
            themeKey: "borders",
            transform
          });
        }
        const border = createBorderStyle("border", borderTransform);
        const borderTop = createBorderStyle("borderTop", borderTransform);
        const borderRight = createBorderStyle("borderRight", borderTransform);
        const borderBottom = createBorderStyle("borderBottom", borderTransform);
        const borderLeft = createBorderStyle("borderLeft", borderTransform);
        const borderColor = createBorderStyle("borderColor");
        const borderTopColor = createBorderStyle("borderTopColor");
        const borderRightColor = createBorderStyle("borderRightColor");
        const borderBottomColor = createBorderStyle("borderBottomColor");
        const borderLeftColor = createBorderStyle("borderLeftColor");
        const outline = createBorderStyle("outline", borderTransform);
        const outlineColor = createBorderStyle("outlineColor");
        const borderRadius = props => {
          if (props.borderRadius !== void 0 && props.borderRadius !== null) {
            const transformer = createUnaryUnit(props.theme, "shape.borderRadius", 4);
            const styleFromPropValue = propValue => ({
              borderRadius: getValue(transformer, propValue)
            });
            return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
          }
          return null;
        };
        borderRadius.propTypes = {};
        borderRadius.filterProps = ["borderRadius"];
        compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius, outline, outlineColor);
        const gap = props => {
          if (props.gap !== void 0 && props.gap !== null) {
            const transformer = createUnaryUnit(props.theme, "spacing", 8);
            const styleFromPropValue = propValue => ({
              gap: getValue(transformer, propValue)
            });
            return handleBreakpoints(props, props.gap, styleFromPropValue);
          }
          return null;
        };
        gap.propTypes = {};
        gap.filterProps = ["gap"];
        const columnGap = props => {
          if (props.columnGap !== void 0 && props.columnGap !== null) {
            const transformer = createUnaryUnit(props.theme, "spacing", 8);
            const styleFromPropValue = propValue => ({
              columnGap: getValue(transformer, propValue)
            });
            return handleBreakpoints(props, props.columnGap, styleFromPropValue);
          }
          return null;
        };
        columnGap.propTypes = {};
        columnGap.filterProps = ["columnGap"];
        const rowGap = props => {
          if (props.rowGap !== void 0 && props.rowGap !== null) {
            const transformer = createUnaryUnit(props.theme, "spacing", 8);
            const styleFromPropValue = propValue => ({
              rowGap: getValue(transformer, propValue)
            });
            return handleBreakpoints(props, props.rowGap, styleFromPropValue);
          }
          return null;
        };
        rowGap.propTypes = {};
        rowGap.filterProps = ["rowGap"];
        const gridColumn = style$1({
          prop: "gridColumn"
        });
        const gridRow = style$1({
          prop: "gridRow"
        });
        const gridAutoFlow = style$1({
          prop: "gridAutoFlow"
        });
        const gridAutoColumns = style$1({
          prop: "gridAutoColumns"
        });
        const gridAutoRows = style$1({
          prop: "gridAutoRows"
        });
        const gridTemplateColumns = style$1({
          prop: "gridTemplateColumns"
        });
        const gridTemplateRows = style$1({
          prop: "gridTemplateRows"
        });
        const gridTemplateAreas = style$1({
          prop: "gridTemplateAreas"
        });
        const gridArea = style$1({
          prop: "gridArea"
        });
        compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
        function paletteTransform(value, userValue) {
          if (userValue === 'grey') {
            return userValue;
          }
          return value;
        }
        const color = style$1({
          prop: 'color',
          themeKey: 'palette',
          transform: paletteTransform
        });
        const bgcolor = style$1({
          prop: 'bgcolor',
          cssProperty: 'backgroundColor',
          themeKey: 'palette',
          transform: paletteTransform
        });
        const backgroundColor = style$1({
          prop: 'backgroundColor',
          themeKey: 'palette',
          transform: paletteTransform
        });
        compose(color, bgcolor, backgroundColor);
        function sizingTransform(value) {
          return value <= 1 && value !== 0 ? `${value * 100}%` : value;
        }
        const width = style$1({
          prop: 'width',
          transform: sizingTransform
        });
        const maxWidth = props => {
          if (props.maxWidth !== undefined && props.maxWidth !== null) {
            const styleFromPropValue = propValue => {
              var _props$theme, _props$theme2;
              const breakpoint = ((_props$theme = props.theme) == null || (_props$theme = _props$theme.breakpoints) == null || (_props$theme = _props$theme.values) == null ? void 0 : _props$theme[propValue]) || values[propValue];
              if (!breakpoint) {
                return {
                  maxWidth: sizingTransform(propValue)
                };
              }
              if (((_props$theme2 = props.theme) == null || (_props$theme2 = _props$theme2.breakpoints) == null ? void 0 : _props$theme2.unit) !== 'px') {
                return {
                  maxWidth: `${breakpoint}${props.theme.breakpoints.unit}`
                };
              }
              return {
                maxWidth: breakpoint
              };
            };
            return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
          }
          return null;
        };
        maxWidth.filterProps = ['maxWidth'];
        const minWidth = style$1({
          prop: 'minWidth',
          transform: sizingTransform
        });
        const height = style$1({
          prop: 'height',
          transform: sizingTransform
        });
        const maxHeight = style$1({
          prop: 'maxHeight',
          transform: sizingTransform
        });
        const minHeight = style$1({
          prop: 'minHeight',
          transform: sizingTransform
        });
        style$1({
          prop: 'size',
          cssProperty: 'width',
          transform: sizingTransform
        });
        style$1({
          prop: 'size',
          cssProperty: 'height',
          transform: sizingTransform
        });
        const boxSizing = style$1({
          prop: 'boxSizing'
        });
        compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
        const defaultSxConfig = exports("Y", {
          // borders
          border: {
            themeKey: 'borders',
            transform: borderTransform
          },
          borderTop: {
            themeKey: 'borders',
            transform: borderTransform
          },
          borderRight: {
            themeKey: 'borders',
            transform: borderTransform
          },
          borderBottom: {
            themeKey: 'borders',
            transform: borderTransform
          },
          borderLeft: {
            themeKey: 'borders',
            transform: borderTransform
          },
          borderColor: {
            themeKey: 'palette'
          },
          borderTopColor: {
            themeKey: 'palette'
          },
          borderRightColor: {
            themeKey: 'palette'
          },
          borderBottomColor: {
            themeKey: 'palette'
          },
          borderLeftColor: {
            themeKey: 'palette'
          },
          outline: {
            themeKey: 'borders',
            transform: borderTransform
          },
          outlineColor: {
            themeKey: 'palette'
          },
          borderRadius: {
            themeKey: 'shape.borderRadius',
            style: borderRadius
          },
          // palette
          color: {
            themeKey: 'palette',
            transform: paletteTransform
          },
          bgcolor: {
            themeKey: 'palette',
            cssProperty: 'backgroundColor',
            transform: paletteTransform
          },
          backgroundColor: {
            themeKey: 'palette',
            transform: paletteTransform
          },
          // spacing
          p: {
            style: padding
          },
          pt: {
            style: padding
          },
          pr: {
            style: padding
          },
          pb: {
            style: padding
          },
          pl: {
            style: padding
          },
          px: {
            style: padding
          },
          py: {
            style: padding
          },
          padding: {
            style: padding
          },
          paddingTop: {
            style: padding
          },
          paddingRight: {
            style: padding
          },
          paddingBottom: {
            style: padding
          },
          paddingLeft: {
            style: padding
          },
          paddingX: {
            style: padding
          },
          paddingY: {
            style: padding
          },
          paddingInline: {
            style: padding
          },
          paddingInlineStart: {
            style: padding
          },
          paddingInlineEnd: {
            style: padding
          },
          paddingBlock: {
            style: padding
          },
          paddingBlockStart: {
            style: padding
          },
          paddingBlockEnd: {
            style: padding
          },
          m: {
            style: margin
          },
          mt: {
            style: margin
          },
          mr: {
            style: margin
          },
          mb: {
            style: margin
          },
          ml: {
            style: margin
          },
          mx: {
            style: margin
          },
          my: {
            style: margin
          },
          margin: {
            style: margin
          },
          marginTop: {
            style: margin
          },
          marginRight: {
            style: margin
          },
          marginBottom: {
            style: margin
          },
          marginLeft: {
            style: margin
          },
          marginX: {
            style: margin
          },
          marginY: {
            style: margin
          },
          marginInline: {
            style: margin
          },
          marginInlineStart: {
            style: margin
          },
          marginInlineEnd: {
            style: margin
          },
          marginBlock: {
            style: margin
          },
          marginBlockStart: {
            style: margin
          },
          marginBlockEnd: {
            style: margin
          },
          // display
          displayPrint: {
            cssProperty: false,
            transform: value => ({
              '@media print': {
                display: value
              }
            })
          },
          display: {},
          overflow: {},
          textOverflow: {},
          visibility: {},
          whiteSpace: {},
          // flexbox
          flexBasis: {},
          flexDirection: {},
          flexWrap: {},
          justifyContent: {},
          alignItems: {},
          alignContent: {},
          order: {},
          flex: {},
          flexGrow: {},
          flexShrink: {},
          alignSelf: {},
          justifyItems: {},
          justifySelf: {},
          // grid
          gap: {
            style: gap
          },
          rowGap: {
            style: rowGap
          },
          columnGap: {
            style: columnGap
          },
          gridColumn: {},
          gridRow: {},
          gridAutoFlow: {},
          gridAutoColumns: {},
          gridAutoRows: {},
          gridTemplateColumns: {},
          gridTemplateRows: {},
          gridTemplateAreas: {},
          gridArea: {},
          // positions
          position: {},
          zIndex: {
            themeKey: 'zIndex'
          },
          top: {},
          right: {},
          bottom: {},
          left: {},
          // shadows
          boxShadow: {
            themeKey: 'shadows'
          },
          // sizing
          width: {
            transform: sizingTransform
          },
          maxWidth: {
            style: maxWidth
          },
          minWidth: {
            transform: sizingTransform
          },
          height: {
            transform: sizingTransform
          },
          maxHeight: {
            transform: sizingTransform
          },
          minHeight: {
            transform: sizingTransform
          },
          boxSizing: {},
          // typography
          fontFamily: {
            themeKey: 'typography'
          },
          fontSize: {
            themeKey: 'typography'
          },
          fontStyle: {
            themeKey: 'typography'
          },
          fontWeight: {
            themeKey: 'typography'
          },
          letterSpacing: {},
          textTransform: {},
          lineHeight: {},
          textAlign: {},
          typography: {
            cssProperty: false,
            themeKey: 'typography'
          }
        });
        function objectsHaveSameKeys(...objects) {
          const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
          const union = new Set(allKeys);
          return objects.every(object => union.size === Object.keys(object).length);
        }
        function callIfFn(maybeFn, arg) {
          return typeof maybeFn === 'function' ? maybeFn(arg) : maybeFn;
        }

        // eslint-disable-next-line @typescript-eslint/naming-convention
        function unstable_createStyleFunctionSx() {
          function getThemeValue(prop, val, theme, config) {
            const props = {
              [prop]: val,
              theme
            };
            const options = config[prop];
            if (!options) {
              return {
                [prop]: val
              };
            }
            const _options$cssProperty2 = options.cssProperty,
              cssProperty = _options$cssProperty2 === void 0 ? prop : _options$cssProperty2,
              themeKey = options.themeKey,
              transform = options.transform,
              style = options.style;
            if (val == null) {
              return null;
            }

            // TODO v6: remove, see https://github.com/mui/material-ui/pull/38123
            if (themeKey === 'typography' && val === 'inherit') {
              return {
                [prop]: val
              };
            }
            const themeMapping = getPath(theme, themeKey) || {};
            if (style) {
              return style(props);
            }
            const styleFromPropValue = propValueFinal => {
              let value = getStyleValue(themeMapping, transform, propValueFinal);
              if (propValueFinal === value && typeof propValueFinal === 'string') {
                // Haven't found value
                value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : capitalize(propValueFinal)}`, propValueFinal);
              }
              if (cssProperty === false) {
                return value;
              }
              return {
                [cssProperty]: value
              };
            };
            return handleBreakpoints(props, val, styleFromPropValue);
          }
          function styleFunctionSx(props) {
            var _theme$unstable_sxCon;
            const _ref11 = props || {},
              sx = _ref11.sx,
              _ref11$theme = _ref11.theme,
              theme = _ref11$theme === void 0 ? {} : _ref11$theme;
            if (!sx) {
              return null; // Emotion & styled-components will neglect null
            }
            const config = (_theme$unstable_sxCon = theme.unstable_sxConfig) != null ? _theme$unstable_sxCon : defaultSxConfig;

            /*
             * Receive `sxInput` as object or callback
             * and then recursively check keys & values to create media query object styles.
             * (the result will be used in `styled`)
             */
            function traverse(sxInput) {
              let sxObject = sxInput;
              if (typeof sxInput === 'function') {
                sxObject = sxInput(theme);
              } else if (typeof sxInput !== 'object') {
                // value
                return sxInput;
              }
              if (!sxObject) {
                return null;
              }
              const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
              const breakpointsKeys = Object.keys(emptyBreakpoints);
              let css = emptyBreakpoints;
              Object.keys(sxObject).forEach(styleKey => {
                const value = callIfFn(sxObject[styleKey], theme);
                if (value !== null && value !== undefined) {
                  if (typeof value === 'object') {
                    if (config[styleKey]) {
                      css = merge(css, getThemeValue(styleKey, value, theme, config));
                    } else {
                      const breakpointsValues = handleBreakpoints({
                        theme
                      }, value, x => ({
                        [styleKey]: x
                      }));
                      if (objectsHaveSameKeys(breakpointsValues, value)) {
                        css[styleKey] = styleFunctionSx({
                          sx: value,
                          theme
                        });
                      } else {
                        css = merge(css, breakpointsValues);
                      }
                    }
                  } else {
                    css = merge(css, getThemeValue(styleKey, value, theme, config));
                  }
                }
              });
              return removeUnusedBreakpoints(breakpointsKeys, css);
            }
            return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
          }
          return styleFunctionSx;
        }
        const styleFunctionSx = exports("W", unstable_createStyleFunctionSx());
        styleFunctionSx.filterProps = ['sx'];

        /**
         * A universal utility to style components with multiple color modes. Always use it from the theme object.
         * It works with:
         *  - [Basic theme](https://mui.com/material-ui/customization/dark-mode/)
         *  - [CSS theme variables](https://mui.com/material-ui/experimental-api/css-theme-variables/overview/)
         *  - Zero-runtime engine
         *
         * Tips: Use an array over object spread and place `theme.applyStyles()` last.
         *
         * ✅ [{ background: '#e5e5e5' }, theme.applyStyles('dark', { background: '#1c1c1c' })]
         *
         * 🚫 { background: '#e5e5e5', ...theme.applyStyles('dark', { background: '#1c1c1c' })}
         *
         * @example
         * 1. using with `styled`:
         * ```jsx
         *   const Component = styled('div')(({ theme }) => [
         *     { background: '#e5e5e5' },
         *     theme.applyStyles('dark', {
         *       background: '#1c1c1c',
         *       color: '#fff',
         *     }),
         *   ]);
         * ```
         *
         * @example
         * 2. using with `sx` prop:
         * ```jsx
         *   <Box sx={theme => [
         *     { background: '#e5e5e5' },
         *     theme.applyStyles('dark', {
         *        background: '#1c1c1c',
         *        color: '#fff',
         *      }),
         *     ]}
         *   />
         * ```
         *
         * @example
         * 3. theming a component:
         * ```jsx
         *   extendTheme({
         *     components: {
         *       MuiButton: {
         *         styleOverrides: {
         *           root: ({ theme }) => [
         *             { background: '#e5e5e5' },
         *             theme.applyStyles('dark', {
         *               background: '#1c1c1c',
         *               color: '#fff',
         *             }),
         *           ],
         *         },
         *       }
         *     }
         *   })
         *```
         */
        function applyStyles(key, styles) {
          // @ts-expect-error this is 'any' type
          const theme = this;
          if (theme.vars && typeof theme.getColorSchemeSelector === 'function') {
            // If CssVarsProvider is used as a provider,
            // returns '* :where([data-mui-color-scheme="light|dark"]) &'
            const selector = theme.getColorSchemeSelector(key).replace(/(\[[^\]]+\])/, '*:where($1)');
            return {
              [selector]: styles
            };
          }
          if (theme.palette.mode === key) {
            return styles;
          }
          return {};
        }
        const _excluded$6 = ["breakpoints", "palette", "spacing", "shape"];
        function createTheme$1(options = {}, ...args) {
          const _options$breakpoints = options.breakpoints,
            breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints,
            _options$palette = options.palette,
            paletteInput = _options$palette === void 0 ? {} : _options$palette,
            spacingInput = options.spacing,
            _options$shape = options.shape,
            shapeInput = _options$shape === void 0 ? {} : _options$shape,
            other = _objectWithoutPropertiesLoose$1(options, _excluded$6);
          const breakpoints = createBreakpoints(breakpointsInput);
          const spacing = createSpacing(spacingInput);
          let muiTheme = deepmerge({
            breakpoints,
            direction: 'ltr',
            components: {},
            // Inject component definitions.
            palette: _extends({
              mode: 'light'
            }, paletteInput),
            spacing,
            shape: _extends({}, shape, shapeInput)
          }, other);
          muiTheme.applyStyles = applyStyles;
          muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
          muiTheme.unstable_sxConfig = _extends({}, defaultSxConfig, other == null ? void 0 : other.unstable_sxConfig);
          muiTheme.unstable_sx = function sx(props) {
            return styleFunctionSx({
              sx: props,
              theme: this
            });
          };
          return muiTheme;
        }
        function isObjectEmpty(obj) {
          return Object.keys(obj).length === 0;
        }
        function useTheme$1(defaultTheme = null) {
          const contextTheme = reactExports.useContext(ThemeContext);
          return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme : contextTheme;
        }
        const systemDefaultTheme = createTheme$1();
        function useTheme(defaultTheme = systemDefaultTheme) {
          return useTheme$1(defaultTheme);
        }
        const _excluded$5 = ["sx"];
        const splitProps = props => {
          var _props$theme$unstable, _props$theme;
          const result = {
            systemProps: {},
            otherProps: {}
          };
          const config = (_props$theme$unstable = props == null || (_props$theme = props.theme) == null ? void 0 : _props$theme.unstable_sxConfig) != null ? _props$theme$unstable : defaultSxConfig;
          Object.keys(props).forEach(prop => {
            if (config[prop]) {
              result.systemProps[prop] = props[prop];
            } else {
              result.otherProps[prop] = props[prop];
            }
          });
          return result;
        };
        function extendSxProp(props) {
          const inSx = props.sx,
            other = _objectWithoutPropertiesLoose$1(props, _excluded$5);
          const _splitProps = splitProps(other),
            systemProps = _splitProps.systemProps,
            otherProps = _splitProps.otherProps;
          let finalSx;
          if (Array.isArray(inSx)) {
            finalSx = [systemProps, ...inSx];
          } else if (typeof inSx === 'function') {
            finalSx = (...args) => {
              const result = inSx(...args);
              if (!isPlainObject(result)) {
                return systemProps;
              }
              return _extends({}, systemProps, result);
            };
          } else {
            finalSx = _extends({}, systemProps, inSx);
          }
          return _extends({}, otherProps, {
            sx: finalSx
          });
        }
        const defaultGenerator = componentName => componentName;
        const createClassNameGenerator = () => {
          let generate = defaultGenerator;
          return {
            configure(generator) {
              generate = generator;
            },
            generate(componentName) {
              return generate(componentName);
            },
            reset() {
              generate = defaultGenerator;
            }
          };
        };
        const ClassNameGenerator = exports("ae", createClassNameGenerator());
        function r(e) {
          var t,
            f,
            n = "";
          if ("string" == typeof e || "number" == typeof e) n += e;else if ("object" == typeof e) if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
          } else for (f in e) e[f] && (n && (n += " "), n += f);
          return n;
        }
        function clsx() {
          for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
          return n;
        }
        const _excluded$4 = ["className", "component"];
        function createBox(options = {}) {
          const themeId = options.themeId,
            defaultTheme = options.defaultTheme,
            _options$defaultClass = options.defaultClassName,
            defaultClassName = _options$defaultClass === void 0 ? 'MuiBox-root' : _options$defaultClass,
            generateClassName = options.generateClassName;
          const BoxRoot = styled('div', {
            shouldForwardProp: prop => prop !== 'theme' && prop !== 'sx' && prop !== 'as'
          })(styleFunctionSx);
          const Box = /*#__PURE__*/reactExports.forwardRef(function Box(inProps, ref) {
            const theme = useTheme(defaultTheme);
            const _extendSxProp = extendSxProp(inProps),
              className = _extendSxProp.className,
              _extendSxProp$compone = _extendSxProp.component,
              component = _extendSxProp$compone === void 0 ? 'div' : _extendSxProp$compone,
              other = _objectWithoutPropertiesLoose$1(_extendSxProp, _excluded$4);
            return /*#__PURE__*/jsxRuntimeExports.jsx(BoxRoot, _extends({
              as: component,
              ref: ref,
              className: clsx(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName),
              theme: themeId ? theme[themeId] || theme : theme
            }, other));
          });
          return Box;
        }
        const globalStateClasses = {
          active: 'active',
          checked: 'checked',
          completed: 'completed',
          disabled: 'disabled',
          error: 'error',
          expanded: 'expanded',
          focused: 'focused',
          focusVisible: 'focusVisible',
          open: 'open',
          readOnly: 'readOnly',
          required: 'required',
          selected: 'selected'
        };
        function generateUtilityClass(componentName, slot, globalStatePrefix = 'Mui') {
          const globalStateClass = globalStateClasses[slot];
          return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator.generate(componentName)}-${slot}`;
        }
        function generateUtilityClasses(componentName, slots, globalStatePrefix = 'Mui') {
          const result = {};
          slots.forEach(slot => {
            result[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
          });
          return result;
        }
        function clamp$1(val, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
          return Math.max(min, Math.min(val, max));
        }
        const clamp = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
          __proto__: null,
          default: clamp$1
        }, Symbol.toStringTag, {
          value: 'Module'
        }));
        function createMixins(breakpoints, mixins) {
          return _extends({
            toolbar: {
              minHeight: 56,
              [breakpoints.up('xs')]: {
                '@media (orientation: landscape)': {
                  minHeight: 48
                }
              },
              [breakpoints.up('sm')]: {
                minHeight: 64
              }
            }
          }, mixins);
        }
        var colorManipulator = {};
        var interopRequireDefault = {
          exports: {}
        };
        (function (module) {
          function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
              "default": e
            };
          }
          module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
        })(interopRequireDefault);
        var interopRequireDefaultExports = exports("q", interopRequireDefault.exports);
        const require$$1 = /*@__PURE__*/getAugmentedNamespace(formatMuiErrorMessage);
        const require$$2 = /*@__PURE__*/getAugmentedNamespace(clamp);
        var _interopRequireDefault = interopRequireDefaultExports;
        Object.defineProperty(colorManipulator, "__esModule", {
          value: true
        });
        var alpha_1 = exports("k", colorManipulator.alpha = alpha);
        colorManipulator.blend = blend;
        colorManipulator.colorChannel = void 0;
        var darken_1 = exports("i", colorManipulator.darken = darken);
        colorManipulator.decomposeColor = decomposeColor;
        var emphasize_1 = exports("o", colorManipulator.emphasize = emphasize);
        var getContrastRatio_1 = colorManipulator.getContrastRatio = getContrastRatio;
        colorManipulator.getLuminance = getLuminance;
        colorManipulator.hexToRgb = hexToRgb;
        colorManipulator.hslToRgb = hslToRgb;
        var lighten_1 = exports("l", colorManipulator.lighten = lighten);
        colorManipulator.private_safeAlpha = private_safeAlpha;
        colorManipulator.private_safeColorChannel = void 0;
        colorManipulator.private_safeDarken = private_safeDarken;
        colorManipulator.private_safeEmphasize = private_safeEmphasize;
        colorManipulator.private_safeLighten = private_safeLighten;
        colorManipulator.recomposeColor = recomposeColor;
        colorManipulator.rgbToHex = rgbToHex;
        var _formatMuiErrorMessage2 = _interopRequireDefault(require$$1);
        var _clamp = _interopRequireDefault(require$$2);
        function clampWrapper(value, min = 0, max = 1) {
          return (0, _clamp.default)(value, min, max);
        }
        function hexToRgb(color) {
          color = color.slice(1);
          const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, "g");
          let colors = color.match(re);
          if (colors && colors[0].length === 1) {
            colors = colors.map(n => n + n);
          }
          return colors ? `rgb${colors.length === 4 ? "a" : ""}(${colors.map((n, index) => {
            return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3;
          }).join(", ")})` : "";
        }
        function intToHex(int) {
          const hex = int.toString(16);
          return hex.length === 1 ? `0${hex}` : hex;
        }
        function decomposeColor(color) {
          if (color.type) {
            return color;
          }
          if (color.charAt(0) === "#") {
            return decomposeColor(hexToRgb(color));
          }
          const marker = color.indexOf("(");
          const type = color.substring(0, marker);
          if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(type) === -1) {
            throw new Error((0, _formatMuiErrorMessage2.default)(9, color));
          }
          let values = color.substring(marker + 1, color.length - 1);
          let colorSpace;
          if (type === "color") {
            values = values.split(" ");
            colorSpace = values.shift();
            if (values.length === 4 && values[3].charAt(0) === "/") {
              values[3] = values[3].slice(1);
            }
            if (["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(colorSpace) === -1) {
              throw new Error((0, _formatMuiErrorMessage2.default)(10, colorSpace));
            }
          } else {
            values = values.split(",");
          }
          values = values.map(value => parseFloat(value));
          return {
            type,
            values,
            colorSpace
          };
        }
        const colorChannel = color => {
          const decomposedColor = decomposeColor(color);
          return decomposedColor.values.slice(0, 3).map((val, idx) => decomposedColor.type.indexOf("hsl") !== -1 && idx !== 0 ? `${val}%` : val).join(" ");
        };
        colorManipulator.colorChannel = colorChannel;
        const private_safeColorChannel = (color, warning) => {
          try {
            return colorChannel(color);
          } catch (error) {
            if (warning && false) {
              console.warn(warning);
            }
            return color;
          }
        };
        colorManipulator.private_safeColorChannel = private_safeColorChannel;
        function recomposeColor(color) {
          const type = color.type,
            colorSpace = color.colorSpace;
          let values = color.values;
          if (type.indexOf("rgb") !== -1) {
            values = values.map((n, i) => i < 3 ? parseInt(n, 10) : n);
          } else if (type.indexOf("hsl") !== -1) {
            values[1] = `${values[1]}%`;
            values[2] = `${values[2]}%`;
          }
          if (type.indexOf("color") !== -1) {
            values = `${colorSpace} ${values.join(" ")}`;
          } else {
            values = `${values.join(", ")}`;
          }
          return `${type}(${values})`;
        }
        function rgbToHex(color) {
          if (color.indexOf("#") === 0) {
            return color;
          }
          const _decomposeColor = decomposeColor(color),
            values = _decomposeColor.values;
          return `#${values.map((n, i) => intToHex(i === 3 ? Math.round(255 * n) : n)).join("")}`;
        }
        function hslToRgb(color) {
          color = decomposeColor(color);
          const _color = color,
            values = _color.values;
          const h = values[0];
          const s = values[1] / 100;
          const l = values[2] / 100;
          const a = s * Math.min(l, 1 - l);
          const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
          let type = "rgb";
          const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
          if (color.type === "hsla") {
            type += "a";
            rgb.push(values[3]);
          }
          return recomposeColor({
            type,
            values: rgb
          });
        }
        function getLuminance(color) {
          color = decomposeColor(color);
          let rgb = color.type === "hsl" || color.type === "hsla" ? decomposeColor(hslToRgb(color)).values : color.values;
          rgb = rgb.map(val => {
            if (color.type !== "color") {
              val /= 255;
            }
            return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
          });
          return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
        }
        function getContrastRatio(foreground, background) {
          const lumA = getLuminance(foreground);
          const lumB = getLuminance(background);
          return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
        }
        function alpha(color, value) {
          color = decomposeColor(color);
          value = clampWrapper(value);
          if (color.type === "rgb" || color.type === "hsl") {
            color.type += "a";
          }
          if (color.type === "color") {
            color.values[3] = `/${value}`;
          } else {
            color.values[3] = value;
          }
          return recomposeColor(color);
        }
        function private_safeAlpha(color, value, warning) {
          try {
            return alpha(color, value);
          } catch (error) {
            if (warning && false) {
              console.warn(warning);
            }
            return color;
          }
        }
        function darken(color, coefficient) {
          color = decomposeColor(color);
          coefficient = clampWrapper(coefficient);
          if (color.type.indexOf("hsl") !== -1) {
            color.values[2] *= 1 - coefficient;
          } else if (color.type.indexOf("rgb") !== -1 || color.type.indexOf("color") !== -1) {
            for (let i = 0; i < 3; i += 1) {
              color.values[i] *= 1 - coefficient;
            }
          }
          return recomposeColor(color);
        }
        function private_safeDarken(color, coefficient, warning) {
          try {
            return darken(color, coefficient);
          } catch (error) {
            if (warning && false) {
              console.warn(warning);
            }
            return color;
          }
        }
        function lighten(color, coefficient) {
          color = decomposeColor(color);
          coefficient = clampWrapper(coefficient);
          if (color.type.indexOf("hsl") !== -1) {
            color.values[2] += (100 - color.values[2]) * coefficient;
          } else if (color.type.indexOf("rgb") !== -1) {
            for (let i = 0; i < 3; i += 1) {
              color.values[i] += (255 - color.values[i]) * coefficient;
            }
          } else if (color.type.indexOf("color") !== -1) {
            for (let i = 0; i < 3; i += 1) {
              color.values[i] += (1 - color.values[i]) * coefficient;
            }
          }
          return recomposeColor(color);
        }
        function private_safeLighten(color, coefficient, warning) {
          try {
            return lighten(color, coefficient);
          } catch (error) {
            if (warning && false) {
              console.warn(warning);
            }
            return color;
          }
        }
        function emphasize(color, coefficient = 0.15) {
          return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
        }
        function private_safeEmphasize(color, coefficient, warning) {
          try {
            return emphasize(color, coefficient);
          } catch (error) {
            if (warning && false) {
              console.warn(warning);
            }
            return color;
          }
        }
        function blend(background, overlay, opacity, gamma = 1) {
          const blendChannel = (b, o) => Math.round(Math.pow(Math.pow(b, 1 / gamma) * (1 - opacity) + Math.pow(o, 1 / gamma) * opacity, gamma));
          const backgroundColor = decomposeColor(background);
          const overlayColor = decomposeColor(overlay);
          const rgb = [blendChannel(backgroundColor.values[0], overlayColor.values[0]), blendChannel(backgroundColor.values[1], overlayColor.values[1]), blendChannel(backgroundColor.values[2], overlayColor.values[2])];
          return recomposeColor({
            type: "rgb",
            values: rgb
          });
        }
        const _excluded$3 = ["mode", "contrastThreshold", "tonalOffset"];
        const light = {
          // The colors used to style the text.
          text: {
            // The most important text.
            primary: "rgba(0, 0, 0, 0.87)",
            // Secondary text.
            secondary: "rgba(0, 0, 0, 0.6)",
            // Disabled text have even lower visual prominence.
            disabled: "rgba(0, 0, 0, 0.38)"
          },
          // The color used to divide different elements.
          divider: "rgba(0, 0, 0, 0.12)",
          // The background colors used to style the surfaces.
          // Consistency between these values is important.
          background: {
            paper: common.white,
            default: common.white
          },
          // The colors used to style the action elements.
          action: {
            // The color of an active action like an icon button.
            active: "rgba(0, 0, 0, 0.54)",
            // The color of an hovered action.
            hover: "rgba(0, 0, 0, 0.04)",
            hoverOpacity: 0.04,
            // The color of a selected action.
            selected: "rgba(0, 0, 0, 0.08)",
            selectedOpacity: 0.08,
            // The color of a disabled action.
            disabled: "rgba(0, 0, 0, 0.26)",
            // The background color of a disabled action.
            disabledBackground: "rgba(0, 0, 0, 0.12)",
            disabledOpacity: 0.38,
            focus: "rgba(0, 0, 0, 0.12)",
            focusOpacity: 0.12,
            activatedOpacity: 0.12
          }
        };
        const dark = {
          text: {
            primary: common.white,
            secondary: "rgba(255, 255, 255, 0.7)",
            disabled: "rgba(255, 255, 255, 0.5)",
            icon: "rgba(255, 255, 255, 0.5)"
          },
          divider: "rgba(255, 255, 255, 0.12)",
          background: {
            paper: "#121212",
            default: "#121212"
          },
          action: {
            active: common.white,
            hover: "rgba(255, 255, 255, 0.08)",
            hoverOpacity: 0.08,
            selected: "rgba(255, 255, 255, 0.16)",
            selectedOpacity: 0.16,
            disabled: "rgba(255, 255, 255, 0.3)",
            disabledBackground: "rgba(255, 255, 255, 0.12)",
            disabledOpacity: 0.38,
            focus: "rgba(255, 255, 255, 0.12)",
            focusOpacity: 0.12,
            activatedOpacity: 0.24
          }
        };
        function addLightOrDark(intent, direction, shade, tonalOffset) {
          const tonalOffsetLight = tonalOffset.light || tonalOffset;
          const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
          if (!intent[direction]) {
            if (intent.hasOwnProperty(shade)) {
              intent[direction] = intent[shade];
            } else if (direction === "light") {
              intent.light = lighten_1(intent.main, tonalOffsetLight);
            } else if (direction === "dark") {
              intent.dark = darken_1(intent.main, tonalOffsetDark);
            }
          }
        }
        function getDefaultPrimary(mode = "light") {
          if (mode === "dark") {
            return {
              main: blue[200],
              light: blue[50],
              dark: blue[400]
            };
          }
          return {
            main: blue[700],
            light: blue[400],
            dark: blue[800]
          };
        }
        function getDefaultSecondary(mode = "light") {
          if (mode === "dark") {
            return {
              main: purple[200],
              light: purple[50],
              dark: purple[400]
            };
          }
          return {
            main: purple[500],
            light: purple[300],
            dark: purple[700]
          };
        }
        function getDefaultError(mode = "light") {
          if (mode === "dark") {
            return {
              main: red[500],
              light: red[300],
              dark: red[700]
            };
          }
          return {
            main: red[700],
            light: red[400],
            dark: red[800]
          };
        }
        function getDefaultInfo(mode = "light") {
          if (mode === "dark") {
            return {
              main: lightBlue[400],
              light: lightBlue[300],
              dark: lightBlue[700]
            };
          }
          return {
            main: lightBlue[700],
            light: lightBlue[500],
            dark: lightBlue[900]
          };
        }
        function getDefaultSuccess(mode = "light") {
          if (mode === "dark") {
            return {
              main: green[400],
              light: green[300],
              dark: green[700]
            };
          }
          return {
            main: green[800],
            light: green[500],
            dark: green[900]
          };
        }
        function getDefaultWarning(mode = "light") {
          if (mode === "dark") {
            return {
              main: orange[400],
              light: orange[300],
              dark: orange[700]
            };
          }
          return {
            main: "#ed6c02",
            // closest to orange[800] that pass 3:1.
            light: orange[500],
            dark: orange[900]
          };
        }
        function createPalette(palette) {
          const _palette$mode = palette.mode,
            mode = _palette$mode === void 0 ? "light" : _palette$mode,
            _palette$contrastThre = palette.contrastThreshold,
            contrastThreshold = _palette$contrastThre === void 0 ? 3 : _palette$contrastThre,
            _palette$tonalOffset = palette.tonalOffset,
            tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset,
            other = _objectWithoutPropertiesLoose$1(palette, _excluded$3);
          const primary = palette.primary || getDefaultPrimary(mode);
          const secondary = palette.secondary || getDefaultSecondary(mode);
          const error = palette.error || getDefaultError(mode);
          const info = palette.info || getDefaultInfo(mode);
          const success = palette.success || getDefaultSuccess(mode);
          const warning = palette.warning || getDefaultWarning(mode);
          function getContrastText(background) {
            const contrastText = getContrastRatio_1(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
            return contrastText;
          }
          const augmentColor = ({
            color,
            name,
            mainShade = 500,
            lightShade = 300,
            darkShade = 700
          }) => {
            color = _extends({}, color);
            if (!color.main && color[mainShade]) {
              color.main = color[mainShade];
            }
            if (!color.hasOwnProperty("main")) {
              throw new Error(formatMuiErrorMessage$1(11, name ? ` (${name})` : "", mainShade));
            }
            if (typeof color.main !== "string") {
              throw new Error(formatMuiErrorMessage$1(12, name ? ` (${name})` : "", JSON.stringify(color.main)));
            }
            addLightOrDark(color, "light", lightShade, tonalOffset);
            addLightOrDark(color, "dark", darkShade, tonalOffset);
            if (!color.contrastText) {
              color.contrastText = getContrastText(color.main);
            }
            return color;
          };
          const modes = {
            dark,
            light
          };
          const paletteOutput = deepmerge(_extends({
            // A collection of common colors.
            common: _extends({}, common),
            // prevent mutable object.
            // The palette mode, can be light or dark.
            mode,
            // The colors used to represent primary interface elements for a user.
            primary: augmentColor({
              color: primary,
              name: "primary"
            }),
            // The colors used to represent secondary interface elements for a user.
            secondary: augmentColor({
              color: secondary,
              name: "secondary",
              mainShade: "A400",
              lightShade: "A200",
              darkShade: "A700"
            }),
            // The colors used to represent interface elements that the user should be made aware of.
            error: augmentColor({
              color: error,
              name: "error"
            }),
            // The colors used to represent potentially dangerous actions or important messages.
            warning: augmentColor({
              color: warning,
              name: "warning"
            }),
            // The colors used to present information to the user that is neutral and not necessarily important.
            info: augmentColor({
              color: info,
              name: "info"
            }),
            // The colors used to indicate the successful completion of an action that user triggered.
            success: augmentColor({
              color: success,
              name: "success"
            }),
            // The grey colors.
            grey,
            // Used by `getContrastText()` to maximize the contrast between
            // the background and the text.
            contrastThreshold,
            // Takes a background color and returns the text color that maximizes the contrast.
            getContrastText,
            // Generate a rich color object.
            augmentColor,
            // Used by the functions below to shift a color's luminance by approximately
            // two indexes within its tonal palette.
            // E.g., shift from Red 500 to Red 300 or Red 700.
            tonalOffset
          }, modes[mode]), other);
          return paletteOutput;
        }
        const _excluded$2 = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
        function round(value) {
          return Math.round(value * 1e5) / 1e5;
        }
        const caseAllCaps = {
          textTransform: "uppercase"
        };
        const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
        function createTypography(palette, typography) {
          const _ref = typeof typography === "function" ? typography(palette) : typography,
            _ref$fontFamily = _ref.fontFamily,
            fontFamily = _ref$fontFamily === void 0 ? defaultFontFamily : _ref$fontFamily,
            _ref$fontSize = _ref.fontSize,
            fontSize = _ref$fontSize === void 0 ? 14 : _ref$fontSize,
            _ref$fontWeightLight = _ref.fontWeightLight,
            fontWeightLight = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight,
            _ref$fontWeightRegula = _ref.fontWeightRegular,
            fontWeightRegular = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula,
            _ref$fontWeightMedium = _ref.fontWeightMedium,
            fontWeightMedium = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium,
            _ref$fontWeightBold = _ref.fontWeightBold,
            fontWeightBold = _ref$fontWeightBold === void 0 ? 700 : _ref$fontWeightBold,
            _ref$htmlFontSize = _ref.htmlFontSize,
            htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize,
            allVariants = _ref.allVariants,
            pxToRem2 = _ref.pxToRem,
            other = _objectWithoutPropertiesLoose$1(_ref, _excluded$2);
          const coef = fontSize / 14;
          const pxToRem = pxToRem2 || (size => `${size / htmlFontSize * coef}rem`);
          const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => _extends({
            fontFamily,
            fontWeight,
            fontSize: pxToRem(size),
            // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
            lineHeight
          }, fontFamily === defaultFontFamily ? {
            letterSpacing: `${round(letterSpacing / size)}em`
          } : {}, casing, allVariants);
          const variants = {
            h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
            h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
            h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
            h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
            h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
            h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
            subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
            subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
            body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
            body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
            button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
            caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
            overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
            // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
            inherit: {
              fontFamily: "inherit",
              fontWeight: "inherit",
              fontSize: "inherit",
              lineHeight: "inherit",
              letterSpacing: "inherit"
            }
          };
          return deepmerge(_extends({
            htmlFontSize,
            pxToRem,
            fontFamily,
            fontSize,
            fontWeightLight,
            fontWeightRegular,
            fontWeightMedium,
            fontWeightBold
          }, variants), other, {
            clone: false
            // No need to clone deep
          });
        }
        const shadowKeyUmbraOpacity = 0.2;
        const shadowKeyPenumbraOpacity = 0.14;
        const shadowAmbientShadowOpacity = 0.12;
        function createShadow(...px) {
          return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(',');
        }

        // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss
        const shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
        const _excluded$1 = ["duration", "easing", "delay"];
        const easing = {
          // This is the most common easing curve.
          easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
          // Objects enter the screen at full velocity from off-screen and
          // slowly decelerate to a resting point.
          easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
          // Objects leave the screen at full velocity. They do not decelerate when off-screen.
          easeIn: "cubic-bezier(0.4, 0, 1, 1)",
          // The sharp curve is used by objects that may return to the screen at any time.
          sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
        };
        const duration = exports("am", {
          shortest: 150,
          shorter: 200,
          short: 250,
          // most basic recommended timing
          standard: 300,
          // this is to be used in complex animations
          complex: 375,
          // recommended when something is entering screen
          enteringScreen: 225,
          // recommended when something is leaving screen
          leavingScreen: 195
        });
        function formatMs(milliseconds) {
          return `${Math.round(milliseconds)}ms`;
        }
        function getAutoHeightDuration(height) {
          if (!height) {
            return 0;
          }
          const constant = height / 36;
          return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
        }
        function createTransitions(inputTransitions) {
          const mergedEasing = _extends({}, easing, inputTransitions.easing);
          const mergedDuration = _extends({}, duration, inputTransitions.duration);
          const create = (props = ["all"], options = {}) => {
            const _options$duration = options.duration,
              durationOption = _options$duration === void 0 ? mergedDuration.standard : _options$duration,
              _options$easing = options.easing,
              easingOption = _options$easing === void 0 ? mergedEasing.easeInOut : _options$easing,
              _options$delay = options.delay,
              delay = _options$delay === void 0 ? 0 : _options$delay;
            _objectWithoutPropertiesLoose$1(options, _excluded$1);
            return (Array.isArray(props) ? props : [props]).map(animatedProp => `${animatedProp} ${typeof durationOption === "string" ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === "string" ? delay : formatMs(delay)}`).join(",");
          };
          return _extends({
            getAutoHeightDuration,
            create
          }, inputTransitions, {
            easing: mergedEasing,
            duration: mergedDuration
          });
        }

        // We need to centralize the zIndex definitions as they work
        // like global values in the browser.
        const zIndex = {
          mobileStepper: 1000,
          fab: 1050,
          speedDial: 1050,
          appBar: 1100,
          drawer: 1200,
          modal: 1300,
          snackbar: 1400,
          tooltip: 1500
        };
        const _excluded = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
        function createTheme(options = {}, ...args) {
          const _options$mixins = options.mixins,
            mixinsInput = _options$mixins === void 0 ? {} : _options$mixins,
            _options$palette2 = options.palette,
            paletteInput = _options$palette2 === void 0 ? {} : _options$palette2,
            _options$transitions = options.transitions,
            transitionsInput = _options$transitions === void 0 ? {} : _options$transitions,
            _options$typography = options.typography,
            typographyInput = _options$typography === void 0 ? {} : _options$typography,
            other = _objectWithoutPropertiesLoose$1(options, _excluded);
          if (options.vars) {
            throw new Error(formatMuiErrorMessage$1(18));
          }
          const palette = createPalette(paletteInput);
          const systemTheme = createTheme$1(options);
          let muiTheme = deepmerge(systemTheme, {
            mixins: createMixins(systemTheme.breakpoints, mixinsInput),
            palette,
            // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
            shadows: shadows.slice(),
            typography: createTypography(palette, typographyInput),
            transitions: createTransitions(transitionsInput),
            zIndex: _extends({}, zIndex)
          });
          muiTheme = deepmerge(muiTheme, other);
          muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
          muiTheme.unstable_sxConfig = _extends({}, defaultSxConfig, other == null ? void 0 : other.unstable_sxConfig);
          muiTheme.unstable_sx = function sx(props) {
            return styleFunctionSx({
              sx: props,
              theme: this
            });
          };
          return muiTheme;
        }
        const boxClasses = generateUtilityClasses('MuiBox', ['root']);
        const defaultTheme = createTheme();
        const Box = exports("B", createBox({
          themeId: THEME_ID,
          defaultTheme,
          defaultClassName: boxClasses.root,
          generateClassName: ClassNameGenerator.generate
        }));
        const loadingWrapper = "_loadingWrapper_blx2p_1";
        const loadingDots = "_loadingDots_blx2p_9";
        const l1 = "_l1_blx2p_1";
        const styles = {
          loadingWrapper: loadingWrapper,
          loadingDots: loadingDots,
          l1: l1
        };
        const LoadingDots = exports("A", () => {
          var _theme$palette;
          const theme = useTheme$2();
          return /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
            className: styles.loadingWrapper,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
              style: {
                background: `radial-gradient(circle closest-side, ${theme === null || theme === void 0 || (_theme$palette = theme.palette) === null || _theme$palette === void 0 || (_theme$palette = _theme$palette.primary) === null || _theme$palette === void 0 ? void 0 : _theme$palette.main} 90%, #0000) 0 / calc(100% / 3) 100% space`
              },
              className: styles.loadingDots
            })
          });
        });
        const Android = reactExports.lazy(() => __vitePreload(() => module.import('./Android-legacy-L4DuSmZq.js'), false ? __VITE_PRELOAD__ : void 0));
        const Web = reactExports.lazy(() => __vitePreload(() => module.import('./Web-legacy-G20LTzwp.js').then(n => n.Z), false ? __VITE_PRELOAD__ : void 0));
        function App() {
          switch ("android-debuggable") {
            case "android-debuggable":
            case "android":
              return /* @__PURE__ */jsxRuntimeExports.jsx(reactExports.Suspense, {
                fallback: /* @__PURE__ */jsxRuntimeExports.jsx(LoadingDots, {}),
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Android, {})
              });
            default:
              return /* @__PURE__ */jsxRuntimeExports.jsx(reactExports.Suspense, {
                fallback: /* @__PURE__ */jsxRuntimeExports.jsx(LoadingDots, {}),
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Web, {})
              });
          }
        }
        instance.init({
          interpolation: {
            escapeValue: false
          },
          // React already does escaping
          lng: "en",
          fallbackLng: "en",
          resources: {
            en: {
              design: design_en,
              run: run_en,
              manage: manage_en
            },
            de: {
              design: design_de,
              run: run_de,
              manage: manage_de
            },
            ar: {
              design: design_ar,
              run: run_ar,
              manage: manage_ar
            }
          }
        });
        const container = document.getElementById("root");
        const root = createRoot(container);
        root.render(/* @__PURE__ */jsxRuntimeExports.jsx(I18nextProvider, {
          i18n: instance,
          children: /* @__PURE__ */jsxRuntimeExports.jsx(BrowserRouter, {
            children: /* @__PURE__ */jsxRuntimeExports.jsx(App, {})
          })
        }));
        unregister();
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-BLatMfxz.js.map
