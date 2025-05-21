;
(function () {
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  System.register(['./index-legacy-ppEgxGbl.js', './use-service-legacy-BbL3A7cT.js', './common-legacy-Cdw-XyXm.js'], function (exports, module) {
    'use strict';

    var reactExports, jsxRuntimeExports, Box, useTheme, useSelector, shallowEqual, useDispatch, setDirty, valueChange, rtlLanguage, buildResourceUrl;
    return {
      setters: [module => {
        reactExports = module.r;
        jsxRuntimeExports = module.j;
        Box = module.B;
        useTheme = module.aj;
      }, module => {
        useSelector = module.H;
        shallowEqual = module.aU;
        useDispatch = module.U;
        setDirty = module.b1;
        valueChange = module.aV;
        rtlLanguage = module.an;
      }, module => {
        buildResourceUrl = module.b;
      }],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._imageGrid_18w6k_1 {\n  margin-top: 16px;\n}\n\n._imageContainer_18w6k_5 {\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  position: relative;\n}\n\n._rankContainer_18w6k_12 {\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  cursor: pointer;\n  padding: .25rem .5rem;\n  border-radius: 50%;\n}\n\n._rankValue_18w6k_21 {\n  color: white;\n  display: table-cell;\n  vertical-align: middle;\n}\n\n._imageFlexContainer_18w6k_27 {\n  display: flex;\n  flex-wrap: wrap;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        exports("default", ImageRanking);
        const imageGrid = "_imageGrid_18w6k_1";
        const imageContainer = "_imageContainer_18w6k_5";
        const rankContainer = "_rankContainer_18w6k_12";
        const rankValue = "_rankValue_18w6k_21";
        const imageFlexContainer = "_imageFlexContainer_18w6k_27";
        const styles = {
          imageGrid: imageGrid,
          imageContainer: imageContainer,
          rankContainer: rankContainer,
          rankValue: rankValue,
          imageFlexContainer: imageFlexContainer
        };
        function ImageRanking(props) {
          const values = useSelector(state => {
            let valuesMap = {};
            props.component.answers.forEach(element => {
              valuesMap[element.qualifiedCode] = state.runState.values[element.qualifiedCode].value;
            });
            return valuesMap;
          }, shallowEqual);
          const dispatch = useDispatch();
          const containerRef = reactExports.useRef(null);
          const _reactExports$useStat = reactExports.useState(800),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            width = _reactExports$useStat2[0],
            setWidth = _reactExports$useStat2[1];
          reactExports.useEffect(() => {
            var _containerRef$current;
            setWidth(containerRef === null || containerRef === void 0 || (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.offsetWidth);
          }, [containerRef]);
          const imageWidth = (width - props.component.columns * props.component.spacing * 2) / props.component.columns;
          const imageHeight = imageWidth / (props.component.imageAspectRatio || 1);
          reactExports.useEffect(() => {
            const resizeListener = () => {
              var _containerRef$current2;
              setWidth(containerRef === null || containerRef === void 0 || (_containerRef$current2 = containerRef.current) === null || _containerRef$current2 === void 0 ? void 0 : _containerRef$current2.offsetWidth);
            };
            window.addEventListener("resize", resizeListener);
            return () => {
              window.removeEventListener("resize", resizeListener);
            };
          }, []);
          const onItemClick = componentCode => {
            dispatch(setDirty(props.component.qualifiedCode));
            dispatch(setDirty(props.parentCode));
            if (+values[componentCode] > 0) {
              dispatch(valueChange({
                componentCode,
                undefined: void 0
              }));
            } else {
              let keys = Object.keys(values);
              let allValues = keys.map(key => values[key]);
              for (var i = 1; i <= keys.length; i++) {
                if (!allValues.includes(i)) {
                  dispatch(valueChange({
                    componentCode,
                    value: i
                  }));
                  return;
                }
              }
            }
          };
          const lang = useSelector(state => {
            return state.runState.values["Survey"].lang;
          });
          const isRtl = rtlLanguage.includes(lang);
          return /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
            sx: {
              gap: `${props.component.spacing}px`,
              justifyContent: isRtl ? "flex-end" : "flex-start"
            },
            className: styles.imageFlexContainer,
            children: props.component.answers.map(option => {
              return /* @__PURE__ */jsxRuntimeExports.jsx(ImageRankingItem, {
                option,
                spacing: props.component.spacing,
                columns: props.component.columns,
                hideText: props.component.hideText,
                onClick: () => onItemClick(option.qualifiedCode),
                parentCode: props.component.qualifiedCode,
                imageHeight,
                imageWidth
              }, option.qualifiedCode);
            })
          });
        }
        function ImageRankingItem(props) {
          var _props$option$resourc, _props$option$content;
          const theme = useTheme();
          const state = useSelector(state2 => {
            let answerState = state2.runState.values[props.option.qualifiedCode];
            return {
              showAnswer: typeof (answerState === null || answerState === void 0 ? void 0 : answerState.relevance) == "undefined" || answerState.relevance,
              value: (answerState === null || answerState === void 0 ? void 0 : answerState.value) || 0
            };
          }, shallowEqual);
          const backgroundImage = (_props$option$resourc = props.option.resources) !== null && _props$option$resourc !== void 0 && _props$option$resourc.image ? `url('${buildResourceUrl(props.option.resources.image)}')` : "0";
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            sx: {
              flex: `0 1 calc(${100 / props.columns}% - ${props.spacing}px)`,
              cursor: "pointer"
            },
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Box, {
              className: styles.imageContainer,
              onClick: () => props.onClick(),
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              style: {
                paddingTop: 100 / props.aspectRatio + "%",
                backgroundImage,
                backgroundColor: theme.palette.background.default,
                borderRadius: "4px",
                boxShadow: 2,
                height: props.imageHeight + "px",
                border: state.checked ? `2px solid ${theme.palette.primary.main}` : "2px solid transparent"
              },
              children: state.value > 0 && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                style: {
                  height: Math.min(props.imageHeight, props.imageWidth) + "px",
                  width: Math.min(props.imageHeight, props.imageWidth) + "px",
                  borderRadius: Math.min(props.imageHeight, props.imageWidth) / 2 + "px",
                  fontSize: Math.min(props.imageHeight, props.imageWidth) / 2 + "px",
                  background: theme.palette.primary.main
                },
                className: styles.rankContainer,
                children: /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  className: styles.rankValue,
                  style: {
                    color: theme.textStyles.text.color
                  },
                  children: state.value
                })
              })
            }), !props.hideText && /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
              sx: {
                fontFamily: theme.textStyles.text.font,
                color: theme.textStyles.text.color,
                fontSize: theme.textStyles.text.size
              },
              children: (_props$option$content = props.option.content) === null || _props$option$content === void 0 ? void 0 : _props$option$content.label
            })]
          }, props.option.code);
        }
      }
    };
  });
})();
//# sourceMappingURL=ImageRanking-legacy-u-_PTI_L.js.map
