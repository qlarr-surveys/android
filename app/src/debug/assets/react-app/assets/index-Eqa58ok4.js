const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Android-D_6dlUuh.js","assets/vendor-BxDgTFXe.js","assets/redux-CLa1pDoQ.js","assets/i18n-No79Kq9Z.js","assets/mui-D3o-L0Jn.js","assets/editor-DK7jwn5J.js","assets/dnd-BTRdTaTs.js","assets/charts-wwscgYhh.js","assets/Android-CP-ygKtT.css"])))=>i.map(i=>d[i]);
function __vite_legacy_guard() {
  import.meta.url;
  import("_").catch(() => 1);
  (async function* () {
  })().next();
}
;
import { h as hasOwn, j as jsxRuntimeExports, E as Emotion$1, c as createEmotionProps, u as useTheme, B as Box } from "./mui-D3o-L0Jn.js";
import { c as reactDomExports, g as getDefaultExportFromCjs, d as commonjsGlobal, r as reactExports, B as BrowserRouter } from "./vendor-BxDgTFXe.js";
import { a as __vitePreload, i as instance, B as Backend, b as Browser, I as I18nextProvider } from "./i18n-No79Kq9Z.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node2 of mutation.addedNodes) {
        if (node2.tagName === "LINK" && node2.rel === "modulepreload")
          processPreload(node2);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
var Fragment = jsxRuntimeExports.Fragment;
var jsx = function jsx2(type, props, key) {
  if (!hasOwn.call(props, "css")) {
    return jsxRuntimeExports.jsx(type, props, key);
  }
  return jsxRuntimeExports.jsx(Emotion$1, createEmotionProps(type, props), key);
};
var jsxs = function jsxs2(type, props, key) {
  if (!hasOwn.call(props, "css")) {
    return jsxRuntimeExports.jsxs(type, props, key);
  }
  return jsxRuntimeExports.jsxs(Emotion$1, createEmotionProps(type, props), key);
};
var createRoot;
var m = reactDomExports;
{
  createRoot = m.createRoot;
  m.hydrateRoot;
}
Boolean(window.location.hostname === "localhost" || // [::1] is the IPv6 localhost address.
window.location.hostname === "[::1]" || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    }).catch((error) => {
      console.error(error.message);
    });
  }
}
const loadingWrapper = "_loadingWrapper_1h4mu_1";
const loadingDots = "_loadingDots_1h4mu_8";
const styles = {
  loadingWrapper,
  loadingDots
};
const LoadingDots = ({
  fullHeight = false
}) => {
  var _a, _b;
  const theme = useTheme();
  return /* @__PURE__ */ jsx(Box, { className: styles.loadingWrapper, style: {
    height: fullHeight ? "50vh" : "auto"
  }, children: /* @__PURE__ */ jsx(Box, { style: {
    background: "radial-gradient(circle closest-side, ".concat((_b = (_a = theme == null ? void 0 : theme.palette) == null ? void 0 : _a.primary) == null ? void 0 : _b.main, " 90%, #0000) 0 / calc(100% / 3) 100% space")
  }, className: styles.loadingDots }) });
};
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var MEDIA = "@media";
var IMPORT = "@import";
var SUPPORTS = "@supports";
var KEYFRAMES = "@keyframes";
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length2) {
  return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search, position2) {
  return value.indexOf(search, position2);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}
function filter(array, pattern) {
  return array.filter(function(value) {
    return !match(value, pattern);
  });
}
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root2, parent, type, props, children, length2, siblings) {
  return { value, root: root2, parent, type, props, children, line, column, length: length2, return: "", siblings };
}
function copy(root2, props) {
  return assign(node("", null, null, "", null, null, 0, root2.siblings), root2, { length: -root2.length }, props);
}
function lift(root2) {
  while (root2.root)
    root2 = copy(root2.root, { children: [root2] });
  append(root2, root2.siblings);
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
  while (!token(peek()))
    next();
  return slice(index, position);
}
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root2, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f", abs(index ? points[index - 1] : 0)) != -1)
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root2, parent, declarations), declarations);
            if ((token(previous || 1) == 5 || token(peek() || 1) == 5) && strlen(characters2) && substr(characters2, -1, void 0) !== " ") characters2 += " ";
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (ampersand == -1) characters2 = replace(characters2, /\f/g, "");
            if (property > 0 && (strlen(characters2) - length2 || variable === 0 && previous === 47))
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1, declarations) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2, declarations), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference = ruleset(characters2, root2, parent, index, offset, rules, points, type, props = [], children = [], length2, rulesets), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse(characters2, root2, reference, reference, props, rulesets, length2, points, children);
              else {
                switch (atrule) {
                  case 99:
                    if (charat(characters2, 3) === 110) break;
                  case 108:
                    if (charat(characters2, 2) === 97) break;
                  default:
                    offset = 0;
                  case 100:
                  case 109:
                  case 115:
                }
                if (offset) parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2, children), children), rules, children, length2, points, rule ? props : children);
                else parse(characters2, reference, reference, reference, [""], children, 0, points, children);
              }
        }
        index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root2, parent, index, offset, rules, points, type, props, children, length2, siblings) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i = 0, j = 0, k = 0; i < index; ++i)
    for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
      if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x])))
        props[k++] = z;
  return node(value, root2, parent, offset === 0 ? RULESET : type, props, children, length2, siblings);
}
function comment(value, root2, parent, siblings) {
  return node(value, root2, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings);
}
function declaration(value, root2, parent, length2, siblings) {
  return node(value, root2, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2, siblings);
}
function serialize(children, callback) {
  var output = "";
  for (var i = 0; i < children.length; i++)
    output += callback(children[i], i, children, callback) || "";
  return output;
}
var cssjanus$1 = { exports: {} };
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
(function(module, exports$1) {
  var cssjanus2;
  function Tokenizer(regex, token2) {
    var matches = [], index = 0;
    function tokenizeCallback(match2) {
      matches.push(match2);
      return token2;
    }
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
      tokenize: function(str) {
        return str.replace(regex, tokenizeCallback);
      },
      /**
       * Restores tokens to their original values.
       *
       * @param {string} str String previously run through tokenize()
       * @return {string} Original string
       */
      detokenize: function(str) {
        return str.replace(new RegExp("(" + token2 + ")", "g"), detokenizeCallback);
      }
    };
  }
  function CSSJanus() {
    var temporaryToken = "`TMP`", temporaryLtrToken = "`TMPLTR`", temporaryRtlToken = "`TMPRTL`", noFlipSingleToken = "`NOFLIP_SINGLE`", noFlipClassToken = "`NOFLIP_CLASS`", commentToken = "`COMMENT`", nonAsciiPattern = "[^\\u0020-\\u007e]", unicodePattern = "(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)", numPattern = "(?:[0-9]*\\.[0-9]+|[0-9]+)", unitPattern = "(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)", directionPattern = "direction\\s*:\\s*", urlSpecialCharsPattern = "[!#$%&*-~]", validAfterUriCharsPattern = "['\"]?\\s*", nonLetterPattern = "(^|[^a-zA-Z])", charsWithinSelectorPattern = "[^\\}]*?", noFlipPattern = "\\/\\*\\!?\\s*@noflip\\s*\\*\\/", commentPattern = "\\/\\*[^*]*\\*+([^\\/*][^*]*\\*+)*\\/", escapePattern = "(?:" + unicodePattern + "|\\\\[^\\r\\n\\f0-9a-f])", nmstartPattern = "(?:[_a-z]|" + nonAsciiPattern + "|" + escapePattern + ")", nmcharPattern = "(?:[_a-z0-9-]|" + nonAsciiPattern + "|" + escapePattern + ")", identPattern = "-?" + nmstartPattern + nmcharPattern + "*", quantPattern = numPattern + "(?:\\s*" + unitPattern + "|" + identPattern + ")?", signedQuantPattern = "((?:-?" + quantPattern + ")|(?:inherit|auto))", signedQuantSimplePattern = "(?:-?" + numPattern + "(?:\\s*" + unitPattern + ")?)", mathOperatorsPattern = "(?:\\+|\\-|\\*|\\/)", allowedCharsPattern = "(?:\\(|\\)|\\t| )", calcEquationPattern = "(?:" + allowedCharsPattern + "|" + signedQuantSimplePattern + "|" + mathOperatorsPattern + "){3,}", calcPattern = "(?:calc\\((?:" + calcEquationPattern + ")\\))", signedQuantCalcPattern = "((?:-?" + quantPattern + ")|(?:inherit|auto)|" + calcPattern + ")", fourNotationQuantPropsPattern = "((?:margin|padding|border-width)\\s*:\\s*)", fourNotationColorPropsPattern = "((?:-color|border-style)\\s*:\\s*)", colorPattern = "(#?" + nmcharPattern + "+|(?:rgba?|hsla?)\\([ \\d.,%-]+\\))", urlCharsPattern = "(?:" + urlSpecialCharsPattern + "|" + nonAsciiPattern + "|" + escapePattern + ")*?", lookAheadNotLetterPattern = "(?![a-zA-Z])", lookAheadNotOpenBracePattern = "(?!(" + nmcharPattern + "|\\r?\\n|\\s|#|\\:|\\.|\\,|\\+|>|~|\\(|\\)|\\[|\\]|=|\\*=|~=|\\^=|'[^']*'|\"[^\"]*\"|" + commentToken + ")*?{)", lookAheadNotClosingParenPattern = "(?!" + urlCharsPattern + validAfterUriCharsPattern + "\\))", lookAheadForClosingParenPattern = "(?=" + urlCharsPattern + validAfterUriCharsPattern + "\\))", suffixPattern = "(\\s*(?:!important\\s*)?[;}])", temporaryTokenRegExp = /`TMP`/g, temporaryLtrTokenRegExp = /`TMPLTR`/g, temporaryRtlTokenRegExp = /`TMPRTL`/g, commentRegExp = new RegExp(commentPattern, "gi"), noFlipSingleRegExp = new RegExp("(" + noFlipPattern + lookAheadNotOpenBracePattern + "[^;}]+;?)", "gi"), noFlipClassRegExp = new RegExp("(" + noFlipPattern + charsWithinSelectorPattern + "})", "gi"), directionLtrRegExp = new RegExp("(" + directionPattern + ")ltr", "gi"), directionRtlRegExp = new RegExp("(" + directionPattern + ")rtl", "gi"), leftRegExp = new RegExp(nonLetterPattern + "(left)" + lookAheadNotLetterPattern + lookAheadNotClosingParenPattern + lookAheadNotOpenBracePattern, "gi"), rightRegExp = new RegExp(nonLetterPattern + "(right)" + lookAheadNotLetterPattern + lookAheadNotClosingParenPattern + lookAheadNotOpenBracePattern, "gi"), leftInUrlRegExp = new RegExp(nonLetterPattern + "(left)" + lookAheadForClosingParenPattern, "gi"), rightInUrlRegExp = new RegExp(nonLetterPattern + "(right)" + lookAheadForClosingParenPattern, "gi"), ltrDirSelector = /(:dir\( *)ltr( *\))/g, rtlDirSelector = /(:dir\( *)rtl( *\))/g, ltrInUrlRegExp = new RegExp(nonLetterPattern + "(ltr)" + lookAheadForClosingParenPattern, "gi"), rtlInUrlRegExp = new RegExp(nonLetterPattern + "(rtl)" + lookAheadForClosingParenPattern, "gi"), cursorEastRegExp = new RegExp(nonLetterPattern + "([ns]?)e-resize", "gi"), cursorWestRegExp = new RegExp(nonLetterPattern + "([ns]?)w-resize", "gi"), fourNotationQuantRegExp = new RegExp(fourNotationQuantPropsPattern + signedQuantCalcPattern + "(\\s+)" + signedQuantCalcPattern + "(\\s+)" + signedQuantCalcPattern + "(\\s+)" + signedQuantCalcPattern + suffixPattern, "gi"), fourNotationColorRegExp = new RegExp(fourNotationColorPropsPattern + colorPattern + "(\\s+)" + colorPattern + "(\\s+)" + colorPattern + "(\\s+)" + colorPattern + suffixPattern, "gi"), bgHorizontalPercentageRegExp = new RegExp("(background(?:-position)?\\s*:\\s*(?:[^:;}\\s]+\\s+)*?)(" + quantPattern + ")", "gi"), bgHorizontalPercentageXRegExp = new RegExp("(background-position-x\\s*:\\s*)(-?" + numPattern + "%)", "gi"), borderRadiusRegExp = new RegExp("(border-radius\\s*:\\s*)" + signedQuantPattern + "(?:(?:\\s+" + signedQuantPattern + ")(?:\\s+" + signedQuantPattern + ")?(?:\\s+" + signedQuantPattern + ")?)?(?:(?:(?:\\s*\\/\\s*)" + signedQuantPattern + ")(?:\\s+" + signedQuantPattern + ")?(?:\\s+" + signedQuantPattern + ")?(?:\\s+" + signedQuantPattern + ")?)?" + suffixPattern, "gi"), boxShadowRegExp = new RegExp("(box-shadow\\s*:\\s*(?:inset\\s*)?)" + signedQuantPattern, "gi"), textShadow1RegExp = new RegExp("(text-shadow\\s*:\\s*)" + signedQuantPattern + "(\\s*)" + colorPattern, "gi"), textShadow2RegExp = new RegExp("(text-shadow\\s*:\\s*)" + colorPattern + "(\\s*)" + signedQuantPattern, "gi"), textShadow3RegExp = new RegExp("(text-shadow\\s*:\\s*)" + signedQuantPattern, "gi"), translateXRegExp = new RegExp("(transform\\s*:[^;}]*)(translateX\\s*\\(\\s*)" + signedQuantPattern + "(\\s*\\))", "gi"), translateRegExp = new RegExp("(transform\\s*:[^;}]*)(translate\\s*\\(\\s*)" + signedQuantPattern + "((?:\\s*,\\s*" + signedQuantPattern + "){0,2}\\s*\\))", "gi");
    function calculateNewBackgroundPosition(match2, pre, value) {
      var idx, len;
      if (value.slice(-1) === "%") {
        idx = value.indexOf(".");
        if (idx !== -1) {
          len = value.length - idx - 2;
          value = 100 - parseFloat(value);
          value = value.toFixed(len) + "%";
        } else {
          value = 100 - parseFloat(value) + "%";
        }
      }
      return pre + value;
    }
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
      return values.join(" ");
    }
    function calculateNewBorderRadius(match2, pre) {
      var values, args = [].slice.call(arguments), firstGroup = args.slice(2, 6).filter(function(val) {
        return val;
      }), secondGroup = args.slice(6, 10).filter(function(val) {
        return val;
      }), post = args[10] || "";
      if (secondGroup.length) {
        values = flipBorderRadiusValues(firstGroup) + " / " + flipBorderRadiusValues(secondGroup);
      } else {
        values = flipBorderRadiusValues(firstGroup);
      }
      return pre + values + post;
    }
    function flipSign(value) {
      if (parseFloat(value) === 0) {
        return value;
      }
      if (value[0] === "-") {
        return value.slice(1);
      }
      return "-" + value;
    }
    function calculateNewShadow(match2, property, offset) {
      return property + flipSign(offset);
    }
    function calculateNewTranslate(match2, property, prefix, offset, suffix) {
      return property + prefix + flipSign(offset) + suffix;
    }
    function calculateNewFourTextShadow(match2, property, color, space, offset) {
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
      "transform": function(css, options) {
        var noFlipSingleTokenizer = new Tokenizer(noFlipSingleRegExp, noFlipSingleToken), noFlipClassTokenizer = new Tokenizer(noFlipClassRegExp, noFlipClassToken), commentTokenizer = new Tokenizer(commentRegExp, commentToken);
        css = commentTokenizer.tokenize(
          noFlipClassTokenizer.tokenize(
            noFlipSingleTokenizer.tokenize(
              // We wrap tokens in ` , not ~ like the original implementation does.
              // This was done because ` is not a legal character in CSS and can only
              // occur in URLs, where we escape it to %60 before inserting our tokens.
              css.replace("`", "%60")
            )
          )
        );
        if (options.transformDirInUrl) {
          css = css.replace(ltrDirSelector, "$1" + temporaryLtrToken + "$2").replace(rtlDirSelector, "$1" + temporaryRtlToken + "$2").replace(ltrInUrlRegExp, "$1" + temporaryToken).replace(rtlInUrlRegExp, "$1ltr").replace(temporaryTokenRegExp, "rtl").replace(temporaryLtrTokenRegExp, "ltr").replace(temporaryRtlTokenRegExp, "rtl");
        }
        if (options.transformEdgeInUrl) {
          css = css.replace(leftInUrlRegExp, "$1" + temporaryToken).replace(rightInUrlRegExp, "$1left").replace(temporaryTokenRegExp, "right");
        }
        css = css.replace(directionLtrRegExp, "$1" + temporaryToken).replace(directionRtlRegExp, "$1ltr").replace(temporaryTokenRegExp, "rtl").replace(leftRegExp, "$1" + temporaryToken).replace(rightRegExp, "$1left").replace(temporaryTokenRegExp, "right").replace(cursorEastRegExp, "$1$2" + temporaryToken).replace(cursorWestRegExp, "$1$2e-resize").replace(temporaryTokenRegExp, "w-resize").replace(borderRadiusRegExp, calculateNewBorderRadius).replace(boxShadowRegExp, calculateNewShadow).replace(textShadow1RegExp, calculateNewFourTextShadow).replace(textShadow2RegExp, calculateNewFourTextShadow).replace(textShadow3RegExp, calculateNewShadow).replace(translateXRegExp, calculateNewTranslate).replace(translateRegExp, calculateNewTranslate).replace(fourNotationQuantRegExp, "$1$2$3$8$5$6$7$4$9").replace(fourNotationColorRegExp, "$1$2$3$8$5$6$7$4$9").replace(bgHorizontalPercentageRegExp, calculateNewBackgroundPosition).replace(bgHorizontalPercentageXRegExp, calculateNewBackgroundPosition);
        css = noFlipSingleTokenizer.detokenize(
          noFlipClassTokenizer.detokenize(
            commentTokenizer.detokenize(css)
          )
        );
        return css;
      }
    };
  }
  cssjanus2 = new CSSJanus();
  if (module.exports) {
    exports$1.transform = function(css, options, transformEdgeInUrl) {
      var norm;
      if (typeof options === "object") {
        norm = options;
      } else {
        norm = {};
        if (typeof options === "boolean") {
          norm.transformDirInUrl = options;
        }
        if (typeof transformEdgeInUrl === "boolean") {
          norm.transformEdgeInUrl = transformEdgeInUrl;
        }
      }
      return cssjanus2.transform(css, norm);
    };
  } else if (typeof window !== "undefined") {
    window["cssjanus"] = cssjanus2;
  }
})(cssjanus$1, cssjanus$1.exports);
var cssjanusExports = cssjanus$1.exports;
const cssjanus = /* @__PURE__ */ getDefaultExportFromCjs(cssjanusExports);
function stringifyPreserveComments(element, index, children) {
  switch (element.type) {
    case IMPORT:
    case DECLARATION:
    case COMMENT:
      return element.return = element.return || element.value;
    case RULESET: {
      element.value = Array.isArray(element.props) ? element.props.join(",") : element.props;
      if (Array.isArray(element.children)) {
        element.children.forEach(function(x) {
          if (x.type === COMMENT)
            x.children = x.value;
        });
      }
    }
  }
  var serializedChildren = serialize(Array.prototype.concat(element.children), stringifyPreserveComments);
  return strlen(serializedChildren) ? element.return = element.value + "{" + serializedChildren + "}" : "";
}
function stylisRTLPlugin(element, index, children, callback) {
  if (element.type === KEYFRAMES || element.type === SUPPORTS || element.type === RULESET && (!element.parent || element.parent.type === MEDIA || element.parent.type === RULESET)) {
    var stringified = cssjanus.transform(stringifyPreserveComments(element));
    element.children = stringified ? compile(stringified)[0].children : [];
    element.return = "";
  }
}
Object.defineProperty(stylisRTLPlugin, "name", { value: "stylisRTLPlugin" });
var dayjs_min = { exports: {} };
var hasRequiredDayjs_min;
function requireDayjs_min() {
  if (hasRequiredDayjs_min) return dayjs_min.exports;
  hasRequiredDayjs_min = 1;
  (function(module, exports$1) {
    !function(t, e) {
      module.exports = e();
    }(commonjsGlobal, function() {
      var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
        var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
        return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
      } }, m2 = function(t2, e2, n2) {
        var r2 = String(t2);
        return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
      }, v = { s: m2, z: function(t2) {
        var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
        return (e2 <= 0 ? "+" : "-") + m2(r2, 2, "0") + ":" + m2(i2, 2, "0");
      }, m: function t2(e2, n2) {
        if (e2.date() < n2.date()) return -t2(n2, e2);
        var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
        return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      }, a: function(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      }, p: function(t2) {
        return { M: c, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t2) {
        return void 0 === t2;
      } }, g = "en", D = {};
      D[g] = M;
      var p = "$isDayjsObject", S = function(t2) {
        return t2 instanceof _ || !(!t2 || !t2[p]);
      }, w = function t2(e2, n2, r2) {
        var i2;
        if (!e2) return g;
        if ("string" == typeof e2) {
          var s2 = e2.toLowerCase();
          D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
          var u2 = e2.split("-");
          if (!i2 && u2.length > 1) return t2(u2[0]);
        } else {
          var a2 = e2.name;
          D[a2] = e2, i2 = a2;
        }
        return !r2 && i2 && (g = i2), i2 || !r2 && g;
      }, O = function(t2, e2) {
        if (S(t2)) return t2.clone();
        var n2 = "object" == typeof e2 ? e2 : {};
        return n2.date = t2, n2.args = arguments, new _(n2);
      }, b = v;
      b.l = w, b.i = S, b.w = function(t2, e2) {
        return O(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
      };
      var _ = function() {
        function M2(t2) {
          this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p] = true;
        }
        var m3 = M2.prototype;
        return m3.parse = function(t2) {
          this.$d = function(t3) {
            var e2 = t3.date, n2 = t3.utc;
            if (null === e2) return /* @__PURE__ */ new Date(NaN);
            if (b.u(e2)) return /* @__PURE__ */ new Date();
            if (e2 instanceof Date) return new Date(e2);
            if ("string" == typeof e2 && !/Z$/i.test(e2)) {
              var r2 = e2.match($);
              if (r2) {
                var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
              }
            }
            return new Date(e2);
          }(t2), this.init();
        }, m3.init = function() {
          var t2 = this.$d;
          this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
        }, m3.$utils = function() {
          return b;
        }, m3.isValid = function() {
          return !(this.$d.toString() === l);
        }, m3.isSame = function(t2, e2) {
          var n2 = O(t2);
          return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
        }, m3.isAfter = function(t2, e2) {
          return O(t2) < this.startOf(e2);
        }, m3.isBefore = function(t2, e2) {
          return this.endOf(e2) < O(t2);
        }, m3.$g = function(t2, e2, n2) {
          return b.u(t2) ? this[e2] : this.set(n2, t2);
        }, m3.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m3.valueOf = function() {
          return this.$d.getTime();
        }, m3.startOf = function(t2, e2) {
          var n2 = this, r2 = !!b.u(e2) || e2, f2 = b.p(t2), l2 = function(t3, e3) {
            var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
            return r2 ? i2 : i2.endOf(a);
          }, $2 = function(t3, e3) {
            return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y2 = this.$W, M3 = this.$M, m4 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (f2) {
            case h:
              return r2 ? l2(1, 0) : l2(31, 11);
            case c:
              return r2 ? l2(1, M3) : l2(0, M3 + 1);
            case o:
              var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l2(r2 ? m4 - D2 : m4 + (6 - D2), M3);
            case a:
            case d:
              return $2(v2 + "Hours", 0);
            case u:
              return $2(v2 + "Minutes", 1);
            case s:
              return $2(v2 + "Seconds", 2);
            case i:
              return $2(v2 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m3.endOf = function(t2) {
          return this.startOf(t2, false);
        }, m3.$set = function(t2, e2) {
          var n2, o2 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
          if (o2 === c || o2 === h) {
            var y2 = this.clone().set(d, 1);
            y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else l2 && this.$d[l2]($2);
          return this.init(), this;
        }, m3.set = function(t2, e2) {
          return this.clone().$set(t2, e2);
        }, m3.get = function(t2) {
          return this[b.p(t2)]();
        }, m3.add = function(r2, f2) {
          var d2, l2 = this;
          r2 = Number(r2);
          var $2 = b.p(f2), y2 = function(t2) {
            var e2 = O(l2);
            return b.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
          };
          if ($2 === c) return this.set(c, this.$M + r2);
          if ($2 === h) return this.set(h, this.$y + r2);
          if ($2 === a) return y2(1);
          if ($2 === o) return y2(7);
          var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m4 = this.$d.getTime() + r2 * M3;
          return b.w(m4, this);
        }, m3.subtract = function(t2, e2) {
          return this.add(-1 * t2, e2);
        }, m3.format = function(t2) {
          var e2 = this, n2 = this.$locale();
          if (!this.isValid()) return n2.invalidDate || l;
          var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h2 = function(t3, n3, i3, s3) {
            return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
          }, d2 = function(t3) {
            return b.s(s2 % 12 || 12, t3, "0");
          }, $2 = f2 || function(t3, e3, n3) {
            var r3 = t3 < 12 ? "AM" : "PM";
            return n3 ? r3.toLowerCase() : r3;
          };
          return r2.replace(y, function(t3, r3) {
            return r3 || function(t4) {
              switch (t4) {
                case "YY":
                  return String(e2.$y).slice(-2);
                case "YYYY":
                  return b.s(e2.$y, 4, "0");
                case "M":
                  return a2 + 1;
                case "MM":
                  return b.s(a2 + 1, 2, "0");
                case "MMM":
                  return h2(n2.monthsShort, a2, c2, 3);
                case "MMMM":
                  return h2(c2, a2);
                case "D":
                  return e2.$D;
                case "DD":
                  return b.s(e2.$D, 2, "0");
                case "d":
                  return String(e2.$W);
                case "dd":
                  return h2(n2.weekdaysMin, e2.$W, o2, 2);
                case "ddd":
                  return h2(n2.weekdaysShort, e2.$W, o2, 3);
                case "dddd":
                  return o2[e2.$W];
                case "H":
                  return String(s2);
                case "HH":
                  return b.s(s2, 2, "0");
                case "h":
                  return d2(1);
                case "hh":
                  return d2(2);
                case "a":
                  return $2(s2, u2, true);
                case "A":
                  return $2(s2, u2, false);
                case "m":
                  return String(u2);
                case "mm":
                  return b.s(u2, 2, "0");
                case "s":
                  return String(e2.$s);
                case "ss":
                  return b.s(e2.$s, 2, "0");
                case "SSS":
                  return b.s(e2.$ms, 3, "0");
                case "Z":
                  return i2;
              }
              return null;
            }(t3) || i2.replace(":", "");
          });
        }, m3.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m3.diff = function(r2, d2, l2) {
          var $2, y2 = this, M3 = b.p(d2), m4 = O(r2), v2 = (m4.utcOffset() - this.utcOffset()) * e, g2 = this - m4, D2 = function() {
            return b.m(y2, m4);
          };
          switch (M3) {
            case h:
              $2 = D2() / 12;
              break;
            case c:
              $2 = D2();
              break;
            case f:
              $2 = D2() / 3;
              break;
            case o:
              $2 = (g2 - v2) / 6048e5;
              break;
            case a:
              $2 = (g2 - v2) / 864e5;
              break;
            case u:
              $2 = g2 / n;
              break;
            case s:
              $2 = g2 / e;
              break;
            case i:
              $2 = g2 / t;
              break;
            default:
              $2 = g2;
          }
          return l2 ? $2 : b.a($2);
        }, m3.daysInMonth = function() {
          return this.endOf(c).$D;
        }, m3.$locale = function() {
          return D[this.$L];
        }, m3.locale = function(t2, e2) {
          if (!t2) return this.$L;
          var n2 = this.clone(), r2 = w(t2, e2, true);
          return r2 && (n2.$L = r2), n2;
        }, m3.clone = function() {
          return b.w(this.$d, this);
        }, m3.toDate = function() {
          return new Date(this.valueOf());
        }, m3.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m3.toISOString = function() {
          return this.$d.toISOString();
        }, m3.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      }(), k = _.prototype;
      return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach(function(t2) {
        k[t2[1]] = function(e2) {
          return this.$g(e2, t2[0], t2[1]);
        };
      }), O.extend = function(t2, e2) {
        return t2.$i || (t2(e2, _, O), t2.$i = true), O;
      }, O.locale = w, O.isDayjs = S, O.unix = function(t2) {
        return O(1e3 * t2);
      }, O.en = D[g], O.Ls = D, O.p = {}, O;
    });
  })(dayjs_min);
  return dayjs_min.exports;
}
var dayjs_minExports = requireDayjs_min();
const dayjs = /* @__PURE__ */ getDefaultExportFromCjs(dayjs_minExports);
var ar = { exports: {} };
(function(module, exports$1) {
  !function(e, t) {
    module.exports = t(requireDayjs_min());
  }(commonjsGlobal, function(e) {
    function t(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var n = t(e), r = "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), d = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" }, _ = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" }, o = /[١٢٣٤٥٦٧٨٩٠]/g, i = /،/g, a = /\d/g, s = /,/g, u = { name: "ar", weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), months: r, monthsShort: r, weekStart: 6, meridiem: function(e2) {
      return e2 > 12 ? "م" : "ص";
    }, relativeTime: { future: "بعد %s", past: "منذ %s", s: "ثانية واحدة", m: "دقيقة واحدة", mm: "%d دقائق", h: "ساعة واحدة", hh: "%d ساعات", d: "يوم واحد", dd: "%d أيام", M: "شهر واحد", MM: "%d أشهر", y: "عام واحد", yy: "%d أعوام" }, preparse: function(e2) {
      return e2.replace(o, function(e3) {
        return _[e3];
      }).replace(i, ",");
    }, postformat: function(e2) {
      return e2.replace(a, function(e3) {
        return d[e3];
      }).replace(s, "،");
    }, ordinal: function(e2) {
      return e2;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/‏M/‏YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" } };
    return n.default.locale(u, null, true), u;
  });
})(ar);
var de = { exports: {} };
(function(module, exports$1) {
  !function(e, n) {
    module.exports = n(requireDayjs_min());
  }(commonjsGlobal, function(e) {
    function n(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = n(e), a = { s: "ein paar Sekunden", m: ["eine Minute", "einer Minute"], mm: "%d Minuten", h: ["eine Stunde", "einer Stunde"], hh: "%d Stunden", d: ["ein Tag", "einem Tag"], dd: ["%d Tage", "%d Tagen"], M: ["ein Monat", "einem Monat"], MM: ["%d Monate", "%d Monaten"], y: ["ein Jahr", "einem Jahr"], yy: ["%d Jahre", "%d Jahren"] };
    function i(e2, n2, t2) {
      var i2 = a[t2];
      return Array.isArray(i2) && (i2 = i2[n2 ? 0 : 1]), i2.replace("%d", e2);
    }
    var r = { name: "de", weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"), ordinal: function(e2) {
      return e2 + ".";
    }, weekStart: 1, yearStart: 4, formats: { LTS: "HH:mm:ss", LT: "HH:mm", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "vor %s", s: i, m: i, mm: i, h: i, hh: i, d: i, dd: i, M: i, MM: i, y: i, yy: i } };
    return t.default.locale(r, null, true), r;
  });
})(de);
var es = { exports: {} };
(function(module, exports$1) {
  !function(e, o) {
    module.exports = o(requireDayjs_min());
  }(commonjsGlobal, function(e) {
    function o(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var s = o(e), d = { name: "es", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(e2) {
      return e2 + "º";
    } };
    return s.default.locale(d, null, true), d;
  });
})(es);
var pt = { exports: {} };
(function(module, exports$1) {
  !function(e, a) {
    module.exports = a(requireDayjs_min());
  }(commonjsGlobal, function(e) {
    function a(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var o = a(e), t = { name: "pt", weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"), weekdaysShort: "dom_seg_ter_qua_qui_sex_sab".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sa".split("_"), months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), ordinal: function(e2) {
      return e2 + "º";
    }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm" }, relativeTime: { future: "em %s", past: "há %s", s: "alguns segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" } };
    return o.default.locale(t, null, true), t;
  });
})(pt);
var fr = { exports: {} };
(function(module, exports$1) {
  !function(e, n) {
    module.exports = n(requireDayjs_min());
  }(commonjsGlobal, function(e) {
    function n(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var t = n(e), i = { name: "fr", weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"), months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, ordinal: function(e2) {
      return "" + e2 + (1 === e2 ? "er" : "");
    } };
    return t.default.locale(i, null, true), i;
  });
})(fr);
var nl = { exports: {} };
(function(module, exports$1) {
  !function(e, a) {
    module.exports = a(requireDayjs_min());
  }(commonjsGlobal, function(e) {
    function a(e2) {
      return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
    }
    var d = a(e), n = { name: "nl", weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"), ordinal: function(e2) {
      return "[" + e2 + (1 === e2 || 8 === e2 || e2 >= 20 ? "ste" : "de") + "]";
    }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", m: "een minuut", mm: "%d minuten", h: "een uur", hh: "%d uur", d: "een dag", dd: "%d dagen", M: "een maand", MM: "%d maanden", y: "een jaar", yy: "%d jaar" } };
    return d.default.locale(n, null, true), n;
  });
})(nl);
const Android = reactExports.lazy(() => __vitePreload(() => import("./Android-D_6dlUuh.js").then((n) => n.A), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0));
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
    return /* @__PURE__ */ jsx(I18nextProvider, { i18n: instance, children: /* @__PURE__ */ jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsx(LoadingDots, { fullHeight: true }), children: /* @__PURE__ */ jsx(Android, {}) }) });
  }
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(/* @__PURE__ */ jsx(BrowserRouter, { children: /* @__PURE__ */ jsx(App, {}) }));
unregister();
export {
  DECLARATION as D,
  Fragment as F,
  KEYFRAMES as K,
  LoadingDots as L,
  MS as M,
  RULESET as R,
  WEBKIT as W,
  __vite_legacy_guard,
  MOZ as a,
  substr as b,
  charat as c,
  combine as d,
  serialize as e,
  copy as f,
  assign as g,
  hash as h,
  indexof as i,
  filter as j,
  stylisRTLPlugin as k,
  lift as l,
  match as m,
  jsx as n,
  jsxs as o,
  dayjs as p,
  replace as r,
  strlen as s
};
//# sourceMappingURL=index-Eqa58ok4.js.map
