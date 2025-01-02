import { _ as _extends, f as generateUtilityClasses, g as generateUtilityClass, b as _objectWithoutPropertiesLoose, j as jsxRuntimeExports, r as reactExports } from "./index-X8N9IRh7.js";
import { u as useThemeProps, a as useUtils, b as useLocaleText, C as Clock, p as parsePickerInputValue, P as PickersToolbar, c as pickersToolbarClasses, d as PickersToolbarText, e as useMeridiemMode, f as arrayIncludes, g as PickersToolbarButton, h as useTimeValidation, i as usePickerState, j as DesktopWrapper, K as KeyboardDateInput, k as CalendarOrClockPicker, M as MobileWrapper, l as PureDateInput, m as useDefaultDates, n as parseNonNullablePickerDate, o as useDateValidation } from "./DateTimePicker-CDB7ps45.js";
import { u as useMediaQuery } from "./Tabs-CLdH6uZ6.js";
import { f as styled, w as useTheme, c as composeClasses, T as Typography } from "./use-service-CuBoVPEx.js";
function useTimePickerDefaultizedProps(props, name) {
  var _themeProps$ampm;
  const themeProps = useThemeProps({
    props,
    name
  });
  const utils = useUtils();
  const ampm = (_themeProps$ampm = themeProps.ampm) != null ? _themeProps$ampm : utils.is12HourCycleInCurrentLocale();
  const localeText = useLocaleText();
  const getOpenDialogAriaText = localeText.openTimePickerDialogue;
  return _extends({
    ampm,
    openTo: "hours",
    views: ["hours", "minutes"],
    acceptRegex: ampm ? /[\dapAP]/gi : /\d/gi,
    disableMaskedInput: false,
    getOpenDialogAriaText,
    inputFormat: ampm ? utils.formats.fullTime12h : utils.formats.fullTime24h
  }, themeProps, {
    components: _extends({
      OpenPickerIcon: Clock
    }, themeProps.components)
  });
}
const timePickerValueManager = {
  emptyValue: null,
  parseInput: parsePickerInputValue,
  getTodayValue: (utils) => utils.date(),
  areValuesEqual: (utils, a, b) => utils.isEqual(a, b),
  valueReducer: (utils, lastValidValue, newValue) => {
    if (!lastValidValue || !utils.isValid(newValue)) {
      return newValue;
    }
    return utils.mergeDateAndTime(lastValidValue, newValue);
  }
};
function getTimePickerToolbarUtilityClass(slot) {
  return generateUtilityClass("MuiTimePickerToolbar", slot);
}
const timePickerToolbarClasses = generateUtilityClasses("MuiTimePickerToolbar", ["root", "separator", "hourMinuteLabel", "hourMinuteLabelLandscape", "hourMinuteLabelReverse", "ampmSelection", "ampmLandscape", "ampmLabel"]);
const _excluded$7 = ["ampm", "ampmInClock", "parsedValue", "isLandscape", "isMobileKeyboardViewOpen", "onChange", "openView", "setOpenView", "toggleMobileKeyboardView", "toolbarTitle", "views", "disabled", "readOnly"];
const useUtilityClasses$1 = (ownerState) => {
  const {
    theme,
    isLandscape,
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    separator: ["separator"],
    hourMinuteLabel: ["hourMinuteLabel", isLandscape && "hourMinuteLabelLandscape", theme.direction === "rtl" && "hourMinuteLabelReverse"],
    ampmSelection: ["ampmSelection", isLandscape && "ampmLandscape"],
    ampmLabel: ["ampmLabel"]
  };
  return composeClasses(slots, getTimePickerToolbarUtilityClass, classes);
};
const TimePickerToolbarRoot = styled(PickersToolbar, {
  name: "MuiTimePickerToolbar",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  ["& .".concat(pickersToolbarClasses.penIconButtonLandscape)]: {
    marginTop: "auto"
  }
});
const TimePickerToolbarSeparator = styled(PickersToolbarText, {
  name: "MuiTimePickerToolbar",
  slot: "Separator",
  overridesResolver: (props, styles) => styles.separator
})({
  outline: 0,
  margin: "0 4px 0 2px",
  cursor: "default"
});
const TimePickerToolbarHourMinuteLabel = styled("div", {
  name: "MuiTimePickerToolbar",
  slot: "HourMinuteLabel",
  overridesResolver: (props, styles) => [{
    ["&.".concat(timePickerToolbarClasses.hourMinuteLabelLandscape)]: styles.hourMinuteLabelLandscape,
    ["&.".concat(timePickerToolbarClasses.hourMinuteLabelReverse)]: styles.hourMinuteLabelReverse
  }, styles.hourMinuteLabel]
})(({
  theme,
  ownerState
}) => _extends({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end"
}, ownerState.isLandscape && {
  marginTop: "auto"
}, theme.direction === "rtl" && {
  flexDirection: "row-reverse"
}));
const TimePickerToolbarAmPmSelection = styled("div", {
  name: "MuiTimePickerToolbar",
  slot: "AmPmSelection",
  overridesResolver: (props, styles) => [{
    [".".concat(timePickerToolbarClasses.ampmLabel)]: styles.ampmLabel
  }, {
    ["&.".concat(timePickerToolbarClasses.ampmLandscape)]: styles.ampmLandscape
  }, styles.ampmSelection]
})(({
  ownerState
}) => _extends({
  display: "flex",
  flexDirection: "column",
  marginRight: "auto",
  marginLeft: 12
}, ownerState.isLandscape && {
  margin: "4px 0 auto",
  flexDirection: "row",
  justifyContent: "space-around",
  flexBasis: "100%"
}, {
  ["& .".concat(timePickerToolbarClasses.ampmLabel)]: {
    fontSize: 17
  }
}));
function TimePickerToolbar(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimePickerToolbar"
  });
  const {
    ampm,
    ampmInClock,
    parsedValue,
    isLandscape,
    isMobileKeyboardViewOpen,
    onChange,
    openView,
    setOpenView,
    toggleMobileKeyboardView,
    toolbarTitle: toolbarTitleProp,
    views,
    disabled,
    readOnly
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$7);
  const utils = useUtils();
  const localeText = useLocaleText();
  const toolbarTitle = toolbarTitleProp != null ? toolbarTitleProp : localeText.timePickerDefaultToolbarTitle;
  const theme = useTheme();
  const showAmPmControl = Boolean(ampm && !ampmInClock);
  const {
    meridiemMode,
    handleMeridiemChange
  } = useMeridiemMode(parsedValue, ampm, onChange);
  const formatHours = (time) => ampm ? utils.format(time, "hours12h") : utils.format(time, "hours24h");
  const ownerState = props;
  const classes = useUtilityClasses$1(_extends({}, ownerState, {
    theme
  }));
  const separator = /* @__PURE__ */ jsxRuntimeExports.jsx(TimePickerToolbarSeparator, {
    tabIndex: -1,
    value: ":",
    variant: "h3",
    selected: false,
    className: classes.separator
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(TimePickerToolbarRoot, _extends({
    viewType: "clock",
    landscapeDirection: "row",
    toolbarTitle,
    isLandscape,
    isMobileKeyboardViewOpen,
    toggleMobileKeyboardView,
    ownerState,
    className: classes.root
  }, other, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsxs(TimePickerToolbarHourMinuteLabel, {
      className: classes.hourMinuteLabel,
      ownerState,
      children: [arrayIncludes(views, "hours") && /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButton, {
        tabIndex: -1,
        variant: "h3",
        onClick: () => setOpenView("hours"),
        selected: openView === "hours",
        value: parsedValue ? formatHours(parsedValue) : "--"
      }), arrayIncludes(views, ["hours", "minutes"]) && separator, arrayIncludes(views, "minutes") && /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButton, {
        tabIndex: -1,
        variant: "h3",
        onClick: () => setOpenView("minutes"),
        selected: openView === "minutes",
        value: parsedValue ? utils.format(parsedValue, "minutes") : "--"
      }), arrayIncludes(views, ["minutes", "seconds"]) && separator, arrayIncludes(views, "seconds") && /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButton, {
        variant: "h3",
        onClick: () => setOpenView("seconds"),
        selected: openView === "seconds",
        value: parsedValue ? utils.format(parsedValue, "seconds") : "--"
      })]
    }), showAmPmControl && /* @__PURE__ */ jsxRuntimeExports.jsxs(TimePickerToolbarAmPmSelection, {
      className: classes.ampmSelection,
      ownerState,
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButton, {
        disableRipple: true,
        variant: "subtitle2",
        selected: meridiemMode === "am",
        typographyClassName: classes.ampmLabel,
        value: utils.getMeridiemText("am"),
        onClick: readOnly ? void 0 : () => handleMeridiemChange("am"),
        disabled
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(PickersToolbarButton, {
        disableRipple: true,
        variant: "subtitle2",
        selected: meridiemMode === "pm",
        typographyClassName: classes.ampmLabel,
        value: utils.getMeridiemText("pm"),
        onClick: readOnly ? void 0 : () => handleMeridiemChange("pm"),
        disabled
      })]
    })]
  }));
}
const _excluded$6 = ["onChange", "PaperProps", "PopperProps", "ToolbarComponent", "TransitionComponent", "value", "components", "componentsProps"];
const DesktopTimePicker = /* @__PURE__ */ reactExports.forwardRef(function DesktopTimePicker2(inProps, ref) {
  const props = useTimePickerDefaultizedProps(inProps, "MuiDesktopTimePicker");
  const validationError = useTimeValidation(props) !== null;
  const {
    pickerProps,
    inputProps,
    wrapperProps
  } = usePickerState(props, timePickerValueManager);
  const {
    PaperProps,
    PopperProps,
    ToolbarComponent = TimePickerToolbar,
    TransitionComponent,
    components,
    componentsProps
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$6);
  const DateInputProps = _extends({}, inputProps, other, {
    components,
    componentsProps,
    ref,
    validationError
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DesktopWrapper, _extends({}, wrapperProps, {
    DateInputProps,
    KeyboardDateInputComponent: KeyboardDateInput,
    PopperProps,
    PaperProps,
    TransitionComponent,
    components,
    componentsProps,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarOrClockPicker, _extends({}, pickerProps, {
      autoFocus: true,
      toolbarTitle: props.label || props.toolbarTitle,
      ToolbarComponent,
      DateInputProps,
      components,
      componentsProps
    }, other))
  }));
});
const _excluded$5 = ["ToolbarComponent", "value", "onChange", "components", "componentsProps"];
const MobileTimePicker = /* @__PURE__ */ reactExports.forwardRef(function MobileTimePicker2(inProps, ref) {
  const props = useTimePickerDefaultizedProps(inProps, "MuiMobileTimePicker");
  const validationError = useTimeValidation(props) !== null;
  const {
    pickerProps,
    inputProps,
    wrapperProps
  } = usePickerState(props, timePickerValueManager);
  const {
    ToolbarComponent = TimePickerToolbar,
    components,
    componentsProps
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$5);
  const DateInputProps = _extends({}, inputProps, other, {
    components,
    componentsProps,
    ref,
    validationError
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MobileWrapper, _extends({}, other, wrapperProps, {
    DateInputProps,
    PureDateInputComponent: PureDateInput,
    components,
    componentsProps,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarOrClockPicker, _extends({}, pickerProps, {
      autoFocus: true,
      toolbarTitle: props.label || props.toolbarTitle,
      ToolbarComponent,
      DateInputProps,
      components,
      componentsProps
    }, other))
  }));
});
const _excluded$4 = ["desktopModeMediaQuery", "DialogProps", "PopperProps", "TransitionComponent"];
const TimePicker = /* @__PURE__ */ reactExports.forwardRef(function TimePicker2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimePicker"
  });
  const {
    desktopModeMediaQuery = "@media (pointer: fine)",
    DialogProps,
    PopperProps,
    TransitionComponent
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$4);
  const isDesktop = useMediaQuery(desktopModeMediaQuery, {
    defaultMatches: true
  });
  if (isDesktop) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DesktopTimePicker, _extends({
      ref,
      PopperProps,
      TransitionComponent
    }, other));
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MobileTimePicker, _extends({
    ref,
    DialogProps
  }, other));
});
const isYearOnlyView = (views) => views.length === 1 && views[0] === "year";
const isYearAndMonthViews = (views) => views.length === 2 && views.indexOf("month") !== -1 && views.indexOf("year") !== -1;
const getFormatAndMaskByViews = (views, utils) => {
  if (isYearOnlyView(views)) {
    return {
      inputFormat: utils.formats.year
    };
  }
  if (isYearAndMonthViews(views)) {
    return {
      disableMaskedInput: true,
      inputFormat: utils.formats.monthAndYear
    };
  }
  return {
    inputFormat: utils.formats.keyboardDate
  };
};
function useDatePickerDefaultizedProps(props, name) {
  var _themeProps$views;
  const utils = useUtils();
  const defaultDates = useDefaultDates();
  const themeProps = useThemeProps({
    props,
    name
  });
  const views = (_themeProps$views = themeProps.views) != null ? _themeProps$views : ["year", "day"];
  return _extends({
    openTo: "day",
    disableFuture: false,
    disablePast: false
  }, getFormatAndMaskByViews(views, utils), themeProps, {
    views,
    minDate: parseNonNullablePickerDate(utils, themeProps.minDate, defaultDates.minDate),
    maxDate: parseNonNullablePickerDate(utils, themeProps.maxDate, defaultDates.maxDate)
  });
}
const datePickerValueManager = {
  emptyValue: null,
  getTodayValue: (utils) => utils.date(),
  parseInput: parsePickerInputValue,
  areValuesEqual: (utils, a, b) => utils.isEqual(a, b)
};
function getDatePickerToolbarUtilityClass(slot) {
  return generateUtilityClass("MuiDatePickerToolbar", slot);
}
generateUtilityClasses("MuiDatePickerToolbar", ["root", "title"]);
const _excluded$3 = ["parsedValue", "isLandscape", "isMobileKeyboardViewOpen", "onChange", "toggleMobileKeyboardView", "toolbarFormat", "toolbarPlaceholder", "toolbarTitle", "views"];
const useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    title: ["title"]
  };
  return composeClasses(slots, getDatePickerToolbarUtilityClass, classes);
};
const DatePickerToolbarRoot = styled(PickersToolbar, {
  name: "MuiDatePickerToolbar",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})({});
const DatePickerToolbarTitle = styled(Typography, {
  name: "MuiDatePickerToolbar",
  slot: "Title",
  overridesResolver: (_, styles) => styles.title
})(({
  ownerState
}) => _extends({}, ownerState.isLandscape && {
  margin: "auto 16px auto auto"
}));
const DatePickerToolbar = /* @__PURE__ */ reactExports.forwardRef(function DatePickerToolbar2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDatePickerToolbar"
  });
  const {
    parsedValue,
    isLandscape,
    isMobileKeyboardViewOpen,
    toggleMobileKeyboardView,
    toolbarFormat,
    toolbarPlaceholder = "––",
    toolbarTitle: toolbarTitleProp,
    views
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$3);
  const utils = useUtils();
  const localeText = useLocaleText();
  const classes = useUtilityClasses(props);
  const toolbarTitle = toolbarTitleProp != null ? toolbarTitleProp : localeText.datePickerDefaultToolbarTitle;
  const dateText = reactExports.useMemo(() => {
    if (!parsedValue) {
      return toolbarPlaceholder;
    }
    if (toolbarFormat) {
      return utils.formatByString(parsedValue, toolbarFormat);
    }
    if (isYearOnlyView(views)) {
      return utils.format(parsedValue, "year");
    }
    if (isYearAndMonthViews(views)) {
      return utils.format(parsedValue, "month");
    }
    return /en/.test(utils.getCurrentLocaleCode()) ? utils.format(parsedValue, "normalDateWithWeekday") : utils.format(parsedValue, "normalDate");
  }, [parsedValue, toolbarFormat, toolbarPlaceholder, utils, views]);
  const ownerState = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DatePickerToolbarRoot, _extends({
    ref,
    toolbarTitle,
    isMobileKeyboardViewOpen,
    toggleMobileKeyboardView,
    isLandscape,
    className: classes.root
  }, other, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(DatePickerToolbarTitle, {
      variant: "h4",
      align: isLandscape ? "left" : "center",
      ownerState,
      className: classes.title,
      children: dateText
    })
  }));
});
const _excluded$2 = ["onChange", "PopperProps", "PaperProps", "ToolbarComponent", "TransitionComponent", "value", "components", "componentsProps"];
const DesktopDatePicker = /* @__PURE__ */ reactExports.forwardRef(function DesktopDatePicker2(inProps, ref) {
  const props = useDatePickerDefaultizedProps(inProps, "MuiDesktopDatePicker");
  const validationError = useDateValidation(props) !== null;
  const {
    pickerProps,
    inputProps,
    wrapperProps
  } = usePickerState(props, datePickerValueManager);
  const {
    PopperProps,
    PaperProps,
    ToolbarComponent = DatePickerToolbar,
    TransitionComponent,
    components,
    componentsProps
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$2);
  const AllDateInputProps = _extends({}, inputProps, other, {
    components,
    componentsProps,
    ref,
    validationError
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DesktopWrapper, _extends({}, wrapperProps, {
    DateInputProps: AllDateInputProps,
    KeyboardDateInputComponent: KeyboardDateInput,
    PopperProps,
    PaperProps,
    TransitionComponent,
    components,
    componentsProps,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarOrClockPicker, _extends({}, pickerProps, {
      autoFocus: true,
      toolbarTitle: props.label || props.toolbarTitle,
      ToolbarComponent,
      DateInputProps: AllDateInputProps,
      components,
      componentsProps
    }, other))
  }));
});
const _excluded$1 = ["ToolbarComponent", "value", "onChange", "components", "componentsProps"];
const MobileDatePicker = /* @__PURE__ */ reactExports.forwardRef(function MobileDatePicker2(inProps, ref) {
  const props = useDatePickerDefaultizedProps(inProps, "MuiMobileDatePicker");
  const validationError = useDateValidation(props) !== null;
  const {
    pickerProps,
    inputProps,
    wrapperProps
  } = usePickerState(props, datePickerValueManager);
  const {
    ToolbarComponent = DatePickerToolbar,
    components,
    componentsProps
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$1);
  const DateInputProps = _extends({}, inputProps, other, {
    components,
    componentsProps,
    ref,
    validationError
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MobileWrapper, _extends({}, other, wrapperProps, {
    DateInputProps,
    PureDateInputComponent: PureDateInput,
    components,
    componentsProps,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarOrClockPicker, _extends({}, pickerProps, {
      autoFocus: true,
      toolbarTitle: props.label || props.toolbarTitle,
      ToolbarComponent,
      DateInputProps,
      components,
      componentsProps
    }, other))
  }));
});
const _excluded = ["desktopModeMediaQuery", "DialogProps", "PopperProps", "TransitionComponent"];
const DatePicker = /* @__PURE__ */ reactExports.forwardRef(function DatePicker2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDatePicker"
  });
  const {
    desktopModeMediaQuery = "@media (pointer: fine)",
    DialogProps,
    PopperProps,
    TransitionComponent
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const isDesktop = useMediaQuery(desktopModeMediaQuery, {
    defaultMatches: true
  });
  if (isDesktop) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DesktopDatePicker, _extends({
      ref,
      PopperProps,
      TransitionComponent
    }, other));
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MobileDatePicker, _extends({
    ref,
    DialogProps
  }, other));
});
export {
  DatePicker as D,
  TimePicker as T
};
//# sourceMappingURL=DatePicker-UkMUSWgH.js.map
