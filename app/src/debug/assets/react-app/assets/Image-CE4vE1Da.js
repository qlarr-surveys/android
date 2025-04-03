import { r as reactExports, q as interopRequireDefaultExports, j as jsxRuntimeExports, x as createTheme, B as Box } from "./index-BXKg_X9w.js";
import { K as requireCreateSvgIcon, ap as palette, M as useTranslation, aL as Modal, aP as SurveyIcon, T as Typography, aC as Button } from "./use-service-D_BNczvS.js";
const usePreviousProps = (value) => {
  const ref = reactExports.useRef({});
  reactExports.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
var Visibility = {};
var _interopRequireDefault$1 = interopRequireDefaultExports;
Object.defineProperty(Visibility, "__esModule", {
  value: true
});
var default_1$1 = Visibility.default = void 0;
var _createSvgIcon$1 = _interopRequireDefault$1(requireCreateSvgIcon());
var _jsxRuntime$1 = jsxRuntimeExports;
default_1$1 = Visibility.default = (0, _createSvgIcon$1.default)(/* @__PURE__ */ (0, _jsxRuntime$1.jsx)("path", {
  d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"
}), "Visibility");
const modalBox = "_modalBox_1lspa_1";
const styles = {
  modalBox
};
const DeleteModal = ({
  title,
  open,
  handleClose,
  handleDelete,
  description
}) => {
  const theme = createTheme({
    palette: palette("light")
  });
  const { t } = useTranslation(["manage", "design", "run"]);
  const modalTitle = title || t("action_btn.delete");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Modal, { open, onClose: handleClose, "aria-labelledby": "delete-modal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.modalBox, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { display: "flex", gap: 2, justifyContent: "center", alignItems: "center", children: [
      title === "Delete" && /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyIcon, { name: "delete", color: "#000", size: "1.75em" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Typography,
        {
          id: "delete-modal",
          variant: "h4",
          fontWeight: 600,
          component: "h2",
          children: modalTitle
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Typography,
      {
        id: "modal-description",
        sx: { mt: 2, overflowWrap: "break-word" },
        children: description
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { display: "flex", justifyContent: "center", mt: 4, gap: 3, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          sx: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            textTransform: "capitalize"
          },
          size: "medium",
          variant: "contained",
          onClick: handleClose,
          children: t("cancel")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          sx: { textTransform: "capitalize" },
          size: "medium",
          type: "submit",
          variant: "secondary",
          onClick: handleDelete,
          children: t("confirm")
        }
      )
    ] })
  ] }) });
};
var Image = {};
var _interopRequireDefault = interopRequireDefaultExports;
Object.defineProperty(Image, "__esModule", {
  value: true
});
var default_1 = Image.default = void 0;
var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
var _jsxRuntime = jsxRuntimeExports;
default_1 = Image.default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
  d: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"
}), "Image");
export {
  DeleteModal as D,
  default_1$1 as a,
  default_1 as d,
  usePreviousProps as u
};
//# sourceMappingURL=Image-CE4vE1Da.js.map
