;
(function () {
  System.register(['./index-legacy-BLatMfxz.js', './use-service-legacy-DLuVKbJp.js', './index-legacy-CAdDVn6v.js', './RadioGroup-legacy-U3rnWh7n.js', './FormControlLabel-legacy-CA95rTY_.js', './Radio-legacy-u7FYCqgd.js', './TextField-legacy-Cn7jw8uN.js', './isTouchDevice-legacy-Hx_ZLTbf.js', './common-legacy-BfMJ8X0r.js', './CardMedia-legacy-CywE8xFy.js', './Card-legacy-DAyj9G4N.js', './Toolbar-legacy-gatoM_w3.js', './RadioGroupContext-legacy-Bbu9KNNs.js', './FormGroup-legacy-DOXCNPX6.js', './SwitchBase-legacy-C9xQX8jx.js', './radioClasses-legacy-DphQBUmK.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports, reactExports, Box, useSelector, shallowEqual, useDispatch, FormControl, useTheme, valueChange, setDirty, Validation, RadioGroup, FormControlLabel, Radio, TextField;
    return {
      setters: [module => {
        jsxRuntimeExports = module.j;
        reactExports = module.r;
        Box = module.B;
      }, module => {
        useSelector = module.H;
        shallowEqual = module.aR;
        useDispatch = module.R;
        FormControl = module.aw;
        useTheme = module.w;
        valueChange = module.aS;
        setDirty = module.a_;
      }, module => {
        Validation = module.V;
      }, module => {
        RadioGroup = module.R;
      }, module => {
        FormControlLabel = module.F;
      }, module => {
        Radio = module.R;
      }, module => {
        TextField = module.T;
      }, null, null, null, null, null, null, null, null, null],
      execute: function execute() {
        exports("default", SCQ);
        function SCQ(props) {
          const state = useSelector(state2 => {
            let questionState = state2.runState.values[props.component.qualifiedCode];
            return {
              value: (questionState === null || questionState === void 0 ? void 0 : questionState.value) || ""
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const handleChange = event => {
            dispatch(valueChange({
              componentCode: event.target.name,
              value: event.target.value
            }));
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(FormControl, {
            component: "fieldset",
            children: /* @__PURE__ */jsxRuntimeExports.jsx(RadioGroup, {
              name: props.component.qualifiedCode,
              value: state.value,
              onChange: handleChange,
              children: props.component.answers.map(option => {
                if (option.type === "other") {
                  return /* @__PURE__ */jsxRuntimeExports.jsx(ScqChoiceOther, {
                    parentCode: props.component.qualifiedCode,
                    Choice: option
                  }, option.qualifiedCode);
                } else {
                  return /* @__PURE__ */jsxRuntimeExports.jsx(ScqChoice, {
                    Choice: option
                  }, option.qualifiedCode);
                }
              })
            })
          });
        }
        function ScqChoice(props) {
          const theme = useTheme();
          const showChoice = () => {
            var _props$Choice$content;
            return /* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
              control: /* @__PURE__ */jsxRuntimeExports.jsx(Radio, {
                sx: {
                  color: theme.textStyles.text.color
                }
              }),
              label: /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
                sx: {
                  fontFamily: theme.textStyles.text.font,
                  color: theme.textStyles.text.color,
                  fontSize: theme.textStyles.text.size
                },
                children: (_props$Choice$content = props.Choice.content) === null || _props$Choice$content === void 0 ? void 0 : _props$Choice$content.label
              }),
              value: props.Choice.code
            }, props.Choice.qualifiedCode);
          };
          return showChoice ? showChoice() : "";
        }
        function ScqChoiceOther(props) {
          const theme = useTheme();
          const nestedTextChild = props.Choice.answers[0];
          const state = useSelector(state2 => {
            let choiceState = state2.runState.values[props.Choice.qualifiedCode];
            let childState = state2.runState.values[nestedTextChild.qualifiedCode];
            let show_errors = state2.runState.values.Survey.show_errors;
            let isChildDirty = state2.templateState[nestedTextChild.qualifiedCode];
            return {
              showChoice: typeof (choiceState === null || choiceState === void 0 ? void 0 : choiceState.relevance) === "undefined" || choiceState.relevance,
              childInvalid: (show_errors || isChildDirty) && (childState === null || childState === void 0 ? void 0 : childState.relevance) === true && (childState === null || childState === void 0 ? void 0 : childState.validity) === false,
              value: (childState === null || childState === void 0 ? void 0 : childState.value) || ""
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const handleChange = event => {
            dispatch(valueChange({
              componentCode: event.target.name,
              value: event.target.value
            }));
          };
          const handleFocus = event => {
            dispatch(valueChange({
              componentCode: props.parentCode,
              value: props.Choice.code
            }));
          };
          const lostFocus = event => {
            dispatch(setDirty(event.target.name));
          };
          const textInput = reactExports.useRef();
          const onButtonClick = event => {
            if (event.target.checked) {
              textInput.current.focus();
            }
          };
          const showChoice = () => {
            var _state$textChild, _nestedTextChild$vali, _props$Choice$content2;
            return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "text-left d-flex",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
                control: /* @__PURE__ */jsxRuntimeExports.jsx(Radio, {
                  sx: {
                    color: theme.textStyles.text.color
                  }
                }),
                label: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "w-100",
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                    variant: "standard",
                    required: ((_state$textChild = state.textChild) === null || _state$textChild === void 0 ? void 0 : _state$textChild.relevance) && ((_nestedTextChild$vali = nestedTextChild.validation) === null || _nestedTextChild$vali === void 0 ? void 0 : _nestedTextChild$vali.required),
                    sx: {
                      label: {
                        color: theme.textStyles.text.color
                      }
                    },
                    inputRef: textInput,
                    id: nestedTextChild.qualifiedCode,
                    name: nestedTextChild.qualifiedCode,
                    label: (_props$Choice$content2 = props.Choice.content) === null || _props$Choice$content2 === void 0 ? void 0 : _props$Choice$content2.label,
                    onChange: handleChange,
                    onFocus: handleFocus,
                    onBlur: lostFocus,
                    value: state.value,
                    InputProps: {
                      sx: {
                        fontFamily: theme.textStyles.text.font,
                        color: theme.textStyles.text.color,
                        fontSize: theme.textStyles.text.size
                      }
                    },
                    helperText: state.childInvalid ? /* @__PURE__ */jsxRuntimeExports.jsx(Validation, {
                      component: nestedTextChild,
                      limit: 1
                    }) : ""
                  })
                }),
                onChange: onButtonClick,
                value: props.Choice.code
              }, props.Choice.qualifiedCode), /* @__PURE__ */jsxRuntimeExports.jsx("p", {})]
            });
          };
          return state.showChoice ? showChoice() : "";
        }
      }
    };
  });
})();
//# sourceMappingURL=Scq-legacy-Bf1fyyUZ.js.map
