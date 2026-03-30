var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
import { n as jsx } from "./index-Eqa58ok4.js";
import { r as reactExports } from "./vendor-BxDgTFXe.js";
import { b as useDispatch, u as useSelector, s as shallowEqual } from "./redux-CLa1pDoQ.js";
import { C as Content, v as valueChange, s as setDirty, V as Validation } from "./Android-D_6dlUuh.js";
import { e as useTheme, a9 as Checkbox, a2 as FormControlLabel, $ as RadioGroup, a0 as FormControl, o as TextField, m as css } from "./mui-D3o-L0Jn.js";
import "./i18n-No79Kq9Z.js";
import "./editor-DK7jwn5J.js";
import "./dnd-BTRdTaTs.js";
import "./charts-wwscgYhh.js";
function McqAnswer(props) {
  var _a2;
  const theme = useTheme();
  const dispatch = useDispatch();
  const disabled = props.Answer.type !== "all" && props.allSelected || props.Answer.type !== "none" && props.noneSelected;
  const relevance = useSelector((state) => {
    var _a3;
    let answerState = state.runState.values[(_a3 = props.Answer) == null ? void 0 : _a3.qualifiedCode];
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
    dispatch(valueChange({
      componentCode: props.parentCode,
      value
    }));
    dispatch(setDirty(event.target.name));
    dispatch(setDirty(props.parentCode));
  };
  return relevance ? /* @__PURE__ */ jsx(FormControlLabel, { "data-code": props.Answer.code, s: true, control: /* @__PURE__ */ jsx(Checkbox, { checked: props.parentValue.indexOf(props.Answer.code) > -1 || props.Answer.code === "Aall" && props.allSelected, onChange: handleChange, disabled, name: props.Answer.qualifiedCode }), label: /* @__PURE__ */ jsx(Content, { elementCode: props.Answer.code, customStyle: "\n        opacity: ".concat(disabled ? 0.5 : 1, ";\n        font-size: ").concat(theme.textStyles.text.size, "px;\n        "), name: "label", content: (_a2 = props.Answer.content) == null ? void 0 : _a2.label }) }) : "";
}
const MCQAnswer = reactExports.memo(McqAnswer);
function MCQ(props) {
  const parentValue = useSelector((state) => {
    return state.runState.values[props.component.qualifiedCode].value || [];
  }, shallowEqual);
  const hasAll = props.component.answers.some((answer) => answer.type == "all");
  const allCodes = props.component.answers.filter((answer) => answer.type !== "all" && answer.type !== "none" && answer.type !== "other").map((answer) => answer.code);
  const allSelected = hasAll && allCodes.every((code) => parentValue.indexOf(code) > -1);
  const noneSelected = parentValue.indexOf("Anone") > -1;
  return /* @__PURE__ */ jsx(FormControl, { component: "fieldset", children: /* @__PURE__ */ jsx(RadioGroup, { children: props.component.answers.map((option) => {
    if (option.type === "other") {
      return /* @__PURE__ */ jsx(McqAnswerOther, { disabled: allSelected || noneSelected, allSelected, noneSelected, Answer: option, parentCode: props.component.qualifiedCode }, option.qualifiedCode);
    } else {
      return /* @__PURE__ */ jsx(MCQAnswer, { parentValue, Answer: option, allCodes, parentCode: props.component.qualifiedCode, allSelected, noneSelected }, option.qualifiedCode);
    }
  }) }) });
}
function McqAnswerOther(props) {
  useTheme();
  const nestedTextChild = props.Answer.answers[0];
  const parentValue = useSelector((state2) => {
    return state2.runState.values[props.parentCode].value || [];
  }, shallowEqual);
  const isSelected = parentValue.indexOf(props.Answer.code) > -1;
  const state = useSelector((state2) => {
    var _a2;
    let own = state2.runState.values[props.Answer.qualifiedCode];
    let textChild = state2.runState.values[nestedTextChild.qualifiedCode];
    let show_errors = state2.runState.values.Survey.show_errors;
    let isChildDirty = state2.templateState[nestedTextChild.qualifiedCode];
    return {
      showAnswer: typeof (own == null ? void 0 : own.relevance) === "undefined" || own.relevance,
      childInvalid: (show_errors || isChildDirty) && (textChild == null ? void 0 : textChild.relevance) === true && (textChild == null ? void 0 : textChild.validity) === false,
      textValue: (textChild == null ? void 0 : textChild.value) || "",
      textRelevance: (_a2 = state2.textChild) == null ? void 0 : _a2.relevance
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
    dispatch(valueChange({
      componentCode: props.parentCode,
      value
    }));
    dispatch(setDirty(event.target.name));
    dispatch(setDirty(props.parentCode));
    if (event.target.checked) {
      textInput.current.focus();
    }
  };
  const handleChange = (event) => {
    dispatch(valueChange({
      componentCode: event.target.name,
      value: event.target.value
    }));
  };
  const textInput = reactExports.useRef();
  const handleFocus = (event) => {
    let value = [...parentValue];
    if (value.indexOf(props.Answer.code) == -1) {
      value.push(props.Answer.code);
      dispatch(valueChange({
        componentCode: props.parentCode,
        value
      }));
    }
  };
  const lostFocus = (event) => {
    dispatch(setDirty(event.target.name));
  };
  const showAnswer = () => {
    var _a2, _b;
    return /* @__PURE__ */ jsx(FormControlLabel, { css: css(_a || (_a = __template(["\n          .MuiTypography-root {\n            width: 100%;\n          }\n        "]))), "data-code": props.Answer.code, control: /* @__PURE__ */ jsx(Checkbox, { checked: isSelected, disabled: props.disabled, onChange: onButtonClick, name: props.Answer.qualifiedCode }), label: /* @__PURE__ */ jsx(TextField, { variant: "outlined", required: state.textRelevance && ((_a2 = nestedTextChild.validation) == null ? void 0 : _a2.required), inputRef: textInput, id: nestedTextChild.qualifiedCode, name: nestedTextChild.qualifiedCode, disabled: props.disabled, label: (_b = props.Answer.content) == null ? void 0 : _b.label, onChange: handleChange, onFocus: handleFocus, onBlur: lostFocus, value: state.textValue, helperText: state.childInvalid ? /* @__PURE__ */ jsx(Validation, { component: nestedTextChild, limit: 1 }) : "" }) });
  };
  return state.showAnswer ? showAnswer() : "";
}
const Mcq = reactExports.memo(MCQ);
export {
  Mcq as default
};
//# sourceMappingURL=Mcq-h00P4-h4.js.map
