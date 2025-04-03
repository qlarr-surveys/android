import { f as generateUtilityClasses, g as generateUtilityClass, al as getPath, k as alpha_1, h as capitalize, _ as _extends, r as reactExports, b as _objectWithoutPropertiesLoose, j as jsxRuntimeExports, d as clsx } from "./index-BXKg_X9w.js";
import { f as styled, T as Typography, j as useDefaultProps, D as useIsFocusVisible, b as useForkRef, c as composeClasses } from "./use-service-D_BNczvS.js";
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
export {
  Link as L
};
//# sourceMappingURL=Link-B6OA4b9x.js.map
