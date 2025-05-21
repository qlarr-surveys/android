;
(function () {
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  System.register(['./index-legacy-ppEgxGbl.js'], function (exports, module) {
    'use strict';

    var getDefaultExportFromCjs, reactExports;
    return {
      setters: [module => {
        getDefaultExportFromCjs = module.w;
        reactExports = module.r;
      }],
      execute: function execute() {
        function _mergeNamespaces(n, m) {
          for (var i = 0; i < m.length; i++) {
            const e = m[i];
            if (typeof e !== 'string' && !Array.isArray(e)) {
              for (const k in e) {
                if (k !== 'default' && !(k in n)) {
                  const d = Object.getOwnPropertyDescriptor(e, k);
                  if (d) {
                    Object.defineProperty(n, k, d.get ? d : {
                      enumerable: true,
                      get: () => e[k]
                    });
                  }
                }
              }
            }
          }
          return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, {
            value: 'Module'
          }));
        }
        var __create = Object.create;
        var __defProp = Object.defineProperty;
        var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
        var __getOwnPropNames = Object.getOwnPropertyNames;
        var __getProtoOf = Object.getPrototypeOf;
        var __hasOwnProp = Object.prototype.hasOwnProperty;
        var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
          enumerable: true,
          configurable: true,
          writable: true,
          value
        }) : obj[key] = value;
        var __export = (target, all) => {
          for (var name in all) __defProp(target, name, {
            get: all[name],
            enumerable: true
          });
        };
        var __copyProps = (to, from, except, desc) => {
          if (from && typeof from === "object" || typeof from === "function") {
            var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                let key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                  get: () => from[key],
                  enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
          return to;
        };
        var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        !mod || !mod.__esModule ? __defProp(target, "default", {
          value: mod,
          enumerable: true
        }) : target, mod));
        var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
          value: true
        }), mod);
        var __publicField = (obj, key, value) => {
          __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
          return value;
        };
        var Preview_exports = {};
        __export(Preview_exports, {
          default: () => Preview
        });
        var Preview_1 = __toCommonJS(Preview_exports);
        var import_react = __toESM(reactExports);
        const ICON_SIZE = "64px";
        const cache = {};
        class Preview extends import_react.Component {
          constructor() {
            super(...arguments);
            __publicField(this, "mounted", false);
            __publicField(this, "state", {
              image: null
            });
            __publicField(this, "handleKeyPress", e => {
              if (e.key === "Enter" || e.key === " ") {
                this.props.onClick();
              }
            });
          }
          componentDidMount() {
            this.mounted = true;
            this.fetchImage(this.props);
          }
          componentDidUpdate(prevProps) {
            const _this$props = this.props,
              url = _this$props.url,
              light = _this$props.light;
            if (prevProps.url !== url || prevProps.light !== light) {
              this.fetchImage(this.props);
            }
          }
          componentWillUnmount() {
            this.mounted = false;
          }
          fetchImage({
            url,
            light,
            oEmbedUrl
          }) {
            if (import_react.default.isValidElement(light)) {
              return;
            }
            if (typeof light === "string") {
              this.setState({
                image: light
              });
              return;
            }
            if (cache[url]) {
              this.setState({
                image: cache[url]
              });
              return;
            }
            this.setState({
              image: null
            });
            return window.fetch(oEmbedUrl.replace("{url}", url)).then(response => response.json()).then(data => {
              if (data.thumbnail_url && this.mounted) {
                const image = data.thumbnail_url.replace("height=100", "height=480").replace("-d_295x166", "-d_640");
                this.setState({
                  image
                });
                cache[url] = image;
              }
            });
          }
          render() {
            const _this$props2 = this.props,
              light = _this$props2.light,
              onClick = _this$props2.onClick,
              playIcon = _this$props2.playIcon,
              previewTabIndex = _this$props2.previewTabIndex,
              previewAriaLabel = _this$props2.previewAriaLabel;
            const image = this.state.image;
            const isElement = import_react.default.isValidElement(light);
            const flexCenter = {
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            };
            const styles = {
              preview: _objectSpread({
                width: "100%",
                height: "100%",
                backgroundImage: image && !isElement ? `url(${image})` : void 0,
                backgroundSize: "cover",
                backgroundPosition: "center",
                cursor: "pointer"
              }, flexCenter),
              shadow: _objectSpread({
                background: "radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",
                borderRadius: ICON_SIZE,
                width: ICON_SIZE,
                height: ICON_SIZE,
                position: isElement ? "absolute" : void 0
              }, flexCenter),
              playIcon: {
                borderStyle: "solid",
                borderWidth: "16px 0 16px 26px",
                borderColor: "transparent transparent transparent white",
                marginLeft: "7px"
              }
            };
            const defaultPlayIcon = /* @__PURE__ */import_react.default.createElement("div", {
              style: styles.shadow,
              className: "react-player__shadow"
            }, /* @__PURE__ */import_react.default.createElement("div", {
              style: styles.playIcon,
              className: "react-player__play-icon"
            }));
            return /* @__PURE__ */import_react.default.createElement("div", _objectSpread({
              style: styles.preview,
              className: "react-player__preview",
              onClick,
              tabIndex: previewTabIndex,
              onKeyPress: this.handleKeyPress
            }, previewAriaLabel ? {
              "aria-label": previewAriaLabel
            } : {}), isElement ? light : null, playIcon || defaultPlayIcon);
          }
        }
        const Preview$1 = /*@__PURE__*/getDefaultExportFromCjs(Preview_1);
        const Preview$2 = /*#__PURE__*/_mergeNamespaces({
          __proto__: null,
          default: Preview$1
        }, [Preview_1]);
        exports("P", Preview$2);
      }
    };
  });
})();
//# sourceMappingURL=Preview-legacy-BmDzbpfk.js.map
