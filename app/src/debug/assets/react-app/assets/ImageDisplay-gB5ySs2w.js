import { j as jsxRuntimeExports } from "./index-BXKg_X9w.js";
import { b as buildResourceUrl } from "./common-Bl2TiDan.js";
import "./use-service-D_BNczvS.js";
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
//# sourceMappingURL=ImageDisplay-gB5ySs2w.js.map
