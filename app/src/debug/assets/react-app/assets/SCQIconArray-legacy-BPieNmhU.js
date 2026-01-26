;
(function () {
  System.register(['./index-legacy-DbBgSDRL.js', './Android-legacy-DTaKd7fz.js', './index-legacy-BtCbQ1OW.js', './TableRow-legacy-DBZtWfqw.js'], function (exports, module) {
    'use strict';

    var useTheme, jsx, jsxs, React, columnMinWidth, Content, useSelector, useDispatch, buildResourceUrl, Validation, valueChange, DynamicSvg, TableHead, TableRow, TableCell, TableBody, Table, TableContainer;
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
        useDispatch = module.L;
        buildResourceUrl = module.a6;
        Validation = module.V;
        valueChange = module.N;
      }, module => {
        DynamicSvg = module.D;
      }, module => {
        TableHead = module.T;
        TableRow = module.a;
        TableCell = module.b;
        TableBody = module.c;
        Table = module.d;
        TableContainer = module.e;
      }],
      execute: function execute() {
        exports("default", SCQIconArray);
        function SCQIconArray(props) {
          useTheme();
          const width = columnMinWidth();
          let columns = props.component.answers.filter(answer => answer.type == "column");
          let rows = props.component.answers.filter(answer => answer.type == "row");
          return /* @__PURE__ */jsx(TableContainer, {
            sx: {
              overflowX: "auto",
              maxWidth: "100%"
            },
            children: /* @__PURE__ */jsxs(Table, {
              sx: {
                tableLayout: "fixed",
                minWidth: `${columns.length * width}px`
              },
              children: [/* @__PURE__ */jsx(TableHead, {
                children: /* @__PURE__ */jsxs(TableRow, {
                  children: [/* @__PURE__ */jsx(TableCell, {
                    sx: {
                      width,
                      padding: "0px"
                    }
                  }, "content"), columns.map(option => {
                    var _option$content;
                    return /* @__PURE__ */jsx(TableCell, {
                      sx: {
                        color: "inherit",
                        textAlign: "center",
                        width
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
                    children: /* @__PURE__ */jsx(SCQArrayRow, {
                      answer,
                      choices: columns,
                      width
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
          const isDirty = useSelector(state2 => {
            var _state2$templateState;
            return (_state2$templateState = state2.templateState[props.answer.qualifiedCode]) === null || _state2$templateState === void 0 ? void 0 : _state2$templateState.isDirty;
          });
          const show_errors = useSelector(state2 => state2.runState.values.Survey.show_errors);
          const state = useSelector(state2 => state2.runState.values[props.answer.qualifiedCode]);
          const validity = React.useMemo(() => state === null || state === void 0 ? void 0 : state.validity, [state]);
          const value = React.useMemo(() => state === null || state === void 0 ? void 0 : state.value, [state]);
          const relevance = React.useMemo(() => state === null || state === void 0 ? void 0 : state.relevance, [state]);
          const dispatch = useDispatch();
          const handleChange = value2 => {
            dispatch(valueChange({
              componentCode: props.answer.qualifiedCode,
              value: value2
            }));
          };
          const invalid = (show_errors || isDirty) && validity === false;
          return typeof relevance === "undefined" || relevance ? /* @__PURE__ */jsxs(React.Fragment, {
            children: [/* @__PURE__ */jsxs(TableRow, {
              "data-code": props.answer.code,
              children: [/* @__PURE__ */jsx(TableCell, {
                sx: {
                  color: "inherit",
                  borderBottom: invalid ? "0" : "",
                  padding: "2px"
                },
                children: /* @__PURE__ */jsx(Content, {
                  elementCode: props.answer.qualifiedCode,
                  name: "label",
                  content: (_props$answer$content = props.answer.content) === null || _props$answer$content === void 0 ? void 0 : _props$answer$content.label
                })
              }), props.choices.map(option => {
                var _option$resources, _option$resources2;
                return /* @__PURE__ */jsx(TableCell, {
                  component: "th",
                  scope: "row",
                  sx: {
                    borderBottom: invalid ? "0" : "",
                    padding: "2px",
                    width: props.width
                  },
                  children: /* @__PURE__ */jsx(DynamicSvg, {
                    onIconClick: () => handleChange(option.code),
                    imageHeight: "64px",
                    isSelected: value == option.code,
                    theme,
                    svgUrl: option !== null && option !== void 0 && (_option$resources = option.resources) !== null && _option$resources !== void 0 && _option$resources.icon ? buildResourceUrl(option === null || option === void 0 || (_option$resources2 = option.resources) === null || _option$resources2 === void 0 ? void 0 : _option$resources2.icon) : void 0
                  })
                }, option.code);
              })]
            }, props.answer.code), invalid ? /* @__PURE__ */jsx(TableRow, {
              children: /* @__PURE__ */jsx(TableCell, {
                sx: {
                  padding: "2px"
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
//# sourceMappingURL=SCQIconArray-legacy-BPieNmhU.js.map
