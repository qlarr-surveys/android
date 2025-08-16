;
(function () {
  System.register(['./index-legacy-BE0djssm.js', './Android-legacy-DcRmsPsH.js', './RadioGroup-legacy-Duig-UL1.js', './Checkbox-legacy-CO4XXE8K.js', './RadioGroupContext-legacy-CxgSltBY.js', './SwitchBase-legacy-BalHamwu.js'], function (exports, module) {
    'use strict';

    var reactExports, jsxRuntimeExports, useTheme, useDispatch, useSelector, shallowEqual, Content, alpha, valueChange, setDirty, FormControl, TextField, Validation, FormControlLabel, RadioGroup, Checkbox;
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
        alpha = module.v;
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
          const disabled = props.Answer.type !== "all" && props.allSelected || props.Answer.type !== "none" && props.noneSelected;
          const relevance = useSelector(state => {
            var _props$Answer;
            let answerState = state.runState.values[(_props$Answer = props.Answer) === null || _props$Answer === void 0 ? void 0 : _props$Answer.qualifiedCode];
            return typeof (answerState === null || answerState === void 0 ? void 0 : answerState.relevance) == "undefined" || answerState.relevance;
          }, shallowEqual);
          const handleChange = event => {
            let value = [...props.parentValue];
            if (event.target.checked && props.Answer.code === "Aall") {
              value = props.allCodes;
            } else if (!event.target.checked && props.Answer.code === "Aall") {
              value = [];
            } else if (event.target.checked && props.Answer.code === "Anone") {
              value = ["Anone"];
            } else if (event.target.checked) {
              value.push(props.Answer.code);
            } else {
              value = value.filter(el => el !== props.Answer.code);
            }
            console.log(value);
            dispatch(valueChange({
              componentCode: props.parentCode,
              value
            }));
            dispatch(setDirty(event.target.name));
            dispatch(setDirty(props.parentCode));
          };
          return relevance ? /* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
            control: /* @__PURE__ */jsxRuntimeExports.jsx(Checkbox, {
              checked: props.parentValue.indexOf(props.Answer.code) > -1 || props.Answer.code === "Aall" && props.allSelected,
              onChange: handleChange,
              disabled,
              name: props.Answer.qualifiedCode,
              sx: {
                color: theme.textStyles.text.color
              }
            }),
            label: /* @__PURE__ */jsxRuntimeExports.jsx(Content, {
              elementCode: props.Answer.code,
              fontFamily: theme.textStyles.text.font,
              color: alpha(theme.textStyles.text.color, disabled ? 0.5 : 1),
              fontSize: theme.textStyles.text.size,
              name: "label",
              lang: props.lang,
              content: (_props$Answer$content = props.Answer.content) === null || _props$Answer$content === void 0 ? void 0 : _props$Answer$content.label
            })
          }) : "";
        }
        const MCQAnswer = reactExports.memo(McqAnswer);
        function MCQ(props) {
          const parentValue = useSelector(state => {
            return state.runState.values[props.component.qualifiedCode].value || [];
          }, shallowEqual);
          const allCodes = props.component.answers.filter(answer => answer.type !== "all" && answer.type !== "none" && answer.type !== "other").map(answer => answer.code);
          const allSelected = allCodes.every(code => parentValue.indexOf(code) > -1);
          const noneSelected = parentValue.indexOf("Anone") > -1;
          return /* @__PURE__ */jsxRuntimeExports.jsx(FormControl, {
            component: "fieldset",
            children: /* @__PURE__ */jsxRuntimeExports.jsx(RadioGroup, {
              children: props.component.answers.map(option => {
                if (option.type === "other") {
                  return /* @__PURE__ */jsxRuntimeExports.jsx(McqAnswerOther, {
                    disabled: allSelected || noneSelected,
                    allSelected,
                    noneSelected,
                    Answer: option,
                    parentCode: props.component.qualifiedCode
                  }, option.qualifiedCode);
                } else {
                  return /* @__PURE__ */jsxRuntimeExports.jsx(MCQAnswer, {
                    lang: props.lang,
                    parentValue,
                    Answer: option,
                    allCodes,
                    parentCode: props.component.qualifiedCode,
                    allSelected,
                    noneSelected
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
                disabled: props.disabled,
                onChange: onButtonClick,
                name: props.Answer.qualifiedCode,
                sx: {
                  color: theme.textStyles.text.color
                }
              }),
              label: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                children: /* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                  variant: "standard",
                  required: state.textRelevance && ((_nestedTextChild$vali = nestedTextChild.validation) === null || _nestedTextChild$vali === void 0 ? void 0 : _nestedTextChild$vali.required),
                  inputRef: textInput,
                  id: nestedTextChild.qualifiedCode,
                  name: nestedTextChild.qualifiedCode,
                  disabled: props.disabled,
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
//# sourceMappingURL=Mcq-legacy-CErNDowf.js.map
