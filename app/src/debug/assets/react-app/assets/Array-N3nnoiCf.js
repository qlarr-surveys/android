import { a8 as useTheme, m as jsxRuntimeExports, Y as React } from "./index-CictXEDK.js";
import { $ as columnMinWidth, K as useSelector, L as shallowEqual, M as useDispatch, V as Validation, O as valueChange } from "./Android-DqLwuEqA.js";
import { T as TableContainer, a as Table, b as TableHead, c as TableRow, d as TableCell, e as TableBody } from "./TableRow-DuuIpQsD.js";
import { R as Radio } from "./Radio-DJjDG5-k.js";
import { C as Checkbox } from "./Checkbox-ChIKtZY7.js";
import "./SwitchBase-D-ntMZCD.js";
import "./RadioGroupContext-BfJ2P-KG.js";
function Array(props) {
  const theme = useTheme();
  let columns = props.component.answers.filter(
    (answer) => answer.type == "column"
  );
  let rows = props.component.answers.filter((answer) => answer.type == "row");
  const { header, rowLabel } = columnMinWidth(null, props.component);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    TableContainer,
    {
      sx: {
        overflowX: "auto",
        maxWidth: "100%"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Table,
        {
          sx: {
            tableLayout: "fixed"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TableCell,
                {
                  sx: {
                    padding: "2px",
                    width: rowLabel + "px"
                  }
                },
                "content"
              ),
              columns.map((option) => {
                var _a;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TableCell,
                  {
                    sx: {
                      fontFamily: theme.textStyles.text.font,
                      color: theme.textStyles.text.color,
                      padding: "2px",
                      fontSize: theme.textStyles.text.size,
                      width: header + "px"
                    },
                    children: (_a = option.content) == null ? void 0 : _a.label
                  },
                  option.qualifiedCode
                );
              })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: rows.map((answer) => {
              return /* @__PURE__ */ jsxRuntimeExports.jsx(React.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                ArrayRow,
                {
                  type: props.component.type,
                  answer,
                  choices: columns
                },
                answer.qualifiedCode
              ) }, answer.qualifiedCode);
            }) })
          ]
        }
      )
    }
  );
}
function ArrayRow(props) {
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
    if (props.type === "scq_array") {
      dispatch(
        valueChange({
          componentCode: event.target.name,
          value: event.target.value
        })
      );
    } else if (props.type === "mcq_array") {
      let currentValue = state.value || [];
      let value = [...currentValue];
      if (event.target.checked) {
        value.push(event.target.value);
      } else {
        value = value.filter((el) => el !== event.target.value);
      }
      dispatch(
        valueChange({
          componentCode: event.target.name,
          value
        })
      );
    }
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
            padding: "2px",
            wordWrap: "break-word"
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
              padding: "2px"
            },
            children: props.type === "scq_array" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              Radio,
              {
                name: props.answer.qualifiedCode,
                onChange: handleChange,
                checked: state.value === option.code,
                value: option.code
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              Checkbox,
              {
                name: props.answer.qualifiedCode,
                onChange: handleChange,
                checked: (state.value || []).indexOf(option.code) > -1,
                value: option.code
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
  Array as default
};
//# sourceMappingURL=Array-N3nnoiCf.js.map
