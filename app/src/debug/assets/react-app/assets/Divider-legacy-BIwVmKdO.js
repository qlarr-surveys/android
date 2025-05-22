;
(function () {
  System.register(['./index-legacy-ppEgxGbl.js', './use-service-legacy-BbL3A7cT.js'], function (exports, module) {
    'use strict';

    var _extends, alpha_1, reactExports, _objectWithoutPropertiesLoose, jsxRuntimeExports, clsx, styled, useDefaultProps, composeClasses, getDividerUtilityClass;
    return {
      setters: [module => {
        _extends = module._;
        alpha_1 = module.k;
        reactExports = module.r;
        _objectWithoutPropertiesLoose = module.b;
        jsxRuntimeExports = module.j;
        clsx = module.d;
      }, module => {
        styled = module.f;
        useDefaultProps = module.j;
        composeClasses = module.c;
        getDividerUtilityClass = module.bX;
      }],
      execute: function execute() {
        const _excluded = ["absolute", "children", "className", "component", "flexItem", "light", "orientation", "role", "textAlign", "variant"];
        const useUtilityClasses = ownerState => {
          const absolute = ownerState.absolute,
            children = ownerState.children,
            classes = ownerState.classes,
            flexItem = ownerState.flexItem,
            light = ownerState.light,
            orientation = ownerState.orientation,
            textAlign = ownerState.textAlign,
            variant = ownerState.variant;
          const slots = {
            root: ["root", absolute && "absolute", variant, light && "light", orientation === "vertical" && "vertical", flexItem && "flexItem", children && "withChildren", children && orientation === "vertical" && "withChildrenVertical", textAlign === "right" && orientation !== "vertical" && "textAlignRight", textAlign === "left" && orientation !== "vertical" && "textAlignLeft"],
            wrapper: ["wrapper", orientation === "vertical" && "wrapperVertical"]
          };
          return composeClasses(slots, getDividerUtilityClass, classes);
        };
        const DividerRoot = styled("div", {
          name: "MuiDivider",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.root, ownerState.absolute && styles.absolute, styles[ownerState.variant], ownerState.light && styles.light, ownerState.orientation === "vertical" && styles.vertical, ownerState.flexItem && styles.flexItem, ownerState.children && styles.withChildren, ownerState.children && ownerState.orientation === "vertical" && styles.withChildrenVertical, ownerState.textAlign === "right" && ownerState.orientation !== "vertical" && styles.textAlignRight, ownerState.textAlign === "left" && ownerState.orientation !== "vertical" && styles.textAlignLeft];
          }
        })(({
          theme,
          ownerState
        }) => _extends({
          margin: 0,
          // Reset browser default style.
          flexShrink: 0,
          borderWidth: 0,
          borderStyle: "solid",
          borderColor: (theme.vars || theme).palette.divider,
          borderBottomWidth: "thin"
        }, ownerState.absolute && {
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%"
        }, ownerState.light && {
          borderColor: theme.vars ? `rgba(${theme.vars.palette.dividerChannel} / 0.08)` : alpha_1(theme.palette.divider, 0.08)
        }, ownerState.variant === "inset" && {
          marginLeft: 72
        }, ownerState.variant === "middle" && ownerState.orientation === "horizontal" && {
          marginLeft: theme.spacing(2),
          marginRight: theme.spacing(2)
        }, ownerState.variant === "middle" && ownerState.orientation === "vertical" && {
          marginTop: theme.spacing(1),
          marginBottom: theme.spacing(1)
        }, ownerState.orientation === "vertical" && {
          height: "100%",
          borderBottomWidth: 0,
          borderRightWidth: "thin"
        }, ownerState.flexItem && {
          alignSelf: "stretch",
          height: "auto"
        }), ({
          ownerState
        }) => _extends({}, ownerState.children && {
          display: "flex",
          whiteSpace: "nowrap",
          textAlign: "center",
          border: 0,
          borderTopStyle: "solid",
          borderLeftStyle: "solid",
          "&::before, &::after": {
            content: '""',
            alignSelf: "center"
          }
        }), ({
          theme,
          ownerState
        }) => _extends({}, ownerState.children && ownerState.orientation !== "vertical" && {
          "&::before, &::after": {
            width: "100%",
            borderTop: `thin solid ${(theme.vars || theme).palette.divider}`,
            borderTopStyle: "inherit"
          }
        }), ({
          theme,
          ownerState
        }) => _extends({}, ownerState.children && ownerState.orientation === "vertical" && {
          flexDirection: "column",
          "&::before, &::after": {
            height: "100%",
            borderLeft: `thin solid ${(theme.vars || theme).palette.divider}`,
            borderLeftStyle: "inherit"
          }
        }), ({
          ownerState
        }) => _extends({}, ownerState.textAlign === "right" && ownerState.orientation !== "vertical" && {
          "&::before": {
            width: "90%"
          },
          "&::after": {
            width: "10%"
          }
        }, ownerState.textAlign === "left" && ownerState.orientation !== "vertical" && {
          "&::before": {
            width: "10%"
          },
          "&::after": {
            width: "90%"
          }
        }));
        const DividerWrapper = styled("span", {
          name: "MuiDivider",
          slot: "Wrapper",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.wrapper, ownerState.orientation === "vertical" && styles.wrapperVertical];
          }
        })(({
          theme,
          ownerState
        }) => _extends({
          display: "inline-block",
          paddingLeft: `calc(${theme.spacing(1)} * 1.2)`,
          paddingRight: `calc(${theme.spacing(1)} * 1.2)`
        }, ownerState.orientation === "vertical" && {
          paddingTop: `calc(${theme.spacing(1)} * 1.2)`,
          paddingBottom: `calc(${theme.spacing(1)} * 1.2)`
        }));
        const Divider = exports("D", /* @__PURE__ */reactExports.forwardRef(function Divider2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiDivider"
          });
          const _props$absolute = props.absolute,
            absolute = _props$absolute === void 0 ? false : _props$absolute,
            children = props.children,
            className = props.className,
            _props$component = props.component,
            component = _props$component === void 0 ? children ? "div" : "hr" : _props$component,
            _props$flexItem = props.flexItem,
            flexItem = _props$flexItem === void 0 ? false : _props$flexItem,
            _props$light = props.light,
            light = _props$light === void 0 ? false : _props$light,
            _props$orientation = props.orientation,
            orientation = _props$orientation === void 0 ? "horizontal" : _props$orientation,
            _props$role = props.role,
            role = _props$role === void 0 ? component !== "hr" ? "separator" : void 0 : _props$role,
            _props$textAlign = props.textAlign,
            textAlign = _props$textAlign === void 0 ? "center" : _props$textAlign,
            _props$variant = props.variant,
            variant = _props$variant === void 0 ? "fullWidth" : _props$variant,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const ownerState = _extends({}, props, {
            absolute,
            component,
            flexItem,
            light,
            orientation,
            role,
            textAlign,
            variant
          });
          const classes = useUtilityClasses(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(DividerRoot, _extends({
            as: component,
            className: clsx(classes.root, className),
            role,
            ref,
            ownerState
          }, other, {
            children: children ? /* @__PURE__ */jsxRuntimeExports.jsx(DividerWrapper, {
              className: classes.wrapper,
              ownerState,
              children
            }) : null
          }));
        }));
        Divider.muiSkipListHighlight = true;
      }
    };
  });
})();
//# sourceMappingURL=Divider-legacy-BIwVmKdO.js.map
