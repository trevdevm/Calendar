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
  function d(a) {
    return a && a.__esModule ? {
      d: a.default
    } : {
      d: a
    };
  }

  var f,
      g = false;

  function h() {
    if (g) return;
    g = true;
    f = {};
    f = "medLogC.b2fc96d9.png";
  }

  var j,
      k = false;

  function m() {
    if (k) return;
    k = true;
    j = {};
    j = "smallLogC.b41fa9d0.png";
  }

  var b = {};

  function p(e, r) {
    return v(e) || u(e, r) || s(e, r) || q();
  }

  function q() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function s(e, r) {
    if (e) {
      if ("string" == typeof e) return c(e, r);
      var t = Object.prototype.toString.call(e).slice(8, -1);
      return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? c(e, r) : void 0;
    }
  }

  function c(e, r) {
    (null == r || r > e.length) && (r = e.length);

    for (var t = 0, a = new Array(r); t < r; t++) {
      a[t] = e[t];
    }

    return a;
  }

  function u(e, r) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
      var t = [],
          a = !0,
          n = !1,
          $ = void 0;

      try {
        for (var o, i = e[Symbol.iterator](); !(a = (o = i.next()).done) && (t.push(o.value), !r || t.length !== r); a = !0) {
          ;
        }
      } catch (l) {
        n = !0, $ = l;
      } finally {
        try {
          a || null == i.return || i.return();
        } finally {
          if (n) throw $;
        }
      }

      return t;
    }
  }

  function v(e) {
    if (Array.isArray(e)) return e;
  }

  require("n8MK"), require("VJZj");

  var w = function w() {
    var e = p(require("n8MK").useState([]), 2),
        r = e[0],
        t = e[1];
    var $n8MK$$interop$default = d(require("n8MK"));
    return require("n8MK").useEffect(function () {
      t([(h(), f), (m(), j)]);
    }, []), $n8MK$$interop$default.d.createElement("div", {
      className: "cThanks"
    }, $n8MK$$interop$default.d.createElement("div", {
      className: "other"
    }, $n8MK$$interop$default.d.createElement("nav", {
      className: "cNav"
    }, $n8MK$$interop$default.d.createElement("a", {
      href: "https://www.devmunns.site/contact"
    }, "Email"), $n8MK$$interop$default.d.createElement("a", {
      href: "https://www.devmunns.site"
    }, "Homepage"), $n8MK$$interop$default.d.createElement(require("VJZj").Link, {
      to: "/cal",
      className: "calLin"
    }, "Calendar")), $n8MK$$interop$default.d.createElement("div", {
      className: "navLog"
    }, $n8MK$$interop$default.d.createElement("a", {
      href: "https://www.devmunns.site"
    }, $n8MK$$interop$default.d.createElement("img", {
      src: r[1],
      id: "slC",
      alt: "Trevor's Logo"
    })))), $n8MK$$interop$default.d.createElement("div", {
      className: "thxHead"
    }, $n8MK$$interop$default.d.createElement("h1", null, "Thank You! This is only a demo. You are ", $n8MK$$interop$default.d.createElement("b", null, "NOT"), " scheduled for any appointment. Do you wish to email the developer?")), $n8MK$$interop$default.d.createElement("div", {
      className: "logoC"
    }, $n8MK$$interop$default.d.createElement("a", {
      href: "https://www.devmunns.site/contact",
      id: "emailMe"
    }, "Email Me!"), $n8MK$$interop$default.d.createElement("a", {
      href: "https://www.devmunns.site"
    }, $n8MK$$interop$default.d.createElement("img", {
      src: r[0],
      alt: "Trevor's logo"
    }))));
  };

  b.default = w;

  if ((typeof exports === "undefined" ? "undefined" : (0, _typeof2.default)(exports)) === "object" && typeof module !== "undefined") {
    module.exports = b;
  } else if (typeof define === "function" && define.amd) {
    define(function () {
      return b;
    });
  }

  b.__esModule = true;
  return {
    "ngd5": b
  };
});