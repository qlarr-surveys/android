import { r as reactExports, j as jsxRuntimeExports } from "./index-GLBW3_uR.js";
const svgContainer = "_svgContainer_tbba2_3";
const styles = {
  svgContainer
};
function DynamicSvg({ svgUrl, imageHeightPx, iconColor, onIconClick, opacity = 1 }) {
  const [svgContent, setSvgContent] = reactExports.useState("");
  reactExports.useEffect(() => {
    const fetchSvg = async () => {
      const response = await fetch(svgUrl);
      const svgText = await response.text();
      setSvgContent(svgText);
    };
    if (svgUrl) {
      fetchSvg();
    }
  }, [svgUrl]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      style: {
        opacity,
        color: iconColor,
        height: imageHeightPx + "px",
        width: imageHeightPx + "px",
        borderRadius: "8px"
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
//# sourceMappingURL=index-CZ0p0muv.js.map
