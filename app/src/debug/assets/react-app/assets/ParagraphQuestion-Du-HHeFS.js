import { o as jsxs, n as jsx } from "./index-Eqa58ok4.js";
import "./vendor-BxDgTFXe.js";
import { u as useSelector, s as shallowEqual, b as useDispatch } from "./redux-CLa1pDoQ.js";
import { N as NAMESPACES, v as valueChange, s as setDirty } from "./Android-D_6dlUuh.js";
import { u as useTranslation } from "./i18n-No79Kq9Z.js";
import { o as TextField } from "./mui-D3o-L0Jn.js";
import "./editor-DK7jwn5J.js";
import "./dnd-BTRdTaTs.js";
import "./charts-wwscgYhh.js";
const questionItem = "_questionItem_103qr_1";
const paragraph = "_paragraph_103qr_12";
const wordCount = "_wordCount_103qr_16";
const styles = {
  questionItem,
  paragraph,
  wordCount
};
function ParagraphQuestion(props) {
  var _a, _b, _c;
  const state = useSelector((state2) => {
    let questionState = state2.runState.values[props.component.qualifiedCode];
    let show_errors = state2.runState.values.Survey.show_errors;
    let isDirty = state2.templateState[props.component.qualifiedCode];
    let validity = questionState == null ? void 0 : questionState.validity;
    let invalid = (show_errors || isDirty) && validity === false;
    let value = (questionState == null ? void 0 : questionState.value) || "";
    return {
      value,
      wordCount: window.QlarrScripts ? window.QlarrScripts.wordCount(value) : 0,
      invalid
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const {
    t
  } = useTranslation(NAMESPACES.RUN);
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
  return /* @__PURE__ */ jsxs("div", { className: styles.questionItem, children: [
    /* @__PURE__ */ jsx(TextField, { size: "small", className: styles.paragraph, required: ((_b = (_a = props.component.validation) == null ? void 0 : _a.validation_required) == null ? void 0 : _b.isActive) ? true : false, multiline: true, id: props.component.qualifiedCode, name: props.component.qualifiedCode, minRows: props.component.minRows || 4, label: props.component.showHint && ((_c = props.component.content) == null ? void 0 : _c.hint) || "", onChange: handleChange, onBlur: lostFocus, value: state.value }),
    props.component.showWordCount ? /* @__PURE__ */ jsx("div", { className: styles.wordCount, children: /* @__PURE__ */ jsx("span", { children: t("word_count", {
      count: state.wordCount
    }) }) }) : ""
  ] });
}
export {
  ParagraphQuestion as default
};
//# sourceMappingURL=ParagraphQuestion-Du-HHeFS.js.map
