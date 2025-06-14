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
  System.register(['./index-legacy-gKft0u0l.js', './Android-legacy-B32s-516.js'], function (exports, module) {
    'use strict';

    var reactExports, jsxRuntimeExports, invariant, shallowEqual, wrapConnectorHooks, isRef, useDragDropManager, useIsomorphicLayoutEffect, registerTarget, useOptionalFactory, useCollectedProps, useDispatch, useSelector, shallowEqual$1, Box, useDrag, valueChange, orderChange;
    return {
      setters: [module => {
        reactExports = module.r;
        jsxRuntimeExports = module.m;
      }, module => {
        invariant = module.a9;
        shallowEqual = module.aa;
        wrapConnectorHooks = module.ab;
        isRef = module.ac;
        useDragDropManager = module.ad;
        useIsomorphicLayoutEffect = module.ae;
        registerTarget = module.af;
        useOptionalFactory = module.ag;
        useCollectedProps = module.ah;
        useDispatch = module.H;
        useSelector = module.D;
        shallowEqual$1 = module.E;
        Box = module.U;
        useDrag = module.ai;
        valueChange = module.J;
        orderChange = module.aj;
      }],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._dragContainer_5yuyr_1 {\n  border: 1px solid transparent;\n  border-radius: 4px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  margin: auto 8px;\n}\n\n._rankingItem_5yuyr_10 {\n  margin: 0px 8px 0px 8px;\n  padding: 8px;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        exports("default", Ranking);
        let isCallingCanDrop = false;
        class DropTargetMonitorImpl {
          receiveHandlerId(targetId) {
            this.targetId = targetId;
          }
          getHandlerId() {
            return this.targetId;
          }
          subscribeToStateChange(listener, options) {
            return this.internalMonitor.subscribeToStateChange(listener, options);
          }
          canDrop() {
            // Cut out early if the target id has not been set. This should prevent errors
            // where the user has an older version of dnd-core like in
            // https://github.com/react-dnd/react-dnd/issues/1310
            if (!this.targetId) {
              return false;
            }
            invariant(!isCallingCanDrop, 'You may not call monitor.canDrop() inside your canDrop() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor');
            try {
              isCallingCanDrop = true;
              return this.internalMonitor.canDropOnTarget(this.targetId);
            } finally {
              isCallingCanDrop = false;
            }
          }
          isOver(options) {
            if (!this.targetId) {
              return false;
            }
            return this.internalMonitor.isOverTarget(this.targetId, options);
          }
          getItemType() {
            return this.internalMonitor.getItemType();
          }
          getItem() {
            return this.internalMonitor.getItem();
          }
          getDropResult() {
            return this.internalMonitor.getDropResult();
          }
          didDrop() {
            return this.internalMonitor.didDrop();
          }
          getInitialClientOffset() {
            return this.internalMonitor.getInitialClientOffset();
          }
          getInitialSourceClientOffset() {
            return this.internalMonitor.getInitialSourceClientOffset();
          }
          getSourceClientOffset() {
            return this.internalMonitor.getSourceClientOffset();
          }
          getClientOffset() {
            return this.internalMonitor.getClientOffset();
          }
          getDifferenceFromInitialOffset() {
            return this.internalMonitor.getDifferenceFromInitialOffset();
          }
          constructor(manager) {
            this.targetId = null;
            this.internalMonitor = manager.getMonitor();
          }
        }
        class TargetConnector {
          get connectTarget() {
            return this.dropTarget;
          }
          reconnect() {
            // if nothing has changed then don't resubscribe
            const didChange = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
            if (didChange) {
              this.disconnectDropTarget();
            }
            const dropTarget = this.dropTarget;
            if (!this.handlerId) {
              return;
            }
            if (!dropTarget) {
              this.lastConnectedDropTarget = dropTarget;
              return;
            }
            if (didChange) {
              this.lastConnectedHandlerId = this.handlerId;
              this.lastConnectedDropTarget = dropTarget;
              this.lastConnectedDropTargetOptions = this.dropTargetOptions;
              this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, dropTarget, this.dropTargetOptions);
            }
          }
          receiveHandlerId(newHandlerId) {
            if (newHandlerId === this.handlerId) {
              return;
            }
            this.handlerId = newHandlerId;
            this.reconnect();
          }
          get dropTargetOptions() {
            return this.dropTargetOptionsInternal;
          }
          set dropTargetOptions(options) {
            this.dropTargetOptionsInternal = options;
          }
          didHandlerIdChange() {
            return this.lastConnectedHandlerId !== this.handlerId;
          }
          didDropTargetChange() {
            return this.lastConnectedDropTarget !== this.dropTarget;
          }
          didOptionsChange() {
            return !shallowEqual(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
          }
          disconnectDropTarget() {
            if (this.unsubscribeDropTarget) {
              this.unsubscribeDropTarget();
              this.unsubscribeDropTarget = undefined;
            }
          }
          get dropTarget() {
            return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
          }
          clearDropTarget() {
            this.dropTargetRef = null;
            this.dropTargetNode = null;
          }
          constructor(backend) {
            this.hooks = wrapConnectorHooks({
              dropTarget: (node, options) => {
                this.clearDropTarget();
                this.dropTargetOptions = options;
                if (isRef(node)) {
                  this.dropTargetRef = node;
                } else {
                  this.dropTargetNode = node;
                }
                this.reconnect();
              }
            });
            this.handlerId = null;
            // The drop target may either be attached via ref or connect function
            this.dropTargetRef = null;
            this.dropTargetOptionsInternal = null;
            this.lastConnectedHandlerId = null;
            this.lastConnectedDropTarget = null;
            this.lastConnectedDropTargetOptions = null;
            this.backend = backend;
          }
        }
        function useConnectDropTarget(connector) {
          return reactExports.useMemo(() => connector.hooks.dropTarget(), [connector]);
        }
        function useDropTargetConnector(options) {
          const manager = useDragDropManager();
          const connector = reactExports.useMemo(() => new TargetConnector(manager.getBackend()), [manager]);
          useIsomorphicLayoutEffect(() => {
            connector.dropTargetOptions = options || null;
            connector.reconnect();
            return () => connector.disconnectDropTarget();
          }, [options]);
          return connector;
        }
        function useDropTargetMonitor() {
          const manager = useDragDropManager();
          return reactExports.useMemo(() => new DropTargetMonitorImpl(manager), [manager]);
        }

        /**
         * Internal utility hook to get an array-version of spec.accept.
         * The main utility here is that we aren't creating a new array on every render if a non-array spec.accept is passed in.
         * @param spec
         */
        function useAccept(spec) {
          const accept = spec.accept;
          return reactExports.useMemo(() => {
            invariant(spec.accept != null, 'accept must be defined');
            return Array.isArray(accept) ? accept : [accept];
          }, [accept]);
        }
        class DropTargetImpl {
          canDrop() {
            const spec = this.spec;
            const monitor = this.monitor;
            return spec.canDrop ? spec.canDrop(monitor.getItem(), monitor) : true;
          }
          hover() {
            const spec = this.spec;
            const monitor = this.monitor;
            if (spec.hover) {
              spec.hover(monitor.getItem(), monitor);
            }
          }
          drop() {
            const spec = this.spec;
            const monitor = this.monitor;
            if (spec.drop) {
              return spec.drop(monitor.getItem(), monitor);
            }
            return;
          }
          constructor(spec, monitor) {
            this.spec = spec;
            this.monitor = monitor;
          }
        }
        function useDropTarget(spec, monitor) {
          const dropTarget = reactExports.useMemo(() => new DropTargetImpl(spec, monitor), [monitor]);
          reactExports.useEffect(() => {
            dropTarget.spec = spec;
          }, [spec]);
          return dropTarget;
        }
        function useRegisteredDropTarget(spec, monitor, connector) {
          const manager = useDragDropManager();
          const dropTarget = useDropTarget(spec, monitor);
          const accept = useAccept(spec);
          useIsomorphicLayoutEffect(function registerDropTarget() {
            const _registerTarget = registerTarget(accept, dropTarget, manager),
              _registerTarget2 = _slicedToArray(_registerTarget, 2),
              handlerId = _registerTarget2[0],
              unregister = _registerTarget2[1];
            monitor.receiveHandlerId(handlerId);
            connector.receiveHandlerId(handlerId);
            return unregister;
          }, [manager, monitor, dropTarget, connector, accept.map(a => a.toString()).join('|')]);
        }

        /**
         * useDropTarget Hook
         * @param spec The drop target specification (object or function, function preferred)
         * @param deps The memoization deps array to use when evaluating spec changes
         */
        function useDrop(specArg, deps) {
          const spec = useOptionalFactory(specArg);
          const monitor = useDropTargetMonitor();
          const connector = useDropTargetConnector(spec.options);
          useRegisteredDropTarget(spec, monitor, connector);
          return [useCollectedProps(spec.collect, monitor, connector), useConnectDropTarget(connector)];
        }
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
          }, shallowEqual$1);
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
          }, shallowEqual$1);
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
//# sourceMappingURL=Ranking-legacy-C_WP9TNC.js.map
