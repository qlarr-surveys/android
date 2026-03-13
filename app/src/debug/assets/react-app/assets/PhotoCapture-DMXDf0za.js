import { o as jsxs, n as jsx } from "./index-CBAYZ0Vg.js";
import { u as useSelector, b as useDispatch } from "./redux-C5jBuL_y.js";
import { a as useService, p as previewUrlByFilename, g as getFileFromPath, c as uploadFile, v as valueChange } from "./Android--WWD2PK6.js";
import { x as Box } from "./mui-qMsG-zFb.js";
import "./vendor-C1A_Wzx1.js";
import "./i18n-CpdhL4GU.js";
import "./dnd-DDAM2OKI.js";
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
    const validationMaxSize = ((_b = (_a2 = component.validation) == null ? void 0 : _a2.validation_max_file_size) == null ? void 0 : _b.isActive) && ((_d = (_c = component.validation) == null ? void 0 : _c.validation_max_file_size) == null ? void 0 : _d.max_size) || -1;
    const IMAGE_MAX_SIZE_KB = 10240;
    const maxFileSize = validationMaxSize > 0 ? Math.min(validationMaxSize, IMAGE_MAX_SIZE_KB) : IMAGE_MAX_SIZE_KB;
    if (preview && mode == "offline") {
      getFileFromPath("/dummy_image.png").then((response) => {
        uploadFile(runService, code, preview, response).then((response2) => {
          dispatch(valueChange({
            componentCode: props.component.qualifiedCode,
            value: response2
          }));
        }).catch((err) => {
          console.error(err);
        });
      });
    } else if (window["Android"]) {
      window["Android"].capturePhoto(code, maxFileSize);
      window["onPhotoCaptured" + code] = (value) => {
        dispatch(valueChange({
          componentCode: code,
          value
        }));
      };
    } else {
      console.debug("no android device!!");
    }
  };
  return /* @__PURE__ */ jsxs(Box, { className: styles.container, sx: {
    maxHeight: "400px"
  }, children: [
    !state.value || !state.value.stored_filename ? /* @__PURE__ */ jsx("img", { onClick: onImageClick, src: "/camera.png", style: {
      maxHeight: "200px",
      maxWidth: "100%"
    } }) : /* @__PURE__ */ jsx("img", { onClick: onImageClick, src: previewUrlByFilename(state.value.stored_filename), style: {
      maxHeight: "400px",
      maxWidth: "100%"
    } }),
    /* @__PURE__ */ jsx("br", {}),
    component.showHint && /* @__PURE__ */ jsx("span", { children: (_a = component.content) == null ? void 0 : _a.hint })
  ] });
}
export {
  PhotoCapture as default
};
//# sourceMappingURL=PhotoCapture-DMXDf0za.js.map
