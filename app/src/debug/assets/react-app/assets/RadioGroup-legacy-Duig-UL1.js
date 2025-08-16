;
(function () {
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  System.register(['./index-legacy-BE0djssm.js', './Android-legacy-DcRmsPsH.js', './RadioGroupContext-legacy-CxgSltBY.js'], function (exports, module) {
    'use strict';

    var generateUtilityClasses, generateUtilityClass, reactExports, _objectWithoutPropertiesLoose, _extends, jsxRuntimeExports, clsx, useDefaultProps, useFormControl, formControlState, Typography, styled, Stack, capitalize, composeClasses, useControlled, useForkRef, useId, RadioGroupContext;
    return {
      setters: [module => {
        generateUtilityClasses = module.V;
        generateUtilityClass = module.U;
        reactExports = module.r;
        _objectWithoutPropertiesLoose = module.w;
        _extends = module.y;
        jsxRuntimeExports = module.m;
        clsx = module.D;
      }, module => {
        useDefaultProps = module.a;
        useFormControl = module.h;
        formControlState = module.a6;
        Typography = module.j;
        styled = module.s;
        Stack = module.a7;
        capitalize = module.e;
        composeClasses = module.g;
        useControlled = module.w;
        useForkRef = module.y;
        useId = module.c;
      }, module => {
        RadioGroupContext = module.R;
      }],
      execute: function execute() {
        function getFormControlLabelUtilityClasses(slot) {
          return generateUtilityClass('MuiFormControlLabel', slot);
        }
        const formControlLabelClasses = generateUtilityClasses('MuiFormControlLabel', ['root', 'labelPlacementStart', 'labelPlacementTop', 'labelPlacementBottom', 'disabled', 'label', 'error', 'required', 'asterisk']);
        const _excluded$2 = ["checked", "className", "componentsProps", "control", "disabled", "disableTypography", "inputRef", "label", "labelPlacement", "name", "onChange", "required", "slotProps", "value"];
        const useUtilityClasses$2 = ownerState => {
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
            other = _objectWithoutPropertiesLoose(props, _excluded$2);
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
          const classes = useUtilityClasses$2(ownerState);
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
        function getFormGroupUtilityClass(slot) {
          return generateUtilityClass('MuiFormGroup', slot);
        }
        generateUtilityClasses('MuiFormGroup', ['root', 'row', 'error']);
        const _excluded$1 = ["className", "row"];
        const useUtilityClasses$1 = ownerState => {
          const classes = ownerState.classes,
            row = ownerState.row,
            error = ownerState.error;
          const slots = {
            root: ["root", row && "row", error && "error"]
          };
          return composeClasses(slots, getFormGroupUtilityClass, classes);
        };
        const FormGroupRoot = styled("div", {
          name: "MuiFormGroup",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.root, ownerState.row && styles.row];
          }
        })(({
          ownerState
        }) => _extends({
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap"
        }, ownerState.row && {
          flexDirection: "row"
        }));
        const FormGroup = /* @__PURE__ */reactExports.forwardRef(function FormGroup2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiFormGroup"
          });
          const className = props.className,
            _props$row = props.row,
            row = _props$row === void 0 ? false : _props$row,
            other = _objectWithoutPropertiesLoose(props, _excluded$1);
          const muiFormControl = useFormControl();
          const fcs = formControlState({
            props,
            muiFormControl,
            states: ["error"]
          });
          const ownerState = _extends({}, props, {
            row,
            error: fcs.error
          });
          const classes = useUtilityClasses$1(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(FormGroupRoot, _extends({
            className: clsx(classes.root, className),
            ownerState,
            ref
          }, other));
        });
        function getRadioGroupUtilityClass(slot) {
          return generateUtilityClass('MuiRadioGroup', slot);
        }
        generateUtilityClasses('MuiRadioGroup', ['root', 'row', 'error']);
        const _excluded = ["actions", "children", "className", "defaultValue", "name", "onChange", "value"];
        const useUtilityClasses = props => {
          const classes = props.classes,
            row = props.row,
            error = props.error;
          const slots = {
            root: ["root", row && "row", error && "error"]
          };
          return composeClasses(slots, getRadioGroupUtilityClass, classes);
        };
        const RadioGroup = exports("R", /* @__PURE__ */reactExports.forwardRef(function RadioGroup2(props, ref) {
          const actions = props.actions,
            children = props.children,
            className = props.className,
            defaultValue = props.defaultValue,
            nameProp = props.name,
            onChange = props.onChange,
            valueProp = props.value,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const rootRef = reactExports.useRef(null);
          const classes = useUtilityClasses(props);
          const _useControlled = useControlled({
              controlled: valueProp,
              default: defaultValue,
              name: "RadioGroup"
            }),
            _useControlled2 = _slicedToArray(_useControlled, 2),
            value = _useControlled2[0],
            setValueState = _useControlled2[1];
          reactExports.useImperativeHandle(actions, () => ({
            focus: () => {
              let input = rootRef.current.querySelector("input:not(:disabled):checked");
              if (!input) {
                input = rootRef.current.querySelector("input:not(:disabled)");
              }
              if (input) {
                input.focus();
              }
            }
          }), []);
          const handleRef = useForkRef(ref, rootRef);
          const name = useId(nameProp);
          const contextValue = reactExports.useMemo(() => ({
            name,
            onChange(event) {
              setValueState(event.target.value);
              if (onChange) {
                onChange(event, event.target.value);
              }
            },
            value
          }), [name, onChange, setValueState, value]);
          return /* @__PURE__ */jsxRuntimeExports.jsx(RadioGroupContext.Provider, {
            value: contextValue,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(FormGroup, _extends({
              role: "radiogroup",
              ref: handleRef,
              className: clsx(classes.root, className)
            }, other, {
              children
            }))
          });
        }));
      }
    };
  });
})();
//# sourceMappingURL=RadioGroup-legacy-Duig-UL1.js.map
