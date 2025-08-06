;
(function () {
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  System.register(['./index-legacy-BpJl3CBN.js', './Android-legacy-BYdjD6gG.js'], function (exports, module) {
    'use strict';

    var generateUtilityClass, generateUtilityClasses, reactExports, _objectWithoutPropertiesLoose, _extends, jsxRuntimeExports, clsx, useControlled, useFormControl, styled, capitalize, composeClasses, ButtonBase, rootShouldForwardProp;
    return {
      setters: [module => {
        generateUtilityClass = module.U;
        generateUtilityClasses = module.V;
        reactExports = module.r;
        _objectWithoutPropertiesLoose = module.w;
        _extends = module.y;
        jsxRuntimeExports = module.m;
        clsx = module.D;
      }, module => {
        useControlled = module.w;
        useFormControl = module.h;
        styled = module.s;
        capitalize = module.e;
        composeClasses = module.g;
        ButtonBase = module.k;
        rootShouldForwardProp = module.ab;
      }],
      execute: function execute() {
        function getSwitchBaseUtilityClass(slot) {
          return generateUtilityClass('PrivateSwitchBase', slot);
        }
        generateUtilityClasses('PrivateSwitchBase', ['root', 'checked', 'disabled', 'input', 'edgeStart', 'edgeEnd']);
        const _excluded = ["autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "disableFocusRipple", "edge", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"];
        const useUtilityClasses = ownerState => {
          const classes = ownerState.classes,
            checked = ownerState.checked,
            disabled = ownerState.disabled,
            edge = ownerState.edge;
          const slots = {
            root: ["root", checked && "checked", disabled && "disabled", edge && `edge${capitalize(edge)}`],
            input: ["input"]
          };
          return composeClasses(slots, getSwitchBaseUtilityClass, classes);
        };
        const SwitchBaseRoot = styled(ButtonBase, {
          name: "MuiSwitchBase"
        })(({
          ownerState
        }) => _extends({
          padding: 9,
          borderRadius: "50%"
        }, ownerState.edge === "start" && {
          marginLeft: ownerState.size === "small" ? -3 : -12
        }, ownerState.edge === "end" && {
          marginRight: ownerState.size === "small" ? -3 : -12
        }));
        const SwitchBaseInput = styled("input", {
          name: "MuiSwitchBase",
          shouldForwardProp: rootShouldForwardProp
        })({
          cursor: "inherit",
          position: "absolute",
          opacity: 0,
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          margin: 0,
          padding: 0,
          zIndex: 1
        });
        const SwitchBase = exports("S", /* @__PURE__ */reactExports.forwardRef(function SwitchBase2(props, ref) {
          const autoFocus = props.autoFocus,
            checkedProp = props.checked,
            checkedIcon = props.checkedIcon,
            className = props.className,
            defaultChecked = props.defaultChecked,
            disabledProp = props.disabled,
            _props$disableFocusRi = props.disableFocusRipple,
            disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
            _props$edge = props.edge,
            edge = _props$edge === void 0 ? false : _props$edge,
            icon = props.icon,
            id = props.id,
            inputProps = props.inputProps,
            inputRef = props.inputRef,
            name = props.name,
            onBlur = props.onBlur,
            onChange = props.onChange,
            onFocus = props.onFocus,
            readOnly = props.readOnly,
            _props$required = props.required,
            required = _props$required === void 0 ? false : _props$required,
            tabIndex = props.tabIndex,
            type = props.type,
            value = props.value,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const _useControlled = useControlled({
              controlled: checkedProp,
              default: Boolean(defaultChecked),
              name: "SwitchBase",
              state: "checked"
            }),
            _useControlled2 = _slicedToArray(_useControlled, 2),
            checked = _useControlled2[0],
            setCheckedState = _useControlled2[1];
          const muiFormControl = useFormControl();
          const handleFocus = event => {
            if (onFocus) {
              onFocus(event);
            }
            if (muiFormControl && muiFormControl.onFocus) {
              muiFormControl.onFocus(event);
            }
          };
          const handleBlur = event => {
            if (onBlur) {
              onBlur(event);
            }
            if (muiFormControl && muiFormControl.onBlur) {
              muiFormControl.onBlur(event);
            }
          };
          const handleInputChange = event => {
            if (event.nativeEvent.defaultPrevented) {
              return;
            }
            const newChecked = event.target.checked;
            setCheckedState(newChecked);
            if (onChange) {
              onChange(event, newChecked);
            }
          };
          let disabled = disabledProp;
          if (muiFormControl) {
            if (typeof disabled === "undefined") {
              disabled = muiFormControl.disabled;
            }
          }
          const hasLabelFor = type === "checkbox" || type === "radio";
          const ownerState = _extends({}, props, {
            checked,
            disabled,
            disableFocusRipple,
            edge
          });
          const classes = useUtilityClasses(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(SwitchBaseRoot, _extends({
            component: "span",
            className: clsx(classes.root, className),
            centerRipple: true,
            focusRipple: !disableFocusRipple,
            disabled,
            tabIndex: null,
            role: void 0,
            onFocus: handleFocus,
            onBlur: handleBlur,
            ownerState,
            ref
          }, other, {
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(SwitchBaseInput, _extends({
              autoFocus,
              checked: checkedProp,
              defaultChecked,
              className: classes.input,
              disabled,
              id: hasLabelFor ? id : void 0,
              name,
              onChange: handleInputChange,
              readOnly,
              ref: inputRef,
              required,
              ownerState,
              tabIndex,
              type
            }, type === "checkbox" && value === void 0 ? {} : {
              value
            }, inputProps)), checked ? checkedIcon : icon]
          }));
        }));
      }
    };
  });
})();
//# sourceMappingURL=SwitchBase-legacy-D16WBbX0.js.map
