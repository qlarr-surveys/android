;
(function () {
  System.register(['./index-legacy-CIX8rRtf.js', './vendor-legacy-lhtLtiSI.js', './redux-legacy-ZqSxVvAn.js', './Android-legacy-BgYj3wY4.js', './mui-legacy-b38CRKaY.js', './i18n-legacy-BRT6G2_g.js', './editor-legacy-Dx3AxXyy.js', './dnd-legacy-DGW9B2he.js', './charts-legacy-BBm9rbLh.js'], function (exports, module) {
    'use strict';

    var jsx, jsxs, React, useSelector, shallowEqual, useDispatch, useColumnMinWidth, Content, Validation, valueChange, useTheme, TableHead, TableRow, TableCell, TableBody, Table, TableContainer, Radio, Checkbox;
    return {
      setters: [module => {
        jsx = module.n;
        jsxs = module.o;
      }, module => {
        React = module.b;
      }, module => {
        useSelector = module.u;
        shallowEqual = module.s;
        useDispatch = module.b;
      }, module => {
        useColumnMinWidth = module.u;
        Content = module.C;
        Validation = module.V;
        valueChange = module.v;
      }, module => {
        useTheme = module.u;
        TableHead = module.a3;
        TableRow = module.a4;
        TableCell = module.a5;
        TableBody = module.a6;
        Table = module.a7;
        TableContainer = module.a8;
        Radio = module.a1;
        Checkbox = module.a9;
      }, null, null, null, null],
      execute: function execute() {
        exports("default", Array);
        function Array(props) {
          useTheme();
          let columns = props.component.answers.filter(answer => answer.type == "column");
          let rows = props.component.answers.filter(answer => answer.type == "row");
          const _useColumnMinWidth = useColumnMinWidth(null, props.component),
            header = _useColumnMinWidth.header,
            rowLabel = _useColumnMinWidth.rowLabel;
          return /* @__PURE__ */jsx(TableContainer, {
            sx: {
              overflowX: "auto",
              maxWidth: "100%"
            },
            children: /* @__PURE__ */jsxs(Table, {
              sx: {
                tableLayout: "fixed"
              },
              children: [/* @__PURE__ */jsx(TableHead, {
                children: /* @__PURE__ */jsxs(TableRow, {
                  children: [/* @__PURE__ */jsx(TableCell, {
                    sx: {
                      padding: "2px",
                      width: rowLabel + "px"
                    }
                  }, "content"), columns.map(option => {
                    var _option$content;
                    return /* @__PURE__ */jsx(TableCell, {
                      sx: {
                        color: "inherit",
                        padding: "2px",
                        width: header + "px"
                      },
                      children: /* @__PURE__ */jsx(Content, {
                        elementCode: option.qualifiedCode,
                        name: "label",
                        content: (_option$content = option.content) === null || _option$content === void 0 ? void 0 : _option$content.label
                      })
                    }, option.qualifiedCode);
                  })]
                })
              }), /* @__PURE__ */jsx(TableBody, {
                children: rows.map(answer => {
                  return /* @__PURE__ */jsx(React.Fragment, {
                    children: /* @__PURE__ */jsx(ArrayRow, {
                      type: props.component.type,
                      answer,
                      choices: columns
                    }, answer.qualifiedCode)
                  }, answer.qualifiedCode);
                })
              })]
            })
          });
        }
        function ArrayRow(props) {
          var _props$answer$content;
          useTheme();
          const state = useSelector(state2 => {
            var _state2$runState$valu, _state2$runState$valu2, _state2$runState$valu3;
            return {
              show_errors: state2.runState.values.Survey.show_errors,
              validity: (_state2$runState$valu = state2.runState.values[props.answer.qualifiedCode]) === null || _state2$runState$valu === void 0 ? void 0 : _state2$runState$valu.validity,
              value: (_state2$runState$valu2 = state2.runState.values[props.answer.qualifiedCode]) === null || _state2$runState$valu2 === void 0 ? void 0 : _state2$runState$valu2.value,
              relevance: (_state2$runState$valu3 = state2.runState.values[props.answer.qualifiedCode]) === null || _state2$runState$valu3 === void 0 ? void 0 : _state2$runState$valu3.relevance
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const handleChange = event => {
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
                value = value.filter(el => el !== event.target.value);
              }
              dispatch(valueChange({
                componentCode: event.target.name,
                value
              }));
            }
          };
          const invalid = (state.show_errors || state.isDirty) && state.validity === false;
          return typeof state.relevance === "undefined" || state.relevance ? /* @__PURE__ */jsxs(React.Fragment, {
            children: [/* @__PURE__ */jsxs(TableRow, {
              "data-code": props.answer.code,
              children: [/* @__PURE__ */jsx(TableCell, {
                sx: {
                  borderBottom: invalid ? "0" : "",
                  padding: "2px",
                  color: "inherit",
                  wordWrap: "break-word"
                },
                children: /* @__PURE__ */jsx(Content, {
                  elementCode: props.answer.qualifiedCode,
                  name: "label",
                  content: (_props$answer$content = props.answer.content) === null || _props$answer$content === void 0 ? void 0 : _props$answer$content.label
                })
              }), props.choices.map(option => {
                return /* @__PURE__ */jsx(TableCell, {
                  component: "th",
                  scope: "row",
                  sx: {
                    borderBottom: invalid ? "0" : "",
                    padding: "2px"
                  },
                  children: props.type === "scq_array" ? /* @__PURE__ */jsx(Radio, {
                    name: props.answer.qualifiedCode,
                    onChange: handleChange,
                    checked: state.value === option.code,
                    value: option.code
                  }) : /* @__PURE__ */jsx(Checkbox, {
                    name: props.answer.qualifiedCode,
                    onChange: handleChange,
                    checked: (state.value || []).indexOf(option.code) > -1,
                    value: option.code
                  })
                }, option.code);
              })]
            }, props.answer.code), invalid ? /* @__PURE__ */jsx(TableRow, {
              children: /* @__PURE__ */jsx(TableCell, {
                sx: {
                  padding: "8px"
                },
                colSpan: props.choices ? props.choices.length + 1 : 1,
                children: /* @__PURE__ */jsx(Validation, {
                  component: props.answer
                })
              })
            }) : ""]
          }) : "";
        }
      }
    };
  });
})();
//# sourceMappingURL=Array-legacy-ZE1CTGi3.js.map
