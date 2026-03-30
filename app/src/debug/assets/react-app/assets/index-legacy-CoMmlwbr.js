;
(function () {
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  System.register(['./mui-legacy-b38CRKaY.js', './vendor-legacy-lhtLtiSI.js', './i18n-legacy-BRT6G2_g.js'], function (exports, module) {
    'use strict';

    var hasOwn, jsxRuntimeExports, Emotion$1, createEmotionProps, useTheme, Box, reactDomExports, getDefaultExportFromCjs, commonjsGlobal, reactExports, BrowserRouter, __vitePreload, instance, Backend, Browser, I18nextProvider;
    return {
      setters: [module => {
        hasOwn = module.h;
        jsxRuntimeExports = module.j;
        Emotion$1 = module.E;
        createEmotionProps = module.c;
        useTheme = module.u;
        Box = module.B;
      }, module => {
        reactDomExports = module.c;
        getDefaultExportFromCjs = module.g;
        commonjsGlobal = module.d;
        reactExports = module.r;
        BrowserRouter = module.B;
      }, module => {
        __vitePreload = module.a;
        instance = module.i;
        Backend = module.B;
        Browser = module.b;
        I18nextProvider = module.I;
      }],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._loadingWrapper_1h4mu_1 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n\n._loadingDots_1h4mu_8 {\n  width: 60px;\n  aspect-ratio: 4;\n  clip-path: inset(0 100% 0 0);\n  animation: _l1_1h4mu_1 1s steps(4) infinite;\n}\n@keyframes _l1_1h4mu_1 {\n  to {\n    clip-path: inset(0 -34% 0 0);\n  }\n}\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n\n::-webkit-scrollbar {\n  width: 8px;\n}\n\n::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: #16205b74;\n  border-radius: 20px;\n}\n.MuiFormControl-root {\n  width: 100%;\n}\n\n.text-left {\n  text-align: left !important;\n}\n\n.mt-20 {\n  margin-top: 20px !important;\n}\n\n.mt-40 {\n  margin-top: 40px !important;\n}\n\n.mr-10 {\n  margin-right: 10px !important;\n}\n\n.mr-14 {\n  margin-right: 14px !important;\n}\n\n.ml-14 {\n  margin-left: 14px !important;\n}\n\n.ml-5 {\n  margin-left: 5px !important;\n}\n\n.mb-0 {\n  margin-bottom: 0 !important;\n}\n\n.mb-10 {\n  margin-bottom: 10px !important;\n}\n\n.pb-10 {\n  padding-bottom: 10px !important;\n}\n\n.ta-center {\n  text-align: center;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.w-100 {\n  width: 100%;\n}\n\n.card-custom {\n  position: relative;\n  margin-top: 12px;\n  margin-bottom: 12px;\n  border: 1px solid;\n  border-radius: 8px;\n  cursor: default;\n}\n\n.required {\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.1px;\n}\n\n.inputSurvey {\n  max-width: 400px;\n  width: 100%;\n  margin-bottom: 15px;\n}\n\n.MuiSelect-select {\n  display: flex !important;\n  align-items: center;\n}\n\n.MuiSwitch-root {\n  margin-right: -4px;\n}\n\n.jsx-parser {\n  p {\n    margin: 0;\n  }\n}\n:root {\n  --safe-area-inset-top: env(safe-area-inset-top, 0px);\n  --safe-area-inset-right: env(safe-area-inset-right, 0px);\n  --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);\n  --safe-area-inset-left: env(safe-area-inset-left, 0px);\n}\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        exports({
          b: substr,
          c: charat,
          d: combine,
          e: serialize,
          f: copy,
          h: hash,
          i: indexof,
          j: filter,
          k: stylisRTLPlugin,
          l: lift,
          m: match,
          r: replace,
          s: strlen
        });
        false && function polyfill() {
          const relList = document.createElement("link").relList;
          if (relList && relList.supports && relList.supports("modulepreload")) {
            return;
          }
          var _iterator = _createForOfIteratorHelper(document.querySelectorAll('link[rel="modulepreload"]')),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              const link = _step.value;
              processPreload(link);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          new MutationObserver(mutations => {
            var _iterator2 = _createForOfIteratorHelper(mutations),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                const mutation = _step2.value;
                if (mutation.type !== "childList") {
                  continue;
                }
                var _iterator3 = _createForOfIteratorHelper(mutation.addedNodes),
                  _step3;
                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    const node = _step3.value;
                    if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }).observe(document, {
            childList: true,
            subtree: true
          });
          function getFetchOpts(link) {
            const fetchOpts = {};
            if (link.integrity) fetchOpts.integrity = link.integrity;
            if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
            if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";else fetchOpts.credentials = "same-origin";
            return fetchOpts;
          }
          function processPreload(link) {
            if (link.ep) return;
            link.ep = true;
            const fetchOpts = getFetchOpts(link);
            fetch(link.href, fetchOpts);
          }
        }();
        var Fragment = exports("F", jsxRuntimeExports.Fragment);
        var jsx = exports("n", function jsx(type, props, key) {
          if (!hasOwn.call(props, 'css')) {
            return jsxRuntimeExports.jsx(type, props, key);
          }
          return jsxRuntimeExports.jsx(Emotion$1, createEmotionProps(type, props), key);
        });
        var jsxs = exports("o", function jsxs(type, props, key) {
          if (!hasOwn.call(props, 'css')) {
            return jsxRuntimeExports.jsxs(type, props, key);
          }
          return jsxRuntimeExports.jsxs(Emotion$1, createEmotionProps(type, props), key);
        });
        var createRoot;
        var m = reactDomExports;
        {
          createRoot = m.createRoot;
          m.hydrateRoot;
        }
        Boolean(window.location.hostname === "localhost" ||
        // [::1] is the IPv6 localhost address.
        window.location.hostname === "[::1]" ||
        // 127.0.0.0/8 are considered localhost for IPv4.
        window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
        function unregister() {
          if ("serviceWorker" in navigator) {
            navigator.serviceWorker.ready.then(registration => {
              registration.unregister();
            }).catch(error => {
              console.error(error.message);
            });
          }
        }
        const loadingWrapper = "_loadingWrapper_1h4mu_1";
        const loadingDots = "_loadingDots_1h4mu_8";
        const styles = {
          loadingWrapper: loadingWrapper,
          loadingDots: loadingDots
        };
        const LoadingDots = exports("L", ({
          fullHeight = false
        }) => {
          var _theme$palette;
          const theme = useTheme();
          return /* @__PURE__ */jsx(Box, {
            className: styles.loadingWrapper,
            style: {
              height: fullHeight ? "50vh" : "auto"
            },
            children: /* @__PURE__ */jsx(Box, {
              style: {
                background: `radial-gradient(circle closest-side, ${theme === null || theme === void 0 || (_theme$palette = theme.palette) === null || _theme$palette === void 0 || (_theme$palette = _theme$palette.primary) === null || _theme$palette === void 0 ? void 0 : _theme$palette.main} 90%, #0000) 0 / calc(100% / 3) 100% space`
              },
              className: styles.loadingDots
            })
          });
        });
        var MS = exports("M", '-ms-');
        var MOZ = exports("a", '-moz-');
        var WEBKIT = exports("W", '-webkit-');
        var COMMENT = 'comm';
        var RULESET = exports("R", 'rule');
        var DECLARATION = exports("D", 'decl');
        var MEDIA = '@media';
        var IMPORT = '@import';
        var SUPPORTS = '@supports';
        var KEYFRAMES = exports("K", '@keyframes');

        /**
         * @param {number}
         * @return {number}
         */
        var abs = Math.abs;

        /**
         * @param {number}
         * @return {string}
         */
        var from = String.fromCharCode;

        /**
         * @param {object}
         * @return {object}
         */
        var assign = exports("g", Object.assign);

        /**
         * @param {string} value
         * @param {number} length
         * @return {number}
         */
        function hash(value, length) {
          return charat(value, 0) ^ 45 ? (((length << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
        }

        /**
         * @param {string} value
         * @return {string}
         */
        function trim(value) {
          return value.trim();
        }

        /**
         * @param {string} value
         * @param {RegExp} pattern
         * @return {string?}
         */
        function match(value, pattern) {
          return (value = pattern.exec(value)) ? value[0] : value;
        }

        /**
         * @param {string} value
         * @param {(string|RegExp)} pattern
         * @param {string} replacement
         * @return {string}
         */
        function replace(value, pattern, replacement) {
          return value.replace(pattern, replacement);
        }

        /**
         * @param {string} value
         * @param {string} search
         * @param {number} position
         * @return {number}
         */
        function indexof(value, search, position) {
          return value.indexOf(search, position);
        }

        /**
         * @param {string} value
         * @param {number} index
         * @return {number}
         */
        function charat(value, index) {
          return value.charCodeAt(index) | 0;
        }

        /**
         * @param {string} value
         * @param {number} begin
         * @param {number} end
         * @return {string}
         */
        function substr(value, begin, end) {
          return value.slice(begin, end);
        }

        /**
         * @param {string} value
         * @return {number}
         */
        function strlen(value) {
          return value.length;
        }

        /**
         * @param {any[]} value
         * @return {number}
         */
        function sizeof(value) {
          return value.length;
        }

        /**
         * @param {any} value
         * @param {any[]} array
         * @return {any}
         */
        function append(value, array) {
          return array.push(value), value;
        }

        /**
         * @param {string[]} array
         * @param {function} callback
         * @return {string}
         */
        function combine(array, callback) {
          return array.map(callback).join('');
        }

        /**
         * @param {string[]} array
         * @param {RegExp} pattern
         * @return {string[]}
         */
        function filter(array, pattern) {
          return array.filter(function (value) {
            return !match(value, pattern);
          });
        }
        var line = 1;
        var column = 1;
        var length = 0;
        var position = 0;
        var character = 0;
        var characters = '';

        /**
         * @param {string} value
         * @param {object | null} root
         * @param {object | null} parent
         * @param {string} type
         * @param {string[] | string} props
         * @param {object[] | string} children
         * @param {object[]} siblings
         * @param {number} length
         */
        function node(value, root, parent, type, props, children, length, siblings) {
          return {
            value: value,
            root: root,
            parent: parent,
            type: type,
            props: props,
            children: children,
            line: line,
            column: column,
            length: length,
            return: '',
            siblings: siblings
          };
        }

        /**
         * @param {object} root
         * @param {object} props
         * @return {object}
         */
        function copy(root, props) {
          return assign(node('', null, null, '', null, null, 0, root.siblings), root, {
            length: -root.length
          }, props);
        }

        /**
         * @param {object} root
         */
        function lift(root) {
          while (root.root) root = copy(root.root, {
            children: [root]
          });
          append(root, root.siblings);
        }

        /**
         * @return {number}
         */
        function char() {
          return character;
        }

        /**
         * @return {number}
         */
        function prev() {
          character = position > 0 ? charat(characters, --position) : 0;
          if (column--, character === 10) column = 1, line--;
          return character;
        }

        /**
         * @return {number}
         */
        function next() {
          character = position < length ? charat(characters, position++) : 0;
          if (column++, character === 10) column = 1, line++;
          return character;
        }

        /**
         * @return {number}
         */
        function peek() {
          return charat(characters, position);
        }

        /**
         * @return {number}
         */
        function caret() {
          return position;
        }

        /**
         * @param {number} begin
         * @param {number} end
         * @return {string}
         */
        function slice(begin, end) {
          return substr(characters, begin, end);
        }

        /**
         * @param {number} type
         * @return {number}
         */
        function token(type) {
          switch (type) {
            // \0 \t \n \r \s whitespace token
            case 0:
            case 9:
            case 10:
            case 13:
            case 32:
              return 5;
            // ! + , / > @ ~ isolate token
            case 33:
            case 43:
            case 44:
            case 47:
            case 62:
            case 64:
            case 126:
            // ; { } breakpoint token
            case 59:
            case 123:
            case 125:
              return 4;
            // : accompanied token
            case 58:
              return 3;
            // " ' ( [ opening delimit token
            case 34:
            case 39:
            case 40:
            case 91:
              return 2;
            // ) ] closing delimit token
            case 41:
            case 93:
              return 1;
          }
          return 0;
        }

        /**
         * @param {string} value
         * @return {any[]}
         */
        function alloc(value) {
          return line = column = 1, length = strlen(characters = value), position = 0, [];
        }

        /**
         * @param {any} value
         * @return {any}
         */
        function dealloc(value) {
          return characters = '', value;
        }

        /**
         * @param {number} type
         * @return {string}
         */
        function delimit(type) {
          return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
        }

        /**
         * @param {number} type
         * @return {string}
         */
        function whitespace(type) {
          while (character = peek()) if (character < 33) next();else break;
          return token(type) > 2 || token(character) > 3 ? '' : ' ';
        }

        /**
         * @param {number} index
         * @param {number} count
         * @return {string}
         */
        function escaping(index, count) {
          while (--count && next())
          // not 0-9 A-F a-f
          if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
          return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
        }

        /**
         * @param {number} type
         * @return {number}
         */
        function delimiter(type) {
          while (next()) switch (character) {
            // ] ) " '
            case type:
              return position;
            // " '
            case 34:
            case 39:
              if (type !== 34 && type !== 39) delimiter(character);
              break;
            // (
            case 40:
              if (type === 41) delimiter(type);
              break;
            // \
            case 92:
              next();
              break;
          }
          return position;
        }

        /**
         * @param {number} type
         * @param {number} index
         * @return {number}
         */
        function commenter(type, index) {
          while (next())
          // //
          if (type + character === 47 + 10) break;
          // /*
          else if (type + character === 42 + 42 && peek() === 47) break;
          return '/*' + slice(index, position - 1) + '*' + from(type === 47 ? type : next());
        }

        /**
         * @param {number} index
         * @return {string}
         */
        function identifier(index) {
          while (!token(peek())) next();
          return slice(index, position);
        }

        /**
         * @param {string} value
         * @return {object[]}
         */
        function compile(value) {
          return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value));
        }

        /**
         * @param {string} value
         * @param {object} root
         * @param {object?} parent
         * @param {string[]} rule
         * @param {string[]} rules
         * @param {string[]} rulesets
         * @param {number[]} pseudo
         * @param {number[]} points
         * @param {string[]} declarations
         * @return {object}
         */
        function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
          var index = 0;
          var offset = 0;
          var length = pseudo;
          var atrule = 0;
          var property = 0;
          var previous = 0;
          var variable = 1;
          var scanning = 1;
          var ampersand = 1;
          var character = 0;
          var type = '';
          var props = rules;
          var children = rulesets;
          var reference = rule;
          var characters = type;
          while (scanning) switch (previous = character, character = next()) {
            // (
            case 40:
              if (previous != 108 && charat(characters, length - 1) == 58) {
                if (indexof(characters += replace(delimit(character), '&', '&\f'), '&\f', abs(index ? points[index - 1] : 0)) != -1) ampersand = -1;
                break;
              }
            // " ' [
            case 34:
            case 39:
            case 91:
              characters += delimit(character);
              break;
            // \t \n \r \s
            case 9:
            case 10:
            case 13:
            case 32:
              characters += whitespace(previous);
              break;
            // \
            case 92:
              characters += escaping(caret() - 1, 7);
              continue;
            // /
            case 47:
              switch (peek()) {
                case 42:
                case 47:
                  append(comment(commenter(next(), caret()), root, parent, declarations), declarations);
                  if ((token(previous || 1) == 5 || token(peek() || 1) == 5) && strlen(characters) && substr(characters, -1, void 0) !== ' ') characters += ' ';
                  break;
                default:
                  characters += '/';
              }
              break;
            // {
            case 123 * variable:
              points[index++] = strlen(characters) * ampersand;
            // } ; \0
            case 125 * variable:
            case 59:
            case 0:
              switch (character) {
                // \0 }
                case 0:
                case 125:
                  scanning = 0;
                // ;
                case 59 + offset:
                  if (ampersand == -1) characters = replace(characters, /\f/g, '');
                  if (property > 0 && (strlen(characters) - length || variable === 0 && previous === 47)) append(property > 32 ? declaration(characters + ';', rule, parent, length - 1, declarations) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2, declarations), declarations);
                  break;
                // @ ;
                case 59:
                  characters += ';';
                // { rule/at-rule
                default:
                  append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length, rulesets), rulesets);
                  if (character === 123) if (offset === 0) parse(characters, root, reference, reference, props, rulesets, length, points, children);else {
                    switch (atrule) {
                      // c(ontainer)
                      case 99:
                        if (charat(characters, 3) === 110) break;
                      // l(ayer)
                      case 108:
                        if (charat(characters, 2) === 97) break;
                      default:
                        offset = 0;
                      // d(ocument) m(edia) s(upports)
                      case 100:
                      case 109:
                      case 115:
                    }
                    if (offset) parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length, children), children), rules, children, length, points, rule ? props : children);else parse(characters, reference, reference, reference, [''], children, 0, points, children);
                  }
              }
              index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
              break;
            // :
            case 58:
              length = 1 + strlen(characters), property = previous;
            default:
              if (variable < 1) if (character == 123) --variable;else if (character == 125 && variable++ == 0 && prev() == 125) continue;
              switch (characters += from(character), character * variable) {
                // &
                case 38:
                  ampersand = offset > 0 ? 1 : (characters += '\f', -1);
                  break;
                // ,
                case 44:
                  points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
                  break;
                // @
                case 64:
                  // -
                  if (peek() === 45) characters += delimit(next());
                  atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
                  break;
                // -
                case 45:
                  if (previous === 45 && strlen(characters) == 2) variable = 0;
              }
          }
          return rulesets;
        }

        /**
         * @param {string} value
         * @param {object} root
         * @param {object?} parent
         * @param {number} index
         * @param {number} offset
         * @param {string[]} rules
         * @param {number[]} points
         * @param {string} type
         * @param {string[]} props
         * @param {string[]} children
         * @param {number} length
         * @param {object[]} siblings
         * @return {object}
         */
        function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length, siblings) {
          var post = offset - 1;
          var rule = offset === 0 ? rules : [''];
          var size = sizeof(rule);
          for (var i = 0, j = 0, k = 0; i < index; ++i) for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x) if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x]))) props[k++] = z;
          return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length, siblings);
        }

        /**
         * @param {number} value
         * @param {object} root
         * @param {object?} parent
         * @param {object[]} siblings
         * @return {object}
         */
        function comment(value, root, parent, siblings) {
          return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings);
        }

        /**
         * @param {string} value
         * @param {object} root
         * @param {object?} parent
         * @param {number} length
         * @param {object[]} siblings
         * @return {object}
         */
        function declaration(value, root, parent, length, siblings) {
          return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length, siblings);
        }

        /**
         * @param {object[]} children
         * @param {function} callback
         * @return {string}
         */
        function serialize(children, callback) {
          var output = '';
          for (var i = 0; i < children.length; i++) output += callback(children[i], i, children, callback) || '';
          return output;
        }
        var cssjanus$1 = {
          exports: {}
        };

        /*!
         * CSSJanus. https://www.mediawiki.org/wiki/CSSJanus
         *
         * Copyright 2014 Trevor Parscal
         * Copyright 2010 Roan Kattouw
         * Copyright 2008 Google Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */

        (function (module, exports$1) {
          var cssjanus;

          /**
           * Create a tokenizer object.
           *
           * This utility class is used by CSSJanus to protect strings by replacing them temporarily with
           * tokens and later transforming them back.
           *
           * @class
           * @constructor
           * @param {RegExp} regex Regular expression whose matches to replace by a token
           * @param {string} token Placeholder text
           */
          function Tokenizer(regex, token) {
            var matches = [],
              index = 0;

            /**
             * Add a match.
             *
             * @private
             * @param {string} match Matched string
             * @return {string} Token to leave in the matched string's place
             */
            function tokenizeCallback(match) {
              matches.push(match);
              return token;
            }

            /**
             * Get a match.
             *
             * @private
             * @return {string} Original matched string to restore
             */
            function detokenizeCallback() {
              return matches[index++];
            }
            return {
              /**
               * Replace matching strings with tokens.
               *
               * @param {string} str String to tokenize
               * @return {string} Tokenized string
               */
              tokenize: function tokenize(str) {
                return str.replace(regex, tokenizeCallback);
              },
              /**
               * Restores tokens to their original values.
               *
               * @param {string} str String previously run through tokenize()
               * @return {string} Original string
               */
              detokenize: function detokenize(str) {
                return str.replace(new RegExp('(' + token + ')', 'g'), detokenizeCallback);
              }
            };
          }

          /**
           * Create a CSSJanus object.
           *
           * CSSJanus transforms CSS rules with horizontal relevance so that a left-to-right stylesheet can
           * become a right-to-left stylesheet automatically. Processing can be bypassed for an entire rule
           * or a single property by adding a / * @noflip * / comment above the rule or property.
           *
           * @class
           * @constructor
           */
          function CSSJanus() {
            var
              // Tokens
              temporaryToken = '`TMP`',
              temporaryLtrToken = '`TMPLTR`',
              temporaryRtlToken = '`TMPRTL`',
              noFlipSingleToken = '`NOFLIP_SINGLE`',
              noFlipClassToken = '`NOFLIP_CLASS`',
              commentToken = '`COMMENT`',
              // Patterns
              nonAsciiPattern = '[^\\u0020-\\u007e]',
              unicodePattern = '(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)',
              numPattern = '(?:[0-9]*\\.[0-9]+|[0-9]+)',
              unitPattern = '(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)',
              directionPattern = 'direction\\s*:\\s*',
              urlSpecialCharsPattern = '[!#$%&*-~]',
              validAfterUriCharsPattern = '[\'"]?\\s*',
              nonLetterPattern = '(^|[^a-zA-Z])',
              charsWithinSelectorPattern = '[^\\}]*?',
              noFlipPattern = '\\/\\*\\!?\\s*@noflip\\s*\\*\\/',
              commentPattern = '\\/\\*[^*]*\\*+([^\\/*][^*]*\\*+)*\\/',
              escapePattern = '(?:' + unicodePattern + '|\\\\[^\\r\\n\\f0-9a-f])',
              nmstartPattern = '(?:[_a-z]|' + nonAsciiPattern + '|' + escapePattern + ')',
              nmcharPattern = '(?:[_a-z0-9-]|' + nonAsciiPattern + '|' + escapePattern + ')',
              identPattern = '-?' + nmstartPattern + nmcharPattern + '*',
              quantPattern = numPattern + '(?:\\s*' + unitPattern + '|' + identPattern + ')?',
              signedQuantPattern = '((?:-?' + quantPattern + ')|(?:inherit|auto))',
              signedQuantSimplePattern = '(?:-?' + numPattern + '(?:\\s*' + unitPattern + ')?)',
              mathOperatorsPattern = '(?:\\+|\\-|\\*|\\/)',
              allowedCharsPattern = '(?:\\(|\\)|\\t| )',
              calcEquationPattern = '(?:' + allowedCharsPattern + '|' + signedQuantSimplePattern + '|' + mathOperatorsPattern + '){3,}',
              calcPattern = '(?:calc\\((?:' + calcEquationPattern + ')\\))',
              signedQuantCalcPattern = '((?:-?' + quantPattern + ')|(?:inherit|auto)|' + calcPattern + ')',
              fourNotationQuantPropsPattern = '((?:margin|padding|border-width)\\s*:\\s*)',
              fourNotationColorPropsPattern = '((?:-color|border-style)\\s*:\\s*)',
              colorPattern = '(#?' + nmcharPattern + '+|(?:rgba?|hsla?)\\([ \\d.,%-]+\\))',
              // The use of a lazy match ("*?") may cause a backtrack limit to be exceeded before finding
              // the intended match. This affects 'urlCharsPattern' and 'lookAheadNotOpenBracePattern'.
              // We have not yet found this problem on Node.js, but we have on PHP 7, where it was
              // mitigated by using a possessive quantifier ("*+"), which are not supported in JS.
              // See <https://phabricator.wikimedia.org/T215746#4944830>.
              urlCharsPattern = '(?:' + urlSpecialCharsPattern + '|' + nonAsciiPattern + '|' + escapePattern + ')*?',
              lookAheadNotLetterPattern = '(?![a-zA-Z])',
              lookAheadNotOpenBracePattern = '(?!(' + nmcharPattern + '|\\r?\\n|\\s|#|\\:|\\.|\\,|\\+|>|~|\\(|\\)|\\[|\\]|=|\\*=|~=|\\^=|\'[^\']*\'|"[^"]*"|' + commentToken + ')*?{)',
              lookAheadNotClosingParenPattern = '(?!' + urlCharsPattern + validAfterUriCharsPattern + '\\))',
              lookAheadForClosingParenPattern = '(?=' + urlCharsPattern + validAfterUriCharsPattern + '\\))',
              suffixPattern = '(\\s*(?:!important\\s*)?[;}])',
              // Regular expressions
              temporaryTokenRegExp = /`TMP`/g,
              temporaryLtrTokenRegExp = /`TMPLTR`/g,
              temporaryRtlTokenRegExp = /`TMPRTL`/g,
              commentRegExp = new RegExp(commentPattern, 'gi'),
              noFlipSingleRegExp = new RegExp('(' + noFlipPattern + lookAheadNotOpenBracePattern + '[^;}]+;?)', 'gi'),
              noFlipClassRegExp = new RegExp('(' + noFlipPattern + charsWithinSelectorPattern + '})', 'gi'),
              directionLtrRegExp = new RegExp('(' + directionPattern + ')ltr', 'gi'),
              directionRtlRegExp = new RegExp('(' + directionPattern + ')rtl', 'gi'),
              leftRegExp = new RegExp(nonLetterPattern + '(left)' + lookAheadNotLetterPattern + lookAheadNotClosingParenPattern + lookAheadNotOpenBracePattern, 'gi'),
              rightRegExp = new RegExp(nonLetterPattern + '(right)' + lookAheadNotLetterPattern + lookAheadNotClosingParenPattern + lookAheadNotOpenBracePattern, 'gi'),
              leftInUrlRegExp = new RegExp(nonLetterPattern + '(left)' + lookAheadForClosingParenPattern, 'gi'),
              rightInUrlRegExp = new RegExp(nonLetterPattern + '(right)' + lookAheadForClosingParenPattern, 'gi'),
              ltrDirSelector = /(:dir\( *)ltr( *\))/g,
              rtlDirSelector = /(:dir\( *)rtl( *\))/g,
              ltrInUrlRegExp = new RegExp(nonLetterPattern + '(ltr)' + lookAheadForClosingParenPattern, 'gi'),
              rtlInUrlRegExp = new RegExp(nonLetterPattern + '(rtl)' + lookAheadForClosingParenPattern, 'gi'),
              cursorEastRegExp = new RegExp(nonLetterPattern + '([ns]?)e-resize', 'gi'),
              cursorWestRegExp = new RegExp(nonLetterPattern + '([ns]?)w-resize', 'gi'),
              fourNotationQuantRegExp = new RegExp(fourNotationQuantPropsPattern + signedQuantCalcPattern + '(\\s+)' + signedQuantCalcPattern + '(\\s+)' + signedQuantCalcPattern + '(\\s+)' + signedQuantCalcPattern + suffixPattern, 'gi'),
              fourNotationColorRegExp = new RegExp(fourNotationColorPropsPattern + colorPattern + '(\\s+)' + colorPattern + '(\\s+)' + colorPattern + '(\\s+)' + colorPattern + suffixPattern, 'gi'),
              bgHorizontalPercentageRegExp = new RegExp('(background(?:-position)?\\s*:\\s*(?:[^:;}\\s]+\\s+)*?)(' + quantPattern + ')', 'gi'),
              bgHorizontalPercentageXRegExp = new RegExp('(background-position-x\\s*:\\s*)(-?' + numPattern + '%)', 'gi'),
              // border-radius: <length or percentage>{1,4} [optional: / <length or percentage>{1,4} ]
              borderRadiusRegExp = new RegExp('(border-radius\\s*:\\s*)' + signedQuantPattern + '(?:(?:\\s+' + signedQuantPattern + ')(?:\\s+' + signedQuantPattern + ')?(?:\\s+' + signedQuantPattern + ')?)?' + '(?:(?:(?:\\s*\\/\\s*)' + signedQuantPattern + ')(?:\\s+' + signedQuantPattern + ')?(?:\\s+' + signedQuantPattern + ')?(?:\\s+' + signedQuantPattern + ')?)?' + suffixPattern, 'gi'),
              boxShadowRegExp = new RegExp('(box-shadow\\s*:\\s*(?:inset\\s*)?)' + signedQuantPattern, 'gi'),
              textShadow1RegExp = new RegExp('(text-shadow\\s*:\\s*)' + signedQuantPattern + '(\\s*)' + colorPattern, 'gi'),
              textShadow2RegExp = new RegExp('(text-shadow\\s*:\\s*)' + colorPattern + '(\\s*)' + signedQuantPattern, 'gi'),
              textShadow3RegExp = new RegExp('(text-shadow\\s*:\\s*)' + signedQuantPattern, 'gi'),
              translateXRegExp = new RegExp('(transform\\s*:[^;}]*)(translateX\\s*\\(\\s*)' + signedQuantPattern + '(\\s*\\))', 'gi'),
              translateRegExp = new RegExp('(transform\\s*:[^;}]*)(translate\\s*\\(\\s*)' + signedQuantPattern + '((?:\\s*,\\s*' + signedQuantPattern + '){0,2}\\s*\\))', 'gi');

            /**
             * Invert the horizontal value of a background position property.
             *
             * @private
             * @param {string} match Matched property
             * @param {string} pre Text before value
             * @param {string} value Horizontal value
             * @return {string} Inverted property
             */
            function calculateNewBackgroundPosition(match, pre, value) {
              var idx, len;
              if (value.slice(-1) === '%') {
                idx = value.indexOf('.');
                if (idx !== -1) {
                  // Two off, one for the "%" at the end, one for the dot itself
                  len = value.length - idx - 2;
                  value = 100 - parseFloat(value);
                  value = value.toFixed(len) + '%';
                } else {
                  value = 100 - parseFloat(value) + '%';
                }
              }
              return pre + value;
            }

            /**
             * Invert a set of border radius values.
             *
             * @private
             * @param {Array} values Matched values
             * @return {string} Inverted values
             */
            function flipBorderRadiusValues(values) {
              switch (values.length) {
                case 4:
                  values = [values[1], values[0], values[3], values[2]];
                  break;
                case 3:
                  values = [values[1], values[0], values[1], values[2]];
                  break;
                case 2:
                  values = [values[1], values[0]];
                  break;
                case 1:
                  values = [values[0]];
                  break;
              }
              return values.join(' ');
            }

            /**
             * Invert a set of border radius values.
             *
             * @private
             * @param {string} match Matched property
             * @param {string} pre Text before value
             * @param {string} [firstGroup1]
             * @param {string} [firstGroup2]
             * @param {string} [firstGroup3]
             * @param {string} [firstGroup4]
             * @param {string} [secondGroup1]
             * @param {string} [secondGroup2]
             * @param {string} [secondGroup3]
             * @param {string} [secondGroup4]
             * @param {string} [post] Text after value
             * @return {string} Inverted property
             */
            function calculateNewBorderRadius(match, pre) {
              var values,
                args = [].slice.call(arguments),
                firstGroup = args.slice(2, 6).filter(function (val) {
                  return val;
                }),
                secondGroup = args.slice(6, 10).filter(function (val) {
                  return val;
                }),
                post = args[10] || '';
              if (secondGroup.length) {
                values = flipBorderRadiusValues(firstGroup) + ' / ' + flipBorderRadiusValues(secondGroup);
              } else {
                values = flipBorderRadiusValues(firstGroup);
              }
              return pre + values + post;
            }

            /**
             * Flip the sign of a CSS value, possibly with a unit.
             *
             * We can't just negate the value with unary minus due to the units.
             *
             * @private
             * @param {string} value
             * @return {string}
             */
            function flipSign(value) {
              if (parseFloat(value) === 0) {
                // Don't mangle zeroes
                return value;
              }
              if (value[0] === '-') {
                return value.slice(1);
              }
              return '-' + value;
            }

            /**
             * @private
             * @param {string} match
             * @param {string} property
             * @param {string} offset
             * @return {string}
             */
            function calculateNewShadow(match, property, offset) {
              return property + flipSign(offset);
            }

            /**
             * @private
             * @param {string} match
             * @param {string} property
             * @param {string} prefix
             * @param {string} offset
             * @param {string} suffix
             * @return {string}
             */
            function calculateNewTranslate(match, property, prefix, offset, suffix) {
              return property + prefix + flipSign(offset) + suffix;
            }

            /**
             * @private
             * @param {string} match
             * @param {string} property
             * @param {string} color
             * @param {string} space
             * @param {string} offset
             * @return {string}
             */
            function calculateNewFourTextShadow(match, property, color, space, offset) {
              return property + color + space + flipSign(offset);
            }
            return {
              /**
               * Transform a left-to-right stylesheet to right-to-left.
               *
               * @param {string} css Stylesheet to transform
               * @param {Object} options Options
               * @param {boolean} [options.transformDirInUrl=false] Transform directions in URLs
               * (e.g. 'ltr', 'rtl')
               * @param {boolean} [options.transformEdgeInUrl=false] Transform edges in URLs
               * (e.g. 'left', 'right')
               * @return {string} Transformed stylesheet
               */
              'transform': function transform(css, options) {
                // eslint-disable-line quote-props
                // Use single quotes in this object literal key for closure compiler.
                // Tokenizers
                var noFlipSingleTokenizer = new Tokenizer(noFlipSingleRegExp, noFlipSingleToken),
                  noFlipClassTokenizer = new Tokenizer(noFlipClassRegExp, noFlipClassToken),
                  commentTokenizer = new Tokenizer(commentRegExp, commentToken);

                // Tokenize
                css = commentTokenizer.tokenize(noFlipClassTokenizer.tokenize(noFlipSingleTokenizer.tokenize(
                // We wrap tokens in ` , not ~ like the original implementation does.
                // This was done because ` is not a legal character in CSS and can only
                // occur in URLs, where we escape it to %60 before inserting our tokens.
                css.replace('`', '%60'))));

                // Transform URLs
                if (options.transformDirInUrl) {
                  // Replace 'ltr' with 'rtl' and vice versa in background URLs
                  css = css.replace(ltrDirSelector, '$1' + temporaryLtrToken + '$2').replace(rtlDirSelector, '$1' + temporaryRtlToken + '$2').replace(ltrInUrlRegExp, '$1' + temporaryToken).replace(rtlInUrlRegExp, '$1ltr').replace(temporaryTokenRegExp, 'rtl').replace(temporaryLtrTokenRegExp, 'ltr').replace(temporaryRtlTokenRegExp, 'rtl');
                }
                if (options.transformEdgeInUrl) {
                  // Replace 'left' with 'right' and vice versa in background URLs
                  css = css.replace(leftInUrlRegExp, '$1' + temporaryToken).replace(rightInUrlRegExp, '$1left').replace(temporaryTokenRegExp, 'right');
                }

                // Transform rules
                css = css
                // Replace direction: ltr; with direction: rtl; and vice versa.
                .replace(directionLtrRegExp, '$1' + temporaryToken).replace(directionRtlRegExp, '$1ltr').replace(temporaryTokenRegExp, 'rtl')
                // Flip rules like left: , padding-right: , etc.
                .replace(leftRegExp, '$1' + temporaryToken).replace(rightRegExp, '$1left').replace(temporaryTokenRegExp, 'right')
                // Flip East and West in rules like cursor: nw-resize;
                .replace(cursorEastRegExp, '$1$2' + temporaryToken).replace(cursorWestRegExp, '$1$2e-resize').replace(temporaryTokenRegExp, 'w-resize')
                // Border radius
                .replace(borderRadiusRegExp, calculateNewBorderRadius)
                // Shadows
                .replace(boxShadowRegExp, calculateNewShadow).replace(textShadow1RegExp, calculateNewFourTextShadow).replace(textShadow2RegExp, calculateNewFourTextShadow).replace(textShadow3RegExp, calculateNewShadow)
                // Translate
                .replace(translateXRegExp, calculateNewTranslate).replace(translateRegExp, calculateNewTranslate)
                // Swap the second and fourth parts in four-part notation rules
                // like padding: 1px 2px 3px 4px;
                .replace(fourNotationQuantRegExp, '$1$2$3$8$5$6$7$4$9').replace(fourNotationColorRegExp, '$1$2$3$8$5$6$7$4$9')
                // Flip horizontal background percentages
                .replace(bgHorizontalPercentageRegExp, calculateNewBackgroundPosition).replace(bgHorizontalPercentageXRegExp, calculateNewBackgroundPosition);

                // Detokenize
                css = noFlipSingleTokenizer.detokenize(noFlipClassTokenizer.detokenize(commentTokenizer.detokenize(css)));
                return css;
              }
            };
          }

          /* Initialization */

          cssjanus = new CSSJanus();

          /* Exports */

          if (module.exports) {
            /**
             * Transform a left-to-right stylesheet to right-to-left.
             *
             * This function is a static wrapper around the transform method of an instance of CSSJanus.
             *
             * @param {string} css Stylesheet to transform
             * @param {Object|boolean} [options] Options object, or transformDirInUrl option (back-compat)
             * @param {boolean} [options.transformDirInUrl=false] Transform directions in URLs
             * (e.g. 'ltr', 'rtl')
             * @param {boolean} [options.transformEdgeInUrl=false] Transform edges in URLs
             * (e.g. 'left', 'right')
             * @param {boolean} [transformEdgeInUrl] Back-compat parameter
             * @return {string} Transformed stylesheet
             */
            exports$1.transform = function (css, options, transformEdgeInUrl) {
              var norm;
              if (typeof options === 'object') {
                norm = options;
              } else {
                norm = {};
                if (typeof options === 'boolean') {
                  norm.transformDirInUrl = options;
                }
                if (typeof transformEdgeInUrl === 'boolean') {
                  norm.transformEdgeInUrl = transformEdgeInUrl;
                }
              }
              return cssjanus.transform(css, norm);
            };
          } else if (typeof window !== 'undefined') {
            /* global window */
            // Allow cssjanus to be used in a browser.
            // eslint-disable-next-line dot-notation
            window['cssjanus'] = cssjanus;
          }
        })(cssjanus$1, cssjanus$1.exports);
        var cssjanusExports = cssjanus$1.exports;
        const cssjanus = /*@__PURE__*/getDefaultExportFromCjs(cssjanusExports);
        function stringifyPreserveComments(element, index, children) {
          switch (element.type) {
            case IMPORT:
            case DECLARATION:
            case COMMENT:
              return element.return = element.return || element.value;
            case RULESET:
              {
                element.value = Array.isArray(element.props) ? element.props.join(',') : element.props;
                if (Array.isArray(element.children)) {
                  element.children.forEach(function (x) {
                    if (x.type === COMMENT) x.children = x.value;
                  });
                }
              }
          }
          var serializedChildren = serialize(Array.prototype.concat(element.children), stringifyPreserveComments);
          return strlen(serializedChildren) ? element.return = element.value + '{' + serializedChildren + '}' : '';
        }
        function stylisRTLPlugin(element, index, children, callback) {
          if (element.type === KEYFRAMES || element.type === SUPPORTS || element.type === RULESET && (!element.parent || element.parent.type === MEDIA || element.parent.type === RULESET)) {
            var stringified = cssjanus.transform(stringifyPreserveComments(element));
            element.children = stringified ? compile(stringified)[0].children : [];
            element.return = '';
          }
        }
        // stable identifier that will not be dropped by minification unless the whole module
        // is unused
        Object.defineProperty(stylisRTLPlugin, 'name', {
          value: 'stylisRTLPlugin'
        });
        var dayjs_min = {
          exports: {}
        };
        var hasRequiredDayjs_min;
        function requireDayjs_min() {
          if (hasRequiredDayjs_min) return dayjs_min.exports;
          hasRequiredDayjs_min = 1;
          (function (module, exports$1) {
            !function (t, e) {
              module.exports = e();
            }(commonjsGlobal, function () {
              var t = 1e3,
                e = 6e4,
                n = 36e5,
                r = "millisecond",
                i = "second",
                s = "minute",
                u = "hour",
                a = "day",
                o = "week",
                c = "month",
                f = "quarter",
                h = "year",
                d = "date",
                l = "Invalid Date",
                $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                M = {
                  name: "en",
                  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                  ordinal: function ordinal(t) {
                    var e = ["th", "st", "nd", "rd"],
                      n = t % 100;
                    return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
                  }
                },
                m = function m(t, e, n) {
                  var r = String(t);
                  return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
                },
                v = {
                  s: m,
                  z: function z(t) {
                    var e = -t.utcOffset(),
                      n = Math.abs(e),
                      r = Math.floor(n / 60),
                      i = n % 60;
                    return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
                  },
                  m: function t(e, n) {
                    if (e.date() < n.date()) return -t(n, e);
                    var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
                      i = e.clone().add(r, c),
                      s = n - i < 0,
                      u = e.clone().add(r + (s ? -1 : 1), c);
                    return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
                  },
                  a: function a(t) {
                    return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
                  },
                  p: function p(t) {
                    return {
                      M: c,
                      y: h,
                      w: o,
                      d: a,
                      D: d,
                      h: u,
                      m: s,
                      s: i,
                      ms: r,
                      Q: f
                    }[t] || String(t || "").toLowerCase().replace(/s$/, "");
                  },
                  u: function u(t) {
                    return void 0 === t;
                  }
                },
                g = "en",
                D = {};
              D[g] = M;
              var p = "$isDayjsObject",
                S = function S(t) {
                  return t instanceof _ || !(!t || !t[p]);
                },
                w = function t(e, n, r) {
                  var i;
                  if (!e) return g;
                  if ("string" == typeof e) {
                    var s = e.toLowerCase();
                    D[s] && (i = s), n && (D[s] = n, i = s);
                    var u = e.split("-");
                    if (!i && u.length > 1) return t(u[0]);
                  } else {
                    var a = e.name;
                    D[a] = e, i = a;
                  }
                  return !r && i && (g = i), i || !r && g;
                },
                O = function O(t, e) {
                  if (S(t)) return t.clone();
                  var n = "object" == typeof e ? e : {};
                  return n.date = t, n.args = arguments, new _(n);
                },
                b = v;
              b.l = w, b.i = S, b.w = function (t, e) {
                return O(t, {
                  locale: e.$L,
                  utc: e.$u,
                  x: e.$x,
                  $offset: e.$offset
                });
              };
              var _ = function () {
                  function M(t) {
                    this.$L = w(t.locale, null, true), this.parse(t), this.$x = this.$x || t.x || {}, this[p] = true;
                  }
                  var m = M.prototype;
                  return m.parse = function (t) {
                    this.$d = function (t) {
                      var e = t.date,
                        n = t.utc;
                      if (null === e) return new Date(NaN);
                      if (b.u(e)) return new Date();
                      if (e instanceof Date) return new Date(e);
                      if ("string" == typeof e && !/Z$/i.test(e)) {
                        var r = e.match($);
                        if (r) {
                          var i = r[2] - 1 || 0,
                            s = (r[7] || "0").substring(0, 3);
                          return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
                        }
                      }
                      return new Date(e);
                    }(t), this.init();
                  }, m.init = function () {
                    var t = this.$d;
                    this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
                  }, m.$utils = function () {
                    return b;
                  }, m.isValid = function () {
                    return !(this.$d.toString() === l);
                  }, m.isSame = function (t, e) {
                    var n = O(t);
                    return this.startOf(e) <= n && n <= this.endOf(e);
                  }, m.isAfter = function (t, e) {
                    return O(t) < this.startOf(e);
                  }, m.isBefore = function (t, e) {
                    return this.endOf(e) < O(t);
                  }, m.$g = function (t, e, n) {
                    return b.u(t) ? this[e] : this.set(n, t);
                  }, m.unix = function () {
                    return Math.floor(this.valueOf() / 1e3);
                  }, m.valueOf = function () {
                    return this.$d.getTime();
                  }, m.startOf = function (t, e) {
                    var n = this,
                      r = !!b.u(e) || e,
                      f = b.p(t),
                      l = function l(t, e) {
                        var i = b.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
                        return r ? i : i.endOf(a);
                      },
                      $ = function $(t, e) {
                        return b.w(n.toDate()[t].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n);
                      },
                      y = this.$W,
                      M = this.$M,
                      m = this.$D,
                      v = "set" + (this.$u ? "UTC" : "");
                    switch (f) {
                      case h:
                        return r ? l(1, 0) : l(31, 11);
                      case c:
                        return r ? l(1, M) : l(0, M + 1);
                      case o:
                        var g = this.$locale().weekStart || 0,
                          D = (y < g ? y + 7 : y) - g;
                        return l(r ? m - D : m + (6 - D), M);
                      case a:
                      case d:
                        return $(v + "Hours", 0);
                      case u:
                        return $(v + "Minutes", 1);
                      case s:
                        return $(v + "Seconds", 2);
                      case i:
                        return $(v + "Milliseconds", 3);
                      default:
                        return this.clone();
                    }
                  }, m.endOf = function (t) {
                    return this.startOf(t, false);
                  }, m.$set = function (t, e) {
                    var n,
                      o = b.p(t),
                      f = "set" + (this.$u ? "UTC" : ""),
                      l = (n = {}, n[a] = f + "Date", n[d] = f + "Date", n[c] = f + "Month", n[h] = f + "FullYear", n[u] = f + "Hours", n[s] = f + "Minutes", n[i] = f + "Seconds", n[r] = f + "Milliseconds", n)[o],
                      $ = o === a ? this.$D + (e - this.$W) : e;
                    if (o === c || o === h) {
                      var y = this.clone().set(d, 1);
                      y.$d[l]($), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
                    } else l && this.$d[l]($);
                    return this.init(), this;
                  }, m.set = function (t, e) {
                    return this.clone().$set(t, e);
                  }, m.get = function (t) {
                    return this[b.p(t)]();
                  }, m.add = function (r, f) {
                    var d,
                      l = this;
                    r = Number(r);
                    var $ = b.p(f),
                      y = function y(t) {
                        var e = O(l);
                        return b.w(e.date(e.date() + Math.round(t * r)), l);
                      };
                    if ($ === c) return this.set(c, this.$M + r);
                    if ($ === h) return this.set(h, this.$y + r);
                    if ($ === a) return y(1);
                    if ($ === o) return y(7);
                    var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[$] || 1,
                      m = this.$d.getTime() + r * M;
                    return b.w(m, this);
                  }, m.subtract = function (t, e) {
                    return this.add(-1 * t, e);
                  }, m.format = function (t) {
                    var e = this,
                      n = this.$locale();
                    if (!this.isValid()) return n.invalidDate || l;
                    var r = t || "YYYY-MM-DDTHH:mm:ssZ",
                      i = b.z(this),
                      s = this.$H,
                      u = this.$m,
                      a = this.$M,
                      o = n.weekdays,
                      c = n.months,
                      f = n.meridiem,
                      h = function h(t, n, i, s) {
                        return t && (t[n] || t(e, r)) || i[n].slice(0, s);
                      },
                      d = function d(t) {
                        return b.s(s % 12 || 12, t, "0");
                      },
                      $ = f || function (t, e, n) {
                        var r = t < 12 ? "AM" : "PM";
                        return n ? r.toLowerCase() : r;
                      };
                    return r.replace(y, function (t, r) {
                      return r || function (t) {
                        switch (t) {
                          case "YY":
                            return String(e.$y).slice(-2);
                          case "YYYY":
                            return b.s(e.$y, 4, "0");
                          case "M":
                            return a + 1;
                          case "MM":
                            return b.s(a + 1, 2, "0");
                          case "MMM":
                            return h(n.monthsShort, a, c, 3);
                          case "MMMM":
                            return h(c, a);
                          case "D":
                            return e.$D;
                          case "DD":
                            return b.s(e.$D, 2, "0");
                          case "d":
                            return String(e.$W);
                          case "dd":
                            return h(n.weekdaysMin, e.$W, o, 2);
                          case "ddd":
                            return h(n.weekdaysShort, e.$W, o, 3);
                          case "dddd":
                            return o[e.$W];
                          case "H":
                            return String(s);
                          case "HH":
                            return b.s(s, 2, "0");
                          case "h":
                            return d(1);
                          case "hh":
                            return d(2);
                          case "a":
                            return $(s, u, true);
                          case "A":
                            return $(s, u, false);
                          case "m":
                            return String(u);
                          case "mm":
                            return b.s(u, 2, "0");
                          case "s":
                            return String(e.$s);
                          case "ss":
                            return b.s(e.$s, 2, "0");
                          case "SSS":
                            return b.s(e.$ms, 3, "0");
                          case "Z":
                            return i;
                        }
                        return null;
                      }(t) || i.replace(":", "");
                    });
                  }, m.utcOffset = function () {
                    return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
                  }, m.diff = function (r, d, l) {
                    var $,
                      y = this,
                      M = b.p(d),
                      m = O(r),
                      v = (m.utcOffset() - this.utcOffset()) * e,
                      g = this - m,
                      D = function D() {
                        return b.m(y, m);
                      };
                    switch (M) {
                      case h:
                        $ = D() / 12;
                        break;
                      case c:
                        $ = D();
                        break;
                      case f:
                        $ = D() / 3;
                        break;
                      case o:
                        $ = (g - v) / 6048e5;
                        break;
                      case a:
                        $ = (g - v) / 864e5;
                        break;
                      case u:
                        $ = g / n;
                        break;
                      case s:
                        $ = g / e;
                        break;
                      case i:
                        $ = g / t;
                        break;
                      default:
                        $ = g;
                    }
                    return l ? $ : b.a($);
                  }, m.daysInMonth = function () {
                    return this.endOf(c).$D;
                  }, m.$locale = function () {
                    return D[this.$L];
                  }, m.locale = function (t, e) {
                    if (!t) return this.$L;
                    var n = this.clone(),
                      r = w(t, e, true);
                    return r && (n.$L = r), n;
                  }, m.clone = function () {
                    return b.w(this.$d, this);
                  }, m.toDate = function () {
                    return new Date(this.valueOf());
                  }, m.toJSON = function () {
                    return this.isValid() ? this.toISOString() : null;
                  }, m.toISOString = function () {
                    return this.$d.toISOString();
                  }, m.toString = function () {
                    return this.$d.toUTCString();
                  }, M;
                }(),
                k = _.prototype;
              return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach(function (t) {
                k[t[1]] = function (e) {
                  return this.$g(e, t[0], t[1]);
                };
              }), O.extend = function (t, e) {
                return t.$i || (t(e, _, O), t.$i = true), O;
              }, O.locale = w, O.isDayjs = S, O.unix = function (t) {
                return O(1e3 * t);
              }, O.en = D[g], O.Ls = D, O.p = {}, O;
            });
          })(dayjs_min);
          return dayjs_min.exports;
        }
        var dayjs_minExports = requireDayjs_min();
        const dayjs = exports("p", /*@__PURE__*/getDefaultExportFromCjs(dayjs_minExports));
        var ar = {
          exports: {}
        };
        (function (module, exports$1) {
          !function (e, t) {
            module.exports = t(requireDayjs_min());
          }(commonjsGlobal, function (e) {
            function t(e) {
              return e && "object" == typeof e && "default" in e ? e : {
                default: e
              };
            }
            var n = t(e),
              r = "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
              d = {
                1: "١",
                2: "٢",
                3: "٣",
                4: "٤",
                5: "٥",
                6: "٦",
                7: "٧",
                8: "٨",
                9: "٩",
                0: "٠"
              },
              _ = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
              },
              o = /[١٢٣٤٥٦٧٨٩٠]/g,
              i = /،/g,
              a = /\d/g,
              s = /,/g,
              u = {
                name: "ar",
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                months: r,
                monthsShort: r,
                weekStart: 6,
                meridiem: function meridiem(e) {
                  return e > 12 ? "م" : "ص";
                },
                relativeTime: {
                  future: "بعد %s",
                  past: "منذ %s",
                  s: "ثانية واحدة",
                  m: "دقيقة واحدة",
                  mm: "%d دقائق",
                  h: "ساعة واحدة",
                  hh: "%d ساعات",
                  d: "يوم واحد",
                  dd: "%d أيام",
                  M: "شهر واحد",
                  MM: "%d أشهر",
                  y: "عام واحد",
                  yy: "%d أعوام"
                },
                preparse: function preparse(e) {
                  return e.replace(o, function (e) {
                    return _[e];
                  }).replace(i, ",");
                },
                postformat: function postformat(e) {
                  return e.replace(a, function (e) {
                    return d[e];
                  }).replace(s, "،");
                },
                ordinal: function ordinal(e) {
                  return e;
                },
                formats: {
                  LT: "HH:mm",
                  LTS: "HH:mm:ss",
                  L: "D/‏M/‏YYYY",
                  LL: "D MMMM YYYY",
                  LLL: "D MMMM YYYY HH:mm",
                  LLLL: "dddd D MMMM YYYY HH:mm"
                }
              };
            return n.default.locale(u, null, true), u;
          });
        })(ar);
        var de = {
          exports: {}
        };
        (function (module, exports$1) {
          !function (e, n) {
            module.exports = n(requireDayjs_min());
          }(commonjsGlobal, function (e) {
            function n(e) {
              return e && "object" == typeof e && "default" in e ? e : {
                default: e
              };
            }
            var t = n(e),
              a = {
                s: "ein paar Sekunden",
                m: ["eine Minute", "einer Minute"],
                mm: "%d Minuten",
                h: ["eine Stunde", "einer Stunde"],
                hh: "%d Stunden",
                d: ["ein Tag", "einem Tag"],
                dd: ["%d Tage", "%d Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: ["%d Monate", "%d Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: ["%d Jahre", "%d Jahren"]
              };
            function i(e, n, t) {
              var i = a[t];
              return Array.isArray(i) && (i = i[n ? 0 : 1]), i.replace("%d", e);
            }
            var r = {
              name: "de",
              weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
              weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
              weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
              months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
              monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),
              ordinal: function ordinal(e) {
                return e + ".";
              },
              weekStart: 1,
              yearStart: 4,
              formats: {
                LTS: "HH:mm:ss",
                LT: "HH:mm",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
              },
              relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: i,
                m: i,
                mm: i,
                h: i,
                hh: i,
                d: i,
                dd: i,
                M: i,
                MM: i,
                y: i,
                yy: i
              }
            };
            return t.default.locale(r, null, true), r;
          });
        })(de);
        var es = {
          exports: {}
        };
        (function (module, exports$1) {
          !function (e, o) {
            module.exports = o(requireDayjs_min());
          }(commonjsGlobal, function (e) {
            function o(e) {
              return e && "object" == typeof e && "default" in e ? e : {
                default: e
              };
            }
            var s = o(e),
              d = {
                name: "es",
                monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
                weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                weekStart: 1,
                formats: {
                  LT: "H:mm",
                  LTS: "H:mm:ss",
                  L: "DD/MM/YYYY",
                  LL: "D [de] MMMM [de] YYYY",
                  LLL: "D [de] MMMM [de] YYYY H:mm",
                  LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                },
                relativeTime: {
                  future: "en %s",
                  past: "hace %s",
                  s: "unos segundos",
                  m: "un minuto",
                  mm: "%d minutos",
                  h: "una hora",
                  hh: "%d horas",
                  d: "un día",
                  dd: "%d días",
                  M: "un mes",
                  MM: "%d meses",
                  y: "un año",
                  yy: "%d años"
                },
                ordinal: function ordinal(e) {
                  return e + "º";
                }
              };
            return s.default.locale(d, null, true), d;
          });
        })(es);
        var pt = {
          exports: {}
        };
        (function (module, exports$1) {
          !function (e, a) {
            module.exports = a(requireDayjs_min());
          }(commonjsGlobal, function (e) {
            function a(e) {
              return e && "object" == typeof e && "default" in e ? e : {
                default: e
              };
            }
            var o = a(e),
              t = {
                name: "pt",
                weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),
                weekdaysShort: "dom_seg_ter_qua_qui_sex_sab".split("_"),
                weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sa".split("_"),
                months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
                monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
                ordinal: function ordinal(e) {
                  return e + "º";
                },
                weekStart: 1,
                yearStart: 4,
                formats: {
                  LT: "HH:mm",
                  LTS: "HH:mm:ss",
                  L: "DD/MM/YYYY",
                  LL: "D [de] MMMM [de] YYYY",
                  LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                  LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
                },
                relativeTime: {
                  future: "em %s",
                  past: "há %s",
                  s: "alguns segundos",
                  m: "um minuto",
                  mm: "%d minutos",
                  h: "uma hora",
                  hh: "%d horas",
                  d: "um dia",
                  dd: "%d dias",
                  M: "um mês",
                  MM: "%d meses",
                  y: "um ano",
                  yy: "%d anos"
                }
              };
            return o.default.locale(t, null, true), t;
          });
        })(pt);
        var fr = {
          exports: {}
        };
        (function (module, exports$1) {
          !function (e, n) {
            module.exports = n(requireDayjs_min());
          }(commonjsGlobal, function (e) {
            function n(e) {
              return e && "object" == typeof e && "default" in e ? e : {
                default: e
              };
            }
            var t = n(e),
              i = {
                name: "fr",
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
                months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                weekStart: 1,
                yearStart: 4,
                formats: {
                  LT: "HH:mm",
                  LTS: "HH:mm:ss",
                  L: "DD/MM/YYYY",
                  LL: "D MMMM YYYY",
                  LLL: "D MMMM YYYY HH:mm",
                  LLLL: "dddd D MMMM YYYY HH:mm"
                },
                relativeTime: {
                  future: "dans %s",
                  past: "il y a %s",
                  s: "quelques secondes",
                  m: "une minute",
                  mm: "%d minutes",
                  h: "une heure",
                  hh: "%d heures",
                  d: "un jour",
                  dd: "%d jours",
                  M: "un mois",
                  MM: "%d mois",
                  y: "un an",
                  yy: "%d ans"
                },
                ordinal: function ordinal(e) {
                  return "" + e + (1 === e ? "er" : "");
                }
              };
            return t.default.locale(i, null, true), i;
          });
        })(fr);
        var nl = {
          exports: {}
        };
        (function (module, exports$1) {
          !function (e, a) {
            module.exports = a(requireDayjs_min());
          }(commonjsGlobal, function (e) {
            function a(e) {
              return e && "object" == typeof e && "default" in e ? e : {
                default: e
              };
            }
            var d = a(e),
              n = {
                name: "nl",
                weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
                months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                monthsShort: "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
                ordinal: function ordinal(e) {
                  return "[" + e + (1 === e || 8 === e || e >= 20 ? "ste" : "de") + "]";
                },
                weekStart: 1,
                yearStart: 4,
                formats: {
                  LT: "HH:mm",
                  LTS: "HH:mm:ss",
                  L: "DD-MM-YYYY",
                  LL: "D MMMM YYYY",
                  LLL: "D MMMM YYYY HH:mm",
                  LLLL: "dddd D MMMM YYYY HH:mm"
                },
                relativeTime: {
                  future: "over %s",
                  past: "%s geleden",
                  s: "een paar seconden",
                  m: "een minuut",
                  mm: "%d minuten",
                  h: "een uur",
                  hh: "%d uur",
                  d: "een dag",
                  dd: "%d dagen",
                  M: "een maand",
                  MM: "%d maanden",
                  y: "een jaar",
                  yy: "%d jaar"
                }
              };
            return d.default.locale(n, null, true), n;
          });
        })(nl);
        const Android = reactExports.lazy(() => __vitePreload(() => module.import('./Android-legacy-Csf5qFR4.js').then(n => n.A), false ? __VITE_PRELOAD__ : void 0));
        const isRunContext = window.location.pathname.includes("preview-survey") || window.location.pathname.includes("run-survey");
        const getInitialNamespace = () => {
          return "run";
        };
        if (!instance.isInitialized) {
          const initialNS = getInitialNamespace();
          const i18nConfig = {
            fallbackLng: "en",
            // Fall back to English to prevent showing raw translation keys
            ns: initialNS ? [initialNS] : [],
            defaultNS: initialNS || "run",
            partialBundledLanguages: true,
            interpolation: {
              escapeValue: false
            },
            backend: {
              loadPath: "/locales/{{lng}}/{{ns}}.json"
            },
            supportedLngs: ["en", "ar", "de", "es", "pt", "fr", "nl"],
            load: "currentOnly"
          };
          if (isRunContext) {
            i18nConfig.lng = "en";
          } else {
            i18nConfig.detection = {
              order: ["localStorage", "navigator"],
              lookupLocalStorage: "lang",
              // Use "lang" key instead of default "i18nextLng"
              caches: ["localStorage"],
              cacheUserLanguage: false
              // Don't auto-save to localStorage (app handles this)
            };
          }
          instance.use(Backend).use(Browser).init(i18nConfig);
        }
        function App() {
          {
            return /* @__PURE__ */jsx(I18nextProvider, {
              i18n: instance,
              children: /* @__PURE__ */jsx(reactExports.Suspense, {
                fallback: /* @__PURE__ */jsx(LoadingDots, {
                  fullHeight: true
                }),
                children: /* @__PURE__ */jsx(Android, {})
              })
            });
          }
        }
        const container = document.getElementById("root");
        const root = createRoot(container);
        root.render(/* @__PURE__ */jsx(BrowserRouter, {
          children: /* @__PURE__ */jsx(App, {})
        }));
        unregister();
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-CoMmlwbr.js.map
