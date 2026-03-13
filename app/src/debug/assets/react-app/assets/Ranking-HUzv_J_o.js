import { o as jsxs, n as jsx } from "./index-CBAYZ0Vg.js";
import { r as reactExports } from "./vendor-C1A_Wzx1.js";
import { b as useDispatch, u as useSelector, s as shallowEqual } from "./redux-C5jBuL_y.js";
import { v as valueChange, o as orderChange, C as Content } from "./Android--WWD2PK6.js";
import { u as useTheme, x as Box } from "./mui-qMsG-zFb.js";
import { a as useDrop, u as useDrag } from "./dnd-DDAM2OKI.js";
import "./i18n-CpdhL4GU.js";
const dragContainer = "_dragContainer_5yuyr_1";
const rankingItem = "_rankingItem_5yuyr_10";
const styles = {
  dragContainer,
  rankingItem
};
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
    gridTemplateColumns: "1fr 1fr"
  }, children: [
    /* @__PURE__ */ jsx(RankingContainer, { styles, theme, ordererLength: withOrder.length, unordererLength: withoutOrder.length, onHover, order, onItemTransfer, onDoubleClick, itemType: "unsorted", options: withoutOrder }),
    /* @__PURE__ */ jsx(RankingContainer, { styles, theme, onHover, onItemTransfer, onDoubleClick, ordererLength: withOrder.length, unordererLength: withoutOrder.length, order, itemType: "sorted", options: withOrder })
  ] });
}
function RankingContainer({
  styles: styles2,
  itemType,
  theme,
  options,
  onItemTransfer,
  onDoubleClick,
  onHover
}) {
  const refDrop = reactExports.useRef(null);
  return /* @__PURE__ */ jsxs(Box, { ref: refDrop, className: styles2.dragContainer, sx: {
    backgroundColor: "background.default"
  }, children: [
    options.map((option, index) => {
      return /* @__PURE__ */ jsxs(reactExports.Fragment, { children: [
        /* @__PURE__ */ jsx(DropArea, { itemType, index, onItemTransfer }, "drop" + option.code),
        /* @__PURE__ */ jsx(RankingOption, { theme, index, onHover, itemType, option, rankingItemStyle: styles2.rankingItem, onDoubleClick }, option.code)
      ] }, option.code);
    }),
    /* @__PURE__ */ jsx(DropArea, { itemType, index: options.length, fillParent: true, onItemTransfer }, "last")
  ] });
}
function RankingOption({
  theme,
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
  return /* @__PURE__ */ jsx("div", { ref: drag, children: /* @__PURE__ */ jsx(Box, { "data-code": option.code, ref: containerRef, "data-handler-id": handlerId, style: {
    opacity: isDragging ? "0.2" : "1"
  }, onDoubleClick: () => onDoubleClick(item), className: rankingItemStyle, sx: {
    backgroundColor: "background.paper"
  }, children: /* @__PURE__ */ jsx(Content, { elementCode: option.code, customStyle: "\n        font-size: ".concat(theme.textStyles.text.size, "px;\n        "), name: "label", content: (_a = option.content) == null ? void 0 : _a.label }) }) });
}
function DropArea({
  index,
  onItemTransfer,
  itemType,
  fillParent
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
    minHeight: "12px"
  }, ref: containerRef, "data-handler-id": handlerId });
}
export {
  Ranking as default
};
//# sourceMappingURL=Ranking-HUzv_J_o.js.map
