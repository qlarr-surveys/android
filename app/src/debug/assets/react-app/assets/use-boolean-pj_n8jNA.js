import { r as reactExports } from "./index-GLBW3_uR.js";
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
//# sourceMappingURL=use-boolean-pj_n8jNA.js.map
