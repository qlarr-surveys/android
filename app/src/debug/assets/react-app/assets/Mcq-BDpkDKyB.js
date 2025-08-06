import { r as reactExports, m as jsxRuntimeExports } from "./index-DKzDOClZ.js";
import { b as useTheme, J as useDispatch, E as useSelector, H as shallowEqual, O as Content, L as valueChange, Q as setDirty, N as FormControl, K as TextField, V as Validation } from "./Android-DISKZema.js";
import { F as FormControlLabel, R as RadioGroup } from "./RadioGroup-DIjHX3WM.js";
import { C as Checkbox } from "./Checkbox-Dh3hCV6a.js";
import "./RadioGroupContext-0YEc_RA3.js";
import "./SwitchBase-B7F_WboD.js";
function McqAnswer(props) {
  var _a;
  const theme = useTheme();
  const dispatch = useDispatch();
  const relevance = useSelector((state) => {
    var _a2;
    let answerState = state.runState.values[(_a2 = props.Answer) == null ? void 0 : _a2.qualifiedCode];
    return typeof (answerState == null ? void 0 : answerState.relevance) == "undefined" || answerState.relevance;
  }, shallowEqual);
  const parentValue = useSelector((state) => {
    return state.runState.values[props.parentCode].value || [];
  }, shallowEqual);
  const handleChange = (event) => {
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
  };
  return relevance ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    FormControlLabel,
    {
      control: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Checkbox,
        {
          checked: parentValue.indexOf(props.Answer.code) > -1,
          onChange: handleChange,
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
          color: theme.textStyles.text.color,
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
          lang: props.lang,
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
      dispatch(
        valueChange({ componentCode: props.parentCode, value })
      );
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
//# sourceMappingURL=Mcq-BDpkDKyB.js.map
