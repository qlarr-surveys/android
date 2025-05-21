import { R as React, j as jsxRuntimeExports } from "./index-GLBW3_uR.js";
import { w as useTheme, H as useSelector, aU as shallowEqual, U as useDispatch, aV as valueChange, b1 as setDirty } from "./use-service-BKPqOjBj.js";
import { T as TextField } from "./TextField-Dshtidi6.js";
const questionItem = "_questionItem_1sx0f_1";
const styles = {
  questionItem
};
function TextQuestion(props) {
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
      variant: "standard",
      required: ((_b = (_a = props.component.validation) == null ? void 0 : _a.validation_required) == null ? void 0 : _b.isActive) ? true : false,
      id: props.component.qualifiedCode,
      name: props.component.qualifiedCode,
      label: ((_c = props.component.content) == null ? void 0 : _c.hint) || "",
      onChange: handleChange,
      onBlur: lostFocus,
      inputProps: { maxLength: props.component.maxChars || void 0 },
      value: state.value,
      error: state.invalid,
      InputProps: {
        sx: {
          fontFamily: theme.textStyles.text.font,
          color: theme.textStyles.text.color,
          fontSize: theme.textStyles.text.size,
          borderBottom: "1px solid"
        }
      }
    }
  ) });
}
const TextQuestion$1 = React.memo(TextQuestion);
export {
  TextQuestion$1 as default
};
//# sourceMappingURL=TextQuestion-dZkvU83l.js.map
