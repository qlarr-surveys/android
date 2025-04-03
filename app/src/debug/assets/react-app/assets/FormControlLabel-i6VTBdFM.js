import { f as generateUtilityClasses, g as generateUtilityClass, h as capitalize, _ as _extends, r as reactExports, b as _objectWithoutPropertiesLoose, j as jsxRuntimeExports, d as clsx } from "./index-BXKg_X9w.js";
import { f as styled, j as useDefaultProps, b3 as useFormControl, b4 as formControlState, T as Typography, aK as Stack, c as composeClasses } from "./use-service-D_BNczvS.js";
function getFormControlLabelUtilityClasses(slot) {
  return generateUtilityClass("MuiFormControlLabel", slot);
}
const formControlLabelClasses = generateUtilityClasses("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]);
const _excluded = ["checked", "className", "componentsProps", "control", "disabled", "disableTypography", "inputRef", "label", "labelPlacement", "name", "onChange", "required", "slotProps", "value"];
const useUtilityClasses = (ownerState) => {
  const {
    classes,
    disabled,
    labelPlacement,
    error,
    required
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", "labelPlacement".concat(capitalize(labelPlacement)), error && "error", required && "required"],
    label: ["label", disabled && "disabled"],
    asterisk: ["asterisk", error && "error"]
  };
  return composeClasses(slots, getFormControlLabelUtilityClasses, classes);
};
const FormControlLabelRoot = styled("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      ["& .".concat(formControlLabelClasses.label)]: styles.label
    }, styles.root, styles["labelPlacement".concat(capitalize(ownerState.labelPlacement))]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
  // For correct alignment with the text.
  verticalAlign: "middle",
  WebkitTapHighlightColor: "transparent",
  marginLeft: -11,
  marginRight: 16,
  // used for row presentation of radio/checkbox
  ["&.".concat(formControlLabelClasses.disabled)]: {
    cursor: "default"
  }
}, ownerState.labelPlacement === "start" && {
  flexDirection: "row-reverse",
  marginLeft: 16,
  // used for row presentation of radio/checkbox
  marginRight: -11
}, ownerState.labelPlacement === "top" && {
  flexDirection: "column-reverse",
  marginLeft: 16
}, ownerState.labelPlacement === "bottom" && {
  flexDirection: "column",
  marginLeft: 16
}, {
  ["& .".concat(formControlLabelClasses.label)]: {
    ["&.".concat(formControlLabelClasses.disabled)]: {
      color: (theme.vars || theme).palette.text.disabled
    }
  }
}));
const AsteriskComponent = styled("span", {
  name: "MuiFormControlLabel",
  slot: "Asterisk",
  overridesResolver: (props, styles) => styles.asterisk
})(({
  theme
}) => ({
  ["&.".concat(formControlLabelClasses.error)]: {
    color: (theme.vars || theme).palette.error.main
  }
}));
const FormControlLabel = /* @__PURE__ */ reactExports.forwardRef(function FormControlLabel2(inProps, ref) {
  var _ref, _slotProps$typography;
  const props = useDefaultProps({
    props: inProps,
    name: "MuiFormControlLabel"
  });
  const {
    className,
    componentsProps = {},
    control,
    disabled: disabledProp,
    disableTypography,
    label: labelProp,
    labelPlacement = "end",
    required: requiredProp,
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const muiFormControl = useFormControl();
  const disabled = (_ref = disabledProp != null ? disabledProp : control.props.disabled) != null ? _ref : muiFormControl == null ? void 0 : muiFormControl.disabled;
  const required = requiredProp != null ? requiredProp : control.props.required;
  const controlProps = {
    disabled,
    required
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((key) => {
    if (typeof control.props[key] === "undefined" && typeof props[key] !== "undefined") {
      controlProps[key] = props[key];
    }
  });
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["error"]
  });
  const ownerState = _extends({}, props, {
    disabled,
    labelPlacement,
    required,
    error: fcs.error
  });
  const classes = useUtilityClasses(ownerState);
  const typographySlotProps = (_slotProps$typography = slotProps.typography) != null ? _slotProps$typography : componentsProps.typography;
  let label = labelProp;
  if (label != null && label.type !== Typography && !disableTypography) {
    label = /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, _extends({
      component: "span"
    }, typographySlotProps, {
      className: clsx(classes.label, typographySlotProps == null ? void 0 : typographySlotProps.className),
      children: label
    }));
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControlLabelRoot, _extends({
    className: clsx(classes.root, className),
    ownerState,
    ref
  }, other, {
    children: [/* @__PURE__ */ reactExports.cloneElement(control, controlProps), required ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, {
      display: "block",
      children: [label, /* @__PURE__ */ jsxRuntimeExports.jsxs(AsteriskComponent, {
        ownerState,
        "aria-hidden": true,
        className: classes.asterisk,
        children: [" ", "*"]
      })]
    }) : label]
  }));
});
export {
  FormControlLabel as F
};
//# sourceMappingURL=FormControlLabel-i6VTBdFM.js.map
