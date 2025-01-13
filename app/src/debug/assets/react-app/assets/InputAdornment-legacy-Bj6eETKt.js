;
(function () {
  System.register(['./index-legacy-DHZhPI7F.js', './use-service-legacy-Dvd5TXWp.js'], function (exports, module) {
    'use strict';

    var generateUtilityClasses, generateUtilityClass, _extends, reactExports, _objectWithoutPropertiesLoose, jsxRuntimeExports, clsx, capitalize, styled, useDefaultProps, useFormControl, FormControlContext, Typography, composeClasses;
    return {
      setters: [module => {
        generateUtilityClasses = module.f;
        generateUtilityClass = module.g;
        _extends = module._;
        reactExports = module.r;
        _objectWithoutPropertiesLoose = module.b;
        jsxRuntimeExports = module.j;
        clsx = module.d;
        capitalize = module.h;
      }, module => {
        styled = module.f;
        useDefaultProps = module.j;
        useFormControl = module.b4;
        FormControlContext = module.bJ;
        Typography = module.T;
        composeClasses = module.c;
      }],
      execute: function execute() {
        function getInputAdornmentUtilityClass(slot) {
          return generateUtilityClass('MuiInputAdornment', slot);
        }
        const inputAdornmentClasses = generateUtilityClasses('MuiInputAdornment', ['root', 'filled', 'standard', 'outlined', 'positionStart', 'positionEnd', 'disablePointerEvents', 'hiddenLabel', 'sizeSmall']);
        var _span;
        const _excluded = ["children", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"];
        const overridesResolver = (props, styles) => {
          const ownerState = props.ownerState;
          return [styles.root, styles[`position${capitalize(ownerState.position)}`], ownerState.disablePointerEvents === true && styles.disablePointerEvents, styles[ownerState.variant]];
        };
        const useUtilityClasses = ownerState => {
          const classes = ownerState.classes,
            disablePointerEvents = ownerState.disablePointerEvents,
            hiddenLabel = ownerState.hiddenLabel,
            position = ownerState.position,
            size = ownerState.size,
            variant = ownerState.variant;
          const slots = {
            root: ["root", disablePointerEvents && "disablePointerEvents", position && `position${capitalize(position)}`, variant, hiddenLabel && "hiddenLabel", size && `size${capitalize(size)}`]
          };
          return composeClasses(slots, getInputAdornmentUtilityClass, classes);
        };
        const InputAdornmentRoot = styled("div", {
          name: "MuiInputAdornment",
          slot: "Root",
          overridesResolver
        })(({
          theme,
          ownerState
        }) => _extends({
          display: "flex",
          height: "0.01em",
          // Fix IE11 flexbox alignment. To remove at some point.
          maxHeight: "2em",
          alignItems: "center",
          whiteSpace: "nowrap",
          color: (theme.vars || theme).palette.action.active
        }, ownerState.variant === "filled" && {
          // Styles applied to the root element if `variant="filled"`.
          [`&.${inputAdornmentClasses.positionStart}&:not(.${inputAdornmentClasses.hiddenLabel})`]: {
            marginTop: 16
          }
        }, ownerState.position === "start" && {
          // Styles applied to the root element if `position="start"`.
          marginRight: 8
        }, ownerState.position === "end" && {
          // Styles applied to the root element if `position="end"`.
          marginLeft: 8
        }, ownerState.disablePointerEvents === true && {
          // Styles applied to the root element if `disablePointerEvents={true}`.
          pointerEvents: "none"
        }));
        const InputAdornment = exports("I", /* @__PURE__ */reactExports.forwardRef(function InputAdornment2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiInputAdornment"
          });
          const children = props.children,
            className = props.className,
            _props$component = props.component,
            component = _props$component === void 0 ? "div" : _props$component,
            _props$disablePointer = props.disablePointerEvents,
            disablePointerEvents = _props$disablePointer === void 0 ? false : _props$disablePointer,
            _props$disableTypogra = props.disableTypography,
            disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
            position = props.position,
            variantProp = props.variant,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const muiFormControl = useFormControl() || {};
          let variant = variantProp;
          if (variantProp && muiFormControl.variant) ;
          if (muiFormControl && !variant) {
            variant = muiFormControl.variant;
          }
          const ownerState = _extends({}, props, {
            hiddenLabel: muiFormControl.hiddenLabel,
            size: muiFormControl.size,
            disablePointerEvents,
            position,
            variant
          });
          const classes = useUtilityClasses(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(FormControlContext.Provider, {
            value: null,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(InputAdornmentRoot, _extends({
              as: component,
              ownerState,
              className: clsx(classes.root, className),
              ref
            }, other, {
              children: typeof children === "string" && !disableTypography ? /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                color: "text.secondary",
                children
              }) : /* @__PURE__ */jsxRuntimeExports.jsxs(reactExports.Fragment, {
                children: [position === "start" ? (/* notranslate needed while Google Translate will not fix zero-width space issue */
                _span || (_span = /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  className: "notranslate",
                  children: "​"
                }))) : null, children]
              })
            }))
          });
        }));
      }
    };
  });
})();
//# sourceMappingURL=InputAdornment-legacy-Bj6eETKt.js.map
