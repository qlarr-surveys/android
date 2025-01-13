import { y as useTheme, j as jsxRuntimeExports } from "./index-Ceq5-OQz.js";
import { H as useSelector, U as useDispatch, aT as valueChange } from "./use-service-Ce_K4Bne.js";
import { B as Box } from "./index-Bo6nno8Y.js";
import { T as TextField } from "./TextField-CR7hcx6T.js";
import "./isTouchDevice-BsmdQ_b8.js";
import "./common-BojVgIsY.js";
import "./CardMedia-CjzqHFpn.js";
import "./Card-BDihdaOb.js";
import "./Toolbar-D1ad8WJv.js";
const container = "_container_bvkr6_2";
const styles = {
  container
};
function Barcode(props) {
  var _a, _b, _c;
  const theme = useTheme();
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
      dispatch(
        valueChange({
          componentCode: code,
          value: "This is a Dummy Barcode"
        })
      );
    } else if (window["Android"]) {
      window["Android"].scanBarcode(code);
      window["onBarcodeScanned" + code] = (value) => {
        dispatch(
          valueChange({
            componentCode: code,
            value
          })
        );
      };
    } else {
      console.debug("no android device!!");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles.container, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        onClick: onImageClick,
        src: "/barcode.png",
        style: {
          maxHeight: "200px"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    component.showHint && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: (_a = component.content) == null ? void 0 : _a.hint }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TextField,
      {
        variant: "standard",
        required: ((_c = (_b = props.component.validation) == null ? void 0 : _b.validation_required) == null ? void 0 : _c.isActive) ? true : false,
        disabled: true,
        value: state.value,
        InputProps: {
          sx: {
            fontFamily: theme.textStyles.text.font,
            color: theme.textStyles.text.color,
            fontSize: theme.textStyles.text.size
          }
        }
      }
    )
  ] });
}
export {
  Barcode as default
};
//# sourceMappingURL=Barcode-B4Re5NV-.js.map
