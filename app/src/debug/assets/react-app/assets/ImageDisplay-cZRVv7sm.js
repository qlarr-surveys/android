import { n as jsx } from "./index-CBAYZ0Vg.js";
import { e as buildResourceUrl } from "./Android--WWD2PK6.js";
import "./mui-qMsG-zFb.js";
import "./vendor-C1A_Wzx1.js";
import "./i18n-CpdhL4GU.js";
import "./redux-C5jBuL_y.js";
import "./dnd-DDAM2OKI.js";
function ImageDisplay(props) {
  var _a, _b, _c;
  const imageUrl = ((_a = props.component.resources) == null ? void 0 : _a.imageUrl) ? buildResourceUrl(props.component.resources.imageUrl) : "";
  return ((_b = props.component.resources) == null ? void 0 : _b.imageUrl) && /* @__PURE__ */ jsx("div", { style: {
    textAlign: "center",
    padding: "1em"
  }, children: /* @__PURE__ */ jsx("img", { style: {
    width: ((_c = props.component.imageWidth) == null ? void 0 : _c.endsWith("%")) ? props.component.imageWidth : void 0,
    maxWidth: "100%"
  }, src: imageUrl }) });
}
export {
  ImageDisplay as default
};
//# sourceMappingURL=ImageDisplay-cZRVv7sm.js.map
