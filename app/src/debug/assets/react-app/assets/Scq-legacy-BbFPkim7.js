;
(function () {
  System.register(['./index-legacy-CZICsoLH.js', './Android-legacy-B5yqEvUd.js', './RadioGroup-legacy-oOGa2QC4.js', './Radio-legacy-VKLJfwnI.js', './RadioGroupContext-legacy-DIJcB8lX.js', './SwitchBase-legacy-D7FXQbp2.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports, reactExports, useSelector, shallowEqual, useDispatch, FormControl, valueChange, useTheme, Content, TextField, Validation, setDirty, RadioGroup, FormControlLabel, Radio;
    return {
      setters: [module => {
        jsxRuntimeExports = module.m;
        reactExports = module.r;
      }, module => {
        useSelector = module.K;
        shallowEqual = module.L;
        useDispatch = module.M;
        FormControl = module.Q;
        valueChange = module.O;
        useTheme = module.b;
        Content = module.R;
        TextField = module.N;
        Validation = module.V;
        setDirty = module.S;
      }, module => {
        RadioGroup = module.R;
        FormControlLabel = module.F;
      }, module => {
        Radio = module.R;
      }, null, null],
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
                    lang: props.lang,
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
          var _props$Choice$content;
          const theme = useTheme();
          const relevance = useSelector(state => {
            var _state$runState$value, _state$runState$value2;
            return (_state$runState$value = (_state$runState$value2 = state.runState.values[props.Choice.qualifiedCode]) === null || _state$runState$value2 === void 0 ? void 0 : _state$runState$value2.relevance) !== null && _state$runState$value !== void 0 ? _state$runState$value : true;
          });
          return !relevance ? /* @__PURE__ */jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {}) : /* @__PURE__ */jsxRuntimeExports.jsx(FormControlLabel, {
            control: /* @__PURE__ */jsxRuntimeExports.jsx(Radio, {}),
            label: /* @__PURE__ */jsxRuntimeExports.jsx(Content, {
              elementCode: props.Choice.code,
              fontFamily: theme.textStyles.text.font,
              color: theme.textStyles.text.color,
              fontSize: theme.textStyles.text.size,
              name: "label",
              lang: props.lang,
              content: (_props$Choice$content = props.Choice.content) === null || _props$Choice$content === void 0 ? void 0 : _props$Choice$content.label
            }),
            value: props.Choice.code
          }, props.Choice.qualifiedCode);
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
                label: /* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
                  variant: "standard",
                  fullWidth: true,
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
//# sourceMappingURL=Scq-legacy-BbFPkim7.js.map
