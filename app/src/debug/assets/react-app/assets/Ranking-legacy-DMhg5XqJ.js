;
(function () {
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  System.register(['./index-legacy-DHZhPI7F.js', './use-service-legacy-Dvd5TXWp.js', './index-legacy-CBeFNk_C.js', './useDrop-legacy-CIEtVtvH.js', './isTouchDevice-legacy-DpSdFl0J.js', './common-legacy-B-ynqPDp.js', './CardMedia-legacy-0wAW1jt0.js', './Card-legacy-C3ntY_pV.js', './Toolbar-legacy-Bj141DPD.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports, reactExports, useDispatch, useSelector, shallowEqual, useDrag, valueChange, orderChange, Box, useDrop;
    return {
      setters: [module => {
        jsxRuntimeExports = module.j;
        reactExports = module.r;
      }, module => {
        useDispatch = module.U;
        useSelector = module.H;
        shallowEqual = module.aS;
        useDrag = module.b9;
        valueChange = module.aT;
        orderChange = module.ba;
      }, module => {
        Box = module.B;
      }, module => {
        useDrop = module.u;
      }, null, null, null, null, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._dragContainer_5yuyr_1 {\n  border: 1px solid transparent;\n  border-radius: 4px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  margin: auto 8px;\n}\n\n._rankingItem_5yuyr_10 {\n  margin: 0px 8px 0px 8px;\n  padding: 8px;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        exports("default", Ranking);
        const dragContainer = "_dragContainer_5yuyr_1";
        const rankingItem = "_rankingItem_5yuyr_10";
        const styles = {
          dragContainer: dragContainer,
          rankingItem: rankingItem
        };
        function Ranking(props) {
          const dispatch = useDispatch();
          const state = useSelector(state2 => {
            let valuesMap = {};
            props.component.answers.forEach(element => {
              valuesMap[element.qualifiedCode] = state2.runState.values[element.qualifiedCode].value;
            });
            return valuesMap;
          }, shallowEqual);
          const itemTypeByCode = code => {
            return isNaN(state[code]) ? "unsorted" : "sorted";
          };
          const order = useSelector(state2 => {
            let valuesMap = {};
            props.component.answers.forEach(element => {
              if (state2.runState.order) {
                valuesMap[element.qualifiedCode] = state2.runState.order[element.qualifiedCode];
              } else {
                valuesMap[element.qualifiedCode] = state2.runState.values[element.qualifiedCode].order + 1;
              }
            });
            return valuesMap;
          }, shallowEqual);
          const withoutOrder = props.component.answers.filter(option => !state[option.qualifiedCode]).sort(function (a, b) {
            return order[a.qualifiedCode] - order[b.qualifiedCode];
          });
          const withOrder = props.component.answers.filter(option => +state[option.qualifiedCode] > 0).sort(function (a, b) {
            return state[a.qualifiedCode] - state[b.qualifiedCode];
          });
          const onItemTransfer = (item, index, itemType) => {
            const unOrdered = _objectSpread({}, order);
            if (itemType == "sorted" && itemTypeByCode(item.qualifiedCode) == "unsorted") {
              const currentOrder = index + 1;
              for (let key in state) {
                if (state.hasOwnProperty(key)) {
                  if (state[key] >= currentOrder) {
                    dispatch(valueChange({
                      componentCode: key,
                      value: state[key] + 1
                    }));
                  }
                }
              }
              dispatch(valueChange({
                componentCode: item.qualifiedCode,
                value: currentOrder
              }));
              item.index = index;
              const oldOrder = unOrdered[item.qualifiedCode];
              withoutOrder.forEach(item2 => {
                if (unOrdered[item2.qualifiedCode] >= oldOrder) {
                  unOrdered[item2.qualifiedCode] = unOrdered[item2.qualifiedCode] - 1;
                }
              });
              dispatch(orderChange(unOrdered));
            } else if (itemType == "unsorted" && itemTypeByCode(item.qualifiedCode) == "sorted") {
              const currentOrder = state[item.qualifiedCode];
              for (let key in state) {
                if (state.hasOwnProperty(key)) {
                  if (state[key] >= currentOrder) {
                    dispatch(valueChange({
                      componentCode: key,
                      value: state[key] - 1
                    }));
                  }
                }
              }
              dispatch(valueChange({
                componentCode: item.qualifiedCode,
                value: void 0
              }));
              item.index = index;
              const oldOrder = index + 1;
              withoutOrder.forEach(item2 => {
                if (unOrdered[item2.qualifiedCode] >= oldOrder) {
                  unOrdered[item2.qualifiedCode] = unOrdered[item2.qualifiedCode] + 1;
                }
              });
              unOrdered[item.qualifiedCode] = oldOrder;
              dispatch(orderChange(unOrdered));
            }
          };
          const onDoubleClick = item => {
            if (itemTypeByCode(item.qualifiedCode) == "unsorted") {
              onItemTransfer(item, withOrder.length, "sorted");
            } else {
              onItemTransfer(item, withoutOrder.length, "unsorted");
            }
          };
          const onHover = (hoveringItem, currentItem, currentItemType, currentItemIndex) => {
            const unOrdered = _objectSpread({}, order);
            if (currentItemType == "unsorted" && itemTypeByCode(hoveringItem.qualifiedCode) == "unsorted") {
              const hoveringOrder = unOrdered[hoveringItem.qualifiedCode];
              unOrdered[hoveringItem.qualifiedCode] = unOrdered[currentItem.qualifiedCode];
              unOrdered[currentItem.qualifiedCode] = hoveringOrder;
              dispatch(orderChange(unOrdered));
              hoveringItem.index = currentItemIndex;
            } else if (currentItemType == "sorted" && itemTypeByCode(hoveringItem.qualifiedCode) == "sorted") {
              dispatch(valueChange({
                componentCode: hoveringItem.qualifiedCode,
                value: state[currentItem.qualifiedCode]
              }));
              dispatch(valueChange({
                componentCode: currentItem.qualifiedCode,
                value: state[hoveringItem.qualifiedCode]
              }));
              hoveringItem.index = currentItemIndex;
            }
          };
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "1fr 1fr"
            },
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(RankingContainer, {
              styles,
              ordererLength: withOrder.length,
              unordererLength: withoutOrder.length,
              onHover,
              order,
              onItemTransfer,
              onDoubleClick,
              itemType: "unsorted",
              options: withoutOrder
            }), /* @__PURE__ */jsxRuntimeExports.jsx(RankingContainer, {
              styles,
              onHover,
              onItemTransfer,
              onDoubleClick,
              ordererLength: withOrder.length,
              unordererLength: withoutOrder.length,
              order,
              itemType: "sorted",
              options: withOrder
            })]
          });
        }
        function RankingContainer({
          styles: styles2,
          itemType,
          options,
          onItemTransfer,
          onDoubleClick,
          onHover
        }) {
          const refDrop = reactExports.useRef(null);
          return /* @__PURE__ */jsxRuntimeExports.jsxs(Box, {
            ref: refDrop,
            className: styles2.dragContainer,
            sx: {
              backgroundColor: "background.default"
            },
            children: [options.map((option, index) => {
              return /* @__PURE__ */jsxRuntimeExports.jsxs(reactExports.Fragment, {
                children: [/* @__PURE__ */jsxRuntimeExports.jsx(DropArea, {
                  itemType,
                  index,
                  onItemTransfer
                }, "drop" + option.code), /* @__PURE__ */jsxRuntimeExports.jsx(RankingOption, {
                  index,
                  onHover,
                  itemType,
                  option,
                  rankingItemStyle: styles2.rankingItem,
                  onDoubleClick
                }, option.code)]
              }, option.code);
            }), /* @__PURE__ */jsxRuntimeExports.jsx(DropArea, {
              itemType,
              index: options.length,
              fillParent: true,
              onItemTransfer
            }, "last")]
          });
        }
        function RankingOption({
          option,
          onDoubleClick: _onDoubleClick,
          rankingItemStyle,
          index,
          onHover,
          itemType
        }) {
          var _option$content;
          const containerRef = reactExports.useRef();
          const item = {
            index,
            qualifiedCode: option.qualifiedCode
          };
          const _useDrag = useDrag({
              type: "rankingOption",
              item,
              collect: monitor => {
                var _monitor$getItem;
                return ((_monitor$getItem = monitor.getItem()) === null || _monitor$getItem === void 0 ? void 0 : _monitor$getItem.qualifiedCode) === option.qualifiedCode;
              }
            }),
            _useDrag2 = _slicedToArray(_useDrag, 3),
            isDragging = _useDrag2[0],
            drag = _useDrag2[1],
            preview = _useDrag2[2];
          const _useDrop = useDrop({
              accept: "rankingOption",
              collect(monitor) {
                return {
                  handlerId: monitor.getHandlerId()
                };
              },
              hover(item2, monitor) {
                var _containerRef$current;
                if (!containerRef.current || !monitor.isOver({
                  shallow: true
                }) || !item2) {
                  return;
                }
                const dragIndex = item2.index;
                const hoverIndex = index;
                if (dragIndex === hoverIndex) {
                  return;
                }
                const hoverBoundingRect = (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.getBoundingClientRect();
                const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
                const clientOffset = monitor.getClientOffset();
                const hoverClientY = clientOffset.y - hoverBoundingRect.top;
                if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                  return;
                }
                if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                  return;
                }
                onHover(item2, option, itemType, index);
              }
            }),
            _useDrop2 = _slicedToArray(_useDrop, 2),
            handlerId = _useDrop2[0].handlerId,
            drop = _useDrop2[1];
          drop(preview(containerRef));
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            ref: drag,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(Box, {
              ref: containerRef,
              "data-handler-id": handlerId,
              style: {
                opacity: isDragging ? "0.2" : "1"
              },
              onDoubleClick: () => _onDoubleClick(item),
              className: rankingItemStyle,
              sx: {
                backgroundColor: "background.paper"
              },
              children: (_option$content = option.content) === null || _option$content === void 0 ? void 0 : _option$content.label
            })
          });
        }
        function DropArea({
          index,
          onItemTransfer,
          itemType,
          fillParent
        }) {
          const containerRef = reactExports.useRef();
          const _useDrop3 = useDrop({
              accept: "rankingOption",
              collect(monitor) {
                return {
                  handlerId: monitor.getHandlerId()
                };
              },
              hover(item, monitor) {
                if (!containerRef.current || !monitor.isOver({
                  shallow: true
                }) || !item) {
                  return;
                }
                onItemTransfer(item, index, itemType);
              }
            }),
            _useDrop4 = _slicedToArray(_useDrop3, 2),
            handlerId = _useDrop4[0].handlerId,
            drop = _useDrop4[1];
          drop(containerRef);
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            style: {
              flex: fillParent ? 1 : "inherit",
              minHeight: "12px"
            },
            ref: containerRef,
            "data-handler-id": handlerId
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=Ranking-legacy-DMhg5XqJ.js.map
