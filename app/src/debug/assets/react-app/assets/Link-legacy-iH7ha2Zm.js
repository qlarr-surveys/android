;
(function () {
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  System.register(['./index-legacy-VHGc_nGn.js', './use-service-legacy-uNDfwPef.js'], function (exports, module) {
    'use strict';

    var generateUtilityClasses, generateUtilityClass, getPath, alpha_1, capitalize, _extends, reactExports, _objectWithoutPropertiesLoose, jsxRuntimeExports, clsx, styled, Typography, useDefaultProps, useIsFocusVisible, useForkRef, composeClasses;
    return {
      setters: [module => {
        generateUtilityClasses = module.f;
        generateUtilityClass = module.g;
        getPath = module.al;
        alpha_1 = module.k;
        capitalize = module.h;
        _extends = module._;
        reactExports = module.r;
        _objectWithoutPropertiesLoose = module.b;
        jsxRuntimeExports = module.j;
        clsx = module.d;
      }, module => {
        styled = module.f;
        Typography = module.T;
        useDefaultProps = module.j;
        useIsFocusVisible = module.D;
        useForkRef = module.b;
        composeClasses = module.c;
      }],
      execute: function execute() {
        function getLinkUtilityClass(slot) {
          return generateUtilityClass('MuiLink', slot);
        }
        const linkClasses = generateUtilityClasses('MuiLink', ['root', 'underlineNone', 'underlineHover', 'underlineAlways', 'button', 'focusVisible']);
        const colorTransformations = {
          primary: 'primary.main',
          textPrimary: 'text.primary',
          secondary: 'secondary.main',
          textSecondary: 'text.secondary',
          error: 'error.main'
        };
        const transformDeprecatedColors = color => {
          return colorTransformations[color] || color;
        };
        const getTextDecoration = ({
          theme,
          ownerState
        }) => {
          const transformedColor = transformDeprecatedColors(ownerState.color);
          const color = getPath(theme, `palette.${transformedColor}`, false) || ownerState.color;
          const channelColor = getPath(theme, `palette.${transformedColor}Channel`);
          if ('vars' in theme && channelColor) {
            return `rgba(${channelColor} / 0.4)`;
          }
          return alpha_1(color, 0.4);
        };
        const _excluded = ["className", "color", "component", "onBlur", "onFocus", "TypographyClasses", "underline", "variant", "sx"];
        const useUtilityClasses = ownerState => {
          const classes = ownerState.classes,
            component = ownerState.component,
            focusVisible = ownerState.focusVisible,
            underline = ownerState.underline;
          const slots = {
            root: ["root", `underline${capitalize(underline)}`, component === "button" && "button", focusVisible && "focusVisible"]
          };
          return composeClasses(slots, getLinkUtilityClass, classes);
        };
        const LinkRoot = styled(Typography, {
          name: "MuiLink",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.root, styles[`underline${capitalize(ownerState.underline)}`], ownerState.component === "button" && styles.button];
          }
        })(({
          theme,
          ownerState
        }) => {
          return _extends({}, ownerState.underline === "none" && {
            textDecoration: "none"
          }, ownerState.underline === "hover" && {
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline"
            }
          }, ownerState.underline === "always" && _extends({
            textDecoration: "underline"
          }, ownerState.color !== "inherit" && {
            textDecorationColor: getTextDecoration({
              theme,
              ownerState
            })
          }, {
            "&:hover": {
              textDecorationColor: "inherit"
            }
          }), ownerState.component === "button" && {
            position: "relative",
            WebkitTapHighlightColor: "transparent",
            backgroundColor: "transparent",
            // Reset default value
            // We disable the focus ring for mouse, touch and keyboard users.
            outline: 0,
            border: 0,
            margin: 0,
            // Remove the margin in Safari
            borderRadius: 0,
            padding: 0,
            // Remove the padding in Firefox
            cursor: "pointer",
            userSelect: "none",
            verticalAlign: "middle",
            MozAppearance: "none",
            // Reset
            WebkitAppearance: "none",
            // Reset
            "&::-moz-focus-inner": {
              borderStyle: "none"
              // Remove Firefox dotted outline.
            },
            [`&.${linkClasses.focusVisible}`]: {
              outline: "auto"
            }
          });
        });
        const Link = exports("L", /* @__PURE__ */reactExports.forwardRef(function Link2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiLink"
          });
          const className = props.className,
            _props$color = props.color,
            color = _props$color === void 0 ? "primary" : _props$color,
            _props$component = props.component,
            component = _props$component === void 0 ? "a" : _props$component,
            onBlur = props.onBlur,
            onFocus = props.onFocus,
            TypographyClasses = props.TypographyClasses,
            _props$underline = props.underline,
            underline = _props$underline === void 0 ? "always" : _props$underline,
            _props$variant = props.variant,
            variant = _props$variant === void 0 ? "inherit" : _props$variant,
            sx = props.sx,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const _useIsFocusVisible = useIsFocusVisible(),
            isFocusVisibleRef = _useIsFocusVisible.isFocusVisibleRef,
            handleBlurVisible = _useIsFocusVisible.onBlur,
            handleFocusVisible = _useIsFocusVisible.onFocus,
            focusVisibleRef = _useIsFocusVisible.ref;
          const _reactExports$useStat = reactExports.useState(false),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            focusVisible = _reactExports$useStat2[0],
            setFocusVisible = _reactExports$useStat2[1];
          const handlerRef = useForkRef(ref, focusVisibleRef);
          const handleBlur = event => {
            handleBlurVisible(event);
            if (isFocusVisibleRef.current === false) {
              setFocusVisible(false);
            }
            if (onBlur) {
              onBlur(event);
            }
          };
          const handleFocus = event => {
            handleFocusVisible(event);
            if (isFocusVisibleRef.current === true) {
              setFocusVisible(true);
            }
            if (onFocus) {
              onFocus(event);
            }
          };
          const ownerState = _extends({}, props, {
            color,
            component,
            focusVisible,
            underline,
            variant
          });
          const classes = useUtilityClasses(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(LinkRoot, _extends({
            color,
            className: clsx(classes.root, className),
            classes: TypographyClasses,
            component,
            onBlur: handleBlur,
            onFocus: handleFocus,
            ref: handlerRef,
            ownerState,
            variant,
            sx: [...(!Object.keys(colorTransformations).includes(color) ? [{
              color
            }] : []), ...(Array.isArray(sx) ? sx : [sx])]
          }, other));
        }));
      }
    };
  });
})();
//# sourceMappingURL=Link-legacy-iH7ha2Zm.js.map
