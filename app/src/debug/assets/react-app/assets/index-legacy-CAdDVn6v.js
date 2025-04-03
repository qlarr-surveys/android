;
(function () {
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  System.register(['./index-legacy-BLatMfxz.js', './use-service-legacy-DLuVKbJp.js', './isTouchDevice-legacy-Hx_ZLTbf.js', './common-legacy-BfMJ8X0r.js', './CardMedia-legacy-CywE8xFy.js', './Card-legacy-DAyj9G4N.js', './Toolbar-legacy-gatoM_w3.js'], function (exports, module) {
    'use strict';

    var generateUtilityClasses, createBox, ClassNameGenerator, reactExports, _objectWithoutPropertiesLoose, jsxRuntimeExports, _extends, capitalize, clsx, Box$1, React, __vitePreload, LoadingDots, useTheme$1, interopRequireDefaultExports, useLocation, createTheme, useNavigate, CacheProvider, useTheme, useForkRef, debounce, ownerWindow, Transition, reflow, getTransitionProps, styled, Modal, rootShouldForwardProp, Paper, useDefaultProps, useRtl, composeClasses, getDrawerUtilityClass, useTranslation, useSelector, stripTags, rtlLanguage, shallowEqual, useDispatch, Button, navigatePrevious, navigateNext, questionIconByType, jump, Typography, IconButton, Close, requireCreateSvgIcon, FormControl, Select, langChange, MenuItem, useService, isEquivalent, setFetching, continueNavigation, stateReceived, loadScript, defualtTheme, cacheRtl, ThemeProvider, ErrorLayout, CompactLayout, Image, PROCESSED_ERRORS, startNavigation, ErrorOutlineOutlined, createSelector, DndProvider, isTouchDevice, TouchBackend, HTML5Backend, buildResourceUrl, CardMedia, Card, Toolbar;
    return {
      setters: [module => {
        generateUtilityClasses = module.f;
        createBox = module.ak;
        ClassNameGenerator = module.ae;
        reactExports = module.r;
        _objectWithoutPropertiesLoose = module.b;
        jsxRuntimeExports = module.j;
        _extends = module._;
        capitalize = module.h;
        clsx = module.d;
        Box$1 = module.B;
        React = module.R;
        __vitePreload = module.z;
        LoadingDots = module.A;
        useTheme$1 = module.y;
        interopRequireDefaultExports = module.q;
        useLocation = module.t;
        createTheme = module.x;
        useNavigate = module.s;
        CacheProvider = module.C;
      }, module => {
        useTheme = module.w;
        useForkRef = module.b;
        debounce = module.aZ;
        ownerWindow = module.aY;
        Transition = module.bf;
        reflow = module.bg;
        getTransitionProps = module.bh;
        styled = module.f;
        Modal = module.aL;
        rootShouldForwardProp = module.l;
        Paper = module.h;
        useDefaultProps = module.j;
        useRtl = module.z;
        composeClasses = module.c;
        getDrawerUtilityClass = module.bi;
        useTranslation = module.M;
        useSelector = module.H;
        stripTags = module.bj;
        rtlLanguage = module.ao;
        shallowEqual = module.aR;
        useDispatch = module.R;
        Button = module.aC;
        navigatePrevious = module.bk;
        navigateNext = module.bl;
        questionIconByType = module.bm;
        jump = module.bn;
        Typography = module.T;
        IconButton = module.I;
        Close = module.aN;
        requireCreateSvgIcon = module.K;
        FormControl = module.aw;
        Select = module.S;
        langChange = module.bo;
        MenuItem = module.N;
        useService = module.Q;
        isEquivalent = module.bp;
        setFetching = module.bq;
        continueNavigation = module.br;
        stateReceived = module.bs;
        loadScript = module.bt;
        defualtTheme = module.bu;
        cacheRtl = module.au;
        ThemeProvider = module.aq;
        ErrorLayout = module.Z;
        CompactLayout = module.ar;
        Image = module.as;
        PROCESSED_ERRORS = module.aM;
        startNavigation = module.bv;
      }, module => {
        ErrorOutlineOutlined = module.E;
        createSelector = module.c;
        DndProvider = module.D;
        isTouchDevice = module.i;
        TouchBackend = module.T;
        HTML5Backend = module.H;
      }, module => {
        buildResourceUrl = module.b;
      }, module => {
        CardMedia = module.C;
      }, module => {
        Card = module.C;
      }, module => {
        Toolbar = module.T;
      }],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._mainContainer_1oyjx_1 {\n  margin: auto;\n  height: calc(100vh);\n  overflow: auto;\n}\n\n._surveyDesignError_1oyjx_7 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  font-size: 32px;\n  border: 2px dashed gray;\n  border-radius: 4px;\n}\n\n._goBack_1oyjx_17 {\n  display: inline-flex;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  position: relative;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent;\n  outline: 0px;\n  border: 0px currentcolor;\n  margin: 0px;\n  cursor: pointer;\n  user-select: none;\n  vertical-align: middle;\n  appearance: none;\n  text-decoration: none;\n  font-weight: 700;\n  line-height: 1.71429;\n  text-transform: capitalize;\n  min-width: 64px;\n  padding: 8px 16px;\n  border-radius: 8px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  width: 100%;\n  box-shadow: none;\n  color: rgb(255, 255, 255);\n  background-color: rgb(33, 43, 54);\n  height: 48px;\n  font-size: 15px;\n}\n\n._goBack_1oyjx_17:hover {\n  background-color: rgb(69, 79, 91);\n  box-shadow: none;\n}\n._content_ukoxz_1 {\n  width: 100%;\n  margin: 0;\n  letter-spacing: 0.1px;\n  word-break: break-word;\n}\n\n._content_ukoxz_1._question_ukoxz_8 {\n  margin-bottom: 4px;\n}\n\n._content_ukoxz_1 ._required_ukoxz_12 {\n  margin-left: 5px;\n}\n\n._header_ukoxz_16 {\n  margin-bottom: 12px;\n}\n\n._textDescription_ukoxz_20 {\n  max-width: 100%;\n  margin-bottom: 4px;\n}\n\n._groupQuestion_ukoxz_25 {\n  padding: 1rem;\n  word-wrap: break-word;\n  page-break-inside: avoid;\n  transition: all 200ms cubic-bezier(0, 0, 0.2, 1);\n}\n._wrapper_1hpga_1 {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 0;\n  line-height: 16px;\n  letter-spacing: 0.3px;\n}\n\n._icon_1hpga_11 {\n  margin-right: 12px;\n  transform: rotate(180deg);\n}\n/*!\n * Quill Editor v1.3.7\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */\n.ql-container {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}\n.ql-container.ql-disabled .ql-tooltip {\n  visibility: hidden;\n}\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n  pointer-events: none;\n}\n.ql-clipboard {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}\n.ql-clipboard p {\n  margin: 0;\n  padding: 0;\n}\n.ql-editor {\n  box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.ql-editor > * {\n  cursor: text;\n}\n.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n  margin: 0;\n  padding: 0;\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol,\n.ql-editor ul {\n  padding-left: 1.5em;\n}\n.ql-editor ol > li,\n.ql-editor ul > li {\n  list-style-type: none;\n}\n.ql-editor ul > li::before {\n  content: '\\2022';\n}\n.ql-editor ul[data-checked=true],\n.ql-editor ul[data-checked=false] {\n  pointer-events: none;\n}\n.ql-editor ul[data-checked=true] > li *,\n.ql-editor ul[data-checked=false] > li * {\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before,\n.ql-editor ul[data-checked=false] > li::before {\n  color: #777;\n  cursor: pointer;\n  pointer-events: all;\n}\n.ql-editor ul[data-checked=true] > li::before {\n  content: '\\2611';\n}\n.ql-editor ul[data-checked=false] > li::before {\n  content: '\\2610';\n}\n.ql-editor li::before {\n  display: inline-block;\n  white-space: nowrap;\n  width: 1.2em;\n}\n.ql-editor li:not(.ql-direction-rtl)::before {\n  margin-left: -1.5em;\n  margin-right: 0.3em;\n  text-align: right;\n}\n.ql-editor li.ql-direction-rtl::before {\n  margin-left: 0.3em;\n  margin-right: -1.5em;\n}\n.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\n  padding-left: 1.5em;\n}\n.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\n  padding-right: 1.5em;\n}\n.ql-editor ol li {\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment: list-0;\n}\n.ql-editor ol li:before {\n  content: counter(list-0, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-increment: list-1;\n}\n.ql-editor ol li.ql-indent-1:before {\n  content: counter(list-1, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-increment: list-2;\n}\n.ql-editor ol li.ql-indent-2:before {\n  content: counter(list-2, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-2 {\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-increment: list-3;\n}\n.ql-editor ol li.ql-indent-3:before {\n  content: counter(list-3, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-3 {\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-increment: list-4;\n}\n.ql-editor ol li.ql-indent-4:before {\n  content: counter(list-4, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-4 {\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-increment: list-5;\n}\n.ql-editor ol li.ql-indent-5:before {\n  content: counter(list-5, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-5 {\n  counter-reset: list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-increment: list-6;\n}\n.ql-editor ol li.ql-indent-6:before {\n  content: counter(list-6, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-6 {\n  counter-reset: list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-increment: list-7;\n}\n.ql-editor ol li.ql-indent-7:before {\n  content: counter(list-7, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-7 {\n  counter-reset: list-8 list-9;\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-increment: list-8;\n}\n.ql-editor ol li.ql-indent-8:before {\n  content: counter(list-8, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-8 {\n  counter-reset: list-9;\n}\n.ql-editor ol li.ql-indent-9 {\n  counter-increment: list-9;\n}\n.ql-editor ol li.ql-indent-9:before {\n  content: counter(list-9, decimal) '. ';\n}\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 3em;\n}\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n  padding-left: 4.5em;\n}\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 3em;\n}\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n  padding-right: 4.5em;\n}\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 6em;\n}\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n  padding-left: 7.5em;\n}\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 6em;\n}\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n  padding-right: 7.5em;\n}\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 9em;\n}\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n  padding-left: 10.5em;\n}\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 9em;\n}\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n  padding-right: 10.5em;\n}\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 12em;\n}\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n  padding-left: 13.5em;\n}\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 12em;\n}\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n  padding-right: 13.5em;\n}\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 15em;\n}\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n  padding-left: 16.5em;\n}\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 15em;\n}\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n  padding-right: 16.5em;\n}\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 18em;\n}\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n  padding-left: 19.5em;\n}\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 18em;\n}\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n  padding-right: 19.5em;\n}\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 21em;\n}\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n  padding-left: 22.5em;\n}\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 21em;\n}\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n  padding-right: 22.5em;\n}\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 24em;\n}\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n  padding-left: 25.5em;\n}\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 24em;\n}\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n  padding-right: 25.5em;\n}\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 27em;\n}\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n  padding-left: 28.5em;\n}\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 27em;\n}\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n  padding-right: 28.5em;\n}\n.ql-editor .ql-video {\n  display: block;\n  max-width: 100%;\n}\n.ql-editor .ql-video.ql-align-center {\n  margin: 0 auto;\n}\n.ql-editor .ql-video.ql-align-right {\n  margin: 0 0 0 auto;\n}\n.ql-editor .ql-bg-black {\n  background-color: #000;\n}\n.ql-editor .ql-bg-red {\n  background-color: #e60000;\n}\n.ql-editor .ql-bg-orange {\n  background-color: #f90;\n}\n.ql-editor .ql-bg-yellow {\n  background-color: #ff0;\n}\n.ql-editor .ql-bg-green {\n  background-color: #008a00;\n}\n.ql-editor .ql-bg-blue {\n  background-color: #06c;\n}\n.ql-editor .ql-bg-purple {\n  background-color: #93f;\n}\n.ql-editor .ql-color-white {\n  color: #fff;\n}\n.ql-editor .ql-color-red {\n  color: #e60000;\n}\n.ql-editor .ql-color-orange {\n  color: #f90;\n}\n.ql-editor .ql-color-yellow {\n  color: #ff0;\n}\n.ql-editor .ql-color-green {\n  color: #008a00;\n}\n.ql-editor .ql-color-blue {\n  color: #06c;\n}\n.ql-editor .ql-color-purple {\n  color: #93f;\n}\n.ql-editor .ql-font-serif {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-editor .ql-font-monospace {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-editor .ql-size-small {\n  font-size: 0.75em;\n}\n.ql-editor .ql-size-large {\n  font-size: 1.5em;\n}\n.ql-editor .ql-size-huge {\n  font-size: 2.5em;\n}\n.ql-editor .ql-direction-rtl {\n  direction: rtl;\n  text-align: inherit;\n}\n.ql-editor .ql-align-center {\n  text-align: center;\n}\n.ql-editor .ql-align-justify {\n  text-align: justify;\n}\n.ql-editor .ql-align-right {\n  text-align: right;\n}\n.ql-editor.ql-blank::before {\n  color: rgba(0,0,0,0.6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}\n.rtl {\n  direction: rtl !important;\n  text-align: right !important;\n}\n\n.no-padding {\n  padding: 0 !important;\n}\n\n.no-padding > :last-child {\n  margin-bottom: 0;\n}\n\n.no-padding > :first-child {\n  margin-top: 0;\n}\n._textDescription_jd8f0_1 {\n  max-width: 100%;\n  margin-top: 8px;\n}\n\n._titleRow_jd8f0_6 {\n  display: block;\n  justify-content: space-between;\n  align-items: center;\n  box-align: center;\n  margin: 24px;\n  flex-wrap: wrap;\n  box-pack: justify;\n}\n\n._groupHeader_jd8f0_16 {\n  padding: 1rem;\n}\n\n._topLevel_jd8f0_20 {\n  display: flex;\n  flex-direction: column;\n  max-width: 800px;\n  min-width: 320px;\n  margin-right: 16px;\n  margin-left: 16px;\n  padding: .5rem 0rem 2rem .5rem;\n  margin: auto;\n  position: relative;\n}._buttonContainer_zlh5z_1 {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  justify-content: center;\n  padding: 20px 0px 50px 0px;\n}\n._surveyContent_jntaj_1 {\n  margin: 0;\n}\n\n._surveyGroups_jntaj_5 {\n  margin: auto;\n  max-width: 800px;\n  min-width: 300px;\n  position: relative;\n}\n\n._cardImage_jntaj_12 {\n  max-height: 22.5vw;\n  height: 160px;\n  margin: 12px auto;\n  background-size: cover;\n  background-position: center;\n  border-radius: 8px;\n}\n\n._groupContianer_jntaj_21 {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n._stepperContent_jntaj_26 {\n  position: absolute;\n  background-color: white;\n  width: 400px;\n  padding: 1rem;\n  border-radius: 0px 8px 8px 0px;\n  height: 700px;\n  overflow: auto;\n  margin-top: 3rem;\n}\n\n._menuButton_jntaj_37._menuButton_jntaj_37 {\n  position: fixed;\n}._loadingWrapper_1p71l_1 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 99999;\n  /* background: rgba(255, 255, 255, 0.7);\n  backdrop-filter: blur(.5px); */\n}\n\n._loadingDots_1p71l_14 {\n  width: 60px;\n  aspect-ratio: 4;\n  clip-path: inset(0 100% 0 0);\n  animation: _l1_1p71l_1 1s steps(4) infinite;\n}\n\n@keyframes _l1_1p71l_1 {\n  to {\n    clip-path: inset(0 -34% 0 0);\n  }\n}._drawer_16lbk_1 {\n  padding: 16px;\n}\n\n._drawerHeader_16lbk_5 {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #e0e0e0;\n}\n._groupCard_18q7o_1 {\n  padding: 8px;\n  margin: 8px;\n}\n\n._groupTitle_18q7o_6 {\n  font-weight: bolder;\n}\n\n._questionTitle_18q7o_10 {\n  display: flex;\n  padding: 8px;\n  margin: 8px;\n}\n\n._questionIcon_18q7o_16 {\n  margin-left: 8px;\n  margin-right: 8px;\n  color: green;\n  font-size: 1.2rem;\n}\n\n._bullet_18q7o_23 {\n  margin-right: 8px;\n  margin-left: 8px;\n  font-size: 1.2rem;\n}\n\n._redAsterix_18q7o_29 {\n  margin-left: 0.5rem;\n  color: red;\n}\n\n._truncatedTwoLines_18q7o_34 {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n._toolbar_13q1d_1._toolbar_13q1d_1 {\n  position: sticky;\n  top: 0;\n  z-index: 1100;\n  min-height: 4rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        exports({
          R: RunSurvey,
          V: Validation,
          a: ValidationItem
        });
        const boxClasses = generateUtilityClasses('MuiBox', ['root']);
        const Box = exports("B", createBox({
          defaultClassName: boxClasses.root,
          generateClassName: ClassNameGenerator.generate
        }));
        const _excluded$1 = ["addEndListener", "appear", "children", "container", "direction", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
        function getTranslateValue(direction, node, resolvedContainer) {
          const rect = node.getBoundingClientRect();
          const containerRect = resolvedContainer && resolvedContainer.getBoundingClientRect();
          const containerWindow = ownerWindow(node);
          let transform;
          if (node.fakeTransform) {
            transform = node.fakeTransform;
          } else {
            const computedStyle = containerWindow.getComputedStyle(node);
            transform = computedStyle.getPropertyValue("-webkit-transform") || computedStyle.getPropertyValue("transform");
          }
          let offsetX = 0;
          let offsetY = 0;
          if (transform && transform !== "none" && typeof transform === "string") {
            const transformValues = transform.split("(")[1].split(")")[0].split(",");
            offsetX = parseInt(transformValues[4], 10);
            offsetY = parseInt(transformValues[5], 10);
          }
          if (direction === "left") {
            if (containerRect) {
              return `translateX(${containerRect.right + offsetX - rect.left}px)`;
            }
            return `translateX(${containerWindow.innerWidth + offsetX - rect.left}px)`;
          }
          if (direction === "right") {
            if (containerRect) {
              return `translateX(-${rect.right - containerRect.left - offsetX}px)`;
            }
            return `translateX(-${rect.left + rect.width - offsetX}px)`;
          }
          if (direction === "up") {
            if (containerRect) {
              return `translateY(${containerRect.bottom + offsetY - rect.top}px)`;
            }
            return `translateY(${containerWindow.innerHeight + offsetY - rect.top}px)`;
          }
          if (containerRect) {
            return `translateY(-${rect.top - containerRect.top + rect.height - offsetY}px)`;
          }
          return `translateY(-${rect.top + rect.height - offsetY}px)`;
        }
        function resolveContainer(containerPropProp) {
          return typeof containerPropProp === "function" ? containerPropProp() : containerPropProp;
        }
        function setTranslateValue(direction, node, containerProp) {
          const resolvedContainer = resolveContainer(containerProp);
          const transform = getTranslateValue(direction, node, resolvedContainer);
          if (transform) {
            node.style.webkitTransform = transform;
            node.style.transform = transform;
          }
        }
        const Slide = /* @__PURE__ */reactExports.forwardRef(function Slide2(props, ref) {
          const theme = useTheme();
          const defaultEasing = {
            enter: theme.transitions.easing.easeOut,
            exit: theme.transitions.easing.sharp
          };
          const defaultTimeout = {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen
          };
          const addEndListener = props.addEndListener,
            _props$appear = props.appear,
            appear = _props$appear === void 0 ? true : _props$appear,
            _children = props.children,
            containerProp = props.container,
            _props$direction = props.direction,
            direction = _props$direction === void 0 ? "down" : _props$direction,
            _props$easing = props.easing,
            easingProp = _props$easing === void 0 ? defaultEasing : _props$easing,
            inProp = props.in,
            onEnter = props.onEnter,
            onEntered = props.onEntered,
            onEntering = props.onEntering,
            onExit = props.onExit,
            onExited = props.onExited,
            onExiting = props.onExiting,
            style = props.style,
            _props$timeout = props.timeout,
            timeout = _props$timeout === void 0 ? defaultTimeout : _props$timeout,
            _props$TransitionComp = props.TransitionComponent,
            TransitionComponent = _props$TransitionComp === void 0 ? Transition : _props$TransitionComp,
            other = _objectWithoutPropertiesLoose(props, _excluded$1);
          const childrenRef = reactExports.useRef(null);
          const handleRef = useForkRef(_children.ref, childrenRef, ref);
          const normalizedTransitionCallback = callback => isAppearing => {
            if (callback) {
              if (isAppearing === void 0) {
                callback(childrenRef.current);
              } else {
                callback(childrenRef.current, isAppearing);
              }
            }
          };
          const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
            setTranslateValue(direction, node, containerProp);
            reflow(node);
            if (onEnter) {
              onEnter(node, isAppearing);
            }
          });
          const handleEntering = normalizedTransitionCallback((node, isAppearing) => {
            const transitionProps = getTransitionProps({
              timeout,
              style,
              easing: easingProp
            }, {
              mode: "enter"
            });
            node.style.webkitTransition = theme.transitions.create("-webkit-transform", _extends({}, transitionProps));
            node.style.transition = theme.transitions.create("transform", _extends({}, transitionProps));
            node.style.webkitTransform = "none";
            node.style.transform = "none";
            if (onEntering) {
              onEntering(node, isAppearing);
            }
          });
          const handleEntered = normalizedTransitionCallback(onEntered);
          const handleExiting = normalizedTransitionCallback(onExiting);
          const handleExit = normalizedTransitionCallback(node => {
            const transitionProps = getTransitionProps({
              timeout,
              style,
              easing: easingProp
            }, {
              mode: "exit"
            });
            node.style.webkitTransition = theme.transitions.create("-webkit-transform", transitionProps);
            node.style.transition = theme.transitions.create("transform", transitionProps);
            setTranslateValue(direction, node, containerProp);
            if (onExit) {
              onExit(node);
            }
          });
          const handleExited = normalizedTransitionCallback(node => {
            node.style.webkitTransition = "";
            node.style.transition = "";
            if (onExited) {
              onExited(node);
            }
          });
          const handleAddEndListener = next => {
            if (addEndListener) {
              addEndListener(childrenRef.current, next);
            }
          };
          const updatePosition = reactExports.useCallback(() => {
            if (childrenRef.current) {
              setTranslateValue(direction, childrenRef.current, containerProp);
            }
          }, [direction, containerProp]);
          reactExports.useEffect(() => {
            if (inProp || direction === "down" || direction === "right") {
              return void 0;
            }
            const handleResize = debounce(() => {
              if (childrenRef.current) {
                setTranslateValue(direction, childrenRef.current, containerProp);
              }
            });
            const containerWindow = ownerWindow(childrenRef.current);
            containerWindow.addEventListener("resize", handleResize);
            return () => {
              handleResize.clear();
              containerWindow.removeEventListener("resize", handleResize);
            };
          }, [direction, inProp, containerProp]);
          reactExports.useEffect(() => {
            if (!inProp) {
              updatePosition();
            }
          }, [inProp, updatePosition]);
          return /* @__PURE__ */jsxRuntimeExports.jsx(TransitionComponent, _extends({
            nodeRef: childrenRef,
            onEnter: handleEnter,
            onEntered: handleEntered,
            onEntering: handleEntering,
            onExit: handleExit,
            onExited: handleExited,
            onExiting: handleExiting,
            addEndListener: handleAddEndListener,
            appear,
            in: inProp,
            timeout
          }, other, {
            children: (state, childProps) => {
              return /* @__PURE__ */reactExports.cloneElement(_children, _extends({
                ref: handleRef,
                style: _extends({
                  visibility: state === "exited" && !inProp ? "hidden" : void 0
                }, style, _children.props.style)
              }, childProps));
            }
          }));
        });
        const _excluded = ["BackdropProps"],
          _excluded2 = ["anchor", "BackdropProps", "children", "className", "elevation", "hideBackdrop", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"];
        const overridesResolver = (props, styles) => {
          const ownerState = props.ownerState;
          return [styles.root, (ownerState.variant === "permanent" || ownerState.variant === "persistent") && styles.docked, styles.modal];
        };
        const useUtilityClasses = ownerState => {
          const classes = ownerState.classes,
            anchor = ownerState.anchor,
            variant = ownerState.variant;
          const slots = {
            root: ["root"],
            docked: [(variant === "permanent" || variant === "persistent") && "docked"],
            modal: ["modal"],
            paper: ["paper", `paperAnchor${capitalize(anchor)}`, variant !== "temporary" && `paperAnchorDocked${capitalize(anchor)}`]
          };
          return composeClasses(slots, getDrawerUtilityClass, classes);
        };
        const DrawerRoot = styled(Modal, {
          name: "MuiDrawer",
          slot: "Root",
          overridesResolver
        })(({
          theme
        }) => ({
          zIndex: (theme.vars || theme).zIndex.drawer
        }));
        const DrawerDockedRoot = styled("div", {
          shouldForwardProp: rootShouldForwardProp,
          name: "MuiDrawer",
          slot: "Docked",
          skipVariantsResolver: false,
          overridesResolver
        })({
          flex: "0 0 auto"
        });
        const DrawerPaper = styled(Paper, {
          name: "MuiDrawer",
          slot: "Paper",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.paper, styles[`paperAnchor${capitalize(ownerState.anchor)}`], ownerState.variant !== "temporary" && styles[`paperAnchorDocked${capitalize(ownerState.anchor)}`]];
          }
        })(({
          theme,
          ownerState
        }) => _extends({
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          flex: "1 0 auto",
          zIndex: (theme.vars || theme).zIndex.drawer,
          // Add iOS momentum scrolling for iOS < 13.0
          WebkitOverflowScrolling: "touch",
          // temporary style
          position: "fixed",
          top: 0,
          // We disable the focus ring for mouse, touch and keyboard users.
          // At some point, it would be better to keep it for keyboard users.
          // :focus-ring CSS pseudo-class will help.
          outline: 0
        }, ownerState.anchor === "left" && {
          left: 0
        }, ownerState.anchor === "top" && {
          top: 0,
          left: 0,
          right: 0,
          height: "auto",
          maxHeight: "100%"
        }, ownerState.anchor === "right" && {
          right: 0
        }, ownerState.anchor === "bottom" && {
          top: "auto",
          left: 0,
          bottom: 0,
          right: 0,
          height: "auto",
          maxHeight: "100%"
        }, ownerState.anchor === "left" && ownerState.variant !== "temporary" && {
          borderRight: `1px solid ${(theme.vars || theme).palette.divider}`
        }, ownerState.anchor === "top" && ownerState.variant !== "temporary" && {
          borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
        }, ownerState.anchor === "right" && ownerState.variant !== "temporary" && {
          borderLeft: `1px solid ${(theme.vars || theme).palette.divider}`
        }, ownerState.anchor === "bottom" && ownerState.variant !== "temporary" && {
          borderTop: `1px solid ${(theme.vars || theme).palette.divider}`
        }));
        const oppositeDirection = {
          left: "right",
          right: "left",
          top: "down",
          bottom: "up"
        };
        function isHorizontal(anchor) {
          return ["left", "right"].indexOf(anchor) !== -1;
        }
        function getAnchor({
          direction
        }, anchor) {
          return direction === "rtl" && isHorizontal(anchor) ? oppositeDirection[anchor] : anchor;
        }
        const Drawer = /* @__PURE__ */reactExports.forwardRef(function Drawer2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiDrawer"
          });
          const theme = useTheme();
          const isRtl = useRtl();
          const defaultTransitionDuration = {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen
          };
          const _props$anchor = props.anchor,
            anchorProp = _props$anchor === void 0 ? "left" : _props$anchor,
            BackdropProps = props.BackdropProps,
            children = props.children,
            className = props.className,
            _props$elevation = props.elevation,
            elevation = _props$elevation === void 0 ? 16 : _props$elevation,
            _props$hideBackdrop = props.hideBackdrop,
            hideBackdrop = _props$hideBackdrop === void 0 ? false : _props$hideBackdrop,
            _props$ModalProps = props.ModalProps,
            _props$ModalProps2 = _props$ModalProps === void 0 ? {} : _props$ModalProps,
            BackdropPropsProp = _props$ModalProps2.BackdropProps,
            onClose = props.onClose,
            _props$open = props.open,
            open = _props$open === void 0 ? false : _props$open,
            _props$PaperProps = props.PaperProps,
            PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
            SlideProps = props.SlideProps,
            _props$TransitionComp2 = props.TransitionComponent,
            TransitionComponent = _props$TransitionComp2 === void 0 ? Slide : _props$TransitionComp2,
            _props$transitionDura = props.transitionDuration,
            transitionDuration = _props$transitionDura === void 0 ? defaultTransitionDuration : _props$transitionDura,
            _props$variant = props.variant,
            variant = _props$variant === void 0 ? "temporary" : _props$variant,
            ModalProps = _objectWithoutPropertiesLoose(props.ModalProps, _excluded),
            other = _objectWithoutPropertiesLoose(props, _excluded2);
          const mounted = reactExports.useRef(false);
          reactExports.useEffect(() => {
            mounted.current = true;
          }, []);
          const anchorInvariant = getAnchor({
            direction: isRtl ? "rtl" : "ltr"
          }, anchorProp);
          const anchor = anchorProp;
          const ownerState = _extends({}, props, {
            anchor,
            elevation,
            open,
            variant
          }, other);
          const classes = useUtilityClasses(ownerState);
          const drawer = /* @__PURE__ */jsxRuntimeExports.jsx(DrawerPaper, _extends({
            elevation: variant === "temporary" ? elevation : 0,
            square: true
          }, PaperProps, {
            className: clsx(classes.paper, PaperProps.className),
            ownerState,
            children
          }));
          if (variant === "permanent") {
            return /* @__PURE__ */jsxRuntimeExports.jsx(DrawerDockedRoot, _extends({
              className: clsx(classes.root, classes.docked, className),
              ownerState,
              ref
            }, other, {
              children: drawer
            }));
          }
          const slidingDrawer = /* @__PURE__ */jsxRuntimeExports.jsx(TransitionComponent, _extends({
            in: open,
            direction: oppositeDirection[anchorInvariant],
            timeout: transitionDuration,
            appear: mounted.current
          }, SlideProps, {
            children: drawer
          }));
          if (variant === "persistent") {
            return /* @__PURE__ */jsxRuntimeExports.jsx(DrawerDockedRoot, _extends({
              className: clsx(classes.root, classes.docked, className),
              ownerState,
              ref
            }, other, {
              children: slidingDrawer
            }));
          }
          return /* @__PURE__ */jsxRuntimeExports.jsx(DrawerRoot, _extends({
            BackdropProps: _extends({}, BackdropProps, BackdropPropsProp, {
              transitionDuration
            }),
            className: clsx(classes.root, classes.modal, className),
            open,
            ownerState,
            onClose,
            hideBackdrop,
            ref
          }, other, ModalProps, {
            children: slidingDrawer
          }));
        });
        const mainContainer = "_mainContainer_1oyjx_1";
        const surveyDesignError = "_surveyDesignError_1oyjx_7";
        const goBack = "_goBack_1oyjx_17";
        const styles$9 = {
          mainContainer: mainContainer,
          surveyDesignError: surveyDesignError,
          goBack: goBack
        };
        const FORM_ID = "qlarr-form";
        const content = "_content_ukoxz_1";
        const question = "_question_ukoxz_8";
        const required = "_required_ukoxz_12";
        const header = "_header_ukoxz_16";
        const textDescription$1 = "_textDescription_ukoxz_20";
        const groupQuestion = "_groupQuestion_ukoxz_25";
        const styles$8 = {
          content: content,
          question: question,
          required: required,
          header: header,
          textDescription: textDescription$1,
          groupQuestion: groupQuestion
        };
        const wrapper = "_wrapper_1hpga_1";
        const icon = "_icon_1hpga_11";
        const styles$7 = {
          wrapper: wrapper,
          icon: icon
        };
        function ValidationItem(props) {
          const _useTranslation = useTranslation(["run"]),
            t = _useTranslation.t;
          function messages() {
            let validationMessage = "";
            if (props.validation.content && props.validation.isCustomErrorActive) {
              validationMessage = props.validation.content;
            } else {
              var translationKey = props.name.replace(/[0-9]/g, "");
              validationMessage = t(translationKey, _objectSpread({}, props.validation));
            }
            if (validationMessage) {
              return /* @__PURE__ */jsxRuntimeExports.jsxs(Box$1, {
                sx: {
                  color: "error.main"
                },
                className: styles$7.wrapper,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(ErrorOutlineOutlined, {}), validationMessage]
              });
            } else {
              return "";
            }
          }
          return messages();
        }
        function Validation(props) {
          const selectValidation = state => (props.component.validation ? state.runState.values[props.component.qualifiedCode] : {}) || {};
          const captureValidation = createSelector([selectValidation], selectedState => {
            var obj = {};
            Object.keys(props.component.validation || {}).forEach(key => {
              var value = selectedState[key];
              if (value) {
                obj[key] = value;
              }
            });
            return obj;
          });
          const validation = useSelector(captureValidation);
          const messages = () => {
            if (props.component.validation) {
              let array = Object.keys(props.component.validation).filter(key => validation[key]);
              let limit = props.limit ? props.limit : array.length;
              return array.slice(0, limit).map((key, index) => {
                return /* @__PURE__ */jsxRuntimeExports.jsx(ValidationItem, {
                  name: key,
                  validation: props.component.validation[key]
                }, index);
              });
            } else {
              return "";
            }
          };
          return messages();
        }
        const DateTimeQuestion = React.lazy(() => __vitePreload(() => module.import('./DateTimeQuestion-legacy-BIQYr8uK.js'), false ? __VITE_PRELOAD__ : void 0));
        const SCQ = React.lazy(() => __vitePreload(() => module.import('./Scq-legacy-Bf1fyyUZ.js'), false ? __VITE_PRELOAD__ : void 0));
        const SCQArray = React.lazy(() => __vitePreload(() => module.import('./SCQArray-legacy-B-RkEJwv.js'), false ? __VITE_PRELOAD__ : void 0));
        const Signature = React.lazy(() => __vitePreload(() => module.import('./Signature-legacy-DHnadtCI.js'), false ? __VITE_PRELOAD__ : void 0));
        const PhotoCapture = React.lazy(() => __vitePreload(() => module.import('./PhotoCapture-legacy-CGEdhiPt.js'), false ? __VITE_PRELOAD__ : void 0));
        const VideoCapture = React.lazy(() => __vitePreload(() => module.import('./VideoCapture-legacy-CfUqkyYa.js'), false ? __VITE_PRELOAD__ : void 0));
        const MCQ = React.lazy(() => __vitePreload(() => module.import('./Mcq-legacy-CpDimLrm.js'), false ? __VITE_PRELOAD__ : void 0));
        const NumberQuestion = React.lazy(() => __vitePreload(() => module.import('./NumberQuestion-legacy-CmhbRKnJ.js'), false ? __VITE_PRELOAD__ : void 0));
        const TextQuestion = React.lazy(() => __vitePreload(() => module.import('./TextQuestion-legacy-CO8YNVnf.js'), false ? __VITE_PRELOAD__ : void 0));
        const VideoDisplay = React.lazy(() => __vitePreload(() => module.import('./VideoDisplay-legacy-BHwGZz-Z.js'), false ? __VITE_PRELOAD__ : void 0));
        const ImageDisplay = React.lazy(() => __vitePreload(() => module.import('./ImageDisplay-legacy-BHgYmbrH.js'), false ? __VITE_PRELOAD__ : void 0));
        const ImageRanking = React.lazy(() => __vitePreload(() => module.import('./ImageRanking-legacy-HvMr3I9y.js'), false ? __VITE_PRELOAD__ : void 0));
        const ParagraphQuestion = React.lazy(() => __vitePreload(() => module.import('./ParagraphQuestion-legacy-txshtv8r.js'), false ? __VITE_PRELOAD__ : void 0));
        const Barcode = React.lazy(() => __vitePreload(() => module.import('./Barcode-legacy-DhHj1Qtv.js'), false ? __VITE_PRELOAD__ : void 0));
        const EmailQuestion = React.lazy(() => __vitePreload(() => module.import('./EmailQuestion-legacy-hQYQkLGk.js'), false ? __VITE_PRELOAD__ : void 0));
        const ImageScq = React.lazy(() => __vitePreload(() => module.import('./ImageScq-legacy-Bp7kU4jQ.js'), false ? __VITE_PRELOAD__ : void 0));
        const ImageMcq = React.lazy(() => __vitePreload(() => module.import('./ImageMcq-legacy-D94Klv-S.js'), false ? __VITE_PRELOAD__ : void 0));
        const Ranking = React.lazy(() => __vitePreload(() => module.import('./Ranking-legacy-D0fZiOkY.js'), false ? __VITE_PRELOAD__ : void 0));
        const NPS = React.lazy(() => __vitePreload(() => module.import('./NPS-legacy-DON226oY.js'), false ? __VITE_PRELOAD__ : void 0));
        const Content$2 = React.lazy(() => __vitePreload(() => Promise.resolve().then(() => index$1), false ? __VITE_PRELOAD__ : void 0));
        const FileUpload = React.lazy(() => __vitePreload(() => module.import('./FileUpload-legacy-vrGF8TuQ.js'), false ? __VITE_PRELOAD__ : void 0));
        const IconScq = React.lazy(() => __vitePreload(() => module.import('./IconScq-legacy-DJOZ4GVy.js'), false ? __VITE_PRELOAD__ : void 0));
        const IconMcq = React.lazy(() => __vitePreload(() => module.import('./IconMcq-legacy-ysjdrveM.js'), false ? __VITE_PRELOAD__ : void 0));
        const SCQIconArray = React.lazy(() => __vitePreload(() => module.import('./SCQIconArray-legacy-Eymmu0eF.js'), false ? __VITE_PRELOAD__ : void 0));
        const Question = reactExports.forwardRef((props, ref) => {
          var _props$component$cont, _props$component$cont2, _props$component$cont3, _props$component$cont4;
          console.debug("rendering: " + props.component.code);
          const relevance = useSelector(state => {
            let questionState = state.runState.values[props.component.qualifiedCode];
            return typeof (questionState === null || questionState === void 0 ? void 0 : questionState.relevance) === "undefined" || (questionState === null || questionState === void 0 ? void 0 : questionState.relevance);
          });
          const theme = useTheme();
          const showDescription = props.component.showDescription && ((_props$component$cont = props.component.content) === null || _props$component$cont === void 0 ? void 0 : _props$component$cont.description) && stripTags(props.component.content.description).length > 0;
          const showTitle = ((_props$component$cont2 = props.component.content) === null || _props$component$cont2 === void 0 ? void 0 : _props$component$cont2.label) && stripTags((_props$component$cont3 = props.component.content) === null || _props$component$cont3 === void 0 ? void 0 : _props$component$cont3.label).length > 0;
          const showHeader = showTitle || showDescription;
          const showQuestion = () => {
            switch (props.component.type) {
              case "date_time":
                return /* @__PURE__ */jsxRuntimeExports.jsx(DateTimeQuestion, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "date":
                return /* @__PURE__ */jsxRuntimeExports.jsx(DateTimeQuestion, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "time":
                return /* @__PURE__ */jsxRuntimeExports.jsx(DateTimeQuestion, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "scq":
                return /* @__PURE__ */jsxRuntimeExports.jsx(SCQ, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "scq_array":
                return /* @__PURE__ */jsxRuntimeExports.jsx(SCQArray, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "scq_icon_array":
                return /* @__PURE__ */jsxRuntimeExports.jsx(SCQIconArray, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "file_upload":
                return /* @__PURE__ */jsxRuntimeExports.jsx(FileUpload, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "signature":
                return /* @__PURE__ */jsxRuntimeExports.jsx(Signature, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "photo_capture":
                return /* @__PURE__ */jsxRuntimeExports.jsx(PhotoCapture, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "video_capture":
                return /* @__PURE__ */jsxRuntimeExports.jsx(VideoCapture, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "mcq":
                return /* @__PURE__ */jsxRuntimeExports.jsx(MCQ, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "number":
                return /* @__PURE__ */jsxRuntimeExports.jsx(NumberQuestion, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "text":
                return /* @__PURE__ */jsxRuntimeExports.jsx(TextQuestion, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "video_display":
                return /* @__PURE__ */jsxRuntimeExports.jsx(VideoDisplay, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "image_display":
                return /* @__PURE__ */jsxRuntimeExports.jsx(ImageDisplay, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "image_ranking":
                return /* @__PURE__ */jsxRuntimeExports.jsx(ImageRanking, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "paragraph":
                return /* @__PURE__ */jsxRuntimeExports.jsx(ParagraphQuestion, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "barcode":
                return /* @__PURE__ */jsxRuntimeExports.jsx(Barcode, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "email":
                return /* @__PURE__ */jsxRuntimeExports.jsx(EmailQuestion, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "image_scq":
                return /* @__PURE__ */jsxRuntimeExports.jsx(ImageScq, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "icon_scq":
                return /* @__PURE__ */jsxRuntimeExports.jsx(IconScq, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "icon_mcq":
                return /* @__PURE__ */jsxRuntimeExports.jsx(IconMcq, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "image_mcq":
                return /* @__PURE__ */jsxRuntimeExports.jsx(ImageMcq, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "ranking":
                return /* @__PURE__ */jsxRuntimeExports.jsx(Ranking, {
                  component: props.component
                }, props.component.qualifiedCode);
              case "nps":
                return /* @__PURE__ */jsxRuntimeExports.jsx(NPS, {
                  component: props.component
                }, props.component.qualifiedCode);
              default:
                return "";
            }
          };
          return relevance ? /* @__PURE__ */jsxRuntimeExports.jsxs(QuestionWrapper, {
            qualifiedCode: props.component.qualifiedCode,
            ref,
            children: [showHeader && /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
              children: [showTitle && /* @__PURE__ */jsxRuntimeExports.jsx(Box$1, {
                style: {
                  fontFamily: theme.textStyles.question.font,
                  color: theme.textStyles.text.color,
                  fontSize: theme.textStyles.question.size
                },
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Content$2, {
                  className: `${styles$8.content} ${styles$8.question}`,
                  name: "label",
                  lang: props.lang,
                  elementCode: props.component.qualifiedCode,
                  content: (_props$component$cont4 = props.component.content) === null || _props$component$cont4 === void 0 ? void 0 : _props$component$cont4.label
                })
              }), showDescription && /* @__PURE__ */jsxRuntimeExports.jsx(Box$1, {
                className: styles$8.textDescription,
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Content$2, {
                  elementCode: props.component.code,
                  name: "description",
                  lang: props.lang,
                  content: props.component.content.description
                })
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx(reactExports.Suspense, {
              fallback: /* @__PURE__ */jsxRuntimeExports.jsx(LoadingDots, {}),
              children: showQuestion()
            }), /* @__PURE__ */jsxRuntimeExports.jsx(reactExports.Suspense, {
              fallback: /* @__PURE__ */jsxRuntimeExports.jsx(LoadingDots, {}),
              children: /* @__PURE__ */jsxRuntimeExports.jsx(QuestionValidation, {
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
          return !showValidation ? /* @__PURE__ */jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {}) : /* @__PURE__ */jsxRuntimeExports.jsx(Validation, {
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
          return /* @__PURE__ */jsxRuntimeExports.jsx(Box$1, {
            sx: {
              borderColor: invalid ? "error.main" : "grey.500"
            },
            className: `${styles$8.groupQuestion} ${invalid ? "invalidQuestion" : ""}`,
            children: props.children
          });
        });
        function Content(props) {
          const isComplex = props.content && props.content.search(/data-instruction/) >= 0;
          const state = useSelector(state2 => {
            if (!props.content || !isComplex || !state2.runState.values[props.elementCode] || !props.name || !props.lang) {
              return void 0;
            } else {
              return state2.runState.values[props.elementCode][`reference_${props.name}_${props.lang}`];
            }
          });
          const lang = useSelector(state2 => {
            return state2.runState.values["Survey"].lang;
          });
          const isRtl = rtlLanguage.includes(lang);
          if (!props.content) {
            return "";
          } else if (!isComplex) {
            return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: `${isRtl ? "rtl" : "ltr"} ql-editor no-padding`,
              dangerouslySetInnerHTML: {
                __html: props.content
              }
            });
          } else {
            return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: `${isRtl ? "rtl" : "ltr"} ql-editor no-padding`,
              dangerouslySetInnerHTML: {
                __html: replaceMentions(props.content, state)
              }
            });
          }
        }
        const Content$1 = React.memo(Content);
        function replaceMentions(html, referenceValue) {
          let doc = document.createElement("div");
          doc.innerHTML = html;
          doc.querySelectorAll("span[data-instruction]").forEach(function (el) {
            let attribute = el.getAttribute("data-instruction");
            if (attribute && referenceValue) {
              let attrArray = attribute.split(".");
              if (attrArray && attrArray.length == 2 && referenceValue[attrArray[0]] && referenceValue[attrArray[0]][attrArray[1]]) {
                el.replaceWith(referenceValue[attrArray[0]][attrArray[1]]);
              } else {
                el.replaceWith("");
              }
            } else {
              el.replaceWith("");
            }
          });
          return doc.innerHTML;
        }
        const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
          __proto__: null,
          default: Content$1
        }, Symbol.toStringTag, {
          value: 'Module'
        }));
        const textDescription = "_textDescription_jd8f0_1";
        const titleRow = "_titleRow_jd8f0_6";
        const groupHeader = "_groupHeader_jd8f0_16";
        const topLevel = "_topLevel_jd8f0_20";
        const styles$6 = {
          textDescription: textDescription,
          titleRow: titleRow,
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
          const showGroup = () => {
            var _props$group$content, _props$group$content2, _props$group$content3;
            return /* @__PURE__ */jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
              children: /* @__PURE__ */jsxRuntimeExports.jsxs(Box$1, {
                className: styles$6.topLevel,
                sx: {
                  borderRadius: "4px",
                  backgroundColor: theme.palette.background.paper
                },
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: styles$6.groupHeader,
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                    style: {
                      fontFamily: theme.textStyles.group.font,
                      color: theme.textStyles.group.color,
                      fontSize: theme.textStyles.group.size
                    },
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(Content$1, {
                      elementCode: props.group.code,
                      name: "label",
                      lang: props.lang,
                      content: (_props$group$content = props.group.content) === null || _props$group$content === void 0 ? void 0 : _props$group$content.label
                    })
                  }), props.group.showDescription && ((_props$group$content2 = props.group.content) === null || _props$group$content2 === void 0 ? void 0 : _props$group$content2.description) && /* @__PURE__ */jsxRuntimeExports.jsx(Box$1, {
                    className: styles$6.textDescription,
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(Content$1, {
                      elementCode: props.group.code,
                      name: "description",
                      lang: props.lang,
                      content: (_props$group$content3 = props.group.content) === null || _props$group$content3 === void 0 ? void 0 : _props$group$content3.description
                    })
                  })]
                }), props.group && props.group.questions ? props.group.questions.filter(quest => quest.inCurrentNavigation).map(quest => /* @__PURE__ */jsxRuntimeExports.jsx(Question$1, {
                  component: quest,
                  lang: props.lang
                }, quest.code)) : ""]
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
          const state = useSelector(state2 => {
            return {
              has_previous: state2.runState.values.Survey.has_previous && state2.runState.data.survey.allowPrevious,
              has_next: state2.runState.values.Survey.has_next,
              can_save: state2.runState.data.survey.allowIncomplete,
              has_errors: state2.runState.values.Survey.show_errors
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const _useTranslation2 = useTranslation("run"),
            t = _useTranslation2.t,
            i18n = _useTranslation2.i18n;
          const isRtl = rtlLanguage.includes(i18n.language);
          const previous = () => {
            dispatch(navigatePrevious());
          };
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
          return props.navigationIndex.name == "end" ? "" : /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: styles$5.buttonContainer,
            children: [state.has_previous ? /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
              variant: "contained",
              className: isRtl ? "ml-14" : "mr-14",
              onClick: () => {
                previous();
              },
              children: t("previous")
            }) : "", /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
              variant: "contained",
              onClick: () => {
                next();
              },
              children: state.has_next ? t("next") : t("finish")
            })]
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
        const surveyContent = "_surveyContent_jntaj_1";
        const surveyGroups = "_surveyGroups_jntaj_5";
        const cardImage = "_cardImage_jntaj_12";
        const groupContianer = "_groupContianer_jntaj_21";
        const stepperContent = "_stepperContent_jntaj_26";
        const menuButton = "_menuButton_jntaj_37";
        const styles$4 = {
          surveyContent: surveyContent,
          surveyGroups: surveyGroups,
          cardImage: cardImage,
          groupContianer: groupContianer,
          stepperContent: stepperContent,
          menuButton: menuButton
        };
        function Survey() {
          var _survey$resources;
          const theme = useTheme();
          const navigationIndex = useSelector(state => {
            var _state$runState$data;
            return (_state$runState$data = state.runState.data) === null || _state$runState$data === void 0 ? void 0 : _state$runState$data.navigationIndex;
          }, shallowEqual);
          const survey = useSelector(state => {
            var _state$runState$data2;
            return (_state$runState$data2 = state.runState.data) === null || _state$runState$data2 === void 0 ? void 0 : _state$runState$data2.survey;
          }, shallowEqual);
          const lang = useSelector(state => {
            var _state$runState$data3;
            return (_state$runState$data3 = state.runState.data) === null || _state$runState$data3 === void 0 ? void 0 : _state$runState$data3.lang;
          }, shallowEqual);
          return /* @__PURE__ */jsxRuntimeExports.jsx(DndProvider, {
            backend: isTouchDevice() ? TouchBackend : HTML5Backend,
            children: /* @__PURE__ */jsxRuntimeExports.jsx("form", {
              id: FORM_ID,
              style: {
                fontFamily: theme.textStyles.text.font,
                color: theme.textStyles.text.color,
                fontSize: theme.textStyles.text.size
              },
              children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: styles$4.surveyGroups,
                children: [(_survey$resources = survey.resources) !== null && _survey$resources !== void 0 && _survey$resources.headerImage ? /* @__PURE__ */jsxRuntimeExports.jsx(CardMedia, {
                  className: styles$4.cardImage,
                  component: "img",
                  image: buildResourceUrl(survey.resources.headerImage)
                }) : null, survey && survey.groups ? survey.groups.filter(group => group.inCurrentNavigation).map((group, index) => /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  id: `group-${index}`,
                  "data-index": index,
                  className: styles$4.groupContianer,
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(Group$1, {
                    group,
                    lang: lang.code,
                    groupIndex: index
                  })
                }, group.code)) : "", /* @__PURE__ */jsxRuntimeExports.jsx(Navigation, {
                  navigationIndex
                })]
              })
            })
          });
        }
        const loadingWrapper = "_loadingWrapper_1p71l_1";
        const loadingDots = "_loadingDots_1p71l_14";
        const l1 = "_l1_1p71l_1";
        const styles$3 = {
          loadingWrapper: loadingWrapper,
          loadingDots: loadingDots,
          l1: l1
        };
        function RunLoadingDots() {
          var _theme$palette;
          const theme = useTheme$1();
          const isLoading = useSelector(state => state.templateState.isLoading);
          const _reactExports$useStat = reactExports.useState(false),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            delayedLoading = _reactExports$useStat2[0],
            setDelayedLoading = _reactExports$useStat2[1];
          const _reactExports$useStat3 = reactExports.useState(false),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            forceLoading = _reactExports$useStat4[0],
            setForceLoading = _reactExports$useStat4[1];
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
          return delayedLoading ? /* @__PURE__ */jsxRuntimeExports.jsx(Box$1, {
            className: styles$3.loadingWrapper,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(Box$1, {
              style: {
                background: `radial-gradient(circle closest-side, ${theme === null || theme === void 0 || (_theme$palette = theme.palette) === null || _theme$palette === void 0 || (_theme$palette = _theme$palette.primary) === null || _theme$palette === void 0 ? void 0 : _theme$palette.main} 90%, #0000) 0 / calc(100% / 3) 100% space`
              },
              className: styles$3.loadingDots
            })
          }) : /* @__PURE__ */jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
        }
        const drawer = "_drawer_16lbk_1";
        const drawerHeader = "_drawerHeader_16lbk_5";
        const styles$2 = {
          drawer: drawer,
          drawerHeader: drawerHeader
        };
        const groupCard = "_groupCard_18q7o_1";
        const groupTitle = "_groupTitle_18q7o_6";
        const questionTitle = "_questionTitle_18q7o_10";
        const questionIcon = "_questionIcon_18q7o_16";
        const bullet = "_bullet_18q7o_23";
        const redAsterix = "_redAsterix_18q7o_29";
        const truncatedTwoLines = "_truncatedTwoLines_18q7o_34";
        const styles$1 = {
          groupCard: groupCard,
          groupTitle: groupTitle,
          questionTitle: questionTitle,
          questionIcon: questionIcon,
          bullet: bullet,
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
            return state.runState.data.survey.allowJump;
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
          return /* @__PURE__ */jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
            children: props.survey && props.survey.groups ? props.survey.groups.filter(group => relevance_map[group.code] && group.groupType != "END").map(group => {
              var _group$content;
              return /* @__PURE__ */jsxRuntimeExports.jsxs(Card, {
                onClick: () => onGroupClicked(group.code),
                className: styles$1.groupCard,
                style: {
                  backgroundColor: isCurrentGroup(group.code) ? "beige" : theme.palette.background.paper,
                  cursor: isGroupClickable(group.code) ? "pointer" : "default"
                },
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                  className: styles$1.groupTitle,
                  children: [stripTags((_group$content = group.content) === null || _group$content === void 0 ? void 0 : _group$content.label), " "]
                }), group.questions.filter(question => relevance_map[question.code]).map(question => {
                  var _question$content;
                  return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                    onClick: () => onQuestionClicked(question.code),
                    className: styles$1.questionTitle,
                    style: {
                      backgroundColor: isCurrentQuestion(question.code) ? "beige" : "inherit",
                      cursor: isGroupClickable(group.code) ? "inherit" : isQuestionClickable(group.code) ? "pointer" : "default"
                    },
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      className: styles$1.questionIcon,
                      children: questionIconByType(question.type)
                    }), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                      className: styles$1.truncatedTwoLines,
                      children: stripTags((_question$content = question.content) === null || _question$content === void 0 ? void 0 : _question$content.label)
                    }), !validity_map[question.code] && /* @__PURE__ */jsxRuntimeExports.jsx("span", {
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
            var _state$runState$data4;
            return (_state$runState$data4 = state.runState.data) === null || _state$runState$data4 === void 0 ? void 0 : _state$runState$data4.navigationIndex;
          }, shallowEqual);
          const survey = useSelector(state => {
            var _state$runState$data5;
            return (_state$runState$data5 = state.runState.data) === null || _state$runState$data5 === void 0 ? void 0 : _state$runState$data5.survey;
          }, shallowEqual);
          return /* @__PURE__ */jsxRuntimeExports.jsx(Drawer, {
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
            children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: styles$2.drawer,
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: styles$2.drawerHeader,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                  variant: "h6",
                  className: styles$2.drawerTitle,
                  children: t("survey_navigation")
                }), /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                  className: styles$2.closeButton,
                  onClick: toggleDrawer(false),
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(Close, {})
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsx(SurveyIndex, {
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
        function ChangeLang(props) {
          useSelector(state2 => {
            return {
              navigate: state2.runState.navigate,
              lang: state2.runState.lang
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const _useTranslation3 = useTranslation("run"),
            t = _useTranslation3.t;
          return props.additionalLang && props.additionalLang.length ? /* @__PURE__ */jsxRuntimeExports.jsx(FormControl, {
            style: {
              maxWidth: "250px"
            },
            variant: "standard",
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(Select, {
              labelId: "change-lang-label",
              sx: {
                backgroundColor: "background.paper",
                color: "primary.main",
                paddingLeft: "8px"
              },
              id: "ChangeLang",
              label: t("lang"),
              value: props.lang.code,
              onChange: event => {
                dispatch(langChange({
                  lang: event.target.value
                }));
              },
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(MenuItem, {
                value: props.lang.code,
                children: props.lang.name
              }), props.additionalLang ? props.additionalLang.map((lang, index) => {
                return /* @__PURE__ */jsxRuntimeExports.jsx(MenuItem, {
                  value: lang.code,
                  children: lang.name
                }, index);
              }) : ""]
            })
          }) : /* @__PURE__ */jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
        }
        const toolbar = "_toolbar_13q1d_1";
        const styles = {
          toolbar: toolbar
        };
        function SurveyAppBar({
          toggleDrawer
        }) {
          const lang = useSelector(state => {
            var _state$runState$data6;
            return (_state$runState$data6 = state.runState.data) === null || _state$runState$data6 === void 0 ? void 0 : _state$runState$data6.lang;
          }, shallowEqual);
          const additionalLang = useSelector(state => {
            var _state$runState$data7;
            return (_state$runState$data7 = state.runState.data) === null || _state$runState$data7 === void 0 ? void 0 : _state$runState$data7.additionalLang;
          }, shallowEqual);
          const theme = useTheme$1();
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Toolbar, {
            sx: {
              backgroundColor: theme.palette.background.default
            },
            className: styles.toolbar,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
              color: "primary",
              size: "large",
              edge: "start",
              "aria-label": "menu",
              sx: {
                backgroundColor: theme.palette.background.paper
              },
              onClick: toggleDrawer(true),
              children: /* @__PURE__ */jsxRuntimeExports.jsx(default_1, {})
            }), /* @__PURE__ */jsxRuntimeExports.jsx(ChangeLang, {
              lang,
              additionalLang
            })]
          });
        }
        function RunSurvey({
          preview,
          guest,
          mode,
          resume = false,
          responseId
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
          const containerRef = reactExports.useRef(null);
          const surveyTheme = useSelector(state => {
            var _state$runState$data8;
            return (_state$runState$data8 = state.runState.data) === null || _state$runState$data8 === void 0 || (_state$runState$data8 = _state$runState$data8.survey) === null || _state$runState$data8 === void 0 ? void 0 : _state$runState$data8.theme;
          }, isEquivalent);
          const navResponseId = useSelector(state => {
            var _state$runState$data9;
            return (_state$runState$data9 = state.runState.data) === null || _state$runState$data9 === void 0 ? void 0 : _state$runState$data9.responseId;
          });
          useSelector(state => {
            var _state$runState$data10;
            return (_state$runState$data10 = state.runState.data) === null || _state$runState$data10 === void 0 || (_state$runState$data10 = _state$runState$data10.survey) === null || _state$runState$data10 === void 0 ? void 0 : _state$runState$data10.allowJump;
          }, shallowEqual);
          const backgroundImage = useSelector(state => {
            var _state$runState$data11;
            return (_state$runState$data11 = state.runState.data) === null || _state$runState$data11 === void 0 || (_state$runState$data11 = _state$runState$data11.survey) === null || _state$runState$data11 === void 0 || (_state$runState$data11 = _state$runState$data11.resources) === null || _state$runState$data11 === void 0 ? void 0 : _state$runState$data11.backgroundImage;
          });
          const navigation = useSelector(state => {
            return state.runState.navigation;
          }, isEquivalent);
          const _useTranslation4 = useTranslation("run"),
            t = _useTranslation4.t,
            i18n = _useTranslation4.i18n;
          const dispatch = useDispatch();
          reactExports.useEffect(() => {
            if (navigation) {
              continueNav(navigation, navResponseId);
            }
          }, [navigation]);
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
            startNavigation(runService, lang, preview, guest, mode).then(response => {
              setRender(true);
              dispatch(stateReceived({
                response,
                preview
              }));
              sessionStorage.setItem("responseId", response.responseId);
              i18n.changeLanguage(response.lang.code);
              dispatch(setFetching(false));
            }).catch(err => {
              handleError(err);
            });
          };
          const continueNav = (payload, responseId2) => {
            dispatch(setFetching(true));
            continueNavigation(runService, payload, responseId2, preview, guest, mode).then(response => {
              setRender(true);
              dispatch(stateReceived({
                response,
                preview
              }));
              sessionStorage.setItem("responseId", response.responseId);
              i18n.changeLanguage(response.lang.code);
              dispatch(setFetching(false));
            }).catch(err => {
              console.log(err);
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
            loadScript(runService, preview, guest).then(() => {
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
          const navigate = useNavigate();
          const toggleDrawer = open => event => {
            if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
              return;
            }
            setExpanded(open ? EXPAND : COLLAPSE);
          };
          const backgroundStyle = backgroundImage ? {
            backgroundImage: `url(${buildResourceUrl(backgroundImage)})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            // backgroundSize: "100% 100%",
            backgroundPosition: "center"
          } : {};
          return /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(CacheProvider, {
              value: cacheRtlMemo,
              children: /* @__PURE__ */jsxRuntimeExports.jsxs(ThemeProvider, {
                theme,
                children: [error && /* @__PURE__ */jsxRuntimeExports.jsx(ErrorLayout, {
                  error,
                  setErrorSeen: () => {
                    setError(null);
                  }
                }), render && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                  className: styles$9.mainContainer,
                  ref: containerRef,
                  style: _objectSpread({
                    backgroundColor: theme.palette.background.default,
                    fontFamily: theme.textStyles.text.font,
                    color: theme.textStyles.text.color,
                    fontSize: theme.textStyles.text.size
                  }, backgroundStyle),
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(SurveyAppBar, {
                    toggleDrawer
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(SurveyMemo, {}, "Survey"), /* @__PURE__ */jsxRuntimeExports.jsx(SurveyDrawer$1, {
                    expanded,
                    toggleDrawer,
                    t
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsx(RunLoadingDots, {})]
              })
            }), inlineError && /* @__PURE__ */jsxRuntimeExports.jsx(Box$1, {
              style: {
                height: "100%",
                overflow: "auto"
              },
              children: /* @__PURE__ */jsxRuntimeExports.jsxs(CompactLayout, {
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                  variant: "h3",
                  paragraph: true,
                  children: t("error")
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                  sx: {
                    color: "text.secondary"
                  },
                  children: t("processed_errors." + inlineError.name)
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Image, {
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
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                  fullWidth: true,
                  size: "large",
                  color: "inherit",
                  variant: "contained",
                  className: styles$9.goBack,
                  onClick: () => navigate(-1),
                  children: t("goBack")
                })]
              })
            })]
          });
        }
        const SurveyMemo = React.memo(Survey);
        const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
          __proto__: null,
          default: RunSurvey
        }, Symbol.toStringTag, {
          value: 'Module'
        }));
        exports("i", index);
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-CAdDVn6v.js.map
