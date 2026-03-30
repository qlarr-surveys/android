import { n as jsx, o as jsxs } from "./index-Eqa58ok4.js";
import "./vendor-BxDgTFXe.js";
import { u as useSelector, s as shallowEqual, b as useDispatch } from "./redux-CLa1pDoQ.js";
import { e as buildResourceUrl, C as Content, r as rtlLanguage, v as valueChange, s as setDirty } from "./Android-D_6dlUuh.js";
import { B as Box, u as useTheme, a9 as Checkbox } from "./mui-D3o-L0Jn.js";
import "./i18n-No79Kq9Z.js";
import "./editor-DK7jwn5J.js";
import "./dnd-BTRdTaTs.js";
import "./charts-wwscgYhh.js";
const imageContainer = "_imageContainer_iw6vc_5";
const selection = "_selection_iw6vc_13";
const radioCheck = "_radioCheck_iw6vc_22";
const imageFlexContainer = "_imageFlexContainer_iw6vc_32";
const styles = {
  imageContainer,
  selection,
  radioCheck,
  imageFlexContainer
};
function ImageMcq(props) {
  const lang = useSelector((state) => {
    return state.runState.values["Survey"].lang;
  });
  const parentValue = useSelector((state) => {
    return state.runState.values[props.component.qualifiedCode].value || [];
  }, shallowEqual);
  const isRtl = rtlLanguage.includes(lang);
  const runValues = useSelector((s) => s.runState.values);
  return /* @__PURE__ */ jsx(Box, { sx: {
    gap: "".concat(props.component.spacing, "px"),
    justifyContent: isRtl ? "flex-end" : "flex-start"
  }, className: styles.imageFlexContainer, children: props.component.answers.map((option) => {
    var _a, _b;
    const relevance = (_b = (_a = runValues[option.qualifiedCode]) == null ? void 0 : _a.relevance) != null ? _b : true;
    if (!relevance) return null;
    return /* @__PURE__ */ jsx(ImageMcqItem, { option, parentValue, aspectRatio: props.component.imageAspectRatio, columns: props.component.columns || 3, spacing: props.component.spacing || 8, hideText: props.component.hideText, parentCode: props.component.qualifiedCode }, option.qualifiedCode);
  }) });
}
function ImageMcqItem(props) {
  var _a, _b, _c;
  const theme = useTheme();
  const dispatch = useDispatch();
  const checked = props.parentValue.indexOf(props.option.code) > -1;
  const handleChange = () => {
    let parentValue = [...props.parentValue];
    if (checked) {
      parentValue = parentValue.filter((el) => el !== props.option.code);
    } else {
      parentValue.push(props.option.code);
    }
    dispatch(valueChange({
      componentCode: props.parentCode,
      value: parentValue
    }));
    dispatch(setDirty(props.option.qualifiedCode));
    dispatch(setDirty(props.parentCode));
  };
  const backgroundImage = ((_a = props.option.resources) == null ? void 0 : _a.image) ? "url('".concat(buildResourceUrl((_b = props.option.resources) == null ? void 0 : _b.image), "')") : "url('/placeholder-image.jpg')";
  return /* @__PURE__ */ jsxs(Box, { "data-code": props.option.code, sx: {
    flex: "0 1 calc(".concat(100 / props.columns, "% - ").concat(props.spacing, "px)"),
    cursor: "pointer"
  }, children: [
    /* @__PURE__ */ jsx(Box, { className: styles.imageContainer, onClick: handleChange, style: {
      paddingTop: 100 / props.aspectRatio + "%",
      backgroundImage,
      borderRadius: "4px",
      border: checked ? "4px solid ".concat(theme.palette.primary.main) : "4px solid transparent"
    }, children: /* @__PURE__ */ jsx("div", { className: styles.selection, children: /* @__PURE__ */ jsx(Checkbox, { onChange: handleChange, size: "large", sx: {
      m: "5px"
    }, className: styles.radioCheck, checked }) }) }),
    !props.hideText && /* @__PURE__ */ jsx(Content, { customStyle: "\n                        text-align: center;\n                        margin-top: 8px;\n                      ", content: (_c = props.option.content) == null ? void 0 : _c.label })
  ] }, props.option.code);
}
export {
  ImageMcq as default
};
//# sourceMappingURL=ImageMcq-BbGElFWT.js.map
