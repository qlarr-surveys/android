;
(function () {
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  System.register(['./index-legacy-ppEgxGbl.js', './RadioGroupContext-legacy-DUgm0tDK.js', './use-service-legacy-BbL3A7cT.js', './FormGroup-legacy-BHJA9xoV.js'], function (exports, module) {
    'use strict';

    var generateUtilityClasses, generateUtilityClass, reactExports, _objectWithoutPropertiesLoose, jsxRuntimeExports, _extends, clsx, RadioGroupContext, useControlled, useForkRef, useId, composeClasses, FormGroup;
    return {
      setters: [module => {
        generateUtilityClasses = module.f;
        generateUtilityClass = module.g;
        reactExports = module.r;
        _objectWithoutPropertiesLoose = module.b;
        jsxRuntimeExports = module.j;
        _extends = module._;
        clsx = module.d;
      }, module => {
        RadioGroupContext = module.R;
      }, module => {
        useControlled = module.A;
        useForkRef = module.b;
        useId = module.C;
        composeClasses = module.c;
      }, module => {
        FormGroup = module.F;
      }],
      execute: function execute() {
        function getRadioGroupUtilityClass(slot) {
          return generateUtilityClass('MuiRadioGroup', slot);
        }
        generateUtilityClasses('MuiRadioGroup', ['root', 'row', 'error']);
        const _excluded = ["actions", "children", "className", "defaultValue", "name", "onChange", "value"];
        const useUtilityClasses = props => {
          const classes = props.classes,
            row = props.row,
            error = props.error;
          const slots = {
            root: ["root", row && "row", error && "error"]
          };
          return composeClasses(slots, getRadioGroupUtilityClass, classes);
        };
        const RadioGroup = exports("R", /* @__PURE__ */reactExports.forwardRef(function RadioGroup2(props, ref) {
          const actions = props.actions,
            children = props.children,
            className = props.className,
            defaultValue = props.defaultValue,
            nameProp = props.name,
            onChange = props.onChange,
            valueProp = props.value,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const rootRef = reactExports.useRef(null);
          const classes = useUtilityClasses(props);
          const _useControlled = useControlled({
              controlled: valueProp,
              default: defaultValue,
              name: "RadioGroup"
            }),
            _useControlled2 = _slicedToArray(_useControlled, 2),
            value = _useControlled2[0],
            setValueState = _useControlled2[1];
          reactExports.useImperativeHandle(actions, () => ({
            focus: () => {
              let input = rootRef.current.querySelector("input:not(:disabled):checked");
              if (!input) {
                input = rootRef.current.querySelector("input:not(:disabled)");
              }
              if (input) {
                input.focus();
              }
            }
          }), []);
          const handleRef = useForkRef(ref, rootRef);
          const name = useId(nameProp);
          const contextValue = reactExports.useMemo(() => ({
            name,
            onChange(event) {
              setValueState(event.target.value);
              if (onChange) {
                onChange(event, event.target.value);
              }
            },
            value
          }), [name, onChange, setValueState, value]);
          return /* @__PURE__ */jsxRuntimeExports.jsx(RadioGroupContext.Provider, {
            value: contextValue,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(FormGroup, _extends({
              role: "radiogroup",
              ref: handleRef,
              className: clsx(classes.root, className)
            }, other, {
              children
            }))
          });
        }));
      }
    };
  });
})();
//# sourceMappingURL=RadioGroup-legacy-CVv5tJcI.js.map
