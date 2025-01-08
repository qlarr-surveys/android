;
(function () {
  function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
  function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  System.register(['./index-legacy-VHGc_nGn.js', './use-service-legacy-uNDfwPef.js', './Image-legacy-65ZyvYOU.js', './DateUtils-legacy-Dg58phWT.js', './Web-legacy-fzNrSyYZ.js', './dayjs.min-legacy-ByfWyh0j.js', './Delete-legacy-C-Yly2w_.js', './common-legacy-JH1w4dyZ.js', './TextField-legacy-CDzaE-C1.js', './Check-legacy-mRbfrgvh.js', './Card-legacy-D9YP2dW9.js', './Close-legacy-DueKC2rz.js', './Divider-legacy-C9GAW-M3.js', './yup-legacy-Cikjg7JV.js', './survey-legacy-CmPJYFAs.js', './TablePagination-legacy-CBgKDmMX.js', './Checkbox-legacy-CWdBtU_X.js', './SwitchBase-legacy-CGnhZDR0.js', './Tabs-legacy-DPncV328.js', './radioClasses-legacy-C6EYZIXu.js', './tableRowClasses-legacy-D6iguAwE.js', './FormControlLabel-legacy-DpQMzcK5.js', './TableCell-legacy-CqnzAtHi.js', './Toolbar-legacy-HvxMh-_e.js'], function (exports, module) {
    'use strict';

    var capitalize, reactExports, _objectWithoutPropertiesLoose, _extends, clsx, jsxRuntimeExports, interopRequireDefaultExports, Box, useNavigate, useTheme, LoadingDots, styled, useDefaultProps, useSlotProps, composeClasses, createSvgIcon, requireCreateSvgIcon, IconButton, Typography, truncateWithEllipsis, useTranslation, useService, useDispatch, Stack, setLoading, PROCESSED_ERRORS, processApiError, getDirFromSession, Container, Button, Fade, TokenService, usePreviousProps, default_1$3, default_1$5, DeleteModal, serverDateTimeToLocalDateTime, localDateToServerDateTime, badgeClasses, getBadgeUtilityClass, CustomTooltip, Edit, SavingSurvey, Snackbar, Alert, isSurveyAdmin, default_1$4, default_1$6, RHFSelect, useForm, FormProvider, RHFTextField, FileUpload, SurveyClone, ROLES, dayjs, default_1$7, buildResourceUrl, TextField, Check, Card, CardMedia, Close, Divider, create$3, create$6, o, LoadingButton, SURVEY_MODE, TablePagination;
    return {
      setters: [module => {
        capitalize = module.h;
        reactExports = module.r;
        _objectWithoutPropertiesLoose = module.b;
        _extends = module._;
        clsx = module.d;
        jsxRuntimeExports = module.j;
        interopRequireDefaultExports = module.q;
        Box = module.B;
        useNavigate = module.s;
        useTheme = module.y;
        LoadingDots = module.A;
      }, module => {
        styled = module.f;
        useDefaultProps = module.j;
        useSlotProps = module.x;
        composeClasses = module.c;
        createSvgIcon = module.e;
        requireCreateSvgIcon = module.K;
        IconButton = module.I;
        Typography = module.T;
        truncateWithEllipsis = module.bc;
        useTranslation = module.M;
        useService = module.R;
        useDispatch = module.U;
        Stack = module.aL;
        setLoading = module.Z;
        PROCESSED_ERRORS = module.aN;
        processApiError = module.bd;
        getDirFromSession = module.V;
        Container = module.aK;
        Button = module.aD;
        Fade = module.aX;
        TokenService = module.J;
      }, module => {
        usePreviousProps = module.u;
        default_1$3 = module.d;
        default_1$5 = module.a;
        DeleteModal = module.D;
      }, module => {
        serverDateTimeToLocalDateTime = module.s;
        localDateToServerDateTime = module.l;
      }, module => {
        badgeClasses = module.b;
        getBadgeUtilityClass = module.g;
        CustomTooltip = module.C;
        Edit = module.E;
        SavingSurvey = module.S;
        Snackbar = module.a;
        Alert = module.A;
        isSurveyAdmin = module.i;
        default_1$4 = module.d;
        default_1$6 = module.c;
        RHFSelect = module.e;
        useForm = module.u;
        FormProvider = module.F;
        RHFTextField = module.R;
        FileUpload = module.f;
        SurveyClone = module.h;
        ROLES = module.j;
      }, module => {
        dayjs = module.d;
      }, module => {
        default_1$7 = module.d;
      }, module => {
        buildResourceUrl = module.b;
      }, module => {
        TextField = module.T;
      }, module => {
        Check = module.C;
      }, module => {
        Card = module.C;
      }, module => {
        CardMedia = module.C;
        Close = module.a;
      }, module => {
        Divider = module.D;
      }, module => {
        create$3 = module.c;
        create$6 = module.a;
        o = module.o;
        LoadingButton = module.L;
      }, module => {
        SURVEY_MODE = module.S;
      }, module => {
        TablePagination = module.T;
      }, null, null, null, null, null, null, null, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._mainContainer_1kl2v_1 {\n  margin: auto;\n  min-width: 300px;\n  height: calc(100vh - 64px);\n  overflow: auto;\n}\n\n._newSurveysButton_1kl2v_8 {\n  margin-bottom: 48px;\n  justify-content: flex-start;\n}\n\n._content_1kl2v_13 {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin-top: 30px;\n}\n\n._loadingWrapper_1kl2v_20 {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  padding-top: 50px;\n}\n\n._allButton_1kl2v_27 {\n  margin-top: 2rem !important;\n  background-color: #16205b !important;\n  color: #fff !important;\n  border-radius: 50px !important;\n  font-size: 1.5rem !important;\n  padding: 0.25rem 6rem !important;\n  text-transform: none !important;\n}\n\n@media only screen and (max-width: 1024px) {\n  ._content_1kl2v_13 {\n    padding: 0 1rem;\n  }\n}\n\n._surveyCardsContainer_1kl2v_43 {\n  margin-top: 24px;\n  padding: 16px;\n  border: 2px dashed #ccc;\n  border-radius: 8px;\n  background-color: #f9f9f9;\n}\n\n._noSurveys_1kl2v_51 {\n  text-align: center;\n}\n._surveyHeader_k7hfg_1 {\n  padding: 5px;\n  color: #fff;\n  text-transform: capitalize;\n}\n\n._contentCard_k7hfg_7 {\n  padding: 5px;\n}\n\n._actionBtn_k7hfg_11 {\n  margin-top: 30px;\n  display: flex;\n  justify-content: space-between;\n}\n\n._card_k7hfg_17 {\n  border-radius: 5px !important;\n  box-shadow: none !important;\n}\n\n._cardContent_k7hfg_22 {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n}\n\n._imageContainer_k7hfg_28 {\n  padding: 1rem;\n  background-color: #f7f8fc;\n  display: flex;\n  justify-content: center;\n}\n\n._surveyContent_k7hfg_35 {\n  display: flex;\n  align-items: center;\n  gap: 7rem;\n  flex: 1;\n  width: 100%;\n}\n\n._surveyTitle_k7hfg_43 {\n  width: 13rem;\n  color: #181735;\n}\n\n._surveyStatus_k7hfg_48 {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  width: 5rem;\n}\n\n._badge_k7hfg_55 {\n  height: 0.5rem;\n  width: 0.5rem;\n  border-radius: 99999px;\n}\n\n._textTransform_k7hfg_61 {\n  text-transform: capitalize;\n}\n\n._surveyResponse_k7hfg_65 {\n  display: flex;\n  align-items: center;\n  width: 9rem;\n  gap: 0.5rem;\n}\n\n._surveyActions_k7hfg_72 {\n  display: flex;\n  flex-direction: row !important;\n  justify-content: flex-start;\n  gap: 0.5rem;\n  margin-right: 1rem;\n  flex: auto;\n  width: 15rem;\n}\n\n._iconButton_k7hfg_82 {\n  border: 2px solid #d7d7d7 !important;\n  border-radius: 14px !important;\n  padding: 0.3rem 1rem !important;\n  height: fit-content;\n  width: 6rem;\n}\n\n\n\n\n@media only screen and (max-width: 1024px) {\n  ._cardContent_k7hfg_22 {\n    flex-direction: column;\n    padding: 0rem 1rem 1rem 1rem;\n  }\n\n  ._surveyContent_k7hfg_35 {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: flex-start;\n  }\n\n  ._imageContainer_k7hfg_28 {\n    width: 100%;\n  }\n\n  ._surveyActions_k7hfg_72 {\n    width: 100%;\n  }\n}\n\n@media only screen and (min-width: 1024px) and (max-width: 1440px) {\n  ._surveyContent_k7hfg_35 {\n    gap: 2rem;\n  }\n\n  ._surveyResponse_k7hfg_65 {\n    width: 7rem;\n  }\n}\n\n\n\n._logo_k7hfg_126 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n._logo_k7hfg_126 img {\n  margin: auto;\n  display: block;\n  object-fit: contain;\n}\n\n\n._logoImageWrapper_k7hfg_139 {\n  position: relative;\n}\n\n._imageOverlay_k7hfg_143 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.3);\n  opacity: 1;\n  transition: opacity 0.3s ease;\n}\n\n\n._cameraIconWrapper_k7hfg_155 {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  z-index: 1;\n\n}\n\n._logoImageWrapper_k7hfg_139:hover ._cameraIconWrapper_k7hfg_155 {\n  opacity: 1;\n}\n\n._cameraIcon_k7hfg_155 {\n  color: white;\n  pointer-events: none;\n\n}\n\n\n._logoImageWrapper_k7hfg_139 {\n  position: relative;\n  display: inline-block;\n  flex: 1;\n}\n\n._relativeContainer_k7hfg_182 {\n  position: relative;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n._absoluteOverlay_k7hfg_187 {\n  width: 100%;\n  position: absolute;\n  z-index: 99999;\n  bottom: 0;\n  color: white;\n}\n\n\n\n\n\n\n._container_k7hfg_200 {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n._truncatedText_k7hfg_206 {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n  line-height: 1.5em;\n  max-height: 4.5em;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n  line-clamp: 3;\n  white-space: normal;\n  word-wrap: break-word;\n}\n\n._exampleTruncatedText_k7hfg_220 {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n  line-height: 1.5em;\n  max-height: 15em;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 10;\n  line-clamp: 10;\n  white-space: normal;\n  word-wrap: break-word;\n}\n\n\n._titleContainer_k7hfg_235 {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  justify-content: space-between;\n  position: relative;\n}\n\n._surveyLink_k7hfg_243 {\n  flex-grow: 1;\n  color: inherit;\n}\n\n._nameIcon_k7hfg_248 {\n  position: absolute !important;\n  right: 3px;\n  opacity: 0;\n}\n\n._titleContainer_k7hfg_235:hover ._nameIcon_k7hfg_248 {\n  opacity: 1;\n}\n\n\n._descriptionContainer_k7hfg_259 {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  justify-content: space-between;\n  position: relative;\n}\n\n._truncatedText_k7hfg_206 {\n  flex-grow: 1;\n  color: inherit;\n}\n\n._descriptionIcon_k7hfg_272 {\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n\n._descriptionContainer_k7hfg_259:hover ._descriptionIcon_k7hfg_272 {\n  opacity: 1;\n}\n\n._photoIcon_k7hfg_281 {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  opacity: 0;\n  cursor: pointer;\n}\n\n\n._logoImageWrapper_k7hfg_139:hover ._photoIcon_k7hfg_281 {\n  opacity: 1;\n}._exampleSurveysContainer_apkeh_1{\n  background-color: #f7f7f9;\n  padding: 16px;\n  margin-bottom: 48px;\n  border-radius: 8px;\n}._createUserCard_zrfc2_1._createUserCard_zrfc2_1 {\n  padding: 2rem;\n  border-radius: 20px;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,\n    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\n  margin-bottom: 50px;\n}\n\n._formGroup_zrfc2_9._formGroup_zrfc2_9 {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n}\n._rightContainer_zrfc2_16._rightContainer_zrfc2_16 {\n  display: flex;\n  flex-direction: row;\n  gap: 2.5rem;\n  flex: auto;\n  justify-content: flex-end;\n}\n\n._createButton_zrfc2_24._createButton_zrfc2_24 {\n  text-transform: none;\n  color: white;\n  padding: 0.75rem 7rem;\n  background-color: #04bdf3;\n  border-radius: 20px;\n  height: fit-content;\n  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;\n}\n._createButton_zrfc2_24._createButton_zrfc2_24:hover {\n  border: 1px solid #04bdf3;\n  color: #04bdf3;\n  background-color: #fff;\n}\n\n._surveyNameInput_zrfc2_39 {\n  padding-left: 14px;\n}\n\n@media only screen and (max-width: 768px) {\n  ._createUserCard_zrfc2_1._createUserCard_zrfc2_1 {\n    padding: 1rem;\n  }\n  ._formGroup_zrfc2_9._formGroup_zrfc2_9 {\n    flex-direction: column;\n  }\n  ._rightContainer_zrfc2_16._rightContainer_zrfc2_16 {\n    width: 100%;\n    flex-direction: column;\n    gap: 2rem;\n  }\n  ._selectInput_zrfc2_55 {\n    width: 100% !important;\n  }\n  ._surveyNameInput_zrfc2_39._surveyNameInput_zrfc2_39 {\n    width: 100%;\n  }\n}\n\n._errorText_zrfc2_63 {\n  color: #eb5757 !important;\n  padding-left: 14px;\n}\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        exports("default", Dashboard);

        /**
         *
         * Demos:
         *
         * - [Badge](https://next.mui.com/base-ui/react-badge/#hook)
         *
         * API:
         *
         * - [useBadge API](https://next.mui.com/base-ui/react-badge/hooks-api/#use-badge)
         */
        function useBadge(parameters) {
          const badgeContentProp = parameters.badgeContent,
            _parameters$invisible = parameters.invisible,
            invisibleProp = _parameters$invisible === void 0 ? false : _parameters$invisible,
            _parameters$max = parameters.max,
            maxProp = _parameters$max === void 0 ? 99 : _parameters$max,
            _parameters$showZero = parameters.showZero,
            showZero = _parameters$showZero === void 0 ? false : _parameters$showZero;
          const prevProps = usePreviousProps({
            badgeContent: badgeContentProp,
            max: maxProp
          });
          let invisible = invisibleProp;
          if (invisibleProp === false && badgeContentProp === 0 && !showZero) {
            invisible = true;
          }
          const _ref3 = invisible ? prevProps : parameters,
            badgeContent = _ref3.badgeContent,
            _ref3$max = _ref3.max,
            max = _ref3$max === void 0 ? maxProp : _ref3$max;
          const displayValue = badgeContent && Number(badgeContent) > max ? `${max}+` : badgeContent;
          return {
            badgeContent,
            invisible,
            max,
            displayValue
          };
        }
        const _excluded = ["anchorOrigin", "className", "classes", "component", "components", "componentsProps", "children", "overlap", "color", "invisible", "max", "badgeContent", "slots", "slotProps", "showZero", "variant"];
        const RADIUS_STANDARD = 10;
        const RADIUS_DOT = 4;
        const useUtilityClasses = ownerState => {
          const color = ownerState.color,
            anchorOrigin = ownerState.anchorOrigin,
            invisible = ownerState.invisible,
            overlap = ownerState.overlap,
            variant = ownerState.variant,
            _ownerState$classes = ownerState.classes,
            classes = _ownerState$classes === void 0 ? {} : _ownerState$classes;
          const slots = {
            root: ["root"],
            badge: ["badge", variant, invisible && "invisible", `anchorOrigin${capitalize(anchorOrigin.vertical)}${capitalize(anchorOrigin.horizontal)}`, `anchorOrigin${capitalize(anchorOrigin.vertical)}${capitalize(anchorOrigin.horizontal)}${capitalize(overlap)}`, `overlap${capitalize(overlap)}`, color !== "default" && `color${capitalize(color)}`]
          };
          return composeClasses(slots, getBadgeUtilityClass, classes);
        };
        const BadgeRoot = styled("span", {
          name: "MuiBadge",
          slot: "Root",
          overridesResolver: (props, styles) => styles.root
        })({
          position: "relative",
          display: "inline-flex",
          // For correct alignment with the text.
          verticalAlign: "middle",
          flexShrink: 0
        });
        const BadgeBadge = styled("span", {
          name: "MuiBadge",
          slot: "Badge",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.badge, styles[ownerState.variant], styles[`anchorOrigin${capitalize(ownerState.anchorOrigin.vertical)}${capitalize(ownerState.anchorOrigin.horizontal)}${capitalize(ownerState.overlap)}`], ownerState.color !== "default" && styles[`color${capitalize(ownerState.color)}`], ownerState.invisible && styles.invisible];
          }
        })(({
          theme
        }) => {
          var _theme$vars;
          return {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            position: "absolute",
            boxSizing: "border-box",
            fontFamily: theme.typography.fontFamily,
            fontWeight: theme.typography.fontWeightMedium,
            fontSize: theme.typography.pxToRem(12),
            minWidth: RADIUS_STANDARD * 2,
            lineHeight: 1,
            padding: "0 6px",
            height: RADIUS_STANDARD * 2,
            borderRadius: RADIUS_STANDARD,
            zIndex: 1,
            // Render the badge on top of potential ripples.
            transition: theme.transitions.create("transform", {
              easing: theme.transitions.easing.easeInOut,
              duration: theme.transitions.duration.enteringScreen
            }),
            variants: [...Object.keys(((_theme$vars = theme.vars) != null ? _theme$vars : theme).palette).filter(key => {
              var _theme$vars2, _theme$vars3;
              return ((_theme$vars2 = theme.vars) != null ? _theme$vars2 : theme).palette[key].main && ((_theme$vars3 = theme.vars) != null ? _theme$vars3 : theme).palette[key].contrastText;
            }).map(color => ({
              props: {
                color
              },
              style: {
                backgroundColor: (theme.vars || theme).palette[color].main,
                color: (theme.vars || theme).palette[color].contrastText
              }
            })), {
              props: {
                variant: "dot"
              },
              style: {
                borderRadius: RADIUS_DOT,
                height: RADIUS_DOT * 2,
                minWidth: RADIUS_DOT * 2,
                padding: 0
              }
            }, {
              props: ({
                ownerState
              }) => ownerState.anchorOrigin.vertical === "top" && ownerState.anchorOrigin.horizontal === "right" && ownerState.overlap === "rectangular",
              style: {
                top: 0,
                right: 0,
                transform: "scale(1) translate(50%, -50%)",
                transformOrigin: "100% 0%",
                [`&.${badgeClasses.invisible}`]: {
                  transform: "scale(0) translate(50%, -50%)"
                }
              }
            }, {
              props: ({
                ownerState
              }) => ownerState.anchorOrigin.vertical === "bottom" && ownerState.anchorOrigin.horizontal === "right" && ownerState.overlap === "rectangular",
              style: {
                bottom: 0,
                right: 0,
                transform: "scale(1) translate(50%, 50%)",
                transformOrigin: "100% 100%",
                [`&.${badgeClasses.invisible}`]: {
                  transform: "scale(0) translate(50%, 50%)"
                }
              }
            }, {
              props: ({
                ownerState
              }) => ownerState.anchorOrigin.vertical === "top" && ownerState.anchorOrigin.horizontal === "left" && ownerState.overlap === "rectangular",
              style: {
                top: 0,
                left: 0,
                transform: "scale(1) translate(-50%, -50%)",
                transformOrigin: "0% 0%",
                [`&.${badgeClasses.invisible}`]: {
                  transform: "scale(0) translate(-50%, -50%)"
                }
              }
            }, {
              props: ({
                ownerState
              }) => ownerState.anchorOrigin.vertical === "bottom" && ownerState.anchorOrigin.horizontal === "left" && ownerState.overlap === "rectangular",
              style: {
                bottom: 0,
                left: 0,
                transform: "scale(1) translate(-50%, 50%)",
                transformOrigin: "0% 100%",
                [`&.${badgeClasses.invisible}`]: {
                  transform: "scale(0) translate(-50%, 50%)"
                }
              }
            }, {
              props: ({
                ownerState
              }) => ownerState.anchorOrigin.vertical === "top" && ownerState.anchorOrigin.horizontal === "right" && ownerState.overlap === "circular",
              style: {
                top: "14%",
                right: "14%",
                transform: "scale(1) translate(50%, -50%)",
                transformOrigin: "100% 0%",
                [`&.${badgeClasses.invisible}`]: {
                  transform: "scale(0) translate(50%, -50%)"
                }
              }
            }, {
              props: ({
                ownerState
              }) => ownerState.anchorOrigin.vertical === "bottom" && ownerState.anchorOrigin.horizontal === "right" && ownerState.overlap === "circular",
              style: {
                bottom: "14%",
                right: "14%",
                transform: "scale(1) translate(50%, 50%)",
                transformOrigin: "100% 100%",
                [`&.${badgeClasses.invisible}`]: {
                  transform: "scale(0) translate(50%, 50%)"
                }
              }
            }, {
              props: ({
                ownerState
              }) => ownerState.anchorOrigin.vertical === "top" && ownerState.anchorOrigin.horizontal === "left" && ownerState.overlap === "circular",
              style: {
                top: "14%",
                left: "14%",
                transform: "scale(1) translate(-50%, -50%)",
                transformOrigin: "0% 0%",
                [`&.${badgeClasses.invisible}`]: {
                  transform: "scale(0) translate(-50%, -50%)"
                }
              }
            }, {
              props: ({
                ownerState
              }) => ownerState.anchorOrigin.vertical === "bottom" && ownerState.anchorOrigin.horizontal === "left" && ownerState.overlap === "circular",
              style: {
                bottom: "14%",
                left: "14%",
                transform: "scale(1) translate(-50%, 50%)",
                transformOrigin: "0% 100%",
                [`&.${badgeClasses.invisible}`]: {
                  transform: "scale(0) translate(-50%, 50%)"
                }
              }
            }, {
              props: {
                invisible: true
              },
              style: {
                transition: theme.transitions.create("transform", {
                  easing: theme.transitions.easing.easeInOut,
                  duration: theme.transitions.duration.leavingScreen
                })
              }
            }]
          };
        });
        const Badge = /* @__PURE__ */reactExports.forwardRef(function Badge2(inProps, ref) {
          var _ref, _slots$root, _ref2, _slots$badge, _slotProps$root, _slotProps$badge;
          const props = useDefaultProps({
            props: inProps,
            name: "MuiBadge"
          });
          const _props$anchorOrigin = props.anchorOrigin,
            anchorOriginProp = _props$anchorOrigin === void 0 ? {
              vertical: "top",
              horizontal: "right"
            } : _props$anchorOrigin,
            className = props.className,
            component = props.component,
            _props$components = props.components,
            components = _props$components === void 0 ? {} : _props$components,
            _props$componentsProp = props.componentsProps,
            componentsProps = _props$componentsProp === void 0 ? {} : _props$componentsProp,
            children = props.children,
            _props$overlap = props.overlap,
            overlapProp = _props$overlap === void 0 ? "rectangular" : _props$overlap,
            _props$color = props.color,
            colorProp = _props$color === void 0 ? "default" : _props$color,
            _props$invisible = props.invisible,
            invisibleProp = _props$invisible === void 0 ? false : _props$invisible,
            _props$max = props.max,
            maxProp = _props$max === void 0 ? 99 : _props$max,
            badgeContentProp = props.badgeContent,
            slots = props.slots,
            slotProps = props.slotProps,
            _props$showZero = props.showZero,
            showZero = _props$showZero === void 0 ? false : _props$showZero,
            _props$variant = props.variant,
            variantProp = _props$variant === void 0 ? "standard" : _props$variant,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const _useBadge = useBadge({
              max: maxProp,
              invisible: invisibleProp,
              badgeContent: badgeContentProp,
              showZero
            }),
            badgeContent = _useBadge.badgeContent,
            invisibleFromHook = _useBadge.invisible,
            max = _useBadge.max,
            displayValueFromHook = _useBadge.displayValue;
          const prevProps = usePreviousProps({
            anchorOrigin: anchorOriginProp,
            color: colorProp,
            overlap: overlapProp,
            variant: variantProp,
            badgeContent: badgeContentProp
          });
          const invisible = invisibleFromHook || badgeContent == null && variantProp !== "dot";
          const _ref4 = invisible ? prevProps : props,
            _ref4$color = _ref4.color,
            color = _ref4$color === void 0 ? colorProp : _ref4$color,
            _ref4$overlap = _ref4.overlap,
            overlap = _ref4$overlap === void 0 ? overlapProp : _ref4$overlap,
            _ref4$anchorOrigin = _ref4.anchorOrigin,
            anchorOrigin = _ref4$anchorOrigin === void 0 ? anchorOriginProp : _ref4$anchorOrigin,
            _ref4$variant = _ref4.variant,
            variant = _ref4$variant === void 0 ? variantProp : _ref4$variant;
          const displayValue = variant !== "dot" ? displayValueFromHook : void 0;
          const ownerState = _extends({}, props, {
            badgeContent,
            invisible,
            max,
            displayValue,
            showZero,
            anchorOrigin,
            color,
            overlap,
            variant
          });
          const classes = useUtilityClasses(ownerState);
          const RootSlot = (_ref = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : components.Root) != null ? _ref : BadgeRoot;
          const BadgeSlot = (_ref2 = (_slots$badge = slots == null ? void 0 : slots.badge) != null ? _slots$badge : components.Badge) != null ? _ref2 : BadgeBadge;
          const rootSlotProps = (_slotProps$root = slotProps == null ? void 0 : slotProps.root) != null ? _slotProps$root : componentsProps.root;
          const badgeSlotProps = (_slotProps$badge = slotProps == null ? void 0 : slotProps.badge) != null ? _slotProps$badge : componentsProps.badge;
          const rootProps = useSlotProps({
            elementType: RootSlot,
            externalSlotProps: rootSlotProps,
            externalForwardedProps: other,
            additionalProps: {
              ref,
              as: component
            },
            ownerState,
            className: clsx(rootSlotProps == null ? void 0 : rootSlotProps.className, classes.root, className)
          });
          const badgeProps = useSlotProps({
            elementType: BadgeSlot,
            externalSlotProps: badgeSlotProps,
            ownerState,
            className: clsx(classes.badge, badgeSlotProps == null ? void 0 : badgeSlotProps.className)
          });
          return /* @__PURE__ */jsxRuntimeExports.jsxs(RootSlot, _extends({}, rootProps, {
            children: [children, /* @__PURE__ */jsxRuntimeExports.jsx(BadgeSlot, _extends({}, badgeProps, {
              children: displayValue
            }))]
          }));
        });
        const Add = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
        }), 'Add');
        const CopyAll = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M18 2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H9V4h9zM3 15v-2h2v2zm0-5.5h2v2H3zM10 20h2v2h-2zm-7-1.5v-2h2v2zM5 22c-1.1 0-2-.9-2-2h2zm3.5 0h-2v-2h2zm5 0v-2h2c0 1.1-.9 2-2 2M5 6v2H3c0-1.1.9-2 2-2"
        }), 'CopyAll');
        const Description = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm2 16H8v-2h8zm0-4H8v-2h8zm-3-5V3.5L18.5 9z"
        }), 'Description');
        const Stop = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M6 6h12v12H6z"
        }), 'Stop');
        const mainContainer = "_mainContainer_1kl2v_1";
        const newSurveysButton = "_newSurveysButton_1kl2v_8";
        const content = "_content_1kl2v_13";
        const loadingWrapper = "_loadingWrapper_1kl2v_20";
        const allButton = "_allButton_1kl2v_27";
        const surveyCardsContainer = "_surveyCardsContainer_1kl2v_43";
        const noSurveys = "_noSurveys_1kl2v_51";
        const styles$3 = {
          mainContainer: mainContainer,
          newSurveysButton: newSurveysButton,
          content: content,
          loadingWrapper: loadingWrapper,
          allButton: allButton,
          surveyCardsContainer: surveyCardsContainer,
          noSurveys: noSurveys
        };
        var Article = {};
        var _interopRequireDefault$2 = interopRequireDefaultExports;
        Object.defineProperty(Article, "__esModule", {
          value: true
        });
        var default_1$2 = Article.default = void 0;
        var _createSvgIcon$2 = _interopRequireDefault$2(requireCreateSvgIcon());
        var _jsxRuntime$2 = jsxRuntimeExports;
        default_1$2 = Article.default = (0, _createSvgIcon$2.default)(/*#__PURE__*/(0, _jsxRuntime$2.jsx)("path", {
          d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"
        }), 'Article');
        const surveyHeader = "_surveyHeader_k7hfg_1";
        const contentCard = "_contentCard_k7hfg_7";
        const actionBtn = "_actionBtn_k7hfg_11";
        const card = "_card_k7hfg_17";
        const cardContent = "_cardContent_k7hfg_22";
        const imageContainer = "_imageContainer_k7hfg_28";
        const surveyContent = "_surveyContent_k7hfg_35";
        const surveyTitle = "_surveyTitle_k7hfg_43";
        const surveyStatus = "_surveyStatus_k7hfg_48";
        const badge = "_badge_k7hfg_55";
        const textTransform = "_textTransform_k7hfg_61";
        const surveyResponse = "_surveyResponse_k7hfg_65";
        const surveyActions = "_surveyActions_k7hfg_72";
        const iconButton = "_iconButton_k7hfg_82";
        const logo = "_logo_k7hfg_126";
        const logoImageWrapper = "_logoImageWrapper_k7hfg_139";
        const imageOverlay = "_imageOverlay_k7hfg_143";
        const cameraIconWrapper = "_cameraIconWrapper_k7hfg_155";
        const cameraIcon = "_cameraIcon_k7hfg_155";
        const relativeContainer = "_relativeContainer_k7hfg_182";
        const absoluteOverlay = "_absoluteOverlay_k7hfg_187";
        const container = "_container_k7hfg_200";
        const truncatedText = "_truncatedText_k7hfg_206";
        const exampleTruncatedText = "_exampleTruncatedText_k7hfg_220";
        const titleContainer = "_titleContainer_k7hfg_235";
        const surveyLink = "_surveyLink_k7hfg_243";
        const nameIcon = "_nameIcon_k7hfg_248";
        const descriptionContainer = "_descriptionContainer_k7hfg_259";
        const descriptionIcon = "_descriptionIcon_k7hfg_272";
        const photoIcon = "_photoIcon_k7hfg_281";
        const styles$2 = {
          surveyHeader: surveyHeader,
          contentCard: contentCard,
          actionBtn: actionBtn,
          card: card,
          cardContent: cardContent,
          imageContainer: imageContainer,
          surveyContent: surveyContent,
          surveyTitle: surveyTitle,
          surveyStatus: surveyStatus,
          badge: badge,
          textTransform: textTransform,
          surveyResponse: surveyResponse,
          surveyActions: surveyActions,
          iconButton: iconButton,
          logo: logo,
          logoImageWrapper: logoImageWrapper,
          imageOverlay: imageOverlay,
          cameraIconWrapper: cameraIconWrapper,
          cameraIcon: cameraIcon,
          relativeContainer: relativeContainer,
          absoluteOverlay: absoluteOverlay,
          container: container,
          truncatedText: truncatedText,
          exampleTruncatedText: exampleTruncatedText,
          titleContainer: titleContainer,
          surveyLink: surveyLink,
          nameIcon: nameIcon,
          descriptionContainer: descriptionContainer,
          descriptionIcon: descriptionIcon,
          photoIcon: photoIcon
        };
        function fDate(date, newFormat) {
          const fm = "DD MMM YYYY";
          return date ? dayjs(date).format(fm) : "";
        }
        var FormatQuote = {};
        var _interopRequireDefault$1 = interopRequireDefaultExports;
        Object.defineProperty(FormatQuote, "__esModule", {
          value: true
        });
        var default_1$1 = FormatQuote.default = void 0;
        var _createSvgIcon$1 = _interopRequireDefault$1(requireCreateSvgIcon());
        var _jsxRuntime$1 = jsxRuntimeExports;
        default_1$1 = FormatQuote.default = (0, _createSvgIcon$1.default)(/*#__PURE__*/(0, _jsxRuntime$1.jsx)("path", {
          d: "M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"
        }), 'FormatQuote');
        var Warning = {};
        var _interopRequireDefault = interopRequireDefaultExports;
        Object.defineProperty(Warning, "__esModule", {
          value: true
        });
        var default_1 = Warning.default = void 0;
        var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
        var _jsxRuntime = jsxRuntimeExports;
        default_1 = Warning.default = (0, _createSvgIcon.default)(/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
          d: "M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z"
        }), 'Warning');
        const EditableSurveyTitle = ({
          survey,
          onSave,
          isEditable = true
        }) => {
          const _reactExports$useStat = reactExports.useState(false),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            isEditing = _reactExports$useStat2[0],
            setIsEditing = _reactExports$useStat2[1];
          const _reactExports$useStat3 = reactExports.useState(survey.name),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            title = _reactExports$useStat4[0],
            setTitle = _reactExports$useStat4[1];
          const handleTitleChange = event => {
            const newTitle = event.target.value;
            if (newTitle.length <= 50) {
              setTitle(newTitle);
            }
          };
          const handleSave = () => {
            if (title.trim() === "") {
              setTitle(survey.name);
            } else if (title !== survey.name) {
              onSave(title, () => setTitle(survey.name));
            }
            setIsEditing(false);
          };
          const handleKeyDown = event => {
            if (event.key === "Enter") {
              handleSave();
            }
          };
          const handleEditClick = event => {
            event.stopPropagation();
            setIsEditing(true);
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
            className: styles$2.titleContainer,
            children: isEditing ? /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                sx: {
                  px: 3,
                  flexGrow: 1
                },
                value: title,
                onChange: handleTitleChange,
                onKeyDown: handleKeyDown,
                autoFocus: true,
                variant: "standard",
                fullWidth: true,
                InputProps: {
                  style: {
                    color: "white"
                  }
                }
              }), /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                className: styles$2.saveIcon,
                onClick: handleSave,
                sx: {
                  ml: 1
                },
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Check, {
                  sx: {
                    color: "white"
                  }
                })
              })]
            }) : /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
              children: [title.length > 20 ? /* @__PURE__ */jsxRuntimeExports.jsx(CustomTooltip, {
                title,
                showIcon: false,
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                  variant: "h4",
                  sx: {
                    px: 3
                  },
                  noWrap: true,
                  children: truncateWithEllipsis(title, 18)
                })
              }) : /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                variant: "h4",
                sx: {
                  px: 3
                },
                noWrap: true,
                children: truncateWithEllipsis(title, 18)
              }), isEditable && /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                className: styles$2.nameIcon,
                onClick: handleEditClick,
                sx: {
                  ml: 1
                },
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Edit, {
                  sx: {
                    color: "white"
                  }
                })
              })]
            })
          });
        };
        const EditableSurveyDescription = ({
          survey,
          onSave,
          isEditable = true,
          isExample
        }) => {
          const _reactExports$useStat5 = reactExports.useState(false),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            isDescriptionEditing = _reactExports$useStat6[0],
            setIsDescriptionEditing = _reactExports$useStat6[1];
          const _reactExports$useStat7 = reactExports.useState(survey.description),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            description = _reactExports$useStat8[0],
            setDescription = _reactExports$useStat8[1];
          const charLimit = isExample ? 450 : 125;
          const handleDescriptionChange = event => {
            setDescription(event.target.value);
          };
          const handleSave = () => {
            if (description !== survey.description) {
              onSave(description, () => setDescription(survey.description));
            }
            setIsDescriptionEditing(false);
          };
          const handleKeyDown = event => {
            if (event.key === "Enter") {
              handleSave();
            }
          };
          const handleEditClick = event => {
            event.stopPropagation();
            setIsDescriptionEditing(true);
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
            className: styles$2.descriptionContainer,
            children: isDescriptionEditing ? /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                sx: {
                  px: 3
                },
                value: description,
                onChange: handleDescriptionChange,
                onKeyDown: handleKeyDown,
                autoFocus: true,
                variant: "standard",
                fullWidth: true,
                multiline: true,
                rows: 3
              }), /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                className: `${styles$2.saveIcon}`,
                onClick: handleSave,
                sx: {
                  ml: 1
                },
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Check, {
                  sx: {
                    color: "gray"
                  }
                })
              })]
            }) : /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
              children: [(description === null || description === void 0 ? void 0 : description.length) > charLimit ? /* @__PURE__ */jsxRuntimeExports.jsx(CustomTooltip, {
                title: description,
                showIcon: false,
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                  variant: "caption",
                  sx: {
                    px: 3,
                    color: description ? "inherit" : "gray",
                    flexGrow: 1
                  },
                  className: `${isExample ? styles$2.exampleTruncatedText : styles$2.truncatedText}`,
                  children: truncateWithEllipsis(description, charLimit) || "Click to add a description..."
                })
              }) : /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                variant: "caption",
                sx: {
                  px: 3,
                  color: description ? "inherit" : "gray",
                  flexGrow: 1
                },
                className: `${isExample ? styles$2.exampleTruncatedText : styles$2.truncatedText}`,
                children: truncateWithEllipsis(description, charLimit) || "Click to add a description..."
              }), isEditable && /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                className: `${styles$2.descriptionIcon}`,
                onClick: handleEditClick,
                sx: {
                  ml: 1
                },
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Edit, {
                  sx: {
                    color: "gray"
                  }
                })
              })]
            })
          });
        };
        const STATUS = {
          DRAFT: "draft",
          CLOSED: "closed",
          ACTIVE: "active",
          EXPIRED: "expired",
          SCHEDULED: "scheduled"
        };
        const status = survey => {
          switch (survey.status) {
            case "draft":
              return STATUS.DRAFT;
            case "closed":
              return STATUS.CLOSED;
            case "active":
              if (survey.endDate && serverDateTimeToLocalDateTime(survey.endDate) < Date.now()) {
                return STATUS.EXPIRED;
              } else if (survey.startDate && serverDateTimeToLocalDateTime(survey.startDate) > Date.now()) {
                return STATUS.SCHEDULED;
              } else {
                return STATUS.ACTIVE;
              }
            default:
              return STATUS.DRAFT;
          }
        };
        const bgHeader = status2 => {
          switch (status2) {
            case STATUS.DRAFT:
              return "#e9db3e";
            case STATUS.CLOSED:
              return "#d32f2f";
            case STATUS.EXPIRED:
              return "#9d4435";
            case STATUS.SCHEDULED:
              return "#607d8b";
            case STATUS.ACTIVE:
              return "#669834";
            default:
              return;
          }
        };
        const Survey = ({
          survey,
          example = false,
          onClone,
          onDelete,
          onClose,
          onUpdateTitle,
          onUpdateDescription,
          onUpdateImage
        }) => {
          const _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          const surveyStatus = status(survey);
          const surveyService = useService("survey");
          const designService = useService("design");
          const _reactExports$useStat9 = reactExports.useState(false),
            _reactExports$useStat10 = _slicedToArray(_reactExports$useStat9, 2),
            openSnackbar = _reactExports$useStat10[0],
            setOpenSnackbar = _reactExports$useStat10[1];
          const _reactExports$useStat11 = reactExports.useState(null),
            _reactExports$useStat12 = _slicedToArray(_reactExports$useStat11, 2),
            error = _reactExports$useStat12[0],
            setError = _reactExports$useStat12[1];
          const navigate = useNavigate();
          const dispatch = useDispatch();
          const theme = useTheme();
          const handleChangeTitle = (newTitle, revertTitle) => {
            dispatch(setLoading(true));
            surveyService.putSurvey(_objectSpread(_objectSpread({}, survey), {}, {
              name: newTitle
            }), survey.id).then(() => {
              onUpdateTitle(survey.id, newTitle);
            }).catch(processedError => {
              if (processedError.name == PROCESSED_ERRORS.DUPLICATE_SURVEY_NAME.name) {
                setError(t(`processed_errors.${processedError.name}`));
                setOpenSnackbar(true);
                revertTitle();
              }
            }).finally(() => {
              dispatch(setLoading(false));
            });
          };
          const handleChangeDescription = newDescription => {
            dispatch(setLoading(true));
            surveyService.putSurvey(_objectSpread(_objectSpread({}, survey), {}, {
              description: newDescription
            }), survey.id).then(() => {
              onUpdateDescription(survey.id, newDescription);
            }).catch(processedError => {}).finally(() => {
              dispatch(setLoading(false));
            });
          };
          const handleCloseSnackbar = () => {
            setOpenSnackbar(false);
          };
          const handleImageUpload = event => {
            const image = event.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
              designService.uploadResource(image, survey.id).then(response => {
                surveyService.putSurvey({
                  image: response.name
                }, survey.id).then(result => {
                  onUpdateImage(survey.id, response.name);
                }).catch(err => {
                  setError(t(`processed_errors.${err.name}`));
                  setOpenSnackbar(true);
                }).finally(() => {
                  dispatch(setLoading(false));
                });
              }).catch(err => {
                setError(t(`processed_errors.${err.name}`));
                setOpenSnackbar(true);
              }).finally(() => {
                dispatch(setLoading(false));
              });
            };
            reader.readAsDataURL(image);
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(SavingSurvey, {}), /* @__PURE__ */jsxRuntimeExports.jsx(Snackbar, {
              open: openSnackbar,
              autoHideDuration: 6e3,
              onClose: handleCloseSnackbar,
              children: /* @__PURE__ */jsxRuntimeExports.jsx(Alert, {
                onClose: handleCloseSnackbar,
                severity: "error",
                children: error
              })
            }), /* @__PURE__ */jsxRuntimeExports.jsxs(Card, {
              sx: {
                "&:hover": {
                  boxShadow: theme2 => theme2.customShadows.z24
                }
              },
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
                sx: {
                  pb: 0
                },
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
                  spacing: 0.5,
                  sx: {
                    mb: 1
                  },
                  children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                    className: styles$2.relativeContainer,
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(Box, {
                      className: styles$2.absoluteOverlay,
                      children: /* @__PURE__ */jsxRuntimeExports.jsx(EditableSurveyTitle, {
                        survey,
                        onSave: handleChangeTitle,
                        isEditable: isSurveyAdmin() && !example
                      })
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                      className: styles$2.logo,
                      children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                        className: `${styles$2.logoImageWrapper}`,
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(CardMedia, {
                          component: "img",
                          image: survey.image ? buildResourceUrl(survey.image, survey.id, example) : "/qlarr.png",
                          height: "150"
                        }), /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
                          className: styles$2.imageOverlay
                        }), isSurveyAdmin() && !survey.example && /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
                          className: styles$2.photoIcon,
                          onClick: e => {
                            e.stopPropagation();
                            document.getElementById(`imageInput-${survey.id}`).click();
                          },
                          children: /* @__PURE__ */jsxRuntimeExports.jsx(default_1$3, {
                            className: styles$2.cameraIcon
                          })
                        })]
                      }), /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                        id: `imageInput-${survey.id}`,
                        type: "file",
                        accept: "image/*",
                        style: {
                          display: "none"
                        },
                        onChange: handleImageUpload
                      })]
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(EditableSurveyDescription, {
                    survey,
                    isExample: example,
                    onSave: handleChangeDescription,
                    isEditable: isSurveyAdmin() && !example
                  }), !example && /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
                      direction: "row",
                      alignItems: "center",
                      spacing: 0.5,
                      sx: {
                        px: 3,
                        typography: "body2",
                        color: "text.secondary"
                      },
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                        style: {
                          backgroundColor: bgHeader(surveyStatus)
                        },
                        className: styles$2.badge
                      }), " ", /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                        variant: "subtitle2",
                        className: styles$2.textTransform,
                        children: t(`status.${surveyStatus}`)
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                      sx: {
                        px: 3,
                        display: "flex",
                        gap: 2,
                        my: 0.5
                      },
                      children: [!example && survey.status !== "closed" && survey.latestVersion.published === false && /* @__PURE__ */jsxRuntimeExports.jsx(CustomTooltip, {
                        title: "Has unpublished changes",
                        showIcon: false,
                        children: /* @__PURE__ */jsxRuntimeExports.jsx(default_1, {
                          sx: {
                            color: "text.secondary"
                          }
                        })
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(CustomTooltip, {
                        showIcon: false,
                        title: `Complete Responses: ${survey.completeResponseCount}`,
                        children: /* @__PURE__ */jsxRuntimeExports.jsx(Badge, {
                          badgeContent: survey.completeResponseCount,
                          color: "primary",
                          anchorOrigin: {
                            vertical: "top",
                            horizontal: "right"
                          },
                          children: /* @__PURE__ */jsxRuntimeExports.jsx(default_1$4, {
                            sx: {
                              color: "text.secondary"
                            }
                          })
                        })
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(CustomTooltip, {
                        showIcon: false,
                        title: survey.surveyQuota > 0 ? `Quota: ${survey.surveyQuota}` : "No Quota",
                        children: /* @__PURE__ */jsxRuntimeExports.jsx(Badge, {
                          badgeContent: survey.surveyQuota > 0 ? survey.surveyQuota : 0,
                          color: "primary",
                          anchorOrigin: {
                            vertical: "top",
                            horizontal: "right"
                          },
                          children: /* @__PURE__ */jsxRuntimeExports.jsx(default_1$1, {
                            sx: {
                              color: "text.secondary"
                            }
                          })
                        })
                      })]
                    })]
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs(Typography, {
                  variant: "caption",
                  sx: {
                    px: 3,
                    color: "text.disabled"
                  },
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("strong", {
                    children: t("edit_survey.metadata.created")
                  }), ":", " ", fDate(survey.creationDate)]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs(Typography, {
                  variant: "caption",
                  sx: {
                    px: 3,
                    color: "text.disabled"
                  },
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("strong", {
                    children: t("edit_survey.metadata.last_modified")
                  }), ":", " ", fDate(survey.lastModified)]
                }), !example && survey.startDate && /* @__PURE__ */jsxRuntimeExports.jsxs(Typography, {
                  variant: "caption",
                  sx: {
                    px: 3,
                    color: "text.disabled"
                  },
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("strong", {
                    children: t("edit_survey.metadata.start_date")
                  }), ":", " ", fDate(survey.startDate)]
                }), !example && survey.endDate && /* @__PURE__ */jsxRuntimeExports.jsxs(Typography, {
                  variant: "caption",
                  sx: {
                    px: 3,
                    color: "text.disabled"
                  },
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx("strong", {
                    children: t("edit_survey.metadata.end_date")
                  }), ":", " ", fDate(survey.endDate)]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Divider, {
                sx: {
                  borderStyle: "dashed",
                  my: 1
                }
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
                sx: {
                  p: 3,
                  pt: 0,
                  typography: "body2",
                  color: "text.secondary",
                  textTransform: "capitalize"
                },
                className: styles$2.surveyActions,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                  className: styles$2.iconButton,
                  sx: {
                    backgroundColor: theme.palette.primary.main,
                    "&:hover": {
                      backgroundColor: theme.palette.primary.main
                    }
                  },
                  "aria-label": "redirect",
                  size: "large",
                  onClick: e => {
                    e.stopPropagation();
                    const targetUrl = survey.example ? `/guest/preview/${survey.id}` : `/design-survey/${survey.id}`;
                    navigate(targetUrl);
                  },
                  children: !example ? /* @__PURE__ */jsxRuntimeExports.jsx(default_1$2, {
                    sx: {
                      color: "#fff"
                    }
                  }) : /* @__PURE__ */jsxRuntimeExports.jsx(default_1$5, {
                    sx: {
                      color: "#fff"
                    }
                  })
                }), isSurveyAdmin() && !example && survey.status === "active" && /* @__PURE__ */jsxRuntimeExports.jsx(CustomTooltip, {
                  showIcon: false,
                  title: t("edit_survey.close_title"),
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                    className: styles$2.iconButton,
                    "aria-label": "stop",
                    size: "large",
                    onClick: () => onClose(survey.id),
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(Stop, {
                      color: "primary"
                    })
                  })
                }), isSurveyAdmin() && /* @__PURE__ */jsxRuntimeExports.jsx(CustomTooltip, {
                  showIcon: false,
                  title: t("edit_survey.clone_survey"),
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                    className: styles$2.iconButton,
                    "aria-label": "clone",
                    size: "large",
                    onClick: onClone,
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(default_1$6, {
                      color: "primary"
                    })
                  })
                }), !example && survey.status !== STATUS.ACTIVE && /* @__PURE__ */jsxRuntimeExports.jsx(CustomTooltip, {
                  showIcon: false,
                  title: t("action_btn.delete"),
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                    className: styles$2.iconButton,
                    "aria-label": "delete",
                    size: "large",
                    onClick: () => onDelete(survey.id),
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(default_1$7, {
                      color: "primary"
                    })
                  })
                })]
              })]
            })]
          });
        };
        const HeaderContent = ({
          sort,
          filter,
          onFilterSelected,
          onSortSelected
        }) => {
          const sort_options = [{
            value: "responses_desc",
            label: "survey_sort_options.responses_desc"
          }, {
            value: "last_modified_desc",
            label: "survey_sort_options.last_modified_desc"
          }];
          const filter_options = [{
            value: "all",
            label: `status.all`
          }, {
            value: STATUS.ACTIVE,
            label: `status.${STATUS.ACTIVE}`
          }, {
            value: STATUS.SCHEDULED,
            label: `status.${STATUS.SCHEDULED}`
          }, {
            value: STATUS.DRAFT,
            label: `status.${STATUS.DRAFT}`
          }, {
            value: STATUS.EXPIRED,
            label: `status.${STATUS.EXPIRED}`
          }, {
            value: STATUS.CLOSED,
            label: `status.${STATUS.CLOSED}`
          }];
          const _useTranslation2 = useTranslation("manage"),
            t = _useTranslation2.t;
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            rowGap: 2.5,
            columnGap: 2,
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)"
            },
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
              variant: "h5",
              flex: "1",
              textTransform: "uppercase",
              fontWeight: "600",
              children: t("my_surveys")
            }), /* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
              width: "100%",
              spacing: 2.5,
              direction: {
                xs: "column",
                md: "row"
              },
              alignItems: "center",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(RHFSelect, {
                onChange: onSortSelected,
                native: true,
                value: sort,
                name: "Status",
                label: t("label.sort_by"),
                children: sort_options.map(option => /* @__PURE__ */jsxRuntimeExports.jsx("option", {
                  value: option.value,
                  children: t(option.label)
                }, option.value))
              }), /* @__PURE__ */jsxRuntimeExports.jsx(RHFSelect, {
                onChange: onFilterSelected,
                native: true,
                value: filter,
                name: "Status",
                label: t("edit_survey.status"),
                children: filter_options.map(option => /* @__PURE__ */jsxRuntimeExports.jsx("option", {
                  value: option.value,
                  children: t(option.label)
                }, option.value))
              })]
            })]
          });
        };
        const exampleSurveysContainer = "_exampleSurveysContainer_apkeh_1";
        const styles$1 = {
          exampleSurveysContainer: exampleSurveysContainer
        };
        const ExampleSurveys = ({
          onClone: _onClone
        }) => {
          const _useTranslation3 = useTranslation("manage"),
            t = _useTranslation3.t;
          const _reactExports$useStat13 = reactExports.useState(false),
            _reactExports$useStat14 = _slicedToArray(_reactExports$useStat13, 2),
            isFetching = _reactExports$useStat14[0],
            setFetching = _reactExports$useStat14[1];
          const _reactExports$useStat15 = reactExports.useState([]),
            _reactExports$useStat16 = _slicedToArray(_reactExports$useStat15, 2),
            exampleSurveys = _reactExports$useStat16[0],
            setExampleSurveys = _reactExports$useStat16[1];
          const surveyService = useService("survey");
          reactExports.useEffect(() => {
            setFetching(true);
            surveyService.getGuestsSurveys().then(data => {
              setFetching(false);
              if (data) {
                const updatedData = data.map(survey => _objectSpread(_objectSpread({}, survey), {}, {
                  example: true
                }));
                setExampleSurveys(updatedData);
              }
            }).catch(e => {
              setFetching(false);
              processApiError(e);
            });
          }, []);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
              variant: "h5",
              marginBottom: 2,
              fontWeight: 600,
              textTransform: "uppercase",
              children: t("example_surveys")
            }), !isFetching ? /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
              className: styles$1.exampleSurveysContainer,
              sx: {
                mt: 3,
                columnGap: 4,
                display: "grid",
                rowGap: {
                  xs: 4,
                  md: 5
                },
                gridTemplateColumns: {
                  xs: "repeat(1, 1fr)",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)"
                }
              },
              children: exampleSurveys === null || exampleSurveys === void 0 ? void 0 : exampleSurveys.map(survey => {
                return /* @__PURE__ */jsxRuntimeExports.jsx(Survey, {
                  survey,
                  onClone: () => _onClone(survey),
                  example: true
                }, survey.id);
              })
            }) : /* @__PURE__ */jsxRuntimeExports.jsx(LoadingDots, {})]
          });
        };
        const createUserCard = "_createUserCard_zrfc2_1";
        const formGroup = "_formGroup_zrfc2_9";
        const rightContainer = "_rightContainer_zrfc2_16";
        const createButton = "_createButton_zrfc2_24";
        const surveyNameInput = "_surveyNameInput_zrfc2_39";
        const selectInput = "_selectInput_zrfc2_55";
        const errorText = "_errorText_zrfc2_63";
        const styles = {
          createUserCard: createUserCard,
          formGroup: formGroup,
          rightContainer: rightContainer,
          createButton: createButton,
          surveyNameInput: surveyNameInput,
          selectInput: selectInput,
          errorText: errorText
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
        function CreateSurvey({
          onSurveyCreated
        }) {
          const surveyService = useService("survey");
          const _useTranslation4 = useTranslation("manage"),
            t = _useTranslation4.t;
          const dispatch = useDispatch();
          const defaultValues = {
            surveyName: "",
            surveyMode: SURVEY_MODE.MIXED,
            surveyActiveFrom: "",
            surveyActiveTo: ""
          };
          const CreateSurveySchema = create$3().shape({
            surveyName: create$6().required(t("survey_required")).max(50, t("survey_too_long"))
          });
          const methods = useForm({
            resolver: o(CreateSurveySchema),
            defaultValues
          });
          const setError = methods.setError,
            reset = methods.reset,
            handleSubmit = methods.handleSubmit,
            isSubmitting = methods.formState.isSubmitting;
          const onSubmit = handleSubmit(/*#__PURE__*/function () {
            var _ref5 = _asyncToGenerator(function* (data) {
              dispatch(setLoading(true));
              const model = {
                name: data.surveyName,
                usage: data.surveyMode
              };
              if (data.surveyActiveFrom) {
                model.startDate = localDateToServerDateTime(surveyActiveFrom);
              }
              if (data.surveyActiveTo) {
                model.endDate = localDateToServerDateTime(surveyActiveTo);
              }
              surveyService.createSurvey(model).then(() => {
                if (onSurveyCreated) {
                  onSurveyCreated();
                  reset();
                }
              }).catch(processedError => {
                if (processedError.name == PROCESSED_ERRORS.DUPLICATE_SURVEY_NAME.name) {
                  setError("surveyName", {
                    type: "manual",
                    message: t(`processed_errors.${processedError.name}`)
                  });
                } else if (processedError.name == PROCESSED_ERRORS.INVALID_SURVEY_DATES.name) {
                  setError("surveyActiveFrom", {
                    type: "manual",
                    message: t(`processed_errors.${processedError.name}`)
                  });
                }
              }).finally(() => {
                dispatch(setLoading(false));
              });
            });
            return function (_x) {
              return _ref5.apply(this, arguments);
            };
          }());
          return /* @__PURE__ */jsxRuntimeExports.jsx(Card, {
            className: styles.createUserCard,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(FormProvider, {
              methods,
              onSubmit,
              children: /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                rowGap: 2.5,
                columnGap: 2,
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(1, 1fr)",
                  md: "repeat(3, 1fr)"
                },
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(RHFTextField, {
                  name: "surveyName",
                  label: t("label.survey_name")
                }), /* @__PURE__ */jsxRuntimeExports.jsx(RHFSelect, {
                  name: "surveyMode",
                  label: t("label.survey_mode"),
                  children: surveyMode_options.map(option => /* @__PURE__ */jsxRuntimeExports.jsx("option", {
                    value: option.value,
                    children: t(option.label)
                  }, option.value))
                }), /* @__PURE__ */jsxRuntimeExports.jsx(LoadingButton, {
                  fullWidth: true,
                  size: "large",
                  color: "primary",
                  type: "submit",
                  variant: "contained",
                  loading: isSubmitting,
                  children: t("action_btn.create")
                })]
              })
            })
          });
        }
        function Dashboard() {
          var _surveys$surveys, _surveys$surveys2;
          const surveyService = useService("survey");
          const _reactExports$useStat17 = reactExports.useState(null),
            _reactExports$useStat18 = _slicedToArray(_reactExports$useStat17, 2),
            surveys = _reactExports$useStat18[0],
            setSurveys = _reactExports$useStat18[1];
          const _reactExports$useStat19 = reactExports.useState(true),
            _reactExports$useStat20 = _slicedToArray(_reactExports$useStat19, 2),
            fetchingSurveys = _reactExports$useStat20[0],
            setFetchingSurveys = _reactExports$useStat20[1];
          const _reactExports$useStat21 = reactExports.useState(1),
            _reactExports$useStat22 = _slicedToArray(_reactExports$useStat21, 2),
            page = _reactExports$useStat22[0],
            setPage = _reactExports$useStat22[1];
          const _reactExports$useStat23 = reactExports.useState(5),
            _reactExports$useStat24 = _slicedToArray(_reactExports$useStat23, 2),
            perPage = _reactExports$useStat24[0],
            setPerPage = _reactExports$useStat24[1];
          const _reactExports$useStat25 = reactExports.useState("all"),
            _reactExports$useStat26 = _slicedToArray(_reactExports$useStat25, 2),
            status = _reactExports$useStat26[0],
            setStatus = _reactExports$useStat26[1];
          const _reactExports$useStat27 = reactExports.useState("last_modified_desc"),
            _reactExports$useStat28 = _slicedToArray(_reactExports$useStat27, 2),
            sortBy = _reactExports$useStat28[0],
            setSortBy = _reactExports$useStat28[1];
          const _reactExports$useStat29 = reactExports.useState(false),
            _reactExports$useStat30 = _slicedToArray(_reactExports$useStat29, 2),
            openCloneModal = _reactExports$useStat30[0],
            setOpenCloneModal = _reactExports$useStat30[1];
          const _reactExports$useStat31 = reactExports.useState(),
            _reactExports$useStat32 = _slicedToArray(_reactExports$useStat31, 2),
            cloningSurvey = _reactExports$useStat32[0],
            setCloningSurvey = _reactExports$useStat32[1];
          const dispatch = useDispatch();
          const _useTranslation5 = useTranslation("manage"),
            t = _useTranslation5.t;
          const processApirror = e => {
            setFetchingSurveys(false);
          };
          const fetchSurveys = () => {
            surveyService.getAllSurveys(page, perPage, status, sortBy).then(data => {
              if (data) {
                setFetchingSurveys(false);
                setSurveys(data);
              }
            }).catch(e => processApirror());
          };
          reactExports.useEffect(() => {
            fetchSurveys();
          }, [page, perPage, sortBy, status]);
          const handleSurveyStatusChange = (id, newStatus) => {
            setSurveys(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
              surveys: prevState.surveys.map(survey => survey.id === id ? _objectSpread(_objectSpread({}, survey), {}, {
                status: newStatus
              }) : survey)
            }));
          };
          const shouldShowClickAdd = () => {
            const roles = TokenService.getUser().roles;
            if (roles.indexOf(ROLES.SUPER_ADMIN) > -1 || roles.indexOf(ROLES.SURVEY_ADMIN) > -1) {
              return true;
            }
            return false;
          };
          const _reactExports$useStat33 = reactExports.useState(""),
            _reactExports$useStat34 = _slicedToArray(_reactExports$useStat33, 2),
            description = _reactExports$useStat34[0],
            setDescription = _reactExports$useStat34[1];
          const _reactExports$useStat35 = reactExports.useState(""),
            _reactExports$useStat36 = _slicedToArray(_reactExports$useStat35, 2),
            actionType = _reactExports$useStat36[0],
            setActionType = _reactExports$useStat36[1];
          const _reactExports$useStat37 = reactExports.useState(null),
            _reactExports$useStat38 = _slicedToArray(_reactExports$useStat37, 2),
            selectedSurvey = _reactExports$useStat38[0],
            setSelectedSurvey = _reactExports$useStat38[1];
          const _reactExports$useStat39 = reactExports.useState(false),
            _reactExports$useStat40 = _slicedToArray(_reactExports$useStat39, 2),
            open = _reactExports$useStat40[0],
            setOpen = _reactExports$useStat40[1];
          const _reactExports$useStat41 = reactExports.useState(t("action_btn.delete")),
            _reactExports$useStat42 = _slicedToArray(_reactExports$useStat41, 2),
            title = _reactExports$useStat42[0],
            setTitle = _reactExports$useStat42[1];
          const _reactExports$useStat43 = reactExports.useState(false),
            _reactExports$useStat44 = _slicedToArray(_reactExports$useStat43, 2),
            isCreateSurveyOpen = _reactExports$useStat44[0],
            setCreateSurveyOpen = _reactExports$useStat44[1];
          const _reactExports$useStat45 = reactExports.useState(false),
            _reactExports$useStat46 = _slicedToArray(_reactExports$useStat45, 2),
            isTemplateSliderOpen = _reactExports$useStat46[0],
            setTemplateSliderOpen = _reactExports$useStat46[1];
          const _reactExports$useStat47 = reactExports.useState(false),
            _reactExports$useStat48 = _slicedToArray(_reactExports$useStat47, 2),
            importSurvey = _reactExports$useStat48[0],
            setImportSurvey = _reactExports$useStat48[1];
          const handleButtonClick = () => {
            setCreateSurveyOpen(true);
          };
          const handleTemplateButtonClick = () => {
            setTemplateSliderOpen(true);
          };
          const handleImportSurveyClick = () => {
            setImportSurvey(true);
            setOpenCloneModal(true);
          };
          const handleCloseClick = () => {
            setCreateSurveyOpen(false);
          };
          const handleTemplateCloseClick = () => {
            setTemplateSliderOpen(false);
          };
          const _onDelete = survey => {
            setActionType("delete");
            setTitle(t("action_btn.delete"));
            setSelectedSurvey(survey);
            setDescription(t("edit_survey.delete_survey", {
              survey_name: survey.name
            }));
            setOpen(true);
          };
          const onCloseSurvey = survey => {
            setActionType("close");
            setTitle(t("action_btn.close"));
            setSelectedSurvey(survey);
            setDescription(t("edit_survey.close_survey", {
              survey_name: survey.name
            }));
            setOpen(true);
          };
          const handleAction = () => {
            if (actionType === "delete") {
              deleteSurvey(selectedSurvey.id);
              setOpen(false);
            } else if (actionType === "close") {
              closeSurvey(selectedSurvey.id);
              setOpen(false);
            }
          };
          const _onClone2 = survey => {
            setCloningSurvey(survey);
            setOpenCloneModal(true);
          };
          const deleteSurvey = id => {
            dispatch(setLoading(true));
            surveyService.deleteSurvey(id).then(() => {
              fetchSurveys();
            }).catch(e => {
              dispatch(setLoading(false));
            }).finally(() => {
              dispatch(setLoading(false));
            });
          };
          const closeSurvey = id => {
            dispatch(setLoading(true));
            surveyService.closeSurvey(id).then(data => {
              handleSurveyStatusChange(id, "closed");
            }).catch(processedError => {
              if (processedError.name == PROCESSED_ERRORS.INVALID_SURVEY_DATES.name) {
                setSurveyDateError(t(`processed_errors.${processed.name}`));
              }
            }).finally(() => {
              dispatch(setLoading(false));
            });
          };
          const handleUpdateSurveyName = (surveyId, newName) => {
            setSurveys(prevSurveys => {
              const updatedSurveys = prevSurveys.surveys.map(survey => survey.id === surveyId ? _objectSpread(_objectSpread({}, survey), {}, {
                name: newName
              }) : survey);
              return _objectSpread(_objectSpread({}, prevSurveys), {}, {
                surveys: updatedSurveys
              });
            });
          };
          const handleUpdateSurveyDescription = (surveyId, newDescription) => {
            setSurveys(prevSurveys => {
              const updatedSurveys = prevSurveys.surveys.map(survey => survey.id === surveyId ? _objectSpread(_objectSpread({}, survey), {}, {
                description: newDescription
              }) : survey);
              return _objectSpread(_objectSpread({}, prevSurveys), {}, {
                surveys: updatedSurveys
              });
            });
          };
          const handleUpdateSurveyImage = (surveyId, newImage) => {
            setSurveys(prevSurveys => {
              const updatedSurveys = prevSurveys.surveys.map(survey => survey.id === surveyId ? _objectSpread(_objectSpread({}, survey), {}, {
                image: newImage
              }) : survey);
              return _objectSpread(_objectSpread({}, prevSurveys), {}, {
                surveys: updatedSurveys
              });
            });
          };
          const isRtl = getDirFromSession();
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            className: styles$3.mainContainer,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Container, {
              children: /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                className: styles$3.content,
                children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
                  className: styles$3.newSurveysButton,
                  direction: "row",
                  spacing: 2,
                  children: [shouldShowClickAdd() && !isCreateSurveyOpen && /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                    variant: "contained",
                    color: "primary",
                    startIcon: /* @__PURE__ */jsxRuntimeExports.jsx(Add, {}),
                    onClick: handleButtonClick,
                    children: t("create_new_survey")
                  }), shouldShowClickAdd() && !isTemplateSliderOpen && /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                    variant: "contained",
                    color: "primary",
                    startIcon: /* @__PURE__ */jsxRuntimeExports.jsx(CopyAll, {}),
                    onClick: handleTemplateButtonClick,
                    children: t("copy_example_surveys")
                  }), shouldShowClickAdd() && /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                    variant: "contained",
                    color: "primary",
                    startIcon: /* @__PURE__ */jsxRuntimeExports.jsx(FileUpload, {}),
                    onClick: handleImportSurveyClick,
                    children: t("import_survey")
                  })]
                }), isCreateSurveyOpen && /* @__PURE__ */jsxRuntimeExports.jsx(Fade, {
                  in: isCreateSurveyOpen,
                  timeout: 300,
                  children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    style: {
                      position: "relative"
                    },
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                      onClick: handleCloseClick,
                      "aria-label": "close",
                      style: _objectSpread(_objectSpread({
                        position: "absolute",
                        top: 0
                      }, isRtl === "ltr" ? {
                        right: 0
                      } : {
                        left: 0
                      }), {}, {
                        color: "black",
                        zIndex: 1
                      }),
                      children: /* @__PURE__ */jsxRuntimeExports.jsx(Close, {
                        color: "#000"
                      })
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(CreateSurvey, {
                      onSurveyCreated: fetchSurveys
                    })]
                  })
                }), isTemplateSliderOpen && /* @__PURE__ */jsxRuntimeExports.jsx(Fade, {
                  in: isTemplateSliderOpen,
                  timeout: 300,
                  children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                    style: {
                      position: "relative"
                    },
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                      onClick: handleTemplateCloseClick,
                      "aria-label": "close",
                      style: _objectSpread(_objectSpread({
                        position: "absolute",
                        top: 0
                      }, isRtl === "ltr" ? {
                        right: 0
                      } : {
                        left: 0
                      }), {}, {
                        color: "black",
                        zIndex: 1
                      }),
                      children: /* @__PURE__ */jsxRuntimeExports.jsx(Close, {
                        color: "#000"
                      })
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(ExampleSurveys, {
                      onClone: survey => _onClone2(survey)
                    })]
                  })
                }), /* @__PURE__ */jsxRuntimeExports.jsx(HeaderContent, {
                  filter: status,
                  onFilterSelected: el => {
                    setPage(1);
                    setStatus(el.target.value);
                  },
                  sort: sortBy,
                  onSortSelected: el => {
                    setPage(1);
                    setSortBy(el.target.value);
                  }
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
                  className: styles$3.surveyCardsContainer,
                  children: !fetchingSurveys ? /* @__PURE__ */jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
                    children: (surveys === null || surveys === void 0 || (_surveys$surveys = surveys.surveys) === null || _surveys$surveys === void 0 ? void 0 : _surveys$surveys.length) > 0 ? /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
                      sx: {
                        mt: 3,
                        columnGap: 2,
                        display: "grid",
                        rowGap: {
                          xs: 4,
                          md: 5
                        },
                        gridTemplateColumns: {
                          xs: "1fr",
                          sm: "repeat(auto-fit, minmax(280px, 1fr))",
                          md: "repeat(auto-fit, minmax(330px, 350px))"
                        }
                      },
                      children: surveys === null || surveys === void 0 || (_surveys$surveys2 = surveys.surveys) === null || _surveys$surveys2 === void 0 ? void 0 : _surveys$surveys2.map(survey => {
                        return /* @__PURE__ */jsxRuntimeExports.jsx(Survey, {
                          survey,
                          onStatusChange: handleSurveyStatusChange,
                          onClone: () => _onClone2(survey),
                          onDelete: () => _onDelete(survey),
                          onClose: () => onCloseSurvey(survey),
                          onUpdateTitle: handleUpdateSurveyName,
                          onUpdateDescription: handleUpdateSurveyDescription,
                          onUpdateImage: handleUpdateSurveyImage
                        }, survey.id);
                      })
                    }) : /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      className: styles$3.noSurveys,
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(Description, {
                        sx: {
                          fontSize: 48,
                          color: "#ccc"
                        }
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                        variant: "h6",
                        color: "textSecondary",
                        sx: {
                          mt: 2
                        },
                        children: t("create_survey.empty_state_message")
                      })]
                    })
                  }) : /* @__PURE__ */jsxRuntimeExports.jsx(LoadingDots, {})
                }), surveys && /* @__PURE__ */jsxRuntimeExports.jsx(TablePagination, {
                  rowsPerPageOptions: [5, 10, 20, 50],
                  component: "div",
                  labelDisplayedRows: ({
                    from,
                    to,
                    count,
                    page: page2
                  }) => {
                    return t("responses.label_displayed_rows", {
                      from,
                      to,
                      count
                    });
                  },
                  labelRowsPerPage: t("responses.label_surveys_per_page"),
                  count: surveys === null || surveys === void 0 ? void 0 : surveys.totalCount,
                  rowsPerPage: perPage,
                  page: page - 1,
                  onPageChange: (event, newPage) => {
                    setPage(newPage + 1);
                  },
                  onRowsPerPageChange: event => {
                    setPerPage(parseInt(event.target.value, 10));
                    setPage(1);
                  }
                })]
              })
            }), /* @__PURE__ */jsxRuntimeExports.jsx(SurveyClone, {
              importSurvey,
              open: openCloneModal,
              onClose: cloned => {
                setOpenCloneModal(false);
                setImportSurvey(false);
                if (cloned) {
                  fetchSurveys();
                }
              },
              survey: cloningSurvey
            }), /* @__PURE__ */jsxRuntimeExports.jsx(DeleteModal, {
              open,
              description,
              handleClose: () => setOpen(false),
              handleDelete: handleAction,
              title
            })]
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-BZ7t634X.js.map
