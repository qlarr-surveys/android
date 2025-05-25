(function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var check = function (it) {
	  return it && it.Math === Math && it;
	};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var globalThis_1 =
	  // eslint-disable-next-line es/no-global-this -- safe
	  check(typeof globalThis == 'object' && globalThis) ||
	  check(typeof window == 'object' && window) ||
	  // eslint-disable-next-line no-restricted-globals -- safe
	  check(typeof self == 'object' && self) ||
	  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  // eslint-disable-next-line no-new-func -- fallback
	  (function () { return this; })() || Function('return this')();

	var objectGetOwnPropertyDescriptor = {};

	var fails$P = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	var fails$O = fails$P;

	// Detect IE8's incomplete defineProperty implementation
	var descriptors = !fails$O(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
	});

	var fails$N = fails$P;

	var functionBindNative = !fails$N(function () {
	  // eslint-disable-next-line es/no-function-prototype-bind -- safe
	  var test = (function () { /* empty */ }).bind();
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return typeof test != 'function' || test.hasOwnProperty('prototype');
	});

	var NATIVE_BIND$3 = functionBindNative;

	var call$G = Function.prototype.call;

	var functionCall = NATIVE_BIND$3 ? call$G.bind(call$G) : function () {
	  return call$G.apply(call$G, arguments);
	};

	var objectPropertyIsEnumerable = {};

	var $propertyIsEnumerable$1 = {}.propertyIsEnumerable;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor$6 = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG = getOwnPropertyDescriptor$6 && !$propertyIsEnumerable$1.call({ 1: 2 }, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
	objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor$6(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : $propertyIsEnumerable$1;

	var createPropertyDescriptor$8 = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var NATIVE_BIND$2 = functionBindNative;

	var FunctionPrototype$2 = Function.prototype;
	var call$F = FunctionPrototype$2.call;
	var uncurryThisWithBind = NATIVE_BIND$2 && FunctionPrototype$2.bind.bind(call$F, call$F);

	var functionUncurryThis = NATIVE_BIND$2 ? uncurryThisWithBind : function (fn) {
	  return function () {
	    return call$F.apply(fn, arguments);
	  };
	};

	var uncurryThis$Y = functionUncurryThis;

	var toString$o = uncurryThis$Y({}.toString);
	var stringSlice$c = uncurryThis$Y(''.slice);

	var classofRaw$2 = function (it) {
	  return stringSlice$c(toString$o(it), 8, -1);
	};

	var uncurryThis$X = functionUncurryThis;
	var fails$M = fails$P;
	var classof$k = classofRaw$2;

	var $Object$5 = Object;
	var split$3 = uncurryThis$X(''.split);

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var indexedObject = fails$M(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return !$Object$5('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof$k(it) === 'String' ? split$3(it, '') : $Object$5(it);
	} : $Object$5;

	// we can't use just `it == null` since of `document.all` special case
	// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
	var isNullOrUndefined$e = function (it) {
	  return it === null || it === undefined;
	};

	var isNullOrUndefined$d = isNullOrUndefined$e;

	var $TypeError$r = TypeError;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.es/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible$e = function (it) {
	  if (isNullOrUndefined$d(it)) throw new $TypeError$r("Can't call method on " + it);
	  return it;
	};

	// toObject with fallback for non-array-like ES3 strings
	var IndexedObject$5 = indexedObject;
	var requireObjectCoercible$d = requireObjectCoercible$e;

	var toIndexedObject$b = function (it) {
	  return IndexedObject$5(requireObjectCoercible$d(it));
	};

	// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
	var documentAll = typeof document == 'object' && document.all;

	// `IsCallable` abstract operation
	// https://tc39.es/ecma262/#sec-iscallable
	// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
	var isCallable$y = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
	  return typeof argument == 'function' || argument === documentAll;
	} : function (argument) {
	  return typeof argument == 'function';
	};

	var isCallable$x = isCallable$y;

	var isObject$r = function (it) {
	  return typeof it == 'object' ? it !== null : isCallable$x(it);
	};

	var globalThis$V = globalThis_1;
	var isCallable$w = isCallable$y;

	var aFunction = function (argument) {
	  return isCallable$w(argument) ? argument : undefined;
	};

	var getBuiltIn$e = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(globalThis$V[namespace]) : globalThis$V[namespace] && globalThis$V[namespace][method];
	};

	var uncurryThis$W = functionUncurryThis;

	var objectIsPrototypeOf = uncurryThis$W({}.isPrototypeOf);

	var globalThis$U = globalThis_1;

	var navigator = globalThis$U.navigator;
	var userAgent$7 = navigator && navigator.userAgent;

	var environmentUserAgent = userAgent$7 ? String(userAgent$7) : '';

	var globalThis$T = globalThis_1;
	var userAgent$6 = environmentUserAgent;

	var process$3 = globalThis$T.process;
	var Deno$1 = globalThis$T.Deno;
	var versions = process$3 && process$3.versions || Deno$1 && Deno$1.version;
	var v8 = versions && versions.v8;
	var match, version;

	if (v8) {
	  match = v8.split('.');
	  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
	  // but their correct versions are not interesting for us
	  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
	}

	// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
	// so check `userAgent` even if `.v8` exists, but 0
	if (!version && userAgent$6) {
	  match = userAgent$6.match(/Edge\/(\d+)/);
	  if (!match || match[1] >= 74) {
	    match = userAgent$6.match(/Chrome\/(\d+)/);
	    if (match) version = +match[1];
	  }
	}

	var environmentV8Version = version;

	/* eslint-disable es/no-symbol -- required for testing */
	var V8_VERSION$3 = environmentV8Version;
	var fails$L = fails$P;
	var globalThis$S = globalThis_1;

	var $String$6 = globalThis$S.String;

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
	var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$L(function () {
	  var symbol = Symbol('symbol detection');
	  // Chrome 38 Symbol has incorrect toString conversion
	  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
	  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
	  // of course, fail.
	  return !$String$6(symbol) || !(Object(symbol) instanceof Symbol) ||
	    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
	    !Symbol.sham && V8_VERSION$3 && V8_VERSION$3 < 41;
	});

	/* eslint-disable es/no-symbol -- required for testing */
	var NATIVE_SYMBOL$4 = symbolConstructorDetection;

	var useSymbolAsUid = NATIVE_SYMBOL$4
	  && !Symbol.sham
	  && typeof Symbol.iterator == 'symbol';

	var getBuiltIn$d = getBuiltIn$e;
	var isCallable$v = isCallable$y;
	var isPrototypeOf$8 = objectIsPrototypeOf;
	var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

	var $Object$4 = Object;

	var isSymbol$5 = USE_SYMBOL_AS_UID$1 ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn$d('Symbol');
	  return isCallable$v($Symbol) && isPrototypeOf$8($Symbol.prototype, $Object$4(it));
	};

	var $String$5 = String;

	var tryToString$6 = function (argument) {
	  try {
	    return $String$5(argument);
	  } catch (error) {
	    return 'Object';
	  }
	};

	var isCallable$u = isCallable$y;
	var tryToString$5 = tryToString$6;

	var $TypeError$q = TypeError;

	// `Assert: IsCallable(argument) is true`
	var aCallable$o = function (argument) {
	  if (isCallable$u(argument)) return argument;
	  throw new $TypeError$q(tryToString$5(argument) + ' is not a function');
	};

	var aCallable$n = aCallable$o;
	var isNullOrUndefined$c = isNullOrUndefined$e;

	// `GetMethod` abstract operation
	// https://tc39.es/ecma262/#sec-getmethod
	var getMethod$a = function (V, P) {
	  var func = V[P];
	  return isNullOrUndefined$c(func) ? undefined : aCallable$n(func);
	};

	var call$E = functionCall;
	var isCallable$t = isCallable$y;
	var isObject$q = isObject$r;

	var $TypeError$p = TypeError;

	// `OrdinaryToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-ordinarytoprimitive
	var ordinaryToPrimitive$1 = function (input, pref) {
	  var fn, val;
	  if (pref === 'string' && isCallable$t(fn = input.toString) && !isObject$q(val = call$E(fn, input))) return val;
	  if (isCallable$t(fn = input.valueOf) && !isObject$q(val = call$E(fn, input))) return val;
	  if (pref !== 'string' && isCallable$t(fn = input.toString) && !isObject$q(val = call$E(fn, input))) return val;
	  throw new $TypeError$p("Can't convert object to primitive value");
	};

	var sharedStore = {exports: {}};

	var isPure = false;

	var globalThis$R = globalThis_1;

	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var defineProperty$b = Object.defineProperty;

	var defineGlobalProperty$3 = function (key, value) {
	  try {
	    defineProperty$b(globalThis$R, key, { value: value, configurable: true, writable: true });
	  } catch (error) {
	    globalThis$R[key] = value;
	  } return value;
	};

	var globalThis$Q = globalThis_1;
	var defineGlobalProperty$2 = defineGlobalProperty$3;

	var SHARED = '__core-js_shared__';
	var store$3 = sharedStore.exports = globalThis$Q[SHARED] || defineGlobalProperty$2(SHARED, {});

	(store$3.versions || (store$3.versions = [])).push({
	  version: '3.38.1',
	  mode: 'global',
	  copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
	  license: 'https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE',
	  source: 'https://github.com/zloirock/core-js'
	});

	var sharedStoreExports = sharedStore.exports;

	var store$2 = sharedStoreExports;

	var shared$4 = function (key, value) {
	  return store$2[key] || (store$2[key] = value || {});
	};

	var requireObjectCoercible$c = requireObjectCoercible$e;

	var $Object$3 = Object;

	// `ToObject` abstract operation
	// https://tc39.es/ecma262/#sec-toobject
	var toObject$h = function (argument) {
	  return $Object$3(requireObjectCoercible$c(argument));
	};

	var uncurryThis$V = functionUncurryThis;
	var toObject$g = toObject$h;

	var hasOwnProperty = uncurryThis$V({}.hasOwnProperty);

	// `HasOwnProperty` abstract operation
	// https://tc39.es/ecma262/#sec-hasownproperty
	// eslint-disable-next-line es/no-object-hasown -- safe
	var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty(toObject$g(it), key);
	};

	var uncurryThis$U = functionUncurryThis;

	var id$2 = 0;
	var postfix = Math.random();
	var toString$n = uncurryThis$U(1.0.toString);

	var uid$5 = function (key) {
	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$n(++id$2 + postfix, 36);
	};

	var globalThis$P = globalThis_1;
	var shared$3 = shared$4;
	var hasOwn$p = hasOwnProperty_1;
	var uid$4 = uid$5;
	var NATIVE_SYMBOL$3 = symbolConstructorDetection;
	var USE_SYMBOL_AS_UID = useSymbolAsUid;

	var Symbol$1 = globalThis$P.Symbol;
	var WellKnownSymbolsStore = shared$3('wks');
	var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$4;

	var wellKnownSymbol$w = function (name) {
	  if (!hasOwn$p(WellKnownSymbolsStore, name)) {
	    WellKnownSymbolsStore[name] = NATIVE_SYMBOL$3 && hasOwn$p(Symbol$1, name)
	      ? Symbol$1[name]
	      : createWellKnownSymbol('Symbol.' + name);
	  } return WellKnownSymbolsStore[name];
	};

	var call$D = functionCall;
	var isObject$p = isObject$r;
	var isSymbol$4 = isSymbol$5;
	var getMethod$9 = getMethod$a;
	var ordinaryToPrimitive = ordinaryToPrimitive$1;
	var wellKnownSymbol$v = wellKnownSymbol$w;

	var $TypeError$o = TypeError;
	var TO_PRIMITIVE = wellKnownSymbol$v('toPrimitive');

	// `ToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-toprimitive
	var toPrimitive$2 = function (input, pref) {
	  if (!isObject$p(input) || isSymbol$4(input)) return input;
	  var exoticToPrim = getMethod$9(input, TO_PRIMITIVE);
	  var result;
	  if (exoticToPrim) {
	    if (pref === undefined) pref = 'default';
	    result = call$D(exoticToPrim, input, pref);
	    if (!isObject$p(result) || isSymbol$4(result)) return result;
	    throw new $TypeError$o("Can't convert object to primitive value");
	  }
	  if (pref === undefined) pref = 'number';
	  return ordinaryToPrimitive(input, pref);
	};

	var toPrimitive$1 = toPrimitive$2;
	var isSymbol$3 = isSymbol$5;

	// `ToPropertyKey` abstract operation
	// https://tc39.es/ecma262/#sec-topropertykey
	var toPropertyKey$4 = function (argument) {
	  var key = toPrimitive$1(argument, 'string');
	  return isSymbol$3(key) ? key : key + '';
	};

	var globalThis$O = globalThis_1;
	var isObject$o = isObject$r;

	var document$3 = globalThis$O.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS$1 = isObject$o(document$3) && isObject$o(document$3.createElement);

	var documentCreateElement$2 = function (it) {
	  return EXISTS$1 ? document$3.createElement(it) : {};
	};

	var DESCRIPTORS$y = descriptors;
	var fails$K = fails$P;
	var createElement$1 = documentCreateElement$2;

	// Thanks to IE8 for its funny defineProperty
	var ie8DomDefine = !DESCRIPTORS$y && !fails$K(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty(createElement$1('div'), 'a', {
	    get: function () { return 7; }
	  }).a !== 7;
	});

	var DESCRIPTORS$x = descriptors;
	var call$C = functionCall;
	var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
	var createPropertyDescriptor$7 = createPropertyDescriptor$8;
	var toIndexedObject$a = toIndexedObject$b;
	var toPropertyKey$3 = toPropertyKey$4;
	var hasOwn$o = hasOwnProperty_1;
	var IE8_DOM_DEFINE$1 = ie8DomDefine;

	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
	objectGetOwnPropertyDescriptor.f = DESCRIPTORS$x ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject$a(O);
	  P = toPropertyKey$3(P);
	  if (IE8_DOM_DEFINE$1) try {
	    return $getOwnPropertyDescriptor$1(O, P);
	  } catch (error) { /* empty */ }
	  if (hasOwn$o(O, P)) return createPropertyDescriptor$7(!call$C(propertyIsEnumerableModule$1.f, O, P), O[P]);
	};

	var objectDefineProperty = {};

	var DESCRIPTORS$w = descriptors;
	var fails$J = fails$P;

	// V8 ~ Chrome 36-
	// https://bugs.chromium.org/p/v8/issues/detail?id=3334
	var v8PrototypeDefineBug = DESCRIPTORS$w && fails$J(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
	    value: 42,
	    writable: false
	  }).prototype !== 42;
	});

	var isObject$n = isObject$r;

	var $String$4 = String;
	var $TypeError$n = TypeError;

	// `Assert: Type(argument) is Object`
	var anObject$y = function (argument) {
	  if (isObject$n(argument)) return argument;
	  throw new $TypeError$n($String$4(argument) + ' is not an object');
	};

	var DESCRIPTORS$v = descriptors;
	var IE8_DOM_DEFINE = ie8DomDefine;
	var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
	var anObject$x = anObject$y;
	var toPropertyKey$2 = toPropertyKey$4;

	var $TypeError$m = TypeError;
	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var $defineProperty = Object.defineProperty;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var ENUMERABLE = 'enumerable';
	var CONFIGURABLE$1 = 'configurable';
	var WRITABLE = 'writable';

	// `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty
	objectDefineProperty.f = DESCRIPTORS$v ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
	  anObject$x(O);
	  P = toPropertyKey$2(P);
	  anObject$x(Attributes);
	  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
	    var current = $getOwnPropertyDescriptor(O, P);
	    if (current && current[WRITABLE]) {
	      O[P] = Attributes.value;
	      Attributes = {
	        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
	        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
	        writable: false
	      };
	    }
	  } return $defineProperty(O, P, Attributes);
	} : $defineProperty : function defineProperty(O, P, Attributes) {
	  anObject$x(O);
	  P = toPropertyKey$2(P);
	  anObject$x(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return $defineProperty(O, P, Attributes);
	  } catch (error) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError$m('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var DESCRIPTORS$u = descriptors;
	var definePropertyModule$5 = objectDefineProperty;
	var createPropertyDescriptor$6 = createPropertyDescriptor$8;

	var createNonEnumerableProperty$f = DESCRIPTORS$u ? function (object, key, value) {
	  return definePropertyModule$5.f(object, key, createPropertyDescriptor$6(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var makeBuiltIn$3 = {exports: {}};

	var DESCRIPTORS$t = descriptors;
	var hasOwn$n = hasOwnProperty_1;

	var FunctionPrototype$1 = Function.prototype;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getDescriptor = DESCRIPTORS$t && Object.getOwnPropertyDescriptor;

	var EXISTS = hasOwn$n(FunctionPrototype$1, 'name');
	// additional protection from minified / mangled / dropped function names
	var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
	var CONFIGURABLE = EXISTS && (!DESCRIPTORS$t || (DESCRIPTORS$t && getDescriptor(FunctionPrototype$1, 'name').configurable));

	var functionName = {
	  EXISTS: EXISTS,
	  PROPER: PROPER,
	  CONFIGURABLE: CONFIGURABLE
	};

	var uncurryThis$T = functionUncurryThis;
	var isCallable$s = isCallable$y;
	var store$1 = sharedStoreExports;

	var functionToString = uncurryThis$T(Function.toString);

	// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
	if (!isCallable$s(store$1.inspectSource)) {
	  store$1.inspectSource = function (it) {
	    return functionToString(it);
	  };
	}

	var inspectSource$3 = store$1.inspectSource;

	var globalThis$N = globalThis_1;
	var isCallable$r = isCallable$y;

	var WeakMap$1 = globalThis$N.WeakMap;

	var weakMapBasicDetection = isCallable$r(WeakMap$1) && /native code/.test(String(WeakMap$1));

	var shared$2 = shared$4;
	var uid$3 = uid$5;

	var keys$2 = shared$2('keys');

	var sharedKey$3 = function (key) {
	  return keys$2[key] || (keys$2[key] = uid$3(key));
	};

	var hiddenKeys$5 = {};

	var NATIVE_WEAK_MAP$1 = weakMapBasicDetection;
	var globalThis$M = globalThis_1;
	var isObject$m = isObject$r;
	var createNonEnumerableProperty$e = createNonEnumerableProperty$f;
	var hasOwn$m = hasOwnProperty_1;
	var shared$1 = sharedStoreExports;
	var sharedKey$2 = sharedKey$3;
	var hiddenKeys$4 = hiddenKeys$5;

	var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
	var TypeError$7 = globalThis$M.TypeError;
	var WeakMap = globalThis$M.WeakMap;
	var set$2, get$1, has$6;

	var enforce = function (it) {
	  return has$6(it) ? get$1(it) : set$2(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject$m(it) || (state = get$1(it)).type !== TYPE) {
	      throw new TypeError$7('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};

	if (NATIVE_WEAK_MAP$1 || shared$1.state) {
	  var store = shared$1.state || (shared$1.state = new WeakMap());
	  /* eslint-disable no-self-assign -- prototype methods protection */
	  store.get = store.get;
	  store.has = store.has;
	  store.set = store.set;
	  /* eslint-enable no-self-assign -- prototype methods protection */
	  set$2 = function (it, metadata) {
	    if (store.has(it)) throw new TypeError$7(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    store.set(it, metadata);
	    return metadata;
	  };
	  get$1 = function (it) {
	    return store.get(it) || {};
	  };
	  has$6 = function (it) {
	    return store.has(it);
	  };
	} else {
	  var STATE = sharedKey$2('state');
	  hiddenKeys$4[STATE] = true;
	  set$2 = function (it, metadata) {
	    if (hasOwn$m(it, STATE)) throw new TypeError$7(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    createNonEnumerableProperty$e(it, STATE, metadata);
	    return metadata;
	  };
	  get$1 = function (it) {
	    return hasOwn$m(it, STATE) ? it[STATE] : {};
	  };
	  has$6 = function (it) {
	    return hasOwn$m(it, STATE);
	  };
	}

	var internalState = {
	  set: set$2,
	  get: get$1,
	  has: has$6,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var uncurryThis$S = functionUncurryThis;
	var fails$I = fails$P;
	var isCallable$q = isCallable$y;
	var hasOwn$l = hasOwnProperty_1;
	var DESCRIPTORS$s = descriptors;
	var CONFIGURABLE_FUNCTION_NAME$2 = functionName.CONFIGURABLE;
	var inspectSource$2 = inspectSource$3;
	var InternalStateModule$c = internalState;

	var enforceInternalState$4 = InternalStateModule$c.enforce;
	var getInternalState$7 = InternalStateModule$c.get;
	var $String$3 = String;
	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var defineProperty$a = Object.defineProperty;
	var stringSlice$b = uncurryThis$S(''.slice);
	var replace$a = uncurryThis$S(''.replace);
	var join$5 = uncurryThis$S([].join);

	var CONFIGURABLE_LENGTH = DESCRIPTORS$s && !fails$I(function () {
	  return defineProperty$a(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
	});

	var TEMPLATE = String(String).split('String');

	var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
	  if (stringSlice$b($String$3(name), 0, 7) === 'Symbol(') {
	    name = '[' + replace$a($String$3(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
	  }
	  if (options && options.getter) name = 'get ' + name;
	  if (options && options.setter) name = 'set ' + name;
	  if (!hasOwn$l(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$2 && value.name !== name)) {
	    if (DESCRIPTORS$s) defineProperty$a(value, 'name', { value: name, configurable: true });
	    else value.name = name;
	  }
	  if (CONFIGURABLE_LENGTH && options && hasOwn$l(options, 'arity') && value.length !== options.arity) {
	    defineProperty$a(value, 'length', { value: options.arity });
	  }
	  try {
	    if (options && hasOwn$l(options, 'constructor') && options.constructor) {
	      if (DESCRIPTORS$s) defineProperty$a(value, 'prototype', { writable: false });
	    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
	    } else if (value.prototype) value.prototype = undefined;
	  } catch (error) { /* empty */ }
	  var state = enforceInternalState$4(value);
	  if (!hasOwn$l(state, 'source')) {
	    state.source = join$5(TEMPLATE, typeof name == 'string' ? name : '');
	  } return value;
	};

	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	// eslint-disable-next-line no-extend-native -- required
	Function.prototype.toString = makeBuiltIn$2(function toString() {
	  return isCallable$q(this) && getInternalState$7(this).source || inspectSource$2(this);
	}, 'toString');

	var makeBuiltInExports = makeBuiltIn$3.exports;

	var isCallable$p = isCallable$y;
	var definePropertyModule$4 = objectDefineProperty;
	var makeBuiltIn$1 = makeBuiltInExports;
	var defineGlobalProperty$1 = defineGlobalProperty$3;

	var defineBuiltIn$f = function (O, key, value, options) {
	  if (!options) options = {};
	  var simple = options.enumerable;
	  var name = options.name !== undefined ? options.name : key;
	  if (isCallable$p(value)) makeBuiltIn$1(value, name, options);
	  if (options.global) {
	    if (simple) O[key] = value;
	    else defineGlobalProperty$1(key, value);
	  } else {
	    try {
	      if (!options.unsafe) delete O[key];
	      else if (O[key]) simple = true;
	    } catch (error) { /* empty */ }
	    if (simple) O[key] = value;
	    else definePropertyModule$4.f(O, key, {
	      value: value,
	      enumerable: false,
	      configurable: !options.nonConfigurable,
	      writable: !options.nonWritable
	    });
	  } return O;
	};

	var objectGetOwnPropertyNames = {};

	var ceil = Math.ceil;
	var floor$6 = Math.floor;

	// `Math.trunc` method
	// https://tc39.es/ecma262/#sec-math.trunc
	// eslint-disable-next-line es/no-math-trunc -- safe
	var mathTrunc = Math.trunc || function trunc(x) {
	  var n = +x;
	  return (n > 0 ? floor$6 : ceil)(n);
	};

	var trunc = mathTrunc;

	// `ToIntegerOrInfinity` abstract operation
	// https://tc39.es/ecma262/#sec-tointegerorinfinity
	var toIntegerOrInfinity$d = function (argument) {
	  var number = +argument;
	  // eslint-disable-next-line no-self-compare -- NaN check
	  return number !== number || number === 0 ? 0 : trunc(number);
	};

	var toIntegerOrInfinity$c = toIntegerOrInfinity$d;

	var max$5 = Math.max;
	var min$8 = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
	var toAbsoluteIndex$5 = function (index, length) {
	  var integer = toIntegerOrInfinity$c(index);
	  return integer < 0 ? max$5(integer + length, 0) : min$8(integer, length);
	};

	var toIntegerOrInfinity$b = toIntegerOrInfinity$d;

	var min$7 = Math.min;

	// `ToLength` abstract operation
	// https://tc39.es/ecma262/#sec-tolength
	var toLength$a = function (argument) {
	  var len = toIntegerOrInfinity$b(argument);
	  return len > 0 ? min$7(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var toLength$9 = toLength$a;

	// `LengthOfArrayLike` abstract operation
	// https://tc39.es/ecma262/#sec-lengthofarraylike
	var lengthOfArrayLike$p = function (obj) {
	  return toLength$9(obj.length);
	};

	var toIndexedObject$9 = toIndexedObject$b;
	var toAbsoluteIndex$4 = toAbsoluteIndex$5;
	var lengthOfArrayLike$o = lengthOfArrayLike$p;

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod$6 = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject$9($this);
	    var length = lengthOfArrayLike$o(O);
	    if (length === 0) return !IS_INCLUDES && -1;
	    var index = toAbsoluteIndex$4(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare -- NaN check
	    if (IS_INCLUDES && el !== el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare -- NaN check
	      if (value !== value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var arrayIncludes = {
	  // `Array.prototype.includes` method
	  // https://tc39.es/ecma262/#sec-array.prototype.includes
	  includes: createMethod$6(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.es/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod$6(false)
	};

	var uncurryThis$R = functionUncurryThis;
	var hasOwn$k = hasOwnProperty_1;
	var toIndexedObject$8 = toIndexedObject$b;
	var indexOf$2 = arrayIncludes.indexOf;
	var hiddenKeys$3 = hiddenKeys$5;

	var push$e = uncurryThis$R([].push);

	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject$8(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !hasOwn$k(hiddenKeys$3, key) && hasOwn$k(O, key) && push$e(result, key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (hasOwn$k(O, key = names[i++])) {
	    ~indexOf$2(result, key) || push$e(result, key);
	  }
	  return result;
	};

	// IE8- don't enum bug keys
	var enumBugKeys$3 = [
	  'constructor',
	  'hasOwnProperty',
	  'isPrototypeOf',
	  'propertyIsEnumerable',
	  'toLocaleString',
	  'toString',
	  'valueOf'
	];

	var internalObjectKeys$1 = objectKeysInternal;
	var enumBugKeys$2 = enumBugKeys$3;

	var hiddenKeys$2 = enumBugKeys$2.concat('length', 'prototype');

	// `Object.getOwnPropertyNames` method
	// https://tc39.es/ecma262/#sec-object.getownpropertynames
	// eslint-disable-next-line es/no-object-getownpropertynames -- safe
	objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return internalObjectKeys$1(O, hiddenKeys$2);
	};

	var objectGetOwnPropertySymbols = {};

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
	objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

	var getBuiltIn$c = getBuiltIn$e;
	var uncurryThis$Q = functionUncurryThis;
	var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
	var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
	var anObject$w = anObject$y;

	var concat$2 = uncurryThis$Q([].concat);

	// all object keys, includes non-enumerable and symbols
	var ownKeys$2 = getBuiltIn$c('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = getOwnPropertyNamesModule$1.f(anObject$w(it));
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
	  return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
	};

	var hasOwn$j = hasOwnProperty_1;
	var ownKeys$1 = ownKeys$2;
	var getOwnPropertyDescriptorModule$2 = objectGetOwnPropertyDescriptor;
	var definePropertyModule$3 = objectDefineProperty;

	var copyConstructorProperties$4 = function (target, source, exceptions) {
	  var keys = ownKeys$1(source);
	  var defineProperty = definePropertyModule$3.f;
	  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$2.f;
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!hasOwn$j(target, key) && !(exceptions && hasOwn$j(exceptions, key))) {
	      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	    }
	  }
	};

	var fails$H = fails$P;
	var isCallable$o = isCallable$y;

	var replacement = /#|\.prototype\./;

	var isForced$4 = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value === POLYFILL ? true
	    : value === NATIVE ? false
	    : isCallable$o(detection) ? fails$H(detection)
	    : !!detection;
	};

	var normalize = isForced$4.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced$4.data = {};
	var NATIVE = isForced$4.NATIVE = 'N';
	var POLYFILL = isForced$4.POLYFILL = 'P';

	var isForced_1 = isForced$4;

	var globalThis$L = globalThis_1;
	var getOwnPropertyDescriptor$5 = objectGetOwnPropertyDescriptor.f;
	var createNonEnumerableProperty$d = createNonEnumerableProperty$f;
	var defineBuiltIn$e = defineBuiltIn$f;
	var defineGlobalProperty = defineGlobalProperty$3;
	var copyConstructorProperties$3 = copyConstructorProperties$4;
	var isForced$3 = isForced_1;

	/*
	  options.target         - name of the target object
	  options.global         - target is the global object
	  options.stat           - export as static methods of target
	  options.proto          - export as prototype methods of target
	  options.real           - real prototype method for the `pure` version
	  options.forced         - export even if the native feature is available
	  options.bind           - bind methods to the target, required for the `pure` version
	  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
	  options.sham           - add a flag to not completely full polyfills
	  options.enumerable     - export as enumerable property
	  options.dontCallGetSet - prevent calling a getter on target
	  options.name           - the .name of the function if it does not match the key
	*/
	var _export = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
	  if (GLOBAL) {
	    target = globalThis$L;
	  } else if (STATIC) {
	    target = globalThis$L[TARGET] || defineGlobalProperty(TARGET, {});
	  } else {
	    target = globalThis$L[TARGET] && globalThis$L[TARGET].prototype;
	  }
	  if (target) for (key in source) {
	    sourceProperty = source[key];
	    if (options.dontCallGetSet) {
	      descriptor = getOwnPropertyDescriptor$5(target, key);
	      targetProperty = descriptor && descriptor.value;
	    } else targetProperty = target[key];
	    FORCED = isForced$3(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    // contained in target
	    if (!FORCED && targetProperty !== undefined) {
	      if (typeof sourceProperty == typeof targetProperty) continue;
	      copyConstructorProperties$3(sourceProperty, targetProperty);
	    }
	    // add a flag to not completely full polyfills
	    if (options.sham || (targetProperty && targetProperty.sham)) {
	      createNonEnumerableProperty$d(sourceProperty, 'sham', true);
	    }
	    defineBuiltIn$e(target, key, sourceProperty, options);
	  }
	};

	var wellKnownSymbol$u = wellKnownSymbol$w;

	var TO_STRING_TAG$5 = wellKnownSymbol$u('toStringTag');
	var test$1 = {};

	test$1[TO_STRING_TAG$5] = 'z';

	var toStringTagSupport = String(test$1) === '[object z]';

	var TO_STRING_TAG_SUPPORT = toStringTagSupport;
	var isCallable$n = isCallable$y;
	var classofRaw$1 = classofRaw$2;
	var wellKnownSymbol$t = wellKnownSymbol$w;

	var TO_STRING_TAG$4 = wellKnownSymbol$t('toStringTag');
	var $Object$2 = Object;

	// ES3 wrong here
	var CORRECT_ARGUMENTS = classofRaw$1(function () { return arguments; }()) === 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) { /* empty */ }
	};

	// getting tag from ES6+ `Object.prototype.toString`
	var classof$j = TO_STRING_TAG_SUPPORT ? classofRaw$1 : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (tag = tryGet(O = $Object$2(it), TO_STRING_TAG$4)) == 'string' ? tag
	    // builtinTag case
	    : CORRECT_ARGUMENTS ? classofRaw$1(O)
	    // ES3 arguments fallback
	    : (result = classofRaw$1(O)) === 'Object' && isCallable$n(O.callee) ? 'Arguments' : result;
	};

	var classof$i = classof$j;

	var $String$2 = String;

	var toString$m = function (argument) {
	  if (classof$i(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
	  return $String$2(argument);
	};

	var makeBuiltIn = makeBuiltInExports;
	var defineProperty$9 = objectDefineProperty;

	var defineBuiltInAccessor$e = function (target, name, descriptor) {
	  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
	  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
	  return defineProperty$9.f(target, name, descriptor);
	};

	var $$18 = _export;
	var DESCRIPTORS$r = descriptors;
	var globalThis$K = globalThis_1;
	var uncurryThis$P = functionUncurryThis;
	var hasOwn$i = hasOwnProperty_1;
	var isCallable$m = isCallable$y;
	var isPrototypeOf$7 = objectIsPrototypeOf;
	var toString$l = toString$m;
	var defineBuiltInAccessor$d = defineBuiltInAccessor$e;
	var copyConstructorProperties$2 = copyConstructorProperties$4;

	var NativeSymbol = globalThis$K.Symbol;
	var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

	if (DESCRIPTORS$r && isCallable$m(NativeSymbol) && (!('description' in SymbolPrototype) ||
	  // Safari 12 bug
	  NativeSymbol().description !== undefined
	)) {
	  var EmptyStringDescriptionStore = {};
	  // wrap Symbol constructor for correct work with undefined description
	  var SymbolWrapper = function Symbol() {
	    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString$l(arguments[0]);
	    var result = isPrototypeOf$7(SymbolPrototype, this)
	      // eslint-disable-next-line sonar/inconsistent-function-call -- ok
	      ? new NativeSymbol(description)
	      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
	      : description === undefined ? NativeSymbol() : NativeSymbol(description);
	    if (description === '') EmptyStringDescriptionStore[result] = true;
	    return result;
	  };

	  copyConstructorProperties$2(SymbolWrapper, NativeSymbol);
	  SymbolWrapper.prototype = SymbolPrototype;
	  SymbolPrototype.constructor = SymbolWrapper;

	  var NATIVE_SYMBOL$2 = String(NativeSymbol('description detection')) === 'Symbol(description detection)';
	  var thisSymbolValue = uncurryThis$P(SymbolPrototype.valueOf);
	  var symbolDescriptiveString = uncurryThis$P(SymbolPrototype.toString);
	  var regexp = /^Symbol\((.*)\)[^)]+$/;
	  var replace$9 = uncurryThis$P(''.replace);
	  var stringSlice$a = uncurryThis$P(''.slice);

	  defineBuiltInAccessor$d(SymbolPrototype, 'description', {
	    configurable: true,
	    get: function description() {
	      var symbol = thisSymbolValue(this);
	      if (hasOwn$i(EmptyStringDescriptionStore, symbol)) return '';
	      var string = symbolDescriptiveString(symbol);
	      var desc = NATIVE_SYMBOL$2 ? stringSlice$a(string, 7, -1) : replace$9(string, regexp, '$1');
	      return desc === '' ? undefined : desc;
	    }
	  });

	  $$18({ global: true, constructor: true, forced: true }, {
	    Symbol: SymbolWrapper
	  });
	}

	var NATIVE_BIND$1 = functionBindNative;

	var FunctionPrototype = Function.prototype;
	var apply$6 = FunctionPrototype.apply;
	var call$B = FunctionPrototype.call;

	// eslint-disable-next-line es/no-reflect -- safe
	var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$1 ? call$B.bind(apply$6) : function () {
	  return call$B.apply(apply$6, arguments);
	});

	var uncurryThis$O = functionUncurryThis;
	var aCallable$m = aCallable$o;

	var functionUncurryThisAccessor = function (object, key, method) {
	  try {
	    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	    return uncurryThis$O(aCallable$m(Object.getOwnPropertyDescriptor(object, key)[method]));
	  } catch (error) { /* empty */ }
	};

	var isObject$l = isObject$r;

	var isPossiblePrototype$1 = function (argument) {
	  return isObject$l(argument) || argument === null;
	};

	var isPossiblePrototype = isPossiblePrototype$1;

	var $String$1 = String;
	var $TypeError$l = TypeError;

	var aPossiblePrototype$1 = function (argument) {
	  if (isPossiblePrototype(argument)) return argument;
	  throw new $TypeError$l("Can't set " + $String$1(argument) + ' as a prototype');
	};

	/* eslint-disable no-proto -- safe */
	var uncurryThisAccessor$3 = functionUncurryThisAccessor;
	var isObject$k = isObject$r;
	var requireObjectCoercible$b = requireObjectCoercible$e;
	var aPossiblePrototype = aPossiblePrototype$1;

	// `Object.setPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.setprototypeof
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	// eslint-disable-next-line es/no-object-setprototypeof -- safe
	var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
	  var CORRECT_SETTER = false;
	  var test = {};
	  var setter;
	  try {
	    setter = uncurryThisAccessor$3(Object.prototype, '__proto__', 'set');
	    setter(test, []);
	    CORRECT_SETTER = test instanceof Array;
	  } catch (error) { /* empty */ }
	  return function setPrototypeOf(O, proto) {
	    requireObjectCoercible$b(O);
	    aPossiblePrototype(proto);
	    if (!isObject$k(O)) return O;
	    if (CORRECT_SETTER) setter(O, proto);
	    else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);

	var defineProperty$8 = objectDefineProperty.f;

	var proxyAccessor$2 = function (Target, Source, key) {
	  key in Target || defineProperty$8(Target, key, {
	    configurable: true,
	    get: function () { return Source[key]; },
	    set: function (it) { Source[key] = it; }
	  });
	};

	var isCallable$l = isCallable$y;
	var isObject$j = isObject$r;
	var setPrototypeOf$6 = objectSetPrototypeOf;

	// makes subclassing work correct for wrapped built-ins
	var inheritIfRequired$6 = function ($this, dummy, Wrapper) {
	  var NewTarget, NewTargetPrototype;
	  if (
	    // it can work only with native `setPrototypeOf`
	    setPrototypeOf$6 &&
	    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
	    isCallable$l(NewTarget = dummy.constructor) &&
	    NewTarget !== Wrapper &&
	    isObject$j(NewTargetPrototype = NewTarget.prototype) &&
	    NewTargetPrototype !== Wrapper.prototype
	  ) setPrototypeOf$6($this, NewTargetPrototype);
	  return $this;
	};

	var toString$k = toString$m;

	var normalizeStringArgument$2 = function (argument, $default) {
	  return argument === undefined ? arguments.length < 2 ? '' : $default : toString$k(argument);
	};

	var isObject$i = isObject$r;
	var createNonEnumerableProperty$c = createNonEnumerableProperty$f;

	// `InstallErrorCause` abstract operation
	// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
	var installErrorCause$1 = function (O, options) {
	  if (isObject$i(options) && 'cause' in options) {
	    createNonEnumerableProperty$c(O, 'cause', options.cause);
	  }
	};

	var uncurryThis$N = functionUncurryThis;

	var $Error = Error;
	var replace$8 = uncurryThis$N(''.replace);

	var TEST = (function (arg) { return String(new $Error(arg).stack); })('zxcasd');
	// eslint-disable-next-line redos/no-vulnerable -- safe
	var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
	var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

	var errorStackClear = function (stack, dropEntries) {
	  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
	    while (dropEntries--) stack = replace$8(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
	  } return stack;
	};

	var fails$G = fails$P;
	var createPropertyDescriptor$5 = createPropertyDescriptor$8;

	var errorStackInstallable = !fails$G(function () {
	  var error = new Error('a');
	  if (!('stack' in error)) return true;
	  // eslint-disable-next-line es/no-object-defineproperty -- safe
	  Object.defineProperty(error, 'stack', createPropertyDescriptor$5(1, 7));
	  return error.stack !== 7;
	});

	var createNonEnumerableProperty$b = createNonEnumerableProperty$f;
	var clearErrorStack$1 = errorStackClear;
	var ERROR_STACK_INSTALLABLE$1 = errorStackInstallable;

	// non-standard V8
	var captureStackTrace = Error.captureStackTrace;

	var errorStackInstall = function (error, C, stack, dropEntries) {
	  if (ERROR_STACK_INSTALLABLE$1) {
	    if (captureStackTrace) captureStackTrace(error, C);
	    else createNonEnumerableProperty$b(error, 'stack', clearErrorStack$1(stack, dropEntries));
	  }
	};

	var getBuiltIn$b = getBuiltIn$e;
	var hasOwn$h = hasOwnProperty_1;
	var createNonEnumerableProperty$a = createNonEnumerableProperty$f;
	var isPrototypeOf$6 = objectIsPrototypeOf;
	var setPrototypeOf$5 = objectSetPrototypeOf;
	var copyConstructorProperties$1 = copyConstructorProperties$4;
	var proxyAccessor$1 = proxyAccessor$2;
	var inheritIfRequired$5 = inheritIfRequired$6;
	var normalizeStringArgument$1 = normalizeStringArgument$2;
	var installErrorCause = installErrorCause$1;
	var installErrorStack = errorStackInstall;
	var DESCRIPTORS$q = descriptors;

	var wrapErrorConstructorWithCause$1 = function (FULL_NAME, wrapper, FORCED, IS_AGGREGATE_ERROR) {
	  var STACK_TRACE_LIMIT = 'stackTraceLimit';
	  var OPTIONS_POSITION = IS_AGGREGATE_ERROR ? 2 : 1;
	  var path = FULL_NAME.split('.');
	  var ERROR_NAME = path[path.length - 1];
	  var OriginalError = getBuiltIn$b.apply(null, path);

	  if (!OriginalError) return;

	  var OriginalErrorPrototype = OriginalError.prototype;

	  // V8 9.3- bug https://bugs.chromium.org/p/v8/issues/detail?id=12006
	  if (hasOwn$h(OriginalErrorPrototype, 'cause')) delete OriginalErrorPrototype.cause;

	  if (!FORCED) return OriginalError;

	  var BaseError = getBuiltIn$b('Error');

	  var WrappedError = wrapper(function (a, b) {
	    var message = normalizeStringArgument$1(IS_AGGREGATE_ERROR ? b : a, undefined);
	    var result = IS_AGGREGATE_ERROR ? new OriginalError(a) : new OriginalError();
	    if (message !== undefined) createNonEnumerableProperty$a(result, 'message', message);
	    installErrorStack(result, WrappedError, result.stack, 2);
	    if (this && isPrototypeOf$6(OriginalErrorPrototype, this)) inheritIfRequired$5(result, this, WrappedError);
	    if (arguments.length > OPTIONS_POSITION) installErrorCause(result, arguments[OPTIONS_POSITION]);
	    return result;
	  });

	  WrappedError.prototype = OriginalErrorPrototype;

	  if (ERROR_NAME !== 'Error') {
	    if (setPrototypeOf$5) setPrototypeOf$5(WrappedError, BaseError);
	    else copyConstructorProperties$1(WrappedError, BaseError, { name: true });
	  } else if (DESCRIPTORS$q && STACK_TRACE_LIMIT in OriginalError) {
	    proxyAccessor$1(WrappedError, OriginalError, STACK_TRACE_LIMIT);
	    proxyAccessor$1(WrappedError, OriginalError, 'prepareStackTrace');
	  }

	  copyConstructorProperties$1(WrappedError, OriginalError);

	  try {
	    // Safari 13- bug: WebAssembly errors does not have a proper `.name`
	    if (OriginalErrorPrototype.name !== ERROR_NAME) {
	      createNonEnumerableProperty$a(OriginalErrorPrototype, 'name', ERROR_NAME);
	    }
	    OriginalErrorPrototype.constructor = WrappedError;
	  } catch (error) { /* empty */ }

	  return WrappedError;
	};

	/* eslint-disable no-unused-vars -- required for functions `.length` */
	var $$17 = _export;
	var globalThis$J = globalThis_1;
	var apply$5 = functionApply;
	var wrapErrorConstructorWithCause = wrapErrorConstructorWithCause$1;

	var WEB_ASSEMBLY = 'WebAssembly';
	var WebAssembly = globalThis$J[WEB_ASSEMBLY];

	// eslint-disable-next-line es/no-error-cause -- feature detection
	var FORCED$9 = new Error('e', { cause: 7 }).cause !== 7;

	var exportGlobalErrorCauseWrapper = function (ERROR_NAME, wrapper) {
	  var O = {};
	  O[ERROR_NAME] = wrapErrorConstructorWithCause(ERROR_NAME, wrapper, FORCED$9);
	  $$17({ global: true, constructor: true, arity: 1, forced: FORCED$9 }, O);
	};

	var exportWebAssemblyErrorCauseWrapper = function (ERROR_NAME, wrapper) {
	  if (WebAssembly && WebAssembly[ERROR_NAME]) {
	    var O = {};
	    O[ERROR_NAME] = wrapErrorConstructorWithCause(WEB_ASSEMBLY + '.' + ERROR_NAME, wrapper, FORCED$9);
	    $$17({ target: WEB_ASSEMBLY, stat: true, constructor: true, arity: 1, forced: FORCED$9 }, O);
	  }
	};

	// https://tc39.es/ecma262/#sec-nativeerror
	exportGlobalErrorCauseWrapper('Error', function (init) {
	  return function Error(message) { return apply$5(init, this, arguments); };
	});
	exportGlobalErrorCauseWrapper('EvalError', function (init) {
	  return function EvalError(message) { return apply$5(init, this, arguments); };
	});
	exportGlobalErrorCauseWrapper('RangeError', function (init) {
	  return function RangeError(message) { return apply$5(init, this, arguments); };
	});
	exportGlobalErrorCauseWrapper('ReferenceError', function (init) {
	  return function ReferenceError(message) { return apply$5(init, this, arguments); };
	});
	exportGlobalErrorCauseWrapper('SyntaxError', function (init) {
	  return function SyntaxError(message) { return apply$5(init, this, arguments); };
	});
	exportGlobalErrorCauseWrapper('TypeError', function (init) {
	  return function TypeError(message) { return apply$5(init, this, arguments); };
	});
	exportGlobalErrorCauseWrapper('URIError', function (init) {
	  return function URIError(message) { return apply$5(init, this, arguments); };
	});
	exportWebAssemblyErrorCauseWrapper('CompileError', function (init) {
	  return function CompileError(message) { return apply$5(init, this, arguments); };
	});
	exportWebAssemblyErrorCauseWrapper('LinkError', function (init) {
	  return function LinkError(message) { return apply$5(init, this, arguments); };
	});
	exportWebAssemblyErrorCauseWrapper('RuntimeError', function (init) {
	  return function RuntimeError(message) { return apply$5(init, this, arguments); };
	});

	var classof$h = classofRaw$2;

	// `IsArray` abstract operation
	// https://tc39.es/ecma262/#sec-isarray
	// eslint-disable-next-line es/no-array-isarray -- safe
	var isArray$8 = Array.isArray || function isArray(argument) {
	  return classof$h(argument) === 'Array';
	};

	var $TypeError$k = TypeError;
	var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

	var doesNotExceedSafeInteger$5 = function (it) {
	  if (it > MAX_SAFE_INTEGER) throw $TypeError$k('Maximum allowed index exceeded');
	  return it;
	};

	var DESCRIPTORS$p = descriptors;
	var definePropertyModule$2 = objectDefineProperty;
	var createPropertyDescriptor$4 = createPropertyDescriptor$8;

	var createProperty$8 = function (object, key, value) {
	  if (DESCRIPTORS$p) definePropertyModule$2.f(object, key, createPropertyDescriptor$4(0, value));
	  else object[key] = value;
	};

	var uncurryThis$M = functionUncurryThis;
	var fails$F = fails$P;
	var isCallable$k = isCallable$y;
	var classof$g = classof$j;
	var getBuiltIn$a = getBuiltIn$e;
	var inspectSource$1 = inspectSource$3;

	var noop = function () { /* empty */ };
	var construct = getBuiltIn$a('Reflect', 'construct');
	var constructorRegExp = /^\s*(?:class|function)\b/;
	var exec$8 = uncurryThis$M(constructorRegExp.exec);
	var INCORRECT_TO_STRING = !constructorRegExp.test(noop);

	var isConstructorModern = function isConstructor(argument) {
	  if (!isCallable$k(argument)) return false;
	  try {
	    construct(noop, [], argument);
	    return true;
	  } catch (error) {
	    return false;
	  }
	};

	var isConstructorLegacy = function isConstructor(argument) {
	  if (!isCallable$k(argument)) return false;
	  switch (classof$g(argument)) {
	    case 'AsyncFunction':
	    case 'GeneratorFunction':
	    case 'AsyncGeneratorFunction': return false;
	  }
	  try {
	    // we can't check .prototype since constructors produced by .bind haven't it
	    // `Function#toString` throws on some built-it function in some legacy engines
	    // (for example, `DOMQuad` and similar in FF41-)
	    return INCORRECT_TO_STRING || !!exec$8(constructorRegExp, inspectSource$1(argument));
	  } catch (error) {
	    return true;
	  }
	};

	isConstructorLegacy.sham = true;

	// `IsConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-isconstructor
	var isConstructor$5 = !construct || fails$F(function () {
	  var called;
	  return isConstructorModern(isConstructorModern.call)
	    || !isConstructorModern(Object)
	    || !isConstructorModern(function () { called = true; })
	    || called;
	}) ? isConstructorLegacy : isConstructorModern;

	var isArray$7 = isArray$8;
	var isConstructor$4 = isConstructor$5;
	var isObject$h = isObject$r;
	var wellKnownSymbol$s = wellKnownSymbol$w;

	var SPECIES$6 = wellKnownSymbol$s('species');
	var $Array$4 = Array;

	// a part of `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesConstructor$1 = function (originalArray) {
	  var C;
	  if (isArray$7(originalArray)) {
	    C = originalArray.constructor;
	    // cross-realm fallback
	    if (isConstructor$4(C) && (C === $Array$4 || isArray$7(C.prototype))) C = undefined;
	    else if (isObject$h(C)) {
	      C = C[SPECIES$6];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? $Array$4 : C;
	};

	var arraySpeciesConstructor = arraySpeciesConstructor$1;

	// `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesCreate$4 = function (originalArray, length) {
	  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
	};

	var fails$E = fails$P;
	var wellKnownSymbol$r = wellKnownSymbol$w;
	var V8_VERSION$2 = environmentV8Version;

	var SPECIES$5 = wellKnownSymbol$r('species');

	var arrayMethodHasSpeciesSupport$5 = function (METHOD_NAME) {
	  // We can't use this feature detection in V8 since it causes
	  // deoptimization and serious performance degradation
	  // https://github.com/zloirock/core-js/issues/677
	  return V8_VERSION$2 >= 51 || !fails$E(function () {
	    var array = [];
	    var constructor = array.constructor = {};
	    constructor[SPECIES$5] = function () {
	      return { foo: 1 };
	    };
	    return array[METHOD_NAME](Boolean).foo !== 1;
	  });
	};

	var $$16 = _export;
	var fails$D = fails$P;
	var isArray$6 = isArray$8;
	var isObject$g = isObject$r;
	var toObject$f = toObject$h;
	var lengthOfArrayLike$n = lengthOfArrayLike$p;
	var doesNotExceedSafeInteger$4 = doesNotExceedSafeInteger$5;
	var createProperty$7 = createProperty$8;
	var arraySpeciesCreate$3 = arraySpeciesCreate$4;
	var arrayMethodHasSpeciesSupport$4 = arrayMethodHasSpeciesSupport$5;
	var wellKnownSymbol$q = wellKnownSymbol$w;
	var V8_VERSION$1 = environmentV8Version;

	var IS_CONCAT_SPREADABLE = wellKnownSymbol$q('isConcatSpreadable');

	// We can't use this feature detection in V8 since it causes
	// deoptimization and serious performance degradation
	// https://github.com/zloirock/core-js/issues/679
	var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$1 >= 51 || !fails$D(function () {
	  var array = [];
	  array[IS_CONCAT_SPREADABLE] = false;
	  return array.concat()[0] !== array;
	});

	var isConcatSpreadable = function (O) {
	  if (!isObject$g(O)) return false;
	  var spreadable = O[IS_CONCAT_SPREADABLE];
	  return spreadable !== undefined ? !!spreadable : isArray$6(O);
	};

	var FORCED$8 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport$4('concat');

	// `Array.prototype.concat` method
	// https://tc39.es/ecma262/#sec-array.prototype.concat
	// with adding support of @@isConcatSpreadable and @@species
	$$16({ target: 'Array', proto: true, arity: 1, forced: FORCED$8 }, {
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  concat: function concat(arg) {
	    var O = toObject$f(this);
	    var A = arraySpeciesCreate$3(O, 0);
	    var n = 0;
	    var i, k, length, len, E;
	    for (i = -1, length = arguments.length; i < length; i++) {
	      E = i === -1 ? O : arguments[i];
	      if (isConcatSpreadable(E)) {
	        len = lengthOfArrayLike$n(E);
	        doesNotExceedSafeInteger$4(n + len);
	        for (k = 0; k < len; k++, n++) if (k in E) createProperty$7(A, n, E[k]);
	      } else {
	        doesNotExceedSafeInteger$4(n + 1);
	        createProperty$7(A, n++, E);
	      }
	    }
	    A.length = n;
	    return A;
	  }
	});

	var classofRaw = classofRaw$2;
	var uncurryThis$L = functionUncurryThis;

	var functionUncurryThisClause = function (fn) {
	  // Nashorn bug:
	  //   https://github.com/zloirock/core-js/issues/1128
	  //   https://github.com/zloirock/core-js/issues/1130
	  if (classofRaw(fn) === 'Function') return uncurryThis$L(fn);
	};

	var uncurryThis$K = functionUncurryThisClause;
	var aCallable$l = aCallable$o;
	var NATIVE_BIND = functionBindNative;

	var bind$d = uncurryThis$K(uncurryThis$K.bind);

	// optional / simple context binding
	var functionBindContext = function (fn, that) {
	  aCallable$l(fn);
	  return that === undefined ? fn : NATIVE_BIND ? bind$d(fn, that) : function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var bind$c = functionBindContext;
	var uncurryThis$J = functionUncurryThis;
	var IndexedObject$4 = indexedObject;
	var toObject$e = toObject$h;
	var lengthOfArrayLike$m = lengthOfArrayLike$p;
	var arraySpeciesCreate$2 = arraySpeciesCreate$4;

	var push$d = uncurryThis$J([].push);

	// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
	var createMethod$5 = function (TYPE) {
	  var IS_MAP = TYPE === 1;
	  var IS_FILTER = TYPE === 2;
	  var IS_SOME = TYPE === 3;
	  var IS_EVERY = TYPE === 4;
	  var IS_FIND_INDEX = TYPE === 6;
	  var IS_FILTER_REJECT = TYPE === 7;
	  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject$e($this);
	    var self = IndexedObject$4(O);
	    var length = lengthOfArrayLike$m(self);
	    var boundFunction = bind$c(callbackfn, that);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate$2;
	    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
	    var value, result;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      value = self[index];
	      result = boundFunction(value, index, O);
	      if (TYPE) {
	        if (IS_MAP) target[index] = result; // map
	        else if (result) switch (TYPE) {
	          case 3: return true;              // some
	          case 5: return value;             // find
	          case 6: return index;             // findIndex
	          case 2: push$d(target, value);      // filter
	        } else switch (TYPE) {
	          case 4: return false;             // every
	          case 7: push$d(target, value);      // filterReject
	        }
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
	  };
	};

	var arrayIteration = {
	  // `Array.prototype.forEach` method
	  // https://tc39.es/ecma262/#sec-array.prototype.foreach
	  forEach: createMethod$5(0),
	  // `Array.prototype.map` method
	  // https://tc39.es/ecma262/#sec-array.prototype.map
	  map: createMethod$5(1),
	  // `Array.prototype.filter` method
	  // https://tc39.es/ecma262/#sec-array.prototype.filter
	  filter: createMethod$5(2),
	  // `Array.prototype.some` method
	  // https://tc39.es/ecma262/#sec-array.prototype.some
	  some: createMethod$5(3),
	  // `Array.prototype.every` method
	  // https://tc39.es/ecma262/#sec-array.prototype.every
	  every: createMethod$5(4),
	  // `Array.prototype.find` method
	  // https://tc39.es/ecma262/#sec-array.prototype.find
	  find: createMethod$5(5),
	  // `Array.prototype.findIndex` method
	  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
	  findIndex: createMethod$5(6),
	  // `Array.prototype.filterReject` method
	  // https://github.com/tc39/proposal-array-filtering
	  filterReject: createMethod$5(7)
	};

	var $$15 = _export;
	var $filter = arrayIteration.filter;
	var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$5;

	var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport$3('filter');

	// `Array.prototype.filter` method
	// https://tc39.es/ecma262/#sec-array.prototype.filter
	// with adding support of @@species
	$$15({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$3 }, {
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var call$A = functionCall;
	var anObject$v = anObject$y;
	var getMethod$8 = getMethod$a;

	var iteratorClose$6 = function (iterator, kind, value) {
	  var innerResult, innerError;
	  anObject$v(iterator);
	  try {
	    innerResult = getMethod$8(iterator, 'return');
	    if (!innerResult) {
	      if (kind === 'throw') throw value;
	      return value;
	    }
	    innerResult = call$A(innerResult, iterator);
	  } catch (error) {
	    innerError = true;
	    innerResult = error;
	  }
	  if (kind === 'throw') throw value;
	  if (innerError) throw innerResult;
	  anObject$v(innerResult);
	  return value;
	};

	var anObject$u = anObject$y;
	var iteratorClose$5 = iteratorClose$6;

	// call something on iterator step with safe closing on error
	var callWithSafeIterationClosing$3 = function (iterator, fn, value, ENTRIES) {
	  try {
	    return ENTRIES ? fn(anObject$u(value)[0], value[1]) : fn(value);
	  } catch (error) {
	    iteratorClose$5(iterator, 'throw', error);
	  }
	};

	var iterators = {};

	var wellKnownSymbol$p = wellKnownSymbol$w;
	var Iterators$4 = iterators;

	var ITERATOR$9 = wellKnownSymbol$p('iterator');
	var ArrayPrototype$1 = Array.prototype;

	// check on default Array iterator
	var isArrayIteratorMethod$3 = function (it) {
	  return it !== undefined && (Iterators$4.Array === it || ArrayPrototype$1[ITERATOR$9] === it);
	};

	var classof$f = classof$j;
	var getMethod$7 = getMethod$a;
	var isNullOrUndefined$b = isNullOrUndefined$e;
	var Iterators$3 = iterators;
	var wellKnownSymbol$o = wellKnownSymbol$w;

	var ITERATOR$8 = wellKnownSymbol$o('iterator');

	var getIteratorMethod$6 = function (it) {
	  if (!isNullOrUndefined$b(it)) return getMethod$7(it, ITERATOR$8)
	    || getMethod$7(it, '@@iterator')
	    || Iterators$3[classof$f(it)];
	};

	var call$z = functionCall;
	var aCallable$k = aCallable$o;
	var anObject$t = anObject$y;
	var tryToString$4 = tryToString$6;
	var getIteratorMethod$5 = getIteratorMethod$6;

	var $TypeError$j = TypeError;

	var getIterator$4 = function (argument, usingIterator) {
	  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$5(argument) : usingIterator;
	  if (aCallable$k(iteratorMethod)) return anObject$t(call$z(iteratorMethod, argument));
	  throw new $TypeError$j(tryToString$4(argument) + ' is not iterable');
	};

	var bind$b = functionBindContext;
	var call$y = functionCall;
	var toObject$d = toObject$h;
	var callWithSafeIterationClosing$2 = callWithSafeIterationClosing$3;
	var isArrayIteratorMethod$2 = isArrayIteratorMethod$3;
	var isConstructor$3 = isConstructor$5;
	var lengthOfArrayLike$l = lengthOfArrayLike$p;
	var createProperty$6 = createProperty$8;
	var getIterator$3 = getIterator$4;
	var getIteratorMethod$4 = getIteratorMethod$6;

	var $Array$3 = Array;

	// `Array.from` method implementation
	// https://tc39.es/ecma262/#sec-array.from
	var arrayFrom$1 = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	  var O = toObject$d(arrayLike);
	  var IS_CONSTRUCTOR = isConstructor$3(this);
	  var argumentsLength = arguments.length;
	  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
	  var mapping = mapfn !== undefined;
	  if (mapping) mapfn = bind$b(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
	  var iteratorMethod = getIteratorMethod$4(O);
	  var index = 0;
	  var length, result, step, iterator, next, value;
	  // if the target is not iterable or it's an array with the default iterator - use a simple case
	  if (iteratorMethod && !(this === $Array$3 && isArrayIteratorMethod$2(iteratorMethod))) {
	    result = IS_CONSTRUCTOR ? new this() : [];
	    iterator = getIterator$3(O, iteratorMethod);
	    next = iterator.next;
	    for (;!(step = call$y(next, iterator)).done; index++) {
	      value = mapping ? callWithSafeIterationClosing$2(iterator, mapfn, [step.value, index], true) : step.value;
	      createProperty$6(result, index, value);
	    }
	  } else {
	    length = lengthOfArrayLike$l(O);
	    result = IS_CONSTRUCTOR ? new this(length) : $Array$3(length);
	    for (;length > index; index++) {
	      value = mapping ? mapfn(O[index], index) : O[index];
	      createProperty$6(result, index, value);
	    }
	  }
	  result.length = index;
	  return result;
	};

	var wellKnownSymbol$n = wellKnownSymbol$w;

	var ITERATOR$7 = wellKnownSymbol$n('iterator');
	var SAFE_CLOSING = false;

	try {
	  var called = 0;
	  var iteratorWithReturn = {
	    next: function () {
	      return { done: !!called++ };
	    },
	    'return': function () {
	      SAFE_CLOSING = true;
	    }
	  };
	  iteratorWithReturn[ITERATOR$7] = function () {
	    return this;
	  };
	  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
	  Array.from(iteratorWithReturn, function () { throw 2; });
	} catch (error) { /* empty */ }

	var checkCorrectnessOfIteration$4 = function (exec, SKIP_CLOSING) {
	  try {
	    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
	  } catch (error) { return false; } // workaround of old WebKit + `eval` bug
	  var ITERATION_SUPPORT = false;
	  try {
	    var object = {};
	    object[ITERATOR$7] = function () {
	      return {
	        next: function () {
	          return { done: ITERATION_SUPPORT = true };
	        }
	      };
	    };
	    exec(object);
	  } catch (error) { /* empty */ }
	  return ITERATION_SUPPORT;
	};

	var $$14 = _export;
	var from = arrayFrom$1;
	var checkCorrectnessOfIteration$3 = checkCorrectnessOfIteration$4;

	var INCORRECT_ITERATION = !checkCorrectnessOfIteration$3(function (iterable) {
	  // eslint-disable-next-line es/no-array-from -- required for testing
	  Array.from(iterable);
	});

	// `Array.from` method
	// https://tc39.es/ecma262/#sec-array.from
	$$14({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
	  from: from
	});

	var objectDefineProperties = {};

	var internalObjectKeys = objectKeysInternal;
	var enumBugKeys$1 = enumBugKeys$3;

	// `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys
	// eslint-disable-next-line es/no-object-keys -- safe
	var objectKeys$4 = Object.keys || function keys(O) {
	  return internalObjectKeys(O, enumBugKeys$1);
	};

	var DESCRIPTORS$o = descriptors;
	var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
	var definePropertyModule$1 = objectDefineProperty;
	var anObject$s = anObject$y;
	var toIndexedObject$7 = toIndexedObject$b;
	var objectKeys$3 = objectKeys$4;

	// `Object.defineProperties` method
	// https://tc39.es/ecma262/#sec-object.defineproperties
	// eslint-disable-next-line es/no-object-defineproperties -- safe
	objectDefineProperties.f = DESCRIPTORS$o && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject$s(O);
	  var props = toIndexedObject$7(Properties);
	  var keys = objectKeys$3(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) definePropertyModule$1.f(O, key = keys[index++], props[key]);
	  return O;
	};

	var getBuiltIn$9 = getBuiltIn$e;

	var html$2 = getBuiltIn$9('document', 'documentElement');

	/* global ActiveXObject -- old IE, WSH */
	var anObject$r = anObject$y;
	var definePropertiesModule = objectDefineProperties;
	var enumBugKeys = enumBugKeys$3;
	var hiddenKeys$1 = hiddenKeys$5;
	var html$1 = html$2;
	var documentCreateElement$1 = documentCreateElement$2;
	var sharedKey$1 = sharedKey$3;

	var GT = '>';
	var LT = '<';
	var PROTOTYPE$1 = 'prototype';
	var SCRIPT = 'script';
	var IE_PROTO$1 = sharedKey$1('IE_PROTO');

	var EmptyConstructor = function () { /* empty */ };

	var scriptTag = function (content) {
	  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
	};

	// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
	var NullProtoObjectViaActiveX = function (activeXDocument) {
	  activeXDocument.write(scriptTag(''));
	  activeXDocument.close();
	  var temp = activeXDocument.parentWindow.Object;
	  // eslint-disable-next-line no-useless-assignment -- avoid memory leak
	  activeXDocument = null;
	  return temp;
	};

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var NullProtoObjectViaIFrame = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = documentCreateElement$1('iframe');
	  var JS = 'java' + SCRIPT + ':';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  html$1.appendChild(iframe);
	  // https://github.com/zloirock/core-js/issues/475
	  iframe.src = String(JS);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(scriptTag('document.F=Object'));
	  iframeDocument.close();
	  return iframeDocument.F;
	};

	// Check for document.domain and active x support
	// No need to use active x approach when document.domain is not set
	// see https://github.com/es-shims/es5-shim/issues/150
	// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
	// avoid IE GC bug
	var activeXDocument;
	var NullProtoObject = function () {
	  try {
	    activeXDocument = new ActiveXObject('htmlfile');
	  } catch (error) { /* ignore */ }
	  NullProtoObject = typeof document != 'undefined'
	    ? document.domain && activeXDocument
	      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
	      : NullProtoObjectViaIFrame()
	    : NullProtoObjectViaActiveX(activeXDocument); // WSH
	  var length = enumBugKeys.length;
	  while (length--) delete NullProtoObject[PROTOTYPE$1][enumBugKeys[length]];
	  return NullProtoObject();
	};

	hiddenKeys$1[IE_PROTO$1] = true;

	// `Object.create` method
	// https://tc39.es/ecma262/#sec-object.create
	// eslint-disable-next-line es/no-object-create -- safe
	var objectCreate$1 = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    EmptyConstructor[PROTOTYPE$1] = anObject$r(O);
	    result = new EmptyConstructor();
	    EmptyConstructor[PROTOTYPE$1] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO$1] = O;
	  } else result = NullProtoObject();
	  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
	};

	var wellKnownSymbol$m = wellKnownSymbol$w;
	var create$7 = objectCreate$1;
	var defineProperty$7 = objectDefineProperty.f;

	var UNSCOPABLES = wellKnownSymbol$m('unscopables');
	var ArrayPrototype = Array.prototype;

	// Array.prototype[@@unscopables]
	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	if (ArrayPrototype[UNSCOPABLES] === undefined) {
	  defineProperty$7(ArrayPrototype, UNSCOPABLES, {
	    configurable: true,
	    value: create$7(null)
	  });
	}

	// add a key to Array.prototype[@@unscopables]
	var addToUnscopables$4 = function (key) {
	  ArrayPrototype[UNSCOPABLES][key] = true;
	};

	var $$13 = _export;
	var $includes = arrayIncludes.includes;
	var fails$C = fails$P;
	var addToUnscopables$3 = addToUnscopables$4;

	// FF99+ bug
	var BROKEN_ON_SPARSE = fails$C(function () {
	  // eslint-disable-next-line es/no-array-prototype-includes -- detection
	  return !Array(1).includes();
	});

	// `Array.prototype.includes` method
	// https://tc39.es/ecma262/#sec-array.prototype.includes
	$$13({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
	  includes: function includes(el /* , fromIndex = 0 */) {
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables$3('includes');

	var fails$B = fails$P;

	var arrayMethodIsStrict$5 = function (METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !!method && fails$B(function () {
	    // eslint-disable-next-line no-useless-call -- required for testing
	    method.call(null, argument || function () { return 1; }, 1);
	  });
	};

	/* eslint-disable es/no-array-prototype-indexof -- required for testing */
	var $$12 = _export;
	var uncurryThis$I = functionUncurryThisClause;
	var $indexOf = arrayIncludes.indexOf;
	var arrayMethodIsStrict$4 = arrayMethodIsStrict$5;

	var nativeIndexOf = uncurryThis$I([].indexOf);

	var NEGATIVE_ZERO$1 = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
	var FORCED$7 = NEGATIVE_ZERO$1 || !arrayMethodIsStrict$4('indexOf');

	// `Array.prototype.indexOf` method
	// https://tc39.es/ecma262/#sec-array.prototype.indexof
	$$12({ target: 'Array', proto: true, forced: FORCED$7 }, {
	  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
	    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
	    return NEGATIVE_ZERO$1
	      // convert -0 to +0
	      ? nativeIndexOf(this, searchElement, fromIndex) || 0
	      : $indexOf(this, searchElement, fromIndex);
	  }
	});

	var fails$A = fails$P;

	var correctPrototypeGetter = !fails$A(function () {
	  function F() { /* empty */ }
	  F.prototype.constructor = null;
	  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
	  return Object.getPrototypeOf(new F()) !== F.prototype;
	});

	var hasOwn$g = hasOwnProperty_1;
	var isCallable$j = isCallable$y;
	var toObject$c = toObject$h;
	var sharedKey = sharedKey$3;
	var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

	var IE_PROTO = sharedKey('IE_PROTO');
	var $Object$1 = Object;
	var ObjectPrototype$2 = $Object$1.prototype;

	// `Object.getPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.getprototypeof
	// eslint-disable-next-line es/no-object-getprototypeof -- safe
	var objectGetPrototypeOf$1 = CORRECT_PROTOTYPE_GETTER ? $Object$1.getPrototypeOf : function (O) {
	  var object = toObject$c(O);
	  if (hasOwn$g(object, IE_PROTO)) return object[IE_PROTO];
	  var constructor = object.constructor;
	  if (isCallable$j(constructor) && object instanceof constructor) {
	    return constructor.prototype;
	  } return object instanceof $Object$1 ? ObjectPrototype$2 : null;
	};

	var fails$z = fails$P;
	var isCallable$i = isCallable$y;
	var isObject$f = isObject$r;
	var getPrototypeOf$4 = objectGetPrototypeOf$1;
	var defineBuiltIn$d = defineBuiltIn$f;
	var wellKnownSymbol$l = wellKnownSymbol$w;

	var ITERATOR$6 = wellKnownSymbol$l('iterator');
	var BUGGY_SAFARI_ITERATORS$1 = false;

	// `%IteratorPrototype%` object
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
	var IteratorPrototype$4, PrototypeOfArrayIteratorPrototype, arrayIterator;

	/* eslint-disable es/no-array-prototype-keys -- safe */
	if ([].keys) {
	  arrayIterator = [].keys();
	  // Safari 8 has buggy iterators w/o `next`
	  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
	  else {
	    PrototypeOfArrayIteratorPrototype = getPrototypeOf$4(getPrototypeOf$4(arrayIterator));
	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$4 = PrototypeOfArrayIteratorPrototype;
	  }
	}

	var NEW_ITERATOR_PROTOTYPE = !isObject$f(IteratorPrototype$4) || fails$z(function () {
	  var test = {};
	  // FF44- legacy iterators case
	  return IteratorPrototype$4[ITERATOR$6].call(test) !== test;
	});

	if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$4 = {};

	// `%IteratorPrototype%[@@iterator]()` method
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
	if (!isCallable$i(IteratorPrototype$4[ITERATOR$6])) {
	  defineBuiltIn$d(IteratorPrototype$4, ITERATOR$6, function () {
	    return this;
	  });
	}

	var iteratorsCore = {
	  IteratorPrototype: IteratorPrototype$4,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
	};

	var defineProperty$6 = objectDefineProperty.f;
	var hasOwn$f = hasOwnProperty_1;
	var wellKnownSymbol$k = wellKnownSymbol$w;

	var TO_STRING_TAG$3 = wellKnownSymbol$k('toStringTag');

	var setToStringTag$9 = function (target, TAG, STATIC) {
	  if (target && !STATIC) target = target.prototype;
	  if (target && !hasOwn$f(target, TO_STRING_TAG$3)) {
	    defineProperty$6(target, TO_STRING_TAG$3, { configurable: true, value: TAG });
	  }
	};

	var IteratorPrototype$3 = iteratorsCore.IteratorPrototype;
	var create$6 = objectCreate$1;
	var createPropertyDescriptor$3 = createPropertyDescriptor$8;
	var setToStringTag$8 = setToStringTag$9;
	var Iterators$2 = iterators;

	var returnThis$1 = function () { return this; };

	var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = create$6(IteratorPrototype$3, { next: createPropertyDescriptor$3(+!ENUMERABLE_NEXT, next) });
	  setToStringTag$8(IteratorConstructor, TO_STRING_TAG, false);
	  Iterators$2[TO_STRING_TAG] = returnThis$1;
	  return IteratorConstructor;
	};

	var $$11 = _export;
	var call$x = functionCall;
	var FunctionName$1 = functionName;
	var isCallable$h = isCallable$y;
	var createIteratorConstructor$2 = iteratorCreateConstructor;
	var getPrototypeOf$3 = objectGetPrototypeOf$1;
	var setPrototypeOf$4 = objectSetPrototypeOf;
	var setToStringTag$7 = setToStringTag$9;
	var createNonEnumerableProperty$9 = createNonEnumerableProperty$f;
	var defineBuiltIn$c = defineBuiltIn$f;
	var wellKnownSymbol$j = wellKnownSymbol$w;
	var Iterators$1 = iterators;
	var IteratorsCore = iteratorsCore;

	var PROPER_FUNCTION_NAME$2 = FunctionName$1.PROPER;
	var CONFIGURABLE_FUNCTION_NAME$1 = FunctionName$1.CONFIGURABLE;
	var IteratorPrototype$2 = IteratorsCore.IteratorPrototype;
	var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR$5 = wellKnownSymbol$j('iterator');
	var KEYS = 'keys';
	var VALUES = 'values';
	var ENTRIES = 'entries';

	var returnThis = function () { return this; };

	var iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
	  createIteratorConstructor$2(IteratorConstructor, NAME, next);

	  var getIterationMethod = function (KIND) {
	    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
	    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];

	    switch (KIND) {
	      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
	      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
	      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
	    }

	    return function () { return new IteratorConstructor(this); };
	  };

	  var TO_STRING_TAG = NAME + ' Iterator';
	  var INCORRECT_VALUES_NAME = false;
	  var IterablePrototype = Iterable.prototype;
	  var nativeIterator = IterablePrototype[ITERATOR$5]
	    || IterablePrototype['@@iterator']
	    || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY;

	  // fix native
	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = getPrototypeOf$3(anyNativeIterator.call(new Iterable()));
	    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
	      if (getPrototypeOf$3(CurrentIteratorPrototype) !== IteratorPrototype$2) {
	        if (setPrototypeOf$4) {
	          setPrototypeOf$4(CurrentIteratorPrototype, IteratorPrototype$2);
	        } else if (!isCallable$h(CurrentIteratorPrototype[ITERATOR$5])) {
	          defineBuiltIn$c(CurrentIteratorPrototype, ITERATOR$5, returnThis);
	        }
	      }
	      // Set @@toStringTag to native iterators
	      setToStringTag$7(CurrentIteratorPrototype, TO_STRING_TAG, true);
	    }
	  }

	  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
	  if (PROPER_FUNCTION_NAME$2 && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    if (CONFIGURABLE_FUNCTION_NAME$1) {
	      createNonEnumerableProperty$9(IterablePrototype, 'name', VALUES);
	    } else {
	      INCORRECT_VALUES_NAME = true;
	      defaultIterator = function values() { return call$x(nativeIterator, this); };
	    }
	  }

	  // export additional methods
	  if (DEFAULT) {
	    methods = {
	      values: getIterationMethod(VALUES),
	      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
	      entries: getIterationMethod(ENTRIES)
	    };
	    if (FORCED) for (KEY in methods) {
	      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
	        defineBuiltIn$c(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else $$11({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
	  }

	  // define iterator
	  if (IterablePrototype[ITERATOR$5] !== defaultIterator) {
	    defineBuiltIn$c(IterablePrototype, ITERATOR$5, defaultIterator, { name: DEFAULT });
	  }
	  Iterators$1[NAME] = defaultIterator;

	  return methods;
	};

	// `CreateIterResultObject` abstract operation
	// https://tc39.es/ecma262/#sec-createiterresultobject
	var createIterResultObject$6 = function (value, done) {
	  return { value: value, done: done };
	};

	var toIndexedObject$6 = toIndexedObject$b;
	var addToUnscopables$2 = addToUnscopables$4;
	var Iterators = iterators;
	var InternalStateModule$b = internalState;
	var defineProperty$5 = objectDefineProperty.f;
	var defineIterator$2 = iteratorDefine;
	var createIterResultObject$5 = createIterResultObject$6;
	var DESCRIPTORS$n = descriptors;

	var ARRAY_ITERATOR = 'Array Iterator';
	var setInternalState$a = InternalStateModule$b.set;
	var getInternalState$6 = InternalStateModule$b.getterFor(ARRAY_ITERATOR);

	// `Array.prototype.entries` method
	// https://tc39.es/ecma262/#sec-array.prototype.entries
	// `Array.prototype.keys` method
	// https://tc39.es/ecma262/#sec-array.prototype.keys
	// `Array.prototype.values` method
	// https://tc39.es/ecma262/#sec-array.prototype.values
	// `Array.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
	// `CreateArrayIterator` internal method
	// https://tc39.es/ecma262/#sec-createarrayiterator
	var es_array_iterator = defineIterator$2(Array, 'Array', function (iterated, kind) {
	  setInternalState$a(this, {
	    type: ARRAY_ITERATOR,
	    target: toIndexedObject$6(iterated), // target
	    index: 0,                          // next index
	    kind: kind                         // kind
	  });
	// `%ArrayIteratorPrototype%.next` method
	// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
	}, function () {
	  var state = getInternalState$6(this);
	  var target = state.target;
	  var index = state.index++;
	  if (!target || index >= target.length) {
	    state.target = null;
	    return createIterResultObject$5(undefined, true);
	  }
	  switch (state.kind) {
	    case 'keys': return createIterResultObject$5(index, false);
	    case 'values': return createIterResultObject$5(target[index], false);
	  } return createIterResultObject$5([index, target[index]], false);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values%
	// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
	// https://tc39.es/ecma262/#sec-createmappedargumentsobject
	var values = Iterators.Arguments = Iterators.Array;

	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables$2('keys');
	addToUnscopables$2('values');
	addToUnscopables$2('entries');

	// V8 ~ Chrome 45- bug
	if (DESCRIPTORS$n && values.name !== 'values') try {
	  defineProperty$5(values, 'name', { value: 'values' });
	} catch (error) { /* empty */ }

	var $$10 = _export;
	var $map = arrayIteration.map;
	var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$5;

	var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$2('map');

	// `Array.prototype.map` method
	// https://tc39.es/ecma262/#sec-array.prototype.map
	// with adding support of @@species
	$$10({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 }, {
	  map: function map(callbackfn /* , thisArg */) {
	    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var DESCRIPTORS$m = descriptors;
	var isArray$5 = isArray$8;

	var $TypeError$i = TypeError;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor$4 = Object.getOwnPropertyDescriptor;

	// Safari < 13 does not throw an error in this case
	var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS$m && !function () {
	  // makes no sense without proper strict mode support
	  if (this !== undefined) return true;
	  try {
	    // eslint-disable-next-line es/no-object-defineproperty -- safe
	    Object.defineProperty([], 'length', { writable: false }).length = 1;
	  } catch (error) {
	    return error instanceof TypeError;
	  }
	}();

	var arraySetLength = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
	  if (isArray$5(O) && !getOwnPropertyDescriptor$4(O, 'length').writable) {
	    throw new $TypeError$i('Cannot set read only .length');
	  } return O.length = length;
	} : function (O, length) {
	  return O.length = length;
	};

	var $$$ = _export;
	var toObject$b = toObject$h;
	var lengthOfArrayLike$k = lengthOfArrayLike$p;
	var setArrayLength$2 = arraySetLength;
	var doesNotExceedSafeInteger$3 = doesNotExceedSafeInteger$5;
	var fails$y = fails$P;

	var INCORRECT_TO_LENGTH = fails$y(function () {
	  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
	});

	// V8 <= 121 and Safari <= 15.4; FF < 23 throws InternalError
	// https://bugs.chromium.org/p/v8/issues/detail?id=12681
	var properErrorOnNonWritableLength$1 = function () {
	  try {
	    // eslint-disable-next-line es/no-object-defineproperty -- safe
	    Object.defineProperty([], 'length', { writable: false }).push();
	  } catch (error) {
	    return error instanceof TypeError;
	  }
	};

	var FORCED$6 = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength$1();

	// `Array.prototype.push` method
	// https://tc39.es/ecma262/#sec-array.prototype.push
	$$$({ target: 'Array', proto: true, arity: 1, forced: FORCED$6 }, {
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  push: function push(item) {
	    var O = toObject$b(this);
	    var len = lengthOfArrayLike$k(O);
	    var argCount = arguments.length;
	    doesNotExceedSafeInteger$3(len + argCount);
	    for (var i = 0; i < argCount; i++) {
	      O[len] = arguments[i];
	      len++;
	    }
	    setArrayLength$2(O, len);
	    return len;
	  }
	});

	var aCallable$j = aCallable$o;
	var toObject$a = toObject$h;
	var IndexedObject$3 = indexedObject;
	var lengthOfArrayLike$j = lengthOfArrayLike$p;

	var $TypeError$h = TypeError;

	var REDUCE_EMPTY = 'Reduce of empty array with no initial value';

	// `Array.prototype.{ reduce, reduceRight }` methods implementation
	var createMethod$4 = function (IS_RIGHT) {
	  return function (that, callbackfn, argumentsLength, memo) {
	    var O = toObject$a(that);
	    var self = IndexedObject$3(O);
	    var length = lengthOfArrayLike$j(O);
	    aCallable$j(callbackfn);
	    if (length === 0 && argumentsLength < 2) throw new $TypeError$h(REDUCE_EMPTY);
	    var index = IS_RIGHT ? length - 1 : 0;
	    var i = IS_RIGHT ? -1 : 1;
	    if (argumentsLength < 2) while (true) {
	      if (index in self) {
	        memo = self[index];
	        index += i;
	        break;
	      }
	      index += i;
	      if (IS_RIGHT ? index < 0 : length <= index) {
	        throw new $TypeError$h(REDUCE_EMPTY);
	      }
	    }
	    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
	      memo = callbackfn(memo, self[index], index, O);
	    }
	    return memo;
	  };
	};

	var arrayReduce = {
	  // `Array.prototype.reduce` method
	  // https://tc39.es/ecma262/#sec-array.prototype.reduce
	  left: createMethod$4(false),
	  // `Array.prototype.reduceRight` method
	  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
	  right: createMethod$4(true)
	};

	/* global Bun, Deno -- detection */
	var globalThis$I = globalThis_1;
	var userAgent$5 = environmentUserAgent;
	var classof$e = classofRaw$2;

	var userAgentStartsWith = function (string) {
	  return userAgent$5.slice(0, string.length) === string;
	};

	var environment = (function () {
	  if (userAgentStartsWith('Bun/')) return 'BUN';
	  if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
	  if (userAgentStartsWith('Deno/')) return 'DENO';
	  if (userAgentStartsWith('Node.js/')) return 'NODE';
	  if (globalThis$I.Bun && typeof Bun.version == 'string') return 'BUN';
	  if (globalThis$I.Deno && typeof Deno.version == 'object') return 'DENO';
	  if (classof$e(globalThis$I.process) === 'process') return 'NODE';
	  if (globalThis$I.window && globalThis$I.document) return 'BROWSER';
	  return 'REST';
	})();

	var ENVIRONMENT$3 = environment;

	var environmentIsNode = ENVIRONMENT$3 === 'NODE';

	var $$_ = _export;
	var $reduce = arrayReduce.left;
	var arrayMethodIsStrict$3 = arrayMethodIsStrict$5;
	var CHROME_VERSION = environmentV8Version;
	var IS_NODE$4 = environmentIsNode;

	// Chrome 80-82 has a critical bug
	// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
	var CHROME_BUG = !IS_NODE$4 && CHROME_VERSION > 79 && CHROME_VERSION < 83;
	var FORCED$5 = CHROME_BUG || !arrayMethodIsStrict$3('reduce');

	// `Array.prototype.reduce` method
	// https://tc39.es/ecma262/#sec-array.prototype.reduce
	$$_({ target: 'Array', proto: true, forced: FORCED$5 }, {
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    var length = arguments.length;
	    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
	  }
	});

	var uncurryThis$H = functionUncurryThis;

	var arraySlice$7 = uncurryThis$H([].slice);

	var $$Z = _export;
	var isArray$4 = isArray$8;
	var isConstructor$2 = isConstructor$5;
	var isObject$e = isObject$r;
	var toAbsoluteIndex$3 = toAbsoluteIndex$5;
	var lengthOfArrayLike$i = lengthOfArrayLike$p;
	var toIndexedObject$5 = toIndexedObject$b;
	var createProperty$5 = createProperty$8;
	var wellKnownSymbol$i = wellKnownSymbol$w;
	var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$5;
	var nativeSlice = arraySlice$7;

	var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('slice');

	var SPECIES$4 = wellKnownSymbol$i('species');
	var $Array$2 = Array;
	var max$4 = Math.max;

	// `Array.prototype.slice` method
	// https://tc39.es/ecma262/#sec-array.prototype.slice
	// fallback for not array-like ES3 strings and DOM objects
	$$Z({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
	  slice: function slice(start, end) {
	    var O = toIndexedObject$5(this);
	    var length = lengthOfArrayLike$i(O);
	    var k = toAbsoluteIndex$3(start, length);
	    var fin = toAbsoluteIndex$3(end === undefined ? length : end, length);
	    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
	    var Constructor, result, n;
	    if (isArray$4(O)) {
	      Constructor = O.constructor;
	      // cross-realm fallback
	      if (isConstructor$2(Constructor) && (Constructor === $Array$2 || isArray$4(Constructor.prototype))) {
	        Constructor = undefined;
	      } else if (isObject$e(Constructor)) {
	        Constructor = Constructor[SPECIES$4];
	        if (Constructor === null) Constructor = undefined;
	      }
	      if (Constructor === $Array$2 || Constructor === undefined) {
	        return nativeSlice(O, k, fin);
	      }
	    }
	    result = new (Constructor === undefined ? $Array$2 : Constructor)(max$4(fin - k, 0));
	    for (n = 0; k < fin; k++, n++) if (k in O) createProperty$5(result, n, O[k]);
	    result.length = n;
	    return result;
	  }
	});

	var tryToString$3 = tryToString$6;

	var $TypeError$g = TypeError;

	var deletePropertyOrThrow$3 = function (O, P) {
	  if (!delete O[P]) throw new $TypeError$g('Cannot delete property ' + tryToString$3(P) + ' of ' + tryToString$3(O));
	};

	var arraySlice$6 = arraySlice$7;

	var floor$5 = Math.floor;

	var sort$1 = function (array, comparefn) {
	  var length = array.length;

	  if (length < 8) {
	    // insertion sort
	    var i = 1;
	    var element, j;

	    while (i < length) {
	      j = i;
	      element = array[i];
	      while (j && comparefn(array[j - 1], element) > 0) {
	        array[j] = array[--j];
	      }
	      if (j !== i++) array[j] = element;
	    }
	  } else {
	    // merge sort
	    var middle = floor$5(length / 2);
	    var left = sort$1(arraySlice$6(array, 0, middle), comparefn);
	    var right = sort$1(arraySlice$6(array, middle), comparefn);
	    var llength = left.length;
	    var rlength = right.length;
	    var lindex = 0;
	    var rindex = 0;

	    while (lindex < llength || rindex < rlength) {
	      array[lindex + rindex] = (lindex < llength && rindex < rlength)
	        ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
	        : lindex < llength ? left[lindex++] : right[rindex++];
	    }
	  }

	  return array;
	};

	var arraySort$1 = sort$1;

	var userAgent$4 = environmentUserAgent;

	var firefox = userAgent$4.match(/firefox\/(\d+)/i);

	var environmentFfVersion = !!firefox && +firefox[1];

	var UA = environmentUserAgent;

	var environmentIsIeOrEdge = /MSIE|Trident/.test(UA);

	var userAgent$3 = environmentUserAgent;

	var webkit = userAgent$3.match(/AppleWebKit\/(\d+)\./);

	var environmentWebkitVersion = !!webkit && +webkit[1];

	var $$Y = _export;
	var uncurryThis$G = functionUncurryThis;
	var aCallable$i = aCallable$o;
	var toObject$9 = toObject$h;
	var lengthOfArrayLike$h = lengthOfArrayLike$p;
	var deletePropertyOrThrow$2 = deletePropertyOrThrow$3;
	var toString$j = toString$m;
	var fails$x = fails$P;
	var internalSort$1 = arraySort$1;
	var arrayMethodIsStrict$2 = arrayMethodIsStrict$5;
	var FF$1 = environmentFfVersion;
	var IE_OR_EDGE$1 = environmentIsIeOrEdge;
	var V8$2 = environmentV8Version;
	var WEBKIT$1 = environmentWebkitVersion;

	var test = [];
	var nativeSort$1 = uncurryThis$G(test.sort);
	var push$c = uncurryThis$G(test.push);

	// IE8-
	var FAILS_ON_UNDEFINED = fails$x(function () {
	  test.sort(undefined);
	});
	// V8 bug
	var FAILS_ON_NULL = fails$x(function () {
	  test.sort(null);
	});
	// Old WebKit
	var STRICT_METHOD$2 = arrayMethodIsStrict$2('sort');

	var STABLE_SORT$1 = !fails$x(function () {
	  // feature detection can be too slow, so check engines versions
	  if (V8$2) return V8$2 < 70;
	  if (FF$1 && FF$1 > 3) return;
	  if (IE_OR_EDGE$1) return true;
	  if (WEBKIT$1) return WEBKIT$1 < 603;

	  var result = '';
	  var code, chr, value, index;

	  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
	  for (code = 65; code < 76; code++) {
	    chr = String.fromCharCode(code);

	    switch (code) {
	      case 66: case 69: case 70: case 72: value = 3; break;
	      case 68: case 71: value = 4; break;
	      default: value = 2;
	    }

	    for (index = 0; index < 47; index++) {
	      test.push({ k: chr + index, v: value });
	    }
	  }

	  test.sort(function (a, b) { return b.v - a.v; });

	  for (index = 0; index < test.length; index++) {
	    chr = test[index].k.charAt(0);
	    if (result.charAt(result.length - 1) !== chr) result += chr;
	  }

	  return result !== 'DGBEFHACIJK';
	});

	var FORCED$4 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD$2 || !STABLE_SORT$1;

	var getSortCompare$1 = function (comparefn) {
	  return function (x, y) {
	    if (y === undefined) return -1;
	    if (x === undefined) return 1;
	    if (comparefn !== undefined) return +comparefn(x, y) || 0;
	    return toString$j(x) > toString$j(y) ? 1 : -1;
	  };
	};

	// `Array.prototype.sort` method
	// https://tc39.es/ecma262/#sec-array.prototype.sort
	$$Y({ target: 'Array', proto: true, forced: FORCED$4 }, {
	  sort: function sort(comparefn) {
	    if (comparefn !== undefined) aCallable$i(comparefn);

	    var array = toObject$9(this);

	    if (STABLE_SORT$1) return comparefn === undefined ? nativeSort$1(array) : nativeSort$1(array, comparefn);

	    var items = [];
	    var arrayLength = lengthOfArrayLike$h(array);
	    var itemsLength, index;

	    for (index = 0; index < arrayLength; index++) {
	      if (index in array) push$c(items, array[index]);
	    }

	    internalSort$1(items, getSortCompare$1(comparefn));

	    itemsLength = lengthOfArrayLike$h(items);
	    index = 0;

	    while (index < itemsLength) array[index] = items[index++];
	    while (index < arrayLength) deletePropertyOrThrow$2(array, index++);

	    return array;
	  }
	});

	var $$X = _export;
	var toObject$8 = toObject$h;
	var toAbsoluteIndex$2 = toAbsoluteIndex$5;
	var toIntegerOrInfinity$a = toIntegerOrInfinity$d;
	var lengthOfArrayLike$g = lengthOfArrayLike$p;
	var setArrayLength$1 = arraySetLength;
	var doesNotExceedSafeInteger$2 = doesNotExceedSafeInteger$5;
	var arraySpeciesCreate$1 = arraySpeciesCreate$4;
	var createProperty$4 = createProperty$8;
	var deletePropertyOrThrow$1 = deletePropertyOrThrow$3;
	var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$5;

	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

	var max$3 = Math.max;
	var min$6 = Math.min;

	// `Array.prototype.splice` method
	// https://tc39.es/ecma262/#sec-array.prototype.splice
	// with adding support of @@species
	$$X({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
	  splice: function splice(start, deleteCount /* , ...items */) {
	    var O = toObject$8(this);
	    var len = lengthOfArrayLike$g(O);
	    var actualStart = toAbsoluteIndex$2(start, len);
	    var argumentsLength = arguments.length;
	    var insertCount, actualDeleteCount, A, k, from, to;
	    if (argumentsLength === 0) {
	      insertCount = actualDeleteCount = 0;
	    } else if (argumentsLength === 1) {
	      insertCount = 0;
	      actualDeleteCount = len - actualStart;
	    } else {
	      insertCount = argumentsLength - 2;
	      actualDeleteCount = min$6(max$3(toIntegerOrInfinity$a(deleteCount), 0), len - actualStart);
	    }
	    doesNotExceedSafeInteger$2(len + insertCount - actualDeleteCount);
	    A = arraySpeciesCreate$1(O, actualDeleteCount);
	    for (k = 0; k < actualDeleteCount; k++) {
	      from = actualStart + k;
	      if (from in O) createProperty$4(A, k, O[from]);
	    }
	    A.length = actualDeleteCount;
	    if (insertCount < actualDeleteCount) {
	      for (k = actualStart; k < len - actualDeleteCount; k++) {
	        from = k + actualDeleteCount;
	        to = k + insertCount;
	        if (from in O) O[to] = O[from];
	        else deletePropertyOrThrow$1(O, to);
	      }
	      for (k = len; k > len - actualDeleteCount + insertCount; k--) deletePropertyOrThrow$1(O, k - 1);
	    } else if (insertCount > actualDeleteCount) {
	      for (k = len - actualDeleteCount; k > actualStart; k--) {
	        from = k + actualDeleteCount - 1;
	        to = k + insertCount - 1;
	        if (from in O) O[to] = O[from];
	        else deletePropertyOrThrow$1(O, to);
	      }
	    }
	    for (k = 0; k < insertCount; k++) {
	      O[k + actualStart] = arguments[k + 2];
	    }
	    setArrayLength$1(O, len - actualDeleteCount + insertCount);
	    return A;
	  }
	});

	var $$W = _export;
	var toObject$7 = toObject$h;
	var lengthOfArrayLike$f = lengthOfArrayLike$p;
	var setArrayLength = arraySetLength;
	var deletePropertyOrThrow = deletePropertyOrThrow$3;
	var doesNotExceedSafeInteger$1 = doesNotExceedSafeInteger$5;

	// IE8-
	var INCORRECT_RESULT = [].unshift(0) !== 1;

	// V8 ~ Chrome < 71 and Safari <= 15.4, FF < 23 throws InternalError
	var properErrorOnNonWritableLength = function () {
	  try {
	    // eslint-disable-next-line es/no-object-defineproperty -- safe
	    Object.defineProperty([], 'length', { writable: false }).unshift();
	  } catch (error) {
	    return error instanceof TypeError;
	  }
	};

	var FORCED$3 = INCORRECT_RESULT || !properErrorOnNonWritableLength();

	// `Array.prototype.unshift` method
	// https://tc39.es/ecma262/#sec-array.prototype.unshift
	$$W({ target: 'Array', proto: true, arity: 1, forced: FORCED$3 }, {
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  unshift: function unshift(item) {
	    var O = toObject$7(this);
	    var len = lengthOfArrayLike$f(O);
	    var argCount = arguments.length;
	    if (argCount) {
	      doesNotExceedSafeInteger$1(len + argCount);
	      var k = len;
	      while (k--) {
	        var to = k + argCount;
	        if (k in O) O[to] = O[k];
	        else deletePropertyOrThrow(O, to);
	      }
	      for (var j = 0; j < argCount; j++) {
	        O[j] = arguments[j];
	      }
	    } return setArrayLength(O, len + argCount);
	  }
	});

	var $$V = _export;
	var globalThis$H = globalThis_1;

	// `globalThis` object
	// https://tc39.es/ecma262/#sec-globalthis
	$$V({ global: true, forced: globalThis$H.globalThis !== globalThis$H }, {
	  globalThis: globalThis$H
	});

	var uncurryThis$F = functionUncurryThis;
	var isArray$3 = isArray$8;
	var isCallable$g = isCallable$y;
	var classof$d = classofRaw$2;
	var toString$i = toString$m;

	var push$b = uncurryThis$F([].push);

	var getJsonReplacerFunction = function (replacer) {
	  if (isCallable$g(replacer)) return replacer;
	  if (!isArray$3(replacer)) return;
	  var rawLength = replacer.length;
	  var keys = [];
	  for (var i = 0; i < rawLength; i++) {
	    var element = replacer[i];
	    if (typeof element == 'string') push$b(keys, element);
	    else if (typeof element == 'number' || classof$d(element) === 'Number' || classof$d(element) === 'String') push$b(keys, toString$i(element));
	  }
	  var keysLength = keys.length;
	  var root = true;
	  return function (key, value) {
	    if (root) {
	      root = false;
	      return value;
	    }
	    if (isArray$3(this)) return value;
	    for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
	  };
	};

	var $$U = _export;
	var getBuiltIn$8 = getBuiltIn$e;
	var apply$4 = functionApply;
	var call$w = functionCall;
	var uncurryThis$E = functionUncurryThis;
	var fails$w = fails$P;
	var isCallable$f = isCallable$y;
	var isSymbol$2 = isSymbol$5;
	var arraySlice$5 = arraySlice$7;
	var getReplacerFunction = getJsonReplacerFunction;
	var NATIVE_SYMBOL$1 = symbolConstructorDetection;

	var $String = String;
	var $stringify = getBuiltIn$8('JSON', 'stringify');
	var exec$7 = uncurryThis$E(/./.exec);
	var charAt$8 = uncurryThis$E(''.charAt);
	var charCodeAt$2 = uncurryThis$E(''.charCodeAt);
	var replace$7 = uncurryThis$E(''.replace);
	var numberToString$1 = uncurryThis$E(1.0.toString);

	var tester = /[\uD800-\uDFFF]/g;
	var low = /^[\uD800-\uDBFF]$/;
	var hi = /^[\uDC00-\uDFFF]$/;

	var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL$1 || fails$w(function () {
	  var symbol = getBuiltIn$8('Symbol')('stringify detection');
	  // MS Edge converts symbol values to JSON as {}
	  return $stringify([symbol]) !== '[null]'
	    // WebKit converts symbol values to JSON as null
	    || $stringify({ a: symbol }) !== '{}'
	    // V8 throws on boxed symbols
	    || $stringify(Object(symbol)) !== '{}';
	});

	// https://github.com/tc39/proposal-well-formed-stringify
	var ILL_FORMED_UNICODE = fails$w(function () {
	  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
	    || $stringify('\uDEAD') !== '"\\udead"';
	});

	var stringifyWithSymbolsFix = function (it, replacer) {
	  var args = arraySlice$5(arguments);
	  var $replacer = getReplacerFunction(replacer);
	  if (!isCallable$f($replacer) && (it === undefined || isSymbol$2(it))) return; // IE8 returns string on undefined
	  args[1] = function (key, value) {
	    // some old implementations (like WebKit) could pass numbers as keys
	    if (isCallable$f($replacer)) value = call$w($replacer, this, $String(key), value);
	    if (!isSymbol$2(value)) return value;
	  };
	  return apply$4($stringify, null, args);
	};

	var fixIllFormed = function (match, offset, string) {
	  var prev = charAt$8(string, offset - 1);
	  var next = charAt$8(string, offset + 1);
	  if ((exec$7(low, match) && !exec$7(hi, next)) || (exec$7(hi, match) && !exec$7(low, prev))) {
	    return '\\u' + numberToString$1(charCodeAt$2(match, 0), 16);
	  } return match;
	};

	if ($stringify) {
	  // `JSON.stringify` method
	  // https://tc39.es/ecma262/#sec-json.stringify
	  $$U({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
	    // eslint-disable-next-line no-unused-vars -- required for `.length`
	    stringify: function stringify(it, replacer, space) {
	      var args = arraySlice$5(arguments);
	      var result = apply$4(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
	      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace$7(result, tester, fixIllFormed) : result;
	    }
	  });
	}

	var internalMetadata = {exports: {}};

	var objectGetOwnPropertyNamesExternal = {};

	/* eslint-disable es/no-object-getownpropertynames -- safe */
	var classof$c = classofRaw$2;
	var toIndexedObject$4 = toIndexedObject$b;
	var $getOwnPropertyNames = objectGetOwnPropertyNames.f;
	var arraySlice$4 = arraySlice$7;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return $getOwnPropertyNames(it);
	  } catch (error) {
	    return arraySlice$4(windowNames);
	  }
	};

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
	  return windowNames && classof$c(it) === 'Window'
	    ? getWindowNames(it)
	    : $getOwnPropertyNames(toIndexedObject$4(it));
	};

	// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
	var fails$v = fails$P;

	var arrayBufferNonExtensible = fails$v(function () {
	  if (typeof ArrayBuffer == 'function') {
	    var buffer = new ArrayBuffer(8);
	    // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
	    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
	  }
	});

	var fails$u = fails$P;
	var isObject$d = isObject$r;
	var classof$b = classofRaw$2;
	var ARRAY_BUFFER_NON_EXTENSIBLE = arrayBufferNonExtensible;

	// eslint-disable-next-line es/no-object-isextensible -- safe
	var $isExtensible = Object.isExtensible;
	var FAILS_ON_PRIMITIVES = fails$u(function () { $isExtensible(1); });

	// `Object.isExtensible` method
	// https://tc39.es/ecma262/#sec-object.isextensible
	var objectIsExtensible = (FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
	  if (!isObject$d(it)) return false;
	  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof$b(it) === 'ArrayBuffer') return false;
	  return $isExtensible ? $isExtensible(it) : true;
	} : $isExtensible;

	var fails$t = fails$P;

	var freezing = !fails$t(function () {
	  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
	  return Object.isExtensible(Object.preventExtensions({}));
	});

	var $$T = _export;
	var uncurryThis$D = functionUncurryThis;
	var hiddenKeys = hiddenKeys$5;
	var isObject$c = isObject$r;
	var hasOwn$e = hasOwnProperty_1;
	var defineProperty$4 = objectDefineProperty.f;
	var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
	var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal;
	var isExtensible$1 = objectIsExtensible;
	var uid$2 = uid$5;
	var FREEZING$1 = freezing;

	var REQUIRED = false;
	var METADATA = uid$2('meta');
	var id$1 = 0;

	var setMetadata = function (it) {
	  defineProperty$4(it, METADATA, { value: {
	    objectID: 'O' + id$1++, // object ID
	    weakData: {}          // weak collections IDs
	  } });
	};

	var fastKey$1 = function (it, create) {
	  // return a primitive with prefix
	  if (!isObject$c(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!hasOwn$e(it, METADATA)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible$1(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMetadata(it);
	  // return object ID
	  } return it[METADATA].objectID;
	};

	var getWeakData$1 = function (it, create) {
	  if (!hasOwn$e(it, METADATA)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible$1(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMetadata(it);
	  // return the store of weak collections IDs
	  } return it[METADATA].weakData;
	};

	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZING$1 && REQUIRED && isExtensible$1(it) && !hasOwn$e(it, METADATA)) setMetadata(it);
	  return it;
	};

	var enable = function () {
	  meta.enable = function () { /* empty */ };
	  REQUIRED = true;
	  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
	  var splice = uncurryThis$D([].splice);
	  var test = {};
	  test[METADATA] = 1;

	  // prevent exposing of metadata key
	  if (getOwnPropertyNames(test).length) {
	    getOwnPropertyNamesModule.f = function (it) {
	      var result = getOwnPropertyNames(it);
	      for (var i = 0, length = result.length; i < length; i++) {
	        if (result[i] === METADATA) {
	          splice(result, i, 1);
	          break;
	        }
	      } return result;
	    };

	    $$T({ target: 'Object', stat: true, forced: true }, {
	      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
	    });
	  }
	};

	var meta = internalMetadata.exports = {
	  enable: enable,
	  fastKey: fastKey$1,
	  getWeakData: getWeakData$1,
	  onFreeze: onFreeze
	};

	hiddenKeys[METADATA] = true;

	var internalMetadataExports = internalMetadata.exports;

	var bind$a = functionBindContext;
	var call$v = functionCall;
	var anObject$q = anObject$y;
	var tryToString$2 = tryToString$6;
	var isArrayIteratorMethod$1 = isArrayIteratorMethod$3;
	var lengthOfArrayLike$e = lengthOfArrayLike$p;
	var isPrototypeOf$5 = objectIsPrototypeOf;
	var getIterator$2 = getIterator$4;
	var getIteratorMethod$3 = getIteratorMethod$6;
	var iteratorClose$4 = iteratorClose$6;

	var $TypeError$f = TypeError;

	var Result = function (stopped, result) {
	  this.stopped = stopped;
	  this.result = result;
	};

	var ResultPrototype = Result.prototype;

	var iterate$f = function (iterable, unboundFunction, options) {
	  var that = options && options.that;
	  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
	  var IS_RECORD = !!(options && options.IS_RECORD);
	  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
	  var INTERRUPTED = !!(options && options.INTERRUPTED);
	  var fn = bind$a(unboundFunction, that);
	  var iterator, iterFn, index, length, result, next, step;

	  var stop = function (condition) {
	    if (iterator) iteratorClose$4(iterator, 'normal', condition);
	    return new Result(true, condition);
	  };

	  var callFn = function (value) {
	    if (AS_ENTRIES) {
	      anObject$q(value);
	      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
	    } return INTERRUPTED ? fn(value, stop) : fn(value);
	  };

	  if (IS_RECORD) {
	    iterator = iterable.iterator;
	  } else if (IS_ITERATOR) {
	    iterator = iterable;
	  } else {
	    iterFn = getIteratorMethod$3(iterable);
	    if (!iterFn) throw new $TypeError$f(tryToString$2(iterable) + ' is not iterable');
	    // optimisation for array iterators
	    if (isArrayIteratorMethod$1(iterFn)) {
	      for (index = 0, length = lengthOfArrayLike$e(iterable); length > index; index++) {
	        result = callFn(iterable[index]);
	        if (result && isPrototypeOf$5(ResultPrototype, result)) return result;
	      } return new Result(false);
	    }
	    iterator = getIterator$2(iterable, iterFn);
	  }

	  next = IS_RECORD ? iterable.next : iterator.next;
	  while (!(step = call$v(next, iterator)).done) {
	    try {
	      result = callFn(step.value);
	    } catch (error) {
	      iteratorClose$4(iterator, 'throw', error);
	    }
	    if (typeof result == 'object' && result && isPrototypeOf$5(ResultPrototype, result)) return result;
	  } return new Result(false);
	};

	var isPrototypeOf$4 = objectIsPrototypeOf;

	var $TypeError$e = TypeError;

	var anInstance$a = function (it, Prototype) {
	  if (isPrototypeOf$4(Prototype, it)) return it;
	  throw new $TypeError$e('Incorrect invocation');
	};

	var $$S = _export;
	var globalThis$G = globalThis_1;
	var uncurryThis$C = functionUncurryThis;
	var isForced$2 = isForced_1;
	var defineBuiltIn$b = defineBuiltIn$f;
	var InternalMetadataModule$1 = internalMetadataExports;
	var iterate$e = iterate$f;
	var anInstance$9 = anInstance$a;
	var isCallable$e = isCallable$y;
	var isNullOrUndefined$a = isNullOrUndefined$e;
	var isObject$b = isObject$r;
	var fails$s = fails$P;
	var checkCorrectnessOfIteration$2 = checkCorrectnessOfIteration$4;
	var setToStringTag$6 = setToStringTag$9;
	var inheritIfRequired$4 = inheritIfRequired$6;

	var collection$4 = function (CONSTRUCTOR_NAME, wrapper, common) {
	  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
	  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
	  var ADDER = IS_MAP ? 'set' : 'add';
	  var NativeConstructor = globalThis$G[CONSTRUCTOR_NAME];
	  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
	  var Constructor = NativeConstructor;
	  var exported = {};

	  var fixMethod = function (KEY) {
	    var uncurriedNativeMethod = uncurryThis$C(NativePrototype[KEY]);
	    defineBuiltIn$b(NativePrototype, KEY,
	      KEY === 'add' ? function add(value) {
	        uncurriedNativeMethod(this, value === 0 ? 0 : value);
	        return this;
	      } : KEY === 'delete' ? function (key) {
	        return IS_WEAK && !isObject$b(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
	      } : KEY === 'get' ? function get(key) {
	        return IS_WEAK && !isObject$b(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
	      } : KEY === 'has' ? function has(key) {
	        return IS_WEAK && !isObject$b(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
	      } : function set(key, value) {
	        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
	        return this;
	      }
	    );
	  };

	  var REPLACE = isForced$2(
	    CONSTRUCTOR_NAME,
	    !isCallable$e(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails$s(function () {
	      new NativeConstructor().entries().next();
	    }))
	  );

	  if (REPLACE) {
	    // create collection constructor
	    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
	    InternalMetadataModule$1.enable();
	  } else if (isForced$2(CONSTRUCTOR_NAME, true)) {
	    var instance = new Constructor();
	    // early implementations not supports chaining
	    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) !== instance;
	    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
	    var THROWS_ON_PRIMITIVES = fails$s(function () { instance.has(1); });
	    // most early implementations doesn't supports iterables, most modern - not close it correctly
	    // eslint-disable-next-line no-new -- required for testing
	    var ACCEPT_ITERABLES = checkCorrectnessOfIteration$2(function (iterable) { new NativeConstructor(iterable); });
	    // for early implementations -0 and +0 not the same
	    var BUGGY_ZERO = !IS_WEAK && fails$s(function () {
	      // V8 ~ Chromium 42- fails only with 5+ elements
	      var $instance = new NativeConstructor();
	      var index = 5;
	      while (index--) $instance[ADDER](index, index);
	      return !$instance.has(-0);
	    });

	    if (!ACCEPT_ITERABLES) {
	      Constructor = wrapper(function (dummy, iterable) {
	        anInstance$9(dummy, NativePrototype);
	        var that = inheritIfRequired$4(new NativeConstructor(), dummy, Constructor);
	        if (!isNullOrUndefined$a(iterable)) iterate$e(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
	        return that;
	      });
	      Constructor.prototype = NativePrototype;
	      NativePrototype.constructor = Constructor;
	    }

	    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }

	    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

	    // weak collections should not contains .clear method
	    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
	  }

	  exported[CONSTRUCTOR_NAME] = Constructor;
	  $$S({ global: true, constructor: true, forced: Constructor !== NativeConstructor }, exported);

	  setToStringTag$6(Constructor, CONSTRUCTOR_NAME);

	  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

	  return Constructor;
	};

	var defineBuiltIn$a = defineBuiltIn$f;

	var defineBuiltIns$6 = function (target, src, options) {
	  for (var key in src) defineBuiltIn$a(target, key, src[key], options);
	  return target;
	};

	var getBuiltIn$7 = getBuiltIn$e;
	var defineBuiltInAccessor$c = defineBuiltInAccessor$e;
	var wellKnownSymbol$h = wellKnownSymbol$w;
	var DESCRIPTORS$l = descriptors;

	var SPECIES$3 = wellKnownSymbol$h('species');

	var setSpecies$5 = function (CONSTRUCTOR_NAME) {
	  var Constructor = getBuiltIn$7(CONSTRUCTOR_NAME);

	  if (DESCRIPTORS$l && Constructor && !Constructor[SPECIES$3]) {
	    defineBuiltInAccessor$c(Constructor, SPECIES$3, {
	      configurable: true,
	      get: function () { return this; }
	    });
	  }
	};

	var create$5 = objectCreate$1;
	var defineBuiltInAccessor$b = defineBuiltInAccessor$e;
	var defineBuiltIns$5 = defineBuiltIns$6;
	var bind$9 = functionBindContext;
	var anInstance$8 = anInstance$a;
	var isNullOrUndefined$9 = isNullOrUndefined$e;
	var iterate$d = iterate$f;
	var defineIterator$1 = iteratorDefine;
	var createIterResultObject$4 = createIterResultObject$6;
	var setSpecies$4 = setSpecies$5;
	var DESCRIPTORS$k = descriptors;
	var fastKey = internalMetadataExports.fastKey;
	var InternalStateModule$a = internalState;

	var setInternalState$9 = InternalStateModule$a.set;
	var internalStateGetterFor$1 = InternalStateModule$a.getterFor;

	var collectionStrong$2 = {
	  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
	    var Constructor = wrapper(function (that, iterable) {
	      anInstance$8(that, Prototype);
	      setInternalState$9(that, {
	        type: CONSTRUCTOR_NAME,
	        index: create$5(null),
	        first: null,
	        last: null,
	        size: 0
	      });
	      if (!DESCRIPTORS$k) that.size = 0;
	      if (!isNullOrUndefined$9(iterable)) iterate$d(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
	    });

	    var Prototype = Constructor.prototype;

	    var getInternalState = internalStateGetterFor$1(CONSTRUCTOR_NAME);

	    var define = function (that, key, value) {
	      var state = getInternalState(that);
	      var entry = getEntry(that, key);
	      var previous, index;
	      // change existing entry
	      if (entry) {
	        entry.value = value;
	      // create new entry
	      } else {
	        state.last = entry = {
	          index: index = fastKey(key, true),
	          key: key,
	          value: value,
	          previous: previous = state.last,
	          next: null,
	          removed: false
	        };
	        if (!state.first) state.first = entry;
	        if (previous) previous.next = entry;
	        if (DESCRIPTORS$k) state.size++;
	        else that.size++;
	        // add to index
	        if (index !== 'F') state.index[index] = entry;
	      } return that;
	    };

	    var getEntry = function (that, key) {
	      var state = getInternalState(that);
	      // fast case
	      var index = fastKey(key);
	      var entry;
	      if (index !== 'F') return state.index[index];
	      // frozen object case
	      for (entry = state.first; entry; entry = entry.next) {
	        if (entry.key === key) return entry;
	      }
	    };

	    defineBuiltIns$5(Prototype, {
	      // `{ Map, Set }.prototype.clear()` methods
	      // https://tc39.es/ecma262/#sec-map.prototype.clear
	      // https://tc39.es/ecma262/#sec-set.prototype.clear
	      clear: function clear() {
	        var that = this;
	        var state = getInternalState(that);
	        var entry = state.first;
	        while (entry) {
	          entry.removed = true;
	          if (entry.previous) entry.previous = entry.previous.next = null;
	          entry = entry.next;
	        }
	        state.first = state.last = null;
	        state.index = create$5(null);
	        if (DESCRIPTORS$k) state.size = 0;
	        else that.size = 0;
	      },
	      // `{ Map, Set }.prototype.delete(key)` methods
	      // https://tc39.es/ecma262/#sec-map.prototype.delete
	      // https://tc39.es/ecma262/#sec-set.prototype.delete
	      'delete': function (key) {
	        var that = this;
	        var state = getInternalState(that);
	        var entry = getEntry(that, key);
	        if (entry) {
	          var next = entry.next;
	          var prev = entry.previous;
	          delete state.index[entry.index];
	          entry.removed = true;
	          if (prev) prev.next = next;
	          if (next) next.previous = prev;
	          if (state.first === entry) state.first = next;
	          if (state.last === entry) state.last = prev;
	          if (DESCRIPTORS$k) state.size--;
	          else that.size--;
	        } return !!entry;
	      },
	      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
	      // https://tc39.es/ecma262/#sec-map.prototype.foreach
	      // https://tc39.es/ecma262/#sec-set.prototype.foreach
	      forEach: function forEach(callbackfn /* , that = undefined */) {
	        var state = getInternalState(this);
	        var boundFunction = bind$9(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	        var entry;
	        while (entry = entry ? entry.next : state.first) {
	          boundFunction(entry.value, entry.key, this);
	          // revert to the last existing entry
	          while (entry && entry.removed) entry = entry.previous;
	        }
	      },
	      // `{ Map, Set}.prototype.has(key)` methods
	      // https://tc39.es/ecma262/#sec-map.prototype.has
	      // https://tc39.es/ecma262/#sec-set.prototype.has
	      has: function has(key) {
	        return !!getEntry(this, key);
	      }
	    });

	    defineBuiltIns$5(Prototype, IS_MAP ? {
	      // `Map.prototype.get(key)` method
	      // https://tc39.es/ecma262/#sec-map.prototype.get
	      get: function get(key) {
	        var entry = getEntry(this, key);
	        return entry && entry.value;
	      },
	      // `Map.prototype.set(key, value)` method
	      // https://tc39.es/ecma262/#sec-map.prototype.set
	      set: function set(key, value) {
	        return define(this, key === 0 ? 0 : key, value);
	      }
	    } : {
	      // `Set.prototype.add(value)` method
	      // https://tc39.es/ecma262/#sec-set.prototype.add
	      add: function add(value) {
	        return define(this, value = value === 0 ? 0 : value, value);
	      }
	    });
	    if (DESCRIPTORS$k) defineBuiltInAccessor$b(Prototype, 'size', {
	      configurable: true,
	      get: function () {
	        return getInternalState(this).size;
	      }
	    });
	    return Constructor;
	  },
	  setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
	    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
	    var getInternalCollectionState = internalStateGetterFor$1(CONSTRUCTOR_NAME);
	    var getInternalIteratorState = internalStateGetterFor$1(ITERATOR_NAME);
	    // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
	    // https://tc39.es/ecma262/#sec-map.prototype.entries
	    // https://tc39.es/ecma262/#sec-map.prototype.keys
	    // https://tc39.es/ecma262/#sec-map.prototype.values
	    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
	    // https://tc39.es/ecma262/#sec-set.prototype.entries
	    // https://tc39.es/ecma262/#sec-set.prototype.keys
	    // https://tc39.es/ecma262/#sec-set.prototype.values
	    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
	    defineIterator$1(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
	      setInternalState$9(this, {
	        type: ITERATOR_NAME,
	        target: iterated,
	        state: getInternalCollectionState(iterated),
	        kind: kind,
	        last: null
	      });
	    }, function () {
	      var state = getInternalIteratorState(this);
	      var kind = state.kind;
	      var entry = state.last;
	      // revert to the last existing entry
	      while (entry && entry.removed) entry = entry.previous;
	      // get next entry
	      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
	        // or finish the iteration
	        state.target = null;
	        return createIterResultObject$4(undefined, true);
	      }
	      // return step by kind
	      if (kind === 'keys') return createIterResultObject$4(entry.key, false);
	      if (kind === 'values') return createIterResultObject$4(entry.value, false);
	      return createIterResultObject$4([entry.key, entry.value], false);
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

	    // `{ Map, Set }.prototype[@@species]` accessors
	    // https://tc39.es/ecma262/#sec-get-map-@@species
	    // https://tc39.es/ecma262/#sec-get-set-@@species
	    setSpecies$4(CONSTRUCTOR_NAME);
	  }
	};

	var collection$3 = collection$4;
	var collectionStrong$1 = collectionStrong$2;

	// `Map` constructor
	// https://tc39.es/ecma262/#sec-map-objects
	collection$3('Map', function (init) {
	  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
	}, collectionStrong$1);

	var $$R = _export;
	var DESCRIPTORS$j = descriptors;
	var ownKeys = ownKeys$2;
	var toIndexedObject$3 = toIndexedObject$b;
	var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
	var createProperty$3 = createProperty$8;

	// `Object.getOwnPropertyDescriptors` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
	$$R({ target: 'Object', stat: true, sham: !DESCRIPTORS$j }, {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
	    var O = toIndexedObject$3(object);
	    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$1.f;
	    var keys = ownKeys(O);
	    var result = {};
	    var index = 0;
	    var key, descriptor;
	    while (keys.length > index) {
	      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
	      if (descriptor !== undefined) createProperty$3(result, key, descriptor);
	    }
	    return result;
	  }
	});

	var isConstructor$1 = isConstructor$5;
	var tryToString$1 = tryToString$6;

	var $TypeError$d = TypeError;

	// `Assert: IsConstructor(argument) is true`
	var aConstructor$2 = function (argument) {
	  if (isConstructor$1(argument)) return argument;
	  throw new $TypeError$d(tryToString$1(argument) + ' is not a constructor');
	};

	var anObject$p = anObject$y;
	var aConstructor$1 = aConstructor$2;
	var isNullOrUndefined$8 = isNullOrUndefined$e;
	var wellKnownSymbol$g = wellKnownSymbol$w;

	var SPECIES$2 = wellKnownSymbol$g('species');

	// `SpeciesConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-speciesconstructor
	var speciesConstructor$3 = function (O, defaultConstructor) {
	  var C = anObject$p(O).constructor;
	  var S;
	  return C === undefined || isNullOrUndefined$8(S = anObject$p(C)[SPECIES$2]) ? defaultConstructor : aConstructor$1(S);
	};

	var $TypeError$c = TypeError;

	var validateArgumentsLength$8 = function (passed, required) {
	  if (passed < required) throw new $TypeError$c('Not enough arguments');
	  return passed;
	};

	var userAgent$2 = environmentUserAgent;

	// eslint-disable-next-line redos/no-vulnerable -- safe
	var environmentIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$2);

	var globalThis$F = globalThis_1;
	var apply$3 = functionApply;
	var bind$8 = functionBindContext;
	var isCallable$d = isCallable$y;
	var hasOwn$d = hasOwnProperty_1;
	var fails$r = fails$P;
	var html = html$2;
	var arraySlice$3 = arraySlice$7;
	var createElement = documentCreateElement$2;
	var validateArgumentsLength$7 = validateArgumentsLength$8;
	var IS_IOS$1 = environmentIsIos;
	var IS_NODE$3 = environmentIsNode;

	var set$1 = globalThis$F.setImmediate;
	var clear = globalThis$F.clearImmediate;
	var process$2 = globalThis$F.process;
	var Dispatch = globalThis$F.Dispatch;
	var Function$2 = globalThis$F.Function;
	var MessageChannel = globalThis$F.MessageChannel;
	var String$1 = globalThis$F.String;
	var counter = 0;
	var queue$2 = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var $location, defer, channel$1, port;

	fails$r(function () {
	  // Deno throws a ReferenceError on `location` access without `--location` flag
	  $location = globalThis$F.location;
	});

	var run = function (id) {
	  if (hasOwn$d(queue$2, id)) {
	    var fn = queue$2[id];
	    delete queue$2[id];
	    fn();
	  }
	};

	var runner = function (id) {
	  return function () {
	    run(id);
	  };
	};

	var eventListener = function (event) {
	  run(event.data);
	};

	var globalPostMessageDefer = function (id) {
	  // old engines have not location.origin
	  globalThis$F.postMessage(String$1(id), $location.protocol + '//' + $location.host);
	};

	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!set$1 || !clear) {
	  set$1 = function setImmediate(handler) {
	    validateArgumentsLength$7(arguments.length, 1);
	    var fn = isCallable$d(handler) ? handler : Function$2(handler);
	    var args = arraySlice$3(arguments, 1);
	    queue$2[++counter] = function () {
	      apply$3(fn, undefined, args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clear = function clearImmediate(id) {
	    delete queue$2[id];
	  };
	  // Node.js 0.8-
	  if (IS_NODE$3) {
	    defer = function (id) {
	      process$2.nextTick(runner(id));
	    };
	  // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(runner(id));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  // except iOS - https://github.com/zloirock/core-js/issues/624
	  } else if (MessageChannel && !IS_IOS$1) {
	    channel$1 = new MessageChannel();
	    port = channel$1.port2;
	    channel$1.port1.onmessage = eventListener;
	    defer = bind$8(port.postMessage, port);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (
	    globalThis$F.addEventListener &&
	    isCallable$d(globalThis$F.postMessage) &&
	    !globalThis$F.importScripts &&
	    $location && $location.protocol !== 'file:' &&
	    !fails$r(globalPostMessageDefer)
	  ) {
	    defer = globalPostMessageDefer;
	    globalThis$F.addEventListener('message', eventListener, false);
	  // IE8-
	  } else if (ONREADYSTATECHANGE in createElement('script')) {
	    defer = function (id) {
	      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function (id) {
	      setTimeout(runner(id), 0);
	    };
	  }
	}

	var task$1 = {
	  set: set$1,
	  clear: clear
	};

	var globalThis$E = globalThis_1;
	var DESCRIPTORS$i = descriptors;

	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor$3 = Object.getOwnPropertyDescriptor;

	// Avoid NodeJS experimental warning
	var safeGetBuiltIn$2 = function (name) {
	  if (!DESCRIPTORS$i) return globalThis$E[name];
	  var descriptor = getOwnPropertyDescriptor$3(globalThis$E, name);
	  return descriptor && descriptor.value;
	};

	var Queue$2 = function () {
	  this.head = null;
	  this.tail = null;
	};

	Queue$2.prototype = {
	  add: function (item) {
	    var entry = { item: item, next: null };
	    var tail = this.tail;
	    if (tail) tail.next = entry;
	    else this.head = entry;
	    this.tail = entry;
	  },
	  get: function () {
	    var entry = this.head;
	    if (entry) {
	      var next = this.head = entry.next;
	      if (next === null) this.tail = null;
	      return entry.item;
	    }
	  }
	};

	var queue$1 = Queue$2;

	var userAgent$1 = environmentUserAgent;

	var environmentIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$1) && typeof Pebble != 'undefined';

	var userAgent = environmentUserAgent;

	var environmentIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent);

	var globalThis$D = globalThis_1;
	var safeGetBuiltIn$1 = safeGetBuiltIn$2;
	var bind$7 = functionBindContext;
	var macrotask = task$1.set;
	var Queue$1 = queue$1;
	var IS_IOS = environmentIsIos;
	var IS_IOS_PEBBLE = environmentIsIosPebble;
	var IS_WEBOS_WEBKIT = environmentIsWebosWebkit;
	var IS_NODE$2 = environmentIsNode;

	var MutationObserver = globalThis$D.MutationObserver || globalThis$D.WebKitMutationObserver;
	var document$2 = globalThis$D.document;
	var process$1 = globalThis$D.process;
	var Promise$1 = globalThis$D.Promise;
	var microtask$2 = safeGetBuiltIn$1('queueMicrotask');
	var notify$1, toggle, node, promise, then;

	// modern engines have queueMicrotask method
	if (!microtask$2) {
	  var queue = new Queue$1();

	  var flush = function () {
	    var parent, fn;
	    if (IS_NODE$2 && (parent = process$1.domain)) parent.exit();
	    while (fn = queue.get()) try {
	      fn();
	    } catch (error) {
	      if (queue.head) notify$1();
	      throw error;
	    }
	    if (parent) parent.enter();
	  };

	  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
	  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
	  if (!IS_IOS && !IS_NODE$2 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
	    toggle = true;
	    node = document$2.createTextNode('');
	    new MutationObserver(flush).observe(node, { characterData: true });
	    notify$1 = function () {
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
	    // Promise.resolve without an argument throws an error in LG WebOS 2
	    promise = Promise$1.resolve(undefined);
	    // workaround of WebKit ~ iOS Safari 10.1 bug
	    promise.constructor = Promise$1;
	    then = bind$7(promise.then, promise);
	    notify$1 = function () {
	      then(flush);
	    };
	  // Node.js without promises
	  } else if (IS_NODE$2) {
	    notify$1 = function () {
	      process$1.nextTick(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessage
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    // `webpack` dev server bug on IE global methods - use bind(fn, global)
	    macrotask = bind$7(macrotask, globalThis$D);
	    notify$1 = function () {
	      macrotask(flush);
	    };
	  }

	  microtask$2 = function (fn) {
	    if (!queue.head) notify$1();
	    queue.add(fn);
	  };
	}

	var microtask_1 = microtask$2;

	var hostReportErrors$1 = function (a, b) {
	  try {
	    // eslint-disable-next-line no-console -- safe
	    arguments.length === 1 ? console.error(a) : console.error(a, b);
	  } catch (error) { /* empty */ }
	};

	var perform$4 = function (exec) {
	  try {
	    return { error: false, value: exec() };
	  } catch (error) {
	    return { error: true, value: error };
	  }
	};

	var globalThis$C = globalThis_1;

	var promiseNativeConstructor = globalThis$C.Promise;

	var globalThis$B = globalThis_1;
	var NativePromiseConstructor$3 = promiseNativeConstructor;
	var isCallable$c = isCallable$y;
	var isForced$1 = isForced_1;
	var inspectSource = inspectSource$3;
	var wellKnownSymbol$f = wellKnownSymbol$w;
	var ENVIRONMENT$2 = environment;
	var V8_VERSION = environmentV8Version;

	NativePromiseConstructor$3 && NativePromiseConstructor$3.prototype;
	var SPECIES$1 = wellKnownSymbol$f('species');
	var SUBCLASSING = false;
	var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$c(globalThis$B.PromiseRejectionEvent);

	var FORCED_PROMISE_CONSTRUCTOR$5 = isForced$1('Promise', function () {
	  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor$3);
	  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$3);
	  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
	  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
	  // We can't detect it synchronously, so just check versions
	  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
	  // We can't use @@species feature detection in V8 since it causes
	  // deoptimization and performance degradation
	  // https://github.com/zloirock/core-js/issues/679
	  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
	    // Detect correctness of subclassing with @@species support
	    var promise = new NativePromiseConstructor$3(function (resolve) { resolve(1); });
	    var FakePromise = function (exec) {
	      exec(function () { /* empty */ }, function () { /* empty */ });
	    };
	    var constructor = promise.constructor = {};
	    constructor[SPECIES$1] = FakePromise;
	    SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
	    if (!SUBCLASSING) return true;
	  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	  } return !GLOBAL_CORE_JS_PROMISE && (ENVIRONMENT$2 === 'BROWSER' || ENVIRONMENT$2 === 'DENO') && !NATIVE_PROMISE_REJECTION_EVENT$1;
	});

	var promiseConstructorDetection = {
	  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
	  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
	  SUBCLASSING: SUBCLASSING
	};

	var newPromiseCapability$2 = {};

	var aCallable$h = aCallable$o;

	var $TypeError$b = TypeError;

	var PromiseCapability = function (C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw new $TypeError$b('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aCallable$h(resolve);
	  this.reject = aCallable$h(reject);
	};

	// `NewPromiseCapability` abstract operation
	// https://tc39.es/ecma262/#sec-newpromisecapability
	newPromiseCapability$2.f = function (C) {
	  return new PromiseCapability(C);
	};

	var $$Q = _export;
	var IS_NODE$1 = environmentIsNode;
	var globalThis$A = globalThis_1;
	var call$u = functionCall;
	var defineBuiltIn$9 = defineBuiltIn$f;
	var setPrototypeOf$3 = objectSetPrototypeOf;
	var setToStringTag$5 = setToStringTag$9;
	var setSpecies$3 = setSpecies$5;
	var aCallable$g = aCallable$o;
	var isCallable$b = isCallable$y;
	var isObject$a = isObject$r;
	var anInstance$7 = anInstance$a;
	var speciesConstructor$2 = speciesConstructor$3;
	var task = task$1.set;
	var microtask$1 = microtask_1;
	var hostReportErrors = hostReportErrors$1;
	var perform$3 = perform$4;
	var Queue = queue$1;
	var InternalStateModule$9 = internalState;
	var NativePromiseConstructor$2 = promiseNativeConstructor;
	var PromiseConstructorDetection = promiseConstructorDetection;
	var newPromiseCapabilityModule$4 = newPromiseCapability$2;

	var PROMISE = 'Promise';
	var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
	var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
	var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
	var getInternalPromiseState = InternalStateModule$9.getterFor(PROMISE);
	var setInternalState$8 = InternalStateModule$9.set;
	var NativePromisePrototype$1 = NativePromiseConstructor$2 && NativePromiseConstructor$2.prototype;
	var PromiseConstructor = NativePromiseConstructor$2;
	var PromisePrototype = NativePromisePrototype$1;
	var TypeError$6 = globalThis$A.TypeError;
	var document$1 = globalThis$A.document;
	var process = globalThis$A.process;
	var newPromiseCapability$1 = newPromiseCapabilityModule$4.f;
	var newGenericPromiseCapability = newPromiseCapability$1;

	var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && globalThis$A.dispatchEvent);
	var UNHANDLED_REJECTION = 'unhandledrejection';
	var REJECTION_HANDLED = 'rejectionhandled';
	var PENDING = 0;
	var FULFILLED = 1;
	var REJECTED = 2;
	var HANDLED = 1;
	var UNHANDLED = 2;

	var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

	// helpers
	var isThenable = function (it) {
	  var then;
	  return isObject$a(it) && isCallable$b(then = it.then) ? then : false;
	};

	var callReaction = function (reaction, state) {
	  var value = state.value;
	  var ok = state.state === FULFILLED;
	  var handler = ok ? reaction.ok : reaction.fail;
	  var resolve = reaction.resolve;
	  var reject = reaction.reject;
	  var domain = reaction.domain;
	  var result, then, exited;
	  try {
	    if (handler) {
	      if (!ok) {
	        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
	        state.rejection = HANDLED;
	      }
	      if (handler === true) result = value;
	      else {
	        if (domain) domain.enter();
	        result = handler(value); // can throw
	        if (domain) {
	          domain.exit();
	          exited = true;
	        }
	      }
	      if (result === reaction.promise) {
	        reject(new TypeError$6('Promise-chain cycle'));
	      } else if (then = isThenable(result)) {
	        call$u(then, result, resolve, reject);
	      } else resolve(result);
	    } else reject(value);
	  } catch (error) {
	    if (domain && !exited) domain.exit();
	    reject(error);
	  }
	};

	var notify = function (state, isReject) {
	  if (state.notified) return;
	  state.notified = true;
	  microtask$1(function () {
	    var reactions = state.reactions;
	    var reaction;
	    while (reaction = reactions.get()) {
	      callReaction(reaction, state);
	    }
	    state.notified = false;
	    if (isReject && !state.rejection) onUnhandled(state);
	  });
	};

	var dispatchEvent = function (name, promise, reason) {
	  var event, handler;
	  if (DISPATCH_EVENT) {
	    event = document$1.createEvent('Event');
	    event.promise = promise;
	    event.reason = reason;
	    event.initEvent(name, false, true);
	    globalThis$A.dispatchEvent(event);
	  } else event = { promise: promise, reason: reason };
	  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = globalThis$A['on' + name])) handler(event);
	  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
	};

	var onUnhandled = function (state) {
	  call$u(task, globalThis$A, function () {
	    var promise = state.facade;
	    var value = state.value;
	    var IS_UNHANDLED = isUnhandled(state);
	    var result;
	    if (IS_UNHANDLED) {
	      result = perform$3(function () {
	        if (IS_NODE$1) {
	          process.emit('unhandledRejection', value, promise);
	        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      state.rejection = IS_NODE$1 || isUnhandled(state) ? UNHANDLED : HANDLED;
	      if (result.error) throw result.value;
	    }
	  });
	};

	var isUnhandled = function (state) {
	  return state.rejection !== HANDLED && !state.parent;
	};

	var onHandleUnhandled = function (state) {
	  call$u(task, globalThis$A, function () {
	    var promise = state.facade;
	    if (IS_NODE$1) {
	      process.emit('rejectionHandled', promise);
	    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
	  });
	};

	var bind$6 = function (fn, state, unwrap) {
	  return function (value) {
	    fn(state, value, unwrap);
	  };
	};

	var internalReject = function (state, value, unwrap) {
	  if (state.done) return;
	  state.done = true;
	  if (unwrap) state = unwrap;
	  state.value = value;
	  state.state = REJECTED;
	  notify(state, true);
	};

	var internalResolve = function (state, value, unwrap) {
	  if (state.done) return;
	  state.done = true;
	  if (unwrap) state = unwrap;
	  try {
	    if (state.facade === value) throw new TypeError$6("Promise can't be resolved itself");
	    var then = isThenable(value);
	    if (then) {
	      microtask$1(function () {
	        var wrapper = { done: false };
	        try {
	          call$u(then, value,
	            bind$6(internalResolve, wrapper, state),
	            bind$6(internalReject, wrapper, state)
	          );
	        } catch (error) {
	          internalReject(wrapper, error, state);
	        }
	      });
	    } else {
	      state.value = value;
	      state.state = FULFILLED;
	      notify(state, false);
	    }
	  } catch (error) {
	    internalReject({ done: false }, error, state);
	  }
	};

	// constructor polyfill
	if (FORCED_PROMISE_CONSTRUCTOR$4) {
	  // 25.4.3.1 Promise(executor)
	  PromiseConstructor = function Promise(executor) {
	    anInstance$7(this, PromisePrototype);
	    aCallable$g(executor);
	    call$u(Internal, this);
	    var state = getInternalPromiseState(this);
	    try {
	      executor(bind$6(internalResolve, state), bind$6(internalReject, state));
	    } catch (error) {
	      internalReject(state, error);
	    }
	  };

	  PromisePrototype = PromiseConstructor.prototype;

	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  Internal = function Promise(executor) {
	    setInternalState$8(this, {
	      type: PROMISE,
	      done: false,
	      notified: false,
	      parent: false,
	      reactions: new Queue(),
	      rejection: false,
	      state: PENDING,
	      value: null
	    });
	  };

	  // `Promise.prototype.then` method
	  // https://tc39.es/ecma262/#sec-promise.prototype.then
	  Internal.prototype = defineBuiltIn$9(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
	    var state = getInternalPromiseState(this);
	    var reaction = newPromiseCapability$1(speciesConstructor$2(this, PromiseConstructor));
	    state.parent = true;
	    reaction.ok = isCallable$b(onFulfilled) ? onFulfilled : true;
	    reaction.fail = isCallable$b(onRejected) && onRejected;
	    reaction.domain = IS_NODE$1 ? process.domain : undefined;
	    if (state.state === PENDING) state.reactions.add(reaction);
	    else microtask$1(function () {
	      callReaction(reaction, state);
	    });
	    return reaction.promise;
	  });

	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    var state = getInternalPromiseState(promise);
	    this.promise = promise;
	    this.resolve = bind$6(internalResolve, state);
	    this.reject = bind$6(internalReject, state);
	  };

	  newPromiseCapabilityModule$4.f = newPromiseCapability$1 = function (C) {
	    return C === PromiseConstructor || C === PromiseWrapper
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };

	  if (isCallable$b(NativePromiseConstructor$2) && NativePromisePrototype$1 !== Object.prototype) {
	    nativeThen = NativePromisePrototype$1.then;

	    if (!NATIVE_PROMISE_SUBCLASSING) {
	      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
	      defineBuiltIn$9(NativePromisePrototype$1, 'then', function then(onFulfilled, onRejected) {
	        var that = this;
	        return new PromiseConstructor(function (resolve, reject) {
	          call$u(nativeThen, that, resolve, reject);
	        }).then(onFulfilled, onRejected);
	      // https://github.com/zloirock/core-js/issues/640
	      }, { unsafe: true });
	    }

	    // make `.constructor === Promise` work for native promise-based APIs
	    try {
	      delete NativePromisePrototype$1.constructor;
	    } catch (error) { /* empty */ }

	    // make `instanceof Promise` work for native promise-based APIs
	    if (setPrototypeOf$3) {
	      setPrototypeOf$3(NativePromisePrototype$1, PromisePrototype);
	    }
	  }
	}

	$$Q({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
	  Promise: PromiseConstructor
	});

	setToStringTag$5(PromiseConstructor, PROMISE, false);
	setSpecies$3(PROMISE);

	var NativePromiseConstructor$1 = promiseNativeConstructor;
	var checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$4;
	var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;

	var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration$1(function (iterable) {
	  NativePromiseConstructor$1.all(iterable).then(undefined, function () { /* empty */ });
	});

	var $$P = _export;
	var call$t = functionCall;
	var aCallable$f = aCallable$o;
	var newPromiseCapabilityModule$3 = newPromiseCapability$2;
	var perform$2 = perform$4;
	var iterate$c = iterate$f;
	var PROMISE_STATICS_INCORRECT_ITERATION$2 = promiseStaticsIncorrectIteration;

	// `Promise.all` method
	// https://tc39.es/ecma262/#sec-promise.all
	$$P({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$2 }, {
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapabilityModule$3.f(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform$2(function () {
	      var $promiseResolve = aCallable$f(C.resolve);
	      var values = [];
	      var counter = 0;
	      var remaining = 1;
	      iterate$c(iterable, function (promise) {
	        var index = counter++;
	        var alreadyCalled = false;
	        remaining++;
	        call$t($promiseResolve, C, promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	var $$O = _export;
	var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
	var NativePromiseConstructor = promiseNativeConstructor;
	var getBuiltIn$6 = getBuiltIn$e;
	var isCallable$a = isCallable$y;
	var defineBuiltIn$8 = defineBuiltIn$f;

	var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

	// `Promise.prototype.catch` method
	// https://tc39.es/ecma262/#sec-promise.prototype.catch
	$$O({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
	  'catch': function (onRejected) {
	    return this.then(undefined, onRejected);
	  }
	});

	// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
	if (isCallable$a(NativePromiseConstructor)) {
	  var method = getBuiltIn$6('Promise').prototype['catch'];
	  if (NativePromisePrototype['catch'] !== method) {
	    defineBuiltIn$8(NativePromisePrototype, 'catch', method, { unsafe: true });
	  }
	}

	var $$N = _export;
	var call$s = functionCall;
	var aCallable$e = aCallable$o;
	var newPromiseCapabilityModule$2 = newPromiseCapability$2;
	var perform$1 = perform$4;
	var iterate$b = iterate$f;
	var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;

	// `Promise.race` method
	// https://tc39.es/ecma262/#sec-promise.race
	$$N({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapabilityModule$2.f(C);
	    var reject = capability.reject;
	    var result = perform$1(function () {
	      var $promiseResolve = aCallable$e(C.resolve);
	      iterate$b(iterable, function (promise) {
	        call$s($promiseResolve, C, promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	var $$M = _export;
	var newPromiseCapabilityModule$1 = newPromiseCapability$2;
	var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;

	// `Promise.reject` method
	// https://tc39.es/ecma262/#sec-promise.reject
	$$M({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
	  reject: function reject(r) {
	    var capability = newPromiseCapabilityModule$1.f(this);
	    var capabilityReject = capability.reject;
	    capabilityReject(r);
	    return capability.promise;
	  }
	});

	var anObject$o = anObject$y;
	var isObject$9 = isObject$r;
	var newPromiseCapability = newPromiseCapability$2;

	var promiseResolve$1 = function (C, x) {
	  anObject$o(C);
	  if (isObject$9(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};

	var $$L = _export;
	var getBuiltIn$5 = getBuiltIn$e;
	var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
	var promiseResolve = promiseResolve$1;

	getBuiltIn$5('Promise');

	// `Promise.resolve` method
	// https://tc39.es/ecma262/#sec-promise.resolve
	$$L({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
	  resolve: function resolve(x) {
	    return promiseResolve(this, x);
	  }
	});

	var $$K = _export;
	var call$r = functionCall;
	var aCallable$d = aCallable$o;
	var newPromiseCapabilityModule = newPromiseCapability$2;
	var perform = perform$4;
	var iterate$a = iterate$f;
	var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;

	// `Promise.allSettled` method
	// https://tc39.es/ecma262/#sec-promise.allsettled
	$$K({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
	  allSettled: function allSettled(iterable) {
	    var C = this;
	    var capability = newPromiseCapabilityModule.f(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform(function () {
	      var promiseResolve = aCallable$d(C.resolve);
	      var values = [];
	      var counter = 0;
	      var remaining = 1;
	      iterate$a(iterable, function (promise) {
	        var index = counter++;
	        var alreadyCalled = false;
	        remaining++;
	        call$r(promiseResolve, C, promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = { status: 'fulfilled', value: value };
	          --remaining || resolve(values);
	        }, function (error) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = { status: 'rejected', reason: error };
	          --remaining || resolve(values);
	        });
	      });
	      --remaining || resolve(values);
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	var $$J = _export;
	var globalThis$z = globalThis_1;
	var setToStringTag$4 = setToStringTag$9;

	$$J({ global: true }, { Reflect: {} });

	// Reflect[@@toStringTag] property
	// https://tc39.es/ecma262/#sec-reflect-@@tostringtag
	setToStringTag$4(globalThis$z.Reflect, 'Reflect', true);

	var isObject$8 = isObject$r;
	var classof$a = classofRaw$2;
	var wellKnownSymbol$e = wellKnownSymbol$w;

	var MATCH$2 = wellKnownSymbol$e('match');

	// `IsRegExp` abstract operation
	// https://tc39.es/ecma262/#sec-isregexp
	var isRegexp = function (it) {
	  var isRegExp;
	  return isObject$8(it) && ((isRegExp = it[MATCH$2]) !== undefined ? !!isRegExp : classof$a(it) === 'RegExp');
	};

	var anObject$n = anObject$y;

	// `RegExp.prototype.flags` getter implementation
	// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
	var regexpFlags$1 = function () {
	  var that = anObject$n(this);
	  var result = '';
	  if (that.hasIndices) result += 'd';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.dotAll) result += 's';
	  if (that.unicode) result += 'u';
	  if (that.unicodeSets) result += 'v';
	  if (that.sticky) result += 'y';
	  return result;
	};

	var call$q = functionCall;
	var hasOwn$c = hasOwnProperty_1;
	var isPrototypeOf$3 = objectIsPrototypeOf;
	var regExpFlags$1 = regexpFlags$1;

	var RegExpPrototype$5 = RegExp.prototype;

	var regexpGetFlags = function (R) {
	  var flags = R.flags;
	  return flags === undefined && !('flags' in RegExpPrototype$5) && !hasOwn$c(R, 'flags') && isPrototypeOf$3(RegExpPrototype$5, R)
	    ? call$q(regExpFlags$1, R) : flags;
	};

	var fails$q = fails$P;
	var globalThis$y = globalThis_1;

	// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
	var $RegExp$2 = globalThis$y.RegExp;

	var UNSUPPORTED_Y$3 = fails$q(function () {
	  var re = $RegExp$2('a', 'y');
	  re.lastIndex = 2;
	  return re.exec('abcd') !== null;
	});

	// UC Browser bug
	// https://github.com/zloirock/core-js/issues/1008
	var MISSED_STICKY$1 = UNSUPPORTED_Y$3 || fails$q(function () {
	  return !$RegExp$2('a', 'y').sticky;
	});

	var BROKEN_CARET = UNSUPPORTED_Y$3 || fails$q(function () {
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
	  var re = $RegExp$2('^r', 'gy');
	  re.lastIndex = 2;
	  return re.exec('str') !== null;
	});

	var regexpStickyHelpers = {
	  BROKEN_CARET: BROKEN_CARET,
	  MISSED_STICKY: MISSED_STICKY$1,
	  UNSUPPORTED_Y: UNSUPPORTED_Y$3
	};

	var fails$p = fails$P;
	var globalThis$x = globalThis_1;

	// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
	var $RegExp$1 = globalThis$x.RegExp;

	var regexpUnsupportedDotAll = fails$p(function () {
	  var re = $RegExp$1('.', 's');
	  return !(re.dotAll && re.test('\n') && re.flags === 's');
	});

	var fails$o = fails$P;
	var globalThis$w = globalThis_1;

	// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
	var $RegExp = globalThis$w.RegExp;

	var regexpUnsupportedNcg = fails$o(function () {
	  var re = $RegExp('(?<a>b)', 'g');
	  return re.exec('b').groups.a !== 'b' ||
	    'b'.replace(re, '$<a>c') !== 'bc';
	});

	var DESCRIPTORS$h = descriptors;
	var globalThis$v = globalThis_1;
	var uncurryThis$B = functionUncurryThis;
	var isForced = isForced_1;
	var inheritIfRequired$3 = inheritIfRequired$6;
	var createNonEnumerableProperty$8 = createNonEnumerableProperty$f;
	var create$4 = objectCreate$1;
	var getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
	var isPrototypeOf$2 = objectIsPrototypeOf;
	var isRegExp$3 = isRegexp;
	var toString$h = toString$m;
	var getRegExpFlags$3 = regexpGetFlags;
	var stickyHelpers$2 = regexpStickyHelpers;
	var proxyAccessor = proxyAccessor$2;
	var defineBuiltIn$7 = defineBuiltIn$f;
	var fails$n = fails$P;
	var hasOwn$b = hasOwnProperty_1;
	var enforceInternalState$3 = internalState.enforce;
	var setSpecies$2 = setSpecies$5;
	var wellKnownSymbol$d = wellKnownSymbol$w;
	var UNSUPPORTED_DOT_ALL$2 = regexpUnsupportedDotAll;
	var UNSUPPORTED_NCG$1 = regexpUnsupportedNcg;

	var MATCH$1 = wellKnownSymbol$d('match');
	var NativeRegExp = globalThis$v.RegExp;
	var RegExpPrototype$4 = NativeRegExp.prototype;
	var SyntaxError$2 = globalThis$v.SyntaxError;
	var exec$6 = uncurryThis$B(RegExpPrototype$4.exec);
	var charAt$7 = uncurryThis$B(''.charAt);
	var replace$6 = uncurryThis$B(''.replace);
	var stringIndexOf$3 = uncurryThis$B(''.indexOf);
	var stringSlice$9 = uncurryThis$B(''.slice);
	// TODO: Use only proper RegExpIdentifierName
	var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
	var re1 = /a/g;
	var re2 = /a/g;

	// "new" should create a new object, old webkit bug
	var CORRECT_NEW = new NativeRegExp(re1) !== re1;

	var MISSED_STICKY = stickyHelpers$2.MISSED_STICKY;
	var UNSUPPORTED_Y$2 = stickyHelpers$2.UNSUPPORTED_Y;

	var BASE_FORCED = DESCRIPTORS$h &&
	  (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL$2 || UNSUPPORTED_NCG$1 || fails$n(function () {
	    re2[MATCH$1] = false;
	    // RegExp constructor can alter flags and IsRegExp works correct with @@match
	    // eslint-disable-next-line sonar/inconsistent-function-call -- required for testing
	    return NativeRegExp(re1) !== re1 || NativeRegExp(re2) === re2 || String(NativeRegExp(re1, 'i')) !== '/a/i';
	  }));

	var handleDotAll = function (string) {
	  var length = string.length;
	  var index = 0;
	  var result = '';
	  var brackets = false;
	  var chr;
	  for (; index <= length; index++) {
	    chr = charAt$7(string, index);
	    if (chr === '\\') {
	      result += chr + charAt$7(string, ++index);
	      continue;
	    }
	    if (!brackets && chr === '.') {
	      result += '[\\s\\S]';
	    } else {
	      if (chr === '[') {
	        brackets = true;
	      } else if (chr === ']') {
	        brackets = false;
	      } result += chr;
	    }
	  } return result;
	};

	var handleNCG = function (string) {
	  var length = string.length;
	  var index = 0;
	  var result = '';
	  var named = [];
	  var names = create$4(null);
	  var brackets = false;
	  var ncg = false;
	  var groupid = 0;
	  var groupname = '';
	  var chr;
	  for (; index <= length; index++) {
	    chr = charAt$7(string, index);
	    if (chr === '\\') {
	      chr += charAt$7(string, ++index);
	    } else if (chr === ']') {
	      brackets = false;
	    } else if (!brackets) switch (true) {
	      case chr === '[':
	        brackets = true;
	        break;
	      case chr === '(':
	        result += chr;
	        // ignore non-capturing groups
	        if (stringSlice$9(string, index + 1, index + 3) === '?:') {
	          continue;
	        }
	        if (exec$6(IS_NCG, stringSlice$9(string, index + 1))) {
	          index += 2;
	          ncg = true;
	        }
	        groupid++;
	        continue;
	      case chr === '>' && ncg:
	        if (groupname === '' || hasOwn$b(names, groupname)) {
	          throw new SyntaxError$2('Invalid capture group name');
	        }
	        names[groupname] = true;
	        named[named.length] = [groupname, groupid];
	        ncg = false;
	        groupname = '';
	        continue;
	    }
	    if (ncg) groupname += chr;
	    else result += chr;
	  } return [result, named];
	};

	// `RegExp` constructor
	// https://tc39.es/ecma262/#sec-regexp-constructor
	if (isForced('RegExp', BASE_FORCED)) {
	  var RegExpWrapper = function RegExp(pattern, flags) {
	    var thisIsRegExp = isPrototypeOf$2(RegExpPrototype$4, this);
	    var patternIsRegExp = isRegExp$3(pattern);
	    var flagsAreUndefined = flags === undefined;
	    var groups = [];
	    var rawPattern = pattern;
	    var rawFlags, dotAll, sticky, handled, result, state;

	    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
	      return pattern;
	    }

	    if (patternIsRegExp || isPrototypeOf$2(RegExpPrototype$4, pattern)) {
	      pattern = pattern.source;
	      if (flagsAreUndefined) flags = getRegExpFlags$3(rawPattern);
	    }

	    pattern = pattern === undefined ? '' : toString$h(pattern);
	    flags = flags === undefined ? '' : toString$h(flags);
	    rawPattern = pattern;

	    if (UNSUPPORTED_DOT_ALL$2 && 'dotAll' in re1) {
	      dotAll = !!flags && stringIndexOf$3(flags, 's') > -1;
	      if (dotAll) flags = replace$6(flags, /s/g, '');
	    }

	    rawFlags = flags;

	    if (MISSED_STICKY && 'sticky' in re1) {
	      sticky = !!flags && stringIndexOf$3(flags, 'y') > -1;
	      if (sticky && UNSUPPORTED_Y$2) flags = replace$6(flags, /y/g, '');
	    }

	    if (UNSUPPORTED_NCG$1) {
	      handled = handleNCG(pattern);
	      pattern = handled[0];
	      groups = handled[1];
	    }

	    result = inheritIfRequired$3(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype$4, RegExpWrapper);

	    if (dotAll || sticky || groups.length) {
	      state = enforceInternalState$3(result);
	      if (dotAll) {
	        state.dotAll = true;
	        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
	      }
	      if (sticky) state.sticky = true;
	      if (groups.length) state.groups = groups;
	    }

	    if (pattern !== rawPattern) try {
	      // fails in old engines, but we have no alternatives for unsupported regex syntax
	      createNonEnumerableProperty$8(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
	    } catch (error) { /* empty */ }

	    return result;
	  };

	  for (var keys$1 = getOwnPropertyNames$1(NativeRegExp), index = 0; keys$1.length > index;) {
	    proxyAccessor(RegExpWrapper, NativeRegExp, keys$1[index++]);
	  }

	  RegExpPrototype$4.constructor = RegExpWrapper;
	  RegExpWrapper.prototype = RegExpPrototype$4;
	  defineBuiltIn$7(globalThis$v, 'RegExp', RegExpWrapper, { constructor: true });
	}

	// https://tc39.es/ecma262/#sec-get-regexp-@@species
	setSpecies$2('RegExp');

	var DESCRIPTORS$g = descriptors;
	var UNSUPPORTED_DOT_ALL$1 = regexpUnsupportedDotAll;
	var classof$9 = classofRaw$2;
	var defineBuiltInAccessor$a = defineBuiltInAccessor$e;
	var getInternalState$5 = internalState.get;

	var RegExpPrototype$3 = RegExp.prototype;
	var $TypeError$a = TypeError;

	// `RegExp.prototype.dotAll` getter
	// https://tc39.es/ecma262/#sec-get-regexp.prototype.dotall
	if (DESCRIPTORS$g && UNSUPPORTED_DOT_ALL$1) {
	  defineBuiltInAccessor$a(RegExpPrototype$3, 'dotAll', {
	    configurable: true,
	    get: function dotAll() {
	      if (this === RegExpPrototype$3) return;
	      // We can't use InternalStateModule.getterFor because
	      // we don't add metadata for regexps created by a literal.
	      if (classof$9(this) === 'RegExp') {
	        return !!getInternalState$5(this).dotAll;
	      }
	      throw new $TypeError$a('Incompatible receiver, RegExp required');
	    }
	  });
	}

	/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
	/* eslint-disable regexp/no-useless-quantifier -- testing */
	var call$p = functionCall;
	var uncurryThis$A = functionUncurryThis;
	var toString$g = toString$m;
	var regexpFlags = regexpFlags$1;
	var stickyHelpers$1 = regexpStickyHelpers;
	var shared = shared$4;
	var create$3 = objectCreate$1;
	var getInternalState$4 = internalState.get;
	var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
	var UNSUPPORTED_NCG = regexpUnsupportedNcg;

	var nativeReplace = shared('native-string-replace', String.prototype.replace);
	var nativeExec = RegExp.prototype.exec;
	var patchedExec = nativeExec;
	var charAt$6 = uncurryThis$A(''.charAt);
	var indexOf$1 = uncurryThis$A(''.indexOf);
	var replace$5 = uncurryThis$A(''.replace);
	var stringSlice$8 = uncurryThis$A(''.slice);

	var UPDATES_LAST_INDEX_WRONG = (function () {
	  var re1 = /a/;
	  var re2 = /b*/g;
	  call$p(nativeExec, re1, 'a');
	  call$p(nativeExec, re2, 'a');
	  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
	})();

	var UNSUPPORTED_Y$1 = stickyHelpers$1.BROKEN_CARET;

	// nonparticipating capturing group, copied from es5-shim's String#split patch.
	var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

	var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

	if (PATCH) {
	  patchedExec = function exec(string) {
	    var re = this;
	    var state = getInternalState$4(re);
	    var str = toString$g(string);
	    var raw = state.raw;
	    var result, reCopy, lastIndex, match, i, object, group;

	    if (raw) {
	      raw.lastIndex = re.lastIndex;
	      result = call$p(patchedExec, raw, str);
	      re.lastIndex = raw.lastIndex;
	      return result;
	    }

	    var groups = state.groups;
	    var sticky = UNSUPPORTED_Y$1 && re.sticky;
	    var flags = call$p(regexpFlags, re);
	    var source = re.source;
	    var charsAdded = 0;
	    var strCopy = str;

	    if (sticky) {
	      flags = replace$5(flags, 'y', '');
	      if (indexOf$1(flags, 'g') === -1) {
	        flags += 'g';
	      }

	      strCopy = stringSlice$8(str, re.lastIndex);
	      // Support anchored sticky behavior.
	      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$6(str, re.lastIndex - 1) !== '\n')) {
	        source = '(?: ' + source + ')';
	        strCopy = ' ' + strCopy;
	        charsAdded++;
	      }
	      // ^(? + rx + ) is needed, in combination with some str slicing, to
	      // simulate the 'y' flag.
	      reCopy = new RegExp('^(?:' + source + ')', flags);
	    }

	    if (NPCG_INCLUDED) {
	      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
	    }
	    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

	    match = call$p(nativeExec, sticky ? reCopy : re, strCopy);

	    if (sticky) {
	      if (match) {
	        match.input = stringSlice$8(match.input, charsAdded);
	        match[0] = stringSlice$8(match[0], charsAdded);
	        match.index = re.lastIndex;
	        re.lastIndex += match[0].length;
	      } else re.lastIndex = 0;
	    } else if (UPDATES_LAST_INDEX_WRONG && match) {
	      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
	    }
	    if (NPCG_INCLUDED && match && match.length > 1) {
	      // Fix browsers whose `exec` methods don't consistently return `undefined`
	      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
	      call$p(nativeReplace, match[0], reCopy, function () {
	        for (i = 1; i < arguments.length - 2; i++) {
	          if (arguments[i] === undefined) match[i] = undefined;
	        }
	      });
	    }

	    if (match && groups) {
	      match.groups = object = create$3(null);
	      for (i = 0; i < groups.length; i++) {
	        group = groups[i];
	        object[group[0]] = match[group[1]];
	      }
	    }

	    return match;
	  };
	}

	var regexpExec$2 = patchedExec;

	var $$I = _export;
	var exec$5 = regexpExec$2;

	// `RegExp.prototype.exec` method
	// https://tc39.es/ecma262/#sec-regexp.prototype.exec
	$$I({ target: 'RegExp', proto: true, forced: /./.exec !== exec$5 }, {
	  exec: exec$5
	});

	var globalThis$u = globalThis_1;
	var DESCRIPTORS$f = descriptors;
	var defineBuiltInAccessor$9 = defineBuiltInAccessor$e;
	var regExpFlags = regexpFlags$1;
	var fails$m = fails$P;

	// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
	var RegExp$1 = globalThis$u.RegExp;
	var RegExpPrototype$2 = RegExp$1.prototype;

	var FORCED$2 = DESCRIPTORS$f && fails$m(function () {
	  var INDICES_SUPPORT = true;
	  try {
	    RegExp$1('.', 'd');
	  } catch (error) {
	    INDICES_SUPPORT = false;
	  }

	  var O = {};
	  // modern V8 bug
	  var calls = '';
	  var expected = INDICES_SUPPORT ? 'dgimsy' : 'gimsy';

	  var addGetter = function (key, chr) {
	    // eslint-disable-next-line es/no-object-defineproperty -- safe
	    Object.defineProperty(O, key, { get: function () {
	      calls += chr;
	      return true;
	    } });
	  };

	  var pairs = {
	    dotAll: 's',
	    global: 'g',
	    ignoreCase: 'i',
	    multiline: 'm',
	    sticky: 'y'
	  };

	  if (INDICES_SUPPORT) pairs.hasIndices = 'd';

	  for (var key in pairs) addGetter(key, pairs[key]);

	  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	  var result = Object.getOwnPropertyDescriptor(RegExpPrototype$2, 'flags').get.call(O);

	  return result !== expected || calls !== expected;
	});

	// `RegExp.prototype.flags` getter
	// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
	if (FORCED$2) defineBuiltInAccessor$9(RegExpPrototype$2, 'flags', {
	  configurable: true,
	  get: regExpFlags
	});

	// TODO: Remove from `core-js@4` since it's moved to entry points

	var $$H = _export;
	var call$o = functionCall;
	var isCallable$9 = isCallable$y;
	var anObject$m = anObject$y;
	var toString$f = toString$m;

	var DELEGATES_TO_EXEC = function () {
	  var execCalled = false;
	  var re = /[ac]/;
	  re.exec = function () {
	    execCalled = true;
	    return /./.exec.apply(this, arguments);
	  };
	  return re.test('abc') === true && execCalled;
	}();

	var nativeTest = /./.test;

	// `RegExp.prototype.test` method
	// https://tc39.es/ecma262/#sec-regexp.prototype.test
	$$H({ target: 'RegExp', proto: true, forced: !DELEGATES_TO_EXEC }, {
	  test: function (S) {
	    var R = anObject$m(this);
	    var string = toString$f(S);
	    var exec = R.exec;
	    if (!isCallable$9(exec)) return call$o(nativeTest, R, string);
	    var result = call$o(exec, R, string);
	    if (result === null) return false;
	    anObject$m(result);
	    return true;
	  }
	});

	var collection$2 = collection$4;
	var collectionStrong = collectionStrong$2;

	// `Set` constructor
	// https://tc39.es/ecma262/#sec-set-objects
	collection$2('Set', function (init) {
	  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
	}, collectionStrong);

	var uncurryThis$z = functionUncurryThis;

	// eslint-disable-next-line es/no-set -- safe
	var SetPrototype$1 = Set.prototype;

	var setHelpers = {
	  // eslint-disable-next-line es/no-set -- safe
	  Set: Set,
	  add: uncurryThis$z(SetPrototype$1.add),
	  has: uncurryThis$z(SetPrototype$1.has),
	  remove: uncurryThis$z(SetPrototype$1['delete']),
	  proto: SetPrototype$1
	};

	var has$5 = setHelpers.has;

	// Perform ? RequireInternalSlot(M, [[SetData]])
	var aSet$7 = function (it) {
	  has$5(it);
	  return it;
	};

	var call$n = functionCall;

	var iterateSimple$7 = function (record, fn, ITERATOR_INSTEAD_OF_RECORD) {
	  var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
	  var next = record.next;
	  var step, result;
	  while (!(step = call$n(next, iterator)).done) {
	    result = fn(step.value);
	    if (result !== undefined) return result;
	  }
	};

	var uncurryThis$y = functionUncurryThis;
	var iterateSimple$6 = iterateSimple$7;
	var SetHelpers$6 = setHelpers;

	var Set$4 = SetHelpers$6.Set;
	var SetPrototype = SetHelpers$6.proto;
	var forEach$4 = uncurryThis$y(SetPrototype.forEach);
	var keys = uncurryThis$y(SetPrototype.keys);
	var next = keys(new Set$4()).next;

	var setIterate$1 = function (set, fn, interruptible) {
	  return interruptible ? iterateSimple$6({ iterator: keys(set), next: next }, fn) : forEach$4(set, fn);
	};

	var SetHelpers$5 = setHelpers;
	var iterate$9 = setIterate$1;

	var Set$3 = SetHelpers$5.Set;
	var add$3 = SetHelpers$5.add;

	var setClone = function (set) {
	  var result = new Set$3();
	  iterate$9(set, function (it) {
	    add$3(result, it);
	  });
	  return result;
	};

	var uncurryThisAccessor$2 = functionUncurryThisAccessor;
	var SetHelpers$4 = setHelpers;

	var setSize = uncurryThisAccessor$2(SetHelpers$4.proto, 'size', 'get') || function (set) {
	  return set.size;
	};

	// `GetIteratorDirect(obj)` abstract operation
	// https://tc39.es/proposal-iterator-helpers/#sec-getiteratordirect
	var getIteratorDirect$c = function (obj) {
	  return {
	    iterator: obj,
	    next: obj.next,
	    done: false
	  };
	};

	var aCallable$c = aCallable$o;
	var anObject$l = anObject$y;
	var call$m = functionCall;
	var toIntegerOrInfinity$9 = toIntegerOrInfinity$d;
	var getIteratorDirect$b = getIteratorDirect$c;

	var INVALID_SIZE = 'Invalid size';
	var $RangeError$7 = RangeError;
	var $TypeError$9 = TypeError;
	var max$2 = Math.max;

	var SetRecord = function (set, intSize) {
	  this.set = set;
	  this.size = max$2(intSize, 0);
	  this.has = aCallable$c(set.has);
	  this.keys = aCallable$c(set.keys);
	};

	SetRecord.prototype = {
	  getIterator: function () {
	    return getIteratorDirect$b(anObject$l(call$m(this.keys, this.set)));
	  },
	  includes: function (it) {
	    return call$m(this.has, this.set, it);
	  }
	};

	// `GetSetRecord` abstract operation
	// https://tc39.es/proposal-set-methods/#sec-getsetrecord
	var getSetRecord$7 = function (obj) {
	  anObject$l(obj);
	  var numSize = +obj.size;
	  // NOTE: If size is undefined, then numSize will be NaN
	  // eslint-disable-next-line no-self-compare -- NaN check
	  if (numSize !== numSize) throw new $TypeError$9(INVALID_SIZE);
	  var intSize = toIntegerOrInfinity$9(numSize);
	  if (intSize < 0) throw new $RangeError$7(INVALID_SIZE);
	  return new SetRecord(obj, intSize);
	};

	var aSet$6 = aSet$7;
	var SetHelpers$3 = setHelpers;
	var clone$2 = setClone;
	var size$4 = setSize;
	var getSetRecord$6 = getSetRecord$7;
	var iterateSet$2 = setIterate$1;
	var iterateSimple$5 = iterateSimple$7;

	var has$4 = SetHelpers$3.has;
	var remove$1 = SetHelpers$3.remove;

	// `Set.prototype.difference` method
	// https://github.com/tc39/proposal-set-methods
	var setDifference = function difference(other) {
	  var O = aSet$6(this);
	  var otherRec = getSetRecord$6(other);
	  var result = clone$2(O);
	  if (size$4(O) <= otherRec.size) iterateSet$2(O, function (e) {
	    if (otherRec.includes(e)) remove$1(result, e);
	  });
	  else iterateSimple$5(otherRec.getIterator(), function (e) {
	    if (has$4(O, e)) remove$1(result, e);
	  });
	  return result;
	};

	var getBuiltIn$4 = getBuiltIn$e;

	var createSetLike = function (size) {
	  return {
	    size: size,
	    has: function () {
	      return false;
	    },
	    keys: function () {
	      return {
	        next: function () {
	          return { done: true };
	        }
	      };
	    }
	  };
	};

	var setMethodAcceptSetLike$7 = function (name) {
	  var Set = getBuiltIn$4('Set');
	  try {
	    new Set()[name](createSetLike(0));
	    try {
	      // late spec change, early WebKit ~ Safari 17.0 beta implementation does not pass it
	      // https://github.com/tc39/proposal-set-methods/pull/88
	      new Set()[name](createSetLike(-1));
	      return false;
	    } catch (error2) {
	      return true;
	    }
	  } catch (error) {
	    return false;
	  }
	};

	var $$G = _export;
	var difference = setDifference;
	var setMethodAcceptSetLike$6 = setMethodAcceptSetLike$7;

	// `Set.prototype.difference` method
	// https://github.com/tc39/proposal-set-methods
	$$G({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike$6('difference') }, {
	  difference: difference
	});

	var aSet$5 = aSet$7;
	var SetHelpers$2 = setHelpers;
	var size$3 = setSize;
	var getSetRecord$5 = getSetRecord$7;
	var iterateSet$1 = setIterate$1;
	var iterateSimple$4 = iterateSimple$7;

	var Set$2 = SetHelpers$2.Set;
	var add$2 = SetHelpers$2.add;
	var has$3 = SetHelpers$2.has;

	// `Set.prototype.intersection` method
	// https://github.com/tc39/proposal-set-methods
	var setIntersection = function intersection(other) {
	  var O = aSet$5(this);
	  var otherRec = getSetRecord$5(other);
	  var result = new Set$2();

	  if (size$3(O) > otherRec.size) {
	    iterateSimple$4(otherRec.getIterator(), function (e) {
	      if (has$3(O, e)) add$2(result, e);
	    });
	  } else {
	    iterateSet$1(O, function (e) {
	      if (otherRec.includes(e)) add$2(result, e);
	    });
	  }

	  return result;
	};

	var $$F = _export;
	var fails$l = fails$P;
	var intersection = setIntersection;
	var setMethodAcceptSetLike$5 = setMethodAcceptSetLike$7;

	var INCORRECT = !setMethodAcceptSetLike$5('intersection') || fails$l(function () {
	  // eslint-disable-next-line es/no-array-from, es/no-set -- testing
	  return String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2])))) !== '3,2';
	});

	// `Set.prototype.intersection` method
	// https://github.com/tc39/proposal-set-methods
	$$F({ target: 'Set', proto: true, real: true, forced: INCORRECT }, {
	  intersection: intersection
	});

	var aSet$4 = aSet$7;
	var has$2 = setHelpers.has;
	var size$2 = setSize;
	var getSetRecord$4 = getSetRecord$7;
	var iterateSet = setIterate$1;
	var iterateSimple$3 = iterateSimple$7;
	var iteratorClose$3 = iteratorClose$6;

	// `Set.prototype.isDisjointFrom` method
	// https://tc39.github.io/proposal-set-methods/#Set.prototype.isDisjointFrom
	var setIsDisjointFrom = function isDisjointFrom(other) {
	  var O = aSet$4(this);
	  var otherRec = getSetRecord$4(other);
	  if (size$2(O) <= otherRec.size) return iterateSet(O, function (e) {
	    if (otherRec.includes(e)) return false;
	  }, true) !== false;
	  var iterator = otherRec.getIterator();
	  return iterateSimple$3(iterator, function (e) {
	    if (has$2(O, e)) return iteratorClose$3(iterator, 'normal', false);
	  }) !== false;
	};

	var $$E = _export;
	var isDisjointFrom = setIsDisjointFrom;
	var setMethodAcceptSetLike$4 = setMethodAcceptSetLike$7;

	// `Set.prototype.isDisjointFrom` method
	// https://github.com/tc39/proposal-set-methods
	$$E({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike$4('isDisjointFrom') }, {
	  isDisjointFrom: isDisjointFrom
	});

	var aSet$3 = aSet$7;
	var size$1 = setSize;
	var iterate$8 = setIterate$1;
	var getSetRecord$3 = getSetRecord$7;

	// `Set.prototype.isSubsetOf` method
	// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSubsetOf
	var setIsSubsetOf = function isSubsetOf(other) {
	  var O = aSet$3(this);
	  var otherRec = getSetRecord$3(other);
	  if (size$1(O) > otherRec.size) return false;
	  return iterate$8(O, function (e) {
	    if (!otherRec.includes(e)) return false;
	  }, true) !== false;
	};

	var $$D = _export;
	var isSubsetOf = setIsSubsetOf;
	var setMethodAcceptSetLike$3 = setMethodAcceptSetLike$7;

	// `Set.prototype.isSubsetOf` method
	// https://github.com/tc39/proposal-set-methods
	$$D({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike$3('isSubsetOf') }, {
	  isSubsetOf: isSubsetOf
	});

	var aSet$2 = aSet$7;
	var has$1 = setHelpers.has;
	var size = setSize;
	var getSetRecord$2 = getSetRecord$7;
	var iterateSimple$2 = iterateSimple$7;
	var iteratorClose$2 = iteratorClose$6;

	// `Set.prototype.isSupersetOf` method
	// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSupersetOf
	var setIsSupersetOf = function isSupersetOf(other) {
	  var O = aSet$2(this);
	  var otherRec = getSetRecord$2(other);
	  if (size(O) < otherRec.size) return false;
	  var iterator = otherRec.getIterator();
	  return iterateSimple$2(iterator, function (e) {
	    if (!has$1(O, e)) return iteratorClose$2(iterator, 'normal', false);
	  }) !== false;
	};

	var $$C = _export;
	var isSupersetOf = setIsSupersetOf;
	var setMethodAcceptSetLike$2 = setMethodAcceptSetLike$7;

	// `Set.prototype.isSupersetOf` method
	// https://github.com/tc39/proposal-set-methods
	$$C({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike$2('isSupersetOf') }, {
	  isSupersetOf: isSupersetOf
	});

	var aSet$1 = aSet$7;
	var SetHelpers$1 = setHelpers;
	var clone$1 = setClone;
	var getSetRecord$1 = getSetRecord$7;
	var iterateSimple$1 = iterateSimple$7;

	var add$1 = SetHelpers$1.add;
	var has = SetHelpers$1.has;
	var remove = SetHelpers$1.remove;

	// `Set.prototype.symmetricDifference` method
	// https://github.com/tc39/proposal-set-methods
	var setSymmetricDifference = function symmetricDifference(other) {
	  var O = aSet$1(this);
	  var keysIter = getSetRecord$1(other).getIterator();
	  var result = clone$1(O);
	  iterateSimple$1(keysIter, function (e) {
	    if (has(O, e)) remove(result, e);
	    else add$1(result, e);
	  });
	  return result;
	};

	var $$B = _export;
	var symmetricDifference = setSymmetricDifference;
	var setMethodAcceptSetLike$1 = setMethodAcceptSetLike$7;

	// `Set.prototype.symmetricDifference` method
	// https://github.com/tc39/proposal-set-methods
	$$B({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike$1('symmetricDifference') }, {
	  symmetricDifference: symmetricDifference
	});

	var aSet = aSet$7;
	var add = setHelpers.add;
	var clone = setClone;
	var getSetRecord = getSetRecord$7;
	var iterateSimple = iterateSimple$7;

	// `Set.prototype.union` method
	// https://github.com/tc39/proposal-set-methods
	var setUnion = function union(other) {
	  var O = aSet(this);
	  var keysIter = getSetRecord(other).getIterator();
	  var result = clone(O);
	  iterateSimple(keysIter, function (it) {
	    add(result, it);
	  });
	  return result;
	};

	var $$A = _export;
	var union = setUnion;
	var setMethodAcceptSetLike = setMethodAcceptSetLike$7;

	// `Set.prototype.union` method
	// https://github.com/tc39/proposal-set-methods
	$$A({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('union') }, {
	  union: union
	});

	var isRegExp$2 = isRegexp;

	var $TypeError$8 = TypeError;

	var notARegexp = function (it) {
	  if (isRegExp$2(it)) {
	    throw new $TypeError$8("The method doesn't accept regular expressions");
	  } return it;
	};

	var wellKnownSymbol$c = wellKnownSymbol$w;

	var MATCH = wellKnownSymbol$c('match');

	var correctIsRegexpLogic = function (METHOD_NAME) {
	  var regexp = /./;
	  try {
	    '/./'[METHOD_NAME](regexp);
	  } catch (error1) {
	    try {
	      regexp[MATCH] = false;
	      return '/./'[METHOD_NAME](regexp);
	    } catch (error2) { /* empty */ }
	  } return false;
	};

	var $$z = _export;
	var uncurryThis$x = functionUncurryThisClause;
	var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
	var toLength$8 = toLength$a;
	var toString$e = toString$m;
	var notARegExp$2 = notARegexp;
	var requireObjectCoercible$a = requireObjectCoercible$e;
	var correctIsRegExpLogic$2 = correctIsRegexpLogic;

	var slice$5 = uncurryThis$x(''.slice);
	var min$5 = Math.min;

	var CORRECT_IS_REGEXP_LOGIC$1 = correctIsRegExpLogic$2('endsWith');
	// https://github.com/zloirock/core-js/pull/702
	var MDN_POLYFILL_BUG$1 = !CORRECT_IS_REGEXP_LOGIC$1 && !!function () {
	  var descriptor = getOwnPropertyDescriptor$2(String.prototype, 'endsWith');
	  return descriptor && !descriptor.writable;
	}();

	// `String.prototype.endsWith` method
	// https://tc39.es/ecma262/#sec-string.prototype.endswith
	$$z({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG$1 && !CORRECT_IS_REGEXP_LOGIC$1 }, {
	  endsWith: function endsWith(searchString /* , endPosition = @length */) {
	    var that = toString$e(requireObjectCoercible$a(this));
	    notARegExp$2(searchString);
	    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
	    var len = that.length;
	    var end = endPosition === undefined ? len : min$5(toLength$8(endPosition), len);
	    var search = toString$e(searchString);
	    return slice$5(that, end - search.length, end) === search;
	  }
	});

	var $$y = _export;
	var uncurryThis$w = functionUncurryThis;
	var notARegExp$1 = notARegexp;
	var requireObjectCoercible$9 = requireObjectCoercible$e;
	var toString$d = toString$m;
	var correctIsRegExpLogic$1 = correctIsRegexpLogic;

	var stringIndexOf$2 = uncurryThis$w(''.indexOf);

	// `String.prototype.includes` method
	// https://tc39.es/ecma262/#sec-string.prototype.includes
	$$y({ target: 'String', proto: true, forced: !correctIsRegExpLogic$1('includes') }, {
	  includes: function includes(searchString /* , position = 0 */) {
	    return !!~stringIndexOf$2(
	      toString$d(requireObjectCoercible$9(this)),
	      toString$d(notARegExp$1(searchString)),
	      arguments.length > 1 ? arguments[1] : undefined
	    );
	  }
	});

	// TODO: Remove from `core-js@4` since it's moved to entry points

	var call$l = functionCall;
	var defineBuiltIn$6 = defineBuiltIn$f;
	var regexpExec$1 = regexpExec$2;
	var fails$k = fails$P;
	var wellKnownSymbol$b = wellKnownSymbol$w;
	var createNonEnumerableProperty$7 = createNonEnumerableProperty$f;

	var SPECIES = wellKnownSymbol$b('species');
	var RegExpPrototype$1 = RegExp.prototype;

	var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
	  var SYMBOL = wellKnownSymbol$b(KEY);

	  var DELEGATES_TO_SYMBOL = !fails$k(function () {
	    // String methods call symbol-named RegExp methods
	    var O = {};
	    O[SYMBOL] = function () { return 7; };
	    return ''[KEY](O) !== 7;
	  });

	  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$k(function () {
	    // Symbol-named RegExp methods call .exec
	    var execCalled = false;
	    var re = /a/;

	    if (KEY === 'split') {
	      // We can't use real regex here since it causes deoptimization
	      // and serious performance degradation in V8
	      // https://github.com/zloirock/core-js/issues/306
	      re = {};
	      // RegExp[@@split] doesn't call the regex's exec method, but first creates
	      // a new one. We need to return the patched regex when creating the new one.
	      re.constructor = {};
	      re.constructor[SPECIES] = function () { return re; };
	      re.flags = '';
	      re[SYMBOL] = /./[SYMBOL];
	    }

	    re.exec = function () {
	      execCalled = true;
	      return null;
	    };

	    re[SYMBOL]('');
	    return !execCalled;
	  });

	  if (
	    !DELEGATES_TO_SYMBOL ||
	    !DELEGATES_TO_EXEC ||
	    FORCED
	  ) {
	    var nativeRegExpMethod = /./[SYMBOL];
	    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
	      var $exec = regexp.exec;
	      if ($exec === regexpExec$1 || $exec === RegExpPrototype$1.exec) {
	        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
	          // The native String method already delegates to @@method (this
	          // polyfilled function), leasing to infinite recursion.
	          // We avoid it by directly calling the native @@method method.
	          return { done: true, value: call$l(nativeRegExpMethod, regexp, str, arg2) };
	        }
	        return { done: true, value: call$l(nativeMethod, str, regexp, arg2) };
	      }
	      return { done: false };
	    });

	    defineBuiltIn$6(String.prototype, KEY, methods[0]);
	    defineBuiltIn$6(RegExpPrototype$1, SYMBOL, methods[1]);
	  }

	  if (SHAM) createNonEnumerableProperty$7(RegExpPrototype$1[SYMBOL], 'sham', true);
	};

	var uncurryThis$v = functionUncurryThis;
	var toIntegerOrInfinity$8 = toIntegerOrInfinity$d;
	var toString$c = toString$m;
	var requireObjectCoercible$8 = requireObjectCoercible$e;

	var charAt$5 = uncurryThis$v(''.charAt);
	var charCodeAt$1 = uncurryThis$v(''.charCodeAt);
	var stringSlice$7 = uncurryThis$v(''.slice);

	var createMethod$3 = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = toString$c(requireObjectCoercible$8($this));
	    var position = toIntegerOrInfinity$8(pos);
	    var size = S.length;
	    var first, second;
	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
	    first = charCodeAt$1(S, position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size
	      || (second = charCodeAt$1(S, position + 1)) < 0xDC00 || second > 0xDFFF
	        ? CONVERT_TO_STRING
	          ? charAt$5(S, position)
	          : first
	        : CONVERT_TO_STRING
	          ? stringSlice$7(S, position, position + 2)
	          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
	  };
	};

	var stringMultibyte = {
	  // `String.prototype.codePointAt` method
	  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
	  codeAt: createMethod$3(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod$3(true)
	};

	var charAt$4 = stringMultibyte.charAt;

	// `AdvanceStringIndex` abstract operation
	// https://tc39.es/ecma262/#sec-advancestringindex
	var advanceStringIndex$4 = function (S, index, unicode) {
	  return index + (unicode ? charAt$4(S, index).length : 1);
	};

	var call$k = functionCall;
	var anObject$k = anObject$y;
	var isCallable$8 = isCallable$y;
	var classof$8 = classofRaw$2;
	var regexpExec = regexpExec$2;

	var $TypeError$7 = TypeError;

	// `RegExpExec` abstract operation
	// https://tc39.es/ecma262/#sec-regexpexec
	var regexpExecAbstract = function (R, S) {
	  var exec = R.exec;
	  if (isCallable$8(exec)) {
	    var result = call$k(exec, R, S);
	    if (result !== null) anObject$k(result);
	    return result;
	  }
	  if (classof$8(R) === 'RegExp') return call$k(regexpExec, R, S);
	  throw new $TypeError$7('RegExp#exec called on incompatible receiver');
	};

	var call$j = functionCall;
	var fixRegExpWellKnownSymbolLogic$3 = fixRegexpWellKnownSymbolLogic;
	var anObject$j = anObject$y;
	var isNullOrUndefined$7 = isNullOrUndefined$e;
	var toLength$7 = toLength$a;
	var toString$b = toString$m;
	var requireObjectCoercible$7 = requireObjectCoercible$e;
	var getMethod$6 = getMethod$a;
	var advanceStringIndex$3 = advanceStringIndex$4;
	var regExpExec$4 = regexpExecAbstract;

	// @@match logic
	fixRegExpWellKnownSymbolLogic$3('match', function (MATCH, nativeMatch, maybeCallNative) {
	  return [
	    // `String.prototype.match` method
	    // https://tc39.es/ecma262/#sec-string.prototype.match
	    function match(regexp) {
	      var O = requireObjectCoercible$7(this);
	      var matcher = isNullOrUndefined$7(regexp) ? undefined : getMethod$6(regexp, MATCH);
	      return matcher ? call$j(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$b(O));
	    },
	    // `RegExp.prototype[@@match]` method
	    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
	    function (string) {
	      var rx = anObject$j(this);
	      var S = toString$b(string);
	      var res = maybeCallNative(nativeMatch, rx, S);

	      if (res.done) return res.value;

	      if (!rx.global) return regExpExec$4(rx, S);

	      var fullUnicode = rx.unicode;
	      rx.lastIndex = 0;
	      var A = [];
	      var n = 0;
	      var result;
	      while ((result = regExpExec$4(rx, S)) !== null) {
	        var matchStr = toString$b(result[0]);
	        A[n] = matchStr;
	        if (matchStr === '') rx.lastIndex = advanceStringIndex$3(S, toLength$7(rx.lastIndex), fullUnicode);
	        n++;
	      }
	      return n === 0 ? null : A;
	    }
	  ];
	});

	var uncurryThis$u = functionUncurryThis;
	var toObject$6 = toObject$h;

	var floor$4 = Math.floor;
	var charAt$3 = uncurryThis$u(''.charAt);
	var replace$4 = uncurryThis$u(''.replace);
	var stringSlice$6 = uncurryThis$u(''.slice);
	// eslint-disable-next-line redos/no-vulnerable -- safe
	var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
	var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

	// `GetSubstitution` abstract operation
	// https://tc39.es/ecma262/#sec-getsubstitution
	var getSubstitution$2 = function (matched, str, position, captures, namedCaptures, replacement) {
	  var tailPos = position + matched.length;
	  var m = captures.length;
	  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
	  if (namedCaptures !== undefined) {
	    namedCaptures = toObject$6(namedCaptures);
	    symbols = SUBSTITUTION_SYMBOLS;
	  }
	  return replace$4(replacement, symbols, function (match, ch) {
	    var capture;
	    switch (charAt$3(ch, 0)) {
	      case '$': return '$';
	      case '&': return matched;
	      case '`': return stringSlice$6(str, 0, position);
	      case "'": return stringSlice$6(str, tailPos);
	      case '<':
	        capture = namedCaptures[stringSlice$6(ch, 1, -1)];
	        break;
	      default: // \d\d?
	        var n = +ch;
	        if (n === 0) return match;
	        if (n > m) {
	          var f = floor$4(n / 10);
	          if (f === 0) return match;
	          if (f <= m) return captures[f - 1] === undefined ? charAt$3(ch, 1) : captures[f - 1] + charAt$3(ch, 1);
	          return match;
	        }
	        capture = captures[n - 1];
	    }
	    return capture === undefined ? '' : capture;
	  });
	};

	var apply$2 = functionApply;
	var call$i = functionCall;
	var uncurryThis$t = functionUncurryThis;
	var fixRegExpWellKnownSymbolLogic$2 = fixRegexpWellKnownSymbolLogic;
	var fails$j = fails$P;
	var anObject$i = anObject$y;
	var isCallable$7 = isCallable$y;
	var isNullOrUndefined$6 = isNullOrUndefined$e;
	var toIntegerOrInfinity$7 = toIntegerOrInfinity$d;
	var toLength$6 = toLength$a;
	var toString$a = toString$m;
	var requireObjectCoercible$6 = requireObjectCoercible$e;
	var advanceStringIndex$2 = advanceStringIndex$4;
	var getMethod$5 = getMethod$a;
	var getSubstitution$1 = getSubstitution$2;
	var regExpExec$3 = regexpExecAbstract;
	var wellKnownSymbol$a = wellKnownSymbol$w;

	var REPLACE$1 = wellKnownSymbol$a('replace');
	var max$1 = Math.max;
	var min$4 = Math.min;
	var concat$1 = uncurryThis$t([].concat);
	var push$a = uncurryThis$t([].push);
	var stringIndexOf$1 = uncurryThis$t(''.indexOf);
	var stringSlice$5 = uncurryThis$t(''.slice);

	var maybeToString = function (it) {
	  return it === undefined ? it : String(it);
	};

	// IE <= 11 replaces $0 with the whole match, as if it was $&
	// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
	var REPLACE_KEEPS_$0 = (function () {
	  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
	  return 'a'.replace(/./, '$0') === '$0';
	})();

	// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
	var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
	  if (/./[REPLACE$1]) {
	    return /./[REPLACE$1]('a', '$0') === '';
	  }
	  return false;
	})();

	var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$j(function () {
	  var re = /./;
	  re.exec = function () {
	    var result = [];
	    result.groups = { a: '7' };
	    return result;
	  };
	  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
	  return ''.replace(re, '$<a>') !== '7';
	});

	// @@replace logic
	fixRegExpWellKnownSymbolLogic$2('replace', function (_, nativeReplace, maybeCallNative) {
	  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

	  return [
	    // `String.prototype.replace` method
	    // https://tc39.es/ecma262/#sec-string.prototype.replace
	    function replace(searchValue, replaceValue) {
	      var O = requireObjectCoercible$6(this);
	      var replacer = isNullOrUndefined$6(searchValue) ? undefined : getMethod$5(searchValue, REPLACE$1);
	      return replacer
	        ? call$i(replacer, searchValue, O, replaceValue)
	        : call$i(nativeReplace, toString$a(O), searchValue, replaceValue);
	    },
	    // `RegExp.prototype[@@replace]` method
	    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
	    function (string, replaceValue) {
	      var rx = anObject$i(this);
	      var S = toString$a(string);

	      if (
	        typeof replaceValue == 'string' &&
	        stringIndexOf$1(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
	        stringIndexOf$1(replaceValue, '$<') === -1
	      ) {
	        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
	        if (res.done) return res.value;
	      }

	      var functionalReplace = isCallable$7(replaceValue);
	      if (!functionalReplace) replaceValue = toString$a(replaceValue);

	      var global = rx.global;
	      var fullUnicode;
	      if (global) {
	        fullUnicode = rx.unicode;
	        rx.lastIndex = 0;
	      }

	      var results = [];
	      var result;
	      while (true) {
	        result = regExpExec$3(rx, S);
	        if (result === null) break;

	        push$a(results, result);
	        if (!global) break;

	        var matchStr = toString$a(result[0]);
	        if (matchStr === '') rx.lastIndex = advanceStringIndex$2(S, toLength$6(rx.lastIndex), fullUnicode);
	      }

	      var accumulatedResult = '';
	      var nextSourcePosition = 0;
	      for (var i = 0; i < results.length; i++) {
	        result = results[i];

	        var matched = toString$a(result[0]);
	        var position = max$1(min$4(toIntegerOrInfinity$7(result.index), S.length), 0);
	        var captures = [];
	        var replacement;
	        // NOTE: This is equivalent to
	        //   captures = result.slice(1).map(maybeToString)
	        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
	        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
	        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
	        for (var j = 1; j < result.length; j++) push$a(captures, maybeToString(result[j]));
	        var namedCaptures = result.groups;
	        if (functionalReplace) {
	          var replacerArgs = concat$1([matched], captures, position, S);
	          if (namedCaptures !== undefined) push$a(replacerArgs, namedCaptures);
	          replacement = toString$a(apply$2(replaceValue, undefined, replacerArgs));
	        } else {
	          replacement = getSubstitution$1(matched, S, position, captures, namedCaptures, replaceValue);
	        }
	        if (position >= nextSourcePosition) {
	          accumulatedResult += stringSlice$5(S, nextSourcePosition, position) + replacement;
	          nextSourcePosition = position + matched.length;
	        }
	      }

	      return accumulatedResult + stringSlice$5(S, nextSourcePosition);
	    }
	  ];
	}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

	// `SameValue` abstract operation
	// https://tc39.es/ecma262/#sec-samevalue
	// eslint-disable-next-line es/no-object-is -- safe
	var sameValue$1 = Object.is || function is(x, y) {
	  // eslint-disable-next-line no-self-compare -- NaN check
	  return x === y ? x !== 0 || 1 / x === 1 / y : x !== x && y !== y;
	};

	var call$h = functionCall;
	var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
	var anObject$h = anObject$y;
	var isNullOrUndefined$5 = isNullOrUndefined$e;
	var requireObjectCoercible$5 = requireObjectCoercible$e;
	var sameValue = sameValue$1;
	var toString$9 = toString$m;
	var getMethod$4 = getMethod$a;
	var regExpExec$2 = regexpExecAbstract;

	// @@search logic
	fixRegExpWellKnownSymbolLogic$1('search', function (SEARCH, nativeSearch, maybeCallNative) {
	  return [
	    // `String.prototype.search` method
	    // https://tc39.es/ecma262/#sec-string.prototype.search
	    function search(regexp) {
	      var O = requireObjectCoercible$5(this);
	      var searcher = isNullOrUndefined$5(regexp) ? undefined : getMethod$4(regexp, SEARCH);
	      return searcher ? call$h(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString$9(O));
	    },
	    // `RegExp.prototype[@@search]` method
	    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
	    function (string) {
	      var rx = anObject$h(this);
	      var S = toString$9(string);
	      var res = maybeCallNative(nativeSearch, rx, S);

	      if (res.done) return res.value;

	      var previousLastIndex = rx.lastIndex;
	      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
	      var result = regExpExec$2(rx, S);
	      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
	      return result === null ? -1 : result.index;
	    }
	  ];
	});

	var call$g = functionCall;
	var uncurryThis$s = functionUncurryThis;
	var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
	var anObject$g = anObject$y;
	var isNullOrUndefined$4 = isNullOrUndefined$e;
	var requireObjectCoercible$4 = requireObjectCoercible$e;
	var speciesConstructor$1 = speciesConstructor$3;
	var advanceStringIndex$1 = advanceStringIndex$4;
	var toLength$5 = toLength$a;
	var toString$8 = toString$m;
	var getMethod$3 = getMethod$a;
	var regExpExec$1 = regexpExecAbstract;
	var stickyHelpers = regexpStickyHelpers;
	var fails$i = fails$P;

	var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
	var MAX_UINT32 = 0xFFFFFFFF;
	var min$3 = Math.min;
	var push$9 = uncurryThis$s([].push);
	var stringSlice$4 = uncurryThis$s(''.slice);

	// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
	// Weex JS has frozen built-in prototypes, so use try / catch wrapper
	var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$i(function () {
	  // eslint-disable-next-line regexp/no-empty-group -- required for testing
	  var re = /(?:)/;
	  var originalExec = re.exec;
	  re.exec = function () { return originalExec.apply(this, arguments); };
	  var result = 'ab'.split(re);
	  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
	});

	var BUGGY = 'abbc'.split(/(b)*/)[1] === 'c' ||
	  // eslint-disable-next-line regexp/no-empty-group -- required for testing
	  'test'.split(/(?:)/, -1).length !== 4 ||
	  'ab'.split(/(?:ab)*/).length !== 2 ||
	  '.'.split(/(.?)(.?)/).length !== 4 ||
	  // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
	  '.'.split(/()()/).length > 1 ||
	  ''.split(/.?/).length;

	// @@split logic
	fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
	  var internalSplit = '0'.split(undefined, 0).length ? function (separator, limit) {
	    return separator === undefined && limit === 0 ? [] : call$g(nativeSplit, this, separator, limit);
	  } : nativeSplit;

	  return [
	    // `String.prototype.split` method
	    // https://tc39.es/ecma262/#sec-string.prototype.split
	    function split(separator, limit) {
	      var O = requireObjectCoercible$4(this);
	      var splitter = isNullOrUndefined$4(separator) ? undefined : getMethod$3(separator, SPLIT);
	      return splitter
	        ? call$g(splitter, separator, O, limit)
	        : call$g(internalSplit, toString$8(O), separator, limit);
	    },
	    // `RegExp.prototype[@@split]` method
	    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
	    //
	    // NOTE: This cannot be properly polyfilled in engines that don't support
	    // the 'y' flag.
	    function (string, limit) {
	      var rx = anObject$g(this);
	      var S = toString$8(string);

	      if (!BUGGY) {
	        var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
	        if (res.done) return res.value;
	      }

	      var C = speciesConstructor$1(rx, RegExp);
	      var unicodeMatching = rx.unicode;
	      var flags = (rx.ignoreCase ? 'i' : '') +
	                  (rx.multiline ? 'm' : '') +
	                  (rx.unicode ? 'u' : '') +
	                  (UNSUPPORTED_Y ? 'g' : 'y');
	      // ^(? + rx + ) is needed, in combination with some S slicing, to
	      // simulate the 'y' flag.
	      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
	      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
	      if (lim === 0) return [];
	      if (S.length === 0) return regExpExec$1(splitter, S) === null ? [S] : [];
	      var p = 0;
	      var q = 0;
	      var A = [];
	      while (q < S.length) {
	        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
	        var z = regExpExec$1(splitter, UNSUPPORTED_Y ? stringSlice$4(S, q) : S);
	        var e;
	        if (
	          z === null ||
	          (e = min$3(toLength$5(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
	        ) {
	          q = advanceStringIndex$1(S, q, unicodeMatching);
	        } else {
	          push$9(A, stringSlice$4(S, p, q));
	          if (A.length === lim) return A;
	          for (var i = 1; i <= z.length - 1; i++) {
	            push$9(A, z[i]);
	            if (A.length === lim) return A;
	          }
	          q = p = e;
	        }
	      }
	      push$9(A, stringSlice$4(S, p));
	      return A;
	    }
	  ];
	}, BUGGY || !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

	var $$x = _export;
	var uncurryThis$r = functionUncurryThisClause;
	var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
	var toLength$4 = toLength$a;
	var toString$7 = toString$m;
	var notARegExp = notARegexp;
	var requireObjectCoercible$3 = requireObjectCoercible$e;
	var correctIsRegExpLogic = correctIsRegexpLogic;

	var stringSlice$3 = uncurryThis$r(''.slice);
	var min$2 = Math.min;

	var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
	// https://github.com/zloirock/core-js/pull/702
	var MDN_POLYFILL_BUG = !CORRECT_IS_REGEXP_LOGIC && !!function () {
	  var descriptor = getOwnPropertyDescriptor$1(String.prototype, 'startsWith');
	  return descriptor && !descriptor.writable;
	}();

	// `String.prototype.startsWith` method
	// https://tc39.es/ecma262/#sec-string.prototype.startswith
	$$x({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
	  startsWith: function startsWith(searchString /* , position = 0 */) {
	    var that = toString$7(requireObjectCoercible$3(this));
	    notARegExp(searchString);
	    var index = toLength$4(min$2(arguments.length > 1 ? arguments[1] : undefined, that.length));
	    var search = toString$7(searchString);
	    return stringSlice$3(that, index, index + search.length) === search;
	  }
	});

	// a string of all valid unicode whitespaces
	var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
	  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

	var uncurryThis$q = functionUncurryThis;
	var requireObjectCoercible$2 = requireObjectCoercible$e;
	var toString$6 = toString$m;
	var whitespaces$1 = whitespaces$2;

	var replace$3 = uncurryThis$q(''.replace);
	var ltrim = RegExp('^[' + whitespaces$1 + ']+');
	var rtrim = RegExp('(^|[^' + whitespaces$1 + '])[' + whitespaces$1 + ']+$');

	// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
	var createMethod$2 = function (TYPE) {
	  return function ($this) {
	    var string = toString$6(requireObjectCoercible$2($this));
	    if (TYPE & 1) string = replace$3(string, ltrim, '');
	    if (TYPE & 2) string = replace$3(string, rtrim, '$1');
	    return string;
	  };
	};

	var stringTrim = {
	  // `String.prototype.{ trimLeft, trimStart }` methods
	  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
	  start: createMethod$2(1),
	  // `String.prototype.{ trimRight, trimEnd }` methods
	  // https://tc39.es/ecma262/#sec-string.prototype.trimend
	  end: createMethod$2(2),
	  // `String.prototype.trim` method
	  // https://tc39.es/ecma262/#sec-string.prototype.trim
	  trim: createMethod$2(3)
	};

	var PROPER_FUNCTION_NAME$1 = functionName.PROPER;
	var fails$h = fails$P;
	var whitespaces = whitespaces$2;

	var non = '\u200B\u0085\u180E';

	// check that a method works with the correct list
	// of whitespaces and has a correct name
	var stringTrimForced = function (METHOD_NAME) {
	  return fails$h(function () {
	    return !!whitespaces[METHOD_NAME]()
	      || non[METHOD_NAME]() !== non
	      || (PROPER_FUNCTION_NAME$1 && whitespaces[METHOD_NAME].name !== METHOD_NAME);
	  });
	};

	var $$w = _export;
	var $trim = stringTrim.trim;
	var forcedStringTrimMethod = stringTrimForced;

	// `String.prototype.trim` method
	// https://tc39.es/ecma262/#sec-string.prototype.trim
	$$w({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
	  trim: function trim() {
	    return $trim(this);
	  }
	});

	var uncurryThis$p = functionUncurryThis;
	var defineBuiltIns$4 = defineBuiltIns$6;
	var getWeakData = internalMetadataExports.getWeakData;
	var anInstance$6 = anInstance$a;
	var anObject$f = anObject$y;
	var isNullOrUndefined$3 = isNullOrUndefined$e;
	var isObject$7 = isObject$r;
	var iterate$7 = iterate$f;
	var ArrayIterationModule = arrayIteration;
	var hasOwn$a = hasOwnProperty_1;
	var InternalStateModule$8 = internalState;

	var setInternalState$7 = InternalStateModule$8.set;
	var internalStateGetterFor = InternalStateModule$8.getterFor;
	var find$1 = ArrayIterationModule.find;
	var findIndex = ArrayIterationModule.findIndex;
	var splice$1 = uncurryThis$p([].splice);
	var id = 0;

	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function (state) {
	  return state.frozen || (state.frozen = new UncaughtFrozenStore());
	};

	var UncaughtFrozenStore = function () {
	  this.entries = [];
	};

	var findUncaughtFrozen = function (store, key) {
	  return find$1(store.entries, function (it) {
	    return it[0] === key;
	  });
	};

	UncaughtFrozenStore.prototype = {
	  get: function (key) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) return entry[1];
	  },
	  has: function (key) {
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function (key, value) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) entry[1] = value;
	    else this.entries.push([key, value]);
	  },
	  'delete': function (key) {
	    var index = findIndex(this.entries, function (it) {
	      return it[0] === key;
	    });
	    if (~index) splice$1(this.entries, index, 1);
	    return !!~index;
	  }
	};

	var collectionWeak$2 = {
	  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
	    var Constructor = wrapper(function (that, iterable) {
	      anInstance$6(that, Prototype);
	      setInternalState$7(that, {
	        type: CONSTRUCTOR_NAME,
	        id: id++,
	        frozen: null
	      });
	      if (!isNullOrUndefined$3(iterable)) iterate$7(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
	    });

	    var Prototype = Constructor.prototype;

	    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

	    var define = function (that, key, value) {
	      var state = getInternalState(that);
	      var data = getWeakData(anObject$f(key), true);
	      if (data === true) uncaughtFrozenStore(state).set(key, value);
	      else data[state.id] = value;
	      return that;
	    };

	    defineBuiltIns$4(Prototype, {
	      // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
	      // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
	      // https://tc39.es/ecma262/#sec-weakset.prototype.delete
	      'delete': function (key) {
	        var state = getInternalState(this);
	        if (!isObject$7(key)) return false;
	        var data = getWeakData(key);
	        if (data === true) return uncaughtFrozenStore(state)['delete'](key);
	        return data && hasOwn$a(data, state.id) && delete data[state.id];
	      },
	      // `{ WeakMap, WeakSet }.prototype.has(key)` methods
	      // https://tc39.es/ecma262/#sec-weakmap.prototype.has
	      // https://tc39.es/ecma262/#sec-weakset.prototype.has
	      has: function has(key) {
	        var state = getInternalState(this);
	        if (!isObject$7(key)) return false;
	        var data = getWeakData(key);
	        if (data === true) return uncaughtFrozenStore(state).has(key);
	        return data && hasOwn$a(data, state.id);
	      }
	    });

	    defineBuiltIns$4(Prototype, IS_MAP ? {
	      // `WeakMap.prototype.get(key)` method
	      // https://tc39.es/ecma262/#sec-weakmap.prototype.get
	      get: function get(key) {
	        var state = getInternalState(this);
	        if (isObject$7(key)) {
	          var data = getWeakData(key);
	          if (data === true) return uncaughtFrozenStore(state).get(key);
	          if (data) return data[state.id];
	        }
	      },
	      // `WeakMap.prototype.set(key, value)` method
	      // https://tc39.es/ecma262/#sec-weakmap.prototype.set
	      set: function set(key, value) {
	        return define(this, key, value);
	      }
	    } : {
	      // `WeakSet.prototype.add(value)` method
	      // https://tc39.es/ecma262/#sec-weakset.prototype.add
	      add: function add(value) {
	        return define(this, value, true);
	      }
	    });

	    return Constructor;
	  }
	};

	var FREEZING = freezing;
	var globalThis$t = globalThis_1;
	var uncurryThis$o = functionUncurryThis;
	var defineBuiltIns$3 = defineBuiltIns$6;
	var InternalMetadataModule = internalMetadataExports;
	var collection$1 = collection$4;
	var collectionWeak$1 = collectionWeak$2;
	var isObject$6 = isObject$r;
	var enforceInternalState$2 = internalState.enforce;
	var fails$g = fails$P;
	var NATIVE_WEAK_MAP = weakMapBasicDetection;

	var $Object = Object;
	// eslint-disable-next-line es/no-array-isarray -- safe
	var isArray$2 = Array.isArray;
	// eslint-disable-next-line es/no-object-isextensible -- safe
	var isExtensible = $Object.isExtensible;
	// eslint-disable-next-line es/no-object-isfrozen -- safe
	var isFrozen = $Object.isFrozen;
	// eslint-disable-next-line es/no-object-issealed -- safe
	var isSealed = $Object.isSealed;
	// eslint-disable-next-line es/no-object-freeze -- safe
	var freeze = $Object.freeze;
	// eslint-disable-next-line es/no-object-seal -- safe
	var seal = $Object.seal;

	var IS_IE11 = !globalThis$t.ActiveXObject && 'ActiveXObject' in globalThis$t;
	var InternalWeakMap;

	var wrapper = function (init) {
	  return function WeakMap() {
	    return init(this, arguments.length ? arguments[0] : undefined);
	  };
	};

	// `WeakMap` constructor
	// https://tc39.es/ecma262/#sec-weakmap-constructor
	var $WeakMap = collection$1('WeakMap', wrapper, collectionWeak$1);
	var WeakMapPrototype = $WeakMap.prototype;
	var nativeSet = uncurryThis$o(WeakMapPrototype.set);

	// Chakra Edge bug: adding frozen arrays to WeakMap unfreeze them
	var hasMSEdgeFreezingBug = function () {
	  return FREEZING && fails$g(function () {
	    var frozenArray = freeze([]);
	    nativeSet(new $WeakMap(), frozenArray, 1);
	    return !isFrozen(frozenArray);
	  });
	};

	// IE11 WeakMap frozen keys fix
	// We can't use feature detection because it crash some old IE builds
	// https://github.com/zloirock/core-js/issues/485
	if (NATIVE_WEAK_MAP) if (IS_IE11) {
	  InternalWeakMap = collectionWeak$1.getConstructor(wrapper, 'WeakMap', true);
	  InternalMetadataModule.enable();
	  var nativeDelete = uncurryThis$o(WeakMapPrototype['delete']);
	  var nativeHas = uncurryThis$o(WeakMapPrototype.has);
	  var nativeGet = uncurryThis$o(WeakMapPrototype.get);
	  defineBuiltIns$3(WeakMapPrototype, {
	    'delete': function (key) {
	      if (isObject$6(key) && !isExtensible(key)) {
	        var state = enforceInternalState$2(this);
	        if (!state.frozen) state.frozen = new InternalWeakMap();
	        return nativeDelete(this, key) || state.frozen['delete'](key);
	      } return nativeDelete(this, key);
	    },
	    has: function has(key) {
	      if (isObject$6(key) && !isExtensible(key)) {
	        var state = enforceInternalState$2(this);
	        if (!state.frozen) state.frozen = new InternalWeakMap();
	        return nativeHas(this, key) || state.frozen.has(key);
	      } return nativeHas(this, key);
	    },
	    get: function get(key) {
	      if (isObject$6(key) && !isExtensible(key)) {
	        var state = enforceInternalState$2(this);
	        if (!state.frozen) state.frozen = new InternalWeakMap();
	        return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
	      } return nativeGet(this, key);
	    },
	    set: function set(key, value) {
	      if (isObject$6(key) && !isExtensible(key)) {
	        var state = enforceInternalState$2(this);
	        if (!state.frozen) state.frozen = new InternalWeakMap();
	        nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
	      } else nativeSet(this, key, value);
	      return this;
	    }
	  });
	// Chakra Edge frozen keys fix
	} else if (hasMSEdgeFreezingBug()) {
	  defineBuiltIns$3(WeakMapPrototype, {
	    set: function set(key, value) {
	      var arrayIntegrityLevel;
	      if (isArray$2(key)) {
	        if (isFrozen(key)) arrayIntegrityLevel = freeze;
	        else if (isSealed(key)) arrayIntegrityLevel = seal;
	      }
	      nativeSet(this, key, value);
	      if (arrayIntegrityLevel) arrayIntegrityLevel(key);
	      return this;
	    }
	  });
	}

	var collection = collection$4;
	var collectionWeak = collectionWeak$2;

	// `WeakSet` constructor
	// https://tc39.es/ecma262/#sec-weakset-constructor
	collection('WeakSet', function (init) {
	  return function WeakSet() { return init(this, arguments.length ? arguments[0] : undefined); };
	}, collectionWeak);

	var $$v = _export;
	var globalThis$s = globalThis_1;
	var anInstance$5 = anInstance$a;
	var anObject$e = anObject$y;
	var isCallable$6 = isCallable$y;
	var getPrototypeOf$2 = objectGetPrototypeOf$1;
	var defineBuiltInAccessor$8 = defineBuiltInAccessor$e;
	var createProperty$2 = createProperty$8;
	var fails$f = fails$P;
	var hasOwn$9 = hasOwnProperty_1;
	var wellKnownSymbol$9 = wellKnownSymbol$w;
	var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
	var DESCRIPTORS$e = descriptors;

	var CONSTRUCTOR = 'constructor';
	var ITERATOR$4 = 'Iterator';
	var TO_STRING_TAG$2 = wellKnownSymbol$9('toStringTag');

	var $TypeError$6 = TypeError;
	var NativeIterator = globalThis$s[ITERATOR$4];

	// FF56- have non-standard global helper `Iterator`
	var FORCED$1 = !isCallable$6(NativeIterator)
	  || NativeIterator.prototype !== IteratorPrototype$1
	  // FF44- non-standard `Iterator` passes previous tests
	  || !fails$f(function () { NativeIterator({}); });

	var IteratorConstructor = function Iterator() {
	  anInstance$5(this, IteratorPrototype$1);
	  if (getPrototypeOf$2(this) === IteratorPrototype$1) throw new $TypeError$6('Abstract class Iterator not directly constructable');
	};

	var defineIteratorPrototypeAccessor = function (key, value) {
	  if (DESCRIPTORS$e) {
	    defineBuiltInAccessor$8(IteratorPrototype$1, key, {
	      configurable: true,
	      get: function () {
	        return value;
	      },
	      set: function (replacement) {
	        anObject$e(this);
	        if (this === IteratorPrototype$1) throw new $TypeError$6("You can't redefine this property");
	        if (hasOwn$9(this, key)) this[key] = replacement;
	        else createProperty$2(this, key, replacement);
	      }
	    });
	  } else IteratorPrototype$1[key] = value;
	};

	if (!hasOwn$9(IteratorPrototype$1, TO_STRING_TAG$2)) defineIteratorPrototypeAccessor(TO_STRING_TAG$2, ITERATOR$4);

	if (FORCED$1 || !hasOwn$9(IteratorPrototype$1, CONSTRUCTOR) || IteratorPrototype$1[CONSTRUCTOR] === Object) {
	  defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor);
	}

	IteratorConstructor.prototype = IteratorPrototype$1;

	// `Iterator` constructor
	// https://github.com/tc39/proposal-iterator-helpers
	$$v({ global: true, constructor: true, forced: FORCED$1 }, {
	  Iterator: IteratorConstructor
	});

	var $$u = _export;
	var iterate$6 = iterate$f;
	var aCallable$b = aCallable$o;
	var anObject$d = anObject$y;
	var getIteratorDirect$a = getIteratorDirect$c;

	// `Iterator.prototype.every` method
	// https://github.com/tc39/proposal-iterator-helpers
	$$u({ target: 'Iterator', proto: true, real: true }, {
	  every: function every(predicate) {
	    anObject$d(this);
	    aCallable$b(predicate);
	    var record = getIteratorDirect$a(this);
	    var counter = 0;
	    return !iterate$6(record, function (value, stop) {
	      if (!predicate(value, counter++)) return stop();
	    }, { IS_RECORD: true, INTERRUPTED: true }).stopped;
	  }
	});

	var call$f = functionCall;
	var create$2 = objectCreate$1;
	var createNonEnumerableProperty$6 = createNonEnumerableProperty$f;
	var defineBuiltIns$2 = defineBuiltIns$6;
	var wellKnownSymbol$8 = wellKnownSymbol$w;
	var InternalStateModule$7 = internalState;
	var getMethod$2 = getMethod$a;
	var IteratorPrototype = iteratorsCore.IteratorPrototype;
	var createIterResultObject$3 = createIterResultObject$6;
	var iteratorClose$1 = iteratorClose$6;

	var TO_STRING_TAG$1 = wellKnownSymbol$8('toStringTag');
	var ITERATOR_HELPER = 'IteratorHelper';
	var WRAP_FOR_VALID_ITERATOR = 'WrapForValidIterator';
	var setInternalState$6 = InternalStateModule$7.set;

	var createIteratorProxyPrototype = function (IS_ITERATOR) {
	  var getInternalState = InternalStateModule$7.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER);

	  return defineBuiltIns$2(create$2(IteratorPrototype), {
	    next: function next() {
	      var state = getInternalState(this);
	      // for simplification:
	      //   for `%WrapForValidIteratorPrototype%.next` our `nextHandler` returns `IterResultObject`
	      //   for `%IteratorHelperPrototype%.next` - just a value
	      if (IS_ITERATOR) return state.nextHandler();
	      try {
	        var result = state.done ? undefined : state.nextHandler();
	        return createIterResultObject$3(result, state.done);
	      } catch (error) {
	        state.done = true;
	        throw error;
	      }
	    },
	    'return': function () {
	      var state = getInternalState(this);
	      var iterator = state.iterator;
	      state.done = true;
	      if (IS_ITERATOR) {
	        var returnMethod = getMethod$2(iterator, 'return');
	        return returnMethod ? call$f(returnMethod, iterator) : createIterResultObject$3(undefined, true);
	      }
	      if (state.inner) try {
	        iteratorClose$1(state.inner.iterator, 'normal');
	      } catch (error) {
	        return iteratorClose$1(iterator, 'throw', error);
	      }
	      iteratorClose$1(iterator, 'normal');
	      return createIterResultObject$3(undefined, true);
	    }
	  });
	};

	var WrapForValidIteratorPrototype = createIteratorProxyPrototype(true);
	var IteratorHelperPrototype = createIteratorProxyPrototype(false);

	createNonEnumerableProperty$6(IteratorHelperPrototype, TO_STRING_TAG$1, 'Iterator Helper');

	var iteratorCreateProxy = function (nextHandler, IS_ITERATOR) {
	  var IteratorProxy = function Iterator(record, state) {
	    if (state) {
	      state.iterator = record.iterator;
	      state.next = record.next;
	    } else state = record;
	    state.type = IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER;
	    state.nextHandler = nextHandler;
	    state.counter = 0;
	    state.done = false;
	    setInternalState$6(this, state);
	  };

	  IteratorProxy.prototype = IS_ITERATOR ? WrapForValidIteratorPrototype : IteratorHelperPrototype;

	  return IteratorProxy;
	};

	var $$t = _export;
	var call$e = functionCall;
	var aCallable$a = aCallable$o;
	var anObject$c = anObject$y;
	var getIteratorDirect$9 = getIteratorDirect$c;
	var createIteratorProxy$3 = iteratorCreateProxy;
	var callWithSafeIterationClosing$1 = callWithSafeIterationClosing$3;
	var IS_PURE$5 = isPure;

	var IteratorProxy$3 = createIteratorProxy$3(function () {
	  var iterator = this.iterator;
	  var predicate = this.predicate;
	  var next = this.next;
	  var result, done, value;
	  while (true) {
	    result = anObject$c(call$e(next, iterator));
	    done = this.done = !!result.done;
	    if (done) return;
	    value = result.value;
	    if (callWithSafeIterationClosing$1(iterator, predicate, [value, this.counter++], true)) return value;
	  }
	});

	// `Iterator.prototype.filter` method
	// https://github.com/tc39/proposal-iterator-helpers
	$$t({ target: 'Iterator', proto: true, real: true, forced: IS_PURE$5 }, {
	  filter: function filter(predicate) {
	    anObject$c(this);
	    aCallable$a(predicate);
	    return new IteratorProxy$3(getIteratorDirect$9(this), {
	      predicate: predicate
	    });
	  }
	});

	var $$s = _export;
	var iterate$5 = iterate$f;
	var aCallable$9 = aCallable$o;
	var anObject$b = anObject$y;
	var getIteratorDirect$8 = getIteratorDirect$c;

	// `Iterator.prototype.find` method
	// https://github.com/tc39/proposal-iterator-helpers
	$$s({ target: 'Iterator', proto: true, real: true }, {
	  find: function find(predicate) {
	    anObject$b(this);
	    aCallable$9(predicate);
	    var record = getIteratorDirect$8(this);
	    var counter = 0;
	    return iterate$5(record, function (value, stop) {
	      if (predicate(value, counter++)) return stop(value);
	    }, { IS_RECORD: true, INTERRUPTED: true }).result;
	  }
	});

	var $$r = _export;
	var iterate$4 = iterate$f;
	var aCallable$8 = aCallable$o;
	var anObject$a = anObject$y;
	var getIteratorDirect$7 = getIteratorDirect$c;

	// `Iterator.prototype.forEach` method
	// https://github.com/tc39/proposal-iterator-helpers
	$$r({ target: 'Iterator', proto: true, real: true }, {
	  forEach: function forEach(fn) {
	    anObject$a(this);
	    aCallable$8(fn);
	    var record = getIteratorDirect$7(this);
	    var counter = 0;
	    iterate$4(record, function (value) {
	      fn(value, counter++);
	    }, { IS_RECORD: true });
	  }
	});

	var call$d = functionCall;
	var aCallable$7 = aCallable$o;
	var anObject$9 = anObject$y;
	var getIteratorDirect$6 = getIteratorDirect$c;
	var createIteratorProxy$2 = iteratorCreateProxy;
	var callWithSafeIterationClosing = callWithSafeIterationClosing$3;

	var IteratorProxy$2 = createIteratorProxy$2(function () {
	  var iterator = this.iterator;
	  var result = anObject$9(call$d(this.next, iterator));
	  var done = this.done = !!result.done;
	  if (!done) return callWithSafeIterationClosing(iterator, this.mapper, [result.value, this.counter++], true);
	});

	// `Iterator.prototype.map` method
	// https://github.com/tc39/proposal-iterator-helpers
	var iteratorMap = function map(mapper) {
	  anObject$9(this);
	  aCallable$7(mapper);
	  return new IteratorProxy$2(getIteratorDirect$6(this), {
	    mapper: mapper
	  });
	};

	var $$q = _export;
	var map = iteratorMap;
	var IS_PURE$4 = isPure;

	// `Iterator.prototype.map` method
	// https://github.com/tc39/proposal-iterator-helpers
	$$q({ target: 'Iterator', proto: true, real: true, forced: IS_PURE$4 }, {
	  map: map
	});

	var $$p = _export;
	var iterate$3 = iterate$f;
	var aCallable$6 = aCallable$o;
	var anObject$8 = anObject$y;
	var getIteratorDirect$5 = getIteratorDirect$c;

	var $TypeError$5 = TypeError;

	// `Iterator.prototype.reduce` method
	// https://github.com/tc39/proposal-iterator-helpers
	$$p({ target: 'Iterator', proto: true, real: true }, {
	  reduce: function reduce(reducer /* , initialValue */) {
	    anObject$8(this);
	    aCallable$6(reducer);
	    var record = getIteratorDirect$5(this);
	    var noInitial = arguments.length < 2;
	    var accumulator = noInitial ? undefined : arguments[1];
	    var counter = 0;
	    iterate$3(record, function (value) {
	      if (noInitial) {
	        noInitial = false;
	        accumulator = value;
	      } else {
	        accumulator = reducer(accumulator, value, counter);
	      }
	      counter++;
	    }, { IS_RECORD: true });
	    if (noInitial) throw new $TypeError$5('Reduce of empty iterator with no initial value');
	    return accumulator;
	  }
	});

	var $$o = _export;
	var iterate$2 = iterate$f;
	var aCallable$5 = aCallable$o;
	var anObject$7 = anObject$y;
	var getIteratorDirect$4 = getIteratorDirect$c;

	// `Iterator.prototype.some` method
	// https://github.com/tc39/proposal-iterator-helpers
	$$o({ target: 'Iterator', proto: true, real: true }, {
	  some: function some(predicate) {
	    anObject$7(this);
	    aCallable$5(predicate);
	    var record = getIteratorDirect$4(this);
	    var counter = 0;
	    return iterate$2(record, function (value, stop) {
	      if (predicate(value, counter++)) return stop();
	    }, { IS_RECORD: true, INTERRUPTED: true }).stopped;
	  }
	});

	var uncurryThis$n = functionUncurryThis;
	var hasOwn$8 = hasOwnProperty_1;

	var $SyntaxError = SyntaxError;
	var $parseInt$1 = parseInt;
	var fromCharCode$3 = String.fromCharCode;
	var at$1 = uncurryThis$n(''.charAt);
	var slice$4 = uncurryThis$n(''.slice);
	var exec$4 = uncurryThis$n(/./.exec);

	var codePoints = {
	  '\\"': '"',
	  '\\\\': '\\',
	  '\\/': '/',
	  '\\b': '\b',
	  '\\f': '\f',
	  '\\n': '\n',
	  '\\r': '\r',
	  '\\t': '\t'
	};

	var IS_4_HEX_DIGITS = /^[\da-f]{4}$/i;
	// eslint-disable-next-line regexp/no-control-character -- safe
	var IS_C0_CONTROL_CODE = /^[\u0000-\u001F]$/;

	var parseJsonString = function (source, i) {
	  var unterminated = true;
	  var value = '';
	  while (i < source.length) {
	    var chr = at$1(source, i);
	    if (chr === '\\') {
	      var twoChars = slice$4(source, i, i + 2);
	      if (hasOwn$8(codePoints, twoChars)) {
	        value += codePoints[twoChars];
	        i += 2;
	      } else if (twoChars === '\\u') {
	        i += 2;
	        var fourHexDigits = slice$4(source, i, i + 4);
	        if (!exec$4(IS_4_HEX_DIGITS, fourHexDigits)) throw new $SyntaxError('Bad Unicode escape at: ' + i);
	        value += fromCharCode$3($parseInt$1(fourHexDigits, 16));
	        i += 4;
	      } else throw new $SyntaxError('Unknown escape sequence: "' + twoChars + '"');
	    } else if (chr === '"') {
	      unterminated = false;
	      i++;
	      break;
	    } else {
	      if (exec$4(IS_C0_CONTROL_CODE, chr)) throw new $SyntaxError('Bad control character in string literal at: ' + i);
	      value += chr;
	      i++;
	    }
	  }
	  if (unterminated) throw new $SyntaxError('Unterminated string at: ' + i);
	  return { value: value, end: i };
	};

	var $$n = _export;
	var DESCRIPTORS$d = descriptors;
	var globalThis$r = globalThis_1;
	var getBuiltIn$3 = getBuiltIn$e;
	var uncurryThis$m = functionUncurryThis;
	var call$c = functionCall;
	var isCallable$5 = isCallable$y;
	var isObject$5 = isObject$r;
	var isArray$1 = isArray$8;
	var hasOwn$7 = hasOwnProperty_1;
	var toString$5 = toString$m;
	var lengthOfArrayLike$d = lengthOfArrayLike$p;
	var createProperty$1 = createProperty$8;
	var fails$e = fails$P;
	var parseJSONString = parseJsonString;
	var NATIVE_SYMBOL = symbolConstructorDetection;

	var JSON$1 = globalThis$r.JSON;
	var Number$1 = globalThis$r.Number;
	var SyntaxError$1 = globalThis$r.SyntaxError;
	var nativeParse = JSON$1 && JSON$1.parse;
	var enumerableOwnProperties = getBuiltIn$3('Object', 'keys');
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var at = uncurryThis$m(''.charAt);
	var slice$3 = uncurryThis$m(''.slice);
	var exec$3 = uncurryThis$m(/./.exec);
	var push$8 = uncurryThis$m([].push);

	var IS_DIGIT = /^\d$/;
	var IS_NON_ZERO_DIGIT = /^[1-9]$/;
	var IS_NUMBER_START = /^[\d-]$/;
	var IS_WHITESPACE = /^[\t\n\r ]$/;

	var PRIMITIVE = 0;
	var OBJECT = 1;

	var $parse = function (source, reviver) {
	  source = toString$5(source);
	  var context = new Context(source, 0);
	  var root = context.parse();
	  var value = root.value;
	  var endIndex = context.skip(IS_WHITESPACE, root.end);
	  if (endIndex < source.length) {
	    throw new SyntaxError$1('Unexpected extra character: "' + at(source, endIndex) + '" after the parsed data at: ' + endIndex);
	  }
	  return isCallable$5(reviver) ? internalize({ '': value }, '', reviver, root) : value;
	};

	var internalize = function (holder, name, reviver, node) {
	  var val = holder[name];
	  var unmodified = node && val === node.value;
	  var context = unmodified && typeof node.source == 'string' ? { source: node.source } : {};
	  var elementRecordsLen, keys, len, i, P;
	  if (isObject$5(val)) {
	    var nodeIsArray = isArray$1(val);
	    var nodes = unmodified ? node.nodes : nodeIsArray ? [] : {};
	    if (nodeIsArray) {
	      elementRecordsLen = nodes.length;
	      len = lengthOfArrayLike$d(val);
	      for (i = 0; i < len; i++) {
	        internalizeProperty(val, i, internalize(val, '' + i, reviver, i < elementRecordsLen ? nodes[i] : undefined));
	      }
	    } else {
	      keys = enumerableOwnProperties(val);
	      len = lengthOfArrayLike$d(keys);
	      for (i = 0; i < len; i++) {
	        P = keys[i];
	        internalizeProperty(val, P, internalize(val, P, reviver, hasOwn$7(nodes, P) ? nodes[P] : undefined));
	      }
	    }
	  }
	  return call$c(reviver, holder, name, val, context);
	};

	var internalizeProperty = function (object, key, value) {
	  if (DESCRIPTORS$d) {
	    var descriptor = getOwnPropertyDescriptor(object, key);
	    if (descriptor && !descriptor.configurable) return;
	  }
	  if (value === undefined) delete object[key];
	  else createProperty$1(object, key, value);
	};

	var Node = function (value, end, source, nodes) {
	  this.value = value;
	  this.end = end;
	  this.source = source;
	  this.nodes = nodes;
	};

	var Context = function (source, index) {
	  this.source = source;
	  this.index = index;
	};

	// https://www.json.org/json-en.html
	Context.prototype = {
	  fork: function (nextIndex) {
	    return new Context(this.source, nextIndex);
	  },
	  parse: function () {
	    var source = this.source;
	    var i = this.skip(IS_WHITESPACE, this.index);
	    var fork = this.fork(i);
	    var chr = at(source, i);
	    if (exec$3(IS_NUMBER_START, chr)) return fork.number();
	    switch (chr) {
	      case '{':
	        return fork.object();
	      case '[':
	        return fork.array();
	      case '"':
	        return fork.string();
	      case 't':
	        return fork.keyword(true);
	      case 'f':
	        return fork.keyword(false);
	      case 'n':
	        return fork.keyword(null);
	    } throw new SyntaxError$1('Unexpected character: "' + chr + '" at: ' + i);
	  },
	  node: function (type, value, start, end, nodes) {
	    return new Node(value, end, type ? null : slice$3(this.source, start, end), nodes);
	  },
	  object: function () {
	    var source = this.source;
	    var i = this.index + 1;
	    var expectKeypair = false;
	    var object = {};
	    var nodes = {};
	    while (i < source.length) {
	      i = this.until(['"', '}'], i);
	      if (at(source, i) === '}' && !expectKeypair) {
	        i++;
	        break;
	      }
	      // Parsing the key
	      var result = this.fork(i).string();
	      var key = result.value;
	      i = result.end;
	      i = this.until([':'], i) + 1;
	      // Parsing value
	      i = this.skip(IS_WHITESPACE, i);
	      result = this.fork(i).parse();
	      createProperty$1(nodes, key, result);
	      createProperty$1(object, key, result.value);
	      i = this.until([',', '}'], result.end);
	      var chr = at(source, i);
	      if (chr === ',') {
	        expectKeypair = true;
	        i++;
	      } else if (chr === '}') {
	        i++;
	        break;
	      }
	    }
	    return this.node(OBJECT, object, this.index, i, nodes);
	  },
	  array: function () {
	    var source = this.source;
	    var i = this.index + 1;
	    var expectElement = false;
	    var array = [];
	    var nodes = [];
	    while (i < source.length) {
	      i = this.skip(IS_WHITESPACE, i);
	      if (at(source, i) === ']' && !expectElement) {
	        i++;
	        break;
	      }
	      var result = this.fork(i).parse();
	      push$8(nodes, result);
	      push$8(array, result.value);
	      i = this.until([',', ']'], result.end);
	      if (at(source, i) === ',') {
	        expectElement = true;
	        i++;
	      } else if (at(source, i) === ']') {
	        i++;
	        break;
	      }
	    }
	    return this.node(OBJECT, array, this.index, i, nodes);
	  },
	  string: function () {
	    var index = this.index;
	    var parsed = parseJSONString(this.source, this.index + 1);
	    return this.node(PRIMITIVE, parsed.value, index, parsed.end);
	  },
	  number: function () {
	    var source = this.source;
	    var startIndex = this.index;
	    var i = startIndex;
	    if (at(source, i) === '-') i++;
	    if (at(source, i) === '0') i++;
	    else if (exec$3(IS_NON_ZERO_DIGIT, at(source, i))) i = this.skip(IS_DIGIT, i + 1);
	    else throw new SyntaxError$1('Failed to parse number at: ' + i);
	    if (at(source, i) === '.') i = this.skip(IS_DIGIT, i + 1);
	    if (at(source, i) === 'e' || at(source, i) === 'E') {
	      i++;
	      if (at(source, i) === '+' || at(source, i) === '-') i++;
	      var exponentStartIndex = i;
	      i = this.skip(IS_DIGIT, i);
	      if (exponentStartIndex === i) throw new SyntaxError$1("Failed to parse number's exponent value at: " + i);
	    }
	    return this.node(PRIMITIVE, Number$1(slice$3(source, startIndex, i)), startIndex, i);
	  },
	  keyword: function (value) {
	    var keyword = '' + value;
	    var index = this.index;
	    var endIndex = index + keyword.length;
	    if (slice$3(this.source, index, endIndex) !== keyword) throw new SyntaxError$1('Failed to parse value at: ' + index);
	    return this.node(PRIMITIVE, value, index, endIndex);
	  },
	  skip: function (regex, i) {
	    var source = this.source;
	    for (; i < source.length; i++) if (!exec$3(regex, at(source, i))) break;
	    return i;
	  },
	  until: function (array, i) {
	    i = this.skip(IS_WHITESPACE, i);
	    var chr = at(this.source, i);
	    for (var j = 0; j < array.length; j++) if (array[j] === chr) return i;
	    throw new SyntaxError$1('Unexpected character: "' + chr + '" at: ' + i);
	  }
	};

	var NO_SOURCE_SUPPORT = fails$e(function () {
	  var unsafeInt = '9007199254740993';
	  var source;
	  nativeParse(unsafeInt, function (key, value, context) {
	    source = context.source;
	  });
	  return source !== unsafeInt;
	});

	var PROPER_BASE_PARSE = NATIVE_SYMBOL && !fails$e(function () {
	  // Safari 9 bug
	  return 1 / nativeParse('-0 \t') !== -Infinity;
	});

	// `JSON.parse` method
	// https://tc39.es/ecma262/#sec-json.parse
	// https://github.com/tc39/proposal-json-parse-with-source
	$$n({ target: 'JSON', stat: true, forced: NO_SOURCE_SUPPORT }, {
	  parse: function parse(text, reviver) {
	    return PROPER_BASE_PARSE && !isCallable$5(reviver) ? nativeParse(text) : $parse(text, reviver);
	  }
	});

	// iterable DOM collections
	// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
	var domIterables = {
	  CSSRuleList: 0,
	  CSSStyleDeclaration: 0,
	  CSSValueList: 0,
	  ClientRectList: 0,
	  DOMRectList: 0,
	  DOMStringList: 0,
	  DOMTokenList: 1,
	  DataTransferItemList: 0,
	  FileList: 0,
	  HTMLAllCollection: 0,
	  HTMLCollection: 0,
	  HTMLFormElement: 0,
	  HTMLSelectElement: 0,
	  MediaList: 0,
	  MimeTypeArray: 0,
	  NamedNodeMap: 0,
	  NodeList: 1,
	  PaintRequestList: 0,
	  Plugin: 0,
	  PluginArray: 0,
	  SVGLengthList: 0,
	  SVGNumberList: 0,
	  SVGPathSegList: 0,
	  SVGPointList: 0,
	  SVGStringList: 0,
	  SVGTransformList: 0,
	  SourceBufferList: 0,
	  StyleSheetList: 0,
	  TextTrackCueList: 0,
	  TextTrackList: 0,
	  TouchList: 0
	};

	// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
	var documentCreateElement = documentCreateElement$2;

	var classList = documentCreateElement('span').classList;
	var DOMTokenListPrototype$2 = classList && classList.constructor && classList.constructor.prototype;

	var domTokenListPrototype = DOMTokenListPrototype$2 === Object.prototype ? undefined : DOMTokenListPrototype$2;

	var $forEach = arrayIteration.forEach;
	var arrayMethodIsStrict$1 = arrayMethodIsStrict$5;

	var STRICT_METHOD$1 = arrayMethodIsStrict$1('forEach');

	// `Array.prototype.forEach` method implementation
	// https://tc39.es/ecma262/#sec-array.prototype.foreach
	var arrayForEach = !STRICT_METHOD$1 ? function forEach(callbackfn /* , thisArg */) {
	  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	// eslint-disable-next-line es/no-array-prototype-foreach -- safe
	} : [].forEach;

	var globalThis$q = globalThis_1;
	var DOMIterables$1 = domIterables;
	var DOMTokenListPrototype$1 = domTokenListPrototype;
	var forEach$3 = arrayForEach;
	var createNonEnumerableProperty$5 = createNonEnumerableProperty$f;

	var handlePrototype$1 = function (CollectionPrototype) {
	  // some Chrome versions have non-configurable methods on DOMTokenList
	  if (CollectionPrototype && CollectionPrototype.forEach !== forEach$3) try {
	    createNonEnumerableProperty$5(CollectionPrototype, 'forEach', forEach$3);
	  } catch (error) {
	    CollectionPrototype.forEach = forEach$3;
	  }
	};

	for (var COLLECTION_NAME$1 in DOMIterables$1) {
	  if (DOMIterables$1[COLLECTION_NAME$1]) {
	    handlePrototype$1(globalThis$q[COLLECTION_NAME$1] && globalThis$q[COLLECTION_NAME$1].prototype);
	  }
	}

	handlePrototype$1(DOMTokenListPrototype$1);

	var globalThis$p = globalThis_1;
	var DOMIterables = domIterables;
	var DOMTokenListPrototype = domTokenListPrototype;
	var ArrayIteratorMethods = es_array_iterator;
	var createNonEnumerableProperty$4 = createNonEnumerableProperty$f;
	var setToStringTag$3 = setToStringTag$9;
	var wellKnownSymbol$7 = wellKnownSymbol$w;

	var ITERATOR$3 = wellKnownSymbol$7('iterator');
	var ArrayValues = ArrayIteratorMethods.values;

	var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
	  if (CollectionPrototype) {
	    // some Chrome versions have non-configurable methods on DOMTokenList
	    if (CollectionPrototype[ITERATOR$3] !== ArrayValues) try {
	      createNonEnumerableProperty$4(CollectionPrototype, ITERATOR$3, ArrayValues);
	    } catch (error) {
	      CollectionPrototype[ITERATOR$3] = ArrayValues;
	    }
	    setToStringTag$3(CollectionPrototype, COLLECTION_NAME, true);
	    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
	      // some Chrome versions have non-configurable methods on DOMTokenList
	      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
	        createNonEnumerableProperty$4(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
	      } catch (error) {
	        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
	      }
	    }
	  }
	};

	for (var COLLECTION_NAME in DOMIterables) {
	  handlePrototype(globalThis$p[COLLECTION_NAME] && globalThis$p[COLLECTION_NAME].prototype, COLLECTION_NAME);
	}

	handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

	var domExceptionConstants = {
	  IndexSizeError: { s: 'INDEX_SIZE_ERR', c: 1, m: 1 },
	  DOMStringSizeError: { s: 'DOMSTRING_SIZE_ERR', c: 2, m: 0 },
	  HierarchyRequestError: { s: 'HIERARCHY_REQUEST_ERR', c: 3, m: 1 },
	  WrongDocumentError: { s: 'WRONG_DOCUMENT_ERR', c: 4, m: 1 },
	  InvalidCharacterError: { s: 'INVALID_CHARACTER_ERR', c: 5, m: 1 },
	  NoDataAllowedError: { s: 'NO_DATA_ALLOWED_ERR', c: 6, m: 0 },
	  NoModificationAllowedError: { s: 'NO_MODIFICATION_ALLOWED_ERR', c: 7, m: 1 },
	  NotFoundError: { s: 'NOT_FOUND_ERR', c: 8, m: 1 },
	  NotSupportedError: { s: 'NOT_SUPPORTED_ERR', c: 9, m: 1 },
	  InUseAttributeError: { s: 'INUSE_ATTRIBUTE_ERR', c: 10, m: 1 },
	  InvalidStateError: { s: 'INVALID_STATE_ERR', c: 11, m: 1 },
	  SyntaxError: { s: 'SYNTAX_ERR', c: 12, m: 1 },
	  InvalidModificationError: { s: 'INVALID_MODIFICATION_ERR', c: 13, m: 1 },
	  NamespaceError: { s: 'NAMESPACE_ERR', c: 14, m: 1 },
	  InvalidAccessError: { s: 'INVALID_ACCESS_ERR', c: 15, m: 1 },
	  ValidationError: { s: 'VALIDATION_ERR', c: 16, m: 0 },
	  TypeMismatchError: { s: 'TYPE_MISMATCH_ERR', c: 17, m: 1 },
	  SecurityError: { s: 'SECURITY_ERR', c: 18, m: 1 },
	  NetworkError: { s: 'NETWORK_ERR', c: 19, m: 1 },
	  AbortError: { s: 'ABORT_ERR', c: 20, m: 1 },
	  URLMismatchError: { s: 'URL_MISMATCH_ERR', c: 21, m: 1 },
	  QuotaExceededError: { s: 'QUOTA_EXCEEDED_ERR', c: 22, m: 1 },
	  TimeoutError: { s: 'TIMEOUT_ERR', c: 23, m: 1 },
	  InvalidNodeTypeError: { s: 'INVALID_NODE_TYPE_ERR', c: 24, m: 1 },
	  DataCloneError: { s: 'DATA_CLONE_ERR', c: 25, m: 1 }
	};

	var $$m = _export;
	var globalThis$o = globalThis_1;
	var getBuiltIn$2 = getBuiltIn$e;
	var createPropertyDescriptor$2 = createPropertyDescriptor$8;
	var defineProperty$3 = objectDefineProperty.f;
	var hasOwn$6 = hasOwnProperty_1;
	var anInstance$4 = anInstance$a;
	var inheritIfRequired$2 = inheritIfRequired$6;
	var normalizeStringArgument = normalizeStringArgument$2;
	var DOMExceptionConstants = domExceptionConstants;
	var clearErrorStack = errorStackClear;
	var DESCRIPTORS$c = descriptors;

	var DOM_EXCEPTION = 'DOMException';
	var Error$2 = getBuiltIn$2('Error');
	var NativeDOMException = getBuiltIn$2(DOM_EXCEPTION);

	var $DOMException = function DOMException() {
	  anInstance$4(this, DOMExceptionPrototype);
	  var argumentsLength = arguments.length;
	  var message = normalizeStringArgument(argumentsLength < 1 ? undefined : arguments[0]);
	  var name = normalizeStringArgument(argumentsLength < 2 ? undefined : arguments[1], 'Error');
	  var that = new NativeDOMException(message, name);
	  var error = new Error$2(message);
	  error.name = DOM_EXCEPTION;
	  defineProperty$3(that, 'stack', createPropertyDescriptor$2(1, clearErrorStack(error.stack, 1)));
	  inheritIfRequired$2(that, this, $DOMException);
	  return that;
	};

	var DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype;

	var ERROR_HAS_STACK = 'stack' in new Error$2(DOM_EXCEPTION);
	var DOM_EXCEPTION_HAS_STACK = 'stack' in new NativeDOMException(1, 2);

	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var descriptor$1 = NativeDOMException && DESCRIPTORS$c && Object.getOwnPropertyDescriptor(globalThis$o, DOM_EXCEPTION);

	// Bun ~ 0.1.1 DOMException have incorrect descriptor and we can't redefine it
	// https://github.com/Jarred-Sumner/bun/issues/399
	var BUGGY_DESCRIPTOR = !!descriptor$1 && !(descriptor$1.writable && descriptor$1.configurable);

	var FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !BUGGY_DESCRIPTOR && !DOM_EXCEPTION_HAS_STACK;

	// `DOMException` constructor patch for `.stack` where it's required
	// https://webidl.spec.whatwg.org/#es-DOMException-specialness
	$$m({ global: true, constructor: true, forced: FORCED_CONSTRUCTOR }, { // TODO: fix export logic
	  DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
	});

	var PolyfilledDOMException = getBuiltIn$2(DOM_EXCEPTION);
	var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;

	if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
	  {
	    defineProperty$3(PolyfilledDOMExceptionPrototype, 'constructor', createPropertyDescriptor$2(1, PolyfilledDOMException));
	  }

	  for (var key in DOMExceptionConstants) if (hasOwn$6(DOMExceptionConstants, key)) {
	    var constant = DOMExceptionConstants[key];
	    var constantName = constant.s;
	    if (!hasOwn$6(PolyfilledDOMException, constantName)) {
	      defineProperty$3(PolyfilledDOMException, constantName, createPropertyDescriptor$2(6, constant.c));
	    }
	  }
	}

	var $$l = _export;
	var globalThis$n = globalThis_1;
	var clearImmediate = task$1.clear;

	// `clearImmediate` method
	// http://w3c.github.io/setImmediate/#si-clearImmediate
	$$l({ global: true, bind: true, enumerable: true, forced: globalThis$n.clearImmediate !== clearImmediate }, {
	  clearImmediate: clearImmediate
	});

	var globalThis$m = globalThis_1;
	var apply$1 = functionApply;
	var isCallable$4 = isCallable$y;
	var ENVIRONMENT$1 = environment;
	var USER_AGENT = environmentUserAgent;
	var arraySlice$2 = arraySlice$7;
	var validateArgumentsLength$6 = validateArgumentsLength$8;

	var Function$1 = globalThis$m.Function;
	// dirty IE9- and Bun 0.3.0- checks
	var WRAP = /MSIE .\./.test(USER_AGENT) || ENVIRONMENT$1 === 'BUN' && (function () {
	  var version = globalThis$m.Bun.version.split('.');
	  return version.length < 3 || version[0] === '0' && (version[1] < 3 || version[1] === '3' && version[2] === '0');
	})();

	// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
	// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
	// https://github.com/oven-sh/bun/issues/1633
	var schedulersFix$1 = function (scheduler, hasTimeArg) {
	  var firstParamIndex = hasTimeArg ? 2 : 1;
	  return WRAP ? function (handler, timeout /* , ...arguments */) {
	    var boundArgs = validateArgumentsLength$6(arguments.length, 1) > firstParamIndex;
	    var fn = isCallable$4(handler) ? handler : Function$1(handler);
	    var params = boundArgs ? arraySlice$2(arguments, firstParamIndex) : [];
	    var callback = boundArgs ? function () {
	      apply$1(fn, this, params);
	    } : fn;
	    return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
	  } : scheduler;
	};

	var $$k = _export;
	var globalThis$l = globalThis_1;
	var setTask = task$1.set;
	var schedulersFix = schedulersFix$1;

	// https://github.com/oven-sh/bun/issues/1633
	var setImmediate = globalThis$l.setImmediate ? schedulersFix(setTask, false) : setTask;

	// `setImmediate` method
	// http://w3c.github.io/setImmediate/#si-setImmediate
	$$k({ global: true, bind: true, enumerable: true, forced: globalThis$l.setImmediate !== setImmediate }, {
	  setImmediate: setImmediate
	});

	var $$j = _export;
	var globalThis$k = globalThis_1;
	var microtask = microtask_1;
	var aCallable$4 = aCallable$o;
	var validateArgumentsLength$5 = validateArgumentsLength$8;
	var fails$d = fails$P;
	var DESCRIPTORS$b = descriptors;

	// Bun ~ 1.0.30 bug
	// https://github.com/oven-sh/bun/issues/9249
	var WRONG_ARITY = fails$d(function () {
	  // getOwnPropertyDescriptor for prevent experimental warning in Node 11
	  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	  return DESCRIPTORS$b && Object.getOwnPropertyDescriptor(globalThis$k, 'queueMicrotask').value.length !== 1;
	});

	// `queueMicrotask` method
	// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-queuemicrotask
	$$j({ global: true, enumerable: true, dontCallGetSet: true, forced: WRONG_ARITY }, {
	  queueMicrotask: function queueMicrotask(fn) {
	    validateArgumentsLength$5(arguments.length, 1);
	    microtask(aCallable$4(fn));
	  }
	});

	var $$i = _export;
	var globalThis$j = globalThis_1;
	var defineBuiltInAccessor$7 = defineBuiltInAccessor$e;
	var DESCRIPTORS$a = descriptors;

	var $TypeError$4 = TypeError;
	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var defineProperty$2 = Object.defineProperty;
	var INCORRECT_VALUE = globalThis$j.self !== globalThis$j;

	// `self` getter
	// https://html.spec.whatwg.org/multipage/window-object.html#dom-self
	try {
	  if (DESCRIPTORS$a) {
	    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	    var descriptor = Object.getOwnPropertyDescriptor(globalThis$j, 'self');
	    // some engines have `self`, but with incorrect descriptor
	    // https://github.com/denoland/deno/issues/15765
	    if (INCORRECT_VALUE || !descriptor || !descriptor.get || !descriptor.enumerable) {
	      defineBuiltInAccessor$7(globalThis$j, 'self', {
	        get: function self() {
	          return globalThis$j;
	        },
	        set: function self(value) {
	          if (this !== globalThis$j) throw new $TypeError$4('Illegal invocation');
	          defineProperty$2(globalThis$j, 'self', {
	            value: value,
	            writable: true,
	            configurable: true,
	            enumerable: true
	          });
	        },
	        configurable: true,
	        enumerable: true
	      });
	    }
	  } else $$i({ global: true, simple: true, forced: INCORRECT_VALUE }, {
	    self: globalThis$j
	  });
	} catch (error) { /* empty */ }

	var charAt$2 = stringMultibyte.charAt;
	var toString$4 = toString$m;
	var InternalStateModule$6 = internalState;
	var defineIterator = iteratorDefine;
	var createIterResultObject$2 = createIterResultObject$6;

	var STRING_ITERATOR = 'String Iterator';
	var setInternalState$5 = InternalStateModule$6.set;
	var getInternalState$3 = InternalStateModule$6.getterFor(STRING_ITERATOR);

	// `String.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
	defineIterator(String, 'String', function (iterated) {
	  setInternalState$5(this, {
	    type: STRING_ITERATOR,
	    string: toString$4(iterated),
	    index: 0
	  });
	// `%StringIteratorPrototype%.next` method
	// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
	}, function next() {
	  var state = getInternalState$3(this);
	  var string = state.string;
	  var index = state.index;
	  var point;
	  if (index >= string.length) return createIterResultObject$2(undefined, true);
	  point = charAt$2(string, index);
	  state.index += point.length;
	  return createIterResultObject$2(point, false);
	});

	var fails$c = fails$P;
	var wellKnownSymbol$6 = wellKnownSymbol$w;
	var DESCRIPTORS$9 = descriptors;
	var IS_PURE$3 = isPure;

	var ITERATOR$2 = wellKnownSymbol$6('iterator');

	var urlConstructorDetection = !fails$c(function () {
	  // eslint-disable-next-line unicorn/relative-url-style -- required for testing
	  var url = new URL('b?a=1&b=2&c=3', 'https://a');
	  var params = url.searchParams;
	  var params2 = new URLSearchParams('a=1&a=2&b=3');
	  var result = '';
	  url.pathname = 'c%20d';
	  params.forEach(function (value, key) {
	    params['delete']('b');
	    result += key + value;
	  });
	  params2['delete']('a', 2);
	  // `undefined` case is a Chromium 117 bug
	  // https://bugs.chromium.org/p/v8/issues/detail?id=14222
	  params2['delete']('b', undefined);
	  return (IS_PURE$3 && (!url.toJSON || !params2.has('a', 1) || params2.has('a', 2) || !params2.has('a', undefined) || params2.has('b')))
	    || (!params.size && (IS_PURE$3 || !DESCRIPTORS$9))
	    || !params.sort
	    || url.href !== 'https://a/c%20d?a=1&c=3'
	    || params.get('c') !== '3'
	    || String(new URLSearchParams('?a=1')) !== 'a=1'
	    || !params[ITERATOR$2]
	    // throws in Edge
	    || new URL('https://a@b').username !== 'a'
	    || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
	    // not punycoded in Edge
	    || new URL('https://тест').host !== 'xn--e1aybc'
	    // not escaped in Chrome 62-
	    || new URL('https://a#б').hash !== '#%D0%B1'
	    // fails in Chrome 66-
	    || result !== 'a1c3'
	    // throws in Safari
	    || new URL('https://x', undefined).host !== 'x';
	});

	var DESCRIPTORS$8 = descriptors;
	var uncurryThis$l = functionUncurryThis;
	var call$b = functionCall;
	var fails$b = fails$P;
	var objectKeys$2 = objectKeys$4;
	var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
	var propertyIsEnumerableModule = objectPropertyIsEnumerable;
	var toObject$5 = toObject$h;
	var IndexedObject$2 = indexedObject;

	// eslint-disable-next-line es/no-object-assign -- safe
	var $assign = Object.assign;
	// eslint-disable-next-line es/no-object-defineproperty -- required for testing
	var defineProperty$1 = Object.defineProperty;
	var concat = uncurryThis$l([].concat);

	// `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign
	var objectAssign = !$assign || fails$b(function () {
	  // should have correct order of operations (Edge bug)
	  if (DESCRIPTORS$8 && $assign({ b: 1 }, $assign(defineProperty$1({}, 'a', {
	    enumerable: true,
	    get: function () {
	      defineProperty$1(this, 'b', {
	        value: 3,
	        enumerable: false
	      });
	    }
	  }), { b: 2 })).b !== 1) return true;
	  // should work with symbols and should have deterministic property order (V8 bug)
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line es/no-symbol -- safe
	  var symbol = Symbol('assign detection');
	  var alphabet = 'abcdefghijklmnopqrst';
	  A[symbol] = 7;
	  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
	  return $assign({}, A)[symbol] !== 7 || objectKeys$2($assign({}, B)).join('') !== alphabet;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
	  var T = toObject$5(target);
	  var argumentsLength = arguments.length;
	  var index = 1;
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
	  var propertyIsEnumerable = propertyIsEnumerableModule.f;
	  while (argumentsLength > index) {
	    var S = IndexedObject$2(arguments[index++]);
	    var keys = getOwnPropertySymbols ? concat(objectKeys$2(S), getOwnPropertySymbols(S)) : objectKeys$2(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) {
	      key = keys[j++];
	      if (!DESCRIPTORS$8 || call$b(propertyIsEnumerable, S, key)) T[key] = S[key];
	    }
	  } return T;
	} : $assign;

	// based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
	var uncurryThis$k = functionUncurryThis;

	var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
	var base = 36;
	var tMin = 1;
	var tMax = 26;
	var skew = 38;
	var damp = 700;
	var initialBias = 72;
	var initialN = 128; // 0x80
	var delimiter = '-'; // '\x2D'
	var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
	var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
	var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
	var baseMinusTMin = base - tMin;

	var $RangeError$6 = RangeError;
	var exec$2 = uncurryThis$k(regexSeparators.exec);
	var floor$3 = Math.floor;
	var fromCharCode$2 = String.fromCharCode;
	var charCodeAt = uncurryThis$k(''.charCodeAt);
	var join$4 = uncurryThis$k([].join);
	var push$7 = uncurryThis$k([].push);
	var replace$2 = uncurryThis$k(''.replace);
	var split$2 = uncurryThis$k(''.split);
	var toLowerCase$1 = uncurryThis$k(''.toLowerCase);

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 */
	var ucs2decode = function (string) {
	  var output = [];
	  var counter = 0;
	  var length = string.length;
	  while (counter < length) {
	    var value = charCodeAt(string, counter++);
	    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
	      // It's a high surrogate, and there is a next character.
	      var extra = charCodeAt(string, counter++);
	      if ((extra & 0xFC00) === 0xDC00) { // Low surrogate.
	        push$7(output, ((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
	      } else {
	        // It's an unmatched surrogate; only append this code unit, in case the
	        // next code unit is the high surrogate of a surrogate pair.
	        push$7(output, value);
	        counter--;
	      }
	    } else {
	      push$7(output, value);
	    }
	  }
	  return output;
	};

	/**
	 * Converts a digit/integer into a basic code point.
	 */
	var digitToBasic = function (digit) {
	  //  0..25 map to ASCII a..z or A..Z
	  // 26..35 map to ASCII 0..9
	  return digit + 22 + 75 * (digit < 26);
	};

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 */
	var adapt = function (delta, numPoints, firstTime) {
	  var k = 0;
	  delta = firstTime ? floor$3(delta / damp) : delta >> 1;
	  delta += floor$3(delta / numPoints);
	  while (delta > baseMinusTMin * tMax >> 1) {
	    delta = floor$3(delta / baseMinusTMin);
	    k += base;
	  }
	  return floor$3(k + (baseMinusTMin + 1) * delta / (delta + skew));
	};

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 */
	var encode = function (input) {
	  var output = [];

	  // Convert the input in UCS-2 to an array of Unicode code points.
	  input = ucs2decode(input);

	  // Cache the length.
	  var inputLength = input.length;

	  // Initialize the state.
	  var n = initialN;
	  var delta = 0;
	  var bias = initialBias;
	  var i, currentValue;

	  // Handle the basic code points.
	  for (i = 0; i < input.length; i++) {
	    currentValue = input[i];
	    if (currentValue < 0x80) {
	      push$7(output, fromCharCode$2(currentValue));
	    }
	  }

	  var basicLength = output.length; // number of basic code points.
	  var handledCPCount = basicLength; // number of code points that have been handled;

	  // Finish the basic string with a delimiter unless it's empty.
	  if (basicLength) {
	    push$7(output, delimiter);
	  }

	  // Main encoding loop:
	  while (handledCPCount < inputLength) {
	    // All non-basic code points < n have been handled already. Find the next larger one:
	    var m = maxInt;
	    for (i = 0; i < input.length; i++) {
	      currentValue = input[i];
	      if (currentValue >= n && currentValue < m) {
	        m = currentValue;
	      }
	    }

	    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
	    var handledCPCountPlusOne = handledCPCount + 1;
	    if (m - n > floor$3((maxInt - delta) / handledCPCountPlusOne)) {
	      throw new $RangeError$6(OVERFLOW_ERROR);
	    }

	    delta += (m - n) * handledCPCountPlusOne;
	    n = m;

	    for (i = 0; i < input.length; i++) {
	      currentValue = input[i];
	      if (currentValue < n && ++delta > maxInt) {
	        throw new $RangeError$6(OVERFLOW_ERROR);
	      }
	      if (currentValue === n) {
	        // Represent delta as a generalized variable-length integer.
	        var q = delta;
	        var k = base;
	        while (true) {
	          var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
	          if (q < t) break;
	          var qMinusT = q - t;
	          var baseMinusT = base - t;
	          push$7(output, fromCharCode$2(digitToBasic(t + qMinusT % baseMinusT)));
	          q = floor$3(qMinusT / baseMinusT);
	          k += base;
	        }

	        push$7(output, fromCharCode$2(digitToBasic(q)));
	        bias = adapt(delta, handledCPCountPlusOne, handledCPCount === basicLength);
	        delta = 0;
	        handledCPCount++;
	      }
	    }

	    delta++;
	    n++;
	  }
	  return join$4(output, '');
	};

	var stringPunycodeToAscii = function (input) {
	  var encoded = [];
	  var labels = split$2(replace$2(toLowerCase$1(input), regexSeparators, '\u002E'), '.');
	  var i, label;
	  for (i = 0; i < labels.length; i++) {
	    label = labels[i];
	    push$7(encoded, exec$2(regexNonASCII, label) ? 'xn--' + encode(label) : label);
	  }
	  return join$4(encoded, '.');
	};

	var $$h = _export;
	var uncurryThis$j = functionUncurryThis;
	var toAbsoluteIndex$1 = toAbsoluteIndex$5;

	var $RangeError$5 = RangeError;
	var fromCharCode$1 = String.fromCharCode;
	// eslint-disable-next-line es/no-string-fromcodepoint -- required for testing
	var $fromCodePoint = String.fromCodePoint;
	var join$3 = uncurryThis$j([].join);

	// length should be 1, old FF problem
	var INCORRECT_LENGTH = !!$fromCodePoint && $fromCodePoint.length !== 1;

	// `String.fromCodePoint` method
	// https://tc39.es/ecma262/#sec-string.fromcodepoint
	$$h({ target: 'String', stat: true, arity: 1, forced: INCORRECT_LENGTH }, {
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  fromCodePoint: function fromCodePoint(x) {
	    var elements = [];
	    var length = arguments.length;
	    var i = 0;
	    var code;
	    while (length > i) {
	      code = +arguments[i++];
	      if (toAbsoluteIndex$1(code, 0x10FFFF) !== code) throw new $RangeError$5(code + ' is not a valid code point');
	      elements[i] = code < 0x10000
	        ? fromCharCode$1(code)
	        : fromCharCode$1(((code -= 0x10000) >> 10) + 0xD800, code % 0x400 + 0xDC00);
	    } return join$3(elements, '');
	  }
	});

	// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`


	var $$g = _export;
	var globalThis$i = globalThis_1;
	var safeGetBuiltIn = safeGetBuiltIn$2;
	var getBuiltIn$1 = getBuiltIn$e;
	var call$a = functionCall;
	var uncurryThis$i = functionUncurryThis;
	var DESCRIPTORS$7 = descriptors;
	var USE_NATIVE_URL$1 = urlConstructorDetection;
	var defineBuiltIn$5 = defineBuiltIn$f;
	var defineBuiltInAccessor$6 = defineBuiltInAccessor$e;
	var defineBuiltIns$1 = defineBuiltIns$6;
	var setToStringTag$2 = setToStringTag$9;
	var createIteratorConstructor$1 = iteratorCreateConstructor;
	var InternalStateModule$5 = internalState;
	var anInstance$3 = anInstance$a;
	var isCallable$3 = isCallable$y;
	var hasOwn$5 = hasOwnProperty_1;
	var bind$5 = functionBindContext;
	var classof$7 = classof$j;
	var anObject$6 = anObject$y;
	var isObject$4 = isObject$r;
	var $toString$1 = toString$m;
	var create$1 = objectCreate$1;
	var createPropertyDescriptor$1 = createPropertyDescriptor$8;
	var getIterator$1 = getIterator$4;
	var getIteratorMethod$2 = getIteratorMethod$6;
	var createIterResultObject$1 = createIterResultObject$6;
	var validateArgumentsLength$4 = validateArgumentsLength$8;
	var wellKnownSymbol$5 = wellKnownSymbol$w;
	var arraySort = arraySort$1;

	var ITERATOR$1 = wellKnownSymbol$5('iterator');
	var URL_SEARCH_PARAMS = 'URLSearchParams';
	var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
	var setInternalState$4 = InternalStateModule$5.set;
	var getInternalParamsState = InternalStateModule$5.getterFor(URL_SEARCH_PARAMS);
	var getInternalIteratorState = InternalStateModule$5.getterFor(URL_SEARCH_PARAMS_ITERATOR);

	var nativeFetch = safeGetBuiltIn('fetch');
	var NativeRequest = safeGetBuiltIn('Request');
	var Headers = safeGetBuiltIn('Headers');
	var RequestPrototype = NativeRequest && NativeRequest.prototype;
	var HeadersPrototype = Headers && Headers.prototype;
	var TypeError$5 = globalThis$i.TypeError;
	var encodeURIComponent$1 = globalThis$i.encodeURIComponent;
	var fromCharCode = String.fromCharCode;
	var fromCodePoint = getBuiltIn$1('String', 'fromCodePoint');
	var $parseInt = parseInt;
	var charAt$1 = uncurryThis$i(''.charAt);
	var join$2 = uncurryThis$i([].join);
	var push$6 = uncurryThis$i([].push);
	var replace$1 = uncurryThis$i(''.replace);
	var shift$1 = uncurryThis$i([].shift);
	var splice = uncurryThis$i([].splice);
	var split$1 = uncurryThis$i(''.split);
	var stringSlice$2 = uncurryThis$i(''.slice);
	var exec$1 = uncurryThis$i(/./.exec);

	var plus = /\+/g;
	var FALLBACK_REPLACER = '\uFFFD';
	var VALID_HEX = /^[0-9a-f]+$/i;

	var parseHexOctet = function (string, start) {
	  var substr = stringSlice$2(string, start, start + 2);
	  if (!exec$1(VALID_HEX, substr)) return NaN;

	  return $parseInt(substr, 16);
	};

	var getLeadingOnes = function (octet) {
	  var count = 0;
	  for (var mask = 0x80; mask > 0 && (octet & mask) !== 0; mask >>= 1) {
	    count++;
	  }
	  return count;
	};

	var utf8Decode = function (octets) {
	  var codePoint = null;

	  switch (octets.length) {
	    case 1:
	      codePoint = octets[0];
	      break;
	    case 2:
	      codePoint = (octets[0] & 0x1F) << 6 | (octets[1] & 0x3F);
	      break;
	    case 3:
	      codePoint = (octets[0] & 0x0F) << 12 | (octets[1] & 0x3F) << 6 | (octets[2] & 0x3F);
	      break;
	    case 4:
	      codePoint = (octets[0] & 0x07) << 18 | (octets[1] & 0x3F) << 12 | (octets[2] & 0x3F) << 6 | (octets[3] & 0x3F);
	      break;
	  }

	  return codePoint > 0x10FFFF ? null : codePoint;
	};

	var decode = function (input) {
	  input = replace$1(input, plus, ' ');
	  var length = input.length;
	  var result = '';
	  var i = 0;

	  while (i < length) {
	    var decodedChar = charAt$1(input, i);

	    if (decodedChar === '%') {
	      if (charAt$1(input, i + 1) === '%' || i + 3 > length) {
	        result += '%';
	        i++;
	        continue;
	      }

	      var octet = parseHexOctet(input, i + 1);

	      // eslint-disable-next-line no-self-compare -- NaN check
	      if (octet !== octet) {
	        result += decodedChar;
	        i++;
	        continue;
	      }

	      i += 2;
	      var byteSequenceLength = getLeadingOnes(octet);

	      if (byteSequenceLength === 0) {
	        decodedChar = fromCharCode(octet);
	      } else {
	        if (byteSequenceLength === 1 || byteSequenceLength > 4) {
	          result += FALLBACK_REPLACER;
	          i++;
	          continue;
	        }

	        var octets = [octet];
	        var sequenceIndex = 1;

	        while (sequenceIndex < byteSequenceLength) {
	          i++;
	          if (i + 3 > length || charAt$1(input, i) !== '%') break;

	          var nextByte = parseHexOctet(input, i + 1);

	          // eslint-disable-next-line no-self-compare -- NaN check
	          if (nextByte !== nextByte) {
	            i += 3;
	            break;
	          }
	          if (nextByte > 191 || nextByte < 128) break;

	          push$6(octets, nextByte);
	          i += 2;
	          sequenceIndex++;
	        }

	        if (octets.length !== byteSequenceLength) {
	          result += FALLBACK_REPLACER;
	          continue;
	        }

	        var codePoint = utf8Decode(octets);
	        if (codePoint === null) {
	          result += FALLBACK_REPLACER;
	        } else {
	          decodedChar = fromCodePoint(codePoint);
	        }
	      }
	    }

	    result += decodedChar;
	    i++;
	  }

	  return result;
	};

	var find = /[!'()~]|%20/g;

	var replacements = {
	  '!': '%21',
	  "'": '%27',
	  '(': '%28',
	  ')': '%29',
	  '~': '%7E',
	  '%20': '+'
	};

	var replacer = function (match) {
	  return replacements[match];
	};

	var serialize = function (it) {
	  return replace$1(encodeURIComponent$1(it), find, replacer);
	};

	var URLSearchParamsIterator = createIteratorConstructor$1(function Iterator(params, kind) {
	  setInternalState$4(this, {
	    type: URL_SEARCH_PARAMS_ITERATOR,
	    target: getInternalParamsState(params).entries,
	    index: 0,
	    kind: kind
	  });
	}, URL_SEARCH_PARAMS, function next() {
	  var state = getInternalIteratorState(this);
	  var target = state.target;
	  var index = state.index++;
	  if (!target || index >= target.length) {
	    state.target = null;
	    return createIterResultObject$1(undefined, true);
	  }
	  var entry = target[index];
	  switch (state.kind) {
	    case 'keys': return createIterResultObject$1(entry.key, false);
	    case 'values': return createIterResultObject$1(entry.value, false);
	  } return createIterResultObject$1([entry.key, entry.value], false);
	}, true);

	var URLSearchParamsState = function (init) {
	  this.entries = [];
	  this.url = null;

	  if (init !== undefined) {
	    if (isObject$4(init)) this.parseObject(init);
	    else this.parseQuery(typeof init == 'string' ? charAt$1(init, 0) === '?' ? stringSlice$2(init, 1) : init : $toString$1(init));
	  }
	};

	URLSearchParamsState.prototype = {
	  type: URL_SEARCH_PARAMS,
	  bindURL: function (url) {
	    this.url = url;
	    this.update();
	  },
	  parseObject: function (object) {
	    var entries = this.entries;
	    var iteratorMethod = getIteratorMethod$2(object);
	    var iterator, next, step, entryIterator, entryNext, first, second;

	    if (iteratorMethod) {
	      iterator = getIterator$1(object, iteratorMethod);
	      next = iterator.next;
	      while (!(step = call$a(next, iterator)).done) {
	        entryIterator = getIterator$1(anObject$6(step.value));
	        entryNext = entryIterator.next;
	        if (
	          (first = call$a(entryNext, entryIterator)).done ||
	          (second = call$a(entryNext, entryIterator)).done ||
	          !call$a(entryNext, entryIterator).done
	        ) throw new TypeError$5('Expected sequence with length 2');
	        push$6(entries, { key: $toString$1(first.value), value: $toString$1(second.value) });
	      }
	    } else for (var key in object) if (hasOwn$5(object, key)) {
	      push$6(entries, { key: key, value: $toString$1(object[key]) });
	    }
	  },
	  parseQuery: function (query) {
	    if (query) {
	      var entries = this.entries;
	      var attributes = split$1(query, '&');
	      var index = 0;
	      var attribute, entry;
	      while (index < attributes.length) {
	        attribute = attributes[index++];
	        if (attribute.length) {
	          entry = split$1(attribute, '=');
	          push$6(entries, {
	            key: decode(shift$1(entry)),
	            value: decode(join$2(entry, '='))
	          });
	        }
	      }
	    }
	  },
	  serialize: function () {
	    var entries = this.entries;
	    var result = [];
	    var index = 0;
	    var entry;
	    while (index < entries.length) {
	      entry = entries[index++];
	      push$6(result, serialize(entry.key) + '=' + serialize(entry.value));
	    } return join$2(result, '&');
	  },
	  update: function () {
	    this.entries.length = 0;
	    this.parseQuery(this.url.query);
	  },
	  updateURL: function () {
	    if (this.url) this.url.update();
	  }
	};

	// `URLSearchParams` constructor
	// https://url.spec.whatwg.org/#interface-urlsearchparams
	var URLSearchParamsConstructor = function URLSearchParams(/* init */) {
	  anInstance$3(this, URLSearchParamsPrototype$3);
	  var init = arguments.length > 0 ? arguments[0] : undefined;
	  var state = setInternalState$4(this, new URLSearchParamsState(init));
	  if (!DESCRIPTORS$7) this.size = state.entries.length;
	};

	var URLSearchParamsPrototype$3 = URLSearchParamsConstructor.prototype;

	defineBuiltIns$1(URLSearchParamsPrototype$3, {
	  // `URLSearchParams.prototype.append` method
	  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
	  append: function append(name, value) {
	    var state = getInternalParamsState(this);
	    validateArgumentsLength$4(arguments.length, 2);
	    push$6(state.entries, { key: $toString$1(name), value: $toString$1(value) });
	    if (!DESCRIPTORS$7) this.length++;
	    state.updateURL();
	  },
	  // `URLSearchParams.prototype.delete` method
	  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
	  'delete': function (name /* , value */) {
	    var state = getInternalParamsState(this);
	    var length = validateArgumentsLength$4(arguments.length, 1);
	    var entries = state.entries;
	    var key = $toString$1(name);
	    var $value = length < 2 ? undefined : arguments[1];
	    var value = $value === undefined ? $value : $toString$1($value);
	    var index = 0;
	    while (index < entries.length) {
	      var entry = entries[index];
	      if (entry.key === key && (value === undefined || entry.value === value)) {
	        splice(entries, index, 1);
	        if (value !== undefined) break;
	      } else index++;
	    }
	    if (!DESCRIPTORS$7) this.size = entries.length;
	    state.updateURL();
	  },
	  // `URLSearchParams.prototype.get` method
	  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
	  get: function get(name) {
	    var entries = getInternalParamsState(this).entries;
	    validateArgumentsLength$4(arguments.length, 1);
	    var key = $toString$1(name);
	    var index = 0;
	    for (; index < entries.length; index++) {
	      if (entries[index].key === key) return entries[index].value;
	    }
	    return null;
	  },
	  // `URLSearchParams.prototype.getAll` method
	  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
	  getAll: function getAll(name) {
	    var entries = getInternalParamsState(this).entries;
	    validateArgumentsLength$4(arguments.length, 1);
	    var key = $toString$1(name);
	    var result = [];
	    var index = 0;
	    for (; index < entries.length; index++) {
	      if (entries[index].key === key) push$6(result, entries[index].value);
	    }
	    return result;
	  },
	  // `URLSearchParams.prototype.has` method
	  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
	  has: function has(name /* , value */) {
	    var entries = getInternalParamsState(this).entries;
	    var length = validateArgumentsLength$4(arguments.length, 1);
	    var key = $toString$1(name);
	    var $value = length < 2 ? undefined : arguments[1];
	    var value = $value === undefined ? $value : $toString$1($value);
	    var index = 0;
	    while (index < entries.length) {
	      var entry = entries[index++];
	      if (entry.key === key && (value === undefined || entry.value === value)) return true;
	    }
	    return false;
	  },
	  // `URLSearchParams.prototype.set` method
	  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
	  set: function set(name, value) {
	    var state = getInternalParamsState(this);
	    validateArgumentsLength$4(arguments.length, 1);
	    var entries = state.entries;
	    var found = false;
	    var key = $toString$1(name);
	    var val = $toString$1(value);
	    var index = 0;
	    var entry;
	    for (; index < entries.length; index++) {
	      entry = entries[index];
	      if (entry.key === key) {
	        if (found) splice(entries, index--, 1);
	        else {
	          found = true;
	          entry.value = val;
	        }
	      }
	    }
	    if (!found) push$6(entries, { key: key, value: val });
	    if (!DESCRIPTORS$7) this.size = entries.length;
	    state.updateURL();
	  },
	  // `URLSearchParams.prototype.sort` method
	  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
	  sort: function sort() {
	    var state = getInternalParamsState(this);
	    arraySort(state.entries, function (a, b) {
	      return a.key > b.key ? 1 : -1;
	    });
	    state.updateURL();
	  },
	  // `URLSearchParams.prototype.forEach` method
	  forEach: function forEach(callback /* , thisArg */) {
	    var entries = getInternalParamsState(this).entries;
	    var boundFunction = bind$5(callback, arguments.length > 1 ? arguments[1] : undefined);
	    var index = 0;
	    var entry;
	    while (index < entries.length) {
	      entry = entries[index++];
	      boundFunction(entry.value, entry.key, this);
	    }
	  },
	  // `URLSearchParams.prototype.keys` method
	  keys: function keys() {
	    return new URLSearchParamsIterator(this, 'keys');
	  },
	  // `URLSearchParams.prototype.values` method
	  values: function values() {
	    return new URLSearchParamsIterator(this, 'values');
	  },
	  // `URLSearchParams.prototype.entries` method
	  entries: function entries() {
	    return new URLSearchParamsIterator(this, 'entries');
	  }
	}, { enumerable: true });

	// `URLSearchParams.prototype[@@iterator]` method
	defineBuiltIn$5(URLSearchParamsPrototype$3, ITERATOR$1, URLSearchParamsPrototype$3.entries, { name: 'entries' });

	// `URLSearchParams.prototype.toString` method
	// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
	defineBuiltIn$5(URLSearchParamsPrototype$3, 'toString', function toString() {
	  return getInternalParamsState(this).serialize();
	}, { enumerable: true });

	// `URLSearchParams.prototype.size` getter
	// https://github.com/whatwg/url/pull/734
	if (DESCRIPTORS$7) defineBuiltInAccessor$6(URLSearchParamsPrototype$3, 'size', {
	  get: function size() {
	    return getInternalParamsState(this).entries.length;
	  },
	  configurable: true,
	  enumerable: true
	});

	setToStringTag$2(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

	$$g({ global: true, constructor: true, forced: !USE_NATIVE_URL$1 }, {
	  URLSearchParams: URLSearchParamsConstructor
	});

	// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
	if (!USE_NATIVE_URL$1 && isCallable$3(Headers)) {
	  var headersHas = uncurryThis$i(HeadersPrototype.has);
	  var headersSet = uncurryThis$i(HeadersPrototype.set);

	  var wrapRequestOptions = function (init) {
	    if (isObject$4(init)) {
	      var body = init.body;
	      var headers;
	      if (classof$7(body) === URL_SEARCH_PARAMS) {
	        headers = init.headers ? new Headers(init.headers) : new Headers();
	        if (!headersHas(headers, 'content-type')) {
	          headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
	        }
	        return create$1(init, {
	          body: createPropertyDescriptor$1(0, $toString$1(body)),
	          headers: createPropertyDescriptor$1(0, headers)
	        });
	      }
	    } return init;
	  };

	  if (isCallable$3(nativeFetch)) {
	    $$g({ global: true, enumerable: true, dontCallGetSet: true, forced: true }, {
	      fetch: function fetch(input /* , init */) {
	        return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
	      }
	    });
	  }

	  if (isCallable$3(NativeRequest)) {
	    var RequestConstructor = function Request(input /* , init */) {
	      anInstance$3(this, RequestPrototype);
	      return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
	    };

	    RequestPrototype.constructor = RequestConstructor;
	    RequestConstructor.prototype = RequestPrototype;

	    $$g({ global: true, constructor: true, dontCallGetSet: true, forced: true }, {
	      Request: RequestConstructor
	    });
	  }
	}

	var web_urlSearchParams_constructor = {
	  URLSearchParams: URLSearchParamsConstructor,
	  getState: getInternalParamsState
	};

	// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

	var $$f = _export;
	var DESCRIPTORS$6 = descriptors;
	var USE_NATIVE_URL = urlConstructorDetection;
	var globalThis$h = globalThis_1;
	var bind$4 = functionBindContext;
	var uncurryThis$h = functionUncurryThis;
	var defineBuiltIn$4 = defineBuiltIn$f;
	var defineBuiltInAccessor$5 = defineBuiltInAccessor$e;
	var anInstance$2 = anInstance$a;
	var hasOwn$4 = hasOwnProperty_1;
	var assign = objectAssign;
	var arrayFrom = arrayFrom$1;
	var arraySlice$1 = arraySlice$7;
	var codeAt = stringMultibyte.codeAt;
	var toASCII = stringPunycodeToAscii;
	var $toString = toString$m;
	var setToStringTag$1 = setToStringTag$9;
	var validateArgumentsLength$3 = validateArgumentsLength$8;
	var URLSearchParamsModule = web_urlSearchParams_constructor;
	var InternalStateModule$4 = internalState;

	var setInternalState$3 = InternalStateModule$4.set;
	var getInternalURLState = InternalStateModule$4.getterFor('URL');
	var URLSearchParams$1 = URLSearchParamsModule.URLSearchParams;
	var getInternalSearchParamsState = URLSearchParamsModule.getState;

	var NativeURL = globalThis$h.URL;
	var TypeError$4 = globalThis$h.TypeError;
	var parseInt$1 = globalThis$h.parseInt;
	var floor$2 = Math.floor;
	var pow$1 = Math.pow;
	var charAt = uncurryThis$h(''.charAt);
	var exec = uncurryThis$h(/./.exec);
	var join$1 = uncurryThis$h([].join);
	var numberToString = uncurryThis$h(1.0.toString);
	var pop = uncurryThis$h([].pop);
	var push$5 = uncurryThis$h([].push);
	var replace = uncurryThis$h(''.replace);
	var shift = uncurryThis$h([].shift);
	var split = uncurryThis$h(''.split);
	var stringSlice$1 = uncurryThis$h(''.slice);
	var toLowerCase = uncurryThis$h(''.toLowerCase);
	var unshift = uncurryThis$h([].unshift);

	var INVALID_AUTHORITY = 'Invalid authority';
	var INVALID_SCHEME = 'Invalid scheme';
	var INVALID_HOST = 'Invalid host';
	var INVALID_PORT = 'Invalid port';

	var ALPHA = /[a-z]/i;
	// eslint-disable-next-line regexp/no-obscure-range -- safe
	var ALPHANUMERIC = /[\d+-.a-z]/i;
	var DIGIT = /\d/;
	var HEX_START = /^0x/i;
	var OCT = /^[0-7]+$/;
	var DEC = /^\d+$/;
	var HEX = /^[\da-f]+$/i;
	/* eslint-disable regexp/no-control-character -- safe */
	var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
	var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
	var LEADING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+/;
	var TRAILING_C0_CONTROL_OR_SPACE = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/;
	var TAB_AND_NEW_LINE = /[\t\n\r]/g;
	/* eslint-enable regexp/no-control-character -- safe */
	var EOF;

	// https://url.spec.whatwg.org/#ipv4-number-parser
	var parseIPv4 = function (input) {
	  var parts = split(input, '.');
	  var partsLength, numbers, index, part, radix, number, ipv4;
	  if (parts.length && parts[parts.length - 1] === '') {
	    parts.length--;
	  }
	  partsLength = parts.length;
	  if (partsLength > 4) return input;
	  numbers = [];
	  for (index = 0; index < partsLength; index++) {
	    part = parts[index];
	    if (part === '') return input;
	    radix = 10;
	    if (part.length > 1 && charAt(part, 0) === '0') {
	      radix = exec(HEX_START, part) ? 16 : 8;
	      part = stringSlice$1(part, radix === 8 ? 1 : 2);
	    }
	    if (part === '') {
	      number = 0;
	    } else {
	      if (!exec(radix === 10 ? DEC : radix === 8 ? OCT : HEX, part)) return input;
	      number = parseInt$1(part, radix);
	    }
	    push$5(numbers, number);
	  }
	  for (index = 0; index < partsLength; index++) {
	    number = numbers[index];
	    if (index === partsLength - 1) {
	      if (number >= pow$1(256, 5 - partsLength)) return null;
	    } else if (number > 255) return null;
	  }
	  ipv4 = pop(numbers);
	  for (index = 0; index < numbers.length; index++) {
	    ipv4 += numbers[index] * pow$1(256, 3 - index);
	  }
	  return ipv4;
	};

	// https://url.spec.whatwg.org/#concept-ipv6-parser
	// eslint-disable-next-line max-statements -- TODO
	var parseIPv6 = function (input) {
	  var address = [0, 0, 0, 0, 0, 0, 0, 0];
	  var pieceIndex = 0;
	  var compress = null;
	  var pointer = 0;
	  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

	  var chr = function () {
	    return charAt(input, pointer);
	  };

	  if (chr() === ':') {
	    if (charAt(input, 1) !== ':') return;
	    pointer += 2;
	    pieceIndex++;
	    compress = pieceIndex;
	  }
	  while (chr()) {
	    if (pieceIndex === 8) return;
	    if (chr() === ':') {
	      if (compress !== null) return;
	      pointer++;
	      pieceIndex++;
	      compress = pieceIndex;
	      continue;
	    }
	    value = length = 0;
	    while (length < 4 && exec(HEX, chr())) {
	      value = value * 16 + parseInt$1(chr(), 16);
	      pointer++;
	      length++;
	    }
	    if (chr() === '.') {
	      if (length === 0) return;
	      pointer -= length;
	      if (pieceIndex > 6) return;
	      numbersSeen = 0;
	      while (chr()) {
	        ipv4Piece = null;
	        if (numbersSeen > 0) {
	          if (chr() === '.' && numbersSeen < 4) pointer++;
	          else return;
	        }
	        if (!exec(DIGIT, chr())) return;
	        while (exec(DIGIT, chr())) {
	          number = parseInt$1(chr(), 10);
	          if (ipv4Piece === null) ipv4Piece = number;
	          else if (ipv4Piece === 0) return;
	          else ipv4Piece = ipv4Piece * 10 + number;
	          if (ipv4Piece > 255) return;
	          pointer++;
	        }
	        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
	        numbersSeen++;
	        if (numbersSeen === 2 || numbersSeen === 4) pieceIndex++;
	      }
	      if (numbersSeen !== 4) return;
	      break;
	    } else if (chr() === ':') {
	      pointer++;
	      if (!chr()) return;
	    } else if (chr()) return;
	    address[pieceIndex++] = value;
	  }
	  if (compress !== null) {
	    swaps = pieceIndex - compress;
	    pieceIndex = 7;
	    while (pieceIndex !== 0 && swaps > 0) {
	      swap = address[pieceIndex];
	      address[pieceIndex--] = address[compress + swaps - 1];
	      address[compress + --swaps] = swap;
	    }
	  } else if (pieceIndex !== 8) return;
	  return address;
	};

	var findLongestZeroSequence = function (ipv6) {
	  var maxIndex = null;
	  var maxLength = 1;
	  var currStart = null;
	  var currLength = 0;
	  var index = 0;
	  for (; index < 8; index++) {
	    if (ipv6[index] !== 0) {
	      if (currLength > maxLength) {
	        maxIndex = currStart;
	        maxLength = currLength;
	      }
	      currStart = null;
	      currLength = 0;
	    } else {
	      if (currStart === null) currStart = index;
	      ++currLength;
	    }
	  }
	  return currLength > maxLength ? currStart : maxIndex;
	};

	// https://url.spec.whatwg.org/#host-serializing
	var serializeHost = function (host) {
	  var result, index, compress, ignore0;

	  // ipv4
	  if (typeof host == 'number') {
	    result = [];
	    for (index = 0; index < 4; index++) {
	      unshift(result, host % 256);
	      host = floor$2(host / 256);
	    }
	    return join$1(result, '.');
	  }

	  // ipv6
	  if (typeof host == 'object') {
	    result = '';
	    compress = findLongestZeroSequence(host);
	    for (index = 0; index < 8; index++) {
	      if (ignore0 && host[index] === 0) continue;
	      if (ignore0) ignore0 = false;
	      if (compress === index) {
	        result += index ? ':' : '::';
	        ignore0 = true;
	      } else {
	        result += numberToString(host[index], 16);
	        if (index < 7) result += ':';
	      }
	    }
	    return '[' + result + ']';
	  }

	  return host;
	};

	var C0ControlPercentEncodeSet = {};
	var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
	  ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1
	});
	var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
	  '#': 1, '?': 1, '{': 1, '}': 1
	});
	var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
	  '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1
	});

	var percentEncode = function (chr, set) {
	  var code = codeAt(chr, 0);
	  return code > 0x20 && code < 0x7F && !hasOwn$4(set, chr) ? chr : encodeURIComponent(chr);
	};

	// https://url.spec.whatwg.org/#special-scheme
	var specialSchemes = {
	  ftp: 21,
	  file: null,
	  http: 80,
	  https: 443,
	  ws: 80,
	  wss: 443
	};

	// https://url.spec.whatwg.org/#windows-drive-letter
	var isWindowsDriveLetter = function (string, normalized) {
	  var second;
	  return string.length === 2 && exec(ALPHA, charAt(string, 0))
	    && ((second = charAt(string, 1)) === ':' || (!normalized && second === '|'));
	};

	// https://url.spec.whatwg.org/#start-with-a-windows-drive-letter
	var startsWithWindowsDriveLetter = function (string) {
	  var third;
	  return string.length > 1 && isWindowsDriveLetter(stringSlice$1(string, 0, 2)) && (
	    string.length === 2 ||
	    ((third = charAt(string, 2)) === '/' || third === '\\' || third === '?' || third === '#')
	  );
	};

	// https://url.spec.whatwg.org/#single-dot-path-segment
	var isSingleDot = function (segment) {
	  return segment === '.' || toLowerCase(segment) === '%2e';
	};

	// https://url.spec.whatwg.org/#double-dot-path-segment
	var isDoubleDot = function (segment) {
	  segment = toLowerCase(segment);
	  return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
	};

	// States:
	var SCHEME_START = {};
	var SCHEME = {};
	var NO_SCHEME = {};
	var SPECIAL_RELATIVE_OR_AUTHORITY = {};
	var PATH_OR_AUTHORITY = {};
	var RELATIVE = {};
	var RELATIVE_SLASH = {};
	var SPECIAL_AUTHORITY_SLASHES = {};
	var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
	var AUTHORITY = {};
	var HOST = {};
	var HOSTNAME = {};
	var PORT = {};
	var FILE = {};
	var FILE_SLASH = {};
	var FILE_HOST = {};
	var PATH_START = {};
	var PATH = {};
	var CANNOT_BE_A_BASE_URL_PATH = {};
	var QUERY = {};
	var FRAGMENT = {};

	var URLState = function (url, isBase, base) {
	  var urlString = $toString(url);
	  var baseState, failure, searchParams;
	  if (isBase) {
	    failure = this.parse(urlString);
	    if (failure) throw new TypeError$4(failure);
	    this.searchParams = null;
	  } else {
	    if (base !== undefined) baseState = new URLState(base, true);
	    failure = this.parse(urlString, null, baseState);
	    if (failure) throw new TypeError$4(failure);
	    searchParams = getInternalSearchParamsState(new URLSearchParams$1());
	    searchParams.bindURL(this);
	    this.searchParams = searchParams;
	  }
	};

	URLState.prototype = {
	  type: 'URL',
	  // https://url.spec.whatwg.org/#url-parsing
	  // eslint-disable-next-line max-statements -- TODO
	  parse: function (input, stateOverride, base) {
	    var url = this;
	    var state = stateOverride || SCHEME_START;
	    var pointer = 0;
	    var buffer = '';
	    var seenAt = false;
	    var seenBracket = false;
	    var seenPasswordToken = false;
	    var codePoints, chr, bufferCodePoints, failure;

	    input = $toString(input);

	    if (!stateOverride) {
	      url.scheme = '';
	      url.username = '';
	      url.password = '';
	      url.host = null;
	      url.port = null;
	      url.path = [];
	      url.query = null;
	      url.fragment = null;
	      url.cannotBeABaseURL = false;
	      input = replace(input, LEADING_C0_CONTROL_OR_SPACE, '');
	      input = replace(input, TRAILING_C0_CONTROL_OR_SPACE, '$1');
	    }

	    input = replace(input, TAB_AND_NEW_LINE, '');

	    codePoints = arrayFrom(input);

	    while (pointer <= codePoints.length) {
	      chr = codePoints[pointer];
	      switch (state) {
	        case SCHEME_START:
	          if (chr && exec(ALPHA, chr)) {
	            buffer += toLowerCase(chr);
	            state = SCHEME;
	          } else if (!stateOverride) {
	            state = NO_SCHEME;
	            continue;
	          } else return INVALID_SCHEME;
	          break;

	        case SCHEME:
	          if (chr && (exec(ALPHANUMERIC, chr) || chr === '+' || chr === '-' || chr === '.')) {
	            buffer += toLowerCase(chr);
	          } else if (chr === ':') {
	            if (stateOverride && (
	              (url.isSpecial() !== hasOwn$4(specialSchemes, buffer)) ||
	              (buffer === 'file' && (url.includesCredentials() || url.port !== null)) ||
	              (url.scheme === 'file' && !url.host)
	            )) return;
	            url.scheme = buffer;
	            if (stateOverride) {
	              if (url.isSpecial() && specialSchemes[url.scheme] === url.port) url.port = null;
	              return;
	            }
	            buffer = '';
	            if (url.scheme === 'file') {
	              state = FILE;
	            } else if (url.isSpecial() && base && base.scheme === url.scheme) {
	              state = SPECIAL_RELATIVE_OR_AUTHORITY;
	            } else if (url.isSpecial()) {
	              state = SPECIAL_AUTHORITY_SLASHES;
	            } else if (codePoints[pointer + 1] === '/') {
	              state = PATH_OR_AUTHORITY;
	              pointer++;
	            } else {
	              url.cannotBeABaseURL = true;
	              push$5(url.path, '');
	              state = CANNOT_BE_A_BASE_URL_PATH;
	            }
	          } else if (!stateOverride) {
	            buffer = '';
	            state = NO_SCHEME;
	            pointer = 0;
	            continue;
	          } else return INVALID_SCHEME;
	          break;

	        case NO_SCHEME:
	          if (!base || (base.cannotBeABaseURL && chr !== '#')) return INVALID_SCHEME;
	          if (base.cannotBeABaseURL && chr === '#') {
	            url.scheme = base.scheme;
	            url.path = arraySlice$1(base.path);
	            url.query = base.query;
	            url.fragment = '';
	            url.cannotBeABaseURL = true;
	            state = FRAGMENT;
	            break;
	          }
	          state = base.scheme === 'file' ? FILE : RELATIVE;
	          continue;

	        case SPECIAL_RELATIVE_OR_AUTHORITY:
	          if (chr === '/' && codePoints[pointer + 1] === '/') {
	            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
	            pointer++;
	          } else {
	            state = RELATIVE;
	            continue;
	          } break;

	        case PATH_OR_AUTHORITY:
	          if (chr === '/') {
	            state = AUTHORITY;
	            break;
	          } else {
	            state = PATH;
	            continue;
	          }

	        case RELATIVE:
	          url.scheme = base.scheme;
	          if (chr === EOF) {
	            url.username = base.username;
	            url.password = base.password;
	            url.host = base.host;
	            url.port = base.port;
	            url.path = arraySlice$1(base.path);
	            url.query = base.query;
	          } else if (chr === '/' || (chr === '\\' && url.isSpecial())) {
	            state = RELATIVE_SLASH;
	          } else if (chr === '?') {
	            url.username = base.username;
	            url.password = base.password;
	            url.host = base.host;
	            url.port = base.port;
	            url.path = arraySlice$1(base.path);
	            url.query = '';
	            state = QUERY;
	          } else if (chr === '#') {
	            url.username = base.username;
	            url.password = base.password;
	            url.host = base.host;
	            url.port = base.port;
	            url.path = arraySlice$1(base.path);
	            url.query = base.query;
	            url.fragment = '';
	            state = FRAGMENT;
	          } else {
	            url.username = base.username;
	            url.password = base.password;
	            url.host = base.host;
	            url.port = base.port;
	            url.path = arraySlice$1(base.path);
	            url.path.length--;
	            state = PATH;
	            continue;
	          } break;

	        case RELATIVE_SLASH:
	          if (url.isSpecial() && (chr === '/' || chr === '\\')) {
	            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
	          } else if (chr === '/') {
	            state = AUTHORITY;
	          } else {
	            url.username = base.username;
	            url.password = base.password;
	            url.host = base.host;
	            url.port = base.port;
	            state = PATH;
	            continue;
	          } break;

	        case SPECIAL_AUTHORITY_SLASHES:
	          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
	          if (chr !== '/' || charAt(buffer, pointer + 1) !== '/') continue;
	          pointer++;
	          break;

	        case SPECIAL_AUTHORITY_IGNORE_SLASHES:
	          if (chr !== '/' && chr !== '\\') {
	            state = AUTHORITY;
	            continue;
	          } break;

	        case AUTHORITY:
	          if (chr === '@') {
	            if (seenAt) buffer = '%40' + buffer;
	            seenAt = true;
	            bufferCodePoints = arrayFrom(buffer);
	            for (var i = 0; i < bufferCodePoints.length; i++) {
	              var codePoint = bufferCodePoints[i];
	              if (codePoint === ':' && !seenPasswordToken) {
	                seenPasswordToken = true;
	                continue;
	              }
	              var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
	              if (seenPasswordToken) url.password += encodedCodePoints;
	              else url.username += encodedCodePoints;
	            }
	            buffer = '';
	          } else if (
	            chr === EOF || chr === '/' || chr === '?' || chr === '#' ||
	            (chr === '\\' && url.isSpecial())
	          ) {
	            if (seenAt && buffer === '') return INVALID_AUTHORITY;
	            pointer -= arrayFrom(buffer).length + 1;
	            buffer = '';
	            state = HOST;
	          } else buffer += chr;
	          break;

	        case HOST:
	        case HOSTNAME:
	          if (stateOverride && url.scheme === 'file') {
	            state = FILE_HOST;
	            continue;
	          } else if (chr === ':' && !seenBracket) {
	            if (buffer === '') return INVALID_HOST;
	            failure = url.parseHost(buffer);
	            if (failure) return failure;
	            buffer = '';
	            state = PORT;
	            if (stateOverride === HOSTNAME) return;
	          } else if (
	            chr === EOF || chr === '/' || chr === '?' || chr === '#' ||
	            (chr === '\\' && url.isSpecial())
	          ) {
	            if (url.isSpecial() && buffer === '') return INVALID_HOST;
	            if (stateOverride && buffer === '' && (url.includesCredentials() || url.port !== null)) return;
	            failure = url.parseHost(buffer);
	            if (failure) return failure;
	            buffer = '';
	            state = PATH_START;
	            if (stateOverride) return;
	            continue;
	          } else {
	            if (chr === '[') seenBracket = true;
	            else if (chr === ']') seenBracket = false;
	            buffer += chr;
	          } break;

	        case PORT:
	          if (exec(DIGIT, chr)) {
	            buffer += chr;
	          } else if (
	            chr === EOF || chr === '/' || chr === '?' || chr === '#' ||
	            (chr === '\\' && url.isSpecial()) ||
	            stateOverride
	          ) {
	            if (buffer !== '') {
	              var port = parseInt$1(buffer, 10);
	              if (port > 0xFFFF) return INVALID_PORT;
	              url.port = (url.isSpecial() && port === specialSchemes[url.scheme]) ? null : port;
	              buffer = '';
	            }
	            if (stateOverride) return;
	            state = PATH_START;
	            continue;
	          } else return INVALID_PORT;
	          break;

	        case FILE:
	          url.scheme = 'file';
	          if (chr === '/' || chr === '\\') state = FILE_SLASH;
	          else if (base && base.scheme === 'file') {
	            switch (chr) {
	              case EOF:
	                url.host = base.host;
	                url.path = arraySlice$1(base.path);
	                url.query = base.query;
	                break;
	              case '?':
	                url.host = base.host;
	                url.path = arraySlice$1(base.path);
	                url.query = '';
	                state = QUERY;
	                break;
	              case '#':
	                url.host = base.host;
	                url.path = arraySlice$1(base.path);
	                url.query = base.query;
	                url.fragment = '';
	                state = FRAGMENT;
	                break;
	              default:
	                if (!startsWithWindowsDriveLetter(join$1(arraySlice$1(codePoints, pointer), ''))) {
	                  url.host = base.host;
	                  url.path = arraySlice$1(base.path);
	                  url.shortenPath();
	                }
	                state = PATH;
	                continue;
	            }
	          } else {
	            state = PATH;
	            continue;
	          } break;

	        case FILE_SLASH:
	          if (chr === '/' || chr === '\\') {
	            state = FILE_HOST;
	            break;
	          }
	          if (base && base.scheme === 'file' && !startsWithWindowsDriveLetter(join$1(arraySlice$1(codePoints, pointer), ''))) {
	            if (isWindowsDriveLetter(base.path[0], true)) push$5(url.path, base.path[0]);
	            else url.host = base.host;
	          }
	          state = PATH;
	          continue;

	        case FILE_HOST:
	          if (chr === EOF || chr === '/' || chr === '\\' || chr === '?' || chr === '#') {
	            if (!stateOverride && isWindowsDriveLetter(buffer)) {
	              state = PATH;
	            } else if (buffer === '') {
	              url.host = '';
	              if (stateOverride) return;
	              state = PATH_START;
	            } else {
	              failure = url.parseHost(buffer);
	              if (failure) return failure;
	              if (url.host === 'localhost') url.host = '';
	              if (stateOverride) return;
	              buffer = '';
	              state = PATH_START;
	            } continue;
	          } else buffer += chr;
	          break;

	        case PATH_START:
	          if (url.isSpecial()) {
	            state = PATH;
	            if (chr !== '/' && chr !== '\\') continue;
	          } else if (!stateOverride && chr === '?') {
	            url.query = '';
	            state = QUERY;
	          } else if (!stateOverride && chr === '#') {
	            url.fragment = '';
	            state = FRAGMENT;
	          } else if (chr !== EOF) {
	            state = PATH;
	            if (chr !== '/') continue;
	          } break;

	        case PATH:
	          if (
	            chr === EOF || chr === '/' ||
	            (chr === '\\' && url.isSpecial()) ||
	            (!stateOverride && (chr === '?' || chr === '#'))
	          ) {
	            if (isDoubleDot(buffer)) {
	              url.shortenPath();
	              if (chr !== '/' && !(chr === '\\' && url.isSpecial())) {
	                push$5(url.path, '');
	              }
	            } else if (isSingleDot(buffer)) {
	              if (chr !== '/' && !(chr === '\\' && url.isSpecial())) {
	                push$5(url.path, '');
	              }
	            } else {
	              if (url.scheme === 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
	                if (url.host) url.host = '';
	                buffer = charAt(buffer, 0) + ':'; // normalize windows drive letter
	              }
	              push$5(url.path, buffer);
	            }
	            buffer = '';
	            if (url.scheme === 'file' && (chr === EOF || chr === '?' || chr === '#')) {
	              while (url.path.length > 1 && url.path[0] === '') {
	                shift(url.path);
	              }
	            }
	            if (chr === '?') {
	              url.query = '';
	              state = QUERY;
	            } else if (chr === '#') {
	              url.fragment = '';
	              state = FRAGMENT;
	            }
	          } else {
	            buffer += percentEncode(chr, pathPercentEncodeSet);
	          } break;

	        case CANNOT_BE_A_BASE_URL_PATH:
	          if (chr === '?') {
	            url.query = '';
	            state = QUERY;
	          } else if (chr === '#') {
	            url.fragment = '';
	            state = FRAGMENT;
	          } else if (chr !== EOF) {
	            url.path[0] += percentEncode(chr, C0ControlPercentEncodeSet);
	          } break;

	        case QUERY:
	          if (!stateOverride && chr === '#') {
	            url.fragment = '';
	            state = FRAGMENT;
	          } else if (chr !== EOF) {
	            if (chr === "'" && url.isSpecial()) url.query += '%27';
	            else if (chr === '#') url.query += '%23';
	            else url.query += percentEncode(chr, C0ControlPercentEncodeSet);
	          } break;

	        case FRAGMENT:
	          if (chr !== EOF) url.fragment += percentEncode(chr, fragmentPercentEncodeSet);
	          break;
	      }

	      pointer++;
	    }
	  },
	  // https://url.spec.whatwg.org/#host-parsing
	  parseHost: function (input) {
	    var result, codePoints, index;
	    if (charAt(input, 0) === '[') {
	      if (charAt(input, input.length - 1) !== ']') return INVALID_HOST;
	      result = parseIPv6(stringSlice$1(input, 1, -1));
	      if (!result) return INVALID_HOST;
	      this.host = result;
	    // opaque host
	    } else if (!this.isSpecial()) {
	      if (exec(FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT, input)) return INVALID_HOST;
	      result = '';
	      codePoints = arrayFrom(input);
	      for (index = 0; index < codePoints.length; index++) {
	        result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
	      }
	      this.host = result;
	    } else {
	      input = toASCII(input);
	      if (exec(FORBIDDEN_HOST_CODE_POINT, input)) return INVALID_HOST;
	      result = parseIPv4(input);
	      if (result === null) return INVALID_HOST;
	      this.host = result;
	    }
	  },
	  // https://url.spec.whatwg.org/#cannot-have-a-username-password-port
	  cannotHaveUsernamePasswordPort: function () {
	    return !this.host || this.cannotBeABaseURL || this.scheme === 'file';
	  },
	  // https://url.spec.whatwg.org/#include-credentials
	  includesCredentials: function () {
	    return this.username !== '' || this.password !== '';
	  },
	  // https://url.spec.whatwg.org/#is-special
	  isSpecial: function () {
	    return hasOwn$4(specialSchemes, this.scheme);
	  },
	  // https://url.spec.whatwg.org/#shorten-a-urls-path
	  shortenPath: function () {
	    var path = this.path;
	    var pathSize = path.length;
	    if (pathSize && (this.scheme !== 'file' || pathSize !== 1 || !isWindowsDriveLetter(path[0], true))) {
	      path.length--;
	    }
	  },
	  // https://url.spec.whatwg.org/#concept-url-serializer
	  serialize: function () {
	    var url = this;
	    var scheme = url.scheme;
	    var username = url.username;
	    var password = url.password;
	    var host = url.host;
	    var port = url.port;
	    var path = url.path;
	    var query = url.query;
	    var fragment = url.fragment;
	    var output = scheme + ':';
	    if (host !== null) {
	      output += '//';
	      if (url.includesCredentials()) {
	        output += username + (password ? ':' + password : '') + '@';
	      }
	      output += serializeHost(host);
	      if (port !== null) output += ':' + port;
	    } else if (scheme === 'file') output += '//';
	    output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + join$1(path, '/') : '';
	    if (query !== null) output += '?' + query;
	    if (fragment !== null) output += '#' + fragment;
	    return output;
	  },
	  // https://url.spec.whatwg.org/#dom-url-href
	  setHref: function (href) {
	    var failure = this.parse(href);
	    if (failure) throw new TypeError$4(failure);
	    this.searchParams.update();
	  },
	  // https://url.spec.whatwg.org/#dom-url-origin
	  getOrigin: function () {
	    var scheme = this.scheme;
	    var port = this.port;
	    if (scheme === 'blob') try {
	      return new URLConstructor(scheme.path[0]).origin;
	    } catch (error) {
	      return 'null';
	    }
	    if (scheme === 'file' || !this.isSpecial()) return 'null';
	    return scheme + '://' + serializeHost(this.host) + (port !== null ? ':' + port : '');
	  },
	  // https://url.spec.whatwg.org/#dom-url-protocol
	  getProtocol: function () {
	    return this.scheme + ':';
	  },
	  setProtocol: function (protocol) {
	    this.parse($toString(protocol) + ':', SCHEME_START);
	  },
	  // https://url.spec.whatwg.org/#dom-url-username
	  getUsername: function () {
	    return this.username;
	  },
	  setUsername: function (username) {
	    var codePoints = arrayFrom($toString(username));
	    if (this.cannotHaveUsernamePasswordPort()) return;
	    this.username = '';
	    for (var i = 0; i < codePoints.length; i++) {
	      this.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
	    }
	  },
	  // https://url.spec.whatwg.org/#dom-url-password
	  getPassword: function () {
	    return this.password;
	  },
	  setPassword: function (password) {
	    var codePoints = arrayFrom($toString(password));
	    if (this.cannotHaveUsernamePasswordPort()) return;
	    this.password = '';
	    for (var i = 0; i < codePoints.length; i++) {
	      this.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
	    }
	  },
	  // https://url.spec.whatwg.org/#dom-url-host
	  getHost: function () {
	    var host = this.host;
	    var port = this.port;
	    return host === null ? ''
	      : port === null ? serializeHost(host)
	      : serializeHost(host) + ':' + port;
	  },
	  setHost: function (host) {
	    if (this.cannotBeABaseURL) return;
	    this.parse(host, HOST);
	  },
	  // https://url.spec.whatwg.org/#dom-url-hostname
	  getHostname: function () {
	    var host = this.host;
	    return host === null ? '' : serializeHost(host);
	  },
	  setHostname: function (hostname) {
	    if (this.cannotBeABaseURL) return;
	    this.parse(hostname, HOSTNAME);
	  },
	  // https://url.spec.whatwg.org/#dom-url-port
	  getPort: function () {
	    var port = this.port;
	    return port === null ? '' : $toString(port);
	  },
	  setPort: function (port) {
	    if (this.cannotHaveUsernamePasswordPort()) return;
	    port = $toString(port);
	    if (port === '') this.port = null;
	    else this.parse(port, PORT);
	  },
	  // https://url.spec.whatwg.org/#dom-url-pathname
	  getPathname: function () {
	    var path = this.path;
	    return this.cannotBeABaseURL ? path[0] : path.length ? '/' + join$1(path, '/') : '';
	  },
	  setPathname: function (pathname) {
	    if (this.cannotBeABaseURL) return;
	    this.path = [];
	    this.parse(pathname, PATH_START);
	  },
	  // https://url.spec.whatwg.org/#dom-url-search
	  getSearch: function () {
	    var query = this.query;
	    return query ? '?' + query : '';
	  },
	  setSearch: function (search) {
	    search = $toString(search);
	    if (search === '') {
	      this.query = null;
	    } else {
	      if (charAt(search, 0) === '?') search = stringSlice$1(search, 1);
	      this.query = '';
	      this.parse(search, QUERY);
	    }
	    this.searchParams.update();
	  },
	  // https://url.spec.whatwg.org/#dom-url-searchparams
	  getSearchParams: function () {
	    return this.searchParams.facade;
	  },
	  // https://url.spec.whatwg.org/#dom-url-hash
	  getHash: function () {
	    var fragment = this.fragment;
	    return fragment ? '#' + fragment : '';
	  },
	  setHash: function (hash) {
	    hash = $toString(hash);
	    if (hash === '') {
	      this.fragment = null;
	      return;
	    }
	    if (charAt(hash, 0) === '#') hash = stringSlice$1(hash, 1);
	    this.fragment = '';
	    this.parse(hash, FRAGMENT);
	  },
	  update: function () {
	    this.query = this.searchParams.serialize() || null;
	  }
	};

	// `URL` constructor
	// https://url.spec.whatwg.org/#url-class
	var URLConstructor = function URL(url /* , base */) {
	  var that = anInstance$2(this, URLPrototype);
	  var base = validateArgumentsLength$3(arguments.length, 1) > 1 ? arguments[1] : undefined;
	  var state = setInternalState$3(that, new URLState(url, false, base));
	  if (!DESCRIPTORS$6) {
	    that.href = state.serialize();
	    that.origin = state.getOrigin();
	    that.protocol = state.getProtocol();
	    that.username = state.getUsername();
	    that.password = state.getPassword();
	    that.host = state.getHost();
	    that.hostname = state.getHostname();
	    that.port = state.getPort();
	    that.pathname = state.getPathname();
	    that.search = state.getSearch();
	    that.searchParams = state.getSearchParams();
	    that.hash = state.getHash();
	  }
	};

	var URLPrototype = URLConstructor.prototype;

	var accessorDescriptor = function (getter, setter) {
	  return {
	    get: function () {
	      return getInternalURLState(this)[getter]();
	    },
	    set: setter && function (value) {
	      return getInternalURLState(this)[setter](value);
	    },
	    configurable: true,
	    enumerable: true
	  };
	};

	if (DESCRIPTORS$6) {
	  // `URL.prototype.href` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-href
	  defineBuiltInAccessor$5(URLPrototype, 'href', accessorDescriptor('serialize', 'setHref'));
	  // `URL.prototype.origin` getter
	  // https://url.spec.whatwg.org/#dom-url-origin
	  defineBuiltInAccessor$5(URLPrototype, 'origin', accessorDescriptor('getOrigin'));
	  // `URL.prototype.protocol` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-protocol
	  defineBuiltInAccessor$5(URLPrototype, 'protocol', accessorDescriptor('getProtocol', 'setProtocol'));
	  // `URL.prototype.username` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-username
	  defineBuiltInAccessor$5(URLPrototype, 'username', accessorDescriptor('getUsername', 'setUsername'));
	  // `URL.prototype.password` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-password
	  defineBuiltInAccessor$5(URLPrototype, 'password', accessorDescriptor('getPassword', 'setPassword'));
	  // `URL.prototype.host` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-host
	  defineBuiltInAccessor$5(URLPrototype, 'host', accessorDescriptor('getHost', 'setHost'));
	  // `URL.prototype.hostname` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-hostname
	  defineBuiltInAccessor$5(URLPrototype, 'hostname', accessorDescriptor('getHostname', 'setHostname'));
	  // `URL.prototype.port` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-port
	  defineBuiltInAccessor$5(URLPrototype, 'port', accessorDescriptor('getPort', 'setPort'));
	  // `URL.prototype.pathname` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-pathname
	  defineBuiltInAccessor$5(URLPrototype, 'pathname', accessorDescriptor('getPathname', 'setPathname'));
	  // `URL.prototype.search` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-search
	  defineBuiltInAccessor$5(URLPrototype, 'search', accessorDescriptor('getSearch', 'setSearch'));
	  // `URL.prototype.searchParams` getter
	  // https://url.spec.whatwg.org/#dom-url-searchparams
	  defineBuiltInAccessor$5(URLPrototype, 'searchParams', accessorDescriptor('getSearchParams'));
	  // `URL.prototype.hash` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-hash
	  defineBuiltInAccessor$5(URLPrototype, 'hash', accessorDescriptor('getHash', 'setHash'));
	}

	// `URL.prototype.toJSON` method
	// https://url.spec.whatwg.org/#dom-url-tojson
	defineBuiltIn$4(URLPrototype, 'toJSON', function toJSON() {
	  return getInternalURLState(this).serialize();
	}, { enumerable: true });

	// `URL.prototype.toString` method
	// https://url.spec.whatwg.org/#URL-stringification-behavior
	defineBuiltIn$4(URLPrototype, 'toString', function toString() {
	  return getInternalURLState(this).serialize();
	}, { enumerable: true });

	if (NativeURL) {
	  var nativeCreateObjectURL = NativeURL.createObjectURL;
	  var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
	  // `URL.createObjectURL` method
	  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
	  if (nativeCreateObjectURL) defineBuiltIn$4(URLConstructor, 'createObjectURL', bind$4(nativeCreateObjectURL, NativeURL));
	  // `URL.revokeObjectURL` method
	  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
	  if (nativeRevokeObjectURL) defineBuiltIn$4(URLConstructor, 'revokeObjectURL', bind$4(nativeRevokeObjectURL, NativeURL));
	}

	setToStringTag$1(URLConstructor, 'URL');

	$$f({ global: true, constructor: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS$6 }, {
	  URL: URLConstructor
	});

	var $$e = _export;
	var call$9 = functionCall;

	// `URL.prototype.toJSON` method
	// https://url.spec.whatwg.org/#dom-url-tojson
	$$e({ target: 'URL', proto: true, enumerable: true }, {
	  toJSON: function toJSON() {
	    return call$9(URL.prototype.toString, this);
	  }
	});

	var defineBuiltIn$3 = defineBuiltIn$f;
	var uncurryThis$g = functionUncurryThis;
	var toString$3 = toString$m;
	var validateArgumentsLength$2 = validateArgumentsLength$8;

	var $URLSearchParams$1 = URLSearchParams;
	var URLSearchParamsPrototype$2 = $URLSearchParams$1.prototype;
	var append = uncurryThis$g(URLSearchParamsPrototype$2.append);
	var $delete = uncurryThis$g(URLSearchParamsPrototype$2['delete']);
	var forEach$2 = uncurryThis$g(URLSearchParamsPrototype$2.forEach);
	var push$4 = uncurryThis$g([].push);
	var params$1 = new $URLSearchParams$1('a=1&a=2&b=3');

	params$1['delete']('a', 1);
	// `undefined` case is a Chromium 117 bug
	// https://bugs.chromium.org/p/v8/issues/detail?id=14222
	params$1['delete']('b', undefined);

	if (params$1 + '' !== 'a=2') {
	  defineBuiltIn$3(URLSearchParamsPrototype$2, 'delete', function (name /* , value */) {
	    var length = arguments.length;
	    var $value = length < 2 ? undefined : arguments[1];
	    if (length && $value === undefined) return $delete(this, name);
	    var entries = [];
	    forEach$2(this, function (v, k) { // also validates `this`
	      push$4(entries, { key: k, value: v });
	    });
	    validateArgumentsLength$2(length, 1);
	    var key = toString$3(name);
	    var value = toString$3($value);
	    var index = 0;
	    var dindex = 0;
	    var found = false;
	    var entriesLength = entries.length;
	    var entry;
	    while (index < entriesLength) {
	      entry = entries[index++];
	      if (found || entry.key === key) {
	        found = true;
	        $delete(this, entry.key);
	      } else dindex++;
	    }
	    while (dindex < entriesLength) {
	      entry = entries[dindex++];
	      if (!(entry.key === key && entry.value === value)) append(this, entry.key, entry.value);
	    }
	  }, { enumerable: true, unsafe: true });
	}

	var defineBuiltIn$2 = defineBuiltIn$f;
	var uncurryThis$f = functionUncurryThis;
	var toString$2 = toString$m;
	var validateArgumentsLength$1 = validateArgumentsLength$8;

	var $URLSearchParams = URLSearchParams;
	var URLSearchParamsPrototype$1 = $URLSearchParams.prototype;
	var getAll = uncurryThis$f(URLSearchParamsPrototype$1.getAll);
	var $has = uncurryThis$f(URLSearchParamsPrototype$1.has);
	var params = new $URLSearchParams('a=1');

	// `undefined` case is a Chromium 117 bug
	// https://bugs.chromium.org/p/v8/issues/detail?id=14222
	if (params.has('a', 2) || !params.has('a', undefined)) {
	  defineBuiltIn$2(URLSearchParamsPrototype$1, 'has', function has(name /* , value */) {
	    var length = arguments.length;
	    var $value = length < 2 ? undefined : arguments[1];
	    if (length && $value === undefined) return $has(this, name);
	    var values = getAll(this, name); // also validates `this`
	    validateArgumentsLength$1(length, 1);
	    var value = toString$2($value);
	    var index = 0;
	    while (index < values.length) {
	      if (values[index++] === value) return true;
	    } return false;
	  }, { enumerable: true, unsafe: true });
	}

	var DESCRIPTORS$5 = descriptors;
	var uncurryThis$e = functionUncurryThis;
	var defineBuiltInAccessor$4 = defineBuiltInAccessor$e;

	var URLSearchParamsPrototype = URLSearchParams.prototype;
	var forEach$1 = uncurryThis$e(URLSearchParamsPrototype.forEach);

	// `URLSearchParams.prototype.size` getter
	// https://github.com/whatwg/url/pull/734
	if (DESCRIPTORS$5 && !('size' in URLSearchParamsPrototype)) {
	  defineBuiltInAccessor$4(URLSearchParamsPrototype, 'size', {
	    get: function size() {
	      var count = 0;
	      forEach$1(this, function () { count++; });
	      return count;
	    },
	    configurable: true,
	    enumerable: true
	  });
	}

	var globalThis$g = globalThis_1;

	var path$1 = globalThis$g;

	var wellKnownSymbolWrapped = {};

	var wellKnownSymbol$4 = wellKnownSymbol$w;

	wellKnownSymbolWrapped.f = wellKnownSymbol$4;

	var path = path$1;
	var hasOwn$3 = hasOwnProperty_1;
	var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
	var defineProperty = objectDefineProperty.f;

	var wellKnownSymbolDefine = function (NAME) {
	  var Symbol = path.Symbol || (path.Symbol = {});
	  if (!hasOwn$3(Symbol, NAME)) defineProperty(Symbol, NAME, {
	    value: wrappedWellKnownSymbolModule.f(NAME)
	  });
	};

	var defineWellKnownSymbol$1 = wellKnownSymbolDefine;

	// `Symbol.asyncIterator` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.asynciterator
	defineWellKnownSymbol$1('asyncIterator');

	var defineWellKnownSymbol = wellKnownSymbolDefine;

	// `Symbol.species` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.species
	defineWellKnownSymbol('species');

	var isArray = isArray$8;
	var lengthOfArrayLike$c = lengthOfArrayLike$p;
	var doesNotExceedSafeInteger = doesNotExceedSafeInteger$5;
	var bind$3 = functionBindContext;

	// `FlattenIntoArray` abstract operation
	// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
	var flattenIntoArray$1 = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
	  var targetIndex = start;
	  var sourceIndex = 0;
	  var mapFn = mapper ? bind$3(mapper, thisArg) : false;
	  var element, elementLen;

	  while (sourceIndex < sourceLen) {
	    if (sourceIndex in source) {
	      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

	      if (depth > 0 && isArray(element)) {
	        elementLen = lengthOfArrayLike$c(element);
	        targetIndex = flattenIntoArray$1(target, original, element, elementLen, targetIndex, depth - 1) - 1;
	      } else {
	        doesNotExceedSafeInteger(targetIndex + 1);
	        target[targetIndex] = element;
	      }

	      targetIndex++;
	    }
	    sourceIndex++;
	  }
	  return targetIndex;
	};

	var flattenIntoArray_1 = flattenIntoArray$1;

	var $$d = _export;
	var flattenIntoArray = flattenIntoArray_1;
	var aCallable$3 = aCallable$o;
	var toObject$4 = toObject$h;
	var lengthOfArrayLike$b = lengthOfArrayLike$p;
	var arraySpeciesCreate = arraySpeciesCreate$4;

	// `Array.prototype.flatMap` method
	// https://tc39.es/ecma262/#sec-array.prototype.flatmap
	$$d({ target: 'Array', proto: true }, {
	  flatMap: function flatMap(callbackfn /* , thisArg */) {
	    var O = toObject$4(this);
	    var sourceLen = lengthOfArrayLike$b(O);
	    var A;
	    aCallable$3(callbackfn);
	    A = arraySpeciesCreate(O, 0);
	    A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    return A;
	  }
	});

	/* eslint-disable es/no-array-prototype-lastindexof -- safe */
	var apply = functionApply;
	var toIndexedObject$2 = toIndexedObject$b;
	var toIntegerOrInfinity$6 = toIntegerOrInfinity$d;
	var lengthOfArrayLike$a = lengthOfArrayLike$p;
	var arrayMethodIsStrict = arrayMethodIsStrict$5;

	var min$1 = Math.min;
	var $lastIndexOf = [].lastIndexOf;
	var NEGATIVE_ZERO = !!$lastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
	var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
	var FORCED = NEGATIVE_ZERO || !STRICT_METHOD;

	// `Array.prototype.lastIndexOf` method implementation
	// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
	var arrayLastIndexOf = FORCED ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
	  // convert -0 to +0
	  if (NEGATIVE_ZERO) return apply($lastIndexOf, this, arguments) || 0;
	  var O = toIndexedObject$2(this);
	  var length = lengthOfArrayLike$a(O);
	  if (length === 0) return -1;
	  var index = length - 1;
	  if (arguments.length > 1) index = min$1(index, toIntegerOrInfinity$6(arguments[1]));
	  if (index < 0) index = length + index;
	  for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
	  return -1;
	} : $lastIndexOf;

	var $$c = _export;
	var lastIndexOf = arrayLastIndexOf;

	// `Array.prototype.lastIndexOf` method
	// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
	// eslint-disable-next-line es/no-array-prototype-lastindexof -- required for testing
	$$c({ target: 'Array', proto: true, forced: lastIndexOf !== [].lastIndexOf }, {
	  lastIndexOf: lastIndexOf
	});

	var setSpecies$1 = setSpecies$5;

	// `Array[@@species]` getter
	// https://tc39.es/ecma262/#sec-get-array-@@species
	setSpecies$1('Array');

	// this method was added to unscopables after implementation
	// in popular engines, so it's moved to a separate module
	var addToUnscopables$1 = addToUnscopables$4;

	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables$1('flatMap');

	var globalThis$f = globalThis_1;
	var uncurryThisAccessor$1 = functionUncurryThisAccessor;
	var classof$6 = classofRaw$2;

	var ArrayBuffer$5 = globalThis$f.ArrayBuffer;
	var TypeError$3 = globalThis$f.TypeError;

	// Includes
	// - Perform ? RequireInternalSlot(O, [[ArrayBufferData]]).
	// - If IsSharedArrayBuffer(O) is true, throw a TypeError exception.
	var arrayBufferByteLength$2 = ArrayBuffer$5 && uncurryThisAccessor$1(ArrayBuffer$5.prototype, 'byteLength', 'get') || function (O) {
	  if (classof$6(O) !== 'ArrayBuffer') throw new TypeError$3('ArrayBuffer expected');
	  return O.byteLength;
	};

	var globalThis$e = globalThis_1;
	var uncurryThis$d = functionUncurryThisClause;
	var arrayBufferByteLength$1 = arrayBufferByteLength$2;

	var ArrayBuffer$4 = globalThis$e.ArrayBuffer;
	var ArrayBufferPrototype$4 = ArrayBuffer$4 && ArrayBuffer$4.prototype;
	var slice$2 = ArrayBufferPrototype$4 && uncurryThis$d(ArrayBufferPrototype$4.slice);

	var arrayBufferIsDetached = function (O) {
	  if (arrayBufferByteLength$1(O) !== 0) return false;
	  if (!slice$2) return false;
	  try {
	    slice$2(O, 0, 0);
	    return false;
	  } catch (error) {
	    return true;
	  }
	};

	var DESCRIPTORS$4 = descriptors;
	var defineBuiltInAccessor$3 = defineBuiltInAccessor$e;
	var isDetached$1 = arrayBufferIsDetached;

	var ArrayBufferPrototype$3 = ArrayBuffer.prototype;

	if (DESCRIPTORS$4 && !('detached' in ArrayBufferPrototype$3)) {
	  defineBuiltInAccessor$3(ArrayBufferPrototype$3, 'detached', {
	    configurable: true,
	    get: function detached() {
	      return isDetached$1(this);
	    }
	  });
	}

	var toIntegerOrInfinity$5 = toIntegerOrInfinity$d;
	var toLength$3 = toLength$a;

	var $RangeError$4 = RangeError;

	// `ToIndex` abstract operation
	// https://tc39.es/ecma262/#sec-toindex
	var toIndex$3 = function (it) {
	  if (it === undefined) return 0;
	  var number = toIntegerOrInfinity$5(it);
	  var length = toLength$3(number);
	  if (number !== length) throw new $RangeError$4('Wrong length or index');
	  return length;
	};

	var isDetached = arrayBufferIsDetached;

	var $TypeError$3 = TypeError;

	var arrayBufferNotDetached = function (it) {
	  if (isDetached(it)) throw new $TypeError$3('ArrayBuffer is detached');
	  return it;
	};

	var globalThis$d = globalThis_1;
	var IS_NODE = environmentIsNode;

	var getBuiltInNodeModule$1 = function (name) {
	  if (IS_NODE) {
	    try {
	      return globalThis$d.process.getBuiltinModule(name);
	    } catch (error) { /* empty */ }
	    try {
	      // eslint-disable-next-line no-new-func -- safe
	      return Function('return require("' + name + '")')();
	    } catch (error) { /* empty */ }
	  }
	};

	var globalThis$c = globalThis_1;
	var fails$a = fails$P;
	var V8$1 = environmentV8Version;
	var ENVIRONMENT = environment;

	var structuredClone$2 = globalThis$c.structuredClone;

	var structuredCloneProperTransfer = !!structuredClone$2 && !fails$a(function () {
	  // prevent V8 ArrayBufferDetaching protector cell invalidation and performance degradation
	  // https://github.com/zloirock/core-js/issues/679
	  if ((ENVIRONMENT === 'DENO' && V8$1 > 92) || (ENVIRONMENT === 'NODE' && V8$1 > 94) || (ENVIRONMENT === 'BROWSER' && V8$1 > 97)) return false;
	  var buffer = new ArrayBuffer(8);
	  var clone = structuredClone$2(buffer, { transfer: [buffer] });
	  return buffer.byteLength !== 0 || clone.byteLength !== 8;
	});

	var globalThis$b = globalThis_1;
	var getBuiltInNodeModule = getBuiltInNodeModule$1;
	var PROPER_STRUCTURED_CLONE_TRANSFER$2 = structuredCloneProperTransfer;

	var structuredClone$1 = globalThis$b.structuredClone;
	var $ArrayBuffer$1 = globalThis$b.ArrayBuffer;
	var $MessageChannel = globalThis$b.MessageChannel;
	var detach = false;
	var WorkerThreads, channel, buffer, $detach;

	if (PROPER_STRUCTURED_CLONE_TRANSFER$2) {
	  detach = function (transferable) {
	    structuredClone$1(transferable, { transfer: [transferable] });
	  };
	} else if ($ArrayBuffer$1) try {
	  if (!$MessageChannel) {
	    WorkerThreads = getBuiltInNodeModule('worker_threads');
	    if (WorkerThreads) $MessageChannel = WorkerThreads.MessageChannel;
	  }

	  if ($MessageChannel) {
	    channel = new $MessageChannel();
	    buffer = new $ArrayBuffer$1(2);

	    $detach = function (transferable) {
	      channel.port1.postMessage(null, [transferable]);
	    };

	    if (buffer.byteLength === 2) {
	      $detach(buffer);
	      if (buffer.byteLength === 0) detach = $detach;
	    }
	  }
	} catch (error) { /* empty */ }

	var detachTransferable$2 = detach;

	var globalThis$a = globalThis_1;
	var uncurryThis$c = functionUncurryThis;
	var uncurryThisAccessor = functionUncurryThisAccessor;
	var toIndex$2 = toIndex$3;
	var notDetached = arrayBufferNotDetached;
	var arrayBufferByteLength = arrayBufferByteLength$2;
	var detachTransferable$1 = detachTransferable$2;
	var PROPER_STRUCTURED_CLONE_TRANSFER$1 = structuredCloneProperTransfer;

	var structuredClone = globalThis$a.structuredClone;
	var ArrayBuffer$3 = globalThis$a.ArrayBuffer;
	var DataView$2 = globalThis$a.DataView;
	var min = Math.min;
	var ArrayBufferPrototype$2 = ArrayBuffer$3.prototype;
	var DataViewPrototype$1 = DataView$2.prototype;
	var slice$1 = uncurryThis$c(ArrayBufferPrototype$2.slice);
	var isResizable = uncurryThisAccessor(ArrayBufferPrototype$2, 'resizable', 'get');
	var maxByteLength = uncurryThisAccessor(ArrayBufferPrototype$2, 'maxByteLength', 'get');
	var getInt8 = uncurryThis$c(DataViewPrototype$1.getInt8);
	var setInt8 = uncurryThis$c(DataViewPrototype$1.setInt8);

	var arrayBufferTransfer = (PROPER_STRUCTURED_CLONE_TRANSFER$1 || detachTransferable$1) && function (arrayBuffer, newLength, preserveResizability) {
	  var byteLength = arrayBufferByteLength(arrayBuffer);
	  var newByteLength = newLength === undefined ? byteLength : toIndex$2(newLength);
	  var fixedLength = !isResizable || !isResizable(arrayBuffer);
	  var newBuffer;
	  notDetached(arrayBuffer);
	  if (PROPER_STRUCTURED_CLONE_TRANSFER$1) {
	    arrayBuffer = structuredClone(arrayBuffer, { transfer: [arrayBuffer] });
	    if (byteLength === newByteLength && (preserveResizability || fixedLength)) return arrayBuffer;
	  }
	  if (byteLength >= newByteLength && (!preserveResizability || fixedLength)) {
	    newBuffer = slice$1(arrayBuffer, 0, newByteLength);
	  } else {
	    var options = preserveResizability && !fixedLength && maxByteLength ? { maxByteLength: maxByteLength(arrayBuffer) } : undefined;
	    newBuffer = new ArrayBuffer$3(newByteLength, options);
	    var a = new DataView$2(arrayBuffer);
	    var b = new DataView$2(newBuffer);
	    var copyLength = min(newByteLength, byteLength);
	    for (var i = 0; i < copyLength; i++) setInt8(b, i, getInt8(a, i));
	  }
	  if (!PROPER_STRUCTURED_CLONE_TRANSFER$1) detachTransferable$1(arrayBuffer);
	  return newBuffer;
	};

	var $$b = _export;
	var $transfer$1 = arrayBufferTransfer;

	// `ArrayBuffer.prototype.transfer` method
	// https://tc39.es/proposal-arraybuffer-transfer/#sec-arraybuffer.prototype.transfer
	if ($transfer$1) $$b({ target: 'ArrayBuffer', proto: true }, {
	  transfer: function transfer() {
	    return $transfer$1(this, arguments.length ? arguments[0] : undefined, true);
	  }
	});

	var $$a = _export;
	var $transfer = arrayBufferTransfer;

	// `ArrayBuffer.prototype.transferToFixedLength` method
	// https://tc39.es/proposal-arraybuffer-transfer/#sec-arraybuffer.prototype.transfertofixedlength
	if ($transfer) $$a({ target: 'ArrayBuffer', proto: true }, {
	  transferToFixedLength: function transferToFixedLength() {
	    return $transfer(this, arguments.length ? arguments[0] : undefined, false);
	  }
	});

	var DESCRIPTORS$3 = descriptors;
	var fails$9 = fails$P;
	var uncurryThis$b = functionUncurryThis;
	var objectGetPrototypeOf = objectGetPrototypeOf$1;
	var objectKeys$1 = objectKeys$4;
	var toIndexedObject$1 = toIndexedObject$b;
	var $propertyIsEnumerable = objectPropertyIsEnumerable.f;

	var propertyIsEnumerable = uncurryThis$b($propertyIsEnumerable);
	var push$3 = uncurryThis$b([].push);

	// in some IE versions, `propertyIsEnumerable` returns incorrect result on integer keys
	// of `null` prototype objects
	var IE_BUG = DESCRIPTORS$3 && fails$9(function () {
	  // eslint-disable-next-line es/no-object-create -- safe
	  var O = Object.create(null);
	  O[2] = 2;
	  return !propertyIsEnumerable(O, 2);
	});

	// `Object.{ entries, values }` methods implementation
	var createMethod$1 = function (TO_ENTRIES) {
	  return function (it) {
	    var O = toIndexedObject$1(it);
	    var keys = objectKeys$1(O);
	    var IE_WORKAROUND = IE_BUG && objectGetPrototypeOf(O) === null;
	    var length = keys.length;
	    var i = 0;
	    var result = [];
	    var key;
	    while (length > i) {
	      key = keys[i++];
	      if (!DESCRIPTORS$3 || (IE_WORKAROUND ? key in O : propertyIsEnumerable(O, key))) {
	        push$3(result, TO_ENTRIES ? [key, O[key]] : O[key]);
	      }
	    }
	    return result;
	  };
	};

	var objectToArray = {
	  // `Object.entries` method
	  // https://tc39.es/ecma262/#sec-object.entries
	  entries: createMethod$1(true),
	  // `Object.values` method
	  // https://tc39.es/ecma262/#sec-object.values
	  values: createMethod$1(false)
	};

	var $$9 = _export;
	var $entries = objectToArray.entries;

	// `Object.entries` method
	// https://tc39.es/ecma262/#sec-object.entries
	$$9({ target: 'Object', stat: true }, {
	  entries: function entries(O) {
	    return $entries(O);
	  }
	});

	var $$8 = _export;
	var $values = objectToArray.values;

	// `Object.values` method
	// https://tc39.es/ecma262/#sec-object.values
	$$8({ target: 'Object', stat: true }, {
	  values: function values(O) {
	    return $values(O);
	  }
	});

	/* eslint-disable es/no-string-prototype-matchall -- safe */
	var $$7 = _export;
	var call$8 = functionCall;
	var uncurryThis$a = functionUncurryThisClause;
	var createIteratorConstructor = iteratorCreateConstructor;
	var createIterResultObject = createIterResultObject$6;
	var requireObjectCoercible$1 = requireObjectCoercible$e;
	var toLength$2 = toLength$a;
	var toString$1 = toString$m;
	var anObject$5 = anObject$y;
	var isNullOrUndefined$2 = isNullOrUndefined$e;
	var classof$5 = classofRaw$2;
	var isRegExp$1 = isRegexp;
	var getRegExpFlags$2 = regexpGetFlags;
	var getMethod$1 = getMethod$a;
	var defineBuiltIn$1 = defineBuiltIn$f;
	var fails$8 = fails$P;
	var wellKnownSymbol$3 = wellKnownSymbol$w;
	var speciesConstructor = speciesConstructor$3;
	var advanceStringIndex = advanceStringIndex$4;
	var regExpExec = regexpExecAbstract;
	var InternalStateModule$3 = internalState;
	var IS_PURE$2 = isPure;

	var MATCH_ALL = wellKnownSymbol$3('matchAll');
	var REGEXP_STRING = 'RegExp String';
	var REGEXP_STRING_ITERATOR = REGEXP_STRING + ' Iterator';
	var setInternalState$2 = InternalStateModule$3.set;
	var getInternalState$2 = InternalStateModule$3.getterFor(REGEXP_STRING_ITERATOR);
	var RegExpPrototype = RegExp.prototype;
	var $TypeError$2 = TypeError;
	var stringIndexOf = uncurryThis$a(''.indexOf);
	var nativeMatchAll = uncurryThis$a(''.matchAll);

	var WORKS_WITH_NON_GLOBAL_REGEX = !!nativeMatchAll && !fails$8(function () {
	  nativeMatchAll('a', /./);
	});

	var $RegExpStringIterator = createIteratorConstructor(function RegExpStringIterator(regexp, string, $global, fullUnicode) {
	  setInternalState$2(this, {
	    type: REGEXP_STRING_ITERATOR,
	    regexp: regexp,
	    string: string,
	    global: $global,
	    unicode: fullUnicode,
	    done: false
	  });
	}, REGEXP_STRING, function next() {
	  var state = getInternalState$2(this);
	  if (state.done) return createIterResultObject(undefined, true);
	  var R = state.regexp;
	  var S = state.string;
	  var match = regExpExec(R, S);
	  if (match === null) {
	    state.done = true;
	    return createIterResultObject(undefined, true);
	  }
	  if (state.global) {
	    if (toString$1(match[0]) === '') R.lastIndex = advanceStringIndex(S, toLength$2(R.lastIndex), state.unicode);
	    return createIterResultObject(match, false);
	  }
	  state.done = true;
	  return createIterResultObject(match, false);
	});

	var $matchAll = function (string) {
	  var R = anObject$5(this);
	  var S = toString$1(string);
	  var C = speciesConstructor(R, RegExp);
	  var flags = toString$1(getRegExpFlags$2(R));
	  var matcher, $global, fullUnicode;
	  matcher = new C(C === RegExp ? R.source : R, flags);
	  $global = !!~stringIndexOf(flags, 'g');
	  fullUnicode = !!~stringIndexOf(flags, 'u');
	  matcher.lastIndex = toLength$2(R.lastIndex);
	  return new $RegExpStringIterator(matcher, S, $global, fullUnicode);
	};

	// `String.prototype.matchAll` method
	// https://tc39.es/ecma262/#sec-string.prototype.matchall
	$$7({ target: 'String', proto: true, forced: WORKS_WITH_NON_GLOBAL_REGEX }, {
	  matchAll: function matchAll(regexp) {
	    var O = requireObjectCoercible$1(this);
	    var flags, S, matcher, rx;
	    if (!isNullOrUndefined$2(regexp)) {
	      if (isRegExp$1(regexp)) {
	        flags = toString$1(requireObjectCoercible$1(getRegExpFlags$2(regexp)));
	        if (!~stringIndexOf(flags, 'g')) throw new $TypeError$2('`.matchAll` does not allow non-global regexes');
	      }
	      if (WORKS_WITH_NON_GLOBAL_REGEX) return nativeMatchAll(O, regexp);
	      matcher = getMethod$1(regexp, MATCH_ALL);
	      if (matcher === undefined && IS_PURE$2 && classof$5(regexp) === 'RegExp') matcher = $matchAll;
	      if (matcher) return call$8(matcher, regexp, O);
	    } else if (WORKS_WITH_NON_GLOBAL_REGEX) return nativeMatchAll(O, regexp);
	    S = toString$1(O);
	    rx = new RegExp(regexp, 'g');
	    return rx[MATCH_ALL](S);
	  }
	});

	MATCH_ALL in RegExpPrototype || defineBuiltIn$1(RegExpPrototype, MATCH_ALL, $matchAll);

	var $$6 = _export;
	var call$7 = functionCall;
	var uncurryThis$9 = functionUncurryThis;
	var requireObjectCoercible = requireObjectCoercible$e;
	var isCallable$2 = isCallable$y;
	var isNullOrUndefined$1 = isNullOrUndefined$e;
	var isRegExp = isRegexp;
	var toString = toString$m;
	var getMethod = getMethod$a;
	var getRegExpFlags$1 = regexpGetFlags;
	var getSubstitution = getSubstitution$2;
	var wellKnownSymbol$2 = wellKnownSymbol$w;

	var REPLACE = wellKnownSymbol$2('replace');
	var $TypeError$1 = TypeError;
	var indexOf = uncurryThis$9(''.indexOf);
	uncurryThis$9(''.replace);
	var stringSlice = uncurryThis$9(''.slice);
	var max = Math.max;

	// `String.prototype.replaceAll` method
	// https://tc39.es/ecma262/#sec-string.prototype.replaceall
	$$6({ target: 'String', proto: true }, {
	  replaceAll: function replaceAll(searchValue, replaceValue) {
	    var O = requireObjectCoercible(this);
	    var IS_REG_EXP, flags, replacer, string, searchString, functionalReplace, searchLength, advanceBy, position, replacement;
	    var endOfLastMatch = 0;
	    var result = '';
	    if (!isNullOrUndefined$1(searchValue)) {
	      IS_REG_EXP = isRegExp(searchValue);
	      if (IS_REG_EXP) {
	        flags = toString(requireObjectCoercible(getRegExpFlags$1(searchValue)));
	        if (!~indexOf(flags, 'g')) throw new $TypeError$1('`.replaceAll` does not allow non-global regexes');
	      }
	      replacer = getMethod(searchValue, REPLACE);
	      if (replacer) return call$7(replacer, searchValue, O, replaceValue);
	    }
	    string = toString(O);
	    searchString = toString(searchValue);
	    functionalReplace = isCallable$2(replaceValue);
	    if (!functionalReplace) replaceValue = toString(replaceValue);
	    searchLength = searchString.length;
	    advanceBy = max(1, searchLength);
	    position = indexOf(string, searchString);
	    while (position !== -1) {
	      replacement = functionalReplace
	        ? toString(replaceValue(searchString, position, string))
	        : getSubstitution(searchString, string, position, [], undefined, replaceValue);
	      result += stringSlice(string, endOfLastMatch, position) + replacement;
	      endOfLastMatch = position + searchLength;
	      position = position + advanceBy > string.length ? -1 : indexOf(string, searchString, position + advanceBy);
	    }
	    if (endOfLastMatch < string.length) {
	      result += stringSlice(string, endOfLastMatch);
	    }
	    return result;
	  }
	});

	var typedArrayConstructor = {exports: {}};

	// eslint-disable-next-line es/no-typed-arrays -- safe
	var arrayBufferBasicDetection = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';

	var NATIVE_ARRAY_BUFFER$1 = arrayBufferBasicDetection;
	var DESCRIPTORS$2 = descriptors;
	var globalThis$9 = globalThis_1;
	var isCallable$1 = isCallable$y;
	var isObject$3 = isObject$r;
	var hasOwn$2 = hasOwnProperty_1;
	var classof$4 = classof$j;
	var tryToString = tryToString$6;
	var createNonEnumerableProperty$3 = createNonEnumerableProperty$f;
	var defineBuiltIn = defineBuiltIn$f;
	var defineBuiltInAccessor$2 = defineBuiltInAccessor$e;
	var isPrototypeOf$1 = objectIsPrototypeOf;
	var getPrototypeOf$1 = objectGetPrototypeOf$1;
	var setPrototypeOf$2 = objectSetPrototypeOf;
	var wellKnownSymbol$1 = wellKnownSymbol$w;
	var uid$1 = uid$5;
	var InternalStateModule$2 = internalState;

	var enforceInternalState$1 = InternalStateModule$2.enforce;
	var getInternalState$1 = InternalStateModule$2.get;
	var Int8Array$3 = globalThis$9.Int8Array;
	var Int8ArrayPrototype$1 = Int8Array$3 && Int8Array$3.prototype;
	var Uint8ClampedArray$1 = globalThis$9.Uint8ClampedArray;
	var Uint8ClampedArrayPrototype = Uint8ClampedArray$1 && Uint8ClampedArray$1.prototype;
	var TypedArray$1 = Int8Array$3 && getPrototypeOf$1(Int8Array$3);
	var TypedArrayPrototype$2 = Int8ArrayPrototype$1 && getPrototypeOf$1(Int8ArrayPrototype$1);
	var ObjectPrototype$1 = Object.prototype;
	var TypeError$2 = globalThis$9.TypeError;

	var TO_STRING_TAG = wellKnownSymbol$1('toStringTag');
	var TYPED_ARRAY_TAG$1 = uid$1('TYPED_ARRAY_TAG');
	var TYPED_ARRAY_CONSTRUCTOR = 'TypedArrayConstructor';
	// Fixing native typed arrays in Opera Presto crashes the browser, see #595
	var NATIVE_ARRAY_BUFFER_VIEWS$2 = NATIVE_ARRAY_BUFFER$1 && !!setPrototypeOf$2 && classof$4(globalThis$9.opera) !== 'Opera';
	var TYPED_ARRAY_TAG_REQUIRED = false;
	var NAME, Constructor, Prototype;

	var TypedArrayConstructorsList = {
	  Int8Array: 1,
	  Uint8Array: 1,
	  Uint8ClampedArray: 1,
	  Int16Array: 2,
	  Uint16Array: 2,
	  Int32Array: 4,
	  Uint32Array: 4,
	  Float32Array: 4,
	  Float64Array: 8
	};

	var BigIntArrayConstructorsList = {
	  BigInt64Array: 8,
	  BigUint64Array: 8
	};

	var isView = function isView(it) {
	  if (!isObject$3(it)) return false;
	  var klass = classof$4(it);
	  return klass === 'DataView'
	    || hasOwn$2(TypedArrayConstructorsList, klass)
	    || hasOwn$2(BigIntArrayConstructorsList, klass);
	};

	var getTypedArrayConstructor$3 = function (it) {
	  var proto = getPrototypeOf$1(it);
	  if (!isObject$3(proto)) return;
	  var state = getInternalState$1(proto);
	  return (state && hasOwn$2(state, TYPED_ARRAY_CONSTRUCTOR)) ? state[TYPED_ARRAY_CONSTRUCTOR] : getTypedArrayConstructor$3(proto);
	};

	var isTypedArray$1 = function (it) {
	  if (!isObject$3(it)) return false;
	  var klass = classof$4(it);
	  return hasOwn$2(TypedArrayConstructorsList, klass)
	    || hasOwn$2(BigIntArrayConstructorsList, klass);
	};

	var aTypedArray$a = function (it) {
	  if (isTypedArray$1(it)) return it;
	  throw new TypeError$2('Target is not a typed array');
	};

	var aTypedArrayConstructor$1 = function (C) {
	  if (isCallable$1(C) && (!setPrototypeOf$2 || isPrototypeOf$1(TypedArray$1, C))) return C;
	  throw new TypeError$2(tryToString(C) + ' is not a typed array constructor');
	};

	var exportTypedArrayMethod$b = function (KEY, property, forced, options) {
	  if (!DESCRIPTORS$2) return;
	  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
	    var TypedArrayConstructor = globalThis$9[ARRAY];
	    if (TypedArrayConstructor && hasOwn$2(TypedArrayConstructor.prototype, KEY)) try {
	      delete TypedArrayConstructor.prototype[KEY];
	    } catch (error) {
	      // old WebKit bug - some methods are non-configurable
	      try {
	        TypedArrayConstructor.prototype[KEY] = property;
	      } catch (error2) { /* empty */ }
	    }
	  }
	  if (!TypedArrayPrototype$2[KEY] || forced) {
	    defineBuiltIn(TypedArrayPrototype$2, KEY, forced ? property
	      : NATIVE_ARRAY_BUFFER_VIEWS$2 && Int8ArrayPrototype$1[KEY] || property, options);
	  }
	};

	var exportTypedArrayStaticMethod = function (KEY, property, forced) {
	  var ARRAY, TypedArrayConstructor;
	  if (!DESCRIPTORS$2) return;
	  if (setPrototypeOf$2) {
	    if (forced) for (ARRAY in TypedArrayConstructorsList) {
	      TypedArrayConstructor = globalThis$9[ARRAY];
	      if (TypedArrayConstructor && hasOwn$2(TypedArrayConstructor, KEY)) try {
	        delete TypedArrayConstructor[KEY];
	      } catch (error) { /* empty */ }
	    }
	    if (!TypedArray$1[KEY] || forced) {
	      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
	      try {
	        return defineBuiltIn(TypedArray$1, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS$2 && TypedArray$1[KEY] || property);
	      } catch (error) { /* empty */ }
	    } else return;
	  }
	  for (ARRAY in TypedArrayConstructorsList) {
	    TypedArrayConstructor = globalThis$9[ARRAY];
	    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
	      defineBuiltIn(TypedArrayConstructor, KEY, property);
	    }
	  }
	};

	for (NAME in TypedArrayConstructorsList) {
	  Constructor = globalThis$9[NAME];
	  Prototype = Constructor && Constructor.prototype;
	  if (Prototype) enforceInternalState$1(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
	  else NATIVE_ARRAY_BUFFER_VIEWS$2 = false;
	}

	for (NAME in BigIntArrayConstructorsList) {
	  Constructor = globalThis$9[NAME];
	  Prototype = Constructor && Constructor.prototype;
	  if (Prototype) enforceInternalState$1(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
	}

	// WebKit bug - typed arrays constructors prototype is Object.prototype
	if (!NATIVE_ARRAY_BUFFER_VIEWS$2 || !isCallable$1(TypedArray$1) || TypedArray$1 === Function.prototype) {
	  // eslint-disable-next-line no-shadow -- safe
	  TypedArray$1 = function TypedArray() {
	    throw new TypeError$2('Incorrect invocation');
	  };
	  if (NATIVE_ARRAY_BUFFER_VIEWS$2) for (NAME in TypedArrayConstructorsList) {
	    if (globalThis$9[NAME]) setPrototypeOf$2(globalThis$9[NAME], TypedArray$1);
	  }
	}

	if (!NATIVE_ARRAY_BUFFER_VIEWS$2 || !TypedArrayPrototype$2 || TypedArrayPrototype$2 === ObjectPrototype$1) {
	  TypedArrayPrototype$2 = TypedArray$1.prototype;
	  if (NATIVE_ARRAY_BUFFER_VIEWS$2) for (NAME in TypedArrayConstructorsList) {
	    if (globalThis$9[NAME]) setPrototypeOf$2(globalThis$9[NAME].prototype, TypedArrayPrototype$2);
	  }
	}

	// WebKit bug - one more object in Uint8ClampedArray prototype chain
	if (NATIVE_ARRAY_BUFFER_VIEWS$2 && getPrototypeOf$1(Uint8ClampedArrayPrototype) !== TypedArrayPrototype$2) {
	  setPrototypeOf$2(Uint8ClampedArrayPrototype, TypedArrayPrototype$2);
	}

	if (DESCRIPTORS$2 && !hasOwn$2(TypedArrayPrototype$2, TO_STRING_TAG)) {
	  TYPED_ARRAY_TAG_REQUIRED = true;
	  defineBuiltInAccessor$2(TypedArrayPrototype$2, TO_STRING_TAG, {
	    configurable: true,
	    get: function () {
	      return isObject$3(this) ? this[TYPED_ARRAY_TAG$1] : undefined;
	    }
	  });
	  for (NAME in TypedArrayConstructorsList) if (globalThis$9[NAME]) {
	    createNonEnumerableProperty$3(globalThis$9[NAME], TYPED_ARRAY_TAG$1, NAME);
	  }
	}

	var arrayBufferViewCore = {
	  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS$2,
	  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG$1,
	  aTypedArray: aTypedArray$a,
	  aTypedArrayConstructor: aTypedArrayConstructor$1,
	  exportTypedArrayMethod: exportTypedArrayMethod$b,
	  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
	  getTypedArrayConstructor: getTypedArrayConstructor$3,
	  isView: isView,
	  isTypedArray: isTypedArray$1,
	  TypedArray: TypedArray$1,
	  TypedArrayPrototype: TypedArrayPrototype$2
	};

	/* eslint-disable no-new, sonar/inconsistent-function-call -- required for testing */
	var globalThis$8 = globalThis_1;
	var fails$7 = fails$P;
	var checkCorrectnessOfIteration = checkCorrectnessOfIteration$4;
	var NATIVE_ARRAY_BUFFER_VIEWS$1 = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;

	var ArrayBuffer$2 = globalThis$8.ArrayBuffer;
	var Int8Array$2 = globalThis$8.Int8Array;

	var typedArrayConstructorsRequireWrappers = !NATIVE_ARRAY_BUFFER_VIEWS$1 || !fails$7(function () {
	  Int8Array$2(1);
	}) || !fails$7(function () {
	  new Int8Array$2(-1);
	}) || !checkCorrectnessOfIteration(function (iterable) {
	  new Int8Array$2();
	  new Int8Array$2(null);
	  new Int8Array$2(1.5);
	  new Int8Array$2(iterable);
	}, true) || fails$7(function () {
	  // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
	  return new Int8Array$2(new ArrayBuffer$2(2), 1, undefined).length !== 1;
	});

	// `Math.sign` method implementation
	// https://tc39.es/ecma262/#sec-math.sign
	// eslint-disable-next-line es/no-math-sign -- safe
	var mathSign = Math.sign || function sign(x) {
	  var n = +x;
	  // eslint-disable-next-line no-self-compare -- NaN check
	  return n === 0 || n !== n ? n : n < 0 ? -1 : 1;
	};

	var sign = mathSign;

	var abs$1 = Math.abs;

	var EPSILON = 2.220446049250313e-16; // Number.EPSILON
	var INVERSE_EPSILON = 1 / EPSILON;

	var roundTiesToEven = function (n) {
	  return n + INVERSE_EPSILON - INVERSE_EPSILON;
	};

	var mathFloatRound = function (x, FLOAT_EPSILON, FLOAT_MAX_VALUE, FLOAT_MIN_VALUE) {
	  var n = +x;
	  var absolute = abs$1(n);
	  var s = sign(n);
	  if (absolute < FLOAT_MIN_VALUE) return s * roundTiesToEven(absolute / FLOAT_MIN_VALUE / FLOAT_EPSILON) * FLOAT_MIN_VALUE * FLOAT_EPSILON;
	  var a = (1 + FLOAT_EPSILON / EPSILON) * absolute;
	  var result = a - (a - absolute);
	  // eslint-disable-next-line no-self-compare -- NaN check
	  if (result > FLOAT_MAX_VALUE || result !== result) return s * Infinity;
	  return s * result;
	};

	var floatRound = mathFloatRound;

	var FLOAT32_EPSILON = 1.1920928955078125e-7; // 2 ** -23;
	var FLOAT32_MAX_VALUE = 3.4028234663852886e+38; // 2 ** 128 - 2 ** 104
	var FLOAT32_MIN_VALUE = 1.1754943508222875e-38; // 2 ** -126;

	// `Math.fround` method implementation
	// https://tc39.es/ecma262/#sec-math.fround
	// eslint-disable-next-line es/no-math-fround -- safe
	var mathFround = Math.fround || function fround(x) {
	  return floatRound(x, FLOAT32_EPSILON, FLOAT32_MAX_VALUE, FLOAT32_MIN_VALUE);
	};

	// IEEE754 conversions based on https://github.com/feross/ieee754
	var $Array$1 = Array;
	var abs = Math.abs;
	var pow = Math.pow;
	var floor$1 = Math.floor;
	var log = Math.log;
	var LN2 = Math.LN2;

	var pack = function (number, mantissaLength, bytes) {
	  var buffer = $Array$1(bytes);
	  var exponentLength = bytes * 8 - mantissaLength - 1;
	  var eMax = (1 << exponentLength) - 1;
	  var eBias = eMax >> 1;
	  var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
	  var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
	  var index = 0;
	  var exponent, mantissa, c;
	  number = abs(number);
	  // eslint-disable-next-line no-self-compare -- NaN check
	  if (number !== number || number === Infinity) {
	    // eslint-disable-next-line no-self-compare -- NaN check
	    mantissa = number !== number ? 1 : 0;
	    exponent = eMax;
	  } else {
	    exponent = floor$1(log(number) / LN2);
	    c = pow(2, -exponent);
	    if (number * c < 1) {
	      exponent--;
	      c *= 2;
	    }
	    if (exponent + eBias >= 1) {
	      number += rt / c;
	    } else {
	      number += rt * pow(2, 1 - eBias);
	    }
	    if (number * c >= 2) {
	      exponent++;
	      c /= 2;
	    }
	    if (exponent + eBias >= eMax) {
	      mantissa = 0;
	      exponent = eMax;
	    } else if (exponent + eBias >= 1) {
	      mantissa = (number * c - 1) * pow(2, mantissaLength);
	      exponent += eBias;
	    } else {
	      mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
	      exponent = 0;
	    }
	  }
	  while (mantissaLength >= 8) {
	    buffer[index++] = mantissa & 255;
	    mantissa /= 256;
	    mantissaLength -= 8;
	  }
	  exponent = exponent << mantissaLength | mantissa;
	  exponentLength += mantissaLength;
	  while (exponentLength > 0) {
	    buffer[index++] = exponent & 255;
	    exponent /= 256;
	    exponentLength -= 8;
	  }
	  buffer[index - 1] |= sign * 128;
	  return buffer;
	};

	var unpack = function (buffer, mantissaLength) {
	  var bytes = buffer.length;
	  var exponentLength = bytes * 8 - mantissaLength - 1;
	  var eMax = (1 << exponentLength) - 1;
	  var eBias = eMax >> 1;
	  var nBits = exponentLength - 7;
	  var index = bytes - 1;
	  var sign = buffer[index--];
	  var exponent = sign & 127;
	  var mantissa;
	  sign >>= 7;
	  while (nBits > 0) {
	    exponent = exponent * 256 + buffer[index--];
	    nBits -= 8;
	  }
	  mantissa = exponent & (1 << -nBits) - 1;
	  exponent >>= -nBits;
	  nBits += mantissaLength;
	  while (nBits > 0) {
	    mantissa = mantissa * 256 + buffer[index--];
	    nBits -= 8;
	  }
	  if (exponent === 0) {
	    exponent = 1 - eBias;
	  } else if (exponent === eMax) {
	    return mantissa ? NaN : sign ? -Infinity : Infinity;
	  } else {
	    mantissa += pow(2, mantissaLength);
	    exponent -= eBias;
	  } return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
	};

	var ieee754 = {
	  pack: pack,
	  unpack: unpack
	};

	var toObject$3 = toObject$h;
	var toAbsoluteIndex = toAbsoluteIndex$5;
	var lengthOfArrayLike$9 = lengthOfArrayLike$p;

	// `Array.prototype.fill` method implementation
	// https://tc39.es/ecma262/#sec-array.prototype.fill
	var arrayFill$1 = function fill(value /* , start = 0, end = @length */) {
	  var O = toObject$3(this);
	  var length = lengthOfArrayLike$9(O);
	  var argumentsLength = arguments.length;
	  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
	  var end = argumentsLength > 2 ? arguments[2] : undefined;
	  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
	  while (endPos > index) O[index++] = value;
	  return O;
	};

	var globalThis$7 = globalThis_1;
	var uncurryThis$8 = functionUncurryThis;
	var DESCRIPTORS$1 = descriptors;
	var NATIVE_ARRAY_BUFFER = arrayBufferBasicDetection;
	var FunctionName = functionName;
	var createNonEnumerableProperty$2 = createNonEnumerableProperty$f;
	var defineBuiltInAccessor$1 = defineBuiltInAccessor$e;
	var defineBuiltIns = defineBuiltIns$6;
	var fails$6 = fails$P;
	var anInstance$1 = anInstance$a;
	var toIntegerOrInfinity$4 = toIntegerOrInfinity$d;
	var toLength$1 = toLength$a;
	var toIndex$1 = toIndex$3;
	var fround = mathFround;
	var IEEE754 = ieee754;
	var getPrototypeOf = objectGetPrototypeOf$1;
	var setPrototypeOf$1 = objectSetPrototypeOf;
	var arrayFill = arrayFill$1;
	var arraySlice = arraySlice$7;
	var inheritIfRequired$1 = inheritIfRequired$6;
	var copyConstructorProperties = copyConstructorProperties$4;
	var setToStringTag = setToStringTag$9;
	var InternalStateModule$1 = internalState;

	var PROPER_FUNCTION_NAME = FunctionName.PROPER;
	var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
	var ARRAY_BUFFER = 'ArrayBuffer';
	var DATA_VIEW = 'DataView';
	var PROTOTYPE = 'prototype';
	var WRONG_LENGTH$1 = 'Wrong length';
	var WRONG_INDEX = 'Wrong index';
	var getInternalArrayBufferState = InternalStateModule$1.getterFor(ARRAY_BUFFER);
	var getInternalDataViewState = InternalStateModule$1.getterFor(DATA_VIEW);
	var setInternalState$1 = InternalStateModule$1.set;
	var NativeArrayBuffer = globalThis$7[ARRAY_BUFFER];
	var $ArrayBuffer = NativeArrayBuffer;
	var ArrayBufferPrototype$1 = $ArrayBuffer && $ArrayBuffer[PROTOTYPE];
	var $DataView = globalThis$7[DATA_VIEW];
	var DataViewPrototype = $DataView && $DataView[PROTOTYPE];
	var ObjectPrototype = Object.prototype;
	var Array$2 = globalThis$7.Array;
	var RangeError$3 = globalThis$7.RangeError;
	var fill = uncurryThis$8(arrayFill);
	var reverse = uncurryThis$8([].reverse);

	var packIEEE754 = IEEE754.pack;
	var unpackIEEE754 = IEEE754.unpack;

	var packInt8 = function (number) {
	  return [number & 0xFF];
	};

	var packInt16 = function (number) {
	  return [number & 0xFF, number >> 8 & 0xFF];
	};

	var packInt32 = function (number) {
	  return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
	};

	var unpackInt32 = function (buffer) {
	  return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
	};

	var packFloat32 = function (number) {
	  return packIEEE754(fround(number), 23, 4);
	};

	var packFloat64 = function (number) {
	  return packIEEE754(number, 52, 8);
	};

	var addGetter$1 = function (Constructor, key, getInternalState) {
	  defineBuiltInAccessor$1(Constructor[PROTOTYPE], key, {
	    configurable: true,
	    get: function () {
	      return getInternalState(this)[key];
	    }
	  });
	};

	var get = function (view, count, index, isLittleEndian) {
	  var store = getInternalDataViewState(view);
	  var intIndex = toIndex$1(index);
	  var boolIsLittleEndian = !!isLittleEndian;
	  if (intIndex + count > store.byteLength) throw new RangeError$3(WRONG_INDEX);
	  var bytes = store.bytes;
	  var start = intIndex + store.byteOffset;
	  var pack = arraySlice(bytes, start, start + count);
	  return boolIsLittleEndian ? pack : reverse(pack);
	};

	var set = function (view, count, index, conversion, value, isLittleEndian) {
	  var store = getInternalDataViewState(view);
	  var intIndex = toIndex$1(index);
	  var pack = conversion(+value);
	  var boolIsLittleEndian = !!isLittleEndian;
	  if (intIndex + count > store.byteLength) throw new RangeError$3(WRONG_INDEX);
	  var bytes = store.bytes;
	  var start = intIndex + store.byteOffset;
	  for (var i = 0; i < count; i++) bytes[start + i] = pack[boolIsLittleEndian ? i : count - i - 1];
	};

	if (!NATIVE_ARRAY_BUFFER) {
	  $ArrayBuffer = function ArrayBuffer(length) {
	    anInstance$1(this, ArrayBufferPrototype$1);
	    var byteLength = toIndex$1(length);
	    setInternalState$1(this, {
	      type: ARRAY_BUFFER,
	      bytes: fill(Array$2(byteLength), 0),
	      byteLength: byteLength
	    });
	    if (!DESCRIPTORS$1) {
	      this.byteLength = byteLength;
	      this.detached = false;
	    }
	  };

	  ArrayBufferPrototype$1 = $ArrayBuffer[PROTOTYPE];

	  $DataView = function DataView(buffer, byteOffset, byteLength) {
	    anInstance$1(this, DataViewPrototype);
	    anInstance$1(buffer, ArrayBufferPrototype$1);
	    var bufferState = getInternalArrayBufferState(buffer);
	    var bufferLength = bufferState.byteLength;
	    var offset = toIntegerOrInfinity$4(byteOffset);
	    if (offset < 0 || offset > bufferLength) throw new RangeError$3('Wrong offset');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength$1(byteLength);
	    if (offset + byteLength > bufferLength) throw new RangeError$3(WRONG_LENGTH$1);
	    setInternalState$1(this, {
	      type: DATA_VIEW,
	      buffer: buffer,
	      byteLength: byteLength,
	      byteOffset: offset,
	      bytes: bufferState.bytes
	    });
	    if (!DESCRIPTORS$1) {
	      this.buffer = buffer;
	      this.byteLength = byteLength;
	      this.byteOffset = offset;
	    }
	  };

	  DataViewPrototype = $DataView[PROTOTYPE];

	  if (DESCRIPTORS$1) {
	    addGetter$1($ArrayBuffer, 'byteLength', getInternalArrayBufferState);
	    addGetter$1($DataView, 'buffer', getInternalDataViewState);
	    addGetter$1($DataView, 'byteLength', getInternalDataViewState);
	    addGetter$1($DataView, 'byteOffset', getInternalDataViewState);
	  }

	  defineBuiltIns(DataViewPrototype, {
	    getInt8: function getInt8(byteOffset) {
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset) {
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /* , littleEndian */) {
	      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : false);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /* , littleEndian */) {
	      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : false);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /* , littleEndian */) {
	      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : false));
	    },
	    getUint32: function getUint32(byteOffset /* , littleEndian */) {
	      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : false)) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
	      return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : false), 23);
	    },
	    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
	      return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : false), 52);
	    },
	    setInt8: function setInt8(byteOffset, value) {
	      set(this, 1, byteOffset, packInt8, value);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      set(this, 1, byteOffset, packInt8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
	      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : false);
	    },
	    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
	      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : false);
	    },
	    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
	      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : false);
	    },
	    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
	      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : false);
	    },
	    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
	      set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : false);
	    },
	    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
	      set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : false);
	    }
	  });
	} else {
	  var INCORRECT_ARRAY_BUFFER_NAME = PROPER_FUNCTION_NAME && NativeArrayBuffer.name !== ARRAY_BUFFER;
	  /* eslint-disable no-new, sonar/inconsistent-function-call -- required for testing */
	  if (!fails$6(function () {
	    NativeArrayBuffer(1);
	  }) || !fails$6(function () {
	    new NativeArrayBuffer(-1);
	  }) || fails$6(function () {
	    new NativeArrayBuffer();
	    new NativeArrayBuffer(1.5);
	    new NativeArrayBuffer(NaN);
	    return NativeArrayBuffer.length !== 1 || INCORRECT_ARRAY_BUFFER_NAME && !CONFIGURABLE_FUNCTION_NAME;
	  })) {
	    /* eslint-enable no-new, sonar/inconsistent-function-call -- required for testing */
	    $ArrayBuffer = function ArrayBuffer(length) {
	      anInstance$1(this, ArrayBufferPrototype$1);
	      return inheritIfRequired$1(new NativeArrayBuffer(toIndex$1(length)), this, $ArrayBuffer);
	    };

	    $ArrayBuffer[PROTOTYPE] = ArrayBufferPrototype$1;

	    ArrayBufferPrototype$1.constructor = $ArrayBuffer;

	    copyConstructorProperties($ArrayBuffer, NativeArrayBuffer);
	  } else if (INCORRECT_ARRAY_BUFFER_NAME && CONFIGURABLE_FUNCTION_NAME) {
	    createNonEnumerableProperty$2(NativeArrayBuffer, 'name', ARRAY_BUFFER);
	  }

	  // WebKit bug - the same parent prototype for typed arrays and data view
	  if (setPrototypeOf$1 && getPrototypeOf(DataViewPrototype) !== ObjectPrototype) {
	    setPrototypeOf$1(DataViewPrototype, ObjectPrototype);
	  }

	  // iOS Safari 7.x bug
	  var testView = new $DataView(new $ArrayBuffer(2));
	  var $setInt8 = uncurryThis$8(DataViewPrototype.setInt8);
	  testView.setInt8(0, 2147483648);
	  testView.setInt8(1, 2147483649);
	  if (testView.getInt8(0) || !testView.getInt8(1)) defineBuiltIns(DataViewPrototype, {
	    setInt8: function setInt8(byteOffset, value) {
	      $setInt8(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      $setInt8(this, byteOffset, value << 24 >> 24);
	    }
	  }, { unsafe: true });
	}

	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);

	var arrayBuffer = {
	  ArrayBuffer: $ArrayBuffer,
	  DataView: $DataView
	};

	var isObject$2 = isObject$r;

	var floor = Math.floor;

	// `IsIntegralNumber` abstract operation
	// https://tc39.es/ecma262/#sec-isintegralnumber
	// eslint-disable-next-line es/no-number-isinteger -- safe
	var isIntegralNumber$1 = Number.isInteger || function isInteger(it) {
	  return !isObject$2(it) && isFinite(it) && floor(it) === it;
	};

	var toIntegerOrInfinity$3 = toIntegerOrInfinity$d;

	var $RangeError$3 = RangeError;

	var toPositiveInteger$2 = function (it) {
	  var result = toIntegerOrInfinity$3(it);
	  if (result < 0) throw new $RangeError$3("The argument can't be less than 0");
	  return result;
	};

	var toPositiveInteger$1 = toPositiveInteger$2;

	var $RangeError$2 = RangeError;

	var toOffset$2 = function (it, BYTES) {
	  var offset = toPositiveInteger$1(it);
	  if (offset % BYTES) throw new $RangeError$2('Wrong offset');
	  return offset;
	};

	var round = Math.round;

	var toUint8Clamped$1 = function (it) {
	  var value = round(it);
	  return value < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
	};

	var classof$3 = classof$j;

	var isBigIntArray$2 = function (it) {
	  var klass = classof$3(it);
	  return klass === 'BigInt64Array' || klass === 'BigUint64Array';
	};

	var toPrimitive = toPrimitive$2;

	var $TypeError = TypeError;

	// `ToBigInt` abstract operation
	// https://tc39.es/ecma262/#sec-tobigint
	var toBigInt$3 = function (argument) {
	  var prim = toPrimitive(argument, 'number');
	  if (typeof prim == 'number') throw new $TypeError("Can't convert number to bigint");
	  // eslint-disable-next-line es/no-bigint -- safe
	  return BigInt(prim);
	};

	var bind$2 = functionBindContext;
	var call$6 = functionCall;
	var aConstructor = aConstructor$2;
	var toObject$2 = toObject$h;
	var lengthOfArrayLike$8 = lengthOfArrayLike$p;
	var getIterator = getIterator$4;
	var getIteratorMethod$1 = getIteratorMethod$6;
	var isArrayIteratorMethod = isArrayIteratorMethod$3;
	var isBigIntArray$1 = isBigIntArray$2;
	var aTypedArrayConstructor = arrayBufferViewCore.aTypedArrayConstructor;
	var toBigInt$2 = toBigInt$3;

	var typedArrayFrom$1 = function from(source /* , mapfn, thisArg */) {
	  var C = aConstructor(this);
	  var O = toObject$2(source);
	  var argumentsLength = arguments.length;
	  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
	  var mapping = mapfn !== undefined;
	  var iteratorMethod = getIteratorMethod$1(O);
	  var i, length, result, thisIsBigIntArray, value, step, iterator, next;
	  if (iteratorMethod && !isArrayIteratorMethod(iteratorMethod)) {
	    iterator = getIterator(O, iteratorMethod);
	    next = iterator.next;
	    O = [];
	    while (!(step = call$6(next, iterator)).done) {
	      O.push(step.value);
	    }
	  }
	  if (mapping && argumentsLength > 2) {
	    mapfn = bind$2(mapfn, arguments[2]);
	  }
	  length = lengthOfArrayLike$8(O);
	  result = new (aTypedArrayConstructor(C))(length);
	  thisIsBigIntArray = isBigIntArray$1(result);
	  for (i = 0; length > i; i++) {
	    value = mapping ? mapfn(O[i], i) : O[i];
	    // FF30- typed arrays doesn't properly convert objects to typed array values
	    result[i] = thisIsBigIntArray ? toBigInt$2(value) : +value;
	  }
	  return result;
	};

	var lengthOfArrayLike$7 = lengthOfArrayLike$p;

	var arrayFromConstructorAndList$3 = function (Constructor, list, $length) {
	  var index = 0;
	  var length = arguments.length > 2 ? $length : lengthOfArrayLike$7(list);
	  var result = new Constructor(length);
	  while (length > index) result[index] = list[index++];
	  return result;
	};

	var $$5 = _export;
	var globalThis$6 = globalThis_1;
	var call$5 = functionCall;
	var DESCRIPTORS = descriptors;
	var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = typedArrayConstructorsRequireWrappers;
	var ArrayBufferViewCore$a = arrayBufferViewCore;
	var ArrayBufferModule = arrayBuffer;
	var anInstance = anInstance$a;
	var createPropertyDescriptor = createPropertyDescriptor$8;
	var createNonEnumerableProperty$1 = createNonEnumerableProperty$f;
	var isIntegralNumber = isIntegralNumber$1;
	var toLength = toLength$a;
	var toIndex = toIndex$3;
	var toOffset$1 = toOffset$2;
	var toUint8Clamped = toUint8Clamped$1;
	var toPropertyKey$1 = toPropertyKey$4;
	var hasOwn$1 = hasOwnProperty_1;
	var classof$2 = classof$j;
	var isObject$1 = isObject$r;
	var isSymbol$1 = isSymbol$5;
	var create = objectCreate$1;
	var isPrototypeOf = objectIsPrototypeOf;
	var setPrototypeOf = objectSetPrototypeOf;
	var getOwnPropertyNames = objectGetOwnPropertyNames.f;
	var typedArrayFrom = typedArrayFrom$1;
	var forEach = arrayIteration.forEach;
	var setSpecies = setSpecies$5;
	var defineBuiltInAccessor = defineBuiltInAccessor$e;
	var definePropertyModule = objectDefineProperty;
	var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
	var arrayFromConstructorAndList$2 = arrayFromConstructorAndList$3;
	var InternalStateModule = internalState;
	var inheritIfRequired = inheritIfRequired$6;

	var getInternalState = InternalStateModule.get;
	var setInternalState = InternalStateModule.set;
	var enforceInternalState = InternalStateModule.enforce;
	var nativeDefineProperty = definePropertyModule.f;
	var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
	var RangeError$2 = globalThis$6.RangeError;
	var ArrayBuffer$1 = ArrayBufferModule.ArrayBuffer;
	var ArrayBufferPrototype = ArrayBuffer$1.prototype;
	var DataView$1 = ArrayBufferModule.DataView;
	var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore$a.NATIVE_ARRAY_BUFFER_VIEWS;
	var TYPED_ARRAY_TAG = ArrayBufferViewCore$a.TYPED_ARRAY_TAG;
	var TypedArray = ArrayBufferViewCore$a.TypedArray;
	var TypedArrayPrototype$1 = ArrayBufferViewCore$a.TypedArrayPrototype;
	var isTypedArray = ArrayBufferViewCore$a.isTypedArray;
	var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
	var WRONG_LENGTH = 'Wrong length';

	var addGetter = function (it, key) {
	  defineBuiltInAccessor(it, key, {
	    configurable: true,
	    get: function () {
	      return getInternalState(this)[key];
	    }
	  });
	};

	var isArrayBuffer = function (it) {
	  var klass;
	  return isPrototypeOf(ArrayBufferPrototype, it) || (klass = classof$2(it)) === 'ArrayBuffer' || klass === 'SharedArrayBuffer';
	};

	var isTypedArrayIndex = function (target, key) {
	  return isTypedArray(target)
	    && !isSymbol$1(key)
	    && key in target
	    && isIntegralNumber(+key)
	    && key >= 0;
	};

	var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
	  key = toPropertyKey$1(key);
	  return isTypedArrayIndex(target, key)
	    ? createPropertyDescriptor(2, target[key])
	    : nativeGetOwnPropertyDescriptor(target, key);
	};

	var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
	  key = toPropertyKey$1(key);
	  if (isTypedArrayIndex(target, key)
	    && isObject$1(descriptor)
	    && hasOwn$1(descriptor, 'value')
	    && !hasOwn$1(descriptor, 'get')
	    && !hasOwn$1(descriptor, 'set')
	    // TODO: add validation descriptor w/o calling accessors
	    && !descriptor.configurable
	    && (!hasOwn$1(descriptor, 'writable') || descriptor.writable)
	    && (!hasOwn$1(descriptor, 'enumerable') || descriptor.enumerable)
	  ) {
	    target[key] = descriptor.value;
	    return target;
	  } return nativeDefineProperty(target, key, descriptor);
	};

	if (DESCRIPTORS) {
	  if (!NATIVE_ARRAY_BUFFER_VIEWS) {
	    getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
	    definePropertyModule.f = wrappedDefineProperty;
	    addGetter(TypedArrayPrototype$1, 'buffer');
	    addGetter(TypedArrayPrototype$1, 'byteOffset');
	    addGetter(TypedArrayPrototype$1, 'byteLength');
	    addGetter(TypedArrayPrototype$1, 'length');
	  }

	  $$5({ target: 'Object', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
	    getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
	    defineProperty: wrappedDefineProperty
	  });

	  typedArrayConstructor.exports = function (TYPE, wrapper, CLAMPED) {
	    var BYTES = TYPE.match(/\d+/)[0] / 8;
	    var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
	    var GETTER = 'get' + TYPE;
	    var SETTER = 'set' + TYPE;
	    var NativeTypedArrayConstructor = globalThis$6[CONSTRUCTOR_NAME];
	    var TypedArrayConstructor = NativeTypedArrayConstructor;
	    var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
	    var exported = {};

	    var getter = function (that, index) {
	      var data = getInternalState(that);
	      return data.view[GETTER](index * BYTES + data.byteOffset, true);
	    };

	    var setter = function (that, index, value) {
	      var data = getInternalState(that);
	      data.view[SETTER](index * BYTES + data.byteOffset, CLAMPED ? toUint8Clamped(value) : value, true);
	    };

	    var addElement = function (that, index) {
	      nativeDefineProperty(that, index, {
	        get: function () {
	          return getter(this, index);
	        },
	        set: function (value) {
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };

	    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
	      TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
	        anInstance(that, TypedArrayConstructorPrototype);
	        var index = 0;
	        var byteOffset = 0;
	        var buffer, byteLength, length;
	        if (!isObject$1(data)) {
	          length = toIndex(data);
	          byteLength = length * BYTES;
	          buffer = new ArrayBuffer$1(byteLength);
	        } else if (isArrayBuffer(data)) {
	          buffer = data;
	          byteOffset = toOffset$1(offset, BYTES);
	          var $len = data.byteLength;
	          if ($length === undefined) {
	            if ($len % BYTES) throw new RangeError$2(WRONG_LENGTH);
	            byteLength = $len - byteOffset;
	            if (byteLength < 0) throw new RangeError$2(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if (byteLength + byteOffset > $len) throw new RangeError$2(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if (isTypedArray(data)) {
	          return arrayFromConstructorAndList$2(TypedArrayConstructor, data);
	        } else {
	          return call$5(typedArrayFrom, TypedArrayConstructor, data);
	        }
	        setInternalState(that, {
	          buffer: buffer,
	          byteOffset: byteOffset,
	          byteLength: byteLength,
	          length: length,
	          view: new DataView$1(buffer)
	        });
	        while (index < length) addElement(that, index++);
	      });

	      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
	      TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create(TypedArrayPrototype$1);
	    } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
	      TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
	        anInstance(dummy, TypedArrayConstructorPrototype);
	        return inheritIfRequired(function () {
	          if (!isObject$1(data)) return new NativeTypedArrayConstructor(toIndex(data));
	          if (isArrayBuffer(data)) return $length !== undefined
	            ? new NativeTypedArrayConstructor(data, toOffset$1(typedArrayOffset, BYTES), $length)
	            : typedArrayOffset !== undefined
	              ? new NativeTypedArrayConstructor(data, toOffset$1(typedArrayOffset, BYTES))
	              : new NativeTypedArrayConstructor(data);
	          if (isTypedArray(data)) return arrayFromConstructorAndList$2(TypedArrayConstructor, data);
	          return call$5(typedArrayFrom, TypedArrayConstructor, data);
	        }(), dummy, TypedArrayConstructor);
	      });

	      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
	      forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
	        if (!(key in TypedArrayConstructor)) {
	          createNonEnumerableProperty$1(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
	        }
	      });
	      TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
	    }

	    if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
	      createNonEnumerableProperty$1(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
	    }

	    enforceInternalState(TypedArrayConstructorPrototype).TypedArrayConstructor = TypedArrayConstructor;

	    if (TYPED_ARRAY_TAG) {
	      createNonEnumerableProperty$1(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
	    }

	    var FORCED = TypedArrayConstructor !== NativeTypedArrayConstructor;

	    exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;

	    $$5({ global: true, constructor: true, forced: FORCED, sham: !NATIVE_ARRAY_BUFFER_VIEWS }, exported);

	    if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
	      createNonEnumerableProperty$1(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
	    }

	    if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
	      createNonEnumerableProperty$1(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
	    }

	    setSpecies(CONSTRUCTOR_NAME);
	  };
	} else typedArrayConstructor.exports = function () { /* empty */ };

	var typedArrayConstructorExports = typedArrayConstructor.exports;

	var createTypedArrayConstructor = typedArrayConstructorExports;

	// `Uint8Array` constructor
	// https://tc39.es/ecma262/#sec-typedarray-objects
	createTypedArrayConstructor('Uint8', function (init) {
	  return function Uint8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

	var ArrayBufferViewCore$9 = arrayBufferViewCore;
	var lengthOfArrayLike$6 = lengthOfArrayLike$p;
	var toIntegerOrInfinity$2 = toIntegerOrInfinity$d;

	var aTypedArray$9 = ArrayBufferViewCore$9.aTypedArray;
	var exportTypedArrayMethod$a = ArrayBufferViewCore$9.exportTypedArrayMethod;

	// `%TypedArray%.prototype.at` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.at
	exportTypedArrayMethod$a('at', function at(index) {
	  var O = aTypedArray$9(this);
	  var len = lengthOfArrayLike$6(O);
	  var relativeIndex = toIntegerOrInfinity$2(index);
	  var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
	  return (k < 0 || k >= len) ? undefined : O[k];
	});

	var ArrayBufferViewCore$8 = arrayBufferViewCore;
	var $fill = arrayFill$1;
	var toBigInt$1 = toBigInt$3;
	var classof$1 = classof$j;
	var call$4 = functionCall;
	var uncurryThis$7 = functionUncurryThis;
	var fails$5 = fails$P;

	var aTypedArray$8 = ArrayBufferViewCore$8.aTypedArray;
	var exportTypedArrayMethod$9 = ArrayBufferViewCore$8.exportTypedArrayMethod;
	var slice = uncurryThis$7(''.slice);

	// V8 ~ Chrome < 59, Safari < 14.1, FF < 55, Edge <=18
	var CONVERSION_BUG = fails$5(function () {
	  var count = 0;
	  // eslint-disable-next-line es/no-typed-arrays -- safe
	  new Int8Array(2).fill({ valueOf: function () { return count++; } });
	  return count !== 1;
	});

	// `%TypedArray%.prototype.fill` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
	exportTypedArrayMethod$9('fill', function fill(value /* , start, end */) {
	  var length = arguments.length;
	  aTypedArray$8(this);
	  var actualValue = slice(classof$1(this), 0, 3) === 'Big' ? toBigInt$1(value) : +value;
	  return call$4($fill, this, actualValue, length > 1 ? arguments[1] : undefined, length > 2 ? arguments[2] : undefined);
	}, CONVERSION_BUG);

	var bind$1 = functionBindContext;
	var IndexedObject$1 = indexedObject;
	var toObject$1 = toObject$h;
	var lengthOfArrayLike$5 = lengthOfArrayLike$p;

	// `Array.prototype.{ findLast, findLastIndex }` methods implementation
	var createMethod = function (TYPE) {
	  var IS_FIND_LAST_INDEX = TYPE === 1;
	  return function ($this, callbackfn, that) {
	    var O = toObject$1($this);
	    var self = IndexedObject$1(O);
	    var index = lengthOfArrayLike$5(self);
	    var boundFunction = bind$1(callbackfn, that);
	    var value, result;
	    while (index-- > 0) {
	      value = self[index];
	      result = boundFunction(value, index, O);
	      if (result) switch (TYPE) {
	        case 0: return value; // findLast
	        case 1: return index; // findLastIndex
	      }
	    }
	    return IS_FIND_LAST_INDEX ? -1 : undefined;
	  };
	};

	var arrayIterationFromLast = {
	  // `Array.prototype.findLast` method
	  // https://github.com/tc39/proposal-array-find-from-last
	  findLast: createMethod(0),
	  // `Array.prototype.findLastIndex` method
	  // https://github.com/tc39/proposal-array-find-from-last
	  findLastIndex: createMethod(1)
	};

	var ArrayBufferViewCore$7 = arrayBufferViewCore;
	var $findLast = arrayIterationFromLast.findLast;

	var aTypedArray$7 = ArrayBufferViewCore$7.aTypedArray;
	var exportTypedArrayMethod$8 = ArrayBufferViewCore$7.exportTypedArrayMethod;

	// `%TypedArray%.prototype.findLast` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findlast
	exportTypedArrayMethod$8('findLast', function findLast(predicate /* , thisArg */) {
	  return $findLast(aTypedArray$7(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	});

	var ArrayBufferViewCore$6 = arrayBufferViewCore;
	var $findLastIndex = arrayIterationFromLast.findLastIndex;

	var aTypedArray$6 = ArrayBufferViewCore$6.aTypedArray;
	var exportTypedArrayMethod$7 = ArrayBufferViewCore$6.exportTypedArrayMethod;

	// `%TypedArray%.prototype.findLastIndex` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findlastindex
	exportTypedArrayMethod$7('findLastIndex', function findLastIndex(predicate /* , thisArg */) {
	  return $findLastIndex(aTypedArray$6(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	});

	var globalThis$5 = globalThis_1;
	var fails$4 = fails$P;
	var uncurryThis$6 = functionUncurryThis;
	var ArrayBufferViewCore$5 = arrayBufferViewCore;
	var ArrayIterators = es_array_iterator;
	var wellKnownSymbol = wellKnownSymbol$w;

	var ITERATOR = wellKnownSymbol('iterator');
	var Uint8Array$1 = globalThis$5.Uint8Array;
	var arrayValues = uncurryThis$6(ArrayIterators.values);
	var arrayKeys = uncurryThis$6(ArrayIterators.keys);
	var arrayEntries = uncurryThis$6(ArrayIterators.entries);
	var aTypedArray$5 = ArrayBufferViewCore$5.aTypedArray;
	var exportTypedArrayMethod$6 = ArrayBufferViewCore$5.exportTypedArrayMethod;
	var TypedArrayPrototype = Uint8Array$1 && Uint8Array$1.prototype;

	var GENERIC = !fails$4(function () {
	  TypedArrayPrototype[ITERATOR].call([1]);
	});

	var ITERATOR_IS_VALUES = !!TypedArrayPrototype
	  && TypedArrayPrototype.values
	  && TypedArrayPrototype[ITERATOR] === TypedArrayPrototype.values
	  && TypedArrayPrototype.values.name === 'values';

	var typedArrayValues = function values() {
	  return arrayValues(aTypedArray$5(this));
	};

	// `%TypedArray%.prototype.entries` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries
	exportTypedArrayMethod$6('entries', function entries() {
	  return arrayEntries(aTypedArray$5(this));
	}, GENERIC);
	// `%TypedArray%.prototype.keys` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys
	exportTypedArrayMethod$6('keys', function keys() {
	  return arrayKeys(aTypedArray$5(this));
	}, GENERIC);
	// `%TypedArray%.prototype.values` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.values
	exportTypedArrayMethod$6('values', typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, { name: 'values' });
	// `%TypedArray%.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator
	exportTypedArrayMethod$6(ITERATOR, typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, { name: 'values' });

	var globalThis$4 = globalThis_1;
	var call$3 = functionCall;
	var ArrayBufferViewCore$4 = arrayBufferViewCore;
	var lengthOfArrayLike$4 = lengthOfArrayLike$p;
	var toOffset = toOffset$2;
	var toIndexedObject = toObject$h;
	var fails$3 = fails$P;

	var RangeError$1 = globalThis$4.RangeError;
	var Int8Array$1 = globalThis$4.Int8Array;
	var Int8ArrayPrototype = Int8Array$1 && Int8Array$1.prototype;
	var $set = Int8ArrayPrototype && Int8ArrayPrototype.set;
	var aTypedArray$4 = ArrayBufferViewCore$4.aTypedArray;
	var exportTypedArrayMethod$5 = ArrayBufferViewCore$4.exportTypedArrayMethod;

	var WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS = !fails$3(function () {
	  // eslint-disable-next-line es/no-typed-arrays -- required for testing
	  var array = new Uint8ClampedArray(2);
	  call$3($set, array, { length: 1, 0: 3 }, 1);
	  return array[1] !== 3;
	});

	// https://bugs.chromium.org/p/v8/issues/detail?id=11294 and other
	var TO_OBJECT_BUG = WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS && ArrayBufferViewCore$4.NATIVE_ARRAY_BUFFER_VIEWS && fails$3(function () {
	  var array = new Int8Array$1(2);
	  array.set(1);
	  array.set('2', 1);
	  return array[0] !== 0 || array[1] !== 2;
	});

	// `%TypedArray%.prototype.set` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
	exportTypedArrayMethod$5('set', function set(arrayLike /* , offset */) {
	  aTypedArray$4(this);
	  var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
	  var src = toIndexedObject(arrayLike);
	  if (WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS) return call$3($set, this, src, offset);
	  var length = this.length;
	  var len = lengthOfArrayLike$4(src);
	  var index = 0;
	  if (len + offset > length) throw new RangeError$1('Wrong length');
	  while (index < len) this[offset + index] = src[index++];
	}, !WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS || TO_OBJECT_BUG);

	var globalThis$3 = globalThis_1;
	var uncurryThis$5 = functionUncurryThisClause;
	var fails$2 = fails$P;
	var aCallable$2 = aCallable$o;
	var internalSort = arraySort$1;
	var ArrayBufferViewCore$3 = arrayBufferViewCore;
	var FF = environmentFfVersion;
	var IE_OR_EDGE = environmentIsIeOrEdge;
	var V8 = environmentV8Version;
	var WEBKIT = environmentWebkitVersion;

	var aTypedArray$3 = ArrayBufferViewCore$3.aTypedArray;
	var exportTypedArrayMethod$4 = ArrayBufferViewCore$3.exportTypedArrayMethod;
	var Uint16Array = globalThis$3.Uint16Array;
	var nativeSort = Uint16Array && uncurryThis$5(Uint16Array.prototype.sort);

	// WebKit
	var ACCEPT_INCORRECT_ARGUMENTS = !!nativeSort && !(fails$2(function () {
	  nativeSort(new Uint16Array(2), null);
	}) && fails$2(function () {
	  nativeSort(new Uint16Array(2), {});
	}));

	var STABLE_SORT = !!nativeSort && !fails$2(function () {
	  // feature detection can be too slow, so check engines versions
	  if (V8) return V8 < 74;
	  if (FF) return FF < 67;
	  if (IE_OR_EDGE) return true;
	  if (WEBKIT) return WEBKIT < 602;

	  var array = new Uint16Array(516);
	  var expected = Array(516);
	  var index, mod;

	  for (index = 0; index < 516; index++) {
	    mod = index % 4;
	    array[index] = 515 - index;
	    expected[index] = index - 2 * mod + 3;
	  }

	  nativeSort(array, function (a, b) {
	    return (a / 4 | 0) - (b / 4 | 0);
	  });

	  for (index = 0; index < 516; index++) {
	    if (array[index] !== expected[index]) return true;
	  }
	});

	var getSortCompare = function (comparefn) {
	  return function (x, y) {
	    if (comparefn !== undefined) return +comparefn(x, y) || 0;
	    // eslint-disable-next-line no-self-compare -- NaN check
	    if (y !== y) return -1;
	    // eslint-disable-next-line no-self-compare -- NaN check
	    if (x !== x) return 1;
	    if (x === 0 && y === 0) return 1 / x > 0 && 1 / y < 0 ? 1 : -1;
	    return x > y;
	  };
	};

	// `%TypedArray%.prototype.sort` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
	exportTypedArrayMethod$4('sort', function sort(comparefn) {
	  if (comparefn !== undefined) aCallable$2(comparefn);
	  if (STABLE_SORT) return nativeSort(this, comparefn);

	  return internalSort(aTypedArray$3(this), getSortCompare(comparefn));
	}, !STABLE_SORT || ACCEPT_INCORRECT_ARGUMENTS);

	var lengthOfArrayLike$3 = lengthOfArrayLike$p;

	// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.toReversed
	// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.toReversed
	var arrayToReversed$1 = function (O, C) {
	  var len = lengthOfArrayLike$3(O);
	  var A = new C(len);
	  var k = 0;
	  for (; k < len; k++) A[k] = O[len - k - 1];
	  return A;
	};

	var arrayToReversed = arrayToReversed$1;
	var ArrayBufferViewCore$2 = arrayBufferViewCore;

	var aTypedArray$2 = ArrayBufferViewCore$2.aTypedArray;
	var exportTypedArrayMethod$3 = ArrayBufferViewCore$2.exportTypedArrayMethod;
	var getTypedArrayConstructor$2 = ArrayBufferViewCore$2.getTypedArrayConstructor;

	// `%TypedArray%.prototype.toReversed` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.toreversed
	exportTypedArrayMethod$3('toReversed', function toReversed() {
	  return arrayToReversed(aTypedArray$2(this), getTypedArrayConstructor$2(this));
	});

	var ArrayBufferViewCore$1 = arrayBufferViewCore;
	var uncurryThis$4 = functionUncurryThis;
	var aCallable$1 = aCallable$o;
	var arrayFromConstructorAndList$1 = arrayFromConstructorAndList$3;

	var aTypedArray$1 = ArrayBufferViewCore$1.aTypedArray;
	var getTypedArrayConstructor$1 = ArrayBufferViewCore$1.getTypedArrayConstructor;
	var exportTypedArrayMethod$2 = ArrayBufferViewCore$1.exportTypedArrayMethod;
	var sort = uncurryThis$4(ArrayBufferViewCore$1.TypedArrayPrototype.sort);

	// `%TypedArray%.prototype.toSorted` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tosorted
	exportTypedArrayMethod$2('toSorted', function toSorted(compareFn) {
	  if (compareFn !== undefined) aCallable$1(compareFn);
	  var O = aTypedArray$1(this);
	  var A = arrayFromConstructorAndList$1(getTypedArrayConstructor$1(O), O);
	  return sort(A, compareFn);
	});

	var exportTypedArrayMethod$1 = arrayBufferViewCore.exportTypedArrayMethod;
	var fails$1 = fails$P;
	var globalThis$2 = globalThis_1;
	var uncurryThis$3 = functionUncurryThis;

	var Uint8Array = globalThis$2.Uint8Array;
	var Uint8ArrayPrototype = Uint8Array && Uint8Array.prototype || {};
	var arrayToString = [].toString;
	var join = uncurryThis$3([].join);

	if (fails$1(function () { arrayToString.call({}); })) {
	  arrayToString = function toString() {
	    return join(this);
	  };
	}

	var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString !== arrayToString;

	// `%TypedArray%.prototype.toString` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring
	exportTypedArrayMethod$1('toString', arrayToString, IS_NOT_ARRAY_METHOD);

	var lengthOfArrayLike$2 = lengthOfArrayLike$p;
	var toIntegerOrInfinity$1 = toIntegerOrInfinity$d;

	var $RangeError$1 = RangeError;

	// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.with
	// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.with
	var arrayWith$1 = function (O, C, index, value) {
	  var len = lengthOfArrayLike$2(O);
	  var relativeIndex = toIntegerOrInfinity$1(index);
	  var actualIndex = relativeIndex < 0 ? len + relativeIndex : relativeIndex;
	  if (actualIndex >= len || actualIndex < 0) throw new $RangeError$1('Incorrect index');
	  var A = new C(len);
	  var k = 0;
	  for (; k < len; k++) A[k] = k === actualIndex ? value : O[k];
	  return A;
	};

	var arrayWith = arrayWith$1;
	var ArrayBufferViewCore = arrayBufferViewCore;
	var isBigIntArray = isBigIntArray$2;
	var toIntegerOrInfinity = toIntegerOrInfinity$d;
	var toBigInt = toBigInt$3;

	var aTypedArray = ArrayBufferViewCore.aTypedArray;
	var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
	var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

	var PROPER_ORDER = !!function () {
	  try {
	    // eslint-disable-next-line no-throw-literal, es/no-typed-arrays, es/no-array-prototype-with -- required for testing
	    new Int8Array(1)['with'](2, { valueOf: function () { throw 8; } });
	  } catch (error) {
	    // some early implementations, like WebKit, does not follow the final semantic
	    // https://github.com/tc39/proposal-change-array-by-copy/pull/86
	    return error === 8;
	  }
	}();

	// `%TypedArray%.prototype.with` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.with
	exportTypedArrayMethod('with', { 'with': function (index, value) {
	  var O = aTypedArray(this);
	  var relativeIndex = toIntegerOrInfinity(index);
	  var actualValue = isBigIntArray(O) ? toBigInt(value) : +value;
	  return arrayWith(O, getTypedArrayConstructor(O), relativeIndex, actualValue);
	} }['with'], !PROPER_ORDER);

	var bind = functionBindContext;
	var uncurryThis$2 = functionUncurryThis;
	var IndexedObject = indexedObject;
	var toObject = toObject$h;
	var toPropertyKey = toPropertyKey$4;
	var lengthOfArrayLike$1 = lengthOfArrayLike$p;
	var objectCreate = objectCreate$1;
	var arrayFromConstructorAndList = arrayFromConstructorAndList$3;

	var $Array = Array;
	var push$2 = uncurryThis$2([].push);

	var arrayGroup = function ($this, callbackfn, that, specificConstructor) {
	  var O = toObject($this);
	  var self = IndexedObject(O);
	  var boundFunction = bind(callbackfn, that);
	  var target = objectCreate(null);
	  var length = lengthOfArrayLike$1(self);
	  var index = 0;
	  var Constructor, key, value;
	  for (;length > index; index++) {
	    value = self[index];
	    key = toPropertyKey(boundFunction(value, index, O));
	    // in some IE versions, `hasOwnProperty` returns incorrect result on integer keys
	    // but since it's a `null` prototype object, we can safely use `in`
	    if (key in target) push$2(target[key], value);
	    else target[key] = [value];
	  }
	  // TODO: Remove this block from `core-js@4`
	  if (specificConstructor) {
	    Constructor = specificConstructor(O);
	    if (Constructor !== $Array) {
	      for (key in target) target[key] = arrayFromConstructorAndList(Constructor, target[key]);
	    }
	  } return target;
	};

	var $$4 = _export;
	var $group = arrayGroup;
	var addToUnscopables = addToUnscopables$4;

	// `Array.prototype.group` method
	// https://github.com/tc39/proposal-array-grouping
	$$4({ target: 'Array', proto: true }, {
	  group: function group(callbackfn /* , thisArg */) {
	    var thisArg = arguments.length > 1 ? arguments[1] : undefined;
	    return $group(this, callbackfn, thisArg);
	  }
	});

	addToUnscopables('group');

	var $RangeError = RangeError;

	var notANan = function (it) {
	  // eslint-disable-next-line no-self-compare -- NaN check
	  if (it === it) return it;
	  throw new $RangeError('NaN is not allowed');
	};

	var $$3 = _export;
	var call$2 = functionCall;
	var anObject$4 = anObject$y;
	var getIteratorDirect$3 = getIteratorDirect$c;
	var notANaN = notANan;
	var toPositiveInteger = toPositiveInteger$2;
	var createIteratorProxy$1 = iteratorCreateProxy;
	var IS_PURE$1 = isPure;

	var IteratorProxy$1 = createIteratorProxy$1(function () {
	  var iterator = this.iterator;
	  var next = this.next;
	  var result, done;
	  while (this.remaining) {
	    this.remaining--;
	    result = anObject$4(call$2(next, iterator));
	    done = this.done = !!result.done;
	    if (done) return;
	  }
	  result = anObject$4(call$2(next, iterator));
	  done = this.done = !!result.done;
	  if (!done) return result.value;
	});

	// `Iterator.prototype.drop` method
	// https://github.com/tc39/proposal-iterator-helpers
	$$3({ target: 'Iterator', proto: true, real: true, forced: IS_PURE$1 }, {
	  drop: function drop(limit) {
	    anObject$4(this);
	    var remaining = toPositiveInteger(notANaN(+limit));
	    return new IteratorProxy$1(getIteratorDirect$3(this), {
	      remaining: remaining
	    });
	  }
	});

	var call$1 = functionCall;
	var anObject$3 = anObject$y;
	var getIteratorDirect$2 = getIteratorDirect$c;
	var getIteratorMethod = getIteratorMethod$6;

	var getIteratorFlattenable$1 = function (obj, stringHandling) {
	  if (!stringHandling || typeof obj !== 'string') anObject$3(obj);
	  var method = getIteratorMethod(obj);
	  return getIteratorDirect$2(anObject$3(method !== undefined ? call$1(method, obj) : obj));
	};

	var $$2 = _export;
	var call = functionCall;
	var aCallable = aCallable$o;
	var anObject$2 = anObject$y;
	var getIteratorDirect$1 = getIteratorDirect$c;
	var getIteratorFlattenable = getIteratorFlattenable$1;
	var createIteratorProxy = iteratorCreateProxy;
	var iteratorClose = iteratorClose$6;
	var IS_PURE = isPure;

	var IteratorProxy = createIteratorProxy(function () {
	  var iterator = this.iterator;
	  var mapper = this.mapper;
	  var result, inner;

	  while (true) {
	    if (inner = this.inner) try {
	      result = anObject$2(call(inner.next, inner.iterator));
	      if (!result.done) return result.value;
	      this.inner = null;
	    } catch (error) { iteratorClose(iterator, 'throw', error); }

	    result = anObject$2(call(this.next, iterator));

	    if (this.done = !!result.done) return;

	    try {
	      this.inner = getIteratorFlattenable(mapper(result.value, this.counter++), false);
	    } catch (error) { iteratorClose(iterator, 'throw', error); }
	  }
	});

	// `Iterator.prototype.flatMap` method
	// https://github.com/tc39/proposal-iterator-helpers
	$$2({ target: 'Iterator', proto: true, real: true, forced: IS_PURE }, {
	  flatMap: function flatMap(mapper) {
	    anObject$2(this);
	    aCallable(mapper);
	    return new IteratorProxy(getIteratorDirect$1(this), {
	      mapper: mapper,
	      inner: null
	    });
	  }
	});

	var $$1 = _export;
	var anObject$1 = anObject$y;
	var iterate$1 = iterate$f;
	var getIteratorDirect = getIteratorDirect$c;

	var push$1 = [].push;

	// `Iterator.prototype.toArray` method
	// https://github.com/tc39/proposal-iterator-helpers
	$$1({ target: 'Iterator', proto: true, real: true }, {
	  toArray: function toArray() {
	    var result = [];
	    iterate$1(getIteratorDirect(anObject$1(this)), push$1, { that: result, IS_RECORD: true });
	    return result;
	  }
	});

	var uncurryThis$1 = functionUncurryThis;

	// eslint-disable-next-line es/no-map -- safe
	var MapPrototype = Map.prototype;

	var mapHelpers = {
	  // eslint-disable-next-line es/no-map -- safe
	  Map: Map,
	  set: uncurryThis$1(MapPrototype.set),
	  get: uncurryThis$1(MapPrototype.get),
	  has: uncurryThis$1(MapPrototype.has),
	  remove: uncurryThis$1(MapPrototype['delete']),
	  proto: MapPrototype
	};

	var $ = _export;
	var globalThis$1 = globalThis_1;
	var getBuiltIn = getBuiltIn$e;
	var uncurryThis = functionUncurryThis;
	var fails = fails$P;
	var uid = uid$5;
	var isCallable = isCallable$y;
	var isConstructor = isConstructor$5;
	var isNullOrUndefined = isNullOrUndefined$e;
	var isObject = isObject$r;
	var isSymbol = isSymbol$5;
	var iterate = iterate$f;
	var anObject = anObject$y;
	var classof = classof$j;
	var hasOwn = hasOwnProperty_1;
	var createProperty = createProperty$8;
	var createNonEnumerableProperty = createNonEnumerableProperty$f;
	var lengthOfArrayLike = lengthOfArrayLike$p;
	var validateArgumentsLength = validateArgumentsLength$8;
	var getRegExpFlags = regexpGetFlags;
	var MapHelpers = mapHelpers;
	var SetHelpers = setHelpers;
	var setIterate = setIterate$1;
	var detachTransferable = detachTransferable$2;
	var ERROR_STACK_INSTALLABLE = errorStackInstallable;
	var PROPER_STRUCTURED_CLONE_TRANSFER = structuredCloneProperTransfer;

	var Object$1 = globalThis$1.Object;
	var Array$1 = globalThis$1.Array;
	var Date = globalThis$1.Date;
	var Error$1 = globalThis$1.Error;
	var TypeError$1 = globalThis$1.TypeError;
	var PerformanceMark = globalThis$1.PerformanceMark;
	var DOMException = getBuiltIn('DOMException');
	var Map$1 = MapHelpers.Map;
	var mapHas = MapHelpers.has;
	var mapGet = MapHelpers.get;
	var mapSet = MapHelpers.set;
	var Set$1 = SetHelpers.Set;
	var setAdd = SetHelpers.add;
	var setHas = SetHelpers.has;
	var objectKeys = getBuiltIn('Object', 'keys');
	var push = uncurryThis([].push);
	var thisBooleanValue = uncurryThis(true.valueOf);
	var thisNumberValue = uncurryThis(1.0.valueOf);
	var thisStringValue = uncurryThis(''.valueOf);
	var thisTimeValue = uncurryThis(Date.prototype.getTime);
	var PERFORMANCE_MARK = uid('structuredClone');
	var DATA_CLONE_ERROR = 'DataCloneError';
	var TRANSFERRING = 'Transferring';

	var checkBasicSemantic = function (structuredCloneImplementation) {
	  return !fails(function () {
	    var set1 = new globalThis$1.Set([7]);
	    var set2 = structuredCloneImplementation(set1);
	    var number = structuredCloneImplementation(Object$1(7));
	    return set2 === set1 || !set2.has(7) || !isObject(number) || +number !== 7;
	  }) && structuredCloneImplementation;
	};

	var checkErrorsCloning = function (structuredCloneImplementation, $Error) {
	  return !fails(function () {
	    var error = new $Error();
	    var test = structuredCloneImplementation({ a: error, b: error });
	    return !(test && test.a === test.b && test.a instanceof $Error && test.a.stack === error.stack);
	  });
	};

	// https://github.com/whatwg/html/pull/5749
	var checkNewErrorsCloningSemantic = function (structuredCloneImplementation) {
	  return !fails(function () {
	    var test = structuredCloneImplementation(new globalThis$1.AggregateError([1], PERFORMANCE_MARK, { cause: 3 }));
	    return test.name !== 'AggregateError' || test.errors[0] !== 1 || test.message !== PERFORMANCE_MARK || test.cause !== 3;
	  });
	};

	// FF94+, Safari 15.4+, Chrome 98+, NodeJS 17.0+, Deno 1.13+
	// FF<103 and Safari implementations can't clone errors
	// https://bugzilla.mozilla.org/show_bug.cgi?id=1556604
	// FF103 can clone errors, but `.stack` of clone is an empty string
	// https://bugzilla.mozilla.org/show_bug.cgi?id=1778762
	// FF104+ fixed it on usual errors, but not on DOMExceptions
	// https://bugzilla.mozilla.org/show_bug.cgi?id=1777321
	// Chrome <102 returns `null` if cloned object contains multiple references to one error
	// https://bugs.chromium.org/p/v8/issues/detail?id=12542
	// NodeJS implementation can't clone DOMExceptions
	// https://github.com/nodejs/node/issues/41038
	// only FF103+ supports new (html/5749) error cloning semantic
	var nativeStructuredClone = globalThis$1.structuredClone;

	var FORCED_REPLACEMENT = !checkErrorsCloning(nativeStructuredClone, Error$1)
	  || !checkErrorsCloning(nativeStructuredClone, DOMException)
	  || !checkNewErrorsCloningSemantic(nativeStructuredClone);

	// Chrome 82+, Safari 14.1+, Deno 1.11+
	// Chrome 78-81 implementation swaps `.name` and `.message` of cloned `DOMException`
	// Chrome returns `null` if cloned object contains multiple references to one error
	// Safari 14.1 implementation doesn't clone some `RegExp` flags, so requires a workaround
	// Safari implementation can't clone errors
	// Deno 1.2-1.10 implementations too naive
	// NodeJS 16.0+ does not have `PerformanceMark` constructor
	// NodeJS <17.2 structured cloning implementation from `performance.mark` is too naive
	// and can't clone, for example, `RegExp` or some boxed primitives
	// https://github.com/nodejs/node/issues/40840
	// no one of those implementations supports new (html/5749) error cloning semantic
	var structuredCloneFromMark = !nativeStructuredClone && checkBasicSemantic(function (value) {
	  return new PerformanceMark(PERFORMANCE_MARK, { detail: value }).detail;
	});

	var nativeRestrictedStructuredClone = checkBasicSemantic(nativeStructuredClone) || structuredCloneFromMark;

	var throwUncloneable = function (type) {
	  throw new DOMException('Uncloneable type: ' + type, DATA_CLONE_ERROR);
	};

	var throwUnpolyfillable = function (type, action) {
	  throw new DOMException((action || 'Cloning') + ' of ' + type + ' cannot be properly polyfilled in this engine', DATA_CLONE_ERROR);
	};

	var tryNativeRestrictedStructuredClone = function (value, type) {
	  if (!nativeRestrictedStructuredClone) throwUnpolyfillable(type);
	  return nativeRestrictedStructuredClone(value);
	};

	var createDataTransfer = function () {
	  var dataTransfer;
	  try {
	    dataTransfer = new globalThis$1.DataTransfer();
	  } catch (error) {
	    try {
	      dataTransfer = new globalThis$1.ClipboardEvent('').clipboardData;
	    } catch (error2) { /* empty */ }
	  }
	  return dataTransfer && dataTransfer.items && dataTransfer.files ? dataTransfer : null;
	};

	var cloneBuffer = function (value, map, $type) {
	  if (mapHas(map, value)) return mapGet(map, value);

	  var type = $type || classof(value);
	  var clone, length, options, source, target, i;

	  if (type === 'SharedArrayBuffer') {
	    if (nativeRestrictedStructuredClone) clone = nativeRestrictedStructuredClone(value);
	    // SharedArrayBuffer should use shared memory, we can't polyfill it, so return the original
	    else clone = value;
	  } else {
	    var DataView = globalThis$1.DataView;

	    // `ArrayBuffer#slice` is not available in IE10
	    // `ArrayBuffer#slice` and `DataView` are not available in old FF
	    if (!DataView && !isCallable(value.slice)) throwUnpolyfillable('ArrayBuffer');
	    // detached buffers throws in `DataView` and `.slice`
	    try {
	      if (isCallable(value.slice) && !value.resizable) {
	        clone = value.slice(0);
	      } else {
	        length = value.byteLength;
	        options = 'maxByteLength' in value ? { maxByteLength: value.maxByteLength } : undefined;
	        // eslint-disable-next-line es/no-resizable-and-growable-arraybuffers -- safe
	        clone = new ArrayBuffer(length, options);
	        source = new DataView(value);
	        target = new DataView(clone);
	        for (i = 0; i < length; i++) {
	          target.setUint8(i, source.getUint8(i));
	        }
	      }
	    } catch (error) {
	      throw new DOMException('ArrayBuffer is detached', DATA_CLONE_ERROR);
	    }
	  }

	  mapSet(map, value, clone);

	  return clone;
	};

	var cloneView = function (value, type, offset, length, map) {
	  var C = globalThis$1[type];
	  // in some old engines like Safari 9, typeof C is 'object'
	  // on Uint8ClampedArray or some other constructors
	  if (!isObject(C)) throwUnpolyfillable(type);
	  return new C(cloneBuffer(value.buffer, map), offset, length);
	};

	var structuredCloneInternal = function (value, map) {
	  if (isSymbol(value)) throwUncloneable('Symbol');
	  if (!isObject(value)) return value;
	  // effectively preserves circular references
	  if (map) {
	    if (mapHas(map, value)) return mapGet(map, value);
	  } else map = new Map$1();

	  var type = classof(value);
	  var C, name, cloned, dataTransfer, i, length, keys, key;

	  switch (type) {
	    case 'Array':
	      cloned = Array$1(lengthOfArrayLike(value));
	      break;
	    case 'Object':
	      cloned = {};
	      break;
	    case 'Map':
	      cloned = new Map$1();
	      break;
	    case 'Set':
	      cloned = new Set$1();
	      break;
	    case 'RegExp':
	      // in this block because of a Safari 14.1 bug
	      // old FF does not clone regexes passed to the constructor, so get the source and flags directly
	      cloned = new RegExp(value.source, getRegExpFlags(value));
	      break;
	    case 'Error':
	      name = value.name;
	      switch (name) {
	        case 'AggregateError':
	          cloned = new (getBuiltIn(name))([]);
	          break;
	        case 'EvalError':
	        case 'RangeError':
	        case 'ReferenceError':
	        case 'SuppressedError':
	        case 'SyntaxError':
	        case 'TypeError':
	        case 'URIError':
	          cloned = new (getBuiltIn(name))();
	          break;
	        case 'CompileError':
	        case 'LinkError':
	        case 'RuntimeError':
	          cloned = new (getBuiltIn('WebAssembly', name))();
	          break;
	        default:
	          cloned = new Error$1();
	      }
	      break;
	    case 'DOMException':
	      cloned = new DOMException(value.message, value.name);
	      break;
	    case 'ArrayBuffer':
	    case 'SharedArrayBuffer':
	      cloned = cloneBuffer(value, map, type);
	      break;
	    case 'DataView':
	    case 'Int8Array':
	    case 'Uint8Array':
	    case 'Uint8ClampedArray':
	    case 'Int16Array':
	    case 'Uint16Array':
	    case 'Int32Array':
	    case 'Uint32Array':
	    case 'Float16Array':
	    case 'Float32Array':
	    case 'Float64Array':
	    case 'BigInt64Array':
	    case 'BigUint64Array':
	      length = type === 'DataView' ? value.byteLength : value.length;
	      cloned = cloneView(value, type, value.byteOffset, length, map);
	      break;
	    case 'DOMQuad':
	      try {
	        cloned = new DOMQuad(
	          structuredCloneInternal(value.p1, map),
	          structuredCloneInternal(value.p2, map),
	          structuredCloneInternal(value.p3, map),
	          structuredCloneInternal(value.p4, map)
	        );
	      } catch (error) {
	        cloned = tryNativeRestrictedStructuredClone(value, type);
	      }
	      break;
	    case 'File':
	      if (nativeRestrictedStructuredClone) try {
	        cloned = nativeRestrictedStructuredClone(value);
	        // NodeJS 20.0.0 bug, https://github.com/nodejs/node/issues/47612
	        if (classof(cloned) !== type) cloned = undefined;
	      } catch (error) { /* empty */ }
	      if (!cloned) try {
	        cloned = new File([value], value.name, value);
	      } catch (error) { /* empty */ }
	      if (!cloned) throwUnpolyfillable(type);
	      break;
	    case 'FileList':
	      dataTransfer = createDataTransfer();
	      if (dataTransfer) {
	        for (i = 0, length = lengthOfArrayLike(value); i < length; i++) {
	          dataTransfer.items.add(structuredCloneInternal(value[i], map));
	        }
	        cloned = dataTransfer.files;
	      } else cloned = tryNativeRestrictedStructuredClone(value, type);
	      break;
	    case 'ImageData':
	      // Safari 9 ImageData is a constructor, but typeof ImageData is 'object'
	      try {
	        cloned = new ImageData(
	          structuredCloneInternal(value.data, map),
	          value.width,
	          value.height,
	          { colorSpace: value.colorSpace }
	        );
	      } catch (error) {
	        cloned = tryNativeRestrictedStructuredClone(value, type);
	      } break;
	    default:
	      if (nativeRestrictedStructuredClone) {
	        cloned = nativeRestrictedStructuredClone(value);
	      } else switch (type) {
	        case 'BigInt':
	          // can be a 3rd party polyfill
	          cloned = Object$1(value.valueOf());
	          break;
	        case 'Boolean':
	          cloned = Object$1(thisBooleanValue(value));
	          break;
	        case 'Number':
	          cloned = Object$1(thisNumberValue(value));
	          break;
	        case 'String':
	          cloned = Object$1(thisStringValue(value));
	          break;
	        case 'Date':
	          cloned = new Date(thisTimeValue(value));
	          break;
	        case 'Blob':
	          try {
	            cloned = value.slice(0, value.size, value.type);
	          } catch (error) {
	            throwUnpolyfillable(type);
	          } break;
	        case 'DOMPoint':
	        case 'DOMPointReadOnly':
	          C = globalThis$1[type];
	          try {
	            cloned = C.fromPoint
	              ? C.fromPoint(value)
	              : new C(value.x, value.y, value.z, value.w);
	          } catch (error) {
	            throwUnpolyfillable(type);
	          } break;
	        case 'DOMRect':
	        case 'DOMRectReadOnly':
	          C = globalThis$1[type];
	          try {
	            cloned = C.fromRect
	              ? C.fromRect(value)
	              : new C(value.x, value.y, value.width, value.height);
	          } catch (error) {
	            throwUnpolyfillable(type);
	          } break;
	        case 'DOMMatrix':
	        case 'DOMMatrixReadOnly':
	          C = globalThis$1[type];
	          try {
	            cloned = C.fromMatrix
	              ? C.fromMatrix(value)
	              : new C(value);
	          } catch (error) {
	            throwUnpolyfillable(type);
	          } break;
	        case 'AudioData':
	        case 'VideoFrame':
	          if (!isCallable(value.clone)) throwUnpolyfillable(type);
	          try {
	            cloned = value.clone();
	          } catch (error) {
	            throwUncloneable(type);
	          } break;
	        case 'CropTarget':
	        case 'CryptoKey':
	        case 'FileSystemDirectoryHandle':
	        case 'FileSystemFileHandle':
	        case 'FileSystemHandle':
	        case 'GPUCompilationInfo':
	        case 'GPUCompilationMessage':
	        case 'ImageBitmap':
	        case 'RTCCertificate':
	        case 'WebAssembly.Module':
	          throwUnpolyfillable(type);
	          // break omitted
	        default:
	          throwUncloneable(type);
	      }
	  }

	  mapSet(map, value, cloned);

	  switch (type) {
	    case 'Array':
	    case 'Object':
	      keys = objectKeys(value);
	      for (i = 0, length = lengthOfArrayLike(keys); i < length; i++) {
	        key = keys[i];
	        createProperty(cloned, key, structuredCloneInternal(value[key], map));
	      } break;
	    case 'Map':
	      value.forEach(function (v, k) {
	        mapSet(cloned, structuredCloneInternal(k, map), structuredCloneInternal(v, map));
	      });
	      break;
	    case 'Set':
	      value.forEach(function (v) {
	        setAdd(cloned, structuredCloneInternal(v, map));
	      });
	      break;
	    case 'Error':
	      createNonEnumerableProperty(cloned, 'message', structuredCloneInternal(value.message, map));
	      if (hasOwn(value, 'cause')) {
	        createNonEnumerableProperty(cloned, 'cause', structuredCloneInternal(value.cause, map));
	      }
	      if (name === 'AggregateError') {
	        cloned.errors = structuredCloneInternal(value.errors, map);
	      } else if (name === 'SuppressedError') {
	        cloned.error = structuredCloneInternal(value.error, map);
	        cloned.suppressed = structuredCloneInternal(value.suppressed, map);
	      } // break omitted
	    case 'DOMException':
	      if (ERROR_STACK_INSTALLABLE) {
	        createNonEnumerableProperty(cloned, 'stack', structuredCloneInternal(value.stack, map));
	      }
	  }

	  return cloned;
	};

	var tryToTransfer = function (rawTransfer, map) {
	  if (!isObject(rawTransfer)) throw new TypeError$1('Transfer option cannot be converted to a sequence');

	  var transfer = [];

	  iterate(rawTransfer, function (value) {
	    push(transfer, anObject(value));
	  });

	  var i = 0;
	  var length = lengthOfArrayLike(transfer);
	  var buffers = new Set$1();
	  var value, type, C, transferred, canvas, context;

	  while (i < length) {
	    value = transfer[i++];

	    type = classof(value);

	    if (type === 'ArrayBuffer' ? setHas(buffers, value) : mapHas(map, value)) {
	      throw new DOMException('Duplicate transferable', DATA_CLONE_ERROR);
	    }

	    if (type === 'ArrayBuffer') {
	      setAdd(buffers, value);
	      continue;
	    }

	    if (PROPER_STRUCTURED_CLONE_TRANSFER) {
	      transferred = nativeStructuredClone(value, { transfer: [value] });
	    } else switch (type) {
	      case 'ImageBitmap':
	        C = globalThis$1.OffscreenCanvas;
	        if (!isConstructor(C)) throwUnpolyfillable(type, TRANSFERRING);
	        try {
	          canvas = new C(value.width, value.height);
	          context = canvas.getContext('bitmaprenderer');
	          context.transferFromImageBitmap(value);
	          transferred = canvas.transferToImageBitmap();
	        } catch (error) { /* empty */ }
	        break;
	      case 'AudioData':
	      case 'VideoFrame':
	        if (!isCallable(value.clone) || !isCallable(value.close)) throwUnpolyfillable(type, TRANSFERRING);
	        try {
	          transferred = value.clone();
	          value.close();
	        } catch (error) { /* empty */ }
	        break;
	      case 'MediaSourceHandle':
	      case 'MessagePort':
	      case 'OffscreenCanvas':
	      case 'ReadableStream':
	      case 'TransformStream':
	      case 'WritableStream':
	        throwUnpolyfillable(type, TRANSFERRING);
	    }

	    if (transferred === undefined) throw new DOMException('This object cannot be transferred: ' + type, DATA_CLONE_ERROR);

	    mapSet(map, value, transferred);
	  }

	  return buffers;
	};

	var detachBuffers = function (buffers) {
	  setIterate(buffers, function (buffer) {
	    if (PROPER_STRUCTURED_CLONE_TRANSFER) {
	      nativeRestrictedStructuredClone(buffer, { transfer: [buffer] });
	    } else if (isCallable(buffer.transfer)) {
	      buffer.transfer();
	    } else if (detachTransferable) {
	      detachTransferable(buffer);
	    } else {
	      throwUnpolyfillable('ArrayBuffer', TRANSFERRING);
	    }
	  });
	};

	// `structuredClone` method
	// https://html.spec.whatwg.org/multipage/structured-data.html#dom-structuredclone
	$({ global: true, enumerable: true, sham: !PROPER_STRUCTURED_CLONE_TRANSFER, forced: FORCED_REPLACEMENT }, {
	  structuredClone: function structuredClone(value /* , { transfer } */) {
	    var options = validateArgumentsLength(arguments.length, 1) > 1 && !isNullOrUndefined(arguments[1]) ? anObject(arguments[1]) : undefined;
	    var transfer = options ? options.transfer : undefined;
	    var map, buffers;

	    if (transfer !== undefined) {
	      map = new Map$1();
	      buffers = tryToTransfer(transfer, map);
	    }

	    var clone = structuredCloneInternal(value, map);

	    // since of an issue with cloning views of transferred buffers, we a forced to detach them later
	    // https://github.com/zloirock/core-js/issues/1265
	    if (buffers) detachBuffers(buffers);

	    return clone;
	  }
	});

	/*!
	 * SJS 6.15.1
	 */

	!function(){function e(e,t){return (t||"")+" (SystemJS https://github.com/systemjs/systemjs/blob/main/docs/errors.md#"+e+")"}function t(e,t){if(-1!==e.indexOf("\\")&&(e=e.replace(S,"/")),"/"===e[0]&&"/"===e[1])return t.slice(0,t.indexOf(":")+1)+e;if("."===e[0]&&("/"===e[1]||"."===e[1]&&("/"===e[2]||2===e.length&&(e+="/"))||1===e.length&&(e+="/"))||"/"===e[0]){var r,n=t.slice(0,t.indexOf(":")+1);if(r="/"===t[n.length+1]?"file:"!==n?(r=t.slice(n.length+2)).slice(r.indexOf("/")+1):t.slice(8):t.slice(n.length+("/"===t[n.length])),"/"===e[0])return t.slice(0,t.length-r.length-1)+e;for(var i=r.slice(0,r.lastIndexOf("/")+1)+e,o=[],s=-1,c=0;c<i.length;c++)-1!==s?"/"===i[c]&&(o.push(i.slice(s,c+1)),s=-1):"."===i[c]?"."!==i[c+1]||"/"!==i[c+2]&&c+2!==i.length?"/"===i[c+1]||c+1===i.length?c+=1:s=c:(o.pop(),c+=2):s=c;return -1!==s&&o.push(i.slice(s)),t.slice(0,t.length-r.length)+o.join("")}}function r(e,r){return t(e,r)||(-1!==e.indexOf(":")?e:t("./"+e,r))}function n(e,r,n,i,o){for(var s in e){var f=t(s,n)||s,a=e[s];if("string"==typeof a){var l=u(i,t(a,n)||a,o);l?r[f]=l:c("W1",s,a);}}}function i(e,t,i){var o;for(o in e.imports&&n(e.imports,i.imports,t,i,null),e.scopes||{}){var s=r(o,t);n(e.scopes[o],i.scopes[s]||(i.scopes[s]={}),t,i,s);}for(o in e.depcache||{})i.depcache[r(o,t)]=e.depcache[o];for(o in e.integrity||{})i.integrity[r(o,t)]=e.integrity[o];}function o(e,t){if(t[e])return e;var r=e.length;do{var n=e.slice(0,r+1);if(n in t)return n}while(-1!==(r=e.lastIndexOf("/",r-1)))}function s(e,t){var r=o(e,t);if(r){var n=t[r];if(null===n)return;if(!(e.length>r.length&&"/"!==n[n.length-1]))return n+e.slice(r.length);c("W2",r,n);}}function c(t,r,n){console.warn(e(t,[n,r].join(", ")));}function u(e,t,r){for(var n=e.scopes,i=r&&o(r,n);i;){var c=s(t,n[i]);if(c)return c;i=o(i.slice(0,i.lastIndexOf("/")),n);}return s(t,e.imports)||-1!==t.indexOf(":")&&t}function f(){this[b]={};}function a(t,r,n,i){var o=t[b][r];if(o)return o;var s=[],c=Object.create(null);j&&Object.defineProperty(c,j,{value:"Module"});var u=Promise.resolve().then((function(){return t.instantiate(r,n,i)})).then((function(n){if(!n)throw Error(e(2,r));var i=n[1]((function(e,t){o.h=!0;var r=!1;if("string"==typeof e)e in c&&c[e]===t||(c[e]=t,r=!0);else {for(var n in e)t=e[n],n in c&&c[n]===t||(c[n]=t,r=!0);e&&e.__esModule&&(c.__esModule=e.__esModule);}if(r)for(var i=0;i<s.length;i++){var u=s[i];u&&u(c);}return t}),2===n[1].length?{import:function(e,n){return t.import(e,r,n)},meta:t.createContext(r)}:void 0);return o.e=i.execute||function(){},[n[0],i.setters||[],n[2]||[]]}),(function(e){throw o.e=null,o.er=e,e})),f=u.then((function(e){return Promise.all(e[0].map((function(n,i){var o=e[1][i],s=e[2][i];return Promise.resolve(t.resolve(n,r)).then((function(e){var n=a(t,e,r,s);return Promise.resolve(n.I).then((function(){return o&&(n.i.push(o),!n.h&&n.I||o(n.n)),n}))}))}))).then((function(e){o.d=e;}))}));return o=t[b][r]={id:r,i:s,n:c,m:i,I:u,L:f,h:!1,d:void 0,e:void 0,er:void 0,E:void 0,C:void 0,p:void 0}}function l(e,t,r,n){if(!n[t.id])return n[t.id]=!0,Promise.resolve(t.L).then((function(){return t.p&&null!==t.p.e||(t.p=r),Promise.all(t.d.map((function(t){return l(e,t,r,n)})))})).catch((function(e){if(t.er)throw e;throw t.e=null,e}))}function h(e,t){return t.C=l(e,t,t,{}).then((function(){return d(e,t,{})})).then((function(){return t.n}))}function d(e,t,r){function n(){try{var e=o.call(I);if(e)return e=e.then((function(){t.C=t.n,t.E=null;}),(function(e){throw t.er=e,t.E=null,e})),t.E=e;t.C=t.n,t.L=t.I=void 0;}catch(r){throw t.er=r,r}}if(!r[t.id]){if(r[t.id]=!0,!t.e){if(t.er)throw t.er;return t.E?t.E:void 0}var i,o=t.e;return t.e=null,t.d.forEach((function(n){try{var o=d(e,n,r);o&&(i=i||[]).push(o);}catch(s){throw t.er=s,s}})),i?Promise.all(i).then(n):n()}}function v(){[].forEach.call(document.querySelectorAll("script"),(function(t){if(!t.sp)if("systemjs-module"===t.type){if(t.sp=!0,!t.src)return;System.import("import:"===t.src.slice(0,7)?t.src.slice(7):r(t.src,p)).catch((function(e){if(e.message.indexOf("https://github.com/systemjs/systemjs/blob/main/docs/errors.md#3")>-1){var r=document.createEvent("Event");r.initEvent("error",!1,!1),t.dispatchEvent(r);}return Promise.reject(e)}));}else if("systemjs-importmap"===t.type){t.sp=!0;var n=t.src?(System.fetch||fetch)(t.src,{integrity:t.integrity,priority:t.fetchPriority,passThrough:!0}).then((function(e){if(!e.ok)throw Error(e.status);return e.text()})).catch((function(r){return r.message=e("W4",t.src)+"\n"+r.message,console.warn(r),"function"==typeof t.onerror&&t.onerror(),"{}"})):t.innerHTML;M=M.then((function(){return n})).then((function(r){!function(t,r,n){var o={};try{o=JSON.parse(r);}catch(s){console.warn(Error(e("W5")));}i(o,n,t);}(R,r,t.src||p);}));}}));}var p,m="undefined"!=typeof Symbol,g="undefined"!=typeof self,y="undefined"!=typeof document,E=g?self:commonjsGlobal;if(y){var w=document.querySelector("base[href]");w&&(p=w.href);}if(!p&&"undefined"!=typeof location){var O=(p=location.href.split("#")[0].split("?")[0]).lastIndexOf("/");-1!==O&&(p=p.slice(0,O+1));}var x,S=/\\/g,j=m&&Symbol.toStringTag,b=m?Symbol():"@",P=f.prototype;P.import=function(e,t,r){var n=this;return t&&"object"==typeof t&&(r=t,t=void 0),Promise.resolve(n.prepareImport()).then((function(){return n.resolve(e,t,r)})).then((function(e){var t=a(n,e,void 0,r);return t.C||h(n,t)}))},P.createContext=function(e){var t=this;return {url:e,resolve:function(r,n){return Promise.resolve(t.resolve(r,n||e))}}},P.register=function(e,t,r){x=[e,t,r];},P.getRegister=function(){var e=x;return x=void 0,e};var I=Object.freeze(Object.create(null));E.System=new f;var L,C,M=Promise.resolve(),R={imports:{},scopes:{},depcache:{},integrity:{}},T=y;if(P.prepareImport=function(e){return (T||e)&&(v(),T=!1),M},P.getImportMap=function(){return JSON.parse(JSON.stringify(R))},y&&(v(),window.addEventListener("DOMContentLoaded",v)),P.addImportMap=function(e,t){i(e,t||p,R);},y){window.addEventListener("error",(function(e){J=e.filename,W=e.error;}));var _=location.origin;}P.createScript=function(e){var t=document.createElement("script");t.async=!0,e.indexOf(_+"/")&&(t.crossOrigin="anonymous");var r=R.integrity[e];return r&&(t.integrity=r),t.src=e,t};var J,W,q={},N=P.register;P.register=function(e,t){if(y&&"loading"===document.readyState&&"string"!=typeof e){var r=document.querySelectorAll("script[src]"),n=r[r.length-1];if(n){L=e;var i=this;C=setTimeout((function(){q[n.src]=[e,t],i.import(n.src);}));}}else L=void 0;return N.call(this,e,t)},P.instantiate=function(t,r){var n=q[t];if(n)return delete q[t],n;var i=this;return Promise.resolve(P.createScript(t)).then((function(n){return new Promise((function(o,s){n.addEventListener("error",(function(){s(Error(e(3,[t,r].join(", "))));})),n.addEventListener("load",(function(){if(document.head.removeChild(n),J===t)s(W);else {var e=i.getRegister(t);e&&e[0]===L&&clearTimeout(C),o(e);}})),document.head.appendChild(n);}))}))},P.shouldFetch=function(){return !1},"undefined"!=typeof fetch&&(P.fetch=fetch);var k=P.instantiate,A=/^(text|application)\/(x-)?javascript(;|$)/;P.instantiate=function(t,r,n){var i=this;return this.shouldFetch(t,r,n)?this.fetch(t,{credentials:"same-origin",integrity:R.integrity[t],meta:n}).then((function(n){if(!n.ok)throw Error(e(7,[n.status,n.statusText,t,r].join(", ")));var o=n.headers.get("content-type");if(!o||!A.test(o))throw Error(e(4,o));return n.text().then((function(e){return e.indexOf("//# sourceURL=")<0&&(e+="\n//# sourceURL="+t),(0, eval)(e),i.getRegister(t)}))})):k.apply(this,arguments)},P.resolve=function(r,n){return u(R,t(r,n=n||p)||r,n)||function(t,r){throw Error(e(8,[t,r].join(", ")))}(r,n)};var F=P.instantiate;P.instantiate=function(e,t,r){var n=R.depcache[e];if(n)for(var i=0;i<n.length;i++)a(this,this.resolve(n[i],e),e);return F.call(this,e,t,r)},g&&"function"==typeof importScripts&&(P.instantiate=function(e){var t=this;return Promise.resolve().then((function(){return importScripts(e),t.getRegister(e)}))});}();

})();
