import { f as generateUtilityClasses, g as generateUtilityClass, r as reactExports, b as _objectWithoutPropertiesLoose, _ as _extends, j as jsxRuntimeExports, d as clsx } from "./index-GLBW3_uR.js";
import { f as styled, h as Paper, j as useDefaultProps, c as composeClasses } from "./use-service-BKPqOjBj.js";
function getCardUtilityClass(slot) {
  return generateUtilityClass("MuiCard", slot);
}
generateUtilityClasses("MuiCard", ["root"]);
const _excluded = ["className", "raised"];
const useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getCardUtilityClass, classes);
};
const CardRoot = styled(Paper, {
  name: "MuiCard",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(() => {
  return {
    overflow: "hidden"
  };
});
const Card = /* @__PURE__ */ reactExports.forwardRef(function Card2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiCard"
  });
  const {
    className,
    raised = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    raised
  });
  const classes = useUtilityClasses(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CardRoot, _extends({
    className: clsx(classes.root, className),
    elevation: raised ? 8 : void 0,
    ref,
    ownerState
  }, other));
});
export {
  Card as C
};
//# sourceMappingURL=Card-yDMxaNNi.js.map
