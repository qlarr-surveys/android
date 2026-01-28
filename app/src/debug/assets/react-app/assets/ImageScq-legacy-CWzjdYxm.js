;
(function () {
  System.register(['./index-legacy-DbBgSDRL.js', './Android-legacy-DTaKd7fz.js', './Radio-legacy-CM7ZNOhy.js', './SwitchBase-legacy-Ecb0WmFB.js', './RadioGroupContext-legacy-W3VXuwxF.js'], function (exports, module) {
    'use strict';

    var useTheme, jsx, jsxs, Box, useSelector, shallowEqual, useDispatch, buildResourceUrl, Content, valueChange, rtlLanguage, Radio;
    return {
      setters: [module => {
        useTheme = module.ar;
        jsx = module.as;
        jsxs = module.at;
        Box = module.av;
      }, module => {
        useSelector = module.J;
        shallowEqual = module.K;
        useDispatch = module.L;
        buildResourceUrl = module.a6;
        Content = module.Q;
        valueChange = module.N;
        rtlLanguage = module.a7;
      }, module => {
        Radio = module.R;
      }, null, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._imageContainer_y1ooh_1 {\n  background-size: cover;\n  position: relative;\n  background-position: center;\n  background-repeat: no-repeat;\n  cursor: pointer;\n\n}\n\n._imageGrid_y1ooh_10 {\n  margin-top: 16px;\n}\n\n._selection_y1ooh_14 {\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  border-radius: 50% !important;\n  background-color: #ffffffcc !important;\n}\n\n\n@media (max-width: 768px) {\n  ._radioCheck_y1ooh_24 {\n    display: none;\n  }\n}\n\n._radioCheck_y1ooh_24 {\n  width: 15px;\n  height: 15px;\n}\n\n\n._imageFlexContainer_y1ooh_35{\n  display: flex;\n  flex-wrap: wrap;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        exports("default", ImageScq);
        const imageContainer = "_imageContainer_y1ooh_1";
        const selection = "_selection_y1ooh_14";
        const radioCheck = "_radioCheck_y1ooh_24";
        const imageFlexContainer = "_imageFlexContainer_y1ooh_35";
        const styles = {
          imageContainer: imageContainer,
          selection: selection,
          radioCheck: radioCheck,
          imageFlexContainer: imageFlexContainer
        };
        function ImageScq(props) {
          const theme = useTheme();
          const state = useSelector(state2 => {
            let questionState = state2.runState.values[props.component.qualifiedCode];
            let show_errors = state2.runState.values.Survey.show_errors;
            let isDirty = state2.templateState[props.component.qualifiedCode];
            return {
              value: (questionState === null || questionState === void 0 ? void 0 : questionState.value) || "",
              showValidation: (show_errors || isDirty) && (questionState === null || questionState === void 0 ? void 0 : questionState.validity) === false
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const handleChange = (componentCode, value) => {
            dispatch(valueChange({
              componentCode,
              value
            }));
          };
          const lang = useSelector(state2 => {
            return state2.runState.values["Survey"].lang;
          });
          const isRtl = rtlLanguage.includes(lang);
          const runValues = useSelector(s => s.runState.values);
          return /* @__PURE__ */jsx(Box, {
            sx: {
              gap: `${props.component.spacing}px`,
              justifyContent: isRtl ? "flex-end" : "flex-start"
            },
            className: styles.imageFlexContainer,
            children: props.component.answers.map(option => {
              var _option$resources, _option$resources2, _runValues$option$qua, _runValues$option$qua2, _option$content;
              const backgroundImage = (_option$resources = option.resources) !== null && _option$resources !== void 0 && _option$resources.image ? `url('${buildResourceUrl((_option$resources2 = option.resources) === null || _option$resources2 === void 0 ? void 0 : _option$resources2.image)}')` : `url('/placeholder-image.jpg')`;
              const relevance = (_runValues$option$qua = (_runValues$option$qua2 = runValues[option.qualifiedCode]) === null || _runValues$option$qua2 === void 0 ? void 0 : _runValues$option$qua2.relevance) !== null && _runValues$option$qua !== void 0 ? _runValues$option$qua : true;
              if (!relevance) return null;
              return /* @__PURE__ */jsxs(Box, {
                "data-code": option.code,
                sx: {
                  flex: `0 1 calc(${100 / props.component.columns}% - ${props.component.spacing}px)`,
                  cursor: "pointer"
                },
                onClick: () => handleChange(props.component.qualifiedCode, option.code),
                children: [/* @__PURE__ */jsx(Box, {
                  className: styles.imageContainer,
                  style: {
                    paddingTop: `${100 / props.component.imageAspectRatio}%`,
                    borderRadius: "4px",
                    backgroundImage,
                    border: state.value === option.code ? `4px solid ${theme.palette.primary.main}` : "4px solid transparent"
                  },
                  children: /* @__PURE__ */jsx("div", {
                    className: styles.selection,
                    children: /* @__PURE__ */jsx(Radio, {
                      checked: state.value === option.code,
                      onChange: event => handleChange(event.target.name, event.target.value),
                      value: option.code,
                      className: styles.radioCheck,
                      name: props.component.qualifiedCode,
                      size: "large",
                      sx: {
                        m: "5px"
                      }
                    })
                  })
                }), !props.component.hideText && /* @__PURE__ */jsx(Content, {
                  customStyle: `
                  text-align: center;
                  margin-top: 8px;
                `,
                  content: (_option$content = option.content) === null || _option$content === void 0 ? void 0 : _option$content.label
                })]
              }, option.code);
            })
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=ImageScq-legacy-CWzjdYxm.js.map
