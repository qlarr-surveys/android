import { j as jsxRuntimeExports } from "./index-X8N9IRh7.js";
import { H as useSelector, aR as shallowEqual, U as useDispatch, M as useTranslation, aS as valueChange, a_ as setDirty } from "./use-service-CuBoVPEx.js";
import { T as TextField } from "./TextField-D-dIAL0B.js";
const questionItem = "_questionItem_pxk6e_1";
const paragraph = "_paragraph_pxk6e_15";
const wordCount = "_wordCount_pxk6e_19";
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
  const { t } = useTranslation("run");
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.questionItem, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TextField,
      {
        className: styles.paragraph,
        required: ((_b = (_a = props.component.validation) == null ? void 0 : _a.validation_required) == null ? void 0 : _b.isActive) ? true : false,
        multiline: true,
        id: props.component.qualifiedCode,
        name: props.component.qualifiedCode,
        minRows: props.component.minRows || 2,
        label: props.component.showHint && ((_c = props.component.content) == null ? void 0 : _c.hint) || "",
        onChange: handleChange,
        onBlur: lostFocus,
        value: state.value
      }
    ),
    props.component.showWordCount ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.wordCount, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("word_count", { count: state.wordCount }) }) }) : ""
  ] });
}
export {
  ParagraphQuestion as default
};
//# sourceMappingURL=ParagraphQuestion-DewXI0mR.js.map
