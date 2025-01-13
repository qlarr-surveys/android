import { s as useNavigate, D as useSearchParams, u as useParams, j as jsxRuntimeExports } from "./index-Ceq5-OQz.js";
import { c as create$3, a as create$6, b as create$9, L as LoadingButton, o } from "./yup-jC7ffXxp.js";
import { u as useForm, F as FormProvider, R as RHFTextField, I as Iconify } from "./Web-B1oTo6QA.js";
import { R as RouterLink } from "./router-link-Dlf82E0g.js";
import { R as useService, M as useTranslation, U as useDispatch, w as useTheme, Z as setLoading, aL as Stack, at as Image, T as Typography, I as IconButton, X as routes } from "./use-service-Ce_K4Bne.js";
import { u as useBoolean } from "./use-boolean-CRv9trwA.js";
import { I as InputAdornment } from "./InputAdornment-D8jixdDw.js";
import { L as Link } from "./Link-i05TDHnN.js";
import "./Checkbox-wCVvVxWu.js";
import "./SwitchBase-DJk_4bwh.js";
import "./Tabs-BDHm_R_v.js";
import "./radioClasses-D0UQOQ2O.js";
import "./tableRowClasses-Df3CilJS.js";
import "./TextField-CR7hcx6T.js";
import "./FormControlLabel-BkNPrLEw.js";
function ResetPasswordView({ confirmNewUser = false }) {
  const authService = useService("auth");
  const { t } = useTranslation("manage");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const passwordShow = useBoolean();
  const [searchParams] = useSearchParams();
  const { token } = useParams();
  const refreshToken = searchParams.get("token");
  const ResetPasswordSchema = create$3().shape({
    password: create$6().required(t("password_required")).matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      t("error.invalid_password")
    ),
    confirmPassword: create$6().required(t("password_required")).oneOf([create$9("password")], t("error.password_should_match"))
  });
  const defaultValues = {
    email: ""
  };
  const methods = useForm({
    resolver: o(ResetPasswordSchema),
    defaultValues
  });
  const {
    setError,
    handleSubmit,
    formState: { isSubmitting }
  } = methods;
  const onSubmit = handleSubmit(async (data) => {
    try {
      await authService.resetPassword(
        confirmNewUser,
        confirmNewUser ? token : refreshToken,
        data.password
      );
      navigate("/");
    } catch (processedError) {
      setError("password", {
        type: "manual",
        message: t("processed_errors.".concat(processedError.name))
      });
      setError("confirmPassword", {
        type: "manual",
        message: t("processed_errors.".concat(processedError.name))
      });
    } finally {
      dispatch(setLoading(false));
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Stack,
    {
      alignItems: "center",
      justifyContent: "center",
      sx: {
        px: 2,
        py: 12,
        minHeight: "100vh"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Stack,
        {
          spacing: 4,
          sx: {
            p: 4,
            width: 1,
            mx: "auto",
            flexShrink: 0,
            maxWidth: 400,
            borderRadius: 2,
            bgcolor: "background.default",
            boxShadow: theme.customShadows.z24,
            textAlign: { xs: "center", md: "left" }
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { sx: { textAlign: "center" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Image,
              {
                alt: "reset password",
                src: "/ic_lock_password.svg",
                sx: { mb: 5, width: 96, height: 96, mx: "auto" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h3", paragraph: true, children: t("reset_password.title") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(FormProvider, { methods, onSubmit: handleSubmit(onSubmit), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2.5, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  RHFTextField,
                  {
                    name: "password",
                    label: t("label.new_password"),
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
                  RHFTextField,
                  {
                    name: "confirmPassword",
                    label: t("label.confirm_new_password"),
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
                )
              ] }),
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
                  children: t("reset_password.reset")
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
          ] })
        }
      )
    }
  ) });
}
export {
  ResetPasswordView as default
};
//# sourceMappingURL=index-D2Y_Voyn.js.map
