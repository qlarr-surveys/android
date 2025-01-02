;
(function () {
  System.register(['./index-legacy-VHGc_nGn.js', './use-service-legacy-uNDfwPef.js', './Tabs-legacy-DPncV328.js', './TableCell-legacy-CqnzAtHi.js', './Toolbar-legacy-HvxMh-_e.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports, reactExports, _objectWithoutPropertiesLoose, _extends, generateUtilityClasses, generateUtilityClass, clsx, createSvgIcon, useRtl, IconButton, styled, Select, MenuItem, useDefaultProps, useId, InputBase, isHostComponent, composeClasses, KeyboardArrowRight, KeyboardArrowLeft, TableCell, Toolbar;
    return {
      setters: [module => {
        jsxRuntimeExports = module.j;
        reactExports = module.r;
        _objectWithoutPropertiesLoose = module.b;
        _extends = module._;
        generateUtilityClasses = module.f;
        generateUtilityClass = module.g;
        clsx = module.d;
      }, module => {
        createSvgIcon = module.e;
        useRtl = module.z;
        IconButton = module.I;
        styled = module.f;
        Select = module.S;
        MenuItem = module.N;
        useDefaultProps = module.j;
        useId = module.C;
        InputBase = module.bT;
        isHostComponent = module.p;
        composeClasses = module.c;
      }, module => {
        KeyboardArrowRight = module.K;
        KeyboardArrowLeft = module.f;
      }, module => {
        TableCell = module.T;
      }, module => {
        Toolbar = module.T;
      }],
      execute: function execute() {
        const FirstPageIconDefault = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
        }), 'FirstPage');
        const LastPageIconDefault = createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
        }), 'LastPage');
        const _excluded$1 = ["backIconButtonProps", "count", "disabled", "getItemAriaLabel", "nextIconButtonProps", "onPageChange", "page", "rowsPerPage", "showFirstButton", "showLastButton", "slots", "slotProps"];
        const TablePaginationActions = /* @__PURE__ */reactExports.forwardRef(function TablePaginationActions2(props, ref) {
          var _slots$firstButton, _slots$lastButton, _slots$nextButton, _slots$previousButton, _slots$firstButtonIco, _slots$lastButtonIcon, _slots$nextButtonIcon, _slots$previousButton2;
          const backIconButtonProps = props.backIconButtonProps,
            count = props.count,
            _props$disabled = props.disabled,
            disabled = _props$disabled === void 0 ? false : _props$disabled,
            getItemAriaLabel = props.getItemAriaLabel,
            nextIconButtonProps = props.nextIconButtonProps,
            onPageChange = props.onPageChange,
            page = props.page,
            rowsPerPage = props.rowsPerPage,
            showFirstButton = props.showFirstButton,
            showLastButton = props.showLastButton,
            _props$slots = props.slots,
            slots = _props$slots === void 0 ? {} : _props$slots,
            _props$slotProps = props.slotProps,
            slotProps = _props$slotProps === void 0 ? {} : _props$slotProps,
            other = _objectWithoutPropertiesLoose(props, _excluded$1);
          const isRtl = useRtl();
          const handleFirstPageButtonClick = event => {
            onPageChange(event, 0);
          };
          const handleBackButtonClick = event => {
            onPageChange(event, page - 1);
          };
          const handleNextButtonClick = event => {
            onPageChange(event, page + 1);
          };
          const handleLastPageButtonClick = event => {
            onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
          };
          const FirstButton = (_slots$firstButton = slots.firstButton) != null ? _slots$firstButton : IconButton;
          const LastButton = (_slots$lastButton = slots.lastButton) != null ? _slots$lastButton : IconButton;
          const NextButton = (_slots$nextButton = slots.nextButton) != null ? _slots$nextButton : IconButton;
          const PreviousButton = (_slots$previousButton = slots.previousButton) != null ? _slots$previousButton : IconButton;
          const FirstButtonIcon = (_slots$firstButtonIco = slots.firstButtonIcon) != null ? _slots$firstButtonIco : FirstPageIconDefault;
          const LastButtonIcon = (_slots$lastButtonIcon = slots.lastButtonIcon) != null ? _slots$lastButtonIcon : LastPageIconDefault;
          const NextButtonIcon = (_slots$nextButtonIcon = slots.nextButtonIcon) != null ? _slots$nextButtonIcon : KeyboardArrowRight;
          const PreviousButtonIcon = (_slots$previousButton2 = slots.previousButtonIcon) != null ? _slots$previousButton2 : KeyboardArrowLeft;
          const FirstButtonSlot = isRtl ? LastButton : FirstButton;
          const PreviousButtonSlot = isRtl ? NextButton : PreviousButton;
          const NextButtonSlot = isRtl ? PreviousButton : NextButton;
          const LastButtonSlot = isRtl ? FirstButton : LastButton;
          const firstButtonSlotProps = isRtl ? slotProps.lastButton : slotProps.firstButton;
          const previousButtonSlotProps = isRtl ? slotProps.nextButton : slotProps.previousButton;
          const nextButtonSlotProps = isRtl ? slotProps.previousButton : slotProps.nextButton;
          const lastButtonSlotProps = isRtl ? slotProps.firstButton : slotProps.lastButton;
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", _extends({
            ref
          }, other, {
            children: [showFirstButton && /* @__PURE__ */jsxRuntimeExports.jsx(FirstButtonSlot, _extends({
              onClick: handleFirstPageButtonClick,
              disabled: disabled || page === 0,
              "aria-label": getItemAriaLabel("first", page),
              title: getItemAriaLabel("first", page)
            }, firstButtonSlotProps, {
              children: isRtl ? /* @__PURE__ */jsxRuntimeExports.jsx(LastButtonIcon, _extends({}, slotProps.lastButtonIcon)) : /* @__PURE__ */jsxRuntimeExports.jsx(FirstButtonIcon, _extends({}, slotProps.firstButtonIcon))
            })), /* @__PURE__ */jsxRuntimeExports.jsx(PreviousButtonSlot, _extends({
              onClick: handleBackButtonClick,
              disabled: disabled || page === 0,
              color: "inherit",
              "aria-label": getItemAriaLabel("previous", page),
              title: getItemAriaLabel("previous", page)
            }, previousButtonSlotProps != null ? previousButtonSlotProps : backIconButtonProps, {
              children: isRtl ? /* @__PURE__ */jsxRuntimeExports.jsx(NextButtonIcon, _extends({}, slotProps.nextButtonIcon)) : /* @__PURE__ */jsxRuntimeExports.jsx(PreviousButtonIcon, _extends({}, slotProps.previousButtonIcon))
            })), /* @__PURE__ */jsxRuntimeExports.jsx(NextButtonSlot, _extends({
              onClick: handleNextButtonClick,
              disabled: disabled || (count !== -1 ? page >= Math.ceil(count / rowsPerPage) - 1 : false),
              color: "inherit",
              "aria-label": getItemAriaLabel("next", page),
              title: getItemAriaLabel("next", page)
            }, nextButtonSlotProps != null ? nextButtonSlotProps : nextIconButtonProps, {
              children: isRtl ? /* @__PURE__ */jsxRuntimeExports.jsx(PreviousButtonIcon, _extends({}, slotProps.previousButtonIcon)) : /* @__PURE__ */jsxRuntimeExports.jsx(NextButtonIcon, _extends({}, slotProps.nextButtonIcon))
            })), showLastButton && /* @__PURE__ */jsxRuntimeExports.jsx(LastButtonSlot, _extends({
              onClick: handleLastPageButtonClick,
              disabled: disabled || page >= Math.ceil(count / rowsPerPage) - 1,
              "aria-label": getItemAriaLabel("last", page),
              title: getItemAriaLabel("last", page)
            }, lastButtonSlotProps, {
              children: isRtl ? /* @__PURE__ */jsxRuntimeExports.jsx(FirstButtonIcon, _extends({}, slotProps.firstButtonIcon)) : /* @__PURE__ */jsxRuntimeExports.jsx(LastButtonIcon, _extends({}, slotProps.lastButtonIcon))
            }))]
          }));
        });
        function getTablePaginationUtilityClass(slot) {
          return generateUtilityClass('MuiTablePagination', slot);
        }
        const tablePaginationClasses = generateUtilityClasses('MuiTablePagination', ['root', 'toolbar', 'spacer', 'selectLabel', 'selectRoot', 'select', 'selectIcon', 'input', 'menuItem', 'displayedRows', 'actions']);
        var _InputBase;
        const _excluded = ["ActionsComponent", "backIconButtonProps", "className", "colSpan", "component", "count", "disabled", "getItemAriaLabel", "labelDisplayedRows", "labelRowsPerPage", "nextIconButtonProps", "onPageChange", "onRowsPerPageChange", "page", "rowsPerPage", "rowsPerPageOptions", "SelectProps", "showFirstButton", "showLastButton", "slotProps", "slots"];
        const TablePaginationRoot = styled(TableCell, {
          name: "MuiTablePagination",
          slot: "Root",
          overridesResolver: (props, styles) => styles.root
        })(({
          theme
        }) => ({
          overflow: "auto",
          color: (theme.vars || theme).palette.text.primary,
          fontSize: theme.typography.pxToRem(14),
          // Increase the specificity to override TableCell.
          "&:last-child": {
            padding: 0
          }
        }));
        const TablePaginationToolbar = styled(Toolbar, {
          name: "MuiTablePagination",
          slot: "Toolbar",
          overridesResolver: (props, styles) => _extends({
            [`& .${tablePaginationClasses.actions}`]: styles.actions
          }, styles.toolbar)
        })(({
          theme
        }) => ({
          minHeight: 52,
          paddingRight: 2,
          [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
            minHeight: 52
          },
          [theme.breakpoints.up("sm")]: {
            minHeight: 52,
            paddingRight: 2
          },
          [`& .${tablePaginationClasses.actions}`]: {
            flexShrink: 0,
            marginLeft: 20
          }
        }));
        const TablePaginationSpacer = styled("div", {
          name: "MuiTablePagination",
          slot: "Spacer",
          overridesResolver: (props, styles) => styles.spacer
        })({
          flex: "1 1 100%"
        });
        const TablePaginationSelectLabel = styled("p", {
          name: "MuiTablePagination",
          slot: "SelectLabel",
          overridesResolver: (props, styles) => styles.selectLabel
        })(({
          theme
        }) => _extends({}, theme.typography.body2, {
          flexShrink: 0
        }));
        const TablePaginationSelect = styled(Select, {
          name: "MuiTablePagination",
          slot: "Select",
          overridesResolver: (props, styles) => _extends({
            [`& .${tablePaginationClasses.selectIcon}`]: styles.selectIcon,
            [`& .${tablePaginationClasses.select}`]: styles.select
          }, styles.input, styles.selectRoot)
        })({
          color: "inherit",
          fontSize: "inherit",
          flexShrink: 0,
          marginRight: 32,
          marginLeft: 8,
          [`& .${tablePaginationClasses.select}`]: {
            paddingLeft: 8,
            paddingRight: 24,
            textAlign: "right",
            textAlignLast: "right"
            // Align <select> on Chrome.
          }
        });
        const TablePaginationMenuItem = styled(MenuItem, {
          name: "MuiTablePagination",
          slot: "MenuItem",
          overridesResolver: (props, styles) => styles.menuItem
        })({});
        const TablePaginationDisplayedRows = styled("p", {
          name: "MuiTablePagination",
          slot: "DisplayedRows",
          overridesResolver: (props, styles) => styles.displayedRows
        })(({
          theme
        }) => _extends({}, theme.typography.body2, {
          flexShrink: 0
        }));
        function defaultLabelDisplayedRows({
          from,
          to,
          count
        }) {
          return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
        }
        function defaultGetAriaLabel(type) {
          return `Go to ${type} page`;
        }
        const useUtilityClasses = ownerState => {
          const classes = ownerState.classes;
          const slots = {
            root: ["root"],
            toolbar: ["toolbar"],
            spacer: ["spacer"],
            selectLabel: ["selectLabel"],
            select: ["select"],
            input: ["input"],
            selectIcon: ["selectIcon"],
            menuItem: ["menuItem"],
            displayedRows: ["displayedRows"],
            actions: ["actions"]
          };
          return composeClasses(slots, getTablePaginationUtilityClass, classes);
        };
        const TablePagination = exports("T", /* @__PURE__ */reactExports.forwardRef(function TablePagination2(inProps, ref) {
          var _slotProps$select;
          const props = useDefaultProps({
            props: inProps,
            name: "MuiTablePagination"
          });
          const _props$ActionsCompone = props.ActionsComponent,
            ActionsComponent = _props$ActionsCompone === void 0 ? TablePaginationActions : _props$ActionsCompone,
            backIconButtonProps = props.backIconButtonProps,
            className = props.className,
            colSpanProp = props.colSpan,
            _props$component = props.component,
            component = _props$component === void 0 ? TableCell : _props$component,
            count = props.count,
            _props$disabled2 = props.disabled,
            disabled = _props$disabled2 === void 0 ? false : _props$disabled2,
            _props$getItemAriaLab = props.getItemAriaLabel,
            getItemAriaLabel = _props$getItemAriaLab === void 0 ? defaultGetAriaLabel : _props$getItemAriaLab,
            _props$labelDisplayed = props.labelDisplayedRows,
            labelDisplayedRows = _props$labelDisplayed === void 0 ? defaultLabelDisplayedRows : _props$labelDisplayed,
            _props$labelRowsPerPa = props.labelRowsPerPage,
            labelRowsPerPage = _props$labelRowsPerPa === void 0 ? "Rows per page:" : _props$labelRowsPerPa,
            nextIconButtonProps = props.nextIconButtonProps,
            onPageChange = props.onPageChange,
            onRowsPerPageChange = props.onRowsPerPageChange,
            page = props.page,
            rowsPerPage = props.rowsPerPage,
            _props$rowsPerPageOpt = props.rowsPerPageOptions,
            rowsPerPageOptions = _props$rowsPerPageOpt === void 0 ? [10, 25, 50, 100] : _props$rowsPerPageOpt,
            _props$SelectProps = props.SelectProps,
            SelectProps = _props$SelectProps === void 0 ? {} : _props$SelectProps,
            _props$showFirstButto = props.showFirstButton,
            showFirstButton = _props$showFirstButto === void 0 ? false : _props$showFirstButto,
            _props$showLastButton = props.showLastButton,
            showLastButton = _props$showLastButton === void 0 ? false : _props$showLastButton,
            _props$slotProps2 = props.slotProps,
            slotProps = _props$slotProps2 === void 0 ? {} : _props$slotProps2,
            _props$slots2 = props.slots,
            slots = _props$slots2 === void 0 ? {} : _props$slots2,
            other = _objectWithoutPropertiesLoose(props, _excluded);
          const ownerState = props;
          const classes = useUtilityClasses(ownerState);
          const selectProps = (_slotProps$select = slotProps == null ? void 0 : slotProps.select) != null ? _slotProps$select : SelectProps;
          const MenuItemComponent = selectProps.native ? "option" : TablePaginationMenuItem;
          let colSpan;
          if (component === TableCell || component === "td") {
            colSpan = colSpanProp || 1e3;
          }
          const selectId = useId(selectProps.id);
          const labelId = useId(selectProps.labelId);
          const getLabelDisplayedRowsTo = () => {
            if (count === -1) {
              return (page + 1) * rowsPerPage;
            }
            return rowsPerPage === -1 ? count : Math.min(count, (page + 1) * rowsPerPage);
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx(TablePaginationRoot, _extends({
            colSpan,
            ref,
            as: component,
            ownerState,
            className: clsx(classes.root, className)
          }, other, {
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(TablePaginationToolbar, {
              className: classes.toolbar,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(TablePaginationSpacer, {
                className: classes.spacer
              }), rowsPerPageOptions.length > 1 && /* @__PURE__ */jsxRuntimeExports.jsx(TablePaginationSelectLabel, {
                className: classes.selectLabel,
                id: labelId,
                children: labelRowsPerPage
              }), rowsPerPageOptions.length > 1 && /* @__PURE__ */jsxRuntimeExports.jsx(TablePaginationSelect, _extends({
                variant: "standard"
              }, !selectProps.variant && {
                input: _InputBase || (_InputBase = /* @__PURE__ */jsxRuntimeExports.jsx(InputBase, {}))
              }, {
                value: rowsPerPage,
                onChange: onRowsPerPageChange,
                id: selectId,
                labelId
              }, selectProps, {
                classes: _extends({}, selectProps.classes, {
                  // TODO v5 remove `classes.input`
                  root: clsx(classes.input, classes.selectRoot, (selectProps.classes || {}).root),
                  select: clsx(classes.select, (selectProps.classes || {}).select),
                  // TODO v5 remove `selectIcon`
                  icon: clsx(classes.selectIcon, (selectProps.classes || {}).icon)
                }),
                disabled,
                children: rowsPerPageOptions.map(rowsPerPageOption => /* @__PURE__ */reactExports.createElement(MenuItemComponent, _extends({}, !isHostComponent(MenuItemComponent) && {
                  ownerState
                }, {
                  className: classes.menuItem,
                  key: rowsPerPageOption.label ? rowsPerPageOption.label : rowsPerPageOption,
                  value: rowsPerPageOption.value ? rowsPerPageOption.value : rowsPerPageOption
                }), rowsPerPageOption.label ? rowsPerPageOption.label : rowsPerPageOption))
              })), /* @__PURE__ */jsxRuntimeExports.jsx(TablePaginationDisplayedRows, {
                className: classes.displayedRows,
                children: labelDisplayedRows({
                  from: count === 0 ? 0 : page * rowsPerPage + 1,
                  to: getLabelDisplayedRowsTo(),
                  count: count === -1 ? -1 : count,
                  page
                })
              }), /* @__PURE__ */jsxRuntimeExports.jsx(ActionsComponent, {
                className: classes.actions,
                backIconButtonProps,
                count,
                nextIconButtonProps,
                onPageChange,
                page,
                rowsPerPage,
                showFirstButton,
                showLastButton,
                slotProps: slotProps.actions,
                slots: slots.actions,
                getItemAriaLabel,
                disabled
              })]
            })
          }));
        }));
      }
    };
  });
})();
//# sourceMappingURL=TablePagination-legacy-CBgKDmMX.js.map
