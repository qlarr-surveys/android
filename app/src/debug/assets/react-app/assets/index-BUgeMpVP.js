import { j as jsxRuntimeExports, s as useNavigate, r as reactExports, B as Box } from "./index-GLBW3_uR.js";
import { K as KeyboardArrowDown, r as routes } from "./Web-DadasGuA.js";
import { M as useTranslation, av as FormControl, S as Select, N as MenuItem, R as useService, U as useDispatch, T as Typography, aO as Stack, aQ as Button, X as setLoading, aR as PROCESSED_ERRORS } from "./use-service-BKPqOjBj.js";
import { l as localDateToServerDateTime } from "./DateUtils-D9XCaXee.js";
import { S as SURVEY_MODE } from "./survey-B8WvHOv0.js";
import { I as InputLabel, T as TextField, a as FormHelperText } from "./TextField-Dshtidi6.js";
import { S as SurveyActiveFromTo } from "./index-Bu4bJcoo.js";
import { C as Card } from "./Card-yDMxaNNi.js";
import { F as FormGroup } from "./FormGroup-_z60cN7g.js";
import "./Checkbox-d90L6mhC.js";
import "./SwitchBase-CV68NIYO.js";
import "./Tabs-BNei_Rjp.js";
import "./radioClasses-Gcs6PRWb.js";
import "./tableRowClasses-B3LTqsSH.js";
import "./FormControlLabel-Cjy18-QD.js";
import "./index-lAKNsvQc.js";
import "./dayjs.min-C0qtLe5E.js";
import "./DateTimePicker-D2Dt6KIH.js";
import "./InputAdornment-JAdhA1qq.js";
const mainContainer = "_mainContainer_17u7e_1";
const createUserCard = "_createUserCard_17u7e_9";
const blockItem = "_blockItem_17u7e_13";
const errorText = "_errorText_17u7e_20";
const styles = {
  mainContainer,
  createUserCard,
  blockItem,
  errorText
};
function CustomArrow(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    KeyboardArrowDown,
    {
      ...props,
      style: {
        color: "#181735"
      }
    }
  );
}
const SurveyMode = ({ surveyMode, onSurveyModeChanged }) => {
  const { t } = useTranslation("manage");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { id: "survey-mode-label", children: t("label.survey_mode") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Select,
      {
        labelId: "survey-mode-label",
        id: "demo-simple-select",
        value: surveyMode,
        label: t("label.survey_mode"),
        onChange: onSurveyModeChanged,
        sx: {
          minWidth: "160px",
          borderRadius: "12px",
          backgroundColor: "#f7f8fc",
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none"
          }
        },
        IconComponent: CustomArrow,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: SURVEY_MODE.WEB, children: t("mode.".concat(SURVEY_MODE.WEB)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: SURVEY_MODE.OFFLINE, children: t("mode.".concat(SURVEY_MODE.OFFLINE)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: SURVEY_MODE.MIXED, children: t("mode.".concat(SURVEY_MODE.MIXED)) })
        ]
      }
    )
  ] });
};
function CreateSurvey() {
  const surveyService = useService("survey");
  const navigate = useNavigate();
  const { t } = useTranslation("manage");
  const dispatch = useDispatch();
  const [surveyName, setSurveyName] = reactExports.useState("");
  const [surveyNameError, setSurveyNameError] = reactExports.useState("");
  const [surveyDateError, setSurveyDateError] = reactExports.useState("");
  const [surveyMode, setSurveyMode] = reactExports.useState(SURVEY_MODE.MIXED);
  const [surveyActiveFrom, setSurveyActiveFrom] = reactExports.useState(null);
  const [surveyActiveTo, setSurveyActiveTo] = reactExports.useState(null);
  const onSurveyNameChanged = (e) => {
    setSurveyName(e.target.value);
    setSurveyNameError("");
  };
  const onSurveyModeChanged = (e) => {
    setSurveyMode(e.target.value);
  };
  const onSurveyActiveFromChanged = (value) => {
    setSurveyDateError("");
    setSurveyActiveFrom(value.toDate());
  };
  const onSurveyActiveToChanged = (value) => {
    setSurveyDateError("");
    setSurveyActiveTo(value.toDate());
  };
  const validate = () => {
    setSurveyNameError("");
    if (surveyName.length == 0) {
      setSurveyNameError(t("survey_required"));
      return false;
    }
    return true;
  };
  const goDashboard = () => {
    navigate(routes.dashboard);
  };
  const onSubmit = () => {
    if (!validate()) {
      return;
    }
    dispatch(setLoading(true));
    const data = {
      name: surveyName,
      usage: surveyMode
    };
    if (surveyActiveFrom) {
      data.startDate = localDateToServerDateTime(surveyActiveFrom);
    }
    if (surveyActiveTo) {
      data.endDate = localDateToServerDateTime(surveyActiveTo);
    }
    surveyService.createSurvey(data).then(() => {
      goDashboard();
    }).catch((processedError) => {
      if (processedError.name == PROCESSED_ERRORS.DUPLICATE_SURVEY_NAME.name) {
        setSurveyNameError(t("processed_errors.".concat(processedError.name)));
      } else if (processedError.name == PROCESSED_ERRORS.INVALID_SURVEY_DATES.name) {
        setSurveyDateError(t("processed_errors.".concat(processedError.name)));
      }
    }).finally(() => {
      dispatch(setLoading(false));
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles.mainContainer, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: styles.createUserCard, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", children: t("create_survey.title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(FormGroup, { className: styles.formGroup, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextField,
        {
          sx: { maxWidth: "400px" },
          error: surveyNameError.length > 0,
          required: true,
          value: surveyName,
          id: "surveyName",
          label: t("label.survey_name"),
          name: "surveyName",
          onChange: onSurveyNameChanged,
          variant: "standard"
        }
      ),
      surveyNameError && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { className: styles.errorText, children: surveyNameError }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { flexDirection: "row", gap: 5, sx: { mt: "40px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles.blockItem, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SurveyMode,
          {
            surveyMode,
            onSurveyModeChanged
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles.blockItem, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SurveyActiveFromTo,
          {
            error: surveyDateError,
            surveyActiveFrom,
            surveyActiveTo,
            onSurveyActiveFromChanged,
            onSurveyActiveToChanged
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", justifyContent: "flex-end", mt: "40px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: goDashboard, children: t("action_btn.cancel") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onSubmit, children: t("action_btn.save") })
    ] })
  ] }) });
}
export {
  CreateSurvey as default
};
//# sourceMappingURL=index-BUgeMpVP.js.map
