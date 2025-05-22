import { j as jsxRuntimeExports, s as useNavigate, B as Box, r as reactExports } from "./index-GLBW3_uR.js";
import { c as create$3, a as create$6, L as LoadingButton, o } from "./yup-DOAccs7R.js";
import { u as useForm, F as FormProvider, R as RHFTextField, r as routes, I as Iconify } from "./Web-DadasGuA.js";
import { R as RouterLink } from "./router-link-DZI5215-.js";
import { e as createSvgIcon, T as Typography, aQ as Button, R as useService, M as useTranslation, U as useDispatch, X as setLoading, aO as Stack, ar as Image } from "./use-service-BKPqOjBj.js";
import { L as Link } from "./Link-GCEsbcCh.js";
import "./Checkbox-d90L6mhC.js";
import "./SwitchBase-CV68NIYO.js";
import "./Tabs-BNei_Rjp.js";
import "./radioClasses-Gcs6PRWb.js";
import "./tableRowClasses-B3LTqsSH.js";
import "./TextField-Dshtidi6.js";
import "./FormControlLabel-Cjy18-QD.js";
const Check = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
}), "Check");
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
//# sourceMappingURL=index-OLT0drN7.js.map
