import { j as jsxRuntimeExports, r as reactExports, B as Box } from "./index-GLBW3_uR.js";
import { H as useSelector, aU as shallowEqual, U as useDispatch, av as FormControl, w as useTheme, aV as valueChange, b1 as setDirty } from "./use-service-BKPqOjBj.js";
import { V as Validation } from "./index-BrBZ-Fwp.js";
import { R as RadioGroup } from "./RadioGroup-DhFrWLkr.js";
import { F as FormControlLabel } from "./FormControlLabel-Cjy18-QD.js";
import { R as Radio } from "./Radio-DaBGRTzG.js";
import { T as TextField } from "./TextField-Dshtidi6.js";
import "./isTouchDevice-BBMDVXJ0.js";
import "./common-BgJdLjBL.js";
import "./Close-CW1wFndk.js";
import "./Card-yDMxaNNi.js";
import "./Toolbar-D9d8xIaL.js";
import "./RadioGroupContext-xtiHGRVQ.js";
import "./FormGroup-_z60cN7g.js";
import "./SwitchBase-CV68NIYO.js";
import "./radioClasses-Gcs6PRWb.js";
function SCQ(props) {
  const state = useSelector((state2) => {
    let questionState = state2.runState.values[props.component.qualifiedCode];
    return {
      value: (questionState == null ? void 0 : questionState.value) || ""
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(
      valueChange({
        componentCode: event.target.name,
        value: event.target.value
      })
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { component: "fieldset", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    RadioGroup,
    {
      name: props.component.qualifiedCode,
      value: state.value,
      onChange: handleChange,
      children: props.component.answers.map((option) => {
        if (option.type === "other") {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            ScqChoiceOther,
            {
              parentCode: props.component.qualifiedCode,
              Choice: option
            },
            option.qualifiedCode
          );
        } else {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(ScqChoice, { Choice: option }, option.qualifiedCode);
        }
      })
    }
  ) });
}
function ScqChoice(props) {
  const theme = useTheme();
  const showChoice = () => {
    var _a;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      FormControlLabel,
      {
        control: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Radio,
          {
            sx: {
              color: theme.textStyles.text.color
            }
          }
        ),
        label: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            sx: {
              fontFamily: theme.textStyles.text.font,
              color: theme.textStyles.text.color,
              fontSize: theme.textStyles.text.size
            },
            children: (_a = props.Choice.content) == null ? void 0 : _a.label
          }
        ),
        value: props.Choice.code
      },
      props.Choice.qualifiedCode
    );
  };
  return showChoice ? showChoice() : "";
}
function ScqChoiceOther(props) {
  const theme = useTheme();
  const nestedTextChild = props.Choice.answers[0];
  const state = useSelector((state2) => {
    let choiceState = state2.runState.values[props.Choice.qualifiedCode];
    let childState = state2.runState.values[nestedTextChild.qualifiedCode];
    let show_errors = state2.runState.values.Survey.show_errors;
    let isChildDirty = state2.templateState[nestedTextChild.qualifiedCode];
    return {
      showChoice: typeof (choiceState == null ? void 0 : choiceState.relevance) === "undefined" || choiceState.relevance,
      childInvalid: (show_errors || isChildDirty) && (childState == null ? void 0 : childState.relevance) === true && (childState == null ? void 0 : childState.validity) === false,
      value: (childState == null ? void 0 : childState.value) || ""
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(
      valueChange({
        componentCode: event.target.name,
        value: event.target.value
      })
    );
  };
  const handleFocus = (event) => {
    dispatch(
      valueChange({ componentCode: props.parentCode, value: props.Choice.code })
    );
  };
  const lostFocus = (event) => {
    dispatch(setDirty(event.target.name));
  };
  const textInput = reactExports.useRef();
  const onButtonClick = (event) => {
    if (event.target.checked) {
      textInput.current.focus();
    }
  };
  const showChoice = () => {
    var _a, _b, _c;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left d-flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FormControlLabel,
        {
          control: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Radio,
            {
              sx: {
                color: theme.textStyles.text.color
              }
            }
          ),
          label: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextField,
            {
              variant: "standard",
              required: ((_a = state.textChild) == null ? void 0 : _a.relevance) && ((_b = nestedTextChild.validation) == null ? void 0 : _b.required),
              sx: {
                label: { color: theme.textStyles.text.color }
              },
              inputRef: textInput,
              id: nestedTextChild.qualifiedCode,
              name: nestedTextChild.qualifiedCode,
              label: (_c = props.Choice.content) == null ? void 0 : _c.label,
              onChange: handleChange,
              onFocus: handleFocus,
              onBlur: lostFocus,
              value: state.value,
              InputProps: {
                sx: {
                  fontFamily: theme.textStyles.text.font,
                  color: theme.textStyles.text.color,
                  fontSize: theme.textStyles.text.size
                }
              },
              helperText: state.childInvalid ? /* @__PURE__ */ jsxRuntimeExports.jsx(Validation, { component: nestedTextChild, limit: 1 }) : ""
            }
          ) }),
          onChange: onButtonClick,
          value: props.Choice.code
        },
        props.Choice.qualifiedCode
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", {})
    ] });
  };
  return state.showChoice ? showChoice() : "";
}
export {
  SCQ as default
};
//# sourceMappingURL=Scq-C6J6r14_.js.map
