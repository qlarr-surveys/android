import { n as jsx, o as jsxs } from "./index-Zbq57S4f.js";
import { b as React } from "./vendor-BxDgTFXe.js";
import { u as useSelector, b as useDispatch } from "./redux-CLa1pDoQ.js";
import { u as useColumnMinWidth, C as Content, e as buildResourceUrl, V as Validation, v as valueChange } from "./Android-BzAC49gk.js";
import { D as DynamicSvg } from "./index-C9kTF3n5.js";
import { u as useTheme, a3 as TableHead, a4 as TableRow, a5 as TableCell, a6 as TableBody, a7 as Table, a8 as TableContainer } from "./mui-D3o-L0Jn.js";
import "./i18n-No79Kq9Z.js";
import "./editor-DK7jwn5J.js";
import "./dnd-BTRdTaTs.js";
import "./charts-wwscgYhh.js";
function SCQIconArray(props) {
  useTheme();
  const width = useColumnMinWidth();
  let columns = props.component.answers.filter((answer) => answer.type == "column");
  let rows = props.component.answers.filter((answer) => answer.type == "row");
  return /* @__PURE__ */ jsx(TableContainer, { sx: {
    overflowX: "auto",
    maxWidth: "100%"
  }, children: /* @__PURE__ */ jsxs(Table, { sx: {
    tableLayout: "fixed",
    minWidth: "".concat(columns.length * width, "px")
  }, children: [
    /* @__PURE__ */ jsx(TableHead, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
      /* @__PURE__ */ jsx(TableCell, { sx: {
        width,
        padding: "0px"
      } }, "content"),
      columns.map((option) => {
        var _a;
        return /* @__PURE__ */ jsx(TableCell, { sx: {
          color: "inherit",
          textAlign: "center",
          width
        }, children: /* @__PURE__ */ jsx(Content, { elementCode: option.qualifiedCode, name: "label", content: (_a = option.content) == null ? void 0 : _a.label }) }, option.qualifiedCode);
      })
    ] }) }),
    /* @__PURE__ */ jsx(TableBody, { children: rows.map((answer) => {
      return /* @__PURE__ */ jsx(React.Fragment, { children: /* @__PURE__ */ jsx(SCQArrayRow, { answer, choices: columns, width }, answer.qualifiedCode) }, answer.qualifiedCode);
    }) })
  ] }) });
}
function SCQArrayRow(props) {
  var _a;
  const theme = useTheme();
  const isDirty = useSelector((state2) => {
    var _a2;
    return (_a2 = state2.templateState[props.answer.qualifiedCode]) == null ? void 0 : _a2.isDirty;
  });
  const show_errors = useSelector((state2) => state2.runState.values.Survey.show_errors);
  const state = useSelector((state2) => state2.runState.values[props.answer.qualifiedCode]);
  const validity = React.useMemo(() => state == null ? void 0 : state.validity, [state]);
  const value = React.useMemo(() => state == null ? void 0 : state.value, [state]);
  const relevance = React.useMemo(() => state == null ? void 0 : state.relevance, [state]);
  const dispatch = useDispatch();
  const handleChange = (value2) => {
    dispatch(valueChange({
      componentCode: props.answer.qualifiedCode,
      value: value2
    }));
  };
  const invalid = (show_errors || isDirty) && validity === false;
  return typeof relevance === "undefined" || relevance ? /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsxs(TableRow, { "data-code": props.answer.code, children: [
      /* @__PURE__ */ jsx(TableCell, { sx: {
        color: "inherit",
        borderBottom: invalid ? "0" : "",
        padding: "2px"
      }, children: /* @__PURE__ */ jsx(Content, { elementCode: props.answer.qualifiedCode, name: "label", content: (_a = props.answer.content) == null ? void 0 : _a.label }) }),
      props.choices.map((option) => {
        var _a2, _b;
        return /* @__PURE__ */ jsx(TableCell, { component: "th", scope: "row", sx: {
          borderBottom: invalid ? "0" : "",
          padding: "2px",
          width: props.width
        }, children: /* @__PURE__ */ jsx(DynamicSvg, { onIconClick: () => handleChange(option.code), imageHeight: "64px", isSelected: value == option.code, theme, svgUrl: ((_a2 = option == null ? void 0 : option.resources) == null ? void 0 : _a2.icon) ? buildResourceUrl((_b = option == null ? void 0 : option.resources) == null ? void 0 : _b.icon) : void 0 }) }, option.code);
      })
    ] }, props.answer.code),
    invalid ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { sx: {
      padding: "2px"
    }, colSpan: props.choices ? props.choices.length + 1 : 1, children: /* @__PURE__ */ jsx(Validation, { component: props.answer }) }) }) : ""
  ] }) : "";
}
export {
  SCQIconArray as default
};
//# sourceMappingURL=SCQIconArray-DOYTCNr0.js.map
