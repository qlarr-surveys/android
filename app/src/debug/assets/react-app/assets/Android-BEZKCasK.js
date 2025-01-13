import { u as useParams, j as jsxRuntimeExports } from "./index-Ceq5-OQz.js";
import { g as getparam, P as Provider, r as runStore } from "./use-service-Ce_K4Bne.js";
import { R as RunSurvey } from "./index-Bo6nno8Y.js";
import "./isTouchDevice-BsmdQ_b8.js";
import "./common-BojVgIsY.js";
import "./CardMedia-CjzqHFpn.js";
import "./Card-BDihdaOb.js";
import "./Toolbar-D1ad8WJv.js";
function Android() {
  const surveyId = getparam(useParams(), "surveyId");
  sessionStorage.setItem("surveyId", surveyId);
  sessionStorage.setItem("isGuest", false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Provider, { store: runStore, children: /* @__PURE__ */ jsxRuntimeExports.jsx(RunSurvey, {}) });
}
export {
  Android as default
};
//# sourceMappingURL=Android-BEZKCasK.js.map
