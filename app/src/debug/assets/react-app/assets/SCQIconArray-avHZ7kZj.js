import { a8 as useTheme, m as jsxRuntimeExports, Y as React } from "./index-jw8wap8F.js";
import { $ as columnMinWidth, K as useSelector, M as useDispatch, aa as buildResourceUrl, V as Validation, O as valueChange } from "./Android-BjPMgENh.js";
import { D as DynamicSvg } from "./index-FrfLOY1O.js";
import { T as TableContainer, a as Table, b as TableHead, c as TableRow, d as TableCell, e as TableBody } from "./TableRow-BPlxHfoP.js";
function SCQIconArray(props) {
  const theme = useTheme();
  const width = columnMinWidth();
  let columns = props.component.answers.filter(
    (answer) => answer.type == "column"
  );
  let rows = props.component.answers.filter((answer) => answer.type == "row");
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
          sx: { tableLayout: "fixed", minWidth: "".concat(columns.length * width, "px") },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TableCell,
                {
                  sx: {
                    width,
                    padding: "0px"
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
                      fontSize: theme.textStyles.text.size,
                      textAlign: "center",
                      width
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
                  choices: columns,
                  width
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
function SCQArrayRow(props) {
  var _a;
  const theme = useTheme();
  const isDirty = useSelector(
    (state2) => {
      var _a2;
      return (_a2 = state2.templateState[props.answer.qualifiedCode]) == null ? void 0 : _a2.isDirty;
    }
  );
  const show_errors = useSelector(
    (state2) => state2.runState.values.Survey.show_errors
  );
  const state = useSelector(
    (state2) => state2.runState.values[props.answer.qualifiedCode]
  );
  const validity = React.useMemo(() => state == null ? void 0 : state.validity, [state]);
  const value = React.useMemo(() => state == null ? void 0 : state.value, [state]);
  const relevance = React.useMemo(() => state == null ? void 0 : state.relevance, [state]);
  const dispatch = useDispatch();
  const handleChange = (value2) => {
    dispatch(
      valueChange({
        componentCode: props.answer.qualifiedCode,
        value: value2
      })
    );
  };
  const invalid = (show_errors || isDirty) && validity === false;
  return typeof relevance === "undefined" || relevance ? /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TableCell,
        {
          sx: {
            fontFamily: theme.textStyles.text.font,
            color: theme.textStyles.text.color,
            fontSize: theme.textStyles.text.size,
            borderBottom: invalid ? "0" : "",
            padding: "2px"
          },
          children: (_a = props.answer.content) == null ? void 0 : _a.label
        }
      ),
      props.choices.map((option) => {
        var _a2, _b;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          TableCell,
          {
            component: "th",
            scope: "row",
            sx: {
              borderBottom: invalid ? "0" : "",
              padding: "2px",
              width: props.width
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              DynamicSvg,
              {
                onIconClick: () => handleChange(option.code),
                imageHeight: "64px",
                isSelected: value == option.code,
                theme,
                svgUrl: ((_a2 = option == null ? void 0 : option.resources) == null ? void 0 : _a2.icon) ? buildResourceUrl((_b = option == null ? void 0 : option.resources) == null ? void 0 : _b.icon) : void 0
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
        sx: { padding: "2px" },
        colSpan: props.choices ? props.choices.length + 1 : 1,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Validation, { component: props.answer })
      }
    ) }) : ""
  ] }) : "";
}
export {
  SCQIconArray as default
};
//# sourceMappingURL=SCQIconArray-avHZ7kZj.js.map
