;
(function () {
  System.register(['./index-legacy-NtFnlkty.js', './Android-legacy-DzAx3JE1.js', './TextField-legacy-DMoXNS7l.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports, useTheme, useSelector, shallowEqual, useDispatch, valueChange, setDirty, TextField;
    return {
      setters: [module => {
        jsxRuntimeExports = module.m;
      }, module => {
        useTheme = module.b;
        useSelector = module.D;
        shallowEqual = module.E;
        useDispatch = module.H;
        valueChange = module.J;
        setDirty = module.L;
      }, module => {
        TextField = module.T;
      }],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._questionItem_arcyb_1 {\n  margin-bottom: 15px;\n  width: 50%;\n}\n\n\n@media screen and (max-width: 767px) {\n  ._questionItem_arcyb_1 {\n    width: 100%;\n  }\n}\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        exports("default", NumberQuestion);
        const questionItem = "_questionItem_arcyb_1";
        const styles = {
          questionItem: questionItem
        };
        function NumberQuestion(props) {
          var _props$component$vali, _props$component$cont;
          const theme = useTheme();
          const state = useSelector(state2 => {
            let questionState = state2.runState.values[props.component.qualifiedCode];
            let show_errors = state2.runState.values.Survey.show_errors;
            let isDirty = state2.templateState[props.component.qualifiedCode];
            let validity = questionState === null || questionState === void 0 ? void 0 : questionState.validity;
            let invalid = (show_errors || isDirty) && validity === false;
            return {
              value: questionState === null || questionState === void 0 ? void 0 : questionState.value,
              invalid
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const cleanupValue = (oldValue, newValue) => {
            const regex = props.component.decimal_separator == "." ? /^[0-9]+\.?[0-9]*$/ : props.component.decimal_separator == "," ? /^[0-9]+,?[0-9]*$/ : /^[0-9]*$/;
            if (newValue == "") {
              return void 0;
            }
            if (regex.test(newValue)) {
              let withDecimal = convertToDecimal(newValue);
              let processed = +withDecimal;
              let returning = isNaN(processed) ? oldValue : withDecimal;
              return returning;
            } else {
              return oldValue;
            }
          };
          const convertToDecimal = value => {
            if (props.component.decimal_separator != ",") {
              return value;
            }
            let stringValue = value.toString();
            return stringValue.replace(",", ".");
          };
          const formatValue = value => {
            return value === void 0 ? "" : props.component.decimal_separator == "," ? value.toString().replace(".", ",") : value;
          };
          const handleChange = event => {
            dispatch(valueChange({
              componentCode: event.target.name,
              value: cleanupValue(state.value, event.target.value)
            }));
          };
          const lostFocus = event => {
            dispatch(setDirty(event.target.name));
            let processed = +state.value;
            if (!isNaN(processed)) {
              dispatch(valueChange({
                componentCode: props.component.qualifiedCode,
                value: processed
              }));
            }
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: styles.questionItem,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
              variant: "standard",
              required: (_props$component$vali = props.component.validation) !== null && _props$component$vali !== void 0 && (_props$component$vali = _props$component$vali.validation_required) !== null && _props$component$vali !== void 0 && _props$component$vali.isActive ? true : false,
              id: props.component.qualifiedCode,
              name: props.component.qualifiedCode,
              label: props.component.showHint && ((_props$component$cont = props.component.content) === null || _props$component$cont === void 0 ? void 0 : _props$component$cont.hint) || "",
              onChange: handleChange,
              onBlur: lostFocus,
              inputProps: {
                maxLength: props.component.maxChars || void 0
              },
              value: formatValue(state.value),
              error: state.invalid,
              InputProps: {
                sx: {
                  fontFamily: theme.textStyles.text.font,
                  color: theme.textStyles.text.color,
                  fontSize: theme.textStyles.text.size,
                  borderBottom: "1px solid"
                }
              }
            })
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=NumberQuestion-legacy-D8_899E9.js.map
