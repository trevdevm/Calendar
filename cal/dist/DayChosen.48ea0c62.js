"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

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
  function X(a) {
    return a && a.__esModule ? {
      d: a.default
    } : {
      d: a
    };
  }

  var ra,
      sa = false;

  function ta() {
    if (sa) return;
    sa = true;
    ra = {};
    ra = "winksC.237c3285.png";
  }

  var M = {};

  function Y(e, t, r, a, n, $, o) {
    try {
      var h = e[$](o),
          i = h.value;
    } catch (c) {
      return void r(c);
    }

    h.done ? t(i) : Promise.resolve(i).then(a, n);
  }

  function Z(e) {
    return function () {
      var t = this,
          r = arguments;
      return new Promise(function (a, n) {
        var $ = e.apply(t, r);

        function o(e) {
          Y($, a, n, o, h, "next", e);
        }

        function h(e) {
          Y($, a, n, o, h, "throw", e);
        }

        o(void 0);
      });
    };
  }

  function G(e, t) {
    return id(e) || hd(e, t) || va(e, t) || ua();
  }

  function ua() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function va(e, t) {
    if (e) {
      if ("string" == typeof e) return aa(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? aa(e, t) : void 0;
    }
  }

  function aa(e, t) {
    (null == t || t > e.length) && (t = e.length);

    for (var r = 0, a = new Array(t); r < t; r++) {
      a[r] = e[r];
    }

    return a;
  }

  var Q,
      wa,
      N = {};
  !function (i, s) {
    var e = "model",
        o = "name",
        r = "type",
        a = "vendor",
        n = "version",
        d = "mobile",
        t = "tablet",
        w = "smarttv",
        l = {
      extend: function extend(i, s) {
        var e = {};

        for (var o in i) {
          s[o] && s[o].length % 2 == 0 ? e[o] = s[o].concat(i[o]) : e[o] = i[o];
        }

        return e;
      },
      has: function has(i, s) {
        return "string" == typeof i && -1 !== s.toLowerCase().indexOf(i.toLowerCase());
      },
      lowerize: function lowerize(i) {
        return i.toLowerCase();
      },
      major: function major(i) {
        return "string" == typeof i ? i.replace(/[^\d\.]/g, "").split(".")[0] : void 0;
      },
      trim: function trim(i) {
        return i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      }
    },
        u = {
      rgx: function rgx(i, s) {
        for (var e, o, r, a, n, d, t = 0; t < s.length && !n;) {
          var w = s[t],
              l = s[t + 1];

          for (e = o = 0; e < w.length && !n;) {
            if (n = w[e++].exec(i)) for (r = 0; r < l.length; r++) {
              d = n[++o], "object" == (0, _typeof2.default)(a = l[r]) && a.length > 0 ? 2 == a.length ? "function" == typeof a[1] ? this[a[0]] = a[1].call(this, d) : this[a[0]] = a[1] : 3 == a.length ? "function" != typeof a[1] || a[1].exec && a[1].test ? this[a[0]] = d ? d.replace(a[1], a[2]) : void 0 : this[a[0]] = d ? a[1].call(this, d, a[2]) : void 0 : 4 == a.length && (this[a[0]] = d ? a[3].call(this, d.replace(a[1], a[2])) : void 0) : this[a] = d || void 0;
            }
          }

          t += 2;
        }
      },
      str: function str(i, s) {
        for (var e in s) {
          if ("object" == (0, _typeof2.default)(s[e]) && s[e].length > 0) {
            for (var o = 0; o < s[e].length; o++) {
              if (l.has(s[e][o], i)) return "?" === e ? void 0 : e;
            }
          } else if (l.has(s[e], i)) return "?" === e ? void 0 : e;
        }

        return i;
      }
    },
        c = {
      browser: {
        oldsafari: {
          version: {
            "1.0": "/8",
            1.2: "/1",
            1.3: "/3",
            "2.0": "/412",
            "2.0.2": "/416",
            "2.0.3": "/417",
            "2.0.4": "/419",
            "?": "/"
          }
        }
      },
      device: {
        amazon: {
          model: {
            "Fire Phone": ["SD", "KF"]
          }
        },
        sprint: {
          model: {
            "Evo Shift 4G": "7373KT"
          },
          vendor: {
            HTC: "APA",
            Sprint: "Sprint"
          }
        }
      },
      os: {
        windows: {
          version: {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2000: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM"
          }
        }
      }
    },
        b = {
      browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [o, n], [/(opios)[\/\s]+([\w\.]+)/i], [[o, "Opera Mini"], n], [/\s(opr)\/([\w\.]+)/i], [[o, "Opera"], n], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i], [o, n], [/(konqueror)\/([\w\.]+)/i], [[o, "Konqueror"], n], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[o, "IE"], n], [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i], [[o, "Edge"], n], [/(yabrowser)\/([\w\.]+)/i], [[o, "Yandex"], n], [/(Avast)\/([\w\.]+)/i], [[o, "Avast Secure Browser"], n], [/(AVG)\/([\w\.]+)/i], [[o, "AVG Secure Browser"], n], [/(puffin)\/([\w\.]+)/i], [[o, "Puffin"], n], [/(focus)\/([\w\.]+)/i], [[o, "Firefox Focus"], n], [/(opt)\/([\w\.]+)/i], [[o, "Opera Touch"], n], [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], [[o, "UCBrowser"], n], [/(comodo_dragon)\/([\w\.]+)/i], [[o, /_/g, " "], n], [/(windowswechat qbcore)\/([\w\.]+)/i], [[o, "WeChat(Win) Desktop"], n], [/(micromessenger)\/([\w\.]+)/i], [[o, "WeChat"], n], [/(brave)\/([\w\.]+)/i], [[o, "Brave"], n], [/(qqbrowserlite)\/([\w\.]+)/i], [o, n], [/(QQ)\/([\d\.]+)/i], [o, n], [/m?(qqbrowser)[\/\s]?([\w\.]+)/i], [o, n], [/(baiduboxapp)[\/\s]?([\w\.]+)/i], [o, n], [/(2345Explorer)[\/\s]?([\w\.]+)/i], [o, n], [/(MetaSr)[\/\s]?([\w\.]+)/i], [o], [/(LBBROWSER)/i], [o], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [n, [o, "MIUI Browser"]], [/;fbav\/([\w\.]+);/i], [n, [o, "Facebook"]], [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i], [o, n], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [n, [o, "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[o, /(.+)/, "$1 WebView"], n], [/((?:oculus|samsung)browser)\/([\w\.]+)/i], [[o, /(.+(?:g|us))(.+)/, "$1 $2"], n], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i], [n, [o, "Android Browser"]], [/(sailfishbrowser)\/([\w\.]+)/i], [[o, "Sailfish Browser"], n], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [o, n], [/(dolfin)\/([\w\.]+)/i], [[o, "Dolphin"], n], [/(qihu|qhbrowser|qihoobrowser|360browser)/i], [[o, "360 Browser"]], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[o, "Chrome"], n], [/(coast)\/([\w\.]+)/i], [[o, "Opera Coast"], n], [/fxios\/([\w\.-]+)/i], [n, [o, "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [n, [o, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [n, o], [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [[o, "GSA"], n], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [o, [n, u.str, c.browser.oldsafari.version]], [/(webkit|khtml)\/([\w\.]+)/i], [o, n], [/(navigator|netscape)\/([\w\.-]+)/i], [[o, "Netscape"], n], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [o, n]],
      cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [["architecture", "amd64"]], [/(ia32(?=;))/i], [["architecture", l.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [["architecture", "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [["architecture", "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [["architecture", /ower/, "", l.lowerize]], [/(sun4\w)[;\)]/i], [["architecture", "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [["architecture", l.lowerize]]],
      device: [[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i], [e, a, [r, t]], [/applecoremedia\/[\w\.]+ \((ipad)/], [e, [a, "Apple"], [r, t]], [/(apple\s{0,1}tv)/i], [[e, "Apple TV"], [a, "Apple"], [r, w]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [a, e, [r, t]], [/(kf[A-z]+)\sbuild\/.+silk\//i], [e, [a, "Amazon"], [r, t]], [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i], [[e, u.str, c.device.amazon.model], [a, "Amazon"], [r, d]], [/android.+aft([bms])\sbuild/i], [e, [a, "Amazon"], [r, w]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [e, a, [r, d]], [/\((ip[honed|\s\w*]+);/i], [e, [a, "Apple"], [r, d]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [a, e, [r, d]], [/\(bb10;\s(\w+)/i], [e, [a, "BlackBerry"], [r, d]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i], [e, [a, "Asus"], [r, t]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[a, "Sony"], [e, "Xperia Tablet"], [r, t]], [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [e, [a, "Sony"], [r, d]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [a, e, [r, "console"]], [/android.+;\s(shield)\sbuild/i], [e, [a, "Nvidia"], [r, "console"]], [/(playstation\s[34portablevi]+)/i], [e, [a, "Sony"], [r, "console"]], [/(sprint\s(\w+))/i], [[a, u.str, c.device.sprint.vendor], [e, u.str, c.device.sprint.model], [r, d]], [/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i], [a, [e, /_/g, " "], [r, d]], [/(nexus\s9)/i], [e, [a, "HTC"], [r, t]], [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i], [e, [a, "Huawei"], [r, d]], [/android.+(bah2?-a?[lw]\d{2})/i], [e, [a, "Huawei"], [r, t]], [/(microsoft);\s(lumia[\s\w]+)/i], [a, e, [r, d]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [e, [a, "Microsoft"], [r, "console"]], [/(kin\.[onetw]{3})/i], [[e, /\./g, " "], [a, "Microsoft"], [r, d]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [e, [a, "Motorola"], [r, d]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [e, [a, "Motorola"], [r, t]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[a, l.trim], [e, l.trim], [r, w]], [/hbbtv.+maple;(\d+)/i], [[e, /^/, "SmartTV"], [a, "Samsung"], [r, w]], [/\(dtv[\);].+(aquos)/i], [e, [a, "Sharp"], [r, w]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[a, "Samsung"], e, [r, t]], [/smart-tv.+(samsung)/i], [a, [r, w], e], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i], [[a, "Samsung"], e, [r, d]], [/sie-(\w*)/i], [e, [a, "Siemens"], [r, d]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i], [[a, "Nokia"], e, [r, d]], [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i], [e, [a, "Acer"], [r, t]], [/android.+([vl]k\-?\d{3})\s+build/i], [e, [a, "LG"], [r, t]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[a, "LG"], e, [r, t]], [/(lg) netcast\.tv/i], [a, e, [r, w]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i], [e, [a, "LG"], [r, d]], [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i], [a, e, [r, t]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [e, [a, "Lenovo"], [r, t]], [/(lenovo)[_\s-]?([\w-]+)/i], [a, e, [r, d]], [/linux;.+((jolla));/i], [a, e, [r, d]], [/((pebble))app\/[\d\.]+\s/i], [a, e, [r, "wearable"]], [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i], [a, e, [r, d]], [/crkey/i], [[e, "Chromecast"], [a, "Google"], [r, w]], [/android.+;\s(glass)\s\d/i], [e, [a, "Google"], [r, "wearable"]], [/android.+;\s(pixel c)[\s)]/i], [e, [a, "Google"], [r, t]], [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i], [e, [a, "Google"], [r, d]], [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i], [[e, /_/g, " "], [a, "Xiaomi"], [r, d]], [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i], [[e, /_/g, " "], [a, "Xiaomi"], [r, t]], [/android.+;\s(m[1-5]\snote)\sbuild/i], [e, [a, "Meizu"], [r, d]], [/(mz)-([\w-]{2,})/i], [[a, "Meizu"], e, [r, d]], [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})[\s)]/i], [e, [a, "OnePlus"], [r, d]], [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i], [e, [a, "RCA"], [r, t]], [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i], [e, [a, "Dell"], [r, t]], [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i], [e, [a, "Verizon"], [r, t]], [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i], [[a, "Barnes & Noble"], e, [r, t]], [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i], [e, [a, "NuVision"], [r, t]], [/android.+;\s(k88)\sbuild/i], [e, [a, "ZTE"], [r, t]], [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i], [e, [a, "Swiss"], [r, d]], [/android.+[;\/]\s*(zur\d{3})\s+build/i], [e, [a, "Swiss"], [r, t]], [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i], [e, [a, "Zeki"], [r, t]], [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i], [[a, "Dragon Touch"], e, [r, t]], [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i], [e, [a, "Insignia"], [r, t]], [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i], [e, [a, "NextBook"], [r, t]], [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i], [[a, "Voice"], e, [r, d]], [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i], [[a, "LvTel"], e, [r, d]], [/android.+;\s(PH-1)\s/i], [e, [a, "Essential"], [r, d]], [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i], [e, [a, "Envizen"], [r, t]], [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i], [a, e, [r, t]], [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i], [e, [a, "MachSpeed"], [r, t]], [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i], [a, e, [r, t]], [/android.+[;\/]\s*TU_(1491)\s+build/i], [e, [a, "Rotor"], [r, t]], [/android.+(KS(.+))\s+build/i], [e, [a, "Amazon"], [r, t]], [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i], [a, e, [r, t]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[r, l.lowerize], a, e], [/[\s\/\(](smart-?tv)[;\)]/i], [[r, w]], [/(android[\w\.\s\-]{0,9});.+build/i], [e, [a, "Generic"]]],
      engine: [[/windows.+\sedge\/([\w\.]+)/i], [n, [o, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [n, [o, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [o, n], [/rv\:([\w\.]{1,9}).+(gecko)/i], [n, o]],
      os: [[/microsoft\s(windows)\s(vista|xp)/i], [o, n], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [o, [n, u.str, c.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[o, "Windows"], [n, u.str, c.os.windows.version]], [/\((bb)(10);/i], [[o, "BlackBerry"], n], [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i], [o, n], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i], [[o, "Symbian"], n], [/\((series40);/i], [o], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[o, "Firefox OS"], n], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i], [o, n], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[o, "Chromium OS"], n], [/(sunos)\s?([\w\.\d]*)/i], [[o, "Solaris"], n], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i], [o, n], [/(haiku)\s(\w+)/i], [o, n], [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i], [[n, /_/g, "."], [o, "iOS"]], [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i], [[o, "Mac OS"], [n, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i], [o, n]]
    },
        m = function m(s, e) {
      if ("object" == (0, _typeof2.default)(s) && (e = s, s = void 0), !(this instanceof m)) return new m(s, e).getResult();
      var o = s || (i && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : ""),
          r = e ? l.extend(b, e) : b;
      return this.getBrowser = function () {
        var i = {
          name: void 0,
          version: void 0
        };
        return u.rgx.call(i, o, r.browser), i.major = l.major(i.version), i;
      }, this.getCPU = function () {
        var i = {
          architecture: void 0
        };
        return u.rgx.call(i, o, r.cpu), i;
      }, this.getDevice = function () {
        var i = {
          vendor: void 0,
          model: void 0,
          type: void 0
        };
        return u.rgx.call(i, o, r.device), i;
      }, this.getEngine = function () {
        var i = {
          name: void 0,
          version: void 0
        };
        return u.rgx.call(i, o, r.engine), i;
      }, this.getOS = function () {
        var i = {
          name: void 0,
          version: void 0
        };
        return u.rgx.call(i, o, r.os), i;
      }, this.getResult = function () {
        return {
          ua: this.getUA(),
          browser: this.getBrowser(),
          engine: this.getEngine(),
          os: this.getOS(),
          device: this.getDevice(),
          cpu: this.getCPU()
        };
      }, this.getUA = function () {
        return o;
      }, this.setUA = function (i) {
        return o = i, this;
      }, this;
    };

    m.VERSION = "0.7.21", m.BROWSER = {
      NAME: o,
      MAJOR: "major",
      VERSION: n
    }, m.CPU = {
      ARCHITECTURE: "architecture"
    }, m.DEVICE = {
      MODEL: e,
      VENDOR: a,
      TYPE: r,
      CONSOLE: "console",
      MOBILE: d,
      SMARTTV: w,
      TABLET: t,
      WEARABLE: "wearable",
      EMBEDDED: "embedded"
    }, m.ENGINE = {
      NAME: o,
      VERSION: n
    }, m.OS = {
      NAME: o,
      VERSION: n
    }, void 0 !== N ? (N && (N = N = m), wa = m, N.UAParser = wa) : "function" == typeof Q && Q.amd ? Q(function () {
      return m;
    }) : i && (i.UAParser = m);
    var p = i && (i.jQuery || i.Zepto);

    if (p && !p.ua) {
      var h = new m();
      p.ua = h.getResult(), p.ua.get = function () {
        return h.getUA();
      }, p.ua.set = function (i) {
        h.setUA(i);
        var s = h.getResult();

        for (var e in s) {
          p.ua[e] = s[e];
        }
      };
    }
  }("object" == (typeof window === "undefined" ? "undefined" : (0, _typeof2.default)(window)) ? window : N);
  var g = {};

  function xa($) {
    return $ && "object" == (0, _typeof2.default)($) && "default" in $ ? $.default : $;
  }

  Object.defineProperty(g, "__esModule", {
    value: !0
  });

  var B = require("n8MK"),
      k = xa(B),
      J = new N(),
      q = J.getBrowser(),
      a = J.getCPU(),
      C = J.getDevice(),
      K = J.getEngine(),
      x = J.getOS(),
      F = J.getUA(),
      j = function j($) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
    return $ || e;
  },
      S = function S() {
    return !("undefined" == typeof window || !window.navigator && !navigator) && (window.navigator || navigator);
  },
      U = function U($) {
    var e = S();
    return e && e.platform && (-1 !== e.platform.indexOf($) || "MacIntel" === e.platform && e.maxTouchPoints > 1 && !window.MSStream);
  };

  function ya($) {
    return (ya = "function" == typeof Symbol && "symbol" == (0, _typeof2.default)(Symbol.iterator) ? function ($) {
      return (0, _typeof2.default)($);
    } : function ($) {
      return $ && "function" == typeof Symbol && $.constructor === Symbol && $ !== Symbol.prototype ? "symbol" : (0, _typeof2.default)($);
    })($);
  }

  function za($, e) {
    if (!($ instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function ba($, e) {
    for (var i = 0; i < e.length; i++) {
      var r = e[i];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty($, r.key, r);
    }
  }

  function Aa($, e, i) {
    return e && ba($.prototype, e), i && ba($, i), $;
  }

  function Ba($, e, i) {
    return e in $ ? Object.defineProperty($, e, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : $[e] = i, $;
  }

  function Ca() {
    return (Ca = Object.assign || function ($) {
      for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e];

        for (var r in i) {
          Object.prototype.hasOwnProperty.call(i, r) && ($[r] = i[r]);
        }
      }

      return $;
    }).apply(this, arguments);
  }

  function ca($, e) {
    var i = Object.keys($);

    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols($);
      e && (r = r.filter(function (e) {
        return Object.getOwnPropertyDescriptor($, e).enumerable;
      })), i.push.apply(i, r);
    }

    return i;
  }

  function Da($) {
    for (var e = 1; e < arguments.length; e++) {
      var i = null != arguments[e] ? arguments[e] : {};
      e % 2 ? ca(i, !0).forEach(function (e) {
        Ba($, e, i[e]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties($, Object.getOwnPropertyDescriptors(i)) : ca(i).forEach(function (e) {
        Object.defineProperty($, e, Object.getOwnPropertyDescriptor(i, e));
      });
    }

    return $;
  }

  function Ea($, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    $.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: $,
        writable: !0,
        configurable: !0
      }
    }), e && Ga($, e);
  }

  function Fa($) {
    return (Fa = Object.setPrototypeOf ? Object.getPrototypeOf : function ($) {
      return $.__proto__ || Object.getPrototypeOf($);
    })($);
  }

  function Ga($, e) {
    return (Ga = Object.setPrototypeOf || function ($, e) {
      return $.__proto__ = e, $;
    })($, e);
  }

  function P($) {
    if (void 0 === $) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return $;
  }

  function Ha($, e) {
    return !e || "object" != (0, _typeof2.default)(e) && "function" != typeof e ? P($) : e;
  }

  var z = {
    MOBILE: "mobile",
    TABLET: "tablet",
    SMART_TV: "smarttv",
    CONSOLE: "console",
    WEARABLE: "wearable",
    BROWSER: void 0
  },
      D = {
    CHROME: "Chrome",
    FIREFOX: "Firefox",
    OPERA: "Opera",
    YANDEX: "Yandex",
    SAFARI: "Safari",
    INTERNET_EXPLORER: "Internet Explorer",
    EDGE: "Edge",
    CHROMIUM: "Chromium",
    IE: "IE",
    MOBILE_SAFARI: "Mobile Safari",
    EDGE_CHROMIUM: "Edge Chromium"
  },
      L = {
    IOS: "iOS",
    ANDROID: "Android",
    WINDOWS_PHONE: "Windows Phone",
    WINDOWS: "Windows",
    MAC_OS: "Mac OS"
  },
      Ia = {
    isMobile: !1,
    isTablet: !1,
    isBrowser: !1,
    isSmartTV: !1,
    isConsole: !1,
    isWearable: !1
  },
      Ja = function Ja($) {
    switch ($) {
      case z.MOBILE:
        return {
          isMobile: !0
        };

      case z.TABLET:
        return {
          isTablet: !0
        };

      case z.SMART_TV:
        return {
          isSmartTV: !0
        };

      case z.CONSOLE:
        return {
          isConsole: !0
        };

      case z.WEARABLE:
        return {
          isWearable: !0
        };

      case z.BROWSER:
        return {
          isBrowser: !0
        };

      default:
        return Ia;
    }
  },
      Ka = function Ka($, e, i, r, a) {
    return {
      isBrowser: $,
      browserMajorVersion: j(e.major),
      browserFullVersion: j(e.version),
      browserName: j(e.name),
      engineName: j(i.name),
      engineVersion: j(i.version),
      osName: j(r.name),
      osVersion: j(r.version),
      userAgent: j(a)
    };
  },
      da = function da($, e, i, r) {
    return Da({}, $, {
      vendor: j(e.vendor),
      model: j(e.model),
      os: j(i.name),
      osVersion: j(i.version),
      ua: j(r)
    });
  },
      La = function La($, e, i, r) {
    return {
      isSmartTV: $,
      engineName: j(e.name),
      engineVersion: j(e.version),
      osName: j(i.name),
      osVersion: j(i.version),
      userAgent: j(r)
    };
  },
      Ma = function Ma($, e, i, r) {
    return {
      isConsole: $,
      engineName: j(e.name),
      engineVersion: j(e.version),
      osName: j(i.name),
      osVersion: j(i.version),
      userAgent: j(r)
    };
  },
      Na = function Na($, e, i, r) {
    return {
      isWearable: $,
      engineName: j(e.name),
      engineVersion: j(e.version),
      osName: j(i.name),
      osVersion: j(i.version),
      userAgent: j(r)
    };
  },
      H = Ja(C.type);

  function Oa() {
    var $ = H.isBrowser,
        e = H.isMobile,
        i = H.isTablet,
        r = H.isSmartTV,
        a = H.isConsole,
        t = H.isWearable;
    return $ ? Ka($, q, K, x, F) : r ? La(r, K, x, F) : a ? Ma(a, K, x, F) : e ? da(H, C, x, F) : i ? da(H, C, x, F) : t ? Na(t, K, x, F) : void 0;
  }

  var Pa = function Pa() {
    return C.type === z.MOBILE;
  },
      Qa = function Qa() {
    return C.type === z.TABLET;
  },
      Ra = function Ra() {
    switch (C.type) {
      case z.MOBILE:
      case z.TABLET:
        return !0;

      default:
        return !1;
    }
  },
      ea = function ea() {
    return x.name === L.WINDOWS && "10" === x.version && "string" == typeof F && -1 !== F.indexOf("Edg/");
  },
      Sa = function Sa() {
    return C.type === z.SMART_TV;
  },
      Ta = function Ta() {
    return C.type === z.BROWSER;
  },
      Ua = function Ua() {
    return C.type === z.WEARABLE;
  },
      Va = function Va() {
    return C.type === z.CONSOLE;
  },
      Wa = function Wa() {
    return x.name === L.ANDROID;
  },
      Xa = function Xa() {
    return x.name === L.WINDOWS;
  },
      Ya = function Ya() {
    return x.name === L.MAC_OS;
  },
      Za = function Za() {
    return x.name === L.WINDOWS_PHONE;
  },
      $a = function $a() {
    return x.name === L.IOS;
  },
      _a = function _a() {
    return q.name === D.CHROME;
  },
      ab = function ab() {
    return q.name === D.FIREFOX;
  },
      bb = function bb() {
    return q.name === D.CHROMIUM;
  },
      fa = function fa() {
    return q.name === D.EDGE;
  },
      cb = function cb() {
    return q.name === D.YANDEX;
  },
      db = function db() {
    return q.name === D.SAFARI || q.name === D.MOBILE_SAFARI;
  },
      eb = function eb() {
    return q.name === D.MOBILE_SAFARI;
  },
      fb = function fb() {
    return q.name === D.OPERA;
  },
      gb = function gb() {
    return q.name === D.INTERNET_EXPLORER || q.name === D.IE;
  },
      hb = function hb() {
    var $ = S(),
        e = $ && $.userAgent.toLowerCase();
    return "string" == typeof e && /electron/.test(e);
  },
      ib = function ib() {
    var $ = S();
    return $ && (/iPad|iPhone|iPod/.test($.platform) || "MacIntel" === $.platform && $.maxTouchPoints > 1) && !window.MSStream;
  },
      O = function O() {
    return U("iPad");
  },
      jb = function jb() {
    return U("iPhone");
  },
      kb = function kb() {
    return U("iPod");
  },
      lb = function lb() {
    return j(q.version);
  },
      mb = function mb() {
    return j(q.major);
  },
      nb = function nb() {
    return j(x.version);
  },
      ob = function ob() {
    return j(x.name);
  },
      pb = function pb() {
    return j(q.name);
  },
      qb = function qb() {
    return j(C.vendor);
  },
      rb = function rb() {
    return j(C.model);
  },
      sb = function sb() {
    return j(K.name);
  },
      tb = function tb() {
    return j(K.version);
  },
      ub = function ub() {
    return j(F);
  },
      vb = function vb() {
    return j(C.type, "browser");
  },
      ga = Sa(),
      ha = Va(),
      ia = Ua(),
      wb = eb() || O(),
      xb = bb(),
      V = Ra() || O(),
      ja = Pa(),
      ka = Qa() || O(),
      la = Ta(),
      ma = Wa(),
      na = Za(),
      oa = $a() || O(),
      yb = _a(),
      zb = ab(),
      Ab = db(),
      Bb = fb(),
      pa = gb(),
      Cb = nb(),
      Db = ob(),
      Eb = lb(),
      Fb = mb(),
      Gb = pb(),
      Hb = qb(),
      Ib = rb(),
      Jb = sb(),
      Kb = tb(),
      Lb = ub(),
      Mb = fa() || ea(),
      Nb = cb(),
      Ob = vb(),
      Pb = ib(),
      Qb = O(),
      Rb = jb(),
      Sb = kb(),
      Tb = hb(),
      Ub = ea(),
      Vb = fa(),
      Wb = Xa(),
      Xb = Ya(),
      Yb = function Yb($) {
    var e = $.renderWithFragment,
        i = $.children,
        r = $.viewClassName,
        a = $.style;
    return ma ? e ? k.createElement(B.Fragment, null, i) : k.createElement("div", {
      className: r,
      style: a
    }, i) : null;
  },
      Zb = function Zb($) {
    var e = $.renderWithFragment,
        i = $.children,
        r = $.viewClassName,
        a = $.style;
    return la ? e ? k.createElement(B.Fragment, null, i) : k.createElement("div", {
      className: r,
      style: a
    }, i) : null;
  },
      $b = function $b($) {
    var e = $.renderWithFragment,
        i = $.children,
        r = $.viewClassName,
        a = $.style;
    return pa ? e ? k.createElement(B.Fragment, null, i) : k.createElement("div", {
      className: r,
      style: a
    }, i) : null;
  },
      _b = function _b($) {
    var e = $.renderWithFragment,
        i = $.children,
        r = $.viewClassName,
        a = $.style;
    return oa ? e ? k.createElement(B.Fragment, null, i) : k.createElement("div", {
      className: r,
      style: a
    }, i) : null;
  },
      ac = function ac($) {
    var e = $.renderWithFragment,
        i = $.children,
        r = $.viewClassName,
        a = $.style;
    return V ? e ? k.createElement(B.Fragment, null, i) : k.createElement("div", {
      className: r,
      style: a
    }, i) : null;
  },
      bc = function bc($) {
    var e = $.renderWithFragment,
        i = $.children,
        r = $.viewClassName,
        a = $.style;
    return ka ? e ? k.createElement(B.Fragment, null, i) : k.createElement("div", {
      className: r,
      style: a
    }, i) : null;
  },
      cc = function cc($) {
    var e = $.renderWithFragment,
        i = $.children,
        r = $.viewClassName,
        a = $.style;
    return na ? e ? k.createElement(B.Fragment, null, i) : k.createElement("div", {
      className: r,
      style: a
    }, i) : null;
  },
      dc = function dc($) {
    var e = $.renderWithFragment,
        i = $.children,
        r = $.viewClassName,
        a = $.style;
    return ja ? e ? k.createElement(B.Fragment, null, i) : k.createElement("div", {
      className: r,
      style: a
    }, i) : null;
  },
      ec = function ec($) {
    var e = $.renderWithFragment,
        i = $.children,
        r = $.viewClassName,
        a = $.style;
    return ga ? e ? k.createElement(B.Fragment, null, i) : k.createElement("div", {
      className: r,
      style: a
    }, i) : null;
  },
      fc = function fc($) {
    var e = $.renderWithFragment,
        i = $.children,
        r = $.viewClassName,
        a = $.style;
    return ha ? e ? k.createElement(B.Fragment, null, i) : k.createElement("div", {
      className: r,
      style: a
    }, i) : null;
  },
      gc = function gc($) {
    var e = $.renderWithFragment,
        i = $.children,
        r = $.viewClassName,
        a = $.style;
    return ia ? e ? k.createElement(B.Fragment, null, i) : k.createElement("div", {
      className: r,
      style: a
    }, i) : null;
  },
      hc = function hc($) {
    var e = $.renderWithFragment,
        i = $.children,
        r = $.viewClassName,
        a = $.style;
    return $.condition ? e ? k.createElement(B.Fragment, null, i) : k.createElement("div", {
      className: r,
      style: a
    }, i) : null;
  };

  function ic($) {
    return function (e) {
      function i($) {
        var e;
        return za(this, i), (e = Ha(this, Fa(i).call(this, $))).isEventListenerAdded = !1, e.handleOrientationChange = e.handleOrientationChange.bind(P(e)), e.onOrientationChange = e.onOrientationChange.bind(P(e)), e.onPageLoad = e.onPageLoad.bind(P(e)), e.state = {
          isLandscape: !1,
          isPortrait: !1
        }, e;
      }

      return Ea(i, k.Component), Aa(i, [{
        key: "handleOrientationChange",
        value: function value() {
          this.isEventListenerAdded || (this.isEventListenerAdded = !0);
          var $ = window.innerWidth > window.innerHeight ? 90 : 0;
          this.setState({
            isPortrait: 0 === $,
            isLandscape: 90 === $
          });
        }
      }, {
        key: "onOrientationChange",
        value: function value() {
          this.handleOrientationChange();
        }
      }, {
        key: "onPageLoad",
        value: function value() {
          this.handleOrientationChange();
        }
      }, {
        key: "componentDidMount",
        value: function value() {
          void 0 !== ("undefined" == typeof window ? "undefined" : ya(window)) && V && (this.isEventListenerAdded ? window.removeEventListener("load", this.onPageLoad, !1) : (this.handleOrientationChange(), window.addEventListener("load", this.onPageLoad, !1)), window.addEventListener("resize", this.onOrientationChange, !1));
        }
      }, {
        key: "componentWillUnmount",
        value: function value() {
          window.removeEventListener("resize", this.onOrientationChange, !1);
        }
      }, {
        key: "render",
        value: function value() {
          return k.createElement($, Ca({}, this.props, {
            isLandscape: this.state.isLandscape,
            isPortrait: this.state.isPortrait
          }));
        }
      }]), i;
    }();
  }

  var jc = Yb;
  g.AndroidView = jc;
  var kc = Zb;
  g.BrowserView = kc;
  var lc = fc;
  g.ConsoleView = lc;
  var mc = hc;
  g.CustomView = mc;
  var nc = $b;
  g.IEView = nc;
  var oc = _b;
  g.IOSView = oc;
  var pc = dc;
  g.MobileOnlyView = pc;
  var qc = ac;
  g.MobileView = qc;
  var rc = ec;
  g.SmartTVView = rc;
  var sc = bc;
  g.TabletView = sc;
  var tc = gc;
  g.WearableView = tc;
  var uc = cc;
  g.WinPhoneView = uc;
  var vc = Gb;
  g.browserName = vc;
  var wc = Fb;
  g.browserVersion = wc;
  var xc = Oa;
  g.deviceDetect = xc;
  var yc = Ob;
  g.deviceType = yc;
  var zc = Jb;
  g.engineName = zc;
  var Ac = Kb;
  g.engineVersion = Ac;
  var Bc = Eb;
  g.fullBrowserVersion = Bc;
  var Cc = Lb;
  g.getUA = Cc;
  var Dc = ma;
  g.isAndroid = Dc;
  var Ec = la;
  g.isBrowser = Ec;
  var Fc = yb;
  g.isChrome = Fc;
  var Gc = xb;
  g.isChromium = Gc;
  var Hc = ha;
  g.isConsole = Hc;
  var Ic = Mb;
  g.isEdge = Ic;
  var Jc = Ub;
  g.isEdgeChromium = Jc;
  var Kc = Tb;
  g.isElectron = Kc;
  var Lc = zb;
  g.isFirefox = Lc;
  var Mc = pa;
  g.isIE = Mc;
  var Nc = oa;
  g.isIOS = Nc;
  var Oc = Pb;
  g.isIOS13 = Oc;
  var Pc = Qb;
  g.isIPad13 = Pc;
  var Qc = Rb;
  g.isIPhone13 = Qc;
  var Rc = Sb;
  g.isIPod13 = Rc;
  var Sc = Vb;
  g.isLegacyEdge = Sc;
  var Tc = Xb;
  g.isMacOs = Tc;
  var qa = V;
  g.isMobile = qa;
  var Uc = ja;
  g.isMobileOnly = Uc;
  var Vc = wb;
  g.isMobileSafari = Vc;
  var Wc = Bb;
  g.isOpera = Wc;
  var Xc = Ab;
  g.isSafari = Xc;
  var Yc = ga;
  g.isSmartTV = Yc;
  var Zc = ka;
  g.isTablet = Zc;
  var $c = ia;
  g.isWearable = $c;
  var _c = na;
  g.isWinPhone = _c;
  var ad = Wb;
  g.isWindows = ad;
  var bd = Nb;
  g.isYandex = bd;
  var cd = Ib;
  g.mobileModel = cd;
  var dd = Hb;
  g.mobileVendor = dd;
  var ed = Db;
  g.osName = ed;
  var fd = Cb;
  g.osVersion = fd;
  var gd = ic;
  g.withOrientationChange = gd;

  function hd(e, t) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
      var r = [],
          a = !0,
          n = !1,
          $ = void 0;

      try {
        for (var o, h = e[Symbol.iterator](); !(a = (o = h.next()).done) && (r.push(o.value), !t || r.length !== t); a = !0) {
          ;
        }
      } catch (i) {
        n = !0, $ = i;
      } finally {
        try {
          a || null == h.return || h.return();
        } finally {
          if (n) throw $;
        }
      }

      return r;
    }
  }

  function id(e) {
    if (Array.isArray(e)) return e;
  }

  require("n8MK"), require("mo7Y"), require("VJZj");

  var jd = function jd(e) {
    var t = G(require("n8MK").useState(e.selectedDate), 1)[0],
        r = G(require("n8MK").useState(e.times), 1)[0],
        a = G(require("n8MK").useState(!1), 2),
        n = a[0],
        $ = a[1],
        o = G(require("n8MK").useState(!1), 2),
        h = o[0],
        i = o[1],
        c = G(require("n8MK").useState(""), 2),
        l = c[0],
        u = c[1],
        m = G(require("n8MK").useState(8), 2),
        s = m[0],
        p = m[1],
        I = G(require("n8MK").useState(!1), 2),
        W = I[0],
        v = I[1],
        y = G(require("n8MK").useState([]), 2),
        f = y[0],
        d = y[1];

    require("n8MK").useEffect(function () {
      d((ta(), ra));
    }, []);

    var E = function E() {
      var e = "";
      e = "9:00" == l || "10:00" == l || "11:00" == l ? "A.M." : "P.M.";
      var $n8MK$$interop$default = X(require("n8MK"));
      return qa ? $n8MK$$interop$default.d.createElement("div", {
        className: "vMessage"
      }, $n8MK$$interop$default.d.createElement("h2", null, "Are you sure you would like an appointment for ", require("mo7Y").format(t, "MMMM d, yyyy"), " @ ", l, " ", e, "?"), $n8MK$$interop$default.d.createElement("button", {
        id: "yesButton",
        onClick: function onClick(e) {
          return b();
        }
      }, "Yes"), $n8MK$$interop$default.d.createElement("button", {
        id: "noButton",
        onClick: function onClick(e) {
          return R();
        }
      }, "No")) : $n8MK$$interop$default.d.createElement("div", {
        className: "vMessage"
      }, $n8MK$$interop$default.d.createElement("h2", null, "Are you sure you would like an appointment for ", require("mo7Y").format(t, "MMMM d, yyyy"), " @ ", l, " ", e, "?"), $n8MK$$interop$default.d.createElement("select", null, $n8MK$$interop$default.d.createElement("option", {
        onClick: function onClick(e) {
          return b();
        }
      }, "Yes"), $n8MK$$interop$default.d.createElement("option", {
        onClick: function onClick(e) {
          return R();
        }
      }, "No")));
    },
        R = function R() {
      $(!1), u(""), A();
    },
        A = function () {
      var e = Z(_regenerator.default.mark(function e() {
        return _regenerator.default.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                return i(!0), e.next = 3, T(2e3);

              case 3:
                i(!1);

              case 4:
              case "end":
                return e.stop();
            }
          }
        }, e);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
        b = function b() {
      e.update(l), $(!1), function () {
        _.apply(this, arguments);
      }();
    };

    function T(e) {
      return new Promise(function (t) {
        setTimeout(t, e);
      });
    }

    function _() {
      return (_ = Z(_regenerator.default.mark(function e() {
        return _regenerator.default.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                return v(!0), e.next = 3, T(8e3);

              case 3:
                require("VJZj").navigate("/thx");

              case 4:
              case "end":
                return e.stop();
            }
          }
        }, e);
      }))).apply(this, arguments);
    }

    require("n8MK").useEffect(function () {
      if (W) {
        var e = s > 0 && setInterval(function () {
          return p(s - 1);
        }, 1e3);
        return function () {
          return clearInterval(e);
        };
      }
    }, [W, s]);

    var $n8MK$$interop$default = X(require("n8MK"));
    return $n8MK$$interop$default.d.createElement("div", {
      className: "dayChosen"
    }, $n8MK$$interop$default.d.createElement("nav", null, $n8MK$$interop$default.d.createElement(require("VJZj").Link, {
      to: "/cal",
      className: "dcLink"
    }, "Calendar")), $n8MK$$interop$default.d.createElement("div", {
      className: "dayHead"
    }, $n8MK$$interop$default.d.createElement("h1", null, require("mo7Y").format(t, "MMMM d, yyyy")), $n8MK$$interop$default.d.createElement("h1", null, require("mo7Y").format(t, "EEEE"))), $n8MK$$interop$default.d.createElement("div", {
      className: "temp"
    }), $n8MK$$interop$default.d.createElement("div", {
      className: "times"
    }, $n8MK$$interop$default.d.createElement("h2", {
      className: "tAv"
    }, "Times Available:"), $n8MK$$interop$default.d.createElement("div", {
      className: "des"
    }, $n8MK$$interop$default.d.createElement("em", null, "Please select a time that you would be available for a zoom or phone conference")), $n8MK$$interop$default.d.createElement("ul", null, r.map(function (e, t) {
      return $n8MK$$interop$default.d.createElement("li", {
        key: t.toString(),
        style: {
          listStyle: "none"
        }
      }, $n8MK$$interop$default.d.createElement("button", {
        className: "tButtons",
        onClick: function onClick(t) {
          return function (e) {
            u(e), $(!0), E();
          }(e);
        }
      }, e));
    })), $n8MK$$interop$default.d.createElement("div", {
      className: "veri"
    }, n ? E() : h ? $n8MK$$interop$default.d.createElement("div", {
      className: "canCel"
    }, $n8MK$$interop$default.d.createElement("h2", {
      className: "fadeInBottom"
    }, "Choice cancelled.")) : $n8MK$$interop$default.d.createElement("div", {
      className: "unVeri"
    }, $n8MK$$interop$default.d.createElement("h1", null, "I Look Forward To Meeting You!")))), W ? $n8MK$$interop$default.d.createElement("div", {
      className: "count"
    }, $n8MK$$interop$default.d.createElement("h2", null, "Demo: DATABASE UPDATED! Your choice of ", l, " saved."), $n8MK$$interop$default.d.createElement("img", {
      src: f,
      alt: "Wink Emoji"
    }), $n8MK$$interop$default.d.createElement("p", null, "Leaving in ", s, " seconds...")) : $n8MK$$interop$default.d.createElement("div", {
      className: "count"
    }, $n8MK$$interop$default.d.createElement("h2", null, "Demo: Working with database..")));
  };

  M.default = jd;

  if ((typeof exports === "undefined" ? "undefined" : (0, _typeof2.default)(exports)) === "object" && typeof module !== "undefined") {
    module.exports = M;
  } else if (typeof define === "function" && define.amd) {
    define(function () {
      return M;
    });
  }

  M.__esModule = true;
  return {
    "hIWh": M
  };
});