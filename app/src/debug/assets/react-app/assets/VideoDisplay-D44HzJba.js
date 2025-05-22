<<<<<<<< HEAD:app/src/debug/assets/react-app/assets/VideoDisplay-CT4Dj8pW.js
import { a1 as useTheme, m as jsxRuntimeExports } from "./index-DRrn8_Vw.js";
import { a0 as buildResourceUrl } from "./Android-D7uSgl3-.js";
import { R as ReactPlayer } from "./index-C1S3-jZo.js";
========
import { aj as useTheme, j as jsxRuntimeExports } from "./index-GLBW3_uR.js";
import { b as buildResourceUrl } from "./common-BgJdLjBL.js";
import { R as ReactPlayer } from "./index-0oiAbesM.js";
import "./use-service-BKPqOjBj.js";
>>>>>>>> main:app/src/debug/assets/react-app/assets/VideoDisplay-D44HzJba.js
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
<<<<<<<< HEAD:app/src/debug/assets/react-app/assets/VideoDisplay-CT4Dj8pW.js
//# sourceMappingURL=VideoDisplay-CT4Dj8pW.js.map
========
//# sourceMappingURL=VideoDisplay-D44HzJba.js.map
>>>>>>>> main:app/src/debug/assets/react-app/assets/VideoDisplay-D44HzJba.js
