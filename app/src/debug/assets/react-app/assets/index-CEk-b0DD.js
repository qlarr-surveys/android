import { s as useNavigate, j as jsxRuntimeExports, B as Box, r as reactExports } from "./index-X8N9IRh7.js";
import { c as create$3, a as create$6, L as LoadingButton, o } from "./yup-DuhXSTIa.js";
import { u as useForm, F as FormProvider, R as RHFTextField, I as Iconify } from "./Web-D9a6B_N2.js";
import { R as RouterLink } from "./router-link-qExHAUK9.js";
import { T as Typography, aD as Button, R as useService, M as useTranslation, U as useDispatch, Z as setLoading, aL as Stack, at as Image, X as routes } from "./use-service-CuBoVPEx.js";
import { C as Check } from "./Check-Cg4YthA7.js";
import { L as Link } from "./Link-B_rm-8WK.js";
import "./Checkbox-CWvCRXaG.js";
import "./SwitchBase-Dmam6tVo.js";
import "./Tabs-CLdH6uZ6.js";
import "./radioClasses-Djyx9JBx.js";
import "./tableRowClasses-BrmlRMuN.js";
import "./TextField-D-dIAL0B.js";
import "./FormControlLabel-1NyMPPRG.js";
const successText = "_successText_19zdx_1";
const iconContainer = "_iconContainer_19zdx_12";
const styles = {
  successText,
  iconContainer
};
const SuccessMessage = ({ message, t }) => {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.successText, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles.iconContainer, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Check,
      {
        sx: {
          fontSize: "40px",
          color: "#32CD32",
          stroke: "#32CD32",
          strokeWidth: 1
        }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", color: "primary", children: t("email.check") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body1", mt: 1, color: "textSecondary", children: t("".concat(message)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        onClick: () => {
          navigate("/login");
        },
        fullWidth: true,
        size: "large",
        color: "primary",
        variant: "contained",
        children: t("login.login")
      }
    )
  ] });
};
function ForgotPasswordView() {
  const authService = useService("auth");
  const { t } = useTranslation("manage");
  const [isSuccess, setSuccess] = reactExports.useState(false);
  const dispatch = useDispatch();
  const ForgotPasswordSchema = create$3().shape({
    email: create$6().required(t("email_required")).matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
      t("error.invalid_email")
    )
  });
  const defaultValues = {
    email: ""
  };
  const methods = useForm({
    resolver: o(ForgotPasswordSchema),
    defaultValues
  });
  const {
    reset,
    handleSubmit,
    formState: { isSubmitting }
  } = methods;
  const onSubmit = handleSubmit(async (data) => {
    try {
      dispatch(setLoading(true));
      await authService.forgotPassword(data.email);
      setSuccess(true);
    } catch (e) {
    } finally {
      dispatch(setLoading(false));
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: isSuccess ? /* @__PURE__ */ jsxRuntimeExports.jsx(SuccessMessage, { t, message: "forgot_password.success" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { sx: { textAlign: "center" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Image,
      {
        alt: "reset password",
        src: "/ic_lock_password.svg",
        sx: { mb: 5, width: 96, height: 96, mx: "auto" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h3", paragraph: true, children: t("forgot_password.title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "textSecondary", mb: 5, children: t("forgot_password.helper_text") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(FormProvider, { methods, onSubmit: handleSubmit(onSubmit), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        RHFTextField,
        {
          name: "email",
          hiddenLabel: true,
          placeholder: t("label.email")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        LoadingButton,
        {
          fullWidth: true,
          size: "large",
          color: "primary",
          type: "submit",
          variant: "contained",
          loading: isSubmitting,
          sx: { mt: 2.5 },
          children: t("forgot_password.send")
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        component: RouterLink,
        href: routes.login,
        color: "inherit",
        variant: "subtitle2",
        sx: {
          mt: 3,
          mx: "auto",
          alignItems: "center",
          display: "inline-flex"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Iconify, { icon: "carbon:chevron-left", width: 16, sx: { mr: 1 } }),
          t("forgot_password.return_to_signin")
        ]
      }
    )
  ] }) });
}
export {
  ForgotPasswordView as default
};
//# sourceMappingURL=index-CEk-b0DD.js.map
