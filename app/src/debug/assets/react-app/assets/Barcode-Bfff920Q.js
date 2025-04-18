import { aj as useTheme, j as jsxRuntimeExports } from "./index-GLBW3_uR.js";
import { H as useSelector, U as useDispatch, aV as valueChange } from "./use-service-BKPqOjBj.js";
import { B as Box } from "./index-BrBZ-Fwp.js";
import { T as TextField } from "./TextField-Dshtidi6.js";
import "./isTouchDevice-BBMDVXJ0.js";
import "./common-BgJdLjBL.js";
import "./Close-CW1wFndk.js";
import "./Card-yDMxaNNi.js";
import "./Toolbar-D9d8xIaL.js";
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
//# sourceMappingURL=Barcode-Bfff920Q.js.map
