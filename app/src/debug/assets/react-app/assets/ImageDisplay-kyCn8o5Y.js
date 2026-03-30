import { n as jsx } from "./index-Eqa58ok4.js";
import { e as buildResourceUrl } from "./Android-D_6dlUuh.js";
import "./mui-D3o-L0Jn.js";
import "./vendor-BxDgTFXe.js";
import "./i18n-No79Kq9Z.js";
import "./redux-CLa1pDoQ.js";
import "./editor-DK7jwn5J.js";
import "./dnd-BTRdTaTs.js";
import "./charts-wwscgYhh.js";
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
//# sourceMappingURL=ImageDisplay-kyCn8o5Y.js.map
