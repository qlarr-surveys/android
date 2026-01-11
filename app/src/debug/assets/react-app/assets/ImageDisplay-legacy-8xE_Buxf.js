;
(function () {
  System.register(['./index-legacy-1AolfYmu.js', './Android-legacy-BuzJjxPU.js'], function (exports, module) {
    'use strict';

    var jsx, buildResourceUrl;
    return {
      setters: [module => {
        jsx = module.as;
      }, module => {
        buildResourceUrl = module.a4;
      }],
      execute: function execute() {
        exports("default", ImageDisplay);
        function ImageDisplay(props) {
          var _props$component$reso, _props$component$reso2, _props$component$imag;
          const imageUrl = (_props$component$reso = props.component.resources) !== null && _props$component$reso !== void 0 && _props$component$reso.imageUrl ? buildResourceUrl(props.component.resources.imageUrl) : "";
          return ((_props$component$reso2 = props.component.resources) === null || _props$component$reso2 === void 0 ? void 0 : _props$component$reso2.imageUrl) && /* @__PURE__ */jsx("div", {
            style: {
              textAlign: "center",
              padding: "1em"
            },
            children: /* @__PURE__ */jsx("img", {
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
//# sourceMappingURL=ImageDisplay-legacy-8xE_Buxf.js.map
