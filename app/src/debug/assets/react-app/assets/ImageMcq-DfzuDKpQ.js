import { m as jsxRuntimeExports, a7 as Box, a4 as useTheme } from "./index-DAqwKGVD.js";
import { E as useSelector, H as shallowEqual, J as useDispatch, a8 as buildResourceUrl, a9 as rtlLanguage, L as valueChange, Q as setDirty } from "./Android-CSEUy22g.js";
import { C as Checkbox } from "./Checkbox-7IxDDyRX.js";
import "./SwitchBase-BA31JW99.js";
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
            columns: props.component.columns || 3,
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
  const backgroundImage = ((_a = props.option.resources) == null ? void 0 : _a.image) ? "url('".concat(buildResourceUrl((_b = props.option.resources) == null ? void 0 : _b.image), "')") : "url('/placeholder-image.jpg')";
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
              borderRadius: "4px",
              border: state.checked ? "4px solid ".concat(theme.palette.primary.main) : "4px solid transparent"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.selection, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Checkbox,
              {
                onChange: (event) => handleChange(props.option.qualifiedCode, !state.checked),
                size: "large",
                sx: {
                  m: "5px"
                },
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
//# sourceMappingURL=ImageMcq-DfzuDKpQ.js.map
