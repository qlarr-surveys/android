import { a1 as useTheme, m as jsxRuntimeExports, a4 as Box } from "./index-DRrn8_Vw.js";
import { D as useSelector, E as shallowEqual, H as useDispatch, J as valueChange, a0 as buildResourceUrl } from "./Android-D7uSgl3-.js";
import { D as DynamicSvg } from "./index-BIpDyNX3.js";
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
function IconMcq(props) {
  var _a;
  const theme = useTheme();
  useSelector((state2) => {
    let questionState = state2.runState.values[props.component.qualifiedCode];
    let show_errors = state2.runState.values.Survey.show_errors;
    let isDirty = state2.templateState[props.component.qualifiedCode];
    return {
      value: (questionState == null ? void 0 : questionState.value) || "",
      showValidation: (show_errors || isDirty) && (questionState == null ? void 0 : questionState.validity) === false
    };
  }, shallowEqual);
  useDispatch();
  const hideText = ((_a = props.component) == null ? void 0 : _a.hideText) || false;
  useSelector((state2) => {
    return state2.runState.values["Survey"].lang;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      sx: {
        gap: "".concat(props.component.spacing || 8, "px")
      },
      className: styles.iconFlexContainer,
      children: props.component.answers.map((option) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          IconMcqChoice,
          {
            component: option,
            columns: props.component.columns || 3,
            iconSize: props.component.iconSize || "150",
            spacing: props.component.spacing || 8,
            theme,
            hideText
          },
          option.code
        );
      })
    }
  );
}
function IconMcqChoice({
  key,
  component,
  iconSize,
  columns,
  spacing,
  hideText,
  theme
}) {
  var _a, _b, _c;
  const dispatch = useDispatch();
  const checked = useSelector(
    (state) => state.runState.values[component.qualifiedCode].value || false
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box,
    {
      sx: {
        flex: "0 1 calc(".concat(100 / columns, "% - ").concat(spacing || 8, "px)"),
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
                onIconClick: () => dispatch(
                  valueChange({
                    componentCode: component.qualifiedCode,
                    value: !checked
                  })
                ),
                imageHeight: "100%",
                maxHeight: iconSize + "px",
                svgUrl: ((_a = component == null ? void 0 : component.resources) == null ? void 0 : _a.icon) ? buildResourceUrl((_b = component == null ? void 0 : component.resources) == null ? void 0 : _b.icon) : void 0,
                isSelected: checked,
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
              color: checked ? theme.palette.primary.main : theme.textStyles.text.color,
              fontSize: theme.textStyles.text.size
            },
            children: (_c = component.content) == null ? void 0 : _c.label
          }
        )
      ]
    },
    key
  );
}
export {
  IconMcq as default
};
//# sourceMappingURL=IconMcq-C6uNSXsP.js.map
