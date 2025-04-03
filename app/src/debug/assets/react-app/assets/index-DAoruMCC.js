const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DateTimeQuestion-CVVAycmL.js","assets/index-BXKg_X9w.js","assets/index-CoUo3s5p.css","assets/index-CFFrfAwV.js","assets/dayjs.min-BYuDNZGJ.js","assets/use-service-D_BNczvS.js","assets/use-service-DwBCS-1d.css","assets/DateTimePicker-CBtVfPsg.js","assets/Tabs-C8JT5hpD.js","assets/InputAdornment-CnebZoW9.js","assets/TextField-WQpbUAds.js","assets/DatePicker-wBwy_29S.js","assets/DateTimeQuestion-BqY86nnn.css","assets/Scq-Bu-B25-0.js","assets/RadioGroup-BT-amEYM.js","assets/RadioGroupContext-C8tgogbD.js","assets/FormGroup-oSWhZBRb.js","assets/FormControlLabel-i6VTBdFM.js","assets/Radio-C05RY_Qz.js","assets/SwitchBase-BqqZbFu5.js","assets/radioClasses-B6tZog_h.js","assets/isTouchDevice-BxjlknWP.js","assets/common-Bl2TiDan.js","assets/CardMedia-naaIupyv.js","assets/Card-BxTiTrtS.js","assets/Toolbar-CZ6sMNbC.js","assets/SCQArray-CLeS7INj.js","assets/TableRow-D6Acb3fE.js","assets/TableCell-Di9qFQzs.js","assets/tableRowClasses-B1HVMYOB.js","assets/Signature-CZfmA8SF.js","assets/Signature-CD_BYQEv.css","assets/PhotoCapture-BL9tb7S6.js","assets/PhotoCapture-DmfQJuaI.css","assets/VideoCapture-DpOnPjPB.js","assets/index-DsxU1XV0.js","assets/Mcq-D4G_JRHu.js","assets/Checkbox-DSC03rz9.js","assets/NumberQuestion-QOWWa2S_.js","assets/NumberQuestion-IdwP-AJw.css","assets/TextQuestion-jyNymDLv.js","assets/TextQuestion-BveFhdl-.css","assets/VideoDisplay-BGeEgg1g.js","assets/ImageDisplay-gB5ySs2w.js","assets/ImageRanking-CAt5uCZ9.js","assets/ImageRanking-BSItg7yO.css","assets/ParagraphQuestion-blDnrHXo.js","assets/ParagraphQuestion--njUnKrI.css","assets/Barcode-CL0VWqcj.js","assets/EmailQuestion-Cf6Jop2k.js","assets/EmailQuestion-Cb4dO2Lj.css","assets/ImageScq-CaMrl2nA.js","assets/ImageScq-CmRuXt2L.css","assets/ImageMcq-Ba-DAqGr.js","assets/ImageMcq-CDEIJiE3.css","assets/Ranking-BeNLNUs6.js","assets/useDrop-eT_s750g.js","assets/Ranking-B15QX9I5.css","assets/NPS-zIVbBt6_.js","assets/NPS-CsEr_Nug.css","assets/FileUpload-G55TD9jo.js","assets/Link-B6OA4b9x.js","assets/IconScq-DLqz5M5B.js","assets/index-C1bvT1wp.js","assets/index-_2rZ8I_A.css","assets/IconScq-CHI3y498.css","assets/IconMcq-BdFQMH1-.js","assets/SCQIconArray-D9OsmP2Z.js"])))=>i.map(i=>d[i]);
import { f as generateUtilityClasses, ak as createBox, ae as ClassNameGenerator, r as reactExports, b as _objectWithoutPropertiesLoose, j as jsxRuntimeExports, _ as _extends, h as capitalize, d as clsx, B as Box$1, R as React, z as __vitePreload, A as LoadingDots, y as useTheme$1, q as interopRequireDefaultExports, t as useLocation, x as createTheme, s as useNavigate, C as CacheProvider } from "./index-BXKg_X9w.js";
import { w as useTheme, b as useForkRef, aZ as debounce, aY as ownerWindow, bf as Transition, bg as reflow, bh as getTransitionProps, f as styled, aL as Modal, l as rootShouldForwardProp, h as Paper, j as useDefaultProps, z as useRtl, c as composeClasses, bi as getDrawerUtilityClass, M as useTranslation, H as useSelector, bj as stripTags, ao as rtlLanguage, aR as shallowEqual, R as useDispatch, aC as Button, bk as navigatePrevious, bl as navigateNext, bm as questionIconByType, bn as jump, T as Typography, I as IconButton, aN as Close, K as requireCreateSvgIcon, aw as FormControl, S as Select, bo as langChange, N as MenuItem, Q as useService, bp as isEquivalent, bq as setFetching, br as continueNavigation, bs as stateReceived, bt as loadScript, bu as defualtTheme, au as cacheRtl, aq as ThemeProvider, Z as ErrorLayout, ar as CompactLayout, as as Image, aM as PROCESSED_ERRORS, bv as startNavigation } from "./use-service-D_BNczvS.js";
import { E as ErrorOutlineOutlined, c as createSelector, D as DndProvider, i as isTouchDevice, T as TouchBackend, H as HTML5Backend } from "./isTouchDevice-BxjlknWP.js";
import { b as buildResourceUrl } from "./common-Bl2TiDan.js";
import { C as CardMedia } from "./CardMedia-naaIupyv.js";
import { C as Card } from "./Card-BxTiTrtS.js";
import { T as Toolbar } from "./Toolbar-CZ6sMNbC.js";
const boxClasses = generateUtilityClasses("MuiBox", ["root"]);
const Box = createBox({
  defaultClassName: boxClasses.root,
  generateClassName: ClassNameGenerator.generate
});
const _excluded$1 = ["addEndListener", "appear", "children", "container", "direction", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function getTranslateValue(direction, node, resolvedContainer) {
  const rect = node.getBoundingClientRect();
  const containerRect = resolvedContainer && resolvedContainer.getBoundingClientRect();
  const containerWindow = ownerWindow(node);
  let transform;
  if (node.fakeTransform) {
    transform = node.fakeTransform;
  } else {
    const computedStyle = containerWindow.getComputedStyle(node);
    transform = computedStyle.getPropertyValue("-webkit-transform") || computedStyle.getPropertyValue("transform");
  }
  let offsetX = 0;
  let offsetY = 0;
  if (transform && transform !== "none" && typeof transform === "string") {
    const transformValues = transform.split("(")[1].split(")")[0].split(",");
    offsetX = parseInt(transformValues[4], 10);
    offsetY = parseInt(transformValues[5], 10);
  }
  if (direction === "left") {
    if (containerRect) {
      return "translateX(".concat(containerRect.right + offsetX - rect.left, "px)");
    }
    return "translateX(".concat(containerWindow.innerWidth + offsetX - rect.left, "px)");
  }
  if (direction === "right") {
    if (containerRect) {
      return "translateX(-".concat(rect.right - containerRect.left - offsetX, "px)");
    }
    return "translateX(-".concat(rect.left + rect.width - offsetX, "px)");
  }
  if (direction === "up") {
    if (containerRect) {
      return "translateY(".concat(containerRect.bottom + offsetY - rect.top, "px)");
    }
    return "translateY(".concat(containerWindow.innerHeight + offsetY - rect.top, "px)");
  }
  if (containerRect) {
    return "translateY(-".concat(rect.top - containerRect.top + rect.height - offsetY, "px)");
  }
  return "translateY(-".concat(rect.top + rect.height - offsetY, "px)");
}
function resolveContainer(containerPropProp) {
  return typeof containerPropProp === "function" ? containerPropProp() : containerPropProp;
}
function setTranslateValue(direction, node, containerProp) {
  const resolvedContainer = resolveContainer(containerProp);
  const transform = getTranslateValue(direction, node, resolvedContainer);
  if (transform) {
    node.style.webkitTransform = transform;
    node.style.transform = transform;
  }
}
const Slide = /* @__PURE__ */ reactExports.forwardRef(function Slide2(props, ref) {
  const theme = useTheme();
  const defaultEasing = {
    enter: theme.transitions.easing.easeOut,
    exit: theme.transitions.easing.sharp
  };
  const defaultTimeout = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    addEndListener,
    appear = true,
    children,
    container: containerProp,
    direction = "down",
    easing: easingProp = defaultEasing,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style,
    timeout = defaultTimeout,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$1);
  const childrenRef = reactExports.useRef(null);
  const handleRef = useForkRef(children.ref, childrenRef, ref);
  const normalizedTransitionCallback = (callback) => (isAppearing) => {
    if (callback) {
      if (isAppearing === void 0) {
        callback(childrenRef.current);
      } else {
        callback(childrenRef.current, isAppearing);
      }
    }
  };
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    setTranslateValue(direction, node, containerProp);
    reflow(node);
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntering = normalizedTransitionCallback((node, isAppearing) => {
    const transitionProps = getTransitionProps({
      timeout,
      style,
      easing: easingProp
    }, {
      mode: "enter"
    });
    node.style.webkitTransition = theme.transitions.create("-webkit-transform", _extends({}, transitionProps));
    node.style.transition = theme.transitions.create("transform", _extends({}, transitionProps));
    node.style.webkitTransform = "none";
    node.style.transform = "none";
    if (onEntering) {
      onEntering(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback((node) => {
    const transitionProps = getTransitionProps({
      timeout,
      style,
      easing: easingProp
    }, {
      mode: "exit"
    });
    node.style.webkitTransition = theme.transitions.create("-webkit-transform", transitionProps);
    node.style.transition = theme.transitions.create("transform", transitionProps);
    setTranslateValue(direction, node, containerProp);
    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback((node) => {
    node.style.webkitTransition = "";
    node.style.transition = "";
    if (onExited) {
      onExited(node);
    }
  });
  const handleAddEndListener = (next) => {
    if (addEndListener) {
      addEndListener(childrenRef.current, next);
    }
  };
  const updatePosition = reactExports.useCallback(() => {
    if (childrenRef.current) {
      setTranslateValue(direction, childrenRef.current, containerProp);
    }
  }, [direction, containerProp]);
  reactExports.useEffect(() => {
    if (inProp || direction === "down" || direction === "right") {
      return void 0;
    }
    const handleResize = debounce(() => {
      if (childrenRef.current) {
        setTranslateValue(direction, childrenRef.current, containerProp);
      }
    });
    const containerWindow = ownerWindow(childrenRef.current);
    containerWindow.addEventListener("resize", handleResize);
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener("resize", handleResize);
    };
  }, [direction, inProp, containerProp]);
  reactExports.useEffect(() => {
    if (!inProp) {
      updatePosition();
    }
  }, [inProp, updatePosition]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionComponent, _extends({
    nodeRef: childrenRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    appear,
    in: inProp,
    timeout
  }, other, {
    children: (state, childProps) => {
      return /* @__PURE__ */ reactExports.cloneElement(children, _extends({
        ref: handleRef,
        style: _extends({
          visibility: state === "exited" && !inProp ? "hidden" : void 0
        }, style, children.props.style)
      }, childProps));
    }
  }));
});
const _excluded = ["BackdropProps"], _excluded2 = ["anchor", "BackdropProps", "children", "className", "elevation", "hideBackdrop", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"];
const overridesResolver = (props, styles2) => {
  const {
    ownerState
  } = props;
  return [styles2.root, (ownerState.variant === "permanent" || ownerState.variant === "persistent") && styles2.docked, styles2.modal];
};
const useUtilityClasses = (ownerState) => {
  const {
    classes,
    anchor,
    variant
  } = ownerState;
  const slots = {
    root: ["root"],
    docked: [(variant === "permanent" || variant === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper", "paperAnchor".concat(capitalize(anchor)), variant !== "temporary" && "paperAnchorDocked".concat(capitalize(anchor))]
  };
  return composeClasses(slots, getDrawerUtilityClass, classes);
};
const DrawerRoot = styled(Modal, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver
})(({
  theme
}) => ({
  zIndex: (theme.vars || theme).zIndex.drawer
}));
const DrawerDockedRoot = styled("div", {
  shouldForwardProp: rootShouldForwardProp,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: false,
  overridesResolver
})({
  flex: "0 0 auto"
});
const DrawerPaper = styled(Paper, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.paper, styles2["paperAnchor".concat(capitalize(ownerState.anchor))], ownerState.variant !== "temporary" && styles2["paperAnchorDocked".concat(capitalize(ownerState.anchor))]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  flex: "1 0 auto",
  zIndex: (theme.vars || theme).zIndex.drawer,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  // temporary style
  position: "fixed",
  top: 0,
  // We disable the focus ring for mouse, touch and keyboard users.
  // At some point, it would be better to keep it for keyboard users.
  // :focus-ring CSS pseudo-class will help.
  outline: 0
}, ownerState.anchor === "left" && {
  left: 0
}, ownerState.anchor === "top" && {
  top: 0,
  left: 0,
  right: 0,
  height: "auto",
  maxHeight: "100%"
}, ownerState.anchor === "right" && {
  right: 0
}, ownerState.anchor === "bottom" && {
  top: "auto",
  left: 0,
  bottom: 0,
  right: 0,
  height: "auto",
  maxHeight: "100%"
}, ownerState.anchor === "left" && ownerState.variant !== "temporary" && {
  borderRight: "1px solid ".concat((theme.vars || theme).palette.divider)
}, ownerState.anchor === "top" && ownerState.variant !== "temporary" && {
  borderBottom: "1px solid ".concat((theme.vars || theme).palette.divider)
}, ownerState.anchor === "right" && ownerState.variant !== "temporary" && {
  borderLeft: "1px solid ".concat((theme.vars || theme).palette.divider)
}, ownerState.anchor === "bottom" && ownerState.variant !== "temporary" && {
  borderTop: "1px solid ".concat((theme.vars || theme).palette.divider)
}));
const oppositeDirection = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function isHorizontal(anchor) {
  return ["left", "right"].indexOf(anchor) !== -1;
}
function getAnchor({
  direction
}, anchor) {
  return direction === "rtl" && isHorizontal(anchor) ? oppositeDirection[anchor] : anchor;
}
const Drawer = /* @__PURE__ */ reactExports.forwardRef(function Drawer2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiDrawer"
  });
  const theme = useTheme();
  const isRtl = useRtl();
  const defaultTransitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    anchor: anchorProp = "left",
    BackdropProps,
    children,
    className,
    elevation = 16,
    hideBackdrop = false,
    ModalProps: {
      BackdropProps: BackdropPropsProp
    } = {},
    onClose,
    open = false,
    PaperProps = {},
    SlideProps,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Slide,
    transitionDuration = defaultTransitionDuration,
    variant = "temporary"
  } = props, ModalProps = _objectWithoutPropertiesLoose(props.ModalProps, _excluded), other = _objectWithoutPropertiesLoose(props, _excluded2);
  const mounted = reactExports.useRef(false);
  reactExports.useEffect(() => {
    mounted.current = true;
  }, []);
  const anchorInvariant = getAnchor({
    direction: isRtl ? "rtl" : "ltr"
  }, anchorProp);
  const anchor = anchorProp;
  const ownerState = _extends({}, props, {
    anchor,
    elevation,
    open,
    variant
  }, other);
  const classes = useUtilityClasses(ownerState);
  const drawer2 = /* @__PURE__ */ jsxRuntimeExports.jsx(DrawerPaper, _extends({
    elevation: variant === "temporary" ? elevation : 0,
    square: true
  }, PaperProps, {
    className: clsx(classes.paper, PaperProps.className),
    ownerState,
    children
  }));
  if (variant === "permanent") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DrawerDockedRoot, _extends({
      className: clsx(classes.root, classes.docked, className),
      ownerState,
      ref
    }, other, {
      children: drawer2
    }));
  }
  const slidingDrawer = /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionComponent, _extends({
    in: open,
    direction: oppositeDirection[anchorInvariant],
    timeout: transitionDuration,
    appear: mounted.current
  }, SlideProps, {
    children: drawer2
  }));
  if (variant === "persistent") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DrawerDockedRoot, _extends({
      className: clsx(classes.root, classes.docked, className),
      ownerState,
      ref
    }, other, {
      children: slidingDrawer
    }));
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DrawerRoot, _extends({
    BackdropProps: _extends({}, BackdropProps, BackdropPropsProp, {
      transitionDuration
    }),
    className: clsx(classes.root, classes.modal, className),
    open,
    ownerState,
    onClose,
    hideBackdrop,
    ref
  }, other, ModalProps, {
    children: slidingDrawer
  }));
});
const mainContainer = "_mainContainer_1oyjx_1";
const surveyDesignError = "_surveyDesignError_1oyjx_7";
const goBack = "_goBack_1oyjx_17";
const styles$9 = {
  mainContainer,
  surveyDesignError,
  goBack
};
const FORM_ID = "qlarr-form";
const content = "_content_ukoxz_1";
const question = "_question_ukoxz_8";
const required = "_required_ukoxz_12";
const header = "_header_ukoxz_16";
const textDescription$1 = "_textDescription_ukoxz_20";
const groupQuestion = "_groupQuestion_ukoxz_25";
const styles$8 = {
  content,
  question,
  required,
  header,
  textDescription: textDescription$1,
  groupQuestion
};
const wrapper = "_wrapper_1hpga_1";
const icon = "_icon_1hpga_11";
const styles$7 = {
  wrapper,
  icon
};
function ValidationItem(props) {
  const { t } = useTranslation(["run"]);
  function messages() {
    let validationMessage = "";
    if (props.validation.content && props.validation.isCustomErrorActive) {
      validationMessage = props.validation.content;
    } else {
      var translationKey = props.name.replace(/[0-9]/g, "");
      validationMessage = t(translationKey, { ...props.validation });
    }
    if (validationMessage) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box$1, { sx: { color: "error.main" }, className: styles$7.wrapper, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorOutlineOutlined, {}),
        validationMessage
      ] });
    } else {
      return "";
    }
  }
  return messages();
}
function Validation(props) {
  const selectValidation = (state) => (props.component.validation ? state.runState.values[props.component.qualifiedCode] : {}) || {};
  const captureValidation = createSelector(
    [selectValidation],
    (selectedState) => {
      var obj = {};
      Object.keys(props.component.validation || {}).forEach((key) => {
        var value = selectedState[key];
        if (value) {
          obj[key] = value;
        }
      });
      return obj;
    }
  );
  const validation = useSelector(captureValidation);
  const messages = () => {
    if (props.component.validation) {
      let array = Object.keys(props.component.validation).filter(
        (key) => validation[key]
      );
      let limit = props.limit ? props.limit : array.length;
      return array.slice(0, limit).map((key, index2) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          ValidationItem,
          {
            name: key,
            validation: props.component.validation[key]
          },
          index2
        );
      });
    } else {
      return "";
    }
  };
  return messages();
}
const DateTimeQuestion = React.lazy(
  () => __vitePreload(() => import("./DateTimeQuestion-CVVAycmL.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]) : void 0)
);
const SCQ = React.lazy(() => __vitePreload(() => import("./Scq-Bu-B25-0.js"), true ? __vite__mapDeps([13,1,2,5,6,14,15,16,17,18,19,20,10,21,22,23,24,25]) : void 0));
const SCQArray = React.lazy(() => __vitePreload(() => import("./SCQArray-CLeS7INj.js"), true ? __vite__mapDeps([26,1,2,5,6,27,28,29,18,19,15,20,21,22,23,24,25]) : void 0));
const Signature = React.lazy(() => __vitePreload(() => import("./Signature-CZfmA8SF.js"), true ? __vite__mapDeps([30,1,2,5,6,21,22,23,24,25,31]) : void 0));
const PhotoCapture = React.lazy(
  () => __vitePreload(() => import("./PhotoCapture-BL9tb7S6.js"), true ? __vite__mapDeps([32,1,2,5,6,22,21,23,24,25,33]) : void 0)
);
const VideoCapture = React.lazy(
  () => __vitePreload(() => import("./VideoCapture-DpOnPjPB.js"), true ? __vite__mapDeps([34,1,2,5,6,35,22,21,23,24,25,33]) : void 0)
);
const MCQ = React.lazy(() => __vitePreload(() => import("./Mcq-D4G_JRHu.js"), true ? __vite__mapDeps([36,1,2,5,6,17,37,19,14,15,16,10,21,22,23,24,25]) : void 0));
const NumberQuestion = React.lazy(
  () => __vitePreload(() => import("./NumberQuestion-QOWWa2S_.js"), true ? __vite__mapDeps([38,1,2,5,6,10,39]) : void 0)
);
const TextQuestion = React.lazy(() => __vitePreload(() => import("./TextQuestion-jyNymDLv.js"), true ? __vite__mapDeps([40,1,2,5,6,10,41]) : void 0));
const VideoDisplay = React.lazy(
  () => __vitePreload(() => import("./VideoDisplay-BGeEgg1g.js"), true ? __vite__mapDeps([42,1,2,22,5,6,35]) : void 0)
);
const ImageDisplay = React.lazy(
  () => __vitePreload(() => import("./ImageDisplay-gB5ySs2w.js"), true ? __vite__mapDeps([43,1,2,22,5,6]) : void 0)
);
const ImageRanking = React.lazy(
  () => __vitePreload(() => import("./ImageRanking-CAt5uCZ9.js"), true ? __vite__mapDeps([44,1,2,5,6,22,45]) : void 0)
);
const ParagraphQuestion = React.lazy(
  () => __vitePreload(() => import("./ParagraphQuestion-blDnrHXo.js"), true ? __vite__mapDeps([46,1,2,5,6,10,47]) : void 0)
);
const Barcode = React.lazy(() => __vitePreload(() => import("./Barcode-CL0VWqcj.js"), true ? __vite__mapDeps([48,1,2,5,6,10,21,22,23,24,25,33]) : void 0));
const EmailQuestion = React.lazy(
  () => __vitePreload(() => import("./EmailQuestion-Cf6Jop2k.js"), true ? __vite__mapDeps([49,1,2,5,6,10,50]) : void 0)
);
const ImageScq = React.lazy(() => __vitePreload(() => import("./ImageScq-CaMrl2nA.js"), true ? __vite__mapDeps([51,1,2,5,6,22,18,19,15,20,52]) : void 0));
const ImageMcq = React.lazy(() => __vitePreload(() => import("./ImageMcq-Ba-DAqGr.js"), true ? __vite__mapDeps([53,1,2,5,6,22,37,19,54]) : void 0));
const Ranking = React.lazy(() => __vitePreload(() => import("./Ranking-BeNLNUs6.js"), true ? __vite__mapDeps([55,1,2,5,6,56,21,22,23,24,25,57]) : void 0));
const NPS = React.lazy(() => __vitePreload(() => import("./NPS-zIVbBt6_.js"), true ? __vite__mapDeps([58,1,2,5,6,59]) : void 0));
const Content$2 = React.lazy(() => __vitePreload(() => Promise.resolve().then(() => index$1), true ? void 0 : void 0));
const FileUpload = React.lazy(
  () => __vitePreload(() => import("./FileUpload-G55TD9jo.js"), true ? __vite__mapDeps([60,1,2,5,6,61,21,22,23,24,25]) : void 0)
);
const IconScq = React.lazy(() => __vitePreload(() => import("./IconScq-DLqz5M5B.js"), true ? __vite__mapDeps([62,1,2,5,6,63,64,22,65]) : void 0));
const IconMcq = React.lazy(() => __vitePreload(() => import("./IconMcq-BdFQMH1-.js"), true ? __vite__mapDeps([66,1,2,5,6,63,64,22,65]) : void 0));
const SCQIconArray = React.lazy(
  () => __vitePreload(() => import("./SCQIconArray-D9OsmP2Z.js"), true ? __vite__mapDeps([67,1,2,5,6,63,64,22,27,28,29,21,23,24,25]) : void 0)
);
const Question = reactExports.forwardRef((props, ref) => {
  var _a, _b, _c, _d;
  console.debug("rendering: " + props.component.code);
  const relevance = useSelector((state) => {
    let questionState = state.runState.values[props.component.qualifiedCode];
    return typeof (questionState == null ? void 0 : questionState.relevance) === "undefined" || (questionState == null ? void 0 : questionState.relevance);
  });
  const theme = useTheme();
  const showDescription = props.component.showDescription && ((_a = props.component.content) == null ? void 0 : _a.description) && stripTags(props.component.content.description).length > 0;
  const showTitle = ((_b = props.component.content) == null ? void 0 : _b.label) && stripTags((_c = props.component.content) == null ? void 0 : _c.label).length > 0;
  const showHeader = showTitle || showDescription;
  const showQuestion = () => {
    switch (props.component.type) {
      case "date_time":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          DateTimeQuestion,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "date":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          DateTimeQuestion,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "time":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          DateTimeQuestion,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "scq":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          SCQ,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "scq_array":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          SCQArray,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "scq_icon_array":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          SCQIconArray,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "file_upload":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          FileUpload,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "signature":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Signature,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "photo_capture":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          PhotoCapture,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "video_capture":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          VideoCapture,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "mcq":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          MCQ,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "number":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          NumberQuestion,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "text":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextQuestion,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "video_display":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          VideoDisplay,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "image_display":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          ImageDisplay,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "image_ranking":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          ImageRanking,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "paragraph":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          ParagraphQuestion,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "barcode":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Barcode,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "email":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          EmailQuestion,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "image_scq":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          ImageScq,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "icon_scq":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          IconScq,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "icon_mcq":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          IconMcq,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "image_mcq":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          ImageMcq,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "ranking":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ranking,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      case "nps":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          NPS,
          {
            component: props.component
          },
          props.component.qualifiedCode
        );
      default:
        return "";
    }
  };
  return relevance ? /* @__PURE__ */ jsxRuntimeExports.jsxs(QuestionWrapper, { qualifiedCode: props.component.qualifiedCode, ref, children: [
    showHeader && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      showTitle && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box$1,
        {
          style: {
            fontFamily: theme.textStyles.question.font,
            color: theme.textStyles.text.color,
            fontSize: theme.textStyles.question.size
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Content$2,
            {
              className: "".concat(styles$8.content, " ").concat(styles$8.question),
              name: "label",
              lang: props.lang,
              elementCode: props.component.qualifiedCode,
              content: (_d = props.component.content) == null ? void 0 : _d.label
            }
          )
        }
      ),
      showDescription && /* @__PURE__ */ jsxRuntimeExports.jsx(Box$1, { className: styles$8.textDescription, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Content$2,
        {
          elementCode: props.component.code,
          name: "description",
          lang: props.lang,
          content: props.component.content.description
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingDots, {}), children: showQuestion() }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingDots, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(QuestionValidation, { component: props.component }) })
  ] }) : "";
});
const Question$1 = React.memo(Question);
const QuestionValidation = React.memo(({ component }) => {
  const showValidation = useSelector((state) => {
    let questionState = state.runState.values[component.qualifiedCode];
    let show_errors = state.runState.values.Survey.show_errors;
    let isDirty = state.templateState[component.qualifiedCode];
    let validity = questionState == null ? void 0 : questionState.validity;
    return (show_errors || isDirty) && validity === false;
  });
  return !showValidation ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Validation, { component });
});
const QuestionWrapper = React.memo((props) => {
  const invalid = useSelector((state) => {
    let questionState = state.runState.values[props.qualifiedCode];
    let show_errors = state.runState.values.Survey.show_errors;
    let isDirty = state.templateState[props.qualifiedCode];
    let validity = questionState == null ? void 0 : questionState.validity;
    return (show_errors || isDirty) && validity === false;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box$1,
    {
      sx: {
        borderColor: invalid ? "error.main" : "grey.500"
      },
      className: "".concat(styles$8.groupQuestion, " ").concat(invalid ? "invalidQuestion" : ""),
      children: props.children
    }
  );
});
function Content(props) {
  const isComplex = props.content && props.content.search(/data-instruction/) >= 0;
  const state = useSelector((state2) => {
    if (!props.content || !isComplex || !state2.runState.values[props.elementCode] || !props.name || !props.lang) {
      return void 0;
    } else {
      return state2.runState.values[props.elementCode]["reference_".concat(props.name, "_").concat(props.lang)];
    }
  });
  const lang = useSelector((state2) => {
    return state2.runState.values["Survey"].lang;
  });
  const isRtl = rtlLanguage.includes(lang);
  if (!props.content) {
    return "";
  } else if (!isComplex) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "".concat(isRtl ? "rtl" : "ltr", " ql-editor no-padding"),
        dangerouslySetInnerHTML: { __html: props.content }
      }
    );
  } else {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "".concat(isRtl ? "rtl" : "ltr", " ql-editor no-padding"),
        dangerouslySetInnerHTML: {
          __html: replaceMentions(props.content, state)
        }
      }
    );
  }
}
const Content$1 = React.memo(Content);
function replaceMentions(html, referenceValue) {
  let doc = document.createElement("div");
  doc.innerHTML = html;
  doc.querySelectorAll("span[data-instruction]").forEach(function(el) {
    let attribute = el.getAttribute("data-instruction");
    if (attribute && referenceValue) {
      let attrArray = attribute.split(".");
      if (attrArray && attrArray.length == 2 && referenceValue[attrArray[0]] && referenceValue[attrArray[0]][attrArray[1]]) {
        el.replaceWith(referenceValue[attrArray[0]][attrArray[1]]);
      } else {
        el.replaceWith("");
      }
    } else {
      el.replaceWith("");
    }
  });
  return doc.innerHTML;
}
const index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Content$1
}, Symbol.toStringTag, { value: "Module" }));
const textDescription = "_textDescription_jd8f0_1";
const titleRow = "_titleRow_jd8f0_6";
const groupHeader = "_groupHeader_jd8f0_16";
const topLevel = "_topLevel_jd8f0_20";
const styles$6 = {
  textDescription,
  titleRow,
  groupHeader,
  topLevel
};
function Group(props) {
  const theme = useTheme();
  const state = useSelector((state2) => {
    let groupState = state2.runState.values[props.group.code];
    return {
      showGroup: typeof (groupState == null ? void 0 : groupState.relevance) === "undefined" || groupState.relevance
    };
  }, shallowEqual);
  const showGroup = () => {
    var _a, _b, _c;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box$1,
      {
        className: styles$6.topLevel,
        sx: {
          borderRadius: "4px",
          backgroundColor: theme.palette.background.paper
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$6.groupHeader, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                style: {
                  fontFamily: theme.textStyles.group.font,
                  color: theme.textStyles.group.color,
                  fontSize: theme.textStyles.group.size
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Content$1,
                  {
                    elementCode: props.group.code,
                    name: "label",
                    lang: props.lang,
                    content: (_a = props.group.content) == null ? void 0 : _a.label
                  }
                )
              }
            ),
            props.group.showDescription && ((_b = props.group.content) == null ? void 0 : _b.description) && /* @__PURE__ */ jsxRuntimeExports.jsx(Box$1, { className: styles$6.textDescription, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Content$1,
              {
                elementCode: props.group.code,
                name: "description",
                lang: props.lang,
                content: (_c = props.group.content) == null ? void 0 : _c.description
              }
            ) })
          ] }),
          props.group && props.group.questions ? props.group.questions.filter((quest) => quest.inCurrentNavigation).map((quest) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Question$1,
            {
              component: quest,
              lang: props.lang
            },
            quest.code
          )) : ""
        ]
      }
    ) });
  };
  return state.showGroup && (props.group ? showGroup() : "");
}
const Group$1 = React.memo(Group);
const buttonContainer = "_buttonContainer_zlh5z_1";
const styles$5 = {
  buttonContainer
};
function Navigation(props) {
  const state = useSelector((state2) => {
    return {
      has_previous: state2.runState.values.Survey.has_previous && state2.runState.data.survey.allowPrevious,
      has_next: state2.runState.values.Survey.has_next,
      can_save: state2.runState.data.survey.allowIncomplete,
      has_errors: state2.runState.values.Survey.show_errors
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation("run");
  const isRtl = rtlLanguage.includes(i18n.language);
  const previous = () => {
    dispatch(navigatePrevious());
  };
  reactExports.useEffect(() => {
    if (state.has_errors) {
      setTimeout(() => {
        const invalidQuestion = document.querySelector(".invalidQuestion");
        if (invalidQuestion) {
          const scrollContainer = getClosestScrollableParent(invalidQuestion);
          scrollContainer.scrollTo({
            top: invalidQuestion.offsetTop - scrollContainer.offsetTop,
            behavior: "smooth"
          });
        }
      }, 500);
    }
  }, [state.has_errors]);
  const next = () => {
    dispatch(navigateNext());
  };
  return props.navigationIndex.name == "end" ? "" : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$5.buttonContainer, children: [
    state.has_previous ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        variant: "contained",
        className: isRtl ? "ml-14" : "mr-14",
        onClick: () => {
          previous();
        },
        children: t("previous")
      }
    ) : "",
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        variant: "contained",
        onClick: () => {
          next();
        },
        children: state.has_next ? t("next") : t("finish")
      }
    )
  ] });
}
function getClosestScrollableParent(element) {
  if (!element) return null;
  let parent = element.parentElement;
  while (parent) {
    const style = window.getComputedStyle(parent);
    const overflowY = style.overflowY;
    const isScrollable = (overflowY === "auto" || overflowY === "scroll") && parent.scrollHeight > parent.clientHeight;
    if (isScrollable) {
      return parent;
    }
    parent = parent.parentElement;
  }
  return document.documentElement;
}
const surveyContent = "_surveyContent_jntaj_1";
const surveyGroups = "_surveyGroups_jntaj_5";
const cardImage = "_cardImage_jntaj_12";
const groupContianer = "_groupContianer_jntaj_21";
const stepperContent = "_stepperContent_jntaj_26";
const menuButton = "_menuButton_jntaj_37";
const styles$4 = {
  surveyContent,
  surveyGroups,
  cardImage,
  groupContianer,
  stepperContent,
  menuButton
};
function Survey() {
  var _a;
  const theme = useTheme();
  const navigationIndex = useSelector((state) => {
    var _a2;
    return (_a2 = state.runState.data) == null ? void 0 : _a2.navigationIndex;
  }, shallowEqual);
  const survey = useSelector((state) => {
    var _a2;
    return (_a2 = state.runState.data) == null ? void 0 : _a2.survey;
  }, shallowEqual);
  const lang = useSelector((state) => {
    var _a2;
    return (_a2 = state.runState.data) == null ? void 0 : _a2.lang;
  }, shallowEqual);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DndProvider, { backend: isTouchDevice() ? TouchBackend : HTML5Backend, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "form",
    {
      id: FORM_ID,
      style: {
        fontFamily: theme.textStyles.text.font,
        color: theme.textStyles.text.color,
        fontSize: theme.textStyles.text.size
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$4.surveyGroups, children: [
        ((_a = survey.resources) == null ? void 0 : _a.headerImage) ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          CardMedia,
          {
            className: styles$4.cardImage,
            component: "img",
            image: buildResourceUrl(survey.resources.headerImage)
          }
        ) : null,
        survey && survey.groups ? survey.groups.filter((group) => group.inCurrentNavigation).map((group, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            id: "group-".concat(index2),
            "data-index": index2,
            className: styles$4.groupContianer,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Group$1, { group, lang: lang.code, groupIndex: index2 })
          },
          group.code
        )) : "",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, { navigationIndex })
      ] })
    }
  ) });
}
const loadingWrapper = "_loadingWrapper_1p71l_1";
const loadingDots = "_loadingDots_1p71l_14";
const l1 = "_l1_1p71l_1";
const styles$3 = {
  loadingWrapper,
  loadingDots,
  l1
};
function RunLoadingDots() {
  var _a, _b;
  const theme = useTheme$1();
  const isLoading = useSelector((state) => state.templateState.isLoading);
  const [delayedLoading, setDelayedLoading] = reactExports.useState(false);
  const [forceLoading, setForceLoading] = reactExports.useState(false);
  reactExports.useEffect(() => {
    let timer;
    if (isLoading) {
      setDelayedLoading(true);
      setForceLoading(false);
      timer = setTimeout(() => {
        setForceLoading(true);
      }, 200);
    } else {
      if (!forceLoading) {
        timer = setTimeout(() => {
          setDelayedLoading(false);
        }, 200);
      } else {
        setDelayedLoading(false);
      }
    }
    return () => clearTimeout(timer);
  }, [isLoading, forceLoading]);
  return delayedLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Box$1, { className: styles$3.loadingWrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box$1,
    {
      style: {
        background: "radial-gradient(circle closest-side, ".concat((_b = (_a = theme == null ? void 0 : theme.palette) == null ? void 0 : _a.primary) == null ? void 0 : _b.main, " 90%, #0000) 0 / calc(100% / 3) 100% space")
      },
      className: styles$3.loadingDots
    }
  ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
}
const drawer = "_drawer_16lbk_1";
const drawerHeader = "_drawerHeader_16lbk_5";
const styles$2 = {
  drawer,
  drawerHeader
};
const groupCard = "_groupCard_18q7o_1";
const groupTitle = "_groupTitle_18q7o_6";
const questionTitle = "_questionTitle_18q7o_10";
const questionIcon = "_questionIcon_18q7o_16";
const bullet = "_bullet_18q7o_23";
const redAsterix = "_redAsterix_18q7o_29";
const truncatedTwoLines = "_truncatedTwoLines_18q7o_34";
const styles$1 = {
  groupCard,
  groupTitle,
  questionTitle,
  questionIcon,
  bullet,
  redAsterix,
  truncatedTwoLines
};
function SurveyIndex(props) {
  const theme = useTheme$1();
  const dispatch = useDispatch();
  const relevance_map = useSelector((state) => {
    return state.runState.values["Survey"].relevance_map;
  }, shallowEqual);
  const validity_map = useSelector((state) => {
    return state.runState.values["Survey"].validity_map;
  }, shallowEqual);
  const canJump = useSelector((state) => {
    return state.runState.data.survey.allowJump;
  }, shallowEqual);
  const isCurrentGroup = (groupCode) => {
    return props.navigationIndex.name == "group" && groupCode == props.navigationIndex.groupId;
  };
  const isCurrentQuestion = (questionCode) => {
    return props.navigationIndex.name == "question" && questionCode == props.navigationIndex.questionId;
  };
  const isGroupClickable = (groupCode) => canJump && !isCurrentGroup(groupCode) && props.navigationIndex.name == "group";
  const isQuestionClickable = (questionCode) => canJump && !isCurrentQuestion(questionCode) && props.navigationIndex.name == "question";
  const onGroupClicked = (groupCode) => {
    if (isGroupClickable(groupCode)) {
      dispatch(jump({ ...props.navigationIndex, groupId: groupCode }));
    }
  };
  const onQuestionClicked = (questionCode) => {
    if (isQuestionClickable(questionCode)) {
      dispatch(jump({ ...props.navigationIndex, questionId: questionCode }));
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: props.survey && props.survey.groups ? props.survey.groups.filter(
    (group) => relevance_map[group.code] && group.groupType != "END"
  ).map((group) => {
    var _a;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        onClick: () => onGroupClicked(group.code),
        className: styles$1.groupCard,
        style: {
          backgroundColor: isCurrentGroup(group.code) ? "beige" : theme.palette.background.paper,
          cursor: isGroupClickable(group.code) ? "pointer" : "default"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$1.groupTitle, children: [
            stripTags((_a = group.content) == null ? void 0 : _a.label),
            " "
          ] }),
          group.questions.filter((question2) => relevance_map[question2.code]).map((question2) => {
            var _a2;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Box,
              {
                onClick: () => onQuestionClicked(question2.code),
                className: styles$1.questionTitle,
                style: {
                  backgroundColor: isCurrentQuestion(question2.code) ? "beige" : "inherit",
                  cursor: isGroupClickable(group.code) ? "inherit" : isQuestionClickable(group.code) ? "pointer" : "default"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$1.questionIcon, children: questionIconByType(question2.type) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$1.truncatedTwoLines, children: stripTags((_a2 = question2.content) == null ? void 0 : _a2.label) }),
                  !validity_map[question2.code] && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$1.redAsterix, children: "*" })
                ]
              },
              question2.code
            );
          })
        ]
      },
      group.code
    );
  }) : "" });
}
function SurveyDrawer({ expanded, toggleDrawer, t }) {
  const navigationIndex = useSelector((state) => {
    var _a;
    return (_a = state.runState.data) == null ? void 0 : _a.navigationIndex;
  }, shallowEqual);
  const survey = useSelector((state) => {
    var _a;
    return (_a = state.runState.data) == null ? void 0 : _a.survey;
  }, shallowEqual);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Drawer,
    {
      anchor: "left",
      transitionDuration: expanded !== COLLAPSE_IMMEDIATE ? 500 : 0,
      open: expanded == EXPAND,
      onClose: toggleDrawer(false),
      sx: {
        "& .MuiDrawer-paper": {
          width: "350px",
          maxWidth: "90%",
          "@media (max-width: 600px)": {
            width: "300px"
          }
        }
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$2.drawer, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$2.drawerHeader, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", className: styles$2.drawerTitle, children: t("survey_navigation") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            IconButton,
            {
              className: styles$2.closeButton,
              onClick: toggleDrawer(false),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Close, {})
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyIndex, { navigationIndex, survey })
      ] })
    }
  );
}
const SurveyDrawer$1 = React.memo(SurveyDrawer);
const COLLAPSE_IMMEDIATE = "COLLAPSE_IMMEDIATE";
const COLLAPSE = "COLLAPSE";
const EXPAND = "EXPAND";
var Menu = {};
var _interopRequireDefault = interopRequireDefaultExports;
Object.defineProperty(Menu, "__esModule", {
  value: true
});
var default_1 = Menu.default = void 0;
var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
var _jsxRuntime = jsxRuntimeExports;
default_1 = Menu.default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
  d: "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
}), "Menu");
function ChangeLang(props) {
  useSelector((state2) => {
    return {
      navigate: state2.runState.navigate,
      lang: state2.runState.lang
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  const { t } = useTranslation("run");
  return props.additionalLang && props.additionalLang.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { style: { maxWidth: "250px" }, variant: "standard", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Select,
    {
      labelId: "change-lang-label",
      sx: {
        backgroundColor: "background.paper",
        color: "primary.main",
        paddingLeft: "8px"
      },
      id: "ChangeLang",
      label: t("lang"),
      value: props.lang.code,
      onChange: (event) => {
        dispatch(
          langChange({
            lang: event.target.value
          })
        );
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: props.lang.code, children: props.lang.name }),
        props.additionalLang ? props.additionalLang.map((lang, index2) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: lang.code, children: lang.name }, index2);
        }) : ""
      ]
    }
  ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
}
const toolbar = "_toolbar_13q1d_1";
const styles = {
  toolbar
};
function SurveyAppBar({ toggleDrawer }) {
  const lang = useSelector((state) => {
    var _a;
    return (_a = state.runState.data) == null ? void 0 : _a.lang;
  }, shallowEqual);
  const additionalLang = useSelector((state) => {
    var _a;
    return (_a = state.runState.data) == null ? void 0 : _a.additionalLang;
  }, shallowEqual);
  const theme = useTheme$1();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Toolbar,
    {
      sx: {
        backgroundColor: theme.palette.background.default
      },
      className: styles.toolbar,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          IconButton,
          {
            color: "primary",
            size: "large",
            edge: "start",
            "aria-label": "menu",
            sx: {
              backgroundColor: theme.palette.background.paper
            },
            onClick: toggleDrawer(true),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1, {})
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChangeLang, { lang, additionalLang })
      ]
    }
  );
}
function RunSurvey({ preview, guest, mode, resume = false, responseId }) {
  const runService = useService("run");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const lang = searchParams.get("lang");
  const [render, setRender] = React.useState(false);
  const [expanded, setExpanded] = React.useState(COLLAPSE);
  const [error, setError] = React.useState(false);
  const [inlineError, setInlineError] = React.useState(false);
  const containerRef = reactExports.useRef(null);
  const surveyTheme = useSelector((state) => {
    var _a, _b;
    return (_b = (_a = state.runState.data) == null ? void 0 : _a.survey) == null ? void 0 : _b.theme;
  }, isEquivalent);
  const navResponseId = useSelector((state) => {
    var _a;
    return (_a = state.runState.data) == null ? void 0 : _a.responseId;
  });
  useSelector(
    (state) => {
      var _a, _b;
      return (_b = (_a = state.runState.data) == null ? void 0 : _a.survey) == null ? void 0 : _b.allowJump;
    },
    shallowEqual
  );
  const backgroundImage = useSelector((state) => {
    var _a, _b, _c;
    return (_c = (_b = (_a = state.runState.data) == null ? void 0 : _a.survey) == null ? void 0 : _b.resources) == null ? void 0 : _c.backgroundImage;
  });
  const navigation = useSelector((state) => {
    return state.runState.navigation;
  }, isEquivalent);
  const { t, i18n } = useTranslation("run");
  const dispatch = useDispatch();
  reactExports.useEffect(() => {
    if (navigation) {
      continueNav(navigation, navResponseId);
    }
  }, [navigation]);
  reactExports.useEffect(() => {
    if (rtlLanguage.includes(i18n.language)) {
      document.dir = "rtl";
    } else {
      document.dir = "ltr";
    }
  }, [i18n.language]);
  const handleError = (procesed) => {
    if ([
      PROCESSED_ERRORS.SURVEY_DESIGN_ERROR,
      PROCESSED_ERRORS.SURVEY_NOT_ACTIVE,
      PROCESSED_ERRORS.SURVEY_CLOSED,
      PROCESSED_ERRORS.SURVEY_EXPIRED,
      PROCESSED_ERRORS.SURVEY_SCHEDULED
    ].indexOf(procesed) > -1) {
      setInlineError(procesed);
    } else {
      setError(procesed);
    }
    dispatch(setFetching(false));
  };
  const startNav = () => {
    startNavigation(runService, lang, preview, guest, mode).then((response) => {
      setRender(true);
      dispatch(stateReceived({ response, preview }));
      sessionStorage.setItem("responseId", response.responseId);
      i18n.changeLanguage(response.lang.code);
      dispatch(setFetching(false));
    }).catch((err) => {
      handleError(err);
    });
  };
  const continueNav = (payload, responseId2) => {
    dispatch(setFetching(true));
    continueNavigation(runService, payload, responseId2, preview, guest, mode).then((response) => {
      setRender(true);
      dispatch(stateReceived({ response, preview }));
      sessionStorage.setItem("responseId", response.responseId);
      i18n.changeLanguage(response.lang.code);
      dispatch(setFetching(false));
    }).catch((err) => {
      console.log(err);
      handleError(err);
    });
  };
  reactExports.useEffect(() => {
    if (!navigation && containerRef.current) {
      containerRef.current.scrollTo({ top: 0 });
    }
  }, [navigation, containerRef.current]);
  reactExports.useEffect(() => {
    document.body.style.overflow = "visible";
    dispatch(setFetching(true));
    loadScript(runService, preview, guest).then(() => {
      if (resume) {
        continueNav({ navigationDirection: { name: "RESUME" } }, responseId);
      } else {
        startNav();
      }
    }).catch((err) => {
      handleError(err);
    });
  }, []);
  const theme = reactExports.useMemo(
    () => createTheme({
      ...defualtTheme(surveyTheme),
      direction: rtlLanguage.includes(i18n.language) ? "rtl" : "ltr"
    }),
    [i18n.language, surveyTheme]
  );
  const cacheRtlMemo = reactExports.useMemo(() => cacheRtl(i18n.language), [i18n.language]);
  const navigate = useNavigate();
  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setExpanded(open ? EXPAND : COLLAPSE);
  };
  const backgroundStyle = backgroundImage ? {
    backgroundImage: "url(".concat(buildResourceUrl(backgroundImage), ")"),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // backgroundSize: "100% 100%",
    backgroundPosition: "center"
  } : {};
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CacheProvider, { value: cacheRtlMemo, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ThemeProvider, { theme, children: [
      error && /* @__PURE__ */ jsxRuntimeExports.jsx(
        ErrorLayout,
        {
          error,
          setErrorSeen: () => {
            setError(null);
          }
        }
      ),
      render && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: styles$9.mainContainer,
          ref: containerRef,
          style: {
            backgroundColor: theme.palette.background.default,
            fontFamily: theme.textStyles.text.font,
            color: theme.textStyles.text.color,
            fontSize: theme.textStyles.text.size,
            ...backgroundStyle
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyAppBar, { toggleDrawer }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SurveyMemo, {}, "Survey"),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SurveyDrawer$1,
              {
                expanded,
                toggleDrawer,
                t
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RunLoadingDots, {})
    ] }) }),
    inlineError && /* @__PURE__ */ jsxRuntimeExports.jsx(Box$1, { style: { height: "100%", overflow: "auto" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CompactLayout, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h3", paragraph: true, children: t("error") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { sx: { color: "text.secondary" }, children: t("processed_errors." + inlineError.name) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Image,
        {
          alt: "500",
          src: "/illustration_500.svg",
          sx: {
            mx: "auto",
            maxWidth: 320,
            my: { xs: 5, sm: 8 }
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          fullWidth: true,
          size: "large",
          color: "inherit",
          variant: "contained",
          className: styles$9.goBack,
          onClick: () => navigate(-1),
          children: t("goBack")
        }
      )
    ] }) })
  ] });
}
const SurveyMemo = React.memo(Survey);
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RunSurvey
}, Symbol.toStringTag, { value: "Module" }));
export {
  Box as B,
  RunSurvey as R,
  Validation as V,
  ValidationItem as a,
  index as i
};
//# sourceMappingURL=index-DAoruMCC.js.map
