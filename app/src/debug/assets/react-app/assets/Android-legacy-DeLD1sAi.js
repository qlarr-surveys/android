;
(function () {
  System.register(['./index-legacy-VHGc_nGn.js', './use-service-legacy-uNDfwPef.js', './index-legacy-XRFhxuym.js', './isTouchDevice-legacy-Ch1rHmnJ.js', './common-legacy-JH1w4dyZ.js', './Close-legacy-DueKC2rz.js', './Card-legacy-D9YP2dW9.js', './Toolbar-legacy-HvxMh-_e.js'], function (exports, module) {
    'use strict';

    var useParams, jsxRuntimeExports, getparam, Provider, runStore, RunSurvey;
    return {
      setters: [module => {
        useParams = module.u;
        jsxRuntimeExports = module.j;
      }, module => {
        getparam = module.g;
        Provider = module.P;
        runStore = module.r;
      }, module => {
        RunSurvey = module.R;
      }, null, null, null, null, null],
      execute: function execute() {
        exports("default", Android);
        function Android() {
          const surveyId = getparam(useParams(), "surveyId");
          sessionStorage.setItem("surveyId", surveyId);
          sessionStorage.setItem("isGuest", false);
          return /* @__PURE__ */jsxRuntimeExports.jsx(Provider, {
            store: runStore,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(RunSurvey, {})
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=Android-legacy-DeLD1sAi.js.map
