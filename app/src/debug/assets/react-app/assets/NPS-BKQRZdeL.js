import { o as jsxs, n as jsx, F as Fragment } from "./index-Eqa58ok4.js";
import "./vendor-BxDgTFXe.js";
import { b as useDispatch, u as useSelector, s as shallowEqual } from "./redux-CLa1pDoQ.js";
import { h as getContrastColor, v as valueChange, s as setDirty } from "./Android-D_6dlUuh.js";
import { u as useTheme, B as Box } from "./mui-D3o-L0Jn.js";
import "./i18n-No79Kq9Z.js";
import "./editor-DK7jwn5J.js";
import "./dnd-BTRdTaTs.js";
import "./charts-wwscgYhh.js";
const choicesContainer = "_choicesContainer_1g4yx_1";
const choice = "_choice_1g4yx_1";
const choiceLabels = "_choiceLabels_1g4yx_20";
const styles = {
  choicesContainer,
  choice,
  choiceLabels
};
function NPS(props) {
  var _a, _b;
  const theme = useTheme();
  const dispatch = useDispatch();
  let columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const state = useSelector((state2) => {
    return state2.runState.values[props.component.qualifiedCode].value;
  }, shallowEqual);
  const handleChange = (option) => {
    dispatch(valueChange({
      componentCode: props.component.qualifiedCode,
      value: option
    }));
    dispatch(setDirty(props.component.qualifiedCode));
  };
  const highlightContrast = getContrastColor(theme.palette.background.paper);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Box, { className: styles.choiceLabels, children: [
      /* @__PURE__ */ jsx(Box, { children: ((_a = props.component.content) == null ? void 0 : _a.lower_bound_hint) || "" }),
      /* @__PURE__ */ jsx(Box, { children: ((_b = props.component.content) == null ? void 0 : _b.higher_bound_hint) || "" })
    ] }),
    /* @__PURE__ */ jsx(Box, { className: styles.choicesContainer, children: columns.map((option) => {
      const isSelected = state == option;
      return /* @__PURE__ */ jsx(Box, { className: styles.choice, onClick: () => handleChange(option), sx: {
        color: isSelected ? highlightContrast : "inherit",
        backgroundColor: isSelected ? "primary.main" : "background.paper"
      }, children: option }, option);
    }) })
  ] });
}
export {
  NPS as default
};
//# sourceMappingURL=NPS-BKQRZdeL.js.map
