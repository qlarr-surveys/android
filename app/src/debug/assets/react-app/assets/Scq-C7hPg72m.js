var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
import { n as jsx, F as Fragment } from "./index-Eqa58ok4.js";
import { r as reactExports } from "./vendor-BxDgTFXe.js";
import { u as useSelector, s as shallowEqual, b as useDispatch } from "./redux-CLa1pDoQ.js";
import { v as valueChange, C as Content, V as Validation, s as setDirty } from "./Android-D_6dlUuh.js";
import { $ as RadioGroup, a0 as FormControl, e as useTheme, a1 as Radio, a2 as FormControlLabel, o as TextField, m as css } from "./mui-D3o-L0Jn.js";
import "./i18n-No79Kq9Z.js";
import "./editor-DK7jwn5J.js";
import "./dnd-BTRdTaTs.js";
import "./charts-wwscgYhh.js";
function SCQ(props) {
  const state = useSelector((state2) => {
    let questionState = state2.runState.values[props.component.qualifiedCode];
    return {
      value: (questionState == null ? void 0 : questionState.value) || ""
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(valueChange({
      componentCode: event.target.name,
      value: event.target.value
    }));
  };
  return /* @__PURE__ */ jsx(FormControl, { component: "fieldset", children: /* @__PURE__ */ jsx(RadioGroup, { name: props.component.qualifiedCode, value: state.value, onChange: handleChange, children: props.component.answers.map((option) => {
    if (option.type === "other") {
      return /* @__PURE__ */ jsx(ScqChoiceOther, { parentCode: props.component.qualifiedCode, Choice: option }, option.qualifiedCode);
    } else {
      return /* @__PURE__ */ jsx(ScqChoice, { Choice: option }, option.qualifiedCode);
    }
  }) }) });
}
function ScqChoice(props) {
  var _a2;
  const theme = useTheme();
  const relevance = useSelector((state) => {
    var _a3, _b;
    return (_b = (_a3 = state.runState.values[props.Choice.qualifiedCode]) == null ? void 0 : _a3.relevance) != null ? _b : true;
  });
  return !relevance ? /* @__PURE__ */ jsx(Fragment, {}) : /* @__PURE__ */ jsx(FormControlLabel, { "data-code": props.Choice.code, control: /* @__PURE__ */ jsx(Radio, {}), label: /* @__PURE__ */ jsx(Content, { elementCode: props.Choice.code, customStyle: "\n        font-size: ".concat(theme.textStyles.text.size, "px;\n        "), name: "label", content: (_a2 = props.Choice.content) == null ? void 0 : _a2.label }), value: props.Choice.code }, props.Choice.qualifiedCode);
}
function ScqChoiceOther(props) {
  const nestedTextChild = props.Choice.answers[0];
  const state = useSelector((state2) => {
    let choiceState = state2.runState.values[props.Choice.qualifiedCode];
    let childState = state2.runState.values[nestedTextChild.qualifiedCode];
    let show_errors = state2.runState.values.Survey.show_errors;
    let isChildDirty = state2.templateState[nestedTextChild.qualifiedCode];
    return {
      showChoice: typeof (choiceState == null ? void 0 : choiceState.relevance) === "undefined" || choiceState.relevance,
      childInvalid: (show_errors || isChildDirty) && (childState == null ? void 0 : childState.relevance) === true && (childState == null ? void 0 : childState.validity) === false,
      value: (childState == null ? void 0 : childState.value) || ""
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(valueChange({
      componentCode: event.target.name,
      value: event.target.value
    }));
  };
  const handleFocus = (event) => {
    dispatch(valueChange({
      componentCode: props.parentCode,
      value: props.Choice.code
    }));
  };
  const lostFocus = (event) => {
    dispatch(setDirty(event.target.name));
  };
  const textInput = reactExports.useRef();
  const onButtonClick = (event) => {
    if (event.target.checked) {
      textInput.current.focus();
    }
  };
  const showChoice = () => {
    var _a2, _b, _c;
    return /* @__PURE__ */ jsx(FormControlLabel, { "data-code": props.Choice.code, css: css(_a || (_a = __template(["\n          .MuiTypography-root {\n            width: 100%;\n          }\n        "]))), control: /* @__PURE__ */ jsx(Radio, {}), label: /* @__PURE__ */ jsx(TextField, { variant: "outlined", fullWidth: true, required: ((_a2 = state.textChild) == null ? void 0 : _a2.relevance) && ((_b = nestedTextChild.validation) == null ? void 0 : _b.required), inputRef: textInput, id: nestedTextChild.qualifiedCode, name: nestedTextChild.qualifiedCode, label: (_c = props.Choice.content) == null ? void 0 : _c.label, onChange: handleChange, onFocus: handleFocus, onBlur: lostFocus, value: state.value, helperText: state.childInvalid ? /* @__PURE__ */ jsx(Validation, { component: nestedTextChild, limit: 1 }) : "" }), onChange: onButtonClick, value: props.Choice.code }, props.Choice.qualifiedCode);
  };
  return state.showChoice ? showChoice() : "";
}
export {
  SCQ as default
};
//# sourceMappingURL=Scq-C7hPg72m.js.map
