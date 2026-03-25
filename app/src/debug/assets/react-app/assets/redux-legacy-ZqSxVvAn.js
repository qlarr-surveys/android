;
(function () {
  System.register(['./i18n-legacy-BRT6G2_g.js', './vendor-legacy-lhtLtiSI.js', './mui-legacy-b38CRKaY.js', './editor-legacy-Dx3AxXyy.js'], function (exports, module) {
    'use strict';

    var _defineProperty, reactExports, reactDomExports, withSelectorExports;
    return {
      setters: [module => {
        _defineProperty = module._;
      }, module => {
        reactExports = module.r;
        reactDomExports = module.c;
      }, null, module => {
        withSelectorExports = module.w;
      }],
      execute: function execute() {
        exports({
          P: Provider,
          a: createSlice,
          c: createStore,
          d: configureStore,
          s: shallowEqual
        });
        function n$1(n2) {
          for (var r2 = arguments.length, t2 = Array(r2 > 1 ? r2 - 1 : 0), e2 = 1; e2 < r2; e2++) t2[e2 - 1] = arguments[e2];
          throw Error("[Immer] minified error nr: " + n2 + (t2.length ? " " + t2.map(function (n3) {
            return "'" + n3 + "'";
          }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
        }
        function r(n2) {
          return !!n2 && !!n2[Q];
        }
        function t$1(n2) {
          var r2;
          return !!n2 && (function (n3) {
            if (!n3 || "object" != typeof n3) return false;
            var r3 = Object.getPrototypeOf(n3);
            if (null === r3) return true;
            var t2 = Object.hasOwnProperty.call(r3, "constructor") && r3.constructor;
            return t2 === Object || "function" == typeof t2 && Function.toString.call(t2) === Z;
          }(n2) || Array.isArray(n2) || !!n2[L] || !!(null === (r2 = n2.constructor) || void 0 === r2 ? void 0 : r2[L]) || s(n2) || v$1(n2));
        }
        function i(n2, r2, t2) {
          void 0 === t2 && (t2 = false), 0 === o(n2) ? (t2 ? Object.keys : nn)(n2).forEach(function (e2) {
            t2 && "symbol" == typeof e2 || r2(e2, n2[e2], n2);
          }) : n2.forEach(function (t3, e2) {
            return r2(e2, t3, n2);
          });
        }
        function o(n2) {
          var r2 = n2[Q];
          return r2 ? r2.i > 3 ? r2.i - 4 : r2.i : Array.isArray(n2) ? 1 : s(n2) ? 2 : v$1(n2) ? 3 : 0;
        }
        function u$1(n2, r2) {
          return 2 === o(n2) ? n2.has(r2) : Object.prototype.hasOwnProperty.call(n2, r2);
        }
        function a(n2, r2) {
          return 2 === o(n2) ? n2.get(r2) : n2[r2];
        }
        function f$1(n2, r2, t2) {
          var e2 = o(n2);
          2 === e2 ? n2.set(r2, t2) : 3 === e2 ? n2.add(t2) : n2[r2] = t2;
        }
        function c$1(n2, r2) {
          return n2 === r2 ? 0 !== n2 || 1 / n2 == 1 / r2 : n2 != n2 && r2 != r2;
        }
        function s(n2) {
          return X && n2 instanceof Map;
        }
        function v$1(n2) {
          return q$1 && n2 instanceof Set;
        }
        function p$1(n2) {
          return n2.o || n2.t;
        }
        function l$1(n2) {
          if (Array.isArray(n2)) return Array.prototype.slice.call(n2);
          var r2 = rn(n2);
          delete r2[Q];
          for (var t2 = nn(r2), e2 = 0; e2 < t2.length; e2++) {
            var i2 = t2[e2],
              o2 = r2[i2];
            false === o2.writable && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (r2[i2] = {
              configurable: true,
              writable: true,
              enumerable: o2.enumerable,
              value: n2[i2]
            });
          }
          return Object.create(Object.getPrototypeOf(n2), r2);
        }
        function d$1(n2, e2) {
          return void 0 === e2 && (e2 = false), y(n2) || r(n2) || !t$1(n2) || (o(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h$1), Object.freeze(n2), e2 && i(n2, function (n3, r2) {
            return d$1(r2, true);
          }, true)), n2;
        }
        function h$1() {
          n$1(2);
        }
        function y(n2) {
          return null == n2 || "object" != typeof n2 || Object.isFrozen(n2);
        }
        function b$1(r2) {
          var t2 = tn[r2];
          return t2 || n$1(18, r2), t2;
        }
        function m$1(n2, r2) {
          tn[n2] || (tn[n2] = r2);
        }
        function _() {
          return U;
        }
        function j(n2, r2) {
          r2 && (b$1("Patches"), n2.u = [], n2.s = [], n2.v = r2);
        }
        function g$1(n2) {
          O(n2), n2.p.forEach(S), n2.p = null;
        }
        function O(n2) {
          n2 === U && (U = n2.l);
        }
        function w(n2) {
          return U = {
            p: [],
            l: U,
            h: n2,
            m: true,
            _: 0
          };
        }
        function S(n2) {
          var r2 = n2[Q];
          0 === r2.i || 1 === r2.i ? r2.j() : r2.g = true;
        }
        function P(r2, e2) {
          e2._ = e2.p.length;
          var i2 = e2.p[0],
            o2 = void 0 !== r2 && r2 !== i2;
          return e2.h.O || b$1("ES5").S(e2, r2, o2), o2 ? (i2[Q].P && (g$1(e2), n$1(4)), t$1(r2) && (r2 = M(e2, r2), e2.l || x(e2, r2)), e2.u && b$1("Patches").M(i2[Q].t, r2, e2.u, e2.s)) : r2 = M(e2, i2, []), g$1(e2), e2.u && e2.v(e2.u, e2.s), r2 !== H ? r2 : void 0;
        }
        function M(n2, r2, t2) {
          if (y(r2)) return r2;
          var e2 = r2[Q];
          if (!e2) return i(r2, function (i2, o3) {
            return A(n2, e2, r2, i2, o3, t2);
          }, true), r2;
          if (e2.A !== n2) return r2;
          if (!e2.P) return x(n2, e2.t, true), e2.t;
          if (!e2.I) {
            e2.I = true, e2.A._--;
            var o2 = 4 === e2.i || 5 === e2.i ? e2.o = l$1(e2.k) : e2.o,
              u2 = o2,
              a2 = false;
            3 === e2.i && (u2 = new Set(o2), o2.clear(), a2 = true), i(u2, function (r3, i2) {
              return A(n2, e2, o2, r3, i2, t2, a2);
            }), x(n2, o2, false), t2 && n2.u && b$1("Patches").N(e2, t2, n2.u, n2.s);
          }
          return e2.o;
        }
        function A(e2, i2, o2, a2, c2, s2, v2) {
          if (r(c2)) {
            var p2 = M(e2, c2, s2 && i2 && 3 !== i2.i && !u$1(i2.R, a2) ? s2.concat(a2) : void 0);
            if (f$1(o2, a2, p2), !r(p2)) return;
            e2.m = false;
          } else v2 && o2.add(c2);
          if (t$1(c2) && !y(c2)) {
            if (!e2.h.D && e2._ < 1) return;
            M(e2, c2), i2 && i2.A.l || x(e2, c2);
          }
        }
        function x(n2, r2, t2) {
          void 0 === t2 && (t2 = false), !n2.l && n2.h.D && n2.m && d$1(r2, t2);
        }
        function z(n2, r2) {
          var t2 = n2[Q];
          return (t2 ? p$1(t2) : n2)[r2];
        }
        function I(n2, r2) {
          if (r2 in n2) for (var t2 = Object.getPrototypeOf(n2); t2;) {
            var e2 = Object.getOwnPropertyDescriptor(t2, r2);
            if (e2) return e2;
            t2 = Object.getPrototypeOf(t2);
          }
        }
        function k$1(n2) {
          n2.P || (n2.P = true, n2.l && k$1(n2.l));
        }
        function E(n2) {
          n2.o || (n2.o = l$1(n2.t));
        }
        function N(n2, r2, t2) {
          var e2 = s(r2) ? b$1("MapSet").F(r2, t2) : v$1(r2) ? b$1("MapSet").T(r2, t2) : n2.O ? function (n3, r3) {
            var t3 = Array.isArray(n3),
              e3 = {
                i: t3 ? 1 : 0,
                A: r3 ? r3.A : _(),
                P: false,
                I: false,
                R: {},
                l: r3,
                t: n3,
                k: null,
                o: null,
                j: null,
                C: false
              },
              i2 = e3,
              o2 = en;
            t3 && (i2 = [e3], o2 = on);
            var u2 = Proxy.revocable(i2, o2),
              a2 = u2.revoke,
              f2 = u2.proxy;
            return e3.k = f2, e3.j = a2, f2;
          }(r2, t2) : b$1("ES5").J(r2, t2);
          return (t2 ? t2.A : _()).p.push(e2), e2;
        }
        function R(e2) {
          return r(e2) || n$1(22, e2), function n2(r2) {
            if (!t$1(r2)) return r2;
            var e3,
              u2 = r2[Q],
              c2 = o(r2);
            if (u2) {
              if (!u2.P && (u2.i < 4 || !b$1("ES5").K(u2))) return u2.t;
              u2.I = true, e3 = D(r2, c2), u2.I = false;
            } else e3 = D(r2, c2);
            return i(e3, function (r3, t2) {
              u2 && a(u2.t, r3) === t2 || f$1(e3, r3, n2(t2));
            }), 3 === c2 ? new Set(e3) : e3;
          }(e2);
        }
        function D(n2, r2) {
          switch (r2) {
            case 2:
              return new Map(n2);
            case 3:
              return Array.from(n2);
          }
          return l$1(n2);
        }
        function F() {
          function t2(n2, r2) {
            var t3 = s2[n2];
            return t3 ? t3.enumerable = r2 : s2[n2] = t3 = {
              configurable: true,
              enumerable: r2,
              get: function get() {
                var r3 = this[Q];
                return en.get(r3, n2);
              },
              set: function set(r3) {
                var t4 = this[Q];
                en.set(t4, n2, r3);
              }
            }, t3;
          }
          function e2(n2) {
            for (var r2 = n2.length - 1; r2 >= 0; r2--) {
              var t3 = n2[r2][Q];
              if (!t3.P) switch (t3.i) {
                case 5:
                  a2(t3) && k$1(t3);
                  break;
                case 4:
                  o2(t3) && k$1(t3);
              }
            }
          }
          function o2(n2) {
            for (var r2 = n2.t, t3 = n2.k, e3 = nn(t3), i2 = e3.length - 1; i2 >= 0; i2--) {
              var o3 = e3[i2];
              if (o3 !== Q) {
                var a3 = r2[o3];
                if (void 0 === a3 && !u$1(r2, o3)) return true;
                var f3 = t3[o3],
                  s3 = f3 && f3[Q];
                if (s3 ? s3.t !== a3 : !c$1(f3, a3)) return true;
              }
            }
            var v2 = !!r2[Q];
            return e3.length !== nn(r2).length + (v2 ? 0 : 1);
          }
          function a2(n2) {
            var r2 = n2.k;
            if (r2.length !== n2.t.length) return true;
            var t3 = Object.getOwnPropertyDescriptor(r2, r2.length - 1);
            if (t3 && !t3.get) return true;
            for (var e3 = 0; e3 < r2.length; e3++) if (!r2.hasOwnProperty(e3)) return true;
            return false;
          }
          var s2 = {};
          m$1("ES5", {
            J: function J(n2, r2) {
              var e3 = Array.isArray(n2),
                i2 = function (n3, r3) {
                  if (n3) {
                    for (var e4 = Array(r3.length), i3 = 0; i3 < r3.length; i3++) Object.defineProperty(e4, "" + i3, t2(i3, true));
                    return e4;
                  }
                  var o4 = rn(r3);
                  delete o4[Q];
                  for (var u2 = nn(o4), a3 = 0; a3 < u2.length; a3++) {
                    var f3 = u2[a3];
                    o4[f3] = t2(f3, n3 || !!o4[f3].enumerable);
                  }
                  return Object.create(Object.getPrototypeOf(r3), o4);
                }(e3, n2),
                o3 = {
                  i: e3 ? 5 : 4,
                  A: r2 ? r2.A : _(),
                  P: false,
                  I: false,
                  R: {},
                  l: r2,
                  t: n2,
                  k: i2,
                  o: null,
                  g: false,
                  C: false
                };
              return Object.defineProperty(i2, Q, {
                value: o3,
                writable: true
              }), i2;
            },
            S: function S(n2, t3, o3) {
              o3 ? r(t3) && t3[Q].A === n2 && e2(n2.p) : (n2.u && function n3(r2) {
                if (r2 && "object" == typeof r2) {
                  var t4 = r2[Q];
                  if (t4) {
                    var e3 = t4.t,
                      o4 = t4.k,
                      f3 = t4.R,
                      c2 = t4.i;
                    if (4 === c2) i(o4, function (r3) {
                      r3 !== Q && (void 0 !== e3[r3] || u$1(e3, r3) ? f3[r3] || n3(o4[r3]) : (f3[r3] = true, k$1(t4)));
                    }), i(e3, function (n4) {
                      void 0 !== o4[n4] || u$1(o4, n4) || (f3[n4] = false, k$1(t4));
                    });else if (5 === c2) {
                      if (a2(t4) && (k$1(t4), f3.length = true), o4.length < e3.length) for (var s3 = o4.length; s3 < e3.length; s3++) f3[s3] = false;else for (var v2 = e3.length; v2 < o4.length; v2++) f3[v2] = true;
                      for (var p2 = Math.min(o4.length, e3.length), l2 = 0; l2 < p2; l2++) o4.hasOwnProperty(l2) || (f3[l2] = true), void 0 === f3[l2] && n3(o4[l2]);
                    }
                  }
                }
              }(n2.p[0]), e2(n2.p));
            },
            K: function K(n2) {
              return 4 === n2.i ? o2(n2) : a2(n2);
            }
          });
        }
        var G,
          U,
          W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
          X = "undefined" != typeof Map,
          q$1 = "undefined" != typeof Set,
          B = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect,
          H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G),
          L = W ? Symbol.for("immer-draftable") : "__$immer_draftable",
          Q = W ? Symbol.for("immer-state") : "__$immer_state",
          Z = "" + Object.prototype.constructor,
          nn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function (n2) {
            return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
          } : Object.getOwnPropertyNames,
          rn = Object.getOwnPropertyDescriptors || function (n2) {
            var r2 = {};
            return nn(n2).forEach(function (t2) {
              r2[t2] = Object.getOwnPropertyDescriptor(n2, t2);
            }), r2;
          },
          tn = {},
          en = {
            get: function get(n2, r2) {
              if (r2 === Q) return n2;
              var e2 = p$1(n2);
              if (!u$1(e2, r2)) return function (n3, r3, t2) {
                var e3,
                  i3 = I(r3, t2);
                return i3 ? "value" in i3 ? i3.value : null === (e3 = i3.get) || void 0 === e3 ? void 0 : e3.call(n3.k) : void 0;
              }(n2, e2, r2);
              var i2 = e2[r2];
              return n2.I || !t$1(i2) ? i2 : i2 === z(n2.t, r2) ? (E(n2), n2.o[r2] = N(n2.A.h, i2, n2)) : i2;
            },
            has: function has(n2, r2) {
              return r2 in p$1(n2);
            },
            ownKeys: function ownKeys(n2) {
              return Reflect.ownKeys(p$1(n2));
            },
            set: function set(n2, r2, t2) {
              var e2 = I(p$1(n2), r2);
              if (null == e2 ? void 0 : e2.set) return e2.set.call(n2.k, t2), true;
              if (!n2.P) {
                var i2 = z(p$1(n2), r2),
                  o2 = null == i2 ? void 0 : i2[Q];
                if (o2 && o2.t === t2) return n2.o[r2] = t2, n2.R[r2] = false, true;
                if (c$1(t2, i2) && (void 0 !== t2 || u$1(n2.t, r2))) return true;
                E(n2), k$1(n2);
              }
              return n2.o[r2] === t2 && (void 0 !== t2 || r2 in n2.o) || Number.isNaN(t2) && Number.isNaN(n2.o[r2]) || (n2.o[r2] = t2, n2.R[r2] = true), true;
            },
            deleteProperty: function deleteProperty(n2, r2) {
              return void 0 !== z(n2.t, r2) || r2 in n2.t ? (n2.R[r2] = false, E(n2), k$1(n2)) : delete n2.R[r2], n2.o && delete n2.o[r2], true;
            },
            getOwnPropertyDescriptor: function getOwnPropertyDescriptor(n2, r2) {
              var t2 = p$1(n2),
                e2 = Reflect.getOwnPropertyDescriptor(t2, r2);
              return e2 ? {
                writable: true,
                configurable: 1 !== n2.i || "length" !== r2,
                enumerable: e2.enumerable,
                value: t2[r2]
              } : e2;
            },
            defineProperty: function defineProperty() {
              n$1(11);
            },
            getPrototypeOf: function getPrototypeOf(n2) {
              return Object.getPrototypeOf(n2.t);
            },
            setPrototypeOf: function setPrototypeOf() {
              n$1(12);
            }
          },
          on = {};
        i(en, function (n2, r2) {
          on[n2] = function () {
            return arguments[0] = arguments[0][0], r2.apply(this, arguments);
          };
        }), on.deleteProperty = function (r2, t2) {
          return on.set.call(this, r2, t2, void 0);
        }, on.set = function (r2, t2, e2) {
          return en.set.call(this, r2[0], t2, e2, r2[0]);
        };
        var un = function () {
            function e2(r2) {
              var e3 = this;
              this.O = B, this.D = true, this.produce = function (r3, i3, o2) {
                if ("function" == typeof r3 && "function" != typeof i3) {
                  var u2 = i3;
                  i3 = r3;
                  var a2 = e3;
                  return function (n2) {
                    var r4 = this;
                    void 0 === n2 && (n2 = u2);
                    for (var t2 = arguments.length, e4 = Array(t2 > 1 ? t2 - 1 : 0), o3 = 1; o3 < t2; o3++) e4[o3 - 1] = arguments[o3];
                    return a2.produce(n2, function (n3) {
                      var t3;
                      return (t3 = i3).call.apply(t3, [r4, n3].concat(e4));
                    });
                  };
                }
                var f2;
                if ("function" != typeof i3 && n$1(6), void 0 !== o2 && "function" != typeof o2 && n$1(7), t$1(r3)) {
                  var c2 = w(e3),
                    s2 = N(e3, r3, void 0),
                    v2 = true;
                  try {
                    f2 = i3(s2), v2 = false;
                  } finally {
                    v2 ? g$1(c2) : O(c2);
                  }
                  return "undefined" != typeof Promise && f2 instanceof Promise ? f2.then(function (n2) {
                    return j(c2, o2), P(n2, c2);
                  }, function (n2) {
                    throw g$1(c2), n2;
                  }) : (j(c2, o2), P(f2, c2));
                }
                if (!r3 || "object" != typeof r3) {
                  if (void 0 === (f2 = i3(r3)) && (f2 = r3), f2 === H && (f2 = void 0), e3.D && d$1(f2, true), o2) {
                    var p2 = [],
                      l2 = [];
                    b$1("Patches").M(r3, f2, p2, l2), o2(p2, l2);
                  }
                  return f2;
                }
                n$1(21, r3);
              }, this.produceWithPatches = function (n2, r3) {
                if ("function" == typeof n2) return function (r4) {
                  for (var t3 = arguments.length, i4 = Array(t3 > 1 ? t3 - 1 : 0), o3 = 1; o3 < t3; o3++) i4[o3 - 1] = arguments[o3];
                  return e3.produceWithPatches(r4, function (r5) {
                    return n2.apply(void 0, [r5].concat(i4));
                  });
                };
                var t2,
                  i3,
                  o2 = e3.produce(n2, r3, function (n3, r4) {
                    t2 = n3, i3 = r4;
                  });
                return "undefined" != typeof Promise && o2 instanceof Promise ? o2.then(function (n3) {
                  return [n3, t2, i3];
                }) : [o2, t2, i3];
              }, "boolean" == typeof (null == r2 ? void 0 : r2.useProxies) && this.setUseProxies(r2.useProxies), "boolean" == typeof (null == r2 ? void 0 : r2.autoFreeze) && this.setAutoFreeze(r2.autoFreeze);
            }
            var i2 = e2.prototype;
            return i2.createDraft = function (e3) {
              t$1(e3) || n$1(8), r(e3) && (e3 = R(e3));
              var i3 = w(this),
                o2 = N(this, e3, void 0);
              return o2[Q].C = true, O(i3), o2;
            }, i2.finishDraft = function (r2, t2) {
              var e3 = r2 && r2[Q];
              var i3 = e3.A;
              return j(i3, t2), P(void 0, i3);
            }, i2.setAutoFreeze = function (n2) {
              this.D = n2;
            }, i2.setUseProxies = function (r2) {
              r2 && !B && n$1(20), this.O = r2;
            }, i2.applyPatches = function (n2, t2) {
              var e3;
              for (e3 = t2.length - 1; e3 >= 0; e3--) {
                var i3 = t2[e3];
                if (0 === i3.path.length && "replace" === i3.op) {
                  n2 = i3.value;
                  break;
                }
              }
              e3 > -1 && (t2 = t2.slice(e3 + 1));
              var o2 = b$1("Patches").$;
              return r(n2) ? o2(n2, t2) : this.produce(n2, function (n3) {
                return o2(n3, t2);
              });
            }, e2;
          }(),
          an = new un(),
          fn = an.produce;
        an.produceWithPatches.bind(an);
        an.setAutoFreeze.bind(an);
        an.setUseProxies.bind(an);
        an.applyPatches.bind(an);
        an.createDraft.bind(an);
        an.finishDraft.bind(an);
        function ownKeys(e, r) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            r && (o = o.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })), t.push.apply(t, o);
          }
          return t;
        }
        function _objectSpread2(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {};
            r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
              _defineProperty(e, r, t[r]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
              Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
            });
          }
          return e;
        }
        function formatProdErrorMessage(code) {
          return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or use the non-minified dev environment for full errors. ";
        }
        var $$observable = function () {
          return typeof Symbol === "function" && Symbol.observable || "@@observable";
        }();
        var randomString = function randomString2() {
          return Math.random().toString(36).substring(7).split("").join(".");
        };
        var ActionTypes = {
          INIT: "@@redux/INIT" + randomString(),
          REPLACE: "@@redux/REPLACE" + randomString(),
          PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
            return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
          }
        };
        function isPlainObject$1(obj) {
          if (typeof obj !== "object" || obj === null) return false;
          var proto = obj;
          while (Object.getPrototypeOf(proto) !== null) {
            proto = Object.getPrototypeOf(proto);
          }
          return Object.getPrototypeOf(obj) === proto;
        }
        function createStore(reducer, preloadedState, enhancer) {
          var _ref2;
          if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
            throw new Error(formatProdErrorMessage(0));
          }
          if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
            enhancer = preloadedState;
            preloadedState = void 0;
          }
          if (typeof enhancer !== "undefined") {
            if (typeof enhancer !== "function") {
              throw new Error(formatProdErrorMessage(1));
            }
            return enhancer(createStore)(reducer, preloadedState);
          }
          if (typeof reducer !== "function") {
            throw new Error(formatProdErrorMessage(2));
          }
          var currentReducer = reducer;
          var currentState = preloadedState;
          var currentListeners = [];
          var nextListeners = currentListeners;
          var isDispatching = false;
          function ensureCanMutateNextListeners() {
            if (nextListeners === currentListeners) {
              nextListeners = currentListeners.slice();
            }
          }
          function getState() {
            if (isDispatching) {
              throw new Error(formatProdErrorMessage(3));
            }
            return currentState;
          }
          function subscribe(listener) {
            if (typeof listener !== "function") {
              throw new Error(formatProdErrorMessage(4));
            }
            if (isDispatching) {
              throw new Error(formatProdErrorMessage(5));
            }
            var isSubscribed = true;
            ensureCanMutateNextListeners();
            nextListeners.push(listener);
            return function unsubscribe() {
              if (!isSubscribed) {
                return;
              }
              if (isDispatching) {
                throw new Error(formatProdErrorMessage(6));
              }
              isSubscribed = false;
              ensureCanMutateNextListeners();
              var index = nextListeners.indexOf(listener);
              nextListeners.splice(index, 1);
              currentListeners = null;
            };
          }
          function dispatch(action) {
            if (!isPlainObject$1(action)) {
              throw new Error(formatProdErrorMessage(7));
            }
            if (typeof action.type === "undefined") {
              throw new Error(formatProdErrorMessage(8));
            }
            if (isDispatching) {
              throw new Error(formatProdErrorMessage(9));
            }
            try {
              isDispatching = true;
              currentState = currentReducer(currentState, action);
            } finally {
              isDispatching = false;
            }
            var listeners = currentListeners = nextListeners;
            for (var i = 0; i < listeners.length; i++) {
              var listener = listeners[i];
              listener();
            }
            return action;
          }
          function replaceReducer(nextReducer) {
            if (typeof nextReducer !== "function") {
              throw new Error(formatProdErrorMessage(10));
            }
            currentReducer = nextReducer;
            dispatch({
              type: ActionTypes.REPLACE
            });
          }
          function observable() {
            var _ref;
            var outerSubscribe = subscribe;
            return _ref = {
              /**
               * The minimal observable subscription method.
               * @param {Object} observer Any object that can be used as an observer.
               * The observer object should have a `next` method.
               * @returns {subscription} An object with an `unsubscribe` method that can
               * be used to unsubscribe the observable from the store, and prevent further
               * emission of values from the observable.
               */
              subscribe: function subscribe2(observer) {
                if (typeof observer !== "object" || observer === null) {
                  throw new Error(formatProdErrorMessage(11));
                }
                function observeState() {
                  if (observer.next) {
                    observer.next(getState());
                  }
                }
                observeState();
                var unsubscribe = outerSubscribe(observeState);
                return {
                  unsubscribe
                };
              }
            }, _ref[$$observable] = function () {
              return this;
            }, _ref;
          }
          dispatch({
            type: ActionTypes.INIT
          });
          return _ref2 = {
            dispatch,
            subscribe,
            getState,
            replaceReducer
          }, _ref2[$$observable] = observable, _ref2;
        }
        function assertReducerShape(reducers) {
          Object.keys(reducers).forEach(function (key) {
            var reducer = reducers[key];
            var initialState = reducer(void 0, {
              type: ActionTypes.INIT
            });
            if (typeof initialState === "undefined") {
              throw new Error(formatProdErrorMessage(12));
            }
            if (typeof reducer(void 0, {
              type: ActionTypes.PROBE_UNKNOWN_ACTION()
            }) === "undefined") {
              throw new Error(formatProdErrorMessage(13));
            }
          });
        }
        function combineReducers(reducers) {
          var reducerKeys = Object.keys(reducers);
          var finalReducers = {};
          for (var i = 0; i < reducerKeys.length; i++) {
            var key = reducerKeys[i];
            if (typeof reducers[key] === "function") {
              finalReducers[key] = reducers[key];
            }
          }
          var finalReducerKeys = Object.keys(finalReducers);
          var shapeAssertionError;
          try {
            assertReducerShape(finalReducers);
          } catch (e) {
            shapeAssertionError = e;
          }
          return function combination(state, action) {
            if (state === void 0) {
              state = {};
            }
            if (shapeAssertionError) {
              throw shapeAssertionError;
            }
            var hasChanged = false;
            var nextState = {};
            for (var _i = 0; _i < finalReducerKeys.length; _i++) {
              var _key = finalReducerKeys[_i];
              var reducer = finalReducers[_key];
              var previousStateForKey = state[_key];
              var nextStateForKey = reducer(previousStateForKey, action);
              if (typeof nextStateForKey === "undefined") {
                action && action.type;
                throw new Error(formatProdErrorMessage(14));
              }
              nextState[_key] = nextStateForKey;
              hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
            }
            hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
            return hasChanged ? nextState : state;
          };
        }
        function compose() {
          for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
            funcs[_key] = arguments[_key];
          }
          if (funcs.length === 0) {
            return function (arg) {
              return arg;
            };
          }
          if (funcs.length === 1) {
            return funcs[0];
          }
          return funcs.reduce(function (a, b) {
            return function () {
              return a(b.apply(void 0, arguments));
            };
          });
        }
        function applyMiddleware() {
          for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
            middlewares[_key] = arguments[_key];
          }
          return function (createStore2) {
            return function () {
              var store = createStore2.apply(void 0, arguments);
              var _dispatch = function dispatch() {
                throw new Error(formatProdErrorMessage(15));
              };
              var middlewareAPI = {
                getState: store.getState,
                dispatch: function dispatch() {
                  return _dispatch.apply(void 0, arguments);
                }
              };
              var chain = middlewares.map(function (middleware) {
                return middleware(middlewareAPI);
              });
              _dispatch = compose.apply(void 0, chain)(store.dispatch);
              return _objectSpread2(_objectSpread2({}, store), {}, {
                dispatch: _dispatch
              });
            };
          };
        }

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
        var createSelector = exports("e", /* #__PURE__ */createSelectorCreator(defaultMemoize));

        /** A function that accepts a potential "extra argument" value to be injected later,
         * and returns an instance of the thunk middleware that uses that value
         */
        function createThunkMiddleware(extraArgument) {
          // Standard Redux middleware definition pattern:
          // See: https://redux.js.org/tutorials/fundamentals/part-4-store#writing-custom-middleware
          var middleware = function middleware(_ref) {
            var dispatch = _ref.dispatch,
              getState = _ref.getState;
            return function (next) {
              return function (action) {
                // The thunk middleware looks for any functions that were passed to `store.dispatch`.
                // If this "action" is really a function, call it and return the result.
                if (typeof action === 'function') {
                  // Inject the store's `dispatch` and `getState` methods, as well as any "extra arg"
                  return action(dispatch, getState, extraArgument);
                } // Otherwise, pass the action down the middleware chain as usual

                return next(action);
              };
            };
          };
          return middleware;
        }
        var thunk = createThunkMiddleware(); // Attach the factory function so users can create a customized version
        // with whatever "extra arg" they want to inject into their thunks

        thunk.withExtraArgument = createThunkMiddleware;
        var __extends = /* @__PURE__ */function () {
          var _extendStatics = function extendStatics(d, b) {
            _extendStatics = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (d2, b2) {
              d2.__proto__ = b2;
            } || function (d2, b2) {
              for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
            };
            return _extendStatics(d, b);
          };
          return function (d, b) {
            if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            _extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        var __generator = function __generator(thisArg, body) {
          var _ = {
              label: 0,
              sent: function sent() {
                if (t[0] & 1) throw t[1];
                return t[1];
              },
              trys: [],
              ops: []
            },
            f,
            y,
            t,
            g;
          return g = {
            next: verb(0),
            "throw": verb(1),
            "return": verb(2)
          }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
            return this;
          }), g;
          function verb(n) {
            return function (v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2]) _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
            if (op[0] & 5) throw op[1];
            return {
              value: op[0] ? op[1] : void 0,
              done: true
            };
          }
        };
        var __spreadArray = function __spreadArray(to, from) {
          for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
          return to;
        };
        var __defProp = Object.defineProperty;
        var __defProps = Object.defineProperties;
        var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
        var __getOwnPropSymbols = Object.getOwnPropertySymbols;
        var __hasOwnProp = Object.prototype.hasOwnProperty;
        var __propIsEnum = Object.prototype.propertyIsEnumerable;
        var __defNormalProp = function __defNormalProp(obj, key, value) {
          return key in obj ? __defProp(obj, key, {
            enumerable: true,
            configurable: true,
            writable: true,
            value
          }) : obj[key] = value;
        };
        var __spreadValues = function __spreadValues(a, b) {
          for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
          if (__getOwnPropSymbols) for (var _i = 0, _c = __getOwnPropSymbols(b); _i < _c.length; _i++) {
            var prop = _c[_i];
            if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
          }
          return a;
        };
        var __spreadProps = function __spreadProps(a, b) {
          return __defProps(a, __getOwnPropDescs(b));
        };
        var __async = function __async(__this, __arguments, generator) {
          return new Promise(function (resolve, reject) {
            var fulfilled = function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            };
            var rejected = function rejected(value) {
              try {
                step(generator.throw(value));
              } catch (e) {
                reject(e);
              }
            };
            var step = function step(x) {
              return x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
            };
            step((generator = generator.apply(__this, __arguments)).next());
          });
        };
        var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function () {
          if (arguments.length === 0) return void 0;
          if (typeof arguments[0] === "object") return compose;
          return compose.apply(null, arguments);
        };
        function isPlainObject(value) {
          if (typeof value !== "object" || value === null) return false;
          var proto = Object.getPrototypeOf(value);
          if (proto === null) return true;
          var baseProto = proto;
          while (Object.getPrototypeOf(baseProto) !== null) {
            baseProto = Object.getPrototypeOf(baseProto);
          }
          return proto === baseProto;
        }
        function createAction(type, prepareAction) {
          function actionCreator() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            if (prepareAction) {
              var prepared = prepareAction.apply(void 0, args);
              if (!prepared) {
                throw new Error("prepareAction did not return an object");
              }
              return __spreadValues(__spreadValues({
                type,
                payload: prepared.payload
              }, "meta" in prepared && {
                meta: prepared.meta
              }), "error" in prepared && {
                error: prepared.error
              });
            }
            return {
              type,
              payload: args[0]
            };
          }
          actionCreator.toString = function () {
            return "" + type;
          };
          actionCreator.type = type;
          actionCreator.match = function (action) {
            return action.type === type;
          };
          return actionCreator;
        }
        var MiddlewareArray = /** @class */
        function (_super) {
          __extends(MiddlewareArray2, _super);
          function MiddlewareArray2() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            Object.setPrototypeOf(_this, MiddlewareArray2.prototype);
            return _this;
          }
          Object.defineProperty(MiddlewareArray2, Symbol.species, {
            get: function get() {
              return MiddlewareArray2;
            },
            enumerable: false,
            configurable: true
          });
          MiddlewareArray2.prototype.concat = function () {
            var arr = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              arr[_i] = arguments[_i];
            }
            return _super.prototype.concat.apply(this, arr);
          };
          MiddlewareArray2.prototype.prepend = function () {
            var arr = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              arr[_i] = arguments[_i];
            }
            if (arr.length === 1 && Array.isArray(arr[0])) {
              return new (MiddlewareArray2.bind.apply(MiddlewareArray2, __spreadArray([void 0], arr[0].concat(this))))();
            }
            return new (MiddlewareArray2.bind.apply(MiddlewareArray2, __spreadArray([void 0], arr.concat(this))))();
          };
          return MiddlewareArray2;
        }(Array);
        var EnhancerArray = /** @class */
        function (_super) {
          __extends(EnhancerArray2, _super);
          function EnhancerArray2() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            Object.setPrototypeOf(_this, EnhancerArray2.prototype);
            return _this;
          }
          Object.defineProperty(EnhancerArray2, Symbol.species, {
            get: function get() {
              return EnhancerArray2;
            },
            enumerable: false,
            configurable: true
          });
          EnhancerArray2.prototype.concat = function () {
            var arr = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              arr[_i] = arguments[_i];
            }
            return _super.prototype.concat.apply(this, arr);
          };
          EnhancerArray2.prototype.prepend = function () {
            var arr = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              arr[_i] = arguments[_i];
            }
            if (arr.length === 1 && Array.isArray(arr[0])) {
              return new (EnhancerArray2.bind.apply(EnhancerArray2, __spreadArray([void 0], arr[0].concat(this))))();
            }
            return new (EnhancerArray2.bind.apply(EnhancerArray2, __spreadArray([void 0], arr.concat(this))))();
          };
          return EnhancerArray2;
        }(Array);
        function freezeDraftable(val) {
          return t$1(val) ? fn(val, function () {}) : val;
        }
        function isBoolean(x) {
          return typeof x === "boolean";
        }
        function curryGetDefaultMiddleware() {
          return function curriedGetDefaultMiddleware(options) {
            return getDefaultMiddleware(options);
          };
        }
        function getDefaultMiddleware(options) {
          if (options === void 0) {
            options = {};
          }
          var _c = options.thunk,
            thunk$1 = _c === void 0 ? true : _c;
          options.immutableCheck;
          options.serializableCheck;
          options.actionCreatorCheck;
          var middlewareArray = new MiddlewareArray();
          if (thunk$1) {
            if (isBoolean(thunk$1)) {
              middlewareArray.push(thunk);
            } else {
              middlewareArray.push(thunk.withExtraArgument(thunk$1.extraArgument));
            }
          }
          return middlewareArray;
        }
        function configureStore(options) {
          var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();
          var _c = options || {},
            _d = _c.reducer,
            reducer = _d === void 0 ? void 0 : _d,
            _e = _c.middleware,
            middleware = _e === void 0 ? curriedGetDefaultMiddleware() : _e,
            _f = _c.devTools,
            devTools = _f === void 0 ? true : _f,
            _g = _c.preloadedState,
            preloadedState = _g === void 0 ? void 0 : _g,
            _h = _c.enhancers,
            enhancers = _h === void 0 ? void 0 : _h;
          var rootReducer;
          if (typeof reducer === "function") {
            rootReducer = reducer;
          } else if (isPlainObject(reducer)) {
            rootReducer = combineReducers(reducer);
          } else {
            throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
          }
          var finalMiddleware = middleware;
          if (typeof finalMiddleware === "function") {
            finalMiddleware = finalMiddleware(curriedGetDefaultMiddleware);
          }
          var middlewareEnhancer = applyMiddleware.apply(void 0, finalMiddleware);
          var finalCompose = compose;
          if (devTools) {
            finalCompose = composeWithDevTools(__spreadValues({
              trace: false
            }, typeof devTools === "object" && devTools));
          }
          var defaultEnhancers = new EnhancerArray(middlewareEnhancer);
          var storeEnhancers = defaultEnhancers;
          if (Array.isArray(enhancers)) {
            storeEnhancers = __spreadArray([middlewareEnhancer], enhancers);
          } else if (typeof enhancers === "function") {
            storeEnhancers = enhancers(defaultEnhancers);
          }
          var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
          return createStore(rootReducer, preloadedState, composedEnhancer);
        }
        function executeReducerBuilderCallback(builderCallback) {
          var actionsMap = {};
          var actionMatchers = [];
          var defaultCaseReducer;
          var builder = {
            addCase: function addCase(typeOrActionCreator, reducer) {
              var type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
              if (!type) {
                throw new Error("`builder.addCase` cannot be called with an empty action type");
              }
              if (type in actionsMap) {
                throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");
              }
              actionsMap[type] = reducer;
              return builder;
            },
            addMatcher: function addMatcher(matcher, reducer) {
              actionMatchers.push({
                matcher,
                reducer
              });
              return builder;
            },
            addDefaultCase: function addDefaultCase(reducer) {
              defaultCaseReducer = reducer;
              return builder;
            }
          };
          builderCallback(builder);
          return [actionsMap, actionMatchers, defaultCaseReducer];
        }
        function isStateFunction(x) {
          return typeof x === "function";
        }
        function createReducer(initialState, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
          if (actionMatchers === void 0) {
            actionMatchers = [];
          }
          var _c = typeof mapOrBuilderCallback === "function" ? executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer],
            actionsMap = _c[0],
            finalActionMatchers = _c[1],
            finalDefaultCaseReducer = _c[2];
          var getInitialState;
          if (isStateFunction(initialState)) {
            getInitialState = function getInitialState() {
              return freezeDraftable(initialState());
            };
          } else {
            var frozenInitialState_1 = freezeDraftable(initialState);
            getInitialState = function getInitialState() {
              return frozenInitialState_1;
            };
          }
          function reducer(state, action) {
            if (state === void 0) {
              state = getInitialState();
            }
            var caseReducers = __spreadArray([actionsMap[action.type]], finalActionMatchers.filter(function (_c2) {
              var matcher = _c2.matcher;
              return matcher(action);
            }).map(function (_c2) {
              var reducer2 = _c2.reducer;
              return reducer2;
            }));
            if (caseReducers.filter(function (cr) {
              return !!cr;
            }).length === 0) {
              caseReducers = [finalDefaultCaseReducer];
            }
            return caseReducers.reduce(function (previousState, caseReducer) {
              if (caseReducer) {
                if (r(previousState)) {
                  var draft = previousState;
                  var result = caseReducer(draft, action);
                  if (result === void 0) {
                    return previousState;
                  }
                  return result;
                } else if (!t$1(previousState)) {
                  var result = caseReducer(previousState, action);
                  if (result === void 0) {
                    if (previousState === null) {
                      return previousState;
                    }
                    throw Error("A case reducer on a non-draftable value must not return undefined");
                  }
                  return result;
                } else {
                  return fn(previousState, function (draft2) {
                    return caseReducer(draft2, action);
                  });
                }
              }
              return previousState;
            }, state);
          }
          reducer.getInitialState = getInitialState;
          return reducer;
        }
        function getType2(slice, actionKey) {
          return slice + "/" + actionKey;
        }
        function createSlice(options) {
          var name = options.name;
          if (!name) {
            throw new Error("`name` is a required option for createSlice");
          }
          var initialState = typeof options.initialState == "function" ? options.initialState : freezeDraftable(options.initialState);
          var reducers = options.reducers || {};
          var reducerNames = Object.keys(reducers);
          var sliceCaseReducersByName = {};
          var sliceCaseReducersByType = {};
          var actionCreators = {};
          reducerNames.forEach(function (reducerName) {
            var maybeReducerWithPrepare = reducers[reducerName];
            var type = getType2(name, reducerName);
            var caseReducer;
            var prepareCallback;
            if ("reducer" in maybeReducerWithPrepare) {
              caseReducer = maybeReducerWithPrepare.reducer;
              prepareCallback = maybeReducerWithPrepare.prepare;
            } else {
              caseReducer = maybeReducerWithPrepare;
            }
            sliceCaseReducersByName[reducerName] = caseReducer;
            sliceCaseReducersByType[type] = caseReducer;
            actionCreators[reducerName] = prepareCallback ? createAction(type, prepareCallback) : createAction(type);
          });
          function buildReducer() {
            var _c = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers],
              _d = _c[0],
              extraReducers = _d === void 0 ? {} : _d,
              _e = _c[1],
              actionMatchers = _e === void 0 ? [] : _e,
              _f = _c[2],
              defaultCaseReducer = _f === void 0 ? void 0 : _f;
            var finalCaseReducers = __spreadValues(__spreadValues({}, extraReducers), sliceCaseReducersByType);
            return createReducer(initialState, function (builder) {
              for (var key in finalCaseReducers) {
                builder.addCase(key, finalCaseReducers[key]);
              }
              for (var _i = 0, actionMatchers_1 = actionMatchers; _i < actionMatchers_1.length; _i++) {
                var m = actionMatchers_1[_i];
                builder.addMatcher(m.matcher, m.reducer);
              }
              if (defaultCaseReducer) {
                builder.addDefaultCase(defaultCaseReducer);
              }
            });
          }
          var _reducer;
          return {
            name,
            reducer: function reducer(state, action) {
              if (!_reducer) _reducer = buildReducer();
              return _reducer(state, action);
            },
            actions: actionCreators,
            caseReducers: sliceCaseReducersByName,
            getInitialState: function getInitialState() {
              if (!_reducer) _reducer = buildReducer();
              return _reducer.getInitialState();
            }
          };
        }
        var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
        var nanoid = function nanoid(size) {
          if (size === void 0) {
            size = 21;
          }
          var id = "";
          var i = size;
          while (i--) {
            id += urlAlphabet[Math.random() * 64 | 0];
          }
          return id;
        };
        var commonProperties = ["name", "message", "stack", "code"];
        var RejectWithValue = /** @class */
        /* @__PURE__ */function () {
          function RejectWithValue2(payload, meta) {
            this.payload = payload;
            this.meta = meta;
          }
          return RejectWithValue2;
        }();
        var FulfillWithMeta = /** @class */
        /* @__PURE__ */function () {
          function FulfillWithMeta2(payload, meta) {
            this.payload = payload;
            this.meta = meta;
          }
          return FulfillWithMeta2;
        }();
        var miniSerializeError = function miniSerializeError(value) {
          if (typeof value === "object" && value !== null) {
            var simpleError = {};
            for (var _i = 0, commonProperties_1 = commonProperties; _i < commonProperties_1.length; _i++) {
              var property = commonProperties_1[_i];
              if (typeof value[property] === "string") {
                simpleError[property] = value[property];
              }
            }
            return simpleError;
          }
          return {
            message: String(value)
          };
        };
        (function () {
          function createAsyncThunk2(typePrefix, payloadCreator, options) {
            var fulfilled = createAction(typePrefix + "/fulfilled", function (payload, requestId, arg, meta) {
              return {
                payload,
                meta: __spreadProps(__spreadValues({}, meta || {}), {
                  arg,
                  requestId,
                  requestStatus: "fulfilled"
                })
              };
            });
            var pending = createAction(typePrefix + "/pending", function (requestId, arg, meta) {
              return {
                payload: void 0,
                meta: __spreadProps(__spreadValues({}, meta || {}), {
                  arg,
                  requestId,
                  requestStatus: "pending"
                })
              };
            });
            var rejected = createAction(typePrefix + "/rejected", function (error, requestId, arg, payload, meta) {
              return {
                payload,
                error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
                meta: __spreadProps(__spreadValues({}, meta || {}), {
                  arg,
                  requestId,
                  rejectedWithValue: !!payload,
                  requestStatus: "rejected",
                  aborted: (error == null ? void 0 : error.name) === "AbortError",
                  condition: (error == null ? void 0 : error.name) === "ConditionError"
                })
              };
            });
            var AC = typeof AbortController !== "undefined" ? AbortController : (/** @class */
            function () {
              function class_1() {
                this.signal = {
                  aborted: false,
                  addEventListener: function addEventListener() {},
                  dispatchEvent: function dispatchEvent() {
                    return false;
                  },
                  onabort: function onabort() {},
                  removeEventListener: function removeEventListener() {},
                  reason: void 0,
                  throwIfAborted: function throwIfAborted() {}
                };
              }
              class_1.prototype.abort = function () {};
              return class_1;
            }());
            function actionCreator(arg) {
              return function (dispatch, getState, extra) {
                var requestId = (options == null ? void 0 : options.idGenerator) ? options.idGenerator(arg) : nanoid();
                var abortController = new AC();
                var abortReason;
                function abort(reason) {
                  abortReason = reason;
                  abortController.abort();
                }
                var promise2 = function () {
                  return __async(this, null, function () {
                    var _a, _b, finalAction, conditionResult, abortedPromise, err_1, skipDispatch;
                    return __generator(this, function (_c) {
                      switch (_c.label) {
                        case 0:
                          _c.trys.push([0, 4,, 5]);
                          conditionResult = (_a = options == null ? void 0 : options.condition) == null ? void 0 : _a.call(options, arg, {
                            getState,
                            extra
                          });
                          if (!isThenable(conditionResult)) return [3, 2];
                          return [4, conditionResult];
                        case 1:
                          conditionResult = _c.sent();
                          _c.label = 2;
                        case 2:
                          if (conditionResult === false || abortController.signal.aborted) {
                            throw {
                              name: "ConditionError",
                              message: "Aborted due to condition callback returning false."
                            };
                          }
                          abortedPromise = new Promise(function (_, reject) {
                            return abortController.signal.addEventListener("abort", function () {
                              return reject({
                                name: "AbortError",
                                message: abortReason || "Aborted"
                              });
                            });
                          });
                          dispatch(pending(requestId, arg, (_b = options == null ? void 0 : options.getPendingMeta) == null ? void 0 : _b.call(options, {
                            requestId,
                            arg
                          }, {
                            getState,
                            extra
                          })));
                          return [4, Promise.race([abortedPromise, Promise.resolve(payloadCreator(arg, {
                            dispatch,
                            getState,
                            extra,
                            requestId,
                            signal: abortController.signal,
                            abort,
                            rejectWithValue: function rejectWithValue(value, meta) {
                              return new RejectWithValue(value, meta);
                            },
                            fulfillWithValue: function fulfillWithValue(value, meta) {
                              return new FulfillWithMeta(value, meta);
                            }
                          })).then(function (result) {
                            if (result instanceof RejectWithValue) {
                              throw result;
                            }
                            if (result instanceof FulfillWithMeta) {
                              return fulfilled(result.payload, requestId, arg, result.meta);
                            }
                            return fulfilled(result, requestId, arg);
                          })])];
                        case 3:
                          finalAction = _c.sent();
                          return [3, 5];
                        case 4:
                          err_1 = _c.sent();
                          finalAction = err_1 instanceof RejectWithValue ? rejected(null, requestId, arg, err_1.payload, err_1.meta) : rejected(err_1, requestId, arg);
                          return [3, 5];
                        case 5:
                          skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
                          if (!skipDispatch) {
                            dispatch(finalAction);
                          }
                          return [2, finalAction];
                      }
                    });
                  });
                }();
                return Object.assign(promise2, {
                  abort,
                  requestId,
                  arg,
                  unwrap: function unwrap() {
                    return promise2.then(unwrapResult);
                  }
                });
              };
            }
            return Object.assign(actionCreator, {
              pending,
              rejected,
              fulfilled,
              typePrefix
            });
          }
          createAsyncThunk2.withTypes = function () {
            return createAsyncThunk2;
          };
          return createAsyncThunk2;
        })();
        function unwrapResult(action) {
          if (action.meta && action.meta.rejectedWithValue) {
            throw action.payload;
          }
          if (action.error) {
            throw action.error;
          }
          return action.payload;
        }
        function isThenable(value) {
          return value !== null && typeof value === "object" && typeof value.then === "function";
        }
        var alm = "listenerMiddleware";
        createAction(alm + "/add");
        createAction(alm + "/removeAll");
        createAction(alm + "/remove");
        var promise;
        typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : globalThis) : function (cb) {
          return (promise || (promise = Promise.resolve())).then(cb).catch(function (err) {
            return setTimeout(function () {
              throw err;
            }, 0);
          });
        };
        F();

        // Default to a dummy "batch" implementation that just runs the callback
        function defaultNoopBatch(callback) {
          callback();
        }
        let batch = defaultNoopBatch; // Allow injecting another batching function later

        const setBatch = newBatch => batch = newBatch; // Supply a getter just to skip dealing with ESM bindings

        const getBatch = () => batch;
        const ContextKey = Symbol.for(`react-redux-context`);
        const gT = typeof globalThis !== "undefined" ? globalThis : (/* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
        {});
        function getContext() {
          var _gT$ContextKey;
          if (!reactExports.createContext) return {};
          const contextMap = (_gT$ContextKey = gT[ContextKey]) != null ? _gT$ContextKey : gT[ContextKey] = /* @__PURE__ */new Map();
          let realContext = contextMap.get(reactExports.createContext);
          if (!realContext) {
            realContext = reactExports.createContext(null);
            contextMap.set(reactExports.createContext, realContext);
          }
          return realContext;
        }
        const ReactReduxContext = /* @__PURE__ */getContext();
        function createReduxContextHook(context = ReactReduxContext) {
          return function useReduxContext2() {
            const contextValue = reactExports.useContext(context);
            return contextValue;
          };
        }
        const useReduxContext = /* @__PURE__ */createReduxContextHook();
        const notInitialized = () => {
          throw new Error('uSES not initialized!');
        };
        let useSyncExternalStoreWithSelector = notInitialized;
        const initializeUseSelector = fn => {
          useSyncExternalStoreWithSelector = fn;
        };
        const refEquality = (a, b) => a === b;
        function createSelectorHook(context = ReactReduxContext) {
          const useReduxContext$1 = context === ReactReduxContext ? useReduxContext : createReduxContextHook(context);
          return function useSelector2(selector, equalityFnOrOptions = {}) {
            const _ref3 = typeof equalityFnOrOptions === "function" ? {
                equalityFn: equalityFnOrOptions
              } : equalityFnOrOptions,
              _ref3$equalityFn = _ref3.equalityFn,
              equalityFn = _ref3$equalityFn === void 0 ? refEquality : _ref3$equalityFn,
              _ref3$stabilityCheck = _ref3.stabilityCheck,
              stabilityCheck = _ref3$stabilityCheck === void 0 ? void 0 : _ref3$stabilityCheck,
              _ref3$noopCheck = _ref3.noopCheck,
              noopCheck = _ref3$noopCheck === void 0 ? void 0 : _ref3$noopCheck;
            const _useReduxContext$ = useReduxContext$1(),
              store = _useReduxContext$.store,
              subscription = _useReduxContext$.subscription,
              getServerState = _useReduxContext$.getServerState,
              globalStabilityCheck = _useReduxContext$.stabilityCheck,
              globalNoopCheck = _useReduxContext$.noopCheck;
            reactExports.useRef(true);
            const wrappedSelector = reactExports.useCallback({
              [selector.name](state) {
                const selected = selector(state);
                return selected;
              }
            }[selector.name], [selector, globalStabilityCheck, stabilityCheck]);
            const selectedState = useSyncExternalStoreWithSelector(subscription.addNestedSub, store.getState, getServerState || store.getState, wrappedSelector, equalityFn);
            reactExports.useDebugValue(selectedState);
            return selectedState;
          };
        }
        const useSelector = exports("u", /* @__PURE__ */createSelectorHook());
        var reactIs_production_min = {};

        /**
         * @license React
         * react-is.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        var b = Symbol.for("react.element"),
          c = Symbol.for("react.portal"),
          d = Symbol.for("react.fragment"),
          e = Symbol.for("react.strict_mode"),
          f = Symbol.for("react.profiler"),
          g = Symbol.for("react.provider"),
          h = Symbol.for("react.context"),
          k = Symbol.for("react.server_context"),
          l = Symbol.for("react.forward_ref"),
          m = Symbol.for("react.suspense"),
          n = Symbol.for("react.suspense_list"),
          p = Symbol.for("react.memo"),
          q = Symbol.for("react.lazy"),
          t = Symbol.for("react.offscreen"),
          u;
        u = Symbol.for("react.module.reference");
        function v(a) {
          if ("object" === typeof a && null !== a) {
            var r = a.$$typeof;
            switch (r) {
              case b:
                switch (a = a.type, a) {
                  case d:
                  case f:
                  case e:
                  case m:
                  case n:
                    return a;
                  default:
                    switch (a = a && a.$$typeof, a) {
                      case k:
                      case h:
                      case l:
                      case q:
                      case p:
                      case g:
                        return a;
                      default:
                        return r;
                    }
                }
              case c:
                return r;
            }
          }
        }
        reactIs_production_min.ContextConsumer = h;
        reactIs_production_min.ContextProvider = g;
        reactIs_production_min.Element = b;
        reactIs_production_min.ForwardRef = l;
        reactIs_production_min.Fragment = d;
        reactIs_production_min.Lazy = q;
        reactIs_production_min.Memo = p;
        reactIs_production_min.Portal = c;
        reactIs_production_min.Profiler = f;
        reactIs_production_min.StrictMode = e;
        reactIs_production_min.Suspense = m;
        reactIs_production_min.SuspenseList = n;
        reactIs_production_min.isAsyncMode = function () {
          return false;
        };
        reactIs_production_min.isConcurrentMode = function () {
          return false;
        };
        reactIs_production_min.isContextConsumer = function (a) {
          return v(a) === h;
        };
        reactIs_production_min.isContextProvider = function (a) {
          return v(a) === g;
        };
        reactIs_production_min.isElement = function (a) {
          return "object" === typeof a && null !== a && a.$$typeof === b;
        };
        reactIs_production_min.isForwardRef = function (a) {
          return v(a) === l;
        };
        reactIs_production_min.isFragment = function (a) {
          return v(a) === d;
        };
        reactIs_production_min.isLazy = function (a) {
          return v(a) === q;
        };
        reactIs_production_min.isMemo = function (a) {
          return v(a) === p;
        };
        reactIs_production_min.isPortal = function (a) {
          return v(a) === c;
        };
        reactIs_production_min.isProfiler = function (a) {
          return v(a) === f;
        };
        reactIs_production_min.isStrictMode = function (a) {
          return v(a) === e;
        };
        reactIs_production_min.isSuspense = function (a) {
          return v(a) === m;
        };
        reactIs_production_min.isSuspenseList = function (a) {
          return v(a) === n;
        };
        reactIs_production_min.isValidElementType = function (a) {
          return "string" === typeof a || "function" === typeof a || a === d || a === f || a === e || a === m || a === n || a === t || "object" === typeof a && null !== a && (a.$$typeof === q || a.$$typeof === p || a.$$typeof === g || a.$$typeof === h || a.$$typeof === l || a.$$typeof === u || void 0 !== a.getModuleId) ? true : false;
        };
        reactIs_production_min.typeOf = v;

        // well as nesting subscriptions of descendant components, so that we can ensure the
        // ancestor components re-render before descendants

        function createListenerCollection() {
          const batch = getBatch();
          let first = null;
          let last = null;
          return {
            clear() {
              first = null;
              last = null;
            },
            notify() {
              batch(() => {
                let listener = first;
                while (listener) {
                  listener.callback();
                  listener = listener.next;
                }
              });
            },
            get() {
              let listeners = [];
              let listener = first;
              while (listener) {
                listeners.push(listener);
                listener = listener.next;
              }
              return listeners;
            },
            subscribe(callback) {
              let isSubscribed = true;
              let listener = last = {
                callback,
                next: null,
                prev: last
              };
              if (listener.prev) {
                listener.prev.next = listener;
              } else {
                first = listener;
              }
              return function unsubscribe() {
                if (!isSubscribed || first === null) return;
                isSubscribed = false;
                if (listener.next) {
                  listener.next.prev = listener.prev;
                } else {
                  last = listener.prev;
                }
                if (listener.prev) {
                  listener.prev.next = listener.next;
                } else {
                  first = listener.next;
                }
              };
            }
          };
        }
        const nullListeners = {
          notify() {},
          get: () => []
        };
        function createSubscription(store, parentSub) {
          let unsubscribe;
          let listeners = nullListeners; // Reasons to keep the subscription active

          let subscriptionsAmount = 0; // Is this specific subscription subscribed (or only nested ones?)

          let selfSubscribed = false;
          function addNestedSub(listener) {
            trySubscribe();
            const cleanupListener = listeners.subscribe(listener); // cleanup nested sub

            let removed = false;
            return () => {
              if (!removed) {
                removed = true;
                cleanupListener();
                tryUnsubscribe();
              }
            };
          }
          function notifyNestedSubs() {
            listeners.notify();
          }
          function handleChangeWrapper() {
            if (subscription.onStateChange) {
              subscription.onStateChange();
            }
          }
          function isSubscribed() {
            return selfSubscribed;
          }
          function trySubscribe() {
            subscriptionsAmount++;
            if (!unsubscribe) {
              unsubscribe = store.subscribe(handleChangeWrapper);
              listeners = createListenerCollection();
            }
          }
          function tryUnsubscribe() {
            subscriptionsAmount--;
            if (unsubscribe && subscriptionsAmount === 0) {
              unsubscribe();
              unsubscribe = undefined;
              listeners.clear();
              listeners = nullListeners;
            }
          }
          function trySubscribeSelf() {
            if (!selfSubscribed) {
              selfSubscribed = true;
              trySubscribe();
            }
          }
          function tryUnsubscribeSelf() {
            if (selfSubscribed) {
              selfSubscribed = false;
              tryUnsubscribe();
            }
          }
          const subscription = {
            addNestedSub,
            notifyNestedSubs,
            handleChangeWrapper,
            isSubscribed,
            trySubscribe: trySubscribeSelf,
            tryUnsubscribe: tryUnsubscribeSelf,
            getListeners: () => listeners
          };
          return subscription;
        }

        // To get around it, we can conditionally useEffect on the server (no-op) and
        // useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
        // subscription callback always has the selector from the latest render commit
        // available, otherwise a store update may happen between render and the effect,
        // which may cause missed updates; we also must ensure the store subscription
        // is created synchronously, otherwise a store update may occur before the
        // subscription is created and an inconsistent state may be observed
        // Matches logic in React's `shared/ExecutionEnvironment` file

        const canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');
        const useIsomorphicLayoutEffect = canUseDOM ? reactExports.useLayoutEffect : reactExports.useEffect;
        function is(x, y) {
          if (x === y) {
            return x !== 0 || y !== 0 || 1 / x === 1 / y;
          } else {
            return x !== x && y !== y;
          }
        }
        function shallowEqual(objA, objB) {
          if (is(objA, objB)) return true;
          if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
            return false;
          }
          const keysA = Object.keys(objA);
          const keysB = Object.keys(objB);
          if (keysA.length !== keysB.length) return false;
          for (let i = 0; i < keysA.length; i++) {
            if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
              return false;
            }
          }
          return true;
        }
        function Provider({
          store,
          context,
          children,
          serverState,
          stabilityCheck = 'once',
          noopCheck = 'once'
        }) {
          const contextValue = reactExports.useMemo(() => {
            const subscription = createSubscription(store);
            return {
              store,
              subscription,
              getServerState: serverState ? () => serverState : undefined,
              stabilityCheck,
              noopCheck
            };
          }, [store, serverState, stabilityCheck, noopCheck]);
          const previousState = reactExports.useMemo(() => store.getState(), [store]);
          useIsomorphicLayoutEffect(() => {
            const subscription = contextValue.subscription;
            subscription.onStateChange = subscription.notifyNestedSubs;
            subscription.trySubscribe();
            if (previousState !== store.getState()) {
              subscription.notifyNestedSubs();
            }
            return () => {
              subscription.tryUnsubscribe();
              subscription.onStateChange = undefined;
            };
          }, [contextValue, previousState]);
          const Context = context || ReactReduxContext; // @ts-ignore 'AnyAction' is assignable to the constraint of type 'A', but 'A' could be instantiated with a different subtype

          return /*#__PURE__*/reactExports.createElement(Context.Provider, {
            value: contextValue
          }, children);
        }

        /**
         * Hook factory, which creates a `useStore` hook bound to a given context.
         *
         * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
         * @returns {Function} A `useStore` hook bound to the specified context.
         */

        function createStoreHook(context = ReactReduxContext) {
          const useReduxContext$1 =
          // @ts-ignore
          context === ReactReduxContext ? useReduxContext :
          // @ts-ignore
          createReduxContextHook(context);
          return function useStore() {
            const _useReduxContext$2 = useReduxContext$1(),
              store = _useReduxContext$2.store; // @ts-ignore

            return store;
          };
        }
        /**
         * A hook to access the redux store.
         *
         * @returns {any} the redux store
         *
         * @example
         *
         * import React from 'react'
         * import { useStore } from 'react-redux'
         *
         * export const ExampleComponent = () => {
         *   const store = useStore()
         *   return <div>{store.getState()}</div>
         * }
         */

        const useStore = exports("f", /*#__PURE__*/createStoreHook());

        /**
         * Hook factory, which creates a `useDispatch` hook bound to a given context.
         *
         * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
         * @returns {Function} A `useDispatch` hook bound to the specified context.
         */

        function createDispatchHook(context = ReactReduxContext) {
          const useStore$1 =
          // @ts-ignore
          context === ReactReduxContext ? useStore : createStoreHook(context);
          return function useDispatch() {
            const store = useStore$1(); // @ts-ignore

            return store.dispatch;
          };
        }
        /**
         * A hook to access the redux `dispatch` function.
         *
         * @returns {any|function} redux store's `dispatch` function
         *
         * @example
         *
         * import React, { useCallback } from 'react'
         * import { useDispatch } from 'react-redux'
         *
         * export const CounterComponent = ({ value }) => {
         *   const dispatch = useDispatch()
         *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
         *   return (
         *     <div>
         *       <span>{value}</span>
         *       <button onClick={increaseCounter}>Increase counter</button>
         *     </div>
         *   )
         * }
         */

        const useDispatch = exports("b", /*#__PURE__*/createDispatchHook());

        // The primary entry point assumes we're working with standard ReactDOM/RN, but
        // older versions that do not include `useSyncExternalStore` (React 16.9 - 17.x).
        // Because of that, the useSyncExternalStore compat shim is needed.
        initializeUseSelector(withSelectorExports.useSyncExternalStoreWithSelector);
        // with standard React renderers (ReactDOM, React Native)

        setBatch(reactDomExports.unstable_batchedUpdates);
      }
    };
  });
})();
//# sourceMappingURL=redux-legacy-ZqSxVvAn.js.map
