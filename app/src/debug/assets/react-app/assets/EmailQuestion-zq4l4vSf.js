import { m as jsxRuntimeExports } from "./index-CDhdfxEQ.js";
import { b as useTheme, K as useSelector, L as shallowEqual, M as useDispatch, N as TextField, S as setDirty, O as valueChange } from "./Android-BIErA7z6.js";
const questionItem = "_questionItem_16yep_1";
const styles = {
  questionItem
};
function EmailQuestion(props) {
  var _a, _b, _c;
  const theme = useTheme();
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
    dispatch(
      valueChange({
        componentCode: event.target.name,
        value: event.target.value
      })
    );
  };
  const lostFocus = (event) => {
    dispatch(setDirty(event.target.name));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.questionItem, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    TextField,
    {
      variant: "outlined",
      size: "small",
      required: ((_b = (_a = props.component.validation) == null ? void 0 : _a.validation_required) == null ? void 0 : _b.isActive) ? true : false,
      id: props.component.qualifiedCode,
      name: props.component.qualifiedCode,
      label: props.component.showHint && ((_c = props.component.content) == null ? void 0 : _c.hint) || "",
      onChange: handleChange,
      onBlur: lostFocus,
      inputProps: {
        type: "email",
        maxLength: props.component.maxChars || void 0
      },
      value: state.value,
      error: state.invalid,
      InputProps: {
        sx: {
          fontFamily: theme.textStyles.text.font,
          color: theme.textStyles.text.color,
          fontSize: theme.textStyles.text.size
        }
      }
    }
  ) });
}
export {
  EmailQuestion as default
};
//# sourceMappingURL=EmailQuestion-zq4l4vSf.js.map
