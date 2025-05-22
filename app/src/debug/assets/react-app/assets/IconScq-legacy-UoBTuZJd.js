;
(function () {
  System.register(['./index-legacy-D2IAuBBo.js', './Android-legacy-BgepuGDy.js', './index-legacy-De2DvXj5.js'], function (exports, module) {
    'use strict';

    var useTheme, jsxRuntimeExports, Box, useSelector, shallowEqual, useDispatch, buildResourceUrl, valueChange, DynamicSvg;
    return {
      setters: [module => {
        useTheme = module.a1;
        jsxRuntimeExports = module.m;
        Box = module.a4;
      }, module => {
        useSelector = module.D;
        shallowEqual = module.E;
        useDispatch = module.H;
        buildResourceUrl = module.a0;
        valueChange = module.J;
      }, module => {
        DynamicSvg = module.D;
      }],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._imageContainer_5bop2_1 {\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n._imageGrid_5bop2_7 {\n  margin-top: 16px;\n}\n\n._selection_5bop2_11 {\n  border-radius: 0 !important;\n  background-color: #ffffffcc !important;\n}\n\n._svgContainer_5bop2_16 {\n  text-align: center;\n}\n\n._svgContainer_5bop2_16>svg {\n  width: 100%;\n  height: 100%;\n}\n\n._iconFlexContainer_5bop2_25 {\n  display: flex;\n  flex-wrap: wrap;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        exports("default", IconScq);
        const imageContainer = "_imageContainer_5bop2_1";
        const imageGrid = "_imageGrid_5bop2_7";
        const selection = "_selection_5bop2_11";
        const svgContainer = "_svgContainer_5bop2_16";
        const iconFlexContainer = "_iconFlexContainer_5bop2_25";
        const styles = {
          imageContainer: imageContainer,
          imageGrid: imageGrid,
          selection: selection,
          svgContainer: svgContainer,
          iconFlexContainer: iconFlexContainer
        };
        function IconScq(props) {
          var _props$component;
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
          const hideText = ((_props$component = props.component) === null || _props$component === void 0 ? void 0 : _props$component.hideText) || false;
          return /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
            sx: {
              gap: `${props.component.spacing || 8}px`
            },
            className: styles.iconFlexContainer,
            children: props.component.answers.map(option => {
              var _option$resources, _option$resources2, _option$content;
              const isSelected = state.value == option.code;
              return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
                sx: {
                  flex: `0 1 calc(${100 / props.component.columns}% - ${props.component.spacing || 8}px)`,
                  textAlign: "center",
                  cursor: "pointer"
                },
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  style: {
                    display: "flex",
                    justifyContent: "center",
                    width: "100%"
                  },
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(DynamicSvg, {
                    onIconClick: () => handleChange(props.component.qualifiedCode, option.code),
                    imageHeight: "100%",
                    maxHeight: (props.component.iconSize || 150) + "px",
                    svgUrl: option !== null && option !== void 0 && (_option$resources = option.resources) !== null && _option$resources !== void 0 && _option$resources.icon ? buildResourceUrl(option === null || option === void 0 || (_option$resources2 = option.resources) === null || _option$resources2 === void 0 ? void 0 : _option$resources2.icon) : void 0,
                    isSelected,
                    theme
                  })
                }), !hideText && /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
                  sx: {
                    textAlign: "center",
                    fontFamily: theme.textStyles.text.font,
                    color: isSelected ? theme.palette.primary.main : theme.textStyles.text.color,
                    fontSize: theme.textStyles.text.size
                  },
                  children: (_option$content = option.content) === null || _option$content === void 0 ? void 0 : _option$content.label
                })]
              }, option.code);
            })
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=IconScq-legacy-UoBTuZJd.js.map
