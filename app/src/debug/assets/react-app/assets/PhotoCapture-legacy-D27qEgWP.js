;
(function () {
  System.register(['./index-legacy-BxErIW5G.js', './redux-legacy-N3F3Fg7Q.js', './Android-legacy-CFOeS1X5.js', './mui-legacy-CrWa9ZRQ.js', './vendor-legacy-HgAAkC3y.js', './i18n-legacy-QVJZeAmy.js', './dnd-legacy-Cs5Ow6iI.js'], function (exports, module) {
    'use strict';

    var jsxs, jsx, useSelector, useDispatch, useService, previewUrlByFilename, getFileFromPath, uploadFile, valueChange, Box;
    return {
      setters: [module => {
        jsxs = module.o;
        jsx = module.n;
      }, module => {
        useSelector = module.u;
        useDispatch = module.b;
      }, module => {
        useService = module.a;
        previewUrlByFilename = module.p;
        getFileFromPath = module.g;
        uploadFile = module.c;
        valueChange = module.v;
      }, module => {
        Box = module.x;
      }, null, null, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "\n._container_bvkr6_2 {\n  text-align: center;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        exports("default", PhotoCapture);
        const container = "_container_bvkr6_2";
        const styles = {
          container: container
        };
        function PhotoCapture(props) {
          var _component$content;
          const runService = useService("run");
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
            var _component$validation, _component$validation2;
            const code = component.qualifiedCode;
            const validationMaxSize = ((_component$validation = component.validation) === null || _component$validation === void 0 || (_component$validation = _component$validation.validation_max_file_size) === null || _component$validation === void 0 ? void 0 : _component$validation.isActive) && ((_component$validation2 = component.validation) === null || _component$validation2 === void 0 || (_component$validation2 = _component$validation2.validation_max_file_size) === null || _component$validation2 === void 0 ? void 0 : _component$validation2.max_size) || -1;
            const IMAGE_MAX_SIZE_KB = 10240;
            const maxFileSize = validationMaxSize > 0 ? Math.min(validationMaxSize, IMAGE_MAX_SIZE_KB) : IMAGE_MAX_SIZE_KB;
            if (preview && mode == "offline") {
              getFileFromPath("/dummy_image.png").then(response => {
                uploadFile(runService, code, preview, response).then(response2 => {
                  dispatch(valueChange({
                    componentCode: props.component.qualifiedCode,
                    value: response2
                  }));
                }).catch(err => {
                  console.error(err);
                });
              });
            } else if (window["Android"]) {
              window["Android"].capturePhoto(code, maxFileSize);
              window["onPhotoCaptured" + code] = value => {
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
            sx: {
              maxHeight: "400px"
            },
            children: [!state.value || !state.value.stored_filename ? /* @__PURE__ */jsx("img", {
              onClick: onImageClick,
              src: "/camera.png",
              style: {
                maxHeight: "200px",
                maxWidth: "100%"
              }
            }) : /* @__PURE__ */jsx("img", {
              onClick: onImageClick,
              src: previewUrlByFilename(state.value.stored_filename),
              style: {
                maxHeight: "400px",
                maxWidth: "100%"
              }
            }), /* @__PURE__ */jsx("br", {}), component.showHint && /* @__PURE__ */jsx("span", {
              children: (_component$content = component.content) === null || _component$content === void 0 ? void 0 : _component$content.hint
            })]
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=PhotoCapture-legacy-D27qEgWP.js.map
