(()=>{"use strict";var e={2829:(e,t,n)=>{n.d(t,{default:()=>i});class o{static closeEnum(){const e=[],t=[];for(const[n,o]of Object.entries(this))e.push(n),o.enumKey=n,o.enumOrdinal=t.length,t.push(o);this.enumKeys=e,this.enumValues=t}static enumValueOf(e){const t=this.enumKeys.indexOf(e);if(t>=0)return this.enumValues[t]}static[Symbol.iterator](){return this.enumValues[Symbol.iterator]()}toString(){return`${this.constructor.name}.${this.enumKey}`}}const i=o},3818:(e,t)=>{var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o="undefined"!=typeof window&&void 0!==window.document;"undefined"!=typeof process&&null!=process.versions&&process.versions.node,"object"===("undefined"==typeof self?"undefined":n(self))&&self.constructor&&self.constructor.name,"undefined"!=typeof window&&"nodejs"===window.name||"undefined"!=typeof navigator&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),"undefined"!=typeof Deno&&void 0!==Deno.version&&Deno.version.deno;t.jU=o}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{n.r(o),n.d(o,{Breakpoint:()=>i,events:()=>h,getBreakpoint:()=>c,getDeviceType:()=>p,isAndroid:()=>m,isDesktop:()=>s,isFirefox:()=>w,isIE:()=>f,isIos:()=>u,isLandscape:()=>v,isMobile:()=>r,isMobileDevice:()=>l,isPreModule:()=>d,isSafari:()=>g,isTablet:()=>a});var e=n(3818),t=n(2829);class i extends t.default{static mb=new i({name:"mobile",start:0});static tb=new i({name:"tablet",start:768});static dt=new i({name:"desktop",start:1025});static _=this.closeEnum();constructor(e){let{name:t,start:n}=e;super(),this.name=t,this.start=n}}function r(t){if(!e.jU)return!0;const n=t||i.tb.start,{clientWidth:o}=document.documentElement,{innerWidth:r}=window;return Math.max(o,(r||0)-1)<n}function a(){if(!e.jU)return!1;const{clientWidth:t}=document.documentElement,{innerWidth:n}=window;return Math.max(t,(n||0)-1)<i.dt.start}function s(){if(!e.jU)return!1;const{clientWidth:t}=document.documentElement,{innerWidth:n}=window;return Math.max(t,(n||0)-1)>=i.dt.start}function d(){return!!e.jU&&window.Promise&&window.fetch&&window.Symbol}function c(){switch(!0){case r():return i.mb;case a():return i.tb;default:return i.dt}}const u=t=>{if(!e.jU)return!1;let n=!1;return n=t?/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream:/iPad|iPhone|iPod/.test(navigator.platform),n},m=()=>!!e.jU&&navigator.userAgent.toLowerCase().indexOf("android")>-1,l=()=>{if(!e.jU)return!1;let t=!1;var n;return n=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series([46])0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(n)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br([ev])w|bumb|bw-([nu])|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do([cp])o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly([-_])|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-([mpt])|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c([- _agpst])|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac([ -\/])|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja([tv])a|jbro|jemu|jigs|kddi|keji|kgt([ \/])|klon|kpt |kwc-|kyo([ck])|le(no|xi)|lg( g|\/([klu])|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t([- ov])|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30([02])|n50([025])|n7(0([01])|10)|ne(([cm])-|on|tf|wf|wg|wt)|nok([6i])|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan([adt])|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c([-01])|47|mc|nd|ri)|sgh-|shar|sie([-m])|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel([im])|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c([- ])|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(n.substr(0,4))||navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform))&&(t=!0),t};function p(){return r()?"Mobile":"Desktop"}const f=()=>!(!e.jU||"Microsoft Internet Explorer"!==navigator.appName&&!navigator.userAgent.match(/Trident/)&&!navigator.userAgent.match(/rv:11/)),g=()=>!!e.jU&&-1!==navigator.userAgent.indexOf("Safari")&&navigator.userAgent.indexOf("Chrome")<0,w=()=>!!e.jU&&-1!==navigator.userAgent.indexOf("Firefox")&&navigator.userAgent.indexOf("Chrome")<0;function v(){return!!e.jU&&(90===window.orientation||-90===window.orientation)}let b=!1;(()=>{try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get(){b=!0}}))}catch(e){}})();const h={wheel:e.jU&&"onwheel"in document.createElement("div")?"wheel":"mousewheel",passive:b}})();var i=exports;for(var r in o)i[r]=o[r];o.__esModule&&Object.defineProperty(i,"__esModule",{value:!0})})();