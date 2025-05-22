import { r as reactExports, j as jsxRuntimeExports } from "./index-GLBW3_uR.js";
import { M as useTranslation, an as rtlLanguage } from "./use-service-BKPqOjBj.js";
import { a as Snackbar, A as Alert } from "./Web-DadasGuA.js";
function SuccessSnackbar({ success, left }) {
  const [open, setOpen] = reactExports.useState(true);
  const [dir, setDir] = reactExports.useState("ltr");
  const { t, i18n } = useTranslation("manage");
  reactExports.useEffect(() => {
    if (rtlLanguage.includes(i18n.language)) {
      setDir("rtl");
    } else {
      setDir("ltr");
    }
    const timer = setTimeout(() => {
      setOpen(false);
    }, 2e3);
    return () => {
      clearTimeout(timer);
    };
  }, [i18n.language]);
  const handleClose = () => {
    setOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Snackbar,
    {
      open,
      autoHideDuration: 2e3,
      onClose: handleClose,
      sx: { left: "".concat(left, "px !important") },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: "standard", severity: "success", onClose: handleClose, dir, children: t("processed_successes.".concat(success)) })
    }
  );
}
export {
  SuccessSnackbar as S
};
//# sourceMappingURL=index-Cyz5gyUi.js.map
