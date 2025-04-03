import { u as useParams, j as jsxRuntimeExports } from "./index-BXKg_X9w.js";
import { g as getparam, P as Provider, r as runStore } from "./use-service-D_BNczvS.js";
import { R as RunSurvey } from "./index-DAoruMCC.js";
import "./isTouchDevice-BxjlknWP.js";
import "./common-Bl2TiDan.js";
import "./CardMedia-naaIupyv.js";
import "./Card-BxTiTrtS.js";
import "./Toolbar-CZ6sMNbC.js";
function Android() {
  const surveyId = getparam(useParams(), "surveyId");
  sessionStorage.setItem("surveyId", surveyId);
  sessionStorage.setItem("isGuest", false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Provider, { store: runStore, children: /* @__PURE__ */ jsxRuntimeExports.jsx(RunSurvey, {}) });
}
export {
  Android as default
};
//# sourceMappingURL=Android-BHOrdm08.js.map
