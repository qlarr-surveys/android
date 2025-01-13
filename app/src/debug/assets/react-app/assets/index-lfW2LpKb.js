import { s as useNavigate, j as jsxRuntimeExports } from "./index-Ceq5-OQz.js";
import { c as create$3, a as create$6, L as LoadingButton, o } from "./yup-jC7ffXxp.js";
import { u as useForm, F as FormProvider, R as RHFTextField, I as Iconify } from "./Web-B1oTo6QA.js";
import { u as useBoolean } from "./use-boolean-CRv9trwA.js";
import { R as useService, M as useTranslation, U as useDispatch, Z as setLoading, T as Typography, aL as Stack, I as IconButton, aN as PROCESSED_ERRORS } from "./use-service-Ce_K4Bne.js";
import { R as RouterLink } from "./router-link-Dlf82E0g.js";
import { I as InputAdornment } from "./InputAdornment-D8jixdDw.js";
import { L as Link } from "./Link-i05TDHnN.js";
import "./Checkbox-wCVvVxWu.js";
import "./SwitchBase-DJk_4bwh.js";
import "./Tabs-BDHm_R_v.js";
import "./radioClasses-D0UQOQ2O.js";
import "./tableRowClasses-Df3CilJS.js";
import "./TextField-CR7hcx6T.js";
import "./FormControlLabel-BkNPrLEw.js";
function LoginView() {
  const authService = useService("auth");
  const { t } = useTranslation("manage");
  const passwordShow = useBoolean();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const LoginSchema = create$3().shape({
    email: create$6().required(t("email_required")).matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
      t("error.invalid_email")
    ),
    password: create$6().required(t("password_required"))
  });
  const defaultValues = {
    email: "",
    password: ""
  };
  const methods = useForm({
    resolver: o(LoginSchema),
    defaultValues
  });
  const {
    setError,
    handleSubmit,
    formState: { isSubmitting }
  } = methods;
  const handleError = (processedError) => {
    if (processedError.name == PROCESSED_ERRORS.WRONG_CREDENTIALS.name) {
      setError("email", {
        type: "manual",
        message: t("processed_errors.".concat(processedError.name))
      });
      setError("password", {
        type: "manual",
        message: t("processed_errors.".concat(processedError.name))
      });
    }
  };
  const onSubmit = handleSubmit(async (data) => {
    dispatch(setLoading(true));
    try {
      await authService.login(data.email, data.password);
      const { from } = location.state || { from: { pathname: "/" } };
      navigate(from);
    } catch (e) {
      handleError(e);
    } finally {
      dispatch(setLoading(false));
    }
  });
  const renderHead = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h3", paragraph: true, children: t("login.login") }) });
  const renderForm = /* @__PURE__ */ jsxRuntimeExports.jsx(FormProvider, { methods, onSubmit: handleSubmit(onSubmit), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2.5, alignItems: "flex-end", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(RHFTextField, { name: "email", label: t("label.email") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      RHFTextField,
      {
        name: "password",
        label: t("label.password"),
        type: passwordShow.value ? "text" : "password",
        InputProps: {
          endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: passwordShow.onToggle, edge: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Iconify,
            {
              icon: passwordShow.value ? "carbon:view" : "carbon:view-off"
            }
          ) }) })
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        component: RouterLink,
        href: "/forgot-password",
        variant: "body2",
        underline: "always",
        color: "text.secondary",
        children: t("login.forgot_password")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      LoadingButton,
      {
        fullWidth: true,
        color: "primary",
        size: "large",
        type: "submit",
        variant: "contained",
        loading: isSubmitting,
        children: t("login.login")
      }
    )
  ] }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    renderHead,
    renderForm
  ] });
}
export {
  LoginView as default
};
//# sourceMappingURL=index-lfW2LpKb.js.map
