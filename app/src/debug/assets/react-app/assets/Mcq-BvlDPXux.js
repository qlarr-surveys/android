import { r as reactExports, m as jsxRuntimeExports } from "./index-CictXEDK.js";
import { b as useTheme, M as useDispatch, K as useSelector, L as shallowEqual, R as Content, q as alpha, O as valueChange, S as setDirty, Q as FormControl, N as TextField, V as Validation } from "./Android-DqLwuEqA.js";
import { F as FormControlLabel, R as RadioGroup } from "./RadioGroup-BWnWjL-1.js";
import { C as Checkbox } from "./Checkbox-ChIKtZY7.js";
import "./RadioGroupContext-BfJ2P-KG.js";
import "./SwitchBase-D-ntMZCD.js";
function McqAnswer(props) {
  var _a;
  const theme = useTheme();
  const dispatch = useDispatch();
  const disabled = props.Answer.type !== "all" && props.allSelected || props.Answer.type !== "none" && props.noneSelected;
  const relevance = useSelector((state) => {
    var _a2;
    let answerState = state.runState.values[(_a2 = props.Answer) == null ? void 0 : _a2.qualifiedCode];
    return typeof (answerState == null ? void 0 : answerState.relevance) == "undefined" || answerState.relevance;
  }, shallowEqual);
  const handleChange = (event) => {
    let value = [...props.parentValue];
    if (event.target.checked && props.Answer.code === "Aall") {
      value = props.allCodes;
    } else if (!event.target.checked && props.Answer.code === "Aall") {
      value = [];
    } else if (event.target.checked && props.Answer.code === "Anone") {
      value = ["Anone"];
    } else if (event.target.checked) {
      value.push(props.Answer.code);
    } else {
      value = value.filter((el) => el !== props.Answer.code);
    }
    console.log(value);
    dispatch(
      valueChange({
        componentCode: props.parentCode,
        value
      })
    );
    dispatch(setDirty(event.target.name));
    dispatch(setDirty(props.parentCode));
  };
  return relevance ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    FormControlLabel,
    {
      control: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Checkbox,
        {
          checked: props.parentValue.indexOf(props.Answer.code) > -1 || props.Answer.code === "Aall" && props.allSelected,
          onChange: handleChange,
          disabled,
          name: props.Answer.qualifiedCode,
          sx: {
            color: theme.textStyles.text.color
          }
        }
      ),
      label: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Content,
        {
          elementCode: props.Answer.code,
          fontFamily: theme.textStyles.text.font,
          color: alpha(theme.textStyles.text.color, disabled ? 0.5 : 1),
          fontSize: theme.textStyles.text.size,
          name: "label",
          lang: props.lang,
          content: (_a = props.Answer.content) == null ? void 0 : _a.label
        }
      )
    }
  ) : "";
}
const MCQAnswer = reactExports.memo(McqAnswer);
function MCQ(props) {
  const parentValue = useSelector((state) => {
    return state.runState.values[props.component.qualifiedCode].value || [];
  }, shallowEqual);
  const hasAll = props.component.answers.some((answer) => answer.type == "all");
  const allCodes = props.component.answers.filter(
    (answer) => answer.type !== "all" && answer.type !== "none" && answer.type !== "other"
  ).map((answer) => answer.code);
  const allSelected = hasAll && allCodes.every((code) => parentValue.indexOf(code) > -1);
  const noneSelected = parentValue.indexOf("Anone") > -1;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { component: "fieldset", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroup, { children: props.component.answers.map((option) => {
    if (option.type === "other") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        McqAnswerOther,
        {
          disabled: allSelected || noneSelected,
          allSelected,
          noneSelected,
          Answer: option,
          parentCode: props.component.qualifiedCode
        },
        option.qualifiedCode
      );
    } else {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        MCQAnswer,
        {
          lang: props.lang,
          parentValue,
          Answer: option,
          allCodes,
          parentCode: props.component.qualifiedCode,
          allSelected,
          noneSelected
        },
        option.qualifiedCode
      );
    }
  }) }) });
}
function McqAnswerOther(props) {
  const theme = useTheme();
  const nestedTextChild = props.Answer.answers[0];
  const parentValue = useSelector((state2) => {
    return state2.runState.values[props.parentCode].value || [];
  }, shallowEqual);
  const isSelected = parentValue.indexOf(props.Answer.code) > -1;
  const state = useSelector((state2) => {
    var _a;
    let own = state2.runState.values[props.Answer.qualifiedCode];
    let textChild = state2.runState.values[nestedTextChild.qualifiedCode];
    let show_errors = state2.runState.values.Survey.show_errors;
    let isChildDirty = state2.templateState[nestedTextChild.qualifiedCode];
    return {
      showAnswer: typeof (own == null ? void 0 : own.relevance) === "undefined" || own.relevance,
      childInvalid: (show_errors || isChildDirty) && (textChild == null ? void 0 : textChild.relevance) === true && (textChild == null ? void 0 : textChild.validity) === false,
      textValue: (textChild == null ? void 0 : textChild.value) || "",
      textRelevance: (_a = state2.textChild) == null ? void 0 : _a.relevance
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const onButtonClick = (event) => {
    let value = [...parentValue];
    if (event.target.checked) {
      value.push(props.Answer.code);
    } else {
      value = value.filter((el) => el !== props.Answer.code);
    }
    dispatch(
      valueChange({
        componentCode: props.parentCode,
        value
      })
    );
    dispatch(setDirty(event.target.name));
    dispatch(setDirty(props.parentCode));
    if (event.target.checked) {
      textInput.current.focus();
    }
  };
  const handleChange = (event) => {
    dispatch(
      valueChange({
        componentCode: event.target.name,
        value: event.target.value
      })
    );
  };
  const textInput = reactExports.useRef();
  const handleFocus = (event) => {
    let value = [...parentValue];
    if (value.indexOf(props.Answer.code) == -1) {
      value.push(props.Answer.code);
      dispatch(valueChange({ componentCode: props.parentCode, value }));
    }
  };
  const lostFocus = (event) => {
    dispatch(setDirty(event.target.name));
  };
  const showAnswer = () => {
    var _a, _b;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      FormControlLabel,
      {
        control: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Checkbox,
          {
            checked: isSelected,
            disabled: props.disabled,
            onChange: onButtonClick,
            name: props.Answer.qualifiedCode,
            sx: {
              color: theme.textStyles.text.color
            }
          }
        ),
        label: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextField,
          {
            variant: "standard",
            required: state.textRelevance && ((_a = nestedTextChild.validation) == null ? void 0 : _a.required),
            inputRef: textInput,
            id: nestedTextChild.qualifiedCode,
            name: nestedTextChild.qualifiedCode,
            disabled: props.disabled,
            label: (_b = props.Answer.content) == null ? void 0 : _b.label,
            onChange: handleChange,
            onFocus: handleFocus,
            onBlur: lostFocus,
            sx: {
              label: { color: theme.textStyles.text.color }
            },
            value: state.textValue,
            InputProps: {
              sx: {
                fontFamily: theme.textStyles.text.font,
                color: theme.textStyles.text.color,
                fontSize: theme.textStyles.text.size
              }
            },
            helperText: state.childInvalid ? /* @__PURE__ */ jsxRuntimeExports.jsx(Validation, { component: nestedTextChild, limit: 1 }) : ""
          }
        ) })
      }
    );
  };
  return state.showAnswer ? showAnswer() : "";
}
const Mcq = reactExports.memo(MCQ);
export {
  Mcq as default
};
//# sourceMappingURL=Mcq-BvlDPXux.js.map
