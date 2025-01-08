import { bv as CLOUD_URL, bw as BACKEND_BASE_URL, bx as PROTOCOL, by as FRONT_END_HOST } from "./use-service-CuBoVPEx.js";
const buildResourceUrl = (fileName, surveyId = null, example = null) => {
  if (!surveyId) {
    surveyId = sessionStorage.getItem("surveyId");
  }
  if (example == null) {
    example = sessionStorage.getItem("isGuest") == 1;
  }
  if (example) {
    return "".concat(CLOUD_URL, "/survey/").concat(surveyId, "/resource/").concat(fileName);
  } else {
    return "".concat(BACKEND_BASE_URL, "/survey/").concat(surveyId, "/resource/").concat(fileName);
  }
};
const sharingUrl = (surveyId, preview, lang) => {
  let segment = "run-survey";
  let searchParams = "";
  return "".concat(PROTOCOL, "://").concat(FRONT_END_HOST, "/").concat(segment, "/").concat(surveyId).concat(searchParams);
};
async function getFileFromPath(filePath) {
  const response = await fetch(filePath);
  const blob = await response.blob();
  const fileName = filePath.substring(filePath.lastIndexOf("/") + 1);
  return new File([blob], fileName);
}
export {
  buildResourceUrl as b,
  getFileFromPath as g,
  sharingUrl as s
};
//# sourceMappingURL=common-B0QmLEBc.js.map
