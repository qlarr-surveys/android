;
(function () {
  System.register(['./index-legacy-BLatMfxz.js', './use-service-legacy-DLuVKbJp.js', './tableRowClasses-legacy-BNdXjQON.js'], function (exports, module) {
    'use strict';

    var reactExports, capitalize, _extends, lighten_1, alpha_1, darken_1, _objectWithoutPropertiesLoose, jsxRuntimeExports, clsx, styled, useDefaultProps, composeClasses, tableCellClasses, getTableCellUtilityClass;
    return {
      setters: [module => {
        reactExports = module.r;
        capitalize = module.h;
        _extends = module._;
        lighten_1 = module.l;
        alpha_1 = module.k;
        darken_1 = module.i;
        _objectWithoutPropertiesLoose = module.b;
        jsxRuntimeExports = module.j;
        clsx = module.d;
      }, module => {
        styled = module.f;
        useDefaultProps = module.j;
        composeClasses = module.c;
      }, module => {
        tableCellClasses = module.a;
        getTableCellUtilityClass = module.b;
      }],
      execute: function execute() {
        const TableContext = exports("a", /* @__PURE__ */reactExports.createContext());
        const Tablelvl2Context = exports("b", /* @__PURE__ */reactExports.createContext());
        const _excluded = ["align", "className", "component", "padding", "scope", "size", "sortDirection", "variant"];
        const useUtilityClasses = ownerState => {
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
        const TableCell = exports("T", /* @__PURE__ */reactExports.forwardRef(function TableCell2(inProps, ref) {
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
            other = _objectWithoutPropertiesLoose(props, _excluded);
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
          const classes = useUtilityClasses(ownerState);
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
      }
    };
  });
})();
//# sourceMappingURL=TableCell-legacy-BTEC8sBz.js.map
