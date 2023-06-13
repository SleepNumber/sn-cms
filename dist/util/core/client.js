/*! For license information please see client.js.LICENSE.txt */
(()=>{var e={6531:(e,t,n)=>{"use strict";n.d(t,{default:()=>i});var o=n(2829);class s extends o.default{static access_token=new s("access_token");static analytics_session=new s("analytics_session");static auth_token=new s("authentication_token");static bq_auto_lead_send=new s("bq_auto_lead_send");static cart=new s("order_id");static ccpa=new s("sn-ccpa-optin");static debug=new s("sn-debug");static dynamic_yield_id_server=new s("_dyid_server");static dynamic_yield_id=new s("_dyid");static dynamic_yield_jsession=new s("_dyjsession");static id_token=new s("id_token");static price_lists=new s("plid");static promo_drawer=new s("promo_drawer");static refresh_token=new s("refresh_token");static request_names=new s("request_names");static session=new s("_sleep_number_session");static sessions=new s("sessions");static sn=new s("sn");static _=this.closeEnum();constructor(e){super(),this.name=e}}const i=s},3168:(e,t,n)=>{"use strict";n.d(t,{win:()=>p});var o=n(3818),s=n(6808),i=n.n(s),r=n(6531),a=n(2829),c=n(5981),u=n(7814);const d="test"===n.g?.process?.env?.NODE_ENV;let l=n.g||window;if(!o.jU&&!d){const e={local:"https://sleepnumber.test:8090",qa:"https://qa.sleepnumber.com",staging:"https://staging.sleepnumber.com",production:"https://www.sleepnumber.com"},t=e[process.env.BUILD_ENV]||e.local,n=new URL(`${t}/categories/beds-on-sale`);l={...l,location:n}}const p=l,f=p?.sn_globals||{config:{}};p?.location?.pathname?.startsWith("/dev/"),p?.top?.location?.href?.includes("/admin/")||p?.location?.pathname?.startsWith("/admin/"),f.config.env,(0,u.namespace)("sn.toggleDebug",(function(){const e=function(){if(!o.jU)return!1;const e=i().get(r.default.debug.name);return e&&"false"!==e}();i().set(r.default.debug.name,!e),console.log(`sn-debug set to "${!e}"`)})),"Intl"in p&&Intl.DateTimeFormat().resolvedOptions().timeZone;const m={esc:27,space:32,backspace:8,enter:13,tab:9,up:38,down:40,left:37,right:39,home:36,end:35,n:78,p:80};m.radio={prev:[m.left,m.up],next:[m.right,m.down]},m.arrows=[m.left,m.up,m.right,m.down];class h extends a.default{static idle=new h;static pending=new h;static success=new h;static error=new h;static active=new h;static complete=new h;static _=this.closeEnum()}class w extends a.default{static up=new w;static down=new w;static left=new w;static right=new w;static _=this.closeEnum()}class g extends a.default{static NotStarted=new g({name:"not_started"});static Login=new g({name:"login",next:()=>g.Shipping});static Shipping=new g({name:"shipping",next:()=>g.Delivery});static Delivery=new g({name:"delivery",next:()=>g.Payment});static Payment=new g({name:"payment",next:()=>g.Review});static Review=new g({name:"review",next:()=>g.Confirmation});static Confirmation=new g({name:"confirmation"});static _=this.closeEnum();constructor(e){super(),this.next=e.next,this.name=e.name}}class y extends a.default{static dropdown=new y(1e3);static sticky=new y(1020);static fixed=new y(1030);static modal_backdrop=new y(1040);static modal=new y(107159);static popover=new y(1060);static tooltip=new y(1070);static chat_button=new y(107158);static over_chat=new y(107159);constructor(e){super(),this.value=e}}const _={header_unpin:"-unpinned-header",jumping:"-jump-scrolling",position_sticky:"position-sticky",top_below_header:"top-below-header",search_open:"-search-open",skip_nav_show:"-skip-nav-show"};_.sticky_top=[_.position_sticky,_.top_below_header],(0,c.isFunc)(p,"performance.now")?p?.performance:p?.Date},2829:(e,t,n)=>{"use strict";n.d(t,{default:()=>s});class o{static closeEnum(){const e=[],t=[];for(const[n,o]of Object.entries(this))e.push(n),o.enumKey=n,o.enumOrdinal=t.length,t.push(o);this.enumKeys=e,this.enumValues=t}static enumValueOf(e){const t=this.enumKeys.indexOf(e);if(t>=0)return this.enumValues[t]}static[Symbol.iterator](){return this.enumValues[Symbol.iterator]()}toString(){return`${this.constructor.name}.${this.enumKey}`}}const s=o},5981:(e,t,n)=>{"use strict";n.d(t,{isFunc:()=>s});var o=n(7814);const s=function(){return 1===arguments.length?"function"==typeof(arguments.length<=0?void 0:arguments[0]):"function"==typeof(0,o.prop)(arguments.length<=0?void 0:arguments[0],arguments.length<=1?void 0:arguments[1])}},5891:(e,t,n)=>{"use strict";function o(e){if(!e?.getResponseHeader&&!e?.headers)return!1;try{return!!(e.getResponseHeader?e.getResponseHeader("content-type"):e.headers.get("content-type")).match(/application\/json/i)}catch(e){return!1}}n.d(t,{isJson:()=>o}),(0,n(7814).namespace)("sn.json",{parse:function(e){const t=document.getElementById(`data-${e}`);return t?JSON.parse(t.innerHTML):void 0},isJson:o,burnin:function(){return Array.from(document.querySelectorAll(".sn-json")).reduce(((e,t)=>(e[t.id.replace("data-","").trim()]=JSON.parse(t.textContent),e)),{})}})},7814:(e,t,n)=>{"use strict";function o(e,t){if(!e)return e;let n=e;const o=t.replace(/\[/g,".").replace(/[\]"'`]/g,"").split(".");for(let e=0;e<o.length;e++){const t=n[o[e]],s=null==t;if(n=t,e===o.length-1||s)break}return n}function s(e,t){const o=n.g||window,s=e.split(".");let i,r,a;for(o[s[0]]||(o[s[0]]={}),i=o[s[0]],r=1,a=s.length;r<a;r++)i[s[r]]||(i[s[r]]={}),i=i[s[r]];return t&&(function(e,t,n){const o=t.split(".");let s,i,r;for(s=e,i=0,r=o.length;i<r;i++)i===r-1?s[o[i]]=n:(s[o[i]]||(s[o[i]]={}),s=s[o[i]])}(o,e,t),i=t),i}n.d(t,{namespace:()=>s,prop:()=>o})},3820:(e,t,n)=>{"use strict";n.d(t,{buildUrl:()=>s});var o=n(3168);function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const s=!e.startsWith("/"),i=o.win.location.origin,r=s?new URL(e):new URL(e,i);return Object.entries(t).forEach((e=>{let[t,o]=e;Array.isArray(o)&&n?o.forEach((e=>r.searchParams.append(t,e))):r.searchParams.append(t,o)})),r.href}},3818:(e,t)=>{"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o="undefined"!=typeof window&&void 0!==window.document;"undefined"!=typeof process&&null!=process.versions&&process.versions.node,"object"===("undefined"==typeof self?"undefined":n(self))&&self.constructor&&self.constructor.name,"undefined"!=typeof window&&"nodejs"===window.name||"undefined"!=typeof navigator&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),"undefined"!=typeof Deno&&void 0!==Deno.version&&Deno.version.deno;t.jU=o},6808:(e,t,n)=>{var o,s,i;i=function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var o in n)t[o]=n[o]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(o){function s(){}function i(t,n,i){if("undefined"!=typeof document){"number"==typeof(i=e({path:"/"},s.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var r=JSON.stringify(n);/^[\{\[]/.test(r)&&(n=r)}catch(e){}n=o.write?o.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var a="";for(var c in i)i[c]&&(a+="; "+c,!0!==i[c]&&(a+="="+i[c].split(";")[0]));return document.cookie=t+"="+n+a}}function r(e,n){if("undefined"!=typeof document){for(var s={},i=document.cookie?document.cookie.split("; "):[],r=0;r<i.length;r++){var a=i[r].split("="),c=a.slice(1).join("=");n||'"'!==c.charAt(0)||(c=c.slice(1,-1));try{var u=t(a[0]);if(c=(o.read||o)(c,u)||t(c),n)try{c=JSON.parse(c)}catch(e){}if(s[u]=c,e===u)break}catch(e){}}return e?s[e]:s}}return s.set=i,s.get=function(e){return r(e,!1)},s.getJSON=function(e){return r(e,!0)},s.remove=function(t,n){i(t,"",e(n,{expires:-1}))},s.defaults={},s.withConverter=n,s}((function(){}))},void 0===(s="function"==typeof(o=i)?o.call(t,n,t,e):o)||(e.exports=s),e.exports=i()}},t={};function n(o){var s=t[o];if(void 0!==s)return s.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{"use strict";n.r(o),n.d(o,{default:()=>a});var e=n(6808),t=n.n(e),s=n(6531),i=n(5891),r=n(3820);const a=function(e){let{endpoint:n,body:o,params:a={},customConfig:c={},auth:u=!0,asXhr:d=!0,asJson:l=!0,withResp:p=!1,traditional:f=!1}=e;const m={Accept:"application/json"},h=t().get(s.default.auth_token.name);u&&h&&(m.Authorization=`Token token=${h}`),d&&(m["X-Requested-With"]="XMLHttpRequest"),l&&(m["Content-Type"]="application/json");const w=t().get(s.default.access_token.name);w&&(m["Access-Token"]=`${w}`);const g=t().get(s.default.id_token.name);g&&(m["Id-Token"]=`${g}`);const y=t().get(s.default.refresh_token.name);y&&(m["Refresh-Token"]=`${y}`);const _={method:o?"POST":"GET",...c,headers:{...m,...c.headers}},v=_.method.match(/get/i),b=n.match(/api\/storefront/i),k=n.match(/cart|checkout/),{token:x}=window?.sn_globals||{},{preview_release_id:S}=window?.sn_globals?.config||{},j=(t().get(s.default.price_lists.name)||"").trim();S&&b&&(a.prid=S),j&&b&&!k&&(a={...a,plid:j}),!v&&x&&(_.headers[x.header]=x.value),o&&(_.body=l?JSON.stringify(o):o),_.method=_.method.toUpperCase();const O=(0,r.buildUrl)(n,a,f);return fetch(O,_).then((async e=>{const t=await e.text(),n=(0,i.isJson)(e),o=t&&n?JSON.parse(t):t;if(e.ok)return n&&0===t.length?{}:p?[o,e]:o;const s=function(e){let t="";return"string"==typeof e?(t=e.match(/^([^\n]+)\n/g)[0].replace(/\n/g,""),t=`"${t}"`):t="object"==typeof e?JSON.stringify(e,null,2):String(e),t}(o),r=new Error(s);return r.data=o,r.response=e,Promise.reject(r)}))}})();var s=exports;for(var i in o)s[i]=o[i];o.__esModule&&Object.defineProperty(s,"__esModule",{value:!0})})();