;
(function () {
  System.register(['./index-legacy-DHZhPI7F.js', './use-service-legacy-Dvd5TXWp.js', './index-legacy-CBeFNk_C.js', './isTouchDevice-legacy-DpSdFl0J.js', './common-legacy-B-ynqPDp.js', './CardMedia-legacy-0wAW1jt0.js', './Card-legacy-C3ntY_pV.js', './Toolbar-legacy-Bj141DPD.js'], function (exports, module) {
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
//# sourceMappingURL=Android-legacy-CZqkPeT0.js.map
