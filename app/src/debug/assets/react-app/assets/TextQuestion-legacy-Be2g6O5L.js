;
(function () {
  System.register(['./index-legacy-BxErIW5G.js', './vendor-legacy-HgAAkC3y.js', './redux-legacy-N3F3Fg7Q.js', './Android-legacy-CFOeS1X5.js', './mui-legacy-CrWa9ZRQ.js', './i18n-legacy-QVJZeAmy.js', './dnd-legacy-Cs5Ow6iI.js'], function (exports, module) {
    'use strict';

    var jsx, React, useSelector, shallowEqual, useDispatch, valueChange, setDirty, useTheme, TextField;
    return {
      setters: [module => {
        jsx = module.n;
      }, module => {
        React = module.b;
      }, module => {
        useSelector = module.u;
        shallowEqual = module.s;
        useDispatch = module.b;
      }, module => {
        valueChange = module.v;
        setDirty = module.s;
      }, module => {
        useTheme = module.b;
        TextField = module.m;
      }, null, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._questionItem_15lac_1 {\n  margin-bottom: 15px;\n  width: 50%;\n}\n\n\n@media only screen and (max-width: 767px) {\n  ._questionItem_15lac_1 {\n    width: 100%;\n  }\n}\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        const questionItem = "_questionItem_15lac_1";
        const styles = {
          questionItem: questionItem
        };
        function TextQuestion(props) {
          var _props$component$vali, _props$component$cont;
          useTheme();
          const state = useSelector(state2 => {
            let questionState = state2.runState.values[props.component.qualifiedCode];
            let show_errors = state2.runState.values.Survey.show_errors;
            let isDirty = state2.templateState[props.component.qualifiedCode];
            let validity = questionState === null || questionState === void 0 ? void 0 : questionState.validity;
            let invalid = (show_errors || isDirty) && validity === false;
            return {
              value: (questionState === null || questionState === void 0 ? void 0 : questionState.value) || "",
              invalid
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const handleChange = event => {
            dispatch(valueChange({
              componentCode: event.target.name,
              value: event.target.value
            }));
          };
          const lostFocus = event => {
            const trimmed = event.target.value.trim();
            if (event.target.value !== trimmed) {
              dispatch(valueChange({
                componentCode: event.target.name,
                value: trimmed
              }));
            }
            dispatch(setDirty(event.target.name));
          };
          return /* @__PURE__ */jsx("div", {
            className: styles.questionItem,
            children: /* @__PURE__ */jsx(TextField, {
              variant: "outlined",
              size: "small",
              required: (_props$component$vali = props.component.validation) !== null && _props$component$vali !== void 0 && (_props$component$vali = _props$component$vali.validation_required) !== null && _props$component$vali !== void 0 && _props$component$vali.isActive ? true : false,
              id: props.component.qualifiedCode,
              name: props.component.qualifiedCode,
              label: props.component.showHint && ((_props$component$cont = props.component.content) === null || _props$component$cont === void 0 ? void 0 : _props$component$cont.hint) || "",
              onChange: handleChange,
              onBlur: lostFocus,
              inputProps: {
                maxLength: props.component.maxChars || void 0
              },
              value: state.value,
              error: state.invalid
            })
          });
        }
        const TextQuestion_default = exports("default", React.memo(TextQuestion));
      }
    };
  });
})();
//# sourceMappingURL=TextQuestion-legacy-Be2g6O5L.js.map
