<<<<<<<< HEAD:app/src/debug/assets/react-app/assets/Ranking-C_gvwTSC.js
import { r as reactExports, m as jsxRuntimeExports } from "./index-DRrn8_Vw.js";
import { a9 as invariant, aa as shallowEqual, ab as wrapConnectorHooks, ac as isRef, ad as useDragDropManager, ae as useIsomorphicLayoutEffect, af as registerTarget, ag as useOptionalFactory, ah as useCollectedProps, H as useDispatch, D as useSelector, E as shallowEqual$1, U as Box, ai as useDrag, J as valueChange, aj as orderChange } from "./Android-D7uSgl3-.js";
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
    if (!this.targetId) {
      return false;
    }
    invariant(!isCallingCanDrop, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
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
      this.unsubscribeDropTarget = void 0;
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
    this.dropTargetRef = null;
    this.dropTargetOptionsInternal = null;
    this.lastConnectedHandlerId = null;
    this.lastConnectedDropTarget = null;
    this.lastConnectedDropTargetOptions = null;
    this.backend = backend;
  }
}
function useConnectDropTarget(connector) {
  return reactExports.useMemo(
    () => connector.hooks.dropTarget(),
    [
      connector
    ]
  );
}
function useDropTargetConnector(options) {
  const manager = useDragDropManager();
  const connector = reactExports.useMemo(
    () => new TargetConnector(manager.getBackend()),
    [
      manager
    ]
  );
  useIsomorphicLayoutEffect(() => {
    connector.dropTargetOptions = options || null;
    connector.reconnect();
    return () => connector.disconnectDropTarget();
  }, [
    options
  ]);
  return connector;
}
function useDropTargetMonitor() {
  const manager = useDragDropManager();
  return reactExports.useMemo(
    () => new DropTargetMonitorImpl(manager),
    [
      manager
    ]
  );
}
function useAccept(spec) {
  const { accept } = spec;
  return reactExports.useMemo(() => {
    invariant(spec.accept != null, "accept must be defined");
    return Array.isArray(accept) ? accept : [
      accept
    ];
  }, [
    accept
  ]);
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
  const dropTarget = reactExports.useMemo(
    () => new DropTargetImpl(spec, monitor),
    [
      monitor
    ]
  );
  reactExports.useEffect(() => {
    dropTarget.spec = spec;
  }, [
    spec
  ]);
  return dropTarget;
}
function useRegisteredDropTarget(spec, monitor, connector) {
  const manager = useDragDropManager();
  const dropTarget = useDropTarget(spec, monitor);
  const accept = useAccept(spec);
  useIsomorphicLayoutEffect(function registerDropTarget() {
    const [handlerId, unregister] = registerTarget(accept, dropTarget, manager);
    monitor.receiveHandlerId(handlerId);
    connector.receiveHandlerId(handlerId);
    return unregister;
  }, [
    manager,
    monitor,
    dropTarget,
    connector,
    accept.map(
      (a) => a.toString()
    ).join("|")
  ]);
}
function useDrop(specArg, deps) {
  const spec = useOptionalFactory(specArg);
  const monitor = useDropTargetMonitor();
  const connector = useDropTargetConnector(spec.options);
  useRegisteredDropTarget(spec, monitor, connector);
  return [
    useCollectedProps(spec.collect, monitor, connector),
    useConnectDropTarget(connector)
  ];
}
========
import { j as jsxRuntimeExports, r as reactExports } from "./index-GLBW3_uR.js";
import { U as useDispatch, H as useSelector, aU as shallowEqual, bb as useDrag, aV as valueChange, bc as orderChange } from "./use-service-BKPqOjBj.js";
import { B as Box } from "./index-BrBZ-Fwp.js";
import { u as useDrop } from "./useDrop-DnCQrFD-.js";
import "./isTouchDevice-BBMDVXJ0.js";
import "./common-BgJdLjBL.js";
import "./Close-CW1wFndk.js";
import "./Card-yDMxaNNi.js";
import "./Toolbar-D9d8xIaL.js";
>>>>>>>> main:app/src/debug/assets/react-app/assets/Ranking-DW8lFUs_.js
const dragContainer = "_dragContainer_5yuyr_1";
const rankingItem = "_rankingItem_5yuyr_10";
const styles = {
  dragContainer,
  rankingItem
};
function Ranking(props) {
  const dispatch = useDispatch();
  const state = useSelector((state2) => {
    let valuesMap = {};
    props.component.answers.forEach((element) => {
      valuesMap[element.qualifiedCode] = state2.runState.values[element.qualifiedCode].value;
    });
    return valuesMap;
  }, shallowEqual$1);
  const itemTypeByCode = (code) => {
    return isNaN(state[code]) ? "unsorted" : "sorted";
  };
  const order = useSelector((state2) => {
    let valuesMap = {};
    props.component.answers.forEach((element) => {
      if (state2.runState.order) {
        valuesMap[element.qualifiedCode] = state2.runState.order[element.qualifiedCode];
      } else {
        valuesMap[element.qualifiedCode] = state2.runState.values[element.qualifiedCode].order + 1;
      }
    });
    return valuesMap;
  }, shallowEqual$1);
  const withoutOrder = props.component.answers.filter((option) => !state[option.qualifiedCode]).sort(function(a, b) {
    return order[a.qualifiedCode] - order[b.qualifiedCode];
  });
  const withOrder = props.component.answers.filter((option) => +state[option.qualifiedCode] > 0).sort(function(a, b) {
    return state[a.qualifiedCode] - state[b.qualifiedCode];
  });
  const onItemTransfer = (item, index, itemType) => {
    const unOrdered = { ...order };
    if (itemType == "sorted" && itemTypeByCode(item.qualifiedCode) == "unsorted") {
      const currentOrder = index + 1;
      for (let key in state) {
        if (state.hasOwnProperty(key)) {
          if (state[key] >= currentOrder) {
            dispatch(
              valueChange({
                componentCode: key,
                value: state[key] + 1
              })
            );
          }
        }
      }
      dispatch(
        valueChange({
          componentCode: item.qualifiedCode,
          value: currentOrder
        })
      );
      item.index = index;
      const oldOrder = unOrdered[item.qualifiedCode];
      withoutOrder.forEach((item2) => {
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
            dispatch(
              valueChange({
                componentCode: key,
                value: state[key] - 1
              })
            );
          }
        }
      }
      dispatch(
        valueChange({
          componentCode: item.qualifiedCode,
          value: void 0
        })
      );
      item.index = index;
      const oldOrder = index + 1;
      withoutOrder.forEach((item2) => {
        if (unOrdered[item2.qualifiedCode] >= oldOrder) {
          unOrdered[item2.qualifiedCode] = unOrdered[item2.qualifiedCode] + 1;
        }
      });
      unOrdered[item.qualifiedCode] = oldOrder;
      dispatch(orderChange(unOrdered));
    }
  };
  const onDoubleClick = (item) => {
    if (itemTypeByCode(item.qualifiedCode) == "unsorted") {
      onItemTransfer(item, withOrder.length, "sorted");
    } else {
      onItemTransfer(item, withoutOrder.length, "unsorted");
    }
  };
  const onHover = (hoveringItem, currentItem, currentItemType, currentItemIndex) => {
    const unOrdered = { ...order };
    if (currentItemType == "unsorted" && itemTypeByCode(hoveringItem.qualifiedCode) == "unsorted") {
      const hoveringOrder = unOrdered[hoveringItem.qualifiedCode];
      unOrdered[hoveringItem.qualifiedCode] = unOrdered[currentItem.qualifiedCode];
      unOrdered[currentItem.qualifiedCode] = hoveringOrder;
      dispatch(orderChange(unOrdered));
      hoveringItem.index = currentItemIndex;
    } else if (currentItemType == "sorted" && itemTypeByCode(hoveringItem.qualifiedCode) == "sorted") {
      dispatch(
        valueChange({
          componentCode: hoveringItem.qualifiedCode,
          value: state[currentItem.qualifiedCode]
        })
      );
      dispatch(
        valueChange({
          componentCode: currentItem.qualifiedCode,
          value: state[hoveringItem.qualifiedCode]
        })
      );
      hoveringItem.index = currentItemIndex;
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          RankingContainer,
          {
            styles,
            ordererLength: withOrder.length,
            unordererLength: withoutOrder.length,
            onHover,
            order,
            onItemTransfer,
            onDoubleClick,
            itemType: "unsorted",
            options: withoutOrder
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          RankingContainer,
          {
            styles,
            onHover,
            onItemTransfer,
            onDoubleClick,
            ordererLength: withOrder.length,
            unordererLength: withoutOrder.length,
            order,
            itemType: "sorted",
            options: withOrder
          }
        )
      ]
    }
  );
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box,
    {
      ref: refDrop,
      className: styles2.dragContainer,
      sx: { backgroundColor: "background.default" },
      children: [
        options.map((option, index) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              DropArea,
              {
                itemType,
                index,
                onItemTransfer
              },
              "drop" + option.code
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              RankingOption,
              {
                index,
                onHover,
                itemType,
                option,
                rankingItemStyle: styles2.rankingItem,
                onDoubleClick
              },
              option.code
            )
          ] }, option.code);
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          DropArea,
          {
            itemType,
            index: options.length,
            fillParent: true,
            onItemTransfer
          },
          "last"
        )
      ]
    }
  );
}
function RankingOption({
  option,
  onDoubleClick,
  rankingItemStyle,
  index,
  onHover,
  itemType
}) {
  var _a;
  const containerRef = reactExports.useRef();
  const item = {
    index,
    qualifiedCode: option.qualifiedCode
  };
  const [isDragging, drag, preview] = useDrag({
    type: "rankingOption",
    item,
    collect: (monitor) => {
      var _a2;
      return ((_a2 = monitor.getItem()) == null ? void 0 : _a2.qualifiedCode) === option.qualifiedCode;
    }
  });
  const [{ handlerId }, drop] = useDrop({
    accept: "rankingOption",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId()
      };
    },
    hover(item2, monitor) {
      var _a2;
      if (!containerRef.current || !monitor.isOver({ shallow: true }) || !item2) {
        return;
      }
      const dragIndex = item2.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = (_a2 = containerRef.current) == null ? void 0 : _a2.getBoundingClientRect();
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
  });
  drop(preview(containerRef));
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: drag, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      ref: containerRef,
      "data-handler-id": handlerId,
      style: {
        opacity: isDragging ? "0.2" : "1"
      },
      onDoubleClick: () => onDoubleClick(item),
      className: rankingItemStyle,
      sx: { backgroundColor: "background.paper" },
      children: (_a = option.content) == null ? void 0 : _a.label
    }
  ) });
}
function DropArea({ index, onItemTransfer, itemType, fillParent }) {
  const containerRef = reactExports.useRef();
  const [{ handlerId }, drop] = useDrop({
    accept: "rankingOption",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId()
      };
    },
    hover(item, monitor) {
      if (!containerRef.current || !monitor.isOver({ shallow: true }) || !item) {
        return;
      }
      onItemTransfer(item, index, itemType);
    }
  });
  drop(containerRef);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      style: { flex: fillParent ? 1 : "inherit", minHeight: "12px" },
      ref: containerRef,
      "data-handler-id": handlerId
    }
  );
}
export {
  Ranking as default
};
<<<<<<<< HEAD:app/src/debug/assets/react-app/assets/Ranking-C_gvwTSC.js
//# sourceMappingURL=Ranking-C_gvwTSC.js.map
========
//# sourceMappingURL=Ranking-DW8lFUs_.js.map
>>>>>>>> main:app/src/debug/assets/react-app/assets/Ranking-DW8lFUs_.js
