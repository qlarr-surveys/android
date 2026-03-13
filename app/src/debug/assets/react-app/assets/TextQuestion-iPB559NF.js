import { n as jsx } from "./index-CBAYZ0Vg.js";
import { b as React } from "./vendor-C1A_Wzx1.js";
import { u as useSelector, s as shallowEqual, b as useDispatch } from "./redux-C5jBuL_y.js";
import { v as valueChange, s as setDirty } from "./Android--WWD2PK6.js";
import { b as useTheme, m as TextField } from "./mui-qMsG-zFb.js";
import "./i18n-CpdhL4GU.js";
import "./dnd-DDAM2OKI.js";
const questionItem = "_questionItem_15lac_1";
const styles = {
  questionItem
};
function TextQuestion(props) {
  var _a, _b, _c;
  useTheme();
  const state = useSelector((state2) => {
    let questionState = state2.runState.values[props.component.qualifiedCode];
    let show_errors = state2.runState.values.Survey.show_errors;
    let isDirty = state2.templateState[props.component.qualifiedCode];
    let validity = questionState == null ? void 0 : questionState.validity;
    let invalid = (show_errors || isDirty) && validity === false;
    return {
      value: (questionState == null ? void 0 : questionState.value) || "",
      invalid
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(valueChange({
      componentCode: event.target.name,
      value: event.target.value
    }));
  };
  const lostFocus = (event) => {
    const trimmed = event.target.value.trim();
    if (event.target.value !== trimmed) {
      dispatch(valueChange({
        componentCode: event.target.name,
        value: trimmed
      }));
    }
    dispatch(setDirty(event.target.name));
  };
  return /* @__PURE__ */ jsx("div", { className: styles.questionItem, children: /* @__PURE__ */ jsx(TextField, { variant: "outlined", size: "small", required: ((_b = (_a = props.component.validation) == null ? void 0 : _a.validation_required) == null ? void 0 : _b.isActive) ? true : false, id: props.component.qualifiedCode, name: props.component.qualifiedCode, label: props.component.showHint && ((_c = props.component.content) == null ? void 0 : _c.hint) || "", onChange: handleChange, onBlur: lostFocus, inputProps: {
    maxLength: props.component.maxChars || void 0
  }, value: state.value, error: state.invalid }) });
}
const TextQuestion_default = React.memo(TextQuestion);
export {
  TextQuestion_default as default
};
//# sourceMappingURL=TextQuestion-iPB559NF.js.map
