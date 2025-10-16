import { a8 as useTheme, m as jsxRuntimeExports, ab as Box } from "./index-CDhdfxEQ.js";
import { K as useSelector, L as shallowEqual, M as useDispatch, aa as buildResourceUrl, O as valueChange } from "./Android-BIErA7z6.js";
import { D as DynamicSvg } from "./index-CZA76MBD.js";
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
    dispatch(valueChange({ componentCode, value }));
  };
  const hideText = ((_a = props.component) == null ? void 0 : _a.hideText) || false;
  const runValues = useSelector((s) => s.runState.values);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      sx: {
        gap: "".concat(props.component.spacing || 8, "px")
      },
      className: styles.iconFlexContainer,
      children: props.component.answers.map((option) => {
        var _a2, _b, _c, _d, _e;
        const isSelected = state.value == option.code;
        const relevance = (_b = (_a2 = runValues[option.qualifiedCode]) == null ? void 0 : _a2.relevance) != null ? _b : true;
        if (!relevance) return null;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Box,
          {
            sx: {
              flex: "0 1 calc(".concat(100 / props.component.columns, "% - ").concat(props.component.spacing || 8, "px)"),
              textAlign: "center",
              cursor: "pointer"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    display: "flex",
                    justifyContent: "center",
                    width: "100%"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    DynamicSvg,
                    {
                      onIconClick: () => handleChange(props.component.qualifiedCode, option.code),
                      imageHeight: "100%",
                      maxHeight: (props.component.iconSize || 150) + "px",
                      svgUrl: ((_c = option == null ? void 0 : option.resources) == null ? void 0 : _c.icon) ? buildResourceUrl((_d = option == null ? void 0 : option.resources) == null ? void 0 : _d.icon) : void 0,
                      isSelected,
                      theme
                    }
                  )
                }
              ),
              !hideText && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Box,
                {
                  sx: {
                    textAlign: "center",
                    fontFamily: theme.textStyles.text.font,
                    color: isSelected ? theme.palette.primary.main : theme.textStyles.text.color,
                    fontSize: theme.textStyles.text.size
                  },
                  children: (_e = option.content) == null ? void 0 : _e.label
                }
              )
            ]
          },
          option.code
        );
      })
    }
  );
}
export {
  IconScq as default
};
//# sourceMappingURL=IconScq-CQon0ovR.js.map
