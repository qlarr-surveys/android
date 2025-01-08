;
(function () {
  function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
  function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
  System.register(['./index-legacy-VHGc_nGn.js', './yup-legacy-Cikjg7JV.js', './Web-legacy-fzNrSyYZ.js', './use-boolean-legacy-BSkT80lk.js', './use-service-legacy-uNDfwPef.js', './router-link-legacy-NJ2liZ3v.js', './InputAdornment-legacy-DXbKBg9u.js', './Link-legacy-iH7ha2Zm.js', './Checkbox-legacy-CWdBtU_X.js', './SwitchBase-legacy-CGnhZDR0.js', './Tabs-legacy-DPncV328.js', './radioClasses-legacy-C6EYZIXu.js', './tableRowClasses-legacy-D6iguAwE.js', './TextField-legacy-CDzaE-C1.js', './FormControlLabel-legacy-DpQMzcK5.js'], function (exports, module) {
    'use strict';

    var useNavigate, jsxRuntimeExports, create$3, create$6, LoadingButton, o, useForm, FormProvider, RHFTextField, Iconify, useBoolean, useService, useTranslation, useDispatch, setLoading, Typography, Stack, IconButton, PROCESSED_ERRORS, RouterLink, InputAdornment, Link;
    return {
      setters: [module => {
        useNavigate = module.s;
        jsxRuntimeExports = module.j;
      }, module => {
        create$3 = module.c;
        create$6 = module.a;
        LoadingButton = module.L;
        o = module.o;
      }, module => {
        useForm = module.u;
        FormProvider = module.F;
        RHFTextField = module.R;
        Iconify = module.I;
      }, module => {
        useBoolean = module.u;
      }, module => {
        useService = module.R;
        useTranslation = module.M;
        useDispatch = module.U;
        setLoading = module.Z;
        Typography = module.T;
        Stack = module.aL;
        IconButton = module.I;
        PROCESSED_ERRORS = module.aN;
      }, module => {
        RouterLink = module.R;
      }, module => {
        InputAdornment = module.I;
      }, module => {
        Link = module.L;
      }, null, null, null, null, null, null, null],
      execute: function execute() {
        exports("default", LoginView);
        function LoginView() {
          const authService = useService("auth");
          const _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          const passwordShow = useBoolean();
          const dispatch = useDispatch();
          const navigate = useNavigate();
          const LoginSchema = create$3().shape({
            email: create$6().required(t("email_required")).matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i, t("error.invalid_email")),
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
          const setError = methods.setError,
            handleSubmit = methods.handleSubmit,
            isSubmitting = methods.formState.isSubmitting;
          const handleError = processedError => {
            if (processedError.name == PROCESSED_ERRORS.WRONG_CREDENTIALS.name) {
              setError("email", {
                type: "manual",
                message: t(`processed_errors.${processedError.name}`)
              });
              setError("password", {
                type: "manual",
                message: t(`processed_errors.${processedError.name}`)
              });
            }
          };
          const onSubmit = handleSubmit(/*#__PURE__*/function () {
            var _ref = _asyncToGenerator(function* (data) {
              dispatch(setLoading(true));
              try {
                yield authService.login(data.email, data.password);
                const _ref2 = location.state || {
                    from: {
                      pathname: "/"
                    }
                  },
                  from = _ref2.from;
                navigate(from);
              } catch (e) {
                handleError(e);
              } finally {
                dispatch(setLoading(false));
              }
            });
            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }());
          const renderHead = /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            children: /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
              variant: "h3",
              paragraph: true,
              children: t("login.login")
            })
          });
          const renderForm = /* @__PURE__ */jsxRuntimeExports.jsx(FormProvider, {
            methods,
            onSubmit: handleSubmit(onSubmit),
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
              spacing: 2.5,
              alignItems: "flex-end",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(RHFTextField, {
                name: "email",
                label: t("label.email")
              }), /* @__PURE__ */jsxRuntimeExports.jsx(RHFTextField, {
                name: "password",
                label: t("label.password"),
                type: passwordShow.value ? "text" : "password",
                InputProps: {
                  endAdornment: /* @__PURE__ */jsxRuntimeExports.jsx(InputAdornment, {
                    position: "end",
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(IconButton, {
                      onClick: passwordShow.onToggle,
                      edge: "end",
                      children: /* @__PURE__ */jsxRuntimeExports.jsx(Iconify, {
                        icon: passwordShow.value ? "carbon:view" : "carbon:view-off"
                      })
                    })
                  })
                }
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Link, {
                component: RouterLink,
                href: "/forgot-password",
                variant: "body2",
                underline: "always",
                color: "text.secondary",
                children: t("login.forgot_password")
              }), /* @__PURE__ */jsxRuntimeExports.jsx(LoadingButton, {
                fullWidth: true,
                color: "primary",
                size: "large",
                type: "submit",
                variant: "contained",
                loading: isSubmitting,
                children: t("login.login")
              })]
            })
          });
          return /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [renderHead, renderForm]
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-CG_u7Iig.js.map
