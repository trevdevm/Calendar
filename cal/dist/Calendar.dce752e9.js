"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

parcelRequire = function (e) {
  var r = "function" == typeof parcelRequire && parcelRequire,
      n = "function" == typeof require && require,
      i = {};

  function u(e, u) {
    if (e in i) return i[e];
    var t = "function" == typeof parcelRequire && parcelRequire;
    if (!u && t) return t(e, !0);
    if (r) return r(e, !0);
    if (n && "string" == typeof e) return n(e);
    var o = new Error("Cannot find module '" + e + "'");
    throw o.code = "MODULE_NOT_FOUND", o;
  }

  return u.register = function (e, r) {
    i[e] = r;
  }, i = e(u), u.modules = i, u;
}(function (require) {
  function f(a) {
    return a && a.__esModule ? {
      d: a.default
    } : {
      d: a
    };
  }

  var b = {};
  require("n8MK"), require("mo7Y");

  var g = function g(e) {
    var $n8MK$$interop$default = f(require("n8MK"));
    return $n8MK$$interop$default.d.createElement("div", {
      className: "heightControl"
    }, $n8MK$$interop$default.d.createElement("header", null, $n8MK$$interop$default.d.createElement("div", {
      id: "logo"
    }, $n8MK$$interop$default.d.createElement("span", {
      className: "icon"
    }, "date_range"), $n8MK$$interop$default.d.createElement("span", null, "My", $n8MK$$interop$default.d.createElement("b", null, "Calendar"), function () {
      if (e.error) {
        var t = new Date(),
            a = require("mo7Y").addMonths(t, 1),
            r = e.currentMonth;

        return require("mo7Y").isSameMonth(r, t) || require("mo7Y").isSameMonth(r, a) ? $n8MK$$interop$default.d.createElement("div", {
          className: "errBox"
        }, $n8MK$$interop$default.d.createElement("h1", null, "No Times Available. Please choose another day.")) : $n8MK$$interop$default.d.createElement("div", {
          className: "errBox"
        }, "Only the first two months have availability.");
      }

      return $n8MK$$interop$default.d.createElement("div", {
        className: "helpBox"
      }, "Please select a date with available times to demo this calendar application.");
    }()))), $n8MK$$interop$default.d.createElement("main", null, $n8MK$$interop$default.d.createElement("div", {
      className: "calendar"
    }, $n8MK$$interop$default.d.createElement("div", {
      className: "header row flex-middle"
    }, $n8MK$$interop$default.d.createElement("div", {
      className: "col col-start"
    }, $n8MK$$interop$default.d.createElement("div", {
      className: "icon",
      onClick: e.prevMonth
    }, "chevron_left")), $n8MK$$interop$default.d.createElement("div", {
      className: "col col-center"
    }, $n8MK$$interop$default.d.createElement("span", null, require("mo7Y").format(e.currentMonth, "MMMM yyyy"))), $n8MK$$interop$default.d.createElement("div", {
      className: "col col-end",
      onClick: e.nextMonth
    }, $n8MK$$interop$default.d.createElement("div", {
      className: "icon"
    }, "chevron_right"))), function () {
      for (var t = [], a = require("mo7Y").startOfWeek(e.currentMonth), r = 0; r < 7; r++) {
        t.push($n8MK$$interop$default.d.createElement("div", {
          className: "col col-center",
          key: r
        }, require("mo7Y").format(require("mo7Y").addDays(a, r), "EEEE")));
      }

      return $n8MK$$interop$default.d.createElement("div", {
        className: "days row"
      }, t);
    }(), function () {
      for (var t = e.currentMonth, a = e.selectedDate, r = e.initTime, $ = require("mo7Y").startOfMonth(t), s = require("mo7Y").endOfMonth($), c = require("mo7Y").startOfWeek($), o = require("mo7Y").endOfWeek(s), m = Object.keys(r).length, i = [], n = [], l = c, p = s, d = $, H = ""; l <= o;) {
        for (var u = function u(t) {
          H = require("mo7Y").format(l, "d");
          var s = l,
              c = Number(H),
              o = [];

          if (l >= d && l <= p) {
            var i = c - 1;
            i < m && (o = [].concat(r[i].time));
          }

          n.push($n8MK$$interop$default.d.createElement("div", {
            className: "col cell ".concat(require("mo7Y").isSameMonth(l, $) ? require("mo7Y").isSameDay(l, a) ? "selected" : "" : "disabled"),
            key: l,
            onClick: function onClick(t) {
              return e.dateClick(require("mo7Y").toDate(s));
            }
          }, $n8MK$$interop$default.d.createElement("span", {
            className: "number"
          }, H), $n8MK$$interop$default.d.createElement("span", {
            className: "bg"
          }, H), $n8MK$$interop$default.d.createElement("ul", {
            className: "showTime"
          }, o.map(function (e, t) {
            return $n8MK$$interop$default.d.createElement("li", {
              key: t.toString()
            }, e);
          })))), l = require("mo7Y").addDays(l, 1);
        }, h = 0; h < 7; h++) {
          u();
        }

        i.push($n8MK$$interop$default.d.createElement("div", {
          className: "row",
          key: l
        }, n)), n = [];
      }

      return $n8MK$$interop$default.d.createElement("div", {
        className: "body"
      }, i);
    }())));
  };

  b.default = g;

  if ((typeof exports === "undefined" ? "undefined" : (0, _typeof2.default)(exports)) === "object" && typeof module !== "undefined") {
    module.exports = b;
  } else if (typeof define === "function" && define.amd) {
    define(function () {
      return b;
    });
  }

  b.__esModule = true;
  return {
    "s1H9": b
  };
});