;
(function () {
  System.register(['./index-legacy-NtFnlkty.js', './Android-legacy-DzAx3JE1.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports, buildResourceUrl;
    return {
      setters: [module => {
        jsxRuntimeExports = module.m;
      }, module => {
        buildResourceUrl = module.a0;
      }],
      execute: function execute() {
        exports("default", ImageDisplay);
        function ImageDisplay(props) {
          var _props$component$reso, _props$component$reso2, _props$component$imag;
          const imageUrl = (_props$component$reso = props.component.resources) !== null && _props$component$reso !== void 0 && _props$component$reso.imageUrl ? buildResourceUrl(props.component.resources.imageUrl) : "";
          return ((_props$component$reso2 = props.component.resources) === null || _props$component$reso2 === void 0 ? void 0 : _props$component$reso2.imageUrl) && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            style: {
              textAlign: "center",
              padding: "1em"
            },
            children: /* @__PURE__ */jsxRuntimeExports.jsx("img", {
              style: {
                width: (_props$component$imag = props.component.imageWidth) !== null && _props$component$imag !== void 0 && _props$component$imag.endsWith("%") ? props.component.imageWidth : void 0,
                maxWidth: "100%"
              },
              src: imageUrl
            })
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=ImageDisplay-legacy-D6GoUCK7.js.map
