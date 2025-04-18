;
(function () {
  System.register(['./index-legacy-ppEgxGbl.js', './use-service-legacy-BbL3A7cT.js'], function (exports, module) {
    'use strict';

    var generateUtilityClasses, generateUtilityClass, reactExports, _objectWithoutPropertiesLoose, _extends, jsxRuntimeExports, clsx, styled, Paper, useDefaultProps, composeClasses;
    return {
      setters: [module => {
        generateUtilityClasses = module.f;
        generateUtilityClass = module.g;
        reactExports = module.r;
        _objectWithoutPropertiesLoose = module.b;
        _extends = module._;
        jsxRuntimeExports = module.j;
        clsx = module.d;
      }, module => {
        styled = module.f;
        Paper = module.h;
        useDefaultProps = module.j;
        composeClasses = module.c;
      }],
      execute: function execute() {
        function getCardUtilityClass(slot) {
          return generateUtilityClass('MuiCard', slot);
        }
        generateUtilityClasses('MuiCard', ['root']);
        const _excluded = ["className", "raised"];
        const useUtilityClasses = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ["root"]
          };
          return composeClasses(slots, getCardUtilityClass, classes);
        };
        const CardRoot = styled(Paper, {
          name: "MuiCard",
          slot: "Root",
          overridesResolver: (props, styles) => styles.root
        })(() => {
          return {
            overflow: "hidden"
          };
        });
        const Card = exports("C", /* @__PURE__ */reactExports.forwardRef(function Card2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiCard"
          });
          const className = props.className,
            _props$raised = props.raised,
            raised = _props$raised === void 0 ? false : _props$raised,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const ownerState = _extends({}, props, {
            raised
          });
          const classes = useUtilityClasses(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(CardRoot, _extends({
            className: clsx(classes.root, className),
            elevation: raised ? 8 : void 0,
            ref,
            ownerState
          }, other));
        }));
      }
    };
  });
})();
//# sourceMappingURL=Card-legacy-nTgNTVv-.js.map
