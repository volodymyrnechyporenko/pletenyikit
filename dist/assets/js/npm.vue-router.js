(window.webpackJsonp=window.webpackJsonp||[]).push([["npm.vue-router"],{"6c02":function(e,t,n){"use strict";n.d(t,"a",(function(){return $e})),n.d(t,"b",(function(){return _}));var r=n("7a23");n("3f4e");
/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const o="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,a=e=>o?Symbol(e):"_vr_"+e,c=a("rvlm"),s=a("rvd"),i=a("r"),l=a("rl"),u=a("rvl"),f="undefined"!=typeof window;const p=Object.assign;function h(e,t){const n={};for(const r in t){const o=t[r];n[r]=Array.isArray(o)?o.map(e):e(o)}return n}const d=()=>{};const m=/\/$/;function g(e,t,n="/"){let r,o={},a="",c="";const s=t.indexOf("?"),i=t.indexOf("#",s>-1?s:0);return s>-1&&(r=t.slice(0,s),a=t.slice(s+1,i>-1?i:t.length),o=e(a)),i>-1&&(r=r||t.slice(0,i),c=t.slice(i,t.length)),r=function(e,t){if(e.startsWith("/"))return e;0;if(!e)return t;const n=t.split("/"),r=e.split("/");let o,a,c=n.length-1;for(o=0;o<r.length;o++)if(a=r[o],1!==c&&"."!==a){if(".."!==a)break;c--}return n.slice(0,c).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(a&&"?")+a+c,path:r,query:o,hash:c}}function v(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function b(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function y(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!w(e[n],t[n]))return!1;return!0}function w(e,t){return Array.isArray(e)?O(e,t):Array.isArray(t)?O(t,e):e===t}function O(e,t){return Array.isArray(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}var j,E;!function(e){e.pop="pop",e.push="push"}(j||(j={})),function(e){e.back="back",e.forward="forward",e.unknown=""}(E||(E={}));function k(e){if(!e)if(f){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),e.replace(m,"")}const A=/^[^#]+#/;function R(e,t){return e.replace(A,"#")+t}const P=()=>({left:window.pageXOffset,top:window.pageYOffset});function x(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#");0;const o="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function C(e,t){return(history.state?history.state.position-t:-1)+e}const $=new Map;let S=()=>location.protocol+"//"+location.host;function q(e,t){const{pathname:n,search:r,hash:o}=t,a=e.indexOf("#");if(a>-1){let t=o.includes(e.slice(a))?e.slice(a).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),v(n,"")}return v(n,e)+r+o}function L(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?P():null}}function _(e){const t=function(e){const{history:t,location:n}=window,r={value:q(e,n)},o={value:t.state};function a(r,a,c){const s=e.indexOf("#"),i=s>-1?(n.host&&document.querySelector("base")?e:e.slice(s))+r:S()+e+r;try{t[c?"replaceState":"pushState"](a,"",i),o.value=a}catch(e){console.error(e),n[c?"replace":"assign"](i)}}return o.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:function(e,n){const c=p({},o.value,t.state,{forward:e,scroll:P()});a(c.current,c,!0),a(e,p({},L(r.value,e,null),{position:c.position+1},n),!1),r.value=e},replace:function(e,n){a(e,p({},t.state,L(o.value.back,e,o.value.forward,!0),n,{position:o.value.position}),!0),r.value=e}}}(e=k(e)),n=function(e,t,n,r){let o=[],a=[],c=null;const s=({state:a})=>{const s=q(e,location),i=n.value,l=t.value;let u=0;if(a){if(n.value=s,t.value=a,c&&c===i)return void(c=null);u=l?a.position-l.position:0}else r(s);o.forEach(e=>{e(n.value,i,{delta:u,type:j.pop,direction:u?u>0?E.forward:E.back:E.unknown})})};function i(){const{history:e}=window;e.state&&e.replaceState(p({},e.state,{scroll:P()}),"")}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",i),{pauseListeners:function(){c=n.value},listen:function(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return a.push(t),t},destroy:function(){for(const e of a)e();a=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",i)}}}(e,t.state,t.location,t.replace);const r=p({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:R.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function B(e){return"string"==typeof e||"symbol"==typeof e}const F={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},G=a("nf");var M;!function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"}(M||(M={}));function I(e,t){return p(new Error,{type:e,[G]:!0},t)}function T(e,t){return e instanceof Error&&G in e&&(null==t||!!(e.type&t))}const U={sensitive:!1,strict:!1,start:!0,end:!0},D=/[.+*?^${}()[\]/\\]/g;function W(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function z(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const e=W(r[n],o[n]);if(e)return e;n++}return o.length-r.length}const V={type:0,value:""},K=/[a-zA-Z0-9_]/;function H(e,t,n){const r=function(e,t){const n=p({},U,t),r=[];let o=n.start?"^":"";const a=[];for(const t of e){const e=t.length?[]:[90];n.strict&&!t.length&&(o+="/");for(let r=0;r<t.length;r++){const c=t[r];let s=40+(n.sensitive?.25:0);if(0===c.type)r||(o+="/"),o+=c.value.replace(D,"\\$&"),s+=40;else if(1===c.type){const{value:e,repeatable:n,optional:i,regexp:l}=c;a.push({name:e,repeatable:n,optional:i});const u=l||"[^/]+?";if("[^/]+?"!==u){s+=10;try{new RegExp(`(${u})`)}catch(t){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let f=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(f=i&&t.length<2?`(?:/${f})`:"/"+f),i&&(f+="?"),o+=f,s+=20,i&&(s+=-8),n&&(s+=-20),".*"===u&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const c=new RegExp(o,n.sensitive?"":"i");return{re:c,score:r,keys:a,parse:function(e){const t=e.match(c),n={};if(!t)return null;for(let e=1;e<t.length;e++){const r=t[e]||"",o=a[e-1];n[o.name]=r&&o.repeatable?r.split("/"):r}return n},stringify:function(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:a,repeatable:c,optional:s}=e,i=a in t?t[a]:"";if(Array.isArray(i)&&!c)throw new Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(i)?i.join("/"):i;if(!l){if(!s)throw new Error(`Missing required param "${a}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n}}}(function(e){if(!e)return[[]];if("/"===e)return[[V]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const o=[];let a;function c(){a&&o.push(a),a=[]}let s,i=0,l="",u="";function f(){l&&(0===n?a.push({type:0,value:l}):1===n||2===n||3===n?(a.length>1&&("*"===s||"+"===s)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:l,regexp:u,repeatable:"*"===s||"+"===s,optional:"*"===s||"?"===s})):t("Invalid state to consume buffer"),l="")}function p(){l+=s}for(;i<e.length;)if(s=e[i++],"\\"!==s||2===n)switch(n){case 0:"/"===s?(l&&f(),c()):":"===s?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:"("===s?n=2:K.test(s)?p():(f(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&i--);break;case 2:")"===s?"\\"==u[u.length-1]?u=u.slice(0,-1)+s:n=3:u+=s;break;case 3:f(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&i--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),f(),c(),o}(e.path),n);const o=p(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function J(e,t){const n=[],r=new Map;function o(e,n,r){const s=!r,i=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Q(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}(e);i.aliasOf=r&&r.record;const l=N(t,e),u=[i];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(p({},i,{components:r?r.record.components:i.components,path:e,aliasOf:r?r.record:i}))}let f,h;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(f=H(t,n,l),r?r.alias.push(f):(h=h||f,h!==f&&h.alias.push(f),s&&e.name&&!X(f)&&a(e.name)),"children"in i){const e=i.children;for(let t=0;t<e.length;t++)o(e[t],f,r&&r.children[t])}r=r||f,c(f)}return h?()=>{a(h)}:d}function a(e){if(B(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(a),t.alias.forEach(a))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(a),e.alias.forEach(a))}}function c(e){let t=0;for(;t<n.length&&z(e,n[t])>=0&&(e.record.path!==n[t].record.path||!Z(e,n[t]));)t++;n.splice(t,0,e),e.record.name&&!X(e)&&r.set(e.record.name,e)}return t=N({strict:!1,end:!0,sensitive:!1},t),e.forEach(e=>o(e)),{addRoute:o,resolve:function(e,t){let o,a,c,s={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw I(1,{location:e});c=o.record.name,s=p(function(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}(t.params,o.keys.filter(e=>!e.optional).map(e=>e.name)),e.params),a=o.stringify(s)}else if("path"in e)a=e.path,o=n.find(e=>e.re.test(a)),o&&(s=o.parse(a),c=o.record.name);else{if(o=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!o)throw I(1,{location:e,currentLocation:t});c=o.record.name,s=p({},t.params,e.params),a=o.stringify(s)}const i=[];let l=o;for(;l;)i.unshift(l.record),l=l.parent;return{name:c,path:a,params:s,matched:i,meta:Y(i)}},removeRoute:a,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function Q(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"==typeof n?n:n[r];return t}function X(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Y(e){return e.reduce((e,t)=>p(e,t.meta),{})}function N(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Z(e,t){return t.children.some(t=>t===e||Z(e,t))}const ee=/#/g,te=/&/g,ne=/\//g,re=/=/g,oe=/\?/g,ae=/\+/g,ce=/%5B/g,se=/%5D/g,ie=/%5E/g,le=/%60/g,ue=/%7B/g,fe=/%7C/g,pe=/%7D/g,he=/%20/g;function de(e){return encodeURI(""+e).replace(fe,"|").replace(ce,"[").replace(se,"]")}function me(e){return de(e).replace(ae,"%2B").replace(he,"+").replace(ee,"%23").replace(te,"%26").replace(le,"`").replace(ue,"{").replace(pe,"}").replace(ie,"^")}function ge(e){return null==e?"":function(e){return de(e).replace(ee,"%23").replace(oe,"%3F")}(e).replace(ne,"%2F")}function ve(e){try{return decodeURIComponent(""+e)}catch(e){}return""+e}function be(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let e=0;e<n.length;++e){const r=n[e].replace(ae," "),o=r.indexOf("="),a=ve(o<0?r:r.slice(0,o)),c=o<0?null:ve(r.slice(o+1));if(a in t){let e=t[a];Array.isArray(e)||(e=t[a]=[e]),e.push(c)}else t[a]=c}return t}function ye(e){let t="";for(let n in e){const r=e[n];if(n=me(n).replace(re,"%3D"),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map(e=>e&&me(e)):[r&&me(r)]).forEach(e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})}return t}function we(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map(e=>null==e?null:""+e):null==r?r:""+r)}return t}function Oe(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e,reset:function(){e=[]}}}function je(e,t,n,r,o){const a=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((c,s)=>{const i=e=>{var i;!1===e?s(I(4,{from:n,to:t})):e instanceof Error?s(e):"string"==typeof(i=e)||i&&"object"==typeof i?s(I(2,{from:t,to:e})):(a&&r.enterCallbacks[o]===a&&"function"==typeof e&&a.push(e),c())},l=e.call(r&&r.instances[o],t,n,i);let u=Promise.resolve(l);e.length<3&&(u=u.then(i)),u.catch(e=>s(e))})}function Ee(e,t,n,r){const a=[];for(const s of e)for(const e in s.components){let i=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if("object"==typeof(c=i)||"displayName"in c||"props"in c||"__vccOpts"in c){const o=(i.__vccOpts||i)[t];o&&a.push(je(o,n,r,s,e))}else{let c=i();0,a.push(()=>c.then(a=>{if(!a)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const c=(i=a).__esModule||o&&"Module"===i[Symbol.toStringTag]?a.default:a;var i;s.components[e]=c;const l=(c.__vccOpts||c)[t];return l&&je(l,n,r,s,e)()}))}}var c;return a}function ke(e){const t=Object(r.m)(i),n=Object(r.m)(l),o=Object(r.b)(()=>t.resolve(Object(r.F)(e.to))),a=Object(r.b)(()=>{const{matched:e}=o.value,{length:t}=e,r=e[t-1],a=n.matched;if(!r||!a.length)return-1;const c=a.findIndex(b.bind(null,r));if(c>-1)return c;const s=Re(e[t-2]);return t>1&&Re(r)===s&&a[a.length-1].path!==s?a.findIndex(b.bind(null,e[t-2])):c}),c=Object(r.b)(()=>a.value>-1&&function(e,t){for(const n in t){const r=t[n],o=e[n];if("string"==typeof r){if(r!==o)return!1}else if(!Array.isArray(o)||o.length!==r.length||r.some((e,t)=>e!==o[t]))return!1}return!0}(n.params,o.value.params)),s=Object(r.b)(()=>a.value>-1&&a.value===n.matched.length-1&&y(n.params,o.value.params));return{route:o,href:Object(r.b)(()=>o.value.href),isActive:c,isExactActive:s,navigate:function(n={}){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(n)?t[Object(r.F)(e.replace)?"replace":"push"](Object(r.F)(e.to)).catch(d):Promise.resolve()}}}const Ae=Object(r.j)({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ke,setup(e,{slots:t}){const n=Object(r.y)(ke(e)),{options:o}=Object(r.m)(i),a=Object(r.b)(()=>({[Pe(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Pe(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&t.default(n);return e.custom?o:Object(r.l)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},o)}}});function Re(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Pe=(e,t,n)=>null!=e?e:null!=t?t:n;function xe(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Ce=Object(r.j)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const o=Object(r.m)(u),a=Object(r.b)(()=>e.route||o.value),i=Object(r.m)(s,0),l=Object(r.b)(()=>a.value.matched[i]);Object(r.x)(s,i+1),Object(r.x)(c,l),Object(r.x)(u,a);const f=Object(r.z)();return Object(r.I)(()=>[f.value,l.value,e.name],([e,t,n],[r,o,a])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&b(t,o)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{const o=a.value,c=l.value,s=c&&c.components[e.name],i=e.name;if(!s)return xe(n.default,{Component:s,route:o});const u=c.props[e.name],h=u?!0===u?o.params:"function"==typeof u?u(o):u:null,d=Object(r.l)(s,p({},h,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(c.instances[i]=null)},ref:f}));return xe(n.default,{Component:d,route:o})||d}}});function $e(e){const t=J(e.routes,e),n=e.parseQuery||be,o=e.stringifyQuery||ye,a=e.history;const c=Oe(),s=Oe(),m=Oe(),v=Object(r.D)(F);let w=F;f&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const O=h.bind(null,e=>""+e),E=h.bind(null,ge),k=h.bind(null,ve);function A(e,r){if(r=p({},r||v.value),"string"==typeof e){const o=g(n,e,r.path),c=t.resolve({path:o.path},r),s=a.createHref(o.fullPath);return p(o,c,{params:k(c.params),hash:ve(o.hash),redirectedFrom:void 0,href:s})}let c;if("path"in e)c=p({},e,{path:g(n,e.path,r.path).path});else{const t=p({},e.params);for(const e in t)null==t[e]&&delete t[e];c=p({},e,{params:E(e.params)}),r.params=E(r.params)}const s=t.resolve(c,r),i=e.hash||"";s.params=O(k(s.params));const l=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(o,p({},e,{hash:(u=i,de(u).replace(ue,"{").replace(pe,"}").replace(ie,"^")),path:s.path}));var u;const f=a.createHref(l);return p({fullPath:l,hash:i,query:o===ye?we(e.query):e.query||{}},s,{redirectedFrom:void 0,href:f})}function R(e){return"string"==typeof e?g(n,e,v.value.path):p({},e)}function S(e,t){if(w!==e)return I(8,{from:t,to:e})}function q(e){return _(e)}function L(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=R(r):{path:r},r.params={}),p({query:e.query,hash:e.hash,params:e.params},r)}}function _(e,t){const n=w=A(e),r=v.value,a=e.state,c=e.force,s=!0===e.replace,i=L(n);if(i)return _(p(R(i),{state:a,force:c,replace:s}),t||n);const l=n;let u;return l.redirectedFrom=t,!c&&function(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&b(t.matched[r],n.matched[o])&&y(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(o,r,n)&&(u=I(16,{to:l,from:r}),Y(r,r,!0,!1)),(u?Promise.resolve(u):M(l,r)).catch(e=>T(e)?T(e,2)?e:X(e):Q(e,l,r)).then(e=>{if(e){if(T(e,2))return _(p(R(e.to),{state:a,force:c,replace:s}),t||l)}else e=D(l,r,!0,s,a);return U(l,r,e),e})}function G(e,t){const n=S(e,t);return n?Promise.reject(n):Promise.resolve()}function M(e,t){let n;const[r,o,a]=function(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let c=0;c<a;c++){const a=t.matched[c];a&&(e.matched.find(e=>b(e,a))?r.push(a):n.push(a));const s=e.matched[c];s&&(t.matched.find(e=>b(e,s))||o.push(s))}return[n,r,o]}(e,t);n=Ee(r.reverse(),"beforeRouteLeave",e,t);for(const o of r)o.leaveGuards.forEach(r=>{n.push(je(r,e,t))});const i=G.bind(null,e,t);return n.push(i),Se(n).then(()=>{n=[];for(const r of c.list())n.push(je(r,e,t));return n.push(i),Se(n)}).then(()=>{n=Ee(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach(r=>{n.push(je(r,e,t))});return n.push(i),Se(n)}).then(()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const o of r.beforeEnter)n.push(je(o,e,t));else n.push(je(r.beforeEnter,e,t));return n.push(i),Se(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=Ee(a,"beforeRouteEnter",e,t),n.push(i),Se(n))).then(()=>{n=[];for(const r of s.list())n.push(je(r,e,t));return n.push(i),Se(n)}).catch(e=>T(e,8)?e:Promise.reject(e))}function U(e,t,n){for(const r of m.list())r(e,t,n)}function D(e,t,n,r,o){const c=S(e,t);if(c)return c;const s=t===F,i=f?history.state:{};n&&(r||s?a.replace(e.fullPath,p({scroll:s&&i&&i.scroll},o)):a.push(e.fullPath,o)),v.value=e,Y(e,t,n,s),X()}let W;function z(){W=a.listen((e,t,n)=>{const r=A(e),o=L(r);if(o)return void _(p(o,{replace:!0}),r).catch(d);w=r;const c=v.value;var s,i;f&&(s=C(c.fullPath,n.delta),i=P(),$.set(s,i)),M(r,c).catch(e=>T(e,12)?e:T(e,2)?(_(e.to,r).then(e=>{T(e,20)&&!n.delta&&n.type===j.pop&&a.go(-1,!1)}).catch(d),Promise.reject()):(n.delta&&a.go(-n.delta,!1),Q(e,r,c))).then(e=>{(e=e||D(r,c,!1))&&(n.delta?a.go(-n.delta,!1):n.type===j.pop&&T(e,20)&&a.go(-1,!1)),U(r,c,e)}).catch(d)})}let V,K=Oe(),H=Oe();function Q(e,t,n){X(e);const r=H.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function X(e){return V||(V=!e,z(),K.list().forEach(([t,n])=>e?n(e):t()),K.reset()),e}function Y(t,n,o,a){const{scrollBehavior:c}=e;if(!f||!c)return Promise.resolve();const s=!o&&function(e){const t=$.get(e);return $.delete(e),t}(C(t.fullPath,0))||(a||!o)&&history.state&&history.state.scroll||null;return Object(r.n)().then(()=>c(t,n,s)).then(e=>e&&x(e)).catch(e=>Q(e,t,n))}const N=e=>a.go(e);let Z;const ee=new Set;return{currentRoute:v,addRoute:function(e,n){let r,o;return B(e)?(r=t.getRecordMatcher(e),o=n):o=e,t.addRoute(o,r)},removeRoute:function(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)},hasRoute:function(e){return!!t.getRecordMatcher(e)},getRoutes:function(){return t.getRoutes().map(e=>e.record)},resolve:A,options:e,push:q,replace:function(e){return q(p(R(e),{replace:!0}))},go:N,back:()=>N(-1),forward:()=>N(1),beforeEach:c.add,beforeResolve:s.add,afterEach:m.add,onError:H.add,isReady:function(){return V&&v.value!==F?Promise.resolve():new Promise((e,t)=>{K.add([e,t])})},install(e){e.component("RouterLink",Ae),e.component("RouterView",Ce),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(r.F)(v)}),f&&!Z&&v.value===F&&(Z=!0,q(a.location).catch(e=>{0}));const t={};for(const e in F)t[e]=Object(r.b)(()=>v.value[e]);e.provide(i,this),e.provide(l,Object(r.y)(t)),e.provide(u,v);const n=e.unmount;ee.add(e),e.unmount=function(){ee.delete(e),ee.size<1&&(w=F,W&&W(),v.value=F,Z=!1,V=!1),n()}}}}function Se(e){return e.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}}}]);
//# sourceMappingURL=npm.vue-router.js.map