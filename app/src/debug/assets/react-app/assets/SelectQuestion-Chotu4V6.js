var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
import { Y as React, r as reactExports, m as jsxRuntimeExports, ab as Box, a8 as useTheme } from "./index-CDhdfxEQ.js";
import { Q as FormControl, U as InputLabel, W as Select, X as MenuItem, Y as FormHelperText, Z as PropTypes, s as styled, N as TextField, K as useSelector, L as shallowEqual, M as useDispatch, R as Content, O as valueChange } from "./Android-BIErA7z6.js";
var isCheckBoxInput = (element) => element.type === "checkbox";
var isDateObject = (value) => value instanceof Date;
var isNullOrUndefined = (value) => value == null;
const isObjectType = (value) => typeof value === "object";
var isObject = (value) => !isNullOrUndefined(value) && !Array.isArray(value) && isObjectType(value) && !isDateObject(value);
var getEventValue = (event) => isObject(event) && event.target ? isCheckBoxInput(event.target) ? event.target.checked : event.target.value : event;
var getNodeParentName = (name) => name.substring(0, name.search(/\.\d+(\.|$)/)) || name;
var isNameInFieldArray = (names, name) => names.has(getNodeParentName(name));
var isPlainObject = (tempObject) => {
  const prototypeCopy = tempObject.constructor && tempObject.constructor.prototype;
  return isObject(prototypeCopy) && prototypeCopy.hasOwnProperty("isPrototypeOf");
};
var isWeb = typeof window !== "undefined" && typeof window.HTMLElement !== "undefined" && typeof document !== "undefined";
function cloneObject(data) {
  let copy;
  const isArray = Array.isArray(data);
  const isFileListInstance = typeof FileList !== "undefined" ? data instanceof FileList : false;
  if (data instanceof Date) {
    copy = new Date(data);
  } else if (!(isWeb && (data instanceof Blob || isFileListInstance)) && (isArray || isObject(data))) {
    copy = isArray ? [] : {};
    if (!isArray && !isPlainObject(data)) {
      copy = data;
    } else {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          copy[key] = cloneObject(data[key]);
        }
      }
    }
  } else {
    return data;
  }
  return copy;
}
var isKey = (value) => /^\w*$/.test(value);
var isUndefined = (val) => val === void 0;
var compact = (value) => Array.isArray(value) ? value.filter(Boolean) : [];
var stringToPath = (input) => compact(input.replace(/["|']|\]/g, "").split(/\.|\[/));
var get = (object, path, defaultValue) => {
  if (!path || !isObject(object)) {
    return defaultValue;
  }
  const result = (isKey(path) ? [path] : stringToPath(path)).reduce((result2, key) => isNullOrUndefined(result2) ? result2 : result2[key], object);
  return isUndefined(result) || result === object ? isUndefined(object[path]) ? defaultValue : object[path] : result;
};
var isBoolean = (value) => typeof value === "boolean";
var set = (object, path, value) => {
  let index = -1;
  const tempPath = isKey(path) ? [path] : stringToPath(path);
  const length = tempPath.length;
  const lastIndex = length - 1;
  while (++index < length) {
    const key = tempPath[index];
    let newValue = value;
    if (index !== lastIndex) {
      const objValue = object[key];
      newValue = isObject(objValue) || Array.isArray(objValue) ? objValue : !isNaN(+tempPath[index + 1]) ? [] : {};
    }
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return;
    }
    object[key] = newValue;
    object = object[key];
  }
};
const EVENTS = {
  BLUR: "blur",
  CHANGE: "change"
};
const VALIDATION_MODE = {
  all: "all"
};
const HookFormContext = React.createContext(null);
HookFormContext.displayName = "HookFormContext";
const useFormContext = () => React.useContext(HookFormContext);
var getProxyFormState = (formState, control, localProxyFormState, isRoot = true) => {
  const result = {
    defaultValues: control._defaultValues
  };
  for (const key in formState) {
    Object.defineProperty(result, key, {
      get: () => {
        const _key = key;
        if (control._proxyFormState[_key] !== VALIDATION_MODE.all) {
          control._proxyFormState[_key] = !isRoot || VALIDATION_MODE.all;
        }
        localProxyFormState && (localProxyFormState[_key] = true);
        return formState[_key];
      }
    });
  }
  return result;
};
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? reactExports.useLayoutEffect : reactExports.useEffect;
function useFormState(props) {
  const methods = useFormContext();
  const { control = methods.control, disabled, name, exact } = props || {};
  const [formState, updateFormState] = React.useState(control._formState);
  const _localProxyFormState = React.useRef({
    isDirty: false,
    isLoading: false,
    dirtyFields: false,
    touchedFields: false,
    validatingFields: false,
    isValidating: false,
    isValid: false,
    errors: false
  });
  useIsomorphicLayoutEffect(() => control._subscribe({
    name,
    formState: _localProxyFormState.current,
    exact,
    callback: (formState2) => {
      !disabled && updateFormState({
        ...control._formState,
        ...formState2
      });
    }
  }), [name, disabled, exact]);
  React.useEffect(() => {
    _localProxyFormState.current.isValid && control._setValid(true);
  }, [control]);
  return React.useMemo(() => getProxyFormState(formState, control, _localProxyFormState.current, false), [formState, control]);
}
var isString = (value) => typeof value === "string";
var generateWatchOutput = (names, _names, formValues, isGlobal, defaultValue) => {
  if (isString(names)) {
    return get(formValues, names, defaultValue);
  }
  if (Array.isArray(names)) {
    return names.map((fieldName) => get(formValues, fieldName));
  }
  return formValues;
};
function useWatch(props) {
  const methods = useFormContext();
  const { control = methods.control, name, defaultValue, disabled, exact } = props || {};
  const _defaultValue = React.useRef(defaultValue);
  const [value, updateValue] = React.useState(control._getWatch(name, _defaultValue.current));
  useIsomorphicLayoutEffect(() => control._subscribe({
    name,
    formState: {
      values: true
    },
    exact,
    callback: (formState) => !disabled && updateValue(generateWatchOutput(name, control._names, formState.values || control._formValues, false, _defaultValue.current))
  }), [name, control, disabled, exact]);
  React.useEffect(() => control._removeUnmounted());
  return value;
}
function useController(props) {
  const methods = useFormContext();
  const { name, disabled, control = methods.control, shouldUnregister } = props;
  const isArrayField = isNameInFieldArray(control._names.array, name);
  const value = useWatch({
    control,
    name,
    defaultValue: get(control._formValues, name, get(control._defaultValues, name, props.defaultValue)),
    exact: true
  });
  const formState = useFormState({
    control,
    name,
    exact: true
  });
  const _props = React.useRef(props);
  const _registerProps = React.useRef(control.register(name, {
    ...props.rules,
    value,
    ...isBoolean(props.disabled) ? { disabled: props.disabled } : {}
  }));
  const fieldState = React.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: true,
      get: () => !!get(formState.errors, name)
    },
    isDirty: {
      enumerable: true,
      get: () => !!get(formState.dirtyFields, name)
    },
    isTouched: {
      enumerable: true,
      get: () => !!get(formState.touchedFields, name)
    },
    isValidating: {
      enumerable: true,
      get: () => !!get(formState.validatingFields, name)
    },
    error: {
      enumerable: true,
      get: () => get(formState.errors, name)
    }
  }), [formState, name]);
  const onChange = React.useCallback((event) => _registerProps.current.onChange({
    target: {
      value: getEventValue(event),
      name
    },
    type: EVENTS.CHANGE
  }), [name]);
  const onBlur = React.useCallback(() => _registerProps.current.onBlur({
    target: {
      value: get(control._formValues, name),
      name
    },
    type: EVENTS.BLUR
  }), [name, control._formValues]);
  const ref = React.useCallback((elm) => {
    const field2 = get(control._fields, name);
    if (field2 && elm) {
      field2._f.ref = {
        focus: () => elm.focus && elm.focus(),
        select: () => elm.select && elm.select(),
        setCustomValidity: (message) => elm.setCustomValidity(message),
        reportValidity: () => elm.reportValidity()
      };
    }
  }, [control._fields, name]);
  const field = React.useMemo(() => ({
    name,
    value,
    ...isBoolean(disabled) || formState.disabled ? { disabled: formState.disabled || disabled } : {},
    onChange,
    onBlur,
    ref
  }), [name, disabled, formState.disabled, onChange, onBlur, ref, value]);
  React.useEffect(() => {
    const _shouldUnregisterField = control._options.shouldUnregister || shouldUnregister;
    control.register(name, {
      ..._props.current.rules,
      ...isBoolean(_props.current.disabled) ? { disabled: _props.current.disabled } : {}
    });
    const updateMounted = (name2, value2) => {
      const field2 = get(control._fields, name2);
      if (field2 && field2._f) {
        field2._f.mount = value2;
      }
    };
    updateMounted(name, true);
    if (_shouldUnregisterField) {
      const value2 = cloneObject(get(control._options.defaultValues, name));
      set(control._defaultValues, name, value2);
      if (isUndefined(get(control._formValues, name))) {
        set(control._formValues, name, value2);
      }
    }
    !isArrayField && control.register(name);
    return () => {
      (isArrayField ? _shouldUnregisterField && !control._state.action : _shouldUnregisterField) ? control.unregister(name) : updateMounted(name, false);
    };
  }, [name, control, isArrayField, shouldUnregister]);
  React.useEffect(() => {
    control._setDisabledField({
      disabled,
      name
    });
  }, [disabled, name, control]);
  return React.useMemo(() => ({
    field,
    formState,
    fieldState
  }), [field, formState, fieldState]);
}
const Controller = (props) => props.render(useController(props));
function RHFSelect({
  name,
  native,
  maxHeight = 220,
  helperText,
  children,
  PaperPropsSx,
  label,
  onChange,
  value,
  ...other
}) {
  const context = useFormContext();
  if (!context) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { fullWidth: true, ...other, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Select,
        {
          value: value != null ? value : "",
          sx: {
            borderRadius: "12px",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #d7d7d7"
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #181735"
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#181735"
            },
            "& .MuiOutlinedInput-input": {
              padding: ".5rem"
            }
          },
          onChange,
          label,
          children: React.Children.map(children, (child, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: child.props.value, children: child.props.children }, index))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { children: helperText })
    ] });
  }
  const { control } = context;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Controller,
    {
      name,
      control,
      render: ({ field, fieldState: { error } }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { fullWidth: true, ...field, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Select,
          {
            ...field,
            sx: {
              borderRadius: "12px",
              "& .MuiOutlinedInput-notchedOutline": {
                border: "1px solid #d7d7d7"
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "1px solid #181735"
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#181735"
              },
              "& .MuiOutlinedInput-input": {
                padding: ".5rem"
              }
            },
            error: !!error,
            label,
            ...other,
            children: React.Children.map(children, (child, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: child.props.value, children: child.props.children }, index))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText, { children: helperText })
      ] })
    }
  );
}
RHFSelect.propTypes = {
  PaperPropsSx: PropTypes.object,
  children: PropTypes.node,
  helperText: PropTypes.object,
  maxHeight: PropTypes.number,
  name: PropTypes.string,
  native: PropTypes.bool
};
({
  checkbox: PropTypes.bool,
  chip: PropTypes.bool,
  helperText: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  placeholder: PropTypes.string
});
({
  helperText: PropTypes.string,
  name: PropTypes.string
});
({
  helperText: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  row: PropTypes.bool,
  spacing: PropTypes.number,
  sx: PropTypes.object
});
({
  children: PropTypes.node,
  methods: PropTypes.object,
  onSubmit: PropTypes.func
});
const G = styled(TextField)(_a || (_a = __template(["\n  input {\n    text-align: center;\n  }\n"]))), J = {
  TextFieldStyled: G
}, Q = (n) => /* @__PURE__ */ jsxRuntimeExports.jsx(J.TextFieldStyled, { ...n }), B = {
  left: "ArrowLeft",
  right: "ArrowRight",
  backspace: "Backspace",
  home: "Home",
  end: "End"
};
function U(n, l) {
  return n <= 0 ? [] : Array.from({ length: n }, l);
}
function X(n, l, f) {
  return n.map((u, x) => l === x ? f : u);
}
function P(n) {
  return n.join("");
}
function M(n, l) {
  return [...n, l];
}
function Z(n, l, f) {
  return n.reduce(
    (u, x, C) => {
      const { characters: y, restArrayMerged: d } = u;
      if (C < f)
        return {
          restArrayMerged: d,
          characters: M(y, x)
        };
      const [D, ...V] = d;
      return {
        restArrayMerged: V,
        characters: M(y, D || "")
      };
    },
    {
      restArrayMerged: l,
      characters: []
    }
  ).characters;
}
function v(n) {
  return n.split("");
}
function N(n) {
  const l = React.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return React.useInsertionEffect(() => {
    l.current = n;
  }), React.useCallback((...f) => {
    var _a2;
    return (_a2 = l.current) == null ? void 0 : _a2.call(l, ...f);
  }, []);
}
const ee = () => true;
React.forwardRef(
  (n, l) => {
    const {
      value: f = "",
      length: u = 4,
      autoFocus: x = false,
      onChange: C,
      TextFieldsProps: y,
      onComplete: d,
      validateChar: D = ee,
      className: V,
      onBlur: b,
      ...K
    } = n, j = React.useRef(f), k = N(d), I = N((e) => {
      const t = e.slice(0, u);
      return {
        isCompleted: t.length === u,
        finalValue: t
      };
    });
    React.useEffect(() => {
      const { isCompleted: e, finalValue: t } = I(
        j.current
      );
      e && k(t);
    }, [u, k, I]);
    const p = U(
      u,
      (e, t) => ({
        character: f[t] || "",
        inputRef: React.createRef()
      })
    ), A = (e) => p.findIndex(({ inputRef: t }) => t.current === e), T = () => p.map(({ character: e }) => e), O = (e, t) => {
      const a = X(
        T(),
        e,
        t
      );
      return P(a);
    }, $ = (e) => {
      var _a2, _b;
      (_b = (_a2 = p[e]) == null ? void 0 : _a2.inputRef.current) == null ? void 0 : _b.focus();
    }, c = (e) => {
      var _a2, _b;
      (_b = (_a2 = p[e]) == null ? void 0 : _a2.inputRef.current) == null ? void 0 : _b.select();
    }, R = (e) => {
      e + 1 !== u && (p[e + 1].character ? c(e + 1) : $(e + 1));
    }, S = (e, t) => typeof D != "function" ? true : D(e, t), Y = (e) => {
      const t = A(e.target);
      if (t === 0 && e.target.value.length > 1) {
        const { finalValue: m, isCompleted: F } = I(
          e.target.value
        );
        C == null ? void 0 : C(m), F && (d == null ? void 0 : d(m)), c(m.length - 1);
        return;
      }
      const a = e.target.value[0] || "";
      let o = a;
      o && !S(o, t) && (o = "");
      const s = O(t, o);
      C == null ? void 0 : C(s);
      const { isCompleted: h, finalValue: i } = I(s);
      h && (d == null ? void 0 : d(i)), o !== "" ? s.length - 1 < t ? c(s.length) : R(t) : a === "" && s.length <= t && c(t - 1);
    }, _ = (e) => {
      const t = e.target, a = t.selectionStart, o = t.selectionEnd, s = A(t), h = a === 0 && o === 0;
      if (t.value === e.key)
        e.preventDefault(), R(s);
      else if (B.backspace === e.key) {
        if (!t.value)
          e.preventDefault(), c(s - 1);
        else if (h) {
          e.preventDefault();
          const i = O(s, "");
          C == null ? void 0 : C(i), i.length <= s && c(s - 1);
        }
      } else B.left === e.key ? (e.preventDefault(), c(s - 1)) : B.right === e.key ? (e.preventDefault(), c(s + 1)) : B.home === e.key ? (e.preventDefault(), c(0)) : B.end === e.key && (e.preventDefault(), c(p.length - 1));
    }, H = (e) => {
      const t = e.clipboardData.getData("text/plain"), a = e.target, o = p.findIndex(
        ({ character: r, inputRef: w }) => r === "" || w.current === a
      ), s = T(), h = Z(
        s,
        v(t),
        o
      ).map((r, w) => S(r, w) ? r : ""), i = P(h);
      C == null ? void 0 : C(i);
      const { isCompleted: m, finalValue: F } = I(i);
      m ? (d == null ? void 0 : d(F), c(u - 1)) : c(i.length);
    }, L = (e) => {
      if (!p.some(({ inputRef: a }) => a.current === e.relatedTarget)) {
        const { isCompleted: a, finalValue: o } = I(f);
        b == null ? void 0 : b(o, a);
      }
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        display: "flex",
        gap: "20px",
        alignItems: "center",
        ref: l,
        className: "MuiOtpInput-Box ".concat(V || ""),
        ...K,
        children: p.map(({ character: e, inputRef: t }, a) => {
          const {
            onPaste: o,
            onFocus: s,
            onKeyDown: h,
            className: i,
            onBlur: m,
            ...F
          } = typeof y == "function" ? y(a) || {} : y || {};
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Q,
            {
              autoFocus: x ? a === 0 : false,
              autoComplete: "one-time-code",
              value: e,
              inputRef: t,
              className: "MuiOtpInput-TextField MuiOtpInput-TextField-".concat(a + 1, " ").concat(i || ""),
              onPaste: (r) => {
                r.preventDefault(), H(r), o == null ? void 0 : o(r);
              },
              onFocus: (r) => {
                r.preventDefault(), r.target.select(), s == null ? void 0 : s(r);
              },
              onChange: Y,
              onKeyDown: (r) => {
                _(r), h == null ? void 0 : h(r);
              },
              onBlur: (r) => {
                m == null ? void 0 : m(r), L(r);
              },
              ...F
            },
            a
          );
        })
      }
    );
  }
);
({
  name: PropTypes.string
});
({
  helperText: PropTypes.string,
  name: PropTypes.string
});
({
  helperText: PropTypes.string,
  name: PropTypes.string
});
({
  helperText: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string
});
({
  helperText: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  row: PropTypes.bool,
  spacing: PropTypes.number
});
({
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.node,
  hiddenLabel: PropTypes.bool,
  placeholder: PropTypes.string
});
function SelectQuestion({ lang, component }) {
  const theme = useTheme();
  const state = useSelector((state2) => {
    let questionState = state2.runState.values[component.qualifiedCode];
    return {
      value: (questionState == null ? void 0 : questionState.value) || ""
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(
      valueChange({
        componentCode: component.qualifiedCode,
        value: event.target.value
      })
    );
  };
  const visibleAnswers = useSelector(
    (state2) => component.answers.filter((ans) => {
      var _a2, _b;
      return (_b = (_a2 = state2.runState.values[ans.qualifiedCode]) == null ? void 0 : _a2.relevance) != null ? _b : true;
    }),
    shallowEqual
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    RHFSelect,
    {
      sx: { width: "50%" },
      name: component.qualifiedCode,
      value: state.value,
      onChange: handleChange,
      children: visibleAnswers.map((option) => {
        var _a2;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: option.code, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Content,
          {
            elementCode: option.code,
            fontFamily: theme.textStyles.text.font,
            color: theme.textStyles.text.color,
            fontSize: theme.textStyles.text.size,
            name: "label",
            lang,
            content: (_a2 = option.content) == null ? void 0 : _a2.label
          }
        ) }, option.code);
      })
    }
  ) });
}
export {
  SelectQuestion as default
};
//# sourceMappingURL=SelectQuestion-Chotu4V6.js.map
