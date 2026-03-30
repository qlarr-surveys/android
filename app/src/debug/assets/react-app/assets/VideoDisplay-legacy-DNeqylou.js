;
(function () {
  System.register(['./index-legacy-CoMmlwbr.js', './Android-legacy-Csf5qFR4.js', './player-legacy-BtDP29wV.js', './mui-legacy-b38CRKaY.js', './vendor-legacy-lhtLtiSI.js', './i18n-legacy-BRT6G2_g.js', './redux-legacy-ZqSxVvAn.js', './editor-legacy-Dx3AxXyy.js', './dnd-legacy-DGW9B2he.js', './charts-legacy-BBm9rbLh.js'], function (exports, module) {
    'use strict';

    var jsx, buildResourceUrl, ReactPlayer, useTheme;
    return {
      setters: [module => {
        jsx = module.n;
      }, module => {
        buildResourceUrl = module.e;
      }, module => {
        ReactPlayer = module.R;
      }, module => {
        useTheme = module.u;
      }, null, null, null, null, null, null],
      execute: function execute() {
        exports("default", VideoDisplay);
        function VideoDisplay(props) {
          var _props$component$reso, _props$component$reso2;
          const videUrl = (_props$component$reso = props.component.resources) !== null && _props$component$reso !== void 0 && _props$component$reso.videoUrl ? buildResourceUrl(props.component.resources.videoUrl) : "";
          useTheme();
          return ((_props$component$reso2 = props.component.resources) === null || _props$component$reso2 === void 0 ? void 0 : _props$component$reso2.videoUrl) && /* @__PURE__ */jsx("div", {
            style: {
              position: "relative",
              marginTop: "16px",
              // 16:9 aspect ratio
              paddingTop: props.component.audio_only ? "10%" : "56%"
            },
            children: /* @__PURE__ */jsx(ReactPlayer, {
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
//# sourceMappingURL=VideoDisplay-legacy-DNeqylou.js.map
