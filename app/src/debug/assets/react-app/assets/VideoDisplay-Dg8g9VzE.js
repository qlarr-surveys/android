import { n as jsx } from "./index-CBAYZ0Vg.js";
import { e as buildResourceUrl } from "./Android--WWD2PK6.js";
import { R as ReactPlayer } from "./player-mb-xfVjd.js";
import { u as useTheme } from "./mui-qMsG-zFb.js";
import "./vendor-C1A_Wzx1.js";
import "./i18n-CpdhL4GU.js";
import "./redux-C5jBuL_y.js";
import "./dnd-DDAM2OKI.js";
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
//# sourceMappingURL=VideoDisplay-Dg8g9VzE.js.map
