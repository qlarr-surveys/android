;
(function () {
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  System.register(['./index-legacy-VHGc_nGn.js', './Web-legacy-fzNrSyYZ.js', './use-service-legacy-uNDfwPef.js'], function (exports, module) {
    'use strict';

    var _extends, capitalize, reactExports, _objectWithoutPropertiesLoose, jsxRuntimeExports, getDefaultExportFromCjs, loadingButtonClasses, getLoadingButtonUtilityClass, CircularProgress, get, set, appendErrors, styled, Button, ButtonGroupContext, resolveProps, useDefaultProps, useId, composeClasses;
    return {
      setters: [module => {
        _extends = module._;
        capitalize = module.h;
        reactExports = module.r;
        _objectWithoutPropertiesLoose = module.b;
        jsxRuntimeExports = module.j;
        getDefaultExportFromCjs = module.w;
      }, module => {
        loadingButtonClasses = module.l;
        getLoadingButtonUtilityClass = module.k;
        CircularProgress = module.m;
        get = module.n;
        set = module.s;
        appendErrors = module.o;
      }, module => {
        styled = module.f;
        Button = module.aD;
        ButtonGroupContext = module.bR;
        resolveProps = module.bS;
        useDefaultProps = module.j;
        useId = module.C;
        composeClasses = module.c;
      }],
      execute: function execute() {
        exports({
          a: create$6,
          b: create$9,
          c: create$3,
          d: addMethod,
          e: create$2,
          o: o
        });
        const _excluded = ["children", "disabled", "id", "loading", "loadingIndicator", "loadingPosition", "variant"];
        const useUtilityClasses = ownerState => {
          const loading = ownerState.loading,
            loadingPosition = ownerState.loadingPosition,
            classes = ownerState.classes;
          const slots = {
            root: ["root", loading && "loading"],
            startIcon: [loading && `startIconLoading${capitalize(loadingPosition)}`],
            endIcon: [loading && `endIconLoading${capitalize(loadingPosition)}`],
            loadingIndicator: ["loadingIndicator", loading && `loadingIndicator${capitalize(loadingPosition)}`]
          };
          const composedClasses = composeClasses(slots, getLoadingButtonUtilityClass, classes);
          return _extends({}, classes, composedClasses);
        };
        const rootShouldForwardProp = prop => prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as" && prop !== "classes";
        const LoadingButtonRoot = styled(Button, {
          shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === "classes",
          name: "MuiLoadingButton",
          slot: "Root",
          overridesResolver: (props, styles) => {
            return [styles.root, styles.startIconLoadingStart && {
              [`& .${loadingButtonClasses.startIconLoadingStart}`]: styles.startIconLoadingStart
            }, styles.endIconLoadingEnd && {
              [`& .${loadingButtonClasses.endIconLoadingEnd}`]: styles.endIconLoadingEnd
            }];
          }
        })(({
          ownerState,
          theme
        }) => _extends({
          [`& .${loadingButtonClasses.startIconLoadingStart}, & .${loadingButtonClasses.endIconLoadingEnd}`]: {
            transition: theme.transitions.create(["opacity"], {
              duration: theme.transitions.duration.short
            }),
            opacity: 0
          }
        }, ownerState.loadingPosition === "center" && {
          transition: theme.transitions.create(["background-color", "box-shadow", "border-color"], {
            duration: theme.transitions.duration.short
          }),
          [`&.${loadingButtonClasses.loading}`]: {
            color: "transparent"
          }
        }, ownerState.loadingPosition === "start" && ownerState.fullWidth && {
          [`& .${loadingButtonClasses.startIconLoadingStart}, & .${loadingButtonClasses.endIconLoadingEnd}`]: {
            transition: theme.transitions.create(["opacity"], {
              duration: theme.transitions.duration.short
            }),
            opacity: 0,
            marginRight: -8
          }
        }, ownerState.loadingPosition === "end" && ownerState.fullWidth && {
          [`& .${loadingButtonClasses.startIconLoadingStart}, & .${loadingButtonClasses.endIconLoadingEnd}`]: {
            transition: theme.transitions.create(["opacity"], {
              duration: theme.transitions.duration.short
            }),
            opacity: 0,
            marginLeft: -8
          }
        }));
        const LoadingButtonLoadingIndicator = styled("span", {
          name: "MuiLoadingButton",
          slot: "LoadingIndicator",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.loadingIndicator, styles[`loadingIndicator${capitalize(ownerState.loadingPosition)}`]];
          }
        })(({
          theme,
          ownerState
        }) => _extends({
          position: "absolute",
          visibility: "visible",
          display: "flex"
        }, ownerState.loadingPosition === "start" && (ownerState.variant === "outlined" || ownerState.variant === "contained") && {
          left: ownerState.size === "small" ? 10 : 14
        }, ownerState.loadingPosition === "start" && ownerState.variant === "text" && {
          left: 6
        }, ownerState.loadingPosition === "center" && {
          left: "50%",
          transform: "translate(-50%)",
          color: (theme.vars || theme).palette.action.disabled
        }, ownerState.loadingPosition === "end" && (ownerState.variant === "outlined" || ownerState.variant === "contained") && {
          right: ownerState.size === "small" ? 10 : 14
        }, ownerState.loadingPosition === "end" && ownerState.variant === "text" && {
          right: 6
        }, ownerState.loadingPosition === "start" && ownerState.fullWidth && {
          position: "relative",
          left: -10
        }, ownerState.loadingPosition === "end" && ownerState.fullWidth && {
          position: "relative",
          right: -10
        }));
        const LoadingButton = exports("L", /* @__PURE__ */reactExports.forwardRef(function LoadingButton2(inProps, ref) {
          const contextProps = reactExports.useContext(ButtonGroupContext);
          const resolvedProps = resolveProps(contextProps, inProps);
          const props = useDefaultProps({
            props: resolvedProps,
            name: "MuiLoadingButton"
          });
          const children = props.children,
            _props$disabled = props.disabled,
            disabled = _props$disabled === void 0 ? false : _props$disabled,
            idProp = props.id,
            _props$loading = props.loading,
            loading = _props$loading === void 0 ? false : _props$loading,
            loadingIndicatorProp = props.loadingIndicator,
            _props$loadingPositio = props.loadingPosition,
            loadingPosition = _props$loadingPositio === void 0 ? "center" : _props$loadingPositio,
            _props$variant = props.variant,
            variant = _props$variant === void 0 ? "text" : _props$variant,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const id = useId(idProp);
          const loadingIndicator = loadingIndicatorProp != null ? loadingIndicatorProp : /* @__PURE__ */jsxRuntimeExports.jsx(CircularProgress, {
            "aria-labelledby": id,
            color: "inherit",
            size: 16
          });
          const ownerState = _extends({}, props, {
            disabled,
            loading,
            loadingIndicator,
            loadingPosition,
            variant
          });
          const classes = useUtilityClasses(ownerState);
          const loadingButtonLoadingIndicator = loading ? /* @__PURE__ */jsxRuntimeExports.jsx(LoadingButtonLoadingIndicator, {
            className: classes.loadingIndicator,
            ownerState,
            children: loadingIndicator
          }) : null;
          return /* @__PURE__ */jsxRuntimeExports.jsxs(LoadingButtonRoot, _extends({
            disabled: disabled || loading,
            id,
            ref
          }, other, {
            variant,
            classes,
            ownerState,
            children: [ownerState.loadingPosition === "end" ? children : loadingButtonLoadingIndicator, ownerState.loadingPosition === "end" ? loadingButtonLoadingIndicator : children]
          }));
        }));

        /**
         * Based on Kendo UI Core expression code <https://github.com/telerik/kendo-ui-core#license-information>
         */

        function Cache(maxSize) {
          this._maxSize = maxSize;
          this.clear();
        }
        Cache.prototype.clear = function () {
          this._size = 0;
          this._values = Object.create(null);
        };
        Cache.prototype.get = function (key) {
          return this._values[key];
        };
        Cache.prototype.set = function (key, value) {
          this._size >= this._maxSize && this.clear();
          if (!(key in this._values)) this._size++;
          return this._values[key] = value;
        };
        var SPLIT_REGEX = /[^.^\]^[]+|(?=\[\]|\.\.)/g,
          DIGIT_REGEX = /^\d+$/,
          LEAD_DIGIT_REGEX = /^\d/,
          SPEC_CHAR_REGEX = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,
          CLEAN_QUOTES_REGEX = /^\s*(['"]?)(.*?)(\1)\s*$/,
          MAX_CACHE_SIZE = 512;
        var pathCache = new Cache(MAX_CACHE_SIZE),
          setCache = new Cache(MAX_CACHE_SIZE),
          getCache = new Cache(MAX_CACHE_SIZE);
        var propertyExpr = {
          Cache: Cache,
          split: split,
          normalizePath: normalizePath,
          setter: function setter(path) {
            var parts = normalizePath(path);
            return setCache.get(path) || setCache.set(path, function setter(obj, value) {
              var index = 0;
              var len = parts.length;
              var data = obj;
              while (index < len - 1) {
                var part = parts[index];
                if (part === '__proto__' || part === 'constructor' || part === 'prototype') {
                  return obj;
                }
                data = data[parts[index++]];
              }
              data[parts[index]] = value;
            });
          },
          getter: function getter(path, safe) {
            var parts = normalizePath(path);
            return getCache.get(path) || getCache.set(path, function getter(data) {
              var index = 0,
                len = parts.length;
              while (index < len) {
                if (data != null || !safe) data = data[parts[index++]];else return;
              }
              return data;
            });
          },
          join: function join(segments) {
            return segments.reduce(function (path, part) {
              return path + (isQuoted(part) || DIGIT_REGEX.test(part) ? '[' + part + ']' : (path ? '.' : '') + part);
            }, '');
          },
          forEach: function forEach(path, cb, thisArg) {
            _forEach(Array.isArray(path) ? path : split(path), cb, thisArg);
          }
        };
        function normalizePath(path) {
          return pathCache.get(path) || pathCache.set(path, split(path).map(function (part) {
            return part.replace(CLEAN_QUOTES_REGEX, '$2');
          }));
        }
        function split(path) {
          return path.match(SPLIT_REGEX) || [''];
        }
        function _forEach(parts, iter, thisArg) {
          var len = parts.length,
            part,
            idx,
            isArray,
            isBracket;
          for (idx = 0; idx < len; idx++) {
            part = parts[idx];
            if (part) {
              if (shouldBeQuoted(part)) {
                part = '"' + part + '"';
              }
              isBracket = isQuoted(part);
              isArray = !isBracket && /^\d+$/.test(part);
              iter.call(thisArg, part, isBracket, isArray, idx, parts);
            }
          }
        }
        function isQuoted(str) {
          return typeof str === 'string' && str && ["'", '"'].indexOf(str.charAt(0)) !== -1;
        }
        function hasLeadingNumber(part) {
          return part.match(LEAD_DIGIT_REGEX) && !part.match(DIGIT_REGEX);
        }
        function hasSpecialChars(part) {
          return SPEC_CHAR_REGEX.test(part);
        }
        function shouldBeQuoted(part) {
          return !isQuoted(part) && (hasLeadingNumber(part) || hasSpecialChars(part));
        }
        const reWords = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g;
        const words = str => str.match(reWords) || [];
        const upperFirst = str => str[0].toUpperCase() + str.slice(1);
        const join = (str, d) => words(str).join(d).toLowerCase();
        const camelCase = str => words(str).reduce((acc, next) => `${acc}${!acc ? next.toLowerCase() : next[0].toUpperCase() + next.slice(1).toLowerCase()}`, '');
        const pascalCase = str => upperFirst(camelCase(str));
        const snakeCase = str => join(str, '_');
        const kebabCase = str => join(str, '-');
        const sentenceCase = str => upperFirst(join(str, ' '));
        const titleCase = str => words(str).map(upperFirst).join(' ');
        var tinyCase = {
          words,
          upperFirst,
          camelCase,
          pascalCase,
          snakeCase,
          kebabCase,
          sentenceCase,
          titleCase
        };
        var toposort$2 = {
          exports: {}
        };

        /**
         * Topological sorting function
         *
         * @param {Array} edges
         * @returns {Array}
         */

        toposort$2.exports = function (edges) {
          return toposort(uniqueNodes(edges), edges);
        };
        toposort$2.exports.array = toposort;
        function toposort(nodes, edges) {
          var cursor = nodes.length,
            sorted = new Array(cursor),
            visited = {},
            i = cursor
            // Better data structures make algorithm much faster.
            ,
            outgoingEdges = makeOutgoingEdges(edges),
            nodesHash = makeNodesHash(nodes);

          // check for unknown nodes
          edges.forEach(function (edge) {
            if (!nodesHash.has(edge[0]) || !nodesHash.has(edge[1])) {
              throw new Error('Unknown node. There is an unknown node in the supplied edges.');
            }
          });
          while (i--) {
            if (!visited[i]) visit(nodes[i], i, new Set());
          }
          return sorted;
          function visit(node, i, predecessors) {
            if (predecessors.has(node)) {
              var nodeRep;
              try {
                nodeRep = ", node was:" + JSON.stringify(node);
              } catch (e) {
                nodeRep = "";
              }
              throw new Error('Cyclic dependency' + nodeRep);
            }
            if (!nodesHash.has(node)) {
              throw new Error('Found unknown node. Make sure to provided all involved nodes. Unknown node: ' + JSON.stringify(node));
            }
            if (visited[i]) return;
            visited[i] = true;
            var outgoing = outgoingEdges.get(node) || new Set();
            outgoing = Array.from(outgoing);
            if (i = outgoing.length) {
              predecessors.add(node);
              do {
                var child = outgoing[--i];
                visit(child, nodesHash.get(child), predecessors);
              } while (i);
              predecessors.delete(node);
            }
            sorted[--cursor] = node;
          }
        }
        function uniqueNodes(arr) {
          var res = new Set();
          for (var i = 0, len = arr.length; i < len; i++) {
            var edge = arr[i];
            res.add(edge[0]);
            res.add(edge[1]);
          }
          return Array.from(res);
        }
        function makeOutgoingEdges(arr) {
          var edges = new Map();
          for (var i = 0, len = arr.length; i < len; i++) {
            var edge = arr[i];
            if (!edges.has(edge[0])) edges.set(edge[0], new Set());
            if (!edges.has(edge[1])) edges.set(edge[1], new Set());
            edges.get(edge[0]).add(edge[1]);
          }
          return edges;
        }
        function makeNodesHash(arr) {
          var res = new Map();
          for (var i = 0, len = arr.length; i < len; i++) {
            res.set(arr[i], i);
          }
          return res;
        }
        var toposortExports = toposort$2.exports;
        const toposort$1 = /*@__PURE__*/getDefaultExportFromCjs(toposortExports);
        const toString = Object.prototype.toString;
        const errorToString = Error.prototype.toString;
        const regExpToString = RegExp.prototype.toString;
        const symbolToString = typeof Symbol !== 'undefined' ? Symbol.prototype.toString : () => '';
        const SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
        function printNumber(val) {
          if (val != +val) return 'NaN';
          const isNegativeZero = val === 0 && 1 / val < 0;
          return isNegativeZero ? '-0' : '' + val;
        }
        function printSimpleValue(val, quoteStrings = false) {
          if (val == null || val === true || val === false) return '' + val;
          const typeOf = typeof val;
          if (typeOf === 'number') return printNumber(val);
          if (typeOf === 'string') return quoteStrings ? `"${val}"` : val;
          if (typeOf === 'function') return '[Function ' + (val.name || 'anonymous') + ']';
          if (typeOf === 'symbol') return symbolToString.call(val).replace(SYMBOL_REGEXP, 'Symbol($1)');
          const tag = toString.call(val).slice(8, -1);
          if (tag === 'Date') return isNaN(val.getTime()) ? '' + val : val.toISOString(val);
          if (tag === 'Error' || val instanceof Error) return '[' + errorToString.call(val) + ']';
          if (tag === 'RegExp') return regExpToString.call(val);
          return null;
        }
        function printValue(value, quoteStrings) {
          let result = printSimpleValue(value, quoteStrings);
          if (result !== null) return result;
          return JSON.stringify(value, function (key, value) {
            let result = printSimpleValue(this[key], quoteStrings);
            if (result !== null) return result;
            return value;
          }, 2);
        }
        function toArray(value) {
          return value == null ? [] : [].concat(value);
        }
        let _Symbol$toStringTag, _Symbol$hasInstance, _Symbol$toStringTag2;
        let strReg = /\$\{\s*(\w+)\s*\}/g;
        _Symbol$toStringTag = Symbol.toStringTag;
        class ValidationErrorNoStack {
          constructor(errorOrErrors, value, field, type) {
            this.name = void 0;
            this.message = void 0;
            this.value = void 0;
            this.path = void 0;
            this.type = void 0;
            this.params = void 0;
            this.errors = void 0;
            this.inner = void 0;
            this[_Symbol$toStringTag] = 'Error';
            this.name = 'ValidationError';
            this.value = value;
            this.path = field;
            this.type = type;
            this.errors = [];
            this.inner = [];
            toArray(errorOrErrors).forEach(err => {
              if (ValidationError.isError(err)) {
                this.errors.push(...err.errors);
                const innerErrors = err.inner.length ? err.inner : [err];
                this.inner.push(...innerErrors);
              } else {
                this.errors.push(err);
              }
            });
            this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
          }
        }
        _Symbol$hasInstance = Symbol.hasInstance;
        _Symbol$toStringTag2 = Symbol.toStringTag;
        class ValidationError extends Error {
          static formatError(message, params) {
            const path = params.label || params.path || 'this';
            if (path !== params.path) params = Object.assign({}, params, {
              path
            });
            if (typeof message === 'string') return message.replace(strReg, (_, key) => printValue(params[key]));
            if (typeof message === 'function') return message(params);
            return message;
          }
          static isError(err) {
            return err && err.name === 'ValidationError';
          }
          constructor(errorOrErrors, value, field, type, disableStack) {
            const errorNoStack = new ValidationErrorNoStack(errorOrErrors, value, field, type);
            if (disableStack) {
              return errorNoStack;
            }
            super();
            this.value = void 0;
            this.path = void 0;
            this.type = void 0;
            this.params = void 0;
            this.errors = [];
            this.inner = [];
            this[_Symbol$toStringTag2] = 'Error';
            this.name = errorNoStack.name;
            this.message = errorNoStack.message;
            this.type = errorNoStack.type;
            this.value = errorNoStack.value;
            this.path = errorNoStack.path;
            this.errors = errorNoStack.errors;
            this.inner = errorNoStack.inner;
            if (Error.captureStackTrace) {
              Error.captureStackTrace(this, ValidationError);
            }
          }
          static [_Symbol$hasInstance](inst) {
            return ValidationErrorNoStack[Symbol.hasInstance](inst) || super[Symbol.hasInstance](inst);
          }
        }
        let mixed = {
          default: '${path} is invalid',
          required: '${path} is a required field',
          defined: '${path} must be defined',
          notNull: '${path} cannot be null',
          oneOf: '${path} must be one of the following values: ${values}',
          notOneOf: '${path} must not be one of the following values: ${values}',
          notType: ({
            path,
            type,
            value,
            originalValue
          }) => {
            const castMsg = originalValue != null && originalValue !== value ? ` (cast from the value \`${printValue(originalValue, true)}\`).` : '.';
            return type !== 'mixed' ? `${path} must be a \`${type}\` type, ` + `but the final value was: \`${printValue(value, true)}\`` + castMsg : `${path} must match the configured type. ` + `The validated value was: \`${printValue(value, true)}\`` + castMsg;
          }
        };
        let string = {
          length: '${path} must be exactly ${length} characters',
          min: '${path} must be at least ${min} characters',
          max: '${path} must be at most ${max} characters',
          matches: '${path} must match the following: "${regex}"',
          email: '${path} must be a valid email',
          url: '${path} must be a valid URL',
          uuid: '${path} must be a valid UUID',
          datetime: '${path} must be a valid ISO date-time',
          datetime_precision: '${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits',
          datetime_offset: '${path} must be a valid ISO date-time with UTC "Z" timezone',
          trim: '${path} must be a trimmed string',
          lowercase: '${path} must be a lowercase string',
          uppercase: '${path} must be a upper case string'
        };
        let number = {
          min: '${path} must be greater than or equal to ${min}',
          max: '${path} must be less than or equal to ${max}',
          lessThan: '${path} must be less than ${less}',
          moreThan: '${path} must be greater than ${more}',
          positive: '${path} must be a positive number',
          negative: '${path} must be a negative number',
          integer: '${path} must be an integer'
        };
        let date = {
          min: '${path} field must be later than ${min}',
          max: '${path} field must be at earlier than ${max}'
        };
        let boolean = {
          isValue: '${path} field must be ${value}'
        };
        let object = {
          noUnknown: '${path} field has unspecified keys: ${unknown}'
        };
        let array = {
          min: '${path} field must have at least ${min} items',
          max: '${path} field must have less than or equal to ${max} items',
          length: '${path} must have ${length} items'
        };
        let tuple = {
          notType: params => {
            const path = params.path,
              value = params.value,
              spec = params.spec;
            const typeLen = spec.types.length;
            if (Array.isArray(value)) {
              if (value.length < typeLen) return `${path} tuple value has too few items, expected a length of ${typeLen} but got ${value.length} for value: \`${printValue(value, true)}\``;
              if (value.length > typeLen) return `${path} tuple value has too many items, expected a length of ${typeLen} but got ${value.length} for value: \`${printValue(value, true)}\``;
            }
            return ValidationError.formatError(mixed.notType, params);
          }
        };
        Object.assign(Object.create(null), {
          mixed,
          string,
          number,
          date,
          object,
          array,
          boolean,
          tuple
        });
        const isSchema = obj => obj && obj.__isYupSchema__;
        class Condition {
          static fromOptions(refs, config) {
            if (!config.then && !config.otherwise) throw new TypeError('either `then:` or `otherwise:` is required for `when()` conditions');
            let is = config.is,
              then = config.then,
              otherwise = config.otherwise;
            let check = typeof is === 'function' ? is : (...values) => values.every(value => value === is);
            return new Condition(refs, (values, schema) => {
              var _branch;
              let branch = check(...values) ? then : otherwise;
              return (_branch = branch == null ? void 0 : branch(schema)) != null ? _branch : schema;
            });
          }
          constructor(refs, builder) {
            this.fn = void 0;
            this.refs = refs;
            this.refs = refs;
            this.fn = builder;
          }
          resolve(base, options) {
            let values = this.refs.map(ref =>
            // TODO: ? operator here?
            ref.getValue(options == null ? void 0 : options.value, options == null ? void 0 : options.parent, options == null ? void 0 : options.context));
            let schema = this.fn(values, base, options);
            if (schema === undefined ||
            // @ts-ignore this can be base
            schema === base) {
              return base;
            }
            if (!isSchema(schema)) throw new TypeError('conditions must return a schema object');
            return schema.resolve(options);
          }
        }
        const prefixes = {
          context: '$',
          value: '.'
        };
        function create$9(key, options) {
          return new Reference(key, options);
        }
        class Reference {
          constructor(key, options = {}) {
            this.key = void 0;
            this.isContext = void 0;
            this.isValue = void 0;
            this.isSibling = void 0;
            this.path = void 0;
            this.getter = void 0;
            this.map = void 0;
            if (typeof key !== 'string') throw new TypeError('ref must be a string, got: ' + key);
            this.key = key.trim();
            if (key === '') throw new TypeError('ref must be a non-empty string');
            this.isContext = this.key[0] === prefixes.context;
            this.isValue = this.key[0] === prefixes.value;
            this.isSibling = !this.isContext && !this.isValue;
            let prefix = this.isContext ? prefixes.context : this.isValue ? prefixes.value : '';
            this.path = this.key.slice(prefix.length);
            this.getter = this.path && propertyExpr.getter(this.path, true);
            this.map = options.map;
          }
          getValue(value, parent, context) {
            let result = this.isContext ? context : this.isValue ? value : parent;
            if (this.getter) result = this.getter(result || {});
            if (this.map) result = this.map(result);
            return result;
          }

          /**
           *
           * @param {*} value
           * @param {Object} options
           * @param {Object=} options.context
           * @param {Object=} options.parent
           */
          cast(value, options) {
            return this.getValue(value, options == null ? void 0 : options.parent, options == null ? void 0 : options.context);
          }
          resolve() {
            return this;
          }
          describe() {
            return {
              type: 'ref',
              key: this.key
            };
          }
          toString() {
            return `Ref(${this.key})`;
          }
          static isRef(value) {
            return value && value.__isYupRef;
          }
        }

        // @ts-ignore
        Reference.prototype.__isYupRef = true;
        const isAbsent = value => value == null;
        function createValidation(config) {
          function validate({
            value,
            path = '',
            options,
            originalValue,
            schema
          }, panic, next) {
            const name = config.name,
              test = config.test,
              params = config.params,
              message = config.message,
              skipAbsent = config.skipAbsent;
            let parent = options.parent,
              context = options.context,
              _options$abortEarly2 = options.abortEarly,
              abortEarly = _options$abortEarly2 === void 0 ? schema.spec.abortEarly : _options$abortEarly2,
              _options$disableStack4 = options.disableStackTrace,
              disableStackTrace = _options$disableStack4 === void 0 ? schema.spec.disableStackTrace : _options$disableStack4;
            function resolve(item) {
              return Reference.isRef(item) ? item.getValue(value, parent, context) : item;
            }
            function createError(overrides = {}) {
              const nextParams = Object.assign({
                value,
                originalValue,
                label: schema.spec.label,
                path: overrides.path || path,
                spec: schema.spec,
                disableStackTrace: overrides.disableStackTrace || disableStackTrace
              }, params, overrides.params);
              for (var _i = 0, _Object$keys = Object.keys(nextParams); _i < _Object$keys.length; _i++) {
                const key = _Object$keys[_i];
                nextParams[key] = resolve(nextParams[key]);
              }
              const error = new ValidationError(ValidationError.formatError(overrides.message || message, nextParams), value, nextParams.path, overrides.type || name, nextParams.disableStackTrace);
              error.params = nextParams;
              return error;
            }
            const invalid = abortEarly ? panic : next;
            let ctx = {
              path,
              parent,
              type: name,
              from: options.from,
              createError,
              resolve,
              options,
              originalValue,
              schema
            };
            const handleResult = validOrError => {
              if (ValidationError.isError(validOrError)) invalid(validOrError);else if (!validOrError) invalid(createError());else next(null);
            };
            const handleError = err => {
              if (ValidationError.isError(err)) invalid(err);else panic(err);
            };
            const shouldSkip = skipAbsent && isAbsent(value);
            if (shouldSkip) {
              return handleResult(true);
            }
            let result;
            try {
              var _result;
              result = test.call(ctx, value, ctx);
              if (typeof ((_result = result) == null ? void 0 : _result.then) === 'function') {
                if (options.sync) {
                  throw new Error(`Validation test of type: "${ctx.type}" returned a Promise during a synchronous validate. ` + `This test will finish after the validate call has returned`);
                }
                return Promise.resolve(result).then(handleResult, handleError);
              }
            } catch (err) {
              handleError(err);
              return;
            }
            handleResult(result);
          }
          validate.OPTIONS = config;
          return validate;
        }
        function getIn(schema, path, value, context = value) {
          let parent, lastPart, lastPartDebug;

          // root path: ''
          if (!path) return {
            parent,
            parentPath: path,
            schema
          };
          propertyExpr.forEach(path, (_part, isBracket, isArray) => {
            let part = isBracket ? _part.slice(1, _part.length - 1) : _part;
            schema = schema.resolve({
              context,
              parent,
              value
            });
            let isTuple = schema.type === 'tuple';
            let idx = isArray ? parseInt(part, 10) : 0;
            if (schema.innerType || isTuple) {
              if (isTuple && !isArray) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${lastPartDebug}" must contain an index to the tuple element, e.g. "${lastPartDebug}[0]"`);
              if (value && idx >= value.length) {
                throw new Error(`Yup.reach cannot resolve an array item at index: ${_part}, in the path: ${path}. ` + `because there is no value at that index. `);
              }
              parent = value;
              value = value && value[idx];
              schema = isTuple ? schema.spec.types[idx] : schema.innerType;
            }

            // sometimes the array index part of a path doesn't exist: "nested.arr.child"
            // in these cases the current part is the next schema and should be processed
            // in this iteration. For cases where the index signature is included this
            // check will fail and we'll handle the `child` part on the next iteration like normal
            if (!isArray) {
              if (!schema.fields || !schema.fields[part]) throw new Error(`The schema does not contain the path: ${path}. ` + `(failed at: ${lastPartDebug} which is a type: "${schema.type}")`);
              parent = value;
              value = value && value[part];
              schema = schema.fields[part];
            }
            lastPart = part;
            lastPartDebug = isBracket ? '[' + _part + ']' : '.' + _part;
          });
          return {
            schema,
            parent,
            parentPath: lastPart
          };
        }
        class ReferenceSet extends Set {
          describe() {
            const description = [];
            var _iterator = _createForOfIteratorHelper(this.values()),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                const item = _step.value;
                description.push(Reference.isRef(item) ? item.describe() : item);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            return description;
          }
          resolveAll(resolve) {
            let result = [];
            var _iterator2 = _createForOfIteratorHelper(this.values()),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                const item = _step2.value;
                result.push(resolve(item));
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            return result;
          }
          clone() {
            return new ReferenceSet(this.values());
          }
          merge(newItems, removeItems) {
            const next = this.clone();
            newItems.forEach(value => next.add(value));
            removeItems.forEach(value => next.delete(value));
            return next;
          }
        }

        // tweaked from https://github.com/Kelin2025/nanoclone/blob/0abeb7635bda9b68ef2277093f76dbe3bf3948e1/src/index.js
        function clone(src, seen = new Map()) {
          if (isSchema(src) || !src || typeof src !== 'object') return src;
          if (seen.has(src)) return seen.get(src);
          let copy;
          if (src instanceof Date) {
            // Date
            copy = new Date(src.getTime());
            seen.set(src, copy);
          } else if (src instanceof RegExp) {
            // RegExp
            copy = new RegExp(src);
            seen.set(src, copy);
          } else if (Array.isArray(src)) {
            // Array
            copy = new Array(src.length);
            seen.set(src, copy);
            for (let i = 0; i < src.length; i++) copy[i] = clone(src[i], seen);
          } else if (src instanceof Map) {
            // Map
            copy = new Map();
            seen.set(src, copy);
            var _iterator3 = _createForOfIteratorHelper(src.entries()),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                const _step3$value = _slicedToArray(_step3.value, 2),
                  k = _step3$value[0],
                  v = _step3$value[1];
                copy.set(k, clone(v, seen));
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          } else if (src instanceof Set) {
            // Set
            copy = new Set();
            seen.set(src, copy);
            var _iterator4 = _createForOfIteratorHelper(src),
              _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                const v = _step4.value;
                copy.add(clone(v, seen));
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          } else if (src instanceof Object) {
            // Object
            copy = {};
            seen.set(src, copy);
            for (var _i2 = 0, _Object$entries = Object.entries(src); _i2 < _Object$entries.length; _i2++) {
              const _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
                k = _Object$entries$_i[0],
                v = _Object$entries$_i[1];
              copy[k] = clone(v, seen);
            }
          } else {
            throw Error(`Unable to clone ${src}`);
          }
          return copy;
        }

        // If `CustomSchemaMeta` isn't extended with any keys, we'll fall back to a
        // loose Record definition allowing free form usage.
        class Schema {
          constructor(options) {
            this.type = void 0;
            this.deps = [];
            this.tests = void 0;
            this.transforms = void 0;
            this.conditions = [];
            this._mutate = void 0;
            this.internalTests = {};
            this._whitelist = new ReferenceSet();
            this._blacklist = new ReferenceSet();
            this.exclusiveTests = Object.create(null);
            this._typeCheck = void 0;
            this.spec = void 0;
            this.tests = [];
            this.transforms = [];
            this.withMutation(() => {
              this.typeError(mixed.notType);
            });
            this.type = options.type;
            this._typeCheck = options.check;
            this.spec = Object.assign({
              strip: false,
              strict: false,
              abortEarly: true,
              recursive: true,
              disableStackTrace: false,
              nullable: false,
              optional: true,
              coerce: true
            }, options == null ? void 0 : options.spec);
            this.withMutation(s => {
              s.nonNullable();
            });
          }

          // TODO: remove
          get _type() {
            return this.type;
          }
          clone(spec) {
            if (this._mutate) {
              if (spec) Object.assign(this.spec, spec);
              return this;
            }

            // if the nested value is a schema we can skip cloning, since
            // they are already immutable
            const next = Object.create(Object.getPrototypeOf(this));

            // @ts-expect-error this is readonly
            next.type = this.type;
            next._typeCheck = this._typeCheck;
            next._whitelist = this._whitelist.clone();
            next._blacklist = this._blacklist.clone();
            next.internalTests = Object.assign({}, this.internalTests);
            next.exclusiveTests = Object.assign({}, this.exclusiveTests);

            // @ts-expect-error this is readonly
            next.deps = [...this.deps];
            next.conditions = [...this.conditions];
            next.tests = [...this.tests];
            next.transforms = [...this.transforms];
            next.spec = clone(Object.assign({}, this.spec, spec));
            return next;
          }
          label(label) {
            let next = this.clone();
            next.spec.label = label;
            return next;
          }
          meta(...args) {
            if (args.length === 0) return this.spec.meta;
            let next = this.clone();
            next.spec.meta = Object.assign(next.spec.meta || {}, args[0]);
            return next;
          }
          withMutation(fn) {
            let before = this._mutate;
            this._mutate = true;
            let result = fn(this);
            this._mutate = before;
            return result;
          }
          concat(schema) {
            if (!schema || schema === this) return this;
            if (schema.type !== this.type && this.type !== 'mixed') throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${schema.type}`);
            let base = this;
            let combined = schema.clone();
            const mergedSpec = Object.assign({}, base.spec, combined.spec);
            combined.spec = mergedSpec;
            combined.internalTests = Object.assign({}, base.internalTests, combined.internalTests);

            // manually merge the blacklist/whitelist (the other `schema` takes
            // precedence in case of conflicts)
            combined._whitelist = base._whitelist.merge(schema._whitelist, schema._blacklist);
            combined._blacklist = base._blacklist.merge(schema._blacklist, schema._whitelist);

            // start with the current tests
            combined.tests = base.tests;
            combined.exclusiveTests = base.exclusiveTests;

            // manually add the new tests to ensure
            // the deduping logic is consistent
            combined.withMutation(next => {
              schema.tests.forEach(fn => {
                next.test(fn.OPTIONS);
              });
            });
            combined.transforms = [...base.transforms, ...combined.transforms];
            return combined;
          }
          isType(v) {
            if (v == null) {
              if (this.spec.nullable && v === null) return true;
              if (this.spec.optional && v === undefined) return true;
              return false;
            }
            return this._typeCheck(v);
          }
          resolve(options) {
            let schema = this;
            if (schema.conditions.length) {
              let conditions = schema.conditions;
              schema = schema.clone();
              schema.conditions = [];
              schema = conditions.reduce((prevSchema, condition) => condition.resolve(prevSchema, options), schema);
              schema = schema.resolve(options);
            }
            return schema;
          }
          resolveOptions(options) {
            var _options$strict, _options$abortEarly, _options$recursive, _options$disableStack;
            return Object.assign({}, options, {
              from: options.from || [],
              strict: (_options$strict = options.strict) != null ? _options$strict : this.spec.strict,
              abortEarly: (_options$abortEarly = options.abortEarly) != null ? _options$abortEarly : this.spec.abortEarly,
              recursive: (_options$recursive = options.recursive) != null ? _options$recursive : this.spec.recursive,
              disableStackTrace: (_options$disableStack = options.disableStackTrace) != null ? _options$disableStack : this.spec.disableStackTrace
            });
          }

          /**
           * Run the configured transform pipeline over an input value.
           */

          cast(value, options = {}) {
            let resolvedSchema = this.resolve(Object.assign({
              value
            }, options));
            let allowOptionality = options.assert === 'ignore-optionality';
            let result = resolvedSchema._cast(value, options);
            if (options.assert !== false && !resolvedSchema.isType(result)) {
              if (allowOptionality && isAbsent(result)) {
                return result;
              }
              let formattedValue = printValue(value);
              let formattedResult = printValue(result);
              throw new TypeError(`The value of ${options.path || 'field'} could not be cast to a value ` + `that satisfies the schema type: "${resolvedSchema.type}". \n\n` + `attempted value: ${formattedValue} \n` + (formattedResult !== formattedValue ? `result of cast: ${formattedResult}` : ''));
            }
            return result;
          }
          _cast(rawValue, options) {
            let value = rawValue === undefined ? rawValue : this.transforms.reduce((prevValue, fn) => fn.call(this, prevValue, rawValue, this), rawValue);
            if (value === undefined) {
              value = this.getDefault(options);
            }
            return value;
          }
          _validate(_value, options = {}, panic, next) {
            let path = options.path,
              _options$originalValu3 = options.originalValue,
              originalValue = _options$originalValu3 === void 0 ? _value : _options$originalValu3,
              _options$strict2 = options.strict,
              strict = _options$strict2 === void 0 ? this.spec.strict : _options$strict2;
            let value = _value;
            if (!strict) {
              value = this._cast(value, Object.assign({
                assert: false
              }, options));
            }
            let initialTests = [];
            for (var _i3 = 0, _Object$values = Object.values(this.internalTests); _i3 < _Object$values.length; _i3++) {
              let test = _Object$values[_i3];
              if (test) initialTests.push(test);
            }
            this.runTests({
              path,
              value,
              originalValue,
              options,
              tests: initialTests
            }, panic, initialErrors => {
              // even if we aren't ending early we can't proceed further if the types aren't correct
              if (initialErrors.length) {
                return next(initialErrors, value);
              }
              this.runTests({
                path,
                value,
                originalValue,
                options,
                tests: this.tests
              }, panic, next);
            });
          }

          /**
           * Executes a set of validations, either schema, produced Tests or a nested
           * schema validate result.
           */
          runTests(runOptions, panic, next) {
            let fired = false;
            let tests = runOptions.tests,
              value = runOptions.value,
              originalValue = runOptions.originalValue,
              path = runOptions.path,
              options = runOptions.options;
            let panicOnce = arg => {
              if (fired) return;
              fired = true;
              panic(arg, value);
            };
            let nextOnce = arg => {
              if (fired) return;
              fired = true;
              next(arg, value);
            };
            let count = tests.length;
            let nestedErrors = [];
            if (!count) return nextOnce([]);
            let args = {
              value,
              originalValue,
              path,
              options,
              schema: this
            };
            for (let i = 0; i < tests.length; i++) {
              const test = tests[i];
              test(args, panicOnce, function finishTestRun(err) {
                if (err) {
                  Array.isArray(err) ? nestedErrors.push(...err) : nestedErrors.push(err);
                }
                if (--count <= 0) {
                  nextOnce(nestedErrors);
                }
              });
            }
          }
          asNestedTest({
            key,
            index,
            parent,
            parentPath,
            originalParent,
            options
          }) {
            const k = key != null ? key : index;
            if (k == null) {
              throw TypeError('Must include `key` or `index` for nested validations');
            }
            const isIndex = typeof k === 'number';
            let value = parent[k];
            const testOptions = Object.assign({}, options, {
              // Nested validations fields are always strict:
              //    1. parent isn't strict so the casting will also have cast inner values
              //    2. parent is strict in which case the nested values weren't cast either
              strict: true,
              parent,
              value,
              originalValue: originalParent[k],
              // FIXME: tests depend on `index` being passed around deeply,
              //   we should not let the options.key/index bleed through
              key: undefined,
              // index: undefined,
              [isIndex ? 'index' : 'key']: k,
              path: isIndex || k.includes('.') ? `${parentPath || ''}[${isIndex ? k : `"${k}"`}]` : (parentPath ? `${parentPath}.` : '') + key
            });
            return (_, panic, next) => this.resolve(testOptions)._validate(value, testOptions, panic, next);
          }
          validate(value, options) {
            var _options$disableStack2;
            let schema = this.resolve(Object.assign({}, options, {
              value
            }));
            let disableStackTrace = (_options$disableStack2 = options == null ? void 0 : options.disableStackTrace) != null ? _options$disableStack2 : schema.spec.disableStackTrace;
            return new Promise((resolve, reject) => schema._validate(value, options, (error, parsed) => {
              if (ValidationError.isError(error)) error.value = parsed;
              reject(error);
            }, (errors, validated) => {
              if (errors.length) reject(new ValidationError(errors, validated, undefined, undefined, disableStackTrace));else resolve(validated);
            }));
          }
          validateSync(value, options) {
            var _options$disableStack3;
            let schema = this.resolve(Object.assign({}, options, {
              value
            }));
            let result;
            let disableStackTrace = (_options$disableStack3 = options == null ? void 0 : options.disableStackTrace) != null ? _options$disableStack3 : schema.spec.disableStackTrace;
            schema._validate(value, Object.assign({}, options, {
              sync: true
            }), (error, parsed) => {
              if (ValidationError.isError(error)) error.value = parsed;
              throw error;
            }, (errors, validated) => {
              if (errors.length) throw new ValidationError(errors, value, undefined, undefined, disableStackTrace);
              result = validated;
            });
            return result;
          }
          isValid(value, options) {
            return this.validate(value, options).then(() => true, err => {
              if (ValidationError.isError(err)) return false;
              throw err;
            });
          }
          isValidSync(value, options) {
            try {
              this.validateSync(value, options);
              return true;
            } catch (err) {
              if (ValidationError.isError(err)) return false;
              throw err;
            }
          }
          _getDefault(options) {
            let defaultValue = this.spec.default;
            if (defaultValue == null) {
              return defaultValue;
            }
            return typeof defaultValue === 'function' ? defaultValue.call(this, options) : clone(defaultValue);
          }
          getDefault(options
          // If schema is defaulted we know it's at least not undefined
          ) {
            let schema = this.resolve(options || {});
            return schema._getDefault(options);
          }
          default(def) {
            if (arguments.length === 0) {
              return this._getDefault();
            }
            let next = this.clone({
              default: def
            });
            return next;
          }
          strict(isStrict = true) {
            return this.clone({
              strict: isStrict
            });
          }
          nullability(nullable, message) {
            const next = this.clone({
              nullable
            });
            next.internalTests.nullable = createValidation({
              message,
              name: 'nullable',
              test(value) {
                return value === null ? this.schema.spec.nullable : true;
              }
            });
            return next;
          }
          optionality(optional, message) {
            const next = this.clone({
              optional
            });
            next.internalTests.optionality = createValidation({
              message,
              name: 'optionality',
              test(value) {
                return value === undefined ? this.schema.spec.optional : true;
              }
            });
            return next;
          }
          optional() {
            return this.optionality(true);
          }
          defined(message = mixed.defined) {
            return this.optionality(false, message);
          }
          nullable() {
            return this.nullability(true);
          }
          nonNullable(message = mixed.notNull) {
            return this.nullability(false, message);
          }
          required(message = mixed.required) {
            return this.clone().withMutation(next => next.nonNullable(message).defined(message));
          }
          notRequired() {
            return this.clone().withMutation(next => next.nullable().optional());
          }
          transform(fn) {
            let next = this.clone();
            next.transforms.push(fn);
            return next;
          }

          /**
           * Adds a test function to the schema's queue of tests.
           * tests can be exclusive or non-exclusive.
           *
           * - exclusive tests, will replace any existing tests of the same name.
           * - non-exclusive: can be stacked
           *
           * If a non-exclusive test is added to a schema with an exclusive test of the same name
           * the exclusive test is removed and further tests of the same name will be stacked.
           *
           * If an exclusive test is added to a schema with non-exclusive tests of the same name
           * the previous tests are removed and further tests of the same name will replace each other.
           */

          test(...args) {
            let opts;
            if (args.length === 1) {
              if (typeof args[0] === 'function') {
                opts = {
                  test: args[0]
                };
              } else {
                opts = args[0];
              }
            } else if (args.length === 2) {
              opts = {
                name: args[0],
                test: args[1]
              };
            } else {
              opts = {
                name: args[0],
                message: args[1],
                test: args[2]
              };
            }
            if (opts.message === undefined) opts.message = mixed.default;
            if (typeof opts.test !== 'function') throw new TypeError('`test` is a required parameters');
            let next = this.clone();
            let validate = createValidation(opts);
            let isExclusive = opts.exclusive || opts.name && next.exclusiveTests[opts.name] === true;
            if (opts.exclusive) {
              if (!opts.name) throw new TypeError('Exclusive tests must provide a unique `name` identifying the test');
            }
            if (opts.name) next.exclusiveTests[opts.name] = !!opts.exclusive;
            next.tests = next.tests.filter(fn => {
              if (fn.OPTIONS.name === opts.name) {
                if (isExclusive) return false;
                if (fn.OPTIONS.test === validate.OPTIONS.test) return false;
              }
              return true;
            });
            next.tests.push(validate);
            return next;
          }
          when(keys, options) {
            if (!Array.isArray(keys) && typeof keys !== 'string') {
              options = keys;
              keys = '.';
            }
            let next = this.clone();
            let deps = toArray(keys).map(key => new Reference(key));
            deps.forEach(dep => {
              // @ts-ignore readonly array
              if (dep.isSibling) next.deps.push(dep.key);
            });
            next.conditions.push(typeof options === 'function' ? new Condition(deps, options) : Condition.fromOptions(deps, options));
            return next;
          }
          typeError(message) {
            let next = this.clone();
            next.internalTests.typeError = createValidation({
              message,
              name: 'typeError',
              skipAbsent: true,
              test(value) {
                if (!this.schema._typeCheck(value)) return this.createError({
                  params: {
                    type: this.schema.type
                  }
                });
                return true;
              }
            });
            return next;
          }
          oneOf(enums, message = mixed.oneOf) {
            let next = this.clone();
            enums.forEach(val => {
              next._whitelist.add(val);
              next._blacklist.delete(val);
            });
            next.internalTests.whiteList = createValidation({
              message,
              name: 'oneOf',
              skipAbsent: true,
              test(value) {
                let valids = this.schema._whitelist;
                let resolved = valids.resolveAll(this.resolve);
                return resolved.includes(value) ? true : this.createError({
                  params: {
                    values: Array.from(valids).join(', '),
                    resolved
                  }
                });
              }
            });
            return next;
          }
          notOneOf(enums, message = mixed.notOneOf) {
            let next = this.clone();
            enums.forEach(val => {
              next._blacklist.add(val);
              next._whitelist.delete(val);
            });
            next.internalTests.blacklist = createValidation({
              message,
              name: 'notOneOf',
              test(value) {
                let invalids = this.schema._blacklist;
                let resolved = invalids.resolveAll(this.resolve);
                if (resolved.includes(value)) return this.createError({
                  params: {
                    values: Array.from(invalids).join(', '),
                    resolved
                  }
                });
                return true;
              }
            });
            return next;
          }
          strip(strip = true) {
            let next = this.clone();
            next.spec.strip = strip;
            return next;
          }

          /**
           * Return a serialized description of the schema including validations, flags, types etc.
           *
           * @param options Provide any needed context for resolving runtime schema alterations (lazy, when conditions, etc).
           */
          describe(options) {
            const next = (options ? this.resolve(options) : this).clone();
            const _next$spec = next.spec,
              label = _next$spec.label,
              meta = _next$spec.meta,
              optional = _next$spec.optional,
              nullable = _next$spec.nullable;
            const description = {
              meta,
              label,
              optional,
              nullable,
              default: next.getDefault(options),
              type: next.type,
              oneOf: next._whitelist.describe(),
              notOneOf: next._blacklist.describe(),
              tests: next.tests.map(fn => ({
                name: fn.OPTIONS.name,
                params: fn.OPTIONS.params
              })).filter((n, idx, list) => list.findIndex(c => c.name === n.name) === idx)
            };
            return description;
          }
        }
        // @ts-expect-error
        Schema.prototype.__isYupSchema__ = true;
        for (var _i4 = 0, _arr = ['validate', 'validateSync']; _i4 < _arr.length; _i4++) {
          const method = _arr[_i4];
          Schema.prototype[`${method}At`] = function (path, value, options = {}) {
            const _getIn = getIn(this, path, value, options.context),
              parent = _getIn.parent,
              parentPath = _getIn.parentPath,
              schema = _getIn.schema;
            return schema[method](parent && parent[parentPath], Object.assign({}, options, {
              parent,
              path
            }));
          };
        }
        for (var _i5 = 0, _arr2 = ['equals', 'is']; _i5 < _arr2.length; _i5++) {
          const alias = _arr2[_i5];
          Schema.prototype[alias] = Schema.prototype.oneOf;
        }
        for (var _i6 = 0, _arr3 = ['not', 'nope']; _i6 < _arr3.length; _i6++) {
          const alias = _arr3[_i6];
          Schema.prototype[alias] = Schema.prototype.notOneOf;
        }

        /**
         * This file is a modified version of the file from the following repository:
         * Date.parse with progressive enhancement for ISO 8601 <https://github.com/csnover/js-iso8601>
         * NON-CONFORMANT EDITION.
         * © 2011 Colin Snover <http://zetafleet.com>
         * Released under MIT license.
         */

        // prettier-ignore
        //                1 YYYY                2 MM        3 DD              4 HH     5 mm        6 ss           7 msec         8 Z 9 ±   10 tzHH    11 tzmm
        const isoReg = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
        function parseIsoDate(date) {
          const struct = parseDateStruct(date);
          if (!struct) return Date.parse ? Date.parse(date) : Number.NaN;

          // timestamps without timezone identifiers should be considered local time
          if (struct.z === undefined && struct.plusMinus === undefined) {
            return new Date(struct.year, struct.month, struct.day, struct.hour, struct.minute, struct.second, struct.millisecond).valueOf();
          }
          let totalMinutesOffset = 0;
          if (struct.z !== 'Z' && struct.plusMinus !== undefined) {
            totalMinutesOffset = struct.hourOffset * 60 + struct.minuteOffset;
            if (struct.plusMinus === '+') totalMinutesOffset = 0 - totalMinutesOffset;
          }
          return Date.UTC(struct.year, struct.month, struct.day, struct.hour, struct.minute + totalMinutesOffset, struct.second, struct.millisecond);
        }
        function parseDateStruct(date) {
          var _regexResult$7$length, _regexResult$;
          const regexResult = isoReg.exec(date);
          if (!regexResult) return null;

          // use of toNumber() avoids NaN timestamps caused by “undefined”
          // values being passed to Date constructor
          return {
            year: toNumber(regexResult[1]),
            month: toNumber(regexResult[2], 1) - 1,
            day: toNumber(regexResult[3], 1),
            hour: toNumber(regexResult[4]),
            minute: toNumber(regexResult[5]),
            second: toNumber(regexResult[6]),
            millisecond: regexResult[7] ?
            // allow arbitrary sub-second precision beyond milliseconds
            toNumber(regexResult[7].substring(0, 3)) : 0,
            precision: (_regexResult$7$length = (_regexResult$ = regexResult[7]) == null ? void 0 : _regexResult$.length) != null ? _regexResult$7$length : undefined,
            z: regexResult[8] || undefined,
            plusMinus: regexResult[9] || undefined,
            hourOffset: toNumber(regexResult[10]),
            minuteOffset: toNumber(regexResult[11])
          };
        }
        function toNumber(str, defaultValue = 0) {
          return Number(str) || defaultValue;
        }

        // Taken from HTML spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
        let rEmail =
        // eslint-disable-next-line
        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        let rUrl =
        // eslint-disable-next-line
        /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;

        // eslint-disable-next-line
        let rUUID = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
        let yearMonthDay = '^\\d{4}-\\d{2}-\\d{2}';
        let hourMinuteSecond = '\\d{2}:\\d{2}:\\d{2}';
        let zOrOffset = '(([+-]\\d{2}(:?\\d{2})?)|Z)';
        let rIsoDateTime = new RegExp(`${yearMonthDay}T${hourMinuteSecond}(\\.\\d+)?${zOrOffset}$`);
        let isTrimmed = value => isAbsent(value) || value === value.trim();
        let objStringTag = {}.toString();
        function create$6() {
          return new StringSchema();
        }
        class StringSchema extends Schema {
          constructor() {
            super({
              type: 'string',
              check(value) {
                if (value instanceof String) value = value.valueOf();
                return typeof value === 'string';
              }
            });
            this.withMutation(() => {
              this.transform((value, _raw, ctx) => {
                if (!ctx.spec.coerce || ctx.isType(value)) return value;

                // don't ever convert arrays
                if (Array.isArray(value)) return value;
                const strValue = value != null && value.toString ? value.toString() : value;

                // no one wants plain objects converted to [Object object]
                if (strValue === objStringTag) return value;
                return strValue;
              });
            });
          }
          required(message) {
            return super.required(message).withMutation(schema => schema.test({
              message: message || mixed.required,
              name: 'required',
              skipAbsent: true,
              test: value => !!value.length
            }));
          }
          notRequired() {
            return super.notRequired().withMutation(schema => {
              schema.tests = schema.tests.filter(t => t.OPTIONS.name !== 'required');
              return schema;
            });
          }
          length(length, message = string.length) {
            return this.test({
              message,
              name: 'length',
              exclusive: true,
              params: {
                length
              },
              skipAbsent: true,
              test(value) {
                return value.length === this.resolve(length);
              }
            });
          }
          min(min, message = string.min) {
            return this.test({
              message,
              name: 'min',
              exclusive: true,
              params: {
                min
              },
              skipAbsent: true,
              test(value) {
                return value.length >= this.resolve(min);
              }
            });
          }
          max(max, message = string.max) {
            return this.test({
              name: 'max',
              exclusive: true,
              message,
              params: {
                max
              },
              skipAbsent: true,
              test(value) {
                return value.length <= this.resolve(max);
              }
            });
          }
          matches(regex, options) {
            let excludeEmptyString = false;
            let message;
            let name;
            if (options) {
              if (typeof options === 'object') {
                var _options$excludeEmpty = options.excludeEmptyString;
                excludeEmptyString = _options$excludeEmpty === void 0 ? false : _options$excludeEmpty;
                message = options.message;
                name = options.name;
              } else {
                message = options;
              }
            }
            return this.test({
              name: name || 'matches',
              message: message || string.matches,
              params: {
                regex
              },
              skipAbsent: true,
              test: value => value === '' && excludeEmptyString || value.search(regex) !== -1
            });
          }
          email(message = string.email) {
            return this.matches(rEmail, {
              name: 'email',
              message,
              excludeEmptyString: true
            });
          }
          url(message = string.url) {
            return this.matches(rUrl, {
              name: 'url',
              message,
              excludeEmptyString: true
            });
          }
          uuid(message = string.uuid) {
            return this.matches(rUUID, {
              name: 'uuid',
              message,
              excludeEmptyString: false
            });
          }
          datetime(options) {
            let message = '';
            let allowOffset;
            let precision;
            if (options) {
              if (typeof options === 'object') {
                var _options$message = options.message;
                message = _options$message === void 0 ? '' : _options$message;
                var _options$allowOffset = options.allowOffset;
                allowOffset = _options$allowOffset === void 0 ? false : _options$allowOffset;
                var _options$precision = options.precision;
                precision = _options$precision === void 0 ? undefined : _options$precision;
              } else {
                message = options;
              }
            }
            return this.matches(rIsoDateTime, {
              name: 'datetime',
              message: message || string.datetime,
              excludeEmptyString: true
            }).test({
              name: 'datetime_offset',
              message: message || string.datetime_offset,
              params: {
                allowOffset
              },
              skipAbsent: true,
              test: value => {
                if (!value || allowOffset) return true;
                const struct = parseDateStruct(value);
                if (!struct) return false;
                return !!struct.z;
              }
            }).test({
              name: 'datetime_precision',
              message: message || string.datetime_precision,
              params: {
                precision
              },
              skipAbsent: true,
              test: value => {
                if (!value || precision == undefined) return true;
                const struct = parseDateStruct(value);
                if (!struct) return false;
                return struct.precision === precision;
              }
            });
          }

          //-- transforms --
          ensure() {
            return this.default('').transform(val => val === null ? '' : val);
          }
          trim(message = string.trim) {
            return this.transform(val => val != null ? val.trim() : val).test({
              message,
              name: 'trim',
              test: isTrimmed
            });
          }
          lowercase(message = string.lowercase) {
            return this.transform(value => !isAbsent(value) ? value.toLowerCase() : value).test({
              message,
              name: 'string_case',
              exclusive: true,
              skipAbsent: true,
              test: value => isAbsent(value) || value === value.toLowerCase()
            });
          }
          uppercase(message = string.uppercase) {
            return this.transform(value => !isAbsent(value) ? value.toUpperCase() : value).test({
              message,
              name: 'string_case',
              exclusive: true,
              skipAbsent: true,
              test: value => isAbsent(value) || value === value.toUpperCase()
            });
          }
        }
        create$6.prototype = StringSchema.prototype;

        //
        // Number Interfaces
        //

        let invalidDate = new Date('');
        let isDate = obj => Object.prototype.toString.call(obj) === '[object Date]';
        class DateSchema extends Schema {
          constructor() {
            super({
              type: 'date',
              check(v) {
                return isDate(v) && !isNaN(v.getTime());
              }
            });
            this.withMutation(() => {
              this.transform((value, _raw, ctx) => {
                // null -> InvalidDate isn't useful; treat all nulls as null and let it fail on
                // nullability check vs TypeErrors
                if (!ctx.spec.coerce || ctx.isType(value) || value === null) return value;
                value = parseIsoDate(value);

                // 0 is a valid timestamp equivalent to 1970-01-01T00:00:00Z(unix epoch) or before.
                return !isNaN(value) ? new Date(value) : DateSchema.INVALID_DATE;
              });
            });
          }
          prepareParam(ref, name) {
            let param;
            if (!Reference.isRef(ref)) {
              let cast = this.cast(ref);
              if (!this._typeCheck(cast)) throw new TypeError(`\`${name}\` must be a Date or a value that can be \`cast()\` to a Date`);
              param = cast;
            } else {
              param = ref;
            }
            return param;
          }
          min(min, message = date.min) {
            let limit = this.prepareParam(min, 'min');
            return this.test({
              message,
              name: 'min',
              exclusive: true,
              params: {
                min
              },
              skipAbsent: true,
              test(value) {
                return value >= this.resolve(limit);
              }
            });
          }
          max(max, message = date.max) {
            let limit = this.prepareParam(max, 'max');
            return this.test({
              message,
              name: 'max',
              exclusive: true,
              params: {
                max
              },
              skipAbsent: true,
              test(value) {
                return value <= this.resolve(limit);
              }
            });
          }
        }
        DateSchema.INVALID_DATE = invalidDate;
        DateSchema.prototype;

        // @ts-expect-error
        function sortFields(fields, excludedEdges = []) {
          let edges = [];
          let nodes = new Set();
          let excludes = new Set(excludedEdges.map(([a, b]) => `${a}-${b}`));
          function addNode(depPath, key) {
            let node = propertyExpr.split(depPath)[0];
            nodes.add(node);
            if (!excludes.has(`${key}-${node}`)) edges.push([key, node]);
          }
          for (var _i7 = 0, _Object$keys2 = Object.keys(fields); _i7 < _Object$keys2.length; _i7++) {
            const key = _Object$keys2[_i7];
            let value = fields[key];
            nodes.add(key);
            if (Reference.isRef(value) && value.isSibling) addNode(value.path, key);else if (isSchema(value) && 'deps' in value) value.deps.forEach(path => addNode(path, key));
          }
          return toposort$1.array(Array.from(nodes), edges).reverse();
        }
        function findIndex(arr, err) {
          let idx = Infinity;
          arr.some((key, ii) => {
            var _err$path;
            if ((_err$path = err.path) != null && _err$path.includes(key)) {
              idx = ii;
              return true;
            }
          });
          return idx;
        }
        function sortByKeyOrder(keys) {
          return (a, b) => {
            return findIndex(keys, a) - findIndex(keys, b);
          };
        }
        const parseJson = (value, _, ctx) => {
          if (typeof value !== 'string') {
            return value;
          }
          let parsed = value;
          try {
            parsed = JSON.parse(value);
          } catch (err) {
            /* */
          }
          return ctx.isType(parsed) ? parsed : value;
        };

        // @ts-ignore
        function deepPartial(schema) {
          if ('fields' in schema) {
            const partial = {};
            for (var _i8 = 0, _Object$entries2 = Object.entries(schema.fields); _i8 < _Object$entries2.length; _i8++) {
              const _Object$entries2$_i = _slicedToArray(_Object$entries2[_i8], 2),
                key = _Object$entries2$_i[0],
                fieldSchema = _Object$entries2$_i[1];
              partial[key] = deepPartial(fieldSchema);
            }
            return schema.setFields(partial);
          }
          if (schema.type === 'array') {
            const nextArray = schema.optional();
            if (nextArray.innerType) nextArray.innerType = deepPartial(nextArray.innerType);
            return nextArray;
          }
          if (schema.type === 'tuple') {
            return schema.optional().clone({
              types: schema.spec.types.map(deepPartial)
            });
          }
          if ('optional' in schema) {
            return schema.optional();
          }
          return schema;
        }
        const deepHas = (obj, p) => {
          const path = [...propertyExpr.normalizePath(p)];
          if (path.length === 1) return path[0] in obj;
          let last = path.pop();
          let parent = propertyExpr.getter(propertyExpr.join(path), true)(obj);
          return !!(parent && last in parent);
        };
        let isObject = obj => Object.prototype.toString.call(obj) === '[object Object]';
        function unknown(ctx, value) {
          let known = Object.keys(ctx.fields);
          return Object.keys(value).filter(key => known.indexOf(key) === -1);
        }
        const defaultSort = sortByKeyOrder([]);
        function create$3(spec) {
          return new ObjectSchema(spec);
        }
        class ObjectSchema extends Schema {
          constructor(spec) {
            super({
              type: 'object',
              check(value) {
                return isObject(value) || typeof value === 'function';
              }
            });
            this.fields = Object.create(null);
            this._sortErrors = defaultSort;
            this._nodes = [];
            this._excludedEdges = [];
            this.withMutation(() => {
              if (spec) {
                this.shape(spec);
              }
            });
          }
          _cast(_value, options = {}) {
            var _options$stripUnknown;
            let value = super._cast(_value, options);

            //should ignore nulls here
            if (value === undefined) return this.getDefault(options);
            if (!this._typeCheck(value)) return value;
            let fields = this.fields;
            let strip = (_options$stripUnknown = options.stripUnknown) != null ? _options$stripUnknown : this.spec.noUnknown;
            let props = [].concat(this._nodes, Object.keys(value).filter(v => !this._nodes.includes(v)));
            let intermediateValue = {}; // is filled during the transform below
            let innerOptions = Object.assign({}, options, {
              parent: intermediateValue,
              __validating: options.__validating || false
            });
            let isChanged = false;
            var _iterator5 = _createForOfIteratorHelper(props),
              _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                const prop = _step5.value;
                let field = fields[prop];
                let exists = prop in value;
                if (field) {
                  let fieldValue;
                  let inputValue = value[prop];

                  // safe to mutate since this is fired in sequence
                  innerOptions.path = (options.path ? `${options.path}.` : '') + prop;
                  field = field.resolve({
                    value: inputValue,
                    context: options.context,
                    parent: intermediateValue
                  });
                  let fieldSpec = field instanceof Schema ? field.spec : undefined;
                  let strict = fieldSpec == null ? void 0 : fieldSpec.strict;
                  if (fieldSpec != null && fieldSpec.strip) {
                    isChanged = isChanged || prop in value;
                    continue;
                  }
                  fieldValue = !options.__validating || !strict ?
                  // TODO: use _cast, this is double resolving
                  field.cast(value[prop], innerOptions) : value[prop];
                  if (fieldValue !== undefined) {
                    intermediateValue[prop] = fieldValue;
                  }
                } else if (exists && !strip) {
                  intermediateValue[prop] = value[prop];
                }
                if (exists !== prop in intermediateValue || intermediateValue[prop] !== value[prop]) {
                  isChanged = true;
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
            return isChanged ? intermediateValue : value;
          }
          _validate(_value, options = {}, panic, next) {
            let _options$from = options.from,
              from = _options$from === void 0 ? [] : _options$from,
              _options$originalValu4 = options.originalValue,
              originalValue = _options$originalValu4 === void 0 ? _value : _options$originalValu4,
              _options$recursive2 = options.recursive,
              recursive = _options$recursive2 === void 0 ? this.spec.recursive : _options$recursive2;
            options.from = [{
              schema: this,
              value: originalValue
            }, ...from];
            // this flag is needed for handling `strict` correctly in the context of
            // validation vs just casting. e.g strict() on a field is only used when validating
            options.__validating = true;
            options.originalValue = originalValue;
            super._validate(_value, options, panic, (objectErrors, value) => {
              if (!recursive || !isObject(value)) {
                next(objectErrors, value);
                return;
              }
              originalValue = originalValue || value;
              let tests = [];
              var _iterator6 = _createForOfIteratorHelper(this._nodes),
                _step6;
              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  let key = _step6.value;
                  let field = this.fields[key];
                  if (!field || Reference.isRef(field)) {
                    continue;
                  }
                  tests.push(field.asNestedTest({
                    options,
                    key,
                    parent: value,
                    parentPath: options.path,
                    originalParent: originalValue
                  }));
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
              this.runTests({
                tests,
                value,
                originalValue,
                options
              }, panic, fieldErrors => {
                next(fieldErrors.sort(this._sortErrors).concat(objectErrors), value);
              });
            });
          }
          clone(spec) {
            const next = super.clone(spec);
            next.fields = Object.assign({}, this.fields);
            next._nodes = this._nodes;
            next._excludedEdges = this._excludedEdges;
            next._sortErrors = this._sortErrors;
            return next;
          }
          concat(schema) {
            let next = super.concat(schema);
            let nextFields = next.fields;
            for (var _i9 = 0, _Object$entries3 = Object.entries(this.fields); _i9 < _Object$entries3.length; _i9++) {
              let _Object$entries3$_i = _slicedToArray(_Object$entries3[_i9], 2),
                field = _Object$entries3$_i[0],
                schemaOrRef = _Object$entries3$_i[1];
              const target = nextFields[field];
              nextFields[field] = target === undefined ? schemaOrRef : target;
            }
            return next.withMutation(s =>
            // XXX: excludes here is wrong
            s.setFields(nextFields, [...this._excludedEdges, ...schema._excludedEdges]));
          }
          _getDefault(options) {
            if ('default' in this.spec) {
              return super._getDefault(options);
            }

            // if there is no default set invent one
            if (!this._nodes.length) {
              return undefined;
            }
            let dft = {};
            this._nodes.forEach(key => {
              var _innerOptions;
              const field = this.fields[key];
              let innerOptions = options;
              if ((_innerOptions = innerOptions) != null && _innerOptions.value) {
                innerOptions = Object.assign({}, innerOptions, {
                  parent: innerOptions.value,
                  value: innerOptions.value[key]
                });
              }
              dft[key] = field && 'getDefault' in field ? field.getDefault(innerOptions) : undefined;
            });
            return dft;
          }
          setFields(shape, excludedEdges) {
            let next = this.clone();
            next.fields = shape;
            next._nodes = sortFields(shape, excludedEdges);
            next._sortErrors = sortByKeyOrder(Object.keys(shape));
            // XXX: this carries over edges which may not be what you want
            if (excludedEdges) next._excludedEdges = excludedEdges;
            return next;
          }
          shape(additions, excludes = []) {
            return this.clone().withMutation(next => {
              let edges = next._excludedEdges;
              if (excludes.length) {
                if (!Array.isArray(excludes[0])) excludes = [excludes];
                edges = [...next._excludedEdges, ...excludes];
              }

              // XXX: excludes here is wrong
              return next.setFields(Object.assign(next.fields, additions), edges);
            });
          }
          partial() {
            const partial = {};
            for (var _i10 = 0, _Object$entries4 = Object.entries(this.fields); _i10 < _Object$entries4.length; _i10++) {
              const _Object$entries4$_i = _slicedToArray(_Object$entries4[_i10], 2),
                key = _Object$entries4$_i[0],
                schema = _Object$entries4$_i[1];
              partial[key] = 'optional' in schema && schema.optional instanceof Function ? schema.optional() : schema;
            }
            return this.setFields(partial);
          }
          deepPartial() {
            const next = deepPartial(this);
            return next;
          }
          pick(keys) {
            const picked = {};
            var _iterator7 = _createForOfIteratorHelper(keys),
              _step7;
            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                const key = _step7.value;
                if (this.fields[key]) picked[key] = this.fields[key];
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
            return this.setFields(picked, this._excludedEdges.filter(([a, b]) => keys.includes(a) && keys.includes(b)));
          }
          omit(keys) {
            const remaining = [];
            for (var _i11 = 0, _Object$keys3 = Object.keys(this.fields); _i11 < _Object$keys3.length; _i11++) {
              const key = _Object$keys3[_i11];
              if (keys.includes(key)) continue;
              remaining.push(key);
            }
            return this.pick(remaining);
          }
          from(from, to, alias) {
            let fromGetter = propertyExpr.getter(from, true);
            return this.transform(obj => {
              if (!obj) return obj;
              let newObj = obj;
              if (deepHas(obj, from)) {
                newObj = Object.assign({}, obj);
                if (!alias) delete newObj[from];
                newObj[to] = fromGetter(obj);
              }
              return newObj;
            });
          }

          /** Parse an input JSON string to an object */
          json() {
            return this.transform(parseJson);
          }
          noUnknown(noAllow = true, message = object.noUnknown) {
            if (typeof noAllow !== 'boolean') {
              message = noAllow;
              noAllow = true;
            }
            let next = this.test({
              name: 'noUnknown',
              exclusive: true,
              message: message,
              test(value) {
                if (value == null) return true;
                const unknownKeys = unknown(this.schema, value);
                return !noAllow || unknownKeys.length === 0 || this.createError({
                  params: {
                    unknown: unknownKeys.join(', ')
                  }
                });
              }
            });
            next.spec.noUnknown = noAllow;
            return next;
          }
          unknown(allow = true, message = object.noUnknown) {
            return this.noUnknown(!allow, message);
          }
          transformKeys(fn) {
            return this.transform(obj => {
              if (!obj) return obj;
              const result = {};
              for (var _i12 = 0, _Object$keys4 = Object.keys(obj); _i12 < _Object$keys4.length; _i12++) {
                const key = _Object$keys4[_i12];
                result[fn(key)] = obj[key];
              }
              return result;
            });
          }
          camelCase() {
            return this.transformKeys(tinyCase.camelCase);
          }
          snakeCase() {
            return this.transformKeys(tinyCase.snakeCase);
          }
          constantCase() {
            return this.transformKeys(key => tinyCase.snakeCase(key).toUpperCase());
          }
          describe(options) {
            const next = (options ? this.resolve(options) : this).clone();
            const base = super.describe(options);
            base.fields = {};
            for (var _i13 = 0, _Object$entries5 = Object.entries(next.fields); _i13 < _Object$entries5.length; _i13++) {
              const _Object$entries5$_i = _slicedToArray(_Object$entries5[_i13], 2),
                key = _Object$entries5$_i[0],
                value = _Object$entries5$_i[1];
              var _innerOptions2;
              let innerOptions = options;
              if ((_innerOptions2 = innerOptions) != null && _innerOptions2.value) {
                innerOptions = Object.assign({}, innerOptions, {
                  parent: innerOptions.value,
                  value: innerOptions.value[key]
                });
              }
              base.fields[key] = value.describe(innerOptions);
            }
            return base;
          }
        }
        create$3.prototype = ObjectSchema.prototype;
        function create$2(type) {
          return new ArraySchema(type);
        }
        class ArraySchema extends Schema {
          constructor(type) {
            super({
              type: 'array',
              spec: {
                types: type
              },
              check(v) {
                return Array.isArray(v);
              }
            });

            // `undefined` specifically means uninitialized, as opposed to "no subtype"
            this.innerType = void 0;
            this.innerType = type;
          }
          _cast(_value, _opts) {
            const value = super._cast(_value, _opts);

            // should ignore nulls here
            if (!this._typeCheck(value) || !this.innerType) {
              return value;
            }
            let isChanged = false;
            const castArray = value.map((v, idx) => {
              const castElement = this.innerType.cast(v, Object.assign({}, _opts, {
                path: `${_opts.path || ''}[${idx}]`
              }));
              if (castElement !== v) {
                isChanged = true;
              }
              return castElement;
            });
            return isChanged ? castArray : value;
          }
          _validate(_value, options = {}, panic, next) {
            var _options$recursive;
            // let sync = options.sync;
            // let path = options.path;
            let innerType = this.innerType;
            // let endEarly = options.abortEarly ?? this.spec.abortEarly;
            let recursive = (_options$recursive = options.recursive) != null ? _options$recursive : this.spec.recursive;
            options.originalValue != null ? options.originalValue : _value;
            super._validate(_value, options, panic, (arrayErrors, value) => {
              var _options$originalValu2;
              if (!recursive || !innerType || !this._typeCheck(value)) {
                next(arrayErrors, value);
                return;
              }

              // #950 Ensure that sparse array empty slots are validated
              let tests = new Array(value.length);
              for (let index = 0; index < value.length; index++) {
                var _options$originalValu;
                tests[index] = innerType.asNestedTest({
                  options,
                  index,
                  parent: value,
                  parentPath: options.path,
                  originalParent: (_options$originalValu = options.originalValue) != null ? _options$originalValu : _value
                });
              }
              this.runTests({
                value,
                tests,
                originalValue: (_options$originalValu2 = options.originalValue) != null ? _options$originalValu2 : _value,
                options
              }, panic, innerTypeErrors => next(innerTypeErrors.concat(arrayErrors), value));
            });
          }
          clone(spec) {
            const next = super.clone(spec);
            // @ts-expect-error readonly
            next.innerType = this.innerType;
            return next;
          }

          /** Parse an input JSON string to an object */
          json() {
            return this.transform(parseJson);
          }
          concat(schema) {
            let next = super.concat(schema);

            // @ts-expect-error readonly
            next.innerType = this.innerType;
            if (schema.innerType)
              // @ts-expect-error readonly
              next.innerType = next.innerType ?
              // @ts-expect-error Lazy doesn't have concat and will break
              next.innerType.concat(schema.innerType) : schema.innerType;
            return next;
          }
          of(schema) {
            // FIXME: this should return a new instance of array without the default to be
            let next = this.clone();
            if (!isSchema(schema)) throw new TypeError('`array.of()` sub-schema must be a valid yup schema not: ' + printValue(schema));

            // @ts-expect-error readonly
            next.innerType = schema;
            next.spec = Object.assign({}, next.spec, {
              types: schema
            });
            return next;
          }
          length(length, message = array.length) {
            return this.test({
              message,
              name: 'length',
              exclusive: true,
              params: {
                length
              },
              skipAbsent: true,
              test(value) {
                return value.length === this.resolve(length);
              }
            });
          }
          min(min, message) {
            message = message || array.min;
            return this.test({
              message,
              name: 'min',
              exclusive: true,
              params: {
                min
              },
              skipAbsent: true,
              // FIXME(ts): Array<typeof T>
              test(value) {
                return value.length >= this.resolve(min);
              }
            });
          }
          max(max, message) {
            message = message || array.max;
            return this.test({
              message,
              name: 'max',
              exclusive: true,
              params: {
                max
              },
              skipAbsent: true,
              test(value) {
                return value.length <= this.resolve(max);
              }
            });
          }
          ensure() {
            return this.default(() => []).transform((val, original) => {
              // We don't want to return `null` for nullable schema
              if (this._typeCheck(val)) return val;
              return original == null ? [] : [].concat(original);
            });
          }
          compact(rejector) {
            let reject = !rejector ? v => !!v : (v, i, a) => !rejector(v, i, a);
            return this.transform(values => values != null ? values.filter(reject) : values);
          }
          describe(options) {
            const next = (options ? this.resolve(options) : this).clone();
            const base = super.describe(options);
            if (next.innerType) {
              var _innerOptions;
              let innerOptions = options;
              if ((_innerOptions = innerOptions) != null && _innerOptions.value) {
                innerOptions = Object.assign({}, innerOptions, {
                  parent: innerOptions.value,
                  value: innerOptions.value[0]
                });
              }
              base.innerType = next.innerType.describe(innerOptions);
            }
            return base;
          }
        }
        create$2.prototype = ArraySchema.prototype;
        function addMethod(schemaType, name, fn) {
          if (!schemaType || !isSchema(schemaType.prototype)) throw new TypeError('You must provide a yup schema constructor function');
          if (typeof fn !== 'function') throw new TypeError('Method function must be provided');
          schemaType.prototype[name] = fn;
        }
        const s = (e, s, o) => {
            if (e && "reportValidity" in e) {
              const r = get(o, s);
              e.setCustomValidity(r && r.message || ""), e.reportValidity();
            }
          },
          o$1 = (t, e) => {
            for (const o in e.fields) {
              const r = e.fields[o];
              r && r.ref && "reportValidity" in r.ref ? s(r.ref, o, t) : r.refs && r.refs.forEach(e => s(e, o, t));
            }
          },
          r = (s, r) => {
            r.shouldUseNativeValidation && o$1(s, r);
            const f = {};
            for (const o in s) {
              const n = get(r.fields, o),
                a = Object.assign(s[o] || {}, {
                  ref: n && n.ref
                });
              if (i(r.names || Object.keys(s), o)) {
                const s = Object.assign({}, get(f, o));
                set(s, "root", a), set(f, o, s);
              } else set(f, o, a);
            }
            return f;
          },
          i = (t, e) => t.some(t => t.startsWith(e + "."));
        function o(o2, n, a) {
          return void 0 === n && (n = {}), void 0 === a && (a = {}), function (s, i, c) {
            try {
              return Promise.resolve(function (t2, r2) {
                try {
                  var u = (n.context && false, Promise.resolve(o2["sync" === a.mode ? "validateSync" : "validate"](s, Object.assign({
                    abortEarly: false
                  }, n, {
                    context: i
                  }))).then(function (t3) {
                    return c.shouldUseNativeValidation && o$1({}, c), {
                      values: a.raw ? s : t3,
                      errors: {}
                    };
                  }));
                } catch (e2) {
                  return r2(e2);
                }
                return u && u.then ? u.then(void 0, r2) : u;
              }(0, function (e2) {
                if (!e2.inner) throw e2;
                return {
                  values: {},
                  errors: r((o3 = e2, n2 = !c.shouldUseNativeValidation && "all" === c.criteriaMode, (o3.inner || []).reduce(function (e3, t2) {
                    if (e3[t2.path] || (e3[t2.path] = {
                      message: t2.message,
                      type: t2.type
                    }), n2) {
                      var o4 = e3[t2.path].types,
                        a2 = o4 && o4[t2.type];
                      e3[t2.path] = appendErrors(t2.path, n2, e3, t2.type, a2 ? [].concat(a2, t2.message) : t2.message);
                    }
                    return e3;
                  }, {})), c)
                };
                var o3, n2;
              }));
            } catch (e2) {
              return Promise.reject(e2);
            }
          };
        }
      }
    };
  });
})();
//# sourceMappingURL=yup-legacy-Cikjg7JV.js.map
