;
(function () {
  System.register(['./index-legacy-BpJl3CBN.js', './Android-legacy-BYdjD6gG.js', './RadioGroup-legacy-UUPuFTf1.js', './Checkbox-legacy-DZtPtM8P.js', './RadioGroupContext-legacy-CVFlt1XE.js', './SwitchBase-legacy-D16WBbX0.js'], function (exports, module) {
    'use strict';

    var reactExports, jsxRuntimeExports, useTheme, useDispatch, useSelector, shallowEqual, Content, valueChange, setDirty, FormControl, TextField, Validation, FormControlLabel, RadioGroup, Checkbox;
    return {
      setters: [module => {
        reactExports = module.r;
        jsxRuntimeExports = module.m;
      }, module => {
        useTheme = module.b;
        useDispatch = module.J;
        useSelector = module.E;
        shallowEqual = module.H;
        Content = module.O;
        valueChange = module.L;
        setDirty = module.Q;
        FormControl = module.N;
        TextField = module.K;
        Validation = module.V;
      }, module => {
        FormControlLabel = module.F;
        RadioGroup = module.R;
      }, module => {
        Checkbox = module.C;
      }, null, null],
      execute: function execute() {
        function McqAnswer(props) {
          var _props$Answer$content;
          const theme = useTheme();
          const dispatch = useDispatch();
          const relevance = useSelector(state => {
            var _props$Answer;
            let answerState = state.runState.values[(_props$Answer = props.Answer) === null || _props$Answer === void 0 ? void 0 : _props$Answer.qualifiedCode];
            return typeof (answerState === null || answerState === void 0 ? void 0 : answerState.relevance) == "undefined" || answerState.relevance;
          }, shallowEqual);
          const parentValue = useSelector(state => {
            return state.runState.values[props.parentCode].value || [];
          }, shallowEqual);
          const handleChange = event => {
            let value = [...parentValue];
            if (event.target.checked) {
              value.push(props.Answer.code);
            } else {
              value = value.filter(el => el !== props.Answer.code);
            }
            dispatch(valueChange({
              componentCode: props.parentCode,
              value
            }));
            dispatch(setDirty(event.target.name));
            dispatch(setDirty(props.parentCode));
          };
          return relevance ? /* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
            control: /* @__PURE__ */jsxRuntimeExports.jsx(Checkbox, {
              checked: parentValue.indexOf(props.Answer.code) > -1,
              onChange: handleChange,
              name: props.Answer.qualifiedCode,
              sx: {
                color: theme.textStyles.text.color
              }
            }),
            label: /* @__PURE__ */jsxRuntimeExports.jsx(Content, {
              elementCode: props.Answer.code,
              fontFamily: theme.textStyles.text.font,
              color: theme.textStyles.text.color,
              fontSize: theme.textStyles.text.size,
              name: "label",
              lang: props.lang,
              content: (_props$Answer$content = props.Answer.content) === null || _props$Answer$content === void 0 ? void 0 : _props$Answer$content.label
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
                    lang: props.lang,
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
          const parentValue = useSelector(state2 => {
            return state2.runState.values[props.parentCode].value || [];
          }, shallowEqual);
          const isSelected = parentValue.indexOf(props.Answer.code) > -1;
          const state = useSelector(state2 => {
            var _state2$textChild;
            let own = state2.runState.values[props.Answer.qualifiedCode];
            let textChild = state2.runState.values[nestedTextChild.qualifiedCode];
            let show_errors = state2.runState.values.Survey.show_errors;
            let isChildDirty = state2.templateState[nestedTextChild.qualifiedCode];
            return {
              showAnswer: typeof (own === null || own === void 0 ? void 0 : own.relevance) === "undefined" || own.relevance,
              childInvalid: (show_errors || isChildDirty) && (textChild === null || textChild === void 0 ? void 0 : textChild.relevance) === true && (textChild === null || textChild === void 0 ? void 0 : textChild.validity) === false,
              textValue: (textChild === null || textChild === void 0 ? void 0 : textChild.value) || "",
              textRelevance: (_state2$textChild = state2.textChild) === null || _state2$textChild === void 0 ? void 0 : _state2$textChild.relevance
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const onButtonClick = event => {
            let value = [...parentValue];
            if (event.target.checked) {
              value.push(props.Answer.code);
            } else {
              value = value.filter(el => el !== props.Answer.code);
            }
            dispatch(valueChange({
              componentCode: props.parentCode,
              value
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
            let value = [...parentValue];
            if (value.indexOf(props.Answer.code) == -1) {
              value.push(props.Answer.code);
              dispatch(valueChange({
                componentCode: props.parentCode,
                value
              }));
            }
          };
          const lostFocus = event => {
            dispatch(setDirty(event.target.name));
          };
          const showAnswer = () => {
            var _nestedTextChild$vali, _props$Answer$content2;
            return /* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
              control: /* @__PURE__ */jsxRuntimeExports.jsx(Checkbox, {
                checked: isSelected,
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
//# sourceMappingURL=Mcq-legacy-DA9tMHcz.js.map
