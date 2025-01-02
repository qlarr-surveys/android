;
(function () {
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  System.register(['./index-legacy-VHGc_nGn.js', './use-service-legacy-uNDfwPef.js', './Web-legacy-fzNrSyYZ.js'], function (exports, module) {
    'use strict';

    var reactExports, jsxRuntimeExports, useTranslation, rtlLanguage, Snackbar, Alert;
    return {
      setters: [module => {
        reactExports = module.r;
        jsxRuntimeExports = module.j;
      }, module => {
        useTranslation = module.M;
        rtlLanguage = module.ap;
      }, module => {
        Snackbar = module.a;
        Alert = module.A;
      }],
      execute: function execute() {
        exports("S", SuccessSnackbar);
        function SuccessSnackbar({
          success,
          left
        }) {
          const _reactExports$useStat = reactExports.useState(true),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            open = _reactExports$useStat2[0],
            setOpen = _reactExports$useStat2[1];
          const _reactExports$useStat3 = reactExports.useState("ltr"),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            dir = _reactExports$useStat4[0],
            setDir = _reactExports$useStat4[1];
          const _useTranslation = useTranslation("manage"),
            t = _useTranslation.t,
            i18n = _useTranslation.i18n;
          reactExports.useEffect(() => {
            if (rtlLanguage.includes(i18n.language)) {
              setDir("rtl");
            } else {
              setDir("ltr");
            }
            const timer = setTimeout(() => {
              setOpen(false);
            }, 2e3);
            return () => {
              clearTimeout(timer);
            };
          }, [i18n.language]);
          const handleClose = () => {
            setOpen(false);
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(Snackbar, {
            open,
            autoHideDuration: 2e3,
            onClose: handleClose,
            sx: {
              left: `${left}px !important`
            },
            children: /* @__PURE__ */jsxRuntimeExports.jsx(Alert, {
              variant: "standard",
              severity: "success",
              onClose: handleClose,
              dir,
              children: t(`processed_successes.${success}`)
            })
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-D_ru2xcH.js.map
