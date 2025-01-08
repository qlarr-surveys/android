import { u as useParams, j as jsxRuntimeExports } from "./index-X8N9IRh7.js";
import { g as getparam, P as Provider, r as runStore } from "./use-service-CuBoVPEx.js";
import { R as RunSurvey } from "./index-BnRFVA_C.js";
import "./isTouchDevice-CpP8rLyq.js";
import "./common-B0QmLEBc.js";
import "./Close-DY1WrJHS.js";
import "./Card-CH4VnLZu.js";
import "./Toolbar-BRqDBp3L.js";
function Android() {
  const surveyId = getparam(useParams(), "surveyId");
  sessionStorage.setItem("surveyId", surveyId);
  sessionStorage.setItem("isGuest", false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Provider, { store: runStore, children: /* @__PURE__ */ jsxRuntimeExports.jsx(RunSurvey, {}) });
}
export {
  Android as default
};
//# sourceMappingURL=Android-CRvwC6CR.js.map
