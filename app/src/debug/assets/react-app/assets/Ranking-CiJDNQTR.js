import { o as jsxs, n as jsx } from "./index-Zbq57S4f.js";
import { r as reactExports } from "./vendor-BxDgTFXe.js";
import { b as useDispatch, u as useSelector, s as shallowEqual } from "./redux-CLa1pDoQ.js";
import { f as requireCreateSvgIcon, v as valueChange, o as orderChange, C as Content } from "./Android-BzAC49gk.js";
import { i as interopRequireDefaultExports, j as jsxRuntimeExports, u as useTheme, w as Typography, G as Box, J as IconButton } from "./mui-D3o-L0Jn.js";
import { a as useDrop, u as useDrag } from "./dnd-BTRdTaTs.js";
import "./i18n-No79Kq9Z.js";
import "./editor-DK7jwn5J.js";
import "./charts-wwscgYhh.js";
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
  column,
  columnHeader,
  dragContainer,
  rankingItem,
  rankingItemDragging,
  dragHandle,
  itemContent,
  rankBadge,
  actionButton,
  emptyState
};
var DragIndicator = {};
var _interopRequireDefault$2 = interopRequireDefaultExports;
Object.defineProperty(DragIndicator, "__esModule", {
  value: true
});
var default_1$2 = DragIndicator.default = void 0;
var _createSvgIcon$2 = _interopRequireDefault$2(requireCreateSvgIcon());
var _jsxRuntime$2 = jsxRuntimeExports;
default_1$2 = DragIndicator.default = (0, _createSvgIcon$2.default)(/* @__PURE__ */ (0, _jsxRuntime$2.jsx)("path", {
  d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
}), "DragIndicator");
var ChevronRight = {};
var _interopRequireDefault$1 = interopRequireDefaultExports;
Object.defineProperty(ChevronRight, "__esModule", {
  value: true
});
var default_1$1 = ChevronRight.default = void 0;
var _createSvgIcon$1 = _interopRequireDefault$1(requireCreateSvgIcon());
var _jsxRuntime$1 = jsxRuntimeExports;
default_1$1 = ChevronRight.default = (0, _createSvgIcon$1.default)(/* @__PURE__ */ (0, _jsxRuntime$1.jsx)("path", {
  d: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), "ChevronRight");
var Close = {};
var _interopRequireDefault = interopRequireDefaultExports;
Object.defineProperty(Close, "__esModule", {
  value: true
});
var default_1 = Close.default = void 0;
var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
var _jsxRuntime = jsxRuntimeExports;
default_1 = Close.default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
function Ranking(props) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const visibleAnswers = useSelector((state2) => props.component.answers.filter((ans) => {
    var _a, _b;
    return (_b = (_a = state2.runState.values[ans.qualifiedCode]) == null ? void 0 : _a.relevance) != null ? _b : true;
  }), shallowEqual);
  const state = useSelector((state2) => {
    let valuesMap = {};
    visibleAnswers.forEach((element) => {
      valuesMap[element.qualifiedCode] = state2.runState.values[element.qualifiedCode].value;
    });
    return valuesMap;
  }, shallowEqual);
  const itemTypeByCode = (code) => {
    return isNaN(state[code]) ? "unsorted" : "sorted";
  };
  const order = useSelector((state2) => {
    let valuesMap = {};
    visibleAnswers.forEach((element) => {
      if (state2.runState.order) {
        valuesMap[element.qualifiedCode] = state2.runState.order[element.qualifiedCode];
      } else {
        valuesMap[element.qualifiedCode] = state2.runState.values[element.qualifiedCode].order + 1;
      }
    });
    return valuesMap;
  }, shallowEqual);
  const withoutOrder = visibleAnswers.filter((option) => !state[option.qualifiedCode]).sort(function(a, b) {
    return order[a.qualifiedCode] - order[b.qualifiedCode];
  });
  const withOrder = visibleAnswers.filter((option) => +state[option.qualifiedCode] > 0).sort(function(a, b) {
    return state[a.qualifiedCode] - state[b.qualifiedCode];
  });
  const onItemTransfer = (item, index, itemType) => {
    const unOrdered = {
      ...order
    };
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
      withoutOrder.forEach((item2) => {
        if (unOrdered[item2.qualifiedCode] >= oldOrder) {
          unOrdered[item2.qualifiedCode] = unOrdered[item2.qualifiedCode] + 1;
        }
      });
      unOrdered[item.qualifiedCode] = oldOrder;
      dispatch(orderChange(unOrdered));
    }
  };
  const onClickMove = (option) => {
    const item = {
      qualifiedCode: option.qualifiedCode
    };
    if (itemTypeByCode(option.qualifiedCode) == "unsorted") {
      onItemTransfer(item, withOrder.length, "sorted");
    } else {
      onItemTransfer(item, withoutOrder.length, "unsorted");
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
    const unOrdered = {
      ...order
    };
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
  return /* @__PURE__ */ jsxs("div", { style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px"
  }, children: [
    /* @__PURE__ */ jsxs("div", { className: styles.column, children: [
      /* @__PURE__ */ jsxs("div", { className: styles.columnHeader, children: [
        /* @__PURE__ */ jsx(Typography, { variant: "subtitle2", sx: {
          color: "text.secondary"
        }, children: "Options" }),
        /* @__PURE__ */ jsxs(Typography, { variant: "caption", sx: {
          color: "text.disabled"
        }, children: [
          withoutOrder.length,
          " remaining"
        ] })
      ] }),
      /* @__PURE__ */ jsx(RankingContainer, { theme, ordererLength: withOrder.length, unordererLength: withoutOrder.length, onHover, order, onItemTransfer, onDoubleClick, onClickMove, itemType: "unsorted", options: withoutOrder, state })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles.column, children: [
      /* @__PURE__ */ jsxs("div", { className: styles.columnHeader, children: [
        /* @__PURE__ */ jsx(Typography, { variant: "subtitle2", sx: {
          color: "text.secondary"
        }, children: "Your Ranking" }),
        /* @__PURE__ */ jsxs(Typography, { variant: "caption", sx: {
          color: "text.disabled"
        }, children: [
          withOrder.length,
          " ranked"
        ] })
      ] }),
      /* @__PURE__ */ jsx(RankingContainer, { theme, onHover, onItemTransfer, onDoubleClick, onClickMove, ordererLength: withOrder.length, unordererLength: withoutOrder.length, order, itemType: "sorted", options: withOrder, state })
    ] })
  ] });
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
  const [{
    isOver
  }, containerDrop] = useDrop({
    accept: "rankingOption",
    collect(monitor) {
      return {
        isOver: monitor.isOver({
          shallow: false
        })
      };
    }
  });
  containerDrop(containerRef);
  const isSorted = itemType === "sorted";
  return /* @__PURE__ */ jsxs(Box, { ref: containerRef, className: styles.dragContainer, sx: {
    backgroundColor: isOver ? "action.hover" : "background.default"
  }, children: [
    options.length === 0 && /* @__PURE__ */ jsx(DropArea, { itemType, index: 0, fillParent: true, onItemTransfer, children: /* @__PURE__ */ jsx(Box, { className: styles.emptyState, sx: {
      borderColor: "divider"
    }, children: /* @__PURE__ */ jsx(Typography, { variant: "body2", sx: {
      color: "text.secondary"
    }, children: isSorted ? "Drag items here to rank them" : "All items have been ranked" }) }) }),
    options.map((option, index) => {
      return /* @__PURE__ */ jsxs(reactExports.Fragment, { children: [
        /* @__PURE__ */ jsx(DropArea, { itemType, index, onItemTransfer }, "drop" + option.code),
        /* @__PURE__ */ jsx(RankingOption, { theme, index, onHover, itemType, option, onDoubleClick, onClickMove, rank: isSorted ? state[option.qualifiedCode] : null }, option.code)
      ] }, option.code);
    }),
    options.length > 0 && /* @__PURE__ */ jsx(DropArea, { itemType, index: options.length, fillParent: true, onItemTransfer }, "last")
  ] });
}
function RankingOption({
  theme,
  option,
  onDoubleClick,
  onClickMove,
  index,
  onHover,
  itemType,
  rank
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
  const [{
    handlerId
  }, drop] = useDrop({
    accept: "rankingOption",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId()
      };
    },
    hover(item2, monitor) {
      var _a2;
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
  const isSorted = itemType === "sorted";
  return /* @__PURE__ */ jsx("div", { ref: drag, children: /* @__PURE__ */ jsxs(Box, { "data-code": option.code, ref: containerRef, "data-handler-id": handlerId, className: isDragging ? styles.rankingItemDragging : styles.rankingItem, onDoubleClick: () => onDoubleClick(item), sx: {
    backgroundColor: "background.paper"
  }, children: [
    isSorted && rank != null && /* @__PURE__ */ jsx(Box, { className: styles.rankBadge, sx: {
      backgroundColor: "primary.main"
    }, children: rank }),
    /* @__PURE__ */ jsx(default_1$2, { className: styles.dragHandle, sx: {
      color: "text.disabled",
      fontSize: 20
    } }),
    /* @__PURE__ */ jsx("div", { className: styles.itemContent, children: /* @__PURE__ */ jsx(Content, { elementCode: option.code, customStyle: "font-size: ".concat(theme.textStyles.text.size, "px;"), name: "label", content: (_a = option.content) == null ? void 0 : _a.label }) }),
    /* @__PURE__ */ jsx(IconButton, { size: "small", onClick: (e) => {
      e.stopPropagation();
      onClickMove(option);
    }, className: styles.actionButton, sx: {
      color: "text.secondary"
    }, children: isSorted ? /* @__PURE__ */ jsx(default_1, { fontSize: "small" }) : /* @__PURE__ */ jsx(default_1$1, { fontSize: "small" }) })
  ] }) });
}
function DropArea({
  index,
  onItemTransfer,
  itemType,
  fillParent,
  children
}) {
  const containerRef = reactExports.useRef();
  const [{
    handlerId
  }, drop] = useDrop({
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
  });
  drop(containerRef);
  return /* @__PURE__ */ jsx("div", { style: {
    flex: fillParent ? 1 : "inherit",
    minHeight: "8px"
  }, ref: containerRef, "data-handler-id": handlerId, children });
}
export {
  Ranking as default
};
//# sourceMappingURL=Ranking-CiJDNQTR.js.map
