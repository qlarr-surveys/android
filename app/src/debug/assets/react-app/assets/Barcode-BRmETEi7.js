import { ar as useTheme, at as jsxs, as as jsx } from "./index-DNdGKa2S.js";
import { J as useSelector, L as useDispatch, M as TextField, Z as Box, N as valueChange } from "./Android-B93oKG4p.js";
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
//# sourceMappingURL=Barcode-BRmETEi7.js.map
