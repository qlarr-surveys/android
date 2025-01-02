;
(function () {
  System.register(['./index-legacy-VHGc_nGn.js', './use-service-legacy-uNDfwPef.js'], function (exports, module) {
    'use strict';

    var generateUtilityClasses, generateUtilityClass, _extends, reactExports, _objectWithoutPropertiesLoose, jsxRuntimeExports, clsx, styled, useDefaultProps, composeClasses, createSvgIcon;
    return {
      setters: [module => {
        generateUtilityClasses = module.f;
        generateUtilityClass = module.g;
        _extends = module._;
        reactExports = module.r;
        _objectWithoutPropertiesLoose = module.b;
        jsxRuntimeExports = module.j;
        clsx = module.d;
      }, module => {
        styled = module.f;
        useDefaultProps = module.j;
        composeClasses = module.c;
        createSvgIcon = module.e;
      }],
      execute: function execute() {
        function getCardMediaUtilityClass(slot) {
          return generateUtilityClass('MuiCardMedia', slot);
        }
        generateUtilityClasses('MuiCardMedia', ['root', 'media', 'img']);
        const _excluded = ["children", "className", "component", "image", "src", "style"];
        const useUtilityClasses = ownerState => {
          const classes = ownerState.classes,
            isMediaComponent = ownerState.isMediaComponent,
            isImageComponent = ownerState.isImageComponent;
          const slots = {
            root: ["root", isMediaComponent && "media", isImageComponent && "img"]
          };
          return composeClasses(slots, getCardMediaUtilityClass, classes);
        };
        const CardMediaRoot = styled("div", {
          name: "MuiCardMedia",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            const isMediaComponent = ownerState.isMediaComponent,
              isImageComponent = ownerState.isImageComponent;
            return [styles.root, isMediaComponent && styles.media, isImageComponent && styles.img];
          }
        })(({
          ownerState
        }) => _extends({
          display: "block",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }, ownerState.isMediaComponent && {
          width: "100%"
        }, ownerState.isImageComponent && {
          // ⚠️ object-fit is not supported by IE11.
          objectFit: "cover"
        }));
        const MEDIA_COMPONENTS = ["video", "audio", "picture", "iframe", "img"];
        const IMAGE_COMPONENTS = ["picture", "img"];
        const CardMedia = exports("C", /* @__PURE__ */reactExports.forwardRef(function CardMedia2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiCardMedia"
          });
          const children = props.children,
            className = props.className,
            _props$component = props.component,
            component = _props$component === void 0 ? "div" : _props$component,
            image = props.image,
            src = props.src,
            style = props.style,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const isMediaComponent = MEDIA_COMPONENTS.indexOf(component) !== -1;
          const composedStyle = !isMediaComponent && image ? _extends({
            backgroundImage: `url("${image}")`
          }, style) : style;
          const ownerState = _extends({}, props, {
            component,
            isMediaComponent,
            isImageComponent: IMAGE_COMPONENTS.indexOf(component) !== -1
          });
          const classes = useUtilityClasses(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(CardMediaRoot, _extends({
            className: clsx(classes.root, className),
            as: component,
            role: !isMediaComponent && image ? "img" : void 0,
            ref,
            style: composedStyle,
            ownerState,
            src: isMediaComponent ? image || src : void 0
          }, other, {
            children
          }));
        }));
        const Close = exports("a", createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        }), 'Close'));
      }
    };
  });
})();
//# sourceMappingURL=Close-legacy-DueKC2rz.js.map
