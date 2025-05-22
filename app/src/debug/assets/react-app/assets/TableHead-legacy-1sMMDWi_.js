;
(function () {
  System.register(['./index-legacy-ppEgxGbl.js', './TableCell-legacy-Dz0cxbNV.js', './use-service-legacy-BbL3A7cT.js'], function (exports, module) {
    'use strict';

    var generateUtilityClasses, generateUtilityClass, reactExports, _objectWithoutPropertiesLoose, _extends, jsxRuntimeExports, clsx, Tablelvl2Context, styled, useDefaultProps, composeClasses;
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
        Tablelvl2Context = module.b;
      }, module => {
        styled = module.f;
        useDefaultProps = module.j;
        composeClasses = module.c;
      }],
      execute: function execute() {
        function getTableHeadUtilityClass(slot) {
          return generateUtilityClass('MuiTableHead', slot);
        }
        generateUtilityClasses('MuiTableHead', ['root']);
        const _excluded = ["className", "component"];
        const useUtilityClasses = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ["root"]
          };
          return composeClasses(slots, getTableHeadUtilityClass, classes);
        };
        const TableHeadRoot = styled("thead", {
          name: "MuiTableHead",
          slot: "Root",
          overridesResolver: (props, styles) => styles.root
        })({
          display: "table-header-group"
        });
        const tablelvl2 = {
          variant: "head"
        };
        const defaultComponent = "thead";
        const TableHead = exports("T", /* @__PURE__ */reactExports.forwardRef(function TableHead2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiTableHead"
          });
          const className = props.className,
            _props$component = props.component,
            component = _props$component === void 0 ? defaultComponent : _props$component,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const ownerState = _extends({}, props, {
            component
          });
          const classes = useUtilityClasses(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(Tablelvl2Context.Provider, {
            value: tablelvl2,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(TableHeadRoot, _extends({
              as: component,
              className: clsx(classes.root, className),
              ref,
              role: component === defaultComponent ? null : "rowgroup",
              ownerState
            }, other))
          });
        }));
      }
    };
  });
})();
//# sourceMappingURL=TableHead-legacy-1sMMDWi_.js.map
