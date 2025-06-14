import { r as reactExports, m as jsxRuntimeExports } from "./index-DvSJKKkn.js";
const svgContainer = "_svgContainer_tbba2_3";
const styles = {
  svgContainer
};
function DynamicSvg({
  svgUrl,
  imageHeight,
  maxHeight = "inherit",
  onIconClick,
  opacity = 1,
  isSelected = false,
  theme
}) {
  var _a, _b;
  const [svgContent, setSvgContent] = reactExports.useState("");
  reactExports.useEffect(() => {
    const fetchSvg = async () => {
      const response = await fetch(svgUrl || "/placeholder-image.svg");
      const svgText = await response.text();
      setSvgContent(svgText);
    };
    fetchSvg();
  }, [svgUrl]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      style: {
        opacity,
        maxHeight,
        maxWidth: maxHeight,
        height: imageHeight,
        aspectRatio: "1",
        padding: "2px",
        width: imageHeight,
        margin: "auto",
        borderRadius: "8px",
        color: isSelected ? theme.palette.primary.main : (_b = (_a = theme.textStyles) == null ? void 0 : _a.text) == null ? void 0 : _b.color,
        border: isSelected ? "4px solid ".concat(theme.palette.primary.main) : "4px solid transparent"
      },
      onClick: onIconClick,
      className: styles.svgContainer,
      dangerouslySetInnerHTML: { __html: svgContent ? svgContent : "" }
    }
  );
}
export {
  DynamicSvg as D
};
//# sourceMappingURL=index-HT_xO068.js.map
