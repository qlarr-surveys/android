import { as as jsx } from "./index-CM5T10V1.js";
import { b as useTheme, J as useSelector, K as shallowEqual, L as useDispatch, M as TextField, R as setDirty, N as valueChange } from "./Android-BBYOUnem.js";
const questionItem = "_questionItem_arcyb_1";
const styles = {
  questionItem
};
function NumberQuestion(props) {
  var _a, _b, _c;
  useTheme();
  const state = useSelector((state2) => {
    let questionState = state2.runState.values[props.component.qualifiedCode];
    let show_errors = state2.runState.values.Survey.show_errors;
    let isDirty = state2.templateState[props.component.qualifiedCode];
    let validity = questionState == null ? void 0 : questionState.validity;
    let invalid = (show_errors || isDirty) && validity === false;
    return {
      value: questionState == null ? void 0 : questionState.value,
      invalid
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const cleanupValue = (oldValue, newValue) => {
    const regex = props.component.decimal_separator == "." ? /^[0-9]+\.?[0-9]*$/ : props.component.decimal_separator == "," ? /^[0-9]+,?[0-9]*$/ : /^[0-9]*$/;
    if (newValue == "") {
      return void 0;
    }
    if (regex.test(newValue)) {
      let withDecimal = convertToDecimal(newValue);
      let processed = +withDecimal;
      let returning = isNaN(processed) ? oldValue : withDecimal;
      return returning;
    } else {
      return oldValue;
    }
  };
  const convertToDecimal = (value) => {
    if (props.component.decimal_separator != ",") {
      return value;
    }
    let stringValue = value.toString();
    return stringValue.replace(",", ".");
  };
  const formatValue = (value) => {
    return value === void 0 ? "" : props.component.decimal_separator == "," ? value.toString().replace(".", ",") : value;
  };
  const handleChange = (event) => {
    dispatch(valueChange({
      componentCode: event.target.name,
      value: cleanupValue(state.value, event.target.value)
    }));
  };
  const lostFocus = (event) => {
    dispatch(setDirty(event.target.name));
    let processed = +state.value;
    if (!isNaN(processed)) {
      dispatch(valueChange({
        componentCode: props.component.qualifiedCode,
        value: processed
      }));
    }
  };
  return /* @__PURE__ */ jsx("div", { className: styles.questionItem, children: /* @__PURE__ */ jsx(TextField, { variant: "outlined", required: ((_b = (_a = props.component.validation) == null ? void 0 : _a.validation_required) == null ? void 0 : _b.isActive) ? true : false, size: "small", id: props.component.qualifiedCode, name: props.component.qualifiedCode, label: props.component.showHint && ((_c = props.component.content) == null ? void 0 : _c.hint) || "", onChange: handleChange, onBlur: lostFocus, inputProps: {
    maxLength: props.component.maxChars || void 0
  }, value: formatValue(state.value), error: state.invalid }) });
}
export {
  NumberQuestion as default
};
//# sourceMappingURL=NumberQuestion-kCzbmbZw.js.map
