import { m as jsxRuntimeExports, ab as Box, a8 as useTheme } from "./index-CictXEDK.js";
import { K as useSelector, L as shallowEqual, M as useDispatch, aa as buildResourceUrl, ab as rtlLanguage, O as valueChange, S as setDirty } from "./Android-DqLwuEqA.js";
import { C as Checkbox } from "./Checkbox-ChIKtZY7.js";
import "./SwitchBase-D-ntMZCD.js";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      sx: {
        gap: "".concat(props.component.spacing, "px"),
        justifyContent: isRtl ? "flex-end" : "flex-start"
      },
      className: styles.imageFlexContainer,
      children: props.component.answers.map((option) => {
        var _a, _b;
        const relevance = (_b = (_a = runValues[option.qualifiedCode]) == null ? void 0 : _a.relevance) != null ? _b : true;
        if (!relevance) return null;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          ImageMcqItem,
          {
            option,
            parentValue,
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
      showAnswer: typeof (answerState == null ? void 0 : answerState.relevance) == "undefined" || answerState.relevance
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const handleChange = (componentCode, value) => {
    let parentValue = [...props.parentValue];
    if (value) {
      parentValue.push(props.option.code);
    } else {
      parentValue = parentValue.filter((el) => el !== props.option.code);
    }
    dispatch(
      valueChange({
        componentCode: props.parentCode,
        value: parentValue
      })
    );
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
                checked: props.parentValue.indexOf(props.option.code) > -1
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
//# sourceMappingURL=ImageMcq-CQhk7cSu.js.map
