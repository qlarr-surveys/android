import { q as generateUtilityClasses, F as generateUtilityClass, ab as getPath, Z as alpha_1, h as capitalize, y as _extends, r as reactExports, w as _objectWithoutPropertiesLoose, m as jsxRuntimeExports, E as clsx, W as React, a6 as LoadingDots } from "./index-D6pxCKdU.js";
import { s as styled, i as Typography, a as useDefaultProps, al as useIsFocusVisible, x as useForkRef, e as composeClasses, Q as useService, b as useTheme, a2 as useTranslation, am as fileTypesToMimesArray, D as useSelector, H as useDispatch, y as Button, an as ValidationItem, S as previewUrl, L as setDirty, Y as uploadFile, J as valueChange } from "./Android-yc1ng5Rp.js";
function getLinkUtilityClass(slot) {
  return generateUtilityClass("MuiLink", slot);
}
const linkClasses = generateUtilityClasses("MuiLink", ["root", "underlineNone", "underlineHover", "underlineAlways", "button", "focusVisible"]);
const colorTransformations = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
};
const transformDeprecatedColors = (color) => {
  return colorTransformations[color] || color;
};
const getTextDecoration = ({
  theme,
  ownerState
}) => {
  const transformedColor = transformDeprecatedColors(ownerState.color);
  const color = getPath(theme, "palette.".concat(transformedColor), false) || ownerState.color;
  const channelColor = getPath(theme, "palette.".concat(transformedColor, "Channel"));
  if ("vars" in theme && channelColor) {
    return "rgba(".concat(channelColor, " / 0.4)");
  }
  return alpha_1(color, 0.4);
};
const _excluded = ["className", "color", "component", "onBlur", "onFocus", "TypographyClasses", "underline", "variant", "sx"];
const useUtilityClasses = (ownerState) => {
  const {
    classes,
    component,
    focusVisible,
    underline
  } = ownerState;
  const slots = {
    root: ["root", "underline".concat(capitalize(underline)), component === "button" && "button", focusVisible && "focusVisible"]
  };
  return composeClasses(slots, getLinkUtilityClass, classes);
};
const LinkRoot = styled(Typography, {
  name: "MuiLink",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles["underline".concat(capitalize(ownerState.underline))], ownerState.component === "button" && styles.button];
  }
})(({
  theme,
  ownerState
}) => {
  return _extends({}, ownerState.underline === "none" && {
    textDecoration: "none"
  }, ownerState.underline === "hover" && {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  }, ownerState.underline === "always" && _extends({
    textDecoration: "underline"
  }, ownerState.color !== "inherit" && {
    textDecorationColor: getTextDecoration({
      theme,
      ownerState
    })
  }, {
    "&:hover": {
      textDecorationColor: "inherit"
    }
  }), ownerState.component === "button" && {
    position: "relative",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: 0,
    padding: 0,
    // Remove the padding in Firefox
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    // Reset
    WebkitAppearance: "none",
    // Reset
    "&::-moz-focus-inner": {
      borderStyle: "none"
      // Remove Firefox dotted outline.
    },
    ["&.".concat(linkClasses.focusVisible)]: {
      outline: "auto"
    }
  });
});
const Link = /* @__PURE__ */ reactExports.forwardRef(function Link2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiLink"
  });
  const {
    className,
    color = "primary",
    component = "a",
    onBlur,
    onFocus,
    TypographyClasses,
    underline = "always",
    variant = "inherit",
    sx
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = reactExports.useState(false);
  const handlerRef = useForkRef(ref, focusVisibleRef);
  const handleBlur = (event) => {
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }
    if (onBlur) {
      onBlur(event);
    }
  };
  const handleFocus = (event) => {
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);
    }
    if (onFocus) {
      onFocus(event);
    }
  };
  const ownerState = _extends({}, props, {
    color,
    component,
    focusVisible,
    underline,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LinkRoot, _extends({
    color,
    className: clsx(classes.root, className),
    classes: TypographyClasses,
    component,
    onBlur: handleBlur,
    onFocus: handleFocus,
    ref: handlerRef,
    ownerState,
    variant,
    sx: [...!Object.keys(colorTransformations).includes(color) ? [{
      color
    }] : [], ...Array.isArray(sx) ? sx : [sx]]
  }, other));
});
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
//# sourceMappingURL=FileUpload-gFT3loKg.js.map
