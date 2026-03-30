import { n as jsx, o as jsxs } from "./index-Eqa58ok4.js";
import { b as React } from "./vendor-BxDgTFXe.js";
import { u as useSelector, s as shallowEqual, b as useDispatch } from "./redux-CLa1pDoQ.js";
import { u as useColumnMinWidth, C as Content, V as Validation, v as valueChange } from "./Android-D_6dlUuh.js";
import { u as useTheme, a3 as TableHead, a4 as TableRow, a5 as TableCell, a6 as TableBody, a7 as Table, a8 as TableContainer, a1 as Radio, a9 as Checkbox } from "./mui-D3o-L0Jn.js";
import "./i18n-No79Kq9Z.js";
import "./editor-DK7jwn5J.js";
import "./dnd-BTRdTaTs.js";
import "./charts-wwscgYhh.js";
function Array(props) {
  useTheme();
  let columns = props.component.answers.filter((answer) => answer.type == "column");
  let rows = props.component.answers.filter((answer) => answer.type == "row");
  const {
    header,
    rowLabel
  } = useColumnMinWidth(null, props.component);
  return /* @__PURE__ */ jsx(TableContainer, { sx: {
    overflowX: "auto",
    maxWidth: "100%"
  }, children: /* @__PURE__ */ jsxs(Table, { sx: {
    tableLayout: "fixed"
  }, children: [
    /* @__PURE__ */ jsx(TableHead, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
      /* @__PURE__ */ jsx(TableCell, { sx: {
        padding: "2px",
        width: rowLabel + "px"
      } }, "content"),
      columns.map((option) => {
        var _a;
        return /* @__PURE__ */ jsx(TableCell, { sx: {
          color: "inherit",
          padding: "2px",
          width: header + "px"
        }, children: /* @__PURE__ */ jsx(Content, { elementCode: option.qualifiedCode, name: "label", content: (_a = option.content) == null ? void 0 : _a.label }) }, option.qualifiedCode);
      })
    ] }) }),
    /* @__PURE__ */ jsx(TableBody, { children: rows.map((answer) => {
      return /* @__PURE__ */ jsx(React.Fragment, { children: /* @__PURE__ */ jsx(ArrayRow, { type: props.component.type, answer, choices: columns }, answer.qualifiedCode) }, answer.qualifiedCode);
    }) })
  ] }) });
}
function ArrayRow(props) {
  var _a;
  useTheme();
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
      dispatch(valueChange({
        componentCode: event.target.name,
        value: event.target.value
      }));
    } else if (props.type === "mcq_array") {
      let currentValue = state.value || [];
      let value = [...currentValue];
      if (event.target.checked) {
        value.push(event.target.value);
      } else {
        value = value.filter((el) => el !== event.target.value);
      }
      dispatch(valueChange({
        componentCode: event.target.name,
        value
      }));
    }
  };
  const invalid = (state.show_errors || state.isDirty) && state.validity === false;
  return typeof state.relevance === "undefined" || state.relevance ? /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsxs(TableRow, { "data-code": props.answer.code, children: [
      /* @__PURE__ */ jsx(TableCell, { sx: {
        borderBottom: invalid ? "0" : "",
        padding: "2px",
        color: "inherit",
        wordWrap: "break-word"
      }, children: /* @__PURE__ */ jsx(Content, { elementCode: props.answer.qualifiedCode, name: "label", content: (_a = props.answer.content) == null ? void 0 : _a.label }) }),
      props.choices.map((option) => {
        return /* @__PURE__ */ jsx(TableCell, { component: "th", scope: "row", sx: {
          borderBottom: invalid ? "0" : "",
          padding: "2px"
        }, children: props.type === "scq_array" ? /* @__PURE__ */ jsx(Radio, { name: props.answer.qualifiedCode, onChange: handleChange, checked: state.value === option.code, value: option.code }) : /* @__PURE__ */ jsx(Checkbox, { name: props.answer.qualifiedCode, onChange: handleChange, checked: (state.value || []).indexOf(option.code) > -1, value: option.code }) }, option.code);
      })
    ] }, props.answer.code),
    invalid ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { sx: {
      padding: "8px"
    }, colSpan: props.choices ? props.choices.length + 1 : 1, children: /* @__PURE__ */ jsx(Validation, { component: props.answer }) }) }) : ""
  ] }) : "";
}
export {
  Array as default
};
//# sourceMappingURL=Array-BjS1UZ73.js.map
