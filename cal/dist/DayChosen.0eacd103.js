parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"dqFb":[function(require,module,exports) {
var define;
var i;!function(s,e){"use strict";var o="model",r="name",a="type",n="vendor",d="version",t="mobile",w="tablet",l="smarttv",u={extend:function(i,s){var e={};for(var o in i)s[o]&&s[o].length%2==0?e[o]=s[o].concat(i[o]):e[o]=i[o];return e},has:function(i,s){return"string"==typeof i&&-1!==s.toLowerCase().indexOf(i.toLowerCase())},lowerize:function(i){return i.toLowerCase()},major:function(i){return"string"==typeof i?i.replace(/[^\d\.]/g,"").split(".")[0]:void 0},trim:function(i){return i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},c={rgx:function(i,s){for(var e,o,r,a,n,d,t=0;t<s.length&&!n;){var w=s[t],l=s[t+1];for(e=o=0;e<w.length&&!n;)if(n=w[e++].exec(i))for(r=0;r<l.length;r++)d=n[++o],"object"==typeof(a=l[r])&&a.length>0?2==a.length?"function"==typeof a[1]?this[a[0]]=a[1].call(this,d):this[a[0]]=a[1]:3==a.length?"function"!=typeof a[1]||a[1].exec&&a[1].test?this[a[0]]=d?d.replace(a[1],a[2]):void 0:this[a[0]]=d?a[1].call(this,d,a[2]):void 0:4==a.length&&(this[a[0]]=d?a[3].call(this,d.replace(a[1],a[2])):void 0):this[a]=d||void 0;t+=2}},str:function(i,s){for(var e in s)if("object"==typeof s[e]&&s[e].length>0){for(var o=0;o<s[e].length;o++)if(u.has(s[e][o],i))return"?"===e?void 0:e}else if(u.has(s[e],i))return"?"===e?void 0:e;return i}},b={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},m={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[r,d],[/(opios)[\/\s]+([\w\.]+)/i],[[r,"Opera Mini"],d],[/\s(opr)\/([\w\.]+)/i],[[r,"Opera"],d],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[r,d],[/(konqueror)\/([\w\.]+)/i],[[r,"Konqueror"],d],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[r,"IE"],d],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[r,"Edge"],d],[/(yabrowser)\/([\w\.]+)/i],[[r,"Yandex"],d],[/(Avast)\/([\w\.]+)/i],[[r,"Avast Secure Browser"],d],[/(AVG)\/([\w\.]+)/i],[[r,"AVG Secure Browser"],d],[/(puffin)\/([\w\.]+)/i],[[r,"Puffin"],d],[/(focus)\/([\w\.]+)/i],[[r,"Firefox Focus"],d],[/(opt)\/([\w\.]+)/i],[[r,"Opera Touch"],d],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[r,"UCBrowser"],d],[/(comodo_dragon)\/([\w\.]+)/i],[[r,/_/g," "],d],[/(windowswechat qbcore)\/([\w\.]+)/i],[[r,"WeChat(Win) Desktop"],d],[/(micromessenger)\/([\w\.]+)/i],[[r,"WeChat"],d],[/(brave)\/([\w\.]+)/i],[[r,"Brave"],d],[/(qqbrowserlite)\/([\w\.]+)/i],[r,d],[/(QQ)\/([\d\.]+)/i],[r,d],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[r,d],[/(baiduboxapp)[\/\s]?([\w\.]+)/i],[r,d],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[r,d],[/(MetaSr)[\/\s]?([\w\.]+)/i],[r],[/(LBBROWSER)/i],[r],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[d,[r,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[d,[r,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[r,d],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[d,[r,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[r,/(.+)/,"$1 WebView"],d],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[r,/(.+(?:g|us))(.+)/,"$1 $2"],d],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[d,[r,"Android Browser"]],[/(sailfishbrowser)\/([\w\.]+)/i],[[r,"Sailfish Browser"],d],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[r,d],[/(dolfin)\/([\w\.]+)/i],[[r,"Dolphin"],d],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[r,"360 Browser"]],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[r,"Chrome"],d],[/(coast)\/([\w\.]+)/i],[[r,"Opera Coast"],d],[/fxios\/([\w\.-]+)/i],[d,[r,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[d,[r,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[d,r],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[r,"GSA"],d],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[r,[d,c.str,b.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[r,d],[/(navigator|netscape)\/([\w\.-]+)/i],[[r,"Netscape"],d],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[r,d]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",u.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",u.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",u.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[o,n,[a,w]],[/applecoremedia\/[\w\.]+ \((ipad)/],[o,[n,"Apple"],[a,w]],[/(apple\s{0,1}tv)/i],[[o,"Apple TV"],[n,"Apple"],[a,l]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[n,o,[a,w]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[o,[n,"Amazon"],[a,w]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[o,c.str,b.device.amazon.model],[n,"Amazon"],[a,t]],[/android.+aft([bms])\sbuild/i],[o,[n,"Amazon"],[a,l]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[o,n,[a,t]],[/\((ip[honed|\s\w*]+);/i],[o,[n,"Apple"],[a,t]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[n,o,[a,t]],[/\(bb10;\s(\w+)/i],[o,[n,"BlackBerry"],[a,t]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[o,[n,"Asus"],[a,w]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[n,"Sony"],[o,"Xperia Tablet"],[a,w]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[o,[n,"Sony"],[a,t]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[n,o,[a,"console"]],[/android.+;\s(shield)\sbuild/i],[o,[n,"Nvidia"],[a,"console"]],[/(playstation\s[34portablevi]+)/i],[o,[n,"Sony"],[a,"console"]],[/(sprint\s(\w+))/i],[[n,c.str,b.device.sprint.vendor],[o,c.str,b.device.sprint.model],[a,t]],[/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[n,[o,/_/g," "],[a,t]],[/(nexus\s9)/i],[o,[n,"HTC"],[a,w]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i],[o,[n,"Huawei"],[a,t]],[/android.+(bah2?-a?[lw]\d{2})/i],[o,[n,"Huawei"],[a,w]],[/(microsoft);\s(lumia[\s\w]+)/i],[n,o,[a,t]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[o,[n,"Microsoft"],[a,"console"]],[/(kin\.[onetw]{3})/i],[[o,/\./g," "],[n,"Microsoft"],[a,t]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[o,[n,"Motorola"],[a,t]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[o,[n,"Motorola"],[a,w]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[n,u.trim],[o,u.trim],[a,l]],[/hbbtv.+maple;(\d+)/i],[[o,/^/,"SmartTV"],[n,"Samsung"],[a,l]],[/\(dtv[\);].+(aquos)/i],[o,[n,"Sharp"],[a,l]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[n,"Samsung"],o,[a,w]],[/smart-tv.+(samsung)/i],[n,[a,l],o],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[n,"Samsung"],o,[a,t]],[/sie-(\w*)/i],[o,[n,"Siemens"],[a,t]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[n,"Nokia"],o,[a,t]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[o,[n,"Acer"],[a,w]],[/android.+([vl]k\-?\d{3})\s+build/i],[o,[n,"LG"],[a,w]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[n,"LG"],o,[a,w]],[/(lg) netcast\.tv/i],[n,o,[a,l]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[o,[n,"LG"],[a,t]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[n,o,[a,w]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[o,[n,"Lenovo"],[a,w]],[/(lenovo)[_\s-]?([\w-]+)/i],[n,o,[a,t]],[/linux;.+((jolla));/i],[n,o,[a,t]],[/((pebble))app\/[\d\.]+\s/i],[n,o,[a,"wearable"]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[n,o,[a,t]],[/crkey/i],[[o,"Chromecast"],[n,"Google"],[a,l]],[/android.+;\s(glass)\s\d/i],[o,[n,"Google"],[a,"wearable"]],[/android.+;\s(pixel c)[\s)]/i],[o,[n,"Google"],[a,w]],[/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],[o,[n,"Google"],[a,t]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[o,/_/g," "],[n,"Xiaomi"],[a,t]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[o,/_/g," "],[n,"Xiaomi"],[a,w]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[o,[n,"Meizu"],[a,t]],[/(mz)-([\w-]{2,})/i],[[n,"Meizu"],o,[a,t]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})[\s)]/i],[o,[n,"OnePlus"],[a,t]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[o,[n,"RCA"],[a,w]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[o,[n,"Dell"],[a,w]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[o,[n,"Verizon"],[a,w]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[n,"Barnes & Noble"],o,[a,w]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[o,[n,"NuVision"],[a,w]],[/android.+;\s(k88)\sbuild/i],[o,[n,"ZTE"],[a,w]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[o,[n,"Swiss"],[a,t]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[o,[n,"Swiss"],[a,w]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[o,[n,"Zeki"],[a,w]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[n,"Dragon Touch"],o,[a,w]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[o,[n,"Insignia"],[a,w]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[o,[n,"NextBook"],[a,w]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[n,"Voice"],o,[a,t]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[n,"LvTel"],o,[a,t]],[/android.+;\s(PH-1)\s/i],[o,[n,"Essential"],[a,t]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[o,[n,"Envizen"],[a,w]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[n,o,[a,w]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[o,[n,"MachSpeed"],[a,w]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[n,o,[a,w]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[o,[n,"Rotor"],[a,w]],[/android.+(KS(.+))\s+build/i],[o,[n,"Amazon"],[a,w]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[n,o,[a,w]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[a,u.lowerize],n,o],[/[\s\/\(](smart-?tv)[;\)]/i],[[a,l]],[/(android[\w\.\s\-]{0,9});.+build/i],[o,[n,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[d,[r,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[d,[r,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[r,d],[/rv\:([\w\.]{1,9}).+(gecko)/i],[d,r]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[r,d],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[r,[d,c.str,b.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[r,"Windows"],[d,c.str,b.os.windows.version]],[/\((bb)(10);/i],[[r,"BlackBerry"],d],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[r,d],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[r,"Symbian"],d],[/\((series40);/i],[r],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[r,"Firefox OS"],d],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[r,d],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[r,"Chromium OS"],d],[/(sunos)\s?([\w\.\d]*)/i],[[r,"Solaris"],d],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[r,d],[/(haiku)\s(\w+)/i],[r,d],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[d,/_/g,"."],[r,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[r,"Mac OS"],[d,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[r,d]]},p=function(i,e){if("object"==typeof i&&(e=i,i=void 0),!(this instanceof p))return new p(i,e).getResult();var o=i||(s&&s.navigator&&s.navigator.userAgent?s.navigator.userAgent:""),r=e?u.extend(m,e):m;return this.getBrowser=function(){var i={name:void 0,version:void 0};return c.rgx.call(i,o,r.browser),i.major=u.major(i.version),i},this.getCPU=function(){var i={architecture:void 0};return c.rgx.call(i,o,r.cpu),i},this.getDevice=function(){var i={vendor:void 0,model:void 0,type:void 0};return c.rgx.call(i,o,r.device),i},this.getEngine=function(){var i={name:void 0,version:void 0};return c.rgx.call(i,o,r.engine),i},this.getOS=function(){var i={name:void 0,version:void 0};return c.rgx.call(i,o,r.os),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return o},this.setUA=function(i){return o=i,this},this};p.VERSION="0.7.21",p.BROWSER={NAME:r,MAJOR:"major",VERSION:d},p.CPU={ARCHITECTURE:"architecture"},p.DEVICE={MODEL:o,VENDOR:n,TYPE:a,CONSOLE:"console",MOBILE:t,SMARTTV:l,TABLET:w,WEARABLE:"wearable",EMBEDDED:"embedded"},p.ENGINE={NAME:r,VERSION:d},p.OS={NAME:r,VERSION:d},"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=p),exports.UAParser=p):"function"==typeof i&&i.amd?i(function(){return p}):s&&(s.UAParser=p);var h=s&&(s.jQuery||s.Zepto);if(h&&!h.ua){var g=new p;h.ua=g.getResult(),h.ua.get=function(){return g.getUA()},h.ua.set=function(i){g.setUA(i);var s=g.getResult();for(var e in s)h.ua[e]=s[e]}}}("object"==typeof window?window:this);
},{}],"i7JN":[function(require,module,exports) {
"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var n=require("react"),t=e(n),r=require("ua-parser-js/dist/ua-parser.min"),i=new r,o=i.getBrowser(),a=i.getCPU(),s=i.getDevice(),u=i.getEngine(),l=i.getOS(),c=i.getUA(),m=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||n},f=function(){return!("undefined"==typeof window||!window.navigator&&!navigator)&&(window.navigator||navigator)},d=function(e){var n=f();return n&&n.platform&&(-1!==n.platform.indexOf(e)||"MacIntel"===n.platform&&n.maxTouchPoints>1&&!window.MSStream)};function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function E(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,n,t){return n&&E(e.prototype,n),t&&E(e,t),e}function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function h(){return(h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(t,!0).forEach(function(n){g(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function b(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&N(e,n)}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,n){return(N=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?S(e):n}var P={MOBILE:"mobile",TABLET:"tablet",SMART_TV:"smarttv",CONSOLE:"console",WEARABLE:"wearable",BROWSER:void 0},A={CHROME:"Chrome",FIREFOX:"Firefox",OPERA:"Opera",YANDEX:"Yandex",SAFARI:"Safari",INTERNET_EXPLORER:"Internet Explorer",EDGE:"Edge",CHROMIUM:"Chromium",IE:"IE",MOBILE_SAFARI:"Mobile Safari",EDGE_CHROMIUM:"Edge Chromium"},I={IOS:"iOS",ANDROID:"Android",WINDOWS_PHONE:"Windows Phone",WINDOWS:"Windows",MAC_OS:"Mac OS"},W={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},M=function(e){switch(e){case P.MOBILE:return{isMobile:!0};case P.TABLET:return{isTablet:!0};case P.SMART_TV:return{isSmartTV:!0};case P.CONSOLE:return{isConsole:!0};case P.WEARABLE:return{isWearable:!0};case P.BROWSER:return{isBrowser:!0};default:return W}},L=function(e,n,t,r,i){return{isBrowser:e,browserMajorVersion:m(n.major),browserFullVersion:m(n.version),browserName:m(n.name),engineName:m(t.name),engineVersion:m(t.version),osName:m(r.name),osVersion:m(r.version),userAgent:m(i)}},V=function(e,n,t,r){return w({},e,{vendor:m(n.vendor),model:m(n.model),os:m(t.name),osVersion:m(t.version),ua:m(r)})},F=function(e,n,t,r){return{isSmartTV:e,engineName:m(n.name),engineVersion:m(n.version),osName:m(t.name),osVersion:m(t.version),userAgent:m(r)}},R=function(e,n,t,r){return{isConsole:e,engineName:m(n.name),engineVersion:m(n.version),osName:m(t.name),osVersion:m(t.version),userAgent:m(r)}},T=function(e,n,t,r){return{isWearable:e,engineName:m(n.name),engineVersion:m(n.version),osName:m(t.name),osVersion:m(t.version),userAgent:m(r)}},j=M(s.type);function B(){var e=j.isBrowser,n=j.isMobile,t=j.isTablet,r=j.isSmartTV,i=j.isConsole,a=j.isWearable;return e?L(e,o,u,l,c):r?F(r,u,l,c):i?R(i,u,l,c):n?V(j,s,l,c):t?V(j,s,l,c):a?T(a,u,l,c):void 0}var _=function(){return s.type===P.MOBILE},D=function(){return s.type===P.TABLET},k=function(){switch(s.type){case P.MOBILE:case P.TABLET:return!0;default:return!1}},H=function(){return l.name===I.WINDOWS&&"10"===l.version&&("string"==typeof c&&-1!==c.indexOf("Edg/"))},U=function(){return s.type===P.SMART_TV},X=function(){return s.type===P.BROWSER},Y=function(){return s.type===P.WEARABLE},G=function(){return s.type===P.CONSOLE},q=function(){return l.name===I.ANDROID},z=function(){return l.name===I.WINDOWS},J=function(){return l.name===I.MAC_OS},K=function(){return l.name===I.WINDOWS_PHONE},Q=function(){return l.name===I.IOS},Z=function(){return o.name===A.CHROME},$=function(){return o.name===A.FIREFOX},ee=function(){return o.name===A.CHROMIUM},ne=function(){return o.name===A.EDGE},te=function(){return o.name===A.YANDEX},re=function(){return o.name===A.SAFARI||o.name===A.MOBILE_SAFARI},ie=function(){return o.name===A.MOBILE_SAFARI},oe=function(){return o.name===A.OPERA},ae=function(){return o.name===A.INTERNET_EXPLORER||o.name===A.IE},se=function(){var e=f(),n=e&&e.userAgent.toLowerCase();return"string"==typeof n&&/electron/.test(n)},ue=function(){var e=f();return e&&(/iPad|iPhone|iPod/.test(e.platform)||"MacIntel"===e.platform&&e.maxTouchPoints>1)&&!window.MSStream},le=function(){return d("iPad")},ce=function(){return d("iPhone")},me=function(){return d("iPod")},fe=function(){return m(o.version)},de=function(){return m(o.major)},pe=function(){return m(l.version)},ve=function(){return m(l.name)},Ee=function(){return m(o.name)},Oe=function(){return m(s.vendor)},ge=function(){return m(s.model)},he=function(){return m(u.name)},ye=function(){return m(u.version)},we=function(){return m(c)},be=function(){return m(s.type,"browser")},xe=U(),Ne=G(),Se=Y(),Ce=ie()||le(),Pe=ee(),Ae=k()||le(),Ie=_(),We=D()||le(),Me=X(),Le=q(),Ve=K(),Fe=Q()||le(),Re=Z(),Te=$(),je=re(),Be=oe(),_e=ae(),De=pe(),ke=ve(),He=fe(),Ue=de(),Xe=Ee(),Ye=Oe(),Ge=ge(),qe=he(),ze=ye(),Je=we(),Ke=ne()||H(),Qe=te(),Ze=be(),$e=ue(),en=le(),nn=ce(),tn=me(),rn=se(),on=H(),an=ne(),sn=z(),un=J(),ln=function(e){var r=e.renderWithFragment,i=e.children,o=e.viewClassName,a=e.style;return Le?r?t.createElement(n.Fragment,null,i):t.createElement("div",{className:o,style:a},i):null},cn=function(e){var r=e.renderWithFragment,i=e.children,o=e.viewClassName,a=e.style;return Me?r?t.createElement(n.Fragment,null,i):t.createElement("div",{className:o,style:a},i):null},mn=function(e){var r=e.renderWithFragment,i=e.children,o=e.viewClassName,a=e.style;return _e?r?t.createElement(n.Fragment,null,i):t.createElement("div",{className:o,style:a},i):null},fn=function(e){var r=e.renderWithFragment,i=e.children,o=e.viewClassName,a=e.style;return Fe?r?t.createElement(n.Fragment,null,i):t.createElement("div",{className:o,style:a},i):null},dn=function(e){var r=e.renderWithFragment,i=e.children,o=e.viewClassName,a=e.style;return Ae?r?t.createElement(n.Fragment,null,i):t.createElement("div",{className:o,style:a},i):null},pn=function(e){var r=e.renderWithFragment,i=e.children,o=e.viewClassName,a=e.style;return We?r?t.createElement(n.Fragment,null,i):t.createElement("div",{className:o,style:a},i):null},vn=function(e){var r=e.renderWithFragment,i=e.children,o=e.viewClassName,a=e.style;return Ve?r?t.createElement(n.Fragment,null,i):t.createElement("div",{className:o,style:a},i):null},En=function(e){var r=e.renderWithFragment,i=e.children,o=e.viewClassName,a=e.style;return Ie?r?t.createElement(n.Fragment,null,i):t.createElement("div",{className:o,style:a},i):null},On=function(e){var r=e.renderWithFragment,i=e.children,o=e.viewClassName,a=e.style;return xe?r?t.createElement(n.Fragment,null,i):t.createElement("div",{className:o,style:a},i):null},gn=function(e){var r=e.renderWithFragment,i=e.children,o=e.viewClassName,a=e.style;return Ne?r?t.createElement(n.Fragment,null,i):t.createElement("div",{className:o,style:a},i):null},hn=function(e){var r=e.renderWithFragment,i=e.children,o=e.viewClassName,a=e.style;return Se?r?t.createElement(n.Fragment,null,i):t.createElement("div",{className:o,style:a},i):null},yn=function(e){var r=e.renderWithFragment,i=e.children,o=e.viewClassName,a=e.style;return e.condition?r?t.createElement(n.Fragment,null,i):t.createElement("div",{className:o,style:a},i):null};function wn(e){return function(n){function r(e){var n;return v(this,r),(n=C(this,x(r).call(this,e))).isEventListenerAdded=!1,n.handleOrientationChange=n.handleOrientationChange.bind(S(n)),n.onOrientationChange=n.onOrientationChange.bind(S(n)),n.onPageLoad=n.onPageLoad.bind(S(n)),n.state={isLandscape:!1,isPortrait:!1},n}return b(r,t.Component),O(r,[{key:"handleOrientationChange",value:function(){this.isEventListenerAdded||(this.isEventListenerAdded=!0);var e=window.innerWidth>window.innerHeight?90:0;this.setState({isPortrait:0===e,isLandscape:90===e})}},{key:"onOrientationChange",value:function(){this.handleOrientationChange()}},{key:"onPageLoad",value:function(){this.handleOrientationChange()}},{key:"componentDidMount",value:function(){void 0!==("undefined"==typeof window?"undefined":p(window))&&Ae&&(this.isEventListenerAdded?window.removeEventListener("load",this.onPageLoad,!1):(this.handleOrientationChange(),window.addEventListener("load",this.onPageLoad,!1)),window.addEventListener("resize",this.onOrientationChange,!1))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onOrientationChange,!1)}},{key:"render",value:function(){return t.createElement(e,h({},this.props,{isLandscape:this.state.isLandscape,isPortrait:this.state.isPortrait}))}}]),r}()}exports.AndroidView=ln,exports.BrowserView=cn,exports.ConsoleView=gn,exports.CustomView=yn,exports.IEView=mn,exports.IOSView=fn,exports.MobileOnlyView=En,exports.MobileView=dn,exports.SmartTVView=On,exports.TabletView=pn,exports.WearableView=hn,exports.WinPhoneView=vn,exports.browserName=Xe,exports.browserVersion=Ue,exports.deviceDetect=B,exports.deviceType=Ze,exports.engineName=qe,exports.engineVersion=ze,exports.fullBrowserVersion=He,exports.getUA=Je,exports.isAndroid=Le,exports.isBrowser=Me,exports.isChrome=Re,exports.isChromium=Pe,exports.isConsole=Ne,exports.isEdge=Ke,exports.isEdgeChromium=on,exports.isElectron=rn,exports.isFirefox=Te,exports.isIE=_e,exports.isIOS=Fe,exports.isIOS13=$e,exports.isIPad13=en,exports.isIPhone13=nn,exports.isIPod13=tn,exports.isLegacyEdge=an,exports.isMacOs=un,exports.isMobile=Ae,exports.isMobileOnly=Ie,exports.isMobileSafari=Ce,exports.isOpera=Be,exports.isSafari=je,exports.isSmartTV=xe,exports.isTablet=We,exports.isWearable=Se,exports.isWinPhone=Ve,exports.isWindows=sn,exports.isYandex=Qe,exports.mobileModel=Ge,exports.mobileVendor=Ye,exports.osName=ke,exports.osVersion=De,exports.withOrientationChange=wn;
},{"react":"n8MK","ua-parser-js/dist/ua-parser.min":"dqFb"}],"L7SQ":[function(require,module,exports) {

},{}],"LxNU":[function(require,module,exports) {
module.exports="winksC.237c3285.png";
},{}],"hIWh":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=u(require("react")),t=require("date-fns"),n=require("@reach/router"),r=require("react-device-detect");function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function u(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var l=r?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(n,u,l):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}function l(e,t,n,r,a,u,l){try{var o=e[u](l),c=o.value}catch(i){return void n(i)}o.done?t(c):Promise.resolve(c).then(r,a)}function o(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var u=e.apply(t,n);function o(e){l(u,r,a,o,c,"next",e)}function c(e){l(u,r,a,o,c,"throw",e)}o(void 0)})}}function c(e,t){return m(e)||d(e,t)||f(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,u=void 0;try{for(var l,o=e[Symbol.iterator]();!(r=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(c){a=!0,u=c}finally{try{r||null==o.return||o.return()}finally{if(a)throw u}}return n}}function m(e){if(Array.isArray(e))return e}require("./DayChosen.css");var v=function(a){var u=c((0,e.useState)(a.selectedDate),1)[0],l=c((0,e.useState)(a.times),1)[0],i=c((0,e.useState)(!1),2),f=i[0],s=i[1],d=c((0,e.useState)(!1),2),m=d[0],v=d[1],y=c((0,e.useState)(""),2),p=y[0],E=y[1],h=c((0,e.useState)(8),2),b=h[0],g=h[1],M=c((0,e.useState)(!1),2),w=M[0],k=M[1],N=c((0,e.useState)([]),2),S=N[0],A=N[1];(0,e.useEffect)(function(){A(require("../../../public/winksC.png"))},[]);var j=function(){var n="";n="9:00"==p||"10:00"==p||"11:00"==p?"A.M.":"P.M.";return r.isMobile?e.default.createElement("div",{className:"vMessage"},e.default.createElement("h2",null,"Are you sure you would like an appointment for ",(0,t.format)(u,"MMMM d, yyyy")," @ ",p," ",n,"?"),e.default.createElement("button",{id:"yesButton",onClick:function(e){return P()}},"Yes"),e.default.createElement("button",{id:"noButton",onClick:function(e){return C()}},"No")):e.default.createElement("div",{className:"vMessage"},e.default.createElement("h2",null,"Are you sure you would like an appointment for ",(0,t.format)(u,"MMMM d, yyyy")," @ ",p," ",n,"?"),e.default.createElement("select",null,e.default.createElement("option",{onClick:function(e){return P()}},"Yes"),e.default.createElement("option",{onClick:function(e){return C()}},"No")))},C=function(){s(!1),E(""),O()},O=function(){var e=o(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,x(2e3);case 3:v(!1);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),P=function(){a.update(p),s(!1),function(){D.apply(this,arguments)}()};function x(e){return new Promise(function(t){setTimeout(t,e)})}function D(){return(D=o(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.next=3,x(8e3);case 3:(0,n.navigate)("/thx");case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}(0,e.useEffect)(function(){if(w){var e=b>0&&setInterval(function(){return g(b-1)},1e3);return function(){return clearInterval(e)}}},[w,b]);return e.default.createElement("div",{className:"dayChosen"},e.default.createElement("nav",null,e.default.createElement(n.Link,{to:"/cal",className:"dcLink"},"Calendar")),e.default.createElement("div",{className:"dayHead"},e.default.createElement("h1",null,(0,t.format)(u,"MMMM d, yyyy")),e.default.createElement("h1",null,(0,t.format)(u,"EEEE"))),e.default.createElement("div",{className:"temp"}),e.default.createElement("div",{className:"times"},e.default.createElement("h2",{className:"tAv"},"Times Available:"),e.default.createElement("div",{className:"des"},e.default.createElement("em",null,"Please select a time that you would be available for a zoom or phone conference")),e.default.createElement("ul",null,l.map(function(t,n){return e.default.createElement("li",{key:n.toString(),style:{listStyle:"none"}},e.default.createElement("button",{className:"tButtons",onClick:function(e){return function(e){E(e),s(!0),j()}(t)}},t))})),e.default.createElement("div",{className:"veri"},f?j():m?e.default.createElement("div",{className:"canCel"},e.default.createElement("h2",{className:"fadeInBottom"},"Choice cancelled.")):e.default.createElement("div",{className:"unVeri"},e.default.createElement("h1",null,"I Look Forward To Meeting You!")))),w?e.default.createElement("div",{className:"count"},e.default.createElement("h2",null,"Demo: DATABASE UPDATED! Your choice of ",p," saved."),e.default.createElement("img",{src:S,alt:"Wink Emoji"}),e.default.createElement("p",null,"Leaving in ",b," seconds...")):e.default.createElement("div",{className:"count"},e.default.createElement("h2",null,"Demo: Working with database..")))},y=v;exports.default=y;
},{"react":"n8MK","date-fns":"mo7Y","@reach/router":"VJZj","react-device-detect":"i7JN","./DayChosen.css":"L7SQ","../../../public/winksC.png":"LxNU"}]},{},[], null)
//# sourceMappingURL=DayChosen.0eacd103.js.map