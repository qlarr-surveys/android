;
(function () {
  System.register(['./index-legacy-CZICsoLH.js', './Android-legacy-B5yqEvUd.js', './index-legacy-CAInR7m1.js'], function (exports, module) {
    'use strict';

    var useTheme, jsxRuntimeExports, Box, useSelector, shallowEqual, useDispatch, buildResourceUrl, valueChange, DynamicSvg;
    return {
      setters: [module => {
        useTheme = module.a8;
        jsxRuntimeExports = module.m;
        Box = module.ab;
      }, module => {
        useSelector = module.K;
        shallowEqual = module.L;
        useDispatch = module.M;
        buildResourceUrl = module.aa;
        valueChange = module.O;
      }, module => {
        DynamicSvg = module.D;
      }],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._imageContainer_5bop2_1 {\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n._imageGrid_5bop2_7 {\n  margin-top: 16px;\n}\n\n._selection_5bop2_11 {\n  border-radius: 0 !important;\n  background-color: #ffffffcc !important;\n}\n\n._svgContainer_5bop2_16 {\n  text-align: center;\n}\n\n._svgContainer_5bop2_16>svg {\n  width: 100%;\n  height: 100%;\n}\n\n._iconFlexContainer_5bop2_25 {\n  display: flex;\n  flex-wrap: wrap;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        exports("default", IconMcq);
        const iconFlexContainer = "_iconFlexContainer_5bop2_25";
        const styles = {
          iconFlexContainer: iconFlexContainer
        };
        function IconMcq(props) {
          var _props$component;
          const theme = useTheme();
          const parentValue = useSelector(state => {
            return state.runState.values[props.component.qualifiedCode].value || [];
          }, shallowEqual);
          const hideText = ((_props$component = props.component) === null || _props$component === void 0 ? void 0 : _props$component.hideText) || false;
          const runValues = useSelector(s => s.runState.values);
          return /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
            sx: {
              gap: `${props.component.spacing || 8}px`
            },
            className: styles.iconFlexContainer,
            children: props.component.answers.map(option => {
              var _runValues$option$qua, _runValues$option$qua2;
              const relevance = (_runValues$option$qua = (_runValues$option$qua2 = runValues[option.qualifiedCode]) === null || _runValues$option$qua2 === void 0 ? void 0 : _runValues$option$qua2.relevance) !== null && _runValues$option$qua !== void 0 ? _runValues$option$qua : true;
              if (!relevance) return null;
              return /* @__PURE__ */jsxRuntimeExports.jsx(IconMcqChoice, {
                parentValue,
                parentCode: props.component.qualifiedCode,
                component: option,
                columns: props.component.columns || 3,
                iconSize: props.component.iconSize || "150",
                spacing: props.component.spacing || 8,
                theme,
                hideText
              }, option.code);
            })
          });
        }
        function IconMcqChoice({
          key,
          component,
          parentValue,
          parentCode,
          iconSize,
          columns,
          spacing,
          hideText,
          theme
        }) {
          var _component$resources, _component$resources2, _component$content;
          const dispatch = useDispatch();
          const checked = parentValue.indexOf(component.code) > -1;
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            sx: {
              flex: `0 1 calc(${100 / columns}% - ${spacing || 8}px)`,
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
                onIconClick: () => {
                  let parentValue2 = [...parentValue];
                  if (checked) {
                    parentValue2 = parentValue2.filter(el => el !== component.code);
                  } else {
                    parentValue2.push(component.code);
                  }
                  dispatch(valueChange({
                    componentCode: parentCode,
                    value: parentValue2
                  }));
                },
                imageHeight: "100%",
                maxHeight: iconSize + "px",
                svgUrl: component !== null && component !== void 0 && (_component$resources = component.resources) !== null && _component$resources !== void 0 && _component$resources.icon ? buildResourceUrl(component === null || component === void 0 || (_component$resources2 = component.resources) === null || _component$resources2 === void 0 ? void 0 : _component$resources2.icon) : void 0,
                isSelected: checked,
                theme
              })
            }), !hideText && /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
              sx: {
                textAlign: "center",
                fontFamily: theme.textStyles.text.font,
                color: checked ? theme.palette.primary.main : theme.textStyles.text.color,
                fontSize: theme.textStyles.text.size
              },
              children: (_component$content = component.content) === null || _component$content === void 0 ? void 0 : _component$content.label
            })]
          }, key);
        }
      }
    };
  });
})();
//# sourceMappingURL=IconMcq-legacy-B396mRX9.js.map
