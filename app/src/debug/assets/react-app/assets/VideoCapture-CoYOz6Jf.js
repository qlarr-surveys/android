import { m as jsxRuntimeExports } from "./index-D6pxCKdU.js";
import { Q as useService, D as useSelector, H as useDispatch, U as Box, S as previewUrl, X as getFileFromPath, Y as uploadFile, J as valueChange } from "./Android-yc1ng5Rp.js";
import { R as ReactPlayer } from "./index-BBVEq6iw.js";
const container = "_container_bvkr6_2";
const styles = {
  container
};
function VideoCapture(props) {
  var _a;
  const runService = useService("run");
  const component = props.component;
  const state = useSelector((state2) => {
    return state2.runState.values[component.qualifiedCode];
  });
  const preview = useSelector((state2) => {
    return state2.runState.preview;
  });
  const mode = useSelector((state2) => {
    return state2.runState.values.Survey.mode;
  });
  const dispatch = useDispatch();
  const onImageClick = () => {
    var _a2, _b, _c, _d;
    const code = component.qualifiedCode;
    const maxFileSize = ((_b = (_a2 = component.validation) == null ? void 0 : _a2.validation_max_file_size) == null ? void 0 : _b.isActive) && ((_d = (_c = component.validation) == null ? void 0 : _c.validation_max_file_size) == null ? void 0 : _d.max_size) || -1;
    if (preview && mode == "offline") {
      getFileFromPath("/dummy_video.mp4").then((response) => {
        uploadFile(runService, code, preview, response).then((response2) => {
          dispatch(
            valueChange({
              componentCode: props.component.qualifiedCode,
              value: response2
            })
          );
        }).catch((err) => {
          console.error(err);
        });
      });
    } else if (window["Android"]) {
      window["Android"].captureVideo(code, maxFileSize);
      window["onVideoCaptured" + code] = (value) => {
        dispatch(
          valueChange({
            componentCode: code,
            value
          })
        );
      };
    } else {
      console.debug("no android device!!");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.container, children: [
    !state.value || !state.value.stored_filename ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        onClick: onImageClick,
        src: "/video.png",
        style: {
          maxHeight: "200px"
        }
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          position: "relative",
          marginTop: "16px",
          // 16:9 aspect ratio
          paddingTop: "56%"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ReactPlayer,
          {
            url: previewUrl(state.value.stored_filename),
            loop: false,
            light: true,
            controls: true,
            config: {
              forceAudio: false
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
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    component.showHint && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: (_a = component.content) == null ? void 0 : _a.hint })
  ] });
}
export {
  VideoCapture as default
};
//# sourceMappingURL=VideoCapture-CoYOz6Jf.js.map
