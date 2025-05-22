;
(function () {
  System.register(['./index-legacy-ppEgxGbl.js'], function (exports, module) {
    'use strict';

    var generateUtilityClasses, generateUtilityClass;
    return {
      setters: [module => {
        generateUtilityClasses = module.f;
        generateUtilityClass = module.g;
      }],
      execute: function execute() {
        exports({
          b: getTableCellUtilityClass,
          g: getTableRowUtilityClass
        });
        function getTableCellUtilityClass(slot) {
          return generateUtilityClass('MuiTableCell', slot);
        }
        const tableCellClasses = exports("a", generateUtilityClasses('MuiTableCell', ['root', 'head', 'body', 'footer', 'sizeSmall', 'sizeMedium', 'paddingCheckbox', 'paddingNone', 'alignLeft', 'alignCenter', 'alignRight', 'alignJustify', 'stickyHeader']));
        function getTableRowUtilityClass(slot) {
          return generateUtilityClass('MuiTableRow', slot);
        }
        const tableRowClasses = exports("t", generateUtilityClasses('MuiTableRow', ['root', 'selected', 'hover', 'head', 'footer']));
      }
    };
  });
})();
//# sourceMappingURL=tableRowClasses-legacy-DKGRrcou.js.map
