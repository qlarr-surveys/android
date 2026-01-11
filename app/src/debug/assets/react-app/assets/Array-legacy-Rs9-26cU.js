;
(function () {
  System.register(['./index-legacy-1AolfYmu.js', './Android-legacy-BuzJjxPU.js', './TableRow-legacy-y-cgGybK.js', './Radio-legacy-D1Gm99s0.js', './Checkbox-legacy-DcK7Eue_.js', './SwitchBase-legacy-jJJGK4Be.js', './RadioGroupContext-legacy-D-wqkgKM.js'], function (exports, module) {
    'use strict';

    var useTheme, jsx, jsxs, React, columnMinWidth, Content, useSelector, shallowEqual, useDispatch, Validation, valueChange, TableHead, TableRow, TableCell, TableBody, Table, TableContainer, Radio, Checkbox;
    return {
      setters: [module => {
        useTheme = module.ar;
        jsx = module.as;
        jsxs = module.at;
        React = module.X;
      }, module => {
        columnMinWidth = module.S;
        Content = module.Q;
        useSelector = module.J;
        shallowEqual = module.K;
        useDispatch = module.L;
        Validation = module.V;
        valueChange = module.N;
      }, module => {
        TableHead = module.T;
        TableRow = module.a;
        TableCell = module.b;
        TableBody = module.c;
        Table = module.d;
        TableContainer = module.e;
      }, module => {
        Radio = module.R;
      }, module => {
        Checkbox = module.C;
      }, null, null],
      execute: function execute() {
        exports("default", Array);
        function Array(props) {
          useTheme();
          let columns = props.component.answers.filter(answer => answer.type == "column");
          let rows = props.component.answers.filter(answer => answer.type == "row");
          const _columnMinWidth = columnMinWidth(null, props.component),
            header = _columnMinWidth.header,
            rowLabel = _columnMinWidth.rowLabel;
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
//# sourceMappingURL=Array-legacy-Rs9-26cU.js.map
