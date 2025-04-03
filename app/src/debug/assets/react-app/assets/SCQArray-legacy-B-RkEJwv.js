;
(function () {
  System.register(['./index-legacy-BLatMfxz.js', './use-service-legacy-DLuVKbJp.js', './index-legacy-CAdDVn6v.js', './TableRow-legacy-CbWVNbnA.js', './TableCell-legacy-BTEC8sBz.js', './Radio-legacy-u7FYCqgd.js', './isTouchDevice-legacy-Hx_ZLTbf.js', './common-legacy-BfMJ8X0r.js', './CardMedia-legacy-CywE8xFy.js', './Card-legacy-DAyj9G4N.js', './Toolbar-legacy-gatoM_w3.js', './tableRowClasses-legacy-BNdXjQON.js', './SwitchBase-legacy-C9xQX8jx.js', './RadioGroupContext-legacy-Bbu9KNNs.js', './radioClasses-legacy-DphQBUmK.js'], function (exports, module) {
    'use strict';

    var useTheme, jsxRuntimeExports, React, useSelector, shallowEqual, useDispatch, valueChange, Validation, TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Radio;
    return {
      setters: [module => {
        useTheme = module.y;
        jsxRuntimeExports = module.j;
        React = module.R;
      }, module => {
        useSelector = module.H;
        shallowEqual = module.aR;
        useDispatch = module.R;
        valueChange = module.aS;
      }, module => {
        Validation = module.V;
      }, module => {
        TableContainer = module.T;
        Table = module.a;
        TableHead = module.b;
        TableRow = module.c;
        TableBody = module.d;
      }, module => {
        TableCell = module.T;
      }, module => {
        Radio = module.R;
      }, null, null, null, null, null, null, null, null, null],
      execute: function execute() {
        exports("default", SCQArray);
        function SCQArray(props) {
          const theme = useTheme();
          let columns = props.component.answers.filter(answer => answer.type == "column");
          let rows = props.component.answers.filter(answer => answer.type == "row");
          return /* @__PURE__ */jsxRuntimeExports.jsx(TableContainer, {
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(Table, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableHead, {
                children: /* @__PURE__ */jsxRuntimeExports.jsxs(TableRow, {
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {}, "content"), columns.map(option => {
                    var _option$content;
                    return /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                      sx: {
                        fontFamily: theme.textStyles.text.font,
                        color: theme.textStyles.text.color,
                        fontSize: theme.textStyles.text.size
                      },
                      children: (_option$content = option.content) === null || _option$content === void 0 ? void 0 : _option$content.label
                    }, option.qualifiedCode);
                  })]
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx(TableBody, {
                children: rows.map(answer => {
                  return /* @__PURE__ */jsxRuntimeExports.jsx(React.Fragment, {
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(SCQArrayRow, {
                      answer,
                      choices: columns
                    }, answer.qualifiedCode)
                  }, answer.qualifiedCode);
                })
              })]
            })
          });
        }
        function SCQArrayRow(props) {
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
            dispatch(valueChange({
              componentCode: event.target.name,
              value: event.target.value
            }));
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
                  padding: "8px",
                  position: "sticky",
                  left: 0,
                  zIndex: 1,
                  minWidth: "60px"
                },
                children: (_props$answer$content = props.answer.content) === null || _props$answer$content === void 0 ? void 0 : _props$answer$content.label
              }), props.choices.map(option => {
                return /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                  component: "th",
                  scope: "row",
                  sx: {
                    borderBottom: invalid ? "0" : "",
                    padding: "8px"
                  },
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(Radio, {
                    name: props.answer.qualifiedCode,
                    onChange: handleChange,
                    checked: state.value === option.code,
                    value: option.code,
                    sx: {
                      color: theme.textStyles.text.color
                    }
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
//# sourceMappingURL=SCQArray-legacy-B-RkEJwv.js.map
