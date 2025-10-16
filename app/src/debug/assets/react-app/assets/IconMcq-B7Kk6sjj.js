import { a8 as useTheme, m as jsxRuntimeExports, ab as Box } from "./index-CDhdfxEQ.js";
import { K as useSelector, L as shallowEqual, M as useDispatch, aa as buildResourceUrl, O as valueChange } from "./Android-BIErA7z6.js";
import { D as DynamicSvg } from "./index-CZA76MBD.js";
const iconFlexContainer = "_iconFlexContainer_5bop2_25";
const styles = {
  iconFlexContainer
};
function IconMcq(props) {
  var _a;
  const theme = useTheme();
  const parentValue = useSelector((state) => {
    return state.runState.values[props.component.qualifiedCode].value || [];
  }, shallowEqual);
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
        var _a2, _b;
        const relevance = (_b = (_a2 = runValues[option.qualifiedCode]) == null ? void 0 : _a2.relevance) != null ? _b : true;
        if (!relevance) return null;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          IconMcqChoice,
          {
            parentValue,
            parentCode: props.component.qualifiedCode,
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
  parentValue,
  parentCode,
  iconSize,
  columns,
  spacing,
  hideText,
  theme
}) {
  var _a, _b, _c;
  const dispatch = useDispatch();
  const checked = parentValue.indexOf(component.code) > -1;
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
                onIconClick: () => {
                  let parentValue2 = [...parentValue];
                  if (checked) {
                    parentValue2 = parentValue2.filter((el) => el !== component.code);
                  } else {
                    parentValue2.push(component.code);
                  }
                  dispatch(valueChange({ componentCode: parentCode, value: parentValue2 }));
                },
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
//# sourceMappingURL=IconMcq-B7Kk6sjj.js.map
