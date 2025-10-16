;
(function () {
  System.register(['./index-legacy-Dxk271B4.js', './Android-legacy-BamMTOdE.js', './Checkbox-legacy-BMKeyy5n.js', './SwitchBase-legacy-CJznTo__.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports, Box, useTheme, useSelector, shallowEqual, useDispatch, buildResourceUrl, rtlLanguage, valueChange, setDirty, Checkbox;
    return {
      setters: [module => {
        jsxRuntimeExports = module.m;
        Box = module.ab;
        useTheme = module.a8;
      }, module => {
        useSelector = module.K;
        shallowEqual = module.L;
        useDispatch = module.M;
        buildResourceUrl = module.aa;
        rtlLanguage = module.ab;
        valueChange = module.O;
        setDirty = module.S;
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
          return /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
            sx: {
              gap: `${props.component.spacing}px`,
              justifyContent: isRtl ? "flex-end" : "flex-start"
            },
            className: styles.imageFlexContainer,
            children: props.component.answers.map(option => {
              var _runValues$option$qua, _runValues$option$qua2;
              const relevance = (_runValues$option$qua = (_runValues$option$qua2 = runValues[option.qualifiedCode]) === null || _runValues$option$qua2 === void 0 ? void 0 : _runValues$option$qua2.relevance) !== null && _runValues$option$qua !== void 0 ? _runValues$option$qua : true;
              if (!relevance) return null;
              return /* @__PURE__ */jsxRuntimeExports.jsx(ImageMcqItem, {
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
          const state = useSelector(state2 => {
            let answerState = state2.runState.values[props.option.qualifiedCode];
            return {
              showAnswer: typeof (answerState === null || answerState === void 0 ? void 0 : answerState.relevance) == "undefined" || answerState.relevance
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const handleChange = (componentCode, value) => {
            let parentValue = [...props.parentValue];
            if (value) {
              parentValue.push(props.option.code);
            } else {
              parentValue = parentValue.filter(el => el !== props.option.code);
            }
            dispatch(valueChange({
              componentCode: props.parentCode,
              value: parentValue
            }));
            dispatch(setDirty(componentCode));
            dispatch(setDirty(props.parentCode));
          };
          const backgroundImage = (_props$option$resourc = props.option.resources) !== null && _props$option$resourc !== void 0 && _props$option$resourc.image ? `url('${buildResourceUrl((_props$option$resourc2 = props.option.resources) === null || _props$option$resourc2 === void 0 ? void 0 : _props$option$resourc2.image)}')` : `url('/placeholder-image.jpg')`;
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            sx: {
              flex: `0 1 calc(${100 / props.columns}% - ${props.spacing}px)`,
              cursor: "pointer"
            },
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Box, {
              className: styles.imageContainer,
              onClick: () => handleChange(props.option.qualifiedCode, !state.checked),
              style: {
                paddingTop: 100 / props.aspectRatio + "%",
                backgroundImage,
                borderRadius: "4px",
                border: state.checked ? `4px solid ${theme.palette.primary.main}` : "4px solid transparent"
              },
              children: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: styles.selection,
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Checkbox, {
                  onChange: event => handleChange(props.option.qualifiedCode, !state.checked),
                  size: "large",
                  sx: {
                    m: "5px"
                  },
                  className: styles.radioCheck,
                  checked: props.parentValue.indexOf(props.option.code) > -1
                })
              })
            }), !props.hideText && /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
              sx: {
                fontFamily: theme.textStyles.text.font,
                color: theme.textStyles.text.color,
                fontSize: theme.textStyles.text.size
              },
              children: (_props$option$content = props.option.content) === null || _props$option$content === void 0 ? void 0 : _props$option$content.label
            })]
          }, props.option.code);
        }
      }
    };
  });
})();
//# sourceMappingURL=ImageMcq-legacy-CG0zrXJ1.js.map
