/*! For license information please see hub.js.LICENSE.txt */
(()=>{var e={6531:(e,t,n)=>{"use strict";n.d(t,{default:()=>i});var o=n(2829);class s extends o.default{static access_token=new s("access_token");static analytics_session=new s("analytics_session");static auth_token=new s("authentication_token");static bq_auto_lead_send=new s("bq_auto_lead_send");static cart=new s("order_id");static ccpa=new s("sn-ccpa-optin");static debug=new s("sn-debug");static dynamic_yield_id_server=new s("_dyid_server");static dynamic_yield_id=new s("_dyid");static dynamic_yield_jsession=new s("_dyjsession");static id_token=new s("id_token");static price_lists=new s("plid");static promo_drawer=new s("promo_drawer");static refresh_token=new s("refresh_token");static request_names=new s("request_names");static session=new s("_sleep_number_session");static sessions=new s("sessions");static sn=new s("sn");static _=this.closeEnum();constructor(e){super(),this.name=e}}const i=s},3168:(e,t,n)=>{"use strict";n.d(t,{isDebug:()=>w,isJestEnv:()=>u,isProduction:()=>_,styles:()=>y,win:()=>p});var o=n(3818),s=n(6808),i=n.n(s),r=n(6531),a=n(2829),c=n(5981),l=n(7814);const u="test"===n.g?.process?.env?.NODE_ENV;let d=n.g||window;if(!o.jU&&!u){const e={local:"https://sleepnumber.test:8090",qa:"https://qa.sleepnumber.com",staging:"https://staging.sleepnumber.com",production:"https://www.sleepnumber.com"},t=e[process.env.BUILD_ENV]||e.local,n=new URL(`${t}/categories/beds-on-sale`);d={...d,location:n}}const p=d,f=p?.sn_globals||{config:{}},_=()=>"production"===f.config.env;function w(){if(!o.jU)return!1;const e=i().get(r.default.debug.name);return e&&"false"!==e}p?.location?.pathname?.startsWith("/dev/"),p?.top?.location?.href?.includes("/admin/")||p?.location?.pathname?.startsWith("/admin/"),f.config.env,(0,l.namespace)("sn.toggleDebug",(function(){const e=w();i().set(r.default.debug.name,!e),console.log(`sn-debug set to "${!e}"`)})),"Intl"in p&&Intl.DateTimeFormat().resolvedOptions().timeZone;const g="font-weight: bold;",m="font-weight: normal;",h="color: #777777;",y={normal:`${m}${h}`,strong:`${g}${h}`,label:`${g}color: #9e9e9e;`,value:`${m}color: #03a9f4;`,success:`${m}color: #4caf50;`,error:`${m}color: #f20404;`,orange:`${m}color: #ff8000;`},v={esc:27,space:32,backspace:8,enter:13,tab:9,up:38,down:40,left:37,right:39,home:36,end:35,n:78,p:80};v.radio={prev:[v.left,v.up],next:[v.right,v.down]},v.arrows=[v.left,v.up,v.right,v.down];class b extends a.default{static idle=new b;static pending=new b;static success=new b;static error=new b;static active=new b;static complete=new b;static _=this.closeEnum()}class E extends a.default{static up=new E;static down=new E;static left=new E;static right=new E;static _=this.closeEnum()}class O extends a.default{static NotStarted=new O({name:"not_started"});static Login=new O({name:"login",next:()=>O.Shipping});static Shipping=new O({name:"shipping",next:()=>O.Delivery});static Delivery=new O({name:"delivery",next:()=>O.Payment});static Payment=new O({name:"payment",next:()=>O.Review});static Review=new O({name:"review",next:()=>O.Confirmation});static Confirmation=new O({name:"confirmation"});static _=this.closeEnum();constructor(e){super(),this.next=e.next,this.name=e.name}}class S extends a.default{static dropdown=new S(1e3);static sticky=new S(1020);static fixed=new S(1030);static modal_backdrop=new S(1040);static modal=new S(107159);static popover=new S(1060);static tooltip=new S(1070);static chat_button=new S(107158);static over_chat=new S(107159);constructor(e){super(),this.value=e}}const A={header_unpin:"-unpinned-header",jumping:"-jump-scrolling",position_sticky:"position-sticky",top_below_header:"top-below-header",search_open:"-search-open",skip_nav_show:"-skip-nav-show"};A.sticky_top=[A.position_sticky,A.top_below_header],(0,c.isFunc)(p,"performance.now")?p?.performance:p?.Date},1639:(e,t,n)=>{"use strict";n.d(t,{default:()=>f});var o=n(6808),s=n.n(o),i=n(6531),r=n(2829),a=n(7814),c=n(5203);class l extends r.default{static admin_hide=new l("admin","hide",!1);static alerts_queued=new l("alerts","queued",[]);static answer_helpful=new l("answer","helpful",{});static answer_reported=new l("answer","reported",[]);static dy_editor=new l("dy","editor",void 0);static hub_log_enabled=new l("hub","log_enabled");static insider=new l("insider",void 0,!1);static minicart_last_shown=new l("minicart","last_shown",0);static page_loads=new l("page","loads",[0,0]);static retargeter_log_enabled=new l("retargeter","log_enabled");static review_helpful=new l("review","helpful",{});static review_reported=new l("review","reported",[]);static trackjs_disable=new l("trackjs","disable");static segments=new l("segments",void 0,[]);static selection_size=new l("selection","size","");static selection_color=new l("selection","color");static sheerid_disable=new l("sheerid","disable");static store_log_ignores=new l("store","log_ignores",[]);static user_email=new l("email",void 0,"");static user_zip=new l("postal_code",void 0,"");static user_telephone=new l("telephone",void 0,"");static _=this.closeEnum();constructor(e,t,n){super(),this.group=e,this.id=t,this.default=n}}const u={},{name:d}=i.default.sn;function p(e,t){if(!(void 0===e&&t||("string"==typeof e?l.enumValueOf(e):e)instanceof l))throw new Error("CookieJar get/set should be called with a CookieJar.Entry instance","entry was",e)}u.get=function(e){const t="string"==typeof e?l.enumValueOf(e):e;p(t,!0);const n=s().getJSON(d);if(!t)return n||{};if(!n)return t.default;let o=`${t.group}`;t.id&&(o+=`-${t.id}`);let i=void 0===n[o]?t.default:n[o];return i=function(e){return"string"!=typeof e?e:e.replace(/\+/g," ").replace(/flextop/i,"FlexTop").replace(/xl/i,"XL")}(i),i},u.set=function(e,t){p(e);const n=s().getJSON(d)||{};let o=`${e.group}`;e.id&&(o+=`-${e.id}`),n[o]=t;const i=JSON.stringify(n),r=(0,c.bytes)(i);r>=4093?console.error(`Failed to set cookie "${e.toString()}" with value "${t}": cookie length (${r} bytes) exceeds max (4093 bytes)`):s().set(d,n,{expires:365})},u.getName=()=>d,u.lib=s(),u.Entry=l,(0,a.namespace)("sn.cookiejar",u);const f=u},2829:(e,t,n)=>{"use strict";n.d(t,{default:()=>s});class o{static closeEnum(){const e=[],t=[];for(const[n,o]of Object.entries(this))e.push(n),o.enumKey=n,o.enumOrdinal=t.length,t.push(o);this.enumKeys=e,this.enumValues=t}static enumValueOf(e){const t=this.enumKeys.indexOf(e);if(t>=0)return this.enumValues[t]}static[Symbol.iterator](){return this.enumValues[Symbol.iterator]()}toString(){return`${this.constructor.name}.${this.enumKey}`}}const s=o},5981:(e,t,n)=>{"use strict";n.d(t,{isFunc:()=>s,noop:()=>i});var o=n(7814);const s=function(){return 1===arguments.length?"function"==typeof(arguments.length<=0?void 0:arguments[0]):"function"==typeof(0,o.prop)(arguments.length<=0?void 0:arguments[0],arguments.length<=1?void 0:arguments[1])},i=()=>{}},5813:(e,t,n)=>{"use strict";n.d(t,{default:()=>r});var o=n(5981),s=n(3168);const i={};["assert","dir","count","log","info","debug","warn","error","table","trace","group","groupEnd","groupCollapsed","profile","profileEnd","time","timeEnd","timeStamp"].forEach((e=>{const t=s.win?.console&&s.win?.console[e],n=!s.isJestEnv&&!(0,s.isProduction)()||(0,s.isDebug)();i[e]=t&&n?function(){s.win.console[e](...arguments)}:o.noop,i.sndebug=function(){if((0,s.isDebug)()){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];console.log("DEBUG:",...t)}}}));const r=i},7814:(e,t,n)=>{"use strict";function o(e,t){if(!e)return e;let n=e;const o=t.replace(/\[/g,".").replace(/[\]"'`]/g,"").split(".");for(let e=0;e<o.length;e++){const t=n[o[e]],s=null==t;if(n=t,e===o.length-1||s)break}return n}function s(e,t){const o=n.g||window,s=e.split(".");let i,r,a;for(o[s[0]]||(o[s[0]]={}),i=o[s[0]],r=1,a=s.length;r<a;r++)i[s[r]]||(i[s[r]]={}),i=i[s[r]];return t&&(function(e,t,n){const o=t.split(".");let s,i,r;for(s=e,i=0,r=o.length;i<r;i++)i===r-1?s[o[i]]=n:(s[o[i]]||(s[o[i]]={}),s=s[o[i]])}(o,e,t),i=t),i}n.d(t,{namespace:()=>s,prop:()=>o})},5203:(e,t,n)=>{"use strict";function o(e){const t=encodeURIComponent(e).match(/%[89ABab]/g);return e.length+(t?t.length:0)}n.d(t,{bytes:()=>o}),n(3168)},3818:(e,t)=>{"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o="undefined"!=typeof window&&void 0!==window.document;"undefined"!=typeof process&&null!=process.versions&&process.versions.node,"object"===("undefined"==typeof self?"undefined":n(self))&&self.constructor&&self.constructor.name,"undefined"!=typeof window&&"nodejs"===window.name||"undefined"!=typeof navigator&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),"undefined"!=typeof Deno&&void 0!==Deno.version&&Deno.version.deno;t.jU=o},6808:(e,t,n)=>{var o,s,i;i=function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var o in n)t[o]=n[o]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(o){function s(){}function i(t,n,i){if("undefined"!=typeof document){"number"==typeof(i=e({path:"/"},s.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var r=JSON.stringify(n);/^[\{\[]/.test(r)&&(n=r)}catch(e){}n=o.write?o.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var a="";for(var c in i)i[c]&&(a+="; "+c,!0!==i[c]&&(a+="="+i[c].split(";")[0]));return document.cookie=t+"="+n+a}}function r(e,n){if("undefined"!=typeof document){for(var s={},i=document.cookie?document.cookie.split("; "):[],r=0;r<i.length;r++){var a=i[r].split("="),c=a.slice(1).join("=");n||'"'!==c.charAt(0)||(c=c.slice(1,-1));try{var l=t(a[0]);if(c=(o.read||o)(c,l)||t(c),n)try{c=JSON.parse(c)}catch(e){}if(s[l]=c,e===l)break}catch(e){}}return e?s[e]:s}}return s.set=i,s.get=function(e){return r(e,!1)},s.getJSON=function(e){return r(e,!0)},s.remove=function(t,n){i(t,"",e(n,{expires:-1}))},s.defaults={},s.withConverter=n,s}((function(){}))},void 0===(s="function"==typeof(o=i)?o.call(t,n,t,e):o)||(e.exports=s),e.exports=i()},9617:e=>{"use strict";e.exports=require("React")}},t={};function n(o){var s=t[o];if(void 0!==s)return s.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{"use strict";n.r(o),n.d(o,{default:()=>_,useSubscription:()=>d});var e=n(9617),t=n(7814),s=n(5981),i=n(3168),r=n(5813),a=n(1639);const c={},l=c.hasOwnProperty;function u(e,t){l.call(c,e)||(c[e]=[]);const n=c[e].push(t)-1;return{remove:()=>{delete c[e][n]}}}const d=(t,n,o)=>{(0,e.useEffect)((()=>{const e=u(t,n);return"function"==typeof o&&o(),e.remove}),[t])};function p(){return!!a.default.get(a.default.Entry.hub_log_enabled)}const f={pub:function(e,t){if(!l.call(c,e))return;const n=c[e];n.forEach((e=>e(void 0===t?{}:t))),p()&&function(e,t,n){let o=`%csn.hub: %cPublished %c'${e}' %cto ${t} subscriber(s)`;const a=void 0!==n;a&&(o+=" with data:");const c=a&&r.default.groupCollapsed||r.default.info,l=a&&r.default.groupEnd||s.noop,u=[`${i.styles.strong}`,`${i.styles.normal}`,`${i.styles.value}`,`${i.styles.normal}`];c.apply(console,[o,...u]),a&&r.default.info(n),l()}(e,n.length,t)},sub:u,toggleLogging:()=>{const e=p();return a.default.set(a.default.Entry.hub_log_enabled,!e),p()},topics:{AB_TEST_DATA:"ab_test_data",ALERTS:"alerts",ANALYTICS_CREATE_CONSUMER:"analytics_create_consumer",ANALYTICS_EVENT:"analytics_event",ANALYTICS_REGISTER_CONSUMER:"analytics_register_consumer",CART:"cart",CHAT_BUTTON_CLICK:"chat_button_click",LEAD_MODAL:"show_lead_capture",LIVE_PERSON_MODAL:"live_person_modal_show",MICRO_FOOTER:"micro_footer",MODAL:"modal",MODAL_CLOSE:"modal_close",MODAL_READY:"modal_ready",MODAL_NARWHAL:"modal_narwhal_show",NAV_TOGGLED:"nav_toggled",NAV_UNPIN_AT:"nav_unpin_at",NAV_SHOW_LEAD_LINK:"nav_show_lead_link",SESSION_DATA:"session_data",STORE_FINDER:"storefinder",SUBNAV_TAB:"subnav_tab",USER:"user",VIDEO_MODAL:"modal_video_show",VIDEO_MODAL_PLAY:"modal_video_play",VIDEO_MODAL_READY:"modal_video_ready"}};(0,t.namespace)("sn.hub",f);const _=f})();var s=exports;for(var i in o)s[i]=o[i];o.__esModule&&Object.defineProperty(s,"__esModule",{value:!0})})();