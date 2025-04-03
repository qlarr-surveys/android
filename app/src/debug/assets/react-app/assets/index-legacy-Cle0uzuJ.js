;
(function () {
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  System.register(['./index-legacy-BLatMfxz.js', './index-legacy-6M8O2tsW.js', './index-legacy-CrjT7QZL.js', './Web-legacy-G20LTzwp.js', './survey-legacy-CmPJYFAs.js', './use-service-legacy-DLuVKbJp.js', './DateUtils-legacy-Dg58phWT.js', './index-legacy-C3hI9Q0o.js', './common-legacy-BfMJ8X0r.js', './Tabs-legacy-DSWwlWIj.js', './TextField-legacy-Cn7jw8uN.js', './index-legacy-C4Gq-aSS.js', './dayjs.min-legacy-DVnPMy8l.js', './DateTimePicker-legacy-FFoNYnkB.js', './InputAdornment-legacy-CCb1yK4O.js', './Checkbox-legacy-B_Sa2GUd.js', './SwitchBase-legacy-C9xQX8jx.js', './radioClasses-legacy-DphQBUmK.js', './tableRowClasses-legacy-BNdXjQON.js', './FormControlLabel-legacy-CA95rTY_.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports, React, reactExports, Box, interopRequireDefaultExports, useTheme, HelpOutline, classNames, Accordion, AccordionSummary, default_1$4, AccordionDetails, SurveyActiveFromTo, isSurveyAdmin, RHFSelect, CustomTooltip, DialogTitle, default_1$3, RHFSwitch, SURVEY_STATUS, SURVEY_MODE, createSvgIcon, useTranslation, useSelector, useDispatch, Typography, IconButton, surveyAttributeChanged, requireCreateSvgIcon, propTypesExports, Button, SurveyIcon, useService, setSaving, newVersionReceived, localDateToServerDateTime, SuccessSnackbar, sharingUrl, Dialog, DialogContent, TextField;
    return {
      setters: [module => {
        jsxRuntimeExports = module.j;
        React = module.R;
        reactExports = module.r;
        Box = module.B;
        interopRequireDefaultExports = module.q;
        useTheme = module.y;
      }, module => {
        HelpOutline = module.H;
        classNames = module.c;
        Accordion = module.A;
        AccordionSummary = module.a;
        default_1$4 = module.d;
        AccordionDetails = module.b;
      }, module => {
        SurveyActiveFromTo = module.S;
      }, module => {
        isSurveyAdmin = module.i;
        RHFSelect = module.e;
        CustomTooltip = module.C;
        DialogTitle = module.D;
        default_1$3 = module.v;
        RHFSwitch = module.t;
      }, module => {
        SURVEY_STATUS = module.a;
        SURVEY_MODE = module.S;
      }, module => {
        createSvgIcon = module.e;
        useTranslation = module.M;
        useSelector = module.H;
        useDispatch = module.R;
        Typography = module.T;
        IconButton = module.I;
        surveyAttributeChanged = module.bX;
        requireCreateSvgIcon = module.K;
        propTypesExports = module.F;
        Button = module.aC;
        SurveyIcon = module.aP;
        useService = module.Q;
        setSaving = module.bY;
        newVersionReceived = module.bZ;
      }, module => {
        localDateToServerDateTime = module.l;
      }, module => {
        SuccessSnackbar = module.S;
      }, module => {
        sharingUrl = module.s;
      }, module => {
        Dialog = module.a;
        DialogContent = module.b;
      }, module => {
        TextField = module.T;
      }, null, null, null, null, null, null, null, null, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._mainContainer_stnvz_1 {\n  padding: 1rem 3rem;\n  height: 100%;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n._loadingWrapper_stnvz_10 {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  padding-top: 100px;\n}\n\n._accordionContainer_stnvz_17._accordionContainer_stnvz_17 {\n  margin: 0px;\n  box-shadow: none;\n  border-radius: 15px;\n  padding: 2rem;\n  width: 100%;\n  background-color: white;\n}\n\n._accordionDetails_stnvz_26 {\n  padding: 1.5rem 4rem;\n}\n\n@media (max-width: 600px) {\n  ._mainContainer_stnvz_1 {\n    padding: 0.5rem;\n  }\n  ._accordionContainer_stnvz_17 {\n    padding: 0.25rem;\n  }\n  ._accordionDetails_stnvz_26 {\n    padding: 1rem;\n  }\n}\n@media (min-width: 601px) and (max-width: 1024px) {\n  ._mainContainer_stnvz_1 {\n    padding: 1rem;\n  }\n  ._accordionContainer_stnvz_17 {\n    padding: 0.75rem;\n  }\n  ._accordionDetails_stnvz_26 {\n    padding: 1.5rem;\n  }\n}\n\n._accordionContainer_stnvz_17:first-of-type {\n  border-radius: 15px;\n}\n._accordionContainer_stnvz_17::before {\n  display: none;\n}\n\n._launchContainer_stnvz_60{\n  background-color: white;\n}._blockItem_zhcyz_1 {\n  flex: 1;\n  display: flex;\n  gap: 15px;\n  height: fit-content;\n  margin-top: 10px;\n}\n\n._errorText_zhcyz_9 {\n  color: #eb5757 !important;\n}\n\n._saveNameButton_zhcyz_13 {\n  vertical-align: bottom;\n}\n\n._box_zhcyz_17 {\n  position: absolute;\n  width: 18rem;\n  z-index: 99;\n  height: 100%;\n}\n\n._generalContainer_zhcyz_24 {\n  padding-bottom: 1rem;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  background-color: white;\n  border-radius: 20px 20px 0px 0px;\n}\n\n._close_zhcyz_34 {\n  padding: 8px;\n  text-align: right;\n}._mainContainer_1siod_1 {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  border-radius: 0px 0px 20px 20px;\n\n}\n\n._defaultUrl_1siod_10 {\n  background-color: #ededed;\n  padding: 1rem;\n  border-radius: 15px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n\n._urlLink_1siod_19._urlLink_1siod_19 {\n  color: black;\n  text-decoration: none;\n}\n\n._socialLink_1siod_24 {\n  justify-content: center;\n  display: flex;\n  gap: 15px;\n}\n\n._iconShareFb_1siod_30 {\n  fill: #3c5997 !important;\n}\n\n._iconShareTw_1siod_34 {\n  fill: #05aced !important;\n}\n\n._iconShareLn_1siod_38 {\n  fill: #027fb1 !important;\n}\n\n._actionButton_1siod_42._actionButton_1siod_42 {\n  display: flex;\n  align-items: center;\n  background-color: #e3e3e3;\n  gap: 1rem;\n  padding: 1rem 1.5rem;\n  border-radius: 20px;\n  font-size: 0.875rem;\n}\n\n._copyButton_1siod_52._copyButton_1siod_52 {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 1.5rem;\n  border-radius: 20px;\n}\n\n._buttonContainer_1siod_60 {\n  display: flex;\n  width: 100%;\n}\n\n@media (max-width: 768px) {\n  ._buttonContainer_1siod_60 {\n    flex-wrap: wrap;\n  }\n}._box_14n5a_1 {\n  margin: auto;\n  max-width: 800px;\n  width: 100%;\n}\n._actionButton_14n5a_6 {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n._publishContainer_14n5a_11 {\n  gap: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 20px;\n}\n._mainContainer_zluda_1 {\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n._boxContainer_zluda_8 {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n._tableBodyCell_zluda_15 {\n  color: \"#1a2052\";\n  font-weight: 500;\n}\n._tableHeaderCell_zluda_19 {\n  color: \"#1a2052\";\n}\n\n._flexContainer_zluda_23 {\n  width: 100%;\n  display: flex;\n  align-items: flex-end;\n  gap: 1rem;\n}\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        const FileDownload = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M19 9h-4V3H9v6H5l7 7zM5 18v2h14v-2z"
        }), 'FileDownload');
        const mainContainer$2 = "_mainContainer_stnvz_1";
        const loadingWrapper = "_loadingWrapper_stnvz_10";
        const accordionContainer = "_accordionContainer_stnvz_17";
        const accordionDetails = "_accordionDetails_stnvz_26";
        const launchContainer = "_launchContainer_stnvz_60";
        const styles$4 = {
          mainContainer: mainContainer$2,
          loadingWrapper: loadingWrapper,
          accordionContainer: accordionContainer,
          accordionDetails: accordionDetails,
          launchContainer: launchContainer
        };
        const blockItem = "_blockItem_zhcyz_1";
        const errorText = "_errorText_zhcyz_9";
        const saveNameButton = "_saveNameButton_zhcyz_13";
        const box$1 = "_box_zhcyz_17";
        const generalContainer = "_generalContainer_zhcyz_24";
        const close = "_close_zhcyz_34";
        const styles$3 = {
          blockItem: blockItem,
          errorText: errorText,
          saveNameButton: saveNameButton,
          box: box$1,
          generalContainer: generalContainer,
          close: close
        };
        const surveyMode_options = [{
          value: SURVEY_MODE.WEB,
          label: `mode.${SURVEY_MODE.WEB}`
        }, {
          value: SURVEY_MODE.OFFLINE,
          label: `mode.${SURVEY_MODE.OFFLINE}`
        }, {
          value: SURVEY_MODE.MIXED,
          label: `mode.${SURVEY_MODE.MIXED}`
        }];
        function EditSurveyGeneral() {
          const _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          const survey = useSelector(state => state.editState.survey);
          const _reactExports$useStat = reactExports.useState(""),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            surveyMode = _reactExports$useStat2[0],
            setSurveyMode = _reactExports$useStat2[1];
          const _reactExports$useStat3 = reactExports.useState(""),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            surveyDateError = _reactExports$useStat4[0],
            setSurveyDateError = _reactExports$useStat4[1];
          reactExports.useEffect(() => {
            const newSurveyMode = (survey === null || survey === void 0 ? void 0 : survey.usage) || "";
            setSurveyMode(newSurveyMode);
          }, [survey]);
          const dispatch = useDispatch();
          const isDisabled = !isSurveyAdmin() || (survey === null || survey === void 0 ? void 0 : survey.status) == SURVEY_STATUS.CLOSED;
          const getUserTimezone = () => {
            return Intl.DateTimeFormat().resolvedOptions().timeZone;
          };
          const onSurveyActiveFromChanged = value => {
            setSurveyDateError("");
            const dateValue = value instanceof Date ? value : value.toDate();
            dispatch(surveyAttributeChanged({
              key: "startDate",
              value: dateValue ? localDateToServerDateTime(dateValue) : null
            }));
          };
          const onSurveyActiveToChanged = value => {
            setSurveyDateError("");
            const dateValue = value instanceof Date ? value : value.toDate();
            dispatch(surveyAttributeChanged({
              key: "endDate",
              value: dateValue ? localDateToServerDateTime(dateValue) : null
            }));
          };
          const onSurveyModeChanged = e => {
            setSurveyMode(e.target.value);
            dispatch(surveyAttributeChanged({
              key: "usage",
              value: e.target.value
            }));
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: styles$3.generalContainer,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(RHFSelect, {
              value: surveyMode,
              onChange: onSurveyModeChanged,
              label: t("label.survey_mode"),
              children: surveyMode_options.map(option => /* @__PURE__ */jsxRuntimeExports.jsx("option", {
                value: option.value,
                children: t(option.label)
              }, option.value))
            }), /* @__PURE__ */jsxRuntimeExports.jsxs(Typography, {
              ml: 1,
              variant: "caption",
              color: "error",
              display: "flex",
              alignItems: "center",
              children: [t("timezone_info"), " ", /* @__PURE__ */jsxRuntimeExports.jsx(CustomTooltip, {
                title: /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                  children: [t("timezone_tooltip"), " (", getUserTimezone(), ")."]
                }),
                children: /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                  size: "small",
                  "aria-label": "help",
                  style: {
                    marginLeft: 4
                  },
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(HelpOutline, {
                    fontSize: "small"
                  })
                })
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
              className: styles$3.blockItem,
              children: /* @__PURE__ */jsxRuntimeExports.jsx(SurveyActiveFromTo, {
                error: surveyDateError,
                disabled: isDisabled,
                surveyActiveFrom: survey === null || survey === void 0 ? void 0 : survey.startDate,
                surveyActiveTo: survey === null || survey === void 0 ? void 0 : survey.endDate,
                onSurveyActiveFromChanged,
                onSurveyActiveToChanged
              })
            })]
          });
        }
        const EditSurveyGeneral$1 = React.memo(EditSurveyGeneral);
        var Facebook = {};
        var _interopRequireDefault$4 = interopRequireDefaultExports;
        Object.defineProperty(Facebook, "__esModule", {
          value: true
        });
        var default_1$2 = Facebook.default = void 0;
        _interopRequireWildcard$2(reactExports);
        var _createSvgIcon$2 = _interopRequireDefault$4(requireCreateSvgIcon());
        var _jsxRuntime$2 = jsxRuntimeExports;
        function _getRequireWildcardCache$2(e) {
          if ("function" != typeof WeakMap) return null;
          var r = new WeakMap(),
            t = new WeakMap();
          return (_getRequireWildcardCache$2 = function _getRequireWildcardCache$2(e) {
            return e ? t : r;
          })(e);
        }
        function _interopRequireWildcard$2(e, r) {
          if (e && e.__esModule) return e;
          if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
          };
          var t = _getRequireWildcardCache$2(r);
          if (t && t.has(e)) return t.get(e);
          var n = {
              __proto__: null
            },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
            var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
            i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
          }
          return n.default = e, t && t.set(e, n), n;
        }
        default_1$2 = Facebook.default = (0, _createSvgIcon$2.default)(/*#__PURE__*/(0, _jsxRuntime$2.jsx)("path", {
          d: "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"
        }), 'Facebook');
        var LinkedIn = {};
        var _interopRequireDefault$3 = interopRequireDefaultExports;
        Object.defineProperty(LinkedIn, "__esModule", {
          value: true
        });
        var default_1$1 = LinkedIn.default = void 0;
        _interopRequireWildcard$1(reactExports);
        var _createSvgIcon$1 = _interopRequireDefault$3(requireCreateSvgIcon());
        var _jsxRuntime$1 = jsxRuntimeExports;
        function _getRequireWildcardCache$1(e) {
          if ("function" != typeof WeakMap) return null;
          var r = new WeakMap(),
            t = new WeakMap();
          return (_getRequireWildcardCache$1 = function _getRequireWildcardCache$1(e) {
            return e ? t : r;
          })(e);
        }
        function _interopRequireWildcard$1(e, r) {
          if (e && e.__esModule) return e;
          if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
          };
          var t = _getRequireWildcardCache$1(r);
          if (t && t.has(e)) return t.get(e);
          var n = {
              __proto__: null
            },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
            var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
            i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
          }
          return n.default = e, t && t.set(e, n), n;
        }
        default_1$1 = LinkedIn.default = (0, _createSvgIcon$1.default)(/*#__PURE__*/(0, _jsxRuntime$1.jsx)("path", {
          d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
        }), 'LinkedIn');
        var Twitter = {};
        var _interopRequireDefault$2 = interopRequireDefaultExports;
        Object.defineProperty(Twitter, "__esModule", {
          value: true
        });
        var default_1 = Twitter.default = void 0;
        _interopRequireWildcard(reactExports);
        var _createSvgIcon = _interopRequireDefault$2(requireCreateSvgIcon());
        var _jsxRuntime = jsxRuntimeExports;
        function _getRequireWildcardCache(e) {
          if ("function" != typeof WeakMap) return null;
          var r = new WeakMap(),
            t = new WeakMap();
          return (_getRequireWildcardCache = function _getRequireWildcardCache(e) {
            return e ? t : r;
          })(e);
        }
        function _interopRequireWildcard(e, r) {
          if (e && e.__esModule) return e;
          if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
          };
          var t = _getRequireWildcardCache(r);
          if (t && t.has(e)) return t.get(e);
          var n = {
              __proto__: null
            },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
            var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
            i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
          }
          return n.default = e, t && t.set(e, n), n;
        }
        default_1 = Twitter.default = (0, _createSvgIcon.default)(/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
          d: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
        }), 'Twitter');
        function objectToGetParams(object) {
          var params = Object.entries(object).filter(function (_a) {
            var value = _a[1];
            return value !== undefined && value !== null;
          }).map(function (_a) {
            var key = _a[0],
              value = _a[1];
            return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(String(value)));
          });
          return params.length > 0 ? "?".concat(params.join('&')) : '';
        }
        var __extends$1 = undefined && undefined.__extends || function () {
          var _extendStatics = function extendStatics(d, b) {
            _extendStatics = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (d, b) {
              d.__proto__ = b;
            } || function (d, b) {
              for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            };
            return _extendStatics(d, b);
          };
          return function (d, b) {
            if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            _extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        var __assign$1 = undefined && undefined.__assign || function () {
          __assign$1 = Object.assign || function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
          };
          return __assign$1.apply(this, arguments);
        };
        var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function (resolve) {
              resolve(value);
            });
          }
          return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };
        var __generator = undefined && undefined.__generator || function (thisArg, body) {
          var _ = {
              label: 0,
              sent: function sent() {
                if (t[0] & 1) throw t[1];
                return t[1];
              },
              trys: [],
              ops: []
            },
            f,
            y,
            t,
            g;
          return g = {
            next: verb(0),
            "throw": verb(1),
            "return": verb(2)
          }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
            return this;
          }), g;
          function verb(n) {
            return function (v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2]) _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
            if (op[0] & 5) throw op[1];
            return {
              value: op[0] ? op[1] : void 0,
              done: true
            };
          }
        };
        var __rest = undefined && undefined.__rest || function (s, e) {
          var t = {};
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };
        var isPromise = function isPromise(obj) {
          return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
        };
        var getBoxPositionOnWindowCenter = function getBoxPositionOnWindowCenter(width, height) {
          return {
            left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - width / 2,
            top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - height / 2
          };
        };
        var getBoxPositionOnScreenCenter = function getBoxPositionOnScreenCenter(width, height) {
          return {
            top: (window.screen.height - height) / 2,
            left: (window.screen.width - width) / 2
          };
        };
        function windowOpen(url, _a, onClose) {
          var height = _a.height,
            width = _a.width,
            configRest = __rest(_a, ["height", "width"]);
          var config = __assign$1({
            height: height,
            width: width,
            location: 'no',
            toolbar: 'no',
            status: 'no',
            directories: 'no',
            menubar: 'no',
            scrollbars: 'yes',
            resizable: 'no',
            centerscreen: 'yes',
            chrome: 'yes'
          }, configRest);
          var shareDialog = window.open(url, '', Object.keys(config).map(function (key) {
            return "".concat(key, "=").concat(config[key]);
          }).join(', '));
          if (onClose) {
            var interval_1 = window.setInterval(function () {
              try {
                if (shareDialog === null || shareDialog.closed) {
                  window.clearInterval(interval_1);
                  onClose(shareDialog);
                }
              } catch (e) {
                /* eslint-disable no-console */
                console.error(e);
                /* eslint-enable no-console */
              }
            }, 1000);
          }
          return shareDialog;
        }
        var ShareButton = /** @class */function (_super) {
          __extends$1(ShareButton, _super);
          function ShareButton() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.openShareDialog = function (link) {
              var _a = _this.props,
                onShareWindowClose = _a.onShareWindowClose,
                _b = _a.windowHeight,
                windowHeight = _b === void 0 ? 400 : _b,
                _c = _a.windowPosition,
                windowPosition = _c === void 0 ? 'windowCenter' : _c,
                _d = _a.windowWidth,
                windowWidth = _d === void 0 ? 550 : _d;
              var windowConfig = __assign$1({
                height: windowHeight,
                width: windowWidth
              }, windowPosition === 'windowCenter' ? getBoxPositionOnWindowCenter(windowWidth, windowHeight) : getBoxPositionOnScreenCenter(windowWidth, windowHeight));
              windowOpen(link, windowConfig, onShareWindowClose);
            };
            _this.handleClick = function (event) {
              return __awaiter(_this, void 0, void 0, function () {
                var _a, beforeOnClick, disabled, networkLink, onClick, url, openShareDialogOnClick, opts, link, returnVal;
                return __generator(this, function (_b) {
                  switch (_b.label) {
                    case 0:
                      _a = this.props, beforeOnClick = _a.beforeOnClick, disabled = _a.disabled, networkLink = _a.networkLink, onClick = _a.onClick, url = _a.url, openShareDialogOnClick = _a.openShareDialogOnClick, opts = _a.opts;
                      link = networkLink(url, opts);
                      if (disabled) {
                        return [2 /*return*/];
                      }
                      event.preventDefault();
                      if (!beforeOnClick) return [3 /*break*/, 2];
                      returnVal = beforeOnClick();
                      if (!isPromise(returnVal)) return [3 /*break*/, 2];
                      return [4 /*yield*/, returnVal];
                    case 1:
                      _b.sent();
                      _b.label = 2;
                    case 2:
                      if (openShareDialogOnClick) {
                        this.openShareDialog(link);
                      }
                      if (onClick) {
                        onClick(event, link);
                      }
                      return [2 /*return*/];
                  }
                });
              });
            };
            return _this;
          }
          ShareButton.prototype.render = function () {
            var _a = this.props;
            _a.beforeOnClick;
            var children = _a.children,
              className = _a.className,
              disabled = _a.disabled,
              disabledStyle = _a.disabledStyle,
              forwardedRef = _a.forwardedRef;
            _a.networkLink;
            var networkName = _a.networkName;
            _a.onShareWindowClose;
            _a.openShareDialogOnClick;
            _a.opts;
            var resetButtonStyle = _a.resetButtonStyle,
              style = _a.style;
            _a.url;
            _a.windowHeight;
            _a.windowPosition;
            _a.windowWidth;
            var rest = __rest(_a, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]);
            var newClassName = classNames('react-share__ShareButton', {
              'react-share__ShareButton--disabled': !!disabled,
              disabled: !!disabled
            }, className);
            var newStyle = resetButtonStyle ? __assign$1(__assign$1({
              backgroundColor: 'transparent',
              border: 'none',
              padding: 0,
              font: 'inherit',
              color: 'inherit',
              cursor: 'pointer'
            }, style), disabled && disabledStyle) : __assign$1(__assign$1({}, style), disabled && disabledStyle);
            return React.createElement("button", __assign$1({}, rest, {
              "aria-label": rest['aria-label'] || networkName,
              className: newClassName,
              onClick: this.handleClick,
              ref: forwardedRef,
              style: newStyle
            }), children);
          };
          ShareButton.defaultProps = {
            disabledStyle: {
              opacity: 0.6
            },
            openShareDialogOnClick: true,
            resetButtonStyle: true
          };
          return ShareButton;
        }(reactExports.Component);
        var __assign = undefined && undefined.__assign || function () {
          __assign = Object.assign || function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
          };
          return __assign.apply(this, arguments);
        };
        function createShareButton(networkName, link, optsMap, defaultProps) {
          function CreatedButton(props, ref) {
            var opts = optsMap(props);
            var passedProps = __assign({}, props);
            // remove keys from passed props that are passed as opts
            var optsKeys = Object.keys(opts);
            optsKeys.forEach(function (key) {
              delete passedProps[key];
            });
            return React.createElement(ShareButton, __assign({}, defaultProps, passedProps, {
              forwardedRef: ref,
              networkName: networkName,
              networkLink: link,
              opts: optsMap(props)
            }));
          }
          CreatedButton.displayName = "ShareButton-".concat(networkName);
          return reactExports.forwardRef(CreatedButton);
        }
        var __extends = undefined && undefined.__extends || function () {
          var _extendStatics2 = function extendStatics(d, b) {
            _extendStatics2 = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (d, b) {
              d.__proto__ = b;
            } || function (d, b) {
              for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            };
            return _extendStatics2(d, b);
          };
          return function (d, b) {
            if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            _extendStatics2(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        var AssertionError = /** @class */function (_super) {
          __extends(AssertionError, _super);
          function AssertionError(message) {
            var _this = _super.call(this, message) || this;
            _this.name = 'AssertionError';
            return _this;
          }
          return AssertionError;
        }(Error);
        function assert(value, message) {
          if (!value) {
            throw new AssertionError(message);
          }
        }
        function facebookLink(url, _a) {
          var quote = _a.quote,
            hashtag = _a.hashtag;
          assert(url, 'facebook.url');
          return 'https://www.facebook.com/sharer/sharer.php' + objectToGetParams({
            u: url,
            quote: quote,
            hashtag: hashtag
          });
        }
        var FacebookShareButton = createShareButton('facebook', facebookLink, function (props) {
          return {
            quote: props.quote,
            hashtag: props.hashtag
          };
        }, {
          windowWidth: 550,
          windowHeight: 400
        });
        function linkedinLink(url, _a) {
          var title = _a.title,
            summary = _a.summary,
            source = _a.source;
          assert(url, 'linkedin.url');
          return 'https://linkedin.com/shareArticle' + objectToGetParams({
            url: url,
            mini: 'true',
            title: title,
            summary: summary,
            source: source
          });
        }
        var LinkedinShareButton = createShareButton('linkedin', linkedinLink, function (_a) {
          var title = _a.title,
            summary = _a.summary,
            source = _a.source;
          return {
            title: title,
            summary: summary,
            source: source
          };
        }, {
          windowWidth: 750,
          windowHeight: 600
        });
        function twitterLink(url, _a) {
          var title = _a.title,
            via = _a.via,
            _b = _a.hashtags,
            hashtags = _b === void 0 ? [] : _b,
            _c = _a.related,
            related = _c === void 0 ? [] : _c;
          assert(url, 'twitter.url');
          assert(Array.isArray(hashtags), 'twitter.hashtags is not an array');
          assert(Array.isArray(related), 'twitter.related is not an array');
          return 'https://twitter.com/share' + objectToGetParams({
            url: url,
            text: title,
            via: via,
            hashtags: hashtags.length > 0 ? hashtags.join(',') : undefined,
            related: related.length > 0 ? related.join(',') : undefined
          });
        }
        var TwitterShareButton = createShareButton('twitter', twitterLink, function (props) {
          return {
            hashtags: props.hashtags,
            title: props.title,
            via: props.via,
            related: props.related
          };
        }, {
          windowWidth: 550,
          windowHeight: 400
        });
        const mainContainer$1 = "_mainContainer_1siod_1";
        const defaultUrl = "_defaultUrl_1siod_10";
        const urlLink = "_urlLink_1siod_19";
        const socialLink = "_socialLink_1siod_24";
        const iconShareFb = "_iconShareFb_1siod_30";
        const iconShareTw = "_iconShareTw_1siod_34";
        const iconShareLn = "_iconShareLn_1siod_38";
        const actionButton$1 = "_actionButton_1siod_42";
        const copyButton = "_copyButton_1siod_52";
        const buttonContainer = "_buttonContainer_1siod_60";
        const styles$2 = {
          mainContainer: mainContainer$1,
          defaultUrl: defaultUrl,
          urlLink: urlLink,
          socialLink: socialLink,
          iconShareFb: iconShareFb,
          iconShareTw: iconShareTw,
          iconShareLn: iconShareLn,
          actionButton: actionButton$1,
          copyButton: copyButton,
          buttonContainer: buttonContainer
        };
        var lib = {};
        var ErrorCorrectLevel = {
          L: 1,
          M: 0,
          Q: 3,
          H: 2
        };
        var mode$1 = {
          MODE_NUMBER: 1 << 0,
          MODE_ALPHA_NUM: 1 << 1,
          MODE_8BIT_BYTE: 1 << 2,
          MODE_KANJI: 1 << 3
        };
        var mode = mode$1;
        function QR8bitByte(data) {
          this.mode = mode.MODE_8BIT_BYTE;
          this.data = data;
        }
        QR8bitByte.prototype = {
          getLength: function getLength(buffer) {
            return this.data.length;
          },
          write: function write(buffer) {
            for (var i = 0; i < this.data.length; i++) {
              // not JIS ...
              buffer.put(this.data.charCodeAt(i), 8);
            }
          }
        };
        var _8BitByte = QR8bitByte;

        // ErrorCorrectLevel
        var ECL = ErrorCorrectLevel;
        function QRRSBlock(totalCount, dataCount) {
          this.totalCount = totalCount;
          this.dataCount = dataCount;
        }
        QRRSBlock.RS_BLOCK_TABLE = [
        // L
        // M
        // Q
        // H

        // 1
        [1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9],
        // 2
        [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16],
        // 3
        [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13],
        // 4		
        [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9],
        // 5
        [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12],
        // 6
        [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15],
        // 7		
        [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14],
        // 8
        [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15],
        // 9
        [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13],
        // 10		
        [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16],
        // 11
        [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13],
        // 12
        [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15],
        // 13
        [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12],
        // 14
        [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13],
        // 15
        [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12],
        // 16
        [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16],
        // 17
        [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15],
        // 18
        [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15],
        // 19
        [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14],
        // 20
        [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16],
        // 21
        [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17],
        // 22
        [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13],
        // 23
        [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16],
        // 24
        [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17],
        // 25
        [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16],
        // 26
        [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17],
        // 27
        [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16],
        // 28
        [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16],
        // 29
        [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16],
        // 30
        [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16],
        // 31
        [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16],
        // 32
        [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16],
        // 33
        [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16],
        // 34
        [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17],
        // 35
        [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16],
        // 36
        [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16],
        // 37
        [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16],
        // 38
        [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16],
        // 39
        [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16],
        // 40
        [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
        QRRSBlock.getRSBlocks = function (typeNumber, errorCorrectLevel) {
          var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
          if (rsBlock == undefined) {
            throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
          }
          var length = rsBlock.length / 3;
          var list = new Array();
          for (var i = 0; i < length; i++) {
            var count = rsBlock[i * 3 + 0];
            var totalCount = rsBlock[i * 3 + 1];
            var dataCount = rsBlock[i * 3 + 2];
            for (var j = 0; j < count; j++) {
              list.push(new QRRSBlock(totalCount, dataCount));
            }
          }
          return list;
        };
        QRRSBlock.getRsBlockTable = function (typeNumber, errorCorrectLevel) {
          switch (errorCorrectLevel) {
            case ECL.L:
              return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
            case ECL.M:
              return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
            case ECL.Q:
              return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
            case ECL.H:
              return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
            default:
              return undefined;
          }
        };
        var RSBlock$1 = QRRSBlock;
        function QRBitBuffer() {
          this.buffer = new Array();
          this.length = 0;
        }
        QRBitBuffer.prototype = {
          get: function get(index) {
            var bufIndex = Math.floor(index / 8);
            return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
          },
          put: function put(num, length) {
            for (var i = 0; i < length; i++) {
              this.putBit((num >>> length - i - 1 & 1) == 1);
            }
          },
          getLengthInBits: function getLengthInBits() {
            return this.length;
          },
          putBit: function putBit(bit) {
            var bufIndex = Math.floor(this.length / 8);
            if (this.buffer.length <= bufIndex) {
              this.buffer.push(0);
            }
            if (bit) {
              this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
            }
            this.length++;
          }
        };
        var BitBuffer$1 = QRBitBuffer;
        var QRMath = {
          glog: function glog(n) {
            if (n < 1) {
              throw new Error("glog(" + n + ")");
            }
            return QRMath.LOG_TABLE[n];
          },
          gexp: function gexp(n) {
            while (n < 0) {
              n += 255;
            }
            while (n >= 256) {
              n -= 255;
            }
            return QRMath.EXP_TABLE[n];
          },
          EXP_TABLE: new Array(256),
          LOG_TABLE: new Array(256)
        };
        for (var i = 0; i < 8; i++) {
          QRMath.EXP_TABLE[i] = 1 << i;
        }
        for (var i = 8; i < 256; i++) {
          QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
        }
        for (var i = 0; i < 255; i++) {
          QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
        }
        var math$2 = QRMath;
        var math$1 = math$2;
        function QRPolynomial(num, shift) {
          if (num.length == undefined) {
            throw new Error(num.length + "/" + shift);
          }
          var offset = 0;
          while (offset < num.length && num[offset] == 0) {
            offset++;
          }
          this.num = new Array(num.length - offset + shift);
          for (var i = 0; i < num.length - offset; i++) {
            this.num[i] = num[i + offset];
          }
        }
        QRPolynomial.prototype = {
          get: function get(index) {
            return this.num[index];
          },
          getLength: function getLength() {
            return this.num.length;
          },
          multiply: function multiply(e) {
            var num = new Array(this.getLength() + e.getLength() - 1);
            for (var i = 0; i < this.getLength(); i++) {
              for (var j = 0; j < e.getLength(); j++) {
                num[i + j] ^= math$1.gexp(math$1.glog(this.get(i)) + math$1.glog(e.get(j)));
              }
            }
            return new QRPolynomial(num, 0);
          },
          mod: function mod(e) {
            if (this.getLength() - e.getLength() < 0) {
              return this;
            }
            var ratio = math$1.glog(this.get(0)) - math$1.glog(e.get(0));
            var num = new Array(this.getLength());
            for (var i = 0; i < this.getLength(); i++) {
              num[i] = this.get(i);
            }
            for (var i = 0; i < e.getLength(); i++) {
              num[i] ^= math$1.gexp(math$1.glog(e.get(i)) + ratio);
            }

            // recursive call
            return new QRPolynomial(num, 0).mod(e);
          }
        };
        var Polynomial$2 = QRPolynomial;
        var Mode = mode$1;
        var Polynomial$1 = Polynomial$2;
        var math = math$2;
        var QRMaskPattern = {
          PATTERN000: 0,
          PATTERN001: 1,
          PATTERN010: 2,
          PATTERN011: 3,
          PATTERN100: 4,
          PATTERN101: 5,
          PATTERN110: 6,
          PATTERN111: 7
        };
        var QRUtil = {
          PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
          G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,
          G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,
          G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,
          getBCHTypeInfo: function getBCHTypeInfo(data) {
            var d = data << 10;
            while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
              d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
            }
            return (data << 10 | d) ^ QRUtil.G15_MASK;
          },
          getBCHTypeNumber: function getBCHTypeNumber(data) {
            var d = data << 12;
            while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
              d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
            }
            return data << 12 | d;
          },
          getBCHDigit: function getBCHDigit(data) {
            var digit = 0;
            while (data != 0) {
              digit++;
              data >>>= 1;
            }
            return digit;
          },
          getPatternPosition: function getPatternPosition(typeNumber) {
            return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
          },
          getMask: function getMask(maskPattern, i, j) {
            switch (maskPattern) {
              case QRMaskPattern.PATTERN000:
                return (i + j) % 2 == 0;
              case QRMaskPattern.PATTERN001:
                return i % 2 == 0;
              case QRMaskPattern.PATTERN010:
                return j % 3 == 0;
              case QRMaskPattern.PATTERN011:
                return (i + j) % 3 == 0;
              case QRMaskPattern.PATTERN100:
                return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
              case QRMaskPattern.PATTERN101:
                return i * j % 2 + i * j % 3 == 0;
              case QRMaskPattern.PATTERN110:
                return (i * j % 2 + i * j % 3) % 2 == 0;
              case QRMaskPattern.PATTERN111:
                return (i * j % 3 + (i + j) % 2) % 2 == 0;
              default:
                throw new Error("bad maskPattern:" + maskPattern);
            }
          },
          getErrorCorrectPolynomial: function getErrorCorrectPolynomial(errorCorrectLength) {
            var a = new Polynomial$1([1], 0);
            for (var i = 0; i < errorCorrectLength; i++) {
              a = a.multiply(new Polynomial$1([1, math.gexp(i)], 0));
            }
            return a;
          },
          getLengthInBits: function getLengthInBits(mode, type) {
            if (1 <= type && type < 10) {
              // 1 - 9

              switch (mode) {
                case Mode.MODE_NUMBER:
                  return 10;
                case Mode.MODE_ALPHA_NUM:
                  return 9;
                case Mode.MODE_8BIT_BYTE:
                  return 8;
                case Mode.MODE_KANJI:
                  return 8;
                default:
                  throw new Error("mode:" + mode);
              }
            } else if (type < 27) {
              // 10 - 26

              switch (mode) {
                case Mode.MODE_NUMBER:
                  return 12;
                case Mode.MODE_ALPHA_NUM:
                  return 11;
                case Mode.MODE_8BIT_BYTE:
                  return 16;
                case Mode.MODE_KANJI:
                  return 10;
                default:
                  throw new Error("mode:" + mode);
              }
            } else if (type < 41) {
              // 27 - 40

              switch (mode) {
                case Mode.MODE_NUMBER:
                  return 14;
                case Mode.MODE_ALPHA_NUM:
                  return 13;
                case Mode.MODE_8BIT_BYTE:
                  return 16;
                case Mode.MODE_KANJI:
                  return 12;
                default:
                  throw new Error("mode:" + mode);
              }
            } else {
              throw new Error("type:" + type);
            }
          },
          getLostPoint: function getLostPoint(qrCode) {
            var moduleCount = qrCode.getModuleCount();
            var lostPoint = 0;

            // LEVEL1

            for (var row = 0; row < moduleCount; row++) {
              for (var col = 0; col < moduleCount; col++) {
                var sameCount = 0;
                var dark = qrCode.isDark(row, col);
                for (var r = -1; r <= 1; r++) {
                  if (row + r < 0 || moduleCount <= row + r) {
                    continue;
                  }
                  for (var c = -1; c <= 1; c++) {
                    if (col + c < 0 || moduleCount <= col + c) {
                      continue;
                    }
                    if (r == 0 && c == 0) {
                      continue;
                    }
                    if (dark == qrCode.isDark(row + r, col + c)) {
                      sameCount++;
                    }
                  }
                }
                if (sameCount > 5) {
                  lostPoint += 3 + sameCount - 5;
                }
              }
            }

            // LEVEL2

            for (var row = 0; row < moduleCount - 1; row++) {
              for (var col = 0; col < moduleCount - 1; col++) {
                var count = 0;
                if (qrCode.isDark(row, col)) count++;
                if (qrCode.isDark(row + 1, col)) count++;
                if (qrCode.isDark(row, col + 1)) count++;
                if (qrCode.isDark(row + 1, col + 1)) count++;
                if (count == 0 || count == 4) {
                  lostPoint += 3;
                }
              }
            }

            // LEVEL3

            for (var row = 0; row < moduleCount; row++) {
              for (var col = 0; col < moduleCount - 6; col++) {
                if (qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6)) {
                  lostPoint += 40;
                }
              }
            }
            for (var col = 0; col < moduleCount; col++) {
              for (var row = 0; row < moduleCount - 6; row++) {
                if (qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col)) {
                  lostPoint += 40;
                }
              }
            }

            // LEVEL4

            var darkCount = 0;
            for (var col = 0; col < moduleCount; col++) {
              for (var row = 0; row < moduleCount; row++) {
                if (qrCode.isDark(row, col)) {
                  darkCount++;
                }
              }
            }
            var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
            lostPoint += ratio * 10;
            return lostPoint;
          }
        };
        var util$1 = QRUtil;
        var BitByte = _8BitByte;
        var RSBlock = RSBlock$1;
        var BitBuffer = BitBuffer$1;
        var util = util$1;
        var Polynomial = Polynomial$2;
        function QRCode$1(typeNumber, errorCorrectLevel) {
          this.typeNumber = typeNumber;
          this.errorCorrectLevel = errorCorrectLevel;
          this.modules = null;
          this.moduleCount = 0;
          this.dataCache = null;
          this.dataList = [];
        }

        // for client side minification
        var proto = QRCode$1.prototype;
        proto.addData = function (data) {
          var newData = new BitByte(data);
          this.dataList.push(newData);
          this.dataCache = null;
        };
        proto.isDark = function (row, col) {
          if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
            throw new Error(row + "," + col);
          }
          return this.modules[row][col];
        };
        proto.getModuleCount = function () {
          return this.moduleCount;
        };
        proto.make = function () {
          // Calculate automatically typeNumber if provided is < 1
          if (this.typeNumber < 1) {
            var typeNumber = 1;
            for (typeNumber = 1; typeNumber < 40; typeNumber++) {
              var rsBlocks = RSBlock.getRSBlocks(typeNumber, this.errorCorrectLevel);
              var buffer = new BitBuffer();
              var totalDataCount = 0;
              for (var i = 0; i < rsBlocks.length; i++) {
                totalDataCount += rsBlocks[i].dataCount;
              }
              for (var i = 0; i < this.dataList.length; i++) {
                var data = this.dataList[i];
                buffer.put(data.mode, 4);
                buffer.put(data.getLength(), util.getLengthInBits(data.mode, typeNumber));
                data.write(buffer);
              }
              if (buffer.getLengthInBits() <= totalDataCount * 8) break;
            }
            this.typeNumber = typeNumber;
          }
          this.makeImpl(false, this.getBestMaskPattern());
        };
        proto.makeImpl = function (test, maskPattern) {
          this.moduleCount = this.typeNumber * 4 + 17;
          this.modules = new Array(this.moduleCount);
          for (var row = 0; row < this.moduleCount; row++) {
            this.modules[row] = new Array(this.moduleCount);
            for (var col = 0; col < this.moduleCount; col++) {
              this.modules[row][col] = null; //(col + row) % 3;
            }
          }
          this.setupPositionProbePattern(0, 0);
          this.setupPositionProbePattern(this.moduleCount - 7, 0);
          this.setupPositionProbePattern(0, this.moduleCount - 7);
          this.setupPositionAdjustPattern();
          this.setupTimingPattern();
          this.setupTypeInfo(test, maskPattern);
          if (this.typeNumber >= 7) {
            this.setupTypeNumber(test);
          }
          if (this.dataCache == null) {
            this.dataCache = QRCode$1.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
          }
          this.mapData(this.dataCache, maskPattern);
        };
        proto.setupPositionProbePattern = function (row, col) {
          for (var r = -1; r <= 7; r++) {
            if (row + r <= -1 || this.moduleCount <= row + r) continue;
            for (var c = -1; c <= 7; c++) {
              if (col + c <= -1 || this.moduleCount <= col + c) continue;
              if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
                this.modules[row + r][col + c] = true;
              } else {
                this.modules[row + r][col + c] = false;
              }
            }
          }
        };
        proto.getBestMaskPattern = function () {
          var minLostPoint = 0;
          var pattern = 0;
          for (var i = 0; i < 8; i++) {
            this.makeImpl(true, i);
            var lostPoint = util.getLostPoint(this);
            if (i == 0 || minLostPoint > lostPoint) {
              minLostPoint = lostPoint;
              pattern = i;
            }
          }
          return pattern;
        };
        proto.createMovieClip = function (target_mc, instance_name, depth) {
          var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
          var cs = 1;
          this.make();
          for (var row = 0; row < this.modules.length; row++) {
            var y = row * cs;
            for (var col = 0; col < this.modules[row].length; col++) {
              var x = col * cs;
              var dark = this.modules[row][col];
              if (dark) {
                qr_mc.beginFill(0, 100);
                qr_mc.moveTo(x, y);
                qr_mc.lineTo(x + cs, y);
                qr_mc.lineTo(x + cs, y + cs);
                qr_mc.lineTo(x, y + cs);
                qr_mc.endFill();
              }
            }
          }
          return qr_mc;
        };
        proto.setupTimingPattern = function () {
          for (var r = 8; r < this.moduleCount - 8; r++) {
            if (this.modules[r][6] != null) {
              continue;
            }
            this.modules[r][6] = r % 2 == 0;
          }
          for (var c = 8; c < this.moduleCount - 8; c++) {
            if (this.modules[6][c] != null) {
              continue;
            }
            this.modules[6][c] = c % 2 == 0;
          }
        };
        proto.setupPositionAdjustPattern = function () {
          var pos = util.getPatternPosition(this.typeNumber);
          for (var i = 0; i < pos.length; i++) {
            for (var j = 0; j < pos.length; j++) {
              var row = pos[i];
              var col = pos[j];
              if (this.modules[row][col] != null) {
                continue;
              }
              for (var r = -2; r <= 2; r++) {
                for (var c = -2; c <= 2; c++) {
                  if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {
                    this.modules[row + r][col + c] = true;
                  } else {
                    this.modules[row + r][col + c] = false;
                  }
                }
              }
            }
          }
        };
        proto.setupTypeNumber = function (test) {
          var bits = util.getBCHTypeNumber(this.typeNumber);
          for (var i = 0; i < 18; i++) {
            var mod = !test && (bits >> i & 1) == 1;
            this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
          }
          for (var i = 0; i < 18; i++) {
            var mod = !test && (bits >> i & 1) == 1;
            this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
          }
        };
        proto.setupTypeInfo = function (test, maskPattern) {
          var data = this.errorCorrectLevel << 3 | maskPattern;
          var bits = util.getBCHTypeInfo(data);

          // vertical		
          for (var i = 0; i < 15; i++) {
            var mod = !test && (bits >> i & 1) == 1;
            if (i < 6) {
              this.modules[i][8] = mod;
            } else if (i < 8) {
              this.modules[i + 1][8] = mod;
            } else {
              this.modules[this.moduleCount - 15 + i][8] = mod;
            }
          }

          // horizontal
          for (var i = 0; i < 15; i++) {
            var mod = !test && (bits >> i & 1) == 1;
            if (i < 8) {
              this.modules[8][this.moduleCount - i - 1] = mod;
            } else if (i < 9) {
              this.modules[8][15 - i - 1 + 1] = mod;
            } else {
              this.modules[8][15 - i - 1] = mod;
            }
          }

          // fixed module
          this.modules[this.moduleCount - 8][8] = !test;
        };
        proto.mapData = function (data, maskPattern) {
          var inc = -1;
          var row = this.moduleCount - 1;
          var bitIndex = 7;
          var byteIndex = 0;
          for (var col = this.moduleCount - 1; col > 0; col -= 2) {
            if (col == 6) col--;
            while (true) {
              for (var c = 0; c < 2; c++) {
                if (this.modules[row][col - c] == null) {
                  var dark = false;
                  if (byteIndex < data.length) {
                    dark = (data[byteIndex] >>> bitIndex & 1) == 1;
                  }
                  var mask = util.getMask(maskPattern, row, col - c);
                  if (mask) {
                    dark = !dark;
                  }
                  this.modules[row][col - c] = dark;
                  bitIndex--;
                  if (bitIndex == -1) {
                    byteIndex++;
                    bitIndex = 7;
                  }
                }
              }
              row += inc;
              if (row < 0 || this.moduleCount <= row) {
                row -= inc;
                inc = -inc;
                break;
              }
            }
          }
        };
        QRCode$1.PAD0 = 0xEC;
        QRCode$1.PAD1 = 0x11;
        QRCode$1.createData = function (typeNumber, errorCorrectLevel, dataList) {
          var rsBlocks = RSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
          var buffer = new BitBuffer();
          for (var i = 0; i < dataList.length; i++) {
            var data = dataList[i];
            buffer.put(data.mode, 4);
            buffer.put(data.getLength(), util.getLengthInBits(data.mode, typeNumber));
            data.write(buffer);
          }

          // calc num max data.
          var totalDataCount = 0;
          for (var i = 0; i < rsBlocks.length; i++) {
            totalDataCount += rsBlocks[i].dataCount;
          }
          if (buffer.getLengthInBits() > totalDataCount * 8) {
            throw new Error("code length overflow. (" + buffer.getLengthInBits() + ">" + totalDataCount * 8 + ")");
          }

          // end code
          if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
            buffer.put(0, 4);
          }

          // padding
          while (buffer.getLengthInBits() % 8 != 0) {
            buffer.putBit(false);
          }

          // padding
          while (true) {
            if (buffer.getLengthInBits() >= totalDataCount * 8) {
              break;
            }
            buffer.put(QRCode$1.PAD0, 8);
            if (buffer.getLengthInBits() >= totalDataCount * 8) {
              break;
            }
            buffer.put(QRCode$1.PAD1, 8);
          }
          return QRCode$1.createBytes(buffer, rsBlocks);
        };
        QRCode$1.createBytes = function (buffer, rsBlocks) {
          var offset = 0;
          var maxDcCount = 0;
          var maxEcCount = 0;
          var dcdata = new Array(rsBlocks.length);
          var ecdata = new Array(rsBlocks.length);
          for (var r = 0; r < rsBlocks.length; r++) {
            var dcCount = rsBlocks[r].dataCount;
            var ecCount = rsBlocks[r].totalCount - dcCount;
            maxDcCount = Math.max(maxDcCount, dcCount);
            maxEcCount = Math.max(maxEcCount, ecCount);
            dcdata[r] = new Array(dcCount);
            for (var i = 0; i < dcdata[r].length; i++) {
              dcdata[r][i] = 0xff & buffer.buffer[i + offset];
            }
            offset += dcCount;
            var rsPoly = util.getErrorCorrectPolynomial(ecCount);
            var rawPoly = new Polynomial(dcdata[r], rsPoly.getLength() - 1);
            var modPoly = rawPoly.mod(rsPoly);
            ecdata[r] = new Array(rsPoly.getLength() - 1);
            for (var i = 0; i < ecdata[r].length; i++) {
              var modIndex = i + modPoly.getLength() - ecdata[r].length;
              ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
            }
          }
          var totalCodeCount = 0;
          for (var i = 0; i < rsBlocks.length; i++) {
            totalCodeCount += rsBlocks[i].totalCount;
          }
          var data = new Array(totalCodeCount);
          var index = 0;
          for (var i = 0; i < maxDcCount; i++) {
            for (var r = 0; r < rsBlocks.length; r++) {
              if (i < dcdata[r].length) {
                data[index++] = dcdata[r][i];
              }
            }
          }
          for (var i = 0; i < maxEcCount; i++) {
            for (var r = 0; r < rsBlocks.length; r++) {
              if (i < ecdata[r].length) {
                data[index++] = ecdata[r][i];
              }
            }
          }
          return data;
        };
        var QRCode_1 = QRCode$1;
        var QRCodeSvg$1 = {};
        Object.defineProperty(QRCodeSvg$1, "__esModule", {
          value: true
        });
        var _extends$1 = Object.assign || function (target) {
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
        var _propTypes$1 = propTypesExports;
        var _propTypes2$1 = _interopRequireDefault$1(_propTypes$1);
        var _react$1 = reactExports;
        var _react2$1 = _interopRequireDefault$1(_react$1);
        function _interopRequireDefault$1(obj) {
          return obj && obj.__esModule ? obj : {
            default: obj
          };
        }
        function _objectWithoutProperties$1(obj, keys) {
          var target = {};
          for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
          }
          return target;
        }
        var propTypes$1 = {
          bgColor: _propTypes2$1.default.oneOfType([_propTypes2$1.default.object, _propTypes2$1.default.string]).isRequired,
          bgD: _propTypes2$1.default.string.isRequired,
          fgColor: _propTypes2$1.default.oneOfType([_propTypes2$1.default.object, _propTypes2$1.default.string]).isRequired,
          fgD: _propTypes2$1.default.string.isRequired,
          size: _propTypes2$1.default.number.isRequired,
          title: _propTypes2$1.default.string,
          viewBoxSize: _propTypes2$1.default.number.isRequired,
          xmlns: _propTypes2$1.default.string
        };
        var QRCodeSvg = (0, _react$1.forwardRef)(function (_ref, ref) {
          var bgColor = _ref.bgColor,
            bgD = _ref.bgD,
            fgD = _ref.fgD,
            fgColor = _ref.fgColor,
            size = _ref.size,
            title = _ref.title,
            viewBoxSize = _ref.viewBoxSize,
            _ref$xmlns = _ref.xmlns,
            xmlns = _ref$xmlns === undefined ? "http://www.w3.org/2000/svg" : _ref$xmlns,
            props = _objectWithoutProperties$1(_ref, ["bgColor", "bgD", "fgD", "fgColor", "size", "title", "viewBoxSize", "xmlns"]);
          return _react2$1.default.createElement("svg", _extends$1({}, props, {
            height: size,
            ref: ref,
            viewBox: "0 0 " + viewBoxSize + " " + viewBoxSize,
            width: size,
            xmlns: xmlns
          }), title ? _react2$1.default.createElement("title", null, title) : null, _react2$1.default.createElement("path", {
            d: bgD,
            fill: bgColor
          }), _react2$1.default.createElement("path", {
            d: fgD,
            fill: fgColor
          }));
        });
        QRCodeSvg.displayName = "QRCodeSvg";
        QRCodeSvg.propTypes = propTypes$1;
        QRCodeSvg$1.default = QRCodeSvg;
        Object.defineProperty(lib, "__esModule", {
          value: true
        });
        lib.QRCode = undefined;
        var _extends = Object.assign || function (target) {
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
        var _propTypes = propTypesExports;
        var _propTypes2 = _interopRequireDefault(_propTypes);
        var _ErrorCorrectLevel = ErrorCorrectLevel;
        var _ErrorCorrectLevel2 = _interopRequireDefault(_ErrorCorrectLevel);
        var _QRCode = QRCode_1;
        var _QRCode2 = _interopRequireDefault(_QRCode);
        var _react = reactExports;
        var _react2 = _interopRequireDefault(_react);
        var _QRCodeSvg = QRCodeSvg$1;
        var _QRCodeSvg2 = _interopRequireDefault(_QRCodeSvg);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            default: obj
          };
        }
        function _objectWithoutProperties(obj, keys) {
          var target = {};
          for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
          }
          return target;
        }
        // A `qr.js` doesn't handle error level of zero (M) so we need to do it right, thus the deep require.

        var propTypes = {
          bgColor: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
          fgColor: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
          level: _propTypes2.default.string,
          size: _propTypes2.default.number,
          value: _propTypes2.default.string.isRequired
        };
        var QRCode = (0, _react.forwardRef)(function (_ref, ref) {
          var _ref$bgColor = _ref.bgColor,
            bgColor = _ref$bgColor === undefined ? "#FFFFFF" : _ref$bgColor,
            _ref$fgColor = _ref.fgColor,
            fgColor = _ref$fgColor === undefined ? "#000000" : _ref$fgColor,
            _ref$level = _ref.level,
            level = _ref$level === undefined ? "L" : _ref$level,
            _ref$size = _ref.size,
            size = _ref$size === undefined ? 256 : _ref$size,
            value = _ref.value,
            props = _objectWithoutProperties(_ref, ["bgColor", "fgColor", "level", "size", "value"]);

          // Use type === -1 to automatically pick the best type.
          var qrcode = new _QRCode2.default(-1, _ErrorCorrectLevel2.default[level]);
          qrcode.addData(value);
          qrcode.make();
          var cells = qrcode.modules;
          return _react2.default.createElement(_QRCodeSvg2.default, _extends({}, props, {
            bgColor: bgColor,
            bgD: cells.map(function (row, rowIndex) {
              return row.map(function (cell, cellIndex) {
                return !cell ? "M " + cellIndex + " " + rowIndex + " l 1 0 0 1 -1 0 Z" : "";
              }).join(" ");
            }).join(" "),
            fgColor: fgColor,
            fgD: cells.map(function (row, rowIndex) {
              return row.map(function (cell, cellIndex) {
                return cell ? "M " + cellIndex + " " + rowIndex + " l 1 0 0 1 -1 0 Z" : "";
              }).join(" ");
            }).join(" "),
            ref: ref,
            size: size,
            viewBoxSize: cells.length
          }));
        });
        lib.QRCode = QRCode;
        QRCode.displayName = "QRCode";
        QRCode.propTypes = propTypes;
        var _default = lib.default = QRCode;
        function SurveySharing() {
          const qrRef = reactExports.useRef();
          const theme = useTheme();
          const _useTranslation2 = useTranslation("manage"),
            t = _useTranslation2.t;
          const survey = useSelector(state => state.editState.survey);
          const url = sharingUrl(survey === null || survey === void 0 ? void 0 : survey.id);
          const _reactExports$useStat5 = reactExports.useState(false),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            isQRDialogOpen = _reactExports$useStat6[0],
            setQRDialogOpen = _reactExports$useStat6[1];
          const _reactExports$useStat7 = reactExports.useState(false),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            copy = _reactExports$useStat8[0],
            setCopy = _reactExports$useStat8[1];
          const clickCopy = () => {
            navigator.clipboard.writeText(url);
            setCopy(true);
          };
          const toggleQRDialog = () => {
            setQRDialogOpen(!isQRDialogOpen);
          };
          const downloadQRCode = () => {
            const canvas = document.createElement("canvas");
            const qrCodeSVG = qrRef.current.querySelector("svg");
            const svgData = new XMLSerializer().serializeToString(qrCodeSVG);
            const svgBlob = new Blob([svgData], {
              type: "image/svg+xml;charset=utf-8"
            });
            const URL = window.URL || window.webkitURL || window;
            const blobURL = URL.createObjectURL(svgBlob);
            const image = new Image();
            image.onload = () => {
              canvas.width = image.width;
              canvas.height = image.height;
              const context = canvas.getContext("2d");
              context.clearRect(0, 0, canvas.width, canvas.height);
              context.drawImage(image, 0, 0);
              URL.revokeObjectURL(blobURL);
              const canvasDataURL = canvas.toDataURL("image/png");
              const a = document.createElement("a");
              a.href = canvasDataURL;
              a.download = `${survey === null || survey === void 0 ? void 0 : survey.name}_QRCode.png`;
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
            };
            image.src = blobURL;
          };
          const mailSurveyLink = `mailto:?subject=Survey Link&body=Please complete this survey: ${encodeURIComponent(url)}`;
          return /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
              className: styles$2.mainContainer,
              children: [copy && /* @__PURE__ */jsxRuntimeExports.jsx(SuccessSnackbar, {
                handleClose: () => setCopy(false),
                success: "copied",
                left: "56"
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
                className: styles$2.defaultUrl,
                children: /* @__PURE__ */jsxRuntimeExports.jsxs("a", {
                  className: styles$2.urlLink,
                  href: url,
                  children: [url.slice(0, 50), "...", url.slice(-10)]
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                className: styles$2.buttonContainer,
                display: "flex",
                gap: 2,
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Button, {
                  fullWidth: true,
                  onClick: toggleQRDialog,
                  className: styles$2.actionButton,
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(SurveyIcon, {
                    name: "qrCode"
                  }), t("launch.qr_code")]
                }), /* @__PURE__ */jsxRuntimeExports.jsx("a", {
                  href: mailSurveyLink,
                  style: {
                    color: theme.palette.primary.main,
                    width: "100%",
                    textDecoration: "none"
                  },
                  children: /* @__PURE__ */jsxRuntimeExports.jsxs(Button, {
                    fullWidth: true,
                    className: styles$2.actionButton,
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(SurveyIcon, {
                      name: "email"
                    }), t("launch.email_link")]
                  })
                }), /* @__PURE__ */jsxRuntimeExports.jsxs(Button, {
                  fullWidth: true,
                  variant: "contained",
                  color: "primary",
                  className: styles$2.copyButton,
                  onClick: clickCopy,
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(SurveyIcon, {
                    name: "duplicate",
                    color: "#fff"
                  }), t("launch.copy_link")]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
                className: styles$2.socialSharing,
                children: /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                  className: styles$2.socialLink,
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(FacebookShareButton, {
                    url,
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(default_1$2, {
                      className: styles$2.iconShareFb
                    })
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(TwitterShareButton, {
                    url,
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(default_1, {
                      className: styles$2.iconShareTw
                    })
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(LinkedinShareButton, {
                    url,
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(default_1$1, {
                      className: styles$2.iconShareLn
                    })
                  })]
                })
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsxs(Dialog, {
              open: isQRDialogOpen,
              onClose: toggleQRDialog,
              sx: {
                "& .MuiDialog-paper": {
                  padding: "2rem",
                  position: "relative"
                }
              },
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(DialogTitle, {
                sx: {
                  m: 0,
                  p: 2
                },
                children: /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                  "aria-label": "close",
                  onClick: toggleQRDialog,
                  sx: {
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: theme2 => theme2.palette.grey[500]
                  },
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(default_1$3, {})
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(DialogContent, {
                dividers: true,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  ref: qrRef,
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(_default, {
                    value: url,
                    size: 256
                  })
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                  fullWidth: true,
                  variant: "contained",
                  color: "primary",
                  onClick: downloadQRCode,
                  sx: {
                    mt: 2
                  },
                  children: "Download QR Code"
                })]
              })]
            })]
          });
        }
        const box = "_box_14n5a_1";
        const actionButton = "_actionButton_14n5a_6";
        const publishContainer = "_publishContainer_14n5a_11";
        const styles$1 = {
          box: box,
          actionButton: actionButton,
          publishContainer: publishContainer
        };
        function LaunchPage({
          onPublish
        }) {
          const _useTranslation3 = useTranslation("manage"),
            t = _useTranslation3.t;
          const designService = useService("design");
          const dispatch = useDispatch();
          const versionDto = useSelector(state => {
            return state.designState.versionDto;
          });
          const published = versionDto === null || versionDto === void 0 ? void 0 : versionDto.published;
          const hasFatalErrors = useSelector(state => {
            var _state$designState$Su;
            return ((_state$designState$Su = state.designState.Survey) === null || _state$designState$Su === void 0 ? void 0 : _state$designState$Su.errors) && state.designState.Survey.errors.length > 0;
          });
          const params = new URLSearchParams([["version", versionDto === null || versionDto === void 0 ? void 0 : versionDto.version], ["sub_version", versionDto === null || versionDto === void 0 ? void 0 : versionDto.subVersion]]);
          const publish = () => {
            dispatch(setSaving(true));
            designService.publish(params).then(data => {
              dispatch(setSaving(false));
              dispatch(newVersionReceived(data));
              onPublish();
            }).catch(error => {
              dispatch(setSaving(false));
            });
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            className: styles$1.box,
            children: [!published && /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
              display: "flex",
              alignItems: "center",
              className: styles$1.publishContainer,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                variant: "subtitle1",
                children: t("launch.publish_text")
              }), /* @__PURE__ */jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
                children: /* @__PURE__ */jsxRuntimeExports.jsx(CustomTooltip, {
                  showIcon: false,
                  title: !hasFatalErrors ? `${t("launch.publish_tooltip")}` : `${t("launch.publish_error")}`,
                  placement: "top",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                    children: /* @__PURE__ */jsxRuntimeExports.jsxs(Button, {
                      fullWidth: true,
                      variant: "contained",
                      color: "primary",
                      className: styles$1.actionButton,
                      onClick: () => {
                        if (!hasFatalErrors) {
                          publish();
                        }
                      },
                      disabled: hasFatalErrors,
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(SurveyIcon, {
                        name: "launch",
                        color: !hasFatalErrors ? "#fff" : "#bdbdbd"
                      }), t("launch.publish")]
                    })
                  })
                })
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx(EditSurveyGeneral$1, {}), /* @__PURE__ */jsxRuntimeExports.jsx(SurveySharing, {})]
          });
        }
        const mainContainer = "_mainContainer_zluda_1";
        const boxContainer = "_boxContainer_zluda_8";
        const tableBodyCell = "_tableBodyCell_zluda_15";
        const tableHeaderCell = "_tableHeaderCell_zluda_19";
        const flexContainer = "_flexContainer_zluda_23";
        const styles = {
          mainContainer: mainContainer,
          boxContainer: boxContainer,
          tableBodyCell: tableBodyCell,
          tableHeaderCell: tableHeaderCell,
          flexContainer: flexContainer
        };
        function SurveyQuota() {
          const dispatch = useDispatch();
          const _useTranslation4 = useTranslation("manage"),
            t = _useTranslation4.t;
          const survey = useSelector(state => state.editState.survey);
          const _reactExports$useStat9 = reactExports.useState((survey === null || survey === void 0 ? void 0 : survey.quota) > 0),
            _reactExports$useStat10 = _slicedToArray(_reactExports$useStat9, 2),
            checked = _reactExports$useStat10[0],
            setChecked = _reactExports$useStat10[1];
          const _reactExports$useStat11 = reactExports.useState((survey === null || survey === void 0 ? void 0 : survey.quota) >= 0 ? survey.quota : ""),
            _reactExports$useStat12 = _slicedToArray(_reactExports$useStat11, 2),
            limit = _reactExports$useStat12[0],
            setLimit = _reactExports$useStat12[1];
          const changeLimit = value => {
            const intValue = parseInt(value);
            if (Number.isInteger(intValue) && intValue >= 0) {
              setLimit(intValue);
              dispatch(surveyAttributeChanged({
                key: "quota",
                value: intValue
              }));
            }
          };
          const onChangeCheckbox = e => {
            if (!e.target.checked) {
              setLimit("");
              dispatch(surveyAttributeChanged({
                key: "quota",
                value: -1
              }));
            }
            setChecked(e.target.checked);
          };
          const isDisabled = !isSurveyAdmin() || (survey === null || survey === void 0 ? void 0 : survey.status) == SURVEY_STATUS.CLOSED;
          return /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
            className: styles.mainContainer,
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
              className: styles.boxContainer,
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                className: styles.flexContainer,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                  color: "#1a2052",
                  fontWeight: "500",
                  children: t("label.apply_quota")
                }), /* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                  variant: "standard",
                  type: "number",
                  sx: {
                    width: 200
                  },
                  disabled: !checked || isDisabled,
                  label: t("label.total_responses_limit"),
                  value: limit === 0 ? "" : limit,
                  inputProps: {
                    min: 0,
                    max: 1e4,
                    inputMode: "numeric"
                  },
                  onChange: e => {
                    let newLimit = e.target.value === "" ? 0 : parseInt(e.target.value);
                    if (!isNaN(newLimit) && newLimit >= 0 && newLimit <= 1e4) {
                      changeLimit(newLimit);
                    }
                  }
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsx(RHFSwitch, {
                disabled: isDisabled,
                checked,
                onChange: onChangeCheckbox
              })]
            })
          });
        }
        const SurveyQuota$1 = React.memo(SurveyQuota);
        function ExportSurvey() {
          const _useTranslation5 = useTranslation("manage"),
            t = _useTranslation5.t;
          const survey = useSelector(state => state.editState.survey);
          const surveyService = useService("survey");
          const onClick = () => {
            surveyService.exportSurvey(survey.id);
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Button, {
            variant: "outlined",
            component: "label",
            onClick,
            children: [t("edit_survey.export"), /* @__PURE__ */jsxRuntimeExports.jsx(FileDownload, {})]
          });
        }
        const ExportSurvey$1 = React.memo(ExportSurvey);
        function EditSurvey({
          onPublish
        }) {
          const _useTranslation6 = useTranslation("manage"),
            t = _useTranslation6.t;
          const survey = useSelector(state => state.editState.survey);
          const sections = [{
            id: "quotas",
            title: t("edit_survey.quotas"),
            component: /* @__PURE__ */jsxRuntimeExports.jsx(SurveyQuota$1, {})
          }, {
            id: "export",
            title: t("edit_survey.export"),
            component: /* @__PURE__ */jsxRuntimeExports.jsx(ExportSurvey$1, {})
          }];
          return survey && /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            className: styles$4.mainContainer,
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Accordion, {
              className: styles$4.accordionContainer,
              defaultExpanded: true,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(AccordionSummary, {
                expandIcon: /* @__PURE__ */jsxRuntimeExports.jsx(default_1$4, {}),
                "aria-controls": "panel1a-content",
                id: "panel1a-header",
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                  fontWeight: "600",
                  color: "#1a2052",
                  variant: "h5",
                  children: t("edit_survey.launch")
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx(AccordionDetails, {
                className: styles$4.accordionDetails,
                children: /* @__PURE__ */jsxRuntimeExports.jsx(LaunchPage, {
                  onPublish
                })
              })]
            }), sections.map(section => {
              return /* @__PURE__ */jsxRuntimeExports.jsxs(Accordion, {
                className: styles$4.accordionContainer,
                defaultExpanded: true,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(AccordionSummary, {
                  expandIcon: /* @__PURE__ */jsxRuntimeExports.jsx(default_1$4, {}),
                  "aria-controls": "panel1a-content",
                  id: "panel1a-header",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                    fontWeight: "600",
                    color: "#1a2052",
                    variant: "h5",
                    children: section.title
                  })
                }), /* @__PURE__ */jsxRuntimeExports.jsx(AccordionDetails, {
                  className: styles$4.accordionDetails,
                  children: section.component
                })]
              }, section.id);
            })]
          });
        }
        const index = exports("default", React.memo(EditSurvey));
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-Cle0uzuJ.js.map
