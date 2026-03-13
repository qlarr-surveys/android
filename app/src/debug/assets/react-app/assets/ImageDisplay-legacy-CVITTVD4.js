;
(function () {
  System.register(['./index-legacy-BxErIW5G.js', './Android-legacy-CFOeS1X5.js', './mui-legacy-CrWa9ZRQ.js', './vendor-legacy-HgAAkC3y.js', './i18n-legacy-QVJZeAmy.js', './redux-legacy-N3F3Fg7Q.js', './dnd-legacy-Cs5Ow6iI.js'], function (exports, module) {
    'use strict';

    var jsx, buildResourceUrl;
    return {
      setters: [module => {
        jsx = module.n;
      }, module => {
        buildResourceUrl = module.e;
      }, null, null, null, null, null],
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
//# sourceMappingURL=ImageDisplay-legacy-CVITTVD4.js.map
