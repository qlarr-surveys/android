;
(function () {
  System.register(['./index-legacy-ppEgxGbl.js', './use-service-legacy-BbL3A7cT.js'], function (exports, module) {
    'use strict';

    var useTheme, jsxRuntimeExports, Box, useDispatch, useSelector, shallowEqual, getContrastColor, valueChange, setDirty;
    return {
      setters: [module => {
        useTheme = module.aj;
        jsxRuntimeExports = module.j;
        Box = module.B;
      }, module => {
        useDispatch = module.U;
        useSelector = module.H;
        shallowEqual = module.aU;
        getContrastColor = module.bd;
        valueChange = module.aV;
        setDirty = module.b1;
      }],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._choicesContainer_iaaeb_1 {\n  display: flex;\n  width: 100%;\n  table-layout: fixed;\n  margin-bottom: 16px;\n  justify-content: space-between;\n}\n\n._choice_iaaeb_1 {\n  padding: 8px;\n  width: 100%;\n  margin: 1px;\n  font-weight: bold;\n  font-size: larger;\n  border: 1px solid;\n  text-align: center;\n}\n\n._choiceLabels_iaaeb_19 {\n  margin-top: 16px;\n  display: flex;\n  justify-content: space-between;\n}\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        exports("default", NPS);
        const choicesContainer = "_choicesContainer_iaaeb_1";
        const choice = "_choice_iaaeb_1";
        const choiceLabels = "_choiceLabels_iaaeb_19";
        const styles = {
          choicesContainer: choicesContainer,
          choice: choice,
          choiceLabels: choiceLabels
        };
        function NPS(props) {
          var _props$component$cont, _props$component$cont2;
          const theme = useTheme();
          const dispatch = useDispatch();
          let columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          const state = useSelector(state2 => {
            return state2.runState.values[props.component.qualifiedCode].value;
          }, shallowEqual);
          const handleChange = option => {
            dispatch(valueChange({
              componentCode: props.component.qualifiedCode,
              value: option
            }));
            dispatch(setDirty(props.component.qualifiedCode));
          };
          const highlightContrast = getContrastColor(theme.palette.background.paper);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
              className: styles.choiceLabels,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Box, {
                children: ((_props$component$cont = props.component.content) === null || _props$component$cont === void 0 ? void 0 : _props$component$cont.lower_bound_hint) || ""
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
                children: ((_props$component$cont2 = props.component.content) === null || _props$component$cont2 === void 0 ? void 0 : _props$component$cont2.higher_bound_hint) || ""
              })]
            }), /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
              className: styles.choicesContainer,
              children: columns.map(option => {
                const isSelected = state == option;
                return /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
                  className: styles.choice,
                  onClick: () => handleChange(option),
                  sx: {
                    color: isSelected ? highlightContrast : theme.textStyles.text.color,
                    backgroundColor: isSelected ? "primary.main" : "background.paper"
                  },
                  children: option
                }, option);
              })
            })]
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=NPS-legacy-ClsdBiWn.js.map
