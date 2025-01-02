;
(function () {
  System.register(['./index-legacy-VHGc_nGn.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports;
    return {
      setters: [module => {
        jsxRuntimeExports = module.j;
      }],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._pageWarper_1b4x1_1 {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n._pageTitle_1b4x1_10 {\n  font-size: 100px;\n  line-height: 1.1;\n  font-weight: bold;\n}\n\n._pageSubTitle_1b4x1_16 {\n  font-size: 20px;\n  line-height: 1.2;\n}\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        exports("default", Page404);
        const pageWarper = "_pageWarper_1b4x1_1";
        const pageTitle = "_pageTitle_1b4x1_10";
        const pageSubTitle = "_pageSubTitle_1b4x1_16";
        const styles = {
          pageWarper: pageWarper,
          pageTitle: pageTitle,
          pageSubTitle: pageSubTitle
        };
        function Page404() {
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            className: styles.pageWarper,
            children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: styles.pageTitle,
              children: "404"
            }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
              className: styles.pageSubTitle,
              children: "Page not found"
            })]
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-CgU7El7a.js.map
