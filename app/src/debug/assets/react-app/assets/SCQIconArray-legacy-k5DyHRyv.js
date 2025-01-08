;
(function () {
  System.register(['./index-legacy-VHGc_nGn.js', './use-service-legacy-uNDfwPef.js', './index-legacy-XRFhxuym.js', './index-legacy-YuyNrEK9.js', './common-legacy-JH1w4dyZ.js', './TableRow-legacy-ClORoloW.js', './TableCell-legacy-CqnzAtHi.js', './isTouchDevice-legacy-Ch1rHmnJ.js', './Close-legacy-DueKC2rz.js', './Card-legacy-D9YP2dW9.js', './Toolbar-legacy-HvxMh-_e.js', './tableRowClasses-legacy-D6iguAwE.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports, React, useTheme, useSelector, useDispatch, valueChange, Validation, DynamicSvg, buildResourceUrl, TableContainer, Table, TableBody, TableRow, TableCell;
    return {
      setters: [module => {
        jsxRuntimeExports = module.j;
        React = module.R;
        useTheme = module.y;
      }, module => {
        useSelector = module.H;
        useDispatch = module.U;
        valueChange = module.aS;
      }, module => {
        Validation = module.V;
      }, module => {
        DynamicSvg = module.D;
      }, module => {
        buildResourceUrl = module.b;
      }, module => {
        TableContainer = module.T;
        Table = module.a;
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
                children: rows.map(answer => {
                  return /* @__PURE__ */jsxRuntimeExports.jsx(React.Fragment, {
                    children: /* @__PURE__ */jsxRuntimeExports.jsx(SCQArrayRow, {
                      answer,
                      choices: columns
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
                  padding: "8px"
                },
                children: (_props$answer$content = props.answer.content) === null || _props$answer$content === void 0 ? void 0 : _props$answer$content.label
              }), props.choices.map(option => {
                var _option$resources, _option$resources2;
                return /* @__PURE__ */jsxRuntimeExports.jsx(TableCell, {
                  component: "th",
                  scope: "row",
                  sx: {
                    borderBottom: invalid ? "0" : "",
                    padding: "8px"
                  },
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(DynamicSvg, {
                    onIconClick: () => handleChange(option.code),
                    imageHeight: "64px",
                    iconColor: value == option.code ? theme.palette.primary.main : theme.textStyles.text.color,
                    svgUrl: option !== null && option !== void 0 && (_option$resources = option.resources) !== null && _option$resources !== void 0 && _option$resources.icon ? buildResourceUrl(option === null || option === void 0 || (_option$resources2 = option.resources) === null || _option$resources2 === void 0 ? void 0 : _option$resources2.icon) : void 0
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
//# sourceMappingURL=SCQIconArray-legacy-k5DyHRyv.js.map
