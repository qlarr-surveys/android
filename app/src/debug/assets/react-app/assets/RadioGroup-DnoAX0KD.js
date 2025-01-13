import { f as generateUtilityClasses, g as generateUtilityClass, r as reactExports, b as _objectWithoutPropertiesLoose, j as jsxRuntimeExports, _ as _extends, d as clsx } from "./index-Ceq5-OQz.js";
import { R as RadioGroupContext } from "./RadioGroupContext-Cw8o1RwY.js";
import { A as useControlled, b as useForkRef, C as useId, c as composeClasses } from "./use-service-Ce_K4Bne.js";
import { F as FormGroup } from "./FormGroup-CVKdG5nM.js";
function getRadioGroupUtilityClass(slot) {
  return generateUtilityClass("MuiRadioGroup", slot);
}
generateUtilityClasses("MuiRadioGroup", ["root", "row", "error"]);
const _excluded = ["actions", "children", "className", "defaultValue", "name", "onChange", "value"];
const useUtilityClasses = (props) => {
  const {
    classes,
    row,
    error
  } = props;
  const slots = {
    root: ["root", row && "row", error && "error"]
  };
  return composeClasses(slots, getRadioGroupUtilityClass, classes);
};
const RadioGroup = /* @__PURE__ */ reactExports.forwardRef(function RadioGroup2(props, ref) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions,
    children,
    className,
    defaultValue,
    name: nameProp,
    onChange,
    value: valueProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const rootRef = reactExports.useRef(null);
  const classes = useUtilityClasses(props);
  const [value, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: "RadioGroup"
  });
  reactExports.useImperativeHandle(actions, () => ({
    focus: () => {
      let input = rootRef.current.querySelector("input:not(:disabled):checked");
      if (!input) {
        input = rootRef.current.querySelector("input:not(:disabled)");
      }
      if (input) {
        input.focus();
      }
    }
  }), []);
  const handleRef = useForkRef(ref, rootRef);
  const name = useId(nameProp);
  const contextValue = reactExports.useMemo(() => ({
    name,
    onChange(event) {
      setValueState(event.target.value);
      if (onChange) {
        onChange(event, event.target.value);
      }
    },
    value
  }), [name, onChange, setValueState, value]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupContext.Provider, {
    value: contextValue,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormGroup, _extends({
      role: "radiogroup",
      ref: handleRef,
      className: clsx(classes.root, className)
    }, other, {
      children
    }))
  });
});
export {
  RadioGroup as R
};
//# sourceMappingURL=RadioGroup-DnoAX0KD.js.map
