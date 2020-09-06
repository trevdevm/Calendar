// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Components/Calendar/Calendar.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"Components/Calendar/Calendar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _dateFns = require("date-fns");

require("./Calendar.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Calendar = props => {
  const renderHeader = () => {
    const dateFormat = "MMMM yyyy";
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "header row flex-middle"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col col-start"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "icon",
      onClick: props.prevMonth
    }, "chevron_left")), /*#__PURE__*/_react.default.createElement("div", {
      className: "col col-center"
    }, /*#__PURE__*/_react.default.createElement("span", null, (0, _dateFns.format)(props.currentMonth, dateFormat))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col col-end",
      onClick: props.nextMonth
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "icon"
    }, "chevron_right")));
  };

  const renderDays = () => {
    const dateFormat = "EEEE";
    const days = [];
    let startDate = (0, _dateFns.startOfWeek)(props.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push( /*#__PURE__*/_react.default.createElement("div", {
        className: "col col-center",
        key: i
      }, (0, _dateFns.format)((0, _dateFns.addDays)(startDate, i), dateFormat)));
    }

    return /*#__PURE__*/_react.default.createElement("div", {
      className: "days row"
    }, days);
  };

  const renderCells = () => {
    const currentMonth = props.currentMonth;
    const selectedDate = props.selectedDate;
    const init = props.initTime;
    const monthStart = (0, _dateFns.startOfMonth)(currentMonth);
    const monthEnd = (0, _dateFns.endOfMonth)(monthStart);
    const startDate = (0, _dateFns.startOfWeek)(monthStart);
    const endDate = (0, _dateFns.endOfWeek)(monthEnd);
    const initSize = Object.keys(init).length;
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let theEnd = monthEnd;
    let theStart = monthStart;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = (0, _dateFns.format)(day, dateFormat);
        const cloneDay = day;
        const currDay = Number(formattedDate);
        let timeAvail = [];
        let theTimes = [];

        if (day >= theStart && day <= theEnd) {
          const dayIndex = currDay - 1;

          if (dayIndex < initSize) {
            theTimes = timeAvail.concat(init[dayIndex].time);
          }
        }

        days.push( /*#__PURE__*/_react.default.createElement("div", {
          className: `col cell ${!(0, _dateFns.isSameMonth)(day, monthStart) ? "disabled" : (0, _dateFns.isSameDay)(day, selectedDate) ? "selected" : ""}`,
          key: day,
          onClick: e => props.dateClick((0, _dateFns.toDate)(cloneDay))
        }, /*#__PURE__*/_react.default.createElement("span", {
          className: "number"
        }, formattedDate), /*#__PURE__*/_react.default.createElement("span", {
          className: "bg"
        }, formattedDate), /*#__PURE__*/_react.default.createElement("ul", {
          className: "showTime"
        }, theTimes.map((item, index) => /*#__PURE__*/_react.default.createElement("li", {
          key: index.toString()
        }, item)))));
        day = (0, _dateFns.addDays)(day, 1);
      }

      rows.push( /*#__PURE__*/_react.default.createElement("div", {
        className: "row",
        key: day
      }, days));
      days = [];
    }

    return /*#__PURE__*/_react.default.createElement("div", {
      className: "body"
    }, rows);
  };

  const renderError = () => {
    if (props.error) {
      let current = new Date();
      let nextMonth = (0, _dateFns.addMonths)(current, 1);
      let chosen = props.currentMonth;

      if ((0, _dateFns.isSameMonth)(chosen, current) || (0, _dateFns.isSameMonth)(chosen, nextMonth)) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "errBox"
        }, /*#__PURE__*/_react.default.createElement("h1", null, "No Times Available. Please choose another day."));
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "errBox"
      }, "Only the first two months have availability.");
    } else {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "helpBox"
      }, "Please select a date with available times to demo this calendar application.");
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "heightControl"
  }, /*#__PURE__*/_react.default.createElement("header", null, /*#__PURE__*/_react.default.createElement("div", {
    id: "logo"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "icon"
  }, "date_range"), /*#__PURE__*/_react.default.createElement("span", null, "My", /*#__PURE__*/_react.default.createElement("b", null, "Calendar"), renderError()))), /*#__PURE__*/_react.default.createElement("main", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "calendar"
  }, renderHeader(), renderDays(), renderCells())));
};

var _default = Calendar;
exports.default = _default;
},{"react":"../node_modules/react/index.js","date-fns":"../node_modules/date-fns/esm/index.js","./Calendar.css":"Components/Calendar/Calendar.css"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "37111" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/Calendar.64973f64.js.map