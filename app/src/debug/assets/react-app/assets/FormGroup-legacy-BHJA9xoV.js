;
(function () {
  System.register(['./index-legacy-ppEgxGbl.js', './use-service-legacy-BbL3A7cT.js'], function (exports, module) {
    'use strict';

    var generateUtilityClasses, generateUtilityClass, _extends, reactExports, _objectWithoutPropertiesLoose, jsxRuntimeExports, clsx, styled, useDefaultProps, useFormControl, formControlState, composeClasses;
    return {
      setters: [module => {
        generateUtilityClasses = module.f;
        generateUtilityClass = module.g;
        _extends = module._;
        reactExports = module.r;
        _objectWithoutPropertiesLoose = module.b;
        jsxRuntimeExports = module.j;
        clsx = module.d;
      }, module => {
        styled = module.f;
        useDefaultProps = module.j;
        useFormControl = module.b6;
        formControlState = module.b7;
        composeClasses = module.c;
      }],
      execute: function execute() {
        function getFormGroupUtilityClass(slot) {
          return generateUtilityClass('MuiFormGroup', slot);
        }
        generateUtilityClasses('MuiFormGroup', ['root', 'row', 'error']);
        const _excluded = ["className", "row"];
        const useUtilityClasses = ownerState => {
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
        const FormGroup = exports("F", /* @__PURE__ */reactExports.forwardRef(function FormGroup2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiFormGroup"
          });
          const className = props.className,
            _props$row = props.row,
            row = _props$row === void 0 ? false : _props$row,
            other = _objectWithoutPropertiesLoose(props, _excluded);
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
          const classes = useUtilityClasses(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(FormGroupRoot, _extends({
            className: clsx(classes.root, className),
            ownerState,
            ref
          }, other));
        }));
      }
    };
  });
})();
//# sourceMappingURL=FormGroup-legacy-BHJA9xoV.js.map
