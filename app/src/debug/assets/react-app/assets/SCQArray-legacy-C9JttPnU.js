;
(function () {
  System.register(['./index-legacy-ppEgxGbl.js', './use-service-legacy-BbL3A7cT.js', './index-legacy-VaWa31-C.js', './TableRow-legacy-TubfNSWY.js', './TableHead-legacy-1sMMDWi_.js', './TableCell-legacy-Dz0cxbNV.js', './Radio-legacy-Mi41FiB5.js', './isTouchDevice-legacy-D04XAr6x.js', './common-legacy-Cdw-XyXm.js', './Close-legacy-CkOaATYN.js', './Card-legacy-nTgNTVv-.js', './Toolbar-legacy-CAJae3Jn.js', './tableRowClasses-legacy-DKGRrcou.js', './SwitchBase-legacy-tIJzAgb-.js', './RadioGroupContext-legacy-DUgm0tDK.js', './radioClasses-legacy-Cc_gAbFN.js'], function (exports, module) {
    'use strict';

    var useTheme, jsxRuntimeExports, React, useSelector, shallowEqual, useDispatch, valueChange, Validation, TableContainer, Table, TableRow, TableBody, TableHead, TableCell, Radio;
    return {
      setters: [module => {
        useTheme = module.aj;
        jsxRuntimeExports = module.j;
        React = module.R;
      }, module => {
        useSelector = module.H;
        shallowEqual = module.aU;
        useDispatch = module.U;
        valueChange = module.aV;
      }, module => {
        Validation = module.V;
      }, module => {
        TableContainer = module.T;
        Table = module.a;
        TableRow = module.b;
        TableBody = module.c;
      }, module => {
        TableHead = module.T;
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
                  padding: "8px"
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
//# sourceMappingURL=SCQArray-legacy-C9JttPnU.js.map
