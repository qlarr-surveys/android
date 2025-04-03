import { h as capitalize, r as reactExports, b as _objectWithoutPropertiesLoose, _ as _extends, d as clsx, j as jsxRuntimeExports, q as interopRequireDefaultExports, B as Box, s as useNavigate, y as useTheme, A as LoadingDots } from "./index-BXKg_X9w.js";
import { f as styled, j as useDefaultProps, x as useSlotProps, c as composeClasses, e as createSvgIcon, K as requireCreateSvgIcon, I as IconButton, T as Typography, bc as truncateWithEllipsis, M as useTranslation, Q as useService, R as useDispatch, aK as Stack, Y as setLoading, aM as PROCESSED_ERRORS, bd as processApiError, be as getDirFromSession, aJ as Container, aC as Button, aX as Fade, aN as Close, J as TokenService } from "./use-service-D_BNczvS.js";
import { u as usePreviousProps, d as default_1$3, a as default_1$5, D as DeleteModal } from "./Image-CE4vE1Da.js";
import { s as serverDateTimeToLocalDateTime, l as localDateToServerDateTime } from "./DateUtils-D9XCaXee.js";
import { b as badgeClasses, g as getBadgeUtilityClass, E as Edit, C as CustomTooltip, S as SavingSurvey, a as Snackbar, A as Alert, i as isSurveyAdmin, d as default_1$4, c as default_1$6, e as RHFSelect, u as useForm, F as FormProvider, R as RHFTextField, f as FileUpload, h as SurveyClone, j as ROLES } from "./Web-BJ9GQG1r.js";
import { d as dayjs } from "./dayjs.min-BYuDNZGJ.js";
import { d as default_1$7 } from "./Delete-CGrSv7M_.js";
import { b as buildResourceUrl } from "./common-Bl2TiDan.js";
import { T as TextField } from "./TextField-WQpbUAds.js";
import { C as Check } from "./Check-CzItDdan.js";
import { C as Card } from "./Card-BxTiTrtS.js";
import { C as CardMedia } from "./CardMedia-naaIupyv.js";
import { D as Divider } from "./Divider-Dlzogn56.js";
import { c as create$3, a as create$6, o, L as LoadingButton } from "./yup-DOqXNEId.js";
import { S as SURVEY_MODE } from "./survey-B8WvHOv0.js";
import { T as TablePagination } from "./TablePagination-DYBvoZJZ.js";
import "./Checkbox-DSC03rz9.js";
import "./SwitchBase-BqqZbFu5.js";
import "./Tabs-C8JT5hpD.js";
import "./radioClasses-B6tZog_h.js";
import "./tableRowClasses-B1HVMYOB.js";
import "./FormControlLabel-i6VTBdFM.js";
import "./TableCell-Di9qFQzs.js";
import "./Toolbar-CZ6sMNbC.js";
function useBadge(parameters) {
  const {
    badgeContent: badgeContentProp,
    invisible: invisibleProp = false,
    max: maxProp = 99,
    showZero = false
  } = parameters;
  const prevProps = usePreviousProps({
    badgeContent: badgeContentProp,
    max: maxProp
  });
  let invisible = invisibleProp;
  if (invisibleProp === false && badgeContentProp === 0 && !showZero) {
    invisible = true;
  }
  const {
    badgeContent,
    max = maxProp
  } = invisible ? prevProps : parameters;
  const displayValue = badgeContent && Number(badgeContent) > max ? "".concat(max, "+") : badgeContent;
  return {
    badgeContent,
    invisible,
    max,
    displayValue
  };
}
const _excluded = ["anchorOrigin", "className", "classes", "component", "components", "componentsProps", "children", "overlap", "color", "invisible", "max", "badgeContent", "slots", "slotProps", "showZero", "variant"];
const RADIUS_STANDARD = 10;
const RADIUS_DOT = 4;
const useUtilityClasses = (ownerState) => {
  const {
    color,
    anchorOrigin,
    invisible,
    overlap,
    variant,
    classes = {}
  } = ownerState;
  const slots = {
    root: ["root"],
    badge: ["badge", variant, invisible && "invisible", "anchorOrigin".concat(capitalize(anchorOrigin.vertical)).concat(capitalize(anchorOrigin.horizontal)), "anchorOrigin".concat(capitalize(anchorOrigin.vertical)).concat(capitalize(anchorOrigin.horizontal)).concat(capitalize(overlap)), "overlap".concat(capitalize(overlap)), color !== "default" && "color".concat(capitalize(color))]
  };
  return composeClasses(slots, getBadgeUtilityClass, classes);
};
const BadgeRoot = styled("span", {
  name: "MuiBadge",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})({
  position: "relative",
  display: "inline-flex",
  // For correct alignment with the text.
  verticalAlign: "middle",
  flexShrink: 0
});
const BadgeBadge = styled("span", {
  name: "MuiBadge",
  slot: "Badge",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.badge, styles2[ownerState.variant], styles2["anchorOrigin".concat(capitalize(ownerState.anchorOrigin.vertical)).concat(capitalize(ownerState.anchorOrigin.horizontal)).concat(capitalize(ownerState.overlap))], ownerState.color !== "default" && styles2["color".concat(capitalize(ownerState.color))], ownerState.invisible && styles2.invisible];
  }
})(({
  theme
}) => {
  var _theme$vars;
  return {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    position: "absolute",
    boxSizing: "border-box",
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(12),
    minWidth: RADIUS_STANDARD * 2,
    lineHeight: 1,
    padding: "0 6px",
    height: RADIUS_STANDARD * 2,
    borderRadius: RADIUS_STANDARD,
    zIndex: 1,
    // Render the badge on top of potential ripples.
    transition: theme.transitions.create("transform", {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    variants: [...Object.keys(((_theme$vars = theme.vars) != null ? _theme$vars : theme).palette).filter((key) => {
      var _theme$vars2, _theme$vars3;
      return ((_theme$vars2 = theme.vars) != null ? _theme$vars2 : theme).palette[key].main && ((_theme$vars3 = theme.vars) != null ? _theme$vars3 : theme).palette[key].contrastText;
    }).map((color) => ({
      props: {
        color
      },
      style: {
        backgroundColor: (theme.vars || theme).palette[color].main,
        color: (theme.vars || theme).palette[color].contrastText
      }
    })), {
      props: {
        variant: "dot"
      },
      style: {
        borderRadius: RADIUS_DOT,
        height: RADIUS_DOT * 2,
        minWidth: RADIUS_DOT * 2,
        padding: 0
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.anchorOrigin.vertical === "top" && ownerState.anchorOrigin.horizontal === "right" && ownerState.overlap === "rectangular",
      style: {
        top: 0,
        right: 0,
        transform: "scale(1) translate(50%, -50%)",
        transformOrigin: "100% 0%",
        ["&.".concat(badgeClasses.invisible)]: {
          transform: "scale(0) translate(50%, -50%)"
        }
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.anchorOrigin.vertical === "bottom" && ownerState.anchorOrigin.horizontal === "right" && ownerState.overlap === "rectangular",
      style: {
        bottom: 0,
        right: 0,
        transform: "scale(1) translate(50%, 50%)",
        transformOrigin: "100% 100%",
        ["&.".concat(badgeClasses.invisible)]: {
          transform: "scale(0) translate(50%, 50%)"
        }
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.anchorOrigin.vertical === "top" && ownerState.anchorOrigin.horizontal === "left" && ownerState.overlap === "rectangular",
      style: {
        top: 0,
        left: 0,
        transform: "scale(1) translate(-50%, -50%)",
        transformOrigin: "0% 0%",
        ["&.".concat(badgeClasses.invisible)]: {
          transform: "scale(0) translate(-50%, -50%)"
        }
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.anchorOrigin.vertical === "bottom" && ownerState.anchorOrigin.horizontal === "left" && ownerState.overlap === "rectangular",
      style: {
        bottom: 0,
        left: 0,
        transform: "scale(1) translate(-50%, 50%)",
        transformOrigin: "0% 100%",
        ["&.".concat(badgeClasses.invisible)]: {
          transform: "scale(0) translate(-50%, 50%)"
        }
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.anchorOrigin.vertical === "top" && ownerState.anchorOrigin.horizontal === "right" && ownerState.overlap === "circular",
      style: {
        top: "14%",
        right: "14%",
        transform: "scale(1) translate(50%, -50%)",
        transformOrigin: "100% 0%",
        ["&.".concat(badgeClasses.invisible)]: {
          transform: "scale(0) translate(50%, -50%)"
        }
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.anchorOrigin.vertical === "bottom" && ownerState.anchorOrigin.horizontal === "right" && ownerState.overlap === "circular",
      style: {
        bottom: "14%",
        right: "14%",
        transform: "scale(1) translate(50%, 50%)",
        transformOrigin: "100% 100%",
        ["&.".concat(badgeClasses.invisible)]: {
          transform: "scale(0) translate(50%, 50%)"
        }
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.anchorOrigin.vertical === "top" && ownerState.anchorOrigin.horizontal === "left" && ownerState.overlap === "circular",
      style: {
        top: "14%",
        left: "14%",
        transform: "scale(1) translate(-50%, -50%)",
        transformOrigin: "0% 0%",
        ["&.".concat(badgeClasses.invisible)]: {
          transform: "scale(0) translate(-50%, -50%)"
        }
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.anchorOrigin.vertical === "bottom" && ownerState.anchorOrigin.horizontal === "left" && ownerState.overlap === "circular",
      style: {
        bottom: "14%",
        left: "14%",
        transform: "scale(1) translate(-50%, 50%)",
        transformOrigin: "0% 100%",
        ["&.".concat(badgeClasses.invisible)]: {
          transform: "scale(0) translate(-50%, 50%)"
        }
      }
    }, {
      props: {
        invisible: true
      },
      style: {
        transition: theme.transitions.create("transform", {
          easing: theme.transitions.easing.easeInOut,
          duration: theme.transitions.duration.leavingScreen
        })
      }
    }]
  };
});
const Badge = /* @__PURE__ */ reactExports.forwardRef(function Badge2(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$badge, _slotProps$root, _slotProps$badge;
  const props = useDefaultProps({
    props: inProps,
    name: "MuiBadge"
  });
  const {
    anchorOrigin: anchorOriginProp = {
      vertical: "top",
      horizontal: "right"
    },
    className,
    component,
    components = {},
    componentsProps = {},
    children,
    overlap: overlapProp = "rectangular",
    color: colorProp = "default",
    invisible: invisibleProp = false,
    max: maxProp = 99,
    badgeContent: badgeContentProp,
    slots,
    slotProps,
    showZero = false,
    variant: variantProp = "standard"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const {
    badgeContent,
    invisible: invisibleFromHook,
    max,
    displayValue: displayValueFromHook
  } = useBadge({
    max: maxProp,
    invisible: invisibleProp,
    badgeContent: badgeContentProp,
    showZero
  });
  const prevProps = usePreviousProps({
    anchorOrigin: anchorOriginProp,
    color: colorProp,
    overlap: overlapProp,
    variant: variantProp,
    badgeContent: badgeContentProp
  });
  const invisible = invisibleFromHook || badgeContent == null && variantProp !== "dot";
  const {
    color = colorProp,
    overlap = overlapProp,
    anchorOrigin = anchorOriginProp,
    variant = variantProp
  } = invisible ? prevProps : props;
  const displayValue = variant !== "dot" ? displayValueFromHook : void 0;
  const ownerState = _extends({}, props, {
    badgeContent,
    invisible,
    max,
    displayValue,
    showZero,
    anchorOrigin,
    color,
    overlap,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  const RootSlot = (_ref = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : components.Root) != null ? _ref : BadgeRoot;
  const BadgeSlot = (_ref2 = (_slots$badge = slots == null ? void 0 : slots.badge) != null ? _slots$badge : components.Badge) != null ? _ref2 : BadgeBadge;
  const rootSlotProps = (_slotProps$root = slotProps == null ? void 0 : slotProps.root) != null ? _slotProps$root : componentsProps.root;
  const badgeSlotProps = (_slotProps$badge = slotProps == null ? void 0 : slotProps.badge) != null ? _slotProps$badge : componentsProps.badge;
  const rootProps = useSlotProps({
    elementType: RootSlot,
    externalSlotProps: rootSlotProps,
    externalForwardedProps: other,
    additionalProps: {
      ref,
      as: component
    },
    ownerState,
    className: clsx(rootSlotProps == null ? void 0 : rootSlotProps.className, classes.root, className)
  });
  const badgeProps = useSlotProps({
    elementType: BadgeSlot,
    externalSlotProps: badgeSlotProps,
    ownerState,
    className: clsx(classes.badge, badgeSlotProps == null ? void 0 : badgeSlotProps.className)
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(RootSlot, _extends({}, rootProps, {
    children: [children, /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeSlot, _extends({}, badgeProps, {
      children: displayValue
    }))]
  }));
});
const Add = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
}), "Add");
const CopyAll = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M18 2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H9V4h9zM3 15v-2h2v2zm0-5.5h2v2H3zM10 20h2v2h-2zm-7-1.5v-2h2v2zM5 22c-1.1 0-2-.9-2-2h2zm3.5 0h-2v-2h2zm5 0v-2h2c0 1.1-.9 2-2 2M5 6v2H3c0-1.1.9-2 2-2"
}), "CopyAll");
const Description = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm2 16H8v-2h8zm0-4H8v-2h8zm-3-5V3.5L18.5 9z"
}), "Description");
const Stop = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M6 6h12v12H6z"
}), "Stop");
const mainContainer = "_mainContainer_1kl2v_1";
const newSurveysButton = "_newSurveysButton_1kl2v_8";
const content = "_content_1kl2v_13";
const loadingWrapper = "_loadingWrapper_1kl2v_20";
const allButton = "_allButton_1kl2v_27";
const surveyCardsContainer = "_surveyCardsContainer_1kl2v_43";
const noSurveys = "_noSurveys_1kl2v_51";
const styles$3 = {
  mainContainer,
  newSurveysButton,
  content,
  loadingWrapper,
  allButton,
  surveyCardsContainer,
  noSurveys
};
var Article = {};
var _interopRequireDefault$2 = interopRequireDefaultExports;
Object.defineProperty(Article, "__esModule", {
  value: true
});
var default_1$2 = Article.default = void 0;
var _createSvgIcon$2 = _interopRequireDefault$2(requireCreateSvgIcon());
var _jsxRuntime$2 = jsxRuntimeExports;
default_1$2 = Article.default = (0, _createSvgIcon$2.default)(/* @__PURE__ */ (0, _jsxRuntime$2.jsx)("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"
}), "Article");
const surveyHeader = "_surveyHeader_966ma_1";
const contentCard = "_contentCard_966ma_7";
const actionBtn = "_actionBtn_966ma_11";
const card = "_card_966ma_17";
const cardContent = "_cardContent_966ma_22";
const imageContainer = "_imageContainer_966ma_28";
const surveyContent = "_surveyContent_966ma_35";
const surveyTitle = "_surveyTitle_966ma_43";
const surveyStatus = "_surveyStatus_966ma_48";
const badge = "_badge_966ma_55";
const textTransform = "_textTransform_966ma_61";
const surveyResponse = "_surveyResponse_966ma_65";
const surveyActions = "_surveyActions_966ma_72";
const iconButton = "_iconButton_966ma_82";
const logo = "_logo_966ma_126";
const logoImageWrapper = "_logoImageWrapper_966ma_139";
const imageOverlay = "_imageOverlay_966ma_143";
const cameraIconWrapper = "_cameraIconWrapper_966ma_155";
const cameraIcon = "_cameraIcon_966ma_155";
const relativeContainer = "_relativeContainer_966ma_182";
const absoluteOverlay = "_absoluteOverlay_966ma_187";
const container = "_container_966ma_200";
const truncatedText = "_truncatedText_966ma_206";
const exampleTruncatedText = "_exampleTruncatedText_966ma_220";
const titleContainer = "_titleContainer_966ma_235";
const surveyLink = "_surveyLink_966ma_243";
const nameIcon = "_nameIcon_966ma_248";
const descriptionContainer = "_descriptionContainer_966ma_259";
const descriptionIcon = "_descriptionIcon_966ma_272";
const photoIcon = "_photoIcon_966ma_281";
const highlight = "_highlight_966ma_294";
const fadeHighlight = "_fadeHighlight_966ma_1";
const styles$2 = {
  surveyHeader,
  contentCard,
  actionBtn,
  card,
  cardContent,
  imageContainer,
  surveyContent,
  surveyTitle,
  surveyStatus,
  badge,
  textTransform,
  surveyResponse,
  surveyActions,
  iconButton,
  logo,
  logoImageWrapper,
  imageOverlay,
  cameraIconWrapper,
  cameraIcon,
  relativeContainer,
  absoluteOverlay,
  container,
  truncatedText,
  exampleTruncatedText,
  titleContainer,
  surveyLink,
  nameIcon,
  descriptionContainer,
  descriptionIcon,
  photoIcon,
  highlight,
  fadeHighlight
};
function fDate(date, newFormat) {
  const fm = "DD MMM YYYY";
  return date ? dayjs(date).format(fm) : "";
}
var FormatQuote = {};
var _interopRequireDefault$1 = interopRequireDefaultExports;
Object.defineProperty(FormatQuote, "__esModule", {
  value: true
});
var default_1$1 = FormatQuote.default = void 0;
var _createSvgIcon$1 = _interopRequireDefault$1(requireCreateSvgIcon());
var _jsxRuntime$1 = jsxRuntimeExports;
default_1$1 = FormatQuote.default = (0, _createSvgIcon$1.default)(/* @__PURE__ */ (0, _jsxRuntime$1.jsx)("path", {
  d: "M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"
}), "FormatQuote");
var Warning = {};
var _interopRequireDefault = interopRequireDefaultExports;
Object.defineProperty(Warning, "__esModule", {
  value: true
});
var default_1 = Warning.default = void 0;
var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
var _jsxRuntime = jsxRuntimeExports;
default_1 = Warning.default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
  d: "M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z"
}), "Warning");
const EditableSurveyTitle = ({ survey, onSave, isEditable = true }) => {
  const [isEditing, setIsEditing] = reactExports.useState(false);
  const [title, setTitle] = reactExports.useState(survey.name);
  const handleTitleChange = (event) => {
    const newTitle = event.target.value;
    if (newTitle.length <= 50) {
      setTitle(newTitle);
    }
  };
  const handleSave = () => {
    if (title.trim() === "") {
      setTitle(survey.name);
    } else if (title !== survey.name) {
      onSave(title, () => setTitle(survey.name));
    }
    setIsEditing(false);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSave();
    }
  };
  const handleEditClick = (event) => {
    event.stopPropagation();
    setIsEditing(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles$2.titleContainer, children: isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TextField,
      {
        sx: { px: 3, flexGrow: 1 },
        value: title,
        onChange: handleTitleChange,
        onKeyDown: handleKeyDown,
        autoFocus: true,
        variant: "standard",
        fullWidth: true,
        InputProps: {
          style: { color: "white" }
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IconButton,
      {
        className: styles$2.saveIcon,
        onClick: handleSave,
        sx: { ml: 1 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { sx: { color: "white" } })
      }
    )
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Typography,
      {
        variant: "h5",
        sx: {
          px: 3,
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: "2",
          WebkitBoxOrient: "vertical"
        },
        children: title
      }
    ),
    isEditable && /* @__PURE__ */ jsxRuntimeExports.jsx(
      IconButton,
      {
        className: styles$2.nameIcon,
        onClick: handleEditClick,
        sx: { ml: 1 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Edit, { sx: { color: "white" } })
      }
    )
  ] }) });
};
const EditableSurveyDescription = ({
  survey,
  onSave,
  isEditable = true,
  isExample
}) => {
  const [isDescriptionEditing, setIsDescriptionEditing] = reactExports.useState(false);
  const [description, setDescription] = reactExports.useState(survey.description);
  const charLimit = isExample ? 450 : 125;
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleSave = () => {
    if (description !== survey.description) {
      onSave(description, () => setDescription(survey.description));
    }
    setIsDescriptionEditing(false);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSave();
    }
  };
  const handleEditClick = (event) => {
    event.stopPropagation();
    setIsDescriptionEditing(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles$2.descriptionContainer, children: isDescriptionEditing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TextField,
      {
        sx: { px: 3 },
        value: description,
        onChange: handleDescriptionChange,
        onKeyDown: handleKeyDown,
        autoFocus: true,
        variant: "standard",
        fullWidth: true,
        multiline: true,
        rows: 3
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IconButton,
      {
        className: "".concat(styles$2.saveIcon),
        onClick: handleSave,
        sx: { ml: 1 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { sx: { color: "gray" } })
      }
    )
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    (description == null ? void 0 : description.length) > charLimit ? /* @__PURE__ */ jsxRuntimeExports.jsx(CustomTooltip, { title: description, showIcon: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Typography,
      {
        variant: "caption",
        sx: {
          px: 3,
          color: description ? "inherit" : "gray",
          flexGrow: 1
        },
        className: "".concat(isExample ? styles$2.exampleTruncatedText : styles$2.truncatedText),
        children: truncateWithEllipsis(description, charLimit) || "Click to add a description..."
      }
    ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      Typography,
      {
        variant: "caption",
        sx: {
          px: 3,
          color: description ? "inherit" : "gray",
          flexGrow: 1
        },
        className: "".concat(isExample ? styles$2.exampleTruncatedText : styles$2.truncatedText),
        children: truncateWithEllipsis(description, charLimit) || "Click to add a description..."
      }
    ),
    isEditable && /* @__PURE__ */ jsxRuntimeExports.jsx(
      IconButton,
      {
        className: "".concat(styles$2.descriptionIcon),
        onClick: handleEditClick,
        sx: { ml: 1 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Edit, { sx: { color: "gray" } })
      }
    )
  ] }) });
};
const STATUS = {
  DRAFT: "draft",
  CLOSED: "closed",
  ACTIVE: "active",
  EXPIRED: "expired",
  SCHEDULED: "scheduled"
};
const status = (survey) => {
  switch (survey.status) {
    case "draft":
      return STATUS.DRAFT;
    case "closed":
      return STATUS.CLOSED;
    case "active":
      if (survey.endDate && serverDateTimeToLocalDateTime(survey.endDate) < Date.now()) {
        return STATUS.EXPIRED;
      } else if (survey.startDate && serverDateTimeToLocalDateTime(survey.startDate) > Date.now()) {
        return STATUS.SCHEDULED;
      } else {
        return STATUS.ACTIVE;
      }
    default:
      return STATUS.DRAFT;
  }
};
const bgHeader = (status2) => {
  switch (status2) {
    case STATUS.DRAFT:
      return "#e9db3e";
    case STATUS.CLOSED:
      return "#d32f2f";
    case STATUS.EXPIRED:
      return "#9d4435";
    case STATUS.SCHEDULED:
      return "#607d8b";
    case STATUS.ACTIVE:
      return "#669834";
    default:
      return;
  }
};
const Survey = ({
  survey,
  example = false,
  highlight: highlight2,
  onClone,
  onDelete,
  onClose,
  onUpdateTitle,
  onUpdateDescription,
  onUpdateImage
}) => {
  const { t } = useTranslation("manage");
  const surveyStatus2 = status(survey);
  const surveyService = useService("survey");
  const designService = useService("design");
  const [openSnackbar, setOpenSnackbar] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const handleChangeTitle = (newTitle, revertTitle) => {
    dispatch(setLoading(true));
    surveyService.putSurvey({ ...survey, name: newTitle }, survey.id).then(() => {
      onUpdateTitle(survey.id, newTitle);
    }).catch((processedError) => {
      if (processedError.name == PROCESSED_ERRORS.DUPLICATE_SURVEY_NAME.name) {
        setError(t("processed_errors.".concat(processedError.name)));
        setOpenSnackbar(true);
        revertTitle();
      }
    }).finally(() => {
      dispatch(setLoading(false));
    });
  };
  const handleChangeDescription = (newDescription) => {
    dispatch(setLoading(true));
    surveyService.putSurvey({ ...survey, description: newDescription }, survey.id).then(() => {
      onUpdateDescription(survey.id, newDescription);
    }).catch((processedError) => {
    }).finally(() => {
      dispatch(setLoading(false));
    });
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  const handleImageUpload = (event) => {
    const image = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      designService.uploadResource(image, survey.id).then((response) => {
        surveyService.putSurvey({ image: response.name }, survey.id).then((result) => {
          onUpdateImage(survey.id, response.name);
        }).catch((err) => {
          setError(t("processed_errors.".concat(err.name)));
          setOpenSnackbar(true);
        }).finally(() => {
          dispatch(setLoading(false));
        });
      }).catch((err) => {
        setError(t("processed_errors.".concat(err.name)));
        setOpenSnackbar(true);
      }).finally(() => {
        dispatch(setLoading(false));
      });
    };
    reader.readAsDataURL(image);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SavingSurvey, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Snackbar,
      {
        open: openSnackbar,
        autoHideDuration: 6e3,
        onClose: handleCloseSnackbar,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { onClose: handleCloseSnackbar, severity: "error", children: error })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        sx: {
          "&:hover": {
            boxShadow: (theme2) => theme2.customShadows.z24
          }
        },
        className: "".concat(highlight2 ? styles$2.highlight : ""),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { sx: { pb: 0 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 0.5, sx: { mb: 1 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$2.relativeContainer, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles$2.absoluteOverlay, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  EditableSurveyTitle,
                  {
                    survey,
                    onSave: handleChangeTitle,
                    isEditable: isSurveyAdmin() && !example
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$2.logo, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "".concat(styles$2.logoImageWrapper), children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CardMedia,
                      {
                        component: "img",
                        image: survey.image ? buildResourceUrl(survey.image, survey.id, example) : "/qlarr.png",
                        height: "150"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles$2.imageOverlay }),
                    isSurveyAdmin() && !survey.example && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Box,
                      {
                        className: styles$2.photoIcon,
                        onClick: (e) => {
                          e.stopPropagation();
                          document.getElementById("imageInput-".concat(survey.id)).click();
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$3, { className: styles$2.cameraIcon })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "imageInput-".concat(survey.id),
                      type: "file",
                      accept: "image/*",
                      style: { display: "none" },
                      onChange: handleImageUpload
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                EditableSurveyDescription,
                {
                  survey,
                  isExample: example,
                  onSave: handleChangeDescription,
                  isEditable: isSurveyAdmin() && !example
                }
              ),
              !example && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Stack,
                  {
                    direction: "row",
                    alignItems: "center",
                    spacing: 0.5,
                    sx: { px: 3, typography: "body2", color: "text.secondary" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          style: {
                            backgroundColor: bgHeader(surveyStatus2)
                          },
                          className: styles$2.badge
                        }
                      ),
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Typography,
                        {
                          variant: "subtitle2",
                          className: styles$2.textTransform,
                          children: t("status.".concat(surveyStatus2))
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { px: 3, display: "flex", gap: 2, my: 0.5 }, children: [
                  !example && survey.status !== "closed" && survey.latestVersion.published === false && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CustomTooltip,
                    {
                      title: "Has unpublished changes",
                      showIcon: false,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1, { sx: { color: "text.secondary" } })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CustomTooltip,
                    {
                      showIcon: false,
                      title: "Complete Responses: ".concat(survey.completeResponseCount),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Badge,
                        {
                          badgeContent: survey.completeResponseCount,
                          color: "primary",
                          anchorOrigin: {
                            vertical: "top",
                            horizontal: "right"
                          },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$4, { sx: { color: "text.secondary" } })
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CustomTooltip,
                    {
                      showIcon: false,
                      title: survey.surveyQuota > 0 ? "Quota: ".concat(survey.surveyQuota) : "No Quota",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Badge,
                        {
                          badgeContent: survey.surveyQuota > 0 ? survey.surveyQuota : 0,
                          color: "primary",
                          anchorOrigin: {
                            vertical: "top",
                            horizontal: "right"
                          },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$1, { sx: { color: "text.secondary" } })
                        }
                      )
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", sx: { px: 3, color: "text.disabled" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: t("edit_survey.metadata.created") }),
              ":",
              " ",
              fDate(survey.creationDate)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", sx: { px: 3, color: "text.disabled" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: t("edit_survey.metadata.last_modified") }),
              ":",
              " ",
              fDate(survey.lastModified)
            ] }),
            !example && survey.startDate && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Typography,
              {
                variant: "caption",
                sx: { px: 3, color: "text.disabled" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: t("edit_survey.metadata.start_date") }),
                  ":",
                  " ",
                  fDate(survey.startDate)
                ]
              }
            ),
            !example && survey.endDate && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Typography,
              {
                variant: "caption",
                sx: { px: 3, color: "text.disabled" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: t("edit_survey.metadata.end_date") }),
                  ":",
                  " ",
                  fDate(survey.endDate)
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { sx: { borderStyle: "dashed", my: 1 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Stack,
            {
              sx: {
                p: 3,
                pt: 0,
                typography: "body2",
                color: "text.secondary",
                textTransform: "capitalize"
              },
              className: styles$2.surveyActions,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  IconButton,
                  {
                    className: styles$2.iconButton,
                    sx: {
                      backgroundColor: theme.palette.primary.main,
                      "&:hover": {
                        backgroundColor: theme.palette.primary.main
                      }
                    },
                    "aria-label": "redirect",
                    size: "large",
                    onClick: (e) => {
                      e.stopPropagation();
                      const targetUrl = survey.example ? "/guest/preview/".concat(survey.id) : "/design-survey/".concat(survey.id);
                      navigate(targetUrl);
                    },
                    children: !example ? /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$2, { sx: { color: "#fff" } }) : /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$5, { sx: { color: "#fff" } })
                  }
                ),
                isSurveyAdmin() && !example && survey.status === "active" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CustomTooltip,
                  {
                    showIcon: false,
                    title: t("edit_survey.close_title"),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      IconButton,
                      {
                        className: styles$2.iconButton,
                        "aria-label": "stop",
                        size: "large",
                        onClick: () => onClose(survey.id),
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stop, { color: "primary" })
                      }
                    )
                  }
                ),
                isSurveyAdmin() && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CustomTooltip,
                  {
                    showIcon: false,
                    title: t("edit_survey.clone_survey"),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      IconButton,
                      {
                        className: styles$2.iconButton,
                        "aria-label": "clone",
                        size: "large",
                        onClick: onClone,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$6, { color: "primary" })
                      }
                    )
                  }
                ),
                !example && survey.status !== STATUS.ACTIVE && /* @__PURE__ */ jsxRuntimeExports.jsx(CustomTooltip, { showIcon: false, title: t("action_btn.delete"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  IconButton,
                  {
                    className: styles$2.iconButton,
                    "aria-label": "delete",
                    size: "large",
                    onClick: () => onDelete(survey.id),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(default_1$7, { color: "primary" })
                  }
                ) })
              ]
            }
          )
        ]
      }
    )
  ] });
};
const HeaderContent = ({
  sort,
  filter,
  onFilterSelected,
  onSortSelected
}) => {
  const sort_options = [
    { value: "responses_desc", label: "survey_sort_options.responses_desc" },
    {
      value: "last_modified_desc",
      label: "survey_sort_options.last_modified_desc"
    }
  ];
  const filter_options = [
    { value: "all", label: "status.all" },
    { value: STATUS.ACTIVE, label: "status.".concat(STATUS.ACTIVE) },
    { value: STATUS.SCHEDULED, label: "status.".concat(STATUS.SCHEDULED) },
    { value: STATUS.DRAFT, label: "status.".concat(STATUS.DRAFT) },
    { value: STATUS.EXPIRED, label: "status.".concat(STATUS.EXPIRED) },
    { value: STATUS.CLOSED, label: "status.".concat(STATUS.CLOSED) }
  ];
  const { t } = useTranslation("manage");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box,
    {
      rowGap: 2.5,
      columnGap: 2,
      display: "grid",
      gridTemplateColumns: { xs: "repeat(1, 1fr)", md: "repeat(2, 1fr)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Typography,
          {
            variant: "h5",
            flex: "1",
            textTransform: "uppercase",
            fontWeight: "600",
            children: t("my_surveys")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Stack,
          {
            width: "100%",
            spacing: 2.5,
            direction: { xs: "column", md: "row" },
            alignItems: "center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                RHFSelect,
                {
                  onChange: onSortSelected,
                  native: true,
                  value: sort,
                  name: "Status",
                  label: t("label.sort_by"),
                  children: sort_options.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: option.value, children: t(option.label) }, option.value))
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                RHFSelect,
                {
                  onChange: onFilterSelected,
                  native: true,
                  value: filter,
                  name: "Status",
                  label: t("edit_survey.status"),
                  children: filter_options.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: option.value, children: t(option.label) }, option.value))
                }
              )
            ]
          }
        )
      ]
    }
  );
};
const exampleSurveysContainer = "_exampleSurveysContainer_apkeh_1";
const styles$1 = {
  exampleSurveysContainer
};
const ExampleSurveys = ({ onClone }) => {
  const { t } = useTranslation("manage");
  const [isFetching, setFetching] = reactExports.useState(false);
  const [exampleSurveys, setExampleSurveys] = reactExports.useState([]);
  const surveyService = useService("survey");
  reactExports.useEffect(() => {
    setFetching(true);
    surveyService.getGuestsSurveys().then((data) => {
      setFetching(false);
      if (data) {
        const updatedData = data.map((survey) => ({
          ...survey,
          example: true
        }));
        setExampleSurveys(updatedData);
      }
    }).catch((e) => {
      setFetching(false);
      processApiError(e);
    });
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Typography,
      {
        variant: "h5",
        marginBottom: 2,
        fontWeight: 600,
        textTransform: "uppercase",
        children: t("example_surveys")
      }
    ),
    !isFetching ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        className: styles$1.exampleSurveysContainer,
        sx: {
          mt: 3,
          columnGap: 4,
          display: "grid",
          rowGap: { xs: 4, md: 5 },
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)"
          }
        },
        children: exampleSurveys == null ? void 0 : exampleSurveys.map((survey) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Survey,
            {
              survey,
              onClone: () => onClone(survey),
              example: true
            },
            survey.id
          );
        })
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingDots, {})
  ] });
};
const createUserCard = "_createUserCard_zrfc2_1";
const formGroup = "_formGroup_zrfc2_9";
const rightContainer = "_rightContainer_zrfc2_16";
const createButton = "_createButton_zrfc2_24";
const surveyNameInput = "_surveyNameInput_zrfc2_39";
const selectInput = "_selectInput_zrfc2_55";
const errorText = "_errorText_zrfc2_63";
const styles = {
  createUserCard,
  formGroup,
  rightContainer,
  createButton,
  surveyNameInput,
  selectInput,
  errorText
};
const surveyMode_options = [
  { value: SURVEY_MODE.WEB, label: "mode.".concat(SURVEY_MODE.WEB) },
  { value: SURVEY_MODE.OFFLINE, label: "mode.".concat(SURVEY_MODE.OFFLINE) },
  { value: SURVEY_MODE.MIXED, label: "mode.".concat(SURVEY_MODE.MIXED) }
];
function CreateSurvey({ onSurveyCreated }) {
  const surveyService = useService("survey");
  const { t } = useTranslation("manage");
  const dispatch = useDispatch();
  const defaultValues = {
    surveyName: "",
    surveyMode: SURVEY_MODE.MIXED,
    surveyActiveFrom: "",
    surveyActiveTo: ""
  };
  const CreateSurveySchema = create$3().shape({
    surveyName: create$6().required(t("survey_required")).max(50, t("survey_too_long"))
  });
  const methods = useForm({
    resolver: o(CreateSurveySchema),
    defaultValues
  });
  const {
    setError,
    reset,
    handleSubmit,
    formState: { isSubmitting }
  } = methods;
  const onSubmit = handleSubmit(async (data) => {
    dispatch(setLoading(true));
    const model = {
      name: data.surveyName,
      usage: data.surveyMode
    };
    if (data.surveyActiveFrom) {
      model.startDate = localDateToServerDateTime(surveyActiveFrom);
    }
    if (data.surveyActiveTo) {
      model.endDate = localDateToServerDateTime(surveyActiveTo);
    }
    surveyService.createSurvey(model).then(() => {
      if (onSurveyCreated) {
        onSurveyCreated(model);
        reset();
      }
    }).catch((processedError) => {
      if (processedError.name == PROCESSED_ERRORS.DUPLICATE_SURVEY_NAME.name) {
        setError("surveyName", {
          type: "manual",
          message: t("processed_errors.".concat(processedError.name))
        });
      } else if (processedError.name == PROCESSED_ERRORS.INVALID_SURVEY_DATES.name) {
        setError("surveyActiveFrom", {
          type: "manual",
          message: t("processed_errors.".concat(processedError.name))
        });
      }
    }).finally(() => {
      dispatch(setLoading(false));
    });
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: styles.createUserCard, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormProvider, { methods, onSubmit, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box,
    {
      rowGap: 2.5,
      columnGap: 2,
      display: "grid",
      gridTemplateColumns: { xs: "repeat(1, 1fr)", md: "repeat(3, 1fr)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RHFTextField, { name: "surveyName", label: t("label.survey_name") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(RHFSelect, { name: "surveyMode", label: t("label.survey_mode"), children: surveyMode_options.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: option.value, children: t(option.label) }, option.value)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          LoadingButton,
          {
            fullWidth: true,
            size: "large",
            color: "primary",
            type: "submit",
            variant: "contained",
            loading: isSubmitting,
            children: t("action_btn.create")
          }
        )
      ]
    }
  ) }) });
}
function Dashboard() {
  var _a, _b, _c, _d;
  const surveyService = useService("survey");
  const [surveys, setSurveys] = reactExports.useState(null);
  const [fetchingSurveys, setFetchingSurveys] = reactExports.useState(true);
  const [page, setPage] = reactExports.useState(1);
  const [perPage, setPerPage] = reactExports.useState(5);
  const [status2, setStatus] = reactExports.useState("all");
  const [sortBy, setSortBy] = reactExports.useState("last_modified_desc");
  const [openCloneModal, setOpenCloneModal] = reactExports.useState(false);
  const [cloningSurvey, setCloningSurvey] = reactExports.useState();
  const [recentlyUpdatedSurveyName, setRecentlyUpdatedSurveyName] = reactExports.useState(null);
  const dispatch = useDispatch();
  const { t } = useTranslation("manage");
  const processApirror = (e) => {
    setFetchingSurveys(false);
  };
  const fetchSurveys = () => {
    surveyService.getAllSurveys(page, perPage, status2, sortBy).then((data) => {
      if (data) {
        setFetchingSurveys(false);
        setSurveys(data);
        setCreateSurveyOpen(false);
        setTemplateSliderOpen(false);
      }
    }).catch((e) => processApirror());
  };
  reactExports.useEffect(() => {
    fetchSurveys();
  }, [page, perPage, sortBy, status2]);
  const handleSurveyStatusChange = (id, newStatus) => {
    setSurveys((prevState) => ({
      ...prevState,
      surveys: prevState.surveys.map(
        (survey) => survey.id === id ? { ...survey, status: newStatus } : survey
      )
    }));
  };
  const shouldShowClickAdd = () => {
    const roles = TokenService.getUser().roles;
    if (roles.indexOf(ROLES.SUPER_ADMIN) > -1 || roles.indexOf(ROLES.SURVEY_ADMIN) > -1) {
      return true;
    }
    return false;
  };
  const [description, setDescription] = reactExports.useState("");
  const [actionType, setActionType] = reactExports.useState("");
  const [selectedSurvey, setSelectedSurvey] = reactExports.useState(null);
  const [open, setOpen] = reactExports.useState(false);
  const [title, setTitle] = reactExports.useState(t("action_btn.delete"));
  const [isCreateSurveyOpen, setCreateSurveyOpen] = reactExports.useState(false);
  const [isTemplateSliderOpen, setTemplateSliderOpen] = reactExports.useState(false);
  const [importSurvey, setImportSurvey] = reactExports.useState(false);
  const handleButtonClick = () => {
    setCreateSurveyOpen(true);
  };
  const handleTemplateButtonClick = () => {
    setTemplateSliderOpen(true);
  };
  const handleImportSurveyClick = () => {
    setImportSurvey(true);
    setOpenCloneModal(true);
  };
  const handleCloseClick = () => {
    setCreateSurveyOpen(false);
  };
  const handleTemplateCloseClick = () => {
    setTemplateSliderOpen(false);
  };
  const onDelete = (survey) => {
    setActionType("delete");
    setTitle(t("action_btn.delete"));
    setSelectedSurvey(survey);
    setDescription(
      t("edit_survey.delete_survey", { survey_name: survey.name })
    );
    setOpen(true);
  };
  const onCloseSurvey = (survey) => {
    setActionType("close");
    setTitle(t("action_btn.close"));
    setSelectedSurvey(survey);
    setDescription(t("edit_survey.close_survey", { survey_name: survey.name }));
    setOpen(true);
  };
  const handleAction = () => {
    if (actionType === "delete") {
      deleteSurvey(selectedSurvey.id);
      setOpen(false);
    } else if (actionType === "close") {
      closeSurvey(selectedSurvey.id);
      setOpen(false);
    }
  };
  const onClone = (survey) => {
    setCloningSurvey(survey);
    setOpenCloneModal(true);
  };
  const deleteSurvey = (id) => {
    dispatch(setLoading(true));
    surveyService.deleteSurvey(id).then(() => {
      fetchSurveys();
    }).catch((e) => {
      dispatch(setLoading(false));
    }).finally(() => {
      dispatch(setLoading(false));
    });
  };
  const closeSurvey = (id) => {
    dispatch(setLoading(true));
    surveyService.closeSurvey(id).then((data) => {
      handleSurveyStatusChange(id, "closed");
    }).catch((processedError) => {
      if (processedError.name == PROCESSED_ERRORS.INVALID_SURVEY_DATES.name) {
        setSurveyDateError(t("processed_errors.".concat(processed.name)));
      }
    }).finally(() => {
      dispatch(setLoading(false));
    });
  };
  const handleUpdateSurveyName = (surveyId, newName) => {
    setSurveys((prevSurveys) => {
      const updatedSurveys = prevSurveys.surveys.map(
        (survey) => survey.id === surveyId ? { ...survey, name: newName } : survey
      );
      return {
        ...prevSurveys,
        surveys: updatedSurveys
      };
    });
  };
  const handleUpdateSurveyDescription = (surveyId, newDescription) => {
    setSurveys((prevSurveys) => {
      const updatedSurveys = prevSurveys.surveys.map(
        (survey) => survey.id === surveyId ? { ...survey, description: newDescription } : survey
      );
      return {
        ...prevSurveys,
        surveys: updatedSurveys
      };
    });
  };
  const handleUpdateSurveyImage = (surveyId, newImage) => {
    setSurveys((prevSurveys) => {
      const updatedSurveys = prevSurveys.surveys.map(
        (survey) => survey.id === surveyId ? { ...survey, image: newImage } : survey
      );
      return {
        ...prevSurveys,
        surveys: updatedSurveys
      };
    });
  };
  const isRtl = getDirFromSession();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$3.mainContainer, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { sx: { marginBottom: "48px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: styles$3.content, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Stack,
        {
          className: styles$3.newSurveysButton,
          direction: "row",
          spacing: 2,
          children: [
            shouldShowClickAdd() && !isCreateSurveyOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "contained",
                color: "primary",
                startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Add, {}),
                onClick: handleButtonClick,
                children: t("create_new_survey")
              }
            ),
            shouldShowClickAdd() && !isTemplateSliderOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "contained",
                color: "primary",
                startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(CopyAll, {}),
                onClick: handleTemplateButtonClick,
                children: t("copy_example_surveys")
              }
            ),
            shouldShowClickAdd() && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "contained",
                color: "primary",
                startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileUpload, {}),
                onClick: handleImportSurveyClick,
                children: t("import_survey")
              }
            )
          ]
        }
      ),
      isCreateSurveyOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(Fade, { in: isCreateSurveyOpen, timeout: 300, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          IconButton,
          {
            onClick: handleCloseClick,
            "aria-label": "close",
            style: {
              position: "absolute",
              top: 0,
              ...isRtl === "ltr" ? { right: 0 } : { left: 0 },
              color: "black",
              zIndex: 1
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Close, { color: "#000" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CreateSurvey,
          {
            onSurveyCreated: (newSurvey) => {
              fetchSurveys();
              setRecentlyUpdatedSurveyName(newSurvey.name);
              setTimeout(() => setRecentlyUpdatedSurveyName(null), 3e3);
            }
          }
        )
      ] }) }),
      isTemplateSliderOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(Fade, { in: isTemplateSliderOpen, timeout: 300, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          IconButton,
          {
            onClick: handleTemplateCloseClick,
            "aria-label": "close",
            style: {
              position: "absolute",
              top: 0,
              ...isRtl === "ltr" ? { right: 0 } : { left: 0 },
              color: "black",
              zIndex: 1
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Close, { color: "#000" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ExampleSurveys, { onClone: (survey) => onClone(survey) })
      ] }) }),
      ((_a = surveys == null ? void 0 : surveys.surveys) == null ? void 0 : _a.length) > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        HeaderContent,
        {
          filter: status2,
          onFilterSelected: (el) => {
            setPage(1);
            setStatus(el.target.value);
          },
          sort: sortBy,
          onSortSelected: (el) => {
            setPage(1);
            setSortBy(el.target.value);
          }
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: styles$3.surveyCardsContainer, children: !fetchingSurveys ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: ((_b = surveys == null ? void 0 : surveys.surveys) == null ? void 0 : _b.length) > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box,
        {
          sx: {
            mt: 3,
            columnGap: 2,
            display: "grid",
            rowGap: { xs: 4, md: 5 },
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(auto-fit, minmax(280px, 1fr))",
              md: "repeat(auto-fit, minmax(330px, 350px))"
            }
          },
          children: (_c = surveys == null ? void 0 : surveys.surveys) == null ? void 0 : _c.map((survey) => {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Survey,
              {
                survey,
                highlight: survey.name === recentlyUpdatedSurveyName,
                onStatusChange: handleSurveyStatusChange,
                onClone: () => onClone(survey),
                onDelete: () => onDelete(survey),
                onClose: () => onCloseSurvey(survey),
                onUpdateTitle: handleUpdateSurveyName,
                onUpdateDescription: handleUpdateSurveyDescription,
                onUpdateImage: handleUpdateSurveyImage
              },
              survey.id
            );
          })
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$3.noSurveys, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Description, { sx: { fontSize: 48, color: "#ccc" } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Typography,
          {
            variant: "h6",
            color: "textSecondary",
            sx: { mt: 2 },
            children: [
              t("create_survey.empty_state_message"),
              !isTemplateSliderOpen && !isCreateSurveyOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "contained",
                    color: "primary",
                    sx: { mx: 1 },
                    startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Add, {}),
                    onClick: handleButtonClick,
                    children: t("create_new_survey")
                  }
                ),
                t("create_survey.or"),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "contained",
                    color: "primary",
                    sx: { mx: 1 },
                    startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(CopyAll, {}),
                    onClick: handleTemplateButtonClick,
                    children: [
                      t("copy_example_surveys"),
                      t("create_survey.empty_state_cta_copy")
                    ]
                  }
                )
              ] })
            ]
          }
        )
      ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingDots, {}) }),
      ((_d = surveys == null ? void 0 : surveys.surveys) == null ? void 0 : _d.length) > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        TablePagination,
        {
          rowsPerPageOptions: [5, 10, 20, 50],
          component: "div",
          labelDisplayedRows: ({ from, to, count, page: page2 }) => {
            return t("responses.label_displayed_rows", { from, to, count });
          },
          labelRowsPerPage: t("responses.label_surveys_per_page"),
          count: surveys == null ? void 0 : surveys.totalCount,
          rowsPerPage: perPage,
          page: page - 1,
          onPageChange: (event, newPage) => {
            setPage(newPage + 1);
          },
          onRowsPerPageChange: (event) => {
            setPerPage(parseInt(event.target.value, 10));
            setPage(1);
          }
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {})
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SurveyClone,
      {
        importSurvey,
        open: openCloneModal,
        onClose: (cloned) => {
          setOpenCloneModal(false);
          setImportSurvey(false);
          if (cloned) {
            fetchSurveys();
          }
        },
        onSurveyCloned: (name) => {
          setRecentlyUpdatedSurveyName(name);
          setTimeout(() => setRecentlyUpdatedSurveyName(null), 3e3);
        },
        survey: cloningSurvey
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DeleteModal,
      {
        open,
        description,
        handleClose: () => setOpen(false),
        handleDelete: handleAction,
        title
      }
    )
  ] });
}
export {
  Dashboard as default
};
//# sourceMappingURL=index-CsEUyNpt.js.map
