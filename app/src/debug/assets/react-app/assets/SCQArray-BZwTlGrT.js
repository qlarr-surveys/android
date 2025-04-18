import { aj as useTheme, j as jsxRuntimeExports, R as React } from "./index-GLBW3_uR.js";
import { H as useSelector, aU as shallowEqual, U as useDispatch, aV as valueChange } from "./use-service-BKPqOjBj.js";
import { V as Validation } from "./index-BrBZ-Fwp.js";
import { T as TableContainer, a as Table, b as TableRow, c as TableBody } from "./TableRow-qjPZBulP.js";
import { T as TableHead } from "./TableHead-Dp1JXqc_.js";
import { T as TableCell } from "./TableCell-ClhN52D1.js";
import { R as Radio } from "./Radio-DaBGRTzG.js";
import "./isTouchDevice-BBMDVXJ0.js";
import "./common-BgJdLjBL.js";
import "./Close-CW1wFndk.js";
import "./Card-yDMxaNNi.js";
import "./Toolbar-D9d8xIaL.js";
import "./tableRowClasses-B3LTqsSH.js";
import "./SwitchBase-CV68NIYO.js";
import "./RadioGroupContext-xtiHGRVQ.js";
import "./radioClasses-Gcs6PRWb.js";
function SCQArray(props) {
  const theme = useTheme();
  let columns = props.component.answers.filter(
    (answer) => answer.type == "column"
  );
  let rows = props.component.answers.filter((answer) => answer.type == "row");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, {}, "content"),
      columns.map((option) => {
        var _a;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          TableCell,
          {
            sx: {
              fontFamily: theme.textStyles.text.font,
              color: theme.textStyles.text.color,
              fontSize: theme.textStyles.text.size
            },
            children: (_a = option.content) == null ? void 0 : _a.label
          },
          option.qualifiedCode
        );
      })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: rows.map((answer) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(React.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        SCQArrayRow,
        {
          answer,
          choices: columns
        },
        answer.qualifiedCode
      ) }, answer.qualifiedCode);
    }) })
  ] }) });
}
function SCQArrayRow(props) {
  var _a;
  const theme = useTheme();
  const state = useSelector((state2) => {
    var _a2, _b, _c;
    return {
      show_errors: state2.runState.values.Survey.show_errors,
      validity: (_a2 = state2.runState.values[props.answer.qualifiedCode]) == null ? void 0 : _a2.validity,
      value: (_b = state2.runState.values[props.answer.qualifiedCode]) == null ? void 0 : _b.value,
      relevance: (_c = state2.runState.values[props.answer.qualifiedCode]) == null ? void 0 : _c.relevance
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(
      valueChange({
        componentCode: event.target.name,
        value: event.target.value
      })
    );
  };
  const invalid = (state.show_errors || state.isDirty) && state.validity === false;
  return typeof state.relevance === "undefined" || state.relevance ? /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TableCell,
        {
          sx: {
            fontFamily: theme.textStyles.text.font,
            color: theme.textStyles.text.color,
            fontSize: theme.textStyles.text.size,
            borderBottom: invalid ? "0" : "",
            padding: "8px"
          },
          children: (_a = props.answer.content) == null ? void 0 : _a.label
        }
      ),
      props.choices.map((option) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          TableCell,
          {
            component: "th",
            scope: "row",
            sx: {
              borderBottom: invalid ? "0" : "",
              padding: "8px"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Radio,
              {
                name: props.answer.qualifiedCode,
                onChange: handleChange,
                checked: state.value === option.code,
                value: option.code,
                sx: {
                  color: theme.textStyles.text.color
                }
              }
            )
          },
          option.code
        );
      })
    ] }, props.answer.code),
    invalid ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      TableCell,
      {
        sx: { padding: "8px" },
        colSpan: props.choices ? props.choices.length + 1 : 1,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Validation, { component: props.answer })
      }
    ) }) : ""
  ] }) : "";
}
export {
  SCQArray as default
};
//# sourceMappingURL=SCQArray-BZwTlGrT.js.map
