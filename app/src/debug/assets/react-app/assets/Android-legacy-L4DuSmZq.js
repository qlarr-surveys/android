;
(function () {
  System.register(['./index-legacy-BLatMfxz.js', './use-service-legacy-DLuVKbJp.js', './index-legacy-CAdDVn6v.js', './isTouchDevice-legacy-Hx_ZLTbf.js', './common-legacy-BfMJ8X0r.js', './CardMedia-legacy-CywE8xFy.js', './Card-legacy-DAyj9G4N.js', './Toolbar-legacy-gatoM_w3.js'], function (exports, module) {
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
//# sourceMappingURL=Android-legacy-L4DuSmZq.js.map
