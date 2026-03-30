;
(function () {
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  System.register(['./index-legacy-CoMmlwbr.js', './vendor-legacy-lhtLtiSI.js', './redux-legacy-ZqSxVvAn.js', './Android-legacy-Csf5qFR4.js', './mui-legacy-b38CRKaY.js', './i18n-legacy-BRT6G2_g.js', './editor-legacy-Dx3AxXyy.js', './dnd-legacy-DGW9B2he.js', './charts-legacy-BBm9rbLh.js'], function (exports, module) {
    'use strict';

    var dayjs, jsx, Fragment, commonjsGlobal, getDefaultExportFromCjs, useSelector, shallowEqual, useDispatch, NAMESPACES, valueChange, useTheme, LocalizationProvider, DateTimePicker, TextField, TimePicker, DatePicker, useTranslation;
    return {
      setters: [module => {
        dayjs = module.p;
        jsx = module.n;
        Fragment = module.F;
      }, module => {
        commonjsGlobal = module.d;
        getDefaultExportFromCjs = module.g;
      }, module => {
        useSelector = module.u;
        shallowEqual = module.s;
        useDispatch = module.b;
      }, module => {
        NAMESPACES = module.N;
        valueChange = module.v;
      }, module => {
        useTheme = module.V;
        LocalizationProvider = module.W;
        DateTimePicker = module.X;
        TextField = module.o;
        TimePicker = module.Y;
        DatePicker = module.Z;
      }, module => {
        useTranslation = module.u;
      }, null, null, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._wrapper_2goe7_1 {\n  width: 50%;\n}\n\n@media only screen and (max-width: 768px) {\n  ._wrapper_2goe7_1 {\n    width: 100%;\n  }\n}\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        exports("default", DateTimeQuestion);
        var customParseFormat = {
          exports: {}
        };
        (function (module, exports$1) {
          !function (e, t) {
            module.exports = t();
          }(commonjsGlobal, function () {
            var e = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
              },
              t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
              n = /\d/,
              r = /\d\d/,
              i = /\d\d?/,
              o = /\d*[^-_:/,()\s\d]+/,
              s = {},
              a = function a(e) {
                return (e = +e) + (e > 68 ? 1900 : 2e3);
              };
            var f = function f(e) {
                return function (t) {
                  this[e] = +t;
                };
              },
              h = [/[+-]\d\d:?(\d\d)?|Z/, function (e) {
                (this.zone || (this.zone = {})).offset = function (e) {
                  if (!e) return 0;
                  if ("Z" === e) return 0;
                  var t = e.match(/([+-]|\d\d)/g),
                    n = 60 * t[1] + (+t[2] || 0);
                  return 0 === n ? 0 : "+" === t[0] ? -n : n;
                }(e);
              }],
              u = function u(e) {
                var t = s[e];
                return t && (t.indexOf ? t : t.s.concat(t.f));
              },
              d = function d(e, t) {
                var n,
                  r = s.meridiem;
                if (r) {
                  for (var i = 1; i <= 24; i += 1) if (e.indexOf(r(i, 0, t)) > -1) {
                    n = i > 12;
                    break;
                  }
                } else n = e === (t ? "pm" : "PM");
                return n;
              },
              c = {
                A: [o, function (e) {
                  this.afternoon = d(e, false);
                }],
                a: [o, function (e) {
                  this.afternoon = d(e, true);
                }],
                Q: [n, function (e) {
                  this.month = 3 * (e - 1) + 1;
                }],
                S: [n, function (e) {
                  this.milliseconds = 100 * +e;
                }],
                SS: [r, function (e) {
                  this.milliseconds = 10 * +e;
                }],
                SSS: [/\d{3}/, function (e) {
                  this.milliseconds = +e;
                }],
                s: [i, f("seconds")],
                ss: [i, f("seconds")],
                m: [i, f("minutes")],
                mm: [i, f("minutes")],
                H: [i, f("hours")],
                h: [i, f("hours")],
                HH: [i, f("hours")],
                hh: [i, f("hours")],
                D: [i, f("day")],
                DD: [r, f("day")],
                Do: [o, function (e) {
                  var t = s.ordinal,
                    n = e.match(/\d+/);
                  if (this.day = n[0], t) for (var r = 1; r <= 31; r += 1) t(r).replace(/\[|\]/g, "") === e && (this.day = r);
                }],
                w: [i, f("week")],
                ww: [r, f("week")],
                M: [i, f("month")],
                MM: [r, f("month")],
                MMM: [o, function (e) {
                  var t = u("months"),
                    n = (u("monthsShort") || t.map(function (e) {
                      return e.slice(0, 3);
                    })).indexOf(e) + 1;
                  if (n < 1) throw new Error();
                  this.month = n % 12 || n;
                }],
                MMMM: [o, function (e) {
                  var t = u("months").indexOf(e) + 1;
                  if (t < 1) throw new Error();
                  this.month = t % 12 || t;
                }],
                Y: [/[+-]?\d+/, f("year")],
                YY: [r, function (e) {
                  this.year = a(e);
                }],
                YYYY: [/\d{4}/, f("year")],
                Z: h,
                ZZ: h
              };
            function l(n) {
              var r, i;
              r = n, i = s && s.formats;
              for (var o = (n = r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (t, n, r) {
                  var o = r && r.toUpperCase();
                  return n || i[r] || e[r] || i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (e, t, n) {
                    return t || n.slice(1);
                  });
                })).match(t), a = o.length, f = 0; f < a; f += 1) {
                var h = o[f],
                  u = c[h],
                  d = u && u[0],
                  l = u && u[1];
                o[f] = l ? {
                  regex: d,
                  parser: l
                } : h.replace(/^\[|\]$/g, "");
              }
              return function (e) {
                for (var t = {}, n = 0, r = 0; n < a; n += 1) {
                  var i = o[n];
                  if ("string" == typeof i) r += i.length;else {
                    var s = i.regex,
                      f = i.parser,
                      h = e.slice(r),
                      u = s.exec(h)[0];
                    f.call(t, u), e = e.replace(u, "");
                  }
                }
                return function (e) {
                  var t = e.afternoon;
                  if (void 0 !== t) {
                    var n = e.hours;
                    t ? n < 12 && (e.hours += 12) : 12 === n && (e.hours = 0), delete e.afternoon;
                  }
                }(t), t;
              };
            }
            return function (e, t, n) {
              n.p.customParseFormat = true, e && e.parseTwoDigitYear && (a = e.parseTwoDigitYear);
              var r = t.prototype,
                i = r.parse;
              r.parse = function (e) {
                var t = e.date,
                  r = e.utc,
                  o = e.args;
                this.$u = r;
                var a = o[1];
                if ("string" == typeof a) {
                  var f = true === o[2],
                    h = true === o[3],
                    u = f || h,
                    d = o[2];
                  h && (d = o[2]), s = this.$locale(), !f && d && (s = n.Ls[d]), this.$d = function (e, t, n, r) {
                    try {
                      if (["x", "X"].indexOf(t) > -1) return new Date(("X" === t ? 1e3 : 1) * e);
                      var i = l(t)(e),
                        o = i.year,
                        s = i.month,
                        a = i.day,
                        f = i.hours,
                        h = i.minutes,
                        u = i.seconds,
                        d = i.milliseconds,
                        c = i.zone,
                        m = i.week,
                        M = new Date(),
                        Y = a || (o || s ? 1 : M.getDate()),
                        p = o || M.getFullYear(),
                        v = 0;
                      o && !s || (v = s > 0 ? s - 1 : M.getMonth());
                      var D,
                        w = f || 0,
                        g = h || 0,
                        y = u || 0,
                        L = d || 0;
                      return c ? new Date(Date.UTC(p, v, Y, w, g, y, L + 60 * c.offset * 1e3)) : n ? new Date(Date.UTC(p, v, Y, w, g, y, L)) : (D = new Date(p, v, Y, w, g, y, L), m && (D = r(D).week(m).toDate()), D);
                    } catch (e) {
                      return new Date("");
                    }
                  }(t, a, r, n), this.init(), d && true !== d && (this.$L = this.locale(d).$L), u && t != this.format(a) && (this.$d = new Date("")), s = {};
                } else if (a instanceof Array) for (var c = a.length, m = 1; m <= c; m += 1) {
                  o[1] = a[m - 1];
                  var M = n.apply(this, o);
                  if (M.isValid()) {
                    this.$d = M.$d, this.$L = M.$L, this.init();
                    break;
                  }
                  m === c && (this.$d = new Date(""));
                } else i.call(this, e);
              };
            };
          });
        })(customParseFormat);
        var customParseFormatExports = customParseFormat.exports;
        const customParseFormatPlugin = /*@__PURE__*/getDefaultExportFromCjs(customParseFormatExports);
        var localizedFormat = {
          exports: {}
        };
        (function (module, exports$1) {
          !function (e, t) {
            module.exports = t();
          }(commonjsGlobal, function () {
            var e = {
              LTS: "h:mm:ss A",
              LT: "h:mm A",
              L: "MM/DD/YYYY",
              LL: "MMMM D, YYYY",
              LLL: "MMMM D, YYYY h:mm A",
              LLLL: "dddd, MMMM D, YYYY h:mm A"
            };
            return function (t, o, n) {
              var r = o.prototype,
                i = r.format;
              n.en.formats = e, r.format = function (t) {
                void 0 === t && (t = "YYYY-MM-DDTHH:mm:ssZ");
                var o = this.$locale().formats,
                  n = function (t, o) {
                    return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (t, n, r) {
                      var i = r && r.toUpperCase();
                      return n || o[r] || e[r] || o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (e, t, o) {
                        return t || o.slice(1);
                      });
                    });
                  }(t, void 0 === o ? {} : o);
                return i.call(this, n);
              };
            };
          });
        })(localizedFormat);
        var localizedFormatExports = localizedFormat.exports;
        const localizedFormatPlugin = /*@__PURE__*/getDefaultExportFromCjs(localizedFormatExports);
        var isBetween = {
          exports: {}
        };
        (function (module, exports$1) {
          !function (e, i) {
            module.exports = i();
          }(commonjsGlobal, function () {
            return function (e, i, t) {
              i.prototype.isBetween = function (e, i, s, f) {
                var n = t(e),
                  o = t(i),
                  r = "(" === (f = f || "()")[0],
                  u = ")" === f[1];
                return (r ? this.isAfter(n, s) : !this.isBefore(n, s)) && (u ? this.isBefore(o, s) : !this.isAfter(o, s)) || (r ? this.isBefore(n, s) : !this.isAfter(n, s)) && (u ? this.isAfter(o, s) : !this.isBefore(o, s));
              };
            };
          });
        })(isBetween);
        var isBetweenExports = isBetween.exports;
        const isBetweenPlugin = /*@__PURE__*/getDefaultExportFromCjs(isBetweenExports);
        dayjs.extend(customParseFormatPlugin);
        dayjs.extend(localizedFormatPlugin);
        dayjs.extend(isBetweenPlugin);
        const withLocale = (dayjs, locale) => !locale ? dayjs : (...args) => dayjs(...args).locale(locale);
        const defaultFormats = {
          normalDateWithWeekday: "ddd, MMM D",
          normalDate: "D MMMM",
          shortDate: "MMM D",
          monthAndDate: "MMMM D",
          dayOfMonth: "D",
          year: "YYYY",
          month: "MMMM",
          monthShort: "MMM",
          monthAndYear: "MMMM YYYY",
          weekday: "dddd",
          weekdayShort: "ddd",
          minutes: "mm",
          hours12h: "hh",
          hours24h: "HH",
          seconds: "ss",
          fullTime: "LT",
          fullTime12h: "hh:mm A",
          fullTime24h: "HH:mm",
          fullDate: "ll",
          fullDateWithWeekday: "dddd, LL",
          fullDateTime: "lll",
          fullDateTime12h: "ll hh:mm A",
          fullDateTime24h: "ll HH:mm",
          keyboardDate: "L",
          keyboardDateTime: "L LT",
          keyboardDateTime12h: "L hh:mm A",
          keyboardDateTime24h: "L HH:mm"
        };
        class DayjsUtils {
          constructor({
            locale,
            formats,
            instance
          } = {}) {
            this.lib = "dayjs";
            this.is12HourCycleInCurrentLocale = () => {
              var _a, _b, _c;
              /* istanbul ignore next */
              return /A|a/.test((_c = (_b = (_a = this.rawDayJsInstance.Ls[this.locale || "en"]) === null || _a === void 0 ? void 0 : _a.formats) === null || _b === void 0 ? void 0 : _b.LT) !== null && _c !== void 0 ? _c : "");
            };
            this.getCurrentLocaleCode = () => {
              return this.locale || "en";
            };
            this.getFormatHelperText = format => {
              var _a, _b;
              // @see https://github.com/iamkun/dayjs/blob/dev/src/plugin/localizedFormat/index.js
              var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?)|./g;
              return (_b = (_a = format.match(localFormattingTokens)) === null || _a === void 0 ? void 0 : _a.map(token => {
                var _a, _b;
                var firstCharacter = token[0];
                if (firstCharacter === "L") {
                  /* istanbul ignore next */
                  return (_b = (_a = this.rawDayJsInstance.Ls[this.locale || "en"]) === null || _a === void 0 ? void 0 : _a.formats[token]) !== null && _b !== void 0 ? _b : token;
                }
                return token;
              }).join("").replace(/a/gi, "(a|p)m").toLocaleLowerCase()) !== null && _b !== void 0 ? _b : format;
            };
            this.parseISO = isoString => {
              return this.dayjs(isoString);
            };
            this.toISO = value => {
              return value.toISOString();
            };
            this.parse = (value, format) => {
              if (value === "") {
                return null;
              }
              return this.dayjs(value, format, this.locale, true);
            };
            this.date = value => {
              if (value === null) {
                return null;
              }
              return this.dayjs(value);
            };
            this.toJsDate = value => {
              return value.toDate();
            };
            this.isValid = value => {
              return this.dayjs(value).isValid();
            };
            this.isNull = date => {
              return date === null;
            };
            this.getDiff = (date, comparing, units) => {
              if (typeof comparing === "string") {
                comparing = this.dayjs(comparing);
              }
              if (!comparing.isValid()) {
                return 0;
              }
              return date.diff(comparing, units);
            };
            this.isAfter = (date, value) => {
              return date.isAfter(value);
            };
            this.isBefore = (date, value) => {
              return date.isBefore(value);
            };
            this.isAfterDay = (date, value) => {
              return date.isAfter(value, "day");
            };
            this.isBeforeDay = (date, value) => {
              return date.isBefore(value, "day");
            };
            this.isAfterMonth = (date, value) => {
              return date.isAfter(value, "month");
            };
            this.isBeforeMonth = (date, value) => {
              return date.isBefore(value, "month");
            };
            this.isBeforeYear = (date, value) => {
              return date.isBefore(value, "year");
            };
            this.isAfterYear = (date, value) => {
              return date.isAfter(value, "year");
            };
            this.startOfDay = date => {
              return date.startOf("day");
            };
            this.endOfDay = date => {
              return date.endOf("day");
            };
            this.format = (date, formatKey) => {
              return this.formatByString(date, this.formats[formatKey]);
            };
            this.formatByString = (date, formatString) => {
              return this.dayjs(date).format(formatString);
            };
            this.formatNumber = numberToFormat => {
              return numberToFormat;
            };
            this.getHours = date => {
              return date.hour();
            };
            this.addSeconds = (date, count) => {
              return count < 0 ? date.subtract(Math.abs(count), "second") : date.add(count, "second");
            };
            this.addMinutes = (date, count) => {
              return count < 0 ? date.subtract(Math.abs(count), "minute") : date.add(count, "minute");
            };
            this.addHours = (date, count) => {
              return count < 0 ? date.subtract(Math.abs(count), "hour") : date.add(count, "hour");
            };
            this.addDays = (date, count) => {
              return count < 0 ? date.subtract(Math.abs(count), "day") : date.add(count, "day");
            };
            this.addWeeks = (date, count) => {
              return count < 0 ? date.subtract(Math.abs(count), "week") : date.add(count, "week");
            };
            this.addMonths = (date, count) => {
              return count < 0 ? date.subtract(Math.abs(count), "month") : date.add(count, "month");
            };
            this.addYears = (date, count) => {
              return count < 0 ? date.subtract(Math.abs(count), "year") : date.add(count, "year");
            };
            this.setMonth = (date, count) => {
              return date.set("month", count);
            };
            this.setHours = (date, count) => {
              return date.set("hour", count);
            };
            this.getMinutes = date => {
              return date.minute();
            };
            this.setMinutes = (date, count) => {
              return date.set("minute", count);
            };
            this.getSeconds = date => {
              return date.second();
            };
            this.setSeconds = (date, count) => {
              return date.set("second", count);
            };
            this.getMonth = date => {
              return date.month();
            };
            this.getDate = date => {
              return date.date();
            };
            this.setDate = (date, count) => {
              return date.set("date", count);
            };
            this.getDaysInMonth = date => {
              return date.daysInMonth();
            };
            this.isSameDay = (date, comparing) => {
              return date.isSame(comparing, "day");
            };
            this.isSameMonth = (date, comparing) => {
              return date.isSame(comparing, "month");
            };
            this.isSameYear = (date, comparing) => {
              return date.isSame(comparing, "year");
            };
            this.isSameHour = (date, comparing) => {
              return date.isSame(comparing, "hour");
            };
            this.getMeridiemText = ampm => {
              return ampm === "am" ? "AM" : "PM";
            };
            this.startOfYear = date => {
              return date.startOf("year");
            };
            this.endOfYear = date => {
              return date.endOf("year");
            };
            this.startOfMonth = date => {
              return date.startOf("month");
            };
            this.endOfMonth = date => {
              return date.endOf("month");
            };
            this.startOfWeek = date => {
              return date.startOf("week");
            };
            this.endOfWeek = date => {
              return date.endOf("week");
            };
            this.getNextMonth = date => {
              return date.add(1, "month");
            };
            this.getPreviousMonth = date => {
              return date.subtract(1, "month");
            };
            this.getMonthArray = date => {
              const firstMonth = date.startOf("year");
              const monthArray = [firstMonth];
              while (monthArray.length < 12) {
                const prevMonth = monthArray[monthArray.length - 1];
                monthArray.push(this.getNextMonth(prevMonth));
              }
              return monthArray;
            };
            this.getYear = date => {
              return date.year();
            };
            this.setYear = (date, year) => {
              return date.set("year", year);
            };
            this.mergeDateAndTime = (date, time) => {
              return date.hour(time.hour()).minute(time.minute()).second(time.second());
            };
            this.getWeekdays = () => {
              const start = this.dayjs().startOf("week");
              return [0, 1, 2, 3, 4, 5, 6].map(diff => this.formatByString(start.add(diff, "day"), "dd"));
            };
            this.isEqual = (value, comparing) => {
              if (value === null && comparing === null) {
                return true;
              }
              return this.dayjs(value).isSame(comparing);
            };
            this.getWeekArray = date => {
              const start = this.dayjs(date).startOf("month").startOf("week");
              const end = this.dayjs(date).endOf("month").endOf("week");
              let count = 0;
              let current = start;
              const nestedWeeks = [];
              while (current.isBefore(end)) {
                const weekNumber = Math.floor(count / 7);
                nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
                nestedWeeks[weekNumber].push(current);
                current = current.add(1, "day");
                count += 1;
              }
              return nestedWeeks;
            };
            this.getYearRange = (start, end) => {
              const startDate = this.dayjs(start).startOf("year");
              const endDate = this.dayjs(end).endOf("year");
              const years = [];
              let current = startDate;
              while (current.isBefore(endDate)) {
                years.push(current);
                current = current.add(1, "year");
              }
              return years;
            };
            this.isWithinRange = (date, [start, end]) => {
              return date.isBetween(start, end, null, "[]");
            };
            this.rawDayJsInstance = instance || dayjs;
            this.dayjs = withLocale(this.rawDayJsInstance, locale);
            this.locale = locale;
            this.formats = Object.assign({}, defaultFormats, formats);
          }
        }
        const formatTokenMap = {
          YY: 'year',
          YYYY: 'year',
          M: 'month',
          MM: 'month',
          MMM: 'month',
          MMMM: 'month',
          D: 'day',
          DD: 'day',
          H: 'hour',
          HH: 'hour',
          h: 'hour',
          hh: 'hour',
          m: 'minute',
          mm: 'minute',
          s: 'second',
          ss: 'second',
          A: 'am-pm',
          a: 'am-pm'
        };
        class AdapterDayjs extends DayjsUtils {
          constructor(...args) {
            super(...args);
            this.formatTokenMap = formatTokenMap;
            this.expandFormat = format => {
              var _this$rawDayJsInstanc;
              const localeFormats = (_this$rawDayJsInstanc = this.rawDayJsInstance.Ls[this.locale || 'en']) == null ? void 0 : _this$rawDayJsInstanc.formats; // @see https://github.com/iamkun/dayjs/blob/dev/src/plugin/localizedFormat/index.js

              const t = formatBis => formatBis.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (_, a, b) => a || b.slice(1));
              return format.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (_, a, b) => {
                const B = b && b.toUpperCase();
                return a || localeFormats[b] || t(localeFormats[B]);
              });
            };
            this.getFormatHelperText = format => {
              return this.expandFormat(format).replace(/a/gi, '(a|p)m').toLocaleLowerCase();
            };
          }
        }
        const wrapper = "_wrapper_2goe7_1";
        const styles = {
          wrapper: wrapper
        };
        function DateTimeQuestion(props) {
          var _props$component$cont;
          useTheme();
          const _useTranslation = useTranslation(NAMESPACES.RUN),
            i18n = _useTranslation.i18n;
          const state = useSelector(state2 => {
            let own = state2.runState.values[props.component.qualifiedCode];
            let show_errors = state2.runState.values.Survey.show_errors;
            let isDirty = state2.templateState[props.component.qualifiedCode];
            return {
              invalid: (show_errors || isDirty) && (own === null || own === void 0 ? void 0 : own.validity) === false,
              value: own !== null && own !== void 0 && own.value ? dayjs(window.QlarrScripts.sqlDateTimeToDate(own === null || own === void 0 ? void 0 : own.value)) : null
            };
          }, shallowEqual);
          const dispatch = useDispatch();
          const handleDateChange = date => {
            let finalDate = date === null ? void 0 : date.toDate();
            dispatch(valueChange({
              componentCode: props.component.qualifiedCode,
              value: props.component.type == "date_time" ? window.QlarrScripts.toSqlDateTime(finalDate) : props.component.type == "time" ? window.QlarrScripts.toSqlDateTimeIgnoreDate(finalDate) : window.QlarrScripts.toSqlDateTimeIgnoreTime(finalDate)
            }));
          };
          const dateFormat = props.component.dateFormat ? props.component.dateFormat : "DD.MM.YYYY";
          const timeFormat = props.component.fullDayFormat ? "HH:mm" : "hh:mm A";
          const defaultFormat = props.component.type === "time" ? timeFormat : props.component.type === "date_time" ? dateFormat + " " + timeFormat : dateFormat;
          const hintLabel = props.component.showHint && ((_props$component$cont = props.component.content) === null || _props$component$cont === void 0 ? void 0 : _props$component$cont.hint) || defaultFormat;
          return /* @__PURE__ */jsx("div", {
            className: styles.wrapper,
            children: /* @__PURE__ */jsx(LocalizationProvider, {
              dateAdapter: AdapterDayjs,
              adapterLocale: i18n.language,
              children: props.component.type == "date_time" ? /* @__PURE__ */jsx(Fragment, {
                children: /* @__PURE__ */jsx(DateTimePicker, {
                  renderInput: params => /* @__PURE__ */jsx(TextField, _objectSpread(_objectSpread({}, params), {}, {
                    size: "small",
                    label: hintLabel,
                    onKeyDown: e => e.preventDefault()
                  })),
                  margin: "normal",
                  value: state.value,
                  inputFormat: dateFormat + " " + (props.component.fullDayFormat ? "HH:mm" : "hh:mm A"),
                  PaperProps: {
                    sx: {
                      backgroundColor: "white",
                      "& .MuiPickersDay-root": {
                        backgroundColor: "white"
                      }
                    }
                  },
                  ampm: props.component.fullDayFormat ? false : true,
                  openTo: "year",
                  views: ["year", "month", "day", "hours", "minutes"],
                  id: props.component.qualifiedCode,
                  minDate: props.component.minDate ? dayjs(window.QlarrScripts.dateStringToDate(props.component.minDate)) : void 0,
                  maxDate: props.component.maxDate ? dayjs(window.QlarrScripts.dateStringToDate(props.component.maxDate)) : void 0,
                  error: state.invalid,
                  onChange: handleDateChange
                })
              }) : props.component.type == "time" ? /* @__PURE__ */jsx(TimePicker, {
                renderInput: params => /* @__PURE__ */jsx(TextField, _objectSpread(_objectSpread({}, params), {}, {
                  size: "small",
                  label: hintLabel,
                  onKeyDown: e => e.preventDefault()
                })),
                margin: "normal",
                openTo: "hours",
                views: ["hours", "minutes"],
                ampm: props.component.fullDayFormat ? false : true,
                inputFormat: props.component.fullDayFormat ? "HH:mm" : "hh:mm A",
                id: props.component.qualifiedCode,
                value: state.value,
                error: state.invalid,
                onChange: handleDateChange,
                PaperProps: {
                  sx: {
                    backgroundColor: "white",
                    "& .MuiPickersDay-root": {
                      backgroundColor: "white"
                    }
                  }
                }
              }) : /* @__PURE__ */jsx(DatePicker, {
                renderInput: params => /* @__PURE__ */jsx(TextField, _objectSpread(_objectSpread({}, params), {}, {
                  size: "small",
                  label: hintLabel,
                  onKeyDown: e => e.preventDefault()
                })),
                margin: "normal",
                openTo: "year",
                views: ["year", "month", "day"],
                ampm: props.component.fullDayFormat ? false : true,
                id: props.component.qualifiedCode,
                inputFormat: dateFormat,
                value: state.value,
                minDate: props.component.minDate ? window.QlarrScripts.dateStringToDate(props.component.minDate) : void 0,
                PaperProps: {
                  sx: {
                    backgroundColor: "white",
                    "& .MuiPickersDay-root": {
                      backgroundColor: "white"
                    }
                  }
                },
                maxDate: props.component.maxDate ? window.QlarrScripts.dateStringToDate(props.component.maxDate) : void 0,
                error: state.invalid,
                onChange: handleDateChange
              })
            })
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=DateTimeQuestion-legacy-BKf1z-8A.js.map
