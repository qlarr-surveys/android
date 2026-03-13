import { o as jsxs, n as jsx, L as LoadingDots } from "./index-CBAYZ0Vg.js";
import { r as reactExports, b as React } from "./vendor-C1A_Wzx1.js";
import { a as useService, N as NAMESPACES, h as fileTypesToMimesArray, i as ValidationItem, p as previewUrlByFilename, v as valueChange, s as setDirty, c as uploadFile } from "./Android--WWD2PK6.js";
import { u as useSelector, b as useDispatch } from "./redux-C5jBuL_y.js";
import { u as useTranslation } from "./i18n-CpdhL4GU.js";
import { f as Button, a6 as Link, a7 as styled } from "./mui-qMsG-zFb.js";
import "./dnd-DDAM2OKI.js";
const Input = styled("input")({
  display: "none"
});
function FileUpload(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const runService = useService("run");
  const {
    t
  } = useTranslation(NAMESPACES.RUN);
  let accepted = fileTypesToMimesArray((_b = (_a = props.component.validation) == null ? void 0 : _a.validation_file_types) == null ? void 0 : _b.fileTypes);
  const validationMaxSize = ((_d = (_c = props.component.validation) == null ? void 0 : _c.validation_max_file_size) == null ? void 0 : _d.isActive) && ((_f = (_e = props.component.validation) == null ? void 0 : _e.validation_max_file_size) == null ? void 0 : _f.max_size) || -1;
  const IMAGE_MAX_SIZE_KB = 10240;
  const maxFileSize = validationMaxSize > 0 ? Math.min(validationMaxSize, IMAGE_MAX_SIZE_KB) : IMAGE_MAX_SIZE_KB;
  const state = useSelector((state2) => {
    let questionState = state2.runState.values[props.component.qualifiedCode];
    return questionState == null ? void 0 : questionState.value;
  });
  const preview = useSelector((state2) => {
    return state2.runState.preview;
  });
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = reactExports.useState();
  const [isUploading, setUploading] = reactExports.useState(false);
  const previewAndroid = () => {
    window["Android"].previewFileUpload(state.stored_filename, state.filename);
  };
  const invalidSelectedFile = !isUploading && selectedFile && accepted.length > 0 && !accepted.includes(selectedFile.type);
  const invalidSize = !isUploading && selectedFile && maxFileSize > 0 && selectedFile.size / 1024 > maxFileSize;
  const changeHandler = (event) => {
    var _a2;
    const file = (_a2 = event.target.files) == null ? void 0 : _a2[0];
    if (!file) return;
    dispatch(setDirty(props.component.qualifiedCode));
    setSelectedFile(file);
    const invalidType = accepted.length > 0 && !accepted.includes(file.type);
    const tooBig = maxFileSize > 0 && file.size / 1024 > maxFileSize;
    if (!invalidType && !tooBig) {
      uploadSelectedFile(file);
    }
  };
  const uploadSelectedFile = (file) => {
    if (!file) return;
    setUploading(true);
    uploadFile(runService, props.component.qualifiedCode, preview, file).then((response) => {
      setUploading(false);
      setSelectedFile(void 0);
      dispatch(valueChange({
        componentCode: props.component.qualifiedCode,
        value: response
      }));
    }).catch((err) => {
      setUploading(false);
      console.error(err);
    });
  };
  const resetSelectedFile = () => {
    setSelectedFile(void 0);
  };
  const onButtonClick = (event) => {
    if (window["Android"]) {
      event.preventDefault();
      const code = props.component.qualifiedCode;
      window["Android"].selectFile(code, (accepted == null ? void 0 : accepted.join(",")) || "", maxFileSize || -1);
      window["onFileSelected" + code] = (name, size, type) => {
        const fileLike = {
          name,
          size,
          type
        };
        dispatch(setDirty(code));
        setSelectedFile(fileLike);
        const invalidType = accepted.length > 0 && !accepted.includes(type);
        const tooBig = maxFileSize > 0 && size / 1024 > maxFileSize;
        if (!invalidType && !tooBig) {
          uploadSelectedFile(fileLike);
        }
      };
    }
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("label", { htmlFor: "contained-button-file", children: [
      /* @__PURE__ */ jsx(Input, { id: "contained-button-file", type: "file", accept: accepted ? accepted.join(",") : void 0, onChange: changeHandler }),
      /* @__PURE__ */ jsx(Button, { disabled: isUploading, onClick: onButtonClick, variant: "contained", component: "span", children: t("choose_file") })
    ] }),
    !selectedFile ? "" : /* @__PURE__ */ jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsxs("span", { children: [
        " ",
        selectedFile.name,
        " - ",
        Math.round(selectedFile.size / 1024),
        "K"
      ] }),
      /* @__PURE__ */ jsx(Button, { disabled: isUploading, variant: "text", onClick: resetSelectedFile, children: t("cancel") })
    ] }),
    invalidSize && /* @__PURE__ */ jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(ValidationItem, { name: "validation_max_file_size", validation: {
        ...(_g = props.component.validation) == null ? void 0 : _g.validation_max_file_size,
        max_size: maxFileSize
      } })
    ] }),
    invalidSelectedFile && /* @__PURE__ */ jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(ValidationItem, { name: "validation_file_types", validation: (_h = props.component.validation) == null ? void 0 : _h.validation_file_types })
    ] }),
    isUploading ? /* @__PURE__ */ jsxs("div", { style: {
      textAlign: "center"
    }, children: [
      /* @__PURE__ */ jsx(LoadingDots, {}),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("span", { children: t("uploading") })
    ] }) : !state || !state.stored_filename ? "" : /* @__PURE__ */ jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("br", {}),
      window["Android"] ? /* @__PURE__ */ jsxs(Link, { target: "_blank", onClick: previewAndroid, children: [
        state.filename,
        " - ",
        Math.round(state.size / 1024),
        "K"
      ] }) : /* @__PURE__ */ jsxs(Link, { target: "_blank", href: previewUrlByFilename(state.stored_filename), children: [
        state.filename,
        " - ",
        Math.round(state.size / 1024),
        "K"
      ] }),
      /* @__PURE__ */ jsx(Button, { variant: "text", size: "small", onClick: () => dispatch(valueChange({
        componentCode: props.component.qualifiedCode,
        value: {}
      })), children: t("remove_file", "Remove") })
    ] })
  ] });
}
export {
  FileUpload as default
};
//# sourceMappingURL=FileUpload-C9TSVSPr.js.map
