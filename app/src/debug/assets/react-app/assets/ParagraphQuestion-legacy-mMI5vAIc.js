;
(function () {
<<<<<<<< HEAD:app/src/debug/assets/react-app/assets/ParagraphQuestion-legacy-4Sh5plTj.js
  System.register(['./index-legacy-D2IAuBBo.js', './Android-legacy-BgepuGDy.js', './TextField-legacy-DdoVKr1d.js'], function (exports, module) {
========
  System.register(['./index-legacy-ppEgxGbl.js', './use-service-legacy-BbL3A7cT.js', './TextField-legacy-Dle1a096.js'], function (exports, module) {
>>>>>>>> main:app/src/debug/assets/react-app/assets/ParagraphQuestion-legacy-mMI5vAIc.js
    'use strict';

    var jsxRuntimeExports, useSelector, shallowEqual, useDispatch, useTranslation, valueChange, setDirty, TextField;
    return {
      setters: [module => {
        jsxRuntimeExports = module.m;
      }, module => {
<<<<<<<< HEAD:app/src/debug/assets/react-app/assets/ParagraphQuestion-legacy-4Sh5plTj.js
        useSelector = module.D;
        shallowEqual = module.E;
        useDispatch = module.H;
        useTranslation = module.a2;
        valueChange = module.J;
        setDirty = module.L;
========
        useSelector = module.H;
        shallowEqual = module.aU;
        useDispatch = module.U;
        useTranslation = module.M;
        valueChange = module.aV;
        setDirty = module.b1;
>>>>>>>> main:app/src/debug/assets/react-app/assets/ParagraphQuestion-legacy-mMI5vAIc.js
      }, module => {
        TextField = module.T;
      }],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._questionItem_pxk6e_1 {\n  margin-bottom: 15px;\n}\n\n._questionItem_pxk6e_1:last-child {\n  margin-bottom: 0;\n}\n\n@media screen and (max-width: 767px) {\n  ._questionItem_pxk6e_1 {\n    width: 100%;\n  }\n}\n\n._paragraph_pxk6e_15 {\n  width: 100%;\n}\n\n._wordCount_pxk6e_19 {\n  text-align: end;\n}\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        exports("default", ParagraphQuestion);
        const questionItem = "_questionItem_pxk6e_1";
        const paragraph = "_paragraph_pxk6e_15";
        const wordCount = "_wordCount_pxk6e_19";
        const styles = {
          questionItem: questionItem,
          paragraph: paragraph,
          wordCount: wordCount
        };
        function ParagraphQuestion(props) {
          var _props$component$vali, _props$component$cont;
          const state = useSelector(state2 => {
            let questionState = state2.runState.values[props.component.qualifiedCode];
            let show_errors = state2.runState.values.Survey.show_errors;
            let isDirty = state2.templateState[props.component.qualifiedCode];
            let validity = questionState === null || questionState === void 0 ? void 0 : questionState.validity;
            let invalid = (show_errors || isDirty) && validity === false;
            let value = (questionState === null || questionState === void 0 ? void 0 : questionState.value) || "";
            return {
              value,
              wordCount: window.QlarrScripts ? window.QlarrScripts.wordCount(value) : 0,
              invalid
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const _useTranslation = useTranslation("run"),
            t = _useTranslation.t;
          const handleChange = event => {
            dispatch(valueChange({
              componentCode: event.target.name,
              value: event.target.value
            }));
          };
          const lostFocus = event => {
            dispatch(setDirty(event.target.name));
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: styles.questionItem,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(TextField, {
              className: styles.paragraph,
              required: (_props$component$vali = props.component.validation) !== null && _props$component$vali !== void 0 && (_props$component$vali = _props$component$vali.validation_required) !== null && _props$component$vali !== void 0 && _props$component$vali.isActive ? true : false,
              multiline: true,
              id: props.component.qualifiedCode,
              name: props.component.qualifiedCode,
              minRows: props.component.minRows || 2,
              label: ((_props$component$cont = props.component.content) === null || _props$component$cont === void 0 ? void 0 : _props$component$cont.hint) || "",
              onChange: handleChange,
              onBlur: lostFocus,
              value: state.value
            }), props.component.showWordCount ? /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: styles.wordCount,
              children: /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                children: t("word_count", {
                  count: state.wordCount
                })
              })
            }) : ""]
          });
        }
      }
    };
  });
})();
<<<<<<<< HEAD:app/src/debug/assets/react-app/assets/ParagraphQuestion-legacy-4Sh5plTj.js
//# sourceMappingURL=ParagraphQuestion-legacy-4Sh5plTj.js.map
========
//# sourceMappingURL=ParagraphQuestion-legacy-mMI5vAIc.js.map
>>>>>>>> main:app/src/debug/assets/react-app/assets/ParagraphQuestion-legacy-mMI5vAIc.js
