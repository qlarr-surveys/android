import { a1 as useTheme, m as jsxRuntimeExports } from "./index-D72a2Oud.js";
import { a0 as buildResourceUrl } from "./Android-C2XnP_RP.js";
import { R as ReactPlayer } from "./index-Q06TCKAu.js";
function VideoDisplay(props) {
  var _a, _b;
  const videUrl = ((_a = props.component.resources) == null ? void 0 : _a.videoUrl) ? buildResourceUrl(props.component.resources.videoUrl) : "";
  useTheme();
  return ((_b = props.component.resources) == null ? void 0 : _b.videoUrl) && /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      style: {
        position: "relative",
        marginTop: "16px",
        // 16:9 aspect ratio
        paddingTop: props.component.audio_only ? "10%" : "56%"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        ReactPlayer,
        {
          url: videUrl,
          loop: props.component.loop || false,
          light: true,
          controls: true,
          config: {
            forceAudio: props.component.audio_only || false
          },
          style: {
            backgroundColor: "black",
            position: "absolute",
            top: "0",
            left: "0"
          },
          volume: 1,
          width: "100%",
          height: "100%"
        }
      )
    }
  );
}
export {
  VideoDisplay as default
};
//# sourceMappingURL=VideoDisplay-DCFXrD0S.js.map
