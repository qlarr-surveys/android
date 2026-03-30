;
(function () {
  System.register(['./index-legacy-CoMmlwbr.js', './vendor-legacy-lhtLtiSI.js', './redux-legacy-ZqSxVvAn.js', './Android-legacy-Csf5qFR4.js', './i18n-legacy-BRT6G2_g.js', './mui-legacy-b38CRKaY.js', './editor-legacy-Dx3AxXyy.js', './dnd-legacy-DGW9B2he.js', './charts-legacy-BBm9rbLh.js'], function (exports, module) {
    'use strict';

    var jsxs, jsx, useSelector, shallowEqual, useDispatch, NAMESPACES, valueChange, setDirty, useTranslation, TextField;
    return {
      setters: [module => {
        jsxs = module.o;
        jsx = module.n;
      }, null, module => {
        useSelector = module.u;
        shallowEqual = module.s;
        useDispatch = module.b;
      }, module => {
        NAMESPACES = module.N;
        valueChange = module.v;
        setDirty = module.s;
      }, module => {
        useTranslation = module.u;
      }, module => {
        TextField = module.o;
      }, null, null, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._questionItem_103qr_1 {\n  margin-bottom: 15px;\n}\n\n\n@media screen and (max-width: 767px) {\n  ._questionItem_103qr_1 {\n    width: 100%;\n  }\n}\n\n._paragraph_103qr_12 {\n  width: 100%;\n}\n\n._wordCount_103qr_16 {\n  text-align: end;\n}\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        exports("default", ParagraphQuestion);
        const questionItem = "_questionItem_103qr_1";
        const paragraph = "_paragraph_103qr_12";
        const wordCount = "_wordCount_103qr_16";
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
          const _useTranslation = useTranslation(NAMESPACES.RUN),
            t = _useTranslation.t;
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
          return /* @__PURE__ */jsxs("div", {
            className: styles.questionItem,
            children: [/* @__PURE__ */jsx(TextField, {
              size: "small",
              className: styles.paragraph,
              required: (_props$component$vali = props.component.validation) !== null && _props$component$vali !== void 0 && (_props$component$vali = _props$component$vali.validation_required) !== null && _props$component$vali !== void 0 && _props$component$vali.isActive ? true : false,
              multiline: true,
              id: props.component.qualifiedCode,
              name: props.component.qualifiedCode,
              minRows: props.component.minRows || 4,
              label: props.component.showHint && ((_props$component$cont = props.component.content) === null || _props$component$cont === void 0 ? void 0 : _props$component$cont.hint) || "",
              onChange: handleChange,
              onBlur: lostFocus,
              value: state.value
            }), props.component.showWordCount ? /* @__PURE__ */jsx("div", {
              className: styles.wordCount,
              children: /* @__PURE__ */jsx("span", {
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
//# sourceMappingURL=ParagraphQuestion-legacy-BGAgQVUH.js.map
