<<<<<<<< HEAD:app/src/debug/assets/react-app/assets/ImageScq-C29lAeng.js
import { a1 as useTheme, m as jsxRuntimeExports, a4 as Box } from "./index-DRrn8_Vw.js";
import { D as useSelector, E as shallowEqual, H as useDispatch, a0 as buildResourceUrl, J as valueChange, a1 as rtlLanguage } from "./Android-D7uSgl3-.js";
import { R as Radio } from "./Radio-B9qqvD_B.js";
import "./SwitchBase-BcXgCjTk.js";
import "./RadioGroupContext-DCqrnyW1.js";
const imageContainer = "_imageContainer_y1ooh_1";
const imageGrid = "_imageGrid_y1ooh_10";
const selection = "_selection_y1ooh_14";
const radioCheck = "_radioCheck_y1ooh_24";
const imageFlexContainer = "_imageFlexContainer_y1ooh_35";
========
import { aj as useTheme, j as jsxRuntimeExports, B as Box } from "./index-GLBW3_uR.js";
import { H as useSelector, aU as shallowEqual, U as useDispatch, aV as valueChange, an as rtlLanguage } from "./use-service-BKPqOjBj.js";
import { b as buildResourceUrl } from "./common-BgJdLjBL.js";
import { R as Radio } from "./Radio-DaBGRTzG.js";
import "./SwitchBase-CV68NIYO.js";
import "./RadioGroupContext-xtiHGRVQ.js";
import "./radioClasses-Gcs6PRWb.js";
const imageContainer = "_imageContainer_1ukqi_1";
const imageGrid = "_imageGrid_1ukqi_10";
const selection = "_selection_1ukqi_14";
const radioCheck = "_radioCheck_1ukqi_23";
const imageFlexContainer = "_imageFlexContainer_1ukqi_34";
>>>>>>>> main:app/src/debug/assets/react-app/assets/ImageScq-ttvMErJU.js
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
        const backgroundImage = ((_a = option.resources) == null ? void 0 : _a.image) ? "url('".concat(buildResourceUrl((_b = option.resources) == null ? void 0 : _b.image), "')") : "0";
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
                    backgroundColor: theme.palette.background.default,
                    border: state.value === option.code ? "2px solid ".concat(theme.palette.primary.main) : "2px solid transparent"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.selection, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Radio,
                    {
                      checked: state.value === option.code,
                      onChange: (event) => handleChange(event.target.name, event.target.value),
                      value: option.code,
                      className: styles.radioCheck,
                      name: props.component.qualifiedCode,
                      sx: {
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
<<<<<<<< HEAD:app/src/debug/assets/react-app/assets/ImageScq-C29lAeng.js
//# sourceMappingURL=ImageScq-C29lAeng.js.map
========
//# sourceMappingURL=ImageScq-ttvMErJU.js.map
>>>>>>>> main:app/src/debug/assets/react-app/assets/ImageScq-ttvMErJU.js
