;
(function () {
  System.register(['./vendor-legacy-lhtLtiSI.js', './mui-legacy-b38CRKaY.js'], function (exports, module) {
    'use strict';

    var reactExports;
    return {
      setters: [module => {
        reactExports = module.r;
      }, null],
      execute: function execute() {
        var shim$2 = {
          exports: {}
        };
        var useSyncExternalStoreShim_production = {};

        /**
         * @license React
         * use-sync-external-store-shim.production.js
         *
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        var React$1 = reactExports;
        function is$1(x, y) {
          return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs$1 = "function" === typeof Object.is ? Object.is : is$1,
          useState = React$1.useState,
          useEffect$1 = React$1.useEffect,
          useLayoutEffect = React$1.useLayoutEffect,
          useDebugValue$1 = React$1.useDebugValue;
        function useSyncExternalStore$2(subscribe, getSnapshot) {
          var value = getSnapshot(),
            _useState = useState({
              inst: {
                value: value,
                getSnapshot: getSnapshot
              }
            }),
            inst = _useState[0].inst,
            forceUpdate = _useState[1];
          useLayoutEffect(function () {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            checkIfSnapshotChanged(inst) && forceUpdate({
              inst: inst
            });
          }, [subscribe, value, getSnapshot]);
          useEffect$1(function () {
            checkIfSnapshotChanged(inst) && forceUpdate({
              inst: inst
            });
            return subscribe(function () {
              checkIfSnapshotChanged(inst) && forceUpdate({
                inst: inst
              });
            });
          }, [subscribe]);
          useDebugValue$1(value);
          return value;
        }
        function checkIfSnapshotChanged(inst) {
          var latestGetSnapshot = inst.getSnapshot;
          inst = inst.value;
          try {
            var nextValue = latestGetSnapshot();
            return !objectIs$1(inst, nextValue);
          } catch (error) {
            return true;
          }
        }
        function useSyncExternalStore$1(subscribe, getSnapshot) {
          return getSnapshot();
        }
        var shim$1 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
        useSyncExternalStoreShim_production.useSyncExternalStore = void 0 !== React$1.useSyncExternalStore ? React$1.useSyncExternalStore : shim$1;
        {
          shim$2.exports = useSyncExternalStoreShim_production;
        }
        var shimExports = shim$2.exports;
        var withSelector = {
          exports: {}
        };
        var withSelector_production = {};

        /**
         * @license React
         * use-sync-external-store-shim/with-selector.production.js
         *
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        var React = reactExports,
          shim = shimExports;
        function is(x, y) {
          return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = "function" === typeof Object.is ? Object.is : is,
          useSyncExternalStore = shim.useSyncExternalStore,
          useRef = React.useRef,
          useEffect = React.useEffect,
          useMemo = React.useMemo,
          useDebugValue = React.useDebugValue;
        withSelector_production.useSyncExternalStoreWithSelector = function (subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
          var instRef = useRef(null);
          if (null === instRef.current) {
            var inst = {
              hasValue: false,
              value: null
            };
            instRef.current = inst;
          } else inst = instRef.current;
          instRef = useMemo(function () {
            function memoizedSelector(nextSnapshot) {
              if (!hasMemo) {
                hasMemo = true;
                memoizedSnapshot = nextSnapshot;
                nextSnapshot = selector(nextSnapshot);
                if (void 0 !== isEqual && inst.hasValue) {
                  var currentSelection = inst.value;
                  if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
                }
                return memoizedSelection = nextSnapshot;
              }
              currentSelection = memoizedSelection;
              if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
              var nextSelection = selector(nextSnapshot);
              if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
              memoizedSnapshot = nextSnapshot;
              return memoizedSelection = nextSelection;
            }
            var hasMemo = false,
              memoizedSnapshot,
              memoizedSelection,
              maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [function () {
              return memoizedSelector(getSnapshot());
            }, null === maybeGetServerSnapshot ? void 0 : function () {
              return memoizedSelector(maybeGetServerSnapshot());
            }];
          }, [getSnapshot, getServerSnapshot, selector, isEqual]);
          var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
          useEffect(function () {
            inst.hasValue = true;
            inst.value = value;
          }, [value]);
          useDebugValue(value);
          return value;
        };
        {
          withSelector.exports = withSelector_production;
        }
        var withSelectorExports = exports("w", withSelector.exports);
      }
    };
  });
})();
//# sourceMappingURL=editor-legacy-Dx3AxXyy.js.map
