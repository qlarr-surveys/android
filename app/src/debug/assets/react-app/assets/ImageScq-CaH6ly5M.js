import { n as jsx, o as jsxs } from "./index-Zbq57S4f.js";
import "./vendor-BxDgTFXe.js";
import { u as useSelector, s as shallowEqual, b as useDispatch } from "./redux-CLa1pDoQ.js";
import { e as buildResourceUrl, C as Content, v as valueChange, r as rtlLanguage } from "./Android-BzAC49gk.js";
import { u as useTheme, B as Box, a1 as Radio } from "./mui-D3o-L0Jn.js";
import "./i18n-No79Kq9Z.js";
import "./editor-DK7jwn5J.js";
import "./dnd-BTRdTaTs.js";
import "./charts-wwscgYhh.js";
const imageContainer = "_imageContainer_y1ooh_1";
const selection = "_selection_y1ooh_14";
const radioCheck = "_radioCheck_y1ooh_24";
const imageFlexContainer = "_imageFlexContainer_y1ooh_35";
const styles = {
  imageContainer,
  selection,
  radioCheck,
  imageFlexContainer
};
function ImageScq(props) {
  const theme = useTheme();
  const state = useSelector((state2) => {
    let questionState = state2.runState.values[props.component.qualifiedCode];
    let show_errors = state2.runState.values.Survey.show_errors;
    let isDirty = state2.templateState[props.component.qualifiedCode];
    return {
      value: (questionState == null ? void 0 : questionState.value) || "",
      showValidation: (show_errors || isDirty) && (questionState == null ? void 0 : questionState.validity) === false
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const handleChange = (componentCode, value) => {
    dispatch(valueChange({
      componentCode,
      value
    }));
  };
  const lang = useSelector((state2) => {
    return state2.runState.values["Survey"].lang;
  });
  const isRtl = rtlLanguage.includes(lang);
  const runValues = useSelector((s) => s.runState.values);
  return /* @__PURE__ */ jsx(Box, { sx: {
    gap: "".concat(props.component.spacing, "px"),
    justifyContent: isRtl ? "flex-end" : "flex-start"
  }, className: styles.imageFlexContainer, children: props.component.answers.map((option) => {
    var _a, _b, _c, _d, _e;
    const backgroundImage = ((_a = option.resources) == null ? void 0 : _a.image) ? "url('".concat(buildResourceUrl((_b = option.resources) == null ? void 0 : _b.image), "')") : "url('/placeholder-image.jpg')";
    const relevance = (_d = (_c = runValues[option.qualifiedCode]) == null ? void 0 : _c.relevance) != null ? _d : true;
    if (!relevance) return null;
    return /* @__PURE__ */ jsxs(Box, { "data-code": option.code, sx: {
      flex: "0 1 calc(".concat(100 / props.component.columns, "% - ").concat(props.component.spacing, "px)"),
      cursor: "pointer"
    }, onClick: () => handleChange(props.component.qualifiedCode, option.code), children: [
      /* @__PURE__ */ jsx(Box, { className: styles.imageContainer, style: {
        paddingTop: "".concat(100 / props.component.imageAspectRatio, "%"),
        borderRadius: "4px",
        backgroundImage,
        border: state.value === option.code ? "4px solid ".concat(theme.palette.primary.main) : "4px solid transparent"
      }, children: /* @__PURE__ */ jsx("div", { className: styles.selection, children: /* @__PURE__ */ jsx(Radio, { checked: state.value === option.code, onChange: (event) => handleChange(event.target.name, event.target.value), value: option.code, className: styles.radioCheck, name: props.component.qualifiedCode, size: "large", sx: {
        m: "5px"
      } }) }) }),
      !props.component.hideText && /* @__PURE__ */ jsx(Content, { customStyle: "\n                  text-align: center;\n                  margin-top: 8px;\n                ", content: (_e = option.content) == null ? void 0 : _e.label })
    ] }, option.code);
  }) });
}
export {
  ImageScq as default
};
//# sourceMappingURL=ImageScq-CaH6ly5M.js.map
