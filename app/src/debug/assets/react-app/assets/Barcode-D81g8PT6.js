import { o as jsxs, n as jsx } from "./index-CBAYZ0Vg.js";
import { u as useSelector, b as useDispatch } from "./redux-C5jBuL_y.js";
import { v as valueChange } from "./Android--WWD2PK6.js";
import { u as useTheme, m as TextField, x as Box } from "./mui-qMsG-zFb.js";
import "./vendor-C1A_Wzx1.js";
import "./i18n-CpdhL4GU.js";
import "./dnd-DDAM2OKI.js";
const container = "_container_bvkr6_2";
const styles = {
  container
};
function Barcode(props) {
  var _a, _b, _c;
  useTheme();
  const component = props.component;
  const state = useSelector((state2) => {
    return state2.runState.values[component.qualifiedCode];
  });
  const preview = useSelector((state2) => {
    return state2.runState.preview;
  });
  const mode = useSelector((state2) => {
    return state2.runState.values.Survey.mode;
  });
  const dispatch = useDispatch();
  const onImageClick = () => {
    const code = component.qualifiedCode;
    if (preview && mode == "offline") {
      dispatch(valueChange({
        componentCode: code,
        value: "This is a Dummy Barcode"
      }));
    } else if (window["Android"]) {
      window["Android"].scanBarcode(code);
      window["onBarcodeScanned" + code] = (value) => {
        dispatch(valueChange({
          componentCode: code,
          value
        }));
      };
    } else {
      console.debug("no android device!!");
    }
  };
  return /* @__PURE__ */ jsxs(Box, { className: styles.container, children: [
    /* @__PURE__ */ jsx("img", { onClick: onImageClick, src: "/barcode.png", style: {
      maxHeight: "200px"
    } }),
    /* @__PURE__ */ jsx("br", {}),
    component.showHint && /* @__PURE__ */ jsx("span", { children: (_a = component.content) == null ? void 0 : _a.hint }),
    /* @__PURE__ */ jsx(TextField, { variant: "standard", required: ((_c = (_b = props.component.validation) == null ? void 0 : _b.validation_required) == null ? void 0 : _c.isActive) ? true : false, value: state.value, size: "small" })
  ] });
}
export {
  Barcode as default
};
//# sourceMappingURL=Barcode-D81g8PT6.js.map
