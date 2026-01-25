import { X as React, as as jsx } from "./index-CM5T10V1.js";
import { b as useTheme, J as useSelector, K as shallowEqual, L as useDispatch, M as TextField, R as setDirty, N as valueChange } from "./Android-BBYOUnem.js";
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
//# sourceMappingURL=TextQuestion-CU_ksJLq.js.map
