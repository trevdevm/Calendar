parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"V0Jn":[function(require,module,exports) {

},{}],"TD2I":[function(require,module,exports) {
module.exports="medLogC.b2fc96d9.png";
},{}],"EEIN":[function(require,module,exports) {
module.exports="smallLogC.b41fa9d0.png";
},{}],"ngd5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=a(require("react")),t=require("@reach/router");function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){var o=n?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(a,l,o):a[l]=e[l]}return a.default=e,t&&t.set(e,a),a}function n(e,t){return c(e)||i(e,t)||o(e,t)||l()}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function i(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],a=!0,n=!1,l=void 0;try{for(var o,u=e[Symbol.iterator]();!(a=(o=u.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(i){n=!0,l=i}finally{try{a||null==u.return||u.return()}finally{if(n)throw l}}return r}}function c(e){if(Array.isArray(e))return e}require("./Cthanks.css");var s=function(){var r=n((0,e.useState)([]),2),a=r[0],l=r[1];return(0,e.useEffect)(function(){l([require("../../../public/medLogC.png"),require("../../../public/smallLogC.png")])},[]),e.default.createElement("div",{className:"cThanks"},e.default.createElement("div",{className:"other"},e.default.createElement("nav",{className:"cNav"},e.default.createElement("a",{href:"https://www.devmunns.site/contact"},"Email"),e.default.createElement("a",{href:"https://www.devmunns.site"},"Homepage"),e.default.createElement(t.Link,{to:"/cal",className:"calLin"},"Calendar")),e.default.createElement("div",{className:"navLog"},e.default.createElement("a",{href:"https://www.devmunns.site"},e.default.createElement("img",{src:a[1],id:"slC",alt:"Trevor's Logo"})))),e.default.createElement("div",{className:"thxHead"},e.default.createElement("h1",null,"Thank You! This is only a demo. You are ",e.default.createElement("b",null,"NOT")," scheduled for any appointment. Do you wish to email the developer?")),e.default.createElement("div",{className:"logoC"},e.default.createElement("a",{href:"https://www.devmunns.site/contact",id:"emailMe"},"Email Me!"),e.default.createElement("a",{href:"https://www.devmunns.site"},e.default.createElement("img",{src:a[0],alt:"Trevor's logo"}))))},f=s;exports.default=f;
},{"react":"n8MK","@reach/router":"VJZj","./Cthanks.css":"V0Jn","../../../public/medLogC.png":"TD2I","../../../public/smallLogC.png":"EEIN"}]},{},[], null)
//# sourceMappingURL=Cthanks.5c62f569.js.map