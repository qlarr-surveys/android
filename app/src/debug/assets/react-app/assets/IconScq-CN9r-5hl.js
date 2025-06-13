import { a1 as useTheme, m as jsxRuntimeExports, a4 as Box } from "./index-19YjdoHZ.js";
import { D as useSelector, E as shallowEqual, H as useDispatch, a0 as buildResourceUrl, J as valueChange } from "./Android-DJjuZpMs.js";
import { D as DynamicSvg } from "./index-Biw3Ea82.js";
const imageContainer = "_imageContainer_5bop2_1";
const imageGrid = "_imageGrid_5bop2_7";
const selection = "_selection_5bop2_11";
const svgContainer = "_svgContainer_5bop2_16";
const iconFlexContainer = "_iconFlexContainer_5bop2_25";
const styles = {
  imageContainer,
  imageGrid,
  selection,
  svgContainer,
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      sx: {
        gap: "".concat(props.component.spacing || 8, "px")
      },
      className: styles.iconFlexContainer,
      children: props.component.answers.map((option) => {
        var _a2, _b, _c;
        const isSelected = state.value == option.code;
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
                      svgUrl: ((_a2 = option == null ? void 0 : option.resources) == null ? void 0 : _a2.icon) ? buildResourceUrl((_b = option == null ? void 0 : option.resources) == null ? void 0 : _b.icon) : void 0,
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
                  children: (_c = option.content) == null ? void 0 : _c.label
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
//# sourceMappingURL=IconScq-CN9r-5hl.js.map
