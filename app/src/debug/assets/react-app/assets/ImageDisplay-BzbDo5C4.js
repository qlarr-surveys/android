import { m as jsxRuntimeExports } from "./index-jw8wap8F.js";
import { aa as buildResourceUrl } from "./Android-BjPMgENh.js";
function ImageDisplay(props) {
  var _a, _b, _c;
  const imageUrl = ((_a = props.component.resources) == null ? void 0 : _a.imageUrl) ? buildResourceUrl(props.component.resources.imageUrl) : "";
  return ((_b = props.component.resources) == null ? void 0 : _b.imageUrl) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", padding: "1em" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      style: {
        width: ((_c = props.component.imageWidth) == null ? void 0 : _c.endsWith("%")) ? props.component.imageWidth : void 0,
        maxWidth: "100%"
      },
      src: imageUrl
    }
  ) });
}
export {
  ImageDisplay as default
};
//# sourceMappingURL=ImageDisplay-BzbDo5C4.js.map
