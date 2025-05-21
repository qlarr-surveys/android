import { by as CLOUD_URL, bz as BACKEND_BASE_URL, bA as PROTOCOL, bB as FRONT_END_HOST } from "./use-service-BKPqOjBj.js";
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
//# sourceMappingURL=common-BgJdLjBL.js.map
