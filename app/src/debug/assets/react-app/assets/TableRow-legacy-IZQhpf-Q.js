;
(function () {
  System.register(['./index-legacy-BPhVO2yG.js', './Android-legacy-Biy5t9xS.js'], function (exports, module) {
    'use strict';

    var reactExports, generateUtilityClasses, generateUtilityClass, _extends, _objectWithoutPropertiesLoose, jsxRuntimeExports, clsx, capitalize, lighten_1, alpha_1, darken_1, styled, useDefaultProps, composeClasses;
    return {
      setters: [module => {
        reactExports = module.r;
        generateUtilityClasses = module.q;
        generateUtilityClass = module.F;
        _extends = module.y;
        _objectWithoutPropertiesLoose = module.w;
        jsxRuntimeExports = module.m;
        clsx = module.E;
        capitalize = module.h;
        lighten_1 = module.ac;
        alpha_1 = module.Z;
        darken_1 = module.ad;
      }, module => {
        styled = module.s;
        useDefaultProps = module.a;
        composeClasses = module.e;
      }],
      execute: function execute() {
        const TableContext = /* @__PURE__ */reactExports.createContext();
        function getTableUtilityClass(slot) {
          return generateUtilityClass('MuiTable', slot);
        }
        generateUtilityClasses('MuiTable', ['root', 'stickyHeader']);
        const _excluded$5 = ["className", "component", "padding", "size", "stickyHeader"];
        const useUtilityClasses$5 = ownerState => {
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
        const defaultComponent$3 = "table";
        const Table = exports("a", /* @__PURE__ */reactExports.forwardRef(function Table2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiTable"
          });
          const className = props.className,
            _props$component = props.component,
            component = _props$component === void 0 ? defaultComponent$3 : _props$component,
            _props$padding = props.padding,
            padding = _props$padding === void 0 ? "normal" : _props$padding,
            _props$size = props.size,
            size = _props$size === void 0 ? "medium" : _props$size,
            _props$stickyHeader = props.stickyHeader,
            stickyHeader = _props$stickyHeader === void 0 ? false : _props$stickyHeader,
            other = _objectWithoutPropertiesLoose(props, _excluded$5);
          const ownerState = _extends({}, props, {
            component,
            padding,
            size,
            stickyHeader
          });
          const classes = useUtilityClasses$5(ownerState);
          const table = reactExports.useMemo(() => ({
            padding,
            size,
            stickyHeader
          }), [padding, size, stickyHeader]);
          return /* @__PURE__ */jsxRuntimeExports.jsx(TableContext.Provider, {
            value: table,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(TableRoot, _extends({
              as: component,
              role: component === defaultComponent$3 ? null : "table",
              ref,
              className: clsx(classes.root, className),
              ownerState
            }, other))
          });
        }));
        const Tablelvl2Context = /* @__PURE__ */reactExports.createContext();
        function getTableBodyUtilityClass(slot) {
          return generateUtilityClass('MuiTableBody', slot);
        }
        generateUtilityClasses('MuiTableBody', ['root']);
        const _excluded$4 = ["className", "component"];
        const useUtilityClasses$4 = ownerState => {
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
        const tablelvl2$1 = {
          variant: "body"
        };
        const defaultComponent$2 = "tbody";
        const TableBody = exports("e", /* @__PURE__ */reactExports.forwardRef(function TableBody2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiTableBody"
          });
          const className = props.className,
            _props$component2 = props.component,
            component = _props$component2 === void 0 ? defaultComponent$2 : _props$component2,
            other = _objectWithoutPropertiesLoose(props, _excluded$4);
          const ownerState = _extends({}, props, {
            component
          });
          const classes = useUtilityClasses$4(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(Tablelvl2Context.Provider, {
            value: tablelvl2$1,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(TableBodyRoot, _extends({
              className: clsx(classes.root, className),
              as: component,
              ref,
              role: component === defaultComponent$2 ? null : "rowgroup",
              ownerState
            }, other))
          });
        }));
        function getTableCellUtilityClass(slot) {
          return generateUtilityClass('MuiTableCell', slot);
        }
        const tableCellClasses = generateUtilityClasses('MuiTableCell', ['root', 'head', 'body', 'footer', 'sizeSmall', 'sizeMedium', 'paddingCheckbox', 'paddingNone', 'alignLeft', 'alignCenter', 'alignRight', 'alignJustify', 'stickyHeader']);
        const _excluded$3 = ["align", "className", "component", "padding", "scope", "size", "sortDirection", "variant"];
        const useUtilityClasses$3 = ownerState => {
          const classes = ownerState.classes,
            variant = ownerState.variant,
            align = ownerState.align,
            padding = ownerState.padding,
            size = ownerState.size,
            stickyHeader = ownerState.stickyHeader;
          const slots = {
            root: ["root", variant, stickyHeader && "stickyHeader", align !== "inherit" && `align${capitalize(align)}`, padding !== "normal" && `padding${capitalize(padding)}`, `size${capitalize(size)}`]
          };
          return composeClasses(slots, getTableCellUtilityClass, classes);
        };
        const TableCellRoot = styled("td", {
          name: "MuiTableCell",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.root, styles[ownerState.variant], styles[`size${capitalize(ownerState.size)}`], ownerState.padding !== "normal" && styles[`padding${capitalize(ownerState.padding)}`], ownerState.align !== "inherit" && styles[`align${capitalize(ownerState.align)}`], ownerState.stickyHeader && styles.stickyHeader];
          }
        })(({
          theme,
          ownerState
        }) => _extends({}, theme.typography.body2, {
          display: "table-cell",
          verticalAlign: "inherit",
          // Workaround for a rendering bug with spanned columns in Chrome 62.0.
          // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
          borderBottom: theme.vars ? `1px solid ${theme.vars.palette.TableCell.border}` : `1px solid
    ${theme.palette.mode === "light" ? lighten_1(alpha_1(theme.palette.divider, 1), 0.88) : darken_1(alpha_1(theme.palette.divider, 1), 0.68)}`,
          textAlign: "left",
          padding: 16
        }, ownerState.variant === "head" && {
          color: (theme.vars || theme).palette.text.primary,
          lineHeight: theme.typography.pxToRem(24),
          fontWeight: theme.typography.fontWeightMedium
        }, ownerState.variant === "body" && {
          color: (theme.vars || theme).palette.text.primary
        }, ownerState.variant === "footer" && {
          color: (theme.vars || theme).palette.text.secondary,
          lineHeight: theme.typography.pxToRem(21),
          fontSize: theme.typography.pxToRem(12)
        }, ownerState.size === "small" && {
          padding: "6px 16px",
          [`&.${tableCellClasses.paddingCheckbox}`]: {
            width: 24,
            // prevent the checkbox column from growing
            padding: "0 12px 0 16px",
            "& > *": {
              padding: 0
            }
          }
        }, ownerState.padding === "checkbox" && {
          width: 48,
          // prevent the checkbox column from growing
          padding: "0 0 0 4px"
        }, ownerState.padding === "none" && {
          padding: 0
        }, ownerState.align === "left" && {
          textAlign: "left"
        }, ownerState.align === "center" && {
          textAlign: "center"
        }, ownerState.align === "right" && {
          textAlign: "right",
          flexDirection: "row-reverse"
        }, ownerState.align === "justify" && {
          textAlign: "justify"
        }, ownerState.stickyHeader && {
          position: "sticky",
          top: 0,
          zIndex: 2,
          backgroundColor: (theme.vars || theme).palette.background.default
        }));
        const TableCell = exports("d", /* @__PURE__ */reactExports.forwardRef(function TableCell2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiTableCell"
          });
          const _props$align = props.align,
            align = _props$align === void 0 ? "inherit" : _props$align,
            className = props.className,
            componentProp = props.component,
            paddingProp = props.padding,
            scopeProp = props.scope,
            sizeProp = props.size,
            sortDirection = props.sortDirection,
            variantProp = props.variant,
            other = _objectWithoutPropertiesLoose(props, _excluded$3);
          const table = reactExports.useContext(TableContext);
          const tablelvl2 = reactExports.useContext(Tablelvl2Context);
          const isHeadCell = tablelvl2 && tablelvl2.variant === "head";
          let component;
          if (componentProp) {
            component = componentProp;
          } else {
            component = isHeadCell ? "th" : "td";
          }
          let scope = scopeProp;
          if (component === "td") {
            scope = void 0;
          } else if (!scope && isHeadCell) {
            scope = "col";
          }
          const variant = variantProp || tablelvl2 && tablelvl2.variant;
          const ownerState = _extends({}, props, {
            align,
            component,
            padding: paddingProp || (table && table.padding ? table.padding : "normal"),
            size: sizeProp || (table && table.size ? table.size : "medium"),
            sortDirection,
            stickyHeader: variant === "head" && table && table.stickyHeader,
            variant
          });
          const classes = useUtilityClasses$3(ownerState);
          let ariaSort = null;
          if (sortDirection) {
            ariaSort = sortDirection === "asc" ? "ascending" : "descending";
          }
          return /* @__PURE__ */jsxRuntimeExports.jsx(TableCellRoot, _extends({
            as: component,
            ref,
            className: clsx(classes.root, className),
            "aria-sort": ariaSort,
            scope,
            ownerState
          }, other));
        }));
        function getTableContainerUtilityClass(slot) {
          return generateUtilityClass('MuiTableContainer', slot);
        }
        generateUtilityClasses('MuiTableContainer', ['root']);
        const _excluded$2 = ["className", "component"];
        const useUtilityClasses$2 = ownerState => {
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
            other = _objectWithoutPropertiesLoose(props, _excluded$2);
          const ownerState = _extends({}, props, {
            component
          });
          const classes = useUtilityClasses$2(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(TableContainerRoot, _extends({
            ref,
            as: component,
            className: clsx(classes.root, className),
            ownerState
          }, other));
        }));
        function getTableHeadUtilityClass(slot) {
          return generateUtilityClass('MuiTableHead', slot);
        }
        generateUtilityClasses('MuiTableHead', ['root']);
        const _excluded$1 = ["className", "component"];
        const useUtilityClasses$1 = ownerState => {
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
        const defaultComponent$1 = "thead";
        const TableHead = exports("b", /* @__PURE__ */reactExports.forwardRef(function TableHead2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiTableHead"
          });
          const className = props.className,
            _props$component4 = props.component,
            component = _props$component4 === void 0 ? defaultComponent$1 : _props$component4,
            other = _objectWithoutPropertiesLoose(props, _excluded$1);
          const ownerState = _extends({}, props, {
            component
          });
          const classes = useUtilityClasses$1(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(Tablelvl2Context.Provider, {
            value: tablelvl2,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(TableHeadRoot, _extends({
              as: component,
              className: clsx(classes.root, className),
              ref,
              role: component === defaultComponent$1 ? null : "rowgroup",
              ownerState
            }, other))
          });
        }));
        function getTableRowUtilityClass(slot) {
          return generateUtilityClass('MuiTableRow', slot);
        }
        const tableRowClasses = generateUtilityClasses('MuiTableRow', ['root', 'selected', 'hover', 'head', 'footer']);
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
        const TableRow = exports("c", /* @__PURE__ */reactExports.forwardRef(function TableRow2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiTableRow"
          });
          const className = props.className,
            _props$component5 = props.component,
            component = _props$component5 === void 0 ? defaultComponent : _props$component5,
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
//# sourceMappingURL=TableRow-legacy-IZQhpf-Q.js.map
