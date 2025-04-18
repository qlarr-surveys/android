;
(function () {
  System.register(['./index-legacy-ppEgxGbl.js', './TableCell-legacy-Dz0cxbNV.js', './use-service-legacy-BbL3A7cT.js', './tableRowClasses-legacy-DKGRrcou.js'], function (exports, module) {
    'use strict';

    var generateUtilityClasses, generateUtilityClass, _extends, reactExports, _objectWithoutPropertiesLoose, jsxRuntimeExports, clsx, alpha_1, TableContext, Tablelvl2Context, styled, useDefaultProps, composeClasses, tableRowClasses, getTableRowUtilityClass;
    return {
      setters: [module => {
        generateUtilityClasses = module.f;
        generateUtilityClass = module.g;
        _extends = module._;
        reactExports = module.r;
        _objectWithoutPropertiesLoose = module.b;
        jsxRuntimeExports = module.j;
        clsx = module.d;
        alpha_1 = module.k;
      }, module => {
        TableContext = module.a;
        Tablelvl2Context = module.b;
      }, module => {
        styled = module.f;
        useDefaultProps = module.j;
        composeClasses = module.c;
      }, module => {
        tableRowClasses = module.t;
        getTableRowUtilityClass = module.g;
      }],
      execute: function execute() {
        function getTableUtilityClass(slot) {
          return generateUtilityClass('MuiTable', slot);
        }
        generateUtilityClasses('MuiTable', ['root', 'stickyHeader']);
        const _excluded$3 = ["className", "component", "padding", "size", "stickyHeader"];
        const useUtilityClasses$3 = ownerState => {
          const classes = ownerState.classes,
            stickyHeader = ownerState.stickyHeader;
          const slots = {
            root: ["root", stickyHeader && "stickyHeader"]
          };
          return composeClasses(slots, getTableUtilityClass, classes);
        };
        const TableRoot = styled("table", {
          name: "MuiTable",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.root, ownerState.stickyHeader && styles.stickyHeader];
          }
        })(({
          theme,
          ownerState
        }) => _extends({
          display: "table",
          width: "100%",
          borderCollapse: "collapse",
          borderSpacing: 0,
          "& caption": _extends({}, theme.typography.body2, {
            padding: theme.spacing(2),
            color: (theme.vars || theme).palette.text.secondary,
            textAlign: "left",
            captionSide: "bottom"
          })
        }, ownerState.stickyHeader && {
          borderCollapse: "separate"
        }));
        const defaultComponent$2 = "table";
        const Table = exports("a", /* @__PURE__ */reactExports.forwardRef(function Table2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiTable"
          });
          const className = props.className,
            _props$component = props.component,
            component = _props$component === void 0 ? defaultComponent$2 : _props$component,
            _props$padding = props.padding,
            padding = _props$padding === void 0 ? "normal" : _props$padding,
            _props$size = props.size,
            size = _props$size === void 0 ? "medium" : _props$size,
            _props$stickyHeader = props.stickyHeader,
            stickyHeader = _props$stickyHeader === void 0 ? false : _props$stickyHeader,
            other = _objectWithoutPropertiesLoose(props, _excluded$3);
          const ownerState = _extends({}, props, {
            component,
            padding,
            size,
            stickyHeader
          });
          const classes = useUtilityClasses$3(ownerState);
          const table = reactExports.useMemo(() => ({
            padding,
            size,
            stickyHeader
          }), [padding, size, stickyHeader]);
          return /* @__PURE__ */jsxRuntimeExports.jsx(TableContext.Provider, {
            value: table,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(TableRoot, _extends({
              as: component,
              role: component === defaultComponent$2 ? null : "table",
              ref,
              className: clsx(classes.root, className),
              ownerState
            }, other))
          });
        }));
        function getTableBodyUtilityClass(slot) {
          return generateUtilityClass('MuiTableBody', slot);
        }
        generateUtilityClasses('MuiTableBody', ['root']);
        const _excluded$2 = ["className", "component"];
        const useUtilityClasses$2 = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ["root"]
          };
          return composeClasses(slots, getTableBodyUtilityClass, classes);
        };
        const TableBodyRoot = styled("tbody", {
          name: "MuiTableBody",
          slot: "Root",
          overridesResolver: (props, styles) => styles.root
        })({
          display: "table-row-group"
        });
        const tablelvl2 = {
          variant: "body"
        };
        const defaultComponent$1 = "tbody";
        const TableBody = exports("c", /* @__PURE__ */reactExports.forwardRef(function TableBody2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiTableBody"
          });
          const className = props.className,
            _props$component2 = props.component,
            component = _props$component2 === void 0 ? defaultComponent$1 : _props$component2,
            other = _objectWithoutPropertiesLoose(props, _excluded$2);
          const ownerState = _extends({}, props, {
            component
          });
          const classes = useUtilityClasses$2(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(Tablelvl2Context.Provider, {
            value: tablelvl2,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(TableBodyRoot, _extends({
              className: clsx(classes.root, className),
              as: component,
              ref,
              role: component === defaultComponent$1 ? null : "rowgroup",
              ownerState
            }, other))
          });
        }));
        function getTableContainerUtilityClass(slot) {
          return generateUtilityClass('MuiTableContainer', slot);
        }
        generateUtilityClasses('MuiTableContainer', ['root']);
        const _excluded$1 = ["className", "component"];
        const useUtilityClasses$1 = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ["root"]
          };
          return composeClasses(slots, getTableContainerUtilityClass, classes);
        };
        const TableContainerRoot = styled("div", {
          name: "MuiTableContainer",
          slot: "Root",
          overridesResolver: (props, styles) => styles.root
        })({
          width: "100%",
          overflowX: "auto"
        });
        const TableContainer = exports("T", /* @__PURE__ */reactExports.forwardRef(function TableContainer2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiTableContainer"
          });
          const className = props.className,
            _props$component3 = props.component,
            component = _props$component3 === void 0 ? "div" : _props$component3,
            other = _objectWithoutPropertiesLoose(props, _excluded$1);
          const ownerState = _extends({}, props, {
            component
          });
          const classes = useUtilityClasses$1(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(TableContainerRoot, _extends({
            ref,
            as: component,
            className: clsx(classes.root, className),
            ownerState
          }, other));
        }));
        const _excluded = ["className", "component", "hover", "selected"];
        const useUtilityClasses = ownerState => {
          const classes = ownerState.classes,
            selected = ownerState.selected,
            hover = ownerState.hover,
            head = ownerState.head,
            footer = ownerState.footer;
          const slots = {
            root: ["root", selected && "selected", hover && "hover", head && "head", footer && "footer"]
          };
          return composeClasses(slots, getTableRowUtilityClass, classes);
        };
        const TableRowRoot = styled("tr", {
          name: "MuiTableRow",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.root, ownerState.head && styles.head, ownerState.footer && styles.footer];
          }
        })(({
          theme
        }) => ({
          color: "inherit",
          display: "table-row",
          verticalAlign: "middle",
          // We disable the focus ring for mouse, touch and keyboard users.
          outline: 0,
          [`&.${tableRowClasses.hover}:hover`]: {
            backgroundColor: (theme.vars || theme).palette.action.hover
          },
          [`&.${tableRowClasses.selected}`]: {
            backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha_1(theme.palette.primary.main, theme.palette.action.selectedOpacity),
            "&:hover": {
              backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha_1(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity)
            }
          }
        }));
        const defaultComponent = "tr";
        const TableRow = exports("b", /* @__PURE__ */reactExports.forwardRef(function TableRow2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiTableRow"
          });
          const className = props.className,
            _props$component4 = props.component,
            component = _props$component4 === void 0 ? defaultComponent : _props$component4,
            _props$hover = props.hover,
            hover = _props$hover === void 0 ? false : _props$hover,
            _props$selected = props.selected,
            selected = _props$selected === void 0 ? false : _props$selected,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const tablelvl2 = reactExports.useContext(Tablelvl2Context);
          const ownerState = _extends({}, props, {
            component,
            hover,
            selected,
            head: tablelvl2 && tablelvl2.variant === "head",
            footer: tablelvl2 && tablelvl2.variant === "footer"
          });
          const classes = useUtilityClasses(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(TableRowRoot, _extends({
            as: component,
            ref,
            className: clsx(classes.root, className),
            role: component === defaultComponent ? null : "row",
            ownerState
          }, other));
        }));
      }
    };
  });
})();
//# sourceMappingURL=TableRow-legacy-TubfNSWY.js.map
