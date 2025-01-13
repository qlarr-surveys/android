;
(function () {
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
  function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  System.register(['./index-legacy-DHZhPI7F.js', './yup-legacy-CU6Kjk4F.js', './Web-legacy-DvtjkKFa.js', './use-service-legacy-Dvd5TXWp.js', './use-boolean-legacy-ByhHUGX5.js', './Link-legacy-C2dZre7t.js', './index-legacy-C-5PdcPg.js', './InputAdornment-legacy-Bj6eETKt.js', './Checkbox-legacy-DFqn5IuL.js', './SwitchBase-legacy-Bo564_DK.js', './Tabs-legacy-CR0rpc1G.js', './radioClasses-legacy-BjRfdHDd.js', './tableRowClasses-legacy-6YY-TDzx.js', './TextField-legacy-C04XnsWd.js', './FormControlLabel-legacy-CSy-e4Kr.js'], function (exports, module) {
    'use strict';

    var reactExports, jsxRuntimeExports, Box, useNavigate, create$3, create$6, LoadingButton, o, addMethod, create$9, useForm, FormProvider, RHFCode, Iconify, RHFTextField, Snackbar, Alert, useService, Modal, Stack, Image, Typography, Button, useSelector, useTranslation, TokenService, useDispatch, setLoading, PROCESSED_ERRORS, Container, IconButton, routes, useBoolean, Link, SuccessSnackbar, InputAdornment;
    return {
      setters: [module => {
        reactExports = module.r;
        jsxRuntimeExports = module.j;
        Box = module.B;
        useNavigate = module.s;
      }, module => {
        create$3 = module.c;
        create$6 = module.a;
        LoadingButton = module.L;
        o = module.o;
        addMethod = module.d;
        create$9 = module.b;
      }, module => {
        useForm = module.u;
        FormProvider = module.F;
        RHFCode = module.r;
        Iconify = module.I;
        RHFTextField = module.R;
        Snackbar = module.a;
        Alert = module.A;
      }, module => {
        useService = module.R;
        Modal = module.aM;
        Stack = module.aL;
        Image = module.at;
        Typography = module.T;
        Button = module.aD;
        useSelector = module.H;
        useTranslation = module.M;
        TokenService = module.J;
        useDispatch = module.U;
        setLoading = module.Z;
        PROCESSED_ERRORS = module.aN;
        Container = module.aK;
        IconButton = module.I;
        routes = module.X;
      }, module => {
        useBoolean = module.u;
      }, module => {
        Link = module.L;
      }, module => {
        SuccessSnackbar = module.S;
      }, module => {
        InputAdornment = module.I;
      }, null, null, null, null, null, null, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._mainContainer_1gv2g_1 {\n  height: calc(100vh - 64px);\n  overflow: auto;\n  display: flex;\n  justify-content: center;\n  align-items: start;\n  width: 100vw;\n}\n\n._content_1gv2g_10 {\n  margin-top: 30px;\n}\n\n._verifyContainer_rwmnr_1 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  box-shadow: -24px 24px 72px -8px rgba(145, 158, 171, 0.24);\n  padding: 32px;\n  border-radius: 16px;\n  width: 400px;\n  background-color: #fff;\n}\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        exports("default", ProfileView);
        const mainContainer = "_mainContainer_1gv2g_1";
        const content = "_content_1gv2g_10";
        const styles$1 = {
          mainContainer: mainContainer,
          content: content
        };
        const verifyContainer = "_verifyContainer_rwmnr_1";
        const styles = {
          verifyContainer: verifyContainer
        };
        function VerifyView({
          t,
          open,
          email,
          resend,
          onClose
        }) {
          const userService = useService("user");
          const _reactExports$useStat = reactExports.useState(false),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            loading = _reactExports$useStat2[0],
            setLoading = _reactExports$useStat2[1];
          const VerifySchema = create$3().shape({
            pin: create$6().min(6, `${t("email.code_characters")}`).required(`${t("email.code_required")}`)
          });
          const defaultValues = {
            pin: ""
          };
          const methods = useForm({
            mode: "onChange",
            resolver: o(VerifySchema),
            defaultValues
          });
          const handleSubmit = methods.handleSubmit,
            setError = methods.setError,
            reset = methods.reset;
          const onSubmit = handleSubmit(/*#__PURE__*/function () {
            var _ref = _asyncToGenerator(function* (data) {
              setLoading(true);
              userService.confirmEmail(data).then(() => {
                setLoading(false);
                onClose(true);
                reset(defaultValues);
              }).catch(e => {
                setLoading(false);
                setError("pin", {
                  type: "manual",
                  message: t(`processed_errors.${e.name}`)
                });
              });
            });
            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }());
          return /* @__PURE__ */jsxRuntimeExports.jsx(Modal, {
            open,
            "aria-labelledby": "email-verification-modal",
            "aria-describedby": "email-verification-modal-description",
            children: /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
              className: styles.verifyContainer,
              children: /* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
                sx: {
                  textAlign: "center"
                },
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Image, {
                  alt: "email inbox",
                  src: "/ic_email_inbox.svg",
                  sx: {
                    mb: 5,
                    width: 96,
                    height: 96,
                    mx: "auto"
                  }
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                  variant: "h3",
                  children: t("email.check")
                }), /* @__PURE__ */jsxRuntimeExports.jsxs(Typography, {
                  variant: "body2",
                  sx: {
                    mt: 2,
                    mb: 5,
                    color: "text.secondary"
                  },
                  children: [t("email.confirmation_code1"), " ", email, " ", t("email.confirmation_code2")]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs(FormProvider, {
                  methods,
                  onSubmit,
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(RHFCode, {
                    name: "pin"
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(LoadingButton, {
                    fullWidth: true,
                    size: "large",
                    color: "inherit",
                    type: "submit",
                    variant: "contained",
                    loading,
                    sx: {
                      mt: 3
                    },
                    children: t("email.verify")
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs(Typography, {
                  variant: "body2",
                  align: "center",
                  sx: {
                    mt: 3
                  },
                  children: [t("email.dont_have_code"), /* @__PURE__ */jsxRuntimeExports.jsxs(Link, {
                    variant: "subtitle2",
                    onClick: () => resend(),
                    underline: "none",
                    sx: {
                      cursor: "pointer"
                    },
                    children: [" ", t("email.resend_code")]
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsxs(Button, {
                  onClick: () => onClose(false),
                  color: "inherit",
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
                  }), t("action_btn.close")]
                })]
              })
            })
          });
        }
        const OPERATION = {
          NONE: "",
          CHANGE_EMAIL: "CHANGE_EMAIL",
          CHANGE_PASSWORD: "CHANGE_PASSWORD"
        };
        function ProfileView() {
          const authService = useService("auth");
          const userService = useService("user");
          const navigate = useNavigate();
          const isLoading = useSelector(state => {
            return state.editState.loading;
          });
          const _useTranslation = useTranslation("manage"),
            t = _useTranslation.t;
          const passwordShow = useBoolean();
          const userId = TokenService.getUser().id;
          const _reactExports$useStat3 = reactExports.useState({}),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            user = _reactExports$useStat4[0],
            setUser = _reactExports$useStat4[1];
          const _reactExports$useStat5 = reactExports.useState(false),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            verifyEmailOpen = _reactExports$useStat6[0],
            setVerifyEmailOpen = _reactExports$useStat6[1];
          const _reactExports$useStat7 = reactExports.useState(false),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            disableNameFields = _reactExports$useStat8[0],
            setDisableNameFields = _reactExports$useStat8[1];
          const _reactExports$useStat9 = reactExports.useState(false),
            _reactExports$useStat10 = _slicedToArray(_reactExports$useStat9, 2),
            snackbarOpen = _reactExports$useStat10[0],
            setSnackbarOpen = _reactExports$useStat10[1];
          const _reactExports$useStat11 = reactExports.useState(false),
            _reactExports$useStat12 = _slicedToArray(_reactExports$useStat11, 2),
            updated = _reactExports$useStat12[0],
            setUpdated = _reactExports$useStat12[1];
          const _reactExports$useStat13 = reactExports.useState(OPERATION.NONE),
            _reactExports$useStat14 = _slicedToArray(_reactExports$useStat13, 2),
            operation = _reactExports$useStat14[0],
            setOperation = _reactExports$useStat14[1];
          const dispatch = useDispatch();
          const handleCloseSnackbar = () => {
            setSnackbarOpen(false);
          };
          addMethod(create$6, "noWhitespace", function (errorMessage) {
            return this.test("no-whitespace", errorMessage, function (value) {
              const path = this.path,
                createError = this.createError;
              return value !== null && value !== void 0 && value.trim() ? true : createError({
                path,
                message: errorMessage
              });
            });
          });
          const getValidationSchema = operation2 => {
            let schemaFields = {
              firstName: create$6().required(t("firstname_required")).noWhitespace(t("error.invalid_first_name")).max(50, t("error.first_name_too_long")).matches(/^[A-Za-z]+$/, t("error.invalid_first_name")),
              lastName: create$6().required(t("lastname_required")).noWhitespace(t("error.invalid_last_name")).max(50, t("error.last_name_too_long")).matches(/^[A-Za-z]+$/, t("error.invalid_last_name"))
            };
            if (operation2 === OPERATION.CHANGE_EMAIL) {
              schemaFields = _objectSpread(_objectSpread({}, schemaFields), {}, {
                currentPassword: create$6().required(t("password_required")),
                email: create$6().required(t("email_required")).matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i, t("error.invalid_email"))
              });
            }
            if (operation2 === OPERATION.CHANGE_PASSWORD) {
              schemaFields = _objectSpread(_objectSpread({}, schemaFields), {}, {
                currentPassword: create$6().required(t("password_required")).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, t("error.invalid_password")),
                newPassword: create$6().required(t("password_required")),
                confirmNewPassword: create$6().required(t("password_required")).oneOf([create$9("newPassword"), null], t("error.password_should_match"))
              });
            }
            return create$3().shape(schemaFields);
          };
          const criticalChange = operation === OPERATION.CHANGE_EMAIL || operation === OPERATION.CHANGE_PASSWORD;
          let defaultValues = {
            firstName: "",
            lastName: "",
            email: "",
            currentPassword: "",
            newPassword: "",
            confirmNewPassword: ""
          };
          const logout = () => {
            authService.logout().then(() => {
              navigate(routes.login);
            }).catch(e => {
              navigate(routes.login);
            });
          };
          const methods = useForm({
            resolver: o(getValidationSchema(operation)),
            defaultValues
          });
          const watch = methods.watch,
            setError = methods.setError,
            reset = methods.reset,
            handleSubmit = methods.handleSubmit;
          const watchedEmail = watch("email");
          reactExports.useEffect(() => {
            if (watchedEmail !== user.email) {
              reset(_objectSpread(_objectSpread({}, methods.getValues()), {}, {
                firstName: user.firstName,
                lastName: user.lastName
              }));
              setDisableNameFields(true);
            } else {
              setDisableNameFields(false);
            }
          }, [watchedEmail, user.email, reset, methods]);
          reactExports.useEffect(() => {
            userService.getUser({
              userId
            }).then(response => {
              const userData = {
                firstName: response.firstName,
                lastName: response.lastName,
                email: response.email
              };
              setUser(response);
              reset(userData);
            });
          }, [reset, userId]);
          reactExports.useEffect(() => {
            const schema = getValidationSchema(operation);
            methods.reset(_objectSpread({}, methods.getValues()), {
              errors: true,
              schema
            });
          }, [operation, methods]);
          const onSubmit = handleSubmit(/*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator(function* (data) {
              const firstName = data.firstName,
                lastName = data.lastName,
                email = data.email,
                newPassword = data.newPassword,
                currentPassword = data.currentPassword;
              const model = {};
              if (user.firstName !== firstName) {
                model.firstName = firstName;
              }
              if (user.lastName !== lastName) {
                model.lastName = lastName;
              }
              if (user.email !== email) {
                model.email = email;
              }
              if (currentPassword !== "") {
                model.password = currentPassword;
              }
              if (newPassword !== "") {
                model.newPassword = newPassword;
              }
              dispatch(setLoading(true));
              userService.updateUserProfile(model).then(() => {
                if (model.email && model.email !== user.email) {
                  setVerifyEmailOpen(true);
                } else if (criticalChange) {
                  logout();
                } else {
                  setUpdated(true);
                }
              }).catch(processedError => {
                if (processedError.name == PROCESSED_ERRORS.DUPLICATE_EMAIL.name) {
                  setError("email", {
                    type: "manual",
                    message: t(`processed_errors.${processedError.name}`)
                  });
                } else if (processedError.name == PROCESSED_ERRORS.WRONG_CREDENTIALS.name) {
                  setError("currentPassword", {
                    type: "manual",
                    message: t(`error.incorrect_password`)
                  });
                }
              }).finally(() => {
                dispatch(setLoading(false));
              });
            });
            return function (_x2) {
              return _ref2.apply(this, arguments);
            };
          }());
          const handleCloseModal = isSuccess => {
            setVerifyEmailOpen(false);
            if (isSuccess) {
              setSnackbarOpen(true);
              setTimeout(() => {
                logout();
              }, 300);
            }
            setOperation(OPERATION.NONE);
            userService.getUser({
              userId
            }).then(response => {
              const userData = {
                firstName: response.firstName,
                lastName: response.lastName,
                email: response.email
              };
              setUser(response);
              reset(userData);
            });
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
            className: styles$1.mainContainer,
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(Container, {
              className: styles$1.content,
              children: [updated && /* @__PURE__ */jsxRuntimeExports.jsx(SuccessSnackbar, {
                success: "updated",
                left: "56"
              }), /* @__PURE__ */jsxRuntimeExports.jsxs(FormProvider, {
                methods,
                onSubmit,
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                  variant: "h5",
                  sx: {
                    mb: 3
                  },
                  children: "Personal"
                }), /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                  rowGap: 2.5,
                  columnGap: 2,
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)"
                  },
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(RHFTextField, {
                    disabled: disableNameFields,
                    name: "firstName",
                    label: t("label.first_name")
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(RHFTextField, {
                    disabled: disableNameFields,
                    name: "lastName",
                    label: t("label.last_name")
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(RHFTextField, {
                    disabled: operation != OPERATION.CHANGE_EMAIL,
                    name: "email",
                    label: t("label.email")
                  })]
                }), /* @__PURE__ */jsxRuntimeExports.jsx(Stack, {
                  spacing: 3,
                  sx: {
                    my: 5
                  },
                  children: /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                    children: [operation == OPERATION.CHANGE_PASSWORD && /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                      children: [/* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                        variant: "h5",
                        children: t("profile.change_password")
                      }), /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                        variant: "body2",
                        sx: {
                          color: "error.main",
                          mb: 1
                        },
                        children: t("profile.hint")
                      })]
                    }), operation == OPERATION.CHANGE_EMAIL && /* @__PURE__ */jsxRuntimeExports.jsx(Typography, {
                      variant: "body2",
                      sx: {
                        color: "error.main"
                      },
                      children: t("profile.hint")
                    }), /* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
                      spacing: 2.5,
                      children: [criticalChange && /* @__PURE__ */jsxRuntimeExports.jsx(RHFTextField, {
                        name: "currentPassword",
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
                      }), operation == OPERATION.CHANGE_PASSWORD && /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                        children: [/* @__PURE__ */jsxRuntimeExports.jsx(RHFTextField, {
                          name: "newPassword",
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
                          name: "confirmNewPassword",
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
                      })]
                    })]
                  })
                }), /* @__PURE__ */jsxRuntimeExports.jsxs(Stack, {
                  spacing: 1,
                  direction: "row",
                  children: [operation == OPERATION.NONE && /* @__PURE__ */jsxRuntimeExports.jsx(LoadingButton, {
                    color: "inherit",
                    size: "large",
                    variant: "contained",
                    onClick: () => setOperation(OPERATION.CHANGE_EMAIL),
                    children: t("profile.change_email")
                  }), operation == OPERATION.NONE && /* @__PURE__ */jsxRuntimeExports.jsx(LoadingButton, {
                    color: "inherit",
                    size: "large",
                    variant: "contained",
                    onClick: () => setOperation(OPERATION.CHANGE_PASSWORD),
                    children: t("profile.change_password")
                  }), criticalChange && /* @__PURE__ */jsxRuntimeExports.jsx(LoadingButton, {
                    color: "inherit",
                    size: "large",
                    variant: "contained",
                    onClick: () => setOperation(OPERATION.NONE),
                    children: t("profile.cancel")
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(LoadingButton, {
                    color: "inherit",
                    size: "large",
                    type: "submit",
                    variant: "contained",
                    loading: isLoading,
                    children: t("profile.save")
                  })]
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsx(VerifyView, {
                t,
                open: verifyEmailOpen,
                email: user === null || user === void 0 ? void 0 : user.email,
                resend: onSubmit,
                onClose: handleCloseModal
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Snackbar, {
                open: snackbarOpen,
                autoHideDuration: 6e3,
                onClose: handleCloseSnackbar,
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "center"
                },
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Alert, {
                  onClose: handleCloseSnackbar,
                  severity: "success",
                  variant: "filled",
                  sx: {
                    width: "100%"
                  },
                  children: t("email.email_changed")
                })
              })]
            })
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-DnK6QfB_.js.map
