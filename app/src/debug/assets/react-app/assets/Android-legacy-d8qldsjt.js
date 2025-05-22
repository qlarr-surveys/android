;
(function () {
  System.register(['./index-legacy-ppEgxGbl.js', './use-service-legacy-BbL3A7cT.js', './index-legacy-VaWa31-C.js', './isTouchDevice-legacy-D04XAr6x.js', './common-legacy-Cdw-XyXm.js', './Close-legacy-CkOaATYN.js', './Card-legacy-nTgNTVv-.js', './Toolbar-legacy-CAJae3Jn.js'], function (exports, module) {
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
//# sourceMappingURL=Android-legacy-d8qldsjt.js.map
