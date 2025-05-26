;
(function () {
  System.register(['./index-legacy-JN-cdx_K.js', './Android-legacy-CUP-ssMq.js', './RadioGroup-legacy-77QCmQW9.js', './Checkbox-legacy-D1Il5eNx.js', './TextField-legacy-IUbRPyh7.js', './RadioGroupContext-legacy-BWjdK-4A.js', './SwitchBase-legacy-DrA1IRRq.js'], function (exports, module) {
    'use strict';

    var reactExports, jsxRuntimeExports, Box, useTheme, useSelector, shallowEqual, useDispatch, valueChange, setDirty, FormControl, Validation, FormControlLabel, RadioGroup, Checkbox, TextField;
    return {
      setters: [module => {
        reactExports = module.r;
        jsxRuntimeExports = module.m;
        Box = module.a4;
      }, module => {
        useTheme = module.b;
        useSelector = module.D;
        shallowEqual = module.E;
        useDispatch = module.H;
        valueChange = module.J;
        setDirty = module.L;
        FormControl = module.K;
        Validation = module.V;
      }, module => {
        FormControlLabel = module.F;
        RadioGroup = module.R;
      }, module => {
        Checkbox = module.C;
      }, module => {
        TextField = module.T;
      }, null, null],
      execute: function execute() {
        function McqAnswer(props) {
          var _props$Answer$content;
          const theme = useTheme();
          const state = useSelector(state2 => {
            var _props$Answer;
            let answerState = state2.runState.values[(_props$Answer = props.Answer) === null || _props$Answer === void 0 ? void 0 : _props$Answer.qualifiedCode];
            return {
              showAnswer: typeof (answerState === null || answerState === void 0 ? void 0 : answerState.relevance) == "undefined" || answerState.relevance,
              checked: (answerState === null || answerState === void 0 ? void 0 : answerState.value) || false
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const handleChange = event => {
            dispatch(valueChange({
              componentCode: event.target.name,
              value: event.target.checked
            }));
            dispatch(setDirty(event.target.name));
            dispatch(setDirty(props.parentCode));
          };
          return state.showAnswer ? /* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
            control: /* @__PURE__ */jsxRuntimeExports.jsx(Checkbox, {
              checked: state.checked,
              onChange: handleChange,
              name: props.Answer.qualifiedCode,
              sx: {
                color: theme.textStyles.text.color
              }
            }),
            label: /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
              sx: {
                fontFamily: theme.textStyles.text.font,
                fontSize: theme.textStyles.text.size
              },
              children: (_props$Answer$content = props.Answer.content) === null || _props$Answer$content === void 0 ? void 0 : _props$Answer$content.label
            })
          }) : "";
        }
        const MCQAnswer = reactExports.memo(McqAnswer);
        function MCQ(props) {
          return /* @__PURE__ */jsxRuntimeExports.jsx(FormControl, {
            component: "fieldset",
            children: /* @__PURE__ */jsxRuntimeExports.jsx(RadioGroup, {
              children: props.component.answers.map(option => {
                if (option.type === "other") {
                  return /* @__PURE__ */jsxRuntimeExports.jsx(McqAnswerOther, {
                    Answer: option,
                    parentCode: props.component.qualifiedCode
                  }, option.qualifiedCode);
                } else {
                  return /* @__PURE__ */jsxRuntimeExports.jsx(MCQAnswer, {
                    Answer: option,
                    parentCode: props.component.qualifiedCode
                  }, option.qualifiedCode);
                }
              })
            })
          });
        }
        function McqAnswerOther(props) {
          const theme = useTheme();
          const nestedTextChild = props.Answer.answers[0];
          const state = useSelector(state2 => {
            var _state2$textChild;
            let own = state2.runState.values[props.Answer.qualifiedCode];
            let textChild = state2.runState.values[nestedTextChild.qualifiedCode];
            let show_errors = state2.runState.values.Survey.show_errors;
            let isChildDirty = state2.templateState[nestedTextChild.qualifiedCode];
            return {
              showAnswer: typeof (own === null || own === void 0 ? void 0 : own.relevance) === "undefined" || own.relevance,
              childInvalid: (show_errors || isChildDirty) && (textChild === null || textChild === void 0 ? void 0 : textChild.relevance) === true && (textChild === null || textChild === void 0 ? void 0 : textChild.validity) === false,
              checked: (own === null || own === void 0 ? void 0 : own.value) || false,
              textValue: (textChild === null || textChild === void 0 ? void 0 : textChild.value) || "",
              textRelevance: (_state2$textChild = state2.textChild) === null || _state2$textChild === void 0 ? void 0 : _state2$textChild.relevance
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const onButtonClick = event => {
            dispatch(valueChange({
              componentCode: event.target.name,
              value: event.target.checked
            }));
            dispatch(setDirty(event.target.name));
            dispatch(setDirty(props.parentCode));
            if (event.target.checked) {
              textInput.current.focus();
            }
          };
          const handleChange = event => {
            dispatch(valueChange({
              componentCode: event.target.name,
              value: event.target.value
            }));
          };
          const textInput = reactExports.useRef();
          const handleFocus = event => {
            dispatch(valueChange({
              componentCode: props.Answer.qualifiedCode,
              value: true
            }));
          };
          const lostFocus = event => {
            dispatch(setDirty(event.target.name));
          };
          const showAnswer = () => {
            var _nestedTextChild$vali, _props$Answer$content2;
            return /* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
              control: /* @__PURE__ */jsxRuntimeExports.jsx(Checkbox, {
                checked: state.checked,
                onChange: onButtonClick,
                name: props.Answer.qualifiedCode,
                sx: {
                  color: theme.textStyles.text.color
                }
              }),
              label: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "w-100",
                children: /* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                  variant: "standard",
                  required: state.textRelevance && ((_nestedTextChild$vali = nestedTextChild.validation) === null || _nestedTextChild$vali === void 0 ? void 0 : _nestedTextChild$vali.required),
                  inputRef: textInput,
                  id: nestedTextChild.qualifiedCode,
                  name: nestedTextChild.qualifiedCode,
                  label: (_props$Answer$content2 = props.Answer.content) === null || _props$Answer$content2 === void 0 ? void 0 : _props$Answer$content2.label,
                  onChange: handleChange,
                  onFocus: handleFocus,
                  onBlur: lostFocus,
                  sx: {
                    label: {
                      color: theme.textStyles.text.color
                    }
                  },
                  value: state.textValue,
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
              })
            });
          };
          return state.showAnswer ? showAnswer() : "";
        }
        const Mcq = exports("default", reactExports.memo(MCQ));
      }
    };
  });
})();
//# sourceMappingURL=Mcq-legacy-Dgw9rTmJ.js.map
