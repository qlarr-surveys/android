;
(function () {
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  System.register(['./index-legacy-DAdgQJ7U.js', './Android-legacy-D-dje5Yx.js'], function (exports, module) {
    'use strict';

    var generateUtilityClasses, generateUtilityClass, getPath, alpha_1, capitalize, _extends, reactExports, _objectWithoutPropertiesLoose, jsxRuntimeExports, clsx, React, LoadingDots, styled, Typography, useDefaultProps, useIsFocusVisible, useForkRef, composeClasses, useService, useTheme, useTranslation, fileTypesToMimesArray, useSelector, useDispatch, Button, ValidationItem, previewUrl, setDirty, uploadFile, valueChange;
    return {
      setters: [module => {
        generateUtilityClasses = module.q;
        generateUtilityClass = module.F;
        getPath = module.ab;
        alpha_1 = module.Z;
        capitalize = module.h;
        _extends = module.y;
        reactExports = module.r;
        _objectWithoutPropertiesLoose = module.w;
        jsxRuntimeExports = module.m;
        clsx = module.E;
        React = module.W;
        LoadingDots = module.a6;
      }, module => {
        styled = module.s;
        Typography = module.i;
        useDefaultProps = module.a;
        useIsFocusVisible = module.al;
        useForkRef = module.x;
        composeClasses = module.e;
        useService = module.Q;
        useTheme = module.b;
        useTranslation = module.a2;
        fileTypesToMimesArray = module.am;
        useSelector = module.D;
        useDispatch = module.H;
        Button = module.y;
        ValidationItem = module.an;
        previewUrl = module.S;
        setDirty = module.L;
        uploadFile = module.Y;
        valueChange = module.J;
      }],
      execute: function execute() {
        exports("default", FileUpload);
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
        const Link = /* @__PURE__ */reactExports.forwardRef(function Link2(inProps, ref) {
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
        });
        const Input = styled("input")({
          display: "none"
        });
        function FileUpload(props) {
          var _props$component$vali, _props$component$vali2, _props$component$vali3, _props$component$vali4, _props$component$vali5;
          const runService = useService("run");
          const theme = useTheme();
          const _useTranslation = useTranslation("run"),
            t = _useTranslation.t;
          let accepted = fileTypesToMimesArray((_props$component$vali = props.component.validation) === null || _props$component$vali === void 0 || (_props$component$vali = _props$component$vali.validation_file_types) === null || _props$component$vali === void 0 ? void 0 : _props$component$vali.fileTypes);
          const maxFileSize = ((_props$component$vali2 = props.component.validation) === null || _props$component$vali2 === void 0 || (_props$component$vali2 = _props$component$vali2.validation_max_file_size) === null || _props$component$vali2 === void 0 ? void 0 : _props$component$vali2.isActive) && ((_props$component$vali3 = props.component.validation) === null || _props$component$vali3 === void 0 || (_props$component$vali3 = _props$component$vali3.validation_max_file_size) === null || _props$component$vali3 === void 0 ? void 0 : _props$component$vali3.max_size) || -1;
          const state = useSelector(state2 => {
            let questionState = state2.runState.values[props.component.qualifiedCode];
            return questionState === null || questionState === void 0 ? void 0 : questionState.value;
          });
          const preview = useSelector(state2 => {
            return state2.runState.preview;
          });
          const dispatch = useDispatch();
          const _reactExports$useStat3 = reactExports.useState(),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            selectedFile = _reactExports$useStat4[0],
            setSelectedFile = _reactExports$useStat4[1];
          const _reactExports$useStat5 = reactExports.useState(false),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            isUploading = _reactExports$useStat6[0],
            setUploading = _reactExports$useStat6[1];
          const previewAndroid = () => {
            window["Android"].previewFileUpload(state.stored_filename, state.filename);
          };
          const invalidSelectedFile = !isUploading && selectedFile && accepted.length > 0 && !accepted.includes(selectedFile.type);
          const invalidSize = !isUploading && selectedFile && maxFileSize > 0 && selectedFile.size / 1024 > maxFileSize;
          const changeHandler = event => {
            dispatch(setDirty(props.component.qualifiedCode));
            setSelectedFile(event.target.files[0]);
          };
          const uploadSelectedFile = () => {
            setUploading(true);
            uploadFile(runService, props.component.qualifiedCode, preview, selectedFile).then(response => {
              setUploading(false);
              resetSelectedFile();
              dispatch(valueChange({
                componentCode: props.component.qualifiedCode,
                value: response
              }));
            }).catch(err => {
              setUploading(false);
              console.error(err);
            });
          };
          const resetSelectedFile = () => {
            setSelectedFile(void 0);
          };
          const onButtonClick = event => {
            if (window["Android"]) {
              const code = props.component.qualifiedCode;
              event.preventDefault();
              window["Android"].selectFile(code, (accepted === null || accepted === void 0 ? void 0 : accepted.join(",")) || "", maxFileSize || -1);
              window["onFileSelected" + code] = (name, size, type) => {
                dispatch(setDirty(props.component.qualifiedCode));
                setSelectedFile({
                  name,
                  size,
                  type
                });
              };
            }
          };
          let shouldUpload = selectedFile && !invalidSelectedFile && !invalidSize;
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("label", {
              htmlFor: "contained-button-file",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Input, {
                id: "contained-button-file",
                type: "file",
                accept: accepted ? accepted.join(",") : void 0,
                onChange: changeHandler
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                disabled: isUploading,
                onClick: onButtonClick,
                variant: "contained",
                component: "span",
                children: t("choose_file")
              })]
            }), !selectedFile ? "" : /* @__PURE__ */jsxRuntimeExports.jsxs(React.Fragment, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                children: [" ", selectedFile.name, " - ", Math.round(selectedFile.size / 1024), "K"]
              }), shouldUpload ? /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                disabled: isUploading,
                variant: "text",
                onClick: uploadSelectedFile,
                children: t("upload")
              }) : "", /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                disabled: isUploading,
                sx: {
                  fontFamily: theme.textStyles.text.font,
                  fontSize: theme.textStyles.text.size
                },
                variant: "text",
                onClick: resetSelectedFile,
                children: t("cancel")
              })]
            }), invalidSize && /* @__PURE__ */jsxRuntimeExports.jsxs(React.Fragment, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("br", {}), /* @__PURE__ */jsxRuntimeExports.jsx(ValidationItem, {
                name: "validation_max_file_size",
                validation: (_props$component$vali4 = props.component.validation) === null || _props$component$vali4 === void 0 ? void 0 : _props$component$vali4.validation_max_file_size
              })]
            }), invalidSelectedFile && /* @__PURE__ */jsxRuntimeExports.jsxs(React.Fragment, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("br", {}), /* @__PURE__ */jsxRuntimeExports.jsx(ValidationItem, {
                name: "validation_file_types",
                validation: (_props$component$vali5 = props.component.validation) === null || _props$component$vali5 === void 0 ? void 0 : _props$component$vali5.validation_file_types
              })]
            }), isUploading ? /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              style: {
                textAlign: "center"
              },
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(LoadingDots, {}), /* @__PURE__ */jsxRuntimeExports.jsx("br", {}), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                children: t("uploading")
              })]
            }) : !state || !state.stored_filename ? "" : /* @__PURE__ */jsxRuntimeExports.jsxs(React.Fragment, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("br", {}), /* @__PURE__ */jsxRuntimeExports.jsx("br", {}), window["Android"] ? /* @__PURE__ */jsxRuntimeExports.jsxs(Link, {
                target: "_blank",
                onClick: previewAndroid,
                children: [state.filename, " - ", Math.round(state.size / 1024), "K"]
              }) : /* @__PURE__ */jsxRuntimeExports.jsxs(Link, {
                target: "_blank",
                href: previewUrl(state.stored_filename),
                children: [state.filename, " - ", Math.round(state.size / 1024), "K"]
              })]
            })]
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=FileUpload-legacy-CijpWoxq.js.map
