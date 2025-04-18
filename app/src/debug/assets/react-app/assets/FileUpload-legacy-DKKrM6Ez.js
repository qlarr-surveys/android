;
(function () {
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  System.register(['./index-legacy-ppEgxGbl.js', './use-service-legacy-BbL3A7cT.js', './index-legacy-VaWa31-C.js', './Link-legacy-CyFPht-Y.js', './isTouchDevice-legacy-D04XAr6x.js', './common-legacy-Cdw-XyXm.js', './Close-legacy-CkOaATYN.js', './Card-legacy-nTgNTVv-.js', './Toolbar-legacy-CAJae3Jn.js'], function (exports, module) {
    'use strict';

    var reactExports, jsxRuntimeExports, React, LoadingDots, styled, useService, useTheme, useTranslation, fileTypesToMimesArray, useSelector, useDispatch, Button, previewUrl, setDirty, uploadFile, valueChange, ValidationItem, Link;
    return {
      setters: [module => {
        reactExports = module.r;
        jsxRuntimeExports = module.j;
        React = module.R;
        LoadingDots = module.z;
      }, module => {
        styled = module.f;
        useService = module.R;
        useTheme = module.w;
        useTranslation = module.M;
        fileTypesToMimesArray = module.be;
        useSelector = module.H;
        useDispatch = module.U;
        Button = module.aQ;
        previewUrl = module.b3;
        setDirty = module.b1;
        uploadFile = module.b5;
        valueChange = module.aV;
      }, module => {
        ValidationItem = module.a;
      }, module => {
        Link = module.L;
      }, null, null, null, null, null],
      execute: function execute() {
        exports("default", FileUpload);
        const Input = styled("input")({
          display: "none"
        });
        function FileUpload(props) {
          var _props$component$vali, _props$component$vali2, _props$component$vali3, _props$component$vali4, _props$component$vali5;
          const runService = useService("run");
          const theme = useTheme();
          const _useTranslation = useTranslation("run"),
            t = _useTranslation.t;
          let accepted = fileTypesToMimesArray((_props$component$vali = props.component.validation) === null || _props$component$vali === void 0 || (_props$component$vali = _props$component$vali.validation_file_types) === null || _props$component$vali === void 0 ? void 0 : _props$component$vali.fileTypes);
          const maxFileSize = ((_props$component$vali2 = props.component.validation) === null || _props$component$vali2 === void 0 || (_props$component$vali2 = _props$component$vali2.validation_max_file_size) === null || _props$component$vali2 === void 0 ? void 0 : _props$component$vali2.isActive) && ((_props$component$vali3 = props.component.validation) === null || _props$component$vali3 === void 0 || (_props$component$vali3 = _props$component$vali3.validation_max_file_size) === null || _props$component$vali3 === void 0 ? void 0 : _props$component$vali3.max_size) || -1;
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
            dispatch(setDirty(props.component.qualifiedCode));
            setSelectedFile(event.target.files[0]);
          };
          const uploadSelectedFile = () => {
            setUploading(true);
            uploadFile(runService, props.component.qualifiedCode, preview, selectedFile).then(response => {
              setUploading(false);
              resetSelectedFile();
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
              const code = props.component.qualifiedCode;
              event.preventDefault();
              window["Android"].selectFile(code, (accepted === null || accepted === void 0 ? void 0 : accepted.join(",")) || "", maxFileSize || -1);
              window["onFileSelected" + code] = (name, size, type) => {
                dispatch(setDirty(props.component.qualifiedCode));
                setSelectedFile({
                  name,
                  size,
                  type
                });
              };
            }
          };
          let shouldUpload = selectedFile && !invalidSelectedFile && !invalidSize;
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            children: [/* @__PURE__ */jsxRuntimeExports.jsxs("label", {
              htmlFor: "contained-button-file",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Input, {
                id: "contained-button-file",
                type: "file",
                accept: accepted ? accepted.join(",") : void 0,
                onChange: changeHandler
              }), /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                disabled: isUploading,
                onClick: onButtonClick,
                variant: "contained",
                component: "span",
                children: t("choose_file")
              })]
            }), !selectedFile ? "" : /* @__PURE__ */jsxRuntimeExports.jsxs(React.Fragment, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("span", {
                children: [" ", selectedFile.name, " - ", Math.round(selectedFile.size / 1024), "K"]
              }), shouldUpload ? /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                disabled: isUploading,
                variant: "text",
                onClick: uploadSelectedFile,
                children: t("upload")
              }) : "", /* @__PURE__ */jsxRuntimeExports.jsx(Button, {
                disabled: isUploading,
                sx: {
                  fontFamily: theme.textStyles.text.font,
                  fontSize: theme.textStyles.text.size
                },
                variant: "text",
                onClick: resetSelectedFile,
                children: t("cancel")
              })]
            }), invalidSize && /* @__PURE__ */jsxRuntimeExports.jsxs(React.Fragment, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("br", {}), /* @__PURE__ */jsxRuntimeExports.jsx(ValidationItem, {
                name: "validation_max_file_size",
                validation: (_props$component$vali4 = props.component.validation) === null || _props$component$vali4 === void 0 ? void 0 : _props$component$vali4.validation_max_file_size
              })]
            }), invalidSelectedFile && /* @__PURE__ */jsxRuntimeExports.jsxs(React.Fragment, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("br", {}), /* @__PURE__ */jsxRuntimeExports.jsx(ValidationItem, {
                name: "validation_file_types",
                validation: (_props$component$vali5 = props.component.validation) === null || _props$component$vali5 === void 0 ? void 0 : _props$component$vali5.validation_file_types
              })]
            }), isUploading ? /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              style: {
                textAlign: "center"
              },
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(LoadingDots, {}), /* @__PURE__ */jsxRuntimeExports.jsx("br", {}), /* @__PURE__ */jsxRuntimeExports.jsx("span", {
                children: t("uploading")
              })]
            }) : !state || !state.stored_filename ? "" : /* @__PURE__ */jsxRuntimeExports.jsxs(React.Fragment, {
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("br", {}), /* @__PURE__ */jsxRuntimeExports.jsx("br", {}), window["Android"] ? /* @__PURE__ */jsxRuntimeExports.jsxs(Link, {
                target: "_blank",
                onClick: previewAndroid,
                children: [state.filename, " - ", Math.round(state.size / 1024), "K"]
              }) : /* @__PURE__ */jsxRuntimeExports.jsxs(Link, {
                target: "_blank",
                href: previewUrl(state.stored_filename),
                children: [state.filename, " - ", Math.round(state.size / 1024), "K"]
              })]
            })]
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=FileUpload-legacy-DKKrM6Ez.js.map
