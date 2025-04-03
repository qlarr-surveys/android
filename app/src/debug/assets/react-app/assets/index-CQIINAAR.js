import { r as reactExports, j as jsxRuntimeExports } from "./index-BXKg_X9w.js";
import { M as useTranslation, ao as rtlLanguage } from "./use-service-D_BNczvS.js";
import { a as Snackbar, A as Alert } from "./Web-BJ9GQG1r.js";
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
//# sourceMappingURL=index-CQIINAAR.js.map
