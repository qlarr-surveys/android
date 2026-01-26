import { r as reactExports, as as jsx, av as Box, ar as useTheme, at as jsxs, a4 as css } from "./index-CM5T10V1.js";
import { J as useSelector, K as shallowEqual, L as useDispatch, a6 as buildResourceUrl, R as setDirty, N as valueChange, a7 as rtlLanguage } from "./Android-BBYOUnem.js";
const imageContainer = "_imageContainer_1ulv8_5";
const rankContainer = "_rankContainer_1ulv8_12";
const rankValue = "_rankValue_1ulv8_27";
const imageFlexContainer = "_imageFlexContainer_1ulv8_34";
const styles = {
  imageContainer,
  rankContainer,
  rankValue,
  imageFlexContainer
};
function ImageRanking(props) {
  const values = useSelector((state) => {
    let valuesMap = {};
    props.component.answers.forEach((element) => {
      valuesMap[element.qualifiedCode] = state.runState.values[element.qualifiedCode].value;
    });
    return valuesMap;
  }, shallowEqual);
  const dispatch = useDispatch();
  const containerRef = reactExports.useRef(null);
  const [width, setWidth] = reactExports.useState(800);
  reactExports.useEffect(() => {
    var _a;
    setWidth((_a = containerRef == null ? void 0 : containerRef.current) == null ? void 0 : _a.offsetWidth);
  }, [containerRef]);
  const imageWidth = (width - props.component.columns * props.component.spacing * 2) / props.component.columns;
  const imageHeight = imageWidth / (props.component.imageAspectRatio || 1);
  reactExports.useEffect(() => {
    const resizeListener = () => {
      var _a;
      setWidth((_a = containerRef == null ? void 0 : containerRef.current) == null ? void 0 : _a.offsetWidth);
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);
  const onItemClick = (componentCode) => {
    dispatch(setDirty(props.component.qualifiedCode));
    dispatch(setDirty(props.parentCode));
    if (+values[componentCode] > 0) {
      dispatch(valueChange({
        componentCode,
        undefined: void 0
      }));
    } else {
      let keys = Object.keys(values);
      let allValues = keys.map((key) => values[key]);
      for (var i = 1; i <= keys.length; i++) {
        if (!allValues.includes(i)) {
          dispatch(valueChange({
            componentCode,
            value: i
          }));
          return;
        }
      }
    }
  };
  const lang = useSelector((state) => {
    return state.runState.values["Survey"].lang;
  });
  const isRtl = rtlLanguage.includes(lang);
  return /* @__PURE__ */ jsx(Box, { sx: {
    gap: "".concat(props.component.spacing, "px"),
    justifyContent: isRtl ? "flex-end" : "flex-start"
  }, className: styles.imageFlexContainer, children: props.component.answers.map((option) => {
    return /* @__PURE__ */ jsx(ImageRankingItem, { option, spacing: props.component.spacing, columns: props.component.columns, hideText: props.component.hideText, onClick: () => onItemClick(option.qualifiedCode), parentCode: props.component.qualifiedCode, imageHeight, imageWidth }, option.qualifiedCode);
  }) });
}
function ImageRankingItem(props) {
  var _a, _b;
  const theme = useTheme();
  const state = useSelector((state2) => {
    let answerState = state2.runState.values[props.option.qualifiedCode];
    return {
      showAnswer: typeof (answerState == null ? void 0 : answerState.relevance) == "undefined" || answerState.relevance,
      value: (answerState == null ? void 0 : answerState.value) || 0
    };
  }, shallowEqual);
  const backgroundImage = ((_a = props.option.resources) == null ? void 0 : _a.image) ? "url('".concat(buildResourceUrl(props.option.resources.image), "')") : "url('/placeholder-image.jpg')";
  return /* @__PURE__ */ jsxs(Box, { "data-code": props.option.code, sx: {
    flex: "0 1 calc(".concat(100 / props.columns, "% - ").concat(props.spacing, "px)"),
    cursor: "pointer"
  }, children: [
    /* @__PURE__ */ jsx(Box, { className: styles.imageContainer, onClick: () => props.onClick(), display: "flex", justifyContent: "center", alignItems: "center", style: {
      paddingTop: 100 / props.aspectRatio + "%",
      backgroundImage,
      borderRadius: "4px",
      boxShadow: 2,
      height: props.imageHeight + "px",
      border: state.checked ? "2px solid ".concat(theme.palette.primary.main) : "2px solid transparent"
    }, children: state.value > 0 && /* @__PURE__ */ jsx("div", { style: {
      background: theme.palette.primary.main
    }, className: styles.rankContainer, children: /* @__PURE__ */ jsx("span", { className: styles.rankValue, css: /* @__PURE__ */ css("{color:", theme.textStyles.text.color, ";}", ""), children: state.value }) }) }),
    !props.hideText && /* @__PURE__ */ jsx(Box, { children: (_b = props.option.content) == null ? void 0 : _b.label })
  ] }, props.option.code);
}
export {
  ImageRanking as default
};
//# sourceMappingURL=ImageRanking-D-AGiDAf.js.map
