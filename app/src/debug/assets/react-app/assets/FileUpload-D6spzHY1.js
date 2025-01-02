import { r as reactExports, j as jsxRuntimeExports, R as React, A as LoadingDots } from "./index-X8N9IRh7.js";
import { f as styled, R as useService, w as useTheme, M as useTranslation, bb as fileTypesToMimesArray, H as useSelector, U as useDispatch, aD as Button, b0 as previewUrl, a_ as setDirty, b2 as uploadFile, aS as valueChange } from "./use-service-CuBoVPEx.js";
import { a as ValidationItem } from "./index-BnRFVA_C.js";
import { L as Link } from "./Link-B_rm-8WK.js";
import "./isTouchDevice-CpP8rLyq.js";
import "./common-B0QmLEBc.js";
import "./Close-DY1WrJHS.js";
import "./Card-CH4VnLZu.js";
import "./Toolbar-BRqDBp3L.js";
const Input = styled("input")({
  display: "none"
});
function FileUpload(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const runService = useService("run");
  const theme = useTheme();
  const { t } = useTranslation("run");
  let accepted = fileTypesToMimesArray(
    (_b = (_a = props.component.validation) == null ? void 0 : _a.validation_file_types) == null ? void 0 : _b.fileTypes
  );
  const maxFileSize = ((_d = (_c = props.component.validation) == null ? void 0 : _c.validation_max_file_size) == null ? void 0 : _d.isActive) && ((_f = (_e = props.component.validation) == null ? void 0 : _e.validation_max_file_size) == null ? void 0 : _f.max_size) || -1;
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
    dispatch(setDirty(props.component.qualifiedCode));
    setSelectedFile(event.target.files[0]);
  };
  const uploadSelectedFile = () => {
    setUploading(true);
    uploadFile(runService, props.component.qualifiedCode, preview, selectedFile).then((response) => {
      setUploading(false);
      resetSelectedFile();
      dispatch(
        valueChange({
          componentCode: props.component.qualifiedCode,
          value: response
        })
      );
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
      const code = props.component.qualifiedCode;
      event.preventDefault();
      window["Android"].selectFile(
        code,
        (accepted == null ? void 0 : accepted.join(",")) || "",
        maxFileSize || -1
      );
      window["onFileSelected" + code] = (name, size, type) => {
        dispatch(setDirty(props.component.qualifiedCode));
        setSelectedFile({ name, size, type });
      };
    }
  };
  let shouldUpload = selectedFile && !invalidSelectedFile && !invalidSize;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "contained-button-file", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          id: "contained-button-file",
          type: "file",
          accept: accepted ? accepted.join(",") : void 0,
          onChange: changeHandler
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          disabled: isUploading,
          onClick: onButtonClick,
          variant: "contained",
          component: "span",
          children: t("choose_file")
        }
      )
    ] }),
    !selectedFile ? "" : /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        " ",
        selectedFile.name,
        " - ",
        Math.round(selectedFile.size / 1024),
        "K"
      ] }),
      shouldUpload ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          disabled: isUploading,
          variant: "text",
          onClick: uploadSelectedFile,
          children: t("upload")
        }
      ) : "",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          disabled: isUploading,
          sx: {
            fontFamily: theme.textStyles.text.font,
            fontSize: theme.textStyles.text.size
          },
          variant: "text",
          onClick: resetSelectedFile,
          children: t("cancel")
        }
      )
    ] }),
    invalidSize && /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ValidationItem,
        {
          name: "validation_max_file_size",
          validation: (_g = props.component.validation) == null ? void 0 : _g.validation_max_file_size
        }
      )
    ] }),
    invalidSelectedFile && /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ValidationItem,
        {
          name: "validation_file_types",
          validation: (_h = props.component.validation) == null ? void 0 : _h.validation_file_types
        }
      )
    ] }),
    isUploading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingDots, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("uploading") })
    ] }) : !state || !state.stored_filename ? "" : /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      window["Android"] ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { target: "_blank", onClick: previewAndroid, children: [
        state.filename,
        " - ",
        Math.round(state.size / 1024),
        "K"
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { target: "_blank", href: previewUrl(state.stored_filename), children: [
        state.filename,
        " - ",
        Math.round(state.size / 1024),
        "K"
      ] })
    ] })
  ] });
}
export {
  FileUpload as default
};
//# sourceMappingURL=FileUpload-D6spzHY1.js.map
