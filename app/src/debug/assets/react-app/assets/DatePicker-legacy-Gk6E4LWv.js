;
(function () {
  System.register(['./index-legacy-ppEgxGbl.js', './DateTimePicker-legacy-CzDRMfHF.js', './Tabs-legacy-CXNTfVGs.js', './use-service-legacy-BbL3A7cT.js'], function (exports, module) {
    'use strict';

    var _extends, generateUtilityClasses, generateUtilityClass, _objectWithoutPropertiesLoose, jsxRuntimeExports, reactExports, useThemeProps, useUtils, useLocaleText, Clock, parsePickerInputValue, PickersToolbar, pickersToolbarClasses, PickersToolbarText, useMeridiemMode, arrayIncludes, PickersToolbarButton, useTimeValidation, usePickerState, DesktopWrapper, KeyboardDateInput, CalendarOrClockPicker, MobileWrapper, PureDateInput, useDefaultDates, parseNonNullablePickerDate, useDateValidation, useMediaQuery, styled, useTheme, composeClasses, Typography;
    return {
      setters: [module => {
        _extends = module._;
        generateUtilityClasses = module.f;
        generateUtilityClass = module.g;
        _objectWithoutPropertiesLoose = module.b;
        jsxRuntimeExports = module.j;
        reactExports = module.r;
      }, module => {
        useThemeProps = module.u;
        useUtils = module.a;
        useLocaleText = module.b;
        Clock = module.C;
        parsePickerInputValue = module.p;
        PickersToolbar = module.P;
        pickersToolbarClasses = module.c;
        PickersToolbarText = module.d;
        useMeridiemMode = module.e;
        arrayIncludes = module.f;
        PickersToolbarButton = module.g;
        useTimeValidation = module.h;
        usePickerState = module.i;
        DesktopWrapper = module.j;
        KeyboardDateInput = module.K;
        CalendarOrClockPicker = module.k;
        MobileWrapper = module.M;
        PureDateInput = module.l;
        useDefaultDates = module.m;
        parseNonNullablePickerDate = module.n;
        useDateValidation = module.o;
      }, module => {
        useMediaQuery = module.u;
      }, module => {
        styled = module.f;
        useTheme = module.w;
        composeClasses = module.c;
        Typography = module.T;
      }],
      execute: function execute() {
        function useTimePickerDefaultizedProps(props, name) {
          var _themeProps$ampm;

          // This is technically unsound if the type parameters appear in optional props.
          // Optional props can be filled by `useThemeProps` with types that don't match the type parameters.
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
            openTo: 'hours',
            views: ['hours', 'minutes'],
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
          getTodayValue: utils => utils.date(),
          areValuesEqual: (utils, a, b) => utils.isEqual(a, b),
          valueReducer: (utils, lastValidValue, newValue) => {
            if (!lastValidValue || !utils.isValid(newValue)) {
              return newValue;
            }
            return utils.mergeDateAndTime(lastValidValue, newValue);
          }
        };
        function getTimePickerToolbarUtilityClass(slot) {
          return generateUtilityClass('MuiTimePickerToolbar', slot);
        }
        const timePickerToolbarClasses = generateUtilityClasses('MuiTimePickerToolbar', ['root', 'separator', 'hourMinuteLabel', 'hourMinuteLabelLandscape', 'hourMinuteLabelReverse', 'ampmSelection', 'ampmLandscape', 'ampmLabel']);
        const _excluded$7 = ["ampm", "ampmInClock", "parsedValue", "isLandscape", "isMobileKeyboardViewOpen", "onChange", "openView", "setOpenView", "toggleMobileKeyboardView", "toolbarTitle", "views", "disabled", "readOnly"];
        const useUtilityClasses$1 = ownerState => {
          const theme = ownerState.theme,
            isLandscape = ownerState.isLandscape,
            classes = ownerState.classes;
          const slots = {
            root: ['root'],
            separator: ['separator'],
            hourMinuteLabel: ['hourMinuteLabel', isLandscape && 'hourMinuteLabelLandscape', theme.direction === 'rtl' && 'hourMinuteLabelReverse'],
            ampmSelection: ['ampmSelection', isLandscape && 'ampmLandscape'],
            ampmLabel: ['ampmLabel']
          };
          return composeClasses(slots, getTimePickerToolbarUtilityClass, classes);
        };
        const TimePickerToolbarRoot = styled(PickersToolbar, {
          name: 'MuiTimePickerToolbar',
          slot: 'Root',
          overridesResolver: (props, styles) => styles.root
        })({
          [`& .${pickersToolbarClasses.penIconButtonLandscape}`]: {
            marginTop: 'auto'
          }
        });
        const TimePickerToolbarSeparator = styled(PickersToolbarText, {
          name: 'MuiTimePickerToolbar',
          slot: 'Separator',
          overridesResolver: (props, styles) => styles.separator
        })({
          outline: 0,
          margin: '0 4px 0 2px',
          cursor: 'default'
        });
        const TimePickerToolbarHourMinuteLabel = styled('div', {
          name: 'MuiTimePickerToolbar',
          slot: 'HourMinuteLabel',
          overridesResolver: (props, styles) => [{
            [`&.${timePickerToolbarClasses.hourMinuteLabelLandscape}`]: styles.hourMinuteLabelLandscape,
            [`&.${timePickerToolbarClasses.hourMinuteLabelReverse}`]: styles.hourMinuteLabelReverse
          }, styles.hourMinuteLabel]
        })(({
          theme,
          ownerState
        }) => _extends({
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end'
        }, ownerState.isLandscape && {
          marginTop: 'auto'
        }, theme.direction === 'rtl' && {
          flexDirection: 'row-reverse'
        }));
        const TimePickerToolbarAmPmSelection = styled('div', {
          name: 'MuiTimePickerToolbar',
          slot: 'AmPmSelection',
          overridesResolver: (props, styles) => [{
            [`.${timePickerToolbarClasses.ampmLabel}`]: styles.ampmLabel
          }, {
            [`&.${timePickerToolbarClasses.ampmLandscape}`]: styles.ampmLandscape
          }, styles.ampmSelection]
        })(({
          ownerState
        }) => _extends({
          display: 'flex',
          flexDirection: 'column',
          marginRight: 'auto',
          marginLeft: 12
        }, ownerState.isLandscape && {
          margin: '4px 0 auto',
          flexDirection: 'row',
          justifyContent: 'space-around',
          flexBasis: '100%'
        }, {
          [`& .${timePickerToolbarClasses.ampmLabel}`]: {
            fontSize: 17
          }
        }));
        /**
         * @ignore - internal component.
         */

        function TimePickerToolbar(inProps) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiTimePickerToolbar'
          });
          const ampm = props.ampm,
            ampmInClock = props.ampmInClock,
            parsedValue = props.parsedValue,
            isLandscape = props.isLandscape,
            isMobileKeyboardViewOpen = props.isMobileKeyboardViewOpen,
            onChange = props.onChange,
            openView = props.openView,
            setOpenView = props.setOpenView,
            toggleMobileKeyboardView = props.toggleMobileKeyboardView,
            toolbarTitleProp = props.toolbarTitle,
            views = props.views,
            disabled = props.disabled,
            readOnly = props.readOnly,
            other = _objectWithoutPropertiesLoose(props, _excluded$7);
          const utils = useUtils();
          const localeText = useLocaleText();
          const toolbarTitle = toolbarTitleProp != null ? toolbarTitleProp : localeText.timePickerDefaultToolbarTitle;
          const theme = useTheme();
          const showAmPmControl = Boolean(ampm && !ampmInClock);
          const _useMeridiemMode = useMeridiemMode(parsedValue, ampm, onChange),
            meridiemMode = _useMeridiemMode.meridiemMode,
            handleMeridiemChange = _useMeridiemMode.handleMeridiemChange;
          const formatHours = time => ampm ? utils.format(time, 'hours12h') : utils.format(time, 'hours24h');
          const ownerState = props;
          const classes = useUtilityClasses$1(_extends({}, ownerState, {
            theme
          }));
          const separator = /*#__PURE__*/jsxRuntimeExports.jsx(TimePickerToolbarSeparator, {
            tabIndex: -1,
            value: ":",
            variant: "h3",
            selected: false,
            className: classes.separator
          });
          return /*#__PURE__*/jsxRuntimeExports.jsxs(TimePickerToolbarRoot, _extends({
            viewType: "clock",
            landscapeDirection: "row",
            toolbarTitle: toolbarTitle,
            isLandscape: isLandscape,
            isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
            toggleMobileKeyboardView: toggleMobileKeyboardView,
            ownerState: ownerState,
            className: classes.root
          }, other, {
            children: [/*#__PURE__*/jsxRuntimeExports.jsxs(TimePickerToolbarHourMinuteLabel, {
              className: classes.hourMinuteLabel,
              ownerState: ownerState,
              children: [arrayIncludes(views, 'hours') && /*#__PURE__*/jsxRuntimeExports.jsx(PickersToolbarButton, {
                tabIndex: -1,
                variant: "h3",
                onClick: () => setOpenView('hours'),
                selected: openView === 'hours',
                value: parsedValue ? formatHours(parsedValue) : '--'
              }), arrayIncludes(views, ['hours', 'minutes']) && separator, arrayIncludes(views, 'minutes') && /*#__PURE__*/jsxRuntimeExports.jsx(PickersToolbarButton, {
                tabIndex: -1,
                variant: "h3",
                onClick: () => setOpenView('minutes'),
                selected: openView === 'minutes',
                value: parsedValue ? utils.format(parsedValue, 'minutes') : '--'
              }), arrayIncludes(views, ['minutes', 'seconds']) && separator, arrayIncludes(views, 'seconds') && /*#__PURE__*/jsxRuntimeExports.jsx(PickersToolbarButton, {
                variant: "h3",
                onClick: () => setOpenView('seconds'),
                selected: openView === 'seconds',
                value: parsedValue ? utils.format(parsedValue, 'seconds') : '--'
              })]
            }), showAmPmControl && /*#__PURE__*/jsxRuntimeExports.jsxs(TimePickerToolbarAmPmSelection, {
              className: classes.ampmSelection,
              ownerState: ownerState,
              children: [/*#__PURE__*/jsxRuntimeExports.jsx(PickersToolbarButton, {
                disableRipple: true,
                variant: "subtitle2",
                selected: meridiemMode === 'am',
                typographyClassName: classes.ampmLabel,
                value: utils.getMeridiemText('am'),
                onClick: readOnly ? undefined : () => handleMeridiemChange('am'),
                disabled: disabled
              }), /*#__PURE__*/jsxRuntimeExports.jsx(PickersToolbarButton, {
                disableRipple: true,
                variant: "subtitle2",
                selected: meridiemMode === 'pm',
                typographyClassName: classes.ampmLabel,
                value: utils.getMeridiemText('pm'),
                onClick: readOnly ? undefined : () => handleMeridiemChange('pm'),
                disabled: disabled
              })]
            })]
          }));
        }
        const _excluded$6 = ["onChange", "PaperProps", "PopperProps", "ToolbarComponent", "TransitionComponent", "value", "components", "componentsProps"];
        const DesktopTimePicker = /* @__PURE__ */reactExports.forwardRef(function DesktopTimePicker2(inProps, ref) {
          const props = useTimePickerDefaultizedProps(inProps, "MuiDesktopTimePicker");
          const validationError = useTimeValidation(props) !== null;
          const _usePickerState = usePickerState(props, timePickerValueManager),
            pickerProps = _usePickerState.pickerProps,
            inputProps = _usePickerState.inputProps,
            wrapperProps = _usePickerState.wrapperProps;
          const PaperProps = props.PaperProps,
            PopperProps = props.PopperProps,
            _props$ToolbarCompone = props.ToolbarComponent,
            ToolbarComponent = _props$ToolbarCompone === void 0 ? TimePickerToolbar : _props$ToolbarCompone,
            TransitionComponent = props.TransitionComponent,
            components = props.components,
            componentsProps = props.componentsProps,
            other = _objectWithoutPropertiesLoose(props, _excluded$6);
          const DateInputProps = _extends({}, inputProps, other, {
            components,
            componentsProps,
            ref,
            validationError
          });
          return /* @__PURE__ */jsxRuntimeExports.jsx(DesktopWrapper, _extends({}, wrapperProps, {
            DateInputProps,
            KeyboardDateInputComponent: KeyboardDateInput,
            PopperProps,
            PaperProps,
            TransitionComponent,
            components,
            componentsProps,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(CalendarOrClockPicker, _extends({}, pickerProps, {
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
        const MobileTimePicker = /* @__PURE__ */reactExports.forwardRef(function MobileTimePicker2(inProps, ref) {
          const props = useTimePickerDefaultizedProps(inProps, "MuiMobileTimePicker");
          const validationError = useTimeValidation(props) !== null;
          const _usePickerState2 = usePickerState(props, timePickerValueManager),
            pickerProps = _usePickerState2.pickerProps,
            inputProps = _usePickerState2.inputProps,
            wrapperProps = _usePickerState2.wrapperProps;
          const _props$ToolbarCompone2 = props.ToolbarComponent,
            ToolbarComponent = _props$ToolbarCompone2 === void 0 ? TimePickerToolbar : _props$ToolbarCompone2,
            components = props.components,
            componentsProps = props.componentsProps,
            other = _objectWithoutPropertiesLoose(props, _excluded$5);
          const DateInputProps = _extends({}, inputProps, other, {
            components,
            componentsProps,
            ref,
            validationError
          });
          return /* @__PURE__ */jsxRuntimeExports.jsx(MobileWrapper, _extends({}, other, wrapperProps, {
            DateInputProps,
            PureDateInputComponent: PureDateInput,
            components,
            componentsProps,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(CalendarOrClockPicker, _extends({}, pickerProps, {
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
        const TimePicker = exports("T", /* @__PURE__ */reactExports.forwardRef(function TimePicker2(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: "MuiTimePicker"
          });
          const _props$desktopModeMed = props.desktopModeMediaQuery,
            desktopModeMediaQuery = _props$desktopModeMed === void 0 ? "@media (pointer: fine)" : _props$desktopModeMed,
            DialogProps = props.DialogProps,
            PopperProps = props.PopperProps,
            TransitionComponent = props.TransitionComponent,
            other = _objectWithoutPropertiesLoose(props, _excluded$4);
          const isDesktop = useMediaQuery(desktopModeMediaQuery, {
            defaultMatches: true
          });
          if (isDesktop) {
            return /* @__PURE__ */jsxRuntimeExports.jsx(DesktopTimePicker, _extends({
              ref,
              PopperProps,
              TransitionComponent
            }, other));
          }
          return /* @__PURE__ */jsxRuntimeExports.jsx(MobileTimePicker, _extends({
            ref,
            DialogProps
          }, other));
        }));
        const isYearOnlyView = views => views.length === 1 && views[0] === 'year';
        const isYearAndMonthViews = views => views.length === 2 && views.indexOf('month') !== -1 && views.indexOf('year') !== -1;
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
          const defaultDates = useDefaultDates(); // This is technically unsound if the type parameters appear in optional props.
          // Optional props can be filled by `useThemeProps` with types that don't match the type parameters.

          const themeProps = useThemeProps({
            props,
            name
          });
          const views = (_themeProps$views = themeProps.views) != null ? _themeProps$views : ['year', 'day'];
          return _extends({
            openTo: 'day',
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
          getTodayValue: utils => utils.date(),
          parseInput: parsePickerInputValue,
          areValuesEqual: (utils, a, b) => utils.isEqual(a, b)
        };
        function getDatePickerToolbarUtilityClass(slot) {
          return generateUtilityClass('MuiDatePickerToolbar', slot);
        }
        generateUtilityClasses('MuiDatePickerToolbar', ['root', 'title']);
        const _excluded$3 = ["parsedValue", "isLandscape", "isMobileKeyboardViewOpen", "onChange", "toggleMobileKeyboardView", "toolbarFormat", "toolbarPlaceholder", "toolbarTitle", "views"];
        const useUtilityClasses = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ['root'],
            title: ['title']
          };
          return composeClasses(slots, getDatePickerToolbarUtilityClass, classes);
        };
        const DatePickerToolbarRoot = styled(PickersToolbar, {
          name: 'MuiDatePickerToolbar',
          slot: 'Root',
          overridesResolver: (_, styles) => styles.root
        })({});
        const DatePickerToolbarTitle = styled(Typography, {
          name: 'MuiDatePickerToolbar',
          slot: 'Title',
          overridesResolver: (_, styles) => styles.title
        })(({
          ownerState
        }) => _extends({}, ownerState.isLandscape && {
          margin: 'auto 16px auto auto'
        }));

        /**
         * @ignore - internal component.
         */
        const DatePickerToolbar = /*#__PURE__*/reactExports.forwardRef(function DatePickerToolbar(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: 'MuiDatePickerToolbar'
          });
          const parsedValue = props.parsedValue,
            isLandscape = props.isLandscape,
            isMobileKeyboardViewOpen = props.isMobileKeyboardViewOpen,
            toggleMobileKeyboardView = props.toggleMobileKeyboardView,
            toolbarFormat = props.toolbarFormat,
            _props$toolbarPlaceho = props.toolbarPlaceholder,
            toolbarPlaceholder = _props$toolbarPlaceho === void 0 ? '––' : _props$toolbarPlaceho,
            toolbarTitleProp = props.toolbarTitle,
            views = props.views,
            other = _objectWithoutPropertiesLoose(props, _excluded$3);
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
              return utils.format(parsedValue, 'year');
            }
            if (isYearAndMonthViews(views)) {
              return utils.format(parsedValue, 'month');
            } // Little localization hack (Google is doing the same for android native pickers):
            // For english localization it is convenient to include weekday into the date "Mon, Jun 1".
            // For other locales using strings like "June 1", without weekday.

            return /en/.test(utils.getCurrentLocaleCode()) ? utils.format(parsedValue, 'normalDateWithWeekday') : utils.format(parsedValue, 'normalDate');
          }, [parsedValue, toolbarFormat, toolbarPlaceholder, utils, views]);
          const ownerState = props;
          return /*#__PURE__*/jsxRuntimeExports.jsx(DatePickerToolbarRoot, _extends({
            ref: ref,
            toolbarTitle: toolbarTitle,
            isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
            toggleMobileKeyboardView: toggleMobileKeyboardView,
            isLandscape: isLandscape,
            className: classes.root
          }, other, {
            children: /*#__PURE__*/jsxRuntimeExports.jsx(DatePickerToolbarTitle, {
              variant: "h4",
              align: isLandscape ? 'left' : 'center',
              ownerState: ownerState,
              className: classes.title,
              children: dateText
            })
          }));
        });
        const _excluded$2 = ["onChange", "PopperProps", "PaperProps", "ToolbarComponent", "TransitionComponent", "value", "components", "componentsProps"];
        const DesktopDatePicker = /* @__PURE__ */reactExports.forwardRef(function DesktopDatePicker2(inProps, ref) {
          const props = useDatePickerDefaultizedProps(inProps, "MuiDesktopDatePicker");
          const validationError = useDateValidation(props) !== null;
          const _usePickerState3 = usePickerState(props, datePickerValueManager),
            pickerProps = _usePickerState3.pickerProps,
            inputProps = _usePickerState3.inputProps,
            wrapperProps = _usePickerState3.wrapperProps;
          const PopperProps = props.PopperProps,
            PaperProps = props.PaperProps,
            _props$ToolbarCompone3 = props.ToolbarComponent,
            ToolbarComponent = _props$ToolbarCompone3 === void 0 ? DatePickerToolbar : _props$ToolbarCompone3,
            TransitionComponent = props.TransitionComponent,
            components = props.components,
            componentsProps = props.componentsProps,
            other = _objectWithoutPropertiesLoose(props, _excluded$2);
          const AllDateInputProps = _extends({}, inputProps, other, {
            components,
            componentsProps,
            ref,
            validationError
          });
          return /* @__PURE__ */jsxRuntimeExports.jsx(DesktopWrapper, _extends({}, wrapperProps, {
            DateInputProps: AllDateInputProps,
            KeyboardDateInputComponent: KeyboardDateInput,
            PopperProps,
            PaperProps,
            TransitionComponent,
            components,
            componentsProps,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(CalendarOrClockPicker, _extends({}, pickerProps, {
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
        const MobileDatePicker = /* @__PURE__ */reactExports.forwardRef(function MobileDatePicker2(inProps, ref) {
          const props = useDatePickerDefaultizedProps(inProps, "MuiMobileDatePicker");
          const validationError = useDateValidation(props) !== null;
          const _usePickerState4 = usePickerState(props, datePickerValueManager),
            pickerProps = _usePickerState4.pickerProps,
            inputProps = _usePickerState4.inputProps,
            wrapperProps = _usePickerState4.wrapperProps;
          const _props$ToolbarCompone4 = props.ToolbarComponent,
            ToolbarComponent = _props$ToolbarCompone4 === void 0 ? DatePickerToolbar : _props$ToolbarCompone4,
            components = props.components,
            componentsProps = props.componentsProps,
            other = _objectWithoutPropertiesLoose(props, _excluded$1);
          const DateInputProps = _extends({}, inputProps, other, {
            components,
            componentsProps,
            ref,
            validationError
          });
          return /* @__PURE__ */jsxRuntimeExports.jsx(MobileWrapper, _extends({}, other, wrapperProps, {
            DateInputProps,
            PureDateInputComponent: PureDateInput,
            components,
            componentsProps,
            children: /* @__PURE__ */jsxRuntimeExports.jsx(CalendarOrClockPicker, _extends({}, pickerProps, {
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
        const DatePicker = exports("D", /* @__PURE__ */reactExports.forwardRef(function DatePicker2(inProps, ref) {
          const props = useThemeProps({
            props: inProps,
            name: "MuiDatePicker"
          });
          const _props$desktopModeMed2 = props.desktopModeMediaQuery,
            desktopModeMediaQuery = _props$desktopModeMed2 === void 0 ? "@media (pointer: fine)" : _props$desktopModeMed2,
            DialogProps = props.DialogProps,
            PopperProps = props.PopperProps,
            TransitionComponent = props.TransitionComponent,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const isDesktop = useMediaQuery(desktopModeMediaQuery, {
            defaultMatches: true
          });
          if (isDesktop) {
            return /* @__PURE__ */jsxRuntimeExports.jsx(DesktopDatePicker, _extends({
              ref,
              PopperProps,
              TransitionComponent
            }, other));
          }
          return /* @__PURE__ */jsxRuntimeExports.jsx(MobileDatePicker, _extends({
            ref,
            DialogProps
          }, other));
        }));
      }
    };
  });
})();
//# sourceMappingURL=DatePicker-legacy-Gk6E4LWv.js.map
