import { m as jsxRuntimeExports } from "./index-BUfjKSTn.js";
import { Q as useService, D as useSelector, H as useDispatch, U as Box, S as previewUrl, X as getFileFromPath, Y as uploadFile, J as valueChange } from "./Android-BsQgcnl5.js";
const container = "_container_bvkr6_2";
const styles = {
  container
};
function PhotoCapture(props) {
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
      getFileFromPath("/dummy_image.png").then((response) => {
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
      window["Android"].capturePhoto(code, maxFileSize);
      window["onPhotoCaptured" + code] = (value) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.container, sx: { maxHeight: "400px" }, children: [
    !state.value || !state.value.stored_filename ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        onClick: onImageClick,
        src: "/camera.png",
        style: {
          maxHeight: "200px",
          maxWidth: "100%"
        }
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        onClick: onImageClick,
        src: previewUrl(state.value.stored_filename),
        style: {
          maxHeight: "400px",
          maxWidth: "100%"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    component.showHint && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: (_a = component.content) == null ? void 0 : _a.hint })
  ] });
}
export {
  PhotoCapture as default
};
//# sourceMappingURL=PhotoCapture-D9NFiT07.js.map
