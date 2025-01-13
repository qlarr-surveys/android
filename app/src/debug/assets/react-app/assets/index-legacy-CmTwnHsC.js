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
  System.register(['./index-legacy-DHZhPI7F.js', './yup-legacy-CU6Kjk4F.js', './Web-legacy-DvtjkKFa.js', './router-link-legacy-DFwixNOy.js', './use-service-legacy-Dvd5TXWp.js', './Check-legacy-_76K18mG.js', './Link-legacy-C2dZre7t.js', './Checkbox-legacy-DFqn5IuL.js', './SwitchBase-legacy-Bo564_DK.js', './Tabs-legacy-CR0rpc1G.js', './radioClasses-legacy-BjRfdHDd.js', './tableRowClasses-legacy-6YY-TDzx.js', './TextField-legacy-C04XnsWd.js', './FormControlLabel-legacy-CSy-e4Kr.js'], function (exports, module) {
    'use strict';

    var useNavigate, jsxRuntimeExports, Box, reactExports, create$3, create$6, LoadingButton, o, useForm, FormProvider, RHFTextField, Iconify, RouterLink, Typography, Button, useService, useTranslation, useDispatch, setLoading, Stack, Image, routes, Check, Link;
    return {
      setters: [module => {
        useNavigate = module.s;
        jsxRuntimeExports = module.j;
        Box = module.B;
        reactExports = module.r;
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
        RouterLink = module.R;
      }, module => {
        Typography = module.T;
        Button = module.aD;
        useService = module.R;
        useTranslation = module.M;
        useDispatch = module.U;
        setLoading = module.Z;
        Stack = module.aL;
        Image = module.at;
        routes = module.X;
      }, module => {
        Check = module.C;
      }, module => {
        Link = module.L;
      }, null, null, null, null, null, null, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._successText_19zdx_1 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 2rem;\n  margin: 2rem 0rem;\n  border-radius: 5px;\n  padding: 10px;\n  text-align: center;\n}\n._iconContainer_19zdx_12 {\n  background-color: #e6ffe6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  border-radius: 9999px;\n}\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        exports("default", ForgotPasswordView);
        const successText = "_successText_19zdx_1";
        const iconContainer = "_iconContainer_19zdx_12";
        const styles = {
          successText: successText,
          iconContainer: iconContainer
        };
        const SuccessMessage = ({
          message,
          t
        }) => {
          const navigate = useNavigate();
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            className: styles.successText,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Box, {
              className: styles.iconContainer,
              children: /* @__PURE__ */jsxRuntimeExports.jsx(Check, {
                sx: {
                  fontSize: "40px",
                  color: "#32CD32",
                  stroke: "#32CD32",
                  strokeWidth: 1
                }
              })
            }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                variant: "h4",
                color: "primary",
                children: t("email.check")
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                variant: "body1",
                mt: 1,
                color: "textSecondary",
                children: t(`${message}`)
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
              onClick: () => {
                navigate("/login");
              },
              fullWidth: true,
              size: "large",
              color: "primary",
              variant: "contained",
              children: t("login.login")
            })]
          });
        };
        function ForgotPasswordView() {
          const authService = useService("auth");
          const _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          const _reactExports$useStat = reactExports.useState(false),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            isSuccess = _reactExports$useStat2[0],
            setSuccess = _reactExports$useStat2[1];
          const dispatch = useDispatch();
          const ForgotPasswordSchema = create$3().shape({
            email: create$6().required(t("email_required")).matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i, t("error.invalid_email"))
          });
          const defaultValues = {
            email: ""
          };
          const methods = useForm({
            resolver: o(ForgotPasswordSchema),
            defaultValues
          });
          const reset = methods.reset,
            handleSubmit = methods.handleSubmit,
            isSubmitting = methods.formState.isSubmitting;
          const onSubmit = handleSubmit(/*#__PURE__*/function () {
            var _ref = _asyncToGenerator(function* (data) {
              try {
                dispatch(setLoading(true));
                yield authService.forgotPassword(data.email);
                setSuccess(true);
              } catch (e) {} finally {
                dispatch(setLoading(false));
              }
            });
            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }());
          return /* @__PURE__ */jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
            children: isSuccess ? /* @__PURE__ */jsxRuntimeExports.jsx(SuccessMessage, {
              t,
              message: "forgot_password.success"
            }) : /* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
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
                children: t("forgot_password.title")
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                variant: "body2",
                color: "textSecondary",
                mb: 5,
                children: t("forgot_password.helper_text")
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(FormProvider, {
                methods,
                onSubmit: handleSubmit(onSubmit),
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(RHFTextField, {
                  name: "email",
                  hiddenLabel: true,
                  placeholder: t("label.email")
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
                  children: t("forgot_password.send")
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
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-CmTwnHsC.js.map
