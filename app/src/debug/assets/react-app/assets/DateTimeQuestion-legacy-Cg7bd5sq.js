;
(function () {
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  System.register(['./index-legacy-DHZhPI7F.js', './index-legacy-Dek6s2x3.js', './use-service-legacy-Dvd5TXWp.js', './dayjs.min-legacy-CpSITYE_.js', './DateTimePicker-legacy-YrOj92Gf.js', './TextField-legacy-C04XnsWd.js', './DatePicker-legacy-BP6EWz5L.js', './Tabs-legacy-CR0rpc1G.js', './InputAdornment-legacy-Bj6eETKt.js'], function (exports, module) {
    'use strict';

    var useTheme, jsxRuntimeExports, AdapterDayjs, useSelector, shallowEqual, useDispatch, valueChange, dayjs, LocalizationProvider, DateTimePicker, TextField, TimePicker, DatePicker;
    return {
      setters: [module => {
        useTheme = module.a;
        jsxRuntimeExports = module.j;
      }, module => {
        AdapterDayjs = module.A;
      }, module => {
        useSelector = module.H;
        shallowEqual = module.aS;
        useDispatch = module.U;
        valueChange = module.aT;
      }, module => {
        dayjs = module.d;
      }, module => {
        LocalizationProvider = module.L;
        DateTimePicker = module.D;
      }, module => {
        TextField = module.T;
      }, module => {
        TimePicker = module.T;
        DatePicker = module.D;
      }, null, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._wrapper_2goe7_1 {\n  width: 50%;\n}\n\n@media only screen and (max-width: 768px) {\n  ._wrapper_2goe7_1 {\n    width: 100%;\n  }\n}\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        exports("default", DateTimeQuestion);
        const wrapper = "_wrapper_2goe7_1";
        const styles = {
          wrapper: wrapper
        };
        function DateTimeQuestion(props) {
          const theme = useTheme();
          const state = useSelector(state2 => {
            let own = state2.runState.values[props.component.qualifiedCode];
            let show_errors = state2.runState.values.Survey.show_errors;
            let isDirty = state2.templateState[props.component.qualifiedCode];
            return {
              invalid: (show_errors || isDirty) && (own === null || own === void 0 ? void 0 : own.validity) === false,
              value: own !== null && own !== void 0 && own.value ? dayjs(window.QlarrScripts.sqlDateTimeToDate(own === null || own === void 0 ? void 0 : own.value)) : null
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const handleDateChange = date => {
            let finalDate = date === null ? void 0 : date.toDate();
            dispatch(valueChange({
              componentCode: props.component.qualifiedCode,
              value: props.component.type == "date_time" ? window.QlarrScripts.toSqlDateTime(finalDate) : props.component.type == "time" ? window.QlarrScripts.toSqlDateTimeIgnoreDate(finalDate) : window.QlarrScripts.toSqlDateTimeIgnoreTime(finalDate)
            }));
          };
          const dateFormat = props.component.dateFormat ? props.component.dateFormat : "DD.MM.YYYY";
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: styles.wrapper,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(LocalizationProvider, {
              dateAdapter: AdapterDayjs,
              adapterLocale: "ar-sa",
              children: props.component.type == "date_time" ? /* @__PURE__ */jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
                children: /* @__PURE__ */jsxRuntimeExports.jsx(DateTimePicker, {
                  renderInput: props2 => /* @__PURE__ */jsxRuntimeExports.jsx(TextField, _objectSpread({
                    sx: {
                      svg: {
                        color: theme.textStyles.text.color
                      },
                      border: "1px solid",
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: theme.textStyles.text.color
                        }
                      }
                    },
                    onKeyDown: e => e.preventDefault()
                  }, props2)),
                  margin: "normal",
                  value: state.value,
                  inputFormat: dateFormat + " " + (props.component.fullDayFormat ? "HH:mm" : "hh:mm A"),
                  PaperProps: {
                    sx: {
                      backgroundColor: "white",
                      "& .MuiPickersDay-root": {
                        backgroundColor: "white"
                      }
                    }
                  },
                  ampm: props.component.fullDayFormat ? false : true,
                  openTo: "year",
                  views: ["year", "month", "day", "hours", "minutes"],
                  id: props.component.qualifiedCode,
                  minDate: props.component.minDate ? dayjs(window.QlarrScripts.dateStringToDate(props.component.minDate)) : void 0,
                  maxDate: props.component.maxDate ? dayjs(window.QlarrScripts.dateStringToDate(props.component.maxDate)) : void 0,
                  error: state.invalid,
                  onChange: handleDateChange,
                  InputProps: {
                    sx: {
                      fontFamily: theme.textStyles.text.font,
                      fontSize: theme.textStyles.text.size,
                      color: theme.textStyles.text.color
                    }
                  }
                })
              }) : props.component.type == "time" ? /* @__PURE__ */jsxRuntimeExports.jsx(TimePicker, {
                renderInput: params => /* @__PURE__ */jsxRuntimeExports.jsx(TextField, _objectSpread({
                  sx: {
                    svg: {
                      color: theme.textStyles.text.color
                    },
                    border: "1px solid",
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: theme.textStyles.text.color
                      }
                    }
                  },
                  onKeyDown: e => e.preventDefault()
                }, params)),
                margin: "normal",
                openTo: "hours",
                views: ["hours", "minutes"],
                ampm: props.component.fullDayFormat ? false : true,
                inputFormat: props.component.fullDayFormat ? "HH:mm" : "hh:mm A",
                id: props.component.qualifiedCode,
                value: state.value,
                error: state.invalid,
                onChange: handleDateChange,
                PaperProps: {
                  sx: {
                    backgroundColor: "white",
                    "& .MuiPickersDay-root": {
                      backgroundColor: "white"
                    }
                  }
                },
                InputProps: {
                  sx: {
                    fontFamily: theme.textStyles.text.font,
                    color: theme.textStyles.text.color,
                    fontSize: theme.textStyles.text.size
                  }
                }
              }) : /* @__PURE__ */jsxRuntimeExports.jsx(DatePicker, {
                renderInput: params => /* @__PURE__ */jsxRuntimeExports.jsx(TextField, _objectSpread({
                  sx: {
                    svg: {
                      color: theme.textStyles.text.color
                    },
                    input: {
                      color: theme.textStyles.text.color
                    },
                    border: "1px solid",
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: theme.textStyles.text.color
                      }
                    }
                  },
                  onKeyDown: e => e.preventDefault()
                }, params)),
                margin: "normal",
                openTo: "year",
                views: ["year", "month", "day"],
                ampm: props.component.fullDayFormat ? false : true,
                id: props.component.qualifiedCode,
                inputFormat: dateFormat,
                value: state.value,
                minDate: props.component.minDate ? window.QlarrScripts.dateStringToDate(props.component.minDate) : void 0,
                PaperProps: {
                  sx: {
                    backgroundColor: "white",
                    "& .MuiPickersDay-root": {
                      backgroundColor: "white"
                    }
                  }
                },
                maxDate: props.component.maxDate ? window.QlarrScripts.dateStringToDate(props.component.maxDate) : void 0,
                error: state.invalid,
                onChange: handleDateChange,
                InputProps: {
                  sx: {
                    fontFamily: theme.textStyles.text.font,
                    fontSize: theme.textStyles.text.size
                  }
                }
              })
            })
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=DateTimeQuestion-legacy-Cg7bd5sq.js.map
