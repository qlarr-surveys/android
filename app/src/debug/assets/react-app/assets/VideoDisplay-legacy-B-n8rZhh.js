;
(function () {
<<<<<<<< HEAD:app/src/debug/assets/react-app/assets/VideoDisplay-legacy-C413AO5K.js
  System.register(['./index-legacy-D2IAuBBo.js', './Android-legacy-BgepuGDy.js', './index-legacy-BNnFOp2_.js'], function (exports, module) {
========
  System.register(['./index-legacy-ppEgxGbl.js', './common-legacy-Cdw-XyXm.js', './index-legacy-Cu0CslXm.js', './use-service-legacy-BbL3A7cT.js'], function (exports, module) {
>>>>>>>> main:app/src/debug/assets/react-app/assets/VideoDisplay-legacy-B-n8rZhh.js
    'use strict';

    var useTheme, jsxRuntimeExports, buildResourceUrl, ReactPlayer;
    return {
      setters: [module => {
<<<<<<<< HEAD:app/src/debug/assets/react-app/assets/VideoDisplay-legacy-C413AO5K.js
        useTheme = module.a1;
        jsxRuntimeExports = module.m;
========
        useTheme = module.aj;
        jsxRuntimeExports = module.j;
>>>>>>>> main:app/src/debug/assets/react-app/assets/VideoDisplay-legacy-B-n8rZhh.js
      }, module => {
        buildResourceUrl = module.a0;
      }, module => {
        ReactPlayer = module.R;
      }],
      execute: function execute() {
        exports("default", VideoDisplay);
        function VideoDisplay(props) {
          var _props$component$reso, _props$component$reso2;
          const videUrl = (_props$component$reso = props.component.resources) !== null && _props$component$reso !== void 0 && _props$component$reso.videoUrl ? buildResourceUrl(props.component.resources.videoUrl) : "";
          useTheme();
          return ((_props$component$reso2 = props.component.resources) === null || _props$component$reso2 === void 0 ? void 0 : _props$component$reso2.videoUrl) && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            style: {
              position: "relative",
              marginTop: "16px",
              // 16:9 aspect ratio
              paddingTop: props.component.audio_only ? "10%" : "56%"
            },
            children: /* @__PURE__ */jsxRuntimeExports.jsx(ReactPlayer, {
              url: videUrl,
              loop: props.component.loop || false,
              light: true,
              controls: true,
              config: {
                forceAudio: props.component.audio_only || false
              },
              style: {
                backgroundColor: "black",
                position: "absolute",
                top: "0",
                left: "0"
              },
              volume: 1,
              width: "100%",
              height: "100%"
            })
          });
        }
      }
    };
  });
})();
<<<<<<<< HEAD:app/src/debug/assets/react-app/assets/VideoDisplay-legacy-C413AO5K.js
//# sourceMappingURL=VideoDisplay-legacy-C413AO5K.js.map
========
//# sourceMappingURL=VideoDisplay-legacy-B-n8rZhh.js.map
>>>>>>>> main:app/src/debug/assets/react-app/assets/VideoDisplay-legacy-B-n8rZhh.js
