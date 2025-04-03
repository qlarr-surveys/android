;
(function () {
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  System.register(['./index-legacy-BLatMfxz.js', './use-service-legacy-DLuVKbJp.js'], function (exports, module) {
    'use strict';

    var useTheme$1, reactExports, generateUtilityClasses, generateUtilityClass, _objectWithoutPropertiesLoose, jsxRuntimeExports, _extends, capitalize, clsx, getThemeProps, useEnhancedEffect, require$$1, ownerDocument, Portal, useForkRef, useSlotProps, composeClasses, styled, useDefaultProps, Backdrop, Modal, Paper, useTheme$2, useId, Fade, ButtonBase, createSvgIcon, ownerWindow, debounce$1, useRtl, useEventCallback;
    return {
      setters: [module => {
        useTheme$1 = module.a3;
        reactExports = module.r;
        generateUtilityClasses = module.f;
        generateUtilityClass = module.g;
        _objectWithoutPropertiesLoose = module.b;
        jsxRuntimeExports = module.j;
        _extends = module._;
        capitalize = module.h;
        clsx = module.d;
      }, module => {
        getThemeProps = module.aT;
        useEnhancedEffect = module.n;
        require$$1 = module.aU;
        ownerDocument = module.o;
        Portal = module.aV;
        useForkRef = module.b;
        useSlotProps = module.x;
        composeClasses = module.c;
        styled = module.f;
        useDefaultProps = module.j;
        Backdrop = module.aW;
        Modal = module.aL;
        Paper = module.h;
        useTheme$2 = module.w;
        useId = module.C;
        Fade = module.aX;
        ButtonBase = module.B;
        createSvgIcon = module.e;
        ownerWindow = module.aY;
        debounce$1 = module.aZ;
        useRtl = module.z;
        useEventCallback = module.k;
      }],
      execute: function execute() {
        exports({
          g: getDialogTitleUtilityClass,
          u: useMediaQuery
        });
        function useMediaQueryOld(query, defaultMatches, matchMedia, ssrMatchMedia, noSsr) {
          const _reactExports$useStat = reactExports.useState(() => {
              if (noSsr && matchMedia) {
                return matchMedia(query).matches;
              }
              if (ssrMatchMedia) {
                return ssrMatchMedia(query).matches;
              }
              return defaultMatches;
            }),
            _reactExports$useStat2 = _slicedToArray(_reactExports$useStat, 2),
            match = _reactExports$useStat2[0],
            setMatch = _reactExports$useStat2[1];
          useEnhancedEffect(() => {
            let active = true;
            if (!matchMedia) {
              return void 0;
            }
            const queryList = matchMedia(query);
            const updateMatch = () => {
              if (active) {
                setMatch(queryList.matches);
              }
            };
            updateMatch();
            queryList.addListener(updateMatch);
            return () => {
              active = false;
              queryList.removeListener(updateMatch);
            };
          }, [query, matchMedia]);
          return match;
        }
        const maybeReactUseSyncExternalStore = reactExports.useSyncExternalStore;
        function useMediaQueryNew(query, defaultMatches, matchMedia, ssrMatchMedia, noSsr) {
          const getDefaultSnapshot = reactExports.useCallback(() => defaultMatches, [defaultMatches]);
          const getServerSnapshot = reactExports.useMemo(() => {
            if (noSsr && matchMedia) {
              return () => matchMedia(query).matches;
            }
            if (ssrMatchMedia !== null) {
              const _ssrMatchMedia = ssrMatchMedia(query),
                matches = _ssrMatchMedia.matches;
              return () => matches;
            }
            return getDefaultSnapshot;
          }, [getDefaultSnapshot, query, ssrMatchMedia, noSsr, matchMedia]);
          const _reactExports$useMemo = reactExports.useMemo(() => {
              if (matchMedia === null) {
                return [getDefaultSnapshot, () => () => {}];
              }
              const mediaQueryList = matchMedia(query);
              return [() => mediaQueryList.matches, notify => {
                mediaQueryList.addListener(notify);
                return () => {
                  mediaQueryList.removeListener(notify);
                };
              }];
            }, [getDefaultSnapshot, matchMedia, query]),
            _reactExports$useMemo2 = _slicedToArray(_reactExports$useMemo, 2),
            getSnapshot = _reactExports$useMemo2[0],
            subscribe = _reactExports$useMemo2[1];
          const match = maybeReactUseSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
          return match;
        }
        function useMediaQuery(queryInput, options = {}) {
          const theme = useTheme$1();
          const supportMatchMedia = typeof window !== "undefined" && typeof window.matchMedia !== "undefined";
          const _getThemeProps = getThemeProps({
              name: "MuiUseMediaQuery",
              props: options,
              theme
            }),
            _getThemeProps$defaul = _getThemeProps.defaultMatches,
            defaultMatches = _getThemeProps$defaul === void 0 ? false : _getThemeProps$defaul,
            _getThemeProps$matchM = _getThemeProps.matchMedia,
            matchMedia = _getThemeProps$matchM === void 0 ? supportMatchMedia ? window.matchMedia : null : _getThemeProps$matchM,
            _getThemeProps$ssrMat = _getThemeProps.ssrMatchMedia,
            ssrMatchMedia = _getThemeProps$ssrMat === void 0 ? null : _getThemeProps$ssrMat,
            _getThemeProps$noSsr = _getThemeProps.noSsr,
            noSsr = _getThemeProps$noSsr === void 0 ? false : _getThemeProps$noSsr;
          let query = typeof queryInput === "function" ? queryInput(theme) : queryInput;
          query = query.replace(/^@media( ?)/m, "");
          const useMediaQueryImplementation = maybeReactUseSyncExternalStore !== void 0 ? useMediaQueryNew : useMediaQueryOld;
          const match = useMediaQueryImplementation(query, defaultMatches, matchMedia, ssrMatchMedia, noSsr);
          return match;
        }

        // Source from https://github.com/alitaheri/normalize-scroll-left
        let cachedType;

        /**
         * Based on the jquery plugin https://github.com/othree/jquery.rtl-scroll-type
         *
         * Types of scrollLeft, assuming scrollWidth=100 and direction is rtl.
         *
         * Type             | <- Most Left | Most Right -> | Initial
         * ---------------- | ------------ | ------------- | -------
         * default          | 0            | 100           | 100
         * negative (spec*) | -100         | 0             | 0
         * reverse          | 100          | 0             | 0
         *
         * Edge 85: default
         * Safari 14: negative
         * Chrome 85: negative
         * Firefox 81: negative
         * IE11: reverse
         *
         * spec* https://drafts.csswg.org/cssom-view/#dom-window-scroll
         */
        function detectScrollType() {
          if (cachedType) {
            return cachedType;
          }
          const dummy = document.createElement('div');
          const container = document.createElement('div');
          container.style.width = '10px';
          container.style.height = '1px';
          dummy.appendChild(container);
          dummy.dir = 'rtl';
          dummy.style.fontSize = '14px';
          dummy.style.width = '4px';
          dummy.style.height = '1px';
          dummy.style.position = 'absolute';
          dummy.style.top = '-1000px';
          dummy.style.overflow = 'scroll';
          document.body.appendChild(dummy);
          cachedType = 'reverse';
          if (dummy.scrollLeft > 0) {
            cachedType = 'default';
          } else {
            dummy.scrollLeft = 1;
            if (dummy.scrollLeft === 0) {
              cachedType = 'negative';
            }
          }
          document.body.removeChild(dummy);
          return cachedType;
        }

        // Based on https://stackoverflow.com/a/24394376
        function getNormalizedScrollLeft(element, direction) {
          const scrollLeft = element.scrollLeft;

          // Perform the calculations only when direction is rtl to avoid messing up the ltr behavior
          if (direction !== 'rtl') {
            return scrollLeft;
          }
          const type = detectScrollType();
          switch (type) {
            case 'negative':
              return element.scrollWidth - element.clientWidth + scrollLeft;
            case 'reverse':
              return element.scrollWidth - element.clientWidth - scrollLeft;
            default:
              return scrollLeft;
          }
        }
        var useThemeWithoutDefault = {};
        Object.defineProperty(useThemeWithoutDefault, "__esModule", {
          value: true
        });
        var default_1 = useThemeWithoutDefault.default = void 0;
        var React = _interopRequireWildcard(reactExports);
        var _styledEngine = require$$1;
        function _getRequireWildcardCache(e) {
          if ("function" != typeof WeakMap) return null;
          var r = new WeakMap(),
            t = new WeakMap();
          return (_getRequireWildcardCache = function _getRequireWildcardCache(e) {
            return e ? t : r;
          })(e);
        }
        function _interopRequireWildcard(e, r) {
          if (e && e.__esModule) return e;
          if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
          };
          var t = _getRequireWildcardCache(r);
          if (t && t.has(e)) return t.get(e);
          var n = {
              __proto__: null
            },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
            var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
            i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
          }
          return n.default = e, t && t.set(e, n), n;
        }
        function isObjectEmpty(obj) {
          return Object.keys(obj).length === 0;
        }
        function useTheme(defaultTheme = null) {
          const contextTheme = React.useContext(_styledEngine.ThemeContext);
          return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme : contextTheme;
        }
        default_1 = useThemeWithoutDefault.default = useTheme;
        var top = 'top';
        var bottom = 'bottom';
        var right = 'right';
        var left = 'left';
        var auto = 'auto';
        var basePlacements = [top, bottom, right, left];
        var start = 'start';
        var end = 'end';
        var clippingParents = 'clippingParents';
        var viewport = 'viewport';
        var popper = 'popper';
        var reference = 'reference';
        var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
          return acc.concat([placement + "-" + start, placement + "-" + end]);
        }, []);
        var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
          return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
        }, []); // modifiers that need to read the DOM

        var beforeRead = 'beforeRead';
        var read = 'read';
        var afterRead = 'afterRead'; // pure-logic modifiers

        var beforeMain = 'beforeMain';
        var main = 'main';
        var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

        var beforeWrite = 'beforeWrite';
        var write = 'write';
        var afterWrite = 'afterWrite';
        var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
        function getNodeName(element) {
          return element ? (element.nodeName || '').toLowerCase() : null;
        }
        function getWindow(node) {
          if (node == null) {
            return window;
          }
          if (node.toString() !== '[object Window]') {
            var ownerDocument = node.ownerDocument;
            return ownerDocument ? ownerDocument.defaultView || window : window;
          }
          return node;
        }
        function isElement(node) {
          var OwnElement = getWindow(node).Element;
          return node instanceof OwnElement || node instanceof Element;
        }
        function isHTMLElement$1(node) {
          var OwnElement = getWindow(node).HTMLElement;
          return node instanceof OwnElement || node instanceof HTMLElement;
        }
        function isShadowRoot(node) {
          // IE 11 has no ShadowRoot
          if (typeof ShadowRoot === 'undefined') {
            return false;
          }
          var OwnElement = getWindow(node).ShadowRoot;
          return node instanceof OwnElement || node instanceof ShadowRoot;
        }

        // and applies them to the HTMLElements such as popper and arrow

        function applyStyles(_ref) {
          var state = _ref.state;
          Object.keys(state.elements).forEach(function (name) {
            var style = state.styles[name] || {};
            var attributes = state.attributes[name] || {};
            var element = state.elements[name]; // arrow is optional + virtual elements

            if (!isHTMLElement$1(element) || !getNodeName(element)) {
              return;
            } // Flow doesn't support to extend this property, but it's the most
            // effective way to apply styles to an HTMLElement
            // $FlowFixMe[cannot-write]

            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function (name) {
              var value = attributes[name];
              if (value === false) {
                element.removeAttribute(name);
              } else {
                element.setAttribute(name, value === true ? '' : value);
              }
            });
          });
        }
        function effect$2(_ref2) {
          var state = _ref2.state;
          var initialStyles = {
            popper: {
              position: state.options.strategy,
              left: '0',
              top: '0',
              margin: '0'
            },
            arrow: {
              position: 'absolute'
            },
            reference: {}
          };
          Object.assign(state.elements.popper.style, initialStyles.popper);
          state.styles = initialStyles;
          if (state.elements.arrow) {
            Object.assign(state.elements.arrow.style, initialStyles.arrow);
          }
          return function () {
            Object.keys(state.elements).forEach(function (name) {
              var element = state.elements[name];
              var attributes = state.attributes[name] || {};
              var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

              var style = styleProperties.reduce(function (style, property) {
                style[property] = '';
                return style;
              }, {}); // arrow is optional + virtual elements

              if (!isHTMLElement$1(element) || !getNodeName(element)) {
                return;
              }
              Object.assign(element.style, style);
              Object.keys(attributes).forEach(function (attribute) {
                element.removeAttribute(attribute);
              });
            });
          };
        } // eslint-disable-next-line import/no-unused-modules

        const applyStyles$1 = {
          name: 'applyStyles',
          enabled: true,
          phase: 'write',
          fn: applyStyles,
          effect: effect$2,
          requires: ['computeStyles']
        };
        function getBasePlacement(placement) {
          return placement.split('-')[0];
        }
        var max = Math.max;
        var min = Math.min;
        var round = Math.round;
        function getUAString() {
          var uaData = navigator.userAgentData;
          if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
            return uaData.brands.map(function (item) {
              return item.brand + "/" + item.version;
            }).join(' ');
          }
          return navigator.userAgent;
        }
        function isLayoutViewport() {
          return !/^((?!chrome|android).)*safari/i.test(getUAString());
        }
        function getBoundingClientRect(element, includeScale, isFixedStrategy) {
          if (includeScale === void 0) {
            includeScale = false;
          }
          if (isFixedStrategy === void 0) {
            isFixedStrategy = false;
          }
          var clientRect = element.getBoundingClientRect();
          var scaleX = 1;
          var scaleY = 1;
          if (includeScale && isHTMLElement$1(element)) {
            scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
            scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
          }
          var _ref = isElement(element) ? getWindow(element) : window,
            visualViewport = _ref.visualViewport;
          var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
          var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
          var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
          var width = clientRect.width / scaleX;
          var height = clientRect.height / scaleY;
          return {
            width: width,
            height: height,
            top: y,
            right: x + width,
            bottom: y + height,
            left: x,
            x: x,
            y: y
          };
        }

        // means it doesn't take into account transforms.

        function getLayoutRect(element) {
          var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
          // Fixes https://github.com/popperjs/popper-core/issues/1223

          var width = element.offsetWidth;
          var height = element.offsetHeight;
          if (Math.abs(clientRect.width - width) <= 1) {
            width = clientRect.width;
          }
          if (Math.abs(clientRect.height - height) <= 1) {
            height = clientRect.height;
          }
          return {
            x: element.offsetLeft,
            y: element.offsetTop,
            width: width,
            height: height
          };
        }
        function contains(parent, child) {
          var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

          if (parent.contains(child)) {
            return true;
          } // then fallback to custom implementation with Shadow DOM support
          else if (rootNode && isShadowRoot(rootNode)) {
            var next = child;
            do {
              if (next && parent.isSameNode(next)) {
                return true;
              } // $FlowFixMe[prop-missing]: need a better way to handle this...

              next = next.parentNode || next.host;
            } while (next);
          } // Give up, the result is false

          return false;
        }
        function getComputedStyle(element) {
          return getWindow(element).getComputedStyle(element);
        }
        function isTableElement(element) {
          return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
        }
        function getDocumentElement(element) {
          // $FlowFixMe[incompatible-return]: assume body is always available
          return ((isElement(element) ? element.ownerDocument :
          // $FlowFixMe[prop-missing]
          element.document) || window.document).documentElement;
        }
        function getParentNode(element) {
          if (getNodeName(element) === 'html') {
            return element;
          }
          return (
            // this is a quicker (but less type safe) way to save quite some bytes from the bundle
            // $FlowFixMe[incompatible-return]
            // $FlowFixMe[prop-missing]
            element.assignedSlot ||
            // step into the shadow DOM of the parent of a slotted node
            element.parentNode || (
            // DOM Element detected
            isShadowRoot(element) ? element.host : null) ||
            // ShadowRoot detected
            // $FlowFixMe[incompatible-call]: HTMLElement is a Node
            getDocumentElement(element) // fallback
          );
        }
        function getTrueOffsetParent(element) {
          if (!isHTMLElement$1(element) ||
          // https://github.com/popperjs/popper-core/issues/837
          getComputedStyle(element).position === 'fixed') {
            return null;
          }
          return element.offsetParent;
        } // `.offsetParent` reports `null` for fixed elements, while absolute elements
        // return the containing block

        function getContainingBlock(element) {
          var isFirefox = /firefox/i.test(getUAString());
          var isIE = /Trident/i.test(getUAString());
          if (isIE && isHTMLElement$1(element)) {
            // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
            var elementCss = getComputedStyle(element);
            if (elementCss.position === 'fixed') {
              return null;
            }
          }
          var currentNode = getParentNode(element);
          if (isShadowRoot(currentNode)) {
            currentNode = currentNode.host;
          }
          while (isHTMLElement$1(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
            var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
            // create a containing block.
            // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

            if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
              return currentNode;
            } else {
              currentNode = currentNode.parentNode;
            }
          }
          return null;
        } // Gets the closest ancestor positioned element. Handles some edge cases,
        // such as table ancestors and cross browser bugs.

        function getOffsetParent(element) {
          var window = getWindow(element);
          var offsetParent = getTrueOffsetParent(element);
          while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
            offsetParent = getTrueOffsetParent(offsetParent);
          }
          if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
            return window;
          }
          return offsetParent || getContainingBlock(element) || window;
        }
        function getMainAxisFromPlacement(placement) {
          return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
        }
        function within(min$1, value, max$1) {
          return max(min$1, min(value, max$1));
        }
        function withinMaxClamp(min, value, max) {
          var v = within(min, value, max);
          return v > max ? max : v;
        }
        function getFreshSideObject() {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          };
        }
        function mergePaddingObject(paddingObject) {
          return Object.assign({}, getFreshSideObject(), paddingObject);
        }
        function expandToHashMap(value, keys) {
          return keys.reduce(function (hashMap, key) {
            hashMap[key] = value;
            return hashMap;
          }, {});
        }
        var toPaddingObject = function toPaddingObject(padding, state) {
          padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
            placement: state.placement
          })) : padding;
          return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
        };
        function arrow(_ref) {
          var _state$modifiersData$;
          var state = _ref.state,
            name = _ref.name,
            options = _ref.options;
          var arrowElement = state.elements.arrow;
          var popperOffsets = state.modifiersData.popperOffsets;
          var basePlacement = getBasePlacement(state.placement);
          var axis = getMainAxisFromPlacement(basePlacement);
          var isVertical = [left, right].indexOf(basePlacement) >= 0;
          var len = isVertical ? 'height' : 'width';
          if (!arrowElement || !popperOffsets) {
            return;
          }
          var paddingObject = toPaddingObject(options.padding, state);
          var arrowRect = getLayoutRect(arrowElement);
          var minProp = axis === 'y' ? top : left;
          var maxProp = axis === 'y' ? bottom : right;
          var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
          var startDiff = popperOffsets[axis] - state.rects.reference[axis];
          var arrowOffsetParent = getOffsetParent(arrowElement);
          var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
          var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
          // outside of the popper bounds

          var min = paddingObject[minProp];
          var max = clientSize - arrowRect[len] - paddingObject[maxProp];
          var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
          var offset = within(min, center, max); // Prevents breaking syntax highlighting...

          var axisProp = axis;
          state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
        }
        function effect$1(_ref2) {
          var state = _ref2.state,
            options = _ref2.options;
          var _options$element = options.element,
            arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;
          if (arrowElement == null) {
            return;
          } // CSS selector

          if (typeof arrowElement === 'string') {
            arrowElement = state.elements.popper.querySelector(arrowElement);
            if (!arrowElement) {
              return;
            }
          }
          if (!contains(state.elements.popper, arrowElement)) {
            return;
          }
          state.elements.arrow = arrowElement;
        } // eslint-disable-next-line import/no-unused-modules

        const arrow$1 = {
          name: 'arrow',
          enabled: true,
          phase: 'main',
          fn: arrow,
          effect: effect$1,
          requires: ['popperOffsets'],
          requiresIfExists: ['preventOverflow']
        };
        function getVariation(placement) {
          return placement.split('-')[1];
        }
        var unsetSides = {
          top: 'auto',
          right: 'auto',
          bottom: 'auto',
          left: 'auto'
        }; // Round the offsets to the nearest suitable subpixel based on the DPR.
        // Zooming can change the DPR, but it seems to report a value that will
        // cleanly divide the values into the appropriate subpixels.

        function roundOffsetsByDPR(_ref, win) {
          var x = _ref.x,
            y = _ref.y;
          var dpr = win.devicePixelRatio || 1;
          return {
            x: round(x * dpr) / dpr || 0,
            y: round(y * dpr) / dpr || 0
          };
        }
        function mapToStyles(_ref2) {
          var _Object$assign2;
          var popper = _ref2.popper,
            popperRect = _ref2.popperRect,
            placement = _ref2.placement,
            variation = _ref2.variation,
            offsets = _ref2.offsets,
            position = _ref2.position,
            gpuAcceleration = _ref2.gpuAcceleration,
            adaptive = _ref2.adaptive,
            roundOffsets = _ref2.roundOffsets,
            isFixed = _ref2.isFixed;
          var _offsets$x = offsets.x,
            x = _offsets$x === void 0 ? 0 : _offsets$x,
            _offsets$y = offsets.y,
            y = _offsets$y === void 0 ? 0 : _offsets$y;
          var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
            x: x,
            y: y
          }) : {
            x: x,
            y: y
          };
          x = _ref3.x;
          y = _ref3.y;
          var hasX = offsets.hasOwnProperty('x');
          var hasY = offsets.hasOwnProperty('y');
          var sideX = left;
          var sideY = top;
          var win = window;
          if (adaptive) {
            var offsetParent = getOffsetParent(popper);
            var heightProp = 'clientHeight';
            var widthProp = 'clientWidth';
            if (offsetParent === getWindow(popper)) {
              offsetParent = getDocumentElement(popper);
              if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
                heightProp = 'scrollHeight';
                widthProp = 'scrollWidth';
              }
            } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

            offsetParent = offsetParent;
            if (placement === top || (placement === left || placement === right) && variation === end) {
              sideY = bottom;
              var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height :
              // $FlowFixMe[prop-missing]
              offsetParent[heightProp];
              y -= offsetY - popperRect.height;
              y *= gpuAcceleration ? 1 : -1;
            }
            if (placement === left || (placement === top || placement === bottom) && variation === end) {
              sideX = right;
              var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width :
              // $FlowFixMe[prop-missing]
              offsetParent[widthProp];
              x -= offsetX - popperRect.width;
              x *= gpuAcceleration ? 1 : -1;
            }
          }
          var commonStyles = Object.assign({
            position: position
          }, adaptive && unsetSides);
          var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
            x: x,
            y: y
          }, getWindow(popper)) : {
            x: x,
            y: y
          };
          x = _ref4.x;
          y = _ref4.y;
          if (gpuAcceleration) {
            var _Object$assign;
            return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
          }
          return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
        }
        function computeStyles(_ref5) {
          var state = _ref5.state,
            options = _ref5.options;
          var _options$gpuAccelerat = options.gpuAcceleration,
            gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
            _options$adaptive = options.adaptive,
            adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
            _options$roundOffsets = options.roundOffsets,
            roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
          var commonStyles = {
            placement: getBasePlacement(state.placement),
            variation: getVariation(state.placement),
            popper: state.elements.popper,
            popperRect: state.rects.popper,
            gpuAcceleration: gpuAcceleration,
            isFixed: state.options.strategy === 'fixed'
          };
          if (state.modifiersData.popperOffsets != null) {
            state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
              offsets: state.modifiersData.popperOffsets,
              position: state.options.strategy,
              adaptive: adaptive,
              roundOffsets: roundOffsets
            })));
          }
          if (state.modifiersData.arrow != null) {
            state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
              offsets: state.modifiersData.arrow,
              position: 'absolute',
              adaptive: false,
              roundOffsets: roundOffsets
            })));
          }
          state.attributes.popper = Object.assign({}, state.attributes.popper, {
            'data-popper-placement': state.placement
          });
        } // eslint-disable-next-line import/no-unused-modules

        const computeStyles$1 = {
          name: 'computeStyles',
          enabled: true,
          phase: 'beforeWrite',
          fn: computeStyles,
          data: {}
        };
        var passive = {
          passive: true
        };
        function effect(_ref) {
          var state = _ref.state,
            instance = _ref.instance,
            options = _ref.options;
          var _options$scroll = options.scroll,
            scroll = _options$scroll === void 0 ? true : _options$scroll,
            _options$resize = options.resize,
            resize = _options$resize === void 0 ? true : _options$resize;
          var window = getWindow(state.elements.popper);
          var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
          if (scroll) {
            scrollParents.forEach(function (scrollParent) {
              scrollParent.addEventListener('scroll', instance.update, passive);
            });
          }
          if (resize) {
            window.addEventListener('resize', instance.update, passive);
          }
          return function () {
            if (scroll) {
              scrollParents.forEach(function (scrollParent) {
                scrollParent.removeEventListener('scroll', instance.update, passive);
              });
            }
            if (resize) {
              window.removeEventListener('resize', instance.update, passive);
            }
          };
        } // eslint-disable-next-line import/no-unused-modules

        const eventListeners = {
          name: 'eventListeners',
          enabled: true,
          phase: 'write',
          fn: function fn() {},
          effect: effect,
          data: {}
        };
        var hash$1 = {
          left: 'right',
          right: 'left',
          bottom: 'top',
          top: 'bottom'
        };
        function getOppositePlacement(placement) {
          return placement.replace(/left|right|bottom|top/g, function (matched) {
            return hash$1[matched];
          });
        }
        var hash = {
          start: 'end',
          end: 'start'
        };
        function getOppositeVariationPlacement(placement) {
          return placement.replace(/start|end/g, function (matched) {
            return hash[matched];
          });
        }
        function getWindowScroll(node) {
          var win = getWindow(node);
          var scrollLeft = win.pageXOffset;
          var scrollTop = win.pageYOffset;
          return {
            scrollLeft: scrollLeft,
            scrollTop: scrollTop
          };
        }
        function getWindowScrollBarX(element) {
          // If <html> has a CSS width greater than the viewport, then this will be
          // incorrect for RTL.
          // Popper 1 is broken in this case and never had a bug report so let's assume
          // it's not an issue. I don't think anyone ever specifies width on <html>
          // anyway.
          // Browsers where the left scrollbar doesn't cause an issue report `0` for
          // this (e.g. Edge 2019, IE11, Safari)
          return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
        }
        function getViewportRect(element, strategy) {
          var win = getWindow(element);
          var html = getDocumentElement(element);
          var visualViewport = win.visualViewport;
          var width = html.clientWidth;
          var height = html.clientHeight;
          var x = 0;
          var y = 0;
          if (visualViewport) {
            width = visualViewport.width;
            height = visualViewport.height;
            var layoutViewport = isLayoutViewport();
            if (layoutViewport || !layoutViewport && strategy === 'fixed') {
              x = visualViewport.offsetLeft;
              y = visualViewport.offsetTop;
            }
          }
          return {
            width: width,
            height: height,
            x: x + getWindowScrollBarX(element),
            y: y
          };
        }

        // of the `<html>` and `<body>` rect bounds if horizontally scrollable

        function getDocumentRect(element) {
          var _element$ownerDocumen;
          var html = getDocumentElement(element);
          var winScroll = getWindowScroll(element);
          var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
          var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
          var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
          var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
          var y = -winScroll.scrollTop;
          if (getComputedStyle(body || html).direction === 'rtl') {
            x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
          }
          return {
            width: width,
            height: height,
            x: x,
            y: y
          };
        }
        function isScrollParent(element) {
          // Firefox wants us to check `-x` and `-y` variations as well
          var _getComputedStyle = getComputedStyle(element),
            overflow = _getComputedStyle.overflow,
            overflowX = _getComputedStyle.overflowX,
            overflowY = _getComputedStyle.overflowY;
          return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
        }
        function getScrollParent(node) {
          if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
            // $FlowFixMe[incompatible-return]: assume body is always available
            return node.ownerDocument.body;
          }
          if (isHTMLElement$1(node) && isScrollParent(node)) {
            return node;
          }
          return getScrollParent(getParentNode(node));
        }

        /*
        given a DOM element, return the list of all scroll parents, up the list of ancesors
        until we get to the top window object. This list is what we attach scroll listeners
        to, because if any of these parent elements scroll, we'll need to re-calculate the
        reference element's position.
        */

        function listScrollParents(element, list) {
          var _element$ownerDocumen;
          if (list === void 0) {
            list = [];
          }
          var scrollParent = getScrollParent(element);
          var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
          var win = getWindow(scrollParent);
          var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
          var updatedList = list.concat(target);
          return isBody ? updatedList :
          // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
          updatedList.concat(listScrollParents(getParentNode(target)));
        }
        function rectToClientRect(rect) {
          return Object.assign({}, rect, {
            left: rect.x,
            top: rect.y,
            right: rect.x + rect.width,
            bottom: rect.y + rect.height
          });
        }
        function getInnerBoundingClientRect(element, strategy) {
          var rect = getBoundingClientRect(element, false, strategy === 'fixed');
          rect.top = rect.top + element.clientTop;
          rect.left = rect.left + element.clientLeft;
          rect.bottom = rect.top + element.clientHeight;
          rect.right = rect.left + element.clientWidth;
          rect.width = element.clientWidth;
          rect.height = element.clientHeight;
          rect.x = rect.left;
          rect.y = rect.top;
          return rect;
        }
        function getClientRectFromMixedType(element, clippingParent, strategy) {
          return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
        } // A "clipping parent" is an overflowable container with the characteristic of
        // clipping (or hiding) overflowing elements with a position different from
        // `initial`

        function getClippingParents(element) {
          var clippingParents = listScrollParents(getParentNode(element));
          var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
          var clipperElement = canEscapeClipping && isHTMLElement$1(element) ? getOffsetParent(element) : element;
          if (!isElement(clipperElement)) {
            return [];
          } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414

          return clippingParents.filter(function (clippingParent) {
            return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
          });
        } // Gets the maximum area that the element is visible in due to any number of
        // clipping parents

        function getClippingRect(element, boundary, rootBoundary, strategy) {
          var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
          var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
          var firstClippingParent = clippingParents[0];
          var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
            var rect = getClientRectFromMixedType(element, clippingParent, strategy);
            accRect.top = max(rect.top, accRect.top);
            accRect.right = min(rect.right, accRect.right);
            accRect.bottom = min(rect.bottom, accRect.bottom);
            accRect.left = max(rect.left, accRect.left);
            return accRect;
          }, getClientRectFromMixedType(element, firstClippingParent, strategy));
          clippingRect.width = clippingRect.right - clippingRect.left;
          clippingRect.height = clippingRect.bottom - clippingRect.top;
          clippingRect.x = clippingRect.left;
          clippingRect.y = clippingRect.top;
          return clippingRect;
        }
        function computeOffsets(_ref) {
          var reference = _ref.reference,
            element = _ref.element,
            placement = _ref.placement;
          var basePlacement = placement ? getBasePlacement(placement) : null;
          var variation = placement ? getVariation(placement) : null;
          var commonX = reference.x + reference.width / 2 - element.width / 2;
          var commonY = reference.y + reference.height / 2 - element.height / 2;
          var offsets;
          switch (basePlacement) {
            case top:
              offsets = {
                x: commonX,
                y: reference.y - element.height
              };
              break;
            case bottom:
              offsets = {
                x: commonX,
                y: reference.y + reference.height
              };
              break;
            case right:
              offsets = {
                x: reference.x + reference.width,
                y: commonY
              };
              break;
            case left:
              offsets = {
                x: reference.x - element.width,
                y: commonY
              };
              break;
            default:
              offsets = {
                x: reference.x,
                y: reference.y
              };
          }
          var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
          if (mainAxis != null) {
            var len = mainAxis === 'y' ? 'height' : 'width';
            switch (variation) {
              case start:
                offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                break;
              case end:
                offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                break;
            }
          }
          return offsets;
        }
        function detectOverflow(state, options) {
          if (options === void 0) {
            options = {};
          }
          var _options = options,
            _options$placement = _options.placement,
            placement = _options$placement === void 0 ? state.placement : _options$placement,
            _options$strategy = _options.strategy,
            strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
            _options$boundary = _options.boundary,
            boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
            _options$rootBoundary = _options.rootBoundary,
            rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
            _options$elementConte = _options.elementContext,
            elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
            _options$altBoundary = _options.altBoundary,
            altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
            _options$padding = _options.padding,
            padding = _options$padding === void 0 ? 0 : _options$padding;
          var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
          var altContext = elementContext === popper ? reference : popper;
          var popperRect = state.rects.popper;
          var element = state.elements[altBoundary ? altContext : elementContext];
          var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
          var referenceClientRect = getBoundingClientRect(state.elements.reference);
          var popperOffsets = computeOffsets({
            reference: referenceClientRect,
            element: popperRect,
            strategy: 'absolute',
            placement: placement
          });
          var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
          var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
          // 0 or negative = within the clipping rect

          var overflowOffsets = {
            top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
            bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
            left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
            right: elementClientRect.right - clippingClientRect.right + paddingObject.right
          };
          var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

          if (elementContext === popper && offsetData) {
            var offset = offsetData[placement];
            Object.keys(overflowOffsets).forEach(function (key) {
              var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
              var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
              overflowOffsets[key] += offset[axis] * multiply;
            });
          }
          return overflowOffsets;
        }
        function computeAutoPlacement(state, options) {
          if (options === void 0) {
            options = {};
          }
          var _options = options,
            placement = _options.placement,
            boundary = _options.boundary,
            rootBoundary = _options.rootBoundary,
            padding = _options.padding,
            flipVariations = _options.flipVariations,
            _options$allowedAutoP = _options.allowedAutoPlacements,
            allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
          var variation = getVariation(placement);
          var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
            return getVariation(placement) === variation;
          }) : basePlacements;
          var allowedPlacements = placements$1.filter(function (placement) {
            return allowedAutoPlacements.indexOf(placement) >= 0;
          });
          if (allowedPlacements.length === 0) {
            allowedPlacements = placements$1;
          } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...

          var overflows = allowedPlacements.reduce(function (acc, placement) {
            acc[placement] = detectOverflow(state, {
              placement: placement,
              boundary: boundary,
              rootBoundary: rootBoundary,
              padding: padding
            })[getBasePlacement(placement)];
            return acc;
          }, {});
          return Object.keys(overflows).sort(function (a, b) {
            return overflows[a] - overflows[b];
          });
        }
        function getExpandedFallbackPlacements(placement) {
          if (getBasePlacement(placement) === auto) {
            return [];
          }
          var oppositePlacement = getOppositePlacement(placement);
          return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
        }
        function flip(_ref) {
          var state = _ref.state,
            options = _ref.options,
            name = _ref.name;
          if (state.modifiersData[name]._skip) {
            return;
          }
          var _options$mainAxis = options.mainAxis,
            checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
            _options$altAxis = options.altAxis,
            checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
            specifiedFallbackPlacements = options.fallbackPlacements,
            padding = options.padding,
            boundary = options.boundary,
            rootBoundary = options.rootBoundary,
            altBoundary = options.altBoundary,
            _options$flipVariatio = options.flipVariations,
            flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
            allowedAutoPlacements = options.allowedAutoPlacements;
          var preferredPlacement = state.options.placement;
          var basePlacement = getBasePlacement(preferredPlacement);
          var isBasePlacement = basePlacement === preferredPlacement;
          var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
          var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
            return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
              placement: placement,
              boundary: boundary,
              rootBoundary: rootBoundary,
              padding: padding,
              flipVariations: flipVariations,
              allowedAutoPlacements: allowedAutoPlacements
            }) : placement);
          }, []);
          var referenceRect = state.rects.reference;
          var popperRect = state.rects.popper;
          var checksMap = new Map();
          var makeFallbackChecks = true;
          var firstFittingPlacement = placements[0];
          for (var i = 0; i < placements.length; i++) {
            var placement = placements[i];
            var _basePlacement = getBasePlacement(placement);
            var isStartVariation = getVariation(placement) === start;
            var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
            var len = isVertical ? 'width' : 'height';
            var overflow = detectOverflow(state, {
              placement: placement,
              boundary: boundary,
              rootBoundary: rootBoundary,
              altBoundary: altBoundary,
              padding: padding
            });
            var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
            if (referenceRect[len] > popperRect[len]) {
              mainVariationSide = getOppositePlacement(mainVariationSide);
            }
            var altVariationSide = getOppositePlacement(mainVariationSide);
            var checks = [];
            if (checkMainAxis) {
              checks.push(overflow[_basePlacement] <= 0);
            }
            if (checkAltAxis) {
              checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
            }
            if (checks.every(function (check) {
              return check;
            })) {
              firstFittingPlacement = placement;
              makeFallbackChecks = false;
              break;
            }
            checksMap.set(placement, checks);
          }
          if (makeFallbackChecks) {
            // `2` may be desired in some cases – research later
            var numberOfChecks = flipVariations ? 3 : 1;
            var _loop = function _loop(_i) {
              var fittingPlacement = placements.find(function (placement) {
                var checks = checksMap.get(placement);
                if (checks) {
                  return checks.slice(0, _i).every(function (check) {
                    return check;
                  });
                }
              });
              if (fittingPlacement) {
                firstFittingPlacement = fittingPlacement;
                return "break";
              }
            };
            for (var _i = numberOfChecks; _i > 0; _i--) {
              var _ret = _loop(_i);
              if (_ret === "break") break;
            }
          }
          if (state.placement !== firstFittingPlacement) {
            state.modifiersData[name]._skip = true;
            state.placement = firstFittingPlacement;
            state.reset = true;
          }
        } // eslint-disable-next-line import/no-unused-modules

        const flip$1 = {
          name: 'flip',
          enabled: true,
          phase: 'main',
          fn: flip,
          requiresIfExists: ['offset'],
          data: {
            _skip: false
          }
        };
        function getSideOffsets(overflow, rect, preventedOffsets) {
          if (preventedOffsets === void 0) {
            preventedOffsets = {
              x: 0,
              y: 0
            };
          }
          return {
            top: overflow.top - rect.height - preventedOffsets.y,
            right: overflow.right - rect.width + preventedOffsets.x,
            bottom: overflow.bottom - rect.height + preventedOffsets.y,
            left: overflow.left - rect.width - preventedOffsets.x
          };
        }
        function isAnySideFullyClipped(overflow) {
          return [top, right, bottom, left].some(function (side) {
            return overflow[side] >= 0;
          });
        }
        function hide(_ref) {
          var state = _ref.state,
            name = _ref.name;
          var referenceRect = state.rects.reference;
          var popperRect = state.rects.popper;
          var preventedOffsets = state.modifiersData.preventOverflow;
          var referenceOverflow = detectOverflow(state, {
            elementContext: 'reference'
          });
          var popperAltOverflow = detectOverflow(state, {
            altBoundary: true
          });
          var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
          var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
          var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
          var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
          state.modifiersData[name] = {
            referenceClippingOffsets: referenceClippingOffsets,
            popperEscapeOffsets: popperEscapeOffsets,
            isReferenceHidden: isReferenceHidden,
            hasPopperEscaped: hasPopperEscaped
          };
          state.attributes.popper = Object.assign({}, state.attributes.popper, {
            'data-popper-reference-hidden': isReferenceHidden,
            'data-popper-escaped': hasPopperEscaped
          });
        } // eslint-disable-next-line import/no-unused-modules

        const hide$1 = {
          name: 'hide',
          enabled: true,
          phase: 'main',
          requiresIfExists: ['preventOverflow'],
          fn: hide
        };
        function distanceAndSkiddingToXY(placement, rects, offset) {
          var basePlacement = getBasePlacement(placement);
          var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
          var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
              placement: placement
            })) : offset,
            skidding = _ref[0],
            distance = _ref[1];
          skidding = skidding || 0;
          distance = (distance || 0) * invertDistance;
          return [left, right].indexOf(basePlacement) >= 0 ? {
            x: distance,
            y: skidding
          } : {
            x: skidding,
            y: distance
          };
        }
        function offset(_ref2) {
          var state = _ref2.state,
            options = _ref2.options,
            name = _ref2.name;
          var _options$offset = options.offset,
            offset = _options$offset === void 0 ? [0, 0] : _options$offset;
          var data = placements.reduce(function (acc, placement) {
            acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
            return acc;
          }, {});
          var _data$state$placement = data[state.placement],
            x = _data$state$placement.x,
            y = _data$state$placement.y;
          if (state.modifiersData.popperOffsets != null) {
            state.modifiersData.popperOffsets.x += x;
            state.modifiersData.popperOffsets.y += y;
          }
          state.modifiersData[name] = data;
        } // eslint-disable-next-line import/no-unused-modules

        const offset$1 = {
          name: 'offset',
          enabled: true,
          phase: 'main',
          requires: ['popperOffsets'],
          fn: offset
        };
        function popperOffsets(_ref) {
          var state = _ref.state,
            name = _ref.name;
          // Offsets are the actual position the popper needs to have to be
          // properly positioned near its reference element
          // This is the most basic placement, and will be adjusted by
          // the modifiers in the next step
          state.modifiersData[name] = computeOffsets({
            reference: state.rects.reference,
            element: state.rects.popper,
            strategy: 'absolute',
            placement: state.placement
          });
        } // eslint-disable-next-line import/no-unused-modules

        const popperOffsets$1 = {
          name: 'popperOffsets',
          enabled: true,
          phase: 'read',
          fn: popperOffsets,
          data: {}
        };
        function getAltAxis(axis) {
          return axis === 'x' ? 'y' : 'x';
        }
        function preventOverflow(_ref) {
          var state = _ref.state,
            options = _ref.options,
            name = _ref.name;
          var _options$mainAxis = options.mainAxis,
            checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
            _options$altAxis = options.altAxis,
            checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
            boundary = options.boundary,
            rootBoundary = options.rootBoundary,
            altBoundary = options.altBoundary,
            padding = options.padding,
            _options$tether = options.tether,
            tether = _options$tether === void 0 ? true : _options$tether,
            _options$tetherOffset = options.tetherOffset,
            tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
          var overflow = detectOverflow(state, {
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding,
            altBoundary: altBoundary
          });
          var basePlacement = getBasePlacement(state.placement);
          var variation = getVariation(state.placement);
          var isBasePlacement = !variation;
          var mainAxis = getMainAxisFromPlacement(basePlacement);
          var altAxis = getAltAxis(mainAxis);
          var popperOffsets = state.modifiersData.popperOffsets;
          var referenceRect = state.rects.reference;
          var popperRect = state.rects.popper;
          var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
            placement: state.placement
          })) : tetherOffset;
          var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
            mainAxis: tetherOffsetValue,
            altAxis: tetherOffsetValue
          } : Object.assign({
            mainAxis: 0,
            altAxis: 0
          }, tetherOffsetValue);
          var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
          var data = {
            x: 0,
            y: 0
          };
          if (!popperOffsets) {
            return;
          }
          if (checkMainAxis) {
            var _offsetModifierState$;
            var mainSide = mainAxis === 'y' ? top : left;
            var altSide = mainAxis === 'y' ? bottom : right;
            var len = mainAxis === 'y' ? 'height' : 'width';
            var offset = popperOffsets[mainAxis];
            var min$1 = offset + overflow[mainSide];
            var max$1 = offset - overflow[altSide];
            var additive = tether ? -popperRect[len] / 2 : 0;
            var minLen = variation === start ? referenceRect[len] : popperRect[len];
            var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
            // outside the reference bounds

            var arrowElement = state.elements.arrow;
            var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
              width: 0,
              height: 0
            };
            var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
            var arrowPaddingMin = arrowPaddingObject[mainSide];
            var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
            // to include its full size in the calculation. If the reference is small
            // and near the edge of a boundary, the popper can overflow even if the
            // reference is not overflowing as well (e.g. virtual elements with no
            // width or height)

            var arrowLen = within(0, referenceRect[len], arrowRect[len]);
            var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
            var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
            var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
            var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
            var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
            var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
            var tetherMax = offset + maxOffset - offsetModifierValue;
            var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
            popperOffsets[mainAxis] = preventedOffset;
            data[mainAxis] = preventedOffset - offset;
          }
          if (checkAltAxis) {
            var _offsetModifierState$2;
            var _mainSide = mainAxis === 'x' ? top : left;
            var _altSide = mainAxis === 'x' ? bottom : right;
            var _offset = popperOffsets[altAxis];
            var _len = altAxis === 'y' ? 'height' : 'width';
            var _min = _offset + overflow[_mainSide];
            var _max = _offset - overflow[_altSide];
            var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
            var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
            var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
            var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
            var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
            popperOffsets[altAxis] = _preventedOffset;
            data[altAxis] = _preventedOffset - _offset;
          }
          state.modifiersData[name] = data;
        } // eslint-disable-next-line import/no-unused-modules

        const preventOverflow$1 = {
          name: 'preventOverflow',
          enabled: true,
          phase: 'main',
          fn: preventOverflow,
          requiresIfExists: ['offset']
        };
        function getHTMLElementScroll(element) {
          return {
            scrollLeft: element.scrollLeft,
            scrollTop: element.scrollTop
          };
        }
        function getNodeScroll(node) {
          if (node === getWindow(node) || !isHTMLElement$1(node)) {
            return getWindowScroll(node);
          } else {
            return getHTMLElementScroll(node);
          }
        }
        function isElementScaled(element) {
          var rect = element.getBoundingClientRect();
          var scaleX = round(rect.width) / element.offsetWidth || 1;
          var scaleY = round(rect.height) / element.offsetHeight || 1;
          return scaleX !== 1 || scaleY !== 1;
        } // Returns the composite rect of an element relative to its offsetParent.
        // Composite means it takes into account transforms as well as layout.

        function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
          if (isFixed === void 0) {
            isFixed = false;
          }
          var isOffsetParentAnElement = isHTMLElement$1(offsetParent);
          var offsetParentIsScaled = isHTMLElement$1(offsetParent) && isElementScaled(offsetParent);
          var documentElement = getDocumentElement(offsetParent);
          var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
          var scroll = {
            scrollLeft: 0,
            scrollTop: 0
          };
          var offsets = {
            x: 0,
            y: 0
          };
          if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
            if (getNodeName(offsetParent) !== 'body' ||
            // https://github.com/popperjs/popper-core/issues/1078
            isScrollParent(documentElement)) {
              scroll = getNodeScroll(offsetParent);
            }
            if (isHTMLElement$1(offsetParent)) {
              offsets = getBoundingClientRect(offsetParent, true);
              offsets.x += offsetParent.clientLeft;
              offsets.y += offsetParent.clientTop;
            } else if (documentElement) {
              offsets.x = getWindowScrollBarX(documentElement);
            }
          }
          return {
            x: rect.left + scroll.scrollLeft - offsets.x,
            y: rect.top + scroll.scrollTop - offsets.y,
            width: rect.width,
            height: rect.height
          };
        }
        function order(modifiers) {
          var map = new Map();
          var visited = new Set();
          var result = [];
          modifiers.forEach(function (modifier) {
            map.set(modifier.name, modifier);
          }); // On visiting object, check for its dependencies and visit them recursively

          function sort(modifier) {
            visited.add(modifier.name);
            var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
            requires.forEach(function (dep) {
              if (!visited.has(dep)) {
                var depModifier = map.get(dep);
                if (depModifier) {
                  sort(depModifier);
                }
              }
            });
            result.push(modifier);
          }
          modifiers.forEach(function (modifier) {
            if (!visited.has(modifier.name)) {
              // check for visited object
              sort(modifier);
            }
          });
          return result;
        }
        function orderModifiers(modifiers) {
          // order based on dependencies
          var orderedModifiers = order(modifiers); // order based on phase

          return modifierPhases.reduce(function (acc, phase) {
            return acc.concat(orderedModifiers.filter(function (modifier) {
              return modifier.phase === phase;
            }));
          }, []);
        }
        function debounce(fn) {
          var pending;
          return function () {
            if (!pending) {
              pending = new Promise(function (resolve) {
                Promise.resolve().then(function () {
                  pending = undefined;
                  resolve(fn());
                });
              });
            }
            return pending;
          };
        }
        function mergeByName(modifiers) {
          var merged = modifiers.reduce(function (merged, current) {
            var existing = merged[current.name];
            merged[current.name] = existing ? Object.assign({}, existing, current, {
              options: Object.assign({}, existing.options, current.options),
              data: Object.assign({}, existing.data, current.data)
            }) : current;
            return merged;
          }, {}); // IE11 does not support Object.values

          return Object.keys(merged).map(function (key) {
            return merged[key];
          });
        }
        var DEFAULT_OPTIONS = {
          placement: 'bottom',
          modifiers: [],
          strategy: 'absolute'
        };
        function areValidElements() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return !args.some(function (element) {
            return !(element && typeof element.getBoundingClientRect === 'function');
          });
        }
        function popperGenerator(generatorOptions) {
          if (generatorOptions === void 0) {
            generatorOptions = {};
          }
          var _generatorOptions = generatorOptions,
            _generatorOptions$def = _generatorOptions.defaultModifiers,
            defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
            _generatorOptions$def2 = _generatorOptions.defaultOptions,
            defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
          return function createPopper(reference, popper, options) {
            if (options === void 0) {
              options = defaultOptions;
            }
            var state = {
              placement: 'bottom',
              orderedModifiers: [],
              options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
              modifiersData: {},
              elements: {
                reference: reference,
                popper: popper
              },
              attributes: {},
              styles: {}
            };
            var effectCleanupFns = [];
            var isDestroyed = false;
            var instance = {
              state: state,
              setOptions: function setOptions(setOptionsAction) {
                var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
                cleanupModifierEffects();
                state.options = Object.assign({}, defaultOptions, state.options, options);
                state.scrollParents = {
                  reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
                  popper: listScrollParents(popper)
                }; // Orders the modifiers based on their dependencies and `phase`
                // properties

                var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

                state.orderedModifiers = orderedModifiers.filter(function (m) {
                  return m.enabled;
                });
                runModifierEffects();
                return instance.update();
              },
              // Sync update – it will always be executed, even if not necessary. This
              // is useful for low frequency updates where sync behavior simplifies the
              // logic.
              // For high frequency updates (e.g. `resize` and `scroll` events), always
              // prefer the async Popper#update method
              forceUpdate: function forceUpdate() {
                if (isDestroyed) {
                  return;
                }
                var _state$elements = state.elements,
                  reference = _state$elements.reference,
                  popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                // anymore

                if (!areValidElements(reference, popper)) {
                  return;
                } // Store the reference and popper rects to be read by modifiers

                state.rects = {
                  reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
                  popper: getLayoutRect(popper)
                }; // Modifiers have the ability to reset the current update cycle. The
                // most common use case for this is the `flip` modifier changing the
                // placement, which then needs to re-run all the modifiers, because the
                // logic was previously ran for the previous placement and is therefore
                // stale/incorrect

                state.reset = false;
                state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                // is filled with the initial data specified by the modifier. This means
                // it doesn't persist and is fresh on each update.
                // To ensure persistent data, use `${name}#persistent`

                state.orderedModifiers.forEach(function (modifier) {
                  return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                });
                for (var index = 0; index < state.orderedModifiers.length; index++) {
                  if (state.reset === true) {
                    state.reset = false;
                    index = -1;
                    continue;
                  }
                  var _state$orderedModifie = state.orderedModifiers[index],
                    fn = _state$orderedModifie.fn,
                    _state$orderedModifie2 = _state$orderedModifie.options,
                    _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
                    name = _state$orderedModifie.name;
                  if (typeof fn === 'function') {
                    state = fn({
                      state: state,
                      options: _options,
                      name: name,
                      instance: instance
                    }) || state;
                  }
                }
              },
              // Async and optimistically optimized update – it will not be executed if
              // not necessary (debounced to run at most once-per-tick)
              update: debounce(function () {
                return new Promise(function (resolve) {
                  instance.forceUpdate();
                  resolve(state);
                });
              }),
              destroy: function destroy() {
                cleanupModifierEffects();
                isDestroyed = true;
              }
            };
            if (!areValidElements(reference, popper)) {
              return instance;
            }
            instance.setOptions(options).then(function (state) {
              if (!isDestroyed && options.onFirstUpdate) {
                options.onFirstUpdate(state);
              }
            }); // Modifiers have the ability to execute arbitrary code before the first
            // update cycle runs. They will be executed in the same order as the update
            // cycle. This is useful when a modifier adds some persistent data that
            // other modifiers need to use, but the modifier is run after the dependent
            // one.

            function runModifierEffects() {
              state.orderedModifiers.forEach(function (_ref) {
                var name = _ref.name,
                  _ref$options = _ref.options,
                  options = _ref$options === void 0 ? {} : _ref$options,
                  effect = _ref.effect;
                if (typeof effect === 'function') {
                  var cleanupFn = effect({
                    state: state,
                    name: name,
                    instance: instance,
                    options: options
                  });
                  var noopFn = function noopFn() {};
                  effectCleanupFns.push(cleanupFn || noopFn);
                }
              });
            }
            function cleanupModifierEffects() {
              effectCleanupFns.forEach(function (fn) {
                return fn();
              });
              effectCleanupFns = [];
            }
            return instance;
          };
        }
        var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
        var createPopper = /*#__PURE__*/popperGenerator({
          defaultModifiers: defaultModifiers
        }); // eslint-disable-next-line import/no-unused-modules

        function getPopperUtilityClass(slot) {
          return generateUtilityClass('MuiPopper', slot);
        }
        generateUtilityClasses('MuiPopper', ['root']);
        const _excluded$7 = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"],
          _excluded2 = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
        function flipPlacement(placement, direction) {
          if (direction === "ltr") {
            return placement;
          }
          switch (placement) {
            case "bottom-end":
              return "bottom-start";
            case "bottom-start":
              return "bottom-end";
            case "top-end":
              return "top-start";
            case "top-start":
              return "top-end";
            default:
              return placement;
          }
        }
        function resolveAnchorEl(anchorEl) {
          return typeof anchorEl === "function" ? anchorEl() : anchorEl;
        }
        function isHTMLElement(element) {
          return element.nodeType !== void 0;
        }
        const useUtilityClasses$5 = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ["root"]
          };
          return composeClasses(slots, getPopperUtilityClass, classes);
        };
        const defaultPopperOptions = {};
        const PopperTooltip = /* @__PURE__ */reactExports.forwardRef(function PopperTooltip2(props, forwardedRef) {
          var _slots$root;
          const anchorEl = props.anchorEl,
            children = props.children,
            direction = props.direction,
            disablePortal = props.disablePortal,
            modifiers = props.modifiers,
            open = props.open,
            initialPlacement = props.placement,
            popperOptions = props.popperOptions,
            popperRefProp = props.popperRef,
            _props$slotProps = props.slotProps,
            slotProps = _props$slotProps === void 0 ? {} : _props$slotProps,
            _props$slots = props.slots,
            slots = _props$slots === void 0 ? {} : _props$slots,
            TransitionProps = props.TransitionProps,
            other = _objectWithoutPropertiesLoose(props, _excluded$7);
          const tooltipRef = reactExports.useRef(null);
          const ownRef = useForkRef(tooltipRef, forwardedRef);
          const popperRef = reactExports.useRef(null);
          const handlePopperRef = useForkRef(popperRef, popperRefProp);
          const handlePopperRefRef = reactExports.useRef(handlePopperRef);
          useEnhancedEffect(() => {
            handlePopperRefRef.current = handlePopperRef;
          }, [handlePopperRef]);
          reactExports.useImperativeHandle(popperRefProp, () => popperRef.current, []);
          const rtlPlacement = flipPlacement(initialPlacement, direction);
          const _reactExports$useStat3 = reactExports.useState(rtlPlacement),
            _reactExports$useStat4 = _slicedToArray(_reactExports$useStat3, 2),
            placement = _reactExports$useStat4[0],
            setPlacement = _reactExports$useStat4[1];
          const _reactExports$useStat5 = reactExports.useState(resolveAnchorEl(anchorEl)),
            _reactExports$useStat6 = _slicedToArray(_reactExports$useStat5, 2),
            resolvedAnchorElement = _reactExports$useStat6[0],
            setResolvedAnchorElement = _reactExports$useStat6[1];
          reactExports.useEffect(() => {
            if (popperRef.current) {
              popperRef.current.forceUpdate();
            }
          });
          reactExports.useEffect(() => {
            if (anchorEl) {
              setResolvedAnchorElement(resolveAnchorEl(anchorEl));
            }
          }, [anchorEl]);
          useEnhancedEffect(() => {
            if (!resolvedAnchorElement || !open) {
              return void 0;
            }
            const handlePopperUpdate = data => {
              setPlacement(data.placement);
            };
            let popperModifiers = [{
              name: "preventOverflow",
              options: {
                altBoundary: disablePortal
              }
            }, {
              name: "flip",
              options: {
                altBoundary: disablePortal
              }
            }, {
              name: "onUpdate",
              enabled: true,
              phase: "afterWrite",
              fn: ({
                state
              }) => {
                handlePopperUpdate(state);
              }
            }];
            if (modifiers != null) {
              popperModifiers = popperModifiers.concat(modifiers);
            }
            if (popperOptions && popperOptions.modifiers != null) {
              popperModifiers = popperModifiers.concat(popperOptions.modifiers);
            }
            const popper = createPopper(resolvedAnchorElement, tooltipRef.current, _extends({
              placement: rtlPlacement
            }, popperOptions, {
              modifiers: popperModifiers
            }));
            handlePopperRefRef.current(popper);
            return () => {
              popper.destroy();
              handlePopperRefRef.current(null);
            };
          }, [resolvedAnchorElement, disablePortal, modifiers, open, popperOptions, rtlPlacement]);
          const childProps = {
            placement
          };
          if (TransitionProps !== null) {
            childProps.TransitionProps = TransitionProps;
          }
          const classes = useUtilityClasses$5(props);
          const Root = (_slots$root = slots.root) != null ? _slots$root : "div";
          const rootProps = useSlotProps({
            elementType: Root,
            externalSlotProps: slotProps.root,
            externalForwardedProps: other,
            additionalProps: {
              role: "tooltip",
              ref: ownRef
            },
            ownerState: props,
            className: classes.root
          });
          return /* @__PURE__ */jsxRuntimeExports.jsx(Root, _extends({}, rootProps, {
            children: typeof children === "function" ? children(childProps) : children
          }));
        });
        const Popper$1 = /* @__PURE__ */reactExports.forwardRef(function Popper2(props, forwardedRef) {
          const anchorEl = props.anchorEl,
            children = props.children,
            containerProp = props.container,
            _props$direction = props.direction,
            direction = _props$direction === void 0 ? "ltr" : _props$direction,
            _props$disablePortal = props.disablePortal,
            disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
            _props$keepMounted = props.keepMounted,
            keepMounted = _props$keepMounted === void 0 ? false : _props$keepMounted,
            modifiers = props.modifiers,
            open = props.open,
            _props$placement = props.placement,
            placement = _props$placement === void 0 ? "bottom" : _props$placement,
            _props$popperOptions = props.popperOptions,
            popperOptions = _props$popperOptions === void 0 ? defaultPopperOptions : _props$popperOptions,
            popperRef = props.popperRef,
            style = props.style,
            _props$transition = props.transition,
            transition = _props$transition === void 0 ? false : _props$transition,
            _props$slotProps2 = props.slotProps,
            slotProps = _props$slotProps2 === void 0 ? {} : _props$slotProps2,
            _props$slots2 = props.slots,
            slots = _props$slots2 === void 0 ? {} : _props$slots2,
            other = _objectWithoutPropertiesLoose(props, _excluded2);
          const _reactExports$useStat7 = reactExports.useState(true),
            _reactExports$useStat8 = _slicedToArray(_reactExports$useStat7, 2),
            exited = _reactExports$useStat8[0],
            setExited = _reactExports$useStat8[1];
          const handleEnter = () => {
            setExited(false);
          };
          const handleExited = () => {
            setExited(true);
          };
          if (!keepMounted && !open && (!transition || exited)) {
            return null;
          }
          let container;
          if (containerProp) {
            container = containerProp;
          } else if (anchorEl) {
            const resolvedAnchorEl = resolveAnchorEl(anchorEl);
            container = resolvedAnchorEl && isHTMLElement(resolvedAnchorEl) ? ownerDocument(resolvedAnchorEl).body : ownerDocument(null).body;
          }
          const display = !open && keepMounted && (!transition || exited) ? "none" : void 0;
          const transitionProps = transition ? {
            in: open,
            onEnter: handleEnter,
            onExited: handleExited
          } : void 0;
          return /* @__PURE__ */jsxRuntimeExports.jsx(Portal, {
            disablePortal,
            container,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(PopperTooltip, _extends({
              anchorEl,
              direction,
              disablePortal,
              modifiers,
              ref: forwardedRef,
              open: transition ? !exited : open,
              placement,
              popperOptions,
              popperRef,
              slotProps,
              slots
            }, other, {
              style: _extends({
                // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
                position: "fixed",
                // Fix Popper.js display issue
                top: 0,
                left: 0,
                display
              }, style),
              TransitionProps: transitionProps,
              children
            }))
          });
        });
        const _excluded$6 = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"];
        const PopperRoot = styled(Popper$1, {
          name: "MuiPopper",
          slot: "Root",
          overridesResolver: (props, styles) => styles.root
        })({});
        const Popper = exports("P", /* @__PURE__ */reactExports.forwardRef(function Popper2(inProps, ref) {
          var _slots$root;
          const theme = default_1();
          const props = useDefaultProps({
            props: inProps,
            name: "MuiPopper"
          });
          const anchorEl = props.anchorEl,
            component = props.component,
            components = props.components,
            componentsProps = props.componentsProps,
            container = props.container,
            disablePortal = props.disablePortal,
            keepMounted = props.keepMounted,
            modifiers = props.modifiers,
            open = props.open,
            placement = props.placement,
            popperOptions = props.popperOptions,
            popperRef = props.popperRef,
            transition = props.transition,
            slots = props.slots,
            slotProps = props.slotProps,
            other = _objectWithoutPropertiesLoose(props, _excluded$6);
          const RootComponent = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : components == null ? void 0 : components.Root;
          const otherProps = _extends({
            anchorEl,
            container,
            disablePortal,
            keepMounted,
            modifiers,
            open,
            placement,
            popperOptions,
            popperRef,
            transition
          }, other);
          return /* @__PURE__ */jsxRuntimeExports.jsx(PopperRoot, _extends({
            as: component,
            direction: theme == null ? void 0 : theme.direction,
            slots: {
              root: RootComponent
            },
            slotProps: slotProps != null ? slotProps : componentsProps
          }, otherProps, {
            ref
          }));
        }));
        function getDialogUtilityClass(slot) {
          return generateUtilityClass('MuiDialog', slot);
        }
        const dialogClasses = exports("d", generateUtilityClasses('MuiDialog', ['root', 'scrollPaper', 'scrollBody', 'container', 'paper', 'paperScrollPaper', 'paperScrollBody', 'paperWidthFalse', 'paperWidthXs', 'paperWidthSm', 'paperWidthMd', 'paperWidthLg', 'paperWidthXl', 'paperFullWidth', 'paperFullScreen']));
        const DialogContext = exports("D", /* @__PURE__ */reactExports.createContext({}));
        const _excluded$5 = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"];
        const DialogBackdrop = styled(Backdrop, {
          name: "MuiDialog",
          slot: "Backdrop",
          overrides: (props, styles) => styles.backdrop
        })({
          // Improve scrollable dialog support.
          zIndex: -1
        });
        const useUtilityClasses$4 = ownerState => {
          const classes = ownerState.classes,
            scroll = ownerState.scroll,
            maxWidth = ownerState.maxWidth,
            fullWidth = ownerState.fullWidth,
            fullScreen = ownerState.fullScreen;
          const slots = {
            root: ["root"],
            container: ["container", `scroll${capitalize(scroll)}`],
            paper: ["paper", `paperScroll${capitalize(scroll)}`, `paperWidth${capitalize(String(maxWidth))}`, fullWidth && "paperFullWidth", fullScreen && "paperFullScreen"]
          };
          return composeClasses(slots, getDialogUtilityClass, classes);
        };
        const DialogRoot = styled(Modal, {
          name: "MuiDialog",
          slot: "Root",
          overridesResolver: (props, styles) => styles.root
        })({
          "@media print": {
            // Use !important to override the Modal inline-style.
            position: "absolute !important"
          }
        });
        const DialogContainer = styled("div", {
          name: "MuiDialog",
          slot: "Container",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.container, styles[`scroll${capitalize(ownerState.scroll)}`]];
          }
        })(({
          ownerState
        }) => _extends({
          height: "100%",
          "@media print": {
            height: "auto"
          },
          // We disable the focus ring for mouse, touch and keyboard users.
          outline: 0
        }, ownerState.scroll === "paper" && {
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }, ownerState.scroll === "body" && {
          overflowY: "auto",
          overflowX: "hidden",
          textAlign: "center",
          "&::after": {
            content: '""',
            display: "inline-block",
            verticalAlign: "middle",
            height: "100%",
            width: "0"
          }
        }));
        const DialogPaper = styled(Paper, {
          name: "MuiDialog",
          slot: "Paper",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.paper, styles[`scrollPaper${capitalize(ownerState.scroll)}`], styles[`paperWidth${capitalize(String(ownerState.maxWidth))}`], ownerState.fullWidth && styles.paperFullWidth, ownerState.fullScreen && styles.paperFullScreen];
          }
        })(({
          theme,
          ownerState
        }) => _extends({
          margin: 32,
          position: "relative",
          overflowY: "auto",
          // Fix IE11 issue, to remove at some point.
          "@media print": {
            overflowY: "visible",
            boxShadow: "none"
          }
        }, ownerState.scroll === "paper" && {
          display: "flex",
          flexDirection: "column",
          maxHeight: "calc(100% - 64px)"
        }, ownerState.scroll === "body" && {
          display: "inline-block",
          verticalAlign: "middle",
          textAlign: "left"
          // 'initial' doesn't work on IE11
        }, !ownerState.maxWidth && {
          maxWidth: "calc(100% - 64px)"
        }, ownerState.maxWidth === "xs" && {
          maxWidth: theme.breakpoints.unit === "px" ? Math.max(theme.breakpoints.values.xs, 444) : `max(${theme.breakpoints.values.xs}${theme.breakpoints.unit}, 444px)`,
          [`&.${dialogClasses.paperScrollBody}`]: {
            [theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 444) + 32 * 2)]: {
              maxWidth: "calc(100% - 64px)"
            }
          }
        }, ownerState.maxWidth && ownerState.maxWidth !== "xs" && {
          maxWidth: `${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`,
          [`&.${dialogClasses.paperScrollBody}`]: {
            [theme.breakpoints.down(theme.breakpoints.values[ownerState.maxWidth] + 32 * 2)]: {
              maxWidth: "calc(100% - 64px)"
            }
          }
        }, ownerState.fullWidth && {
          width: "calc(100% - 64px)"
        }, ownerState.fullScreen && {
          margin: 0,
          width: "100%",
          maxWidth: "100%",
          height: "100%",
          maxHeight: "none",
          borderRadius: 0,
          [`&.${dialogClasses.paperScrollBody}`]: {
            margin: 0,
            maxWidth: "100%"
          }
        }));
        const Dialog = exports("a", /* @__PURE__ */reactExports.forwardRef(function Dialog2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiDialog"
          });
          const theme = useTheme$2();
          const defaultTransitionDuration = {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen
          };
          const ariaDescribedby = props["aria-describedby"],
            ariaLabelledbyProp = props["aria-labelledby"],
            BackdropComponent = props.BackdropComponent,
            BackdropProps = props.BackdropProps,
            children = props.children,
            className = props.className,
            _props$disableEscapeK = props.disableEscapeKeyDown,
            disableEscapeKeyDown = _props$disableEscapeK === void 0 ? false : _props$disableEscapeK,
            _props$fullScreen = props.fullScreen,
            fullScreen = _props$fullScreen === void 0 ? false : _props$fullScreen,
            _props$fullWidth = props.fullWidth,
            fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
            _props$maxWidth = props.maxWidth,
            maxWidth = _props$maxWidth === void 0 ? "sm" : _props$maxWidth,
            onBackdropClick = props.onBackdropClick,
            onClick = props.onClick,
            onClose = props.onClose,
            open = props.open,
            _props$PaperComponent = props.PaperComponent,
            PaperComponent = _props$PaperComponent === void 0 ? Paper : _props$PaperComponent,
            _props$PaperProps = props.PaperProps,
            PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
            _props$scroll = props.scroll,
            scroll = _props$scroll === void 0 ? "paper" : _props$scroll,
            _props$TransitionComp = props.TransitionComponent,
            TransitionComponent = _props$TransitionComp === void 0 ? Fade : _props$TransitionComp,
            _props$transitionDura = props.transitionDuration,
            transitionDuration = _props$transitionDura === void 0 ? defaultTransitionDuration : _props$transitionDura,
            TransitionProps = props.TransitionProps,
            other = _objectWithoutPropertiesLoose(props, _excluded$5);
          const ownerState = _extends({}, props, {
            disableEscapeKeyDown,
            fullScreen,
            fullWidth,
            maxWidth,
            scroll
          });
          const classes = useUtilityClasses$4(ownerState);
          const backdropClick = reactExports.useRef();
          const handleMouseDown = event => {
            backdropClick.current = event.target === event.currentTarget;
          };
          const handleBackdropClick = event => {
            if (onClick) {
              onClick(event);
            }
            if (!backdropClick.current) {
              return;
            }
            backdropClick.current = null;
            if (onBackdropClick) {
              onBackdropClick(event);
            }
            if (onClose) {
              onClose(event, "backdropClick");
            }
          };
          const ariaLabelledby = useId(ariaLabelledbyProp);
          const dialogContextValue = reactExports.useMemo(() => {
            return {
              titleId: ariaLabelledby
            };
          }, [ariaLabelledby]);
          return /* @__PURE__ */jsxRuntimeExports.jsx(DialogRoot, _extends({
            className: clsx(classes.root, className),
            closeAfterTransition: true,
            components: {
              Backdrop: DialogBackdrop
            },
            componentsProps: {
              backdrop: _extends({
                transitionDuration,
                as: BackdropComponent
              }, BackdropProps)
            },
            disableEscapeKeyDown,
            onClose,
            open,
            ref,
            onClick: handleBackdropClick,
            ownerState
          }, other, {
            children: /* @__PURE__ */jsxRuntimeExports.jsx(TransitionComponent, _extends({
              appear: true,
              in: open,
              timeout: transitionDuration,
              role: "presentation"
            }, TransitionProps, {
              children: /* @__PURE__ */jsxRuntimeExports.jsx(DialogContainer, {
                className: clsx(classes.container),
                onMouseDown: handleMouseDown,
                ownerState,
                children: /* @__PURE__ */jsxRuntimeExports.jsx(DialogPaper, _extends({
                  as: PaperComponent,
                  elevation: 24,
                  role: "dialog",
                  "aria-describedby": ariaDescribedby,
                  "aria-labelledby": ariaLabelledby
                }, PaperProps, {
                  className: clsx(classes.paper, PaperProps.className),
                  ownerState,
                  children: /* @__PURE__ */jsxRuntimeExports.jsx(DialogContext.Provider, {
                    value: dialogContextValue,
                    children
                  })
                }))
              })
            }))
          }));
        }));
        function getDialogContentUtilityClass(slot) {
          return generateUtilityClass('MuiDialogContent', slot);
        }
        generateUtilityClasses('MuiDialogContent', ['root', 'dividers']);
        function getDialogTitleUtilityClass(slot) {
          return generateUtilityClass('MuiDialogTitle', slot);
        }
        const dialogTitleClasses = generateUtilityClasses('MuiDialogTitle', ['root']);
        const _excluded$4 = ["className", "dividers"];
        const useUtilityClasses$3 = ownerState => {
          const classes = ownerState.classes,
            dividers = ownerState.dividers;
          const slots = {
            root: ["root", dividers && "dividers"]
          };
          return composeClasses(slots, getDialogContentUtilityClass, classes);
        };
        const DialogContentRoot = styled("div", {
          name: "MuiDialogContent",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.root, ownerState.dividers && styles.dividers];
          }
        })(({
          theme,
          ownerState
        }) => _extends({
          flex: "1 1 auto",
          // Add iOS momentum scrolling for iOS < 13.0
          WebkitOverflowScrolling: "touch",
          overflowY: "auto",
          padding: "20px 24px"
        }, ownerState.dividers ? {
          padding: "16px 24px",
          borderTop: `1px solid ${(theme.vars || theme).palette.divider}`,
          borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
        } : {
          [`.${dialogTitleClasses.root} + &`]: {
            paddingTop: 0
          }
        }));
        const DialogContent = exports("b", /* @__PURE__ */reactExports.forwardRef(function DialogContent2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiDialogContent"
          });
          const className = props.className,
            _props$dividers = props.dividers,
            dividers = _props$dividers === void 0 ? false : _props$dividers,
            other = _objectWithoutPropertiesLoose(props, _excluded$4);
          const ownerState = _extends({}, props, {
            dividers
          });
          const classes = useUtilityClasses$3(ownerState);
          return /* @__PURE__ */jsxRuntimeExports.jsx(DialogContentRoot, _extends({
            className: clsx(classes.root, className),
            ownerState,
            ref
          }, other));
        }));
        function getTabUtilityClass(slot) {
          return generateUtilityClass('MuiTab', slot);
        }
        const tabClasses = exports("t", generateUtilityClasses('MuiTab', ['root', 'labelIcon', 'textColorInherit', 'textColorPrimary', 'textColorSecondary', 'selected', 'disabled', 'fullWidth', 'wrapped', 'iconWrapper']));
        const _excluded$3 = ["className", "disabled", "disableFocusRipple", "fullWidth", "icon", "iconPosition", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped"];
        const useUtilityClasses$2 = ownerState => {
          const classes = ownerState.classes,
            textColor = ownerState.textColor,
            fullWidth = ownerState.fullWidth,
            wrapped = ownerState.wrapped,
            icon = ownerState.icon,
            label = ownerState.label,
            selected = ownerState.selected,
            disabled = ownerState.disabled;
          const slots = {
            root: ["root", icon && label && "labelIcon", `textColor${capitalize(textColor)}`, fullWidth && "fullWidth", wrapped && "wrapped", selected && "selected", disabled && "disabled"],
            iconWrapper: ["iconWrapper"]
          };
          return composeClasses(slots, getTabUtilityClass, classes);
        };
        const TabRoot = styled(ButtonBase, {
          name: "MuiTab",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.root, ownerState.label && ownerState.icon && styles.labelIcon, styles[`textColor${capitalize(ownerState.textColor)}`], ownerState.fullWidth && styles.fullWidth, ownerState.wrapped && styles.wrapped, {
              [`& .${tabClasses.iconWrapper}`]: styles.iconWrapper
            }];
          }
        })(({
          theme,
          ownerState
        }) => _extends({}, theme.typography.button, {
          maxWidth: 360,
          minWidth: 90,
          position: "relative",
          minHeight: 48,
          flexShrink: 0,
          padding: "12px 16px",
          overflow: "hidden",
          whiteSpace: "normal",
          textAlign: "center"
        }, ownerState.label && {
          flexDirection: ownerState.iconPosition === "top" || ownerState.iconPosition === "bottom" ? "column" : "row"
        }, {
          lineHeight: 1.25
        }, ownerState.icon && ownerState.label && {
          minHeight: 72,
          paddingTop: 9,
          paddingBottom: 9,
          [`& > .${tabClasses.iconWrapper}`]: _extends({}, ownerState.iconPosition === "top" && {
            marginBottom: 6
          }, ownerState.iconPosition === "bottom" && {
            marginTop: 6
          }, ownerState.iconPosition === "start" && {
            marginRight: theme.spacing(1)
          }, ownerState.iconPosition === "end" && {
            marginLeft: theme.spacing(1)
          })
        }, ownerState.textColor === "inherit" && {
          color: "inherit",
          opacity: 0.6,
          // same opacity as theme.palette.text.secondary
          [`&.${tabClasses.selected}`]: {
            opacity: 1
          },
          [`&.${tabClasses.disabled}`]: {
            opacity: (theme.vars || theme).palette.action.disabledOpacity
          }
        }, ownerState.textColor === "primary" && {
          color: (theme.vars || theme).palette.text.secondary,
          [`&.${tabClasses.selected}`]: {
            color: (theme.vars || theme).palette.primary.main
          },
          [`&.${tabClasses.disabled}`]: {
            color: (theme.vars || theme).palette.text.disabled
          }
        }, ownerState.textColor === "secondary" && {
          color: (theme.vars || theme).palette.text.secondary,
          [`&.${tabClasses.selected}`]: {
            color: (theme.vars || theme).palette.secondary.main
          },
          [`&.${tabClasses.disabled}`]: {
            color: (theme.vars || theme).palette.text.disabled
          }
        }, ownerState.fullWidth && {
          flexShrink: 1,
          flexGrow: 1,
          flexBasis: 0,
          maxWidth: "none"
        }, ownerState.wrapped && {
          fontSize: theme.typography.pxToRem(12)
        }));
        const Tab = exports("c", /* @__PURE__ */reactExports.forwardRef(function Tab2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiTab"
          });
          const className = props.className,
            _props$disabled = props.disabled,
            disabled = _props$disabled === void 0 ? false : _props$disabled,
            _props$disableFocusRi = props.disableFocusRipple,
            disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
            fullWidth = props.fullWidth,
            iconProp = props.icon,
            _props$iconPosition = props.iconPosition,
            iconPosition = _props$iconPosition === void 0 ? "top" : _props$iconPosition,
            indicator = props.indicator,
            label = props.label,
            onChange = props.onChange,
            onClick = props.onClick,
            onFocus = props.onFocus,
            selected = props.selected,
            selectionFollowsFocus = props.selectionFollowsFocus,
            _props$textColor = props.textColor,
            textColor = _props$textColor === void 0 ? "inherit" : _props$textColor,
            value = props.value,
            _props$wrapped = props.wrapped,
            wrapped = _props$wrapped === void 0 ? false : _props$wrapped,
            other = _objectWithoutPropertiesLoose(props, _excluded$3);
          const ownerState = _extends({}, props, {
            disabled,
            disableFocusRipple,
            selected,
            icon: !!iconProp,
            iconPosition,
            label: !!label,
            fullWidth,
            textColor,
            wrapped
          });
          const classes = useUtilityClasses$2(ownerState);
          const icon = iconProp && label && /* @__PURE__ */reactExports.isValidElement(iconProp) ? /* @__PURE__ */reactExports.cloneElement(iconProp, {
            className: clsx(classes.iconWrapper, iconProp.props.className)
          }) : iconProp;
          const handleClick = event => {
            if (!selected && onChange) {
              onChange(event, value);
            }
            if (onClick) {
              onClick(event);
            }
          };
          const handleFocus = event => {
            if (selectionFollowsFocus && !selected && onChange) {
              onChange(event, value);
            }
            if (onFocus) {
              onFocus(event);
            }
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs(TabRoot, _extends({
            focusRipple: !disableFocusRipple,
            className: clsx(classes.root, className),
            ref,
            role: "tab",
            "aria-selected": selected,
            disabled,
            onClick: handleClick,
            onFocus: handleFocus,
            ownerState,
            tabIndex: selected ? 0 : -1
          }, other, {
            children: [iconPosition === "top" || iconPosition === "start" ? /* @__PURE__ */jsxRuntimeExports.jsxs(reactExports.Fragment, {
              children: [icon, label]
            }) : /* @__PURE__ */jsxRuntimeExports.jsxs(reactExports.Fragment, {
              children: [label, icon]
            }), indicator]
          }));
        }));
        const KeyboardArrowLeft = exports("f", createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
        }), 'KeyboardArrowLeft'));
        const KeyboardArrowRight = exports("K", createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
        }), 'KeyboardArrowRight'));
        function easeInOutSin(time) {
          return (1 + Math.sin(Math.PI * time - Math.PI / 2)) / 2;
        }
        function animate(property, element, to, options = {}, cb = () => {}) {
          const _options$ease = options.ease,
            ease = _options$ease === void 0 ? easeInOutSin : _options$ease,
            _options$duration = options.duration,
            duration = _options$duration === void 0 ? 300 : _options$duration;
          let start = null;
          const from = element[property];
          let cancelled = false;
          const cancel = () => {
            cancelled = true;
          };
          const step = timestamp => {
            if (cancelled) {
              cb(new Error('Animation cancelled'));
              return;
            }
            if (start === null) {
              start = timestamp;
            }
            const time = Math.min(1, (timestamp - start) / duration);
            element[property] = ease(time) * (to - from) + from;
            if (time >= 1) {
              requestAnimationFrame(() => {
                cb(null);
              });
              return;
            }
            requestAnimationFrame(step);
          };
          if (from === to) {
            cb(new Error('Element already at target position'));
            return cancel;
          }
          requestAnimationFrame(step);
          return cancel;
        }
        const _excluded$2 = ["onChange"];
        const styles = {
          width: 99,
          height: 99,
          position: "absolute",
          top: -9999,
          overflow: "scroll"
        };
        function ScrollbarSize(props) {
          const onChange = props.onChange,
            other = _objectWithoutPropertiesLoose(props, _excluded$2);
          const scrollbarHeight = reactExports.useRef();
          const nodeRef = reactExports.useRef(null);
          const setMeasurements = () => {
            scrollbarHeight.current = nodeRef.current.offsetHeight - nodeRef.current.clientHeight;
          };
          useEnhancedEffect(() => {
            const handleResize = debounce$1(() => {
              const prevHeight = scrollbarHeight.current;
              setMeasurements();
              if (prevHeight !== scrollbarHeight.current) {
                onChange(scrollbarHeight.current);
              }
            });
            const containerWindow = ownerWindow(nodeRef.current);
            containerWindow.addEventListener("resize", handleResize);
            return () => {
              handleResize.clear();
              containerWindow.removeEventListener("resize", handleResize);
            };
          }, [onChange]);
          reactExports.useEffect(() => {
            setMeasurements();
            onChange(scrollbarHeight.current);
          }, [onChange]);
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", _extends({
            style: styles,
            ref: nodeRef
          }, other));
        }
        function getTabScrollButtonUtilityClass(slot) {
          return generateUtilityClass('MuiTabScrollButton', slot);
        }
        const tabScrollButtonClasses = generateUtilityClasses('MuiTabScrollButton', ['root', 'vertical', 'horizontal', 'disabled']);
        const _excluded$1 = ["className", "slots", "slotProps", "direction", "orientation", "disabled"];
        const useUtilityClasses$1 = ownerState => {
          const classes = ownerState.classes,
            orientation = ownerState.orientation,
            disabled = ownerState.disabled;
          const slots = {
            root: ["root", orientation, disabled && "disabled"]
          };
          return composeClasses(slots, getTabScrollButtonUtilityClass, classes);
        };
        const TabScrollButtonRoot = styled(ButtonBase, {
          name: "MuiTabScrollButton",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.root, ownerState.orientation && styles[ownerState.orientation]];
          }
        })(({
          ownerState
        }) => _extends({
          width: 40,
          flexShrink: 0,
          opacity: 0.8,
          [`&.${tabScrollButtonClasses.disabled}`]: {
            opacity: 0
          }
        }, ownerState.orientation === "vertical" && {
          width: "100%",
          height: 40,
          "& svg": {
            transform: `rotate(${ownerState.isRtl ? -90 : 90}deg)`
          }
        }));
        const TabScrollButton = /* @__PURE__ */reactExports.forwardRef(function TabScrollButton2(inProps, ref) {
          var _slots$StartScrollBut, _slots$EndScrollButto;
          const props = useDefaultProps({
            props: inProps,
            name: "MuiTabScrollButton"
          });
          const className = props.className,
            _props$slots3 = props.slots,
            slots = _props$slots3 === void 0 ? {} : _props$slots3,
            _props$slotProps3 = props.slotProps,
            slotProps = _props$slotProps3 === void 0 ? {} : _props$slotProps3,
            direction = props.direction,
            other = _objectWithoutPropertiesLoose(props, _excluded$1);
          const isRtl = useRtl();
          const ownerState = _extends({
            isRtl
          }, props);
          const classes = useUtilityClasses$1(ownerState);
          const StartButtonIcon = (_slots$StartScrollBut = slots.StartScrollButtonIcon) != null ? _slots$StartScrollBut : KeyboardArrowLeft;
          const EndButtonIcon = (_slots$EndScrollButto = slots.EndScrollButtonIcon) != null ? _slots$EndScrollButto : KeyboardArrowRight;
          const startButtonIconProps = useSlotProps({
            elementType: StartButtonIcon,
            externalSlotProps: slotProps.startScrollButtonIcon,
            additionalProps: {
              fontSize: "small"
            },
            ownerState
          });
          const endButtonIconProps = useSlotProps({
            elementType: EndButtonIcon,
            externalSlotProps: slotProps.endScrollButtonIcon,
            additionalProps: {
              fontSize: "small"
            },
            ownerState
          });
          return /* @__PURE__ */jsxRuntimeExports.jsx(TabScrollButtonRoot, _extends({
            component: "div",
            className: clsx(classes.root, className),
            ref,
            role: null,
            ownerState,
            tabIndex: null
          }, other, {
            children: direction === "left" ? /* @__PURE__ */jsxRuntimeExports.jsx(StartButtonIcon, _extends({}, startButtonIconProps)) : /* @__PURE__ */jsxRuntimeExports.jsx(EndButtonIcon, _extends({}, endButtonIconProps))
          }));
        });
        function getTabsUtilityClass(slot) {
          return generateUtilityClass('MuiTabs', slot);
        }
        const tabsClasses = exports("e", generateUtilityClasses('MuiTabs', ['root', 'vertical', 'flexContainer', 'flexContainerVertical', 'centered', 'scroller', 'fixed', 'scrollableX', 'scrollableY', 'hideScrollbar', 'scrollButtons', 'scrollButtonsHideMobile', 'indicator']));
        const _excluded = ["aria-label", "aria-labelledby", "action", "centered", "children", "className", "component", "allowScrollButtonsMobile", "indicatorColor", "onChange", "orientation", "ScrollButtonComponent", "scrollButtons", "selectionFollowsFocus", "slots", "slotProps", "TabIndicatorProps", "TabScrollButtonProps", "textColor", "value", "variant", "visibleScrollbar"];
        const nextItem = (list, item) => {
          if (list === item) {
            return list.firstChild;
          }
          if (item && item.nextElementSibling) {
            return item.nextElementSibling;
          }
          return list.firstChild;
        };
        const previousItem = (list, item) => {
          if (list === item) {
            return list.lastChild;
          }
          if (item && item.previousElementSibling) {
            return item.previousElementSibling;
          }
          return list.lastChild;
        };
        const moveFocus = (list, currentFocus, traversalFunction) => {
          let wrappedOnce = false;
          let nextFocus = traversalFunction(list, currentFocus);
          while (nextFocus) {
            if (nextFocus === list.firstChild) {
              if (wrappedOnce) {
                return;
              }
              wrappedOnce = true;
            }
            const nextFocusDisabled = nextFocus.disabled || nextFocus.getAttribute("aria-disabled") === "true";
            if (!nextFocus.hasAttribute("tabindex") || nextFocusDisabled) {
              nextFocus = traversalFunction(list, nextFocus);
            } else {
              nextFocus.focus();
              return;
            }
          }
        };
        const useUtilityClasses = ownerState => {
          const vertical = ownerState.vertical,
            fixed = ownerState.fixed,
            hideScrollbar = ownerState.hideScrollbar,
            scrollableX = ownerState.scrollableX,
            scrollableY = ownerState.scrollableY,
            centered = ownerState.centered,
            scrollButtonsHideMobile = ownerState.scrollButtonsHideMobile,
            classes = ownerState.classes;
          const slots = {
            root: ["root", vertical && "vertical"],
            scroller: ["scroller", fixed && "fixed", hideScrollbar && "hideScrollbar", scrollableX && "scrollableX", scrollableY && "scrollableY"],
            flexContainer: ["flexContainer", vertical && "flexContainerVertical", centered && "centered"],
            indicator: ["indicator"],
            scrollButtons: ["scrollButtons", scrollButtonsHideMobile && "scrollButtonsHideMobile"],
            scrollableX: [scrollableX && "scrollableX"],
            hideScrollbar: [hideScrollbar && "hideScrollbar"]
          };
          return composeClasses(slots, getTabsUtilityClass, classes);
        };
        const TabsRoot = styled("div", {
          name: "MuiTabs",
          slot: "Root",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [{
              [`& .${tabsClasses.scrollButtons}`]: styles.scrollButtons
            }, {
              [`& .${tabsClasses.scrollButtons}`]: ownerState.scrollButtonsHideMobile && styles.scrollButtonsHideMobile
            }, styles.root, ownerState.vertical && styles.vertical];
          }
        })(({
          ownerState,
          theme
        }) => _extends({
          overflow: "hidden",
          minHeight: 48,
          // Add iOS momentum scrolling for iOS < 13.0
          WebkitOverflowScrolling: "touch",
          display: "flex"
        }, ownerState.vertical && {
          flexDirection: "column"
        }, ownerState.scrollButtonsHideMobile && {
          [`& .${tabsClasses.scrollButtons}`]: {
            [theme.breakpoints.down("sm")]: {
              display: "none"
            }
          }
        }));
        const TabsScroller = styled("div", {
          name: "MuiTabs",
          slot: "Scroller",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.scroller, ownerState.fixed && styles.fixed, ownerState.hideScrollbar && styles.hideScrollbar, ownerState.scrollableX && styles.scrollableX, ownerState.scrollableY && styles.scrollableY];
          }
        })(({
          ownerState
        }) => _extends({
          position: "relative",
          display: "inline-block",
          flex: "1 1 auto",
          whiteSpace: "nowrap"
        }, ownerState.fixed && {
          overflowX: "hidden",
          width: "100%"
        }, ownerState.hideScrollbar && {
          // Hide dimensionless scrollbar on macOS
          scrollbarWidth: "none",
          // Firefox
          "&::-webkit-scrollbar": {
            display: "none"
            // Safari + Chrome
          }
        }, ownerState.scrollableX && {
          overflowX: "auto",
          overflowY: "hidden"
        }, ownerState.scrollableY && {
          overflowY: "auto",
          overflowX: "hidden"
        }));
        const FlexContainer = styled("div", {
          name: "MuiTabs",
          slot: "FlexContainer",
          overridesResolver: (props, styles) => {
            const ownerState = props.ownerState;
            return [styles.flexContainer, ownerState.vertical && styles.flexContainerVertical, ownerState.centered && styles.centered];
          }
        })(({
          ownerState
        }) => _extends({
          display: "flex"
        }, ownerState.vertical && {
          flexDirection: "column"
        }, ownerState.centered && {
          justifyContent: "center"
        }));
        const TabsIndicator = styled("span", {
          name: "MuiTabs",
          slot: "Indicator",
          overridesResolver: (props, styles) => styles.indicator
        })(({
          ownerState,
          theme
        }) => _extends({
          position: "absolute",
          height: 2,
          bottom: 0,
          width: "100%",
          transition: theme.transitions.create()
        }, ownerState.indicatorColor === "primary" && {
          backgroundColor: (theme.vars || theme).palette.primary.main
        }, ownerState.indicatorColor === "secondary" && {
          backgroundColor: (theme.vars || theme).palette.secondary.main
        }, ownerState.vertical && {
          height: "100%",
          width: 2,
          right: 0
        }));
        const TabsScrollbarSize = styled(ScrollbarSize)({
          overflowX: "auto",
          overflowY: "hidden",
          // Hide dimensionless scrollbar on macOS
          scrollbarWidth: "none",
          // Firefox
          "&::-webkit-scrollbar": {
            display: "none"
            // Safari + Chrome
          }
        });
        const defaultIndicatorStyle = {};
        const Tabs = exports("T", /* @__PURE__ */reactExports.forwardRef(function Tabs2(inProps, ref) {
          const props = useDefaultProps({
            props: inProps,
            name: "MuiTabs"
          });
          const theme = useTheme$2();
          const isRtl = useRtl();
          const ariaLabel = props["aria-label"],
            ariaLabelledBy = props["aria-labelledby"],
            action = props.action,
            _props$centered = props.centered,
            centered = _props$centered === void 0 ? false : _props$centered,
            childrenProp = props.children,
            className = props.className,
            _props$component = props.component,
            component = _props$component === void 0 ? "div" : _props$component,
            _props$allowScrollBut = props.allowScrollButtonsMobile,
            allowScrollButtonsMobile = _props$allowScrollBut === void 0 ? false : _props$allowScrollBut,
            _props$indicatorColor = props.indicatorColor,
            indicatorColor = _props$indicatorColor === void 0 ? "primary" : _props$indicatorColor,
            onChange = props.onChange,
            _props$orientation = props.orientation,
            orientation = _props$orientation === void 0 ? "horizontal" : _props$orientation,
            _props$ScrollButtonCo = props.ScrollButtonComponent,
            ScrollButtonComponent = _props$ScrollButtonCo === void 0 ? TabScrollButton : _props$ScrollButtonCo,
            _props$scrollButtons = props.scrollButtons,
            scrollButtons = _props$scrollButtons === void 0 ? "auto" : _props$scrollButtons,
            selectionFollowsFocus = props.selectionFollowsFocus,
            _props$slots4 = props.slots,
            slots = _props$slots4 === void 0 ? {} : _props$slots4,
            _props$slotProps4 = props.slotProps,
            slotProps = _props$slotProps4 === void 0 ? {} : _props$slotProps4,
            _props$TabIndicatorPr = props.TabIndicatorProps,
            TabIndicatorProps = _props$TabIndicatorPr === void 0 ? {} : _props$TabIndicatorPr,
            _props$TabScrollButto = props.TabScrollButtonProps,
            TabScrollButtonProps = _props$TabScrollButto === void 0 ? {} : _props$TabScrollButto,
            _props$textColor2 = props.textColor,
            textColor = _props$textColor2 === void 0 ? "primary" : _props$textColor2,
            value = props.value,
            _props$variant = props.variant,
            variant = _props$variant === void 0 ? "standard" : _props$variant,
            _props$visibleScrollb = props.visibleScrollbar,
            visibleScrollbar = _props$visibleScrollb === void 0 ? false : _props$visibleScrollb,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const scrollable = variant === "scrollable";
          const vertical = orientation === "vertical";
          const scrollStart = vertical ? "scrollTop" : "scrollLeft";
          const start = vertical ? "top" : "left";
          const end = vertical ? "bottom" : "right";
          const clientSize = vertical ? "clientHeight" : "clientWidth";
          const size = vertical ? "height" : "width";
          const ownerState = _extends({}, props, {
            component,
            allowScrollButtonsMobile,
            indicatorColor,
            orientation,
            vertical,
            scrollButtons,
            textColor,
            variant,
            visibleScrollbar,
            fixed: !scrollable,
            hideScrollbar: scrollable && !visibleScrollbar,
            scrollableX: scrollable && !vertical,
            scrollableY: scrollable && vertical,
            centered: centered && !scrollable,
            scrollButtonsHideMobile: !allowScrollButtonsMobile
          });
          const classes = useUtilityClasses(ownerState);
          const startScrollButtonIconProps = useSlotProps({
            elementType: slots.StartScrollButtonIcon,
            externalSlotProps: slotProps.startScrollButtonIcon,
            ownerState
          });
          const endScrollButtonIconProps = useSlotProps({
            elementType: slots.EndScrollButtonIcon,
            externalSlotProps: slotProps.endScrollButtonIcon,
            ownerState
          });
          const _reactExports$useStat9 = reactExports.useState(false),
            _reactExports$useStat10 = _slicedToArray(_reactExports$useStat9, 2),
            mounted = _reactExports$useStat10[0],
            setMounted = _reactExports$useStat10[1];
          const _reactExports$useStat11 = reactExports.useState(defaultIndicatorStyle),
            _reactExports$useStat12 = _slicedToArray(_reactExports$useStat11, 2),
            indicatorStyle = _reactExports$useStat12[0],
            setIndicatorStyle = _reactExports$useStat12[1];
          const _reactExports$useStat13 = reactExports.useState(false),
            _reactExports$useStat14 = _slicedToArray(_reactExports$useStat13, 2),
            displayStartScroll = _reactExports$useStat14[0],
            setDisplayStartScroll = _reactExports$useStat14[1];
          const _reactExports$useStat15 = reactExports.useState(false),
            _reactExports$useStat16 = _slicedToArray(_reactExports$useStat15, 2),
            displayEndScroll = _reactExports$useStat16[0],
            setDisplayEndScroll = _reactExports$useStat16[1];
          const _reactExports$useStat17 = reactExports.useState(false),
            _reactExports$useStat18 = _slicedToArray(_reactExports$useStat17, 2),
            updateScrollObserver = _reactExports$useStat18[0],
            setUpdateScrollObserver = _reactExports$useStat18[1];
          const _reactExports$useStat19 = reactExports.useState({
              overflow: "hidden",
              scrollbarWidth: 0
            }),
            _reactExports$useStat20 = _slicedToArray(_reactExports$useStat19, 2),
            scrollerStyle = _reactExports$useStat20[0],
            setScrollerStyle = _reactExports$useStat20[1];
          const valueToIndex = /* @__PURE__ */new Map();
          const tabsRef = reactExports.useRef(null);
          const tabListRef = reactExports.useRef(null);
          const getTabsMeta = () => {
            const tabsNode = tabsRef.current;
            let tabsMeta;
            if (tabsNode) {
              const rect = tabsNode.getBoundingClientRect();
              tabsMeta = {
                clientWidth: tabsNode.clientWidth,
                scrollLeft: tabsNode.scrollLeft,
                scrollTop: tabsNode.scrollTop,
                scrollLeftNormalized: getNormalizedScrollLeft(tabsNode, isRtl ? "rtl" : "ltr"),
                scrollWidth: tabsNode.scrollWidth,
                top: rect.top,
                bottom: rect.bottom,
                left: rect.left,
                right: rect.right
              };
            }
            let tabMeta;
            if (tabsNode && value !== false) {
              const children2 = tabListRef.current.children;
              if (children2.length > 0) {
                const tab = children2[valueToIndex.get(value)];
                tabMeta = tab ? tab.getBoundingClientRect() : null;
              }
            }
            return {
              tabsMeta,
              tabMeta
            };
          };
          const updateIndicatorState = useEventCallback(() => {
            const _getTabsMeta = getTabsMeta(),
              tabsMeta = _getTabsMeta.tabsMeta,
              tabMeta = _getTabsMeta.tabMeta;
            let startValue = 0;
            let startIndicator;
            if (vertical) {
              startIndicator = "top";
              if (tabMeta && tabsMeta) {
                startValue = tabMeta.top - tabsMeta.top + tabsMeta.scrollTop;
              }
            } else {
              startIndicator = isRtl ? "right" : "left";
              if (tabMeta && tabsMeta) {
                const correction = isRtl ? tabsMeta.scrollLeftNormalized + tabsMeta.clientWidth - tabsMeta.scrollWidth : tabsMeta.scrollLeft;
                startValue = (isRtl ? -1 : 1) * (tabMeta[startIndicator] - tabsMeta[startIndicator] + correction);
              }
            }
            const newIndicatorStyle = {
              [startIndicator]: startValue,
              // May be wrong until the font is loaded.
              [size]: tabMeta ? tabMeta[size] : 0
            };
            if (isNaN(indicatorStyle[startIndicator]) || isNaN(indicatorStyle[size])) {
              setIndicatorStyle(newIndicatorStyle);
            } else {
              const dStart = Math.abs(indicatorStyle[startIndicator] - newIndicatorStyle[startIndicator]);
              const dSize = Math.abs(indicatorStyle[size] - newIndicatorStyle[size]);
              if (dStart >= 1 || dSize >= 1) {
                setIndicatorStyle(newIndicatorStyle);
              }
            }
          });
          const scroll = (scrollValue, {
            animation = true
          } = {}) => {
            if (animation) {
              animate(scrollStart, tabsRef.current, scrollValue, {
                duration: theme.transitions.duration.standard
              });
            } else {
              tabsRef.current[scrollStart] = scrollValue;
            }
          };
          const moveTabsScroll = delta => {
            let scrollValue = tabsRef.current[scrollStart];
            if (vertical) {
              scrollValue += delta;
            } else {
              scrollValue += delta * (isRtl ? -1 : 1);
              scrollValue *= isRtl && detectScrollType() === "reverse" ? -1 : 1;
            }
            scroll(scrollValue);
          };
          const getScrollSize = () => {
            const containerSize = tabsRef.current[clientSize];
            let totalSize = 0;
            const children2 = Array.from(tabListRef.current.children);
            for (let i = 0; i < children2.length; i += 1) {
              const tab = children2[i];
              if (totalSize + tab[clientSize] > containerSize) {
                if (i === 0) {
                  totalSize = containerSize;
                }
                break;
              }
              totalSize += tab[clientSize];
            }
            return totalSize;
          };
          const handleStartScrollClick = () => {
            moveTabsScroll(-1 * getScrollSize());
          };
          const handleEndScrollClick = () => {
            moveTabsScroll(getScrollSize());
          };
          const handleScrollbarSizeChange = reactExports.useCallback(scrollbarWidth => {
            setScrollerStyle({
              overflow: null,
              scrollbarWidth
            });
          }, []);
          const getConditionalElements = () => {
            const conditionalElements2 = {};
            conditionalElements2.scrollbarSizeListener = scrollable ? /* @__PURE__ */jsxRuntimeExports.jsx(TabsScrollbarSize, {
              onChange: handleScrollbarSizeChange,
              className: clsx(classes.scrollableX, classes.hideScrollbar)
            }) : null;
            const scrollButtonsActive = displayStartScroll || displayEndScroll;
            const showScrollButtons = scrollable && (scrollButtons === "auto" && scrollButtonsActive || scrollButtons === true);
            conditionalElements2.scrollButtonStart = showScrollButtons ? /* @__PURE__ */jsxRuntimeExports.jsx(ScrollButtonComponent, _extends({
              slots: {
                StartScrollButtonIcon: slots.StartScrollButtonIcon
              },
              slotProps: {
                startScrollButtonIcon: startScrollButtonIconProps
              },
              orientation,
              direction: isRtl ? "right" : "left",
              onClick: handleStartScrollClick,
              disabled: !displayStartScroll
            }, TabScrollButtonProps, {
              className: clsx(classes.scrollButtons, TabScrollButtonProps.className)
            })) : null;
            conditionalElements2.scrollButtonEnd = showScrollButtons ? /* @__PURE__ */jsxRuntimeExports.jsx(ScrollButtonComponent, _extends({
              slots: {
                EndScrollButtonIcon: slots.EndScrollButtonIcon
              },
              slotProps: {
                endScrollButtonIcon: endScrollButtonIconProps
              },
              orientation,
              direction: isRtl ? "left" : "right",
              onClick: handleEndScrollClick,
              disabled: !displayEndScroll
            }, TabScrollButtonProps, {
              className: clsx(classes.scrollButtons, TabScrollButtonProps.className)
            })) : null;
            return conditionalElements2;
          };
          const scrollSelectedIntoView = useEventCallback(animation => {
            const _getTabsMeta2 = getTabsMeta(),
              tabsMeta = _getTabsMeta2.tabsMeta,
              tabMeta = _getTabsMeta2.tabMeta;
            if (!tabMeta || !tabsMeta) {
              return;
            }
            if (tabMeta[start] < tabsMeta[start]) {
              const nextScrollStart = tabsMeta[scrollStart] + (tabMeta[start] - tabsMeta[start]);
              scroll(nextScrollStart, {
                animation
              });
            } else if (tabMeta[end] > tabsMeta[end]) {
              const nextScrollStart = tabsMeta[scrollStart] + (tabMeta[end] - tabsMeta[end]);
              scroll(nextScrollStart, {
                animation
              });
            }
          });
          const updateScrollButtonState = useEventCallback(() => {
            if (scrollable && scrollButtons !== false) {
              setUpdateScrollObserver(!updateScrollObserver);
            }
          });
          reactExports.useEffect(() => {
            const handleResize = debounce$1(() => {
              if (tabsRef.current) {
                updateIndicatorState();
              }
            });
            let resizeObserver;
            const handleMutation = records => {
              records.forEach(record => {
                record.removedNodes.forEach(item => {
                  var _resizeObserver;
                  (_resizeObserver = resizeObserver) == null || _resizeObserver.unobserve(item);
                });
                record.addedNodes.forEach(item => {
                  var _resizeObserver2;
                  (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.observe(item);
                });
              });
              handleResize();
              updateScrollButtonState();
            };
            const win = ownerWindow(tabsRef.current);
            win.addEventListener("resize", handleResize);
            let mutationObserver;
            if (typeof ResizeObserver !== "undefined") {
              resizeObserver = new ResizeObserver(handleResize);
              Array.from(tabListRef.current.children).forEach(child => {
                resizeObserver.observe(child);
              });
            }
            if (typeof MutationObserver !== "undefined") {
              mutationObserver = new MutationObserver(handleMutation);
              mutationObserver.observe(tabListRef.current, {
                childList: true
              });
            }
            return () => {
              var _mutationObserver, _resizeObserver3;
              handleResize.clear();
              win.removeEventListener("resize", handleResize);
              (_mutationObserver = mutationObserver) == null || _mutationObserver.disconnect();
              (_resizeObserver3 = resizeObserver) == null || _resizeObserver3.disconnect();
            };
          }, [updateIndicatorState, updateScrollButtonState]);
          reactExports.useEffect(() => {
            const tabListChildren = Array.from(tabListRef.current.children);
            const length = tabListChildren.length;
            if (typeof IntersectionObserver !== "undefined" && length > 0 && scrollable && scrollButtons !== false) {
              const firstTab = tabListChildren[0];
              const lastTab = tabListChildren[length - 1];
              const observerOptions = {
                root: tabsRef.current,
                threshold: 0.99
              };
              const handleScrollButtonStart = entries => {
                setDisplayStartScroll(!entries[0].isIntersecting);
              };
              const firstObserver = new IntersectionObserver(handleScrollButtonStart, observerOptions);
              firstObserver.observe(firstTab);
              const handleScrollButtonEnd = entries => {
                setDisplayEndScroll(!entries[0].isIntersecting);
              };
              const lastObserver = new IntersectionObserver(handleScrollButtonEnd, observerOptions);
              lastObserver.observe(lastTab);
              return () => {
                firstObserver.disconnect();
                lastObserver.disconnect();
              };
            }
            return void 0;
          }, [scrollable, scrollButtons, updateScrollObserver, childrenProp == null ? void 0 : childrenProp.length]);
          reactExports.useEffect(() => {
            setMounted(true);
          }, []);
          reactExports.useEffect(() => {
            updateIndicatorState();
          });
          reactExports.useEffect(() => {
            scrollSelectedIntoView(defaultIndicatorStyle !== indicatorStyle);
          }, [scrollSelectedIntoView, indicatorStyle]);
          reactExports.useImperativeHandle(action, () => ({
            updateIndicator: updateIndicatorState,
            updateScrollButtons: updateScrollButtonState
          }), [updateIndicatorState, updateScrollButtonState]);
          const indicator = /* @__PURE__ */jsxRuntimeExports.jsx(TabsIndicator, _extends({}, TabIndicatorProps, {
            className: clsx(classes.indicator, TabIndicatorProps.className),
            ownerState,
            style: _extends({}, indicatorStyle, TabIndicatorProps.style)
          }));
          let childIndex = 0;
          const children = reactExports.Children.map(childrenProp, child => {
            if (! /* @__PURE__ */reactExports.isValidElement(child)) {
              return null;
            }
            const childValue = child.props.value === void 0 ? childIndex : child.props.value;
            valueToIndex.set(childValue, childIndex);
            const selected = childValue === value;
            childIndex += 1;
            return /* @__PURE__ */reactExports.cloneElement(child, _extends({
              fullWidth: variant === "fullWidth",
              indicator: selected && !mounted && indicator,
              selected,
              selectionFollowsFocus,
              onChange,
              textColor,
              value: childValue
            }, childIndex === 1 && value === false && !child.props.tabIndex ? {
              tabIndex: 0
            } : {}));
          });
          const handleKeyDown = event => {
            const list = tabListRef.current;
            const currentFocus = ownerDocument(list).activeElement;
            const role = currentFocus.getAttribute("role");
            if (role !== "tab") {
              return;
            }
            let previousItemKey = orientation === "horizontal" ? "ArrowLeft" : "ArrowUp";
            let nextItemKey = orientation === "horizontal" ? "ArrowRight" : "ArrowDown";
            if (orientation === "horizontal" && isRtl) {
              previousItemKey = "ArrowRight";
              nextItemKey = "ArrowLeft";
            }
            switch (event.key) {
              case previousItemKey:
                event.preventDefault();
                moveFocus(list, currentFocus, previousItem);
                break;
              case nextItemKey:
                event.preventDefault();
                moveFocus(list, currentFocus, nextItem);
                break;
              case "Home":
                event.preventDefault();
                moveFocus(list, null, nextItem);
                break;
              case "End":
                event.preventDefault();
                moveFocus(list, null, previousItem);
                break;
            }
          };
          const conditionalElements = getConditionalElements();
          return /* @__PURE__ */jsxRuntimeExports.jsxs(TabsRoot, _extends({
            className: clsx(classes.root, className),
            ownerState,
            ref,
            as: component
          }, other, {
            children: [conditionalElements.scrollButtonStart, conditionalElements.scrollbarSizeListener, /* @__PURE__ */jsxRuntimeExports.jsxs(TabsScroller, {
              className: classes.scroller,
              ownerState,
              style: {
                overflow: scrollerStyle.overflow,
                [vertical ? `margin${isRtl ? "Left" : "Right"}` : "marginBottom"]: visibleScrollbar ? void 0 : -scrollerStyle.scrollbarWidth
              },
              ref: tabsRef,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(FlexContainer, {
                "aria-label": ariaLabel,
                "aria-labelledby": ariaLabelledBy,
                "aria-orientation": orientation === "vertical" ? "vertical" : null,
                className: classes.flexContainer,
                ownerState,
                onKeyDown: handleKeyDown,
                ref: tabListRef,
                role: "tablist",
                children
              }), mounted && indicator]
            }), conditionalElements.scrollButtonEnd]
          }));
        }));
      }
    };
  });
})();
//# sourceMappingURL=Tabs-legacy-DSWwlWIj.js.map
