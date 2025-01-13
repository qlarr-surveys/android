;
(function () {
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  System.register(['./index-legacy-DHZhPI7F.js', './use-service-legacy-Dvd5TXWp.js'], function (exports, module) {
    'use strict';

    var reactExports, jsxRuntimeExports, invariant, createStore, DndContext, createSvgIcon;
    return {
      setters: [module => {
        reactExports = module.r;
        jsxRuntimeExports = module.j;
      }, module => {
        invariant = module.bB;
        createStore = module.bC;
        DndContext = module.bD;
        createSvgIcon = module.e;
      }],
      execute: function execute() {
        // Cache implementation based on Erik Rasmussen's `lru-memoize`:
        // https://github.com/erikras/lru-memoize
        var NOT_FOUND = 'NOT_FOUND';
        function createSingletonCache(equals) {
          var entry;
          return {
            get: function get(key) {
              if (entry && equals(entry.key, key)) {
                return entry.value;
              }
              return NOT_FOUND;
            },
            put: function put(key, value) {
              entry = {
                key: key,
                value: value
              };
            },
            getEntries: function getEntries() {
              return entry ? [entry] : [];
            },
            clear: function clear() {
              entry = undefined;
            }
          };
        }
        function createLruCache(maxSize, equals) {
          var entries = [];
          function get(key) {
            var cacheIndex = entries.findIndex(function (entry) {
              return equals(key, entry.key);
            }); // We found a cached entry

            if (cacheIndex > -1) {
              var entry = entries[cacheIndex]; // Cached entry not at top of cache, move it to the top

              if (cacheIndex > 0) {
                entries.splice(cacheIndex, 1);
                entries.unshift(entry);
              }
              return entry.value;
            } // No entry found in cache, return sentinel

            return NOT_FOUND;
          }
          function put(key, value) {
            if (get(key) === NOT_FOUND) {
              // TODO Is unshift slow?
              entries.unshift({
                key: key,
                value: value
              });
              if (entries.length > maxSize) {
                entries.pop();
              }
            }
          }
          function getEntries() {
            return entries;
          }
          function clear() {
            entries = [];
          }
          return {
            get: get,
            put: put,
            getEntries: getEntries,
            clear: clear
          };
        }
        var defaultEqualityCheck = function defaultEqualityCheck(a, b) {
          return a === b;
        };
        function createCacheKeyComparator(equalityCheck) {
          return function areArgumentsShallowlyEqual(prev, next) {
            if (prev === null || next === null || prev.length !== next.length) {
              return false;
            } // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.

            var length = prev.length;
            for (var i = 0; i < length; i++) {
              if (!equalityCheck(prev[i], next[i])) {
                return false;
              }
            }
            return true;
          };
        }
        // defaultMemoize now supports a configurable cache size with LRU behavior,
        // and optional comparison of the result value with existing values
        function defaultMemoize(func, equalityCheckOrOptions) {
          var providedOptions = typeof equalityCheckOrOptions === 'object' ? equalityCheckOrOptions : {
            equalityCheck: equalityCheckOrOptions
          };
          var _providedOptions$equa = providedOptions.equalityCheck,
            equalityCheck = _providedOptions$equa === void 0 ? defaultEqualityCheck : _providedOptions$equa,
            _providedOptions$maxS = providedOptions.maxSize,
            maxSize = _providedOptions$maxS === void 0 ? 1 : _providedOptions$maxS,
            resultEqualityCheck = providedOptions.resultEqualityCheck;
          var comparator = createCacheKeyComparator(equalityCheck);
          var cache = maxSize === 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator); // we reference arguments instead of spreading them for performance reasons

          function memoized() {
            var value = cache.get(arguments);
            if (value === NOT_FOUND) {
              // @ts-ignore
              value = func.apply(null, arguments);
              if (resultEqualityCheck) {
                var entries = cache.getEntries();
                var matchingEntry = entries.find(function (entry) {
                  return resultEqualityCheck(entry.value, value);
                });
                if (matchingEntry) {
                  value = matchingEntry.value;
                }
              }
              cache.put(arguments, value);
            }
            return value;
          }
          memoized.clearCache = function () {
            return cache.clear();
          };
          return memoized;
        }
        function getDependencies(funcs) {
          var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;
          if (!dependencies.every(function (dep) {
            return typeof dep === 'function';
          })) {
            var dependencyTypes = dependencies.map(function (dep) {
              return typeof dep === 'function' ? "function " + (dep.name || 'unnamed') + "()" : typeof dep;
            }).join(', ');
            throw new Error("createSelector expects all input-selectors to be functions, but received the following types: [" + dependencyTypes + "]");
          }
          return dependencies;
        }
        function createSelectorCreator(memoize) {
          for (var _len = arguments.length, memoizeOptionsFromArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            memoizeOptionsFromArgs[_key - 1] = arguments[_key];
          }
          var createSelector = function createSelector() {
            for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              funcs[_key2] = arguments[_key2];
            }
            var _recomputations = 0;
            var _lastResult; // Due to the intricacies of rest params, we can't do an optional arg after `...funcs`.
            // So, start by declaring the default value here.
            // (And yes, the words 'memoize' and 'options' appear too many times in this next sequence.)

            var directlyPassedOptions = {
              memoizeOptions: undefined
            }; // Normally, the result func or "output selector" is the last arg

            var resultFunc = funcs.pop(); // If the result func is actually an _object_, assume it's our options object

            if (typeof resultFunc === 'object') {
              directlyPassedOptions = resultFunc; // and pop the real result func off

              resultFunc = funcs.pop();
            }
            if (typeof resultFunc !== 'function') {
              throw new Error("createSelector expects an output function after the inputs, but received: [" + typeof resultFunc + "]");
            } // Determine which set of options we're using. Prefer options passed directly,
            // but fall back to options given to createSelectorCreator.

            var _directlyPassedOption = directlyPassedOptions,
              _directlyPassedOption2 = _directlyPassedOption.memoizeOptions,
              memoizeOptions = _directlyPassedOption2 === void 0 ? memoizeOptionsFromArgs : _directlyPassedOption2; // Simplifying assumption: it's unlikely that the first options arg of the provided memoizer
            // is an array. In most libs I've looked at, it's an equality function or options object.
            // Based on that, if `memoizeOptions` _is_ an array, we assume it's a full
            // user-provided array of options. Otherwise, it must be just the _first_ arg, and so
            // we wrap it in an array so we can apply it.

            var finalMemoizeOptions = Array.isArray(memoizeOptions) ? memoizeOptions : [memoizeOptions];
            var dependencies = getDependencies(funcs);
            var memoizedResultFunc = memoize.apply(void 0, [function recomputationWrapper() {
              _recomputations++; // apply arguments instead of spreading for performance.

              return resultFunc.apply(null, arguments);
            }].concat(finalMemoizeOptions)); // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.

            var selector = memoize(function dependenciesChecker() {
              var params = [];
              var length = dependencies.length;
              for (var i = 0; i < length; i++) {
                // apply arguments instead of spreading and mutate a local list of params for performance.
                // @ts-ignore
                params.push(dependencies[i].apply(null, arguments));
              } // apply arguments instead of spreading for performance.

              _lastResult = memoizedResultFunc.apply(null, params);
              return _lastResult;
            });
            Object.assign(selector, {
              resultFunc: resultFunc,
              memoizedResultFunc: memoizedResultFunc,
              dependencies: dependencies,
              lastResult: function lastResult() {
                return _lastResult;
              },
              recomputations: function recomputations() {
                return _recomputations;
              },
              resetRecomputations: function resetRecomputations() {
                return _recomputations = 0;
              }
            });
            return selector;
          }; // @ts-ignore

          return createSelector;
        }
        var createSelector = exports("c", /* #__PURE__ */createSelectorCreator(defaultMemoize));

        // cheap lodash replacements
        /**
         * drop-in replacement for _.get
         * @param obj
         * @param path
         * @param defaultValue
         */
        function get(obj, path, defaultValue) {
          return path.split('.').reduce((a, c) => a && a[c] ? a[c] : defaultValue || null, obj);
        }
        /**
         * drop-in replacement for _.without
         */
        function without$1(items, item) {
          return items.filter(i => i !== item);
        }
        /**
         * drop-in replacement for _.isString
         * @param input
         */
        function isObject(input) {
          return typeof input === 'object';
        }
        /**
         * replacement for _.xor
         * @param itemsA
         * @param itemsB
         */
        function xor(itemsA, itemsB) {
          const map = new Map();
          const insertItem = item => {
            map.set(item, map.has(item) ? map.get(item) + 1 : 1);
          };
          itemsA.forEach(insertItem);
          itemsB.forEach(insertItem);
          const result = [];
          map.forEach((count, key) => {
            if (count === 1) {
              result.push(key);
            }
          });
          return result;
        }
        /**
         * replacement for _.intersection
         * @param itemsA
         * @param itemsB
         */
        function intersection(itemsA, itemsB) {
          return itemsA.filter(t => itemsB.indexOf(t) > -1);
        }
        const INIT_COORDS = 'dnd-core/INIT_COORDS';
        const BEGIN_DRAG = 'dnd-core/BEGIN_DRAG';
        const PUBLISH_DRAG_SOURCE = 'dnd-core/PUBLISH_DRAG_SOURCE';
        const HOVER = 'dnd-core/HOVER';
        const DROP = 'dnd-core/DROP';
        const END_DRAG = 'dnd-core/END_DRAG';
        function setClientOffset(clientOffset, sourceClientOffset) {
          return {
            type: INIT_COORDS,
            payload: {
              sourceClientOffset: sourceClientOffset || null,
              clientOffset: clientOffset || null
            }
          };
        }
        const ResetCoordinatesAction = {
          type: INIT_COORDS,
          payload: {
            clientOffset: null,
            sourceClientOffset: null
          }
        };
        function createBeginDrag(manager) {
          return function beginDrag(sourceIds = [], options = {
            publishSource: true
          }) {
            const _options$publishSourc = options.publishSource,
              publishSource = _options$publishSourc === void 0 ? true : _options$publishSourc,
              clientOffset = options.clientOffset,
              getSourceClientOffset = options.getSourceClientOffset;
            const monitor = manager.getMonitor();
            const registry = manager.getRegistry();
            // Initialize the coordinates using the client offset
            manager.dispatch(setClientOffset(clientOffset));
            verifyInvariants$1(sourceIds, monitor, registry);
            // Get the draggable source
            const sourceId = getDraggableSource(sourceIds, monitor);
            if (sourceId == null) {
              manager.dispatch(ResetCoordinatesAction);
              return;
            }
            // Get the source client offset
            let sourceClientOffset = null;
            if (clientOffset) {
              if (!getSourceClientOffset) {
                throw new Error('getSourceClientOffset must be defined');
              }
              verifyGetSourceClientOffsetIsFunction(getSourceClientOffset);
              sourceClientOffset = getSourceClientOffset(sourceId);
            }
            // Initialize the full coordinates
            manager.dispatch(setClientOffset(clientOffset, sourceClientOffset));
            const source = registry.getSource(sourceId);
            const item = source.beginDrag(monitor, sourceId);
            // If source.beginDrag returns null, this is an indicator to cancel the drag
            if (item == null) {
              return undefined;
            }
            verifyItemIsObject(item);
            registry.pinSource(sourceId);
            const itemType = registry.getSourceType(sourceId);
            return {
              type: BEGIN_DRAG,
              payload: {
                itemType,
                item,
                sourceId,
                clientOffset: clientOffset || null,
                sourceClientOffset: sourceClientOffset || null,
                isSourcePublic: !!publishSource
              }
            };
          };
        }
        function verifyInvariants$1(sourceIds, monitor, registry) {
          invariant(!monitor.isDragging(), 'Cannot call beginDrag while dragging.');
          sourceIds.forEach(function (sourceId) {
            invariant(registry.getSource(sourceId), 'Expected sourceIds to be registered.');
          });
        }
        function verifyGetSourceClientOffsetIsFunction(getSourceClientOffset) {
          invariant(typeof getSourceClientOffset === 'function', 'When clientOffset is provided, getSourceClientOffset must be a function.');
        }
        function verifyItemIsObject(item) {
          invariant(isObject(item), 'Item must be an object.');
        }
        function getDraggableSource(sourceIds, monitor) {
          let sourceId = null;
          for (let i = sourceIds.length - 1; i >= 0; i--) {
            if (monitor.canDragSource(sourceIds[i])) {
              sourceId = sourceIds[i];
              break;
            }
          }
          return sourceId;
        }
        function _defineProperty$4(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function _objectSpread$4(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            var ownKeys = Object.keys(source);
            if (typeof Object.getOwnPropertySymbols === 'function') {
              ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
              }));
            }
            ownKeys.forEach(function (key) {
              _defineProperty$4(target, key, source[key]);
            });
          }
          return target;
        }
        function createDrop(manager) {
          return function drop(options = {}) {
            const monitor = manager.getMonitor();
            const registry = manager.getRegistry();
            verifyInvariants(monitor);
            const targetIds = getDroppableTargets(monitor);
            // Multiple actions are dispatched here, which is why this doesn't return an action
            targetIds.forEach((targetId, index) => {
              const dropResult = determineDropResult(targetId, index, registry, monitor);
              const action = {
                type: DROP,
                payload: {
                  dropResult: _objectSpread$4({}, options, dropResult)
                }
              };
              manager.dispatch(action);
            });
          };
        }
        function verifyInvariants(monitor) {
          invariant(monitor.isDragging(), 'Cannot call drop while not dragging.');
          invariant(!monitor.didDrop(), 'Cannot call drop twice during one drag operation.');
        }
        function determineDropResult(targetId, index, registry, monitor) {
          const target = registry.getTarget(targetId);
          let dropResult = target ? target.drop(monitor, targetId) : undefined;
          verifyDropResultType(dropResult);
          if (typeof dropResult === 'undefined') {
            dropResult = index === 0 ? {} : monitor.getDropResult();
          }
          return dropResult;
        }
        function verifyDropResultType(dropResult) {
          invariant(typeof dropResult === 'undefined' || isObject(dropResult), 'Drop result must either be an object or undefined.');
        }
        function getDroppableTargets(monitor) {
          const targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
          targetIds.reverse();
          return targetIds;
        }
        function createEndDrag(manager) {
          return function endDrag() {
            const monitor = manager.getMonitor();
            const registry = manager.getRegistry();
            verifyIsDragging(monitor);
            const sourceId = monitor.getSourceId();
            if (sourceId != null) {
              const source = registry.getSource(sourceId, true);
              source.endDrag(monitor, sourceId);
              registry.unpinSource();
            }
            return {
              type: END_DRAG
            };
          };
        }
        function verifyIsDragging(monitor) {
          invariant(monitor.isDragging(), 'Cannot call endDrag while not dragging.');
        }
        function matchesType(targetType, draggedItemType) {
          if (draggedItemType === null) {
            return targetType === null;
          }
          return Array.isArray(targetType) ? targetType.some(t => t === draggedItemType) : targetType === draggedItemType;
        }
        function createHover(manager) {
          return function hover(targetIdsArg, {
            clientOffset
          } = {}) {
            verifyTargetIdsIsArray(targetIdsArg);
            const targetIds = targetIdsArg.slice(0);
            const monitor = manager.getMonitor();
            const registry = manager.getRegistry();
            const draggedItemType = monitor.getItemType();
            removeNonMatchingTargetIds(targetIds, registry, draggedItemType);
            checkInvariants(targetIds, monitor, registry);
            hoverAllTargets(targetIds, monitor, registry);
            return {
              type: HOVER,
              payload: {
                targetIds,
                clientOffset: clientOffset || null
              }
            };
          };
        }
        function verifyTargetIdsIsArray(targetIdsArg) {
          invariant(Array.isArray(targetIdsArg), 'Expected targetIds to be an array.');
        }
        function checkInvariants(targetIds, monitor, registry) {
          invariant(monitor.isDragging(), 'Cannot call hover while not dragging.');
          invariant(!monitor.didDrop(), 'Cannot call hover after drop.');
          for (let i = 0; i < targetIds.length; i++) {
            const targetId = targetIds[i];
            invariant(targetIds.lastIndexOf(targetId) === i, 'Expected targetIds to be unique in the passed array.');
            const target = registry.getTarget(targetId);
            invariant(target, 'Expected targetIds to be registered.');
          }
        }
        function removeNonMatchingTargetIds(targetIds, registry, draggedItemType) {
          // Remove those targetIds that don't match the targetType.  This
          // fixes shallow isOver which would only be non-shallow because of
          // non-matching targets.
          for (let i = targetIds.length - 1; i >= 0; i--) {
            const targetId = targetIds[i];
            const targetType = registry.getTargetType(targetId);
            if (!matchesType(targetType, draggedItemType)) {
              targetIds.splice(i, 1);
            }
          }
        }
        function hoverAllTargets(targetIds, monitor, registry) {
          // Finally call hover on all matching targets.
          targetIds.forEach(function (targetId) {
            const target = registry.getTarget(targetId);
            target.hover(monitor, targetId);
          });
        }
        function createPublishDragSource(manager) {
          return function publishDragSource() {
            const monitor = manager.getMonitor();
            if (monitor.isDragging()) {
              return {
                type: PUBLISH_DRAG_SOURCE
              };
            }
            return;
          };
        }
        function createDragDropActions(manager) {
          return {
            beginDrag: createBeginDrag(manager),
            publishDragSource: createPublishDragSource(manager),
            hover: createHover(manager),
            drop: createDrop(manager),
            endDrag: createEndDrag(manager)
          };
        }
        class DragDropManagerImpl {
          receiveBackend(backend) {
            this.backend = backend;
          }
          getMonitor() {
            return this.monitor;
          }
          getBackend() {
            return this.backend;
          }
          getRegistry() {
            return this.monitor.registry;
          }
          getActions() {
            /* eslint-disable-next-line @typescript-eslint/no-this-alias */const manager = this;
            const dispatch = this.store.dispatch;
            function bindActionCreator(actionCreator) {
              return (...args) => {
                const action = actionCreator.apply(manager, args);
                if (typeof action !== 'undefined') {
                  dispatch(action);
                }
              };
            }
            const actions = createDragDropActions(this);
            return Object.keys(actions).reduce((boundActions, key) => {
              const action = actions[key];
              boundActions[key] = bindActionCreator(action);
              return boundActions;
            }, {});
          }
          dispatch(action) {
            this.store.dispatch(action);
          }
          constructor(store, monitor) {
            this.isSetUp = false;
            this.handleRefCountChange = () => {
              const shouldSetUp = this.store.getState().refCount > 0;
              if (this.backend) {
                if (shouldSetUp && !this.isSetUp) {
                  this.backend.setup();
                  this.isSetUp = true;
                } else if (!shouldSetUp && this.isSetUp) {
                  this.backend.teardown();
                  this.isSetUp = false;
                }
              }
            };
            this.store = store;
            this.monitor = monitor;
            store.subscribe(this.handleRefCountChange);
          }
        }

        /**
         * Coordinate addition
         * @param a The first coordinate
         * @param b The second coordinate
         */
        function add(a, b) {
          return {
            x: a.x + b.x,
            y: a.y + b.y
          };
        }
        /**
         * Coordinate subtraction
         * @param a The first coordinate
         * @param b The second coordinate
         */
        function subtract(a, b) {
          return {
            x: a.x - b.x,
            y: a.y - b.y
          };
        }
        /**
         * Returns the cartesian distance of the drag source component's position, based on its position
         * at the time when the current drag operation has started, and the movement difference.
         *
         * Returns null if no item is being dragged.
         *
         * @param state The offset state to compute from
         */
        function getSourceClientOffset(state) {
          const clientOffset = state.clientOffset,
            initialClientOffset = state.initialClientOffset,
            initialSourceClientOffset = state.initialSourceClientOffset;
          if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
            return null;
          }
          return subtract(add(clientOffset, initialSourceClientOffset), initialClientOffset);
        }
        /**
         * Determines the x,y offset between the client offset and the initial client offset
         *
         * @param state The offset state to compute from
         */
        function getDifferenceFromInitialOffset(state) {
          const clientOffset = state.clientOffset,
            initialClientOffset = state.initialClientOffset;
          if (!clientOffset || !initialClientOffset) {
            return null;
          }
          return subtract(clientOffset, initialClientOffset);
        }
        const NONE = [];
        const ALL = [];
        NONE.__IS_NONE__ = true;
        ALL.__IS_ALL__ = true;
        /**
         * Determines if the given handler IDs are dirty or not.
         *
         * @param dirtyIds The set of dirty handler ids
         * @param handlerIds The set of handler ids to check
         */
        function areDirty(dirtyIds, handlerIds) {
          if (dirtyIds === NONE) {
            return false;
          }
          if (dirtyIds === ALL || typeof handlerIds === 'undefined') {
            return true;
          }
          const commonIds = intersection(handlerIds, dirtyIds);
          return commonIds.length > 0;
        }
        class DragDropMonitorImpl {
          subscribeToStateChange(listener, options = {}) {
            const handlerIds = options.handlerIds;
            invariant(typeof listener === 'function', 'listener must be a function.');
            invariant(typeof handlerIds === 'undefined' || Array.isArray(handlerIds), 'handlerIds, when specified, must be an array of strings.');
            let prevStateId = this.store.getState().stateId;
            const handleChange = () => {
              const state = this.store.getState();
              const currentStateId = state.stateId;
              try {
                const canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !areDirty(state.dirtyHandlerIds, handlerIds);
                if (!canSkipListener) {
                  listener();
                }
              } finally {
                prevStateId = currentStateId;
              }
            };
            return this.store.subscribe(handleChange);
          }
          subscribeToOffsetChange(listener) {
            invariant(typeof listener === 'function', 'listener must be a function.');
            let previousState = this.store.getState().dragOffset;
            const handleChange = () => {
              const nextState = this.store.getState().dragOffset;
              if (nextState === previousState) {
                return;
              }
              previousState = nextState;
              listener();
            };
            return this.store.subscribe(handleChange);
          }
          canDragSource(sourceId) {
            if (!sourceId) {
              return false;
            }
            const source = this.registry.getSource(sourceId);
            invariant(source, `Expected to find a valid source. sourceId=${sourceId}`);
            if (this.isDragging()) {
              return false;
            }
            return source.canDrag(this, sourceId);
          }
          canDropOnTarget(targetId) {
            // undefined on initial render
            if (!targetId) {
              return false;
            }
            const target = this.registry.getTarget(targetId);
            invariant(target, `Expected to find a valid target. targetId=${targetId}`);
            if (!this.isDragging() || this.didDrop()) {
              return false;
            }
            const targetType = this.registry.getTargetType(targetId);
            const draggedItemType = this.getItemType();
            return matchesType(targetType, draggedItemType) && target.canDrop(this, targetId);
          }
          isDragging() {
            return Boolean(this.getItemType());
          }
          isDraggingSource(sourceId) {
            // undefined on initial render
            if (!sourceId) {
              return false;
            }
            const source = this.registry.getSource(sourceId, true);
            invariant(source, `Expected to find a valid source. sourceId=${sourceId}`);
            if (!this.isDragging() || !this.isSourcePublic()) {
              return false;
            }
            const sourceType = this.registry.getSourceType(sourceId);
            const draggedItemType = this.getItemType();
            if (sourceType !== draggedItemType) {
              return false;
            }
            return source.isDragging(this, sourceId);
          }
          isOverTarget(targetId, options = {
            shallow: false
          }) {
            // undefined on initial render
            if (!targetId) {
              return false;
            }
            const shallow = options.shallow;
            if (!this.isDragging()) {
              return false;
            }
            const targetType = this.registry.getTargetType(targetId);
            const draggedItemType = this.getItemType();
            if (draggedItemType && !matchesType(targetType, draggedItemType)) {
              return false;
            }
            const targetIds = this.getTargetIds();
            if (!targetIds.length) {
              return false;
            }
            const index = targetIds.indexOf(targetId);
            if (shallow) {
              return index === targetIds.length - 1;
            } else {
              return index > -1;
            }
          }
          getItemType() {
            return this.store.getState().dragOperation.itemType;
          }
          getItem() {
            return this.store.getState().dragOperation.item;
          }
          getSourceId() {
            return this.store.getState().dragOperation.sourceId;
          }
          getTargetIds() {
            return this.store.getState().dragOperation.targetIds;
          }
          getDropResult() {
            return this.store.getState().dragOperation.dropResult;
          }
          didDrop() {
            return this.store.getState().dragOperation.didDrop;
          }
          isSourcePublic() {
            return Boolean(this.store.getState().dragOperation.isSourcePublic);
          }
          getInitialClientOffset() {
            return this.store.getState().dragOffset.initialClientOffset;
          }
          getInitialSourceClientOffset() {
            return this.store.getState().dragOffset.initialSourceClientOffset;
          }
          getClientOffset() {
            return this.store.getState().dragOffset.clientOffset;
          }
          getSourceClientOffset() {
            return getSourceClientOffset(this.store.getState().dragOffset);
          }
          getDifferenceFromInitialOffset() {
            return getDifferenceFromInitialOffset(this.store.getState().dragOffset);
          }
          constructor(store, registry) {
            this.store = store;
            this.registry = registry;
          }
        }

        // Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
        // have WebKitMutationObserver but not un-prefixed MutationObserver.
        // Must use `global` or `self` instead of `window` to work in both frames and web
        // workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.
        /* globals self */
        const scope = typeof global !== 'undefined' ? global : self;
        const BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
        function makeRequestCallFromTimer(callback) {
          return function requestCall() {
            // We dispatch a timeout with a specified delay of 0 for engines that
            // can reliably accommodate that request. This will usually be snapped
            // to a 4 milisecond delay, but once we're flushing, there's no delay
            // between events.
            const timeoutHandle = setTimeout(handleTimer, 0);
            // However, since this timer gets frequently dropped in Firefox
            // workers, we enlist an interval handle that will try to fire
            // an event 20 times per second until it succeeds.
            const intervalHandle = setInterval(handleTimer, 50);
            function handleTimer() {
              // Whichever timer succeeds will cancel both timers and
              // execute the callback.
              clearTimeout(timeoutHandle);
              clearInterval(intervalHandle);
              callback();
            }
          };
        }
        // To request a high priority event, we induce a mutation observer by toggling
        // the text of a text node between "1" and "-1".
        function makeRequestCallFromMutationObserver(callback) {
          let toggle = 1;
          const observer = new BrowserMutationObserver(callback);
          const node = document.createTextNode('');
          observer.observe(node, {
            characterData: true
          });
          return function requestCall() {
            toggle = -toggle;
            node.data = toggle;
          };
        }
        const makeRequestCall = typeof BrowserMutationObserver === 'function' ?
        // reliably everywhere they are implemented.
        // They are implemented in all modern browsers.
        //
        // - Android 4-4.3
        // - Chrome 26-34
        // - Firefox 14-29
        // - Internet Explorer 11
        // - iPad Safari 6-7.1
        // - iPhone Safari 7-7.1
        // - Safari 6-7
        makeRequestCallFromMutationObserver :
        // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
        // 11-12, and in web workers in many engines.
        // Although message channels yield to any queued rendering and IO tasks, they
        // would be better than imposing the 4ms delay of timers.
        // However, they do not work reliably in Internet Explorer or Safari.
        // Internet Explorer 10 is the only browser that has setImmediate but does
        // not have MutationObservers.
        // Although setImmediate yields to the browser's renderer, it would be
        // preferrable to falling back to setTimeout since it does not have
        // the minimum 4ms penalty.
        // Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
        // Desktop to a lesser extent) that renders both setImmediate and
        // MessageChannel useless for the purposes of ASAP.
        // https://github.com/kriskowal/q/issues/396
        // Timers are implemented universally.
        // We fall back to timers in workers in most engines, and in foreground
        // contexts in the following browsers.
        // However, note that even this simple case requires nuances to operate in a
        // broad spectrum of browsers.
        //
        // - Firefox 3-13
        // - Internet Explorer 6-9
        // - iPad Safari 4.3
        // - Lynx 2.8.7
        makeRequestCallFromTimer;
        class AsapQueue {
          // Use the fastest means possible to execute a task in its own turn, with
          // priority over other events including IO, animation, reflow, and redraw
          // events in browsers.
          //
          // An exception thrown by a task will permanently interrupt the processing of
          // subsequent tasks. The higher level `asap` function ensures that if an
          // exception is thrown by a task, that the task queue will continue flushing as
          // soon as possible, but if you use `rawAsap` directly, you are responsible to
          // either ensure that no exceptions are thrown from your task, or to manually
          // call `rawAsap.requestFlush` if an exception is thrown.
          enqueueTask(task) {
            const q = this.queue,
              requestFlush = this.requestFlush;
            if (!q.length) {
              requestFlush();
              this.flushing = true;
            }
            // Equivalent to push, but avoids a function call.
            q[q.length] = task;
          }
          constructor() {
            this.queue = [];
            // We queue errors to ensure they are thrown in right order (FIFO).
            // Array-as-queue is good enough here, since we are just dealing with exceptions.
            this.pendingErrors = [];
            // Once a flush has been requested, no further calls to `requestFlush` are
            // necessary until the next `flush` completes.
            // @ts-ignore
            this.flushing = false;
            // The position of the next task to execute in the task queue. This is
            // preserved between calls to `flush` so that it can be resumed if
            // a task throws an exception.
            this.index = 0;
            // If a task schedules additional tasks recursively, the task queue can grow
            // unbounded. To prevent memory exhaustion, the task queue will periodically
            // truncate already-completed tasks.
            this.capacity = 1024;
            // The flush function processes all tasks that have been scheduled with
            // `rawAsap` unless and until one of those tasks throws an exception.
            // If a task throws an exception, `flush` ensures that its state will remain
            // consistent and will resume where it left off when called again.
            // However, `flush` does not make any arrangements to be called again if an
            // exception is thrown.
            this.flush = () => {
              const q = this.queue;
              while (this.index < q.length) {
                const currentIndex = this.index;
                // Advance the index before calling the task. This ensures that we will
                // begin flushing on the next task the task throws an error.
                this.index++;
                q[currentIndex].call();
                // Prevent leaking memory for long chains of recursive calls to `asap`.
                // If we call `asap` within tasks scheduled by `asap`, the queue will
                // grow, but to avoid an O(n) walk for every task we execute, we don't
                // shift tasks off the queue after they have been executed.
                // Instead, we periodically shift 1024 tasks off the queue.
                if (this.index > this.capacity) {
                  // Manually shift all values starting at the index back to the
                  // beginning of the queue.
                  for (let scan = 0, newLength = q.length - this.index; scan < newLength; scan++) {
                    q[scan] = q[scan + this.index];
                  }
                  q.length -= this.index;
                  this.index = 0;
                }
              }
              q.length = 0;
              this.index = 0;
              this.flushing = false;
            };
            // In a web browser, exceptions are not fatal. However, to avoid
            // slowing down the queue of pending tasks, we rethrow the error in a
            // lower priority turn.
            this.registerPendingError = err => {
              this.pendingErrors.push(err);
              this.requestErrorThrow();
            };
            // `requestFlush` requests that the high priority event queue be flushed as
            // soon as possible.
            // This is useful to prevent an error thrown in a task from stalling the event
            // queue if the exception handled by Node.js’s
            // `process.on("uncaughtException")` or by a domain.
            // `requestFlush` is implemented using a strategy based on data collected from
            // every available SauceLabs Selenium web driver worker at time of writing.
            // https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593
            this.requestFlush = makeRequestCall(this.flush);
            this.requestErrorThrow = makeRequestCallFromTimer(() => {
              // Throw first error
              if (this.pendingErrors.length) {
                throw this.pendingErrors.shift();
              }
            });
          }
        } // The message channel technique was discovered by Malte Ubl and was the
        // original foundation for this library.
        // http://www.nonblocking.io/2011/06/windownexttick.html
        // Safari 6.0.5 (at least) intermittently fails to create message ports on a
        // page's first load. Thankfully, this version of Safari supports
        // MutationObservers, so we don't need to fall back in that case.
        // function makeRequestCallFromMessageChannel(callback) {
        //     var channel = new MessageChannel();
        //     channel.port1.onmessage = callback;
        //     return function requestCall() {
        //         channel.port2.postMessage(0);
        //     };
        // }
        // For reasons explained above, we are also unable to use `setImmediate`
        // under any circumstances.
        // Even if we were, there is another bug in Internet Explorer 10.
        // It is not sufficient to assign `setImmediate` to `requestFlush` because
        // `setImmediate` must be called *by name* and therefore must be wrapped in a
        // closure.
        // Never forget.
        // function makeRequestCallFromSetImmediate(callback) {
        //     return function requestCall() {
        //         setImmediate(callback);
        //     };
        // }
        // Safari 6.0 has a problem where timers will get lost while the user is
        // scrolling. This problem does not impact ASAP because Safari 6.0 supports
        // mutation observers, so that implementation is used instead.
        // However, if we ever elect to use timers in Safari, the prevalent work-around
        // is to add a scroll event listener that calls for a flush.
        // `setTimeout` does not call the passed callback if the delay is less than
        // approximately 7 in web workers in Firefox 8 through 18, and sometimes not
        // even then.
        // This is for `asap.js` only.
        // Its name will be periodically randomized to break any code that depends on
        // // its existence.
        // rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer
        // ASAP was originally a nextTick shim included in Q. This was factored out
        // into this ASAP package. It was later adapted to RSVP which made further
        // amendments. These decisions, particularly to marginalize MessageChannel and
        // to capture the MutationObserver implementation in a closure, were integrated
        // back into ASAP proper.
        // https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

        // `call`, just like a function.
        class RawTask {
          call() {
            try {
              this.task && this.task();
            } catch (error) {
              this.onError(error);
            } finally {
              this.task = null;
              this.release(this);
            }
          }
          constructor(onError, release) {
            this.onError = onError;
            this.release = release;
            this.task = null;
          }
        }
        class TaskFactory {
          create(task) {
            const tasks = this.freeTasks;
            const t1 = tasks.length ? tasks.pop() : new RawTask(this.onError, t => tasks[tasks.length] = t);
            t1.task = task;
            return t1;
          }
          constructor(onError) {
            this.onError = onError;
            this.freeTasks = [];
          }
        }
        const asapQueue = new AsapQueue();
        const taskFactory = new TaskFactory(asapQueue.registerPendingError);
        /**
         * Calls a task as soon as possible after returning, in its own event, with priority
         * over other events like animation, reflow, and repaint. An error thrown from an
         * event will not interrupt, nor even substantially slow down the processing of
         * other events, but will be rather postponed to a lower priority event.
         * @param {{call}} task A callable object, typically a function that takes no
         * arguments.
         */
        function asap(task) {
          asapQueue.enqueueTask(taskFactory.create(task));
        }
        const ADD_SOURCE = 'dnd-core/ADD_SOURCE';
        const ADD_TARGET = 'dnd-core/ADD_TARGET';
        const REMOVE_SOURCE = 'dnd-core/REMOVE_SOURCE';
        const REMOVE_TARGET = 'dnd-core/REMOVE_TARGET';
        function addSource(sourceId) {
          return {
            type: ADD_SOURCE,
            payload: {
              sourceId
            }
          };
        }
        function addTarget(targetId) {
          return {
            type: ADD_TARGET,
            payload: {
              targetId
            }
          };
        }
        function removeSource(sourceId) {
          return {
            type: REMOVE_SOURCE,
            payload: {
              sourceId
            }
          };
        }
        function removeTarget(targetId) {
          return {
            type: REMOVE_TARGET,
            payload: {
              targetId
            }
          };
        }
        function validateSourceContract(source) {
          invariant(typeof source.canDrag === 'function', 'Expected canDrag to be a function.');
          invariant(typeof source.beginDrag === 'function', 'Expected beginDrag to be a function.');
          invariant(typeof source.endDrag === 'function', 'Expected endDrag to be a function.');
        }
        function validateTargetContract(target) {
          invariant(typeof target.canDrop === 'function', 'Expected canDrop to be a function.');
          invariant(typeof target.hover === 'function', 'Expected hover to be a function.');
          invariant(typeof target.drop === 'function', 'Expected beginDrag to be a function.');
        }
        function validateType(type, allowArray) {
          if (allowArray && Array.isArray(type)) {
            type.forEach(t => validateType(t, false));
            return;
          }
          invariant(typeof type === 'string' || typeof type === 'symbol', allowArray ? 'Type can only be a string, a symbol, or an array of either.' : 'Type can only be a string or a symbol.');
        }
        var HandlerRole;
        (function (HandlerRole) {
          HandlerRole["SOURCE"] = "SOURCE";
          HandlerRole["TARGET"] = "TARGET";
        })(HandlerRole || (HandlerRole = {}));
        let nextUniqueId = 0;
        function getNextUniqueId() {
          return nextUniqueId++;
        }
        function getNextHandlerId(role) {
          const id = getNextUniqueId().toString();
          switch (role) {
            case HandlerRole.SOURCE:
              return `S${id}`;
            case HandlerRole.TARGET:
              return `T${id}`;
            default:
              throw new Error(`Unknown Handler Role: ${role}`);
          }
        }
        function parseRoleFromHandlerId(handlerId) {
          switch (handlerId[0]) {
            case 'S':
              return HandlerRole.SOURCE;
            case 'T':
              return HandlerRole.TARGET;
            default:
              throw new Error(`Cannot parse handler ID: ${handlerId}`);
          }
        }
        function mapContainsValue(map, searchValue) {
          const entries = map.entries();
          let isDone = false;
          do {
            const _entries$next = entries.next(),
              done = _entries$next.done,
              _entries$next$value = _slicedToArray(_entries$next.value, 2),
              value = _entries$next$value[1];
            if (value === searchValue) {
              return true;
            }
            isDone = !!done;
          } while (!isDone);
          return false;
        }
        class HandlerRegistryImpl {
          addSource(type, source) {
            validateType(type);
            validateSourceContract(source);
            const sourceId = this.addHandler(HandlerRole.SOURCE, type, source);
            this.store.dispatch(addSource(sourceId));
            return sourceId;
          }
          addTarget(type, target) {
            validateType(type, true);
            validateTargetContract(target);
            const targetId = this.addHandler(HandlerRole.TARGET, type, target);
            this.store.dispatch(addTarget(targetId));
            return targetId;
          }
          containsHandler(handler) {
            return mapContainsValue(this.dragSources, handler) || mapContainsValue(this.dropTargets, handler);
          }
          getSource(sourceId, includePinned = false) {
            invariant(this.isSourceId(sourceId), 'Expected a valid source ID.');
            const isPinned = includePinned && sourceId === this.pinnedSourceId;
            const source = isPinned ? this.pinnedSource : this.dragSources.get(sourceId);
            return source;
          }
          getTarget(targetId) {
            invariant(this.isTargetId(targetId), 'Expected a valid target ID.');
            return this.dropTargets.get(targetId);
          }
          getSourceType(sourceId) {
            invariant(this.isSourceId(sourceId), 'Expected a valid source ID.');
            return this.types.get(sourceId);
          }
          getTargetType(targetId) {
            invariant(this.isTargetId(targetId), 'Expected a valid target ID.');
            return this.types.get(targetId);
          }
          isSourceId(handlerId) {
            const role = parseRoleFromHandlerId(handlerId);
            return role === HandlerRole.SOURCE;
          }
          isTargetId(handlerId) {
            const role = parseRoleFromHandlerId(handlerId);
            return role === HandlerRole.TARGET;
          }
          removeSource(sourceId) {
            invariant(this.getSource(sourceId), 'Expected an existing source.');
            this.store.dispatch(removeSource(sourceId));
            asap(() => {
              this.dragSources.delete(sourceId);
              this.types.delete(sourceId);
            });
          }
          removeTarget(targetId) {
            invariant(this.getTarget(targetId), 'Expected an existing target.');
            this.store.dispatch(removeTarget(targetId));
            this.dropTargets.delete(targetId);
            this.types.delete(targetId);
          }
          pinSource(sourceId) {
            const source = this.getSource(sourceId);
            invariant(source, 'Expected an existing source.');
            this.pinnedSourceId = sourceId;
            this.pinnedSource = source;
          }
          unpinSource() {
            invariant(this.pinnedSource, 'No source is pinned at the time.');
            this.pinnedSourceId = null;
            this.pinnedSource = null;
          }
          addHandler(role, type, handler) {
            const id = getNextHandlerId(role);
            this.types.set(id, type);
            if (role === HandlerRole.SOURCE) {
              this.dragSources.set(id, handler);
            } else if (role === HandlerRole.TARGET) {
              this.dropTargets.set(id, handler);
            }
            return id;
          }
          constructor(store) {
            this.types = new Map();
            this.dragSources = new Map();
            this.dropTargets = new Map();
            this.pinnedSourceId = null;
            this.pinnedSource = null;
            this.store = store;
          }
        }
        const strictEquality = (a, b) => a === b;
        /**
         * Determine if two cartesian coordinate offsets are equal
         * @param offsetA
         * @param offsetB
         */
        function areCoordsEqual(offsetA, offsetB) {
          if (!offsetA && !offsetB) {
            return true;
          } else if (!offsetA || !offsetB) {
            return false;
          } else {
            return offsetA.x === offsetB.x && offsetA.y === offsetB.y;
          }
        }
        /**
         * Determines if two arrays of items are equal
         * @param a The first array of items
         * @param b The second array of items
         */
        function areArraysEqual(a, b, isEqual = strictEquality) {
          if (a.length !== b.length) {
            return false;
          }
          for (let i = 0; i < a.length; ++i) {
            if (!isEqual(a[i], b[i])) {
              return false;
            }
          }
          return true;
        }
        function reduce$5(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        _state = NONE, action) {
          switch (action.type) {
            case HOVER:
              break;
            case ADD_SOURCE:
            case ADD_TARGET:
            case REMOVE_TARGET:
            case REMOVE_SOURCE:
              return NONE;
            case BEGIN_DRAG:
            case PUBLISH_DRAG_SOURCE:
            case END_DRAG:
            case DROP:
            default:
              return ALL;
          }
          const _action$payload = action.payload,
            _action$payload$targe = _action$payload.targetIds,
            targetIds = _action$payload$targe === void 0 ? [] : _action$payload$targe,
            _action$payload$prevT = _action$payload.prevTargetIds,
            prevTargetIds = _action$payload$prevT === void 0 ? [] : _action$payload$prevT;
          const result = xor(targetIds, prevTargetIds);
          const didChange = result.length > 0 || !areArraysEqual(targetIds, prevTargetIds);
          if (!didChange) {
            return NONE;
          }
          // Check the target ids at the innermost position. If they are valid, add them
          // to the result
          const prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
          const innermostTargetId = targetIds[targetIds.length - 1];
          if (prevInnermostTargetId !== innermostTargetId) {
            if (prevInnermostTargetId) {
              result.push(prevInnermostTargetId);
            }
            if (innermostTargetId) {
              result.push(innermostTargetId);
            }
          }
          return result;
        }
        function _defineProperty$3(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function _objectSpread$3(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            var ownKeys = Object.keys(source);
            if (typeof Object.getOwnPropertySymbols === 'function') {
              ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
              }));
            }
            ownKeys.forEach(function (key) {
              _defineProperty$3(target, key, source[key]);
            });
          }
          return target;
        }
        const initialState$1 = {
          initialSourceClientOffset: null,
          initialClientOffset: null,
          clientOffset: null
        };
        function reduce$4(state = initialState$1, action) {
          const payload = action.payload;
          switch (action.type) {
            case INIT_COORDS:
            case BEGIN_DRAG:
              return {
                initialSourceClientOffset: payload.sourceClientOffset,
                initialClientOffset: payload.clientOffset,
                clientOffset: payload.clientOffset
              };
            case HOVER:
              if (areCoordsEqual(state.clientOffset, payload.clientOffset)) {
                return state;
              }
              return _objectSpread$3({}, state, {
                clientOffset: payload.clientOffset
              });
            case END_DRAG:
            case DROP:
              return initialState$1;
            default:
              return state;
          }
        }
        function _defineProperty$2(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function _objectSpread$2(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            var ownKeys = Object.keys(source);
            if (typeof Object.getOwnPropertySymbols === 'function') {
              ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
              }));
            }
            ownKeys.forEach(function (key) {
              _defineProperty$2(target, key, source[key]);
            });
          }
          return target;
        }
        const initialState = {
          itemType: null,
          item: null,
          sourceId: null,
          targetIds: [],
          dropResult: null,
          didDrop: false,
          isSourcePublic: null
        };
        function reduce$3(state = initialState, action) {
          const payload = action.payload;
          switch (action.type) {
            case BEGIN_DRAG:
              return _objectSpread$2({}, state, {
                itemType: payload.itemType,
                item: payload.item,
                sourceId: payload.sourceId,
                isSourcePublic: payload.isSourcePublic,
                dropResult: null,
                didDrop: false
              });
            case PUBLISH_DRAG_SOURCE:
              return _objectSpread$2({}, state, {
                isSourcePublic: true
              });
            case HOVER:
              return _objectSpread$2({}, state, {
                targetIds: payload.targetIds
              });
            case REMOVE_TARGET:
              if (state.targetIds.indexOf(payload.targetId) === -1) {
                return state;
              }
              return _objectSpread$2({}, state, {
                targetIds: without$1(state.targetIds, payload.targetId)
              });
            case DROP:
              return _objectSpread$2({}, state, {
                dropResult: payload.dropResult,
                didDrop: true,
                targetIds: []
              });
            case END_DRAG:
              return _objectSpread$2({}, state, {
                itemType: null,
                item: null,
                sourceId: null,
                dropResult: null,
                didDrop: false,
                isSourcePublic: null,
                targetIds: []
              });
            default:
              return state;
          }
        }
        function reduce$2(state = 0, action) {
          switch (action.type) {
            case ADD_SOURCE:
            case ADD_TARGET:
              return state + 1;
            case REMOVE_SOURCE:
            case REMOVE_TARGET:
              return state - 1;
            default:
              return state;
          }
        }
        function reduce$1(state = 0) {
          return state + 1;
        }
        function _defineProperty$1(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function _objectSpread$1(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            var ownKeys = Object.keys(source);
            if (typeof Object.getOwnPropertySymbols === 'function') {
              ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
              }));
            }
            ownKeys.forEach(function (key) {
              _defineProperty$1(target, key, source[key]);
            });
          }
          return target;
        }
        function reduce(state = {}, action) {
          return {
            dirtyHandlerIds: reduce$5(state.dirtyHandlerIds, {
              type: action.type,
              payload: _objectSpread$1({}, action.payload, {
                prevTargetIds: get(state, 'dragOperation.targetIds', [])
              })
            }),
            dragOffset: reduce$4(state.dragOffset, action),
            refCount: reduce$2(state.refCount, action),
            dragOperation: reduce$3(state.dragOperation, action),
            stateId: reduce$1(state.stateId)
          };
        }
        function createDragDropManager(backendFactory, globalContext = undefined, backendOptions = {}, debugMode = false) {
          const store = makeStoreInstance(debugMode);
          const monitor = new DragDropMonitorImpl(store, new HandlerRegistryImpl(store));
          const manager = new DragDropManagerImpl(store, monitor);
          const backend = backendFactory(manager, globalContext, backendOptions);
          manager.receiveBackend(backend);
          return manager;
        }
        function makeStoreInstance(debugMode) {
          // TODO: if we ever make a react-native version of this,
          // we'll need to consider how to pull off dev-tooling
          const reduxDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__;
          return createStore(reduce, debugMode && reduxDevTools && reduxDevTools({
            name: 'dnd-core',
            instanceId: 'dnd-core'
          }));
        }
        function _objectWithoutProperties(source, excluded) {
          if (source == null) return {};
          var target = _objectWithoutPropertiesLoose(source, excluded);
          var key, i;
          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
            for (i = 0; i < sourceSymbolKeys.length; i++) {
              key = sourceSymbolKeys[i];
              if (excluded.indexOf(key) >= 0) continue;
              if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
              target[key] = source[key];
            }
          }
          return target;
        }
        function _objectWithoutPropertiesLoose(source, excluded) {
          if (source == null) return {};
          var target = {};
          var sourceKeys = Object.keys(source);
          var key, i;
          for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
          }
          return target;
        }
        let refCount = 0;
        const INSTANCE_SYM = Symbol.for('__REACT_DND_CONTEXT_INSTANCE__');
        var DndProvider = exports("D", /*#__PURE__*/reactExports.memo(function DndProvider(_param) {
          var children = _param.children,
            props = _objectWithoutProperties(_param, ["children"]);
          const _getDndContextValue = getDndContextValue(props),
            _getDndContextValue2 = _slicedToArray(_getDndContextValue, 2),
            manager = _getDndContextValue2[0],
            isGlobalInstance = _getDndContextValue2[1];
          /**
          * If the global context was used to store the DND context
          * then where theres no more references to it we should
          * clean it up to avoid memory leaks
          */
          reactExports.useEffect(() => {
            if (isGlobalInstance) {
              const context = getGlobalContext();
              ++refCount;
              return () => {
                if (--refCount === 0) {
                  context[INSTANCE_SYM] = null;
                }
              };
            }
            return;
          }, []);
          return /*#__PURE__*/jsxRuntimeExports.jsx(DndContext.Provider, {
            value: manager,
            children: children
          });
        }));
        function getDndContextValue(props) {
          if ('manager' in props) {
            const manager = {
              dragDropManager: props.manager
            };
            return [manager, false];
          }
          const manager = createSingletonDndContext(props.backend, props.context, props.options, props.debugMode);
          const isGlobalInstance = !props.context;
          return [manager, isGlobalInstance];
        }
        function createSingletonDndContext(backend, context = getGlobalContext(), options, debugMode) {
          const ctx = context;
          if (!ctx[INSTANCE_SYM]) {
            ctx[INSTANCE_SYM] = {
              dragDropManager: createDragDropManager(backend, context, options, debugMode)
            };
          }
          return ctx[INSTANCE_SYM];
        }
        function getGlobalContext() {
          return typeof global !== 'undefined' ? global : window;
        }
        const ErrorOutlineOutlined = exports("E", createSvgIcon(/*#__PURE__*/jsxRuntimeExports.jsx("path", {
          d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
        }), 'ErrorOutlineOutlined'));

        // cheap lodash replacements
        function memoize(fn) {
          let result = null;
          const memoized = () => {
            if (result == null) {
              result = fn();
            }
            return result;
          };
          return memoized;
        }
        /**
         * drop-in replacement for _.without
         */
        function without(items, item) {
          return items.filter(i => i !== item);
        }
        function union(itemsA, itemsB) {
          const set = new Set();
          const insertItem = item => set.add(item);
          itemsA.forEach(insertItem);
          itemsB.forEach(insertItem);
          const result = [];
          set.forEach(key => result.push(key));
          return result;
        }
        class EnterLeaveCounter {
          enter(enteringNode) {
            const previousLength = this.entered.length;
            const isNodeEntered = node => this.isNodeInDocument(node) && (!node.contains || node.contains(enteringNode));
            this.entered = union(this.entered.filter(isNodeEntered), [enteringNode]);
            return previousLength === 0 && this.entered.length > 0;
          }
          leave(leavingNode) {
            const previousLength = this.entered.length;
            this.entered = without(this.entered.filter(this.isNodeInDocument), leavingNode);
            return previousLength > 0 && this.entered.length === 0;
          }
          reset() {
            this.entered = [];
          }
          constructor(isNodeInDocument) {
            this.entered = [];
            this.isNodeInDocument = isNodeInDocument;
          }
        }
        class NativeDragSource {
          initializeExposedProperties() {
            Object.keys(this.config.exposeProperties).forEach(property => {
              Object.defineProperty(this.item, property, {
                configurable: true,
                enumerable: true,
                get() {
                  // eslint-disable-next-line no-console
                  console.warn(`Browser doesn't allow reading "${property}" until the drop event.`);
                  return null;
                }
              });
            });
          }
          loadDataTransfer(dataTransfer) {
            if (dataTransfer) {
              const newProperties = {};
              Object.keys(this.config.exposeProperties).forEach(property => {
                const propertyFn = this.config.exposeProperties[property];
                if (propertyFn != null) {
                  newProperties[property] = {
                    value: propertyFn(dataTransfer, this.config.matchesTypes),
                    configurable: true,
                    enumerable: true
                  };
                }
              });
              Object.defineProperties(this.item, newProperties);
            }
          }
          canDrag() {
            return true;
          }
          beginDrag() {
            return this.item;
          }
          isDragging(monitor, handle) {
            return handle === monitor.getSourceId();
          }
          endDrag() {
            // empty
          }
          constructor(config) {
            this.config = config;
            this.item = {};
            this.initializeExposedProperties();
          }
        }
        const FILE = '__NATIVE_FILE__';
        const URL = '__NATIVE_URL__';
        const TEXT = '__NATIVE_TEXT__';
        const HTML = '__NATIVE_HTML__';
        const NativeTypes = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
          __proto__: null,
          FILE,
          HTML,
          TEXT,
          URL
        }, Symbol.toStringTag, {
          value: 'Module'
        }));
        function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
          const result = typesToTry.reduce((resultSoFar, typeToTry) => resultSoFar || dataTransfer.getData(typeToTry), '');
          return result != null ? result : defaultValue;
        }
        const nativeTypesConfig = {
          [FILE]: {
            exposeProperties: {
              files: dataTransfer => Array.prototype.slice.call(dataTransfer.files),
              items: dataTransfer => dataTransfer.items,
              dataTransfer: _dataTransfer => _dataTransfer
            },
            matchesTypes: ['Files']
          },
          [HTML]: {
            exposeProperties: {
              html: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, ''),
              dataTransfer: _dataTransfer2 => _dataTransfer2
            },
            matchesTypes: ['Html', 'text/html']
          },
          [URL]: {
            exposeProperties: {
              urls: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, '').split('\n'),
              dataTransfer: _dataTransfer3 => _dataTransfer3
            },
            matchesTypes: ['Url', 'text/uri-list']
          },
          [TEXT]: {
            exposeProperties: {
              text: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, ''),
              dataTransfer: _dataTransfer4 => _dataTransfer4
            },
            matchesTypes: ['Text', 'text/plain']
          }
        };
        function createNativeDragSource(type, dataTransfer) {
          const config = nativeTypesConfig[type];
          if (!config) {
            throw new Error(`native type ${type} has no configuration`);
          }
          const result = new NativeDragSource(config);
          result.loadDataTransfer(dataTransfer);
          return result;
        }
        function matchNativeItemType(dataTransfer) {
          if (!dataTransfer) {
            return null;
          }
          const dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);
          return Object.keys(nativeTypesConfig).filter(nativeItemType => {
            const typeConfig = nativeTypesConfig[nativeItemType];
            if (!(typeConfig === null || typeConfig === void 0 ? void 0 : typeConfig.matchesTypes)) {
              return false;
            }
            return typeConfig.matchesTypes.some(t => dataTransferTypes.indexOf(t) > -1);
          })[0] || null;
        }
        const isFirefox = memoize(() => /firefox/i.test(navigator.userAgent));
        const isSafari = memoize(() => Boolean(window.safari));
        class MonotonicInterpolant {
          interpolate(x) {
            const xs = this.xs,
              ys = this.ys,
              c1s = this.c1s,
              c2s = this.c2s,
              c3s = this.c3s;
            // The rightmost point in the dataset should give an exact result
            let i = xs.length - 1;
            if (x === xs[i]) {
              return ys[i];
            }
            // Search for the interval x is in, returning the corresponding y if x is one of the original xs
            let low = 0;
            let high = c3s.length - 1;
            let mid;
            while (low <= high) {
              mid = Math.floor(0.5 * (low + high));
              const xHere = xs[mid];
              if (xHere < x) {
                low = mid + 1;
              } else if (xHere > x) {
                high = mid - 1;
              } else {
                return ys[mid];
              }
            }
            i = Math.max(0, high);
            // Interpolate
            const diff = x - xs[i];
            const diffSq = diff * diff;
            return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
          }
          constructor(xs, ys) {
            const length = xs.length;
            // Rearrange xs and ys so that xs is sorted
            const indexes = [];
            for (let i = 0; i < length; i++) {
              indexes.push(i);
            }
            indexes.sort((a, b) => xs[a] < xs[b] ? -1 : 1);
            const dxs = [];
            const ms = [];
            let dx;
            let dy;
            for (let i1 = 0; i1 < length - 1; i1++) {
              dx = xs[i1 + 1] - xs[i1];
              dy = ys[i1 + 1] - ys[i1];
              dxs.push(dx);
              ms.push(dy / dx);
            }
            // Get degree-1 coefficients
            const c1s = [ms[0]];
            for (let i2 = 0; i2 < dxs.length - 1; i2++) {
              const m2 = ms[i2];
              const mNext = ms[i2 + 1];
              if (m2 * mNext <= 0) {
                c1s.push(0);
              } else {
                dx = dxs[i2];
                const dxNext = dxs[i2 + 1];
                const common = dx + dxNext;
                c1s.push(3 * common / ((common + dxNext) / m2 + (common + dx) / mNext));
              }
            }
            c1s.push(ms[ms.length - 1]);
            // Get degree-2 and degree-3 coefficients
            const c2s = [];
            const c3s = [];
            let m;
            for (let i3 = 0; i3 < c1s.length - 1; i3++) {
              m = ms[i3];
              const c1 = c1s[i3];
              const invDx = 1 / dxs[i3];
              const common = c1 + c1s[i3 + 1] - m - m;
              c2s.push((m - c1 - common) * invDx);
              c3s.push(common * invDx * invDx);
            }
            this.xs = xs;
            this.ys = ys;
            this.c1s = c1s;
            this.c2s = c2s;
            this.c3s = c3s;
          }
        }
        const ELEMENT_NODE$1 = 1;
        function getNodeClientOffset$1(node) {
          const el = node.nodeType === ELEMENT_NODE$1 ? node : node.parentElement;
          if (!el) {
            return null;
          }
          const _el$getBoundingClient = el.getBoundingClientRect(),
            top = _el$getBoundingClient.top,
            left = _el$getBoundingClient.left;
          return {
            x: left,
            y: top
          };
        }
        function getEventClientOffset$1(e) {
          return {
            x: e.clientX,
            y: e.clientY
          };
        }
        function isImageNode(node) {
          var ref;
          return node.nodeName === 'IMG' && (isFirefox() || !((ref = document.documentElement) === null || ref === void 0 ? void 0 : ref.contains(node)));
        }
        function getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight) {
          let dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
          let dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;
          // Work around @2x coordinate discrepancies in browsers
          if (isSafari() && isImage) {
            dragPreviewHeight /= window.devicePixelRatio;
            dragPreviewWidth /= window.devicePixelRatio;
          }
          return {
            dragPreviewWidth,
            dragPreviewHeight
          };
        }
        function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint) {
          // The browsers will use the image intrinsic size under different conditions.
          // Firefox only cares if it's an image, but WebKit also wants it to be detached.
          const isImage = isImageNode(dragPreview);
          const dragPreviewNode = isImage ? sourceNode : dragPreview;
          const dragPreviewNodeOffsetFromClient = getNodeClientOffset$1(dragPreviewNode);
          const offsetFromDragPreview = {
            x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
            y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
          };
          const sourceWidth = sourceNode.offsetWidth,
            sourceHeight = sourceNode.offsetHeight;
          const anchorX = anchorPoint.anchorX,
            anchorY = anchorPoint.anchorY;
          const _getDragPreviewSize = getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight),
            dragPreviewWidth = _getDragPreviewSize.dragPreviewWidth,
            dragPreviewHeight = _getDragPreviewSize.dragPreviewHeight;
          const calculateYOffset = () => {
            const interpolantY = new MonotonicInterpolant([0, 0.5, 1], [
            // Dock to the top
            offsetFromDragPreview.y,
            // Align at the center
            offsetFromDragPreview.y / sourceHeight * dragPreviewHeight,
            // Dock to the bottom
            offsetFromDragPreview.y + dragPreviewHeight - sourceHeight]);
            let y = interpolantY.interpolate(anchorY);
            // Work around Safari 8 positioning bug
            if (isSafari() && isImage) {
              // We'll have to wait for @3x to see if this is entirely correct
              y += (window.devicePixelRatio - 1) * dragPreviewHeight;
            }
            return y;
          };
          const calculateXOffset = () => {
            // Interpolate coordinates depending on anchor point
            // If you know a simpler way to do this, let me know
            const interpolantX = new MonotonicInterpolant([0, 0.5, 1], [
            // Dock to the left
            offsetFromDragPreview.x,
            // Align at the center
            offsetFromDragPreview.x / sourceWidth * dragPreviewWidth,
            // Dock to the right
            offsetFromDragPreview.x + dragPreviewWidth - sourceWidth]);
            return interpolantX.interpolate(anchorX);
          };
          // Force offsets if specified in the options.
          const offsetX = offsetPoint.offsetX,
            offsetY = offsetPoint.offsetY;
          const isManualOffsetX = offsetX === 0 || offsetX;
          const isManualOffsetY = offsetY === 0 || offsetY;
          return {
            x: isManualOffsetX ? offsetX : calculateXOffset(),
            y: isManualOffsetY ? offsetY : calculateYOffset()
          };
        }
        let OptionsReader$1 = class OptionsReader {
          get window() {
            if (this.globalContext) {
              return this.globalContext;
            } else if (typeof window !== 'undefined') {
              return window;
            }
            return undefined;
          }
          get document() {
            var ref;
            if ((ref = this.globalContext) === null || ref === void 0 ? void 0 : ref.document) {
              return this.globalContext.document;
            } else if (this.window) {
              return this.window.document;
            } else {
              return undefined;
            }
          }
          get rootElement() {
            var ref;
            return ((ref = this.optionsArgs) === null || ref === void 0 ? void 0 : ref.rootElement) || this.window;
          }
          constructor(globalContext, options) {
            this.ownerDocument = null;
            this.globalContext = globalContext;
            this.optionsArgs = options;
          }
        };
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            var ownKeys = Object.keys(source);
            if (typeof Object.getOwnPropertySymbols === 'function') {
              ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
              }));
            }
            ownKeys.forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          }
          return target;
        }
        class HTML5BackendImpl {
          /**
          * Generate profiling statistics for the HTML5Backend.
          */
          profile() {
            var ref, ref1;
            return {
              sourcePreviewNodes: this.sourcePreviewNodes.size,
              sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
              sourceNodeOptions: this.sourceNodeOptions.size,
              sourceNodes: this.sourceNodes.size,
              dragStartSourceIds: ((ref = this.dragStartSourceIds) === null || ref === void 0 ? void 0 : ref.length) || 0,
              dropTargetIds: this.dropTargetIds.length,
              dragEnterTargetIds: this.dragEnterTargetIds.length,
              dragOverTargetIds: ((ref1 = this.dragOverTargetIds) === null || ref1 === void 0 ? void 0 : ref1.length) || 0
            };
          }
          // public for test
          get window() {
            return this.options.window;
          }
          get document() {
            return this.options.document;
          }
          /**
          * Get the root element to use for event subscriptions
          */
          get rootElement() {
            return this.options.rootElement;
          }
          setup() {
            const root = this.rootElement;
            if (root === undefined) {
              return;
            }
            if (root.__isReactDndBackendSetUp) {
              throw new Error('Cannot have two HTML5 backends at the same time.');
            }
            root.__isReactDndBackendSetUp = true;
            this.addEventListeners(root);
          }
          teardown() {
            const root = this.rootElement;
            if (root === undefined) {
              return;
            }
            root.__isReactDndBackendSetUp = false;
            this.removeEventListeners(this.rootElement);
            this.clearCurrentDragSourceNode();
            if (this.asyncEndDragFrameId) {
              var ref;
              (ref = this.window) === null || ref === void 0 ? void 0 : ref.cancelAnimationFrame(this.asyncEndDragFrameId);
            }
          }
          connectDragPreview(sourceId, node, options) {
            this.sourcePreviewNodeOptions.set(sourceId, options);
            this.sourcePreviewNodes.set(sourceId, node);
            return () => {
              this.sourcePreviewNodes.delete(sourceId);
              this.sourcePreviewNodeOptions.delete(sourceId);
            };
          }
          connectDragSource(sourceId, node, options) {
            this.sourceNodes.set(sourceId, node);
            this.sourceNodeOptions.set(sourceId, options);
            const handleDragStart = e => this.handleDragStart(e, sourceId);
            const handleSelectStart = e => this.handleSelectStart(e);
            node.setAttribute('draggable', 'true');
            node.addEventListener('dragstart', handleDragStart);
            node.addEventListener('selectstart', handleSelectStart);
            return () => {
              this.sourceNodes.delete(sourceId);
              this.sourceNodeOptions.delete(sourceId);
              node.removeEventListener('dragstart', handleDragStart);
              node.removeEventListener('selectstart', handleSelectStart);
              node.setAttribute('draggable', 'false');
            };
          }
          connectDropTarget(targetId, node) {
            const handleDragEnter = e => this.handleDragEnter(e, targetId);
            const handleDragOver = e => this.handleDragOver(e, targetId);
            const handleDrop = e => this.handleDrop(e, targetId);
            node.addEventListener('dragenter', handleDragEnter);
            node.addEventListener('dragover', handleDragOver);
            node.addEventListener('drop', handleDrop);
            return () => {
              node.removeEventListener('dragenter', handleDragEnter);
              node.removeEventListener('dragover', handleDragOver);
              node.removeEventListener('drop', handleDrop);
            };
          }
          addEventListeners(target) {
            // SSR Fix (https://github.com/react-dnd/react-dnd/pull/813
            if (!target.addEventListener) {
              return;
            }
            target.addEventListener('dragstart', this.handleTopDragStart);
            target.addEventListener('dragstart', this.handleTopDragStartCapture, true);
            target.addEventListener('dragend', this.handleTopDragEndCapture, true);
            target.addEventListener('dragenter', this.handleTopDragEnter);
            target.addEventListener('dragenter', this.handleTopDragEnterCapture, true);
            target.addEventListener('dragleave', this.handleTopDragLeaveCapture, true);
            target.addEventListener('dragover', this.handleTopDragOver);
            target.addEventListener('dragover', this.handleTopDragOverCapture, true);
            target.addEventListener('drop', this.handleTopDrop);
            target.addEventListener('drop', this.handleTopDropCapture, true);
          }
          removeEventListeners(target) {
            // SSR Fix (https://github.com/react-dnd/react-dnd/pull/813
            if (!target.removeEventListener) {
              return;
            }
            target.removeEventListener('dragstart', this.handleTopDragStart);
            target.removeEventListener('dragstart', this.handleTopDragStartCapture, true);
            target.removeEventListener('dragend', this.handleTopDragEndCapture, true);
            target.removeEventListener('dragenter', this.handleTopDragEnter);
            target.removeEventListener('dragenter', this.handleTopDragEnterCapture, true);
            target.removeEventListener('dragleave', this.handleTopDragLeaveCapture, true);
            target.removeEventListener('dragover', this.handleTopDragOver);
            target.removeEventListener('dragover', this.handleTopDragOverCapture, true);
            target.removeEventListener('drop', this.handleTopDrop);
            target.removeEventListener('drop', this.handleTopDropCapture, true);
          }
          getCurrentSourceNodeOptions() {
            const sourceId = this.monitor.getSourceId();
            const sourceNodeOptions = this.sourceNodeOptions.get(sourceId);
            return _objectSpread({
              dropEffect: this.altKeyPressed ? 'copy' : 'move'
            }, sourceNodeOptions || {});
          }
          getCurrentDropEffect() {
            if (this.isDraggingNativeItem()) {
              // It makes more sense to default to 'copy' for native resources
              return 'copy';
            }
            return this.getCurrentSourceNodeOptions().dropEffect;
          }
          getCurrentSourcePreviewNodeOptions() {
            const sourceId = this.monitor.getSourceId();
            const sourcePreviewNodeOptions = this.sourcePreviewNodeOptions.get(sourceId);
            return _objectSpread({
              anchorX: 0.5,
              anchorY: 0.5,
              captureDraggingState: false
            }, sourcePreviewNodeOptions || {});
          }
          isDraggingNativeItem() {
            const itemType = this.monitor.getItemType();
            return Object.keys(NativeTypes).some(key => NativeTypes[key] === itemType);
          }
          beginDragNativeItem(type, dataTransfer) {
            this.clearCurrentDragSourceNode();
            this.currentNativeSource = createNativeDragSource(type, dataTransfer);
            this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
            this.actions.beginDrag([this.currentNativeHandle]);
          }
          setCurrentDragSourceNode(node) {
            this.clearCurrentDragSourceNode();
            this.currentDragSourceNode = node;
            // A timeout of > 0 is necessary to resolve Firefox issue referenced
            // See:
            //   * https://github.com/react-dnd/react-dnd/pull/928
            //   * https://github.com/react-dnd/react-dnd/issues/869
            const MOUSE_MOVE_TIMEOUT = 1000;
            // Receiving a mouse event in the middle of a dragging operation
            // means it has ended and the drag source node disappeared from DOM,
            // so the browser didn't dispatch the dragend event.
            //
            // We need to wait before we start listening for mousemove events.
            // This is needed because the drag preview needs to be drawn or else it fires an 'mousemove' event
            // immediately in some browsers.
            //
            // See:
            //   * https://github.com/react-dnd/react-dnd/pull/928
            //   * https://github.com/react-dnd/react-dnd/issues/869
            //
            this.mouseMoveTimeoutTimer = setTimeout(() => {
              var ref;
              return (ref = this.rootElement) === null || ref === void 0 ? void 0 : ref.addEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
            }, MOUSE_MOVE_TIMEOUT);
          }
          clearCurrentDragSourceNode() {
            if (this.currentDragSourceNode) {
              this.currentDragSourceNode = null;
              if (this.rootElement) {
                var ref;
                (ref = this.window) === null || ref === void 0 ? void 0 : ref.clearTimeout(this.mouseMoveTimeoutTimer || undefined);
                this.rootElement.removeEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
              }
              this.mouseMoveTimeoutTimer = null;
              return true;
            }
            return false;
          }
          handleDragStart(e, sourceId) {
            if (e.defaultPrevented) {
              return;
            }
            if (!this.dragStartSourceIds) {
              this.dragStartSourceIds = [];
            }
            this.dragStartSourceIds.unshift(sourceId);
          }
          handleDragEnter(_e, targetId) {
            this.dragEnterTargetIds.unshift(targetId);
          }
          handleDragOver(_e, targetId) {
            if (this.dragOverTargetIds === null) {
              this.dragOverTargetIds = [];
            }
            this.dragOverTargetIds.unshift(targetId);
          }
          handleDrop(_e, targetId) {
            this.dropTargetIds.unshift(targetId);
          }
          constructor(manager, globalContext, options) {
            this.sourcePreviewNodes = new Map();
            this.sourcePreviewNodeOptions = new Map();
            this.sourceNodes = new Map();
            this.sourceNodeOptions = new Map();
            this.dragStartSourceIds = null;
            this.dropTargetIds = [];
            this.dragEnterTargetIds = [];
            this.currentNativeSource = null;
            this.currentNativeHandle = null;
            this.currentDragSourceNode = null;
            this.altKeyPressed = false;
            this.mouseMoveTimeoutTimer = null;
            this.asyncEndDragFrameId = null;
            this.dragOverTargetIds = null;
            this.lastClientOffset = null;
            this.hoverRafId = null;
            this.getSourceClientOffset = sourceId => {
              const source = this.sourceNodes.get(sourceId);
              return source && getNodeClientOffset$1(source) || null;
            };
            this.endDragNativeItem = () => {
              if (!this.isDraggingNativeItem()) {
                return;
              }
              this.actions.endDrag();
              if (this.currentNativeHandle) {
                this.registry.removeSource(this.currentNativeHandle);
              }
              this.currentNativeHandle = null;
              this.currentNativeSource = null;
            };
            this.isNodeInDocument = node => {
              // Check the node either in the main document or in the current context
              return Boolean(node && this.document && this.document.body && this.document.body.contains(node));
            };
            this.endDragIfSourceWasRemovedFromDOM = () => {
              const node = this.currentDragSourceNode;
              if (node == null || this.isNodeInDocument(node)) {
                return;
              }
              if (this.clearCurrentDragSourceNode() && this.monitor.isDragging()) {
                this.actions.endDrag();
              }
              this.cancelHover();
            };
            this.scheduleHover = dragOverTargetIds => {
              if (this.hoverRafId === null && typeof requestAnimationFrame !== 'undefined') {
                this.hoverRafId = requestAnimationFrame(() => {
                  if (this.monitor.isDragging()) {
                    this.actions.hover(dragOverTargetIds || [], {
                      clientOffset: this.lastClientOffset
                    });
                  }
                  this.hoverRafId = null;
                });
              }
            };
            this.cancelHover = () => {
              if (this.hoverRafId !== null && typeof cancelAnimationFrame !== 'undefined') {
                cancelAnimationFrame(this.hoverRafId);
                this.hoverRafId = null;
              }
            };
            this.handleTopDragStartCapture = () => {
              this.clearCurrentDragSourceNode();
              this.dragStartSourceIds = [];
            };
            this.handleTopDragStart = e => {
              if (e.defaultPrevented) {
                return;
              }
              const dragStartSourceIds = this.dragStartSourceIds;
              this.dragStartSourceIds = null;
              const clientOffset = getEventClientOffset$1(e);
              // Avoid crashing if we missed a drop event or our previous drag died
              if (this.monitor.isDragging()) {
                this.actions.endDrag();
                this.cancelHover();
              }
              // Don't publish the source just yet (see why below)
              this.actions.beginDrag(dragStartSourceIds || [], {
                publishSource: false,
                getSourceClientOffset: this.getSourceClientOffset,
                clientOffset
              });
              const dataTransfer = e.dataTransfer;
              const nativeType = matchNativeItemType(dataTransfer);
              if (this.monitor.isDragging()) {
                if (dataTransfer && typeof dataTransfer.setDragImage === 'function') {
                  // Use custom drag image if user specifies it.
                  // If child drag source refuses drag but parent agrees,
                  // use parent's node as drag image. Neither works in IE though.
                  const sourceId = this.monitor.getSourceId();
                  const sourceNode = this.sourceNodes.get(sourceId);
                  const dragPreview = this.sourcePreviewNodes.get(sourceId) || sourceNode;
                  if (dragPreview) {
                    const _this$getCurrentSourc = this.getCurrentSourcePreviewNodeOptions(),
                      anchorX = _this$getCurrentSourc.anchorX,
                      anchorY = _this$getCurrentSourc.anchorY,
                      offsetX = _this$getCurrentSourc.offsetX,
                      offsetY = _this$getCurrentSourc.offsetY;
                    const anchorPoint = {
                      anchorX,
                      anchorY
                    };
                    const offsetPoint = {
                      offsetX,
                      offsetY
                    };
                    const dragPreviewOffset = getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint);
                    dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
                  }
                }
                try {
                  // Firefox won't drag without setting data
                  dataTransfer === null || dataTransfer === void 0 ? void 0 : dataTransfer.setData('application/json', {});
                } catch (err) {
                  // IE doesn't support MIME types in setData
                }
                // Store drag source node so we can check whether
                // it is removed from DOM and trigger endDrag manually.
                this.setCurrentDragSourceNode(e.target);
                // Now we are ready to publish the drag source.. or are we not?
                const _this$getCurrentSourc2 = this.getCurrentSourcePreviewNodeOptions(),
                  captureDraggingState = _this$getCurrentSourc2.captureDraggingState;
                if (!captureDraggingState) {
                  // Usually we want to publish it in the next tick so that browser
                  // is able to screenshot the current (not yet dragging) state.
                  //
                  // It also neatly avoids a situation where render() returns null
                  // in the same tick for the source element, and browser freaks out.
                  setTimeout(() => this.actions.publishDragSource(), 0);
                } else {
                  // In some cases the user may want to override this behavior, e.g.
                  // to work around IE not supporting custom drag previews.
                  //
                  // When using a custom drag layer, the only way to prevent
                  // the default drag preview from drawing in IE is to screenshot
                  // the dragging state in which the node itself has zero opacity
                  // and height. In this case, though, returning null from render()
                  // will abruptly end the dragging, which is not obvious.
                  //
                  // This is the reason such behavior is strictly opt-in.
                  this.actions.publishDragSource();
                }
              } else if (nativeType) {
                // A native item (such as URL) dragged from inside the document
                this.beginDragNativeItem(nativeType);
              } else if (dataTransfer && !dataTransfer.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute('draggable'))) {
                // Looks like a Safari bug: dataTransfer.types is null, but there was no draggable.
                // Just let it drag. It's a native type (URL or text) and will be picked up in
                // dragenter handler.
                return;
              } else {
                // If by this time no drag source reacted, tell browser not to drag.
                e.preventDefault();
              }
            };
            this.handleTopDragEndCapture = () => {
              if (this.clearCurrentDragSourceNode() && this.monitor.isDragging()) {
                // Firefox can dispatch this event in an infinite loop
                // if dragend handler does something like showing an alert.
                // Only proceed if we have not handled it already.
                this.actions.endDrag();
              }
              this.cancelHover();
            };
            this.handleTopDragEnterCapture = e => {
              this.dragEnterTargetIds = [];
              if (this.isDraggingNativeItem()) {
                var ref;
                (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
              }
              const isFirstEnter = this.enterLeaveCounter.enter(e.target);
              if (!isFirstEnter || this.monitor.isDragging()) {
                return;
              }
              const dataTransfer = e.dataTransfer;
              const nativeType = matchNativeItemType(dataTransfer);
              if (nativeType) {
                // A native item (such as file or URL) dragged from outside the document
                this.beginDragNativeItem(nativeType, dataTransfer);
              }
            };
            this.handleTopDragEnter = e => {
              const dragEnterTargetIds = this.dragEnterTargetIds;
              this.dragEnterTargetIds = [];
              if (!this.monitor.isDragging()) {
                // This is probably a native item type we don't understand.
                return;
              }
              this.altKeyPressed = e.altKey;
              // If the target changes position as the result of `dragenter`, `dragover` might still
              // get dispatched despite target being no longer there. The easy solution is to check
              // whether there actually is a target before firing `hover`.
              if (dragEnterTargetIds.length > 0) {
                this.actions.hover(dragEnterTargetIds, {
                  clientOffset: getEventClientOffset$1(e)
                });
              }
              const canDrop = dragEnterTargetIds.some(targetId => this.monitor.canDropOnTarget(targetId));
              if (canDrop) {
                // IE requires this to fire dragover events
                e.preventDefault();
                if (e.dataTransfer) {
                  e.dataTransfer.dropEffect = this.getCurrentDropEffect();
                }
              }
            };
            this.handleTopDragOverCapture = e => {
              this.dragOverTargetIds = [];
              if (this.isDraggingNativeItem()) {
                var ref;
                (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
              }
            };
            this.handleTopDragOver = e => {
              const dragOverTargetIds = this.dragOverTargetIds;
              this.dragOverTargetIds = [];
              if (!this.monitor.isDragging()) {
                // This is probably a native item type we don't understand.
                // Prevent default "drop and blow away the whole document" action.
                e.preventDefault();
                if (e.dataTransfer) {
                  e.dataTransfer.dropEffect = 'none';
                }
                return;
              }
              this.altKeyPressed = e.altKey;
              this.lastClientOffset = getEventClientOffset$1(e);
              this.scheduleHover(dragOverTargetIds);
              const canDrop = (dragOverTargetIds || []).some(targetId => this.monitor.canDropOnTarget(targetId));
              if (canDrop) {
                // Show user-specified drop effect.
                e.preventDefault();
                if (e.dataTransfer) {
                  e.dataTransfer.dropEffect = this.getCurrentDropEffect();
                }
              } else if (this.isDraggingNativeItem()) {
                // Don't show a nice cursor but still prevent default
                // "drop and blow away the whole document" action.
                e.preventDefault();
              } else {
                e.preventDefault();
                if (e.dataTransfer) {
                  e.dataTransfer.dropEffect = 'none';
                }
              }
            };
            this.handleTopDragLeaveCapture = e => {
              if (this.isDraggingNativeItem()) {
                e.preventDefault();
              }
              const isLastLeave = this.enterLeaveCounter.leave(e.target);
              if (!isLastLeave) {
                return;
              }
              if (this.isDraggingNativeItem()) {
                setTimeout(() => this.endDragNativeItem(), 0);
              }
              this.cancelHover();
            };
            this.handleTopDropCapture = e => {
              this.dropTargetIds = [];
              if (this.isDraggingNativeItem()) {
                var ref;
                e.preventDefault();
                (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
              } else if (matchNativeItemType(e.dataTransfer)) {
                // Dragging some elements, like <a> and <img> may still behave like a native drag event,
                // even if the current drag event matches a user-defined type.
                // Stop the default behavior when we're not expecting a native item to be dropped.
                e.preventDefault();
              }
              this.enterLeaveCounter.reset();
            };
            this.handleTopDrop = e => {
              const dropTargetIds = this.dropTargetIds;
              this.dropTargetIds = [];
              this.actions.hover(dropTargetIds, {
                clientOffset: getEventClientOffset$1(e)
              });
              this.actions.drop({
                dropEffect: this.getCurrentDropEffect()
              });
              if (this.isDraggingNativeItem()) {
                this.endDragNativeItem();
              } else if (this.monitor.isDragging()) {
                this.actions.endDrag();
              }
              this.cancelHover();
            };
            this.handleSelectStart = e => {
              const target = e.target;
              // Only IE requires us to explicitly say
              // we want drag drop operation to start
              if (typeof target.dragDrop !== 'function') {
                return;
              }
              // Inputs and textareas should be selectable
              if (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
                return;
              }
              // For other targets, ask IE
              // to enable drag and drop
              e.preventDefault();
              target.dragDrop();
            };
            this.options = new OptionsReader$1(globalContext, options);
            this.actions = manager.getActions();
            this.monitor = manager.getMonitor();
            this.registry = manager.getRegistry();
            this.enterLeaveCounter = new EnterLeaveCounter(this.isNodeInDocument);
          }
        }
        const HTML5Backend = exports("H", function createBackend(manager, context, options) {
          return new HTML5BackendImpl(manager, context, options);
        });
        var ListenerType;
        (function (ListenerType) {
          ListenerType["mouse"] = "mouse";
          ListenerType["touch"] = "touch";
          ListenerType["keyboard"] = "keyboard";
        })(ListenerType || (ListenerType = {}));
        class OptionsReader {
          get delay() {
            var _delay;
            return (_delay = this.args.delay) !== null && _delay !== void 0 ? _delay : 0;
          }
          get scrollAngleRanges() {
            return this.args.scrollAngleRanges;
          }
          get getDropTargetElementsAtPoint() {
            return this.args.getDropTargetElementsAtPoint;
          }
          get ignoreContextMenu() {
            var _ignoreContextMenu;
            return (_ignoreContextMenu = this.args.ignoreContextMenu) !== null && _ignoreContextMenu !== void 0 ? _ignoreContextMenu : false;
          }
          get enableHoverOutsideTarget() {
            var _enableHoverOutsideTarget;
            return (_enableHoverOutsideTarget = this.args.enableHoverOutsideTarget) !== null && _enableHoverOutsideTarget !== void 0 ? _enableHoverOutsideTarget : false;
          }
          get enableKeyboardEvents() {
            var _enableKeyboardEvents;
            return (_enableKeyboardEvents = this.args.enableKeyboardEvents) !== null && _enableKeyboardEvents !== void 0 ? _enableKeyboardEvents : false;
          }
          get enableMouseEvents() {
            var _enableMouseEvents;
            return (_enableMouseEvents = this.args.enableMouseEvents) !== null && _enableMouseEvents !== void 0 ? _enableMouseEvents : false;
          }
          get enableTouchEvents() {
            var _enableTouchEvents;
            return (_enableTouchEvents = this.args.enableTouchEvents) !== null && _enableTouchEvents !== void 0 ? _enableTouchEvents : true;
          }
          get touchSlop() {
            return this.args.touchSlop || 0;
          }
          get delayTouchStart() {
            var ref, ref1;
            var ref2, ref3;
            return (ref3 = (ref2 = (ref = this.args) === null || ref === void 0 ? void 0 : ref.delayTouchStart) !== null && ref2 !== void 0 ? ref2 : (ref1 = this.args) === null || ref1 === void 0 ? void 0 : ref1.delay) !== null && ref3 !== void 0 ? ref3 : 0;
          }
          get delayMouseStart() {
            var ref, ref4;
            var ref5, ref6;
            return (ref6 = (ref5 = (ref = this.args) === null || ref === void 0 ? void 0 : ref.delayMouseStart) !== null && ref5 !== void 0 ? ref5 : (ref4 = this.args) === null || ref4 === void 0 ? void 0 : ref4.delay) !== null && ref6 !== void 0 ? ref6 : 0;
          }
          get window() {
            if (this.context && this.context.window) {
              return this.context.window;
            } else if (typeof window !== 'undefined') {
              return window;
            }
            return undefined;
          }
          get document() {
            var ref;
            if ((ref = this.context) === null || ref === void 0 ? void 0 : ref.document) {
              return this.context.document;
            }
            if (this.window) {
              return this.window.document;
            }
            return undefined;
          }
          get rootElement() {
            var ref;
            return ((ref = this.args) === null || ref === void 0 ? void 0 : ref.rootElement) || this.document;
          }
          constructor(args, context) {
            this.args = args;
            this.context = context;
          }
        }
        function distance(x1, y1, x2, y2) {
          return Math.sqrt(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2));
        }
        function inAngleRanges(x1, y1, x2, y2, angleRanges) {
          if (!angleRanges) {
            return false;
          }
          const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI + 180;
          for (let i = 0; i < angleRanges.length; ++i) {
            const ar = angleRanges[i];
            if (ar && (ar.start == null || angle >= ar.start) && (ar.end == null || angle <= ar.end)) {
              return true;
            }
          }
          return false;
        }

        // Used for MouseEvent.buttons (note the s on the end).
        const MouseButtons = {
          Left: 1,
          Right: 2,
          Center: 4
        };
        // Used for e.button (note the lack of an s on the end).
        const MouseButton = {
          Left: 0,
          Center: 1,
          Right: 2
        };
        /**
         * Only touch events and mouse events where the left button is pressed should initiate a drag.
         * @param {MouseEvent | TouchEvent} e The event
         */
        function eventShouldStartDrag(e) {
          // For touch events, button will be undefined. If e.button is defined,
          // then it should be MouseButton.Left.
          return e.button === undefined || e.button === MouseButton.Left;
        }
        /**
         * Only touch events and mouse events where the left mouse button is no longer held should end a drag.
         * It's possible the user mouse downs with the left mouse button, then mouse down and ups with the right mouse button.
         * We don't want releasing the right mouse button to end the drag.
         * @param {MouseEvent | TouchEvent} e The event
         */
        function eventShouldEndDrag(e) {
          // Touch events will have buttons be undefined, while mouse events will have e.buttons's left button
          // bit field unset if the left mouse button has been released
          return e.buttons === undefined || (e.buttons & MouseButtons.Left) === 0;
        }
        function isTouchEvent(e) {
          return !!e.targetTouches;
        }
        const ELEMENT_NODE = 1;
        function getNodeClientOffset(node) {
          const el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;
          if (!el) {
            return undefined;
          }
          const _el$getBoundingClient2 = el.getBoundingClientRect(),
            top = _el$getBoundingClient2.top,
            left = _el$getBoundingClient2.left;
          return {
            x: left,
            y: top
          };
        }
        function getEventClientTouchOffset(e, lastTargetTouchFallback) {
          if (e.targetTouches.length === 1) {
            return getEventClientOffset(e.targetTouches[0]);
          } else if (lastTargetTouchFallback && e.touches.length === 1) {
            if (e.touches[0].target === lastTargetTouchFallback.target) {
              return getEventClientOffset(e.touches[0]);
            }
          }
          return;
        }
        function getEventClientOffset(e, lastTargetTouchFallback) {
          if (isTouchEvent(e)) {
            return getEventClientTouchOffset(e, lastTargetTouchFallback);
          } else {
            return {
              x: e.clientX,
              y: e.clientY
            };
          }
        }
        const supportsPassive = (() => {
          // simular to jQuery's test
          let supported = false;
          try {
            addEventListener('test', () => {
              // do nothing
            }, Object.defineProperty({}, 'passive', {
              get() {
                supported = true;
                return true;
              }
            }));
          } catch (e) {
            // do nothing
          }
          return supported;
        })();
        const eventNames = {
          [ListenerType.mouse]: {
            start: 'mousedown',
            move: 'mousemove',
            end: 'mouseup',
            contextmenu: 'contextmenu'
          },
          [ListenerType.touch]: {
            start: 'touchstart',
            move: 'touchmove',
            end: 'touchend'
          },
          [ListenerType.keyboard]: {
            keydown: 'keydown'
          }
        };
        class TouchBackendImpl {
          /**
          * Generate profiling statistics for the HTML5Backend.
          */
          profile() {
            var ref;
            return {
              sourceNodes: this.sourceNodes.size,
              sourcePreviewNodes: this.sourcePreviewNodes.size,
              sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
              targetNodes: this.targetNodes.size,
              dragOverTargetIds: ((ref = this.dragOverTargetIds) === null || ref === void 0 ? void 0 : ref.length) || 0
            };
          }
          // public for test
          get document() {
            return this.options.document;
          }
          setup() {
            const root = this.options.rootElement;
            if (!root) {
              return;
            }
            invariant(!TouchBackendImpl.isSetUp, 'Cannot have two Touch backends at the same time.');
            TouchBackendImpl.isSetUp = true;
            this.addEventListener(root, 'start', this.getTopMoveStartHandler());
            this.addEventListener(root, 'start', this.handleTopMoveStartCapture, true);
            this.addEventListener(root, 'move', this.handleTopMove);
            this.addEventListener(root, 'move', this.handleTopMoveCapture, true);
            this.addEventListener(root, 'end', this.handleTopMoveEndCapture, true);
            if (this.options.enableMouseEvents && !this.options.ignoreContextMenu) {
              this.addEventListener(root, 'contextmenu', this.handleTopMoveEndCapture);
            }
            if (this.options.enableKeyboardEvents) {
              this.addEventListener(root, 'keydown', this.handleCancelOnEscape, true);
            }
          }
          teardown() {
            const root = this.options.rootElement;
            if (!root) {
              return;
            }
            TouchBackendImpl.isSetUp = false;
            this._mouseClientOffset = {};
            this.removeEventListener(root, 'start', this.handleTopMoveStartCapture, true);
            this.removeEventListener(root, 'start', this.handleTopMoveStart);
            this.removeEventListener(root, 'move', this.handleTopMoveCapture, true);
            this.removeEventListener(root, 'move', this.handleTopMove);
            this.removeEventListener(root, 'end', this.handleTopMoveEndCapture, true);
            if (this.options.enableMouseEvents && !this.options.ignoreContextMenu) {
              this.removeEventListener(root, 'contextmenu', this.handleTopMoveEndCapture);
            }
            if (this.options.enableKeyboardEvents) {
              this.removeEventListener(root, 'keydown', this.handleCancelOnEscape, true);
            }
            this.uninstallSourceNodeRemovalObserver();
          }
          addEventListener(subject, event, handler, capture = false) {
            const options = supportsPassive ? {
              capture,
              passive: false
            } : capture;
            this.listenerTypes.forEach(function (listenerType) {
              const evt = eventNames[listenerType][event];
              if (evt) {
                subject.addEventListener(evt, handler, options);
              }
            });
          }
          removeEventListener(subject, event, handler, capture = false) {
            const options = supportsPassive ? {
              capture,
              passive: false
            } : capture;
            this.listenerTypes.forEach(function (listenerType) {
              const evt = eventNames[listenerType][event];
              if (evt) {
                subject.removeEventListener(evt, handler, options);
              }
            });
          }
          connectDragSource(sourceId, node) {
            const handleMoveStart = this.handleMoveStart.bind(this, sourceId);
            this.sourceNodes.set(sourceId, node);
            this.addEventListener(node, 'start', handleMoveStart);
            return () => {
              this.sourceNodes.delete(sourceId);
              this.removeEventListener(node, 'start', handleMoveStart);
            };
          }
          connectDragPreview(sourceId, node, options) {
            this.sourcePreviewNodeOptions.set(sourceId, options);
            this.sourcePreviewNodes.set(sourceId, node);
            return () => {
              this.sourcePreviewNodes.delete(sourceId);
              this.sourcePreviewNodeOptions.delete(sourceId);
            };
          }
          connectDropTarget(targetId, node) {
            const root = this.options.rootElement;
            if (!this.document || !root) {
              return () => {
                /* noop */};
            }
            const handleMove = e => {
              if (!this.document || !root || !this.monitor.isDragging()) {
                return;
              }
              let coords;
              /**
              * Grab the coordinates for the current mouse/touch position
              */
              switch (e.type) {
                case eventNames.mouse.move:
                  coords = {
                    x: e.clientX,
                    y: e.clientY
                  };
                  break;
                case eventNames.touch.move:
                  var ref, ref1;
                  coords = {
                    x: ((ref = e.touches[0]) === null || ref === void 0 ? void 0 : ref.clientX) || 0,
                    y: ((ref1 = e.touches[0]) === null || ref1 === void 0 ? void 0 : ref1.clientY) || 0
                  };
                  break;
              }
              /**
              * Use the coordinates to grab the element the drag ended on.
              * If the element is the same as the target node (or any of it's children) then we have hit a drop target and can handle the move.
              */
              const droppedOn = coords != null ? this.document.elementFromPoint(coords.x, coords.y) : undefined;
              const childMatch = droppedOn && node.contains(droppedOn);
              if (droppedOn === node || childMatch) {
                return this.handleMove(e, targetId);
              }
            };
            /**
            * Attaching the event listener to the body so that touchmove will work while dragging over multiple target elements.
            */
            this.addEventListener(this.document.body, 'move', handleMove);
            this.targetNodes.set(targetId, node);
            return () => {
              if (this.document) {
                this.targetNodes.delete(targetId);
                this.removeEventListener(this.document.body, 'move', handleMove);
              }
            };
          }
          getTopMoveStartHandler() {
            if (!this.options.delayTouchStart && !this.options.delayMouseStart) {
              return this.handleTopMoveStart;
            }
            return this.handleTopMoveStartDelay;
          }
          installSourceNodeRemovalObserver(node) {
            this.uninstallSourceNodeRemovalObserver();
            this.draggedSourceNode = node;
            this.draggedSourceNodeRemovalObserver = new MutationObserver(() => {
              if (node && !node.parentElement) {
                this.resurrectSourceNode();
                this.uninstallSourceNodeRemovalObserver();
              }
            });
            if (!node || !node.parentElement) {
              return;
            }
            this.draggedSourceNodeRemovalObserver.observe(node.parentElement, {
              childList: true
            });
          }
          resurrectSourceNode() {
            if (this.document && this.draggedSourceNode) {
              this.draggedSourceNode.style.display = 'none';
              this.draggedSourceNode.removeAttribute('data-reactid');
              this.document.body.appendChild(this.draggedSourceNode);
            }
          }
          uninstallSourceNodeRemovalObserver() {
            if (this.draggedSourceNodeRemovalObserver) {
              this.draggedSourceNodeRemovalObserver.disconnect();
            }
            this.draggedSourceNodeRemovalObserver = undefined;
            this.draggedSourceNode = undefined;
          }
          constructor(manager, context, options) {
            this.getSourceClientOffset = sourceId => {
              const element = this.sourceNodes.get(sourceId);
              return element && getNodeClientOffset(element);
            };
            this.handleTopMoveStartCapture = e => {
              if (!eventShouldStartDrag(e)) {
                return;
              }
              this.moveStartSourceIds = [];
            };
            this.handleMoveStart = sourceId => {
              // Just because we received an event doesn't necessarily mean we need to collect drag sources.
              // We only collect start collecting drag sources on touch and left mouse events.
              if (Array.isArray(this.moveStartSourceIds)) {
                this.moveStartSourceIds.unshift(sourceId);
              }
            };
            this.handleTopMoveStart = e => {
              if (!eventShouldStartDrag(e)) {
                return;
              }
              // Don't prematurely preventDefault() here since it might:
              // 1. Mess up scrolling
              // 2. Mess up long tap (which brings up context menu)
              // 3. If there's an anchor link as a child, tap won't be triggered on link
              const clientOffset = getEventClientOffset(e);
              if (clientOffset) {
                if (isTouchEvent(e)) {
                  this.lastTargetTouchFallback = e.targetTouches[0];
                }
                this._mouseClientOffset = clientOffset;
              }
              this.waitingForDelay = false;
            };
            this.handleTopMoveStartDelay = e => {
              if (!eventShouldStartDrag(e)) {
                return;
              }
              const delay = e.type === eventNames.touch.start ? this.options.delayTouchStart : this.options.delayMouseStart;
              this.timeout = setTimeout(this.handleTopMoveStart.bind(this, e), delay);
              this.waitingForDelay = true;
            };
            this.handleTopMoveCapture = () => {
              this.dragOverTargetIds = [];
            };
            this.handleMove = (_evt, targetId) => {
              if (this.dragOverTargetIds) {
                this.dragOverTargetIds.unshift(targetId);
              }
            };
            this.handleTopMove = e1 => {
              if (this.timeout) {
                clearTimeout(this.timeout);
              }
              if (!this.document || this.waitingForDelay) {
                return;
              }
              const moveStartSourceIds = this.moveStartSourceIds,
                dragOverTargetIds = this.dragOverTargetIds;
              const enableHoverOutsideTarget = this.options.enableHoverOutsideTarget;
              const clientOffset = getEventClientOffset(e1, this.lastTargetTouchFallback);
              if (!clientOffset) {
                return;
              }
              // If the touch move started as a scroll, or is is between the scroll angles
              if (this._isScrolling || !this.monitor.isDragging() && inAngleRanges(this._mouseClientOffset.x || 0, this._mouseClientOffset.y || 0, clientOffset.x, clientOffset.y, this.options.scrollAngleRanges)) {
                this._isScrolling = true;
                return;
              }
              // If we're not dragging and we've moved a little, that counts as a drag start
              if (!this.monitor.isDragging() &&
              // eslint-disable-next-line no-prototype-builtins
              this._mouseClientOffset.hasOwnProperty('x') && moveStartSourceIds && distance(this._mouseClientOffset.x || 0, this._mouseClientOffset.y || 0, clientOffset.x, clientOffset.y) > (this.options.touchSlop ? this.options.touchSlop : 0)) {
                this.moveStartSourceIds = undefined;
                this.actions.beginDrag(moveStartSourceIds, {
                  clientOffset: this._mouseClientOffset,
                  getSourceClientOffset: this.getSourceClientOffset,
                  publishSource: false
                });
              }
              if (!this.monitor.isDragging()) {
                return;
              }
              const sourceNode = this.sourceNodes.get(this.monitor.getSourceId());
              this.installSourceNodeRemovalObserver(sourceNode);
              this.actions.publishDragSource();
              if (e1.cancelable) e1.preventDefault();
              // Get the node elements of the hovered DropTargets
              const dragOverTargetNodes = (dragOverTargetIds || []).map(key => this.targetNodes.get(key)).filter(e => !!e);
              // Get the a ordered list of nodes that are touched by
              const elementsAtPoint = this.options.getDropTargetElementsAtPoint ? this.options.getDropTargetElementsAtPoint(clientOffset.x, clientOffset.y, dragOverTargetNodes) : this.document.elementsFromPoint(clientOffset.x, clientOffset.y);
              // Extend list with parents that are not receiving elementsFromPoint events (size 0 elements and svg groups)
              const elementsAtPointExtended = [];
              for (const nodeId in elementsAtPoint) {
                // eslint-disable-next-line no-prototype-builtins
                if (!elementsAtPoint.hasOwnProperty(nodeId)) {
                  continue;
                }
                let currentNode = elementsAtPoint[nodeId];
                if (currentNode != null) {
                  elementsAtPointExtended.push(currentNode);
                }
                while (currentNode) {
                  currentNode = currentNode.parentElement;
                  if (currentNode && elementsAtPointExtended.indexOf(currentNode) === -1) {
                    elementsAtPointExtended.push(currentNode);
                  }
                }
              }
              const orderedDragOverTargetIds = elementsAtPointExtended // Filter off nodes that arent a hovered DropTargets nodes
              .filter(node => dragOverTargetNodes.indexOf(node) > -1) // Map back the nodes elements to targetIds
              .map(node => this._getDropTargetId(node)) // Filter off possible null rows
              .filter(node => !!node).filter((id, index, ids) => ids.indexOf(id) === index);
              // Invoke hover for drop targets when source node is still over and pointer is outside
              if (enableHoverOutsideTarget) {
                for (const targetId in this.targetNodes) {
                  const targetNode = this.targetNodes.get(targetId);
                  if (sourceNode && targetNode && targetNode.contains(sourceNode) && orderedDragOverTargetIds.indexOf(targetId) === -1) {
                    orderedDragOverTargetIds.unshift(targetId);
                    break;
                  }
                }
              }
              // Reverse order because dnd-core reverse it before calling the DropTarget drop methods
              orderedDragOverTargetIds.reverse();
              this.actions.hover(orderedDragOverTargetIds, {
                clientOffset: clientOffset
              });
            };
            /**
            *
            * visible for testing
            */
            this._getDropTargetId = node => {
              const keys = this.targetNodes.keys();
              let next = keys.next();
              while (next.done === false) {
                const targetId = next.value;
                if (node === this.targetNodes.get(targetId)) {
                  return targetId;
                } else {
                  next = keys.next();
                }
              }
              return undefined;
            };
            this.handleTopMoveEndCapture = e => {
              this._isScrolling = false;
              this.lastTargetTouchFallback = undefined;
              if (!eventShouldEndDrag(e)) {
                return;
              }
              if (!this.monitor.isDragging() || this.monitor.didDrop()) {
                this.moveStartSourceIds = undefined;
                return;
              }
              if (e.cancelable) e.preventDefault();
              this._mouseClientOffset = {};
              this.uninstallSourceNodeRemovalObserver();
              this.actions.drop();
              this.actions.endDrag();
            };
            this.handleCancelOnEscape = e => {
              if (e.key === 'Escape' && this.monitor.isDragging()) {
                this._mouseClientOffset = {};
                this.uninstallSourceNodeRemovalObserver();
                this.actions.endDrag();
              }
            };
            this.options = new OptionsReader(options, context);
            this.actions = manager.getActions();
            this.monitor = manager.getMonitor();
            this.sourceNodes = new Map();
            this.sourcePreviewNodes = new Map();
            this.sourcePreviewNodeOptions = new Map();
            this.targetNodes = new Map();
            this.listenerTypes = [];
            this._mouseClientOffset = {};
            this._isScrolling = false;
            if (this.options.enableMouseEvents) {
              this.listenerTypes.push(ListenerType.mouse);
            }
            if (this.options.enableTouchEvents) {
              this.listenerTypes.push(ListenerType.touch);
            }
            if (this.options.enableKeyboardEvents) {
              this.listenerTypes.push(ListenerType.keyboard);
            }
          }
        }
        const TouchBackend = exports("T", function createBackend(manager, context = {}, options = {}) {
          return new TouchBackendImpl(manager, context, options);
        });
        const isTouchDevice = exports("i", () => {
          return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        });
      }
    };
  });
})();
//# sourceMappingURL=isTouchDevice-legacy-DpSdFl0J.js.map
