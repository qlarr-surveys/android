;
(function () {
  function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
  function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
  System.register(['./use-service-legacy-DLuVKbJp.js'], function (exports, module) {
    'use strict';

    var CLOUD_URL, BACKEND_BASE_URL, PROTOCOL, FRONT_END_HOST;
    return {
      setters: [module => {
        CLOUD_URL = module.bw;
        BACKEND_BASE_URL = module.bx;
        PROTOCOL = module.by;
        FRONT_END_HOST = module.bz;
      }],
      execute: function execute() {
        exports("g", getFileFromPath);
        const buildResourceUrl = exports("b", (fileName, surveyId = null, example = null) => {
          if (!surveyId) {
            surveyId = sessionStorage.getItem("surveyId");
          }
          if (example == null) {
            example = sessionStorage.getItem("isGuest") == 1;
          }
          if (example) {
            return `${CLOUD_URL}/survey/${surveyId}/resource/${fileName}`;
          } else {
            return `${BACKEND_BASE_URL}/survey/${surveyId}/resource/${fileName}`;
          }
        });
        const sharingUrl = exports("s", (surveyId, preview, lang) => {
          let segment = "run-survey";
          let searchParams = "";
          return `${PROTOCOL}://${FRONT_END_HOST}/${segment}/${surveyId}${searchParams}`;
        });
        function getFileFromPath(_x) {
          return _getFileFromPath.apply(this, arguments);
        }
        function _getFileFromPath() {
          _getFileFromPath = _asyncToGenerator(function* (filePath) {
            const response = yield fetch(filePath);
            const blob = yield response.blob();
            const fileName = filePath.substring(filePath.lastIndexOf("/") + 1);
            return new File([blob], fileName);
          });
          return _getFileFromPath.apply(this, arguments);
        }
      }
    };
  });
})();
//# sourceMappingURL=common-legacy-BfMJ8X0r.js.map
