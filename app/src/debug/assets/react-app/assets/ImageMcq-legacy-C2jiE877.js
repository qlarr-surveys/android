;
(function () {
  System.register(['./index-legacy-1AolfYmu.js', './Android-legacy-BuzJjxPU.js', './Checkbox-legacy-DcK7Eue_.js', './SwitchBase-legacy-jJJGK4Be.js'], function (exports, module) {
    'use strict';

    var jsx, Box, useTheme, jsxs, useSelector, shallowEqual, useDispatch, buildResourceUrl, rtlLanguage, valueChange, setDirty, Checkbox;
    return {
      setters: [module => {
        jsx = module.as;
        Box = module.av;
        useTheme = module.ar;
        jsxs = module.at;
      }, module => {
        useSelector = module.J;
        shallowEqual = module.K;
        useDispatch = module.L;
        buildResourceUrl = module.a4;
        rtlLanguage = module.a5;
        valueChange = module.N;
        setDirty = module.R;
      }, module => {
        Checkbox = module.C;
      }, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._imageGrid_iw6vc_1 {\n  margin-top: 16px;\n}\n\n._imageContainer_iw6vc_5 {\n  position: relative;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  cursor: pointer;\n}\n\n._selection_iw6vc_13 {\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  border-radius: 0 !important;\n  background-color: #ffffffcc !important;\n}\n\n@media (max-width: 768px) {\n  ._radioCheck_iw6vc_22 {\n    display: none;\n  }\n}\n\n._radioCheck_iw6vc_22 {\n  width: 15px;\n  height: 15px;\n}\n\n._imageFlexContainer_iw6vc_32 {\n  display: flex;\n  flex-wrap: wrap;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        exports("default", ImageMcq);
        const imageContainer = "_imageContainer_iw6vc_5";
        const selection = "_selection_iw6vc_13";
        const radioCheck = "_radioCheck_iw6vc_22";
        const imageFlexContainer = "_imageFlexContainer_iw6vc_32";
        const styles = {
          imageContainer: imageContainer,
          selection: selection,
          radioCheck: radioCheck,
          imageFlexContainer: imageFlexContainer
        };
        function ImageMcq(props) {
          const lang = useSelector(state => {
            return state.runState.values["Survey"].lang;
          });
          const parentValue = useSelector(state => {
            return state.runState.values[props.component.qualifiedCode].value || [];
          }, shallowEqual);
          const isRtl = rtlLanguage.includes(lang);
          const runValues = useSelector(s => s.runState.values);
          return /* @__PURE__ */jsx(Box, {
            sx: {
              gap: `${props.component.spacing}px`,
              justifyContent: isRtl ? "flex-end" : "flex-start"
            },
            className: styles.imageFlexContainer,
            children: props.component.answers.map(option => {
              var _runValues$option$qua, _runValues$option$qua2;
              const relevance = (_runValues$option$qua = (_runValues$option$qua2 = runValues[option.qualifiedCode]) === null || _runValues$option$qua2 === void 0 ? void 0 : _runValues$option$qua2.relevance) !== null && _runValues$option$qua !== void 0 ? _runValues$option$qua : true;
              if (!relevance) return null;
              return /* @__PURE__ */jsx(ImageMcqItem, {
                option,
                parentValue,
                aspectRatio: props.component.imageAspectRatio,
                columns: props.component.columns || 3,
                spacing: props.component.spacing || 8,
                hideText: props.component.hideText,
                parentCode: props.component.qualifiedCode
              }, option.qualifiedCode);
            })
          });
        }
        function ImageMcqItem(props) {
          var _props$option$resourc, _props$option$resourc2, _props$option$content;
          const theme = useTheme();
          const dispatch = useDispatch();
          const checked = props.parentValue.indexOf(props.option.code) > -1;
          const handleChange = () => {
            let parentValue = [...props.parentValue];
            if (checked) {
              parentValue = parentValue.filter(el => el !== props.option.code);
            } else {
              parentValue.push(props.option.code);
            }
            dispatch(valueChange({
              componentCode: props.parentCode,
              value: parentValue
            }));
            dispatch(setDirty(props.option.qualifiedCode));
            dispatch(setDirty(props.parentCode));
          };
          const backgroundImage = (_props$option$resourc = props.option.resources) !== null && _props$option$resourc !== void 0 && _props$option$resourc.image ? `url('${buildResourceUrl((_props$option$resourc2 = props.option.resources) === null || _props$option$resourc2 === void 0 ? void 0 : _props$option$resourc2.image)}')` : `url('/placeholder-image.jpg')`;
          return /* @__PURE__ */jsxs(Box, {
            "data-code": props.option.code,
            sx: {
              flex: `0 1 calc(${100 / props.columns}% - ${props.spacing}px)`,
              cursor: "pointer"
            },
            children: [/* @__PURE__ */jsx(Box, {
              className: styles.imageContainer,
              onClick: handleChange,
              style: {
                paddingTop: 100 / props.aspectRatio + "%",
                backgroundImage,
                borderRadius: "4px",
                border: checked ? `4px solid ${theme.palette.primary.main}` : "4px solid transparent"
              },
              children: /* @__PURE__ */jsx("div", {
                className: styles.selection,
                children: /* @__PURE__ */jsx(Checkbox, {
                  onChange: handleChange,
                  size: "large",
                  sx: {
                    m: "5px"
                  },
                  className: styles.radioCheck,
                  checked
                })
              })
            }), !props.hideText && /* @__PURE__ */jsx(Box, {
              children: (_props$option$content = props.option.content) === null || _props$option$content === void 0 ? void 0 : _props$option$content.label
            })]
          }, props.option.code);
        }
      }
    };
  });
})();
//# sourceMappingURL=ImageMcq-legacy-C2jiE877.js.map
