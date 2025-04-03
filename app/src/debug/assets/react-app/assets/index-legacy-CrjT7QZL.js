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
  System.register(['./index-legacy-BLatMfxz.js', './index-legacy-C4Gq-aSS.js', './dayjs.min-legacy-DVnPMy8l.js', './use-service-legacy-DLuVKbJp.js', './DateTimePicker-legacy-FFoNYnkB.js', './TextField-legacy-Cn7jw8uN.js'], function (exports, module) {
    'use strict';

    var reactExports, jsxRuntimeExports, Box, AdapterDayjs, dayjs, useTranslation, Button, LocalizationProvider, DateTimePicker, FormHelperText, TextField;
    return {
      setters: [module => {
        reactExports = module.r;
        jsxRuntimeExports = module.j;
        Box = module.B;
      }, module => {
        AdapterDayjs = module.A;
      }, module => {
        dayjs = module.d;
      }, module => {
        useTranslation = module.M;
        Button = module.aC;
      }, module => {
        LocalizationProvider = module.L;
        DateTimePicker = module.D;
      }, module => {
        FormHelperText = module.a;
        TextField = module.T;
      }],
      execute: function execute() {
        const renderInput = props => {
          return /* @__PURE__ */jsxRuntimeExports.jsx(TextField, _objectSpread(_objectSpread({}, props), {}, {
            variant: "outlined",
            sx: {
              "& .MuiOutlinedInput-root": {
                borderRadius: "16px",
                backgroundColor: "#f7f8fc",
                border: "none"
              },
              "& .MuiInputLabel-root": {
                color: "#a6a8ab",
                fontWeight: "500"
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none"
              }
            }
          }));
        };
        const SurveyActiveFromTo = exports("S", ({
          error,
          surveyActiveFrom: initialSurveyActiveFrom,
          surveyActiveTo: initialSurveyActiveTo,
          onSurveyActiveFromChanged,
          onSurveyActiveToChanged,
          disabled
        }) => {
          const _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          const _reactExports$useStat = reactExports.useState(initialSurveyActiveFrom),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            surveyActiveFrom = _reactExports$useStat2[0],
            setSurveyActiveFrom = _reactExports$useStat2[1];
          const _reactExports$useStat3 = reactExports.useState(initialSurveyActiveTo),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            surveyActiveTo = _reactExports$useStat4[0],
            setSurveyActiveTo = _reactExports$useStat4[1];
          const _reactExports$useStat5 = reactExports.useState(false),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            isDirty = _reactExports$useStat6[0],
            setIsDirty = _reactExports$useStat6[1];
          reactExports.useEffect(() => {
            setSurveyActiveFrom(initialSurveyActiveFrom);
            setSurveyActiveTo(initialSurveyActiveTo);
          }, [initialSurveyActiveFrom, initialSurveyActiveTo]);
          const handleSurveyActiveFromChange = newValue => {
            setSurveyActiveFrom(newValue);
            setIsDirty(true);
          };
          const handleSurveyActiveToChange = newValue => {
            setSurveyActiveTo(newValue);
            setIsDirty(true);
          };
          const handleSaveChanges = () => {
            const fromChanged = dayjs(surveyActiveFrom).toDate();
            const toChanged = dayjs(surveyActiveTo).toDate();
            if (surveyActiveFrom && !isEqualDates(fromChanged, dayjs(initialSurveyActiveFrom).toDate())) {
              onSurveyActiveFromChanged(fromChanged);
            }
            if (surveyActiveTo && !isEqualDates(toChanged, dayjs(initialSurveyActiveTo).toDate())) {
              onSurveyActiveToChanged(toChanged);
            }
            setIsDirty(false);
          };
          function isEqualDates(date1, date2) {
            if (!date1 && !date2) return true;
            if (!date1 || !date2) return false;
            return date1.getTime() === date2.getTime();
          }
          return /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 2,
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(LocalizationProvider, {
              dateAdapter: AdapterDayjs,
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                display: "flex",
                gap: 2,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(DateTimePicker, {
                  disabled,
                  label: t("label.from"),
                  value: surveyActiveFrom,
                  onChange: handleSurveyActiveFromChange,
                  renderInput
                }), /* @__PURE__ */jsxRuntimeExports.jsx(DateTimePicker, {
                  disabled,
                  label: t("label.to"),
                  value: surveyActiveTo,
                  onChange: handleSurveyActiveToChange,
                  renderInput
                })]
              }), error && /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                style: {
                  color: "red"
                },
                children: error
              }), isDirty && /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                onClick: handleSaveChanges,
                variant: "contained",
                color: "primary",
                children: t("save_changes")
              })]
            })
          });
        });
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-CrjT7QZL.js.map
