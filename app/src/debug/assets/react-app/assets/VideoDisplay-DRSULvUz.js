import { n as jsx } from "./index-Eqa58ok4.js";
import { e as buildResourceUrl } from "./Android-D_6dlUuh.js";
import { R as ReactPlayer } from "./player-C5PnRqJ-.js";
import { u as useTheme } from "./mui-D3o-L0Jn.js";
import "./vendor-BxDgTFXe.js";
import "./i18n-No79Kq9Z.js";
import "./redux-CLa1pDoQ.js";
import "./editor-DK7jwn5J.js";
import "./dnd-BTRdTaTs.js";
import "./charts-wwscgYhh.js";
function VideoDisplay(props) {
  var _a, _b;
  const videUrl = ((_a = props.component.resources) == null ? void 0 : _a.videoUrl) ? buildResourceUrl(props.component.resources.videoUrl) : "";
  useTheme();
  return ((_b = props.component.resources) == null ? void 0 : _b.videoUrl) && /* @__PURE__ */ jsx("div", { style: {
    position: "relative",
    marginTop: "16px",
    // 16:9 aspect ratio
    paddingTop: props.component.audio_only ? "10%" : "56%"
  }, children: /* @__PURE__ */ jsx(ReactPlayer, { url: videUrl, loop: props.component.loop || false, light: true, controls: true, config: {
    forceAudio: props.component.audio_only || false
  }, style: {
    backgroundColor: "black",
    position: "absolute",
    top: "0",
    left: "0"
  }, volume: 1, width: "100%", height: "100%" }) });
}
export {
  VideoDisplay as default
};
//# sourceMappingURL=VideoDisplay-DRSULvUz.js.map
