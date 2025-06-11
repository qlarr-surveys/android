import { r as reactExports, m as jsxRuntimeExports, a4 as Box } from "./index-D6pxCKdU.js";
import { b as useTheme, D as useSelector, E as shallowEqual, H as useDispatch, J as valueChange, L as setDirty, K as FormControl, V as Validation } from "./Android-yc1ng5Rp.js";
import { F as FormControlLabel, R as RadioGroup } from "./RadioGroup-UOTLGKeJ.js";
import { C as Checkbox } from "./Checkbox-DClzNW83.js";
import { T as TextField } from "./TextField-CL3yzXlu.js";
import "./RadioGroupContext-BSSnq8Is.js";
import "./SwitchBase-CAsPkL4g.js";
function McqAnswer(props) {
  var _a;
  const theme = useTheme();
  const state = useSelector((state2) => {
    var _a2;
    let answerState = state2.runState.values[(_a2 = props.Answer) == null ? void 0 : _a2.qualifiedCode];
    return {
      showAnswer: typeof (answerState == null ? void 0 : answerState.relevance) == "undefined" || answerState.relevance,
      checked: (answerState == null ? void 0 : answerState.value) || false
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(
      valueChange({
        componentCode: event.target.name,
        value: event.target.checked
      })
    );
    dispatch(setDirty(event.target.name));
    dispatch(setDirty(props.parentCode));
  };
  return state.showAnswer ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    FormControlLabel,
    {
      control: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Checkbox,
        {
          checked: state.checked,
          onChange: handleChange,
          name: props.Answer.qualifiedCode,
          sx: {
            color: theme.textStyles.text.color
          }
        }
      ),
      label: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box,
        {
          sx: {
            fontFamily: theme.textStyles.text.font,
            fontSize: theme.textStyles.text.size
          },
          children: (_a = props.Answer.content) == null ? void 0 : _a.label
        }
      )
    }
  ) : "";
}
const MCQAnswer = reactExports.memo(McqAnswer);
function MCQ(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { component: "fieldset", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroup, { children: props.component.answers.map((option) => {
    if (option.type === "other") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        McqAnswerOther,
        {
          Answer: option,
          parentCode: props.component.qualifiedCode
        },
        option.qualifiedCode
      );
    } else {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        MCQAnswer,
        {
          Answer: option,
          parentCode: props.component.qualifiedCode
        },
        option.qualifiedCode
      );
    }
  }) }) });
}
function McqAnswerOther(props) {
  const theme = useTheme();
  const nestedTextChild = props.Answer.answers[0];
  const state = useSelector((state2) => {
    var _a;
    let own = state2.runState.values[props.Answer.qualifiedCode];
    let textChild = state2.runState.values[nestedTextChild.qualifiedCode];
    let show_errors = state2.runState.values.Survey.show_errors;
    let isChildDirty = state2.templateState[nestedTextChild.qualifiedCode];
    return {
      showAnswer: typeof (own == null ? void 0 : own.relevance) === "undefined" || own.relevance,
      childInvalid: (show_errors || isChildDirty) && (textChild == null ? void 0 : textChild.relevance) === true && (textChild == null ? void 0 : textChild.validity) === false,
      checked: (own == null ? void 0 : own.value) || false,
      textValue: (textChild == null ? void 0 : textChild.value) || "",
      textRelevance: (_a = state2.textChild) == null ? void 0 : _a.relevance
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const onButtonClick = (event) => {
    dispatch(
      valueChange({
        componentCode: event.target.name,
        value: event.target.checked
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
    dispatch(
      valueChange({ componentCode: props.Answer.qualifiedCode, value: true })
    );
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
            checked: state.checked,
            onChange: onButtonClick,
            name: props.Answer.qualifiedCode,
            sx: {
              color: theme.textStyles.text.color
            }
          }
        ),
        label: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextField,
          {
            variant: "standard",
            required: state.textRelevance && ((_a = nestedTextChild.validation) == null ? void 0 : _a.required),
            inputRef: textInput,
            id: nestedTextChild.qualifiedCode,
            name: nestedTextChild.qualifiedCode,
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
//# sourceMappingURL=Mcq-Bi7mkSP5.js.map
