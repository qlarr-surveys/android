;
(function () {
<<<<<<<< HEAD:app/src/debug/assets/react-app/assets/SCQIconArray-legacy-DAyFH0VS.js
  System.register(['./index-legacy-D2IAuBBo.js', './Android-legacy-BgepuGDy.js', './index-legacy-De2DvXj5.js', './TableRow-legacy-D_CYBs-M.js'], function (exports, module) {
    'use strict';

    var useTheme, jsxRuntimeExports, React, columnMinWidth, useSelector, useDispatch, buildResourceUrl, Validation, valueChange, DynamicSvg, TableContainer, Table, TableHead, TableRow, TableCell, TableBody;
    return {
      setters: [module => {
        useTheme = module.a1;
        jsxRuntimeExports = module.m;
        React = module.W;
========
  System.register(['./index-legacy-ppEgxGbl.js', './use-service-legacy-BbL3A7cT.js', './index-legacy-VaWa31-C.js', './index-legacy-CZmtZ8QP.js', './common-legacy-Cdw-XyXm.js', './TableRow-legacy-TubfNSWY.js', './TableCell-legacy-Dz0cxbNV.js', './isTouchDevice-legacy-D04XAr6x.js', './Close-legacy-CkOaATYN.js', './Card-legacy-nTgNTVv-.js', './Toolbar-legacy-CAJae3Jn.js', './tableRowClasses-legacy-DKGRrcou.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports, React, useTheme, useSelector, useDispatch, valueChange, Validation, DynamicSvg, buildResourceUrl, TableContainer, Table, TableBody, TableRow, TableCell;
    return {
      setters: [module => {
        jsxRuntimeExports = module.j;
        React = module.R;
        useTheme = module.aj;
      }, module => {
        useSelector = module.H;
        useDispatch = module.U;
        valueChange = module.aV;
>>>>>>>> main:app/src/debug/assets/react-app/assets/SCQIconArray-legacy-BtlEzXgd.js
      }, module => {
        columnMinWidth = module.N;
        useSelector = module.D;
        useDispatch = module.H;
        buildResourceUrl = module.a0;
        Validation = module.V;
        valueChange = module.J;
      }, module => {
        DynamicSvg = module.D;
      }, module => {
        TableContainer = module.T;
        Table = module.a;
<<<<<<<< HEAD:app/src/debug/assets/react-app/assets/SCQIconArray-legacy-DAyFH0VS.js
        TableHead = module.b;
        TableRow = module.c;
        TableCell = module.d;
        TableBody = module.e;
      }],
      execute: function execute() {
        exports("default", SCQIconArray);
        function SCQIconArray(props) {
          const theme = useTheme();
          const width = columnMinWidth();
          let columns = props.component.answers.filter(answer => answer.type == "column");
          let rows = props.component.answers.filter(answer => answer.type == "row");
          return /* @__PURE__ */jsxRuntimeExports.jsx(TableContainer, {
            sx: {
              overflowX: "auto",
              maxWidth: "100%"
            },
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(Table, {
              sx: {
                tableLayout: "fixed",
                minWidth: `${columns.length * width}px`
              },
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableHead, {
                children: /* @__PURE__ */jsxRuntimeExports.jsxs(TableRow, {
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                    sx: {
                      width,
                      padding: "0px"
                    }
                  }, "content"), columns.map(option => {
                    var _option$content;
                    return /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                      sx: {
                        fontFamily: theme.textStyles.text.font,
                        color: theme.textStyles.text.color,
                        fontSize: theme.textStyles.text.size,
                        textAlign: "center",
                        width
                      },
                      children: (_option$content = option.content) === null || _option$content === void 0 ? void 0 : _option$content.label
                    }, option.qualifiedCode);
                  })]
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx(TableBody, {
========
        TableBody = module.c;
        TableRow = module.b;
      }, module => {
        TableCell = module.T;
      }, null, null, null, null, null],
      execute: function execute() {
        exports("default", SCQIconArray);
        function SCQIconArray(props) {
          let columns = props.component.answers.filter(answer => answer.type == "column");
          let rows = props.component.answers.filter(answer => answer.type == "row");
          return /* @__PURE__ */jsxRuntimeExports.jsx(TableContainer, {
            children: /* @__PURE__ */jsxRuntimeExports.jsx(Table, {
              children: /* @__PURE__ */jsxRuntimeExports.jsx(TableBody, {
>>>>>>>> main:app/src/debug/assets/react-app/assets/SCQIconArray-legacy-BtlEzXgd.js
                children: rows.map(answer => {
                  return /* @__PURE__ */jsxRuntimeExports.jsx(React.Fragment, {
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(SCQArrayRow, {
                      answer,
                      choices: columns,
                      width
                    }, answer.qualifiedCode)
                  }, answer.qualifiedCode);
                })
              })
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
          return typeof relevance === "undefined" || relevance ? /* @__PURE__ */jsxRuntimeExports.jsxs(React.Fragment, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs(TableRow, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                sx: {
                  fontFamily: theme.textStyles.text.font,
                  color: theme.textStyles.text.color,
                  fontSize: theme.textStyles.text.size,
                  borderBottom: invalid ? "0" : "",
<<<<<<<< HEAD:app/src/debug/assets/react-app/assets/SCQIconArray-legacy-DAyFH0VS.js
                  padding: "2px"
========
                  padding: "8px"
>>>>>>>> main:app/src/debug/assets/react-app/assets/SCQIconArray-legacy-BtlEzXgd.js
                },
                children: (_props$answer$content = props.answer.content) === null || _props$answer$content === void 0 ? void 0 : _props$answer$content.label
              }), props.choices.map(option => {
                var _option$resources, _option$resources2;
                return /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                  component: "th",
                  scope: "row",
                  sx: {
                    borderBottom: invalid ? "0" : "",
                    padding: "2px",
                    width: props.width
                  },
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(DynamicSvg, {
                    onIconClick: () => handleChange(option.code),
                    imageHeightPx: 64,
                    iconColor: value == option.code ? theme.palette.primary.main : theme.textStyles.text.color,
                    svgUrl: option !== null && option !== void 0 && (_option$resources = option.resources) !== null && _option$resources !== void 0 && _option$resources.icon ? buildResourceUrl(option === null || option === void 0 || (_option$resources2 = option.resources) === null || _option$resources2 === void 0 ? void 0 : _option$resources2.icon) : void 0
                  })
                }, option.code);
              })]
            }, props.answer.code), invalid ? /* @__PURE__ */jsxRuntimeExports.jsx(TableRow, {
              children: /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                sx: {
                  padding: "2px"
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
<<<<<<<< HEAD:app/src/debug/assets/react-app/assets/SCQIconArray-legacy-DAyFH0VS.js
//# sourceMappingURL=SCQIconArray-legacy-DAyFH0VS.js.map
========
//# sourceMappingURL=SCQIconArray-legacy-BtlEzXgd.js.map
>>>>>>>> main:app/src/debug/assets/react-app/assets/SCQIconArray-legacy-BtlEzXgd.js
