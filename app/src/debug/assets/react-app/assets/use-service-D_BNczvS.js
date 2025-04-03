var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b, _c, _d;
import { G as _arrayWithHoles, H as _unsupportedIterableToArray, I as _nonIterableRest, r as reactExports, J as I18nContext, K as ReportNamespaces, M as getDefaults, O as _defineProperty, P as getI18n, w as getDefaultExportFromCjs, Q as deepmerge$1, S as isPlainObject$3, h as capitalize$1, c as createTheme$1, T as createBreakpoints, U as applyStyles, a as useTheme$2, j as jsxRuntimeExports, V as GlobalStyles$2, W as styleFunctionSx$1, e as extendSxProp, X as unstable_createStyleFunctionSx, Y as defaultSxConfig, Z as internal_processStyles, b as _objectWithoutPropertiesLoose, $ as styled$2, _ as _extends, a0 as formatMuiErrorMessage, a1 as clamp, a2 as React, d as clsx, a3 as useTheme$3, a4 as ThemeContext$1, g as generateUtilityClass, a5 as handleBreakpoints, a6 as resolveBreakpointValues, a7 as createUnarySpacing, a8 as mergeBreakpointsInOrder, a9 as getValue, x as createTheme$2, aa as THEME_ID, ab as getAugmentedNamespace, ac as _extends$1, ad as styledEngine, q as interopRequireDefaultExports, f as generateUtilityClasses, ae as ClassNameGenerator, af as _setPrototypeOf, R as React$1, ag as ReactDOM, ah as _assertThisInitialized, k as alpha_1, m as keyframes, ai as reactDomExports, aj as hoistStatics, p as commonjsGlobal, v as createCache, B as Box, s as useNavigate } from "./index-BXKg_X9w.js";
function warn() {
  if (console && console.warn) {
    var _console;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (typeof args[0] === "string") args[0] = "react-i18next:: ".concat(args[0]);
    (_console = console).warn.apply(_console, args);
  }
}
var alreadyWarned = {};
function warnOnce() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }
  if (typeof args[0] === "string" && alreadyWarned[args[0]]) return;
  if (typeof args[0] === "string") alreadyWarned[args[0]] = /* @__PURE__ */ new Date();
  warn.apply(void 0, args);
}
function loadNamespaces(i18n, ns, cb) {
  i18n.loadNamespaces(ns, function() {
    if (i18n.isInitialized) {
      cb();
    } else {
      var initialized = function initialized2() {
        setTimeout(function() {
          i18n.off("initialized", initialized2);
        }, 0);
        cb();
      };
      i18n.on("initialized", initialized);
    }
  });
}
function oldI18nextHasLoadedNamespace(ns, i18n) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var lng = i18n.languages[0];
  var fallbackLng = i18n.options ? i18n.options.fallbackLng : false;
  var lastLng = i18n.languages[i18n.languages.length - 1];
  if (lng.toLowerCase() === "cimode") return true;
  var loadNotPending = function loadNotPending2(l2, n2) {
    var loadState = i18n.services.backendConnector.state["".concat(l2, "|").concat(n2)];
    return loadState === -1 || loadState === 2;
  };
  if (options.bindI18n && options.bindI18n.indexOf("languageChanging") > -1 && i18n.services.backendConnector.backend && i18n.isLanguageChangingTo && !loadNotPending(i18n.isLanguageChangingTo, ns)) return false;
  if (i18n.hasResourceBundle(lng, ns)) return true;
  if (!i18n.services.backendConnector.backend || i18n.options.resources && !i18n.options.partialBundledLanguages) return true;
  if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
  return false;
}
function hasLoadedNamespace(ns, i18n) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!i18n.languages || !i18n.languages.length) {
    warnOnce("i18n.languages were undefined or empty", i18n.languages);
    return true;
  }
  var isNewerI18next = i18n.options.ignoreJSONStructure !== void 0;
  if (!isNewerI18next) {
    return oldI18nextHasLoadedNamespace(ns, i18n, options);
  }
  return i18n.hasLoadedNamespace(ns, {
    precheck: function precheck(i18nInstance, loadNotPending) {
      if (options.bindI18n && options.bindI18n.indexOf("languageChanging") > -1 && i18nInstance.services.backendConnector.backend && i18nInstance.isLanguageChangingTo && !loadNotPending(i18nInstance.isLanguageChangingTo, ns)) return false;
    }
  });
}
function _iterableToArrayLimit(r2, l2) {
  var t2 = null == r2 ? null : "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
  if (null != t2) {
    var e2, n2, i2, u2, a2 = [], f2 = true, o2 = false;
    try {
      if (i2 = (t2 = t2.call(r2)).next, 0 === l2) {
        if (Object(t2) !== t2) return;
        f2 = false;
      } else for (; !(f2 = (e2 = i2.call(t2)).done) && (a2.push(e2.value), a2.length !== l2); f2 = true) ;
    } catch (r3) {
      o2 = true, n2 = r3;
    } finally {
      try {
        if (!f2 && null != t2["return"] && (u2 = t2["return"](), Object(u2) !== u2)) return;
      } finally {
        if (o2) throw n2;
      }
    }
    return a2;
  }
}
function _slicedToArray(r2, e2) {
  return _arrayWithHoles(r2) || _iterableToArrayLimit(r2, e2) || _unsupportedIterableToArray(r2, e2) || _nonIterableRest();
}
function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    if (i2 % 2) {
      ownKeys$1(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var usePrevious = function usePrevious2(value, ignore) {
  var ref = reactExports.useRef();
  reactExports.useEffect(function() {
    ref.current = value;
  }, [value, ignore]);
  return ref.current;
};
function useTranslation(ns) {
  var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var i18nFromProps = props.i18n;
  var _ref = reactExports.useContext(I18nContext) || {}, i18nFromContext = _ref.i18n, defaultNSFromContext = _ref.defaultNS;
  var i18n = i18nFromProps || i18nFromContext || getI18n();
  if (i18n && !i18n.reportNamespaces) i18n.reportNamespaces = new ReportNamespaces();
  if (!i18n) {
    warnOnce("You will need to pass in an i18next instance by using initReactI18next");
    var notReadyT = function notReadyT2(k2) {
      return Array.isArray(k2) ? k2[k2.length - 1] : k2;
    };
    var retNotReady = [notReadyT, {}, false];
    retNotReady.t = notReadyT;
    retNotReady.i18n = {};
    retNotReady.ready = false;
    return retNotReady;
  }
  if (i18n.options.react && i18n.options.react.wait !== void 0) warnOnce("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  var i18nOptions = _objectSpread(_objectSpread(_objectSpread({}, getDefaults()), i18n.options.react), props);
  var useSuspense = i18nOptions.useSuspense, keyPrefix = i18nOptions.keyPrefix;
  var namespaces = ns || defaultNSFromContext || i18n.options && i18n.options.defaultNS;
  namespaces = typeof namespaces === "string" ? [namespaces] : namespaces || ["translation"];
  if (i18n.reportNamespaces.addUsedNamespaces) i18n.reportNamespaces.addUsedNamespaces(namespaces);
  var ready = (i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every(function(n2) {
    return hasLoadedNamespace(n2, i18n, i18nOptions);
  });
  function getT() {
    return i18n.getFixedT(null, i18nOptions.nsMode === "fallback" ? namespaces : namespaces[0], keyPrefix);
  }
  var _useState = reactExports.useState(getT), _useState2 = _slicedToArray(_useState, 2), t2 = _useState2[0], setT = _useState2[1];
  var joinedNS = namespaces.join();
  var previousJoinedNS = usePrevious(joinedNS);
  var isMounted = reactExports.useRef(true);
  reactExports.useEffect(function() {
    var bindI18n = i18nOptions.bindI18n, bindI18nStore = i18nOptions.bindI18nStore;
    isMounted.current = true;
    if (!ready && !useSuspense) {
      loadNamespaces(i18n, namespaces, function() {
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
    return function() {
      isMounted.current = false;
      if (bindI18n && i18n) bindI18n.split(" ").forEach(function(e2) {
        return i18n.off(e2, boundReset);
      });
      if (bindI18nStore && i18n) bindI18nStore.split(" ").forEach(function(e2) {
        return i18n.store.off(e2, boundReset);
      });
    };
  }, [i18n, joinedNS]);
  var isInitial = reactExports.useRef(true);
  reactExports.useEffect(function() {
    if (isMounted.current && !isInitial.current) {
      setT(getT);
    }
    isInitial.current = false;
  }, [i18n, keyPrefix]);
  var ret = [t2, i18n, ready];
  ret.t = t2;
  ret.i18n = i18n;
  ret.ready = ready;
  if (ready) return ret;
  if (!ready && !useSuspense) return ret;
  throw new Promise(function(resolve) {
    loadNamespaces(i18n, namespaces, function() {
      resolve();
    });
  });
}
var propTypes = { exports: {} };
var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
var ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim2(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      return;
    }
    var err = new Error(
      "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
    );
    err.name = "Invariant Violation";
    throw err;
  }
  shim2.isRequired = shim2;
  function getShim() {
    return shim2;
  }
  var ReactPropTypes = {
    array: shim2,
    bigint: shim2,
    bool: shim2,
    func: shim2,
    number: shim2,
    object: shim2,
    string: shim2,
    symbol: shim2,
    any: shim2,
    arrayOf: getShim,
    element: shim2,
    elementType: shim2,
    instanceOf: getShim,
    node: shim2,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
{
  propTypes.exports = factoryWithThrowingShims();
}
var propTypesExports = propTypes.exports;
const PropTypes = /* @__PURE__ */ getDefaultExportFromCjs(propTypesExports);
const deepmerge = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: deepmerge$1,
  isPlainObject: isPlainObject$3
}, Symbol.toStringTag, { value: "Module" }));
const capitalize = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: capitalize$1
}, Symbol.toStringTag, { value: "Module" }));
const createTheme = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: createTheme$1,
  private_createBreakpoints: createBreakpoints,
  unstable_applyStyles: applyStyles
}, Symbol.toStringTag, { value: "Module" }));
function GlobalStyles$1({
  styles: styles2,
  themeId,
  defaultTheme: defaultTheme2 = {}
}) {
  const upperTheme = useTheme$2(defaultTheme2);
  const globalStyles = typeof styles2 === "function" ? styles2(themeId ? upperTheme[themeId] || upperTheme : upperTheme) : styles2;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(GlobalStyles$2, {
    styles: globalStyles
  });
}
const styleFunctionSx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: styleFunctionSx$1,
  extendSxProp,
  unstable_createStyleFunctionSx,
  unstable_defaultSxConfig: defaultSxConfig
}, Symbol.toStringTag, { value: "Module" }));
var reactIs = { exports: {} };
var reactIs_production_min = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1 = Symbol.for("react.element"), c$1 = Symbol.for("react.portal"), d$1 = Symbol.for("react.fragment"), e$1 = Symbol.for("react.strict_mode"), f$1 = Symbol.for("react.profiler"), g$1 = Symbol.for("react.provider"), h$3 = Symbol.for("react.context"), k$2 = Symbol.for("react.server_context"), l$2 = Symbol.for("react.forward_ref"), m$2 = Symbol.for("react.suspense"), n$3 = Symbol.for("react.suspense_list"), p$3 = Symbol.for("react.memo"), q$3 = Symbol.for("react.lazy"), t$3 = Symbol.for("react.offscreen"), u$3;
u$3 = Symbol.for("react.module.reference");
function v$2(a2) {
  if ("object" === typeof a2 && null !== a2) {
    var r2 = a2.$$typeof;
    switch (r2) {
      case b$1:
        switch (a2 = a2.type, a2) {
          case d$1:
          case f$1:
          case e$1:
          case m$2:
          case n$3:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case k$2:
              case h$3:
              case l$2:
              case q$3:
              case p$3:
              case g$1:
                return a2;
              default:
                return r2;
            }
        }
      case c$1:
        return r2;
    }
  }
}
reactIs_production_min.ContextConsumer = h$3;
reactIs_production_min.ContextProvider = g$1;
reactIs_production_min.Element = b$1;
reactIs_production_min.ForwardRef = l$2;
reactIs_production_min.Fragment = d$1;
reactIs_production_min.Lazy = q$3;
reactIs_production_min.Memo = p$3;
reactIs_production_min.Portal = c$1;
reactIs_production_min.Profiler = f$1;
reactIs_production_min.StrictMode = e$1;
reactIs_production_min.Suspense = m$2;
reactIs_production_min.SuspenseList = n$3;
reactIs_production_min.isAsyncMode = function() {
  return false;
};
reactIs_production_min.isConcurrentMode = function() {
  return false;
};
reactIs_production_min.isContextConsumer = function(a2) {
  return v$2(a2) === h$3;
};
reactIs_production_min.isContextProvider = function(a2) {
  return v$2(a2) === g$1;
};
reactIs_production_min.isElement = function(a2) {
  return "object" === typeof a2 && null !== a2 && a2.$$typeof === b$1;
};
reactIs_production_min.isForwardRef = function(a2) {
  return v$2(a2) === l$2;
};
reactIs_production_min.isFragment = function(a2) {
  return v$2(a2) === d$1;
};
reactIs_production_min.isLazy = function(a2) {
  return v$2(a2) === q$3;
};
reactIs_production_min.isMemo = function(a2) {
  return v$2(a2) === p$3;
};
reactIs_production_min.isPortal = function(a2) {
  return v$2(a2) === c$1;
};
reactIs_production_min.isProfiler = function(a2) {
  return v$2(a2) === f$1;
};
reactIs_production_min.isStrictMode = function(a2) {
  return v$2(a2) === e$1;
};
reactIs_production_min.isSuspense = function(a2) {
  return v$2(a2) === m$2;
};
reactIs_production_min.isSuspenseList = function(a2) {
  return v$2(a2) === n$3;
};
reactIs_production_min.isValidElementType = function(a2) {
  return "string" === typeof a2 || "function" === typeof a2 || a2 === d$1 || a2 === f$1 || a2 === e$1 || a2 === m$2 || a2 === n$3 || a2 === t$3 || "object" === typeof a2 && null !== a2 && (a2.$$typeof === q$3 || a2.$$typeof === p$3 || a2.$$typeof === g$1 || a2.$$typeof === h$3 || a2.$$typeof === l$2 || a2.$$typeof === u$3 || void 0 !== a2.getModuleId) ? true : false;
};
reactIs_production_min.typeOf = v$2;
{
  reactIs.exports = reactIs_production_min;
}
var reactIsExports = reactIs.exports;
const fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function getFunctionName(fn2) {
  const match2 = "".concat(fn2).match(fnNameMatchRegex);
  const name = match2 && match2[1];
  return name || "";
}
function getFunctionComponentName(Component, fallback = "") {
  return Component.displayName || Component.name || getFunctionName(Component) || fallback;
}
function getWrappedName(outerType, innerType, wrapperName) {
  const functionName = getFunctionComponentName(innerType);
  return outerType.displayName || (functionName !== "" ? "".concat(wrapperName, "(").concat(functionName, ")") : wrapperName);
}
function getDisplayName$1(Component) {
  if (Component == null) {
    return void 0;
  }
  if (typeof Component === "string") {
    return Component;
  }
  if (typeof Component === "function") {
    return getFunctionComponentName(Component, "Component");
  }
  if (typeof Component === "object") {
    switch (Component.$$typeof) {
      case reactIsExports.ForwardRef:
        return getWrappedName(Component, Component.render, "ForwardRef");
      case reactIsExports.Memo:
        return getWrappedName(Component, Component.type, "memo");
      default:
        return void 0;
    }
  }
  return void 0;
}
const getDisplayName = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: getDisplayName$1,
  getFunctionName
}, Symbol.toStringTag, { value: "Module" }));
const _excluded$y = ["ownerState"], _excluded2$4 = ["variants"], _excluded3$2 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function isEmpty$3(obj) {
  return Object.keys(obj).length === 0;
}
function isStringTag$1(tag) {
  return typeof tag === "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96;
}
function shouldForwardProp$1(prop) {
  return prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
}
const systemDefaultTheme$1 = createTheme$1();
const lowercaseFirstLetter$1 = (string) => {
  if (!string) {
    return string;
  }
  return string.charAt(0).toLowerCase() + string.slice(1);
};
function resolveTheme$1({
  defaultTheme: defaultTheme2,
  theme,
  themeId
}) {
  return isEmpty$3(theme) ? defaultTheme2 : theme[themeId] || theme;
}
function defaultOverridesResolver$1(slot) {
  if (!slot) {
    return null;
  }
  return (props, styles2) => styles2[slot];
}
function processStyleArg$1(callableStyle, _ref) {
  let {
    ownerState
  } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded$y);
  const resolvedStylesArg = typeof callableStyle === "function" ? callableStyle(_extends({
    ownerState
  }, props)) : callableStyle;
  if (Array.isArray(resolvedStylesArg)) {
    return resolvedStylesArg.flatMap((resolvedStyle) => processStyleArg$1(resolvedStyle, _extends({
      ownerState
    }, props)));
  }
  if (!!resolvedStylesArg && typeof resolvedStylesArg === "object" && Array.isArray(resolvedStylesArg.variants)) {
    const {
      variants = []
    } = resolvedStylesArg, otherStyles = _objectWithoutPropertiesLoose(resolvedStylesArg, _excluded2$4);
    let result = otherStyles;
    variants.forEach((variant) => {
      let isMatch = true;
      if (typeof variant.props === "function") {
        isMatch = variant.props(_extends({
          ownerState
        }, props, ownerState));
      } else {
        Object.keys(variant.props).forEach((key) => {
          if ((ownerState == null ? void 0 : ownerState[key]) !== variant.props[key] && props[key] !== variant.props[key]) {
            isMatch = false;
          }
        });
      }
      if (isMatch) {
        if (!Array.isArray(result)) {
          result = [result];
        }
        result.push(typeof variant.style === "function" ? variant.style(_extends({
          ownerState
        }, props, ownerState)) : variant.style);
      }
    });
    return result;
  }
  return resolvedStylesArg;
}
function createStyled$2(input = {}) {
  const {
    themeId,
    defaultTheme: defaultTheme2 = systemDefaultTheme$1,
    rootShouldForwardProp: rootShouldForwardProp2 = shouldForwardProp$1,
    slotShouldForwardProp: slotShouldForwardProp2 = shouldForwardProp$1
  } = input;
  const systemSx = (props) => {
    return styleFunctionSx$1(_extends({}, props, {
      theme: resolveTheme$1(_extends({}, props, {
        defaultTheme: defaultTheme2,
        themeId
      }))
    }));
  };
  systemSx.__mui_systemSx = true;
  return (tag, inputOptions = {}) => {
    internal_processStyles(tag, (styles2) => styles2.filter((style2) => !(style2 != null && style2.__mui_systemSx)));
    const {
      name: componentName,
      slot: componentSlot,
      skipVariantsResolver: inputSkipVariantsResolver,
      skipSx: inputSkipSx,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: overridesResolver2 = defaultOverridesResolver$1(lowercaseFirstLetter$1(componentSlot))
    } = inputOptions, options = _objectWithoutPropertiesLoose(inputOptions, _excluded3$2);
    const skipVariantsResolver = inputSkipVariantsResolver !== void 0 ? inputSkipVariantsResolver : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      componentSlot && componentSlot !== "Root" && componentSlot !== "root" || false
    );
    const skipSx = inputSkipSx || false;
    let label;
    let shouldForwardPropOption = shouldForwardProp$1;
    if (componentSlot === "Root" || componentSlot === "root") {
      shouldForwardPropOption = rootShouldForwardProp2;
    } else if (componentSlot) {
      shouldForwardPropOption = slotShouldForwardProp2;
    } else if (isStringTag$1(tag)) {
      shouldForwardPropOption = void 0;
    }
    const defaultStyledResolver = styled$2(tag, _extends({
      shouldForwardProp: shouldForwardPropOption,
      label
    }, options));
    const transformStyleArg = (stylesArg) => {
      if (typeof stylesArg === "function" && stylesArg.__emotion_real !== stylesArg || isPlainObject$3(stylesArg)) {
        return (props) => processStyleArg$1(stylesArg, _extends({}, props, {
          theme: resolveTheme$1({
            theme: props.theme,
            defaultTheme: defaultTheme2,
            themeId
          })
        }));
      }
      return stylesArg;
    };
    const muiStyledResolver = (styleArg, ...expressions) => {
      let transformedStyleArg = transformStyleArg(styleArg);
      const expressionsWithDefaultTheme = expressions ? expressions.map(transformStyleArg) : [];
      if (componentName && overridesResolver2) {
        expressionsWithDefaultTheme.push((props) => {
          const theme = resolveTheme$1(_extends({}, props, {
            defaultTheme: defaultTheme2,
            themeId
          }));
          if (!theme.components || !theme.components[componentName] || !theme.components[componentName].styleOverrides) {
            return null;
          }
          const styleOverrides = theme.components[componentName].styleOverrides;
          const resolvedStyleOverrides = {};
          Object.entries(styleOverrides).forEach(([slotKey, slotStyle]) => {
            resolvedStyleOverrides[slotKey] = processStyleArg$1(slotStyle, _extends({}, props, {
              theme
            }));
          });
          return overridesResolver2(props, resolvedStyleOverrides);
        });
      }
      if (componentName && !skipVariantsResolver) {
        expressionsWithDefaultTheme.push((props) => {
          var _theme$components;
          const theme = resolveTheme$1(_extends({}, props, {
            defaultTheme: defaultTheme2,
            themeId
          }));
          const themeVariants = theme == null || (_theme$components = theme.components) == null || (_theme$components = _theme$components[componentName]) == null ? void 0 : _theme$components.variants;
          return processStyleArg$1({
            variants: themeVariants
          }, _extends({}, props, {
            theme
          }));
        });
      }
      if (!skipSx) {
        expressionsWithDefaultTheme.push(systemSx);
      }
      const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;
      if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
        const placeholders = new Array(numOfCustomFnsApplied).fill("");
        transformedStyleArg = [...styleArg, ...placeholders];
        transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
      }
      const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);
      if (tag.muiName) {
        Component.muiName = tag.muiName;
      }
      return Component;
    };
    if (defaultStyledResolver.withConfig) {
      muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
    }
    return muiStyledResolver;
  };
}
const styled$1 = createStyled$2();
function resolveProps(defaultProps2, props) {
  const output = _extends({}, props);
  Object.keys(defaultProps2).forEach((propName) => {
    if (propName.toString().match(/^(components|slots)$/)) {
      output[propName] = _extends({}, defaultProps2[propName], output[propName]);
    } else if (propName.toString().match(/^(componentsProps|slotProps)$/)) {
      const defaultSlotProps = defaultProps2[propName] || {};
      const slotProps = props[propName];
      output[propName] = {};
      if (!slotProps || !Object.keys(slotProps)) {
        output[propName] = defaultSlotProps;
      } else if (!defaultSlotProps || !Object.keys(defaultSlotProps)) {
        output[propName] = slotProps;
      } else {
        output[propName] = _extends({}, slotProps);
        Object.keys(defaultSlotProps).forEach((slotPropName) => {
          output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName]);
        });
      }
    } else if (output[propName] === void 0) {
      output[propName] = defaultProps2[propName];
    }
  });
  return output;
}
function getThemeProps$1(params) {
  const {
    theme,
    name,
    props
  } = params;
  if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
    return props;
  }
  return resolveProps(theme.components[name].defaultProps, props);
}
function useThemeProps({
  props,
  name,
  defaultTheme: defaultTheme2,
  themeId
}) {
  let theme = useTheme$2(defaultTheme2);
  if (themeId) {
    theme = theme[themeId] || theme;
  }
  const mergedProps = getThemeProps$1({
    theme,
    name,
    props
  });
  return mergedProps;
}
const useEnhancedEffect = typeof window !== "undefined" ? reactExports.useLayoutEffect : reactExports.useEffect;
function clampWrapper(value, min = 0, max = 1) {
  return clamp(value, min, max);
}
function hexToRgb$1(color) {
  color = color.slice(1);
  const re = new RegExp(".{1,".concat(color.length >= 6 ? 2 : 1, "}"), "g");
  let colors = color.match(re);
  if (colors && colors[0].length === 1) {
    colors = colors.map((n2) => n2 + n2);
  }
  return colors ? "rgb".concat(colors.length === 4 ? "a" : "", "(").concat(colors.map((n2, index) => {
    return index < 3 ? parseInt(n2, 16) : Math.round(parseInt(n2, 16) / 255 * 1e3) / 1e3;
  }).join(", "), ")") : "";
}
function decomposeColor(color) {
  if (color.type) {
    return color;
  }
  if (color.charAt(0) === "#") {
    return decomposeColor(hexToRgb$1(color));
  }
  const marker = color.indexOf("(");
  const type = color.substring(0, marker);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(type) === -1) {
    throw new Error(formatMuiErrorMessage(9, color));
  }
  let values2 = color.substring(marker + 1, color.length - 1);
  let colorSpace;
  if (type === "color") {
    values2 = values2.split(" ");
    colorSpace = values2.shift();
    if (values2.length === 4 && values2[3].charAt(0) === "/") {
      values2[3] = values2[3].slice(1);
    }
    if (["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(colorSpace) === -1) {
      throw new Error(formatMuiErrorMessage(10, colorSpace));
    }
  } else {
    values2 = values2.split(",");
  }
  values2 = values2.map((value) => parseFloat(value));
  return {
    type,
    values: values2,
    colorSpace
  };
}
function recomposeColor(color) {
  const {
    type,
    colorSpace
  } = color;
  let {
    values: values2
  } = color;
  if (type.indexOf("rgb") !== -1) {
    values2 = values2.map((n2, i2) => i2 < 3 ? parseInt(n2, 10) : n2);
  } else if (type.indexOf("hsl") !== -1) {
    values2[1] = "".concat(values2[1], "%");
    values2[2] = "".concat(values2[2], "%");
  }
  if (type.indexOf("color") !== -1) {
    values2 = "".concat(colorSpace, " ").concat(values2.join(" "));
  } else {
    values2 = "".concat(values2.join(", "));
  }
  return "".concat(type, "(").concat(values2, ")");
}
function alpha(color, value) {
  color = decomposeColor(color);
  value = clampWrapper(value);
  if (color.type === "rgb" || color.type === "hsl") {
    color.type += "a";
  }
  if (color.type === "color") {
    color.values[3] = "/".concat(value);
  } else {
    color.values[3] = value;
  }
  return recomposeColor(color);
}
function createChainedFunction(...funcs) {
  return funcs.reduce((acc, func) => {
    if (func == null) {
      return acc;
    }
    return function chainedFunction(...args) {
      acc.apply(this, args);
      func.apply(this, args);
    };
  }, () => {
  });
}
function debounce(func, wait = 166) {
  let timeout;
  function debounced(...args) {
    const later = () => {
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }
  debounced.clear = () => {
    clearTimeout(timeout);
  };
  return debounced;
}
function deprecatedPropType(validator2, reason) {
  {
    return () => null;
  }
}
function isMuiElement(element, muiNames) {
  var _muiName, _element$type;
  return /* @__PURE__ */ reactExports.isValidElement(element) && muiNames.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (_muiName = element.type.muiName) != null ? _muiName : (_element$type = element.type) == null || (_element$type = _element$type._payload) == null || (_element$type = _element$type.value) == null ? void 0 : _element$type.muiName
  ) !== -1;
}
function ownerDocument(node2) {
  return node2 && node2.ownerDocument || document;
}
function ownerWindow(node2) {
  const doc = ownerDocument(node2);
  return doc.defaultView || window;
}
function requirePropFactory(componentNameInError, Component) {
  {
    return () => null;
  }
}
function setRef$1(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}
let globalId = 0;
function useGlobalId(idOverride) {
  const [defaultId, setDefaultId] = reactExports.useState(idOverride);
  const id = idOverride || defaultId;
  reactExports.useEffect(() => {
    if (defaultId == null) {
      globalId += 1;
      setDefaultId("mui-".concat(globalId));
    }
  }, [defaultId]);
  return id;
}
const maybeReactUseId = React["useId".toString()];
function useId(idOverride) {
  if (maybeReactUseId !== void 0) {
    const reactId = maybeReactUseId();
    return idOverride != null ? idOverride : reactId;
  }
  return useGlobalId(idOverride);
}
function unsupportedProp(props, propName, componentName, location, propFullName) {
  {
    return null;
  }
}
function useControlled({
  controlled,
  default: defaultProp,
  name,
  state = "value"
}) {
  const {
    current: isControlled
  } = reactExports.useRef(controlled !== void 0);
  const [valueState, setValue] = reactExports.useState(defaultProp);
  const value = isControlled ? controlled : valueState;
  const setValueIfUncontrolled = reactExports.useCallback((newValue) => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}
function useEventCallback(fn2) {
  const ref = reactExports.useRef(fn2);
  useEnhancedEffect(() => {
    ref.current = fn2;
  });
  return reactExports.useRef((...args) => (
    // @ts-expect-error hide `this`
    (0, ref.current)(...args)
  )).current;
}
function useForkRef(...refs) {
  return reactExports.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (instance2) => {
      refs.forEach((ref) => {
        setRef$1(ref, instance2);
      });
    };
  }, refs);
}
const UNINITIALIZED = {};
function useLazyRef(init2, initArg) {
  const ref = reactExports.useRef(UNINITIALIZED);
  if (ref.current === UNINITIALIZED) {
    ref.current = init2(initArg);
  }
  return ref;
}
const EMPTY = [];
function useOnMount(fn2) {
  reactExports.useEffect(fn2, EMPTY);
}
class Timeout {
  constructor() {
    this.currentId = null;
    this.clear = () => {
      if (this.currentId !== null) {
        clearTimeout(this.currentId);
        this.currentId = null;
      }
    };
    this.disposeEffect = () => {
      return this.clear;
    };
  }
  static create() {
    return new Timeout();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(delay, fn2) {
    this.clear();
    this.currentId = setTimeout(() => {
      this.currentId = null;
      fn2();
    }, delay);
  }
}
function useTimeout() {
  const timeout = useLazyRef(Timeout.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}
let hadKeyboardEvent = true;
let hadFocusVisibleRecently = false;
const hadFocusVisibleRecentlyTimeout = new Timeout();
const inputTypesWhitelist = {
  text: true,
  search: true,
  url: true,
  tel: true,
  email: true,
  password: true,
  number: true,
  date: true,
  month: true,
  week: true,
  time: true,
  datetime: true,
  "datetime-local": true
};
function focusTriggersKeyboardModality(node2) {
  const {
    type,
    tagName
  } = node2;
  if (tagName === "INPUT" && inputTypesWhitelist[type] && !node2.readOnly) {
    return true;
  }
  if (tagName === "TEXTAREA" && !node2.readOnly) {
    return true;
  }
  if (node2.isContentEditable) {
    return true;
  }
  return false;
}
function handleKeyDown(event) {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }
  hadKeyboardEvent = true;
}
function handlePointerDown() {
  hadKeyboardEvent = false;
}
function handleVisibilityChange() {
  if (this.visibilityState === "hidden") {
    if (hadFocusVisibleRecently) {
      hadKeyboardEvent = true;
    }
  }
}
function prepare(doc) {
  doc.addEventListener("keydown", handleKeyDown, true);
  doc.addEventListener("mousedown", handlePointerDown, true);
  doc.addEventListener("pointerdown", handlePointerDown, true);
  doc.addEventListener("touchstart", handlePointerDown, true);
  doc.addEventListener("visibilitychange", handleVisibilityChange, true);
}
function isFocusVisible(event) {
  const {
    target
  } = event;
  try {
    return target.matches(":focus-visible");
  } catch (error2) {
  }
  return hadKeyboardEvent || focusTriggersKeyboardModality(target);
}
function useIsFocusVisible() {
  const ref = reactExports.useCallback((node2) => {
    if (node2 != null) {
      prepare(node2.ownerDocument);
    }
  }, []);
  const isFocusVisibleRef = reactExports.useRef(false);
  function handleBlurVisible() {
    if (isFocusVisibleRef.current) {
      hadFocusVisibleRecently = true;
      hadFocusVisibleRecentlyTimeout.start(100, () => {
        hadFocusVisibleRecently = false;
      });
      isFocusVisibleRef.current = false;
      return true;
    }
    return false;
  }
  function handleFocusVisible(event) {
    if (isFocusVisible(event)) {
      isFocusVisibleRef.current = true;
      return true;
    }
    return false;
  }
  return {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref
  };
}
function getScrollbarSize(doc) {
  const documentWidth = doc.documentElement.clientWidth;
  return Math.abs(window.innerWidth - documentWidth);
}
function composeClasses(slots, getUtilityClass, classes = void 0) {
  const output = {};
  Object.keys(slots).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (slot) => {
      output[slot] = slots[slot].reduce((acc, key) => {
        if (key) {
          const utilityClass = getUtilityClass(key);
          if (utilityClass !== "") {
            acc.push(utilityClass);
          }
          if (classes && classes[key]) {
            acc.push(classes[key]);
          }
        }
        return acc;
      }, []).join(" ");
    }
  );
  return output;
}
function isHostComponent(element) {
  return typeof element === "string";
}
function appendOwnerState(elementType, otherProps, ownerState) {
  if (elementType === void 0 || isHostComponent(elementType)) {
    return otherProps;
  }
  return _extends({}, otherProps, {
    ownerState: _extends({}, otherProps.ownerState, ownerState)
  });
}
function extractEventHandlers(object, excludeKeys = []) {
  if (object === void 0) {
    return {};
  }
  const result = {};
  Object.keys(object).filter((prop) => prop.match(/^on[A-Z]/) && typeof object[prop] === "function" && !excludeKeys.includes(prop)).forEach((prop) => {
    result[prop] = object[prop];
  });
  return result;
}
function omitEventHandlers(object) {
  if (object === void 0) {
    return {};
  }
  const result = {};
  Object.keys(object).filter((prop) => !(prop.match(/^on[A-Z]/) && typeof object[prop] === "function")).forEach((prop) => {
    result[prop] = object[prop];
  });
  return result;
}
function mergeSlotProps(parameters) {
  const {
    getSlotProps,
    additionalProps,
    externalSlotProps,
    externalForwardedProps,
    className
  } = parameters;
  if (!getSlotProps) {
    const joinedClasses2 = clsx(additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
    const mergedStyle2 = _extends({}, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
    const props2 = _extends({}, additionalProps, externalForwardedProps, externalSlotProps);
    if (joinedClasses2.length > 0) {
      props2.className = joinedClasses2;
    }
    if (Object.keys(mergedStyle2).length > 0) {
      props2.style = mergedStyle2;
    }
    return {
      props: props2,
      internalRef: void 0
    };
  }
  const eventHandlers = extractEventHandlers(_extends({}, externalForwardedProps, externalSlotProps));
  const componentsPropsWithoutEventHandlers = omitEventHandlers(externalSlotProps);
  const otherPropsWithoutEventHandlers = omitEventHandlers(externalForwardedProps);
  const internalSlotProps = getSlotProps(eventHandlers);
  const joinedClasses = clsx(internalSlotProps == null ? void 0 : internalSlotProps.className, additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
  const mergedStyle = _extends({}, internalSlotProps == null ? void 0 : internalSlotProps.style, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
  const props = _extends({}, internalSlotProps, additionalProps, otherPropsWithoutEventHandlers, componentsPropsWithoutEventHandlers);
  if (joinedClasses.length > 0) {
    props.className = joinedClasses;
  }
  if (Object.keys(mergedStyle).length > 0) {
    props.style = mergedStyle;
  }
  return {
    props,
    internalRef: internalSlotProps.ref
  };
}
function resolveComponentProps(componentProps, ownerState, slotState) {
  if (typeof componentProps === "function") {
    return componentProps(ownerState, slotState);
  }
  return componentProps;
}
const _excluded$x = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function useSlotProps(parameters) {
  var _parameters$additiona;
  const {
    elementType,
    externalSlotProps,
    ownerState,
    skipResolvingSlotProps = false
  } = parameters, rest = _objectWithoutPropertiesLoose(parameters, _excluded$x);
  const resolvedComponentsProps = skipResolvingSlotProps ? {} : resolveComponentProps(externalSlotProps, ownerState);
  const {
    props: mergedProps,
    internalRef
  } = mergeSlotProps(_extends({}, rest, {
    externalSlotProps: resolvedComponentsProps
  }));
  const ref = useForkRef(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_parameters$additiona = parameters.additionalProps) == null ? void 0 : _parameters$additiona.ref);
  const props = appendOwnerState(elementType, _extends({}, mergedProps, {
    ref
  }), ownerState);
  return props;
}
const ThemeContext = /* @__PURE__ */ reactExports.createContext(null);
function useTheme$1() {
  const theme = reactExports.useContext(ThemeContext);
  return theme;
}
const hasSymbol = typeof Symbol === "function" && Symbol.for;
const nested = hasSymbol ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === "function") {
    const mergedTheme = localTheme(outerTheme);
    return mergedTheme;
  }
  return _extends({}, outerTheme, localTheme);
}
function ThemeProvider$2(props) {
  const {
    children,
    theme: localTheme
  } = props;
  const outerTheme = useTheme$1();
  const theme = reactExports.useMemo(() => {
    const output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);
    if (output != null) {
      output[nested] = outerTheme !== null;
    }
    return output;
  }, [localTheme, outerTheme]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeContext.Provider, {
    value: theme,
    children
  });
}
const _excluded$w = ["value"];
const RtlContext = /* @__PURE__ */ reactExports.createContext();
function RtlProvider(_ref) {
  let {
    value
  } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded$w);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RtlContext.Provider, _extends({
    value: value != null ? value : true
  }, props));
}
const useRtl = () => {
  const value = reactExports.useContext(RtlContext);
  return value != null ? value : false;
};
const PropsContext = /* @__PURE__ */ reactExports.createContext(void 0);
function DefaultPropsProvider({
  value,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PropsContext.Provider, {
    value,
    children
  });
}
function getThemeProps(params) {
  const {
    theme,
    name,
    props
  } = params;
  if (!theme || !theme.components || !theme.components[name]) {
    return props;
  }
  const config2 = theme.components[name];
  if (config2.defaultProps) {
    return resolveProps(config2.defaultProps, props);
  }
  if (!config2.styleOverrides && !config2.variants) {
    return resolveProps(config2, props);
  }
  return props;
}
function useDefaultProps$1({
  props,
  name
}) {
  const ctx = reactExports.useContext(PropsContext);
  return getThemeProps({
    props,
    name,
    theme: {
      components: ctx
    }
  });
}
const EMPTY_THEME = {};
function useThemeScoping(themeId, upperTheme, localTheme, isPrivate = false) {
  return reactExports.useMemo(() => {
    const resolvedTheme = themeId ? upperTheme[themeId] || upperTheme : upperTheme;
    if (typeof localTheme === "function") {
      const mergedTheme = localTheme(resolvedTheme);
      const result = themeId ? _extends({}, upperTheme, {
        [themeId]: mergedTheme
      }) : mergedTheme;
      if (isPrivate) {
        return () => result;
      }
      return result;
    }
    return themeId ? _extends({}, upperTheme, {
      [themeId]: localTheme
    }) : _extends({}, upperTheme, localTheme);
  }, [themeId, upperTheme, localTheme, isPrivate]);
}
function ThemeProvider$1(props) {
  const {
    children,
    theme: localTheme,
    themeId
  } = props;
  const upperTheme = useTheme$3(EMPTY_THEME);
  const upperPrivateTheme = useTheme$1() || EMPTY_THEME;
  const engineTheme = useThemeScoping(themeId, upperTheme, localTheme);
  const privateTheme = useThemeScoping(themeId, upperPrivateTheme, localTheme, true);
  const rtlValue = engineTheme.direction === "rtl";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider$2, {
    theme: privateTheme,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeContext$1.Provider, {
      value: engineTheme,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(RtlProvider, {
        value: rtlValue,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(DefaultPropsProvider, {
          value: engineTheme == null ? void 0 : engineTheme.components,
          children
        })
      })
    })
  });
}
const _excluded$v = ["className", "component", "disableGutters", "fixed", "maxWidth", "classes"];
const defaultTheme$2 = createTheme$1();
const defaultCreateStyledComponent$1 = styled$1("div", {
  name: "MuiContainer",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2["maxWidth".concat(capitalize$1(String(ownerState.maxWidth)))], ownerState.fixed && styles2.fixed, ownerState.disableGutters && styles2.disableGutters];
  }
});
const useThemePropsDefault$1 = (inProps) => useThemeProps({
  props: inProps,
  name: "MuiContainer",
  defaultTheme: defaultTheme$2
});
const useUtilityClasses$k = (ownerState, componentName) => {
  const getContainerUtilityClass = (slot) => {
    return generateUtilityClass(componentName, slot);
  };
  const {
    classes,
    fixed,
    disableGutters,
    maxWidth
  } = ownerState;
  const slots = {
    root: ["root", maxWidth && "maxWidth".concat(capitalize$1(String(maxWidth))), fixed && "fixed", disableGutters && "disableGutters"]
  };
  return composeClasses(slots, getContainerUtilityClass, classes);
};
function createContainer(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent$1,
    useThemeProps: useThemeProps2 = useThemePropsDefault$1,
    componentName = "MuiContainer"
  } = options;
  const ContainerRoot = createStyledComponent(({
    theme,
    ownerState
  }) => _extends({
    width: "100%",
    marginLeft: "auto",
    boxSizing: "border-box",
    marginRight: "auto",
    display: "block"
  }, !ownerState.disableGutters && {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    // @ts-ignore module augmentation fails if custom breakpoints are used
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }
  }), ({
    theme,
    ownerState
  }) => ownerState.fixed && Object.keys(theme.breakpoints.values).reduce((acc, breakpointValueKey) => {
    const breakpoint = breakpointValueKey;
    const value = theme.breakpoints.values[breakpoint];
    if (value !== 0) {
      acc[theme.breakpoints.up(breakpoint)] = {
        maxWidth: "".concat(value).concat(theme.breakpoints.unit)
      };
    }
    return acc;
  }, {}), ({
    theme,
    ownerState
  }) => _extends({}, ownerState.maxWidth === "xs" && {
    // @ts-ignore module augmentation fails if custom breakpoints are used
    [theme.breakpoints.up("xs")]: {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      maxWidth: Math.max(theme.breakpoints.values.xs, 444)
    }
  }, ownerState.maxWidth && // @ts-ignore module augmentation fails if custom breakpoints are used
  ownerState.maxWidth !== "xs" && {
    // @ts-ignore module augmentation fails if custom breakpoints are used
    [theme.breakpoints.up(ownerState.maxWidth)]: {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      maxWidth: "".concat(theme.breakpoints.values[ownerState.maxWidth]).concat(theme.breakpoints.unit)
    }
  }));
  const Container2 = /* @__PURE__ */ reactExports.forwardRef(function Container22(inProps, ref) {
    const props = useThemeProps2(inProps);
    const {
      className,
      component = "div",
      disableGutters = false,
      fixed = false,
      maxWidth = "lg"
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded$v);
    const ownerState = _extends({}, props, {
      component,
      disableGutters,
      fixed,
      maxWidth
    });
    const classes = useUtilityClasses$k(ownerState, componentName);
    return (
      // @ts-ignore theme is injected by the styled util
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContainerRoot, _extends({
        as: component,
        ownerState,
        className: clsx(classes.root, className),
        ref
      }, other))
    );
  });
  return Container2;
}
const _excluded$u = ["component", "direction", "spacing", "divider", "children", "className", "useFlexGap"];
const defaultTheme$1 = createTheme$1();
const defaultCreateStyledComponent = styled$1("div", {
  name: "MuiStack",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
});
function useThemePropsDefault(props) {
  return useThemeProps({
    props,
    name: "MuiStack",
    defaultTheme: defaultTheme$1
  });
}
function joinChildren(children, separator) {
  const childrenArray = reactExports.Children.toArray(children).filter(Boolean);
  return childrenArray.reduce((output, child, index) => {
    output.push(child);
    if (index < childrenArray.length - 1) {
      output.push(/* @__PURE__ */ reactExports.cloneElement(separator, {
        key: "separator-".concat(index)
      }));
    }
    return output;
  }, []);
}
const getSideFromDirection = (direction) => {
  return {
    row: "Left",
    "row-reverse": "Right",
    column: "Top",
    "column-reverse": "Bottom"
  }[direction];
};
const style = ({
  ownerState,
  theme
}) => {
  let styles2 = _extends({
    display: "flex",
    flexDirection: "column"
  }, handleBreakpoints({
    theme
  }, resolveBreakpointValues({
    values: ownerState.direction,
    breakpoints: theme.breakpoints.values
  }), (propValue) => ({
    flexDirection: propValue
  })));
  if (ownerState.spacing) {
    const transformer = createUnarySpacing(theme);
    const base2 = Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
      if (typeof ownerState.spacing === "object" && ownerState.spacing[breakpoint] != null || typeof ownerState.direction === "object" && ownerState.direction[breakpoint] != null) {
        acc[breakpoint] = true;
      }
      return acc;
    }, {});
    const directionValues = resolveBreakpointValues({
      values: ownerState.direction,
      base: base2
    });
    const spacingValues = resolveBreakpointValues({
      values: ownerState.spacing,
      base: base2
    });
    if (typeof directionValues === "object") {
      Object.keys(directionValues).forEach((breakpoint, index, breakpoints) => {
        const directionValue = directionValues[breakpoint];
        if (!directionValue) {
          const previousDirectionValue = index > 0 ? directionValues[breakpoints[index - 1]] : "column";
          directionValues[breakpoint] = previousDirectionValue;
        }
      });
    }
    const styleFromPropValue = (propValue, breakpoint) => {
      if (ownerState.useFlexGap) {
        return {
          gap: getValue(transformer, propValue)
        };
      }
      return {
        // The useFlexGap={false} implement relies on each child to give up control of the margin.
        // We need to reset the margin to avoid double spacing.
        "& > :not(style):not(style)": {
          margin: 0
        },
        "& > :not(style) ~ :not(style)": {
          ["margin".concat(getSideFromDirection(breakpoint ? directionValues[breakpoint] : ownerState.direction))]: getValue(transformer, propValue)
        }
      };
    };
    styles2 = deepmerge$1(styles2, handleBreakpoints({
      theme
    }, spacingValues, styleFromPropValue));
  }
  styles2 = mergeBreakpointsInOrder(theme.breakpoints, styles2);
  return styles2;
};
function createStack(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent,
    useThemeProps: useThemeProps2 = useThemePropsDefault,
    componentName = "MuiStack"
  } = options;
  const useUtilityClasses2 = () => {
    const slots = {
      root: ["root"]
    };
    return composeClasses(slots, (slot) => generateUtilityClass(componentName, slot), {});
  };
  const StackRoot = createStyledComponent(style);
  const Stack2 = /* @__PURE__ */ reactExports.forwardRef(function Grid(inProps, ref) {
    const themeProps = useThemeProps2(inProps);
    const props = extendSxProp(themeProps);
    const {
      component = "div",
      direction = "column",
      spacing = 0,
      divider,
      children,
      className,
      useFlexGap = false
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded$u);
    const ownerState = {
      direction,
      spacing,
      useFlexGap
    };
    const classes = useUtilityClasses2();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(StackRoot, _extends({
      as: component,
      ownerState,
      ref,
      className: clsx(classes.root, className)
    }, other, {
      children: divider ? joinChildren(children, divider) : children
    }));
  });
  return Stack2;
}
const defaultTheme = createTheme$2();
function useTheme() {
  const theme = useTheme$2(defaultTheme);
  return theme[THEME_ID] || theme;
}
var createStyled$1 = {};
const require$$1$1 = /* @__PURE__ */ getAugmentedNamespace(_extends$1);
var objectWithoutPropertiesLoose = { exports: {} };
var hasRequiredObjectWithoutPropertiesLoose;
function requireObjectWithoutPropertiesLoose() {
  if (hasRequiredObjectWithoutPropertiesLoose) return objectWithoutPropertiesLoose.exports;
  hasRequiredObjectWithoutPropertiesLoose = 1;
  (function(module) {
    function _objectWithoutPropertiesLoose3(r2, e2) {
      if (null == r2) return {};
      var t2 = {};
      for (var n2 in r2) if ({}.hasOwnProperty.call(r2, n2)) {
        if (e2.includes(n2)) continue;
        t2[n2] = r2[n2];
      }
      return t2;
    }
    module.exports = _objectWithoutPropertiesLoose3, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(objectWithoutPropertiesLoose);
  return objectWithoutPropertiesLoose.exports;
}
const require$$1 = /* @__PURE__ */ getAugmentedNamespace(styledEngine);
const require$$4 = /* @__PURE__ */ getAugmentedNamespace(deepmerge);
const require$$5 = /* @__PURE__ */ getAugmentedNamespace(capitalize);
const require$$6 = /* @__PURE__ */ getAugmentedNamespace(getDisplayName);
const require$$7 = /* @__PURE__ */ getAugmentedNamespace(createTheme);
const require$$8 = /* @__PURE__ */ getAugmentedNamespace(styleFunctionSx);
var _interopRequireDefault = interopRequireDefaultExports;
Object.defineProperty(createStyled$1, "__esModule", {
  value: true
});
var _default = createStyled$1.default = createStyled;
createStyled$1.shouldForwardProp = shouldForwardProp;
createStyled$1.systemDefaultTheme = void 0;
var _extends2 = _interopRequireDefault(require$$1$1);
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(requireObjectWithoutPropertiesLoose());
var _styledEngine = _interopRequireWildcard(require$$1);
var _deepmerge = require$$4;
_interopRequireDefault(require$$5);
_interopRequireDefault(require$$6);
var _createTheme = _interopRequireDefault(require$$7);
var _styleFunctionSx = _interopRequireDefault(require$$8);
const _excluded$t = ["ownerState"], _excluded2$3 = ["variants"], _excluded3$1 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function _getRequireWildcardCache(e2) {
  if ("function" != typeof WeakMap) return null;
  var r2 = /* @__PURE__ */ new WeakMap(), t2 = /* @__PURE__ */ new WeakMap();
  return (_getRequireWildcardCache = function(e22) {
    return e22 ? t2 : r2;
  })(e2);
}
function _interopRequireWildcard(e2, r2) {
  if (e2 && e2.__esModule) return e2;
  if (null === e2 || "object" != typeof e2 && "function" != typeof e2) return { default: e2 };
  var t2 = _getRequireWildcardCache(r2);
  if (t2 && t2.has(e2)) return t2.get(e2);
  var n2 = { __proto__: null }, a2 = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u2 in e2) if ("default" !== u2 && Object.prototype.hasOwnProperty.call(e2, u2)) {
    var i2 = a2 ? Object.getOwnPropertyDescriptor(e2, u2) : null;
    i2 && (i2.get || i2.set) ? Object.defineProperty(n2, u2, i2) : n2[u2] = e2[u2];
  }
  return n2.default = e2, t2 && t2.set(e2, n2), n2;
}
function isEmpty$2(obj) {
  return Object.keys(obj).length === 0;
}
function isStringTag(tag) {
  return typeof tag === "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96;
}
function shouldForwardProp(prop) {
  return prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
}
const systemDefaultTheme = createStyled$1.systemDefaultTheme = (0, _createTheme.default)();
const lowercaseFirstLetter = (string) => {
  if (!string) {
    return string;
  }
  return string.charAt(0).toLowerCase() + string.slice(1);
};
function resolveTheme({
  defaultTheme: defaultTheme2,
  theme,
  themeId
}) {
  return isEmpty$2(theme) ? defaultTheme2 : theme[themeId] || theme;
}
function defaultOverridesResolver(slot) {
  if (!slot) {
    return null;
  }
  return (props, styles2) => styles2[slot];
}
function processStyleArg(callableStyle, _ref) {
  let {
    ownerState
  } = _ref, props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded$t);
  const resolvedStylesArg = typeof callableStyle === "function" ? callableStyle((0, _extends2.default)({
    ownerState
  }, props)) : callableStyle;
  if (Array.isArray(resolvedStylesArg)) {
    return resolvedStylesArg.flatMap((resolvedStyle) => processStyleArg(resolvedStyle, (0, _extends2.default)({
      ownerState
    }, props)));
  }
  if (!!resolvedStylesArg && typeof resolvedStylesArg === "object" && Array.isArray(resolvedStylesArg.variants)) {
    const {
      variants = []
    } = resolvedStylesArg, otherStyles = (0, _objectWithoutPropertiesLoose2.default)(resolvedStylesArg, _excluded2$3);
    let result = otherStyles;
    variants.forEach((variant) => {
      let isMatch = true;
      if (typeof variant.props === "function") {
        isMatch = variant.props((0, _extends2.default)({
          ownerState
        }, props, ownerState));
      } else {
        Object.keys(variant.props).forEach((key) => {
          if ((ownerState == null ? void 0 : ownerState[key]) !== variant.props[key] && props[key] !== variant.props[key]) {
            isMatch = false;
          }
        });
      }
      if (isMatch) {
        if (!Array.isArray(result)) {
          result = [result];
        }
        result.push(typeof variant.style === "function" ? variant.style((0, _extends2.default)({
          ownerState
        }, props, ownerState)) : variant.style);
      }
    });
    return result;
  }
  return resolvedStylesArg;
}
function createStyled(input = {}) {
  const {
    themeId,
    defaultTheme: defaultTheme2 = systemDefaultTheme,
    rootShouldForwardProp: rootShouldForwardProp2 = shouldForwardProp,
    slotShouldForwardProp: slotShouldForwardProp2 = shouldForwardProp
  } = input;
  const systemSx = (props) => {
    return (0, _styleFunctionSx.default)((0, _extends2.default)({}, props, {
      theme: resolveTheme((0, _extends2.default)({}, props, {
        defaultTheme: defaultTheme2,
        themeId
      }))
    }));
  };
  systemSx.__mui_systemSx = true;
  return (tag, inputOptions = {}) => {
    (0, _styledEngine.internal_processStyles)(tag, (styles2) => styles2.filter((style2) => !(style2 != null && style2.__mui_systemSx)));
    const {
      name: componentName,
      slot: componentSlot,
      skipVariantsResolver: inputSkipVariantsResolver,
      skipSx: inputSkipSx,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: overridesResolver2 = defaultOverridesResolver(lowercaseFirstLetter(componentSlot))
    } = inputOptions, options = (0, _objectWithoutPropertiesLoose2.default)(inputOptions, _excluded3$1);
    const skipVariantsResolver = inputSkipVariantsResolver !== void 0 ? inputSkipVariantsResolver : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      componentSlot && componentSlot !== "Root" && componentSlot !== "root" || false
    );
    const skipSx = inputSkipSx || false;
    let label;
    let shouldForwardPropOption = shouldForwardProp;
    if (componentSlot === "Root" || componentSlot === "root") {
      shouldForwardPropOption = rootShouldForwardProp2;
    } else if (componentSlot) {
      shouldForwardPropOption = slotShouldForwardProp2;
    } else if (isStringTag(tag)) {
      shouldForwardPropOption = void 0;
    }
    const defaultStyledResolver = (0, _styledEngine.default)(tag, (0, _extends2.default)({
      shouldForwardProp: shouldForwardPropOption,
      label
    }, options));
    const transformStyleArg = (stylesArg) => {
      if (typeof stylesArg === "function" && stylesArg.__emotion_real !== stylesArg || (0, _deepmerge.isPlainObject)(stylesArg)) {
        return (props) => processStyleArg(stylesArg, (0, _extends2.default)({}, props, {
          theme: resolveTheme({
            theme: props.theme,
            defaultTheme: defaultTheme2,
            themeId
          })
        }));
      }
      return stylesArg;
    };
    const muiStyledResolver = (styleArg, ...expressions) => {
      let transformedStyleArg = transformStyleArg(styleArg);
      const expressionsWithDefaultTheme = expressions ? expressions.map(transformStyleArg) : [];
      if (componentName && overridesResolver2) {
        expressionsWithDefaultTheme.push((props) => {
          const theme = resolveTheme((0, _extends2.default)({}, props, {
            defaultTheme: defaultTheme2,
            themeId
          }));
          if (!theme.components || !theme.components[componentName] || !theme.components[componentName].styleOverrides) {
            return null;
          }
          const styleOverrides = theme.components[componentName].styleOverrides;
          const resolvedStyleOverrides = {};
          Object.entries(styleOverrides).forEach(([slotKey, slotStyle]) => {
            resolvedStyleOverrides[slotKey] = processStyleArg(slotStyle, (0, _extends2.default)({}, props, {
              theme
            }));
          });
          return overridesResolver2(props, resolvedStyleOverrides);
        });
      }
      if (componentName && !skipVariantsResolver) {
        expressionsWithDefaultTheme.push((props) => {
          var _theme$components;
          const theme = resolveTheme((0, _extends2.default)({}, props, {
            defaultTheme: defaultTheme2,
            themeId
          }));
          const themeVariants = theme == null || (_theme$components = theme.components) == null || (_theme$components = _theme$components[componentName]) == null ? void 0 : _theme$components.variants;
          return processStyleArg({
            variants: themeVariants
          }, (0, _extends2.default)({}, props, {
            theme
          }));
        });
      }
      if (!skipSx) {
        expressionsWithDefaultTheme.push(systemSx);
      }
      const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;
      if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
        const placeholders = new Array(numOfCustomFnsApplied).fill("");
        transformedStyleArg = [...styleArg, ...placeholders];
        transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
      }
      const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);
      if (tag.muiName) {
        Component.muiName = tag.muiName;
      }
      return Component;
    };
    if (defaultStyledResolver.withConfig) {
      muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
    }
    return muiStyledResolver;
  };
}
function slotShouldForwardProp(prop) {
  return prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
}
const rootShouldForwardProp = (prop) => slotShouldForwardProp(prop) && prop !== "classes";
const styled = _default({
  themeId: THEME_ID,
  defaultTheme,
  rootShouldForwardProp
});
const _excluded$s = ["theme"];
function ThemeProvider(_ref) {
  let {
    theme: themeInput
  } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded$s);
  const scopedTheme = themeInput[THEME_ID];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider$1, _extends({}, props, {
    themeId: scopedTheme ? THEME_ID : void 0,
    theme: scopedTheme || themeInput
  }));
}
const getOverlayAlpha = (elevation) => {
  let alphaValue;
  if (elevation < 1) {
    alphaValue = 5.11916 * elevation ** 2;
  } else {
    alphaValue = 4.5 * Math.log(elevation + 1) + 2;
  }
  return (alphaValue / 100).toFixed(2);
};
function useDefaultProps(params) {
  return useDefaultProps$1(params);
}
function getSvgIconUtilityClass(slot) {
  return generateUtilityClass("MuiSvgIcon", slot);
}
const svgIconClasses = generateUtilityClasses("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const _excluded$r = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"];
const useUtilityClasses$j = (ownerState) => {
  const {
    color,
    fontSize,
    classes
  } = ownerState;
  const slots = {
    root: ["root", color !== "inherit" && "color".concat(capitalize$1(color)), "fontSize".concat(capitalize$1(fontSize))]
  };
  return composeClasses(slots, getSvgIconUtilityClass, classes);
};
const SvgIconRoot = styled("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.color !== "inherit" && styles2["color".concat(capitalize$1(ownerState.color))], styles2["fontSize".concat(capitalize$1(ownerState.fontSize))]];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$transitions, _theme$transitions$cr, _theme$transitions2, _theme$typography, _theme$typography$pxT, _theme$typography2, _theme$typography2$px, _theme$typography3, _theme$typography3$px, _palette$ownerState$c, _palette, _palette2, _palette3;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // for example heroicons uses fill="none" and stroke="currentColor"
    fill: ownerState.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (_theme$transitions = theme.transitions) == null || (_theme$transitions$cr = _theme$transitions.create) == null ? void 0 : _theme$transitions$cr.call(_theme$transitions, "fill", {
      duration: (_theme$transitions2 = theme.transitions) == null || (_theme$transitions2 = _theme$transitions2.duration) == null ? void 0 : _theme$transitions2.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((_theme$typography = theme.typography) == null || (_theme$typography$pxT = _theme$typography.pxToRem) == null ? void 0 : _theme$typography$pxT.call(_theme$typography, 20)) || "1.25rem",
      medium: ((_theme$typography2 = theme.typography) == null || (_theme$typography2$px = _theme$typography2.pxToRem) == null ? void 0 : _theme$typography2$px.call(_theme$typography2, 24)) || "1.5rem",
      large: ((_theme$typography3 = theme.typography) == null || (_theme$typography3$px = _theme$typography3.pxToRem) == null ? void 0 : _theme$typography3$px.call(_theme$typography3, 35)) || "2.1875rem"
    }[ownerState.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (_palette$ownerState$c = (_palette = (theme.vars || theme).palette) == null || (_palette = _palette[ownerState.color]) == null ? void 0 : _palette.main) != null ? _palette$ownerState$c : {
      action: (_palette2 = (theme.vars || theme).palette) == null || (_palette2 = _palette2.action) == null ? void 0 : _palette2.active,
      disabled: (_palette3 = (theme.vars || theme).palette) == null || (_palette3 = _palette3.action) == null ? void 0 : _palette3.disabled,
      inherit: void 0
    }[ownerState.color]
  };
});
const SvgIcon = /* @__PURE__ */ reactExports.forwardRef(function SvgIcon2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiSvgIcon"
  });
  const {
    children,
    className,
    color = "inherit",
    component = "svg",
    fontSize = "medium",
    htmlColor,
    inheritViewBox = false,
    titleAccess,
    viewBox = "0 0 24 24"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$r);
  const hasSvgAsChild = /* @__PURE__ */ reactExports.isValidElement(children) && children.type === "svg";
  const ownerState = _extends({}, props, {
    color,
    component,
    fontSize,
    instanceFontSize: inProps.fontSize,
    inheritViewBox,
    viewBox,
    hasSvgAsChild
  });
  const more = {};
  if (!inheritViewBox) {
    more.viewBox = viewBox;
  }
  const classes = useUtilityClasses$j(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SvgIconRoot, _extends({
    as: component,
    className: clsx(classes.root, className),
    focusable: "false",
    color: htmlColor,
    "aria-hidden": titleAccess ? void 0 : true,
    role: titleAccess ? "img" : void 0,
    ref
  }, more, other, hasSvgAsChild && children.props, {
    ownerState,
    children: [hasSvgAsChild ? children.props.children : children, titleAccess ? /* @__PURE__ */ jsxRuntimeExports.jsx("title", {
      children: titleAccess
    }) : null]
  }));
});
SvgIcon.muiName = "SvgIcon";
function createSvgIcon$1(path, displayName) {
  function Component(props, ref) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SvgIcon, _extends({
      "data-testid": "".concat(displayName, "Icon"),
      ref
    }, props, {
      children: path
    }));
  }
  Component.muiName = SvgIcon.muiName;
  return /* @__PURE__ */ reactExports.memo(/* @__PURE__ */ reactExports.forwardRef(Component));
}
const unstable_ClassNameGenerator = {
  configure: (generator) => {
    ClassNameGenerator.configure(generator);
  }
};
const utils$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: capitalize$1,
  createChainedFunction,
  createSvgIcon: createSvgIcon$1,
  debounce,
  deprecatedPropType,
  isMuiElement,
  ownerDocument,
  ownerWindow,
  requirePropFactory,
  setRef: setRef$1,
  unstable_ClassNameGenerator,
  unstable_useEnhancedEffect: useEnhancedEffect,
  unstable_useId: useId,
  unsupportedProp,
  useControlled,
  useEventCallback,
  useForkRef,
  useIsFocusVisible
}, Symbol.toStringTag, { value: "Module" }));
function _inheritsLoose(t2, o2) {
  t2.prototype = Object.create(o2.prototype), t2.prototype.constructor = t2, _setPrototypeOf(t2, o2);
}
const config = {
  disabled: false
};
const TransitionGroupContext = React$1.createContext(null);
var forceReflow = function forceReflow2(node2) {
  return node2.scrollTop;
};
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
var Transition = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Transition2, _React$Component);
  function Transition2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context;
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;
    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }
    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }
  Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;
    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }
    return null;
  };
  var _proto = Transition2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;
    if (prevProps !== this.props) {
      var status = this.state.status;
      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(false, nextStatus);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };
  _proto.getTimeouts = function getTimeouts() {
    var timeout2 = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout2;
    if (timeout2 != null && typeof timeout2 !== "number") {
      exit = timeout2.exit;
      enter = timeout2.enter;
      appear = timeout2.appear !== void 0 ? timeout2.appear : enter;
    }
    return {
      exit,
      enter,
      appear
    };
  };
  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }
    if (nextStatus !== null) {
      this.cancelNextCallback();
      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node2 = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
          if (node2) forceReflow(node2);
        }
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };
  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;
    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function() {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }
    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function() {
      _this2.props.onEntering(maybeNode, maybeAppearing);
      _this2.onTransitionEnd(enterTimeout, function() {
        _this2.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };
  _proto.performExit = function performExit() {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? void 0 : ReactDOM.findDOMNode(this);
    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function() {
        _this3.props.onExited(maybeNode);
      });
      return;
    }
    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function() {
      _this3.props.onExiting(maybeNode);
      _this3.onTransitionEnd(timeouts.exit, function() {
        _this3.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };
  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  _proto.safeSetState = function safeSetState(nextState, callback) {
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };
  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;
    var active = true;
    this.nextCallback = function(event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function() {
      active = false;
    };
    return this.nextCallback;
  };
  _proto.onTransitionEnd = function onTransitionEnd(timeout2, handler) {
    this.setNextCallback(handler);
    var node2 = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout2 == null && !this.props.addEndListener;
    if (!node2 || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node2, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
      this.props.addEndListener(maybeNode, maybeNextCallback);
    }
    if (timeout2 != null) {
      setTimeout(this.nextCallback, timeout2);
    }
  };
  _proto.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _this$props = this.props, children = _this$props.children;
    _this$props.in;
    _this$props.mountOnEnter;
    _this$props.unmountOnExit;
    _this$props.appear;
    _this$props.enter;
    _this$props.exit;
    _this$props.timeout;
    _this$props.addEndListener;
    _this$props.onEnter;
    _this$props.onEntering;
    _this$props.onEntered;
    _this$props.onExit;
    _this$props.onExiting;
    _this$props.onExited;
    _this$props.nodeRef;
    var childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ React$1.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === "function" ? children(status, childProps) : React$1.cloneElement(React$1.Children.only(children), childProps))
    );
  };
  return Transition2;
}(React$1.Component);
Transition.contextType = TransitionGroupContext;
Transition.propTypes = {};
function noop$1() {
}
Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop$1,
  onEntering: noop$1,
  onEntered: noop$1,
  onExit: noop$1,
  onExiting: noop$1,
  onExited: noop$1
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
function getChildMapping(children, mapFn) {
  var mapper = function mapper2(child) {
    return mapFn && reactExports.isValidElement(child) ? mapFn(child) : child;
  };
  var result = /* @__PURE__ */ Object.create(null);
  if (children) reactExports.Children.map(children, function(c2) {
    return c2;
  }).forEach(function(child) {
    result[child.key] = mapper(child);
  });
  return result;
}
function mergeChildMappings(prev2, next2) {
  prev2 = prev2 || {};
  next2 = next2 || {};
  function getValueForKey(key) {
    return key in next2 ? next2[key] : prev2[key];
  }
  var nextKeysPending = /* @__PURE__ */ Object.create(null);
  var pendingKeys = [];
  for (var prevKey in prev2) {
    if (prevKey in next2) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }
  var i2;
  var childMapping = {};
  for (var nextKey in next2) {
    if (nextKeysPending[nextKey]) {
      for (i2 = 0; i2 < nextKeysPending[nextKey].length; i2++) {
        var pendingNextKey = nextKeysPending[nextKey][i2];
        childMapping[nextKeysPending[nextKey][i2]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }
  for (i2 = 0; i2 < pendingKeys.length; i2++) {
    childMapping[pendingKeys[i2]] = getValueForKey(pendingKeys[i2]);
  }
  return childMapping;
}
function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}
function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function(child) {
    return reactExports.cloneElement(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, "appear", props),
      enter: getProp(child, "enter", props),
      exit: getProp(child, "exit", props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function(key) {
    var child = children[key];
    if (!reactExports.isValidElement(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = reactExports.isValidElement(prevChild) && !prevChild.props.in;
    if (hasNext && (!hasPrev || isLeaving)) {
      children[key] = reactExports.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      children[key] = reactExports.cloneElement(child, {
        in: false
      });
    } else if (hasNext && hasPrev && reactExports.isValidElement(prevChild)) {
      children[key] = reactExports.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    }
  });
  return children;
}
var values = Object.values || function(obj) {
  return Object.keys(obj).map(function(k2) {
    return obj[k2];
  });
};
var defaultProps = {
  component: "div",
  childFactory: function childFactory(child) {
    return child;
  }
};
var TransitionGroup = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(TransitionGroup2, _React$Component);
  function TransitionGroup2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this));
    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited,
      firstRender: true
    };
    return _this;
  }
  var _proto = TransitionGroup2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };
  TransitionGroup2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };
  _proto.handleExited = function handleExited(child, node2) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;
    if (child.props.onExited) {
      child.props.onExited(node2);
    }
    if (this.mounted) {
      this.setState(function(state) {
        var children = _extends({}, state.children);
        delete children[child.key];
        return {
          children
        };
      });
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, Component = _this$props.component, childFactory2 = _this$props.childFactory, props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);
    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory2);
    delete props.appear;
    delete props.enter;
    delete props.exit;
    if (Component === null) {
      return /* @__PURE__ */ React$1.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, children);
    }
    return /* @__PURE__ */ React$1.createElement(TransitionGroupContext.Provider, {
      value: contextValue
    }, /* @__PURE__ */ React$1.createElement(Component, props, children));
  };
  return TransitionGroup2;
}(React$1.Component);
TransitionGroup.propTypes = {};
TransitionGroup.defaultProps = defaultProps;
const reflow = (node2) => node2.scrollTop;
function getTransitionProps(props, options) {
  var _style$transitionDura, _style$transitionTimi;
  const {
    timeout,
    easing,
    style: style2 = {}
  } = props;
  return {
    duration: (_style$transitionDura = style2.transitionDuration) != null ? _style$transitionDura : typeof timeout === "number" ? timeout : timeout[options.mode] || 0,
    easing: (_style$transitionTimi = style2.transitionTimingFunction) != null ? _style$transitionTimi : typeof easing === "object" ? easing[options.mode] : easing,
    delay: style2.transitionDelay
  };
}
function getPaperUtilityClass(slot) {
  return generateUtilityClass("MuiPaper", slot);
}
const paperClasses = generateUtilityClasses("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const _excluded$q = ["className", "component", "elevation", "square", "variant"];
const useUtilityClasses$i = (ownerState) => {
  const {
    square,
    elevation,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, !square && "rounded", variant === "elevation" && "elevation".concat(elevation)]
  };
  return composeClasses(slots, getPaperUtilityClass, classes);
};
const PaperRoot = styled("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.variant], !ownerState.square && styles2.rounded, ownerState.variant === "elevation" && styles2["elevation".concat(ownerState.elevation)]];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$vars$overlays;
  return _extends({
    backgroundColor: (theme.vars || theme).palette.background.paper,
    color: (theme.vars || theme).palette.text.primary,
    transition: theme.transitions.create("box-shadow")
  }, !ownerState.square && {
    borderRadius: theme.shape.borderRadius
  }, ownerState.variant === "outlined" && {
    border: "1px solid ".concat((theme.vars || theme).palette.divider)
  }, ownerState.variant === "elevation" && _extends({
    boxShadow: (theme.vars || theme).shadows[ownerState.elevation]
  }, !theme.vars && theme.palette.mode === "dark" && {
    backgroundImage: "linear-gradient(".concat(alpha_1("#fff", getOverlayAlpha(ownerState.elevation)), ", ").concat(alpha_1("#fff", getOverlayAlpha(ownerState.elevation)), ")")
  }, theme.vars && {
    backgroundImage: (_theme$vars$overlays = theme.vars.overlays) == null ? void 0 : _theme$vars$overlays[ownerState.elevation]
  }));
});
const Paper = /* @__PURE__ */ reactExports.forwardRef(function Paper2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiPaper"
  });
  const {
    className,
    component = "div",
    elevation = 1,
    square = false,
    variant = "elevation"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$q);
  const ownerState = _extends({}, props, {
    component,
    elevation,
    square,
    variant
  });
  const classes = useUtilityClasses$i(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PaperRoot, _extends({
    as: component,
    ownerState,
    className: clsx(classes.root, className),
    ref
  }, other));
});
function Ripple(props) {
  const {
    className,
    classes,
    pulsate = false,
    rippleX,
    rippleY,
    rippleSize,
    in: inProp,
    onExited,
    timeout
  } = props;
  const [leaving, setLeaving] = reactExports.useState(false);
  const rippleClassName = clsx(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
  const rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  const childClassName = clsx(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
  if (!inProp && !leaving) {
    setLeaving(true);
  }
  reactExports.useEffect(() => {
    if (!inProp && onExited != null) {
      const timeoutId = setTimeout(onExited, timeout);
      return () => {
        clearTimeout(timeoutId);
      };
    }
    return void 0;
  }, [onExited, inProp, timeout]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
    className: rippleClassName,
    style: rippleStyles,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: childClassName
    })
  });
}
const touchRippleClasses = generateUtilityClasses("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]);
const _excluded$p = ["center", "classes", "className"];
let _$1 = (t2) => t2, _t, _t2, _t3, _t4;
const DURATION = 550;
const DELAY_RIPPLE = 80;
const enterKeyframe = keyframes(_t || (_t = _$1(_a || (_a = __template(["\n  0% {\n    transform: scale(0);\n    opacity: 0.1;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0.3;\n  }\n"])))));
const exitKeyframe = keyframes(_t2 || (_t2 = _$1(_b || (_b = __template(["\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n"])))));
const pulsateKeyframe = keyframes(_t3 || (_t3 = _$1(_c || (_c = __template(["\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.92);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n"])))));
const TouchRippleRoot = styled("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
});
const TouchRippleRipple = styled(Ripple, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(_t4 || (_t4 = _$1(_d || (_d = __template(["\n  opacity: 0;\n  position: absolute;\n\n  &.", " {\n    opacity: 0.3;\n    transform: scale(1);\n    animation-name: ", ";\n    animation-duration: ", "ms;\n    animation-timing-function: ", ";\n  }\n\n  &.", " {\n    animation-duration: ", "ms;\n  }\n\n  & .", " {\n    opacity: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: currentColor;\n  }\n\n  & .", " {\n    opacity: 0;\n    animation-name: ", ";\n    animation-duration: ", "ms;\n    animation-timing-function: ", ";\n  }\n\n  & .", " {\n    position: absolute;\n    /* @noflip */\n    left: 0px;\n    top: 0;\n    animation-name: ", ";\n    animation-duration: 2500ms;\n    animation-timing-function: ", ";\n    animation-iteration-count: infinite;\n    animation-delay: 200ms;\n  }\n"])), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)), touchRippleClasses.rippleVisible, enterKeyframe, DURATION, ({
  theme
}) => theme.transitions.easing.easeInOut, touchRippleClasses.ripplePulsate, ({
  theme
}) => theme.transitions.duration.shorter, touchRippleClasses.child, touchRippleClasses.childLeaving, exitKeyframe, DURATION, ({
  theme
}) => theme.transitions.easing.easeInOut, touchRippleClasses.childPulsate, pulsateKeyframe, ({
  theme
}) => theme.transitions.easing.easeInOut);
const TouchRipple = /* @__PURE__ */ reactExports.forwardRef(function TouchRipple2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTouchRipple"
  });
  const {
    center: centerProp = false,
    classes = {},
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$p);
  const [ripples, setRipples] = reactExports.useState([]);
  const nextKey = reactExports.useRef(0);
  const rippleCallback = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (rippleCallback.current) {
      rippleCallback.current();
      rippleCallback.current = null;
    }
  }, [ripples]);
  const ignoringMouseDown = reactExports.useRef(false);
  const startTimer = useTimeout();
  const startTimerCommit = reactExports.useRef(null);
  const container = reactExports.useRef(null);
  const startCommit = reactExports.useCallback((params) => {
    const {
      pulsate: pulsate2,
      rippleX,
      rippleY,
      rippleSize,
      cb
    } = params;
    setRipples((oldRipples) => [...oldRipples, /* @__PURE__ */ jsxRuntimeExports.jsx(TouchRippleRipple, {
      classes: {
        ripple: clsx(classes.ripple, touchRippleClasses.ripple),
        rippleVisible: clsx(classes.rippleVisible, touchRippleClasses.rippleVisible),
        ripplePulsate: clsx(classes.ripplePulsate, touchRippleClasses.ripplePulsate),
        child: clsx(classes.child, touchRippleClasses.child),
        childLeaving: clsx(classes.childLeaving, touchRippleClasses.childLeaving),
        childPulsate: clsx(classes.childPulsate, touchRippleClasses.childPulsate)
      },
      timeout: DURATION,
      pulsate: pulsate2,
      rippleX,
      rippleY,
      rippleSize
    }, nextKey.current)]);
    nextKey.current += 1;
    rippleCallback.current = cb;
  }, [classes]);
  const start = reactExports.useCallback((event = {}, options = {}, cb = () => {
  }) => {
    const {
      pulsate: pulsate2 = false,
      center = centerProp || options.pulsate,
      fakeElement = false
      // For test purposes
    } = options;
    if ((event == null ? void 0 : event.type) === "mousedown" && ignoringMouseDown.current) {
      ignoringMouseDown.current = false;
      return;
    }
    if ((event == null ? void 0 : event.type) === "touchstart") {
      ignoringMouseDown.current = true;
    }
    const element = fakeElement ? null : container.current;
    const rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let rippleX;
    let rippleY;
    let rippleSize;
    if (center || event === void 0 || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      const {
        clientX,
        clientY
      } = event.touches && event.touches.length > 0 ? event.touches[0] : event;
      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }
    if (center) {
      rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);
      if (rippleSize % 2 === 0) {
        rippleSize += 1;
      }
    } else {
      const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
    }
    if (event != null && event.touches) {
      if (startTimerCommit.current === null) {
        startTimerCommit.current = () => {
          startCommit({
            pulsate: pulsate2,
            rippleX,
            rippleY,
            rippleSize,
            cb
          });
        };
        startTimer.start(DELAY_RIPPLE, () => {
          if (startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
          }
        });
      }
    } else {
      startCommit({
        pulsate: pulsate2,
        rippleX,
        rippleY,
        rippleSize,
        cb
      });
    }
  }, [centerProp, startCommit, startTimer]);
  const pulsate = reactExports.useCallback(() => {
    start({}, {
      pulsate: true
    });
  }, [start]);
  const stop = reactExports.useCallback((event, cb) => {
    startTimer.clear();
    if ((event == null ? void 0 : event.type) === "touchend" && startTimerCommit.current) {
      startTimerCommit.current();
      startTimerCommit.current = null;
      startTimer.start(0, () => {
        stop(event, cb);
      });
      return;
    }
    startTimerCommit.current = null;
    setRipples((oldRipples) => {
      if (oldRipples.length > 0) {
        return oldRipples.slice(1);
      }
      return oldRipples;
    });
    rippleCallback.current = cb;
  }, [startTimer]);
  reactExports.useImperativeHandle(ref, () => ({
    pulsate,
    start,
    stop
  }), [pulsate, start, stop]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TouchRippleRoot, _extends({
    className: clsx(touchRippleClasses.root, classes.root, className),
    ref: container
  }, other, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionGroup, {
      component: null,
      exit: true,
      children: ripples
    })
  }));
});
function getButtonBaseUtilityClass(slot) {
  return generateUtilityClass("MuiButtonBase", slot);
}
const buttonBaseClasses = generateUtilityClasses("MuiButtonBase", ["root", "disabled", "focusVisible"]);
const _excluded$o = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"];
const useUtilityClasses$h = (ownerState) => {
  const {
    disabled,
    focusVisible,
    focusVisibleClassName,
    classes
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible"]
  };
  const composedClasses = composeClasses(slots, getButtonBaseUtilityClass, classes);
  if (focusVisible && focusVisibleClassName) {
    composedClasses.root += " ".concat(focusVisibleClassName);
  }
  return composedClasses;
};
const ButtonBaseRoot = styled("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  ["&.".concat(buttonBaseClasses.disabled)]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
});
const ButtonBase = /* @__PURE__ */ reactExports.forwardRef(function ButtonBase2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiButtonBase"
  });
  const {
    action: action2,
    centerRipple = false,
    children,
    className,
    component = "button",
    disabled = false,
    disableRipple = false,
    disableTouchRipple = false,
    focusRipple = false,
    LinkComponent = "a",
    onBlur,
    onClick,
    onContextMenu,
    onDragLeave,
    onFocus,
    onFocusVisible,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    tabIndex = 0,
    TouchRippleProps,
    touchRippleRef,
    type
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$o);
  const buttonRef = reactExports.useRef(null);
  const rippleRef = reactExports.useRef(null);
  const handleRippleRef = useForkRef(rippleRef, touchRippleRef);
  const {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = reactExports.useState(false);
  if (disabled && focusVisible) {
    setFocusVisible(false);
  }
  reactExports.useImperativeHandle(action2, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      buttonRef.current.focus();
    }
  }), []);
  const [mountedState, setMountedState] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setMountedState(true);
  }, []);
  const enableTouchRipple = mountedState && !disableRipple && !disabled;
  reactExports.useEffect(() => {
    if (focusVisible && focusRipple && !disableRipple && mountedState) {
      rippleRef.current.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible, mountedState]);
  function useRippleHandler(rippleAction, eventCallback, skipRippleAction = disableTouchRipple) {
    return useEventCallback((event) => {
      if (eventCallback) {
        eventCallback(event);
      }
      const ignore = skipRippleAction;
      if (!ignore && rippleRef.current) {
        rippleRef.current[rippleAction](event);
      }
      return true;
    });
  }
  const handleMouseDown = useRippleHandler("start", onMouseDown);
  const handleContextMenu = useRippleHandler("stop", onContextMenu);
  const handleDragLeave = useRippleHandler("stop", onDragLeave);
  const handleMouseUp = useRippleHandler("stop", onMouseUp);
  const handleMouseLeave = useRippleHandler("stop", (event) => {
    if (focusVisible) {
      event.preventDefault();
    }
    if (onMouseLeave) {
      onMouseLeave(event);
    }
  });
  const handleTouchStart = useRippleHandler("start", onTouchStart);
  const handleTouchEnd = useRippleHandler("stop", onTouchEnd);
  const handleTouchMove = useRippleHandler("stop", onTouchMove);
  const handleBlur = useRippleHandler("stop", (event) => {
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }
    if (onBlur) {
      onBlur(event);
    }
  }, false);
  const handleFocus = useEventCallback((event) => {
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);
      if (onFocusVisible) {
        onFocusVisible(event);
      }
    }
    if (onFocus) {
      onFocus(event);
    }
  });
  const isNonNativeButton = () => {
    const button = buttonRef.current;
    return component && component !== "button" && !(button.tagName === "A" && button.href);
  };
  const keydownRef = reactExports.useRef(false);
  const handleKeyDown2 = useEventCallback((event) => {
    if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === " ") {
      keydownRef.current = true;
      rippleRef.current.stop(event, () => {
        rippleRef.current.start(event);
      });
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === " ") {
      event.preventDefault();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === "Enter" && !disabled) {
      event.preventDefault();
      if (onClick) {
        onClick(event);
      }
    }
  });
  const handleKeyUp = useEventCallback((event) => {
    if (focusRipple && event.key === " " && rippleRef.current && focusVisible && !event.defaultPrevented) {
      keydownRef.current = false;
      rippleRef.current.stop(event, () => {
        rippleRef.current.pulsate(event);
      });
    }
    if (onKeyUp) {
      onKeyUp(event);
    }
    if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === " " && !event.defaultPrevented) {
      onClick(event);
    }
  });
  let ComponentProp = component;
  if (ComponentProp === "button" && (other.href || other.to)) {
    ComponentProp = LinkComponent;
  }
  const buttonProps = {};
  if (ComponentProp === "button") {
    buttonProps.type = type === void 0 ? "button" : type;
    buttonProps.disabled = disabled;
  } else {
    if (!other.href && !other.to) {
      buttonProps.role = "button";
    }
    if (disabled) {
      buttonProps["aria-disabled"] = disabled;
    }
  }
  const handleRef = useForkRef(ref, focusVisibleRef, buttonRef);
  const ownerState = _extends({}, props, {
    centerRipple,
    component,
    disabled,
    disableRipple,
    disableTouchRipple,
    focusRipple,
    tabIndex,
    focusVisible
  });
  const classes = useUtilityClasses$h(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ButtonBaseRoot, _extends({
    as: ComponentProp,
    className: clsx(classes.root, className),
    ownerState,
    onBlur: handleBlur,
    onClick,
    onContextMenu: handleContextMenu,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown2,
    onKeyUp: handleKeyUp,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onDragLeave: handleDragLeave,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart,
    ref: handleRef,
    tabIndex: disabled ? -1 : tabIndex,
    type
  }, buttonProps, other, {
    children: [children, enableTouchRipple ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ jsxRuntimeExports.jsx(TouchRipple, _extends({
        ref: handleRippleRef,
        center: centerRipple
      }, TouchRippleProps))
    ) : null]
  }));
});
function getIconButtonUtilityClass(slot) {
  return generateUtilityClass("MuiIconButton", slot);
}
const iconButtonClasses = generateUtilityClasses("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]);
const _excluded$n = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"];
const useUtilityClasses$g = (ownerState) => {
  const {
    classes,
    disabled,
    color,
    edge,
    size
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", color !== "default" && "color".concat(capitalize$1(color)), edge && "edge".concat(capitalize$1(edge)), "size".concat(capitalize$1(size))]
  };
  return composeClasses(slots, getIconButtonUtilityClass, classes);
};
const IconButtonRoot = styled(ButtonBase, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.color !== "default" && styles2["color".concat(capitalize$1(ownerState.color))], ownerState.edge && styles2["edge".concat(capitalize$1(ownerState.edge))], styles2["size".concat(capitalize$1(ownerState.size))]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: theme.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  overflow: "visible",
  // Explicitly set the default value to solve a bug on IE11.
  color: (theme.vars || theme).palette.action.active,
  transition: theme.transitions.create("background-color", {
    duration: theme.transitions.duration.shortest
  })
}, !ownerState.disableRipple && {
  "&:hover": {
    backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.action.activeChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : alpha_1(theme.palette.action.active, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, ownerState.edge === "start" && {
  marginLeft: ownerState.size === "small" ? -3 : -12
}, ownerState.edge === "end" && {
  marginRight: ownerState.size === "small" ? -3 : -12
}), ({
  theme,
  ownerState
}) => {
  var _palette;
  const palette2 = (_palette = (theme.vars || theme).palette) == null ? void 0 : _palette[ownerState.color];
  return _extends({}, ownerState.color === "inherit" && {
    color: "inherit"
  }, ownerState.color !== "inherit" && ownerState.color !== "default" && _extends({
    color: palette2 == null ? void 0 : palette2.main
  }, !ownerState.disableRipple && {
    "&:hover": _extends({}, palette2 && {
      backgroundColor: theme.vars ? "rgba(".concat(palette2.mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : alpha_1(palette2.main, theme.palette.action.hoverOpacity)
    }, {
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    })
  }), ownerState.size === "small" && {
    padding: 5,
    fontSize: theme.typography.pxToRem(18)
  }, ownerState.size === "large" && {
    padding: 12,
    fontSize: theme.typography.pxToRem(28)
  }, {
    ["&.".concat(iconButtonClasses.disabled)]: {
      backgroundColor: "transparent",
      color: (theme.vars || theme).palette.action.disabled
    }
  });
});
const IconButton = /* @__PURE__ */ reactExports.forwardRef(function IconButton2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiIconButton"
  });
  const {
    edge = false,
    children,
    className,
    color = "default",
    disabled = false,
    disableFocusRipple = false,
    size = "medium"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$n);
  const ownerState = _extends({}, props, {
    edge,
    color,
    disabled,
    disableFocusRipple,
    size
  });
  const classes = useUtilityClasses$g(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(IconButtonRoot, _extends({
    className: clsx(classes.root, className),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled,
    ref
  }, other, {
    ownerState,
    children
  }));
});
function getTypographyUtilityClass(slot) {
  return generateUtilityClass("MuiTypography", slot);
}
const typographyClasses = generateUtilityClasses("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const _excluded$m = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"];
const useUtilityClasses$f = (ownerState) => {
  const {
    align,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, ownerState.align !== "inherit" && "align".concat(capitalize$1(align)), gutterBottom && "gutterBottom", noWrap && "noWrap", paragraph && "paragraph"]
  };
  return composeClasses(slots, getTypographyUtilityClass, classes);
};
const TypographyRoot = styled("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.variant && styles2[ownerState.variant], ownerState.align !== "inherit" && styles2["align".concat(capitalize$1(ownerState.align))], ownerState.noWrap && styles2.noWrap, ownerState.gutterBottom && styles2.gutterBottom, ownerState.paragraph && styles2.paragraph];
  }
})(({
  theme,
  ownerState
}) => _extends({
  margin: 0
}, ownerState.variant === "inherit" && {
  // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
  font: "inherit"
}, ownerState.variant !== "inherit" && theme.typography[ownerState.variant], ownerState.align !== "inherit" && {
  textAlign: ownerState.align
}, ownerState.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, ownerState.gutterBottom && {
  marginBottom: "0.35em"
}, ownerState.paragraph && {
  marginBottom: 16
}));
const defaultVariantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
};
const colorTransformations = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
};
const transformDeprecatedColors = (color) => {
  return colorTransformations[color] || color;
};
const Typography = /* @__PURE__ */ reactExports.forwardRef(function Typography2(inProps, ref) {
  const themeProps = useDefaultProps({
    props: inProps,
    name: "MuiTypography"
  });
  const color = transformDeprecatedColors(themeProps.color);
  const props = extendSxProp(_extends({}, themeProps, {
    color
  }));
  const {
    align = "inherit",
    className,
    component,
    gutterBottom = false,
    noWrap = false,
    paragraph = false,
    variant = "body1",
    variantMapping = defaultVariantMapping
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$m);
  const ownerState = _extends({}, props, {
    align,
    color,
    className,
    component,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    variantMapping
  });
  const Component = component || (paragraph ? "p" : variantMapping[variant] || defaultVariantMapping[variant]) || "span";
  const classes = useUtilityClasses$f(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TypographyRoot, _extends({
    as: Component,
    ref,
    ownerState,
    className: clsx(classes.root, className)
  }, other));
});
function getContainer$1(container) {
  return typeof container === "function" ? container() : container;
}
const Portal = /* @__PURE__ */ reactExports.forwardRef(function Portal2(props, forwardedRef) {
  const {
    children,
    container,
    disablePortal = false
  } = props;
  const [mountNode, setMountNode] = reactExports.useState(null);
  const handleRef = useForkRef(/* @__PURE__ */ reactExports.isValidElement(children) ? children.ref : null, forwardedRef);
  useEnhancedEffect(() => {
    if (!disablePortal) {
      setMountNode(getContainer$1(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect(() => {
    if (mountNode && !disablePortal) {
      setRef$1(forwardedRef, mountNode);
      return () => {
        setRef$1(forwardedRef, null);
      };
    }
    return void 0;
  }, [forwardedRef, mountNode, disablePortal]);
  if (disablePortal) {
    if (/* @__PURE__ */ reactExports.isValidElement(children)) {
      const newProps = {
        ref: handleRef
      };
      return /* @__PURE__ */ reactExports.cloneElement(children, newProps);
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, {
      children
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, {
    children: mountNode ? /* @__PURE__ */ reactDomExports.createPortal(children, mountNode) : mountNode
  });
});
const _excluded$l = ["onChange", "maxRows", "minRows", "style", "value"];
function getStyleValue(value) {
  return parseInt(value, 10) || 0;
}
const styles$4 = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function isEmpty$1(obj) {
  return obj === void 0 || obj === null || Object.keys(obj).length === 0 || obj.outerHeightStyle === 0 && !obj.overflowing;
}
const TextareaAutosize = /* @__PURE__ */ reactExports.forwardRef(function TextareaAutosize2(props, forwardedRef) {
  const {
    onChange,
    maxRows,
    minRows = 1,
    style: style2,
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$l);
  const {
    current: isControlled
  } = reactExports.useRef(value != null);
  const inputRef = reactExports.useRef(null);
  const handleRef = useForkRef(forwardedRef, inputRef);
  const heightRef = reactExports.useRef(null);
  const shadowRef = reactExports.useRef(null);
  const calculateTextareaStyles = reactExports.useCallback(() => {
    const input = inputRef.current;
    const containerWindow = ownerWindow(input);
    const computedStyle = containerWindow.getComputedStyle(input);
    if (computedStyle.width === "0px") {
      return {
        outerHeightStyle: 0,
        overflowing: false
      };
    }
    const inputShallow = shadowRef.current;
    inputShallow.style.width = computedStyle.width;
    inputShallow.value = input.value || props.placeholder || "x";
    if (inputShallow.value.slice(-1) === "\n") {
      inputShallow.value += " ";
    }
    const boxSizing = computedStyle.boxSizing;
    const padding = getStyleValue(computedStyle.paddingBottom) + getStyleValue(computedStyle.paddingTop);
    const border = getStyleValue(computedStyle.borderBottomWidth) + getStyleValue(computedStyle.borderTopWidth);
    const innerHeight = inputShallow.scrollHeight;
    inputShallow.value = "x";
    const singleRowHeight = inputShallow.scrollHeight;
    let outerHeight = innerHeight;
    if (minRows) {
      outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
    }
    if (maxRows) {
      outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
    }
    outerHeight = Math.max(outerHeight, singleRowHeight);
    const outerHeightStyle = outerHeight + (boxSizing === "border-box" ? padding + border : 0);
    const overflowing = Math.abs(outerHeight - innerHeight) <= 1;
    return {
      outerHeightStyle,
      overflowing
    };
  }, [maxRows, minRows, props.placeholder]);
  const syncHeight = reactExports.useCallback(() => {
    const textareaStyles = calculateTextareaStyles();
    if (isEmpty$1(textareaStyles)) {
      return;
    }
    const outerHeightStyle = textareaStyles.outerHeightStyle;
    const input = inputRef.current;
    if (heightRef.current !== outerHeightStyle) {
      heightRef.current = outerHeightStyle;
      input.style.height = "".concat(outerHeightStyle, "px");
    }
    input.style.overflow = textareaStyles.overflowing ? "hidden" : "";
  }, [calculateTextareaStyles]);
  useEnhancedEffect(() => {
    const handleResize = () => {
      syncHeight();
    };
    let rAF;
    const debounceHandleResize = debounce(handleResize);
    const input = inputRef.current;
    const containerWindow = ownerWindow(input);
    containerWindow.addEventListener("resize", debounceHandleResize);
    let resizeObserver;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(input);
    }
    return () => {
      debounceHandleResize.clear();
      cancelAnimationFrame(rAF);
      containerWindow.removeEventListener("resize", debounceHandleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [calculateTextareaStyles, syncHeight]);
  useEnhancedEffect(() => {
    syncHeight();
  });
  const handleChange = (event) => {
    if (!isControlled) {
      syncHeight();
    }
    if (onChange) {
      onChange(event);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("textarea", _extends({
      value,
      onChange: handleChange,
      ref: handleRef,
      rows: minRows,
      style: style2
    }, other)), /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", {
      "aria-hidden": true,
      className: props.className,
      readOnly: true,
      ref: shadowRef,
      tabIndex: -1,
      style: _extends({}, styles$4.shadow, style2, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
function formControlState({
  props,
  states,
  muiFormControl
}) {
  return states.reduce((acc, state) => {
    acc[state] = props[state];
    if (muiFormControl) {
      if (typeof props[state] === "undefined") {
        acc[state] = muiFormControl[state];
      }
    }
    return acc;
  }, {});
}
const FormControlContext = /* @__PURE__ */ reactExports.createContext(void 0);
function useFormControl() {
  return reactExports.useContext(FormControlContext);
}
function GlobalStyles(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(GlobalStyles$1, _extends({}, props, {
    defaultTheme,
    themeId: THEME_ID
  }));
}
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0);
}
function isFilled(obj, SSR = false) {
  return obj && (hasValue(obj.value) && obj.value !== "" || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== "");
}
function isAdornedStart(obj) {
  return obj.startAdornment;
}
function getInputBaseUtilityClass(slot) {
  return generateUtilityClass("MuiInputBase", slot);
}
const inputBaseClasses = generateUtilityClasses("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
const _excluded$k = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"];
const rootOverridesResolver = (props, styles2) => {
  const {
    ownerState
  } = props;
  return [styles2.root, ownerState.formControl && styles2.formControl, ownerState.startAdornment && styles2.adornedStart, ownerState.endAdornment && styles2.adornedEnd, ownerState.error && styles2.error, ownerState.size === "small" && styles2.sizeSmall, ownerState.multiline && styles2.multiline, ownerState.color && styles2["color".concat(capitalize$1(ownerState.color))], ownerState.fullWidth && styles2.fullWidth, ownerState.hiddenLabel && styles2.hiddenLabel];
};
const inputOverridesResolver = (props, styles2) => {
  const {
    ownerState
  } = props;
  return [styles2.input, ownerState.size === "small" && styles2.inputSizeSmall, ownerState.multiline && styles2.inputMultiline, ownerState.type === "search" && styles2.inputTypeSearch, ownerState.startAdornment && styles2.inputAdornedStart, ownerState.endAdornment && styles2.inputAdornedEnd, ownerState.hiddenLabel && styles2.inputHiddenLabel];
};
const useUtilityClasses$e = (ownerState) => {
  const {
    classes,
    color,
    disabled,
    error: error2,
    endAdornment,
    focused,
    formControl,
    fullWidth,
    hiddenLabel,
    multiline,
    readOnly,
    size,
    startAdornment,
    type
  } = ownerState;
  const slots = {
    root: ["root", "color".concat(capitalize$1(color)), disabled && "disabled", error2 && "error", fullWidth && "fullWidth", focused && "focused", formControl && "formControl", size && size !== "medium" && "size".concat(capitalize$1(size)), multiline && "multiline", startAdornment && "adornedStart", endAdornment && "adornedEnd", hiddenLabel && "hiddenLabel", readOnly && "readOnly"],
    input: ["input", disabled && "disabled", type === "search" && "inputTypeSearch", multiline && "inputMultiline", size === "small" && "inputSizeSmall", hiddenLabel && "inputHiddenLabel", startAdornment && "inputAdornedStart", endAdornment && "inputAdornedEnd", readOnly && "readOnly"]
  };
  return composeClasses(slots, getInputBaseUtilityClass, classes);
};
const InputBaseRoot = styled("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: rootOverridesResolver
})(({
  theme,
  ownerState
}) => _extends({}, theme.typography.body1, {
  color: (theme.vars || theme).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  ["&.".concat(inputBaseClasses.disabled)]: {
    color: (theme.vars || theme).palette.text.disabled,
    cursor: "default"
  }
}, ownerState.multiline && _extends({
  padding: "4px 0 5px"
}, ownerState.size === "small" && {
  paddingTop: 1
}), ownerState.fullWidth && {
  width: "100%"
}));
const InputBaseComponent = styled("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})(({
  theme,
  ownerState
}) => {
  const light = theme.palette.mode === "light";
  const placeholder = _extends({
    color: "currentColor"
  }, theme.vars ? {
    opacity: theme.vars.opacity.inputPlaceholder
  } : {
    opacity: light ? 0.42 : 0.5
  }, {
    transition: theme.transitions.create("opacity", {
      duration: theme.transitions.duration.shorter
    })
  });
  const placeholderHidden = {
    opacity: "0 !important"
  };
  const placeholderVisible = theme.vars ? {
    opacity: theme.vars.opacity.inputPlaceholder
  } : {
    opacity: light ? 0.42 : 0.5
  };
  return _extends({
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    // Fix IE11 width issue
    animationName: "mui-auto-fill-cancel",
    animationDuration: "10ms",
    "&::-webkit-input-placeholder": placeholder,
    "&::-moz-placeholder": placeholder,
    // Firefox 19+
    "&:-ms-input-placeholder": placeholder,
    // IE11
    "&::-ms-input-placeholder": placeholder,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    ["label[data-shrink=false] + .".concat(inputBaseClasses.formControl, " &")]: {
      "&::-webkit-input-placeholder": placeholderHidden,
      "&::-moz-placeholder": placeholderHidden,
      // Firefox 19+
      "&:-ms-input-placeholder": placeholderHidden,
      // IE11
      "&::-ms-input-placeholder": placeholderHidden,
      // Edge
      "&:focus::-webkit-input-placeholder": placeholderVisible,
      "&:focus::-moz-placeholder": placeholderVisible,
      // Firefox 19+
      "&:focus:-ms-input-placeholder": placeholderVisible,
      // IE11
      "&:focus::-ms-input-placeholder": placeholderVisible
      // Edge
    },
    ["&.".concat(inputBaseClasses.disabled)]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (theme.vars || theme).palette.text.disabled
      // Fix opacity Safari bug
    },
    "&:-webkit-autofill": {
      animationDuration: "5000s",
      animationName: "mui-auto-fill"
    }
  }, ownerState.size === "small" && {
    paddingTop: 1
  }, ownerState.multiline && {
    height: "auto",
    resize: "none",
    padding: 0,
    paddingTop: 0
  }, ownerState.type === "search" && {
    // Improve type search style.
    MozAppearance: "textfield"
  });
});
const inputGlobalStyles = /* @__PURE__ */ jsxRuntimeExports.jsx(GlobalStyles, {
  styles: {
    "@keyframes mui-auto-fill": {
      from: {
        display: "block"
      }
    },
    "@keyframes mui-auto-fill-cancel": {
      from: {
        display: "block"
      }
    }
  }
});
const InputBase = /* @__PURE__ */ reactExports.forwardRef(function InputBase2(inProps, ref) {
  var _slotProps$input;
  const props = useDefaultProps({
    props: inProps,
    name: "MuiInputBase"
  });
  const {
    "aria-describedby": ariaDescribedby,
    autoComplete,
    autoFocus,
    className,
    components = {},
    componentsProps = {},
    defaultValue,
    disabled,
    disableInjectingGlobalStyles,
    endAdornment,
    fullWidth = false,
    id,
    inputComponent = "input",
    inputProps: inputPropsProp = {},
    inputRef: inputRefProp,
    maxRows,
    minRows,
    multiline = false,
    name,
    onBlur,
    onChange,
    onClick,
    onFocus,
    onKeyDown,
    onKeyUp,
    placeholder,
    readOnly,
    renderSuffix,
    rows,
    slotProps = {},
    slots = {},
    startAdornment,
    type = "text",
    value: valueProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$k);
  const value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;
  const {
    current: isControlled
  } = reactExports.useRef(value != null);
  const inputRef = reactExports.useRef();
  const handleInputRefWarning = reactExports.useCallback((instance2) => {
  }, []);
  const handleInputRef = useForkRef(inputRef, inputRefProp, inputPropsProp.ref, handleInputRefWarning);
  const [focused, setFocused] = reactExports.useState(false);
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  fcs.focused = muiFormControl ? muiFormControl.focused : focused;
  reactExports.useEffect(() => {
    if (!muiFormControl && disabled && focused) {
      setFocused(false);
      if (onBlur) {
        onBlur();
      }
    }
  }, [muiFormControl, disabled, focused, onBlur]);
  const onFilled = muiFormControl && muiFormControl.onFilled;
  const onEmpty = muiFormControl && muiFormControl.onEmpty;
  const checkDirty = reactExports.useCallback((obj) => {
    if (isFilled(obj)) {
      if (onFilled) {
        onFilled();
      }
    } else if (onEmpty) {
      onEmpty();
    }
  }, [onFilled, onEmpty]);
  useEnhancedEffect(() => {
    if (isControlled) {
      checkDirty({
        value
      });
    }
  }, [value, checkDirty, isControlled]);
  const handleFocus = (event) => {
    if (fcs.disabled) {
      event.stopPropagation();
      return;
    }
    if (onFocus) {
      onFocus(event);
    }
    if (inputPropsProp.onFocus) {
      inputPropsProp.onFocus(event);
    }
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    } else {
      setFocused(true);
    }
  };
  const handleBlur = (event) => {
    if (onBlur) {
      onBlur(event);
    }
    if (inputPropsProp.onBlur) {
      inputPropsProp.onBlur(event);
    }
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    } else {
      setFocused(false);
    }
  };
  const handleChange = (event, ...args) => {
    if (!isControlled) {
      const element = event.target || inputRef.current;
      if (element == null) {
        throw new Error(formatMuiErrorMessage(1));
      }
      checkDirty({
        value: element.value
      });
    }
    if (inputPropsProp.onChange) {
      inputPropsProp.onChange(event, ...args);
    }
    if (onChange) {
      onChange(event, ...args);
    }
  };
  reactExports.useEffect(() => {
    checkDirty(inputRef.current);
  }, []);
  const handleClick = (event) => {
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }
    if (onClick) {
      onClick(event);
    }
  };
  let InputComponent = inputComponent;
  let inputProps = inputPropsProp;
  if (multiline && InputComponent === "input") {
    if (rows) {
      inputProps = _extends({
        type: void 0,
        minRows: rows,
        maxRows: rows
      }, inputProps);
    } else {
      inputProps = _extends({
        type: void 0,
        maxRows,
        minRows
      }, inputProps);
    }
    InputComponent = TextareaAutosize;
  }
  const handleAutoFill = (event) => {
    checkDirty(event.animationName === "mui-auto-fill-cancel" ? inputRef.current : {
      value: "x"
    });
  };
  reactExports.useEffect(() => {
    if (muiFormControl) {
      muiFormControl.setAdornedStart(Boolean(startAdornment));
    }
  }, [muiFormControl, startAdornment]);
  const ownerState = _extends({}, props, {
    color: fcs.color || "primary",
    disabled: fcs.disabled,
    endAdornment,
    error: fcs.error,
    focused: fcs.focused,
    formControl: muiFormControl,
    fullWidth,
    hiddenLabel: fcs.hiddenLabel,
    multiline,
    size: fcs.size,
    startAdornment,
    type
  });
  const classes = useUtilityClasses$e(ownerState);
  const Root = slots.root || components.Root || InputBaseRoot;
  const rootProps = slotProps.root || componentsProps.root || {};
  const Input3 = slots.input || components.Input || InputBaseComponent;
  inputProps = _extends({}, inputProps, (_slotProps$input = slotProps.input) != null ? _slotProps$input : componentsProps.input);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
    children: [!disableInjectingGlobalStyles && inputGlobalStyles, /* @__PURE__ */ jsxRuntimeExports.jsxs(Root, _extends({}, rootProps, !isHostComponent(Root) && {
      ownerState: _extends({}, ownerState, rootProps.ownerState)
    }, {
      ref,
      onClick: handleClick
    }, other, {
      className: clsx(classes.root, rootProps.className, className, readOnly && "MuiInputBase-readOnly"),
      children: [startAdornment, /* @__PURE__ */ jsxRuntimeExports.jsx(FormControlContext.Provider, {
        value: null,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input3, _extends({
          ownerState,
          "aria-invalid": fcs.error,
          "aria-describedby": ariaDescribedby,
          autoComplete,
          autoFocus,
          defaultValue,
          disabled: fcs.disabled,
          id,
          onAnimationStart: handleAutoFill,
          name,
          placeholder,
          readOnly,
          required: fcs.required,
          rows,
          value,
          onKeyDown,
          onKeyUp,
          type
        }, inputProps, !isHostComponent(Input3) && {
          as: InputComponent,
          ownerState: _extends({}, ownerState, inputProps.ownerState)
        }, {
          ref: handleInputRef,
          className: clsx(classes.input, inputProps.className, readOnly && "MuiInputBase-readOnly"),
          onBlur: handleBlur,
          onChange: handleChange,
          onFocus: handleFocus
        }))
      }), endAdornment, renderSuffix ? renderSuffix(_extends({}, fcs, {
        startAdornment
      })) : null]
    }))]
  });
});
function getInputUtilityClass(slot) {
  return generateUtilityClass("MuiInput", slot);
}
const inputClasses = _extends({}, inputBaseClasses, generateUtilityClasses("MuiInput", ["root", "underline", "input"]));
function getOutlinedInputUtilityClass(slot) {
  return generateUtilityClass("MuiOutlinedInput", slot);
}
const outlinedInputClasses = _extends({}, inputBaseClasses, generateUtilityClasses("MuiOutlinedInput", ["root", "notchedOutline", "input"]));
function getFilledInputUtilityClass(slot) {
  return generateUtilityClass("MuiFilledInput", slot);
}
const filledInputClasses = _extends({}, inputBaseClasses, generateUtilityClasses("MuiFilledInput", ["root", "underline", "input"]));
const ArrowDropDownIcon = createSvgIcon$1(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");
const _excluded$j = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
const styles$3 = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};
const Fade = /* @__PURE__ */ reactExports.forwardRef(function Fade2(props, ref) {
  const theme = useTheme();
  const defaultTimeout = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    addEndListener,
    appear = true,
    children,
    easing,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style: style2,
    timeout = defaultTimeout,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$j);
  const nodeRef = reactExports.useRef(null);
  const handleRef = useForkRef(nodeRef, children.ref, ref);
  const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
    if (callback) {
      const node2 = nodeRef.current;
      if (maybeIsAppearing === void 0) {
        callback(node2);
      } else {
        callback(node2, maybeIsAppearing);
      }
    }
  };
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node2, isAppearing) => {
    reflow(node2);
    const transitionProps = getTransitionProps({
      style: style2,
      timeout,
      easing
    }, {
      mode: "enter"
    });
    node2.style.webkitTransition = theme.transitions.create("opacity", transitionProps);
    node2.style.transition = theme.transitions.create("opacity", transitionProps);
    if (onEnter) {
      onEnter(node2, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback((node2) => {
    const transitionProps = getTransitionProps({
      style: style2,
      timeout,
      easing
    }, {
      mode: "exit"
    });
    node2.style.webkitTransition = theme.transitions.create("opacity", transitionProps);
    node2.style.transition = theme.transitions.create("opacity", transitionProps);
    if (onExit) {
      onExit(node2);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleAddEndListener = (next2) => {
    if (addEndListener) {
      addEndListener(nodeRef.current, next2);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionComponent, _extends({
    appear,
    in: inProp,
    nodeRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout
  }, other, {
    children: (state, childProps) => {
      return /* @__PURE__ */ reactExports.cloneElement(children, _extends({
        style: _extends({
          opacity: 0,
          visibility: state === "exited" && !inProp ? "hidden" : void 0
        }, styles$3[state], style2, children.props.style),
        ref: handleRef
      }, childProps));
    }
  }));
});
function getBackdropUtilityClass(slot) {
  return generateUtilityClass("MuiBackdrop", slot);
}
generateUtilityClasses("MuiBackdrop", ["root", "invisible"]);
const _excluded$i = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"];
const useUtilityClasses$d = (ownerState) => {
  const {
    classes,
    invisible
  } = ownerState;
  const slots = {
    root: ["root", invisible && "invisible"]
  };
  return composeClasses(slots, getBackdropUtilityClass, classes);
};
const BackdropRoot = styled("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.invisible && styles2.invisible];
  }
})(({
  ownerState
}) => _extends({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, ownerState.invisible && {
  backgroundColor: "transparent"
}));
const Backdrop = /* @__PURE__ */ reactExports.forwardRef(function Backdrop2(inProps, ref) {
  var _slotProps$root, _ref, _slots$root;
  const props = useDefaultProps({
    props: inProps,
    name: "MuiBackdrop"
  });
  const {
    children,
    className,
    component = "div",
    components = {},
    componentsProps = {},
    invisible = false,
    open,
    slotProps = {},
    slots = {},
    TransitionComponent = Fade,
    transitionDuration
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$i);
  const ownerState = _extends({}, props, {
    component,
    invisible
  });
  const classes = useUtilityClasses$d(ownerState);
  const rootSlotProps = (_slotProps$root = slotProps.root) != null ? _slotProps$root : componentsProps.root;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionComponent, _extends({
    in: open,
    timeout: transitionDuration
  }, other, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(BackdropRoot, _extends({
      "aria-hidden": true
    }, rootSlotProps, {
      as: (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : component,
      className: clsx(classes.root, className, rootSlotProps == null ? void 0 : rootSlotProps.className),
      ownerState: _extends({}, ownerState, rootSlotProps == null ? void 0 : rootSlotProps.ownerState),
      classes,
      ref,
      children
    }))
  }));
});
function getButtonUtilityClass(slot) {
  return generateUtilityClass("MuiButton", slot);
}
const buttonClasses = generateUtilityClasses("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]);
const ButtonGroupContext = /* @__PURE__ */ reactExports.createContext({});
const ButtonGroupButtonContext = /* @__PURE__ */ reactExports.createContext(void 0);
const _excluded$h = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"];
const useUtilityClasses$c = (ownerState) => {
  const {
    color,
    disableElevation,
    fullWidth,
    size,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, "".concat(variant).concat(capitalize$1(color)), "size".concat(capitalize$1(size)), "".concat(variant, "Size").concat(capitalize$1(size)), "color".concat(capitalize$1(color)), disableElevation && "disableElevation", fullWidth && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", "iconSize".concat(capitalize$1(size))],
    endIcon: ["icon", "endIcon", "iconSize".concat(capitalize$1(size))]
  };
  const composedClasses = composeClasses(slots, getButtonUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
const commonIconStyles = (ownerState) => _extends({}, ownerState.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, ownerState.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, ownerState.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
});
const ButtonRoot = styled(ButtonBase, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.variant], styles2["".concat(ownerState.variant).concat(capitalize$1(ownerState.color))], styles2["size".concat(capitalize$1(ownerState.size))], styles2["".concat(ownerState.variant, "Size").concat(capitalize$1(ownerState.size))], ownerState.color === "inherit" && styles2.colorInherit, ownerState.disableElevation && styles2.disableElevation, ownerState.fullWidth && styles2.fullWidth];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$palette$getCon, _theme$palette;
  const inheritContainedBackgroundColor = theme.palette.mode === "light" ? theme.palette.grey[300] : theme.palette.grey[800];
  const inheritContainedHoverBackgroundColor = theme.palette.mode === "light" ? theme.palette.grey.A100 : theme.palette.grey[700];
  return _extends({}, theme.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (theme.vars || theme).shape.borderRadius,
    transition: theme.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: theme.transitions.duration.short
    }),
    "&:hover": _extends({
      textDecoration: "none",
      backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.text.primaryChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : alpha_1(theme.palette.text.primary, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, ownerState.variant === "text" && ownerState.color !== "inherit" && {
      backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette[ownerState.color].mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : alpha_1(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, ownerState.variant === "outlined" && ownerState.color !== "inherit" && {
      border: "1px solid ".concat((theme.vars || theme).palette[ownerState.color].main),
      backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette[ownerState.color].mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : alpha_1(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, ownerState.variant === "contained" && {
      backgroundColor: theme.vars ? theme.vars.palette.Button.inheritContainedHoverBg : inheritContainedHoverBackgroundColor,
      boxShadow: (theme.vars || theme).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: (theme.vars || theme).shadows[2],
        backgroundColor: (theme.vars || theme).palette.grey[300]
      }
    }, ownerState.variant === "contained" && ownerState.color !== "inherit" && {
      backgroundColor: (theme.vars || theme).palette[ownerState.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (theme.vars || theme).palette[ownerState.color].main
      }
    }),
    "&:active": _extends({}, ownerState.variant === "contained" && {
      boxShadow: (theme.vars || theme).shadows[8]
    }),
    ["&.".concat(buttonClasses.focusVisible)]: _extends({}, ownerState.variant === "contained" && {
      boxShadow: (theme.vars || theme).shadows[6]
    }),
    ["&.".concat(buttonClasses.disabled)]: _extends({
      color: (theme.vars || theme).palette.action.disabled
    }, ownerState.variant === "outlined" && {
      border: "1px solid ".concat((theme.vars || theme).palette.action.disabledBackground)
    }, ownerState.variant === "contained" && {
      color: (theme.vars || theme).palette.action.disabled,
      boxShadow: (theme.vars || theme).shadows[0],
      backgroundColor: (theme.vars || theme).palette.action.disabledBackground
    })
  }, ownerState.variant === "text" && {
    padding: "6px 8px"
  }, ownerState.variant === "text" && ownerState.color !== "inherit" && {
    color: (theme.vars || theme).palette[ownerState.color].main
  }, ownerState.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, ownerState.variant === "outlined" && ownerState.color !== "inherit" && {
    color: (theme.vars || theme).palette[ownerState.color].main,
    border: theme.vars ? "1px solid rgba(".concat(theme.vars.palette[ownerState.color].mainChannel, " / 0.5)") : "1px solid ".concat(alpha_1(theme.palette[ownerState.color].main, 0.5))
  }, ownerState.variant === "contained" && {
    color: theme.vars ? (
      // this is safe because grey does not change between default light/dark mode
      theme.vars.palette.text.primary
    ) : (_theme$palette$getCon = (_theme$palette = theme.palette).getContrastText) == null ? void 0 : _theme$palette$getCon.call(_theme$palette, theme.palette.grey[300]),
    backgroundColor: theme.vars ? theme.vars.palette.Button.inheritContainedBg : inheritContainedBackgroundColor,
    boxShadow: (theme.vars || theme).shadows[2]
  }, ownerState.variant === "contained" && ownerState.color !== "inherit" && {
    color: (theme.vars || theme).palette[ownerState.color].contrastText,
    backgroundColor: (theme.vars || theme).palette[ownerState.color].main
  }, ownerState.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, ownerState.size === "small" && ownerState.variant === "text" && {
    padding: "4px 5px",
    fontSize: theme.typography.pxToRem(13)
  }, ownerState.size === "large" && ownerState.variant === "text" && {
    padding: "8px 11px",
    fontSize: theme.typography.pxToRem(15)
  }, ownerState.size === "small" && ownerState.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: theme.typography.pxToRem(13)
  }, ownerState.size === "large" && ownerState.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: theme.typography.pxToRem(15)
  }, ownerState.size === "small" && ownerState.variant === "contained" && {
    padding: "4px 10px",
    fontSize: theme.typography.pxToRem(13)
  }, ownerState.size === "large" && ownerState.variant === "contained" && {
    padding: "8px 22px",
    fontSize: theme.typography.pxToRem(15)
  }, ownerState.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState
}) => ownerState.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  ["&.".concat(buttonClasses.focusVisible)]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  ["&.".concat(buttonClasses.disabled)]: {
    boxShadow: "none"
  }
});
const ButtonStartIcon = styled("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.startIcon, styles2["iconSize".concat(capitalize$1(ownerState.size))]];
  }
})(({
  ownerState
}) => _extends({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, ownerState.size === "small" && {
  marginLeft: -2
}, commonIconStyles(ownerState)));
const ButtonEndIcon = styled("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.endIcon, styles2["iconSize".concat(capitalize$1(ownerState.size))]];
  }
})(({
  ownerState
}) => _extends({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, ownerState.size === "small" && {
  marginRight: -2
}, commonIconStyles(ownerState)));
const Button = /* @__PURE__ */ reactExports.forwardRef(function Button2(inProps, ref) {
  const contextProps = reactExports.useContext(ButtonGroupContext);
  const buttonGroupButtonContextPositionClassName = reactExports.useContext(ButtonGroupButtonContext);
  const resolvedProps = resolveProps(contextProps, inProps);
  const props = useDefaultProps({
    props: resolvedProps,
    name: "MuiButton"
  });
  const {
    children,
    color = "primary",
    component = "button",
    className,
    disabled = false,
    disableElevation = false,
    disableFocusRipple = false,
    endIcon: endIconProp,
    focusVisibleClassName,
    fullWidth = false,
    size = "medium",
    startIcon: startIconProp,
    type,
    variant = "text"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$h);
  const ownerState = _extends({}, props, {
    color,
    component,
    disabled,
    disableElevation,
    disableFocusRipple,
    fullWidth,
    size,
    type,
    variant
  });
  const classes = useUtilityClasses$c(ownerState);
  const startIcon = startIconProp && /* @__PURE__ */ jsxRuntimeExports.jsx(ButtonStartIcon, {
    className: classes.startIcon,
    ownerState,
    children: startIconProp
  });
  const endIcon = endIconProp && /* @__PURE__ */ jsxRuntimeExports.jsx(ButtonEndIcon, {
    className: classes.endIcon,
    ownerState,
    children: endIconProp
  });
  const positionClassName = buttonGroupButtonContextPositionClassName || "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ButtonRoot, _extends({
    ownerState,
    className: clsx(contextProps.className, classes.root, className, positionClassName),
    component,
    disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
    ref,
    type
  }, other, {
    classes,
    children: [startIcon, children, endIcon]
  }));
});
const Container = createContainer({
  createStyledComponent: styled("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.root, styles2["maxWidth".concat(capitalize$1(String(ownerState.maxWidth)))], ownerState.fixed && styles2.fixed, ownerState.disableGutters && styles2.disableGutters];
    }
  }),
  useThemeProps: (inProps) => useDefaultProps({
    props: inProps,
    name: "MuiContainer"
  })
});
function isOverflowing(container) {
  const doc = ownerDocument(container);
  if (doc.body === container) {
    return ownerWindow(container).innerWidth > doc.documentElement.clientWidth;
  }
  return container.scrollHeight > container.clientHeight;
}
function ariaHidden(element, show) {
  if (show) {
    element.setAttribute("aria-hidden", "true");
  } else {
    element.removeAttribute("aria-hidden");
  }
}
function getPaddingRight(element) {
  return parseInt(ownerWindow(element).getComputedStyle(element).paddingRight, 10) || 0;
}
function isAriaHiddenForbiddenOnElement(element) {
  const forbiddenTagNames = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"];
  const isForbiddenTagName = forbiddenTagNames.indexOf(element.tagName) !== -1;
  const isInputHidden = element.tagName === "INPUT" && element.getAttribute("type") === "hidden";
  return isForbiddenTagName || isInputHidden;
}
function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude, show) {
  const blacklist = [mountElement, currentElement, ...elementsToExclude];
  [].forEach.call(container.children, (element) => {
    const isNotExcludedElement = blacklist.indexOf(element) === -1;
    const isNotForbiddenElement = !isAriaHiddenForbiddenOnElement(element);
    if (isNotExcludedElement && isNotForbiddenElement) {
      ariaHidden(element, show);
    }
  });
}
function findIndexOf(items, callback) {
  let idx = -1;
  items.some((item, index) => {
    if (callback(item)) {
      idx = index;
      return true;
    }
    return false;
  });
  return idx;
}
function handleContainer(containerInfo, props) {
  const restoreStyle = [];
  const container = containerInfo.container;
  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      const scrollbarSize = getScrollbarSize(ownerDocument(container));
      restoreStyle.push({
        value: container.style.paddingRight,
        property: "padding-right",
        el: container
      });
      container.style.paddingRight = "".concat(getPaddingRight(container) + scrollbarSize, "px");
      const fixedElements = ownerDocument(container).querySelectorAll(".mui-fixed");
      [].forEach.call(fixedElements, (element) => {
        restoreStyle.push({
          value: element.style.paddingRight,
          property: "padding-right",
          el: element
        });
        element.style.paddingRight = "".concat(getPaddingRight(element) + scrollbarSize, "px");
      });
    }
    let scrollContainer;
    if (container.parentNode instanceof DocumentFragment) {
      scrollContainer = ownerDocument(container).body;
    } else {
      const parent = container.parentElement;
      const containerWindow = ownerWindow(container);
      scrollContainer = (parent == null ? void 0 : parent.nodeName) === "HTML" && containerWindow.getComputedStyle(parent).overflowY === "scroll" ? parent : container;
    }
    restoreStyle.push({
      value: scrollContainer.style.overflow,
      property: "overflow",
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowX,
      property: "overflow-x",
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowY,
      property: "overflow-y",
      el: scrollContainer
    });
    scrollContainer.style.overflow = "hidden";
  }
  const restore = () => {
    restoreStyle.forEach(({
      value,
      el,
      property
    }) => {
      if (value) {
        el.style.setProperty(property, value);
      } else {
        el.style.removeProperty(property);
      }
    });
  };
  return restore;
}
function getHiddenSiblings(container) {
  const hiddenSiblings = [];
  [].forEach.call(container.children, (element) => {
    if (element.getAttribute("aria-hidden") === "true") {
      hiddenSiblings.push(element);
    }
  });
  return hiddenSiblings;
}
class ModalManager {
  constructor() {
    this.containers = void 0;
    this.modals = void 0;
    this.modals = [];
    this.containers = [];
  }
  add(modal, container) {
    let modalIndex = this.modals.indexOf(modal);
    if (modalIndex !== -1) {
      return modalIndex;
    }
    modalIndex = this.modals.length;
    this.modals.push(modal);
    if (modal.modalRef) {
      ariaHidden(modal.modalRef, false);
    }
    const hiddenSiblings = getHiddenSiblings(container);
    ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
    const containerIndex = findIndexOf(this.containers, (item) => item.container === container);
    if (containerIndex !== -1) {
      this.containers[containerIndex].modals.push(modal);
      return modalIndex;
    }
    this.containers.push({
      modals: [modal],
      container,
      restore: null,
      hiddenSiblings
    });
    return modalIndex;
  }
  mount(modal, props) {
    const containerIndex = findIndexOf(this.containers, (item) => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    if (!containerInfo.restore) {
      containerInfo.restore = handleContainer(containerInfo, props);
    }
  }
  remove(modal, ariaHiddenState = true) {
    const modalIndex = this.modals.indexOf(modal);
    if (modalIndex === -1) {
      return modalIndex;
    }
    const containerIndex = findIndexOf(this.containers, (item) => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
    this.modals.splice(modalIndex, 1);
    if (containerInfo.modals.length === 0) {
      if (containerInfo.restore) {
        containerInfo.restore();
      }
      if (modal.modalRef) {
        ariaHidden(modal.modalRef, ariaHiddenState);
      }
      ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
      this.containers.splice(containerIndex, 1);
    } else {
      const nextTop = containerInfo.modals[containerInfo.modals.length - 1];
      if (nextTop.modalRef) {
        ariaHidden(nextTop.modalRef, false);
      }
    }
    return modalIndex;
  }
  isTopModal(modal) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
  }
}
const candidatesSelector = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function getTabIndex(node2) {
  const tabindexAttr = parseInt(node2.getAttribute("tabindex") || "", 10);
  if (!Number.isNaN(tabindexAttr)) {
    return tabindexAttr;
  }
  if (node2.contentEditable === "true" || (node2.nodeName === "AUDIO" || node2.nodeName === "VIDEO" || node2.nodeName === "DETAILS") && node2.getAttribute("tabindex") === null) {
    return 0;
  }
  return node2.tabIndex;
}
function isNonTabbableRadio(node2) {
  if (node2.tagName !== "INPUT" || node2.type !== "radio") {
    return false;
  }
  if (!node2.name) {
    return false;
  }
  const getRadio = (selector) => node2.ownerDocument.querySelector('input[type="radio"]'.concat(selector));
  let roving = getRadio('[name="'.concat(node2.name, '"]:checked'));
  if (!roving) {
    roving = getRadio('[name="'.concat(node2.name, '"]'));
  }
  return roving !== node2;
}
function isNodeMatchingSelectorFocusable(node2) {
  if (node2.disabled || node2.tagName === "INPUT" && node2.type === "hidden" || isNonTabbableRadio(node2)) {
    return false;
  }
  return true;
}
function defaultGetTabbable(root) {
  const regularTabNodes = [];
  const orderedTabNodes = [];
  Array.from(root.querySelectorAll(candidatesSelector)).forEach((node2, i2) => {
    const nodeTabIndex = getTabIndex(node2);
    if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node2)) {
      return;
    }
    if (nodeTabIndex === 0) {
      regularTabNodes.push(node2);
    } else {
      orderedTabNodes.push({
        documentOrder: i2,
        tabIndex: nodeTabIndex,
        node: node2
      });
    }
  });
  return orderedTabNodes.sort((a2, b2) => a2.tabIndex === b2.tabIndex ? a2.documentOrder - b2.documentOrder : a2.tabIndex - b2.tabIndex).map((a2) => a2.node).concat(regularTabNodes);
}
function defaultIsEnabled() {
  return true;
}
function FocusTrap(props) {
  const {
    children,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableRestoreFocus = false,
    getTabbable = defaultGetTabbable,
    isEnabled = defaultIsEnabled,
    open
  } = props;
  const ignoreNextEnforceFocus = reactExports.useRef(false);
  const sentinelStart = reactExports.useRef(null);
  const sentinelEnd = reactExports.useRef(null);
  const nodeToRestore = reactExports.useRef(null);
  const reactFocusEventTarget = reactExports.useRef(null);
  const activated = reactExports.useRef(false);
  const rootRef = reactExports.useRef(null);
  const handleRef = useForkRef(children.ref, rootRef);
  const lastKeydown = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    activated.current = !disableAutoFocus;
  }, [disableAutoFocus, open]);
  reactExports.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    const doc = ownerDocument(rootRef.current);
    if (!rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute("tabIndex")) {
        rootRef.current.setAttribute("tabIndex", "-1");
      }
      if (activated.current) {
        rootRef.current.focus();
      }
    }
    return () => {
      if (!disableRestoreFocus) {
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          ignoreNextEnforceFocus.current = true;
          nodeToRestore.current.focus();
        }
        nodeToRestore.current = null;
      }
    };
  }, [open]);
  reactExports.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    const doc = ownerDocument(rootRef.current);
    const loopFocus = (nativeEvent) => {
      lastKeydown.current = nativeEvent;
      if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== "Tab") {
        return;
      }
      if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
        ignoreNextEnforceFocus.current = true;
        if (sentinelEnd.current) {
          sentinelEnd.current.focus();
        }
      }
    };
    const contain = () => {
      const rootElement = rootRef.current;
      if (rootElement === null) {
        return;
      }
      if (!doc.hasFocus() || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }
      if (rootElement.contains(doc.activeElement)) {
        return;
      }
      if (disableEnforceFocus && doc.activeElement !== sentinelStart.current && doc.activeElement !== sentinelEnd.current) {
        return;
      }
      if (doc.activeElement !== reactFocusEventTarget.current) {
        reactFocusEventTarget.current = null;
      } else if (reactFocusEventTarget.current !== null) {
        return;
      }
      if (!activated.current) {
        return;
      }
      let tabbable = [];
      if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
        tabbable = getTabbable(rootRef.current);
      }
      if (tabbable.length > 0) {
        var _lastKeydown$current, _lastKeydown$current2;
        const isShiftTab = Boolean(((_lastKeydown$current = lastKeydown.current) == null ? void 0 : _lastKeydown$current.shiftKey) && ((_lastKeydown$current2 = lastKeydown.current) == null ? void 0 : _lastKeydown$current2.key) === "Tab");
        const focusNext = tabbable[0];
        const focusPrevious = tabbable[tabbable.length - 1];
        if (typeof focusNext !== "string" && typeof focusPrevious !== "string") {
          if (isShiftTab) {
            focusPrevious.focus();
          } else {
            focusNext.focus();
          }
        }
      } else {
        rootElement.focus();
      }
    };
    doc.addEventListener("focusin", contain);
    doc.addEventListener("keydown", loopFocus, true);
    const interval = setInterval(() => {
      if (doc.activeElement && doc.activeElement.tagName === "BODY") {
        contain();
      }
    }, 50);
    return () => {
      clearInterval(interval);
      doc.removeEventListener("focusin", contain);
      doc.removeEventListener("keydown", loopFocus, true);
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open, getTabbable]);
  const onFocus = (event) => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
    reactFocusEventTarget.current = event.target;
    const childrenPropsHandler = children.props.onFocus;
    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };
  const handleFocusSentinel = (event) => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelStart,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ reactExports.cloneElement(children, {
      ref: handleRef,
      onFocus
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelEnd,
      "data-testid": "sentinelEnd"
    })]
  });
}
function getContainer(container) {
  return typeof container === "function" ? container() : container;
}
function getHasTransition(children) {
  return children ? children.props.hasOwnProperty("in") : false;
}
const defaultManager = new ModalManager();
function useModal(parameters) {
  const {
    container,
    disableEscapeKeyDown = false,
    disableScrollLock = false,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager = defaultManager,
    closeAfterTransition = false,
    onTransitionEnter,
    onTransitionExited,
    children,
    onClose,
    open,
    rootRef
  } = parameters;
  const modal = reactExports.useRef({});
  const mountNodeRef = reactExports.useRef(null);
  const modalRef = reactExports.useRef(null);
  const handleRef = useForkRef(modalRef, rootRef);
  const [exited, setExited] = reactExports.useState(!open);
  const hasTransition = getHasTransition(children);
  let ariaHiddenProp = true;
  if (parameters["aria-hidden"] === "false" || parameters["aria-hidden"] === false) {
    ariaHiddenProp = false;
  }
  const getDoc = () => ownerDocument(mountNodeRef.current);
  const getModal = () => {
    modal.current.modalRef = modalRef.current;
    modal.current.mount = mountNodeRef.current;
    return modal.current;
  };
  const handleMounted = () => {
    manager.mount(getModal(), {
      disableScrollLock
    });
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  };
  const handleOpen = useEventCallback(() => {
    const resolvedContainer = getContainer(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer);
    if (modalRef.current) {
      handleMounted();
    }
  });
  const isTopModal = reactExports.useCallback(() => manager.isTopModal(getModal()), [manager]);
  const handlePortalRef = useEventCallback((node2) => {
    mountNodeRef.current = node2;
    if (!node2) {
      return;
    }
    if (open && isTopModal()) {
      handleMounted();
    } else if (modalRef.current) {
      ariaHidden(modalRef.current, ariaHiddenProp);
    }
  });
  const handleClose = reactExports.useCallback(() => {
    manager.remove(getModal(), ariaHiddenProp);
  }, [ariaHiddenProp, manager]);
  reactExports.useEffect(() => {
    return () => {
      handleClose();
    };
  }, [handleClose]);
  reactExports.useEffect(() => {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);
  const createHandleKeyDown = (otherHandlers) => (event) => {
    var _otherHandlers$onKeyD;
    (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null || _otherHandlers$onKeyD.call(otherHandlers, event);
    if (event.key !== "Escape" || event.which === 229 || // Wait until IME is settled.
    !isTopModal()) {
      return;
    }
    if (!disableEscapeKeyDown) {
      event.stopPropagation();
      if (onClose) {
        onClose(event, "escapeKeyDown");
      }
    }
  };
  const createHandleBackdropClick = (otherHandlers) => (event) => {
    var _otherHandlers$onClic;
    (_otherHandlers$onClic = otherHandlers.onClick) == null || _otherHandlers$onClic.call(otherHandlers, event);
    if (event.target !== event.currentTarget) {
      return;
    }
    if (onClose) {
      onClose(event, "backdropClick");
    }
  };
  const getRootProps = (otherHandlers = {}) => {
    const propsEventHandlers = extractEventHandlers(parameters);
    delete propsEventHandlers.onTransitionEnter;
    delete propsEventHandlers.onTransitionExited;
    const externalEventHandlers = _extends({}, propsEventHandlers, otherHandlers);
    return _extends({
      role: "presentation"
    }, externalEventHandlers, {
      onKeyDown: createHandleKeyDown(externalEventHandlers),
      ref: handleRef
    });
  };
  const getBackdropProps = (otherHandlers = {}) => {
    const externalEventHandlers = otherHandlers;
    return _extends({
      "aria-hidden": true
    }, externalEventHandlers, {
      onClick: createHandleBackdropClick(externalEventHandlers),
      open
    });
  };
  const getTransitionProps2 = () => {
    const handleEnter = () => {
      setExited(false);
      if (onTransitionEnter) {
        onTransitionEnter();
      }
    };
    const handleExited = () => {
      setExited(true);
      if (onTransitionExited) {
        onTransitionExited();
      }
      if (closeAfterTransition) {
        handleClose();
      }
    };
    return {
      onEnter: createChainedFunction(handleEnter, children == null ? void 0 : children.props.onEnter),
      onExited: createChainedFunction(handleExited, children == null ? void 0 : children.props.onExited)
    };
  };
  return {
    getRootProps,
    getBackdropProps,
    getTransitionProps: getTransitionProps2,
    rootRef: handleRef,
    portalRef: handlePortalRef,
    isTopModal,
    exited,
    hasTransition
  };
}
function getModalUtilityClass(slot) {
  return generateUtilityClass("MuiModal", slot);
}
generateUtilityClasses("MuiModal", ["root", "hidden", "backdrop"]);
const _excluded$g = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"];
const useUtilityClasses$b = (ownerState) => {
  const {
    open,
    exited,
    classes
  } = ownerState;
  const slots = {
    root: ["root", !open && exited && "hidden"],
    backdrop: ["backdrop"]
  };
  return composeClasses(slots, getModalUtilityClass, classes);
};
const ModalRoot = styled("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, !ownerState.open && ownerState.exited && styles2.hidden];
  }
})(({
  theme,
  ownerState
}) => _extends({
  position: "fixed",
  zIndex: (theme.vars || theme).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !ownerState.open && ownerState.exited && {
  visibility: "hidden"
}));
const ModalBackdrop = styled(Backdrop, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (props, styles2) => {
    return styles2.backdrop;
  }
})({
  zIndex: -1
});
const Modal = /* @__PURE__ */ reactExports.forwardRef(function Modal2(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$backdrop, _slotProps$root, _slotProps$backdrop;
  const props = useDefaultProps({
    name: "MuiModal",
    props: inProps
  });
  const {
    BackdropComponent = ModalBackdrop,
    BackdropProps,
    className,
    closeAfterTransition = false,
    children,
    container,
    component,
    components = {},
    componentsProps = {},
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableEscapeKeyDown = false,
    disablePortal = false,
    disableRestoreFocus = false,
    disableScrollLock = false,
    hideBackdrop = false,
    keepMounted = false,
    onBackdropClick,
    open,
    slotProps,
    slots
    // eslint-disable-next-line react/prop-types
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$g);
  const propsWithDefaults = _extends({}, props, {
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    hideBackdrop,
    keepMounted
  });
  const {
    getRootProps,
    getBackdropProps,
    getTransitionProps: getTransitionProps2,
    portalRef,
    isTopModal,
    exited,
    hasTransition
  } = useModal(_extends({}, propsWithDefaults, {
    rootRef: ref
  }));
  const ownerState = _extends({}, propsWithDefaults, {
    exited
  });
  const classes = useUtilityClasses$b(ownerState);
  const childProps = {};
  if (children.props.tabIndex === void 0) {
    childProps.tabIndex = "-1";
  }
  if (hasTransition) {
    const {
      onEnter,
      onExited
    } = getTransitionProps2();
    childProps.onEnter = onEnter;
    childProps.onExited = onExited;
  }
  const RootSlot = (_ref = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : components.Root) != null ? _ref : ModalRoot;
  const BackdropSlot = (_ref2 = (_slots$backdrop = slots == null ? void 0 : slots.backdrop) != null ? _slots$backdrop : components.Backdrop) != null ? _ref2 : BackdropComponent;
  const rootSlotProps = (_slotProps$root = slotProps == null ? void 0 : slotProps.root) != null ? _slotProps$root : componentsProps.root;
  const backdropSlotProps = (_slotProps$backdrop = slotProps == null ? void 0 : slotProps.backdrop) != null ? _slotProps$backdrop : componentsProps.backdrop;
  const rootProps = useSlotProps({
    elementType: RootSlot,
    externalSlotProps: rootSlotProps,
    externalForwardedProps: other,
    getSlotProps: getRootProps,
    additionalProps: {
      ref,
      as: component
    },
    ownerState,
    className: clsx(className, rootSlotProps == null ? void 0 : rootSlotProps.className, classes == null ? void 0 : classes.root, !ownerState.open && ownerState.exited && (classes == null ? void 0 : classes.hidden))
  });
  const backdropProps = useSlotProps({
    elementType: BackdropSlot,
    externalSlotProps: backdropSlotProps,
    additionalProps: BackdropProps,
    getSlotProps: (otherHandlers) => {
      return getBackdropProps(_extends({}, otherHandlers, {
        onClick: (e2) => {
          if (onBackdropClick) {
            onBackdropClick(e2);
          }
          if (otherHandlers != null && otherHandlers.onClick) {
            otherHandlers.onClick(e2);
          }
        }
      }));
    },
    className: clsx(backdropSlotProps == null ? void 0 : backdropSlotProps.className, BackdropProps == null ? void 0 : BackdropProps.className, classes == null ? void 0 : classes.backdrop),
    ownerState
  });
  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, {
    ref: portalRef,
    container,
    disablePortal,
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(RootSlot, _extends({}, rootProps, {
      children: [!hideBackdrop && BackdropComponent ? /* @__PURE__ */ jsxRuntimeExports.jsx(BackdropSlot, _extends({}, backdropProps)) : null, /* @__PURE__ */ jsxRuntimeExports.jsx(FocusTrap, {
        disableEnforceFocus,
        disableAutoFocus,
        disableRestoreFocus,
        isEnabled: isTopModal,
        open,
        children: /* @__PURE__ */ reactExports.cloneElement(children, childProps)
      })]
    }))
  });
});
function getDividerUtilityClass(slot) {
  return generateUtilityClass("MuiDivider", slot);
}
const dividerClasses = generateUtilityClasses("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
function getDrawerUtilityClass(slot) {
  return generateUtilityClass("MuiDrawer", slot);
}
const drawerClasses = generateUtilityClasses("MuiDrawer", ["root", "docked", "paper", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const _excluded$f = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"];
const useUtilityClasses$a = (ownerState) => {
  const {
    classes,
    disableUnderline
  } = ownerState;
  const slots = {
    root: ["root", !disableUnderline && "underline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getFilledInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
const FilledInputRoot = styled(InputBaseRoot, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [...rootOverridesResolver(props, styles2), !ownerState.disableUnderline && styles2.underline];
  }
})(({
  theme,
  ownerState
}) => {
  var _palette;
  const light = theme.palette.mode === "light";
  const bottomLineColor = light ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  const backgroundColor = light ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)";
  const hoverBackground = light ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)";
  const disabledBackground = light ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return _extends({
    position: "relative",
    backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor,
    borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
    borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
    transition: theme.transitions.create("background-color", {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.hoverBg : hoverBackground,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor
      }
    },
    ["&.".concat(filledInputClasses.focused)]: {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor
    },
    ["&.".concat(filledInputClasses.disabled)]: {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.disabledBg : disabledBackground
    }
  }, !ownerState.disableUnderline && {
    "&::after": {
      borderBottom: "2px solid ".concat((_palette = (theme.vars || theme).palette[ownerState.color || "primary"]) == null ? void 0 : _palette.main),
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    ["&.".concat(filledInputClasses.focused, ":after")]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    ["&.".concat(filledInputClasses.error)]: {
      "&::before, &::after": {
        borderBottomColor: (theme.vars || theme).palette.error.main
      }
    },
    "&::before": {
      borderBottom: "1px solid ".concat(theme.vars ? "rgba(".concat(theme.vars.palette.common.onBackgroundChannel, " / ").concat(theme.vars.opacity.inputUnderline, ")") : bottomLineColor),
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: theme.transitions.create("border-bottom-color", {
        duration: theme.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    ["&:hover:not(.".concat(filledInputClasses.disabled, ", .").concat(filledInputClasses.error, "):before")]: {
      borderBottom: "1px solid ".concat((theme.vars || theme).palette.text.primary)
    },
    ["&.".concat(filledInputClasses.disabled, ":before")]: {
      borderBottomStyle: "dotted"
    }
  }, ownerState.startAdornment && {
    paddingLeft: 12
  }, ownerState.endAdornment && {
    paddingRight: 12
  }, ownerState.multiline && _extends({
    padding: "25px 12px 8px"
  }, ownerState.size === "small" && {
    paddingTop: 21,
    paddingBottom: 4
  }, ownerState.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17
  }, ownerState.hiddenLabel && ownerState.size === "small" && {
    paddingTop: 8,
    paddingBottom: 9
  }));
});
const FilledInputInput = styled(InputBaseComponent, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})(({
  theme,
  ownerState
}) => _extends({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12
}, !theme.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: theme.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: theme.palette.mode === "light" ? null : "#fff",
    caretColor: theme.palette.mode === "light" ? null : "#fff",
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  }
}, theme.vars && {
  "&:-webkit-autofill": {
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  },
  [theme.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, ownerState.size === "small" && {
  paddingTop: 21,
  paddingBottom: 4
}, ownerState.hiddenLabel && {
  paddingTop: 16,
  paddingBottom: 17
}, ownerState.startAdornment && {
  paddingLeft: 0
}, ownerState.endAdornment && {
  paddingRight: 0
}, ownerState.hiddenLabel && ownerState.size === "small" && {
  paddingTop: 8,
  paddingBottom: 9
}, ownerState.multiline && {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
}));
const FilledInput = /* @__PURE__ */ reactExports.forwardRef(function FilledInput2(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$input;
  const props = useDefaultProps({
    props: inProps,
    name: "MuiFilledInput"
  });
  const {
    components = {},
    componentsProps: componentsPropsProp,
    fullWidth = false,
    // declare here to prevent spreading to DOM
    inputComponent = "input",
    multiline = false,
    slotProps,
    slots = {},
    type = "text"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$f);
  const ownerState = _extends({}, props, {
    fullWidth,
    inputComponent,
    multiline,
    type
  });
  const classes = useUtilityClasses$a(props);
  const filledInputComponentsProps = {
    root: {
      ownerState
    },
    input: {
      ownerState
    }
  };
  const componentsProps = (slotProps != null ? slotProps : componentsPropsProp) ? deepmerge$1(filledInputComponentsProps, slotProps != null ? slotProps : componentsPropsProp) : filledInputComponentsProps;
  const RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : FilledInputRoot;
  const InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : FilledInputInput;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(InputBase, _extends({
    slots: {
      root: RootSlot,
      input: InputSlot
    },
    componentsProps,
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type
  }, other, {
    classes
  }));
});
FilledInput.muiName = "Input";
function getFormControlUtilityClasses(slot) {
  return generateUtilityClass("MuiFormControl", slot);
}
const formControlClasses = generateUtilityClasses("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const _excluded$e = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"];
const useUtilityClasses$9 = (ownerState) => {
  const {
    classes,
    margin,
    fullWidth
  } = ownerState;
  const slots = {
    root: ["root", margin !== "none" && "margin".concat(capitalize$1(margin)), fullWidth && "fullWidth"]
  };
  return composeClasses(slots, getFormControlUtilityClasses, classes);
};
const FormControlRoot = styled("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState
  }, styles2) => {
    return _extends({}, styles2.root, styles2["margin".concat(capitalize$1(ownerState.margin))], ownerState.fullWidth && styles2.fullWidth);
  }
})(({
  ownerState
}) => _extends({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top"
}, ownerState.margin === "normal" && {
  marginTop: 16,
  marginBottom: 8
}, ownerState.margin === "dense" && {
  marginTop: 8,
  marginBottom: 4
}, ownerState.fullWidth && {
  width: "100%"
}));
const FormControl = /* @__PURE__ */ reactExports.forwardRef(function FormControl2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiFormControl"
  });
  const {
    children,
    className,
    color = "primary",
    component = "div",
    disabled = false,
    error: error2 = false,
    focused: visuallyFocused,
    fullWidth = false,
    hiddenLabel = false,
    margin = "none",
    required = false,
    size = "medium",
    variant = "outlined"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$e);
  const ownerState = _extends({}, props, {
    color,
    component,
    disabled,
    error: error2,
    fullWidth,
    hiddenLabel,
    margin,
    required,
    size,
    variant
  });
  const classes = useUtilityClasses$9(ownerState);
  const [adornedStart, setAdornedStart] = reactExports.useState(() => {
    let initialAdornedStart = false;
    if (children) {
      reactExports.Children.forEach(children, (child) => {
        if (!isMuiElement(child, ["Input", "Select"])) {
          return;
        }
        const input = isMuiElement(child, ["Select"]) ? child.props.input : child;
        if (input && isAdornedStart(input.props)) {
          initialAdornedStart = true;
        }
      });
    }
    return initialAdornedStart;
  });
  const [filled, setFilled] = reactExports.useState(() => {
    let initialFilled = false;
    if (children) {
      reactExports.Children.forEach(children, (child) => {
        if (!isMuiElement(child, ["Input", "Select"])) {
          return;
        }
        if (isFilled(child.props, true) || isFilled(child.props.inputProps, true)) {
          initialFilled = true;
        }
      });
    }
    return initialFilled;
  });
  const [focusedState, setFocused] = reactExports.useState(false);
  if (disabled && focusedState) {
    setFocused(false);
  }
  const focused = visuallyFocused !== void 0 && !disabled ? visuallyFocused : focusedState;
  let registerEffect;
  const childContext = reactExports.useMemo(() => {
    return {
      adornedStart,
      setAdornedStart,
      color,
      disabled,
      error: error2,
      filled,
      focused,
      fullWidth,
      hiddenLabel,
      size,
      onBlur: () => {
        setFocused(false);
      },
      onEmpty: () => {
        setFilled(false);
      },
      onFilled: () => {
        setFilled(true);
      },
      onFocus: () => {
        setFocused(true);
      },
      registerEffect,
      required,
      variant
    };
  }, [adornedStart, color, disabled, error2, filled, focused, fullWidth, hiddenLabel, registerEffect, required, size, variant]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FormControlContext.Provider, {
    value: childContext,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormControlRoot, _extends({
      as: component,
      ownerState,
      className: clsx(classes.root, className),
      ref
    }, other, {
      children
    }))
  });
});
const Stack = createStack({
  createStyledComponent: styled("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (props, styles2) => styles2.root
  }),
  useThemeProps: (inProps) => useDefaultProps({
    props: inProps,
    name: "MuiStack"
  })
});
const _excluded$d = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function getScale(value) {
  return "scale(".concat(value, ", ").concat(value ** 2, ")");
}
const styles$2 = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
};
const isWebKit154 = typeof navigator !== "undefined" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent);
const Grow = /* @__PURE__ */ reactExports.forwardRef(function Grow2(props, ref) {
  const {
    addEndListener,
    appear = true,
    children,
    easing,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style: style2,
    timeout = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$d);
  const timer = useTimeout();
  const autoTimeout = reactExports.useRef();
  const theme = useTheme();
  const nodeRef = reactExports.useRef(null);
  const handleRef = useForkRef(nodeRef, children.ref, ref);
  const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
    if (callback) {
      const node2 = nodeRef.current;
      if (maybeIsAppearing === void 0) {
        callback(node2);
      } else {
        callback(node2, maybeIsAppearing);
      }
    }
  };
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node2, isAppearing) => {
    reflow(node2);
    const {
      duration: transitionDuration,
      delay,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style: style2,
      timeout,
      easing
    }, {
      mode: "enter"
    });
    let duration;
    if (timeout === "auto") {
      duration = theme.transitions.getAutoHeightDuration(node2.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }
    node2.style.transition = [theme.transitions.create("opacity", {
      duration,
      delay
    }), theme.transitions.create("transform", {
      duration: isWebKit154 ? duration : duration * 0.666,
      delay,
      easing: transitionTimingFunction
    })].join(",");
    if (onEnter) {
      onEnter(node2, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback((node2) => {
    const {
      duration: transitionDuration,
      delay,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style: style2,
      timeout,
      easing
    }, {
      mode: "exit"
    });
    let duration;
    if (timeout === "auto") {
      duration = theme.transitions.getAutoHeightDuration(node2.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }
    node2.style.transition = [theme.transitions.create("opacity", {
      duration,
      delay
    }), theme.transitions.create("transform", {
      duration: isWebKit154 ? duration : duration * 0.666,
      delay: isWebKit154 ? delay : delay || duration * 0.333,
      easing: transitionTimingFunction
    })].join(",");
    node2.style.opacity = 0;
    node2.style.transform = getScale(0.75);
    if (onExit) {
      onExit(node2);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleAddEndListener = (next2) => {
    if (timeout === "auto") {
      timer.start(autoTimeout.current || 0, next2);
    }
    if (addEndListener) {
      addEndListener(nodeRef.current, next2);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionComponent, _extends({
    appear,
    in: inProp,
    nodeRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout: timeout === "auto" ? null : timeout
  }, other, {
    children: (state, childProps) => {
      return /* @__PURE__ */ reactExports.cloneElement(children, _extends({
        style: _extends({
          opacity: 0,
          transform: getScale(0.75),
          visibility: state === "exited" && !inProp ? "hidden" : void 0
        }, styles$2[state], style2, children.props.style),
        ref: handleRef
      }, childProps));
    }
  }));
});
Grow.muiSupportAuto = true;
const _excluded$c = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"];
const useUtilityClasses$8 = (ownerState) => {
  const {
    classes,
    disableUnderline
  } = ownerState;
  const slots = {
    root: ["root", !disableUnderline && "underline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
const InputRoot = styled(InputBaseRoot, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [...rootOverridesResolver(props, styles2), !ownerState.disableUnderline && styles2.underline];
  }
})(({
  theme,
  ownerState
}) => {
  const light = theme.palette.mode === "light";
  let bottomLineColor = light ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  if (theme.vars) {
    bottomLineColor = "rgba(".concat(theme.vars.palette.common.onBackgroundChannel, " / ").concat(theme.vars.opacity.inputUnderline, ")");
  }
  return _extends({
    position: "relative"
  }, ownerState.formControl && {
    "label + &": {
      marginTop: 16
    }
  }, !ownerState.disableUnderline && {
    "&::after": {
      borderBottom: "2px solid ".concat((theme.vars || theme).palette[ownerState.color].main),
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    ["&.".concat(inputClasses.focused, ":after")]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    ["&.".concat(inputClasses.error)]: {
      "&::before, &::after": {
        borderBottomColor: (theme.vars || theme).palette.error.main
      }
    },
    "&::before": {
      borderBottom: "1px solid ".concat(bottomLineColor),
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: theme.transitions.create("border-bottom-color", {
        duration: theme.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    ["&:hover:not(.".concat(inputClasses.disabled, ", .").concat(inputClasses.error, "):before")]: {
      borderBottom: "2px solid ".concat((theme.vars || theme).palette.text.primary),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: "1px solid ".concat(bottomLineColor)
      }
    },
    ["&.".concat(inputClasses.disabled, ":before")]: {
      borderBottomStyle: "dotted"
    }
  });
});
const InputInput = styled(InputBaseComponent, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})({});
const Input = /* @__PURE__ */ reactExports.forwardRef(function Input2(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$input;
  const props = useDefaultProps({
    props: inProps,
    name: "MuiInput"
  });
  const {
    disableUnderline,
    components = {},
    componentsProps: componentsPropsProp,
    fullWidth = false,
    inputComponent = "input",
    multiline = false,
    slotProps,
    slots = {},
    type = "text"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$c);
  const classes = useUtilityClasses$8(props);
  const ownerState = {
    disableUnderline
  };
  const inputComponentsProps = {
    root: {
      ownerState
    }
  };
  const componentsProps = (slotProps != null ? slotProps : componentsPropsProp) ? deepmerge$1(slotProps != null ? slotProps : componentsPropsProp, inputComponentsProps) : inputComponentsProps;
  const RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : InputRoot;
  const InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : InputInput;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(InputBase, _extends({
    slots: {
      root: RootSlot,
      input: InputSlot
    },
    slotProps: componentsProps,
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type
  }, other, {
    classes
  }));
});
Input.muiName = "Input";
const ListContext = /* @__PURE__ */ reactExports.createContext({});
function getListUtilityClass(slot) {
  return generateUtilityClass("MuiList", slot);
}
const listClasses = generateUtilityClasses("MuiList", ["root", "padding", "dense", "subheader"]);
const _excluded$b = ["children", "className", "component", "dense", "disablePadding", "subheader"];
const useUtilityClasses$7 = (ownerState) => {
  const {
    classes,
    disablePadding,
    dense,
    subheader
  } = ownerState;
  const slots = {
    root: ["root", !disablePadding && "padding", dense && "dense", subheader && "subheader"]
  };
  return composeClasses(slots, getListUtilityClass, classes);
};
const ListRoot = styled("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, !ownerState.disablePadding && styles2.padding, ownerState.dense && styles2.dense, ownerState.subheader && styles2.subheader];
  }
})(({
  ownerState
}) => _extends({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !ownerState.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, ownerState.subheader && {
  paddingTop: 0
}));
const List = /* @__PURE__ */ reactExports.forwardRef(function List2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiList"
  });
  const {
    children,
    className,
    component = "ul",
    dense = false,
    disablePadding = false,
    subheader
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$b);
  const context = reactExports.useMemo(() => ({
    dense
  }), [dense]);
  const ownerState = _extends({}, props, {
    component,
    dense,
    disablePadding
  });
  const classes = useUtilityClasses$7(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ListContext.Provider, {
    value: context,
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ListRoot, _extends({
      as: component,
      className: clsx(classes.root, className),
      ref,
      ownerState
    }, other, {
      children: [subheader, children]
    }))
  });
});
function getListItemIconUtilityClass(slot) {
  return generateUtilityClass("MuiListItemIcon", slot);
}
const listItemIconClasses = generateUtilityClasses("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
function getListItemTextUtilityClass(slot) {
  return generateUtilityClass("MuiListItemText", slot);
}
const listItemTextClasses = generateUtilityClasses("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
const _excluded$a = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function nextItem(list, item, disableListWrap) {
  if (list === item) {
    return list.firstChild;
  }
  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }
  return disableListWrap ? null : list.firstChild;
}
function previousItem(list, item, disableListWrap) {
  if (list === item) {
    return disableListWrap ? list.firstChild : list.lastChild;
  }
  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }
  return disableListWrap ? null : list.lastChild;
}
function textCriteriaMatches(nextFocus, textCriteria) {
  if (textCriteria === void 0) {
    return true;
  }
  let text = nextFocus.innerText;
  if (text === void 0) {
    text = nextFocus.textContent;
  }
  text = text.trim().toLowerCase();
  if (text.length === 0) {
    return false;
  }
  if (textCriteria.repeating) {
    return text[0] === textCriteria.keys[0];
  }
  return text.indexOf(textCriteria.keys.join("")) === 0;
}
function moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, traversalFunction, textCriteria) {
  let wrappedOnce = false;
  let nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);
  while (nextFocus) {
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return false;
      }
      wrappedOnce = true;
    }
    const nextFocusDisabled = disabledItemsFocusable ? false : nextFocus.disabled || nextFocus.getAttribute("aria-disabled") === "true";
    if (!nextFocus.hasAttribute("tabindex") || !textCriteriaMatches(nextFocus, textCriteria) || nextFocusDisabled) {
      nextFocus = traversalFunction(list, nextFocus, disableListWrap);
    } else {
      nextFocus.focus();
      return true;
    }
  }
  return false;
}
const MenuList = /* @__PURE__ */ reactExports.forwardRef(function MenuList2(props, ref) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions,
    autoFocus = false,
    autoFocusItem = false,
    children,
    className,
    disabledItemsFocusable = false,
    disableListWrap = false,
    onKeyDown,
    variant = "selectedMenu"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$a);
  const listRef = reactExports.useRef(null);
  const textCriteriaRef = reactExports.useRef({
    keys: [],
    repeating: true,
    previousKeyMatched: true,
    lastTime: null
  });
  useEnhancedEffect(() => {
    if (autoFocus) {
      listRef.current.focus();
    }
  }, [autoFocus]);
  reactExports.useImperativeHandle(actions, () => ({
    adjustStyleForScrollbar: (containerElement, {
      direction
    }) => {
      const noExplicitWidth = !listRef.current.style.width;
      if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
        const scrollbarSize = "".concat(getScrollbarSize(ownerDocument(containerElement)), "px");
        listRef.current.style[direction === "rtl" ? "paddingLeft" : "paddingRight"] = scrollbarSize;
        listRef.current.style.width = "calc(100% + ".concat(scrollbarSize, ")");
      }
      return listRef.current;
    }
  }), []);
  const handleKeyDown2 = (event) => {
    const list = listRef.current;
    const key = event.key;
    const currentFocus = ownerDocument(list).activeElement;
    if (key === "ArrowDown") {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === "ArrowUp") {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key === "Home") {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === "End") {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key.length === 1) {
      const criteria = textCriteriaRef.current;
      const lowerKey = key.toLowerCase();
      const currTime = performance.now();
      if (criteria.keys.length > 0) {
        if (currTime - criteria.lastTime > 500) {
          criteria.keys = [];
          criteria.repeating = true;
          criteria.previousKeyMatched = true;
        } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
          criteria.repeating = false;
        }
      }
      criteria.lastTime = currTime;
      criteria.keys.push(lowerKey);
      const keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);
      if (criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus(list, currentFocus, false, disabledItemsFocusable, nextItem, criteria))) {
        event.preventDefault();
      } else {
        criteria.previousKeyMatched = false;
      }
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };
  const handleRef = useForkRef(listRef, ref);
  let activeItemIndex = -1;
  reactExports.Children.forEach(children, (child, index) => {
    if (!/* @__PURE__ */ reactExports.isValidElement(child)) {
      if (activeItemIndex === index) {
        activeItemIndex += 1;
        if (activeItemIndex >= children.length) {
          activeItemIndex = -1;
        }
      }
      return;
    }
    if (!child.props.disabled) {
      if (variant === "selectedMenu" && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
    if (activeItemIndex === index && (child.props.disabled || child.props.muiSkipListHighlight || child.type.muiSkipListHighlight)) {
      activeItemIndex += 1;
      if (activeItemIndex >= children.length) {
        activeItemIndex = -1;
      }
    }
  });
  const items = reactExports.Children.map(children, (child, index) => {
    if (index === activeItemIndex) {
      const newChildProps = {};
      if (autoFocusItem) {
        newChildProps.autoFocus = true;
      }
      if (child.props.tabIndex === void 0 && variant === "selectedMenu") {
        newChildProps.tabIndex = 0;
      }
      return /* @__PURE__ */ reactExports.cloneElement(child, newChildProps);
    }
    return child;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(List, _extends({
    role: "menu",
    ref: handleRef,
    className,
    onKeyDown: handleKeyDown2,
    tabIndex: autoFocus ? 0 : -1
  }, other, {
    children: items
  }));
});
function getPopoverUtilityClass(slot) {
  return generateUtilityClass("MuiPopover", slot);
}
generateUtilityClasses("MuiPopover", ["root", "paper"]);
const _excluded$9 = ["onEntering"], _excluded2$2 = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], _excluded3 = ["slotProps"];
function getOffsetTop(rect, vertical) {
  let offset = 0;
  if (typeof vertical === "number") {
    offset = vertical;
  } else if (vertical === "center") {
    offset = rect.height / 2;
  } else if (vertical === "bottom") {
    offset = rect.height;
  }
  return offset;
}
function getOffsetLeft(rect, horizontal) {
  let offset = 0;
  if (typeof horizontal === "number") {
    offset = horizontal;
  } else if (horizontal === "center") {
    offset = rect.width / 2;
  } else if (horizontal === "right") {
    offset = rect.width;
  }
  return offset;
}
function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical].map((n2) => typeof n2 === "number" ? "".concat(n2, "px") : n2).join(" ");
}
function resolveAnchorEl(anchorEl) {
  return typeof anchorEl === "function" ? anchorEl() : anchorEl;
}
const useUtilityClasses$6 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    paper: ["paper"]
  };
  return composeClasses(slots, getPopoverUtilityClass, classes);
};
const PopoverRoot = styled(Modal, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})({});
const PopoverPaper = styled(Paper, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (props, styles2) => styles2.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
});
const Popover = /* @__PURE__ */ reactExports.forwardRef(function Popover2(inProps, ref) {
  var _slotProps$paper, _slots$root, _slots$paper;
  const props = useDefaultProps({
    props: inProps,
    name: "MuiPopover"
  });
  const {
    action: action2,
    anchorEl,
    anchorOrigin = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition,
    anchorReference = "anchorEl",
    children,
    className,
    container: containerProp,
    elevation = 8,
    marginThreshold = 16,
    open,
    PaperProps: PaperPropsProp = {},
    slots,
    slotProps,
    transformOrigin = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent = Grow,
    transitionDuration: transitionDurationProp = "auto",
    TransitionProps: {
      onEntering
    } = {},
    disableScrollLock = false
  } = props, TransitionProps = _objectWithoutPropertiesLoose(props.TransitionProps, _excluded$9), other = _objectWithoutPropertiesLoose(props, _excluded2$2);
  const externalPaperSlotProps = (_slotProps$paper = slotProps == null ? void 0 : slotProps.paper) != null ? _slotProps$paper : PaperPropsProp;
  const paperRef = reactExports.useRef();
  const handlePaperRef = useForkRef(paperRef, externalPaperSlotProps.ref);
  const ownerState = _extends({}, props, {
    anchorOrigin,
    anchorReference,
    elevation,
    marginThreshold,
    externalPaperSlotProps,
    transformOrigin,
    TransitionComponent,
    transitionDuration: transitionDurationProp,
    TransitionProps
  });
  const classes = useUtilityClasses$6(ownerState);
  const getAnchorOffset = reactExports.useCallback(() => {
    if (anchorReference === "anchorPosition") {
      return anchorPosition;
    }
    const resolvedAnchorEl = resolveAnchorEl(anchorEl);
    const anchorElement = resolvedAnchorEl && resolvedAnchorEl.nodeType === 1 ? resolvedAnchorEl : ownerDocument(paperRef.current).body;
    const anchorRect = anchorElement.getBoundingClientRect();
    return {
      top: anchorRect.top + getOffsetTop(anchorRect, anchorOrigin.vertical),
      left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
    };
  }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]);
  const getTransformOrigin = reactExports.useCallback((elemRect) => {
    return {
      vertical: getOffsetTop(elemRect, transformOrigin.vertical),
      horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
    };
  }, [transformOrigin.horizontal, transformOrigin.vertical]);
  const getPositioningStyle = reactExports.useCallback((element) => {
    const elemRect = {
      width: element.offsetWidth,
      height: element.offsetHeight
    };
    const elemTransformOrigin = getTransformOrigin(elemRect);
    if (anchorReference === "none") {
      return {
        top: null,
        left: null,
        transformOrigin: getTransformOriginValue(elemTransformOrigin)
      };
    }
    const anchorOffset = getAnchorOffset();
    let top = anchorOffset.top - elemTransformOrigin.vertical;
    let left = anchorOffset.left - elemTransformOrigin.horizontal;
    const bottom = top + elemRect.height;
    const right = left + elemRect.width;
    const containerWindow = ownerWindow(resolveAnchorEl(anchorEl));
    const heightThreshold = containerWindow.innerHeight - marginThreshold;
    const widthThreshold = containerWindow.innerWidth - marginThreshold;
    if (marginThreshold !== null && top < marginThreshold) {
      const diff = top - marginThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    } else if (marginThreshold !== null && bottom > heightThreshold) {
      const diff = bottom - heightThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    }
    if (marginThreshold !== null && left < marginThreshold) {
      const diff = left - marginThreshold;
      left -= diff;
      elemTransformOrigin.horizontal += diff;
    } else if (right > widthThreshold) {
      const diff = right - widthThreshold;
      left -= diff;
      elemTransformOrigin.horizontal += diff;
    }
    return {
      top: "".concat(Math.round(top), "px"),
      left: "".concat(Math.round(left), "px"),
      transformOrigin: getTransformOriginValue(elemTransformOrigin)
    };
  }, [anchorEl, anchorReference, getAnchorOffset, getTransformOrigin, marginThreshold]);
  const [isPositioned, setIsPositioned] = reactExports.useState(open);
  const setPositioningStyles = reactExports.useCallback(() => {
    const element = paperRef.current;
    if (!element) {
      return;
    }
    const positioning = getPositioningStyle(element);
    if (positioning.top !== null) {
      element.style.top = positioning.top;
    }
    if (positioning.left !== null) {
      element.style.left = positioning.left;
    }
    element.style.transformOrigin = positioning.transformOrigin;
    setIsPositioned(true);
  }, [getPositioningStyle]);
  reactExports.useEffect(() => {
    if (disableScrollLock) {
      window.addEventListener("scroll", setPositioningStyles);
    }
    return () => window.removeEventListener("scroll", setPositioningStyles);
  }, [anchorEl, disableScrollLock, setPositioningStyles]);
  const handleEntering = (element, isAppearing) => {
    if (onEntering) {
      onEntering(element, isAppearing);
    }
    setPositioningStyles();
  };
  const handleExited = () => {
    setIsPositioned(false);
  };
  reactExports.useEffect(() => {
    if (open) {
      setPositioningStyles();
    }
  });
  reactExports.useImperativeHandle(action2, () => open ? {
    updatePosition: () => {
      setPositioningStyles();
    }
  } : null, [open, setPositioningStyles]);
  reactExports.useEffect(() => {
    if (!open) {
      return void 0;
    }
    const handleResize = debounce(() => {
      setPositioningStyles();
    });
    const containerWindow = ownerWindow(anchorEl);
    containerWindow.addEventListener("resize", handleResize);
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener("resize", handleResize);
    };
  }, [anchorEl, open, setPositioningStyles]);
  let transitionDuration = transitionDurationProp;
  if (transitionDurationProp === "auto" && !TransitionComponent.muiSupportAuto) {
    transitionDuration = void 0;
  }
  const container = containerProp || (anchorEl ? ownerDocument(resolveAnchorEl(anchorEl)).body : void 0);
  const RootSlot = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : PopoverRoot;
  const PaperSlot = (_slots$paper = slots == null ? void 0 : slots.paper) != null ? _slots$paper : PopoverPaper;
  const paperProps = useSlotProps({
    elementType: PaperSlot,
    externalSlotProps: _extends({}, externalPaperSlotProps, {
      style: isPositioned ? externalPaperSlotProps.style : _extends({}, externalPaperSlotProps.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation,
      ref: handlePaperRef
    },
    ownerState,
    className: clsx(classes.paper, externalPaperSlotProps == null ? void 0 : externalPaperSlotProps.className)
  });
  const _useSlotProps = useSlotProps({
    elementType: RootSlot,
    externalSlotProps: (slotProps == null ? void 0 : slotProps.root) || {},
    externalForwardedProps: other,
    additionalProps: {
      ref,
      slotProps: {
        backdrop: {
          invisible: true
        }
      },
      container,
      open
    },
    ownerState,
    className: clsx(classes.root, className)
  }), {
    slotProps: rootSlotPropsProp
  } = _useSlotProps, rootProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded3);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RootSlot, _extends({}, rootProps, !isHostComponent(RootSlot) && {
    slotProps: rootSlotPropsProp,
    disableScrollLock
  }, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionComponent, _extends({
      appear: true,
      in: open,
      onEntering: handleEntering,
      onExited: handleExited,
      timeout: transitionDuration
    }, TransitionProps, {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaperSlot, _extends({}, paperProps, {
        children
      }))
    }))
  }));
});
function getMenuUtilityClass(slot) {
  return generateUtilityClass("MuiMenu", slot);
}
generateUtilityClasses("MuiMenu", ["root", "paper", "list"]);
const _excluded$8 = ["onEntering"], _excluded2$1 = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"];
const RTL_ORIGIN = {
  vertical: "top",
  horizontal: "right"
};
const LTR_ORIGIN = {
  vertical: "top",
  horizontal: "left"
};
const useUtilityClasses$5 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  };
  return composeClasses(slots, getMenuUtilityClass, classes);
};
const MenuRoot = styled(Popover, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})({});
const MenuPaper = styled(PopoverPaper, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (props, styles2) => styles2.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
});
const MenuMenuList = styled(MenuList, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (props, styles2) => styles2.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
});
const Menu = /* @__PURE__ */ reactExports.forwardRef(function Menu2(inProps, ref) {
  var _slots$paper, _slotProps$paper;
  const props = useDefaultProps({
    props: inProps,
    name: "MuiMenu"
  });
  const {
    autoFocus = true,
    children,
    className,
    disableAutoFocusItem = false,
    MenuListProps = {},
    onClose,
    open,
    PaperProps = {},
    PopoverClasses,
    transitionDuration = "auto",
    TransitionProps: {
      onEntering
    } = {},
    variant = "selectedMenu",
    slots = {},
    slotProps = {}
  } = props, TransitionProps = _objectWithoutPropertiesLoose(props.TransitionProps, _excluded$8), other = _objectWithoutPropertiesLoose(props, _excluded2$1);
  const isRtl = useRtl();
  const ownerState = _extends({}, props, {
    autoFocus,
    disableAutoFocusItem,
    MenuListProps,
    onEntering,
    PaperProps,
    transitionDuration,
    TransitionProps,
    variant
  });
  const classes = useUtilityClasses$5(ownerState);
  const autoFocusItem = autoFocus && !disableAutoFocusItem && open;
  const menuListActionsRef = reactExports.useRef(null);
  const handleEntering = (element, isAppearing) => {
    if (menuListActionsRef.current) {
      menuListActionsRef.current.adjustStyleForScrollbar(element, {
        direction: isRtl ? "rtl" : "ltr"
      });
    }
    if (onEntering) {
      onEntering(element, isAppearing);
    }
  };
  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      if (onClose) {
        onClose(event, "tabKeyDown");
      }
    }
  };
  let activeItemIndex = -1;
  reactExports.Children.map(children, (child, index) => {
    if (!/* @__PURE__ */ reactExports.isValidElement(child)) {
      return;
    }
    if (!child.props.disabled) {
      if (variant === "selectedMenu" && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });
  const PaperSlot = (_slots$paper = slots.paper) != null ? _slots$paper : MenuPaper;
  const paperExternalSlotProps = (_slotProps$paper = slotProps.paper) != null ? _slotProps$paper : PaperProps;
  const rootSlotProps = useSlotProps({
    elementType: slots.root,
    externalSlotProps: slotProps.root,
    ownerState,
    className: [classes.root, className]
  });
  const paperSlotProps = useSlotProps({
    elementType: PaperSlot,
    externalSlotProps: paperExternalSlotProps,
    ownerState,
    className: classes.paper
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MenuRoot, _extends({
    onClose,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: isRtl ? "right" : "left"
    },
    transformOrigin: isRtl ? RTL_ORIGIN : LTR_ORIGIN,
    slots: {
      paper: PaperSlot,
      root: slots.root
    },
    slotProps: {
      root: rootSlotProps,
      paper: paperSlotProps
    },
    open,
    ref,
    transitionDuration,
    TransitionProps: _extends({
      onEntering: handleEntering
    }, TransitionProps),
    ownerState
  }, other, {
    classes: PopoverClasses,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuMenuList, _extends({
      onKeyDown: handleListKeyDown,
      actions: menuListActionsRef,
      autoFocus: autoFocus && (activeItemIndex === -1 || disableAutoFocusItem),
      autoFocusItem,
      variant
    }, MenuListProps, {
      className: clsx(classes.list, MenuListProps.className),
      children
    }))
  }));
});
function getMenuItemUtilityClass(slot) {
  return generateUtilityClass("MuiMenuItem", slot);
}
const menuItemClasses = generateUtilityClasses("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]);
const _excluded$7 = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex", "className"];
const overridesResolver = (props, styles2) => {
  const {
    ownerState
  } = props;
  return [styles2.root, ownerState.dense && styles2.dense, ownerState.divider && styles2.divider, !ownerState.disableGutters && styles2.gutters];
};
const useUtilityClasses$4 = (ownerState) => {
  const {
    disabled,
    dense,
    divider,
    disableGutters,
    selected,
    classes
  } = ownerState;
  const slots = {
    root: ["root", dense && "dense", disabled && "disabled", !disableGutters && "gutters", divider && "divider", selected && "selected"]
  };
  const composedClasses = composeClasses(slots, getMenuItemUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
const MenuItemRoot = styled(ButtonBase, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver
})(({
  theme,
  ownerState
}) => _extends({}, theme.typography.body1, {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: "border-box",
  whiteSpace: "nowrap"
}, !ownerState.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, ownerState.divider && {
  borderBottom: "1px solid ".concat((theme.vars || theme).palette.divider),
  backgroundClip: "padding-box"
}, {
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (theme.vars || theme).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  ["&.".concat(menuItemClasses.selected)]: {
    backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.primary.mainChannel, " / ").concat(theme.vars.palette.action.selectedOpacity, ")") : alpha_1(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    ["&.".concat(menuItemClasses.focusVisible)]: {
      backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.primary.mainChannel, " / calc(").concat(theme.vars.palette.action.selectedOpacity, " + ").concat(theme.vars.palette.action.focusOpacity, "))") : alpha_1(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    }
  },
  ["&.".concat(menuItemClasses.selected, ":hover")]: {
    backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.primary.mainChannel, " / calc(").concat(theme.vars.palette.action.selectedOpacity, " + ").concat(theme.vars.palette.action.hoverOpacity, "))") : alpha_1(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.primary.mainChannel, " / ").concat(theme.vars.palette.action.selectedOpacity, ")") : alpha_1(theme.palette.primary.main, theme.palette.action.selectedOpacity)
    }
  },
  ["&.".concat(menuItemClasses.focusVisible)]: {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  ["&.".concat(menuItemClasses.disabled)]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  },
  ["& + .".concat(dividerClasses.root)]: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  ["& + .".concat(dividerClasses.inset)]: {
    marginLeft: 52
  },
  ["& .".concat(listItemTextClasses.root)]: {
    marginTop: 0,
    marginBottom: 0
  },
  ["& .".concat(listItemTextClasses.inset)]: {
    paddingLeft: 36
  },
  ["& .".concat(listItemIconClasses.root)]: {
    minWidth: 36
  }
}, !ownerState.dense && {
  [theme.breakpoints.up("sm")]: {
    minHeight: "auto"
  }
}, ownerState.dense && _extends({
  minHeight: 32,
  // https://m2.material.io/components/menus#specs > Dense
  paddingTop: 4,
  paddingBottom: 4
}, theme.typography.body2, {
  ["& .".concat(listItemIconClasses.root, " svg")]: {
    fontSize: "1.25rem"
  }
})));
const MenuItem = /* @__PURE__ */ reactExports.forwardRef(function MenuItem2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiMenuItem"
  });
  const {
    autoFocus = false,
    component = "li",
    dense = false,
    divider = false,
    disableGutters = false,
    focusVisibleClassName,
    role = "menuitem",
    tabIndex: tabIndexProp,
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$7);
  const context = reactExports.useContext(ListContext);
  const childContext = reactExports.useMemo(() => ({
    dense: dense || context.dense || false,
    disableGutters
  }), [context.dense, dense, disableGutters]);
  const menuItemRef = reactExports.useRef(null);
  useEnhancedEffect(() => {
    if (autoFocus) {
      if (menuItemRef.current) {
        menuItemRef.current.focus();
      }
    }
  }, [autoFocus]);
  const ownerState = _extends({}, props, {
    dense: childContext.dense,
    divider,
    disableGutters
  });
  const classes = useUtilityClasses$4(props);
  const handleRef = useForkRef(menuItemRef, ref);
  let tabIndex;
  if (!props.disabled) {
    tabIndex = tabIndexProp !== void 0 ? tabIndexProp : -1;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ListContext.Provider, {
    value: childContext,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItemRoot, _extends({
      ref: handleRef,
      role,
      tabIndex,
      component,
      focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
      className: clsx(classes.root, className)
    }, other, {
      ownerState,
      classes
    }))
  });
});
function getNativeSelectUtilityClasses(slot) {
  return generateUtilityClass("MuiNativeSelect", slot);
}
const nativeSelectClasses = generateUtilityClasses("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
const _excluded$6 = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"];
const useUtilityClasses$3 = (ownerState) => {
  const {
    classes,
    variant,
    disabled,
    multiple,
    open,
    error: error2
  } = ownerState;
  const slots = {
    select: ["select", variant, disabled && "disabled", multiple && "multiple", error2 && "error"],
    icon: ["icon", "icon".concat(capitalize$1(variant)), open && "iconOpen", disabled && "disabled"]
  };
  return composeClasses(slots, getNativeSelectUtilityClasses, classes);
};
const nativeSelectSelectStyles = ({
  ownerState,
  theme
}) => _extends({
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  borderRadius: 0,
  // Reset
  cursor: "pointer",
  "&:focus": _extends({}, theme.vars ? {
    backgroundColor: "rgba(".concat(theme.vars.palette.common.onBackgroundChannel, " / 0.05)")
  } : {
    backgroundColor: theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"
  }, {
    borderRadius: 0
    // Reset Chrome style
  }),
  // Remove IE11 arrow
  "&::-ms-expand": {
    display: "none"
  },
  ["&.".concat(nativeSelectClasses.disabled)]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (theme.vars || theme).palette.background.paper
  },
  // Bump specificity to allow extending custom inputs
  "&&&": {
    paddingRight: 24,
    minWidth: 16
    // So it doesn't collapse.
  }
}, ownerState.variant === "filled" && {
  "&&&": {
    paddingRight: 32
  }
}, ownerState.variant === "outlined" && {
  borderRadius: (theme.vars || theme).shape.borderRadius,
  "&:focus": {
    borderRadius: (theme.vars || theme).shape.borderRadius
    // Reset the reset for Chrome style
  },
  "&&&": {
    paddingRight: 32
  }
});
const NativeSelectSelect = styled("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: rootShouldForwardProp,
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.select, styles2[ownerState.variant], ownerState.error && styles2.error, {
      ["&.".concat(nativeSelectClasses.multiple)]: styles2.multiple
    }];
  }
})(nativeSelectSelectStyles);
const nativeSelectIconStyles = ({
  ownerState,
  theme
}) => _extends({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)",
  // Center vertically, height is 1em
  pointerEvents: "none",
  // Don't block pointer events on the select under the icon.
  color: (theme.vars || theme).palette.action.active,
  ["&.".concat(nativeSelectClasses.disabled)]: {
    color: (theme.vars || theme).palette.action.disabled
  }
}, ownerState.open && {
  transform: "rotate(180deg)"
}, ownerState.variant === "filled" && {
  right: 7
}, ownerState.variant === "outlined" && {
  right: 7
});
const NativeSelectIcon = styled("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.icon, ownerState.variant && styles2["icon".concat(capitalize$1(ownerState.variant))], ownerState.open && styles2.iconOpen];
  }
})(nativeSelectIconStyles);
const NativeSelectInput = /* @__PURE__ */ reactExports.forwardRef(function NativeSelectInput2(props, ref) {
  const {
    className,
    disabled,
    error: error2,
    IconComponent,
    inputRef,
    variant = "standard"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$6);
  const ownerState = _extends({}, props, {
    disabled,
    variant,
    error: error2
  });
  const classes = useUtilityClasses$3(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(NativeSelectSelect, _extends({
      ownerState,
      className: clsx(classes.select, className),
      disabled,
      ref: inputRef || ref
    }, other)), props.multiple ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(NativeSelectIcon, {
      as: IconComponent,
      ownerState,
      className: classes.icon
    })]
  });
});
var _span$1;
const _excluded$5 = ["children", "classes", "className", "label", "notched"];
const NotchedOutlineRoot$1 = styled("fieldset", {
  shouldForwardProp: rootShouldForwardProp
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
});
const NotchedOutlineLegend = styled("legend", {
  shouldForwardProp: rootShouldForwardProp
})(({
  ownerState,
  theme
}) => _extends({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden"
}, !ownerState.withLabel && {
  padding: 0,
  lineHeight: "11px",
  // sync with `height` in `legend` styles
  transition: theme.transitions.create("width", {
    duration: 150,
    easing: theme.transitions.easing.easeOut
  })
}, ownerState.withLabel && _extends({
  display: "block",
  // Fix conflict with normalize.css and sanitize.css
  padding: 0,
  height: 11,
  // sync with `lineHeight` in `legend` styles
  fontSize: "0.75em",
  visibility: "hidden",
  maxWidth: 0.01,
  transition: theme.transitions.create("max-width", {
    duration: 50,
    easing: theme.transitions.easing.easeOut
  }),
  whiteSpace: "nowrap",
  "& > span": {
    paddingLeft: 5,
    paddingRight: 5,
    display: "inline-block",
    opacity: 0,
    visibility: "visible"
  }
}, ownerState.notched && {
  maxWidth: "100%",
  transition: theme.transitions.create("max-width", {
    duration: 100,
    easing: theme.transitions.easing.easeOut,
    delay: 50
  })
})));
function NotchedOutline(props) {
  const {
    className,
    label,
    notched
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$5);
  const withLabel = label != null && label !== "";
  const ownerState = _extends({}, props, {
    notched,
    withLabel
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(NotchedOutlineRoot$1, _extends({
    "aria-hidden": true,
    className,
    ownerState
  }, other, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(NotchedOutlineLegend, {
      ownerState,
      children: withLabel ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        children: label
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        _span$1 || (_span$1 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
const _excluded$4 = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"];
const useUtilityClasses$2 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getOutlinedInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
const OutlinedInputRoot = styled(InputBaseRoot, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: rootOverridesResolver
})(({
  theme,
  ownerState
}) => {
  const borderColor = theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return _extends({
    position: "relative",
    borderRadius: (theme.vars || theme).shape.borderRadius,
    ["&:hover .".concat(outlinedInputClasses.notchedOutline)]: {
      borderColor: (theme.vars || theme).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      ["&:hover .".concat(outlinedInputClasses.notchedOutline)]: {
        borderColor: theme.vars ? "rgba(".concat(theme.vars.palette.common.onBackgroundChannel, " / 0.23)") : borderColor
      }
    },
    ["&.".concat(outlinedInputClasses.focused, " .").concat(outlinedInputClasses.notchedOutline)]: {
      borderColor: (theme.vars || theme).palette[ownerState.color].main,
      borderWidth: 2
    },
    ["&.".concat(outlinedInputClasses.error, " .").concat(outlinedInputClasses.notchedOutline)]: {
      borderColor: (theme.vars || theme).palette.error.main
    },
    ["&.".concat(outlinedInputClasses.disabled, " .").concat(outlinedInputClasses.notchedOutline)]: {
      borderColor: (theme.vars || theme).palette.action.disabled
    }
  }, ownerState.startAdornment && {
    paddingLeft: 14
  }, ownerState.endAdornment && {
    paddingRight: 14
  }, ownerState.multiline && _extends({
    padding: "16.5px 14px"
  }, ownerState.size === "small" && {
    padding: "8.5px 14px"
  }));
});
const NotchedOutlineRoot = styled(NotchedOutline, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (props, styles2) => styles2.notchedOutline
})(({
  theme
}) => {
  const borderColor = theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: theme.vars ? "rgba(".concat(theme.vars.palette.common.onBackgroundChannel, " / 0.23)") : borderColor
  };
});
const OutlinedInputInput = styled(InputBaseComponent, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})(({
  theme,
  ownerState
}) => _extends({
  padding: "16.5px 14px"
}, !theme.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: theme.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: theme.palette.mode === "light" ? null : "#fff",
    caretColor: theme.palette.mode === "light" ? null : "#fff",
    borderRadius: "inherit"
  }
}, theme.vars && {
  "&:-webkit-autofill": {
    borderRadius: "inherit"
  },
  [theme.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, ownerState.size === "small" && {
  padding: "8.5px 14px"
}, ownerState.multiline && {
  padding: 0
}, ownerState.startAdornment && {
  paddingLeft: 0
}, ownerState.endAdornment && {
  paddingRight: 0
}));
const OutlinedInput = /* @__PURE__ */ reactExports.forwardRef(function OutlinedInput2(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$input, _React$Fragment;
  const props = useDefaultProps({
    props: inProps,
    name: "MuiOutlinedInput"
  });
  const {
    components = {},
    fullWidth = false,
    inputComponent = "input",
    label,
    multiline = false,
    notched,
    slots = {},
    type = "text"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$4);
  const classes = useUtilityClasses$2(props);
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  });
  const ownerState = _extends({}, props, {
    color: fcs.color || "primary",
    disabled: fcs.disabled,
    error: fcs.error,
    focused: fcs.focused,
    formControl: muiFormControl,
    fullWidth,
    hiddenLabel: fcs.hiddenLabel,
    multiline,
    size: fcs.size,
    type
  });
  const RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : OutlinedInputRoot;
  const InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : OutlinedInputInput;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(InputBase, _extends({
    slots: {
      root: RootSlot,
      input: InputSlot
    },
    renderSuffix: (state) => /* @__PURE__ */ jsxRuntimeExports.jsx(NotchedOutlineRoot, {
      ownerState,
      className: classes.notchedOutline,
      label: label != null && label !== "" && fcs.required ? _React$Fragment || (_React$Fragment = /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
        children: [label, " ", "*"]
      })) : label,
      notched: typeof notched !== "undefined" ? notched : Boolean(state.startAdornment || state.filled || state.focused)
    }),
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type
  }, other, {
    classes: _extends({}, classes, {
      notchedOutline: null
    })
  }));
});
OutlinedInput.muiName = "Input";
function getSelectUtilityClasses(slot) {
  return generateUtilityClass("MuiSelect", slot);
}
const selectClasses = generateUtilityClasses("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var _span;
const _excluded$3 = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"];
const SelectSelect = styled("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [
      // Win specificity over the input base
      {
        ["&.".concat(selectClasses.select)]: styles2.select
      },
      {
        ["&.".concat(selectClasses.select)]: styles2[ownerState.variant]
      },
      {
        ["&.".concat(selectClasses.error)]: styles2.error
      },
      {
        ["&.".concat(selectClasses.multiple)]: styles2.multiple
      }
    ];
  }
})(nativeSelectSelectStyles, {
  // Win specificity over the input base
  ["&.".concat(selectClasses.select)]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
});
const SelectIcon = styled("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.icon, ownerState.variant && styles2["icon".concat(capitalize$1(ownerState.variant))], ownerState.open && styles2.iconOpen];
  }
})(nativeSelectIconStyles);
const SelectNativeInput = styled("input", {
  shouldForwardProp: (prop) => slotShouldForwardProp(prop) && prop !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (props, styles2) => styles2.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function areEqualValues(a2, b2) {
  if (typeof b2 === "object" && b2 !== null) {
    return a2 === b2;
  }
  return String(a2) === String(b2);
}
function isEmpty(display) {
  return display == null || typeof display === "string" && !display.trim();
}
const useUtilityClasses$1 = (ownerState) => {
  const {
    classes,
    variant,
    disabled,
    multiple,
    open,
    error: error2
  } = ownerState;
  const slots = {
    select: ["select", variant, disabled && "disabled", multiple && "multiple", error2 && "error"],
    icon: ["icon", "icon".concat(capitalize$1(variant)), open && "iconOpen", disabled && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return composeClasses(slots, getSelectUtilityClasses, classes);
};
const SelectInput = /* @__PURE__ */ reactExports.forwardRef(function SelectInput2(props, ref) {
  var _MenuProps$slotProps;
  const {
    "aria-describedby": ariaDescribedby,
    "aria-label": ariaLabel,
    autoFocus,
    autoWidth,
    children,
    className,
    defaultOpen,
    defaultValue,
    disabled,
    displayEmpty,
    error: error2 = false,
    IconComponent,
    inputRef: inputRefProp,
    labelId,
    MenuProps = {},
    multiple,
    name,
    onBlur,
    onChange,
    onClose,
    onFocus,
    onOpen,
    open: openProp,
    readOnly,
    renderValue,
    SelectDisplayProps = {},
    tabIndex: tabIndexProp,
    value: valueProp,
    variant = "standard"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$3);
  const [value, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: "Select"
  });
  const [openState, setOpenState] = useControlled({
    controlled: openProp,
    default: defaultOpen,
    name: "Select"
  });
  const inputRef = reactExports.useRef(null);
  const displayRef = reactExports.useRef(null);
  const [displayNode, setDisplayNode] = reactExports.useState(null);
  const {
    current: isOpenControlled
  } = reactExports.useRef(openProp != null);
  const [menuMinWidthState, setMenuMinWidthState] = reactExports.useState();
  const handleRef = useForkRef(ref, inputRefProp);
  const handleDisplayRef = reactExports.useCallback((node2) => {
    displayRef.current = node2;
    if (node2) {
      setDisplayNode(node2);
    }
  }, []);
  const anchorElement = displayNode == null ? void 0 : displayNode.parentNode;
  reactExports.useImperativeHandle(handleRef, () => ({
    focus: () => {
      displayRef.current.focus();
    },
    node: inputRef.current,
    value
  }), [value]);
  reactExports.useEffect(() => {
    if (defaultOpen && openState && displayNode && !isOpenControlled) {
      setMenuMinWidthState(autoWidth ? null : anchorElement.clientWidth);
      displayRef.current.focus();
    }
  }, [displayNode, autoWidth]);
  reactExports.useEffect(() => {
    if (autoFocus) {
      displayRef.current.focus();
    }
  }, [autoFocus]);
  reactExports.useEffect(() => {
    if (!labelId) {
      return void 0;
    }
    const label = ownerDocument(displayRef.current).getElementById(labelId);
    if (label) {
      const handler = () => {
        if (getSelection().isCollapsed) {
          displayRef.current.focus();
        }
      };
      label.addEventListener("click", handler);
      return () => {
        label.removeEventListener("click", handler);
      };
    }
    return void 0;
  }, [labelId]);
  const update = (open2, event) => {
    if (open2) {
      if (onOpen) {
        onOpen(event);
      }
    } else if (onClose) {
      onClose(event);
    }
    if (!isOpenControlled) {
      setMenuMinWidthState(autoWidth ? null : anchorElement.clientWidth);
      setOpenState(open2);
    }
  };
  const handleMouseDown = (event) => {
    if (event.button !== 0) {
      return;
    }
    event.preventDefault();
    displayRef.current.focus();
    update(true, event);
  };
  const handleClose = (event) => {
    update(false, event);
  };
  const childrenArray = reactExports.Children.toArray(children);
  const handleChange = (event) => {
    const child = childrenArray.find((childItem) => childItem.props.value === event.target.value);
    if (child === void 0) {
      return;
    }
    setValueState(child.props.value);
    if (onChange) {
      onChange(event, child);
    }
  };
  const handleItemClick = (child) => (event) => {
    let newValue;
    if (!event.currentTarget.hasAttribute("tabindex")) {
      return;
    }
    if (multiple) {
      newValue = Array.isArray(value) ? value.slice() : [];
      const itemIndex = value.indexOf(child.props.value);
      if (itemIndex === -1) {
        newValue.push(child.props.value);
      } else {
        newValue.splice(itemIndex, 1);
      }
    } else {
      newValue = child.props.value;
    }
    if (child.props.onClick) {
      child.props.onClick(event);
    }
    if (value !== newValue) {
      setValueState(newValue);
      if (onChange) {
        const nativeEvent = event.nativeEvent || event;
        const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
        Object.defineProperty(clonedEvent, "target", {
          writable: true,
          value: {
            value: newValue,
            name
          }
        });
        onChange(clonedEvent, child);
      }
    }
    if (!multiple) {
      update(false, event);
    }
  };
  const handleKeyDown2 = (event) => {
    if (!readOnly) {
      const validKeys = [
        " ",
        "ArrowUp",
        "ArrowDown",
        // The native select doesn't respond to enter on macOS, but it's recommended by
        // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
        "Enter"
      ];
      if (validKeys.indexOf(event.key) !== -1) {
        event.preventDefault();
        update(true, event);
      }
    }
  };
  const open = displayNode !== null && openState;
  const handleBlur = (event) => {
    if (!open && onBlur) {
      Object.defineProperty(event, "target", {
        writable: true,
        value: {
          value,
          name
        }
      });
      onBlur(event);
    }
  };
  delete other["aria-invalid"];
  let display;
  let displaySingle;
  const displayMultiple = [];
  let computeDisplay = false;
  if (isFilled({
    value
  }) || displayEmpty) {
    if (renderValue) {
      display = renderValue(value);
    } else {
      computeDisplay = true;
    }
  }
  const items = childrenArray.map((child) => {
    if (!/* @__PURE__ */ reactExports.isValidElement(child)) {
      return null;
    }
    let selected;
    if (multiple) {
      if (!Array.isArray(value)) {
        throw new Error(formatMuiErrorMessage(2));
      }
      selected = value.some((v2) => areEqualValues(v2, child.props.value));
      if (selected && computeDisplay) {
        displayMultiple.push(child.props.children);
      }
    } else {
      selected = areEqualValues(value, child.props.value);
      if (selected && computeDisplay) {
        displaySingle = child.props.children;
      }
    }
    return /* @__PURE__ */ reactExports.cloneElement(child, {
      "aria-selected": selected ? "true" : "false",
      onClick: handleItemClick(child),
      onKeyUp: (event) => {
        if (event.key === " ") {
          event.preventDefault();
        }
        if (child.props.onKeyUp) {
          child.props.onKeyUp(event);
        }
      },
      role: "option",
      selected,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": child.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  if (computeDisplay) {
    if (multiple) {
      if (displayMultiple.length === 0) {
        display = null;
      } else {
        display = displayMultiple.reduce((output, child, index) => {
          output.push(child);
          if (index < displayMultiple.length - 1) {
            output.push(", ");
          }
          return output;
        }, []);
      }
    } else {
      display = displaySingle;
    }
  }
  let menuMinWidth = menuMinWidthState;
  if (!autoWidth && isOpenControlled && displayNode) {
    menuMinWidth = anchorElement.clientWidth;
  }
  let tabIndex;
  if (typeof tabIndexProp !== "undefined") {
    tabIndex = tabIndexProp;
  } else {
    tabIndex = disabled ? null : 0;
  }
  const buttonId = SelectDisplayProps.id || (name ? "mui-component-select-".concat(name) : void 0);
  const ownerState = _extends({}, props, {
    variant,
    value,
    open,
    error: error2
  });
  const classes = useUtilityClasses$1(ownerState);
  const paperProps = _extends({}, MenuProps.PaperProps, (_MenuProps$slotProps = MenuProps.slotProps) == null ? void 0 : _MenuProps$slotProps.paper);
  const listboxId = useId();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(SelectSelect, _extends({
      ref: handleDisplayRef,
      tabIndex,
      role: "combobox",
      "aria-controls": listboxId,
      "aria-disabled": disabled ? "true" : void 0,
      "aria-expanded": open ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": ariaLabel,
      "aria-labelledby": [labelId, buttonId].filter(Boolean).join(" ") || void 0,
      "aria-describedby": ariaDescribedby,
      onKeyDown: handleKeyDown2,
      onMouseDown: disabled || readOnly ? null : handleMouseDown,
      onBlur: handleBlur,
      onFocus
    }, SelectDisplayProps, {
      ownerState,
      className: clsx(SelectDisplayProps.className, classes.select, className),
      id: buttonId,
      children: isEmpty(display) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        _span || (_span = /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : display
    })), /* @__PURE__ */ jsxRuntimeExports.jsx(SelectNativeInput, _extends({
      "aria-invalid": error2,
      value: Array.isArray(value) ? value.join(",") : value,
      name,
      ref: inputRef,
      "aria-hidden": true,
      onChange: handleChange,
      tabIndex: -1,
      disabled,
      className: classes.nativeInput,
      autoFocus,
      ownerState
    }, other)), /* @__PURE__ */ jsxRuntimeExports.jsx(SelectIcon, {
      as: IconComponent,
      className: classes.icon,
      ownerState
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, _extends({
      id: "menu-".concat(name || ""),
      anchorEl: anchorElement,
      open,
      onClose: handleClose,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, MenuProps, {
      MenuListProps: _extends({
        "aria-labelledby": labelId,
        role: "listbox",
        "aria-multiselectable": multiple ? "true" : void 0,
        disableListWrap: true,
        id: listboxId
      }, MenuProps.MenuListProps),
      slotProps: _extends({}, MenuProps.slotProps, {
        paper: _extends({}, paperProps, {
          style: _extends({
            minWidth: menuMinWidth
          }, paperProps != null ? paperProps.style : null)
        })
      }),
      children: items
    }))]
  });
});
const _excluded$2 = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], _excluded2 = ["root"];
const useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  return classes;
};
const styledRootConfig = {
  name: "MuiSelect",
  overridesResolver: (props, styles2) => styles2.root,
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) && prop !== "variant",
  slot: "Root"
};
const StyledInput = styled(Input, styledRootConfig)("");
const StyledOutlinedInput = styled(OutlinedInput, styledRootConfig)("");
const StyledFilledInput = styled(FilledInput, styledRootConfig)("");
const Select = /* @__PURE__ */ reactExports.forwardRef(function Select2(inProps, ref) {
  const props = useDefaultProps({
    name: "MuiSelect",
    props: inProps
  });
  const {
    autoWidth = false,
    children,
    classes: classesProp = {},
    className,
    defaultOpen = false,
    displayEmpty = false,
    IconComponent = ArrowDropDownIcon,
    id,
    input,
    inputProps,
    label,
    labelId,
    MenuProps,
    multiple = false,
    native = false,
    onClose,
    onOpen,
    open,
    renderValue,
    SelectDisplayProps,
    variant: variantProp = "outlined"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$2);
  const inputComponent = native ? NativeSelectInput : SelectInput;
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["variant", "error"]
  });
  const variant = fcs.variant || variantProp;
  const ownerState = _extends({}, props, {
    variant,
    classes: classesProp
  });
  const classes = useUtilityClasses(ownerState);
  const restOfClasses = _objectWithoutPropertiesLoose(classes, _excluded2);
  const InputComponent = input || {
    standard: /* @__PURE__ */ jsxRuntimeExports.jsx(StyledInput, {
      ownerState
    }),
    outlined: /* @__PURE__ */ jsxRuntimeExports.jsx(StyledOutlinedInput, {
      label,
      ownerState
    }),
    filled: /* @__PURE__ */ jsxRuntimeExports.jsx(StyledFilledInput, {
      ownerState
    })
  }[variant];
  const inputComponentRef = useForkRef(ref, InputComponent.ref);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, {
    children: /* @__PURE__ */ reactExports.cloneElement(InputComponent, _extends({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent,
      inputProps: _extends({
        children,
        error: fcs.error,
        IconComponent,
        variant,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple
      }, native ? {
        id
      } : {
        autoWidth,
        defaultOpen,
        displayEmpty,
        labelId,
        MenuProps,
        onClose,
        onOpen,
        open,
        renderValue,
        SelectDisplayProps: _extends({
          id
        }, SelectDisplayProps)
      }, inputProps, {
        classes: inputProps ? deepmerge$1(restOfClasses, inputProps.classes) : restOfClasses
      }, input ? input.props.inputProps : {})
    }, (multiple && native || displayEmpty) && variant === "outlined" ? {
      notched: true
    } : {}, {
      ref: inputComponentRef,
      className: clsx(InputComponent.props.className, className, classes.root)
    }, !input && {
      variant
    }, other))
  });
});
Select.muiName = "Select";
var shim = { exports: {} };
var useSyncExternalStoreShim_production_min = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e = reactExports;
function h$2(a2, b2) {
  return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var k$1 = "function" === typeof Object.is ? Object.is : h$2, l$1 = e.useState, m$1 = e.useEffect, n$2 = e.useLayoutEffect, p$2 = e.useDebugValue;
function q$2(a2, b2) {
  var d2 = b2(), f2 = l$1({ inst: { value: d2, getSnapshot: b2 } }), c2 = f2[0].inst, g2 = f2[1];
  n$2(function() {
    c2.value = d2;
    c2.getSnapshot = b2;
    r$2(c2) && g2({ inst: c2 });
  }, [a2, d2, b2]);
  m$1(function() {
    r$2(c2) && g2({ inst: c2 });
    return a2(function() {
      r$2(c2) && g2({ inst: c2 });
    });
  }, [a2]);
  p$2(d2);
  return d2;
}
function r$2(a2) {
  var b2 = a2.getSnapshot;
  a2 = a2.value;
  try {
    var d2 = b2();
    return !k$1(a2, d2);
  } catch (f2) {
    return true;
  }
}
function t$2(a2, b2) {
  return b2();
}
var u$2 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? t$2 : q$2;
useSyncExternalStoreShim_production_min.useSyncExternalStore = void 0 !== e.useSyncExternalStore ? e.useSyncExternalStore : u$2;
{
  shim.exports = useSyncExternalStoreShim_production_min;
}
var shimExports = shim.exports;
var withSelector = { exports: {} };
var withSelector_production_min = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h$1 = reactExports, n$1 = shimExports;
function p$1(a2, b2) {
  return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var q$1 = "function" === typeof Object.is ? Object.is : p$1, r$1 = n$1.useSyncExternalStore, t$1 = h$1.useRef, u$1 = h$1.useEffect, v$1 = h$1.useMemo, w$1 = h$1.useDebugValue;
withSelector_production_min.useSyncExternalStoreWithSelector = function(a2, b2, e2, l2, g2) {
  var c2 = t$1(null);
  if (null === c2.current) {
    var f2 = { hasValue: false, value: null };
    c2.current = f2;
  } else f2 = c2.current;
  c2 = v$1(function() {
    function a3(a4) {
      if (!c3) {
        c3 = true;
        d3 = a4;
        a4 = l2(a4);
        if (void 0 !== g2 && f2.hasValue) {
          var b3 = f2.value;
          if (g2(b3, a4)) return k2 = b3;
        }
        return k2 = a4;
      }
      b3 = k2;
      if (q$1(d3, a4)) return b3;
      var e3 = l2(a4);
      if (void 0 !== g2 && g2(b3, e3)) return b3;
      d3 = a4;
      return k2 = e3;
    }
    var c3 = false, d3, k2, m2 = void 0 === e2 ? null : e2;
    return [function() {
      return a3(b2());
    }, null === m2 ? void 0 : function() {
      return a3(m2());
    }];
  }, [b2, e2, l2, g2]);
  var d2 = r$1(a2, c2[0], c2[1]);
  u$1(function() {
    f2.hasValue = true;
    f2.value = d2;
  }, [d2]);
  w$1(d2);
  return d2;
};
{
  withSelector.exports = withSelector_production_min;
}
var withSelectorExports = withSelector.exports;
function defaultNoopBatch(callback) {
  callback();
}
let batch = defaultNoopBatch;
const setBatch = (newBatch) => batch = newBatch;
const getBatch = () => batch;
const ContextKey = Symbol.for("react-redux-context");
const gT = typeof globalThis !== "undefined" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function getContext() {
  var _gT$ContextKey;
  if (!reactExports.createContext) return {};
  const contextMap = (_gT$ContextKey = gT[ContextKey]) != null ? _gT$ContextKey : gT[ContextKey] = /* @__PURE__ */ new Map();
  let realContext = contextMap.get(reactExports.createContext);
  if (!realContext) {
    realContext = reactExports.createContext(null);
    contextMap.set(reactExports.createContext, realContext);
  }
  return realContext;
}
const ReactReduxContext = /* @__PURE__ */ getContext();
function createReduxContextHook(context = ReactReduxContext) {
  return function useReduxContext2() {
    const contextValue = reactExports.useContext(context);
    return contextValue;
  };
}
const useReduxContext = /* @__PURE__ */ createReduxContextHook();
const notInitialized = () => {
  throw new Error("uSES not initialized!");
};
let useSyncExternalStoreWithSelector = notInitialized;
const initializeUseSelector = (fn2) => {
  useSyncExternalStoreWithSelector = fn2;
};
const refEquality = (a2, b2) => a2 === b2;
function createSelectorHook(context = ReactReduxContext) {
  const useReduxContext$1 = context === ReactReduxContext ? useReduxContext : createReduxContextHook(context);
  return function useSelector2(selector, equalityFnOrOptions = {}) {
    const {
      equalityFn = refEquality,
      stabilityCheck = void 0,
      noopCheck = void 0
    } = typeof equalityFnOrOptions === "function" ? {
      equalityFn: equalityFnOrOptions
    } : equalityFnOrOptions;
    const {
      store,
      subscription,
      getServerState,
      stabilityCheck: globalStabilityCheck,
      noopCheck: globalNoopCheck
    } = useReduxContext$1();
    reactExports.useRef(true);
    const wrappedSelector = reactExports.useCallback({
      [selector.name](state) {
        const selected = selector(state);
        return selected;
      }
    }[selector.name], [selector, globalStabilityCheck, stabilityCheck]);
    const selectedState = useSyncExternalStoreWithSelector(subscription.addNestedSub, store.getState, getServerState || store.getState, wrappedSelector, equalityFn);
    reactExports.useDebugValue(selectedState);
    return selectedState;
  };
}
const useSelector = /* @__PURE__ */ createSelectorHook();
const _excluded$1 = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, {
  areStatesEqual,
  areOwnPropsEqual,
  areStatePropsEqual
}) {
  let hasRunAtLeastOnce = false;
  let state;
  let ownProps;
  let stateProps;
  let dispatchProps;
  let mergedProps;
  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }
  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleNewState() {
    const nextStateProps = mapStateToProps(state, ownProps);
    const statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleSubsequentCalls(nextState, nextOwnProps) {
    const propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    const stateChanged = !areStatesEqual(nextState, state, nextOwnProps, ownProps);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }
  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}
function finalPropsSelectorFactory(dispatch, _ref) {
  let {
    initMapStateToProps,
    initMapDispatchToProps,
    initMergeProps
  } = _ref, options = _objectWithoutPropertiesLoose(_ref, _excluded$1);
  const mapStateToProps = initMapStateToProps(dispatch, options);
  const mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  const mergeProps = initMergeProps(dispatch, options);
  return pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}
function bindActionCreators(actionCreators, dispatch) {
  const boundActionCreators = {};
  for (const key in actionCreators) {
    const actionCreator = actionCreators[key];
    if (typeof actionCreator === "function") {
      boundActionCreators[key] = (...args) => dispatch(actionCreator(...args));
    }
  }
  return boundActionCreators;
}
function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch) {
    const constant = getConstant(dispatch);
    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, {
    displayName
  }) {
    const proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch, void 0);
    };
    proxy.dependsOnOwnProps = true;
    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      let props = proxy(stateOrDispatch, ownProps);
      if (typeof props === "function") {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }
      return props;
    };
    return proxy;
  };
}
function createInvalidArgFactory(arg, name) {
  return (dispatch, options) => {
    throw new Error("Invalid value of type ".concat(typeof arg, " for ").concat(name, " argument when connecting component ").concat(options.wrappedComponentName, "."));
  };
}
function mapDispatchToPropsFactory(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === "object" ? wrapMapToPropsConstant((dispatch) => (
    // @ts-ignore
    bindActionCreators(mapDispatchToProps, dispatch)
  )) : !mapDispatchToProps ? wrapMapToPropsConstant((dispatch) => ({
    dispatch
  })) : typeof mapDispatchToProps === "function" ? (
    // @ts-ignore
    wrapMapToPropsFunc(mapDispatchToProps)
  ) : createInvalidArgFactory(mapDispatchToProps, "mapDispatchToProps");
}
function mapStateToPropsFactory(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(() => ({})) : typeof mapStateToProps === "function" ? (
    // @ts-ignore
    wrapMapToPropsFunc(mapStateToProps)
  ) : createInvalidArgFactory(mapStateToProps, "mapStateToProps");
}
function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}
function mergePropsFactory(mergeProps) {
  return () => defaultMergeProps;
}
function createListenerCollection() {
  const batch2 = getBatch();
  let first = null;
  let last = null;
  return {
    clear() {
      first = null;
      last = null;
    },
    notify() {
      batch2(() => {
        let listener = first;
        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get() {
      let listeners = [];
      let listener = first;
      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }
      return listeners;
    },
    subscribe(callback) {
      let isSubscribed = true;
      let listener = last = {
        callback,
        next: null,
        prev: last
      };
      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }
      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;
        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }
        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}
const nullListeners = {
  notify() {
  },
  get: () => []
};
function createSubscription(store, parentSub) {
  let unsubscribe;
  let listeners = nullListeners;
  let subscriptionsAmount = 0;
  let selfSubscribed = false;
  function addNestedSub(listener) {
    trySubscribe();
    const cleanupListener = listeners.subscribe(listener);
    let removed = false;
    return () => {
      if (!removed) {
        removed = true;
        cleanupListener();
        tryUnsubscribe();
      }
    };
  }
  function notifyNestedSubs() {
    listeners.notify();
  }
  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }
  function isSubscribed() {
    return selfSubscribed;
  }
  function trySubscribe() {
    subscriptionsAmount++;
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }
  function tryUnsubscribe() {
    subscriptionsAmount--;
    if (unsubscribe && subscriptionsAmount === 0) {
      unsubscribe();
      unsubscribe = void 0;
      listeners.clear();
      listeners = nullListeners;
    }
  }
  function trySubscribeSelf() {
    if (!selfSubscribed) {
      selfSubscribed = true;
      trySubscribe();
    }
  }
  function tryUnsubscribeSelf() {
    if (selfSubscribed) {
      selfSubscribed = false;
      tryUnsubscribe();
    }
  }
  const subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe: trySubscribeSelf,
    tryUnsubscribe: tryUnsubscribeSelf,
    getListeners: () => listeners
  };
  return subscription;
}
const canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
const useIsomorphicLayoutEffect$1 = canUseDOM ? reactExports.useLayoutEffect : reactExports.useEffect;
function is(x2, y2) {
  if (x2 === y2) {
    return x2 !== 0 || y2 !== 0 || 1 / x2 === 1 / y2;
  } else {
    return x2 !== x2 && y2 !== y2;
  }
}
function shallowEqual$1(objA, objB) {
  if (is(objA, objB)) return true;
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;
  for (let i2 = 0; i2 < keysA.length; i2++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i2]) || !is(objA[keysA[i2]], objB[keysA[i2]])) {
      return false;
    }
  }
  return true;
}
const _excluded = ["reactReduxForwardedRef"];
let useSyncExternalStore = notInitialized;
const initializeConnect = (fn2) => {
  useSyncExternalStore = fn2;
};
const NO_SUBSCRIPTION_ARRAY = [null, null];
function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  useIsomorphicLayoutEffect$1(() => effectFunc(...effectArgs), dependencies);
}
function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  lastWrapperProps.current = wrapperProps;
  renderIsScheduled.current = false;
  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}
function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, additionalSubscribeListener) {
  if (!shouldHandleStateChanges) return () => {
  };
  let didUnsubscribe = false;
  let lastThrownError = null;
  const checkForUpdates = () => {
    if (didUnsubscribe || !isMounted.current) {
      return;
    }
    const latestStoreState = store.getState();
    let newChildProps, error2;
    try {
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e2) {
      error2 = e2;
      lastThrownError = e2;
    }
    if (!error2) {
      lastThrownError = null;
    }
    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true;
      additionalSubscribeListener();
    }
  };
  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe();
  checkForUpdates();
  const unsubscribeWrapper = () => {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;
    if (lastThrownError) {
      throw lastThrownError;
    }
  };
  return unsubscribeWrapper;
}
function strictEqual(a2, b2) {
  return a2 === b2;
}
function connect(mapStateToProps, mapDispatchToProps, mergeProps, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure,
  areStatesEqual = strictEqual,
  areOwnPropsEqual = shallowEqual$1,
  areStatePropsEqual = shallowEqual$1,
  areMergedPropsEqual = shallowEqual$1,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef = false,
  // the context consumer to use
  context = ReactReduxContext
} = {}) {
  const Context = context;
  const initMapStateToProps = mapStateToPropsFactory(mapStateToProps);
  const initMapDispatchToProps = mapDispatchToPropsFactory(mapDispatchToProps);
  const initMergeProps = mergePropsFactory();
  const shouldHandleStateChanges = Boolean(mapStateToProps);
  const wrapWithConnect = (WrappedComponent) => {
    const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
    const displayName = "Connect(".concat(wrappedComponentName, ")");
    const selectorFactoryOptions = {
      shouldHandleStateChanges,
      displayName,
      wrappedComponentName,
      WrappedComponent,
      // @ts-ignore
      initMapStateToProps,
      // @ts-ignore
      initMapDispatchToProps,
      initMergeProps,
      areStatesEqual,
      areStatePropsEqual,
      areOwnPropsEqual,
      areMergedPropsEqual
    };
    function ConnectFunction(props) {
      const [propsContext, reactReduxForwardedRef, wrapperProps] = reactExports.useMemo(() => {
        const {
          reactReduxForwardedRef: reactReduxForwardedRef2
        } = props, wrapperProps2 = _objectWithoutPropertiesLoose(props, _excluded);
        return [props.context, reactReduxForwardedRef2, wrapperProps2];
      }, [props]);
      const ContextToUse = reactExports.useMemo(() => {
        return propsContext && propsContext.Consumer && // @ts-ignore
        reactIsExports.isContextConsumer(/* @__PURE__ */ reactExports.createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]);
      const contextValue = reactExports.useContext(ContextToUse);
      const didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      const didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);
      const store = didStoreComeFromProps ? props.store : contextValue.store;
      const getServerState = didStoreComeFromContext ? contextValue.getServerState : store.getState;
      const childPropsSelector = reactExports.useMemo(() => {
        return finalPropsSelectorFactory(store.dispatch, selectorFactoryOptions);
      }, [store]);
      const [subscription, notifyNestedSubs] = reactExports.useMemo(() => {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY;
        const subscription2 = createSubscription(store, didStoreComeFromProps ? void 0 : contextValue.subscription);
        const notifyNestedSubs2 = subscription2.notifyNestedSubs.bind(subscription2);
        return [subscription2, notifyNestedSubs2];
      }, [store, didStoreComeFromProps, contextValue]);
      const overriddenContextValue = reactExports.useMemo(() => {
        if (didStoreComeFromProps) {
          return contextValue;
        }
        return _extends({}, contextValue, {
          subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]);
      const lastChildProps = reactExports.useRef();
      const lastWrapperProps = reactExports.useRef(wrapperProps);
      const childPropsFromStoreUpdate = reactExports.useRef();
      const renderIsScheduled = reactExports.useRef(false);
      reactExports.useRef(false);
      const isMounted = reactExports.useRef(false);
      const latestSubscriptionCallbackError = reactExports.useRef();
      useIsomorphicLayoutEffect$1(() => {
        isMounted.current = true;
        return () => {
          isMounted.current = false;
        };
      }, []);
      const actualChildPropsSelector = reactExports.useMemo(() => {
        const selector = () => {
          if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
            return childPropsFromStoreUpdate.current;
          }
          return childPropsSelector(store.getState(), wrapperProps);
        };
        return selector;
      }, [store, wrapperProps]);
      const subscribeForReact = reactExports.useMemo(() => {
        const subscribe = (reactListener) => {
          if (!subscription) {
            return () => {
            };
          }
          return subscribeUpdates(
            shouldHandleStateChanges,
            store,
            subscription,
            // @ts-ignore
            childPropsSelector,
            lastWrapperProps,
            lastChildProps,
            renderIsScheduled,
            isMounted,
            childPropsFromStoreUpdate,
            notifyNestedSubs,
            reactListener
          );
        };
        return subscribe;
      }, [subscription]);
      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, childPropsFromStoreUpdate, notifyNestedSubs]);
      let actualChildProps;
      try {
        actualChildProps = useSyncExternalStore(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          subscribeForReact,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          actualChildPropsSelector,
          getServerState ? () => childPropsSelector(getServerState(), wrapperProps) : actualChildPropsSelector
        );
      } catch (err) {
        if (latestSubscriptionCallbackError.current) {
          err.message += "\nThe error may be correlated with this previous error:\n".concat(latestSubscriptionCallbackError.current.stack, "\n\n");
        }
        throw err;
      }
      useIsomorphicLayoutEffect$1(() => {
        latestSubscriptionCallbackError.current = void 0;
        childPropsFromStoreUpdate.current = void 0;
        lastChildProps.current = actualChildProps;
      });
      const renderedWrappedComponent = reactExports.useMemo(() => {
        return (
          // @ts-ignore
          /* @__PURE__ */ reactExports.createElement(WrappedComponent, _extends({}, actualChildProps, {
            ref: reactReduxForwardedRef
          }))
        );
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]);
      const renderedChild = reactExports.useMemo(() => {
        if (shouldHandleStateChanges) {
          return /* @__PURE__ */ reactExports.createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }
        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    }
    const _Connect = reactExports.memo(ConnectFunction);
    const Connect = _Connect;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = ConnectFunction.displayName = displayName;
    if (forwardRef) {
      const _forwarded = reactExports.forwardRef(function forwardConnectRef(props, ref) {
        return /* @__PURE__ */ reactExports.createElement(Connect, _extends({}, props, {
          reactReduxForwardedRef: ref
        }));
      });
      const forwarded = _forwarded;
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoistStatics(forwarded, WrappedComponent);
    }
    return hoistStatics(Connect, WrappedComponent);
  };
  return wrapWithConnect;
}
function Provider({
  store,
  context,
  children,
  serverState,
  stabilityCheck = "once",
  noopCheck = "once"
}) {
  const contextValue = reactExports.useMemo(() => {
    const subscription = createSubscription(store);
    return {
      store,
      subscription,
      getServerState: serverState ? () => serverState : void 0,
      stabilityCheck,
      noopCheck
    };
  }, [store, serverState, stabilityCheck, noopCheck]);
  const previousState = reactExports.useMemo(() => store.getState(), [store]);
  useIsomorphicLayoutEffect$1(() => {
    const {
      subscription
    } = contextValue;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();
    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }
    return () => {
      subscription.tryUnsubscribe();
      subscription.onStateChange = void 0;
    };
  }, [contextValue, previousState]);
  const Context = context || ReactReduxContext;
  return /* @__PURE__ */ reactExports.createElement(Context.Provider, {
    value: contextValue
  }, children);
}
function createStoreHook(context = ReactReduxContext) {
  const useReduxContext$1 = (
    // @ts-ignore
    context === ReactReduxContext ? useReduxContext : (
      // @ts-ignore
      createReduxContextHook(context)
    )
  );
  return function useStore2() {
    const {
      store
    } = useReduxContext$1();
    return store;
  };
}
const useStore = /* @__PURE__ */ createStoreHook();
function createDispatchHook(context = ReactReduxContext) {
  const useStore$1 = (
    // @ts-ignore
    context === ReactReduxContext ? useStore : createStoreHook(context)
  );
  return function useDispatch2() {
    const store = useStore$1();
    return store.dispatch;
  };
}
const useDispatch = /* @__PURE__ */ createDispatchHook();
initializeUseSelector(withSelectorExports.useSyncExternalStoreWithSelector);
initializeConnect(shimExports.useSyncExternalStore);
setBatch(reactDomExports.unstable_batchedUpdates);
function n(n2) {
  for (var r2 = arguments.length, t2 = Array(r2 > 1 ? r2 - 1 : 0), e2 = 1; e2 < r2; e2++) t2[e2 - 1] = arguments[e2];
  throw Error("[Immer] minified error nr: " + n2 + (t2.length ? " " + t2.map(function(n3) {
    return "'" + n3 + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function r(n2) {
  return !!n2 && !!n2[Q];
}
function t(n2) {
  var r2;
  return !!n2 && (function(n3) {
    if (!n3 || "object" != typeof n3) return false;
    var r3 = Object.getPrototypeOf(n3);
    if (null === r3) return true;
    var t2 = Object.hasOwnProperty.call(r3, "constructor") && r3.constructor;
    return t2 === Object || "function" == typeof t2 && Function.toString.call(t2) === Z;
  }(n2) || Array.isArray(n2) || !!n2[L] || !!(null === (r2 = n2.constructor) || void 0 === r2 ? void 0 : r2[L]) || s(n2) || v(n2));
}
function i(n2, r2, t2) {
  void 0 === t2 && (t2 = false), 0 === o(n2) ? (t2 ? Object.keys : nn)(n2).forEach(function(e2) {
    t2 && "symbol" == typeof e2 || r2(e2, n2[e2], n2);
  }) : n2.forEach(function(t3, e2) {
    return r2(e2, t3, n2);
  });
}
function o(n2) {
  var r2 = n2[Q];
  return r2 ? r2.i > 3 ? r2.i - 4 : r2.i : Array.isArray(n2) ? 1 : s(n2) ? 2 : v(n2) ? 3 : 0;
}
function u(n2, r2) {
  return 2 === o(n2) ? n2.has(r2) : Object.prototype.hasOwnProperty.call(n2, r2);
}
function a(n2, r2) {
  return 2 === o(n2) ? n2.get(r2) : n2[r2];
}
function f(n2, r2, t2) {
  var e2 = o(n2);
  2 === e2 ? n2.set(r2, t2) : 3 === e2 ? n2.add(t2) : n2[r2] = t2;
}
function c(n2, r2) {
  return n2 === r2 ? 0 !== n2 || 1 / n2 == 1 / r2 : n2 != n2 && r2 != r2;
}
function s(n2) {
  return X && n2 instanceof Map;
}
function v(n2) {
  return q && n2 instanceof Set;
}
function p(n2) {
  return n2.o || n2.t;
}
function l(n2) {
  if (Array.isArray(n2)) return Array.prototype.slice.call(n2);
  var r2 = rn(n2);
  delete r2[Q];
  for (var t2 = nn(r2), e2 = 0; e2 < t2.length; e2++) {
    var i2 = t2[e2], o2 = r2[i2];
    false === o2.writable && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (r2[i2] = { configurable: true, writable: true, enumerable: o2.enumerable, value: n2[i2] });
  }
  return Object.create(Object.getPrototypeOf(n2), r2);
}
function d(n2, e2) {
  return void 0 === e2 && (e2 = false), y(n2) || r(n2) || !t(n2) || (o(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h), Object.freeze(n2), e2 && i(n2, function(n3, r2) {
    return d(r2, true);
  }, true)), n2;
}
function h() {
  n(2);
}
function y(n2) {
  return null == n2 || "object" != typeof n2 || Object.isFrozen(n2);
}
function b(r2) {
  var t2 = tn[r2];
  return t2 || n(18, r2), t2;
}
function m(n2, r2) {
  tn[n2] || (tn[n2] = r2);
}
function _() {
  return U;
}
function j(n2, r2) {
  r2 && (b("Patches"), n2.u = [], n2.s = [], n2.v = r2);
}
function g(n2) {
  O(n2), n2.p.forEach(S), n2.p = null;
}
function O(n2) {
  n2 === U && (U = n2.l);
}
function w(n2) {
  return U = { p: [], l: U, h: n2, m: true, _: 0 };
}
function S(n2) {
  var r2 = n2[Q];
  0 === r2.i || 1 === r2.i ? r2.j() : r2.g = true;
}
function P(r2, e2) {
  e2._ = e2.p.length;
  var i2 = e2.p[0], o2 = void 0 !== r2 && r2 !== i2;
  return e2.h.O || b("ES5").S(e2, r2, o2), o2 ? (i2[Q].P && (g(e2), n(4)), t(r2) && (r2 = M(e2, r2), e2.l || x(e2, r2)), e2.u && b("Patches").M(i2[Q].t, r2, e2.u, e2.s)) : r2 = M(e2, i2, []), g(e2), e2.u && e2.v(e2.u, e2.s), r2 !== H ? r2 : void 0;
}
function M(n2, r2, t2) {
  if (y(r2)) return r2;
  var e2 = r2[Q];
  if (!e2) return i(r2, function(i2, o3) {
    return A(n2, e2, r2, i2, o3, t2);
  }, true), r2;
  if (e2.A !== n2) return r2;
  if (!e2.P) return x(n2, e2.t, true), e2.t;
  if (!e2.I) {
    e2.I = true, e2.A._--;
    var o2 = 4 === e2.i || 5 === e2.i ? e2.o = l(e2.k) : e2.o, u2 = o2, a2 = false;
    3 === e2.i && (u2 = new Set(o2), o2.clear(), a2 = true), i(u2, function(r3, i2) {
      return A(n2, e2, o2, r3, i2, t2, a2);
    }), x(n2, o2, false), t2 && n2.u && b("Patches").N(e2, t2, n2.u, n2.s);
  }
  return e2.o;
}
function A(e2, i2, o2, a2, c2, s2, v2) {
  if (r(c2)) {
    var p2 = M(e2, c2, s2 && i2 && 3 !== i2.i && !u(i2.R, a2) ? s2.concat(a2) : void 0);
    if (f(o2, a2, p2), !r(p2)) return;
    e2.m = false;
  } else v2 && o2.add(c2);
  if (t(c2) && !y(c2)) {
    if (!e2.h.D && e2._ < 1) return;
    M(e2, c2), i2 && i2.A.l || x(e2, c2);
  }
}
function x(n2, r2, t2) {
  void 0 === t2 && (t2 = false), !n2.l && n2.h.D && n2.m && d(r2, t2);
}
function z(n2, r2) {
  var t2 = n2[Q];
  return (t2 ? p(t2) : n2)[r2];
}
function I(n2, r2) {
  if (r2 in n2) for (var t2 = Object.getPrototypeOf(n2); t2; ) {
    var e2 = Object.getOwnPropertyDescriptor(t2, r2);
    if (e2) return e2;
    t2 = Object.getPrototypeOf(t2);
  }
}
function k(n2) {
  n2.P || (n2.P = true, n2.l && k(n2.l));
}
function E(n2) {
  n2.o || (n2.o = l(n2.t));
}
function N(n2, r2, t2) {
  var e2 = s(r2) ? b("MapSet").F(r2, t2) : v(r2) ? b("MapSet").T(r2, t2) : n2.O ? function(n3, r3) {
    var t3 = Array.isArray(n3), e3 = { i: t3 ? 1 : 0, A: r3 ? r3.A : _(), P: false, I: false, R: {}, l: r3, t: n3, k: null, o: null, j: null, C: false }, i2 = e3, o2 = en;
    t3 && (i2 = [e3], o2 = on);
    var u2 = Proxy.revocable(i2, o2), a2 = u2.revoke, f2 = u2.proxy;
    return e3.k = f2, e3.j = a2, f2;
  }(r2, t2) : b("ES5").J(r2, t2);
  return (t2 ? t2.A : _()).p.push(e2), e2;
}
function R(e2) {
  return r(e2) || n(22, e2), function n2(r2) {
    if (!t(r2)) return r2;
    var e3, u2 = r2[Q], c2 = o(r2);
    if (u2) {
      if (!u2.P && (u2.i < 4 || !b("ES5").K(u2))) return u2.t;
      u2.I = true, e3 = D(r2, c2), u2.I = false;
    } else e3 = D(r2, c2);
    return i(e3, function(r3, t2) {
      u2 && a(u2.t, r3) === t2 || f(e3, r3, n2(t2));
    }), 3 === c2 ? new Set(e3) : e3;
  }(e2);
}
function D(n2, r2) {
  switch (r2) {
    case 2:
      return new Map(n2);
    case 3:
      return Array.from(n2);
  }
  return l(n2);
}
function F() {
  function t2(n2, r2) {
    var t3 = s2[n2];
    return t3 ? t3.enumerable = r2 : s2[n2] = t3 = { configurable: true, enumerable: r2, get: function() {
      var r3 = this[Q];
      return en.get(r3, n2);
    }, set: function(r3) {
      var t4 = this[Q];
      en.set(t4, n2, r3);
    } }, t3;
  }
  function e2(n2) {
    for (var r2 = n2.length - 1; r2 >= 0; r2--) {
      var t3 = n2[r2][Q];
      if (!t3.P) switch (t3.i) {
        case 5:
          a2(t3) && k(t3);
          break;
        case 4:
          o2(t3) && k(t3);
      }
    }
  }
  function o2(n2) {
    for (var r2 = n2.t, t3 = n2.k, e3 = nn(t3), i2 = e3.length - 1; i2 >= 0; i2--) {
      var o3 = e3[i2];
      if (o3 !== Q) {
        var a3 = r2[o3];
        if (void 0 === a3 && !u(r2, o3)) return true;
        var f3 = t3[o3], s3 = f3 && f3[Q];
        if (s3 ? s3.t !== a3 : !c(f3, a3)) return true;
      }
    }
    var v2 = !!r2[Q];
    return e3.length !== nn(r2).length + (v2 ? 0 : 1);
  }
  function a2(n2) {
    var r2 = n2.k;
    if (r2.length !== n2.t.length) return true;
    var t3 = Object.getOwnPropertyDescriptor(r2, r2.length - 1);
    if (t3 && !t3.get) return true;
    for (var e3 = 0; e3 < r2.length; e3++) if (!r2.hasOwnProperty(e3)) return true;
    return false;
  }
  var s2 = {};
  m("ES5", { J: function(n2, r2) {
    var e3 = Array.isArray(n2), i2 = function(n3, r3) {
      if (n3) {
        for (var e4 = Array(r3.length), i3 = 0; i3 < r3.length; i3++) Object.defineProperty(e4, "" + i3, t2(i3, true));
        return e4;
      }
      var o4 = rn(r3);
      delete o4[Q];
      for (var u2 = nn(o4), a3 = 0; a3 < u2.length; a3++) {
        var f3 = u2[a3];
        o4[f3] = t2(f3, n3 || !!o4[f3].enumerable);
      }
      return Object.create(Object.getPrototypeOf(r3), o4);
    }(e3, n2), o3 = { i: e3 ? 5 : 4, A: r2 ? r2.A : _(), P: false, I: false, R: {}, l: r2, t: n2, k: i2, o: null, g: false, C: false };
    return Object.defineProperty(i2, Q, { value: o3, writable: true }), i2;
  }, S: function(n2, t3, o3) {
    o3 ? r(t3) && t3[Q].A === n2 && e2(n2.p) : (n2.u && function n3(r2) {
      if (r2 && "object" == typeof r2) {
        var t4 = r2[Q];
        if (t4) {
          var e3 = t4.t, o4 = t4.k, f3 = t4.R, c2 = t4.i;
          if (4 === c2) i(o4, function(r3) {
            r3 !== Q && (void 0 !== e3[r3] || u(e3, r3) ? f3[r3] || n3(o4[r3]) : (f3[r3] = true, k(t4)));
          }), i(e3, function(n4) {
            void 0 !== o4[n4] || u(o4, n4) || (f3[n4] = false, k(t4));
          });
          else if (5 === c2) {
            if (a2(t4) && (k(t4), f3.length = true), o4.length < e3.length) for (var s3 = o4.length; s3 < e3.length; s3++) f3[s3] = false;
            else for (var v2 = e3.length; v2 < o4.length; v2++) f3[v2] = true;
            for (var p2 = Math.min(o4.length, e3.length), l2 = 0; l2 < p2; l2++) o4.hasOwnProperty(l2) || (f3[l2] = true), void 0 === f3[l2] && n3(o4[l2]);
          }
        }
      }
    }(n2.p[0]), e2(n2.p));
  }, K: function(n2) {
    return 4 === n2.i ? o2(n2) : a2(n2);
  } });
}
var G, U, W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"), X = "undefined" != typeof Map, q = "undefined" != typeof Set, B = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect, H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G), L = W ? Symbol.for("immer-draftable") : "__$immer_draftable", Q = W ? Symbol.for("immer-state") : "__$immer_state", Z = "" + Object.prototype.constructor, nn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(n2) {
  return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
} : Object.getOwnPropertyNames, rn = Object.getOwnPropertyDescriptors || function(n2) {
  var r2 = {};
  return nn(n2).forEach(function(t2) {
    r2[t2] = Object.getOwnPropertyDescriptor(n2, t2);
  }), r2;
}, tn = {}, en = { get: function(n2, r2) {
  if (r2 === Q) return n2;
  var e2 = p(n2);
  if (!u(e2, r2)) return function(n3, r3, t2) {
    var e3, i3 = I(r3, t2);
    return i3 ? "value" in i3 ? i3.value : null === (e3 = i3.get) || void 0 === e3 ? void 0 : e3.call(n3.k) : void 0;
  }(n2, e2, r2);
  var i2 = e2[r2];
  return n2.I || !t(i2) ? i2 : i2 === z(n2.t, r2) ? (E(n2), n2.o[r2] = N(n2.A.h, i2, n2)) : i2;
}, has: function(n2, r2) {
  return r2 in p(n2);
}, ownKeys: function(n2) {
  return Reflect.ownKeys(p(n2));
}, set: function(n2, r2, t2) {
  var e2 = I(p(n2), r2);
  if (null == e2 ? void 0 : e2.set) return e2.set.call(n2.k, t2), true;
  if (!n2.P) {
    var i2 = z(p(n2), r2), o2 = null == i2 ? void 0 : i2[Q];
    if (o2 && o2.t === t2) return n2.o[r2] = t2, n2.R[r2] = false, true;
    if (c(t2, i2) && (void 0 !== t2 || u(n2.t, r2))) return true;
    E(n2), k(n2);
  }
  return n2.o[r2] === t2 && (void 0 !== t2 || r2 in n2.o) || Number.isNaN(t2) && Number.isNaN(n2.o[r2]) || (n2.o[r2] = t2, n2.R[r2] = true), true;
}, deleteProperty: function(n2, r2) {
  return void 0 !== z(n2.t, r2) || r2 in n2.t ? (n2.R[r2] = false, E(n2), k(n2)) : delete n2.R[r2], n2.o && delete n2.o[r2], true;
}, getOwnPropertyDescriptor: function(n2, r2) {
  var t2 = p(n2), e2 = Reflect.getOwnPropertyDescriptor(t2, r2);
  return e2 ? { writable: true, configurable: 1 !== n2.i || "length" !== r2, enumerable: e2.enumerable, value: t2[r2] } : e2;
}, defineProperty: function() {
  n(11);
}, getPrototypeOf: function(n2) {
  return Object.getPrototypeOf(n2.t);
}, setPrototypeOf: function() {
  n(12);
} }, on = {};
i(en, function(n2, r2) {
  on[n2] = function() {
    return arguments[0] = arguments[0][0], r2.apply(this, arguments);
  };
}), on.deleteProperty = function(r2, t2) {
  return on.set.call(this, r2, t2, void 0);
}, on.set = function(r2, t2, e2) {
  return en.set.call(this, r2[0], t2, e2, r2[0]);
};
var un = function() {
  function e2(r2) {
    var e3 = this;
    this.O = B, this.D = true, this.produce = function(r3, i3, o2) {
      if ("function" == typeof r3 && "function" != typeof i3) {
        var u2 = i3;
        i3 = r3;
        var a2 = e3;
        return function(n2) {
          var r4 = this;
          void 0 === n2 && (n2 = u2);
          for (var t2 = arguments.length, e4 = Array(t2 > 1 ? t2 - 1 : 0), o3 = 1; o3 < t2; o3++) e4[o3 - 1] = arguments[o3];
          return a2.produce(n2, function(n3) {
            var t3;
            return (t3 = i3).call.apply(t3, [r4, n3].concat(e4));
          });
        };
      }
      var f2;
      if ("function" != typeof i3 && n(6), void 0 !== o2 && "function" != typeof o2 && n(7), t(r3)) {
        var c2 = w(e3), s2 = N(e3, r3, void 0), v2 = true;
        try {
          f2 = i3(s2), v2 = false;
        } finally {
          v2 ? g(c2) : O(c2);
        }
        return "undefined" != typeof Promise && f2 instanceof Promise ? f2.then(function(n2) {
          return j(c2, o2), P(n2, c2);
        }, function(n2) {
          throw g(c2), n2;
        }) : (j(c2, o2), P(f2, c2));
      }
      if (!r3 || "object" != typeof r3) {
        if (void 0 === (f2 = i3(r3)) && (f2 = r3), f2 === H && (f2 = void 0), e3.D && d(f2, true), o2) {
          var p2 = [], l2 = [];
          b("Patches").M(r3, f2, p2, l2), o2(p2, l2);
        }
        return f2;
      }
      n(21, r3);
    }, this.produceWithPatches = function(n2, r3) {
      if ("function" == typeof n2) return function(r4) {
        for (var t3 = arguments.length, i4 = Array(t3 > 1 ? t3 - 1 : 0), o3 = 1; o3 < t3; o3++) i4[o3 - 1] = arguments[o3];
        return e3.produceWithPatches(r4, function(r5) {
          return n2.apply(void 0, [r5].concat(i4));
        });
      };
      var t2, i3, o2 = e3.produce(n2, r3, function(n3, r4) {
        t2 = n3, i3 = r4;
      });
      return "undefined" != typeof Promise && o2 instanceof Promise ? o2.then(function(n3) {
        return [n3, t2, i3];
      }) : [o2, t2, i3];
    }, "boolean" == typeof (null == r2 ? void 0 : r2.useProxies) && this.setUseProxies(r2.useProxies), "boolean" == typeof (null == r2 ? void 0 : r2.autoFreeze) && this.setAutoFreeze(r2.autoFreeze);
  }
  var i2 = e2.prototype;
  return i2.createDraft = function(e3) {
    t(e3) || n(8), r(e3) && (e3 = R(e3));
    var i3 = w(this), o2 = N(this, e3, void 0);
    return o2[Q].C = true, O(i3), o2;
  }, i2.finishDraft = function(r2, t2) {
    var e3 = r2 && r2[Q];
    var i3 = e3.A;
    return j(i3, t2), P(void 0, i3);
  }, i2.setAutoFreeze = function(n2) {
    this.D = n2;
  }, i2.setUseProxies = function(r2) {
    r2 && !B && n(20), this.O = r2;
  }, i2.applyPatches = function(n2, t2) {
    var e3;
    for (e3 = t2.length - 1; e3 >= 0; e3--) {
      var i3 = t2[e3];
      if (0 === i3.path.length && "replace" === i3.op) {
        n2 = i3.value;
        break;
      }
    }
    e3 > -1 && (t2 = t2.slice(e3 + 1));
    var o2 = b("Patches").$;
    return r(n2) ? o2(n2, t2) : this.produce(n2, function(n3) {
      return o2(n3, t2);
    });
  }, e2;
}(), an = new un(), fn = an.produce;
an.produceWithPatches.bind(an);
an.setAutoFreeze.bind(an);
an.setUseProxies.bind(an);
an.applyPatches.bind(an);
an.createDraft.bind(an);
an.finishDraft.bind(an);
function ownKeys(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread2(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or use the non-minified dev environment for full errors. ";
}
var $$observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
var randomString = function randomString2() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};
function isPlainObject$2(obj) {
  if (typeof obj !== "object" || obj === null) return false;
  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto;
}
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(formatProdErrorMessage(0));
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(formatProdErrorMessage(1));
    }
    return enhancer(createStore)(reducer, preloadedState);
  }
  if (typeof reducer !== "function") {
    throw new Error(formatProdErrorMessage(2));
  }
  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(3));
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error(formatProdErrorMessage(4));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(5));
    }
    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(formatProdErrorMessage(6));
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  function dispatch(action2) {
    if (!isPlainObject$2(action2)) {
      throw new Error(formatProdErrorMessage(7));
    }
    if (typeof action2.type === "undefined") {
      throw new Error(formatProdErrorMessage(8));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(9));
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action2);
    } finally {
      isDispatching = false;
    }
    var listeners = currentListeners = nextListeners;
    for (var i2 = 0; i2 < listeners.length; i2++) {
      var listener = listeners[i2];
      listener();
    }
    return action2;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(formatProdErrorMessage(10));
    }
    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  function observable() {
    var _ref;
    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe2(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error(formatProdErrorMessage(11));
        }
        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }
        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      }
    }, _ref[$$observable] = function() {
      return this;
    }, _ref;
  }
  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch,
    subscribe,
    getState,
    replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function(key) {
    var reducer = reducers[key];
    var initialState = reducer(void 0, {
      type: ActionTypes.INIT
    });
    if (typeof initialState === "undefined") {
      throw new Error(formatProdErrorMessage(12));
    }
    if (typeof reducer(void 0, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === "undefined") {
      throw new Error(formatProdErrorMessage(13));
    }
  });
}
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i2 = 0; i2 < reducerKeys.length; i2++) {
    var key = reducerKeys[i2];
    if (typeof reducers[key] === "function") {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);
  var shapeAssertionError;
  try {
    assertReducerShape(finalReducers);
  } catch (e2) {
    shapeAssertionError = e2;
  }
  return function combination(state, action2) {
    if (state === void 0) {
      state = {};
    }
    if (shapeAssertionError) {
      throw shapeAssertionError;
    }
    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action2);
      if (typeof nextStateForKey === "undefined") {
        action2 && action2.type;
        throw new Error(formatProdErrorMessage(14));
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  if (funcs.length === 0) {
    return function(arg) {
      return arg;
    };
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(function(a2, b2) {
    return function() {
      return a2(b2.apply(void 0, arguments));
    };
  });
}
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }
  return function(createStore2) {
    return function() {
      var store = createStore2.apply(void 0, arguments);
      var _dispatch = function dispatch() {
        throw new Error(formatProdErrorMessage(15));
      };
      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function(middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2(_objectSpread2({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}
function createThunkMiddleware(extraArgument) {
  var middleware = function middleware2(_ref) {
    var dispatch = _ref.dispatch, getState = _ref.getState;
    return function(next2) {
      return function(action2) {
        if (typeof action2 === "function") {
          return action2(dispatch, getState, extraArgument);
        }
        return next2(action2);
      };
    };
  };
  return middleware;
}
var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
var __extends = /* @__PURE__ */ function() {
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d22, b22) {
      d22.__proto__ = b22;
    } || function(d22, b22) {
      for (var p2 in b22) if (Object.prototype.hasOwnProperty.call(b22, p2)) d22[p2] = b22[p2];
    };
    return extendStatics(d2, b2);
  };
  return function(d2, b2) {
    if (typeof b2 !== "function" && b2 !== null)
      throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var __generator = function(thisArg, body) {
  var _2 = { label: 0, sent: function() {
    if (t2[0] & 1) throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f2, y2, t2, g2;
  return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f2) throw new TypeError("Generator is already executing.");
    while (_2) try {
      if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done) return t2;
      if (y2 = 0, t2) op = [op[0] & 2, t2.value];
      switch (op[0]) {
        case 0:
        case 1:
          t2 = op;
          break;
        case 4:
          _2.label++;
          return { value: op[1], done: false };
        case 5:
          _2.label++;
          y2 = op[1];
          op = [0];
          continue;
        case 7:
          op = _2.ops.pop();
          _2.trys.pop();
          continue;
        default:
          if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _2 = 0;
            continue;
          }
          if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
            _2.label = op[1];
            break;
          }
          if (op[0] === 6 && _2.label < t2[1]) {
            _2.label = t2[1];
            t2 = op;
            break;
          }
          if (t2 && _2.label < t2[2]) {
            _2.label = t2[2];
            _2.ops.push(op);
            break;
          }
          if (t2[2]) _2.ops.pop();
          _2.trys.pop();
          continue;
      }
      op = body.call(thisArg, _2);
    } catch (e2) {
      op = [6, e2];
      y2 = 0;
    } finally {
      f2 = t2 = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __spreadArray = function(to, from2) {
  for (var i2 = 0, il = from2.length, j2 = to.length; i2 < il; i2++, j2++)
    to[j2] = from2[i2];
  return to;
};
var __defProp2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = function(obj, key, value) {
  return key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
};
var __spreadValues = function(a2, b2) {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var _i = 0, _c2 = __getOwnPropSymbols(b2); _i < _c2.length; _i++) {
      var prop = _c2[_i];
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = function(a2, b2) {
  return __defProps(a2, __getOwnPropDescs(b2));
};
var __async = function(__this, __arguments, generator) {
  return new Promise(function(resolve, reject) {
    var fulfilled = function(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var rejected = function(value) {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var step = function(x2) {
      return x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    };
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length === 0)
    return void 0;
  if (typeof arguments[0] === "object")
    return compose;
  return compose.apply(null, arguments);
};
function isPlainObject$1(value) {
  if (typeof value !== "object" || value === null)
    return false;
  var proto = Object.getPrototypeOf(value);
  if (proto === null)
    return true;
  var baseProto = proto;
  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }
  return proto === baseProto;
}
function createAction(type, prepareAction) {
  function actionCreator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (prepareAction) {
      var prepared = prepareAction.apply(void 0, args);
      if (!prepared) {
        throw new Error("prepareAction did not return an object");
      }
      return __spreadValues(__spreadValues({
        type,
        payload: prepared.payload
      }, "meta" in prepared && { meta: prepared.meta }), "error" in prepared && { error: prepared.error });
    }
    return { type, payload: args[0] };
  }
  actionCreator.toString = function() {
    return "" + type;
  };
  actionCreator.type = type;
  actionCreator.match = function(action2) {
    return action2.type === type;
  };
  return actionCreator;
}
var MiddlewareArray = (
  /** @class */
  function(_super) {
    __extends(MiddlewareArray2, _super);
    function MiddlewareArray2() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var _this = _super.apply(this, args) || this;
      Object.setPrototypeOf(_this, MiddlewareArray2.prototype);
      return _this;
    }
    Object.defineProperty(MiddlewareArray2, Symbol.species, {
      get: function() {
        return MiddlewareArray2;
      },
      enumerable: false,
      configurable: true
    });
    MiddlewareArray2.prototype.concat = function() {
      var arr = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
      }
      return _super.prototype.concat.apply(this, arr);
    };
    MiddlewareArray2.prototype.prepend = function() {
      var arr = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
      }
      if (arr.length === 1 && Array.isArray(arr[0])) {
        return new (MiddlewareArray2.bind.apply(MiddlewareArray2, __spreadArray([void 0], arr[0].concat(this))))();
      }
      return new (MiddlewareArray2.bind.apply(MiddlewareArray2, __spreadArray([void 0], arr.concat(this))))();
    };
    return MiddlewareArray2;
  }(Array)
);
var EnhancerArray = (
  /** @class */
  function(_super) {
    __extends(EnhancerArray2, _super);
    function EnhancerArray2() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var _this = _super.apply(this, args) || this;
      Object.setPrototypeOf(_this, EnhancerArray2.prototype);
      return _this;
    }
    Object.defineProperty(EnhancerArray2, Symbol.species, {
      get: function() {
        return EnhancerArray2;
      },
      enumerable: false,
      configurable: true
    });
    EnhancerArray2.prototype.concat = function() {
      var arr = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
      }
      return _super.prototype.concat.apply(this, arr);
    };
    EnhancerArray2.prototype.prepend = function() {
      var arr = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
      }
      if (arr.length === 1 && Array.isArray(arr[0])) {
        return new (EnhancerArray2.bind.apply(EnhancerArray2, __spreadArray([void 0], arr[0].concat(this))))();
      }
      return new (EnhancerArray2.bind.apply(EnhancerArray2, __spreadArray([void 0], arr.concat(this))))();
    };
    return EnhancerArray2;
  }(Array)
);
function freezeDraftable(val) {
  return t(val) ? fn(val, function() {
  }) : val;
}
function isBoolean$1(x2) {
  return typeof x2 === "boolean";
}
function curryGetDefaultMiddleware() {
  return function curriedGetDefaultMiddleware(options) {
    return getDefaultMiddleware(options);
  };
}
function getDefaultMiddleware(options) {
  if (options === void 0) {
    options = {};
  }
  var _c2 = options.thunk, thunk$1 = _c2 === void 0 ? true : _c2;
  options.immutableCheck;
  options.serializableCheck;
  options.actionCreatorCheck;
  var middlewareArray = new MiddlewareArray();
  if (thunk$1) {
    if (isBoolean$1(thunk$1)) {
      middlewareArray.push(thunk);
    } else {
      middlewareArray.push(thunk.withExtraArgument(thunk$1.extraArgument));
    }
  }
  return middlewareArray;
}
var IS_PRODUCTION = true;
function configureStore(options) {
  var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();
  var _c2 = options || {}, _d2 = _c2.reducer, reducer = _d2 === void 0 ? void 0 : _d2, _e = _c2.middleware, middleware = _e === void 0 ? curriedGetDefaultMiddleware() : _e, _f = _c2.devTools, devTools = _f === void 0 ? true : _f, _g = _c2.preloadedState, preloadedState = _g === void 0 ? void 0 : _g, _h = _c2.enhancers, enhancers = _h === void 0 ? void 0 : _h;
  var rootReducer;
  if (typeof reducer === "function") {
    rootReducer = reducer;
  } else if (isPlainObject$1(reducer)) {
    rootReducer = combineReducers(reducer);
  } else {
    throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
  }
  var finalMiddleware = middleware;
  if (typeof finalMiddleware === "function") {
    finalMiddleware = finalMiddleware(curriedGetDefaultMiddleware);
  }
  var middlewareEnhancer = applyMiddleware.apply(void 0, finalMiddleware);
  var finalCompose = compose;
  if (devTools) {
    finalCompose = composeWithDevTools(__spreadValues({
      trace: !IS_PRODUCTION
    }, typeof devTools === "object" && devTools));
  }
  var defaultEnhancers = new EnhancerArray(middlewareEnhancer);
  var storeEnhancers = defaultEnhancers;
  if (Array.isArray(enhancers)) {
    storeEnhancers = __spreadArray([middlewareEnhancer], enhancers);
  } else if (typeof enhancers === "function") {
    storeEnhancers = enhancers(defaultEnhancers);
  }
  var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
  return createStore(rootReducer, preloadedState, composedEnhancer);
}
function executeReducerBuilderCallback(builderCallback) {
  var actionsMap = {};
  var actionMatchers = [];
  var defaultCaseReducer;
  var builder = {
    addCase: function(typeOrActionCreator, reducer) {
      var type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
      if (!type) {
        throw new Error("`builder.addCase` cannot be called with an empty action type");
      }
      if (type in actionsMap) {
        throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");
      }
      actionsMap[type] = reducer;
      return builder;
    },
    addMatcher: function(matcher, reducer) {
      actionMatchers.push({ matcher, reducer });
      return builder;
    },
    addDefaultCase: function(reducer) {
      defaultCaseReducer = reducer;
      return builder;
    }
  };
  builderCallback(builder);
  return [actionsMap, actionMatchers, defaultCaseReducer];
}
function isStateFunction(x2) {
  return typeof x2 === "function";
}
function createReducer(initialState, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
  if (actionMatchers === void 0) {
    actionMatchers = [];
  }
  var _c2 = typeof mapOrBuilderCallback === "function" ? executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer], actionsMap = _c2[0], finalActionMatchers = _c2[1], finalDefaultCaseReducer = _c2[2];
  var getInitialState;
  if (isStateFunction(initialState)) {
    getInitialState = function() {
      return freezeDraftable(initialState());
    };
  } else {
    var frozenInitialState_1 = freezeDraftable(initialState);
    getInitialState = function() {
      return frozenInitialState_1;
    };
  }
  function reducer(state, action2) {
    if (state === void 0) {
      state = getInitialState();
    }
    var caseReducers = __spreadArray([
      actionsMap[action2.type]
    ], finalActionMatchers.filter(function(_c22) {
      var matcher = _c22.matcher;
      return matcher(action2);
    }).map(function(_c22) {
      var reducer2 = _c22.reducer;
      return reducer2;
    }));
    if (caseReducers.filter(function(cr) {
      return !!cr;
    }).length === 0) {
      caseReducers = [finalDefaultCaseReducer];
    }
    return caseReducers.reduce(function(previousState, caseReducer) {
      if (caseReducer) {
        if (r(previousState)) {
          var draft = previousState;
          var result = caseReducer(draft, action2);
          if (result === void 0) {
            return previousState;
          }
          return result;
        } else if (!t(previousState)) {
          var result = caseReducer(previousState, action2);
          if (result === void 0) {
            if (previousState === null) {
              return previousState;
            }
            throw Error("A case reducer on a non-draftable value must not return undefined");
          }
          return result;
        } else {
          return fn(previousState, function(draft2) {
            return caseReducer(draft2, action2);
          });
        }
      }
      return previousState;
    }, state);
  }
  reducer.getInitialState = getInitialState;
  return reducer;
}
function getType2(slice2, actionKey) {
  return slice2 + "/" + actionKey;
}
function createSlice(options) {
  var name = options.name;
  if (!name) {
    throw new Error("`name` is a required option for createSlice");
  }
  if (typeof process !== "undefined" && false) {
    if (options.initialState === void 0) {
      console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    }
  }
  var initialState = typeof options.initialState == "function" ? options.initialState : freezeDraftable(options.initialState);
  var reducers = options.reducers || {};
  var reducerNames = Object.keys(reducers);
  var sliceCaseReducersByName = {};
  var sliceCaseReducersByType = {};
  var actionCreators = {};
  reducerNames.forEach(function(reducerName) {
    var maybeReducerWithPrepare = reducers[reducerName];
    var type = getType2(name, reducerName);
    var caseReducer;
    var prepareCallback;
    if ("reducer" in maybeReducerWithPrepare) {
      caseReducer = maybeReducerWithPrepare.reducer;
      prepareCallback = maybeReducerWithPrepare.prepare;
    } else {
      caseReducer = maybeReducerWithPrepare;
    }
    sliceCaseReducersByName[reducerName] = caseReducer;
    sliceCaseReducersByType[type] = caseReducer;
    actionCreators[reducerName] = prepareCallback ? createAction(type, prepareCallback) : createAction(type);
  });
  function buildReducer() {
    var _c2 = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers], _d2 = _c2[0], extraReducers = _d2 === void 0 ? {} : _d2, _e = _c2[1], actionMatchers = _e === void 0 ? [] : _e, _f = _c2[2], defaultCaseReducer = _f === void 0 ? void 0 : _f;
    var finalCaseReducers = __spreadValues(__spreadValues({}, extraReducers), sliceCaseReducersByType);
    return createReducer(initialState, function(builder) {
      for (var key in finalCaseReducers) {
        builder.addCase(key, finalCaseReducers[key]);
      }
      for (var _i = 0, actionMatchers_1 = actionMatchers; _i < actionMatchers_1.length; _i++) {
        var m2 = actionMatchers_1[_i];
        builder.addMatcher(m2.matcher, m2.reducer);
      }
      if (defaultCaseReducer) {
        builder.addDefaultCase(defaultCaseReducer);
      }
    });
  }
  var _reducer;
  return {
    name,
    reducer: function(state, action2) {
      if (!_reducer)
        _reducer = buildReducer();
      return _reducer(state, action2);
    },
    actions: actionCreators,
    caseReducers: sliceCaseReducersByName,
    getInitialState: function() {
      if (!_reducer)
        _reducer = buildReducer();
      return _reducer.getInitialState();
    }
  };
}
var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var nanoid = function(size) {
  if (size === void 0) {
    size = 21;
  }
  var id = "";
  var i2 = size;
  while (i2--) {
    id += urlAlphabet[Math.random() * 64 | 0];
  }
  return id;
};
var commonProperties = [
  "name",
  "message",
  "stack",
  "code"
];
var RejectWithValue = (
  /** @class */
  /* @__PURE__ */ function() {
    function RejectWithValue2(payload, meta) {
      this.payload = payload;
      this.meta = meta;
    }
    return RejectWithValue2;
  }()
);
var FulfillWithMeta = (
  /** @class */
  /* @__PURE__ */ function() {
    function FulfillWithMeta2(payload, meta) {
      this.payload = payload;
      this.meta = meta;
    }
    return FulfillWithMeta2;
  }()
);
var miniSerializeError = function(value) {
  if (typeof value === "object" && value !== null) {
    var simpleError = {};
    for (var _i = 0, commonProperties_1 = commonProperties; _i < commonProperties_1.length; _i++) {
      var property = commonProperties_1[_i];
      if (typeof value[property] === "string") {
        simpleError[property] = value[property];
      }
    }
    return simpleError;
  }
  return { message: String(value) };
};
(function() {
  function createAsyncThunk2(typePrefix, payloadCreator, options) {
    var fulfilled = createAction(typePrefix + "/fulfilled", function(payload, requestId, arg, meta) {
      return {
        payload,
        meta: __spreadProps(__spreadValues({}, meta || {}), {
          arg,
          requestId,
          requestStatus: "fulfilled"
        })
      };
    });
    var pending = createAction(typePrefix + "/pending", function(requestId, arg, meta) {
      return {
        payload: void 0,
        meta: __spreadProps(__spreadValues({}, meta || {}), {
          arg,
          requestId,
          requestStatus: "pending"
        })
      };
    });
    var rejected = createAction(typePrefix + "/rejected", function(error2, requestId, arg, payload, meta) {
      return {
        payload,
        error: (options && options.serializeError || miniSerializeError)(error2 || "Rejected"),
        meta: __spreadProps(__spreadValues({}, meta || {}), {
          arg,
          requestId,
          rejectedWithValue: !!payload,
          requestStatus: "rejected",
          aborted: (error2 == null ? void 0 : error2.name) === "AbortError",
          condition: (error2 == null ? void 0 : error2.name) === "ConditionError"
        })
      };
    });
    var AC = typeof AbortController !== "undefined" ? AbortController : (
      /** @class */
      function() {
        function class_1() {
          this.signal = {
            aborted: false,
            addEventListener: function() {
            },
            dispatchEvent: function() {
              return false;
            },
            onabort: function() {
            },
            removeEventListener: function() {
            },
            reason: void 0,
            throwIfAborted: function() {
            }
          };
        }
        class_1.prototype.abort = function() {
        };
        return class_1;
      }()
    );
    function actionCreator(arg) {
      return function(dispatch, getState, extra) {
        var requestId = (options == null ? void 0 : options.idGenerator) ? options.idGenerator(arg) : nanoid();
        var abortController = new AC();
        var abortReason;
        function abort(reason) {
          abortReason = reason;
          abortController.abort();
        }
        var promise2 = function() {
          return __async(this, null, function() {
            var _a2, _b2, finalAction, conditionResult, abortedPromise, err_1, skipDispatch;
            return __generator(this, function(_c2) {
              switch (_c2.label) {
                case 0:
                  _c2.trys.push([0, 4, , 5]);
                  conditionResult = (_a2 = options == null ? void 0 : options.condition) == null ? void 0 : _a2.call(options, arg, { getState, extra });
                  if (!isThenable$1(conditionResult)) return [3, 2];
                  return [4, conditionResult];
                case 1:
                  conditionResult = _c2.sent();
                  _c2.label = 2;
                case 2:
                  if (conditionResult === false || abortController.signal.aborted) {
                    throw {
                      name: "ConditionError",
                      message: "Aborted due to condition callback returning false."
                    };
                  }
                  abortedPromise = new Promise(function(_2, reject) {
                    return abortController.signal.addEventListener("abort", function() {
                      return reject({
                        name: "AbortError",
                        message: abortReason || "Aborted"
                      });
                    });
                  });
                  dispatch(pending(requestId, arg, (_b2 = options == null ? void 0 : options.getPendingMeta) == null ? void 0 : _b2.call(options, { requestId, arg }, { getState, extra })));
                  return [4, Promise.race([
                    abortedPromise,
                    Promise.resolve(payloadCreator(arg, {
                      dispatch,
                      getState,
                      extra,
                      requestId,
                      signal: abortController.signal,
                      abort,
                      rejectWithValue: function(value, meta) {
                        return new RejectWithValue(value, meta);
                      },
                      fulfillWithValue: function(value, meta) {
                        return new FulfillWithMeta(value, meta);
                      }
                    })).then(function(result) {
                      if (result instanceof RejectWithValue) {
                        throw result;
                      }
                      if (result instanceof FulfillWithMeta) {
                        return fulfilled(result.payload, requestId, arg, result.meta);
                      }
                      return fulfilled(result, requestId, arg);
                    })
                  ])];
                case 3:
                  finalAction = _c2.sent();
                  return [3, 5];
                case 4:
                  err_1 = _c2.sent();
                  finalAction = err_1 instanceof RejectWithValue ? rejected(null, requestId, arg, err_1.payload, err_1.meta) : rejected(err_1, requestId, arg);
                  return [3, 5];
                case 5:
                  skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
                  if (!skipDispatch) {
                    dispatch(finalAction);
                  }
                  return [2, finalAction];
              }
            });
          });
        }();
        return Object.assign(promise2, {
          abort,
          requestId,
          arg,
          unwrap: function() {
            return promise2.then(unwrapResult);
          }
        });
      };
    }
    return Object.assign(actionCreator, {
      pending,
      rejected,
      fulfilled,
      typePrefix
    });
  }
  createAsyncThunk2.withTypes = function() {
    return createAsyncThunk2;
  };
  return createAsyncThunk2;
})();
function unwrapResult(action2) {
  if (action2.meta && action2.meta.rejectedWithValue) {
    throw action2.payload;
  }
  if (action2.error) {
    throw action2.error;
  }
  return action2.payload;
}
function isThenable$1(value) {
  return value !== null && typeof value === "object" && typeof value.then === "function";
}
var alm = "listenerMiddleware";
createAction(alm + "/add");
createAction(alm + "/removeAll");
createAction(alm + "/remove");
var promise;
typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : globalThis) : function(cb) {
  return (promise || (promise = Promise.resolve())).then(cb).catch(function(err) {
    return setTimeout(function() {
      throw err;
    }, 0);
  });
};
F();
let qlarrDependents = {};
const runState = createSlice({
  name: "runState",
  initialState: { state: {} },
  reducers: {
    valueChange: (state, action2) => {
      setValueInState(state, action2.payload);
    },
    orderChange: (state, action2) => {
      let keys = Object.keys(action2.payload);
      if (!state.order) {
        state.order = {};
      }
      keys.forEach((key) => state.order[key] = action2.payload[key]);
    },
    stateReceived: (state, action2) => {
      let keys = Object.keys(state);
      keys.forEach((key) => delete state[key]);
      state.preview = action2.payload.preview;
      let response = action2.payload.response;
      qlarrDependents = response.state.qlarrDependents;
      state.navigation = void 0;
      state.data = {
        survey: response.survey,
        navigationIndex: response.navigationIndex,
        additionalLang: response.additionalLang,
        lang: response.lang,
        responseId: response.responseId
      };
      state.values = response.state.qlarrVariables;
    },
    langChange: (state, action2) => {
      state.navigation = {
        values: getValues(state.values),
        lang: action2.payload.lang,
        navigationDirection: { name: "CHANGE_LANGE" }
      };
    },
    navigateNext: (state) => {
      next$1(state);
    },
    navigatePrevious: (state) => {
      state.navigation = {
        navigationDirection: { name: "PREV" }
      };
    },
    jump: (state, action2) => {
      state.navigation = {
        values: getValues(state.values),
        navigationDirection: { name: "JUMP", navigationIndex: action2.payload }
      };
    }
  }
});
const {
  valueChange,
  orderChange,
  stateReceived,
  langChange,
  navigateNext,
  navigatePrevious,
  jump
} = runState.actions;
const runState$1 = runState.reducer;
function setValueInState(state, payload) {
  let componentCode = payload.componentCode;
  logTimes(state, componentCode);
  let value = payload.value;
  let element = state.values[componentCode];
  if (typeof element !== "undefined" && element["value"] !== value) {
    let time = Date.now();
    window.qlarrStateMachine(
      state.values,
      qlarrDependents,
      window.qlarrRuntime,
      componentCode,
      "value",
      value,
      "VALUE CHANGE"
    );
    console.debug("NEW STATE in: " + (Date.now() - time) + " millis");
  }
}
function logTimes(state, code) {
  if (!state.saveTimings) {
    return;
  }
  if (!state.timings) {
    state.timings = [];
  }
  let element = {
    code,
    time: (/* @__PURE__ */ new Date()).toISOString().split(".")[0].replace("T", " "),
    name: "ValueTiming"
  };
  if (state.timings.length > 0 && state.timings[state.timings.length - 1].code === code) {
    state.timings[state.timings.length - 1] = element;
  } else {
    state.timings.push(element);
  }
}
function next$1(state) {
  if (!state.values.Survey.validity) {
    state.values.Survey.show_errors = true;
  } else {
    state.values.Survey.show_errors = false;
    state.navigation = {
      values: getValues(state.values),
      navigationDirection: { name: "NEXT" }
    };
  }
}
function getValues(values2) {
  let retrunObj = {};
  for (var key in values2) {
    if (values2.hasOwnProperty(key)) {
      let element = values2[key];
      if (element.hasOwnProperty("value")) {
        let value = element["value"];
        if (typeof value !== "undefined") {
          retrunObj[key + ".value"] = value;
        }
      }
    }
  }
  return retrunObj;
}
const isEquivalent = (a2, b2) => {
  if (typeof a2 === "function" || typeof b2 === "function") {
    return false;
  } else if (typeof a2 !== "object" || typeof b2 !== "object") {
    return a2 === b2;
  }
  let aProps = a2 ? Object.getOwnPropertyNames(a2) : [];
  let bProps = b2 ? Object.getOwnPropertyNames(b2) : [];
  if (aProps.length !== bProps.length) {
    return false;
  }
  for (var i2 = 0; i2 < aProps.length; i2++) {
    let propName = aProps[i2];
    if (propName !== "key" && !isEquivalent(a2[propName], b2[propName])) {
      return false;
    }
  }
  return true;
};
const nextId = (elements) => {
  if (elements.length) {
    let arrayOfIntCodes = elements.filter((el) => el.type != "other").map((el) => el.code.replace(/^\D+/g, "")).filter((el) => el.length > 0);
    if (arrayOfIntCodes.length) {
      let intCodes = arrayOfIntCodes.map((el) => parseInt(el)).sort(function(a2, b2) {
        return a2 - b2;
      });
      if (intCodes) {
        return intCodes[intCodes.length - 1] + 1;
      }
    }
  }
  return 1;
};
const stripTags = (string) => {
  return string ? string.replace(/<[^>]*>?/gm, "").replace("\n", "").replace("&nbsp;", "") : string;
};
function truncateWithEllipsis(text, maxLength) {
  if ((text == null ? void 0 : text.length) > maxLength) {
    return text.substring(0, maxLength) + "...";
  } else {
    return text;
  }
}
const isQuestion = (code) => /^Q[a-z0-9_]+$/.test(code);
const isGroup = (code) => /^G[a-z0-9_]+$/.test(code);
const lastIndexInArray = (array, func) => {
  if (!array) {
    return -1;
  }
  let index = array.length - 1;
  for (; index >= 0; index--) {
    if (func(array[index])) {
      return index;
    }
  }
  return -1;
};
const isNotEmptyHtml = (value) => value && /[^<br><p><\/p>\s]/gm.test(value);
const leftPanelGroupItem = "_leftPanelGroupItem_1qo1l_1";
const topBar = "_topBar_1qo1l_6";
const groupTitle = "_groupTitle_1qo1l_10";
const iconMenu = "_iconMenu_1qo1l_18";
const tabHeader = "_tabHeader_1qo1l_22";
const leftContent = "_leftContent_1qo1l_36";
const close = "_close_1qo1l_44";
const styles$1 = {
  leftPanelGroupItem,
  topBar,
  groupTitle,
  iconMenu,
  tabHeader,
  leftContent,
  close
};
const leftPannelItem = "_leftPannelItem_6tarl_1";
const icon = "_icon_6tarl_19";
const title = "_title_6tarl_23";
const isDrayLayer = "_isDrayLayer_6tarl_27";
const styles = {
  leftPannelItem,
  icon,
  title,
  isDrayLayer
};
const DndContext = reactExports.createContext({
  dragDropManager: void 0
});
function invariant(condition, format, ...args) {
  if (isProduction()) {
    if (format === void 0) {
      throw new Error("invariant requires an error message argument");
    }
  }
  if (!condition) {
    let error2;
    if (format === void 0) {
      error2 = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    } else {
      let argIndex = 0;
      error2 = new Error(format.replace(/%s/g, function() {
        return args[argIndex++];
      }));
      error2.name = "Invariant Violation";
    }
    error2.framesToPop = 1;
    throw error2;
  }
}
function isProduction() {
  return typeof process !== "undefined" && true;
}
var fastDeepEqual = function equal(a2, b2) {
  if (a2 === b2) return true;
  if (a2 && b2 && typeof a2 == "object" && typeof b2 == "object") {
    if (a2.constructor !== b2.constructor) return false;
    var length2, i2, keys;
    if (Array.isArray(a2)) {
      length2 = a2.length;
      if (length2 != b2.length) return false;
      for (i2 = length2; i2-- !== 0; )
        if (!equal(a2[i2], b2[i2])) return false;
      return true;
    }
    if (a2.constructor === RegExp) return a2.source === b2.source && a2.flags === b2.flags;
    if (a2.valueOf !== Object.prototype.valueOf) return a2.valueOf() === b2.valueOf();
    if (a2.toString !== Object.prototype.toString) return a2.toString() === b2.toString();
    keys = Object.keys(a2);
    length2 = keys.length;
    if (length2 !== Object.keys(b2).length) return false;
    for (i2 = length2; i2-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b2, keys[i2])) return false;
    for (i2 = length2; i2-- !== 0; ) {
      var key = keys[i2];
      if (!equal(a2[key], b2[key])) return false;
    }
    return true;
  }
  return a2 !== a2 && b2 !== b2;
};
const equal2 = /* @__PURE__ */ getDefaultExportFromCjs(fastDeepEqual);
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? reactExports.useLayoutEffect : reactExports.useEffect;
function useCollector(monitor, collect, onUpdate) {
  const [collected, setCollected] = reactExports.useState(
    () => collect(monitor)
  );
  const updateCollected = reactExports.useCallback(() => {
    const nextValue = collect(monitor);
    if (!equal2(collected, nextValue)) {
      setCollected(nextValue);
      if (onUpdate) {
        onUpdate();
      }
    }
  }, [
    collected,
    monitor,
    onUpdate
  ]);
  useIsomorphicLayoutEffect(updateCollected);
  return [
    collected,
    updateCollected
  ];
}
function useMonitorOutput(monitor, collect, onCollect) {
  const [collected, updateCollected] = useCollector(monitor, collect, onCollect);
  useIsomorphicLayoutEffect(function subscribeToMonitorStateChange() {
    const handlerId = monitor.getHandlerId();
    if (handlerId == null) {
      return;
    }
    return monitor.subscribeToStateChange(updateCollected, {
      handlerIds: [
        handlerId
      ]
    });
  }, [
    monitor,
    updateCollected
  ]);
  return collected;
}
function useCollectedProps(collector, monitor, connector) {
  return useMonitorOutput(
    monitor,
    collector || (() => ({})),
    () => connector.reconnect()
  );
}
function useOptionalFactory(arg, deps) {
  const memoDeps = [
    ...deps || []
  ];
  if (deps == null && typeof arg !== "function") {
    memoDeps.push(arg);
  }
  return reactExports.useMemo(() => {
    return typeof arg === "function" ? arg() : arg;
  }, memoDeps);
}
function useConnectDragSource(connector) {
  return reactExports.useMemo(
    () => connector.hooks.dragSource(),
    [
      connector
    ]
  );
}
function useConnectDragPreview(connector) {
  return reactExports.useMemo(
    () => connector.hooks.dragPreview(),
    [
      connector
    ]
  );
}
let isCallingCanDrag = false;
let isCallingIsDragging = false;
class DragSourceMonitorImpl {
  receiveHandlerId(sourceId) {
    this.sourceId = sourceId;
  }
  getHandlerId() {
    return this.sourceId;
  }
  canDrag() {
    invariant(!isCallingCanDrag, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      isCallingCanDrag = true;
      return this.internalMonitor.canDragSource(this.sourceId);
    } finally {
      isCallingCanDrag = false;
    }
  }
  isDragging() {
    if (!this.sourceId) {
      return false;
    }
    invariant(!isCallingIsDragging, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      isCallingIsDragging = true;
      return this.internalMonitor.isDraggingSource(this.sourceId);
    } finally {
      isCallingIsDragging = false;
    }
  }
  subscribeToStateChange(listener, options) {
    return this.internalMonitor.subscribeToStateChange(listener, options);
  }
  isDraggingSource(sourceId) {
    return this.internalMonitor.isDraggingSource(sourceId);
  }
  isOverTarget(targetId, options) {
    return this.internalMonitor.isOverTarget(targetId, options);
  }
  getTargetIds() {
    return this.internalMonitor.getTargetIds();
  }
  isSourcePublic() {
    return this.internalMonitor.isSourcePublic();
  }
  getSourceId() {
    return this.internalMonitor.getSourceId();
  }
  subscribeToOffsetChange(listener) {
    return this.internalMonitor.subscribeToOffsetChange(listener);
  }
  canDragSource(sourceId) {
    return this.internalMonitor.canDragSource(sourceId);
  }
  canDropOnTarget(targetId) {
    return this.internalMonitor.canDropOnTarget(targetId);
  }
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getDropResult() {
    return this.internalMonitor.getDropResult();
  }
  didDrop() {
    return this.internalMonitor.didDrop();
  }
  getInitialClientOffset() {
    return this.internalMonitor.getInitialClientOffset();
  }
  getInitialSourceClientOffset() {
    return this.internalMonitor.getInitialSourceClientOffset();
  }
  getSourceClientOffset() {
    return this.internalMonitor.getSourceClientOffset();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
  getDifferenceFromInitialOffset() {
    return this.internalMonitor.getDifferenceFromInitialOffset();
  }
  constructor(manager) {
    this.sourceId = null;
    this.internalMonitor = manager.getMonitor();
  }
}
function registerTarget(type, target, manager) {
  const registry = manager.getRegistry();
  const targetId = registry.addTarget(type, target);
  return [
    targetId,
    () => registry.removeTarget(targetId)
  ];
}
function registerSource(type, source, manager) {
  const registry = manager.getRegistry();
  const sourceId = registry.addSource(type, source);
  return [
    sourceId,
    () => registry.removeSource(sourceId)
  ];
}
function shallowEqual(objA, objB, compare, compareContext) {
  let compareResult = void 0;
  if (compareResult !== void 0) {
    return !!compareResult;
  }
  if (objA === objB) {
    return true;
  }
  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (let idx = 0; idx < keysA.length; idx++) {
    const key = keysA[idx];
    if (!bHasOwnProperty(key)) {
      return false;
    }
    const valueA = objA[key];
    const valueB = objB[key];
    compareResult = void 0;
    if (compareResult === false || compareResult === void 0 && valueA !== valueB) {
      return false;
    }
  }
  return true;
}
function isRef(obj) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    obj !== null && typeof obj === "object" && Object.prototype.hasOwnProperty.call(obj, "current")
  );
}
function throwIfCompositeComponentElement(element) {
  if (typeof element.type === "string") {
    return;
  }
  const displayName = element.type.displayName || element.type.name || "the component";
  throw new Error("Only native element nodes can now be passed to React DnD connectors." + "You can either wrap ".concat(displayName, " into a <div>, or turn it into a ") + "drag source or a drop target itself.");
}
function wrapHookToRecognizeElement(hook) {
  return (elementOrNode = null, options = null) => {
    if (!reactExports.isValidElement(elementOrNode)) {
      const node2 = elementOrNode;
      hook(node2, options);
      return node2;
    }
    const element = elementOrNode;
    throwIfCompositeComponentElement(element);
    const ref = options ? (node2) => hook(node2, options) : hook;
    return cloneWithRef(element, ref);
  };
}
function wrapConnectorHooks(hooks) {
  const wrappedHooks = {};
  Object.keys(hooks).forEach((key) => {
    const hook = hooks[key];
    if (key.endsWith("Ref")) {
      wrappedHooks[key] = hooks[key];
    } else {
      const wrappedHook = wrapHookToRecognizeElement(hook);
      wrappedHooks[key] = () => wrappedHook;
    }
  });
  return wrappedHooks;
}
function setRef(ref, node2) {
  if (typeof ref === "function") {
    ref(node2);
  } else {
    ref.current = node2;
  }
}
function cloneWithRef(element, newRef) {
  const previousRef = element.ref;
  invariant(typeof previousRef !== "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs");
  if (!previousRef) {
    return reactExports.cloneElement(element, {
      ref: newRef
    });
  } else {
    return reactExports.cloneElement(element, {
      ref: (node2) => {
        setRef(previousRef, node2);
        setRef(newRef, node2);
      }
    });
  }
}
class SourceConnector {
  receiveHandlerId(newHandlerId) {
    if (this.handlerId === newHandlerId) {
      return;
    }
    this.handlerId = newHandlerId;
    this.reconnect();
  }
  get connectTarget() {
    return this.dragSource;
  }
  get dragSourceOptions() {
    return this.dragSourceOptionsInternal;
  }
  set dragSourceOptions(options) {
    this.dragSourceOptionsInternal = options;
  }
  get dragPreviewOptions() {
    return this.dragPreviewOptionsInternal;
  }
  set dragPreviewOptions(options) {
    this.dragPreviewOptionsInternal = options;
  }
  reconnect() {
    const didChange = this.reconnectDragSource();
    this.reconnectDragPreview(didChange);
  }
  reconnectDragSource() {
    const dragSource = this.dragSource;
    const didChange = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
    if (didChange) {
      this.disconnectDragSource();
    }
    if (!this.handlerId) {
      return didChange;
    }
    if (!dragSource) {
      this.lastConnectedDragSource = dragSource;
      return didChange;
    }
    if (didChange) {
      this.lastConnectedHandlerId = this.handlerId;
      this.lastConnectedDragSource = dragSource;
      this.lastConnectedDragSourceOptions = this.dragSourceOptions;
      this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, dragSource, this.dragSourceOptions);
    }
    return didChange;
  }
  reconnectDragPreview(forceDidChange = false) {
    const dragPreview = this.dragPreview;
    const didChange = forceDidChange || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
    if (didChange) {
      this.disconnectDragPreview();
    }
    if (!this.handlerId) {
      return;
    }
    if (!dragPreview) {
      this.lastConnectedDragPreview = dragPreview;
      return;
    }
    if (didChange) {
      this.lastConnectedHandlerId = this.handlerId;
      this.lastConnectedDragPreview = dragPreview;
      this.lastConnectedDragPreviewOptions = this.dragPreviewOptions;
      this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, dragPreview, this.dragPreviewOptions);
    }
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didConnectedDragSourceChange() {
    return this.lastConnectedDragSource !== this.dragSource;
  }
  didConnectedDragPreviewChange() {
    return this.lastConnectedDragPreview !== this.dragPreview;
  }
  didDragSourceOptionsChange() {
    return !shallowEqual(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
  }
  didDragPreviewOptionsChange() {
    return !shallowEqual(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
  }
  disconnectDragSource() {
    if (this.dragSourceUnsubscribe) {
      this.dragSourceUnsubscribe();
      this.dragSourceUnsubscribe = void 0;
    }
  }
  disconnectDragPreview() {
    if (this.dragPreviewUnsubscribe) {
      this.dragPreviewUnsubscribe();
      this.dragPreviewUnsubscribe = void 0;
      this.dragPreviewNode = null;
      this.dragPreviewRef = null;
    }
  }
  get dragSource() {
    return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
  }
  get dragPreview() {
    return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
  }
  clearDragSource() {
    this.dragSourceNode = null;
    this.dragSourceRef = null;
  }
  clearDragPreview() {
    this.dragPreviewNode = null;
    this.dragPreviewRef = null;
  }
  constructor(backend) {
    this.hooks = wrapConnectorHooks({
      dragSource: (node2, options) => {
        this.clearDragSource();
        this.dragSourceOptions = options || null;
        if (isRef(node2)) {
          this.dragSourceRef = node2;
        } else {
          this.dragSourceNode = node2;
        }
        this.reconnectDragSource();
      },
      dragPreview: (node2, options) => {
        this.clearDragPreview();
        this.dragPreviewOptions = options || null;
        if (isRef(node2)) {
          this.dragPreviewRef = node2;
        } else {
          this.dragPreviewNode = node2;
        }
        this.reconnectDragPreview();
      }
    });
    this.handlerId = null;
    this.dragSourceRef = null;
    this.dragSourceOptionsInternal = null;
    this.dragPreviewRef = null;
    this.dragPreviewOptionsInternal = null;
    this.lastConnectedHandlerId = null;
    this.lastConnectedDragSource = null;
    this.lastConnectedDragSourceOptions = null;
    this.lastConnectedDragPreview = null;
    this.lastConnectedDragPreviewOptions = null;
    this.backend = backend;
  }
}
function useDragDropManager() {
  const { dragDropManager } = reactExports.useContext(DndContext);
  invariant(dragDropManager != null, "Expected drag drop context");
  return dragDropManager;
}
function useDragSourceConnector(dragSourceOptions, dragPreviewOptions) {
  const manager = useDragDropManager();
  const connector = reactExports.useMemo(
    () => new SourceConnector(manager.getBackend()),
    [
      manager
    ]
  );
  useIsomorphicLayoutEffect(() => {
    connector.dragSourceOptions = dragSourceOptions || null;
    connector.reconnect();
    return () => connector.disconnectDragSource();
  }, [
    connector,
    dragSourceOptions
  ]);
  useIsomorphicLayoutEffect(() => {
    connector.dragPreviewOptions = dragPreviewOptions || null;
    connector.reconnect();
    return () => connector.disconnectDragPreview();
  }, [
    connector,
    dragPreviewOptions
  ]);
  return connector;
}
function useDragSourceMonitor() {
  const manager = useDragDropManager();
  return reactExports.useMemo(
    () => new DragSourceMonitorImpl(manager),
    [
      manager
    ]
  );
}
class DragSourceImpl {
  beginDrag() {
    const spec = this.spec;
    const monitor = this.monitor;
    let result = null;
    if (typeof spec.item === "object") {
      result = spec.item;
    } else if (typeof spec.item === "function") {
      result = spec.item(monitor);
    } else {
      result = {};
    }
    return result !== null && result !== void 0 ? result : null;
  }
  canDrag() {
    const spec = this.spec;
    const monitor = this.monitor;
    if (typeof spec.canDrag === "boolean") {
      return spec.canDrag;
    } else if (typeof spec.canDrag === "function") {
      return spec.canDrag(monitor);
    } else {
      return true;
    }
  }
  isDragging(globalMonitor, target) {
    const spec = this.spec;
    const monitor = this.monitor;
    const { isDragging } = spec;
    return isDragging ? isDragging(monitor) : target === globalMonitor.getSourceId();
  }
  endDrag() {
    const spec = this.spec;
    const monitor = this.monitor;
    const connector = this.connector;
    const { end } = spec;
    if (end) {
      end(monitor.getItem(), monitor);
    }
    connector.reconnect();
  }
  constructor(spec, monitor, connector) {
    this.spec = spec;
    this.monitor = monitor;
    this.connector = connector;
  }
}
function useDragSource(spec, monitor, connector) {
  const handler = reactExports.useMemo(
    () => new DragSourceImpl(spec, monitor, connector),
    [
      monitor,
      connector
    ]
  );
  reactExports.useEffect(() => {
    handler.spec = spec;
  }, [
    spec
  ]);
  return handler;
}
function useDragType(spec) {
  return reactExports.useMemo(() => {
    const result = spec.type;
    invariant(result != null, "spec.type must be defined");
    return result;
  }, [
    spec
  ]);
}
function useRegisteredDragSource(spec, monitor, connector) {
  const manager = useDragDropManager();
  const handler = useDragSource(spec, monitor, connector);
  const itemType = useDragType(spec);
  useIsomorphicLayoutEffect(function registerDragSource() {
    if (itemType != null) {
      const [handlerId, unregister] = registerSource(itemType, handler, manager);
      monitor.receiveHandlerId(handlerId);
      connector.receiveHandlerId(handlerId);
      return unregister;
    }
    return;
  }, [
    manager,
    monitor,
    connector,
    handler,
    itemType
  ]);
}
function useDrag(specArg, deps) {
  const spec = useOptionalFactory(specArg, deps);
  invariant(!spec.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  const monitor = useDragSourceMonitor();
  const connector = useDragSourceConnector(spec.options, spec.previewOptions);
  useRegisteredDragSource(spec, monitor, connector);
  return [
    useCollectedProps(spec.collect, monitor, connector),
    useConnectDragSource(connector),
    useConnectDragPreview(connector)
  ];
}
function NewComponentsItem({ t: t2, item, onClick }) {
  const [isDragging, drag] = useDrag({
    type: item.type,
    item: {
      draggableId: item.draggableId,
      droppableId: item.droppableId,
      itemType: item.itemType,
      type: item.type
    },
    collect: (monitor) => {
      return monitor.isDragging();
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: drag,
      className: styles.leftPannelItem + ((item == null ? void 0 : item.dragLayer) ? " " + styles.isDrayLayer : ""),
      onClick,
      children: [
        item.icon,
        t2("component_" + item.itemType + "_title")
      ]
    }
  );
}
var createSvgIcon = {};
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(utils$2);
var hasRequiredCreateSvgIcon;
function requireCreateSvgIcon() {
  if (hasRequiredCreateSvgIcon) return createSvgIcon;
  hasRequiredCreateSvgIcon = 1;
  (function(exports) {
    "use client";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _utils.createSvgIcon;
      }
    });
    var _utils = require$$0;
  })(createSvgIcon);
  return createSvgIcon;
}
const iconPaths = {
  capturePhoto: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      ...props,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 19.24 19.24",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Isolation_Mode", "data-name": "Isolation Mode", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M17.18,13.06v-6.87c0-1.55-1.26-2.8-2.8-2.8H4.87c-1.55,0-2.8,1.26-2.8,2.8v6.87c0,1.55,1.26,2.8,2.8,2.8h9.51c1.55,0,2.8-1.26,2.8-2.8ZM11.62,5.33c.93,0,1.68.75,1.68,1.68s-.75,1.68-1.68,1.68-1.68-.75-1.68-1.68c0-.93.75-1.68,1.68-1.68ZM13.26,13.03c-.14.24-.4.38-.71.38h-6.74c-.31,0-.58-.14-.72-.38s-.12-.54.03-.8c.79-1.36,1.53-2.62,2.25-3.85.16-.27.4-.42.67-.42h0c.27,0,.53.16.68.43.34.59.69,1.18,1.03,1.77l.39.66.13-.23c.1-.18.21-.37.32-.57.15-.25.4-.41.67-.41h0c.27,0,.52.15.67.4.45.78.87,1.5,1.28,2.21.15.26.16.56.03.8h0Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M17.18,0h-2.06c-.38,0-.69.31-.69.69s.31.69.69.69h2.06c.38,0,.69.31.69.69v2.06c0,.38.31.69.69.69s.69-.31.69-.69v-2.06c0-1.14-.92-2.06-2.06-2.06Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M.69,4.81c.38,0,.69-.31.69-.69v-2.06c0-.38.31-.69.69-.69h2.06c.38,0,.69-.31.69-.69s-.31-.69-.69-.69h-2.06C.92,0,0,.92,0,2.06v2.06c0,.38.31.69.69.69Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M2.06,19.24h2.06c.38,0,.69-.31.69-.69s-.31-.69-.69-.69h-2.06c-.38,0-.69-.31-.69-.69v-2.06c0-.38-.31-.69-.69-.69s-.69.31-.69.69v2.06c0,1.14.92,2.06,2.06,2.06Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M18.55,14.43c-.38,0-.69.31-.69.69v2.06c0,.38-.31.69-.69.69h-2.06c-.38,0-.69.31-.69.69s.31.69.69.69h2.06c1.14,0,2.06-.92,2.06-2.06v-2.06c0-.38-.31-.69-.69-.69Z"
          }
        )
      ] }) })
    }
  ),
  captureVideo: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      ...props,
      id: "Layer_2",
      "data-name": "Layer 2",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 18.49 18.49",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Isolation_Mode", "data-name": "Isolation Mode", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M10.64,3.96h-6.08c-1.51,0-2.74,1.23-2.74,2.74v5.08c0,1.51,1.23,2.74,2.74,2.74h6.08c1.51,0,2.74-1.23,2.74-2.74v-.07l.54.43c.52.41,1.21.48,1.8.2.59-.29.96-.87.96-1.53v-3.11c0-.66-.37-1.24-.96-1.53-.59-.29-1.28-.21-1.8.2l-.54.43v-.07c0-1.51-1.23-2.74-2.74-2.74Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M16.51,0h-1.98c-.36,0-.66.3-.66.66s.3.66.66.66h1.98c.36,0,.66.3.66.66v1.98c0,.36.3.66.66.66s.66-.3.66-.66v-1.98c0-1.09-.89-1.98-1.98-1.98Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M0,3.96c0,.36.3.66.66.66s.66-.3.66-.66v-1.98c0-.36.3-.66.66-.66h1.98c.36,0,.66-.3.66-.66s-.3-.66-.66-.66h-1.98C.89,0,0,.89,0,1.98v1.98Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M4.62,17.83c0-.36-.3-.66-.66-.66h-1.98c-.36,0-.66-.3-.66-.66v-1.98c0-.36-.3-.66-.66-.66s-.66.3-.66.66v1.98c0,1.09.89,1.98,1.98,1.98h1.98c.36,0,.66-.3.66-.66Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M17.83,13.87c-.36,0-.66.3-.66.66v1.98c0,.36-.3.66-.66.66h-1.98c-.36,0-.66.3-.66.66s.3.66.66.66h1.98c1.09,0,1.98-.89,1.98-1.98v-1.98c0-.36-.3-.66-.66-.66Z"
          }
        )
      ] }) })
    }
  ),
  closeSidebar: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { ...props, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 9.35 8.31", children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Isolation_Mode", "data-name": "Isolation Mode", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "path",
    {
      className: "cls-1",
      d: "M.69,0c.38,0,.69.31.69.69v6.93c0,.38-.31.69-.69.69s-.69-.31-.69-.69V.69c0-.38.31-.69.69-.69ZM8.66,3.46h-4.21s0,0,0,0l.88-.88c.27-.27.28-.7.02-.98s-.72-.29-.99-.01l-2.08,2.08c-.27.27-.27.71,0,.98l2.07,2.07c.27.27.7.28.98.02s.29-.72.01-.99l-.89-.89s0,0,0,0h4.21c.38,0,.69-.31.69-.69h0c0-.38-.31-.69-.69-.69Z"
    }
  ) }) }),
  duplicate: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      ...props,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 12.86 12.86",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Isolation_Mode", "data-name": "Isolation Mode", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          className: "cls-1",
          d: "M7.23,11.25H1.61v-5.63h1.61v-1.61h-1.61c-.89,0-1.61.72-1.61,1.61v5.63c0,.89.72,1.61,1.61,1.61h5.63c.89,0,1.61-.72,1.61-1.61v-1.61h-1.61v1.61ZM5.63,8.84h5.63c.89,0,1.61-.72,1.61-1.61V1.61c0-.89-.72-1.61-1.61-1.61h-5.63c-.89,0-1.61.72-1.61,1.61v5.63c0,.89.72,1.61,1.61,1.61Z"
        }
      ) })
    }
  ),
  date: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      ...props,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 19.72 19.63",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Isolation_Mode", "data-name": "Isolation Mode", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M4.36,0C3.99,0,3.69.3,3.69.66v3.13c0,.37.3.66.66.66h.57c.37,0,.66-.3.66-.66V.66C5.59.3,5.29,0,4.93,0h-.57Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M14.79,0C14.42,0,14.13.3,14.13.66v3.13c0,.37.3.66.66.66h.57c.37,0,.66-.3.66-.66V.66C16.02.3,15.72,0,15.36,0h-.57Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M18.2,2.18h-1.23v1.61c0,.89-.72,1.61-1.61,1.61h-.57c-.89,0-1.61-.72-1.61-1.61v-1.61h-6.64v1.61c0,.89-.72,1.61-1.61,1.61h-.57c-.89,0-1.61-.72-1.61-1.61v-1.61h-1.24c-.83,0-1.51.68-1.51,1.52v14.41c0,.84.68,1.52,1.51,1.52h16.69c.84,0,1.52-.68,1.52-1.52V3.7c0-.84-.68-1.52-1.52-1.52ZM18.01,16.59c0,.63-.51,1.14-1.13,1.14H2.84c-.63,0-1.14-.51-1.14-1.14V7.49h16.31v9.1Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "cls-1", cx: "5.34", cy: "10.34", r: "1.51" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "cls-1", cx: "9.86", cy: "10.34", r: "1.51" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "cls-1", cx: "14.37", cy: "10.34", r: "1.51" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "cls-1", cx: "9.86", cy: "14.89", r: "1.51" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "cls-1", cx: "5.34", cy: "14.89", r: "1.51" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M15.36,0c.37,0,.66.3.66.66v1.52s0,1.61,0,1.61c0,.37-.3.66-.66.66h-.57c-.37,0-.66-.3-.66-.66v-1.61s0-1.52,0-1.52c0-.37.3-.66.66-.66h.57Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "cls-1", cx: "14.37", cy: "10.34", r: "1.51" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "cls-1", cx: "9.86", cy: "10.34", r: "1.51" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "cls-1", cx: "9.86", cy: "14.89", r: "1.51" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "cls-1", cx: "14.37", cy: "14.89", r: "1.51" })
      ] }) })
    }
  ),
  datetime: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      ...props,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24.28 24.28",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Isolation_Mode", "data-name": "Isolation Mode", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M24.28,18.4c0-2.79-1.94-5.12-4.55-5.73-.43-.1-.87-.15-1.33-.15-.13,0-.25,0-.38.01-2.85.18-5.15,2.39-5.46,5.2-.02.22-.04.44-.04.66,0,.42.05.84.13,1.23.57,2.66,2.92,4.65,5.75,4.65,3.25,0,5.88-2.63,5.88-5.88ZM18.4,22.28c-2.15,0-3.89-1.74-3.89-3.89s1.74-3.89,3.89-3.89,3.89,1.74,3.89,3.89-1.74,3.89-3.89,3.89Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M18.96,15.74h-.94c-.11,0-.19.09-.19.19v1.89h-1.89c-.11,0-.19.09-.19.19v.94c0,.11.09.19.19.19h3.03c.11,0,.19-.09.19-.19v-1.13h0v-1.89c0-.11-.09-.19-.19-.19Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M4.36,0c-.37,0-.66.3-.66.66v3.13c0,.37.3.66.66.66h.57c.37,0,.66-.3.66-.66V.66c0-.37-.3-.66-.66-.66h-.57Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M14.79,0c-.37,0-.66.3-.66.66v3.13c0,.37.3.66.66.66h.57c.37,0,.66-.3.66-.66V.66c0-.37-.3-.66-.66-.66h-.57Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M1.52,19.63h9.39c-.09-.46-.14-.94-.14-1.42,0-.16,0-.32.02-.47H2.84c-.63,0-1.14-.51-1.14-1.14V7.49h16.31v3.52c.13,0,.25-.01.38-.01.45,0,.9.04,1.33.12V3.7c0-.84-.68-1.52-1.52-1.52h-1.23v1.61c0,.89-.72,1.61-1.61,1.61h-.57c-.89,0-1.61-.72-1.61-1.61v-1.61h-6.64v1.61c0,.89-.72,1.61-1.61,1.61h-.57c-.89,0-1.61-.72-1.61-1.61v-1.61h-1.23c-.84,0-1.52.68-1.52,1.52v14.41c0,.84.68,1.52,1.52,1.52Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "cls-1", cx: "5.35", cy: "10.34", r: "1.51" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "cls-1", cx: "9.86", cy: "10.34", r: "1.51" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "cls-1", cx: "14.38", cy: "10.34", r: "1.51" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "cls-1", cx: "9.86", cy: "14.89", r: "1.51" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "cls-1", cx: "5.35", cy: "14.89", r: "1.51" })
      ] }) })
    }
  ),
  delete: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      ...props,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 11.76 13.43",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Isolation_Mode", "data-name": "Isolation Mode", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          className: "cls-1",
          d: "M3.55.46c.14-.29.43-.46.75-.46h3.16c.32,0,.61.18.75.46l.19.38h2.52c.46,0,.84.38.84.84s-.38.84-.84.84H.84c-.46,0-.84-.38-.84-.84s.38-.84.84-.84h2.52l.19-.38ZM.84,3.36h10.08v8.4c0,.93-.75,1.68-1.68,1.68H2.52c-.93,0-1.68-.75-1.68-1.68V3.36ZM3.36,5.04c-.23,0-.42.19-.42.42v5.88c0,.23.19.42.42.42s.42-.19.42-.42v-5.88c0-.23-.19-.42-.42-.42ZM5.88,5.04c-.23,0-.42.19-.42.42v5.88c0,.23.19.42.42.42s.42-.19.42-.42v-5.88c0-.23-.19-.42-.42-.42ZM8.4,5.04c-.23,0-.42.19-.42.42v5.88c0,.23.19.42.42.42s.42-.19.42-.42v-5.88c0-.23-.19-.42-.42-.42Z"
        }
      ) })
    }
  ),
  email: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { ...props, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 11.79 8.84", children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Isolation_Mode", "data-name": "Isolation Mode", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "path",
    {
      className: "cls-1",
      d: "M1.11,0C.5,0,0,.5,0,1.11c0,.35.16.67.44.88l5.01,3.76c.26.2.62.2.88,0l5.01-3.76c.28-.21.44-.54.44-.88,0-.61-.5-1.11-1.11-1.11C10.68,0,1.11,0,1.11,0ZM0,2.58v4.79c0,.81.66,1.47,1.47,1.47h8.84c.81,0,1.47-.66,1.47-1.47V2.58l-5.01,3.76c-.52.39-1.24.39-1.77,0L0,2.58Z"
    }
  ) }) }),
  expand: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { ...props, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 7.65 21.41", children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Isolation_Mode", "data-name": "Isolation Mode", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "path",
    {
      className: "cls-1",
      d: "M5.24,8.29c0,.4-.33.73-.73.73h-1.38c-.4,0-.73-.33-.73-.73v-3.74s-1.68,0-1.68,0c-.3,0-.56-.18-.67-.45s-.05-.59.16-.8L3.31.21c.29-.29.75-.29,1.03,0l3.09,3.09c.21.21.27.52.16.8s-.38.45-.67.45h-1.68v3.74ZM7.44,18.1l-3.1,3.1c-.29.29-.75.29-1.03,0L.21,18.1c-.21-.21-.27-.52-.16-.8s.38-.45.67-.45h1.68v-3.74c0-.4.33-.73.73-.73h1.38c.4,0,.73.32.73.73v3.74h1.68c.3,0,.56.18.67.45s.05.59-.16.8Z"
    }
  ) }) }),
  fileUpload: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      ...props,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 13.91 17.45",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Isolation_Mode", "data-name": "Isolation Mode", children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "_56", "data-name": "56", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          className: "cls-1",
          d: "M13.16,2.87l-2.41-2.23c-.44-.41-1.01-.64-1.61-.64H2.38C1.07,0,0,1.07,0,2.38v12.7c0,1.31,1.07,2.38,2.38,2.38h9.16c1.31,0,2.38-1.07,2.38-2.38V4.61c0-.66-.28-1.29-.76-1.75ZM4.58,5.98c1.97-1.97,1.9-1.91,1.97-1.96.12-.08.26-.12.4-.12h0c.19,0,.37.08.51.21.76.76,1.94,1.95,1.86,1.87.28.28.28.74,0,1.03-.28.28-.74.28-1.03,0l-.62-.62v2.57c0,.41-.33.73-.73.73s-.73-.32-.73-.73v-2.57l-.63.63c-.27.27-.74.29-1.03,0s-.28-.75,0-1.03ZM9.77,13.56h-5.64c-.4,0-.73-.33-.73-.73s.33-.73.73-.73h5.64c.4,0,.73.33.73.73s-.33.73-.73.73Z"
        }
      ) }) })
    }
  ),
  imageDisplay: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { ...props, viewBox: "0 0 17.59 17.59", children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Isolation_Mode", "data-name": "Isolation Mode", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          className: "cls-1",
          d: "M15.83,0H1.76C.79,0,0,.79,0,1.76v10.55c0,.97.79,1.76,1.76,1.76h14.07c.97,0,1.76-.79,1.76-1.76V1.76c0-.97-.79-1.76-1.76-1.76h0ZM1.76,12.04V1.76h14.07v10.28H1.76Z"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          className: "cls-1",
          d: "M12.31,15.83h-7.03c-.48,0-.88.39-.88.88s.39.88.88.88h7.03c.48,0,.88-.39.88-.88s-.39-.88-.88-.88Z"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        className: "cls-1",
        d: "M12.04,2.64c1.04,0,1.89.84,1.89,1.89s-.84,1.89-1.89,1.89-1.89-.84-1.89-1.89c0-1.04.84-1.89,1.89-1.89Z"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        className: "cls-1",
        d: "M14.42,12.64c-.19.33-.55.52-.98.52H4.16c-.43,0-.8-.2-.99-.52s-.17-.74.05-1.11c1.09-1.88,2.11-3.61,3.1-5.3.22-.37.55-.58.93-.58h0c.37,0,.73.22.94.59.47.81.95,1.63,1.42,2.44l.53.92.18-.32c.14-.24.29-.51.44-.78.2-.35.54-.56.92-.56h0c.37,0,.72.21.92.56.62,1.07,1.2,2.07,1.77,3.05.21.36.23.78.04,1.1h0Z"
      }
    )
  ] }) }) }),
  imageRanking: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { ...props, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 23.65 16.4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Isolation_Mode", "data-name": "Isolation Mode", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        className: "cls-1",
        d: "M13.66,0H3.11C1.39,0,0,1.39,0,3.11v7.62c0,1.71,1.39,3.11,3.11,3.11h9.03l.27-1.57-1.19-1.14h-7.06c-.35,0-.65-.16-.8-.42-.15-.26-.14-.6.04-.89.88-1.51,1.7-2.91,2.5-4.27.17-.3.45-.46.75-.47h0c.3,0,.58.18.76.48.38.65.76,1.31,1.14,1.96l.43.74,5.06-.91,1.62-3.23v-.02s.02-.02.02-.02c.1-.17.24-.3.4-.4.18-.1.38-.16.58-.16.03,0,.07,0,.1,0v-.4c0-1.71-1.39-3.11-3.11-3.11ZM10.6,5.89c-1.03,0-1.86-.83-1.86-1.86s.83-1.86,1.86-1.86,1.86.83,1.86,1.86-.83,1.86-1.86,1.86Z"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        className: "cls-1",
        d: "M20.79,11.86c-.1.09-.14.23-.12.36l.65,3.71c.03.15-.03.3-.16.38-.02.01-.04.03-.06.04,0,0-.02,0-.03.01-.01,0-.03.01-.04.01-.05.02-.11.02-.17.02-.02,0-.03,0-.05,0-.03,0-.06-.02-.1-.04l-3.38-1.75c-.06-.03-.12-.05-.19-.05s-.13.02-.19.05l-3.38,1.75s-.03.02-.05.02c-.02,0-.05.02-.07.02-.02,0-.05,0-.07,0-.09,0-.18-.03-.25-.08-.12-.09-.18-.24-.16-.38l.37-2.09.28-1.61c.02-.13-.02-.27-.12-.36l-.91-.87-1.83-1.76c-.11-.1-.15-.26-.1-.4.05-.15.18-.26.33-.27l1.06-.15,2.73-.39c.13-.02.25-.1.31-.22l1.69-3.37c.04-.06.09-.11.15-.15.07-.04.14-.06.22-.06.03,0,.07,0,.1.01.04,0,.08.02.11.04.02,0,.03.02.05.03.01.01.03.02.04.04,0,0,.01.01.02.02h0s.02.03.04.05c0,0,.01.02.02.02l1.69,3.37c.06.12.17.2.31.22l3.78.54c.16.02.29.13.33.27.05.14,0,.3-.1.4l-2.74,2.62Z"
      }
    )
  ] }) }) }),
  longText: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      ...props,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 11.07 11.08",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Isolation_Mode", "data-name": "Isolation Mode", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          className: "cls-1",
          d: "M1.58,2.37v-.79h3.16v3.16h-.4c-.44,0-.79.35-.79.79s.35.79.79.79h2.37c.44,0,.79-.35.79-.79s-.35-.79-.79-.79h-.4V1.58h3.16v.79c0,.44.35.79.79.79s.79-.35.79-.79v-1.19c0-.66-.53-1.19-1.19-1.19H1.19C.53,0,0,.53,0,1.19v1.19c0,.44.35.79.79.79s.79-.35.79-.79ZM3.17,7.91v-.79c0-.32-.19-.61-.49-.73s-.64-.06-.86.17l-1.58,1.58c-.31.31-.31.81,0,1.12l1.58,1.58c.23.22.57.29.86.17s.49-.41.49-.73v-.79M7.91,9.49v.79c0,.32.19.61.49.73s.64.05.86-.17l1.58-1.58c.31-.31.31-.81,0-1.12l-1.58-1.58c-.23-.23-.57-.29-.86-.17s-.49.41-.49.73v.79"
        }
      ) })
    }
  ),
  multipleChoice: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      ...props,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 14.15 14.15",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Isolation_Mode", "data-name": "Isolation Mode", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          className: "cls-1",
          d: "M10.82,1.73c.39-.39.39-1.04,0-1.43s-1.04-.39-1.43,0l-4.33,4.34-1.81-1.81c-.39-.39-1.04-.39-1.43,0-.39.39-.39,1.04,0,1.43l2.53,2.53c.39.39,1.04.39,1.43,0,0,0,5.05-5.05,5.05-5.05ZM13.85,5.77c.39-.39.39-1.04,0-1.43s-1.04-.39-1.43,0l-7.37,7.37-3.33-3.32c-.39-.39-1.04-.39-1.43,0s-.39,1.04,0,1.43l4.04,4.04c.39.39,1.04.39,1.43,0L13.85,5.77h0Z"
        }
      ) })
    }
  ),
  multipleIconChoice: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      ...props,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 15.82 15.82",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Isolation_Mode", "data-name": "Isolation Mode", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M9.07,7.54c-.13-.16-.27-.32-.42-.46-.92-.9-2.17-1.45-3.56-1.45C2.29,5.63,0,7.91,0,10.72s2.29,5.1,5.1,5.1,5.1-2.29,5.1-5.1c0-1.2-.42-2.31-1.12-3.18ZM6.78,8.54c.31,0,.56.25.56.56s-.25.56-.56.56-.56-.25-.56-.56.25-.56.56-.56ZM3.42,8.54c.31,0,.56.25.56.56s-.25.56-.56.56-.56-.25-.56-.56.25-.56.56-.56ZM7.81,11.48c-.32,1.24-1.43,2.1-2.71,2.1s-2.39-.86-2.71-2.1c-.08-.3.1-.6.4-.68.3-.08.6.1.68.4.19.74.86,1.26,1.63,1.26s1.43-.52,1.63-1.26c.08-.3.38-.48.68-.4.3.08.48.38.4.68Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M14.7,1.91c-.13-.16-.27-.32-.42-.46-.92-.9-2.17-1.45-3.56-1.45-2.68,0-4.89,2.08-5.08,4.71,1.17.11,2.25.55,3.13,1.23.51-.49,1.2-.79,1.95-.79,1.28,0,2.39.86,2.71,2.1.08.3-.1.6-.4.68-.3.08-.6-.1-.68-.4-.19-.74-.86-1.26-1.63-1.26-.43,0-.82.16-1.13.43.84.94,1.39,2.14,1.51,3.47,2.63-.2,4.71-2.4,4.71-5.08,0-1.2-.42-2.31-1.12-3.18ZM9.05,4.03c-.31,0-.56-.25-.56-.56s.25-.56.56-.56.56.25.56.56-.25.56-.56.56ZM12.4,4.03c-.31,0-.56-.25-.56-.56s.25-.56.56-.56.56.25.56.56-.25.56-.56.56Z"
          }
        )
      ] }) })
    }
  ),
  multipleImageChoice: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { ...props, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16.9 16.96", children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Isolation_Mode", "data-name": "Isolation Mode", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Layer_2-2", "data-name": "Layer 2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "scenery", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        className: "cls-1",
        d: "M5.42,6.12c-2.99,0-5.42,2.43-5.42,5.42s2.43,5.42,5.42,5.42,5.42-2.43,5.42-5.42-2.43-5.42-5.42-5.42ZM7.15,8.68c.66,0,1.19.53,1.19,1.19s-.53,1.19-1.19,1.19-1.19-.53-1.19-1.19c0-.66.53-1.19,1.19-1.19ZM8.32,14.14c-.1.17-.29.27-.5.27H3.03c-.22,0-.41-.1-.51-.27s-.09-.38.02-.57c.56-.97,1.09-1.86,1.6-2.73.11-.19.28-.3.48-.3h0c.19,0,.37.11.48.3.24.42.49.84.73,1.26l.28.47.09-.16c.07-.12.15-.26.23-.4.1-.18.28-.29.47-.29h0c.19,0,.37.11.47.29.32.55.62,1.07.91,1.57.11.19.12.4.02.57h0Z"
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Layer_2-3", "data-name": "Layer 2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "scenery-2", "data-name": "scenery", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        className: "cls-1",
        d: "M11.48,0c-2.89,0-5.26,2.27-5.41,5.12,1.18.12,2.27.56,3.17,1.24.33-.56.65-1.11.96-1.64.11-.19.28-.3.48-.3h0c.19,0,.37.11.48.3.24.42.49.84.73,1.26l.28.47.09-.16c.07-.12.15-.26.23-.4.1-.18.28-.29.47-.29h0c.19,0,.37.11.47.29.32.55.62,1.07.91,1.57.11.19.12.4.02.57-.1.17-.29.27-.5.27h-2.92c.44.76.73,1.62.82,2.54,2.86-.15,5.13-2.52,5.13-5.41S14.47,0,11.48,0ZM13.22,4.94c-.66,0-1.19-.53-1.19-1.19s.53-1.19,1.19-1.19,1.19.53,1.19,1.19-.53,1.19-1.19,1.19Z"
      }
    ) }) })
  ] }) }) }),
  nps: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      ...props,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 14.89 14.42",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Isolation_Mode", "data-name": "Isolation Mode", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          className: "cls-1",
          d: "M14.79,5.34c-.21-.64-.83-1.38-1.9-1.38h-2.71l-.82-2.57c-.33-1.03-1.23-1.39-1.91-1.39s-1.58.36-1.91,1.39l-.82,2.57h-2.71c-1.08,0-1.7.74-1.9,1.38-.21.64-.15,1.61.72,2.24l2.21,1.62-.84,2.6c-.33,1.03.19,1.85.73,2.24.3.22.73.39,1.19.39.38,0,.78-.11,1.17-.4l2.16-1.59,2.16,1.59c.71.52,1.68.5,2.35.01.55-.39,1.07-1.22.74-2.24l-.84-2.6,2.21-1.62c.87-.63.93-1.6.72-2.24h0ZM13.34,6.58l-2.57,1.88c-.22.16-.31.44-.22.69l.98,3.02c.16.5-.2.8-.28.85-.25.18-.61.2-.89,0l-2.53-1.86c-.11-.08-.24-.12-.37-.12V1.24c.17,0,.57.05.73.53l.96,3c.08.26.32.43.59.43h3.16c.5,0,.67.37.72.52.05.16.13.56-.27.85Z"
        }
      ) })
    }
  ),
  number: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { ...props, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 12.9 11.46", children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Isolation_Mode", "data-name": "Isolation Mode", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "path",
    {
      className: "cls-1",
      d: "M.41.61c0-.34.27-.61.61-.61h.82c.34,0,.61.27.61.61v3.07h.41c.34,0,.61.27.61.61s-.27.61-.61.61H.82c-.34,0-.61-.27-.61-.61s.27-.61.61-.61h.41V1.23h-.2c-.34,0-.61-.27-.61-.61ZM2.02,7.91c-.17-.19-.47-.18-.61.03l-.29.4c-.2.28-.58.34-.86.14s-.34-.58-.14-.86l.28-.4c.61-.85,1.85-.91,2.54-.13.55.62.53,1.56-.03,2.17l-.89.97h.85c.34,0,.61.27.61.61s-.27.61-.61.61H.62c-.24,0-.47-.14-.56-.37s-.05-.48.11-.66l1.84-2c.14-.15.14-.37,0-.52h0ZM5.53.82h6.55c.45,0,.82.37.82.82s-.37.82-.82.82h-6.55c-.45,0-.82-.37-.82-.82s.37-.82.82-.82ZM5.53,4.91h6.55c.45,0,.82.37.82.82s-.37.82-.82.82h-6.55c-.45,0-.82-.37-.82-.82s.37-.82.82-.82ZM5.53,9.01h6.55c.45,0,.82.37.82.82s-.37.82-.82.82h-6.55c-.45,0-.82-.37-.82-.82s.37-.82.82-.82Z"
    }
  ) }) }),
  qrCode: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      ...props,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 18.29 18.29",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Isolation_Mode", "data-name": "Isolation Mode", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              className: "cls-1",
              d: "M16.33,0h-1.96c-.36,0-.65.29-.65.65s.29.65.65.65h1.96c.36,0,.65.29.65.65v1.96c0,.36.29.65.65.65s.65-.29.65-.65v-1.96c0-1.08-.88-1.96-1.96-1.96Z"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              className: "cls-1",
              d: "M.65,4.57c.36,0,.65-.29.65-.65v-1.96c0-.36.29-.65.65-.65h1.96c.36,0,.65-.29.65-.65s-.29-.65-.65-.65h-1.96C.88,0,0,.88,0,1.96v1.96c0,.36.29.65.65.65Z"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              className: "cls-1",
              d: "M1.96,18.29h1.96c.36,0,.65-.29.65-.65s-.29-.65-.65-.65h-1.96c-.36,0-.65-.29-.65-.65v-1.96c0-.36-.29-.65-.65-.65s-.65.29-.65.65v1.96c0,1.08.88,1.96,1.96,1.96Z"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              className: "cls-1",
              d: "M17.64,13.72c-.36,0-.65.29-.65.65v1.96c0,.36-.29.65-.65.65h-1.96c-.36,0-.65.29-.65.65s.29.65.65.65h1.96c1.08,0,1.96-.88,1.96-1.96v-1.96c0-.36-.29-.65-.65-.65Z"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              className: "cls-1",
              d: "M2.95,3.54c-.26,0-.48.25-.48.56v10.09c0,.31.21.56.48.56s.48-.25.48-.56V4.1c0-.31-.21-.56-.48-.56Z"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              className: "cls-1",
              d: "M4.86,3.54h.95c.26,0,.48.25.48.56v10.09c0,.31-.21.56-.48.56h-.95c-.26,0-.48-.25-.48-.56V4.1c0-.31.21-.56.48-.56Z"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              className: "cls-1",
              d: "M7.72,3.54c-.26,0-.48.25-.48.56v10.09c0,.31.21.56.48.56s.48-.25.48-.56V4.1c0-.31-.21-.56-.48-.56Z"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              className: "cls-1",
              d: "M9.62,3.54h.95c.26,0,.48.25.48.56v10.09c0,.31-.21.56-.48.56h-.95c-.26,0-.48-.25-.48-.56V4.1c0-.31.21-.56.48-.56Z"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              className: "cls-1",
              d: "M12.48,3.54c-.26,0-.48.25-.48.56v10.09c0,.31.21.56.48.56s.48-.25.48-.56V4.1c0-.31-.21-.56-.48-.56Z"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              className: "cls-1",
              d: "M14.39,3.54h.95c.26,0,.48.25.48.56v10.09c0,.31-.21.56-.48.56h-.95c-.26,0-.48-.25-.48-.56V4.1c0-.31.21-.56.48-.56Z"
            }
          )
        ] })
      ] }) })
    }
  ),
  ranking: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      ...props,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 17.59 10.32",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Isolation_Mode", "data-name": "Isolation Mode", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M17.07,9.18H.52c-.28,0-.52.26-.52.57s.23.57.52.57h16.56c.28,0,.52-.26.52-.57s-.23-.57-.52-.57Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M10.92,0h-4.26c-.32,0-.57.24-.57.53v7.5h5.41V.53c0-.29-.26-.53-.57-.53Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M4.95,1.76H.57c-.32,0-.57.22-.57.48v5.79h4.95V1.76Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M17.59,3.95c0-.26-.26-.46-.57-.46h-4.38v4.55h4.95V3.95Z"
          }
        )
      ] }) })
    }
  ),
  shortText: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { ...props, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 9.94 9.94", children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Isolation_Mode", "data-name": "Isolation Mode", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "path",
    {
      className: "cls-1",
      d: "M1.42,2.13v-.71h2.84v2.84h-.35c-.39,0-.71.32-.71.71s.32.71.71.71h2.13c.39,0,.71-.32.71-.71s-.32-.71-.71-.71h-.35V1.42h2.84v.71c0,.39.32.71.71.71s.71-.32.71-.71v-1.06c0-.59-.48-1.06-1.06-1.06H1.06C.48,0,0,.48,0,1.06v1.06c0,.39.32.71.71.71s.71-.32.71-.71ZM.67,8.52v.71c0,.29.17.55.44.66s.57.05.77-.15l1.42-1.42c.28-.28.28-.73,0-1l-1.42-1.42c-.2-.2-.51-.26-.77-.15s-.44.37-.44.66v.71M9.18,7.1v-.71c0-.29-.17-.55-.44-.66s-.57-.05-.77.15l-1.42,1.42c-.28.28-.28.73,0,1l1.42,1.42c.2.2.51.26.77.15s.44-.37.44-.66v-.71"
    }
  ) }) }),
  signature: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      ...props,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 21.25 21.25",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Isolation_Mode", "data-name": "Isolation Mode", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          className: "cls-1",
          d: "M21.25,20.36c0,.49-.4.89-.89.89-1.36,0-2.03-.99-2.51-1.73-.44-.66-.66-.93-1.04-.93-.45,0-.8.39-1.34,1.02-.62.73-1.39,1.64-2.68,1.64s-2.05-.91-2.66-1.66c-.51-.62-.85-1-1.29-1-.35,0-.56.22-1.03.81-.64.78-1.51,1.85-3.4,1.85-2.44,0-4.43-1.98-4.43-4.43s1.98-4.43,4.43-4.43c.49,0,.89.4.89.89s-.4.89-.89.89c-1.46,0-2.66,1.2-2.66,2.66s1.2,2.66,2.66,2.66c1.04,0,1.48-.53,2.03-1.2.53-.65,1.19-1.45,2.4-1.45,1.3,0,2.05.91,2.66,1.66.51.62.85,1,1.29,1s.8-.39,1.34-1.02c.62-.73,1.39-1.64,2.68-1.64s2.03.99,2.51,1.73c.44.66.66.93,1.04.93.49,0,.89.4.89.89ZM7.96,14.17h.83c.94,0,1.84-.37,2.51-1.04l6.83-6.83-3.18-3.18-6.83,6.83c-.66.66-1.04,1.57-1.04,2.51v.83c0,.49.39.88.88.88h0ZM20.59,3.84c.42-.42.66-.99.66-1.59s-.23-1.17-.66-1.58c-.88-.88-2.3-.88-3.18,0l-1.2,1.2,3.18,3.18,1.2-1.2h0Z"
        }
      ) })
    }
  ),
  singleChoiceArray: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      ...props,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 14.39 14.39",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Isolation_Mode", "data-name": "Isolation Mode", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M2.15,4.3c1.18,0,2.15-.96,2.15-2.15S3.33,0,2.15,0,0,.96,0,2.15s.96,2.15,2.15,2.15ZM2.15,1.39c.42,0,.76.34.76.76s-.34.76-.76.76-.76-.34-.76-.76.34-.76.76-.76Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M2.15,9.34c1.18,0,2.15-.96,2.15-2.15s-.96-2.15-2.15-2.15-2.15.96-2.15,2.15.96,2.15,2.15,2.15ZM2.15,6.44c.42,0,.76.34.76.76s-.34.76-.76.76-.76-.34-.76-.76.34-.76.76-.76Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M7.19,4.3c1.18,0,2.15-.96,2.15-2.15S8.38,0,7.19,0s-2.15.96-2.15,2.15.96,2.15,2.15,2.15ZM7.19,1.39c.42,0,.76.34.76.76s-.34.76-.76.76-.76-.34-.76-.76.34-.76.76-.76Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M7.19,9.34c1.18,0,2.15-.96,2.15-2.15s-.96-2.15-2.15-2.15-2.15.96-2.15,2.15.96,2.15,2.15,2.15ZM7.19,6.44c.42,0,.76.34.76.76s-.34.76-.76.76-.76-.34-.76-.76.34-.76.76-.76Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M7.19,14.39c1.18,0,2.15-.96,2.15-2.15s-.96-2.15-2.15-2.15-2.15.96-2.15,2.15.96,2.15,2.15,2.15ZM7.19,11.48c.42,0,.76.34.76.76s-.34.76-.76.76-.76-.34-.76-.76.34-.76.76-.76Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M12.24,0c-1.18,0-2.15.96-2.15,2.15s.96,2.15,2.15,2.15,2.15-.96,2.15-2.15S13.42,0,12.24,0ZM12.24,2.9c-.42,0-.76-.34-.76-.76s.34-.76.76-.76.76.34.76.76c0,.42-.34.76-.76.76Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M12.24,5.05c-1.18,0-2.15.96-2.15,2.15s.96,2.15,2.15,2.15,2.15-.96,2.15-2.15-.96-2.15-2.15-2.15ZM12.24,7.95c-.42,0-.76-.34-.76-.76s.34-.76.76-.76.76.34.76.76c0,.42-.34.76-.76.76Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M2.15,14.39c1.18,0,2.15-.96,2.15-2.15s-.96-2.15-2.15-2.15-2.15.96-2.15,2.15.96,2.15,2.15,2.15ZM2.15,11.48c.42,0,.76.34.76.76s-.34.76-.76.76-.76-.34-.76-.76.34-.76.76-.76Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M12.24,10.09c-1.18,0-2.15.96-2.15,2.15s.96,2.15,2.15,2.15,2.15-.96,2.15-2.15-.96-2.15-2.15-2.15ZM12.24,12.99c-.42,0-.76-.34-.76-.76s.34-.76.76-.76.76.34.76.76c0,.42-.34.76-.76.76Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "cls-1", cx: "7.19", cy: "2.18", r: "1.57" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "cls-1", cx: "7.34", cy: "12.2", r: "1.57" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "cls-1", cx: "12.24", cy: "7.19", r: "1.57" })
      ] }) })
    }
  ),
  singleChoice: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { ...props, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 14.15 10.1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Isolation_Mode", "data-name": "Isolation Mode", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "path",
    {
      className: "cls-1",
      d: "M13.85.3c.39.39.39,1.04,0,1.43L5.77,9.81c-.39.39-1.04.39-1.43,0L.3,5.77c-.39-.39-.39-1.04,0-1.43s1.04-.39,1.43,0l3.33,3.32L12.42.3c.39-.39,1.04-.39,1.43,0h0Z"
    }
  ) }) }),
  singleIconChoice: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      ...props,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 17.03 17.77",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Isolation_Mode", "data-name": "Isolation Mode", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M12.46,9.55c-.79,1.47-2.07,2.63-3.62,3.27-.13.05-.21.18-.21.32v4.29c0,.19.15.34.34.34h7.72c.19,0,.34-.15.34-.34v-7.72c0-.19-.15-.34-.34-.34h-3.93c-.13,0-.24.07-.3.18ZM12.05,15.58l-1.66-1.66c-.14-.14-.14-.37,0-.52l.38-.38c.14-.14.37-.14.52,0l.75.75c.14.14.37.14.52,0l1.94-1.94c.14-.14.37-.14.52,0l.38.38c.14.14.14.37,0,.52l-2.84,2.84c-.14.14-.37.14-.52,0Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M6.17,0C2.77,0,0,2.77,0,6.17s2.77,6.17,6.17,6.17,6.17-2.77,6.17-6.17S9.58,0,6.17,0ZM8.23,3.43c.38,0,.69.31.69.69s-.31.69-.69.69-.69-.31-.69-.69.31-.69.69-.69ZM4.12,3.43c.38,0,.69.31.69.69s-.31.69-.69.69-.69-.31-.69-.69.31-.69.69-.69ZM9.5,7.03c-.39,1.51-1.76,2.57-3.32,2.57s-2.93-1.06-3.32-2.57c-.09-.37.13-.74.49-.84.37-.1.74.13.84.49.23.91,1.05,1.54,1.99,1.54s1.76-.64,1.99-1.54c.1-.37.46-.59.84-.49.37.09.59.47.49.84Z"
          }
        )
      ] }) })
    }
  ),
  singleImageChoice: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      ...props,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 17.23 17.98",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Isolation_Mode", "data-name": "Isolation Mode", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M12.61,9.66c-.79,1.48-2.09,2.66-3.66,3.31-.13.05-.22.18-.22.32v4.34c0,.19.16.35.35.35h7.81c.19,0,.35-.16.35-.35v-7.81c0-.19-.16-.35-.35-.35h-3.97c-.13,0-.24.07-.31.18ZM12.19,15.76l-1.68-1.68c-.14-.14-.14-.38,0-.52l.39-.39c.14-.14.38-.14.52,0l.76.76c.14.14.38.14.52,0l1.96-1.96c.14-.14.38-.14.52,0l.39.39c.14.14.14.38,0,.52l-2.87,2.87c-.14.14-.38.14-.52,0Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Layer_2-2", "data-name": "Layer 2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "scenery", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M6.25,0C2.8,0,0,2.8,0,6.25s2.8,6.25,6.25,6.25,6.25-2.8,6.25-6.25S9.69,0,6.25,0ZM7.89,2.24c.76,0,1.37.62,1.37,1.37s-.62,1.37-1.37,1.37-1.37-.62-1.37-1.37c0-.76.62-1.37,1.37-1.37ZM9.58,9.24c-.11.19-.33.31-.58.31H3.49c-.26,0-.48-.12-.59-.31s-.1-.44.03-.66c.65-1.11,1.25-2.14,1.84-3.15.13-.22.33-.34.55-.34h0c.22,0,.43.13.56.35.28.48.56.96.84,1.45l.32.54.11-.19c.08-.14.17-.31.26-.46.12-.21.32-.33.55-.33h0c.22,0,.43.12.55.33.37.64.71,1.23,1.05,1.81.13.22.13.46.02.65h0Z"
          }
        ) }) })
      ] }) })
    }
  ),
  textDisplay: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      ...props,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 17.59 17.59",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Isolation_Mode", "data-name": "Isolation Mode", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              className: "cls-1",
              d: "M15.83,0H1.76C.79,0,0,.79,0,1.76v10.55c0,.97.79,1.76,1.76,1.76h14.07c.97,0,1.76-.79,1.76-1.76V1.76c0-.97-.79-1.76-1.76-1.76h0ZM1.76,12.04V1.76h14.07v10.28H1.76Z"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              className: "cls-1",
              d: "M12.31,15.83h-7.03c-.48,0-.88.39-.88.88s.39.88.88.88h7.03c.48,0,.88-.39.88-.88s-.39-.88-.88-.88Z"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              className: "cls-1",
              d: "M13.15,3.1H4.43c-.38,0-.69.31-.69.69s.31.69.69.69h8.72c.38,0,.69-.31.69-.69s-.31-.69-.69-.69Z"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              className: "cls-1",
              d: "M13.15,5.21H4.43c-.38,0-.69.31-.69.69s.31.69.69.69h8.72c.38,0,.69-.31.69-.69s-.31-.69-.69-.69Z"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              className: "cls-1",
              d: "M13.84,8.01c0-.38-.31-.69-.69-.69H4.43c-.38,0-.69.31-.69.69s.31.69.69.69h8.72c.38,0,.68-.31.69-.69Z"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              className: "cls-1",
              d: "M4.43,9.43c-.38,0-.69.31-.69.69s.31.69.69.69h4.65c.38,0,.69-.31.69-.69s-.31-.69-.69-.69h-4.65Z"
            }
          )
        ] })
      ] }) })
    }
  ),
  time: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      ...props,
      style: { fill: "none", strokeWidth: "1.5", stroke: "#16205b" },
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 19.72 19.63",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: "9.86",
            cy: "9.815",
            r: "8.5",
            fill: "none",
            stroke: "#16205b",
            strokeWidth: "2.5"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "9.86", cy: "9.815", r: "7.5", fill: "white" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "9.76", y: "3.315", width: "0.2", height: "6", fill: "#16205b" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "9.76",
            y: "9.815",
            width: "6",
            height: "0.2",
            fill: "#16205b",
            transform: "translate(-4.8, 0)"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "9.86", cy: "9.815", r: "0.6", fill: "#16205b" })
      ] })
    }
  ),
  videoDisplay: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      ...props,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 17.59 17.59",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Isolation_Mode", "data-name": "Isolation Mode", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              className: "cls-1",
              d: "M15.83,0H1.76C.79,0,0,.79,0,1.76v10.55c0,.97.79,1.76,1.76,1.76h14.07c.97,0,1.76-.79,1.76-1.76V1.76c0-.97-.79-1.76-1.76-1.76h0ZM1.76,12.04V1.76h14.07v10.28H1.76Z"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              className: "cls-1",
              d: "M12.31,15.83h-7.03c-.48,0-.88.39-.88.88s.39.88.88.88h7.03c.48,0,.88-.39.88-.88s-.39-.88-.88-.88Z"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M9.62,3.76h-3.6c-.89,0-1.62.73-1.62,1.62v3c0,.89.73,1.62,1.62,1.62h3.6c.89,0,1.62-.73,1.62-1.62v-.04l.32.25c.31.24.71.28,1.06.12.35-.17.57-.52.57-.91v-1.84c0-.39-.22-.74-.57-.91-.35-.17-.76-.13-1.06.12l-.32.25v-.04c0-.89-.73-1.62-1.62-1.62Z"
          }
        )
      ] }) })
    }
  ),
  settings: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { ...props, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 9.48 10.05", children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Isolation_Mode", "data-name": "Isolation Mode", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "path",
    {
      className: "cls-1",
      d: "M9.45,3.27c.06.17,0,.36-.13.48l-.85.77c.02.16.03.33.03.5s-.01.34-.03.5l.85.77c.14.12.19.31.13.48-.09.23-.19.46-.31.67l-.09.16c-.13.22-.27.42-.43.61-.12.14-.31.19-.48.13l-1.09-.35c-.26.2-.55.37-.86.5l-.25,1.12c-.04.18-.18.32-.36.35-.27.05-.55.07-.83.07s-.56-.02-.83-.07c-.18-.03-.32-.17-.36-.35l-.25-1.12c-.31-.13-.6-.3-.86-.5l-1.09.35c-.17.05-.37,0-.48-.13-.16-.19-.3-.4-.43-.61l-.09-.16c-.12-.22-.22-.44-.31-.67-.06-.17,0-.36.13-.48l.85-.77c-.02-.16-.03-.33-.03-.5s.01-.34.03-.5l-.85-.77c-.14-.12-.19-.31-.13-.48.09-.23.19-.46.31-.67l.09-.16c.13-.22.27-.42.43-.61.12-.14.31-.19.48-.13l1.09.35c.26-.2.55-.37.86-.5l.25-1.12c.04-.18.18-.32.36-.35.27-.05.55-.07.83-.07s.56.02.83.07c.18.03.32.17.36.35l.25,1.12c.31.13.6.3.86.5l1.09-.35c.17-.05.37,0,.48.13.16.19.3.4.43.61l.09.16c.12.22.22.44.31.67h0ZM4.74,6.6c.87,0,1.57-.7,1.57-1.57s-.7-1.57-1.57-1.57-1.57.7-1.57,1.57.7,1.57,1.57,1.57Z"
    }
  ) }) }),
  shrink: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { ...props, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 7.65 20.03", children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Isolation_Mode", "data-name": "Isolation Mode", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "path",
    {
      className: "cls-1",
      d: "M2.41.73c0-.4.33-.73.73-.73h1.38c.4,0,.73.33.73.73v3.74s1.68,0,1.68,0c.3,0,.56.18.67.45s.05.59-.16.8l-3.09,3.09c-.29.29-.75.29-1.03,0L.21,5.72c-.21-.21-.27-.52-.16-.8s.38-.45.67-.45h1.68V.73ZM.21,14.31l3.1-3.1c.29-.29.75-.29,1.03,0l3.1,3.1c.21.21.27.52.16.8s-.38.45-.67.45h-1.68v3.74c0,.4-.33.73-.73.73h-1.38c-.4,0-.73-.32-.73-.73v-3.74H.73c-.3,0-.56-.18-.67-.45s-.05-.59.16-.8Z"
    }
  ) }) }),
  offline: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      ...props,
      id: "Layer_2",
      "data-name": "Layer 2",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 13.4 12.87",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Isolation_Mode", "data-name": "Isolation Mode", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M6.22,8.12l1.17-1.17.78-.78L13.4.93l-.93-.93-2.99,2.99c-3.22-1.08-6.92-.34-9.49,2.22l1.14,1.14c1.91-1.9,4.57-2.58,7.03-2.04l-.99.99c-1.87-.19-3.8.43-5.23,1.86l1.14,1.14c.68-.68,1.51-1.11,2.39-1.3L.54,11.94l.93.93,3.12-3.12,1.63-1.63Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M5.2,10.37l1.34,1.42,1.4-1.49,1.14-1.14c-.48-.48-1.07-.8-1.71-.95l-2.17,2.17Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M8.35,7.22c.6.24,1.15.6,1.64,1.08l1.14-1.14c-.47-.47-1-.86-1.56-1.15l-1.22,1.22Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M10.4,5.17c.55.32,1.07.71,1.54,1.18l1.14-1.14c-.47-.47-.97-.87-1.5-1.21l-1.18,1.18Z"
          }
        )
      ] }) })
    }
  ),
  phone: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      ...props,
      id: "Layer_2",
      "data-name": "Layer 2",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 10 16",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Isolation_Mode", "data-name": "Isolation Mode", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          className: "cls-1",
          d: "M2,16h6c1.1,0,2-.9,2-2V2c0-1.11-.9-2-2-2H2C.89,0,0,.89,0,2v12c0,1.1.89,2,2,2ZM1,2h8v12H1V2Z"
        }
      ) })
    }
  ),
  pc: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      ...props,
      id: "Layer_2",
      "data-name": "Layer 2",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 13.67 9.36",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { id: "Isolation_Mode", "data-name": "Isolation Mode", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M.36,9.36h12.95c.2,0,.36-.16.36-.36V1.08c0-.6-.48-1.08-1.08-1.08H1.08C.48,0,0,.48,0,1.08v7.92c0,.2.16.36.36.36ZM1.08,1.44c0-.2.16-.36.36-.36h10.8c.2,0,.36.16.36.36v6.48c0,.2-.16.36-.36.36H1.44c-.2,0-.36-.16-.36-.36V1.44Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            className: "cls-1",
            d: "M15.65,10H.18c-.1,0-.18.08-.18.18v.54c0,.4.32.72.72.72h14.39c.4,0,.72-.32.72-.72V.18c0-.1-.08-.18-.18-.18Z"
          }
        )
      ] })
    }
  ),
  launch: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      ...props,
      id: "Layer_2",
      "data-name": "Layer 2",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 9.7 9.7",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("g", { id: "Isolation_Mode", "data-name": "Isolation Mode", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          className: "cls-1",
          d: "M9.44.11c.19.13.29.36.26.59l-1.21,7.88c-.03.18-.14.34-.3.44s-.36.1-.53.03l-2.27-.94-1.3,1.4c-.17.18-.43.24-.67.15s-.38-.32-.38-.57v-1.58c0-.08.03-.15.08-.2l3.18-3.47c.11-.12.11-.3,0-.42s-.3-.12-.42-.01l-3.85,3.42-1.67-.84C.13,5.9,0,5.7,0,5.47s.11-.43.31-.54L8.79.08c.2-.12.45-.1.64.03h0Z"
        }
      ) })
    }
  ),
  sort: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      ...props,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 17.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C3.098 15 3.565 15 4.5 15s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549C7 16.098 7 16.565 7 17.5s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C5.902 20 5.435 20 4.5 20s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C2 18.902 2 18.435 2 17.5Z" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M9.5 17.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 15 11.065 15 12 15s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C13.402 20 12.935 20 12 20s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.201-.348-.201-.815-.201-1.75Z",
            opacity: ".5"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M17 17.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C18.098 15 18.565 15 19.5 15s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C17 18.902 17 18.435 17 17.5Z",
            opacity: ".7"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M4.5 15V9c0-2.357 0-3.536.732-4.268S7.143 4 9.5 4h5c2.357 0 3.535 0 4.268.732S19.5 6.643 19.5 9v3m0 0l2-2m-2 2l-2-2"
          }
        )
      ] })
    }
  )
};
const SurveyIcon = ({ name, size = "1.5em", color = "#16205b" }) => {
  const SvgIcon3 = iconPaths[name];
  if (!SvgIcon3) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SvgIcon3,
    {
      width: size,
      height: size,
      style: { fill: color, strokeWidth: "0px", flexShrink: "0" }
    }
  );
};
const questionIconByType = (type, size = "1.25em", color) => {
  switch (type) {
    case "text":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyIcon, { name: "shortText", size, color });
    case "paragraph":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyIcon, { name: "longText", size, color });
    case "barcode":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyIcon, { name: "qrCode", size, color });
    case "number":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyIcon, { name: "number", size, color });
    case "email":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyIcon, { name: "email", size, color });
    case "scq":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyIcon, { name: "singleChoice", size, color });
    case "icon_scq":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyIcon, { name: "singleIconChoice", size, color });
    case "image_scq":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyIcon, { name: "singleImageChoice", size, color });
    case "scq_icon_array":
    case "scq_array":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyIcon, { name: "singleChoiceArray", size, color });
    case "mcq":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyIcon, { name: "multipleChoice", size, color });
    case "icon_mcq":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyIcon, { name: "multipleIconChoice", size, color });
    case "image_mcq":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyIcon, { name: "multipleImageChoice", size, color });
    case "nps":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyIcon, { name: "nps", size, color });
    case "date":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyIcon, { name: "date", size, color });
    case "date_time":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyIcon, { name: "datetime", size, color });
    case "time":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyIcon, { name: "time", size, color });
    case "file_upload":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyIcon, { name: "fileUpload", size, color });
    case "signature":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyIcon, { name: "signature", size, color });
    case "photo_capture":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyIcon, { name: "capturePhoto", size, color });
    case "video_capture":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyIcon, { name: "captureVideo", size, color });
    case "ranking":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyIcon, { name: "ranking", size, color });
    case "image_ranking":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyIcon, { name: "imageRanking", size, color });
    case "text_display":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyIcon, { name: "textDisplay", size, color });
    case "image_display":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyIcon, { name: "imageDisplay", size, color });
    case "video_display":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyIcon, { name: "videoDisplay", size, color });
  }
};
function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r2 = bigint >> 16 & 255;
  const g2 = bigint >> 8 & 255;
  const b2 = bigint & 255;
  return [r2, g2, b2];
}
function rgbToHex(r2, g2, b2) {
  return "#" + ((1 << 24) + (r2 << 16) + (g2 << 8) + b2).toString(16).slice(1);
}
function blendColors(color1, color2, opacity) {
  const r2 = Math.round(color1[0] * (1 - opacity) + color2[0] * opacity);
  const g2 = Math.round(color1[1] * (1 - opacity) + color2[1] * opacity);
  const b2 = Math.round(color1[2] * (1 - opacity) + color2[2] * opacity);
  return [r2, g2, b2];
}
const getContrastColor = (hexColor, opacity = 0.2) => {
  const rgbColor = hexToRgb(hexColor);
  const luminance = (0.299 * rgbColor[0] + 0.587 * rgbColor[1] + 0.114 * rgbColor[2]) / 255;
  const contrastRgb = luminance > 0.5 ? [0, 0, 0] : [255, 255, 255];
  const effectiveOpacity = luminance > 0.5 ? opacity : 1 - opacity;
  const blendedRgb = blendColors(rgbColor, contrastRgb, effectiveOpacity);
  return rgbToHex(...blendedRgb);
};
const QUESTION_TYPES = [
  {
    name: "section_text_based",
    type: "text",
    items: [
      {
        type: "text",
        icon: questionIconByType("text")
      },
      {
        type: "paragraph",
        icon: questionIconByType("paragraph")
      },
      {
        type: "number",
        icon: questionIconByType("number")
      },
      {
        type: "email",
        icon: questionIconByType("email")
      }
    ]
  },
  {
    name: "section_choice_based",
    type: "choice",
    items: [
      {
        type: "scq",
        icon: questionIconByType("scq")
      },
      {
        type: "icon_scq",
        icon: questionIconByType("icon_scq")
      },
      {
        type: "image_scq",
        icon: questionIconByType("image_scq")
      },
      {
        type: "scq_array",
        icon: questionIconByType("scq_array")
      },
      {
        type: "scq_icon_array",
        icon: questionIconByType("scq_icon_array")
      },
      {
        type: "mcq",
        icon: questionIconByType("mcq")
      },
      {
        type: "icon_mcq",
        icon: questionIconByType("icon_mcq")
      },
      {
        type: "image_mcq",
        icon: questionIconByType("image_mcq")
      },
      {
        type: "nps",
        icon: questionIconByType("nps")
      }
    ]
  },
  {
    name: "section_date_time",
    type: "date-time",
    items: [
      {
        type: "date",
        icon: questionIconByType("date")
      },
      {
        type: "time",
        icon: questionIconByType("time")
      },
      {
        type: "date_time",
        icon: questionIconByType("date_time")
      }
    ]
  },
  {
    name: "section_info",
    type: "info",
    items: [
      {
        type: "text_display",
        icon: questionIconByType("text_display")
      },
      {
        type: "image_display",
        icon: questionIconByType("image_display")
      },
      {
        type: "video_display",
        icon: questionIconByType("video_display")
      }
    ]
  },
  {
    name: "offline_only",
    type: "other",
    items: [
      {
        type: "barcode",
        offlineOnly: true,
        icon: questionIconByType("barcode")
      },
      {
        type: "photo_capture",
        offlineOnly: true,
        icon: questionIconByType("photo_capture")
      },
      {
        type: "video_capture",
        offlineOnly: true,
        icon: questionIconByType("video_capture")
      }
    ]
  },
  {
    name: "section_other",
    type: "other",
    items: [
      {
        type: "ranking",
        icon: questionIconByType("ranking")
      },
      {
        type: "image_ranking",
        icon: questionIconByType("image_ranking")
      },
      {
        type: "file_upload",
        icon: questionIconByType("file_upload")
      },
      {
        type: "signature",
        icon: questionIconByType("signature")
      }
    ]
  }
];
const isDisplay = (type) => {
  return ["text_display", "image_display", "video_display"].indexOf(type) > -1;
};
const createQuestion = (type, qId, lang) => {
  let code = "Q".concat(qId);
  let returnObj = {};
  let state = { type };
  let newQuestion2 = { code: "Q".concat(qId), qualifiedCode: "Q".concat(qId), type };
  returnObj[code] = state;
  returnObj.question = newQuestion2;
  switch (type) {
    case "text":
      state.maxChars = 30;
      state.showHint = true;
      state.content = {
        en: {
          label: "Short Text Question"
        }
      };
      break;
    case "number":
      state.maxChars = 30;
      state.showHint = true;
      state.content = {
        en: {
          label: "Number Question"
        }
      };
      break;
    case "email":
      state.maxChars = 30;
      state.showHint = true;
      state.validation = {
        validation_pattern_email: {
          isActive: true
        }
      };
      state.content = {
        en: {
          label: "Email Question"
        }
      };
      break;
    case "paragraph":
      state.showHint = true;
      state.content = {
        en: {
          label: "Long Text Question"
        }
      };
      break;
    case "barcode":
      state.showHint = true;
      state.content = {
        en: {
          label: "Barcode Question"
        }
      };
      break;
    case "scq":
      returnObj["Q".concat(qId, "A1")] = {
        content: {
          en: {
            label: "Option 1"
          }
        }
      };
      returnObj["Q".concat(qId, "A2")] = {
        content: {
          en: {
            label: "Option 2"
          }
        }
      };
      returnObj["Q".concat(qId, "A3")] = {
        content: {
          en: {
            label: "Option 3"
          }
        }
      };
      state.children = [
        {
          code: "A1",
          qualifiedCode: "Q".concat(qId, "A1")
        },
        {
          code: "A2",
          qualifiedCode: "Q".concat(qId, "A2")
        },
        {
          code: "A3",
          qualifiedCode: "Q".concat(qId, "A3")
        }
      ];
      state.content = {
        en: {
          label: "Single Choice Question"
        }
      };
      break;
    case "icon_scq":
      state.columns = 3;
      state.iconSize = "150";
      state.spacing = 8;
      returnObj["Q".concat(qId, "A1")] = {
        content: {
          en: {
            label: "Option 1"
          }
        }
      };
      returnObj["Q".concat(qId, "A2")] = {
        content: {
          en: {
            label: "Option 2"
          }
        }
      };
      returnObj["Q".concat(qId, "A3")] = {
        content: {
          en: {
            label: "Option 3"
          }
        }
      };
      state.children = [
        {
          code: "A1",
          qualifiedCode: "Q".concat(qId, "A1")
        },
        {
          code: "A2",
          qualifiedCode: "Q".concat(qId, "A2")
        },
        {
          code: "A3",
          qualifiedCode: "Q".concat(qId, "A3")
        }
      ];
      state.content = {
        en: {
          label: "Single Icon Choice Question"
        }
      };
      break;
    case "image_scq":
      state.columns = 3;
      state.imageAspectRatio = 1;
      state.spacing = 8;
      returnObj["Q".concat(qId, "A1")] = {
        content: {
          en: {
            label: "Option 1"
          }
        }
      };
      returnObj["Q".concat(qId, "A2")] = {
        content: {
          en: {
            label: "Option 2"
          }
        }
      };
      returnObj["Q".concat(qId, "A3")] = {
        content: {
          en: {
            label: "Option 3"
          }
        }
      };
      state.children = [
        {
          code: "A1",
          qualifiedCode: "Q".concat(qId, "A1")
        },
        {
          code: "A2",
          qualifiedCode: "Q".concat(qId, "A2")
        },
        {
          code: "A3",
          qualifiedCode: "Q".concat(qId, "A3")
        }
      ];
      state.content = {
        en: {
          label: "Single Image Choice Question"
        }
      };
      break;
    case "mcq":
      returnObj["Q".concat(qId, "A1")] = {
        content: {
          en: {
            label: "Option 1"
          }
        }
      };
      returnObj["Q".concat(qId, "A2")] = {
        content: {
          en: {
            label: "Option 2"
          }
        }
      };
      returnObj["Q".concat(qId, "A3")] = {
        content: {
          en: {
            label: "Option 3"
          }
        }
      };
      state.children = [
        {
          code: "A1",
          qualifiedCode: "Q".concat(qId, "A1")
        },
        {
          code: "A2",
          qualifiedCode: "Q".concat(qId, "A2")
        },
        {
          code: "A3",
          qualifiedCode: "Q".concat(qId, "A3")
        }
      ];
      state.content = {
        en: {
          label: "Multiple Choice Question"
        }
      };
      break;
    case "image_ranking":
      state.columns = 3;
      state.imageAspectRatio = 1;
      state.spacing = 8;
      returnObj["Q".concat(qId, "A1")] = {
        content: {
          en: {
            label: "Option 1"
          }
        }
      };
      returnObj["Q".concat(qId, "A2")] = {
        content: {
          en: {
            label: "Option 2"
          }
        }
      };
      returnObj["Q".concat(qId, "A3")] = {
        content: {
          en: {
            label: "Option 3"
          }
        }
      };
      state.children = [
        {
          code: "A1",
          qualifiedCode: "Q".concat(qId, "A1")
        },
        {
          code: "A2",
          qualifiedCode: "Q".concat(qId, "A2")
        },
        {
          code: "A3",
          qualifiedCode: "Q".concat(qId, "A3")
        }
      ];
      state.content = {
        en: {
          label: "Image Ranking Question"
        }
      };
      break;
    case "ranking":
      returnObj["Q".concat(qId, "A1")] = {
        content: {
          en: {
            label: "Option 1"
          }
        }
      };
      returnObj["Q".concat(qId, "A2")] = {
        content: {
          en: {
            label: "Option 2"
          }
        }
      };
      returnObj["Q".concat(qId, "A3")] = {
        content: {
          en: {
            label: "Option 3"
          }
        }
      };
      state.children = [
        {
          code: "A1",
          qualifiedCode: "Q".concat(qId, "A1")
        },
        {
          code: "A2",
          qualifiedCode: "Q".concat(qId, "A2")
        },
        {
          code: "A3",
          qualifiedCode: "Q".concat(qId, "A3")
        }
      ];
      state.content = {
        en: {
          label: "Ranking Question"
        }
      };
      break;
    case "nps":
      state.content = {
        en: {
          label: "NPS Question"
        }
      };
      break;
    case "icon_mcq":
      state.columns = 3;
      state.columns = 3;
      state.iconSize = "150";
      state.spacing = 8;
      returnObj["Q".concat(qId, "A1")] = {
        content: {
          en: {
            label: "Option 1"
          }
        }
      };
      returnObj["Q".concat(qId, "A2")] = {
        content: {
          en: {
            label: "Option 2"
          }
        }
      };
      returnObj["Q".concat(qId, "A3")] = {
        content: {
          en: {
            label: "Option 3"
          }
        }
      };
      state.children = [
        {
          code: "A1",
          qualifiedCode: "Q".concat(qId, "A1")
        },
        {
          code: "A2",
          qualifiedCode: "Q".concat(qId, "A2")
        },
        {
          code: "A3",
          qualifiedCode: "Q".concat(qId, "A3")
        }
      ];
      state.content = {
        en: {
          label: "Multiple Icon Choice Question"
        }
      };
      break;
    case "image_mcq":
      state.columns = 3;
      state.imageAspectRatio = 1;
      state.spacing = 8;
      returnObj["Q".concat(qId, "A1")] = {
        content: {
          en: {
            label: "Option 1"
          }
        }
      };
      returnObj["Q".concat(qId, "A2")] = {
        content: {
          en: {
            label: "Option 2"
          }
        }
      };
      returnObj["Q".concat(qId, "A3")] = {
        content: {
          en: {
            label: "Option 3"
          }
        }
      };
      state.children = [
        {
          code: "A1",
          qualifiedCode: "Q".concat(qId, "A1")
        },
        {
          code: "A2",
          qualifiedCode: "Q".concat(qId, "A2")
        },
        {
          code: "A3",
          qualifiedCode: "Q".concat(qId, "A3")
        }
      ];
      state.content = {
        en: {
          label: "Multiple Image Choice Question"
        }
      };
      break;
    case "scq_icon_array":
      returnObj["Q".concat(qId, "Ac1")] = {
        type: "column",
        content: {
          en: {
            label: "Col 1"
          }
        }
      };
      returnObj["Q".concat(qId, "Ac2")] = {
        type: "column",
        content: {
          en: {
            label: "Col 2"
          }
        }
      };
      returnObj["Q".concat(qId, "Ac3")] = {
        type: "column",
        content: {
          en: {
            label: "Col 3"
          }
        }
      };
      returnObj["Q".concat(qId, "A1")] = {
        type: "row",
        content: {
          en: {
            label: "Row 1"
          }
        }
      };
      returnObj["Q".concat(qId, "A2")] = {
        type: "row",
        content: {
          en: {
            label: "Row 2"
          }
        }
      };
      returnObj["Q".concat(qId, "A3")] = {
        type: "row",
        content: {
          en: {
            label: "Row 3"
          }
        }
      };
      state.children = [
        {
          code: "Ac1",
          qualifiedCode: "Q".concat(qId, "Ac1"),
          type: "column"
        },
        {
          code: "Ac2",
          qualifiedCode: "Q".concat(qId, "Ac2"),
          type: "column"
        },
        {
          code: "Ac3",
          qualifiedCode: "Q".concat(qId, "Ac3"),
          type: "column"
        },
        {
          code: "A1",
          qualifiedCode: "Q".concat(qId, "A1"),
          type: "row"
        },
        {
          code: "A2",
          qualifiedCode: "Q".concat(qId, "A2"),
          type: "row"
        },
        {
          code: "A3",
          qualifiedCode: "Q".concat(qId, "A3"),
          type: "row"
        }
      ];
      state.content = {
        en: {
          label: "Single Choice Icon Array Question"
        }
      };
      break;
    case "scq_array":
      returnObj["Q".concat(qId, "Ac1")] = {
        type: "column",
        content: {
          en: {
            label: "Col 1"
          }
        }
      };
      returnObj["Q".concat(qId, "Ac2")] = {
        type: "column",
        content: {
          en: {
            label: "Col 2"
          }
        }
      };
      returnObj["Q".concat(qId, "Ac3")] = {
        type: "column",
        content: {
          en: {
            label: "Col 3"
          }
        }
      };
      returnObj["Q".concat(qId, "A1")] = {
        type: "row",
        content: {
          en: {
            label: "Row 1"
          }
        }
      };
      returnObj["Q".concat(qId, "A2")] = {
        type: "row",
        content: {
          en: {
            label: "Row 2"
          }
        }
      };
      returnObj["Q".concat(qId, "A3")] = {
        type: "row",
        content: {
          en: {
            label: "Row 3"
          }
        }
      };
      state.children = [
        {
          code: "Ac1",
          qualifiedCode: "Q".concat(qId, "Ac1"),
          type: "column"
        },
        {
          code: "Ac2",
          qualifiedCode: "Q".concat(qId, "Ac2"),
          type: "column"
        },
        {
          code: "Ac3",
          qualifiedCode: "Q".concat(qId, "Ac3"),
          type: "column"
        },
        {
          code: "A1",
          qualifiedCode: "Q".concat(qId, "A1"),
          type: "row"
        },
        {
          code: "A2",
          qualifiedCode: "Q".concat(qId, "A2"),
          type: "row"
        },
        {
          code: "A3",
          qualifiedCode: "Q".concat(qId, "A3"),
          type: "row"
        }
      ];
      state.content = {
        en: {
          label: "Single Choice Array Question"
        }
      };
      break;
    case "file_upload":
      state.content = {
        en: {
          label: "File Upload Question"
        }
      };
      break;
    case "signature":
      state.content = {
        en: {
          label: "Signature Question"
        }
      };
      break;
    case "photo_capture":
      state.showHint = true;
      state.content = {
        en: {
          label: "Capture Photo Question"
        }
      };
      break;
    case "video_capture":
      state.showHint = true;
      state.content = {
        en: {
          label: "Capture Video Question"
        }
      };
      break;
    case "date":
      state.type = "date";
      state.dateFormat = "YYYY/MM/DD";
      state.maxDate = "";
      state.minDate = "";
      state.content = {
        en: {
          label: "Date Question"
        }
      };
      break;
    case "date_time":
      state.dateFormat = "YYYY/MM/DD";
      state.fullDayFormat = false;
      state.maxDate = "";
      state.minDate = "";
      state.content = {
        en: {
          label: "Date and Time Question"
        }
      };
      break;
    case "time":
      state.fullDayFormat = false;
      state.content = {
        en: {
          label: "Time Question"
        }
      };
      break;
    case "text_display":
      state.content = {
        en: {
          label: "Text Display Question"
        }
      };
      break;
    case "video_display":
      state.content = {
        en: {
          label: "Video Display Question"
        }
      };
      break;
    case "image_display":
      state.content = {
        en: {
          label: "Image Display Question"
        }
      };
      break;
  }
  return returnObj;
};
const questionDesignError = (question) => {
  let errors = [];
  switch (question.type) {
    case "scq_icon_array":
    case "scq_array":
      if (!question.children || question.children.filter((child) => child.type == "row").length === 0) {
        errors.push({
          code: "insufficient_rows_min_1",
          message: "must have at least 1 row"
        });
      }
      if (!question.children || question.children.filter((child) => child.type == "column").length < 2) {
        errors.push({
          code: "insufficient_cols_min_2",
          message: "must have at least 2 columns"
        });
      }
      break;
    case "image_ranking":
    case "ranking":
    case "image_scq":
    case "scq":
    case "icon_scq":
      if (!question.children || question.children.length < 2) {
        errors.push({
          code: "insufficient_options_min_2",
          message: "must have at least 2 options"
        });
      }
      break;
    case "icon_mcq":
    case "image_mcq":
    case "mcq":
      if (!question.children || question.children.length < 1) {
        errors.push({
          code: "insufficient_options_min_1",
          message: "must have at least 1 option"
        });
      }
      break;
  }
  return errors;
};
const Close = createSvgIcon$1(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
const FormatListBulleted = createSvgIcon$1(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5m0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5M7 19h14v-2H7zm0-6h14v-2H7zm0-8v2h14V5z"
}), "FormatListBulleted");
const HourglassEmpty = createSvgIcon$1(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2zm10 14.5V20H8v-3.5l4-4zm-4-5-4-4V4h8v3.5z"
}), "HourglassEmpty");
const groups = [
  {
    name: "section_sections",
    type: "sections",
    items: [
      {
        idType: 2,
        type: "group",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FormatListBulleted, { style: { color: "#16205b" } })
      }
    ]
  }
];
function NewComponentsPanel({ t: t2 }) {
  const dispatch = useDispatch();
  const handleAddComponent = (type, questionType) => {
    dispatch(addComponent({ type, questionType }));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$1.leftContent, children: [
    groups.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$1.leftPanelGroupItem, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1.groupTitle, children: t2(item.name) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1.leftItems, children: item.items.map((question, index2) => {
        const dragItem = {
          type: "groups",
          itemType: question.type,
          droppableId: "new-groups",
          draggableId: question.type,
          icon: question.icon
        };
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Draggable", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          NewComponentsItem,
          {
            t: t2,
            item: dragItem,
            onClick: () => handleAddComponent("group", question.type)
          }
        ) }, question.type);
      }) })
    ] }, index)),
    QUESTION_TYPES.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$1.leftPanelGroupItem, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1.groupTitle, children: t2(item.name) }),
      item.items.map((question, index2) => {
        const dragItem = {
          type: "new-questions",
          itemType: question.type,
          offlineOnly: question.offlineOnly || false,
          droppableId: "new-questions",
          draggableId: question.type,
          icon: question.icon
        };
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Draggable", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          NewComponentsItem,
          {
            t: t2,
            item: dragItem,
            onClick: () => handleAddComponent("question", question.type)
          }
        ) }) }, "draggable-".concat(index2));
      })
    ] }, index))
  ] });
}
const NewComponentsPanel$1 = React$1.memo(NewComponentsPanel);
const createGroup = (groupType, gId) => {
  let code = "G".concat(gId);
  let state = { groupType, content: { en: {
    label: "Page ".concat(gId)
  }, description: {} } };
  let newGroup2 = {
    code,
    qualifiedCode: code,
    type: groupType.toLowerCase(),
    groupType
  };
  return { newGroup: newGroup2, state };
};
var lodash_clonedeep = { exports: {} };
lodash_clonedeep.exports;
(function(module, exports) {
  var LARGE_ARRAY_SIZE = 200;
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  var MAX_SAFE_INTEGER = 9007199254740991;
  var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", promiseTag = "[object Promise]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reFlags = /\w*$/;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
  var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal || freeSelf || Function("return this")();
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  function addMapEntry(map, pair) {
    map.set(pair[0], pair[1]);
    return map;
  }
  function addSetEntry(set, value) {
    set.add(value);
    return set;
  }
  function arrayEach(array, iteratee) {
    var index = -1, length2 = array ? array.length : 0;
    while (++index < length2) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }
  function arrayPush(array, values2) {
    var index = -1, length2 = values2.length, offset = array.length;
    while (++index < length2) {
      array[offset + index] = values2[index];
    }
    return array;
  }
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1, length2 = array ? array.length : 0;
    while (++index < length2) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }
  function baseTimes(n2, iteratee) {
    var index = -1, result = Array(n2);
    while (++index < n2) {
      result[index] = iteratee(index);
    }
    return result;
  }
  function getValue2(object, key) {
    return object == null ? void 0 : object[key];
  }
  function isHostObject(value) {
    var result = false;
    if (value != null && typeof value.toString != "function") {
      try {
        result = !!(value + "");
      } catch (e2) {
      }
    }
    return result;
  }
  function mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  function setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }
  var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
  var coreJsData = root["__core-js_shared__"];
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  var funcToString = funcProto.toString;
  var hasOwnProperty2 = objectProto.hasOwnProperty;
  var objectToString = objectProto.toString;
  var reIsNative = RegExp(
    "^" + funcToString.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  var Buffer2 = moduleExports ? root.Buffer : void 0, Symbol2 = root.Symbol, Uint8Array2 = root.Uint8Array, getPrototype = overArg(Object.getPrototypeOf, Object), objectCreate = Object.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice;
  var nativeGetSymbols = Object.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0, nativeKeys = overArg(Object.keys, Object);
  var DataView = getNative(root, "DataView"), Map2 = getNative(root, "Map"), Promise2 = getNative(root, "Promise"), Set2 = getNative(root, "Set"), WeakMap2 = getNative(root, "WeakMap"), nativeCreate = getNative(Object, "create");
  var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap2);
  var symbolProto = Symbol2 ? Symbol2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
  function Hash(entries) {
    var index = -1, length2 = entries ? entries.length : 0;
    this.clear();
    while (++index < length2) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
  }
  function hashDelete(key) {
    return this.has(key) && delete this.__data__[key];
  }
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? void 0 : result;
    }
    return hasOwnProperty2.call(data, key) ? data[key] : void 0;
  }
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== void 0 : hasOwnProperty2.call(data, key);
  }
  function hashSet(key, value) {
    var data = this.__data__;
    data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
    return this;
  }
  Hash.prototype.clear = hashClear;
  Hash.prototype["delete"] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;
  function ListCache(entries) {
    var index = -1, length2 = entries ? entries.length : 0;
    this.clear();
    while (++index < length2) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function listCacheClear() {
    this.__data__ = [];
  }
  function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    return true;
  }
  function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? void 0 : data[index][1];
  }
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }
  function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype["delete"] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;
  function MapCache(entries) {
    var index = -1, length2 = entries ? entries.length : 0;
    this.clear();
    while (++index < length2) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function mapCacheClear() {
    this.__data__ = {
      "hash": new Hash(),
      "map": new (Map2 || ListCache)(),
      "string": new Hash()
    };
  }
  function mapCacheDelete(key) {
    return getMapData(this, key)["delete"](key);
  }
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }
  function mapCacheSet(key, value) {
    getMapData(this, key).set(key, value);
    return this;
  }
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype["delete"] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;
  function Stack2(entries) {
    this.__data__ = new ListCache(entries);
  }
  function stackClear() {
    this.__data__ = new ListCache();
  }
  function stackDelete(key) {
    return this.__data__["delete"](key);
  }
  function stackGet(key) {
    return this.__data__.get(key);
  }
  function stackHas(key) {
    return this.__data__.has(key);
  }
  function stackSet(key, value) {
    var cache = this.__data__;
    if (cache instanceof ListCache) {
      var pairs = cache.__data__;
      if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        return this;
      }
      cache = this.__data__ = new MapCache(pairs);
    }
    cache.set(key, value);
    return this;
  }
  Stack2.prototype.clear = stackClear;
  Stack2.prototype["delete"] = stackDelete;
  Stack2.prototype.get = stackGet;
  Stack2.prototype.has = stackHas;
  Stack2.prototype.set = stackSet;
  function arrayLikeKeys(value, inherited) {
    var result = isArray2(value) || isArguments(value) ? baseTimes(value.length, String) : [];
    var length2 = result.length, skipIndexes = !!length2;
    for (var key in value) {
      if (hasOwnProperty2.call(value, key) && !(skipIndexes && (key == "length" || isIndex(key, length2)))) {
        result.push(key);
      }
    }
    return result;
  }
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty2.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
      object[key] = value;
    }
  }
  function assocIndexOf(array, key) {
    var length2 = array.length;
    while (length2--) {
      if (eq(array[length2][0], key)) {
        return length2;
      }
    }
    return -1;
  }
  function baseAssign(object, source) {
    return object && copyObject(source, keys(source), object);
  }
  function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
    var result;
    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== void 0) {
      return result;
    }
    if (!isObject2(value)) {
      return value;
    }
    var isArr = isArray2(value);
    if (isArr) {
      result = initCloneArray(value);
      if (!isDeep) {
        return copyArray(value, result);
      }
    } else {
      var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
      if (isBuffer2(value)) {
        return cloneBuffer(value, isDeep);
      }
      if (tag == objectTag || tag == argsTag || isFunc && !object) {
        if (isHostObject(value)) {
          return object ? value : {};
        }
        result = initCloneObject(isFunc ? {} : value);
        if (!isDeep) {
          return copySymbols(value, baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result = initCloneByTag(value, tag, baseClone, isDeep);
      }
    }
    stack || (stack = new Stack2());
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);
    if (!isArr) {
      var props = isFull ? getAllKeys(value) : keys(value);
    }
    arrayEach(props || value, function(subValue, key2) {
      if (props) {
        key2 = subValue;
        subValue = value[key2];
      }
      assignValue(result, key2, baseClone(subValue, isDeep, isFull, customizer, key2, value, stack));
    });
    return result;
  }
  function baseCreate(proto) {
    return isObject2(proto) ? objectCreate(proto) : {};
  }
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray2(object) ? result : arrayPush(result, symbolsFunc(object));
  }
  function baseGetTag(value) {
    return objectToString.call(value);
  }
  function baseIsNative(value) {
    if (!isObject2(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction2(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty2.call(object, key) && key != "constructor") {
        result.push(key);
      }
    }
    return result;
  }
  function cloneBuffer(buffer2, isDeep) {
    if (isDeep) {
      return buffer2.slice();
    }
    var result = new buffer2.constructor(buffer2.length);
    buffer2.copy(result);
    return result;
  }
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
    return result;
  }
  function cloneDataView(dataView, isDeep) {
    var buffer2 = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer2, dataView.byteOffset, dataView.byteLength);
  }
  function cloneMap(map, isDeep, cloneFunc) {
    var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
    return arrayReduce(array, addMapEntry, new map.constructor());
  }
  function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }
  function cloneSet(set, isDeep, cloneFunc) {
    var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
    return arrayReduce(array, addSetEntry, new set.constructor());
  }
  function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
  }
  function cloneTypedArray(typedArray, isDeep) {
    var buffer2 = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer2, typedArray.byteOffset, typedArray.length);
  }
  function copyArray(source, array) {
    var index = -1, length2 = source.length;
    array || (array = Array(length2));
    while (++index < length2) {
      array[index] = source[index];
    }
    return array;
  }
  function copyObject(source, props, object, customizer) {
    object || (object = {});
    var index = -1, length2 = props.length;
    while (++index < length2) {
      var key = props[index];
      var newValue = void 0;
      assignValue(object, key, newValue === void 0 ? source[key] : newValue);
    }
    return object;
  }
  function copySymbols(source, object) {
    return copyObject(source, getSymbols(source), object);
  }
  function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
  }
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  function getNative(object, key) {
    var value = getValue2(object, key);
    return baseIsNative(value) ? value : void 0;
  }
  var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
  var getTag = baseGetTag;
  if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
    getTag = function(value) {
      var result = objectToString.call(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : void 0;
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag;
          case mapCtorString:
            return mapTag;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag;
          case weakMapCtorString:
            return weakMapTag;
        }
      }
      return result;
    };
  }
  function initCloneArray(array) {
    var length2 = array.length, result = array.constructor(length2);
    if (length2 && typeof array[0] == "string" && hasOwnProperty2.call(array, "index")) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }
  function initCloneObject(object) {
    return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
  }
  function initCloneByTag(object, tag, cloneFunc, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag:
        return cloneArrayBuffer(object);
      case boolTag:
      case dateTag:
        return new Ctor(+object);
      case dataViewTag:
        return cloneDataView(object, isDeep);
      case float32Tag:
      case float64Tag:
      case int8Tag:
      case int16Tag:
      case int32Tag:
      case uint8Tag:
      case uint8ClampedTag:
      case uint16Tag:
      case uint32Tag:
        return cloneTypedArray(object, isDeep);
      case mapTag:
        return cloneMap(object, isDeep, cloneFunc);
      case numberTag:
      case stringTag:
        return new Ctor(object);
      case regexpTag:
        return cloneRegExp(object);
      case setTag:
        return cloneSet(object, isDeep, cloneFunc);
      case symbolTag:
        return cloneSymbol(object);
    }
  }
  function isIndex(value, length2) {
    length2 = length2 == null ? MAX_SAFE_INTEGER : length2;
    return !!length2 && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length2);
  }
  function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
    return value === proto;
  }
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e2) {
      }
      try {
        return func + "";
      } catch (e2) {
      }
    }
    return "";
  }
  function cloneDeep2(value) {
    return baseClone(value, true, true);
  }
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  function isArguments(value) {
    return isArrayLikeObject(value) && hasOwnProperty2.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
  }
  var isArray2 = Array.isArray;
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction2(value);
  }
  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }
  var isBuffer2 = nativeIsBuffer || stubFalse;
  function isFunction2(value) {
    var tag = isObject2(value) ? objectToString.call(value) : "";
    return tag == funcTag || tag == genTag;
  }
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  function isObject2(value) {
    var type = typeof value;
    return !!value && (type == "object" || type == "function");
  }
  function isObjectLike(value) {
    return !!value && typeof value == "object";
  }
  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }
  function stubArray() {
    return [];
  }
  function stubFalse() {
    return false;
  }
  module.exports = cloneDeep2;
})(lodash_clonedeep, lodash_clonedeep.exports);
var lodash_clonedeepExports = lodash_clonedeep.exports;
const cloneDeep = /* @__PURE__ */ getDefaultExportFromCjs(lodash_clonedeepExports);
const buildValidationDefaultData = (rule) => {
  switch (rule) {
    case "validation_required":
    case "validation_one_response_per_col":
    case "validation_pattern_email":
      return {};
    case "validation_min_char_length":
      return {
        min_length: 2
      };
    case "validation_max_char_length":
      return {
        max_length: 30
      };
    case "validation_contains":
      return {
        contains: ""
      };
    case "validation_not_contains":
      return {
        not_contains: ""
      };
    case "validation_pattern":
      return {
        pattern: ""
      };
    case "validation_max_word_count":
      return {
        max_count: 300
      };
    case "validation_min_word_count":
      return {
        min_count: 300
      };
    case "validation_between":
      return {
        lower_limit: 20,
        upper_limit: 100
      };
    case "validation_not_between":
      return {
        lower_limit: 20,
        upper_limit: 100
      };
    case "validation_lt":
      return {
        number: 20
      };
    case "validation_lte":
      return {
        number: 20
      };
    case "validation_gt":
      return {
        number: 20
      };
    case "validation_gte":
      return {
        number: 20
      };
    case "validation_equals":
      return {
        number: 20
      };
    case "validation_not_equal":
      return {
        number: 20
      };
    case "validation_min_ranking_count":
    case "validation_min_option_count":
      return {
        min_count: 1
      };
    case "validation_max_ranking_count":
    case "validation_max_option_count":
      return {
        max_count: 1
      };
    case "validation_ranking_count":
    case "validation_option_count":
      return {
        count: 1
      };
    case "validation_file_types":
      return {
        fileTypes: ["image"]
      };
    case "validation_max_file_size":
      return {
        max_size: 250
      };
    default:
      throw "unrecognized rule " + rule;
  }
};
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};
const nextGroupId = (groups2) => {
  if (groups2 && groups2.length) {
    return groups2.map((group) => parseInt(group.code.replace("G", ""))).sort(function(a2, b2) {
      return a2 - b2;
    })[groups2.length - 1] + 1;
  }
  return 1;
};
const nextQuestionId = (state, groups2) => {
  if (groups2.length) {
    let questions = [];
    groups2.forEach((group) => {
      let groupObj = state[group.code];
      if (groupObj.children) {
        groupObj.children.forEach((question) => {
          questions.push(parseInt(question.code.replace("Q", "")));
        });
      }
    });
    if (questions.length) {
      return questions.sort(function(a2, b2) {
        return a2 - b2;
      })[questions.length - 1] + 1;
    }
  }
  return 1;
};
const buildReferenceInstruction = (content, name, key) => {
  const allMatches = getAllMatches(content);
  if (allMatches.length) {
    return {
      code: "reference_".concat(name, "_").concat(key),
      references: allMatches,
      lang: key
    };
  } else {
    return {
      code: "reference_".concat(name, "_").concat(key),
      remove: true
    };
  }
};
const getAllMatches = (inputString) => {
  const regex = /data-instruction=(\"|\')([\w\.!\"!\']+)(\"|\')/g;
  var m2;
  var returnList = [];
  do {
    m2 = regex.exec(inputString);
    if (m2) {
      returnList.push(m2[2]);
    }
  } while (m2);
  return returnList;
};
const surveySetup = {
  code: "Survey",
  rules: [
    {
      title: "order_priority",
      key: "random",
      rules: ["randomize_groups", "prioritize_groups"]
    }
  ]
};
const reorderSetup = {
  code: "globalSetup",
  rules: [
    {
      title: "reorder_setup",
      key: "reorder_setup",
      rules: ["reorder_setup"]
    }
  ]
};
const themeSetup = {
  code: "Survey",
  rules: [
    { title: "theme", rules: ["theme"] },
    {
      title: "navigation_options",
      key: "navigation",
      rules: [
        "navigationMode",
        "allowPrevious",
        "allowIncomplete",
        "allowJump",
        "skipInvalid"
      ]
    },
    {
      title: "order_priority",
      key: "random",
      rules: ["randomize_groups", "prioritize_groups"]
    }
  ]
};
const languageSetup = {
  code: "Survey",
  rules: [{ title: "Translations", rules: ["language"] }]
};
const setupOptions = (type) => {
  switch (type) {
    case "group":
    case "welcome":
    case "end":
      return [
        { title: "show_hide", key: "relevance", rules: ["relevance"] },
        { title: "setup", key: "setup", rules: ["showDescription"] },
        {
          title: "order_priority",
          key: "random",
          rules: ["randomize_questions", "prioritize_questions"]
        }
      ];
    case "text_display":
      return [
        { title: "show_hide", key: "relevance", rules: ["relevance"] },
        { title: "setup", key: "setup", rules: ["showDescription"] }
      ];
    case "image_display":
      return [
        { title: "show_hide", key: "relevance", rules: ["relevance"] },
        { title: "setup", key: "setup", rules: ["showDescription"] },
        { title: "display", key: "display", rules: ["imageWidth"] }
      ];
    case "video_display":
      return [
        { title: "show_hide", key: "relevance", rules: ["relevance"] },
        { title: "setup", key: "setup", rules: ["showDescription"] },
        {
          title: "video_options",
          key: "video_options",
          rules: ["audio_only", "loop"]
        }
      ];
    case "text":
      return [
        { title: "show_hide", key: "relevance", rules: ["relevance"] },
        {
          title: "setup",
          key: "setup",
          rules: ["showDescription", "maxChars", "hint"]
        },
        {
          title: "validation",
          key: "validation",
          rules: [
            "validation_required",
            "validation_max_char_length",
            "validation_min_char_length",
            "validation_pattern",
            "validation_contains",
            "validation_not_contains"
          ]
        }
      ];
    case "other_text":
      return [
        { title: "setup", key: "setup", rules: ["maxChars"] },
        {
          title: "validation",
          key: "validation",
          rules: [
            "validation_required",
            "validation_max_char_length",
            "validation_min_char_length",
            "validation_pattern",
            "validation_contains",
            "validation_not_contains"
          ]
        }
      ];
    case "number":
      return [
        { title: "show_hide", key: "relevance", rules: ["relevance"] },
        {
          title: "setup",
          key: "setup",
          rules: ["showDescription", "maxChars", "decimal_separator", "hint"]
        },
        {
          title: "validation",
          key: "validation",
          rules: [
            "validation_required",
            "validation_between",
            "validation_not_between",
            "validation_lt",
            "validation_lte",
            "validation_gt",
            "validation_gte",
            "validation_equals",
            "validation_not_equal"
          ]
        }
      ];
    case "email":
      return [
        { title: "show_hide", key: "relevance", rules: ["relevance"] },
        {
          title: "setup",
          key: "setup",
          rules: ["showDescription", "maxChars", "hint"]
        },
        {
          title: "validation",
          key: "validation",
          rules: [
            "validation_required",
            "validation_pattern_email",
            "validation_max_char_length",
            "validation_min_char_length"
          ]
        }
      ];
    case "paragraph":
      return [
        { title: "show_hide", key: "relevance", rules: ["relevance"] },
        {
          title: "setup",
          key: "setup",
          rules: ["showDescription", "minRows", "showWordCount", "hint"]
        },
        {
          title: "validation",
          key: "validation",
          rules: [
            "validation_required",
            "validation_max_word_count",
            "validation_min_word_count",
            "validation_contains",
            "validation_not_contains"
          ]
        }
      ];
    case "file_upload":
      return [
        { title: "show_hide", key: "relevance", rules: ["relevance"] },
        { title: "setup", key: "setup", rules: ["showDescription"] },
        {
          title: "validation",
          key: "validation",
          rules: [
            "validation_required",
            "validation_file_types",
            "validation_max_file_size"
          ]
        }
      ];
    case "signature":
      return [
        { title: "show_hide", key: "relevance", rules: ["relevance"] },
        { title: "setup", key: "setup", rules: ["showDescription"] },
        {
          title: "validation",
          key: "validation",
          rules: ["validation_required"]
        }
      ];
    case "photo_capture":
      return [
        { title: "show_hide", key: "relevance", rules: ["relevance"] },
        { title: "setup", key: "setup", rules: ["showDescription", "hint"] },
        {
          title: "validation",
          key: "validation",
          rules: ["validation_required", "validation_max_file_size"]
        }
      ];
    case "barcode":
      return [
        { title: "show_hide", key: "relevance", rules: ["relevance"] },
        { title: "setup", key: "setup", rules: ["showDescription", "hint"] },
        {
          title: "validation",
          key: "validation",
          rules: ["validation_required"]
        }
      ];
    case "video_capture":
      return [
        { title: "show_hide", key: "relevance", rules: ["relevance"] },
        { title: "setup", key: "setup", rules: ["showDescription", "hint"] },
        {
          title: "validation",
          key: "validation",
          rules: ["validation_required", "validation_max_file_size"]
        }
      ];
    case "date_time":
      return [
        { title: "show_hide", key: "relevance", rules: ["relevance"] },
        {
          title: "setup",
          key: "setup",
          rules: [
            "showDescription",
            "dateFormat",
            "fullDayFormat",
            "maxDate",
            "minDate"
          ]
        },
        {
          title: "validation",
          key: "validation",
          rules: ["validation_required"]
        }
      ];
    case "date":
      return [
        { title: "show_hide", key: "relevance", rules: ["relevance"] },
        {
          title: "setup",
          key: "setup",
          rules: ["showDescription", "dateFormat", "maxDate", "minDate"]
        },
        {
          title: "validation",
          key: "validation",
          rules: ["validation_required"]
        }
      ];
    case "time":
      return [
        { title: "show_hide", key: "relevance", rules: ["relevance"] },
        {
          title: "setup",
          key: "setup",
          rules: ["showDescription", "fullDayFormat"]
        },
        {
          title: "validation",
          key: "validation",
          rules: ["validation_required"]
        }
      ];
    case "scq":
      return [
        { title: "show_hide", key: "relevance", rules: ["relevance"] },
        { title: "setup", key: "setup", rules: ["showDescription"] },
        { title: "skip_logic", key: "skip_logic", rules: ["skip_logic"] },
        {
          title: "order_priority",
          key: "random",
          rules: ["randomize_options", "prioritize_options"]
        },
        {
          title: "validation",
          key: "validation",
          rules: ["validation_required"]
        }
      ];
    case "icon_scq":
      return [
        { title: "show_hide", key: "relevance", rules: ["relevance"] },
        { title: "setup", key: "setup", rules: ["showDescription"] },
        { title: "skip_logic", key: "skip_logic", rules: ["skip_logic"] },
        {
          title: "order_priority",
          key: "random",
          rules: ["randomize_options", "prioritize_options"]
        },
        {
          title: "display",
          key: "display",
          rules: ["hideText", "columns", "iconSize", "spacing"]
        },
        {
          title: "validation",
          key: "validation",
          rules: ["validation_required"]
        }
      ];
    case "image_scq":
      return [
        { title: "show_hide", key: "relevance", rules: ["relevance"] },
        { title: "setup", key: "setup", rules: ["showDescription"] },
        {
          title: "display",
          key: "display",
          rules: ["hideText", "columns", "imageAspectRatio", "spacing"]
        },
        { title: "skip_logic", key: "skip_logic", rules: ["skip_logic"] },
        {
          title: "order_priority",
          key: "random",
          rules: ["randomize_options", "prioritize_options"]
        },
        {
          title: "validation",
          key: "validation",
          rules: ["validation_required"]
        }
      ];
    case "mcq":
      return [
        { title: "show_hide", key: "relevance", rules: ["relevance"] },
        { title: "setup", key: "setup", rules: ["showDescription"] },
        {
          title: "order_priority",
          key: "random",
          rules: ["randomize_options", "prioritize_options"]
        },
        {
          title: "validation",
          key: "validation",
          rules: [
            "validation_min_option_count",
            "validation_max_option_count",
            "validation_option_count"
          ]
        }
      ];
    case "ranking":
      return [
        { title: "show_hide", key: "relevance", rules: ["relevance"] },
        { title: "setup", key: "setup", rules: ["showDescription"] },
        {
          title: "order_priority",
          key: "random",
          rules: ["randomize_options", "prioritize_options"]
        },
        {
          title: "validation",
          key: "validation",
          rules: [
            "validation_min_ranking_count",
            "validation_max_ranking_count",
            "validation_ranking_count"
          ]
        }
      ];
    case "image_ranking":
      return [
        { title: "show_hide", key: "relevance", rules: ["relevance"] },
        { title: "setup", key: "setup", rules: ["showDescription"] },
        {
          title: "display",
          key: "display",
          rules: ["hideText", "columns", "imageAspectRatio", "spacing"]
        },
        {
          title: "order_priority",
          key: "random",
          rules: ["randomize_options", "prioritize_options"]
        },
        {
          title: "validation",
          key: "validation",
          rules: [
            "validation_min_ranking_count",
            "validation_max_ranking_count",
            "validation_ranking_count"
          ]
        }
      ];
    case "icon_mcq":
      return [
        { title: "show_hide", key: "relevance", rules: ["relevance"] },
        { title: "setup", key: "setup", rules: ["showDescription"] },
        {
          title: "display",
          key: "display",
          rules: ["hideText", "columns", "iconSize", "spacing"]
        },
        {
          title: "order_priority",
          key: "random",
          rules: ["randomize_options", "prioritize_options"]
        },
        {
          title: "validation",
          key: "validation",
          rules: [
            "validation_min_option_count",
            "validation_max_option_count",
            "validation_option_count"
          ]
        }
      ];
    case "image_mcq":
      return [
        { title: "show_hide", key: "relevance", rules: ["relevance"] },
        { title: "setup", key: "setup", rules: ["showDescription"] },
        {
          title: "display",
          key: "display",
          rules: ["hideText", "columns", "imageAspectRatio", "spacing"]
        },
        {
          title: "order_priority",
          key: "random",
          rules: ["randomize_options", "prioritize_options"]
        },
        {
          title: "validation",
          key: "validation",
          rules: [
            "validation_min_option_count",
            "validation_max_option_count",
            "validation_option_count"
          ]
        }
      ];
    case "scq_icon_array":
      return [
        { title: "show_hide", key: "relevance", rules: ["relevance"] },
        { title: "setup", key: "setup", rules: ["showDescription"] },
        {
          title: "order_priority",
          key: "random",
          rules: [
            "randomize_rows",
            "prioritize_rows",
            "randomize_columns",
            "prioritize_columns"
          ]
        },
        {
          title: "validation",
          key: "validation",
          rules: ["validation_required", "validation_one_response_per_col"]
        }
      ];
    case "scq_array":
      return [
        { title: "show_hide", key: "relevance", rules: ["relevance"] },
        { title: "setup", key: "setup", rules: ["showDescription"] },
        {
          title: "order_priority",
          key: "random",
          rules: [
            "randomize_rows",
            "prioritize_rows",
            "randomize_columns",
            "prioritize_columns"
          ]
        },
        {
          title: "validation",
          key: "validation",
          rules: ["validation_required", "validation_one_response_per_col"]
        }
      ];
    case "nps":
      return [
        { title: "show_hide", key: "relevance", rules: ["relevance"] },
        {
          title: "setup",
          key: "setup",
          rules: ["showDescription", "lower_bound_hint", "higher_bound_hint"]
        },
        {
          title: "validation",
          key: "validation",
          rules: ["validation_required"]
        }
      ];
  }
};
const hasMajorSetup = (setup2) => (setup2 == null ? void 0 : setup2.code) === "Survey" || (setup2 == null ? void 0 : setup2.code) === "globalSetup";
const MANAGE_SURVEY_LANDING_PAGES = {
  DESIGN: "design-survey",
  PREVIEW: "preview",
  RESPONSES: "responses",
  SETTINGS: "edit-survey",
  RESPONSE: "response"
};
const DESIGN_SURVEY_MODE = {
  DESIGN: "design",
  THEME: "theme",
  LANGUAGES: "languages",
  REORDER: "reorder"
};
const inDesign = (mode) => {
  return DESIGN_SURVEY_MODE.DESIGN == mode;
};
const contentEditable = (mode) => {
  return DESIGN_SURVEY_MODE.DESIGN == mode || DESIGN_SURVEY_MODE.LANGUAGES == mode;
};
const PREVIEW_MODE = {
  ONLINE: "online",
  ONLINE_PHONE: "online-phone",
  OFFLINE: "offline"
};
const routes = {
  designSurvey: "/".concat(MANAGE_SURVEY_LANDING_PAGES.DESIGN, "/:surveyId"),
  editSurvey: "/".concat(MANAGE_SURVEY_LANDING_PAGES.SETTINGS, "/:surveyId"),
  responses: "/".concat(MANAGE_SURVEY_LANDING_PAGES.RESPONSES, "/:surveyId"),
  runSurvey: "/run-survey/:surveyId",
  resumeSurvey: "/resume-survey/:surveyId/:responseId",
  iframePreviewSurvey: "/preview-survey/:surveyId",
  iframePreviewGuestSurvey: "/preview-guest-survey/:surveyId",
  guestPreview: "/guest/preview/:surveyId",
  preview: "/preview/:surveyId",
  login: "/login",
  confirmNewUser: "/confirm-new-user/:token",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password",
  dashboard: "/",
  manageUsers: "/manage-users",
  addUser: "/add-user",
  editUser: "/edit-user/:userId",
  profile: "/profile",
  createSurvey: "/create-survey",
  dashboard1: "",
  page404: "*"
};
const addSkipInstructions = (state, code) => {
  const component = state[code];
  if (component.type != "scq" && component.type != "image_scq" && component.type != "icon_scq") {
    return;
  }
  const instructions = scqSkipEquations(code, component);
  instructions.forEach((instruction) => {
    changeInstruction(state[code], instruction);
  });
};
const addMaskedValuesInstructions = (qualifiedCode, component, state) => {
  if (!component.type || ![
    "mcq",
    "image_mcq",
    "icon_mcq",
    "scq",
    "icon_scq",
    "number",
    "image_scq",
    "scq_icon_array",
    "scq_array",
    "date",
    "date_time",
    "time"
  ].includes(component.type)) {
    return;
  }
  switch (component.type) {
    case "date":
      if (component.dateFormat) {
        changeInstruction(component, {
          code: "masked_value",
          isActive: true,
          returnType: "string",
          text: "QlarrScripts.formatSqlDate(".concat(qualifiedCode, '.value, "').concat(component.dateFormat, '")')
        });
      } else {
        changeInstruction(component, { code: "masked_value", remove: true });
      }
      break;
    case "time":
      changeInstruction(component, {
        code: "masked_value",
        isActive: true,
        returnType: "string",
        text: "QlarrScripts.formatTime(".concat(qualifiedCode, ".value, ").concat(component.fullDayFormat || false, ")")
      });
      break;
    case "number":
      if (component.decimal_separator == ",") {
        changeInstruction(component, {
          code: "masked_value",
          isActive: true,
          returnType: "string",
          text: "".concat(qualifiedCode, ".value ? ").concat(qualifiedCode, '.value.toString().replace(".",",") : ').concat(qualifiedCode, '.value == undefined? "" : ').concat(qualifiedCode, ".value")
        });
      } else {
        changeInstruction(component, { code: "masked_value", remove: true });
      }
      break;
    case "date_time":
      if (component.dateFormat) {
        changeInstruction(component, {
          code: "masked_value",
          isActive: true,
          returnType: "string",
          text: "QlarrScripts.formatSqlDate(".concat(qualifiedCode, '.value, "').concat(component.dateFormat, '") + " " + QlarrScripts.formatTime(').concat(qualifiedCode, ".value, ").concat(component.fullDayFormat || false, ")")
        });
      } else {
        changeInstruction(component, { code: "masked_value", remove: true });
      }
      break;
    case "image_scq":
    case "icon_scq":
    case "scq":
      if (component.children && component.children.length) {
        let objText = "{" + component.children.map(
          (el) => el.type == "other" ? '"'.concat(el.code, '": ').concat(el.qualifiedCode, "Atext.value") : '"'.concat(el.code, '": ').concat(el.qualifiedCode, ".label")
        ).join(",") + "}";
        const instruction = {
          code: "masked_value",
          isActive: true,
          returnType: "string",
          text: "".concat(qualifiedCode, ".value ? QlarrScripts.safeAccess(").concat(objText, ",").concat(qualifiedCode, ".value) : ''")
        };
        changeInstruction(component, instruction);
      } else {
        changeInstruction(component, { code: "masked_value", remove: true });
      }
      break;
    case "image_mcq":
    case "icon_mcq":
    case "mcq":
      if (component.children && component.children.length) {
        let text = "[" + component.children.map((answer) => {
          return '{ "value":'.concat(answer.qualifiedCode, ".value,") + ' "label":'.concat(answer.type == "other" ? answer.qualifiedCode + "Atext.value" : answer.qualifiedCode + ".label", " }");
        }).join(", ") + "]";
        const instruction = {
          code: "masked_value",
          isActive: true,
          returnType: "string",
          text: "QlarrScripts.listStrings(".concat(text, '.filter(function(elem){return QlarrScripts.safeAccess(elem,"value")}).map(function(elem){return QlarrScripts.safeAccess(elem,"label")}), Survey.lang)')
        };
        changeInstruction(component, instruction);
      } else {
        changeInstruction(component, { code: "masked_value", remove: true });
      }
      break;
    case "scq_icon_array":
    case "scq_array":
      if (component.children && component.children.length && component.children.filter((el) => el.type == "column").length && component.children.filter((el) => el.type === "row").length) {
        let objText = "{" + component.children.filter((el) => el.type == "column").map((el) => '"'.concat(el.code, '": ').concat(el.qualifiedCode, ".label")).join(",") + "}";
        component.children.filter((el) => el.type === "row").forEach((el) => {
          const instruction = {
            code: "masked_value",
            isActive: true,
            returnType: "string",
            text: "".concat(el.qualifiedCode, ".value ? QlarrScripts.safeAccess(").concat(objText, ",").concat(el.qualifiedCode, ".value) : ''")
          };
          changeInstruction(state[el.qualifiedCode], instruction);
        });
      } else if (component.children && component.children.filter((el) => el.type === "row").length) {
        component.children.filter((el) => el.type === "row").forEach((el) => {
          changeInstruction(state[el.qualifiedCode], {
            code: "masked_value",
            remove: true
          });
        });
      }
  }
  return component;
};
const changeInstruction = (componentState, instruction) => {
  if (typeof componentState.instructionList === "undefined") {
    componentState.instructionList = [];
  }
  if (instruction.remove) {
    removeInstruction(componentState, instruction.code);
  } else {
    editInstruction(componentState, instruction);
  }
};
const removeInstruction = (componentState, code) => {
  if (componentState.instructionList.length) {
    const index = componentState.instructionList.findIndex(
      (el) => el.code === code
    );
    if (index < 0) {
      return;
    } else if (componentState.instructionList.length == 1) {
      componentState.instructionList = [];
    } else {
      componentState.instructionList.splice(index, 1);
    }
  }
};
const addQuestionInstructions = (question) => {
  let type = question.type;
  switch (type) {
    case "text":
      question.instructionList = [
        {
          code: "value",
          isActive: false,
          returnType: "string",
          text: ""
        }
      ];
      break;
    case "number":
      question.instructionList = [
        {
          code: "value",
          isActive: false,
          returnType: "double",
          text: ""
        }
      ];
      break;
    case "email":
      question.instructionList = [
        {
          code: "value",
          isActive: false,
          returnType: "string",
          text: ""
        }
      ];
      break;
    case "paragraph":
      question.instructionList = [
        {
          code: "value",
          isActive: false,
          returnType: "string",
          text: ""
        }
      ];
      break;
    case "barcode":
      question.instructionList = [
        {
          code: "value",
          isActive: false,
          returnType: "string",
          text: ""
        },
        {
          code: "mode",
          isActive: false,
          returnType: "string",
          text: "offline"
        }
      ];
      break;
    case "scq":
      question.instructionList = [
        {
          code: "value",
          isActive: false,
          returnType: "string",
          text: ""
        }
      ];
      break;
    case "icon_scq":
      question.instructionList = [
        {
          code: "value",
          isActive: false,
          returnType: "string",
          text: ""
        }
      ];
      break;
    case "image_scq":
      question.instructionList = [
        {
          code: "value",
          isActive: false,
          returnType: "string",
          text: ""
        }
      ];
      break;
    case "nps":
      question.instructionList = [
        {
          code: "value",
          isActive: false,
          returnType: "int",
          text: ""
        }
      ];
      break;
    case "file_upload":
      question.instructionList = [
        {
          code: "value",
          isActive: false,
          returnType: "file",
          text: ""
        }
      ];
      break;
    case "signature":
      question.instructionList = [
        {
          code: "value",
          isActive: false,
          returnType: "file",
          text: ""
        }
      ];
      break;
    case "photo_capture":
      question.instructionList = [
        {
          code: "value",
          isActive: false,
          returnType: "file",
          text: ""
        },
        {
          code: "mode",
          isActive: false,
          returnType: "string",
          text: "offline"
        }
      ];
      break;
    case "video_capture":
      question.instructionList = [
        {
          code: "value",
          isActive: false,
          returnType: "file",
          text: ""
        },
        {
          code: "mode",
          isActive: false,
          returnType: "string",
          text: "offline"
        }
      ];
      break;
    case "date":
      question.instructionList = [
        {
          code: "value",
          isActive: false,
          returnType: "date",
          text: ""
        }
      ];
      break;
    case "date_time":
      question.instructionList = [
        {
          code: "value",
          isActive: false,
          returnType: "date",
          text: ""
        }
      ];
      break;
    case "time":
      question.instructionList = [
        {
          code: "value",
          isActive: false,
          returnType: "date",
          text: ""
        }
      ];
      break;
  }
};
const addAnswerInstructions = (state, answer, parentCode, questionCode) => {
  const questionType = state[questionCode].type;
  const type = answer.type;
  const valueInstruction = {
    code: "value",
    isActive: false,
    returnType: questionType == "ranking" || questionType == "nps" || questionType == "image_ranking" ? "int" : questionType == "scq_array" || questionType == "scq_icon_array" ? "string" : "boolean",
    text: ""
  };
  switch (type) {
    case "column":
      return;
    case "row":
      changeInstruction(answer, valueInstruction);
      return;
    case "other":
      if (questionType !== "scq") {
        changeInstruction(answer, valueInstruction);
      }
      return;
    case "other_text":
      changeInstruction(answer, {
        code: "value",
        isActive: false,
        returnType: "string",
        text: ""
      });
      changeInstruction(answer, {
        code: "conditional_relevance",
        isActive: true,
        returnType: "boolean",
        text: questionType === "scq" ? "".concat(questionCode, ".value === 'Aother'") : "".concat(parentCode, ".value === true")
      });
      return;
    default:
      if (questionType !== "scq") {
        changeInstruction(answer, valueInstruction);
      }
      return;
  }
};
const addValidationEquation = (state, qualifiedCode, rule) => {
  const component = state[qualifiedCode];
  const validationInstruction = validationEquation(
    qualifiedCode,
    component,
    rule,
    component["validation"][rule]
  );
  changeInstruction(component, validationInstruction);
};
const editInstruction = (componentState, instruction) => {
  const index = componentState.instructionList.findIndex(
    (el) => el.code === instruction.code
  );
  if (index < 0) {
    componentState.instructionList.push(instruction);
  } else {
    componentState.instructionList[index] = instruction;
  }
};
const scqSkipEquations = (qualifiedCode, component) => {
  const skipLogic = component.skip_logic;
  const instructionList = [];
  component.children.forEach((el) => {
    const key = el.code;
    const skipObj = skipLogic[key];
    const instructionCode = "skip_to_on_" + key;
    if (!skipObj || !skipObj.skipTo || skipObj.skipTo == "proceed") {
      instructionList.push({ code: instructionCode, remove: true });
    } else {
      const instruction = {
        code: instructionCode,
        condition: qualifiedCode + '.value == "' + key + '"',
        isActive: true,
        toEnd: skipObj.toEnd || false,
        skipToComponent: skipObj.skipTo
      };
      instructionList.push(instruction);
    }
  });
  return instructionList;
};
const validationEquation = (qualifiedCode, component, key, validation) => {
  if (!validation.isActive || key == "validation_not_contains" && !validation.not_contains) {
    return { code: key, remove: true };
  }
  let instructionText = "";
  switch (key) {
    case "validation_required":
      instructionText = requiredText(qualifiedCode, component);
      return booleanActiveInstruction(key, instructionText);
    case "validation_min_char_length":
      instructionText = "QlarrScripts.isNotVoid(".concat(qualifiedCode, ".value) ") + "&& ".concat(qualifiedCode, ".value.length < ").concat(validation.min_length || 0);
      return booleanActiveInstruction(key, instructionText);
    case "validation_one_response_per_col":
      instructionText = "QlarrScripts.hasDuplicates([".concat(component.children.filter((el) => el.type == "row").map((el) => el.qualifiedCode + ".value"), "].filter(x=>x))");
      return booleanActiveInstruction(key, instructionText);
    case "validation_max_char_length":
      instructionText = "QlarrScripts.isNotVoid(".concat(qualifiedCode, ".value) ") + "&& ".concat(qualifiedCode, ".value.length > ").concat(validation.max_length || 0);
      return booleanActiveInstruction(key, instructionText);
    case "validation_contains":
      instructionText = "QlarrScripts.isNotVoid(".concat(qualifiedCode, ".value) ") + "&& !".concat(qualifiedCode, '.value.includes("').concat(validation.contains || "", '")');
      return booleanActiveInstruction(key, instructionText);
    case "validation_not_contains":
      instructionText = "QlarrScripts.isNotVoid(".concat(qualifiedCode, ".value) ") + "&& ".concat(qualifiedCode, '.value.includes("').concat(validation.not_contains, '")');
      return booleanActiveInstruction(key, instructionText);
    case "validation_file_types":
      const mimes = fileTypesToMimesArray(validation.fileTypes);
      instructionText = "QlarrScripts.isNotVoid(".concat(qualifiedCode, ".value) ") + "&& ![".concat(mimes.map((el) => '"' + el + '"').join(
        ","
      ), "].includes(QlarrScripts.safeAccess(").concat(qualifiedCode, '.value,"type"))');
      return booleanActiveInstruction(key, instructionText);
    case "validation_max_file_size":
      instructionText = "QlarrScripts.isNotVoid(".concat(qualifiedCode, ".value) ") + "&& QlarrScripts.safeAccess(".concat(qualifiedCode, '.value,"size")/ 1024 > ').concat(validation.max_size);
      return booleanActiveInstruction(key, instructionText);
    case "validation_pattern":
      if (!isValidRegex(validation.pattern)) {
        return { code: key, remove: true };
      }
      instructionText = "QlarrScripts.isNotVoid(".concat(qualifiedCode, ".value) ") + '&& !(new RegExp("'.concat(validation.pattern, '").test(').concat(qualifiedCode, ".value))");
      return booleanActiveInstruction(key, instructionText);
    case "validation_pattern_email":
      instructionText = "QlarrScripts.isNotVoid(".concat(qualifiedCode, ".value) ") + "&&  !/^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$/.test(".concat(qualifiedCode, ".value)");
      return booleanActiveInstruction(key, instructionText);
    case "validation_max_word_count":
      instructionText = "QlarrScripts.isNotVoid(".concat(qualifiedCode, ".value) ") + "&&  QlarrScripts.wordCount(".concat(qualifiedCode, ".value) > ").concat(validation.max_count || 0);
      return booleanActiveInstruction(key, instructionText);
    case "validation_min_word_count":
      instructionText = "QlarrScripts.isNotVoid(".concat(qualifiedCode, ".value) ") + "&&  QlarrScripts.wordCount(".concat(qualifiedCode, ".value) < ").concat(validation.min_count || 0);
      return booleanActiveInstruction(key, instructionText);
    case "validation_between":
      instructionText = "QlarrScripts.isNotVoid(".concat(qualifiedCode, ".value) ") + "&& (".concat(qualifiedCode, ".value < ").concat(validation.lower_limit || 0, " ") + "|| ".concat(qualifiedCode, ".value > ").concat(validation.upper_limit || 0, ")");
      return booleanActiveInstruction(key, instructionText);
    case "validation_not_between":
      instructionText = "QlarrScripts.isNotVoid(".concat(qualifiedCode, ".value) ") + "&& (".concat(qualifiedCode, ".value >= ").concat(validation.lower_limit || 0, " ") + "&& ".concat(qualifiedCode, ".value <= ").concat(validation.upper_limit || 0, ")");
      return booleanActiveInstruction(key, instructionText);
    case "validation_lt":
      instructionText = "QlarrScripts.isNotVoid(".concat(qualifiedCode, ".value) ") + "&& ".concat(qualifiedCode, ".value >= ").concat(validation.number || 0);
      return booleanActiveInstruction(key, instructionText);
    case "validation_lte":
      instructionText = "QlarrScripts.isNotVoid(".concat(qualifiedCode, ".value) ") + "&& ".concat(qualifiedCode, ".value > ").concat(validation.number || 0);
      return booleanActiveInstruction(key, instructionText);
    case "validation_gt":
      instructionText = "QlarrScripts.isNotVoid(".concat(qualifiedCode, ".value) ") + "&& ".concat(qualifiedCode, ".value <= ").concat(validation.number || 0);
      return booleanActiveInstruction(key, instructionText);
    case "validation_gte":
      instructionText = "QlarrScripts.isNotVoid(".concat(qualifiedCode, ".value) ") + "&& ".concat(qualifiedCode, ".value < ").concat(validation.number || 0);
      return booleanActiveInstruction(key, instructionText);
    case "validation_equals":
      instructionText = "QlarrScripts.isVoid(".concat(qualifiedCode, ".value) ") + "&& ".concat(qualifiedCode, ".value != ").concat(validation.number || 0);
      return booleanActiveInstruction(key, instructionText);
    case "validation_not_equal":
      instructionText = "QlarrScripts.isVoid(".concat(qualifiedCode, ".value) ") + "&& ".concat(qualifiedCode, ".value == ").concat(validation.number || 0);
      return booleanActiveInstruction(key, instructionText);
    case "validation_min_option_count":
    case "validation_min_ranking_count":
      instructionText = "[".concat(component.children.map(
        (answer) => answer.qualifiedCode + ".value"
      ), "].filter(x=>x).length ") + "< ".concat(validation.min_count || 0);
      return booleanActiveInstruction(key, instructionText);
    case "validation_max_option_count":
    case "validation_max_ranking_count":
      instructionText = "[".concat(component.children.map(
        (answer) => answer.qualifiedCode + ".value"
      ), "].filter(x=>x).length ") + "> ".concat(validation.max_count || 0);
      return booleanActiveInstruction(key, instructionText);
    case "validation_option_count":
    case "validation_ranking_count":
      instructionText = "[".concat(component.children.map(
        (answer) => answer.qualifiedCode + ".value"
      ), "].filter(x=>x).length ") + "!== ".concat(validation.count || 0);
      return booleanActiveInstruction(key, instructionText);
  }
};
const booleanActiveInstruction = (key, instructionText) => {
  return {
    code: key,
    text: instructionText,
    isActive: true,
    returnType: "boolean"
  };
};
const requiredText = (qualifiedCode, component) => {
  if (component.type == "file_upload" || component.type == "signature" || component.type == "photo_capture" || component.type == "video_capture") {
    return "QlarrScripts.isVoid(".concat(qualifiedCode, ".value) || !").concat(qualifiedCode, ".value.size || !").concat(qualifiedCode, ".value.stored_filename");
  } else if (component.type == "scq_array" || component.type == "scq_icon_array") {
    const rows = component.children.filter((child) => child.type == "row");
    return "[".concat(rows.map(
      (answer) => answer.qualifiedCode + ".value"
    ), "].filter(x=>x).length ") + " < " + rows.length;
  } else {
    return "QlarrScripts.isVoid(".concat(qualifiedCode, ".value)");
  }
};
const isValidRegex = (regex) => {
  if (!regex) {
    return false;
  }
  try {
    new RegExp(regex);
  } catch (e2) {
    return false;
  }
  return true;
};
const updateRandomByRule = (componentState, randomRule) => {
  var _a2, _b2, _c2, _d2, _e, _f;
  if (["randomize_questions", "randomize_groups", "randomize_options"].indexOf(
    randomRule
  ) > -1 && componentState[randomRule] !== "custom") {
    const childCodes = (_b2 = (_a2 = componentState.children) == null ? void 0 : _a2.filter(
      (it) => {
        var _a3, _b3, _c3;
        return ((_a3 = it.groupType) == null ? void 0 : _a3.toLowerCase()) != "end" && ((_b3 = it.type) == null ? void 0 : _b3.toLowerCase()) != "other" && ((_c3 = it.groupType) == null ? void 0 : _c3.toLowerCase()) != "welcome";
      }
    )) == null ? void 0 : _b2.map((it) => it.code);
    if (childCodes.length == 0 || !componentState[randomRule]) {
      componentState[randomRule] = false;
      removeInstruction(componentState, "random_group");
      return;
    }
    const instruction = {
      code: "random_group",
      groups: [{ codes: childCodes, randomOption: componentState[randomRule] }]
    };
    changeInstruction(componentState, instruction);
  } else if (["randomize_rows"].indexOf(randomRule) > -1 && componentState[randomRule] !== "custom") {
    const childCodes = (_d2 = (_c2 = componentState.children) == null ? void 0 : _c2.filter((child) => child.type == "row")) == null ? void 0 : _d2.map((it) => it.code);
    if (childCodes.length == 0 || !componentState[randomRule]) {
      componentState[randomRule] = false;
      removeInstruction(componentState, "random_group");
      return;
    }
    const randomInstruction = instructionByCode(componentState, "random_group");
    const groups2 = (randomInstruction == null ? void 0 : randomInstruction.groups) || [];
    const groupsWithRowAnswers = groups2.filter((group) => {
      return !group.codes.some((item) => childCodes.includes(item));
    });
    groupsWithRowAnswers.push({
      codes: childCodes,
      randomOption: componentState[randomRule]
    });
    const instruction = {
      code: "random_group",
      groups: groupsWithRowAnswers
    };
    changeInstruction(componentState, instruction);
  } else if (["randomize_columns"].indexOf(randomRule) > -1 && componentState[randomRule] !== "custom") {
    const childCodes = (_f = (_e = componentState.children) == null ? void 0 : _e.filter((child) => child.type == "column")) == null ? void 0 : _f.map((it) => it.code);
    if (childCodes.length == 0 || !componentState[randomRule]) {
      componentState[randomRule] = false;
      removeInstruction(componentState, "random_group");
      return;
    }
    const randomInstruction = instructionByCode(componentState, "random_group");
    const groups2 = (randomInstruction == null ? void 0 : randomInstruction.groups) || [];
    const groupsWithRowAnswers = groups2.filter((group) => {
      return !group.codes.some((item) => childCodes.includes(item));
    });
    groupsWithRowAnswers.push({
      codes: childCodes,
      randomOption: componentState[randomRule]
    });
    const instruction = {
      code: "random_group",
      groups: groupsWithRowAnswers
    };
    changeInstruction(componentState, instruction);
  }
};
const conditionalRelevanceEquation = (logic, rule, state) => {
  const code = "conditional_relevance";
  if (rule == "show_always") {
    return { code, remove: true };
  } else if (rule == "hide_always") {
    return {
      code,
      text: "false",
      isActive: false,
      returnType: "boolean"
    };
  }
  const text = jsonToJs(logic, false, (code2) => state[code2].type);
  if (rule == "show_if") {
    return { code, text, isActive: true, returnType: "boolean" };
  } else if (rule == "hide_if") {
    return {
      code,
      text: "!(".concat(text, ")"),
      isActive: true,
      returnType: "boolean"
    };
  } else {
    throw "WTF";
  }
};
const jsonToJs = (json, nested2, getComponentType) => {
  if (typeof json !== "object") {
    return "";
  }
  const key = Object.keys(json)[0];
  const value = json[key];
  switch (key) {
    case "and":
      return wrapIfNested(
        nested2,
        value.map((el) => jsonToJs(el, true, getComponentType)).join(" && ")
      );
    case "or":
      return wrapIfNested(
        nested2,
        value.map((el) => jsonToJs(el, true, getComponentType)).join(" || ")
      );
    case "!":
      return "!" + wrapIfNested(
        nested2,
        jsonToJs(value, true, getComponentType) + (nested2 ? ")" : "")
      );
    case "is_relevant":
      return "".concat(capture(value), ".relevance");
    case "is_not_relevant":
      return "!".concat(capture(value), ".relevance");
    case "is_online":
      return 'Survey.mode=="online"';
    case "is_offline":
      return 'Survey.mode=="offline"';
    case "is_valid":
      return "".concat(capture(value), ".validity");
    case "is_not_valid":
      return "!".concat(capture(value), ".validity");
    case "is_empty":
      const qCode1 = capture(value);
      if (["file_upload", "signature", "photo_capture", "video_capture"].indexOf(
        getComponentType(qCode1)
      ) > -1) {
        return wrapIfNested(
          nested2,
          "QlarrScripts.isNotVoid(".concat(qCode1, ".value) && ").concat(qCode1, ".value.size && ").concat(qCode1, ".value.stored_filename")
        );
      } else {
        return "QlarrScripts.isVoid(".concat(capture(value), ".value)");
      }
    case "is_not_empty":
      const qCode = capture(value);
      if (["file_upload", "signature", "photo_capture", "video_capture"].indexOf(
        getComponentType(qCode)
      ) > -1) {
        return wrapIfNested(
          nested2,
          "QlarrScripts.isVoid(".concat(qCode, ".value) || !").concat(qCode, ".value.size || !").concat(qCode, ".value.stored_filename")
        );
      } else {
        return "QlarrScripts.isNotVoid(".concat(capture(value), ".value)");
      }
    case "==":
    case "!=":
    case "<":
    case "<=":
    case ">":
    case ">=":
    case "between":
    case "not_between":
      let type = getComponentType(capture(value[0]));
      let leftOperand = type == "date" || type == "date_time" || type == "time" ? "QlarrScripts.sqlDateTimeToDate(".concat(capture(value[0]), ".value)") : "".concat(capture(value[0]), ".value");
      if (["==", "!=", "<", "<=", ">", ">="].includes(key)) {
        return "".concat(leftOperand).concat(key).concat(capture(value[1], type));
      } else if (key == "between") {
        return wrapIfNested(
          nested2,
          "(".concat(leftOperand, ">=").concat(capture(
            value[1],
            type
          ), " && ").concat(leftOperand, "<=").concat(capture(value[2], type), ")")
        );
      } else if (key == "not_between") {
        return wrapIfNested(
          nested2,
          "(".concat(leftOperand, "<").concat(capture(
            value[1],
            type
          ), " || ").concat(leftOperand, ">").concat(capture(value[2], type), ")")
        );
      } else {
        throw "WTF";
      }
    case "startsWith":
      return wrapIfNested(
        nested2,
        "".concat(capture(value[0]), ".value?.startsWith(").concat(capture(value[1]), ")")
      );
    case "endsWith":
      return wrapIfNested(
        nested2,
        "".concat(capture(value[0]), ".value?.endsWith(").concat(capture(value[1]), ")")
      );
    case "contains":
      return wrapIfNested(
        nested2,
        "".concat(capture(value[0]), ".value?.indexOf(").concat(capture(value[1]), ") > -1")
      );
    case "not_contains":
      return wrapIfNested(
        nested2,
        "!".concat(capture(value[0]), ".value || ").concat(capture(
          value[0]
        ), ".value?.indexOf(").concat(capture(value[1]), ") == -1")
      );
    case "in":
      const code = capture(value[0]);
      if (code == "survey_lang") {
        return "[".concat(value[1].map(
          (el) => '"' + el + '"'
        ), "].indexOf(Survey.lang) !== -1");
      } else if (getComponentType(code) == "nps") {
        return "[".concat(value[1].map((el) => +el), "].indexOf(").concat(code, ".value) !== -1");
      } else if (["mcq", "image_mcq", "icon_mcq"].indexOf(getComponentType(code)) > -1) {
        return "[".concat(value[1].map(
          (el) => code + el + ".value"
        ), "].filter(x=>x).length > 0");
      } else {
        return "[".concat(value[1].map(
          (el) => '"' + el + '"'
        ), "].indexOf(").concat(code, ".value) !== -1");
      }
    case "not_in":
      const code1 = capture(value[0]);
      if (code1 == "survey_lang") {
        return "[".concat(value[1].map(
          (el) => '"' + el + '"'
        ), "].indexOf(Survey.lang) == -1");
      } else if (getComponentType(code1) == "nps") {
        return "[".concat(value[1].map((el) => +el), "].indexOf(").concat(code1, ".value) == -1");
      } else if (["mcq", "image_mcq", "icon_mcq"].indexOf(getComponentType(code1)) > -1) {
        return "[".concat(value[1].map(
          (el) => questionCode1 + el + ".value"
        ), "].filter(x=>x).length == 0");
      } else {
        return "[".concat(value[1].map(
          (el) => '"' + el + '"'
        ), "].indexOf(").concat(code1, ".value) == -1");
      }
    default:
      return "";
  }
};
const wrapIfNested = (nested2, text) => {
  return (nested2 ? "(" : "") + text + (nested2 ? ")" : "");
};
const capture = (value, type) => {
  if (type == "time") {
    return 'QlarrScripts.sqlDateTimeToDate("1970-01-01 '.concat(integerToTime(
      value
    ), '")');
  } else if (typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]") {
    return type == "date_time" ? 'QlarrScripts.sqlDateTimeToDate("'.concat(toSqlDateTime(value), '")') : 'QlarrScripts.sqlDateTimeToDate("'.concat(toSqlDateTimeIgnoreTime(value), '")');
  }
  if (typeof value === "object") {
    return value[Object.keys(value)[0]];
  } else if (typeof value === "string") {
    return '"' + value + '"';
  } else {
    return value;
  }
};
const integerToTime = (time) => {
  let hours = Math.floor(time / 3600);
  let hoursString = hours >= 10 && hours <= 23 ? "" + hours : "0" + hours;
  let minutes = time % 3600 / 60;
  let minutesString = minutes >= 10 && minutes <= 59 ? "" + minutes : "0" + minutes;
  return hoursString + ":" + minutesString + ":00";
};
const toSqlDateTime = (date) => {
  return date.getFullYear() + "-" + ("00" + (date.getMonth() + 1)).slice(-2) + "-" + ("00" + date.getDate()).slice(-2) + " " + ("00" + date.getHours()).slice(-2) + ":" + ("00" + date.getMinutes()).slice(-2) + ":" + ("00" + date.getSeconds()).slice(-2);
};
const toSqlDateTimeIgnoreTime = (date) => {
  return date.getFullYear() + "-" + ("00" + (date.getMonth() + 1)).slice(-2) + "-" + ("00" + date.getDate()).slice(-2) + " 00:00:00";
};
const instructionByCode = (component, code) => component.instructionList ? component.instructionList.find((el) => el.code === code) : void 0;
const fileTypesToMimesArray = (fileTypes) => {
  let accepted = [];
  fileTypes == null ? void 0 : fileTypes.forEach((el) => {
    accepted = accepted.concat(acceptedFileTypes(el));
  });
  return accepted;
};
const acceptedFileTypes = (fileType) => {
  switch (fileType) {
    case "presentation":
      return [
        "application/mspowerpoint",
        "application/vnd.google-apps.presentation",
        "application/vnd.ms-powerpoint",
        "application/vnd.ms-powerpoint.presentation.macroEnabled.12",
        "application/vnd.ms-powerpoint.presentation.macroenabled.12",
        "application/vnd.ms-powerpoint.slideshow.macroEnabled.12",
        "application/vnd.ms-powerpoint.slideshow.macroenabled.12",
        "application/vnd.ms-powerpoint.template.macroEnabled.12",
        "application/vnd.ms-powerpoint.template.macroenabled.12",
        "application/vnd.oasis.opendocument.presentation",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
        "application/vnd.openxmlformats-officedocument.presentationml.template"
      ];
    case "document":
      return [
        "application/vnd.google-apps.document",
        "application/vnd.ms-word",
        "application/vnd.ms-word.document.macroEnabled.12",
        "application/vnd.ms-word.document.macroenabled.12",
        "application/vnd.ms-word.template.macroEnabled.12",
        "application/vnd.ms-word.template.macroenabled.12",
        "application/vnd.oasis.opendocument.text",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
        "text/plain",
        "application/msword"
      ];
    case "spreadsheet":
      return [
        "application/msexcel",
        "application/vnd.google-apps.spreadsheet",
        "application/vnd.ms-excel",
        "application/vnd.ms-excel.sheet.macroEnabled.12",
        "application/vnd.ms-excel.sheet.macroenabled.12",
        "application/vnd.ms-excel.template.macroEnabled.12",
        "application/vnd.ms-excel.template.macroenabled.12",
        "application/vnd.oasis.opendocument.spreadsheet",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
        "text/csv"
      ];
    case "pdf":
      return ["application/pdf"];
    case "image":
      return [
        "image/bmp",
        "image/gif",
        "image/heic",
        "image/heif",
        "image/jpeg",
        "image/png",
        "image/tiff",
        "image/vnd.microsoft.icon",
        "image/webp",
        "image/x-ms-bmp"
      ];
    case "video":
      return [
        "application/vnd.google-apps.video",
        "video/3gpp",
        "video/3gpp2",
        "video/avi",
        "video/flv",
        "video/mp2t",
        "video/mp4",
        "video/mp4v-es",
        "video/mpeg",
        "video/ogg",
        "video/quicktime",
        "video/vnd.mts",
        "video/webm",
        "video/x-flv",
        "video/x-m4v",
        "video/x-matroska",
        "video/x-ms-asf",
        "video/x-ms-wm",
        "video/x-ms-wmv",
        "video/x-ms-wvx",
        "video/x-msvideo",
        "video/x-quicktime"
      ];
    case "audio":
      return [
        "application/vnd.google-apps.audio",
        "audio/mpeg",
        "audio/mp3",
        "audio/mp4",
        "audio/midi",
        "audio/x-mid",
        "audio/x-midi",
        "audio/wav",
        "audio/x-wav",
        "audio/vnd.wav",
        "audio/flac",
        "audio/ogg",
        "audio/vorbis"
      ];
  }
};
const processValidation = (state, code, rule, modifyEquation = true) => {
  const component = state[code];
  if (component.designErrors && component.designErrors.length) {
    component.validation[rule].isActive = false;
    removeInstruction(component, rule);
    return;
  }
  component.validation[rule] = cleanupValidationData(
    component,
    rule,
    component.validation[rule]
  );
  if ((component.type == "scq_array" || component.type == "scq_icon_array") && rule == "validation_required") {
    component.children.filter((child) => child.type == "row").forEach((row) => {
      const child = state[row.qualifiedCode];
      if (!child.validation) {
        child.validation = {};
      }
      child.validation[rule] = component.validation[rule];
      addValidationEquation(state, row.qualifiedCode, rule);
    });
    return;
  }
  if (modifyEquation) {
    addValidationEquation(state, code, rule);
  }
};
const cleanupValidationData = (component, key, validation) => {
  switch (key) {
    case "validation_required":
    case "validation_one_response_per_col":
    case "validation_pattern_email":
    case "validation_contains":
    case "validation_not_contains":
    case "validation_pattern":
    case "validation_max_word_count":
    case "validation_min_word_count":
    case "validation_between":
    case "validation_not_between":
    case "validation_lt":
    case "validation_lte":
    case "validation_gt":
    case "validation_gte":
    case "validation_equals":
    case "validation_not_equal":
      return validation;
    case "validation_min_char_length":
      return {
        ...validation,
        min_length: Math.min(component.maxChars || 30, validation.min_length)
      };
    case "validation_max_char_length":
      return {
        ...validation,
        max_length: Math.min(component.maxChars || 30, validation.max_length)
      };
    case "validation_min_ranking_count":
    case "validation_min_option_count":
      return {
        ...validation,
        min_count: Math.min(component.children.length, validation.min_count)
      };
    case "validation_max_ranking_count":
    case "validation_max_option_count":
      return {
        ...validation,
        max_count: Math.min(component.children.length, validation.max_count)
      };
    case "validation_ranking_count":
    case "validation_option_count":
      return {
        ...validation,
        count: Math.min(component.children.length, validation.count)
      };
    default:
      return validation;
  }
};
const reservedKeys = ["setup", "reorder_refresh_code"];
const designState = createSlice({
  name: "designState",
  initialState: { state: {} },
  reducers: {
    designStateReceived: (state, action2) => {
      let keys = Object.keys(state).filter((el) => !reservedKeys.includes(el));
      let newState = action2.payload;
      keys = Object.keys(newState);
      keys.forEach((key) => {
        if (!isEquivalent(state[key], newState[key])) {
          state[key] = newState[key];
        }
      });
      state.lastAddedComponent = null;
    },
    setup(state, action2) {
      var _a2, _b2;
      const payload = action2.payload;
      if (payload.code != ((_a2 = state.setup) == null ? void 0 : _a2.code) || !isEquivalent(payload.rules, (_b2 = state.setup) == null ? void 0 : _b2.rules) || payload.expanded || payload.highlighted) {
        state.setup = action2.payload;
      }
    },
    newVersionReceived(state, action2) {
      const payload = action2.payload;
      state.versionDto = payload;
    },
    setupToggleExpand(state, action2) {
      const key = action2.payload;
      if (!state.setup.expanded) {
        state.setup.expanded = [];
      }
      if (!state.setup.expanded.includes(key)) {
        state.setup.expanded.push(key);
      } else {
        state.setup.expanded.splice(state.setup.expanded.indexOf(key), 1);
      }
    },
    changeValidationValue(state, action2) {
      let payload = action2.payload;
      if (!state[payload.code]["validation"]) {
        state[payload.code]["validation"] = {};
      }
      if (!state[payload.code]["validation"][payload.rule]) {
        state[payload.code]["validation"][payload.rule] = buildValidationDefaultData(payload.rule);
      }
      state[payload.code]["validation"][payload.rule][payload.key] = payload.value;
      processValidation(
        state,
        payload.code,
        payload.rule,
        payload.rule != "content"
      );
    },
    resetSetup(state) {
      if (state.langInfo) {
        state.langInfo.lang = state.langInfo.mainLang;
        state.langInfo.onMainLang = true;
      }
      if (!state.globalSetup) {
        state.globalSetup = {};
      }
      state.globalSetup.reorder_setup = void 0;
      delete state["setup"];
      state.designMode = DESIGN_SURVEY_MODE.DESIGN;
    },
    setDesignModeToLang(state) {
      designState.caseReducers.resetSetup(state);
      designState.caseReducers.setup(state, { payload: languageSetup });
      state.designMode = DESIGN_SURVEY_MODE.LANGUAGES;
    },
    setDesignModeToTheme(state) {
      designState.caseReducers.resetSetup(state);
      designState.caseReducers.setup(state, { payload: themeSetup });
      state.designMode = DESIGN_SURVEY_MODE.THEME;
    },
    setDesignModeToReorder(state) {
      designState.caseReducers.resetSetup(state);
      designState.caseReducers.setup(state, { payload: reorderSetup });
      if (!state.globalSetup) {
        state.globalSetup = {};
      }
      state.globalSetup.reorder_setup = "collapse_questions";
      state.designMode = DESIGN_SURVEY_MODE.REORDER;
    },
    changeAttribute: (state, action2) => {
      let payload = action2.payload;
      if (action2.payload.key == "content" || action2.payload.key == "instructionList" || action2.payload.key == "relevance" || action2.payload.key == "resources") {
        throw "We are changing attributes way too much than we should";
      }
      if (!state[payload.code]) {
        state[payload.code] = {};
      }
      state[payload.code][payload.key] = payload.value;
      if (action2.payload.key == "maxChars") {
        cleanupValidation(state, payload.code);
      } else if (action2.payload.key == "dateFormat") {
        addMaskedValuesInstructions(payload.code, state[payload.code], state);
      } else if (action2.payload.key == "fullDayFormat") {
        addMaskedValuesInstructions(payload.code, state[payload.code], state);
      } else if (action2.payload.key == "decimal_separator") {
        addMaskedValuesInstructions(payload.code, state[payload.code], state);
      } else if ([
        "randomize_questions",
        "randomize_groups",
        "randomize_options",
        "randomize_rows",
        "randomize_columns"
      ].indexOf(action2.payload.key) > -1) {
        updateRandomByRule(state[payload.code], action2.payload.key);
      } else if ([
        "prioritize_questions",
        "prioritize_groups",
        "prioritize_options",
        "prioritize_rows",
        "prioritize_columns"
      ].indexOf(action2.payload.key) > -1) {
        if (!payload.value) {
          removeInstruction(state[payload.code], "priority_groups");
        }
      }
    },
    changeRelevance: (state, action2) => {
      let payload = action2.payload;
      state[payload.code].relevance = payload.value;
      addRelevanceInstructions(state, payload.code, payload.value);
    },
    cloneQuestion: (state, action2) => {
      var _a2, _b2, _c2;
      const code = action2.payload;
      const survey = state.Survey;
      const group = (_c2 = (_b2 = (_a2 = survey.children) == null ? void 0 : _a2.map((group2) => state[group2.code])) == null ? void 0 : _b2.filter(
        (group2) => group2.children && group2.children.findIndex((child) => child.code == code) !== -1
      )) == null ? void 0 : _c2[0];
      if (!group) {
        return;
      }
      const newQuestionId = "Q" + nextQuestionId(state, survey.children);
      const questionChild = group.children.find((el) => el.code == code);
      const newQuestion2 = {
        type: questionChild.type,
        code: newQuestionId,
        qualifiedCode: newQuestionId
      };
      creatNewState(state, state[code], newQuestionId, code, newQuestionId);
      group.children.splice(
        group.children.indexOf(questionChild) + 1,
        0,
        newQuestion2
      );
      designState.caseReducers.setup(state, {
        payload: { code: newQuestionId, rules: setupOptions(newQuestion2.type) }
      });
      cleanupRandomRules(group);
    },
    removeAnswer: (state, action2) => {
      var _a2, _b2;
      const answerQualifiedCode = action2.payload;
      const codes = splitQuestionCodes(answerQualifiedCode);
      let question = state[codes[0]];
      question.children = question.children.filter(
        (el) => el.code !== codes[1]
      );
      delete state[answerQualifiedCode];
      if ((_b2 = (_a2 = state.setup) == null ? void 0 : _a2.code) == null ? void 0 : _b2.includes(answerQualifiedCode)) {
        designState.caseReducers.resetSetup(state);
      }
      question.designErrors = questionDesignError(question);
      cleanupValidation(state, codes[0]);
      addMaskedValuesInstructions(codes[0], question, state);
      cleanupRandomRules(question);
    },
    addNewAnswer: (state, action2) => {
      const lang = state.langInfo.mainLang;
      const payload = action2.payload;
      const answer = payload.answer;
      const label = payload.label;
      const qualifiedCode = answer.qualifiedCode;
      state[qualifiedCode] = {};
      const codes = splitQuestionCodes(qualifiedCode);
      const parentCode = codes.slice(0, codes.length - 1).join("");
      const questionCode = codes[0];
      if (!insertAnswer(state, answer, parentCode)) {
        return;
      }
      if (label) {
        state[qualifiedCode].content = { [lang]: { label } };
      }
      if (answer.type) {
        state[qualifiedCode].type = answer.type;
      }
      addAnswerInstructions(state, state[qualifiedCode], parentCode, questionCode);
    },
    deleteGroup: (state, action2) => {
      var _a2, _b2;
      const groupCode = action2.payload;
      if (((_a2 = state.setup) == null ? void 0 : _a2.code) == groupCode) {
        designState.caseReducers.resetSetup(state);
      }
      if (state[groupCode].groupType == "END") {
        state.error = {
          message: "There must always be an end group. for an end message "
        };
        return;
      }
      const survey = state.Survey;
      const index = (_b2 = survey.children) == null ? void 0 : _b2.findIndex((x2) => x2.code === groupCode);
      survey.children.splice(index, 1);
      delete state[groupCode];
      cleanupRandomRules(survey);
    },
    deleteQuestion: (state, action2) => {
      var _a2, _b2, _c2, _d2;
      const questionCode = action2.payload;
      if (((_a2 = state.setup) == null ? void 0 : _a2.code) == questionCode) {
        designState.caseReducers.resetSetup(state);
      }
      const survey = state.Survey;
      const group = (_d2 = (_c2 = (_b2 = survey.children) == null ? void 0 : _b2.map((group2) => state[group2.code])) == null ? void 0 : _c2.filter(
        (group2) => group2.children && group2.children.findIndex((child) => child.code == questionCode) !== -1
      )) == null ? void 0 : _d2[0];
      if (!group) {
        return;
      }
      const questionIndex = group.children.findIndex(
        (x2) => x2.code === questionCode
      );
      let children = [...group.children];
      if (children.length === 1) {
        group.children = [];
      } else {
        group.children.splice(questionIndex, 1);
      }
      delete state[questionCode];
      cleanupRandomRules(group);
    },
    onAddComponentsVisibilityChange: (state, action2) => {
      state.addComponentsVisibility = action2.payload;
    },
    changeContent: (state, action2) => {
      let payload = action2.payload;
      if (!state[payload.code].content) {
        state[payload.code].content = {};
        state[payload.code].content[payload.lang] = {};
      } else if (!state[payload.code].content[payload.lang]) {
        state[payload.code].content[payload.lang] = {};
      }
      const referenceInstruction = buildReferenceInstruction(
        payload.value,
        payload.key,
        payload.lang
      );
      changeInstruction(state[payload.code], referenceInstruction);
      state[payload.code].content[payload.lang][payload.key] = payload.value;
    },
    changeResources: (state, action2) => {
      let payload = action2.payload;
      if (!state[payload.code].resources) {
        state[payload.code].resources = {};
      }
      state[payload.code].resources[payload.key] = payload.value;
    },
    updateRandom: (state, action2) => {
      const payload = action2.payload;
      const componentState = state[payload.code];
      if (payload.groups) {
        const instruction = { code: "random_group", groups: payload.groups };
        changeInstruction(componentState, instruction);
      } else {
        removeInstruction(componentState, "random_group");
      }
    },
    updatePriority: (state, action2) => {
      const payload = action2.payload;
      const componentState = state[payload.code];
      if (payload.priorities) {
        const instruction = {
          code: "priority_groups",
          priorities: payload.priorities
        };
        changeInstruction(componentState, instruction);
      } else {
        removeInstruction(componentState, "priority_groups");
      }
    },
    updateRandomByType: (state, action2) => {
      var _a2, _b2, _c2, _d2;
      const payload = action2.payload;
      const componentState = state[payload.code];
      const otherChildrenCodes = (_c2 = (_b2 = (_a2 = state[payload.code]) == null ? void 0 : _a2.children) == null ? void 0 : _b2.filter((el) => el.type !== payload.type)) == null ? void 0 : _c2.map((el) => el.code);
      const randomInstruction = instructionByCode(
        componentState,
        "random_group"
      );
      const otherRandomOrders = ((_d2 = randomInstruction == null ? void 0 : randomInstruction.groups) == null ? void 0 : _d2.filter(
        (x2) => x2.length && x2.some((elem) => otherChildrenCodes.includes(elem))
      )) || [];
      const groups2 = payload.groups.concat(otherRandomOrders);
      if (groups2) {
        const instruction = { code: "random_group", groups: groups2 };
        changeInstruction(componentState, instruction);
      } else {
        removeInstruction(componentState, "random_group");
      }
    },
    updatePriorityByType: (state, action2) => {
      var _a2, _b2, _c2, _d2;
      const payload = action2.payload;
      const componentState = state[payload.code];
      const otherChildrenCodes = (_c2 = (_b2 = (_a2 = state[payload.code]) == null ? void 0 : _a2.children) == null ? void 0 : _b2.filter((el) => el.type !== payload.type)) == null ? void 0 : _c2.map((el) => el.code);
      const priorityInstruction = instructionByCode(
        componentState,
        "priority_groups"
      );
      const otherPriorities = ((_d2 = priorityInstruction == null ? void 0 : priorityInstruction.priorities) == null ? void 0 : _d2.filter(
        (x2) => x2 && x2.weights.some((el) => otherChildrenCodes.includes(el.code))
      )) || [];
      const priorities = payload.priorities.concat(otherPriorities);
      if (priorities) {
        const instruction = { code: "priority_groups", priorities };
        changeInstruction(componentState, instruction);
      } else {
        removeInstruction(componentState, "priority_groups");
      }
    },
    removeSkipDestination: (state, action2) => {
      const payload = action2.payload;
      delete state[payload.code].skip_logic[payload.answerCode];
      addSkipInstructions(state, payload.code);
    },
    editSkipDestination: (state, action2) => {
      var _a2;
      const payload = action2.payload;
      if (!state[payload.code].skip_logic) {
        state[payload.code].skip_logic = {};
      }
      if (!state[payload.code].skip_logic[payload.answerCode]) {
        state[payload.code].skip_logic[payload.answerCode] = {};
      }
      if (((_a2 = state[payload.code].skip_logic) == null ? void 0 : _a2[payload.answerCode].skipTo) !== payload.skipTo) {
        state[payload.code].skip_logic[payload.answerCode] = {
          skipTo: payload.skipTo
        };
        addSkipInstructions(state, payload.code);
      }
    },
    editSkipToEnd: (state, action2) => {
      const payload = action2.payload;
      state[payload.code].skip_logic[payload.answerCode].toEnd = payload.toEnd;
      addSkipInstructions(state, payload.code);
    },
    onBaseLangChanged: (state, action2) => {
      var _a2;
      state.langInfo.mainLang = action2.payload.code;
      state.Survey.defaultLang = action2.payload;
      state.Survey.additionalLang = (_a2 = state.Survey.additionalLang) == null ? void 0 : _a2.filter(
        (language) => language.code !== action2.payload.code
      );
      state.langInfo.lang = action2.payload.code;
      state.langInfo.onMainLang = true;
      state.langInfo.languagesList = [action2.payload].concat(
        state.Survey.additionalLang || []
      );
    },
    onAdditionalLangAdded: (state, action2) => {
      state.Survey.additionalLang = (state.Survey.additionalLang || []).concat(
        action2.payload
      );
      state.langInfo.languagesList = [state.Survey.defaultLang].concat(
        state.Survey.additionalLang || []
      );
    },
    onAdditionalLangRemoved: (state, action2) => {
      state.Survey.additionalLang = state.Survey.additionalLang.filter(
        (language) => language.code !== action2.payload.code
      );
      state.langInfo.languagesList = [state.Survey.defaultLang].concat(
        state.Survey.additionalLang || []
      );
    },
    changeLang: (state, action2) => {
      state.langInfo.lang = action2.payload;
      state.langInfo.onMainLang = state.langInfo.lang == state.langInfo.mainLang;
    },
    setSaving: (state, action2) => {
      state.isSaving = action2.payload;
    },
    setUpdating: (state, action2) => {
      state.isUpdating = action2.payload;
    },
    onDrag: (state, action2) => {
      state.skipScroll = true;
      const payload = action2.payload;
      switch (payload.type) {
        case "reorder_questions":
          reorderQuestions(state, state.Survey, payload);
          break;
        case "reparent_question":
          reparentQuestion(state, state.Survey, payload);
          break;
        case "reorder_groups":
          reorderGroups(state.Survey, payload);
          break;
        case "reorder_answers":
          reorderAnswers(state, payload);
          break;
        case "reorder_answers_by_type":
          reorderAnswersByType(state, payload);
          break;
        case "new_question":
          newQuestion(state, payload);
          break;
        case "new_group":
          if (payload.groupType == "group") {
            newGroup(state, payload);
          } else if (payload.groupType == "end" || payload.groupType == "welcome") {
            specialGroup(state, payload);
          }
          break;
      }
    },
    collapseAllGroups: (state) => {
      state.Survey.children.forEach(
        (group) => state[group.code].collapsed = true
      );
    },
    addComponent: (state, action2) => {
      var _a2;
      const { type, questionType } = action2.payload;
      const survey = state.Survey;
      state.skipScroll = false;
      if (type === "group") {
        const lastGroupIndex = Math.max(0, survey.children.length - 1);
        newGroup(state, { toIndex: lastGroupIndex });
      } else if (type === "question") {
        if (state.Survey.children.length == 1) {
          newGroup(state, { toIndex: 0 });
        }
        const lastGroupIndex = Math.max(0, survey.children.length - 2);
        const destinationGroupCode = survey.children[lastGroupIndex].code;
        const destinationGroup = state[destinationGroupCode];
        const toIndex = ((_a2 = destinationGroup.children) == null ? void 0 : _a2.length) || 0;
        newQuestion(state, {
          destination: destinationGroupCode,
          questionType,
          toIndex
        });
      }
    }
  }
});
const {
  newVersionReceived,
  designStateReceived,
  onBaseLangChanged,
  onAdditionalLangAdded,
  onAdditionalLangRemoved,
  changeLang,
  onAddComponentsVisibilityChange,
  changeAttribute,
  resetCollapse,
  changeTimeFormats,
  changeContent,
  changeResources,
  deleteQuestion,
  cloneQuestion,
  deleteGroup,
  addNewAnswer,
  setDesignModeToLang,
  setDesignModeToReorder,
  setDesignModeToTheme,
  removeAnswer,
  setup,
  setupToggleExpand,
  resetSetup,
  changeValidationValue,
  updateRandom,
  updatePriority,
  updateRandomByType,
  updatePriorityByType,
  removeSkipDestination,
  editSkipDestination,
  editSkipToEnd,
  changeRelevance,
  onDrag,
  addComponent,
  collapseAllGroups,
  setSaving: setSaving$1,
  setUpdating: setUpdating$1
} = designState.actions;
const designState$1 = designState.reducer;
const cleanupRandomRules = (componentState) => {
  if (componentState["randomize_questions"]) {
    updateRandomByRule(componentState, "randomize_questions");
  } else if (componentState["randomize_groups"]) {
    updateRandomByRule(componentState, "randomize_groups");
  } else if (componentState["randomize_options"]) {
    updateRandomByRule(componentState, "randomize_options");
  } else if (componentState["randomize_rows"]) {
    updateRandomByRule(componentState, "randomize_rows");
  } else if (componentState["randomize_columns"]) {
    updateRandomByRule(componentState, "randomize_columns");
  }
};
const reparentQuestion = (state, survey, payload) => {
  var _a2;
  let index = buildIndex(state, survey.children);
  const sourceGroup = state[payload.source];
  const destinationGroup = state[payload.destination];
  const sourceQuestionIndex = sourceGroup.children.findIndex(
    (question2) => question2.code == payload.id
  );
  const destinationQuestionIndex = index.indexOf(payload.destination) > index.indexOf(payload.source) ? 0 : ((_a2 = destinationGroup.children) == null ? void 0 : _a2.length) || 0;
  const question = sourceGroup.children[sourceQuestionIndex];
  if (!question) {
    return;
  }
  sourceGroup.children.splice(sourceQuestionIndex, 1);
  if (!destinationGroup.children) {
    destinationGroup.children = [];
  }
  destinationGroup.children.splice(destinationQuestionIndex, 0, question);
  const rand = Math.floor(Math.random() * 1e6);
  state["reorder_refresh_code"] = rand;
  cleanupRandomRules(destinationGroup);
  cleanupRandomRules(sourceGroup);
};
const reorderQuestions = (state, survey, payload) => {
  const sourceGroup = state[payload.source];
  const destinationGroup = state[payload.destination];
  const sourceQuestionIndex = sourceGroup.children.findIndex(
    (question2) => question2.code == payload.id
  );
  const destinationQuestionIndex = payload.toIndex - 1;
  const question = sourceGroup.children[sourceQuestionIndex];
  sourceGroup.children.splice(sourceQuestionIndex, 1);
  if (!destinationGroup.children) {
    destinationGroup.children = [];
  }
  destinationGroup.children.splice(destinationQuestionIndex, 0, question);
  const rand = Math.floor(Math.random() * 1e6);
  state["reorder_refresh_code"] = rand;
  cleanupRandomRules(destinationGroup);
  cleanupRandomRules(sourceGroup);
};
const newQuestion = (state, payload) => {
  var _a2;
  const survey = state.Survey;
  let questionId = nextQuestionId(state, survey.children);
  const questionObject = createQuestion(
    payload.questionType,
    questionId,
    state.langInfo.mainLang
  );
  const destinationGroup = state[payload.destination];
  const destinationQuestionIndex = payload.toIndex;
  if (!destinationGroup.children) {
    destinationGroup.children = [];
  }
  Object.keys(questionObject).filter((key) => key != "question").forEach((key) => {
    state[key] = questionObject[key];
  });
  const newCode = "Q".concat(questionId);
  addQuestionInstructions(state[newCode]);
  (_a2 = state[newCode].children) == null ? void 0 : _a2.forEach((element) => {
    addAnswerInstructions(state, state[element.qualifiedCode], newCode, newCode);
  });
  cleanupValidation(state, newCode);
  addMaskedValuesInstructions(newCode, questionObject[newCode], state);
  destinationGroup.children.splice(
    destinationQuestionIndex,
    0,
    questionObject.question
  );
  const groupIndex = survey.children.findIndex(
    (group) => group.code === payload.destination
  );
  state.lastAddedComponent = {
    type: "question",
    groupIndex,
    questionIndex: destinationQuestionIndex
  };
  cleanupRandomRules(destinationGroup);
};
const newGroup = (state, payload) => {
  const survey = state.Survey;
  const group = createGroup("GROUP", nextGroupId(survey.children));
  if (!survey.children) {
    survey.children = [];
  }
  if (payload.toIndex == -1) {
    survey.children.push(group.newGroup);
  } else {
    survey.children.splice(payload.toIndex, 0, group.newGroup);
  }
  state[group.newGroup.code] = group.state;
  const lastGroupIndex = survey.children.findIndex(
    (child) => child.code === group.newGroup.code
  );
  state.lastAddedComponent = {
    type: "group",
    index: lastGroupIndex
  };
  cleanupRandomRules(survey);
};
const specialGroup = (state, payload) => {
  const survey = state.Survey;
  if (!survey.children) {
    survey.children = [];
  }
  const index = survey.children.findIndex(
    (group) => {
      var _a2;
      return ((_a2 = state[group.code].groupType) == null ? void 0 : _a2.toLowerCase()) === payload.groupType;
    }
  );
  if (index !== -1) {
    state.error = {
      message: "cannot have duplicate " + (payload.groupType == "welcome" ? "Welcome groups" : "End groups")
    };
    return;
  }
  if (payload.groupType == "welcome") {
    const group = createGroup("WELCOME", nextGroupId(survey.children));
    survey.children.splice(0, 0, group.newGroup);
    state[group.newGroup.code] = group.state;
    designState.caseReducers.setup(state, {
      payload: {
        code: group.newGroup.code,
        rules: setupOptions(group.newGroup.type)
      }
    });
  } else if (payload.groupType == "end") {
    const group = createGroup("END", nextGroupId(survey.children));
    survey.children.push(group.newGroup);
    state[group.newGroup.code] = group.state;
    designState.caseReducers.setup(state, {
      payload: {
        code: group.newGroup.code,
        rules: setupOptions(group.newGroup.type)
      }
    });
  }
};
const reorderGroups = (survey, payload) => {
  survey.children = reorder(
    survey.children,
    payload.fromIndex,
    payload.toIndex
  );
};
const reorderAnswers = (state, payload) => {
  const codes = splitQuestionCodes(payload.id);
  const parentCode = codes.slice(0, codes.length - 1).join("");
  const component = state[parentCode];
  component.children = reorder(
    component.children,
    payload.fromIndex,
    payload.toIndex
  );
};
const reorderAnswersByType = (state, payload) => {
  const codes = splitQuestionCodes(payload.id);
  const parentCode = codes.slice(0, codes.length - 1).join("");
  const component = state[parentCode];
  const type = state[payload.id].type;
  const filteredChildren = component.children.filter(
    (child) => child.type == type
  );
  const fromIndex = component.children.indexOf(
    filteredChildren[payload.fromIndex]
  );
  const toIndex = component.children.indexOf(filteredChildren[payload.toIndex]);
  component.children = reorder(component.children, fromIndex, toIndex);
};
const insertAnswer = (state, answer, parentCode) => {
  const component = state[parentCode];
  if (component) {
    if (!component.children) {
      component.children = [];
    }
    const insertIndex = lastIndexInArray(
      component.children,
      (child) => child.type == answer.type || !child.type
    );
    component.children.splice(insertIndex + 1, 0, answer);
    component.designErrors = questionDesignError(component);
    cleanupValidation(state, parentCode);
    addMaskedValuesInstructions(parentCode, component, state);
    cleanupRandomRules(component);
    return true;
  } else {
    return false;
  }
};
const buildIndex = (state, groups2) => {
  let retrunRestult = [];
  groups2 == null ? void 0 : groups2.forEach((group) => {
    retrunRestult.push(group.code);
    let groupObj = state[group.code];
    if (groupObj.children && !groupObj.collapsed) {
      groupObj.children.forEach((question) => {
        if (question == null ? void 0 : question.code) {
          retrunRestult.push(question.code);
        }
      });
    }
  });
  return retrunRestult;
};
const splitQuestionCodes = (code) => {
  return code.split(/(A[a-z_0-9]+|Q[a-z_0-9]+)/).filter(Boolean);
};
const cleanupValidation = (state, code) => {
  const component = state[code];
  if (!component.validation) {
    return;
  }
  const ruleKeys = Object.keys(component["validation"]);
  ruleKeys.forEach((key) => processValidation(state, code, key, true));
};
const addRelevanceInstructions = (state, code, relevance) => {
  const instruction = conditionalRelevanceEquation(
    relevance.logic,
    relevance.rule,
    state
  );
  changeInstruction(state[code], instruction);
};
const creatNewState = (state, toBeCopied, newStateCode, oldQuestionCode, newQuestionCode) => {
  var _a2, _b2, _c2, _d2, _e;
  const newState = cloneDeep(toBeCopied);
  if (newState.relevance) {
    delete newState.relevance;
    const index = (_a2 = newState.instructionList) == null ? void 0 : _a2.findIndex(
      (instruction) => instruction.code == "conditional_relevance"
    );
    if (index) {
      (_b2 = newState.instructionList) == null ? void 0 : _b2.splice(index, 1);
    }
  }
  if (newState.skip_logic) {
    delete newState.skip_logic;
    newState.instructionList = newState.instructionList.filter(
      (eq) => !eq.code.startsWith("skip_to_on_")
    );
  }
  (_c2 = newState.instructionList) == null ? void 0 : _c2.forEach((eq) => {
    var _a3;
    eq.text = (_a3 = eq.text) == null ? void 0 : _a3.replaceAll(oldQuestionCode, newQuestionCode);
  });
  state[newStateCode] = newState;
  (_e = (_d2 = state[newStateCode]) == null ? void 0 : _d2.children) == null ? void 0 : _e.forEach((child) => {
    let oldChildCode = child.qualifiedCode;
    let newChildCode = child.qualifiedCode.replaceAll(
      oldQuestionCode,
      newQuestionCode
    );
    child.qualifiedCode = newChildCode;
    creatNewState(
      state,
      state[oldChildCode],
      newChildCode,
      oldQuestionCode,
      newQuestionCode
    );
  });
};
const editState = createSlice({
  name: "editState",
  initialState: { state: {} },
  reducers: {
    setSaving: (state, action2) => {
      state.isSaving = action2.payload;
    },
    setUpdating: (state, action2) => {
      state.isUpdating = action2.payload;
    },
    surveyReceived: (state, action2) => {
      let survey = action2.payload;
      if (!isEquivalent(state.survey, survey)) {
        state.survey = survey;
      }
    },
    setLoading: (state, action2) => {
      state.loading = action2.payload;
    },
    surveyAttributeChanged: (state, action2) => {
      let payload = action2.payload;
      state.survey[payload.key] = payload.value;
    },
    surveyAttributeChangedImmediate: (state, action2) => {
      let payload = action2.payload;
      state.survey[payload.key] = payload.value;
    },
    onError: (state, action2) => {
      state.loading = false;
      state.error = action2.payload;
    },
    onEditErrorSeen: (state) => {
      state.error.seen = true;
    }
  }
});
const {
  surveyReceived,
  setSaving,
  setUpdating,
  onError,
  setLoading,
  onEditErrorSeen,
  surveyAttributeChanged,
  surveyAttributeChangedImmediate
} = editState.actions;
const editState$1 = editState.reducer;
const LANGUAGE_DEF = {
  en: { code: "en", name: "English" },
  de: { code: "de", name: "Deutsch" },
  ar: { code: "ar", name: "العربية" }
};
const BG_COLOR = "#dfe2ef";
const TEXT_COLOR = "#091133";
const PRIMARY_COLOR = "#2d3cb1";
const SECONDARY_COLOR = "#672ebf";
const ERR_COLOR = "#d13e17";
const PAPER_COLOR = "#ffffff";
const defualtTheme = (theme) => {
  var _a2, _b2, _c2, _d2, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
  return {
    textStyles: {
      group: {
        font: ((_b2 = (_a2 = theme == null ? void 0 : theme.textStyles) == null ? void 0 : _a2.group) == null ? void 0 : _b2.font) || "Rubik",
        size: ((_d2 = (_c2 = theme == null ? void 0 : theme.textStyles) == null ? void 0 : _c2.group) == null ? void 0 : _d2.size) || 26,
        color: ((_f = (_e = theme == null ? void 0 : theme.textStyles) == null ? void 0 : _e.group) == null ? void 0 : _f.color) || TEXT_COLOR
      },
      question: {
        font: ((_h = (_g = theme == null ? void 0 : theme.textStyles) == null ? void 0 : _g.question) == null ? void 0 : _h.font) || "Rubik",
        size: ((_j = (_i = theme == null ? void 0 : theme.textStyles) == null ? void 0 : _i.question) == null ? void 0 : _j.size) || 18,
        color: ((_l = (_k = theme == null ? void 0 : theme.textStyles) == null ? void 0 : _k.question) == null ? void 0 : _l.color) || TEXT_COLOR
      },
      text: {
        font: ((_n = (_m = theme == null ? void 0 : theme.textStyles) == null ? void 0 : _m.text) == null ? void 0 : _n.font) || "Rubik",
        size: ((_p = (_o = theme == null ? void 0 : theme.textStyles) == null ? void 0 : _o.text) == null ? void 0 : _p.size) || 14,
        color: ((_r = (_q = theme == null ? void 0 : theme.textStyles) == null ? void 0 : _q.text) == null ? void 0 : _r.color) || TEXT_COLOR
      }
    },
    palette: {
      type: "light",
      primary: {
        main: (theme == null ? void 0 : theme.primaryColor) || PRIMARY_COLOR
      },
      secondary: {
        main: SECONDARY_COLOR
      },
      error: {
        main: ERR_COLOR
      },
      background: {
        default: (theme == null ? void 0 : theme.bgColor) || BG_COLOR,
        paper: (theme == null ? void 0 : theme.paperColor) || PAPER_COLOR
      }
    }
  };
};
const defaultSurveyTheme = {
  textStyles: {
    group: {
      font: "Rubik",
      size: 26,
      color: TEXT_COLOR
    },
    question: {
      font: "Rubik",
      size: 18,
      color: TEXT_COLOR
    },
    text: {
      font: "Rubik",
      size: 14,
      color: TEXT_COLOR
    }
  },
  primaryColor: PRIMARY_COLOR,
  bgColor: BG_COLOR,
  paperColor: PAPER_COLOR
};
const PROCESSED_ERRORS = {
  NETWORK_ERR: { name: "network_err", handleGlobally: true },
  BACKEND_DOWN: { name: "backend_down", handleGlobally: true },
  WRONG_CONFIRMATION_TOKEN: {
    name: "wrong_confirmation_token",
    handleGlobally: false
  },
  EXPIRED_CONFIRMATION_TOKEN: {
    name: "expired_confirmation_token",
    handleGlobally: false
  },
  UNIDENTIFIED_ERROR: { name: "unidentified_error", handleGlobally: true },
  SURVEY_CLOSED: { name: "survey_closed", handleGlobally: false },
  WRONG_RESET_TOKEN: { name: "wrong_reset_token", handleGlobally: false },
  COMPONENT_DELETED: { name: "component_deleted", handleGlobally: false },
  DESIGN_OUT_OF_SYNC: { name: "design_out_of_sync", handleGlobally: false },
  WRONG_CREDENTIALS: { name: "wrong_credentials", handleGlobally: false },
  WRONG_PIN: { name: "code_invalid", handleGlobally: false },
  DUPLICATE_EMAIL: { name: "duplicate_email", handleGlobally: false },
  DUPLICATE_SURVEY_NAME: {
    name: "duplicate_survey_name",
    handleGlobally: false
  },
  EXPIRED_RESET_TOKEN: { name: "expired_reset_token", handleGlobally: false },
  USED_CONFIRMATION_TOKEN: {
    name: "used_confirmation_token",
    handleGlobally: false
  },
  USER_NOT_FOUND: { name: "user_not_found", handleGlobally: false },
  MISSING_CREDENTIALS: { name: "missing_credentials", handleGlobally: false },
  SURVEY_DESIGN_ERROR: { name: "survey_design_error", handleGlobally: false },
  SURVEY_NOT_ACTIVE: { name: "survey_not_active", handleGlobally: false },
  SURVEY_SCHEDULED: { name: "survey_scheduled", handleGlobally: false },
  SURVEY_EXPIRED: { name: "survey_expired", handleGlobally: false },
  INVALID_SURVEY_DATES: { name: "invalid_survey_dates", handleGlobally: false },
  SURVEY_QUOTA: { name: "survey_quota", handleGlobally: false }
};
const onApiError = ({
  error: error2,
  globalErrorHandler = (error3) => {
  },
  locallErrorHandler = (error3) => {
  }
}) => {
  const processed = !error2 ? PROCESSED_ERRORS.UNIDENTIFIED_ERROR : processError(error2);
  if (processed && processed.handleGlobally) {
    globalErrorHandler(processed);
  } else if (processed) {
    locallErrorHandler(processed);
  }
  return processed;
};
const processApiError = ({
  error: error2,
  globalErrorHandler = (processed) => {
  }
}) => {
  const processed = !error2 ? PROCESSED_ERRORS.UNIDENTIFIED_ERROR : processError(error2);
  if (processed.handleGlobally) {
    globalErrorHandler(processed);
  }
  return processed;
};
const processError = (e2) => {
  var _a2, _b2, _c2, _d2;
  if (e2.code == "ERR_NETWORK" && navigator.onLine) {
    return PROCESSED_ERRORS.BACKEND_DOWN;
  } else if (e2.code == "ERR_NETWORK" && !navigator.onLine) {
    return PROCESSED_ERRORS.NETWORK_ERR;
  } else if ((_b2 = (_a2 = e2.response) == null ? void 0 : _a2.data) == null ? void 0 : _b2.error) {
    switch ((_d2 = (_c2 = e2.response) == null ? void 0 : _c2.data) == null ? void 0 : _d2.error) {
      case "WrongCredentialsException":
        return PROCESSED_ERRORS.WRONG_CREDENTIALS;
      case "DuplicateEmailException":
        return PROCESSED_ERRORS.DUPLICATE_EMAIL;
      case "ComponentDeleted":
      case "ComponentDeletedException":
        return PROCESSED_ERRORS.COMPONENT_DELETED;
      case "DesignOutOfSyncException":
        return PROCESSED_ERRORS.DESIGN_OUT_OF_SYNC;
      case "ExpiredResetTokenException":
        return PROCESSED_ERRORS.EXPIRED_RESET_TOKEN;
      case "WrongResetTokenException":
        return PROCESSED_ERRORS.WRONG_RESET_TOKEN;
      case "UsedConfirmationTokenException":
        return PROCESSED_ERRORS.USED_CONFIRMATION_TOKEN;
      case "ExpiredConfirmationTokenException":
        return PROCESSED_ERRORS.EXPIRED_CONFIRMATION_TOKEN;
      case "UserNotFoundException":
        return PROCESSED_ERRORS.USER_NOT_FOUND;
      case "DuplicateEmailException":
        return PROCESSED_ERRORS.DUPLICATE_EMAIL;
      case "MissingCredentialsException":
        return PROCESSED_ERRORS.MISSING_CREDENTIALS;
      case "SurveyDesignWithErrorException":
        return PROCESSED_ERRORS.SURVEY_DESIGN_ERROR;
      case "DuplicateSurveyException":
        return PROCESSED_ERRORS.DUPLICATE_SURVEY_NAME;
      case "SurveyIsNotActiveException":
        return PROCESSED_ERRORS.SURVEY_NOT_ACTIVE;
      case "SurveyExpiredException":
        return PROCESSED_ERRORS.SURVEY_EXPIRED;
      case "SurveyNotStartedException":
        return PROCESSED_ERRORS.SURVEY_SCHEDULED;
      case "SurveyIsClosedException":
        return PROCESSED_ERRORS.SURVEY_CLOSED;
      case "InvalidSurveyDates":
        return PROCESSED_ERRORS.INVALID_SURVEY_DATES;
      case "WrongConfirmationTokenException":
        return PROCESSED_ERRORS.WRONG_CONFIRMATION_TOKEN;
      case "ExpiredConfirmationTokenException":
        return PROCESSED_ERRORS.EXPIRED_CONFIRMATION_TOKEN;
      case "WrongEmailChangePinException":
        return PROCESSED_ERRORS.WRONG_PIN;
      case "SurveyQuotaExceeded":
        return PROCESSED_ERRORS.SURVEY_QUOTA;
      default:
        return PROCESSED_ERRORS.UNIDENTIFIED_ERROR;
    }
  }
};
class BaseService {
  constructor(dispatch) {
    this.dispatch = dispatch;
  }
  async handleRequest(apiCall) {
    try {
      return await apiCall();
    } catch (error2) {
      throw processApiError({
        error: error2,
        globalErrorHandler: (processedError) => {
          this.dispatch(onError(processedError));
        }
      });
    }
  }
}
function bind(fn2, thisArg) {
  return function wrap() {
    return fn2.apply(thisArg, arguments);
  };
}
const { toString } = Object.prototype;
const { getPrototypeOf } = Object;
const kindOf = /* @__PURE__ */ ((cache) => (thing) => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null));
const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type;
};
const typeOfTest = (type) => (thing) => typeof thing === type;
const { isArray } = Array;
const isUndefined = typeOfTest("undefined");
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
const isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(val) {
  let result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}
const isString = typeOfTest("string");
const isFunction = typeOfTest("function");
const isNumber = typeOfTest("number");
const isObject = (thing) => thing !== null && typeof thing === "object";
const isBoolean = (thing) => thing === true || thing === false;
const isPlainObject = (val) => {
  if (kindOf(val) !== "object") {
    return false;
  }
  const prototype2 = getPrototypeOf(val);
  return (prototype2 === null || prototype2 === Object.prototype || Object.getPrototypeOf(prototype2) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};
const isDate = kindOfTest("Date");
const isFile = kindOfTest("File");
const isBlob = kindOfTest("Blob");
const isFileList = kindOfTest("FileList");
const isStream = (val) => isObject(val) && isFunction(val.pipe);
const isFormData = (thing) => {
  let kind;
  return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
  kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
};
const isURLSearchParams = kindOfTest("URLSearchParams");
const [isReadableStream, isRequest, isResponse, isHeaders] = ["ReadableStream", "Request", "Response", "Headers"].map(kindOfTest);
const trim$1 = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function forEach(obj, fn2, { allOwnKeys = false } = {}) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  let i2;
  let l2;
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (i2 = 0, l2 = obj.length; i2 < l2; i2++) {
      fn2.call(null, obj[i2], i2, obj);
    }
  } else {
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;
    for (i2 = 0; i2 < len; i2++) {
      key = keys[i2];
      fn2.call(null, obj[key], key, obj);
    }
  }
}
function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i2 = keys.length;
  let _key;
  while (i2-- > 0) {
    _key = keys[i2];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}
const _global = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
})();
const isContextDefined = (context) => !isUndefined(context) && context !== _global;
function merge() {
  const { caseless } = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };
  for (let i2 = 0, l2 = arguments.length; i2 < l2; i2++) {
    arguments[i2] && forEach(arguments[i2], assignValue);
  }
  return result;
}
const extend = (a2, b2, thisArg, { allOwnKeys } = {}) => {
  forEach(b2, (val, key) => {
    if (thisArg && isFunction(val)) {
      a2[key] = bind(val, thisArg);
    } else {
      a2[key] = val;
    }
  }, { allOwnKeys });
  return a2;
};
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
};
const inherits = (constructor, superConstructor, props, descriptors2) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, "super", {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};
const toFlatObject = (sourceObj, destObj, filter3, propFilter) => {
  let props;
  let i2;
  let prop;
  const merged = {};
  destObj = destObj || {};
  if (sourceObj == null) return destObj;
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i2 = props.length;
    while (i2-- > 0) {
      prop = props[i2];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter3 !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter3 || filter3(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
};
const endsWith = (str, searchString, position2) => {
  str = String(str);
  if (position2 === void 0 || position2 > str.length) {
    position2 = str.length;
  }
  position2 -= searchString.length;
  const lastIndex = str.indexOf(searchString, position2);
  return lastIndex !== -1 && lastIndex === position2;
};
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i2 = thing.length;
  if (!isNumber(i2)) return null;
  const arr = new Array(i2);
  while (i2-- > 0) {
    arr[i2] = thing[i2];
  }
  return arr;
};
const isTypedArray = /* @__PURE__ */ ((TypedArray) => {
  return (thing) => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
const forEachEntry = (obj, fn2) => {
  const generator = obj && obj[Symbol.iterator];
  const iterator = generator.call(obj);
  let result;
  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn2.call(obj, pair[0], pair[1]);
  }
};
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];
  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }
  return arr;
};
const isHTMLForm = kindOfTest("HTMLFormElement");
const toCamelCase = (str) => {
  return str.toLowerCase().replace(
    /[-_\s]([a-z\d])(\w*)/g,
    function replacer(m2, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};
const hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
const isRegExp = kindOfTest("RegExp");
const reduceDescriptors = (obj, reducer) => {
  const descriptors2 = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};
  forEach(descriptors2, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};
const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
      return false;
    }
    const value = obj[name];
    if (!isFunction(value)) return;
    descriptor.enumerable = false;
    if ("writable" in descriptor) {
      descriptor.writable = false;
      return;
    }
    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error("Can not rewrite read-only method '" + name + "'");
      };
    }
  });
};
const toObjectSet = (arrayOrString, delimiter2) => {
  const obj = {};
  const define = (arr) => {
    arr.forEach((value) => {
      obj[value] = true;
    });
  };
  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter2));
  return obj;
};
const noop = () => {
};
const toFiniteNumber = (value, defaultValue) => {
  return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};
const ALPHA = "abcdefghijklmnopqrstuvwxyz";
const DIGIT = "0123456789";
const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = "";
  const { length: length2 } = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length2 | 0];
  }
  return str;
};
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
}
const toJSONObject = (obj) => {
  const stack = new Array(10);
  const visit = (source, i2) => {
    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }
      if (!("toJSON" in source)) {
        stack[i2] = source;
        const target = isArray(source) ? [] : {};
        forEach(source, (value, key) => {
          const reducedValue = visit(value, i2 + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });
        stack[i2] = void 0;
        return target;
      }
    }
    return source;
  };
  return visit(obj, 0);
};
const isAsyncFn = kindOfTest("AsyncFunction");
const isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
const _setImmediate = ((setImmediateSupported, postMessageSupported) => {
  if (setImmediateSupported) {
    return setImmediate;
  }
  return postMessageSupported ? ((token2, callbacks) => {
    _global.addEventListener("message", ({ source, data }) => {
      if (source === _global && data === token2) {
        callbacks.length && callbacks.shift()();
      }
    }, false);
    return (cb) => {
      callbacks.push(cb);
      _global.postMessage(token2, "*");
    };
  })("axios@".concat(Math.random()), []) : (cb) => setTimeout(cb);
})(
  typeof setImmediate === "function",
  isFunction(_global.postMessage)
);
const asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(_global) : typeof process !== "undefined" && process.nextTick || _setImmediate;
const utils$1 = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isReadableStream,
  isRequest,
  isResponse,
  isHeaders,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim: trim$1,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable,
  setImmediate: _setImmediate,
  asap
};
function AxiosError(message, code, config2, request, response) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack;
  }
  this.message = message;
  this.name = "AxiosError";
  code && (this.code = code);
  config2 && (this.config = config2);
  request && (this.request = request);
  if (response) {
    this.response = response;
    this.status = response.status ? response.status : null;
  }
}
utils$1.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils$1.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const prototype$1 = AxiosError.prototype;
const descriptors = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((code) => {
  descriptors[code] = { value: code };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype$1, "isAxiosError", { value: true });
AxiosError.from = (error2, code, config2, request, response, customProps) => {
  const axiosError = Object.create(prototype$1);
  utils$1.toFlatObject(error2, axiosError, function filter3(obj) {
    return obj !== Error.prototype;
  }, (prop) => {
    return prop !== "isAxiosError";
  });
  AxiosError.call(axiosError, error2.message, code, config2, request, response);
  axiosError.cause = error2;
  axiosError.name = error2.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};
const httpAdapter = null;
function isVisitable(thing) {
  return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
}
function removeBrackets(key) {
  return utils$1.endsWith(key, "[]") ? key.slice(0, -2) : key;
}
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token2, i2) {
    token2 = removeBrackets(token2);
    return !dots && i2 ? "[" + token2 + "]" : token2;
  }).join(dots ? "." : "");
}
function isFlatArray(arr) {
  return utils$1.isArray(arr) && !arr.some(isVisitable);
}
const predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});
function toFormData(obj, formData, options) {
  if (!utils$1.isObject(obj)) {
    throw new TypeError("target must be an object");
  }
  formData = formData || new FormData();
  options = utils$1.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    return !utils$1.isUndefined(source[option]);
  });
  const metaTokens = options.metaTokens;
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
  const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);
  if (!utils$1.isFunction(visitor)) {
    throw new TypeError("visitor must be a function");
  }
  function convertValue(value) {
    if (value === null) return "";
    if (utils$1.isDate(value)) {
      return value.toISOString();
    }
    if (!useBlob && utils$1.isBlob(value)) {
      throw new AxiosError("Blob is not supported. Use a Buffer instead.");
    }
    if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
      return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }
  function defaultVisitor(value, key, path) {
    let arr = value;
    if (value && !path && typeof value === "object") {
      if (utils$1.endsWith(key, "{}")) {
        key = metaTokens ? key : key.slice(0, -2);
        value = JSON.stringify(value);
      } else if (utils$1.isArray(value) && isFlatArray(value) || (utils$1.isFileList(value) || utils$1.endsWith(key, "[]")) && (arr = utils$1.toArray(value))) {
        key = removeBrackets(key);
        arr.forEach(function each(el, index) {
          !(utils$1.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
            convertValue(el)
          );
        });
        return false;
      }
    }
    if (isVisitable(value)) {
      return true;
    }
    formData.append(renderKey(path, key, dots), convertValue(value));
    return false;
  }
  const stack = [];
  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build2(value, path) {
    if (utils$1.isUndefined(value)) return;
    if (stack.indexOf(value) !== -1) {
      throw Error("Circular reference detected in " + path.join("."));
    }
    stack.push(value);
    utils$1.forEach(value, function each(el, key) {
      const result = !(utils$1.isUndefined(el) || el === null) && visitor.call(
        formData,
        el,
        utils$1.isString(key) ? key.trim() : key,
        path,
        exposedHelpers
      );
      if (result === true) {
        build2(el, path ? path.concat(key) : [key]);
      }
    });
    stack.pop();
  }
  if (!utils$1.isObject(obj)) {
    throw new TypeError("data must be an object");
  }
  build2(obj);
  return formData;
}
function encode$1(str) {
  const charMap = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match2) {
    return charMap[match2];
  });
}
function AxiosURLSearchParams(params, options) {
  this._pairs = [];
  params && toFormData(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};
prototype.toString = function toString2(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode$1);
  } : encode$1;
  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + "=" + _encode(pair[1]);
  }, "").join("&");
};
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url, params, options) {
  if (!params) {
    return url;
  }
  const _encode = options && options.encode || encode;
  const serializeFn = options && options.serialize;
  let serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils$1.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, options).toString(_encode);
  }
  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
}
class InterceptorManager {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn2) {
    utils$1.forEach(this.handlers, function forEachHandler(h2) {
      if (h2 !== null) {
        fn2(h2);
      }
    });
  }
}
const transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};
const URLSearchParams$1 = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams;
const FormData$1 = typeof FormData !== "undefined" ? FormData : null;
const Blob$1 = typeof Blob !== "undefined" ? Blob : null;
const platform$1 = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob: Blob$1
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
const hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
const _navigator = typeof navigator === "object" && navigator || void 0;
const hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || ["ReactNative", "NativeScript", "NS"].indexOf(_navigator.product) < 0);
const hasStandardBrowserWebWorkerEnv = (() => {
  return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();
const origin = hasBrowserEnv && window.location.href || "http://localhost";
const utils = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv,
  hasStandardBrowserEnv,
  hasStandardBrowserWebWorkerEnv,
  navigator: _navigator,
  origin
}, Symbol.toStringTag, { value: "Module" }));
const platform = {
  ...utils,
  ...platform$1
};
function toURLEncodedForm(data, options) {
  return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (platform.isNode && utils$1.isBuffer(value)) {
        this.append(key, value.toString("base64"));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}
function parsePropPath(name) {
  return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map((match2) => {
    return match2[0] === "[]" ? "" : match2[1] || match2[0];
  });
}
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i2;
  const len = keys.length;
  let key;
  for (i2 = 0; i2 < len; i2++) {
    key = keys[i2];
    obj[key] = arr[key];
  }
  return obj;
}
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    if (name === "__proto__") return true;
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils$1.isArray(target) ? target.length : name;
    if (isLast) {
      if (utils$1.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }
      return !isNumericKey;
    }
    if (!target[name] || !utils$1.isObject(target[name])) {
      target[name] = [];
    }
    const result = buildPath(path, value, target[name], index);
    if (result && utils$1.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
    const obj = {};
    utils$1.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }
  return null;
}
function stringifySafely(rawValue, parser, encoder) {
  if (utils$1.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$1.trim(rawValue);
    } catch (e2) {
      if (e2.name !== "SyntaxError") {
        throw e2;
      }
    }
  }
  return (0, JSON.stringify)(rawValue);
}
const defaults = {
  transitional: transitionalDefaults,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || "";
    const hasJSONContentType = contentType.indexOf("application/json") > -1;
    const isObjectPayload = utils$1.isObject(data);
    if (isObjectPayload && utils$1.isHTMLForm(data)) {
      data = new FormData(data);
    }
    const isFormData2 = utils$1.isFormData(data);
    if (isFormData2) {
      return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
    }
    if (utils$1.isArrayBuffer(data) || utils$1.isBuffer(data) || utils$1.isStream(data) || utils$1.isFile(data) || utils$1.isBlob(data) || utils$1.isReadableStream(data)) {
      return data;
    }
    if (utils$1.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils$1.isURLSearchParams(data)) {
      headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
      return data.toString();
    }
    let isFileList2;
    if (isObjectPayload) {
      if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }
      if ((isFileList2 = utils$1.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
        const _FormData = this.env && this.env.FormData;
        return toFormData(
          isFileList2 ? { "files[]": data } : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }
    if (isObjectPayload || hasJSONContentType) {
      headers.setContentType("application/json", false);
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    const transitional2 = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
    const JSONRequested = this.responseType === "json";
    if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) {
      return data;
    }
    if (data && utils$1.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;
      try {
        return JSON.parse(data);
      } catch (e2) {
        if (strictJSONParsing) {
          if (e2.name === "SyntaxError") {
            throw AxiosError.from(e2, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e2;
        }
      }
    }
    return data;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      "Accept": "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
utils$1.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
  defaults.headers[method] = {};
});
const ignoreDuplicateOf = utils$1.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]);
const parseHeaders = (rawHeaders) => {
  const parsed = {};
  let key;
  let val;
  let i2;
  rawHeaders && rawHeaders.split("\n").forEach(function parser(line2) {
    i2 = line2.indexOf(":");
    key = line2.substring(0, i2).trim().toLowerCase();
    val = line2.substring(i2 + 1).trim();
    if (!key || parsed[key] && ignoreDuplicateOf[key]) {
      return;
    }
    if (key === "set-cookie") {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
    }
  });
  return parsed;
};
const $internals = Symbol("internals");
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return utils$1.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  const tokens = /* @__PURE__ */ Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match2;
  while (match2 = tokensRE.exec(str)) {
    tokens[match2[1]] = match2[2];
  }
  return tokens;
}
const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter3, isHeaderNameFilter) {
  if (utils$1.isFunction(filter3)) {
    return filter3.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!utils$1.isString(value)) return;
  if (utils$1.isString(filter3)) {
    return value.indexOf(filter3) !== -1;
  }
  if (utils$1.isRegExp(filter3)) {
    return filter3.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w2, char2, str) => {
    return char2.toUpperCase() + str;
  });
}
function buildAccessors(obj, header) {
  const accessorName = utils$1.toCamelCase(" " + header);
  ["get", "set", "has"].forEach((methodName) => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}
class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    const self2 = this;
    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);
      if (!lHeader) {
        throw new Error("header name must be a non-empty string");
      }
      const key = utils$1.findKey(self2, lHeader);
      if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
        self2[key || _header] = normalizeValue(_value);
      }
    }
    const setHeaders = (headers, _rewrite) => utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else if (utils$1.isHeaders(header)) {
      for (const [key, value] of header.entries()) {
        setHeader(value, key, rewrite);
      }
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }
    return this;
  }
  get(header, parser) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils$1.findKey(this, header);
      if (key) {
        const value = this[key];
        if (!parser) {
          return value;
        }
        if (parser === true) {
          return parseTokens(value);
        }
        if (utils$1.isFunction(parser)) {
          return parser.call(this, value, key);
        }
        if (utils$1.isRegExp(parser)) {
          return parser.exec(value);
        }
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(header, matcher) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils$1.findKey(this, header);
      return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }
    return false;
  }
  delete(header, matcher) {
    const self2 = this;
    let deleted = false;
    function deleteHeader(_header) {
      _header = normalizeHeader(_header);
      if (_header) {
        const key = utils$1.findKey(self2, _header);
        if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
          delete self2[key];
          deleted = true;
        }
      }
    }
    if (utils$1.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }
    return deleted;
  }
  clear(matcher) {
    const keys = Object.keys(this);
    let i2 = keys.length;
    let deleted = false;
    while (i2--) {
      const key = keys[i2];
      if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }
    return deleted;
  }
  normalize(format) {
    const self2 = this;
    const headers = {};
    utils$1.forEach(this, (value, header) => {
      const key = utils$1.findKey(headers, header);
      if (key) {
        self2[key] = normalizeValue(value);
        delete self2[header];
        return;
      }
      const normalized = format ? formatHeader(header) : String(header).trim();
      if (normalized !== header) {
        delete self2[header];
      }
      self2[normalized] = normalizeValue(value);
      headers[normalized] = true;
    });
    return this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    const obj = /* @__PURE__ */ Object.create(null);
    utils$1.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(", ") : value);
    });
    return obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first, ...targets) {
    const computed = new this(first);
    targets.forEach((target) => computed.set(target));
    return computed;
  }
  static accessor(header) {
    const internals = this[$internals] = this[$internals] = {
      accessors: {}
    };
    const accessors = internals.accessors;
    const prototype2 = this.prototype;
    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);
      if (!accessors[lHeader]) {
        buildAccessors(prototype2, _header);
        accessors[lHeader] = true;
      }
    }
    utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
    return this;
  }
}
AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
utils$1.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1);
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  };
});
utils$1.freezeMethods(AxiosHeaders);
function transformData(fns, response) {
  const config2 = this || defaults;
  const context = response || config2;
  const headers = AxiosHeaders.from(context.headers);
  let data = context.data;
  utils$1.forEach(fns, function transform(fn2) {
    data = fn2.call(config2, data, headers.normalize(), response ? response.status : void 0);
  });
  headers.normalize();
  return data;
}
function isCancel(value) {
  return !!(value && value.__CANCEL__);
}
function CanceledError(message, config2, request) {
  AxiosError.call(this, message == null ? "canceled" : message, AxiosError.ERR_CANCELED, config2, request);
  this.name = "CanceledError";
}
utils$1.inherits(CanceledError, AxiosError, {
  __CANCEL__: true
});
function settle(resolve, reject, response) {
  const validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError(
      "Request failed with status code " + response.status,
      [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}
function parseProtocol(url) {
  const match2 = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match2 && match2[1] || "";
}
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;
  min = min !== void 0 ? min : 1e3;
  return function push(chunkLength) {
    const now = Date.now();
    const startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now;
    let i2 = tail;
    let bytesCount = 0;
    while (i2 !== head) {
      bytesCount += bytes[i2++];
      i2 = i2 % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now - firstSampleTS < min) {
      return;
    }
    const passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
  };
}
function throttle(fn2, freq) {
  let timestamp = 0;
  let threshold = 1e3 / freq;
  let lastArgs;
  let timer;
  const invoke = (args, now = Date.now()) => {
    timestamp = now;
    lastArgs = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    fn2.apply(null, args);
  };
  const throttled = (...args) => {
    const now = Date.now();
    const passed = now - timestamp;
    if (passed >= threshold) {
      invoke(args, now);
    } else {
      lastArgs = args;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          invoke(lastArgs);
        }, threshold - passed);
      }
    }
  };
  const flush = () => lastArgs && invoke(lastArgs);
  return [throttled, flush];
}
const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
  let bytesNotified = 0;
  const _speedometer = speedometer(50, 250);
  return throttle((e2) => {
    const loaded = e2.loaded;
    const total = e2.lengthComputable ? e2.total : void 0;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;
    bytesNotified = loaded;
    const data = {
      loaded,
      total,
      progress: total ? loaded / total : void 0,
      bytes: progressBytes,
      rate: rate ? rate : void 0,
      estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
      event: e2,
      lengthComputable: total != null,
      [isDownloadStream ? "download" : "upload"]: true
    };
    listener(data);
  }, freq);
};
const progressEventDecorator = (total, throttled) => {
  const lengthComputable = total != null;
  return [(loaded) => throttled[0]({
    lengthComputable,
    total,
    loaded
  }), throttled[1]];
};
const asyncDecorator = (fn2) => (...args) => utils$1.asap(() => fn2(...args));
const isURLSameOrigin = platform.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function standardBrowserEnv() {
    const msie = platform.navigator && /(msie|trident)/i.test(platform.navigator.userAgent);
    const urlParsingNode = document.createElement("a");
    let originURL;
    function resolveURL(url) {
      let href = url;
      if (msie) {
        urlParsingNode.setAttribute("href", href);
        href = urlParsingNode.href;
      }
      urlParsingNode.setAttribute("href", href);
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
      };
    }
    originURL = resolveURL(window.location.href);
    return function isURLSameOrigin2(requestURL) {
      const parsed = utils$1.isString(requestURL) ? resolveURL(requestURL) : requestURL;
      return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function nonStandardBrowserEnv() {
    return function isURLSameOrigin2() {
      return true;
    };
  }()
);
const cookies = platform.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path, domain, secure) {
      const cookie = [name + "=" + encodeURIComponent(value)];
      utils$1.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString());
      utils$1.isString(path) && cookie.push("path=" + path);
      utils$1.isString(domain) && cookie.push("domain=" + domain);
      secure === true && cookie.push("secure");
      document.cookie = cookie.join("; ");
    },
    read(name) {
      const match2 = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
      return match2 ? decodeURIComponent(match2[3]) : null;
    },
    remove(name) {
      this.write(name, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function isAbsoluteURL(url) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}
const headersToObject = (thing) => thing instanceof AxiosHeaders ? { ...thing } : thing;
function mergeConfig(config1, config2) {
  config2 = config2 || {};
  const config3 = {};
  function getMergedValue(target, source, caseless) {
    if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
      return utils$1.merge.call({ caseless }, target, source);
    } else if (utils$1.isPlainObject(source)) {
      return utils$1.merge({}, source);
    } else if (utils$1.isArray(source)) {
      return source.slice();
    }
    return source;
  }
  function mergeDeepProperties(a2, b2, caseless) {
    if (!utils$1.isUndefined(b2)) {
      return getMergedValue(a2, b2, caseless);
    } else if (!utils$1.isUndefined(a2)) {
      return getMergedValue(void 0, a2, caseless);
    }
  }
  function valueFromConfig2(a2, b2) {
    if (!utils$1.isUndefined(b2)) {
      return getMergedValue(void 0, b2);
    }
  }
  function defaultToConfig2(a2, b2) {
    if (!utils$1.isUndefined(b2)) {
      return getMergedValue(void 0, b2);
    } else if (!utils$1.isUndefined(a2)) {
      return getMergedValue(void 0, a2);
    }
  }
  function mergeDirectKeys(a2, b2, prop) {
    if (prop in config2) {
      return getMergedValue(a2, b2);
    } else if (prop in config1) {
      return getMergedValue(void 0, a2);
    }
  }
  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a2, b2) => mergeDeepProperties(headersToObject(a2), headersToObject(b2), true)
  };
  utils$1.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge2 = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge2(config1[prop], config2[prop], prop);
    utils$1.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config3[prop] = configValue);
  });
  return config3;
}
const resolveConfig = (config2) => {
  const newConfig = mergeConfig({}, config2);
  let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } = newConfig;
  newConfig.headers = headers = AxiosHeaders.from(headers);
  newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url), config2.params, config2.paramsSerializer);
  if (auth) {
    headers.set(
      "Authorization",
      "Basic " + btoa((auth.username || "") + ":" + (auth.password ? unescape(encodeURIComponent(auth.password)) : ""))
    );
  }
  let contentType;
  if (utils$1.isFormData(data)) {
    if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
      headers.setContentType(void 0);
    } else if ((contentType = headers.getContentType()) !== false) {
      const [type, ...tokens] = contentType ? contentType.split(";").map((token2) => token2.trim()).filter(Boolean) : [];
      headers.setContentType([type || "multipart/form-data", ...tokens].join("; "));
    }
  }
  if (platform.hasStandardBrowserEnv) {
    withXSRFToken && utils$1.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
    if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin(newConfig.url)) {
      const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);
      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }
  return newConfig;
};
const isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
const xhrAdapter = isXHRAdapterSupported && function(config2) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    const _config = resolveConfig(config2);
    let requestData = _config.data;
    const requestHeaders = AxiosHeaders.from(_config.headers).normalize();
    let { responseType, onUploadProgress, onDownloadProgress } = _config;
    let onCanceled;
    let uploadThrottled, downloadThrottled;
    let flushUpload, flushDownload;
    function done() {
      flushUpload && flushUpload();
      flushDownload && flushDownload();
      _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
      _config.signal && _config.signal.removeEventListener("abort", onCanceled);
    }
    let request = new XMLHttpRequest();
    request.open(_config.method.toUpperCase(), _config.url, true);
    request.timeout = _config.timeout;
    function onloadend() {
      if (!request) {
        return;
      }
      const responseHeaders = AxiosHeaders.from(
        "getAllResponseHeaders" in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config2,
        request
      };
      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);
      request = null;
    }
    if ("onloadend" in request) {
      request.onloadend = onloadend;
    } else {
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(new AxiosError("Request aborted", AxiosError.ECONNABORTED, config2, request));
      request = null;
    };
    request.onerror = function handleError() {
      reject(new AxiosError("Network Error", AxiosError.ERR_NETWORK, config2, request));
      request = null;
    };
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
      const transitional2 = _config.transitional || transitionalDefaults;
      if (_config.timeoutErrorMessage) {
        timeoutErrorMessage = _config.timeoutErrorMessage;
      }
      reject(new AxiosError(
        timeoutErrorMessage,
        transitional2.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
        config2,
        request
      ));
      request = null;
    };
    requestData === void 0 && requestHeaders.setContentType(null);
    if ("setRequestHeader" in request) {
      utils$1.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }
    if (!utils$1.isUndefined(_config.withCredentials)) {
      request.withCredentials = !!_config.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request.responseType = _config.responseType;
    }
    if (onDownloadProgress) {
      [downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true);
      request.addEventListener("progress", downloadThrottled);
    }
    if (onUploadProgress && request.upload) {
      [uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);
      request.upload.addEventListener("progress", uploadThrottled);
      request.upload.addEventListener("loadend", flushUpload);
    }
    if (_config.cancelToken || _config.signal) {
      onCanceled = (cancel) => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError(null, config2, request) : cancel);
        request.abort();
        request = null;
      };
      _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
      if (_config.signal) {
        _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
      }
    }
    const protocol = parseProtocol(_config.url);
    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError("Unsupported protocol " + protocol + ":", AxiosError.ERR_BAD_REQUEST, config2));
      return;
    }
    request.send(requestData || null);
  });
};
const composeSignals = (signals, timeout) => {
  const { length: length2 } = signals = signals ? signals.filter(Boolean) : [];
  if (timeout || length2) {
    let controller = new AbortController();
    let aborted;
    const onabort = function(reason) {
      if (!aborted) {
        aborted = true;
        unsubscribe();
        const err = reason instanceof Error ? reason : this.reason;
        controller.abort(err instanceof AxiosError ? err : new CanceledError(err instanceof Error ? err.message : err));
      }
    };
    let timer = timeout && setTimeout(() => {
      timer = null;
      onabort(new AxiosError("timeout ".concat(timeout, " of ms exceeded"), AxiosError.ETIMEDOUT));
    }, timeout);
    const unsubscribe = () => {
      if (signals) {
        timer && clearTimeout(timer);
        timer = null;
        signals.forEach((signal2) => {
          signal2.unsubscribe ? signal2.unsubscribe(onabort) : signal2.removeEventListener("abort", onabort);
        });
        signals = null;
      }
    };
    signals.forEach((signal2) => signal2.addEventListener("abort", onabort));
    const { signal } = controller;
    signal.unsubscribe = () => utils$1.asap(unsubscribe);
    return signal;
  }
};
const streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;
  if (len < chunkSize) {
    yield chunk;
    return;
  }
  let pos = 0;
  let end;
  while (pos < len) {
    end = pos + chunkSize;
    yield chunk.slice(pos, end);
    pos = end;
  }
};
const readBytes = async function* (iterable, chunkSize) {
  for await (const chunk of readStream(iterable)) {
    yield* streamChunk(chunk, chunkSize);
  }
};
const readStream = async function* (stream) {
  if (stream[Symbol.asyncIterator]) {
    yield* stream;
    return;
  }
  const reader = stream.getReader();
  try {
    for (; ; ) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      yield value;
    }
  } finally {
    await reader.cancel();
  }
};
const trackStream = (stream, chunkSize, onProgress, onFinish) => {
  const iterator = readBytes(stream, chunkSize);
  let bytes = 0;
  let done;
  let _onFinish = (e2) => {
    if (!done) {
      done = true;
      onFinish && onFinish(e2);
    }
  };
  return new ReadableStream({
    async pull(controller) {
      try {
        const { done: done2, value } = await iterator.next();
        if (done2) {
          _onFinish();
          controller.close();
          return;
        }
        let len = value.byteLength;
        if (onProgress) {
          let loadedBytes = bytes += len;
          onProgress(loadedBytes);
        }
        controller.enqueue(new Uint8Array(value));
      } catch (err) {
        _onFinish(err);
        throw err;
      }
    },
    cancel(reason) {
      _onFinish(reason);
      return iterator.return();
    }
  }, {
    highWaterMark: 2
  });
};
const isFetchSupported = typeof fetch === "function" && typeof Request === "function" && typeof Response === "function";
const isReadableStreamSupported = isFetchSupported && typeof ReadableStream === "function";
const encodeText = isFetchSupported && (typeof TextEncoder === "function" ? /* @__PURE__ */ ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) : async (str) => new Uint8Array(await new Response(str).arrayBuffer()));
const test = (fn2, ...args) => {
  try {
    return !!fn2(...args);
  } catch (e2) {
    return false;
  }
};
const supportsRequestStream = isReadableStreamSupported && test(() => {
  let duplexAccessed = false;
  const hasContentType = new Request(platform.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      duplexAccessed = true;
      return "half";
    }
  }).headers.has("Content-Type");
  return duplexAccessed && !hasContentType;
});
const DEFAULT_CHUNK_SIZE = 64 * 1024;
const supportsResponseStream = isReadableStreamSupported && test(() => utils$1.isReadableStream(new Response("").body));
const resolvers = {
  stream: supportsResponseStream && ((res) => res.body)
};
isFetchSupported && ((res) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((type) => {
    !resolvers[type] && (resolvers[type] = utils$1.isFunction(res[type]) ? (res2) => res2[type]() : (_2, config2) => {
      throw new AxiosError("Response type '".concat(type, "' is not supported"), AxiosError.ERR_NOT_SUPPORT, config2);
    });
  });
})(new Response());
const getBodyLength = async (body) => {
  if (body == null) {
    return 0;
  }
  if (utils$1.isBlob(body)) {
    return body.size;
  }
  if (utils$1.isSpecCompliantForm(body)) {
    const _request = new Request(platform.origin, {
      method: "POST",
      body
    });
    return (await _request.arrayBuffer()).byteLength;
  }
  if (utils$1.isArrayBufferView(body) || utils$1.isArrayBuffer(body)) {
    return body.byteLength;
  }
  if (utils$1.isURLSearchParams(body)) {
    body = body + "";
  }
  if (utils$1.isString(body)) {
    return (await encodeText(body)).byteLength;
  }
};
const resolveBodyLength = async (headers, body) => {
  const length2 = utils$1.toFiniteNumber(headers.getContentLength());
  return length2 == null ? getBodyLength(body) : length2;
};
const fetchAdapter = isFetchSupported && (async (config2) => {
  let {
    url,
    method,
    data,
    signal,
    cancelToken,
    timeout,
    onDownloadProgress,
    onUploadProgress,
    responseType,
    headers,
    withCredentials = "same-origin",
    fetchOptions
  } = resolveConfig(config2);
  responseType = responseType ? (responseType + "").toLowerCase() : "text";
  let composedSignal = composeSignals([signal, cancelToken && cancelToken.toAbortSignal()], timeout);
  let request;
  const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
    composedSignal.unsubscribe();
  });
  let requestContentLength;
  try {
    if (onUploadProgress && supportsRequestStream && method !== "get" && method !== "head" && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
      let _request = new Request(url, {
        method: "POST",
        body: data,
        duplex: "half"
      });
      let contentTypeHeader;
      if (utils$1.isFormData(data) && (contentTypeHeader = _request.headers.get("content-type"))) {
        headers.setContentType(contentTypeHeader);
      }
      if (_request.body) {
        const [onProgress, flush] = progressEventDecorator(
          requestContentLength,
          progressEventReducer(asyncDecorator(onUploadProgress))
        );
        data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
      }
    }
    if (!utils$1.isString(withCredentials)) {
      withCredentials = withCredentials ? "include" : "omit";
    }
    const isCredentialsSupported = "credentials" in Request.prototype;
    request = new Request(url, {
      ...fetchOptions,
      signal: composedSignal,
      method: method.toUpperCase(),
      headers: headers.normalize().toJSON(),
      body: data,
      duplex: "half",
      credentials: isCredentialsSupported ? withCredentials : void 0
    });
    let response = await fetch(request);
    const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
    if (supportsResponseStream && (onDownloadProgress || isStreamResponse && unsubscribe)) {
      const options = {};
      ["status", "statusText", "headers"].forEach((prop) => {
        options[prop] = response[prop];
      });
      const responseContentLength = utils$1.toFiniteNumber(response.headers.get("content-length"));
      const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
        responseContentLength,
        progressEventReducer(asyncDecorator(onDownloadProgress), true)
      ) || [];
      response = new Response(
        trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
          flush && flush();
          unsubscribe && unsubscribe();
        }),
        options
      );
    }
    responseType = responseType || "text";
    let responseData = await resolvers[utils$1.findKey(resolvers, responseType) || "text"](response, config2);
    !isStreamResponse && unsubscribe && unsubscribe();
    return await new Promise((resolve, reject) => {
      settle(resolve, reject, {
        data: responseData,
        headers: AxiosHeaders.from(response.headers),
        status: response.status,
        statusText: response.statusText,
        config: config2,
        request
      });
    });
  } catch (err) {
    unsubscribe && unsubscribe();
    if (err && err.name === "TypeError" && /fetch/i.test(err.message)) {
      throw Object.assign(
        new AxiosError("Network Error", AxiosError.ERR_NETWORK, config2, request),
        {
          cause: err.cause || err
        }
      );
    }
    throw AxiosError.from(err, err && err.code, config2, request);
  }
});
const knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter,
  fetch: fetchAdapter
};
utils$1.forEach(knownAdapters, (fn2, value) => {
  if (fn2) {
    try {
      Object.defineProperty(fn2, "name", { value });
    } catch (e2) {
    }
    Object.defineProperty(fn2, "adapterName", { value });
  }
});
const renderReason = (reason) => "- ".concat(reason);
const isResolvedHandle = (adapter) => utils$1.isFunction(adapter) || adapter === null || adapter === false;
const adapters = {
  getAdapter: (adapters2) => {
    adapters2 = utils$1.isArray(adapters2) ? adapters2 : [adapters2];
    const { length: length2 } = adapters2;
    let nameOrAdapter;
    let adapter;
    const rejectedReasons = {};
    for (let i2 = 0; i2 < length2; i2++) {
      nameOrAdapter = adapters2[i2];
      let id;
      adapter = nameOrAdapter;
      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
        if (adapter === void 0) {
          throw new AxiosError("Unknown adapter '".concat(id, "'"));
        }
      }
      if (adapter) {
        break;
      }
      rejectedReasons[id || "#" + i2] = adapter;
    }
    if (!adapter) {
      const reasons = Object.entries(rejectedReasons).map(
        ([id, state]) => "adapter ".concat(id, " ") + (state === false ? "is not supported by the environment" : "is not available in the build")
      );
      let s2 = length2 ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
      throw new AxiosError(
        "There is no suitable adapter to dispatch the request " + s2,
        "ERR_NOT_SUPPORT"
      );
    }
    return adapter;
  },
  adapters: knownAdapters
};
function throwIfCancellationRequested(config2) {
  if (config2.cancelToken) {
    config2.cancelToken.throwIfRequested();
  }
  if (config2.signal && config2.signal.aborted) {
    throw new CanceledError(null, config2);
  }
}
function dispatchRequest(config2) {
  throwIfCancellationRequested(config2);
  config2.headers = AxiosHeaders.from(config2.headers);
  config2.data = transformData.call(
    config2,
    config2.transformRequest
  );
  if (["post", "put", "patch"].indexOf(config2.method) !== -1) {
    config2.headers.setContentType("application/x-www-form-urlencoded", false);
  }
  const adapter = adapters.getAdapter(config2.adapter || defaults.adapter);
  return adapter(config2).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config2);
    response.data = transformData.call(
      config2,
      config2.transformResponse,
      response
    );
    response.headers = AxiosHeaders.from(response.headers);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config2);
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config2,
          config2.transformResponse,
          reason.response
        );
        reason.response.headers = AxiosHeaders.from(reason.response.headers);
      }
    }
    return Promise.reject(reason);
  });
}
const VERSION = "1.7.7";
const validators$1 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i2) => {
  validators$1[type] = function validator2(thing) {
    return typeof thing === type || "a" + (i2 < 1 ? "n " : " ") + type;
  };
});
const deprecatedWarnings = {};
validators$1.transitional = function transitional(validator2, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return (value, opt, opts) => {
    if (validator2 === false) {
      throw new AxiosError(
        formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
        AxiosError.ERR_DEPRECATED
      );
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(
        formatMessage(
          opt,
          " has been deprecated since v" + version + " and will be removed in the near future"
        )
      );
    }
    return validator2 ? validator2(value, opt, opts) : true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new AxiosError("options must be an object", AxiosError.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i2 = keys.length;
  while (i2-- > 0) {
    const opt = keys[i2];
    const validator2 = schema[opt];
    if (validator2) {
      const value = options[opt];
      const result = value === void 0 || validator2(value, opt, options);
      if (result !== true) {
        throw new AxiosError("option " + opt + " must be " + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError("Unknown option " + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}
const validator = {
  assertOptions,
  validators: validators$1
};
const validators = validator.validators;
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(configOrUrl, config2) {
    try {
      return await this._request(configOrUrl, config2);
    } catch (err) {
      if (err instanceof Error) {
        let dummy;
        Error.captureStackTrace ? Error.captureStackTrace(dummy = {}) : dummy = new Error();
        const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, "") : "";
        try {
          if (!err.stack) {
            err.stack = stack;
          } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ""))) {
            err.stack += "\n" + stack;
          }
        } catch (e2) {
        }
      }
      throw err;
    }
  }
  _request(configOrUrl, config2) {
    if (typeof configOrUrl === "string") {
      config2 = config2 || {};
      config2.url = configOrUrl;
    } else {
      config2 = configOrUrl || {};
    }
    config2 = mergeConfig(this.defaults, config2);
    const { transitional: transitional2, paramsSerializer, headers } = config2;
    if (transitional2 !== void 0) {
      validator.assertOptions(transitional2, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }
    if (paramsSerializer != null) {
      if (utils$1.isFunction(paramsSerializer)) {
        config2.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator.assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }
    config2.method = (config2.method || this.defaults.method || "get").toLowerCase();
    let contextHeaders = headers && utils$1.merge(
      headers.common,
      headers[config2.method]
    );
    headers && utils$1.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (method) => {
        delete headers[method];
      }
    );
    config2.headers = AxiosHeaders.concat(contextHeaders, headers);
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config2) === false) {
        return;
      }
      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise2;
    let i2 = 0;
    let len;
    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), void 0];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;
      promise2 = Promise.resolve(config2);
      while (i2 < len) {
        promise2 = promise2.then(chain[i2++], chain[i2++]);
      }
      return promise2;
    }
    len = requestInterceptorChain.length;
    let newConfig = config2;
    i2 = 0;
    while (i2 < len) {
      const onFulfilled = requestInterceptorChain[i2++];
      const onRejected = requestInterceptorChain[i2++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error2) {
        onRejected.call(this, error2);
        break;
      }
    }
    try {
      promise2 = dispatchRequest.call(this, newConfig);
    } catch (error2) {
      return Promise.reject(error2);
    }
    i2 = 0;
    len = responseInterceptorChain.length;
    while (i2 < len) {
      promise2 = promise2.then(responseInterceptorChain[i2++], responseInterceptorChain[i2++]);
    }
    return promise2;
  }
  getUri(config2) {
    config2 = mergeConfig(this.defaults, config2);
    const fullPath = buildFullPath(config2.baseURL, config2.url);
    return buildURL(fullPath, config2.params, config2.paramsSerializer);
  }
}
utils$1.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
  Axios.prototype[method] = function(url, config2) {
    return this.request(mergeConfig(config2 || {}, {
      method,
      url,
      data: (config2 || {}).data
    }));
  };
});
utils$1.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config2) {
      return this.request(mergeConfig(config2 || {}, {
        method,
        headers: isForm ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url,
        data
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod();
  Axios.prototype[method + "Form"] = generateHTTPMethod(true);
});
class CancelToken {
  constructor(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("executor must be a function.");
    }
    let resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    const token2 = this;
    this.promise.then((cancel) => {
      if (!token2._listeners) return;
      let i2 = token2._listeners.length;
      while (i2-- > 0) {
        token2._listeners[i2](cancel);
      }
      token2._listeners = null;
    });
    this.promise.then = (onfulfilled) => {
      let _resolve;
      const promise2 = new Promise((resolve) => {
        token2.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise2.cancel = function reject() {
        token2.unsubscribe(_resolve);
      };
      return promise2;
    };
    executor(function cancel(message, config2, request) {
      if (token2.reason) {
        return;
      }
      token2.reason = new CanceledError(message, config2, request);
      resolvePromise(token2.reason);
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }
  toAbortSignal() {
    const controller = new AbortController();
    const abort = (err) => {
      controller.abort(err);
    };
    this.subscribe(abort);
    controller.signal.unsubscribe = () => this.unsubscribe(abort);
    return controller.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token2 = new CancelToken(function executor(c2) {
      cancel = c2;
    });
    return {
      token: token2,
      cancel
    };
  }
}
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}
function isAxiosError(payload) {
  return utils$1.isObject(payload) && payload.isAxiosError === true;
}
const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});
function createInstance(defaultConfig) {
  const context = new Axios(defaultConfig);
  const instance2 = bind(Axios.prototype.request, context);
  utils$1.extend(instance2, Axios.prototype, context, { allOwnKeys: true });
  utils$1.extend(instance2, context, null, { allOwnKeys: true });
  instance2.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };
  return instance2;
}
const axios = createInstance(defaults);
axios.Axios = Axios;
axios.CanceledError = CanceledError;
axios.CancelToken = CancelToken;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData;
axios.AxiosError = AxiosError;
axios.Cancel = axios.CanceledError;
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread;
axios.isAxiosError = isAxiosError;
axios.mergeConfig = mergeConfig;
axios.AxiosHeaders = AxiosHeaders;
axios.formToJSON = (thing) => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = adapters.getAdapter;
axios.HttpStatusCode = HttpStatusCode;
axios.default = axios;
const FRONT_END_HOST = "localhost:3000";
const FRONT_END_DOMAIN = "localhost:3000".split(":")[0];
const PROTOCOL = "https";
const BACKEND_BASE_URL = "https://stg.api.qlarr.com";
const CLOUD_URL = "https://stg.api.qlarr.com";
/*! js-cookie v3.0.5 | MIT */
function assign$1(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target;
}
var defaultConverter = {
  read: function(value) {
    if (value[0] === '"') {
      value = value.slice(1, -1);
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(value) {
    return encodeURIComponent(value).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  }
};
function init(converter, defaultAttributes) {
  function set(name, value, attributes) {
    if (typeof document === "undefined") {
      return;
    }
    attributes = assign$1({}, defaultAttributes, attributes);
    if (typeof attributes.expires === "number") {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
    }
    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString();
    }
    name = encodeURIComponent(name).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
    var stringifiedAttributes = "";
    for (var attributeName in attributes) {
      if (!attributes[attributeName]) {
        continue;
      }
      stringifiedAttributes += "; " + attributeName;
      if (attributes[attributeName] === true) {
        continue;
      }
      stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
    }
    return document.cookie = name + "=" + converter.write(value, name) + stringifiedAttributes;
  }
  function get(name) {
    if (typeof document === "undefined" || arguments.length && !name) {
      return;
    }
    var cookies2 = document.cookie ? document.cookie.split("; ") : [];
    var jar = {};
    for (var i2 = 0; i2 < cookies2.length; i2++) {
      var parts = cookies2[i2].split("=");
      var value = parts.slice(1).join("=");
      try {
        var found = decodeURIComponent(parts[0]);
        jar[found] = converter.read(value, found);
        if (name === found) {
          break;
        }
      } catch (e2) {
      }
    }
    return name ? jar[name] : jar;
  }
  return Object.create(
    {
      set,
      get,
      remove: function(name, attributes) {
        set(
          name,
          "",
          assign$1({}, attributes, {
            expires: -1
          })
        );
      },
      withAttributes: function(attributes) {
        return init(this.converter, assign$1({}, this.attributes, attributes));
      },
      withConverter: function(converter2) {
        return init(assign$1({}, this.converter, converter2), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(defaultAttributes) },
      converter: { value: Object.freeze(converter) }
    }
  );
}
var api = init(defaultConverter, { path: "/" });
class CookiesService {
  setObject(value, key) {
    api.set(key, JSON.stringify(value), {
      domain: FRONT_END_DOMAIN,
      SameSite: "Strict",
      expires: expiry()
    });
  }
  getObject(key) {
    const value = api.get(key);
    return value && JSON.parse(value);
  }
  removeByKey(key) {
    api.remove(key, {
      domain: FRONT_END_DOMAIN,
      SameSite: "Strict",
      expires: expiry()
    });
  }
}
const expiry = () => {
  const expirationDate = /* @__PURE__ */ new Date();
  expirationDate.setDate(expirationDate.getDate() + 90);
  return expirationDate;
};
const CookiesService$1 = new CookiesService();
class TokenService {
  getRefreshToken() {
    var _a2;
    return (_a2 = this.getUser()) == null ? void 0 : _a2.refreshToken;
  }
  getAuthToken() {
    var _a2;
    return (_a2 = this.getUser()) == null ? void 0 : _a2.accessToken;
  }
  getUser() {
    const user = CookiesService$1.getObject("user");
    return user;
  }
  isAuthenticated() {
    const authToken = this.getAuthToken();
    return authToken && authToken.length > 0;
  }
  setSession(user) {
    CookiesService$1.setObject(user, "user");
  }
  removeSession() {
    CookiesService$1.removeByKey("user");
  }
}
const TokenService$1 = new TokenService();
const REFRESH_URL = "/user/refresh_token";
const instance$1 = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});
instance$1.interceptors.request.use(
  (config2) => {
    const token2 = TokenService$1.getAuthToken();
    if (config2.url !== REFRESH_URL && config2.headers != token2) {
      config2.headers["Authorization"] = "Bearer " + token2;
    } else {
      delete config2.headers["Authorization"];
    }
    config2.baseURL = BACKEND_BASE_URL;
    return config2;
  },
  (error2) => {
    return Promise.reject(error2);
  }
);
instance$1.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    if (originalConfig.url !== REFRESH_URL && err.response && err.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      try {
        const rs = await instance$1.post("/user/refresh_token", {
          accessToken: TokenService$1.getAuthToken(),
          refreshToken: TokenService$1.getRefreshToken()
        });
        TokenService$1.setSession(rs.data);
        return instance$1(originalConfig);
      } catch (_error) {
        window.location.href = "/login";
      }
    }
    return Promise.reject(err);
  }
);
class DesignService extends BaseService {
  async getSurveyDesign() {
    const surveyId = sessionStorage.getItem("surveyId");
    const response = await this.handleRequest(
      () => instance$1.get("/survey/".concat(surveyId, "/design"))
    );
    return response.data;
  }
  async setSurveyDesign(data, params) {
    const surveyId = sessionStorage.getItem("surveyId");
    return instance$1.post("/survey/".concat(surveyId, "/design"), data, { params }).then((response) => {
      return response.data;
    });
  }
  async publish(params, id) {
    const surveyId = id ? id : sessionStorage.getItem("surveyId");
    const response = await this.handleRequest(
      () => instance$1.post(
        "/survey/".concat(surveyId, "/design/publish"),
        {},
        { params }
      )
    );
    return response.data;
  }
  async uploadResource(file, surveyId = null) {
    if (!surveyId) {
      surveyId = sessionStorage.getItem("surveyId");
    }
    const formData = new FormData();
    formData.append("file", file);
    const response = await this.handleRequest(
      () => instance$1.post("/survey/".concat(surveyId, "/resource"), formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data"
        }
      })
    );
    return response.data;
  }
}
const importedService = new DesignService();
async function GetData(designService, setState2, setError2, langInfo) {
  try {
    const response = await designService.getSurveyDesign();
    return processResponse(response, setState2, langInfo);
  } catch (err) {
    setError2(err);
  }
}
async function SetData(state, setState2, setError2) {
  try {
    const params = new URLSearchParams([
      ["version", state.versionDto.version],
      ["sub_version", state.versionDto.subVersion]
    ]);
    const response = await importedService.setSurveyDesign(state, params);
    processResponse(response, setState2, state.langInfo);
  } catch (err) {
    setError2(err);
  }
}
const processResponse = (response, setState2, langInfo) => {
  let state = response.designerInput.state;
  if (!state.Survey.theme) {
    state.Survey.theme = defaultSurveyTheme;
  }
  const defaultLang = response.designerInput.state.Survey.defaultLang || LANGUAGE_DEF.en;
  const mainLang = defaultLang.code;
  const lang = (langInfo == null ? void 0 : langInfo.lang) || defaultLang.code;
  const languagesList = [defaultLang].concat(
    response.designerInput.state.Survey.additionalLang || []
  );
  state.langInfo = {
    languagesList,
    mainLang,
    lang,
    onMainLang: lang == mainLang
  };
  state.versionDto = response.versionDto;
  state.componentIndex = response.designerInput.componentIndexList;
  setState2(state);
  return state;
};
let saveTimer$1;
let buffer$1 = [];
let debounceTime = 3e3;
const saveDebounce$1 = (store) => {
  if (saveTimer$1) {
    clearTimeout(saveTimer$1);
  }
  saveTimer$1 = setTimeout(() => {
    store.dispatch(setUpdating$1(true));
    const state = store.getState();
    SetData(
      state.designState,
      (state2) => {
        setState$1(store, state2);
      },
      (error2) => {
        setError$1(store, error2);
      }
    );
  }, debounceTime);
};
const dataSaver = (store) => (next2) => (action2) => {
  if (!action2 || !action2.type) {
    return;
  }
  if (MUTATING.includes(action2.type) && !action2.type.startsWith("editState/")) {
    if (!store.getState().designState.isUpdating) {
      store.dispatch(setSaving$1(true));
      saveDebounce$1(store);
    } else {
      buffer$1.push(action2);
    }
  }
  return next2(action2);
};
const MUTATING = [
  "templateState/onBaseLangChanged",
  "designState/onAdditionalLangAdded",
  "designState/onAdditionalLangRemoved",
  "designState/changeAttribute",
  "designState/changeTimeFormats",
  "designState/changeContent",
  "designState/changeResources",
  "designState/deleteQuestion",
  "designState/cloneQuestion",
  "designState/deleteGroup",
  "designState/addNewAnswer",
  "designState/removeAnswer",
  "designState/changeValidationValue",
  "designState/updateRandom",
  "designState/updatePriority",
  "designState/updateRandomByType",
  "designState/updatePriorityByType",
  "designState/removeSkipDestination",
  "designState/editSkipDestination",
  "designState/editSkipToEnd",
  "designState/changeRelevance",
  "designState/addComponent",
  "designState/onDrag"
];
const setState$1 = (store, state) => {
  store.dispatch(setUpdating$1(false));
  store.dispatch(designStateReceived(state));
  store.dispatch(setSaving$1(false));
  buffer$1.forEach((action2) => {
    store.dispatch(action2);
  });
  buffer$1 = [];
};
const setError$1 = (store, error2) => {
  onApiError({
    error: error2,
    globalErrorHandler: (processedError) => {
      store.dispatch(onError(processedError));
      store.dispatch(setSaving$1(false));
      store.dispatch(setUpdating$1(false));
    },
    locallErrorHandler: (processedError) => {
      store.dispatch(onError(processedError));
      store.dispatch(setSaving$1(false));
      store.dispatch(setUpdating$1(false));
    }
  });
};
const templateState = createSlice({
  name: "templateState",
  initialState: { state: {} },
  reducers: {
    setDirty: (state, action2) => {
      state[action2.payload] = true;
    },
    setFetching: (state, action2) => {
      state.isLoading = action2.payload;
    }
  }
});
const { setDirty, setFetching } = templateState.actions;
const templateState$1 = templateState.reducer;
const instance = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});
instance.interceptors.request.use(
  (config2) => {
    config2.baseURL = BACKEND_BASE_URL;
    return config2;
  },
  (error2) => {
    return Promise.reject(error2);
  }
);
class SurveyService extends BaseService {
  async getAllSurveys(page, perpage, status, sortBy) {
    const response = await this.handleRequest(
      () => instance$1.get(
        "/survey/all?page=".concat(page, "&per_page=").concat(perpage, "&status=").concat(status, "&sort_by=").concat(sortBy)
      )
    );
    return response.data;
  }
  async getGuestsSurveys() {
    const response = await this.handleRequest(
      () => instance.get("".concat(CLOUD_URL, "/guest/survey/all"))
    );
    return response.data;
  }
  async getSurvey() {
    const surveyId = sessionStorage.getItem("surveyId");
    const response = await this.handleRequest(
      () => instance$1.get("/survey/".concat(surveyId))
    );
    return response.data;
  }
  async createSurvey(data) {
    const response = await this.handleRequest(
      () => instance$1.post("/survey/create", data)
    );
    return response.data;
  }
  async putSurvey(data, surveyId) {
    const response = await this.handleRequest(
      () => instance$1.put("/survey/".concat(surveyId), data)
    );
    return response.data;
  }
  async closeSurvey(surveyId) {
    const response = await this.handleRequest(
      () => instance$1.put("/survey/".concat(surveyId, "/close"))
    );
    return response.data;
  }
  async cloneSurvey(surveyId, data) {
    const response = await this.handleRequest(
      () => instance$1.post("/survey/".concat(surveyId, "/clone"), data)
    );
    return response.data;
  }
  async cloneGuestSurvey(surveyId, data) {
    const response = await this.handleRequest(
      () => instance$1.post("/survey/".concat(surveyId, "/clone_guest"), data)
    );
    return response.data;
  }
  async deleteSurvey(surveyId) {
    const response = await this.handleRequest(
      () => instance$1.delete("/survey/".concat(surveyId))
    );
    return response.data;
  }
  async allResponse(surveyId, dbValues, page, per_page, complete, surveyor) {
    const shouldAddComplete = complete === true || complete === false;
    const response = await this.handleRequest(
      () => instance$1.get(
        "/survey/".concat(surveyId, "/response/all?db_values=").concat(dbValues, "&page=").concat(page, "&per_page=").concat(per_page) + "".concat(shouldAddComplete ? "&complete=".concat(complete) : "") + "".concat(surveyor ? "&surveyor=".concat(surveyor) : "")
      )
    );
    return response.data;
  }
  async exportResponses(surveyId, timezone, dbValues, complete) {
    const shouldAddComplete = complete === true || complete === false;
    const response = await this.handleRequest(
      () => instance$1.get(
        "/survey/".concat(surveyId, "/response/export?db_values=").concat(dbValues, "&timezone=").concat(timezone) + "".concat(shouldAddComplete ? "&complete=".concat(complete) : "")
      )
    );
    return response.data;
  }
  async deleteResponse(surveyId, responseId) {
    const response = await this.handleRequest(
      () => instance$1.delete("/survey/".concat(surveyId, "/response/").concat(responseId))
    );
    return response;
  }
  async eventResponse(responseId) {
    const surveyId = sessionStorage.getItem("surveyId");
    const response = await this.handleRequest(
      () => instance$1.get("/survey/".concat(surveyId, "/response/").concat(responseId, "/events"))
    );
    return response;
  }
  async importSurvey(file, surveyName) {
    const formData = new FormData();
    formData.append("survey_name", surveyName);
    formData.append("file", file);
    const response = await this.handleRequest(
      () => instance$1.post("/survey/import", formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data"
        }
      })
    );
    return response.data;
  }
  async exportSurvey(surveyId) {
    var _a2;
    const response = await this.handleRequest(
      () => instance$1.get("/survey/".concat(surveyId, "/export"), { responseType: "blob" })
    );
    const contentDisposition = response.headers.get("Content-Disposition");
    const filename = contentDisposition ? ((_a2 = contentDisposition.match(/filename="(.+)"/)) == null ? void 0 : _a2[1]) || "".concat(surveyId, ".zip") : "".concat(surveyId, ".zip");
    const blob = await response.data;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
let saveTimer;
let buffer = [];
let defaultDebounceTime = 3e3;
const surveyService = new SurveyService();
async function setData(store, state) {
  surveyService.putSurvey(state.editState.survey, state.editState.survey.id).then((state2) => {
    setState(store, state2);
  }).catch((error2) => {
    surveyService.getSurvey().then((state2) => {
      setState(store, state2);
    });
    setError(store, error2);
  });
}
const saveDebounce = (store, debounceTime2) => {
  if (saveTimer) {
    clearTimeout(saveTimer);
  }
  saveTimer = setTimeout(() => {
    store.dispatch(setUpdating(true));
    const state = store.getState();
    setData(store, state);
  }, debounceTime2);
};
const editDataSaver = (store) => (next2) => (action2) => {
  if (action2.type == "editState/surveyAttributeChanged" || action2.type == "editState/surveyAttributeChangedImmediate") {
    if (!store.getState().editState.isUpdating) {
      store.dispatch(setSaving(true));
      let debounceTime2 = defaultDebounceTime;
      if (action2.type == "editState/surveyAttributeChangedImmediate") {
        debounceTime2 = 0;
      }
      saveDebounce(store, debounceTime2);
    } else {
      buffer.push(action2);
    }
  }
  return next2(action2);
};
const setState = (store, state) => {
  store.dispatch(setUpdating(false));
  store.dispatch(surveyReceived(state));
  store.dispatch(setSaving(false));
  buffer.forEach((action2) => {
    store.dispatch(action2);
  });
  store.dispatch(onError(""));
  buffer = [];
};
const setError = (store, processedError) => {
  store.dispatch(onError(processedError));
  store.dispatch(setSaving(false));
  store.dispatch(setUpdating(false));
};
const runStore = configureStore({
  reducer: { templateState: templateState$1, runState: runState$1 }
});
const manageStore = configureStore({
  reducer: { templateState: templateState$1, designState: designState$1, editState: editState$1 },
  middleware: (getDefaultMiddleware2) => getDefaultMiddleware2().concat(dataSaver, editDataSaver)
});
const getparam = (params, key) => {
  if (window["Android"]) {
    return window["Android"].getParam(key);
  } else {
    return params[key];
  }
};
const startNavigation = (runService, lang, preview, guest, mode) => {
  if (window["Android"]) {
    return new Promise((resolve, reject) => {
      window["Android"].start();
      window["navigateOffline"] = (res) => {
        resolve(res);
      };
    });
  } else {
    return runService.start(lang, preview, guest, mode);
  }
};
const continueNavigation = (runService, payload, responseId, preview, guest, mode) => {
  const finalObj = {
    ...payload,
    responseId
  };
  if (window["Android"]) {
    return new Promise((resolve, reject) => {
      window["Android"].navigate(JSON.stringify(finalObj));
      window["navigateOffline"] = (res) => {
        resolve(res);
      };
    });
  } else {
    return runService.navigate(finalObj, preview, guest, mode);
  }
};
const uploadFile = (runService, key, preview, selectedFile) => {
  if (window["Android"]) {
    return new Promise((resolve, reject) => {
      window["Android"].uploadFile(key, selectedFile.name);
      window["onFileUploaded"] = (res) => {
        resolve(res);
      };
    });
  }
  return runService.uploadResponseFile(key, preview, selectedFile);
};
const uploadDataUrl = (runService, key, preview, dataurl, fileName) => {
  if (window["Android"]) {
    return new Promise((resolve, reject) => {
      window["Android"].uploadDataUrl(key, dataurl, fileName);
      window["onDataUrlUploaded"] = (res) => {
        resolve(res);
      };
    });
  }
  const blob = dataURLtoBlob(dataurl);
  return runService.uploadResponseBlob(key, preview, blob, fileName);
};
const dataURLtoBlob = (dataurl) => {
  var arr = dataurl.split(","), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n2 = bstr.length, u8arr = new Uint8Array(n2);
  while (n2--) {
    u8arr[n2] = bstr.charCodeAt(n2);
  }
  return new Blob([u8arr], { type: mime });
};
const downloadFileAsBase64 = (url) => {
  return fetch(url).then((response) => response.blob()).then(
    (blob) => new Promise((callback) => {
      let reader = new FileReader();
      reader.onload = function() {
        callback(this.result);
      };
      reader.readAsDataURL(blob);
    })
  );
};
const loadScript = (runService, preview, guest) => new Promise((resolve, reject) => {
  runService.runtimeJs(preview, guest).then((data) => {
    const script = document.createElement("script");
    script.innerHTML = data;
    document.body.appendChild(script);
    resolve();
  }).catch((err) => {
    reject(err);
  });
});
const previewUrl = (fileName, questionCode) => {
  const surveyId = sessionStorage.getItem("surveyId");
  return BACKEND_BASE_URL + "/survey/".concat(surveyId, "/response/attach/").concat(fileName).concat(questionCode ? "/" + questionCode : "");
};
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var MEDIA = "@media";
var IMPORT = "@import";
var SUPPORTS = "@supports";
var KEYFRAMES = "@keyframes";
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length2) {
  return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search, position2) {
  return value.indexOf(search, position2);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append2(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}
function filter2(array, pattern) {
  return array.filter(function(value) {
    return !match(value, pattern);
  });
}
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length2, siblings) {
  return { value, root, parent, type, props, children, line, column, length: length2, return: "", siblings };
}
function copy(root, props) {
  return assign(node("", null, null, "", null, null, 0, root.siblings), root, { length: -root.length }, props);
}
function lift(root) {
  while (root.root)
    root = copy(root.root, { children: [root] });
  append2(root, root.siblings);
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
  while (!token(peek()))
    next();
  return slice(index, position);
}
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f", abs(index ? points[index - 1] : 0)) != -1)
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append2(comment(commenter(next(), caret()), root, parent, declarations), declarations);
            if ((token(previous || 1) == 5 || token(peek() || 1) == 5) && strlen(characters2) && substr(characters2, -1, void 0) !== " ") characters2 += " ";
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (ampersand == -1) characters2 = replace(characters2, /\f/g, "");
            if (property > 0 && (strlen(characters2) - length2 || variable === 0 && previous === 47))
              append2(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1, declarations) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2, declarations), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append2(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2, rulesets), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append2(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2, children), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2, siblings) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i2 = 0, j2 = 0, k2 = 0; i2 < index; ++i2)
    for (var x2 = 0, y2 = substr(value, post + 1, post = abs(j2 = points[i2])), z2 = value; x2 < size; ++x2)
      if (z2 = trim(j2 > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2])))
        props[k2++] = z2;
  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2, siblings);
}
function comment(value, root, parent, siblings) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings);
}
function declaration(value, root, parent, length2, siblings) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2, siblings);
}
function prefix(value, length2, children) {
  switch (hash(value, length2)) {
    case 5103:
      return WEBKIT + "print-" + value + value;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
      return WEBKIT + value + value;
    case 4855:
      return WEBKIT + value.replace("add", "source-over").replace("substract", "source-out").replace("intersect", "source-in").replace("exclude", "xor") + value;
    case 4789:
      return MOZ + value + value;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    case 5936:
      switch (charat(value, length2 + 11)) {
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
    case 6828:
    case 4268:
    case 2903:
      return WEBKIT + value + MS + value + value;
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/g, "") + (!match(value, /flex-|baseline/) ? MS + "grid-row-" + replace(value, /flex-|-self/g, "") : "") + value;
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/g, "") + value;
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /space-between/, "justify") + WEBKIT + value + value;
    case 4200:
      if (!match(value, /flex-|baseline/)) return MS + "grid-column-align" + substr(value, length2) + value;
      break;
    case 2592:
    case 3360:
      return MS + replace(value, "template-", "") + value;
    case 4384:
    case 3616:
      if (children && children.some(function(element, index) {
        return length2 = index, match(element.props, /grid-\w+-end/);
      })) {
        return ~indexof(value + (children = children[length2].value), "span", 0) ? value : MS + replace(value, "-start", "") + value + MS + "grid-row-span:" + (~indexof(children, "span", 0) ? match(children, /\d+/) : +match(children, /\d+/) - +match(value, /\d+/)) + ";";
      }
      return MS + replace(value, "-start", "") + value;
    case 4896:
    case 4128:
      return children && children.some(function(element) {
        return match(element.props, /grid-\w+-start/);
      }) ? value : MS + replace(replace(value, "-end", "-span"), "span ", "") + value;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
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
      if (strlen(value) - 1 - length2 > 6)
        switch (charat(value, length2 + 1)) {
          case 109:
            if (charat(value, length2 + 4) !== 45)
              break;
          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
          case 115:
            return ~indexof(value, "stretch", 0) ? prefix(replace(value, "stretch", "fill-available"), length2, children) + value : value;
        }
      break;
    case 5152:
    case 5920:
      return replace(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(_2, a2, b2, c2, d2, e2, f2) {
        return MS + a2 + ":" + b2 + f2 + (c2 ? MS + a2 + "-span:" + (d2 ? e2 : +e2 - +b2) + f2 : "") + value;
      });
    case 4949:
      if (charat(value, length2 + 6) === 121)
        return replace(value, ":", ":" + WEBKIT) + value;
      break;
    case 6444:
      switch (charat(value, charat(value, 14) === 45 ? 18 : 11)) {
        case 120:
          return replace(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
        case 100:
          return replace(value, ":", ":" + MS) + value;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return replace(value, "scroll-", "scroll-snap-") + value;
  }
  return value;
}
function serialize(children, callback) {
  var output = "";
  for (var i2 = 0; i2 < children.length; i2++)
    output += callback(children[i2], i2, children, callback) || "";
  return output;
}
function prefixer(element, index, children, callback) {
  if (element.length > -1) {
    if (!element.return)
      switch (element.type) {
        case DECLARATION:
          element.return = prefix(element.value, element.length, children);
          return;
        case KEYFRAMES:
          return serialize([copy(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
        case RULESET:
          if (element.length)
            return combine(children = element.props, function(value) {
              switch (match(value, callback = /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  lift(copy(element, { props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] }));
                  lift(copy(element, { props: [value] }));
                  assign(element, { props: filter2(children, callback) });
                  break;
                case "::placeholder":
                  lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }));
                  lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] }));
                  lift(copy(element, { props: [replace(value, /:(plac\w+)/, MS + "input-$1")] }));
                  lift(copy(element, { props: [value] }));
                  assign(element, { props: filter2(children, callback) });
                  break;
              }
              return "";
            });
      }
  }
}
var cssjanus$1 = { exports: {} };
/*!
 * CSSJanus. https://www.mediawiki.org/wiki/CSSJanus
 *
 * Copyright 2014 Trevor Parscal
 * Copyright 2010 Roan Kattouw
 * Copyright 2008 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function(module, exports) {
  var cssjanus2;
  function Tokenizer(regex, token2) {
    var matches = [], index = 0;
    function tokenizeCallback(match2) {
      matches.push(match2);
      return token2;
    }
    function detokenizeCallback() {
      return matches[index++];
    }
    return {
      /**
       * Replace matching strings with tokens.
       *
       * @param {string} str String to tokenize
       * @return {string} Tokenized string
       */
      tokenize: function(str) {
        return str.replace(regex, tokenizeCallback);
      },
      /**
       * Restores tokens to their original values.
       *
       * @param {string} str String previously run through tokenize()
       * @return {string} Original string
       */
      detokenize: function(str) {
        return str.replace(new RegExp("(" + token2 + ")", "g"), detokenizeCallback);
      }
    };
  }
  function CSSJanus() {
    var temporaryToken = "`TMP`", temporaryLtrToken = "`TMPLTR`", temporaryRtlToken = "`TMPRTL`", noFlipSingleToken = "`NOFLIP_SINGLE`", noFlipClassToken = "`NOFLIP_CLASS`", commentToken = "`COMMENT`", nonAsciiPattern = "[^\\u0020-\\u007e]", unicodePattern = "(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)", numPattern = "(?:[0-9]*\\.[0-9]+|[0-9]+)", unitPattern = "(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)", directionPattern = "direction\\s*:\\s*", urlSpecialCharsPattern = "[!#$%&*-~]", validAfterUriCharsPattern = "['\"]?\\s*", nonLetterPattern = "(^|[^a-zA-Z])", charsWithinSelectorPattern = "[^\\}]*?", noFlipPattern = "\\/\\*\\!?\\s*@noflip\\s*\\*\\/", commentPattern = "\\/\\*[^*]*\\*+([^\\/*][^*]*\\*+)*\\/", escapePattern = "(?:" + unicodePattern + "|\\\\[^\\r\\n\\f0-9a-f])", nmstartPattern = "(?:[_a-z]|" + nonAsciiPattern + "|" + escapePattern + ")", nmcharPattern = "(?:[_a-z0-9-]|" + nonAsciiPattern + "|" + escapePattern + ")", identPattern = "-?" + nmstartPattern + nmcharPattern + "*", quantPattern = numPattern + "(?:\\s*" + unitPattern + "|" + identPattern + ")?", signedQuantPattern = "((?:-?" + quantPattern + ")|(?:inherit|auto))", signedQuantSimplePattern = "(?:-?" + numPattern + "(?:\\s*" + unitPattern + ")?)", mathOperatorsPattern = "(?:\\+|\\-|\\*|\\/)", allowedCharsPattern = "(?:\\(|\\)|\\t| )", calcEquationPattern = "(?:" + allowedCharsPattern + "|" + signedQuantSimplePattern + "|" + mathOperatorsPattern + "){3,}", calcPattern = "(?:calc\\((?:" + calcEquationPattern + ")\\))", signedQuantCalcPattern = "((?:-?" + quantPattern + ")|(?:inherit|auto)|" + calcPattern + ")", fourNotationQuantPropsPattern = "((?:margin|padding|border-width)\\s*:\\s*)", fourNotationColorPropsPattern = "((?:-color|border-style)\\s*:\\s*)", colorPattern = "(#?" + nmcharPattern + "+|(?:rgba?|hsla?)\\([ \\d.,%-]+\\))", urlCharsPattern = "(?:" + urlSpecialCharsPattern + "|" + nonAsciiPattern + "|" + escapePattern + ")*?", lookAheadNotLetterPattern = "(?![a-zA-Z])", lookAheadNotOpenBracePattern = "(?!(" + nmcharPattern + "|\\r?\\n|\\s|#|\\:|\\.|\\,|\\+|>|~|\\(|\\)|\\[|\\]|=|\\*=|~=|\\^=|'[^']*'|\"[^\"]*\"|" + commentToken + ")*?{)", lookAheadNotClosingParenPattern = "(?!" + urlCharsPattern + validAfterUriCharsPattern + "\\))", lookAheadForClosingParenPattern = "(?=" + urlCharsPattern + validAfterUriCharsPattern + "\\))", suffixPattern = "(\\s*(?:!important\\s*)?[;}])", temporaryTokenRegExp = /`TMP`/g, temporaryLtrTokenRegExp = /`TMPLTR`/g, temporaryRtlTokenRegExp = /`TMPRTL`/g, commentRegExp = new RegExp(commentPattern, "gi"), noFlipSingleRegExp = new RegExp("(" + noFlipPattern + lookAheadNotOpenBracePattern + "[^;}]+;?)", "gi"), noFlipClassRegExp = new RegExp("(" + noFlipPattern + charsWithinSelectorPattern + "})", "gi"), directionLtrRegExp = new RegExp("(" + directionPattern + ")ltr", "gi"), directionRtlRegExp = new RegExp("(" + directionPattern + ")rtl", "gi"), leftRegExp = new RegExp(nonLetterPattern + "(left)" + lookAheadNotLetterPattern + lookAheadNotClosingParenPattern + lookAheadNotOpenBracePattern, "gi"), rightRegExp = new RegExp(nonLetterPattern + "(right)" + lookAheadNotLetterPattern + lookAheadNotClosingParenPattern + lookAheadNotOpenBracePattern, "gi"), leftInUrlRegExp = new RegExp(nonLetterPattern + "(left)" + lookAheadForClosingParenPattern, "gi"), rightInUrlRegExp = new RegExp(nonLetterPattern + "(right)" + lookAheadForClosingParenPattern, "gi"), ltrDirSelector = /(:dir\( *)ltr( *\))/g, rtlDirSelector = /(:dir\( *)rtl( *\))/g, ltrInUrlRegExp = new RegExp(nonLetterPattern + "(ltr)" + lookAheadForClosingParenPattern, "gi"), rtlInUrlRegExp = new RegExp(nonLetterPattern + "(rtl)" + lookAheadForClosingParenPattern, "gi"), cursorEastRegExp = new RegExp(nonLetterPattern + "([ns]?)e-resize", "gi"), cursorWestRegExp = new RegExp(nonLetterPattern + "([ns]?)w-resize", "gi"), fourNotationQuantRegExp = new RegExp(fourNotationQuantPropsPattern + signedQuantCalcPattern + "(\\s+)" + signedQuantCalcPattern + "(\\s+)" + signedQuantCalcPattern + "(\\s+)" + signedQuantCalcPattern + suffixPattern, "gi"), fourNotationColorRegExp = new RegExp(fourNotationColorPropsPattern + colorPattern + "(\\s+)" + colorPattern + "(\\s+)" + colorPattern + "(\\s+)" + colorPattern + suffixPattern, "gi"), bgHorizontalPercentageRegExp = new RegExp("(background(?:-position)?\\s*:\\s*(?:[^:;}\\s]+\\s+)*?)(" + quantPattern + ")", "gi"), bgHorizontalPercentageXRegExp = new RegExp("(background-position-x\\s*:\\s*)(-?" + numPattern + "%)", "gi"), borderRadiusRegExp = new RegExp("(border-radius\\s*:\\s*)" + signedQuantPattern + "(?:(?:\\s+" + signedQuantPattern + ")(?:\\s+" + signedQuantPattern + ")?(?:\\s+" + signedQuantPattern + ")?)?(?:(?:(?:\\s*\\/\\s*)" + signedQuantPattern + ")(?:\\s+" + signedQuantPattern + ")?(?:\\s+" + signedQuantPattern + ")?(?:\\s+" + signedQuantPattern + ")?)?" + suffixPattern, "gi"), boxShadowRegExp = new RegExp("(box-shadow\\s*:\\s*(?:inset\\s*)?)" + signedQuantPattern, "gi"), textShadow1RegExp = new RegExp("(text-shadow\\s*:\\s*)" + signedQuantPattern + "(\\s*)" + colorPattern, "gi"), textShadow2RegExp = new RegExp("(text-shadow\\s*:\\s*)" + colorPattern + "(\\s*)" + signedQuantPattern, "gi"), textShadow3RegExp = new RegExp("(text-shadow\\s*:\\s*)" + signedQuantPattern, "gi"), translateXRegExp = new RegExp("(transform\\s*:[^;}]*)(translateX\\s*\\(\\s*)" + signedQuantPattern + "(\\s*\\))", "gi"), translateRegExp = new RegExp("(transform\\s*:[^;}]*)(translate\\s*\\(\\s*)" + signedQuantPattern + "((?:\\s*,\\s*" + signedQuantPattern + "){0,2}\\s*\\))", "gi");
    function calculateNewBackgroundPosition(match2, pre, value) {
      var idx, len;
      if (value.slice(-1) === "%") {
        idx = value.indexOf(".");
        if (idx !== -1) {
          len = value.length - idx - 2;
          value = 100 - parseFloat(value);
          value = value.toFixed(len) + "%";
        } else {
          value = 100 - parseFloat(value) + "%";
        }
      }
      return pre + value;
    }
    function flipBorderRadiusValues(values2) {
      switch (values2.length) {
        case 4:
          values2 = [values2[1], values2[0], values2[3], values2[2]];
          break;
        case 3:
          values2 = [values2[1], values2[0], values2[1], values2[2]];
          break;
        case 2:
          values2 = [values2[1], values2[0]];
          break;
        case 1:
          values2 = [values2[0]];
          break;
      }
      return values2.join(" ");
    }
    function calculateNewBorderRadius(match2, pre) {
      var values2, args = [].slice.call(arguments), firstGroup = args.slice(2, 6).filter(function(val) {
        return val;
      }), secondGroup = args.slice(6, 10).filter(function(val) {
        return val;
      }), post = args[10] || "";
      if (secondGroup.length) {
        values2 = flipBorderRadiusValues(firstGroup) + " / " + flipBorderRadiusValues(secondGroup);
      } else {
        values2 = flipBorderRadiusValues(firstGroup);
      }
      return pre + values2 + post;
    }
    function flipSign(value) {
      if (parseFloat(value) === 0) {
        return value;
      }
      if (value[0] === "-") {
        return value.slice(1);
      }
      return "-" + value;
    }
    function calculateNewShadow(match2, property, offset) {
      return property + flipSign(offset);
    }
    function calculateNewTranslate(match2, property, prefix2, offset, suffix) {
      return property + prefix2 + flipSign(offset) + suffix;
    }
    function calculateNewFourTextShadow(match2, property, color, space, offset) {
      return property + color + space + flipSign(offset);
    }
    return {
      /**
       * Transform a left-to-right stylesheet to right-to-left.
       *
       * @param {string} css Stylesheet to transform
       * @param {Object} options Options
       * @param {boolean} [options.transformDirInUrl=false] Transform directions in URLs
       * (e.g. 'ltr', 'rtl')
       * @param {boolean} [options.transformEdgeInUrl=false] Transform edges in URLs
       * (e.g. 'left', 'right')
       * @return {string} Transformed stylesheet
       */
      "transform": function(css, options) {
        var noFlipSingleTokenizer = new Tokenizer(noFlipSingleRegExp, noFlipSingleToken), noFlipClassTokenizer = new Tokenizer(noFlipClassRegExp, noFlipClassToken), commentTokenizer = new Tokenizer(commentRegExp, commentToken);
        css = commentTokenizer.tokenize(
          noFlipClassTokenizer.tokenize(
            noFlipSingleTokenizer.tokenize(
              // We wrap tokens in ` , not ~ like the original implementation does.
              // This was done because ` is not a legal character in CSS and can only
              // occur in URLs, where we escape it to %60 before inserting our tokens.
              css.replace("`", "%60")
            )
          )
        );
        if (options.transformDirInUrl) {
          css = css.replace(ltrDirSelector, "$1" + temporaryLtrToken + "$2").replace(rtlDirSelector, "$1" + temporaryRtlToken + "$2").replace(ltrInUrlRegExp, "$1" + temporaryToken).replace(rtlInUrlRegExp, "$1ltr").replace(temporaryTokenRegExp, "rtl").replace(temporaryLtrTokenRegExp, "ltr").replace(temporaryRtlTokenRegExp, "rtl");
        }
        if (options.transformEdgeInUrl) {
          css = css.replace(leftInUrlRegExp, "$1" + temporaryToken).replace(rightInUrlRegExp, "$1left").replace(temporaryTokenRegExp, "right");
        }
        css = css.replace(directionLtrRegExp, "$1" + temporaryToken).replace(directionRtlRegExp, "$1ltr").replace(temporaryTokenRegExp, "rtl").replace(leftRegExp, "$1" + temporaryToken).replace(rightRegExp, "$1left").replace(temporaryTokenRegExp, "right").replace(cursorEastRegExp, "$1$2" + temporaryToken).replace(cursorWestRegExp, "$1$2e-resize").replace(temporaryTokenRegExp, "w-resize").replace(borderRadiusRegExp, calculateNewBorderRadius).replace(boxShadowRegExp, calculateNewShadow).replace(textShadow1RegExp, calculateNewFourTextShadow).replace(textShadow2RegExp, calculateNewFourTextShadow).replace(textShadow3RegExp, calculateNewShadow).replace(translateXRegExp, calculateNewTranslate).replace(translateRegExp, calculateNewTranslate).replace(fourNotationQuantRegExp, "$1$2$3$8$5$6$7$4$9").replace(fourNotationColorRegExp, "$1$2$3$8$5$6$7$4$9").replace(bgHorizontalPercentageRegExp, calculateNewBackgroundPosition).replace(bgHorizontalPercentageXRegExp, calculateNewBackgroundPosition);
        css = noFlipSingleTokenizer.detokenize(
          noFlipClassTokenizer.detokenize(
            commentTokenizer.detokenize(css)
          )
        );
        return css;
      }
    };
  }
  cssjanus2 = new CSSJanus();
  if (module.exports) {
    exports.transform = function(css, options, transformEdgeInUrl) {
      var norm;
      if (typeof options === "object") {
        norm = options;
      } else {
        norm = {};
        if (typeof options === "boolean") {
          norm.transformDirInUrl = options;
        }
        if (typeof transformEdgeInUrl === "boolean") {
          norm.transformEdgeInUrl = transformEdgeInUrl;
        }
      }
      return cssjanus2.transform(css, norm);
    };
  } else if (typeof window !== "undefined") {
    window["cssjanus"] = cssjanus2;
  }
})(cssjanus$1, cssjanus$1.exports);
var cssjanusExports = cssjanus$1.exports;
const cssjanus = /* @__PURE__ */ getDefaultExportFromCjs(cssjanusExports);
function stringifyPreserveComments(element, index, children) {
  switch (element.type) {
    case IMPORT:
    case DECLARATION:
    case COMMENT:
      return element.return = element.return || element.value;
    case RULESET: {
      element.value = Array.isArray(element.props) ? element.props.join(",") : element.props;
      if (Array.isArray(element.children)) {
        element.children.forEach(function(x2) {
          if (x2.type === COMMENT)
            x2.children = x2.value;
        });
      }
    }
  }
  var serializedChildren = serialize(Array.prototype.concat(element.children), stringifyPreserveComments);
  return strlen(serializedChildren) ? element.return = element.value + "{" + serializedChildren + "}" : "";
}
function stylisRTLPlugin(element, index, children, callback) {
  if (element.type === KEYFRAMES || element.type === SUPPORTS || element.type === RULESET && (!element.parent || element.parent.type === MEDIA || element.parent.type === RULESET)) {
    var stringified = cssjanus.transform(stringifyPreserveComments(element));
    element.children = stringified ? compile(stringified)[0].children : [];
    element.return = "";
  }
}
Object.defineProperty(stylisRTLPlugin, "name", { value: "stylisRTLPlugin" });
const rtlLanguage = ["ar"];
const setLangFromSession = (i18n) => {
  const lang = localStorage.getItem("lang");
  if (!lang) {
    return;
  }
  lang && i18n.changeLanguage(lang);
  setDocumentLang(lang);
};
const setDocumentLang = (lang) => {
  const dir = rtlLanguage.includes(lang) ? "rtl" : "ltr";
  document.documentElement.setAttribute("lang", lang);
  document.dir = dir;
};
const getDirFromSession = () => {
  const lang = localStorage.getItem("lang");
  return rtlLanguage.includes(lang) ? "rtl" : "ltr";
};
const isSessionRtl = () => {
  return getDirFromSession() == "rtl";
};
const cacheRtl = (lang) => createCache({
  key: rtlLanguage.includes(lang) ? "muirtl" : "muiltr",
  stylisPlugins: rtlLanguage.includes(lang) ? [prefixer, stylisRTLPlugin] : null
});
var build = { exports: {} };
(() => {
  var e2 = { 181: (e3, t3, r3) => {
    var o3 = /^\s+|\s+$/g, n2 = /^[-+]0x[0-9a-f]+$/i, i2 = /^0b[01]+$/i, u2 = /^0o[0-7]+$/i, c2 = parseInt, s2 = "object" == typeof r3.g && r3.g && r3.g.Object === Object && r3.g, l2 = "object" == typeof self && self && self.Object === Object && self, a2 = s2 || l2 || Function("return this")(), f2 = Object.prototype.toString, p2 = Math.max, y2 = Math.min, b2 = function() {
      return a2.Date.now();
    };
    function d2(e4) {
      var t4 = typeof e4;
      return !!e4 && ("object" == t4 || "function" == t4);
    }
    function h2(e4) {
      if ("number" == typeof e4) return e4;
      if (function(e5) {
        return "symbol" == typeof e5 || /* @__PURE__ */ function(e6) {
          return !!e6 && "object" == typeof e6;
        }(e5) && "[object Symbol]" == f2.call(e5);
      }(e4)) return NaN;
      if (d2(e4)) {
        var t4 = "function" == typeof e4.valueOf ? e4.valueOf() : e4;
        e4 = d2(t4) ? t4 + "" : t4;
      }
      if ("string" != typeof e4) return 0 === e4 ? e4 : +e4;
      e4 = e4.replace(o3, "");
      var r4 = i2.test(e4);
      return r4 || u2.test(e4) ? c2(e4.slice(2), r4 ? 2 : 8) : n2.test(e4) ? NaN : +e4;
    }
    e3.exports = function(e4, t4, r4) {
      var o4, n3, i3, u3, c3, s3, l3 = 0, a3 = false, f3 = false, v2 = true;
      if ("function" != typeof e4) throw new TypeError("Expected a function");
      function m2(t5) {
        var r5 = o4, i4 = n3;
        return o4 = n3 = void 0, l3 = t5, u3 = e4.apply(i4, r5);
      }
      function O2(e5) {
        var r5 = e5 - s3;
        return void 0 === s3 || r5 >= t4 || r5 < 0 || f3 && e5 - l3 >= i3;
      }
      function w2() {
        var e5 = b2();
        if (O2(e5)) return g2(e5);
        c3 = setTimeout(w2, function(e6) {
          var r5 = t4 - (e6 - s3);
          return f3 ? y2(r5, i3 - (e6 - l3)) : r5;
        }(e5));
      }
      function g2(e5) {
        return c3 = void 0, v2 && o4 ? m2(e5) : (o4 = n3 = void 0, u3);
      }
      function P2() {
        var e5 = b2(), r5 = O2(e5);
        if (o4 = arguments, n3 = this, s3 = e5, r5) {
          if (void 0 === c3) return function(e6) {
            return l3 = e6, c3 = setTimeout(w2, t4), a3 ? m2(e6) : u3;
          }(s3);
          if (f3) return c3 = setTimeout(w2, t4), m2(s3);
        }
        return void 0 === c3 && (c3 = setTimeout(w2, t4)), u3;
      }
      return t4 = h2(t4) || 0, d2(r4) && (a3 = !!r4.leading, i3 = (f3 = "maxWait" in r4) ? p2(h2(r4.maxWait) || 0, t4) : i3, v2 = "trailing" in r4 ? !!r4.trailing : v2), P2.cancel = function() {
        void 0 !== c3 && clearTimeout(c3), l3 = 0, o4 = s3 = n3 = c3 = void 0;
      }, P2.flush = function() {
        return void 0 === c3 ? u3 : g2(b2());
      }, P2;
    };
  }, 858: (e3, t3, r3) => {
    var o3 = "Expected a function", n2 = NaN, i2 = "[object Symbol]", u2 = /^\s+|\s+$/g, c2 = /^[-+]0x[0-9a-f]+$/i, s2 = /^0b[01]+$/i, l2 = /^0o[0-7]+$/i, a2 = parseInt, f2 = "object" == typeof r3.g && r3.g && r3.g.Object === Object && r3.g, p2 = "object" == typeof self && self && self.Object === Object && self, y2 = f2 || p2 || Function("return this")(), b2 = Object.prototype.toString, d2 = Math.max, h2 = Math.min, v2 = function() {
      return y2.Date.now();
    };
    function m2(e4) {
      var t4 = typeof e4;
      return !!e4 && ("object" == t4 || "function" == t4);
    }
    function O2(e4) {
      if ("number" == typeof e4) return e4;
      if (function(e5) {
        return "symbol" == typeof e5 || /* @__PURE__ */ function(e6) {
          return !!e6 && "object" == typeof e6;
        }(e5) && b2.call(e5) == i2;
      }(e4)) return n2;
      if (m2(e4)) {
        var t4 = "function" == typeof e4.valueOf ? e4.valueOf() : e4;
        e4 = m2(t4) ? t4 + "" : t4;
      }
      if ("string" != typeof e4) return 0 === e4 ? e4 : +e4;
      e4 = e4.replace(u2, "");
      var r4 = s2.test(e4);
      return r4 || l2.test(e4) ? a2(e4.slice(2), r4 ? 2 : 8) : c2.test(e4) ? n2 : +e4;
    }
    e3.exports = function(e4, t4, r4) {
      var n3 = true, i3 = true;
      if ("function" != typeof e4) throw new TypeError(o3);
      return m2(r4) && (n3 = "leading" in r4 ? !!r4.leading : n3, i3 = "trailing" in r4 ? !!r4.trailing : i3), function(e5, t5, r5) {
        var n4, i4, u3, c3, s3, l3, a3 = 0, f3 = false, p3 = false, y3 = true;
        if ("function" != typeof e5) throw new TypeError(o3);
        function b3(t6) {
          var r6 = n4, o4 = i4;
          return n4 = i4 = void 0, a3 = t6, c3 = e5.apply(o4, r6);
        }
        function w2(e6) {
          var r6 = e6 - l3;
          return void 0 === l3 || r6 >= t5 || r6 < 0 || p3 && e6 - a3 >= u3;
        }
        function g2() {
          var e6 = v2();
          if (w2(e6)) return P2(e6);
          s3 = setTimeout(g2, function(e7) {
            var r6 = t5 - (e7 - l3);
            return p3 ? h2(r6, u3 - (e7 - a3)) : r6;
          }(e6));
        }
        function P2(e6) {
          return s3 = void 0, y3 && n4 ? b3(e6) : (n4 = i4 = void 0, c3);
        }
        function j2() {
          var e6 = v2(), r6 = w2(e6);
          if (n4 = arguments, i4 = this, l3 = e6, r6) {
            if (void 0 === s3) return function(e7) {
              return a3 = e7, s3 = setTimeout(g2, t5), f3 ? b3(e7) : c3;
            }(l3);
            if (p3) return s3 = setTimeout(g2, t5), b3(l3);
          }
          return void 0 === s3 && (s3 = setTimeout(g2, t5)), c3;
        }
        return t5 = O2(t5) || 0, m2(r5) && (f3 = !!r5.leading, u3 = (p3 = "maxWait" in r5) ? d2(O2(r5.maxWait) || 0, t5) : u3, y3 = "trailing" in r5 ? !!r5.trailing : y3), j2.cancel = function() {
          void 0 !== s3 && clearTimeout(s3), a3 = 0, n4 = l3 = i4 = s3 = void 0;
        }, j2.flush = function() {
          return void 0 === s3 ? c3 : P2(v2());
        }, j2;
      }(e4, t4, { leading: n3, maxWait: t4, trailing: i3 });
    };
  }, 694: (e3, t3, r3) => {
    var o3 = r3(925);
    function n2() {
    }
    function i2() {
    }
    i2.resetWarningCache = n2, e3.exports = function() {
      function e4(e5, t5, r5, n3, i3, u2) {
        if (u2 !== o3) {
          var c2 = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw c2.name = "Invariant Violation", c2;
        }
      }
      function t4() {
        return e4;
      }
      e4.isRequired = e4;
      var r4 = { array: e4, bigint: e4, bool: e4, func: e4, number: e4, object: e4, string: e4, symbol: e4, any: e4, arrayOf: t4, element: e4, elementType: e4, instanceOf: t4, node: e4, objectOf: t4, oneOf: t4, oneOfType: t4, shape: t4, exact: t4, checkPropTypes: i2, resetWarningCache: n2 };
      return r4.PropTypes = r4, r4;
    };
  }, 556: (e3, t3, r3) => {
    e3.exports = r3(694)();
  }, 925: (e3) => {
    e3.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  } }, t2 = {};
  function r2(o3) {
    var n2 = t2[o3];
    if (void 0 !== n2) return n2.exports;
    var i2 = t2[o3] = { exports: {} };
    return e2[o3](i2, i2.exports, r2), i2.exports;
  }
  r2.n = (e3) => {
    var t3 = e3 && e3.__esModule ? () => e3.default : () => e3;
    return r2.d(t3, { a: t3 }), t3;
  }, r2.d = (e3, t3) => {
    for (var o3 in t3) r2.o(t3, o3) && !r2.o(e3, o3) && Object.defineProperty(e3, o3, { enumerable: true, get: t3[o3] });
  }, r2.g = function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e3) {
      if ("object" == typeof window) return window;
    }
  }(), r2.o = (e3, t3) => Object.prototype.hasOwnProperty.call(e3, t3), r2.r = (e3) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e3, "__esModule", { value: true });
  };
  var o2 = {};
  (() => {
    r2.r(o2), r2.d(o2, { LazyLoadComponent: () => te, LazyLoadImage: () => de, trackWindowScroll: () => N2 });
    const e3 = reactExports;
    var t3 = r2.n(e3), n2 = r2(556);
    function i2() {
      return "undefined" != typeof window && "IntersectionObserver" in window && "isIntersecting" in window.IntersectionObserverEntry.prototype;
    }
    function u2(e4) {
      return u2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e5) {
        return typeof e5;
      } : function(e5) {
        return e5 && "function" == typeof Symbol && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
      }, u2(e4);
    }
    function c2(e4, t4) {
      var r3 = Object.keys(e4);
      if (Object.getOwnPropertySymbols) {
        var o3 = Object.getOwnPropertySymbols(e4);
        t4 && (o3 = o3.filter(function(t5) {
          return Object.getOwnPropertyDescriptor(e4, t5).enumerable;
        })), r3.push.apply(r3, o3);
      }
      return r3;
    }
    function s2(e4, t4, r3) {
      return (t4 = a2(t4)) in e4 ? Object.defineProperty(e4, t4, { value: r3, enumerable: true, configurable: true, writable: true }) : e4[t4] = r3, e4;
    }
    function l2(e4, t4) {
      for (var r3 = 0; r3 < t4.length; r3++) {
        var o3 = t4[r3];
        o3.enumerable = o3.enumerable || false, o3.configurable = true, "value" in o3 && (o3.writable = true), Object.defineProperty(e4, a2(o3.key), o3);
      }
    }
    function a2(e4) {
      var t4 = function(e5, t5) {
        if ("object" != u2(e5) || !e5) return e5;
        var r3 = e5[Symbol.toPrimitive];
        if (void 0 !== r3) {
          var o3 = r3.call(e5, "string");
          if ("object" != u2(o3)) return o3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e5);
      }(e4);
      return "symbol" == u2(t4) ? t4 : t4 + "";
    }
    function f2(e4, t4, r3) {
      return t4 = y2(t4), function(e5, t5) {
        if (t5 && ("object" == u2(t5) || "function" == typeof t5)) return t5;
        if (void 0 !== t5) throw new TypeError("Derived constructors may only return object or undefined");
        return function(e6) {
          if (void 0 === e6) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e6;
        }(e5);
      }(e4, p2() ? Reflect.construct(t4, r3 || [], y2(e4).constructor) : t4.apply(e4, r3));
    }
    function p2() {
      try {
        var e4 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (e5) {
      }
      return (p2 = function() {
        return !!e4;
      })();
    }
    function y2(e4) {
      return y2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e5) {
        return e5.__proto__ || Object.getPrototypeOf(e5);
      }, y2(e4);
    }
    function b2(e4, t4) {
      return b2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, t5) {
        return e5.__proto__ = t5, e5;
      }, b2(e4, t4);
    }
    var d2 = function(e4) {
      e4.forEach(function(e5) {
        e5.isIntersecting && e5.target.onVisible();
      });
    }, h2 = {}, v2 = function(e4) {
      function r3(e5) {
        var t4;
        if (function(e6, t5) {
          if (!(e6 instanceof t5)) throw new TypeError("Cannot call a class as a function");
        }(this, r3), (t4 = f2(this, r3, [e5])).supportsObserver = !e5.scrollPosition && e5.useIntersectionObserver && i2(), t4.supportsObserver) {
          var o4 = e5.threshold;
          t4.observer = function(e6) {
            return h2[e6] = h2[e6] || new IntersectionObserver(d2, { rootMargin: e6 + "px" }), h2[e6];
          }(o4);
        }
        return t4;
      }
      return function(e5, t4) {
        if ("function" != typeof t4 && null !== t4) throw new TypeError("Super expression must either be null or a function");
        e5.prototype = Object.create(t4 && t4.prototype, { constructor: { value: e5, writable: true, configurable: true } }), Object.defineProperty(e5, "prototype", { writable: false }), t4 && b2(e5, t4);
      }(r3, e4), o3 = r3, n3 = [{ key: "componentDidMount", value: function() {
        this.placeholder && this.observer && (this.placeholder.onVisible = this.props.onVisible, this.observer.observe(this.placeholder)), this.supportsObserver || this.updateVisibility();
      } }, { key: "componentWillUnmount", value: function() {
        this.observer && this.placeholder && this.observer.unobserve(this.placeholder);
      } }, { key: "componentDidUpdate", value: function() {
        this.supportsObserver || this.updateVisibility();
      } }, { key: "getPlaceholderBoundingBox", value: function() {
        var e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props.scrollPosition, t4 = this.placeholder.getBoundingClientRect(), r4 = this.placeholder.style, o4 = parseInt(r4.getPropertyValue("margin-left"), 10) || 0, n4 = parseInt(r4.getPropertyValue("margin-top"), 10) || 0;
        return { bottom: e5.y + t4.bottom + n4, left: e5.x + t4.left + o4, right: e5.x + t4.right + o4, top: e5.y + t4.top + n4 };
      } }, { key: "isPlaceholderInViewport", value: function() {
        if ("undefined" == typeof window || !this.placeholder) return false;
        var e5 = this.props, t4 = e5.scrollPosition, r4 = e5.threshold, o4 = this.getPlaceholderBoundingBox(t4), n4 = t4.y + window.innerHeight, i3 = t4.x, u3 = t4.x + window.innerWidth, c3 = t4.y;
        return Boolean(c3 - r4 <= o4.bottom && n4 + r4 >= o4.top && i3 - r4 <= o4.right && u3 + r4 >= o4.left);
      } }, { key: "updateVisibility", value: function() {
        this.isPlaceholderInViewport() && this.props.onVisible();
      } }, { key: "render", value: function() {
        var e5 = this, r4 = this.props, o4 = r4.className, n4 = r4.height, i3 = r4.placeholder, u3 = r4.style, l3 = r4.width;
        if (i3 && "function" != typeof i3.type) return t3().cloneElement(i3, { ref: function(t4) {
          return e5.placeholder = t4;
        } });
        var a3 = function(e6) {
          for (var t4 = 1; t4 < arguments.length; t4++) {
            var r5 = null != arguments[t4] ? arguments[t4] : {};
            t4 % 2 ? c2(Object(r5), true).forEach(function(t5) {
              s2(e6, t5, r5[t5]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r5)) : c2(Object(r5)).forEach(function(t5) {
              Object.defineProperty(e6, t5, Object.getOwnPropertyDescriptor(r5, t5));
            });
          }
          return e6;
        }({ display: "inline-block" }, u3);
        return void 0 !== l3 && (a3.width = l3), void 0 !== n4 && (a3.height = n4), t3().createElement("span", { className: o4, ref: function(t4) {
          return e5.placeholder = t4;
        }, style: a3 }, i3);
      } }], n3 && l2(o3.prototype, n3), Object.defineProperty(o3, "prototype", { writable: false }), o3;
      var o3, n3;
    }(t3().Component);
    v2.propTypes = { onVisible: n2.PropTypes.func.isRequired, className: n2.PropTypes.string, height: n2.PropTypes.oneOfType([n2.PropTypes.number, n2.PropTypes.string]), placeholder: n2.PropTypes.element, threshold: n2.PropTypes.number, useIntersectionObserver: n2.PropTypes.bool, scrollPosition: n2.PropTypes.shape({ x: n2.PropTypes.number.isRequired, y: n2.PropTypes.number.isRequired }), width: n2.PropTypes.oneOfType([n2.PropTypes.number, n2.PropTypes.string]) }, v2.defaultProps = { className: "", placeholder: null, threshold: 100, useIntersectionObserver: true };
    const m2 = v2;
    var O2 = r2(181), w2 = r2.n(O2), g2 = r2(858), P2 = r2.n(g2), j2 = function(e4) {
      var t4 = getComputedStyle(e4, null);
      return t4.getPropertyValue("overflow") + t4.getPropertyValue("overflow-y") + t4.getPropertyValue("overflow-x");
    };
    const T = function(e4) {
      if (!(e4 instanceof HTMLElement)) return window;
      for (var t4 = e4; t4 && t4 instanceof HTMLElement; ) {
        if (/(scroll|auto)/.test(j2(t4))) return t4;
        t4 = t4.parentNode;
      }
      return window;
    };
    function S2(e4) {
      return S2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e5) {
        return typeof e5;
      } : function(e5) {
        return e5 && "function" == typeof Symbol && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
      }, S2(e4);
    }
    var E2 = ["delayMethod", "delayTime"];
    function L2() {
      return L2 = Object.assign ? Object.assign.bind() : function(e4) {
        for (var t4 = 1; t4 < arguments.length; t4++) {
          var r3 = arguments[t4];
          for (var o3 in r3) ({}).hasOwnProperty.call(r3, o3) && (e4[o3] = r3[o3]);
        }
        return e4;
      }, L2.apply(null, arguments);
    }
    function _2(e4, t4) {
      for (var r3 = 0; r3 < t4.length; r3++) {
        var o3 = t4[r3];
        o3.enumerable = o3.enumerable || false, o3.configurable = true, "value" in o3 && (o3.writable = true), Object.defineProperty(e4, I2(o3.key), o3);
      }
    }
    function I2(e4) {
      var t4 = function(e5, t5) {
        if ("object" != S2(e5) || !e5) return e5;
        var r3 = e5[Symbol.toPrimitive];
        if (void 0 !== r3) {
          var o3 = r3.call(e5, "string");
          if ("object" != S2(o3)) return o3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e5);
      }(e4);
      return "symbol" == S2(t4) ? t4 : t4 + "";
    }
    function x2(e4, t4, r3) {
      return t4 = R2(t4), k2(e4, D2() ? Reflect.construct(t4, r3 || [], R2(e4).constructor) : t4.apply(e4, r3));
    }
    function k2(e4, t4) {
      if (t4 && ("object" == S2(t4) || "function" == typeof t4)) return t4;
      if (void 0 !== t4) throw new TypeError("Derived constructors may only return object or undefined");
      return function(e5) {
        if (void 0 === e5) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e5;
      }(e4);
    }
    function D2() {
      try {
        var e4 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (e5) {
      }
      return (D2 = function() {
        return !!e4;
      })();
    }
    function R2(e4) {
      return R2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e5) {
        return e5.__proto__ || Object.getPrototypeOf(e5);
      }, R2(e4);
    }
    function C(e4, t4) {
      return C = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, t5) {
        return e5.__proto__ = t5, e5;
      }, C(e4, t4);
    }
    var B2 = function() {
      return "undefined" == typeof window ? 0 : window.scrollX || window.pageXOffset;
    }, M2 = function() {
      return "undefined" == typeof window ? 0 : window.scrollY || window.pageYOffset;
    };
    const N2 = function(e4) {
      var r3 = function(r4) {
        function o3(e5) {
          var r5;
          if (function(e6, t4) {
            if (!(e6 instanceof t4)) throw new TypeError("Cannot call a class as a function");
          }(this, o3), (r5 = x2(this, o3, [e5])).useIntersectionObserver = e5.useIntersectionObserver && i2(), r5.useIntersectionObserver) return k2(r5);
          var n4 = r5.onChangeScroll.bind(r5);
          return "debounce" === e5.delayMethod ? r5.delayedScroll = w2()(n4, e5.delayTime) : "throttle" === e5.delayMethod && (r5.delayedScroll = P2()(n4, e5.delayTime)), r5.state = { scrollPosition: { x: B2(), y: M2() } }, r5.baseComponentRef = t3().createRef(), r5;
        }
        return function(e5, t4) {
          if ("function" != typeof t4 && null !== t4) throw new TypeError("Super expression must either be null or a function");
          e5.prototype = Object.create(t4 && t4.prototype, { constructor: { value: e5, writable: true, configurable: true } }), Object.defineProperty(e5, "prototype", { writable: false }), t4 && C(e5, t4);
        }(o3, r4), n3 = o3, u3 = [{ key: "componentDidMount", value: function() {
          this.addListeners();
        } }, { key: "componentWillUnmount", value: function() {
          this.removeListeners();
        } }, { key: "componentDidUpdate", value: function() {
          "undefined" == typeof window || this.useIntersectionObserver || T(this.baseComponentRef.current) !== this.scrollElement && (this.removeListeners(), this.addListeners());
        } }, { key: "addListeners", value: function() {
          "undefined" == typeof window || this.useIntersectionObserver || (this.scrollElement = T(this.baseComponentRef.current), this.scrollElement.addEventListener("scroll", this.delayedScroll, { passive: true }), window.addEventListener("resize", this.delayedScroll, { passive: true }), this.scrollElement !== window && window.addEventListener("scroll", this.delayedScroll, { passive: true }));
        } }, { key: "removeListeners", value: function() {
          "undefined" == typeof window || this.useIntersectionObserver || (this.scrollElement.removeEventListener("scroll", this.delayedScroll), window.removeEventListener("resize", this.delayedScroll), this.scrollElement !== window && window.removeEventListener("scroll", this.delayedScroll));
        } }, { key: "onChangeScroll", value: function() {
          this.useIntersectionObserver || this.setState({ scrollPosition: { x: B2(), y: M2() } });
        } }, { key: "render", value: function() {
          var r5 = this.props, o4 = (r5.delayMethod, r5.delayTime, function(e5, t4) {
            if (null == e5) return {};
            var r6, o5, n5 = function(e6, t5) {
              if (null == e6) return {};
              var r7 = {};
              for (var o6 in e6) if ({}.hasOwnProperty.call(e6, o6)) {
                if (t5.indexOf(o6) >= 0) continue;
                r7[o6] = e6[o6];
              }
              return r7;
            }(e5, t4);
            if (Object.getOwnPropertySymbols) {
              var i3 = Object.getOwnPropertySymbols(e5);
              for (o5 = 0; o5 < i3.length; o5++) r6 = i3[o5], t4.indexOf(r6) >= 0 || {}.propertyIsEnumerable.call(e5, r6) && (n5[r6] = e5[r6]);
            }
            return n5;
          }(r5, E2)), n4 = this.useIntersectionObserver ? null : this.state.scrollPosition;
          return t3().createElement(e4, L2({ forwardRef: this.baseComponentRef, scrollPosition: n4 }, o4));
        } }], u3 && _2(n3.prototype, u3), Object.defineProperty(n3, "prototype", { writable: false }), n3;
        var n3, u3;
      }(t3().Component);
      return r3.propTypes = { delayMethod: n2.PropTypes.oneOf(["debounce", "throttle"]), delayTime: n2.PropTypes.number, useIntersectionObserver: n2.PropTypes.bool }, r3.defaultProps = { delayMethod: "throttle", delayTime: 300, useIntersectionObserver: true }, r3;
    };
    function V(e4) {
      return V = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e5) {
        return typeof e5;
      } : function(e5) {
        return e5 && "function" == typeof Symbol && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
      }, V(e4);
    }
    function W2(e4, t4) {
      for (var r3 = 0; r3 < t4.length; r3++) {
        var o3 = t4[r3];
        o3.enumerable = o3.enumerable || false, o3.configurable = true, "value" in o3 && (o3.writable = true), Object.defineProperty(e4, z2(o3.key), o3);
      }
    }
    function z2(e4) {
      var t4 = function(e5, t5) {
        if ("object" != V(e5) || !e5) return e5;
        var r3 = e5[Symbol.toPrimitive];
        if (void 0 !== r3) {
          var o3 = r3.call(e5, "string");
          if ("object" != V(o3)) return o3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e5);
      }(e4);
      return "symbol" == V(t4) ? t4 : t4 + "";
    }
    function $(e4, t4, r3) {
      return t4 = F2(t4), function(e5, t5) {
        if (t5 && ("object" == V(t5) || "function" == typeof t5)) return t5;
        if (void 0 !== t5) throw new TypeError("Derived constructors may only return object or undefined");
        return function(e6) {
          if (void 0 === e6) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e6;
        }(e5);
      }(e4, U2() ? Reflect.construct(t4, r3 || [], F2(e4).constructor) : t4.apply(e4, r3));
    }
    function U2() {
      try {
        var e4 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (e5) {
      }
      return (U2 = function() {
        return !!e4;
      })();
    }
    function F2(e4) {
      return F2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e5) {
        return e5.__proto__ || Object.getPrototypeOf(e5);
      }, F2(e4);
    }
    function q2(e4, t4) {
      return q2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, t5) {
        return e5.__proto__ = t5, e5;
      }, q2(e4, t4);
    }
    var H2 = function(e4) {
      function r3(e5) {
        return function(e6, t4) {
          if (!(e6 instanceof t4)) throw new TypeError("Cannot call a class as a function");
        }(this, r3), $(this, r3, [e5]);
      }
      return function(e5, t4) {
        if ("function" != typeof t4 && null !== t4) throw new TypeError("Super expression must either be null or a function");
        e5.prototype = Object.create(t4 && t4.prototype, { constructor: { value: e5, writable: true, configurable: true } }), Object.defineProperty(e5, "prototype", { writable: false }), t4 && q2(e5, t4);
      }(r3, e4), o3 = r3, (n3 = [{ key: "render", value: function() {
        return t3().createElement(m2, this.props);
      } }]) && W2(o3.prototype, n3), Object.defineProperty(o3, "prototype", { writable: false }), o3;
      var o3, n3;
    }(t3().Component);
    const Y = N2(H2);
    function X2(e4) {
      return X2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e5) {
        return typeof e5;
      } : function(e5) {
        return e5 && "function" == typeof Symbol && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
      }, X2(e4);
    }
    function A2(e4, t4) {
      for (var r3 = 0; r3 < t4.length; r3++) {
        var o3 = t4[r3];
        o3.enumerable = o3.enumerable || false, o3.configurable = true, "value" in o3 && (o3.writable = true), Object.defineProperty(e4, G2(o3.key), o3);
      }
    }
    function G2(e4) {
      var t4 = function(e5, t5) {
        if ("object" != X2(e5) || !e5) return e5;
        var r3 = e5[Symbol.toPrimitive];
        if (void 0 !== r3) {
          var o3 = r3.call(e5, "string");
          if ("object" != X2(o3)) return o3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e5);
      }(e4);
      return "symbol" == X2(t4) ? t4 : t4 + "";
    }
    function J(e4, t4, r3) {
      return t4 = Q2(t4), function(e5, t5) {
        if (t5 && ("object" == X2(t5) || "function" == typeof t5)) return t5;
        if (void 0 !== t5) throw new TypeError("Derived constructors may only return object or undefined");
        return function(e6) {
          if (void 0 === e6) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e6;
        }(e5);
      }(e4, K() ? Reflect.construct(t4, r3 || [], Q2(e4).constructor) : t4.apply(e4, r3));
    }
    function K() {
      try {
        var e4 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (e5) {
      }
      return (K = function() {
        return !!e4;
      })();
    }
    function Q2(e4) {
      return Q2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e5) {
        return e5.__proto__ || Object.getPrototypeOf(e5);
      }, Q2(e4);
    }
    function Z2(e4, t4) {
      return Z2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, t5) {
        return e5.__proto__ = t5, e5;
      }, Z2(e4, t4);
    }
    var ee = function(e4) {
      function r3(e5) {
        var t4;
        !function(e6, t5) {
          if (!(e6 instanceof t5)) throw new TypeError("Cannot call a class as a function");
        }(this, r3), t4 = J(this, r3, [e5]);
        var o4 = e5.afterLoad, n4 = e5.beforeLoad, i3 = e5.scrollPosition, u3 = e5.visibleByDefault;
        return t4.state = { visible: u3 }, u3 && (n4(), o4()), t4.onVisible = t4.onVisible.bind(t4), t4.isScrollTracked = Boolean(i3 && Number.isFinite(i3.x) && i3.x >= 0 && Number.isFinite(i3.y) && i3.y >= 0), t4;
      }
      return function(e5, t4) {
        if ("function" != typeof t4 && null !== t4) throw new TypeError("Super expression must either be null or a function");
        e5.prototype = Object.create(t4 && t4.prototype, { constructor: { value: e5, writable: true, configurable: true } }), Object.defineProperty(e5, "prototype", { writable: false }), t4 && Z2(e5, t4);
      }(r3, e4), o3 = r3, (n3 = [{ key: "componentDidUpdate", value: function(e5, t4) {
        t4.visible !== this.state.visible && this.props.afterLoad();
      } }, { key: "onVisible", value: function() {
        this.props.beforeLoad(), this.setState({ visible: true });
      } }, { key: "render", value: function() {
        if (this.state.visible) return this.props.children;
        var e5 = this.props, r4 = e5.className, o4 = e5.delayMethod, n4 = e5.delayTime, u3 = e5.height, c3 = e5.placeholder, s3 = e5.scrollPosition, l3 = e5.style, a3 = e5.threshold, f3 = e5.useIntersectionObserver, p3 = e5.width;
        return this.isScrollTracked || f3 && i2() ? t3().createElement(m2, { className: r4, height: u3, onVisible: this.onVisible, placeholder: c3, scrollPosition: s3, style: l3, threshold: a3, useIntersectionObserver: f3, width: p3 }) : t3().createElement(Y, { className: r4, delayMethod: o4, delayTime: n4, height: u3, onVisible: this.onVisible, placeholder: c3, style: l3, threshold: a3, width: p3 });
      } }]) && A2(o3.prototype, n3), Object.defineProperty(o3, "prototype", { writable: false }), o3;
      var o3, n3;
    }(t3().Component);
    ee.propTypes = { afterLoad: n2.PropTypes.func, beforeLoad: n2.PropTypes.func, useIntersectionObserver: n2.PropTypes.bool, visibleByDefault: n2.PropTypes.bool }, ee.defaultProps = { afterLoad: function() {
      return {};
    }, beforeLoad: function() {
      return {};
    }, useIntersectionObserver: true, visibleByDefault: false };
    const te = ee;
    function re(e4) {
      return re = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e5) {
        return typeof e5;
      } : function(e5) {
        return e5 && "function" == typeof Symbol && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
      }, re(e4);
    }
    var oe = ["afterLoad", "beforeLoad", "delayMethod", "delayTime", "effect", "placeholder", "placeholderSrc", "scrollPosition", "threshold", "useIntersectionObserver", "visibleByDefault", "wrapperClassName", "wrapperProps"];
    function ne(e4, t4) {
      var r3 = Object.keys(e4);
      if (Object.getOwnPropertySymbols) {
        var o3 = Object.getOwnPropertySymbols(e4);
        t4 && (o3 = o3.filter(function(t5) {
          return Object.getOwnPropertyDescriptor(e4, t5).enumerable;
        })), r3.push.apply(r3, o3);
      }
      return r3;
    }
    function ie(e4) {
      for (var t4 = 1; t4 < arguments.length; t4++) {
        var r3 = null != arguments[t4] ? arguments[t4] : {};
        t4 % 2 ? ne(Object(r3), true).forEach(function(t5) {
          ue(e4, t5, r3[t5]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e4, Object.getOwnPropertyDescriptors(r3)) : ne(Object(r3)).forEach(function(t5) {
          Object.defineProperty(e4, t5, Object.getOwnPropertyDescriptor(r3, t5));
        });
      }
      return e4;
    }
    function ue(e4, t4, r3) {
      return (t4 = le(t4)) in e4 ? Object.defineProperty(e4, t4, { value: r3, enumerable: true, configurable: true, writable: true }) : e4[t4] = r3, e4;
    }
    function ce() {
      return ce = Object.assign ? Object.assign.bind() : function(e4) {
        for (var t4 = 1; t4 < arguments.length; t4++) {
          var r3 = arguments[t4];
          for (var o3 in r3) ({}).hasOwnProperty.call(r3, o3) && (e4[o3] = r3[o3]);
        }
        return e4;
      }, ce.apply(null, arguments);
    }
    function se(e4, t4) {
      for (var r3 = 0; r3 < t4.length; r3++) {
        var o3 = t4[r3];
        o3.enumerable = o3.enumerable || false, o3.configurable = true, "value" in o3 && (o3.writable = true), Object.defineProperty(e4, le(o3.key), o3);
      }
    }
    function le(e4) {
      var t4 = function(e5, t5) {
        if ("object" != re(e5) || !e5) return e5;
        var r3 = e5[Symbol.toPrimitive];
        if (void 0 !== r3) {
          var o3 = r3.call(e5, "string");
          if ("object" != re(o3)) return o3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e5);
      }(e4);
      return "symbol" == re(t4) ? t4 : t4 + "";
    }
    function ae(e4, t4, r3) {
      return t4 = pe(t4), function(e5, t5) {
        if (t5 && ("object" == re(t5) || "function" == typeof t5)) return t5;
        if (void 0 !== t5) throw new TypeError("Derived constructors may only return object or undefined");
        return function(e6) {
          if (void 0 === e6) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e6;
        }(e5);
      }(e4, fe() ? Reflect.construct(t4, r3 || [], pe(e4).constructor) : t4.apply(e4, r3));
    }
    function fe() {
      try {
        var e4 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (e5) {
      }
      return (fe = function() {
        return !!e4;
      })();
    }
    function pe(e4) {
      return pe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e5) {
        return e5.__proto__ || Object.getPrototypeOf(e5);
      }, pe(e4);
    }
    function ye(e4, t4) {
      return ye = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, t5) {
        return e5.__proto__ = t5, e5;
      }, ye(e4, t4);
    }
    var be = function(e4) {
      function r3(e5) {
        var t4;
        return function(e6, t5) {
          if (!(e6 instanceof t5)) throw new TypeError("Cannot call a class as a function");
        }(this, r3), (t4 = ae(this, r3, [e5])).state = { loaded: false }, t4;
      }
      return function(e5, t4) {
        if ("function" != typeof t4 && null !== t4) throw new TypeError("Super expression must either be null or a function");
        e5.prototype = Object.create(t4 && t4.prototype, { constructor: { value: e5, writable: true, configurable: true } }), Object.defineProperty(e5, "prototype", { writable: false }), t4 && ye(e5, t4);
      }(r3, e4), o3 = r3, n3 = [{ key: "onImageLoad", value: function() {
        var e5 = this;
        return this.state.loaded ? null : function(t4) {
          e5.props.onLoad(t4), e5.props.afterLoad(), e5.setState({ loaded: true });
        };
      } }, { key: "getImg", value: function() {
        var e5 = this.props, r4 = (e5.afterLoad, e5.beforeLoad, e5.delayMethod, e5.delayTime, e5.effect, e5.placeholder, e5.placeholderSrc, e5.scrollPosition, e5.threshold, e5.useIntersectionObserver, e5.visibleByDefault, e5.wrapperClassName, e5.wrapperProps, function(e6, t4) {
          if (null == e6) return {};
          var r5, o4, n4 = function(e7, t5) {
            if (null == e7) return {};
            var r6 = {};
            for (var o5 in e7) if ({}.hasOwnProperty.call(e7, o5)) {
              if (t5.indexOf(o5) >= 0) continue;
              r6[o5] = e7[o5];
            }
            return r6;
          }(e6, t4);
          if (Object.getOwnPropertySymbols) {
            var i3 = Object.getOwnPropertySymbols(e6);
            for (o4 = 0; o4 < i3.length; o4++) r5 = i3[o4], t4.indexOf(r5) >= 0 || {}.propertyIsEnumerable.call(e6, r5) && (n4[r5] = e6[r5]);
          }
          return n4;
        }(e5, oe));
        return t3().createElement("img", ce({}, r4, { onLoad: this.onImageLoad() }));
      } }, { key: "getLazyLoadImage", value: function() {
        var e5 = this.props, r4 = e5.beforeLoad, o4 = e5.className, n4 = e5.delayMethod, i3 = e5.delayTime, u3 = e5.height, c3 = e5.placeholder, s3 = e5.scrollPosition, l3 = e5.style, a3 = e5.threshold, f3 = e5.useIntersectionObserver, p3 = e5.visibleByDefault, y3 = e5.width;
        return t3().createElement(te, { beforeLoad: r4, className: o4, delayMethod: n4, delayTime: i3, height: u3, placeholder: c3, scrollPosition: s3, style: l3, threshold: a3, useIntersectionObserver: f3, visibleByDefault: p3, width: y3 }, this.getImg());
      } }, { key: "getWrappedLazyLoadImage", value: function(e5) {
        var r4 = this.props, o4 = r4.effect, n4 = r4.height, i3 = r4.placeholderSrc, u3 = r4.width, c3 = r4.wrapperClassName, s3 = r4.wrapperProps, l3 = this.state.loaded, a3 = l3 ? " lazy-load-image-loaded" : "", f3 = l3 || !i3 ? {} : { backgroundImage: "url(".concat(i3, ")"), backgroundSize: "100% 100%" };
        return t3().createElement("span", ce({ className: c3 + " lazy-load-image-background " + o4 + a3, style: ie(ie({}, f3), {}, { color: "transparent", display: "inline-block", height: n4, width: u3 }) }, s3), e5);
      } }, { key: "render", value: function() {
        var e5 = this.props, t4 = e5.effect, r4 = e5.placeholderSrc, o4 = e5.visibleByDefault, n4 = e5.wrapperClassName, i3 = e5.wrapperProps, u3 = this.getLazyLoadImage();
        return (t4 || r4) && !o4 || n4 || i3 ? this.getWrappedLazyLoadImage(u3) : u3;
      } }], n3 && se(o3.prototype, n3), Object.defineProperty(o3, "prototype", { writable: false }), o3;
      var o3, n3;
    }(t3().Component);
    be.propTypes = { onLoad: n2.PropTypes.func, afterLoad: n2.PropTypes.func, beforeLoad: n2.PropTypes.func, delayMethod: n2.PropTypes.string, delayTime: n2.PropTypes.number, effect: n2.PropTypes.string, placeholderSrc: n2.PropTypes.string, threshold: n2.PropTypes.number, useIntersectionObserver: n2.PropTypes.bool, visibleByDefault: n2.PropTypes.bool, wrapperClassName: n2.PropTypes.string, wrapperProps: n2.PropTypes.object }, be.defaultProps = { onLoad: function() {
    }, afterLoad: function() {
      return {};
    }, beforeLoad: function() {
      return {};
    }, delayMethod: "throttle", delayTime: 300, effect: "", placeholderSrc: null, threshold: 100, useIntersectionObserver: true, visibleByDefault: false, wrapperClassName: "" };
    const de = be;
  })(), build.exports = o2;
})();
var buildExports = build.exports;
function getRatio(ratio = "1/1") {
  return {
    "4/3": "calc(100% / 4 * 3)",
    "3/4": "calc(100% / 3 * 4)",
    "6/4": "calc(100% / 6 * 4)",
    "4/6": "calc(100% / 4 * 6)",
    "16/9": "calc(100% / 16 * 9)",
    "9/16": "calc(100% / 9 * 16)",
    "21/9": "calc(100% / 21 * 9)",
    "9/21": "calc(100% / 9 * 21)",
    "1/1": "100%"
  }[ratio];
}
const Image = reactExports.forwardRef(
  ({
    ratio,
    overlay,
    disabledEffect = false,
    alt,
    src,
    afterLoad,
    delayTime,
    threshold,
    beforeLoad,
    delayMethod,
    placeholder,
    wrapperProps,
    scrollPosition,
    effect = "blur",
    visibleByDefault,
    wrapperClassName,
    useIntersectionObserver,
    sx,
    ...other
  }, ref) => {
    const theme = useTheme();
    const overlayStyles = !!overlay && {
      "&:before": {
        content: "''",
        top: 0,
        left: 0,
        width: 1,
        height: 1,
        zIndex: 1,
        position: "absolute",
        background: overlay || alpha(theme.palette.grey[900], 0.48)
      }
    };
    const content = /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        component: buildExports.LazyLoadImage,
        alt,
        src,
        afterLoad,
        delayTime,
        threshold,
        beforeLoad,
        delayMethod,
        placeholder,
        wrapperProps,
        scrollPosition,
        visibleByDefault,
        effect: disabledEffect ? void 0 : effect,
        useIntersectionObserver,
        wrapperClassName: wrapperClassName || "component-image-wrapper",
        placeholderSrc: disabledEffect ? "/assets/transparent.png" : "/assets/placeholder.svg",
        sx: {
          width: 1,
          height: 1,
          objectFit: "cover",
          verticalAlign: "bottom",
          ...!!ratio && {
            top: 0,
            left: 0,
            position: "absolute"
          }
        }
      }
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        ref,
        component: "span",
        className: "component-image",
        sx: {
          overflow: "hidden",
          position: "relative",
          verticalAlign: "bottom",
          display: "inline-block",
          ...!!ratio && {
            width: 1
          },
          "& span.component-image-wrapper": {
            width: 1,
            height: 1,
            verticalAlign: "bottom",
            backgroundSize: "cover !important",
            ...!!ratio && {
              pt: getRatio(ratio)
            }
          },
          ...overlayStyles,
          ...sx
        },
        ...other,
        children: content
      }
    );
  }
);
Image.propTypes = {
  afterLoad: PropTypes.func,
  alt: PropTypes.string,
  beforeLoad: PropTypes.func,
  delayMethod: PropTypes.string,
  delayTime: PropTypes.number,
  disabledEffect: PropTypes.bool,
  effect: PropTypes.string,
  overlay: PropTypes.string,
  placeholder: PropTypes.element,
  ratio: PropTypes.oneOf([
    "4/3",
    "3/4",
    "6/4",
    "4/6",
    "16/9",
    "9/16",
    "21/9",
    "9/21",
    "1/1"
  ]),
  scrollPosition: PropTypes.object,
  src: PropTypes.string,
  sx: PropTypes.object,
  threshold: PropTypes.number,
  useIntersectionObserver: PropTypes.bool,
  visibleByDefault: PropTypes.bool,
  wrapperClassName: PropTypes.string,
  wrapperProps: PropTypes.object
};
function CompactLayout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      style: {
        position: "fixed",
        zIndex: 2e3,
        width: "100%",
        height: "100%",
        background: "#fff",
        overflow: "auto"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Container,
        {
          component: "main",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Stack,
            {
              sx: {
                // py: 12,
                m: "auto",
                maxWidth: 400,
                minHeight: "100vh",
                textAlign: "center",
                justifyContent: "center"
              },
              children
            }
          )
        }
      )
    }
  ) });
}
CompactLayout.propTypes = {
  children: PropTypes.node
};
const grey = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24"
};
const primary = {
  lighter: "#04bdf3",
  light: "#2d3cb1",
  main: "#16205b",
  dark: "#091133",
  darker: "#091133",
  contrastText: "#FFFFFF"
};
const secondary = {
  lighter: "#E6DBFE",
  light: "#B195FE",
  main: "#754FFE",
  dark: "#4027B6",
  darker: "#1C0F79",
  contrastText: "#FFFFFF"
};
const info = {
  lighter: "#CAFDF5",
  light: "#61F3F3",
  main: "#00B8D9",
  dark: "#006C9C",
  darker: "#003768",
  contrastText: "#FFFFFF"
};
const success = {
  lighter: "#D8FBDE",
  light: "#86E8AB",
  main: "#36B37E",
  dark: "#1B806A",
  darker: "#0A5554",
  contrastText: "#FFFFFF"
};
const warning = {
  lighter: "#FFF5CC",
  light: "#FFD666",
  main: "#FFAB00",
  dark: "#B76E00",
  darker: "#7A4100",
  contrastText: grey[800]
};
const error = {
  lighter: "#FFE9D5",
  light: "#FFAC82",
  main: "#f0a12f",
  dark: "#B71D18",
  darker: "#7A0916",
  contrastText: "#FFFFFF"
};
const common = {
  black: "#000000",
  white: "#FFFFFF"
};
const action = {
  hover: alpha(grey[500], 0.08),
  selected: alpha(grey[500], 0.16),
  disabled: alpha(grey[500], 0.8),
  disabledBackground: alpha(grey[500], 0.24),
  focus: alpha(grey[500], 0.24),
  hoverOpacity: 0.08,
  disabledOpacity: 0.48
};
const base = {
  primary,
  secondary,
  info,
  success,
  warning,
  error,
  grey,
  common,
  divider: alpha(grey[500], 0.2),
  action
};
function palette(mode) {
  const light = {
    ...base,
    mode: "light",
    text: {
      primary: grey[800],
      secondary: grey[600],
      disabled: grey[500]
    },
    background: {
      paper: "#FFFFFF",
      default: "#FFFFFF",
      neutral: grey[200]
    },
    action: {
      ...base.action,
      active: grey[600]
    }
  };
  const dark = {
    ...base,
    mode: "dark",
    text: {
      primary: "#FFFFFF",
      secondary: grey[500],
      disabled: grey[600]
    },
    background: {
      paper: grey[800],
      default: grey[900],
      neutral: alpha(grey[500], 0.12)
    },
    action: {
      ...base.action,
      active: grey[500]
    }
  };
  return mode === "light" ? light : dark;
}
function ErrorLayout({ setErrorSeen, error: error2, onRetry }) {
  const { t: t2 } = useTranslation("manage");
  const navigate = useNavigate();
  const theme = createTheme$2({
    palette: palette("light")
  });
  if (error2.name == "survey_quota") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(CompactLayout, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h3", paragraph: true, children: t2("error.survey_expired") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { sx: { color: "text.secondary" }, children: t2("processed_errors." + error2.name) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        HourglassEmpty,
        {
          sx: {
            mx: "auto",
            maxWidth: 320,
            my: { xs: 5, sm: 5 }
          },
          style: { fontSize: 50, color: "red" }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { display: "flex", gap: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          fullWidth: true,
          size: "large",
          color: "inherit",
          variant: "contained",
          onClick: () => navigate(-1),
          children: t2("goBack")
        }
      ) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CompactLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h3", paragraph: true, children: "Error" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { sx: { color: "text.secondary" }, children: t2("processed_errors." + error2.name) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Image,
      {
        alt: "500",
        src: "/illustration_500.svg",
        sx: {
          mx: "auto",
          maxWidth: 320,
          my: { xs: 5, sm: 8 }
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { display: "flex", gap: 2, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          fullWidth: true,
          size: "large",
          color: "inherit",
          variant: "contained",
          onClick: onRetry,
          style: { backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText },
          children: t2("retry")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          fullWidth: true,
          size: "large",
          color: "inherit",
          variant: "contained",
          onClick: () => setErrorSeen(),
          style: { backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText },
          children: "OK"
        }
      )
    ] })
  ] });
}
class AuthService extends BaseService {
  async login(email, password) {
    const response = await this.handleRequest(
      () => instance.post("/user/login", { email, password })
    );
    if (response.data) {
      TokenService$1.setSession(response.data);
    }
    return response;
  }
  async forgotPassword(email) {
    return this.handleRequest(
      () => instance.post("/user/forgot_password", { email })
    );
  }
  async resetPassword(confirmNewUser, refreshToken, newPassword) {
    const response = await this.handleRequest(
      () => instance.post(
        confirmNewUser ? "/user/confirm_new_user" : "/user/reset_password",
        confirmNewUser ? { token: refreshToken, newPassword } : { refreshToken, newPassword }
      )
    );
    if (response.data) {
      TokenService$1.setSession(response.data);
    }
    return response.data;
  }
  async logout() {
    try {
      const response = await this.handleRequest(
        () => instance$1.post("/logout")
      );
      if (response.status === 200) {
        TokenService$1.removeSession();
      }
      return response.status === 200;
    } catch (error2) {
      TokenService$1.removeSession();
      throw error2;
    }
  }
}
class RunService extends BaseService {
  async start(lang, preview = false, guest = false, mode = "online") {
    const surveyId = sessionStorage.getItem("surveyId");
    if (guest) {
      const response = await this.handleRequest(
        () => instance.post("".concat(CLOUD_URL, "/survey/").concat(surveyId, "/run/start?mode=").concat(mode), {
          lang
        })
      );
      return response.data;
    } else if (preview) {
      const response = await this.handleRequest(
        () => instance$1.post(
          "/survey/".concat(surveyId, "/preview/start?mode=").concat(mode),
          { lang }
        )
      );
      return response.data;
    } else {
      const response = await this.handleRequest(
        () => instance.post("/survey/".concat(surveyId, "/run/start"), { lang })
      );
      return response.data;
    }
  }
  async navigate(payload, preview = false, guest = false, mode = "online") {
    const surveyId = sessionStorage.getItem("surveyId");
    if (guest) {
      const response = await instance.post(
        "".concat(CLOUD_URL, "/survey/").concat(surveyId, "/run/navigate?mode=").concat(mode),
        payload
      );
      return response.data;
    }
    if (preview) {
      const response = await instance$1.post(
        "/survey/".concat(surveyId, "/preview/navigate?mode=").concat(mode),
        payload
      );
      return response.data;
    } else {
      const response_1 = await instance.post(
        "/survey/".concat(surveyId, "/run/navigate"),
        payload
      );
      return response_1.data;
    }
  }
  async runtimeJs(preview, guest = false) {
    const surveyId = sessionStorage.getItem("surveyId");
    if (guest) {
      const response = await this.handleRequest(
        () => instance.get("".concat(CLOUD_URL, "/survey/").concat(surveyId, "/run/runtime.js"))
      );
      return response.data;
    } else if (preview) {
      const response = await this.handleRequest(
        () => instance$1.get("/survey/".concat(surveyId, "/preview/runtime.js"))
      );
      return response.data;
    } else {
      const response = await this.handleRequest(
        () => instance.get("/survey/".concat(surveyId, "/run/runtime.js"))
      );
      return response.data;
    }
  }
  async uploadResponseFile(key, preview, file) {
    const surveyId = sessionStorage.getItem("surveyId");
    const responseId = sessionStorage.getItem("responseId");
    const formData = new FormData();
    formData.append("file", file);
    const api2 = preview ? instance$1 : instance;
    const url = preview ? "/survey/".concat(surveyId, "/response/preview/attach/").concat(responseId, "/").concat(key) : "/survey/".concat(surveyId, "/response/attach/").concat(responseId, "/").concat(key);
    const response = await api2.post(url, formData, {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data"
      }
    });
    return response.data;
  }
  async uploadResponseBlob(key, preview, blob, fileName) {
    const surveyId = sessionStorage.getItem("surveyId");
    const responseId = sessionStorage.getItem("responseId");
    const formData = new FormData();
    formData.append("file", blob, fileName);
    const api2 = preview ? instance$1 : instance;
    const url = preview ? "/survey/".concat(surveyId, "/response/preview/attach/").concat(responseId, "/").concat(key) : "/survey/".concat(surveyId, "/response/attach/").concat(responseId, "/").concat(key);
    const response = await api2.post(url, formData, {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data"
      }
    });
    return response.data;
  }
}
class UserService extends BaseService {
  async getCountByRole() {
    const response = await this.handleRequest(
      () => instance$1.get("/user/count_by_role")
    );
    return response.data;
  }
  async getAllUsers() {
    const response = await this.handleRequest(
      () => instance$1.get("/user/all")
    );
    return response.data;
  }
  async getUser({ userId }) {
    const response = await this.handleRequest(
      () => instance$1.get("/user/".concat(userId))
    );
    return response.data;
  }
  async deleteUser({ userId }) {
    const response = await this.handleRequest(
      () => instance$1.delete("/user/".concat(userId))
    );
    return response.data;
  }
  async createUser(data) {
    const response = await this.handleRequest(
      () => instance$1.post("/user/create", data)
    );
    return response.data;
  }
  async updateUser({ userId, data }) {
    const response = await this.handleRequest(
      () => instance$1.put("/user/".concat(userId), data)
    );
    return response.data;
  }
  async updateUserProfile(data) {
    const response = await this.handleRequest(
      () => instance$1.put("/user/profile", data)
    );
    return response.data;
  }
  async confirmEmail(data) {
    const response = await this.handleRequest(
      () => instance$1.post("/user/confirm_new_email", data)
    );
    return response.data;
  }
}
function useService(serviceType) {
  const dispatch = useDispatch();
  switch (serviceType) {
    case "auth":
      return new AuthService(dispatch);
    case "design":
      return new DesignService(dispatch);
    case "run":
      return new RunService(dispatch);
    case "survey":
      return new SurveyService(dispatch);
    case "user":
      return new UserService(dispatch);
    default:
      throw new Error("Unknown service type: " + serviceType);
  }
}
export {
  grey as $,
  useControlled as A,
  ButtonBase as B,
  useId as C,
  useIsFocusVisible as D,
  Timeout as E,
  propTypesExports as F,
  GlobalStyles as G,
  useSelector as H,
  IconButton as I,
  TokenService$1 as J,
  requireCreateSvgIcon as K,
  ListContext as L,
  useTranslation as M,
  MenuItem as N,
  setDocumentLang as O,
  Provider as P,
  useService as Q,
  useDispatch as R,
  Select as S,
  Typography as T,
  isSessionRtl as U,
  Menu as V,
  routes as W,
  MANAGE_SURVEY_LANDING_PAGES as X,
  setLoading as Y,
  ErrorLayout as Z,
  onEditErrorSeen as _,
  resolveComponentProps as a,
  downloadFileAsBase64 as a$,
  alpha as a0,
  PropTypes as a1,
  stylisRTLPlugin as a2,
  primary as a3,
  info as a4,
  secondary as a5,
  success as a6,
  warning as a7,
  error as a8,
  menuItemClasses as a9,
  onAdditionalLangAdded as aA,
  onAdditionalLangRemoved as aB,
  Button as aC,
  List as aD,
  resetSetup as aE,
  onAddComponentsVisibilityChange as aF,
  GetData as aG,
  surveyReceived as aH,
  designStateReceived as aI,
  Container as aJ,
  Stack as aK,
  Modal as aL,
  PROCESSED_ERRORS as aM,
  Close as aN,
  PREVIEW_MODE as aO,
  SurveyIcon as aP,
  BG_COLOR as aQ,
  shallowEqual$1 as aR,
  valueChange as aS,
  getThemeProps$1 as aT,
  require$$1 as aU,
  Portal as aV,
  Backdrop as aW,
  Fade as aX,
  ownerWindow as aY,
  debounce as aZ,
  setDirty as a_,
  dividerClasses as aa,
  drawerClasses as ab,
  svgIconClasses as ac,
  buttonClasses as ad,
  listClasses as ae,
  SvgIcon as af,
  paperClasses as ag,
  listItemIconClasses as ah,
  iconButtonClasses as ai,
  formControlClasses as aj,
  inputBaseClasses as ak,
  outlinedInputClasses as al,
  filledInputClasses as am,
  typographyClasses as an,
  rtlLanguage as ao,
  palette as ap,
  ThemeProvider as aq,
  CompactLayout as ar,
  Image as as,
  setLangFromSession as at,
  cacheRtl as au,
  manageStore as av,
  FormControl as aw,
  LANGUAGE_DEF as ax,
  changeLang as ay,
  onBaseLangChanged as az,
  useForkRef as b,
  warn as b$,
  previewUrl as b0,
  uploadDataUrl as b1,
  uploadFile as b2,
  useFormControl as b3,
  formControlState as b4,
  Input as b5,
  FilledInput as b6,
  OutlinedInput as b7,
  useDrag as b8,
  orderChange as b9,
  invariant as bA,
  createStore as bB,
  DndContext as bC,
  defaultTheme as bD,
  _inheritsLoose as bE,
  forceReflow as bF,
  FocusTrap as bG,
  TransitionGroup as bH,
  FormControlContext as bI,
  createChainedFunction as bJ,
  shallowEqual as bK,
  wrapConnectorHooks as bL,
  isRef as bM,
  useDragDropManager as bN,
  useIsomorphicLayoutEffect as bO,
  registerTarget as bP,
  useOptionalFactory as bQ,
  useCollectedProps as bR,
  ButtonGroupContext as bS,
  resolveProps as bT,
  InputBase as bU,
  getDividerUtilityClass as bV,
  Popover as bW,
  surveyAttributeChanged as bX,
  setSaving$1 as bY,
  newVersionReceived as bZ,
  warnOnce as b_,
  getContrastColor as ba,
  fileTypesToMimesArray as bb,
  truncateWithEllipsis as bc,
  processApiError as bd,
  getDirFromSession as be,
  Transition as bf,
  reflow as bg,
  getTransitionProps as bh,
  getDrawerUtilityClass as bi,
  stripTags as bj,
  navigatePrevious as bk,
  navigateNext as bl,
  questionIconByType as bm,
  jump as bn,
  langChange as bo,
  isEquivalent as bp,
  setFetching as bq,
  continueNavigation as br,
  stateReceived as bs,
  loadScript as bt,
  defualtTheme as bu,
  startNavigation as bv,
  CLOUD_URL as bw,
  BACKEND_BASE_URL as bx,
  PROTOCOL as by,
  FRONT_END_HOST as bz,
  composeClasses as c,
  setRef$1 as c0,
  inputClasses as c1,
  ArrowDropDownIcon as c2,
  ButtonGroupButtonContext as c3,
  listItemTextClasses as c4,
  getListItemTextUtilityClass as c5,
  slotShouldForwardProp as c6,
  useCollector as c7,
  isGroup as c8,
  isQuestion as c9,
  editSkipDestination as cA,
  editSkipToEnd as cB,
  instructionByCode as cC,
  updatePriorityByType as cD,
  updatePriority as cE,
  updateRandomByType as cF,
  updateRandom as cG,
  defaultSurveyTheme as cH,
  setupToggleExpand as cI,
  NewComponentsPanel$1 as cJ,
  setDesignModeToLang as cK,
  setDesignModeToTheme as cL,
  setDesignModeToReorder as cM,
  isNotEmptyHtml as ca,
  changeContent as cb,
  setup as cc,
  setupOptions as cd,
  surveySetup as ce,
  TextareaAutosize as cf,
  inDesign as cg,
  removeAnswer as ch,
  onDrag as ci,
  changeResources as cj,
  contentEditable as ck,
  axios as cl,
  DESIGN_SURVEY_MODE as cm,
  hasMajorSetup as cn,
  deleteQuestion as co,
  cloneQuestion as cp,
  nextId as cq,
  addNewAnswer as cr,
  isDisplay as cs,
  deleteGroup as ct,
  changeAttribute as cu,
  changeValidationValue as cv,
  _slicedToArray as cw,
  connect as cx,
  changeRelevance as cy,
  removeSkipDestination as cz,
  appendOwnerState as d,
  createSvgIcon$1 as e,
  styled as f,
  getparam as g,
  Paper as h,
  isMuiElement as i,
  useDefaultProps as j,
  useEventCallback as k,
  rootShouldForwardProp as l,
  mergeSlotProps as m,
  useEnhancedEffect as n,
  ownerDocument as o,
  isHostComponent as p,
  getListItemIconUtilityClass as q,
  runStore as r,
  styled$1 as s,
  useTimeout as t,
  useThemeProps as u,
  extractEventHandlers as v,
  useTheme as w,
  useSlotProps as x,
  Grow as y,
  useRtl as z
};
//# sourceMappingURL=use-service-D_BNczvS.js.map
