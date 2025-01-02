;
(function () {
  System.register(['./index-legacy-VHGc_nGn.js', './use-service-legacy-uNDfwPef.js', './index-legacy-YuyNrEK9.js', './common-legacy-JH1w4dyZ.js'], function (exports, module) {
    'use strict';

    var useTheme, jsxRuntimeExports, Box, useSelector, shallowEqual, useDispatch, valueChange, DynamicSvg, buildResourceUrl;
    return {
      setters: [module => {
        useTheme = module.y;
        jsxRuntimeExports = module.j;
        Box = module.B;
      }, module => {
        useSelector = module.H;
        shallowEqual = module.aR;
        useDispatch = module.U;
        valueChange = module.aS;
      }, module => {
        DynamicSvg = module.D;
      }, module => {
        buildResourceUrl = module.b;
      }],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._imageContainer_5bop2_1 {\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n._imageGrid_5bop2_7 {\n  margin-top: 16px;\n}\n\n._selection_5bop2_11 {\n  border-radius: 0 !important;\n  background-color: #ffffffcc !important;\n}\n\n._svgContainer_5bop2_16 {\n  text-align: center;\n}\n\n._svgContainer_5bop2_16>svg {\n  width: 100%;\n  height: 100%;\n}\n\n._iconFlexContainer_5bop2_25 {\n  display: flex;\n  flex-wrap: wrap;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        exports("default", IconMcq);
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
        function IconMcq(props) {
          var _props$component;
          const theme = useTheme();
          useSelector(state2 => {
            let questionState = state2.runState.values[props.component.qualifiedCode];
            let show_errors = state2.runState.values.Survey.show_errors;
            let isDirty = state2.templateState[props.component.qualifiedCode];
            return {
              value: (questionState === null || questionState === void 0 ? void 0 : questionState.value) || "",
              showValidation: (show_errors || isDirty) && (questionState === null || questionState === void 0 ? void 0 : questionState.validity) === false
            };
          }, shallowEqual);
          useDispatch();
          const hideText = ((_props$component = props.component) === null || _props$component === void 0 ? void 0 : _props$component.hideText) || false;
          useSelector(state2 => {
            return state2.runState.values["Survey"].lang;
          });
          return /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
            sx: {
              gap: `${props.component.spacing || 8}px`
            },
            className: styles.iconFlexContainer,
            children: props.component.answers.map(option => {
              return /* @__PURE__ */jsxRuntimeExports.jsx(IconMcqChoice, {
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
          iconSize,
          columns,
          spacing,
          hideText,
          theme
        }) {
          var _component$resources, _component$resources2, _component$content;
          const dispatch = useDispatch();
          const checked = useSelector(state => state.runState.values[component.qualifiedCode].value || false);
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
                onIconClick: () => dispatch(valueChange({
                  componentCode: component.qualifiedCode,
                  value: !checked
                })),
                imageHeightPx: "100%",
                maxHeight: iconSize + "px",
                iconColor: checked ? theme.palette.primary.main : theme.textStyles.text.color,
                svgUrl: component !== null && component !== void 0 && (_component$resources = component.resources) !== null && _component$resources !== void 0 && _component$resources.icon ? buildResourceUrl(component === null || component === void 0 || (_component$resources2 = component.resources) === null || _component$resources2 === void 0 ? void 0 : _component$resources2.icon) : void 0
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
//# sourceMappingURL=IconMcq-legacy-Db5W0reb.js.map
