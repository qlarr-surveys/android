;
(function () {
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  System.register(['./index-legacy-ppEgxGbl.js', './use-service-legacy-BbL3A7cT.js', './Tabs-legacy-CXNTfVGs.js', './InputAdornment-legacy-8aLN3GSj.js'], function (exports, module) {
    'use strict';

    var THEME_ID, _objectWithoutPropertiesLoose, React, _extends, generateUtilityClasses, generateUtilityClass, reactExports, jsxRuntimeExports, clsx$1, extendSxProp, resolveBreakpointValues, handleBreakpoints, useTheme$1, capitalize, useThemeProps$1, defaultTheme, _inheritsLoose, forceReflow, Transition, styled, useDefaultProps, composeClasses, useTheme, createSvgIcon, Typography, Button, IconButton, Paper, useForkRef, FocusTrap, useEventCallback, ownerDocument, Grow, useControlled, useEnhancedEffect, useId, alpha, TransitionGroup, Fade, ButtonBase, Popper, Dialog, dialogClasses, DialogContent, Tabs, tabsClasses, Tab, useMediaQuery, InputAdornment;
    return {
      setters: [module => {
        THEME_ID = module.a9;
        _objectWithoutPropertiesLoose = module.b;
        React = module.R;
        _extends = module._;
        generateUtilityClasses = module.f;
        generateUtilityClass = module.g;
        reactExports = module.r;
        jsxRuntimeExports = module.j;
        clsx$1 = module.d;
        extendSxProp = module.e;
        resolveBreakpointValues = module.a5;
        handleBreakpoints = module.a4;
        useTheme$1 = module.a;
        capitalize = module.h;
      }, module => {
        useThemeProps$1 = module.u;
        defaultTheme = module.bF;
        _inheritsLoose = module.bG;
        forceReflow = module.bH;
        Transition = module.bh;
        styled = module.f;
        useDefaultProps = module.j;
        composeClasses = module.c;
        useTheme = module.w;
        createSvgIcon = module.e;
        Typography = module.T;
        Button = module.aQ;
        IconButton = module.I;
        Paper = module.h;
        useForkRef = module.b;
        FocusTrap = module.bI;
        useEventCallback = module.k;
        ownerDocument = module.o;
        Grow = module.y;
        useControlled = module.A;
        useEnhancedEffect = module.n;
        useId = module.C;
        alpha = module.$;
        TransitionGroup = module.bJ;
        Fade = module.a_;
        ButtonBase = module.B;
      }, module => {
        Popper = module.P;
        Dialog = module.a;
        dialogClasses = module.d;
        DialogContent = module.b;
        Tabs = module.T;
        tabsClasses = module.e;
        Tab = module.c;
        useMediaQuery = module.u;
      }, module => {
        InputAdornment = module.I;
      }],
      execute: function execute() {
        exports({
          L: LocalizationProvider,
          M: MobileWrapper,
          e: useMeridiemMode,
          f: arrayIncludes,
          j: DesktopWrapper,
          k: CalendarOrClockPicker,
          u: useThemeProps
        });
        function useThemeProps({
          props,
          name
        }) {
          return useThemeProps$1({
            props,
            name,
            defaultTheme,
            themeId: THEME_ID
          });
        }

        /**
         * Checks if a given element has a CSS class.
         * 
         * @param element the element
         * @param className the CSS class name
         */
        function hasClass(element, className) {
          if (element.classList) return !!className && element.classList.contains(className);
          return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
        }

        /**
         * Adds a CSS class to a given element.
         * 
         * @param element the element
         * @param className the CSS class name
         */

        function addClass(element, className) {
          if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
        }
        function replaceClassName(origClass, classToRemove) {
          return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
        }
        /**
         * Removes a CSS class from a given element.
         * 
         * @param element the element
         * @param className the CSS class name
         */

        function removeClass$1(element, className) {
          if (element.classList) {
            element.classList.remove(className);
          } else if (typeof element.className === 'string') {
            element.className = replaceClassName(element.className, className);
          } else {
            element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
          }
        }
        var _addClass = function addClass$1(node, classes) {
          return node && classes && classes.split(" ").forEach(function (c) {
            return addClass(node, c);
          });
        };
        var removeClass = function removeClass2(node, classes) {
          return node && classes && classes.split(" ").forEach(function (c) {
            return removeClass$1(node, c);
          });
        };
        var CSSTransition = /* @__PURE__ */function (_React$Component) {
          _inheritsLoose(CSSTransition2, _React$Component);
          function CSSTransition2() {
            var _this;
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
            _this.appliedClasses = {
              appear: {},
              enter: {},
              exit: {}
            };
            _this.onEnter = function (maybeNode, maybeAppearing) {
              var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
                node = _this$resolveArgument[0],
                appearing = _this$resolveArgument[1];
              _this.removeClasses(node, "exit");
              _this.addClass(node, appearing ? "appear" : "enter", "base");
              if (_this.props.onEnter) {
                _this.props.onEnter(maybeNode, maybeAppearing);
              }
            };
            _this.onEntering = function (maybeNode, maybeAppearing) {
              var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
                node = _this$resolveArgument2[0],
                appearing = _this$resolveArgument2[1];
              var type = appearing ? "appear" : "enter";
              _this.addClass(node, type, "active");
              if (_this.props.onEntering) {
                _this.props.onEntering(maybeNode, maybeAppearing);
              }
            };
            _this.onEntered = function (maybeNode, maybeAppearing) {
              var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
                node = _this$resolveArgument3[0],
                appearing = _this$resolveArgument3[1];
              var type = appearing ? "appear" : "enter";
              _this.removeClasses(node, type);
              _this.addClass(node, type, "done");
              if (_this.props.onEntered) {
                _this.props.onEntered(maybeNode, maybeAppearing);
              }
            };
            _this.onExit = function (maybeNode) {
              var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
                node = _this$resolveArgument4[0];
              _this.removeClasses(node, "appear");
              _this.removeClasses(node, "enter");
              _this.addClass(node, "exit", "base");
              if (_this.props.onExit) {
                _this.props.onExit(maybeNode);
              }
            };
            _this.onExiting = function (maybeNode) {
              var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
                node = _this$resolveArgument5[0];
              _this.addClass(node, "exit", "active");
              if (_this.props.onExiting) {
                _this.props.onExiting(maybeNode);
              }
            };
            _this.onExited = function (maybeNode) {
              var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
                node = _this$resolveArgument6[0];
              _this.removeClasses(node, "exit");
              _this.addClass(node, "exit", "done");
              if (_this.props.onExited) {
                _this.props.onExited(maybeNode);
              }
            };
            _this.resolveArguments = function (maybeNode, maybeAppearing) {
              return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] : [maybeNode, maybeAppearing];
            };
            _this.getClassNames = function (type) {
              var classNames = _this.props.classNames;
              var isStringClassNames = typeof classNames === "string";
              var prefix = isStringClassNames && classNames ? classNames + "-" : "";
              var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
              var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
              var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
              return {
                baseClassName,
                activeClassName,
                doneClassName
              };
            };
            return _this;
          }
          var _proto = CSSTransition2.prototype;
          _proto.addClass = function addClass2(node, type, phase) {
            var className = this.getClassNames(type)[phase + "ClassName"];
            var _this$getClassNames = this.getClassNames("enter"),
              doneClassName = _this$getClassNames.doneClassName;
            if (type === "appear" && phase === "done" && doneClassName) {
              className += " " + doneClassName;
            }
            if (phase === "active") {
              if (node) forceReflow(node);
            }
            if (className) {
              this.appliedClasses[type][phase] = className;
              _addClass(node, className);
            }
          };
          _proto.removeClasses = function removeClasses(node, type) {
            var _this$appliedClasses$ = this.appliedClasses[type],
              baseClassName = _this$appliedClasses$.base,
              activeClassName = _this$appliedClasses$.active,
              doneClassName = _this$appliedClasses$.done;
            this.appliedClasses[type] = {};
            if (baseClassName) {
              removeClass(node, baseClassName);
            }
            if (activeClassName) {
              removeClass(node, activeClassName);
            }
            if (doneClassName) {
              removeClass(node, doneClassName);
            }
          };
          _proto.render = function render() {
            var _this$props = this.props;
            _this$props.classNames;
            var props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);
            return /* @__PURE__ */React.createElement(Transition, _extends({}, props, {
              onEnter: this.onEnter,
              onEntered: this.onEntered,
              onEntering: this.onEntering,
              onExit: this.onExit,
              onExiting: this.onExiting,
              onExited: this.onExited
            }));
          };
          return CSSTransition2;
        }(React.Component);
        CSSTransition.defaultProps = {
          classNames: ""
        };
        CSSTransition.propTypes = {};
        function getDialogActionsUtilityClass(slot) {
          return generateUtilityClass('MuiDialogActions', slot);
        }
        generateUtilityClasses('MuiDialogActions', ['root', 'spacing']);
        const _excluded$m = ["className", "disableSpacing"];
        const useUtilityClasses$n = ownerState => {
          const classes = ownerState.classes,
            disableSpacing = ownerState.disableSpacing;
          const slots = {
            root: ["root", !disableSpacing && "spacing"]
          };
          return composeClasses(slots, getDialogActionsUtilityClass, classes);
        };
        const DialogActionsRoot = styled("div", {
          name: "MuiDialogActions",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.root, !ownerState.disableSpacing && styles.spacing];
          }
        })(({
          ownerState
        }) => _extends({
          display: "flex",
          alignItems: "center",
          padding: 8,
          justifyContent: "flex-end",
          flex: "0 0 auto"
        }, !ownerState.disableSpacing && {
          "& > :not(style) ~ :not(style)": {
            marginLeft: 8
          }
        }));
        const DialogActions = exports("q", /* @__PURE__ */reactExports.forwardRef(function DialogActions2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiDialogActions"
          });
          const className = props.className,
            _props$disableSpacing = props.disableSpacing,
            disableSpacing = _props$disableSpacing === void 0 ? false : _props$disableSpacing,
            other = _objectWithoutPropertiesLoose(props, _excluded$m);
          const ownerState = _extends({}, props, {
            disableSpacing
          });
          const classes = useUtilityClasses$n(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(DialogActionsRoot, _extends({
            className: clsx$1(classes.root, className),
            ownerState,
            ref
          }, other));
        }));
        const GridContext = /* @__PURE__ */reactExports.createContext();
        function getGridUtilityClass(slot) {
          return generateUtilityClass('MuiGrid', slot);
        }
        const SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const DIRECTIONS = ['column-reverse', 'column', 'row-reverse', 'row'];
        const WRAPS = ['nowrap', 'wrap-reverse', 'wrap'];
        const GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const gridClasses = generateUtilityClasses('MuiGrid', ['root', 'container', 'item', 'zeroMinWidth',
        // spacings
        ...SPACINGS.map(spacing => `spacing-xs-${spacing}`),
        // direction values
        ...DIRECTIONS.map(direction => `direction-xs-${direction}`),
        // wrap values
        ...WRAPS.map(wrap => `wrap-xs-${wrap}`),
        // grid sizes for all breakpoints
        ...GRID_SIZES.map(size => `grid-xs-${size}`), ...GRID_SIZES.map(size => `grid-sm-${size}`), ...GRID_SIZES.map(size => `grid-md-${size}`), ...GRID_SIZES.map(size => `grid-lg-${size}`), ...GRID_SIZES.map(size => `grid-xl-${size}`)]);
        const _excluded$l = ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "rowSpacing", "spacing", "wrap", "zeroMinWidth"];
        function getOffset(val) {
          const parse = parseFloat(val);
          return `${parse}${String(val).replace(String(parse), "") || "px"}`;
        }
        function generateGrid({
          theme,
          ownerState
        }) {
          let size;
          return theme.breakpoints.keys.reduce((globalStyles, breakpoint) => {
            let styles = {};
            if (ownerState[breakpoint]) {
              size = ownerState[breakpoint];
            }
            if (!size) {
              return globalStyles;
            }
            if (size === true) {
              styles = {
                flexBasis: 0,
                flexGrow: 1,
                maxWidth: "100%"
              };
            } else if (size === "auto") {
              styles = {
                flexBasis: "auto",
                flexGrow: 0,
                flexShrink: 0,
                maxWidth: "none",
                width: "auto"
              };
            } else {
              const columnsBreakpointValues = resolveBreakpointValues({
                values: ownerState.columns,
                breakpoints: theme.breakpoints.values
              });
              const columnValue = typeof columnsBreakpointValues === "object" ? columnsBreakpointValues[breakpoint] : columnsBreakpointValues;
              if (columnValue === void 0 || columnValue === null) {
                return globalStyles;
              }
              const width = `${Math.round(size / columnValue * 1e8) / 1e6}%`;
              let more = {};
              if (ownerState.container && ownerState.item && ownerState.columnSpacing !== 0) {
                const themeSpacing = theme.spacing(ownerState.columnSpacing);
                if (themeSpacing !== "0px") {
                  const fullWidth = `calc(${width} + ${getOffset(themeSpacing)})`;
                  more = {
                    flexBasis: fullWidth,
                    maxWidth: fullWidth
                  };
                }
              }
              styles = _extends({
                flexBasis: width,
                flexGrow: 0,
                maxWidth: width
              }, more);
            }
            if (theme.breakpoints.values[breakpoint] === 0) {
              Object.assign(globalStyles, styles);
            } else {
              globalStyles[theme.breakpoints.up(breakpoint)] = styles;
            }
            return globalStyles;
          }, {});
        }
        function generateDirection({
          theme,
          ownerState
        }) {
          const directionValues = resolveBreakpointValues({
            values: ownerState.direction,
            breakpoints: theme.breakpoints.values
          });
          return handleBreakpoints({
            theme
          }, directionValues, propValue => {
            const output = {
              flexDirection: propValue
            };
            if (propValue.indexOf("column") === 0) {
              output[`& > .${gridClasses.item}`] = {
                maxWidth: "none"
              };
            }
            return output;
          });
        }
        function extractZeroValueBreakpointKeys({
          breakpoints,
          values
        }) {
          let nonZeroKey = "";
          Object.keys(values).forEach(key => {
            if (nonZeroKey !== "") {
              return;
            }
            if (values[key] !== 0) {
              nonZeroKey = key;
            }
          });
          const sortedBreakpointKeysByValue = Object.keys(breakpoints).sort((a, b) => {
            return breakpoints[a] - breakpoints[b];
          });
          return sortedBreakpointKeysByValue.slice(0, sortedBreakpointKeysByValue.indexOf(nonZeroKey));
        }
        function generateRowGap({
          theme,
          ownerState
        }) {
          const container = ownerState.container,
            rowSpacing = ownerState.rowSpacing;
          let styles = {};
          if (container && rowSpacing !== 0) {
            const rowSpacingValues = resolveBreakpointValues({
              values: rowSpacing,
              breakpoints: theme.breakpoints.values
            });
            let zeroValueBreakpointKeys;
            if (typeof rowSpacingValues === "object") {
              zeroValueBreakpointKeys = extractZeroValueBreakpointKeys({
                breakpoints: theme.breakpoints.values,
                values: rowSpacingValues
              });
            }
            styles = handleBreakpoints({
              theme
            }, rowSpacingValues, (propValue, breakpoint) => {
              var _zeroValueBreakpointK;
              const themeSpacing = theme.spacing(propValue);
              if (themeSpacing !== "0px") {
                return {
                  marginTop: `-${getOffset(themeSpacing)}`,
                  [`& > .${gridClasses.item}`]: {
                    paddingTop: getOffset(themeSpacing)
                  }
                };
              }
              if ((_zeroValueBreakpointK = zeroValueBreakpointKeys) != null && _zeroValueBreakpointK.includes(breakpoint)) {
                return {};
              }
              return {
                marginTop: 0,
                [`& > .${gridClasses.item}`]: {
                  paddingTop: 0
                }
              };
            });
          }
          return styles;
        }
        function generateColumnGap({
          theme,
          ownerState
        }) {
          const container = ownerState.container,
            columnSpacing = ownerState.columnSpacing;
          let styles = {};
          if (container && columnSpacing !== 0) {
            const columnSpacingValues = resolveBreakpointValues({
              values: columnSpacing,
              breakpoints: theme.breakpoints.values
            });
            let zeroValueBreakpointKeys;
            if (typeof columnSpacingValues === "object") {
              zeroValueBreakpointKeys = extractZeroValueBreakpointKeys({
                breakpoints: theme.breakpoints.values,
                values: columnSpacingValues
              });
            }
            styles = handleBreakpoints({
              theme
            }, columnSpacingValues, (propValue, breakpoint) => {
              var _zeroValueBreakpointK2;
              const themeSpacing = theme.spacing(propValue);
              if (themeSpacing !== "0px") {
                return {
                  width: `calc(100% + ${getOffset(themeSpacing)})`,
                  marginLeft: `-${getOffset(themeSpacing)}`,
                  [`& > .${gridClasses.item}`]: {
                    paddingLeft: getOffset(themeSpacing)
                  }
                };
              }
              if ((_zeroValueBreakpointK2 = zeroValueBreakpointKeys) != null && _zeroValueBreakpointK2.includes(breakpoint)) {
                return {};
              }
              return {
                width: "100%",
                marginLeft: 0,
                [`& > .${gridClasses.item}`]: {
                  paddingLeft: 0
                }
              };
            });
          }
          return styles;
        }
        function resolveSpacingStyles(spacing, breakpoints, styles = {}) {
          if (!spacing || spacing <= 0) {
            return [];
          }
          if (typeof spacing === "string" && !Number.isNaN(Number(spacing)) || typeof spacing === "number") {
            return [styles[`spacing-xs-${String(spacing)}`]];
          }
          const spacingStyles = [];
          breakpoints.forEach(breakpoint => {
            const value = spacing[breakpoint];
            if (Number(value) > 0) {
              spacingStyles.push(styles[`spacing-${breakpoint}-${String(value)}`]);
            }
          });
          return spacingStyles;
        }
        const GridRoot = styled("div", {
          name: "MuiGrid",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            const container = ownerState.container,
              direction = ownerState.direction,
              item = ownerState.item,
              spacing = ownerState.spacing,
              wrap = ownerState.wrap,
              zeroMinWidth = ownerState.zeroMinWidth,
              breakpoints = ownerState.breakpoints;
            let spacingStyles = [];
            if (container) {
              spacingStyles = resolveSpacingStyles(spacing, breakpoints, styles);
            }
            const breakpointsStyles = [];
            breakpoints.forEach(breakpoint => {
              const value = ownerState[breakpoint];
              if (value) {
                breakpointsStyles.push(styles[`grid-${breakpoint}-${String(value)}`]);
              }
            });
            return [styles.root, container && styles.container, item && styles.item, zeroMinWidth && styles.zeroMinWidth, ...spacingStyles, direction !== "row" && styles[`direction-xs-${String(direction)}`], wrap !== "wrap" && styles[`wrap-xs-${String(wrap)}`], ...breakpointsStyles];
          }
        })(({
          ownerState
        }) => _extends({
          boxSizing: "border-box"
        }, ownerState.container && {
          display: "flex",
          flexWrap: "wrap",
          width: "100%"
        }, ownerState.item && {
          margin: 0
          // For instance, it's useful when used with a `figure` element.
        }, ownerState.zeroMinWidth && {
          minWidth: 0
        }, ownerState.wrap !== "wrap" && {
          flexWrap: ownerState.wrap
        }), generateDirection, generateRowGap, generateColumnGap, generateGrid);
        function resolveSpacingClasses(spacing, breakpoints) {
          if (!spacing || spacing <= 0) {
            return [];
          }
          if (typeof spacing === "string" && !Number.isNaN(Number(spacing)) || typeof spacing === "number") {
            return [`spacing-xs-${String(spacing)}`];
          }
          const classes = [];
          breakpoints.forEach(breakpoint => {
            const value = spacing[breakpoint];
            if (Number(value) > 0) {
              const className = `spacing-${breakpoint}-${String(value)}`;
              classes.push(className);
            }
          });
          return classes;
        }
        const useUtilityClasses$m = ownerState => {
          const classes = ownerState.classes,
            container = ownerState.container,
            direction = ownerState.direction,
            item = ownerState.item,
            spacing = ownerState.spacing,
            wrap = ownerState.wrap,
            zeroMinWidth = ownerState.zeroMinWidth,
            breakpoints = ownerState.breakpoints;
          let spacingClasses = [];
          if (container) {
            spacingClasses = resolveSpacingClasses(spacing, breakpoints);
          }
          const breakpointsClasses = [];
          breakpoints.forEach(breakpoint => {
            const value = ownerState[breakpoint];
            if (value) {
              breakpointsClasses.push(`grid-${breakpoint}-${String(value)}`);
            }
          });
          const slots = {
            root: ["root", container && "container", item && "item", zeroMinWidth && "zeroMinWidth", ...spacingClasses, direction !== "row" && `direction-xs-${String(direction)}`, wrap !== "wrap" && `wrap-xs-${String(wrap)}`, ...breakpointsClasses]
          };
          return composeClasses(slots, getGridUtilityClass, classes);
        };
        const Grid = exports("G", /* @__PURE__ */reactExports.forwardRef(function Grid2(inProps, ref) {
          const themeProps = useDefaultProps({
            props: inProps,
            name: "MuiGrid"
          });
          const _useTheme = useTheme(),
            breakpoints = _useTheme.breakpoints;
          const props = extendSxProp(themeProps);
          const className = props.className,
            columnsProp = props.columns,
            columnSpacingProp = props.columnSpacing,
            _props$component = props.component,
            component = _props$component === void 0 ? "div" : _props$component,
            _props$container = props.container,
            container = _props$container === void 0 ? false : _props$container,
            _props$direction = props.direction,
            direction = _props$direction === void 0 ? "row" : _props$direction,
            _props$item = props.item,
            item = _props$item === void 0 ? false : _props$item,
            rowSpacingProp = props.rowSpacing,
            _props$spacing = props.spacing,
            spacing = _props$spacing === void 0 ? 0 : _props$spacing,
            _props$wrap = props.wrap,
            wrap = _props$wrap === void 0 ? "wrap" : _props$wrap,
            _props$zeroMinWidth = props.zeroMinWidth,
            zeroMinWidth = _props$zeroMinWidth === void 0 ? false : _props$zeroMinWidth,
            other = _objectWithoutPropertiesLoose(props, _excluded$l);
          const rowSpacing = rowSpacingProp || spacing;
          const columnSpacing = columnSpacingProp || spacing;
          const columnsContext = reactExports.useContext(GridContext);
          const columns = container ? columnsProp || 12 : columnsContext;
          const breakpointsValues = {};
          const otherFiltered = _extends({}, other);
          breakpoints.keys.forEach(breakpoint => {
            if (other[breakpoint] != null) {
              breakpointsValues[breakpoint] = other[breakpoint];
              delete otherFiltered[breakpoint];
            }
          });
          const ownerState = _extends({}, props, {
            columns,
            container,
            direction,
            item,
            rowSpacing,
            columnSpacing,
            wrap,
            zeroMinWidth,
            spacing
          }, breakpointsValues, {
            breakpoints: breakpoints.keys
          });
          const classes = useUtilityClasses$m(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(GridContext.Provider, {
            value: columns,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(GridRoot, _extends({
              ownerState,
              className: clsx$1(classes.root, className),
              as: component,
              ref
            }, otherFiltered))
          });
        }));
        const ArrowDropDown = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M7 10l5 5 5-5z"
        }), 'ArrowDropDown');
        /**
         * @ignore - internal component.
         */

        const ArrowLeft = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
        }), 'ArrowLeft');
        /**
         * @ignore - internal component.
         */

        const ArrowRight = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
        }), 'ArrowRight');
        /**
         * @ignore - internal component.
         */

        const Calendar = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
        }), 'Calendar');
        /**
         * @ignore - internal component.
         */

        const Clock$1 = exports("C", createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsxs(reactExports.Fragment, {
          children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
            d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
          }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
            d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
          })]
        }), 'Clock'));
        /**
         * @ignore - internal component.
         */

        const DateRange = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
        }), 'DateRange');
        /**
         * @ignore - internal component.
         */

        const Pen = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
        }), 'Pen');
        /**
         * @ignore - internal component.
         */

        const Time = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsxs(reactExports.Fragment, {
          children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
            d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
          }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
            d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
          })]
        }), 'Time');
        const getPickersLocalization = pickersTranslations => {
          return {
            components: {
              MuiLocalizationProvider: {
                defaultProps: {
                  localeText: _extends({}, pickersTranslations)
                }
              }
            }
          };
        };
        const enUSPickers = {
          // Calendar navigation
          previousMonth: 'Previous month',
          nextMonth: 'Next month',
          // View navigation
          openPreviousView: 'open previous view',
          openNextView: 'open next view',
          calendarViewSwitchingButtonAriaLabel: view => view === 'year' ? 'year view is open, switch to calendar view' : 'calendar view is open, switch to year view',
          inputModeToggleButtonAriaLabel: (isKeyboardInputOpen, viewType) => isKeyboardInputOpen ? `text input view is open, go to ${viewType} view` : `${viewType} view is open, go to text input view`,
          // DateRange placeholders
          start: 'Start',
          end: 'End',
          // Action bar
          cancelButtonLabel: 'Cancel',
          clearButtonLabel: 'Clear',
          okButtonLabel: 'OK',
          todayButtonLabel: 'Today',
          // Toolbar titles
          datePickerDefaultToolbarTitle: 'Select date',
          dateTimePickerDefaultToolbarTitle: 'Select date & time',
          timePickerDefaultToolbarTitle: 'Select time',
          dateRangePickerDefaultToolbarTitle: 'Select date range',
          // Clock labels
          clockLabelText: (view, time, adapter) => `Select ${view}. ${time === null ? 'No time selected' : `Selected time is ${adapter.format(time, 'fullTime')}`}`,
          hoursClockNumberText: hours => `${hours} hours`,
          minutesClockNumberText: minutes => `${minutes} minutes`,
          secondsClockNumberText: seconds => `${seconds} seconds`,
          // Open picker labels
          openDatePickerDialogue: (rawValue, utils) => rawValue && utils.isValid(utils.date(rawValue)) ? `Choose date, selected date is ${utils.format(utils.date(rawValue), 'fullDate')}` : 'Choose date',
          openTimePickerDialogue: (rawValue, utils) => rawValue && utils.isValid(utils.date(rawValue)) ? `Choose time, selected time is ${utils.format(utils.date(rawValue), 'fullTime')}` : 'Choose time',
          // Table labels
          timeTableLabel: 'pick time',
          dateTableLabel: 'pick date'
        };
        const DEFAULT_LOCALE = enUSPickers;
        getPickersLocalization(enUSPickers);
        const MuiPickersAdapterContext = /* @__PURE__ */reactExports.createContext(null);
        function LocalizationProvider(inProps) {
          const props = useThemeProps({
            props: inProps,
            name: "MuiLocalizationProvider"
          });
          const children = props.children,
            Utils = props.dateAdapter,
            dateFormats = props.dateFormats,
            dateLibInstance = props.dateLibInstance,
            locale = props.locale,
            adapterLocale = props.adapterLocale,
            localeText = props.localeText;
          const utils = reactExports.useMemo(() => new Utils({
            locale: adapterLocale != null ? adapterLocale : locale,
            formats: dateFormats,
            instance: dateLibInstance
          }), [Utils, locale, adapterLocale, dateFormats, dateLibInstance]);
          const defaultDates = reactExports.useMemo(() => {
            return {
              minDate: utils.date("1900-01-01T00:00:00.000"),
              maxDate: utils.date("2099-12-31T00:00:00.000")
            };
          }, [utils]);
          const contextValue = reactExports.useMemo(() => {
            return {
              utils,
              defaultDates,
              localeText: _extends({}, DEFAULT_LOCALE, localeText != null ? localeText : {})
            };
          }, [defaultDates, utils, localeText]);
          return /* @__PURE__ */jsxRuntimeExports.jsx(MuiPickersAdapterContext.Provider, {
            value: contextValue,
            children
          });
        }
        const useLocalizationContext = () => {
          const localization = reactExports.useContext(MuiPickersAdapterContext);
          if (localization === null) {
            throw new Error('MUI: Can not find utils in context. It looks like you forgot to wrap your component in LocalizationProvider, or pass dateAdapter prop directly.');
          }
          return localization;
        };
        const useUtils = exports("a", () => useLocalizationContext().utils);
        const useDefaultDates = exports("m", () => useLocalizationContext().defaultDates);
        const useLocaleText = exports("b", () => useLocalizationContext().localeText);
        const useNow = () => {
          const utils = useUtils();
          const now = reactExports.useRef(utils.date());
          return now.current;
        };
        const findClosestEnabledDate = ({
          date,
          disableFuture,
          disablePast,
          maxDate,
          minDate,
          isDateDisabled,
          utils
        }) => {
          const today = utils.startOfDay(utils.date());
          if (disablePast && utils.isBefore(minDate, today)) {
            minDate = today;
          }
          if (disableFuture && utils.isAfter(maxDate, today)) {
            maxDate = today;
          }
          let forward = date;
          let backward = date;
          if (utils.isBefore(date, minDate)) {
            forward = utils.date(minDate);
            backward = null;
          }
          if (utils.isAfter(date, maxDate)) {
            if (backward) {
              backward = utils.date(maxDate);
            }
            forward = null;
          }
          while (forward || backward) {
            if (forward && utils.isAfter(forward, maxDate)) {
              forward = null;
            }
            if (backward && utils.isBefore(backward, minDate)) {
              backward = null;
            }
            if (forward) {
              if (!isDateDisabled(forward)) {
                return forward;
              }
              forward = utils.addDays(forward, 1);
            }
            if (backward) {
              if (!isDateDisabled(backward)) {
                return backward;
              }
              backward = utils.addDays(backward, -1);
            }
          }
          return null;
        };
        const parsePickerInputValue = exports("p", (utils, value) => {
          const parsedValue = utils.date(value);
          return utils.isValid(parsedValue) ? parsedValue : null;
        });
        const parseNonNullablePickerDate = exports("n", (utils, value, defaultValue) => {
          if (value == null) {
            return defaultValue;
          }
          const parsedValue = utils.date(value);
          const isDateValid = utils.isValid(parsedValue);
          if (isDateValid) {
            return parsedValue;
          }
          return defaultValue;
        });
        function r(e) {
          var t,
            f,
            n = "";
          if ("string" == typeof e || "number" == typeof e) n += e;else if ("object" == typeof e) if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);else for (t in e) e[t] && (n && (n += " "), n += t);
          return n;
        }
        function clsx() {
          for (var e, t, f = 0, n = ""; f < arguments.length;) (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
          return n;
        }
        function getPickersToolbarTextUtilityClass(slot) {
          // TODO v6: Rename 'PrivatePickersToolbarText' to 'MuiPickersToolbarText' to follow convention
          return generateUtilityClass('PrivatePickersToolbarText', slot);
        } // TODO v6: Rename 'PrivatePickersToolbarText' to 'MuiPickersToolbarText' to follow convention

        const pickersToolbarTextClasses = generateUtilityClasses('PrivatePickersToolbarText', ['root', 'selected']);
        const _excluded$k = ["className", "selected", "value"];
        const useUtilityClasses$l = ownerState => {
          const classes = ownerState.classes,
            selected = ownerState.selected;
          const slots = {
            root: ['root', selected && 'selected']
          };
          return composeClasses(slots, getPickersToolbarTextUtilityClass, classes);
        };
        const PickersToolbarTextRoot = styled(Typography, {
          name: 'PrivatePickersToolbarText',
          slot: 'Root',
          overridesResolver: (_, styles) => [styles.root, {
            [`&.${pickersToolbarTextClasses.selected}`]: styles.selected
          }]
        })(({
          theme
        }) => ({
          transition: theme.transitions.create('color'),
          color: theme.palette.text.secondary,
          [`&.${pickersToolbarTextClasses.selected}`]: {
            color: theme.palette.text.primary
          }
        }));
        const PickersToolbarText = exports("d", /*#__PURE__*/reactExports.forwardRef(function PickersToolbarText(props, ref) {
          // TODO v6: add 'useThemeProps' once the component class names are aligned
          const className = props.className,
            value = props.value,
            other = _objectWithoutPropertiesLoose(props, _excluded$k);
          const classes = useUtilityClasses$l(props);
          return /*#__PURE__*/jsxRuntimeExports.jsx(PickersToolbarTextRoot, _extends({
            ref: ref,
            className: clsx(className, classes.root),
            component: "span"
          }, other, {
            children: value
          }));
        }));
        function getPickersToolbarUtilityClass(slot) {
          return generateUtilityClass('MuiPickersToolbar', slot);
        }
        const pickersToolbarClasses = exports("c", generateUtilityClasses('MuiPickersToolbar', ['root', 'content', 'penIconButton', 'penIconButtonLandscape']));
        const _excluded$j = ["align", "className", "selected", "typographyClassName", "value", "variant"];
        const useUtilityClasses$k = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ['root']
          };
          return composeClasses(slots, getPickersToolbarUtilityClass, classes);
        };
        const PickersToolbarButtonRoot = styled(Button, {
          name: 'MuiPickersToolbarButton',
          slot: 'Root',
          overridesResolver: (_, styles) => styles.root
        })({
          padding: 0,
          minWidth: 16,
          textTransform: 'none'
        });
        const PickersToolbarButton = exports("g", /*#__PURE__*/reactExports.forwardRef(function PickersToolbarButton(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiPickersToolbarButton'
          });
          const align = props.align,
            className = props.className,
            selected = props.selected,
            typographyClassName = props.typographyClassName,
            value = props.value,
            variant = props.variant,
            other = _objectWithoutPropertiesLoose(props, _excluded$j);
          const classes = useUtilityClasses$k(props);
          return /*#__PURE__*/jsxRuntimeExports.jsx(PickersToolbarButtonRoot, _extends({
            variant: "text",
            ref: ref,
            className: clsx(className, classes.root)
          }, other, {
            children: /*#__PURE__*/jsxRuntimeExports.jsx(PickersToolbarText, {
              align: align,
              className: typographyClassName,
              variant: variant,
              value: value,
              selected: selected
            })
          }));
        }));
        const useUtilityClasses$j = ownerState => {
          const classes = ownerState.classes,
            isLandscape = ownerState.isLandscape;
          const slots = {
            root: ['root'],
            content: ['content'],
            penIconButton: ['penIconButton', isLandscape && 'penIconButtonLandscape']
          };
          return composeClasses(slots, getPickersToolbarUtilityClass, classes);
        };
        const PickersToolbarRoot = styled('div', {
          name: 'MuiPickersToolbar',
          slot: 'Root',
          overridesResolver: (props, styles) => styles.root
        })(({
          theme,
          ownerState
        }) => _extends({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: theme.spacing(2, 3)
        }, ownerState.isLandscape && {
          height: 'auto',
          maxWidth: 160,
          padding: 16,
          justifyContent: 'flex-start',
          flexWrap: 'wrap'
        }));
        const PickersToolbarContent = styled(Grid, {
          name: 'MuiPickersToolbar',
          slot: 'Content',
          overridesResolver: (props, styles) => styles.content
        })(({
          ownerState
        }) => _extends({
          flex: 1
        }, !ownerState.isLandscape && {
          alignItems: 'center'
        }));
        const PickersToolbarPenIconButton = styled(IconButton, {
          name: 'MuiPickersToolbar',
          slot: 'PenIconButton',
          overridesResolver: (props, styles) => [{
            [`&.${pickersToolbarClasses.penIconButtonLandscape}`]: styles.penIconButtonLandscape
          }, styles.penIconButton]
        })({});
        const getViewTypeIcon = viewType => viewType === 'clock' ? /*#__PURE__*/jsxRuntimeExports.jsx(Clock$1, {
          color: "inherit"
        }) : /*#__PURE__*/jsxRuntimeExports.jsx(Calendar, {
          color: "inherit"
        });
        const PickersToolbar = exports("P", /*#__PURE__*/reactExports.forwardRef(function PickersToolbar(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiPickersToolbar'
          });
          const children = props.children,
            className = props.className,
            getMobileKeyboardInputViewButtonText = props.getMobileKeyboardInputViewButtonText,
            isLandscape = props.isLandscape,
            isMobileKeyboardViewOpen = props.isMobileKeyboardViewOpen,
            _props$landscapeDirec = props.landscapeDirection,
            landscapeDirection = _props$landscapeDirec === void 0 ? 'column' : _props$landscapeDirec,
            toggleMobileKeyboardView = props.toggleMobileKeyboardView,
            toolbarTitle = props.toolbarTitle,
            _props$viewType = props.viewType,
            viewType = _props$viewType === void 0 ? 'calendar' : _props$viewType;
          const ownerState = props;
          const localeText = useLocaleText();
          const classes = useUtilityClasses$j(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsxs(PickersToolbarRoot, {
            ref: ref,
            className: clsx(classes.root, className),
            ownerState: ownerState,
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(Typography, {
              color: "text.secondary",
              variant: "overline",
              children: toolbarTitle
            }), /*#__PURE__*/jsxRuntimeExports.jsxs(PickersToolbarContent, {
              container: true,
              justifyContent: "space-between",
              className: classes.content,
              ownerState: ownerState,
              direction: isLandscape ? landscapeDirection : 'row',
              alignItems: isLandscape ? 'flex-start' : 'flex-end',
              children: [children, /*#__PURE__*/jsxRuntimeExports.jsx(PickersToolbarPenIconButton, {
                onClick: toggleMobileKeyboardView,
                className: classes.penIconButton,
                ownerState: ownerState,
                color: "inherit",
                "aria-label": getMobileKeyboardInputViewButtonText ? getMobileKeyboardInputViewButtonText(isMobileKeyboardViewOpen, viewType) : localeText.inputModeToggleButtonAriaLabel(isMobileKeyboardViewOpen, viewType),
                children: isMobileKeyboardViewOpen ? getViewTypeIcon(viewType) : /*#__PURE__*/jsxRuntimeExports.jsx(Pen, {
                  color: "inherit"
                })
              })]
            })]
          });
        }));

        /* Use it instead of .includes method for IE support */
        function arrayIncludes(array, itemOrItems) {
          if (Array.isArray(itemOrItems)) {
            return itemOrItems.every(item => array.indexOf(item) !== -1);
          }
          return array.indexOf(itemOrItems) !== -1;
        }
        const onSpaceOrEnter = (innerFn, onFocus) => event => {
          if (event.key === 'Enter' || event.key === ' ') {
            innerFn(event); // prevent any side effects

            event.preventDefault();
            event.stopPropagation();
          }
        };
        const getActiveElement = (root = document) => {
          const activeEl = root.activeElement;
          if (!activeEl) {
            return null;
          }
          if (activeEl.shadowRoot) {
            return getActiveElement(activeEl.shadowRoot);
          }
          return activeEl;
        };
        const getMeridiem = (date, utils) => {
          if (!date) {
            return null;
          }
          return utils.getHours(date) >= 12 ? 'pm' : 'am';
        };
        const convertValueToMeridiem = (value, meridiem, ampm) => {
          if (ampm) {
            const currentMeridiem = value >= 12 ? 'pm' : 'am';
            if (currentMeridiem !== meridiem) {
              return meridiem === 'am' ? value - 12 : value + 12;
            }
          }
          return value;
        };
        const convertToMeridiem = (time, meridiem, ampm, utils) => {
          const newHoursAmount = convertValueToMeridiem(utils.getHours(time), meridiem, ampm);
          return utils.setHours(time, newHoursAmount);
        };
        const getSecondsInDay = (date, utils) => {
          return utils.getHours(date) * 3600 + utils.getMinutes(date) * 60 + utils.getSeconds(date);
        };
        const createIsAfterIgnoreDatePart = (disableIgnoringDatePartForTimeValidation = false, utils) => (dateLeft, dateRight) => {
          if (disableIgnoringDatePartForTimeValidation) {
            return utils.isAfter(dateLeft, dateRight);
          }
          return getSecondsInDay(dateLeft, utils) > getSecondsInDay(dateRight, utils);
        };
        function useNextMonthDisabled(month, {
          disableFuture,
          maxDate
        }) {
          const utils = useUtils();
          return reactExports.useMemo(() => {
            const now = utils.date();
            const lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, maxDate) ? now : maxDate);
            return !utils.isAfter(lastEnabledMonth, month);
          }, [disableFuture, maxDate, month, utils]);
        }
        function usePreviousMonthDisabled(month, {
          disablePast,
          minDate
        }) {
          const utils = useUtils();
          return reactExports.useMemo(() => {
            const now = utils.date();
            const firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, minDate) ? now : minDate);
            return !utils.isBefore(firstEnabledMonth, month);
          }, [disablePast, minDate, month, utils]);
        }
        function useMeridiemMode(date, ampm, onChange) {
          const utils = useUtils();
          const meridiemMode = getMeridiem(date, utils);
          const handleMeridiemChange = reactExports.useCallback(mode => {
            const timeWithMeridiem = date == null ? null : convertToMeridiem(date, mode, Boolean(ampm), utils);
            onChange(timeWithMeridiem, 'partial');
          }, [ampm, date, onChange, utils]);
          return {
            meridiemMode,
            handleMeridiemChange
          };
        }

        /**
         * TODO consider getting rid from wrapper variant
         * @ignore - internal component.
         */
        const WrapperVariantContext = /*#__PURE__*/reactExports.createContext(null);
        const _excluded$i = ["onAccept", "onClear", "onCancel", "onSetToday", "actions"];
        const PickersActionBar = props => {
          const onAccept = props.onAccept,
            onClear = props.onClear,
            onCancel = props.onCancel,
            onSetToday = props.onSetToday,
            actions = props.actions,
            other = _objectWithoutPropertiesLoose(props, _excluded$i);
          const wrapperVariant = reactExports.useContext(WrapperVariantContext);
          const localeText = useLocaleText();
          const actionsArray = typeof actions === 'function' ? actions(wrapperVariant) : actions;
          if (actionsArray == null || actionsArray.length === 0) {
            return null;
          }
          const buttons = actionsArray == null ? void 0 : actionsArray.map(actionType => {
            switch (actionType) {
              case 'clear':
                return /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
                  onClick: onClear,
                  children: localeText.clearButtonLabel
                }, actionType);
              case 'cancel':
                return /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
                  onClick: onCancel,
                  children: localeText.cancelButtonLabel
                }, actionType);
              case 'accept':
                return /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
                  onClick: onAccept,
                  children: localeText.okButtonLabel
                }, actionType);
              case 'today':
                return /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
                  onClick: onSetToday,
                  children: localeText.todayButtonLabel
                }, actionType);
              default:
                return null;
            }
          });
          return /*#__PURE__*/jsxRuntimeExports.jsx(DialogActions, _extends({}, other, {
            children: buttons
          }));
        };
        function getPickersPopperUtilityClass(slot) {
          return generateUtilityClass('MuiPickersPopper', slot);
        }
        generateUtilityClasses('MuiPickersPopper', ['root', 'paper']);
        const _excluded$h = ["onClick", "onTouchStart"];
        const useUtilityClasses$i = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ['root'],
            paper: ['paper']
          };
          return composeClasses(slots, getPickersPopperUtilityClass, classes);
        };
        const PickersPopperRoot = styled(Popper, {
          name: 'MuiPickersPopper',
          slot: 'Root',
          overridesResolver: (_, styles) => styles.root
        })(({
          theme
        }) => ({
          zIndex: theme.zIndex.modal
        }));
        const PickersPopperPaper = styled(Paper, {
          name: 'MuiPickersPopper',
          slot: 'Paper',
          overridesResolver: (_, styles) => styles.paper
        })(({
          ownerState
        }) => _extends({
          transformOrigin: 'top center',
          outline: 0
        }, ownerState.placement === 'top' && {
          transformOrigin: 'bottom center'
        }));
        function clickedRootScrollbar(event, doc) {
          return doc.documentElement.clientWidth < event.clientX || doc.documentElement.clientHeight < event.clientY;
        }

        /**
         * Based on @mui/material/ClickAwayListener without the customization.
         * We can probably strip away even more since children won't be portaled.
         * @param {boolean} active Only listen to clicks when the popper is opened.
         * @param {(event: MouseEvent | TouchEvent) => void} onClickAway The callback to call when clicking outside the popper.
         * @returns {Array} The ref and event handler to listen to the outside clicks.
         */
        function useClickAwayListener(active, onClickAway) {
          const movedRef = reactExports.useRef(false);
          const syntheticEventRef = reactExports.useRef(false);
          const nodeRef = reactExports.useRef(null);
          const activatedRef = reactExports.useRef(false);
          reactExports.useEffect(() => {
            if (!active) {
              return undefined;
            } // Ensure that this hook is not "activated" synchronously.
            // https://github.com/facebook/react/issues/20074

            function armClickAwayListener() {
              activatedRef.current = true;
            }
            document.addEventListener('mousedown', armClickAwayListener, true);
            document.addEventListener('touchstart', armClickAwayListener, true);
            return () => {
              document.removeEventListener('mousedown', armClickAwayListener, true);
              document.removeEventListener('touchstart', armClickAwayListener, true);
              activatedRef.current = false;
            };
          }, [active]); // The handler doesn't take event.defaultPrevented into account:
          //
          // event.preventDefault() is meant to stop default behaviors like
          // clicking a checkbox to check it, hitting a button to submit a form,
          // and hitting left arrow to move the cursor in a text input etc.
          // Only special HTML elements have these default behaviors.

          const handleClickAway = useEventCallback(event => {
            if (!activatedRef.current) {
              return;
            } // Given developers can stop the propagation of the synthetic event,
            // we can only be confident with a positive value.

            const insideReactTree = syntheticEventRef.current;
            syntheticEventRef.current = false;
            const doc = ownerDocument(nodeRef.current); // 1. IE11 support, which trigger the handleClickAway even after the unbind
            // 2. The child might render null.
            // 3. Behave like a blur listener.

            if (!nodeRef.current ||
            // is a TouchEvent?
            'clientX' in event && clickedRootScrollbar(event, doc)) {
              return;
            } // Do not act if user performed touchmove

            if (movedRef.current) {
              movedRef.current = false;
              return;
            }
            let insideDOM; // If not enough, can use https://github.com/DieterHolvoet/event-propagation-path/blob/master/propagationPath.js

            if (event.composedPath) {
              insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
            } else {
              insideDOM = !doc.documentElement.contains(event.target) || nodeRef.current.contains(event.target);
            }
            if (!insideDOM && !insideReactTree) {
              onClickAway(event);
            }
          }); // Keep track of mouse/touch events that bubbled up through the portal.

          const handleSynthetic = () => {
            syntheticEventRef.current = true;
          };
          reactExports.useEffect(() => {
            if (active) {
              const doc = ownerDocument(nodeRef.current);
              const handleTouchMove = () => {
                movedRef.current = true;
              };
              doc.addEventListener('touchstart', handleClickAway);
              doc.addEventListener('touchmove', handleTouchMove);
              return () => {
                doc.removeEventListener('touchstart', handleClickAway);
                doc.removeEventListener('touchmove', handleTouchMove);
              };
            }
            return undefined;
          }, [active, handleClickAway]);
          reactExports.useEffect(() => {
            // TODO This behavior is not tested automatically
            // It's unclear whether this is due to different update semantics in test (batched in act() vs discrete on click).
            // Or if this is a timing related issues due to different Transition components
            // Once we get rid of all the manual scheduling (e.g. setTimeout(update, 0)) we can revisit this code+test.
            if (active) {
              const doc = ownerDocument(nodeRef.current);
              doc.addEventListener('click', handleClickAway);
              return () => {
                doc.removeEventListener('click', handleClickAway); // cleanup `handleClickAway`

                syntheticEventRef.current = false;
              };
            }
            return undefined;
          }, [active, handleClickAway]);
          return [nodeRef, handleSynthetic, handleSynthetic];
        }
        function PickersPopper(inProps) {
          var _components$ActionBar;
          const props = useThemeProps({
            props: inProps,
            name: 'MuiPickersPopper'
          });
          const anchorEl = props.anchorEl,
            _children = props.children,
            _props$containerRef = props.containerRef,
            containerRef = _props$containerRef === void 0 ? null : _props$containerRef,
            onBlur = props.onBlur,
            onClose = props.onClose,
            onClear = props.onClear,
            onAccept = props.onAccept,
            onCancel = props.onCancel,
            onSetToday = props.onSetToday,
            open = props.open,
            PopperProps = props.PopperProps,
            role = props.role,
            _props$TransitionComp = props.TransitionComponent,
            TransitionComponent = _props$TransitionComp === void 0 ? Grow : _props$TransitionComp,
            TrapFocusProps = props.TrapFocusProps,
            _props$PaperProps = props.PaperProps,
            PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
            components = props.components,
            componentsProps = props.componentsProps;
          reactExports.useEffect(() => {
            function handleKeyDown(nativeEvent) {
              // IE11, Edge (prior to using Bink?) use 'Esc'
              if (open && (nativeEvent.key === 'Escape' || nativeEvent.key === 'Esc')) {
                onClose();
              }
            }
            document.addEventListener('keydown', handleKeyDown);
            return () => {
              document.removeEventListener('keydown', handleKeyDown);
            };
          }, [onClose, open]);
          const lastFocusedElementRef = reactExports.useRef(null);
          reactExports.useEffect(() => {
            if (role === 'tooltip') {
              return;
            }
            if (open) {
              lastFocusedElementRef.current = getActiveElement(document);
            } else if (lastFocusedElementRef.current && lastFocusedElementRef.current instanceof HTMLElement) {
              // make sure the button is flushed with updated label, before returning focus to it
              // avoids issue, where screen reader could fail to announce selected date after selection
              setTimeout(() => {
                if (lastFocusedElementRef.current instanceof HTMLElement) {
                  lastFocusedElementRef.current.focus();
                }
              });
            }
          }, [open, role]);
          const _useClickAwayListener = useClickAwayListener(open, onBlur != null ? onBlur : onClose),
            _useClickAwayListener2 = _slicedToArray(_useClickAwayListener, 3),
            clickAwayRef = _useClickAwayListener2[0],
            onPaperClick = _useClickAwayListener2[1],
            onPaperTouchStart = _useClickAwayListener2[2];
          const paperRef = reactExports.useRef(null);
          const handleRef = useForkRef(paperRef, containerRef);
          const handlePaperRef = useForkRef(handleRef, clickAwayRef);
          const ownerState = props;
          const classes = useUtilityClasses$i(ownerState);
          const onPaperClickProp = PaperProps.onClick,
            onPaperTouchStartProp = PaperProps.onTouchStart,
            otherPaperProps = _objectWithoutPropertiesLoose(PaperProps, _excluded$h);
          const handleKeyDown = event => {
            if (event.key === 'Escape') {
              // stop the propagation to avoid closing parent modal
              event.stopPropagation();
              onClose();
            }
          };
          const ActionBar = (_components$ActionBar = components == null ? void 0 : components.ActionBar) != null ? _components$ActionBar : PickersActionBar;
          const PaperContent = (components == null ? void 0 : components.PaperContent) || reactExports.Fragment;
          return /*#__PURE__*/jsxRuntimeExports.jsx(PickersPopperRoot, _extends({
            transition: true,
            role: role,
            open: open,
            anchorEl: anchorEl,
            onKeyDown: handleKeyDown,
            className: classes.root
          }, PopperProps, {
            children: ({
              TransitionProps,
              placement
            }) => /*#__PURE__*/jsxRuntimeExports.jsx(FocusTrap, _extends({
              open: open,
              disableAutoFocus: true // pickers are managing focus position manually
              // without this prop the focus is returned to the button before `aria-label` is updated
              // which would force screen readers to read too old label
              ,

              disableRestoreFocus: true,
              disableEnforceFocus: role === 'tooltip',
              isEnabled: () => true
            }, TrapFocusProps, {
              children: /*#__PURE__*/jsxRuntimeExports.jsx(TransitionComponent, _extends({}, TransitionProps, {
                children: /*#__PURE__*/jsxRuntimeExports.jsx(PickersPopperPaper, _extends({
                  tabIndex: -1,
                  elevation: 8,
                  ref: handlePaperRef,
                  onClick: event => {
                    onPaperClick(event);
                    if (onPaperClickProp) {
                      onPaperClickProp(event);
                    }
                  },
                  onTouchStart: event => {
                    onPaperTouchStart(event);
                    if (onPaperTouchStartProp) {
                      onPaperTouchStartProp(event);
                    }
                  },
                  ownerState: _extends({}, ownerState, {
                    placement
                  }),
                  className: classes.paper
                }, otherPaperProps, {
                  children: /*#__PURE__*/jsxRuntimeExports.jsxs(PaperContent, _extends({}, componentsProps == null ? void 0 : componentsProps.paperContent, {
                    children: [_children, /*#__PURE__*/jsxRuntimeExports.jsx(ActionBar, _extends({
                      onAccept: onAccept,
                      onClear: onClear,
                      onCancel: onCancel,
                      onSetToday: onSetToday,
                      actions: []
                    }, componentsProps == null ? void 0 : componentsProps.actionBar))]
                  }))
                }))
              }))
            }))
          }));
        }
        function DesktopWrapper(props) {
          const children = props.children,
            DateInputProps = props.DateInputProps,
            KeyboardDateInputComponent = props.KeyboardDateInputComponent,
            onClear = props.onClear,
            onDismiss = props.onDismiss,
            onCancel = props.onCancel,
            onAccept = props.onAccept,
            onSetToday = props.onSetToday,
            open = props.open,
            PopperProps = props.PopperProps,
            PaperProps = props.PaperProps,
            TransitionComponent = props.TransitionComponent,
            components = props.components,
            componentsProps = props.componentsProps;
          const ownInputRef = reactExports.useRef(null);
          const inputRef = useForkRef(DateInputProps.inputRef, ownInputRef);
          return /*#__PURE__*/jsxRuntimeExports.jsxs(WrapperVariantContext.Provider, {
            value: "desktop",
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(KeyboardDateInputComponent, _extends({}, DateInputProps, {
              inputRef: inputRef
            })), /*#__PURE__*/jsxRuntimeExports.jsx(PickersPopper, {
              role: "dialog",
              open: open,
              anchorEl: ownInputRef.current,
              TransitionComponent: TransitionComponent,
              PopperProps: PopperProps,
              PaperProps: PaperProps,
              onClose: onDismiss,
              onCancel: onCancel,
              onClear: onClear,
              onAccept: onAccept,
              onSetToday: onSetToday,
              components: components,
              componentsProps: componentsProps,
              children: children
            })]
          });
        }
        function useViews({
          onChange,
          onViewChange,
          openTo,
          view,
          views
        }) {
          var _views, _views2;
          const _useControlled = useControlled({
              name: 'Picker',
              state: 'view',
              controlled: view,
              default: openTo && arrayIncludes(views, openTo) ? openTo : views[0]
            }),
            _useControlled2 = _slicedToArray(_useControlled, 2),
            openView = _useControlled2[0],
            setOpenView = _useControlled2[1];
          const previousView = (_views = views[views.indexOf(openView) - 1]) != null ? _views : null;
          const nextView = (_views2 = views[views.indexOf(openView) + 1]) != null ? _views2 : null;
          const changeView = reactExports.useCallback(newView => {
            setOpenView(newView);
            if (onViewChange) {
              onViewChange(newView);
            }
          }, [setOpenView, onViewChange]);
          const openNext = reactExports.useCallback(() => {
            if (nextView) {
              changeView(nextView);
            }
          }, [nextView, changeView]);
          const handleChangeAndOpenNext = reactExports.useCallback((date, currentViewSelectionState) => {
            const isSelectionFinishedOnCurrentView = currentViewSelectionState === 'finish';
            const globalSelectionState = isSelectionFinishedOnCurrentView && Boolean(nextView) ? 'partial' : currentViewSelectionState;
            onChange(date, globalSelectionState);
            if (isSelectionFinishedOnCurrentView) {
              openNext();
            }
          }, [nextView, onChange, openNext]);
          return {
            handleChangeAndOpenNext,
            nextView,
            previousView,
            openNext,
            openView,
            setOpenView: changeView
          };
        }
        const CLOCK_WIDTH = 220;
        const CLOCK_HOUR_WIDTH = 36;
        const clockCenter = {
          x: CLOCK_WIDTH / 2,
          y: CLOCK_WIDTH / 2
        };
        const baseClockPoint = {
          x: clockCenter.x,
          y: 0
        };
        const cx = baseClockPoint.x - clockCenter.x;
        const cy = baseClockPoint.y - clockCenter.y;
        const rad2deg = rad => rad * (180 / Math.PI);
        const getAngleValue = (step, offsetX, offsetY) => {
          const x = offsetX - clockCenter.x;
          const y = offsetY - clockCenter.y;
          const atan = Math.atan2(cx, cy) - Math.atan2(x, y);
          let deg = rad2deg(atan);
          deg = Math.round(deg / step) * step;
          deg %= 360;
          const value = Math.floor(deg / step) || 0;
          const delta = Math.pow(x, 2) + Math.pow(y, 2);
          const distance = Math.sqrt(delta);
          return {
            value,
            distance
          };
        };
        const getMinutes = (offsetX, offsetY, step = 1) => {
          const angleStep = step * 6;
          let _getAngleValue = getAngleValue(angleStep, offsetX, offsetY),
            value = _getAngleValue.value;
          value = value * step % 60;
          return value;
        };
        const getHours = (offsetX, offsetY, ampm) => {
          const _getAngleValue2 = getAngleValue(30, offsetX, offsetY),
            value = _getAngleValue2.value,
            distance = _getAngleValue2.distance;
          let hour = value || 12;
          if (!ampm) {
            if (distance < CLOCK_WIDTH / 2 - CLOCK_HOUR_WIDTH) {
              hour += 12;
              hour %= 24;
            }
          } else {
            hour %= 12;
          }
          return hour;
        };
        function getClockPointerUtilityClass(slot) {
          return generateUtilityClass('MuiClockPointer', slot);
        }
        generateUtilityClasses('MuiClockPointer', ['root', 'thumb']);
        const _excluded$g = ["className", "hasSelected", "isInner", "type", "value"];
        const useUtilityClasses$h = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ['root'],
            thumb: ['thumb']
          };
          return composeClasses(slots, getClockPointerUtilityClass, classes);
        };
        const ClockPointerRoot = styled('div', {
          name: 'MuiClockPointer',
          slot: 'Root',
          overridesResolver: (_, styles) => styles.root
        })(({
          theme,
          ownerState
        }) => _extends({
          width: 2,
          backgroundColor: theme.palette.primary.main,
          position: 'absolute',
          left: 'calc(50% - 1px)',
          bottom: '50%',
          transformOrigin: 'center bottom 0px'
        }, ownerState.shouldAnimate && {
          transition: theme.transitions.create(['transform', 'height'])
        }));
        const ClockPointerThumb = styled('div', {
          name: 'MuiClockPointer',
          slot: 'Thumb',
          overridesResolver: (_, styles) => styles.thumb
        })(({
          theme,
          ownerState
        }) => _extends({
          width: 4,
          height: 4,
          backgroundColor: theme.palette.primary.contrastText,
          borderRadius: '50%',
          position: 'absolute',
          top: -21,
          left: `calc(50% - ${CLOCK_HOUR_WIDTH / 2}px)`,
          border: `${(CLOCK_HOUR_WIDTH - 4) / 2}px solid ${theme.palette.primary.main}`,
          boxSizing: 'content-box'
        }, ownerState.hasSelected && {
          backgroundColor: theme.palette.primary.main
        }));
        /**
         * @ignore - internal component.
         */

        function ClockPointer(inProps) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiClockPointer'
          });
          const className = props.className,
            isInner = props.isInner,
            type = props.type,
            value = props.value,
            other = _objectWithoutPropertiesLoose(props, _excluded$g);
          const previousType = reactExports.useRef(type);
          reactExports.useEffect(() => {
            previousType.current = type;
          }, [type]);
          const ownerState = _extends({}, props, {
            shouldAnimate: previousType.current !== type
          });
          const classes = useUtilityClasses$h(ownerState);
          const getAngleStyle = () => {
            const max = type === 'hours' ? 12 : 60;
            let angle = 360 / max * value;
            if (type === 'hours' && value > 12) {
              angle -= 360; // round up angle to max 360 degrees
            }
            return {
              height: Math.round((isInner ? 0.26 : 0.4) * CLOCK_WIDTH),
              transform: `rotateZ(${angle}deg)`
            };
          };
          return /*#__PURE__*/jsxRuntimeExports.jsx(ClockPointerRoot, _extends({
            style: getAngleStyle(),
            className: clsx(className, classes.root),
            ownerState: ownerState
          }, other, {
            children: /*#__PURE__*/jsxRuntimeExports.jsx(ClockPointerThumb, {
              ownerState: ownerState,
              className: classes.thumb
            })
          }));
        }
        function getClockUtilityClass(slot) {
          return generateUtilityClass('MuiClock', slot);
        }
        generateUtilityClasses('MuiClock', ['root', 'clock', 'wrapper', 'squareMask', 'pin', 'amButton', 'pmButton']);
        const useUtilityClasses$g = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ['root'],
            clock: ['clock'],
            wrapper: ['wrapper'],
            squareMask: ['squareMask'],
            pin: ['pin'],
            amButton: ['amButton'],
            pmButton: ['pmButton']
          };
          return composeClasses(slots, getClockUtilityClass, classes);
        };
        const ClockRoot = styled('div', {
          name: 'MuiClock',
          slot: 'Root',
          overridesResolver: (_, styles) => styles.root
        })(({
          theme
        }) => ({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: theme.spacing(2)
        }));
        const ClockClock = styled('div', {
          name: 'MuiClock',
          slot: 'Clock',
          overridesResolver: (_, styles) => styles.clock
        })({
          backgroundColor: 'rgba(0,0,0,.07)',
          borderRadius: '50%',
          height: 220,
          width: 220,
          flexShrink: 0,
          position: 'relative',
          pointerEvents: 'none'
        });
        const ClockWrapper = styled('div', {
          name: 'MuiClock',
          slot: 'Wrapper',
          overridesResolver: (_, styles) => styles.wrapper
        })({
          '&:focus': {
            outline: 'none'
          }
        });
        const ClockSquareMask = styled('div', {
          name: 'MuiClock',
          slot: 'SquareMask',
          overridesResolver: (_, styles) => styles.squareMask
        })(({
          ownerState
        }) => _extends({
          width: '100%',
          height: '100%',
          position: 'absolute',
          pointerEvents: 'auto',
          outline: 0,
          // Disable scroll capabilities.
          touchAction: 'none',
          userSelect: 'none'
        }, ownerState.disabled ? {} : {
          '@media (pointer: fine)': {
            cursor: 'pointer',
            borderRadius: '50%'
          },
          '&:active': {
            cursor: 'move'
          }
        }));
        const ClockPin = styled('div', {
          name: 'MuiClock',
          slot: 'Pin',
          overridesResolver: (_, styles) => styles.pin
        })(({
          theme
        }) => ({
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: theme.palette.primary.main,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }));
        const ClockAmButton = styled(IconButton, {
          name: 'MuiClock',
          slot: 'AmButton',
          overridesResolver: (_, styles) => styles.amButton
        })(({
          theme,
          ownerState
        }) => _extends({
          zIndex: 1,
          position: 'absolute',
          bottom: ownerState.ampmInClock ? 64 : 8,
          left: 8
        }, ownerState.meridiemMode === 'am' && {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          '&:hover': {
            backgroundColor: theme.palette.primary.light
          }
        }));
        const ClockPmButton = styled(IconButton, {
          name: 'MuiClock',
          slot: 'PmButton',
          overridesResolver: (_, styles) => styles.pmButton
        })(({
          theme,
          ownerState
        }) => _extends({
          zIndex: 1,
          position: 'absolute',
          bottom: ownerState.ampmInClock ? 64 : 8,
          right: 8
        }, ownerState.meridiemMode === 'pm' && {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          '&:hover': {
            backgroundColor: theme.palette.primary.light
          }
        }));
        /**
         * @ignore - internal component.
         */

        function Clock(inProps) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiClock'
          });
          const ampm = props.ampm,
            ampmInClock = props.ampmInClock,
            autoFocus = props.autoFocus,
            children = props.children,
            date = props.date,
            getClockLabelText = props.getClockLabelText,
            handleMeridiemChange = props.handleMeridiemChange,
            isTimeDisabled = props.isTimeDisabled,
            meridiemMode = props.meridiemMode,
            _props$minutesStep = props.minutesStep,
            minutesStep = _props$minutesStep === void 0 ? 1 : _props$minutesStep,
            onChange = props.onChange,
            selectedId = props.selectedId,
            type = props.type,
            value = props.value,
            disabled = props.disabled,
            readOnly = props.readOnly,
            className = props.className;
          const ownerState = props;
          const utils = useUtils();
          const wrapperVariant = reactExports.useContext(WrapperVariantContext);
          const isMoving = reactExports.useRef(false);
          const classes = useUtilityClasses$g(ownerState);
          const isSelectedTimeDisabled = isTimeDisabled(value, type);
          const isPointerInner = !ampm && type === 'hours' && (value < 1 || value > 12);
          const handleValueChange = (newValue, isFinish) => {
            if (disabled || readOnly) {
              return;
            }
            if (isTimeDisabled(newValue, type)) {
              return;
            }
            onChange(newValue, isFinish);
          };
          const setTime = (event, isFinish) => {
            let offsetX = event.offsetX,
              offsetY = event.offsetY;
            if (offsetX === undefined) {
              const rect = event.target.getBoundingClientRect();
              offsetX = event.changedTouches[0].clientX - rect.left;
              offsetY = event.changedTouches[0].clientY - rect.top;
            }
            const newSelectedValue = type === 'seconds' || type === 'minutes' ? getMinutes(offsetX, offsetY, minutesStep) : getHours(offsetX, offsetY, Boolean(ampm));
            handleValueChange(newSelectedValue, isFinish);
          };
          const handleTouchMove = event => {
            isMoving.current = true;
            setTime(event, 'shallow');
          };
          const handleTouchEnd = event => {
            if (isMoving.current) {
              setTime(event, 'finish');
              isMoving.current = false;
            }
          };
          const handleMouseMove = event => {
            // event.buttons & PRIMARY_MOUSE_BUTTON
            if (event.buttons > 0) {
              setTime(event.nativeEvent, 'shallow');
            }
          };
          const handleMouseUp = event => {
            if (isMoving.current) {
              isMoving.current = false;
            }
            setTime(event.nativeEvent, 'finish');
          };
          const hasSelected = reactExports.useMemo(() => {
            if (type === 'hours') {
              return true;
            }
            return value % 5 === 0;
          }, [type, value]);
          const keyboardControlStep = type === 'minutes' ? minutesStep : 1;
          const listboxRef = reactExports.useRef(null); // Since this is rendered when a Popper is opened we can't use passive effects.
          // Focusing in passive effects in Popper causes scroll jump.

          useEnhancedEffect(() => {
            if (autoFocus) {
              // The ref not being resolved would be a bug in MUI.
              listboxRef.current.focus();
            }
          }, [autoFocus]);
          const handleKeyDown = event => {
            // TODO: Why this early exit?
            if (isMoving.current) {
              return;
            }
            switch (event.key) {
              case 'Home':
                // annulate both hours and minutes
                handleValueChange(0, 'partial');
                event.preventDefault();
                break;
              case 'End':
                handleValueChange(type === 'minutes' ? 59 : 23, 'partial');
                event.preventDefault();
                break;
              case 'ArrowUp':
                handleValueChange(value + keyboardControlStep, 'partial');
                event.preventDefault();
                break;
              case 'ArrowDown':
                handleValueChange(value - keyboardControlStep, 'partial');
                event.preventDefault();
                break;
            }
          };
          return /*#__PURE__*/jsxRuntimeExports.jsxs(ClockRoot, {
            className: clsx(className, classes.root),
            children: [/*#__PURE__*/jsxRuntimeExports.jsxs(ClockClock, {
              className: classes.clock,
              children: [/*#__PURE__*/jsxRuntimeExports.jsx(ClockSquareMask, {
                onTouchMove: handleTouchMove,
                onTouchEnd: handleTouchEnd,
                onMouseUp: handleMouseUp,
                onMouseMove: handleMouseMove,
                ownerState: {
                  disabled
                },
                className: classes.squareMask
              }), !isSelectedTimeDisabled && /*#__PURE__*/jsxRuntimeExports.jsxs(reactExports.Fragment, {
                children: [/*#__PURE__*/jsxRuntimeExports.jsx(ClockPin, {
                  className: classes.pin
                }), date && /*#__PURE__*/jsxRuntimeExports.jsx(ClockPointer, {
                  type: type,
                  value: value,
                  isInner: isPointerInner,
                  hasSelected: hasSelected
                })]
              }), /*#__PURE__*/jsxRuntimeExports.jsx(ClockWrapper, {
                "aria-activedescendant": selectedId,
                "aria-label": getClockLabelText(type, date, utils),
                ref: listboxRef,
                role: "listbox",
                onKeyDown: handleKeyDown,
                tabIndex: 0,
                className: classes.wrapper,
                children: children
              })]
            }), ampm && (wrapperVariant === 'desktop' || ampmInClock) && /*#__PURE__*/jsxRuntimeExports.jsxs(reactExports.Fragment, {
              children: [/*#__PURE__*/jsxRuntimeExports.jsx(ClockAmButton, {
                onClick: readOnly ? undefined : () => handleMeridiemChange('am'),
                disabled: disabled || meridiemMode === null,
                ownerState: ownerState,
                className: classes.amButton,
                children: /*#__PURE__*/jsxRuntimeExports.jsx(Typography, {
                  variant: "caption",
                  children: "AM"
                })
              }), /*#__PURE__*/jsxRuntimeExports.jsx(ClockPmButton, {
                disabled: disabled || meridiemMode === null,
                onClick: readOnly ? undefined : () => handleMeridiemChange('pm'),
                ownerState: ownerState,
                className: classes.pmButton,
                children: /*#__PURE__*/jsxRuntimeExports.jsx(Typography, {
                  variant: "caption",
                  children: "PM"
                })
              })]
            })]
          });
        }
        const buildDeprecatedPropsWarning = message => {
          {
            return () => {};
          }
        };
        function getClockNumberUtilityClass(slot) {
          return generateUtilityClass('MuiClockNumber', slot);
        }
        const clockNumberClasses = generateUtilityClasses('MuiClockNumber', ['root', 'selected', 'disabled']);
        const _excluded$f = ["className", "disabled", "index", "inner", "label", "selected"];
        const useUtilityClasses$f = ownerState => {
          const classes = ownerState.classes,
            selected = ownerState.selected,
            disabled = ownerState.disabled;
          const slots = {
            root: ['root', selected && 'selected', disabled && 'disabled']
          };
          return composeClasses(slots, getClockNumberUtilityClass, classes);
        };
        const ClockNumberRoot = styled('span', {
          name: 'MuiClockNumber',
          slot: 'Root',
          overridesResolver: (_, styles) => [styles.root, {
            [`&.${clockNumberClasses.disabled}`]: styles.disabled
          }, {
            [`&.${clockNumberClasses.selected}`]: styles.selected
          }]
        })(({
          theme,
          ownerState
        }) => _extends({
          height: CLOCK_HOUR_WIDTH,
          width: CLOCK_HOUR_WIDTH,
          position: 'absolute',
          left: `calc((100% - ${CLOCK_HOUR_WIDTH}px) / 2)`,
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
          color: theme.palette.text.primary,
          fontFamily: theme.typography.fontFamily,
          '&:focused': {
            backgroundColor: theme.palette.background.paper
          },
          [`&.${clockNumberClasses.selected}`]: {
            color: theme.palette.primary.contrastText
          },
          [`&.${clockNumberClasses.disabled}`]: {
            pointerEvents: 'none',
            color: theme.palette.text.disabled
          }
        }, ownerState.inner && _extends({}, theme.typography.body2, {
          color: theme.palette.text.secondary
        })));
        /**
         * @ignore - internal component.
         */

        function ClockNumber(inProps) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiClockNumber'
          });
          const className = props.className,
            disabled = props.disabled,
            index = props.index,
            inner = props.inner,
            label = props.label,
            selected = props.selected,
            other = _objectWithoutPropertiesLoose(props, _excluded$f);
          const ownerState = props;
          const classes = useUtilityClasses$f(ownerState);
          const angle = index % 12 / 12 * Math.PI * 2 - Math.PI / 2;
          const length = (CLOCK_WIDTH - CLOCK_HOUR_WIDTH - 2) / 2 * (inner ? 0.65 : 1);
          const x = Math.round(Math.cos(angle) * length);
          const y = Math.round(Math.sin(angle) * length);
          return /*#__PURE__*/jsxRuntimeExports.jsx(ClockNumberRoot, _extends({
            className: clsx(className, classes.root),
            "aria-disabled": disabled ? true : undefined,
            "aria-selected": selected ? true : undefined,
            role: "option",
            style: {
              transform: `translate(${x}px, ${y + (CLOCK_WIDTH - CLOCK_HOUR_WIDTH) / 2}px`
            },
            ownerState: ownerState
          }, other, {
            children: label
          }));
        }

        /**
         * @ignore - internal component.
         */
        const getHourNumbers = ({
          ampm,
          date,
          getClockNumberText,
          isDisabled,
          selectedId,
          utils
        }) => {
          const currentHours = date ? utils.getHours(date) : null;
          const hourNumbers = [];
          const startHour = ampm ? 1 : 0;
          const endHour = ampm ? 12 : 23;
          const isSelected = hour => {
            if (currentHours === null) {
              return false;
            }
            if (ampm) {
              if (hour === 12) {
                return currentHours === 12 || currentHours === 0;
              }
              return currentHours === hour || currentHours - 12 === hour;
            }
            return currentHours === hour;
          };
          for (let hour = startHour; hour <= endHour; hour += 1) {
            let label = hour.toString();
            if (hour === 0) {
              label = '00';
            }
            const inner = !ampm && (hour === 0 || hour > 12);
            label = utils.formatNumber(label);
            const selected = isSelected(hour);
            hourNumbers.push(/*#__PURE__*/jsxRuntimeExports.jsx(ClockNumber, {
              id: selected ? selectedId : undefined,
              index: hour,
              inner: inner,
              selected: selected,
              disabled: isDisabled(hour),
              label: label,
              "aria-label": getClockNumberText(label)
            }, hour));
          }
          return hourNumbers;
        };
        const getMinutesNumbers = ({
          utils,
          value,
          isDisabled,
          getClockNumberText,
          selectedId
        }) => {
          const f = utils.formatNumber;
          return [[5, f('05')], [10, f('10')], [15, f('15')], [20, f('20')], [25, f('25')], [30, f('30')], [35, f('35')], [40, f('40')], [45, f('45')], [50, f('50')], [55, f('55')], [0, f('00')]].map(([numberValue, label], index) => {
            const selected = numberValue === value;
            return /*#__PURE__*/jsxRuntimeExports.jsx(ClockNumber, {
              label: label,
              id: selected ? selectedId : undefined,
              index: index + 1,
              inner: false,
              disabled: isDisabled(numberValue),
              selected: selected,
              "aria-label": getClockNumberText(label)
            }, numberValue);
          });
        };
        function getPickersArrowSwitcherUtilityClass(slot) {
          return generateUtilityClass('MuiPickersArrowSwitcher', slot);
        }
        generateUtilityClasses('MuiPickersArrowSwitcher', ['root', 'spacer', 'button']);
        const _excluded$e = ["children", "className", "components", "componentsProps", "isLeftDisabled", "isLeftHidden", "isRightDisabled", "isRightHidden", "leftArrowButtonText", "onLeftClick", "onRightClick", "rightArrowButtonText"];
        const useUtilityClasses$e = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ['root'],
            spacer: ['spacer'],
            button: ['button']
          };
          return composeClasses(slots, getPickersArrowSwitcherUtilityClass, classes);
        };
        const PickersArrowSwitcherRoot = styled('div', {
          name: 'MuiPickersArrowSwitcher',
          slot: 'Root',
          overridesResolver: (props, styles) => styles.root
        })({
          display: 'flex'
        });
        const PickersArrowSwitcherSpacer = styled('div', {
          name: 'MuiPickersArrowSwitcher',
          slot: 'Spacer',
          overridesResolver: (props, styles) => styles.spacer
        })(({
          theme
        }) => ({
          width: theme.spacing(3)
        }));
        const PickersArrowSwitcherButton = styled(IconButton, {
          name: 'MuiPickersArrowSwitcher',
          slot: 'Button',
          overridesResolver: (props, styles) => styles.button
        })(({
          ownerState
        }) => _extends({}, ownerState.hidden && {
          visibility: 'hidden'
        }));
        const PickersArrowSwitcher = /*#__PURE__*/reactExports.forwardRef(function PickersArrowSwitcher(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiPickersArrowSwitcher'
          });
          const children = props.children,
            className = props.className,
            components = props.components,
            componentsProps = props.componentsProps,
            isLeftDisabled = props.isLeftDisabled,
            isLeftHidden = props.isLeftHidden,
            isRightDisabled = props.isRightDisabled,
            isRightHidden = props.isRightHidden,
            leftArrowButtonText = props.leftArrowButtonText,
            onLeftClick = props.onLeftClick,
            onRightClick = props.onRightClick,
            rightArrowButtonText = props.rightArrowButtonText,
            other = _objectWithoutPropertiesLoose(props, _excluded$e);
          const theme = useTheme();
          const isRtl = theme.direction === 'rtl';
          const leftArrowButtonProps = (componentsProps == null ? void 0 : componentsProps.leftArrowButton) || {};
          const LeftArrowIcon = (components == null ? void 0 : components.LeftArrowIcon) || ArrowLeft;
          const rightArrowButtonProps = (componentsProps == null ? void 0 : componentsProps.rightArrowButton) || {};
          const RightArrowIcon = (components == null ? void 0 : components.RightArrowIcon) || ArrowRight;
          const ownerState = props;
          const classes = useUtilityClasses$e(ownerState);
          return /*#__PURE__*/jsxRuntimeExports.jsxs(PickersArrowSwitcherRoot, _extends({
            ref: ref,
            className: clsx(classes.root, className),
            ownerState: ownerState
          }, other, {
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(PickersArrowSwitcherButton, _extends({
              as: components == null ? void 0 : components.LeftArrowButton,
              size: "small",
              "aria-label": leftArrowButtonText,
              title: leftArrowButtonText,
              disabled: isLeftDisabled,
              edge: "end",
              onClick: onLeftClick
            }, leftArrowButtonProps, {
              className: clsx(classes.button, leftArrowButtonProps.className),
              ownerState: _extends({}, ownerState, leftArrowButtonProps, {
                hidden: isLeftHidden
              }),
              children: isRtl ? /*#__PURE__*/jsxRuntimeExports.jsx(RightArrowIcon, {}) : /*#__PURE__*/jsxRuntimeExports.jsx(LeftArrowIcon, {})
            })), children ? /*#__PURE__*/jsxRuntimeExports.jsx(Typography, {
              variant: "subtitle1",
              component: "span",
              children: children
            }) : /*#__PURE__*/jsxRuntimeExports.jsx(PickersArrowSwitcherSpacer, {
              className: classes.spacer,
              ownerState: ownerState
            }), /*#__PURE__*/jsxRuntimeExports.jsx(PickersArrowSwitcherButton, _extends({
              as: components == null ? void 0 : components.RightArrowButton,
              size: "small",
              "aria-label": rightArrowButtonText,
              title: rightArrowButtonText,
              edge: "start",
              disabled: isRightDisabled,
              onClick: onRightClick
            }, rightArrowButtonProps, {
              className: clsx(classes.button, rightArrowButtonProps.className),
              ownerState: _extends({}, ownerState, rightArrowButtonProps, {
                hidden: isRightHidden
              }),
              children: isRtl ? /*#__PURE__*/jsxRuntimeExports.jsx(LeftArrowIcon, {}) : /*#__PURE__*/jsxRuntimeExports.jsx(RightArrowIcon, {})
            }))]
          }));
        });
        function getClockPickerUtilityClass(slot) {
          return generateUtilityClass('MuiClockPicker', slot);
        }
        generateUtilityClasses('MuiClockPicker', ['root', 'arrowSwitcher']);
        const DAY_SIZE = 36;
        const DAY_MARGIN = 2;
        const DIALOG_WIDTH = 320;
        const VIEW_HEIGHT = 358;
        const PickerViewRoot = styled('div')({
          overflowX: 'hidden',
          width: DIALOG_WIDTH,
          maxHeight: VIEW_HEIGHT,
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto'
        });
        const useUtilityClasses$d = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ["root"],
            arrowSwitcher: ["arrowSwitcher"]
          };
          return composeClasses(slots, getClockPickerUtilityClass, classes);
        };
        const ClockPickerRoot = styled(PickerViewRoot, {
          name: "MuiClockPicker",
          slot: "Root",
          overridesResolver: (props, styles) => styles.root
        })({
          display: "flex",
          flexDirection: "column"
        });
        const ClockPickerArrowSwitcher = styled(PickersArrowSwitcher, {
          name: "MuiClockPicker",
          slot: "ArrowSwitcher",
          overridesResolver: (props, styles) => styles.arrowSwitcher
        })({
          position: "absolute",
          right: 12,
          top: 15
        });
        const deprecatedPropsWarning$1 = buildDeprecatedPropsWarning();
        const ClockPicker = /* @__PURE__ */reactExports.forwardRef(function ClockPicker2(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: "MuiClockPicker"
          });
          const _props$ampm = props.ampm,
            ampm = _props$ampm === void 0 ? false : _props$ampm,
            _props$ampmInClock = props.ampmInClock,
            ampmInClock = _props$ampmInClock === void 0 ? false : _props$ampmInClock,
            autoFocus = props.autoFocus,
            components = props.components,
            componentsProps = props.componentsProps,
            date = props.date,
            disableIgnoringDatePartForTimeValidation = props.disableIgnoringDatePartForTimeValidation,
            getClockLabelTextProp = props.getClockLabelText,
            getHoursClockNumberTextProp = props.getHoursClockNumberText,
            getMinutesClockNumberTextProp = props.getMinutesClockNumberText,
            getSecondsClockNumberTextProp = props.getSecondsClockNumberText,
            leftArrowButtonTextProp = props.leftArrowButtonText,
            maxTime = props.maxTime,
            minTime = props.minTime,
            _props$minutesStep2 = props.minutesStep,
            minutesStep = _props$minutesStep2 === void 0 ? 1 : _props$minutesStep2,
            rightArrowButtonTextProp = props.rightArrowButtonText,
            shouldDisableTime = props.shouldDisableTime,
            showViewSwitcher = props.showViewSwitcher,
            onChange = props.onChange,
            view = props.view,
            _props$views = props.views,
            views = _props$views === void 0 ? ["hours", "minutes"] : _props$views,
            openTo = props.openTo,
            onViewChange = props.onViewChange,
            className = props.className,
            disabled = props.disabled,
            readOnly = props.readOnly;
          deprecatedPropsWarning$1({
            leftArrowButtonText: leftArrowButtonTextProp,
            rightArrowButtonText: rightArrowButtonTextProp,
            getClockLabelText: getClockLabelTextProp,
            getHoursClockNumberText: getHoursClockNumberTextProp,
            getMinutesClockNumberText: getMinutesClockNumberTextProp,
            getSecondsClockNumberText: getSecondsClockNumberTextProp
          });
          const localeText = useLocaleText();
          const leftArrowButtonText = leftArrowButtonTextProp != null ? leftArrowButtonTextProp : localeText.openPreviousView;
          const rightArrowButtonText = rightArrowButtonTextProp != null ? rightArrowButtonTextProp : localeText.openNextView;
          const getClockLabelText = getClockLabelTextProp != null ? getClockLabelTextProp : localeText.clockLabelText;
          const getHoursClockNumberText = getHoursClockNumberTextProp != null ? getHoursClockNumberTextProp : localeText.hoursClockNumberText;
          const getMinutesClockNumberText = getMinutesClockNumberTextProp != null ? getMinutesClockNumberTextProp : localeText.minutesClockNumberText;
          const getSecondsClockNumberText = getSecondsClockNumberTextProp != null ? getSecondsClockNumberTextProp : localeText.secondsClockNumberText;
          const _useViews = useViews({
              view,
              views,
              openTo,
              onViewChange,
              onChange
            }),
            openView = _useViews.openView,
            setOpenView = _useViews.setOpenView,
            nextView = _useViews.nextView,
            previousView = _useViews.previousView,
            handleChangeAndOpenNext = _useViews.handleChangeAndOpenNext;
          const now = useNow();
          const utils = useUtils();
          const dateOrMidnight = reactExports.useMemo(() => date || utils.setSeconds(utils.setMinutes(utils.setHours(now, 0), 0), 0), [date, now, utils]);
          const _useMeridiemMode = useMeridiemMode(dateOrMidnight, ampm, handleChangeAndOpenNext),
            meridiemMode = _useMeridiemMode.meridiemMode,
            handleMeridiemChange = _useMeridiemMode.handleMeridiemChange;
          const isTimeDisabled = reactExports.useCallback((rawValue, viewType) => {
            const isAfter = createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, utils);
            const containsValidTime = ({
              start,
              end
            }) => {
              if (minTime && isAfter(minTime, end)) {
                return false;
              }
              if (maxTime && isAfter(start, maxTime)) {
                return false;
              }
              return true;
            };
            const isValidValue = (value, step = 1) => {
              if (value % step !== 0) {
                return false;
              }
              if (shouldDisableTime) {
                return !shouldDisableTime(value, viewType);
              }
              return true;
            };
            switch (viewType) {
              case "hours":
                {
                  const value = convertValueToMeridiem(rawValue, meridiemMode, ampm);
                  const dateWithNewHours = utils.setHours(dateOrMidnight, value);
                  const start = utils.setSeconds(utils.setMinutes(dateWithNewHours, 0), 0);
                  const end = utils.setSeconds(utils.setMinutes(dateWithNewHours, 59), 59);
                  return !containsValidTime({
                    start,
                    end
                  }) || !isValidValue(value);
                }
              case "minutes":
                {
                  const dateWithNewMinutes = utils.setMinutes(dateOrMidnight, rawValue);
                  const start = utils.setSeconds(dateWithNewMinutes, 0);
                  const end = utils.setSeconds(dateWithNewMinutes, 59);
                  return !containsValidTime({
                    start,
                    end
                  }) || !isValidValue(rawValue, minutesStep);
                }
              case "seconds":
                {
                  const dateWithNewSeconds = utils.setSeconds(dateOrMidnight, rawValue);
                  const start = dateWithNewSeconds;
                  const end = dateWithNewSeconds;
                  return !containsValidTime({
                    start,
                    end
                  }) || !isValidValue(rawValue);
                }
              default:
                throw new Error("not supported");
            }
          }, [ampm, dateOrMidnight, disableIgnoringDatePartForTimeValidation, maxTime, meridiemMode, minTime, minutesStep, shouldDisableTime, utils]);
          const selectedId = useId();
          const viewProps = reactExports.useMemo(() => {
            switch (openView) {
              case "hours":
                {
                  const handleHoursChange = (value, isFinish) => {
                    const valueWithMeridiem = convertValueToMeridiem(value, meridiemMode, ampm);
                    handleChangeAndOpenNext(utils.setHours(dateOrMidnight, valueWithMeridiem), isFinish);
                  };
                  return {
                    onChange: handleHoursChange,
                    value: utils.getHours(dateOrMidnight),
                    children: getHourNumbers({
                      date,
                      utils,
                      ampm,
                      onChange: handleHoursChange,
                      getClockNumberText: getHoursClockNumberText,
                      isDisabled: value => disabled || isTimeDisabled(value, "hours"),
                      selectedId
                    })
                  };
                }
              case "minutes":
                {
                  const minutesValue = utils.getMinutes(dateOrMidnight);
                  const handleMinutesChange = (value, isFinish) => {
                    handleChangeAndOpenNext(utils.setMinutes(dateOrMidnight, value), isFinish);
                  };
                  return {
                    value: minutesValue,
                    onChange: handleMinutesChange,
                    children: getMinutesNumbers({
                      utils,
                      value: minutesValue,
                      onChange: handleMinutesChange,
                      getClockNumberText: getMinutesClockNumberText,
                      isDisabled: value => disabled || isTimeDisabled(value, "minutes"),
                      selectedId
                    })
                  };
                }
              case "seconds":
                {
                  const secondsValue = utils.getSeconds(dateOrMidnight);
                  const handleSecondsChange = (value, isFinish) => {
                    handleChangeAndOpenNext(utils.setSeconds(dateOrMidnight, value), isFinish);
                  };
                  return {
                    value: secondsValue,
                    onChange: handleSecondsChange,
                    children: getMinutesNumbers({
                      utils,
                      value: secondsValue,
                      onChange: handleSecondsChange,
                      getClockNumberText: getSecondsClockNumberText,
                      isDisabled: value => disabled || isTimeDisabled(value, "seconds"),
                      selectedId
                    })
                  };
                }
              default:
                throw new Error("You must provide the type for ClockView");
            }
          }, [openView, utils, date, ampm, getHoursClockNumberText, getMinutesClockNumberText, getSecondsClockNumberText, meridiemMode, handleChangeAndOpenNext, dateOrMidnight, isTimeDisabled, selectedId, disabled]);
          const ownerState = props;
          const classes = useUtilityClasses$d(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(ClockPickerRoot, {
            ref,
            className: clsx(classes.root, className),
            ownerState,
            children: [showViewSwitcher && /* @__PURE__ */jsxRuntimeExports.jsx(ClockPickerArrowSwitcher, {
              className: classes.arrowSwitcher,
              leftArrowButtonText,
              rightArrowButtonText,
              components,
              componentsProps,
              onLeftClick: () => setOpenView(previousView),
              onRightClick: () => setOpenView(nextView),
              isLeftDisabled: !previousView,
              isRightDisabled: !nextView,
              ownerState
            }), /* @__PURE__ */jsxRuntimeExports.jsx(Clock, _extends({
              autoFocus,
              date,
              ampmInClock,
              type: openView,
              ampm,
              getClockLabelText,
              minutesStep,
              isTimeDisabled,
              meridiemMode,
              handleMeridiemChange,
              selectedId,
              disabled,
              readOnly
            }, viewProps))]
          });
        });
        function getPickersMonthUtilityClass(slot) {
          // TODO v6 Rename 'PrivatePickersMonth' to 'MuiPickersMonth' to follow convention
          return generateUtilityClass('PrivatePickersMonth', slot);
        }
        const pickersMonthClasses = generateUtilityClasses(
        // TODO v6 Rename 'PrivatePickersMonth' to 'MuiPickersMonth' to follow convention
        'PrivatePickersMonth', ['root', 'selected']);
        const _excluded$d = ["disabled", "onSelect", "selected", "value", "tabIndex", "hasFocus", "onFocus", "onBlur"];
        const useUtilityClasses$c = ownerState => {
          const classes = ownerState.classes,
            selected = ownerState.selected;
          const slots = {
            root: ['root', selected && 'selected']
          };
          return composeClasses(slots, getPickersMonthUtilityClass, classes);
        };
        const PickersMonthRoot = styled(Typography, {
          name: 'PrivatePickersMonth',
          slot: 'Root',
          overridesResolver: (_, styles) => [styles.root, {
            [`&.${pickersMonthClasses.selected}`]: styles.selected
          }]
        })(({
          theme
        }) => _extends({
          flex: '1 0 33.33%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'unset',
          backgroundColor: 'transparent',
          border: 0,
          outline: 0
        }, theme.typography.subtitle1, {
          margin: '8px 0',
          height: 36,
          borderRadius: 18,
          cursor: 'pointer',
          '&:focus, &:hover': {
            backgroundColor: alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
          },
          '&:disabled': {
            pointerEvents: 'none',
            color: theme.palette.text.secondary
          },
          [`&.${pickersMonthClasses.selected}`]: {
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.primary.main,
            '&:focus, &:hover': {
              backgroundColor: theme.palette.primary.dark
            }
          }
        }));
        const noop$2 = () => {};
        /**
         * @ignore - do not document.
         */

        const PickersMonth = props => {
          // TODO v6 add 'useThemeProps' once the component class names are aligned
          const disabled = props.disabled,
            onSelect = props.onSelect,
            selected = props.selected,
            value = props.value,
            tabIndex = props.tabIndex,
            hasFocus = props.hasFocus,
            _props$onFocus = props.onFocus,
            _onFocus = _props$onFocus === void 0 ? noop$2 : _props$onFocus,
            _props$onBlur = props.onBlur,
            _onBlur = _props$onBlur === void 0 ? noop$2 : _props$onBlur,
            other = _objectWithoutPropertiesLoose(props, _excluded$d);
          const classes = useUtilityClasses$c(props);
          const handleSelection = () => {
            onSelect(value);
          };
          const ref = reactExports.useRef(null);
          useEnhancedEffect(() => {
            if (hasFocus) {
              var _ref$current;
              (_ref$current = ref.current) == null ? void 0 : _ref$current.focus();
            }
          }, [hasFocus]);
          return /*#__PURE__*/jsxRuntimeExports.jsx(PickersMonthRoot, _extends({
            ref: ref,
            component: "button",
            type: "button",
            className: classes.root,
            tabIndex: tabIndex,
            onClick: handleSelection,
            onKeyDown: onSpaceOrEnter(handleSelection),
            color: selected ? 'primary' : undefined,
            variant: selected ? 'h5' : 'subtitle1',
            disabled: disabled,
            onFocus: event => _onFocus(event, value),
            onBlur: event => _onBlur(event, value)
          }, other));
        };
        function getMonthPickerUtilityClass(slot) {
          return generateUtilityClass('MuiMonthPicker', slot);
        }
        generateUtilityClasses('MuiMonthPicker', ['root']);
        const _excluded$c = ["className", "date", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "shouldDisableMonth", "readOnly", "disableHighlightToday", "autoFocus", "onMonthFocus", "hasFocus", "onFocusedViewChange"];
        const useUtilityClasses$b = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ["root"]
          };
          return composeClasses(slots, getMonthPickerUtilityClass, classes);
        };
        function useMonthPickerDefaultizedProps(props, name) {
          const utils = useUtils();
          const defaultDates = useDefaultDates();
          const themeProps = useThemeProps({
            props,
            name
          });
          return _extends({
            disableFuture: false,
            disablePast: false
          }, themeProps, {
            minDate: parseNonNullablePickerDate(utils, themeProps.minDate, defaultDates.minDate),
            maxDate: parseNonNullablePickerDate(utils, themeProps.maxDate, defaultDates.maxDate)
          });
        }
        const MonthPickerRoot = styled("div", {
          name: "MuiMonthPicker",
          slot: "Root",
          overridesResolver: (props, styles) => styles.root
        })({
          width: 310,
          display: "flex",
          flexWrap: "wrap",
          alignContent: "stretch",
          margin: "0 4px"
        });
        const MonthPicker = /* @__PURE__ */reactExports.forwardRef(function MonthPicker2(inProps, ref) {
          const utils = useUtils();
          const now = useNow();
          const props = useMonthPickerDefaultizedProps(inProps, "MuiMonthPicker");
          const className = props.className,
            date = props.date,
            disabled = props.disabled,
            disableFuture = props.disableFuture,
            disablePast = props.disablePast,
            maxDate = props.maxDate,
            minDate = props.minDate,
            onChange = props.onChange,
            shouldDisableMonth = props.shouldDisableMonth,
            readOnly = props.readOnly,
            disableHighlightToday = props.disableHighlightToday,
            _props$autoFocus = props.autoFocus,
            autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
            onMonthFocus = props.onMonthFocus,
            hasFocus = props.hasFocus,
            onFocusedViewChange = props.onFocusedViewChange,
            other = _objectWithoutPropertiesLoose(props, _excluded$c);
          const ownerState = props;
          const classes = useUtilityClasses$b(ownerState);
          const theme = useTheme$1();
          const selectedDateOrStartOfMonth = reactExports.useMemo(() => date != null ? date : utils.startOfMonth(now), [now, utils, date]);
          const selectedMonth = reactExports.useMemo(() => {
            if (date != null) {
              return utils.getMonth(date);
            }
            if (disableHighlightToday) {
              return null;
            }
            return utils.getMonth(now);
          }, [now, date, utils, disableHighlightToday]);
          const _reactExports$useStat = reactExports.useState(() => selectedMonth || utils.getMonth(now)),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            focusedMonth = _reactExports$useStat2[0],
            setFocusedMonth = _reactExports$useStat2[1];
          const isMonthDisabled = reactExports.useCallback(month => {
            const firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, minDate) ? now : minDate);
            const lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, maxDate) ? now : maxDate);
            if (utils.isBefore(month, firstEnabledMonth)) {
              return true;
            }
            if (utils.isAfter(month, lastEnabledMonth)) {
              return true;
            }
            if (!shouldDisableMonth) {
              return false;
            }
            return shouldDisableMonth(month);
          }, [disableFuture, disablePast, maxDate, minDate, now, shouldDisableMonth, utils]);
          const onMonthSelect = month => {
            if (readOnly) {
              return;
            }
            const newDate = utils.setMonth(selectedDateOrStartOfMonth, month);
            onChange(newDate, "finish");
          };
          const _useControlled3 = useControlled({
              name: "MonthPicker",
              state: "hasFocus",
              controlled: hasFocus,
              default: autoFocus
            }),
            _useControlled4 = _slicedToArray(_useControlled3, 2),
            internalHasFocus = _useControlled4[0],
            setInternalHasFocus = _useControlled4[1];
          const changeHasFocus = reactExports.useCallback(newHasFocus => {
            setInternalHasFocus(newHasFocus);
            if (onFocusedViewChange) {
              onFocusedViewChange(newHasFocus);
            }
          }, [setInternalHasFocus, onFocusedViewChange]);
          const focusMonth = reactExports.useCallback(month => {
            if (!isMonthDisabled(utils.setMonth(selectedDateOrStartOfMonth, month))) {
              setFocusedMonth(month);
              changeHasFocus(true);
              if (onMonthFocus) {
                onMonthFocus(month);
              }
            }
          }, [isMonthDisabled, utils, selectedDateOrStartOfMonth, changeHasFocus, onMonthFocus]);
          reactExports.useEffect(() => {
            setFocusedMonth(prevFocusedMonth => selectedMonth !== null && prevFocusedMonth !== selectedMonth ? selectedMonth : prevFocusedMonth);
          }, [selectedMonth]);
          const handleKeyDown = useEventCallback(event => {
            const monthsInYear = 12;
            const monthsInRow = 3;
            switch (event.key) {
              case "ArrowUp":
                focusMonth((monthsInYear + focusedMonth - monthsInRow) % monthsInYear);
                event.preventDefault();
                break;
              case "ArrowDown":
                focusMonth((monthsInYear + focusedMonth + monthsInRow) % monthsInYear);
                event.preventDefault();
                break;
              case "ArrowLeft":
                focusMonth((monthsInYear + focusedMonth + (theme.direction === "ltr" ? -1 : 1)) % monthsInYear);
                event.preventDefault();
                break;
              case "ArrowRight":
                focusMonth((monthsInYear + focusedMonth + (theme.direction === "ltr" ? 1 : -1)) % monthsInYear);
                event.preventDefault();
                break;
            }
          });
          const handleMonthFocus = reactExports.useCallback((event, month) => {
            focusMonth(month);
          }, [focusMonth]);
          const handleMonthBlur = reactExports.useCallback(() => {
            changeHasFocus(false);
          }, [changeHasFocus]);
          const currentMonthNumber = utils.getMonth(now);
          return /* @__PURE__ */jsxRuntimeExports.jsx(MonthPickerRoot, _extends({
            ref,
            className: clsx(classes.root, className),
            ownerState,
            onKeyDown: handleKeyDown
          }, other, {
            children: utils.getMonthArray(selectedDateOrStartOfMonth).map(month => {
              const monthNumber = utils.getMonth(month);
              const monthText = utils.format(month, "monthShort");
              const isDisabled = disabled || isMonthDisabled(month);
              return /* @__PURE__ */jsxRuntimeExports.jsx(PickersMonth, {
                value: monthNumber,
                selected: monthNumber === selectedMonth,
                tabIndex: monthNumber === focusedMonth && !isDisabled ? 0 : -1,
                hasFocus: internalHasFocus && monthNumber === focusedMonth,
                onSelect: onMonthSelect,
                onFocus: handleMonthFocus,
                onBlur: handleMonthBlur,
                disabled: isDisabled,
                "aria-current": currentMonthNumber === monthNumber ? "date" : void 0,
                children: monthText
              }, monthText);
            })
          }));
        });
        function useValidation(props, validate, isSameError) {
          const value = props.value,
            onError = props.onError;
          const adapter = useLocalizationContext();
          const previousValidationErrorRef = reactExports.useRef(null);
          const validationError = validate({
            adapter,
            value,
            props
          });
          reactExports.useEffect(() => {
            if (onError && !isSameError(validationError, previousValidationErrorRef.current)) {
              onError(validationError, value);
            }
            previousValidationErrorRef.current = validationError;
          }, [isSameError, onError, previousValidationErrorRef, validationError, value]);
          return validationError;
        }
        const validateDate = ({
          props,
          value,
          adapter
        }) => {
          const now = adapter.utils.date();
          const date = adapter.utils.date(value);
          const minDate = parseNonNullablePickerDate(adapter.utils, props.minDate, adapter.defaultDates.minDate);
          const maxDate = parseNonNullablePickerDate(adapter.utils, props.maxDate, adapter.defaultDates.maxDate);
          if (date === null) {
            return null;
          }
          switch (true) {
            case !adapter.utils.isValid(value):
              return 'invalidDate';
            case Boolean(props.shouldDisableDate && props.shouldDisableDate(date)):
              return 'shouldDisableDate';
            case Boolean(props.disableFuture && adapter.utils.isAfterDay(date, now)):
              return 'disableFuture';
            case Boolean(props.disablePast && adapter.utils.isBeforeDay(date, now)):
              return 'disablePast';
            case Boolean(minDate && adapter.utils.isBeforeDay(date, minDate)):
              return 'minDate';
            case Boolean(maxDate && adapter.utils.isAfterDay(date, maxDate)):
              return 'maxDate';
            default:
              return null;
          }
        };
        const useIsDayDisabled = ({
          shouldDisableDate,
          minDate,
          maxDate,
          disableFuture,
          disablePast
        }) => {
          const adapter = useLocalizationContext();
          return reactExports.useCallback(day => validateDate({
            adapter,
            value: day,
            props: {
              shouldDisableDate,
              minDate,
              maxDate,
              disableFuture,
              disablePast
            }
          }) !== null, [adapter, shouldDisableDate, minDate, maxDate, disableFuture, disablePast]);
        };
        const isSameDateError = (a, b) => a === b;
        const useDateValidation = exports("o", props => useValidation(props, validateDate, isSameDateError));
        const createCalendarStateReducer = (reduceAnimations, disableSwitchToMonthOnDayFocus, utils) => (state, action) => {
          switch (action.type) {
            case 'changeMonth':
              return _extends({}, state, {
                slideDirection: action.direction,
                currentMonth: action.newMonth,
                isMonthSwitchingAnimating: !reduceAnimations
              });
            case 'finishMonthSwitchingAnimation':
              return _extends({}, state, {
                isMonthSwitchingAnimating: false
              });
            case 'changeFocusedDay':
              {
                if (state.focusedDay != null && action.focusedDay != null && utils.isSameDay(action.focusedDay, state.focusedDay)) {
                  return state;
                }
                const needMonthSwitch = action.focusedDay != null && !disableSwitchToMonthOnDayFocus && !utils.isSameMonth(state.currentMonth, action.focusedDay);
                return _extends({}, state, {
                  focusedDay: action.focusedDay,
                  isMonthSwitchingAnimating: needMonthSwitch && !reduceAnimations && !action.withoutMonthSwitchingAnimation,
                  currentMonth: needMonthSwitch ? utils.startOfMonth(action.focusedDay) : state.currentMonth,
                  slideDirection: action.focusedDay != null && utils.isAfterDay(action.focusedDay, state.currentMonth) ? 'left' : 'right'
                });
              }
            default:
              throw new Error('missing support');
          }
        };
        const useCalendarState = ({
          date,
          defaultCalendarMonth,
          disableFuture,
          disablePast,
          disableSwitchToMonthOnDayFocus = false,
          maxDate,
          minDate,
          onMonthChange,
          reduceAnimations,
          shouldDisableDate
        }) => {
          var _ref;
          const now = useNow();
          const utils = useUtils();
          const reducerFn = reactExports.useRef(createCalendarStateReducer(Boolean(reduceAnimations), disableSwitchToMonthOnDayFocus, utils)).current;
          const _reactExports$useRedu = reactExports.useReducer(reducerFn, {
              isMonthSwitchingAnimating: false,
              focusedDay: date || now,
              currentMonth: utils.startOfMonth((_ref = date != null ? date : defaultCalendarMonth) != null ? _ref : now),
              slideDirection: 'left'
            }),
            _reactExports$useRedu2 = _slicedToArray(_reactExports$useRedu, 2),
            calendarState = _reactExports$useRedu2[0],
            dispatch = _reactExports$useRedu2[1];
          const handleChangeMonth = reactExports.useCallback(payload => {
            dispatch(_extends({
              type: 'changeMonth'
            }, payload));
            if (onMonthChange) {
              onMonthChange(payload.newMonth);
            }
          }, [onMonthChange]);
          const changeMonth = reactExports.useCallback(newDate => {
            const newDateRequested = newDate != null ? newDate : now;
            if (utils.isSameMonth(newDateRequested, calendarState.currentMonth)) {
              return;
            }
            handleChangeMonth({
              newMonth: utils.startOfMonth(newDateRequested),
              direction: utils.isAfterDay(newDateRequested, calendarState.currentMonth) ? 'left' : 'right'
            });
          }, [calendarState.currentMonth, handleChangeMonth, now, utils]);
          const isDateDisabled = useIsDayDisabled({
            shouldDisableDate,
            minDate,
            maxDate,
            disableFuture,
            disablePast
          });
          const onMonthSwitchingAnimationEnd = reactExports.useCallback(() => {
            dispatch({
              type: 'finishMonthSwitchingAnimation'
            });
          }, []);
          const changeFocusedDay = reactExports.useCallback((newFocusedDate, withoutMonthSwitchingAnimation) => {
            if (!isDateDisabled(newFocusedDate)) {
              dispatch({
                type: 'changeFocusedDay',
                focusedDay: newFocusedDate,
                withoutMonthSwitchingAnimation
              });
            }
          }, [isDateDisabled]);
          return {
            calendarState,
            changeMonth,
            changeFocusedDay,
            isDateDisabled,
            onMonthSwitchingAnimationEnd,
            handleChangeMonth
          };
        };
        const getPickersFadeTransitionGroupUtilityClass = slot => generateUtilityClass('MuiPickersFadeTransitionGroup', slot);
        generateUtilityClasses('MuiPickersFadeTransitionGroup', ['root']);
        const useUtilityClasses$a = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ['root']
          };
          return composeClasses(slots, getPickersFadeTransitionGroupUtilityClass, classes);
        };
        const animationDuration = 500;
        const PickersFadeTransitionGroupRoot = styled(TransitionGroup, {
          name: 'MuiPickersFadeTransitionGroup',
          slot: 'Root',
          overridesResolver: (_, styles) => styles.root
        })({
          display: 'block',
          position: 'relative'
        });
        /**
         * @ignore - do not document.
         */

        function PickersFadeTransitionGroup(inProps) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiPickersFadeTransitionGroup'
          });
          const children = props.children,
            className = props.className,
            reduceAnimations = props.reduceAnimations,
            transKey = props.transKey;
          const classes = useUtilityClasses$a(props);
          if (reduceAnimations) {
            return children;
          }
          return /*#__PURE__*/jsxRuntimeExports.jsx(PickersFadeTransitionGroupRoot, {
            className: clsx(classes.root, className),
            children: /*#__PURE__*/jsxRuntimeExports.jsx(Fade, {
              appear: false,
              mountOnEnter: true,
              unmountOnExit: true,
              timeout: {
                appear: animationDuration,
                enter: animationDuration / 2,
                exit: 0
              },
              children: children
            }, transKey)
          });
        }
        function getPickersDayUtilityClass(slot) {
          return generateUtilityClass('MuiPickersDay', slot);
        }
        const pickersDayClasses = generateUtilityClasses('MuiPickersDay', ['root', 'dayWithMargin', 'dayOutsideMonth', 'hiddenDaySpacingFiller', 'today', 'selected', 'disabled']);
        const _excluded$b = ["autoFocus", "className", "day", "disabled", "disableHighlightToday", "disableMargin", "hidden", "isAnimating", "onClick", "onDaySelect", "onFocus", "onBlur", "onKeyDown", "onMouseDown", "outsideCurrentMonth", "selected", "showDaysOutsideCurrentMonth", "children", "today"];
        const useUtilityClasses$9 = ownerState => {
          const selected = ownerState.selected,
            disableMargin = ownerState.disableMargin,
            disableHighlightToday = ownerState.disableHighlightToday,
            today = ownerState.today,
            disabled = ownerState.disabled,
            outsideCurrentMonth = ownerState.outsideCurrentMonth,
            showDaysOutsideCurrentMonth = ownerState.showDaysOutsideCurrentMonth,
            classes = ownerState.classes;
          const slots = {
            root: ["root", selected && "selected", disabled && "disabled", !disableMargin && "dayWithMargin", !disableHighlightToday && today && "today", outsideCurrentMonth && showDaysOutsideCurrentMonth && "dayOutsideMonth", outsideCurrentMonth && !showDaysOutsideCurrentMonth && "hiddenDaySpacingFiller"],
            hiddenDaySpacingFiller: ["hiddenDaySpacingFiller"]
          };
          return composeClasses(slots, getPickersDayUtilityClass, classes);
        };
        const styleArg = ({
          theme,
          ownerState
        }) => _extends({}, theme.typography.caption, {
          width: DAY_SIZE,
          height: DAY_SIZE,
          borderRadius: "50%",
          padding: 0,
          // background required here to prevent collides with the other days when animating with transition group
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          "&:hover": {
            backgroundColor: alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
          },
          "&:focus": {
            backgroundColor: alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
            [`&.${pickersDayClasses.selected}`]: {
              willChange: "background-color",
              backgroundColor: theme.palette.primary.dark
            }
          },
          [`&.${pickersDayClasses.selected}`]: {
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.primary.main,
            fontWeight: theme.typography.fontWeightMedium,
            transition: theme.transitions.create("background-color", {
              duration: theme.transitions.duration.short
            }),
            "&:hover": {
              willChange: "background-color",
              backgroundColor: theme.palette.primary.dark
            }
          },
          [`&.${pickersDayClasses.disabled}`]: {
            color: theme.palette.text.disabled
          }
        }, !ownerState.disableMargin && {
          margin: `0 ${DAY_MARGIN}px`
        }, ownerState.outsideCurrentMonth && ownerState.showDaysOutsideCurrentMonth && {
          color: theme.palette.text.secondary
        }, !ownerState.disableHighlightToday && ownerState.today && {
          [`&:not(.${pickersDayClasses.selected})`]: {
            border: `1px solid ${theme.palette.text.secondary}`
          }
        });
        const overridesResolver = (props, styles) => {
          const ownerState = props.ownerState;
          return [styles.root, !ownerState.disableMargin && styles.dayWithMargin, !ownerState.disableHighlightToday && ownerState.today && styles.today, !ownerState.outsideCurrentMonth && ownerState.showDaysOutsideCurrentMonth && styles.dayOutsideMonth, ownerState.outsideCurrentMonth && !ownerState.showDaysOutsideCurrentMonth && styles.hiddenDaySpacingFiller];
        };
        const PickersDayRoot = styled(ButtonBase, {
          name: "MuiPickersDay",
          slot: "Root",
          overridesResolver
        })(styleArg);
        const PickersDayFiller = styled("div", {
          name: "MuiPickersDay",
          slot: "Root",
          overridesResolver
        })(({
          theme,
          ownerState
        }) => _extends({}, styleArg({
          theme,
          ownerState
        }), {
          // visibility: 'hidden' does not work here as it hides the element from screen readers as well
          opacity: 0,
          pointerEvents: "none"
        }));
        const noop$1 = () => {};
        const PickersDayRaw = /* @__PURE__ */reactExports.forwardRef(function PickersDay2(inProps, forwardedRef) {
          const props = useThemeProps({
            props: inProps,
            name: "MuiPickersDay"
          });
          const _props$autoFocus2 = props.autoFocus,
            autoFocus = _props$autoFocus2 === void 0 ? false : _props$autoFocus2,
            className = props.className,
            day = props.day,
            _props$disabled = props.disabled,
            disabled = _props$disabled === void 0 ? false : _props$disabled,
            _props$disableHighlig = props.disableHighlightToday,
            disableHighlightToday = _props$disableHighlig === void 0 ? false : _props$disableHighlig,
            _props$disableMargin = props.disableMargin,
            disableMargin = _props$disableMargin === void 0 ? false : _props$disableMargin,
            isAnimating = props.isAnimating,
            onClick = props.onClick,
            onDaySelect = props.onDaySelect,
            _props$onFocus2 = props.onFocus,
            _onFocus2 = _props$onFocus2 === void 0 ? noop$1 : _props$onFocus2,
            _props$onBlur2 = props.onBlur,
            _onBlur2 = _props$onBlur2 === void 0 ? noop$1 : _props$onBlur2,
            _props$onKeyDown = props.onKeyDown,
            _onKeyDown = _props$onKeyDown === void 0 ? noop$1 : _props$onKeyDown,
            onMouseDown = props.onMouseDown,
            outsideCurrentMonth = props.outsideCurrentMonth,
            _props$selected = props.selected,
            selected = _props$selected === void 0 ? false : _props$selected,
            _props$showDaysOutsid = props.showDaysOutsideCurrentMonth,
            showDaysOutsideCurrentMonth = _props$showDaysOutsid === void 0 ? false : _props$showDaysOutsid,
            children = props.children,
            _props$today = props.today,
            isToday = _props$today === void 0 ? false : _props$today,
            other = _objectWithoutPropertiesLoose(props, _excluded$b);
          const ownerState = _extends({}, props, {
            autoFocus,
            disabled,
            disableHighlightToday,
            disableMargin,
            selected,
            showDaysOutsideCurrentMonth,
            today: isToday
          });
          const classes = useUtilityClasses$9(ownerState);
          const utils = useUtils();
          const ref = reactExports.useRef(null);
          const handleRef = useForkRef(ref, forwardedRef);
          useEnhancedEffect(() => {
            if (autoFocus && !disabled && !isAnimating && !outsideCurrentMonth) {
              ref.current.focus();
            }
          }, [autoFocus, disabled, isAnimating, outsideCurrentMonth]);
          const handleMouseDown = event => {
            if (onMouseDown) {
              onMouseDown(event);
            }
            if (outsideCurrentMonth) {
              event.preventDefault();
            }
          };
          const handleClick = event => {
            if (!disabled) {
              onDaySelect(day, "finish");
            }
            if (outsideCurrentMonth) {
              event.currentTarget.focus();
            }
            if (onClick) {
              onClick(event);
            }
          };
          if (outsideCurrentMonth && !showDaysOutsideCurrentMonth) {
            return /* @__PURE__ */jsxRuntimeExports.jsx(PickersDayFiller, {
              className: clsx(classes.root, classes.hiddenDaySpacingFiller, className),
              ownerState,
              role: other.role
            });
          }
          return /* @__PURE__ */jsxRuntimeExports.jsx(PickersDayRoot, _extends({
            className: clsx(classes.root, className),
            ownerState,
            ref: handleRef,
            centerRipple: true,
            disabled,
            tabIndex: selected ? 0 : -1,
            onKeyDown: event => _onKeyDown(event, day),
            onFocus: event => _onFocus2(event, day),
            onBlur: event => _onBlur2(event, day),
            onClick: handleClick,
            onMouseDown: handleMouseDown
          }, other, {
            children: !children ? utils.format(day, "dayOfMonth") : children
          }));
        });
        const areDayPropsEqual = (prevProps, nextProps) => {
          return prevProps.autoFocus === nextProps.autoFocus && prevProps.isAnimating === nextProps.isAnimating && prevProps.today === nextProps.today && prevProps.disabled === nextProps.disabled && prevProps.selected === nextProps.selected && prevProps.disableMargin === nextProps.disableMargin && prevProps.showDaysOutsideCurrentMonth === nextProps.showDaysOutsideCurrentMonth && prevProps.disableHighlightToday === nextProps.disableHighlightToday && prevProps.className === nextProps.className && prevProps.sx === nextProps.sx && prevProps.outsideCurrentMonth === nextProps.outsideCurrentMonth && prevProps.onFocus === nextProps.onFocus && prevProps.onBlur === nextProps.onBlur && prevProps.onDaySelect === nextProps.onDaySelect;
        };
        const PickersDay = /* @__PURE__ */reactExports.memo(PickersDayRaw, areDayPropsEqual);
        const getPickersSlideTransitionUtilityClass = slot =>
        // TODO v6: Rename 'PrivatePickersSlideTransition' to 'MuiPickersSlideTransition' to follow convention
        generateUtilityClass('PrivatePickersSlideTransition', slot);
        const pickersSlideTransitionClasses = generateUtilityClasses(
        // TODO v6: Rename 'PrivatePickersSlideTransition' to 'MuiPickersSlideTransition' to follow convention
        'PrivatePickersSlideTransition', ['root', 'slideEnter-left', 'slideEnter-right', 'slideEnterActive', 'slideExit', 'slideExitActiveLeft-left', 'slideExitActiveLeft-right']);
        const _excluded$a = ["children", "className", "reduceAnimations", "slideDirection", "transKey"];
        const useUtilityClasses$8 = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ['root']
          };
          return composeClasses(slots, getPickersSlideTransitionUtilityClass, classes);
        };
        const slideAnimationDuration = 350;
        const PickersSlideTransitionRoot = styled(TransitionGroup, {
          name: 'PrivatePickersSlideTransition',
          slot: 'Root',
          overridesResolver: (_, styles) => [styles.root, {
            [`.${pickersSlideTransitionClasses['slideEnter-left']}`]: styles['slideEnter-left']
          }, {
            [`.${pickersSlideTransitionClasses['slideEnter-right']}`]: styles['slideEnter-right']
          }, {
            [`.${pickersSlideTransitionClasses.slideEnterActive}`]: styles.slideEnterActive
          }, {
            [`.${pickersSlideTransitionClasses.slideExit}`]: styles.slideExit
          }, {
            [`.${pickersSlideTransitionClasses['slideExitActiveLeft-left']}`]: styles['slideExitActiveLeft-left']
          }, {
            [`.${pickersSlideTransitionClasses['slideExitActiveLeft-right']}`]: styles['slideExitActiveLeft-right']
          }]
        })(({
          theme
        }) => {
          const slideTransition = theme.transitions.create('transform', {
            duration: slideAnimationDuration,
            easing: 'cubic-bezier(0.35, 0.8, 0.4, 1)'
          });
          return {
            display: 'block',
            position: 'relative',
            overflowX: 'hidden',
            '& > *': {
              position: 'absolute',
              top: 0,
              right: 0,
              left: 0
            },
            [`& .${pickersSlideTransitionClasses['slideEnter-left']}`]: {
              willChange: 'transform',
              transform: 'translate(100%)',
              zIndex: 1
            },
            [`& .${pickersSlideTransitionClasses['slideEnter-right']}`]: {
              willChange: 'transform',
              transform: 'translate(-100%)',
              zIndex: 1
            },
            [`& .${pickersSlideTransitionClasses.slideEnterActive}`]: {
              transform: 'translate(0%)',
              transition: slideTransition
            },
            [`& .${pickersSlideTransitionClasses.slideExit}`]: {
              transform: 'translate(0%)'
            },
            [`& .${pickersSlideTransitionClasses['slideExitActiveLeft-left']}`]: {
              willChange: 'transform',
              transform: 'translate(-100%)',
              transition: slideTransition,
              zIndex: 0
            },
            [`& .${pickersSlideTransitionClasses['slideExitActiveLeft-right']}`]: {
              willChange: 'transform',
              transform: 'translate(100%)',
              transition: slideTransition,
              zIndex: 0
            }
          };
        });
        /**
         * @ignore - do not document.
         */

        const PickersSlideTransition = props => {
          // TODO v6: add 'useThemeProps' once the component class names are aligned
          const children = props.children,
            className = props.className,
            reduceAnimations = props.reduceAnimations,
            slideDirection = props.slideDirection,
            transKey = props.transKey,
            other = _objectWithoutPropertiesLoose(props, _excluded$a);
          const classes = useUtilityClasses$8(props);
          if (reduceAnimations) {
            return /*#__PURE__*/jsxRuntimeExports.jsx("div", {
              className: clsx(classes.root, className),
              children: children
            });
          }
          const transitionClasses = {
            exit: pickersSlideTransitionClasses.slideExit,
            enterActive: pickersSlideTransitionClasses.slideEnterActive,
            enter: pickersSlideTransitionClasses[`slideEnter-${slideDirection}`],
            exitActive: pickersSlideTransitionClasses[`slideExitActiveLeft-${slideDirection}`]
          };
          return /*#__PURE__*/jsxRuntimeExports.jsx(PickersSlideTransitionRoot, {
            className: clsx(classes.root, className),
            childFactory: element => /*#__PURE__*/reactExports.cloneElement(element, {
              classNames: transitionClasses
            }),
            role: "presentation",
            children: /*#__PURE__*/jsxRuntimeExports.jsx(CSSTransition, _extends({
              mountOnEnter: true,
              unmountOnExit: true,
              timeout: slideAnimationDuration,
              classNames: transitionClasses
            }, other, {
              children: children
            }), transKey)
          });
        };
        const getDayPickerUtilityClass = slot => generateUtilityClass('MuiDayPicker', slot);
        generateUtilityClasses('MuiDayPicker', ['header', 'weekDayLabel', 'loadingContainer', 'slideTransition', 'monthContainer', 'weekContainer']);
        const useUtilityClasses$7 = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            header: ['header'],
            weekDayLabel: ['weekDayLabel'],
            loadingContainer: ['loadingContainer'],
            slideTransition: ['slideTransition'],
            monthContainer: ['monthContainer'],
            weekContainer: ['weekContainer']
          };
          return composeClasses(slots, getDayPickerUtilityClass, classes);
        };
        const defaultDayOfWeekFormatter = day => day.charAt(0).toUpperCase();
        const weeksContainerHeight = (DAY_SIZE + DAY_MARGIN * 2) * 6;
        const PickersCalendarDayHeader = styled('div', {
          name: 'MuiDayPicker',
          slot: 'Header',
          overridesResolver: (_, styles) => styles.header
        })({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        });
        const PickersCalendarWeekDayLabel = styled(Typography, {
          name: 'MuiDayPicker',
          slot: 'WeekDayLabel',
          overridesResolver: (_, styles) => styles.weekDayLabel
        })(({
          theme
        }) => ({
          width: 36,
          height: 40,
          margin: '0 2px',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: theme.palette.text.secondary
        }));
        const PickersCalendarLoadingContainer = styled('div', {
          name: 'MuiDayPicker',
          slot: 'LoadingContainer',
          overridesResolver: (_, styles) => styles.loadingContainer
        })({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: weeksContainerHeight
        });
        const PickersCalendarSlideTransition = styled(PickersSlideTransition, {
          name: 'MuiDayPicker',
          slot: 'SlideTransition',
          overridesResolver: (_, styles) => styles.slideTransition
        })({
          minHeight: weeksContainerHeight
        });
        const PickersCalendarWeekContainer = styled('div', {
          name: 'MuiDayPicker',
          slot: 'MonthContainer',
          overridesResolver: (_, styles) => styles.monthContainer
        })({
          overflow: 'hidden'
        });
        const PickersCalendarWeek = styled('div', {
          name: 'MuiDayPicker',
          slot: 'WeekContainer',
          overridesResolver: (_, styles) => styles.weekContainer
        })({
          margin: `${DAY_MARGIN}px 0`,
          display: 'flex',
          justifyContent: 'center'
        });
        /**
         * @ignore - do not document.
         */

        function DayPicker(inProps) {
          const now = useNow();
          const utils = useUtils();
          const props = useThemeProps({
            props: inProps,
            name: 'MuiDayPicker'
          });
          const classes = useUtilityClasses$7(props);
          const onFocusedDayChange = props.onFocusedDayChange,
            className = props.className,
            currentMonth = props.currentMonth,
            selectedDays = props.selectedDays,
            disabled = props.disabled,
            disableHighlightToday = props.disableHighlightToday,
            focusedDay = props.focusedDay,
            isMonthSwitchingAnimating = props.isMonthSwitchingAnimating,
            loading = props.loading,
            onSelectedDaysChange = props.onSelectedDaysChange,
            onMonthSwitchingAnimationEnd = props.onMonthSwitchingAnimationEnd,
            readOnly = props.readOnly,
            reduceAnimations = props.reduceAnimations,
            renderDay = props.renderDay,
            _props$renderLoading = props.renderLoading,
            renderLoading = _props$renderLoading === void 0 ? () => /*#__PURE__*/jsxRuntimeExports.jsx("span", {
              children: "..."
            }) : _props$renderLoading,
            showDaysOutsideCurrentMonth = props.showDaysOutsideCurrentMonth,
            slideDirection = props.slideDirection,
            TransitionProps = props.TransitionProps,
            disablePast = props.disablePast,
            disableFuture = props.disableFuture,
            minDate = props.minDate,
            maxDate = props.maxDate,
            shouldDisableDate = props.shouldDisableDate,
            _props$dayOfWeekForma = props.dayOfWeekFormatter,
            dayOfWeekFormatter = _props$dayOfWeekForma === void 0 ? defaultDayOfWeekFormatter : _props$dayOfWeekForma,
            hasFocus = props.hasFocus,
            onFocusedViewChange = props.onFocusedViewChange,
            gridLabelId = props.gridLabelId;
          const isDateDisabled = useIsDayDisabled({
            shouldDisableDate,
            minDate,
            maxDate,
            disablePast,
            disableFuture
          });
          const _reactExports$useStat3 = reactExports.useState(() => focusedDay || now),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            internalFocusedDay = _reactExports$useStat4[0],
            setInternalFocusedDay = _reactExports$useStat4[1];
          const changeHasFocus = reactExports.useCallback(newHasFocus => {
            if (onFocusedViewChange) {
              onFocusedViewChange(newHasFocus);
            }
          }, [onFocusedViewChange]);
          const handleDaySelect = reactExports.useCallback((day, isFinish = 'finish') => {
            if (readOnly) {
              return;
            }
            onSelectedDaysChange(day, isFinish);
          }, [onSelectedDaysChange, readOnly]);
          const focusDay = reactExports.useCallback(day => {
            if (!isDateDisabled(day)) {
              onFocusedDayChange(day);
              setInternalFocusedDay(day);
              changeHasFocus(true);
            }
          }, [isDateDisabled, onFocusedDayChange, changeHasFocus]);
          const theme = useTheme();
          function handleKeyDown(event, day) {
            switch (event.key) {
              case 'ArrowUp':
                focusDay(utils.addDays(day, -7));
                event.preventDefault();
                break;
              case 'ArrowDown':
                focusDay(utils.addDays(day, 7));
                event.preventDefault();
                break;
              case 'ArrowLeft':
                {
                  const newFocusedDayDefault = utils.addDays(day, theme.direction === 'ltr' ? -1 : 1);
                  const nextAvailableMonth = theme.direction === 'ltr' ? utils.getPreviousMonth(day) : utils.getNextMonth(day);
                  const closestDayToFocus = findClosestEnabledDate({
                    utils,
                    date: newFocusedDayDefault,
                    minDate: theme.direction === 'ltr' ? utils.startOfMonth(nextAvailableMonth) : newFocusedDayDefault,
                    maxDate: theme.direction === 'ltr' ? newFocusedDayDefault : utils.endOfMonth(nextAvailableMonth),
                    isDateDisabled
                  });
                  focusDay(closestDayToFocus || newFocusedDayDefault);
                  event.preventDefault();
                  break;
                }
              case 'ArrowRight':
                {
                  const newFocusedDayDefault = utils.addDays(day, theme.direction === 'ltr' ? 1 : -1);
                  const nextAvailableMonth = theme.direction === 'ltr' ? utils.getNextMonth(day) : utils.getPreviousMonth(day);
                  const closestDayToFocus = findClosestEnabledDate({
                    utils,
                    date: newFocusedDayDefault,
                    minDate: theme.direction === 'ltr' ? newFocusedDayDefault : utils.startOfMonth(nextAvailableMonth),
                    maxDate: theme.direction === 'ltr' ? utils.endOfMonth(nextAvailableMonth) : newFocusedDayDefault,
                    isDateDisabled
                  });
                  focusDay(closestDayToFocus || newFocusedDayDefault);
                  event.preventDefault();
                  break;
                }
              case 'Home':
                focusDay(utils.startOfWeek(day));
                event.preventDefault();
                break;
              case 'End':
                focusDay(utils.endOfWeek(day));
                event.preventDefault();
                break;
              case 'PageUp':
                focusDay(utils.getNextMonth(day));
                event.preventDefault();
                break;
              case 'PageDown':
                focusDay(utils.getPreviousMonth(day));
                event.preventDefault();
                break;
            }
          }
          function handleFocus(event, day) {
            focusDay(day);
          }
          function handleBlur(event, day) {
            if (hasFocus && utils.isSameDay(internalFocusedDay, day)) {
              changeHasFocus(false);
            }
          }
          const currentMonthNumber = utils.getMonth(currentMonth);
          const validSelectedDays = selectedDays.filter(day => !!day).map(day => utils.startOfDay(day)); // need a new ref whenever the `key` of the transition changes: http://reactcommunity.org/react-transition-group/transition/#Transition-prop-nodeRef.

          const transitionKey = currentMonthNumber; // eslint-disable-next-line react-hooks/exhaustive-deps

          const slideNodeRef = reactExports.useMemo(() => /*#__PURE__*/reactExports.createRef(), [transitionKey]);
          const startOfCurrentWeek = utils.startOfWeek(now);
          const focusableDay = reactExports.useMemo(() => {
            const startOfMonth = utils.startOfMonth(currentMonth);
            const endOfMonth = utils.endOfMonth(currentMonth);
            if (isDateDisabled(internalFocusedDay) || utils.isAfterDay(internalFocusedDay, endOfMonth) || utils.isBeforeDay(internalFocusedDay, startOfMonth)) {
              return findClosestEnabledDate({
                utils,
                date: internalFocusedDay,
                minDate: startOfMonth,
                maxDate: endOfMonth,
                disablePast,
                disableFuture,
                isDateDisabled
              });
            }
            return internalFocusedDay;
          }, [currentMonth, disableFuture, disablePast, internalFocusedDay, isDateDisabled, utils]);
          return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
            role: "grid",
            "aria-labelledby": gridLabelId,
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(PickersCalendarDayHeader, {
              role: "row",
              className: classes.header,
              children: utils.getWeekdays().map((day, i) => {
                var _dayOfWeekFormatter;
                return /*#__PURE__*/jsxRuntimeExports.jsx(PickersCalendarWeekDayLabel, {
                  variant: "caption",
                  role: "columnheader",
                  "aria-label": utils.format(utils.addDays(startOfCurrentWeek, i), 'weekday'),
                  className: classes.weekDayLabel,
                  children: (_dayOfWeekFormatter = dayOfWeekFormatter == null ? void 0 : dayOfWeekFormatter(day)) != null ? _dayOfWeekFormatter : day
                }, day + i.toString());
              })
            }), loading ? /*#__PURE__*/jsxRuntimeExports.jsx(PickersCalendarLoadingContainer, {
              className: classes.loadingContainer,
              children: renderLoading()
            }) : /*#__PURE__*/jsxRuntimeExports.jsx(PickersCalendarSlideTransition, _extends({
              transKey: transitionKey,
              onExited: onMonthSwitchingAnimationEnd,
              reduceAnimations: reduceAnimations,
              slideDirection: slideDirection,
              className: clsx(className, classes.slideTransition)
            }, TransitionProps, {
              nodeRef: slideNodeRef,
              children: /*#__PURE__*/jsxRuntimeExports.jsx(PickersCalendarWeekContainer, {
                ref: slideNodeRef,
                role: "rowgroup",
                className: classes.monthContainer,
                children: utils.getWeekArray(currentMonth).map(week => /*#__PURE__*/jsxRuntimeExports.jsx(PickersCalendarWeek, {
                  role: "row",
                  className: classes.weekContainer,
                  children: week.map(day => {
                    const isFocusableDay = focusableDay !== null && utils.isSameDay(day, focusableDay);
                    const isSelected = validSelectedDays.some(selectedDay => utils.isSameDay(selectedDay, day));
                    const isToday = utils.isSameDay(day, now);
                    const pickersDayProps = {
                      key: day == null ? void 0 : day.toString(),
                      day,
                      isAnimating: isMonthSwitchingAnimating,
                      disabled: disabled || isDateDisabled(day),
                      autoFocus: hasFocus && isFocusableDay,
                      today: isToday,
                      outsideCurrentMonth: utils.getMonth(day) !== currentMonthNumber,
                      selected: isSelected,
                      disableHighlightToday,
                      showDaysOutsideCurrentMonth,
                      onKeyDown: handleKeyDown,
                      onFocus: handleFocus,
                      onBlur: handleBlur,
                      onDaySelect: handleDaySelect,
                      tabIndex: isFocusableDay ? 0 : -1,
                      role: 'gridcell',
                      'aria-selected': isSelected
                    };
                    if (isToday) {
                      pickersDayProps['aria-current'] = 'date';
                    }
                    return renderDay ? renderDay(day, validSelectedDays, pickersDayProps) : /*#__PURE__*/reactExports.createElement(PickersDay, _extends({}, pickersDayProps, {
                      key: pickersDayProps.key
                    }));
                  })
                }, `week-${week[0]}`))
              })
            }))]
          });
        }
        const getPickersCalendarHeaderUtilityClass = slot => generateUtilityClass('MuiPickersCalendarHeader', slot);
        generateUtilityClasses('MuiPickersCalendarHeader', ['root', 'labelContainer', 'label', 'switchViewButton', 'switchViewIcon']);
        const useUtilityClasses$6 = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ['root'],
            labelContainer: ['labelContainer'],
            label: ['label'],
            switchViewButton: ['switchViewButton'],
            switchViewIcon: ['switchViewIcon']
          };
          return composeClasses(slots, getPickersCalendarHeaderUtilityClass, classes);
        };
        const PickersCalendarHeaderRoot = styled('div', {
          name: 'MuiPickersCalendarHeader',
          slot: 'Root',
          overridesResolver: (_, styles) => styles.root
        })({
          display: 'flex',
          alignItems: 'center',
          marginTop: 16,
          marginBottom: 8,
          paddingLeft: 24,
          paddingRight: 12,
          // prevent jumping in safari
          maxHeight: 30,
          minHeight: 30
        });
        const PickersCalendarHeaderLabelContainer = styled('div', {
          name: 'MuiPickersCalendarHeader',
          slot: 'LabelContainer',
          overridesResolver: (_, styles) => styles.labelContainer
        })(({
          theme
        }) => _extends({
          display: 'flex',
          maxHeight: 30,
          overflow: 'hidden',
          alignItems: 'center',
          cursor: 'pointer',
          marginRight: 'auto'
        }, theme.typography.body1, {
          fontWeight: theme.typography.fontWeightMedium
        }));
        const PickersCalendarHeaderLabel = styled('div', {
          name: 'MuiPickersCalendarHeader',
          slot: 'Label',
          overridesResolver: (_, styles) => styles.label
        })({
          marginRight: 6
        });
        const PickersCalendarHeaderSwitchViewButton = styled(IconButton, {
          name: 'MuiPickersCalendarHeader',
          slot: 'SwitchViewButton',
          overridesResolver: (_, styles) => styles.switchViewButton
        })({
          marginRight: 'auto'
        });
        const PickersCalendarHeaderSwitchViewIcon = styled(ArrowDropDown, {
          name: 'MuiPickersCalendarHeader',
          slot: 'SwitchViewIcon',
          overridesResolver: (_, styles) => styles.switchViewIcon
        })(({
          theme,
          ownerState
        }) => _extends({
          willChange: 'transform',
          transition: theme.transitions.create('transform'),
          transform: 'rotate(0deg)'
        }, ownerState.openView === 'year' && {
          transform: 'rotate(180deg)'
        }));
        const deprecatedPropsWarning = buildDeprecatedPropsWarning();
        /**
         * @ignore - do not document.
         */

        function PickersCalendarHeader(inProps) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiPickersCalendarHeader'
          });
          const _props$components = props.components,
            components = _props$components === void 0 ? {} : _props$components,
            _props$componentsProp = props.componentsProps,
            componentsProps = _props$componentsProp === void 0 ? {} : _props$componentsProp,
            month = props.currentMonth,
            disabled = props.disabled,
            disableFuture = props.disableFuture,
            disablePast = props.disablePast,
            getViewSwitchingButtonTextProp = props.getViewSwitchingButtonText,
            leftArrowButtonTextProp = props.leftArrowButtonText,
            maxDate = props.maxDate,
            minDate = props.minDate,
            onMonthChange = props.onMonthChange,
            onViewChange = props.onViewChange,
            currentView = props.openView,
            reduceAnimations = props.reduceAnimations,
            rightArrowButtonTextProp = props.rightArrowButtonText,
            views = props.views,
            labelId = props.labelId;
          deprecatedPropsWarning({
            leftArrowButtonText: leftArrowButtonTextProp,
            rightArrowButtonText: rightArrowButtonTextProp,
            getViewSwitchingButtonText: getViewSwitchingButtonTextProp
          });
          const localeText = useLocaleText();
          const leftArrowButtonText = leftArrowButtonTextProp != null ? leftArrowButtonTextProp : localeText.previousMonth;
          const rightArrowButtonText = rightArrowButtonTextProp != null ? rightArrowButtonTextProp : localeText.nextMonth;
          const getViewSwitchingButtonText = getViewSwitchingButtonTextProp != null ? getViewSwitchingButtonTextProp : localeText.calendarViewSwitchingButtonAriaLabel;
          const utils = useUtils();
          const classes = useUtilityClasses$6(props);
          const switchViewButtonProps = componentsProps.switchViewButton || {};
          const selectNextMonth = () => onMonthChange(utils.getNextMonth(month), 'left');
          const selectPreviousMonth = () => onMonthChange(utils.getPreviousMonth(month), 'right');
          const isNextMonthDisabled = useNextMonthDisabled(month, {
            disableFuture,
            maxDate
          });
          const isPreviousMonthDisabled = usePreviousMonthDisabled(month, {
            disablePast,
            minDate
          });
          const handleToggleView = () => {
            if (views.length === 1 || !onViewChange || disabled) {
              return;
            }
            if (views.length === 2) {
              onViewChange(views.find(view => view !== currentView) || views[0]);
            } else {
              // switching only between first 2
              const nextIndexToOpen = views.indexOf(currentView) !== 0 ? 0 : 1;
              onViewChange(views[nextIndexToOpen]);
            }
          }; // No need to display more information

          if (views.length === 1 && views[0] === 'year') {
            return null;
          }
          const ownerState = props;
          return /*#__PURE__*/jsxRuntimeExports.jsxs(PickersCalendarHeaderRoot, {
            ownerState: ownerState,
            className: classes.root,
            children: [/*#__PURE__*/jsxRuntimeExports.jsxs(PickersCalendarHeaderLabelContainer, {
              role: "presentation",
              onClick: handleToggleView,
              ownerState: ownerState // putting this on the label item element below breaks when using transition
              ,

              "aria-live": "polite",
              className: classes.labelContainer,
              children: [/*#__PURE__*/jsxRuntimeExports.jsx(PickersFadeTransitionGroup, {
                reduceAnimations: reduceAnimations,
                transKey: utils.format(month, 'monthAndYear'),
                children: /*#__PURE__*/jsxRuntimeExports.jsx(PickersCalendarHeaderLabel, {
                  id: labelId,
                  ownerState: ownerState,
                  className: classes.label,
                  children: utils.format(month, 'monthAndYear')
                })
              }), views.length > 1 && !disabled && /*#__PURE__*/jsxRuntimeExports.jsx(PickersCalendarHeaderSwitchViewButton, _extends({
                size: "small",
                as: components.SwitchViewButton,
                "aria-label": getViewSwitchingButtonText(currentView),
                className: classes.switchViewButton
              }, switchViewButtonProps, {
                children: /*#__PURE__*/jsxRuntimeExports.jsx(PickersCalendarHeaderSwitchViewIcon, {
                  as: components.SwitchViewIcon,
                  ownerState: ownerState,
                  className: classes.switchViewIcon
                })
              }))]
            }), /*#__PURE__*/jsxRuntimeExports.jsx(Fade, {
              in: currentView === 'day',
              children: /*#__PURE__*/jsxRuntimeExports.jsx(PickersArrowSwitcher, {
                leftArrowButtonText: leftArrowButtonText,
                rightArrowButtonText: rightArrowButtonText,
                components: components,
                componentsProps: componentsProps,
                onLeftClick: selectPreviousMonth,
                onRightClick: selectNextMonth,
                isLeftDisabled: isPreviousMonthDisabled,
                isRightDisabled: isNextMonthDisabled
              })
            })]
          });
        }
        function getPickersYearUtilityClass(slot) {
          // TODO v6: Rename 'PrivatePickersYear' to 'MuiPickersYear' to follow convention
          return generateUtilityClass('PrivatePickersYear', slot);
        } // TODO v6: Rename 'PrivatePickersYear' to 'MuiPickersYear' to follow convention

        const pickersYearClasses = generateUtilityClasses('PrivatePickersYear', ['root', 'modeDesktop', 'modeMobile', 'yearButton', 'selected', 'disabled']);
        const _excluded$9 = ["autoFocus", "className", "children", "disabled", "onClick", "onKeyDown", "value", "tabIndex", "onFocus", "onBlur"];
        const useUtilityClasses$5 = ownerState => {
          const wrapperVariant = ownerState.wrapperVariant,
            disabled = ownerState.disabled,
            selected = ownerState.selected,
            classes = ownerState.classes;
          const slots = {
            root: ['root', wrapperVariant && `mode${capitalize(wrapperVariant)}`],
            yearButton: ['yearButton', disabled && 'disabled', selected && 'selected']
          };
          return composeClasses(slots, getPickersYearUtilityClass, classes);
        };
        const PickersYearRoot = styled('div', {
          name: 'PrivatePickersYear',
          slot: 'Root',
          overridesResolver: (_, styles) => [styles.root, {
            [`&.${pickersYearClasses.modeDesktop}`]: styles.modeDesktop
          }, {
            [`&.${pickersYearClasses.modeMobile}`]: styles.modeMobile
          }]
        })(({
          ownerState
        }) => _extends({
          flexBasis: '33.3%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }, (ownerState == null ? void 0 : ownerState.wrapperVariant) === 'desktop' && {
          flexBasis: '25%'
        }));
        const PickersYearButton = styled('button', {
          name: 'PrivatePickersYear',
          slot: 'Button',
          overridesResolver: (_, styles) => [styles.button, {
            [`&.${pickersYearClasses.disabled}`]: styles.disabled
          }, {
            [`&.${pickersYearClasses.selected}`]: styles.selected
          }]
        })(({
          theme
        }) => _extends({
          color: 'unset',
          backgroundColor: 'transparent',
          border: 0,
          outline: 0
        }, theme.typography.subtitle1, {
          margin: '8px 0',
          height: 36,
          width: 72,
          borderRadius: 18,
          cursor: 'pointer',
          '&:focus, &:hover': {
            backgroundColor: alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
          },
          [`&.${pickersYearClasses.disabled}`]: {
            color: theme.palette.text.secondary
          },
          [`&.${pickersYearClasses.selected}`]: {
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.primary.main,
            '&:focus, &:hover': {
              backgroundColor: theme.palette.primary.dark
            }
          }
        }));
        const noop = () => {};
        /**
         * @ignore - internal component.
         */

        const PickersYear = /*#__PURE__*/reactExports.forwardRef(function PickersYear(props, forwardedRef) {
          // TODO v6: add 'useThemeProps' once the component class names are aligned
          const autoFocus = props.autoFocus,
            className = props.className,
            children = props.children,
            disabled = props.disabled,
            _onClick = props.onClick,
            _onKeyDown2 = props.onKeyDown,
            value = props.value,
            tabIndex = props.tabIndex,
            _props$onFocus3 = props.onFocus,
            _onFocus3 = _props$onFocus3 === void 0 ? noop : _props$onFocus3,
            _props$onBlur3 = props.onBlur,
            _onBlur3 = _props$onBlur3 === void 0 ? noop : _props$onBlur3,
            other = _objectWithoutPropertiesLoose(props, _excluded$9);
          const ref = reactExports.useRef(null);
          const refHandle = useForkRef(ref, forwardedRef);
          const wrapperVariant = reactExports.useContext(WrapperVariantContext);
          const ownerState = _extends({}, props, {
            wrapperVariant
          });
          const classes = useUtilityClasses$5(ownerState); // We can't forward the `autoFocus` to the button because it is a native button, not a MUI Button

          reactExports.useEffect(() => {
            if (autoFocus) {
              // `ref.current` being `null` would be a bug in MUI.
              ref.current.focus();
            }
          }, [autoFocus]);
          return /*#__PURE__*/jsxRuntimeExports.jsx(PickersYearRoot, {
            className: clsx(classes.root, className),
            ownerState: ownerState,
            children: /*#__PURE__*/jsxRuntimeExports.jsx(PickersYearButton, _extends({
              ref: refHandle,
              disabled: disabled,
              type: "button",
              tabIndex: disabled ? -1 : tabIndex,
              onClick: event => _onClick(event, value),
              onKeyDown: event => _onKeyDown2(event, value),
              onFocus: event => _onFocus3(event, value),
              onBlur: event => _onBlur3(event, value),
              className: classes.yearButton,
              ownerState: ownerState
            }, other, {
              children: children
            }))
          });
        });
        function getYearPickerUtilityClass(slot) {
          return generateUtilityClass('MuiYearPicker', slot);
        }
        generateUtilityClasses('MuiYearPicker', ['root']);
        const useUtilityClasses$4 = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ["root"]
          };
          return composeClasses(slots, getYearPickerUtilityClass, classes);
        };
        function useYearPickerDefaultizedProps(props, name) {
          const utils = useUtils();
          const defaultDates = useDefaultDates();
          const themeProps = useThemeProps({
            props,
            name
          });
          return _extends({
            disablePast: false,
            disableFuture: false
          }, themeProps, {
            minDate: parseNonNullablePickerDate(utils, themeProps.minDate, defaultDates.minDate),
            maxDate: parseNonNullablePickerDate(utils, themeProps.maxDate, defaultDates.maxDate)
          });
        }
        const YearPickerRoot = styled("div", {
          name: "MuiYearPicker",
          slot: "Root",
          overridesResolver: (props, styles) => styles.root
        })({
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          overflowY: "auto",
          height: "100%",
          padding: "0 4px",
          maxHeight: "304px"
        });
        const YearPicker = /* @__PURE__ */reactExports.forwardRef(function YearPicker2(inProps, ref) {
          const now = useNow();
          const theme = useTheme();
          const utils = useUtils();
          const props = useYearPickerDefaultizedProps(inProps, "MuiYearPicker");
          const autoFocus = props.autoFocus,
            className = props.className,
            date = props.date,
            disabled = props.disabled,
            disableFuture = props.disableFuture,
            disablePast = props.disablePast,
            maxDate = props.maxDate,
            minDate = props.minDate,
            onChange = props.onChange,
            readOnly = props.readOnly,
            shouldDisableYear = props.shouldDisableYear,
            disableHighlightToday = props.disableHighlightToday,
            onYearFocus = props.onYearFocus,
            hasFocus = props.hasFocus,
            onFocusedViewChange = props.onFocusedViewChange;
          const ownerState = props;
          const classes = useUtilityClasses$4(ownerState);
          const selectedDateOrStartOfYear = reactExports.useMemo(() => date != null ? date : utils.startOfYear(now), [now, utils, date]);
          const currentYear = reactExports.useMemo(() => {
            if (date != null) {
              return utils.getYear(date);
            }
            if (disableHighlightToday) {
              return null;
            }
            return utils.getYear(now);
          }, [now, date, utils, disableHighlightToday]);
          const wrapperVariant = reactExports.useContext(WrapperVariantContext);
          const selectedYearRef = reactExports.useRef(null);
          const _reactExports$useStat5 = reactExports.useState(() => currentYear || utils.getYear(now)),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            focusedYear = _reactExports$useStat6[0],
            setFocusedYear = _reactExports$useStat6[1];
          const _useControlled5 = useControlled({
              name: "YearPicker",
              state: "hasFocus",
              controlled: hasFocus,
              default: autoFocus
            }),
            _useControlled6 = _slicedToArray(_useControlled5, 2),
            internalHasFocus = _useControlled6[0],
            setInternalHasFocus = _useControlled6[1];
          const changeHasFocus = reactExports.useCallback(newHasFocus => {
            setInternalHasFocus(newHasFocus);
            if (onFocusedViewChange) {
              onFocusedViewChange(newHasFocus);
            }
          }, [setInternalHasFocus, onFocusedViewChange]);
          const isYearDisabled = reactExports.useCallback(dateToValidate => {
            if (disablePast && utils.isBeforeYear(dateToValidate, now)) {
              return true;
            }
            if (disableFuture && utils.isAfterYear(dateToValidate, now)) {
              return true;
            }
            if (minDate && utils.isBeforeYear(dateToValidate, minDate)) {
              return true;
            }
            if (maxDate && utils.isAfterYear(dateToValidate, maxDate)) {
              return true;
            }
            if (shouldDisableYear && shouldDisableYear(dateToValidate)) {
              return true;
            }
            return false;
          }, [disableFuture, disablePast, maxDate, minDate, now, shouldDisableYear, utils]);
          const handleYearSelection = (event, year, isFinish = "finish") => {
            if (readOnly) {
              return;
            }
            const newDate = utils.setYear(selectedDateOrStartOfYear, year);
            onChange(newDate, isFinish);
          };
          const focusYear = reactExports.useCallback(year => {
            if (!isYearDisabled(utils.setYear(selectedDateOrStartOfYear, year))) {
              setFocusedYear(year);
              changeHasFocus(true);
              onYearFocus == null ? void 0 : onYearFocus(year);
            }
          }, [isYearDisabled, utils, selectedDateOrStartOfYear, changeHasFocus, onYearFocus]);
          reactExports.useEffect(() => {
            setFocusedYear(prevFocusedYear => currentYear !== null && prevFocusedYear !== currentYear ? currentYear : prevFocusedYear);
          }, [currentYear]);
          const yearsInRow = wrapperVariant === "desktop" ? 4 : 3;
          const handleKeyDown = reactExports.useCallback((event, year) => {
            switch (event.key) {
              case "ArrowUp":
                focusYear(year - yearsInRow);
                event.preventDefault();
                break;
              case "ArrowDown":
                focusYear(year + yearsInRow);
                event.preventDefault();
                break;
              case "ArrowLeft":
                focusYear(year + (theme.direction === "ltr" ? -1 : 1));
                event.preventDefault();
                break;
              case "ArrowRight":
                focusYear(year + (theme.direction === "ltr" ? 1 : -1));
                event.preventDefault();
                break;
            }
          }, [focusYear, theme.direction, yearsInRow]);
          const handleFocus = reactExports.useCallback((event, year) => {
            focusYear(year);
          }, [focusYear]);
          const handleBlur = reactExports.useCallback((event, year) => {
            if (focusedYear === year) {
              changeHasFocus(false);
            }
          }, [focusedYear, changeHasFocus]);
          const nowYear = utils.getYear(now);
          const scrollerRef = reactExports.useRef(null);
          const handleRef = useForkRef(ref, scrollerRef);
          reactExports.useEffect(() => {
            if (autoFocus || scrollerRef.current === null) {
              return;
            }
            const tabbableButton = scrollerRef.current.querySelector('[tabindex="0"]');
            if (!tabbableButton) {
              return;
            }
            const offsetHeight = tabbableButton.offsetHeight;
            const offsetTop = tabbableButton.offsetTop;
            const clientHeight = scrollerRef.current.clientHeight;
            const scrollTop = scrollerRef.current.scrollTop;
            const elementBottom = offsetTop + offsetHeight;
            if (offsetHeight > clientHeight || offsetTop < scrollTop) {
              return;
            }
            scrollerRef.current.scrollTop = elementBottom - clientHeight / 2 - offsetHeight / 2;
          }, [autoFocus]);
          return /* @__PURE__ */jsxRuntimeExports.jsx(YearPickerRoot, {
            ref: handleRef,
            className: clsx(classes.root, className),
            ownerState,
            children: utils.getYearRange(minDate, maxDate).map(year => {
              const yearNumber = utils.getYear(year);
              const selected = yearNumber === currentYear;
              return /* @__PURE__ */jsxRuntimeExports.jsx(PickersYear, {
                selected,
                value: yearNumber,
                onClick: handleYearSelection,
                onKeyDown: handleKeyDown,
                autoFocus: internalHasFocus && yearNumber === focusedYear,
                ref: selected ? selectedYearRef : void 0,
                disabled: disabled || isYearDisabled(year),
                tabIndex: yearNumber === focusedYear ? 0 : -1,
                onFocus: handleFocus,
                onBlur: handleBlur,
                "aria-current": nowYear === yearNumber ? "date" : void 0,
                children: utils.format(year, "year")
              }, utils.format(year, "year"));
            })
          });
        });
        const defaultReduceAnimations = typeof navigator !== 'undefined' && /(android)/i.test(navigator.userAgent);
        const getCalendarPickerUtilityClass = slot => generateUtilityClass('MuiCalendarPicker', slot);
        generateUtilityClasses('MuiCalendarPicker', ['root', 'viewTransitionContainer']);
        const _excluded$8 = ["autoFocus", "onViewChange", "date", "disableFuture", "disablePast", "defaultCalendarMonth", "onChange", "onYearChange", "onMonthChange", "reduceAnimations", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear", "view", "views", "openTo", "className", "disabled", "readOnly", "minDate", "maxDate", "disableHighlightToday", "focusedView", "onFocusedViewChange", "classes"];
        const useUtilityClasses$3 = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ["root"],
            viewTransitionContainer: ["viewTransitionContainer"]
          };
          return composeClasses(slots, getCalendarPickerUtilityClass, classes);
        };
        function useCalendarPickerDefaultizedProps(props, name) {
          const utils = useUtils();
          const defaultDates = useDefaultDates();
          const themeProps = useThemeProps({
            props,
            name
          });
          return _extends({
            loading: false,
            disablePast: false,
            disableFuture: false,
            openTo: "day",
            views: ["year", "day"],
            reduceAnimations: defaultReduceAnimations,
            renderLoading: () => /* @__PURE__ */jsxRuntimeExports.jsx("span", {
              children: "..."
            })
          }, themeProps, {
            minDate: parseNonNullablePickerDate(utils, themeProps.minDate, defaultDates.minDate),
            maxDate: parseNonNullablePickerDate(utils, themeProps.maxDate, defaultDates.maxDate)
          });
        }
        const CalendarPickerRoot = styled(PickerViewRoot, {
          name: "MuiCalendarPicker",
          slot: "Root",
          overridesResolver: (props, styles) => styles.root
        })({
          display: "flex",
          flexDirection: "column"
        });
        const CalendarPickerViewTransitionContainer = styled(PickersFadeTransitionGroup, {
          name: "MuiCalendarPicker",
          slot: "ViewTransitionContainer",
          overridesResolver: (props, styles) => styles.viewTransitionContainer
        })({});
        const CalendarPicker = /* @__PURE__ */reactExports.forwardRef(function CalendarPicker2(inProps, ref) {
          const utils = useUtils();
          const id = useId();
          const props = useCalendarPickerDefaultizedProps(inProps, "MuiCalendarPicker");
          const autoFocus = props.autoFocus,
            onViewChange = props.onViewChange,
            date = props.date,
            disableFuture = props.disableFuture,
            disablePast = props.disablePast,
            defaultCalendarMonth = props.defaultCalendarMonth,
            onChange = props.onChange,
            onYearChange = props.onYearChange,
            onMonthChange = props.onMonthChange,
            reduceAnimations = props.reduceAnimations,
            shouldDisableDate = props.shouldDisableDate,
            shouldDisableMonth = props.shouldDisableMonth,
            shouldDisableYear = props.shouldDisableYear,
            view = props.view,
            views = props.views,
            openTo = props.openTo,
            className = props.className,
            disabled = props.disabled,
            readOnly = props.readOnly,
            minDate = props.minDate,
            maxDate = props.maxDate,
            disableHighlightToday = props.disableHighlightToday,
            focusedView = props.focusedView,
            onFocusedViewChange = props.onFocusedViewChange,
            other = _objectWithoutPropertiesLoose(props, _excluded$8);
          const _useViews2 = useViews({
              view,
              views,
              openTo,
              onChange,
              onViewChange
            }),
            openView = _useViews2.openView,
            setOpenView = _useViews2.setOpenView,
            openNext = _useViews2.openNext;
          const _useCalendarState = useCalendarState({
              date,
              defaultCalendarMonth,
              reduceAnimations,
              onMonthChange,
              minDate,
              maxDate,
              shouldDisableDate,
              disablePast,
              disableFuture
            }),
            calendarState = _useCalendarState.calendarState,
            changeFocusedDay = _useCalendarState.changeFocusedDay,
            changeMonth = _useCalendarState.changeMonth,
            handleChangeMonth = _useCalendarState.handleChangeMonth,
            isDateDisabled = _useCalendarState.isDateDisabled,
            onMonthSwitchingAnimationEnd = _useCalendarState.onMonthSwitchingAnimationEnd;
          const handleDateMonthChange = reactExports.useCallback((newDate, selectionState) => {
            const startOfMonth = utils.startOfMonth(newDate);
            const endOfMonth = utils.endOfMonth(newDate);
            const closestEnabledDate = isDateDisabled(newDate) ? findClosestEnabledDate({
              utils,
              date: newDate,
              minDate: utils.isBefore(minDate, startOfMonth) ? startOfMonth : minDate,
              maxDate: utils.isAfter(maxDate, endOfMonth) ? endOfMonth : maxDate,
              disablePast,
              disableFuture,
              isDateDisabled
            }) : newDate;
            if (closestEnabledDate) {
              onChange(closestEnabledDate, selectionState);
              onMonthChange == null ? void 0 : onMonthChange(startOfMonth);
            } else {
              openNext();
              changeMonth(startOfMonth);
            }
            changeFocusedDay(closestEnabledDate, true);
          }, [changeFocusedDay, disableFuture, disablePast, isDateDisabled, maxDate, minDate, onChange, onMonthChange, changeMonth, openNext, utils]);
          const handleDateYearChange = reactExports.useCallback((newDate, selectionState) => {
            const startOfYear = utils.startOfYear(newDate);
            const endOfYear = utils.endOfYear(newDate);
            const closestEnabledDate = isDateDisabled(newDate) ? findClosestEnabledDate({
              utils,
              date: newDate,
              minDate: utils.isBefore(minDate, startOfYear) ? startOfYear : minDate,
              maxDate: utils.isAfter(maxDate, endOfYear) ? endOfYear : maxDate,
              disablePast,
              disableFuture,
              isDateDisabled
            }) : newDate;
            if (closestEnabledDate) {
              onChange(closestEnabledDate, selectionState);
              onYearChange == null ? void 0 : onYearChange(closestEnabledDate);
            } else {
              openNext();
              changeMonth(startOfYear);
            }
            changeFocusedDay(closestEnabledDate, true);
          }, [changeFocusedDay, disableFuture, disablePast, isDateDisabled, maxDate, minDate, onChange, onYearChange, openNext, utils, changeMonth]);
          const onSelectedDayChange = reactExports.useCallback((day, isFinish) => {
            if (date && day) {
              return onChange(utils.mergeDateAndTime(day, date), isFinish);
            }
            return onChange(day, isFinish);
          }, [utils, date, onChange]);
          reactExports.useEffect(() => {
            if (date) {
              changeMonth(date);
            }
          }, [date]);
          const ownerState = props;
          const classes = useUtilityClasses$3(ownerState);
          const baseDateValidationProps = {
            disablePast,
            disableFuture,
            maxDate,
            minDate
          };
          const minDateWithDisabled = disabled && date || minDate;
          const maxDateWithDisabled = disabled && date || maxDate;
          const commonViewProps = {
            disableHighlightToday,
            readOnly,
            disabled
          };
          const gridLabelId = `${id}-grid-label`;
          const _useControlled7 = useControlled({
              name: "DayPicker",
              state: "focusedView",
              controlled: focusedView,
              default: autoFocus ? openView : null
            }),
            _useControlled8 = _slicedToArray(_useControlled7, 2),
            internalFocusedView = _useControlled8[0],
            setInternalFocusedView = _useControlled8[1];
          const hasFocus = internalFocusedView !== null;
          const handleFocusedViewChange = useEventCallback(eventView => newHasFocus => {
            if (onFocusedViewChange) {
              onFocusedViewChange(eventView)(newHasFocus);
              return;
            }
            if (newHasFocus) {
              setInternalFocusedView(eventView);
            } else {
              setInternalFocusedView(prevView => prevView === eventView ? null : prevView);
            }
          });
          const prevOpenViewRef = reactExports.useRef(openView);
          reactExports.useEffect(() => {
            if (prevOpenViewRef.current === openView) {
              return;
            }
            prevOpenViewRef.current = openView;
            handleFocusedViewChange(openView)(true);
          }, [openView, handleFocusedViewChange]);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(CalendarPickerRoot, {
            ref,
            className: clsx(classes.root, className),
            ownerState,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(PickersCalendarHeader, _extends({}, other, {
              views,
              openView,
              currentMonth: calendarState.currentMonth,
              onViewChange: setOpenView,
              onMonthChange: (newMonth, direction) => handleChangeMonth({
                newMonth,
                direction
              }),
              minDate: minDateWithDisabled,
              maxDate: maxDateWithDisabled,
              disabled,
              disablePast,
              disableFuture,
              reduceAnimations,
              labelId: gridLabelId
            })), /* @__PURE__ */jsxRuntimeExports.jsx(CalendarPickerViewTransitionContainer, {
              reduceAnimations,
              className: classes.viewTransitionContainer,
              transKey: openView,
              ownerState,
              children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                children: [openView === "year" && /* @__PURE__ */jsxRuntimeExports.jsx(YearPicker, _extends({}, other, baseDateValidationProps, commonViewProps, {
                  autoFocus,
                  date,
                  onChange: handleDateYearChange,
                  shouldDisableYear,
                  hasFocus,
                  onFocusedViewChange: handleFocusedViewChange("year")
                })), openView === "month" && /* @__PURE__ */jsxRuntimeExports.jsx(MonthPicker, _extends({}, baseDateValidationProps, commonViewProps, {
                  autoFocus,
                  hasFocus,
                  className,
                  date,
                  onChange: handleDateMonthChange,
                  shouldDisableMonth,
                  onFocusedViewChange: handleFocusedViewChange("month")
                })), openView === "day" && /* @__PURE__ */jsxRuntimeExports.jsx(DayPicker, _extends({}, other, calendarState, baseDateValidationProps, commonViewProps, {
                  autoFocus,
                  onMonthSwitchingAnimationEnd,
                  onFocusedDayChange: changeFocusedDay,
                  reduceAnimations,
                  selectedDays: [date],
                  onSelectedDaysChange: onSelectedDayChange,
                  shouldDisableDate,
                  hasFocus,
                  onFocusedViewChange: handleFocusedViewChange("day"),
                  gridLabelId
                }))]
              })
            })]
          });
        });
        const useRifm = props => {
          const _reactExports$useRedu3 = reactExports.useReducer(c => c + 1, 0),
            _reactExports$useRedu4 = _slicedToArray(_reactExports$useRedu3, 2),
            refresh = _reactExports$useRedu4[1];
          const valueRef = reactExports.useRef(null);
          const replace = props.replace,
            append = props.append;
          const userValue = replace ? replace(props.format(props.value)) : props.format(props.value);
          const isDeleleteButtonDownRef = reactExports.useRef(false);
          const onChange = evt => {
            const eventValue = evt.target.value;
            valueRef.current = [eventValue,
            // eventValue
            evt.target,
            // input
            eventValue.length > userValue.length,
            // isSizeIncreaseOperation
            isDeleleteButtonDownRef.current,
            // isDeleleteButtonDown
            userValue === props.format(eventValue)
            // isNoOperation
            ];
            refresh();
          };
          {
            reactExports.useLayoutEffect(() => {
              if (valueRef.current == null) return;
              let _valueRef$current = _slicedToArray(valueRef.current, 5),
                eventValue = _valueRef$current[0],
                input = _valueRef$current[1],
                isSizeIncreaseOperation = _valueRef$current[2],
                isDeleleteButtonDown = _valueRef$current[3],
                // No operation means that value itself hasn't been changed, BTW cursor, selection etc can be changed
                isNoOperation = _valueRef$current[4];
              valueRef.current = null;
              const deleteWasNoOp = isDeleleteButtonDown && isNoOperation;
              const valueAfterSelectionStart = eventValue.slice(input.selectionStart);
              const acceptedCharIndexAfterDelete = valueAfterSelectionStart.search(props.accept || /\d/g);
              const charsToSkipAfterDelete = acceptedCharIndexAfterDelete !== -1 ? acceptedCharIndexAfterDelete : 0;
              const clean = str => (str.match(props.accept || /\d/g) || []).join("");
              const valueBeforeSelectionStart = clean(eventValue.substr(0, input.selectionStart));
              const getCursorPosition = val => {
                let start = 0;
                let cleanPos = 0;
                for (let i = 0; i !== valueBeforeSelectionStart.length; ++i) {
                  let newPos = val.indexOf(valueBeforeSelectionStart[i], start) + 1;
                  let newCleanPos = clean(val).indexOf(valueBeforeSelectionStart[i], cleanPos) + 1;
                  if (newCleanPos - cleanPos > 1) {
                    newPos = start;
                    newCleanPos = cleanPos;
                  }
                  cleanPos = Math.max(newCleanPos, cleanPos);
                  start = Math.max(start, newPos);
                }
                return start;
              };
              if (props.mask === true && isSizeIncreaseOperation && !isNoOperation) {
                let start = getCursorPosition(eventValue);
                const c = clean(eventValue.substr(start))[0];
                start = eventValue.indexOf(c, start);
                eventValue = `${eventValue.substr(0, start)}${eventValue.substr(start + 1)}`;
              }
              let formattedValue = props.format(eventValue);
              if (append != null &&
              // cursor at the end
              input.selectionStart === eventValue.length && !isNoOperation) {
                if (isSizeIncreaseOperation) {
                  formattedValue = append(formattedValue);
                } else {
                  if (clean(formattedValue.slice(-1)) === "") {
                    formattedValue = formattedValue.slice(0, -1);
                  }
                }
              }
              const replacedValue = replace ? replace(formattedValue) : formattedValue;
              if (userValue === replacedValue) {
                refresh();
              } else {
                props.onChange(replacedValue);
              }
              return () => {
                let start = getCursorPosition(formattedValue);
                if (props.mask != null && (isSizeIncreaseOperation || isDeleleteButtonDown && !deleteWasNoOp)) {
                  while (formattedValue[start] && clean(formattedValue[start]) === "") {
                    start += 1;
                  }
                }
                input.selectionStart = input.selectionEnd = start + (deleteWasNoOp ? 1 + charsToSkipAfterDelete : 0);
              };
            });
          }
          reactExports.useEffect(() => {
            const handleKeyDown = evt => {
              if (evt.code === "Delete") {
                isDeleleteButtonDownRef.current = true;
              }
            };
            const handleKeyUp = evt => {
              if (evt.code === "Delete") {
                isDeleleteButtonDownRef.current = false;
              }
            };
            document.addEventListener("keydown", handleKeyDown);
            document.addEventListener("keyup", handleKeyUp);
            return () => {
              document.removeEventListener("keydown", handleKeyDown);
              document.removeEventListener("keyup", handleKeyUp);
            };
          }, []);
          return {
            value: valueRef.current != null ? valueRef.current[0] : userValue,
            onChange
          };
        };
        const getDisplayDate = (utils, rawValue, inputFormat) => {
          const date = utils.date(rawValue);
          const isEmpty = rawValue === null;
          if (isEmpty) {
            return "";
          }
          return utils.isValid(date) ? utils.formatByString(
          // TODO: should `isValid` narrow `TDate | null` to `NonNullable<TDate>`?
          // Either we allow `TDate | null` to be valid and guard against calling `formatByString` with `null`.
          // Or we ensure `formatByString` is callable with `null`.
          date, inputFormat) : "";
        };
        const MASK_USER_INPUT_SYMBOL = "_";
        const staticDateWith2DigitTokens = "2019-11-21T22:30:00.000";
        const staticDateWith1DigitTokens = "2019-01-01T09:00:00.000";
        function getMaskFromCurrentFormat(mask, format, acceptRegex, utils) {
          if (mask) {
            return mask;
          }
          const formattedDateWith1Digit = utils.formatByString(utils.date(staticDateWith1DigitTokens), format);
          const inferredFormatPatternWith1Digits = formattedDateWith1Digit.replace(acceptRegex, MASK_USER_INPUT_SYMBOL);
          const inferredFormatPatternWith2Digits = utils.formatByString(utils.date(staticDateWith2DigitTokens), format).replace(acceptRegex, "_");
          if (inferredFormatPatternWith1Digits === inferredFormatPatternWith2Digits) {
            return inferredFormatPatternWith1Digits;
          }
          return "";
        }
        function checkMaskIsValidForCurrentFormat(mask, format, acceptRegex, utils) {
          if (!mask) {
            return false;
          }
          const formattedDateWith1Digit = utils.formatByString(utils.date(staticDateWith1DigitTokens), format);
          const inferredFormatPatternWith1Digits = formattedDateWith1Digit.replace(acceptRegex, MASK_USER_INPUT_SYMBOL);
          const inferredFormatPatternWith2Digits = utils.formatByString(utils.date(staticDateWith2DigitTokens), format).replace(acceptRegex, "_");
          const isMaskValid = inferredFormatPatternWith2Digits === inferredFormatPatternWith1Digits && mask === inferredFormatPatternWith2Digits;
          if (!isMaskValid && utils.lib !== "luxon" && false) {
            if (format.includes("MMM")) {
              console.warn([`Mask does not support literals such as 'MMM'.`, `Either use numbers with fix length or disable mask feature with 'disableMaskedInput' prop`, `Falling down to uncontrolled no-mask input.`].join("\n"));
            } else if (inferredFormatPatternWith2Digits && inferredFormatPatternWith2Digits !== inferredFormatPatternWith1Digits) {
              console.warn([`Mask does not support numbers with variable length such as 'M'.`, `Either use numbers with fix length or disable mask feature with 'disableMaskedInput' prop`, `Falling down to uncontrolled no-mask input.`].join("\n"));
            } else if (mask) {
              console.warn([`The mask "${mask}" you passed is not valid for the format used ${format}.`, `Falling down to uncontrolled no-mask input.`].join("\n"));
            }
          }
          return isMaskValid;
        }
        const maskedDateFormatter = (mask, acceptRegexp) => value => {
          let outputCharIndex = 0;
          return value.split("").map((char, inputCharIndex) => {
            acceptRegexp.lastIndex = 0;
            if (outputCharIndex > mask.length - 1) {
              return "";
            }
            const maskChar = mask[outputCharIndex];
            const nextMaskChar = mask[outputCharIndex + 1];
            const acceptedChar = acceptRegexp.test(char) ? char : "";
            const formattedChar = maskChar === MASK_USER_INPUT_SYMBOL ? acceptedChar : maskChar + acceptedChar;
            outputCharIndex += formattedChar.length;
            const isLastCharacter = inputCharIndex === value.length - 1;
            if (isLastCharacter && nextMaskChar && nextMaskChar !== MASK_USER_INPUT_SYMBOL) {
              return formattedChar ? formattedChar + nextMaskChar : "";
            }
            return formattedChar;
          }).join("");
        };
        const useMaskedInput = ({
          acceptRegex = /[\d]/gi,
          disabled,
          disableMaskedInput,
          ignoreInvalidInputs,
          inputFormat,
          inputProps,
          label,
          mask,
          onChange,
          rawValue,
          readOnly,
          rifmFormatter,
          TextFieldProps,
          validationError
        }) => {
          const utils = useUtils();
          const formatHelperText = utils.getFormatHelperText(inputFormat);
          const _reactExports$useMemo = reactExports.useMemo(() => {
              // formatting of dates is a quite slow thing, so do not make useless .format calls
              if (disableMaskedInput) {
                return {
                  shouldUseMaskedInput: false,
                  maskToUse: ''
                };
              }
              const computedMaskToUse = getMaskFromCurrentFormat(mask, inputFormat, acceptRegex, utils);
              return {
                shouldUseMaskedInput: checkMaskIsValidForCurrentFormat(computedMaskToUse, inputFormat, acceptRegex, utils),
                maskToUse: computedMaskToUse
              };
            }, [acceptRegex, disableMaskedInput, inputFormat, mask, utils]),
            shouldUseMaskedInput = _reactExports$useMemo.shouldUseMaskedInput,
            maskToUse = _reactExports$useMemo.maskToUse;
          const formatter = reactExports.useMemo(() => shouldUseMaskedInput && maskToUse ? maskedDateFormatter(maskToUse, acceptRegex) : st => st, [acceptRegex, maskToUse, shouldUseMaskedInput]); // TODO: Implement with controlled vs uncontrolled `rawValue`

          const parsedValue = rawValue === null ? null : utils.date(rawValue); // Track the value of the input

          const _reactExports$useStat7 = reactExports.useState(parsedValue),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            innerInputValue = _reactExports$useStat8[0],
            setInnerInputValue = _reactExports$useStat8[1]; // control the input text

          const _reactExports$useStat9 = reactExports.useState(getDisplayDate(utils, rawValue, inputFormat)),
            _reactExports$useStat10 = _slicedToArray(_reactExports$useStat9, 2),
            innerDisplayedInputValue = _reactExports$useStat10[0],
            setInnerDisplayedInputValue = _reactExports$useStat10[1]; // Inspired from autocomplete: https://github.com/mui/material-ui/blob/2c89d036dc2e16f100528f161600dffc83241768/packages/mui-base/src/AutocompleteUnstyled/useAutocomplete.js#L185:L201

          const prevRawValue = reactExports.useRef();
          const prevLocale = reactExports.useRef(utils.locale);
          const prevInputFormat = reactExports.useRef(inputFormat);
          reactExports.useEffect(() => {
            const rawValueHasChanged = rawValue !== prevRawValue.current;
            const localeHasChanged = utils.locale !== prevLocale.current;
            const inputFormatHasChanged = inputFormat !== prevInputFormat.current;
            prevRawValue.current = rawValue;
            prevLocale.current = utils.locale;
            prevInputFormat.current = inputFormat;
            if (!rawValueHasChanged && !localeHasChanged && !inputFormatHasChanged) {
              return;
            }
            const newParsedValue = rawValue === null ? null : utils.date(rawValue);
            const isAcceptedValue = rawValue === null || utils.isValid(newParsedValue);
            let innerEqualsParsed = innerInputValue === null && newParsedValue === null; // equal by being both null

            if (innerInputValue !== null && newParsedValue !== null) {
              const areEqual = utils.isEqual(innerInputValue, newParsedValue);
              if (areEqual) {
                innerEqualsParsed = true;
              } else {
                const diff = Math.abs(utils.getDiff(innerInputValue, newParsedValue)); // diff in ms

                innerEqualsParsed = diff === 0 ? areEqual // if no diff, use equal to test the time-zone
                : diff < 1000; // accept a difference bellow 1s
              }
            }
            if (!localeHasChanged && !inputFormatHasChanged && (!isAcceptedValue || innerEqualsParsed)) {
              return;
            } // When dev set a new valid value, we trust them

            const newDisplayDate = getDisplayDate(utils, rawValue, inputFormat);
            setInnerInputValue(newParsedValue);
            setInnerDisplayedInputValue(newDisplayDate);
          }, [utils, rawValue, inputFormat, innerInputValue]);
          const handleChange = text => {
            const finalString = text === '' || text === mask ? '' : text;
            setInnerDisplayedInputValue(finalString);
            const date = finalString === null ? null : utils.parse(finalString, inputFormat);
            if (ignoreInvalidInputs && !utils.isValid(date)) {
              return;
            }
            setInnerInputValue(date);
            onChange(date, finalString || undefined);
          };
          const rifmProps = useRifm({
            value: innerDisplayedInputValue,
            onChange: handleChange,
            format: rifmFormatter || formatter
          });
          const inputStateArgs = shouldUseMaskedInput ? rifmProps : {
            value: innerDisplayedInputValue,
            onChange: event => {
              handleChange(event.currentTarget.value);
            }
          };
          return _extends({
            label,
            disabled,
            error: validationError,
            inputProps: _extends({}, inputStateArgs, {
              disabled,
              placeholder: formatHelperText,
              readOnly,
              type: shouldUseMaskedInput ? 'tel' : 'text'
            }, inputProps)
          }, TextFieldProps);
        };
        const _excluded$7 = ["className", "components", "disableOpenPicker", "getOpenDialogAriaText", "InputAdornmentProps", "InputProps", "inputRef", "openPicker", "OpenPickerButtonProps", "renderInput"];
        const KeyboardDateInput = exports("K", /*#__PURE__*/reactExports.forwardRef(function KeyboardDateInput(props, ref) {
          const className = props.className,
            _props$components2 = props.components,
            components = _props$components2 === void 0 ? {} : _props$components2,
            disableOpenPicker = props.disableOpenPicker,
            getOpenDialogAriaTextProp = props.getOpenDialogAriaText,
            InputAdornmentProps = props.InputAdornmentProps,
            InputProps = props.InputProps,
            inputRef = props.inputRef,
            openPicker = props.openPicker,
            OpenPickerButtonProps = props.OpenPickerButtonProps,
            renderInput = props.renderInput,
            other = _objectWithoutPropertiesLoose(props, _excluded$7);
          const localeText = useLocaleText();
          const getOpenDialogAriaText = getOpenDialogAriaTextProp != null ? getOpenDialogAriaTextProp : localeText.openDatePickerDialogue;
          const utils = useUtils();
          const textFieldProps = useMaskedInput(other);
          const adornmentPosition = (InputAdornmentProps == null ? void 0 : InputAdornmentProps.position) || 'end';
          const OpenPickerIcon = components.OpenPickerIcon || Calendar;
          return renderInput(_extends({
            ref,
            inputRef,
            className
          }, textFieldProps, {
            InputProps: _extends({}, InputProps, {
              [`${adornmentPosition}Adornment`]: disableOpenPicker ? undefined : /*#__PURE__*/jsxRuntimeExports.jsx(InputAdornment, _extends({
                position: adornmentPosition
              }, InputAdornmentProps, {
                children: /*#__PURE__*/jsxRuntimeExports.jsx(IconButton, _extends({
                  edge: adornmentPosition,
                  disabled: other.disabled || other.readOnly,
                  "aria-label": getOpenDialogAriaText(other.rawValue, utils)
                }, OpenPickerButtonProps, {
                  onClick: openPicker,
                  children: /*#__PURE__*/jsxRuntimeExports.jsx(OpenPickerIcon, {})
                }))
              }))
            })
          }));
        }));
        function getOrientation() {
          if (typeof window === 'undefined') {
            return 'portrait';
          }
          if (window.screen && window.screen.orientation && window.screen.orientation.angle) {
            return Math.abs(window.screen.orientation.angle) === 90 ? 'landscape' : 'portrait';
          } // Support IOS safari

          if (window.orientation) {
            return Math.abs(Number(window.orientation)) === 90 ? 'landscape' : 'portrait';
          }
          return 'portrait';
        }
        const useIsLandscape = (views, customOrientation) => {
          const _reactExports$useStat11 = reactExports.useState(getOrientation),
            _reactExports$useStat12 = _slicedToArray(_reactExports$useStat11, 2),
            orientation = _reactExports$useStat12[0],
            setOrientation = _reactExports$useStat12[1];
          useEnhancedEffect(() => {
            const eventHandler = () => {
              setOrientation(getOrientation());
            };
            window.addEventListener('orientationchange', eventHandler);
            return () => {
              window.removeEventListener('orientationchange', eventHandler);
            };
          }, []);
          if (arrayIncludes(views, ['hours', 'minutes', 'seconds'])) {
            // could not display 13:34:44 in landscape mode
            return false;
          }
          const orientationToUse = customOrientation || orientation;
          return orientationToUse === 'landscape';
        };
        const useFocusManagement = ({
          autoFocus,
          openView
        }) => {
          const _reactExports$useStat13 = reactExports.useState(autoFocus ? openView : null),
            _reactExports$useStat14 = _slicedToArray(_reactExports$useStat13, 2),
            focusedView = _reactExports$useStat14[0],
            setFocusedView = _reactExports$useStat14[1];
          const setFocusedViewCallback = reactExports.useCallback(view => newHasFocus => {
            if (newHasFocus) {
              setFocusedView(view);
            } else {
              setFocusedView(prevFocusedView => view === prevFocusedView ? null : prevFocusedView);
            }
          }, []);
          return {
            focusedView,
            setFocusedView: setFocusedViewCallback
          };
        };
        function getCalendarOrClockPickerUtilityClass(slot) {
          return generateUtilityClass('MuiCalendarOrClockPicker', slot);
        }
        generateUtilityClasses('MuiCalendarOrClockPicker', ['root', 'mobileKeyboardInputView']);
        const _excluded$6 = ["autoFocus", "className", "parsedValue", "DateInputProps", "isMobileKeyboardViewOpen", "onDateChange", "onViewChange", "openTo", "orientation", "showToolbar", "toggleMobileKeyboardView", "ToolbarComponent", "toolbarFormat", "toolbarPlaceholder", "toolbarTitle", "views", "dateRangeIcon", "timeIcon", "hideTabs", "classes"];
        const useUtilityClasses$2 = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ["root"],
            mobileKeyboardInputView: ["mobileKeyboardInputView"]
          };
          return composeClasses(slots, getCalendarOrClockPickerUtilityClass, classes);
        };
        const MobileKeyboardInputView = styled("div", {
          name: "MuiCalendarOrClockPicker",
          slot: "MobileKeyboardInputView",
          overridesResolver: (_, styles) => styles.mobileKeyboardInputView
        })({
          padding: "16px 24px"
        });
        const PickerRoot = styled("div", {
          name: "MuiCalendarOrClockPicker",
          slot: "Root",
          overridesResolver: (_, styles) => styles.root
        })(({
          ownerState
        }) => _extends({
          display: "flex",
          flexDirection: "column"
        }, ownerState.isLandscape && {
          flexDirection: "row"
        }));
        const MobileKeyboardTextFieldProps = {
          fullWidth: true
        };
        const isDatePickerView = view => view === "year" || view === "month" || view === "day";
        const isTimePickerView = view => view === "hours" || view === "minutes" || view === "seconds";
        function CalendarOrClockPicker(inProps) {
          var _other$components, _other$componentsProp;
          const props = useThemeProps({
            props: inProps,
            name: "MuiCalendarOrClockPicker"
          });
          const autoFocus = props.autoFocus,
            parsedValue = props.parsedValue,
            DateInputProps = props.DateInputProps,
            isMobileKeyboardViewOpen = props.isMobileKeyboardViewOpen,
            onDateChange = props.onDateChange,
            onViewChange = props.onViewChange,
            openTo = props.openTo,
            orientation = props.orientation,
            showToolbar = props.showToolbar,
            toggleMobileKeyboardView = props.toggleMobileKeyboardView,
            _props$ToolbarCompone = props.ToolbarComponent,
            ToolbarComponent = _props$ToolbarCompone === void 0 ? () => null : _props$ToolbarCompone,
            toolbarFormat = props.toolbarFormat,
            toolbarPlaceholder = props.toolbarPlaceholder,
            toolbarTitle = props.toolbarTitle,
            views = props.views,
            dateRangeIcon = props.dateRangeIcon,
            timeIcon = props.timeIcon,
            hideTabs = props.hideTabs,
            other = _objectWithoutPropertiesLoose(props, _excluded$6);
          const TabsComponent = (_other$components = other.components) == null ? void 0 : _other$components.Tabs;
          const isLandscape = useIsLandscape(views, orientation);
          const wrapperVariant = reactExports.useContext(WrapperVariantContext);
          const classes = useUtilityClasses$2(props);
          const toShowToolbar = showToolbar != null ? showToolbar : wrapperVariant !== "desktop";
          const showTabs = !hideTabs && typeof window !== "undefined" && window.innerHeight > 667;
          const handleDateChange = reactExports.useCallback((newDate, selectionState) => {
            onDateChange(newDate, wrapperVariant, selectionState);
          }, [onDateChange, wrapperVariant]);
          const handleViewChange = reactExports.useCallback(newView => {
            if (isMobileKeyboardViewOpen) {
              toggleMobileKeyboardView();
            }
            if (onViewChange) {
              onViewChange(newView);
            }
          }, [isMobileKeyboardViewOpen, onViewChange, toggleMobileKeyboardView]);
          const _useViews3 = useViews({
              view: void 0,
              views,
              openTo,
              onChange: handleDateChange,
              onViewChange: handleViewChange
            }),
            openView = _useViews3.openView,
            setOpenView = _useViews3.setOpenView,
            handleChangeAndOpenNext = _useViews3.handleChangeAndOpenNext;
          const _useFocusManagement = useFocusManagement({
              autoFocus,
              openView
            }),
            focusedView = _useFocusManagement.focusedView,
            setFocusedView = _useFocusManagement.setFocusedView;
          return /* @__PURE__ */jsxRuntimeExports.jsxs(PickerRoot, {
            ownerState: {
              isLandscape
            },
            className: classes.root,
            children: [toShowToolbar && /* @__PURE__ */jsxRuntimeExports.jsx(ToolbarComponent, _extends({}, other, {
              views,
              isLandscape,
              parsedValue,
              onChange: handleDateChange,
              setOpenView,
              openView,
              toolbarTitle,
              toolbarFormat,
              toolbarPlaceholder,
              isMobileKeyboardViewOpen,
              toggleMobileKeyboardView
            })), showTabs && !!TabsComponent && /* @__PURE__ */jsxRuntimeExports.jsx(TabsComponent, _extends({
              dateRangeIcon,
              timeIcon,
              view: openView,
              onChange: setOpenView
            }, (_other$componentsProp = other.componentsProps) == null ? void 0 : _other$componentsProp.tabs)), /* @__PURE__ */jsxRuntimeExports.jsx(PickerViewRoot, {
              children: isMobileKeyboardViewOpen ? /* @__PURE__ */jsxRuntimeExports.jsx(MobileKeyboardInputView, {
                className: classes.mobileKeyboardInputView,
                children: /* @__PURE__ */jsxRuntimeExports.jsx(KeyboardDateInput, _extends({}, DateInputProps, {
                  ignoreInvalidInputs: true,
                  disableOpenPicker: true,
                  TextFieldProps: MobileKeyboardTextFieldProps
                }))
              }) : /* @__PURE__ */jsxRuntimeExports.jsxs(reactExports.Fragment, {
                children: [isDatePickerView(openView) && /* @__PURE__ */jsxRuntimeExports.jsx(CalendarPicker, _extends({
                  autoFocus,
                  date: parsedValue,
                  onViewChange: setOpenView,
                  onChange: handleChangeAndOpenNext,
                  view: openView,
                  views: views.filter(isDatePickerView),
                  focusedView,
                  onFocusedViewChange: setFocusedView
                }, other)), isTimePickerView(openView) && /* @__PURE__ */jsxRuntimeExports.jsx(ClockPicker, _extends({}, other, {
                  autoFocus,
                  date: parsedValue,
                  view: openView,
                  views: views.filter(isTimePickerView),
                  onChange: handleChangeAndOpenNext,
                  onViewChange: setOpenView,
                  showViewSwitcher: wrapperVariant === "desktop"
                }))]
              })
            })]
          });
        }
        const validateTime = ({
          adapter,
          value,
          props
        }) => {
          const minTime = props.minTime,
            maxTime = props.maxTime,
            minutesStep = props.minutesStep,
            shouldDisableTime = props.shouldDisableTime,
            disableIgnoringDatePartForTimeValidation = props.disableIgnoringDatePartForTimeValidation;
          const date = adapter.utils.date(value);
          const isAfter = createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, adapter.utils);
          if (value === null) {
            return null;
          }
          switch (true) {
            case !adapter.utils.isValid(value):
              return 'invalidDate';
            case Boolean(minTime && isAfter(minTime, date)):
              return 'minTime';
            case Boolean(maxTime && isAfter(date, maxTime)):
              return 'maxTime';
            case Boolean(shouldDisableTime && shouldDisableTime(adapter.utils.getHours(date), 'hours')):
              return 'shouldDisableTime-hours';
            case Boolean(shouldDisableTime && shouldDisableTime(adapter.utils.getMinutes(date), 'minutes')):
              return 'shouldDisableTime-minutes';
            case Boolean(shouldDisableTime && shouldDisableTime(adapter.utils.getSeconds(date), 'seconds')):
              return 'shouldDisableTime-seconds';
            case Boolean(minutesStep && adapter.utils.getMinutes(date) % minutesStep !== 0):
              return 'minutesStep';
            default:
              return null;
          }
        };
        const isSameTimeError = (a, b) => a === b;
        const useTimeValidation = exports("h", props => useValidation(props, validateTime, isSameTimeError));
        const useOpenState = ({
          open,
          onOpen,
          onClose
        }) => {
          const isControllingOpenProp = reactExports.useRef(typeof open === 'boolean').current;
          const _reactExports$useStat15 = reactExports.useState(false),
            _reactExports$useStat16 = _slicedToArray(_reactExports$useStat15, 2),
            openState = _reactExports$useStat16[0],
            setIsOpenState = _reactExports$useStat16[1]; // It is required to update inner state in useEffect in order to avoid situation when
          // Our component is not mounted yet, but `open` state is set to `true` (e.g. initially opened)

          reactExports.useEffect(() => {
            if (isControllingOpenProp) {
              if (typeof open !== 'boolean') {
                throw new Error('You must not mix controlling and uncontrolled mode for `open` prop');
              }
              setIsOpenState(open);
            }
          }, [isControllingOpenProp, open]);
          const setIsOpen = reactExports.useCallback(newIsOpen => {
            if (!isControllingOpenProp) {
              setIsOpenState(newIsOpen);
            }
            if (newIsOpen && onOpen) {
              onOpen();
            }
            if (!newIsOpen && onClose) {
              onClose();
            }
          }, [isControllingOpenProp, onOpen, onClose]);
          return {
            isOpen: openState,
            setIsOpen
          };
        };
        const usePickerState = exports("i", (props, valueManager) => {
          const onAccept = props.onAccept,
            onChange = props.onChange,
            value = props.value,
            closeOnSelect = props.closeOnSelect;
          const utils = useUtils();
          const _useOpenState = useOpenState(props),
            isOpen = _useOpenState.isOpen,
            setIsOpen = _useOpenState.setIsOpen;
          const parsedDateValue = reactExports.useMemo(() => valueManager.parseInput(utils, value), [valueManager, utils, value]);
          const _reactExports$useStat17 = reactExports.useState(parsedDateValue),
            _reactExports$useStat18 = _slicedToArray(_reactExports$useStat17, 2),
            lastValidDateValue = _reactExports$useStat18[0],
            setLastValidDateValue = _reactExports$useStat18[1];
          const _reactExports$useStat19 = reactExports.useState(() => ({
              committed: parsedDateValue,
              draft: parsedDateValue,
              resetFallback: parsedDateValue
            })),
            _reactExports$useStat20 = _slicedToArray(_reactExports$useStat19, 2),
            dateState = _reactExports$useStat20[0],
            setDateState = _reactExports$useStat20[1];
          const setDate = reactExports.useCallback(params => {
            setDateState(prev => {
              switch (params.action) {
                case 'setAll':
                case 'acceptAndClose':
                  {
                    return {
                      draft: params.value,
                      committed: params.value,
                      resetFallback: params.value
                    };
                  }
                case 'setCommitted':
                  {
                    return _extends({}, prev, {
                      draft: params.value,
                      committed: params.value
                    });
                  }
                case 'setDraft':
                  {
                    return _extends({}, prev, {
                      draft: params.value
                    });
                  }
                default:
                  {
                    return prev;
                  }
              }
            });
            if (params.forceOnChangeCall || !params.skipOnChangeCall && !valueManager.areValuesEqual(utils, dateState.committed, params.value)) {
              onChange(params.value);
            }
            if (params.action === 'acceptAndClose') {
              setIsOpen(false);
              if (onAccept && !valueManager.areValuesEqual(utils, dateState.resetFallback, params.value)) {
                onAccept(params.value);
              }
            }
          }, [onAccept, onChange, setIsOpen, dateState, utils, valueManager]);
          reactExports.useEffect(() => {
            if (utils.isValid(parsedDateValue)) {
              setLastValidDateValue(parsedDateValue);
            }
          }, [utils, parsedDateValue]);
          reactExports.useEffect(() => {
            if (isOpen) {
              // Update all dates in state to equal the current prop value
              setDate({
                action: 'setAll',
                value: parsedDateValue,
                skipOnChangeCall: true
              });
            }
          }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps
          // Set the draft and committed date to equal the new prop value.

          if (!valueManager.areValuesEqual(utils, dateState.committed, parsedDateValue)) {
            setDate({
              action: 'setCommitted',
              value: parsedDateValue,
              skipOnChangeCall: true
            });
          }
          const wrapperProps = reactExports.useMemo(() => ({
            open: isOpen,
            onClear: () => {
              // Reset all date in state to the empty value and close picker.
              setDate({
                value: valueManager.emptyValue,
                action: 'acceptAndClose',
                // force `onChange` in cases like input (value) === `Invalid date`
                forceOnChangeCall: !valueManager.areValuesEqual(utils, value, valueManager.emptyValue)
              });
            },
            onAccept: () => {
              // Set all date in state to equal the current draft value and close picker.
              setDate({
                value: dateState.draft,
                action: 'acceptAndClose',
                // force `onChange` in cases like input (value) === `Invalid date`
                forceOnChangeCall: !valueManager.areValuesEqual(utils, value, parsedDateValue)
              });
            },
            onDismiss: () => {
              // Set all dates in state to equal the last committed date.
              // e.g. Reset the state to the last committed value.
              setDate({
                value: dateState.committed,
                action: 'acceptAndClose'
              });
            },
            onCancel: () => {
              // Set all dates in state to equal the last accepted date and close picker.
              // e.g. Reset the state to the last accepted value
              setDate({
                value: dateState.resetFallback,
                action: 'acceptAndClose'
              });
            },
            onSetToday: () => {
              // Set all dates in state to equal today and close picker.
              setDate({
                value: valueManager.getTodayValue(utils),
                action: 'acceptAndClose'
              });
            }
          }), [setDate, isOpen, utils, dateState, valueManager, value, parsedDateValue]); // Mobile keyboard view is a special case.
          // When it's open picker should work like closed, because we are just showing text field

          const _reactExports$useStat21 = reactExports.useState(false),
            _reactExports$useStat22 = _slicedToArray(_reactExports$useStat21, 2),
            isMobileKeyboardViewOpen = _reactExports$useStat22[0],
            setMobileKeyboardViewOpen = _reactExports$useStat22[1];
          const pickerProps = reactExports.useMemo(() => ({
            parsedValue: dateState.draft,
            isMobileKeyboardViewOpen,
            toggleMobileKeyboardView: () => setMobileKeyboardViewOpen(!isMobileKeyboardViewOpen),
            onDateChange: (newDate, wrapperVariant, selectionState = 'partial') => {
              switch (selectionState) {
                case 'shallow':
                  {
                    // Update the `draft` state but do not fire `onChange`
                    return setDate({
                      action: 'setDraft',
                      value: newDate,
                      skipOnChangeCall: true
                    });
                  }
                case 'partial':
                  {
                    // Update the `draft` state and fire `onChange`
                    return setDate({
                      action: 'setDraft',
                      value: newDate
                    });
                  }
                case 'finish':
                  {
                    if (closeOnSelect != null ? closeOnSelect : wrapperVariant === 'desktop') {
                      // Set all dates in state to equal the new date and close picker.
                      return setDate({
                        value: newDate,
                        action: 'acceptAndClose'
                      });
                    } // Updates the `committed` state and fire `onChange`

                    return setDate({
                      value: newDate,
                      action: 'setCommitted'
                    });
                  }
                default:
                  {
                    throw new Error('MUI: Invalid selectionState passed to `onDateChange`');
                  }
              }
            }
          }), [setDate, isMobileKeyboardViewOpen, dateState.draft, closeOnSelect]);
          const handleInputChange = reactExports.useCallback((newParsedValue, keyboardInputValue) => {
            const cleanParsedValue = valueManager.valueReducer ? valueManager.valueReducer(utils, lastValidDateValue, newParsedValue) : newParsedValue;
            onChange(cleanParsedValue, keyboardInputValue);
          }, [onChange, valueManager, lastValidDateValue, utils]);
          const inputProps = reactExports.useMemo(() => ({
            onChange: handleInputChange,
            open: isOpen,
            rawValue: value,
            openPicker: () => setIsOpen(true)
          }), [handleInputChange, isOpen, value, setIsOpen]);
          const pickerState = {
            pickerProps,
            inputProps,
            wrapperProps
          };
          reactExports.useDebugValue(pickerState, () => ({
            MuiPickerState: {
              dateState,
              other: pickerState
            }
          }));
          return pickerState;
        });
        const PickersModalDialogRoot = styled(Dialog)({
          [`& .${dialogClasses.container}`]: {
            outline: 0
          },
          [`& .${dialogClasses.paper}`]: {
            outline: 0,
            minWidth: DIALOG_WIDTH
          }
        });
        const PickersModalDialogContent = styled(DialogContent)({
          '&:first-of-type': {
            padding: 0
          }
        });
        const PickersModalDialog = props => {
          var _components$ActionBar;
          const children = props.children,
            _props$DialogProps = props.DialogProps,
            DialogProps = _props$DialogProps === void 0 ? {} : _props$DialogProps,
            onAccept = props.onAccept,
            onClear = props.onClear,
            onDismiss = props.onDismiss,
            onCancel = props.onCancel,
            onSetToday = props.onSetToday,
            open = props.open,
            components = props.components,
            componentsProps = props.componentsProps;
          const ActionBar = (_components$ActionBar = components == null ? void 0 : components.ActionBar) != null ? _components$ActionBar : PickersActionBar;
          return /*#__PURE__*/jsxRuntimeExports.jsxs(PickersModalDialogRoot, _extends({
            open: open,
            onClose: onDismiss
          }, DialogProps, {
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(PickersModalDialogContent, {
              children: children
            }), /*#__PURE__*/jsxRuntimeExports.jsx(ActionBar, _extends({
              onAccept: onAccept,
              onClear: onClear,
              onCancel: onCancel,
              onSetToday: onSetToday,
              actions: ['cancel', 'accept']
            }, componentsProps == null ? void 0 : componentsProps.actionBar))]
          }));
        };
        const _excluded$5 = ["children", "DateInputProps", "DialogProps", "onAccept", "onClear", "onDismiss", "onCancel", "onSetToday", "open", "PureDateInputComponent", "components", "componentsProps"];
        function MobileWrapper(props) {
          const children = props.children,
            DateInputProps = props.DateInputProps,
            DialogProps = props.DialogProps,
            onAccept = props.onAccept,
            onClear = props.onClear,
            onDismiss = props.onDismiss,
            onCancel = props.onCancel,
            onSetToday = props.onSetToday,
            open = props.open,
            PureDateInputComponent = props.PureDateInputComponent,
            components = props.components,
            componentsProps = props.componentsProps,
            other = _objectWithoutPropertiesLoose(props, _excluded$5);
          return /*#__PURE__*/jsxRuntimeExports.jsxs(WrapperVariantContext.Provider, {
            value: "mobile",
            children: [/*#__PURE__*/jsxRuntimeExports.jsx(PureDateInputComponent, _extends({
              components: components
            }, other, DateInputProps)), /*#__PURE__*/jsxRuntimeExports.jsx(PickersModalDialog, {
              DialogProps: DialogProps,
              onAccept: onAccept,
              onClear: onClear,
              onDismiss: onDismiss,
              onCancel: onCancel,
              onSetToday: onSetToday,
              open: open,
              components: components,
              componentsProps: componentsProps,
              children: children
            })]
          });
        }

        // TODO: why is this called "Pure*" when it's not memoized? Does "Pure" mean "readonly"?
        const PureDateInput = exports("l", /*#__PURE__*/reactExports.forwardRef(function PureDateInput(props, ref) {
          const disabled = props.disabled,
            getOpenDialogAriaTextProp = props.getOpenDialogAriaText,
            inputFormat = props.inputFormat,
            InputProps = props.InputProps,
            inputRef = props.inputRef,
            label = props.label,
            onOpen = props.openPicker,
            rawValue = props.rawValue,
            renderInput = props.renderInput,
            _props$TextFieldProps = props.TextFieldProps,
            TextFieldProps = _props$TextFieldProps === void 0 ? {} : _props$TextFieldProps,
            validationError = props.validationError,
            className = props.className;
          const localeText = useLocaleText(); // The prop can not be deprecated
          // Default is "Choose date, ...", but time pickers override it with "Choose time, ..."

          const getOpenDialogAriaText = getOpenDialogAriaTextProp != null ? getOpenDialogAriaTextProp : localeText.openDatePickerDialogue;
          const utils = useUtils();
          const PureDateInputProps = reactExports.useMemo(() => _extends({}, InputProps, {
            readOnly: true
          }), [InputProps]);
          const inputValue = getDisplayDate(utils, rawValue, inputFormat);
          const handleOnClick = useEventCallback(event => {
            event.stopPropagation();
            onOpen();
          });
          return renderInput(_extends({
            label,
            disabled,
            ref,
            inputRef,
            error: validationError,
            InputProps: PureDateInputProps,
            className
          }, !props.readOnly && !props.disabled && {
            onClick: handleOnClick
          }, {
            inputProps: _extends({
              disabled,
              readOnly: true,
              'aria-readonly': true,
              'aria-label': getOpenDialogAriaText(rawValue, utils),
              value: inputValue
            }, !props.readOnly && {
              onClick: handleOnClick
            }, {
              onKeyDown: onSpaceOrEnter(onOpen)
            })
          }, TextFieldProps));
        }));
        function useDateTimePickerDefaultizedProps(props, name) {
          var _themeProps$ampm, _themeProps$minDateTi, _themeProps$maxDateTi, _themeProps$minDateTi2, _themeProps$maxDateTi2;

          // This is technically unsound if the type parameters appear in optional props.
          // Optional props can be filled by `useThemeProps` with types that don't match the type parameters.
          const themeProps = useThemeProps({
            props,
            name
          });
          const utils = useUtils();
          const defaultDates = useDefaultDates();
          const ampm = (_themeProps$ampm = themeProps.ampm) != null ? _themeProps$ampm : utils.is12HourCycleInCurrentLocale();
          if (themeProps.orientation != null && themeProps.orientation !== 'portrait') {
            throw new Error('We are not supporting custom orientation for DateTimePicker yet :(');
          }
          return _extends({
            ampm,
            orientation: 'portrait',
            openTo: 'day',
            views: ['year', 'day', 'hours', 'minutes'],
            ampmInClock: true,
            acceptRegex: ampm ? /[\dap]/gi : /\d/gi,
            disableMaskedInput: false,
            inputFormat: ampm ? utils.formats.keyboardDateTime12h : utils.formats.keyboardDateTime24h,
            disableIgnoringDatePartForTimeValidation: Boolean(themeProps.minDateTime || themeProps.maxDateTime),
            disablePast: false,
            disableFuture: false
          }, themeProps, {
            minDate: parseNonNullablePickerDate(utils, (_themeProps$minDateTi = themeProps.minDateTime) != null ? _themeProps$minDateTi : themeProps.minDate, defaultDates.minDate),
            maxDate: parseNonNullablePickerDate(utils, (_themeProps$maxDateTi = themeProps.maxDateTime) != null ? _themeProps$maxDateTi : themeProps.maxDate, defaultDates.maxDate),
            minTime: (_themeProps$minDateTi2 = themeProps.minDateTime) != null ? _themeProps$minDateTi2 : themeProps.minTime,
            maxTime: (_themeProps$maxDateTi2 = themeProps.maxDateTime) != null ? _themeProps$maxDateTi2 : themeProps.maxTime
          });
        }
        const dateTimePickerValueManager = {
          emptyValue: null,
          getTodayValue: utils => utils.date(),
          parseInput: parsePickerInputValue,
          areValuesEqual: (utils, a, b) => utils.isEqual(a, b)
        };
        const resolveViewTypeFromView = view => {
          switch (view) {
            case 'year':
            case 'month':
            case 'day':
              return 'calendar';
            default:
              return 'clock';
          }
        };
        function getDateTimePickerToolbarUtilityClass(slot) {
          return generateUtilityClass('MuiDateTimePickerToolbar', slot);
        }
        generateUtilityClasses('MuiDateTimePickerToolbar', ['root', 'dateContainer', 'timeContainer', 'separator']);
        const _excluded$4 = ["ampm", "parsedValue", "isMobileKeyboardViewOpen", "onChange", "openView", "setOpenView", "toggleMobileKeyboardView", "toolbarFormat", "toolbarPlaceholder", "toolbarTitle", "views"];
        const useUtilityClasses$1 = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ['root'],
            dateContainer: ['dateContainer'],
            timeContainer: ['timeContainer'],
            separator: ['separator']
          };
          return composeClasses(slots, getDateTimePickerToolbarUtilityClass, classes);
        };
        const DateTimePickerToolbarRoot = styled(PickersToolbar, {
          name: 'MuiDateTimePickerToolbar',
          slot: 'Root',
          overridesResolver: (props, styles) => styles.root
        })(({
          theme
        }) => ({
          paddingLeft: 16,
          paddingRight: 16,
          justifyContent: 'space-around',
          position: 'relative',
          [`& .${pickersToolbarClasses.penIconButton}`]: _extends({
            position: 'absolute',
            top: 8
          }, theme.direction === 'rtl' ? {
            left: 8
          } : {
            right: 8
          })
        }));
        const DateTimePickerToolbarDateContainer = styled('div', {
          name: 'MuiDateTimePickerToolbar',
          slot: 'DateContainer',
          overridesResolver: (props, styles) => styles.dateContainer
        })({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'
        });
        const DateTimePickerToolbarTimeContainer = styled('div', {
          name: 'MuiDateTimePickerToolbar',
          slot: 'TimeContainer',
          overridesResolver: (props, styles) => styles.timeContainer
        })({
          display: 'flex'
        });
        const DateTimePickerToolbarSeparator = styled(PickersToolbarText, {
          name: 'MuiDateTimePickerToolbar',
          slot: 'Separator',
          overridesResolver: (props, styles) => styles.separator
        })({
          margin: '0 4px 0 2px',
          cursor: 'default'
        });
        /**
         * @ignore - internal component.
         */

        function DateTimePickerToolbar(inProps) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiDateTimePickerToolbar'
          });
          const ampm = props.ampm,
            parsedValue = props.parsedValue,
            isMobileKeyboardViewOpen = props.isMobileKeyboardViewOpen,
            openView = props.openView,
            setOpenView = props.setOpenView,
            toggleMobileKeyboardView = props.toggleMobileKeyboardView,
            toolbarFormat = props.toolbarFormat,
            _props$toolbarPlaceho = props.toolbarPlaceholder,
            toolbarPlaceholder = _props$toolbarPlaceho === void 0 ? '––' : _props$toolbarPlaceho,
            toolbarTitleProp = props.toolbarTitle,
            views = props.views,
            other = _objectWithoutPropertiesLoose(props, _excluded$4);
          const ownerState = props;
          const utils = useUtils();
          const localeText = useLocaleText();
          const classes = useUtilityClasses$1(ownerState);
          const toolbarTitle = toolbarTitleProp != null ? toolbarTitleProp : localeText.dateTimePickerDefaultToolbarTitle;
          const formatHours = time => ampm ? utils.format(time, 'hours12h') : utils.format(time, 'hours24h');
          const dateText = reactExports.useMemo(() => {
            if (!parsedValue) {
              return toolbarPlaceholder;
            }
            if (toolbarFormat) {
              return utils.formatByString(parsedValue, toolbarFormat);
            }
            return utils.format(parsedValue, 'shortDate');
          }, [parsedValue, toolbarFormat, toolbarPlaceholder, utils]);
          return /*#__PURE__*/jsxRuntimeExports.jsxs(DateTimePickerToolbarRoot, _extends({
            toolbarTitle: toolbarTitle,
            isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
            toggleMobileKeyboardView: toggleMobileKeyboardView,
            className: classes.root,
            viewType: resolveViewTypeFromView(openView)
          }, other, {
            isLandscape: false,
            ownerState: ownerState,
            children: [/*#__PURE__*/jsxRuntimeExports.jsxs(DateTimePickerToolbarDateContainer, {
              className: classes.dateContainer,
              ownerState: ownerState,
              children: [views.includes('year') && /*#__PURE__*/jsxRuntimeExports.jsx(PickersToolbarButton, {
                tabIndex: -1,
                variant: "subtitle1",
                onClick: () => setOpenView('year'),
                selected: openView === 'year',
                value: parsedValue ? utils.format(parsedValue, 'year') : '–'
              }), views.includes('day') && /*#__PURE__*/jsxRuntimeExports.jsx(PickersToolbarButton, {
                tabIndex: -1,
                variant: "h4",
                onClick: () => setOpenView('day'),
                selected: openView === 'day',
                value: dateText
              })]
            }), /*#__PURE__*/jsxRuntimeExports.jsxs(DateTimePickerToolbarTimeContainer, {
              className: classes.timeContainer,
              ownerState: ownerState,
              children: [views.includes('hours') && /*#__PURE__*/jsxRuntimeExports.jsx(PickersToolbarButton, {
                variant: "h3",
                onClick: () => setOpenView('hours'),
                selected: openView === 'hours',
                value: parsedValue ? formatHours(parsedValue) : '--'
              }), views.includes('minutes') && /*#__PURE__*/jsxRuntimeExports.jsxs(reactExports.Fragment, {
                children: [/*#__PURE__*/jsxRuntimeExports.jsx(DateTimePickerToolbarSeparator, {
                  variant: "h3",
                  value: ":",
                  className: classes.separator,
                  ownerState: ownerState
                }), /*#__PURE__*/jsxRuntimeExports.jsx(PickersToolbarButton, {
                  variant: "h3",
                  onClick: () => setOpenView('minutes'),
                  selected: openView === 'minutes',
                  value: parsedValue ? utils.format(parsedValue, 'minutes') : '--'
                })]
              }), views.includes('seconds') && /*#__PURE__*/jsxRuntimeExports.jsxs(reactExports.Fragment, {
                children: [/*#__PURE__*/jsxRuntimeExports.jsx(DateTimePickerToolbarSeparator, {
                  variant: "h3",
                  value: ":",
                  className: classes.separator,
                  ownerState: ownerState
                }), /*#__PURE__*/jsxRuntimeExports.jsx(PickersToolbarButton, {
                  variant: "h3",
                  onClick: () => setOpenView('seconds'),
                  selected: openView === 'seconds',
                  value: parsedValue ? utils.format(parsedValue, 'seconds') : '--'
                })]
              })]
            })]
          }));
        }
        const _excluded$3 = ["minDate", "maxDate", "disableFuture", "shouldDisableDate", "disablePast"];
        const validateDateTime = ({
          props,
          value,
          adapter
        }) => {
          const minDate = props.minDate,
            maxDate = props.maxDate,
            disableFuture = props.disableFuture,
            shouldDisableDate = props.shouldDisableDate,
            disablePast = props.disablePast,
            timeValidationProps = _objectWithoutPropertiesLoose(props, _excluded$3);
          const dateValidationResult = validateDate({
            adapter,
            value,
            props: {
              minDate,
              maxDate,
              disableFuture,
              shouldDisableDate,
              disablePast
            }
          });
          if (dateValidationResult !== null) {
            return dateValidationResult;
          }
          return validateTime({
            adapter,
            value,
            props: timeValidationProps
          });
        };
        const isSameDateTimeError = (a, b) => a === b;
        function useDateTimeValidation(props) {
          return useValidation(props, validateDateTime, isSameDateTimeError);
        }
        function getDateTimePickerTabsUtilityClass(slot) {
          return generateUtilityClass('MuiDateTimePickerTabs', slot);
        }
        generateUtilityClasses('MuiDateTimePickerTabs', ['root']);
        const viewToTab = openView => {
          if (["day", "month", "year"].includes(openView)) {
            return "date";
          }
          return "time";
        };
        const tabToView = tab => {
          if (tab === "date") {
            return "day";
          }
          return "hours";
        };
        const useUtilityClasses = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ["root"]
          };
          return composeClasses(slots, getDateTimePickerTabsUtilityClass, classes);
        };
        const DateTimePickerTabsRoot = styled(Tabs, {
          name: "MuiDateTimePickerTabs",
          slot: "Root",
          overridesResolver: (_, styles) => styles.root
        })(({
          ownerState,
          theme
        }) => _extends({
          boxShadow: `0 -1px 0 0 inset ${theme.palette.divider}`
        }, ownerState.wrapperVariant === "desktop" && {
          order: 1,
          boxShadow: `0 1px 0 0 inset ${theme.palette.divider}`,
          [`& .${tabsClasses.indicator}`]: {
            bottom: "auto",
            top: 0
          }
        }));
        const DateTimePickerTabs = function DateTimePickerTabs2(inProps) {
          const props = useThemeProps({
            props: inProps,
            name: "MuiDateTimePickerTabs"
          });
          const _props$dateRangeIcon = props.dateRangeIcon,
            dateRangeIcon = _props$dateRangeIcon === void 0 ? /* @__PURE__ */jsxRuntimeExports.jsx(DateRange, {}) : _props$dateRangeIcon,
            onChange = props.onChange,
            _props$timeIcon = props.timeIcon,
            timeIcon = _props$timeIcon === void 0 ? /* @__PURE__ */jsxRuntimeExports.jsx(Time, {}) : _props$timeIcon,
            view = props.view;
          const localeText = useLocaleText();
          const wrapperVariant = reactExports.useContext(WrapperVariantContext);
          const ownerState = _extends({}, props, {
            wrapperVariant
          });
          const classes = useUtilityClasses(ownerState);
          const handleChange = (event, value) => {
            onChange(tabToView(value));
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs(DateTimePickerTabsRoot, {
            ownerState,
            variant: "fullWidth",
            value: viewToTab(view),
            onChange: handleChange,
            className: classes.root,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Tab, {
              value: "date",
              "aria-label": localeText.dateTableLabel,
              icon: /* @__PURE__ */jsxRuntimeExports.jsx(reactExports.Fragment, {
                children: dateRangeIcon
              })
            }), /* @__PURE__ */jsxRuntimeExports.jsx(Tab, {
              value: "time",
              "aria-label": localeText.timeTableLabel,
              icon: /* @__PURE__ */jsxRuntimeExports.jsx(reactExports.Fragment, {
                children: timeIcon
              })
            })]
          });
        };
        const _excluded$2 = ["onChange", "PaperProps", "PopperProps", "ToolbarComponent", "TransitionComponent", "value", "components", "componentsProps", "hideTabs"];
        const DesktopDateTimePicker = /* @__PURE__ */reactExports.forwardRef(function DesktopDateTimePicker2(inProps, ref) {
          const props = useDateTimePickerDefaultizedProps(inProps, "MuiDesktopDateTimePicker");
          const validationError = useDateTimeValidation(props) !== null;
          const _usePickerState = usePickerState(props, dateTimePickerValueManager),
            pickerProps = _usePickerState.pickerProps,
            inputProps = _usePickerState.inputProps,
            wrapperProps = _usePickerState.wrapperProps;
          const PaperProps = props.PaperProps,
            PopperProps = props.PopperProps,
            _props$ToolbarCompone2 = props.ToolbarComponent,
            ToolbarComponent = _props$ToolbarCompone2 === void 0 ? DateTimePickerToolbar : _props$ToolbarCompone2,
            TransitionComponent = props.TransitionComponent,
            providedComponents = props.components,
            componentsProps = props.componentsProps,
            _props$hideTabs = props.hideTabs,
            hideTabs = _props$hideTabs === void 0 ? true : _props$hideTabs,
            other = _objectWithoutPropertiesLoose(props, _excluded$2);
          const components = reactExports.useMemo(() => _extends({
            Tabs: DateTimePickerTabs
          }, providedComponents), [providedComponents]);
          const AllDateInputProps = _extends({}, inputProps, other, {
            components,
            componentsProps,
            ref,
            validationError
          });
          return /* @__PURE__ */jsxRuntimeExports.jsx(DesktopWrapper, _extends({}, wrapperProps, {
            DateInputProps: AllDateInputProps,
            KeyboardDateInputComponent: KeyboardDateInput,
            PopperProps,
            PaperProps,
            TransitionComponent,
            components,
            componentsProps,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(CalendarOrClockPicker, _extends({}, pickerProps, {
              autoFocus: true,
              toolbarTitle: props.label || props.toolbarTitle,
              ToolbarComponent,
              DateInputProps: AllDateInputProps,
              components,
              componentsProps,
              hideTabs
            }, other))
          }));
        });
        const _excluded$1 = ["ToolbarComponent", "value", "onChange", "components", "componentsProps", "hideTabs"];
        const MobileDateTimePicker = /* @__PURE__ */reactExports.forwardRef(function MobileDateTimePicker2(inProps, ref) {
          const props = useDateTimePickerDefaultizedProps(inProps, "MuiMobileDateTimePicker");
          const validationError = useDateTimeValidation(props) !== null;
          const _usePickerState2 = usePickerState(props, dateTimePickerValueManager),
            pickerProps = _usePickerState2.pickerProps,
            inputProps = _usePickerState2.inputProps,
            wrapperProps = _usePickerState2.wrapperProps;
          const _props$ToolbarCompone3 = props.ToolbarComponent,
            ToolbarComponent = _props$ToolbarCompone3 === void 0 ? DateTimePickerToolbar : _props$ToolbarCompone3,
            providedComponents = props.components,
            componentsProps = props.componentsProps,
            _props$hideTabs2 = props.hideTabs,
            hideTabs = _props$hideTabs2 === void 0 ? false : _props$hideTabs2,
            other = _objectWithoutPropertiesLoose(props, _excluded$1);
          const components = reactExports.useMemo(() => _extends({
            Tabs: DateTimePickerTabs
          }, providedComponents), [providedComponents]);
          const DateInputProps = _extends({}, inputProps, other, {
            components,
            componentsProps,
            ref,
            validationError
          });
          return /* @__PURE__ */jsxRuntimeExports.jsx(MobileWrapper, _extends({}, other, wrapperProps, {
            DateInputProps,
            PureDateInputComponent: PureDateInput,
            components,
            componentsProps,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(CalendarOrClockPicker, _extends({}, pickerProps, {
              autoFocus: true,
              toolbarTitle: props.label || props.toolbarTitle,
              ToolbarComponent,
              DateInputProps,
              components,
              componentsProps,
              hideTabs
            }, other))
          }));
        });
        const _excluded = ["desktopModeMediaQuery", "DialogProps", "PopperProps", "TransitionComponent"];
        const DateTimePicker = exports("D", /* @__PURE__ */reactExports.forwardRef(function DateTimePicker2(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: "MuiDateTimePicker"
          });
          const _props$desktopModeMed = props.desktopModeMediaQuery,
            desktopModeMediaQuery = _props$desktopModeMed === void 0 ? "@media (pointer: fine)" : _props$desktopModeMed,
            DialogProps = props.DialogProps,
            PopperProps = props.PopperProps,
            TransitionComponent = props.TransitionComponent,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const isDesktop = useMediaQuery(desktopModeMediaQuery, {
            defaultMatches: true
          });
          if (isDesktop) {
            return /* @__PURE__ */jsxRuntimeExports.jsx(DesktopDateTimePicker, _extends({
              ref,
              PopperProps,
              TransitionComponent
            }, other));
          }
          return /* @__PURE__ */jsxRuntimeExports.jsx(MobileDateTimePicker, _extends({
            ref,
            DialogProps
          }, other));
        }));
      }
    };
  });
})();
//# sourceMappingURL=DateTimePicker-legacy-CzDRMfHF.js.map
