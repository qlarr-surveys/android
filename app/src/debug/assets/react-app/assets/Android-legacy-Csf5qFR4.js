;
(function () {
  const _excluded = ["ratio", "overlay", "disabledEffect", "alt", "src", "afterLoad", "delayTime", "threshold", "beforeLoad", "delayMethod", "placeholder", "wrapperProps", "scrollPosition", "effect", "visibleByDefault", "wrapperClassName", "useIntersectionObserver", "sx"];
  function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
  function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
  function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
  function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  function _wrapAsyncGenerator(e) { return function () { return new AsyncGenerator(e.apply(this, arguments)); }; }
  function AsyncGenerator(e) { var r, t; function resume(r, t) { try { var n = e[r](t), o = n.value, u = o instanceof _OverloadYield; Promise.resolve(u ? o.v : o).then(function (t) { if (u) { var i = "return" === r ? "return" : "next"; if (!o.k || t.done) return resume(i, t); t = e[i](t).value; } settle(n.done ? "return" : "normal", t); }, function (e) { resume("throw", e); }); } catch (e) { settle("throw", e); } } function settle(e, n) { switch (e) { case "return": r.resolve({ value: n, done: !0 }); break; case "throw": r.reject(n); break; default: r.resolve({ value: n, done: !1 }); } (r = r.next) ? resume(r.key, r.arg) : t = null; } this._invoke = function (e, n) { return new Promise(function (o, u) { var i = { key: e, arg: n, resolve: o, reject: u, next: null }; t ? t = t.next = i : (r = t = i, resume(e, n)); }); }, "function" != typeof e.return && (this.return = void 0); }
  AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function () { return this; }, AsyncGenerator.prototype.next = function (e) { return this._invoke("next", e); }, AsyncGenerator.prototype.throw = function (e) { return this._invoke("throw", e); }, AsyncGenerator.prototype.return = function (e) { return this._invoke("return", e); };
  function _awaitAsyncGenerator(e) { return new _OverloadYield(e, 0); }
  function _asyncGeneratorDelegate(t) { var e = {}, n = !1; function pump(e, r) { return n = !0, r = new Promise(function (n) { n(t[e](r)); }), { done: !1, value: new _OverloadYield(r, 1) }; } return e["undefined" != typeof Symbol && Symbol.iterator || "@@iterator"] = function () { return this; }, e.next = function (t) { return n ? (n = !1, t) : pump("next", t); }, "function" == typeof t.throw && (e.throw = function (t) { if (n) throw n = !1, t; return pump("throw", t); }), "function" == typeof t.return && (e.return = function (t) { return n ? (n = !1, t) : pump("return", t); }), e; }
  function _OverloadYield(e, d) { this.v = e, this.k = d; }
  function _asyncIterator(r) { var n, t, o, e = 2; for ("undefined" != typeof Symbol && (t = Symbol.asyncIterator, o = Symbol.iterator); e--;) { if (t && null != (n = r[t])) return n.call(r); if (o && null != (n = r[o])) return new AsyncFromSyncIterator(n.call(r)); t = "@@asyncIterator", o = "@@iterator"; } throw new TypeError("Object is not async iterable"); }
  function AsyncFromSyncIterator(r) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object.")); var n = r.done; return Promise.resolve(r.value).then(function (r) { return { value: r, done: n }; }); } return AsyncFromSyncIterator = function AsyncFromSyncIterator(r) { this.s = r, this.n = r.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, return: function _return(r) { var n = this.s.return; return void 0 === n ? Promise.resolve({ value: r, done: !0 }) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments)); }, throw: function _throw(r) { var n = this.s.return; return void 0 === n ? Promise.reject(r) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(r); }
  System.register(['./index-legacy-CoMmlwbr.js', './vendor-legacy-lhtLtiSI.js', './redux-legacy-ZqSxVvAn.js', './mui-legacy-b38CRKaY.js', './i18n-legacy-BRT6G2_g.js', './dnd-legacy-DGW9B2he.js', './charts-legacy-BBm9rbLh.js'], function (exports, module) {
    'use strict';

    var hash, replace, charat, MS, WEBKIT, strlen, indexof, MOZ, match, substr, RULESET, combine, KEYFRAMES, serialize, copy, DECLARATION, lift, assign$1, filter, stylisRTLPlugin, jsx, jsxs, Fragment, LoadingDots, getAugmentedNamespace, reactExports, React, getDefaultExportFromCjs, commonjsGlobal, useNavigate, useLocation, useParams, createSlice, useSelector, useDispatch, configureStore, createSelector, shallowEqual, useStore, Provider, createCache, useTheme, useMediaQuery, utils$2, interopRequireDefaultExports, jsxRuntimeExports, useTheme$1, Tooltip, Button, getContrastRatio, FormatListBulleted, css, ErrorOutlineOutlined, Box, TextField, Autocomplete, CircularProgress, Divider, alpha, PropTypes, Container, Stack, createTheme, DialogTitle, Typography, DialogContent, DialogActions, Dialog, HourglassEmpty, Box$1, Card, IconButton, Close, Drawer, Toolbar, LoadingButton, Alert, Snackbar, ThemeProvider, CacheProvider, useTranslation, __vitePreload, useDrag, TouchBackend, HTML5Backend, DndProvider, debounce;
    return {
      setters: [module => {
        hash = module.h;
        replace = module.r;
        charat = module.c;
        MS = module.M;
        WEBKIT = module.W;
        strlen = module.s;
        indexof = module.i;
        MOZ = module.a;
        match = module.m;
        substr = module.b;
        RULESET = module.R;
        combine = module.d;
        KEYFRAMES = module.K;
        serialize = module.e;
        copy = module.f;
        DECLARATION = module.D;
        lift = module.l;
        assign$1 = module.g;
        filter = module.j;
        stylisRTLPlugin = module.k;
        jsx = module.n;
        jsxs = module.o;
        Fragment = module.F;
        LoadingDots = module.L;
      }, module => {
        getAugmentedNamespace = module.a;
        reactExports = module.r;
        React = module.b;
        getDefaultExportFromCjs = module.g;
        commonjsGlobal = module.d;
        useNavigate = module.u;
        useLocation = module.e;
        useParams = module.h;
      }, module => {
        createSlice = module.a;
        useSelector = module.u;
        useDispatch = module.b;
        configureStore = module.d;
        createSelector = module.e;
        shallowEqual = module.s;
        useStore = module.f;
        Provider = module.P;
      }, module => {
        createCache = module.d;
        useTheme = module.e;
        useMediaQuery = module.f;
        utils$2 = module.g;
        interopRequireDefaultExports = module.i;
        jsxRuntimeExports = module.j;
        useTheme$1 = module.u;
        Tooltip = module.T;
        Button = module.k;
        getContrastRatio = module.l;
        FormatListBulleted = module.F;
        css = module.m;
        ErrorOutlineOutlined = module.n;
        Box = module.B;
        TextField = module.o;
        Autocomplete = module.A;
        CircularProgress = module.C;
        Divider = module.D;
        alpha = module.q;
        PropTypes = module.P;
        Container = module.r;
        Stack = module.S;
        createTheme = module.s;
        DialogTitle = module.v;
        Typography = module.w;
        DialogContent = module.x;
        DialogActions = module.y;
        Dialog = module.z;
        HourglassEmpty = module.H;
        Box$1 = module.G;
        Card = module.I;
        IconButton = module.J;
        Close = module.K;
        Drawer = module.L;
        Toolbar = module.M;
        LoadingButton = module.N;
        Alert = module.O;
        Snackbar = module.Q;
        ThemeProvider = module.R;
        CacheProvider = module.U;
      }, module => {
        useTranslation = module.u;
        __vitePreload = module.a;
      }, module => {
        useDrag = module.u;
        TouchBackend = module.T;
        HTML5Backend = module.H;
        DndProvider = module.D;
      }, module => {
        debounce = module.d;
      }],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._leftPanelGroupItem_1qo1l_1 {\n  width: 100%;\n  margin-bottom: 20px;\n}\n\n._topBar_1qo1l_6._topBar_1qo1l_6 {\n  display: flex;\n  justify-content: end;\n}\n._groupTitle_1qo1l_10 {\n  margin-bottom: 10px;\n  font-size: 20px;\n  padding-right: 12px;\n  padding-left: 12px;\n  font-weight: bold;\n}\n\n._iconMenu_1qo1l_18 {\n  min-width: 35px;\n}\n\n._tabHeader_1qo1l_22 {\n  position: relative;\n}\n\n._tabHeader_1qo1l_22::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: block;\n  border-bottom: 1px solid;\n}\n\n._leftContent_1qo1l_36 {\n  background-color: white;\n  padding-top: 16px;\n  overflow-y: auto;\n  width: 100%;\n  height: calc(100vh - 64px);\n}\n\n._close_1qo1l_44 {\n  padding: 8px;\n  text-align: right;\n}\n._leftPannelItem_6tarl_1 {\n  display: inline-flex;\n  border-radius: 4px;\n  width: 100%;\n  font-size: 15px;\n  align-items: center;\n  gap: 8px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  padding-right: 12px;\n  padding-left: 12px;\n  cursor: pointer;\n}\n._leftPannelItem_6tarl_1:hover {\n  background: #e0e2ef;\n  border-radius: 4px;\n}\n\n._icon_6tarl_19 {\n  margin: 8px;\n}\n\n._title_6tarl_23 {\n  margin: 8px;\n}\n\n._leftPannelItem_6tarl_1._isDrayLayer_6tarl_27 {\n  border: 3px dotted rgba(0, 0, 0, 0.5);\n  margin-bottom: 0;\n  box-sizing: border-box;\n}\n._tooltipContainer_nt7m2_1 {\n  display: flex;\n  align-items: center;\n}\n\n._iconButton_nt7m2_6 {\n  cursor: pointer;\n  border-radius: 50%;\n}\n\n._iconButton_nt7m2_6:hover {\n  color: #fff;\n}\n\n._textPreLine_nt7m2_15{\n  white-space: pre-line;\n  word-break: break-word;\n}._mainContainer_1wt2w_1 {\n  margin: auto;\n  min-height: calc(100dvh - var(--safe-area-inset-top) - var(--safe-area-inset-bottom));\n  overflow: auto;\n  padding-top: var(--safe-area-inset-top);\n  padding-right: var(--safe-area-inset-right);\n  padding-bottom: var(--safe-area-inset-bottom);\n  padding-left: var(--safe-area-inset-left);\n}\n\n._surveyDesignError_1wt2w_11 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  font-size: 32px;\n  border: 2px dashed gray;\n  border-radius: 4px;\n}\n\n._goBack_1wt2w_21 {\n  display: inline-flex;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  position: relative;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent;\n  outline: 0px;\n  border: 0px currentcolor;\n  margin: 0px;\n  cursor: pointer;\n  user-select: none;\n  vertical-align: middle;\n  appearance: none;\n  text-decoration: none;\n  font-weight: 700;\n  line-height: 1.71429;\n  text-transform: capitalize;\n  min-width: 64px;\n  padding: 8px 16px;\n  border-radius: 8px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  width: 100%;\n  box-shadow: none;\n  color: rgb(255, 255, 255);\n  background-color: rgb(33, 43, 54);\n  height: 48px;\n  font-size: 15px;\n}\n\n._goBack_1wt2w_21:hover {\n  background-color: rgb(69, 79, 91);\n  box-shadow: none;\n}\n\n._fixedBg_1wt2w_61 {\n  position: fixed;\n  inset: 0;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  z-index: -1;\n  pointer-events: none;\n}\n._content_dofy3_1 {\n  width: 100%;\n  margin: 0;\n  letter-spacing: 0.1px;\n}\n\n._content_dofy3_1._question_dofy3_7 {\n  margin-bottom: 4px;\n}\n\n._content_dofy3_1 ._required_dofy3_11 {\n  margin-left: 5px;\n}\n\n._header_dofy3_15 {\n  margin-bottom: 12px;\n}\n\n._textDescription_dofy3_19 {\n  max-width: 100%;\n  margin-bottom: 4px;\n}\n\n._groupQuestion_dofy3_24 {\n  padding: 10px;\n  border-radius: 6px;\n  page-break-inside: avoid;\n  transition: all 200ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n@media (min-width: 600px) {\n  ._groupQuestion_dofy3_24 {\n    padding: 1rem;\n  }\n}\n._wrapper_1hpga_1 {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 0;\n  line-height: 16px;\n  letter-spacing: 0.3px;\n}\n\n._icon_1hpga_11 {\n  margin-right: 12px;\n  transform: rotate(180deg);\n}\n.tiptap-wrapper {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.tiptap-editor {\n  padding: 0 !important;\n  font-size: inherit !important;\n  font-family: inherit !important;\n  outline: none;\n  overflow-wrap: break-word;\n}\n\n.tiptap-editor:focus {\n  outline: none;\n}\n\n.tiptap-editor p {\n  margin: 0;\n}\n\n.tiptap-editor > :first-child {\n  margin-top: 0;\n}\n\n.tiptap-editor > :last-child {\n  margin-bottom: 0;\n}\n\n.tiptap-editor.rtl {\n  direction: rtl !important;\n  text-align: right !important;\n}\n\n.tiptap-editor.ltr {\n  direction: ltr !important;\n  text-align: left !important;\n}\n\n.tiptap-centered :is(.ltr, .rtl) {\n  text-align: center !important;\n}\n\n.tiptap-link {\n  color: #0066cc;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.tiptap-link:hover {\n  color: #004499;\n}\n\n.tiptap-editor ul,\n.tiptap-editor ol {\n  padding-left: 1.5rem;\n  margin: 0;\n}\n\n.tiptap-editor li {\n  margin: 0;\n}\n\n.tiptap-editor.ProseMirror p.is-editor-empty:first-child::before {\n  color: #aaa;\n  content: attr(data-placeholder);\n  float: left;\n  height: 0;\n  pointer-events: none;\n}\n\n.tiptap-image {\n  max-width: 100%;\n  display: block;\n  margin: 1em 0;\n}\n\n.tiptap-wrapper.tiptap-focused .tiptap-image {\n  margin: 0;\n}\n\n.tiptap-image:not([height]) {\n  height: auto;\n}\n\n.tiptap-image-wrapper {\n  position: relative;\n  display: inline-block;\n  max-width: 100%;\n  margin: 1em 0;\n}\n\n.tiptap-image-wrapper img {\n  display: block;\n  max-width: 100%;\n}\n\n.tiptap-image-wrapper img:not([height]) {\n  height: auto;\n}\n\n.tiptap-image-wrapper[data-selected=\"true\"] {\n  outline: 2px solid #0066cc;\n}\n\n.tiptap-image-wrapper[data-selected=\"true\"]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.15);\n  pointer-events: none;\n}\n\n.tiptap-image-resize-button {\n  position: absolute;\n  top: 0px;\n  right: 0;\n  background-color: white;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  padding: 2px;\n  cursor: pointer;\n  font-size: 20px;\n  line-height: 1;\n  z-index: 10;\n  transition: background-color 0.15s, border-color 0.15s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.tiptap-image-resize-button:hover {\n  background-color: #f0f0f0;\n  border-color: #999;\n}\n\n.tiptap-image-resize-button:active {\n  background-color: #e0e0e0;\n}\n\n.tiptap-image-size-input-wrapper {\n  position: absolute;\n  top: 20px;\n  right: 0;\n  left: 0;\n  margin: 0 auto;\n  width: fit-content;\n  z-index: 1000;\n}\n\n.tiptap-image-size-input-wrapper .tiptap-image-size-input {\n  position: static;\n  top: auto;\n  left: auto;\n  margin-top: 0;\n}\n\n.tiptap-collapsible {\n  width: 100%;\n  margin: 1em 0;\n  border-radius: 4px;\n}\n\n.collapsible-button {\n  width: fit-content;\n  padding: 0.75em 1em;\n  background-color: #16205b;\n  color: #ffffff;\n  border: none;\n  cursor: pointer;\n  font-size: 0.875rem;\n  font-weight: 500;\n  text-align: left;\n  transition: background-color 0.2s, color 0.2s;\n  display: flex;\n  align-items: center;\n  gap: 0.5em;\n  position: relative;\n}\n\n.collapsible-button:hover {\n  background-color: #091133;\n}\n\n.collapsible-button::after {\n  content: \"▼\";\n  font-size: 0.75em;\n  transition: transform 0.2s;\n  flex-shrink: 0;\n  order: 2;\n}\n\n.tiptap-collapsible[data-open=\"true\"] .collapsible-button::after {\n  transform: rotate(180deg);\n}\n\n.collapsible-button-text {\n  flex: 1;\n  order: 1;\n  text-align: start;\n}\n\n.collapsible-settings-button {\n  background: rgba(255, 255, 255, 0.2);\n  border: none;\n  border-radius: 3px;\n  padding: 0.2em 0.4em;\n  cursor: pointer;\n  font-size: 0.85em;\n  line-height: 1;\n  transition: background-color 0.15s, opacity 0.15s;\n  flex-shrink: 0;\n  display: none;\n  align-items: center;\n  justify-content: center;\n  order: 3;\n}\n\n.tiptap-wrapper.tiptap-focused .collapsible-settings-button {\n  display: inline-flex;\n}\n\n.collapsible-settings-button:hover {\n  background: rgba(255, 255, 255, 0.35);\n}\n\n.collapsible-settings-button:active {\n  background: rgba(255, 255, 255, 0.5);\n}\n\n.collapsible-content {\n  padding-top: 10px;\n  border: 1px solid transparent;\n}\n\n.tiptap-wrapper.tiptap-focused .collapsible-content {\n  border-color: #e0e0e0;\n  padding: 10px;\n}\n\n.collapsible-content p {\n  word-break: break-all;\n}\n\n.collapsible-content.open {\n  display: block !important;\n}\n\n.collapsible-content:not(.open) {\n  display: none !important;\n}\n\n.tiptap-collapsible-settings-popup {\n  background-color: white;\n  border: 1px solid #ccc;\n  border-radius: 0.25rem;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  padding: 0.75rem;\n  min-width: 250px;\n}\n\n.tiptap-collapsible-settings-content {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n.tiptap-collapsible-settings-field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n\n.tiptap-collapsible-settings-field label {\n  font-size: 0.75rem;\n  white-space: nowrap;\n  color: #555;\n}\n\n.tiptap-collapsible-settings-field input[type=\"text\"] {\n  width: 100%;\n  padding: 0.375rem 0.5rem;\n  border: 1px solid #ddd;\n  border-radius: 0.25rem;\n  font-size: 0.875rem;\n}\n\n.tiptap-collapsible-settings-field input[type=\"text\"]:focus {\n  outline: none;\n  border-color: #2196f3;\n}\n\n.tiptap-collapsible-settings-color-row {\n  display: flex;\n  gap: 0.25rem;\n  align-items: center;\n  position: relative;\n}\n\n.tiptap-collapsible-settings-color-picker {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  margin-top: 0.25rem;\n  z-index: 10001;\n}\n\n.tiptap-collapsible-settings-actions {\n  display: flex;\n  gap: 0.25rem;\n  justify-content: flex-end;\n  margin-top: 0.25rem;\n}\n\n.tiptap-collapsible-settings-actions button {\n  padding: 0.375rem 0.75rem;\n  border: 1px solid #ddd;\n  background-color: white;\n  border-radius: 0.25rem;\n  cursor: pointer;\n  font-size: 0.875rem;\n  transition: background-color 0.15s;\n}\n\n.tiptap-collapsible-settings-actions button:hover {\n  background-color: #f0f0f0;\n}\n\n.instruction-highlight {\n  background-color: #6ec0f96f;\n  border-radius: 0.25rem;\n  padding: 0.125rem 0.25rem;\n}\n\n.tippy-box[data-theme~=\"instruction\"] {\n  background-color: #1a2052;\n  color: #ffffff;\n  padding: 12px 16px;\n  border-radius: 6px;\n  font-size: 14px;\n  max-width: 400px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  word-wrap: break-word;\n  line-height: 1.5;\n}\n\n.tippy-box[data-theme~=\"instruction\"] .tippy-content {\n  padding: 0;\n}\n\n.tippy-box[data-theme~=\"instruction\"] .tippy-arrow {\n  color: #1a2052;\n}\n\n.content-editor {\n  padding: 0 !important;\n  overflow-wrap: break-word;\n}\n\n.content-editor.rtl {\n  direction: rtl !important;\n  text-align: right !important;\n}\n\n.content-editor .tiptap-image,\n.content-editor .tiptap-image img {\n  max-width: 100%;\n  height: auto;\n  display: block;\n}\n\n.content-editor .tiptap-image {\n  margin: 1em 0;\n}\n\n.content-editor .tiptap-collapsible {\n  width: 100%;\n  margin: 1em 0;\n  border-radius: 4px;\n}\n\n.content-editor .collapsible-button {\n  width: fit-content;\n  padding: 0.75em 1em;\n  background-color: #16205b;\n  color: #ffffff;\n  border: none;\n  cursor: pointer;\n  font-size: 0.875rem;\n  font-weight: 500;\n  text-align: left;\n  transition: background-color 0.2s, color 0.2s;\n  display: flex;\n  align-items: center;\n  gap: 0.5em;\n  position: relative;\n}\n\n.content-editor .collapsible-button:hover {\n  background-color: #091133;\n}\n\n.content-editor .collapsible-button::after {\n  content: \"▼\";\n  font-size: 0.75em;\n  transition: transform 0.2s;\n  flex-shrink: 0;\n}\n\n.content-editor.rtl .collapsible-button {\n  text-align: right;\n}\n\n.content-editor.rtl .collapsible-button::after {\n  margin-left: 0;\n  margin-right: 0.5em;\n}\n\n.content-editor\n  .tiptap-collapsible[data-open=\"true\"]\n  .collapsible-button::after {\n  transform: rotate(180deg);\n}\n\n.content-editor .collapsible-content {\n  padding-top: 10px;\n}\n\n.content-editor .collapsible-content p {\n  word-break: break-all;\n}\n\n.content-editor .collapsible-content.open {\n  display: block !important;\n}\n\n.content-editor .collapsible-content:not(.open) {\n  display: none !important;\n}\n\n.rtl {\n  direction: rtl !important;\n  text-align: right !important;\n}\n\n.no-padding {\n  padding: 0 !important;\n}\n\n.no-padding > :last-child {\n  margin-bottom: 0;\n}\n\n.no-padding > :first-child {\n  margin-top: 0;\n}\n._placeholder_4x3sc_1 {\n  width: 100%;\n  height: 100%;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n}\n\n._buttonContainer_4x3sc_9 {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n  margin-top: 24px;\n}\n\n._buttonContainer_4x3sc_9 > * {\n  margin: 10px;\n}\n\n._imageContainer_4x3sc_20 {\n  padding: 1em;\n  text-align: center;\n}\n._textDescription_1lm8x_1 {\n  max-width: 100%;\n  margin-top: 8px;\n}\n\n._titleRow_1lm8x_6 {\n  display: block;\n  justify-content: space-between;\n  align-items: center;\n  box-align: center;\n  margin: 24px;\n  flex-wrap: wrap;\n  box-pack: justify;\n}\n\n._groupHeader_1lm8x_16 {\n  padding: 1rem;\n}\n\n._topLevel_1lm8x_20 {\n  display: flex;\n  flex-direction: column;\n  max-width: 800px;\n  min-width: 320px;\n  margin-right: 16px;\n  margin-left: 16px;\n  padding: 10px;\n  margin: auto;\n  position: relative;\n}\n\n@media (min-width: 600px) {\n  ._topLevel_1lm8x_20 {\n    padding: 1rem;\n  }\n}._buttonContainer_zlh5z_1 {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  justify-content: center;\n  padding: 20px 0px 50px 0px;\n}\n._surveyContent_d9ftv_1 {\n  margin: 0;\n}\n\n._surveyGroups_d9ftv_5 {\n  margin: auto;\n  max-width: 800px;\n  min-width: 300px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n._cardImage_d9ftv_15 {\n  max-height: 22.5vw;\n  height: 160px;\n  margin: 12px auto;\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center;\n  border-radius: 8px;\n}\n\n\n._stepperContent_d9ftv_26 {\n  position: absolute;\n  background-color: white;\n  width: 400px;\n  padding: 1rem;\n  border-radius: 0px 8px 8px 0px;\n  height: 700px;\n  overflow: auto;\n  margin-top: 3rem;\n}\n\n._menuButton_d9ftv_37._menuButton_d9ftv_37 {\n  position: fixed;\n}._loadingWrapper_1p71l_1 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 99999;\n  /* background: rgba(255, 255, 255, 0.7);\n  backdrop-filter: blur(.5px); */\n}\n\n._loadingDots_1p71l_14 {\n  width: 60px;\n  aspect-ratio: 4;\n  clip-path: inset(0 100% 0 0);\n  animation: _l1_1p71l_1 1s steps(4) infinite;\n}\n\n@keyframes _l1_1p71l_1 {\n  to {\n    clip-path: inset(0 -34% 0 0);\n  }\n}._drawer_4kmyb_1 {\n  padding-top: max(16px, var(--safe-area-inset-top));\n  padding-right: max(16px, var(--safe-area-inset-right));\n  padding-bottom: max(16px, var(--safe-area-inset-bottom));\n  padding-left: max(16px, var(--safe-area-inset-left));\n}\n\n._drawerHeader_4kmyb_8 {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #e0e0e0;\n}\n._groupCard_18q7o_1 {\n  padding: 8px;\n  margin: 8px;\n}\n\n._groupTitle_18q7o_6 {\n  font-weight: bolder;\n}\n\n._questionTitle_18q7o_10 {\n  display: flex;\n  padding: 8px;\n  margin: 8px;\n}\n\n._questionIcon_18q7o_16 {\n  margin-left: 8px;\n  margin-right: 8px;\n  color: green;\n  font-size: 1.2rem;\n}\n\n._bullet_18q7o_23 {\n  margin-right: 8px;\n  margin-left: 8px;\n  font-size: 1.2rem;\n}\n\n._redAsterix_18q7o_29 {\n  margin-left: 0.5rem;\n  color: red;\n}\n\n._truncatedTwoLines_18q7o_34 {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n._toolbar_tmt0c_1._toolbar_tmt0c_1 {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1100;\n  min-height: 4rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        exports({
          V: Validation,
          a: useService,
          f: requireCreateSvgIcon,
          g: getFileFromPath,
          j: ValidationItem
        });

        /**
         * @param {string} value
         * @param {number} length
         * @param {object[]} children
         * @return {string}
         */
        function prefix(value, length, children) {
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
            case 2921:
            // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
            case 5572:
            case 6356:
            case 5844:
            case 3191:
            case 6645:
            case 3005:
            // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
            case 4215:
            case 6389:
            case 5109:
            case 5365:
            case 5621:
            case 3829:
            // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position
            case 6391:
            case 5879:
            case 5623:
            case 6135:
            case 4599:
              return WEBKIT + value + value;
            // mask-composite
            case 4855:
              return WEBKIT + value.replace('add', 'source-over').replace('substract', 'source-out').replace('intersect', 'source-in').replace('exclude', 'xor') + value;
            // tab-size
            case 4789:
              return MOZ + value + value;
            // appearance, user-select, transform, hyphens, text-size-adjust
            case 5349:
            case 4246:
            case 4810:
            case 6968:
            case 2756:
              return WEBKIT + value + MOZ + value + MS + value + value;
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
                // default: fallthrough to below
              }
            // flex, flex-direction, scroll-snap-type, writing-mode
            case 6828:
            case 4268:
            case 2903:
              return WEBKIT + value + MS + value + value;
            // order
            case 6165:
              return WEBKIT + value + MS + 'flex-' + value + value;
            // align-items
            case 5187:
              return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + value;
            // align-self
            case 5443:
              return WEBKIT + value + MS + 'flex-item-' + replace(value, /flex-|-self/g, '') + (!match(value, /flex-|baseline/) ? MS + 'grid-row-' + replace(value, /flex-|-self/g, '') : '') + value;
            // align-content
            case 4675:
              return WEBKIT + value + MS + 'flex-line-pack' + replace(value, /align-content|flex-|-self/g, '') + value;
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
              return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'), /space-between/, 'justify') + WEBKIT + value + value;
            // justify-self
            case 4200:
              if (!match(value, /flex-|baseline/)) return MS + 'grid-column-align' + substr(value, length) + value;
              break;
            // grid-template-(columns|rows)
            case 2592:
            case 3360:
              return MS + replace(value, 'template-', '') + value;
            // grid-(row|column)-start
            case 4384:
            case 3616:
              if (children && children.some(function (element, index) {
                return length = index, match(element.props, /grid-\w+-end/);
              })) {
                return ~indexof(value + (children = children[length].value), 'span', 0) ? value : MS + replace(value, '-start', '') + value + MS + 'grid-row-span:' + (~indexof(children, 'span', 0) ? match(children, /\d+/) : +match(children, /\d+/) - +match(value, /\d+/)) + ';';
              }
              return MS + replace(value, '-start', '') + value;
            // grid-(row|column)-end
            case 4896:
            case 4128:
              return children && children.some(function (element) {
                return match(element.props, /grid-\w+-start/);
              }) ? value : MS + replace(replace(value, '-end', '-span'), 'span ', '') + value;
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
                  return ~indexof(value, 'stretch', 0) ? prefix(replace(value, 'stretch', 'fill-available'), length, children) + value : value;
              }
              break;
            // grid-(column|row)
            case 5152:
            case 5920:
              return replace(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (_, a, b, c, d, e, f) {
                return MS + a + ':' + b + f + (c ? MS + a + '-span:' + (d ? e : +e - +b) + f : '') + value;
              });
            // position: sticky
            case 4949:
              // stick(y)?
              if (charat(value, length + 6) === 121) return replace(value, ':', ':' + WEBKIT) + value;
              break;
            // display: (flex|inline-flex|grid|inline-grid)
            case 6444:
              switch (charat(value, charat(value, 14) === 45 ? 18 : 11)) {
                // (inline-)?fle(x)
                case 120:
                  return replace(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, '$1' + WEBKIT + (charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + WEBKIT + '$2$3' + '$1' + MS + '$2box$3') + value;
                // (inline-)?gri(d)
                case 100:
                  return replace(value, ':', ':' + MS) + value;
              }
              break;
            // scroll-margin, scroll-margin-(top|right|bottom|left)
            case 5719:
            case 2647:
            case 2135:
            case 3927:
            case 2391:
              return replace(value, 'scroll-', 'scroll-snap-') + value;
          }
          return value;
        }

        /**
         * @param {object} element
         * @param {number} index
         * @param {object[]} children
         * @param {function} callback
         */
        function prefixer(element, index, children, callback) {
          if (element.length > -1) if (!element.return) switch (element.type) {
            case DECLARATION:
              element.return = prefix(element.value, element.length, children);
              return;
            case KEYFRAMES:
              return serialize([copy(element, {
                value: replace(element.value, '@', '@' + WEBKIT)
              })], callback);
            case RULESET:
              if (element.length) return combine(children = element.props, function (value) {
                switch (match(value, callback = /(::plac\w+|:read-\w+)/)) {
                  // :read-(only|write)
                  case ':read-only':
                  case ':read-write':
                    lift(copy(element, {
                      props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]
                    }));
                    lift(copy(element, {
                      props: [value]
                    }));
                    assign$1(element, {
                      props: filter(children, callback)
                    });
                    break;
                  // :placeholder
                  case '::placeholder':
                    lift(copy(element, {
                      props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]
                    }));
                    lift(copy(element, {
                      props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]
                    }));
                    lift(copy(element, {
                      props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]
                    }));
                    lift(copy(element, {
                      props: [value]
                    }));
                    assign$1(element, {
                      props: filter(children, callback)
                    });
                    break;
                }
                return '';
              });
          }
        }
        const rtlLanguage = exports("r", ["ar"]);
        const cacheRtl = lang => createCache({
          key: rtlLanguage.includes(lang) ? "muirtl" : "muiltr",
          stylisPlugins: rtlLanguage.includes(lang) ? [prefixer, stylisRTLPlugin] : null
        });
        const DESIGN_SURVEY_MODE = {
          DESIGN: "design",
          THEME: "theme",
          LANGUAGES: "languages"
        };
        const routes = {
          resumeSurvey: "/run-survey/:surveyId/:responseId",
          resumePreview: "/preview/:surveyId/:responseId"
        };
        let qlarrDependents = {};
        const runState = createSlice({
          name: "runState",
          initialState: {
            state: {}
          },
          reducers: {
            valueChange: (state, action) => {
              setValueInState(state, action.payload);
            },
            orderChange: (state, action) => {
              let keys = Object.keys(action.payload);
              if (!state.order) {
                state.order = {};
              }
              keys.forEach(key => state.order[key] = action.payload[key]);
            },
            stateReceived: (state, action) => {
              let keys = Object.keys(state);
              keys.forEach(key => delete state[key]);
              state.preview = action.payload.preview;
              let response = action.payload.response;
              qlarrDependents = response.state.qlarrDependents;
              state.navigation = undefined;
              state.data = {
                survey: response.survey,
                navigationIndex: response.navigationIndex,
                navigationData: response.navigationData,
                additionalLang: response.additionalLang,
                lang: response.lang,
                responseId: response.responseId
              };
              state.saveTimings = response.saveTimings;
              state.values = response.state.qlarrVariables;
            },
            langChange: (state, action) => {
              state.navigation = {
                events: state.timings,
                values: getValues(state.values),
                lang: action.payload.lang,
                navigationDirection: {
                  name: "RESUME"
                }
              };
            },
            previewModeChange: (state, action) => {
              state.navigation = {
                events: state.timings,
                values: getValues(state.values),
                mode: action.payload.mode,
                navigationMode: action.payload.navigationMode,
                navigationDirection: {
                  name: "RESUME"
                }
              };
            },
            navigateNext: state => {
              next(state);
            },
            navigatePrevious: state => {
              previous(state);
            },
            jump: (state, action) => {
              state.navigation = {
                events: state.timings,
                values: getValues(state.values),
                navigationDirection: {
                  name: "JUMP",
                  navigationIndex: action.payload
                }
              };
            }
          }
        });
        const _runState$actions = runState.actions,
          valueChange = _runState$actions.valueChange,
          orderChange = _runState$actions.orderChange,
          stateReceived = _runState$actions.stateReceived,
          previewModeChange = _runState$actions.previewModeChange,
          navigateNext = _runState$actions.navigateNext,
          navigatePrevious = _runState$actions.navigatePrevious,
          jump = _runState$actions.jump;
        exports({
          v: valueChange,
          o: orderChange
        });
        const runState$1 = runState.reducer;
        function setValueInState(state, payload) {
          let componentCode = payload.componentCode;
          logTimes(state, componentCode);
          let value = payload.value;
          let element = state.values[componentCode];
          if (typeof element !== "undefined" && element["value"] !== value) {
            let time = Date.now();
            window.qlarrStateMachine(state.values, qlarrDependents, window.qlarrRuntime, componentCode, "value", value, "VALUE CHANGE");
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
            time: new Date().toISOString().split(".")[0].replace("T", " "),
            name: "ValueTiming"
          };
          if (state.timings.length > 0 && state.timings[state.timings.length - 1].code === code) {
            state.timings[state.timings.length - 1] = element;
          } else {
            state.timings.push(element);
          }
        }
        function next(state) {
          if (!state.values.Survey.validity) {
            state.values.Survey.show_errors = true;
          } else {
            state.values.Survey.show_errors = false;
            state.navigation = {
              events: state.timings,
              values: getValues(state.values),
              navigationDirection: {
                name: "NEXT"
              }
            };
          }
        }
        function previous(state) {
          state.navigation = {
            events: state.timings,
            values: getValues(state.values),
            navigationDirection: {
              name: "PREV"
            }
          };
        }
        function getValues(values) {
          let retrunObj = {};
          for (var key in values) {
            if (values.hasOwnProperty(key)) {
              let element = values[key];
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

        // ----------------------------------------------------------------------

        function useResponsive(query, start, end) {
          const theme = useTheme();
          const mediaUp = useMediaQuery(theme.breakpoints.up(start));
          const mediaDown = useMediaQuery(theme.breakpoints.down(start));
          const mediaBetween = useMediaQuery(theme.breakpoints.between(start, end));
          const mediaOnly = useMediaQuery(theme.breakpoints.only(start));
          if (query === "up") {
            return mediaUp;
          }
          if (query === "down") {
            return mediaDown;
          }
          if (query === "between") {
            return mediaBetween;
          }
          return mediaOnly;
        }
        const STRIP_TAGS_PATTERN = /<[^>]*>|&nbsp;|\n/g;
        const isEquivalent = (a, b, visited = new WeakSet()) => {
          if (a === b) return true;
          if (typeof a === "function" || typeof b === "function") {
            return false;
          }
          if (typeof a !== "object" || typeof b !== "object") {
            return a === b;
          }
          if (a === null || b === null) {
            return a === b;
          }
          if (visited.has(a) || visited.has(b)) {
            return true;
          }
          visited.add(a);
          visited.add(b);
          const aProps = Object.getOwnPropertyNames(a);
          const bProps = Object.getOwnPropertyNames(b);
          if (aProps.length !== bProps.length) {
            return false;
          }
          var _iterator3 = _createForOfIteratorHelper(aProps),
            _step2;
          try {
            for (_iterator3.s(); !(_step2 = _iterator3.n()).done;) {
              const prop = _step2.value;
              if (prop !== "key" && !isEquivalent(a[prop], b[prop], visited)) {
                return false;
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          return true;
        };
        const nextId = elements => {
          if (elements.length) {
            let arrayOfIntCodes = elements.filter(el => el.type != "other").map(el => el.code.replace(/^\D+/g, "")).filter(el => el.length > 0);
            if (arrayOfIntCodes.length) {
              let intCodes = arrayOfIntCodes.map(el => parseInt(el, 10)).sort(function (a, b) {
                return a - b;
              });
              if (intCodes) {
                return intCodes[intCodes.length - 1] + 1;
              }
            }
          }
          return 1;
        };
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
        const firstIndexInArray = (array, func) => {
          if (!array) {
            return -1;
          }
          for (let index = 0; index < array.length; index++) {
            if (func(array[index])) {
              return index;
            }
          }
          return -1;
        };
        const stripTags = string => {
          if (typeof string !== "string") return string;
          return string.replace(STRIP_TAGS_PATTERN, "").replace(/\{\{.*?\}\}/g, "{{ ... }}");
        };
        const useColumnMinWidth = exports("u", (code, runComponent) => {
          const isDesktop = useResponsive("up", "lg");
          const isTablet = useResponsive("between", "md", "lg");
          const designStateWidths = useSelector(state => {
            var _state$designState;
            return state === null || state === void 0 || (_state$designState = state.designState) === null || _state$designState === void 0 ? void 0 : _state$designState[code];
          });
          const widthSetups = _objectSpread(_objectSpread({
            minHeaderDesktop: 90,
            minHeaderMobile: 60,
            minRowLabelDesktop: 90,
            minRowLabelMobile: 60
          }, runComponent || {}), designStateWidths || {});
          const minHeaderDesktop = widthSetups.minHeaderDesktop,
            minHeaderMobile = widthSetups.minHeaderMobile,
            minRowLabelDesktop = widthSetups.minRowLabelDesktop,
            minRowLabelMobile = widthSetups.minRowLabelMobile;
          if (isDesktop || isTablet) {
            return {
              header: `${minHeaderDesktop}`,
              rowLabel: `${minRowLabelDesktop}`
            };
          }
          return {
            header: `${minHeaderMobile}`,
            rowLabel: `${minRowLabelMobile}`
          };
        });
        const leftPanelGroupItem = "_leftPanelGroupItem_1qo1l_1";
        const groupTitle$1 = "_groupTitle_1qo1l_10";
        const leftContent = "_leftContent_1qo1l_36";
        const styles$d = {
          leftPanelGroupItem: leftPanelGroupItem,
          groupTitle: groupTitle$1,
          leftContent: leftContent
        };
        const leftPannelItem = "_leftPannelItem_6tarl_1";
        const isDrayLayer = "_isDrayLayer_6tarl_27";
        const styles$c = {
          leftPannelItem: leftPannelItem,
          isDrayLayer: isDrayLayer
        };
        var HelpOutline = {};
        var createSvgIcon = {};
        const require$$0 = /*@__PURE__*/getAugmentedNamespace(utils$2);
        var hasRequiredCreateSvgIcon;
        function requireCreateSvgIcon() {
          if (hasRequiredCreateSvgIcon) return createSvgIcon;
          hasRequiredCreateSvgIcon = 1;
          (function (exports$1) {
            'use client';

            Object.defineProperty(exports$1, "__esModule", {
              value: true
            });
            Object.defineProperty(exports$1, "default", {
              enumerable: true,
              get: function get() {
                return _utils.createSvgIcon;
              }
            });
            var _utils = require$$0;
          })(createSvgIcon);
          return createSvgIcon;
        }
        var _interopRequireDefault$1 = interopRequireDefaultExports;
        Object.defineProperty(HelpOutline, "__esModule", {
          value: true
        });
        var default_1$1 = HelpOutline.default = void 0;
        var _createSvgIcon$1 = _interopRequireDefault$1(requireCreateSvgIcon());
        var _jsxRuntime$1 = jsxRuntimeExports;
        default_1$1 = HelpOutline.default = (0, _createSvgIcon$1.default)(/*#__PURE__*/(0, _jsxRuntime$1.jsx)("path", {
          d: "M11 18h2v-2h-2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4"
        }), 'HelpOutline');
        const tooltipContainer = "_tooltipContainer_nt7m2_1";
        const iconButton = "_iconButton_nt7m2_6";
        const textPreLine = "_textPreLine_nt7m2_15";
        const styles$b = {
          tooltipContainer: tooltipContainer,
          iconButton: iconButton,
          textPreLine: textPreLine
        };
        const CustomTooltip = ({
          title,
          body,
          url,
          children,
          showIcon = true,
          placement = "bottom-start"
        }) => {
          const _reactExports$useStat = reactExports.useState(false),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            tooltipOpen = _reactExports$useStat2[0],
            setTooltipOpen = _reactExports$useStat2[1];
          const triggerRef = reactExports.useRef(null);
          const theme = useTheme$1();
          reactExports.useEffect(() => {
            if (!tooltipOpen || !showIcon) return;
            const handleClickOutside = event => {
              if (triggerRef.current && !triggerRef.current.contains(event.target)) {
                setTooltipOpen(false);
              }
            };
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
              document.removeEventListener("mousedown", handleClickOutside);
            };
          }, [tooltipOpen]);
          const tooltipContent = /* @__PURE__ */jsxs("div", {
            children: [title && /* @__PURE__ */jsx("span", {
              dangerouslySetInnerHTML: {
                __html: `<strong>${title}</strong>`
              }
            }), body && /* @__PURE__ */jsx("p", {
              className: styles$b.textPreLine,
              dangerouslySetInnerHTML: {
                __html: body
              }
            }), url && /* @__PURE__ */jsx(Button, {
              variant: "text",
              href: url,
              target: "_blank",
              sx: {
                padding: 0,
                textTransform: "none"
              },
              children: "Read more..."
            })]
          });
          const commonTooltipProps = {
            title: tooltipContent,
            placement,
            componentsProps: {
              tooltip: {
                sx: {
                  backgroundColor: "#fff",
                  color: "#1a2052",
                  fontSize: "0.875rem",
                  border: "1px solid #dadde9",
                  padding: 1
                }
              }
            }
          };
          if (showIcon) {
            return /* @__PURE__ */jsx("div", {
              ref: triggerRef,
              className: styles$b.tooltipContainer,
              children: /* @__PURE__ */jsx(Tooltip, _objectSpread(_objectSpread({}, commonTooltipProps), {}, {
                open: tooltipOpen,
                children: /* @__PURE__ */jsx(default_1$1, {
                  className: styles$b.iconButton,
                  sx: {
                    fontSize: "16px",
                    transition: "background-color 0.3s ease, color 0.3s ease",
                    backgroundColor: tooltipOpen ? theme.palette.primary.main : "#fff",
                    color: tooltipOpen ? "#fff" : "#1a2052",
                    "&:hover": {
                      backgroundColor: theme.palette.primary.main
                    }
                  },
                  onClick: e => {
                    e.stopPropagation();
                    setTooltipOpen(prev => !prev);
                  }
                })
              }))
            });
          }
          return /* @__PURE__ */jsx(Tooltip, _objectSpread(_objectSpread({}, commonTooltipProps), {}, {
            children
          }));
        };

        /**
         * i18n Namespace constants
         *
         * See /public/locales/README.md for full documentation.
         *
         * Quick reference:
         * - MANAGE: Dashboard, auth, survey management pages
         * - RUN: Respondent-facing survey runtime
         * - DESIGN_CORE: Main survey designer UI (design/core.json, includes logic_builder.*)
         * - DESIGN_EDITOR: TipTap rich text editor (design/editor.json)
         * - DESIGN_TOOLTIPS: Help tooltips (design/tooltips.json)
         */
        const NAMESPACES = exports("N", {
          MANAGE: 'manage',
          RUN: 'run',
          DESIGN_TOOLTIPS: 'design/tooltips'
        });
        function NewComponentsItem({
          t,
          item,
          onClick
        }) {
          const _useTranslation = useTranslation(NAMESPACES.DESIGN_TOOLTIPS),
            tTooltips = _useTranslation.t;
          const _useDrag = useDrag({
              type: item.type,
              item: {
                draggableId: item.draggableId,
                droppableId: item.droppableId,
                itemType: item.itemType,
                type: item.type
              },
              collect: monitor => {
                return monitor.isDragging();
              }
            }),
            _useDrag2 = _slicedToArray(_useDrag, 2),
            isDragging = _useDrag2[0],
            drag = _useDrag2[1];
          return /* @__PURE__ */jsxs("div", {
            ref: drag,
            className: styles$c.leftPannelItem + (item !== null && item !== void 0 && item.dragLayer ? " " + styles$c.isDrayLayer : ""),
            onClick,
            children: [/* @__PURE__ */jsx(CustomTooltip, {
              title: tTooltips(item.itemType)
            }), item.icon, t("component_" + item.itemType + "_title")]
          });
        }
        const iconPaths = {
          capturePhoto: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 19.24 19.24",
            children: /* @__PURE__ */jsx("g", {
              id: "Isolation_Mode",
              "data-name": "Isolation Mode",
              children: /* @__PURE__ */jsxs("g", {
                children: [/* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M17.18,13.06v-6.87c0-1.55-1.26-2.8-2.8-2.8H4.87c-1.55,0-2.8,1.26-2.8,2.8v6.87c0,1.55,1.26,2.8,2.8,2.8h9.51c1.55,0,2.8-1.26,2.8-2.8ZM11.62,5.33c.93,0,1.68.75,1.68,1.68s-.75,1.68-1.68,1.68-1.68-.75-1.68-1.68c0-.93.75-1.68,1.68-1.68ZM13.26,13.03c-.14.24-.4.38-.71.38h-6.74c-.31,0-.58-.14-.72-.38s-.12-.54.03-.8c.79-1.36,1.53-2.62,2.25-3.85.16-.27.4-.42.67-.42h0c.27,0,.53.16.68.43.34.59.69,1.18,1.03,1.77l.39.66.13-.23c.1-.18.21-.37.32-.57.15-.25.4-.41.67-.41h0c.27,0,.52.15.67.4.45.78.87,1.5,1.28,2.21.15.26.16.56.03.8h0Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M17.18,0h-2.06c-.38,0-.69.31-.69.69s.31.69.69.69h2.06c.38,0,.69.31.69.69v2.06c0,.38.31.69.69.69s.69-.31.69-.69v-2.06c0-1.14-.92-2.06-2.06-2.06Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M.69,4.81c.38,0,.69-.31.69-.69v-2.06c0-.38.31-.69.69-.69h2.06c.38,0,.69-.31.69-.69s-.31-.69-.69-.69h-2.06C.92,0,0,.92,0,2.06v2.06c0,.38.31.69.69.69Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M2.06,19.24h2.06c.38,0,.69-.31.69-.69s-.31-.69-.69-.69h-2.06c-.38,0-.69-.31-.69-.69v-2.06c0-.38-.31-.69-.69-.69s-.69.31-.69.69v2.06c0,1.14.92,2.06,2.06,2.06Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M18.55,14.43c-.38,0-.69.31-.69.69v2.06c0,.38-.31.69-.69.69h-2.06c-.38,0-.69.31-.69.69s.31.69.69.69h2.06c1.14,0,2.06-.92,2.06-2.06v-2.06c0-.38-.31-.69-.69-.69Z"
                })]
              })
            })
          })),
          autocomplete: props => /* @__PURE__ */jsxs("svg", _objectSpread(_objectSpread({}, props), {}, {
            viewBox: "0 0 16 16",
            version: "1.1",
            children: [/* @__PURE__ */jsx("title", {
              children: "102"
            }), /* @__PURE__ */jsx("defs", {}), /* @__PURE__ */jsx("g", {
              stroke: "none",
              strokeWidth: "1",
              fill: "none",
              fillRule: "evenodd",
              children: /* @__PURE__ */jsxs("g", {
                fill: "#434343",
                children: [/* @__PURE__ */jsx("rect", {
                  x: "0",
                  y: "0",
                  width: "13.931",
                  height: "0.983",
                  className: "si-glyph-fill"
                }), /* @__PURE__ */jsx("rect", {
                  x: "0",
                  y: "2",
                  width: "13.931",
                  height: "0.942",
                  className: "si-glyph-fill"
                }), /* @__PURE__ */jsx("rect", {
                  x: "0",
                  y: "14",
                  width: "10.958",
                  height: "0.951",
                  className: "si-glyph-fill"
                }), /* @__PURE__ */jsxs("g", {
                  transform: "translate(4.000000, 4.000000)",
                  children: [/* @__PURE__ */jsx("path", {
                    d: "M4.49,0.054 C2.01,0.054 0,2.047 0,4.506 C0,6.965 2.01,8.958 4.49,8.958 C6.97,8.958 8.979,6.965 8.979,4.506 C8.979,2.047 6.971,0.054 4.49,0.054 L4.49,0.054 Z M4.49,8.018 C2.533,8.018 0.947,6.434 0.947,4.479 C0.947,2.525 2.533,0.938 4.49,0.938 C6.446,0.938 8.031,2.525 8.031,4.479 C8.031,6.434 6.446,8.018 4.49,8.018 L4.49,8.018 Z",
                    className: "si-glyph-fill"
                  }), /* @__PURE__ */jsx("path", {
                    d: "M11.938,10.611 L10.577,11.972 L7.581,8.976 C7.581,8.976 8.151,8.903 8.512,8.542 C8.873,8.18 8.943,7.614 8.943,7.614 L11.938,10.611 L11.938,10.611 Z",
                    className: "si-glyph-fill"
                  }), /* @__PURE__ */jsx("path", {
                    d: "M4.677,2.43 C5.203,2.43 5.006,2.03 4.274,2.03 C3.014,2.03 1.995,3.04 1.995,4.286 C1.995,5.011 2.399,5.207 2.399,4.686 C2.398,3.44 3.418,2.43 4.677,2.43 L4.677,2.43 Z",
                    className: "si-glyph-fill"
                  })]
                }), /* @__PURE__ */jsx("rect", {
                  x: "0",
                  y: "4",
                  width: "3.973",
                  height: "0.962",
                  className: "si-glyph-fill"
                }), /* @__PURE__ */jsx("rect", {
                  x: "0",
                  y: "6",
                  width: "3",
                  height: "0.973",
                  className: "si-glyph-fill"
                }), /* @__PURE__ */jsx("rect", {
                  x: "0",
                  y: "8",
                  width: "2.98",
                  height: "0.993",
                  className: "si-glyph-fill"
                }), /* @__PURE__ */jsx("rect", {
                  x: "0",
                  y: "10",
                  width: "3.02",
                  height: "0.973",
                  className: "si-glyph-fill"
                }), /* @__PURE__ */jsx("rect", {
                  x: "0",
                  y: "12",
                  width: "4",
                  height: "0.931",
                  className: "si-glyph-fill"
                })]
              })
            })]
          })),
          captureVideo: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            id: "Layer_2",
            "data-name": "Layer 2",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 18.49 18.49",
            children: /* @__PURE__ */jsx("g", {
              id: "Isolation_Mode",
              "data-name": "Isolation Mode",
              children: /* @__PURE__ */jsxs("g", {
                children: [/* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M10.64,3.96h-6.08c-1.51,0-2.74,1.23-2.74,2.74v5.08c0,1.51,1.23,2.74,2.74,2.74h6.08c1.51,0,2.74-1.23,2.74-2.74v-.07l.54.43c.52.41,1.21.48,1.8.2.59-.29.96-.87.96-1.53v-3.11c0-.66-.37-1.24-.96-1.53-.59-.29-1.28-.21-1.8.2l-.54.43v-.07c0-1.51-1.23-2.74-2.74-2.74Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M16.51,0h-1.98c-.36,0-.66.3-.66.66s.3.66.66.66h1.98c.36,0,.66.3.66.66v1.98c0,.36.3.66.66.66s.66-.3.66-.66v-1.98c0-1.09-.89-1.98-1.98-1.98Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M0,3.96c0,.36.3.66.66.66s.66-.3.66-.66v-1.98c0-.36.3-.66.66-.66h1.98c.36,0,.66-.3.66-.66s-.3-.66-.66-.66h-1.98C.89,0,0,.89,0,1.98v1.98Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M4.62,17.83c0-.36-.3-.66-.66-.66h-1.98c-.36,0-.66-.3-.66-.66v-1.98c0-.36-.3-.66-.66-.66s-.66.3-.66.66v1.98c0,1.09.89,1.98,1.98,1.98h1.98c.36,0,.66-.3.66-.66Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M17.83,13.87c-.36,0-.66.3-.66.66v1.98c0,.36-.3.66-.66.66h-1.98c-.36,0-.66.3-.66.66s.3.66.66.66h1.98c1.09,0,1.98-.89,1.98-1.98v-1.98c0-.36-.3-.66-.66-.66Z"
                })]
              })
            })
          })),
          closeSidebar: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 9.35 8.31",
            children: /* @__PURE__ */jsx("g", {
              id: "Isolation_Mode",
              "data-name": "Isolation Mode",
              children: /* @__PURE__ */jsx("path", {
                className: "cls-1",
                d: "M.69,0c.38,0,.69.31.69.69v6.93c0,.38-.31.69-.69.69s-.69-.31-.69-.69V.69c0-.38.31-.69.69-.69ZM8.66,3.46h-4.21s0,0,0,0l.88-.88c.27-.27.28-.7.02-.98s-.72-.29-.99-.01l-2.08,2.08c-.27.27-.27.71,0,.98l2.07,2.07c.27.27.7.28.98.02s.29-.72.01-.99l-.89-.89s0,0,0,0h4.21c.38,0,.69-.31.69-.69h0c0-.38-.31-.69-.69-.69Z"
              })
            })
          })),
          duplicate: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 12.86 12.86",
            children: /* @__PURE__ */jsx("g", {
              id: "Isolation_Mode",
              "data-name": "Isolation Mode",
              children: /* @__PURE__ */jsx("path", {
                className: "cls-1",
                d: "M7.23,11.25H1.61v-5.63h1.61v-1.61h-1.61c-.89,0-1.61.72-1.61,1.61v5.63c0,.89.72,1.61,1.61,1.61h5.63c.89,0,1.61-.72,1.61-1.61v-1.61h-1.61v1.61ZM5.63,8.84h5.63c.89,0,1.61-.72,1.61-1.61V1.61c0-.89-.72-1.61-1.61-1.61h-5.63c-.89,0-1.61.72-1.61,1.61v5.63c0,.89.72,1.61,1.61,1.61Z"
              })
            })
          })),
          date: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 19.72 19.63",
            children: /* @__PURE__ */jsx("g", {
              id: "Isolation_Mode",
              "data-name": "Isolation Mode",
              children: /* @__PURE__ */jsxs("g", {
                children: [/* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M4.36,0C3.99,0,3.69.3,3.69.66v3.13c0,.37.3.66.66.66h.57c.37,0,.66-.3.66-.66V.66C5.59.3,5.29,0,4.93,0h-.57Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M14.79,0C14.42,0,14.13.3,14.13.66v3.13c0,.37.3.66.66.66h.57c.37,0,.66-.3.66-.66V.66C16.02.3,15.72,0,15.36,0h-.57Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M18.2,2.18h-1.23v1.61c0,.89-.72,1.61-1.61,1.61h-.57c-.89,0-1.61-.72-1.61-1.61v-1.61h-6.64v1.61c0,.89-.72,1.61-1.61,1.61h-.57c-.89,0-1.61-.72-1.61-1.61v-1.61h-1.24c-.83,0-1.51.68-1.51,1.52v14.41c0,.84.68,1.52,1.51,1.52h16.69c.84,0,1.52-.68,1.52-1.52V3.7c0-.84-.68-1.52-1.52-1.52ZM18.01,16.59c0,.63-.51,1.14-1.13,1.14H2.84c-.63,0-1.14-.51-1.14-1.14V7.49h16.31v9.1Z"
                }), /* @__PURE__ */jsx("circle", {
                  className: "cls-1",
                  cx: "5.34",
                  cy: "10.34",
                  r: "1.51"
                }), /* @__PURE__ */jsx("circle", {
                  className: "cls-1",
                  cx: "9.86",
                  cy: "10.34",
                  r: "1.51"
                }), /* @__PURE__ */jsx("circle", {
                  className: "cls-1",
                  cx: "14.37",
                  cy: "10.34",
                  r: "1.51"
                }), /* @__PURE__ */jsx("circle", {
                  className: "cls-1",
                  cx: "9.86",
                  cy: "14.89",
                  r: "1.51"
                }), /* @__PURE__ */jsx("circle", {
                  className: "cls-1",
                  cx: "5.34",
                  cy: "14.89",
                  r: "1.51"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M15.36,0c.37,0,.66.3.66.66v1.52s0,1.61,0,1.61c0,.37-.3.66-.66.66h-.57c-.37,0-.66-.3-.66-.66v-1.61s0-1.52,0-1.52c0-.37.3-.66.66-.66h.57Z"
                }), /* @__PURE__ */jsx("circle", {
                  className: "cls-1",
                  cx: "14.37",
                  cy: "10.34",
                  r: "1.51"
                }), /* @__PURE__ */jsx("circle", {
                  className: "cls-1",
                  cx: "9.86",
                  cy: "10.34",
                  r: "1.51"
                }), /* @__PURE__ */jsx("circle", {
                  className: "cls-1",
                  cx: "9.86",
                  cy: "14.89",
                  r: "1.51"
                }), /* @__PURE__ */jsx("circle", {
                  className: "cls-1",
                  cx: "14.37",
                  cy: "14.89",
                  r: "1.51"
                })]
              })
            })
          })),
          datetime: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24.28 24.28",
            children: /* @__PURE__ */jsx("g", {
              id: "Isolation_Mode",
              "data-name": "Isolation Mode",
              children: /* @__PURE__ */jsxs("g", {
                children: [/* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M24.28,18.4c0-2.79-1.94-5.12-4.55-5.73-.43-.1-.87-.15-1.33-.15-.13,0-.25,0-.38.01-2.85.18-5.15,2.39-5.46,5.2-.02.22-.04.44-.04.66,0,.42.05.84.13,1.23.57,2.66,2.92,4.65,5.75,4.65,3.25,0,5.88-2.63,5.88-5.88ZM18.4,22.28c-2.15,0-3.89-1.74-3.89-3.89s1.74-3.89,3.89-3.89,3.89,1.74,3.89,3.89-1.74,3.89-3.89,3.89Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M18.96,15.74h-.94c-.11,0-.19.09-.19.19v1.89h-1.89c-.11,0-.19.09-.19.19v.94c0,.11.09.19.19.19h3.03c.11,0,.19-.09.19-.19v-1.13h0v-1.89c0-.11-.09-.19-.19-.19Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M4.36,0c-.37,0-.66.3-.66.66v3.13c0,.37.3.66.66.66h.57c.37,0,.66-.3.66-.66V.66c0-.37-.3-.66-.66-.66h-.57Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M14.79,0c-.37,0-.66.3-.66.66v3.13c0,.37.3.66.66.66h.57c.37,0,.66-.3.66-.66V.66c0-.37-.3-.66-.66-.66h-.57Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M1.52,19.63h9.39c-.09-.46-.14-.94-.14-1.42,0-.16,0-.32.02-.47H2.84c-.63,0-1.14-.51-1.14-1.14V7.49h16.31v3.52c.13,0,.25-.01.38-.01.45,0,.9.04,1.33.12V3.7c0-.84-.68-1.52-1.52-1.52h-1.23v1.61c0,.89-.72,1.61-1.61,1.61h-.57c-.89,0-1.61-.72-1.61-1.61v-1.61h-6.64v1.61c0,.89-.72,1.61-1.61,1.61h-.57c-.89,0-1.61-.72-1.61-1.61v-1.61h-1.23c-.84,0-1.52.68-1.52,1.52v14.41c0,.84.68,1.52,1.52,1.52Z"
                }), /* @__PURE__ */jsx("circle", {
                  className: "cls-1",
                  cx: "5.35",
                  cy: "10.34",
                  r: "1.51"
                }), /* @__PURE__ */jsx("circle", {
                  className: "cls-1",
                  cx: "9.86",
                  cy: "10.34",
                  r: "1.51"
                }), /* @__PURE__ */jsx("circle", {
                  className: "cls-1",
                  cx: "14.38",
                  cy: "10.34",
                  r: "1.51"
                }), /* @__PURE__ */jsx("circle", {
                  className: "cls-1",
                  cx: "9.86",
                  cy: "14.89",
                  r: "1.51"
                }), /* @__PURE__ */jsx("circle", {
                  className: "cls-1",
                  cx: "5.35",
                  cy: "14.89",
                  r: "1.51"
                })]
              })
            })
          })),
          delete: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 11.76 13.43",
            children: /* @__PURE__ */jsx("g", {
              id: "Isolation_Mode",
              "data-name": "Isolation Mode",
              children: /* @__PURE__ */jsx("path", {
                className: "cls-1",
                d: "M3.55.46c.14-.29.43-.46.75-.46h3.16c.32,0,.61.18.75.46l.19.38h2.52c.46,0,.84.38.84.84s-.38.84-.84.84H.84c-.46,0-.84-.38-.84-.84s.38-.84.84-.84h2.52l.19-.38ZM.84,3.36h10.08v8.4c0,.93-.75,1.68-1.68,1.68H2.52c-.93,0-1.68-.75-1.68-1.68V3.36ZM3.36,5.04c-.23,0-.42.19-.42.42v5.88c0,.23.19.42.42.42s.42-.19.42-.42v-5.88c0-.23-.19-.42-.42-.42ZM5.88,5.04c-.23,0-.42.19-.42.42v5.88c0,.23.19.42.42.42s.42-.19.42-.42v-5.88c0-.23-.19-.42-.42-.42ZM8.4,5.04c-.23,0-.42.19-.42.42v5.88c0,.23.19.42.42.42s.42-.19.42-.42v-5.88c0-.23-.19-.42-.42-.42Z"
              })
            })
          })),
          email: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 11.79 8.84",
            children: /* @__PURE__ */jsx("g", {
              id: "Isolation_Mode",
              "data-name": "Isolation Mode",
              children: /* @__PURE__ */jsx("path", {
                className: "cls-1",
                d: "M1.11,0C.5,0,0,.5,0,1.11c0,.35.16.67.44.88l5.01,3.76c.26.2.62.2.88,0l5.01-3.76c.28-.21.44-.54.44-.88,0-.61-.5-1.11-1.11-1.11C10.68,0,1.11,0,1.11,0ZM0,2.58v4.79c0,.81.66,1.47,1.47,1.47h8.84c.81,0,1.47-.66,1.47-1.47V2.58l-5.01,3.76c-.52.39-1.24.39-1.77,0L0,2.58Z"
              })
            })
          })),
          expand: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 7.65 21.41",
            children: /* @__PURE__ */jsx("g", {
              id: "Isolation_Mode",
              "data-name": "Isolation Mode",
              children: /* @__PURE__ */jsx("path", {
                className: "cls-1",
                d: "M5.24,8.29c0,.4-.33.73-.73.73h-1.38c-.4,0-.73-.33-.73-.73v-3.74s-1.68,0-1.68,0c-.3,0-.56-.18-.67-.45s-.05-.59.16-.8L3.31.21c.29-.29.75-.29,1.03,0l3.09,3.09c.21.21.27.52.16.8s-.38.45-.67.45h-1.68v3.74ZM7.44,18.1l-3.1,3.1c-.29.29-.75.29-1.03,0L.21,18.1c-.21-.21-.27-.52-.16-.8s.38-.45.67-.45h1.68v-3.74c0-.4.33-.73.73-.73h1.38c.4,0,.73.32.73.73v3.74h1.68c.3,0,.56.18.67.45s.05.59-.16.8Z"
              })
            })
          })),
          fileUpload: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 13.91 17.45",
            children: /* @__PURE__ */jsx("g", {
              id: "Isolation_Mode",
              "data-name": "Isolation Mode",
              children: /* @__PURE__ */jsx("g", {
                id: "_56",
                "data-name": "56",
                children: /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M13.16,2.87l-2.41-2.23c-.44-.41-1.01-.64-1.61-.64H2.38C1.07,0,0,1.07,0,2.38v12.7c0,1.31,1.07,2.38,2.38,2.38h9.16c1.31,0,2.38-1.07,2.38-2.38V4.61c0-.66-.28-1.29-.76-1.75ZM4.58,5.98c1.97-1.97,1.9-1.91,1.97-1.96.12-.08.26-.12.4-.12h0c.19,0,.37.08.51.21.76.76,1.94,1.95,1.86,1.87.28.28.28.74,0,1.03-.28.28-.74.28-1.03,0l-.62-.62v2.57c0,.41-.33.73-.73.73s-.73-.32-.73-.73v-2.57l-.63.63c-.27.27-.74.29-1.03,0s-.28-.75,0-1.03ZM9.77,13.56h-5.64c-.4,0-.73-.33-.73-.73s.33-.73.73-.73h5.64c.4,0,.73.33.73.73s-.33.73-.73.73Z"
                })
              })
            })
          })),
          imageDisplay: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            viewBox: "0 0 17.59 17.59",
            children: /* @__PURE__ */jsx("g", {
              id: "Isolation_Mode",
              "data-name": "Isolation Mode",
              children: /* @__PURE__ */jsxs("g", {
                children: [/* @__PURE__ */jsxs("g", {
                  children: [/* @__PURE__ */jsx("path", {
                    className: "cls-1",
                    d: "M15.83,0H1.76C.79,0,0,.79,0,1.76v10.55c0,.97.79,1.76,1.76,1.76h14.07c.97,0,1.76-.79,1.76-1.76V1.76c0-.97-.79-1.76-1.76-1.76h0ZM1.76,12.04V1.76h14.07v10.28H1.76Z"
                  }), /* @__PURE__ */jsx("path", {
                    className: "cls-1",
                    d: "M12.31,15.83h-7.03c-.48,0-.88.39-.88.88s.39.88.88.88h7.03c.48,0,.88-.39.88-.88s-.39-.88-.88-.88Z"
                  })]
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M12.04,2.64c1.04,0,1.89.84,1.89,1.89s-.84,1.89-1.89,1.89-1.89-.84-1.89-1.89c0-1.04.84-1.89,1.89-1.89Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M14.42,12.64c-.19.33-.55.52-.98.52H4.16c-.43,0-.8-.2-.99-.52s-.17-.74.05-1.11c1.09-1.88,2.11-3.61,3.1-5.3.22-.37.55-.58.93-.58h0c.37,0,.73.22.94.59.47.81.95,1.63,1.42,2.44l.53.92.18-.32c.14-.24.29-.51.44-.78.2-.35.54-.56.92-.56h0c.37,0,.72.21.92.56.62,1.07,1.2,2.07,1.77,3.05.21.36.23.78.04,1.1h0Z"
                })]
              })
            })
          })),
          imageRanking: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 23.65 16.4",
            children: /* @__PURE__ */jsx("g", {
              id: "Isolation_Mode",
              "data-name": "Isolation Mode",
              children: /* @__PURE__ */jsxs("g", {
                children: [/* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M13.66,0H3.11C1.39,0,0,1.39,0,3.11v7.62c0,1.71,1.39,3.11,3.11,3.11h9.03l.27-1.57-1.19-1.14h-7.06c-.35,0-.65-.16-.8-.42-.15-.26-.14-.6.04-.89.88-1.51,1.7-2.91,2.5-4.27.17-.3.45-.46.75-.47h0c.3,0,.58.18.76.48.38.65.76,1.31,1.14,1.96l.43.74,5.06-.91,1.62-3.23v-.02s.02-.02.02-.02c.1-.17.24-.3.4-.4.18-.1.38-.16.58-.16.03,0,.07,0,.1,0v-.4c0-1.71-1.39-3.11-3.11-3.11ZM10.6,5.89c-1.03,0-1.86-.83-1.86-1.86s.83-1.86,1.86-1.86,1.86.83,1.86,1.86-.83,1.86-1.86,1.86Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M20.79,11.86c-.1.09-.14.23-.12.36l.65,3.71c.03.15-.03.3-.16.38-.02.01-.04.03-.06.04,0,0-.02,0-.03.01-.01,0-.03.01-.04.01-.05.02-.11.02-.17.02-.02,0-.03,0-.05,0-.03,0-.06-.02-.1-.04l-3.38-1.75c-.06-.03-.12-.05-.19-.05s-.13.02-.19.05l-3.38,1.75s-.03.02-.05.02c-.02,0-.05.02-.07.02-.02,0-.05,0-.07,0-.09,0-.18-.03-.25-.08-.12-.09-.18-.24-.16-.38l.37-2.09.28-1.61c.02-.13-.02-.27-.12-.36l-.91-.87-1.83-1.76c-.11-.1-.15-.26-.1-.4.05-.15.18-.26.33-.27l1.06-.15,2.73-.39c.13-.02.25-.1.31-.22l1.69-3.37c.04-.06.09-.11.15-.15.07-.04.14-.06.22-.06.03,0,.07,0,.1.01.04,0,.08.02.11.04.02,0,.03.02.05.03.01.01.03.02.04.04,0,0,.01.01.02.02h0s.02.03.04.05c0,0,.01.02.02.02l1.69,3.37c.06.12.17.2.31.22l3.78.54c.16.02.29.13.33.27.05.14,0,.3-.1.4l-2.74,2.62Z"
                })]
              })
            })
          })),
          longText: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 11.07 11.08",
            children: /* @__PURE__ */jsx("g", {
              id: "Isolation_Mode",
              "data-name": "Isolation Mode",
              children: /* @__PURE__ */jsx("path", {
                className: "cls-1",
                d: "M1.58,2.37v-.79h3.16v3.16h-.4c-.44,0-.79.35-.79.79s.35.79.79.79h2.37c.44,0,.79-.35.79-.79s-.35-.79-.79-.79h-.4V1.58h3.16v.79c0,.44.35.79.79.79s.79-.35.79-.79v-1.19c0-.66-.53-1.19-1.19-1.19H1.19C.53,0,0,.53,0,1.19v1.19c0,.44.35.79.79.79s.79-.35.79-.79ZM3.17,7.91v-.79c0-.32-.19-.61-.49-.73s-.64-.06-.86.17l-1.58,1.58c-.31.31-.31.81,0,1.12l1.58,1.58c.23.22.57.29.86.17s.49-.41.49-.73v-.79M7.91,9.49v.79c0,.32.19.61.49.73s.64.05.86-.17l1.58-1.58c.31-.31.31-.81,0-1.12l-1.58-1.58c-.23-.23-.57-.29-.86-.17s-.49.41-.49.73v.79"
              })
            })
          })),
          multipleChoice: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 14.15 14.15",
            children: /* @__PURE__ */jsx("g", {
              id: "Isolation_Mode",
              "data-name": "Isolation Mode",
              children: /* @__PURE__ */jsx("path", {
                className: "cls-1",
                d: "M10.82,1.73c.39-.39.39-1.04,0-1.43s-1.04-.39-1.43,0l-4.33,4.34-1.81-1.81c-.39-.39-1.04-.39-1.43,0-.39.39-.39,1.04,0,1.43l2.53,2.53c.39.39,1.04.39,1.43,0,0,0,5.05-5.05,5.05-5.05ZM13.85,5.77c.39-.39.39-1.04,0-1.43s-1.04-.39-1.43,0l-7.37,7.37-3.33-3.32c-.39-.39-1.04-.39-1.43,0s-.39,1.04,0,1.43l4.04,4.04c.39.39,1.04.39,1.43,0L13.85,5.77h0Z"
              })
            })
          })),
          multipleIconChoice: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 15.82 15.82",
            children: /* @__PURE__ */jsx("g", {
              id: "Isolation_Mode",
              "data-name": "Isolation Mode",
              children: /* @__PURE__ */jsxs("g", {
                children: [/* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M9.07,7.54c-.13-.16-.27-.32-.42-.46-.92-.9-2.17-1.45-3.56-1.45C2.29,5.63,0,7.91,0,10.72s2.29,5.1,5.1,5.1,5.1-2.29,5.1-5.1c0-1.2-.42-2.31-1.12-3.18ZM6.78,8.54c.31,0,.56.25.56.56s-.25.56-.56.56-.56-.25-.56-.56.25-.56.56-.56ZM3.42,8.54c.31,0,.56.25.56.56s-.25.56-.56.56-.56-.25-.56-.56.25-.56.56-.56ZM7.81,11.48c-.32,1.24-1.43,2.1-2.71,2.1s-2.39-.86-2.71-2.1c-.08-.3.1-.6.4-.68.3-.08.6.1.68.4.19.74.86,1.26,1.63,1.26s1.43-.52,1.63-1.26c.08-.3.38-.48.68-.4.3.08.48.38.4.68Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M14.7,1.91c-.13-.16-.27-.32-.42-.46-.92-.9-2.17-1.45-3.56-1.45-2.68,0-4.89,2.08-5.08,4.71,1.17.11,2.25.55,3.13,1.23.51-.49,1.2-.79,1.95-.79,1.28,0,2.39.86,2.71,2.1.08.3-.1.6-.4.68-.3.08-.6-.1-.68-.4-.19-.74-.86-1.26-1.63-1.26-.43,0-.82.16-1.13.43.84.94,1.39,2.14,1.51,3.47,2.63-.2,4.71-2.4,4.71-5.08,0-1.2-.42-2.31-1.12-3.18ZM9.05,4.03c-.31,0-.56-.25-.56-.56s.25-.56.56-.56.56.25.56.56-.25.56-.56.56ZM12.4,4.03c-.31,0-.56-.25-.56-.56s.25-.56.56-.56.56.25.56.56-.25.56-.56.56Z"
                })]
              })
            })
          })),
          multipleImageChoice: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 16.9 16.96",
            children: /* @__PURE__ */jsx("g", {
              id: "Isolation_Mode",
              "data-name": "Isolation Mode",
              children: /* @__PURE__ */jsxs("g", {
                children: [/* @__PURE__ */jsx("g", {
                  id: "Layer_2-2",
                  "data-name": "Layer 2",
                  children: /* @__PURE__ */jsx("g", {
                    id: "scenery",
                    children: /* @__PURE__ */jsx("path", {
                      className: "cls-1",
                      d: "M5.42,6.12c-2.99,0-5.42,2.43-5.42,5.42s2.43,5.42,5.42,5.42,5.42-2.43,5.42-5.42-2.43-5.42-5.42-5.42ZM7.15,8.68c.66,0,1.19.53,1.19,1.19s-.53,1.19-1.19,1.19-1.19-.53-1.19-1.19c0-.66.53-1.19,1.19-1.19ZM8.32,14.14c-.1.17-.29.27-.5.27H3.03c-.22,0-.41-.1-.51-.27s-.09-.38.02-.57c.56-.97,1.09-1.86,1.6-2.73.11-.19.28-.3.48-.3h0c.19,0,.37.11.48.3.24.42.49.84.73,1.26l.28.47.09-.16c.07-.12.15-.26.23-.4.1-.18.28-.29.47-.29h0c.19,0,.37.11.47.29.32.55.62,1.07.91,1.57.11.19.12.4.02.57h0Z"
                    })
                  })
                }), /* @__PURE__ */jsx("g", {
                  id: "Layer_2-3",
                  "data-name": "Layer 2",
                  children: /* @__PURE__ */jsx("g", {
                    id: "scenery-2",
                    "data-name": "scenery",
                    children: /* @__PURE__ */jsx("path", {
                      className: "cls-1",
                      d: "M11.48,0c-2.89,0-5.26,2.27-5.41,5.12,1.18.12,2.27.56,3.17,1.24.33-.56.65-1.11.96-1.64.11-.19.28-.3.48-.3h0c.19,0,.37.11.48.3.24.42.49.84.73,1.26l.28.47.09-.16c.07-.12.15-.26.23-.4.1-.18.28-.29.47-.29h0c.19,0,.37.11.47.29.32.55.62,1.07.91,1.57.11.19.12.4.02.57-.1.17-.29.27-.5.27h-2.92c.44.76.73,1.62.82,2.54,2.86-.15,5.13-2.52,5.13-5.41S14.47,0,11.48,0ZM13.22,4.94c-.66,0-1.19-.53-1.19-1.19s.53-1.19,1.19-1.19,1.19.53,1.19,1.19-.53,1.19-1.19,1.19Z"
                    })
                  })
                })]
              })
            })
          })),
          nps: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 14.89 14.42",
            children: /* @__PURE__ */jsx("g", {
              id: "Isolation_Mode",
              "data-name": "Isolation Mode",
              children: /* @__PURE__ */jsx("path", {
                className: "cls-1",
                d: "M14.79,5.34c-.21-.64-.83-1.38-1.9-1.38h-2.71l-.82-2.57c-.33-1.03-1.23-1.39-1.91-1.39s-1.58.36-1.91,1.39l-.82,2.57h-2.71c-1.08,0-1.7.74-1.9,1.38-.21.64-.15,1.61.72,2.24l2.21,1.62-.84,2.6c-.33,1.03.19,1.85.73,2.24.3.22.73.39,1.19.39.38,0,.78-.11,1.17-.4l2.16-1.59,2.16,1.59c.71.52,1.68.5,2.35.01.55-.39,1.07-1.22.74-2.24l-.84-2.6,2.21-1.62c.87-.63.93-1.6.72-2.24h0ZM13.34,6.58l-2.57,1.88c-.22.16-.31.44-.22.69l.98,3.02c.16.5-.2.8-.28.85-.25.18-.61.2-.89,0l-2.53-1.86c-.11-.08-.24-.12-.37-.12V1.24c.17,0,.57.05.73.53l.96,3c.08.26.32.43.59.43h3.16c.5,0,.67.37.72.52.05.16.13.56-.27.85Z"
              })
            })
          })),
          number: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 12.9 11.46",
            children: /* @__PURE__ */jsx("g", {
              id: "Isolation_Mode",
              "data-name": "Isolation Mode",
              children: /* @__PURE__ */jsx("path", {
                className: "cls-1",
                d: "M.41.61c0-.34.27-.61.61-.61h.82c.34,0,.61.27.61.61v3.07h.41c.34,0,.61.27.61.61s-.27.61-.61.61H.82c-.34,0-.61-.27-.61-.61s.27-.61.61-.61h.41V1.23h-.2c-.34,0-.61-.27-.61-.61ZM2.02,7.91c-.17-.19-.47-.18-.61.03l-.29.4c-.2.28-.58.34-.86.14s-.34-.58-.14-.86l.28-.4c.61-.85,1.85-.91,2.54-.13.55.62.53,1.56-.03,2.17l-.89.97h.85c.34,0,.61.27.61.61s-.27.61-.61.61H.62c-.24,0-.47-.14-.56-.37s-.05-.48.11-.66l1.84-2c.14-.15.14-.37,0-.52h0ZM5.53.82h6.55c.45,0,.82.37.82.82s-.37.82-.82.82h-6.55c-.45,0-.82-.37-.82-.82s.37-.82.82-.82ZM5.53,4.91h6.55c.45,0,.82.37.82.82s-.37.82-.82.82h-6.55c-.45,0-.82-.37-.82-.82s.37-.82.82-.82ZM5.53,9.01h6.55c.45,0,.82.37.82.82s-.37.82-.82.82h-6.55c-.45,0-.82-.37-.82-.82s.37-.82.82-.82Z"
              })
            })
          })),
          qrCode: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 18.29 18.29",
            children: /* @__PURE__ */jsx("g", {
              id: "Isolation_Mode",
              "data-name": "Isolation Mode",
              children: /* @__PURE__ */jsxs("g", {
                children: [/* @__PURE__ */jsxs("g", {
                  children: [/* @__PURE__ */jsx("path", {
                    className: "cls-1",
                    d: "M16.33,0h-1.96c-.36,0-.65.29-.65.65s.29.65.65.65h1.96c.36,0,.65.29.65.65v1.96c0,.36.29.65.65.65s.65-.29.65-.65v-1.96c0-1.08-.88-1.96-1.96-1.96Z"
                  }), /* @__PURE__ */jsx("path", {
                    className: "cls-1",
                    d: "M.65,4.57c.36,0,.65-.29.65-.65v-1.96c0-.36.29-.65.65-.65h1.96c.36,0,.65-.29.65-.65s-.29-.65-.65-.65h-1.96C.88,0,0,.88,0,1.96v1.96c0,.36.29.65.65.65Z"
                  }), /* @__PURE__ */jsx("path", {
                    className: "cls-1",
                    d: "M1.96,18.29h1.96c.36,0,.65-.29.65-.65s-.29-.65-.65-.65h-1.96c-.36,0-.65-.29-.65-.65v-1.96c0-.36-.29-.65-.65-.65s-.65.29-.65.65v1.96c0,1.08.88,1.96,1.96,1.96Z"
                  }), /* @__PURE__ */jsx("path", {
                    className: "cls-1",
                    d: "M17.64,13.72c-.36,0-.65.29-.65.65v1.96c0,.36-.29.65-.65.65h-1.96c-.36,0-.65.29-.65.65s.29.65.65.65h1.96c1.08,0,1.96-.88,1.96-1.96v-1.96c0-.36-.29-.65-.65-.65Z"
                  })]
                }), /* @__PURE__ */jsxs("g", {
                  children: [/* @__PURE__ */jsx("path", {
                    className: "cls-1",
                    d: "M2.95,3.54c-.26,0-.48.25-.48.56v10.09c0,.31.21.56.48.56s.48-.25.48-.56V4.1c0-.31-.21-.56-.48-.56Z"
                  }), /* @__PURE__ */jsx("path", {
                    className: "cls-1",
                    d: "M4.86,3.54h.95c.26,0,.48.25.48.56v10.09c0,.31-.21.56-.48.56h-.95c-.26,0-.48-.25-.48-.56V4.1c0-.31.21-.56.48-.56Z"
                  }), /* @__PURE__ */jsx("path", {
                    className: "cls-1",
                    d: "M7.72,3.54c-.26,0-.48.25-.48.56v10.09c0,.31.21.56.48.56s.48-.25.48-.56V4.1c0-.31-.21-.56-.48-.56Z"
                  }), /* @__PURE__ */jsx("path", {
                    className: "cls-1",
                    d: "M9.62,3.54h.95c.26,0,.48.25.48.56v10.09c0,.31-.21.56-.48.56h-.95c-.26,0-.48-.25-.48-.56V4.1c0-.31.21-.56.48-.56Z"
                  }), /* @__PURE__ */jsx("path", {
                    className: "cls-1",
                    d: "M12.48,3.54c-.26,0-.48.25-.48.56v10.09c0,.31.21.56.48.56s.48-.25.48-.56V4.1c0-.31-.21-.56-.48-.56Z"
                  }), /* @__PURE__ */jsx("path", {
                    className: "cls-1",
                    d: "M14.39,3.54h.95c.26,0,.48.25.48.56v10.09c0,.31-.21.56-.48.56h-.95c-.26,0-.48-.25-.48-.56V4.1c0-.31.21-.56.48-.56Z"
                  })]
                })]
              })
            })
          })),
          ranking: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 17.59 10.32",
            children: /* @__PURE__ */jsx("g", {
              id: "Isolation_Mode",
              "data-name": "Isolation Mode",
              children: /* @__PURE__ */jsxs("g", {
                children: [/* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M17.07,9.18H.52c-.28,0-.52.26-.52.57s.23.57.52.57h16.56c.28,0,.52-.26.52-.57s-.23-.57-.52-.57Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M10.92,0h-4.26c-.32,0-.57.24-.57.53v7.5h5.41V.53c0-.29-.26-.53-.57-.53Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M4.95,1.76H.57c-.32,0-.57.22-.57.48v5.79h4.95V1.76Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M17.59,3.95c0-.26-.26-.46-.57-.46h-4.38v4.55h4.95V3.95Z"
                })]
              })
            })
          })),
          multipleText: props => /* @__PURE__ */jsxs("svg", _objectSpread(_objectSpread({}, props), {}, {
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            version: "1.1",
            viewBox: "0 0 256 256",
            enableBackground: "new 0 0 256 256",
            xmlSpace: "preserve",
            children: [/* @__PURE__ */jsxs("metadata", {
              children: [" ", "Svg Vector Icons : http://www.onlinewebfonts.com/icon", " "]
            }), /* @__PURE__ */jsx("g", {
              children: /* @__PURE__ */jsxs("g", {
                children: [/* @__PURE__ */jsx("g", {
                  children: /* @__PURE__ */jsx("g", {
                    id: "menu",
                    children: /* @__PURE__ */jsx("g", {
                      children: /* @__PURE__ */jsx("path", {
                        fill: "#000000",
                        d: "M32.1,91.1h191.7c12.2,0,22.1-9.9,22.1-22.1c0-12.2-9.9-22.1-22.1-22.1H32.1C19.9,46.9,10,56.8,10,69S19.9,91.1,32.1,91.1z M32.1,61.6h191.7c4.1,0,7.4,3.3,7.4,7.4c0,4.1-3.3,7.4-7.4,7.4H32.1c-4.1,0-7.4-3.3-7.4-7.4C24.8,64.9,28.1,61.6,32.1,61.6z M223.8,105.9H32.1c-12.2,0-22.1,9.9-22.1,22.1c0,12.2,9.9,22.1,22.1,22.1h191.7c12.2,0,22.1-9.9,22.1-22.1C246,115.8,236.1,105.9,223.8,105.9z M223.8,135.4H32.1c-4.1,0-7.4-3.3-7.4-7.4c0-4.1,3.3-7.4,7.4-7.4h191.7c4.1,0,7.4,3.3,7.4,7.4C231.2,132.1,227.9,135.4,223.8,135.4z M223.8,164.9H32.1c-12.2,0-22.1,9.9-22.1,22.1c0,12.2,9.9,22.1,22.1,22.1h191.7c12.2,0,22.1-9.9,22.1-22.1C246,174.8,236.1,164.9,223.8,164.9z M223.8,194.4H32.1c-4.1,0-7.4-3.3-7.4-7.4s3.3-7.4,7.4-7.4h191.7c4.1,0,7.4,3.3,7.4,7.4S227.9,194.4,223.8,194.4z"
                      })
                    })
                  })
                }), /* @__PURE__ */jsx("g", {}), /* @__PURE__ */jsx("g", {}), /* @__PURE__ */jsx("g", {}), /* @__PURE__ */jsx("g", {}), /* @__PURE__ */jsx("g", {}), /* @__PURE__ */jsx("g", {}), /* @__PURE__ */jsx("g", {}), /* @__PURE__ */jsx("g", {}), /* @__PURE__ */jsx("g", {}), /* @__PURE__ */jsx("g", {}), /* @__PURE__ */jsx("g", {}), /* @__PURE__ */jsx("g", {}), /* @__PURE__ */jsx("g", {}), /* @__PURE__ */jsx("g", {}), /* @__PURE__ */jsx("g", {})]
              })
            })]
          })),
          shortText: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 9.94 9.94",
            children: /* @__PURE__ */jsx("g", {
              id: "Isolation_Mode",
              "data-name": "Isolation Mode",
              children: /* @__PURE__ */jsx("path", {
                className: "cls-1",
                d: "M1.42,2.13v-.71h2.84v2.84h-.35c-.39,0-.71.32-.71.71s.32.71.71.71h2.13c.39,0,.71-.32.71-.71s-.32-.71-.71-.71h-.35V1.42h2.84v.71c0,.39.32.71.71.71s.71-.32.71-.71v-1.06c0-.59-.48-1.06-1.06-1.06H1.06C.48,0,0,.48,0,1.06v1.06c0,.39.32.71.71.71s.71-.32.71-.71ZM.67,8.52v.71c0,.29.17.55.44.66s.57.05.77-.15l1.42-1.42c.28-.28.28-.73,0-1l-1.42-1.42c-.2-.2-.51-.26-.77-.15s-.44.37-.44.66v.71M9.18,7.1v-.71c0-.29-.17-.55-.44-.66s-.57-.05-.77.15l-1.42,1.42c-.28.28-.28.73,0,1l1.42,1.42c.2.2.51.26.77.15s.44-.37.44-.66v-.71"
              })
            })
          })),
          select: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 15 15",
            fill: "none",
            children: /* @__PURE__ */jsx("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7.49999 3.09998C7.27907 3.09998 7.09999 3.27906 7.09999 3.49998C7.09999 3.72089 7.27907 3.89998 7.49999 3.89998H14.5C14.7209 3.89998 14.9 3.72089 14.9 3.49998C14.9 3.27906 14.7209 3.09998 14.5 3.09998H7.49999ZM7.49998 5.1C7.27907 5.1 7.09998 5.27908 7.09998 5.5C7.09998 5.72091 7.27907 5.9 7.49998 5.9H14.5C14.7209 5.9 14.9 5.72091 14.9 5.5C14.9 5.27908 14.7209 5.1 14.5 5.1H7.49998ZM7.1 7.5C7.1 7.27908 7.27909 7.1 7.5 7.1H14.5C14.7209 7.1 14.9 7.27908 14.9 7.5C14.9 7.72091 14.7209 7.9 14.5 7.9H7.5C7.27909 7.9 7.1 7.72091 7.1 7.5ZM7.49998 9.1C7.27907 9.1 7.09998 9.27908 7.09998 9.5C7.09998 9.72091 7.27907 9.9 7.49998 9.9H14.5C14.7209 9.9 14.9 9.72091 14.9 9.5C14.9 9.27908 14.7209 9.1 14.5 9.1H7.49998ZM7.09998 11.5C7.09998 11.2791 7.27907 11.1 7.49998 11.1H14.5C14.7209 11.1 14.9 11.2791 14.9 11.5C14.9 11.7209 14.7209 11.9 14.5 11.9H7.49998C7.27907 11.9 7.09998 11.7209 7.09998 11.5ZM2.5 9.25003L5 6.00003H0L2.5 9.25003Z",
              fill: "#000000"
            })
          })),
          signature: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 21.25 21.25",
            children: /* @__PURE__ */jsx("g", {
              id: "Isolation_Mode",
              "data-name": "Isolation Mode",
              children: /* @__PURE__ */jsx("path", {
                className: "cls-1",
                d: "M21.25,20.36c0,.49-.4.89-.89.89-1.36,0-2.03-.99-2.51-1.73-.44-.66-.66-.93-1.04-.93-.45,0-.8.39-1.34,1.02-.62.73-1.39,1.64-2.68,1.64s-2.05-.91-2.66-1.66c-.51-.62-.85-1-1.29-1-.35,0-.56.22-1.03.81-.64.78-1.51,1.85-3.4,1.85-2.44,0-4.43-1.98-4.43-4.43s1.98-4.43,4.43-4.43c.49,0,.89.4.89.89s-.4.89-.89.89c-1.46,0-2.66,1.2-2.66,2.66s1.2,2.66,2.66,2.66c1.04,0,1.48-.53,2.03-1.2.53-.65,1.19-1.45,2.4-1.45,1.3,0,2.05.91,2.66,1.66.51.62.85,1,1.29,1s.8-.39,1.34-1.02c.62-.73,1.39-1.64,2.68-1.64s2.03.99,2.51,1.73c.44.66.66.93,1.04.93.49,0,.89.4.89.89ZM7.96,14.17h.83c.94,0,1.84-.37,2.51-1.04l6.83-6.83-3.18-3.18-6.83,6.83c-.66.66-1.04,1.57-1.04,2.51v.83c0,.49.39.88.88.88h0ZM20.59,3.84c.42-.42.66-.99.66-1.59s-.23-1.17-.66-1.58c-.88-.88-2.3-.88-3.18,0l-1.2,1.2,3.18,3.18,1.2-1.2h0Z"
              })
            })
          })),
          singleChoiceArray: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 14.39 14.39",
            children: /* @__PURE__ */jsx("g", {
              id: "Isolation_Mode",
              "data-name": "Isolation Mode",
              children: /* @__PURE__ */jsxs("g", {
                children: [/* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M2.15,4.3c1.18,0,2.15-.96,2.15-2.15S3.33,0,2.15,0,0,.96,0,2.15s.96,2.15,2.15,2.15ZM2.15,1.39c.42,0,.76.34.76.76s-.34.76-.76.76-.76-.34-.76-.76.34-.76.76-.76Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M2.15,9.34c1.18,0,2.15-.96,2.15-2.15s-.96-2.15-2.15-2.15-2.15.96-2.15,2.15.96,2.15,2.15,2.15ZM2.15,6.44c.42,0,.76.34.76.76s-.34.76-.76.76-.76-.34-.76-.76.34-.76.76-.76Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M7.19,4.3c1.18,0,2.15-.96,2.15-2.15S8.38,0,7.19,0s-2.15.96-2.15,2.15.96,2.15,2.15,2.15ZM7.19,1.39c.42,0,.76.34.76.76s-.34.76-.76.76-.76-.34-.76-.76.34-.76.76-.76Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M7.19,9.34c1.18,0,2.15-.96,2.15-2.15s-.96-2.15-2.15-2.15-2.15.96-2.15,2.15.96,2.15,2.15,2.15ZM7.19,6.44c.42,0,.76.34.76.76s-.34.76-.76.76-.76-.34-.76-.76.34-.76.76-.76Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M7.19,14.39c1.18,0,2.15-.96,2.15-2.15s-.96-2.15-2.15-2.15-2.15.96-2.15,2.15.96,2.15,2.15,2.15ZM7.19,11.48c.42,0,.76.34.76.76s-.34.76-.76.76-.76-.34-.76-.76.34-.76.76-.76Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M12.24,0c-1.18,0-2.15.96-2.15,2.15s.96,2.15,2.15,2.15,2.15-.96,2.15-2.15S13.42,0,12.24,0ZM12.24,2.9c-.42,0-.76-.34-.76-.76s.34-.76.76-.76.76.34.76.76c0,.42-.34.76-.76.76Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M12.24,5.05c-1.18,0-2.15.96-2.15,2.15s.96,2.15,2.15,2.15,2.15-.96,2.15-2.15-.96-2.15-2.15-2.15ZM12.24,7.95c-.42,0-.76-.34-.76-.76s.34-.76.76-.76.76.34.76.76c0,.42-.34.76-.76.76Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M2.15,14.39c1.18,0,2.15-.96,2.15-2.15s-.96-2.15-2.15-2.15-2.15.96-2.15,2.15.96,2.15,2.15,2.15ZM2.15,11.48c.42,0,.76.34.76.76s-.34.76-.76.76-.76-.34-.76-.76.34-.76.76-.76Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M12.24,10.09c-1.18,0-2.15.96-2.15,2.15s.96,2.15,2.15,2.15,2.15-.96,2.15-2.15-.96-2.15-2.15-2.15ZM12.24,12.99c-.42,0-.76-.34-.76-.76s.34-.76.76-.76.76.34.76.76c0,.42-.34.76-.76.76Z"
                }), /* @__PURE__ */jsx("circle", {
                  className: "cls-1",
                  cx: "7.19",
                  cy: "2.18",
                  r: "1.57"
                }), /* @__PURE__ */jsx("circle", {
                  className: "cls-1",
                  cx: "7.34",
                  cy: "12.2",
                  r: "1.57"
                }), /* @__PURE__ */jsx("circle", {
                  className: "cls-1",
                  cx: "12.24",
                  cy: "7.19",
                  r: "1.57"
                })]
              })
            })
          })),
          multipleChoiceArray: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 14.39 14.39",
            children: /* @__PURE__ */jsx("g", {
              id: "Isolation_Mode",
              "data-name": "Isolation Mode",
              children: /* @__PURE__ */jsxs("g", {
                children: [/* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M2.15,4.3c1.18,0,2.15-.96,2.15-2.15S3.33,0,2.15,0,0,.96,0,2.15s.96,2.15,2.15,2.15ZM2.15,1.39c.42,0,.76.34.76.76s-.34.76-.76.76-.76-.34-.76-.76.34-.76.76-.76Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M2.15,9.34c1.18,0,2.15-.96,2.15-2.15s-.96-2.15-2.15-2.15-2.15.96-2.15,2.15.96,2.15,2.15,2.15ZM2.15,6.44c.42,0,.76.34.76.76s-.34.76-.76.76-.76-.34-.76-.76.34-.76.76-.76Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M7.19,4.3c1.18,0,2.15-.96,2.15-2.15S8.38,0,7.19,0s-2.15.96-2.15,2.15.96,2.15,2.15,2.15ZM7.19,1.39c.42,0,.76.34.76.76s-.34.76-.76.76-.76-.34-.76-.76.34-.76.76-.76Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M7.19,9.34c1.18,0,2.15-.96,2.15-2.15s-.96-2.15-2.15-2.15-2.15.96-2.15,2.15.96,2.15,2.15,2.15ZM7.19,6.44c.42,0,.76.34.76.76s-.34.76-.76.76-.76-.34-.76-.76.34-.76.76-.76Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M7.19,14.39c1.18,0,2.15-.96,2.15-2.15s-.96-2.15-2.15-2.15-2.15.96-2.15,2.15.96,2.15,2.15,2.15ZM7.19,11.48c.42,0,.76.34.76.76s-.34.76-.76.76-.76-.34-.76-.76.34-.76.76-.76Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M12.24,0c-1.18,0-2.15.96-2.15,2.15s.96,2.15,2.15,2.15,2.15-.96,2.15-2.15S13.42,0,12.24,0ZM12.24,2.9c-.42,0-.76-.34-.76-.76s.34-.76.76-.76.76.34.76.76c0,.42-.34.76-.76.76Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M12.24,5.05c-1.18,0-2.15.96-2.15,2.15s.96,2.15,2.15,2.15,2.15-.96,2.15-2.15-.96-2.15-2.15-2.15ZM12.24,7.95c-.42,0-.76-.34-.76-.76s.34-.76.76-.76.76.34.76.76c0,.42-.34.76-.76.76Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M2.15,14.39c1.18,0,2.15-.96,2.15-2.15s-.96-2.15-2.15-2.15-2.15.96-2.15,2.15.96,2.15,2.15,2.15ZM2.15,11.48c.42,0,.76.34.76.76s-.34.76-.76.76-.76-.34-.76-.76.34-.76.76-.76Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M12.24,10.09c-1.18,0-2.15.96-2.15,2.15s.96,2.15,2.15,2.15,2.15-.96,2.15-2.15-.96-2.15-2.15-2.15ZM12.24,12.99c-.42,0-.76-.34-.76-.76s.34-.76.76-.76.76.34.76.76c0,.42-.34.76-.76.76Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M1.58,2.18l1.14,1.14,1.14-1.14"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M6.62,7.19l1.14,1.14,1.14-1.14"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M11.66,12.2l1.14,1.14,1.14-1.14"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M1.58,12.2l1.14,1.14,1.14-1.14"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M11.66,2.18l1.14,1.14,1.14-1.14"
                })]
              })
            })
          })),
          singleChoice: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 14.15 10.1",
            children: /* @__PURE__ */jsx("g", {
              id: "Isolation_Mode",
              "data-name": "Isolation Mode",
              children: /* @__PURE__ */jsx("path", {
                className: "cls-1",
                d: "M13.85.3c.39.39.39,1.04,0,1.43L5.77,9.81c-.39.39-1.04.39-1.43,0L.3,5.77c-.39-.39-.39-1.04,0-1.43s1.04-.39,1.43,0l3.33,3.32L12.42.3c.39-.39,1.04-.39,1.43,0h0Z"
              })
            })
          })),
          singleIconChoice: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 17.03 17.77",
            children: /* @__PURE__ */jsx("g", {
              id: "Isolation_Mode",
              "data-name": "Isolation Mode",
              children: /* @__PURE__ */jsxs("g", {
                children: [/* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M12.46,9.55c-.79,1.47-2.07,2.63-3.62,3.27-.13.05-.21.18-.21.32v4.29c0,.19.15.34.34.34h7.72c.19,0,.34-.15.34-.34v-7.72c0-.19-.15-.34-.34-.34h-3.93c-.13,0-.24.07-.3.18ZM12.05,15.58l-1.66-1.66c-.14-.14-.14-.37,0-.52l.38-.38c.14-.14.37-.14.52,0l.75.75c.14.14.37.14.52,0l1.94-1.94c.14-.14.37-.14.52,0l.38.38c.14.14.14.37,0,.52l-2.84,2.84c-.14.14-.37.14-.52,0Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M6.17,0C2.77,0,0,2.77,0,6.17s2.77,6.17,6.17,6.17,6.17-2.77,6.17-6.17S9.58,0,6.17,0ZM8.23,3.43c.38,0,.69.31.69.69s-.31.69-.69.69-.69-.31-.69-.69.31-.69.69-.69ZM4.12,3.43c.38,0,.69.31.69.69s-.31.69-.69.69-.69-.31-.69-.69.31-.69.69-.69ZM9.5,7.03c-.39,1.51-1.76,2.57-3.32,2.57s-2.93-1.06-3.32-2.57c-.09-.37.13-.74.49-.84.37-.1.74.13.84.49.23.91,1.05,1.54,1.99,1.54s1.76-.64,1.99-1.54c.1-.37.46-.59.84-.49.37.09.59.47.49.84Z"
                })]
              })
            })
          })),
          singleImageChoice: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 17.23 17.98",
            children: /* @__PURE__ */jsx("g", {
              id: "Isolation_Mode",
              "data-name": "Isolation Mode",
              children: /* @__PURE__ */jsxs("g", {
                children: [/* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M12.61,9.66c-.79,1.48-2.09,2.66-3.66,3.31-.13.05-.22.18-.22.32v4.34c0,.19.16.35.35.35h7.81c.19,0,.35-.16.35-.35v-7.81c0-.19-.16-.35-.35-.35h-3.97c-.13,0-.24.07-.31.18ZM12.19,15.76l-1.68-1.68c-.14-.14-.14-.38,0-.52l.39-.39c.14-.14.38-.14.52,0l.76.76c.14.14.38.14.52,0l1.96-1.96c.14-.14.38-.14.52,0l.39.39c.14.14.14.38,0,.52l-2.87,2.87c-.14.14-.38.14-.52,0Z"
                }), /* @__PURE__ */jsx("g", {
                  id: "Layer_2-2",
                  "data-name": "Layer 2",
                  children: /* @__PURE__ */jsx("g", {
                    id: "scenery",
                    children: /* @__PURE__ */jsx("path", {
                      className: "cls-1",
                      d: "M6.25,0C2.8,0,0,2.8,0,6.25s2.8,6.25,6.25,6.25,6.25-2.8,6.25-6.25S9.69,0,6.25,0ZM7.89,2.24c.76,0,1.37.62,1.37,1.37s-.62,1.37-1.37,1.37-1.37-.62-1.37-1.37c0-.76.62-1.37,1.37-1.37ZM9.58,9.24c-.11.19-.33.31-.58.31H3.49c-.26,0-.48-.12-.59-.31s-.1-.44.03-.66c.65-1.11,1.25-2.14,1.84-3.15.13-.22.33-.34.55-.34h0c.22,0,.43.13.56.35.28.48.56.96.84,1.45l.32.54.11-.19c.08-.14.17-.31.26-.46.12-.21.32-.33.55-.33h0c.22,0,.43.12.55.33.37.64.71,1.23,1.05,1.81.13.22.13.46.02.65h0Z"
                    })
                  })
                })]
              })
            })
          })),
          textDisplay: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 17.59 17.59",
            children: /* @__PURE__ */jsx("g", {
              id: "Isolation_Mode",
              "data-name": "Isolation Mode",
              children: /* @__PURE__ */jsxs("g", {
                children: [/* @__PURE__ */jsxs("g", {
                  children: [/* @__PURE__ */jsx("path", {
                    className: "cls-1",
                    d: "M15.83,0H1.76C.79,0,0,.79,0,1.76v10.55c0,.97.79,1.76,1.76,1.76h14.07c.97,0,1.76-.79,1.76-1.76V1.76c0-.97-.79-1.76-1.76-1.76h0ZM1.76,12.04V1.76h14.07v10.28H1.76Z"
                  }), /* @__PURE__ */jsx("path", {
                    className: "cls-1",
                    d: "M12.31,15.83h-7.03c-.48,0-.88.39-.88.88s.39.88.88.88h7.03c.48,0,.88-.39.88-.88s-.39-.88-.88-.88Z"
                  })]
                }), /* @__PURE__ */jsxs("g", {
                  children: [/* @__PURE__ */jsx("path", {
                    className: "cls-1",
                    d: "M13.15,3.1H4.43c-.38,0-.69.31-.69.69s.31.69.69.69h8.72c.38,0,.69-.31.69-.69s-.31-.69-.69-.69Z"
                  }), /* @__PURE__ */jsx("path", {
                    className: "cls-1",
                    d: "M13.15,5.21H4.43c-.38,0-.69.31-.69.69s.31.69.69.69h8.72c.38,0,.69-.31.69-.69s-.31-.69-.69-.69Z"
                  }), /* @__PURE__ */jsx("path", {
                    className: "cls-1",
                    d: "M13.84,8.01c0-.38-.31-.69-.69-.69H4.43c-.38,0-.69.31-.69.69s.31.69.69.69h8.72c.38,0,.68-.31.69-.69Z"
                  }), /* @__PURE__ */jsx("path", {
                    className: "cls-1",
                    d: "M4.43,9.43c-.38,0-.69.31-.69.69s.31.69.69.69h4.65c.38,0,.69-.31.69-.69s-.31-.69-.69-.69h-4.65Z"
                  })]
                })]
              })
            })
          })),
          time: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            style: {
              fill: "none",
              strokeWidth: "1.5",
              stroke: "#16205b"
            },
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 19.72 19.63",
            children: /* @__PURE__ */jsxs("g", {
              children: [/* @__PURE__ */jsx("circle", {
                cx: "9.86",
                cy: "9.815",
                r: "8.5",
                fill: "none",
                stroke: "#16205b",
                strokeWidth: "2.5"
              }), /* @__PURE__ */jsx("circle", {
                cx: "9.86",
                cy: "9.815",
                r: "7.5",
                fill: "white"
              }), /* @__PURE__ */jsx("rect", {
                x: "9.76",
                y: "3.315",
                width: "0.2",
                height: "6",
                fill: "#16205b"
              }), /* @__PURE__ */jsx("rect", {
                x: "9.76",
                y: "9.815",
                width: "6",
                height: "0.2",
                fill: "#16205b",
                transform: "translate(-4.8, 0)"
              }), /* @__PURE__ */jsx("circle", {
                cx: "9.86",
                cy: "9.815",
                r: "0.6",
                fill: "#16205b"
              })]
            })
          })),
          videoDisplay: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 17.59 17.59",
            children: /* @__PURE__ */jsx("g", {
              id: "Isolation_Mode",
              "data-name": "Isolation Mode",
              children: /* @__PURE__ */jsxs("g", {
                children: [/* @__PURE__ */jsxs("g", {
                  children: [/* @__PURE__ */jsx("path", {
                    className: "cls-1",
                    d: "M15.83,0H1.76C.79,0,0,.79,0,1.76v10.55c0,.97.79,1.76,1.76,1.76h14.07c.97,0,1.76-.79,1.76-1.76V1.76c0-.97-.79-1.76-1.76-1.76h0ZM1.76,12.04V1.76h14.07v10.28H1.76Z"
                  }), /* @__PURE__ */jsx("path", {
                    className: "cls-1",
                    d: "M12.31,15.83h-7.03c-.48,0-.88.39-.88.88s.39.88.88.88h7.03c.48,0,.88-.39.88-.88s-.39-.88-.88-.88Z"
                  })]
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M9.62,3.76h-3.6c-.89,0-1.62.73-1.62,1.62v3c0,.89.73,1.62,1.62,1.62h3.6c.89,0,1.62-.73,1.62-1.62v-.04l.32.25c.31.24.71.28,1.06.12.35-.17.57-.52.57-.91v-1.84c0-.39-.22-.74-.57-.91-.35-.17-.76-.13-1.06.12l-.32.25v-.04c0-.89-.73-1.62-1.62-1.62Z"
                })]
              })
            })
          })),
          settings: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 9.48 10.05",
            children: /* @__PURE__ */jsx("g", {
              id: "Isolation_Mode",
              "data-name": "Isolation Mode",
              children: /* @__PURE__ */jsx("path", {
                className: "cls-1",
                d: "M9.45,3.27c.06.17,0,.36-.13.48l-.85.77c.02.16.03.33.03.5s-.01.34-.03.5l.85.77c.14.12.19.31.13.48-.09.23-.19.46-.31.67l-.09.16c-.13.22-.27.42-.43.61-.12.14-.31.19-.48.13l-1.09-.35c-.26.2-.55.37-.86.5l-.25,1.12c-.04.18-.18.32-.36.35-.27.05-.55.07-.83.07s-.56-.02-.83-.07c-.18-.03-.32-.17-.36-.35l-.25-1.12c-.31-.13-.6-.3-.86-.5l-1.09.35c-.17.05-.37,0-.48-.13-.16-.19-.3-.4-.43-.61l-.09-.16c-.12-.22-.22-.44-.31-.67-.06-.17,0-.36.13-.48l.85-.77c-.02-.16-.03-.33-.03-.5s.01-.34.03-.5l-.85-.77c-.14-.12-.19-.31-.13-.48.09-.23.19-.46.31-.67l.09-.16c.13-.22.27-.42.43-.61.12-.14.31-.19.48-.13l1.09.35c.26-.2.55-.37.86-.5l.25-1.12c.04-.18.18-.32.36-.35.27-.05.55-.07.83-.07s.56.02.83.07c.18.03.32.17.36.35l.25,1.12c.31.13.6.3.86.5l1.09-.35c.17-.05.37,0,.48.13.16.19.3.4.43.61l.09.16c.12.22.22.44.31.67h0ZM4.74,6.6c.87,0,1.57-.7,1.57-1.57s-.7-1.57-1.57-1.57-1.57.7-1.57,1.57.7,1.57,1.57,1.57Z"
              })
            })
          })),
          shrink: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 7.65 20.03",
            children: /* @__PURE__ */jsx("g", {
              id: "Isolation_Mode",
              "data-name": "Isolation Mode",
              children: /* @__PURE__ */jsx("path", {
                className: "cls-1",
                d: "M2.41.73c0-.4.33-.73.73-.73h1.38c.4,0,.73.33.73.73v3.74s1.68,0,1.68,0c.3,0,.56.18.67.45s.05.59-.16.8l-3.09,3.09c-.29.29-.75.29-1.03,0L.21,5.72c-.21-.21-.27-.52-.16-.8s.38-.45.67-.45h1.68V.73ZM.21,14.31l3.1-3.1c.29-.29.75-.29,1.03,0l3.1,3.1c.21.21.27.52.16.8s-.38.45-.67.45h-1.68v3.74c0,.4-.33.73-.73.73h-1.38c-.4,0-.73-.32-.73-.73v-3.74H.73c-.3,0-.56-.18-.67-.45s-.05-.59.16-.8Z"
              })
            })
          })),
          offline: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            id: "Layer_2",
            "data-name": "Layer 2",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 13.4 12.87",
            children: /* @__PURE__ */jsx("g", {
              id: "Isolation_Mode",
              "data-name": "Isolation Mode",
              children: /* @__PURE__ */jsxs("g", {
                children: [/* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M6.22,8.12l1.17-1.17.78-.78L13.4.93l-.93-.93-2.99,2.99c-3.22-1.08-6.92-.34-9.49,2.22l1.14,1.14c1.91-1.9,4.57-2.58,7.03-2.04l-.99.99c-1.87-.19-3.8.43-5.23,1.86l1.14,1.14c.68-.68,1.51-1.11,2.39-1.3L.54,11.94l.93.93,3.12-3.12,1.63-1.63Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M5.2,10.37l1.34,1.42,1.4-1.49,1.14-1.14c-.48-.48-1.07-.8-1.71-.95l-2.17,2.17Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M8.35,7.22c.6.24,1.15.6,1.64,1.08l1.14-1.14c-.47-.47-1-.86-1.56-1.15l-1.22,1.22Z"
                }), /* @__PURE__ */jsx("path", {
                  className: "cls-1",
                  d: "M10.4,5.17c.55.32,1.07.71,1.54,1.18l1.14-1.14c-.47-.47-.97-.87-1.5-1.21l-1.18,1.18Z"
                })]
              })
            })
          })),
          phone: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            id: "Layer_2",
            "data-name": "Layer 2",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 10 16",
            children: /* @__PURE__ */jsx("g", {
              id: "Isolation_Mode",
              "data-name": "Isolation Mode",
              children: /* @__PURE__ */jsx("path", {
                className: "cls-1",
                d: "M2,16h6c1.1,0,2-.9,2-2V2c0-1.11-.9-2-2-2H2C.89,0,0,.89,0,2v12c0,1.1.89,2,2,2ZM1,2h8v12H1V2Z"
              })
            })
          })),
          pc: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            id: "Layer_2",
            "data-name": "Layer 2",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 13.67 9.36",
            children: /* @__PURE__ */jsxs("g", {
              id: "Isolation_Mode",
              "data-name": "Isolation Mode",
              children: [/* @__PURE__ */jsx("path", {
                className: "cls-1",
                d: "M.36,9.36h12.95c.2,0,.36-.16.36-.36V1.08c0-.6-.48-1.08-1.08-1.08H1.08C.48,0,0,.48,0,1.08v7.92c0,.2.16.36.36.36ZM1.08,1.44c0-.2.16-.36.36-.36h10.8c.2,0,.36.16.36.36v6.48c0,.2-.16.36-.36.36H1.44c-.2,0-.36-.16-.36-.36V1.44Z"
              }), /* @__PURE__ */jsx("path", {
                className: "cls-1",
                d: "M15.65,10H.18c-.1,0-.18.08-.18.18v.54c0,.4.32.72.72.72h14.39c.4,0,.72-.32.72-.72V.18c0-.1-.08-.18-.18-.18Z"
              })]
            })
          })),
          launch: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            id: "Layer_2",
            "data-name": "Layer 2",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 9.7 9.7",
            children: /* @__PURE__ */jsx("g", {
              id: "Isolation_Mode",
              "data-name": "Isolation Mode",
              children: /* @__PURE__ */jsx("path", {
                className: "cls-1",
                d: "M9.44.11c.19.13.29.36.26.59l-1.21,7.88c-.03.18-.14.34-.3.44s-.36.1-.53.03l-2.27-.94-1.3,1.4c-.17.18-.43.24-.67.15s-.38-.32-.38-.57v-1.58c0-.08.03-.15.08-.2l3.18-3.47c.11-.12.11-.3,0-.42s-.3-.12-.42-.01l-3.85,3.42-1.67-.84C.13,5.9,0,5.7,0,5.47s.11-.43.31-.54L8.79.08c.2-.12.45-.1.64.03h0Z"
              })
            })
          })),
          sort: props => /* @__PURE__ */jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */jsxs("g", {
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1.5",
              children: [/* @__PURE__ */jsx("path", {
                d: "M2 17.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C3.098 15 3.565 15 4.5 15s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549C7 16.098 7 16.565 7 17.5s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C5.902 20 5.435 20 4.5 20s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C2 18.902 2 18.435 2 17.5Z"
              }), /* @__PURE__ */jsx("path", {
                d: "M9.5 17.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 15 11.065 15 12 15s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C13.402 20 12.935 20 12 20s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.201-.348-.201-.815-.201-1.75Z",
                opacity: ".5"
              }), /* @__PURE__ */jsx("path", {
                d: "M17 17.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C18.098 15 18.565 15 19.5 15s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C17 18.902 17 18.435 17 17.5Z",
                opacity: ".7"
              }), /* @__PURE__ */jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M4.5 15V9c0-2.357 0-3.536.732-4.268S7.143 4 9.5 4h5c2.357 0 3.535 0 4.268.732S19.5 6.643 19.5 9v3m0 0l2-2m-2 2l-2-2"
              })]
            })
          }))
        };
        const SurveyIcon = ({
          name,
          size = "1.5em",
          color = "#16205b"
        }) => {
          const SvgIcon = iconPaths[name];
          if (!SvgIcon) {
            return null;
          }
          return /* @__PURE__ */jsx(SvgIcon, {
            width: size,
            height: size,
            style: {
              fill: color,
              strokeWidth: "0px",
              flexShrink: "0"
            }
          });
        };
        const createQuestion = (type, qId, lang) => {
          let code = `Q${qId}`;
          let returnObj = {};
          let state = {
            type
          };
          let newQuestion = {
            code: `Q${qId}`,
            qualifiedCode: `Q${qId}`,
            type
          };
          returnObj[code] = state;
          returnObj.question = newQuestion;
          switch (type) {
            case "text":
              state.maxChars = 30;
              state.showHint = true;
              break;
            case "number":
              state.maxChars = 30;
              state.showHint = true;
              break;
            case "email":
              state.maxChars = 30;
              state.showHint = true;
              state.validation = {
                validation_pattern_email: {
                  isActive: true
                }
              };
              break;
            case "paragraph":
              state.showHint = true;
              break;
            case "scq":
              returnObj[`Q${qId}A1`] = {};
              returnObj[`Q${qId}A2`] = {};
              returnObj[`Q${qId}A3`] = {};
              state.children = [{
                code: "A1",
                qualifiedCode: `Q${qId}A1`
              }, {
                code: "A2",
                qualifiedCode: `Q${qId}A2`
              }, {
                code: "A3",
                qualifiedCode: `Q${qId}A3`
              }];
              break;
            case "icon_scq":
              state.columns = 3;
              state.iconSize = "150";
              state.spacing = 8;
              returnObj[`Q${qId}A1`] = {};
              returnObj[`Q${qId}A2`] = {};
              returnObj[`Q${qId}A3`] = {};
              state.children = [{
                code: "A1",
                qualifiedCode: `Q${qId}A1`
              }, {
                code: "A2",
                qualifiedCode: `Q${qId}A2`
              }, {
                code: "A3",
                qualifiedCode: `Q${qId}A3`
              }];
              break;
            case "image_scq":
              state.columns = 3;
              state.imageAspectRatio = 1;
              state.spacing = 8;
              returnObj[`Q${qId}A1`] = {};
              returnObj[`Q${qId}A2`] = {};
              returnObj[`Q${qId}A3`] = {};
              state.children = [{
                code: "A1",
                qualifiedCode: `Q${qId}A1`
              }, {
                code: "A2",
                qualifiedCode: `Q${qId}A2`
              }, {
                code: "A3",
                qualifiedCode: `Q${qId}A3`
              }];
              break;
            case "multiple_text":
              returnObj[`Q${qId}A1`] = {};
              returnObj[`Q${qId}A2`] = {};
              returnObj[`Q${qId}A3`] = {};
              state.children = [{
                code: "A1",
                qualifiedCode: `Q${qId}A1`
              }, {
                code: "A2",
                qualifiedCode: `Q${qId}A2`
              }, {
                code: "A3",
                qualifiedCode: `Q${qId}A3`
              }];
              break;
            case "mcq":
              returnObj[`Q${qId}A1`] = {};
              returnObj[`Q${qId}A2`] = {};
              returnObj[`Q${qId}A3`] = {};
              state.children = [{
                code: "A1",
                qualifiedCode: `Q${qId}A1`
              }, {
                code: "A2",
                qualifiedCode: `Q${qId}A2`
              }, {
                code: "A3",
                qualifiedCode: `Q${qId}A3`
              }];
              break;
            case "image_ranking":
              state.columns = 3;
              state.imageAspectRatio = 1;
              state.spacing = 8;
              returnObj[`Q${qId}A1`] = {};
              returnObj[`Q${qId}A2`] = {};
              returnObj[`Q${qId}A3`] = {};
              state.children = [{
                code: "A1",
                qualifiedCode: `Q${qId}A1`
              }, {
                code: "A2",
                qualifiedCode: `Q${qId}A2`
              }, {
                code: "A3",
                qualifiedCode: `Q${qId}A3`
              }];
              break;
            case "ranking":
              returnObj[`Q${qId}A1`] = {};
              returnObj[`Q${qId}A2`] = {};
              returnObj[`Q${qId}A3`] = {};
              state.children = [{
                code: "A1",
                qualifiedCode: `Q${qId}A1`
              }, {
                code: "A2",
                qualifiedCode: `Q${qId}A2`
              }, {
                code: "A3",
                qualifiedCode: `Q${qId}A3`
              }];
              break;
            case "nps":
              break;
            case "icon_mcq":
              state.columns = 3;
              state.iconSize = "150";
              state.spacing = 8;
              returnObj[`Q${qId}A1`] = {};
              returnObj[`Q${qId}A2`] = {};
              returnObj[`Q${qId}A3`] = {};
              state.children = [{
                code: "A1",
                qualifiedCode: `Q${qId}A1`
              }, {
                code: "A2",
                qualifiedCode: `Q${qId}A2`
              }, {
                code: "A3",
                qualifiedCode: `Q${qId}A3`
              }];
              break;
            case "image_mcq":
              state.columns = 3;
              state.imageAspectRatio = 1;
              state.spacing = 8;
              returnObj[`Q${qId}A1`] = {};
              returnObj[`Q${qId}A2`] = {};
              returnObj[`Q${qId}A3`] = {};
              state.children = [{
                code: "A1",
                qualifiedCode: `Q${qId}A1`
              }, {
                code: "A2",
                qualifiedCode: `Q${qId}A2`
              }, {
                code: "A3",
                qualifiedCode: `Q${qId}A3`
              }];
              break;
            case "scq_icon_array":
              returnObj[`Q${qId}Ac1`] = {
                type: "column"
              };
              returnObj[`Q${qId}Ac2`] = {
                type: "column"
              };
              returnObj[`Q${qId}Ac3`] = {
                type: "column"
              };
              returnObj[`Q${qId}A1`] = {
                type: "row"
              };
              returnObj[`Q${qId}A2`] = {
                type: "row"
              };
              returnObj[`Q${qId}A3`] = {
                type: "row"
              };
              state.children = [{
                code: "Ac1",
                qualifiedCode: `Q${qId}Ac1`,
                type: "column"
              }, {
                code: "Ac2",
                qualifiedCode: `Q${qId}Ac2`,
                type: "column"
              }, {
                code: "Ac3",
                qualifiedCode: `Q${qId}Ac3`,
                type: "column"
              }, {
                code: "A1",
                qualifiedCode: `Q${qId}A1`,
                type: "row"
              }, {
                code: "A2",
                qualifiedCode: `Q${qId}A2`,
                type: "row"
              }, {
                code: "A3",
                qualifiedCode: `Q${qId}A3`,
                type: "row"
              }];
              break;
            case "scq_array":
            case "mcq_array":
              returnObj[`Q${qId}Ac1`] = {
                type: "column"
              };
              returnObj[`Q${qId}Ac2`] = {
                type: "column"
              };
              returnObj[`Q${qId}Ac3`] = {
                type: "column"
              };
              returnObj[`Q${qId}A1`] = {
                type: "row"
              };
              returnObj[`Q${qId}A2`] = {
                type: "row"
              };
              returnObj[`Q${qId}A3`] = {
                type: "row"
              };
              state.children = [{
                code: "Ac1",
                qualifiedCode: `Q${qId}Ac1`,
                type: "column"
              }, {
                code: "Ac2",
                qualifiedCode: `Q${qId}Ac2`,
                type: "column"
              }, {
                code: "Ac3",
                qualifiedCode: `Q${qId}Ac3`,
                type: "column"
              }, {
                code: "A1",
                qualifiedCode: `Q${qId}A1`,
                type: "row"
              }, {
                code: "A2",
                qualifiedCode: `Q${qId}A2`,
                type: "row"
              }, {
                code: "A3",
                qualifiedCode: `Q${qId}A3`,
                type: "row"
              }];
              break;
            case "file_upload":
            case "signature":
            case "photo_capture":
            case "video_capture":
            case "barcode":
              break;
            case "date":
              state.type = "date";
              state.dateFormat = "YYYY/MM/DD";
              state.maxDate = "";
              state.minDate = "";
              break;
            case "date_time":
              state.dateFormat = "YYYY/MM/DD";
              state.fullDayFormat = false;
              state.maxDate = "";
              state.minDate = "";
              break;
            case "time":
              state.fullDayFormat = false;
              break;
          }
          return returnObj;
        };
        const questionDesignError = question => {
          let errors = [];
          switch (question.type) {
            case "scq_icon_array":
            case "scq_array":
            case "mcq_array":
              if (!question.children || question.children.filter(child => child.type == "row").length === 0) {
                errors.push({
                  code: "insufficient_rows_min_1",
                  message: "must have at least 1 row"
                });
              }
              if (!question.children || question.children.filter(child => child.type == "column").length < 2) {
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
            case "multiple_text":
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
        const questionIconByType = (type, size = "1.25em", color) => {
          switch (type) {
            case "text":
              return /* @__PURE__ */jsx(SurveyIcon, {
                name: "shortText",
                size,
                color
              });
            case "multiple_text":
              return /* @__PURE__ */jsx(SurveyIcon, {
                name: "multipleText",
                size,
                color
              });
            case "paragraph":
              return /* @__PURE__ */jsx(SurveyIcon, {
                name: "longText",
                size,
                color
              });
            case "autocomplete":
              return /* @__PURE__ */jsx(SurveyIcon, {
                name: "autocomplete",
                size,
                color
              });
            case "barcode":
              return /* @__PURE__ */jsx(SurveyIcon, {
                name: "qrCode",
                size,
                color
              });
            case "number":
              return /* @__PURE__ */jsx(SurveyIcon, {
                name: "number",
                size,
                color
              });
            case "email":
              return /* @__PURE__ */jsx(SurveyIcon, {
                name: "email",
                size,
                color
              });
            case "scq":
              return /* @__PURE__ */jsx(SurveyIcon, {
                name: "singleChoice",
                size,
                color
              });
            case "icon_scq":
              return /* @__PURE__ */jsx(SurveyIcon, {
                name: "singleIconChoice",
                size,
                color
              });
            case "image_scq":
              return /* @__PURE__ */jsx(SurveyIcon, {
                name: "singleImageChoice",
                size,
                color
              });
            case "scq_icon_array":
            case "scq_array":
              return /* @__PURE__ */jsx(SurveyIcon, {
                name: "singleChoiceArray",
                size,
                color
              });
            case "mcq_array":
              return /* @__PURE__ */jsx(SurveyIcon, {
                name: "multipleChoiceArray",
                size,
                color
              });
            case "mcq":
              return /* @__PURE__ */jsx(SurveyIcon, {
                name: "multipleChoice",
                size,
                color
              });
            case "icon_mcq":
              return /* @__PURE__ */jsx(SurveyIcon, {
                name: "multipleIconChoice",
                size,
                color
              });
            case "image_mcq":
              return /* @__PURE__ */jsx(SurveyIcon, {
                name: "multipleImageChoice",
                size,
                color
              });
            case "nps":
              return /* @__PURE__ */jsx(SurveyIcon, {
                name: "nps",
                size,
                color
              });
            case "date":
              return /* @__PURE__ */jsx(SurveyIcon, {
                name: "date",
                size,
                color
              });
            case "date_time":
              return /* @__PURE__ */jsx(SurveyIcon, {
                name: "datetime",
                size,
                color
              });
            case "time":
              return /* @__PURE__ */jsx(SurveyIcon, {
                name: "time",
                size,
                color
              });
            case "file_upload":
              return /* @__PURE__ */jsx(SurveyIcon, {
                name: "fileUpload",
                size,
                color
              });
            case "signature":
              return /* @__PURE__ */jsx(SurveyIcon, {
                name: "signature",
                size,
                color
              });
            case "photo_capture":
              return /* @__PURE__ */jsx(SurveyIcon, {
                name: "capturePhoto",
                size,
                color
              });
            case "video_capture":
              return /* @__PURE__ */jsx(SurveyIcon, {
                name: "captureVideo",
                size,
                color
              });
            case "ranking":
              return /* @__PURE__ */jsx(SurveyIcon, {
                name: "ranking",
                size,
                color
              });
            case "image_ranking":
              return /* @__PURE__ */jsx(SurveyIcon, {
                name: "imageRanking",
                size,
                color
              });
            case "text_display":
              return /* @__PURE__ */jsx(SurveyIcon, {
                name: "textDisplay",
                size,
                color
              });
            case "image_display":
              return /* @__PURE__ */jsx(SurveyIcon, {
                name: "imageDisplay",
                size,
                color
              });
            case "video_display":
              return /* @__PURE__ */jsx(SurveyIcon, {
                name: "videoDisplay",
                size,
                color
              });
          }
        };
        function hexToRgb(hex) {
          const bigint = parseInt(hex.slice(1), 16);
          const r = bigint >> 16 & 255;
          const g = bigint >> 8 & 255;
          const b = bigint & 255;
          return [r, g, b];
        }
        function rgbToHex(r, g, b) {
          return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        }
        function blendColors(color1, color2, opacity) {
          const r = Math.round(color1[0] * (1 - opacity) + color2[0] * opacity);
          const g = Math.round(color1[1] * (1 - opacity) + color2[1] * opacity);
          const b = Math.round(color1[2] * (1 - opacity) + color2[2] * opacity);
          return [r, g, b];
        }
        const getContrastColor = exports("h", (hexColor, opacity = 0.2) => {
          const rgbColor = hexToRgb(hexColor);
          const luminance = (0.299 * rgbColor[0] + 0.587 * rgbColor[1] + 0.114 * rgbColor[2]) / 255;
          const contrastRgb = luminance > 0.5 ? [0, 0, 0] : [255, 255, 255];
          const effectiveOpacity = luminance > 0.5 ? opacity : 1 - opacity;
          const blendedRgb = blendColors(rgbColor, contrastRgb, effectiveOpacity);
          return rgbToHex(...blendedRgb);
        });
        const colorToThemeMode = color => {
          const whiteContrast = getContrastRatio(color, "#ffffff");
          const blackContrast = getContrastRatio(color, "#000000");
          return whiteContrast > blackContrast ? "light" : "dark";
        };
        const QUESTION_TYPES = [{
          name: "section_text_based",
          type: "text",
          items: [{
            type: "text",
            icon: questionIconByType("text")
          }, {
            type: "paragraph",
            icon: questionIconByType("paragraph")
          }, {
            type: "number",
            icon: questionIconByType("number")
          }, {
            type: "email",
            icon: questionIconByType("email")
          }, {
            type: "multiple_text",
            icon: questionIconByType("multiple_text")
          }]
        }, {
          name: "section_choice_based",
          type: "choice",
          items: [{
            type: "scq",
            icon: questionIconByType("scq")
          }, {
            type: "mcq",
            icon: questionIconByType("mcq")
          }, {
            type: "autocomplete",
            icon: questionIconByType("autocomplete")
          }, {
            type: "scq_array",
            icon: questionIconByType("scq_array")
          }, {
            type: "mcq_array",
            icon: questionIconByType("mcq_array")
          }, {
            type: "nps",
            icon: questionIconByType("nps")
          }]
        },, {
          name: "section_image_choice_based",
          type: "choice",
          items: [{
            type: "icon_scq",
            icon: questionIconByType("icon_scq")
          }, {
            type: "image_scq",
            icon: questionIconByType("image_scq")
          }, {
            type: "scq_icon_array",
            icon: questionIconByType("scq_icon_array")
          }, {
            type: "icon_mcq",
            icon: questionIconByType("icon_mcq")
          }, {
            type: "image_mcq",
            icon: questionIconByType("image_mcq")
          }]
        }, {
          name: "section_date_time",
          type: "date-time",
          items: [{
            type: "date",
            icon: questionIconByType("date")
          }, {
            type: "time",
            icon: questionIconByType("time")
          }, {
            type: "date_time",
            icon: questionIconByType("date_time")
          }]
        }, {
          name: "section_info",
          type: "info",
          items: [{
            type: "text_display",
            icon: questionIconByType("text_display")
          }, {
            type: "image_display",
            icon: questionIconByType("image_display")
          }, {
            type: "video_display",
            icon: questionIconByType("video_display")
          }]
        }, {
          name: "offline_only",
          type: "other",
          items: [{
            type: "barcode",
            offlineOnly: true,
            icon: questionIconByType("barcode")
          }, {
            type: "photo_capture",
            offlineOnly: true,
            icon: questionIconByType("photo_capture")
          }, {
            type: "video_capture",
            offlineOnly: true,
            icon: questionIconByType("video_capture")
          }]
        }, {
          name: "section_other",
          type: "other",
          items: [{
            type: "ranking",
            icon: questionIconByType("ranking")
          }, {
            type: "image_ranking",
            icon: questionIconByType("image_ranking")
          }, {
            type: "file_upload",
            icon: questionIconByType("file_upload")
          }, {
            type: "signature",
            icon: questionIconByType("signature")
          }]
        }];
        const createGroup = (groupType, gId) => {
          let code = `G${gId}`;
          let state = {
            groupType
          };
          let newGroup = {
            code,
            qualifiedCode: code,
            type: groupType.toLowerCase(),
            groupType
          };
          return {
            newGroup,
            state
          };
        };
        const groups = [{
          name: "section_sections",
          type: "sections",
          items: [{
            idType: 2,
            type: "group",
            icon: /* @__PURE__ */jsx(FormatListBulleted, {
              style: {
                color: "#16205b"
              }
            })
          }]
        }];
        function NewComponentsPanel({
          t
        }) {
          const dispatch = useDispatch();
          const handleAddComponent = (type, questionType) => {
            dispatch(addComponent({
              type,
              questionType
            }));
          };
          return /* @__PURE__ */jsxs("div", {
            className: styles$d.leftContent,
            children: [groups.map((item, index) => /* @__PURE__ */jsxs("div", {
              "data-tour": "add-page",
              className: styles$d.leftPanelGroupItem,
              children: [/* @__PURE__ */jsx("div", {
                className: styles$d.groupTitle,
                children: t(item.name)
              }), /* @__PURE__ */jsx("div", {
                className: styles$d.leftItems,
                children: item.items.map((question, index2) => {
                  const dragItem = {
                    type: "groups",
                    itemType: question.type,
                    droppableId: "new-groups",
                    draggableId: question.type,
                    icon: question.icon
                  };
                  return /* @__PURE__ */jsx("div", {
                    className: "Draggable",
                    children: /* @__PURE__ */jsx(NewComponentsItem, {
                      t,
                      item: dragItem,
                      onClick: () => handleAddComponent("group", question.type)
                    })
                  }, question.type);
                })
              })]
            }, index)), /* @__PURE__ */jsx("div", {
              "data-tour": "question-types-list",
              children: QUESTION_TYPES.map((item, index) => /* @__PURE__ */jsxs("div", {
                "data-tour": "question-types",
                className: styles$d.leftPanelGroupItem,
                children: [/* @__PURE__ */jsx("div", {
                  className: styles$d.groupTitle,
                  children: t(item.name)
                }), item.items.map((question, index2) => {
                  const dragItem = {
                    type: "new-questions",
                    itemType: question.type,
                    offlineOnly: question.offlineOnly || false,
                    droppableId: "new-questions",
                    draggableId: question.type,
                    icon: question.icon
                  };
                  return /* @__PURE__ */jsx("div", {
                    children: /* @__PURE__ */jsx("div", {
                      className: "Draggable",
                      children: /* @__PURE__ */jsx(NewComponentsItem, {
                        t,
                        item: dragItem,
                        onClick: () => handleAddComponent("question", question.type)
                      })
                    })
                  }, `draggable-${index2}`);
                })]
              }, index))
            })]
          });
        }
        React.memo(NewComponentsPanel);
        var lodash_clonedeep = {
          exports: {}
        };

        /**
         * lodash (Custom Build) <https://lodash.com/>
         * Build: `lodash modularize exports="npm" -o ./`
         * Copyright jQuery Foundation and other contributors <https://jquery.org/>
         * Released under MIT license <https://lodash.com/license>
         * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
         * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
         */
        lodash_clonedeep.exports;
        (function (module, exports$1) {
          /** Used as the size to enable large array optimizations. */
          var LARGE_ARRAY_SIZE = 200;

          /** Used to stand-in for `undefined` hash values. */
          var HASH_UNDEFINED = '__lodash_hash_undefined__';

          /** Used as references for various `Number` constants. */
          var MAX_SAFE_INTEGER = 9007199254740991;

          /** `Object#toString` result references. */
          var argsTag = '[object Arguments]',
            arrayTag = '[object Array]',
            boolTag = '[object Boolean]',
            dateTag = '[object Date]',
            errorTag = '[object Error]',
            funcTag = '[object Function]',
            genTag = '[object GeneratorFunction]',
            mapTag = '[object Map]',
            numberTag = '[object Number]',
            objectTag = '[object Object]',
            promiseTag = '[object Promise]',
            regexpTag = '[object RegExp]',
            setTag = '[object Set]',
            stringTag = '[object String]',
            symbolTag = '[object Symbol]',
            weakMapTag = '[object WeakMap]';
          var arrayBufferTag = '[object ArrayBuffer]',
            dataViewTag = '[object DataView]',
            float32Tag = '[object Float32Array]',
            float64Tag = '[object Float64Array]',
            int8Tag = '[object Int8Array]',
            int16Tag = '[object Int16Array]',
            int32Tag = '[object Int32Array]',
            uint8Tag = '[object Uint8Array]',
            uint8ClampedTag = '[object Uint8ClampedArray]',
            uint16Tag = '[object Uint16Array]',
            uint32Tag = '[object Uint32Array]';

          /**
           * Used to match `RegExp`
           * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
           */
          var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

          /** Used to match `RegExp` flags from their coerced string values. */
          var reFlags = /\w*$/;

          /** Used to detect host constructors (Safari). */
          var reIsHostCtor = /^\[object .+?Constructor\]$/;

          /** Used to detect unsigned integer values. */
          var reIsUint = /^(?:0|[1-9]\d*)$/;

          /** Used to identify `toStringTag` values supported by `_.clone`. */
          var cloneableTags = {};
          cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
          cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;

          /** Detect free variable `global` from Node.js. */
          var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

          /** Detect free variable `self`. */
          var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

          /** Used as a reference to the global object. */
          var root = freeGlobal || freeSelf || Function('return this')();

          /** Detect free variable `exports`. */
          var freeExports = exports$1 && !exports$1.nodeType && exports$1;

          /** Detect free variable `module`. */
          var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

          /** Detect the popular CommonJS extension `module.exports`. */
          var moduleExports = freeModule && freeModule.exports === freeExports;

          /**
           * Adds the key-value `pair` to `map`.
           *
           * @private
           * @param {Object} map The map to modify.
           * @param {Array} pair The key-value pair to add.
           * @returns {Object} Returns `map`.
           */
          function addMapEntry(map, pair) {
            // Don't return `map.set` because it's not chainable in IE 11.
            map.set(pair[0], pair[1]);
            return map;
          }

          /**
           * Adds `value` to `set`.
           *
           * @private
           * @param {Object} set The set to modify.
           * @param {*} value The value to add.
           * @returns {Object} Returns `set`.
           */
          function addSetEntry(set, value) {
            // Don't return `set.add` because it's not chainable in IE 11.
            set.add(value);
            return set;
          }

          /**
           * A specialized version of `_.forEach` for arrays without support for
           * iteratee shorthands.
           *
           * @private
           * @param {Array} [array] The array to iterate over.
           * @param {Function} iteratee The function invoked per iteration.
           * @returns {Array} Returns `array`.
           */
          function arrayEach(array, iteratee) {
            var index = -1,
              length = array ? array.length : 0;
            while (++index < length) {
              if (iteratee(array[index], index, array) === false) {
                break;
              }
            }
            return array;
          }

          /**
           * Appends the elements of `values` to `array`.
           *
           * @private
           * @param {Array} array The array to modify.
           * @param {Array} values The values to append.
           * @returns {Array} Returns `array`.
           */
          function arrayPush(array, values) {
            var index = -1,
              length = values.length,
              offset = array.length;
            while (++index < length) {
              array[offset + index] = values[index];
            }
            return array;
          }

          /**
           * A specialized version of `_.reduce` for arrays without support for
           * iteratee shorthands.
           *
           * @private
           * @param {Array} [array] The array to iterate over.
           * @param {Function} iteratee The function invoked per iteration.
           * @param {*} [accumulator] The initial value.
           * @param {boolean} [initAccum] Specify using the first element of `array` as
           *  the initial value.
           * @returns {*} Returns the accumulated value.
           */
          function arrayReduce(array, iteratee, accumulator, initAccum) {
            var index = -1,
              length = array ? array.length : 0;
            while (++index < length) {
              accumulator = iteratee(accumulator, array[index], index, array);
            }
            return accumulator;
          }

          /**
           * The base implementation of `_.times` without support for iteratee shorthands
           * or max array length checks.
           *
           * @private
           * @param {number} n The number of times to invoke `iteratee`.
           * @param {Function} iteratee The function invoked per iteration.
           * @returns {Array} Returns the array of results.
           */
          function baseTimes(n, iteratee) {
            var index = -1,
              result = Array(n);
            while (++index < n) {
              result[index] = iteratee(index);
            }
            return result;
          }

          /**
           * Gets the value at `key` of `object`.
           *
           * @private
           * @param {Object} [object] The object to query.
           * @param {string} key The key of the property to get.
           * @returns {*} Returns the property value.
           */
          function getValue(object, key) {
            return object == null ? undefined : object[key];
          }

          /**
           * Checks if `value` is a host object in IE < 9.
           *
           * @private
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
           */
          function isHostObject(value) {
            // Many host objects are `Object` objects that can coerce to strings
            // despite having improperly defined `toString` methods.
            var result = false;
            if (value != null && typeof value.toString != 'function') {
              try {
                result = !!(value + '');
              } catch (e) {}
            }
            return result;
          }

          /**
           * Converts `map` to its key-value pairs.
           *
           * @private
           * @param {Object} map The map to convert.
           * @returns {Array} Returns the key-value pairs.
           */
          function mapToArray(map) {
            var index = -1,
              result = Array(map.size);
            map.forEach(function (value, key) {
              result[++index] = [key, value];
            });
            return result;
          }

          /**
           * Creates a unary function that invokes `func` with its argument transformed.
           *
           * @private
           * @param {Function} func The function to wrap.
           * @param {Function} transform The argument transform.
           * @returns {Function} Returns the new function.
           */
          function overArg(func, transform) {
            return function (arg) {
              return func(transform(arg));
            };
          }

          /**
           * Converts `set` to an array of its values.
           *
           * @private
           * @param {Object} set The set to convert.
           * @returns {Array} Returns the values.
           */
          function setToArray(set) {
            var index = -1,
              result = Array(set.size);
            set.forEach(function (value) {
              result[++index] = value;
            });
            return result;
          }

          /** Used for built-in method references. */
          var arrayProto = Array.prototype,
            funcProto = Function.prototype,
            objectProto = Object.prototype;

          /** Used to detect overreaching core-js shims. */
          var coreJsData = root['__core-js_shared__'];

          /** Used to detect methods masquerading as native. */
          var maskSrcKey = function () {
            var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
            return uid ? 'Symbol(src)_1.' + uid : '';
          }();

          /** Used to resolve the decompiled source of functions. */
          var funcToString = funcProto.toString;

          /** Used to check objects for own properties. */
          var hasOwnProperty = objectProto.hasOwnProperty;

          /**
           * Used to resolve the
           * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
           * of values.
           */
          var objectToString = objectProto.toString;

          /** Used to detect if a method is native. */
          var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

          /** Built-in value references. */
          var Buffer = moduleExports ? root.Buffer : undefined,
            Symbol = root.Symbol,
            Uint8Array = root.Uint8Array,
            getPrototype = overArg(Object.getPrototypeOf, Object),
            objectCreate = Object.create,
            propertyIsEnumerable = objectProto.propertyIsEnumerable,
            splice = arrayProto.splice;

          /* Built-in method references for those with the same name as other `lodash` methods. */
          var nativeGetSymbols = Object.getOwnPropertySymbols,
            nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
            nativeKeys = overArg(Object.keys, Object);

          /* Built-in method references that are verified to be native. */
          var DataView = getNative(root, 'DataView'),
            Map = getNative(root, 'Map'),
            Promise = getNative(root, 'Promise'),
            Set = getNative(root, 'Set'),
            WeakMap = getNative(root, 'WeakMap'),
            nativeCreate = getNative(Object, 'create');

          /** Used to detect maps, sets, and weakmaps. */
          var dataViewCtorString = toSource(DataView),
            mapCtorString = toSource(Map),
            promiseCtorString = toSource(Promise),
            setCtorString = toSource(Set),
            weakMapCtorString = toSource(WeakMap);

          /** Used to convert symbols to primitives and strings. */
          var symbolProto = Symbol ? Symbol.prototype : undefined,
            symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

          /**
           * Creates a hash object.
           *
           * @private
           * @constructor
           * @param {Array} [entries] The key-value pairs to cache.
           */
          function Hash(entries) {
            var index = -1,
              length = entries ? entries.length : 0;
            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }

          /**
           * Removes all key-value entries from the hash.
           *
           * @private
           * @name clear
           * @memberOf Hash
           */
          function hashClear() {
            this.__data__ = nativeCreate ? nativeCreate(null) : {};
          }

          /**
           * Removes `key` and its value from the hash.
           *
           * @private
           * @name delete
           * @memberOf Hash
           * @param {Object} hash The hash to modify.
           * @param {string} key The key of the value to remove.
           * @returns {boolean} Returns `true` if the entry was removed, else `false`.
           */
          function hashDelete(key) {
            return this.has(key) && delete this.__data__[key];
          }

          /**
           * Gets the hash value for `key`.
           *
           * @private
           * @name get
           * @memberOf Hash
           * @param {string} key The key of the value to get.
           * @returns {*} Returns the entry value.
           */
          function hashGet(key) {
            var data = this.__data__;
            if (nativeCreate) {
              var result = data[key];
              return result === HASH_UNDEFINED ? undefined : result;
            }
            return hasOwnProperty.call(data, key) ? data[key] : undefined;
          }

          /**
           * Checks if a hash value for `key` exists.
           *
           * @private
           * @name has
           * @memberOf Hash
           * @param {string} key The key of the entry to check.
           * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
           */
          function hashHas(key) {
            var data = this.__data__;
            return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
          }

          /**
           * Sets the hash `key` to `value`.
           *
           * @private
           * @name set
           * @memberOf Hash
           * @param {string} key The key of the value to set.
           * @param {*} value The value to set.
           * @returns {Object} Returns the hash instance.
           */
          function hashSet(key, value) {
            var data = this.__data__;
            data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
            return this;
          }

          // Add methods to `Hash`.
          Hash.prototype.clear = hashClear;
          Hash.prototype['delete'] = hashDelete;
          Hash.prototype.get = hashGet;
          Hash.prototype.has = hashHas;
          Hash.prototype.set = hashSet;

          /**
           * Creates an list cache object.
           *
           * @private
           * @constructor
           * @param {Array} [entries] The key-value pairs to cache.
           */
          function ListCache(entries) {
            var index = -1,
              length = entries ? entries.length : 0;
            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }

          /**
           * Removes all key-value entries from the list cache.
           *
           * @private
           * @name clear
           * @memberOf ListCache
           */
          function listCacheClear() {
            this.__data__ = [];
          }

          /**
           * Removes `key` and its value from the list cache.
           *
           * @private
           * @name delete
           * @memberOf ListCache
           * @param {string} key The key of the value to remove.
           * @returns {boolean} Returns `true` if the entry was removed, else `false`.
           */
          function listCacheDelete(key) {
            var data = this.__data__,
              index = assocIndexOf(data, key);
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

          /**
           * Gets the list cache value for `key`.
           *
           * @private
           * @name get
           * @memberOf ListCache
           * @param {string} key The key of the value to get.
           * @returns {*} Returns the entry value.
           */
          function listCacheGet(key) {
            var data = this.__data__,
              index = assocIndexOf(data, key);
            return index < 0 ? undefined : data[index][1];
          }

          /**
           * Checks if a list cache value for `key` exists.
           *
           * @private
           * @name has
           * @memberOf ListCache
           * @param {string} key The key of the entry to check.
           * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
           */
          function listCacheHas(key) {
            return assocIndexOf(this.__data__, key) > -1;
          }

          /**
           * Sets the list cache `key` to `value`.
           *
           * @private
           * @name set
           * @memberOf ListCache
           * @param {string} key The key of the value to set.
           * @param {*} value The value to set.
           * @returns {Object} Returns the list cache instance.
           */
          function listCacheSet(key, value) {
            var data = this.__data__,
              index = assocIndexOf(data, key);
            if (index < 0) {
              data.push([key, value]);
            } else {
              data[index][1] = value;
            }
            return this;
          }

          // Add methods to `ListCache`.
          ListCache.prototype.clear = listCacheClear;
          ListCache.prototype['delete'] = listCacheDelete;
          ListCache.prototype.get = listCacheGet;
          ListCache.prototype.has = listCacheHas;
          ListCache.prototype.set = listCacheSet;

          /**
           * Creates a map cache object to store key-value pairs.
           *
           * @private
           * @constructor
           * @param {Array} [entries] The key-value pairs to cache.
           */
          function MapCache(entries) {
            var index = -1,
              length = entries ? entries.length : 0;
            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }

          /**
           * Removes all key-value entries from the map.
           *
           * @private
           * @name clear
           * @memberOf MapCache
           */
          function mapCacheClear() {
            this.__data__ = {
              'hash': new Hash(),
              'map': new (Map || ListCache)(),
              'string': new Hash()
            };
          }

          /**
           * Removes `key` and its value from the map.
           *
           * @private
           * @name delete
           * @memberOf MapCache
           * @param {string} key The key of the value to remove.
           * @returns {boolean} Returns `true` if the entry was removed, else `false`.
           */
          function mapCacheDelete(key) {
            return getMapData(this, key)['delete'](key);
          }

          /**
           * Gets the map value for `key`.
           *
           * @private
           * @name get
           * @memberOf MapCache
           * @param {string} key The key of the value to get.
           * @returns {*} Returns the entry value.
           */
          function mapCacheGet(key) {
            return getMapData(this, key).get(key);
          }

          /**
           * Checks if a map value for `key` exists.
           *
           * @private
           * @name has
           * @memberOf MapCache
           * @param {string} key The key of the entry to check.
           * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
           */
          function mapCacheHas(key) {
            return getMapData(this, key).has(key);
          }

          /**
           * Sets the map `key` to `value`.
           *
           * @private
           * @name set
           * @memberOf MapCache
           * @param {string} key The key of the value to set.
           * @param {*} value The value to set.
           * @returns {Object} Returns the map cache instance.
           */
          function mapCacheSet(key, value) {
            getMapData(this, key).set(key, value);
            return this;
          }

          // Add methods to `MapCache`.
          MapCache.prototype.clear = mapCacheClear;
          MapCache.prototype['delete'] = mapCacheDelete;
          MapCache.prototype.get = mapCacheGet;
          MapCache.prototype.has = mapCacheHas;
          MapCache.prototype.set = mapCacheSet;

          /**
           * Creates a stack cache object to store key-value pairs.
           *
           * @private
           * @constructor
           * @param {Array} [entries] The key-value pairs to cache.
           */
          function Stack(entries) {
            this.__data__ = new ListCache(entries);
          }

          /**
           * Removes all key-value entries from the stack.
           *
           * @private
           * @name clear
           * @memberOf Stack
           */
          function stackClear() {
            this.__data__ = new ListCache();
          }

          /**
           * Removes `key` and its value from the stack.
           *
           * @private
           * @name delete
           * @memberOf Stack
           * @param {string} key The key of the value to remove.
           * @returns {boolean} Returns `true` if the entry was removed, else `false`.
           */
          function stackDelete(key) {
            return this.__data__['delete'](key);
          }

          /**
           * Gets the stack value for `key`.
           *
           * @private
           * @name get
           * @memberOf Stack
           * @param {string} key The key of the value to get.
           * @returns {*} Returns the entry value.
           */
          function stackGet(key) {
            return this.__data__.get(key);
          }

          /**
           * Checks if a stack value for `key` exists.
           *
           * @private
           * @name has
           * @memberOf Stack
           * @param {string} key The key of the entry to check.
           * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
           */
          function stackHas(key) {
            return this.__data__.has(key);
          }

          /**
           * Sets the stack `key` to `value`.
           *
           * @private
           * @name set
           * @memberOf Stack
           * @param {string} key The key of the value to set.
           * @param {*} value The value to set.
           * @returns {Object} Returns the stack cache instance.
           */
          function stackSet(key, value) {
            var cache = this.__data__;
            if (cache instanceof ListCache) {
              var pairs = cache.__data__;
              if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
                pairs.push([key, value]);
                return this;
              }
              cache = this.__data__ = new MapCache(pairs);
            }
            cache.set(key, value);
            return this;
          }

          // Add methods to `Stack`.
          Stack.prototype.clear = stackClear;
          Stack.prototype['delete'] = stackDelete;
          Stack.prototype.get = stackGet;
          Stack.prototype.has = stackHas;
          Stack.prototype.set = stackSet;

          /**
           * Creates an array of the enumerable property names of the array-like `value`.
           *
           * @private
           * @param {*} value The value to query.
           * @param {boolean} inherited Specify returning inherited property names.
           * @returns {Array} Returns the array of property names.
           */
          function arrayLikeKeys(value, inherited) {
            // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
            // Safari 9 makes `arguments.length` enumerable in strict mode.
            var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];
            var length = result.length,
              skipIndexes = !!length;
            for (var key in value) {
              if (hasOwnProperty.call(value, key) && !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
                result.push(key);
              }
            }
            return result;
          }

          /**
           * Assigns `value` to `key` of `object` if the existing value is not equivalent
           * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
           * for equality comparisons.
           *
           * @private
           * @param {Object} object The object to modify.
           * @param {string} key The key of the property to assign.
           * @param {*} value The value to assign.
           */
          function assignValue(object, key, value) {
            var objValue = object[key];
            if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
              object[key] = value;
            }
          }

          /**
           * Gets the index at which the `key` is found in `array` of key-value pairs.
           *
           * @private
           * @param {Array} array The array to inspect.
           * @param {*} key The key to search for.
           * @returns {number} Returns the index of the matched value, else `-1`.
           */
          function assocIndexOf(array, key) {
            var length = array.length;
            while (length--) {
              if (eq(array[length][0], key)) {
                return length;
              }
            }
            return -1;
          }

          /**
           * The base implementation of `_.assign` without support for multiple sources
           * or `customizer` functions.
           *
           * @private
           * @param {Object} object The destination object.
           * @param {Object} source The source object.
           * @returns {Object} Returns `object`.
           */
          function baseAssign(object, source) {
            return object && copyObject(source, keys(source), object);
          }

          /**
           * The base implementation of `_.clone` and `_.cloneDeep` which tracks
           * traversed objects.
           *
           * @private
           * @param {*} value The value to clone.
           * @param {boolean} [isDeep] Specify a deep clone.
           * @param {boolean} [isFull] Specify a clone including symbols.
           * @param {Function} [customizer] The function to customize cloning.
           * @param {string} [key] The key of `value`.
           * @param {Object} [object] The parent object of `value`.
           * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
           * @returns {*} Returns the cloned value.
           */
          function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
            var result;
            if (customizer) {
              result = object ? customizer(value, key, object, stack) : customizer(value);
            }
            if (result !== undefined) {
              return result;
            }
            if (!isObject(value)) {
              return value;
            }
            var isArr = isArray(value);
            if (isArr) {
              result = initCloneArray(value);
              if (!isDeep) {
                return copyArray(value, result);
              }
            } else {
              var tag = getTag(value),
                isFunc = tag == funcTag || tag == genTag;
              if (isBuffer(value)) {
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
            // Check for circular references and return its corresponding clone.
            stack || (stack = new Stack());
            var stacked = stack.get(value);
            if (stacked) {
              return stacked;
            }
            stack.set(value, result);
            if (!isArr) {
              var props = isFull ? getAllKeys(value) : keys(value);
            }
            arrayEach(props || value, function (subValue, key) {
              if (props) {
                key = subValue;
                subValue = value[key];
              }
              // Recursively populate clone (susceptible to call stack limits).
              assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
            });
            return result;
          }

          /**
           * The base implementation of `_.create` without support for assigning
           * properties to the created object.
           *
           * @private
           * @param {Object} prototype The object to inherit from.
           * @returns {Object} Returns the new object.
           */
          function baseCreate(proto) {
            return isObject(proto) ? objectCreate(proto) : {};
          }

          /**
           * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
           * `keysFunc` and `symbolsFunc` to get the enumerable property names and
           * symbols of `object`.
           *
           * @private
           * @param {Object} object The object to query.
           * @param {Function} keysFunc The function to get the keys of `object`.
           * @param {Function} symbolsFunc The function to get the symbols of `object`.
           * @returns {Array} Returns the array of property names and symbols.
           */
          function baseGetAllKeys(object, keysFunc, symbolsFunc) {
            var result = keysFunc(object);
            return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
          }

          /**
           * The base implementation of `getTag`.
           *
           * @private
           * @param {*} value The value to query.
           * @returns {string} Returns the `toStringTag`.
           */
          function baseGetTag(value) {
            return objectToString.call(value);
          }

          /**
           * The base implementation of `_.isNative` without bad shim checks.
           *
           * @private
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a native function,
           *  else `false`.
           */
          function baseIsNative(value) {
            if (!isObject(value) || isMasked(value)) {
              return false;
            }
            var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
            return pattern.test(toSource(value));
          }

          /**
           * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
           *
           * @private
           * @param {Object} object The object to query.
           * @returns {Array} Returns the array of property names.
           */
          function baseKeys(object) {
            if (!isPrototype(object)) {
              return nativeKeys(object);
            }
            var result = [];
            for (var key in Object(object)) {
              if (hasOwnProperty.call(object, key) && key != 'constructor') {
                result.push(key);
              }
            }
            return result;
          }

          /**
           * Creates a clone of  `buffer`.
           *
           * @private
           * @param {Buffer} buffer The buffer to clone.
           * @param {boolean} [isDeep] Specify a deep clone.
           * @returns {Buffer} Returns the cloned buffer.
           */
          function cloneBuffer(buffer, isDeep) {
            if (isDeep) {
              return buffer.slice();
            }
            var result = new buffer.constructor(buffer.length);
            buffer.copy(result);
            return result;
          }

          /**
           * Creates a clone of `arrayBuffer`.
           *
           * @private
           * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
           * @returns {ArrayBuffer} Returns the cloned array buffer.
           */
          function cloneArrayBuffer(arrayBuffer) {
            var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
            new Uint8Array(result).set(new Uint8Array(arrayBuffer));
            return result;
          }

          /**
           * Creates a clone of `dataView`.
           *
           * @private
           * @param {Object} dataView The data view to clone.
           * @param {boolean} [isDeep] Specify a deep clone.
           * @returns {Object} Returns the cloned data view.
           */
          function cloneDataView(dataView, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
            return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
          }

          /**
           * Creates a clone of `map`.
           *
           * @private
           * @param {Object} map The map to clone.
           * @param {Function} cloneFunc The function to clone values.
           * @param {boolean} [isDeep] Specify a deep clone.
           * @returns {Object} Returns the cloned map.
           */
          function cloneMap(map, isDeep, cloneFunc) {
            var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
            return arrayReduce(array, addMapEntry, new map.constructor());
          }

          /**
           * Creates a clone of `regexp`.
           *
           * @private
           * @param {Object} regexp The regexp to clone.
           * @returns {Object} Returns the cloned regexp.
           */
          function cloneRegExp(regexp) {
            var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
            result.lastIndex = regexp.lastIndex;
            return result;
          }

          /**
           * Creates a clone of `set`.
           *
           * @private
           * @param {Object} set The set to clone.
           * @param {Function} cloneFunc The function to clone values.
           * @param {boolean} [isDeep] Specify a deep clone.
           * @returns {Object} Returns the cloned set.
           */
          function cloneSet(set, isDeep, cloneFunc) {
            var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
            return arrayReduce(array, addSetEntry, new set.constructor());
          }

          /**
           * Creates a clone of the `symbol` object.
           *
           * @private
           * @param {Object} symbol The symbol object to clone.
           * @returns {Object} Returns the cloned symbol object.
           */
          function cloneSymbol(symbol) {
            return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
          }

          /**
           * Creates a clone of `typedArray`.
           *
           * @private
           * @param {Object} typedArray The typed array to clone.
           * @param {boolean} [isDeep] Specify a deep clone.
           * @returns {Object} Returns the cloned typed array.
           */
          function cloneTypedArray(typedArray, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
            return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
          }

          /**
           * Copies the values of `source` to `array`.
           *
           * @private
           * @param {Array} source The array to copy values from.
           * @param {Array} [array=[]] The array to copy values to.
           * @returns {Array} Returns `array`.
           */
          function copyArray(source, array) {
            var index = -1,
              length = source.length;
            array || (array = Array(length));
            while (++index < length) {
              array[index] = source[index];
            }
            return array;
          }

          /**
           * Copies properties of `source` to `object`.
           *
           * @private
           * @param {Object} source The object to copy properties from.
           * @param {Array} props The property identifiers to copy.
           * @param {Object} [object={}] The object to copy properties to.
           * @param {Function} [customizer] The function to customize copied values.
           * @returns {Object} Returns `object`.
           */
          function copyObject(source, props, object, customizer) {
            object || (object = {});
            var index = -1,
              length = props.length;
            while (++index < length) {
              var key = props[index];
              var newValue = undefined;
              assignValue(object, key, newValue === undefined ? source[key] : newValue);
            }
            return object;
          }

          /**
           * Copies own symbol properties of `source` to `object`.
           *
           * @private
           * @param {Object} source The object to copy symbols from.
           * @param {Object} [object={}] The object to copy symbols to.
           * @returns {Object} Returns `object`.
           */
          function copySymbols(source, object) {
            return copyObject(source, getSymbols(source), object);
          }

          /**
           * Creates an array of own enumerable property names and symbols of `object`.
           *
           * @private
           * @param {Object} object The object to query.
           * @returns {Array} Returns the array of property names and symbols.
           */
          function getAllKeys(object) {
            return baseGetAllKeys(object, keys, getSymbols);
          }

          /**
           * Gets the data for `map`.
           *
           * @private
           * @param {Object} map The map to query.
           * @param {string} key The reference key.
           * @returns {*} Returns the map data.
           */
          function getMapData(map, key) {
            var data = map.__data__;
            return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
          }

          /**
           * Gets the native function at `key` of `object`.
           *
           * @private
           * @param {Object} object The object to query.
           * @param {string} key The key of the method to get.
           * @returns {*} Returns the function if it's native, else `undefined`.
           */
          function getNative(object, key) {
            var value = getValue(object, key);
            return baseIsNative(value) ? value : undefined;
          }

          /**
           * Creates an array of the own enumerable symbol properties of `object`.
           *
           * @private
           * @param {Object} object The object to query.
           * @returns {Array} Returns the array of symbols.
           */
          var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

          /**
           * Gets the `toStringTag` of `value`.
           *
           * @private
           * @param {*} value The value to query.
           * @returns {string} Returns the `toStringTag`.
           */
          var getTag = baseGetTag;

          // Fallback for data views, maps, sets, and weak maps in IE 11,
          // for data views in Edge < 14, and promises in Node.js.
          if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
            getTag = function getTag(value) {
              var result = objectToString.call(value),
                Ctor = result == objectTag ? value.constructor : undefined,
                ctorString = Ctor ? toSource(Ctor) : undefined;
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

          /**
           * Initializes an array clone.
           *
           * @private
           * @param {Array} array The array to clone.
           * @returns {Array} Returns the initialized clone.
           */
          function initCloneArray(array) {
            var length = array.length,
              result = array.constructor(length);

            // Add properties assigned by `RegExp#exec`.
            if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
              result.index = array.index;
              result.input = array.input;
            }
            return result;
          }

          /**
           * Initializes an object clone.
           *
           * @private
           * @param {Object} object The object to clone.
           * @returns {Object} Returns the initialized clone.
           */
          function initCloneObject(object) {
            return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
          }

          /**
           * Initializes an object clone based on its `toStringTag`.
           *
           * **Note:** This function only supports cloning values with tags of
           * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
           *
           * @private
           * @param {Object} object The object to clone.
           * @param {string} tag The `toStringTag` of the object to clone.
           * @param {Function} cloneFunc The function to clone values.
           * @param {boolean} [isDeep] Specify a deep clone.
           * @returns {Object} Returns the initialized clone.
           */
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

          /**
           * Checks if `value` is a valid array-like index.
           *
           * @private
           * @param {*} value The value to check.
           * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
           * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
           */
          function isIndex(value, length) {
            length = length == null ? MAX_SAFE_INTEGER : length;
            return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
          }

          /**
           * Checks if `value` is suitable for use as unique object key.
           *
           * @private
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
           */
          function isKeyable(value) {
            var type = typeof value;
            return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
          }

          /**
           * Checks if `func` has its source masked.
           *
           * @private
           * @param {Function} func The function to check.
           * @returns {boolean} Returns `true` if `func` is masked, else `false`.
           */
          function isMasked(func) {
            return !!maskSrcKey && maskSrcKey in func;
          }

          /**
           * Checks if `value` is likely a prototype object.
           *
           * @private
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
           */
          function isPrototype(value) {
            var Ctor = value && value.constructor,
              proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
            return value === proto;
          }

          /**
           * Converts `func` to its source code.
           *
           * @private
           * @param {Function} func The function to process.
           * @returns {string} Returns the source code.
           */
          function toSource(func) {
            if (func != null) {
              try {
                return funcToString.call(func);
              } catch (e) {}
              try {
                return func + '';
              } catch (e) {}
            }
            return '';
          }

          /**
           * This method is like `_.clone` except that it recursively clones `value`.
           *
           * @static
           * @memberOf _
           * @since 1.0.0
           * @category Lang
           * @param {*} value The value to recursively clone.
           * @returns {*} Returns the deep cloned value.
           * @see _.clone
           * @example
           *
           * var objects = [{ 'a': 1 }, { 'b': 2 }];
           *
           * var deep = _.cloneDeep(objects);
           * console.log(deep[0] === objects[0]);
           * // => false
           */
          function cloneDeep(value) {
            return baseClone(value, true, true);
          }

          /**
           * Performs a
           * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
           * comparison between two values to determine if they are equivalent.
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to compare.
           * @param {*} other The other value to compare.
           * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
           * @example
           *
           * var object = { 'a': 1 };
           * var other = { 'a': 1 };
           *
           * _.eq(object, object);
           * // => true
           *
           * _.eq(object, other);
           * // => false
           *
           * _.eq('a', 'a');
           * // => true
           *
           * _.eq('a', Object('a'));
           * // => false
           *
           * _.eq(NaN, NaN);
           * // => true
           */
          function eq(value, other) {
            return value === other || value !== value && other !== other;
          }

          /**
           * Checks if `value` is likely an `arguments` object.
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is an `arguments` object,
           *  else `false`.
           * @example
           *
           * _.isArguments(function() { return arguments; }());
           * // => true
           *
           * _.isArguments([1, 2, 3]);
           * // => false
           */
          function isArguments(value) {
            // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
            return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
          }

          /**
           * Checks if `value` is classified as an `Array` object.
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is an array, else `false`.
           * @example
           *
           * _.isArray([1, 2, 3]);
           * // => true
           *
           * _.isArray(document.body.children);
           * // => false
           *
           * _.isArray('abc');
           * // => false
           *
           * _.isArray(_.noop);
           * // => false
           */
          var isArray = Array.isArray;

          /**
           * Checks if `value` is array-like. A value is considered array-like if it's
           * not a function and has a `value.length` that's an integer greater than or
           * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
           * @example
           *
           * _.isArrayLike([1, 2, 3]);
           * // => true
           *
           * _.isArrayLike(document.body.children);
           * // => true
           *
           * _.isArrayLike('abc');
           * // => true
           *
           * _.isArrayLike(_.noop);
           * // => false
           */
          function isArrayLike(value) {
            return value != null && isLength(value.length) && !isFunction(value);
          }

          /**
           * This method is like `_.isArrayLike` except that it also checks if `value`
           * is an object.
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is an array-like object,
           *  else `false`.
           * @example
           *
           * _.isArrayLikeObject([1, 2, 3]);
           * // => true
           *
           * _.isArrayLikeObject(document.body.children);
           * // => true
           *
           * _.isArrayLikeObject('abc');
           * // => false
           *
           * _.isArrayLikeObject(_.noop);
           * // => false
           */
          function isArrayLikeObject(value) {
            return isObjectLike(value) && isArrayLike(value);
          }

          /**
           * Checks if `value` is a buffer.
           *
           * @static
           * @memberOf _
           * @since 4.3.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
           * @example
           *
           * _.isBuffer(new Buffer(2));
           * // => true
           *
           * _.isBuffer(new Uint8Array(2));
           * // => false
           */
          var isBuffer = nativeIsBuffer || stubFalse;

          /**
           * Checks if `value` is classified as a `Function` object.
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a function, else `false`.
           * @example
           *
           * _.isFunction(_);
           * // => true
           *
           * _.isFunction(/abc/);
           * // => false
           */
          function isFunction(value) {
            // The use of `Object#toString` avoids issues with the `typeof` operator
            // in Safari 8-9 which returns 'object' for typed array and other constructors.
            var tag = isObject(value) ? objectToString.call(value) : '';
            return tag == funcTag || tag == genTag;
          }

          /**
           * Checks if `value` is a valid array-like length.
           *
           * **Note:** This method is loosely based on
           * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
           * @example
           *
           * _.isLength(3);
           * // => true
           *
           * _.isLength(Number.MIN_VALUE);
           * // => false
           *
           * _.isLength(Infinity);
           * // => false
           *
           * _.isLength('3');
           * // => false
           */
          function isLength(value) {
            return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
          }

          /**
           * Checks if `value` is the
           * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
           * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is an object, else `false`.
           * @example
           *
           * _.isObject({});
           * // => true
           *
           * _.isObject([1, 2, 3]);
           * // => true
           *
           * _.isObject(_.noop);
           * // => true
           *
           * _.isObject(null);
           * // => false
           */
          function isObject(value) {
            var type = typeof value;
            return !!value && (type == 'object' || type == 'function');
          }

          /**
           * Checks if `value` is object-like. A value is object-like if it's not `null`
           * and has a `typeof` result of "object".
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
           * @example
           *
           * _.isObjectLike({});
           * // => true
           *
           * _.isObjectLike([1, 2, 3]);
           * // => true
           *
           * _.isObjectLike(_.noop);
           * // => false
           *
           * _.isObjectLike(null);
           * // => false
           */
          function isObjectLike(value) {
            return !!value && typeof value == 'object';
          }

          /**
           * Creates an array of the own enumerable property names of `object`.
           *
           * **Note:** Non-object values are coerced to objects. See the
           * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
           * for more details.
           *
           * @static
           * @since 0.1.0
           * @memberOf _
           * @category Object
           * @param {Object} object The object to query.
           * @returns {Array} Returns the array of property names.
           * @example
           *
           * function Foo() {
           *   this.a = 1;
           *   this.b = 2;
           * }
           *
           * Foo.prototype.c = 3;
           *
           * _.keys(new Foo);
           * // => ['a', 'b'] (iteration order is not guaranteed)
           *
           * _.keys('hi');
           * // => ['0', '1']
           */
          function keys(object) {
            return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
          }

          /**
           * This method returns a new empty array.
           *
           * @static
           * @memberOf _
           * @since 4.13.0
           * @category Util
           * @returns {Array} Returns the new empty array.
           * @example
           *
           * var arrays = _.times(2, _.stubArray);
           *
           * console.log(arrays);
           * // => [[], []]
           *
           * console.log(arrays[0] === arrays[1]);
           * // => false
           */
          function stubArray() {
            return [];
          }

          /**
           * This method returns `false`.
           *
           * @static
           * @memberOf _
           * @since 4.13.0
           * @category Util
           * @returns {boolean} Returns `false`.
           * @example
           *
           * _.times(2, _.stubFalse);
           * // => [false, false]
           */
          function stubFalse() {
            return false;
          }
          module.exports = cloneDeep;
        })(lodash_clonedeep, lodash_clonedeep.exports);
        var lodash_clonedeepExports = lodash_clonedeep.exports;
        const cloneDeep = /*@__PURE__*/getDefaultExportFromCjs(lodash_clonedeepExports);

        /**
         * Create a bound version of a function with a specified `this` context
         *
         * @param {Function} fn - The function to bind
         * @param {*} thisArg - The value to be passed as the `this` parameter
         * @returns {Function} A new function that will call the original function with the specified `this` context
         */
        function bind(fn, thisArg) {
          return function wrap() {
            return fn.apply(thisArg, arguments);
          };
        }

        // utils is a library of generic helper functions non-specific to axios

        const toString = Object.prototype.toString;
        const getPrototypeOf = Object.getPrototypeOf;
        const iterator = Symbol.iterator,
          toStringTag = Symbol.toStringTag;
        const kindOf = (cache => thing => {
          const str = toString.call(thing);
          return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
        })(Object.create(null));
        const kindOfTest = type => {
          type = type.toLowerCase();
          return thing => kindOf(thing) === type;
        };
        const typeOfTest = type => thing => typeof thing === type;

        /**
         * Determine if a value is an Array
         *
         * @param {Object} val The value to test
         *
         * @returns {boolean} True if value is an Array, otherwise false
         */
        const isArray = Array.isArray;

        /**
         * Determine if a value is undefined
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if the value is undefined, otherwise false
         */
        const isUndefined = typeOfTest('undefined');

        /**
         * Determine if a value is a Buffer
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a Buffer, otherwise false
         */
        function isBuffer(val) {
          return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction$1(val.constructor.isBuffer) && val.constructor.isBuffer(val);
        }

        /**
         * Determine if a value is an ArrayBuffer
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is an ArrayBuffer, otherwise false
         */
        const isArrayBuffer = kindOfTest('ArrayBuffer');

        /**
         * Determine if a value is a view on an ArrayBuffer
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
         */
        function isArrayBufferView(val) {
          let result;
          if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
            result = ArrayBuffer.isView(val);
          } else {
            result = val && val.buffer && isArrayBuffer(val.buffer);
          }
          return result;
        }

        /**
         * Determine if a value is a String
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a String, otherwise false
         */
        const isString = typeOfTest('string');

        /**
         * Determine if a value is a Function
         *
         * @param {*} val The value to test
         * @returns {boolean} True if value is a Function, otherwise false
         */
        const isFunction$1 = typeOfTest('function');

        /**
         * Determine if a value is a Number
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a Number, otherwise false
         */
        const isNumber = typeOfTest('number');

        /**
         * Determine if a value is an Object
         *
         * @param {*} thing The value to test
         *
         * @returns {boolean} True if value is an Object, otherwise false
         */
        const isObject = thing => thing !== null && typeof thing === 'object';

        /**
         * Determine if a value is a Boolean
         *
         * @param {*} thing The value to test
         * @returns {boolean} True if value is a Boolean, otherwise false
         */
        const isBoolean = thing => thing === true || thing === false;

        /**
         * Determine if a value is a plain Object
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a plain Object, otherwise false
         */
        const isPlainObject = val => {
          if (kindOf(val) !== 'object') {
            return false;
          }
          const prototype = getPrototypeOf(val);
          return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(toStringTag in val) && !(iterator in val);
        };

        /**
         * Determine if a value is an empty object (safely handles Buffers)
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is an empty object, otherwise false
         */
        const isEmptyObject = val => {
          // Early return for non-objects or Buffers to prevent RangeError
          if (!isObject(val) || isBuffer(val)) {
            return false;
          }
          try {
            return Object.keys(val).length === 0 && Object.getPrototypeOf(val) === Object.prototype;
          } catch (e) {
            // Fallback for any other objects that might cause RangeError with Object.keys()
            return false;
          }
        };

        /**
         * Determine if a value is a Date
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a Date, otherwise false
         */
        const isDate = kindOfTest('Date');

        /**
         * Determine if a value is a File
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a File, otherwise false
         */
        const isFile = kindOfTest('File');

        /**
         * Determine if a value is a Blob
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a Blob, otherwise false
         */
        const isBlob = kindOfTest('Blob');

        /**
         * Determine if a value is a FileList
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a File, otherwise false
         */
        const isFileList = kindOfTest('FileList');

        /**
         * Determine if a value is a Stream
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a Stream, otherwise false
         */
        const isStream = val => isObject(val) && isFunction$1(val.pipe);

        /**
         * Determine if a value is a FormData
         *
         * @param {*} thing The value to test
         *
         * @returns {boolean} True if value is an FormData, otherwise false
         */
        const isFormData = thing => {
          let kind;
          return thing && (typeof FormData === 'function' && thing instanceof FormData || isFunction$1(thing.append) && ((kind = kindOf(thing)) === 'formdata' ||
          // detect form-data instance
          kind === 'object' && isFunction$1(thing.toString) && thing.toString() === '[object FormData]'));
        };

        /**
         * Determine if a value is a URLSearchParams object
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a URLSearchParams object, otherwise false
         */
        const isURLSearchParams = kindOfTest('URLSearchParams');
        const _map = ['ReadableStream', 'Request', 'Response', 'Headers'].map(kindOfTest),
          _map2 = _slicedToArray(_map, 4),
          isReadableStream = _map2[0],
          isRequest = _map2[1],
          isResponse = _map2[2],
          isHeaders = _map2[3];

        /**
         * Trim excess whitespace off the beginning and end of a string
         *
         * @param {String} str The String to trim
         *
         * @returns {String} The String freed of excess whitespace
         */
        const trim = str => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

        /**
         * Iterate over an Array or an Object invoking a function for each item.
         *
         * If `obj` is an Array callback will be called passing
         * the value, index, and complete array for each item.
         *
         * If 'obj' is an Object callback will be called passing
         * the value, key, and complete object for each property.
         *
         * @param {Object|Array} obj The object to iterate
         * @param {Function} fn The callback to invoke for each item
         *
         * @param {Boolean} [allOwnKeys = false]
         * @returns {any}
         */
        function forEach(obj, fn, {
          allOwnKeys = false
        } = {}) {
          // Don't bother if no value provided
          if (obj === null || typeof obj === 'undefined') {
            return;
          }
          let i;
          let l;

          // Force an array if not already something iterable
          if (typeof obj !== 'object') {
            /*eslint no-param-reassign:0*/
            obj = [obj];
          }
          if (isArray(obj)) {
            // Iterate over array values
            for (i = 0, l = obj.length; i < l; i++) {
              fn.call(null, obj[i], i, obj);
            }
          } else {
            // Buffer check
            if (isBuffer(obj)) {
              return;
            }

            // Iterate over object keys
            const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
            const len = keys.length;
            let key;
            for (i = 0; i < len; i++) {
              key = keys[i];
              fn.call(null, obj[key], key, obj);
            }
          }
        }
        function findKey(obj, key) {
          if (isBuffer(obj)) {
            return null;
          }
          key = key.toLowerCase();
          const keys = Object.keys(obj);
          let i = keys.length;
          let _key;
          while (i-- > 0) {
            _key = keys[i];
            if (key === _key.toLowerCase()) {
              return _key;
            }
          }
          return null;
        }
        const _global = (() => {
          /*eslint no-undef:0*/
          if (typeof globalThis !== "undefined") return globalThis;
          return typeof self !== "undefined" ? self : typeof window !== 'undefined' ? window : global;
        })();
        const isContextDefined = context => !isUndefined(context) && context !== _global;

        /**
         * Accepts varargs expecting each argument to be an object, then
         * immutably merges the properties of each object and returns result.
         *
         * When multiple objects contain the same key the later object in
         * the arguments list will take precedence.
         *
         * Example:
         *
         * ```js
         * var result = merge({foo: 123}, {foo: 456});
         * console.log(result.foo); // outputs 456
         * ```
         *
         * @param {Object} obj1 Object to merge
         *
         * @returns {Object} Result of all merge properties
         */
        function merge(/* obj1, obj2, obj3, ... */
        ) {
          const _ref3 = isContextDefined(this) && this || {},
            caseless = _ref3.caseless,
            skipUndefined = _ref3.skipUndefined;
          const result = {};
          const assignValue = (val, key) => {
            const targetKey = caseless && findKey(result, key) || key;
            if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
              result[targetKey] = merge(result[targetKey], val);
            } else if (isPlainObject(val)) {
              result[targetKey] = merge({}, val);
            } else if (isArray(val)) {
              result[targetKey] = val.slice();
            } else if (!skipUndefined || !isUndefined(val)) {
              result[targetKey] = val;
            }
          };
          for (let i = 0, l = arguments.length; i < l; i++) {
            arguments[i] && forEach(arguments[i], assignValue);
          }
          return result;
        }

        /**
         * Extends object a by mutably adding to it the properties of object b.
         *
         * @param {Object} a The object to be extended
         * @param {Object} b The object to copy properties from
         * @param {Object} thisArg The object to bind function to
         *
         * @param {Boolean} [allOwnKeys]
         * @returns {Object} The resulting value of object a
         */
        const extend = (a, b, thisArg, {
          allOwnKeys
        } = {}) => {
          forEach(b, (val, key) => {
            if (thisArg && isFunction$1(val)) {
              a[key] = bind(val, thisArg);
            } else {
              a[key] = val;
            }
          }, {
            allOwnKeys
          });
          return a;
        };

        /**
         * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
         *
         * @param {string} content with BOM
         *
         * @returns {string} content value without BOM
         */
        const stripBOM = content => {
          if (content.charCodeAt(0) === 0xFEFF) {
            content = content.slice(1);
          }
          return content;
        };

        /**
         * Inherit the prototype methods from one constructor into another
         * @param {function} constructor
         * @param {function} superConstructor
         * @param {object} [props]
         * @param {object} [descriptors]
         *
         * @returns {void}
         */
        const inherits = (constructor, superConstructor, props, descriptors) => {
          constructor.prototype = Object.create(superConstructor.prototype, descriptors);
          constructor.prototype.constructor = constructor;
          Object.defineProperty(constructor, 'super', {
            value: superConstructor.prototype
          });
          props && Object.assign(constructor.prototype, props);
        };

        /**
         * Resolve object with deep prototype chain to a flat object
         * @param {Object} sourceObj source object
         * @param {Object} [destObj]
         * @param {Function|Boolean} [filter]
         * @param {Function} [propFilter]
         *
         * @returns {Object}
         */
        const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
          let props;
          let i;
          let prop;
          const merged = {};
          destObj = destObj || {};
          // eslint-disable-next-line no-eq-null,eqeqeq
          if (sourceObj == null) return destObj;
          do {
            props = Object.getOwnPropertyNames(sourceObj);
            i = props.length;
            while (i-- > 0) {
              prop = props[i];
              if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
                destObj[prop] = sourceObj[prop];
                merged[prop] = true;
              }
            }
            sourceObj = filter !== false && getPrototypeOf(sourceObj);
          } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
          return destObj;
        };

        /**
         * Determines whether a string ends with the characters of a specified string
         *
         * @param {String} str
         * @param {String} searchString
         * @param {Number} [position= 0]
         *
         * @returns {boolean}
         */
        const endsWith = (str, searchString, position) => {
          str = String(str);
          if (position === undefined || position > str.length) {
            position = str.length;
          }
          position -= searchString.length;
          const lastIndex = str.indexOf(searchString, position);
          return lastIndex !== -1 && lastIndex === position;
        };

        /**
         * Returns new array from array like object or null if failed
         *
         * @param {*} [thing]
         *
         * @returns {?Array}
         */
        const toArray = thing => {
          if (!thing) return null;
          if (isArray(thing)) return thing;
          let i = thing.length;
          if (!isNumber(i)) return null;
          const arr = new Array(i);
          while (i-- > 0) {
            arr[i] = thing[i];
          }
          return arr;
        };

        /**
         * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
         * thing passed in is an instance of Uint8Array
         *
         * @param {TypedArray}
         *
         * @returns {Array}
         */
        // eslint-disable-next-line func-names
        const isTypedArray = (TypedArray => {
          // eslint-disable-next-line func-names
          return thing => {
            return TypedArray && thing instanceof TypedArray;
          };
        })(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

        /**
         * For each entry in the object, call the function with the key and value.
         *
         * @param {Object<any, any>} obj - The object to iterate over.
         * @param {Function} fn - The function to call for each entry.
         *
         * @returns {void}
         */
        const forEachEntry = (obj, fn) => {
          const generator = obj && obj[iterator];
          const _iterator = generator.call(obj);
          let result;
          while ((result = _iterator.next()) && !result.done) {
            const pair = result.value;
            fn.call(obj, pair[0], pair[1]);
          }
        };

        /**
         * It takes a regular expression and a string, and returns an array of all the matches
         *
         * @param {string} regExp - The regular expression to match against.
         * @param {string} str - The string to search.
         *
         * @returns {Array<boolean>}
         */
        const matchAll = (regExp, str) => {
          let matches;
          const arr = [];
          while ((matches = regExp.exec(str)) !== null) {
            arr.push(matches);
          }
          return arr;
        };

        /* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
        const isHTMLForm = kindOfTest('HTMLFormElement');
        const toCamelCase = str => {
          return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
            return p1.toUpperCase() + p2;
          });
        };

        /* Creating a function that will check if an object has a property. */
        const hasOwnProperty = (({
          hasOwnProperty
        }) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

        /**
         * Determine if a value is a RegExp object
         *
         * @param {*} val The value to test
         *
         * @returns {boolean} True if value is a RegExp object, otherwise false
         */
        const isRegExp = kindOfTest('RegExp');
        const reduceDescriptors = (obj, reducer) => {
          const descriptors = Object.getOwnPropertyDescriptors(obj);
          const reducedDescriptors = {};
          forEach(descriptors, (descriptor, name) => {
            let ret;
            if ((ret = reducer(descriptor, name, obj)) !== false) {
              reducedDescriptors[name] = ret || descriptor;
            }
          });
          Object.defineProperties(obj, reducedDescriptors);
        };

        /**
         * Makes all methods read-only
         * @param {Object} obj
         */

        const freezeMethods = obj => {
          reduceDescriptors(obj, (descriptor, name) => {
            // skip restricted props in strict mode
            if (isFunction$1(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
              return false;
            }
            const value = obj[name];
            if (!isFunction$1(value)) return;
            descriptor.enumerable = false;
            if ('writable' in descriptor) {
              descriptor.writable = false;
              return;
            }
            if (!descriptor.set) {
              descriptor.set = () => {
                throw Error('Can not rewrite read-only method \'' + name + '\'');
              };
            }
          });
        };
        const toObjectSet = (arrayOrString, delimiter) => {
          const obj = {};
          const define = arr => {
            arr.forEach(value => {
              obj[value] = true;
            });
          };
          isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
          return obj;
        };
        const noop = () => {};
        const toFiniteNumber = (value, defaultValue) => {
          return value != null && Number.isFinite(value = +value) ? value : defaultValue;
        };

        /**
         * If the thing is a FormData object, return true, otherwise return false.
         *
         * @param {unknown} thing - The thing to check.
         *
         * @returns {boolean}
         */
        function isSpecCompliantForm(thing) {
          return !!(thing && isFunction$1(thing.append) && thing[toStringTag] === 'FormData' && thing[iterator]);
        }
        const toJSONObject = obj => {
          const stack = new Array(10);
          const visit = (source, i) => {
            if (isObject(source)) {
              if (stack.indexOf(source) >= 0) {
                return;
              }

              //Buffer check
              if (isBuffer(source)) {
                return source;
              }
              if (!('toJSON' in source)) {
                stack[i] = source;
                const target = isArray(source) ? [] : {};
                forEach(source, (value, key) => {
                  const reducedValue = visit(value, i + 1);
                  !isUndefined(reducedValue) && (target[key] = reducedValue);
                });
                stack[i] = undefined;
                return target;
              }
            }
            return source;
          };
          return visit(obj, 0);
        };
        const isAsyncFn = kindOfTest('AsyncFunction');
        const isThenable = thing => thing && (isObject(thing) || isFunction$1(thing)) && isFunction$1(thing.then) && isFunction$1(thing.catch);

        // original code
        // https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34

        const _setImmediate = ((setImmediateSupported, postMessageSupported) => {
          if (setImmediateSupported) {
            return setImmediate;
          }
          return postMessageSupported ? ((token, callbacks) => {
            _global.addEventListener("message", ({
              source,
              data
            }) => {
              if (source === _global && data === token) {
                callbacks.length && callbacks.shift()();
              }
            }, false);
            return cb => {
              callbacks.push(cb);
              _global.postMessage(token, "*");
            };
          })(`axios@${Math.random()}`, []) : cb => setTimeout(cb);
        })(typeof setImmediate === 'function', isFunction$1(_global.postMessage));
        const asap = typeof queueMicrotask !== 'undefined' ? queueMicrotask.bind(_global) : typeof process !== 'undefined' && process.nextTick || _setImmediate;

        // *********************

        const isIterable = thing => thing != null && isFunction$1(thing[iterator]);
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
          isEmptyObject,
          isReadableStream,
          isRequest,
          isResponse,
          isHeaders,
          isUndefined,
          isDate,
          isFile,
          isBlob,
          isRegExp,
          isFunction: isFunction$1,
          isStream,
          isURLSearchParams,
          isTypedArray,
          isFileList,
          forEach,
          merge,
          extend,
          trim,
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
          isSpecCompliantForm,
          toJSONObject,
          isAsyncFn,
          isThenable,
          setImmediate: _setImmediate,
          asap,
          isIterable
        };

        /**
         * Create an Error with the specified message, config, error code, request and response.
         *
         * @param {string} message The error message.
         * @param {string} [code] The error code (for example, 'ECONNABORTED').
         * @param {Object} [config] The config.
         * @param {Object} [request] The request.
         * @param {Object} [response] The response.
         *
         * @returns {Error} The created error.
         */
        function AxiosError$1(message, code, config, request, response) {
          Error.call(this);
          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
          } else {
            this.stack = new Error().stack;
          }
          this.message = message;
          this.name = 'AxiosError';
          code && (this.code = code);
          config && (this.config = config);
          request && (this.request = request);
          if (response) {
            this.response = response;
            this.status = response.status ? response.status : null;
          }
        }
        utils$1.inherits(AxiosError$1, Error, {
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
        const prototype$1 = AxiosError$1.prototype;
        const descriptors = {};
        ['ERR_BAD_OPTION_VALUE', 'ERR_BAD_OPTION', 'ECONNABORTED', 'ETIMEDOUT', 'ERR_NETWORK', 'ERR_FR_TOO_MANY_REDIRECTS', 'ERR_DEPRECATED', 'ERR_BAD_RESPONSE', 'ERR_BAD_REQUEST', 'ERR_CANCELED', 'ERR_NOT_SUPPORT', 'ERR_INVALID_URL'
        // eslint-disable-next-line func-names
        ].forEach(code => {
          descriptors[code] = {
            value: code
          };
        });
        Object.defineProperties(AxiosError$1, descriptors);
        Object.defineProperty(prototype$1, 'isAxiosError', {
          value: true
        });

        // eslint-disable-next-line func-names
        AxiosError$1.from = (error, code, config, request, response, customProps) => {
          const axiosError = Object.create(prototype$1);
          utils$1.toFlatObject(error, axiosError, function filter(obj) {
            return obj !== Error.prototype;
          }, prop => {
            return prop !== 'isAxiosError';
          });
          const msg = error && error.message ? error.message : 'Error';

          // Prefer explicit code; otherwise copy the low-level error's code (e.g. ECONNREFUSED)
          const errCode = code == null && error ? error.code : code;
          AxiosError$1.call(axiosError, msg, errCode, config, request, response);

          // Chain the original error on the standard field; non-enumerable to avoid JSON noise
          if (error && axiosError.cause == null) {
            Object.defineProperty(axiosError, 'cause', {
              value: error,
              configurable: true
            });
          }
          axiosError.name = error && error.name || 'Error';
          customProps && Object.assign(axiosError, customProps);
          return axiosError;
        };

        // eslint-disable-next-line strict
        const httpAdapter = null;

        /**
         * Determines if the given thing is a array or js object.
         *
         * @param {string} thing - The object or array to be visited.
         *
         * @returns {boolean}
         */
        function isVisitable(thing) {
          return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
        }

        /**
         * It removes the brackets from the end of a string
         *
         * @param {string} key - The key of the parameter.
         *
         * @returns {string} the key without the brackets.
         */
        function removeBrackets(key) {
          return utils$1.endsWith(key, '[]') ? key.slice(0, -2) : key;
        }

        /**
         * It takes a path, a key, and a boolean, and returns a string
         *
         * @param {string} path - The path to the current key.
         * @param {string} key - The key of the current object being iterated over.
         * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
         *
         * @returns {string} The path to the current key.
         */
        function renderKey(path, key, dots) {
          if (!path) return key;
          return path.concat(key).map(function each(token, i) {
            // eslint-disable-next-line no-param-reassign
            token = removeBrackets(token);
            return !dots && i ? '[' + token + ']' : token;
          }).join(dots ? '.' : '');
        }

        /**
         * If the array is an array and none of its elements are visitable, then it's a flat array.
         *
         * @param {Array<any>} arr - The array to check
         *
         * @returns {boolean}
         */
        function isFlatArray(arr) {
          return utils$1.isArray(arr) && !arr.some(isVisitable);
        }
        const predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
          return /^is[A-Z]/.test(prop);
        });

        /**
         * Convert a data object to FormData
         *
         * @param {Object} obj
         * @param {?Object} [formData]
         * @param {?Object} [options]
         * @param {Function} [options.visitor]
         * @param {Boolean} [options.metaTokens = true]
         * @param {Boolean} [options.dots = false]
         * @param {?Boolean} [options.indexes = false]
         *
         * @returns {Object}
         **/

        /**
         * It converts an object into a FormData object
         *
         * @param {Object<any, any>} obj - The object to convert to form data.
         * @param {string} formData - The FormData object to append to.
         * @param {Object<string, any>} options
         *
         * @returns
         */
        function toFormData$1(obj, formData, options) {
          if (!utils$1.isObject(obj)) {
            throw new TypeError('target must be an object');
          }

          // eslint-disable-next-line no-param-reassign
          formData = formData || new FormData();

          // eslint-disable-next-line no-param-reassign
          options = utils$1.toFlatObject(options, {
            metaTokens: true,
            dots: false,
            indexes: false
          }, false, function defined(option, source) {
            // eslint-disable-next-line no-eq-null,eqeqeq
            return !utils$1.isUndefined(source[option]);
          });
          const metaTokens = options.metaTokens;
          // eslint-disable-next-line no-use-before-define
          const visitor = options.visitor || defaultVisitor;
          const dots = options.dots;
          const indexes = options.indexes;
          const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
          const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);
          if (!utils$1.isFunction(visitor)) {
            throw new TypeError('visitor must be a function');
          }
          function convertValue(value) {
            if (value === null) return '';
            if (utils$1.isDate(value)) {
              return value.toISOString();
            }
            if (utils$1.isBoolean(value)) {
              return value.toString();
            }
            if (!useBlob && utils$1.isBlob(value)) {
              throw new AxiosError$1('Blob is not supported. Use a Buffer instead.');
            }
            if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
              return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
            }
            return value;
          }

          /**
           * Default visitor.
           *
           * @param {*} value
           * @param {String|Number} key
           * @param {Array<String|Number>} path
           * @this {FormData}
           *
           * @returns {boolean} return true to visit the each prop of the value recursively
           */
          function defaultVisitor(value, key, path) {
            let arr = value;
            if (value && !path && typeof value === 'object') {
              if (utils$1.endsWith(key, '{}')) {
                // eslint-disable-next-line no-param-reassign
                key = metaTokens ? key : key.slice(0, -2);
                // eslint-disable-next-line no-param-reassign
                value = JSON.stringify(value);
              } else if (utils$1.isArray(value) && isFlatArray(value) || (utils$1.isFileList(value) || utils$1.endsWith(key, '[]')) && (arr = utils$1.toArray(value))) {
                // eslint-disable-next-line no-param-reassign
                key = removeBrackets(key);
                arr.forEach(function each(el, index) {
                  !(utils$1.isUndefined(el) || el === null) && formData.append(
                  // eslint-disable-next-line no-nested-ternary
                  indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + '[]', convertValue(el));
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
          function build(value, path) {
            if (utils$1.isUndefined(value)) return;
            if (stack.indexOf(value) !== -1) {
              throw Error('Circular reference detected in ' + path.join('.'));
            }
            stack.push(value);
            utils$1.forEach(value, function each(el, key) {
              const result = !(utils$1.isUndefined(el) || el === null) && visitor.call(formData, el, utils$1.isString(key) ? key.trim() : key, path, exposedHelpers);
              if (result === true) {
                build(el, path ? path.concat(key) : [key]);
              }
            });
            stack.pop();
          }
          if (!utils$1.isObject(obj)) {
            throw new TypeError('data must be an object');
          }
          build(obj);
          return formData;
        }

        /**
         * It encodes a string by replacing all characters that are not in the unreserved set with
         * their percent-encoded equivalents
         *
         * @param {string} str - The string to encode.
         *
         * @returns {string} The encoded string.
         */
        function encode$1(str) {
          const charMap = {
            '!': '%21',
            "'": '%27',
            '(': '%28',
            ')': '%29',
            '~': '%7E',
            '%20': '+',
            '%00': '\x00'
          };
          return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
            return charMap[match];
          });
        }

        /**
         * It takes a params object and converts it to a FormData object
         *
         * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
         * @param {Object<string, any>} options - The options object passed to the Axios constructor.
         *
         * @returns {void}
         */
        function AxiosURLSearchParams(params, options) {
          this._pairs = [];
          params && toFormData$1(params, this, options);
        }
        const prototype = AxiosURLSearchParams.prototype;
        prototype.append = function append(name, value) {
          this._pairs.push([name, value]);
        };
        prototype.toString = function toString(encoder) {
          const _encode = encoder ? function (value) {
            return encoder.call(this, value, encode$1);
          } : encode$1;
          return this._pairs.map(function each(pair) {
            return _encode(pair[0]) + '=' + _encode(pair[1]);
          }, '').join('&');
        };

        /**
         * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
         * URI encoded counterparts
         *
         * @param {string} val The value to be encoded.
         *
         * @returns {string} The encoded value.
         */
        function encode(val) {
          return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+');
        }

        /**
         * Build a URL by appending params to the end
         *
         * @param {string} url The base of the url (e.g., http://www.google.com)
         * @param {object} [params] The params to be appended
         * @param {?(object|Function)} options
         *
         * @returns {string} The formatted url
         */
        function buildURL(url, params, options) {
          /*eslint no-param-reassign:0*/
          if (!params) {
            return url;
          }
          const _encode = options && options.encode || encode;
          if (utils$1.isFunction(options)) {
            options = {
              serialize: options
            };
          }
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
            url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
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
           * @returns {void}
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
          forEach(fn) {
            utils$1.forEach(this.handlers, function forEachHandler(h) {
              if (h !== null) {
                fn(h);
              }
            });
          }
        }
        const transitionalDefaults = {
          silentJSONParsing: true,
          forcedJSONParsing: true,
          clarifyTimeoutError: false
        };
        const URLSearchParams$1 = typeof URLSearchParams !== 'undefined' ? URLSearchParams : AxiosURLSearchParams;
        const FormData$1 = typeof FormData !== 'undefined' ? FormData : null;
        const Blob$1 = typeof Blob !== 'undefined' ? Blob : null;
        const platform$1 = {
          isBrowser: true,
          classes: {
            URLSearchParams: URLSearchParams$1,
            FormData: FormData$1,
            Blob: Blob$1
          },
          protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
        };
        const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';
        const _navigator = typeof navigator === 'object' && navigator || undefined;

        /**
         * Determine if we're running in a standard browser environment
         *
         * This allows axios to run in a web worker, and react-native.
         * Both environments support XMLHttpRequest, but not fully standard globals.
         *
         * web workers:
         *  typeof window -> undefined
         *  typeof document -> undefined
         *
         * react-native:
         *  navigator.product -> 'ReactNative'
         * nativescript
         *  navigator.product -> 'NativeScript' or 'NS'
         *
         * @returns {boolean}
         */
        const hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || ['ReactNative', 'NativeScript', 'NS'].indexOf(_navigator.product) < 0);

        /**
         * Determine if we're running in a standard browser webWorker environment
         *
         * Although the `isStandardBrowserEnv` method indicates that
         * `allows axios to run in a web worker`, the WebWorker will still be
         * filtered out due to its judgment standard
         * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
         * This leads to a problem when axios post `FormData` in webWorker
         */
        const hasStandardBrowserWebWorkerEnv = (() => {
          return typeof WorkerGlobalScope !== 'undefined' &&
          // eslint-disable-next-line no-undef
          self instanceof WorkerGlobalScope && typeof self.importScripts === 'function';
        })();
        const origin = hasBrowserEnv && window.location.href || 'http://localhost';
        const utils = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
          __proto__: null,
          hasBrowserEnv,
          hasStandardBrowserEnv,
          hasStandardBrowserWebWorkerEnv,
          navigator: _navigator,
          origin
        }, Symbol.toStringTag, {
          value: 'Module'
        }));
        const platform = _objectSpread(_objectSpread({}, utils), platform$1);
        function toURLEncodedForm(data, options) {
          return toFormData$1(data, new platform.classes.URLSearchParams(), _objectSpread({
            visitor: function visitor(value, key, path, helpers) {
              if (platform.isNode && utils$1.isBuffer(value)) {
                this.append(key, value.toString('base64'));
                return false;
              }
              return helpers.defaultVisitor.apply(this, arguments);
            }
          }, options));
        }

        /**
         * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
         *
         * @param {string} name - The name of the property to get.
         *
         * @returns An array of strings.
         */
        function parsePropPath(name) {
          // foo[x][y][z]
          // foo.x.y.z
          // foo-x-y-z
          // foo x y z
          return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
            return match[0] === '[]' ? '' : match[1] || match[0];
          });
        }

        /**
         * Convert an array to an object.
         *
         * @param {Array<any>} arr - The array to convert to an object.
         *
         * @returns An object with the same keys and values as the array.
         */
        function arrayToObject(arr) {
          const obj = {};
          const keys = Object.keys(arr);
          let i;
          const len = keys.length;
          let key;
          for (i = 0; i < len; i++) {
            key = keys[i];
            obj[key] = arr[key];
          }
          return obj;
        }

        /**
         * It takes a FormData object and returns a JavaScript object
         *
         * @param {string} formData The FormData object to convert to JSON.
         *
         * @returns {Object<string, any> | null} The converted object.
         */
        function formDataToJSON(formData) {
          function buildPath(path, value, target, index) {
            let name = path[index++];
            if (name === '__proto__') return true;
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

        /**
         * It takes a string, tries to parse it, and if it fails, it returns the stringified version
         * of the input
         *
         * @param {any} rawValue - The value to be stringified.
         * @param {Function} parser - A function that parses a string into a JavaScript object.
         * @param {Function} encoder - A function that takes a value and returns a string.
         *
         * @returns {string} A stringified version of the rawValue.
         */
        function stringifySafely(rawValue, parser, encoder) {
          if (utils$1.isString(rawValue)) {
            try {
              (parser || JSON.parse)(rawValue);
              return utils$1.trim(rawValue);
            } catch (e) {
              if (e.name !== 'SyntaxError') {
                throw e;
              }
            }
          }
          return (encoder || JSON.stringify)(rawValue);
        }
        const defaults = {
          transitional: transitionalDefaults,
          adapter: ['xhr', 'http', 'fetch'],
          transformRequest: [function transformRequest(data, headers) {
            const contentType = headers.getContentType() || '';
            const hasJSONContentType = contentType.indexOf('application/json') > -1;
            const isObjectPayload = utils$1.isObject(data);
            if (isObjectPayload && utils$1.isHTMLForm(data)) {
              data = new FormData(data);
            }
            const isFormData = utils$1.isFormData(data);
            if (isFormData) {
              return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
            }
            if (utils$1.isArrayBuffer(data) || utils$1.isBuffer(data) || utils$1.isStream(data) || utils$1.isFile(data) || utils$1.isBlob(data) || utils$1.isReadableStream(data)) {
              return data;
            }
            if (utils$1.isArrayBufferView(data)) {
              return data.buffer;
            }
            if (utils$1.isURLSearchParams(data)) {
              headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
              return data.toString();
            }
            let isFileList;
            if (isObjectPayload) {
              if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
                return toURLEncodedForm(data, this.formSerializer).toString();
              }
              if ((isFileList = utils$1.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
                const _FormData = this.env && this.env.FormData;
                return toFormData$1(isFileList ? {
                  'files[]': data
                } : data, _FormData && new _FormData(), this.formSerializer);
              }
            }
            if (isObjectPayload || hasJSONContentType) {
              headers.setContentType('application/json', false);
              return stringifySafely(data);
            }
            return data;
          }],
          transformResponse: [function transformResponse(data) {
            const transitional = this.transitional || defaults.transitional;
            const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            const JSONRequested = this.responseType === 'json';
            if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) {
              return data;
            }
            if (data && utils$1.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
              const silentJSONParsing = transitional && transitional.silentJSONParsing;
              const strictJSONParsing = !silentJSONParsing && JSONRequested;
              try {
                return JSON.parse(data, this.parseReviver);
              } catch (e) {
                if (strictJSONParsing) {
                  if (e.name === 'SyntaxError') {
                    throw AxiosError$1.from(e, AxiosError$1.ERR_BAD_RESPONSE, this, null, this.response);
                  }
                  throw e;
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
          xsrfCookieName: 'XSRF-TOKEN',
          xsrfHeaderName: 'X-XSRF-TOKEN',
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
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': undefined
            }
          }
        };
        utils$1.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], method => {
          defaults.headers[method] = {};
        });

        // RawAxiosHeaders whose duplicates are ignored by node
        // c.f. https://nodejs.org/api/http.html#http_message_headers
        const ignoreDuplicateOf = utils$1.toObjectSet(['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent']);

        /**
         * Parse headers into an object
         *
         * ```
         * Date: Wed, 27 Aug 2014 08:58:49 GMT
         * Content-Type: application/json
         * Connection: keep-alive
         * Transfer-Encoding: chunked
         * ```
         *
         * @param {String} rawHeaders Headers needing to be parsed
         *
         * @returns {Object} Headers parsed into an object
         */
        const parseHeaders = rawHeaders => {
          const parsed = {};
          let key;
          let val;
          let i;
          rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
            i = line.indexOf(':');
            key = line.substring(0, i).trim().toLowerCase();
            val = line.substring(i + 1).trim();
            if (!key || parsed[key] && ignoreDuplicateOf[key]) {
              return;
            }
            if (key === 'set-cookie') {
              if (parsed[key]) {
                parsed[key].push(val);
              } else {
                parsed[key] = [val];
              }
            } else {
              parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
          });
          return parsed;
        };
        const $internals = Symbol('internals');
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
          const tokens = Object.create(null);
          const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
          let match;
          while (match = tokensRE.exec(str)) {
            tokens[match[1]] = match[2];
          }
          return tokens;
        }
        const isValidHeaderName = str => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
        function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
          if (utils$1.isFunction(filter)) {
            return filter.call(this, value, header);
          }
          if (isHeaderNameFilter) {
            value = header;
          }
          if (!utils$1.isString(value)) return;
          if (utils$1.isString(filter)) {
            return value.indexOf(filter) !== -1;
          }
          if (utils$1.isRegExp(filter)) {
            return filter.test(value);
          }
        }
        function formatHeader(header) {
          return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
            return char.toUpperCase() + str;
          });
        }
        function buildAccessors(obj, header) {
          const accessorName = utils$1.toCamelCase(' ' + header);
          ['get', 'set', 'has'].forEach(methodName => {
            Object.defineProperty(obj, methodName + accessorName, {
              value: function value(arg1, arg2, arg3) {
                return this[methodName].call(this, header, arg1, arg2, arg3);
              },
              configurable: true
            });
          });
        }
        let AxiosHeaders$1 = class AxiosHeaders {
          constructor(headers) {
            headers && this.set(headers);
          }
          set(header, valueOrRewrite, rewrite) {
            const self = this;
            function setHeader(_value, _header, _rewrite) {
              const lHeader = normalizeHeader(_header);
              if (!lHeader) {
                throw new Error('header name must be a non-empty string');
              }
              const key = utils$1.findKey(self, lHeader);
              if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) {
                self[key || _header] = normalizeValue(_value);
              }
            }
            const setHeaders = (headers, _rewrite) => utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
            if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
              setHeaders(header, valueOrRewrite);
            } else if (utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
              setHeaders(parseHeaders(header), valueOrRewrite);
            } else if (utils$1.isObject(header) && utils$1.isIterable(header)) {
              let obj = {},
                dest,
                key;
              var _iterator4 = _createForOfIteratorHelper(header),
                _step3;
              try {
                for (_iterator4.s(); !(_step3 = _iterator4.n()).done;) {
                  const entry = _step3.value;
                  if (!utils$1.isArray(entry)) {
                    throw TypeError('Object iterator must return a key-value pair');
                  }
                  obj[key = entry[0]] = (dest = obj[key]) ? utils$1.isArray(dest) ? [...dest, entry[1]] : [dest, entry[1]] : entry[1];
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
              setHeaders(obj, valueOrRewrite);
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
                throw new TypeError('parser must be boolean|regexp|function');
              }
            }
          }
          has(header, matcher) {
            header = normalizeHeader(header);
            if (header) {
              const key = utils$1.findKey(this, header);
              return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
            }
            return false;
          }
          delete(header, matcher) {
            const self = this;
            let deleted = false;
            function deleteHeader(_header) {
              _header = normalizeHeader(_header);
              if (_header) {
                const key = utils$1.findKey(self, _header);
                if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
                  delete self[key];
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
            let i = keys.length;
            let deleted = false;
            while (i--) {
              const key = keys[i];
              if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
                delete this[key];
                deleted = true;
              }
            }
            return deleted;
          }
          normalize(format) {
            const self = this;
            const headers = {};
            utils$1.forEach(this, (value, header) => {
              const key = utils$1.findKey(headers, header);
              if (key) {
                self[key] = normalizeValue(value);
                delete self[header];
                return;
              }
              const normalized = format ? formatHeader(header) : String(header).trim();
              if (normalized !== header) {
                delete self[header];
              }
              self[normalized] = normalizeValue(value);
              headers[normalized] = true;
            });
            return this;
          }
          concat(...targets) {
            return this.constructor.concat(this, ...targets);
          }
          toJSON(asStrings) {
            const obj = Object.create(null);
            utils$1.forEach(this, (value, header) => {
              value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(', ') : value);
            });
            return obj;
          }
          [Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]();
          }
          toString() {
            return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
          }
          getSetCookie() {
            return this.get("set-cookie") || [];
          }
          get [Symbol.toStringTag]() {
            return 'AxiosHeaders';
          }
          static from(thing) {
            return thing instanceof this ? thing : new this(thing);
          }
          static concat(first, ...targets) {
            const computed = new this(first);
            targets.forEach(target => computed.set(target));
            return computed;
          }
          static accessor(header) {
            const internals = this[$internals] = this[$internals] = {
              accessors: {}
            };
            const accessors = internals.accessors;
            const prototype = this.prototype;
            function defineAccessor(_header) {
              const lHeader = normalizeHeader(_header);
              if (!accessors[lHeader]) {
                buildAccessors(prototype, _header);
                accessors[lHeader] = true;
              }
            }
            utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
            return this;
          }
        };
        AxiosHeaders$1.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

        // reserved names hotfix
        utils$1.reduceDescriptors(AxiosHeaders$1.prototype, ({
          value
        }, key) => {
          let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
          return {
            get: () => value,
            set(headerValue) {
              this[mapped] = headerValue;
            }
          };
        });
        utils$1.freezeMethods(AxiosHeaders$1);

        /**
         * Transform the data for a request or a response
         *
         * @param {Array|Function} fns A single function or Array of functions
         * @param {?Object} response The response object
         *
         * @returns {*} The resulting transformed data
         */
        function transformData(fns, response) {
          const config = this || defaults;
          const context = response || config;
          const headers = AxiosHeaders$1.from(context.headers);
          let data = context.data;
          utils$1.forEach(fns, function transform(fn) {
            data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
          });
          headers.normalize();
          return data;
        }
        function isCancel$1(value) {
          return !!(value && value.__CANCEL__);
        }

        /**
         * A `CanceledError` is an object that is thrown when an operation is canceled.
         *
         * @param {string=} message The message.
         * @param {Object=} config The config.
         * @param {Object=} request The request.
         *
         * @returns {CanceledError} The created error.
         */
        function CanceledError$1(message, config, request) {
          // eslint-disable-next-line no-eq-null,eqeqeq
          AxiosError$1.call(this, message == null ? 'canceled' : message, AxiosError$1.ERR_CANCELED, config, request);
          this.name = 'CanceledError';
        }
        utils$1.inherits(CanceledError$1, AxiosError$1, {
          __CANCEL__: true
        });

        /**
         * Resolve or reject a Promise based on response status.
         *
         * @param {Function} resolve A function that resolves the promise.
         * @param {Function} reject A function that rejects the promise.
         * @param {object} response The response.
         *
         * @returns {object} The response.
         */
        function settle(resolve, reject, response) {
          const validateStatus = response.config.validateStatus;
          if (!response.status || !validateStatus || validateStatus(response.status)) {
            resolve(response);
          } else {
            reject(new AxiosError$1('Request failed with status code ' + response.status, [AxiosError$1.ERR_BAD_REQUEST, AxiosError$1.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4], response.config, response.request, response));
          }
        }
        function parseProtocol(url) {
          const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
          return match && match[1] || '';
        }

        /**
         * Calculate data maxRate
         * @param {Number} [samplesCount= 10]
         * @param {Number} [min= 1000]
         * @returns {Function}
         */
        function speedometer(samplesCount, min) {
          samplesCount = samplesCount || 10;
          const bytes = new Array(samplesCount);
          const timestamps = new Array(samplesCount);
          let head = 0;
          let tail = 0;
          let firstSampleTS;
          min = min !== undefined ? min : 1000;
          return function push(chunkLength) {
            const now = Date.now();
            const startedAt = timestamps[tail];
            if (!firstSampleTS) {
              firstSampleTS = now;
            }
            bytes[head] = chunkLength;
            timestamps[head] = now;
            let i = tail;
            let bytesCount = 0;
            while (i !== head) {
              bytesCount += bytes[i++];
              i = i % samplesCount;
            }
            head = (head + 1) % samplesCount;
            if (head === tail) {
              tail = (tail + 1) % samplesCount;
            }
            if (now - firstSampleTS < min) {
              return;
            }
            const passed = startedAt && now - startedAt;
            return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
          };
        }

        /**
         * Throttle decorator
         * @param {Function} fn
         * @param {Number} freq
         * @return {Function}
         */
        function throttle(fn, freq) {
          let timestamp = 0;
          let threshold = 1000 / freq;
          let lastArgs;
          let timer;
          const invoke = (args, now = Date.now()) => {
            timestamp = now;
            lastArgs = null;
            if (timer) {
              clearTimeout(timer);
              timer = null;
            }
            fn(...args);
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
          return throttle(e => {
            const loaded = e.loaded;
            const total = e.lengthComputable ? e.total : undefined;
            const progressBytes = loaded - bytesNotified;
            const rate = _speedometer(progressBytes);
            const inRange = loaded <= total;
            bytesNotified = loaded;
            const data = {
              loaded,
              total,
              progress: total ? loaded / total : undefined,
              bytes: progressBytes,
              rate: rate ? rate : undefined,
              estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
              event: e,
              lengthComputable: total != null,
              [isDownloadStream ? 'download' : 'upload']: true
            };
            listener(data);
          }, freq);
        };
        const progressEventDecorator = (total, throttled) => {
          const lengthComputable = total != null;
          return [loaded => throttled[0]({
            lengthComputable,
            total,
            loaded
          }), throttled[1]];
        };
        const asyncDecorator = fn => (...args) => utils$1.asap(() => fn(...args));
        const isURLSameOrigin = platform.hasStandardBrowserEnv ? ((origin, isMSIE) => url => {
          url = new URL(url, platform.origin);
          return origin.protocol === url.protocol && origin.host === url.host && (isMSIE || origin.port === url.port);
        })(new URL(platform.origin), platform.navigator && /(msie|trident)/i.test(platform.navigator.userAgent)) : () => true;
        const cookies = platform.hasStandardBrowserEnv ?
        // Standard browser envs support document.cookie
        {
          write(name, value, expires, path, domain, secure, sameSite) {
            if (typeof document === 'undefined') return;
            const cookie = [`${name}=${encodeURIComponent(value)}`];
            if (utils$1.isNumber(expires)) {
              cookie.push(`expires=${new Date(expires).toUTCString()}`);
            }
            if (utils$1.isString(path)) {
              cookie.push(`path=${path}`);
            }
            if (utils$1.isString(domain)) {
              cookie.push(`domain=${domain}`);
            }
            if (secure === true) {
              cookie.push('secure');
            }
            if (utils$1.isString(sameSite)) {
              cookie.push(`SameSite=${sameSite}`);
            }
            document.cookie = cookie.join('; ');
          },
          read(name) {
            if (typeof document === 'undefined') return null;
            const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
            return match ? decodeURIComponent(match[1]) : null;
          },
          remove(name) {
            this.write(name, '', Date.now() - 86400000, '/');
          }
        } :
        // Non-standard browser env (web workers, react-native) lack needed support.
        {
          write() {},
          read() {
            return null;
          },
          remove() {}
        };

        /**
         * Determines whether the specified URL is absolute
         *
         * @param {string} url The URL to test
         *
         * @returns {boolean} True if the specified URL is absolute, otherwise false
         */
        function isAbsoluteURL(url) {
          // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
          // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
          // by any combination of letters, digits, plus, period, or hyphen.
          return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
        }

        /**
         * Creates a new URL by combining the specified URLs
         *
         * @param {string} baseURL The base URL
         * @param {string} relativeURL The relative URL
         *
         * @returns {string} The combined URL
         */
        function combineURLs(baseURL, relativeURL) {
          return relativeURL ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
        }

        /**
         * Creates a new URL by combining the baseURL with the requestedURL,
         * only when the requestedURL is not already an absolute URL.
         * If the requestURL is absolute, this function returns the requestedURL untouched.
         *
         * @param {string} baseURL The base URL
         * @param {string} requestedURL Absolute or relative URL to combine
         *
         * @returns {string} The combined full path
         */
        function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls) {
          let isRelativeUrl = !isAbsoluteURL(requestedURL);
          if (baseURL && (isRelativeUrl || allowAbsoluteUrls == false)) {
            return combineURLs(baseURL, requestedURL);
          }
          return requestedURL;
        }
        const headersToObject = thing => thing instanceof AxiosHeaders$1 ? _objectSpread({}, thing) : thing;

        /**
         * Config-specific merge-function which creates a new config-object
         * by merging two configuration objects together.
         *
         * @param {Object} config1
         * @param {Object} config2
         *
         * @returns {Object} New object resulting from merging config2 to config1
         */
        function mergeConfig$1(config1, config2) {
          // eslint-disable-next-line no-param-reassign
          config2 = config2 || {};
          const config = {};
          function getMergedValue(target, source, prop, caseless) {
            if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
              return utils$1.merge.call({
                caseless
              }, target, source);
            } else if (utils$1.isPlainObject(source)) {
              return utils$1.merge({}, source);
            } else if (utils$1.isArray(source)) {
              return source.slice();
            }
            return source;
          }

          // eslint-disable-next-line consistent-return
          function mergeDeepProperties(a, b, prop, caseless) {
            if (!utils$1.isUndefined(b)) {
              return getMergedValue(a, b, prop, caseless);
            } else if (!utils$1.isUndefined(a)) {
              return getMergedValue(undefined, a, prop, caseless);
            }
          }

          // eslint-disable-next-line consistent-return
          function valueFromConfig2(a, b) {
            if (!utils$1.isUndefined(b)) {
              return getMergedValue(undefined, b);
            }
          }

          // eslint-disable-next-line consistent-return
          function defaultToConfig2(a, b) {
            if (!utils$1.isUndefined(b)) {
              return getMergedValue(undefined, b);
            } else if (!utils$1.isUndefined(a)) {
              return getMergedValue(undefined, a);
            }
          }

          // eslint-disable-next-line consistent-return
          function mergeDirectKeys(a, b, prop) {
            if (prop in config2) {
              return getMergedValue(a, b);
            } else if (prop in config1) {
              return getMergedValue(undefined, a);
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
            headers: (a, b, prop) => mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true)
          };
          utils$1.forEach(Object.keys(_objectSpread(_objectSpread({}, config1), config2)), function computeConfigValue(prop) {
            const merge = mergeMap[prop] || mergeDeepProperties;
            const configValue = merge(config1[prop], config2[prop], prop);
            utils$1.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
          });
          return config;
        }
        const resolveConfig = config => {
          const newConfig = mergeConfig$1({}, config);
          let data = newConfig.data,
            withXSRFToken = newConfig.withXSRFToken,
            xsrfHeaderName = newConfig.xsrfHeaderName,
            xsrfCookieName = newConfig.xsrfCookieName,
            headers = newConfig.headers,
            auth = newConfig.auth;
          newConfig.headers = headers = AxiosHeaders$1.from(headers);
          newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url, newConfig.allowAbsoluteUrls), config.params, config.paramsSerializer);

          // HTTP basic authentication
          if (auth) {
            headers.set('Authorization', 'Basic ' + btoa((auth.username || '') + ':' + (auth.password ? unescape(encodeURIComponent(auth.password)) : '')));
          }
          if (utils$1.isFormData(data)) {
            if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
              headers.setContentType(undefined); // browser handles it
            } else if (utils$1.isFunction(data.getHeaders)) {
              // Node.js FormData (like form-data package)
              const formHeaders = data.getHeaders();
              // Only set safe headers to avoid overwriting security headers
              const allowedHeaders = ['content-type', 'content-length'];
              Object.entries(formHeaders).forEach(([key, val]) => {
                if (allowedHeaders.includes(key.toLowerCase())) {
                  headers.set(key, val);
                }
              });
            }
          }

          // Add xsrf header
          // This is only done if running in a standard browser environment.
          // Specifically not if we're in a web worker, or react-native.

          if (platform.hasStandardBrowserEnv) {
            withXSRFToken && utils$1.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
            if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin(newConfig.url)) {
              // Add xsrf header
              const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);
              if (xsrfValue) {
                headers.set(xsrfHeaderName, xsrfValue);
              }
            }
          }
          return newConfig;
        };
        const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';
        const xhrAdapter = isXHRAdapterSupported && function (config) {
          return new Promise(function dispatchXhrRequest(resolve, reject) {
            const _config = resolveConfig(config);
            let requestData = _config.data;
            const requestHeaders = AxiosHeaders$1.from(_config.headers).normalize();
            let responseType = _config.responseType,
              onUploadProgress = _config.onUploadProgress,
              onDownloadProgress = _config.onDownloadProgress;
            let onCanceled;
            let uploadThrottled, downloadThrottled;
            let flushUpload, flushDownload;
            function done() {
              flushUpload && flushUpload(); // flush events
              flushDownload && flushDownload(); // flush events

              _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
              _config.signal && _config.signal.removeEventListener('abort', onCanceled);
            }
            let request = new XMLHttpRequest();
            request.open(_config.method.toUpperCase(), _config.url, true);

            // Set the request timeout in MS
            request.timeout = _config.timeout;
            function onloadend() {
              if (!request) {
                return;
              }
              // Prepare the response
              const responseHeaders = AxiosHeaders$1.from('getAllResponseHeaders' in request && request.getAllResponseHeaders());
              const responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
              const response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config,
                request
              };
              settle(function _resolve(value) {
                resolve(value);
                done();
              }, function _reject(err) {
                reject(err);
                done();
              }, response);

              // Clean up request
              request = null;
            }
            if ('onloadend' in request) {
              // Use onloadend if available
              request.onloadend = onloadend;
            } else {
              // Listen for ready state to emulate onloadend
              request.onreadystatechange = function handleLoad() {
                if (!request || request.readyState !== 4) {
                  return;
                }

                // The request errored out and we didn't get a response, this will be
                // handled by onerror instead
                // With one exception: request that using file: protocol, most browsers
                // will return status as 0 even though it's a successful request
                if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
                  return;
                }
                // readystate handler is calling before onerror or ontimeout handlers,
                // so we should call onloadend on the next 'tick'
                setTimeout(onloadend);
              };
            }

            // Handle browser request cancellation (as opposed to a manual cancellation)
            request.onabort = function handleAbort() {
              if (!request) {
                return;
              }
              reject(new AxiosError$1('Request aborted', AxiosError$1.ECONNABORTED, config, request));

              // Clean up request
              request = null;
            };

            // Handle low level network errors
            request.onerror = function handleError(event) {
              // Browsers deliver a ProgressEvent in XHR onerror
              // (message may be empty; when present, surface it)
              // See https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/error_event
              const msg = event && event.message ? event.message : 'Network Error';
              const err = new AxiosError$1(msg, AxiosError$1.ERR_NETWORK, config, request);
              // attach the underlying event for consumers who want details
              err.event = event || null;
              reject(err);
              request = null;
            };

            // Handle timeout
            request.ontimeout = function handleTimeout() {
              let timeoutErrorMessage = _config.timeout ? 'timeout of ' + _config.timeout + 'ms exceeded' : 'timeout exceeded';
              const transitional = _config.transitional || transitionalDefaults;
              if (_config.timeoutErrorMessage) {
                timeoutErrorMessage = _config.timeoutErrorMessage;
              }
              reject(new AxiosError$1(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError$1.ETIMEDOUT : AxiosError$1.ECONNABORTED, config, request));

              // Clean up request
              request = null;
            };

            // Remove Content-Type if data is undefined
            requestData === undefined && requestHeaders.setContentType(null);

            // Add headers to the request
            if ('setRequestHeader' in request) {
              utils$1.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
                request.setRequestHeader(key, val);
              });
            }

            // Add withCredentials to request if needed
            if (!utils$1.isUndefined(_config.withCredentials)) {
              request.withCredentials = !!_config.withCredentials;
            }

            // Add responseType to request if needed
            if (responseType && responseType !== 'json') {
              request.responseType = _config.responseType;
            }

            // Handle progress if needed
            if (onDownloadProgress) {
              var _progressEventReducer = progressEventReducer(onDownloadProgress, true);
              var _progressEventReducer2 = _slicedToArray(_progressEventReducer, 2);
              downloadThrottled = _progressEventReducer2[0];
              flushDownload = _progressEventReducer2[1];
              request.addEventListener('progress', downloadThrottled);
            }

            // Not all browsers support upload events
            if (onUploadProgress && request.upload) {
              var _progressEventReducer3 = progressEventReducer(onUploadProgress);
              var _progressEventReducer4 = _slicedToArray(_progressEventReducer3, 2);
              uploadThrottled = _progressEventReducer4[0];
              flushUpload = _progressEventReducer4[1];
              request.upload.addEventListener('progress', uploadThrottled);
              request.upload.addEventListener('loadend', flushUpload);
            }
            if (_config.cancelToken || _config.signal) {
              // Handle cancellation
              // eslint-disable-next-line func-names
              onCanceled = cancel => {
                if (!request) {
                  return;
                }
                reject(!cancel || cancel.type ? new CanceledError$1(null, config, request) : cancel);
                request.abort();
                request = null;
              };
              _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
              if (_config.signal) {
                _config.signal.aborted ? onCanceled() : _config.signal.addEventListener('abort', onCanceled);
              }
            }
            const protocol = parseProtocol(_config.url);
            if (protocol && platform.protocols.indexOf(protocol) === -1) {
              reject(new AxiosError$1('Unsupported protocol ' + protocol + ':', AxiosError$1.ERR_BAD_REQUEST, config));
              return;
            }

            // Send the request
            request.send(requestData || null);
          });
        };
        const composeSignals = (signals, timeout) => {
          const _signals = signals = signals ? signals.filter(Boolean) : [],
            length = _signals.length;
          if (timeout || length) {
            let controller = new AbortController();
            let aborted;
            const onabort = function onabort(reason) {
              if (!aborted) {
                aborted = true;
                unsubscribe();
                const err = reason instanceof Error ? reason : this.reason;
                controller.abort(err instanceof AxiosError$1 ? err : new CanceledError$1(err instanceof Error ? err.message : err));
              }
            };
            let timer = timeout && setTimeout(() => {
              timer = null;
              onabort(new AxiosError$1(`timeout ${timeout} of ms exceeded`, AxiosError$1.ETIMEDOUT));
            }, timeout);
            const unsubscribe = () => {
              if (signals) {
                timer && clearTimeout(timer);
                timer = null;
                signals.forEach(signal => {
                  signal.unsubscribe ? signal.unsubscribe(onabort) : signal.removeEventListener('abort', onabort);
                });
                signals = null;
              }
            };
            signals.forEach(signal => signal.addEventListener('abort', onabort));
            const signal = controller.signal;
            signal.unsubscribe = () => utils$1.asap(unsubscribe);
            return signal;
          }
        };
        const streamChunk = function* streamChunk(chunk, chunkSize) {
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
        const readBytes = /*#__PURE__*/function () {
          var _ref = _wrapAsyncGenerator(function* (iterable, chunkSize) {
            var _iteratorAbruptCompletion = false;
            var _didIteratorError = false;
            var _iteratorError;
            try {
              for (var _iterator2 = _asyncIterator(readStream(iterable)), _step; _iteratorAbruptCompletion = !(_step = yield _awaitAsyncGenerator(_iterator2.next())).done; _iteratorAbruptCompletion = false) {
                const chunk = _step.value;
                {
                  yield* _asyncGeneratorDelegate(_asyncIterator(streamChunk(chunk, chunkSize)), _awaitAsyncGenerator);
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (_iteratorAbruptCompletion && _iterator2.return != null) {
                  yield _awaitAsyncGenerator(_iterator2.return());
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          });
          return function readBytes(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();
        const readStream = /*#__PURE__*/function () {
          var _ref2 = _wrapAsyncGenerator(function* (stream) {
            if (stream[Symbol.asyncIterator]) {
              yield* _asyncGeneratorDelegate(_asyncIterator(stream), _awaitAsyncGenerator);
              return;
            }
            const reader = stream.getReader();
            try {
              for (;;) {
                const _yield$_awaitAsyncGen = yield _awaitAsyncGenerator(reader.read()),
                  done = _yield$_awaitAsyncGen.done,
                  value = _yield$_awaitAsyncGen.value;
                if (done) {
                  break;
                }
                yield value;
              }
            } finally {
              yield _awaitAsyncGenerator(reader.cancel());
            }
          });
          return function readStream(_x3) {
            return _ref2.apply(this, arguments);
          };
        }();
        const trackStream = (stream, chunkSize, onProgress, onFinish) => {
          const iterator = readBytes(stream, chunkSize);
          let bytes = 0;
          let done;
          let _onFinish = e => {
            if (!done) {
              done = true;
              onFinish && onFinish(e);
            }
          };
          return new ReadableStream({
            pull(controller) {
              return _asyncToGenerator(function* () {
                try {
                  const _yield$iterator$next = yield iterator.next(),
                    done = _yield$iterator$next.done,
                    value = _yield$iterator$next.value;
                  if (done) {
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
              })();
            },
            cancel(reason) {
              _onFinish(reason);
              return iterator.return();
            }
          }, {
            highWaterMark: 2
          });
        };
        const DEFAULT_CHUNK_SIZE = 64 * 1024;
        const isFunction = utils$1.isFunction;
        const globalFetchAPI = (({
          Request,
          Response
        }) => ({
          Request,
          Response
        }))(utils$1.global);
        const _utils$1$global = utils$1.global,
          ReadableStream$1 = _utils$1$global.ReadableStream,
          TextEncoder = _utils$1$global.TextEncoder;
        const test = (fn, ...args) => {
          try {
            return !!fn(...args);
          } catch (e) {
            return false;
          }
        };
        const factory = env => {
          env = utils$1.merge.call({
            skipUndefined: true
          }, globalFetchAPI, env);
          const _env = env,
            envFetch = _env.fetch,
            Request = _env.Request,
            Response = _env.Response;
          const isFetchSupported = envFetch ? isFunction(envFetch) : typeof fetch === 'function';
          const isRequestSupported = isFunction(Request);
          const isResponseSupported = isFunction(Response);
          if (!isFetchSupported) {
            return false;
          }
          const isReadableStreamSupported = isFetchSupported && isFunction(ReadableStream$1);
          const encodeText = isFetchSupported && (typeof TextEncoder === 'function' ? (encoder => str => encoder.encode(str))(new TextEncoder()) : (/*#__PURE__*/function () {
            var _ref4 = _asyncToGenerator(function* (str) {
              return new Uint8Array(yield new Request(str).arrayBuffer());
            });
            return function (_x4) {
              return _ref4.apply(this, arguments);
            };
          }()));
          const supportsRequestStream = isRequestSupported && isReadableStreamSupported && test(() => {
            let duplexAccessed = false;
            const hasContentType = new Request(platform.origin, {
              body: new ReadableStream$1(),
              method: 'POST',
              get duplex() {
                duplexAccessed = true;
                return 'half';
              }
            }).headers.has('Content-Type');
            return duplexAccessed && !hasContentType;
          });
          const supportsResponseStream = isResponseSupported && isReadableStreamSupported && test(() => utils$1.isReadableStream(new Response('').body));
          const resolvers = {
            stream: supportsResponseStream && (res => res.body)
          };
          isFetchSupported && (() => {
            ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach(type => {
              !resolvers[type] && (resolvers[type] = (res, config) => {
                let method = res && res[type];
                if (method) {
                  return method.call(res);
                }
                throw new AxiosError$1(`Response type '${type}' is not supported`, AxiosError$1.ERR_NOT_SUPPORT, config);
              });
            });
          })();
          const getBodyLength = /*#__PURE__*/function () {
            var _ref5 = _asyncToGenerator(function* (body) {
              if (body == null) {
                return 0;
              }
              if (utils$1.isBlob(body)) {
                return body.size;
              }
              if (utils$1.isSpecCompliantForm(body)) {
                const _request = new Request(platform.origin, {
                  method: 'POST',
                  body
                });
                return (yield _request.arrayBuffer()).byteLength;
              }
              if (utils$1.isArrayBufferView(body) || utils$1.isArrayBuffer(body)) {
                return body.byteLength;
              }
              if (utils$1.isURLSearchParams(body)) {
                body = body + '';
              }
              if (utils$1.isString(body)) {
                return (yield encodeText(body)).byteLength;
              }
            });
            return function getBodyLength(_x5) {
              return _ref5.apply(this, arguments);
            };
          }();
          const resolveBodyLength = /*#__PURE__*/function () {
            var _ref6 = _asyncToGenerator(function* (headers, body) {
              const length = utils$1.toFiniteNumber(headers.getContentLength());
              return length == null ? getBodyLength(body) : length;
            });
            return function resolveBodyLength(_x6, _x7) {
              return _ref6.apply(this, arguments);
            };
          }();
          return /*#__PURE__*/function () {
            var _ref7 = _asyncToGenerator(function* (config) {
              let _resolveConfig = resolveConfig(config),
                url = _resolveConfig.url,
                method = _resolveConfig.method,
                data = _resolveConfig.data,
                signal = _resolveConfig.signal,
                cancelToken = _resolveConfig.cancelToken,
                timeout = _resolveConfig.timeout,
                onDownloadProgress = _resolveConfig.onDownloadProgress,
                onUploadProgress = _resolveConfig.onUploadProgress,
                responseType = _resolveConfig.responseType,
                headers = _resolveConfig.headers,
                _resolveConfig$withCr = _resolveConfig.withCredentials,
                withCredentials = _resolveConfig$withCr === void 0 ? 'same-origin' : _resolveConfig$withCr,
                fetchOptions = _resolveConfig.fetchOptions;
              let _fetch = envFetch || fetch;
              responseType = responseType ? (responseType + '').toLowerCase() : 'text';
              let composedSignal = composeSignals([signal, cancelToken && cancelToken.toAbortSignal()], timeout);
              let request = null;
              const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
                composedSignal.unsubscribe();
              });
              let requestContentLength;
              try {
                if (onUploadProgress && supportsRequestStream && method !== 'get' && method !== 'head' && (requestContentLength = yield resolveBodyLength(headers, data)) !== 0) {
                  let _request = new Request(url, {
                    method: 'POST',
                    body: data,
                    duplex: "half"
                  });
                  let contentTypeHeader;
                  if (utils$1.isFormData(data) && (contentTypeHeader = _request.headers.get('content-type'))) {
                    headers.setContentType(contentTypeHeader);
                  }
                  if (_request.body) {
                    const _progressEventDecorat = progressEventDecorator(requestContentLength, progressEventReducer(asyncDecorator(onUploadProgress))),
                      _progressEventDecorat2 = _slicedToArray(_progressEventDecorat, 2),
                      onProgress = _progressEventDecorat2[0],
                      flush = _progressEventDecorat2[1];
                    data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
                  }
                }
                if (!utils$1.isString(withCredentials)) {
                  withCredentials = withCredentials ? 'include' : 'omit';
                }

                // Cloudflare Workers throws when credentials are defined
                // see https://github.com/cloudflare/workerd/issues/902
                const isCredentialsSupported = isRequestSupported && "credentials" in Request.prototype;
                const resolvedOptions = _objectSpread(_objectSpread({}, fetchOptions), {}, {
                  signal: composedSignal,
                  method: method.toUpperCase(),
                  headers: headers.normalize().toJSON(),
                  body: data,
                  duplex: "half",
                  credentials: isCredentialsSupported ? withCredentials : undefined
                });
                request = isRequestSupported && new Request(url, resolvedOptions);
                let response = yield isRequestSupported ? _fetch(request, fetchOptions) : _fetch(url, resolvedOptions);
                const isStreamResponse = supportsResponseStream && (responseType === 'stream' || responseType === 'response');
                if (supportsResponseStream && (onDownloadProgress || isStreamResponse && unsubscribe)) {
                  const options = {};
                  ['status', 'statusText', 'headers'].forEach(prop => {
                    options[prop] = response[prop];
                  });
                  const responseContentLength = utils$1.toFiniteNumber(response.headers.get('content-length'));
                  const _ref8 = onDownloadProgress && progressEventDecorator(responseContentLength, progressEventReducer(asyncDecorator(onDownloadProgress), true)) || [],
                    _ref9 = _slicedToArray(_ref8, 2),
                    onProgress = _ref9[0],
                    flush = _ref9[1];
                  response = new Response(trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
                    flush && flush();
                    unsubscribe && unsubscribe();
                  }), options);
                }
                responseType = responseType || 'text';
                let responseData = yield resolvers[utils$1.findKey(resolvers, responseType) || 'text'](response, config);
                !isStreamResponse && unsubscribe && unsubscribe();
                return yield new Promise((resolve, reject) => {
                  settle(resolve, reject, {
                    data: responseData,
                    headers: AxiosHeaders$1.from(response.headers),
                    status: response.status,
                    statusText: response.statusText,
                    config,
                    request
                  });
                });
              } catch (err) {
                unsubscribe && unsubscribe();
                if (err && err.name === 'TypeError' && /Load failed|fetch/i.test(err.message)) {
                  throw Object.assign(new AxiosError$1('Network Error', AxiosError$1.ERR_NETWORK, config, request), {
                    cause: err.cause || err
                  });
                }
                throw AxiosError$1.from(err, err && err.code, config, request);
              }
            });
            return function (_x8) {
              return _ref7.apply(this, arguments);
            };
          }();
        };
        const seedCache = new Map();
        const getFetch = config => {
          let env = config && config.env || {};
          const fetch = env.fetch,
            Request = env.Request,
            Response = env.Response;
          const seeds = [Request, Response, fetch];
          let len = seeds.length,
            i = len,
            seed,
            target,
            map = seedCache;
          while (i--) {
            seed = seeds[i];
            target = map.get(seed);
            target === undefined && map.set(seed, target = i ? new Map() : factory(env));
            map = target;
          }
          return target;
        };
        getFetch();

        /**
         * Known adapters mapping.
         * Provides environment-specific adapters for Axios:
         * - `http` for Node.js
         * - `xhr` for browsers
         * - `fetch` for fetch API-based requests
         * 
         * @type {Object<string, Function|Object>}
         */
        const knownAdapters = {
          http: httpAdapter,
          xhr: xhrAdapter,
          fetch: {
            get: getFetch
          }
        };

        // Assign adapter names for easier debugging and identification
        utils$1.forEach(knownAdapters, (fn, value) => {
          if (fn) {
            try {
              Object.defineProperty(fn, 'name', {
                value
              });
            } catch (e) {
              // eslint-disable-next-line no-empty
            }
            Object.defineProperty(fn, 'adapterName', {
              value
            });
          }
        });

        /**
         * Render a rejection reason string for unknown or unsupported adapters
         * 
         * @param {string} reason
         * @returns {string}
         */
        const renderReason = reason => `- ${reason}`;

        /**
         * Check if the adapter is resolved (function, null, or false)
         * 
         * @param {Function|null|false} adapter
         * @returns {boolean}
         */
        const isResolvedHandle = adapter => utils$1.isFunction(adapter) || adapter === null || adapter === false;

        /**
         * Get the first suitable adapter from the provided list.
         * Tries each adapter in order until a supported one is found.
         * Throws an AxiosError if no adapter is suitable.
         * 
         * @param {Array<string|Function>|string|Function} adapters - Adapter(s) by name or function.
         * @param {Object} config - Axios request configuration
         * @throws {AxiosError} If no suitable adapter is available
         * @returns {Function} The resolved adapter function
         */
        function getAdapter$1(adapters, config) {
          adapters = utils$1.isArray(adapters) ? adapters : [adapters];
          const _adapters = adapters,
            length = _adapters.length;
          let nameOrAdapter;
          let adapter;
          const rejectedReasons = {};
          for (let i = 0; i < length; i++) {
            nameOrAdapter = adapters[i];
            let id;
            adapter = nameOrAdapter;
            if (!isResolvedHandle(nameOrAdapter)) {
              adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
              if (adapter === undefined) {
                throw new AxiosError$1(`Unknown adapter '${id}'`);
              }
            }
            if (adapter && (utils$1.isFunction(adapter) || (adapter = adapter.get(config)))) {
              break;
            }
            rejectedReasons[id || '#' + i] = adapter;
          }
          if (!adapter) {
            const reasons = Object.entries(rejectedReasons).map(([id, state]) => `adapter ${id} ` + (state === false ? 'is not supported by the environment' : 'is not available in the build'));
            let s = length ? reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0]) : 'as no adapter specified';
            throw new AxiosError$1(`There is no suitable adapter to dispatch the request ` + s, 'ERR_NOT_SUPPORT');
          }
          return adapter;
        }

        /**
         * Exports Axios adapters and utility to resolve an adapter
         */
        const adapters = {
          /**
           * Resolve an adapter from a list of adapter names or functions.
           * @type {Function}
           */
          getAdapter: getAdapter$1,
          /**
           * Exposes all known adapters
           * @type {Object<string, Function|Object>}
           */
          adapters: knownAdapters
        };

        /**
         * Throws a `CanceledError` if cancellation has been requested.
         *
         * @param {Object} config The config that is to be used for the request
         *
         * @returns {void}
         */
        function throwIfCancellationRequested(config) {
          if (config.cancelToken) {
            config.cancelToken.throwIfRequested();
          }
          if (config.signal && config.signal.aborted) {
            throw new CanceledError$1(null, config);
          }
        }

        /**
         * Dispatch a request to the server using the configured adapter.
         *
         * @param {object} config The config that is to be used for the request
         *
         * @returns {Promise} The Promise to be fulfilled
         */
        function dispatchRequest(config) {
          throwIfCancellationRequested(config);
          config.headers = AxiosHeaders$1.from(config.headers);

          // Transform request data
          config.data = transformData.call(config, config.transformRequest);
          if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
            config.headers.setContentType('application/x-www-form-urlencoded', false);
          }
          const adapter = adapters.getAdapter(config.adapter || defaults.adapter, config);
          return adapter(config).then(function onAdapterResolution(response) {
            throwIfCancellationRequested(config);

            // Transform response data
            response.data = transformData.call(config, config.transformResponse, response);
            response.headers = AxiosHeaders$1.from(response.headers);
            return response;
          }, function onAdapterRejection(reason) {
            if (!isCancel$1(reason)) {
              throwIfCancellationRequested(config);

              // Transform response data
              if (reason && reason.response) {
                reason.response.data = transformData.call(config, config.transformResponse, reason.response);
                reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
              }
            }
            return Promise.reject(reason);
          });
        }
        const VERSION$1 = "1.13.2";
        const validators$1 = {};

        // eslint-disable-next-line func-names
        ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
          validators$1[type] = function validator(thing) {
            return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
          };
        });
        const deprecatedWarnings = {};

        /**
         * Transitional option validator
         *
         * @param {function|boolean?} validator - set to false if the transitional option has been removed
         * @param {string?} version - deprecated version / removed since version
         * @param {string?} message - some message with additional info
         *
         * @returns {function}
         */
        validators$1.transitional = function transitional(validator, version, message) {
          function formatMessage(opt, desc) {
            return '[Axios v' + VERSION$1 + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
          }

          // eslint-disable-next-line func-names
          return (value, opt, opts) => {
            if (validator === false) {
              throw new AxiosError$1(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), AxiosError$1.ERR_DEPRECATED);
            }
            if (version && !deprecatedWarnings[opt]) {
              deprecatedWarnings[opt] = true;
              // eslint-disable-next-line no-console
              console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
            }
            return validator ? validator(value, opt, opts) : true;
          };
        };
        validators$1.spelling = function spelling(correctSpelling) {
          return (value, opt) => {
            // eslint-disable-next-line no-console
            console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
            return true;
          };
        };

        /**
         * Assert object's properties type
         *
         * @param {object} options
         * @param {object} schema
         * @param {boolean?} allowUnknown
         *
         * @returns {object}
         */

        function assertOptions(options, schema, allowUnknown) {
          if (typeof options !== 'object') {
            throw new AxiosError$1('options must be an object', AxiosError$1.ERR_BAD_OPTION_VALUE);
          }
          const keys = Object.keys(options);
          let i = keys.length;
          while (i-- > 0) {
            const opt = keys[i];
            const validator = schema[opt];
            if (validator) {
              const value = options[opt];
              const result = value === undefined || validator(value, opt, options);
              if (result !== true) {
                throw new AxiosError$1('option ' + opt + ' must be ' + result, AxiosError$1.ERR_BAD_OPTION_VALUE);
              }
              continue;
            }
            if (allowUnknown !== true) {
              throw new AxiosError$1('Unknown option ' + opt, AxiosError$1.ERR_BAD_OPTION);
            }
          }
        }
        const validator = {
          assertOptions,
          validators: validators$1
        };
        const validators = validator.validators;

        /**
         * Create a new instance of Axios
         *
         * @param {Object} instanceConfig The default config for the instance
         *
         * @return {Axios} A new instance of Axios
         */
        let Axios$1 = class Axios {
          constructor(instanceConfig) {
            this.defaults = instanceConfig || {};
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
          request(configOrUrl, config) {
            var _this = this;
            return _asyncToGenerator(function* () {
              try {
                return yield _this._request(configOrUrl, config);
              } catch (err) {
                if (err instanceof Error) {
                  let dummy = {};
                  Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = new Error();

                  // slice off the Error: ... line
                  const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, '') : '';
                  try {
                    if (!err.stack) {
                      err.stack = stack;
                      // match without the 2 top stack lines
                    } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ''))) {
                      err.stack += '\n' + stack;
                    }
                  } catch (e) {
                    // ignore the case where "stack" is an un-writable property
                  }
                }
                throw err;
              }
            })();
          }
          _request(configOrUrl, config) {
            /*eslint no-param-reassign:0*/
            // Allow for axios('example/url'[, config]) a la fetch API
            if (typeof configOrUrl === 'string') {
              config = config || {};
              config.url = configOrUrl;
            } else {
              config = configOrUrl || {};
            }
            config = mergeConfig$1(this.defaults, config);
            const _config2 = config,
              transitional = _config2.transitional,
              paramsSerializer = _config2.paramsSerializer,
              headers = _config2.headers;
            if (transitional !== undefined) {
              validator.assertOptions(transitional, {
                silentJSONParsing: validators.transitional(validators.boolean),
                forcedJSONParsing: validators.transitional(validators.boolean),
                clarifyTimeoutError: validators.transitional(validators.boolean)
              }, false);
            }
            if (paramsSerializer != null) {
              if (utils$1.isFunction(paramsSerializer)) {
                config.paramsSerializer = {
                  serialize: paramsSerializer
                };
              } else {
                validator.assertOptions(paramsSerializer, {
                  encode: validators.function,
                  serialize: validators.function
                }, true);
              }
            }

            // Set config.allowAbsoluteUrls
            if (config.allowAbsoluteUrls !== undefined) ;else if (this.defaults.allowAbsoluteUrls !== undefined) {
              config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
            } else {
              config.allowAbsoluteUrls = true;
            }
            validator.assertOptions(config, {
              baseUrl: validators.spelling('baseURL'),
              withXsrfToken: validators.spelling('withXSRFToken')
            }, true);

            // Set config.method
            config.method = (config.method || this.defaults.method || 'get').toLowerCase();

            // Flatten headers
            let contextHeaders = headers && utils$1.merge(headers.common, headers[config.method]);
            headers && utils$1.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], method => {
              delete headers[method];
            });
            config.headers = AxiosHeaders$1.concat(contextHeaders, headers);

            // filter out skipped interceptors
            const requestInterceptorChain = [];
            let synchronousRequestInterceptors = true;
            this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
              if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
                return;
              }
              synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
              requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
            });
            const responseInterceptorChain = [];
            this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
              responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
            });
            let promise;
            let i = 0;
            let len;
            if (!synchronousRequestInterceptors) {
              const chain = [dispatchRequest.bind(this), undefined];
              chain.unshift(...requestInterceptorChain);
              chain.push(...responseInterceptorChain);
              len = chain.length;
              promise = Promise.resolve(config);
              while (i < len) {
                promise = promise.then(chain[i++], chain[i++]);
              }
              return promise;
            }
            len = requestInterceptorChain.length;
            let newConfig = config;
            while (i < len) {
              const onFulfilled = requestInterceptorChain[i++];
              const onRejected = requestInterceptorChain[i++];
              try {
                newConfig = onFulfilled(newConfig);
              } catch (error) {
                onRejected.call(this, error);
                break;
              }
            }
            try {
              promise = dispatchRequest.call(this, newConfig);
            } catch (error) {
              return Promise.reject(error);
            }
            i = 0;
            len = responseInterceptorChain.length;
            while (i < len) {
              promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
            }
            return promise;
          }
          getUri(config) {
            config = mergeConfig$1(this.defaults, config);
            const fullPath = buildFullPath(config.baseURL, config.url, config.allowAbsoluteUrls);
            return buildURL(fullPath, config.params, config.paramsSerializer);
          }
        };

        // Provide aliases for supported request methods
        utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
          /*eslint func-names:0*/
          Axios$1.prototype[method] = function (url, config) {
            return this.request(mergeConfig$1(config || {}, {
              method,
              url,
              data: (config || {}).data
            }));
          };
        });
        utils$1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
          /*eslint func-names:0*/

          function generateHTTPMethod(isForm) {
            return function httpMethod(url, data, config) {
              return this.request(mergeConfig$1(config || {}, {
                method,
                headers: isForm ? {
                  'Content-Type': 'multipart/form-data'
                } : {},
                url,
                data
              }));
            };
          }
          Axios$1.prototype[method] = generateHTTPMethod();
          Axios$1.prototype[method + 'Form'] = generateHTTPMethod(true);
        });

        /**
         * A `CancelToken` is an object that can be used to request cancellation of an operation.
         *
         * @param {Function} executor The executor function.
         *
         * @returns {CancelToken}
         */
        let CancelToken$1 = class CancelToken {
          constructor(executor) {
            if (typeof executor !== 'function') {
              throw new TypeError('executor must be a function.');
            }
            let resolvePromise;
            this.promise = new Promise(function promiseExecutor(resolve) {
              resolvePromise = resolve;
            });
            const token = this;

            // eslint-disable-next-line func-names
            this.promise.then(cancel => {
              if (!token._listeners) return;
              let i = token._listeners.length;
              while (i-- > 0) {
                token._listeners[i](cancel);
              }
              token._listeners = null;
            });

            // eslint-disable-next-line func-names
            this.promise.then = onfulfilled => {
              let _resolve;
              // eslint-disable-next-line func-names
              const promise = new Promise(resolve => {
                token.subscribe(resolve);
                _resolve = resolve;
              }).then(onfulfilled);
              promise.cancel = function reject() {
                token.unsubscribe(_resolve);
              };
              return promise;
            };
            executor(function cancel(message, config, request) {
              if (token.reason) {
                // Cancellation has already been requested
                return;
              }
              token.reason = new CanceledError$1(message, config, request);
              resolvePromise(token.reason);
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
            const abort = err => {
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
            const token = new CancelToken(function executor(c) {
              cancel = c;
            });
            return {
              token,
              cancel
            };
          }
        };

        /**
         * Syntactic sugar for invoking a function and expanding an array for arguments.
         *
         * Common use case would be to use `Function.prototype.apply`.
         *
         *  ```js
         *  function f(x, y, z) {}
         *  var args = [1, 2, 3];
         *  f.apply(null, args);
         *  ```
         *
         * With `spread` this example can be re-written.
         *
         *  ```js
         *  spread(function(x, y, z) {})([1, 2, 3]);
         *  ```
         *
         * @param {Function} callback
         *
         * @returns {Function}
         */
        function spread$1(callback) {
          return function wrap(arr) {
            return callback.apply(null, arr);
          };
        }

        /**
         * Determines whether the payload is an error thrown by Axios
         *
         * @param {*} payload The value to test
         *
         * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
         */
        function isAxiosError$1(payload) {
          return utils$1.isObject(payload) && payload.isAxiosError === true;
        }
        const HttpStatusCode$1 = {
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
          NetworkAuthenticationRequired: 511,
          WebServerIsDown: 521,
          ConnectionTimedOut: 522,
          OriginIsUnreachable: 523,
          TimeoutOccurred: 524,
          SslHandshakeFailed: 525,
          InvalidSslCertificate: 526
        };
        Object.entries(HttpStatusCode$1).forEach(([key, value]) => {
          HttpStatusCode$1[value] = key;
        });

        /**
         * Create an instance of Axios
         *
         * @param {Object} defaultConfig The default config for the instance
         *
         * @returns {Axios} A new instance of Axios
         */
        function createInstance(defaultConfig) {
          const context = new Axios$1(defaultConfig);
          const instance = bind(Axios$1.prototype.request, context);

          // Copy axios.prototype to instance
          utils$1.extend(instance, Axios$1.prototype, context, {
            allOwnKeys: true
          });

          // Copy context to instance
          utils$1.extend(instance, context, null, {
            allOwnKeys: true
          });

          // Factory for creating new instances
          instance.create = function create(instanceConfig) {
            return createInstance(mergeConfig$1(defaultConfig, instanceConfig));
          };
          return instance;
        }

        // Create the default instance to be exported
        const axios = createInstance(defaults);

        // Expose Axios class to allow class inheritance
        axios.Axios = Axios$1;

        // Expose Cancel & CancelToken
        axios.CanceledError = CanceledError$1;
        axios.CancelToken = CancelToken$1;
        axios.isCancel = isCancel$1;
        axios.VERSION = VERSION$1;
        axios.toFormData = toFormData$1;

        // Expose AxiosError class
        axios.AxiosError = AxiosError$1;

        // alias for CanceledError for backward compatibility
        axios.Cancel = axios.CanceledError;

        // Expose all/spread
        axios.all = function all(promises) {
          return Promise.all(promises);
        };
        axios.spread = spread$1;

        // Expose isAxiosError
        axios.isAxiosError = isAxiosError$1;

        // Expose mergeConfig
        axios.mergeConfig = mergeConfig$1;
        axios.AxiosHeaders = AxiosHeaders$1;
        axios.formToJSON = thing => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);
        axios.getAdapter = adapters.getAdapter;
        axios.HttpStatusCode = HttpStatusCode$1;
        axios.default = axios;

        // This module is intended to unwrap Axios default export as named.
        // Keep top-level export same with static properties
        // so that it can keep same with es module or cjs
        const Axios = axios.Axios,
          AxiosError = axios.AxiosError,
          CanceledError = axios.CanceledError,
          isCancel = axios.isCancel,
          CancelToken = axios.CancelToken,
          VERSION = axios.VERSION,
          all = axios.all,
          Cancel = axios.Cancel,
          isAxiosError = axios.isAxiosError,
          spread = axios.spread,
          toFormData = axios.toFormData,
          AxiosHeaders = axios.AxiosHeaders,
          HttpStatusCode = axios.HttpStatusCode,
          formToJSON = axios.formToJSON,
          getAdapter = axios.getAdapter,
          mergeConfig = axios.mergeConfig;
        const buildValidationDefaultData = rule => {
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
          const _result$splice = result.splice(startIndex, 1),
            _result$splice2 = _slicedToArray(_result$splice, 1),
            removed = _result$splice2[0];
          result.splice(endIndex, 0, removed);
          return result;
        };
        function collectExistingGroupCodes(groups) {
          const ids = new Set();
          if (Array.isArray(groups)) {
            groups.forEach(g => {
              if (g && g.code) ids.add(g.code);
            });
          }
          return ids;
        }
        const nextGroupId = groups => {
          const existing = collectExistingGroupCodes(groups);
          return generateId(existing);
        };
        function collectExistingIds(state, groups) {
          const ids = new Set();
          groups.forEach(group => {
            const groupObj = state[group.code];
            if (groupObj && groupObj.children) {
              groupObj.children.forEach(q => {
                if (q.code) {
                  ids.add(q.code);
                }
              });
            }
          });
          return ids;
        }
        function randChar(chars) {
          const array = new Uint32Array(1);
          crypto.getRandomValues(array);
          return chars[array[0] % chars.length];
        }
        function generateId(existing) {
          const letters = "abcdefghijklmnopqrstuvwxyz";
          const numbers = "0123456789";
          let id = "";
          do {
            const numPart = Array.from({
              length: 3
            }, () => randChar(numbers)).join("");
            const letPart = Array.from({
              length: 3
            }, () => randChar(letters)).join("");
            id = numPart + letPart;
          } while (existing.has(id));
          return id;
        }
        const nextQuestionId = (state, groups) => {
          const existing = collectExistingIds(state, groups);
          return generateId(existing);
        };
        const buildReferenceInstruction = (content, name, key, contentPath) => {
          const allMatches = getAllMatches(content);
          return allMatches.map((match, index) => {
            return {
              code: `format_${name}_${key}_${index + 1}`,
              contentPath,
              text: match,
              lang: key
            };
          });
        };
        const getAllMatches = inputString => {
          const regex = /\{\{(.*?)\}\}/g;
          return Array.from(inputString.matchAll(regex), m => m[1].trim());
        };
        const themeSetup = {
          code: "Survey",
          rules: [{
            title: "",
            rules: ["theme"]
          }]
        };
        const languageSetup = {
          code: "Survey",
          rules: [{
            title: "",
            rules: ["language"]
          }]
        };
        const setupOptions = type => {
          switch (type) {
            case "group":
            case "welcome":
            case "end":
              return [{
                title: "general",
                key: "general",
                rules: ["changeCode", "disabled", "showDescription"]
              }, {
                title: "logic",
                key: "logic",
                rules: ["relevance", "randomize_questions"]
              }, {
                title: "design",
                key: "design",
                rules: ["customCss"]
              }, {
                title: "advanced",
                key: "advanced",
                rules: ["order_instructions", "conditional_relevance"]
              }];
            case "text_display":
              return [{
                title: "general",
                key: "general",
                rules: ["changeCode", "disabled", "showDescription"]
              }, {
                title: "logic",
                key: "logic",
                rules: ["relevance"]
              }, {
                title: "design",
                key: "design",
                rules: ["customCss"]
              }, {
                title: "advanced",
                key: "advanced",
                rules: ["order_instructions", "conditional_relevance"]
              }];
            case "image_display":
              return [{
                title: "general",
                key: "general",
                rules: ["changeCode", "disabled", "showDescription", "imageWidth"]
              }, {
                title: "logic",
                key: "logic",
                rules: ["relevance"]
              }, {
                title: "design",
                key: "design",
                rules: ["customCss"]
              }, {
                title: "advanced",
                key: "advanced",
                rules: ["order_instructions", "conditional_relevance"]
              }];
            case "video_display":
              return [{
                title: "general",
                key: "general",
                rules: ["changeCode", "disabled", "showDescription", "audio_only", "loop"]
              }, {
                title: "logic",
                key: "logic",
                rules: ["relevance"]
              }, {
                title: "design",
                key: "design",
                rules: ["customCss"]
              }, {
                title: "advanced",
                key: "advanced",
                rules: ["order_instructions", "conditional_relevance"]
              }];
            case "text":
              return [{
                title: "general",
                key: "general",
                rules: ["changeCode", "disabled", "showDescription", "maxChars", "hint"]
              }, {
                title: "logic",
                key: "logic",
                rules: ["relevance", "prefill"]
              }, {
                title: "validation",
                key: "validation",
                rules: ["validation_required", "validation_max_char_length", "validation_min_char_length", "validation_pattern", "validation_contains", "validation_not_contains", "custom_validation_rules"]
              }, {
                title: "design",
                key: "design",
                rules: ["customCss"]
              }, {
                title: "advanced",
                key: "advanced",
                rules: ["order_instructions", "conditional_relevance"]
              }];
            case "options":
              return [{
                title: "",
                key: "",
                rules: ["changeCode", "disabled", "relevance"]
              }, {
                title: "advanced",
                key: "advanced",
                rules: ["order_instructions", "conditional_relevance"]
              }];
            case "other_text":
              return [{
                title: "general",
                key: "general",
                rules: ["maxChars"]
              }, {
                title: "validation",
                key: "validation",
                rules: ["validation_required", "validation_max_char_length", "validation_min_char_length", "validation_pattern", "validation_contains", "validation_not_contains", "custom_validation_rules"]
              }, {
                title: "advanced",
                key: "advanced",
                rules: ["conditional_relevance"]
              }];
            case "number":
              return [{
                title: "general",
                key: "general",
                rules: ["changeCode", "disabled", "showDescription", "maxChars", "decimal_separator", "hint"]
              }, {
                title: "logic",
                key: "logic",
                rules: ["relevance", "prefill"]
              }, {
                title: "validation",
                key: "validation",
                rules: ["validation_required", "validation_between", "validation_not_between", "validation_lt", "validation_lte", "validation_gt", "validation_gte", "validation_equals", "validation_not_equal", "custom_validation_rules"]
              }, {
                title: "design",
                key: "design",
                rules: ["customCss"]
              }, {
                title: "advanced",
                key: "advanced",
                rules: ["order_instructions", "conditional_relevance"]
              }];
            case "email":
              return [{
                title: "general",
                key: "general",
                rules: ["changeCode", "disabled", "showDescription", "maxChars", "hint"]
              }, {
                title: "logic",
                key: "logic",
                rules: ["relevance", "prefill"]
              }, {
                title: "validation",
                key: "validation",
                rules: ["validation_required", "validation_pattern_email", "validation_max_char_length", "validation_min_char_length", "custom_validation_rules"]
              }, {
                title: "design",
                key: "design",
                rules: ["customCss"]
              }, {
                title: "advanced",
                key: "advanced",
                rules: ["order_instructions", "conditional_relevance"]
              }];
            case "autocomplete":
              return [{
                title: "general",
                key: "general",
                rules: ["changeCode", "disabled", "showDescription"]
              }, {
                title: "logic",
                key: "logic",
                rules: ["relevance", "prefill"]
              }, {
                title: "validation",
                key: "validation",
                rules: ["validation_required", "custom_validation_rules"]
              }, {
                title: "design",
                key: "design",
                rules: ["customCss"]
              }, {
                title: "advanced",
                key: "advanced",
                rules: ["order_instructions", "conditional_relevance"]
              }];
            case "paragraph":
              return [{
                title: "general",
                key: "general",
                rules: ["changeCode", "disabled", "showDescription", "minRows", "showWordCount", "hint"]
              }, {
                title: "logic",
                key: "logic",
                rules: ["relevance", "prefill"]
              }, {
                title: "validation",
                key: "validation",
                rules: ["validation_required", "validation_max_word_count", "validation_min_word_count", "validation_contains", "validation_not_contains", "custom_validation_rules"]
              }, {
                title: "design",
                key: "design",
                rules: ["customCss"]
              }, {
                title: "advanced",
                key: "advanced",
                rules: ["order_instructions", "conditional_relevance"]
              }];
            case "file_upload":
              return [{
                title: "general",
                key: "general",
                rules: ["changeCode", "disabled", "showDescription"]
              }, {
                title: "logic",
                key: "logic",
                rules: ["relevance"]
              }, {
                title: "validation",
                key: "validation",
                rules: ["validation_required", "validation_file_types", "validation_max_file_size", "custom_validation_rules"]
              }, {
                title: "design",
                key: "design",
                rules: ["customCss"]
              }, {
                title: "advanced",
                key: "advanced",
                rules: ["order_instructions", "conditional_relevance"]
              }];
            case "signature":
              return [{
                title: "general",
                key: "general",
                rules: ["changeCode", "disabled", "showDescription"]
              }, {
                title: "logic",
                key: "logic",
                rules: ["relevance"]
              }, {
                title: "validation",
                key: "validation",
                rules: ["validation_required", "custom_validation_rules"]
              }, {
                title: "design",
                key: "design",
                rules: ["customCss"]
              }, {
                title: "advanced",
                key: "advanced",
                rules: ["order_instructions", "conditional_relevance"]
              }];
            case "photo_capture":
              return [{
                title: "general",
                key: "general",
                rules: ["changeCode", "disabled", "showDescription"]
              }, {
                title: "logic",
                key: "logic",
                rules: ["relevance"]
              }, {
                title: "validation",
                key: "validation",
                rules: ["validation_required", "validation_max_file_size", "custom_validation_rules"]
              }, {
                title: "design",
                key: "design",
                rules: ["customCss"]
              }, {
                title: "advanced",
                key: "advanced",
                rules: ["order_instructions", "conditional_relevance"]
              }];
            case "barcode":
              return [{
                title: "general",
                key: "general",
                rules: ["changeCode", "disabled", "showDescription"]
              }, {
                title: "logic",
                key: "logic",
                rules: ["relevance"]
              }, {
                title: "validation",
                key: "validation",
                rules: ["validation_required", "custom_validation_rules"]
              }, {
                title: "design",
                key: "design",
                rules: ["customCss"]
              }, {
                title: "advanced",
                key: "advanced",
                rules: ["order_instructions", "conditional_relevance"]
              }];
            case "video_capture":
              return [{
                title: "general",
                key: "general",
                rules: ["changeCode", "disabled", "showDescription"]
              }, {
                title: "logic",
                key: "logic",
                rules: ["relevance"]
              }, {
                title: "validation",
                key: "validation",
                rules: ["validation_required", "validation_max_file_size", "custom_validation_rules"]
              }, {
                title: "design",
                key: "design",
                rules: ["customCss"]
              }, {
                title: "advanced",
                key: "advanced",
                rules: ["order_instructions", "conditional_relevance"]
              }];
            case "date_time":
              return [{
                title: "general",
                key: "general",
                rules: ["changeCode", "disabled", "showDescription", "dateFormat", "fullDayFormat", "maxDate", "minDate", "hint"]
              }, {
                title: "logic",
                key: "logic",
                rules: ["relevance", "prefill"]
              }, {
                title: "validation",
                key: "validation",
                rules: ["validation_required", "custom_validation_rules"]
              }, {
                title: "design",
                key: "design",
                rules: ["customCss"]
              }, {
                title: "advanced",
                key: "advanced",
                rules: ["order_instructions", "conditional_relevance"]
              }];
            case "date":
              return [{
                title: "general",
                key: "general",
                rules: ["changeCode", "disabled", "showDescription", "dateFormat", "maxDate", "minDate", "hint"]
              }, {
                title: "logic",
                key: "logic",
                rules: ["relevance", "prefill"]
              }, {
                title: "validation",
                key: "validation",
                rules: ["validation_required", "custom_validation_rules"]
              }, {
                title: "design",
                key: "design",
                rules: ["customCss"]
              }, {
                title: "advanced",
                key: "advanced",
                rules: ["order_instructions", "conditional_relevance"]
              }];
            case "time":
              return [{
                title: "general",
                key: "general",
                rules: ["changeCode", "disabled", "showDescription", "fullDayFormat", "hint"]
              }, {
                title: "logic",
                key: "logic",
                rules: ["relevance", "prefill"]
              }, {
                title: "validation",
                key: "validation",
                rules: ["validation_required", "custom_validation_rules"]
              }, {
                title: "design",
                key: "design",
                rules: ["customCss"]
              }, {
                title: "advanced",
                key: "advanced",
                rules: ["order_instructions", "conditional_relevance"]
              }];
            case "scq":
              return [{
                title: "general",
                key: "general",
                rules: ["changeCode", "disabled", "showDescription", "scq_default_value"]
              }, {
                title: "logic",
                key: "logic",
                rules: ["relevance", "prefill", "randomize_options", "skip_logic"]
              }, {
                title: "validation",
                key: "validation",
                rules: ["validation_required", "custom_validation_rules"]
              }, {
                title: "design",
                key: "design",
                rules: ["customCss"]
              }, {
                title: "advanced",
                key: "advanced",
                rules: ["order_instructions", "conditional_relevance"]
              }];
            case "icon_scq":
              return [{
                title: "general",
                key: "general",
                rules: ["changeCode", "disabled", "showDescription", "hideText", "columns", "iconSize", "spacing"]
              }, {
                title: "logic",
                key: "logic",
                rules: ["relevance", "prefill", "randomize_options", "skip_logic"]
              }, {
                title: "validation",
                key: "validation",
                rules: ["validation_required", "custom_validation_rules"]
              }, {
                title: "design",
                key: "design",
                rules: ["customCss"]
              }, {
                title: "advanced",
                key: "advanced",
                rules: ["order_instructions", "conditional_relevance"]
              }];
            case "image_scq":
              return [{
                title: "general",
                key: "general",
                rules: ["changeCode", "disabled", "showDescription", "hideText", "columns", "imageAspectRatio", "spacing"]
              }, {
                title: "logic",
                key: "logic",
                rules: ["relevance", "prefill", "randomize_options", "skip_logic"]
              }, {
                title: "validation",
                key: "validation",
                rules: ["validation_required", "custom_validation_rules"]
              }, {
                title: "design",
                key: "design",
                rules: ["customCss"]
              }, {
                title: "advanced",
                key: "advanced",
                rules: ["order_instructions", "conditional_relevance"]
              }];
            case "mcq":
              return [{
                title: "general",
                key: "general",
                rules: ["changeCode", "disabled", "showDescription"]
              }, {
                title: "logic",
                key: "logic",
                rules: ["relevance", "prefill", "randomize_options"]
              }, {
                title: "validation",
                key: "validation",
                rules: ["validation_min_option_count", "validation_max_option_count", "validation_option_count", "custom_validation_rules"]
              }, {
                title: "design",
                key: "design",
                rules: ["customCss"]
              }, {
                title: "advanced",
                key: "advanced",
                rules: ["order_instructions", "conditional_relevance"]
              }];
            case "multiple_text":
              return [{
                title: "general",
                key: "general",
                rules: ["changeCode", "disabled", "showDescription"]
              }, {
                title: "logic",
                key: "logic",
                rules: ["relevance", "prefill", "randomize_options"]
              }, {
                title: "validation",
                key: "validation",
                rules: ["validation_required", "custom_validation_rules"]
              }, {
                title: "design",
                key: "design",
                rules: ["customCss"]
              }, {
                title: "advanced",
                key: "advanced",
                rules: ["order_instructions", "conditional_relevance"]
              }];
            case "ranking":
              return [{
                title: "general",
                key: "general",
                rules: ["changeCode", "disabled", "showDescription"]
              }, {
                title: "logic",
                key: "logic",
                rules: ["relevance", "prefill", "randomize_options"]
              }, {
                title: "validation",
                key: "validation",
                rules: ["validation_min_ranking_count", "validation_max_ranking_count", "validation_ranking_count", "custom_validation_rules"]
              }, {
                title: "design",
                key: "design",
                rules: ["customCss"]
              }, {
                title: "advanced",
                key: "advanced",
                rules: ["order_instructions", "conditional_relevance"]
              }];
            case "image_ranking":
              return [{
                title: "general",
                key: "general",
                rules: ["changeCode", "disabled", "showDescription", "hideText", "columns", "imageAspectRatio", "spacing"]
              }, {
                title: "logic",
                key: "logic",
                rules: ["relevance", "prefill", "randomize_options"]
              }, {
                title: "validation",
                key: "validation",
                rules: ["validation_min_ranking_count", "validation_max_ranking_count", "validation_ranking_count", "custom_validation_rules"]
              }, {
                title: "design",
                key: "design",
                rules: ["customCss"]
              }, {
                title: "advanced",
                key: "advanced",
                rules: ["order_instructions", "conditional_relevance"]
              }];
            case "icon_mcq":
              return [{
                title: "general",
                key: "general",
                rules: ["changeCode", "disabled", "showDescription", "hideText", "columns", "iconSize", "spacing"]
              }, {
                title: "logic",
                key: "logic",
                rules: ["relevance", "prefill", "randomize_options"]
              }, {
                title: "validation",
                key: "validation",
                rules: ["validation_min_option_count", "validation_max_option_count", "validation_option_count", "custom_validation_rules"]
              }, {
                title: "design",
                key: "design",
                rules: ["customCss"]
              }, {
                title: "advanced",
                key: "advanced",
                rules: ["order_instructions", "conditional_relevance"]
              }];
            case "image_mcq":
              return [{
                title: "general",
                key: "general",
                rules: ["changeCode", "disabled", "showDescription", "hideText", "columns", "imageAspectRatio", "spacing"]
              }, {
                title: "logic",
                key: "logic",
                rules: ["relevance", "prefill", "randomize_options"]
              }, {
                title: "validation",
                key: "validation",
                rules: ["validation_min_option_count", "validation_max_option_count", "validation_option_count", "custom_validation_rules"]
              }, {
                title: "design",
                key: "design",
                rules: ["customCss"]
              }, {
                title: "advanced",
                key: "advanced",
                rules: ["order_instructions", "conditional_relevance"]
              }];
            case "scq_icon_array":
              return [{
                title: "general",
                key: "general",
                rules: ["changeCode", "disabled", "showDescription"]
              }, {
                title: "logic",
                key: "logic",
                rules: ["relevance", "randomize_rows", "randomize_columns"]
              }, {
                title: "validation",
                key: "validation",
                rules: ["validation_required", "validation_one_response_per_col", "custom_validation_rules"]
              }, {
                title: "design",
                key: "design",
                rules: ["customCss"]
              }, {
                title: "advanced",
                key: "advanced",
                rules: ["order_instructions", "conditional_relevance"]
              }];
            case "mcq_array":
            case "scq_array":
              return [{
                title: "general",
                key: "general",
                rules: ["changeCode", "showDescription", "disabled", "minHeaderMobile", "minHeaderDesktop", "minRowLabelMobile", "minRowLabelDesktop"]
              }, {
                title: "logic",
                key: "logic",
                rules: ["relevance", "randomize_rows", "randomize_columns"]
              }, {
                title: "validation",
                key: "validation",
                rules: ["validation_required", "validation_one_response_per_col", "custom_validation_rules"]
              }, {
                title: "design",
                key: "design",
                rules: ["customCss"]
              }, {
                title: "advanced",
                key: "advanced",
                rules: ["order_instructions", "conditional_relevance"]
              }];
            case "nps":
              return [{
                title: "general",
                key: "general",
                rules: ["changeCode", "disabled", "showDescription", "lower_bound_hint", "higher_bound_hint"]
              }, {
                title: "logic",
                key: "logic",
                rules: ["relevance", "prefill"]
              }, {
                title: "validation",
                key: "validation",
                rules: ["validation_required", "custom_validation_rules"]
              }, {
                title: "design",
                key: "design",
                rules: ["customCss"]
              }, {
                title: "advanced",
                key: "advanced",
                rules: ["order_instructions", "conditional_relevance"]
              }];
          }
        };
        const cleanupDefaultValue = component => {
          var _component$instructio, _component$children;
          // Check if this is a single choice question type that supports default values
          if (!component.type || !["scq", "icon_scq", "image_scq"].includes(component.type)) {
            return;
          }

          // Find the value instruction that contains the default value
          const valueInstruction = (_component$instructio = component.instructionList) === null || _component$instructio === void 0 ? void 0 : _component$instructio.find(instruction => instruction.code === "value");
          if (!valueInstruction || !valueInstruction.text) {
            return; // No default value set
          }

          // Get current answer codes
          const currentAnswerCodes = ((_component$children = component.children) === null || _component$children === void 0 ? void 0 : _component$children.map(child => child.code)) || [];

          // Check if the current default value still exists in the answers
          if (!currentAnswerCodes.includes(valueInstruction.text)) {
            // Default value refers to a deleted answer - clear the text value
            changeInstruction(component, _objectSpread(_objectSpread({}, valueInstruction), {}, {
              text: "",
              isActive: false
            }));
          }
        };
        const addSkipInstructions = (state, code) => {
          const component = state[code];
          if (component.type != "scq" && component.type != "image_scq" && component.type != "icon_scq") {
            return;
          }

          // Clean up skip_logic conditions to remove invalid answer codes
          if (component.skip_logic && Array.isArray(component.skip_logic)) {
            var _component$children2;
            const validAnswerCodes = ((_component$children2 = component.children) === null || _component$children2 === void 0 ? void 0 : _component$children2.map(child => child.code)) || [];
            component.skip_logic = component.skip_logic.map(rule => {
              var _rule$condition;
              return _objectSpread(_objectSpread({}, rule), {}, {
                condition: ((_rule$condition = rule.condition) === null || _rule$condition === void 0 ? void 0 : _rule$condition.filter(answerCode => validAnswerCodes.includes(answerCode))) || []
              });
            }).filter(rule => rule.condition.length > 0);
          }
          const instructions = scqSkipEquations(code, component);
          instructions.forEach(instruction => {
            changeInstruction(state[code], instruction);
          });
        };
        const refreshEnumForSingleChoice = (component, state) => {
          if (!component.type || !["scq", "icon_scq", "image_scq", "scq_icon_array", "scq_array"].includes(component.type)) {
            return;
          }
          switch (component.type) {
            case "image_scq":
            case "icon_scq":
            case "scq":
              let valueInstruction = component.instructionList.find(it => it.code == "value");
              if (component.children && component.children.length) {
                valueInstruction.returnType = {
                  type: "enum",
                  values: component.children.map(it => it.code)
                };
                changeInstruction(component, valueInstruction);
              } else {
                valueInstruction.returnType = "string";
                changeInstruction(component, valueInstruction);
              }
              break;
            case "scq_icon_array":
            case "scq_array":
              if (component.children && component.children.length && component.children.filter(el => el.type == "column").length && component.children.filter(el => el.type === "row").length) {
                component.children.filter(el => el.type === "row").forEach(el => {
                  const row = state[el.qualifiedCode];
                  const valueInstruction = row.instructionList.find(it => it.code == "value");
                  if (valueInstruction) {
                    valueInstruction.returnType = {
                      type: "enum",
                      values: component.children.filter(el => el.type == "column").map(el => el.code)
                    };
                    changeInstruction(row, valueInstruction);
                  }
                });
              } else if (component.children && component.children.filter(el => el.type === "row").length) {
                component.children.filter(el => el.type === "row").forEach(el => {
                  const row = state[el.qualifiedCode];
                  const valueInstruction = row.instructionList.find(it => it.code == "value");
                  if (valueInstruction) {
                    valueInstruction.returnType = "string";
                    changeInstruction(row, valueInstruction);
                  }
                });
              }
          }
          return component;
        };
        const refreshListForMultipleChoice = (component, state) => {
          if (!component.type || !["mcq", "icon_mcq", "image_mcq", "mcq_array"].includes(component.type)) {
            return;
          }
          switch (component.type) {
            case "image_mcq":
            case "icon_mcq":
            case "mcq":
              let valueInstruction = component.instructionList.find(it => it.code == "value");
              if (component.children && component.children.length) {
                valueInstruction.returnType = {
                  type: "list",
                  values: component.children.map(it => it.code)
                };
                changeInstruction(component, valueInstruction);
              } else {
                valueInstruction.returnType = "list";
                changeInstruction(component, valueInstruction);
              }
              break;
            case "mcq_array":
              if (component.children && component.children.length && component.children.filter(el => el.type == "column").length && component.children.filter(el => el.type === "row").length) {
                component.children.filter(el => el.type === "row").forEach(el => {
                  const row = state[el.qualifiedCode];
                  const valueInstruction = row.instructionList.find(it => it.code == "value");
                  if (valueInstruction) {
                    valueInstruction.returnType = {
                      type: "list",
                      values: component.children.filter(el => el.type == "column").map(el => el.code)
                    };
                    changeInstruction(row, valueInstruction);
                  }
                });
              } else if (component.children && component.children.filter(el => el.type === "row").length) {
                component.children.filter(el => el.type === "row").forEach(el => {
                  const row = state[el.qualifiedCode];
                  const valueInstruction = row.instructionList.find(it => it.code == "value");
                  if (valueInstruction) {
                    valueInstruction.returnType = "list";
                    changeInstruction(row, valueInstruction);
                  }
                });
              }
          }
          return component;
        };
        const addMaskedValuesInstructions = (qualifiedCode, component, state) => {
          if (!component.type || !["mcq", "image_mcq", "icon_mcq", "scq", "icon_scq", "number", "image_scq", "scq_icon_array", "scq_array", "mcq_array", "date", "date_time", "time"].includes(component.type)) {
            return;
          }
          switch (component.type) {
            case "date":
              if (component.dateFormat) {
                changeInstruction(component, {
                  code: "masked_value",
                  isActive: true,
                  returnType: "string",
                  text: `QlarrScripts.formatSqlDate(${qualifiedCode}.value, "${component.dateFormat}")`
                });
              } else {
                changeInstruction(component, {
                  code: "masked_value",
                  remove: true
                });
              }
              break;
            case "time":
              changeInstruction(component, {
                code: "masked_value",
                isActive: true,
                returnType: "string",
                text: `QlarrScripts.formatTime(${qualifiedCode}.value, ${component.fullDayFormat || false})`
              });
              break;
            case "number":
              if (component.decimal_separator == ",") {
                changeInstruction(component, {
                  code: "masked_value",
                  isActive: true,
                  returnType: "string",
                  text: `${qualifiedCode}.value ? ${qualifiedCode}.value.toString().replace(".",",") : ${qualifiedCode}.value == undefined? "" : ${qualifiedCode}.value`
                });
              } else {
                changeInstruction(component, {
                  code: "masked_value",
                  remove: true
                });
              }
              break;
            case "date_time":
              if (component.dateFormat) {
                changeInstruction(component, {
                  code: "masked_value",
                  isActive: true,
                  returnType: "string",
                  text: `QlarrScripts.formatSqlDate(${qualifiedCode}.value, "${component.dateFormat}") + " " + QlarrScripts.formatTime(${qualifiedCode}.value, ${component.fullDayFormat || false})`
                });
              } else {
                changeInstruction(component, {
                  code: "masked_value",
                  remove: true
                });
              }
              break;
            case "image_scq":
            case "icon_scq":
            case "scq":
              if (component.children && component.children.length) {
                let objText = "{" + component.children.map(el => el.type == "other" ? `"${el.code}": ${el.qualifiedCode}Atext.value` : `"${el.code}": QlarrScripts.stripTags(${el.qualifiedCode}.label)`).join(",") + "}";
                const instruction = {
                  code: "masked_value",
                  isActive: true,
                  returnType: "string",
                  text: `${qualifiedCode}.value ? QlarrScripts.safeAccess(${objText},${qualifiedCode}.value) : ''`
                };
                changeInstruction(component, instruction);
              } else {
                changeInstruction(component, {
                  code: "masked_value",
                  remove: true
                });
              }
              break;
            case "image_mcq":
            case "icon_mcq":
            case "mcq":
              if (component.children && component.children.length) {
                const text = "{" + component.children.map(answer => {
                  return `"${answer.code}": ${answer.type == "other" ? answer.qualifiedCode + "Atext.value" : `QlarrScripts.stripTags(${answer.qualifiedCode}.label)`}`;
                }) + "}";
                const instruction = {
                  code: "masked_value",
                  isActive: true,
                  returnType: "string",
                  text: `QlarrScripts.listStrings((${qualifiedCode}.value || []).map(function(el){return QlarrScripts.safeAccess(${text},el)}), Survey.lang)`
                };
                changeInstruction(component, instruction);
              } else {
                changeInstruction(component, {
                  code: "masked_value",
                  remove: true
                });
              }
              break;
            case "scq_icon_array":
            case "scq_array":
              if (component.children && component.children.length && component.children.filter(el => el.type == "column").length && component.children.filter(el => el.type === "row").length) {
                let objText = "{" + component.children.filter(el => el.type == "column").map(el => `"${el.code}": QlarrScripts.stripTags(${el.qualifiedCode}.label)`).join(",") + "}";
                component.children.filter(el => el.type === "row").forEach(el => {
                  const instruction = {
                    code: "masked_value",
                    isActive: true,
                    returnType: "string",
                    text: `${el.qualifiedCode}.value ? QlarrScripts.safeAccess(${objText},${el.qualifiedCode}.value) : ''`
                  };
                  changeInstruction(state[el.qualifiedCode], instruction);
                });
              } else if (component.children && component.children.filter(el => el.type === "row").length) {
                component.children.filter(el => el.type === "row").forEach(el => {
                  changeInstruction(state[el.qualifiedCode], {
                    code: "masked_value",
                    remove: true
                  });
                });
              }
              break;
            case "mcq_array":
              if (component.children && component.children.length && component.children.filter(el => el.type == "column").length && component.children.filter(el => el.type === "row").length) {
                let objText = "{" + component.children.filter(el => el.type == "column").map(el => `"${el.code}": QlarrScripts.stripTags(${el.qualifiedCode}.label)`).join(",") + "}";
                component.children.filter(el => el.type === "row").forEach(el => {
                  const instruction = {
                    code: "masked_value",
                    isActive: true,
                    returnType: "string",
                    text: `QlarrScripts.listStrings((${el.qualifiedCode}.value || []).map(function(el){return QlarrScripts.safeAccess(${objText},el)}), Survey.lang)`
                  };
                  changeInstruction(state[el.qualifiedCode], instruction);
                });
              } else if (component.children && component.children.filter(el => el.type === "row").length) {
                component.children.filter(el => el.type === "row").forEach(el => {
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

        // there is always an assumption that instructionList exists!!!
        const removeInstruction = (componentState, code) => {
          if (componentState.instructionList.length) {
            const index = componentState.instructionList.findIndex(el => el.code === code);
            if (index < 0) {
              return;
            } else if (componentState.instructionList.length == 1) {
              componentState.instructionList = [];
            } else {
              componentState.instructionList.splice(index, 1);
            }
          }
        };
        const addQuestionInstructions = question => {
          let type = question.type;
          switch (type) {
            case "text":
            case "paragraph":
            case "email":
            case "autocomplete":
              question.instructionList = [{
                code: "value",
                isActive: false,
                returnType: "string",
                text: ""
              }];
              break;
            case "number":
              question.instructionList = [{
                code: "value",
                isActive: false,
                returnType: "double",
                text: ""
              }];
              break;
            case "barcode":
              question.instructionList = [{
                code: "value",
                isActive: false,
                returnType: "string",
                text: ""
              }, {
                code: "mode",
                isActive: false,
                returnType: "string",
                text: "offline"
              }];
              break;
            case "scq":
              question.instructionList = [{
                code: "value",
                isActive: false,
                returnType: "string",
                text: ""
              }];
              break;
            case "icon_mcq":
            case "image_mcq":
            case "mcq":
              question.instructionList = [{
                code: "value",
                isActive: false,
                returnType: "list",
                text: ""
              }];
              break;
            case "icon_scq":
              question.instructionList = [{
                code: "value",
                isActive: false,
                returnType: "string",
                text: ""
              }];
              break;
            case "image_scq":
              question.instructionList = [{
                code: "value",
                isActive: false,
                returnType: "string",
                text: ""
              }];
              break;
            case "nps":
              question.instructionList = [{
                code: "value",
                isActive: false,
                returnType: "int",
                text: ""
              }];
              break;
            case "file_upload":
              question.instructionList = [{
                code: "value",
                isActive: false,
                returnType: "file",
                text: ""
              }];
              break;
            case "signature":
              question.instructionList = [{
                code: "value",
                isActive: false,
                returnType: "file",
                text: ""
              }];
              break;
            case "photo_capture":
              question.instructionList = [{
                code: "value",
                isActive: false,
                returnType: "file",
                text: ""
              }, {
                code: "mode",
                isActive: false,
                returnType: "string",
                text: "offline"
              }];
              break;
            case "video_capture":
              question.instructionList = [{
                code: "value",
                isActive: false,
                returnType: "file",
                text: ""
              }, {
                code: "mode",
                isActive: false,
                returnType: "string",
                text: "offline"
              }];
              break;
            case "date":
              question.instructionList = [{
                code: "value",
                isActive: false,
                returnType: "date",
                text: ""
              }];
              break;
            case "date_time":
              question.instructionList = [{
                code: "value",
                isActive: false,
                returnType: "date",
                text: ""
              }];
              break;
            case "time":
              question.instructionList = [{
                code: "value",
                isActive: false,
                returnType: "date",
                text: ""
              }];
              break;
          }
        };
        const addAnswerInstructions = (state, answer, parentCode, questionCode) => {
          const questionType = state[questionCode].type;
          const type = answer.type;
          const valueInstruction = {
            code: "value",
            isActive: false,
            returnType: questionType == "ranking" || questionType == "nps" || questionType == "image_ranking" ? "int" : questionType == "mcq_array" ? "list" : "string",
            text: ""
          };
          switch (type) {
            case "column":
              break;
            case "row":
              changeInstruction(answer, valueInstruction);
              break;
            case "other":
              if (questionType !== "scq") {
                changeInstruction(answer, valueInstruction);
              }
              break;
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
                text: questionType === "scq" ? `${questionCode}.value === 'Aother'` : `(${questionCode}.value || []).indexOf('Aother') > -1`
              });
              break;
            default:
              if (!["scq", "icon_scq", "image_scq", "mcq", "icon_mcq", "image_mcq"].includes(questionType)) {
                changeInstruction(answer, valueInstruction);
              }
              break;
          }
        };
        const addValidationEquation = (state, qualifiedCode, rule) => {
          const component = state[qualifiedCode];
          const validationInstruction = validationEquation(qualifiedCode, component, rule, component["validation"][rule]);
          changeInstruction(component, validationInstruction);
        };

        // there is always an assumption that instructionList exists!!!
        const editInstruction = (componentState, instruction) => {
          const index = componentState.instructionList.findIndex(el => el.code === instruction.code);
          if (index < 0) {
            componentState.instructionList.push(instruction);
          } else {
            componentState.instructionList[index] = instruction;
          }
        };
        const scqSkipEquations = (qualifiedCode, component) => {
          var _component$children3, _component$instructio2;
          const skipLogic = component.skip_logic || [];
          const instructionList = [];

          // Mark old per-answer instructions for removal (backwards compatibility cleanup)
          (_component$children3 = component.children) === null || _component$children3 === void 0 || _component$children3.forEach(el => {
            instructionList.push({
              code: "skip_to_on_" + el.code,
              remove: true
            });
          });

          // Remove all skip_to_auto# instructions (they will be recreated below)
          (_component$instructio2 = component.instructionList) === null || _component$instructio2 === void 0 || _component$instructio2.forEach(inst => {
            if (inst.code.match(/^skip_to_auto\d+$/)) {
              instructionList.push({
                code: inst.code,
                remove: true
              });
            }
          });

          // Generate new instructions from array-based skip_logic
          skipLogic.forEach((rule, index) => {
            var _rule$condition2;
            const instructionCode = "skip_to_auto" + (index + 1);
            if (!((_rule$condition2 = rule.condition) !== null && _rule$condition2 !== void 0 && _rule$condition2.length) || !rule.skipTo) {
              instructionList.push({
                code: instructionCode,
                remove: true
              });
              return;
            }

            // Build condition using includes: ["A1", "A2"].includes(Q1.value)
            const conditionText = `[${rule.condition.map(code => `"${code}"`).join(", ")}].includes(${qualifiedCode}.value)`;
            instructionList.push({
              code: instructionCode,
              text: conditionText,
              returnType: "boolean",
              isActive: true,
              skipToComponent: rule.skipTo,
              toEnd: rule.toEnd || false,
              disqualify: rule.disqualify || false
            });
          });
          return instructionList;
        };
        const validationEquation = (qualifiedCode, component, key, validation) => {
          if (!validation.isActive || key == "validation_not_contains" && !validation.not_contains) {
            return {
              code: key,
              remove: true
            };
          }
          let instructionText = "";
          switch (key) {
            case "validation_required":
              instructionText = requiredText(qualifiedCode, component);
              return booleanActiveInstruction(key, instructionText);
            case "validation_min_char_length":
              instructionText = `QlarrScripts.isNotVoid(${qualifiedCode}.value) ` + `&& ${qualifiedCode}.value.length < ${validation.min_length || 0}`;
              return booleanActiveInstruction(key, instructionText);
            case "validation_one_response_per_col":
              instructionText = `QlarrScripts.hasDuplicates([${component.children.filter(el => el.type == "row").map(el => el.qualifiedCode + ".value")}].filter(x=>x))`;
              return booleanActiveInstruction(key, instructionText);
            case "validation_max_char_length":
              instructionText = `QlarrScripts.isNotVoid(${qualifiedCode}.value) ` + `&& ${qualifiedCode}.value.length > ${validation.max_length || 0}`;
              return booleanActiveInstruction(key, instructionText);
            case "validation_contains":
              instructionText = `QlarrScripts.isNotVoid(${qualifiedCode}.value) ` + `&& !${qualifiedCode}.value.includes("${validation.contains || ""}")`;
              return booleanActiveInstruction(key, instructionText);
            case "validation_not_contains":
              instructionText = `QlarrScripts.isNotVoid(${qualifiedCode}.value) ` + `&& ${qualifiedCode}.value.includes("${validation.not_contains}")`;
              return booleanActiveInstruction(key, instructionText);
            case "validation_file_types":
              const mimes = fileTypesToMimesArray(validation.fileTypes);
              instructionText = `QlarrScripts.isNotVoid(${qualifiedCode}.value) ` + `&& ![${mimes.map(el => '"' + el + '"').join(",")}].includes(QlarrScripts.safeAccess(${qualifiedCode}.value,"type"))`;
              return booleanActiveInstruction(key, instructionText);
            case "validation_max_file_size":
              instructionText = `QlarrScripts.isNotVoid(${qualifiedCode}.value) ` + `&& QlarrScripts.safeAccess(${qualifiedCode}.value,"size")/ 1024 > ${validation.max_size}`;
              return booleanActiveInstruction(key, instructionText);
            case "validation_pattern":
              if (!isValidRegex(validation.pattern)) {
                return {
                  code: key,
                  remove: true
                };
              }
              instructionText = `QlarrScripts.isNotVoid(${qualifiedCode}.value) ` + `&& !(new RegExp("${validation.pattern}").test(${qualifiedCode}.value))`;
              return booleanActiveInstruction(key, instructionText);
            case "validation_pattern_email":
              instructionText = `QlarrScripts.isNotVoid(${qualifiedCode}.value) ` + `&&  !/^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$/.test(${qualifiedCode}.value)`;
              return booleanActiveInstruction(key, instructionText);
            case "validation_max_word_count":
              instructionText = `QlarrScripts.isNotVoid(${qualifiedCode}.value) ` + `&&  QlarrScripts.wordCount(${qualifiedCode}.value) > ${validation.max_count || 0}`;
              return booleanActiveInstruction(key, instructionText);
            case "validation_min_word_count":
              instructionText = `QlarrScripts.isNotVoid(${qualifiedCode}.value) ` + `&&  QlarrScripts.wordCount(${qualifiedCode}.value) < ${validation.min_count || 0}`;
              return booleanActiveInstruction(key, instructionText);
            case "validation_between":
              instructionText = `QlarrScripts.isNotVoid(${qualifiedCode}.value) ` + `&& (${qualifiedCode}.value < ${validation.lower_limit || 0} ` + `|| ${qualifiedCode}.value > ${validation.upper_limit || 0})`;
              return booleanActiveInstruction(key, instructionText);
            case "validation_not_between":
              instructionText = `QlarrScripts.isNotVoid(${qualifiedCode}.value) ` + `&& (${qualifiedCode}.value >= ${validation.lower_limit || 0} ` + `&& ${qualifiedCode}.value <= ${validation.upper_limit || 0})`;
              return booleanActiveInstruction(key, instructionText);
            case "validation_lt":
              instructionText = `QlarrScripts.isNotVoid(${qualifiedCode}.value) ` + `&& ${qualifiedCode}.value >= ${validation.number || 0}`;
              return booleanActiveInstruction(key, instructionText);
            case "validation_lte":
              instructionText = `QlarrScripts.isNotVoid(${qualifiedCode}.value) ` + `&& ${qualifiedCode}.value > ${validation.number || 0}`;
              return booleanActiveInstruction(key, instructionText);
            case "validation_gt":
              instructionText = `QlarrScripts.isNotVoid(${qualifiedCode}.value) ` + `&& ${qualifiedCode}.value <= ${validation.number || 0}`;
              return booleanActiveInstruction(key, instructionText);
            case "validation_gte":
              instructionText = `QlarrScripts.isNotVoid(${qualifiedCode}.value) ` + `&& ${qualifiedCode}.value < ${validation.number || 0}`;
              return booleanActiveInstruction(key, instructionText);
            case "validation_equals":
              instructionText = `QlarrScripts.isNotVoid(${qualifiedCode}.value) ` + `&& ${qualifiedCode}.value != ${validation.number || 0}`;
              return booleanActiveInstruction(key, instructionText);
            case "validation_not_equal":
              instructionText = `QlarrScripts.isNotVoid(${qualifiedCode}.value) ` + `&& ${qualifiedCode}.value == ${validation.number || 0}`;
              return booleanActiveInstruction(key, instructionText);
            case "validation_min_option_count":
              instructionText = `(${qualifiedCode}.value || []).length ` + `< ${validation.min_count || 0}`;
              return booleanActiveInstruction(key, instructionText);
            case "validation_min_ranking_count":
              instructionText = `[${component.children.map(answer => answer.qualifiedCode + ".value")}].filter(x=>x).length ` + `< ${validation.min_count || 0}`;
              return booleanActiveInstruction(key, instructionText);
            case "validation_max_option_count":
              instructionText = `(${qualifiedCode}.value || []).length ` + `> ${validation.max_count || 0}`;
              return booleanActiveInstruction(key, instructionText);
            case "validation_max_ranking_count":
              instructionText = `[${component.children.map(answer => answer.qualifiedCode + ".value")}].filter(x=>x).length ` + `> ${validation.max_count || 0}`;
              return booleanActiveInstruction(key, instructionText);
            case "validation_option_count":
              instructionText = `(${qualifiedCode}.value || []).length ` + `!== ${validation.count || 0}`;
              return booleanActiveInstruction(key, instructionText);
            case "validation_ranking_count":
              instructionText = `[${component.children.map(answer => answer.qualifiedCode + ".value")}].filter(x=>x).length ` + `!== ${validation.count || 0}`;
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
            return `QlarrScripts.isVoid(${qualifiedCode}.value) || !QlarrScripts.safeAccess(${qualifiedCode}.value,"size") || !QlarrScripts.safeAccess(${qualifiedCode}.value,"stored_filename")`;
          } else if (component.type == "scq_array" || component.type == "scq_icon_array") {
            const rows = component.children.filter(child => child.type == "row");
            return `[${rows.map(answer => answer.qualifiedCode + ".value")}].filter(x=>x).length ` + ` < ` + rows.length;
          } else if (component.type == "mcq_array") {
            const rows = component.children.filter(child => child.type == "row");
            return `[${rows.map(answer => answer.qualifiedCode + ".value")}].filter(x=>x && x.length > 0).length ` + ` < ` + rows.length;
          } else if (component.type == "multiple_text") {
            const rows = component.children;
            return `[${rows.map(answer => answer.qualifiedCode + ".value")}].filter(x=>x).length ` + ` < ` + rows.length;
          } else {
            return `QlarrScripts.isVoid(${qualifiedCode}.value)`;
          }
        };
        const isValidRegex = regex => {
          if (!regex) {
            return false;
          }
          try {
            new RegExp(regex);
          } catch (e) {
            return false;
          }
          return true;
        };
        const updateRandomByRule = (componentState, randomRule, initialSetup = false) => {
          if (["randomize_questions", "randomize_groups", "randomize_options"].indexOf(randomRule) > -1) {
            var _componentState$child;
            const childCodes = (_componentState$child = componentState.children) === null || _componentState$child === void 0 || (_componentState$child = _componentState$child.filter(it => {
              var _it$groupType, _it$type;
              return ((_it$groupType = it.groupType) === null || _it$groupType === void 0 ? void 0 : _it$groupType.toLowerCase()) != "end" && initialSetup ? ["other", "none", "all"].indexOf((_it$type = it.type) === null || _it$type === void 0 ? void 0 : _it$type.toLowerCase()) == -1 : true;
            })) === null || _componentState$child === void 0 ? void 0 : _componentState$child.map(it => it.code);
            if (childCodes.length == 0 || !componentState[randomRule]) {
              componentState[randomRule] = undefined;
              removeInstruction(componentState, "random_group");
              return;
            }
            let instruction;
            if (initialSetup) {
              instruction = {
                code: "random_group",
                groups: [{
                  codes: childCodes,
                  randomOption: componentState[randomRule]
                }]
              };
            } else {
              instruction = instructionByCode(componentState, "random_group");
              instruction.groups = instruction.groups.map(group => {
                const newCodes = group.codes.filter(code => childCodes.includes(code));
                if (newCodes.length > 0) {
                  group.codes = newCodes;
                  return group;
                } else {
                  return undefined;
                }
              }).filter(group => group !== undefined);
            }
            if (instruction.groups.length == 0) {
              componentState[randomRule] = undefined;
              removeInstruction(componentState, "random_group");
            } else {
              changeInstruction(componentState, instruction);
            }
          } else if (["randomize_rows"].indexOf(randomRule) > -1) {
            var _componentState$child2;
            const childCodes = (_componentState$child2 = componentState.children) === null || _componentState$child2 === void 0 || (_componentState$child2 = _componentState$child2.filter(child => child.type == "row")) === null || _componentState$child2 === void 0 ? void 0 : _componentState$child2.map(it => it.code);
            const randomInstruction = instructionByCode(componentState, "random_group");
            const groups = (randomInstruction === null || randomInstruction === void 0 ? void 0 : randomInstruction.groups) || [];
            const groupsWithColAnswers = groups.filter(group => {
              return !group.codes.some(item => childCodes.includes(item));
            });
            if (childCodes.length == 0 || !componentState[randomRule]) {
              componentState[randomRule] = undefined;
              if (groupsWithColAnswers.length == 0) {
                removeInstruction(componentState, "random_group");
              } else {
                changeInstruction(componentState, {
                  code: "random_group",
                  groups: groupsWithColAnswers
                });
              }
              return;
            }
            if (initialSetup) {
              groupsWithColAnswers.push({
                codes: childCodes,
                randomOption: componentState[randomRule]
              });
              const updated = {
                code: "random_group",
                groups: groupsWithColAnswers
              };
              changeInstruction(componentState, updated);
            } else {
              const childCodesIncluded = groups.filter(group => {
                return group.codes.some(item => childCodes.includes(item));
              }).map(group => group.codes.filter(item => childCodes.includes(item))).flat();
              if (childCodesIncluded.length > 0) {
                groupsWithColAnswers.push({
                  codes: childCodesIncluded,
                  randomOption: componentState[randomRule]
                });
                const updated = {
                  code: "random_group",
                  groups: groupsWithColAnswers
                };
                changeInstruction(componentState, updated);
              } else {
                componentState[randomRule] = undefined;
                const updated = {
                  code: "random_group",
                  groups: groupsWithColAnswers
                };
                changeInstruction(componentState, updated);
              }
            }
          } else if (["randomize_columns"].indexOf(randomRule) > -1) {
            var _componentState$child3;
            const childCodes = (_componentState$child3 = componentState.children) === null || _componentState$child3 === void 0 || (_componentState$child3 = _componentState$child3.filter(child => child.type == "column")) === null || _componentState$child3 === void 0 ? void 0 : _componentState$child3.map(it => it.code);
            const randomInstruction = instructionByCode(componentState, "random_group");
            const groups = (randomInstruction === null || randomInstruction === void 0 ? void 0 : randomInstruction.groups) || [];
            const groupsWithRowAnswers = groups.filter(group => {
              return !group.codes.some(item => childCodes.includes(item));
            });
            if (childCodes.length == 0 || !componentState[randomRule]) {
              componentState[randomRule] = undefined;
              if (groupsWithRowAnswers.length == 0) {
                removeInstruction(componentState, "random_group");
              } else {
                changeInstruction(componentState, {
                  code: "random_group",
                  groups: groupsWithRowAnswers
                });
              }
              return;
            }
            if (initialSetup) {
              groupsWithRowAnswers.push({
                codes: childCodes,
                randomOption: componentState[randomRule]
              });
              const updated = {
                code: "random_group",
                groups: groupsWithRowAnswers
              };
              changeInstruction(componentState, updated);
            } else {
              const childCodesIncluded = groups.filter(group => {
                return group.codes.some(item => childCodes.includes(item));
              }).map(group => group.codes.filter(item => childCodes.includes(item))).flat();
              if (childCodesIncluded.length > 0) {
                groupsWithRowAnswers.push({
                  codes: childCodesIncluded,
                  randomOption: componentState[randomRule]
                });
                const updated = {
                  code: "random_group",
                  groups: groupsWithRowAnswers
                };
                changeInstruction(componentState, updated);
              } else {
                componentState[randomRule] = undefined;
                const updated = {
                  code: "random_group",
                  groups: groupsWithRowAnswers
                };
                changeInstruction(componentState, updated);
              }
            }
          }
        };
        const getQuestionType = (state, code) => {
          const match = code.match(/^Q[a-z0-9_]+/);
          const captured = match ? match[0] : null;
          if (captured) {
            return state[captured].type;
          } else {
            return null;
          }
        };
        const conditionalRelevanceEquation = (logic, rule, state) => {
          const code = "conditional_relevance";
          if (rule == "show_always") {
            return {
              code,
              remove: true
            };
          } else if (rule == "hide_always") {
            return {
              code,
              text: "false",
              isActive: false,
              returnType: "boolean"
            };
          }
          const text = jsonToJs(logic, false, code => state[code].type, code => getQuestionType(state, code));
          // If no valid logic yet (empty text), treat as "show_always" to avoid validation errors
          if (!text) {
            return {
              code,
              remove: true
            };
          }
          if (rule == "show_if") {
            return {
              code,
              text,
              isActive: true,
              returnType: "boolean"
            };
          } else if (rule == "hide_if") {
            return {
              code,
              text: `!(${text})`,
              isActive: true,
              returnType: "boolean"
            };
          } else {
            throw "WTF";
          }
        };
        const jsonToJs = (json, nested, getComponentType, getQuestionType) => {
          if (!json || typeof json !== "object") {
            return "";
          }
          const key = Object.keys(json)[0];
          const value = json[key];
          switch (key) {
            case "and":
              return wrapIfNested(nested, value.map(el => jsonToJs(el, true, getComponentType, getQuestionType)).join(" && "));
            case "or":
              return wrapIfNested(nested, value.map(el => jsonToJs(el, true, getComponentType, getQuestionType)).join(" || "));
            case "!":
              return "!" + wrapIfNested(nested, jsonToJs(value, true, getComponentType, getQuestionType) + (nested ? ")" : ""));
            case "is_relevant":
              return `${capture(value)}.relevance`;
            case "is_not_relevant":
              return `!${capture(value)}.relevance`;
            case "is_online":
              return `Survey.mode=="online"`;
            case "is_offline":
              return `Survey.mode=="offline"`;
            case "is_valid":
              return `${capture(value)}.validity`;
            case "is_not_valid":
              return `!${capture(value)}.validity`;
            case "is_empty":
              const qCode1 = capture(value);
              if (["file_upload", "signature", "photo_capture", "video_capture"].indexOf(getComponentType(qCode1)) > -1) {
                return wrapIfNested(nested, `Object.keys(${qCode1}.value).length == 0 || !QlarrScripts.safeAccess(${qCode1}.value,"size") || !QlarrScripts.safeAccess(${qCode1}.value,"stored_filename")`);
              } else {
                return `QlarrScripts.isVoid(${capture(qCode1)}.value)`;
              }
            case "is_not_empty":
              const qCode = capture(value);
              if (["file_upload", "signature", "photo_capture", "video_capture"].indexOf(getComponentType(qCode)) > -1) {
                return wrapIfNested(nested, `Object.keys(${qCode}.value).length > 0 && QlarrScripts.safeAccess(${qCode}.value,"size") && QlarrScripts.safeAccess(${qCode}.value,"stored_filename")`);
              } else {
                return `QlarrScripts.isNotVoid(${capture(value)}.value)`;
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
              let leftOperand = type == "date" || type == "date_time" || type == "time" ? `QlarrScripts.sqlDateTimeToDate(${capture(value[0])}.value)` : `${capture(value[0])}.value`;
              if (["==", "!=", "<", "<=", ">", ">="].includes(key)) {
                return `${leftOperand}${key}${capture(value[1], type)}`;
              } else if (key == "between") {
                return wrapIfNested(nested, `(${leftOperand}>=${capture(value[1], type)} && ${leftOperand}<=${capture(value[2], type)})`);
              } else if (key == "not_between") {
                return wrapIfNested(nested, `(${leftOperand}<${capture(value[1], type)} || ${leftOperand}>${capture(value[2], type)})`);
              } else {
                throw "WTF";
              }
            case "startsWith":
              return wrapIfNested(nested, `${capture(value[0])}.value?.startsWith(${capture(value[1])})`);
            case "endsWith":
              return wrapIfNested(nested, `${capture(value[0])}.value?.endsWith(${capture(value[1])})`);
            case "contains":
              return wrapIfNested(nested, `${capture(value[0])}.value?.indexOf(${capture(value[1])}) > -1`);
            case "not_contains":
              return wrapIfNested(nested, `!${capture(value[0])}.value || ${capture(value[0])}.value?.indexOf(${capture(value[1])}) == -1`);
            case "in":
              const code = capture(value[0]);
              if (code == "survey_lang") {
                return `[${value[1].map(el => '"' + el + '"')}].indexOf(Survey.lang) !== -1`;
              } else if (getComponentType(code) == "nps") {
                return `[${value[1].map(el => +el)}].indexOf(${code}.value) !== -1`;
              } else if (["mcq", "image_mcq", "icon_mcq"].indexOf(getComponentType(code)) > -1 || getQuestionType(code) == "mcq_array") {
                return `[${value[1].map(el => "'" + el + "'")}].filter((el) => ${code}.value?.indexOf(el) > -1).length > 0`;
              } else {
                return `[${value[1].map(el => '"' + el + '"')}].indexOf(${code}.value) !== -1`;
              }
            case "not_in":
              const code1 = capture(value[0]);
              if (code1 == "survey_lang") {
                return `[${value[1].map(el => '"' + el + '"')}].indexOf(Survey.lang) == -1`;
              } else if (getComponentType(code1) == "nps") {
                return `[${value[1].map(el => +el)}].indexOf(${code1}.value) == -1`;
              } else if (["mcq", "image_mcq", "icon_mcq"].indexOf(getComponentType(code1)) > -1) {
                return `[${value[1].map(el => "'" + el + "'")}].filter((el) => ${code}.value?.indexOf(el) > -1).length == 0`;
              } else {
                return `[${value[1].map(el => '"' + el + '"')}].indexOf(${code1}.value) == -1`;
              }
            default:
              return "";
          }
        };
        const wrapIfNested = (nested, text) => {
          return (nested ? "(" : "") + text + (nested ? ")" : "");
        };
        const capture = (value, type) => {
          if (type == "time") {
            return `QlarrScripts.sqlDateTimeToDate(\"1970-01-01 ${integerToTime(value)}\")`;
          } else if (typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]") {
            return type == "date_time" ? `QlarrScripts.sqlDateTimeToDate(\"${toSqlDateTime(value)}\")` : `QlarrScripts.sqlDateTimeToDate(\"${toSqlDateTimeIgnoreTime(value)}\")`;
          }
          if (typeof value === "object") {
            return value[Object.keys(value)[0]];
          } else if (typeof value === "string") {
            return '"' + value + '"';
          } else {
            return value;
          }
        };
        const integerToTime = time => {
          let hours = Math.floor(time / 3600);
          let hoursString = hours >= 10 && hours <= 23 ? "" + hours : "0" + hours;
          let minutes = time % 3600 / 60;
          let minutesString = minutes >= 10 && minutes <= 59 ? "" + minutes : "0" + minutes;
          return hoursString + ":" + minutesString + ":00";
        };
        const toSqlDateTime = date => {
          return date.getFullYear() + "-" + ("00" + (date.getMonth() + 1)).slice(-2) + "-" + ("00" + date.getDate()).slice(-2) + " " + ("00" + date.getHours()).slice(-2) + ":" + ("00" + date.getMinutes()).slice(-2) + ":" + ("00" + date.getSeconds()).slice(-2);
        };
        const toSqlDateTimeIgnoreTime = date => {
          return date.getFullYear() + "-" + ("00" + (date.getMonth() + 1)).slice(-2) + "-" + ("00" + date.getDate()).slice(-2) + " 00:00:00";
        };
        const instructionByCode = (component, code) => component.instructionList ? component.instructionList.find(el => el.code === code) : undefined;
        const fileTypesToMimesArray = exports("i", fileTypes => {
          let accepted = [];
          fileTypes === null || fileTypes === void 0 || fileTypes.forEach(el => {
            accepted = accepted.concat(acceptedFileTypes(el));
          });
          return accepted;
        });
        const acceptedFileTypes = fileType => {
          switch (fileType) {
            case "presentation":
              return ["application/mspowerpoint", "application/vnd.google-apps.presentation", "application/vnd.ms-powerpoint", "application/vnd.ms-powerpoint.presentation.macroEnabled.12", "application/vnd.ms-powerpoint.presentation.macroenabled.12", "application/vnd.ms-powerpoint.slideshow.macroEnabled.12", "application/vnd.ms-powerpoint.slideshow.macroenabled.12", "application/vnd.ms-powerpoint.template.macroEnabled.12", "application/vnd.ms-powerpoint.template.macroenabled.12", "application/vnd.oasis.opendocument.presentation", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.presentationml.slideshow", "application/vnd.openxmlformats-officedocument.presentationml.template"];
            case "document":
              return ["application/vnd.google-apps.document", "application/vnd.ms-word", "application/vnd.ms-word.document.macroEnabled.12", "application/vnd.ms-word.document.macroenabled.12", "application/vnd.ms-word.template.macroEnabled.12", "application/vnd.ms-word.template.macroenabled.12", "application/vnd.oasis.opendocument.text", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.wordprocessingml.template", "text/plain", "application/msword"];
            case "spreadsheet":
              return ["application/msexcel", "application/vnd.google-apps.spreadsheet", "application/vnd.ms-excel", "application/vnd.ms-excel.sheet.macroEnabled.12", "application/vnd.ms-excel.sheet.macroenabled.12", "application/vnd.ms-excel.template.macroEnabled.12", "application/vnd.ms-excel.template.macroenabled.12", "application/vnd.oasis.opendocument.spreadsheet", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.spreadsheetml.template", "text/csv"];
            case "pdf":
              return ["application/pdf"];
            case "image":
              return ["image/bmp", "image/gif", "image/heic", "image/heif", "image/jpeg", "image/png", "image/tiff", "image/vnd.microsoft.icon", "image/webp", "image/x-ms-bmp"];
            case "video":
              return ["application/vnd.google-apps.video", "video/3gpp", "video/3gpp2", "video/avi", "video/flv", "video/mp2t", "video/mp4", "video/mp4v-es", "video/mpeg", "video/ogg", "video/quicktime", "video/vnd.mts", "video/webm", "video/x-flv", "video/x-m4v", "video/x-matroska", "video/x-ms-asf", "video/x-ms-wm", "video/x-ms-wmv", "video/x-ms-wvx", "video/x-msvideo", "video/x-quicktime"];
            case "audio":
              return ["application/vnd.google-apps.audio", "audio/mpeg", "audio/mp3", "audio/mp4", "audio/midi", "audio/x-mid", "audio/x-midi", "audio/wav", "audio/x-wav", "audio/vnd.wav", "audio/flac", "audio/ogg", "audio/vorbis"];
          }
        };
        const processValidation = (state, code, rule, modifyEquation = true) => {
          const component = state[code];
          if (component.designErrors && component.designErrors.length) {
            component.validation[rule].isActive = false;
            removeInstruction(component, rule);
            return;
          }
          component.validation[rule] = cleanupValidationData(component, rule, component.validation[rule]);
          // we have this special situation that the SCQ array validation is copied to its children
          // This is specifically important when an SCQ array is implemented at SCQ in smaller screens
          if ((component.type == "scq_array" || component.type == "mcq_array" || component.type == "multiple_text" || component.type == "scq_icon_array") && rule == "validation_required") {
            component.children.filter(child => child.type == "row").forEach(row => {
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
              return _objectSpread(_objectSpread({}, validation), {}, {
                min_length: Math.min(component.maxChars || 30, validation.min_length)
              });
            case "validation_max_char_length":
              return _objectSpread(_objectSpread({}, validation), {}, {
                max_length: Math.min(component.maxChars || 30, validation.max_length)
              });
            case "validation_min_ranking_count":
            case "validation_min_option_count":
              return _objectSpread(_objectSpread({}, validation), {}, {
                min_count: Math.min(component.children.length, validation.min_count)
              });
            case "validation_max_ranking_count":
            case "validation_max_option_count":
              return _objectSpread(_objectSpread({}, validation), {}, {
                max_count: Math.min(component.children.length, validation.max_count)
              });
            case "validation_ranking_count":
            case "validation_option_count":
              return _objectSpread(_objectSpread({}, validation), {}, {
                count: Math.min(component.children.length, validation.count)
              });
            default:
              return validation;
          }
        };
        const BG_COLOR = "#dfe2ef";
        const TEXT_COLOR = "#091133";
        const PRIMARY_COLOR = "#2d3cb1";
        const SECONDARY_COLOR = "#672ebf";
        const ERR_COLOR = "#d13e17";
        const PAPER_COLOR = "#ffffff";
        const GROUP_FONT_SIZE = 32;
        const QUESTION_FONT_SIZE = 18;
        const TEXT_FONT_SIZE = 14;
        const FONT_FAMILY = "Rubik";
        const defaultSurveyTheme = {
          textStyles: {
            group: {
              font: FONT_FAMILY,
              size: GROUP_FONT_SIZE,
              color: TEXT_COLOR
            },
            question: {
              font: FONT_FAMILY,
              size: QUESTION_FONT_SIZE,
              color: TEXT_COLOR
            },
            text: {
              font: FONT_FAMILY,
              size: TEXT_FONT_SIZE,
              color: TEXT_COLOR
            }
          },
          primaryColor: PRIMARY_COLOR,
          bgColor: BG_COLOR,
          paperColor: PAPER_COLOR
        };
        const defualtTheme = theme => {
          var _theme$textStyles, _theme$textStyles2, _theme$textStyles3, _theme$textStyles4, _theme$textStyles5, _theme$textStyles6, _theme$textStyles7, _theme$textStyles8, _theme$textStyles9, _theme$textStyles0, _theme$textStyles1;
          return {
            textStyles: {
              group: {
                font: (theme === null || theme === void 0 || (_theme$textStyles = theme.textStyles) === null || _theme$textStyles === void 0 || (_theme$textStyles = _theme$textStyles.group) === null || _theme$textStyles === void 0 ? void 0 : _theme$textStyles.font) || FONT_FAMILY,
                size: (theme === null || theme === void 0 || (_theme$textStyles2 = theme.textStyles) === null || _theme$textStyles2 === void 0 || (_theme$textStyles2 = _theme$textStyles2.group) === null || _theme$textStyles2 === void 0 ? void 0 : _theme$textStyles2.size) || GROUP_FONT_SIZE,
                color: (theme === null || theme === void 0 || (_theme$textStyles3 = theme.textStyles) === null || _theme$textStyles3 === void 0 || (_theme$textStyles3 = _theme$textStyles3.group) === null || _theme$textStyles3 === void 0 ? void 0 : _theme$textStyles3.color) || TEXT_COLOR
              },
              question: {
                font: (theme === null || theme === void 0 || (_theme$textStyles4 = theme.textStyles) === null || _theme$textStyles4 === void 0 || (_theme$textStyles4 = _theme$textStyles4.question) === null || _theme$textStyles4 === void 0 ? void 0 : _theme$textStyles4.font) || FONT_FAMILY,
                size: (theme === null || theme === void 0 || (_theme$textStyles5 = theme.textStyles) === null || _theme$textStyles5 === void 0 || (_theme$textStyles5 = _theme$textStyles5.question) === null || _theme$textStyles5 === void 0 ? void 0 : _theme$textStyles5.size) || QUESTION_FONT_SIZE,
                color: (theme === null || theme === void 0 || (_theme$textStyles6 = theme.textStyles) === null || _theme$textStyles6 === void 0 || (_theme$textStyles6 = _theme$textStyles6.question) === null || _theme$textStyles6 === void 0 ? void 0 : _theme$textStyles6.color) || TEXT_COLOR
              },
              text: {
                font: (theme === null || theme === void 0 || (_theme$textStyles7 = theme.textStyles) === null || _theme$textStyles7 === void 0 || (_theme$textStyles7 = _theme$textStyles7.text) === null || _theme$textStyles7 === void 0 ? void 0 : _theme$textStyles7.font) || FONT_FAMILY,
                size: (theme === null || theme === void 0 || (_theme$textStyles8 = theme.textStyles) === null || _theme$textStyles8 === void 0 || (_theme$textStyles8 = _theme$textStyles8.text) === null || _theme$textStyles8 === void 0 ? void 0 : _theme$textStyles8.size) || TEXT_FONT_SIZE,
                color: (theme === null || theme === void 0 || (_theme$textStyles9 = theme.textStyles) === null || _theme$textStyles9 === void 0 || (_theme$textStyles9 = _theme$textStyles9.text) === null || _theme$textStyles9 === void 0 ? void 0 : _theme$textStyles9.color) || TEXT_COLOR
              }
            },
            typography: {
              fontFamily: (theme === null || theme === void 0 || (_theme$textStyles0 = theme.textStyles) === null || _theme$textStyles0 === void 0 || (_theme$textStyles0 = _theme$textStyles0.text) === null || _theme$textStyles0 === void 0 ? void 0 : _theme$textStyles0.font) || FONT_FAMILY,
              fontSize: (theme === null || theme === void 0 || (_theme$textStyles1 = theme.textStyles) === null || _theme$textStyles1 === void 0 || (_theme$textStyles1 = _theme$textStyles1.text) === null || _theme$textStyles1 === void 0 ? void 0 : _theme$textStyles1.size) || TEXT_FONT_SIZE
              // This will apply to most MUI components including TextField
            },
            palette: {
              mode: colorToThemeMode((theme === null || theme === void 0 ? void 0 : theme.textColor) || TEXT_COLOR),
              primary: {
                main: (theme === null || theme === void 0 ? void 0 : theme.primaryColor) || PRIMARY_COLOR
              },
              secondary: {
                main: SECONDARY_COLOR
              },
              error: {
                main: ERR_COLOR
              },
              background: {
                default: (theme === null || theme === void 0 ? void 0 : theme.bgColor) || BG_COLOR,
                paper: (theme === null || theme === void 0 ? void 0 : theme.paperColor) || PAPER_COLOR
              },
              text: {
                primary: (theme === null || theme === void 0 ? void 0 : theme.textColor) || TEXT_COLOR // Main text color
              }
            }
          };
        };
        const reservedKeys$1 = ["setup", "langInfo", "reorder_refresh_code", "state", "globalSetup", "designMode", "isSaving", "isUpdating", "latest", "lastAddedComponent", "index", "skipScroll"];
        const designState = createSlice({
          name: "designState",
          initialState: {
            state: {}
          },
          reducers: {
            designStateReceived: (state, action) => {
              var _state$setup;
              const response = action.payload;
              let newState = response.designerInput.state;
              if (!newState.Survey.theme) {
                newState.Survey.theme = defaultSurveyTheme;
              }
              const newKeys = Object.keys(newState).filter(el => !reservedKeys$1.includes(el));
              const toBeRemoved = Object.keys(state).filter(el => !reservedKeys$1.includes(el) && !newKeys.includes(el));
              if (!state.langInfo || response.overWriteLang) {
                const defaultLang = newState.Survey.defaultLang || LANGUAGE_DEF.en;
                const mainLang = defaultLang.code;
                const lang = defaultLang.code;
                const languagesList = [defaultLang].concat(newState.Survey.additionalLang || []);
                state.langInfo = {
                  languagesList,
                  mainLang,
                  lang,
                  onMainLang: lang == mainLang
                };
              }
              toBeRemoved.forEach(key => {
                delete state[key];
              });
              const inCurrentSetup = (_state$setup = state["setup"]) === null || _state$setup === void 0 ? void 0 : _state$setup.code;
              if (!newKeys.includes(inCurrentSetup)) {
                delete state["setup"];
              }
              newKeys.forEach(key => {
                state[key] = newState[key];
              });
              state.versionDto = response.versionDto;
              state.componentIndex = response.designerInput.componentIndexList;
              state["latest"] = structuredClone(newState);
              state.lastAddedComponent = null;
              state.index = buildCodeIndex(state);
            },
            setup(state, action) {
              var _state$setup2, _state$setup3;
              const payload = action.payload;
              // we want to ignore multiple clicks on the same setup button
              // but acknowledge when we highlight or expand a specific section
              if (payload.code != ((_state$setup2 = state.setup) === null || _state$setup2 === void 0 ? void 0 : _state$setup2.code) || !isEquivalent(payload.rules, (_state$setup3 = state.setup) === null || _state$setup3 === void 0 ? void 0 : _state$setup3.rules) || payload.highlighted) {
                state.setup = action.payload;
              }
            },
            newVersionReceived(state, action) {
              const payload = action.payload;
              state.versionDto = payload;
            },
            changeValidationValue(state, action) {
              let payload = action.payload;
              if (!state[payload.code]["validation"]) {
                state[payload.code]["validation"] = {};
              }
              if (!state[payload.code]["validation"][payload.rule]) {
                state[payload.code]["validation"][payload.rule] = buildValidationDefaultData(payload.rule);
              }
              state[payload.code]["validation"][payload.rule][payload.key] = payload.value;
              processValidation(state, payload.code, payload.rule, payload.rule != "content");
            },
            resetSetup(state) {
              const isInTranslationMode = state.designMode === DESIGN_SURVEY_MODE.LANGUAGES;
              if (state.langInfo && !isInTranslationMode) {
                state.langInfo.lang = state.langInfo.mainLang;
                state.langInfo.onMainLang = true;
              }
              if (!state.globalSetup) {
                state.globalSetup = {};
              }
              delete state["setup"];
              if (!isInTranslationMode) {
                state.designMode = DESIGN_SURVEY_MODE.DESIGN;
              }
            },
            setDesignModeToDesign(state) {
              designState.caseReducers.resetSetup(state);
              state.designMode = DESIGN_SURVEY_MODE.DESIGN;
            },
            setDesignModeToLang(state) {
              designState.caseReducers.resetSetup(state);
              designState.caseReducers.setup(state, {
                payload: languageSetup
              });
              state.designMode = DESIGN_SURVEY_MODE.LANGUAGES;
            },
            setDesignModeToTheme(state) {
              designState.caseReducers.resetSetup(state);
              designState.caseReducers.setup(state, {
                payload: themeSetup
              });
              state.designMode = DESIGN_SURVEY_MODE.THEME;
            },
            changeAttribute: (state, action) => {
              let payload = action.payload;
              if (action.payload.key == "content" || action.payload.key == "instructionList" || action.payload.key == "relevance" || action.payload.key == "resources") {
                throw "We are changing attributes way too much than we should";
              }
              if (!state[payload.code]) {
                state[payload.code] = {};
              }
              const originalValue = state[payload.code][payload.key];
              state[payload.code][payload.key] = payload.value;
              if (action.payload.key == "maxChars") {
                cleanupValidation(state, payload.code);
              } else if (action.payload.key == "dateFormat") {
                addMaskedValuesInstructions(payload.code, state[payload.code], state);
              } else if (action.payload.key == "fullDayFormat") {
                addMaskedValuesInstructions(payload.code, state[payload.code], state);
              } else if (action.payload.key == "decimal_separator") {
                addMaskedValuesInstructions(payload.code, state[payload.code], state);
              } else if (["randomize_questions", "randomize_groups", "randomize_options", "randomize_rows", "randomize_columns"].indexOf(action.payload.key) > -1) {
                updateRandomByRule(state[payload.code], action.payload.key, !originalValue || originalValue == "NONE");
              }
            },
            changeRelevance: (state, action) => {
              let payload = action.payload;
              state[payload.code].relevance = payload.value;
              addRelevanceInstructions(state, payload.code, payload.value);
            },
            clearRelevanceConfig: (state, action) => {
              delete state[action.payload.code].relevance;
            },
            setDefaultValue: (state, action) => {
              var _component$instructio3;
              const _action$payload = action.payload,
                code = _action$payload.code,
                selectedValue = _action$payload.selectedValue;
              const component = state[code];
              const valueInstruction = (_component$instructio3 = component.instructionList) === null || _component$instructio3 === void 0 ? void 0 : _component$instructio3.find(instruction => instruction.code == "value");
              if (valueInstruction) {
                changeInstruction(component, _objectSpread(_objectSpread({}, valueInstruction), {}, {
                  text: selectedValue,
                  isActive: false
                }));
              }
            },
            cloneQuestion: (state, action) => {
              var _survey$children;
              const code = action.payload;
              const survey = state.Survey;
              const group = (_survey$children = survey.children) === null || _survey$children === void 0 || (_survey$children = _survey$children.map(group => state[group.code])) === null || _survey$children === void 0 || (_survey$children = _survey$children.filter(group => group.children && group.children.findIndex(child => child.code == code) !== -1)) === null || _survey$children === void 0 ? void 0 : _survey$children[0];
              if (!group) {
                return;
              }
              const newQuestionId = "Q" + nextQuestionId(state, survey.children);
              const questionChild = group.children.find(el => el.code == code);
              const newQuestion = {
                type: questionChild.type,
                code: newQuestionId,
                qualifiedCode: newQuestionId
              };
              creatNewState(state, state[code], newQuestionId, code, newQuestionId);
              group.children.splice(group.children.indexOf(questionChild) + 1, 0, newQuestion);
              designState.caseReducers.setup(state, {
                payload: {
                  code: newQuestionId,
                  rules: setupOptions(newQuestion.type)
                }
              });
              cleanupRandomRules(group);
              state.index = buildCodeIndex(state);
              state.focus = newQuestionId;
            },
            removeAnswer: (state, action) => {
              var _state$setup4;
              const answerQualifiedCode = action.payload;
              const codes = splitQuestionCodes(answerQualifiedCode);
              let question = state[codes[0]];
              question.children = question.children.filter(el => el.code !== codes[1]);
              delete state[answerQualifiedCode];
              // could be otherText
              if ((_state$setup4 = state.setup) !== null && _state$setup4 !== void 0 && (_state$setup4 = _state$setup4.code) !== null && _state$setup4 !== void 0 && _state$setup4.includes(answerQualifiedCode)) {
                designState.caseReducers.resetSetup(state);
              }
              state.index = buildCodeIndex(state);
              question.designErrors = questionDesignError(question);
              cleanupValidation(state, codes[0]);
              cleanupDefaultValue(question);
              refreshEnumForSingleChoice(question, state);
              refreshListForMultipleChoice(question, state);
              addMaskedValuesInstructions(codes[0], question, state);
              cleanupRandomRules(question);
              addSkipInstructions(state, codes[0]);
            },
            addNewAnswers: (state, action) => {
              var _question$children;
              const questionCode = action.payload.questionCode;
              const data = action.payload.data;
              const type = action.payload.type;
              let index = action.payload.index;
              const question = state[questionCode];
              const children = ((_question$children = question.children) === null || _question$children === void 0 ? void 0 : _question$children.filter(it => state[it.qualifiedCode].type == type)) || [];
              data.forEach((item, itemIndex) => {
                if (item) {
                  const nextAnswer = children[index + 1];
                  if (nextAnswer && nextAnswer.qualifiedCode && state[nextAnswer.qualifiedCode] && (!state[nextAnswer.qualifiedCode].content || !state[nextAnswer.qualifiedCode].content[state.langInfo.lang])) {
                    designState.caseReducers.changeContent(state, {
                      payload: {
                        code: nextAnswer.qualifiedCode,
                        key: "label",
                        value: item,
                        lang: state.langInfo.lang
                      }
                    });
                  } else {
                    designState.caseReducers.addNewAnswer(state, {
                      payload: {
                        questionCode,
                        label: item,
                        type,
                        index,
                        focus: itemIndex == data.length - 1
                      }
                    });
                  }
                  index++;
                }
              });
            },
            onNewLine: (state, action) => {
              const questionCode = action.payload.questionCode;
              const index = action.payload.index;
              const type = action.payload.type;
              const answers = state[questionCode].children || [];
              const nextAnswerOfSameType = answers.filter(answer => answer.type == type)[index + 1];
              if (nextAnswerOfSameType && nextAnswerOfSameType.qualifiedCode) {
                state.focus = nextAnswerOfSameType.qualifiedCode;
              } else {
                designState.caseReducers.addNewAnswer(state, {
                  payload: {
                    questionCode,
                    type,
                    index
                  }
                });
              }
            },
            addNewAnswer: (state, action) => {
              const questionCode = action.payload.questionCode;
              const type = action.payload.type;
              const index = action.payload.index;
              const focus = action.payload.focus || true;
              let label = action.payload.label;
              const answers = state[questionCode].children || [];
              let nextAnswerIndex = 1;
              let code = "";
              let qualifiedCode = "";
              switch (type) {
                case "column":
                  nextAnswerIndex = nextId(answers.filter(el => el.type === "column"));
                  code = "Ac" + nextAnswerIndex;
                  qualifiedCode = questionCode + code;
                  addAnswer(state, {
                    code,
                    qualifiedCode,
                    type,
                    label,
                    index
                  });
                  break;
                case "row":
                  nextAnswerIndex = nextId(answers.filter(el => el.type === "row"));
                  code = "A" + nextAnswerIndex;
                  qualifiedCode = questionCode + code;
                  addAnswer(state, {
                    code,
                    qualifiedCode,
                    type,
                    label,
                    index,
                    focus
                  });
                  break;
                case "other":
                  code = "Aother";
                  label = "Other";
                  qualifiedCode = questionCode + code;
                  addAnswer(state, {
                    code,
                    qualifiedCode,
                    type,
                    label,
                    index,
                    focus
                  });
                  addAnswer(state, {
                    code: "Atext",
                    qualifiedCode: qualifiedCode + "Atext",
                    type: "other_text",
                    index
                  });
                  break;
                case "all":
                  code = "Aall";
                  label = "All of the above";
                  qualifiedCode = questionCode + code;
                  addAnswer(state, {
                    code,
                    qualifiedCode,
                    type,
                    label,
                    index,
                    focus
                  });
                  break;
                case "none":
                  code = "Anone";
                  label = "None of the above";
                  qualifiedCode = questionCode + code;
                  addAnswer(state, {
                    code,
                    qualifiedCode,
                    type,
                    label,
                    index,
                    focus
                  });
                  break;
                default:
                  nextAnswerIndex = nextId(answers);
                  code = "A" + nextAnswerIndex;
                  qualifiedCode = questionCode + code;
                  addAnswer(state, {
                    code,
                    qualifiedCode,
                    label,
                    index,
                    focus
                  });
                  break;
              }
            },
            deleteGroup: (state, action) => {
              var _state$setup5, _survey$children2;
              const groupCode = action.payload;
              if (((_state$setup5 = state.setup) === null || _state$setup5 === void 0 ? void 0 : _state$setup5.code) == groupCode) {
                designState.caseReducers.resetSetup(state);
              }
              if (state[groupCode].groupType == "END") {
                state.error = {
                  message: "There must always be an end group. for an end message "
                };
                return;
              }
              const survey = state.Survey;
              const index = (_survey$children2 = survey.children) === null || _survey$children2 === void 0 ? void 0 : _survey$children2.findIndex(x => x.code === groupCode);
              survey.children.splice(index, 1);
              delete state[groupCode];
              cleanupRandomRules(survey);
              cleanupSkipDestinations(state, groupCode);
            },
            deleteQuestion: (state, action) => {
              var _state$setup6, _survey$children3;
              const questionCode = action.payload;
              if (((_state$setup6 = state.setup) === null || _state$setup6 === void 0 ? void 0 : _state$setup6.code) == questionCode) {
                designState.caseReducers.resetSetup(state);
              }
              const survey = state.Survey;
              const group = (_survey$children3 = survey.children) === null || _survey$children3 === void 0 || (_survey$children3 = _survey$children3.map(group => state[group.code])) === null || _survey$children3 === void 0 || (_survey$children3 = _survey$children3.filter(group => group.children && group.children.findIndex(child => child.code == questionCode) !== -1)) === null || _survey$children3 === void 0 ? void 0 : _survey$children3[0];
              if (!group) {
                return;
              }
              const questionIndex = group.children.findIndex(x => x.code === questionCode);
              let children = [...group.children];
              if (children.length === 1) {
                group.children = [];
              } else {
                group.children.splice(questionIndex, 1);
              }
              delete state[questionCode];
              cleanupRandomRules(group);
              cleanupSkipDestinations(state, questionCode);
            },
            changeContent: (state, action) => {
              var _state$payload$code$i, _state$payload$code$i2;
              let payload = action.payload;
              if (!state[payload.code].content) {
                state[payload.code].content = {};
                state[payload.code].content[payload.lang] = {};
              } else if (!state[payload.code].content[payload.lang]) {
                state[payload.code].content[payload.lang] = {};
              }
              const prefixToRemove = `format_${payload.key}_${payload.lang}`;
              const toRemove = (_state$payload$code$i = state[payload.code].instructionList) === null || _state$payload$code$i === void 0 ? void 0 : _state$payload$code$i.filter(instruction => instruction.code.startsWith(prefixToRemove));
              toRemove === null || toRemove === void 0 || toRemove.forEach(instruction => {
                console.log(instruction.code);
                changeInstruction(state[payload.code], {
                  code: instruction.code,
                  remove: true
                });
              });
              state[payload.code].instructionList = (_state$payload$code$i2 = state[payload.code].instructionList) === null || _state$payload$code$i2 === void 0 ? void 0 : _state$payload$code$i2.filter(instruction => !instruction.code.startsWith(prefixToRemove));
              const referenceInstructions = buildReferenceInstruction(payload.value, payload.key, payload.lang, [payload.value, payload.key, payload.lang]);
              referenceInstructions === null || referenceInstructions === void 0 || referenceInstructions.forEach(instruction => changeInstruction(state[payload.code], instruction));
              saveContentResources(state[payload.code], payload.value, payload.lang, payload.key);
              state[payload.code].content[payload.lang][payload.key] = payload.value;
            },
            changeCustomCss: (state, action) => {
              let payload = action.payload;
              const referenceInstructions = buildReferenceInstruction(payload.value, "custom", "css", ["customCss"]);
              state[payload.code].customCss = payload.value;
              referenceInstructions === null || referenceInstructions === void 0 || referenceInstructions.forEach(instruction => changeInstruction(state[payload.code], instruction));
            },
            changeResources: (state, action) => {
              let payload = action.payload;
              if (!state[payload.code].resources) {
                state[payload.code].resources = {};
              }
              state[payload.code].resources[payload.key] = payload.value;
            },
            updateRandom: (state, action) => {
              const payload = action.payload;
              const componentState = state[payload.code];
              if (payload.groups) {
                const instruction = {
                  code: "random_group",
                  groups: payload.groups
                };
                changeInstruction(componentState, instruction);
              } else {
                removeInstruction(componentState, "random_group");
              }
            },
            updateRandomByType: (state, action) => {
              var _state$payload$code, _randomInstruction$gr;
              const payload = action.payload;
              const componentState = state[payload.code];
              const otherChildrenCodes = (_state$payload$code = state[payload.code]) === null || _state$payload$code === void 0 || (_state$payload$code = _state$payload$code.children) === null || _state$payload$code === void 0 || (_state$payload$code = _state$payload$code.filter(el => el.type !== payload.type)) === null || _state$payload$code === void 0 ? void 0 : _state$payload$code.map(el => el.code);
              const randomInstruction = instructionByCode(componentState, "random_group");
              const otherRandomOrders = (randomInstruction === null || randomInstruction === void 0 || (_randomInstruction$gr = randomInstruction.groups) === null || _randomInstruction$gr === void 0 ? void 0 : _randomInstruction$gr.filter(x => x.length && x.some(elem => otherChildrenCodes.includes(elem)))) || [];
              const groups = payload.groups.concat(otherRandomOrders);
              if (groups) {
                const instruction = {
                  code: "random_group",
                  groups
                };
                changeInstruction(componentState, instruction);
              } else {
                removeInstruction(componentState, "random_group");
              }
            },
            // === SKIP LOGIC REDUCERS ===
            addSkipRule: (state, action) => {
              const code = action.payload.code;
              if (!state[code].skip_logic) {
                state[code].skip_logic = [];
              }
              state[code].skip_logic.push({
                condition: [],
                skipTo: null
              });
            },
            updateSkipRule: (state, action) => {
              const _action$payload2 = action.payload,
                code = _action$payload2.code,
                ruleIndex = _action$payload2.ruleIndex,
                updates = _action$payload2.updates;
              const rule = state[code].skip_logic[ruleIndex];
              Object.assign(rule, updates);
              // Reset toEnd/disqualify if destination is not a group
              if (updates.skipTo && !updates.skipTo.startsWith("G")) {
                rule.toEnd = false;
                rule.disqualify = false;
              }
              addSkipInstructions(state, code);
            },
            removeSkipRule: (state, action) => {
              const _action$payload3 = action.payload,
                code = _action$payload3.code,
                ruleIndex = _action$payload3.ruleIndex;
              state[code].skip_logic.splice(ruleIndex, 1);
              addSkipInstructions(state, code);
            },
            addCustomValidationRule: (state, action) => {
              const code = action.payload.code;
              const numbers = (state[code].instructionList || []).map(i => {
                var _i$code$match;
                return (_i$code$match = i.code.match(/^validation_custom_(\d+)$/)) === null || _i$code$match === void 0 ? void 0 : _i$code$match[1];
              }).filter(Boolean).map(Number);
              const newRuleCode = `validation_custom_${Math.max(0, ...numbers) + 1}`;
              changeInstruction(state[code], {
                code: newRuleCode,
                text: "",
                returnType: "boolean",
                isActive: true
              });
            },
            updateCustomValidationRuleText: (state, action) => {
              const _action$payload4 = action.payload,
                code = _action$payload4.code,
                ruleCode = _action$payload4.ruleCode,
                text = _action$payload4.text;
              state[code].instructionList.find(i => i.code === ruleCode).text = text;
            },
            renameCustomValidationRule: (state, action) => {
              const _action$payload5 = action.payload,
                code = _action$payload5.code,
                ruleCode = _action$payload5.ruleCode,
                newCode = _action$payload5.newCode;
              const instruction = state[code].instructionList.find(i => i.code === ruleCode);
              instruction.code = newCode;
              const content = state[code].content || {};
              Object.keys(content).forEach(lang => {
                if (content[lang][ruleCode] !== undefined) {
                  content[lang][newCode] = content[lang][ruleCode];
                  delete content[lang][ruleCode];
                }
              });
            },
            updateCustomValidationRuleError: (state, action) => {
              const _action$payload6 = action.payload,
                code = _action$payload6.code,
                ruleCode = _action$payload6.ruleCode,
                lang = _action$payload6.lang,
                value = _action$payload6.value;
              if (value) {
                state[code].content[lang][ruleCode] = value;
              } else {
                delete state[code].content[lang][ruleCode];
              }
            },
            removeCustomValidationRule: (state, action) => {
              const _action$payload7 = action.payload,
                code = _action$payload7.code,
                ruleCode = _action$payload7.ruleCode;
              changeInstruction(state[code], {
                code: ruleCode,
                remove: true
              });
              const content = state[code].content || {};
              Object.keys(content).forEach(lang => {
                delete content[lang][ruleCode];
              });
            },
            updateInstruction: (state, action) => {
              const _action$payload8 = action.payload,
                code = _action$payload8.code,
                instruction = _action$payload8.instruction;
              if (!state[code]) {
                return;
              }
              changeInstruction(state[code], instruction);
            },
            onBaseLangChanged: (state, action) => {
              var _state$Survey$additio;
              state.langInfo.mainLang = action.payload.code;
              state.Survey.defaultLang = action.payload;
              state.Survey.additionalLang = (_state$Survey$additio = state.Survey.additionalLang) === null || _state$Survey$additio === void 0 ? void 0 : _state$Survey$additio.filter(language => language.code !== action.payload.code);
              state.langInfo.lang = action.payload.code;
              state.langInfo.onMainLang = true;
              state.langInfo.languagesList = [action.payload].concat(state.Survey.additionalLang || []);
            },
            onAdditionalLangAdded: (state, action) => {
              state.Survey.additionalLang = (state.Survey.additionalLang || []).concat(action.payload);
              state.langInfo.languagesList = [state.Survey.defaultLang].concat(state.Survey.additionalLang || []);
            },
            onAdditionalLangRemoved: (state, action) => {
              state.Survey.additionalLang = state.Survey.additionalLang.filter(language => language.code !== action.payload.code);
              state.langInfo.languagesList = [state.Survey.defaultLang].concat(state.Survey.additionalLang || []);
            },
            changeLang: (state, action) => {
              state.langInfo.lang = action.payload;
              state.langInfo.onMainLang = state.langInfo.lang == state.langInfo.mainLang;
            },
            resetFocus: (state, action) => {
              state.focus = null;
            },
            setSaving: (state, action) => {
              state.isSaving = action.payload;
            },
            setUpdating: (state, action) => {
              state.isUpdating = action.payload;
            },
            onDrag: (state, action) => {
              state.skipScroll = true;
              const payload = action.payload;
              switch (payload.type) {
                case "reorder_questions":
                  reorderQuestions(state, state.Survey, payload);
                  state.index = buildCodeIndex(state);
                  break;
                case "reparent_question":
                  reparentQuestion(state, state.Survey, payload);
                  state.index = buildCodeIndex(state);
                  break;
                case "reorder_groups":
                  reorderGroups(state.Survey, payload);
                  state.index = buildCodeIndex(state);
                  break;
                case "reorder_answers":
                  reorderAnswers(state, payload);
                  break;
                case "reorder_answers_by_type":
                  reorderAnswersByType(state, payload);
                  break;
                case "new_question":
                  newQuestion(state, payload);
                  state.index = buildCodeIndex(state);
                  break;
                case "new_group":
                  if (payload.groupType == "group") {
                    newGroup(state, payload);
                    state.index = buildCodeIndex(state);
                  } else if (payload.groupType == "end" || payload.groupType == "welcome") {
                    specialGroup(state, payload);
                  }
                  break;
              }
            },
            addComponent: (state, action) => {
              const _action$payload9 = action.payload,
                type = _action$payload9.type,
                questionType = _action$payload9.questionType;
              const survey = state.Survey;
              state.skipScroll = false;
              if (type === "group") {
                const lastGroupIndex = Math.max(0, survey.children.length - 1);
                newGroup(state, {
                  toIndex: lastGroupIndex
                });
              } else if (type === "question") {
                var _destinationGroup$chi;
                if (state.Survey.children.length == 1) {
                  newGroup(state, {
                    toIndex: 0
                  });
                }
                const lastGroupIndex = Math.max(0, survey.children.length - 2);
                const destinationGroupCode = survey.children[lastGroupIndex].code;
                const destinationGroup = state[destinationGroupCode];
                const toIndex = ((_destinationGroup$chi = destinationGroup.children) === null || _destinationGroup$chi === void 0 ? void 0 : _destinationGroup$chi.length) || 0;
                newQuestion(state, {
                  destination: destinationGroupCode,
                  questionType,
                  toIndex
                });
              }
              state.index = buildCodeIndex(state);
            }
          }
        });
        const _designState$actions = designState.actions,
          designStateReceived = _designState$actions.designStateReceived,
          addComponent = _designState$actions.addComponent,
          setSaving$1 = _designState$actions.setSaving,
          setUpdating$1 = _designState$actions.setUpdating;
        const designState$1 = designState.reducer;
        const cleanupRandomRules = componentState => {
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

        // Clean up skip_logic rules that point to a deleted destination
        const cleanupSkipDestinations = (state, deletedCode) => {
          Object.keys(state).forEach(key => {
            const component = state[key];
            if (Array.isArray(component === null || component === void 0 ? void 0 : component.skip_logic)) {
              const hadRules = component.skip_logic.some(rule => rule.skipTo === deletedCode);
              if (hadRules) {
                component.skip_logic = component.skip_logic.filter(rule => rule.skipTo !== deletedCode);
                addSkipInstructions(state, key);
              }
            }
          });
        };
        const saveContentResources = (component, contentValue, contentLang, contentKey) => {
          const regex = /data-resource-name="([^"]+)"/g;
          const resources = Array.from(contentValue.matchAll(regex), match => match[1]).filter(name => name && name.trim());
          if (!component.resources) {
            component.resources = {};
          }
          // Remove existing items with matching keys
          const prefix = `content_${contentLang}_${contentKey}`;
          Object.keys(component.resources).forEach(key => {
            if (key.startsWith(prefix)) {
              delete component.resources[key];
            }
          });
          resources.forEach((elem, index) => {
            component.resources[`${prefix}_${index + 1}`] = elem;
          });
        };
        const reparentQuestion = (state, survey, payload) => {
          var _destinationGroup$chi2;
          let index = buildIndex(state);
          const sourceGroup = state[payload.source];
          const destinationGroup = state[payload.destination];
          const sourceQuestionIndex = sourceGroup.children.findIndex(question => question.code == payload.id);
          const destinationQuestionIndex = index.indexOf(payload.destination) > index.indexOf(payload.source) ? 0 : ((_destinationGroup$chi2 = destinationGroup.children) === null || _destinationGroup$chi2 === void 0 ? void 0 : _destinationGroup$chi2.length) || 0;
          const question = sourceGroup.children[sourceQuestionIndex];
          if (!question) {
            return;
          }
          sourceGroup.children.splice(sourceQuestionIndex, 1);
          if (!destinationGroup.children) {
            destinationGroup.children = [];
          }
          destinationGroup.children.splice(destinationQuestionIndex, 0, question);
          // cheap trick to notifiy Drop Areas of the update
          state["reorder_refresh_code"] = Math.floor(Math.random() * 1000000);
          cleanupRandomRules(destinationGroup);
          cleanupRandomRules(sourceGroup);
        };
        const reorderQuestions = (state, survey, payload) => {
          const sourceGroup = state[payload.source];
          const destinationGroup = state[payload.destination];
          const sourceQuestionIndex = sourceGroup.children.findIndex(question => question.code == payload.id);
          const destinationQuestionIndex = payload.toIndex - 1;
          const question = sourceGroup.children[sourceQuestionIndex];
          sourceGroup.children.splice(sourceQuestionIndex, 1);
          if (!destinationGroup.children) {
            destinationGroup.children = [];
          }
          destinationGroup.children.splice(destinationQuestionIndex, 0, question);
          // cheap trick to notifiy Drop Areas of the update
          state["reorder_refresh_code"] = Math.floor(Math.random() * 1000000);
          cleanupRandomRules(destinationGroup);
          cleanupRandomRules(sourceGroup);
        };
        const newQuestion = (state, payload) => {
          var _state$newCode$childr;
          const survey = state.Survey;
          let questionId = nextQuestionId(state, survey.children);
          const questionObject = createQuestion(payload.questionType, questionId, state.langInfo.mainLang);
          const destinationGroup = state[payload.destination];
          const destinationQuestionIndex = payload.toIndex;
          if (!destinationGroup.children) {
            destinationGroup.children = [];
          }
          Object.keys(questionObject).filter(key => key != "question").forEach(key => {
            state[key] = questionObject[key];
          });
          const newCode = `Q${questionId}`;
          addQuestionInstructions(state[newCode]);
          (_state$newCode$childr = state[newCode].children) === null || _state$newCode$childr === void 0 || _state$newCode$childr.forEach(element => {
            addAnswerInstructions(state, state[element.qualifiedCode], newCode, newCode);
          });
          cleanupValidation(state, newCode);
          cleanupDefaultValue(questionObject[newCode]);
          refreshEnumForSingleChoice(questionObject[newCode], state);
          refreshListForMultipleChoice(questionObject[newCode], state);
          addMaskedValuesInstructions(newCode, questionObject[newCode], state);
          destinationGroup.children.splice(destinationQuestionIndex, 0, questionObject.question);
          const groupIndex = survey.children.findIndex(group => group.code === payload.destination);
          state.lastAddedComponent = {
            type: "question",
            groupIndex: groupIndex,
            questionIndex: destinationQuestionIndex
          };
          cleanupRandomRules(destinationGroup);
          state.focus = newCode;
          designState.caseReducers.setup(state, {
            payload: {
              code: newCode,
              rules: setupOptions(payload.questionType)
            }
          });
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
          const lastGroupIndex = survey.children.findIndex(child => child.code === group.newGroup.code);
          state.lastAddedComponent = {
            type: "group",
            index: lastGroupIndex
          };
          cleanupRandomRules(survey);
          state.focus = group.newGroup.code;
          designState.caseReducers.setup(state, {
            payload: {
              code: group.newGroup.code,
              rules: setupOptions(group.newGroup.type)
            }
          });
        };
        const specialGroup = (state, payload) => {
          const survey = state.Survey;
          if (!survey.children) {
            survey.children = [];
          }
          const index = survey.children.findIndex(group => {
            var _state$group$code$gro;
            return ((_state$group$code$gro = state[group.code].groupType) === null || _state$group$code$gro === void 0 ? void 0 : _state$group$code$gro.toLowerCase()) === payload.groupType;
          });
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
        const addAnswer = (state, answer) => {
          const lang = state.langInfo.mainLang;
          const label = answer.label;
          const qualifiedCode = answer.qualifiedCode;
          state[qualifiedCode] = {};
          const codes = splitQuestionCodes(qualifiedCode);
          const parentCode = codes.slice(0, codes.length - 1).join("");
          const questionCode = codes[0];
          if (!insertAnswer(state, answer, parentCode, answer.index)) {
            return;
          }
          if (label) {
            state[qualifiedCode].content = {
              [lang]: {
                label: label
              }
            };
          }
          if (answer.type) {
            state[qualifiedCode].type = answer.type;
          }
          addAnswerInstructions(state, state[qualifiedCode], parentCode, questionCode);
          cleanupDefaultValue(state[questionCode]);
          refreshEnumForSingleChoice(state[questionCode], state);
          refreshListForMultipleChoice(state[questionCode], state);
          if (answer.focus) {
            state.focus = qualifiedCode;
          }
        };
        const reorderGroups = (survey, payload) => {
          survey.children = reorder(survey.children, payload.fromIndex, payload.toIndex);
        };
        const reorderAnswers = (state, payload) => {
          const codes = splitQuestionCodes(payload.id);
          const parentCode = codes.slice(0, codes.length - 1).join("");
          const component = state[parentCode];
          component.children = reorder(component.children, payload.fromIndex, payload.toIndex);
        };
        const reorderAnswersByType = (state, payload) => {
          const codes = splitQuestionCodes(payload.id);
          const parentCode = codes.slice(0, codes.length - 1).join("");
          const component = state[parentCode];
          const type = state[payload.id].type;
          const filteredChildren = component.children.filter(child => child.type == type);
          const fromIndex = component.children.indexOf(filteredChildren[payload.fromIndex]);
          const toIndex = component.children.indexOf(filteredChildren[payload.toIndex]);
          component.children = reorder(component.children, fromIndex, toIndex);
        };
        const insertAnswer = (state, answer, parentCode, index) => {
          const component = state[parentCode];
          if (component) {
            if (!component.children) {
              component.children = [];
            }
            const insertIndex = typeof index == "number" ? typeof answer.type == "string" ? index + firstIndexInArray(component.children, child => child.type == answer.type) : index : lastIndexInArray(component.children, child => child.type == answer.type || !child.type);
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
        const buildIndex = state => {
          var _state$Survey$childre;
          let retrunRestult = [];
          (_state$Survey$childre = state.Survey.children) === null || _state$Survey$childre === void 0 || _state$Survey$childre.forEach(group => {
            retrunRestult.push(group.code);
            let groupObj = state[group.code];
            if (groupObj.children && !groupObj.collapsed) {
              groupObj.children.forEach(question => {
                if (question !== null && question !== void 0 && question.code) {
                  retrunRestult.push(question.code);
                }
              });
            }
          });
          return retrunRestult;
        };
        const buildCodeIndex = state => {
          var _state$Survey$childre2;
          let retrunRestult = {};
          let groupCount = 0;
          let questionCount = 0;
          (_state$Survey$childre2 = state.Survey.children) === null || _state$Survey$childre2 === void 0 || _state$Survey$childre2.forEach(group => {
            groupCount++;
            retrunRestult[group.code] = "P" + groupCount;
            let groupObj = state[group.code];
            if (groupObj.children) {
              groupObj.children.forEach(question => {
                questionCount++;
                retrunRestult[question.code] = "Q" + questionCount;
                let questionObj = state[question.code];
                if (questionObj.children) {
                  questionObj.children.forEach(answer => {
                    retrunRestult[answer.qualifiedCode] = "Q" + questionCount + answer.code;
                  });
                }
              });
            }
          });
          return retrunRestult;
        };
        const splitQuestionCodes = code => {
          return code.split(/(A[a-z_0-9]+|Q[a-z_0-9]+)/).filter(Boolean);
        };
        const cleanupValidation = (state, code) => {
          const component = state[code];
          if (!component.validation) {
            return;
          }
          const ruleKeys = Object.keys(component["validation"]);
          ruleKeys.forEach(key => processValidation(state, code, key, true));
        };
        const addRelevanceInstructions = (state, code, relevance) => {
          const instruction = conditionalRelevanceEquation(relevance.logic, relevance.rule, state);
          changeInstruction(state[code], instruction);
        };
        const creatNewState = (state, toBeCopied, newStateCode, oldQuestionCode, newQuestionCode) => {
          var _newState$instruction3, _state$newStateCode;
          const newState = cloneDeep(toBeCopied);
          if (newState.relevance) {
            var _newState$instruction;
            delete newState.relevance;
            const index = (_newState$instruction = newState.instructionList) === null || _newState$instruction === void 0 ? void 0 : _newState$instruction.findIndex(instruction => instruction.code == "conditional_relevance");
            if (index) {
              var _newState$instruction2;
              (_newState$instruction2 = newState.instructionList) === null || _newState$instruction2 === void 0 || _newState$instruction2.splice(index, 1);
            }
          }
          if (newState.skip_logic) {
            delete newState.skip_logic;
            newState.instructionList = newState.instructionList.filter(eq => !eq.code.startsWith("skip_to_on_"));
          }
          (_newState$instruction3 = newState.instructionList) === null || _newState$instruction3 === void 0 || _newState$instruction3.forEach(eq => {
            var _eq$text;
            eq.text = (_eq$text = eq.text) === null || _eq$text === void 0 ? void 0 : _eq$text.replaceAll(oldQuestionCode, newQuestionCode);
          });
          state[newStateCode] = newState;
          (_state$newStateCode = state[newStateCode]) === null || _state$newStateCode === void 0 || (_state$newStateCode = _state$newStateCode.children) === null || _state$newStateCode === void 0 || _state$newStateCode.forEach(child => {
            let oldChildCode = child.qualifiedCode;
            let newChildCode = child.qualifiedCode.replaceAll(oldQuestionCode, newQuestionCode);
            child.qualifiedCode = newChildCode;
            creatNewState(state, state[oldChildCode], newChildCode, oldQuestionCode, newQuestionCode);
          });
        };
        const editState = createSlice({
          name: "editState",
          initialState: {
            state: {},
            error: null,
            isSaving: false,
            isUpdating: false,
            loading: false
          },
          reducers: {
            setSaving: (state, action) => {
              state.isSaving = action.payload;
            },
            setUpdating: (state, action) => {
              state.isUpdating = action.payload;
            },
            surveyReceived: (state, action) => {
              let survey = action.payload;
              if (!isEquivalent(state.survey, survey)) {
                state.survey = survey;
              }
            },
            setLoading: (state, action) => {
              state.loading = action.payload;
            },
            surveyAttributeChanged: (state, action) => {
              let payload = action.payload;
              state.survey[payload.key] = payload.value;
            },
            surveyAttributeChangedImmediate: (state, action) => {
              let payload = action.payload;
              state.survey[payload.key] = payload.value;
            },
            onError: (state, action) => {
              state.loading = false;
              state.error = action.payload;
            },
            onEditErrorSeen: state => {
              if (state.error) {
                state.error.seen = true;
              }
            }
          }
        });
        const _editState$actions = editState.actions,
          surveyReceived = _editState$actions.surveyReceived,
          setSaving = _editState$actions.setSaving,
          setUpdating = _editState$actions.setUpdating,
          onError = _editState$actions.onError;
        const editState$1 = editState.reducer;
        const PROCESSED_ERRORS = {
          NETWORK_ERR: {
            name: "network_err",
            handleGlobally: true
          },
          BACKEND_DOWN: {
            name: "backend_down",
            handleGlobally: true
          },
          WRONG_CONFIRMATION_TOKEN: {
            name: "wrong_confirmation_token",
            handleGlobally: false
          },
          EXPIRED_CONFIRMATION_TOKEN: {
            name: "expired_confirmation_token",
            handleGlobally: false
          },
          UNIDENTIFIED_ERROR: {
            name: "unidentified_error",
            handleGlobally: true
          },
          SURVEY_CLOSED: {
            name: "survey_closed",
            handleGlobally: false
          },
          WRONG_RESET_TOKEN: {
            name: "wrong_reset_token",
            handleGlobally: false
          },
          COMPONENT_DELETED: {
            name: "component_deleted",
            handleGlobally: false
          },
          CODE_CHANGED_AFTER_PUBLISH: {
            name: "code_changed_after_publish",
            handleGlobally: false
          },
          DESIGN_OUT_OF_SYNC: {
            name: "design_out_of_sync",
            handleGlobally: false
          },
          WRONG_CREDENTIALS: {
            name: "wrong_credentials",
            handleGlobally: false
          },
          WRONG_PIN: {
            name: "code_invalid",
            handleGlobally: false
          },
          DESIGN_NOT_AVAILABLE_EXCEPTION: {
            name: "invalid_file_for_survey_export",
            handleGlobally: false
          },
          DUPLICATE_EMAIL: {
            name: "duplicate_email",
            handleGlobally: false
          },
          AUTOCOMPLETE_MALFORMED_INPUT: {
            name: "autocomplete_malformed_input",
            handleGlobally: false
          },
          MAX_UPLOAD_SIZE_EXCEEDED: {
            name: "max_upload_size_exceeded",
            handleGlobally: false
          },
          DUPLICATE_SURVEY_NAME: {
            name: "duplicate_survey_name",
            handleGlobally: false
          },
          EXPIRED_RESET_TOKEN: {
            name: "expired_reset_token",
            handleGlobally: false
          },
          USED_CONFIRMATION_TOKEN: {
            name: "used_confirmation_token",
            handleGlobally: false
          },
          USER_NOT_FOUND: {
            name: "user_not_found",
            handleGlobally: false
          },
          MISSING_CREDENTIALS: {
            name: "missing_credentials",
            handleGlobally: false
          },
          SURVEY_DESIGN_ERROR: {
            name: "survey_design_error",
            handleGlobally: false
          },
          SURVEY_NOT_ACTIVE: {
            name: "survey_not_active",
            handleGlobally: false
          },
          SURVEY_SCHEDULED: {
            name: "survey_scheduled",
            handleGlobally: false
          },
          SURVEY_EXPIRED: {
            name: "survey_expired",
            handleGlobally: false
          },
          INVALID_SURVEY_DATES: {
            name: "invalid_survey_dates",
            handleGlobally: false
          },
          SURVEY_QUOTA: {
            name: "survey_quota",
            handleGlobally: false
          },
          DUPLICATE_TO_CODE: {
            name: "duplicate_to_code",
            handleGlobally: false
          }
        };
        const onApiError = ({
          error,
          globalErrorHandler = error => {},
          locallErrorHandler = error => {}
        }) => {
          const processed = !error ? PROCESSED_ERRORS.UNIDENTIFIED_ERROR : processError(error);
          if (processed && processed.handleGlobally) {
            globalErrorHandler(processed);
          } else if (processed) {
            locallErrorHandler(processed);
          }
          return processed;
        };
        const processApiError = ({
          error,
          globalErrorHandler = processed => {}
        }) => {
          const processed = !error ? PROCESSED_ERRORS.UNIDENTIFIED_ERROR : processError(error);
          if (processed.handleGlobally) {
            globalErrorHandler(processed);
          }
          return processed;
        };
        const processError = e => {
          var _e$response;
          if (e.code == "ERR_NETWORK" && navigator.onLine) {
            return PROCESSED_ERRORS.BACKEND_DOWN;
          } else if (e.code == "ERR_NETWORK" && !navigator.onLine) {
            return PROCESSED_ERRORS.NETWORK_ERR;
          } else if ((_e$response = e.response) !== null && _e$response !== void 0 && (_e$response = _e$response.data) !== null && _e$response !== void 0 && _e$response.error) {
            var _e$response2;
            switch ((_e$response2 = e.response) === null || _e$response2 === void 0 || (_e$response2 = _e$response2.data) === null || _e$response2 === void 0 ? void 0 : _e$response2.error) {
              case "WrongCredentialsException":
                return PROCESSED_ERRORS.WRONG_CREDENTIALS;
              case "AutoCompleteMalformedInputException":
                return PROCESSED_ERRORS.AUTOCOMPLETE_MALFORMED_INPUT;
              case "MaxUploadSizeExceededException":
                return PROCESSED_ERRORS.MAX_UPLOAD_SIZE_EXCEEDED;
              case "DuplicateEmailException":
                return PROCESSED_ERRORS.DUPLICATE_EMAIL;
              case "DesignNotAvailableException":
                return PROCESSED_ERRORS.DESIGN_NOT_AVAILABLE_EXCEPTION;
              case "ComponentDeleted":
              case "ComponentDeletedException":
                return PROCESSED_ERRORS.COMPONENT_DELETED;
              case "CodeChangeAfterPublishException":
                return PROCESSED_ERRORS.CODE_CHANGED_AFTER_PUBLISH;
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
              case "DuplicateToCodeException":
                return PROCESSED_ERRORS.DUPLICATE_TO_CODE;
              default:
                return PROCESSED_ERRORS.UNIDENTIFIED_ERROR;
            }
          }
        };
        class BaseService {
          constructor(dispatch) {
            this.dispatch = dispatch;
          }
          handleRequest(apiCall) {
            var _this2 = this;
            return _asyncToGenerator(function* () {
              try {
                return yield apiCall();
              } catch (error) {
                throw processApiError({
                  error: error,
                  globalErrorHandler: processedError => {
                    _this2.dispatch(onError(processedError));
                  }
                });
              }
            })();
          }
        }
        const normalizeUrl = url => {
          return url.endsWith("/") ? url : url + "/";
        };
        const FRONT_END_HOST = "localhost:3000";
        const FRONT_END_DOMAIN = "localhost:3000".split(":")[0];
        const PROTOCOL = "http";
        const BACKEND_BASE_URL = normalizeUrl("http://localhost:8080/");

        /*! js-cookie v3.0.5 | MIT */
        /* eslint-disable no-var */
        function assign(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              target[key] = source[key];
            }
          }
          return target;
        }
        /* eslint-enable no-var */

        /* eslint-disable no-var */
        var defaultConverter = {
          read: function read(value) {
            if (value[0] === '"') {
              value = value.slice(1, -1);
            }
            return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
          },
          write: function write(value) {
            return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
          }
        };
        /* eslint-enable no-var */

        /* eslint-disable no-var */

        function init(converter, defaultAttributes) {
          function set(name, value, attributes) {
            if (typeof document === 'undefined') {
              return;
            }
            attributes = assign({}, defaultAttributes, attributes);
            if (typeof attributes.expires === 'number') {
              attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
            }
            if (attributes.expires) {
              attributes.expires = attributes.expires.toUTCString();
            }
            name = encodeURIComponent(name).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var stringifiedAttributes = '';
            for (var attributeName in attributes) {
              if (!attributes[attributeName]) {
                continue;
              }
              stringifiedAttributes += '; ' + attributeName;
              if (attributes[attributeName] === true) {
                continue;
              }

              // Considers RFC 6265 section 5.2:
              // ...
              // 3.  If the remaining unparsed-attributes contains a %x3B (";")
              //     character:
              // Consume the characters of the unparsed-attributes up to,
              // not including, the first %x3B (";") character.
              // ...
              stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
            }
            return document.cookie = name + '=' + converter.write(value, name) + stringifiedAttributes;
          }
          function get(name) {
            if (typeof document === 'undefined' || arguments.length && !name) {
              return;
            }

            // To prevent the for loop in the first place assign an empty array
            // in case there are no cookies at all.
            var cookies = document.cookie ? document.cookie.split('; ') : [];
            var jar = {};
            for (var i = 0; i < cookies.length; i++) {
              var parts = cookies[i].split('=');
              var value = parts.slice(1).join('=');
              try {
                var found = decodeURIComponent(parts[0]);
                jar[found] = converter.read(value, found);
                if (name === found) {
                  break;
                }
              } catch (e) {}
            }
            return name ? jar[name] : jar;
          }
          return Object.create({
            set,
            get,
            remove: function remove(name, attributes) {
              set(name, '', assign({}, attributes, {
                expires: -1
              }));
            },
            withAttributes: function withAttributes(attributes) {
              return init(this.converter, assign({}, this.attributes, attributes));
            },
            withConverter: function withConverter(converter) {
              return init(assign({}, this.converter, converter), this.attributes);
            }
          }, {
            attributes: {
              value: Object.freeze(defaultAttributes)
            },
            converter: {
              value: Object.freeze(converter)
            }
          });
        }
        var api = init(defaultConverter, {
          path: '/'
        });
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
          const expirationDate = new Date();
          expirationDate.setDate(expirationDate.getDate() + 90);
          return expirationDate;
        };
        const CookiesService$1 = new CookiesService();
        class TokenService {
          getRefreshToken() {
            var _this$getUser;
            return (_this$getUser = this.getUser()) === null || _this$getUser === void 0 ? void 0 : _this$getUser.refreshToken;
          }
          getAuthToken() {
            var _this$getUser2;
            return (_this$getUser2 = this.getUser()) === null || _this$getUser2 === void 0 ? void 0 : _this$getUser2.accessToken;
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
        instance$1.interceptors.request.use(config => {
          const token = TokenService$1.getAuthToken();
          if (config.url !== REFRESH_URL && token) {
            config.headers["Authorization"] = "Bearer " + token;
          } else {
            delete config.headers["Authorization"];
          }
          config.baseURL = BACKEND_BASE_URL;
          return config;
        }, error => {
          return Promise.reject(error);
        });
        instance$1.interceptors.response.use(res => {
          return res;
        }, /*#__PURE__*/function () {
          var _ref0 = _asyncToGenerator(function* (err) {
            const originalConfig = err.config;
            // Access Token was expired
            if (originalConfig.url !== REFRESH_URL && err.response && err.response.status === 401 && !originalConfig._retry) {
              originalConfig._retry = true;
              try {
                const rs = yield instance$1.post(`/user/refresh_token`, {
                  accessToken: TokenService$1.getAuthToken(),
                  refreshToken: TokenService$1.getRefreshToken()
                });
                TokenService$1.setSession(rs.data);
                return instance$1(originalConfig);
              } catch (_error) {
                TokenService$1.removeSession();
                window.location.href = "/login";
                // return Promise.reject(_error);
              }
            }
            return Promise.reject(err);
          });
          return function (_x9) {
            return _ref0.apply(this, arguments);
          };
        }());
        class DesignService extends BaseService {
          getSurveyDesign() {
            var _this3 = this;
            return _asyncToGenerator(function* () {
              const surveyId = sessionStorage.getItem("surveyId");
              const response = yield _this3.handleRequest(() => instance$1.get(`/survey/${surveyId}/design`));
              return response.data;
            })();
          }
          setSurveyDesign(data, params) {
            return _asyncToGenerator(function* () {
              const surveyId = sessionStorage.getItem("surveyId");
              return instance$1.post(`/survey/${surveyId}/design`, data, {
                params
              }).then(response => {
                return response.data;
              });
            })();
          }
          publish(params, id) {
            var _this4 = this;
            return _asyncToGenerator(function* () {
              const surveyId = id ? id : sessionStorage.getItem("surveyId");
              const response = yield _this4.handleRequest(() => instance$1.post(`/survey/${surveyId}/design/publish`, {}, {
                params
              }));
              return response.data;
            })();
          }
          changeCode(_x0, _x1) {
            var _this5 = this;
            return _asyncToGenerator(function* (from, to, surveyId = null) {
              const id = surveyId || sessionStorage.getItem("surveyId");
              const response = yield _this5.handleRequest(() => instance$1.post(`/survey/${id}/change_code`, null, {
                params: {
                  from,
                  to
                }
              }));
              return response.data;
            }).apply(this, arguments);
          }
          uploadResource(_x10) {
            var _this6 = this;
            return _asyncToGenerator(function* (file, surveyId = null) {
              if (!surveyId) {
                surveyId = sessionStorage.getItem("surveyId");
              }
              const formData = new FormData();
              formData.append("file", file);
              const response = yield _this6.handleRequest(() => instance$1.post(`/survey/${surveyId}/resource`, formData, {
                headers: {
                  Accept: "application/json",
                  "Content-Type": "multipart/form-data"
                }
              }));
              return response.data;
            }).apply(this, arguments);
          }
          uploadAutoCompleteResource(_x11, _x12) {
            return _asyncToGenerator(function* (file, componentId, surveyId = null) {
              if (!surveyId) {
                surveyId = sessionStorage.getItem("surveyId");
              }
              const formData = new FormData();
              formData.append("file", file);
              const response = yield instance$1.post(`/autocomplete/${surveyId}/${componentId}`, formData, {
                headers: {
                  Accept: "application/json",
                  "Content-Type": "multipart/form-data"
                }
              });
              return response.data;
            }).apply(this, arguments);
          }
          getAutoCompleteValues(_x13) {
            return _asyncToGenerator(function* (componentId, surveyId = null) {
              if (!surveyId) {
                surveyId = sessionStorage.getItem("surveyId");
              }
              const response = yield instance$1.get(`/autocomplete/${surveyId}/${componentId}`);
              return response.data;
            }).apply(this, arguments);
          }
        }
        const importedService = new DesignService();
        function SetData(_x14, _x15, _x16, _x17, _x18) {
          return _SetData.apply(this, arguments);
        }
        function _SetData() {
          _SetData = _asyncToGenerator(function* (state, setState, setError, version, subVersion) {
            try {
              const params = new URLSearchParams([["version", version], ["sub_version", subVersion]]);
              const response = yield importedService.setSurveyDesign(state, params);
              setState(response);
            } catch (err) {
              setError(err);
            }
          });
          return _SetData.apply(this, arguments);
        }
        let saveTimer$1;
        let buffer$1 = [];
        let debounceTime = 500;
        let rollbackState = null;
        const saveDebounce$1 = store => {
          if (saveTimer$1) {
            clearTimeout(saveTimer$1);
          }
          saveTimer$1 = setTimeout(() => {
            store.dispatch(setUpdating$1(true));
            const state = store.getState();
            const diff = getDiff(state.designState, state.designState.latest);
            SetData(diff, state => {
              setState$1(store, state);
            }, error => {
              setError$1(store, error);
            }, state.designState.versionDto.version, state.designState.versionDto.subVersion);
          }, debounceTime);
        };
        const dataSaver = store => next => action => {
          if (!action || !action.type) {
            return;
          }
          if (MUTATING.includes(action.type)) {
            if (!store.getState().designState.isUpdating) {
              // Store rollback state before first mutation (for optimistic updates)
              if (!rollbackState) {
                rollbackState = store.getState().designState.latest;
              }
              store.dispatch(setSaving$1(true));
              saveDebounce$1(store);
            } else {
              buffer$1.push(action);
            }
          }
          return next(action);
        };
        const MUTATING = ["designState/onBaseLangChanged", "designState/onAdditionalLangAdded", "designState/onAdditionalLangRemoved", "designState/changeAttribute", "designState/changeTimeFormats", "designState/changeContent", "designState/changeResources", "designState/deleteQuestion", "designState/cloneQuestion", "designState/deleteGroup", "designState/addNewAnswer", "designState/removeAnswer", "designState/changeValidationValue", "designState/updateRandom", "designState/updateRandomByType", "designState/addSkipRule", "designState/updateSkipRule", "designState/removeSkipRule", "designState/addCustomValidationRule", "designState/updateCustomValidationRuleText", "designState/renameCustomValidationRule", "designState/updateCustomValidationRuleError", "designState/removeCustomValidationRule", "designState/updateInstruction", "designState/changeRelevance", "designState/addComponent", "designState/changeCustomCss", "designState/onDrag", "designState/setDefaultValue"];
        const setState$1 = (store, state) => {
          store.dispatch(setUpdating$1(false));
          store.dispatch(designStateReceived(state));
          store.dispatch(setSaving$1(false));

          // Clear rollback state on successful save
          rollbackState = null;
          buffer$1.forEach(action => {
            store.dispatch(action);
          });
          buffer$1 = [];
        };
        const setError$1 = (store, error) => {
          // Rollback optimistic updates on error
          if (rollbackState) {
            store.dispatch(designStateReceived({
              designerInput: {
                componentIndexList: store.getState().designState.componentIndex,
                state: _objectSpread({}, rollbackState)
              },
              versionDto: store.getState().designState.versionDto
            }));
            rollbackState = null;
          }
          onApiError({
            error: error,
            globalErrorHandler: processedError => {
              store.dispatch(onError(processedError));
              store.dispatch(setSaving$1(false));
              store.dispatch(setUpdating$1(false));
            },
            locallErrorHandler: processedError => {
              store.dispatch(onError(processedError));
              store.dispatch(setSaving$1(false));
              store.dispatch(setUpdating$1(false));
            }
          });

          // Clear buffer on error to prevent applying failed changes
          buffer$1 = [];
        };
        const reservedKeys = ["skipScroll", "langInfo", "reorder_refresh_code", "setup", "latest", "lastAddedComponent", "isUpdating", "isSaving", "index", "focus", "state", "designMode", "globalSetup"];
        function getDiff(currentState, latestState) {
          const changes = {};

          // Get all keys from both objects and filter out reserved keys
          const allKeys = new Set([...Object.keys(currentState).filter(key => !reservedKeys.includes(key)), ...Object.keys(latestState).filter(key => !reservedKeys.includes(key))]);
          var _iterator5 = _createForOfIteratorHelper(allKeys),
            _step4;
          try {
            for (_iterator5.s(); !(_step4 = _iterator5.n()).done;) {
              const key = _step4.value;
              if (!isEquivalent(currentState[key], latestState[key])) {
                changes[key] = currentState[key];
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
          return changes;
        }
        const templateState = createSlice({
          name: "templateState",
          initialState: {
            state: {}
          },
          reducers: {
            setDirty: (state, action) => {
              state[action.payload] = true;
            },
            setFetching: (state, action) => {
              state.isLoading = action.payload;
            }
          }
        });
        const _templateState$action = templateState.actions,
          setDirty = _templateState$action.setDirty,
          setFetching = _templateState$action.setFetching;
        exports("s", setDirty);
        const templateState$1 = templateState.reducer;
        class SurveyService extends BaseService {
          getAllSurveys(page, perpage, status, sortBy) {
            var _this7 = this;
            return _asyncToGenerator(function* () {
              const response = yield _this7.handleRequest(() => instance$1.get(`/survey/all?page=${page}&per_page=${perpage}&status=${status}&sort_by=${sortBy}`));
              return response.data;
            })();
          }
          getSurvey() {
            var _this8 = this;
            return _asyncToGenerator(function* () {
              const surveyId = sessionStorage.getItem("surveyId");
              const response = yield _this8.handleRequest(() => instance$1.get(`/survey/${surveyId}`));
              return response.data;
            })();
          }
          createSurvey(data) {
            var _this9 = this;
            return _asyncToGenerator(function* () {
              const response = yield _this9.handleRequest(() => instance$1.post(`/survey/create`, data));
              return response.data;
            })();
          }
          putSurvey(data, surveyId) {
            var _this0 = this;
            return _asyncToGenerator(function* () {
              const response = yield _this0.handleRequest(() => instance$1.put(`/survey/${surveyId}`, data));
              return response.data;
            })();
          }
          closeSurvey(surveyId) {
            var _this1 = this;
            return _asyncToGenerator(function* () {
              const response = yield _this1.handleRequest(() => instance$1.put(`/survey/${surveyId}/close`));
              return response.data;
            })();
          }
          cloneSurvey(surveyId) {
            var _this10 = this;
            return _asyncToGenerator(function* () {
              const response = yield _this10.handleRequest(() => instance$1.post(`/survey/${surveyId}/clone`, {}));
              return response.data;
            })();
          }
          deleteSurvey(surveyId) {
            var _this11 = this;
            return _asyncToGenerator(function* () {
              const response = yield _this11.handleRequest(() => instance$1.delete(`/survey/${surveyId}`));
              return response.data;
            })();
          }
          allResponse(surveyId, page, per_page, complete, surveyor, confirmFilesExport) {
            var _this12 = this;
            return _asyncToGenerator(function* () {
              const url = `/survey/${surveyId}/response/summary` + `?page=${page}&per_page=${per_page}` + `${complete ? `&status=${complete}` : ""}` + `${surveyor ? `&surveyor=${surveyor}` : ""}` + `${confirmFilesExport ? `&confirm_files_export=true` : ""}`;
              const response = yield _this12.handleRequest(() => instance$1.get(url));
              return response.data;
            })();
          }
          getResponseById(responseId) {
            var _this13 = this;
            return _asyncToGenerator(function* () {
              const response = yield _this13.handleRequest(() => instance$1.get(`/response/${responseId}`));
              return response.data;
            })();
          }
          exportResponses(_x19, _x20) {
            var _this14 = this;
            return _asyncToGenerator(function* (surveyId, {
              format = "csv",
              from,
              to,
              dbValues = true,
              complete,
              timezone
            }) {
              const base = `/survey/${surveyId}/response/export/${format}/${from}/${to}`;
              const shouldAddComplete = complete === true || complete === false;
              const tz = encodeURIComponent(timezone);
              const url = `${base}?db_values=${dbValues}&timezone=${tz}` + `${shouldAddComplete ? `&complete=${complete}` : ""}`;
              const response = yield _this14.handleRequest(() => instance$1.get(url, {
                responseType: "blob"
              }));
              return response.data;
            }).apply(this, arguments);
          }
          downloadResponseFiles(surveyId, from, to, complete) {
            var _this15 = this;
            return _asyncToGenerator(function* () {
              const base = `/survey/${surveyId}/response/files/download/${from}/${to}`;
              const query = complete === true ? "?complete=true" : complete === false ? "?complete=false" : "";
              const response = yield _this15.handleRequest(() => instance$1.get(`${base}${query}`, {
                responseType: "blob"
              }));
              return response.data;
            })();
          }
          deleteResponse(surveyId, responseId) {
            var _this16 = this;
            return _asyncToGenerator(function* () {
              const response = yield _this16.handleRequest(() => instance$1.delete(`/survey/${surveyId}/response/${responseId}`));
              return response;
            })();
          }
          importSurvey(file, onProgress) {
            var _this17 = this;
            return _asyncToGenerator(function* () {
              const formData = new FormData();
              formData.append("file", file);
              const response = yield _this17.handleRequest(() => instance$1.post(`/survey/import`, formData, {
                onUploadProgress: progressEvent => {
                  const progress = progressEvent.loaded / progressEvent.total * 100;
                  if (onProgress) {
                    onProgress(Math.round(progress));
                  }
                },
                headers: {
                  Accept: "application/json",
                  "Content-Type": "multipart/form-data"
                }
              }));
              return response.data;
            })();
          }
          exportSurvey(surveyId) {
            var _this18 = this;
            return _asyncToGenerator(function* () {
              var _contentDisposition$m;
              const response = yield _this18.handleRequest(() => instance$1.get(`/survey/${surveyId}/export`, {
                responseType: "blob"
              }));
              const contentDisposition = response.headers.get("Content-Disposition");
              const filename = contentDisposition ? ((_contentDisposition$m = contentDisposition.match(/filename="(.+)"/)) === null || _contentDisposition$m === void 0 ? void 0 : _contentDisposition$m[1]) || `${surveyId}.zip` : `${surveyId}.zip`;

              // Convert the response to a Blob
              const blob = yield response.data;

              // Trigger the file download
              const link = document.createElement("a");
              link.href = URL.createObjectURL(blob);
              link.download = filename;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            })();
          }
          getAnalytics(_x21) {
            var _this19 = this;
            return _asyncToGenerator(function* (surveyId, maxResponses = 5000) {
              const response = yield _this19.handleRequest(() => instance$1.get(`/survey/${surveyId}/response/analytics?max_responses=${maxResponses}`));
              return response.data;
            }).apply(this, arguments);
          }
        }
        let saveTimer;
        let buffer = [];
        let defaultDebounceTime = 3000;
        const surveyService = new SurveyService();
        function setData(_x22, _x23) {
          return _setData.apply(this, arguments);
        }
        function _setData() {
          _setData = _asyncToGenerator(function* (store, state) {
            surveyService.putSurvey(state.editState.survey, state.editState.survey.id).then(state => {
              setState(store, state);
            }).catch(error => {
              surveyService.getSurvey().then(state => {
                setState(store, state);
              });
              setError(store, error);
            });
          });
          return _setData.apply(this, arguments);
        }
        const saveDebounce = (store, debounceTime) => {
          if (saveTimer) {
            clearTimeout(saveTimer);
          }
          saveTimer = setTimeout(() => {
            store.dispatch(setUpdating(true));
            const state = store.getState();
            setData(store, state);
          }, debounceTime);
        };
        const editDataSaver = store => next => action => {
          if (action.type == "editState/surveyAttributeChanged" || action.type == "editState/surveyAttributeChangedImmediate") {
            if (!store.getState().editState.isUpdating) {
              store.dispatch(setSaving(true));
              let debounceTime = defaultDebounceTime;
              if (action.type == "editState/surveyAttributeChangedImmediate") {
                debounceTime = 0;
              }
              saveDebounce(store, debounceTime);
            } else {
              buffer.push(action);
            }
          }
          return next(action);
        };
        const setState = (store, state) => {
          store.dispatch(setUpdating(false));
          store.dispatch(surveyReceived(state));
          store.dispatch(setSaving(false));
          buffer.forEach(action => {
            store.dispatch(action);
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
          reducer: {
            templateState: templateState$1,
            runState: runState$1
          }
        });
        configureStore({
          reducer: {
            templateState: templateState$1,
            designState: designState$1,
            editState: editState$1
          },
          middleware: getDefaultMiddleware => getDefaultMiddleware().concat(dataSaver, editDataSaver)
        });
        const getparam = (params, key) => {
          if (window["Android"]) {
            return window["Android"].getParam(key);
          } else {
            return params[key];
          }
        };
        const startNavigation = (runService, lang, preview, mode, navigationMode) => {
          if (window["Android"]) {
            return new Promise((resolve, reject) => {
              window["Android"].start();
              window["navigateOffline"] = res => {
                resolve(res);
              };
            });
          } else {
            return runService.start(lang, preview, mode, navigationMode);
          }
        };
        const autoCompleteSearch = (runService, uuid, query) => {
          if (window["Android"]) {
            return new Promise((resolve, reject) => {
              window["Android"].searchAutoComplete(uuid, query);
              window["searchAutoComplete"] = res => {
                resolve(res);
              };
            });
          } else {
            return runService.searchAutoComplete(uuid, query);
          }
        };
        const continueNavigation = (runService, payload, responseId, preview, mode, navigationMode) => {
          const finalObj = _objectSpread(_objectSpread({}, payload), {}, {
            responseId: responseId
          });
          if (navigationMode) {
            finalObj.navigationMode = navigationMode;
          }
          if (window["Android"]) {
            return new Promise((resolve, reject) => {
              window["Android"].navigate(JSON.stringify(finalObj));
              window["navigateOffline"] = res => {
                resolve(res);
              };
            });
          } else {
            return runService.navigate(finalObj, preview, mode);
          }
        };
        const uploadFile = exports("c", (runService, key, preview, selectedFile) => {
          if (window["Android"]) {
            return new Promise((resolve, reject) => {
              window["Android"].uploadFile(key, selectedFile.name);
              window["onFileUploaded"] = res => {
                resolve(res);
              };
            });
          }
          return runService.uploadResponseFile(key, preview, selectedFile);
        });
        const uploadDataUrl = exports("b", (runService, key, preview, dataurl, fileName) => {
          if (window["Android"]) {
            return new Promise((resolve, reject) => {
              window["Android"].uploadDataUrl(key, dataurl, fileName);
              window["onDataUrlUploaded"] = res => {
                resolve(res);
              };
            });
          }
          const blob = dataURLtoBlob(dataurl);
          return runService.uploadResponseBlob(key, preview, blob, fileName);
        });
        const dataURLtoBlob = dataurl => {
          var arr = dataurl.split(","),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
          while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
          }
          return new Blob([u8arr], {
            type: mime
          });
        };
        const downloadFileAsBase64 = exports("d", url => {
          return fetch(url).then(response => response.blob()).then(blob => new Promise(callback => {
            let reader = new FileReader();
            reader.onload = function () {
              callback(this.result);
            };
            reader.readAsDataURL(blob);
          }));
        });
        const loadScript = (runService, preview) => new Promise((resolve, reject) => {
          runService.runtimeJs(preview).then(data => {
            const script = document.createElement("script");
            script.innerHTML = data;
            document.body.appendChild(script);
            resolve();
          }).catch(err => {
            reject(err);
          });
        });
        const previewUrlByFilename = exports("p", fileName => {
          const surveyId = sessionStorage.getItem("surveyId");
          const responseId = sessionStorage.getItem("responseId");
          return BACKEND_BASE_URL + `survey/${surveyId}/response/${responseId}/attach/${fileName}`;
        });
        const mainContainer = "_mainContainer_1wt2w_1";
        const goBack = "_goBack_1wt2w_21";
        const fixedBg = "_fixedBg_1wt2w_61";
        const styles$a = {
          mainContainer: mainContainer,
          goBack: goBack,
          fixedBg: fixedBg
        };
        const FORM_ID = "qlarr-form";
        const content = "_content_dofy3_1";
        const question = "_question_dofy3_7";
        const textDescription$1 = "_textDescription_dofy3_19";
        const groupQuestion = "_groupQuestion_dofy3_24";
        const styles$9 = {
          content: content,
          question: question,
          textDescription: textDescription$1,
          groupQuestion: groupQuestion
        };
        const wrapper = "_wrapper_1hpga_1";
        const styles$8 = {
          wrapper: wrapper
        };
        function useCollapsibleHandler(contentRef, content) {
          reactExports.useEffect(() => {
            if (!contentRef.current) {
              return;
            }
            const handleCollapsibleClick = e => {
              const button = e.target.closest(".collapsible-button");
              if (!button) {
                return;
              }
              e.preventDefault();
              e.stopPropagation();
              const collapsible = button.closest(".tiptap-collapsible");
              if (!collapsible) {
                return;
              }
              const contentElement = collapsible.querySelector(".collapsible-content");
              if (!contentElement) {
                return;
              }
              const isOpen = collapsible.getAttribute("data-open") === "true";
              const newState = !isOpen;
              collapsible.setAttribute("data-open", newState ? "true" : "false");
              if (newState) {
                contentElement.style.display = "";
                contentElement.classList.add("open");
              } else {
                contentElement.style.display = "none";
                contentElement.classList.remove("open");
              }
            };
            const element = contentRef.current;
            element.addEventListener("click", handleCollapsibleClick);
            return () => {
              element.removeEventListener("click", handleCollapsibleClick);
            };
          }, [contentRef, content]);
        }
        function ensureCollapsiblesClosed(html) {
          if (!html || typeof html !== "string") {
            return html;
          }
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");
          const collapsibles = doc.querySelectorAll(".tiptap-collapsible");
          collapsibles.forEach(collapsible => {
            collapsible.setAttribute("data-open", "false");
            const contentElement = collapsible.querySelector(".collapsible-content");
            if (contentElement) {
              contentElement.classList.remove("open");
              contentElement.style.display = "none";
            }
          });
          return doc.body.innerHTML;
        }
        function Content$1(props) {
          const contentRef = reactExports.useRef(null);
          const isComplex = props.content && props.content.includes("{{");
          const content = props.content;
          const name = props.name;
          const elementCode = props.elementCode;
          const customStyle = props.customStyle;
          const state = useSelector(state2 => {
            if (!content || !isComplex || !state2.runState.values[elementCode] || !name) {
              return void 0;
            } else {
              return state2.runState.values[elementCode];
            }
          });
          const surveyLang = useSelector(state2 => {
            return state2.runState.values["Survey"].lang;
          });
          const isRtl = rtlLanguage.includes(surveyLang);
          useCollapsibleHandler(contentRef, props.content);
          if (!props.content) {
            return /* @__PURE__ */jsx("span", {
              style: {
                flex: 1
              }
            });
          } else if (!isComplex) {
            return /* @__PURE__ */jsx("div", {
              ref: contentRef,
              css: /* @__PURE__ */css(customStyle, ";" + "", ""),
              className: `${isRtl ? "rtl" : "ltr"} content-editor no-padding`,
              dangerouslySetInnerHTML: {
                __html: ensureCollapsiblesClosed(props.content)
              }
            });
          } else {
            return /* @__PURE__ */jsx("div", {
              ref: contentRef,
              css: /* @__PURE__ */css(customStyle, ";" + "", ""),
              className: `${isRtl ? "rtl" : "ltr"} ql-editor no-padding`,
              dangerouslySetInnerHTML: {
                __html: ensureCollapsiblesClosed(replaceFormatInstructions(content, state, name + "_" + surveyLang))
              }
            });
          }
        }
        const Content$2 = exports("C", React.memo(Content$1));
        function replaceFormatInstructions(html, state, postFix) {
          if (!html) {
            return html;
          }
          const allMatches = getAllFormatInstructions(html);
          console.log(allMatches);
          allMatches.forEach((match, index) => {
            html = html.replace(match, state[`format_${postFix}_${index + 1}`]);
          });
          return html;
        }
        const getAllFormatInstructions = inputString => {
          const regex = /\{\{(.*?)\}\}/g;
          return Array.from(inputString.matchAll(regex), m => m[0]);
        };
        const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
          __proto__: null,
          default: Content$2,
          replaceFormatInstructions
        }, Symbol.toStringTag, {
          value: 'Module'
        }));
        function ValidationItem({
          name,
          validation,
          componentCode,
          content
        }) {
          if (content && (validation === null || validation === void 0 ? void 0 : validation.isCustomErrorActive) !== false) {
            return /* @__PURE__ */jsxs(Box, {
              sx: {
                color: "error.main"
              },
              className: styles$8.wrapper,
              children: [/* @__PURE__ */jsx(ErrorOutlineOutlined, {}), /* @__PURE__ */jsx(Content$2, {
                name,
                elementCode: componentCode,
                content
              })]
            });
          } else {
            const _useTranslation2 = useTranslation(NAMESPACES.RUN),
              t = _useTranslation2.t;
            var translationKey = name.replace(/[0-9]/g, "");
            const validationMessage = t(translationKey, _objectSpread({}, validation));
            if (validationMessage) {
              return /* @__PURE__ */jsxs(Box, {
                sx: {
                  color: "error.main"
                },
                className: styles$8.wrapper,
                children: [/* @__PURE__ */jsx(ErrorOutlineOutlined, {}), validationMessage]
              });
            } else {
              return /* @__PURE__ */jsx(Fragment, {});
            }
          }
        }
        function Validation(props) {
          const selectValidation = state => (props.component.validation ? state.runState.values[props.component.qualifiedCode] : {}) || {};
          const captureValidation = createSelector([selectValidation], selectedState => {
            var obj = {};
            Object.keys(selectedState).filter(e => e.startsWith("validation_")).forEach(key => {
              var value = selectedState[key];
              if (value) {
                obj[key] = value;
              }
            });
            return obj;
          });
          const validation = useSelector(captureValidation);
          const messages = () => {
            let array = Object.keys(validation);
            let limit = props.limit ? props.limit : array.length;
            return array.slice(0, limit).map((key, index) => {
              var _props$component$cont;
              return /* @__PURE__ */jsx(ValidationItem, {
                name: key,
                componentCode: props.component.qualifiedCode,
                content: (_props$component$cont = props.component.content) === null || _props$component$cont === void 0 ? void 0 : _props$component$cont[key],
                validation: props.component.validation[key]
              }, index);
            });
          };
          return messages();
        }
        function MultipleText(props) {
          return /* @__PURE__ */jsx(Box, {
            style: {
              gap: "10px",
              display: "flex",
              flexDirection: "column"
            },
            children: props.component.answers.map(option => {
              return /* @__PURE__ */jsx(MultipleTextItem, {
                item: option
              }, option.qualifiedCode);
            })
          });
        }
        function MultipleTextItem({
          item
        }) {
          var _item$content, _item$validation;
          const key = item.qualifiedCode;
          const theme = useTheme();
          const state = useSelector(state2 => {
            let answerState = state2.runState.values[key];
            let show_errors = state2.runState.values.Survey.show_errors;
            let isDirty = state2.templateState[key];
            let validity = answerState === null || answerState === void 0 ? void 0 : answerState.validity;
            let invalid = (show_errors || isDirty) && validity === false;
            return {
              value: (answerState === null || answerState === void 0 ? void 0 : answerState.value) || "",
              invalid
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const handleChange = event => {
            dispatch(valueChange({
              componentCode: event.target.name,
              value: event.target.value
            }));
          };
          const lostFocus = event => {
            const trimmed = event.target.value.trim();
            if (event.target.value !== trimmed) {
              dispatch(valueChange({
                componentCode: event.target.name,
                value: trimmed
              }));
            }
            dispatch(setDirty(event.target.name));
          };
          return /* @__PURE__ */jsxs(Box, {
            "data-code": item.code,
            sx: {
              gap: "10px",
              display: "flex"
            },
            children: [/* @__PURE__ */jsx(Content$2, {
              customStyle: `
        flex: 1 !important;
        font-size: ${theme.textStyles.text.size}px;
        `,
              elementCode: item.code,
              name: "label",
              content: (_item$content = item.content) === null || _item$content === void 0 ? void 0 : _item$content.label
            }), /* @__PURE__ */jsx(TextField, {
              variant: "outlined",
              size: "small",
              name: key,
              value: state.value,
              error: state.invalid,
              onBlur: lostFocus,
              fullWidth: true,
              onChange: handleChange,
              required: (_item$validation = item.validation) === null || _item$validation === void 0 ? void 0 : _item$validation.required,
              sx: {
                flex: 2
              }
            })]
          });
        }
        const styles$7 = {};
        const instance = axios.create({
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        });
        instance.interceptors.request.use(config => {
          config.baseURL = BACKEND_BASE_URL;
          return config;
        }, error => {
          return Promise.reject(error);
        });
        class AuthService extends BaseService {
          login(email, password) {
            var _this20 = this;
            return _asyncToGenerator(function* () {
              const response = yield _this20.handleRequest(() => instance.post("/user/login", {
                email,
                password
              }));
              if (response.data) {
                TokenService$1.setSession(response.data);
              }
              return response;
            })();
          }
          forgotPassword(email) {
            var _this21 = this;
            return _asyncToGenerator(function* () {
              return _this21.handleRequest(() => instance.post("/user/forgot_password", {
                email
              }));
            })();
          }
          resetPassword(confirmNewUser, refreshToken, newPassword) {
            var _this22 = this;
            return _asyncToGenerator(function* () {
              const response = yield _this22.handleRequest(() => instance.post(confirmNewUser ? "/user/confirm_new_user" : "/user/reset_password", confirmNewUser ? {
                token: refreshToken,
                newPassword
              } : {
                refreshToken,
                newPassword
              }));
              if (response.data) {
                TokenService$1.setSession(response.data);
              }
              return response.data;
            })();
          }
          logout() {
            var _this23 = this;
            return _asyncToGenerator(function* () {
              try {
                const response = yield _this23.handleRequest(() => instance$1.post("/logout"));
                if (response.status === 200) {
                  TokenService$1.removeSession();
                }
                return response.status === 200;
              } catch (error) {
                TokenService$1.removeSession();
                throw error;
              }
            })();
          }
        }
        class RunService extends BaseService {
          start(_x24) {
            var _this24 = this;
            return _asyncToGenerator(function* (lang, preview = false, mode = "online", navigationMode) {
              const surveyId = sessionStorage.getItem("surveyId");
              if (preview) {
                const response = yield _this24.handleRequest(() => instance$1.post(`/survey/${surveyId}/preview/start?mode=${mode}`, {
                  lang,
                  navigationMode
                }));
                return response.data;
              } else {
                const response = yield _this24.handleRequest(() => instance.post(`/survey/${surveyId}/run/start`, {
                  lang,
                  navigationMode
                }));
                return response.data;
              }
            }).apply(this, arguments);
          }
          navigate(_x25) {
            return _asyncToGenerator(function* (payload, preview = false, mode = "online") {
              console.log(payload);
              const surveyId = sessionStorage.getItem("surveyId");
              if (preview) {
                const response = yield instance$1.post(`/survey/${surveyId}/preview/navigate?mode=${mode}`, payload);
                return response.data;
              } else {
                const response_1 = yield instance.post(`/survey/${surveyId}/run/navigate`, payload);
                return response_1.data;
              }
            }).apply(this, arguments);
          }
          runtimeJs(preview) {
            var _this25 = this;
            return _asyncToGenerator(function* () {
              const surveyId = sessionStorage.getItem("surveyId");
              if (preview) {
                const response = yield _this25.handleRequest(() => instance$1.get(`/survey/${surveyId}/preview/runtime.js`));
                return response.data;
              } else {
                const response = yield _this25.handleRequest(() => instance.get(`/survey/${surveyId}/run/runtime.js`));
                return response.data;
              }
            })();
          }
          uploadResponseFile(key, preview, file) {
            return _asyncToGenerator(function* () {
              const surveyId = sessionStorage.getItem("surveyId");
              const responseId = sessionStorage.getItem("responseId");
              const formData = new FormData();
              formData.append("file", file);
              const api = preview ? instance$1 : instance;
              const url = preview ? `/survey/${surveyId}/response/preview/attach/${responseId}/${key}` : `/survey/${surveyId}/response/attach/${responseId}/${key}`;
              const response = yield api.post(url, formData, {
                headers: {
                  Accept: "application/json",
                  "Content-Type": "multipart/form-data"
                }
              });
              return response.data;
            })();
          }
          searchAutoComplete(uuid, query) {
            var _this26 = this;
            return _asyncToGenerator(function* () {
              const surveyId = sessionStorage.getItem("surveyId");
              const response = yield _this26.handleRequest(() => instance.get(`/survey/${surveyId}/autocomplete/${uuid}?q=${query}`));
              return response.data;
            })();
          }
          uploadResponseBlob(key, preview, blob, fileName) {
            return _asyncToGenerator(function* () {
              const surveyId = sessionStorage.getItem("surveyId");
              const responseId = sessionStorage.getItem("responseId");
              const formData = new FormData();
              formData.append("file", blob, fileName);
              const api = preview ? instance$1 : instance;
              const url = preview ? `/survey/${surveyId}/response/preview/attach/${responseId}/${key}` : `/survey/${surveyId}/response/attach/${responseId}/${key}`;
              const response = yield api.post(url, formData, {
                headers: {
                  Accept: "application/json",
                  "Content-Type": "multipart/form-data"
                }
              });
              return response.data;
            })();
          }
        }
        class UserService extends BaseService {
          getCountByRole() {
            var _this27 = this;
            return _asyncToGenerator(function* () {
              const response = yield _this27.handleRequest(() => instance$1.get(`/user/count_by_role`));
              return response.data;
            })();
          }
          getAllUsers() {
            var _this28 = this;
            return _asyncToGenerator(function* () {
              const response = yield _this28.handleRequest(() => instance$1.get(`/user/all`));
              return response.data;
            })();
          }
          getUser(_x26) {
            var _this29 = this;
            return _asyncToGenerator(function* ({
              userId
            }) {
              const response = yield _this29.handleRequest(() => instance$1.get(`/user/${userId}`));
              return response.data;
            }).apply(this, arguments);
          }
          deleteUser(_x27) {
            var _this30 = this;
            return _asyncToGenerator(function* ({
              userId
            }) {
              const response = yield _this30.handleRequest(() => instance$1.delete(`/user/${userId}`));
              return response.data;
            }).apply(this, arguments);
          }
          createUser(data) {
            var _this31 = this;
            return _asyncToGenerator(function* () {
              const response = yield _this31.handleRequest(() => instance$1.post(`/user/create`, data));
              return response.data;
            })();
          }
          updateUser(_x28) {
            var _this32 = this;
            return _asyncToGenerator(function* ({
              userId,
              data
            }) {
              const response = yield _this32.handleRequest(() => instance$1.put(`/user/${userId}`, data));
              return response.data;
            }).apply(this, arguments);
          }
          updateUserProfile(data) {
            var _this33 = this;
            return _asyncToGenerator(function* () {
              const response = yield _this33.handleRequest(() => instance$1.put(`/user/profile`, data));
              return response.data;
            })();
          }
          confirmEmail(data) {
            var _this34 = this;
            return _asyncToGenerator(function* () {
              const response = yield _this34.handleRequest(() => instance$1.post(`/user/confirm_new_email`, data));
              return response.data;
            })();
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
        function AutoCompleteQuestion(props) {
          const _useTranslation3 = useTranslation("run"),
            t = _useTranslation3.t;
          const runService = useService("run");
          const state = useSelector(state2 => {
            let questionState = state2.runState.values[props.component.qualifiedCode];
            let show_errors = state2.runState.values.Survey.show_errors;
            let isDirty = state2.templateState[props.component.qualifiedCode];
            let validity = questionState === null || questionState === void 0 ? void 0 : questionState.validity;
            let invalid = (show_errors || isDirty) && validity === false;
            let value = (questionState === null || questionState === void 0 ? void 0 : questionState.value) || "";
            return {
              value,
              invalid
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const _reactExports$useStat3 = reactExports.useState(false),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            open = _reactExports$useStat4[0],
            setOpen = _reactExports$useStat4[1];
          const _reactExports$useStat5 = reactExports.useState([]),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            options = _reactExports$useStat6[0],
            setOptions = _reactExports$useStat6[1];
          const _reactExports$useStat7 = reactExports.useState(false),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            loading = _reactExports$useStat8[0],
            setLoading = _reactExports$useStat8[1];
          const _reactExports$useStat9 = reactExports.useState(state.value),
            _reactExports$useStat0 = _slicedToArray(_reactExports$useStat9, 2),
            inputValue = _reactExports$useStat0[0],
            setInputValue = _reactExports$useStat0[1];
          reactExports.useEffect(() => {
            setInputValue(state.value);
          }, [state.value]);
          const fetchOptions = reactExports.useCallback(debounce(/*#__PURE__*/function () {
            var _ref1 = _asyncToGenerator(function* (query) {
              const uuid = props.component.resources.autoComplete;
              if (!query || !uuid) {
                setOptions([]);
                return;
              }
              setLoading(true);
              try {
                const response = autoCompleteSearch(runService, uuid, query);
                const data = yield response;
                console.log("data", data);
                setOptions(data);
              } catch (error) {
                console.error("Failed to fetch options:", error);
                setOptions([]);
              } finally {
                setLoading(false);
              }
            });
            return function (_x29) {
              return _ref1.apply(this, arguments);
            };
          }(), 300), []);
          const handleChange = (event, value) => {
            dispatch(valueChange({
              componentCode: props.component.qualifiedCode,
              value
            }));
          };
          const lostFocus = event => {
            dispatch(setDirty(event.target.name));
          };
          const handleInputChange = (event, newInputValue) => {
            setInputValue(newInputValue);
            if (!newInputValue) {
              setOptions([]);
            }
            if (!options.includes(newInputValue)) {
              dispatch(valueChange({
                componentCode: props.component.qualifiedCode,
                value: ""
              }));
            }
            if (newInputValue) {
              fetchOptions(newInputValue);
            }
          };
          return /* @__PURE__ */jsx("div", {
            className: styles$7.questionItem,
            children: /* @__PURE__ */jsx(Autocomplete, {
              id: "search-autocomplete",
              sx: {
                width: {
                  xs: "100%",
                  sm: "50%"
                },
                marginTop: "8px"
              },
              noOptionsText: t("no_options"),
              open,
              value: state.value,
              onOpen: () => setOpen(true),
              onClose: () => setOpen(false),
              options,
              onBlur: lostFocus,
              onChange: handleChange,
              loading,
              inputValue,
              onInputChange: handleInputChange,
              getOptionLabel: option => option || "",
              isOptionEqualToValue: (option, value) => option === value,
              renderInput: params => {
                var _state$content;
                return /* @__PURE__ */jsx(TextField, _objectSpread(_objectSpread({}, params), {}, {
                  label: state.showHint ? ((_state$content = state.content) === null || _state$content === void 0 ? void 0 : _state$content.hint) || "" : "",
                  variant: "outlined",
                  InputProps: _objectSpread(_objectSpread({}, params.InputProps), {}, {
                    endAdornment: /* @__PURE__ */jsxs(Fragment, {
                      children: [loading && /* @__PURE__ */jsx(CircularProgress, {
                        color: "inherit",
                        size: 20
                      }), params.InputProps.endAdornment]
                    })
                  })
                }));
              }
            })
          });
        }
        const DateTimeQuestion = React.lazy(() => __vitePreload(() => module.import('./DateTimeQuestion-legacy-BKf1z-8A.js'), false ? __VITE_PRELOAD__ : void 0));
        const SCQ = React.lazy(() => __vitePreload(() => module.import('./Scq-legacy-DSDGEr4H.js'), false ? __VITE_PRELOAD__ : void 0));
        const Array$1 = React.lazy(() => __vitePreload(() => module.import('./Array-legacy-BeRXchy0.js'), false ? __VITE_PRELOAD__ : void 0));
        const Signature = React.lazy(() => __vitePreload(() => module.import('./Signature-legacy-Dgzm3NKI.js'), false ? __VITE_PRELOAD__ : void 0));
        const PhotoCapture = React.lazy(() => __vitePreload(() => module.import('./PhotoCapture-legacy-DebVRmBf.js'), false ? __VITE_PRELOAD__ : void 0));
        const VideoCapture = React.lazy(() => __vitePreload(() => module.import('./VideoCapture-legacy-CS4KzzdJ.js'), false ? __VITE_PRELOAD__ : void 0));
        const MCQ = React.lazy(() => __vitePreload(() => module.import('./Mcq-legacy-BB8fEc1P.js'), false ? __VITE_PRELOAD__ : void 0));
        const NumberQuestion = React.lazy(() => __vitePreload(() => module.import('./NumberQuestion-legacy-D5IRzDiF.js'), false ? __VITE_PRELOAD__ : void 0));
        const TextQuestion = React.lazy(() => __vitePreload(() => module.import('./TextQuestion-legacy-BaznoyU8.js'), false ? __VITE_PRELOAD__ : void 0));
        const VideoDisplay = React.lazy(() => __vitePreload(() => module.import('./VideoDisplay-legacy-DNeqylou.js'), false ? __VITE_PRELOAD__ : void 0));
        const ImageDisplay = React.lazy(() => __vitePreload(() => module.import('./ImageDisplay-legacy-FPKG9VmS.js'), false ? __VITE_PRELOAD__ : void 0));
        const ImageRanking = React.lazy(() => __vitePreload(() => module.import('./ImageRanking-legacy-CuxydVCY.js'), false ? __VITE_PRELOAD__ : void 0));
        const ParagraphQuestion = React.lazy(() => __vitePreload(() => module.import('./ParagraphQuestion-legacy-BGAgQVUH.js'), false ? __VITE_PRELOAD__ : void 0));
        const Barcode = React.lazy(() => __vitePreload(() => module.import('./Barcode-legacy-WG5cDd2d.js'), false ? __VITE_PRELOAD__ : void 0));
        const EmailQuestion = React.lazy(() => __vitePreload(() => module.import('./EmailQuestion-legacy-fD6psYCX.js'), false ? __VITE_PRELOAD__ : void 0));
        const ImageScq = React.lazy(() => __vitePreload(() => module.import('./ImageScq-legacy-CWP6Ubl3.js'), false ? __VITE_PRELOAD__ : void 0));
        const ImageMcq = React.lazy(() => __vitePreload(() => module.import('./ImageMcq-legacy-DQaujnzM.js'), false ? __VITE_PRELOAD__ : void 0));
        const Ranking = React.lazy(() => __vitePreload(() => module.import('./Ranking-legacy-Mk955Klv.js'), false ? __VITE_PRELOAD__ : void 0));
        const NPS = React.lazy(() => __vitePreload(() => module.import('./NPS-legacy-C9NrTmX7.js'), false ? __VITE_PRELOAD__ : void 0));
        const Content = React.lazy(() => __vitePreload(() => Promise.resolve().then(() => index), false ? __VITE_PRELOAD__ : void 0));
        const FileUpload = React.lazy(() => __vitePreload(() => module.import('./FileUpload-legacy-DpIK-Veo.js'), false ? __VITE_PRELOAD__ : void 0));
        const IconScq = React.lazy(() => __vitePreload(() => module.import('./IconScq-legacy-BT_KE15t.js'), false ? __VITE_PRELOAD__ : void 0));
        const IconMcq = React.lazy(() => __vitePreload(() => module.import('./IconMcq-legacy-Dsodl2iJ.js'), false ? __VITE_PRELOAD__ : void 0));
        const SCQIconArray = React.lazy(() => __vitePreload(() => module.import('./SCQIconArray-legacy-CCv7Dg0g.js'), false ? __VITE_PRELOAD__ : void 0));
        const Question = reactExports.forwardRef((props, ref) => {
          var _props$component$cont2, _props$component$cont3, _props$component$cont4, _props$component$cont5;
          console.debug("rendering: " + props.component.code);
          const relevance = useSelector(state => {
            let questionState = state.runState.values[props.component.qualifiedCode];
            return typeof (questionState === null || questionState === void 0 ? void 0 : questionState.relevance) === "undefined" || (questionState === null || questionState === void 0 ? void 0 : questionState.relevance);
          });
          const theme = useTheme();
          const showDescription = props.component.showDescription && ((_props$component$cont2 = props.component.content) === null || _props$component$cont2 === void 0 ? void 0 : _props$component$cont2.description) && stripTags(props.component.content.description).length > 0;
          const showTitle = ((_props$component$cont3 = props.component.content) === null || _props$component$cont3 === void 0 ? void 0 : _props$component$cont3.label) && stripTags((_props$component$cont4 = props.component.content) === null || _props$component$cont4 === void 0 ? void 0 : _props$component$cont4.label).length > 0;
          const showHeader = showTitle || showDescription;
          const showQuestion = () => {
            switch (props.component.type) {
              case "date_time":
                return /* @__PURE__ */jsx(DateTimeQuestion, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "date":
                return /* @__PURE__ */jsx(DateTimeQuestion, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "time":
                return /* @__PURE__ */jsx(DateTimeQuestion, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "scq":
                return /* @__PURE__ */jsx(SCQ, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "multiple_text":
                return /* @__PURE__ */jsx(MultipleText, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "mcq_array":
              case "scq_array":
                return /* @__PURE__ */jsx(Array$1, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "scq_icon_array":
                return /* @__PURE__ */jsx(SCQIconArray, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "file_upload":
                return /* @__PURE__ */jsx(FileUpload, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "signature":
                return /* @__PURE__ */jsx(Signature, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "photo_capture":
                return /* @__PURE__ */jsx(PhotoCapture, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "video_capture":
                return /* @__PURE__ */jsx(VideoCapture, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "mcq":
                return /* @__PURE__ */jsx(MCQ, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "number":
                return /* @__PURE__ */jsx(NumberQuestion, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "text":
                return /* @__PURE__ */jsx(TextQuestion, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "video_display":
                return /* @__PURE__ */jsx(VideoDisplay, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "image_display":
                return /* @__PURE__ */jsx(ImageDisplay, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "image_ranking":
                return /* @__PURE__ */jsx(ImageRanking, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "autocomplete":
                return /* @__PURE__ */jsx(AutoCompleteQuestion, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "paragraph":
                return /* @__PURE__ */jsx(ParagraphQuestion, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "barcode":
                return /* @__PURE__ */jsx(Barcode, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "email":
                return /* @__PURE__ */jsx(EmailQuestion, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "image_scq":
                return /* @__PURE__ */jsx(ImageScq, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "icon_scq":
                return /* @__PURE__ */jsx(IconScq, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "icon_mcq":
                return /* @__PURE__ */jsx(IconMcq, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "image_mcq":
                return /* @__PURE__ */jsx(ImageMcq, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "ranking":
                return /* @__PURE__ */jsx(Ranking, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "nps":
                return /* @__PURE__ */jsx(NPS, {
                  component: props.component
                }, props.component.qualifiedCode);
              default:
                return "";
            }
          };
          return relevance ? /* @__PURE__ */jsxs(QuestionWrapper, {
            customCss: props.component.customCss,
            qualifiedCode: props.component.qualifiedCode,
            ref,
            children: [showHeader && /* @__PURE__ */jsxs(Fragment, {
              children: [showTitle && /* @__PURE__ */jsx(Content, {
                className: `${styles$9.content} ${styles$9.question}`,
                name: "label",
                customStyle: `
        font-size: ${theme.textStyles.question.size}px;
        `,
                elementCode: props.component.qualifiedCode,
                content: (_props$component$cont5 = props.component.content) === null || _props$component$cont5 === void 0 ? void 0 : _props$component$cont5.label
              }), showDescription && /* @__PURE__ */jsx(Box, {
                className: styles$9.textDescription,
                children: /* @__PURE__ */jsx(Content, {
                  elementCode: props.component.code,
                  name: "description",
                  customStyle: `
        font-size: ${theme.textStyles.text.size}px;
        `,
                  content: props.component.content.description
                })
              })]
            }), /* @__PURE__ */jsx(reactExports.Suspense, {
              fallback: /* @__PURE__ */jsx(LoadingDots, {}),
              children: showQuestion()
            }), /* @__PURE__ */jsx(reactExports.Suspense, {
              fallback: /* @__PURE__ */jsx(LoadingDots, {}),
              children: /* @__PURE__ */jsx(QuestionValidation, {
                component: props.component
              })
            })]
          }) : "";
        });
        const Question$1 = React.memo(Question);
        const QuestionValidation = React.memo(({
          component
        }) => {
          const showValidation = useSelector(state => {
            let questionState = state.runState.values[component.qualifiedCode];
            let show_errors = state.runState.values.Survey.show_errors;
            let isDirty = state.templateState[component.qualifiedCode];
            let validity = questionState === null || questionState === void 0 ? void 0 : questionState.validity;
            return (show_errors || isDirty) && validity === false;
          });
          return !showValidation ? /* @__PURE__ */jsx(Fragment, {}) : /* @__PURE__ */jsx(Validation, {
            component
          });
        });
        const QuestionWrapper = React.memo(props => {
          const invalid = useSelector(state => {
            let questionState = state.runState.values[props.qualifiedCode];
            let show_errors = state.runState.values.Survey.show_errors;
            let isDirty = state.templateState[props.qualifiedCode];
            let validity = questionState === null || questionState === void 0 ? void 0 : questionState.validity;
            return (show_errors || isDirty) && validity === false;
          });
          const formatState = useSelector(state => {
            return state.runState.values[props.qualifiedCode];
          });
          return /* @__PURE__ */jsx(Box, {
            "data-code": props.code,
            css: css`
        ${replaceFormatInstructions(props.customCss, formatState, "custom_css")}
      `,
            sx: {
              borderColor: invalid ? "error.main" : "grey.500"
            },
            className: `${styles$9.groupQuestion} ${invalid ? "invalidQuestion" : ""}`,
            children: props.children
          });
        });
        const textDescription = "_textDescription_1lm8x_1";
        const groupHeader = "_groupHeader_1lm8x_16";
        const topLevel = "_topLevel_1lm8x_20";
        const styles$6 = {
          textDescription: textDescription,
          groupHeader: groupHeader,
          topLevel: topLevel
        };
        function Group(props) {
          const theme = useTheme();
          const state = useSelector(state2 => {
            let groupState = state2.runState.values[props.group.code];
            return {
              showGroup: typeof (groupState === null || groupState === void 0 ? void 0 : groupState.relevance) === "undefined" || groupState.relevance
            };
          }, shallowEqual);
          const visibleQuestionCodes = useSelector(state2 => {
            var _props$group$question, _props$group;
            return ((_props$group$question = (_props$group = props.group) === null || _props$group === void 0 ? void 0 : _props$group.questions) !== null && _props$group$question !== void 0 ? _props$group$question : []).filter(quest => {
              if (!quest.inCurrentNavigation) return false;
              const q = state2.runState.values[quest.qualifiedCode];
              return typeof (q === null || q === void 0 ? void 0 : q.relevance) === "undefined" || !!(q !== null && q !== void 0 && q.relevance);
            }).map(q => q.qualifiedCode);
          }, shallowEqual);
          const showGroup = () => {
            var _props$group$content, _props$group$content2, _props$group$content3;
            return /* @__PURE__ */jsx(Fragment, {
              children: /* @__PURE__ */jsxs(Box, {
                "data-code": props.group.code,
                className: styles$6.topLevel,
                sx: {
                  borderRadius: "12px",
                  boxShadow: "0 4px 20px rgba(22, 32, 91, 0.08)",
                  backgroundColor: theme.palette.background.paper
                },
                children: [/* @__PURE__ */jsxs("div", {
                  className: styles$6.groupHeader,
                  children: [/* @__PURE__ */jsx(Content$2, {
                    elementCode: props.group.code,
                    name: "label",
                    customStyle: `
        font-size: ${theme.textStyles.group.size}px;
        `,
                    content: (_props$group$content = props.group.content) === null || _props$group$content === void 0 ? void 0 : _props$group$content.label
                  }), props.group.showDescription && ((_props$group$content2 = props.group.content) === null || _props$group$content2 === void 0 ? void 0 : _props$group$content2.description) && /* @__PURE__ */jsx(Box, {
                    className: styles$6.textDescription,
                    children: /* @__PURE__ */jsx(Content$2, {
                      elementCode: props.group.code,
                      name: "description",
                      customStyle: `
        font-size: ${theme.textStyles.text.size}px;
        `,
                      content: (_props$group$content3 = props.group.content) === null || _props$group$content3 === void 0 ? void 0 : _props$group$content3.description
                    })
                  })]
                }), props.group && props.group.questions ? (() => {
                  const visibleQuestions = props.group.questions.filter(quest => quest.inCurrentNavigation);
                  return visibleQuestions.map((quest, idx) => /* @__PURE__ */jsxs(React.Fragment, {
                    children: [/* @__PURE__ */jsx(Question$1, {
                      component: quest
                    }), visibleQuestionCodes.indexOf(quest.code) >= 0 && /* @__PURE__ */jsx(Divider, {
                      sx: {
                        mt: "12px",
                        mb: "12px"
                      }
                    })]
                  }, quest.code));
                })() : ""]
              })
            });
          };
          return state.showGroup && (props.group ? showGroup() : "");
        }
        const Group$1 = React.memo(Group);
        const buttonContainer = "_buttonContainer_zlh5z_1";
        const styles$5 = {
          buttonContainer: buttonContainer
        };
        function Navigation(props) {
          var _props$navigationInde;
          const state = useSelector(state2 => {
            return {
              has_previous: state2.runState.values.Survey.has_previous && state2.runState.data.navigationData.allowPrevious,
              has_next: state2.runState.values.Survey.has_next,
              can_save: state2.runState.data.survey.allowIncomplete,
              has_errors: state2.runState.values.Survey.show_errors
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const _useTranslation4 = useTranslation(NAMESPACES.RUN),
            t = _useTranslation4.t,
            i18n = _useTranslation4.i18n;
          const isRtl = rtlLanguage.includes(i18n.language);
          const previous = () => {
            dispatch(navigatePrevious());
          };
          reactExports.useEffect(() => {
            if (state.has_errors) return;
            const id = setTimeout(() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              });
            }, 0);
            return () => clearTimeout(id);
          }, [(_props$navigationInde = props.navigationIndex) === null || _props$navigationInde === void 0 ? void 0 : _props$navigationInde.groupId, state.has_errors]);
          reactExports.useEffect(() => {
            if (state.has_errors) {
              setTimeout(() => {
                const invalidQuestion = document.querySelector(".invalidQuestion");
                if (invalidQuestion) {
                  const scrollContainer = getClosestScrollableParent(invalidQuestion);
                  scrollContainer.scrollTo({
                    top: invalidQuestion.offsetTop - scrollContainer.offsetTop,
                    behavior: "smooth"
                  });
                }
              }, 500);
            }
          }, [state.has_errors]);
          const next = () => {
            dispatch(navigateNext());
          };
          return props.navigationIndex.name == "end" ? "" : /* @__PURE__ */jsx(Fragment, {
            children: /* @__PURE__ */jsxs("div", {
              className: styles$5.buttonContainer,
              children: [state.has_previous ? /* @__PURE__ */jsx(Button, {
                variant: "contained",
                className: isRtl ? "ml-14" : "mr-14",
                onClick: () => {
                  previous();
                },
                children: t("previous")
              }) : "", /* @__PURE__ */jsx(Button, {
                variant: "contained",
                onClick: () => {
                  next();
                },
                children: state.has_next ? t("next") : t("finish")
              })]
            })
          });
        }
        function getClosestScrollableParent(element) {
          if (!element) return null;
          let parent = element.parentElement;
          while (parent) {
            const style = window.getComputedStyle(parent);
            const overflowY = style.overflowY;
            const isScrollable = (overflowY === "auto" || overflowY === "scroll") && parent.scrollHeight > parent.clientHeight;
            if (isScrollable) {
              return parent;
            }
            parent = parent.parentElement;
          }
          return document.documentElement;
        }
        const surveyGroups = "_surveyGroups_d9ftv_5";
        const styles$4 = {
          surveyGroups: surveyGroups
        };
        const isTouchDevice = () => {
          return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        };
        function Survey() {
          useTheme();
          const navigationIndex = useSelector(state => {
            var _state$runState$data;
            return (_state$runState$data = state.runState.data) === null || _state$runState$data === void 0 ? void 0 : _state$runState$data.navigationIndex;
          }, shallowEqual);
          const survey = useSelector(state => {
            var _state$runState$data2;
            return (_state$runState$data2 = state.runState.data) === null || _state$runState$data2 === void 0 ? void 0 : _state$runState$data2.survey;
          }, shallowEqual);
          return /* @__PURE__ */jsx(DndProvider, {
            backend: isTouchDevice() ? TouchBackend : HTML5Backend,
            children: /* @__PURE__ */jsx("form", {
              id: FORM_ID,
              style: {
                marginTop: "4rem",
                marginRight: "6px",
                marginLeft: "6px"
              },
              children: /* @__PURE__ */jsxs("div", {
                className: styles$4.surveyGroups,
                children: [survey && survey.groups ? survey.groups.filter(group => group.inCurrentNavigation).map((group, index) => /* @__PURE__ */jsx("div", {
                  id: `group-${index}`,
                  "data-index": index,
                  children: /* @__PURE__ */jsx(Group$1, {
                    group,
                    groupIndex: index
                  })
                }, group.code)) : "", /* @__PURE__ */jsx(Navigation, {
                  navigationIndex
                })]
              })
            })
          });
        }
        var build = {
          exports: {}
        };
        (() => {
          var e = {
              296: (e, t, r) => {
                var o = /^\s+|\s+$/g,
                  n = /^[-+]0x[0-9a-f]+$/i,
                  i = /^0b[01]+$/i,
                  c = /^0o[0-7]+$/i,
                  u = parseInt,
                  s = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
                  l = "object" == typeof self && self && self.Object === Object && self,
                  a = s || l || Function("return this")(),
                  f = Object.prototype.toString,
                  p = Math.max,
                  y = Math.min,
                  b = function b() {
                    return a.Date.now();
                  };
                function d(e) {
                  var t = typeof e;
                  return !!e && ("object" == t || "function" == t);
                }
                function h(e) {
                  if ("number" == typeof e) return e;
                  if (function (e) {
                    return "symbol" == typeof e || function (e) {
                      return !!e && "object" == typeof e;
                    }(e) && "[object Symbol]" == f.call(e);
                  }(e)) return NaN;
                  if (d(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = d(t) ? t + "" : t;
                  }
                  if ("string" != typeof e) return 0 === e ? e : +e;
                  e = e.replace(o, "");
                  var r = i.test(e);
                  return r || c.test(e) ? u(e.slice(2), r ? 2 : 8) : n.test(e) ? NaN : +e;
                }
                e.exports = function (e, t, r) {
                  var o,
                    n,
                    i,
                    c,
                    u,
                    s,
                    l = 0,
                    a = false,
                    f = false,
                    v = true;
                  if ("function" != typeof e) throw new TypeError("Expected a function");
                  function m(t) {
                    var r = o,
                      i = n;
                    return o = n = void 0, l = t, c = e.apply(i, r);
                  }
                  function O(e) {
                    var r = e - s;
                    return void 0 === s || r >= t || r < 0 || f && e - l >= i;
                  }
                  function w() {
                    var e = b();
                    if (O(e)) return g(e);
                    u = setTimeout(w, function (e) {
                      var r = t - (e - s);
                      return f ? y(r, i - (e - l)) : r;
                    }(e));
                  }
                  function g(e) {
                    return u = void 0, v && o ? m(e) : (o = n = void 0, c);
                  }
                  function P() {
                    var e = b(),
                      r = O(e);
                    if (o = arguments, n = this, s = e, r) {
                      if (void 0 === u) return function (e) {
                        return l = e, u = setTimeout(w, t), a ? m(e) : c;
                      }(s);
                      if (f) return u = setTimeout(w, t), m(s);
                    }
                    return void 0 === u && (u = setTimeout(w, t)), c;
                  }
                  return t = h(t) || 0, d(r) && (a = !!r.leading, i = (f = "maxWait" in r) ? p(h(r.maxWait) || 0, t) : i, v = "trailing" in r ? !!r.trailing : v), P.cancel = function () {
                    void 0 !== u && clearTimeout(u), l = 0, o = s = n = u = void 0;
                  }, P.flush = function () {
                    return void 0 === u ? c : g(b());
                  }, P;
                };
              },
              96: (e, t, r) => {
                var o = "Expected a function",
                  n = NaN,
                  i = "[object Symbol]",
                  c = /^\s+|\s+$/g,
                  u = /^[-+]0x[0-9a-f]+$/i,
                  s = /^0b[01]+$/i,
                  l = /^0o[0-7]+$/i,
                  a = parseInt,
                  f = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
                  p = "object" == typeof self && self && self.Object === Object && self,
                  y = f || p || Function("return this")(),
                  b = Object.prototype.toString,
                  d = Math.max,
                  h = Math.min,
                  v = function v() {
                    return y.Date.now();
                  };
                function m(e) {
                  var t = typeof e;
                  return !!e && ("object" == t || "function" == t);
                }
                function O(e) {
                  if ("number" == typeof e) return e;
                  if (function (e) {
                    return "symbol" == typeof e || function (e) {
                      return !!e && "object" == typeof e;
                    }(e) && b.call(e) == i;
                  }(e)) return n;
                  if (m(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = m(t) ? t + "" : t;
                  }
                  if ("string" != typeof e) return 0 === e ? e : +e;
                  e = e.replace(c, "");
                  var r = s.test(e);
                  return r || l.test(e) ? a(e.slice(2), r ? 2 : 8) : u.test(e) ? n : +e;
                }
                e.exports = function (e, t, r) {
                  var n = true,
                    i = true;
                  if ("function" != typeof e) throw new TypeError(o);
                  return m(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), function (e, t, r) {
                    var n,
                      i,
                      c,
                      u,
                      s,
                      l,
                      a = 0,
                      f = false,
                      p = false,
                      y = true;
                    if ("function" != typeof e) throw new TypeError(o);
                    function b(t) {
                      var r = n,
                        o = i;
                      return n = i = void 0, a = t, u = e.apply(o, r);
                    }
                    function w(e) {
                      var r = e - l;
                      return void 0 === l || r >= t || r < 0 || p && e - a >= c;
                    }
                    function g() {
                      var e = v();
                      if (w(e)) return P(e);
                      s = setTimeout(g, function (e) {
                        var r = t - (e - l);
                        return p ? h(r, c - (e - a)) : r;
                      }(e));
                    }
                    function P(e) {
                      return s = void 0, y && n ? b(e) : (n = i = void 0, u);
                    }
                    function j() {
                      var e = v(),
                        r = w(e);
                      if (n = arguments, i = this, l = e, r) {
                        if (void 0 === s) return function (e) {
                          return a = e, s = setTimeout(g, t), f ? b(e) : u;
                        }(l);
                        if (p) return s = setTimeout(g, t), b(l);
                      }
                      return void 0 === s && (s = setTimeout(g, t)), u;
                    }
                    return t = O(t) || 0, m(r) && (f = !!r.leading, c = (p = "maxWait" in r) ? d(O(r.maxWait) || 0, t) : c, y = "trailing" in r ? !!r.trailing : y), j.cancel = function () {
                      void 0 !== s && clearTimeout(s), a = 0, n = l = i = s = void 0;
                    }, j.flush = function () {
                      return void 0 === s ? u : P(v());
                    }, j;
                  }(e, t, {
                    leading: n,
                    maxWait: t,
                    trailing: i
                  });
                };
              },
              703: (e, t, r) => {
                var o = r(414);
                function n() {}
                function i() {}
                i.resetWarningCache = n, e.exports = function () {
                  function e(e, t, r, n, i, c) {
                    if (c !== o) {
                      var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                      throw u.name = "Invariant Violation", u;
                    }
                  }
                  function t() {
                    return e;
                  }
                  e.isRequired = e;
                  var r = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: i,
                    resetWarningCache: n
                  };
                  return r.PropTypes = r, r;
                };
              },
              697: (e, t, r) => {
                e.exports = r(703)();
              },
              414: e => {
                e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
              }
            },
            t = {};
          function r(o) {
            var n = t[o];
            if (void 0 !== n) return n.exports;
            var i = t[o] = {
              exports: {}
            };
            return e[o](i, i.exports, r), i.exports;
          }
          r.n = e => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return r.d(t, {
              a: t
            }), t;
          }, r.d = (e, t) => {
            for (var o in t) r.o(t, o) && !r.o(e, o) && Object.defineProperty(e, o, {
              enumerable: true,
              get: t[o]
            });
          }, r.g = function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
              return this || new Function("return this")();
            } catch (e) {
              if ("object" == typeof window) return window;
            }
          }(), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.r = e => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
              value: "Module"
            }), Object.defineProperty(e, "__esModule", {
              value: true
            });
          };
          var o = {};
          (() => {
            r.r(o), r.d(o, {
              LazyLoadComponent: () => Y,
              LazyLoadImage: () => ne,
              trackWindowScroll: () => D
            });
            const e = reactExports;
            var t = r.n(e),
              n = r(697);
            function i() {
              return "undefined" != typeof window && "IntersectionObserver" in window && "isIntersecting" in window.IntersectionObserverEntry.prototype;
            }
            function c(e) {
              return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e;
              } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              }, c(e);
            }
            function u(e, t) {
              var r = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), r.push.apply(r, o);
              }
              return r;
            }
            function s(e, t, r) {
              return (t = a(t)) in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r, e;
            }
            function l(e, t) {
              for (var r = 0; r < t.length; r++) {
                var o = t[r];
                o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, a(o.key), o);
              }
            }
            function a(e) {
              var t = function (e, t) {
                if ("object" !== c(e) || null === e) return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                  var o = r.call(e, "string");
                  if ("object" !== c(o)) return o;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e);
              }(e);
              return "symbol" === c(t) ? t : String(t);
            }
            function f(e, t) {
              return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t, e;
              }, f(e, t);
            }
            function p(e) {
              return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }, p(e);
            }
            var y = function y(e) {
                e.forEach(function (e) {
                  e.isIntersecting && e.target.onVisible();
                });
              },
              b = {},
              d = function (e) {
                !function (e, t) {
                  if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                  e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      writable: true,
                      configurable: true
                    }
                  }), Object.defineProperty(e, "prototype", {
                    writable: false
                  }), t && f(e, t);
                }(h, e);
                var r,
                  o,
                  n,
                  a,
                  d = (n = h, a = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return false;
                    if (Reflect.construct.sham) return false;
                    if ("function" == typeof Proxy) return true;
                    try {
                      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch (e) {
                      return false;
                    }
                  }(), function () {
                    var e,
                      t = p(n);
                    if (a) {
                      var r = p(this).constructor;
                      e = Reflect.construct(t, arguments, r);
                    } else e = t.apply(this, arguments);
                    return function (e, t) {
                      if (t && ("object" === c(t) || "function" == typeof t)) return t;
                      if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                      return function (e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e;
                      }(e);
                    }(this, e);
                  });
                function h(e) {
                  var t;
                  if (function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                  }(this, h), (t = d.call(this, e)).supportsObserver = !e.scrollPosition && e.useIntersectionObserver && i(), t.supportsObserver) {
                    var r = e.threshold;
                    t.observer = function (e) {
                      return b[e] = b[e] || new IntersectionObserver(y, {
                        rootMargin: e + "px"
                      }), b[e];
                    }(r);
                  }
                  return t;
                }
                return r = h, o = [{
                  key: "componentDidMount",
                  value: function value() {
                    this.placeholder && this.observer && (this.placeholder.onVisible = this.props.onVisible, this.observer.observe(this.placeholder)), this.supportsObserver || this.updateVisibility();
                  }
                }, {
                  key: "componentWillUnmount",
                  value: function value() {
                    this.observer && this.placeholder && this.observer.unobserve(this.placeholder);
                  }
                }, {
                  key: "componentDidUpdate",
                  value: function value() {
                    this.supportsObserver || this.updateVisibility();
                  }
                }, {
                  key: "getPlaceholderBoundingBox",
                  value: function value() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props.scrollPosition,
                      t = this.placeholder.getBoundingClientRect(),
                      r = this.placeholder.style,
                      o = parseInt(r.getPropertyValue("margin-left"), 10) || 0,
                      n = parseInt(r.getPropertyValue("margin-top"), 10) || 0;
                    return {
                      bottom: e.y + t.bottom + n,
                      left: e.x + t.left + o,
                      right: e.x + t.right + o,
                      top: e.y + t.top + n
                    };
                  }
                }, {
                  key: "isPlaceholderInViewport",
                  value: function value() {
                    if ("undefined" == typeof window || !this.placeholder) return false;
                    var e = this.props,
                      t = e.scrollPosition,
                      r = e.threshold,
                      o = this.getPlaceholderBoundingBox(t),
                      n = t.y + window.innerHeight,
                      i = t.x,
                      c = t.x + window.innerWidth,
                      u = t.y;
                    return Boolean(u - r <= o.bottom && n + r >= o.top && i - r <= o.right && c + r >= o.left);
                  }
                }, {
                  key: "updateVisibility",
                  value: function value() {
                    this.isPlaceholderInViewport() && this.props.onVisible();
                  }
                }, {
                  key: "render",
                  value: function value() {
                    var e = this,
                      r = this.props,
                      o = r.className,
                      n = r.height,
                      i = r.placeholder,
                      c = r.style,
                      l = r.width;
                    if (i && "function" != typeof i.type) return t().cloneElement(i, {
                      ref: function ref(t) {
                        return e.placeholder = t;
                      }
                    });
                    var a = function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? u(Object(r), true).forEach(function (t) {
                          s(e, t, r[t]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                        });
                      }
                      return e;
                    }({
                      display: "inline-block"
                    }, c);
                    return void 0 !== l && (a.width = l), void 0 !== n && (a.height = n), t().createElement("span", {
                      className: o,
                      ref: function ref(t) {
                        return e.placeholder = t;
                      },
                      style: a
                    }, i);
                  }
                }], o && l(r.prototype, o), Object.defineProperty(r, "prototype", {
                  writable: false
                }), h;
              }(t().Component);
            d.propTypes = {
              onVisible: n.PropTypes.func.isRequired,
              className: n.PropTypes.string,
              height: n.PropTypes.oneOfType([n.PropTypes.number, n.PropTypes.string]),
              placeholder: n.PropTypes.element,
              threshold: n.PropTypes.number,
              useIntersectionObserver: n.PropTypes.bool,
              scrollPosition: n.PropTypes.shape({
                x: n.PropTypes.number.isRequired,
                y: n.PropTypes.number.isRequired
              }),
              width: n.PropTypes.oneOfType([n.PropTypes.number, n.PropTypes.string])
            }, d.defaultProps = {
              className: "",
              placeholder: null,
              threshold: 100,
              useIntersectionObserver: true
            };
            const h = d;
            var v = r(296),
              m = r.n(v),
              O = r(96),
              w = r.n(O),
              g = function g(e) {
                var t = getComputedStyle(e, null);
                return t.getPropertyValue("overflow") + t.getPropertyValue("overflow-y") + t.getPropertyValue("overflow-x");
              };
            const P = function P(e) {
              if (!(e instanceof HTMLElement)) return window;
              for (var t = e; t && t instanceof HTMLElement;) {
                if (/(scroll|auto)/.test(g(t))) return t;
                t = t.parentNode;
              }
              return window;
            };
            function j(e) {
              return j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e;
              } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              }, j(e);
            }
            var T = ["delayMethod", "delayTime"];
            function S() {
              return S = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
                }
                return e;
              }, S.apply(this, arguments);
            }
            function E(e, t) {
              for (var r = 0; r < t.length; r++) {
                var o = t[r];
                o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, (n = function (e, t) {
                  if ("object" !== j(e) || null === e) return e;
                  var r = e[Symbol.toPrimitive];
                  if (void 0 !== r) {
                    var o = r.call(e, "string");
                    if ("object" !== j(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                  }
                  return String(e);
                }(o.key), "symbol" === j(n) ? n : String(n)), o);
              }
              var n;
            }
            function L(e, t) {
              return L = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t, e;
              }, L(e, t);
            }
            function _(e, t) {
              if (t && ("object" === j(t) || "function" == typeof t)) return t;
              if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
              return I(e);
            }
            function I(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            }
            function x(e) {
              return x = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }, x(e);
            }
            var R = function R() {
                return "undefined" == typeof window ? 0 : window.scrollX || window.pageXOffset;
              },
              k = function k() {
                return "undefined" == typeof window ? 0 : window.scrollY || window.pageYOffset;
              };
            const D = function D(e) {
              var r = function (r) {
                !function (e, t) {
                  if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                  e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      writable: true,
                      configurable: true
                    }
                  }), Object.defineProperty(e, "prototype", {
                    writable: false
                  }), t && L(e, t);
                }(l, r);
                var o,
                  n,
                  c,
                  u,
                  s = (c = l, u = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return false;
                    if (Reflect.construct.sham) return false;
                    if ("function" == typeof Proxy) return true;
                    try {
                      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch (e) {
                      return false;
                    }
                  }(), function () {
                    var e,
                      t = x(c);
                    if (u) {
                      var r = x(this).constructor;
                      e = Reflect.construct(t, arguments, r);
                    } else e = t.apply(this, arguments);
                    return _(this, e);
                  });
                function l(e) {
                  var r;
                  if (function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                  }(this, l), (r = s.call(this, e)).useIntersectionObserver = e.useIntersectionObserver && i(), r.useIntersectionObserver) return _(r);
                  var o = r.onChangeScroll.bind(I(r));
                  return "debounce" === e.delayMethod ? r.delayedScroll = m()(o, e.delayTime) : "throttle" === e.delayMethod && (r.delayedScroll = w()(o, e.delayTime)), r.state = {
                    scrollPosition: {
                      x: R(),
                      y: k()
                    }
                  }, r.baseComponentRef = t().createRef(), r;
                }
                return o = l, (n = [{
                  key: "componentDidMount",
                  value: function value() {
                    this.addListeners();
                  }
                }, {
                  key: "componentWillUnmount",
                  value: function value() {
                    this.removeListeners();
                  }
                }, {
                  key: "componentDidUpdate",
                  value: function value() {
                    "undefined" == typeof window || this.useIntersectionObserver || P(this.baseComponentRef.current) !== this.scrollElement && (this.removeListeners(), this.addListeners());
                  }
                }, {
                  key: "addListeners",
                  value: function value() {
                    "undefined" == typeof window || this.useIntersectionObserver || (this.scrollElement = P(this.baseComponentRef.current), this.scrollElement.addEventListener("scroll", this.delayedScroll, {
                      passive: true
                    }), window.addEventListener("resize", this.delayedScroll, {
                      passive: true
                    }), this.scrollElement !== window && window.addEventListener("scroll", this.delayedScroll, {
                      passive: true
                    }));
                  }
                }, {
                  key: "removeListeners",
                  value: function value() {
                    "undefined" == typeof window || this.useIntersectionObserver || (this.scrollElement.removeEventListener("scroll", this.delayedScroll), window.removeEventListener("resize", this.delayedScroll), this.scrollElement !== window && window.removeEventListener("scroll", this.delayedScroll));
                  }
                }, {
                  key: "onChangeScroll",
                  value: function value() {
                    this.useIntersectionObserver || this.setState({
                      scrollPosition: {
                        x: R(),
                        y: k()
                      }
                    });
                  }
                }, {
                  key: "render",
                  value: function value() {
                    var r = this.props,
                      o = (r.delayMethod, r.delayTime, function (e, t) {
                        if (null == e) return {};
                        var r,
                          o,
                          n = function (e, t) {
                            if (null == e) return {};
                            var r,
                              o,
                              n = {},
                              i = Object.keys(e);
                            for (o = 0; o < i.length; o++) r = i[o], t.indexOf(r) >= 0 || (n[r] = e[r]);
                            return n;
                          }(e, t);
                        if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          for (o = 0; o < i.length; o++) r = i[o], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
                        }
                        return n;
                      }(r, T)),
                      n = this.useIntersectionObserver ? null : this.state.scrollPosition;
                    return t().createElement(e, S({
                      forwardRef: this.baseComponentRef,
                      scrollPosition: n
                    }, o));
                  }
                }]) && E(o.prototype, n), Object.defineProperty(o, "prototype", {
                  writable: false
                }), l;
              }(t().Component);
              return r.propTypes = {
                delayMethod: n.PropTypes.oneOf(["debounce", "throttle"]),
                delayTime: n.PropTypes.number,
                useIntersectionObserver: n.PropTypes.bool
              }, r.defaultProps = {
                delayMethod: "throttle",
                delayTime: 300,
                useIntersectionObserver: true
              }, r;
            };
            function C(e) {
              return C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e;
              } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              }, C(e);
            }
            function B(e, t) {
              for (var r = 0; r < t.length; r++) {
                var o = t[r];
                o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, (n = function (e, t) {
                  if ("object" !== C(e) || null === e) return e;
                  var r = e[Symbol.toPrimitive];
                  if (void 0 !== r) {
                    var o = r.call(e, "string");
                    if ("object" !== C(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                  }
                  return String(e);
                }(o.key), "symbol" === C(n) ? n : String(n)), o);
              }
              var n;
            }
            function M(e, t) {
              return M = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t, e;
              }, M(e, t);
            }
            function N(e) {
              return N = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }, N(e);
            }
            var V = function (e) {
              !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    writable: true,
                    configurable: true
                  }
                }), Object.defineProperty(e, "prototype", {
                  writable: false
                }), t && M(e, t);
              }(u, e);
              var r,
                o,
                n,
                i,
                c = (n = u, i = function () {
                  if ("undefined" == typeof Reflect || !Reflect.construct) return false;
                  if (Reflect.construct.sham) return false;
                  if ("function" == typeof Proxy) return true;
                  try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                  } catch (e) {
                    return false;
                  }
                }(), function () {
                  var e,
                    t = N(n);
                  if (i) {
                    var r = N(this).constructor;
                    e = Reflect.construct(t, arguments, r);
                  } else e = t.apply(this, arguments);
                  return function (e, t) {
                    if (t && ("object" === C(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return function (e) {
                      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return e;
                    }(e);
                  }(this, e);
                });
              function u(e) {
                return function (e, t) {
                  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, u), c.call(this, e);
              }
              return r = u, (o = [{
                key: "render",
                value: function value() {
                  return t().createElement(h, this.props);
                }
              }]) && B(r.prototype, o), Object.defineProperty(r, "prototype", {
                writable: false
              }), u;
            }(t().Component);
            const W = D(V);
            function z(e) {
              return z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e;
              } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              }, z(e);
            }
            function $(e, t) {
              for (var r = 0; r < t.length; r++) {
                var o = t[r];
                o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, (n = function (e, t) {
                  if ("object" !== z(e) || null === e) return e;
                  var r = e[Symbol.toPrimitive];
                  if (void 0 !== r) {
                    var o = r.call(e, "string");
                    if ("object" !== z(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                  }
                  return String(e);
                }(o.key), "symbol" === z(n) ? n : String(n)), o);
              }
              var n;
            }
            function U(e, t) {
              return U = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t, e;
              }, U(e, t);
            }
            function F(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            }
            function q(e) {
              return q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }, q(e);
            }
            var H = function (e) {
              !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    writable: true,
                    configurable: true
                  }
                }), Object.defineProperty(e, "prototype", {
                  writable: false
                }), t && U(e, t);
              }(s, e);
              var r,
                o,
                n,
                c,
                u = (n = s, c = function () {
                  if ("undefined" == typeof Reflect || !Reflect.construct) return false;
                  if (Reflect.construct.sham) return false;
                  if ("function" == typeof Proxy) return true;
                  try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                  } catch (e) {
                    return false;
                  }
                }(), function () {
                  var e,
                    t = q(n);
                  if (c) {
                    var r = q(this).constructor;
                    e = Reflect.construct(t, arguments, r);
                  } else e = t.apply(this, arguments);
                  return function (e, t) {
                    if (t && ("object" === z(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return F(e);
                  }(this, e);
                });
              function s(e) {
                var t;
                !function (e, t) {
                  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, s), t = u.call(this, e);
                var r = e.afterLoad,
                  o = e.beforeLoad,
                  n = e.scrollPosition,
                  i = e.visibleByDefault;
                return t.state = {
                  visible: i
                }, i && (o(), r()), t.onVisible = t.onVisible.bind(F(t)), t.isScrollTracked = Boolean(n && Number.isFinite(n.x) && n.x >= 0 && Number.isFinite(n.y) && n.y >= 0), t;
              }
              return r = s, (o = [{
                key: "componentDidUpdate",
                value: function value(e, t) {
                  t.visible !== this.state.visible && this.props.afterLoad();
                }
              }, {
                key: "onVisible",
                value: function value() {
                  this.props.beforeLoad(), this.setState({
                    visible: true
                  });
                }
              }, {
                key: "render",
                value: function value() {
                  if (this.state.visible) return this.props.children;
                  var e = this.props,
                    r = e.className,
                    o = e.delayMethod,
                    n = e.delayTime,
                    c = e.height,
                    u = e.placeholder,
                    s = e.scrollPosition,
                    l = e.style,
                    a = e.threshold,
                    f = e.useIntersectionObserver,
                    p = e.width;
                  return this.isScrollTracked || f && i() ? t().createElement(h, {
                    className: r,
                    height: c,
                    onVisible: this.onVisible,
                    placeholder: u,
                    scrollPosition: s,
                    style: l,
                    threshold: a,
                    useIntersectionObserver: f,
                    width: p
                  }) : t().createElement(W, {
                    className: r,
                    delayMethod: o,
                    delayTime: n,
                    height: c,
                    onVisible: this.onVisible,
                    placeholder: u,
                    style: l,
                    threshold: a,
                    width: p
                  });
                }
              }]) && $(r.prototype, o), Object.defineProperty(r, "prototype", {
                writable: false
              }), s;
            }(t().Component);
            H.propTypes = {
              afterLoad: n.PropTypes.func,
              beforeLoad: n.PropTypes.func,
              useIntersectionObserver: n.PropTypes.bool,
              visibleByDefault: n.PropTypes.bool
            }, H.defaultProps = {
              afterLoad: function afterLoad() {
                return {};
              },
              beforeLoad: function beforeLoad() {
                return {};
              },
              useIntersectionObserver: true,
              visibleByDefault: false
            };
            const Y = H;
            function X(e) {
              return X = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e;
              } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              }, X(e);
            }
            var A = ["afterLoad", "beforeLoad", "delayMethod", "delayTime", "effect", "placeholder", "placeholderSrc", "scrollPosition", "threshold", "useIntersectionObserver", "visibleByDefault", "wrapperClassName", "wrapperProps"];
            function G(e, t) {
              var r = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), r.push.apply(r, o);
              }
              return r;
            }
            function J(e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? G(Object(r), true).forEach(function (t) {
                  K(e, t, r[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : G(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
              }
              return e;
            }
            function K(e, t, r) {
              return (t = ee(t)) in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r, e;
            }
            function Q() {
              return Q = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
                }
                return e;
              }, Q.apply(this, arguments);
            }
            function Z(e, t) {
              for (var r = 0; r < t.length; r++) {
                var o = t[r];
                o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, ee(o.key), o);
              }
            }
            function ee(e) {
              var t = function (e, t) {
                if ("object" !== X(e) || null === e) return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                  var o = r.call(e, "string");
                  if ("object" !== X(o)) return o;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e);
              }(e);
              return "symbol" === X(t) ? t : String(t);
            }
            function te(e, t) {
              return te = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t, e;
              }, te(e, t);
            }
            function re(e) {
              return re = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }, re(e);
            }
            var oe = function (e) {
              !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    writable: true,
                    configurable: true
                  }
                }), Object.defineProperty(e, "prototype", {
                  writable: false
                }), t && te(e, t);
              }(u, e);
              var r,
                o,
                n,
                i,
                c = (n = u, i = function () {
                  if ("undefined" == typeof Reflect || !Reflect.construct) return false;
                  if (Reflect.construct.sham) return false;
                  if ("function" == typeof Proxy) return true;
                  try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                  } catch (e) {
                    return false;
                  }
                }(), function () {
                  var e,
                    t = re(n);
                  if (i) {
                    var r = re(this).constructor;
                    e = Reflect.construct(t, arguments, r);
                  } else e = t.apply(this, arguments);
                  return function (e, t) {
                    if (t && ("object" === X(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return function (e) {
                      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return e;
                    }(e);
                  }(this, e);
                });
              function u(e) {
                var t;
                return function (e, t) {
                  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, u), (t = c.call(this, e)).state = {
                  loaded: false
                }, t;
              }
              return r = u, (o = [{
                key: "onImageLoad",
                value: function value() {
                  var e = this;
                  return this.state.loaded ? null : function (t) {
                    e.props.onLoad(t), e.props.afterLoad(), e.setState({
                      loaded: true
                    });
                  };
                }
              }, {
                key: "getImg",
                value: function value() {
                  var e = this.props,
                    r = (e.afterLoad, e.beforeLoad, e.delayMethod, e.delayTime, e.effect, e.placeholder, e.placeholderSrc, e.scrollPosition, e.threshold, e.useIntersectionObserver, e.visibleByDefault, e.wrapperClassName, e.wrapperProps, function (e, t) {
                      if (null == e) return {};
                      var r,
                        o,
                        n = function (e, t) {
                          if (null == e) return {};
                          var r,
                            o,
                            n = {},
                            i = Object.keys(e);
                          for (o = 0; o < i.length; o++) r = i[o], t.indexOf(r) >= 0 || (n[r] = e[r]);
                          return n;
                        }(e, t);
                      if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (o = 0; o < i.length; o++) r = i[o], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
                      }
                      return n;
                    }(e, A));
                  return t().createElement("img", Q({}, r, {
                    onLoad: this.onImageLoad()
                  }));
                }
              }, {
                key: "getLazyLoadImage",
                value: function value() {
                  var e = this.props,
                    r = e.beforeLoad,
                    o = e.className,
                    n = e.delayMethod,
                    i = e.delayTime,
                    c = e.height,
                    u = e.placeholder,
                    s = e.scrollPosition,
                    l = e.style,
                    a = e.threshold,
                    f = e.useIntersectionObserver,
                    p = e.visibleByDefault,
                    y = e.width;
                  return t().createElement(Y, {
                    beforeLoad: r,
                    className: o,
                    delayMethod: n,
                    delayTime: i,
                    height: c,
                    placeholder: u,
                    scrollPosition: s,
                    style: l,
                    threshold: a,
                    useIntersectionObserver: f,
                    visibleByDefault: p,
                    width: y
                  }, this.getImg());
                }
              }, {
                key: "getWrappedLazyLoadImage",
                value: function value(e) {
                  var r = this.props,
                    o = r.effect,
                    n = r.height,
                    i = r.placeholderSrc,
                    c = r.width,
                    u = r.wrapperClassName,
                    s = r.wrapperProps,
                    l = this.state.loaded,
                    a = l ? " lazy-load-image-loaded" : "",
                    f = l || !i ? {} : {
                      backgroundImage: "url(".concat(i, ")"),
                      backgroundSize: "100% 100%"
                    };
                  return t().createElement("span", Q({
                    className: u + " lazy-load-image-background " + o + a,
                    style: J(J({}, f), {}, {
                      color: "transparent",
                      display: "inline-block",
                      height: n,
                      width: c
                    })
                  }, s), e);
                }
              }, {
                key: "render",
                value: function value() {
                  var e = this.props,
                    t = e.effect,
                    r = e.placeholderSrc,
                    o = e.visibleByDefault,
                    n = e.wrapperClassName,
                    i = e.wrapperProps,
                    c = this.getLazyLoadImage();
                  return (t || r) && !o || n || i ? this.getWrappedLazyLoadImage(c) : c;
                }
              }]) && Z(r.prototype, o), Object.defineProperty(r, "prototype", {
                writable: false
              }), u;
            }(t().Component);
            oe.propTypes = {
              onLoad: n.PropTypes.func,
              afterLoad: n.PropTypes.func,
              beforeLoad: n.PropTypes.func,
              delayMethod: n.PropTypes.string,
              delayTime: n.PropTypes.number,
              effect: n.PropTypes.string,
              placeholderSrc: n.PropTypes.string,
              threshold: n.PropTypes.number,
              useIntersectionObserver: n.PropTypes.bool,
              visibleByDefault: n.PropTypes.bool,
              wrapperClassName: n.PropTypes.string,
              wrapperProps: n.PropTypes.object
            }, oe.defaultProps = {
              onLoad: function onLoad() {},
              afterLoad: function afterLoad() {
                return {};
              },
              beforeLoad: function beforeLoad() {
                return {};
              },
              delayMethod: "throttle",
              delayTime: 300,
              effect: "",
              placeholderSrc: null,
              threshold: 100,
              useIntersectionObserver: true,
              visibleByDefault: false,
              wrapperClassName: ""
            };
            const ne = oe;
          })(), build.exports = o;
        })();
        var buildExports = build.exports;

        // ----------------------------------------------------------------------

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
        const Image = reactExports.forwardRef((_ref10, ref) => {
          let ratio = _ref10.ratio,
            overlay = _ref10.overlay,
            _ref10$disabledEffect = _ref10.disabledEffect,
            disabledEffect = _ref10$disabledEffect === void 0 ? false : _ref10$disabledEffect,
            alt = _ref10.alt,
            src = _ref10.src,
            afterLoad = _ref10.afterLoad,
            delayTime = _ref10.delayTime,
            threshold = _ref10.threshold,
            beforeLoad = _ref10.beforeLoad,
            delayMethod = _ref10.delayMethod,
            placeholder = _ref10.placeholder,
            wrapperProps = _ref10.wrapperProps,
            scrollPosition = _ref10.scrollPosition,
            _ref10$effect = _ref10.effect,
            effect = _ref10$effect === void 0 ? "blur" : _ref10$effect,
            visibleByDefault = _ref10.visibleByDefault,
            wrapperClassName = _ref10.wrapperClassName,
            useIntersectionObserver = _ref10.useIntersectionObserver,
            sx = _ref10.sx,
            other = _objectWithoutProperties(_ref10, _excluded);
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
          const content = /* @__PURE__ */jsx(Box, {
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
            sx: _objectSpread({
              width: 1,
              height: 1,
              objectFit: "cover",
              verticalAlign: "bottom"
            }, !!ratio && {
              top: 0,
              left: 0,
              position: "absolute"
            })
          });
          return /* @__PURE__ */jsx(Box, _objectSpread(_objectSpread({
            ref,
            component: "span",
            className: "component-image",
            sx: _objectSpread(_objectSpread(_objectSpread({
              overflow: "hidden",
              position: "relative",
              verticalAlign: "bottom",
              display: "inline-block"
            }, !!ratio && {
              width: 1
            }), {}, {
              "& span.component-image-wrapper": _objectSpread({
                width: 1,
                height: 1,
                verticalAlign: "bottom",
                backgroundSize: "cover !important"
              }, !!ratio && {
                pt: getRatio(ratio)
              })
            }, overlayStyles), sx)
          }, other), {}, {
            children: content
          }));
        });
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
          ratio: PropTypes.oneOf(["4/3", "3/4", "6/4", "4/6", "16/9", "9/16", "21/9", "9/21", "1/1"]),
          scrollPosition: PropTypes.object,
          src: PropTypes.string,
          sx: PropTypes.object,
          threshold: PropTypes.number,
          useIntersectionObserver: PropTypes.bool,
          visibleByDefault: PropTypes.bool,
          wrapperClassName: PropTypes.string,
          wrapperProps: PropTypes.object
        };
        function CompactLayout({
          children
        }) {
          return /* @__PURE__ */jsx(Fragment, {
            children: /* @__PURE__ */jsx(Box, {
              style: {
                position: "fixed",
                zIndex: 2e3,
                width: "100%",
                height: "100%",
                background: "#fff",
                overflow: "auto"
              },
              children: /* @__PURE__ */jsx(Container, {
                component: "main",
                children: /* @__PURE__ */jsx(Stack, {
                  sx: {
                    // py: 12,
                    m: "auto",
                    maxWidth: 400,
                    minHeight: "100vh",
                    textAlign: "center",
                    justifyContent: "center"
                  },
                  children
                })
              })
            })
          });
        }
        CompactLayout.propTypes = {
          children: PropTypes.node
        };

        // ----------------------------------------------------------------------

        // SETUP COLORS

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

        // ----------------------------------------------------------------------

        function palette(mode) {
          const light = _objectSpread(_objectSpread({}, base), {}, {
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
            action: _objectSpread(_objectSpread({}, base.action), {}, {
              active: grey[600]
            })
          });
          const dark = _objectSpread(_objectSpread({}, base), {}, {
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
            action: _objectSpread(_objectSpread({}, base.action), {}, {
              active: grey[500]
            })
          });
          return mode === "light" ? light : dark;
        }
        function ErrorLayout({
          setErrorSeen,
          error
        }) {
          const _useTranslation5 = useTranslation(NAMESPACES.MANAGE),
            t = _useTranslation5.t;
          const navigate = useNavigate();
          const theme = createTheme({
            palette: palette("light")
          });
          if (error.name === "component_deleted") {
            return /* @__PURE__ */jsxs(Dialog, {
              open: true,
              children: [/* @__PURE__ */jsx(DialogTitle, {
                children: t("component_deleted_title")
              }), /* @__PURE__ */jsx(DialogContent, {
                children: /* @__PURE__ */jsx(Typography, {
                  children: t("processed_errors.component_deleted")
                })
              }), /* @__PURE__ */jsx(DialogActions, {
                children: /* @__PURE__ */jsx(Button, {
                  onClick: () => setErrorSeen(),
                  variant: "contained",
                  style: {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText
                  },
                  children: t("ok")
                })
              })]
            });
          }
          if (error.name == "survey_quota") {
            return /* @__PURE__ */jsxs(CompactLayout, {
              children: [/* @__PURE__ */jsx("div", {
                children: /* @__PURE__ */jsx(Typography, {
                  variant: "h3",
                  paragraph: true,
                  children: t("error.survey_expired")
                })
              }), /* @__PURE__ */jsx("div", {
                children: /* @__PURE__ */jsx(Typography, {
                  sx: {
                    color: "text.secondary"
                  },
                  children: t("processed_errors." + error.name)
                })
              }), /* @__PURE__ */jsx("div", {
                children: /* @__PURE__ */jsx(HourglassEmpty, {
                  sx: {
                    mx: "auto",
                    maxWidth: 320,
                    my: {
                      xs: 5,
                      sm: 5
                    }
                  },
                  style: {
                    fontSize: 50,
                    color: "red"
                  }
                })
              }), /* @__PURE__ */jsx(Box, {
                display: "flex",
                gap: 2,
                children: /* @__PURE__ */jsx(Button, {
                  fullWidth: true,
                  size: "large",
                  color: "inherit",
                  variant: "contained",
                  onClick: () => navigate(-1),
                  children: t("goBack")
                })
              })]
            });
          }
          return /* @__PURE__ */jsxs(Dialog, {
            open: true,
            onClose: () => setErrorSeen(),
            maxWidth: "sm",
            fullWidth: true,
            children: [/* @__PURE__ */jsxs(DialogContent, {
              sx: {
                textAlign: "center",
                py: 4
              },
              children: [/* @__PURE__ */jsx(Typography, {
                variant: "h3",
                paragraph: true,
                children: t("error_title")
              }), /* @__PURE__ */jsx(Typography, {
                sx: {
                  color: "text.secondary"
                },
                children: t("processed_errors." + error.name)
              }), /* @__PURE__ */jsx(Image, {
                alt: "500",
                src: "/illustration_500.svg",
                sx: {
                  mx: "auto",
                  maxWidth: 320,
                  my: {
                    xs: 5,
                    sm: 8
                  }
                }
              })]
            }), /* @__PURE__ */jsx(DialogActions, {
              sx: {
                px: 3,
                pb: 3
              },
              children: /* @__PURE__ */jsx(Button, {
                fullWidth: true,
                size: "large",
                color: "inherit",
                variant: "contained",
                onClick: () => setErrorSeen(),
                style: {
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText
                },
                children: t("ok")
              })
            })]
          });
        }
        const buildResourceUrl = exports("e", (fileName, surveyId = null) => {
          if (!surveyId) {
            surveyId = sessionStorage.getItem("surveyId");
          }
          return `${BACKEND_BASE_URL}survey/${surveyId}/resource/${fileName}`;
        });
        function getFileFromPath(_x30) {
          return _getFileFromPath.apply(this, arguments);
        }
        function _getFileFromPath() {
          _getFileFromPath = _asyncToGenerator(function* (filePath) {
            const response = yield fetch(filePath);
            const blob = yield response.blob();
            const fileName = filePath.substring(filePath.lastIndexOf("/") + 1);
            return new File([blob], fileName);
          });
          return _getFileFromPath.apply(this, arguments);
        }
        const loadingWrapper = "_loadingWrapper_1p71l_1";
        const loadingDots = "_loadingDots_1p71l_14";
        const styles$3 = {
          loadingWrapper: loadingWrapper,
          loadingDots: loadingDots
        };
        function RunLoadingDots() {
          var _theme$palette;
          const theme = useTheme$1();
          const isLoading = useSelector(state => state.templateState.isLoading);
          const _reactExports$useStat1 = reactExports.useState(false),
            _reactExports$useStat10 = _slicedToArray(_reactExports$useStat1, 2),
            delayedLoading = _reactExports$useStat10[0],
            setDelayedLoading = _reactExports$useStat10[1];
          const _reactExports$useStat11 = reactExports.useState(false),
            _reactExports$useStat12 = _slicedToArray(_reactExports$useStat11, 2),
            forceLoading = _reactExports$useStat12[0],
            setForceLoading = _reactExports$useStat12[1];
          reactExports.useEffect(() => {
            let timer;
            if (isLoading) {
              setDelayedLoading(true);
              setForceLoading(false);
              timer = setTimeout(() => {
                setForceLoading(true);
              }, 200);
            } else {
              if (!forceLoading) {
                timer = setTimeout(() => {
                  setDelayedLoading(false);
                }, 200);
              } else {
                setDelayedLoading(false);
              }
            }
            return () => clearTimeout(timer);
          }, [isLoading, forceLoading]);
          return delayedLoading ? /* @__PURE__ */jsx(Box, {
            className: styles$3.loadingWrapper,
            children: /* @__PURE__ */jsx(Box, {
              style: {
                background: `radial-gradient(circle closest-side, ${theme === null || theme === void 0 || (_theme$palette = theme.palette) === null || _theme$palette === void 0 || (_theme$palette = _theme$palette.primary) === null || _theme$palette === void 0 ? void 0 : _theme$palette.main} 90%, #0000) 0 / calc(100% / 3) 100% space`
              },
              className: styles$3.loadingDots
            })
          }) : /* @__PURE__ */jsx(Fragment, {});
        }
        const drawer = "_drawer_4kmyb_1";
        const drawerHeader = "_drawerHeader_4kmyb_8";
        const styles$2 = {
          drawer: drawer,
          drawerHeader: drawerHeader
        };
        const groupCard = "_groupCard_18q7o_1";
        const groupTitle = "_groupTitle_18q7o_6";
        const questionTitle = "_questionTitle_18q7o_10";
        const questionIcon = "_questionIcon_18q7o_16";
        const redAsterix = "_redAsterix_18q7o_29";
        const truncatedTwoLines = "_truncatedTwoLines_18q7o_34";
        const styles$1 = {
          groupCard: groupCard,
          groupTitle: groupTitle,
          questionTitle: questionTitle,
          questionIcon: questionIcon,
          redAsterix: redAsterix,
          truncatedTwoLines: truncatedTwoLines
        };
        function SurveyIndex(props) {
          const theme = useTheme$1();
          const dispatch = useDispatch();
          const relevance_map = useSelector(state => {
            return state.runState.values["Survey"].relevance_map;
          }, shallowEqual);
          const validity_map = useSelector(state => {
            return state.runState.values["Survey"].validity_map;
          }, shallowEqual);
          const canJump = useSelector(state => {
            return state.runState.data.navigationData.allowJump;
          }, shallowEqual);
          const isCurrentGroup = groupCode => {
            return props.navigationIndex.name == "group" && groupCode == props.navigationIndex.groupId;
          };
          const isCurrentQuestion = questionCode => {
            return props.navigationIndex.name == "question" && questionCode == props.navigationIndex.questionId;
          };
          const isGroupClickable = groupCode => canJump && !isCurrentGroup(groupCode) && props.navigationIndex.name == "group";
          const isQuestionClickable = questionCode => canJump && !isCurrentQuestion(questionCode) && props.navigationIndex.name == "question";
          const onGroupClicked = groupCode => {
            if (isGroupClickable(groupCode)) {
              dispatch(jump(_objectSpread(_objectSpread({}, props.navigationIndex), {}, {
                groupId: groupCode
              })));
            }
          };
          const onQuestionClicked = questionCode => {
            if (isQuestionClickable(questionCode)) {
              dispatch(jump(_objectSpread(_objectSpread({}, props.navigationIndex), {}, {
                questionId: questionCode
              })));
            }
          };
          return /* @__PURE__ */jsx(Fragment, {
            children: props.survey && props.survey.groups ? props.survey.groups.filter(group => relevance_map[group.code] && group.groupType != "END").map(group => {
              var _group$content;
              return /* @__PURE__ */jsxs(Card, {
                onClick: () => onGroupClicked(group.code),
                className: styles$1.groupCard,
                style: {
                  backgroundColor: isCurrentGroup(group.code) ? "beige" : theme.palette.background.paper,
                  cursor: isGroupClickable(group.code) ? "pointer" : "default"
                },
                children: [/* @__PURE__ */jsxs(Box$1, {
                  className: styles$1.groupTitle,
                  children: [stripTags((_group$content = group.content) === null || _group$content === void 0 ? void 0 : _group$content.label), " "]
                }), group.questions.filter(question => relevance_map[question.code]).map(question => {
                  var _question$content;
                  return /* @__PURE__ */jsxs(Box$1, {
                    onClick: () => onQuestionClicked(question.code),
                    className: styles$1.questionTitle,
                    style: {
                      backgroundColor: isCurrentQuestion(question.code) ? "beige" : "inherit",
                      cursor: isGroupClickable(group.code) ? "inherit" : isQuestionClickable(group.code) ? "pointer" : "default"
                    },
                    children: [/* @__PURE__ */jsx("span", {
                      className: styles$1.questionIcon,
                      children: questionIconByType(question.type)
                    }), /* @__PURE__ */jsx("span", {
                      className: styles$1.truncatedTwoLines,
                      children: stripTags((_question$content = question.content) === null || _question$content === void 0 ? void 0 : _question$content.label)
                    }), !validity_map[question.code] && /* @__PURE__ */jsx("span", {
                      className: styles$1.redAsterix,
                      children: "*"
                    })]
                  }, question.code);
                })]
              }, group.code);
            }) : ""
          });
        }
        function SurveyDrawer({
          expanded,
          toggleDrawer,
          t
        }) {
          const navigationIndex = useSelector(state => {
            var _state$runState$data3;
            return (_state$runState$data3 = state.runState.data) === null || _state$runState$data3 === void 0 ? void 0 : _state$runState$data3.navigationIndex;
          }, shallowEqual);
          const survey = useSelector(state => {
            var _state$runState$data4;
            return (_state$runState$data4 = state.runState.data) === null || _state$runState$data4 === void 0 ? void 0 : _state$runState$data4.survey;
          }, shallowEqual);
          return /* @__PURE__ */jsx(Drawer, {
            anchor: "left",
            transitionDuration: expanded !== COLLAPSE_IMMEDIATE ? 500 : 0,
            open: expanded == EXPAND,
            onClose: toggleDrawer(false),
            sx: {
              "& .MuiDrawer-paper": {
                width: "350px",
                maxWidth: "90%",
                "@media (max-width: 600px)": {
                  width: "300px"
                }
              }
            },
            children: /* @__PURE__ */jsxs("div", {
              className: styles$2.drawer,
              children: [/* @__PURE__ */jsxs("div", {
                className: styles$2.drawerHeader,
                children: [/* @__PURE__ */jsx(Typography, {
                  variant: "h6",
                  className: styles$2.drawerTitle,
                  children: t("survey_navigation")
                }), /* @__PURE__ */jsx(IconButton, {
                  className: styles$2.closeButton,
                  onClick: toggleDrawer(false),
                  children: /* @__PURE__ */jsx(Close, {})
                })]
              }), /* @__PURE__ */jsx(SurveyIndex, {
                navigationIndex,
                survey
              })]
            })
          });
        }
        const SurveyDrawer$1 = React.memo(SurveyDrawer);
        const COLLAPSE_IMMEDIATE = "COLLAPSE_IMMEDIATE";
        const COLLAPSE = "COLLAPSE";
        const EXPAND = "EXPAND";
        var Menu = {};
        var _interopRequireDefault = interopRequireDefaultExports;
        Object.defineProperty(Menu, "__esModule", {
          value: true
        });
        var default_1 = Menu.default = void 0;
        var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
        var _jsxRuntime = jsxRuntimeExports;
        default_1 = Menu.default = (0, _createSvgIcon.default)(/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
          d: "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
        }), 'Menu');
        const toolbar = "_toolbar_tmt0c_1";
        const styles = {
          toolbar: toolbar
        };
        function SurveyAppBar({
          toggleDrawer,
          preview
        }) {
          useSelector(state => {
            var _state$runState$data5;
            return (_state$runState$data5 = state.runState.data) === null || _state$runState$data5 === void 0 ? void 0 : _state$runState$data5.lang;
          }, shallowEqual);
          const _useTranslation6 = useTranslation(NAMESPACES.RUN),
            t = _useTranslation6.t;
          useSelector(state => {
            var _state$runState$data6;
            return (_state$runState$data6 = state.runState.data) === null || _state$runState$data6 === void 0 ? void 0 : _state$runState$data6.additionalLang;
          }, shallowEqual);
          useSelector(state => {
            return state.runState.data.navigationData.allowIncomplete;
          }, shallowEqual);
          const theme = useTheme$1();
          const _reactExports$useStat13 = reactExports.useState(false),
            _reactExports$useStat14 = _slicedToArray(_reactExports$useStat13, 2),
            saveOpen = _reactExports$useStat14[0],
            setSaveOpen = _reactExports$useStat14[1];
          const _reactExports$useStat15 = reactExports.useState(false),
            _reactExports$useStat16 = _slicedToArray(_reactExports$useStat15, 2),
            saving = _reactExports$useStat16[0],
            setSaving = _reactExports$useStat16[1];
          const _reactExports$useStat17 = reactExports.useState(false),
            _reactExports$useStat18 = _slicedToArray(_reactExports$useStat17, 2),
            snackbarOpen = _reactExports$useStat18[0],
            setSnackbarOpen = _reactExports$useStat18[1];
          const store = useStore();
          const runService = useService("run");
          const handleSaveLater = /*#__PURE__*/function () {
            var _ref11 = _asyncToGenerator(function* () {
              setSaving(true);
              runService.navigate({
                events: store.getState().runState.timings,
                values: getValues(store.getState().runState.values),
                responseId: sessionStorage.getItem("responseId"),
                navigationDirection: {
                  name: "SAVE"
                }
              }, preview).then(response => {
                navigator.clipboard.writeText(`${PROTOCOL}://${FRONT_END_HOST}${(preview ? routes.resumePreview : routes.resumeSurvey).replace(":responseId", sessionStorage.getItem("responseId")).replace(":surveyId", sessionStorage.getItem("surveyId"))}`);
                setSnackbarOpen(true);
                setSaving(false);
                setSaveOpen(false);
              }).catch(e => {
                setSaving(false);
                setSaveOpen(false);
              });
            });
            return function handleSaveLater() {
              return _ref11.apply(this, arguments);
            };
          }();
          const handleSnackbarClose = (_, reason) => {
            if (reason === "clickaway") return;
            setSnackbarOpen(false);
          };
          return /* @__PURE__ */jsxs(Fragment, {
            children: [/* @__PURE__ */jsxs(Toolbar, {
              className: styles.toolbar,
              children: [/* @__PURE__ */jsx(IconButton, {
                color: "primary",
                size: "large",
                edge: "start",
                "aria-label": "menu",
                sx: {
                  backgroundColor: theme.palette.background.paper
                },
                onClick: toggleDrawer(true),
                children: /* @__PURE__ */jsx(default_1, {})
              }), false]
            }), /* @__PURE__ */jsxs(Dialog, {
              open: saveOpen,
              onClose: (_, reason) => {
                if (saving) return;
                setSaveOpen(false);
              },
              disableEscapeKeyDown: saving,
              maxWidth: "sm",
              fullWidth: true,
              children: [/* @__PURE__ */jsx(DialogTitle, {
                children: t("saveAndContinueLaterTitle")
              }), /* @__PURE__ */jsx(DialogContent, {
                dividers: true,
                children: /* @__PURE__ */jsx(Typography, {
                  sx: {
                    mb: 2
                  },
                  children: t("saveAndContinueLaterDesc")
                })
              }), /* @__PURE__ */jsxs(DialogActions, {
                children: [/* @__PURE__ */jsx(Button, {
                  onClick: () => setSaveOpen(false),
                  disabled: saving,
                  children: t("cancel")
                }), /* @__PURE__ */jsx(LoadingButton, {
                  onClick: handleSaveLater,
                  variant: "contained",
                  loading: saving,
                  children: t("saveForLater")
                })]
              })]
            }), /* @__PURE__ */jsx(Snackbar, {
              open: snackbarOpen,
              autoHideDuration: 3e3,
              onClose: handleSnackbarClose,
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "center"
              },
              children: /* @__PURE__ */jsx(Alert, {
                onClose: handleSnackbarClose,
                severity: "success",
                elevation: 6,
                variant: "filled",
                sx: {
                  width: "100%"
                },
                children: t("linkCopied")
              })
            })]
          });
        }
        function RunSurvey({
          preview,
          mode,
          resume = false,
          responseId,
          navigationMode
        }) {
          const runService = useService("run");
          const location = useLocation();
          const searchParams = new URLSearchParams(location.search);
          const lang = searchParams.get("lang");
          const _React$useState = React.useState(false),
            _React$useState2 = _slicedToArray(_React$useState, 2),
            render = _React$useState2[0],
            setRender = _React$useState2[1];
          const _React$useState3 = React.useState(COLLAPSE),
            _React$useState4 = _slicedToArray(_React$useState3, 2),
            expanded = _React$useState4[0],
            setExpanded = _React$useState4[1];
          const _React$useState5 = React.useState(false),
            _React$useState6 = _slicedToArray(_React$useState5, 2),
            error = _React$useState6[0],
            setError = _React$useState6[1];
          const _React$useState7 = React.useState(false),
            _React$useState8 = _slicedToArray(_React$useState7, 2),
            inlineError = _React$useState8[0],
            setInlineError = _React$useState8[1];
          const _React$useState9 = React.useState(mode),
            _React$useState0 = _slicedToArray(_React$useState9, 2),
            currentMode = _React$useState0[0],
            setCurrentMode = _React$useState0[1];
          const _React$useState1 = React.useState(navigationMode),
            _React$useState10 = _slicedToArray(_React$useState1, 2),
            currentNavigationMode = _React$useState10[0],
            setCurrentNavigationMode = _React$useState10[1];
          const containerRef = reactExports.useRef(null);
          const store = useStore();
          const surveyTheme = useSelector(state => {
            var _state$runState$data7;
            return (_state$runState$data7 = state.runState.data) === null || _state$runState$data7 === void 0 || (_state$runState$data7 = _state$runState$data7.survey) === null || _state$runState$data7 === void 0 ? void 0 : _state$runState$data7.theme;
          }, isEquivalent);
          const navResponseId = useSelector(state => {
            var _state$runState$data8;
            return (_state$runState$data8 = state.runState.data) === null || _state$runState$data8 === void 0 ? void 0 : _state$runState$data8.responseId;
          });
          const navigationIndex = useSelector(state => {
            var _state$runState$data9;
            return (_state$runState$data9 = state.runState.data) === null || _state$runState$data9 === void 0 ? void 0 : _state$runState$data9.navigationIndex;
          }, shallowEqual);
          const SURVEY_ENDED = (navigationIndex === null || navigationIndex === void 0 ? void 0 : navigationIndex.name) === "end";
          const backgroundImage = useSelector(state => {
            var _state$runState$data0;
            return (_state$runState$data0 = state.runState.data) === null || _state$runState$data0 === void 0 || (_state$runState$data0 = _state$runState$data0.survey) === null || _state$runState$data0 === void 0 || (_state$runState$data0 = _state$runState$data0.resources) === null || _state$runState$data0 === void 0 ? void 0 : _state$runState$data0.backgroundImage;
          });
          const navigation = useSelector(state => {
            return state.runState.navigation;
          }, isEquivalent);
          const _useTranslation7 = useTranslation(NAMESPACES.RUN),
            t = _useTranslation7.t,
            i18n = _useTranslation7.i18n;
          const dispatch = useDispatch();
          reactExports.useEffect(() => {
            if (navigation) {
              continueNav(navigation, navResponseId);
            }
          }, [navigation]);
          reactExports.useEffect(() => {
            if (window["Android"]) {
              window["autoSaveValues"] = () => {
                const valuesToSave = getValues(store.getState().runState.values);
                window["Android"].autoSaveValues(JSON.stringify(valuesToSave));
              };
            }
          }, []);
          reactExports.useEffect(() => {
            if (preview) {
              const handleMessage = event => {
                if (event.origin !== window.location.origin || event.data.type !== "PREVIEW_MODE_CHANGED") {
                  return;
                }
                const mode2 = event.data.mode;
                const navigationMode2 = event.data.navigationMode;
                dispatch(previewModeChange({
                  mode: mode2,
                  navigationMode: navigationMode2
                }));
              };
              window.addEventListener("message", handleMessage);
              return () => {
                window.removeEventListener("message", handleMessage);
              };
            }
          }, []);
          reactExports.useEffect(() => {
            if (rtlLanguage.includes(i18n.language)) {
              document.dir = "rtl";
            } else {
              document.dir = "ltr";
            }
          }, [i18n.language]);
          const handleError = procesed => {
            if ([PROCESSED_ERRORS.SURVEY_DESIGN_ERROR, PROCESSED_ERRORS.SURVEY_NOT_ACTIVE, PROCESSED_ERRORS.SURVEY_CLOSED, PROCESSED_ERRORS.SURVEY_EXPIRED, PROCESSED_ERRORS.SURVEY_SCHEDULED].indexOf(procesed) > -1) {
              setInlineError(procesed);
            } else {
              setError(procesed);
            }
            dispatch(setFetching(false));
          };
          const startNav = () => {
            startNavigation(runService, lang, preview, mode, navigationMode).then(/*#__PURE__*/function () {
              var _ref12 = _asyncToGenerator(function* (response) {
                if (i18n.language !== response.lang.code) {
                  yield i18n.changeLanguage(response.lang.code);
                }
                if (!i18n.hasLoadedNamespace("run")) {
                  yield i18n.loadNamespaces("run");
                }
                setRender(true);
                dispatch(stateReceived({
                  response,
                  preview
                }));
                if (preview) {
                  window.parent.postMessage({
                    type: "RESPONSE_ID_RECEIVED",
                    responseId: response.responseId
                  }, window.location.origin);
                } else {
                  window.history.replaceState({}, "", routes.resumeSurvey.replace(":surveyId", sessionStorage.getItem("surveyId")).replace(":responseId", response.responseId));
                }
                sessionStorage.setItem("responseId", response.responseId);
                dispatch(setFetching(false));
              });
              return function (_x31) {
                return _ref12.apply(this, arguments);
              };
            }()).catch(err => {
              console.error(err);
              handleError(err);
            });
          };
          const continueNav = (payload, responseId2) => {
            var _payload$mode, _payload$navigationMo;
            dispatch(setFetching(true));
            if (payload.mode) {
              setCurrentMode(payload.mode);
            }
            if (payload.navigationMode) {
              setCurrentNavigationMode(payload.navigationMode);
            }
            const useCaseMode = (_payload$mode = payload.mode) !== null && _payload$mode !== void 0 ? _payload$mode : currentMode;
            const useCaseNavMode = (_payload$navigationMo = payload.navigationMode) !== null && _payload$navigationMo !== void 0 ? _payload$navigationMo : currentNavigationMode;
            continueNavigation(runService, payload, responseId2, preview, useCaseMode, useCaseNavMode).then(/*#__PURE__*/function () {
              var _ref13 = _asyncToGenerator(function* (response) {
                if (i18n.language !== response.lang.code) {
                  yield i18n.changeLanguage(response.lang.code);
                }
                if (!i18n.hasLoadedNamespace("run")) {
                  yield i18n.loadNamespaces("run");
                }
                setRender(true);
                dispatch(stateReceived({
                  response,
                  preview
                }));
                sessionStorage.setItem("responseId", response.responseId);
                dispatch(setFetching(false));
              });
              return function (_x32) {
                return _ref13.apply(this, arguments);
              };
            }()).catch(err => {
              console.error(err);
              handleError(err);
            });
          };
          reactExports.useEffect(() => {
            if (!navigation && containerRef.current) {
              containerRef.current.scrollTo({
                top: 0
              });
            }
          }, [navigation, containerRef.current]);
          reactExports.useEffect(() => {
            document.body.style.overflow = "visible";
            dispatch(setFetching(true));
            loadScript(runService, preview).then(() => {
              if (resume) {
                continueNav({
                  navigationDirection: {
                    name: "RESUME"
                  }
                }, responseId);
              } else {
                startNav();
              }
            }).catch(err => {
              handleError(err);
            });
          }, []);
          const theme = reactExports.useMemo(() => createTheme(_objectSpread(_objectSpread({}, defualtTheme(surveyTheme)), {}, {
            direction: rtlLanguage.includes(i18n.language) ? "rtl" : "ltr"
          })), [i18n.language, surveyTheme]);
          const cacheRtlMemo = reactExports.useMemo(() => cacheRtl(i18n.language), [i18n.language]);
          const backgroundImageUrl = reactExports.useMemo(() => `url(${buildResourceUrl(backgroundImage)})`, [backgroundImage]);
          const navigate = useNavigate();
          const toggleDrawer = open => event => {
            if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
              return;
            }
            setExpanded(open ? EXPAND : COLLAPSE);
          };
          return /* @__PURE__ */jsxs(Fragment, {
            children: [/* @__PURE__ */jsx(CacheProvider, {
              value: cacheRtlMemo,
              children: /* @__PURE__ */jsxs(ThemeProvider, {
                theme,
                children: [error && /* @__PURE__ */jsx(ErrorLayout, {
                  error,
                  setErrorSeen: () => {
                    setError(null);
                  }
                }), render && /* @__PURE__ */jsxs(Fragment, {
                  children: [backgroundImage && /* @__PURE__ */jsx("div", {
                    "aria-hidden": true,
                    className: styles$a.fixedBg,
                    css: /* @__PURE__ */css("background-image:", backgroundImageUrl, ";" + "", "")
                  }), /* @__PURE__ */jsxs("div", {
                    className: styles$a.mainContainer,
                    ref: containerRef,
                    css: /* @__PURE__ */css("color:", theme.textStyles.text.color, ";font-family:", theme.textStyles.text.font, ";" + "", ""),
                    style: {
                      backgroundColor: theme.palette.background.default,
                      height: "calc(100vh - 48px)"
                    },
                    children: [!SURVEY_ENDED && /* @__PURE__ */jsx(SurveyAppBar, {
                      preview,
                      toggleDrawer
                    }), /* @__PURE__ */jsx(SurveyMemo, {}, "Survey"), /* @__PURE__ */jsx(SurveyDrawer$1, {
                      expanded,
                      toggleDrawer,
                      t
                    })]
                  })]
                }), /* @__PURE__ */jsx(RunLoadingDots, {})]
              })
            }), inlineError && /* @__PURE__ */jsx(Box, {
              style: {
                height: "100%",
                overflow: "auto"
              },
              children: /* @__PURE__ */jsxs(CompactLayout, {
                children: [/* @__PURE__ */jsx(Typography, {
                  variant: "h3",
                  paragraph: true,
                  children: t("error")
                }), /* @__PURE__ */jsx(Typography, {
                  sx: {
                    color: "text.secondary"
                  },
                  children: t("processed_errors." + inlineError.name)
                }), /* @__PURE__ */jsx(Image, {
                  alt: "500",
                  src: "/illustration_500.svg",
                  sx: {
                    mx: "auto",
                    maxWidth: 320,
                    my: {
                      xs: 5,
                      sm: 8
                    }
                  }
                }), /* @__PURE__ */jsx(Button, {
                  fullWidth: true,
                  size: "large",
                  color: "inherit",
                  variant: "contained",
                  className: styles$a.goBack,
                  onClick: () => navigate(-1),
                  children: t("goBack")
                })]
              })
            })]
          });
        }
        const SurveyMemo = React.memo(Survey);
        function Android() {
          const surveyId = getparam(useParams(), "surveyId");
          sessionStorage.setItem("surveyId", surveyId);
          return /* @__PURE__ */jsx(Provider, {
            store: runStore,
            children: /* @__PURE__ */jsx(RunSurvey, {})
          });
        }
        const Android$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
          __proto__: null,
          default: Android
        }, Symbol.toStringTag, {
          value: 'Module'
        }));
        exports("A", Android$1);
      }
    };
  });
})();
//# sourceMappingURL=Android-legacy-Csf5qFR4.js.map
