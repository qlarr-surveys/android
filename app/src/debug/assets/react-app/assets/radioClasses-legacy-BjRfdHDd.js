;
(function () {
  System.register(['./index-legacy-DHZhPI7F.js'], function (exports, module) {
    'use strict';

    var generateUtilityClasses, generateUtilityClass;
    return {
      setters: [module => {
        generateUtilityClasses = module.f;
        generateUtilityClass = module.g;
      }],
      execute: function execute() {
        exports("g", getRadioUtilityClass);
        function getRadioUtilityClass(slot) {
          return generateUtilityClass('MuiRadio', slot);
        }
        const radioClasses = exports("r", generateUtilityClasses('MuiRadio', ['root', 'checked', 'disabled', 'colorPrimary', 'colorSecondary', 'sizeSmall']));
      }
    };
  });
})();
//# sourceMappingURL=radioClasses-legacy-BjRfdHDd.js.map
