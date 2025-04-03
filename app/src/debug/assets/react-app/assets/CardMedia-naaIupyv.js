import { f as generateUtilityClasses, g as generateUtilityClass, _ as _extends, r as reactExports, b as _objectWithoutPropertiesLoose, j as jsxRuntimeExports, d as clsx } from "./index-BXKg_X9w.js";
import { f as styled, j as useDefaultProps, c as composeClasses } from "./use-service-D_BNczvS.js";
function getCardMediaUtilityClass(slot) {
  return generateUtilityClass("MuiCardMedia", slot);
}
generateUtilityClasses("MuiCardMedia", ["root", "media", "img"]);
const _excluded = ["children", "className", "component", "image", "src", "style"];
const useUtilityClasses = (ownerState) => {
  const {
    classes,
    isMediaComponent,
    isImageComponent
  } = ownerState;
  const slots = {
    root: ["root", isMediaComponent && "media", isImageComponent && "img"]
  };
  return composeClasses(slots, getCardMediaUtilityClass, classes);
};
const CardMediaRoot = styled("div", {
  name: "MuiCardMedia",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    const {
      isMediaComponent,
      isImageComponent
    } = ownerState;
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
const CardMedia = /* @__PURE__ */ reactExports.forwardRef(function CardMedia2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiCardMedia"
  });
  const {
    children,
    className,
    component = "div",
    image,
    src,
    style
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const isMediaComponent = MEDIA_COMPONENTS.indexOf(component) !== -1;
  const composedStyle = !isMediaComponent && image ? _extends({
    backgroundImage: 'url("'.concat(image, '")')
  }, style) : style;
  const ownerState = _extends({}, props, {
    component,
    isMediaComponent,
    isImageComponent: IMAGE_COMPONENTS.indexOf(component) !== -1
  });
  const classes = useUtilityClasses(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CardMediaRoot, _extends({
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
});
export {
  CardMedia as C
};
//# sourceMappingURL=CardMedia-naaIupyv.js.map
