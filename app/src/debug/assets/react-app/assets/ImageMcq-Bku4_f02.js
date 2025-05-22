<<<<<<<< HEAD:app/src/debug/assets/react-app/assets/ImageMcq-BTVHNVQZ.js
import { m as jsxRuntimeExports, a4 as Box, a1 as useTheme } from "./index-DRrn8_Vw.js";
import { D as useSelector, E as shallowEqual, H as useDispatch, a0 as buildResourceUrl, a1 as rtlLanguage, J as valueChange, L as setDirty } from "./Android-D7uSgl3-.js";
import { C as Checkbox } from "./Checkbox-D8IqsUB-.js";
import "./SwitchBase-BcXgCjTk.js";
const imageGrid = "_imageGrid_iw6vc_1";
const imageContainer = "_imageContainer_iw6vc_5";
const selection = "_selection_iw6vc_13";
const radioCheck = "_radioCheck_iw6vc_22";
const imageFlexContainer = "_imageFlexContainer_iw6vc_32";
========
import { j as jsxRuntimeExports, B as Box, aj as useTheme } from "./index-GLBW3_uR.js";
import { H as useSelector, aU as shallowEqual, U as useDispatch, an as rtlLanguage, aV as valueChange, b1 as setDirty } from "./use-service-BKPqOjBj.js";
import { b as buildResourceUrl } from "./common-BgJdLjBL.js";
import { C as Checkbox } from "./Checkbox-d90L6mhC.js";
import "./SwitchBase-CV68NIYO.js";
const imageGrid = "_imageGrid_8hrt4_1";
const imageContainer = "_imageContainer_8hrt4_5";
const selection = "_selection_8hrt4_13";
const radioCheck = "_radioCheck_8hrt4_21";
const imageFlexContainer = "_imageFlexContainer_8hrt4_31";
>>>>>>>> main:app/src/debug/assets/react-app/assets/ImageMcq-Bku4_f02.js
const styles = {
  imageGrid,
  imageContainer,
  selection,
  radioCheck,
  imageFlexContainer
};
function ImageMcq(props) {
  const lang = useSelector((state) => {
    return state.runState.values["Survey"].lang;
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
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          ImageMcqItem,
          {
            option,
            aspectRatio: props.component.imageAspectRatio,
            columns: props.component.columns || 64,
            spacing: props.component.spacing || 8,
            hideText: props.component.hideText,
            parentCode: props.component.qualifiedCode
          },
          option.qualifiedCode
        );
      })
    }
  );
}
function ImageMcqItem(props) {
  var _a, _b, _c;
  const theme = useTheme();
  const state = useSelector((state2) => {
    let answerState = state2.runState.values[props.option.qualifiedCode];
    return {
      showAnswer: typeof (answerState == null ? void 0 : answerState.relevance) == "undefined" || answerState.relevance,
      checked: (answerState == null ? void 0 : answerState.value) || false
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const handleChange = (componentCode, value) => {
    dispatch(valueChange({ componentCode, value }));
    dispatch(setDirty(componentCode));
    dispatch(setDirty(props.parentCode));
  };
  const backgroundImage = ((_a = props.option.resources) == null ? void 0 : _a.image) ? "url('".concat(buildResourceUrl((_b = props.option.resources) == null ? void 0 : _b.image), "')") : "0";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box,
    {
      sx: {
        flex: "0 1 calc(".concat(100 / props.columns, "% - ").concat(props.spacing, "px)"),
        cursor: "pointer"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            className: styles.imageContainer,
            onClick: () => handleChange(props.option.qualifiedCode, !state.checked),
            style: {
              paddingTop: 100 / props.aspectRatio + "%",
              backgroundImage,
              backgroundColor: theme.palette.background.default,
              borderRadius: "4px",
              border: state.checked ? "2px solid ".concat(theme.palette.primary.main) : "2px solid transparent"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.selection, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Checkbox,
              {
                onChange: (event) => handleChange(props.option.qualifiedCode, !state.checked),
                className: styles.radioCheck,
                checked: state.checked
              }
            ) })
          }
        ),
        !props.hideText && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            sx: {
              fontFamily: theme.textStyles.text.font,
              color: theme.textStyles.text.color,
              fontSize: theme.textStyles.text.size
            },
            children: (_c = props.option.content) == null ? void 0 : _c.label
          }
        )
      ]
    },
    props.option.code
  );
}
export {
  ImageMcq as default
};
<<<<<<<< HEAD:app/src/debug/assets/react-app/assets/ImageMcq-BTVHNVQZ.js
//# sourceMappingURL=ImageMcq-BTVHNVQZ.js.map
========
//# sourceMappingURL=ImageMcq-Bku4_f02.js.map
>>>>>>>> main:app/src/debug/assets/react-app/assets/ImageMcq-Bku4_f02.js
