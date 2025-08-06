;
(function () {
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  System.register(['./index-legacy-BpJl3CBN.js', './Android-legacy-BYdjD6gG.js'], function (exports, module) {
    'use strict';

    var THEME_ID, _objectWithoutPropertiesLoose, React, _extends, generateUtilityClasses, generateUtilityClass, reactExports, jsxRuntimeExports, clsx$1, extendSxProp, resolveBreakpointValues, handleBreakpoints, getDefaultExportFromCjs, commonjsGlobal, useTheme$1, useThemeProps$1, defaultTheme, _inheritsLoose, forceReflow, Transition, useDefaultProps, useTheme, Paper, Fade, useId, styled, capitalize, composeClasses$1, Modal, Backdrop, useFormControl, FormControlContext, Typography, ButtonBase, createSvgIcon, useEnhancedEffect$1, debounce, ownerWindow, useRtl, useSlotProps, useEventCallback, ownerDocument, alpha, useControlled$1, TransitionGroup, useForkRef, IconButton, Button, Grow, FocusTrap, Popper, useMediaQuery, useSelector, shallowEqual, useDispatch, TextField, valueChange;
    return {
      setters: [module => {
        THEME_ID = module.M;
        _objectWithoutPropertiesLoose = module.w;
        React = module.Y;
        _extends = module.y;
        generateUtilityClasses = module.V;
        generateUtilityClass = module.U;
        reactExports = module.r;
        jsxRuntimeExports = module.m;
        clsx$1 = module.D;
        extendSxProp = module.o;
        resolveBreakpointValues = module.F;
        handleBreakpoints = module.E;
        getDefaultExportFromCjs = module.e;
        commonjsGlobal = module.a5;
        useTheme$1 = module.u;
      }, module => {
        useThemeProps$1 = module.u;
        defaultTheme = module.d;
        _inheritsLoose = module._;
        forceReflow = module.f;
        Transition = module.T;
        useDefaultProps = module.a;
        useTheme = module.b;
        Paper = module.P;
        Fade = module.F;
        useId = module.c;
        styled = module.s;
        capitalize = module.e;
        composeClasses$1 = module.g;
        Modal = module.M;
        Backdrop = module.B;
        useFormControl = module.h;
        FormControlContext = module.i;
        Typography = module.j;
        ButtonBase = module.k;
        createSvgIcon = module.l;
        useEnhancedEffect$1 = module.m;
        debounce = module.n;
        ownerWindow = module.o;
        useRtl = module.p;
        useSlotProps = module.q;
        useEventCallback = module.r;
        ownerDocument = module.t;
        alpha = module.v;
        useControlled$1 = module.w;
        TransitionGroup = module.x;
        useForkRef = module.y;
        IconButton = module.I;
        Button = module.z;
        Grow = module.G;
        FocusTrap = module.A;
        Popper = module.C;
        useMediaQuery = module.D;
        useSelector = module.E;
        shallowEqual = module.H;
        useDispatch = module.J;
        TextField = module.K;
        valueChange = module.L;
      }],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._wrapper_2goe7_1 {\n  width: 50%;\n}\n\n@media only screen and (max-width: 768px) {\n  ._wrapper_2goe7_1 {\n    width: 100%;\n  }\n}\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        exports("default", DateTimeQuestion);
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

        // Source from https://github.com/alitaheri/normalize-scroll-left
        let cachedType;

        /**
         * Based on the jquery plugin https://github.com/othree/jquery.rtl-scroll-type
         *
         * Types of scrollLeft, assuming scrollWidth=100 and direction is rtl.
         *
         * Type             | <- Most Left | Most Right -> | Initial
         * ---------------- | ------------ | ------------- | -------
         * default          | 0            | 100           | 100
         * negative (spec*) | -100         | 0             | 0
         * reverse          | 100          | 0             | 0
         *
         * Edge 85: default
         * Safari 14: negative
         * Chrome 85: negative
         * Firefox 81: negative
         * IE11: reverse
         *
         * spec* https://drafts.csswg.org/cssom-view/#dom-window-scroll
         */
        function detectScrollType() {
          if (cachedType) {
            return cachedType;
          }
          const dummy = document.createElement('div');
          const container = document.createElement('div');
          container.style.width = '10px';
          container.style.height = '1px';
          dummy.appendChild(container);
          dummy.dir = 'rtl';
          dummy.style.fontSize = '14px';
          dummy.style.width = '4px';
          dummy.style.height = '1px';
          dummy.style.position = 'absolute';
          dummy.style.top = '-1000px';
          dummy.style.overflow = 'scroll';
          document.body.appendChild(dummy);
          cachedType = 'reverse';
          if (dummy.scrollLeft > 0) {
            cachedType = 'default';
          } else {
            dummy.scrollLeft = 1;
            if (dummy.scrollLeft === 0) {
              cachedType = 'negative';
            }
          }
          document.body.removeChild(dummy);
          return cachedType;
        }

        // Based on https://stackoverflow.com/a/24394376
        function getNormalizedScrollLeft(element, direction) {
          const scrollLeft = element.scrollLeft;

          // Perform the calculations only when direction is rtl to avoid messing up the ltr behavior
          if (direction !== 'rtl') {
            return scrollLeft;
          }
          const type = detectScrollType();
          switch (type) {
            case 'negative':
              return element.scrollWidth - element.clientWidth + scrollLeft;
            case 'reverse':
              return element.scrollWidth - element.clientWidth - scrollLeft;
            default:
              return scrollLeft;
          }
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
        function getDialogUtilityClass(slot) {
          return generateUtilityClass('MuiDialog', slot);
        }
        const dialogClasses = generateUtilityClasses('MuiDialog', ['root', 'scrollPaper', 'scrollBody', 'container', 'paper', 'paperScrollPaper', 'paperScrollBody', 'paperWidthFalse', 'paperWidthXs', 'paperWidthSm', 'paperWidthMd', 'paperWidthLg', 'paperWidthXl', 'paperFullWidth', 'paperFullScreen']);
        const DialogContext = /* @__PURE__ */reactExports.createContext({});
        const _excluded$B = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"];
        const DialogBackdrop = styled(Backdrop, {
          name: "MuiDialog",
          slot: "Backdrop",
          overrides: (props, styles) => styles.backdrop
        })({
          // Improve scrollable dialog support.
          zIndex: -1
        });
        const useUtilityClasses$v = ownerState => {
          const classes = ownerState.classes,
            scroll = ownerState.scroll,
            maxWidth = ownerState.maxWidth,
            fullWidth = ownerState.fullWidth,
            fullScreen = ownerState.fullScreen;
          const slots = {
            root: ["root"],
            container: ["container", `scroll${capitalize(scroll)}`],
            paper: ["paper", `paperScroll${capitalize(scroll)}`, `paperWidth${capitalize(String(maxWidth))}`, fullWidth && "paperFullWidth", fullScreen && "paperFullScreen"]
          };
          return composeClasses$1(slots, getDialogUtilityClass, classes);
        };
        const DialogRoot = styled(Modal, {
          name: "MuiDialog",
          slot: "Root",
          overridesResolver: (props, styles) => styles.root
        })({
          "@media print": {
            // Use !important to override the Modal inline-style.
            position: "absolute !important"
          }
        });
        const DialogContainer = styled("div", {
          name: "MuiDialog",
          slot: "Container",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.container, styles[`scroll${capitalize(ownerState.scroll)}`]];
          }
        })(({
          ownerState
        }) => _extends({
          height: "100%",
          "@media print": {
            height: "auto"
          },
          // We disable the focus ring for mouse, touch and keyboard users.
          outline: 0
        }, ownerState.scroll === "paper" && {
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }, ownerState.scroll === "body" && {
          overflowY: "auto",
          overflowX: "hidden",
          textAlign: "center",
          "&::after": {
            content: '""',
            display: "inline-block",
            verticalAlign: "middle",
            height: "100%",
            width: "0"
          }
        }));
        const DialogPaper = styled(Paper, {
          name: "MuiDialog",
          slot: "Paper",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.paper, styles[`scrollPaper${capitalize(ownerState.scroll)}`], styles[`paperWidth${capitalize(String(ownerState.maxWidth))}`], ownerState.fullWidth && styles.paperFullWidth, ownerState.fullScreen && styles.paperFullScreen];
          }
        })(({
          theme,
          ownerState
        }) => _extends({
          margin: 32,
          position: "relative",
          overflowY: "auto",
          // Fix IE11 issue, to remove at some point.
          "@media print": {
            overflowY: "visible",
            boxShadow: "none"
          }
        }, ownerState.scroll === "paper" && {
          display: "flex",
          flexDirection: "column",
          maxHeight: "calc(100% - 64px)"
        }, ownerState.scroll === "body" && {
          display: "inline-block",
          verticalAlign: "middle",
          textAlign: "left"
          // 'initial' doesn't work on IE11
        }, !ownerState.maxWidth && {
          maxWidth: "calc(100% - 64px)"
        }, ownerState.maxWidth === "xs" && {
          maxWidth: theme.breakpoints.unit === "px" ? Math.max(theme.breakpoints.values.xs, 444) : `max(${theme.breakpoints.values.xs}${theme.breakpoints.unit}, 444px)`,
          [`&.${dialogClasses.paperScrollBody}`]: {
            [theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 444) + 32 * 2)]: {
              maxWidth: "calc(100% - 64px)"
            }
          }
        }, ownerState.maxWidth && ownerState.maxWidth !== "xs" && {
          maxWidth: `${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`,
          [`&.${dialogClasses.paperScrollBody}`]: {
            [theme.breakpoints.down(theme.breakpoints.values[ownerState.maxWidth] + 32 * 2)]: {
              maxWidth: "calc(100% - 64px)"
            }
          }
        }, ownerState.fullWidth && {
          width: "calc(100% - 64px)"
        }, ownerState.fullScreen && {
          margin: 0,
          width: "100%",
          maxWidth: "100%",
          height: "100%",
          maxHeight: "none",
          borderRadius: 0,
          [`&.${dialogClasses.paperScrollBody}`]: {
            margin: 0,
            maxWidth: "100%"
          }
        }));
        const Dialog = /* @__PURE__ */reactExports.forwardRef(function Dialog2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiDialog"
          });
          const theme = useTheme();
          const defaultTransitionDuration = {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen
          };
          const ariaDescribedby = props["aria-describedby"],
            ariaLabelledbyProp = props["aria-labelledby"],
            BackdropComponent = props.BackdropComponent,
            BackdropProps = props.BackdropProps,
            children = props.children,
            className = props.className,
            _props$disableEscapeK = props.disableEscapeKeyDown,
            disableEscapeKeyDown = _props$disableEscapeK === void 0 ? false : _props$disableEscapeK,
            _props$fullScreen = props.fullScreen,
            fullScreen = _props$fullScreen === void 0 ? false : _props$fullScreen,
            _props$fullWidth = props.fullWidth,
            fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
            _props$maxWidth = props.maxWidth,
            maxWidth = _props$maxWidth === void 0 ? "sm" : _props$maxWidth,
            onBackdropClick = props.onBackdropClick,
            onClick = props.onClick,
            onClose = props.onClose,
            open = props.open,
            _props$PaperComponent = props.PaperComponent,
            PaperComponent = _props$PaperComponent === void 0 ? Paper : _props$PaperComponent,
            _props$PaperProps = props.PaperProps,
            PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
            _props$scroll = props.scroll,
            scroll = _props$scroll === void 0 ? "paper" : _props$scroll,
            _props$TransitionComp = props.TransitionComponent,
            TransitionComponent = _props$TransitionComp === void 0 ? Fade : _props$TransitionComp,
            _props$transitionDura = props.transitionDuration,
            transitionDuration = _props$transitionDura === void 0 ? defaultTransitionDuration : _props$transitionDura,
            TransitionProps = props.TransitionProps,
            other = _objectWithoutPropertiesLoose(props, _excluded$B);
          const ownerState = _extends({}, props, {
            disableEscapeKeyDown,
            fullScreen,
            fullWidth,
            maxWidth,
            scroll
          });
          const classes = useUtilityClasses$v(ownerState);
          const backdropClick = reactExports.useRef();
          const handleMouseDown = event => {
            backdropClick.current = event.target === event.currentTarget;
          };
          const handleBackdropClick = event => {
            if (onClick) {
              onClick(event);
            }
            if (!backdropClick.current) {
              return;
            }
            backdropClick.current = null;
            if (onBackdropClick) {
              onBackdropClick(event);
            }
            if (onClose) {
              onClose(event, "backdropClick");
            }
          };
          const ariaLabelledby = useId(ariaLabelledbyProp);
          const dialogContextValue = reactExports.useMemo(() => {
            return {
              titleId: ariaLabelledby
            };
          }, [ariaLabelledby]);
          return /* @__PURE__ */jsxRuntimeExports.jsx(DialogRoot, _extends({
            className: clsx$1(classes.root, className),
            closeAfterTransition: true,
            components: {
              Backdrop: DialogBackdrop
            },
            componentsProps: {
              backdrop: _extends({
                transitionDuration,
                as: BackdropComponent
              }, BackdropProps)
            },
            disableEscapeKeyDown,
            onClose,
            open,
            ref,
            onClick: handleBackdropClick,
            ownerState
          }, other, {
            children: /* @__PURE__ */jsxRuntimeExports.jsx(TransitionComponent, _extends({
              appear: true,
              in: open,
              timeout: transitionDuration,
              role: "presentation"
            }, TransitionProps, {
              children: /* @__PURE__ */jsxRuntimeExports.jsx(DialogContainer, {
                className: clsx$1(classes.container),
                onMouseDown: handleMouseDown,
                ownerState,
                children: /* @__PURE__ */jsxRuntimeExports.jsx(DialogPaper, _extends({
                  as: PaperComponent,
                  elevation: 24,
                  role: "dialog",
                  "aria-describedby": ariaDescribedby,
                  "aria-labelledby": ariaLabelledby
                }, PaperProps, {
                  className: clsx$1(classes.paper, PaperProps.className),
                  ownerState,
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(DialogContext.Provider, {
                    value: dialogContextValue,
                    children
                  })
                }))
              })
            }))
          }));
        });
        function getDialogActionsUtilityClass(slot) {
          return generateUtilityClass('MuiDialogActions', slot);
        }
        generateUtilityClasses('MuiDialogActions', ['root', 'spacing']);
        const _excluded$A = ["className", "disableSpacing"];
        const useUtilityClasses$u = ownerState => {
          const classes = ownerState.classes,
            disableSpacing = ownerState.disableSpacing;
          const slots = {
            root: ["root", !disableSpacing && "spacing"]
          };
          return composeClasses$1(slots, getDialogActionsUtilityClass, classes);
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
        const DialogActions = /* @__PURE__ */reactExports.forwardRef(function DialogActions2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiDialogActions"
          });
          const className = props.className,
            _props$disableSpacing = props.disableSpacing,
            disableSpacing = _props$disableSpacing === void 0 ? false : _props$disableSpacing,
            other = _objectWithoutPropertiesLoose(props, _excluded$A);
          const ownerState = _extends({}, props, {
            disableSpacing
          });
          const classes = useUtilityClasses$u(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(DialogActionsRoot, _extends({
            className: clsx$1(classes.root, className),
            ownerState,
            ref
          }, other));
        });
        function getDialogContentUtilityClass(slot) {
          return generateUtilityClass('MuiDialogContent', slot);
        }
        generateUtilityClasses('MuiDialogContent', ['root', 'dividers']);
        const dialogTitleClasses = generateUtilityClasses('MuiDialogTitle', ['root']);
        const _excluded$z = ["className", "dividers"];
        const useUtilityClasses$t = ownerState => {
          const classes = ownerState.classes,
            dividers = ownerState.dividers;
          const slots = {
            root: ["root", dividers && "dividers"]
          };
          return composeClasses$1(slots, getDialogContentUtilityClass, classes);
        };
        const DialogContentRoot = styled("div", {
          name: "MuiDialogContent",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.root, ownerState.dividers && styles.dividers];
          }
        })(({
          theme,
          ownerState
        }) => _extends({
          flex: "1 1 auto",
          // Add iOS momentum scrolling for iOS < 13.0
          WebkitOverflowScrolling: "touch",
          overflowY: "auto",
          padding: "20px 24px"
        }, ownerState.dividers ? {
          padding: "16px 24px",
          borderTop: `1px solid ${(theme.vars || theme).palette.divider}`,
          borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
        } : {
          [`.${dialogTitleClasses.root} + &`]: {
            paddingTop: 0
          }
        }));
        const DialogContent = /* @__PURE__ */reactExports.forwardRef(function DialogContent2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiDialogContent"
          });
          const className = props.className,
            _props$dividers = props.dividers,
            dividers = _props$dividers === void 0 ? false : _props$dividers,
            other = _objectWithoutPropertiesLoose(props, _excluded$z);
          const ownerState = _extends({}, props, {
            dividers
          });
          const classes = useUtilityClasses$t(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(DialogContentRoot, _extends({
            className: clsx$1(classes.root, className),
            ownerState,
            ref
          }, other));
        });
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
        const _excluded$y = ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "rowSpacing", "spacing", "wrap", "zeroMinWidth"];
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
        const useUtilityClasses$s = ownerState => {
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
          return composeClasses$1(slots, getGridUtilityClass, classes);
        };
        const Grid = /* @__PURE__ */reactExports.forwardRef(function Grid2(inProps, ref) {
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
            other = _objectWithoutPropertiesLoose(props, _excluded$y);
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
          const classes = useUtilityClasses$s(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(GridContext.Provider, {
            value: columns,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(GridRoot, _extends({
              ownerState,
              className: clsx$1(classes.root, className),
              as: component,
              ref
            }, otherFiltered))
          });
        });
        function getInputAdornmentUtilityClass(slot) {
          return generateUtilityClass('MuiInputAdornment', slot);
        }
        const inputAdornmentClasses = generateUtilityClasses('MuiInputAdornment', ['root', 'filled', 'standard', 'outlined', 'positionStart', 'positionEnd', 'disablePointerEvents', 'hiddenLabel', 'sizeSmall']);
        var _span;
        const _excluded$x = ["children", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"];
        const overridesResolver$1 = (props, styles) => {
          const ownerState = props.ownerState;
          return [styles.root, styles[`position${capitalize(ownerState.position)}`], ownerState.disablePointerEvents === true && styles.disablePointerEvents, styles[ownerState.variant]];
        };
        const useUtilityClasses$r = ownerState => {
          const classes = ownerState.classes,
            disablePointerEvents = ownerState.disablePointerEvents,
            hiddenLabel = ownerState.hiddenLabel,
            position = ownerState.position,
            size = ownerState.size,
            variant = ownerState.variant;
          const slots = {
            root: ["root", disablePointerEvents && "disablePointerEvents", position && `position${capitalize(position)}`, variant, hiddenLabel && "hiddenLabel", size && `size${capitalize(size)}`]
          };
          return composeClasses$1(slots, getInputAdornmentUtilityClass, classes);
        };
        const InputAdornmentRoot = styled("div", {
          name: "MuiInputAdornment",
          slot: "Root",
          overridesResolver: overridesResolver$1
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
        const InputAdornment = /* @__PURE__ */reactExports.forwardRef(function InputAdornment2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiInputAdornment"
          });
          const children = props.children,
            className = props.className,
            _props$component2 = props.component,
            component = _props$component2 === void 0 ? "div" : _props$component2,
            _props$disablePointer = props.disablePointerEvents,
            disablePointerEvents = _props$disablePointer === void 0 ? false : _props$disablePointer,
            _props$disableTypogra = props.disableTypography,
            disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
            position = props.position,
            variantProp = props.variant,
            other = _objectWithoutPropertiesLoose(props, _excluded$x);
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
          const classes = useUtilityClasses$r(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(FormControlContext.Provider, {
            value: null,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(InputAdornmentRoot, _extends({
              as: component,
              ownerState,
              className: clsx$1(classes.root, className),
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
        });
        function getTabUtilityClass(slot) {
          return generateUtilityClass('MuiTab', slot);
        }
        const tabClasses = generateUtilityClasses('MuiTab', ['root', 'labelIcon', 'textColorInherit', 'textColorPrimary', 'textColorSecondary', 'selected', 'disabled', 'fullWidth', 'wrapped', 'iconWrapper']);
        const _excluded$w = ["className", "disabled", "disableFocusRipple", "fullWidth", "icon", "iconPosition", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped"];
        const useUtilityClasses$q = ownerState => {
          const classes = ownerState.classes,
            textColor = ownerState.textColor,
            fullWidth = ownerState.fullWidth,
            wrapped = ownerState.wrapped,
            icon = ownerState.icon,
            label = ownerState.label,
            selected = ownerState.selected,
            disabled = ownerState.disabled;
          const slots = {
            root: ["root", icon && label && "labelIcon", `textColor${capitalize(textColor)}`, fullWidth && "fullWidth", wrapped && "wrapped", selected && "selected", disabled && "disabled"],
            iconWrapper: ["iconWrapper"]
          };
          return composeClasses$1(slots, getTabUtilityClass, classes);
        };
        const TabRoot = styled(ButtonBase, {
          name: "MuiTab",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.root, ownerState.label && ownerState.icon && styles.labelIcon, styles[`textColor${capitalize(ownerState.textColor)}`], ownerState.fullWidth && styles.fullWidth, ownerState.wrapped && styles.wrapped, {
              [`& .${tabClasses.iconWrapper}`]: styles.iconWrapper
            }];
          }
        })(({
          theme,
          ownerState
        }) => _extends({}, theme.typography.button, {
          maxWidth: 360,
          minWidth: 90,
          position: "relative",
          minHeight: 48,
          flexShrink: 0,
          padding: "12px 16px",
          overflow: "hidden",
          whiteSpace: "normal",
          textAlign: "center"
        }, ownerState.label && {
          flexDirection: ownerState.iconPosition === "top" || ownerState.iconPosition === "bottom" ? "column" : "row"
        }, {
          lineHeight: 1.25
        }, ownerState.icon && ownerState.label && {
          minHeight: 72,
          paddingTop: 9,
          paddingBottom: 9,
          [`& > .${tabClasses.iconWrapper}`]: _extends({}, ownerState.iconPosition === "top" && {
            marginBottom: 6
          }, ownerState.iconPosition === "bottom" && {
            marginTop: 6
          }, ownerState.iconPosition === "start" && {
            marginRight: theme.spacing(1)
          }, ownerState.iconPosition === "end" && {
            marginLeft: theme.spacing(1)
          })
        }, ownerState.textColor === "inherit" && {
          color: "inherit",
          opacity: 0.6,
          // same opacity as theme.palette.text.secondary
          [`&.${tabClasses.selected}`]: {
            opacity: 1
          },
          [`&.${tabClasses.disabled}`]: {
            opacity: (theme.vars || theme).palette.action.disabledOpacity
          }
        }, ownerState.textColor === "primary" && {
          color: (theme.vars || theme).palette.text.secondary,
          [`&.${tabClasses.selected}`]: {
            color: (theme.vars || theme).palette.primary.main
          },
          [`&.${tabClasses.disabled}`]: {
            color: (theme.vars || theme).palette.text.disabled
          }
        }, ownerState.textColor === "secondary" && {
          color: (theme.vars || theme).palette.text.secondary,
          [`&.${tabClasses.selected}`]: {
            color: (theme.vars || theme).palette.secondary.main
          },
          [`&.${tabClasses.disabled}`]: {
            color: (theme.vars || theme).palette.text.disabled
          }
        }, ownerState.fullWidth && {
          flexShrink: 1,
          flexGrow: 1,
          flexBasis: 0,
          maxWidth: "none"
        }, ownerState.wrapped && {
          fontSize: theme.typography.pxToRem(12)
        }));
        const Tab = /* @__PURE__ */reactExports.forwardRef(function Tab2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiTab"
          });
          const className = props.className,
            _props$disabled = props.disabled,
            disabled = _props$disabled === void 0 ? false : _props$disabled,
            _props$disableFocusRi = props.disableFocusRipple,
            disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
            fullWidth = props.fullWidth,
            iconProp = props.icon,
            _props$iconPosition = props.iconPosition,
            iconPosition = _props$iconPosition === void 0 ? "top" : _props$iconPosition,
            indicator = props.indicator,
            label = props.label,
            onChange = props.onChange,
            onClick = props.onClick,
            onFocus = props.onFocus,
            selected = props.selected,
            selectionFollowsFocus = props.selectionFollowsFocus,
            _props$textColor = props.textColor,
            textColor = _props$textColor === void 0 ? "inherit" : _props$textColor,
            value = props.value,
            _props$wrapped = props.wrapped,
            wrapped = _props$wrapped === void 0 ? false : _props$wrapped,
            other = _objectWithoutPropertiesLoose(props, _excluded$w);
          const ownerState = _extends({}, props, {
            disabled,
            disableFocusRipple,
            selected,
            icon: !!iconProp,
            iconPosition,
            label: !!label,
            fullWidth,
            textColor,
            wrapped
          });
          const classes = useUtilityClasses$q(ownerState);
          const icon = iconProp && label && /* @__PURE__ */reactExports.isValidElement(iconProp) ? /* @__PURE__ */reactExports.cloneElement(iconProp, {
            className: clsx$1(classes.iconWrapper, iconProp.props.className)
          }) : iconProp;
          const handleClick = event => {
            if (!selected && onChange) {
              onChange(event, value);
            }
            if (onClick) {
              onClick(event);
            }
          };
          const handleFocus = event => {
            if (selectionFollowsFocus && !selected && onChange) {
              onChange(event, value);
            }
            if (onFocus) {
              onFocus(event);
            }
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs(TabRoot, _extends({
            focusRipple: !disableFocusRipple,
            className: clsx$1(classes.root, className),
            ref,
            role: "tab",
            "aria-selected": selected,
            disabled,
            onClick: handleClick,
            onFocus: handleFocus,
            ownerState,
            tabIndex: selected ? 0 : -1
          }, other, {
            children: [iconPosition === "top" || iconPosition === "start" ? /* @__PURE__ */jsxRuntimeExports.jsxs(reactExports.Fragment, {
              children: [icon, label]
            }) : /* @__PURE__ */jsxRuntimeExports.jsxs(reactExports.Fragment, {
              children: [label, icon]
            }), indicator]
          }));
        });
        const KeyboardArrowLeft = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
        }), 'KeyboardArrowLeft');
        const KeyboardArrowRight = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
        }), 'KeyboardArrowRight');
        function easeInOutSin(time) {
          return (1 + Math.sin(Math.PI * time - Math.PI / 2)) / 2;
        }
        function animate(property, element, to, options = {}, cb = () => {}) {
          const _options$ease = options.ease,
            ease = _options$ease === void 0 ? easeInOutSin : _options$ease,
            _options$duration = options.duration,
            duration = _options$duration === void 0 ? 300 : _options$duration;
          let start = null;
          const from = element[property];
          let cancelled = false;
          const cancel = () => {
            cancelled = true;
          };
          const step = timestamp => {
            if (cancelled) {
              cb(new Error('Animation cancelled'));
              return;
            }
            if (start === null) {
              start = timestamp;
            }
            const time = Math.min(1, (timestamp - start) / duration);
            element[property] = ease(time) * (to - from) + from;
            if (time >= 1) {
              requestAnimationFrame(() => {
                cb(null);
              });
              return;
            }
            requestAnimationFrame(step);
          };
          if (from === to) {
            cb(new Error('Element already at target position'));
            return cancel;
          }
          requestAnimationFrame(step);
          return cancel;
        }
        const _excluded$v = ["onChange"];
        const styles$1 = {
          width: 99,
          height: 99,
          position: "absolute",
          top: -9999,
          overflow: "scroll"
        };
        function ScrollbarSize(props) {
          const onChange = props.onChange,
            other = _objectWithoutPropertiesLoose(props, _excluded$v);
          const scrollbarHeight = reactExports.useRef();
          const nodeRef = reactExports.useRef(null);
          const setMeasurements = () => {
            scrollbarHeight.current = nodeRef.current.offsetHeight - nodeRef.current.clientHeight;
          };
          useEnhancedEffect$1(() => {
            const handleResize = debounce(() => {
              const prevHeight = scrollbarHeight.current;
              setMeasurements();
              if (prevHeight !== scrollbarHeight.current) {
                onChange(scrollbarHeight.current);
              }
            });
            const containerWindow = ownerWindow(nodeRef.current);
            containerWindow.addEventListener("resize", handleResize);
            return () => {
              handleResize.clear();
              containerWindow.removeEventListener("resize", handleResize);
            };
          }, [onChange]);
          reactExports.useEffect(() => {
            setMeasurements();
            onChange(scrollbarHeight.current);
          }, [onChange]);
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", _extends({
            style: styles$1
          }, other, {
            ref: nodeRef
          }));
        }
        function getTabScrollButtonUtilityClass(slot) {
          return generateUtilityClass('MuiTabScrollButton', slot);
        }
        const tabScrollButtonClasses = generateUtilityClasses('MuiTabScrollButton', ['root', 'vertical', 'horizontal', 'disabled']);
        const _excluded$u = ["className", "slots", "slotProps", "direction", "orientation", "disabled"];
        const useUtilityClasses$p = ownerState => {
          const classes = ownerState.classes,
            orientation = ownerState.orientation,
            disabled = ownerState.disabled;
          const slots = {
            root: ["root", orientation, disabled && "disabled"]
          };
          return composeClasses$1(slots, getTabScrollButtonUtilityClass, classes);
        };
        const TabScrollButtonRoot = styled(ButtonBase, {
          name: "MuiTabScrollButton",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.root, ownerState.orientation && styles[ownerState.orientation]];
          }
        })(({
          ownerState
        }) => _extends({
          width: 40,
          flexShrink: 0,
          opacity: 0.8,
          [`&.${tabScrollButtonClasses.disabled}`]: {
            opacity: 0
          }
        }, ownerState.orientation === "vertical" && {
          width: "100%",
          height: 40,
          "& svg": {
            transform: `rotate(${ownerState.isRtl ? -90 : 90}deg)`
          }
        }));
        const TabScrollButton = /* @__PURE__ */reactExports.forwardRef(function TabScrollButton2(inProps, ref) {
          var _slots$StartScrollBut, _slots$EndScrollButto;
          const props = useDefaultProps({
            props: inProps,
            name: "MuiTabScrollButton"
          });
          const className = props.className,
            _props$slots = props.slots,
            slots = _props$slots === void 0 ? {} : _props$slots,
            _props$slotProps = props.slotProps,
            slotProps = _props$slotProps === void 0 ? {} : _props$slotProps,
            direction = props.direction,
            other = _objectWithoutPropertiesLoose(props, _excluded$u);
          const isRtl = useRtl();
          const ownerState = _extends({
            isRtl
          }, props);
          const classes = useUtilityClasses$p(ownerState);
          const StartButtonIcon = (_slots$StartScrollBut = slots.StartScrollButtonIcon) != null ? _slots$StartScrollBut : KeyboardArrowLeft;
          const EndButtonIcon = (_slots$EndScrollButto = slots.EndScrollButtonIcon) != null ? _slots$EndScrollButto : KeyboardArrowRight;
          const startButtonIconProps = useSlotProps({
            elementType: StartButtonIcon,
            externalSlotProps: slotProps.startScrollButtonIcon,
            additionalProps: {
              fontSize: "small"
            },
            ownerState
          });
          const endButtonIconProps = useSlotProps({
            elementType: EndButtonIcon,
            externalSlotProps: slotProps.endScrollButtonIcon,
            additionalProps: {
              fontSize: "small"
            },
            ownerState
          });
          return /* @__PURE__ */jsxRuntimeExports.jsx(TabScrollButtonRoot, _extends({
            component: "div",
            className: clsx$1(classes.root, className),
            ref,
            role: null,
            ownerState,
            tabIndex: null
          }, other, {
            children: direction === "left" ? /* @__PURE__ */jsxRuntimeExports.jsx(StartButtonIcon, _extends({}, startButtonIconProps)) : /* @__PURE__ */jsxRuntimeExports.jsx(EndButtonIcon, _extends({}, endButtonIconProps))
          }));
        });
        function getTabsUtilityClass(slot) {
          return generateUtilityClass('MuiTabs', slot);
        }
        const tabsClasses = generateUtilityClasses('MuiTabs', ['root', 'vertical', 'flexContainer', 'flexContainerVertical', 'centered', 'scroller', 'fixed', 'scrollableX', 'scrollableY', 'hideScrollbar', 'scrollButtons', 'scrollButtonsHideMobile', 'indicator']);
        const _excluded$t = ["aria-label", "aria-labelledby", "action", "centered", "children", "className", "component", "allowScrollButtonsMobile", "indicatorColor", "onChange", "orientation", "ScrollButtonComponent", "scrollButtons", "selectionFollowsFocus", "slots", "slotProps", "TabIndicatorProps", "TabScrollButtonProps", "textColor", "value", "variant", "visibleScrollbar"];
        const nextItem = (list, item) => {
          if (list === item) {
            return list.firstChild;
          }
          if (item && item.nextElementSibling) {
            return item.nextElementSibling;
          }
          return list.firstChild;
        };
        const previousItem = (list, item) => {
          if (list === item) {
            return list.lastChild;
          }
          if (item && item.previousElementSibling) {
            return item.previousElementSibling;
          }
          return list.lastChild;
        };
        const moveFocus = (list, currentFocus, traversalFunction) => {
          let wrappedOnce = false;
          let nextFocus = traversalFunction(list, currentFocus);
          while (nextFocus) {
            if (nextFocus === list.firstChild) {
              if (wrappedOnce) {
                return;
              }
              wrappedOnce = true;
            }
            const nextFocusDisabled = nextFocus.disabled || nextFocus.getAttribute("aria-disabled") === "true";
            if (!nextFocus.hasAttribute("tabindex") || nextFocusDisabled) {
              nextFocus = traversalFunction(list, nextFocus);
            } else {
              nextFocus.focus();
              return;
            }
          }
        };
        const useUtilityClasses$o = ownerState => {
          const vertical = ownerState.vertical,
            fixed = ownerState.fixed,
            hideScrollbar = ownerState.hideScrollbar,
            scrollableX = ownerState.scrollableX,
            scrollableY = ownerState.scrollableY,
            centered = ownerState.centered,
            scrollButtonsHideMobile = ownerState.scrollButtonsHideMobile,
            classes = ownerState.classes;
          const slots = {
            root: ["root", vertical && "vertical"],
            scroller: ["scroller", fixed && "fixed", hideScrollbar && "hideScrollbar", scrollableX && "scrollableX", scrollableY && "scrollableY"],
            flexContainer: ["flexContainer", vertical && "flexContainerVertical", centered && "centered"],
            indicator: ["indicator"],
            scrollButtons: ["scrollButtons", scrollButtonsHideMobile && "scrollButtonsHideMobile"],
            scrollableX: [scrollableX && "scrollableX"],
            hideScrollbar: [hideScrollbar && "hideScrollbar"]
          };
          return composeClasses$1(slots, getTabsUtilityClass, classes);
        };
        const TabsRoot = styled("div", {
          name: "MuiTabs",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [{
              [`& .${tabsClasses.scrollButtons}`]: styles.scrollButtons
            }, {
              [`& .${tabsClasses.scrollButtons}`]: ownerState.scrollButtonsHideMobile && styles.scrollButtonsHideMobile
            }, styles.root, ownerState.vertical && styles.vertical];
          }
        })(({
          ownerState,
          theme
        }) => _extends({
          overflow: "hidden",
          minHeight: 48,
          // Add iOS momentum scrolling for iOS < 13.0
          WebkitOverflowScrolling: "touch",
          display: "flex"
        }, ownerState.vertical && {
          flexDirection: "column"
        }, ownerState.scrollButtonsHideMobile && {
          [`& .${tabsClasses.scrollButtons}`]: {
            [theme.breakpoints.down("sm")]: {
              display: "none"
            }
          }
        }));
        const TabsScroller = styled("div", {
          name: "MuiTabs",
          slot: "Scroller",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.scroller, ownerState.fixed && styles.fixed, ownerState.hideScrollbar && styles.hideScrollbar, ownerState.scrollableX && styles.scrollableX, ownerState.scrollableY && styles.scrollableY];
          }
        })(({
          ownerState
        }) => _extends({
          position: "relative",
          display: "inline-block",
          flex: "1 1 auto",
          whiteSpace: "nowrap"
        }, ownerState.fixed && {
          overflowX: "hidden",
          width: "100%"
        }, ownerState.hideScrollbar && {
          // Hide dimensionless scrollbar on macOS
          scrollbarWidth: "none",
          // Firefox
          "&::-webkit-scrollbar": {
            display: "none"
            // Safari + Chrome
          }
        }, ownerState.scrollableX && {
          overflowX: "auto",
          overflowY: "hidden"
        }, ownerState.scrollableY && {
          overflowY: "auto",
          overflowX: "hidden"
        }));
        const FlexContainer = styled("div", {
          name: "MuiTabs",
          slot: "FlexContainer",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.flexContainer, ownerState.vertical && styles.flexContainerVertical, ownerState.centered && styles.centered];
          }
        })(({
          ownerState
        }) => _extends({
          display: "flex"
        }, ownerState.vertical && {
          flexDirection: "column"
        }, ownerState.centered && {
          justifyContent: "center"
        }));
        const TabsIndicator = styled("span", {
          name: "MuiTabs",
          slot: "Indicator",
          overridesResolver: (props, styles) => styles.indicator
        })(({
          ownerState,
          theme
        }) => _extends({
          position: "absolute",
          height: 2,
          bottom: 0,
          width: "100%",
          transition: theme.transitions.create()
        }, ownerState.indicatorColor === "primary" && {
          backgroundColor: (theme.vars || theme).palette.primary.main
        }, ownerState.indicatorColor === "secondary" && {
          backgroundColor: (theme.vars || theme).palette.secondary.main
        }, ownerState.vertical && {
          height: "100%",
          width: 2,
          right: 0
        }));
        const TabsScrollbarSize = styled(ScrollbarSize)({
          overflowX: "auto",
          overflowY: "hidden",
          // Hide dimensionless scrollbar on macOS
          scrollbarWidth: "none",
          // Firefox
          "&::-webkit-scrollbar": {
            display: "none"
            // Safari + Chrome
          }
        });
        const defaultIndicatorStyle = {};
        const Tabs = /* @__PURE__ */reactExports.forwardRef(function Tabs2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiTabs"
          });
          const theme = useTheme();
          const isRtl = useRtl();
          const ariaLabel = props["aria-label"],
            ariaLabelledBy = props["aria-labelledby"],
            action = props.action,
            _props$centered = props.centered,
            centered = _props$centered === void 0 ? false : _props$centered,
            childrenProp = props.children,
            className = props.className,
            _props$component3 = props.component,
            component = _props$component3 === void 0 ? "div" : _props$component3,
            _props$allowScrollBut = props.allowScrollButtonsMobile,
            allowScrollButtonsMobile = _props$allowScrollBut === void 0 ? false : _props$allowScrollBut,
            _props$indicatorColor = props.indicatorColor,
            indicatorColor = _props$indicatorColor === void 0 ? "primary" : _props$indicatorColor,
            onChange = props.onChange,
            _props$orientation = props.orientation,
            orientation = _props$orientation === void 0 ? "horizontal" : _props$orientation,
            _props$ScrollButtonCo = props.ScrollButtonComponent,
            ScrollButtonComponent = _props$ScrollButtonCo === void 0 ? TabScrollButton : _props$ScrollButtonCo,
            _props$scrollButtons = props.scrollButtons,
            scrollButtons = _props$scrollButtons === void 0 ? "auto" : _props$scrollButtons,
            selectionFollowsFocus = props.selectionFollowsFocus,
            _props$slots2 = props.slots,
            slots = _props$slots2 === void 0 ? {} : _props$slots2,
            _props$slotProps2 = props.slotProps,
            slotProps = _props$slotProps2 === void 0 ? {} : _props$slotProps2,
            _props$TabIndicatorPr = props.TabIndicatorProps,
            TabIndicatorProps = _props$TabIndicatorPr === void 0 ? {} : _props$TabIndicatorPr,
            _props$TabScrollButto = props.TabScrollButtonProps,
            TabScrollButtonProps = _props$TabScrollButto === void 0 ? {} : _props$TabScrollButto,
            _props$textColor2 = props.textColor,
            textColor = _props$textColor2 === void 0 ? "primary" : _props$textColor2,
            value = props.value,
            _props$variant = props.variant,
            variant = _props$variant === void 0 ? "standard" : _props$variant,
            _props$visibleScrollb = props.visibleScrollbar,
            visibleScrollbar = _props$visibleScrollb === void 0 ? false : _props$visibleScrollb,
            other = _objectWithoutPropertiesLoose(props, _excluded$t);
          const scrollable = variant === "scrollable";
          const vertical = orientation === "vertical";
          const scrollStart = vertical ? "scrollTop" : "scrollLeft";
          const start = vertical ? "top" : "left";
          const end = vertical ? "bottom" : "right";
          const clientSize = vertical ? "clientHeight" : "clientWidth";
          const size = vertical ? "height" : "width";
          const ownerState = _extends({}, props, {
            component,
            allowScrollButtonsMobile,
            indicatorColor,
            orientation,
            vertical,
            scrollButtons,
            textColor,
            variant,
            visibleScrollbar,
            fixed: !scrollable,
            hideScrollbar: scrollable && !visibleScrollbar,
            scrollableX: scrollable && !vertical,
            scrollableY: scrollable && vertical,
            centered: centered && !scrollable,
            scrollButtonsHideMobile: !allowScrollButtonsMobile
          });
          const classes = useUtilityClasses$o(ownerState);
          const startScrollButtonIconProps = useSlotProps({
            elementType: slots.StartScrollButtonIcon,
            externalSlotProps: slotProps.startScrollButtonIcon,
            ownerState
          });
          const endScrollButtonIconProps = useSlotProps({
            elementType: slots.EndScrollButtonIcon,
            externalSlotProps: slotProps.endScrollButtonIcon,
            ownerState
          });
          const _reactExports$useStat = reactExports.useState(false),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            mounted = _reactExports$useStat2[0],
            setMounted = _reactExports$useStat2[1];
          const _reactExports$useStat3 = reactExports.useState(defaultIndicatorStyle),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            indicatorStyle = _reactExports$useStat4[0],
            setIndicatorStyle = _reactExports$useStat4[1];
          const _reactExports$useStat5 = reactExports.useState(false),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            displayStartScroll = _reactExports$useStat6[0],
            setDisplayStartScroll = _reactExports$useStat6[1];
          const _reactExports$useStat7 = reactExports.useState(false),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            displayEndScroll = _reactExports$useStat8[0],
            setDisplayEndScroll = _reactExports$useStat8[1];
          const _reactExports$useStat9 = reactExports.useState(false),
            _reactExports$useStat0 = _slicedToArray(_reactExports$useStat9, 2),
            updateScrollObserver = _reactExports$useStat0[0],
            setUpdateScrollObserver = _reactExports$useStat0[1];
          const _reactExports$useStat1 = reactExports.useState({
              overflow: "hidden",
              scrollbarWidth: 0
            }),
            _reactExports$useStat10 = _slicedToArray(_reactExports$useStat1, 2),
            scrollerStyle = _reactExports$useStat10[0],
            setScrollerStyle = _reactExports$useStat10[1];
          const valueToIndex = /* @__PURE__ */new Map();
          const tabsRef = reactExports.useRef(null);
          const tabListRef = reactExports.useRef(null);
          const getTabsMeta = () => {
            const tabsNode = tabsRef.current;
            let tabsMeta;
            if (tabsNode) {
              const rect = tabsNode.getBoundingClientRect();
              tabsMeta = {
                clientWidth: tabsNode.clientWidth,
                scrollLeft: tabsNode.scrollLeft,
                scrollTop: tabsNode.scrollTop,
                scrollLeftNormalized: getNormalizedScrollLeft(tabsNode, isRtl ? "rtl" : "ltr"),
                scrollWidth: tabsNode.scrollWidth,
                top: rect.top,
                bottom: rect.bottom,
                left: rect.left,
                right: rect.right
              };
            }
            let tabMeta;
            if (tabsNode && value !== false) {
              const children2 = tabListRef.current.children;
              if (children2.length > 0) {
                const tab = children2[valueToIndex.get(value)];
                tabMeta = tab ? tab.getBoundingClientRect() : null;
              }
            }
            return {
              tabsMeta,
              tabMeta
            };
          };
          const updateIndicatorState = useEventCallback(() => {
            const _getTabsMeta = getTabsMeta(),
              tabsMeta = _getTabsMeta.tabsMeta,
              tabMeta = _getTabsMeta.tabMeta;
            let startValue = 0;
            let startIndicator;
            if (vertical) {
              startIndicator = "top";
              if (tabMeta && tabsMeta) {
                startValue = tabMeta.top - tabsMeta.top + tabsMeta.scrollTop;
              }
            } else {
              startIndicator = isRtl ? "right" : "left";
              if (tabMeta && tabsMeta) {
                const correction = isRtl ? tabsMeta.scrollLeftNormalized + tabsMeta.clientWidth - tabsMeta.scrollWidth : tabsMeta.scrollLeft;
                startValue = (isRtl ? -1 : 1) * (tabMeta[startIndicator] - tabsMeta[startIndicator] + correction);
              }
            }
            const newIndicatorStyle = {
              [startIndicator]: startValue,
              // May be wrong until the font is loaded.
              [size]: tabMeta ? tabMeta[size] : 0
            };
            if (isNaN(indicatorStyle[startIndicator]) || isNaN(indicatorStyle[size])) {
              setIndicatorStyle(newIndicatorStyle);
            } else {
              const dStart = Math.abs(indicatorStyle[startIndicator] - newIndicatorStyle[startIndicator]);
              const dSize = Math.abs(indicatorStyle[size] - newIndicatorStyle[size]);
              if (dStart >= 1 || dSize >= 1) {
                setIndicatorStyle(newIndicatorStyle);
              }
            }
          });
          const scroll = (scrollValue, {
            animation = true
          } = {}) => {
            if (animation) {
              animate(scrollStart, tabsRef.current, scrollValue, {
                duration: theme.transitions.duration.standard
              });
            } else {
              tabsRef.current[scrollStart] = scrollValue;
            }
          };
          const moveTabsScroll = delta => {
            let scrollValue = tabsRef.current[scrollStart];
            if (vertical) {
              scrollValue += delta;
            } else {
              scrollValue += delta * (isRtl ? -1 : 1);
              scrollValue *= isRtl && detectScrollType() === "reverse" ? -1 : 1;
            }
            scroll(scrollValue);
          };
          const getScrollSize = () => {
            const containerSize = tabsRef.current[clientSize];
            let totalSize = 0;
            const children2 = Array.from(tabListRef.current.children);
            for (let i = 0; i < children2.length; i += 1) {
              const tab = children2[i];
              if (totalSize + tab[clientSize] > containerSize) {
                if (i === 0) {
                  totalSize = containerSize;
                }
                break;
              }
              totalSize += tab[clientSize];
            }
            return totalSize;
          };
          const handleStartScrollClick = () => {
            moveTabsScroll(-1 * getScrollSize());
          };
          const handleEndScrollClick = () => {
            moveTabsScroll(getScrollSize());
          };
          const handleScrollbarSizeChange = reactExports.useCallback(scrollbarWidth => {
            setScrollerStyle({
              overflow: null,
              scrollbarWidth
            });
          }, []);
          const getConditionalElements = () => {
            const conditionalElements2 = {};
            conditionalElements2.scrollbarSizeListener = scrollable ? /* @__PURE__ */jsxRuntimeExports.jsx(TabsScrollbarSize, {
              onChange: handleScrollbarSizeChange,
              className: clsx$1(classes.scrollableX, classes.hideScrollbar)
            }) : null;
            const scrollButtonsActive = displayStartScroll || displayEndScroll;
            const showScrollButtons = scrollable && (scrollButtons === "auto" && scrollButtonsActive || scrollButtons === true);
            conditionalElements2.scrollButtonStart = showScrollButtons ? /* @__PURE__ */jsxRuntimeExports.jsx(ScrollButtonComponent, _extends({
              slots: {
                StartScrollButtonIcon: slots.StartScrollButtonIcon
              },
              slotProps: {
                startScrollButtonIcon: startScrollButtonIconProps
              },
              orientation,
              direction: isRtl ? "right" : "left",
              onClick: handleStartScrollClick,
              disabled: !displayStartScroll
            }, TabScrollButtonProps, {
              className: clsx$1(classes.scrollButtons, TabScrollButtonProps.className)
            })) : null;
            conditionalElements2.scrollButtonEnd = showScrollButtons ? /* @__PURE__ */jsxRuntimeExports.jsx(ScrollButtonComponent, _extends({
              slots: {
                EndScrollButtonIcon: slots.EndScrollButtonIcon
              },
              slotProps: {
                endScrollButtonIcon: endScrollButtonIconProps
              },
              orientation,
              direction: isRtl ? "left" : "right",
              onClick: handleEndScrollClick,
              disabled: !displayEndScroll
            }, TabScrollButtonProps, {
              className: clsx$1(classes.scrollButtons, TabScrollButtonProps.className)
            })) : null;
            return conditionalElements2;
          };
          const scrollSelectedIntoView = useEventCallback(animation => {
            const _getTabsMeta2 = getTabsMeta(),
              tabsMeta = _getTabsMeta2.tabsMeta,
              tabMeta = _getTabsMeta2.tabMeta;
            if (!tabMeta || !tabsMeta) {
              return;
            }
            if (tabMeta[start] < tabsMeta[start]) {
              const nextScrollStart = tabsMeta[scrollStart] + (tabMeta[start] - tabsMeta[start]);
              scroll(nextScrollStart, {
                animation
              });
            } else if (tabMeta[end] > tabsMeta[end]) {
              const nextScrollStart = tabsMeta[scrollStart] + (tabMeta[end] - tabsMeta[end]);
              scroll(nextScrollStart, {
                animation
              });
            }
          });
          const updateScrollButtonState = useEventCallback(() => {
            if (scrollable && scrollButtons !== false) {
              setUpdateScrollObserver(!updateScrollObserver);
            }
          });
          reactExports.useEffect(() => {
            const handleResize = debounce(() => {
              if (tabsRef.current) {
                updateIndicatorState();
              }
            });
            let resizeObserver;
            const handleMutation = records => {
              records.forEach(record => {
                record.removedNodes.forEach(item => {
                  var _resizeObserver;
                  (_resizeObserver = resizeObserver) == null || _resizeObserver.unobserve(item);
                });
                record.addedNodes.forEach(item => {
                  var _resizeObserver2;
                  (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.observe(item);
                });
              });
              handleResize();
              updateScrollButtonState();
            };
            const win = ownerWindow(tabsRef.current);
            win.addEventListener("resize", handleResize);
            let mutationObserver;
            if (typeof ResizeObserver !== "undefined") {
              resizeObserver = new ResizeObserver(handleResize);
              Array.from(tabListRef.current.children).forEach(child => {
                resizeObserver.observe(child);
              });
            }
            if (typeof MutationObserver !== "undefined") {
              mutationObserver = new MutationObserver(handleMutation);
              mutationObserver.observe(tabListRef.current, {
                childList: true
              });
            }
            return () => {
              var _mutationObserver, _resizeObserver3;
              handleResize.clear();
              win.removeEventListener("resize", handleResize);
              (_mutationObserver = mutationObserver) == null || _mutationObserver.disconnect();
              (_resizeObserver3 = resizeObserver) == null || _resizeObserver3.disconnect();
            };
          }, [updateIndicatorState, updateScrollButtonState]);
          reactExports.useEffect(() => {
            const tabListChildren = Array.from(tabListRef.current.children);
            const length = tabListChildren.length;
            if (typeof IntersectionObserver !== "undefined" && length > 0 && scrollable && scrollButtons !== false) {
              const firstTab = tabListChildren[0];
              const lastTab = tabListChildren[length - 1];
              const observerOptions = {
                root: tabsRef.current,
                threshold: 0.99
              };
              const handleScrollButtonStart = entries => {
                setDisplayStartScroll(!entries[0].isIntersecting);
              };
              const firstObserver = new IntersectionObserver(handleScrollButtonStart, observerOptions);
              firstObserver.observe(firstTab);
              const handleScrollButtonEnd = entries => {
                setDisplayEndScroll(!entries[0].isIntersecting);
              };
              const lastObserver = new IntersectionObserver(handleScrollButtonEnd, observerOptions);
              lastObserver.observe(lastTab);
              return () => {
                firstObserver.disconnect();
                lastObserver.disconnect();
              };
            }
            return void 0;
          }, [scrollable, scrollButtons, updateScrollObserver, childrenProp == null ? void 0 : childrenProp.length]);
          reactExports.useEffect(() => {
            setMounted(true);
          }, []);
          reactExports.useEffect(() => {
            updateIndicatorState();
          });
          reactExports.useEffect(() => {
            scrollSelectedIntoView(defaultIndicatorStyle !== indicatorStyle);
          }, [scrollSelectedIntoView, indicatorStyle]);
          reactExports.useImperativeHandle(action, () => ({
            updateIndicator: updateIndicatorState,
            updateScrollButtons: updateScrollButtonState
          }), [updateIndicatorState, updateScrollButtonState]);
          const indicator = /* @__PURE__ */jsxRuntimeExports.jsx(TabsIndicator, _extends({}, TabIndicatorProps, {
            className: clsx$1(classes.indicator, TabIndicatorProps.className),
            ownerState,
            style: _extends({}, indicatorStyle, TabIndicatorProps.style)
          }));
          let childIndex = 0;
          const children = reactExports.Children.map(childrenProp, child => {
            if (! /* @__PURE__ */reactExports.isValidElement(child)) {
              return null;
            }
            const childValue = child.props.value === void 0 ? childIndex : child.props.value;
            valueToIndex.set(childValue, childIndex);
            const selected = childValue === value;
            childIndex += 1;
            return /* @__PURE__ */reactExports.cloneElement(child, _extends({
              fullWidth: variant === "fullWidth",
              indicator: selected && !mounted && indicator,
              selected,
              selectionFollowsFocus,
              onChange,
              textColor,
              value: childValue
            }, childIndex === 1 && value === false && !child.props.tabIndex ? {
              tabIndex: 0
            } : {}));
          });
          const handleKeyDown = event => {
            const list = tabListRef.current;
            const currentFocus = ownerDocument(list).activeElement;
            const role = currentFocus.getAttribute("role");
            if (role !== "tab") {
              return;
            }
            let previousItemKey = orientation === "horizontal" ? "ArrowLeft" : "ArrowUp";
            let nextItemKey = orientation === "horizontal" ? "ArrowRight" : "ArrowDown";
            if (orientation === "horizontal" && isRtl) {
              previousItemKey = "ArrowRight";
              nextItemKey = "ArrowLeft";
            }
            switch (event.key) {
              case previousItemKey:
                event.preventDefault();
                moveFocus(list, currentFocus, previousItem);
                break;
              case nextItemKey:
                event.preventDefault();
                moveFocus(list, currentFocus, nextItem);
                break;
              case "Home":
                event.preventDefault();
                moveFocus(list, null, nextItem);
                break;
              case "End":
                event.preventDefault();
                moveFocus(list, null, previousItem);
                break;
            }
          };
          const conditionalElements = getConditionalElements();
          return /* @__PURE__ */jsxRuntimeExports.jsxs(TabsRoot, _extends({
            className: clsx$1(classes.root, className),
            ownerState,
            ref,
            as: component
          }, other, {
            children: [conditionalElements.scrollButtonStart, conditionalElements.scrollbarSizeListener, /* @__PURE__ */jsxRuntimeExports.jsxs(TabsScroller, {
              className: classes.scroller,
              ownerState,
              style: {
                overflow: scrollerStyle.overflow,
                [vertical ? `margin${isRtl ? "Left" : "Right"}` : "marginBottom"]: visibleScrollbar ? void 0 : -scrollerStyle.scrollbarWidth
              },
              ref: tabsRef,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(FlexContainer, {
                "aria-label": ariaLabel,
                "aria-labelledby": ariaLabelledBy,
                "aria-orientation": orientation === "vertical" ? "vertical" : null,
                className: classes.flexContainer,
                ownerState,
                onKeyDown: handleKeyDown,
                ref: tabListRef,
                role: "tablist",
                children
              }), mounted && indicator]
            }), conditionalElements.scrollButtonEnd]
          }));
        });
        var dayjs_min = {
          exports: {}
        };
        (function (module, exports) {
          !function (t, e) {
            module.exports = e();
          }(commonjsGlobal, function () {
            var t = 1e3,
              e = 6e4,
              n = 36e5,
              r = "millisecond",
              i = "second",
              s = "minute",
              u = "hour",
              a = "day",
              o = "week",
              c = "month",
              f = "quarter",
              h = "year",
              d = "date",
              l = "Invalid Date",
              $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
              y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
              M = {
                name: "en",
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                ordinal: function ordinal(t) {
                  var e = ["th", "st", "nd", "rd"],
                    n = t % 100;
                  return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
                }
              },
              m = function m(t, e, n) {
                var r = String(t);
                return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
              },
              v = {
                s: m,
                z: function z(t) {
                  var e = -t.utcOffset(),
                    n = Math.abs(e),
                    r = Math.floor(n / 60),
                    i = n % 60;
                  return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
                },
                m: function t(e, n) {
                  if (e.date() < n.date()) return -t(n, e);
                  var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
                    i = e.clone().add(r, c),
                    s = n - i < 0,
                    u = e.clone().add(r + (s ? -1 : 1), c);
                  return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
                },
                a: function a(t) {
                  return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
                },
                p: function p(t) {
                  return {
                    M: c,
                    y: h,
                    w: o,
                    d: a,
                    D: d,
                    h: u,
                    m: s,
                    s: i,
                    ms: r,
                    Q: f
                  }[t] || String(t || "").toLowerCase().replace(/s$/, "");
                },
                u: function u(t) {
                  return void 0 === t;
                }
              },
              g = "en",
              D = {};
            D[g] = M;
            var p = "$isDayjsObject",
              S = function S(t) {
                return t instanceof _ || !(!t || !t[p]);
              },
              w = function t(e, n, r) {
                var i;
                if (!e) return g;
                if ("string" == typeof e) {
                  var s = e.toLowerCase();
                  D[s] && (i = s), n && (D[s] = n, i = s);
                  var u = e.split("-");
                  if (!i && u.length > 1) return t(u[0]);
                } else {
                  var a = e.name;
                  D[a] = e, i = a;
                }
                return !r && i && (g = i), i || !r && g;
              },
              O = function O(t, e) {
                if (S(t)) return t.clone();
                var n = "object" == typeof e ? e : {};
                return n.date = t, n.args = arguments, new _(n);
              },
              b = v;
            b.l = w, b.i = S, b.w = function (t, e) {
              return O(t, {
                locale: e.$L,
                utc: e.$u,
                x: e.$x,
                $offset: e.$offset
              });
            };
            var _ = function () {
                function M(t) {
                  this.$L = w(t.locale, null, true), this.parse(t), this.$x = this.$x || t.x || {}, this[p] = true;
                }
                var m = M.prototype;
                return m.parse = function (t) {
                  this.$d = function (t) {
                    var e = t.date,
                      n = t.utc;
                    if (null === e) return new Date(NaN);
                    if (b.u(e)) return new Date();
                    if (e instanceof Date) return new Date(e);
                    if ("string" == typeof e && !/Z$/i.test(e)) {
                      var r = e.match($);
                      if (r) {
                        var i = r[2] - 1 || 0,
                          s = (r[7] || "0").substring(0, 3);
                        return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
                      }
                    }
                    return new Date(e);
                  }(t), this.init();
                }, m.init = function () {
                  var t = this.$d;
                  this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
                }, m.$utils = function () {
                  return b;
                }, m.isValid = function () {
                  return !(this.$d.toString() === l);
                }, m.isSame = function (t, e) {
                  var n = O(t);
                  return this.startOf(e) <= n && n <= this.endOf(e);
                }, m.isAfter = function (t, e) {
                  return O(t) < this.startOf(e);
                }, m.isBefore = function (t, e) {
                  return this.endOf(e) < O(t);
                }, m.$g = function (t, e, n) {
                  return b.u(t) ? this[e] : this.set(n, t);
                }, m.unix = function () {
                  return Math.floor(this.valueOf() / 1e3);
                }, m.valueOf = function () {
                  return this.$d.getTime();
                }, m.startOf = function (t, e) {
                  var n = this,
                    r = !!b.u(e) || e,
                    f = b.p(t),
                    l = function l(t, e) {
                      var i = b.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
                      return r ? i : i.endOf(a);
                    },
                    $ = function $(t, e) {
                      return b.w(n.toDate()[t].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n);
                    },
                    y = this.$W,
                    M = this.$M,
                    m = this.$D,
                    v = "set" + (this.$u ? "UTC" : "");
                  switch (f) {
                    case h:
                      return r ? l(1, 0) : l(31, 11);
                    case c:
                      return r ? l(1, M) : l(0, M + 1);
                    case o:
                      var g = this.$locale().weekStart || 0,
                        D = (y < g ? y + 7 : y) - g;
                      return l(r ? m - D : m + (6 - D), M);
                    case a:
                    case d:
                      return $(v + "Hours", 0);
                    case u:
                      return $(v + "Minutes", 1);
                    case s:
                      return $(v + "Seconds", 2);
                    case i:
                      return $(v + "Milliseconds", 3);
                    default:
                      return this.clone();
                  }
                }, m.endOf = function (t) {
                  return this.startOf(t, false);
                }, m.$set = function (t, e) {
                  var n,
                    o = b.p(t),
                    f = "set" + (this.$u ? "UTC" : ""),
                    l = (n = {}, n[a] = f + "Date", n[d] = f + "Date", n[c] = f + "Month", n[h] = f + "FullYear", n[u] = f + "Hours", n[s] = f + "Minutes", n[i] = f + "Seconds", n[r] = f + "Milliseconds", n)[o],
                    $ = o === a ? this.$D + (e - this.$W) : e;
                  if (o === c || o === h) {
                    var y = this.clone().set(d, 1);
                    y.$d[l]($), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
                  } else l && this.$d[l]($);
                  return this.init(), this;
                }, m.set = function (t, e) {
                  return this.clone().$set(t, e);
                }, m.get = function (t) {
                  return this[b.p(t)]();
                }, m.add = function (r, f) {
                  var d,
                    l = this;
                  r = Number(r);
                  var $ = b.p(f),
                    y = function y(t) {
                      var e = O(l);
                      return b.w(e.date(e.date() + Math.round(t * r)), l);
                    };
                  if ($ === c) return this.set(c, this.$M + r);
                  if ($ === h) return this.set(h, this.$y + r);
                  if ($ === a) return y(1);
                  if ($ === o) return y(7);
                  var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[$] || 1,
                    m = this.$d.getTime() + r * M;
                  return b.w(m, this);
                }, m.subtract = function (t, e) {
                  return this.add(-1 * t, e);
                }, m.format = function (t) {
                  var e = this,
                    n = this.$locale();
                  if (!this.isValid()) return n.invalidDate || l;
                  var r = t || "YYYY-MM-DDTHH:mm:ssZ",
                    i = b.z(this),
                    s = this.$H,
                    u = this.$m,
                    a = this.$M,
                    o = n.weekdays,
                    c = n.months,
                    f = n.meridiem,
                    h = function h(t, n, i, s) {
                      return t && (t[n] || t(e, r)) || i[n].slice(0, s);
                    },
                    d = function d(t) {
                      return b.s(s % 12 || 12, t, "0");
                    },
                    $ = f || function (t, e, n) {
                      var r = t < 12 ? "AM" : "PM";
                      return n ? r.toLowerCase() : r;
                    };
                  return r.replace(y, function (t, r) {
                    return r || function (t) {
                      switch (t) {
                        case "YY":
                          return String(e.$y).slice(-2);
                        case "YYYY":
                          return b.s(e.$y, 4, "0");
                        case "M":
                          return a + 1;
                        case "MM":
                          return b.s(a + 1, 2, "0");
                        case "MMM":
                          return h(n.monthsShort, a, c, 3);
                        case "MMMM":
                          return h(c, a);
                        case "D":
                          return e.$D;
                        case "DD":
                          return b.s(e.$D, 2, "0");
                        case "d":
                          return String(e.$W);
                        case "dd":
                          return h(n.weekdaysMin, e.$W, o, 2);
                        case "ddd":
                          return h(n.weekdaysShort, e.$W, o, 3);
                        case "dddd":
                          return o[e.$W];
                        case "H":
                          return String(s);
                        case "HH":
                          return b.s(s, 2, "0");
                        case "h":
                          return d(1);
                        case "hh":
                          return d(2);
                        case "a":
                          return $(s, u, true);
                        case "A":
                          return $(s, u, false);
                        case "m":
                          return String(u);
                        case "mm":
                          return b.s(u, 2, "0");
                        case "s":
                          return String(e.$s);
                        case "ss":
                          return b.s(e.$s, 2, "0");
                        case "SSS":
                          return b.s(e.$ms, 3, "0");
                        case "Z":
                          return i;
                      }
                      return null;
                    }(t) || i.replace(":", "");
                  });
                }, m.utcOffset = function () {
                  return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
                }, m.diff = function (r, d, l) {
                  var $,
                    y = this,
                    M = b.p(d),
                    m = O(r),
                    v = (m.utcOffset() - this.utcOffset()) * e,
                    g = this - m,
                    D = function D() {
                      return b.m(y, m);
                    };
                  switch (M) {
                    case h:
                      $ = D() / 12;
                      break;
                    case c:
                      $ = D();
                      break;
                    case f:
                      $ = D() / 3;
                      break;
                    case o:
                      $ = (g - v) / 6048e5;
                      break;
                    case a:
                      $ = (g - v) / 864e5;
                      break;
                    case u:
                      $ = g / n;
                      break;
                    case s:
                      $ = g / e;
                      break;
                    case i:
                      $ = g / t;
                      break;
                    default:
                      $ = g;
                  }
                  return l ? $ : b.a($);
                }, m.daysInMonth = function () {
                  return this.endOf(c).$D;
                }, m.$locale = function () {
                  return D[this.$L];
                }, m.locale = function (t, e) {
                  if (!t) return this.$L;
                  var n = this.clone(),
                    r = w(t, e, true);
                  return r && (n.$L = r), n;
                }, m.clone = function () {
                  return b.w(this.$d, this);
                }, m.toDate = function () {
                  return new Date(this.valueOf());
                }, m.toJSON = function () {
                  return this.isValid() ? this.toISOString() : null;
                }, m.toISOString = function () {
                  return this.$d.toISOString();
                }, m.toString = function () {
                  return this.$d.toUTCString();
                }, M;
              }(),
              k = _.prototype;
            return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach(function (t) {
              k[t[1]] = function (e) {
                return this.$g(e, t[0], t[1]);
              };
            }), O.extend = function (t, e) {
              return t.$i || (t(e, _, O), t.$i = true), O;
            }, O.locale = w, O.isDayjs = S, O.unix = function (t) {
              return O(1e3 * t);
            }, O.en = D[g], O.Ls = D, O.p = {}, O;
          });
        })(dayjs_min);
        var dayjs_minExports = dayjs_min.exports;
        const dayjs = /*@__PURE__*/getDefaultExportFromCjs(dayjs_minExports);
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
        var customParseFormat = {
          exports: {}
        };
        (function (module, exports) {
          !function (e, t) {
            module.exports = t();
          }(commonjsGlobal, function () {
            var e = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
              },
              t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
              n = /\d/,
              r = /\d\d/,
              i = /\d\d?/,
              o = /\d*[^-_:/,()\s\d]+/,
              s = {},
              a = function a(e) {
                return (e = +e) + (e > 68 ? 1900 : 2e3);
              };
            var f = function f(e) {
                return function (t) {
                  this[e] = +t;
                };
              },
              h = [/[+-]\d\d:?(\d\d)?|Z/, function (e) {
                (this.zone || (this.zone = {})).offset = function (e) {
                  if (!e) return 0;
                  if ("Z" === e) return 0;
                  var t = e.match(/([+-]|\d\d)/g),
                    n = 60 * t[1] + (+t[2] || 0);
                  return 0 === n ? 0 : "+" === t[0] ? -n : n;
                }(e);
              }],
              u = function u(e) {
                var t = s[e];
                return t && (t.indexOf ? t : t.s.concat(t.f));
              },
              d = function d(e, t) {
                var n,
                  r = s.meridiem;
                if (r) {
                  for (var i = 1; i <= 24; i += 1) if (e.indexOf(r(i, 0, t)) > -1) {
                    n = i > 12;
                    break;
                  }
                } else n = e === (t ? "pm" : "PM");
                return n;
              },
              c = {
                A: [o, function (e) {
                  this.afternoon = d(e, false);
                }],
                a: [o, function (e) {
                  this.afternoon = d(e, true);
                }],
                Q: [n, function (e) {
                  this.month = 3 * (e - 1) + 1;
                }],
                S: [n, function (e) {
                  this.milliseconds = 100 * +e;
                }],
                SS: [r, function (e) {
                  this.milliseconds = 10 * +e;
                }],
                SSS: [/\d{3}/, function (e) {
                  this.milliseconds = +e;
                }],
                s: [i, f("seconds")],
                ss: [i, f("seconds")],
                m: [i, f("minutes")],
                mm: [i, f("minutes")],
                H: [i, f("hours")],
                h: [i, f("hours")],
                HH: [i, f("hours")],
                hh: [i, f("hours")],
                D: [i, f("day")],
                DD: [r, f("day")],
                Do: [o, function (e) {
                  var t = s.ordinal,
                    n = e.match(/\d+/);
                  if (this.day = n[0], t) for (var r = 1; r <= 31; r += 1) t(r).replace(/\[|\]/g, "") === e && (this.day = r);
                }],
                w: [i, f("week")],
                ww: [r, f("week")],
                M: [i, f("month")],
                MM: [r, f("month")],
                MMM: [o, function (e) {
                  var t = u("months"),
                    n = (u("monthsShort") || t.map(function (e) {
                      return e.slice(0, 3);
                    })).indexOf(e) + 1;
                  if (n < 1) throw new Error();
                  this.month = n % 12 || n;
                }],
                MMMM: [o, function (e) {
                  var t = u("months").indexOf(e) + 1;
                  if (t < 1) throw new Error();
                  this.month = t % 12 || t;
                }],
                Y: [/[+-]?\d+/, f("year")],
                YY: [r, function (e) {
                  this.year = a(e);
                }],
                YYYY: [/\d{4}/, f("year")],
                Z: h,
                ZZ: h
              };
            function l(n) {
              var r, i;
              r = n, i = s && s.formats;
              for (var o = (n = r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (t, n, r) {
                  var o = r && r.toUpperCase();
                  return n || i[r] || e[r] || i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (e, t, n) {
                    return t || n.slice(1);
                  });
                })).match(t), a = o.length, f = 0; f < a; f += 1) {
                var h = o[f],
                  u = c[h],
                  d = u && u[0],
                  l = u && u[1];
                o[f] = l ? {
                  regex: d,
                  parser: l
                } : h.replace(/^\[|\]$/g, "");
              }
              return function (e) {
                for (var t = {}, n = 0, r = 0; n < a; n += 1) {
                  var i = o[n];
                  if ("string" == typeof i) r += i.length;else {
                    var s = i.regex,
                      f = i.parser,
                      h = e.slice(r),
                      u = s.exec(h)[0];
                    f.call(t, u), e = e.replace(u, "");
                  }
                }
                return function (e) {
                  var t = e.afternoon;
                  if (void 0 !== t) {
                    var n = e.hours;
                    t ? n < 12 && (e.hours += 12) : 12 === n && (e.hours = 0), delete e.afternoon;
                  }
                }(t), t;
              };
            }
            return function (e, t, n) {
              n.p.customParseFormat = true, e && e.parseTwoDigitYear && (a = e.parseTwoDigitYear);
              var r = t.prototype,
                i = r.parse;
              r.parse = function (e) {
                var t = e.date,
                  r = e.utc,
                  o = e.args;
                this.$u = r;
                var a = o[1];
                if ("string" == typeof a) {
                  var f = true === o[2],
                    h = true === o[3],
                    u = f || h,
                    d = o[2];
                  h && (d = o[2]), s = this.$locale(), !f && d && (s = n.Ls[d]), this.$d = function (e, t, n, r) {
                    try {
                      if (["x", "X"].indexOf(t) > -1) return new Date(("X" === t ? 1e3 : 1) * e);
                      var i = l(t)(e),
                        o = i.year,
                        s = i.month,
                        a = i.day,
                        f = i.hours,
                        h = i.minutes,
                        u = i.seconds,
                        d = i.milliseconds,
                        c = i.zone,
                        m = i.week,
                        M = new Date(),
                        Y = a || (o || s ? 1 : M.getDate()),
                        p = o || M.getFullYear(),
                        v = 0;
                      o && !s || (v = s > 0 ? s - 1 : M.getMonth());
                      var D,
                        w = f || 0,
                        g = h || 0,
                        y = u || 0,
                        L = d || 0;
                      return c ? new Date(Date.UTC(p, v, Y, w, g, y, L + 60 * c.offset * 1e3)) : n ? new Date(Date.UTC(p, v, Y, w, g, y, L)) : (D = new Date(p, v, Y, w, g, y, L), m && (D = r(D).week(m).toDate()), D);
                    } catch (e) {
                      return new Date("");
                    }
                  }(t, a, r, n), this.init(), d && true !== d && (this.$L = this.locale(d).$L), u && t != this.format(a) && (this.$d = new Date("")), s = {};
                } else if (a instanceof Array) for (var c = a.length, m = 1; m <= c; m += 1) {
                  o[1] = a[m - 1];
                  var M = n.apply(this, o);
                  if (M.isValid()) {
                    this.$d = M.$d, this.$L = M.$L, this.init();
                    break;
                  }
                  m === c && (this.$d = new Date(""));
                } else i.call(this, e);
              };
            };
          });
        })(customParseFormat);
        var customParseFormatExports = customParseFormat.exports;
        const customParseFormatPlugin = /*@__PURE__*/getDefaultExportFromCjs(customParseFormatExports);
        var localizedFormat = {
          exports: {}
        };
        (function (module, exports) {
          !function (e, t) {
            module.exports = t();
          }(commonjsGlobal, function () {
            var e = {
              LTS: "h:mm:ss A",
              LT: "h:mm A",
              L: "MM/DD/YYYY",
              LL: "MMMM D, YYYY",
              LLL: "MMMM D, YYYY h:mm A",
              LLLL: "dddd, MMMM D, YYYY h:mm A"
            };
            return function (t, o, n) {
              var r = o.prototype,
                i = r.format;
              n.en.formats = e, r.format = function (t) {
                void 0 === t && (t = "YYYY-MM-DDTHH:mm:ssZ");
                var o = this.$locale().formats,
                  n = function (t, o) {
                    return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (t, n, r) {
                      var i = r && r.toUpperCase();
                      return n || o[r] || e[r] || o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (e, t, o) {
                        return t || o.slice(1);
                      });
                    });
                  }(t, void 0 === o ? {} : o);
                return i.call(this, n);
              };
            };
          });
        })(localizedFormat);
        var localizedFormatExports = localizedFormat.exports;
        const localizedFormatPlugin = /*@__PURE__*/getDefaultExportFromCjs(localizedFormatExports);
        var isBetween = {
          exports: {}
        };
        (function (module, exports) {
          !function (e, i) {
            module.exports = i();
          }(commonjsGlobal, function () {
            return function (e, i, t) {
              i.prototype.isBetween = function (e, i, s, f) {
                var n = t(e),
                  o = t(i),
                  r = "(" === (f = f || "()")[0],
                  u = ")" === f[1];
                return (r ? this.isAfter(n, s) : !this.isBefore(n, s)) && (u ? this.isBefore(o, s) : !this.isAfter(o, s)) || (r ? this.isBefore(n, s) : !this.isAfter(n, s)) && (u ? this.isAfter(o, s) : !this.isBefore(o, s));
              };
            };
          });
        })(isBetween);
        var isBetweenExports = isBetween.exports;
        const isBetweenPlugin = /*@__PURE__*/getDefaultExportFromCjs(isBetweenExports);
        dayjs.extend(customParseFormatPlugin);
        dayjs.extend(localizedFormatPlugin);
        dayjs.extend(isBetweenPlugin);
        const withLocale = (dayjs, locale) => !locale ? dayjs : (...args) => dayjs(...args).locale(locale);
        const defaultFormats = {
          normalDateWithWeekday: "ddd, MMM D",
          normalDate: "D MMMM",
          shortDate: "MMM D",
          monthAndDate: "MMMM D",
          dayOfMonth: "D",
          year: "YYYY",
          month: "MMMM",
          monthShort: "MMM",
          monthAndYear: "MMMM YYYY",
          weekday: "dddd",
          weekdayShort: "ddd",
          minutes: "mm",
          hours12h: "hh",
          hours24h: "HH",
          seconds: "ss",
          fullTime: "LT",
          fullTime12h: "hh:mm A",
          fullTime24h: "HH:mm",
          fullDate: "ll",
          fullDateWithWeekday: "dddd, LL",
          fullDateTime: "lll",
          fullDateTime12h: "ll hh:mm A",
          fullDateTime24h: "ll HH:mm",
          keyboardDate: "L",
          keyboardDateTime: "L LT",
          keyboardDateTime12h: "L hh:mm A",
          keyboardDateTime24h: "L HH:mm"
        };
        class DayjsUtils {
          constructor({
            locale,
            formats,
            instance
          } = {}) {
            this.lib = "dayjs";
            this.is12HourCycleInCurrentLocale = () => {
              var _a, _b, _c;
              /* istanbul ignore next */
              return /A|a/.test((_c = (_b = (_a = this.rawDayJsInstance.Ls[this.locale || "en"]) === null || _a === void 0 ? void 0 : _a.formats) === null || _b === void 0 ? void 0 : _b.LT) !== null && _c !== void 0 ? _c : "");
            };
            this.getCurrentLocaleCode = () => {
              return this.locale || "en";
            };
            this.getFormatHelperText = format => {
              var _a, _b;
              // @see https://github.com/iamkun/dayjs/blob/dev/src/plugin/localizedFormat/index.js
              var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?)|./g;
              return (_b = (_a = format.match(localFormattingTokens)) === null || _a === void 0 ? void 0 : _a.map(token => {
                var _a, _b;
                var firstCharacter = token[0];
                if (firstCharacter === "L") {
                  /* istanbul ignore next */
                  return (_b = (_a = this.rawDayJsInstance.Ls[this.locale || "en"]) === null || _a === void 0 ? void 0 : _a.formats[token]) !== null && _b !== void 0 ? _b : token;
                }
                return token;
              }).join("").replace(/a/gi, "(a|p)m").toLocaleLowerCase()) !== null && _b !== void 0 ? _b : format;
            };
            this.parseISO = isoString => {
              return this.dayjs(isoString);
            };
            this.toISO = value => {
              return value.toISOString();
            };
            this.parse = (value, format) => {
              if (value === "") {
                return null;
              }
              return this.dayjs(value, format, this.locale, true);
            };
            this.date = value => {
              if (value === null) {
                return null;
              }
              return this.dayjs(value);
            };
            this.toJsDate = value => {
              return value.toDate();
            };
            this.isValid = value => {
              return this.dayjs(value).isValid();
            };
            this.isNull = date => {
              return date === null;
            };
            this.getDiff = (date, comparing, units) => {
              if (typeof comparing === "string") {
                comparing = this.dayjs(comparing);
              }
              if (!comparing.isValid()) {
                return 0;
              }
              return date.diff(comparing, units);
            };
            this.isAfter = (date, value) => {
              return date.isAfter(value);
            };
            this.isBefore = (date, value) => {
              return date.isBefore(value);
            };
            this.isAfterDay = (date, value) => {
              return date.isAfter(value, "day");
            };
            this.isBeforeDay = (date, value) => {
              return date.isBefore(value, "day");
            };
            this.isAfterMonth = (date, value) => {
              return date.isAfter(value, "month");
            };
            this.isBeforeMonth = (date, value) => {
              return date.isBefore(value, "month");
            };
            this.isBeforeYear = (date, value) => {
              return date.isBefore(value, "year");
            };
            this.isAfterYear = (date, value) => {
              return date.isAfter(value, "year");
            };
            this.startOfDay = date => {
              return date.startOf("day");
            };
            this.endOfDay = date => {
              return date.endOf("day");
            };
            this.format = (date, formatKey) => {
              return this.formatByString(date, this.formats[formatKey]);
            };
            this.formatByString = (date, formatString) => {
              return this.dayjs(date).format(formatString);
            };
            this.formatNumber = numberToFormat => {
              return numberToFormat;
            };
            this.getHours = date => {
              return date.hour();
            };
            this.addSeconds = (date, count) => {
              return count < 0 ? date.subtract(Math.abs(count), "second") : date.add(count, "second");
            };
            this.addMinutes = (date, count) => {
              return count < 0 ? date.subtract(Math.abs(count), "minute") : date.add(count, "minute");
            };
            this.addHours = (date, count) => {
              return count < 0 ? date.subtract(Math.abs(count), "hour") : date.add(count, "hour");
            };
            this.addDays = (date, count) => {
              return count < 0 ? date.subtract(Math.abs(count), "day") : date.add(count, "day");
            };
            this.addWeeks = (date, count) => {
              return count < 0 ? date.subtract(Math.abs(count), "week") : date.add(count, "week");
            };
            this.addMonths = (date, count) => {
              return count < 0 ? date.subtract(Math.abs(count), "month") : date.add(count, "month");
            };
            this.addYears = (date, count) => {
              return count < 0 ? date.subtract(Math.abs(count), "year") : date.add(count, "year");
            };
            this.setMonth = (date, count) => {
              return date.set("month", count);
            };
            this.setHours = (date, count) => {
              return date.set("hour", count);
            };
            this.getMinutes = date => {
              return date.minute();
            };
            this.setMinutes = (date, count) => {
              return date.set("minute", count);
            };
            this.getSeconds = date => {
              return date.second();
            };
            this.setSeconds = (date, count) => {
              return date.set("second", count);
            };
            this.getMonth = date => {
              return date.month();
            };
            this.getDate = date => {
              return date.date();
            };
            this.setDate = (date, count) => {
              return date.set("date", count);
            };
            this.getDaysInMonth = date => {
              return date.daysInMonth();
            };
            this.isSameDay = (date, comparing) => {
              return date.isSame(comparing, "day");
            };
            this.isSameMonth = (date, comparing) => {
              return date.isSame(comparing, "month");
            };
            this.isSameYear = (date, comparing) => {
              return date.isSame(comparing, "year");
            };
            this.isSameHour = (date, comparing) => {
              return date.isSame(comparing, "hour");
            };
            this.getMeridiemText = ampm => {
              return ampm === "am" ? "AM" : "PM";
            };
            this.startOfYear = date => {
              return date.startOf("year");
            };
            this.endOfYear = date => {
              return date.endOf("year");
            };
            this.startOfMonth = date => {
              return date.startOf("month");
            };
            this.endOfMonth = date => {
              return date.endOf("month");
            };
            this.startOfWeek = date => {
              return date.startOf("week");
            };
            this.endOfWeek = date => {
              return date.endOf("week");
            };
            this.getNextMonth = date => {
              return date.add(1, "month");
            };
            this.getPreviousMonth = date => {
              return date.subtract(1, "month");
            };
            this.getMonthArray = date => {
              const firstMonth = date.startOf("year");
              const monthArray = [firstMonth];
              while (monthArray.length < 12) {
                const prevMonth = monthArray[monthArray.length - 1];
                monthArray.push(this.getNextMonth(prevMonth));
              }
              return monthArray;
            };
            this.getYear = date => {
              return date.year();
            };
            this.setYear = (date, year) => {
              return date.set("year", year);
            };
            this.mergeDateAndTime = (date, time) => {
              return date.hour(time.hour()).minute(time.minute()).second(time.second());
            };
            this.getWeekdays = () => {
              const start = this.dayjs().startOf("week");
              return [0, 1, 2, 3, 4, 5, 6].map(diff => this.formatByString(start.add(diff, "day"), "dd"));
            };
            this.isEqual = (value, comparing) => {
              if (value === null && comparing === null) {
                return true;
              }
              return this.dayjs(value).isSame(comparing);
            };
            this.getWeekArray = date => {
              const start = this.dayjs(date).startOf("month").startOf("week");
              const end = this.dayjs(date).endOf("month").endOf("week");
              let count = 0;
              let current = start;
              const nestedWeeks = [];
              while (current.isBefore(end)) {
                const weekNumber = Math.floor(count / 7);
                nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
                nestedWeeks[weekNumber].push(current);
                current = current.add(1, "day");
                count += 1;
              }
              return nestedWeeks;
            };
            this.getYearRange = (start, end) => {
              const startDate = this.dayjs(start).startOf("year");
              const endDate = this.dayjs(end).endOf("year");
              const years = [];
              let current = startDate;
              while (current.isBefore(endDate)) {
                years.push(current);
                current = current.add(1, "year");
              }
              return years;
            };
            this.isWithinRange = (date, [start, end]) => {
              return date.isBetween(start, end, null, "[]");
            };
            this.rawDayJsInstance = instance || dayjs;
            this.dayjs = withLocale(this.rawDayJsInstance, locale);
            this.locale = locale;
            this.formats = Object.assign({}, defaultFormats, formats);
          }
        }
        const formatTokenMap = {
          YY: 'year',
          YYYY: 'year',
          M: 'month',
          MM: 'month',
          MMM: 'month',
          MMMM: 'month',
          D: 'day',
          DD: 'day',
          H: 'hour',
          HH: 'hour',
          h: 'hour',
          hh: 'hour',
          m: 'minute',
          mm: 'minute',
          s: 'second',
          ss: 'second',
          A: 'am-pm',
          a: 'am-pm'
        };
        class AdapterDayjs extends DayjsUtils {
          constructor(...args) {
            super(...args);
            this.formatTokenMap = formatTokenMap;
            this.expandFormat = format => {
              var _this$rawDayJsInstanc;
              const localeFormats = (_this$rawDayJsInstanc = this.rawDayJsInstance.Ls[this.locale || 'en']) == null ? void 0 : _this$rawDayJsInstanc.formats; // @see https://github.com/iamkun/dayjs/blob/dev/src/plugin/localizedFormat/index.js

              const t = formatBis => formatBis.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (_, a, b) => a || b.slice(1));
              return format.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (_, a, b) => {
                const B = b && b.toUpperCase();
                return a || localeFormats[b] || t(localeFormats[B]);
              });
            };
            this.getFormatHelperText = format => {
              return this.expandFormat(format).replace(/a/gi, '(a|p)m').toLocaleLowerCase();
            };
          }
        }
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
        function getPickersMonthUtilityClass(slot) {
          // TODO v6 Rename 'PrivatePickersMonth' to 'MuiPickersMonth' to follow convention
          return generateUtilityClass('PrivatePickersMonth', slot);
        }
        const pickersMonthClasses = generateUtilityClasses(
        // TODO v6 Rename 'PrivatePickersMonth' to 'MuiPickersMonth' to follow convention
        'PrivatePickersMonth', ['root', 'selected']);
        const _excluded$s = ["disabled", "onSelect", "selected", "value", "tabIndex", "hasFocus", "onFocus", "onBlur"];
        const useUtilityClasses$n = ownerState => {
          const classes = ownerState.classes,
            selected = ownerState.selected;
          const slots = {
            root: ['root', selected && 'selected']
          };
          return composeClasses$1(slots, getPickersMonthUtilityClass, classes);
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
            other = _objectWithoutPropertiesLoose(props, _excluded$s);
          const classes = useUtilityClasses$n(props);
          const handleSelection = () => {
            onSelect(value);
          };
          const ref = reactExports.useRef(null);
          useEnhancedEffect$1(() => {
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
        const useLocalizationContext = () => {
          const localization = reactExports.useContext(MuiPickersAdapterContext);
          if (localization === null) {
            throw new Error('MUI: Can not find utils in context. It looks like you forgot to wrap your component in LocalizationProvider, or pass dateAdapter prop directly.');
          }
          return localization;
        };
        const useUtils = () => useLocalizationContext().utils;
        const useDefaultDates = () => useLocalizationContext().defaultDates;
        const useLocaleText = () => useLocalizationContext().localeText;
        const useNow = () => {
          const utils = useUtils();
          const now = reactExports.useRef(utils.date());
          return now.current;
        };
        function getMonthPickerUtilityClass(slot) {
          return generateUtilityClass('MuiMonthPicker', slot);
        }
        generateUtilityClasses('MuiMonthPicker', ['root']);
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
        const parsePickerInputValue = (utils, value) => {
          const parsedValue = utils.date(value);
          return utils.isValid(parsedValue) ? parsedValue : null;
        };
        const parseNonNullablePickerDate = (utils, value, defaultValue) => {
          if (value == null) {
            return defaultValue;
          }
          const parsedValue = utils.date(value);
          const isDateValid = utils.isValid(parsedValue);
          if (isDateValid) {
            return parsedValue;
          }
          return defaultValue;
        };
        const _excluded$r = ["className", "date", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "shouldDisableMonth", "readOnly", "disableHighlightToday", "autoFocus", "onMonthFocus", "hasFocus", "onFocusedViewChange"];
        const useUtilityClasses$m = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ["root"]
          };
          return composeClasses$1(slots, getMonthPickerUtilityClass, classes);
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
            other = _objectWithoutPropertiesLoose(props, _excluded$r);
          const ownerState = props;
          const classes = useUtilityClasses$m(ownerState);
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
          const _reactExports$useStat11 = reactExports.useState(() => selectedMonth || utils.getMonth(now)),
            _reactExports$useStat12 = _slicedToArray(_reactExports$useStat11, 2),
            focusedMonth = _reactExports$useStat12[0],
            setFocusedMonth = _reactExports$useStat12[1];
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
          const _useControlled$ = useControlled$1({
              name: "MonthPicker",
              state: "hasFocus",
              controlled: hasFocus,
              default: autoFocus
            }),
            _useControlled$2 = _slicedToArray(_useControlled$, 2),
            internalHasFocus = _useControlled$2[0],
            setInternalHasFocus = _useControlled$2[1];
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
        const useDateValidation = props => useValidation(props, validateDate, isSameDateError);
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
        const useUtilityClasses$l = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ['root']
          };
          return composeClasses$1(slots, getPickersFadeTransitionGroupUtilityClass, classes);
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
          const classes = useUtilityClasses$l(props);
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

        /**
         * A version of `React.useLayoutEffect` that does not show a warning when server-side rendering.
         * This is useful for effects that are only needed for client-side rendering but not for SSR.
         *
         * Before you use this hook, make sure to read https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
         * and confirm it doesn't apply to your use-case.
         */
        const useEnhancedEffect = typeof window !== 'undefined' ? reactExports.useLayoutEffect : reactExports.useEffect;
        function useControlled({
          controlled,
          default: defaultProp,
          name,
          state = "value"
        }) {
          const _reactExports$useRef = reactExports.useRef(controlled !== void 0),
            isControlled = _reactExports$useRef.current;
          const _reactExports$useStat13 = reactExports.useState(defaultProp),
            _reactExports$useStat14 = _slicedToArray(_reactExports$useStat13, 2),
            valueState = _reactExports$useStat14[0],
            setValue = _reactExports$useStat14[1];
          const value = isControlled ? controlled : valueState;
          const setValueIfUncontrolled = reactExports.useCallback(newValue => {
            if (!isControlled) {
              setValue(newValue);
            }
          }, []);
          return [value, setValueIfUncontrolled];
        }
        function composeClasses(slots, getUtilityClass, classes = undefined) {
          const output = {};
          Object.keys(slots).forEach(
          // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
          // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
          slot => {
            output[slot] = slots[slot].reduce((acc, key) => {
              if (key) {
                const utilityClass = getUtilityClass(key);
                if (utilityClass !== '') {
                  acc.push(utilityClass);
                }
                if (classes && classes[key]) {
                  acc.push(classes[key]);
                }
              }
              return acc;
            }, []).join(' ');
          });
          return output;
        }
        const DAY_SIZE = 36;
        const DAY_MARGIN = 2;
        const DIALOG_WIDTH = 320;
        const VIEW_HEIGHT = 358;
        function getPickersDayUtilityClass(slot) {
          return generateUtilityClass('MuiPickersDay', slot);
        }
        const pickersDayClasses = generateUtilityClasses('MuiPickersDay', ['root', 'dayWithMargin', 'dayOutsideMonth', 'hiddenDaySpacingFiller', 'today', 'selected', 'disabled']);
        const _excluded$q = ["autoFocus", "className", "day", "disabled", "disableHighlightToday", "disableMargin", "hidden", "isAnimating", "onClick", "onDaySelect", "onFocus", "onBlur", "onKeyDown", "onMouseDown", "outsideCurrentMonth", "selected", "showDaysOutsideCurrentMonth", "children", "today"];
        const useUtilityClasses$k = ownerState => {
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
          return composeClasses$1(slots, getPickersDayUtilityClass, classes);
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
            _props$disabled2 = props.disabled,
            disabled = _props$disabled2 === void 0 ? false : _props$disabled2,
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
            other = _objectWithoutPropertiesLoose(props, _excluded$q);
          const ownerState = _extends({}, props, {
            autoFocus,
            disabled,
            disableHighlightToday,
            disableMargin,
            selected,
            showDaysOutsideCurrentMonth,
            today: isToday
          });
          const classes = useUtilityClasses$k(ownerState);
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
        const _excluded$p = ["children", "className", "reduceAnimations", "slideDirection", "transKey"];
        const useUtilityClasses$j = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ['root']
          };
          return composeClasses$1(slots, getPickersSlideTransitionUtilityClass, classes);
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
            other = _objectWithoutPropertiesLoose(props, _excluded$p);
          const classes = useUtilityClasses$j(props);
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
        const useUtilityClasses$i = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            header: ['header'],
            weekDayLabel: ['weekDayLabel'],
            loadingContainer: ['loadingContainer'],
            slideTransition: ['slideTransition'],
            monthContainer: ['monthContainer'],
            weekContainer: ['weekContainer']
          };
          return composeClasses$1(slots, getDayPickerUtilityClass, classes);
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
          const classes = useUtilityClasses$i(props);
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
          const _reactExports$useStat15 = reactExports.useState(() => focusedDay || now),
            _reactExports$useStat16 = _slicedToArray(_reactExports$useStat15, 2),
            internalFocusedDay = _reactExports$useStat16[0],
            setInternalFocusedDay = _reactExports$useStat16[1];
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
        function useViews({
          onChange,
          onViewChange,
          openTo,
          view,
          views
        }) {
          var _views, _views2;
          const _useControlled$3 = useControlled$1({
              name: 'Picker',
              state: 'view',
              controlled: view,
              default: openTo && arrayIncludes(views, openTo) ? openTo : views[0]
            }),
            _useControlled$4 = _slicedToArray(_useControlled$3, 2),
            openView = _useControlled$4[0],
            setOpenView = _useControlled$4[1];
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

        const Clock$1 = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsxs(reactExports.Fragment, {
          children: [/*#__PURE__*/jsxRuntimeExports.jsx("path", {
            d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
          }), /*#__PURE__*/jsxRuntimeExports.jsx("path", {
            d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
          })]
        }), 'Clock');
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
        function getPickersArrowSwitcherUtilityClass(slot) {
          return generateUtilityClass('MuiPickersArrowSwitcher', slot);
        }
        generateUtilityClasses('MuiPickersArrowSwitcher', ['root', 'spacer', 'button']);
        const _excluded$o = ["children", "className", "components", "componentsProps", "isLeftDisabled", "isLeftHidden", "isRightDisabled", "isRightHidden", "leftArrowButtonText", "onLeftClick", "onRightClick", "rightArrowButtonText"];
        const useUtilityClasses$h = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ['root'],
            spacer: ['spacer'],
            button: ['button']
          };
          return composeClasses$1(slots, getPickersArrowSwitcherUtilityClass, classes);
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
            other = _objectWithoutPropertiesLoose(props, _excluded$o);
          const theme = useTheme();
          const isRtl = theme.direction === 'rtl';
          const leftArrowButtonProps = (componentsProps == null ? void 0 : componentsProps.leftArrowButton) || {};
          const LeftArrowIcon = (components == null ? void 0 : components.LeftArrowIcon) || ArrowLeft;
          const rightArrowButtonProps = (componentsProps == null ? void 0 : componentsProps.rightArrowButton) || {};
          const RightArrowIcon = (components == null ? void 0 : components.RightArrowIcon) || ArrowRight;
          const ownerState = props;
          const classes = useUtilityClasses$h(ownerState);
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
        const buildDeprecatedPropsWarning = message => {
          {
            return () => {};
          }
        };
        const getPickersCalendarHeaderUtilityClass = slot => generateUtilityClass('MuiPickersCalendarHeader', slot);
        generateUtilityClasses('MuiPickersCalendarHeader', ['root', 'labelContainer', 'label', 'switchViewButton', 'switchViewIcon']);
        const useUtilityClasses$g = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ['root'],
            labelContainer: ['labelContainer'],
            label: ['label'],
            switchViewButton: ['switchViewButton'],
            switchViewIcon: ['switchViewIcon']
          };
          return composeClasses$1(slots, getPickersCalendarHeaderUtilityClass, classes);
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
        const deprecatedPropsWarning$1 = buildDeprecatedPropsWarning();
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
          deprecatedPropsWarning$1({
            leftArrowButtonText: leftArrowButtonTextProp,
            rightArrowButtonText: rightArrowButtonTextProp,
            getViewSwitchingButtonText: getViewSwitchingButtonTextProp
          });
          const localeText = useLocaleText();
          const leftArrowButtonText = leftArrowButtonTextProp != null ? leftArrowButtonTextProp : localeText.previousMonth;
          const rightArrowButtonText = rightArrowButtonTextProp != null ? rightArrowButtonTextProp : localeText.nextMonth;
          const getViewSwitchingButtonText = getViewSwitchingButtonTextProp != null ? getViewSwitchingButtonTextProp : localeText.calendarViewSwitchingButtonAriaLabel;
          const utils = useUtils();
          const classes = useUtilityClasses$g(props);
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

        /**
         * TODO consider getting rid from wrapper variant
         * @ignore - internal component.
         */
        const WrapperVariantContext = /*#__PURE__*/reactExports.createContext(null);
        function getPickersYearUtilityClass(slot) {
          // TODO v6: Rename 'PrivatePickersYear' to 'MuiPickersYear' to follow convention
          return generateUtilityClass('PrivatePickersYear', slot);
        } // TODO v6: Rename 'PrivatePickersYear' to 'MuiPickersYear' to follow convention

        const pickersYearClasses = generateUtilityClasses('PrivatePickersYear', ['root', 'modeDesktop', 'modeMobile', 'yearButton', 'selected', 'disabled']);
        const _excluded$n = ["autoFocus", "className", "children", "disabled", "onClick", "onKeyDown", "value", "tabIndex", "onFocus", "onBlur"];
        const useUtilityClasses$f = ownerState => {
          const wrapperVariant = ownerState.wrapperVariant,
            disabled = ownerState.disabled,
            selected = ownerState.selected,
            classes = ownerState.classes;
          const slots = {
            root: ['root', wrapperVariant && `mode${capitalize(wrapperVariant)}`],
            yearButton: ['yearButton', disabled && 'disabled', selected && 'selected']
          };
          return composeClasses$1(slots, getPickersYearUtilityClass, classes);
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
            other = _objectWithoutPropertiesLoose(props, _excluded$n);
          const ref = reactExports.useRef(null);
          const refHandle = useForkRef(ref, forwardedRef);
          const wrapperVariant = reactExports.useContext(WrapperVariantContext);
          const ownerState = _extends({}, props, {
            wrapperVariant
          });
          const classes = useUtilityClasses$f(ownerState); // We can't forward the `autoFocus` to the button because it is a native button, not a MUI Button

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
        const useUtilityClasses$e = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ["root"]
          };
          return composeClasses$1(slots, getYearPickerUtilityClass, classes);
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
          const classes = useUtilityClasses$e(ownerState);
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
          const _reactExports$useStat17 = reactExports.useState(() => currentYear || utils.getYear(now)),
            _reactExports$useStat18 = _slicedToArray(_reactExports$useStat17, 2),
            focusedYear = _reactExports$useStat18[0],
            setFocusedYear = _reactExports$useStat18[1];
          const _useControlled = useControlled({
              name: "YearPicker",
              state: "hasFocus",
              controlled: hasFocus,
              default: autoFocus
            }),
            _useControlled2 = _slicedToArray(_useControlled, 2),
            internalHasFocus = _useControlled2[0],
            setInternalHasFocus = _useControlled2[1];
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
        const PickerViewRoot = styled('div')({
          overflowX: 'hidden',
          width: DIALOG_WIDTH,
          maxHeight: VIEW_HEIGHT,
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto'
        });
        const defaultReduceAnimations = typeof navigator !== 'undefined' && /(android)/i.test(navigator.userAgent);
        const getCalendarPickerUtilityClass = slot => generateUtilityClass('MuiCalendarPicker', slot);
        generateUtilityClasses('MuiCalendarPicker', ['root', 'viewTransitionContainer']);
        const _excluded$m = ["autoFocus", "onViewChange", "date", "disableFuture", "disablePast", "defaultCalendarMonth", "onChange", "onYearChange", "onMonthChange", "reduceAnimations", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear", "view", "views", "openTo", "className", "disabled", "readOnly", "minDate", "maxDate", "disableHighlightToday", "focusedView", "onFocusedViewChange", "classes"];
        const useUtilityClasses$d = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ["root"],
            viewTransitionContainer: ["viewTransitionContainer"]
          };
          return composeClasses$1(slots, getCalendarPickerUtilityClass, classes);
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
            other = _objectWithoutPropertiesLoose(props, _excluded$m);
          const _useViews = useViews({
              view,
              views,
              openTo,
              onChange,
              onViewChange
            }),
            openView = _useViews.openView,
            setOpenView = _useViews.setOpenView,
            openNext = _useViews.openNext;
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
          const classes = useUtilityClasses$d(ownerState);
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
          const _useControlled$5 = useControlled$1({
              name: "DayPicker",
              state: "focusedView",
              controlled: focusedView,
              default: autoFocus ? openView : null
            }),
            _useControlled$6 = _slicedToArray(_useControlled$5, 2),
            internalFocusedView = _useControlled$6[0],
            setInternalFocusedView = _useControlled$6[1];
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
        const _excluded$l = ["className", "hasSelected", "isInner", "type", "value"];
        const useUtilityClasses$c = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ['root'],
            thumb: ['thumb']
          };
          return composeClasses$1(slots, getClockPointerUtilityClass, classes);
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
            other = _objectWithoutPropertiesLoose(props, _excluded$l);
          const previousType = reactExports.useRef(type);
          reactExports.useEffect(() => {
            previousType.current = type;
          }, [type]);
          const ownerState = _extends({}, props, {
            shouldAnimate: previousType.current !== type
          });
          const classes = useUtilityClasses$c(ownerState);
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
        const useUtilityClasses$b = ownerState => {
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
          const classes = useUtilityClasses$b(ownerState);
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
        function getClockNumberUtilityClass(slot) {
          return generateUtilityClass('MuiClockNumber', slot);
        }
        const clockNumberClasses = generateUtilityClasses('MuiClockNumber', ['root', 'selected', 'disabled']);
        const _excluded$k = ["className", "disabled", "index", "inner", "label", "selected"];
        const useUtilityClasses$a = ownerState => {
          const classes = ownerState.classes,
            selected = ownerState.selected,
            disabled = ownerState.disabled;
          const slots = {
            root: ['root', selected && 'selected', disabled && 'disabled']
          };
          return composeClasses$1(slots, getClockNumberUtilityClass, classes);
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
            other = _objectWithoutPropertiesLoose(props, _excluded$k);
          const ownerState = props;
          const classes = useUtilityClasses$a(ownerState);
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
        function getClockPickerUtilityClass(slot) {
          return generateUtilityClass('MuiClockPicker', slot);
        }
        generateUtilityClasses('MuiClockPicker', ['root', 'arrowSwitcher']);
        const useUtilityClasses$9 = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ["root"],
            arrowSwitcher: ["arrowSwitcher"]
          };
          return composeClasses$1(slots, getClockPickerUtilityClass, classes);
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
        const deprecatedPropsWarning = buildDeprecatedPropsWarning();
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
          deprecatedPropsWarning({
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
          const _useViews2 = useViews({
              view,
              views,
              openTo,
              onViewChange,
              onChange
            }),
            openView = _useViews2.openView,
            setOpenView = _useViews2.setOpenView,
            nextView = _useViews2.nextView,
            previousView = _useViews2.previousView,
            handleChangeAndOpenNext = _useViews2.handleChangeAndOpenNext;
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
          const classes = useUtilityClasses$9(ownerState);
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
        const isYearOnlyView = views => views.length === 1 && views[0] === 'year';
        const isYearAndMonthViews = views => views.length === 2 && views.indexOf('month') !== -1 && views.indexOf('year') !== -1;
        const getFormatAndMaskByViews = (views, utils) => {
          if (isYearOnlyView(views)) {
            return {
              inputFormat: utils.formats.year
            };
          }
          if (isYearAndMonthViews(views)) {
            return {
              disableMaskedInput: true,
              inputFormat: utils.formats.monthAndYear
            };
          }
          return {
            inputFormat: utils.formats.keyboardDate
          };
        };
        function useDatePickerDefaultizedProps(props, name) {
          var _themeProps$views;
          const utils = useUtils();
          const defaultDates = useDefaultDates(); // This is technically unsound if the type parameters appear in optional props.
          // Optional props can be filled by `useThemeProps` with types that don't match the type parameters.

          const themeProps = useThemeProps({
            props,
            name
          });
          const views = (_themeProps$views = themeProps.views) != null ? _themeProps$views : ['year', 'day'];
          return _extends({
            openTo: 'day',
            disableFuture: false,
            disablePast: false
          }, getFormatAndMaskByViews(views, utils), themeProps, {
            views,
            minDate: parseNonNullablePickerDate(utils, themeProps.minDate, defaultDates.minDate),
            maxDate: parseNonNullablePickerDate(utils, themeProps.maxDate, defaultDates.maxDate)
          });
        }
        const datePickerValueManager = {
          emptyValue: null,
          getTodayValue: utils => utils.date(),
          parseInput: parsePickerInputValue,
          areValuesEqual: (utils, a, b) => utils.isEqual(a, b)
        };
        function getPickersToolbarUtilityClass(slot) {
          return generateUtilityClass('MuiPickersToolbar', slot);
        }
        const pickersToolbarClasses = generateUtilityClasses('MuiPickersToolbar', ['root', 'content', 'penIconButton', 'penIconButtonLandscape']);
        const useUtilityClasses$8 = ownerState => {
          const classes = ownerState.classes,
            isLandscape = ownerState.isLandscape;
          const slots = {
            root: ['root'],
            content: ['content'],
            penIconButton: ['penIconButton', isLandscape && 'penIconButtonLandscape']
          };
          return composeClasses$1(slots, getPickersToolbarUtilityClass, classes);
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
        const PickersToolbar = /*#__PURE__*/reactExports.forwardRef(function PickersToolbar(inProps, ref) {
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
          const classes = useUtilityClasses$8(ownerState);
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
        });
        function getDatePickerToolbarUtilityClass(slot) {
          return generateUtilityClass('MuiDatePickerToolbar', slot);
        }
        generateUtilityClasses('MuiDatePickerToolbar', ['root', 'title']);
        const _excluded$j = ["parsedValue", "isLandscape", "isMobileKeyboardViewOpen", "onChange", "toggleMobileKeyboardView", "toolbarFormat", "toolbarPlaceholder", "toolbarTitle", "views"];
        const useUtilityClasses$7 = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ['root'],
            title: ['title']
          };
          return composeClasses$1(slots, getDatePickerToolbarUtilityClass, classes);
        };
        const DatePickerToolbarRoot = styled(PickersToolbar, {
          name: 'MuiDatePickerToolbar',
          slot: 'Root',
          overridesResolver: (_, styles) => styles.root
        })({});
        const DatePickerToolbarTitle = styled(Typography, {
          name: 'MuiDatePickerToolbar',
          slot: 'Title',
          overridesResolver: (_, styles) => styles.title
        })(({
          ownerState
        }) => _extends({}, ownerState.isLandscape && {
          margin: 'auto 16px auto auto'
        }));

        /**
         * @ignore - internal component.
         */
        const DatePickerToolbar = /*#__PURE__*/reactExports.forwardRef(function DatePickerToolbar(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiDatePickerToolbar'
          });
          const parsedValue = props.parsedValue,
            isLandscape = props.isLandscape,
            isMobileKeyboardViewOpen = props.isMobileKeyboardViewOpen,
            toggleMobileKeyboardView = props.toggleMobileKeyboardView,
            toolbarFormat = props.toolbarFormat,
            _props$toolbarPlaceho = props.toolbarPlaceholder,
            toolbarPlaceholder = _props$toolbarPlaceho === void 0 ? '––' : _props$toolbarPlaceho,
            toolbarTitleProp = props.toolbarTitle,
            views = props.views,
            other = _objectWithoutPropertiesLoose(props, _excluded$j);
          const utils = useUtils();
          const localeText = useLocaleText();
          const classes = useUtilityClasses$7(props);
          const toolbarTitle = toolbarTitleProp != null ? toolbarTitleProp : localeText.datePickerDefaultToolbarTitle;
          const dateText = reactExports.useMemo(() => {
            if (!parsedValue) {
              return toolbarPlaceholder;
            }
            if (toolbarFormat) {
              return utils.formatByString(parsedValue, toolbarFormat);
            }
            if (isYearOnlyView(views)) {
              return utils.format(parsedValue, 'year');
            }
            if (isYearAndMonthViews(views)) {
              return utils.format(parsedValue, 'month');
            } // Little localization hack (Google is doing the same for android native pickers):
            // For english localization it is convenient to include weekday into the date "Mon, Jun 1".
            // For other locales using strings like "June 1", without weekday.

            return /en/.test(utils.getCurrentLocaleCode()) ? utils.format(parsedValue, 'normalDateWithWeekday') : utils.format(parsedValue, 'normalDate');
          }, [parsedValue, toolbarFormat, toolbarPlaceholder, utils, views]);
          const ownerState = props;
          return /*#__PURE__*/jsxRuntimeExports.jsx(DatePickerToolbarRoot, _extends({
            ref: ref,
            toolbarTitle: toolbarTitle,
            isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
            toggleMobileKeyboardView: toggleMobileKeyboardView,
            isLandscape: isLandscape,
            className: classes.root
          }, other, {
            children: /*#__PURE__*/jsxRuntimeExports.jsx(DatePickerToolbarTitle, {
              variant: "h4",
              align: isLandscape ? 'left' : 'center',
              ownerState: ownerState,
              className: classes.title,
              children: dateText
            })
          }));
        });
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
        const useUtilityClasses$6 = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ['root'],
            paper: ['paper']
          };
          return composeClasses$1(slots, getPickersPopperUtilityClass, classes);
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
            _props$TransitionComp2 = props.TransitionComponent,
            TransitionComponent = _props$TransitionComp2 === void 0 ? Grow : _props$TransitionComp2,
            TrapFocusProps = props.TrapFocusProps,
            _props$PaperProps2 = props.PaperProps,
            PaperProps = _props$PaperProps2 === void 0 ? {} : _props$PaperProps2,
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
          const classes = useUtilityClasses$6(ownerState);
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
          if (!isMaskValid && utils.lib !== "luxon" && false) ;
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

          const _reactExports$useStat19 = reactExports.useState(parsedValue),
            _reactExports$useStat20 = _slicedToArray(_reactExports$useStat19, 2),
            innerInputValue = _reactExports$useStat20[0],
            setInnerInputValue = _reactExports$useStat20[1]; // control the input text

          const _reactExports$useStat21 = reactExports.useState(getDisplayDate(utils, rawValue, inputFormat)),
            _reactExports$useStat22 = _slicedToArray(_reactExports$useStat21, 2),
            innerDisplayedInputValue = _reactExports$useStat22[0],
            setInnerDisplayedInputValue = _reactExports$useStat22[1]; // Inspired from autocomplete: https://github.com/mui/material-ui/blob/2c89d036dc2e16f100528f161600dffc83241768/packages/mui-base/src/AutocompleteUnstyled/useAutocomplete.js#L185:L201

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
        const _excluded$g = ["className", "components", "disableOpenPicker", "getOpenDialogAriaText", "InputAdornmentProps", "InputProps", "inputRef", "openPicker", "OpenPickerButtonProps", "renderInput"];
        const KeyboardDateInput = /*#__PURE__*/reactExports.forwardRef(function KeyboardDateInput(props, ref) {
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
            other = _objectWithoutPropertiesLoose(props, _excluded$g);
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
        });
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
          const _reactExports$useStat23 = reactExports.useState(getOrientation),
            _reactExports$useStat24 = _slicedToArray(_reactExports$useStat23, 2),
            orientation = _reactExports$useStat24[0],
            setOrientation = _reactExports$useStat24[1];
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
          const _reactExports$useStat25 = reactExports.useState(autoFocus ? openView : null),
            _reactExports$useStat26 = _slicedToArray(_reactExports$useStat25, 2),
            focusedView = _reactExports$useStat26[0],
            setFocusedView = _reactExports$useStat26[1];
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
        const _excluded$f = ["autoFocus", "className", "parsedValue", "DateInputProps", "isMobileKeyboardViewOpen", "onDateChange", "onViewChange", "openTo", "orientation", "showToolbar", "toggleMobileKeyboardView", "ToolbarComponent", "toolbarFormat", "toolbarPlaceholder", "toolbarTitle", "views", "dateRangeIcon", "timeIcon", "hideTabs", "classes"];
        const useUtilityClasses$5 = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ["root"],
            mobileKeyboardInputView: ["mobileKeyboardInputView"]
          };
          return composeClasses$1(slots, getCalendarOrClockPickerUtilityClass, classes);
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
            other = _objectWithoutPropertiesLoose(props, _excluded$f);
          const TabsComponent = (_other$components = other.components) == null ? void 0 : _other$components.Tabs;
          const isLandscape = useIsLandscape(views, orientation);
          const wrapperVariant = reactExports.useContext(WrapperVariantContext);
          const classes = useUtilityClasses$5(props);
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
        const useOpenState = ({
          open,
          onOpen,
          onClose
        }) => {
          const isControllingOpenProp = reactExports.useRef(typeof open === 'boolean').current;
          const _reactExports$useStat27 = reactExports.useState(false),
            _reactExports$useStat28 = _slicedToArray(_reactExports$useStat27, 2),
            openState = _reactExports$useStat28[0],
            setIsOpenState = _reactExports$useStat28[1]; // It is required to update inner state in useEffect in order to avoid situation when
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
        const usePickerState = (props, valueManager) => {
          const onAccept = props.onAccept,
            onChange = props.onChange,
            value = props.value,
            closeOnSelect = props.closeOnSelect;
          const utils = useUtils();
          const _useOpenState = useOpenState(props),
            isOpen = _useOpenState.isOpen,
            setIsOpen = _useOpenState.setIsOpen;
          const parsedDateValue = reactExports.useMemo(() => valueManager.parseInput(utils, value), [valueManager, utils, value]);
          const _reactExports$useStat29 = reactExports.useState(parsedDateValue),
            _reactExports$useStat30 = _slicedToArray(_reactExports$useStat29, 2),
            lastValidDateValue = _reactExports$useStat30[0],
            setLastValidDateValue = _reactExports$useStat30[1];
          const _reactExports$useStat31 = reactExports.useState(() => ({
              committed: parsedDateValue,
              draft: parsedDateValue,
              resetFallback: parsedDateValue
            })),
            _reactExports$useStat32 = _slicedToArray(_reactExports$useStat31, 2),
            dateState = _reactExports$useStat32[0],
            setDateState = _reactExports$useStat32[1];
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

          const _reactExports$useStat33 = reactExports.useState(false),
            _reactExports$useStat34 = _slicedToArray(_reactExports$useStat33, 2),
            isMobileKeyboardViewOpen = _reactExports$useStat34[0],
            setMobileKeyboardViewOpen = _reactExports$useStat34[1];
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
        };
        const _excluded$e = ["onChange", "PopperProps", "PaperProps", "ToolbarComponent", "TransitionComponent", "value", "components", "componentsProps"];
        const DesktopDatePicker = /* @__PURE__ */reactExports.forwardRef(function DesktopDatePicker2(inProps, ref) {
          const props = useDatePickerDefaultizedProps(inProps, "MuiDesktopDatePicker");
          const validationError = useDateValidation(props) !== null;
          const _usePickerState = usePickerState(props, datePickerValueManager),
            pickerProps = _usePickerState.pickerProps,
            inputProps = _usePickerState.inputProps,
            wrapperProps = _usePickerState.wrapperProps;
          const PopperProps = props.PopperProps,
            PaperProps = props.PaperProps,
            _props$ToolbarCompone2 = props.ToolbarComponent,
            ToolbarComponent = _props$ToolbarCompone2 === void 0 ? DatePickerToolbar : _props$ToolbarCompone2,
            TransitionComponent = props.TransitionComponent,
            components = props.components,
            componentsProps = props.componentsProps,
            other = _objectWithoutPropertiesLoose(props, _excluded$e);
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
              componentsProps
            }, other))
          }));
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
        const _excluded$d = ["children", "DateInputProps", "DialogProps", "onAccept", "onClear", "onDismiss", "onCancel", "onSetToday", "open", "PureDateInputComponent", "components", "componentsProps"];
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
            other = _objectWithoutPropertiesLoose(props, _excluded$d);
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
        const PureDateInput = /*#__PURE__*/reactExports.forwardRef(function PureDateInput(props, ref) {
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
        });
        const _excluded$c = ["ToolbarComponent", "value", "onChange", "components", "componentsProps"];
        const MobileDatePicker = /* @__PURE__ */reactExports.forwardRef(function MobileDatePicker2(inProps, ref) {
          const props = useDatePickerDefaultizedProps(inProps, "MuiMobileDatePicker");
          const validationError = useDateValidation(props) !== null;
          const _usePickerState2 = usePickerState(props, datePickerValueManager),
            pickerProps = _usePickerState2.pickerProps,
            inputProps = _usePickerState2.inputProps,
            wrapperProps = _usePickerState2.wrapperProps;
          const _props$ToolbarCompone3 = props.ToolbarComponent,
            ToolbarComponent = _props$ToolbarCompone3 === void 0 ? DatePickerToolbar : _props$ToolbarCompone3,
            components = props.components,
            componentsProps = props.componentsProps,
            other = _objectWithoutPropertiesLoose(props, _excluded$c);
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
              componentsProps
            }, other))
          }));
        });
        const _excluded$b = ["desktopModeMediaQuery", "DialogProps", "PopperProps", "TransitionComponent"];
        const DatePicker = /* @__PURE__ */reactExports.forwardRef(function DatePicker2(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: "MuiDatePicker"
          });
          const _props$desktopModeMed = props.desktopModeMediaQuery,
            desktopModeMediaQuery = _props$desktopModeMed === void 0 ? "@media (pointer: fine)" : _props$desktopModeMed,
            DialogProps = props.DialogProps,
            PopperProps = props.PopperProps,
            TransitionComponent = props.TransitionComponent,
            other = _objectWithoutPropertiesLoose(props, _excluded$b);
          const isDesktop = useMediaQuery(desktopModeMediaQuery, {
            defaultMatches: true
          });
          if (isDesktop) {
            return /* @__PURE__ */jsxRuntimeExports.jsx(DesktopDatePicker, _extends({
              ref,
              PopperProps,
              TransitionComponent
            }, other));
          }
          return /* @__PURE__ */jsxRuntimeExports.jsx(MobileDatePicker, _extends({
            ref,
            DialogProps
          }, other));
        });
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
        function getPickersToolbarTextUtilityClass(slot) {
          // TODO v6: Rename 'PrivatePickersToolbarText' to 'MuiPickersToolbarText' to follow convention
          return generateUtilityClass('PrivatePickersToolbarText', slot);
        } // TODO v6: Rename 'PrivatePickersToolbarText' to 'MuiPickersToolbarText' to follow convention

        const pickersToolbarTextClasses = generateUtilityClasses('PrivatePickersToolbarText', ['root', 'selected']);
        const _excluded$a = ["className", "selected", "value"];
        const useUtilityClasses$4 = ownerState => {
          const classes = ownerState.classes,
            selected = ownerState.selected;
          const slots = {
            root: ['root', selected && 'selected']
          };
          return composeClasses$1(slots, getPickersToolbarTextUtilityClass, classes);
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
        const PickersToolbarText = /*#__PURE__*/reactExports.forwardRef(function PickersToolbarText(props, ref) {
          // TODO v6: add 'useThemeProps' once the component class names are aligned
          const className = props.className,
            value = props.value,
            other = _objectWithoutPropertiesLoose(props, _excluded$a);
          const classes = useUtilityClasses$4(props);
          return /*#__PURE__*/jsxRuntimeExports.jsx(PickersToolbarTextRoot, _extends({
            ref: ref,
            className: clsx(className, classes.root),
            component: "span"
          }, other, {
            children: value
          }));
        });
        const _excluded$9 = ["align", "className", "selected", "typographyClassName", "value", "variant"];
        const useUtilityClasses$3 = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ['root']
          };
          return composeClasses$1(slots, getPickersToolbarUtilityClass, classes);
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
        const PickersToolbarButton = /*#__PURE__*/reactExports.forwardRef(function PickersToolbarButton(inProps, ref) {
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
            other = _objectWithoutPropertiesLoose(props, _excluded$9);
          const classes = useUtilityClasses$3(props);
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
        });
        function getDateTimePickerToolbarUtilityClass(slot) {
          return generateUtilityClass('MuiDateTimePickerToolbar', slot);
        }
        generateUtilityClasses('MuiDateTimePickerToolbar', ['root', 'dateContainer', 'timeContainer', 'separator']);
        const _excluded$8 = ["ampm", "parsedValue", "isMobileKeyboardViewOpen", "onChange", "openView", "setOpenView", "toggleMobileKeyboardView", "toolbarFormat", "toolbarPlaceholder", "toolbarTitle", "views"];
        const useUtilityClasses$2 = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ['root'],
            dateContainer: ['dateContainer'],
            timeContainer: ['timeContainer'],
            separator: ['separator']
          };
          return composeClasses$1(slots, getDateTimePickerToolbarUtilityClass, classes);
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
            _props$toolbarPlaceho2 = props.toolbarPlaceholder,
            toolbarPlaceholder = _props$toolbarPlaceho2 === void 0 ? '––' : _props$toolbarPlaceho2,
            toolbarTitleProp = props.toolbarTitle,
            views = props.views,
            other = _objectWithoutPropertiesLoose(props, _excluded$8);
          const ownerState = props;
          const utils = useUtils();
          const localeText = useLocaleText();
          const classes = useUtilityClasses$2(ownerState);
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
        const useTimeValidation = props => useValidation(props, validateTime, isSameTimeError);
        const _excluded$7 = ["minDate", "maxDate", "disableFuture", "shouldDisableDate", "disablePast"];
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
            timeValidationProps = _objectWithoutPropertiesLoose(props, _excluded$7);
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
        const useUtilityClasses$1 = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ["root"]
          };
          return composeClasses$1(slots, getDateTimePickerTabsUtilityClass, classes);
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
          const classes = useUtilityClasses$1(ownerState);
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
        const _excluded$6 = ["onChange", "PaperProps", "PopperProps", "ToolbarComponent", "TransitionComponent", "value", "components", "componentsProps", "hideTabs"];
        const DesktopDateTimePicker = /* @__PURE__ */reactExports.forwardRef(function DesktopDateTimePicker2(inProps, ref) {
          const props = useDateTimePickerDefaultizedProps(inProps, "MuiDesktopDateTimePicker");
          const validationError = useDateTimeValidation(props) !== null;
          const _usePickerState3 = usePickerState(props, dateTimePickerValueManager),
            pickerProps = _usePickerState3.pickerProps,
            inputProps = _usePickerState3.inputProps,
            wrapperProps = _usePickerState3.wrapperProps;
          const PaperProps = props.PaperProps,
            PopperProps = props.PopperProps,
            _props$ToolbarCompone4 = props.ToolbarComponent,
            ToolbarComponent = _props$ToolbarCompone4 === void 0 ? DateTimePickerToolbar : _props$ToolbarCompone4,
            TransitionComponent = props.TransitionComponent,
            providedComponents = props.components,
            componentsProps = props.componentsProps,
            _props$hideTabs = props.hideTabs,
            hideTabs = _props$hideTabs === void 0 ? true : _props$hideTabs,
            other = _objectWithoutPropertiesLoose(props, _excluded$6);
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
        const _excluded$5 = ["ToolbarComponent", "value", "onChange", "components", "componentsProps", "hideTabs"];
        const MobileDateTimePicker = /* @__PURE__ */reactExports.forwardRef(function MobileDateTimePicker2(inProps, ref) {
          const props = useDateTimePickerDefaultizedProps(inProps, "MuiMobileDateTimePicker");
          const validationError = useDateTimeValidation(props) !== null;
          const _usePickerState4 = usePickerState(props, dateTimePickerValueManager),
            pickerProps = _usePickerState4.pickerProps,
            inputProps = _usePickerState4.inputProps,
            wrapperProps = _usePickerState4.wrapperProps;
          const _props$ToolbarCompone5 = props.ToolbarComponent,
            ToolbarComponent = _props$ToolbarCompone5 === void 0 ? DateTimePickerToolbar : _props$ToolbarCompone5,
            providedComponents = props.components,
            componentsProps = props.componentsProps,
            _props$hideTabs2 = props.hideTabs,
            hideTabs = _props$hideTabs2 === void 0 ? false : _props$hideTabs2,
            other = _objectWithoutPropertiesLoose(props, _excluded$5);
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
        const _excluded$4 = ["desktopModeMediaQuery", "DialogProps", "PopperProps", "TransitionComponent"];
        const DateTimePicker = /* @__PURE__ */reactExports.forwardRef(function DateTimePicker2(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: "MuiDateTimePicker"
          });
          const _props$desktopModeMed2 = props.desktopModeMediaQuery,
            desktopModeMediaQuery = _props$desktopModeMed2 === void 0 ? "@media (pointer: fine)" : _props$desktopModeMed2,
            DialogProps = props.DialogProps,
            PopperProps = props.PopperProps,
            TransitionComponent = props.TransitionComponent,
            other = _objectWithoutPropertiesLoose(props, _excluded$4);
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
        });
        function useTimePickerDefaultizedProps(props, name) {
          var _themeProps$ampm;

          // This is technically unsound if the type parameters appear in optional props.
          // Optional props can be filled by `useThemeProps` with types that don't match the type parameters.
          const themeProps = useThemeProps({
            props,
            name
          });
          const utils = useUtils();
          const ampm = (_themeProps$ampm = themeProps.ampm) != null ? _themeProps$ampm : utils.is12HourCycleInCurrentLocale();
          const localeText = useLocaleText();
          const getOpenDialogAriaText = localeText.openTimePickerDialogue;
          return _extends({
            ampm,
            openTo: 'hours',
            views: ['hours', 'minutes'],
            acceptRegex: ampm ? /[\dapAP]/gi : /\d/gi,
            disableMaskedInput: false,
            getOpenDialogAriaText,
            inputFormat: ampm ? utils.formats.fullTime12h : utils.formats.fullTime24h
          }, themeProps, {
            components: _extends({
              OpenPickerIcon: Clock$1
            }, themeProps.components)
          });
        }
        const timePickerValueManager = {
          emptyValue: null,
          parseInput: parsePickerInputValue,
          getTodayValue: utils => utils.date(),
          areValuesEqual: (utils, a, b) => utils.isEqual(a, b),
          valueReducer: (utils, lastValidValue, newValue) => {
            if (!lastValidValue || !utils.isValid(newValue)) {
              return newValue;
            }
            return utils.mergeDateAndTime(lastValidValue, newValue);
          }
        };
        function getTimePickerToolbarUtilityClass(slot) {
          return generateUtilityClass('MuiTimePickerToolbar', slot);
        }
        const timePickerToolbarClasses = generateUtilityClasses('MuiTimePickerToolbar', ['root', 'separator', 'hourMinuteLabel', 'hourMinuteLabelLandscape', 'hourMinuteLabelReverse', 'ampmSelection', 'ampmLandscape', 'ampmLabel']);
        const _excluded$3 = ["ampm", "ampmInClock", "parsedValue", "isLandscape", "isMobileKeyboardViewOpen", "onChange", "openView", "setOpenView", "toggleMobileKeyboardView", "toolbarTitle", "views", "disabled", "readOnly"];
        const useUtilityClasses = ownerState => {
          const theme = ownerState.theme,
            isLandscape = ownerState.isLandscape,
            classes = ownerState.classes;
          const slots = {
            root: ['root'],
            separator: ['separator'],
            hourMinuteLabel: ['hourMinuteLabel', isLandscape && 'hourMinuteLabelLandscape', theme.direction === 'rtl' && 'hourMinuteLabelReverse'],
            ampmSelection: ['ampmSelection', isLandscape && 'ampmLandscape'],
            ampmLabel: ['ampmLabel']
          };
          return composeClasses$1(slots, getTimePickerToolbarUtilityClass, classes);
        };
        const TimePickerToolbarRoot = styled(PickersToolbar, {
          name: 'MuiTimePickerToolbar',
          slot: 'Root',
          overridesResolver: (props, styles) => styles.root
        })({
          [`& .${pickersToolbarClasses.penIconButtonLandscape}`]: {
            marginTop: 'auto'
          }
        });
        const TimePickerToolbarSeparator = styled(PickersToolbarText, {
          name: 'MuiTimePickerToolbar',
          slot: 'Separator',
          overridesResolver: (props, styles) => styles.separator
        })({
          outline: 0,
          margin: '0 4px 0 2px',
          cursor: 'default'
        });
        const TimePickerToolbarHourMinuteLabel = styled('div', {
          name: 'MuiTimePickerToolbar',
          slot: 'HourMinuteLabel',
          overridesResolver: (props, styles) => [{
            [`&.${timePickerToolbarClasses.hourMinuteLabelLandscape}`]: styles.hourMinuteLabelLandscape,
            [`&.${timePickerToolbarClasses.hourMinuteLabelReverse}`]: styles.hourMinuteLabelReverse
          }, styles.hourMinuteLabel]
        })(({
          theme,
          ownerState
        }) => _extends({
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end'
        }, ownerState.isLandscape && {
          marginTop: 'auto'
        }, theme.direction === 'rtl' && {
          flexDirection: 'row-reverse'
        }));
        const TimePickerToolbarAmPmSelection = styled('div', {
          name: 'MuiTimePickerToolbar',
          slot: 'AmPmSelection',
          overridesResolver: (props, styles) => [{
            [`.${timePickerToolbarClasses.ampmLabel}`]: styles.ampmLabel
          }, {
            [`&.${timePickerToolbarClasses.ampmLandscape}`]: styles.ampmLandscape
          }, styles.ampmSelection]
        })(({
          ownerState
        }) => _extends({
          display: 'flex',
          flexDirection: 'column',
          marginRight: 'auto',
          marginLeft: 12
        }, ownerState.isLandscape && {
          margin: '4px 0 auto',
          flexDirection: 'row',
          justifyContent: 'space-around',
          flexBasis: '100%'
        }, {
          [`& .${timePickerToolbarClasses.ampmLabel}`]: {
            fontSize: 17
          }
        }));
        /**
         * @ignore - internal component.
         */

        function TimePickerToolbar(inProps) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiTimePickerToolbar'
          });
          const ampm = props.ampm,
            ampmInClock = props.ampmInClock,
            parsedValue = props.parsedValue,
            isLandscape = props.isLandscape,
            isMobileKeyboardViewOpen = props.isMobileKeyboardViewOpen,
            onChange = props.onChange,
            openView = props.openView,
            setOpenView = props.setOpenView,
            toggleMobileKeyboardView = props.toggleMobileKeyboardView,
            toolbarTitleProp = props.toolbarTitle,
            views = props.views,
            disabled = props.disabled,
            readOnly = props.readOnly,
            other = _objectWithoutPropertiesLoose(props, _excluded$3);
          const utils = useUtils();
          const localeText = useLocaleText();
          const toolbarTitle = toolbarTitleProp != null ? toolbarTitleProp : localeText.timePickerDefaultToolbarTitle;
          const theme = useTheme();
          const showAmPmControl = Boolean(ampm && !ampmInClock);
          const _useMeridiemMode2 = useMeridiemMode(parsedValue, ampm, onChange),
            meridiemMode = _useMeridiemMode2.meridiemMode,
            handleMeridiemChange = _useMeridiemMode2.handleMeridiemChange;
          const formatHours = time => ampm ? utils.format(time, 'hours12h') : utils.format(time, 'hours24h');
          const ownerState = props;
          const classes = useUtilityClasses(_extends({}, ownerState, {
            theme
          }));
          const separator = /*#__PURE__*/jsxRuntimeExports.jsx(TimePickerToolbarSeparator, {
            tabIndex: -1,
            value: ":",
            variant: "h3",
            selected: false,
            className: classes.separator
          });
          return /*#__PURE__*/jsxRuntimeExports.jsxs(TimePickerToolbarRoot, _extends({
            viewType: "clock",
            landscapeDirection: "row",
            toolbarTitle: toolbarTitle,
            isLandscape: isLandscape,
            isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
            toggleMobileKeyboardView: toggleMobileKeyboardView,
            ownerState: ownerState,
            className: classes.root
          }, other, {
            children: [/*#__PURE__*/jsxRuntimeExports.jsxs(TimePickerToolbarHourMinuteLabel, {
              className: classes.hourMinuteLabel,
              ownerState: ownerState,
              children: [arrayIncludes(views, 'hours') && /*#__PURE__*/jsxRuntimeExports.jsx(PickersToolbarButton, {
                tabIndex: -1,
                variant: "h3",
                onClick: () => setOpenView('hours'),
                selected: openView === 'hours',
                value: parsedValue ? formatHours(parsedValue) : '--'
              }), arrayIncludes(views, ['hours', 'minutes']) && separator, arrayIncludes(views, 'minutes') && /*#__PURE__*/jsxRuntimeExports.jsx(PickersToolbarButton, {
                tabIndex: -1,
                variant: "h3",
                onClick: () => setOpenView('minutes'),
                selected: openView === 'minutes',
                value: parsedValue ? utils.format(parsedValue, 'minutes') : '--'
              }), arrayIncludes(views, ['minutes', 'seconds']) && separator, arrayIncludes(views, 'seconds') && /*#__PURE__*/jsxRuntimeExports.jsx(PickersToolbarButton, {
                variant: "h3",
                onClick: () => setOpenView('seconds'),
                selected: openView === 'seconds',
                value: parsedValue ? utils.format(parsedValue, 'seconds') : '--'
              })]
            }), showAmPmControl && /*#__PURE__*/jsxRuntimeExports.jsxs(TimePickerToolbarAmPmSelection, {
              className: classes.ampmSelection,
              ownerState: ownerState,
              children: [/*#__PURE__*/jsxRuntimeExports.jsx(PickersToolbarButton, {
                disableRipple: true,
                variant: "subtitle2",
                selected: meridiemMode === 'am',
                typographyClassName: classes.ampmLabel,
                value: utils.getMeridiemText('am'),
                onClick: readOnly ? undefined : () => handleMeridiemChange('am'),
                disabled: disabled
              }), /*#__PURE__*/jsxRuntimeExports.jsx(PickersToolbarButton, {
                disableRipple: true,
                variant: "subtitle2",
                selected: meridiemMode === 'pm',
                typographyClassName: classes.ampmLabel,
                value: utils.getMeridiemText('pm'),
                onClick: readOnly ? undefined : () => handleMeridiemChange('pm'),
                disabled: disabled
              })]
            })]
          }));
        }
        const _excluded$2 = ["onChange", "PaperProps", "PopperProps", "ToolbarComponent", "TransitionComponent", "value", "components", "componentsProps"];
        const DesktopTimePicker = /* @__PURE__ */reactExports.forwardRef(function DesktopTimePicker2(inProps, ref) {
          const props = useTimePickerDefaultizedProps(inProps, "MuiDesktopTimePicker");
          const validationError = useTimeValidation(props) !== null;
          const _usePickerState5 = usePickerState(props, timePickerValueManager),
            pickerProps = _usePickerState5.pickerProps,
            inputProps = _usePickerState5.inputProps,
            wrapperProps = _usePickerState5.wrapperProps;
          const PaperProps = props.PaperProps,
            PopperProps = props.PopperProps,
            _props$ToolbarCompone6 = props.ToolbarComponent,
            ToolbarComponent = _props$ToolbarCompone6 === void 0 ? TimePickerToolbar : _props$ToolbarCompone6,
            TransitionComponent = props.TransitionComponent,
            components = props.components,
            componentsProps = props.componentsProps,
            other = _objectWithoutPropertiesLoose(props, _excluded$2);
          const DateInputProps = _extends({}, inputProps, other, {
            components,
            componentsProps,
            ref,
            validationError
          });
          return /* @__PURE__ */jsxRuntimeExports.jsx(DesktopWrapper, _extends({}, wrapperProps, {
            DateInputProps,
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
              DateInputProps,
              components,
              componentsProps
            }, other))
          }));
        });
        const _excluded$1 = ["ToolbarComponent", "value", "onChange", "components", "componentsProps"];
        const MobileTimePicker = /* @__PURE__ */reactExports.forwardRef(function MobileTimePicker2(inProps, ref) {
          const props = useTimePickerDefaultizedProps(inProps, "MuiMobileTimePicker");
          const validationError = useTimeValidation(props) !== null;
          const _usePickerState6 = usePickerState(props, timePickerValueManager),
            pickerProps = _usePickerState6.pickerProps,
            inputProps = _usePickerState6.inputProps,
            wrapperProps = _usePickerState6.wrapperProps;
          const _props$ToolbarCompone7 = props.ToolbarComponent,
            ToolbarComponent = _props$ToolbarCompone7 === void 0 ? TimePickerToolbar : _props$ToolbarCompone7,
            components = props.components,
            componentsProps = props.componentsProps,
            other = _objectWithoutPropertiesLoose(props, _excluded$1);
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
              componentsProps
            }, other))
          }));
        });
        const _excluded = ["desktopModeMediaQuery", "DialogProps", "PopperProps", "TransitionComponent"];
        const TimePicker = /* @__PURE__ */reactExports.forwardRef(function TimePicker2(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: "MuiTimePicker"
          });
          const _props$desktopModeMed3 = props.desktopModeMediaQuery,
            desktopModeMediaQuery = _props$desktopModeMed3 === void 0 ? "@media (pointer: fine)" : _props$desktopModeMed3,
            DialogProps = props.DialogProps,
            PopperProps = props.PopperProps,
            TransitionComponent = props.TransitionComponent,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const isDesktop = useMediaQuery(desktopModeMediaQuery, {
            defaultMatches: true
          });
          if (isDesktop) {
            return /* @__PURE__ */jsxRuntimeExports.jsx(DesktopTimePicker, _extends({
              ref,
              PopperProps,
              TransitionComponent
            }, other));
          }
          return /* @__PURE__ */jsxRuntimeExports.jsx(MobileTimePicker, _extends({
            ref,
            DialogProps
          }, other));
        });
        const wrapper = "_wrapper_2goe7_1";
        const styles = {
          wrapper: wrapper
        };
        function DateTimeQuestion(props) {
          const theme = useTheme$1();
          const state = useSelector(state2 => {
            let own = state2.runState.values[props.component.qualifiedCode];
            let show_errors = state2.runState.values.Survey.show_errors;
            let isDirty = state2.templateState[props.component.qualifiedCode];
            return {
              invalid: (show_errors || isDirty) && (own === null || own === void 0 ? void 0 : own.validity) === false,
              value: own !== null && own !== void 0 && own.value ? dayjs(window.QlarrScripts.sqlDateTimeToDate(own === null || own === void 0 ? void 0 : own.value)) : null
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const handleDateChange = date => {
            let finalDate = date === null ? void 0 : date.toDate();
            dispatch(valueChange({
              componentCode: props.component.qualifiedCode,
              value: props.component.type == "date_time" ? window.QlarrScripts.toSqlDateTime(finalDate) : props.component.type == "time" ? window.QlarrScripts.toSqlDateTimeIgnoreDate(finalDate) : window.QlarrScripts.toSqlDateTimeIgnoreTime(finalDate)
            }));
          };
          const dateFormat = props.component.dateFormat ? props.component.dateFormat : "DD.MM.YYYY";
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: styles.wrapper,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(LocalizationProvider, {
              dateAdapter: AdapterDayjs,
              adapterLocale: "ar-sa",
              children: props.component.type == "date_time" ? /* @__PURE__ */jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
                children: /* @__PURE__ */jsxRuntimeExports.jsx(DateTimePicker, {
                  renderInput: props2 => /* @__PURE__ */jsxRuntimeExports.jsx(TextField, _objectSpread({
                    size: "small",
                    onKeyDown: e => e.preventDefault()
                  }, props2)),
                  margin: "normal",
                  value: state.value,
                  inputFormat: dateFormat + " " + (props.component.fullDayFormat ? "HH:mm" : "hh:mm A"),
                  PaperProps: {
                    sx: {
                      backgroundColor: "white",
                      "& .MuiPickersDay-root": {
                        backgroundColor: "white"
                      }
                    }
                  },
                  ampm: props.component.fullDayFormat ? false : true,
                  openTo: "year",
                  views: ["year", "month", "day", "hours", "minutes"],
                  id: props.component.qualifiedCode,
                  minDate: props.component.minDate ? dayjs(window.QlarrScripts.dateStringToDate(props.component.minDate)) : void 0,
                  maxDate: props.component.maxDate ? dayjs(window.QlarrScripts.dateStringToDate(props.component.maxDate)) : void 0,
                  error: state.invalid,
                  onChange: handleDateChange,
                  InputProps: {
                    sx: {
                      fontFamily: theme.textStyles.text.font,
                      fontSize: theme.textStyles.text.size,
                      color: theme.textStyles.text.color
                    }
                  }
                })
              }) : props.component.type == "time" ? /* @__PURE__ */jsxRuntimeExports.jsx(TimePicker, {
                renderInput: params => /* @__PURE__ */jsxRuntimeExports.jsx(TextField, _objectSpread({
                  size: "small",
                  onKeyDown: e => e.preventDefault()
                }, params)),
                margin: "normal",
                openTo: "hours",
                views: ["hours", "minutes"],
                ampm: props.component.fullDayFormat ? false : true,
                inputFormat: props.component.fullDayFormat ? "HH:mm" : "hh:mm A",
                id: props.component.qualifiedCode,
                value: state.value,
                error: state.invalid,
                onChange: handleDateChange,
                PaperProps: {
                  sx: {
                    backgroundColor: "white",
                    "& .MuiPickersDay-root": {
                      backgroundColor: "white"
                    }
                  }
                },
                InputProps: {
                  sx: {
                    fontFamily: theme.textStyles.text.font,
                    color: theme.textStyles.text.color,
                    fontSize: theme.textStyles.text.size
                  }
                }
              }) : /* @__PURE__ */jsxRuntimeExports.jsx(DatePicker, {
                renderInput: params => /* @__PURE__ */jsxRuntimeExports.jsx(TextField, _objectSpread({
                  size: "small",
                  onKeyDown: e => e.preventDefault()
                }, params)),
                margin: "normal",
                openTo: "year",
                views: ["year", "month", "day"],
                ampm: props.component.fullDayFormat ? false : true,
                id: props.component.qualifiedCode,
                inputFormat: dateFormat,
                value: state.value,
                minDate: props.component.minDate ? window.QlarrScripts.dateStringToDate(props.component.minDate) : void 0,
                PaperProps: {
                  sx: {
                    backgroundColor: "white",
                    "& .MuiPickersDay-root": {
                      backgroundColor: "white"
                    }
                  }
                },
                maxDate: props.component.maxDate ? window.QlarrScripts.dateStringToDate(props.component.maxDate) : void 0,
                error: state.invalid,
                onChange: handleDateChange,
                InputProps: {
                  sx: {
                    fontFamily: theme.textStyles.text.font,
                    fontSize: theme.textStyles.text.size
                  }
                }
              })
            })
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=DateTimeQuestion-legacy-lAW0pGdl.js.map
