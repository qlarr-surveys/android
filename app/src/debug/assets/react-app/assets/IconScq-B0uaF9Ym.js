import { ar as useTheme, as as jsx, at as jsxs, av as Box } from "./index-CM5T10V1.js";
import { J as useSelector, K as shallowEqual, L as useDispatch, a6 as buildResourceUrl, Q as Content, N as valueChange } from "./Android-BBYOUnem.js";
import { D as DynamicSvg } from "./index-DAhn7L_H.js";
const iconFlexContainer = "_iconFlexContainer_5bop2_25";
const styles = {
  iconFlexContainer
};
function IconScq(props) {
  var _a;
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
  const hideText = ((_a = props.component) == null ? void 0 : _a.hideText) || false;
  const runValues = useSelector((s) => s.runState.values);
  return /* @__PURE__ */ jsx(Box, { sx: {
    gap: "".concat(props.component.spacing || 8, "px")
  }, className: styles.iconFlexContainer, children: props.component.answers.map((option) => {
    var _a2, _b, _c, _d, _e;
    const isSelected = state.value == option.code;
    const relevance = (_b = (_a2 = runValues[option.qualifiedCode]) == null ? void 0 : _a2.relevance) != null ? _b : true;
    if (!relevance) return null;
    return /* @__PURE__ */ jsxs(Box, { "data-code": option.code, sx: {
      flex: "0 1 calc(".concat(100 / props.component.columns, "% - ").concat(props.component.spacing || 8, "px)"),
      textAlign: "center",
      cursor: "pointer"
    }, children: [
      /* @__PURE__ */ jsx("div", { style: {
        display: "flex",
        justifyContent: "center",
        width: "100%"
      }, children: /* @__PURE__ */ jsx(DynamicSvg, { onIconClick: () => handleChange(props.component.qualifiedCode, option.code), imageHeight: "100%", maxHeight: (props.component.iconSize || 150) + "px", svgUrl: ((_c = option == null ? void 0 : option.resources) == null ? void 0 : _c.icon) ? buildResourceUrl((_d = option == null ? void 0 : option.resources) == null ? void 0 : _d.icon) : void 0, isSelected, theme }) }),
      !hideText && /* @__PURE__ */ jsx(Content, { customStyle: "\n                                text-align: center;\n                                margin-top: 8px;\n                                color: ".concat(isSelected ? theme.palette.primary.main : theme.textStyles.text.color, ",\n                              "), content: (_e = option.content) == null ? void 0 : _e.label })
    ] }, option.code);
  }) });
}
export {
  IconScq as default
};
//# sourceMappingURL=IconScq-B0uaF9Ym.js.map
