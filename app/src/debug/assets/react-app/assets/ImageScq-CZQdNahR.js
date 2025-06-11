import { a1 as useTheme, m as jsxRuntimeExports, a4 as Box } from "./index-D6pxCKdU.js";
import { D as useSelector, E as shallowEqual, H as useDispatch, a0 as buildResourceUrl, J as valueChange, a1 as rtlLanguage } from "./Android-yc1ng5Rp.js";
import { R as Radio } from "./Radio-CHEOe7Pr.js";
import "./SwitchBase-CAsPkL4g.js";
import "./RadioGroupContext-BSSnq8Is.js";
const imageContainer = "_imageContainer_y1ooh_1";
const imageGrid = "_imageGrid_y1ooh_10";
const selection = "_selection_y1ooh_14";
const radioCheck = "_radioCheck_y1ooh_24";
const imageFlexContainer = "_imageFlexContainer_y1ooh_35";
const styles = {
  imageContainer,
  imageGrid,
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
    dispatch(valueChange({ componentCode, value }));
  };
  const lang = useSelector((state2) => {
    return state2.runState.values["Survey"].lang;
  });
  const isRtl = rtlLanguage.includes(lang);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      sx: {
        gap: "".concat(props.component.spacing, "px"),
        justifyContent: isRtl ? "flex-end" : "flex-start"
      },
      className: styles.imageFlexContainer,
      children: props.component.answers.map((option) => {
        var _a, _b, _c;
        const backgroundImage = ((_a = option.resources) == null ? void 0 : _a.image) ? "url('".concat(buildResourceUrl((_b = option.resources) == null ? void 0 : _b.image), "')") : "url('/placeholder-image.jpg')";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Box,
          {
            sx: {
              flex: "0 1 calc(".concat(100 / props.component.columns, "% - ").concat(props.component.spacing, "px)"),
              cursor: "pointer"
            },
            onClick: () => handleChange(props.component.qualifiedCode, option.code),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Box,
                {
                  className: styles.imageContainer,
                  style: {
                    paddingTop: "".concat(100 / props.component.imageAspectRatio, "%"),
                    borderRadius: "4px",
                    backgroundImage,
                    border: state.value === option.code ? "4px solid ".concat(theme.palette.primary.main) : "4px solid transparent"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.selection, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Radio,
                    {
                      checked: state.value === option.code,
                      onChange: (event) => handleChange(event.target.name, event.target.value),
                      value: option.code,
                      className: styles.radioCheck,
                      name: props.component.qualifiedCode,
                      size: "large",
                      sx: {
                        m: "5px",
                        color: theme.textStyles.text.color
                      }
                    }
                  ) })
                }
              ),
              !props.component.hideText && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Box,
                {
                  sx: {
                    fontFamily: theme.textStyles.text.font,
                    color: theme.textStyles.text.color,
                    fontSize: theme.textStyles.text.size,
                    textAlign: "center",
                    marginTop: "8px"
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
  ImageScq as default
};
//# sourceMappingURL=ImageScq-CZQdNahR.js.map
