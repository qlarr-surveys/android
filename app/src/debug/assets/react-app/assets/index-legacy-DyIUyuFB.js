;
(function () {
  function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
  function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  System.register(['./index-legacy-DHZhPI7F.js', './yup-legacy-CU6Kjk4F.js', './Web-legacy-DvtjkKFa.js', './router-link-legacy-DFwixNOy.js', './use-service-legacy-Dvd5TXWp.js', './use-boolean-legacy-ByhHUGX5.js', './InputAdornment-legacy-Bj6eETKt.js', './Link-legacy-C2dZre7t.js', './Checkbox-legacy-DFqn5IuL.js', './SwitchBase-legacy-Bo564_DK.js', './Tabs-legacy-CR0rpc1G.js', './radioClasses-legacy-BjRfdHDd.js', './tableRowClasses-legacy-6YY-TDzx.js', './TextField-legacy-C04XnsWd.js', './FormControlLabel-legacy-CSy-e4Kr.js'], function (exports, module) {
    'use strict';

    var useNavigate, useSearchParams, useParams, jsxRuntimeExports, create$3, create$6, create$9, LoadingButton, o, useForm, FormProvider, RHFTextField, Iconify, RouterLink, useService, useTranslation, useDispatch, useTheme, setLoading, Stack, Image, Typography, IconButton, routes, useBoolean, InputAdornment, Link;
    return {
      setters: [module => {
        useNavigate = module.s;
        useSearchParams = module.D;
        useParams = module.u;
        jsxRuntimeExports = module.j;
      }, module => {
        create$3 = module.c;
        create$6 = module.a;
        create$9 = module.b;
        LoadingButton = module.L;
        o = module.o;
      }, module => {
        useForm = module.u;
        FormProvider = module.F;
        RHFTextField = module.R;
        Iconify = module.I;
      }, module => {
        RouterLink = module.R;
      }, module => {
        useService = module.R;
        useTranslation = module.M;
        useDispatch = module.U;
        useTheme = module.w;
        setLoading = module.Z;
        Stack = module.aL;
        Image = module.at;
        Typography = module.T;
        IconButton = module.I;
        routes = module.X;
      }, module => {
        useBoolean = module.u;
      }, module => {
        InputAdornment = module.I;
      }, module => {
        Link = module.L;
      }, null, null, null, null, null, null, null],
      execute: function execute() {
        exports("default", ResetPasswordView);
        function ResetPasswordView({
          confirmNewUser = false
        }) {
          const authService = useService("auth");
          const _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          const navigate = useNavigate();
          const dispatch = useDispatch();
          const theme = useTheme();
          const passwordShow = useBoolean();
          const _useSearchParams = useSearchParams(),
            _useSearchParams2 = _slicedToArray(_useSearchParams, 1),
            searchParams = _useSearchParams2[0];
          const _useParams = useParams(),
            token = _useParams.token;
          const refreshToken = searchParams.get("token");
          const ResetPasswordSchema = create$3().shape({
            password: create$6().required(t("password_required")).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, t("error.invalid_password")),
            confirmPassword: create$6().required(t("password_required")).oneOf([create$9("password")], t("error.password_should_match"))
          });
          const defaultValues = {
            email: ""
          };
          const methods = useForm({
            resolver: o(ResetPasswordSchema),
            defaultValues
          });
          const setError = methods.setError,
            handleSubmit = methods.handleSubmit,
            isSubmitting = methods.formState.isSubmitting;
          const onSubmit = handleSubmit(/*#__PURE__*/function () {
            var _ref = _asyncToGenerator(function* (data) {
              try {
                yield authService.resetPassword(confirmNewUser, confirmNewUser ? token : refreshToken, data.password);
                navigate("/");
              } catch (processedError) {
                setError("password", {
                  type: "manual",
                  message: t(`processed_errors.${processedError.name}`)
                });
                setError("confirmPassword", {
                  type: "manual",
                  message: t(`processed_errors.${processedError.name}`)
                });
              } finally {
                dispatch(setLoading(false));
              }
            });
            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }());
          return /* @__PURE__ */jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
            children: /* @__PURE__ */jsxRuntimeExports.jsx(Stack, {
              alignItems: "center",
              justifyContent: "center",
              sx: {
                px: 2,
                py: 12,
                minHeight: "100vh"
              },
              children: /* @__PURE__ */jsxRuntimeExports.jsx(Stack, {
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
                  textAlign: {
                    xs: "center",
                    md: "left"
                  }
                },
                children: /* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
                  sx: {
                    textAlign: "center"
                  },
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(Image, {
                    alt: "reset password",
                    src: "/ic_lock_password.svg",
                    sx: {
                      mb: 5,
                      width: 96,
                      height: 96,
                      mx: "auto"
                    }
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                    variant: "h3",
                    paragraph: true,
                    children: t("reset_password.title")
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs(FormProvider, {
                    methods,
                    onSubmit: handleSubmit(onSubmit),
                    children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
                      spacing: 2.5,
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(RHFTextField, {
                        name: "password",
                        label: t("label.new_password"),
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
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(RHFTextField, {
                        name: "confirmPassword",
                        label: t("label.confirm_new_password"),
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
                      })]
                    }), /* @__PURE__ */jsxRuntimeExports.jsx(LoadingButton, {
                      fullWidth: true,
                      size: "large",
                      color: "primary",
                      type: "submit",
                      variant: "contained",
                      loading: isSubmitting,
                      sx: {
                        mt: 2.5
                      },
                      children: t("reset_password.reset")
                    })]
                  }), /* @__PURE__ */jsxRuntimeExports.jsxs(Link, {
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
                    children: [/* @__PURE__ */jsxRuntimeExports.jsx(Iconify, {
                      icon: "carbon:chevron-left",
                      width: 16,
                      sx: {
                        mr: 1
                      }
                    }), t("forgot_password.return_to_signin")]
                  })]
                })
              })
            })
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-DyIUyuFB.js.map
