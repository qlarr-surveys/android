import { r as reactExports } from "./index-Ceq5-OQz.js";
function useBoolean(defaultValue) {
  const [value, setValue] = reactExports.useState(!!defaultValue);
  const onTrue = reactExports.useCallback(() => {
    setValue(true);
  }, []);
  const onFalse = reactExports.useCallback(() => {
    setValue(false);
  }, []);
  const onToggle = reactExports.useCallback(() => {
    setValue((prev) => !prev);
  }, []);
  return {
    value,
    onTrue,
    onFalse,
    onToggle,
    setValue
  };
}
export {
  useBoolean as u
};
//# sourceMappingURL=use-boolean-CRv9trwA.js.map
