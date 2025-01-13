import { r as reactExports, j as jsxRuntimeExports } from "./index-Ceq5-OQz.js";
import { M as useTranslation, ap as rtlLanguage } from "./use-service-Ce_K4Bne.js";
import { a as Snackbar, A as Alert } from "./Web-B1oTo6QA.js";
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
//# sourceMappingURL=index-Dp4_Dj-r.js.map
