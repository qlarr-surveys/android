;
(function () {
  System.register(['./index-legacy-D_82um2M.js', './Android-legacy-2hBPVZd1.js', './TableRow-legacy-BPWagv6S.js', './Radio-legacy-CzMYaOq7.js', './Checkbox-legacy-BMFD0hHQ.js', './SwitchBase-legacy-BFGYCTvo.js', './RadioGroupContext-legacy-D9SGN_Y0.js'], function (exports, module) {
    'use strict';

    var useTheme, jsxRuntimeExports, React, columnMinWidth, useSelector, shallowEqual, useDispatch, Validation, valueChange, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Radio, Checkbox;
    return {
      setters: [module => {
        useTheme = module.a8;
        jsxRuntimeExports = module.m;
        React = module.Y;
      }, module => {
        columnMinWidth = module.$;
        useSelector = module.K;
        shallowEqual = module.L;
        useDispatch = module.M;
        Validation = module.V;
        valueChange = module.O;
      }, module => {
        TableContainer = module.T;
        Table = module.a;
        TableHead = module.b;
        TableRow = module.c;
        TableCell = module.d;
        TableBody = module.e;
      }, module => {
        Radio = module.R;
      }, module => {
        Checkbox = module.C;
      }, null, null],
      execute: function execute() {
        exports("default", Array);
        function Array(props) {
          const theme = useTheme();
          let columns = props.component.answers.filter(answer => answer.type == "column");
          let rows = props.component.answers.filter(answer => answer.type == "row");
          const _columnMinWidth = columnMinWidth(null, props.component),
            header = _columnMinWidth.header,
            rowLabel = _columnMinWidth.rowLabel;
          return /* @__PURE__ */jsxRuntimeExports.jsx(TableContainer, {
            sx: {
              overflowX: "auto",
              maxWidth: "100%"
            },
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(Table, {
              sx: {
                tableLayout: "fixed"
              },
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableHead, {
                children: /* @__PURE__ */jsxRuntimeExports.jsxs(TableRow, {
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                    sx: {
                      padding: "2px",
                      width: rowLabel + "px"
                    }
                  }, "content"), columns.map(option => {
                    var _option$content;
                    return /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                      sx: {
                        fontFamily: theme.textStyles.text.font,
                        color: theme.textStyles.text.color,
                        padding: "2px",
                        fontSize: theme.textStyles.text.size,
                        width: header + "px"
                      },
                      children: (_option$content = option.content) === null || _option$content === void 0 ? void 0 : _option$content.label
                    }, option.qualifiedCode);
                  })]
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx(TableBody, {
                children: rows.map(answer => {
                  return /* @__PURE__ */jsxRuntimeExports.jsx(React.Fragment, {
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(ArrayRow, {
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
          const theme = useTheme();
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
          return typeof state.relevance === "undefined" || state.relevance ? /* @__PURE__ */jsxRuntimeExports.jsxs(React.Fragment, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs(TableRow, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                sx: {
                  fontFamily: theme.textStyles.text.font,
                  color: theme.textStyles.text.color,
                  fontSize: theme.textStyles.text.size,
                  borderBottom: invalid ? "0" : "",
                  padding: "2px",
                  wordWrap: "break-word"
                },
                children: (_props$answer$content = props.answer.content) === null || _props$answer$content === void 0 ? void 0 : _props$answer$content.label
              }), props.choices.map(option => {
                return /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                  component: "th",
                  scope: "row",
                  sx: {
                    borderBottom: invalid ? "0" : "",
                    padding: "2px"
                  },
                  children: props.type === "scq_array" ? /* @__PURE__ */jsxRuntimeExports.jsx(Radio, {
                    name: props.answer.qualifiedCode,
                    onChange: handleChange,
                    checked: state.value === option.code,
                    value: option.code
                  }) : /* @__PURE__ */jsxRuntimeExports.jsx(Checkbox, {
                    name: props.answer.qualifiedCode,
                    onChange: handleChange,
                    checked: (state.value || []).indexOf(option.code) > -1,
                    value: option.code
                  })
                }, option.code);
              })]
            }, props.answer.code), invalid ? /* @__PURE__ */jsxRuntimeExports.jsx(TableRow, {
              children: /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                sx: {
                  padding: "8px"
                },
                colSpan: props.choices ? props.choices.length + 1 : 1,
                children: /* @__PURE__ */jsxRuntimeExports.jsx(Validation, {
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
//# sourceMappingURL=Array-legacy-BcI0qlIK.js.map
