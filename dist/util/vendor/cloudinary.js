(()=>{"use strict";var e={d:(r,t)=>{for(var n in t)e.o(t,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:t[n]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};e.r(r),e.d(r,{Transformers:()=>t,getCloudinaryTransformData:()=>n,setCloudinaryTransforms:()=>o,updateCloudinaryTransforms:()=>s});const t=["a","ac","af","ar","b","bo","br","c","co","cs","d","dl","dn","dpr","du","e","eo","f","fl","fn","fps","g","h","if","ki","l","o","p","pg","q","r","so","sp","t","u","vc","vs","w","x","y","z","$"];function n(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const r=e.indexOf("upload/")+7,n=e.substring(r).split(/[,/]/).find((e=>{if(!e.includes("_"))return!0;const r=e.substring(0,e.indexOf("_"));return!t.includes(r)})),o=e.indexOf(n,r+1)-1,s=e.substring(r,o).split(/[,/]/);return{url:e,start:r,end:o,transforms:s,asMap:s.reduce(((e,r)=>(e[r.substring(0,r.indexOf("_"))]=r,e)),{}),prefix:e.substring(0,r),suffix:e.substring(o)}}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const{prefix:t,suffix:o}=n(e);return`${t}${r.join(",")}${o}`}function s(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const r=n(arguments.length>0&&void 0!==arguments[0]?arguments[0]:""),t=e.reduce(((e,r)=>(e[r.substring(0,r.indexOf("_"))]=r,e)),{}),o={...r.asMap};Object.entries(t).forEach((e=>{let[r,t]=e;o[r]=t}));const s=Object.values(o);return`${r.prefix}${s.join(",")}${r.suffix}`}var i=exports;for(var u in r)i[u]=r[u];r.__esModule&&Object.defineProperty(i,"__esModule",{value:!0})})();