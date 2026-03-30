;
(function () {
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
  System.register(['./index-legacy-CoMmlwbr.js', './vendor-legacy-lhtLtiSI.js', './Android-legacy-Csf5qFR4.js', './redux-legacy-ZqSxVvAn.js', './i18n-legacy-BRT6G2_g.js', './mui-legacy-b38CRKaY.js', './dnd-legacy-DGW9B2he.js', './charts-legacy-BBm9rbLh.js', './editor-legacy-Dx3AxXyy.js'], function (exports, module) {
    'use strict';

    var jsxs, jsx, LoadingDots, reactExports, React, useService, NAMESPACES, fileTypesToMimesArray, ValidationItem, previewUrlByFilename, valueChange, setDirty, uploadFile, useSelector, useDispatch, useTranslation, styled, Button, Link;
    return {
      setters: [module => {
        jsxs = module.o;
        jsx = module.n;
        LoadingDots = module.L;
      }, module => {
        reactExports = module.r;
        React = module.b;
      }, module => {
        useService = module.a;
        NAMESPACES = module.N;
        fileTypesToMimesArray = module.i;
        ValidationItem = module.j;
        previewUrlByFilename = module.p;
        valueChange = module.v;
        setDirty = module.s;
        uploadFile = module.c;
      }, module => {
        useSelector = module.u;
        useDispatch = module.b;
      }, module => {
        useTranslation = module.u;
      }, module => {
        styled = module.aa;
        Button = module.k;
        Link = module.ab;
      }, null, null, null],
      execute: function execute() {
        exports("default", FileUpload);
        const Input = styled("input")({
          display: "none"
        });
        function FileUpload(props) {
          var _props$component$vali, _props$component$vali2, _props$component$vali3, _props$component$vali4, _props$component$vali5;
          const runService = useService("run");
          const _useTranslation = useTranslation(NAMESPACES.RUN),
            t = _useTranslation.t;
          let accepted = fileTypesToMimesArray((_props$component$vali = props.component.validation) === null || _props$component$vali === void 0 || (_props$component$vali = _props$component$vali.validation_file_types) === null || _props$component$vali === void 0 ? void 0 : _props$component$vali.fileTypes);
          const validationMaxSize = ((_props$component$vali2 = props.component.validation) === null || _props$component$vali2 === void 0 || (_props$component$vali2 = _props$component$vali2.validation_max_file_size) === null || _props$component$vali2 === void 0 ? void 0 : _props$component$vali2.isActive) && ((_props$component$vali3 = props.component.validation) === null || _props$component$vali3 === void 0 || (_props$component$vali3 = _props$component$vali3.validation_max_file_size) === null || _props$component$vali3 === void 0 ? void 0 : _props$component$vali3.max_size) || -1;
          const IMAGE_MAX_SIZE_KB = 10240;
          const maxFileSize = validationMaxSize > 0 ? Math.min(validationMaxSize, IMAGE_MAX_SIZE_KB) : IMAGE_MAX_SIZE_KB;
          const state = useSelector(state2 => {
            let questionState = state2.runState.values[props.component.qualifiedCode];
            return questionState === null || questionState === void 0 ? void 0 : questionState.value;
          });
          const preview = useSelector(state2 => {
            return state2.runState.preview;
          });
          const dispatch = useDispatch();
          const _reactExports$useStat = reactExports.useState(),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            selectedFile = _reactExports$useStat2[0],
            setSelectedFile = _reactExports$useStat2[1];
          const _reactExports$useStat3 = reactExports.useState(false),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            isUploading = _reactExports$useStat4[0],
            setUploading = _reactExports$useStat4[1];
          const previewAndroid = () => {
            window["Android"].previewFileUpload(state.stored_filename, state.filename);
          };
          const invalidSelectedFile = !isUploading && selectedFile && accepted.length > 0 && !accepted.includes(selectedFile.type);
          const invalidSize = !isUploading && selectedFile && maxFileSize > 0 && selectedFile.size / 1024 > maxFileSize;
          const changeHandler = event => {
            var _event$target$files;
            const file = (_event$target$files = event.target.files) === null || _event$target$files === void 0 ? void 0 : _event$target$files[0];
            if (!file) return;
            dispatch(setDirty(props.component.qualifiedCode));
            setSelectedFile(file);
            const invalidType = accepted.length > 0 && !accepted.includes(file.type);
            const tooBig = maxFileSize > 0 && file.size / 1024 > maxFileSize;
            if (!invalidType && !tooBig) {
              uploadSelectedFile(file);
            }
          };
          const uploadSelectedFile = file => {
            if (!file) return;
            setUploading(true);
            uploadFile(runService, props.component.qualifiedCode, preview, file).then(response => {
              setUploading(false);
              setSelectedFile(void 0);
              dispatch(valueChange({
                componentCode: props.component.qualifiedCode,
                value: response
              }));
            }).catch(err => {
              setUploading(false);
              console.error(err);
            });
          };
          const resetSelectedFile = () => {
            setSelectedFile(void 0);
          };
          const onButtonClick = event => {
            if (window["Android"]) {
              event.preventDefault();
              const code = props.component.qualifiedCode;
              window["Android"].selectFile(code, (accepted === null || accepted === void 0 ? void 0 : accepted.join(",")) || "", maxFileSize || -1);
              window["onFileSelected" + code] = (name, size, type) => {
                const fileLike = {
                  name,
                  size,
                  type
                };
                dispatch(setDirty(code));
                setSelectedFile(fileLike);
                const invalidType = accepted.length > 0 && !accepted.includes(type);
                const tooBig = maxFileSize > 0 && size / 1024 > maxFileSize;
                if (!invalidType && !tooBig) {
                  uploadSelectedFile(fileLike);
                }
              };
            }
          };
          return /* @__PURE__ */jsxs("div", {
            children: [/* @__PURE__ */jsxs("label", {
              htmlFor: "contained-button-file",
              children: [/* @__PURE__ */jsx(Input, {
                id: "contained-button-file",
                type: "file",
                accept: accepted ? accepted.join(",") : void 0,
                onChange: changeHandler
              }), /* @__PURE__ */jsx(Button, {
                disabled: isUploading,
                onClick: onButtonClick,
                variant: "contained",
                component: "span",
                children: t("choose_file")
              })]
            }), !selectedFile ? "" : /* @__PURE__ */jsxs(React.Fragment, {
              children: [/* @__PURE__ */jsxs("span", {
                children: [" ", selectedFile.name, " - ", Math.round(selectedFile.size / 1024), "K"]
              }), /* @__PURE__ */jsx(Button, {
                disabled: isUploading,
                variant: "text",
                onClick: resetSelectedFile,
                children: t("cancel")
              })]
            }), invalidSize && /* @__PURE__ */jsxs(React.Fragment, {
              children: [/* @__PURE__ */jsx("br", {}), /* @__PURE__ */jsx(ValidationItem, {
                name: "validation_max_file_size",
                validation: _objectSpread(_objectSpread({}, (_props$component$vali4 = props.component.validation) === null || _props$component$vali4 === void 0 ? void 0 : _props$component$vali4.validation_max_file_size), {}, {
                  max_size: maxFileSize
                })
              })]
            }), invalidSelectedFile && /* @__PURE__ */jsxs(React.Fragment, {
              children: [/* @__PURE__ */jsx("br", {}), /* @__PURE__ */jsx(ValidationItem, {
                name: "validation_file_types",
                validation: (_props$component$vali5 = props.component.validation) === null || _props$component$vali5 === void 0 ? void 0 : _props$component$vali5.validation_file_types
              })]
            }), isUploading ? /* @__PURE__ */jsxs("div", {
              style: {
                textAlign: "center"
              },
              children: [/* @__PURE__ */jsx(LoadingDots, {}), /* @__PURE__ */jsx("br", {}), /* @__PURE__ */jsx("span", {
                children: t("uploading")
              })]
            }) : !state || !state.stored_filename ? "" : /* @__PURE__ */jsxs(React.Fragment, {
              children: [/* @__PURE__ */jsx("br", {}), /* @__PURE__ */jsx("br", {}), window["Android"] ? /* @__PURE__ */jsxs(Link, {
                target: "_blank",
                onClick: previewAndroid,
                children: [state.filename, " - ", Math.round(state.size / 1024), "K"]
              }) : /* @__PURE__ */jsxs(Link, {
                target: "_blank",
                href: previewUrlByFilename(state.stored_filename),
                children: [state.filename, " - ", Math.round(state.size / 1024), "K"]
              }), /* @__PURE__ */jsx(Button, {
                variant: "text",
                size: "small",
                onClick: () => dispatch(valueChange({
                  componentCode: props.component.qualifiedCode,
                  value: {}
                })),
                children: t("remove_file", "Remove")
              })]
            })]
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=FileUpload-legacy-DpIK-Veo.js.map
