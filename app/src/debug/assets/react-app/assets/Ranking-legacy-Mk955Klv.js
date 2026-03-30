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
  System.register(['./index-legacy-CoMmlwbr.js', './vendor-legacy-lhtLtiSI.js', './redux-legacy-ZqSxVvAn.js', './Android-legacy-Csf5qFR4.js', './mui-legacy-b38CRKaY.js', './dnd-legacy-DGW9B2he.js', './i18n-legacy-BRT6G2_g.js', './editor-legacy-Dx3AxXyy.js', './charts-legacy-BBm9rbLh.js'], function (exports, module) {
    'use strict';

    var jsxs, jsx, reactExports, useDispatch, useSelector, shallowEqual, requireCreateSvgIcon, valueChange, orderChange, Content, interopRequireDefaultExports, jsxRuntimeExports, useTheme, Typography, Box, IconButton, useDrop, useDrag;
    return {
      setters: [module => {
        jsxs = module.o;
        jsx = module.n;
      }, module => {
        reactExports = module.r;
      }, module => {
        useDispatch = module.b;
        useSelector = module.u;
        shallowEqual = module.s;
      }, module => {
        requireCreateSvgIcon = module.f;
        valueChange = module.v;
        orderChange = module.o;
        Content = module.C;
      }, module => {
        interopRequireDefaultExports = module.i;
        jsxRuntimeExports = module.j;
        useTheme = module.u;
        Typography = module.w;
        Box = module.G;
        IconButton = module.J;
      }, module => {
        useDrop = module.a;
        useDrag = module.u;
      }, null, null, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._column_1fs57_1 {\n  display: flex;\n  flex-direction: column;\n}\n\n._columnHeader_1fs57_6 {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 4px 8px 4px;\n}\n\n._dragContainer_1fs57_13 {\n  border: 1px solid transparent;\n  border-radius: 12px;\n  min-height: 120px;\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n  transition: background-color 0.2s ease;\n}\n\n._rankingItem_1fs57_23 {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0 0 8px 0;\n  padding: 10px 12px;\n  border-radius: 8px;\n  cursor: grab;\n  transition: box-shadow 0.2s ease, opacity 0.2s ease, transform 0.15s ease;\n}\n\n._rankingItem_1fs57_23:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n._rankingItem_1fs57_23:active {\n  cursor: grabbing;\n}\n\n._rankingItemDragging_1fs57_42 {\n  opacity: 0.2;\n}\n\n._dragHandle_1fs57_47 {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n  cursor: grab;\n}\n\n._dragHandle_1fs57_47:active {\n  cursor: grabbing;\n}\n\n._itemContent_1fs57_58 {\n  flex: 1;\n  min-width: 0;\n}\n\n._rankBadge_1fs57_63 {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-weight: 600;\n  font-size: 14px;\n  color: #fff;\n}\n\n._actionButton_1fs57_76 {\n  flex-shrink: 0;\n  margin-left: auto;\n}\n\n._emptyState_1fs57_81 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  min-height: 80px;\n  border: 2px dashed;\n  border-radius: 8px;\n  padding: 24px;\n}\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        exports("default", Ranking);
        const column = "_column_1fs57_1";
        const columnHeader = "_columnHeader_1fs57_6";
        const dragContainer = "_dragContainer_1fs57_13";
        const rankingItem = "_rankingItem_1fs57_23";
        const rankingItemDragging = "_rankingItemDragging_1fs57_42 _rankingItem_1fs57_23";
        const dragHandle = "_dragHandle_1fs57_47";
        const itemContent = "_itemContent_1fs57_58";
        const rankBadge = "_rankBadge_1fs57_63";
        const actionButton = "_actionButton_1fs57_76";
        const emptyState = "_emptyState_1fs57_81";
        const styles = {
          column: column,
          columnHeader: columnHeader,
          dragContainer: dragContainer,
          rankingItem: rankingItem,
          rankingItemDragging: rankingItemDragging,
          dragHandle: dragHandle,
          itemContent: itemContent,
          rankBadge: rankBadge,
          actionButton: actionButton,
          emptyState: emptyState
        };
        var DragIndicator = {};
        var _interopRequireDefault$2 = interopRequireDefaultExports;
        Object.defineProperty(DragIndicator, "__esModule", {
          value: true
        });
        var default_1$2 = DragIndicator.default = void 0;
        var _createSvgIcon$2 = _interopRequireDefault$2(requireCreateSvgIcon());
        var _jsxRuntime$2 = jsxRuntimeExports;
        default_1$2 = DragIndicator.default = (0, _createSvgIcon$2.default)(/*#__PURE__*/(0, _jsxRuntime$2.jsx)("path", {
          d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
        }), 'DragIndicator');
        var ChevronRight = {};
        var _interopRequireDefault$1 = interopRequireDefaultExports;
        Object.defineProperty(ChevronRight, "__esModule", {
          value: true
        });
        var default_1$1 = ChevronRight.default = void 0;
        var _createSvgIcon$1 = _interopRequireDefault$1(requireCreateSvgIcon());
        var _jsxRuntime$1 = jsxRuntimeExports;
        default_1$1 = ChevronRight.default = (0, _createSvgIcon$1.default)(/*#__PURE__*/(0, _jsxRuntime$1.jsx)("path", {
          d: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
        }), 'ChevronRight');
        var Close = {};
        var _interopRequireDefault = interopRequireDefaultExports;
        Object.defineProperty(Close, "__esModule", {
          value: true
        });
        var default_1 = Close.default = void 0;
        var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
        var _jsxRuntime = jsxRuntimeExports;
        default_1 = Close.default = (0, _createSvgIcon.default)(/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
          d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        }), 'Close');
        function Ranking(props) {
          const dispatch = useDispatch();
          const theme = useTheme();
          const visibleAnswers = useSelector(state2 => props.component.answers.filter(ans => {
            var _state2$runState$valu, _state2$runState$valu2;
            return (_state2$runState$valu = (_state2$runState$valu2 = state2.runState.values[ans.qualifiedCode]) === null || _state2$runState$valu2 === void 0 ? void 0 : _state2$runState$valu2.relevance) !== null && _state2$runState$valu !== void 0 ? _state2$runState$valu : true;
          }), shallowEqual);
          const state = useSelector(state2 => {
            let valuesMap = {};
            visibleAnswers.forEach(element => {
              valuesMap[element.qualifiedCode] = state2.runState.values[element.qualifiedCode].value;
            });
            return valuesMap;
          }, shallowEqual);
          const itemTypeByCode = code => {
            return isNaN(state[code]) ? "unsorted" : "sorted";
          };
          const order = useSelector(state2 => {
            let valuesMap = {};
            visibleAnswers.forEach(element => {
              if (state2.runState.order) {
                valuesMap[element.qualifiedCode] = state2.runState.order[element.qualifiedCode];
              } else {
                valuesMap[element.qualifiedCode] = state2.runState.values[element.qualifiedCode].order + 1;
              }
            });
            return valuesMap;
          }, shallowEqual);
          const withoutOrder = visibleAnswers.filter(option => !state[option.qualifiedCode]).sort(function (a, b) {
            return order[a.qualifiedCode] - order[b.qualifiedCode];
          });
          const withOrder = visibleAnswers.filter(option => +state[option.qualifiedCode] > 0).sort(function (a, b) {
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
          const onClickMove = option => {
            const item = {
              qualifiedCode: option.qualifiedCode
            };
            if (itemTypeByCode(option.qualifiedCode) == "unsorted") {
              onItemTransfer(item, withOrder.length, "sorted");
            } else {
              onItemTransfer(item, withoutOrder.length, "unsorted");
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
          return /* @__PURE__ */jsxs("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px"
            },
            children: [/* @__PURE__ */jsxs("div", {
              className: styles.column,
              children: [/* @__PURE__ */jsxs("div", {
                className: styles.columnHeader,
                children: [/* @__PURE__ */jsx(Typography, {
                  variant: "subtitle2",
                  sx: {
                    color: "text.secondary"
                  },
                  children: "Options"
                }), /* @__PURE__ */jsxs(Typography, {
                  variant: "caption",
                  sx: {
                    color: "text.disabled"
                  },
                  children: [withoutOrder.length, " remaining"]
                })]
              }), /* @__PURE__ */jsx(RankingContainer, {
                theme,
                ordererLength: withOrder.length,
                unordererLength: withoutOrder.length,
                onHover,
                order,
                onItemTransfer,
                onDoubleClick,
                onClickMove,
                itemType: "unsorted",
                options: withoutOrder,
                state
              })]
            }), /* @__PURE__ */jsxs("div", {
              className: styles.column,
              children: [/* @__PURE__ */jsxs("div", {
                className: styles.columnHeader,
                children: [/* @__PURE__ */jsx(Typography, {
                  variant: "subtitle2",
                  sx: {
                    color: "text.secondary"
                  },
                  children: "Your Ranking"
                }), /* @__PURE__ */jsxs(Typography, {
                  variant: "caption",
                  sx: {
                    color: "text.disabled"
                  },
                  children: [withOrder.length, " ranked"]
                })]
              }), /* @__PURE__ */jsx(RankingContainer, {
                theme,
                onHover,
                onItemTransfer,
                onDoubleClick,
                onClickMove,
                ordererLength: withOrder.length,
                unordererLength: withoutOrder.length,
                order,
                itemType: "sorted",
                options: withOrder,
                state
              })]
            })]
          });
        }
        function RankingContainer({
          itemType,
          theme,
          options,
          onItemTransfer,
          onDoubleClick,
          onClickMove,
          onHover,
          state
        }) {
          const containerRef = reactExports.useRef(null);
          const _useDrop = useDrop({
              accept: "rankingOption",
              collect(monitor) {
                return {
                  isOver: monitor.isOver({
                    shallow: false
                  })
                };
              }
            }),
            _useDrop2 = _slicedToArray(_useDrop, 2),
            isOver = _useDrop2[0].isOver,
            containerDrop = _useDrop2[1];
          containerDrop(containerRef);
          const isSorted = itemType === "sorted";
          return /* @__PURE__ */jsxs(Box, {
            ref: containerRef,
            className: styles.dragContainer,
            sx: {
              backgroundColor: isOver ? "action.hover" : "background.default"
            },
            children: [options.length === 0 && /* @__PURE__ */jsx(DropArea, {
              itemType,
              index: 0,
              fillParent: true,
              onItemTransfer,
              children: /* @__PURE__ */jsx(Box, {
                className: styles.emptyState,
                sx: {
                  borderColor: "divider"
                },
                children: /* @__PURE__ */jsx(Typography, {
                  variant: "body2",
                  sx: {
                    color: "text.secondary"
                  },
                  children: isSorted ? "Drag items here to rank them" : "All items have been ranked"
                })
              })
            }), options.map((option, index) => {
              return /* @__PURE__ */jsxs(reactExports.Fragment, {
                children: [/* @__PURE__ */jsx(DropArea, {
                  itemType,
                  index,
                  onItemTransfer
                }, "drop" + option.code), /* @__PURE__ */jsx(RankingOption, {
                  theme,
                  index,
                  onHover,
                  itemType,
                  option,
                  onDoubleClick,
                  onClickMove,
                  rank: isSorted ? state[option.qualifiedCode] : null
                }, option.code)]
              }, option.code);
            }), options.length > 0 && /* @__PURE__ */jsx(DropArea, {
              itemType,
              index: options.length,
              fillParent: true,
              onItemTransfer
            }, "last")]
          });
        }
        function RankingOption({
          theme,
          option,
          onDoubleClick: _onDoubleClick,
          onClickMove,
          index,
          onHover,
          itemType,
          rank
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
          const _useDrop3 = useDrop({
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
            _useDrop4 = _slicedToArray(_useDrop3, 2),
            handlerId = _useDrop4[0].handlerId,
            drop = _useDrop4[1];
          drop(preview(containerRef));
          const isSorted = itemType === "sorted";
          return /* @__PURE__ */jsx("div", {
            ref: drag,
            children: /* @__PURE__ */jsxs(Box, {
              "data-code": option.code,
              ref: containerRef,
              "data-handler-id": handlerId,
              className: isDragging ? styles.rankingItemDragging : styles.rankingItem,
              onDoubleClick: () => _onDoubleClick(item),
              sx: {
                backgroundColor: "background.paper"
              },
              children: [isSorted && rank != null && /* @__PURE__ */jsx(Box, {
                className: styles.rankBadge,
                sx: {
                  backgroundColor: "primary.main"
                },
                children: rank
              }), /* @__PURE__ */jsx(default_1$2, {
                className: styles.dragHandle,
                sx: {
                  color: "text.disabled",
                  fontSize: 20
                }
              }), /* @__PURE__ */jsx("div", {
                className: styles.itemContent,
                children: /* @__PURE__ */jsx(Content, {
                  elementCode: option.code,
                  customStyle: `font-size: ${theme.textStyles.text.size}px;`,
                  name: "label",
                  content: (_option$content = option.content) === null || _option$content === void 0 ? void 0 : _option$content.label
                })
              }), /* @__PURE__ */jsx(IconButton, {
                size: "small",
                onClick: e => {
                  e.stopPropagation();
                  onClickMove(option);
                },
                className: styles.actionButton,
                sx: {
                  color: "text.secondary"
                },
                children: isSorted ? /* @__PURE__ */jsx(default_1, {
                  fontSize: "small"
                }) : /* @__PURE__ */jsx(default_1$1, {
                  fontSize: "small"
                })
              })]
            })
          });
        }
        function DropArea({
          index,
          onItemTransfer,
          itemType,
          fillParent,
          children
        }) {
          const containerRef = reactExports.useRef();
          const _useDrop5 = useDrop({
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
            _useDrop6 = _slicedToArray(_useDrop5, 2),
            handlerId = _useDrop6[0].handlerId,
            drop = _useDrop6[1];
          drop(containerRef);
          return /* @__PURE__ */jsx("div", {
            style: {
              flex: fillParent ? 1 : "inherit",
              minHeight: "8px"
            },
            ref: containerRef,
            "data-handler-id": handlerId,
            children
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=Ranking-legacy-Mk955Klv.js.map
