import { a as useTheme, j as jsxRuntimeExports } from "./index-Ceq5-OQz.js";
import { A as AdapterDayjs } from "./index-C-Y4S3-p.js";
import { H as useSelector, aS as shallowEqual, U as useDispatch, aT as valueChange } from "./use-service-Ce_K4Bne.js";
import { d as dayjs } from "./dayjs.min-KP351193.js";
import { L as LocalizationProvider, D as DateTimePicker } from "./DateTimePicker-WPN0yHXi.js";
import { T as TextField } from "./TextField-CR7hcx6T.js";
import { T as TimePicker, D as DatePicker } from "./DatePicker-Crzi31Rw.js";
import "./Tabs-BDHm_R_v.js";
import "./InputAdornment-D8jixdDw.js";
const wrapper = "_wrapper_2goe7_1";
const styles = {
  wrapper
};
function DateTimeQuestion(props) {
  const theme = useTheme();
  const state = useSelector((state2) => {
    let own = state2.runState.values[props.component.qualifiedCode];
    let show_errors = state2.runState.values.Survey.show_errors;
    let isDirty = state2.templateState[props.component.qualifiedCode];
    return {
      invalid: (show_errors || isDirty) && (own == null ? void 0 : own.validity) === false,
      value: (own == null ? void 0 : own.value) ? dayjs(window.QlarrScripts.sqlDateTimeToDate(own == null ? void 0 : own.value)) : null
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const handleDateChange = (date) => {
    let finalDate = date === null ? void 0 : date.toDate();
    dispatch(
      valueChange({
        componentCode: props.component.qualifiedCode,
        value: props.component.type == "date_time" ? window.QlarrScripts.toSqlDateTime(finalDate) : props.component.type == "time" ? window.QlarrScripts.toSqlDateTimeIgnoreDate(finalDate) : window.QlarrScripts.toSqlDateTimeIgnoreTime(finalDate)
      })
    );
  };
  const dateFormat = props.component.dateFormat ? props.component.dateFormat : "DD.MM.YYYY";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.wrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LocalizationProvider, { dateAdapter: AdapterDayjs, adapterLocale: "ar-sa", children: props.component.type == "date_time" ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    DateTimePicker,
    {
      renderInput: (props2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextField,
        {
          sx: {
            svg: { color: theme.textStyles.text.color },
            border: "1px solid",
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: theme.textStyles.text.color
              }
            }
          },
          onKeyDown: (e) => e.preventDefault(),
          ...props2
        }
      ),
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
      minDate: props.component.minDate ? dayjs(
        window.QlarrScripts.dateStringToDate(
          props.component.minDate
        )
      ) : void 0,
      maxDate: props.component.maxDate ? dayjs(
        window.QlarrScripts.dateStringToDate(
          props.component.maxDate
        )
      ) : void 0,
      error: state.invalid,
      onChange: handleDateChange,
      InputProps: {
        sx: {
          fontFamily: theme.textStyles.text.font,
          fontSize: theme.textStyles.text.size,
          color: theme.textStyles.text.color
        }
      }
    }
  ) }) : props.component.type == "time" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    TimePicker,
    {
      renderInput: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextField,
        {
          sx: {
            svg: { color: theme.textStyles.text.color },
            border: "1px solid",
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: theme.textStyles.text.color
              }
            }
          },
          onKeyDown: (e) => e.preventDefault(),
          ...params
        }
      ),
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
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
    DatePicker,
    {
      renderInput: (params) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextField,
        {
          sx: {
            svg: { color: theme.textStyles.text.color },
            input: { color: theme.textStyles.text.color },
            border: "1px solid",
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: theme.textStyles.text.color
              }
            }
          },
          onKeyDown: (e) => e.preventDefault(),
          ...params
        }
      ),
      margin: "normal",
      openTo: "year",
      views: ["year", "month", "day"],
      ampm: props.component.fullDayFormat ? false : true,
      id: props.component.qualifiedCode,
      inputFormat: dateFormat,
      value: state.value,
      minDate: props.component.minDate ? window.QlarrScripts.dateStringToDate(
        props.component.minDate
      ) : void 0,
      PaperProps: {
        sx: {
          backgroundColor: "white",
          "& .MuiPickersDay-root": {
            backgroundColor: "white"
          }
        }
      },
      maxDate: props.component.maxDate ? window.QlarrScripts.dateStringToDate(
        props.component.maxDate
      ) : void 0,
      error: state.invalid,
      onChange: handleDateChange,
      InputProps: {
        sx: {
          fontFamily: theme.textStyles.text.font,
          fontSize: theme.textStyles.text.size
        }
      }
    }
  ) }) });
}
export {
  DateTimeQuestion as default
};
//# sourceMappingURL=DateTimeQuestion-DaO07G_e.js.map
