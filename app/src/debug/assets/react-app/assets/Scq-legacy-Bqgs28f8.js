;
(function () {
  System.register(['./index-legacy-CIX8rRtf.js', './vendor-legacy-lhtLtiSI.js', './redux-legacy-ZqSxVvAn.js', './Android-legacy-BgYj3wY4.js', './mui-legacy-b38CRKaY.js', './i18n-legacy-BRT6G2_g.js', './editor-legacy-Dx3AxXyy.js', './dnd-legacy-DGW9B2he.js', './charts-legacy-BBm9rbLh.js'], function (exports, module) {
    'use strict';

    var jsx, Fragment, reactExports, useSelector, shallowEqual, useDispatch, valueChange, Content, Validation, setDirty, RadioGroup, FormControl, useTheme, Radio, FormControlLabel, TextField, css;
    return {
      setters: [module => {
        jsx = module.n;
        Fragment = module.F;
      }, module => {
        reactExports = module.r;
      }, module => {
        useSelector = module.u;
        shallowEqual = module.s;
        useDispatch = module.b;
      }, module => {
        valueChange = module.v;
        Content = module.C;
        Validation = module.V;
        setDirty = module.s;
      }, module => {
        RadioGroup = module.$;
        FormControl = module.a0;
        useTheme = module.e;
        Radio = module.a1;
        FormControlLabel = module.a2;
        TextField = module.o;
        css = module.m;
      }, null, null, null, null],
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
          return /* @__PURE__ */jsx(FormControl, {
            component: "fieldset",
            children: /* @__PURE__ */jsx(RadioGroup, {
              name: props.component.qualifiedCode,
              value: state.value,
              onChange: handleChange,
              children: props.component.answers.map(option => {
                if (option.type === "other") {
                  return /* @__PURE__ */jsx(ScqChoiceOther, {
                    parentCode: props.component.qualifiedCode,
                    Choice: option
                  }, option.qualifiedCode);
                } else {
                  return /* @__PURE__ */jsx(ScqChoice, {
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
          return !relevance ? /* @__PURE__ */jsx(Fragment, {}) : /* @__PURE__ */jsx(FormControlLabel, {
            "data-code": props.Choice.code,
            control: /* @__PURE__ */jsx(Radio, {}),
            label: /* @__PURE__ */jsx(Content, {
              elementCode: props.Choice.code,
              customStyle: `
        font-size: ${theme.textStyles.text.size}px;
        `,
              name: "label",
              content: (_props$Choice$content = props.Choice.content) === null || _props$Choice$content === void 0 ? void 0 : _props$Choice$content.label
            }),
            value: props.Choice.code
          }, props.Choice.qualifiedCode);
        }
        function ScqChoiceOther(props) {
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
            return /* @__PURE__ */jsx(FormControlLabel, {
              "data-code": props.Choice.code,
              css: css`
          .MuiTypography-root {
            width: 100%;
          }
        `,
              control: /* @__PURE__ */jsx(Radio, {}),
              label: /* @__PURE__ */jsx(TextField, {
                variant: "outlined",
                fullWidth: true,
                required: ((_state$textChild = state.textChild) === null || _state$textChild === void 0 ? void 0 : _state$textChild.relevance) && ((_nestedTextChild$vali = nestedTextChild.validation) === null || _nestedTextChild$vali === void 0 ? void 0 : _nestedTextChild$vali.required),
                inputRef: textInput,
                id: nestedTextChild.qualifiedCode,
                name: nestedTextChild.qualifiedCode,
                label: (_props$Choice$content2 = props.Choice.content) === null || _props$Choice$content2 === void 0 ? void 0 : _props$Choice$content2.label,
                onChange: handleChange,
                onFocus: handleFocus,
                onBlur: lostFocus,
                value: state.value,
                helperText: state.childInvalid ? /* @__PURE__ */jsx(Validation, {
                  component: nestedTextChild,
                  limit: 1
                }) : ""
              }),
              onChange: onButtonClick,
              value: props.Choice.code
            }, props.Choice.qualifiedCode);
          };
          return state.showChoice ? showChoice() : "";
        }
      }
    };
  });
})();
//# sourceMappingURL=Scq-legacy-Bqgs28f8.js.map
