;
(function () {
  const _excluded = ["name", "native", "maxHeight", "helperText", "children", "PaperPropsSx", "label", "onChange", "value"],
    _excluded2 = ["value", "length", "autoFocus", "onChange", "TextFieldsProps", "onComplete", "validateChar", "className", "onBlur"],
    _excluded3 = ["onPaste", "onFocus", "onKeyDown", "className", "onBlur"];
  function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }
  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
  function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
  function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  System.register(['./index-legacy-CZICsoLH.js', './Android-legacy-B5yqEvUd.js'], function (exports, module) {
    'use strict';

    var React, reactExports, jsxRuntimeExports, Box, useTheme, FormControl, InputLabel, Select, MenuItem, FormHelperText, PropTypes, styled, TextField, useSelector, shallowEqual, useDispatch, Content, valueChange;
    return {
      setters: [module => {
        React = module.Y;
        reactExports = module.r;
        jsxRuntimeExports = module.m;
        Box = module.ab;
        useTheme = module.a8;
      }, module => {
        FormControl = module.Q;
        InputLabel = module.U;
        Select = module.W;
        MenuItem = module.X;
        FormHelperText = module.Y;
        PropTypes = module.Z;
        styled = module.s;
        TextField = module.N;
        useSelector = module.K;
        shallowEqual = module.L;
        useDispatch = module.M;
        Content = module.R;
        valueChange = module.O;
      }],
      execute: function execute() {
        exports("default", SelectQuestion);
        var isCheckBoxInput = element => element.type === 'checkbox';
        var isDateObject = value => value instanceof Date;
        var isNullOrUndefined = value => value == null;
        const isObjectType = value => typeof value === 'object';
        var isObject = value => !isNullOrUndefined(value) && !Array.isArray(value) && isObjectType(value) && !isDateObject(value);
        var getEventValue = event => isObject(event) && event.target ? isCheckBoxInput(event.target) ? event.target.checked : event.target.value : event;
        var getNodeParentName = name => name.substring(0, name.search(/\.\d+(\.|$)/)) || name;
        var isNameInFieldArray = (names, name) => names.has(getNodeParentName(name));
        var isPlainObject = tempObject => {
          const prototypeCopy = tempObject.constructor && tempObject.constructor.prototype;
          return isObject(prototypeCopy) && prototypeCopy.hasOwnProperty('isPrototypeOf');
        };
        var isWeb = typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined' && typeof document !== 'undefined';
        function cloneObject(data) {
          let copy;
          const isArray = Array.isArray(data);
          const isFileListInstance = typeof FileList !== 'undefined' ? data instanceof FileList : false;
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
        var isKey = value => /^\w*$/.test(value);
        var isUndefined = val => val === undefined;
        var compact = value => Array.isArray(value) ? value.filter(Boolean) : [];
        var stringToPath = input => compact(input.replace(/["|']|\]/g, '').split(/\.|\[/));
        var _get = (object, path, defaultValue) => {
          if (!path || !isObject(object)) {
            return defaultValue;
          }
          const result = (isKey(path) ? [path] : stringToPath(path)).reduce((result, key) => isNullOrUndefined(result) ? result : result[key], object);
          return isUndefined(result) || result === object ? isUndefined(object[path]) ? defaultValue : object[path] : result;
        };
        var isBoolean = value => typeof value === 'boolean';
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
            if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
              return;
            }
            object[key] = newValue;
            object = object[key];
          }
        };
        const EVENTS = {
          BLUR: 'blur',
          CHANGE: 'change'
        };
        const VALIDATION_MODE = {
          all: 'all'
        };
        const HookFormContext = React.createContext(null);
        HookFormContext.displayName = 'HookFormContext';
        /**
         * This custom hook allows you to access the form context. useFormContext is intended to be used in deeply nested structures, where it would become inconvenient to pass the context as a prop. To be used with {@link FormProvider}.
         *
         * @remarks
         * [API](https://react-hook-form.com/docs/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
         *
         * @returns return all useForm methods
         *
         * @example
         * ```tsx
         * function App() {
         *   const methods = useForm();
         *   const onSubmit = data => console.log(data);
         *
         *   return (
         *     <FormProvider {...methods} >
         *       <form onSubmit={methods.handleSubmit(onSubmit)}>
         *         <NestedInput />
         *         <input type="submit" />
         *       </form>
         *     </FormProvider>
         *   );
         * }
         *
         *  function NestedInput() {
         *   const { register } = useFormContext(); // retrieve all hook methods
         *   return <input {...register("test")} />;
         * }
         * ```
         */
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
        const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? reactExports.useLayoutEffect : reactExports.useEffect;

        /**
         * This custom hook allows you to subscribe to each form state, and isolate the re-render at the custom hook level. It has its scope in terms of form state subscription, so it would not affect other useFormState and useForm. Using this hook can reduce the re-render impact on large and complex form application.
         *
         * @remarks
         * [API](https://react-hook-form.com/docs/useformstate) • [Demo](https://codesandbox.io/s/useformstate-75xly)
         *
         * @param props - include options on specify fields to subscribe. {@link UseFormStateReturn}
         *
         * @example
         * ```tsx
         * function App() {
         *   const { register, handleSubmit, control } = useForm({
         *     defaultValues: {
         *     firstName: "firstName"
         *   }});
         *   const { dirtyFields } = useFormState({
         *     control
         *   });
         *   const onSubmit = (data) => console.log(data);
         *
         *   return (
         *     <form onSubmit={handleSubmit(onSubmit)}>
         *       <input {...register("firstName")} placeholder="First Name" />
         *       {dirtyFields.firstName && <p>Field is dirty.</p>}
         *       <input type="submit" />
         *     </form>
         *   );
         * }
         * ```
         */
        function useFormState(props) {
          const methods = useFormContext();
          const _ref = props || {},
            _ref$control = _ref.control,
            control = _ref$control === void 0 ? methods.control : _ref$control,
            disabled = _ref.disabled,
            name = _ref.name,
            exact = _ref.exact;
          const _React$useState = React.useState(control._formState),
            _React$useState2 = _slicedToArray(_React$useState, 2),
            formState = _React$useState2[0],
            updateFormState = _React$useState2[1];
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
            callback: formState => {
              !disabled && updateFormState(_objectSpread(_objectSpread({}, control._formState), formState));
            }
          }), [name, disabled, exact]);
          React.useEffect(() => {
            _localProxyFormState.current.isValid && control._setValid(true);
          }, [control]);
          return React.useMemo(() => getProxyFormState(formState, control, _localProxyFormState.current, false), [formState, control]);
        }
        var isString = value => typeof value === 'string';
        var generateWatchOutput = (names, _names, formValues, isGlobal, defaultValue) => {
          if (isString(names)) {
            return _get(formValues, names, defaultValue);
          }
          if (Array.isArray(names)) {
            return names.map(fieldName => _get(formValues, fieldName));
          }
          return formValues;
        };

        /**
         * Custom hook to subscribe to field change and isolate re-rendering at the component level.
         *
         * @remarks
         *
         * [API](https://react-hook-form.com/docs/usewatch) • [Demo](https://codesandbox.io/s/react-hook-form-v7-ts-usewatch-h9i5e)
         *
         * @example
         * ```tsx
         * const { control } = useForm();
         * const values = useWatch({
         *   name: "fieldName"
         *   control,
         * })
         * ```
         */
        function useWatch(props) {
          const methods = useFormContext();
          const _ref2 = props || {},
            _ref2$control = _ref2.control,
            control = _ref2$control === void 0 ? methods.control : _ref2$control,
            name = _ref2.name,
            defaultValue = _ref2.defaultValue,
            disabled = _ref2.disabled,
            exact = _ref2.exact;
          const _defaultValue = React.useRef(defaultValue);
          const _React$useState3 = React.useState(control._getWatch(name, _defaultValue.current)),
            _React$useState4 = _slicedToArray(_React$useState3, 2),
            value = _React$useState4[0],
            updateValue = _React$useState4[1];
          useIsomorphicLayoutEffect(() => control._subscribe({
            name,
            formState: {
              values: true
            },
            exact,
            callback: formState => !disabled && updateValue(generateWatchOutput(name, control._names, formState.values || control._formValues, false, _defaultValue.current))
          }), [name, control, disabled, exact]);
          React.useEffect(() => control._removeUnmounted());
          return value;
        }

        /**
         * Custom hook to work with controlled component, this function provide you with both form and field level state. Re-render is isolated at the hook level.
         *
         * @remarks
         * [API](https://react-hook-form.com/docs/usecontroller) • [Demo](https://codesandbox.io/s/usecontroller-0o8px)
         *
         * @param props - the path name to the form field value, and validation rules.
         *
         * @returns field properties, field and form state. {@link UseControllerReturn}
         *
         * @example
         * ```tsx
         * function Input(props) {
         *   const { field, fieldState, formState } = useController(props);
         *   return (
         *     <div>
         *       <input {...field} placeholder={props.name} />
         *       <p>{fieldState.isTouched && "Touched"}</p>
         *       <p>{formState.isSubmitted ? "submitted" : ""}</p>
         *     </div>
         *   );
         * }
         * ```
         */
        function useController(props) {
          const methods = useFormContext();
          const name = props.name,
            disabled = props.disabled,
            _props$control = props.control,
            control = _props$control === void 0 ? methods.control : _props$control,
            shouldUnregister = props.shouldUnregister;
          const isArrayField = isNameInFieldArray(control._names.array, name);
          const value = useWatch({
            control,
            name,
            defaultValue: _get(control._formValues, name, _get(control._defaultValues, name, props.defaultValue)),
            exact: true
          });
          const formState = useFormState({
            control,
            name,
            exact: true
          });
          const _props = React.useRef(props);
          const _registerProps = React.useRef(control.register(name, _objectSpread(_objectSpread({}, props.rules), {}, {
            value
          }, isBoolean(props.disabled) ? {
            disabled: props.disabled
          } : {})));
          const fieldState = React.useMemo(() => Object.defineProperties({}, {
            invalid: {
              enumerable: true,
              get: () => !!_get(formState.errors, name)
            },
            isDirty: {
              enumerable: true,
              get: () => !!_get(formState.dirtyFields, name)
            },
            isTouched: {
              enumerable: true,
              get: () => !!_get(formState.touchedFields, name)
            },
            isValidating: {
              enumerable: true,
              get: () => !!_get(formState.validatingFields, name)
            },
            error: {
              enumerable: true,
              get: () => _get(formState.errors, name)
            }
          }), [formState, name]);
          const onChange = React.useCallback(event => _registerProps.current.onChange({
            target: {
              value: getEventValue(event),
              name: name
            },
            type: EVENTS.CHANGE
          }), [name]);
          const onBlur = React.useCallback(() => _registerProps.current.onBlur({
            target: {
              value: _get(control._formValues, name),
              name: name
            },
            type: EVENTS.BLUR
          }), [name, control._formValues]);
          const ref = React.useCallback(elm => {
            const field = _get(control._fields, name);
            if (field && elm) {
              field._f.ref = {
                focus: () => elm.focus && elm.focus(),
                select: () => elm.select && elm.select(),
                setCustomValidity: message => elm.setCustomValidity(message),
                reportValidity: () => elm.reportValidity()
              };
            }
          }, [control._fields, name]);
          const field = React.useMemo(() => _objectSpread(_objectSpread({
            name,
            value
          }, isBoolean(disabled) || formState.disabled ? {
            disabled: formState.disabled || disabled
          } : {}), {}, {
            onChange,
            onBlur,
            ref
          }), [name, disabled, formState.disabled, onChange, onBlur, ref, value]);
          React.useEffect(() => {
            const _shouldUnregisterField = control._options.shouldUnregister || shouldUnregister;
            control.register(name, _objectSpread(_objectSpread({}, _props.current.rules), isBoolean(_props.current.disabled) ? {
              disabled: _props.current.disabled
            } : {}));
            const updateMounted = (name, value) => {
              const field = _get(control._fields, name);
              if (field && field._f) {
                field._f.mount = value;
              }
            };
            updateMounted(name, true);
            if (_shouldUnregisterField) {
              const value = cloneObject(_get(control._options.defaultValues, name));
              set(control._defaultValues, name, value);
              if (isUndefined(_get(control._formValues, name))) {
                set(control._formValues, name, value);
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

        /**
         * Component based on `useController` hook to work with controlled component.
         *
         * @remarks
         * [API](https://react-hook-form.com/docs/usecontroller/controller) • [Demo](https://codesandbox.io/s/react-hook-form-v6-controller-ts-jwyzw) • [Video](https://www.youtube.com/watch?v=N2UNk_UCVyA)
         *
         * @param props - the path name to the form field value, and validation rules.
         *
         * @returns provide field handler functions, field and form state.
         *
         * @example
         * ```tsx
         * function App() {
         *   const { control } = useForm<FormValues>({
         *     defaultValues: {
         *       test: ""
         *     }
         *   });
         *
         *   return (
         *     <form>
         *       <Controller
         *         control={control}
         *         name="test"
         *         render={({ field: { onChange, onBlur, value, ref }, formState, fieldState }) => (
         *           <>
         *             <input
         *               onChange={onChange} // send value to hook form
         *               onBlur={onBlur} // notify when input is touched
         *               value={value} // return updated value
         *               ref={ref} // set ref for focus management
         *             />
         *             <p>{formState.isSubmitted ? "submitted" : ""}</p>
         *             <p>{fieldState.isTouched ? "touched" : ""}</p>
         *           </>
         *         )}
         *       />
         *     </form>
         *   );
         * }
         * ```
         */
        const Controller = props => props.render(useController(props));
        function RHFSelect(_ref3) {
          let name = _ref3.name,
            native = _ref3.native,
            _ref3$maxHeight = _ref3.maxHeight,
            maxHeight = _ref3$maxHeight === void 0 ? 220 : _ref3$maxHeight,
            helperText = _ref3.helperText,
            children = _ref3.children,
            PaperPropsSx = _ref3.PaperPropsSx,
            label = _ref3.label,
            onChange = _ref3.onChange,
            value = _ref3.value,
            other = _objectWithoutProperties(_ref3, _excluded);
          const context = useFormContext();
          if (!context) {
            return /* @__PURE__ */jsxRuntimeExports.jsxs(FormControl, _objectSpread(_objectSpread({
              fullWidth: true
            }, other), {}, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(InputLabel, {
                children: label
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Select, {
                value: value !== null && value !== void 0 ? value : "",
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
                children: React.Children.map(children, (child, index) => /* @__PURE__ */jsxRuntimeExports.jsx(MenuItem, {
                  value: child.props.value,
                  children: child.props.children
                }, index))
              }), /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                children: helperText
              })]
            }));
          }
          const control = context.control;
          return /* @__PURE__ */jsxRuntimeExports.jsx(Controller, {
            name,
            control,
            render: ({
              field,
              fieldState: {
                error
              }
            }) => /* @__PURE__ */jsxRuntimeExports.jsxs(FormControl, _objectSpread(_objectSpread({
              fullWidth: true
            }, field), {}, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(InputLabel, {
                children: label
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Select, _objectSpread(_objectSpread(_objectSpread({}, field), {}, {
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
                label
              }, other), {}, {
                children: React.Children.map(children, (child, index) => /* @__PURE__ */jsxRuntimeExports.jsx(MenuItem, {
                  value: child.props.value,
                  children: child.props.children
                }, index))
              })), /* @__PURE__ */jsxRuntimeExports.jsx(FormHelperText, {
                children: helperText
              })]
            }))
          });
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
        const G = styled(TextField)`
  input {
    text-align: center;
  }
`,
          J = {
            TextFieldStyled: G
          },
          Q = n => /* @__PURE__ */jsxRuntimeExports.jsx(J.TextFieldStyled, _objectSpread({}, n)),
          B = {
            left: "ArrowLeft",
            right: "ArrowRight",
            backspace: "Backspace",
            home: "Home",
            end: "End"
          };
        function U(n, l) {
          return n <= 0 ? [] : Array.from({
            length: n
          }, l);
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
          return n.reduce((u, x, C) => {
            const y = u.characters,
              d = u.restArrayMerged;
            if (C < f) return {
              restArrayMerged: d,
              characters: M(y, x)
            };
            const _d = _toArray(d),
              D = _d[0],
              V = _d.slice(1);
            return {
              restArrayMerged: V,
              characters: M(y, D || "")
            };
          }, {
            restArrayMerged: l,
            characters: []
          }).characters;
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
            var _l$current;
            return (_l$current = l.current) === null || _l$current === void 0 ? void 0 : _l$current.call(l, ...f);
          }, []);
        }
        const ee = () => true;
        React.forwardRef((n, l) => {
          const _n$value = n.value,
            f = _n$value === void 0 ? "" : _n$value,
            _n$length = n.length,
            u = _n$length === void 0 ? 4 : _n$length,
            _n$autoFocus = n.autoFocus,
            x = _n$autoFocus === void 0 ? false : _n$autoFocus,
            C = n.onChange,
            y = n.TextFieldsProps,
            d = n.onComplete,
            _n$validateChar = n.validateChar,
            D = _n$validateChar === void 0 ? ee : _n$validateChar,
            V = n.className,
            b = n.onBlur,
            K = _objectWithoutProperties(n, _excluded2),
            j = React.useRef(f),
            k = N(d),
            I = N(e => {
              const t = e.slice(0, u);
              return {
                isCompleted: t.length === u,
                finalValue: t
              };
            });
          React.useEffect(() => {
            const _I = I(j.current),
              e = _I.isCompleted,
              t = _I.finalValue;
            e && k(t);
          }, [u, k, I]);
          const p = U(u, (e, t) => ({
              character: f[t] || "",
              inputRef: React.createRef()
            })),
            A = e => p.findIndex(({
              inputRef: t
            }) => t.current === e),
            T = () => p.map(({
              character: e
            }) => e),
            O = (e, t) => {
              const a = X(T(), e, t);
              return P(a);
            },
            $ = e => {
              var _p$e;
              (_p$e = p[e]) === null || _p$e === void 0 || (_p$e = _p$e.inputRef.current) === null || _p$e === void 0 || _p$e.focus();
            },
            c = e => {
              var _p$e2;
              (_p$e2 = p[e]) === null || _p$e2 === void 0 || (_p$e2 = _p$e2.inputRef.current) === null || _p$e2 === void 0 || _p$e2.select();
            },
            R = e => {
              e + 1 !== u && (p[e + 1].character ? c(e + 1) : $(e + 1));
            },
            S = (e, t) => typeof D != "function" ? true : D(e, t),
            Y = e => {
              const t = A(e.target);
              if (t === 0 && e.target.value.length > 1) {
                const _I2 = I(e.target.value),
                  m = _I2.finalValue,
                  F = _I2.isCompleted;
                C !== null && C !== void 0 && C(m), F && d !== null && d !== void 0 && d(m), c(m.length - 1);
                return;
              }
              const a = e.target.value[0] || "";
              let o = a;
              o && !S(o, t) && (o = "");
              const s = O(t, o);
              C === null || C === void 0 || C(s);
              const _I3 = I(s),
                h = _I3.isCompleted,
                i = _I3.finalValue;
              h && d !== null && d !== void 0 && d(i), o !== "" ? s.length - 1 < t ? c(s.length) : R(t) : a === "" && s.length <= t && c(t - 1);
            },
            _ = e => {
              const t = e.target,
                a = t.selectionStart,
                o = t.selectionEnd,
                s = A(t),
                h = a === 0 && o === 0;
              if (t.value === e.key) e.preventDefault(), R(s);else if (B.backspace === e.key) {
                if (!t.value) e.preventDefault(), c(s - 1);else if (h) {
                  e.preventDefault();
                  const i = O(s, "");
                  C !== null && C !== void 0 && C(i), i.length <= s && c(s - 1);
                }
              } else B.left === e.key ? (e.preventDefault(), c(s - 1)) : B.right === e.key ? (e.preventDefault(), c(s + 1)) : B.home === e.key ? (e.preventDefault(), c(0)) : B.end === e.key && (e.preventDefault(), c(p.length - 1));
            },
            H = e => {
              const t = e.clipboardData.getData("text/plain"),
                a = e.target,
                o = p.findIndex(({
                  character: r,
                  inputRef: w
                }) => r === "" || w.current === a),
                s = T(),
                h = Z(s, v(t), o).map((r, w) => S(r, w) ? r : ""),
                i = P(h);
              C === null || C === void 0 || C(i);
              const _I4 = I(i),
                m = _I4.isCompleted,
                F = _I4.finalValue;
              m ? (d !== null && d !== void 0 && d(F), c(u - 1)) : c(i.length);
            },
            L = e => {
              if (!p.some(({
                inputRef: a
              }) => a.current === e.relatedTarget)) {
                const _I5 = I(f),
                  a = _I5.isCompleted,
                  o = _I5.finalValue;
                b === null || b === void 0 || b(o, a);
              }
            };
          return /* @__PURE__ */jsxRuntimeExports.jsx(Box, _objectSpread(_objectSpread({
            display: "flex",
            gap: "20px",
            alignItems: "center",
            ref: l,
            className: `MuiOtpInput-Box ${V || ""}`
          }, K), {}, {
            children: p.map(({
              character: e,
              inputRef: t
            }, a) => {
              const _ref4 = typeof y == "function" ? y(a) || {} : y || {},
                o = _ref4.onPaste,
                s = _ref4.onFocus,
                h = _ref4.onKeyDown,
                i = _ref4.className,
                m = _ref4.onBlur,
                F = _objectWithoutProperties(_ref4, _excluded3);
              return /* @__PURE__ */jsxRuntimeExports.jsx(Q, _objectSpread({
                autoFocus: x ? a === 0 : false,
                autoComplete: "one-time-code",
                value: e,
                inputRef: t,
                className: `MuiOtpInput-TextField MuiOtpInput-TextField-${a + 1} ${i || ""}`,
                onPaste: r => {
                  r.preventDefault(), H(r), o === null || o === void 0 ? void 0 : o(r);
                },
                onFocus: r => {
                  r.preventDefault(), r.target.select(), s === null || s === void 0 ? void 0 : s(r);
                },
                onChange: Y,
                onKeyDown: r => {
                  _(r), h === null || h === void 0 ? void 0 : h(r);
                },
                onBlur: r => {
                  m !== null && m !== void 0 && m(r), L(r);
                }
              }, F), a);
            })
          }));
        });
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
        function SelectQuestion({
          lang,
          component
        }) {
          const theme = useTheme();
          const state = useSelector(state2 => {
            let questionState = state2.runState.values[component.qualifiedCode];
            return {
              value: (questionState === null || questionState === void 0 ? void 0 : questionState.value) || ""
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const handleChange = event => {
            dispatch(valueChange({
              componentCode: component.qualifiedCode,
              value: event.target.value
            }));
          };
          const visibleAnswers = useSelector(state2 => component.answers.filter(ans => {
            var _state2$runState$valu, _state2$runState$valu2;
            return (_state2$runState$valu = (_state2$runState$valu2 = state2.runState.values[ans.qualifiedCode]) === null || _state2$runState$valu2 === void 0 ? void 0 : _state2$runState$valu2.relevance) !== null && _state2$runState$valu !== void 0 ? _state2$runState$valu : true;
          }), shallowEqual);
          return /* @__PURE__ */jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
            children: /* @__PURE__ */jsxRuntimeExports.jsx(RHFSelect, {
              sx: {
                width: "50%"
              },
              name: component.qualifiedCode,
              value: state.value,
              onChange: handleChange,
              children: visibleAnswers.map(option => {
                var _option$content;
                return /* @__PURE__ */jsxRuntimeExports.jsx("option", {
                  value: option.code,
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(Content, {
                    elementCode: option.code,
                    fontFamily: theme.textStyles.text.font,
                    color: theme.textStyles.text.color,
                    fontSize: theme.textStyles.text.size,
                    name: "label",
                    lang,
                    content: (_option$content = option.content) === null || _option$content === void 0 ? void 0 : _option$content.label
                  })
                }, option.code);
              })
            })
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=SelectQuestion-legacy-onCYQrJK.js.map
