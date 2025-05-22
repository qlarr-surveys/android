;
(function () {
<<<<<<<< HEAD:app/src/debug/assets/react-app/assets/ImageDisplay-legacy-DcCS3KWg.js
  System.register(['./index-legacy-D2IAuBBo.js', './Android-legacy-BgepuGDy.js'], function (exports, module) {
========
  System.register(['./index-legacy-ppEgxGbl.js', './common-legacy-Cdw-XyXm.js', './use-service-legacy-BbL3A7cT.js'], function (exports, module) {
>>>>>>>> main:app/src/debug/assets/react-app/assets/ImageDisplay-legacy-sJu1f--M.js
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
          var _props$component$reso, _props$component$reso2;
          const imageUrl = (_props$component$reso = props.component.resources) !== null && _props$component$reso !== void 0 && _props$component$reso.imageUrl ? buildResourceUrl(props.component.resources.imageUrl) : "";
          return ((_props$component$reso2 = props.component.resources) === null || _props$component$reso2 === void 0 ? void 0 : _props$component$reso2.imageUrl) && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            style: {
              textAlign: "center"
            },
            children: /* @__PURE__ */jsxRuntimeExports.jsx("img", {
              style: {
                width: "100%",
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
<<<<<<<< HEAD:app/src/debug/assets/react-app/assets/ImageDisplay-legacy-DcCS3KWg.js
//# sourceMappingURL=ImageDisplay-legacy-DcCS3KWg.js.map
========
//# sourceMappingURL=ImageDisplay-legacy-sJu1f--M.js.map
>>>>>>>> main:app/src/debug/assets/react-app/assets/ImageDisplay-legacy-sJu1f--M.js
