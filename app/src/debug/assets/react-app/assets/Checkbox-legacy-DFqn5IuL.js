;
(function () {
  System.register(['./index-legacy-DHZhPI7F.js', './SwitchBase-legacy-Bo564_DK.js', './use-service-legacy-Dvd5TXWp.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports, generateUtilityClasses, generateUtilityClass, capitalize, _extends, alpha_1, reactExports, _objectWithoutPropertiesLoose, clsx, SwitchBase, createSvgIcon, styled, rootShouldForwardProp, useDefaultProps, composeClasses;
    return {
      setters: [module => {
        jsxRuntimeExports = module.j;
        generateUtilityClasses = module.f;
        generateUtilityClass = module.g;
        capitalize = module.h;
        _extends = module._;
        alpha_1 = module.k;
        reactExports = module.r;
        _objectWithoutPropertiesLoose = module.b;
        clsx = module.d;
      }, module => {
        SwitchBase = module.S;
      }, module => {
        createSvgIcon = module.e;
        styled = module.f;
        rootShouldForwardProp = module.l;
        useDefaultProps = module.j;
        composeClasses = module.c;
      }],
      execute: function execute() {
        const CheckBoxOutlineBlankIcon = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
        }), 'CheckBoxOutlineBlank');
        const CheckBoxIcon = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
        }), 'CheckBox');
        const IndeterminateCheckBoxIcon = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
        }), 'IndeterminateCheckBox');
        function getCheckboxUtilityClass(slot) {
          return generateUtilityClass('MuiCheckbox', slot);
        }
        const checkboxClasses = exports("c", generateUtilityClasses('MuiCheckbox', ['root', 'checked', 'disabled', 'indeterminate', 'colorPrimary', 'colorSecondary', 'sizeSmall', 'sizeMedium']));
        const _excluded = ["checkedIcon", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size", "className"];
        const useUtilityClasses = ownerState => {
          const classes = ownerState.classes,
            indeterminate = ownerState.indeterminate,
            color = ownerState.color,
            size = ownerState.size;
          const slots = {
            root: ["root", indeterminate && "indeterminate", `color${capitalize(color)}`, `size${capitalize(size)}`]
          };
          const composedClasses = composeClasses(slots, getCheckboxUtilityClass, classes);
          return _extends({}, classes, composedClasses);
        };
        const CheckboxRoot = styled(SwitchBase, {
          shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === "classes",
          name: "MuiCheckbox",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.root, ownerState.indeterminate && styles.indeterminate, styles[`size${capitalize(ownerState.size)}`], ownerState.color !== "default" && styles[`color${capitalize(ownerState.color)}`]];
          }
        })(({
          theme,
          ownerState
        }) => _extends({
          color: (theme.vars || theme).palette.text.secondary
        }, !ownerState.disableRipple && {
          "&:hover": {
            backgroundColor: theme.vars ? `rgba(${ownerState.color === "default" ? theme.vars.palette.action.activeChannel : theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha_1(ownerState.color === "default" ? theme.palette.action.active : theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
              backgroundColor: "transparent"
            }
          }
        }, ownerState.color !== "default" && {
          [`&.${checkboxClasses.checked}, &.${checkboxClasses.indeterminate}`]: {
            color: (theme.vars || theme).palette[ownerState.color].main
          },
          [`&.${checkboxClasses.disabled}`]: {
            color: (theme.vars || theme).palette.action.disabled
          }
        }));
        const defaultCheckedIcon = /* @__PURE__ */jsxRuntimeExports.jsx(CheckBoxIcon, {});
        const defaultIcon = /* @__PURE__ */jsxRuntimeExports.jsx(CheckBoxOutlineBlankIcon, {});
        const defaultIndeterminateIcon = /* @__PURE__ */jsxRuntimeExports.jsx(IndeterminateCheckBoxIcon, {});
        const Checkbox = exports("C", /* @__PURE__ */reactExports.forwardRef(function Checkbox2(inProps, ref) {
          var _icon$props$fontSize, _indeterminateIcon$pr;
          const props = useDefaultProps({
            props: inProps,
            name: "MuiCheckbox"
          });
          const _props$checkedIcon = props.checkedIcon,
            checkedIcon = _props$checkedIcon === void 0 ? defaultCheckedIcon : _props$checkedIcon,
            _props$color = props.color,
            color = _props$color === void 0 ? "primary" : _props$color,
            _props$icon = props.icon,
            iconProp = _props$icon === void 0 ? defaultIcon : _props$icon,
            _props$indeterminate = props.indeterminate,
            indeterminate = _props$indeterminate === void 0 ? false : _props$indeterminate,
            _props$indeterminateI = props.indeterminateIcon,
            indeterminateIconProp = _props$indeterminateI === void 0 ? defaultIndeterminateIcon : _props$indeterminateI,
            inputProps = props.inputProps,
            _props$size = props.size,
            size = _props$size === void 0 ? "medium" : _props$size,
            className = props.className,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const icon = indeterminate ? indeterminateIconProp : iconProp;
          const indeterminateIcon = indeterminate ? indeterminateIconProp : checkedIcon;
          const ownerState = _extends({}, props, {
            color,
            indeterminate,
            size
          });
          const classes = useUtilityClasses(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(CheckboxRoot, _extends({
            type: "checkbox",
            inputProps: _extends({
              "data-indeterminate": indeterminate
            }, inputProps),
            icon: /* @__PURE__ */reactExports.cloneElement(icon, {
              fontSize: (_icon$props$fontSize = icon.props.fontSize) != null ? _icon$props$fontSize : size
            }),
            checkedIcon: /* @__PURE__ */reactExports.cloneElement(indeterminateIcon, {
              fontSize: (_indeterminateIcon$pr = indeterminateIcon.props.fontSize) != null ? _indeterminateIcon$pr : size
            }),
            ownerState,
            ref,
            className: clsx(classes.root, className)
          }, other, {
            classes
          }));
        }));
      }
    };
  });
})();
//# sourceMappingURL=Checkbox-legacy-DFqn5IuL.js.map
