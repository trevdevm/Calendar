(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{440:function(e,t,n){var a=n(441),r=n(442),o=n(443),c=n(445);e.exports=function(e,t){return a(e)||r(e,t)||o(e,t)||c()}},441:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},442:function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return n}}},443:function(e,t,n){var a=n(444);e.exports=function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}},444:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}},445:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},450:function(e,t,n){},451:function(e,t){e.exports="/dist/medLogC.png"},452:function(e,t){e.exports="/dist/smallLogC.png"},454:function(e,t,n){"use strict";n.r(t);var a=n(440),r=n.n(a),o=n(1),c=n.n(o),i=n(119);n(450);t.default=function(){var e=Object(o.useState)([]),t=r()(e,2),a=t[0],s=t[1];return Object(o.useEffect)((function(){s([n(451),n(452)])}),[]),c.a.createElement("div",{className:"cThanks"},c.a.createElement("div",{className:"other"},c.a.createElement("nav",{className:"cNav"},c.a.createElement("a",{href:"https://www.devmunns.site/contact"},"Email"),c.a.createElement("a",{href:"https://www.devmunns.site"},"Homepage"),c.a.createElement(i.a,{to:"/cal",className:"calLin"},"Calendar")),c.a.createElement("div",{className:"navLog"},c.a.createElement("a",{href:"https://www.devmunns.site"},c.a.createElement("img",{src:a[1],id:"slC",alt:"Trevor's Logo"})))),c.a.createElement("div",{className:"thxHead"},c.a.createElement("h1",null,"Thank You! This is only a demo. You are ",c.a.createElement("b",null,"NOT")," scheduled for any appointment. Do you wish to email the developer?")),c.a.createElement("div",{className:"logoC"},c.a.createElement("a",{href:"https://www.devmunns.site/contact",id:"emailMe"},"Email Me!"),c.a.createElement("a",{href:"https://www.devmunns.site"},c.a.createElement("img",{src:a[0],alt:"Trevor's logo"}))))}}}]);