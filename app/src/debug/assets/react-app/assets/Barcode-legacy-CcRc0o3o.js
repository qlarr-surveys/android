;
(function () {
  System.register(['./index-legacy-BxErIW5G.js', './redux-legacy-N3F3Fg7Q.js', './Android-legacy-CFOeS1X5.js', './mui-legacy-CrWa9ZRQ.js', './vendor-legacy-HgAAkC3y.js', './i18n-legacy-QVJZeAmy.js', './dnd-legacy-Cs5Ow6iI.js'], function (exports, module) {
    'use strict';

    var jsxs, jsx, useSelector, useDispatch, valueChange, useTheme, TextField, Box;
    return {
      setters: [module => {
        jsxs = module.o;
        jsx = module.n;
      }, module => {
        useSelector = module.u;
        useDispatch = module.b;
      }, module => {
        valueChange = module.v;
      }, module => {
        useTheme = module.u;
        TextField = module.m;
        Box = module.x;
      }, null, null, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "\n._container_bvkr6_2 {\n  text-align: center;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        exports("default", Barcode);
        const container = "_container_bvkr6_2";
        const styles = {
          container: container
        };
        function Barcode(props) {
          var _component$content, _props$component$vali;
          useTheme();
          const component = props.component;
          const state = useSelector(state2 => {
            return state2.runState.values[component.qualifiedCode];
          });
          const preview = useSelector(state2 => {
            return state2.runState.preview;
          });
          const mode = useSelector(state2 => {
            return state2.runState.values.Survey.mode;
          });
          const dispatch = useDispatch();
          const onImageClick = () => {
            const code = component.qualifiedCode;
            if (preview && mode == "offline") {
              dispatch(valueChange({
                componentCode: code,
                value: "This is a Dummy Barcode"
              }));
            } else if (window["Android"]) {
              window["Android"].scanBarcode(code);
              window["onBarcodeScanned" + code] = value => {
                dispatch(valueChange({
                  componentCode: code,
                  value
                }));
              };
            } else {
              console.debug("no android device!!");
            }
          };
          return /* @__PURE__ */jsxs(Box, {
            className: styles.container,
            children: [/* @__PURE__ */jsx("img", {
              onClick: onImageClick,
              src: "/barcode.png",
              style: {
                maxHeight: "200px"
              }
            }), /* @__PURE__ */jsx("br", {}), component.showHint && /* @__PURE__ */jsx("span", {
              children: (_component$content = component.content) === null || _component$content === void 0 ? void 0 : _component$content.hint
            }), /* @__PURE__ */jsx(TextField, {
              variant: "standard",
              required: (_props$component$vali = props.component.validation) !== null && _props$component$vali !== void 0 && (_props$component$vali = _props$component$vali.validation_required) !== null && _props$component$vali !== void 0 && _props$component$vali.isActive ? true : false,
              value: state.value,
              size: "small"
            })]
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=Barcode-legacy-CcRc0o3o.js.map
