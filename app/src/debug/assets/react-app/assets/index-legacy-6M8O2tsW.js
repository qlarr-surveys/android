;
(function () {
  function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }
  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  System.register(['./index-legacy-BLatMfxz.js', './use-service-legacy-DLuVKbJp.js', './Web-legacy-G20LTzwp.js'], function (exports, module) {
    'use strict';

    var generateUtilityClasses, generateUtilityClass, _extends, reactExports, duration, _objectWithoutPropertiesLoose, jsxRuntimeExports, clsx, interopRequireDefaultExports, getDefaultExportFromCjs, styled, useDefaultProps, Transition, useTheme, useTimeout, useForkRef, composeClasses, getTransitionProps, Paper, useControlled, ButtonBase, createSvgIcon, requireCreateSvgIcon, accordionClasses, useSlot, getAccordionUtilityClass, accordionSummaryClasses, getAccordionSummaryUtilityClass;
    return {
      setters: [module => {
        generateUtilityClasses = module.f;
        generateUtilityClass = module.g;
        _extends = module._;
        reactExports = module.r;
        duration = module.am;
        _objectWithoutPropertiesLoose = module.b;
        jsxRuntimeExports = module.j;
        clsx = module.d;
        interopRequireDefaultExports = module.q;
        getDefaultExportFromCjs = module.w;
      }, module => {
        styled = module.f;
        useDefaultProps = module.j;
        Transition = module.bf;
        useTheme = module.w;
        useTimeout = module.t;
        useForkRef = module.b;
        composeClasses = module.c;
        getTransitionProps = module.bh;
        Paper = module.h;
        useControlled = module.A;
        ButtonBase = module.B;
        createSvgIcon = module.e;
        requireCreateSvgIcon = module.K;
      }, module => {
        accordionClasses = module.w;
        useSlot = module.x;
        getAccordionUtilityClass = module.y;
        accordionSummaryClasses = module.z;
        getAccordionSummaryUtilityClass = module.B;
      }],
      execute: function execute() {
        function getCollapseUtilityClass(slot) {
          return generateUtilityClass('MuiCollapse', slot);
        }
        generateUtilityClasses('MuiCollapse', ['root', 'horizontal', 'vertical', 'entered', 'hidden', 'wrapper', 'wrapperInner']);
        const _excluded$3 = ["addEndListener", "children", "className", "collapsedSize", "component", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "orientation", "style", "timeout", "TransitionComponent"];
        const useUtilityClasses$3 = ownerState => {
          const orientation = ownerState.orientation,
            classes = ownerState.classes;
          const slots = {
            root: ["root", `${orientation}`],
            entered: ["entered"],
            hidden: ["hidden"],
            wrapper: ["wrapper", `${orientation}`],
            wrapperInner: ["wrapperInner", `${orientation}`]
          };
          return composeClasses(slots, getCollapseUtilityClass, classes);
        };
        const CollapseRoot = styled("div", {
          name: "MuiCollapse",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.root, styles[ownerState.orientation], ownerState.state === "entered" && styles.entered, ownerState.state === "exited" && !ownerState.in && ownerState.collapsedSize === "0px" && styles.hidden];
          }
        })(({
          theme,
          ownerState
        }) => _extends({
          height: 0,
          overflow: "hidden",
          transition: theme.transitions.create("height")
        }, ownerState.orientation === "horizontal" && {
          height: "auto",
          width: 0,
          transition: theme.transitions.create("width")
        }, ownerState.state === "entered" && _extends({
          height: "auto",
          overflow: "visible"
        }, ownerState.orientation === "horizontal" && {
          width: "auto"
        }), ownerState.state === "exited" && !ownerState.in && ownerState.collapsedSize === "0px" && {
          visibility: "hidden"
        }));
        const CollapseWrapper = styled("div", {
          name: "MuiCollapse",
          slot: "Wrapper",
          overridesResolver: (props, styles) => styles.wrapper
        })(({
          ownerState
        }) => _extends({
          // Hack to get children with a negative margin to not falsify the height computation.
          display: "flex",
          width: "100%"
        }, ownerState.orientation === "horizontal" && {
          width: "auto",
          height: "100%"
        }));
        const CollapseWrapperInner = styled("div", {
          name: "MuiCollapse",
          slot: "WrapperInner",
          overridesResolver: (props, styles) => styles.wrapperInner
        })(({
          ownerState
        }) => _extends({
          width: "100%"
        }, ownerState.orientation === "horizontal" && {
          width: "auto",
          height: "100%"
        }));
        const Collapse = exports("C", /* @__PURE__ */reactExports.forwardRef(function Collapse2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiCollapse"
          });
          const addEndListener = props.addEndListener,
            _children = props.children,
            className = props.className,
            _props$collapsedSize = props.collapsedSize,
            collapsedSizeProp = _props$collapsedSize === void 0 ? "0px" : _props$collapsedSize,
            component = props.component,
            easing = props.easing,
            inProp = props.in,
            onEnter = props.onEnter,
            onEntered = props.onEntered,
            onEntering = props.onEntering,
            onExit = props.onExit,
            onExited = props.onExited,
            onExiting = props.onExiting,
            _props$orientation = props.orientation,
            orientation = _props$orientation === void 0 ? "vertical" : _props$orientation,
            style = props.style,
            _props$timeout = props.timeout,
            timeout = _props$timeout === void 0 ? duration.standard : _props$timeout,
            _props$TransitionComp = props.TransitionComponent,
            TransitionComponent = _props$TransitionComp === void 0 ? Transition : _props$TransitionComp,
            other = _objectWithoutPropertiesLoose(props, _excluded$3);
          const ownerState = _extends({}, props, {
            orientation,
            collapsedSize: collapsedSizeProp
          });
          const classes = useUtilityClasses$3(ownerState);
          const theme = useTheme();
          const timer = useTimeout();
          const wrapperRef = reactExports.useRef(null);
          const autoTransitionDuration = reactExports.useRef();
          const collapsedSize = typeof collapsedSizeProp === "number" ? `${collapsedSizeProp}px` : collapsedSizeProp;
          const isHorizontal = orientation === "horizontal";
          const size = isHorizontal ? "width" : "height";
          const nodeRef = reactExports.useRef(null);
          const handleRef = useForkRef(ref, nodeRef);
          const normalizedTransitionCallback = callback => maybeIsAppearing => {
            if (callback) {
              const node = nodeRef.current;
              if (maybeIsAppearing === void 0) {
                callback(node);
              } else {
                callback(node, maybeIsAppearing);
              }
            }
          };
          const getWrapperSize = () => wrapperRef.current ? wrapperRef.current[isHorizontal ? "clientWidth" : "clientHeight"] : 0;
          const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
            if (wrapperRef.current && isHorizontal) {
              wrapperRef.current.style.position = "absolute";
            }
            node.style[size] = collapsedSize;
            if (onEnter) {
              onEnter(node, isAppearing);
            }
          });
          const handleEntering = normalizedTransitionCallback((node, isAppearing) => {
            const wrapperSize = getWrapperSize();
            if (wrapperRef.current && isHorizontal) {
              wrapperRef.current.style.position = "";
            }
            const _getTransitionProps = getTransitionProps({
                style,
                timeout,
                easing
              }, {
                mode: "enter"
              }),
              transitionDuration = _getTransitionProps.duration,
              transitionTimingFunction = _getTransitionProps.easing;
            if (timeout === "auto") {
              const duration2 = theme.transitions.getAutoHeightDuration(wrapperSize);
              node.style.transitionDuration = `${duration2}ms`;
              autoTransitionDuration.current = duration2;
            } else {
              node.style.transitionDuration = typeof transitionDuration === "string" ? transitionDuration : `${transitionDuration}ms`;
            }
            node.style[size] = `${wrapperSize}px`;
            node.style.transitionTimingFunction = transitionTimingFunction;
            if (onEntering) {
              onEntering(node, isAppearing);
            }
          });
          const handleEntered = normalizedTransitionCallback((node, isAppearing) => {
            node.style[size] = "auto";
            if (onEntered) {
              onEntered(node, isAppearing);
            }
          });
          const handleExit = normalizedTransitionCallback(node => {
            node.style[size] = `${getWrapperSize()}px`;
            if (onExit) {
              onExit(node);
            }
          });
          const handleExited = normalizedTransitionCallback(onExited);
          const handleExiting = normalizedTransitionCallback(node => {
            const wrapperSize = getWrapperSize();
            const _getTransitionProps2 = getTransitionProps({
                style,
                timeout,
                easing
              }, {
                mode: "exit"
              }),
              transitionDuration = _getTransitionProps2.duration,
              transitionTimingFunction = _getTransitionProps2.easing;
            if (timeout === "auto") {
              const duration2 = theme.transitions.getAutoHeightDuration(wrapperSize);
              node.style.transitionDuration = `${duration2}ms`;
              autoTransitionDuration.current = duration2;
            } else {
              node.style.transitionDuration = typeof transitionDuration === "string" ? transitionDuration : `${transitionDuration}ms`;
            }
            node.style[size] = collapsedSize;
            node.style.transitionTimingFunction = transitionTimingFunction;
            if (onExiting) {
              onExiting(node);
            }
          });
          const handleAddEndListener = next => {
            if (timeout === "auto") {
              timer.start(autoTransitionDuration.current || 0, next);
            }
            if (addEndListener) {
              addEndListener(nodeRef.current, next);
            }
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(TransitionComponent, _extends({
            in: inProp,
            onEnter: handleEnter,
            onEntered: handleEntered,
            onEntering: handleEntering,
            onExit: handleExit,
            onExited: handleExited,
            onExiting: handleExiting,
            addEndListener: handleAddEndListener,
            nodeRef,
            timeout: timeout === "auto" ? null : timeout
          }, other, {
            children: (state, childProps) => /* @__PURE__ */jsxRuntimeExports.jsx(CollapseRoot, _extends({
              as: component,
              className: clsx(classes.root, className, {
                "entered": classes.entered,
                "exited": !inProp && collapsedSize === "0px" && classes.hidden
              }[state]),
              style: _extends({
                [isHorizontal ? "minWidth" : "minHeight"]: collapsedSize
              }, style),
              ref: handleRef
            }, childProps, {
              // `ownerState` is set after `childProps` to override any existing `ownerState` property in `childProps`
              // that might have been forwarded from the Transition component.
              ownerState: _extends({}, ownerState, {
                state
              }),
              children: /* @__PURE__ */jsxRuntimeExports.jsx(CollapseWrapper, {
                ownerState: _extends({}, ownerState, {
                  state
                }),
                className: classes.wrapper,
                ref: wrapperRef,
                children: /* @__PURE__ */jsxRuntimeExports.jsx(CollapseWrapperInner, {
                  ownerState: _extends({}, ownerState, {
                    state
                  }),
                  className: classes.wrapperInner,
                  children: _children
                })
              })
            }))
          }));
        }));
        Collapse.muiSupportAuto = true;
        const AccordionContext = /* @__PURE__ */reactExports.createContext({});
        const _excluded$2 = ["children", "className", "defaultExpanded", "disabled", "disableGutters", "expanded", "onChange", "square", "slots", "slotProps", "TransitionComponent", "TransitionProps"];
        const useUtilityClasses$2 = ownerState => {
          const classes = ownerState.classes,
            square = ownerState.square,
            expanded = ownerState.expanded,
            disabled = ownerState.disabled,
            disableGutters = ownerState.disableGutters;
          const slots = {
            root: ["root", !square && "rounded", expanded && "expanded", disabled && "disabled", !disableGutters && "gutters"],
            region: ["region"]
          };
          return composeClasses(slots, getAccordionUtilityClass, classes);
        };
        const AccordionRoot = styled(Paper, {
          name: "MuiAccordion",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [{
              [`& .${accordionClasses.region}`]: styles.region
            }, styles.root, !ownerState.square && styles.rounded, !ownerState.disableGutters && styles.gutters];
          }
        })(({
          theme
        }) => {
          const transition = {
            duration: theme.transitions.duration.shortest
          };
          return {
            position: "relative",
            transition: theme.transitions.create(["margin"], transition),
            overflowAnchor: "none",
            // Keep the same scrolling position
            "&::before": {
              position: "absolute",
              left: 0,
              top: -1,
              right: 0,
              height: 1,
              content: '""',
              opacity: 1,
              backgroundColor: (theme.vars || theme).palette.divider,
              transition: theme.transitions.create(["opacity", "background-color"], transition)
            },
            "&:first-of-type": {
              "&::before": {
                display: "none"
              }
            },
            [`&.${accordionClasses.expanded}`]: {
              "&::before": {
                opacity: 0
              },
              "&:first-of-type": {
                marginTop: 0
              },
              "&:last-of-type": {
                marginBottom: 0
              },
              "& + &": {
                "&::before": {
                  display: "none"
                }
              }
            },
            [`&.${accordionClasses.disabled}`]: {
              backgroundColor: (theme.vars || theme).palette.action.disabledBackground
            }
          };
        }, ({
          theme
        }) => ({
          variants: [{
            props: _props => !_props.square,
            style: {
              borderRadius: 0,
              "&:first-of-type": {
                borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
                borderTopRightRadius: (theme.vars || theme).shape.borderRadius
              },
              "&:last-of-type": {
                borderBottomLeftRadius: (theme.vars || theme).shape.borderRadius,
                borderBottomRightRadius: (theme.vars || theme).shape.borderRadius,
                // Fix a rendering issue on Edge
                "@supports (-ms-ime-align: auto)": {
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0
                }
              }
            }
          }, {
            props: _props2 => !_props2.disableGutters,
            style: {
              [`&.${accordionClasses.expanded}`]: {
                margin: "16px 0"
              }
            }
          }]
        }));
        const Accordion = exports("A", /* @__PURE__ */reactExports.forwardRef(function Accordion2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiAccordion"
          });
          const childrenProp = props.children,
            className = props.className,
            _props$defaultExpande = props.defaultExpanded,
            defaultExpanded = _props$defaultExpande === void 0 ? false : _props$defaultExpande,
            _props$disabled = props.disabled,
            disabled = _props$disabled === void 0 ? false : _props$disabled,
            _props$disableGutters = props.disableGutters,
            disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
            expandedProp = props.expanded,
            onChange = props.onChange,
            _props$square = props.square,
            square = _props$square === void 0 ? false : _props$square,
            _props$slots = props.slots,
            slots = _props$slots === void 0 ? {} : _props$slots,
            _props$slotProps = props.slotProps,
            slotProps = _props$slotProps === void 0 ? {} : _props$slotProps,
            TransitionComponentProp = props.TransitionComponent,
            TransitionPropsProp = props.TransitionProps,
            other = _objectWithoutPropertiesLoose(props, _excluded$2);
          const _useControlled = useControlled({
              controlled: expandedProp,
              default: defaultExpanded,
              name: "Accordion",
              state: "expanded"
            }),
            _useControlled2 = _slicedToArray(_useControlled, 2),
            expanded = _useControlled2[0],
            setExpandedState = _useControlled2[1];
          const handleChange = reactExports.useCallback(event => {
            setExpandedState(!expanded);
            if (onChange) {
              onChange(event, !expanded);
            }
          }, [expanded, onChange, setExpandedState]);
          const _reactExports$Childre = reactExports.Children.toArray(childrenProp),
            _reactExports$Childre2 = _toArray(_reactExports$Childre),
            summary = _reactExports$Childre2[0],
            children = _reactExports$Childre2.slice(1);
          const contextValue = reactExports.useMemo(() => ({
            expanded,
            disabled,
            disableGutters,
            toggle: handleChange
          }), [expanded, disabled, disableGutters, handleChange]);
          const ownerState = _extends({}, props, {
            square,
            disabled,
            disableGutters,
            expanded
          });
          const classes = useUtilityClasses$2(ownerState);
          const backwardCompatibleSlots = _extends({
            transition: TransitionComponentProp
          }, slots);
          const backwardCompatibleSlotProps = _extends({
            transition: TransitionPropsProp
          }, slotProps);
          const _useSlot = useSlot("transition", {
              elementType: Collapse,
              externalForwardedProps: {
                slots: backwardCompatibleSlots,
                slotProps: backwardCompatibleSlotProps
              },
              ownerState
            }),
            _useSlot2 = _slicedToArray(_useSlot, 2),
            TransitionSlot = _useSlot2[0],
            transitionProps = _useSlot2[1];
          return /* @__PURE__ */jsxRuntimeExports.jsxs(AccordionRoot, _extends({
            className: clsx(classes.root, className),
            ref,
            ownerState,
            square
          }, other, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(AccordionContext.Provider, {
              value: contextValue,
              children: summary
            }), /* @__PURE__ */jsxRuntimeExports.jsx(TransitionSlot, _extends({
              in: expanded,
              timeout: "auto"
            }, transitionProps, {
              children: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                "aria-labelledby": summary.props.id,
                id: summary.props["aria-controls"],
                role: "region",
                className: classes.region,
                children
              })
            }))]
          }));
        }));
        function getAccordionDetailsUtilityClass(slot) {
          return generateUtilityClass('MuiAccordionDetails', slot);
        }
        generateUtilityClasses('MuiAccordionDetails', ['root']);
        const _excluded$1 = ["className"];
        const useUtilityClasses$1 = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ["root"]
          };
          return composeClasses(slots, getAccordionDetailsUtilityClass, classes);
        };
        const AccordionDetailsRoot = styled("div", {
          name: "MuiAccordionDetails",
          slot: "Root",
          overridesResolver: (props, styles) => styles.root
        })(({
          theme
        }) => ({
          padding: theme.spacing(1, 2, 2)
        }));
        const AccordionDetails = exports("b", /* @__PURE__ */reactExports.forwardRef(function AccordionDetails2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiAccordionDetails"
          });
          const className = props.className,
            other = _objectWithoutPropertiesLoose(props, _excluded$1);
          const ownerState = props;
          const classes = useUtilityClasses$1(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(AccordionDetailsRoot, _extends({
            className: clsx(classes.root, className),
            ref,
            ownerState
          }, other));
        }));
        const _excluded = ["children", "className", "expandIcon", "focusVisibleClassName", "onClick"];
        const useUtilityClasses = ownerState => {
          const classes = ownerState.classes,
            expanded = ownerState.expanded,
            disabled = ownerState.disabled,
            disableGutters = ownerState.disableGutters;
          const slots = {
            root: ["root", expanded && "expanded", disabled && "disabled", !disableGutters && "gutters"],
            focusVisible: ["focusVisible"],
            content: ["content", expanded && "expanded", !disableGutters && "contentGutters"],
            expandIconWrapper: ["expandIconWrapper", expanded && "expanded"]
          };
          return composeClasses(slots, getAccordionSummaryUtilityClass, classes);
        };
        const AccordionSummaryRoot = styled(ButtonBase, {
          name: "MuiAccordionSummary",
          slot: "Root",
          overridesResolver: (props, styles) => styles.root
        })(({
          theme
        }) => {
          const transition = {
            duration: theme.transitions.duration.shortest
          };
          return {
            display: "flex",
            minHeight: 48,
            padding: theme.spacing(0, 2),
            transition: theme.transitions.create(["min-height", "background-color"], transition),
            [`&.${accordionSummaryClasses.focusVisible}`]: {
              backgroundColor: (theme.vars || theme).palette.action.focus
            },
            [`&.${accordionSummaryClasses.disabled}`]: {
              opacity: (theme.vars || theme).palette.action.disabledOpacity
            },
            [`&:hover:not(.${accordionSummaryClasses.disabled})`]: {
              cursor: "pointer"
            },
            variants: [{
              props: _props3 => !_props3.disableGutters,
              style: {
                [`&.${accordionSummaryClasses.expanded}`]: {
                  minHeight: 64
                }
              }
            }]
          };
        });
        const AccordionSummaryContent = styled("div", {
          name: "MuiAccordionSummary",
          slot: "Content",
          overridesResolver: (props, styles) => styles.content
        })(({
          theme
        }) => ({
          display: "flex",
          flexGrow: 1,
          margin: "12px 0",
          variants: [{
            props: _props4 => !_props4.disableGutters,
            style: {
              transition: theme.transitions.create(["margin"], {
                duration: theme.transitions.duration.shortest
              }),
              [`&.${accordionSummaryClasses.expanded}`]: {
                margin: "20px 0"
              }
            }
          }]
        }));
        const AccordionSummaryExpandIconWrapper = styled("div", {
          name: "MuiAccordionSummary",
          slot: "ExpandIconWrapper",
          overridesResolver: (props, styles) => styles.expandIconWrapper
        })(({
          theme
        }) => ({
          display: "flex",
          color: (theme.vars || theme).palette.action.active,
          transform: "rotate(0deg)",
          transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest
          }),
          [`&.${accordionSummaryClasses.expanded}`]: {
            transform: "rotate(180deg)"
          }
        }));
        const AccordionSummary = exports("a", /* @__PURE__ */reactExports.forwardRef(function AccordionSummary2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiAccordionSummary"
          });
          const children = props.children,
            className = props.className,
            expandIcon = props.expandIcon,
            focusVisibleClassName = props.focusVisibleClassName,
            onClick = props.onClick,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const _reactExports$useCont = reactExports.useContext(AccordionContext),
            _reactExports$useCont2 = _reactExports$useCont.disabled,
            disabled = _reactExports$useCont2 === void 0 ? false : _reactExports$useCont2,
            disableGutters = _reactExports$useCont.disableGutters,
            expanded = _reactExports$useCont.expanded,
            toggle = _reactExports$useCont.toggle;
          const handleChange = event => {
            if (toggle) {
              toggle(event);
            }
            if (onClick) {
              onClick(event);
            }
          };
          const ownerState = _extends({}, props, {
            expanded,
            disabled,
            disableGutters
          });
          const classes = useUtilityClasses(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(AccordionSummaryRoot, _extends({
            focusRipple: false,
            disableRipple: true,
            disabled,
            component: "div",
            "aria-expanded": expanded,
            className: clsx(classes.root, className),
            focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
            onClick: handleChange,
            ref,
            ownerState
          }, other, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(AccordionSummaryContent, {
              className: classes.content,
              ownerState,
              children
            }), expandIcon && /* @__PURE__ */jsxRuntimeExports.jsx(AccordionSummaryExpandIconWrapper, {
              className: classes.expandIconWrapper,
              ownerState,
              children: expandIcon
            })]
          }));
        }));
        const HelpOutline = exports("H", createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M11 18h2v-2h-2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4"
        }), 'HelpOutline'));
        var ExpandMore = {};
        var _interopRequireDefault = interopRequireDefaultExports;
        Object.defineProperty(ExpandMore, "__esModule", {
          value: true
        });
        var default_1 = exports("d", ExpandMore.default = void 0);
        var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
        var _jsxRuntime = jsxRuntimeExports;
        exports("d", default_1 = ExpandMore.default = (0, _createSvgIcon.default)(/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
          d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
        }), 'ExpandMore'));
        var classnames = {
          exports: {}
        };

        /*!
        	Copyright (c) 2018 Jed Watson.
        	Licensed under the MIT License (MIT), see
        	http://jedwatson.github.io/classnames
        */

        (function (module) {
          /* global define */

          (function () {
            var hasOwn = {}.hasOwnProperty;
            function classNames() {
              var classes = '';
              for (var i = 0; i < arguments.length; i++) {
                var arg = arguments[i];
                if (arg) {
                  classes = appendClass(classes, parseValue(arg));
                }
              }
              return classes;
            }
            function parseValue(arg) {
              if (typeof arg === 'string' || typeof arg === 'number') {
                return arg;
              }
              if (typeof arg !== 'object') {
                return '';
              }
              if (Array.isArray(arg)) {
                return classNames.apply(null, arg);
              }
              if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
                return arg.toString();
              }
              var classes = '';
              for (var key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                  classes = appendClass(classes, key);
                }
              }
              return classes;
            }
            function appendClass(value, newClass) {
              if (!newClass) {
                return value;
              }
              if (value) {
                return value + ' ' + newClass;
              }
              return value + newClass;
            }
            if (module.exports) {
              classNames.default = classNames;
              module.exports = classNames;
            } else {
              window.classNames = classNames;
            }
          })();
        })(classnames);
        var classnamesExports = classnames.exports;
        const classNames = exports("c", /*@__PURE__*/getDefaultExportFromCjs(classnamesExports));
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-6M8O2tsW.js.map
