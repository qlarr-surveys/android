;
(function () {
  System.register(['./index-legacy-JN-cdx_K.js', './Android-legacy-CUP-ssMq.js'], function (exports, module) {
    'use strict';

    var generateUtilityClasses, generateUtilityClass, capitalize, _extends, reactExports, _objectWithoutPropertiesLoose, jsxRuntimeExports, clsx, styled, useDefaultProps, useFormControl, formControlState, composeClasses, rootShouldForwardProp, FormControl, useId, Select, Input, FilledInput, OutlinedInput;
    return {
      setters: [module => {
        generateUtilityClasses = module.q;
        generateUtilityClass = module.F;
        capitalize = module.h;
        _extends = module.y;
        reactExports = module.r;
        _objectWithoutPropertiesLoose = module.w;
        jsxRuntimeExports = module.m;
        clsx = module.E;
      }, module => {
        styled = module.s;
        useDefaultProps = module.a;
        useFormControl = module.g;
        formControlState = module.Z;
        composeClasses = module.e;
        rootShouldForwardProp = module.a3;
        FormControl = module.K;
        useId = module.c;
        Select = module.a4;
        Input = module.a5;
        FilledInput = module.a6;
        OutlinedInput = module.a7;
      }],
      execute: function execute() {
        function getFormHelperTextUtilityClasses(slot) {
          return generateUtilityClass('MuiFormHelperText', slot);
        }
        const formHelperTextClasses = generateUtilityClasses('MuiFormHelperText', ['root', 'error', 'disabled', 'sizeSmall', 'sizeMedium', 'contained', 'focused', 'filled', 'required']);
        var _span;
        const _excluded$3 = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"];
        const useUtilityClasses$3 = ownerState => {
          const classes = ownerState.classes,
            contained = ownerState.contained,
            size = ownerState.size,
            disabled = ownerState.disabled,
            error = ownerState.error,
            filled = ownerState.filled,
            focused = ownerState.focused,
            required = ownerState.required;
          const slots = {
            root: ["root", disabled && "disabled", error && "error", size && `size${capitalize(size)}`, contained && "contained", focused && "focused", filled && "filled", required && "required"]
          };
          return composeClasses(slots, getFormHelperTextUtilityClasses, classes);
        };
        const FormHelperTextRoot = styled("p", {
          name: "MuiFormHelperText",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.root, ownerState.size && styles[`size${capitalize(ownerState.size)}`], ownerState.contained && styles.contained, ownerState.filled && styles.filled];
          }
        })(({
          theme,
          ownerState
        }) => _extends({
          color: (theme.vars || theme).palette.text.secondary
        }, theme.typography.caption, {
          textAlign: "left",
          marginTop: 3,
          marginRight: 0,
          marginBottom: 0,
          marginLeft: 0,
          [`&.${formHelperTextClasses.disabled}`]: {
            color: (theme.vars || theme).palette.text.disabled
          },
          [`&.${formHelperTextClasses.error}`]: {
            color: (theme.vars || theme).palette.error.main
          }
        }, ownerState.size === "small" && {
          marginTop: 4
        }, ownerState.contained && {
          marginLeft: 14,
          marginRight: 14
        }));
        const FormHelperText = /* @__PURE__ */reactExports.forwardRef(function FormHelperText2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiFormHelperText"
          });
          const children = props.children,
            className = props.className,
            _props$component = props.component,
            component = _props$component === void 0 ? "p" : _props$component,
            other = _objectWithoutPropertiesLoose(props, _excluded$3);
          const muiFormControl = useFormControl();
          const fcs = formControlState({
            props,
            muiFormControl,
            states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
          });
          const ownerState = _extends({}, props, {
            component,
            contained: fcs.variant === "filled" || fcs.variant === "outlined",
            variant: fcs.variant,
            size: fcs.size,
            disabled: fcs.disabled,
            error: fcs.error,
            filled: fcs.filled,
            focused: fcs.focused,
            required: fcs.required
          });
          const classes = useUtilityClasses$3(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperTextRoot, _extends({
            as: component,
            ownerState,
            className: clsx(classes.root, className),
            ref
          }, other, {
            children: children === " " ?
            // notranslate needed while Google Translate will not fix zero-width space issue
            _span || (_span = /* @__PURE__ */jsxRuntimeExports.jsx("span", {
              className: "notranslate",
              children: "​"
            })) : children
          }));
        });
        function getFormLabelUtilityClasses(slot) {
          return generateUtilityClass('MuiFormLabel', slot);
        }
        const formLabelClasses = generateUtilityClasses('MuiFormLabel', ['root', 'colorSecondary', 'focused', 'disabled', 'error', 'filled', 'required', 'asterisk']);
        const _excluded$2 = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"];
        const useUtilityClasses$2 = ownerState => {
          const classes = ownerState.classes,
            color = ownerState.color,
            focused = ownerState.focused,
            disabled = ownerState.disabled,
            error = ownerState.error,
            filled = ownerState.filled,
            required = ownerState.required;
          const slots = {
            root: ["root", `color${capitalize(color)}`, disabled && "disabled", error && "error", filled && "filled", focused && "focused", required && "required"],
            asterisk: ["asterisk", error && "error"]
          };
          return composeClasses(slots, getFormLabelUtilityClasses, classes);
        };
        const FormLabelRoot = styled("label", {
          name: "MuiFormLabel",
          slot: "Root",
          overridesResolver: ({
            ownerState
          }, styles) => {
            return _extends({}, styles.root, ownerState.color === "secondary" && styles.colorSecondary, ownerState.filled && styles.filled);
          }
        })(({
          theme,
          ownerState
        }) => _extends({
          color: (theme.vars || theme).palette.text.secondary
        }, theme.typography.body1, {
          lineHeight: "1.4375em",
          padding: 0,
          position: "relative",
          [`&.${formLabelClasses.focused}`]: {
            color: (theme.vars || theme).palette[ownerState.color].main
          },
          [`&.${formLabelClasses.disabled}`]: {
            color: (theme.vars || theme).palette.text.disabled
          },
          [`&.${formLabelClasses.error}`]: {
            color: (theme.vars || theme).palette.error.main
          }
        }));
        const AsteriskComponent = styled("span", {
          name: "MuiFormLabel",
          slot: "Asterisk",
          overridesResolver: (props, styles) => styles.asterisk
        })(({
          theme
        }) => ({
          [`&.${formLabelClasses.error}`]: {
            color: (theme.vars || theme).palette.error.main
          }
        }));
        const FormLabel = /* @__PURE__ */reactExports.forwardRef(function FormLabel2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiFormLabel"
          });
          const children = props.children,
            className = props.className,
            _props$component2 = props.component,
            component = _props$component2 === void 0 ? "label" : _props$component2,
            other = _objectWithoutPropertiesLoose(props, _excluded$2);
          const muiFormControl = useFormControl();
          const fcs = formControlState({
            props,
            muiFormControl,
            states: ["color", "required", "focused", "disabled", "error", "filled"]
          });
          const ownerState = _extends({}, props, {
            color: fcs.color || "primary",
            component,
            disabled: fcs.disabled,
            error: fcs.error,
            filled: fcs.filled,
            focused: fcs.focused,
            required: fcs.required
          });
          const classes = useUtilityClasses$2(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(FormLabelRoot, _extends({
            as: component,
            ownerState,
            className: clsx(classes.root, className),
            ref
          }, other, {
            children: [children, fcs.required && /* @__PURE__ */jsxRuntimeExports.jsxs(AsteriskComponent, {
              ownerState,
              "aria-hidden": true,
              className: classes.asterisk,
              children: [" ", "*"]
            })]
          }));
        });
        function getInputLabelUtilityClasses(slot) {
          return generateUtilityClass('MuiInputLabel', slot);
        }
        generateUtilityClasses('MuiInputLabel', ['root', 'focused', 'disabled', 'error', 'required', 'asterisk', 'formControl', 'sizeSmall', 'shrink', 'animated', 'standard', 'filled', 'outlined']);
        const _excluded$1 = ["disableAnimation", "margin", "shrink", "variant", "className"];
        const useUtilityClasses$1 = ownerState => {
          const classes = ownerState.classes,
            formControl = ownerState.formControl,
            size = ownerState.size,
            shrink = ownerState.shrink,
            disableAnimation = ownerState.disableAnimation,
            variant = ownerState.variant,
            required = ownerState.required;
          const slots = {
            root: ["root", formControl && "formControl", !disableAnimation && "animated", shrink && "shrink", size && size !== "normal" && `size${capitalize(size)}`, variant],
            asterisk: [required && "asterisk"]
          };
          const composedClasses = composeClasses(slots, getInputLabelUtilityClasses, classes);
          return _extends({}, classes, composedClasses);
        };
        const InputLabelRoot = styled(FormLabel, {
          shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === "classes",
          name: "MuiInputLabel",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [{
              [`& .${formLabelClasses.asterisk}`]: styles.asterisk
            }, styles.root, ownerState.formControl && styles.formControl, ownerState.size === "small" && styles.sizeSmall, ownerState.shrink && styles.shrink, !ownerState.disableAnimation && styles.animated, ownerState.focused && styles.focused, styles[ownerState.variant]];
          }
        })(({
          theme,
          ownerState
        }) => _extends({
          display: "block",
          transformOrigin: "top left",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: "100%"
        }, ownerState.formControl && {
          position: "absolute",
          left: 0,
          top: 0,
          // slight alteration to spec spacing to match visual spec result
          transform: "translate(0, 20px) scale(1)"
        }, ownerState.size === "small" && {
          // Compensation for the `Input.inputSizeSmall` style.
          transform: "translate(0, 17px) scale(1)"
        }, ownerState.shrink && {
          transform: "translate(0, -1.5px) scale(0.75)",
          transformOrigin: "top left",
          maxWidth: "133%"
        }, !ownerState.disableAnimation && {
          transition: theme.transitions.create(["color", "transform", "max-width"], {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeOut
          })
        }, ownerState.variant === "filled" && _extends({
          // Chrome's autofill feature gives the input field a yellow background.
          // Since the input field is behind the label in the HTML tree,
          // the input field is drawn last and hides the label with an opaque background color.
          // zIndex: 1 will raise the label above opaque background-colors of input.
          zIndex: 1,
          pointerEvents: "none",
          transform: "translate(12px, 16px) scale(1)",
          maxWidth: "calc(100% - 24px)"
        }, ownerState.size === "small" && {
          transform: "translate(12px, 13px) scale(1)"
        }, ownerState.shrink && _extends({
          userSelect: "none",
          pointerEvents: "auto",
          transform: "translate(12px, 7px) scale(0.75)",
          maxWidth: "calc(133% - 24px)"
        }, ownerState.size === "small" && {
          transform: "translate(12px, 4px) scale(0.75)"
        })), ownerState.variant === "outlined" && _extends({
          // see comment above on filled.zIndex
          zIndex: 1,
          pointerEvents: "none",
          transform: "translate(14px, 16px) scale(1)",
          maxWidth: "calc(100% - 24px)"
        }, ownerState.size === "small" && {
          transform: "translate(14px, 9px) scale(1)"
        }, ownerState.shrink && {
          userSelect: "none",
          pointerEvents: "auto",
          // Theoretically, we should have (8+5)*2/0.75 = 34px
          // but it feels a better when it bleeds a bit on the left, so 32px.
          maxWidth: "calc(133% - 32px)",
          transform: "translate(14px, -9px) scale(0.75)"
        })));
        const InputLabel = /* @__PURE__ */reactExports.forwardRef(function InputLabel2(inProps, ref) {
          const props = useDefaultProps({
            name: "MuiInputLabel",
            props: inProps
          });
          const _props$disableAnimati = props.disableAnimation,
            disableAnimation = _props$disableAnimati === void 0 ? false : _props$disableAnimati,
            shrinkProp = props.shrink,
            className = props.className,
            other = _objectWithoutPropertiesLoose(props, _excluded$1);
          const muiFormControl = useFormControl();
          let shrink = shrinkProp;
          if (typeof shrink === "undefined" && muiFormControl) {
            shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
          }
          const fcs = formControlState({
            props,
            muiFormControl,
            states: ["size", "variant", "required", "focused"]
          });
          const ownerState = _extends({}, props, {
            disableAnimation,
            formControl: muiFormControl,
            shrink,
            size: fcs.size,
            variant: fcs.variant,
            required: fcs.required,
            focused: fcs.focused
          });
          const classes = useUtilityClasses$1(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(InputLabelRoot, _extends({
            "data-shrink": shrink,
            ownerState,
            ref,
            className: clsx(classes.root, className)
          }, other, {
            classes
          }));
        });
        function getTextFieldUtilityClass(slot) {
          return generateUtilityClass('MuiTextField', slot);
        }
        generateUtilityClasses('MuiTextField', ['root']);
        const _excluded = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"];
        const variantComponent = {
          standard: Input,
          filled: FilledInput,
          outlined: OutlinedInput
        };
        const useUtilityClasses = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ["root"]
          };
          return composeClasses(slots, getTextFieldUtilityClass, classes);
        };
        const TextFieldRoot = styled(FormControl, {
          name: "MuiTextField",
          slot: "Root",
          overridesResolver: (props, styles) => styles.root
        })({});
        const TextField = exports("T", /* @__PURE__ */reactExports.forwardRef(function TextField2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiTextField"
          });
          const autoComplete = props.autoComplete,
            _props$autoFocus = props.autoFocus,
            autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
            children = props.children,
            className = props.className,
            _props$color = props.color,
            color = _props$color === void 0 ? "primary" : _props$color,
            defaultValue = props.defaultValue,
            _props$disabled = props.disabled,
            disabled = _props$disabled === void 0 ? false : _props$disabled,
            _props$error = props.error,
            error = _props$error === void 0 ? false : _props$error,
            FormHelperTextProps = props.FormHelperTextProps,
            _props$fullWidth = props.fullWidth,
            fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
            helperText = props.helperText,
            idOverride = props.id,
            InputLabelProps = props.InputLabelProps,
            inputProps = props.inputProps,
            InputProps = props.InputProps,
            inputRef = props.inputRef,
            label = props.label,
            maxRows = props.maxRows,
            minRows = props.minRows,
            _props$multiline = props.multiline,
            multiline = _props$multiline === void 0 ? false : _props$multiline,
            name = props.name,
            onBlur = props.onBlur,
            onChange = props.onChange,
            onFocus = props.onFocus,
            placeholder = props.placeholder,
            _props$required = props.required,
            required = _props$required === void 0 ? false : _props$required,
            rows = props.rows,
            _props$select = props.select,
            select = _props$select === void 0 ? false : _props$select,
            SelectProps = props.SelectProps,
            type = props.type,
            value = props.value,
            _props$variant = props.variant,
            variant = _props$variant === void 0 ? "outlined" : _props$variant,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const ownerState = _extends({}, props, {
            autoFocus,
            color,
            disabled,
            error,
            fullWidth,
            multiline,
            required,
            select,
            variant
          });
          const classes = useUtilityClasses(ownerState);
          const InputMore = {};
          if (variant === "outlined") {
            if (InputLabelProps && typeof InputLabelProps.shrink !== "undefined") {
              InputMore.notched = InputLabelProps.shrink;
            }
            InputMore.label = label;
          }
          if (select) {
            if (!SelectProps || !SelectProps.native) {
              InputMore.id = void 0;
            }
            InputMore["aria-describedby"] = void 0;
          }
          const id = useId(idOverride);
          const helperTextId = helperText && id ? `${id}-helper-text` : void 0;
          const inputLabelId = label && id ? `${id}-label` : void 0;
          const InputComponent = variantComponent[variant];
          const InputElement = /* @__PURE__ */jsxRuntimeExports.jsx(InputComponent, _extends({
            "aria-describedby": helperTextId,
            autoComplete,
            autoFocus,
            defaultValue,
            fullWidth,
            multiline,
            name,
            rows,
            maxRows,
            minRows,
            type,
            value,
            id,
            inputRef,
            onBlur,
            onChange,
            onFocus,
            placeholder,
            inputProps
          }, InputMore, InputProps));
          return /* @__PURE__ */jsxRuntimeExports.jsxs(TextFieldRoot, _extends({
            className: clsx(classes.root, className),
            disabled,
            error,
            fullWidth,
            ref,
            required,
            color,
            variant,
            ownerState
          }, other, {
            children: [label != null && label !== "" && /* @__PURE__ */jsxRuntimeExports.jsx(InputLabel, _extends({
              htmlFor: id,
              id: inputLabelId
            }, InputLabelProps, {
              children: label
            })), select ? /* @__PURE__ */jsxRuntimeExports.jsx(Select, _extends({
              "aria-describedby": helperTextId,
              id,
              labelId: inputLabelId,
              value,
              input: InputElement
            }, SelectProps, {
              children
            })) : InputElement, helperText && /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, _extends({
              id: helperTextId
            }, FormHelperTextProps, {
              children: helperText
            }))]
          }));
        }));
      }
    };
  });
})();
//# sourceMappingURL=TextField-legacy-IUbRPyh7.js.map
