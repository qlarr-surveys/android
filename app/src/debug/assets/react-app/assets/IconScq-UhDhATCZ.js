import { a4 as useTheme, m as jsxRuntimeExports, a7 as Box } from "./index-DAqwKGVD.js";
import { E as useSelector, H as shallowEqual, J as useDispatch, a8 as buildResourceUrl, L as valueChange } from "./Android-CSEUy22g.js";
import { D as DynamicSvg } from "./index-CKWYakPz.js";
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
//# sourceMappingURL=IconScq-UhDhATCZ.js.map
