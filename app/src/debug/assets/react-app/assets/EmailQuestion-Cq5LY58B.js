import { n as jsx } from "./index-Zbq57S4f.js";
import "./vendor-BxDgTFXe.js";
import { u as useSelector, s as shallowEqual, b as useDispatch } from "./redux-CLa1pDoQ.js";
import { v as valueChange, s as setDirty } from "./Android-BzAC49gk.js";
import { e as useTheme, o as TextField } from "./mui-D3o-L0Jn.js";
import "./i18n-No79Kq9Z.js";
import "./editor-DK7jwn5J.js";
import "./dnd-BTRdTaTs.js";
import "./charts-wwscgYhh.js";
const questionItem = "_questionItem_16yep_1";
const styles = {
  questionItem
};
function EmailQuestion(props) {
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
    type: "email",
    maxLength: props.component.maxChars || void 0
  }, value: state.value, error: state.invalid }) });
}
export {
  EmailQuestion as default
};
//# sourceMappingURL=EmailQuestion-Cq5LY58B.js.map
