;
(function () {
  function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
  function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  System.register(['./index-legacy-BPhVO2yG.js'], function (exports, module) {
    'use strict';

    var reactExports, jsxRuntimeExports;
    return {
      setters: [module => {
        reactExports = module.r;
        jsxRuntimeExports = module.m;
      }],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "\n\n._svgContainer_tbba2_3>svg {\n  width: 100%;\n  height: 100%;\n}\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        exports("D", DynamicSvg);
        const svgContainer = "_svgContainer_tbba2_3";
        const styles = {
          svgContainer: svgContainer
        };
        function DynamicSvg({
          svgUrl,
          imageHeight,
          maxHeight = "inherit",
          onIconClick,
          opacity = 1,
          isSelected = false,
          theme
        }) {
          var _theme$textStyles;
          const _reactExports$useStat = reactExports.useState(""),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            svgContent = _reactExports$useStat2[0],
            setSvgContent = _reactExports$useStat2[1];
          reactExports.useEffect(() => {
            const fetchSvg = /*#__PURE__*/function () {
              var _ref = _asyncToGenerator(function* () {
                const response = yield fetch(svgUrl || "/placeholder-image.svg");
                const svgText = yield response.text();
                setSvgContent(svgText);
              });
              return function fetchSvg() {
                return _ref.apply(this, arguments);
              };
            }();
            fetchSvg();
          }, [svgUrl]);
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            style: {
              opacity,
              maxHeight,
              maxWidth: maxHeight,
              height: imageHeight,
              aspectRatio: "1",
              padding: "2px",
              width: imageHeight,
              margin: "auto",
              borderRadius: "8px",
              color: isSelected ? theme.palette.primary.main : (_theme$textStyles = theme.textStyles) === null || _theme$textStyles === void 0 || (_theme$textStyles = _theme$textStyles.text) === null || _theme$textStyles === void 0 ? void 0 : _theme$textStyles.color,
              border: isSelected ? `4px solid ${theme.palette.primary.main}` : "4px solid transparent"
            },
            onClick: onIconClick,
            className: styles.svgContainer,
            dangerouslySetInnerHTML: {
              __html: svgContent ? svgContent : ""
            }
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-CCRiF0fV.js.map
