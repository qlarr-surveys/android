import { r as reactExports, j as jsxRuntimeExports, B as Box } from "./index-GLBW3_uR.js";
import { A as AdapterDayjs } from "./index-lAKNsvQc.js";
import { d as dayjs } from "./dayjs.min-C0qtLe5E.js";
import { M as useTranslation, aQ as Button } from "./use-service-BKPqOjBj.js";
import { L as LocalizationProvider, D as DateTimePicker } from "./DateTimePicker-D2Dt6KIH.js";
import { a as FormHelperText, T as TextField } from "./TextField-Dshtidi6.js";
const renderInput = (props) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    TextField,
    {
      ...props,
      variant: "outlined",
      sx: {
        "& .MuiOutlinedInput-root": {
          borderRadius: "16px",
          backgroundColor: "#f7f8fc",
          border: "none"
        },
        "& .MuiInputLabel-root": {
          color: "#a6a8ab",
          fontWeight: "500"
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none"
        }
      }
    }
  );
};
const SurveyActiveFromTo = ({
  error,
  surveyActiveFrom: initialSurveyActiveFrom,
  surveyActiveTo: initialSurveyActiveTo,
  onSurveyActiveFromChanged,
  onSurveyActiveToChanged,
  disabled
}) => {
  const { t } = useTranslation("manage");
  const [surveyActiveFrom, setSurveyActiveFrom] = reactExports.useState(
    initialSurveyActiveFrom
  );
  const [surveyActiveTo, setSurveyActiveTo] = reactExports.useState(initialSurveyActiveTo);
  const [isDirty, setIsDirty] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setSurveyActiveFrom(initialSurveyActiveFrom);
    setSurveyActiveTo(initialSurveyActiveTo);
  }, [initialSurveyActiveFrom, initialSurveyActiveTo]);
  const handleSurveyActiveFromChange = (newValue) => {
    setSurveyActiveFrom(newValue);
    setIsDirty(true);
  };
  const handleSurveyActiveToChange = (newValue) => {
    setSurveyActiveTo(newValue);
    setIsDirty(true);
  };
  const handleSaveChanges = () => {
    const fromChanged = dayjs(surveyActiveFrom).toDate();
    const toChanged = dayjs(surveyActiveTo).toDate();
    if (surveyActiveFrom && !isEqualDates(fromChanged, dayjs(initialSurveyActiveFrom).toDate())) {
      onSurveyActiveFromChanged(fromChanged);
    }
    if (surveyActiveTo && !isEqualDates(toChanged, dayjs(initialSurveyActiveTo).toDate())) {
      onSurveyActiveToChanged(toChanged);
    }
    setIsDirty(false);
  };
  function isEqualDates(date1, date2) {
    if (!date1 && !date2) return true;
    if (!date1 || !date2) return false;
    return date1.getTime() === date2.getTime();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { display: "flex", flexDirection: "column", width: "100%", gap: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LocalizationProvider, { dateAdapter: AdapterDayjs, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { display: "flex", gap: 2, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        DateTimePicker,
        {
          disabled,
          label: t("label.from"),
          value: surveyActiveFrom,
          onChange: handleSurveyActiveFromChange,
          renderInput
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        DateTimePicker,
        {
          disabled,
          label: t("label.to"),
          value: surveyActiveTo,
          onChange: handleSurveyActiveToChange,
          renderInput
        }
      )
    ] }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { style: { color: "red" }, children: error }),
    isDirty && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleSaveChanges, variant: "contained", color: "primary", children: t("save_changes") })
  ] }) });
};
export {
  SurveyActiveFromTo as S
};
//# sourceMappingURL=index-Bu4bJcoo.js.map
