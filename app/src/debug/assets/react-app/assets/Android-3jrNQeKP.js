import { u as useParams, j as jsxRuntimeExports } from "./index-GLBW3_uR.js";
import { g as getparam, P as Provider, r as runStore } from "./use-service-BKPqOjBj.js";
import { R as RunSurvey } from "./index-BrBZ-Fwp.js";
import "./isTouchDevice-BBMDVXJ0.js";
import "./common-BgJdLjBL.js";
import "./Close-CW1wFndk.js";
import "./Card-yDMxaNNi.js";
import "./Toolbar-D9d8xIaL.js";
function Android() {
  const surveyId = getparam(useParams(), "surveyId");
  sessionStorage.setItem("surveyId", surveyId);
  sessionStorage.setItem("isGuest", false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Provider, { store: runStore, children: /* @__PURE__ */ jsxRuntimeExports.jsx(RunSurvey, {}) });
}
export {
  Android as default
};
//# sourceMappingURL=Android-3jrNQeKP.js.map
