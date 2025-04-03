import { y as useTheme, j as jsxRuntimeExports } from "./index-BXKg_X9w.js";
import { H as useSelector, R as useDispatch, aS as valueChange } from "./use-service-D_BNczvS.js";
import { B as Box } from "./index-DAoruMCC.js";
import { T as TextField } from "./TextField-WQpbUAds.js";
import "./isTouchDevice-BxjlknWP.js";
import "./common-Bl2TiDan.js";
import "./CardMedia-naaIupyv.js";
import "./Card-BxTiTrtS.js";
import "./Toolbar-CZ6sMNbC.js";
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
//# sourceMappingURL=Barcode-CL0VWqcj.js.map
