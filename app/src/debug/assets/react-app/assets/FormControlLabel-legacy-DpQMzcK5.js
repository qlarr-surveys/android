;
(function () {
  System.register(['./index-legacy-VHGc_nGn.js', './use-service-legacy-uNDfwPef.js'], function (exports, module) {
    'use strict';

    var generateUtilityClasses, generateUtilityClass, capitalize, _extends, reactExports, _objectWithoutPropertiesLoose, jsxRuntimeExports, clsx, styled, useDefaultProps, useFormControl, formControlState, Typography, Stack, composeClasses;
    return {
      setters: [module => {
        generateUtilityClasses = module.f;
        generateUtilityClass = module.g;
        capitalize = module.h;
        _extends = module._;
        reactExports = module.r;
        _objectWithoutPropertiesLoose = module.b;
        jsxRuntimeExports = module.j;
        clsx = module.d;
      }, module => {
        styled = module.f;
        useDefaultProps = module.j;
        useFormControl = module.b3;
        formControlState = module.b4;
        Typography = module.T;
        Stack = module.aL;
        composeClasses = module.c;
      }],
      execute: function execute() {
        function getFormControlLabelUtilityClasses(slot) {
          return generateUtilityClass('MuiFormControlLabel', slot);
        }
        const formControlLabelClasses = generateUtilityClasses('MuiFormControlLabel', ['root', 'labelPlacementStart', 'labelPlacementTop', 'labelPlacementBottom', 'disabled', 'label', 'error', 'required', 'asterisk']);
        const _excluded = ["checked", "className", "componentsProps", "control", "disabled", "disableTypography", "inputRef", "label", "labelPlacement", "name", "onChange", "required", "slotProps", "value"];
        const useUtilityClasses = ownerState => {
          const classes = ownerState.classes,
            disabled = ownerState.disabled,
            labelPlacement = ownerState.labelPlacement,
            error = ownerState.error,
            required = ownerState.required;
          const slots = {
            root: ["root", disabled && "disabled", `labelPlacement${capitalize(labelPlacement)}`, error && "error", required && "required"],
            label: ["label", disabled && "disabled"],
            asterisk: ["asterisk", error && "error"]
          };
          return composeClasses(slots, getFormControlLabelUtilityClasses, classes);
        };
        const FormControlLabelRoot = styled("label", {
          name: "MuiFormControlLabel",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [{
              [`& .${formControlLabelClasses.label}`]: styles.label
            }, styles.root, styles[`labelPlacement${capitalize(ownerState.labelPlacement)}`]];
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
          [`&.${formControlLabelClasses.disabled}`]: {
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
          [`& .${formControlLabelClasses.label}`]: {
            [`&.${formControlLabelClasses.disabled}`]: {
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
          [`&.${formControlLabelClasses.error}`]: {
            color: (theme.vars || theme).palette.error.main
          }
        }));
        const FormControlLabel = exports("F", /* @__PURE__ */reactExports.forwardRef(function FormControlLabel2(inProps, ref) {
          var _ref, _slotProps$typography;
          const props = useDefaultProps({
            props: inProps,
            name: "MuiFormControlLabel"
          });
          const className = props.className,
            _props$componentsProp = props.componentsProps,
            componentsProps = _props$componentsProp === void 0 ? {} : _props$componentsProp,
            control = props.control,
            disabledProp = props.disabled,
            disableTypography = props.disableTypography,
            labelProp = props.label,
            _props$labelPlacement = props.labelPlacement,
            labelPlacement = _props$labelPlacement === void 0 ? "end" : _props$labelPlacement,
            requiredProp = props.required,
            _props$slotProps = props.slotProps,
            slotProps = _props$slotProps === void 0 ? {} : _props$slotProps,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const muiFormControl = useFormControl();
          const disabled = (_ref = disabledProp != null ? disabledProp : control.props.disabled) != null ? _ref : muiFormControl == null ? void 0 : muiFormControl.disabled;
          const required = requiredProp != null ? requiredProp : control.props.required;
          const controlProps = {
            disabled,
            required
          };
          ["checked", "name", "onChange", "value", "inputRef"].forEach(key => {
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
            label = /* @__PURE__ */jsxRuntimeExports.jsx(Typography, _extends({
              component: "span"
            }, typographySlotProps, {
              className: clsx(classes.label, typographySlotProps == null ? void 0 : typographySlotProps.className),
              children: label
            }));
          }
          return /* @__PURE__ */jsxRuntimeExports.jsxs(FormControlLabelRoot, _extends({
            className: clsx(classes.root, className),
            ownerState,
            ref
          }, other, {
            children: [/* @__PURE__ */reactExports.cloneElement(control, controlProps), required ? /* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
              display: "block",
              children: [label, /* @__PURE__ */jsxRuntimeExports.jsxs(AsteriskComponent, {
                ownerState,
                "aria-hidden": true,
                className: classes.asterisk,
                children: [" ", "*"]
              })]
            }) : label]
          }));
        }));
      }
    };
  });
})();
//# sourceMappingURL=FormControlLabel-legacy-DpQMzcK5.js.map
