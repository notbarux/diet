(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function wu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const We={},_s=[],jn=()=>{},Cp=()=>!1,fl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),pl=t=>t.startsWith("onUpdate:"),gt=Object.assign,Eu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},yy=Object.prototype.hasOwnProperty,Oe=(t,e)=>yy.call(t,e),ue=Array.isArray,Lr=t=>Po(t)==="[object Map]",dr=t=>Po(t)==="[object Set]",nd=t=>Po(t)==="[object Date]",Ee=t=>typeof t=="function",et=t=>typeof t=="string",Gn=t=>typeof t=="symbol",Be=t=>t!==null&&typeof t=="object",Rp=t=>(Be(t)||Ee(t))&&Ee(t.then)&&Ee(t.catch),Pp=Object.prototype.toString,Po=t=>Pp.call(t),vy=t=>Po(t).slice(8,-1),kp=t=>Po(t)==="[object Object]",Tu=t=>et(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Gi=wu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ml=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},wy=/-\w/g,wn=ml(t=>t.replace(wy,e=>e.slice(1).toUpperCase())),Ey=/\B([A-Z])/g,Zr=ml(t=>t.replace(Ey,"-$1").toLowerCase()),Dp=ml(t=>t.charAt(0).toUpperCase()+t.slice(1)),nc=ml(t=>t?`on${Dp(t)}`:""),$n=(t,e)=>!Object.is(t,e),Sa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Vp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ko=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let rd;const gl=()=>rd||(rd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ir(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=et(r)?Ay(r):ir(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(et(t)||Be(t))return t}const Ty=/;(?![^(]*\))/g,Iy=/:([^]+)/,by=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Ay(t){const e={};return t.replace(by,n=>n.startsWith("/*")?"":n).split(Ty).forEach(n=>{if(n){const r=n.split(Iy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function je(t){let e="";if(et(t))e=t;else if(ue(t))for(let n=0;n<t.length;n++){const r=je(t[n]);r&&(e+=r+" ")}else if(Be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Sy="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Cy=wu(Sy);function Np(t){return!!t||t===""}function Ry(t,e,n){if(t.length!==e.length)return!1;let r=!0;for(let s=0;r&&s<t.length;s++)r=fr(t[s],e[s],n);return r}function sd(t,e,n){if(t.size!==e.size)return!1;const r=Array.from(e),s=new Uint8Array(r.length);for(const i of t){let o=-1;for(let l=0;l<r.length;l++)if(!s[l]&&fr(i,r[l],n)){o=l;break}if(o<0)return!1;s[o]=1}return!0}function Py(t,e,n){let r=Lr(t),s=Lr(e);if(r||s||(r=dr(t),s=dr(e),r||s))return r&&s?sd(t,e,n):!1;const i=Object.keys(t).length,o=Object.keys(e).length;if(i!==o)return!1;for(const l in t){const c=t.hasOwnProperty(l),h=e.hasOwnProperty(l);if(c&&!h||!c&&h||!fr(t[l],e[l],n))return!1}return String(t)===String(e)}function id(t,e,n,r){n||(n=[new Map,new Map]);const[s,i]=n;if(s.has(t)||i.has(e))return s.get(t)===e&&i.get(e)===t;s.set(t,e),i.set(e,t);const o=r(t,e,n);return s.delete(t),i.delete(e),o}function fr(t,e,n){if(t===e)return!0;let r=nd(t),s=nd(e);return r||s?r&&s?t.getTime()===e.getTime():!1:(r=Gn(t),s=Gn(e),r||s?t===e:(r=ue(t),s=ue(e),r||s?r&&s?id(t,e,n,Ry):!1:(r=Be(t),s=Be(e),r||s?!r||!s?!1:id(t,e,n,Py):String(t)===String(e))))}function Iu(t,e){return t.findIndex(n=>fr(n,e))}const xp=t=>!!(t&&t.__v_isRef===!0),F=t=>et(t)?t:t==null?"":ue(t)||Be(t)&&(t.toString===Pp||!Ee(t.toString))?xp(t)?F(t.value):JSON.stringify(t,Op,2):String(t),Op=(t,e)=>xp(e)?Op(t,e.value):Lr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[rc(r,i)+" =>"]=s,n),{})}:dr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>rc(n))}:Gn(e)?rc(e):Be(e)&&!ue(e)&&!kp(e)?String(e):e,rc=(t,e="")=>{var n;return Gn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bt;class Mp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&bt&&(bt.active?(this.parent=bt,this.index=(bt.scopes||(bt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const r=this.scopes.slice();for(e=0,n=r.length;e<n;e++)r[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}const r=this.effects.slice();for(e=0,n=r.length;e<n;e++)r[e].resume()}}run(e){if(this._active){const n=bt;try{return bt=this,e()}finally{bt=n}}}on(){++this._on===1&&(this.prevScope=bt,bt=this)}off(){if(this._on>0&&--this._on===0){if(bt===this)bt=this.prevScope;else{let e=bt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,r=s.length;n<r;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ky(t){return new Mp(t)}function Dy(){return bt}let Ke;const sc=new WeakSet;class Lp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,bt&&(bt.active?bt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,sc.has(this)&&(sc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Up(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,od(this),$p(this);const e=Ke,n=En;Ke=this,En=!0;try{return this.fn()}finally{Bp(this),Ke=e,En=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Su(e);this.deps=this.depsTail=void 0,od(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?sc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Nc(this)&&this.run()}get dirty(){return Nc(this)}}let Fp=0,Qi,Ji;function Up(t,e=!1){if(t.flags|=8,e){t.next=Ji,Ji=t;return}t.next=Qi,Qi=t}function bu(){Fp++}function Au(){if(--Fp>0)return;if(Ji){let e=Ji;for(Ji=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Qi;){let e=Qi;for(Qi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function $p(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Bp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Su(r),Vy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Nc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(jp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function jp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===co)||(t.globalVersion=co,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Nc(t))))return;t.flags|=2;const e=t.dep,n=Ke,r=En;Ke=t,En=!0;try{$p(t);const s=t.fn(t._value);(e.version===0||$n(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ke=n,En=r,Bp(t),t.flags&=-3}}function Su(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Su(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Vy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let En=!0;const qp=[];function Qn(){qp.push(En),En=!1}function Jn(){const t=qp.pop();En=t===void 0?!0:t}function od(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ke;Ke=void 0;try{e()}finally{Ke=n}}}let co=0;class Ny{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Cu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ke||!En||Ke===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ke)n=this.activeLink=new Ny(Ke,this),Ke.deps?(n.prevDep=Ke.depsTail,Ke.depsTail.nextDep=n,Ke.depsTail=n):Ke.deps=Ke.depsTail=n,zp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ke.depsTail,n.nextDep=void 0,Ke.depsTail.nextDep=n,Ke.depsTail=n,Ke.deps===n&&(Ke.deps=r)}return n}trigger(e){this.version++,co++,this.notify(e)}notify(e){bu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Au()}}}function zp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)zp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const xc=new WeakMap,ws=Symbol(""),Oc=Symbol(""),uo=Symbol("");function Mt(t,e,n){if(En&&Ke){let r=xc.get(t);r||xc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Cu),s.map=r,s.key=n),s.track()}}function ar(t,e,n,r,s,i){const o=xc.get(t);if(!o){co++;return}const l=c=>{c&&c.trigger()};if(bu(),e==="clear")o.forEach(l);else{const c=ue(t),h=c&&Tu(n);if(c&&n==="length"){const f=Number(r);o.forEach((g,y)=>{(y==="length"||y===uo||!Gn(y)&&y>=f)&&l(g)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),h&&l(o.get(uo)),e){case"add":c?h&&l(o.get("length")):(l(o.get(ws)),Lr(t)&&l(o.get(Oc)));break;case"delete":c||(l(o.get(ws)),Lr(t)&&l(o.get(Oc)));break;case"set":Lr(t)&&l(o.get(ws));break}}Au()}function js(t){const e=Le(t);return e===t||(Mt(e,"iterate",uo),hn(t))?e:Xn(t)?Fr(t)?e.map(n=>Hr(dn(n))):e.map(Hr):e.map(dn)}function _l(t){return Mt(t=Le(t),"iterate",uo),t}function Ln(t,e){return Xn(t)?Hr(Fr(t)?dn(e):e):dn(e)}const xy={__proto__:null,[Symbol.iterator](){return ic(this,Symbol.iterator,t=>Ln(this,t))},concat(...t){return js(this).concat(...t.map(e=>ue(e)?js(e):e))},entries(){return ic(this,"entries",t=>(t[1]=Ln(this,t[1]),t))},every(t,e){return rr(this,"every",t,e,void 0,arguments)},filter(t,e){return rr(this,"filter",t,e,n=>n.map(r=>Ln(this,r)),arguments)},find(t,e){return rr(this,"find",t,e,n=>Ln(this,n),arguments)},findIndex(t,e){return rr(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return rr(this,"findLast",t,e,n=>Ln(this,n),arguments)},findLastIndex(t,e){return rr(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return rr(this,"forEach",t,e,void 0,arguments)},includes(...t){return oc(this,"includes",t)},indexOf(...t){return oc(this,"indexOf",t)},join(t){return js(this).join(t)},lastIndexOf(...t){return oc(this,"lastIndexOf",t)},map(t,e){return rr(this,"map",t,e,void 0,arguments)},pop(){return Oi(this,"pop")},push(...t){return Oi(this,"push",t)},reduce(t,...e){return ld(this,"reduce",t,e)},reduceRight(t,...e){return ld(this,"reduceRight",t,e)},shift(){return Oi(this,"shift")},some(t,e){return rr(this,"some",t,e,void 0,arguments)},splice(...t){return Oi(this,"splice",t)},toReversed(){return js(this).toReversed()},toSorted(t){return js(this).toSorted(t)},toSpliced(...t){return js(this).toSpliced(...t)},unshift(...t){return Oi(this,"unshift",t)},values(){return ic(this,"values",t=>Ln(this,t))}};function ic(t,e,n){const r=_l(t),s=r[e],i=s.call(r);if(r!==t&&!hn(t)){if(i[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(i));return o.next=()=>ad(i.next(),n),s!==Hp[e]&&Object.defineProperties(o,{return:{get(){const l=i.return;return typeof l=="function"?l.bind(i):l}},throw:{get(){const l=i.throw;return typeof l=="function"?l.bind(i):l}}}),o}i._next=i.next,i.next=()=>ad(i._next(),n)}return i}function ad(t,e){return t.done||(t.value=e(t.value)),t}const Hp=Array.prototype;function rr(t,e,n,r,s,i){const o=_l(t),l=o!==t&&!hn(t),c=o[e];if(c!==Hp[e]){const g=c.apply(t,i);return l?dn(g):g}let h=n;o!==t&&(l?h=function(g,y){return n.call(this,Ln(t,g),y,t)}:n.length>2&&(h=function(g,y){return n.call(this,g,y,t)}));const f=c.call(o,h,r);return l&&s?s(f):f}function ld(t,e,n,r){const s=_l(t),i=s!==t&&!hn(t);let o=n,l=!1;s!==t&&(i?(l=r.length===0,o=function(h,f,g){return l&&(l=!1,h=Ln(t,h)),n.call(this,h,Ln(t,f),g,t)}):n.length>3&&(o=function(h,f,g){return n.call(this,h,f,g,t)}));const c=s[e](o,...r);return l?Ln(t,c):c}function oc(t,e,n){const r=Le(t);Mt(r,"iterate",uo);const s=r[e](...n);return(s===-1||s===!1)&&Du(n[0])?(n[0]=Le(n[0]),r[e](...n)):s}function Oi(t,e,n=[]){Qn(),bu();const r=Le(t)[e].apply(t,n);return Au(),Jn(),r}const Oy=wu("__proto__,__v_isRef,__isVue"),Wp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Gn));function My(t){Gn(t)||(t=String(t));const e=Le(this);return Mt(e,"has",t),e.hasOwnProperty(t)}class Kp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Wy:Xp:i?Jp:Qp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ue(e);if(!s){let c;if(o&&(c=xy[n]))return c;if(n==="hasOwnProperty")return My}const l=Reflect.get(e,n,Ft(e)?e:r);if((Gn(n)?Wp.has(n):Oy(n))||(s||Mt(e,"get",n),i))return l;if(Ft(l)){const c=o&&Tu(n)?l:l.value;return s&&Be(c)?Lc(c):c}return Be(l)?s?Lc(l):Pu(l):l}}class Gp extends Kp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=ue(e)&&Tu(n);if(!this._isShallow){const h=Xn(i);if(!hn(r)&&!Xn(r)&&(i=Le(i),r=Le(r)),!o&&Ft(i)&&!Ft(r))return h||(i.value=r),!0}const l=o?Number(n)<e.length:Oe(e,n),c=Reflect.set(e,n,r,Ft(e)?e:s);return e===Le(s)&&c&&(l?$n(r,i)&&ar(e,"set",n,r):ar(e,"add",n,r)),c}deleteProperty(e,n){const r=Oe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&ar(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Gn(n)||!Wp.has(n))&&Mt(e,"has",n),r}ownKeys(e){return Mt(e,"iterate",ue(e)?"length":ws),Reflect.ownKeys(e)}}class Ly extends Kp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Fy=new Gp,Uy=new Ly,$y=new Gp(!0);const Mc=t=>t,ha=t=>Reflect.getPrototypeOf(t);function By(t,e,n){return function(...r){const s=this.__v_raw,i=Le(s),o=Lr(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,h=s[t](...r),f=n?Mc:e?Hr:dn;return!e&&Mt(i,"iterate",c?Oc:ws),gt(Object.create(h),{next(){const{value:g,done:y}=h.next();return y?{value:g,done:y}:{value:l?[f(g[0]),f(g[1])]:f(g),done:y}}})}}function da(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function jy(t,e){const n={get(s){const i=this.__v_raw,o=Le(i),l=Le(s);t||($n(s,l)&&Mt(o,"get",s),Mt(o,"get",l));const{has:c}=ha(o),h=e?Mc:t?Hr:dn;if(c.call(o,s))return h(i.get(s));if(c.call(o,l))return h(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Mt(Le(s),"iterate",ws),s.size},has(s){const i=this.__v_raw,o=Le(i),l=Le(s);return t||($n(s,l)&&Mt(o,"has",s),Mt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Le(l),h=e?Mc:t?Hr:dn;return!t&&Mt(c,"iterate",ws),l.forEach((f,g)=>s.call(i,h(f),h(g),o))}};return gt(n,t?{add:da("add"),set:da("set"),delete:da("delete"),clear:da("clear")}:{add(s){const i=Le(this),o=ha(i),l=Le(s),c=!e&&!hn(s)&&!Xn(s)?l:s;return o.has.call(i,c)||$n(s,c)&&o.has.call(i,s)||$n(l,c)&&o.has.call(i,l)||(i.add(c),ar(i,"add",c,c)),this},set(s,i){!e&&!hn(i)&&!Xn(i)&&(i=Le(i));const o=Le(this),{has:l,get:c}=ha(o);let h=l.call(o,s);h||(s=Le(s),h=l.call(o,s));const f=c.call(o,s);return o.set(s,i),h?$n(i,f)&&ar(o,"set",s,i):ar(o,"add",s,i),this},delete(s){const i=Le(this),{has:o,get:l}=ha(i);let c=o.call(i,s);c||(s=Le(s),c=o.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&ar(i,"delete",s,void 0),h},clear(){const s=Le(this),i=s.size!==0,o=s.clear();return i&&ar(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=By(s,t,e)}),n}function Ru(t,e){const n=jy(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_isShallow"?e:s==="__v_raw"?r:Reflect.get(Oe(n,s)&&s in r?n:r,s,i)}const qy={get:Ru(!1,!1)},zy={get:Ru(!1,!0)},Hy={get:Ru(!0,!1)};const Qp=new WeakMap,Jp=new WeakMap,Xp=new WeakMap,Wy=new WeakMap;function Ky(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Pu(t){return Xn(t)?t:ku(t,!1,Fy,qy,Qp)}function Gy(t){return ku(t,!1,$y,zy,Jp)}function Lc(t){return ku(t,!0,Uy,Hy,Xp)}function ku(t,e,n,r,s){if(!Be(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=s.get(t);if(i)return i;const o=Ky(vy(t));if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function Fr(t){return Xn(t)?Fr(t.__v_raw):!!(t&&t.__v_isReactive)}function Xn(t){return!!(t&&t.__v_isReadonly)}function hn(t){return!!(t&&t.__v_isShallow)}function Du(t){return t?!!t.__v_raw:!1}function Le(t){const e=t&&t.__v_raw;return e?Le(e):t}function Yp(t){return!Oe(t,"__v_skip")&&Object.isExtensible(t)&&Vp(t,"__v_skip",!0),t}const dn=t=>Be(t)?Pu(t):t,Hr=t=>Be(t)?Lc(t):t;function Ft(t){return t?t.__v_isRef===!0:!1}function De(t){return Qy(t,!1)}function Qy(t,e){return Ft(t)?t:new Jy(t,e)}class Jy{constructor(e,n){this.dep=new Cu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Le(e),this._value=n?e:dn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||hn(e)||Xn(e);e=r?e:Le(e),$n(e,n)&&(this._rawValue=e,this._value=r?e:dn(e),this.dep.trigger())}}function le(t){return Ft(t)?t.value:t}const Xy={get:(t,e,n)=>e==="__v_raw"?t:le(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ft(s)&&!Ft(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Zp(t){return Fr(t)?t:new Proxy(t,Xy)}class Yy{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Cu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=co-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ke!==this)return Up(this,!0),!0}get value(){const e=this.dep.track();return jp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Zy(t,e,n=!1){let r,s;return Ee(t)?r=t:(r=t.get,s=t.set),new Yy(r,s,n)}const fa={},$a=new WeakMap;let ps;function ev(t,e=!1,n=ps){if(n){let r=$a.get(n);r||$a.set(n,r=[]),r.push(t)}}function tv(t,e,n=We){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,h=Q=>s?Q:hn(Q)||s===!1||s===0?lr(Q,1):lr(Q);let f,g,y,P,V=!1,x=!1;if(Ft(t)?(g=()=>t.value,V=hn(t)):Fr(t)?(g=()=>h(t),V=!0):ue(t)?(x=!0,V=t.some(Q=>Fr(Q)||hn(Q)),g=()=>t.map(Q=>{if(Ft(Q))return Q.value;if(Fr(Q))return h(Q);if(Ee(Q))return c?c(Q,2):Q()})):Ee(t)?e?g=c?()=>c(t,2):t:g=()=>{if(y){Qn();try{y()}finally{Jn()}}const Q=ps;ps=f;try{return c?c(t,3,[P]):t(P)}finally{ps=Q}}:g=jn,e&&s){const Q=g,he=s===!0?1/0:s;g=()=>lr(Q(),he)}const L=Dy(),Y=()=>{f.stop(),L&&L.active&&Eu(L.effects,f)};if(i&&e){const Q=e;e=(...he)=>{try{return Q(...he)}finally{Y()}}}let W=x?new Array(t.length).fill(fa):fa;const ne=Q=>{if(!(!(f.flags&1)||!f.dirty&&!Q))if(e){const he=f.run();if(Q||s||V||(x?he.some((be,S)=>$n(be,W[S])):$n(he,W))){const be=ps;Qn();try{y&&y(),ps=f;const S=[he,W===fa?void 0:x&&W[0]===fa?[]:W,P];W=he,c?c(e,3,S):e(...S)}finally{ps=be,Jn()}}}else f.run()};return l&&l(ne),f=new Lp(g),f.scheduler=o?()=>o(ne,!1):ne,P=Q=>ev(Q,!1,f),y=f.onStop=()=>{const Q=$a.get(f);if(Q){if(c)c(Q,4);else for(const he of Q)he();$a.delete(f)}},e?r?ne(!0):W=f.run():o?o(ne.bind(null,!0),!0):f.run(),Y.pause=f.pause.bind(f),Y.resume=f.resume.bind(f),Y.stop=Y,Y}function lr(t,e=1/0,n){if(e<=0||!Be(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ft(t))lr(t.value,e,n);else if(ue(t))for(let r=0;r<t.length;r++)lr(t[r],e,n);else if(dr(t)||Lr(t))t.forEach(r=>{lr(r,e,n)});else if(kp(t)){for(const r in t)lr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&lr(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Do(t,e,n,r){try{return r?t(...r):t()}catch(s){yl(s,e,n)}}function An(t,e,n,r){if(Ee(t)){const s=Do(t,e,n,r);return s&&Rp(s)&&s.catch(i=>{yl(i,e,n,void 0,!0)}),s}if(ue(t)){const s=[];for(let i=0;i<t.length;i++)s.push(An(t[i],e,n,r));return s}}function yl(t,e,n,r=!0,s=!1){const i=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:l}=e&&e.appContext.config||We;if(e){let c=e.parent;const h=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const g=c.ec;if(g&&!c.isUnmounted&&(!s||c.scope.active)){for(let y=0;y<g.length;y++)if(g[y](t,h,f)===!1)return}c=c.parent}if(o){Qn(),Do(o,null,10,[t,h,f]),Jn();return}}nv(t,n,i,r,l)}function nv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const qt=[];let _n=-1;const Fn=[];let Dr=null,Ws=0;const em=Promise.resolve();let Ba=null;function Vu(t){const e=Ba||em;return t?e.then(this?t.bind(this):t):e}function rv(t){let e=_n+1,n=qt.length;for(;e<n;){const r=e+n>>>1,s=qt[r],i=ho(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Nu(t){if(!(t.flags&1)){const e=ho(t),n=qt[qt.length-1];!n||!(t.flags&2)&&e>=ho(n)?qt.push(t):qt.splice(rv(e),0,t),t.flags|=1,tm()}}function tm(){Ba||(Ba=em.then(sm))}function sv(t){if(!ue(t))Dr&&t.id===-1?Dr.splice(Ws+1,0,t):t.flags&1||(Fn.push(t),t.flags|=1);else for(let e=0;e<t.length;e++)Fn.push(t[e]);tm()}function nm(t,e,n,r=_n+1){for(;r<qt.length;r++){const s=qt[r];if(s&&s.flags&2){if(t&&s.id!==t.uid||e!==void 0&&!(s.id>=e))continue;qt.splice(r,1),r=t?r-1:_n,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function rm(t,e,n=0){if(Fn.length){let r=Fn,s=0;if(e){r=[];for(let o=0;o<Fn.length;o++){const l=Fn[o];(l.i!==void 0?!l.i||l.i.uid<n:e.has(l))?Fn[s++]=l:r.push(l)}}const i=[...new Set(r)].sort((o,l)=>ho(o)-ho(l));if(Fn.length=s,Dr){for(let o=0;o<i.length;o++)Dr.push(i[o]);return}for(Dr=i,Ws=0;Ws<Dr.length;Ws++){const o=Dr[Ws];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}Dr=null,Ws=0}}let ac=!1;function iv(t,e){if(ac){t();return}const n=e===void 0?void 0:new Set(Fn);t(),ac=!0;try{nm(void 0,e),rm(void 0,n,e)}finally{ac=!1}}const ho=t=>t.id==null?t.flags&2?-1:1/0:t.id;function sm(t){try{for(_n=0;_n<qt.length;_n++){const e=qt[_n];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Do(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;_n<qt.length;_n++){const e=qt[_n];e&&(e.flags&=-2)}_n=-1,qt.length=0,rm(),Ba=null,(qt.length||Fn.length)&&sm()}}let un=null,im=null;function ja(t){const e=un;return un=t,im=t&&t.type.__scopeId||null,e}function ov(t,e=un,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ha(-1);const i=ja(e),o=Es.length;let l;try{l=t(...s)}finally{for(let c=Es.length;c>o;c--)km();ja(i),r._d&&Ha(1)}return l};return r._n=!0,r._c=!0,r._d=!0,r}function ln(t,e){if(un===null)return t;const n=Tl(un),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=We]=e[s];i&&(Ee(i)&&(i={mounted:i,updated:i}),i.deep&&lr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function us(t,e,n,r){let s=t;if(r==="beforeMount")t._mount=t;else if(r==="beforeUpdate"){const l=e&&e._mount;l&&(l._latest=t,t._mount=l)}else if(r==="mounted"){const l=t._latest;t._mount=t._latest=void 0,l&&(s=l,l._mount=void 0)}const i=s.dirs,o=e&&e.dirs;for(let l=0;l<i.length;l++){let c=i[l];o?c.oldValue=o[l].value:r==="mounted"&&c.oldValue!==void 0&&(c=gt({},c,{oldValue:void 0}));let h=c.dir[r];h&&(Qn(),An(h,n,8,[t.el,c,s,e]),Jn())}}function av(t,e){if(zt){let n=zt.provides;const r=zt.parent&&zt.parent.provides;r===n&&(n=zt.provides=Object.create(r)),n[t]=e}}function Xi(t,e,n=!1){const r=aw();if(r||Xs){let s=Xs?Xs._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Ee(e)?e.call(r&&r.proxy):e}}const lv=Symbol.for("v-scx"),cv=()=>Xi(lv);function Ca(t,e,n){return om(t,e,n)}function om(t,e,n=We){const{immediate:r,deep:s,flush:i,once:o}=n,l=gt({},n),c=e&&r||!e&&i!=="post";let h;if(_o){if(i==="sync"){const P=cv();h=P.__watcherHandles||(P.__watcherHandles=[])}else if(!c){const P=()=>{};return P.stop=jn,P.resume=jn,P.pause=jn,P}}const f=zt;l.call=(P,V,x)=>An(P,f,V,x);let g=!1;i==="post"?l.scheduler=P=>{P.i=f,xt(P,f&&f.suspense)}:i!=="sync"&&(g=!0,l.scheduler=(P,V)=>{V?P():Nu(P)}),l.augmentJob=P=>{e&&(P.flags|=4),g&&(P.flags|=2,f&&(P.id=f.uid,P.i=f))};const y=tv(t,e,l);return _o&&(h?h.push(y):c&&y()),y}function uv(t,e,n){const r=this.proxy,s=et(t)?t.includes(".")?am(r,t):()=>r[t]:t.bind(r,r);let i;Ee(e)?i=e:(i=e.handler,n=e);const o=Vo(this),l=om(s,i.bind(r),n);return o(),l}function am(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const kr=new WeakMap,lm=Symbol("_vte"),vl=t=>t.__isTeleport,gs=t=>t&&(t.disabled||t.disabled===""),hv=t=>t&&(t.defer||t.defer===""),cd=t=>typeof SVGElement<"u"&&t instanceof SVGElement,ud=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Fc=(t,e)=>{const n=t&&t.to;return et(n)?e?e(n):null:n},dv={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,l,c,h){const{mc:f,pc:g,pbc:y,o:{insert:P,querySelector:V,createText:x,createComment:L,parentNode:Y}}=h,W=gs(e.props);let{dynamicChildren:ne}=e;const Q=(S,v,T)=>{S.shapeFlag&16&&f(S.children,v,T,s,i,o,l,c)},he=(S=e)=>{const v=gs(S.props),T=S.target=Fc(S.props,V),R=Uc(T,S,x,P);T&&(o!=="svg"&&cd(T)?o="svg":o!=="mathml"&&ud(T)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(T),v||(Q(S,T,R),Bi(S,!1)))},be=S=>{const v=()=>{if(kr.get(S)===v){if(kr.delete(S),gs(S.props)){const T=Y(S.el)||n;Q(S,T,S.anchor),Bi(S,!0)}he(S)}};kr.set(S,v),xt(v,i)};if(t==null){const S=e.el=x(""),v=e.anchor=x("");if(P(S,n,r),P(v,n,r),hv(e.props)||i&&i.pendingBranch){be(e);return}W&&(Q(e,n,v),Bi(e,!0)),he()}else{e.el=t.el;const S=e.anchor=t.anchor,v=kr.get(t);if(v){v.flags|=8,kr.delete(t),be(e);return}e.targetStart=t.targetStart;const T=e.target=t.target,R=e.targetAnchor=t.targetAnchor,k=gs(t.props),D=k?n:T,b=k?S:R;if(o==="svg"||cd(T)?o="svg":(o==="mathml"||ud(T))&&(o="mathml"),ne?(y(t.dynamicChildren,ne,D,s,i,o,l),Lu(t,e,!0)):c||g(t,e,D,b,s,i,o,l,!1),W)k?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):pa(e,n,S,h,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const Ye=Fc(e.props,V);Ye&&(e.target=Ye,pa(e,Ye,null,h,0))}else k&&pa(e,T,R,h,1);Bi(e,W)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:l,anchor:c,targetStart:h,targetAnchor:f,target:g,props:y}=t,P=gs(y),V=i||!P,x=kr.get(t);if(x&&(x.flags|=8,kr.delete(t)),g&&(s(h),s(f)),i&&s(c),!x&&(P||g)&&o&16)for(let L=0;L<l.length;L++){const Y=l[L];r(Y,e,n,V,!!Y.dynamicChildren)}},move:pa,hydrate:fv};function pa(t,e,n,{o:{insert:r},m:s},i=2){i===0&&(t.targetStart&&r(t.targetStart,e,n),r(t.targetAnchor,e,n),n=t.targetAnchor);const{el:o,anchor:l,shapeFlag:c,children:h,props:f}=t,g=i===2;if(g&&r(o,e,n),!kr.has(t)&&(!g||gs(f))&&c&16)for(let y=0;y<h.length;y++)s(h[y],e,n,2);g&&r(l,e,n)}function fv(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:l,querySelector:c,insert:h,createText:f}},g){function y(L,Y){let W=Y;for(;W;){if(W&&W.nodeType===8){if(W.data==="teleport start anchor")e.targetStart=W;else if(W.data==="teleport anchor"){e.targetAnchor=W,L._lpa=e.targetAnchor&&o(e.targetAnchor);break}}W=o(W)}}function P(L,Y){Y.anchor=g(o(L),Y,l(L),n,r,s,i)}const V=e.target=Fc(e.props,c),x=gs(e.props);if(V){const L=V._lpa||V.firstChild;e.shapeFlag&16&&(x?(P(t,e),y(V,L),e.targetAnchor||Uc(V,e,f,h,l(t)===V?t:null)):(e.anchor=o(t),y(V,L),e.targetAnchor||Uc(V,e,f,h),g(L&&o(L),e,V,n,r,s,i))),Bi(e,x)}else x&&e.shapeFlag&16&&(P(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const ma=dv;function Bi(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Uc(t,e,n,r,s=null){const i=e.targetStart=n(""),o=e.targetAnchor=n("");return i[lm]=o,t&&(r(i,t,s),r(o,t,s)),o}const lc=Symbol("_leaveCb");function pv(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Sn){e=n;break}}return e}function cm(t){if(!xu(t))return vl(t.type)&&t.children?pv(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Ee(n.default))return n.default()}}function Yi(t,e){if(t.shapeFlag&6&&t.component){t.transition=e;const n=t.component.subTree;Yi(vl(n.type)&&cm(n)||n,e)}else if(t.shapeFlag&128){const n=t.suspense;if(n){const r=n.isHydrating?n.pendingBranch:n.activeBranch;r&&Yi(r,e.clone(r))}else t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)}else if(t.transition=e,t.type===Me&&ue(t.children)){const n=ym(t.children,!1);n&&Yi(n,e)}}function $c(t){if(t.component)return $c(t.component.subTree);if(t.type===Me){const e=ue(t.children)&&ym(t.children,!1);return e?$c(e):void 0}if(t.type!==Sn)return t}function mv(t,e){return Ee(t)?gt({name:t.name},e,{setup:t}):t}function um(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function hd(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const qa=new WeakMap;function Zi(t,e,n,r,s=!1){if(ue(t)){t.forEach((x,L)=>Zi(x,e&&(ue(e)?e[L]:e),n,r,s));return}if(eo(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Zi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Tl(r.component):r.el,o=s?null:i,{i:l,r:c}=t,h=e&&e.r,f=l.refs===We?l.refs={}:l.refs,g=l.setupState,y=Le(g),P=g===We?Cp:x=>hd(f,x)?!1:Oe(y,x),V=(x,L)=>!(L&&hd(f,L));if(h!=null&&h!==c){if(dd(e),et(h))f[h]=null,P(h)&&(g[h]=null);else if(Ft(h)){const x=e;V(h,x.k)&&(h.value=null),x.k&&(f[x.k]=null)}}if(Ee(c))Do(c,l,12,[o,f]);else{const x=et(c),L=Ft(c);if(x||L){const Y=()=>{if(t.f){const W=x?P(c)?g[c]:f[c]:V()||!t.k?c.value:f[t.k];if(s)ue(W)&&Eu(W,i);else if(ue(W))W.includes(i)||W.push(i);else if(x)f[c]=[i],P(c)&&(g[c]=f[c]);else{const ne=[i];V(c,t.k)&&(c.value=ne),t.k&&(f[t.k]=ne)}}else x?(f[c]=o,P(c)&&(g[c]=o)):L&&(V(c,t.k)&&(c.value=o),t.k&&(f[t.k]=o))};if(o){const W=()=>{Y(),qa.delete(t)};W.id=-1,qa.set(t,W),xt(W,n)}else dd(t),Y()}}}function dd(t){const e=qa.get(t);e&&(e.flags|=8,qa.delete(t))}gl().requestIdleCallback;gl().cancelIdleCallback;const eo=t=>!!t.type.__asyncLoader,xu=t=>t.type.__isKeepAlive;function gv(t,e){hm(t,"a",e)}function _v(t,e){hm(t,"da",e)}function hm(t,e,n=zt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(fo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)xu(s.parent.vnode)&&yv(r,e,n,s),s=s.parent}}function yv(t,e,n,r){const s=fo(e,t,r,!0),i=fo("um",()=>Eu(r[e],s),n);i.flags=16}function fo(t,e,n=zt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Qn();const l=Vo(n),c=An(e,n,t,o);return l(),Jn(),c});return r?s.unshift(i):s.push(i),i}}const yr=t=>(e,n=zt)=>{(!_o||t==="sp")&&fo(t,(...r)=>e(...r),n)},vv=yr("bm"),dm=yr("m"),wv=yr("bu"),Ev=yr("u"),Tv=yr("bum"),fm=yr("um"),Iv=yr("sp"),bv=yr("rtg"),Av=yr("rtc");function Sv(t,e=zt){fo("ec",t,e)}const Cv=Symbol.for("v-ndc");function pt(t,e,n,r){let s;const i=n,o=ue(t);if(o||et(t)){const l=o&&Fr(t);let c=!1,h=!1;l&&(c=!hn(t),h=Xn(t),t=_l(t)),s=new Array(t.length);for(let f=0,g=t.length;f<g;f++)s[f]=e(c?h?Hr(dn(t[f])):dn(t[f]):t[f],f,void 0,i)}else if(typeof t=="number")if(!Number.isInteger(t)||t<0)s=[];else{s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Be(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const Bc=t=>t?xm(t)?Tl(t):Bc(t.parent):null,to=gt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Bc(t.parent),$root:t=>Bc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>mm(t),$forceUpdate:t=>t.f||(t.f=()=>{Nu(t.update)}),$nextTick:t=>t.n||(t.n=Vu.bind(t.proxy)),$watch:t=>uv.bind(t)}),cc=(t,e)=>t!==We&&!t.__isScriptSetup&&Oe(t,e),Rv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(cc(r,e))return o[e]=1,r[e];if(s!==We&&Oe(s,e))return o[e]=2,s[e];if(Oe(i,e))return o[e]=3,i[e];if(n!==We&&Oe(n,e))return o[e]=4,n[e];jc&&(o[e]=0)}}const h=to[e];let f,g;if(h)return e==="$attrs"&&Mt(t.attrs,"get",""),h(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==We&&Oe(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,Oe(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return cc(s,e)?(s[e]=n,!0):r!==We&&Oe(r,e)?(r[e]=n,!0):Oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},l){let c;return!!(n[l]||t!==We&&l[0]!=="$"&&Oe(t,l)||cc(e,l)||Oe(i,l)||Oe(r,l)||Oe(to,l)||Oe(s.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function fd(t){return ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let jc=!0;function Pv(t){const e=mm(t),n=t.proxy,r=t.ctx;jc=!1,e.beforeCreate&&pd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:h,created:f,beforeMount:g,mounted:y,beforeUpdate:P,updated:V,activated:x,deactivated:L,beforeDestroy:Y,beforeUnmount:W,destroyed:ne,unmounted:Q,render:he,renderTracked:be,renderTriggered:S,errorCaptured:v,serverPrefetch:T,expose:R,inheritAttrs:k,components:D,directives:b,filters:Ye}=e;if(h&&kv(h,r,null),o)for(const Ve in o){const Pe=o[Ve];Ee(Pe)&&(r[Ve]=Pe.bind(n))}if(s){const Ve=s.call(n,n);Be(Ve)&&(t.data=Pu(Ve))}if(jc=!0,i)for(const Ve in i){const Pe=i[Ve],Ht=Ee(Pe)?Pe.bind(n,n):Ee(Pe.get)?Pe.get.bind(n,n):jn,er=!Ee(Pe)&&Ee(Pe.set)?Pe.set.bind(n):jn,ct=vt({get:Ht,set:er});Object.defineProperty(r,Ve,{enumerable:!0,configurable:!0,get:()=>ct.value,set:me=>ct.value=me})}if(l)for(const Ve in l)pm(l[Ve],r,n,Ve);if(c){const Ve=Ee(c)?c.call(n):c;Reflect.ownKeys(Ve).forEach(Pe=>{av(Pe,Ve[Pe])})}f&&pd(f,t,"c");function nt(Ve,Pe){ue(Pe)?Pe.forEach(Ht=>Ve(Ht.bind(n))):Pe&&Ve(Pe.bind(n))}if(nt(vv,g),nt(dm,y),nt(wv,P),nt(Ev,V),nt(gv,x),nt(_v,L),nt(Sv,v),nt(Av,be),nt(bv,S),nt(Tv,W),nt(fm,Q),nt(Iv,T),ue(R))if(R.length){const Ve=t.exposed||(t.exposed={});R.forEach(Pe=>{Object.defineProperty(Ve,Pe,{get:()=>n[Pe],set:Ht=>n[Pe]=Ht,enumerable:!0})})}else t.exposed||(t.exposed={});he&&t.render===jn&&(t.render=he),k!=null&&(t.inheritAttrs=k),D&&(t.components=D),b&&(t.directives=b),T&&um(t)}function kv(t,e,n=jn){ue(t)&&(t=qc(t));for(const r in t){const s=t[r];let i;Be(s)?"default"in s?i=Xi(s.from||r,s.default,!0):i=Xi(s.from||r):i=Xi(s),Ft(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function pd(t,e,n){An(ue(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function pm(t,e,n,r){let s=r.includes(".")?am(n,r):()=>n[r];if(et(t)){const i=e[t];Ee(i)&&Ca(s,i)}else if(Ee(t))Ca(s,t.bind(n));else if(Be(t))if(ue(t))t.forEach(i=>pm(i,e,n,r));else{const i=Ee(t.handler)?t.handler.bind(n):e[t.handler];Ee(i)&&Ca(s,i,t)}}function mm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>za(c,h,o,!0)),za(c,e,o)),Be(e)&&i.set(e,c),c}function za(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&za(t,i,n,!0),s&&s.forEach(o=>za(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=Dv[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Dv={data:md,props:gd,emits:gd,methods:ji,computed:ji,beforeCreate:jt,created:jt,beforeMount:jt,mounted:jt,beforeUpdate:jt,updated:jt,beforeDestroy:jt,beforeUnmount:jt,destroyed:jt,unmounted:jt,activated:jt,deactivated:jt,errorCaptured:jt,serverPrefetch:jt,components:ji,directives:ji,watch:Nv,provide:md,inject:Vv};function md(t,e){return e?t?function(){return gt(Ee(t)?t.call(this,this):t,Ee(e)?e.call(this,this):e)}:e:t}function Vv(t,e){return ji(qc(t),qc(e))}function qc(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function jt(t,e){return t?[...new Set([].concat(t,e))]:e}function ji(t,e){return t?gt(Object.create(null),t,e):e}function gd(t,e){return t?ue(t)&&ue(e)?[...new Set([...t,...e])]:gt(Object.create(null),fd(t),fd(e??{})):e}function Nv(t,e){if(!t)return e;if(!e)return t;const n=gt(Object.create(null),t);for(const r in e)n[r]=jt(t[r],e[r]);return n}function gm(){return{app:null,config:{isNativeTag:Cp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xv=0;function Ov(t,e){return function(r,s=null){Ee(r)||(r=gt({},r)),s!=null&&!Be(s)&&(s=null);const i=gm(),o=new WeakSet,l=[];let c=!1;const h=i.app={_uid:xv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:fw,get config(){return i.config},set config(f){},use(f,...g){return o.has(f)||(f&&Ee(f.install)?(o.add(f),f.install(h,...g)):Ee(f)&&(o.add(f),f(h,...g))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,g){return g?(i.components[f]=g,h):i.components[f]},directive(f,g){return g?(i.directives[f]=g,h):i.directives[f]},mount(f,g,y){if(!c){const P=h._ceVNode||fe(r,s);return P.appContext=i,y===!0?y="svg":y===!1&&(y=void 0),t(P,f,y),c=!0,h._container=f,f.__vue_app__=h,Tl(P.component)}},onUnmount(f){l.push(f)},unmount(){c&&(An(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,g){return i.provides[f]=g,h},runWithContext(f){const g=Xs;Xs=h;try{return f()}finally{Xs=g}}};return h}}let Xs=null;const Mv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${wn(e)}Modifiers`]||t[`${Zr(e)}Modifiers`];function Lv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||We;let s=n;const i=e.startsWith("update:"),o=i&&Mv(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>et(f)?f.trim():f)),o.number&&(s=s.map(ko)));let l,c=r[l=nc(e)]||r[l=nc(wn(e))];!c&&i&&(c=r[l=nc(Zr(e))]),c&&An(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,An(h,t,6,s)}}const Fv=new WeakMap;function _m(t,e,n=!1){const r=n?Fv:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!Ee(t)){const c=h=>{const f=_m(h,e,!0);f&&(l=!0,gt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Be(t)&&r.set(t,null),null):(ue(i)?i.forEach(c=>o[c]=null):gt(o,i),Be(t)&&r.set(t,o),o)}function wl(t,e){return!t||!fl(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Oe(t,e[0].toLowerCase()+e.slice(1))||Oe(t,Zr(e))||Oe(t,e))}function _d(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:h,renderCache:f,props:g,data:y,setupState:P,ctx:V,inheritAttrs:x}=t,L=ja(t);let Y,W;try{if(n.shapeFlag&4){const Q=s||r,he=Q;Y=Un(h.call(he,Q,f,g,P,y,V)),W=l}else{const Q=e;Y=Un(Q.length>1?Q(g,{attrs:l,slots:o,emit:c}):Q(g,null)),W=e.props?l:Uv(l)}}catch(Q){Es.length=0,yl(Q,t,1),Y=fe(Sn)}let ne=Y;if(W&&x!==!1){const Q=Object.keys(W),{shapeFlag:he}=ne;Q.length&&he&7&&(i&&Q.some(pl)&&(W=$v(W,i)),ne=ri(ne,W,!1,!0))}if(n.dirs&&(ne=ri(ne,null,!1,!0),ne.dirs=ne.dirs?ne.dirs.concat(n.dirs):n.dirs),n.transition){const Q=vl(ne.type)&&cm(ne)||ne;Yi(Q,n.transition)}return Y=ne,ja(L),Y}function ym(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(mo(s)){if(s.type!==Sn||s.children==="v-if"){if(n)return;n=s}}else return}return n}const Uv=t=>{let e;for(const n in t)(n==="class"||n==="style"||fl(n))&&((e||(e={}))[n]=t[n]);return e},$v=(t,e)=>{const n={};for(const r in t)(!pl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Bv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?yd(r,o,h):!!o;if(c&8){const f=e.dynamicProps;for(let g=0;g<f.length;g++){const y=f[g];if(vm(o,r,y)&&!wl(h,y))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?yd(r,o,h):!0:!!o;return!1}function yd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(!Oe(t,i)||vm(e,t,i)&&!wl(n,i))return!0}return!1}function vm(t,e,n){const r=t[n],s=e[n];return n==="style"&&Be(r)&&Be(s)?!fr(r,s):r!==s}function jv({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const wm={},Em=()=>Object.create(wm),Tm=t=>Object.getPrototypeOf(t)===wm;function qv(t,e,n,r=!1){const s={},i=Em();t.propsDefaults=Object.create(null),Im(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Gy(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function zv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Le(s),[c]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let g=0;g<f.length;g++){let y=f[g];if(wl(t.emitsOptions,y))continue;const P=e[y];if(c)if(Oe(i,y))P!==i[y]&&(i[y]=P,h=!0);else{const V=wn(y);s[V]=zc(c,l,V,P,t,!1)}else P!==i[y]&&(i[y]=P,h=!0)}}}else{Im(t,e,s,i)&&(h=!0);let f;for(const g in l)(!e||!Oe(e,g)&&((f=Zr(g))===g||!Oe(e,f)))&&(c?n&&(n[g]!==void 0||n[f]!==void 0)&&(s[g]=zc(c,l,g,void 0,t,!0)):delete s[g]);if(i!==l)for(const g in i)(!e||!Oe(e,g))&&(delete i[g],h=!0)}h&&ar(t.attrs,"set","")}function Im(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Gi(c))continue;const h=e[c];let f;s&&Oe(s,f=wn(c))?!i||!i.includes(f)?n[f]=h:(l||(l={}))[f]=h:wl(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,o=!0)}if(i){const c=Le(n),h=l||We;for(let f=0;f<i.length;f++){const g=i[f];n[g]=zc(s,c,g,h[g],t,!Oe(h,g))}}return o}function zc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Oe(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Ee(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=Vo(s);r=h[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Zr(n))&&(r=!0))}return r}const Hv=new WeakMap;function bm(t,e,n=!1){const r=n?Hv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!Ee(t)){const f=g=>{c=!0;const[y,P]=bm(g,e,!0);gt(o,y),P&&l.push(...P)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Be(t)&&r.set(t,_s),_s;if(ue(i))for(let f=0;f<i.length;f++){const g=wn(i[f]);vd(g)&&(o[g]=We)}else if(i)for(const f in i){const g=wn(f);if(vd(g)){const y=i[f],P=o[g]=ue(y)||Ee(y)?{type:y}:gt({},y),V=P.type;let x=!1,L=!0;if(ue(V))for(let Y=0;Y<V.length;++Y){const W=V[Y],ne=Ee(W)&&W.name;if(ne==="Boolean"){x=!0;break}else ne==="String"&&(L=!1)}else x=Ee(V)&&V.name==="Boolean";P[0]=x,P[1]=L,(x||Oe(P,"default"))&&l.push(g)}}const h=[o,l];return Be(t)&&r.set(t,h),h}function vd(t){return t[0]!=="$"&&!Gi(t)}const Ou=t=>t==="_"||t==="_ctx"||t==="$stable",Mu=t=>ue(t)?t.map(Un):[Un(t)],Wv=(t,e,n)=>{if(e._n)return e;const r=ov((...s)=>Mu(e(...s)),n);return r._c=!1,r},Am=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ou(s))continue;const i=t[s];if(Ee(i))e[s]=Wv(s,i,r);else if(i!=null){const o=Mu(i);e[s]=()=>o}}},Sm=(t,e)=>{const n=Mu(e);t.slots.default=()=>n},Cm=(t,e,n)=>{for(const r in e)(n||!Ou(r))&&(t[r]=e[r])},Kv=(t,e,n)=>{const r=t.slots=Em();if(t.vnode.shapeFlag&32){const s=e._;s?(Cm(r,e,n),n&&Vp(r,"_",s,!0)):Am(e,r)}else e&&Sm(t,e)},Gv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=We;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Cm(s,e,n):(i=!e.$stable,Am(e,s)),o=e}else e&&(Sm(t,e),o={default:1});if(i)for(const l in s)!Ou(l)&&o[l]==null&&delete s[l]},xt=ew;function Qv(t){return Jv(t)}function Jv(t,e){const n=gl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:h,setElementText:f,parentNode:g,nextSibling:y,setScopeId:P=jn,insertStaticContent:V}=t,x=(E,C,O,H=null,B=null,z=null,J=void 0,X=null,G=!!C.dynamicChildren)=>{if(E===C)return;E&&!Mi(E,C)&&(H=$t(E),me(E,B,z,!0),E=null),C.patchFlag===-2&&(G=!1,C.dynamicChildren=null),C.dynamicChildren&&E&&E.dynamicChildren&&E.dynamicChildren.hasOnce&&(C.dynamicChildren===_s&&(C.dynamicChildren=[]),C.dynamicChildren.hasOnce=!0);const{type:j,ref:ie,shapeFlag:te}=C;switch(j){case El:L(E,C,O,H);break;case Sn:Y(E,C,O,H);break;case hc:E==null&&W(C,O,H,J);break;case Me:D(E,C,O,H,B,z,J,X,G);break;default:te&1?he(E,C,O,H,B,z,J,X,G):te&6?b(E,C,O,H,B,z,J,X,G):(te&64||te&128)&&j.process(E,C,O,H,B,z,J,X,G,Xt)}ie!=null&&B?Zi(ie,E&&E.ref,z,C||E,!C):ie==null&&E&&E.ref!=null&&Zi(E.ref,null,z,E,!0)},L=(E,C,O,H)=>{if(E==null)r(C.el=l(C.children),O,H);else{const B=C.el=E.el;C.children!==E.children&&h(B,C.children)}},Y=(E,C,O,H)=>{E==null?r(C.el=c(C.children||""),O,H):C.el=E.el},W=(E,C,O,H)=>{[E.el,E.anchor]=V(E.children,C,O,H,E.el,E.anchor)},ne=({el:E,anchor:C},O,H)=>{let B;for(;E&&E!==C;)B=y(E),r(E,O,H),E=B;r(C,O,H)},Q=({el:E,anchor:C})=>{let O;for(;E&&E!==C;)O=y(E),s(E),E=O;s(C)},he=(E,C,O,H,B,z,J,X,G)=>{if(C.type==="svg"?J="svg":C.type==="math"&&(J="mathml"),E==null)be(C,O,H,B,z,J,X,G);else{const j=E.el&&E.el._isVueCE?E.el:null;try{j&&j._beginPatch(),T(E,C,B,z,J,X,G)}finally{j&&j._endPatch()}}},be=(E,C,O,H,B,z,J,X)=>{let G,j;const{props:ie,shapeFlag:te,transition:ae,dirs:de}=E;if(G=E.el=o(E.type,z,ie&&ie.is,ie),te&8?f(G,E.children):te&16&&v(E.children,G,null,H,B,uc(E,z),J,X),de&&us(E,null,H,"created"),S(G,E,E.scopeId,J,H),ie){for(const _e in ie)_e!=="value"&&!Gi(_e)&&i(G,_e,null,ie[_e],z,H);"value"in ie&&i(G,"value",null,ie.value,z),(j=ie.onVnodeBeforeMount)&&On(j,H,E)}de&&us(E,null,H,"beforeMount");const Te=Xv(B,ae);Te?ae.beforeEnter(G):ae&&!ae.persisted&&(G[Zv]=!0),r(G,C,O),((j=ie&&ie.onVnodeMounted)||Te||de)&&xt(()=>{try{j&&On(j,H,E),Te&&ae.enter(G),de&&us(E,null,H,"mounted")}finally{}},B)},S=(E,C,O,H,B)=>{if(O&&P(E,O),H)for(let z=0;z<H.length;z++)P(E,H[z]);if(B){let z=B.subTree;if(C===z||Pm(z.type)&&(z.ssContent===C||z.ssFallback===C)){const J=B.vnode;S(E,J,J.scopeId,J.slotScopeIds,B.parent)}}},v=(E,C,O,H,B,z,J,X,G=0)=>{for(let j=G;j<E.length;j++){const ie=E[j]=X?or(E[j]):Un(E[j]);x(null,ie,C,O,H,B,z,J,X)}},T=(E,C,O,H,B,z,J)=>{const X=C.el=E.el;let{patchFlag:G,dynamicChildren:j,dirs:ie}=C;G|=E.patchFlag&16;const te=E.props||We,ae=C.props||We;let de;if(O&&hs(O,!1),(de=ae.onVnodeBeforeUpdate)&&On(de,O,C,E),ie&&us(C,E,O,"beforeUpdate"),O&&hs(O,!0),j&&(!E.dynamicChildren||E.dynamicChildren.length!==j.length)&&(G=0,J=!1,j=null),(te.innerHTML&&ae.innerHTML==null||te.textContent&&ae.textContent==null)&&f(X,""),j?R(E.dynamicChildren,j,X,O,H,uc(C,B),z):J||Pe(E,C,X,null,O,H,uc(C,B),z,!1),G>0){if(G&16)k(X,te,ae,O,B);else if(G&2&&te.class!==ae.class&&i(X,"class",null,ae.class,B),G&4&&i(X,"style",te.style,ae.style,B),G&8){const Te=C.dynamicProps;for(let _e=0;_e<Te.length;_e++){const ye=Te[_e],Ue=te[ye],rt=ae[ye];(rt!==Ue||ye==="value")&&i(X,ye,Ue,rt,B,O)}}G&1&&E.children!==C.children&&f(X,C.children)}else!J&&j==null&&k(X,te,ae,O,B);((de=ae.onVnodeUpdated)||ie)&&xt(()=>{de&&On(de,O,C,E),ie&&us(C,E,O,"updated")},H)},R=(E,C,O,H,B,z,J)=>{for(let X=0;X<C.length;X++){const G=E[X],j=C[X],ie=G.el||no(G),te=ie&&(G.type===Me||!Mi(G,j)||G.shapeFlag&198)?g(ie):O;x(G,j,te,null,H,B,z,J,!0)}},k=(E,C,O,H,B)=>{if(C!==O){if(C!==We)for(const z in C)!Gi(z)&&!(z in O)&&i(E,z,C[z],null,B,H);for(const z in O){if(Gi(z))continue;const J=O[z],X=C[z];J!==X&&z!=="value"&&i(E,z,X,J,B,H)}"value"in O&&i(E,"value",C.value,O.value,B)}},D=(E,C,O,H,B,z,J,X,G)=>{const j=C.el=E?E.el:l(""),ie=C.anchor=E?E.anchor:l("");let{patchFlag:te,dynamicChildren:ae,slotScopeIds:de}=C;de&&(X=X?X.concat(de):de),E==null?(r(j,O,H),r(ie,O,H),v(C.children||[],O,ie,B,z,J,X,G)):te>0&&te&64&&ae&&E.dynamicChildren&&E.dynamicChildren.length===ae.length?(R(E.dynamicChildren,ae,O,B,z,J,X),(C.key!=null||B&&C===B.subTree)&&Lu(E,C,!0)):Pe(E,C,O,ie,B,z,J,X,G)},b=(E,C,O,H,B,z,J,X,G)=>{C.slotScopeIds=X,E==null?C.shapeFlag&512?B.ctx.activate(C,O,H,J,G):Ye(C,O,H,B,z,J,G):Jt(E,C,G)},Ye=(E,C,O,H,B,z,J)=>{const X=E.component=ow(E,H,B);if(xu(E)&&(X.ctx.renderer=Xt),lw(X,!1,J),X.asyncDep){if(B&&B.registerDep(X,nt,J,z),!E.el){const G=X.subTree=fe(Sn);Y(null,G,C,O),E.placeholder=G.el}}else nt(X,E,C,O,B,z,J)},Jt=(E,C,O)=>{const H=C.component=E.component;if(Bv(E,C,O))if(H.asyncDep&&!H.asyncResolved){C.el=E.el,C.placeholder=E.placeholder,Ve(H,C,O);return}else H.next=C,H.update();else C.el=E.el,C.placeholder=E.placeholder,H.vnode=C},nt=(E,C,O,H,B,z,J)=>{const X=()=>{if(E.isMounted){let{next:te,bu:ae,u:de,parent:Te,vnode:_e}=E;{const Bt=Rm(E);if(Bt){te&&(te.el=_e.el,Ve(E,te,J)),Bt.asyncDep.then(()=>{const _t=()=>{E.job.flags&8||(B&&B.pendingBranch?xt(_t,B):j())};_t.flags=48,xt(_t,B)});return}}let ye=te,Ue;hs(E,!1),te?(te.el=_e.el,Ve(E,te,J)):te=_e,ae&&Sa(ae),(Ue=te.props&&te.props.onVnodeBeforeUpdate)&&On(Ue,Te,te,_e),hs(E,!0);const rt=_d(E),Rt=E.subTree;E.subTree=rt,x(Rt,rt,g(Rt.el||no(Rt)),$t(Rt),E,B,z),te.el=rt.el,ye===null&&jv(E,rt.el),de&&xt(de,B),(Ue=te.props&&te.props.onVnodeUpdated)&&xt(()=>On(Ue,Te,te,_e),B)}else{let te;const{el:ae,props:de}=C,{bm:Te,m:_e,parent:ye,root:Ue,type:rt}=E,Rt=eo(C);hs(E,!1),Te&&Sa(Te),!Rt&&(te=de&&de.onVnodeBeforeMount)&&On(te,ye,C),hs(E,!0);{Ue.ce&&Ue.ce._hasShadowRoot()&&Ue.ce._injectChildStyle(rt,E.parent?E.parent.type:void 0);const Bt=E.subTree=_d(E);x(null,Bt,O,H,E,B,z),C.el=Bt.el}if(_e&&xt(_e,B),!Rt&&(te=de&&de.onVnodeMounted)){const Bt=C;xt(()=>On(te,ye,Bt),B)}(C.shapeFlag&256||ye&&eo(ye.vnode)&&ye.vnode.shapeFlag&256)&&E.a&&xt(E.a,B),E.isMounted=!0,C=O=H=null}};E.scope.on();const G=E.effect=new Lp(X);E.scope.off();const j=E.update=G.run.bind(G),ie=E.job=G.runIfDirty.bind(G);ie.i=E,ie.id=E.uid,G.scheduler=()=>Nu(ie),hs(E,!0),j()},Ve=(E,C,O)=>{C.component=E;const H=E.vnode.props;E.vnode=C,E.next=null,zv(E,C.props,H,O),Gv(E,C.children,O),Qn(),nm(E),Jn()},Pe=(E,C,O,H,B,z,J,X,G=!1)=>{const j=E&&E.children,ie=E?E.shapeFlag:0,te=C.children,{patchFlag:ae,shapeFlag:de}=C;if(ae>0){if(ae&128){er(j,te,O,H,B,z,J,X,G);return}else if(ae&256){Ht(j,te,O,H,B,z,J,X,G);return}}de&8?(ie&16&&Wt(j,B,z),te!==j&&f(O,te)):ie&16?de&16?er(j,te,O,H,B,z,J,X,G):Wt(j,B,z,!0):(ie&8&&f(O,""),de&16&&v(te,O,H,B,z,J,X,G))},Ht=(E,C,O,H,B,z,J,X,G)=>{E=E||_s,C=C||_s;const j=E.length,ie=C.length,te=Math.min(j,ie);let ae;for(ae=0;ae<te;ae++){const de=C[ae]=G?or(C[ae]):Un(C[ae]);x(E[ae],de,O,null,B,z,J,X,G)}j>ie?Wt(E,B,z,!0,!1,te):v(C,O,H,B,z,J,X,G,te)},er=(E,C,O,H,B,z,J,X,G)=>{let j=0;const ie=C.length;let te=E.length-1,ae=ie-1;for(;j<=te&&j<=ae;){const de=E[j],Te=C[j]=G?or(C[j]):Un(C[j]);if(Mi(de,Te))x(de,Te,O,null,B,z,J,X,G);else break;j++}for(;j<=te&&j<=ae;){const de=E[te],Te=C[ae]=G?or(C[ae]):Un(C[ae]);if(Mi(de,Te))x(de,Te,O,null,B,z,J,X,G);else break;te--,ae--}if(j>te){if(j<=ae){const de=ae+1,Te=de<ie?C[de].el:H;for(;j<=ae;)x(null,C[j]=G?or(C[j]):Un(C[j]),O,Te,B,z,J,X,G),j++}}else if(j>ae)for(;j<=te;)me(E[j],B,z,!0),j++;else{const de=j,Te=j,_e=new Map;for(j=Te;j<=ae;j++){const yt=C[j]=G?or(C[j]):Un(C[j]);yt.key!=null&&_e.set(yt.key,j)}let ye,Ue=0;const rt=ae-Te+1;let Rt=!1,Bt=0;const _t=new Array(rt);for(j=0;j<rt;j++)_t[j]=0;for(j=de;j<=te;j++){const yt=E[j];if(Ue>=rt){me(yt,B,z,!0);continue}let Pt;if(yt.key!=null)Pt=_e.get(yt.key);else for(ye=Te;ye<=ae;ye++)if(_t[ye-Te]===0&&Mi(yt,C[ye])){Pt=ye;break}Pt===void 0?me(yt,B,z,!0):(_t[Pt-Te]=j+1,Pt>=Bt?Bt=Pt:Rt=!0,x(yt,C[Pt],O,null,B,z,J,X,G),Ue++)}const wr=Rt?Yv(_t):_s;for(ye=wr.length-1,j=rt-1;j>=0;j--){const yt=Te+j,Pt=C[yt],Er=C[yt+1],rs=yt+1<ie?Er.el||no(Er):H;_t[j]===0?x(null,Pt,O,rs,B,z,J,X,G):Rt&&(ye<0||j!==wr[ye]?ct(Pt,O,rs,2):ye--)}}},ct=(E,C,O,H,B=null)=>{const{el:z,type:J,transition:X,children:G,shapeFlag:j}=E;if(j&6){ct(E.component.subTree,C,O,H);return}if(j&128){E.suspense.move(C,O,H);return}if(j&64){J.move(E,C,O,Xt);return}if(J===Me){r(z,C,O);for(let te=0;te<G.length;te++)ct(G[te],C,O,H);r(E.anchor,C,O);return}if(J===hc){ne(E,C,O);return}if(H!==2&&j&1&&X)if(H===0)X.persisted&&!z[lc]?r(z,C,O):(X.beforeEnter(z),r(z,C,O),xt(()=>X.enter(z),B));else{const{leave:te,delayLeave:ae,afterLeave:de}=X,Te=()=>{E.ctx.isUnmounted?s(z):r(z,C,O)},_e=()=>{const ye=z._isLeaving||!!z[lc];z._isLeaving&&z[lc](!0),X.persisted&&!ye?Te():te(z,()=>{Te(),de&&de()})};ae?ae(z,Te,_e):_e()}else r(z,C,O)},me=(E,C,O,H=!1,B=!1)=>{const{type:z,props:J,ref:X,children:G,dynamicChildren:j,shapeFlag:ie,patchFlag:te,dirs:ae,cacheIndex:de,memo:Te}=E;if((te===-2||j&&j.hasOnce)&&(B=!1),X!=null&&(Qn(),Zi(X,null,O,E,!0),Jn()),de!=null&&(!E.ctx||E.ctx===C)&&(C.renderCache[de]=void 0),ie&256&&C.ctx.deactivate(E))return;const _e=ie&1&&ae,ye=!eo(E);let Ue;if(ye&&(Ue=J&&J.onVnodeBeforeUnmount)&&On(Ue,C,E),ie&6)fn(E.component,O,H);else{if(ie&128){E.suspense.unmount(O,H);return}_e&&us(E,null,C,"beforeUnmount"),ie&64?E.type.remove(E,C,O,Xt,H):j&&!j.hasOnce&&(z!==Me||te>0&&te&64)?Wt(j,C,O,!1,!0):(z===Me&&te&384||!B&&ie&16)&&Wt(G,C,O),H&&Ze(E)}const rt=Te!=null&&de==null;(ye&&(Ue=J&&J.onVnodeUnmounted)||_e||rt)&&xt(()=>{Ue&&On(Ue,C,E),_e&&us(E,null,C,"unmounted"),rt&&(E.el=null)},O)},Ze=E=>{const{type:C,el:O,anchor:H,transition:B}=E,z=C===Me;if(z&&!B){Rn(O,H);return}if(C===hc){Q(E),B&&!B.persisted&&B.afterLeave&&B.afterLeave();return}const J=z?$c(E):E,X=()=>{z?g(O)&&Rn(O,H):s(O),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(J&&J.shapeFlag&1&&B&&!B.persisted){const{leave:G,delayLeave:j}=B,ie=J.el,te=()=>G(ie,X);j?j(ie,X,te):te()}else X()},Rn=(E,C)=>{let O;for(;E!==C;)O=y(E),s(E),E=O;s(C)},fn=(E,C,O)=>{const{bum:H,scope:B,job:z,subTree:J,um:X,m:G,a:j}=E;wd(G),wd(j),H&&Sa(H),B.stop(),z?(z.flags|=8,me(J,E,C,O)):J&&(J.transition=E.vnode.transition,me(J,E,C,O)),X&&xt(X,C);const ie=()=>{E.isUnmounted=!0};ie.flags=16,xt(ie,C)},Wt=(E,C,O,H=!1,B=!1,z=0)=>{for(let J=z;J<E.length;J++)me(E[J],C,O,H,B)},$t=E=>{if(E.shapeFlag&6)return $t(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const C=y(E.anchor||E.el),O=C&&C[lm];return O?y(O):C},pn=(E,C,O)=>{const H=E&&C._vnode?void 0:E&&E.component?E.component.uid:iw();iv(()=>{E==null?C._vnode&&me(C._vnode,null,null,!0):x(C._vnode||null,E,C,null,null,null,O),C._vnode=E},H)},Xt={p:x,um:me,m:ct,r:Ze,mt:Ye,mc:v,pc:Pe,pbc:R,n:$t,o:t};return{render:pn,hydrate:void 0,createApp:Ov(pn)}}function uc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function hs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Xv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Lu(t,e,n=!1){const r=t.children,s=e.children;if(ue(r)&&ue(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=or(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Lu(o,l)),l.type===El&&(l.patchFlag===-1&&(l=s[i]=or(l)),l.el=o.el),l.type===Sn&&!l.el&&(l.el=o.el)}}function Yv(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<h?i=l+1:o=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Rm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Rm(e)}function wd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function no(t){if(t.placeholder)return t.placeholder;const e=t.component;if(e)return no(e.subTree);const n=t.suspense;return n&&n.activeBranch?no(n.activeBranch):null}const Pm=t=>t.__isSuspense,Zv=Symbol("_deferredEnter");function ew(t,e){e&&e.pendingBranch?ue(t)?e.effects.push(...t):e.effects.push(t):sv(t)}const Me=Symbol.for("v-fgt"),El=Symbol.for("v-txt"),Sn=Symbol.for("v-cmt"),hc=Symbol.for("v-stc"),Es=[];let sn=null;function K(t=!1){Es.push(sn=t?null:[])}function km(){Es.pop(),sn=Es[Es.length-1]||null}let po=1;function Ha(t,e=!1){po+=t,t<0&&sn&&e&&(sn.hasOnce=!0)}function Dm(t){return t.dynamicChildren=po>0?sn||_s:null,km(),po>0&&sn&&sn.push(t),t}function Z(t,e,n,r,s,i){return Dm(w(t,e,n,r,s,i,!0))}function It(t,e,n,r,s){return Dm(fe(t,e,n,r,s,!0))}function mo(t){return t?t.__v_isVNode===!0:!1}function Mi(t,e){return t.type===e.type&&t.key===e.key}const Vm=({key:t})=>t??null,Ra=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?et(t)||Ft(t)||Ee(t)?{i:un,r:t,k:e,f:!!n}:t:null);function w(t,e=null,n=null,r=0,s=null,i=t===Me?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Vm(e),ref:e&&Ra(e),scopeId:im,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:un};return l?(Wa(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=et(n)?8:16),po>0&&!o&&sn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&sn.push(c),c}const fe=tw;function tw(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Cv)&&(t=Sn),mo(t)){const l=ri(t,e,!0);return n&&Wa(l,n),po>0&&!i&&sn&&(l.shapeFlag&6?sn[sn.indexOf(t)]=l:sn.push(l)),l.patchFlag=-2,l}if(dw(t)&&(t=t.__vccOpts),e){e=nw(e);let{class:l,style:c}=e;l&&!et(l)&&(e.class=je(l)),Be(c)&&(Du(c)&&!ue(c)&&(c=gt({},c)),e.style=ir(c))}const o=et(t)?1:Pm(t)?128:vl(t)?64:Be(t)?4:Ee(t)?2:0;return w(t,e,n,r,s,o,i,!0)}function nw(t){return t?Du(t)?gt({},t):Tm(t)?gt({},t[Mm]||t):t:null}function ri(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,h=e?rw(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Vm(h),ref:e&&e.ref?n&&i?ue(i)?i.concat(Ra(e)):[i,Ra(e)]:Ra(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Me?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ri(t.ssContent),ssFallback:t.ssFallback&&ri(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce,cacheIndex:t.cacheIndex};return c&&r&&Yi(f,c.clone(f)),f}function ut(t=" ",e=0){return fe(El,null,t,e)}function $e(t="",e=!1){return e?(K(),It(Sn,null,t)):fe(Sn,null,t)}function Un(t){return t==null||typeof t=="boolean"?fe(Sn):ue(t)?fe(Me,null,t.slice()):mo(t)?or(t):fe(El,null,String(t))}function or(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ri(t)}function Wa(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ue(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Wa(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Tm(e)?e._ctx=un:s===3&&un&&(un.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(Ee(e)){if(r&65){Wa(t,{default:e});return}e={default:e,_ctx:un},n=32}else e=String(e),r&64?(n=16,e=[ut(e)]):n=8;t.children=e,t.shapeFlag|=n}function rw(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=je([e.class,r.class]));else if(s==="style")e.style=ir([e.style,r.style]);else if(fl(s)){const i=e[s],o=r[s];o&&i!==o&&!(ue(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!pl(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function On(t,e,n,r=null){An(t,e,7,[n,r])}const sw=gm();let Nm=0;function iw(){return Nm}function ow(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||sw,i={uid:Nm++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Mp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bm(r,s),emitsOptions:_m(r,s),emit:null,emitted:null,propsDefaults:We,inheritAttrs:r.inheritAttrs,ctx:We,data:We,props:We,attrs:We,slots:We,refs:We,setupState:We,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Lv.bind(null,i),t.ce&&t.ce(i),i}let zt=null;const aw=()=>zt||un;let Ka,go;{const t=gl(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ka=e("__VUE_INSTANCE_SETTERS__",n=>zt=n),go=e("__VUE_SSR_SETTERS__",n=>_o=n)}const Vo=t=>{const e=zt;return Ka(t),t.scope.on(),()=>{t.scope.off(),Ka(e)}},Ed=()=>{zt&&zt.scope.off(),Ka(null)};function xm(t){return t.vnode.shapeFlag&4}let _o=!1;function lw(t,e=!1,n=!1){e&&go(e);const{props:r,children:s}=t.vnode,i=xm(t);qv(t,r,i,e),Kv(t,s,n||e);const o=i?cw(t,e):void 0;return e&&go(!1),o}function cw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Rv);const{setup:r}=n;if(r){Qn();const s=t.setupContext=r.length>1?hw(t):null,i=Vo(t),o=Do(r,t,0,[t.props,s]),l=Rp(o);if(Jn(),i(),(l||t.sp)&&!eo(t)&&um(t),l){if(o.then(Ed,Ed),e)return o.then(c=>{go(!0);try{Td(t,c,e)}finally{go(!1)}}).catch(c=>{yl(c,t,0,void 0,!0),t.ssrRender=(h,f)=>f("<!---->")});t.asyncDep=o}else Td(t,o)}else Om(t)}function Td(t,e,n){Ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Be(e)&&(t.setupState=Zp(e)),Om(t)}function Om(t,e,n){const r=t.type;t.render||(t.render=r.render||jn);{const s=Vo(t);Qn();try{Pv(t)}finally{Jn(),s()}}}const Mm=Symbol(),uw={get(t,e){return Mt(t,"get",""),e===Mm?t:t[e]}};function hw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,uw),slots:t.slots,emit:t.emit,expose:e}}function Tl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Zp(Yp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in to)return to[n](t)},has(e,n){return n in e||n in to}})):t.proxy}function dw(t){return Ee(t)&&"__vccOpts"in t}const vt=(t,e)=>Zy(t,e,_o);function Hc(t,e,n){try{Ha(-1);const r=arguments.length;return r===2?Be(e)&&!ue(e)?mo(e)?fe(t,null,[e]):fe(t,e):fe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&mo(n)&&(n=[n]),fe(t,e,n))}finally{Ha(1)}}const fw="3.5.45";/**
* @vue/runtime-dom v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wc;const Id=typeof window<"u"&&window.trustedTypes;if(Id)try{Wc=Id.createPolicy("vue",{createHTML:t=>t})}catch{}const Lm=Wc?t=>Wc.createHTML(t):t=>t,pw="http://www.w3.org/2000/svg",mw="http://www.w3.org/1998/Math/MathML",sr=typeof document<"u"?document:null,bd=sr&&sr.createElement("template"),gw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?sr.createElementNS(pw,t):e==="mathml"?sr.createElementNS(mw,t):n?sr.createElement(t,{is:n}):sr.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>sr.createTextNode(t),createComment:t=>sr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>sr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{bd.innerHTML=Lm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=bd.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},_w=Symbol("_vtc");function yw(t,e,n){const r=t[_w];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ad=Symbol("_vod"),vw=Symbol("_vsh"),ww=Symbol(""),Ew=/(?:^|;)\s*display\s*:/;function Tw(t,e,n){const r=t.style,s=et(n);let i=!1;if(n&&!s){if(e)if(et(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&qi(r,l,"")}else for(const o in e)n[o]==null&&qi(r,o,"");for(const o in n){o==="display"&&(i=!0);const l=n[o];l!=null?bw(t,o,!et(e)&&e?e[o]:void 0,l)||qi(r,o,l):qi(r,o,"")}}else if(s){if(e!==n){const o=r[ww];o&&(n+=";"+o),r.cssText=n,i=Ew.test(n)}}else e&&t.removeAttribute("style");Ad in t&&((!s||e!==n)&&(t[Ad]=i?r.display:""),t[vw]&&(r.display="none"))}const ga=/\s*!important$/;function qi(t,e,n){if(ue(n))n.forEach(r=>qi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))ga.test(n)?t.setProperty(e,n.replace(ga,""),"important"):t.setProperty(e,n);else{const r=Iw(t,e);ga.test(n)?t.setProperty(Zr(r),n.replace(ga,""),"important"):t[r]=n}}const Sd=["Webkit","Moz","ms"],dc={};function Iw(t,e){const n=dc[e];if(n)return n;let r=wn(e);if(r!=="filter"&&r in t)return dc[e]=r;r=Dp(r);for(let s=0;s<Sd.length;s++){const i=Sd[s]+r;if(i in t)return dc[e]=i}return e}function bw(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&et(r)&&n===r}const Cd="http://www.w3.org/1999/xlink";function Rd(t,e,n,r,s,i=Cy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Cd,e.slice(6,e.length)):t.setAttributeNS(Cd,e,n):n==null||i&&!Np(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Gn(n)?String(n):n)}function Pd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Lm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Np(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Vr(t,e,n,r){t.addEventListener(e,n,r)}function Aw(t,e,n,r){t.removeEventListener(e,n,r)}const kd=Symbol("_vei");function Sw(t,e,n,r,s=null){const i=t[kd]||(t[kd]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=Pw(e);if(r){const h=i[e]=Vw(r,s);Vr(t,l,h,c)}else o&&(Aw(t,l,o,c),i[e]=void 0)}}const Cw=/(Once|Passive|Capture)$/,Rw=/^on:?(?:Once|Passive|Capture)$/;function Pw(t){let e,n;for(;(n=t.match(Cw))&&!Rw.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):Zr(t.slice(2)),e]}let fc=0;const kw=Promise.resolve(),Dw=()=>fc||(kw.then(()=>fc=0),fc=Date.now());function Vw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(ue(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const o=s.slice(),l=[r];for(let c=0;c<o.length&&!r._stopped;c++){const h=o[c];h&&An(h,e,5,l)}}else An(s,e,5,[r])};return n.value=t,n.attached=Dw(),n}const Dd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Nw=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?yw(t,r,o):e==="style"?Tw(t,n,r):fl(e)?pl(e)||Sw(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):xw(t,e,r,o))?(Pd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Rd(t,e,r,o,i,e!=="value")):t._isVueCE&&(Ow(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!et(r)))?Pd(t,wn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Rd(t,e,r,o))};function xw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Dd(e)&&Ee(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Dd(e)&&et(n)?!1:e in t}function Ow(t,e){const n=t._def.props;if(!n)return!1;const r=wn(e);return Array.isArray(n)?n.some(s=>wn(s)===r):Object.keys(n).some(s=>wn(s)===r)}const si=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ue(e)?n=>Sa(e,n):e};function Mw(t){t.target.composing=!0}function Vd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Bn=Symbol("_assign"),_a=Symbol("_initialValue");function pc(t,e,n){return e&&(t=t.trim()),n&&(t=ko(t)),t}const ds={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t.parentNode&&(t.type==="text"?t[_a]=t.defaultValue.replace(/[\r\n]/g,""):t.type==="textarea"&&(t[_a]=t.defaultValue.replace(/\r\n?/g,`
`))),t[Bn]=si(s);const i=r||s.props&&s.props.type==="number";Vr(t,e?"change":"input",o=>{o.target.composing||t[Bn](pc(t.value,n,i))}),(n||i)&&Vr(t,"change",()=>{t.value=pc(t.value,n,i)}),e||(Vr(t,"compositionstart",Mw),Vr(t,"compositionend",Vd),Vr(t,"change",Vd))},mounted(t,{value:e,modifiers:{trim:n,number:r}}){const s=e??"",i=t[_a];delete t[_a],i!==void 0&&(t.type==="text"||t.type==="textarea")&&t.value!==i?t[Bn](pc(t.value,n,r)):t.value=s},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Bn]=si(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?ko(t.value):t.value,c=e??"";if(l===c)return;const h=t.getRootNode();(h instanceof Document||h instanceof ShadowRoot)&&h.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c)}},mc={deep:!0,created(t,e,n){t[Bn]=si(n),Vr(t,"change",()=>{const r=t._modelValue,s=yo(t),i=t.checked,o=t[Bn];if(ue(r)){const l=Iu(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const h=[...r];h.splice(l,1),o(h)}}else if(dr(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(Fm(t,i))})},mounted:Nd,beforeUpdate(t,e,n){t[Bn]=si(n),Nd(t,e,n)}};function Nd(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ue(e))s=Iu(e,r.props.value)>-1;else if(dr(e))s=e.has(r.props.value);else{if(e===n)return;s=fr(e,Fm(t,!0))}t.checked!==s&&(t.checked=s)}const xd={deep:!0,created(t,{value:e,modifiers:{number:n}},r){t._modelValue=e,Vr(t,"change",()=>{const s=Array.prototype.filter.call(t.options,c=>c.selected).map(c=>n?ko(yo(c)):yo(c)),i=t.multiple,o=i?dr(t._modelValue)?new Set(s):s:s[0],l=t._pendingValue=[i,i?ue(o)?s.slice():s:o];try{t[Bn](o)}finally{Vu(()=>{t._pendingValue===l&&(t._pendingValue=void 0)})}}),t[Bn]=si(r)},mounted(t,{value:e,modifiers:{number:n}}){Od(t,e,n)},beforeUpdate(t,{value:e},n){t._modelValue=e,t[Bn]=si(n)},updated(t,{value:e,modifiers:{number:n}}){const r=t._pendingValue;t._pendingValue=void 0,(!r||r[0]!==t.multiple||!Lw(e,r[1],r[0]))&&Od(t,e,n)}};function Lw(t,e,n){if(!n||ue(t))return fr(t,e);if(dr(t)){if(t.size!==e.length)return!1;for(const r of e)if(!t.has(r))return!1;return!0}return!1}function Od(t,e,n=!1){const r=t.multiple,s=ue(e);if(!(r&&!s&&!dr(e))){for(let i=0,o=t.options.length;i<o;i++){const l=t.options[i],c=yo(l);if(r)if(s){const h=typeof c;h==="string"||h==="number"?l.selected=e.some(f=>String(f)===String(c)):l.selected=Iu(e,c)>-1}else l.selected=e.has(c)||n&&typeof c=="string"&&e.has(ko(c));else if(fr(yo(l),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function yo(t){return"_value"in t?t._value:t.value}function Fm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Fw=["ctrl","shift","alt","meta"],Uw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Fw.some(n=>t[`${n}Key`]&&!e.includes(n))},rn=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const l=Uw[e[o]];if(l&&l(s,e))return}return t(s,...i)}))},$w={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Bw=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=(s=>{if(!("key"in s))return;const i=Zr(s.key);if(e.some(o=>o===i||$w[o]===i))return t(s)}))},jw=gt({patchProp:Nw},gw);let Md;function qw(){return Md||(Md=Qv(jw))}const zw=((...t)=>{const e=qw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Ww(r);if(!s)return;const i=e._component;!Ee(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Hw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function Hw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Ww(t){return et(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Kw=Symbol();var Ld;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ld||(Ld={}));function Gw(){const t=ky(!0),e=t.run(()=>De({}));let n=[],r=[];const s=Yp({install(i){s._a=i,i.provide(Kw,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Qw="1.6.23",Jw={version:Qw},Xw=()=>{};var Fd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Yw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},$m={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,f=i>>2,g=(i&3)<<4|l>>4;let y=(l&15)<<2|h>>6,P=h&63;c||(P=64,o||(y=64)),r.push(n[f],n[g],n[y],n[P])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Um(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Yw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const g=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||g==null)throw new Zw;const y=i<<2|l>>4;if(r.push(y),h!==64){const P=l<<4&240|h>>2;if(r.push(P),g!==64){const V=h<<6&192|g;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Zw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eE=function(t){const e=Um(t);return $m.encodeByteArray(e,!0)},Ga=function(t){return eE(t).replace(/\./g,"")},Bm=function(t){try{return $m.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE=()=>tE().__FIREBASE_DEFAULTS__,rE=()=>{if(typeof process>"u"||typeof Fd>"u")return;const t=Fd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Bm(t[1]);return e&&JSON.parse(e)},Il=()=>{try{return Xw()||nE()||rE()||sE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},jm=t=>{var e,n;return(n=(e=Il())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},iE=t=>{const e=jm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},qm=()=>{var t;return(t=Il())===null||t===void 0?void 0:t.config},zm=t=>{var e;return(e=Il())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Hm(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ga(JSON.stringify(n)),Ga(JSON.stringify(o)),""].join(".")}const ro={};function lE(){const t={prod:[],emulator:[]};for(const e of Object.keys(ro))ro[e]?t.emulator.push(e):t.prod.push(e);return t}function cE(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Ud=!1;function Wm(t,e){if(typeof window>"u"||typeof document>"u"||!di(window.location.host)||ro[t]===e||ro[t]||Ud)return;ro[t]=e;function n(y){return`__firebase__banner__${y}`}const r="__firebase__banner",i=lE().prod.length>0;function o(){const y=document.getElementById(r);y&&y.remove()}function l(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function c(y,P){y.setAttribute("width","24"),y.setAttribute("id",P),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function h(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{Ud=!0,o()},y}function f(y,P){y.setAttribute("id",P),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function g(){const y=cE(r),P=n("text"),V=document.getElementById(P)||document.createElement("span"),x=n("learnmore"),L=document.getElementById(x)||document.createElement("a"),Y=n("preprendIcon"),W=document.getElementById(Y)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const ne=y.element;l(ne),f(L,x);const Q=h();c(W,Y),ne.append(W,V,L,Q),document.body.appendChild(ne)}i?(V.innerText="Preview backend disconnected.",W.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(W.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())}function hE(){var t;const e=(t=Il())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mE(){const t=Ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gE(){return!hE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _E(){try{return typeof indexedDB=="object"}catch{return!1}}function yE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE="FirebaseError";class vr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vE,Object.setPrototypeOf(this,vr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,No.prototype.create)}}class No{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?wE(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new vr(s,l,r)}}function wE(t,e){return t.replace(EE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const EE=/\{\$([^}]+)}/g;function TE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function bs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if($d(i)&&$d(o)){if(!bs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function $d(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function IE(t,e){const n=new bE(t,e);return n.subscribe.bind(n)}class bE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");AE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=gc),s.error===void 0&&(s.error=gc),s.complete===void 0&&(s.complete=gc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t){return t&&t._delegate?t._delegate:t}class As{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new oE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RE(e))try{this.getOrInitializeService({instanceIdentifier:ms})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ms){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ms){return this.instances.has(e)}getOptions(e=ms){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:CE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ms){return this.component?this.component.multipleInstances?e:ms:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CE(t){return t===ms?void 0:t}function RE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new SE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ce||(Ce={}));const kE={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},DE=Ce.INFO,VE={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},NE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=VE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fu{constructor(e){this.name=e,this._logLevel=DE,this._logHandler=NE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const xE=(t,e)=>e.some(n=>t instanceof n);let Bd,jd;function OE(){return Bd||(Bd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ME(){return jd||(jd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Km=new WeakMap,Kc=new WeakMap,Gm=new WeakMap,_c=new WeakMap,Uu=new WeakMap;function LE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ur(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Km.set(n,t)}).catch(()=>{}),Uu.set(e,t),e}function FE(t){if(Kc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Kc.set(t,e)}let Gc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Kc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Gm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ur(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function UE(t){Gc=t(Gc)}function $E(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(yc(this),e,...n);return Gm.set(r,e.sort?e.sort():[e]),Ur(r)}:ME().includes(t)?function(...e){return t.apply(yc(this),e),Ur(Km.get(this))}:function(...e){return Ur(t.apply(yc(this),e))}}function BE(t){return typeof t=="function"?$E(t):(t instanceof IDBTransaction&&FE(t),xE(t,OE())?new Proxy(t,Gc):t)}function Ur(t){if(t instanceof IDBRequest)return LE(t);if(_c.has(t))return _c.get(t);const e=BE(t);return e!==t&&(_c.set(t,e),Uu.set(e,t)),e}const yc=t=>Uu.get(t);function jE(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Ur(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ur(o.result),c.oldVersion,c.newVersion,Ur(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const qE=["get","getKey","getAll","getAllKeys","count"],zE=["put","add","delete","clear"],vc=new Map;function qd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vc.get(e))return vc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=zE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||qE.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return vc.set(e,i),i}UE(t=>({...t,get:(e,n,r)=>qd(e,n)||t.get(e,n,r),has:(e,n)=>!!qd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(WE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function WE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qc="@firebase/app",zd="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=new Fu("@firebase/app"),KE="@firebase/app-compat",GE="@firebase/analytics-compat",QE="@firebase/analytics",JE="@firebase/app-check-compat",XE="@firebase/app-check",YE="@firebase/auth",ZE="@firebase/auth-compat",eT="@firebase/database",tT="@firebase/data-connect",nT="@firebase/database-compat",rT="@firebase/functions",sT="@firebase/functions-compat",iT="@firebase/installations",oT="@firebase/installations-compat",aT="@firebase/messaging",lT="@firebase/messaging-compat",cT="@firebase/performance",uT="@firebase/performance-compat",hT="@firebase/remote-config",dT="@firebase/remote-config-compat",fT="@firebase/storage",pT="@firebase/storage-compat",mT="@firebase/firestore",gT="@firebase/ai",_T="@firebase/firestore-compat",yT="firebase",vT="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="[DEFAULT]",wT={[Qc]:"fire-core",[KE]:"fire-core-compat",[QE]:"fire-analytics",[GE]:"fire-analytics-compat",[XE]:"fire-app-check",[JE]:"fire-app-check-compat",[YE]:"fire-auth",[ZE]:"fire-auth-compat",[eT]:"fire-rtdb",[tT]:"fire-data-connect",[nT]:"fire-rtdb-compat",[rT]:"fire-fn",[sT]:"fire-fn-compat",[iT]:"fire-iid",[oT]:"fire-iid-compat",[aT]:"fire-fcm",[lT]:"fire-fcm-compat",[cT]:"fire-perf",[uT]:"fire-perf-compat",[hT]:"fire-rc",[dT]:"fire-rc-compat",[fT]:"fire-gcs",[pT]:"fire-gcs-compat",[mT]:"fire-fst",[_T]:"fire-fst-compat",[gT]:"fire-vertex","fire-js":"fire-js",[yT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa=new Map,ET=new Map,Xc=new Map;function Hd(t,e){try{t.container.addComponent(e)}catch(n){pr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ii(t){const e=t.name;if(Xc.has(e))return pr.debug(`There were multiple attempts to register component ${e}.`),!1;Xc.set(e,t);for(const n of Qa.values())Hd(n,t);for(const n of ET.values())Hd(n,t);return!0}function $u(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function yn(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$r=new No("app","Firebase",TT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new As("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $r.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=vT;function Qm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Jc,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw $r.create("bad-app-name",{appName:String(s)});if(n||(n=qm()),!n)throw $r.create("no-options");const i=Qa.get(s);if(i){if(bs(n,i.options)&&bs(r,i.config))return i;throw $r.create("duplicate-app",{appName:s})}const o=new PE(s);for(const c of Xc.values())o.addComponent(c);const l=new IT(n,r,o);return Qa.set(s,l),l}function Jm(t=Jc){const e=Qa.get(t);if(!e&&t===Jc&&qm())return Qm();if(!e)throw $r.create("no-app",{appName:t});return e}function Br(t,e,n){var r;let s=(r=wT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pr.warn(l.join(" "));return}ii(new As(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT="firebase-heartbeat-database",AT=1,vo="firebase-heartbeat-store";let wc=null;function Xm(){return wc||(wc=jE(bT,AT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(vo)}catch(n){console.warn(n)}}}}).catch(t=>{throw $r.create("idb-open",{originalErrorMessage:t.message})})),wc}async function ST(t){try{const n=(await Xm()).transaction(vo),r=await n.objectStore(vo).get(Ym(t));return await n.done,r}catch(e){if(e instanceof vr)pr.warn(e.message);else{const n=$r.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pr.warn(n.message)}}}async function Wd(t,e){try{const r=(await Xm()).transaction(vo,"readwrite");await r.objectStore(vo).put(e,Ym(t)),await r.done}catch(n){if(n instanceof vr)pr.warn(n.message);else{const r=$r.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pr.warn(r.message)}}}function Ym(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=1024,RT=30;class PT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new DT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Kd();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>RT){const o=VT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){pr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Kd(),{heartbeatsToSend:r,unsentEntries:s}=kT(this._heartbeatsCache.heartbeats),i=Ga(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return pr.warn(n),""}}}function Kd(){return new Date().toISOString().substring(0,10)}function kT(t,e=CT){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Gd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Gd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class DT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _E()?yE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ST(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Gd(t){return Ga(JSON.stringify({version:2,heartbeats:t})).length}function VT(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(t){ii(new As("platform-logger",e=>new HE(e),"PRIVATE")),ii(new As("heartbeat",e=>new PT(e),"PRIVATE")),Br(Qc,zd,t),Br(Qc,zd,"esm2017"),Br("fire-js","")}NT("");function Bu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Zm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xT=Zm,eg=new No("auth","Firebase",Zm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=new Fu("@firebase/auth");function OT(t,...e){Ja.logLevel<=Ce.WARN&&Ja.warn(`Auth (${fi}): ${t}`,...e)}function Pa(t,...e){Ja.logLevel<=Ce.ERROR&&Ja.error(`Auth (${fi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(t,...e){throw qu(t,...e)}function Tn(t,...e){return qu(t,...e)}function ju(t,e,n){const r=Object.assign(Object.assign({},xT()),{[e]:n});return new No("auth","Firebase",r).create(e,{appName:t.name})}function Ts(t){return ju(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function MT(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Yn(t,"argument-error"),ju(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function qu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return eg.create(t,...e)}function ge(t,e,...n){if(!t)throw qu(e,...n)}function ur(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Pa(e),new Error(e)}function mr(t,e){t||ur(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function LT(){return Qd()==="http:"||Qd()==="https:"}function Qd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(LT()||fE()||"connection"in navigator)?navigator.onLine:!0}function UT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n){this.shortDelay=e,this.longDelay=n,mr(n>e,"Short delay should be less than long delay!"),this.isMobile=uE()||pE()}get(){return FT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(t,e){mr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ur("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ur("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ur("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],jT=new Oo(3e4,6e4);function Hu(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function pi(t,e,n,r,s={}){return ng(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=xo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return dE()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&di(t.emulatorConfig.host)&&(h.credentials="include"),tg.fetch()(await rg(t,t.config.apiHost,n,l),h)})}async function ng(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},$T),e);try{const s=new zT(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ya(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ya(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ya(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ya(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw ju(t,f,h);Yn(t,f)}}catch(s){if(s instanceof vr)throw s;Yn(t,"network-request-failed",{message:String(s)})}}async function qT(t,e,n,r,s={}){const i=await pi(t,e,n,r,s);return"mfaPendingCredential"in i&&Yn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function rg(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?zu(t.config,s):`${t.config.apiScheme}://${s}`;return BT.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class zT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Tn(this.auth,"network-request-failed")),jT.get())})}}function ya(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Tn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HT(t,e){return pi(t,"POST","/v1/accounts:delete",e)}async function Xa(t,e){return pi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WT(t,e=!1){const n=Et(t),r=await n.getIdToken(e),s=Wu(r);ge(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:so(Ec(s.auth_time)),issuedAtTime:so(Ec(s.iat)),expirationTime:so(Ec(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ec(t){return Number(t)*1e3}function Wu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Pa("JWT malformed, contained fewer than 3 sections"),null;try{const s=Bm(n);return s?JSON.parse(s):(Pa("Failed to decode base64 JWT payload"),null)}catch(s){return Pa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Jd(t){const e=Wu(t);return ge(e,"internal-error"),ge(typeof e.exp<"u","internal-error"),ge(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vr&&KT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function KT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=so(this.lastLoginAt),this.creationTime=so(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ya(t){var e;const n=t.auth,r=await t.getIdToken(),s=await wo(t,Xa(n,{idToken:r}));ge(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?sg(i.providerUserInfo):[],l=JT(t.providerData,o),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?h:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Zc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,g)}async function QT(t){const e=Et(t);await Ya(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function JT(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function sg(t){return t.map(e=>{var{providerId:n}=e,r=Bu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XT(t,e){const n=await ng(t,{},async()=>{const r=xo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await rg(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&di(t.emulatorConfig.host)&&(c.credentials="include"),tg.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function YT(t,e){return pi(t,"POST","/v2/accounts:revokeToken",Hu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ge(e.idToken,"internal-error"),ge(typeof e.idToken<"u","internal-error"),ge(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ge(e.length!==0,"internal-error");const n=Jd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ge(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await XT(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ys;return r&&(ge(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ge(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ge(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ys,this.toJSON())}_performRefresh(){return ur("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(t,e){ge(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Bu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Zc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await wo(this,this.stsTokenManager.getToken(this.auth,e));return ge(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return WT(this,e)}reload(){return QT(this)}_assign(e){this!==e&&(ge(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ge(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ya(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yn(this.auth.app))return Promise.reject(Ts(this.auth));const e=await this.getIdToken();return await wo(this,HT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,h,f;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(s=n.email)!==null&&s!==void 0?s:void 0,P=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,V=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(l=n.tenantId)!==null&&l!==void 0?l:void 0,L=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,Y=(h=n.createdAt)!==null&&h!==void 0?h:void 0,W=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:ne,emailVerified:Q,isAnonymous:he,providerData:be,stsTokenManager:S}=n;ge(ne&&S,e,"internal-error");const v=Ys.fromJSON(this.name,S);ge(typeof ne=="string",e,"internal-error"),Pr(g,e.name),Pr(y,e.name),ge(typeof Q=="boolean",e,"internal-error"),ge(typeof he=="boolean",e,"internal-error"),Pr(P,e.name),Pr(V,e.name),Pr(x,e.name),Pr(L,e.name),Pr(Y,e.name),Pr(W,e.name);const T=new vn({uid:ne,auth:e,email:y,emailVerified:Q,displayName:g,isAnonymous:he,photoURL:V,phoneNumber:P,tenantId:x,stsTokenManager:v,createdAt:Y,lastLoginAt:W});return be&&Array.isArray(be)&&(T.providerData=be.map(R=>Object.assign({},R))),L&&(T._redirectEventId=L),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ys;s.updateFromServerResponse(n);const i=new vn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ya(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ge(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?sg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ys;l.updateFromIdToken(r);const c=new vn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Zc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd=new Map;function hr(t){mr(t instanceof Function,"Expected a class definition");let e=Xd.get(t);return e?(mr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ig.type="NONE";const Yd=ig;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(t,e,n){return`firebase:${t}:${e}:${n}`}class Zs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ka(this.userKey,s.apiKey,i),this.fullPersistenceKey=ka("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Xa(this.auth,{idToken:e}).catch(()=>{});return n?vn._fromGetAccountInfoResponse(this.auth,n,e):null}return vn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Zs(hr(Yd),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||hr(Yd);const o=ka(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let g;if(typeof f=="string"){const y=await Xa(e,{idToken:f}).catch(()=>{});if(!y)break;g=await vn._fromGetAccountInfoResponse(e,y,f)}else g=vn._fromJSON(e,f);h!==i&&(l=g),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Zs(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Zs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(og(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hg(e))return"Blackberry";if(dg(e))return"Webos";if(ag(e))return"Safari";if((e.includes("chrome/")||lg(e))&&!e.includes("edge/"))return"Chrome";if(ug(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function og(t=Ut()){return/firefox\//i.test(t)}function ag(t=Ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lg(t=Ut()){return/crios\//i.test(t)}function cg(t=Ut()){return/iemobile/i.test(t)}function ug(t=Ut()){return/android/i.test(t)}function hg(t=Ut()){return/blackberry/i.test(t)}function dg(t=Ut()){return/webos/i.test(t)}function Ku(t=Ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ZT(t=Ut()){var e;return Ku(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function eI(){return mE()&&document.documentMode===10}function fg(t=Ut()){return Ku(t)||ug(t)||dg(t)||hg(t)||/windows phone/i.test(t)||cg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(t,e=[]){let n;switch(t){case"Browser":n=Zd(Ut());break;case"Worker":n=`${Zd(Ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nI(t,e={}){return pi(t,"GET","/v2/passwordPolicy",Hu(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI=6;class sI{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:rI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ef(this),this.idTokenSubscription=new ef(this),this.beforeStateQueue=new tI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=eg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=hr(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Zs.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Xa(this,{idToken:e}),r=await vn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(yn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ge(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ya(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=UT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yn(this.app))return Promise.reject(Ts(this));const n=e?Et(e):null;return n&&ge(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ge(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yn(this.app)?Promise.reject(Ts(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yn(this.app)?Promise.reject(Ts(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(hr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nI(this),n=new sI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new No("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await YT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&hr(e)||this._popupRedirectResolver;ge(n,this,"argument-error"),this.redirectPersistenceManager=await Zs.create(this,[hr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ge(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ge(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(yn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&OT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function bl(t){return Et(t)}class ef{constructor(e){this.auth=e,this.observer=null,this.addObserver=IE(n=>this.observer=n)}get next(){return ge(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oI(t){Gu=t}function aI(t){return Gu.loadJS(t)}function lI(){return Gu.gapiScript}function cI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(t,e){const n=$u(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(bs(i,e??{}))return s;Yn(s,"already-initialized")}return n.initialize({options:e})}function hI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(hr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function dI(t,e,n){const r=bl(t);ge(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=mg(e),{host:o,port:l}=fI(e),c=l===null?"":`:${l}`,h={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ge(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ge(bs(h,r.config.emulator)&&bs(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,di(o)?(Hm(`${i}//${o}${c}`),Wm("Auth",!0)):pI()}function mg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function fI(t){const e=mg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:tf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:tf(o)}}}function tf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function pI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ur("not implemented")}_getIdTokenResponse(e){return ur("not implemented")}_linkToIdToken(e,n){return ur("not implemented")}_getReauthenticationResolver(e){return ur("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ei(t,e){return qT(t,"POST","/v1/accounts:signInWithIdp",Hu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI="http://localhost";class Ss extends gg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ss(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Bu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ss(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ei(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ei(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ei(e,n)}buildRequest(){const e={requestUri:mI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo extends Qu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends Mo{constructor(){super("facebook.com")}static credential(e){return Ss._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nr.credential(e.oauthAccessToken)}catch{return null}}}Nr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends Mo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ss._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return cr.credential(n,r)}catch{return null}}}cr.GOOGLE_SIGN_IN_METHOD="google.com";cr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends Mo{constructor(){super("github.com")}static credential(e){return Ss._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch{return null}}}xr.GITHUB_SIGN_IN_METHOD="github.com";xr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends Mo{constructor(){super("twitter.com")}static credential(e,n){return Ss._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Or.credential(n,r)}catch{return null}}}Or.TWITTER_SIGN_IN_METHOD="twitter.com";Or.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await vn._fromIdTokenResponse(e,r,s),o=nf(r);return new oi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=nf(r);return new oi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function nf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za extends vr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Za.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Za(e,n,r,s)}}function _g(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Za._fromErrorAndOperation(t,i,e,r):i})}async function gI(t,e,n=!1){const r=await wo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return oi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _I(t,e,n=!1){const{auth:r}=t;if(yn(r.app))return Promise.reject(Ts(r));const s="reauthenticate";try{const i=await wo(t,_g(r,s,e,t),n);ge(i.idToken,r,"internal-error");const o=Wu(i.idToken);ge(o,r,"internal-error");const{sub:l}=o;return ge(t.uid===l,r,"user-mismatch"),oi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Yn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yI(t,e,n=!1){if(yn(t.app))return Promise.reject(Ts(t));const r="signIn",s=await _g(t,r,e),i=await oi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function vI(t,e,n,r){return Et(t).onIdTokenChanged(e,n,r)}function wI(t,e,n){return Et(t).beforeAuthStateChanged(e,n)}function EI(t,e,n,r){return Et(t).onAuthStateChanged(e,n,r)}function TI(t){return Et(t).signOut()}const el="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(el,"1"),this.storage.removeItem(el),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=1e3,bI=10;class vg extends yg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);eI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,bI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},II)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}vg.type="LOCAL";const AI=vg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg extends yg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}wg.type="SESSION";const Eg=wg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Al(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),c=await SI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Al.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=Ju("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(g){const y=g;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(y.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(){return window}function RI(t){qn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(){return typeof qn().WorkerGlobalScope<"u"&&typeof qn().importScripts=="function"}async function PI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function DI(){return Tg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig="firebaseLocalStorageDb",VI=1,tl="firebaseLocalStorage",bg="fbase_key";class Lo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Sl(t,e){return t.transaction([tl],e?"readwrite":"readonly").objectStore(tl)}function NI(){const t=indexedDB.deleteDatabase(Ig);return new Lo(t).toPromise()}function eu(){const t=indexedDB.open(Ig,VI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(tl,{keyPath:bg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(tl)?e(r):(r.close(),await NI(),e(await eu()))})})}async function rf(t,e,n){const r=Sl(t,!0).put({[bg]:e,value:n});return new Lo(r).toPromise()}async function xI(t,e){const n=Sl(t,!1).get(e),r=await new Lo(n).toPromise();return r===void 0?null:r.value}function sf(t,e){const n=Sl(t,!0).delete(e);return new Lo(n).toPromise()}const OI=800,MI=3;class Ag{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await eu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>MI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Al._getInstance(DI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await PI(),!this.activeServiceWorker)return;this.sender=new CI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await eu();return await rf(e,el,"1"),await sf(e,el),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>rf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>xI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>sf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Sl(s,!1).getAll();return new Lo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),OI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ag.type="LOCAL";const LI=Ag;new Oo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(t,e){return e?hr(e):(ge(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu extends gg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ei(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ei(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ei(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function FI(t){return yI(t.auth,new Xu(t),t.bypassAuthState)}function UI(t){const{auth:e,user:n}=t;return ge(n,e,"internal-error"),_I(n,new Xu(t),t.bypassAuthState)}async function $I(t){const{auth:e,user:n}=t;return ge(n,e,"internal-error"),gI(n,new Xu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return FI;case"linkViaPopup":case"linkViaRedirect":return $I;case"reauthViaPopup":case"reauthViaRedirect":return UI;default:Yn(this.auth,"internal-error")}}resolve(e){mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=new Oo(2e3,1e4);async function jI(t,e,n){if(yn(t.app))return Promise.reject(Tn(t,"operation-not-supported-in-this-environment"));const r=bl(t);MT(t,e,Qu);const s=Sg(r,n);return new ys(r,"signInViaPopup",e,s).executeNotNull()}class ys extends Cg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ys.currentPopupAction&&ys.currentPopupAction.cancel(),ys.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ge(e,this.auth,"internal-error"),e}async onExecution(){mr(this.filter.length===1,"Popup operations only handle one event");const e=Ju();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ys.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,BI.get())};e()}}ys.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI="pendingRedirect",Da=new Map;class zI extends Cg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Da.get(this.auth._key());if(!e){try{const r=await HI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Da.set(this.auth._key(),e)}return this.bypassAuthState||Da.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function HI(t,e){const n=GI(e),r=KI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function WI(t,e){Da.set(t._key(),e)}function KI(t){return hr(t._redirectPersistence)}function GI(t){return ka(qI,t.config.apiKey,t.name)}async function QI(t,e,n=!1){if(yn(t.app))return Promise.reject(Ts(t));const r=bl(t),s=Sg(r,e),o=await new zI(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=600*1e3;class XI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Rg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Tn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=JI&&this.cachedEventUids.clear(),this.cachedEventUids.has(of(e))}saveEventToCache(e){this.cachedEventUids.add(of(e)),this.lastProcessedEventTime=Date.now()}}function of(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Rg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function YI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZI(t,e={}){return pi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,t0=/^https?/;async function n0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ZI(t);for(const n of e)try{if(r0(n))return}catch{}Yn(t,"unauthorized-domain")}function r0(t){const e=Yc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!t0.test(n))return!1;if(e0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0=new Oo(3e4,6e4);function af(){const t=qn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function i0(t){return new Promise((e,n)=>{var r,s,i;function o(){af(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{af(),n(Tn(t,"network-request-failed"))},timeout:s0.get()})}if(!((s=(r=qn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=qn().gapi)===null||i===void 0)&&i.load)o();else{const l=cI("iframefcb");return qn()[l]=()=>{gapi.load?o():n(Tn(t,"network-request-failed"))},aI(`${lI()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Va=null,e})}let Va=null;function o0(t){return Va=Va||i0(t),Va}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0=new Oo(5e3,15e3),l0="__/auth/iframe",c0="emulator/auth/iframe",u0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},h0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function d0(t){const e=t.config;ge(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zu(e,c0):`https://${t.config.authDomain}/${l0}`,r={apiKey:e.apiKey,appName:t.name,v:fi},s=h0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${xo(r).slice(1)}`}async function f0(t){const e=await o0(t),n=qn().gapi;return ge(n,t,"internal-error"),e.open({where:document.body,url:d0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:u0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Tn(t,"network-request-failed"),l=qn().setTimeout(()=>{i(o)},a0.get());function c(){qn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},m0=500,g0=600,_0="_blank",y0="http://localhost";class lf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function v0(t,e,n,r=m0,s=g0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},p0),{width:r.toString(),height:s.toString(),top:i,left:o}),h=Ut().toLowerCase();n&&(l=lg(h)?_0:n),og(h)&&(e=e||y0,c.scrollbars="yes");const f=Object.entries(c).reduce((y,[P,V])=>`${y}${P}=${V},`,"");if(ZT(h)&&l!=="_self")return w0(e||"",l),new lf(null);const g=window.open(e||"",l,f);ge(g,t,"popup-blocked");try{g.focus()}catch{}return new lf(g)}function w0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0="__/auth/handler",T0="emulator/auth/handler",I0=encodeURIComponent("fac");async function cf(t,e,n,r,s,i){ge(t.config.authDomain,t,"auth-domain-config-required"),ge(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fi,eventId:s};if(e instanceof Qu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",TE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))o[f]=g}if(e instanceof Mo){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),h=c?`#${I0}=${encodeURIComponent(c)}`:"";return`${b0(t)}?${xo(l).slice(1)}${h}`}function b0({config:t}){return t.emulator?zu(t,T0):`https://${t.authDomain}/${E0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc="webStorageSupport";class A0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Eg,this._completeRedirectFn=QI,this._overrideRedirectResult=WI}async _openPopup(e,n,r,s){var i;mr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await cf(e,n,r,Yc(),s);return v0(e,o,Ju())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await cf(e,n,r,Yc(),s);return RI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(mr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await f0(e),r=new XI(e);return n.register("authEvent",s=>(ge(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Tc,{type:Tc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Tc];o!==void 0&&n(!!o),Yn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=n0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fg()||ag()||Ku()}}const S0=A0;var uf="@firebase/auth",hf="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ge(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function P0(t){ii(new As("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ge(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pg(t)},h=new iI(r,s,i,c);return hI(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ii(new As("auth-internal",e=>{const n=bl(e.getProvider("auth").getImmediate());return(r=>new C0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Br(uf,hf,R0(t)),Br(uf,hf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0=300,D0=zm("authIdTokenMaxAge")||k0;let df=null;const V0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>D0)return;const s=n==null?void 0:n.token;df!==s&&(df=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function N0(t=Jm()){const e=$u(t,"auth");if(e.isInitialized())return e.getImmediate();const n=uI(t,{popupRedirectResolver:S0,persistence:[LI,AI,Eg]}),r=zm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=V0(i.toString());wI(n,o,()=>o(n.currentUser)),vI(n,l=>o(l))}}const s=jm("auth");return s&&dI(n,`http://${s}`),n}function x0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}oI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Tn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",x0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});P0("Browser");var ff=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jr,Pg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,v){function T(){}T.prototype=v.prototype,S.D=v.prototype,S.prototype=new T,S.prototype.constructor=S,S.C=function(R,k,D){for(var b=Array(arguments.length-2),Ye=2;Ye<arguments.length;Ye++)b[Ye-2]=arguments[Ye];return v.prototype[k].apply(R,b)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(S,v,T){T||(T=0);var R=Array(16);if(typeof v=="string")for(var k=0;16>k;++k)R[k]=v.charCodeAt(T++)|v.charCodeAt(T++)<<8|v.charCodeAt(T++)<<16|v.charCodeAt(T++)<<24;else for(k=0;16>k;++k)R[k]=v[T++]|v[T++]<<8|v[T++]<<16|v[T++]<<24;v=S.g[0],T=S.g[1],k=S.g[2];var D=S.g[3],b=v+(D^T&(k^D))+R[0]+3614090360&4294967295;v=T+(b<<7&4294967295|b>>>25),b=D+(k^v&(T^k))+R[1]+3905402710&4294967295,D=v+(b<<12&4294967295|b>>>20),b=k+(T^D&(v^T))+R[2]+606105819&4294967295,k=D+(b<<17&4294967295|b>>>15),b=T+(v^k&(D^v))+R[3]+3250441966&4294967295,T=k+(b<<22&4294967295|b>>>10),b=v+(D^T&(k^D))+R[4]+4118548399&4294967295,v=T+(b<<7&4294967295|b>>>25),b=D+(k^v&(T^k))+R[5]+1200080426&4294967295,D=v+(b<<12&4294967295|b>>>20),b=k+(T^D&(v^T))+R[6]+2821735955&4294967295,k=D+(b<<17&4294967295|b>>>15),b=T+(v^k&(D^v))+R[7]+4249261313&4294967295,T=k+(b<<22&4294967295|b>>>10),b=v+(D^T&(k^D))+R[8]+1770035416&4294967295,v=T+(b<<7&4294967295|b>>>25),b=D+(k^v&(T^k))+R[9]+2336552879&4294967295,D=v+(b<<12&4294967295|b>>>20),b=k+(T^D&(v^T))+R[10]+4294925233&4294967295,k=D+(b<<17&4294967295|b>>>15),b=T+(v^k&(D^v))+R[11]+2304563134&4294967295,T=k+(b<<22&4294967295|b>>>10),b=v+(D^T&(k^D))+R[12]+1804603682&4294967295,v=T+(b<<7&4294967295|b>>>25),b=D+(k^v&(T^k))+R[13]+4254626195&4294967295,D=v+(b<<12&4294967295|b>>>20),b=k+(T^D&(v^T))+R[14]+2792965006&4294967295,k=D+(b<<17&4294967295|b>>>15),b=T+(v^k&(D^v))+R[15]+1236535329&4294967295,T=k+(b<<22&4294967295|b>>>10),b=v+(k^D&(T^k))+R[1]+4129170786&4294967295,v=T+(b<<5&4294967295|b>>>27),b=D+(T^k&(v^T))+R[6]+3225465664&4294967295,D=v+(b<<9&4294967295|b>>>23),b=k+(v^T&(D^v))+R[11]+643717713&4294967295,k=D+(b<<14&4294967295|b>>>18),b=T+(D^v&(k^D))+R[0]+3921069994&4294967295,T=k+(b<<20&4294967295|b>>>12),b=v+(k^D&(T^k))+R[5]+3593408605&4294967295,v=T+(b<<5&4294967295|b>>>27),b=D+(T^k&(v^T))+R[10]+38016083&4294967295,D=v+(b<<9&4294967295|b>>>23),b=k+(v^T&(D^v))+R[15]+3634488961&4294967295,k=D+(b<<14&4294967295|b>>>18),b=T+(D^v&(k^D))+R[4]+3889429448&4294967295,T=k+(b<<20&4294967295|b>>>12),b=v+(k^D&(T^k))+R[9]+568446438&4294967295,v=T+(b<<5&4294967295|b>>>27),b=D+(T^k&(v^T))+R[14]+3275163606&4294967295,D=v+(b<<9&4294967295|b>>>23),b=k+(v^T&(D^v))+R[3]+4107603335&4294967295,k=D+(b<<14&4294967295|b>>>18),b=T+(D^v&(k^D))+R[8]+1163531501&4294967295,T=k+(b<<20&4294967295|b>>>12),b=v+(k^D&(T^k))+R[13]+2850285829&4294967295,v=T+(b<<5&4294967295|b>>>27),b=D+(T^k&(v^T))+R[2]+4243563512&4294967295,D=v+(b<<9&4294967295|b>>>23),b=k+(v^T&(D^v))+R[7]+1735328473&4294967295,k=D+(b<<14&4294967295|b>>>18),b=T+(D^v&(k^D))+R[12]+2368359562&4294967295,T=k+(b<<20&4294967295|b>>>12),b=v+(T^k^D)+R[5]+4294588738&4294967295,v=T+(b<<4&4294967295|b>>>28),b=D+(v^T^k)+R[8]+2272392833&4294967295,D=v+(b<<11&4294967295|b>>>21),b=k+(D^v^T)+R[11]+1839030562&4294967295,k=D+(b<<16&4294967295|b>>>16),b=T+(k^D^v)+R[14]+4259657740&4294967295,T=k+(b<<23&4294967295|b>>>9),b=v+(T^k^D)+R[1]+2763975236&4294967295,v=T+(b<<4&4294967295|b>>>28),b=D+(v^T^k)+R[4]+1272893353&4294967295,D=v+(b<<11&4294967295|b>>>21),b=k+(D^v^T)+R[7]+4139469664&4294967295,k=D+(b<<16&4294967295|b>>>16),b=T+(k^D^v)+R[10]+3200236656&4294967295,T=k+(b<<23&4294967295|b>>>9),b=v+(T^k^D)+R[13]+681279174&4294967295,v=T+(b<<4&4294967295|b>>>28),b=D+(v^T^k)+R[0]+3936430074&4294967295,D=v+(b<<11&4294967295|b>>>21),b=k+(D^v^T)+R[3]+3572445317&4294967295,k=D+(b<<16&4294967295|b>>>16),b=T+(k^D^v)+R[6]+76029189&4294967295,T=k+(b<<23&4294967295|b>>>9),b=v+(T^k^D)+R[9]+3654602809&4294967295,v=T+(b<<4&4294967295|b>>>28),b=D+(v^T^k)+R[12]+3873151461&4294967295,D=v+(b<<11&4294967295|b>>>21),b=k+(D^v^T)+R[15]+530742520&4294967295,k=D+(b<<16&4294967295|b>>>16),b=T+(k^D^v)+R[2]+3299628645&4294967295,T=k+(b<<23&4294967295|b>>>9),b=v+(k^(T|~D))+R[0]+4096336452&4294967295,v=T+(b<<6&4294967295|b>>>26),b=D+(T^(v|~k))+R[7]+1126891415&4294967295,D=v+(b<<10&4294967295|b>>>22),b=k+(v^(D|~T))+R[14]+2878612391&4294967295,k=D+(b<<15&4294967295|b>>>17),b=T+(D^(k|~v))+R[5]+4237533241&4294967295,T=k+(b<<21&4294967295|b>>>11),b=v+(k^(T|~D))+R[12]+1700485571&4294967295,v=T+(b<<6&4294967295|b>>>26),b=D+(T^(v|~k))+R[3]+2399980690&4294967295,D=v+(b<<10&4294967295|b>>>22),b=k+(v^(D|~T))+R[10]+4293915773&4294967295,k=D+(b<<15&4294967295|b>>>17),b=T+(D^(k|~v))+R[1]+2240044497&4294967295,T=k+(b<<21&4294967295|b>>>11),b=v+(k^(T|~D))+R[8]+1873313359&4294967295,v=T+(b<<6&4294967295|b>>>26),b=D+(T^(v|~k))+R[15]+4264355552&4294967295,D=v+(b<<10&4294967295|b>>>22),b=k+(v^(D|~T))+R[6]+2734768916&4294967295,k=D+(b<<15&4294967295|b>>>17),b=T+(D^(k|~v))+R[13]+1309151649&4294967295,T=k+(b<<21&4294967295|b>>>11),b=v+(k^(T|~D))+R[4]+4149444226&4294967295,v=T+(b<<6&4294967295|b>>>26),b=D+(T^(v|~k))+R[11]+3174756917&4294967295,D=v+(b<<10&4294967295|b>>>22),b=k+(v^(D|~T))+R[2]+718787259&4294967295,k=D+(b<<15&4294967295|b>>>17),b=T+(D^(k|~v))+R[9]+3951481745&4294967295,S.g[0]=S.g[0]+v&4294967295,S.g[1]=S.g[1]+(k+(b<<21&4294967295|b>>>11))&4294967295,S.g[2]=S.g[2]+k&4294967295,S.g[3]=S.g[3]+D&4294967295}r.prototype.u=function(S,v){v===void 0&&(v=S.length);for(var T=v-this.blockSize,R=this.B,k=this.h,D=0;D<v;){if(k==0)for(;D<=T;)s(this,S,D),D+=this.blockSize;if(typeof S=="string"){for(;D<v;)if(R[k++]=S.charCodeAt(D++),k==this.blockSize){s(this,R),k=0;break}}else for(;D<v;)if(R[k++]=S[D++],k==this.blockSize){s(this,R),k=0;break}}this.h=k,this.o+=v},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var v=1;v<S.length-8;++v)S[v]=0;var T=8*this.o;for(v=S.length-8;v<S.length;++v)S[v]=T&255,T/=256;for(this.u(S),S=Array(16),v=T=0;4>v;++v)for(var R=0;32>R;R+=8)S[T++]=this.g[v]>>>R&255;return S};function i(S,v){var T=l;return Object.prototype.hasOwnProperty.call(T,S)?T[S]:T[S]=v(S)}function o(S,v){this.h=v;for(var T=[],R=!0,k=S.length-1;0<=k;k--){var D=S[k]|0;R&&D==v||(T[k]=D,R=!1)}this.g=T}var l={};function c(S){return-128<=S&&128>S?i(S,function(v){return new o([v|0],0>v?-1:0)}):new o([S|0],0>S?-1:0)}function h(S){if(isNaN(S)||!isFinite(S))return g;if(0>S)return L(h(-S));for(var v=[],T=1,R=0;S>=T;R++)v[R]=S/T|0,T*=4294967296;return new o(v,0)}function f(S,v){if(S.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(S.charAt(0)=="-")return L(f(S.substring(1),v));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=h(Math.pow(v,8)),R=g,k=0;k<S.length;k+=8){var D=Math.min(8,S.length-k),b=parseInt(S.substring(k,k+D),v);8>D?(D=h(Math.pow(v,D)),R=R.j(D).add(h(b))):(R=R.j(T),R=R.add(h(b)))}return R}var g=c(0),y=c(1),P=c(16777216);t=o.prototype,t.m=function(){if(x(this))return-L(this).m();for(var S=0,v=1,T=0;T<this.g.length;T++){var R=this.i(T);S+=(0<=R?R:4294967296+R)*v,v*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(V(this))return"0";if(x(this))return"-"+L(this).toString(S);for(var v=h(Math.pow(S,6)),T=this,R="";;){var k=Q(T,v).g;T=Y(T,k.j(v));var D=((0<T.g.length?T.g[0]:T.h)>>>0).toString(S);if(T=k,V(T))return D+R;for(;6>D.length;)D="0"+D;R=D+R}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function V(S){if(S.h!=0)return!1;for(var v=0;v<S.g.length;v++)if(S.g[v]!=0)return!1;return!0}function x(S){return S.h==-1}t.l=function(S){return S=Y(this,S),x(S)?-1:V(S)?0:1};function L(S){for(var v=S.g.length,T=[],R=0;R<v;R++)T[R]=~S.g[R];return new o(T,~S.h).add(y)}t.abs=function(){return x(this)?L(this):this},t.add=function(S){for(var v=Math.max(this.g.length,S.g.length),T=[],R=0,k=0;k<=v;k++){var D=R+(this.i(k)&65535)+(S.i(k)&65535),b=(D>>>16)+(this.i(k)>>>16)+(S.i(k)>>>16);R=b>>>16,D&=65535,b&=65535,T[k]=b<<16|D}return new o(T,T[T.length-1]&-2147483648?-1:0)};function Y(S,v){return S.add(L(v))}t.j=function(S){if(V(this)||V(S))return g;if(x(this))return x(S)?L(this).j(L(S)):L(L(this).j(S));if(x(S))return L(this.j(L(S)));if(0>this.l(P)&&0>S.l(P))return h(this.m()*S.m());for(var v=this.g.length+S.g.length,T=[],R=0;R<2*v;R++)T[R]=0;for(R=0;R<this.g.length;R++)for(var k=0;k<S.g.length;k++){var D=this.i(R)>>>16,b=this.i(R)&65535,Ye=S.i(k)>>>16,Jt=S.i(k)&65535;T[2*R+2*k]+=b*Jt,W(T,2*R+2*k),T[2*R+2*k+1]+=D*Jt,W(T,2*R+2*k+1),T[2*R+2*k+1]+=b*Ye,W(T,2*R+2*k+1),T[2*R+2*k+2]+=D*Ye,W(T,2*R+2*k+2)}for(R=0;R<v;R++)T[R]=T[2*R+1]<<16|T[2*R];for(R=v;R<2*v;R++)T[R]=0;return new o(T,0)};function W(S,v){for(;(S[v]&65535)!=S[v];)S[v+1]+=S[v]>>>16,S[v]&=65535,v++}function ne(S,v){this.g=S,this.h=v}function Q(S,v){if(V(v))throw Error("division by zero");if(V(S))return new ne(g,g);if(x(S))return v=Q(L(S),v),new ne(L(v.g),L(v.h));if(x(v))return v=Q(S,L(v)),new ne(L(v.g),v.h);if(30<S.g.length){if(x(S)||x(v))throw Error("slowDivide_ only works with positive integers.");for(var T=y,R=v;0>=R.l(S);)T=he(T),R=he(R);var k=be(T,1),D=be(R,1);for(R=be(R,2),T=be(T,2);!V(R);){var b=D.add(R);0>=b.l(S)&&(k=k.add(T),D=b),R=be(R,1),T=be(T,1)}return v=Y(S,k.j(v)),new ne(k,v)}for(k=g;0<=S.l(v);){for(T=Math.max(1,Math.floor(S.m()/v.m())),R=Math.ceil(Math.log(T)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),D=h(T),b=D.j(v);x(b)||0<b.l(S);)T-=R,D=h(T),b=D.j(v);V(D)&&(D=y),k=k.add(D),S=Y(S,b)}return new ne(k,S)}t.A=function(S){return Q(this,S).h},t.and=function(S){for(var v=Math.max(this.g.length,S.g.length),T=[],R=0;R<v;R++)T[R]=this.i(R)&S.i(R);return new o(T,this.h&S.h)},t.or=function(S){for(var v=Math.max(this.g.length,S.g.length),T=[],R=0;R<v;R++)T[R]=this.i(R)|S.i(R);return new o(T,this.h|S.h)},t.xor=function(S){for(var v=Math.max(this.g.length,S.g.length),T=[],R=0;R<v;R++)T[R]=this.i(R)^S.i(R);return new o(T,this.h^S.h)};function he(S){for(var v=S.g.length+1,T=[],R=0;R<v;R++)T[R]=S.i(R)<<1|S.i(R-1)>>>31;return new o(T,S.h)}function be(S,v){var T=v>>5;v%=32;for(var R=S.g.length-T,k=[],D=0;D<R;D++)k[D]=0<v?S.i(D+T)>>>v|S.i(D+T+1)<<32-v:S.i(D+T);return new o(k,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Pg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,jr=o}).apply(typeof ff<"u"?ff:typeof self<"u"?self:typeof window<"u"?window:{});var va=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kg,zi,Dg,Na,tu,Vg,Ng,xg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof va=="object"&&va];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var N=a[_];if(!(N in d))break e;d=d[N]}a=a[a.length-1],_=d[a],u=u(_),u!=_&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,_=!1,N={next:function(){if(!_&&d<a.length){var M=d++;return{value:u(M,a[M]),done:!1}}return _=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function g(a,u,d){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,_),a.apply(u,N)}}return function(){return a.apply(u,arguments)}}function y(a,u,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,y.apply(null,arguments)}function P(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var _=d.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function V(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(_,N,M){for(var ee=Array(arguments.length-2),He=2;He<arguments.length;He++)ee[He-2]=arguments[He];return u.prototype[N].apply(_,ee)}}function x(a){const u=a.length;if(0<u){const d=Array(u);for(let _=0;_<u;_++)d[_]=a[_];return d}return[]}function L(a,u){for(let d=1;d<arguments.length;d++){const _=arguments[d];if(c(_)){const N=a.length||0,M=_.length||0;a.length=N+M;for(let ee=0;ee<M;ee++)a[N+ee]=_[ee]}else a.push(_)}}class Y{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function W(a){return/^[\s\xa0]*$/.test(a)}function ne(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function Q(a){return Q[" "](a),a}Q[" "]=function(){};var he=ne().indexOf("Gecko")!=-1&&!(ne().toLowerCase().indexOf("webkit")!=-1&&ne().indexOf("Edge")==-1)&&!(ne().indexOf("Trident")!=-1||ne().indexOf("MSIE")!=-1)&&ne().indexOf("Edge")==-1;function be(a,u,d){for(const _ in a)u.call(d,a[_],_,a)}function S(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function v(a){const u={};for(const d in a)u[d]=a[d];return u}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(a,u){let d,_;for(let N=1;N<arguments.length;N++){_=arguments[N];for(d in _)a[d]=_[d];for(let M=0;M<T.length;M++)d=T[M],Object.prototype.hasOwnProperty.call(_,d)&&(a[d]=_[d])}}function k(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function D(a){l.setTimeout(()=>{throw a},0)}function b(){var a=Ht;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class Ye{constructor(){this.h=this.g=null}add(u,d){const _=Jt.get();_.set(u,d),this.h?this.h.next=_:this.g=_,this.h=_}}var Jt=new Y(()=>new nt,a=>a.reset());class nt{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ve,Pe=!1,Ht=new Ye,er=()=>{const a=l.Promise.resolve(void 0);Ve=()=>{a.then(ct)}};var ct=()=>{for(var a;a=b();){try{a.h.call(a.g)}catch(d){D(d)}var u=Jt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}Pe=!1};function me(){this.s=this.s,this.C=this.C}me.prototype.s=!1,me.prototype.ma=function(){this.s||(this.s=!0,this.N())},me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ze(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Ze.prototype.h=function(){this.defaultPrevented=!0};var Rn=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return a})();function fn(a,u){if(Ze.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(he){e:{try{Q(u.nodeName);var N=!0;break e}catch{}N=!1}N||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Wt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&fn.aa.h.call(this)}}V(fn,Ze);var Wt={2:"touch",3:"pen",4:"mouse"};fn.prototype.h=function(){fn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var $t="closure_listenable_"+(1e6*Math.random()|0),pn=0;function Xt(a,u,d,_,N){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!_,this.ha=N,this.key=++pn,this.da=this.fa=!1}function ns(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function E(a){this.src=a,this.g={},this.h=0}E.prototype.add=function(a,u,d,_,N){var M=a.toString();a=this.g[M],a||(a=this.g[M]=[],this.h++);var ee=O(a,u,_,N);return-1<ee?(u=a[ee],d||(u.fa=!1)):(u=new Xt(u,this.src,M,!!_,N),u.fa=d,a.push(u)),u};function C(a,u){var d=u.type;if(d in a.g){var _=a.g[d],N=Array.prototype.indexOf.call(_,u,void 0),M;(M=0<=N)&&Array.prototype.splice.call(_,N,1),M&&(ns(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function O(a,u,d,_){for(var N=0;N<a.length;++N){var M=a[N];if(!M.da&&M.listener==u&&M.capture==!!d&&M.ha==_)return N}return-1}var H="closure_lm_"+(1e6*Math.random()|0),B={};function z(a,u,d,_,N){if(Array.isArray(u)){for(var M=0;M<u.length;M++)z(a,u[M],d,_,N);return null}return d=Te(d),a&&a[$t]?a.K(u,d,h(_)?!!_.capture:!1,N):J(a,u,d,!1,_,N)}function J(a,u,d,_,N,M){if(!u)throw Error("Invalid event type");var ee=h(N)?!!N.capture:!!N,He=ae(a);if(He||(a[H]=He=new E(a)),d=He.add(u,d,_,ee,M),d.proxy)return d;if(_=X(),d.proxy=_,_.src=a,_.listener=d,a.addEventListener)Rn||(N=ee),N===void 0&&(N=!1),a.addEventListener(u.toString(),_,N);else if(a.attachEvent)a.attachEvent(ie(u.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return d}function X(){function a(d){return u.call(a.src,a.listener,d)}const u=te;return a}function G(a,u,d,_,N){if(Array.isArray(u))for(var M=0;M<u.length;M++)G(a,u[M],d,_,N);else _=h(_)?!!_.capture:!!_,d=Te(d),a&&a[$t]?(a=a.i,u=String(u).toString(),u in a.g&&(M=a.g[u],d=O(M,d,_,N),-1<d&&(ns(M[d]),Array.prototype.splice.call(M,d,1),M.length==0&&(delete a.g[u],a.h--)))):a&&(a=ae(a))&&(u=a.g[u.toString()],a=-1,u&&(a=O(u,d,_,N)),(d=-1<a?u[a]:null)&&j(d))}function j(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[$t])C(u.i,a);else{var d=a.type,_=a.proxy;u.removeEventListener?u.removeEventListener(d,_,a.capture):u.detachEvent?u.detachEvent(ie(d),_):u.addListener&&u.removeListener&&u.removeListener(_),(d=ae(u))?(C(d,a),d.h==0&&(d.src=null,u[H]=null)):ns(a)}}}function ie(a){return a in B?B[a]:B[a]="on"+a}function te(a,u){if(a.da)a=!0;else{u=new fn(u,this);var d=a.listener,_=a.ha||a.src;a.fa&&j(a),a=d.call(_,u)}return a}function ae(a){return a=a[H],a instanceof E?a:null}var de="__closure_events_fn_"+(1e9*Math.random()>>>0);function Te(a){return typeof a=="function"?a:(a[de]||(a[de]=function(u){return a.handleEvent(u)}),a[de])}function _e(){me.call(this),this.i=new E(this),this.M=this,this.F=null}V(_e,me),_e.prototype[$t]=!0,_e.prototype.removeEventListener=function(a,u,d,_){G(this,a,u,d,_)};function ye(a,u){var d,_=a.F;if(_)for(d=[];_;_=_.F)d.push(_);if(a=a.M,_=u.type||u,typeof u=="string")u=new Ze(u,a);else if(u instanceof Ze)u.target=u.target||a;else{var N=u;u=new Ze(_,a),R(u,N)}if(N=!0,d)for(var M=d.length-1;0<=M;M--){var ee=u.g=d[M];N=Ue(ee,_,!0,u)&&N}if(ee=u.g=a,N=Ue(ee,_,!0,u)&&N,N=Ue(ee,_,!1,u)&&N,d)for(M=0;M<d.length;M++)ee=u.g=d[M],N=Ue(ee,_,!1,u)&&N}_e.prototype.N=function(){if(_e.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],_=0;_<d.length;_++)ns(d[_]);delete a.g[u],a.h--}}this.F=null},_e.prototype.K=function(a,u,d,_){return this.i.add(String(a),u,!1,d,_)},_e.prototype.L=function(a,u,d,_){return this.i.add(String(a),u,!0,d,_)};function Ue(a,u,d,_){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var N=!0,M=0;M<u.length;++M){var ee=u[M];if(ee&&!ee.da&&ee.capture==d){var He=ee.listener,Tt=ee.ha||ee.src;ee.fa&&C(a.i,ee),N=He.call(Tt,_)!==!1&&N}}return N&&!_.defaultPrevented}function rt(a,u,d){if(typeof a=="function")d&&(a=y(a,d));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function Rt(a){a.g=rt(()=>{a.g=null,a.i&&(a.i=!1,Rt(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Bt extends me{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Rt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _t(a){me.call(this),this.h=a,this.g={}}V(_t,me);var wr=[];function yt(a){be(a.g,function(u,d){this.g.hasOwnProperty(d)&&j(u)},a),a.g={}}_t.prototype.N=function(){_t.aa.N.call(this),yt(this)},_t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pt=l.JSON.stringify,Er=l.JSON.parse,rs=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Kt(){}Kt.prototype.h=null;function Yt(a){return a.h||(a.h=a.i())}function Zt(){}var kt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Tr(){Ze.call(this,"d")}V(Tr,Ze);function wi(){Ze.call(this,"c")}V(wi,Ze);var Pn={},Ho=null;function Ns(){return Ho=Ho||new _e}Pn.La="serverreachability";function Wo(a){Ze.call(this,Pn.La,a)}V(Wo,Ze);function en(a){const u=Ns();ye(u,new Wo(u))}Pn.STAT_EVENT="statevent";function Ei(a,u){Ze.call(this,Pn.STAT_EVENT,a),this.stat=u}V(Ei,Ze);function at(a){const u=Ns();ye(u,new Ei(u,a))}Pn.Ma="timingevent";function Ko(a,u){Ze.call(this,Pn.Ma,a),this.size=u}V(Ko,Ze);function Ir(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function kn(){this.g=!0}kn.prototype.xa=function(){this.g=!1};function Go(a,u,d,_,N,M){a.info(function(){if(a.g)if(M)for(var ee="",He=M.split("&"),Tt=0;Tt<He.length;Tt++){var Ne=He[Tt].split("=");if(1<Ne.length){var Dt=Ne[0];Ne=Ne[1];var Vt=Dt.split("_");ee=2<=Vt.length&&Vt[1]=="type"?ee+(Dt+"="+Ne+"&"):ee+(Dt+"=redacted&")}}else ee=null;else ee=M;return"XMLHTTP REQ ("+_+") [attempt "+N+"]: "+u+`
`+d+`
`+ee})}function ql(a,u,d,_,N,M,ee){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+N+"]: "+u+`
`+d+`
`+M+" "+ee})}function br(a,u,d,_){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Hl(a,d)+(_?" "+_:"")})}function zl(a,u){a.info(function(){return"TIMEOUT: "+u})}kn.prototype.info=function(){};function Hl(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var _=d[a];if(!(2>_.length)){var N=_[1];if(Array.isArray(N)&&!(1>N.length)){var M=N[0];if(M!="noop"&&M!="stop"&&M!="close")for(var ee=1;ee<N.length;ee++)N[ee]=""}}}}return Pt(d)}catch{return u}}var ss={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ti={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ii;function Ar(){}V(Ar,Kt),Ar.prototype.g=function(){return new XMLHttpRequest},Ar.prototype.i=function(){return{}},Ii=new Ar;function an(a,u,d,_){this.j=a,this.i=u,this.l=d,this.R=_||1,this.U=new _t(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new is}function is(){this.i=null,this.g="",this.h=!1}var Qo={},xs={};function bi(a,u,d){a.L=1,a.v=I(tn(u)),a.m=d,a.P=!0,tr(a,null)}function tr(a,u){a.F=Date.now(),os(a),a.A=tn(a.v);var d=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),Us(d.i,"t",_),a.C=0,d=a.j.J,a.h=new is,a.g=Yh(a.j,d?u:null,!a.m),0<a.O&&(a.M=new Bt(y(a.Y,a,a.g),a.O)),u=a.U,d=a.g,_=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(wr[0]=N.toString()),N=wr);for(var M=0;M<N.length;M++){var ee=z(d,N[M],_||u.handleEvent,!1,u.h||u);if(!ee)break;u.g[ee.key]=ee}u=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),en(),Go(a.i,a.u,a.A,a.l,a.R,a.m)}an.prototype.ca=function(a){a=a.target;const u=this.M;u&&nr(a)==3?u.j():this.Y(a)},an.prototype.Y=function(a){try{if(a==this.g)e:{const Vt=nr(this.g);var u=this.g.Ba();const Bs=this.g.Z();if(!(3>Vt)&&(Vt!=3||this.g&&(this.h.h||this.g.oa()||Bh(this.g)))){this.J||Vt!=4||u==7||(u==8||0>=Bs?en(3):en(2)),Sr(this);var d=this.g.Z();this.X=d;t:if(Jo(this)){var _=Bh(this.g);a="";var N=_.length,M=nr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vn(this),Dn(this);var ee="";break t}this.h.i=new l.TextDecoder}for(u=0;u<N;u++)this.h.h=!0,a+=this.h.i.decode(_[u],{stream:!(M&&u==N-1)});_.length=0,this.h.g+=a,this.C=0,ee=this.h.g}else ee=this.g.oa();if(this.o=d==200,ql(this.i,this.u,this.A,this.l,this.R,Vt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var He,Tt=this.g;if((He=Tt.g?Tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(He)){var Ne=He;break t}}Ne=null}if(d=Ne)br(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ci(this,d);else{this.o=!1,this.s=3,at(12),Vn(this),Dn(this);break e}}if(this.P){d=!0;let mn;for(;!this.J&&this.C<ee.length;)if(mn=Ai(this,ee),mn==xs){Vt==4&&(this.s=4,at(14),d=!1),br(this.i,this.l,null,"[Incomplete Response]");break}else if(mn==Qo){this.s=4,at(15),br(this.i,this.l,ee,"[Invalid Chunk]"),d=!1;break}else br(this.i,this.l,mn,null),Ci(this,mn);if(Jo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Vt!=4||ee.length!=0||this.h.h||(this.s=1,at(16),d=!1),this.o=this.o&&d,!d)br(this.i,this.l,ee,"[Invalid Chunked Response]"),Vn(this),Dn(this);else if(0<ee.length&&!this.W){this.W=!0;var Dt=this.j;Dt.g==this&&Dt.ba&&!Dt.M&&(Dt.j.info("Great, no buffering proxy detected. Bytes received: "+ee.length),ec(Dt),Dt.M=!0,at(11))}}else br(this.i,this.l,ee,null),Ci(this,ee);Vt==4&&Vn(this),this.o&&!this.J&&(Vt==4?Gh(this.j,this):(this.o=!1,os(this)))}else gy(this.g),d==400&&0<ee.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),Vn(this),Dn(this)}}}catch{}finally{}};function Jo(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Ai(a,u){var d=a.C,_=u.indexOf(`
`,d);return _==-1?xs:(d=Number(u.substring(d,_)),isNaN(d)?Qo:(_+=1,_+d>u.length?xs:(u=u.slice(_,_+d),a.C=_+d,u)))}an.prototype.cancel=function(){this.J=!0,Vn(this)};function os(a){a.S=Date.now()+a.I,Si(a,a.I)}function Si(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ir(y(a.ba,a),u)}function Sr(a){a.B&&(l.clearTimeout(a.B),a.B=null)}an.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(zl(this.i,this.A),this.L!=2&&(en(),at(17)),Vn(this),this.s=2,Dn(this)):Si(this,this.S-a)};function Dn(a){a.j.G==0||a.J||Gh(a.j,a)}function Vn(a){Sr(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,yt(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Ci(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||Ri(d.h,a))){if(!a.K&&Ri(d.h,a)&&d.G==3){try{var _=d.Da.g.parse(u)}catch{_=null}if(Array.isArray(_)&&_.length==3){var N=_;if(N[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)la(d),oa(d);else break e;Zl(d),at(18)}}else d.za=N[1],0<d.za-d.T&&37500>N[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ir(y(d.Za,d),6e3));if(1>=Zo(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else cs(d,11)}else if((a.K||d.g==a)&&la(d),!W(u))for(N=d.Da.g.parse(u),u=0;u<N.length;u++){let Ne=N[u];if(d.T=Ne[0],Ne=Ne[1],d.G==2)if(Ne[0]=="c"){d.K=Ne[1],d.ia=Ne[2];const Dt=Ne[3];Dt!=null&&(d.la=Dt,d.j.info("VER="+d.la));const Vt=Ne[4];Vt!=null&&(d.Aa=Vt,d.j.info("SVER="+d.Aa));const Bs=Ne[5];Bs!=null&&typeof Bs=="number"&&0<Bs&&(_=1.5*Bs,d.L=_,d.j.info("backChannelRequestTimeoutMs_="+_)),_=d;const mn=a.g;if(mn){const ua=mn.g?mn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ua){var M=_.h;M.g||ua.indexOf("spdy")==-1&&ua.indexOf("quic")==-1&&ua.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(Os(M,M.h),M.h=null))}if(_.D){const tc=mn.g?mn.g.getResponseHeader("X-HTTP-Session-Id"):null;tc&&(_.ya=tc,qe(_.I,_.D,tc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),_=d;var ee=a;if(_.qa=Xh(_,_.J?_.ia:null,_.W),ee.K){Pi(_.h,ee);var He=ee,Tt=_.L;Tt&&(He.I=Tt),He.B&&(Sr(He),os(He)),_.g=ee}else Wh(_);0<d.i.length&&aa(d)}else Ne[0]!="stop"&&Ne[0]!="close"||cs(d,7);else d.G==3&&(Ne[0]=="stop"||Ne[0]=="close"?Ne[0]=="stop"?cs(d,7):Yl(d):Ne[0]!="noop"&&d.l&&d.l.ta(Ne),d.v=0)}}en(4)}catch{}}var Wl=class{constructor(a,u){this.g=a,this.map=u}};function Xo(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Yo(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Zo(a){return a.h?1:a.g?a.g.size:0}function Ri(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Os(a,u){a.g?a.g.add(u):a.h=u}function Pi(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Xo.prototype.cancel=function(){if(this.i=as(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function as(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return x(a.i)}function Kl(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],d=a.length,_=0;_<d;_++)u.push(a[_]);return u}u=[],d=0;for(_ in a)u[d++]=a[_];return u}function ea(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const _ in a)u[d++]=_;return u}}}function ta(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=ea(a),_=Kl(a),N=_.length,M=0;M<N;M++)u.call(void 0,_[M],d&&d[M],a)}var Ms=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Gl(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var _=a[d].indexOf("="),N=null;if(0<=_){var M=a[d].substring(0,_);N=a[d].substring(_+1)}else M=a[d];u(M,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Nn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Nn){this.h=a.h,Ls(this,a.j),this.o=a.o,this.g=a.g,ls(this,a.s),this.l=a.l;var u=a.i,d=new ze;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),na(this,d),this.m=a.m}else a&&(u=String(a).match(Ms))?(this.h=!1,Ls(this,u[1]||"",!0),this.o=p(u[2]||""),this.g=p(u[3]||"",!0),ls(this,u[4]),this.l=p(u[5]||"",!0),na(this,u[6]||"",!0),this.m=p(u[7]||"")):(this.h=!1,this.i=new ze(null,this.h))}Nn.prototype.toString=function(){var a=[],u=this.j;u&&a.push(m(u,U,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(m(u,U,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(m(d,d.charAt(0)=="/"?Ie:oe,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",m(d,xe)),a.join("")};function tn(a){return new Nn(a)}function Ls(a,u,d){a.j=d?p(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function ls(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function na(a,u,d){u instanceof ze?(a.i=u,ki(a.i,a.h)):(d||(u=m(u,Se)),a.i=new ze(u,a.h))}function qe(a,u,d){a.i.set(u,d)}function I(a){return qe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function p(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function m(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,A),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function A(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var U=/[#\/\?@]/g,oe=/[#\?:]/g,Ie=/[#\?]/g,Se=/[#\?@]/g,xe=/#/g;function ze(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function st(a){a.g||(a.g=new Map,a.h=0,a.i&&Gl(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=ze.prototype,t.add=function(a,u){st(this),this.i=null,a=Cr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function Fs(a,u){st(a),u=Cr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function xn(a,u){return st(a),u=Cr(a,u),a.g.has(u)}t.forEach=function(a,u){st(this),this.g.forEach(function(d,_){d.forEach(function(N){a.call(u,N,_,this)},this)},this)},t.na=function(){st(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let _=0;_<u.length;_++){const N=a[_];for(let M=0;M<N.length;M++)d.push(u[_])}return d},t.V=function(a){st(this);let u=[];if(typeof a=="string")xn(this,a)&&(u=u.concat(this.g.get(Cr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},t.set=function(a,u){return st(this),this.i=null,a=Cr(this,a),xn(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Us(a,u,d){Fs(a,u),0<d.length&&(a.i=null,a.g.set(Cr(a,u),x(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var _=u[d];const M=encodeURIComponent(String(_)),ee=this.V(_);for(_=0;_<ee.length;_++){var N=M;ee[_]!==""&&(N+="="+encodeURIComponent(String(ee[_]))),a.push(N)}}return this.i=a.join("&")};function Cr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function ki(a,u){u&&!a.j&&(st(a),a.i=null,a.g.forEach(function(d,_){var N=_.toLowerCase();_!=N&&(Fs(this,_),Us(this,N,d))},a)),a.j=u}function Ql(a,u){const d=new kn;if(l.Image){const _=new Image;_.onload=P(Rr,d,"TestLoadImage: loaded",!0,u,_),_.onerror=P(Rr,d,"TestLoadImage: error",!1,u,_),_.onabort=P(Rr,d,"TestLoadImage: abort",!1,u,_),_.ontimeout=P(Rr,d,"TestLoadImage: timeout",!1,u,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else u(!1)}function Jl(a,u){const d=new kn,_=new AbortController,N=setTimeout(()=>{_.abort(),Rr(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:_.signal}).then(M=>{clearTimeout(N),M.ok?Rr(d,"TestPingServer: ok",!0,u):Rr(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(N),Rr(d,"TestPingServer: error",!1,u)})}function Rr(a,u,d,_,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),_(d)}catch{}}function dy(){this.g=new rs}function fy(a,u,d){const _=d||"";try{ta(a,function(N,M){let ee=N;h(N)&&(ee=Pt(N)),u.push(_+M+"="+encodeURIComponent(ee))})}catch(N){throw u.push(_+"type="+encodeURIComponent("_badmap")),N}}function ra(a){this.l=a.Ub||null,this.j=a.eb||!1}V(ra,Kt),ra.prototype.g=function(){return new sa(this.l,this.j)},ra.prototype.i=(function(a){return function(){return a}})({});function sa(a,u){_e.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(sa,_e),t=sa.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Vi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Di(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Vi(this)),this.g&&(this.readyState=3,Vi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Oh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Oh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Di(this):Vi(this),this.readyState==3&&Oh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Di(this))},t.Qa=function(a){this.g&&(this.response=a,Di(this))},t.ga=function(){this.g&&Di(this)};function Di(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Vi(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Vi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(sa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Mh(a){let u="";return be(a,function(d,_){u+=_,u+=":",u+=d,u+=`\r
`}),u}function Xl(a,u,d){e:{for(_ in d){var _=!1;break e}_=!0}_||(d=Mh(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):qe(a,u,d))}function it(a){_e.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(it,_e);var py=/^https?$/i,my=["POST","PUT"];t=it.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,d,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ii.g(),this.v=this.o?Yt(this.o):Yt(Ii),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(M){Lh(this,M);return}if(a=d||"",d=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var N in _)d.set(N,_[N]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const M of _.keys())d.set(M,_.get(M));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(d.keys()).find(M=>M.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(my,u,void 0))||_||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,ee]of d)this.g.setRequestHeader(M,ee);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{$h(this),this.u=!0,this.g.send(a),this.u=!1}catch(M){Lh(this,M)}};function Lh(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Fh(a),ia(a)}function Fh(a){a.A||(a.A=!0,ye(a,"complete"),ye(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ye(this,"complete"),ye(this,"abort"),ia(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ia(this,!0)),it.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Uh(this):this.bb())},t.bb=function(){Uh(this)};function Uh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||nr(a)!=4||a.Z()!=2)){if(a.u&&nr(a)==4)rt(a.Ea,0,a);else if(ye(a,"readystatechange"),nr(a)==4){a.h=!1;try{const ee=a.Z();e:switch(ee){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var _;if(_=ee===0){var N=String(a.D).match(Ms)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),_=!py.test(N?N.toLowerCase():"")}d=_}if(d)ye(a,"complete"),ye(a,"success");else{a.m=6;try{var M=2<nr(a)?a.g.statusText:""}catch{M=""}a.l=M+" ["+a.Z()+"]",Fh(a)}}finally{ia(a)}}}}function ia(a,u){if(a.g){$h(a);const d=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||ye(a,"ready");try{d.onreadystatechange=_}catch{}}}function $h(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function nr(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<nr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Er(u)}};function Bh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function gy(a){const u={};a=(a.g&&2<=nr(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(W(a[_]))continue;var d=k(a[_]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const M=u[N]||[];u[N]=M,M.push(d)}S(u,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ni(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function jh(a){this.Aa=0,this.i=[],this.j=new kn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ni("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ni("baseRetryDelayMs",5e3,a),this.cb=Ni("retryDelaySeedMs",1e4,a),this.Wa=Ni("forwardChannelMaxRetries",2,a),this.wa=Ni("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Xo(a&&a.concurrentRequestLimit),this.Da=new dy,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=jh.prototype,t.la=8,t.G=1,t.connect=function(a,u,d,_){at(0),this.W=a,this.H=u||{},d&&_!==void 0&&(this.H.OSID=d,this.H.OAID=_),this.F=this.X,this.I=Xh(this,null,this.W),aa(this)};function Yl(a){if(qh(a),a.G==3){var u=a.U++,d=tn(a.I);if(qe(d,"SID",a.K),qe(d,"RID",u),qe(d,"TYPE","terminate"),xi(a,d),u=new an(a,a.j,u),u.L=2,u.v=I(tn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=Yh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),os(u)}Jh(a)}function oa(a){a.g&&(ec(a),a.g.cancel(),a.g=null)}function qh(a){oa(a),a.u&&(l.clearTimeout(a.u),a.u=null),la(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function aa(a){if(!Yo(a.h)&&!a.s){a.s=!0;var u=a.Ga;Ve||er(),Pe||(Ve(),Pe=!0),Ht.add(u,a),a.B=0}}function _y(a,u){return Zo(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ir(y(a.Ga,a,u),Qh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new an(this,this.j,a);let M=this.o;if(this.S&&(M?(M=v(M),R(M,this.S)):M=this.S),this.m!==null||this.O||(N.H=M,M=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var _=this.i[d];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(u+=_,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Hh(this,N,u),d=tn(this.I),qe(d,"RID",a),qe(d,"CVER",22),this.D&&qe(d,"X-HTTP-Session-Id",this.D),xi(this,d),M&&(this.O?u="headers="+encodeURIComponent(String(Mh(M)))+"&"+u:this.m&&Xl(d,this.m,M)),Os(this.h,N),this.Ua&&qe(d,"TYPE","init"),this.P?(qe(d,"$req",u),qe(d,"SID","null"),N.T=!0,bi(N,d,null)):bi(N,d,u),this.G=2}}else this.G==3&&(a?zh(this,a):this.i.length==0||Yo(this.h)||zh(this))};function zh(a,u){var d;u?d=u.l:d=a.U++;const _=tn(a.I);qe(_,"SID",a.K),qe(_,"RID",d),qe(_,"AID",a.T),xi(a,_),a.m&&a.o&&Xl(_,a.m,a.o),d=new an(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Hh(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Os(a.h,d),bi(d,_,u)}function xi(a,u){a.H&&be(a.H,function(d,_){qe(u,_,d)}),a.l&&ta({},function(d,_){qe(u,_,d)})}function Hh(a,u,d){d=Math.min(a.i.length,d);var _=a.l?y(a.l.Na,a.l,a):null;e:{var N=a.i;let M=-1;for(;;){const ee=["count="+d];M==-1?0<d?(M=N[0].g,ee.push("ofs="+M)):M=0:ee.push("ofs="+M);let He=!0;for(let Tt=0;Tt<d;Tt++){let Ne=N[Tt].g;const Dt=N[Tt].map;if(Ne-=M,0>Ne)M=Math.max(0,N[Tt].g-100),He=!1;else try{fy(Dt,ee,"req"+Ne+"_")}catch{_&&_(Dt)}}if(He){_=ee.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,_}function Wh(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;Ve||er(),Pe||(Ve(),Pe=!0),Ht.add(u,a),a.v=0}}function Zl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ir(y(a.Fa,a),Qh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Kh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ir(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,at(10),oa(this),Kh(this))};function ec(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Kh(a){a.g=new an(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=tn(a.qa);qe(u,"RID","rpc"),qe(u,"SID",a.K),qe(u,"AID",a.T),qe(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&qe(u,"TO",a.ja),qe(u,"TYPE","xmlhttp"),xi(a,u),a.m&&a.o&&Xl(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=I(tn(u)),d.m=null,d.P=!0,tr(d,a)}t.Za=function(){this.C!=null&&(this.C=null,oa(this),Zl(this),at(19))};function la(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Gh(a,u){var d=null;if(a.g==u){la(a),ec(a),a.g=null;var _=2}else if(Ri(a.h,u))d=u.D,Pi(a.h,u),_=1;else return;if(a.G!=0){if(u.o)if(_==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var N=a.B;_=Ns(),ye(_,new Ko(_,d)),aa(a)}else Wh(a);else if(N=u.s,N==3||N==0&&0<u.X||!(_==1&&_y(a,u)||_==2&&Zl(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),N){case 1:cs(a,5);break;case 4:cs(a,10);break;case 3:cs(a,6);break;default:cs(a,2)}}}function Qh(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function cs(a,u){if(a.j.info("Error code "+u),u==2){var d=y(a.fb,a),_=a.Xa;const N=!_;_=new Nn(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ls(_,"https"),I(_),N?Ql(_.toString(),d):Jl(_.toString(),d)}else at(2);a.G=0,a.l&&a.l.sa(u),Jh(a),qh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function Jh(a){if(a.G=0,a.ka=[],a.l){const u=as(a.h);(u.length!=0||a.i.length!=0)&&(L(a.ka,u),L(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function Xh(a,u,d){var _=d instanceof Nn?tn(d):new Nn(d);if(_.g!="")u&&(_.g=u+"."+_.g),ls(_,_.s);else{var N=l.location;_=N.protocol,u=u?u+"."+N.hostname:N.hostname,N=+N.port;var M=new Nn(null);_&&Ls(M,_),u&&(M.g=u),N&&ls(M,N),d&&(M.l=d),_=M}return d=a.D,u=a.ya,d&&u&&qe(_,d,u),qe(_,"VER",a.la),xi(a,_),_}function Yh(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new it(new ra({eb:d})):new it(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zh(){}t=Zh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ca(){}ca.prototype.g=function(a,u){return new nn(a,u)};function nn(a,u){_e.call(this),this.g=new jh(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!W(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!W(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new $s(this)}V(nn,_e),nn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},nn.prototype.close=function(){Yl(this.g)},nn.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Pt(a),a=d);u.i.push(new Wl(u.Ya++,a)),u.G==3&&aa(u)},nn.prototype.N=function(){this.g.l=null,delete this.j,Yl(this.g),delete this.g,nn.aa.N.call(this)};function ed(a){Tr.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}V(ed,Tr);function td(){wi.call(this),this.status=1}V(td,wi);function $s(a){this.g=a}V($s,Zh),$s.prototype.ua=function(){ye(this.g,"a")},$s.prototype.ta=function(a){ye(this.g,new ed(a))},$s.prototype.sa=function(a){ye(this.g,new td)},$s.prototype.ra=function(){ye(this.g,"b")},ca.prototype.createWebChannel=ca.prototype.g,nn.prototype.send=nn.prototype.o,nn.prototype.open=nn.prototype.m,nn.prototype.close=nn.prototype.close,xg=function(){return new ca},Ng=function(){return Ns()},Vg=Pn,tu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ss.NO_ERROR=0,ss.TIMEOUT=8,ss.HTTP_ERROR=6,Na=ss,Ti.COMPLETE="complete",Dg=Ti,Zt.EventType=kt,kt.OPEN="a",kt.CLOSE="b",kt.ERROR="c",kt.MESSAGE="d",_e.prototype.listen=_e.prototype.K,zi=Zt,it.prototype.listenOnce=it.prototype.L,it.prototype.getLastError=it.prototype.Ka,it.prototype.getLastErrorCode=it.prototype.Ba,it.prototype.getStatus=it.prototype.Z,it.prototype.getResponseJson=it.prototype.Oa,it.prototype.getResponseText=it.prototype.oa,it.prototype.send=it.prototype.ea,it.prototype.setWithCredentials=it.prototype.Ha,kg=it}).apply(typeof va<"u"?va:typeof self<"u"?self:typeof window<"u"?window:{});const pf="@firebase/firestore",mf="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ot.UNAUTHENTICATED=new Ot(null),Ot.GOOGLE_CREDENTIALS=new Ot("google-credentials-uid"),Ot.FIRST_PARTY=new Ot("first-party-uid"),Ot.MOCK_USER=new Ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mi="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=new Fu("@firebase/firestore");function Ks(){return Cs.logLevel}function se(t,...e){if(Cs.logLevel<=Ce.DEBUG){const n=e.map(Yu);Cs.debug(`Firestore (${mi}): ${t}`,...n)}}function gr(t,...e){if(Cs.logLevel<=Ce.ERROR){const n=e.map(Yu);Cs.error(`Firestore (${mi}): ${t}`,...n)}}function Wr(t,...e){if(Cs.logLevel<=Ce.WARN){const n=e.map(Yu);Cs.warn(`Firestore (${mi}): ${t}`,...n)}}function Yu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Og(t,r,n)}function Og(t,e,n){let r=`FIRESTORE (${mi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw gr(r),new Error(r)}function Fe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Og(e,s,r)}function we(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends vr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class O0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Ot.UNAUTHENTICATED)))}shutdown(){}}class M0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class L0{constructor(e){this.t=e,this.currentUser=Ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Fe(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new qr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qr,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},l=c=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qr)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Fe(typeof r.accessToken=="string",31837,{l:r}),new Mg(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new Ot(e)}}class F0{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Ot.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class U0{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new F0(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Ot.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class gf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $0{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,yn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Fe(this.o===void 0,3512);const r=i=>{i.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,se("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new gf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Fe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new gf(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=B0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Ae(t,e){return t<e?-1:t>e?1:0}function nu(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return Ae(r,s);{const i=Lg(),o=j0(i.encode(_f(t,n)),i.encode(_f(e,n)));return o!==0?o:Ae(r,s)}}n+=r>65535?2:1}return Ae(t.length,e.length)}function _f(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function j0(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Ae(t[n],e[n]);return Ae(t.length,e.length)}function ai(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf="__name__";class Mn{constructor(e,n,r){n===void 0?n=0:n>e.length&&pe(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&pe(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Mn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Mn?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Mn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Ae(e.length,n.length)}static compareSegments(e,n){const r=Mn.isNumericId(e),s=Mn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Mn.extractNumericId(e).compare(Mn.extractNumericId(n)):nu(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return jr.fromString(e.substring(4,e.length-2))}}class Ge extends Mn{construct(e,n,r){return new Ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new re($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Ge(n)}static emptyPath(){return new Ge([])}}const q0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class St extends Mn{construct(e,n,r){return new St(e,n,r)}static isValidIdentifier(e){return q0.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),St.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===yf}static keyField(){return new St([yf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new re($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new re($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new re($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new re($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new St(n)}static emptyPath(){return new St([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(Ge.fromString(e))}static fromName(e){return new ce(Ge.fromString(e).popFirst(5))}static empty(){return new ce(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new Ge(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(t,e,n){if(!n)throw new re($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function z0(t,e,n,r){if(e===!0&&r===!0)throw new re($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function vf(t){if(!ce.isDocumentKey(t))throw new re($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function wf(t){if(ce.isDocumentKey(t))throw new re($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ug(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Cl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":pe(12329,{type:typeof t})}function In(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Cl(t);throw new re($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t,e){const n={typeString:t};return e&&(n.value=e),n}function Fo(t,e){if(!Ug(t))throw new re($.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new re($.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef=-62135596800,Tf=1e6;class Je{static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Tf);return new Je(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Ef)throw new re($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Tf}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Je._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Fo(e,Je._jsonSchema))return new Je(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ef;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Je._jsonSchemaVersion="firestore/timestamp/1.0",Je._jsonSchema={type:ft("string",Je._jsonSchemaVersion),seconds:ft("number"),nanoseconds:ft("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{static fromTimestamp(e){return new ve(e)}static min(){return new ve(new Je(0,0))}static max(){return new ve(new Je(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=-1;function H0(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ve.fromTimestamp(r===1e9?new Je(n+1,0):new Je(n,r));return new Kr(s,ce.empty(),e)}function W0(t){return new Kr(t.readTime,t.key,Eo)}class Kr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Kr(ve.min(),ce.empty(),Eo)}static max(){return new Kr(ve.max(),ce.empty(),Eo)}}function K0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ce.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Q0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gi(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==G0)throw t;se("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&pe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new q(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof q?n:q.resolve(n)}catch(n){return q.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):q.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):q.reject(n)}static resolve(e){return new q(((n,r)=>{n(e)}))}static reject(e){return new q(((n,r)=>{r(e)}))}static waitFor(e){return new q(((n,r)=>{let s=0,i=0,o=!1;e.forEach((l=>{++s,l.next((()=>{++i,o&&i===s&&n()}),(c=>r(c)))})),o=!0,i===s&&n()}))}static or(e){let n=q.resolve(!1);for(const r of e)n=n.next((s=>s?q.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new q(((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next((f=>{o[h]=f,++l,l===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new q(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function J0(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function _i(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Rl.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh=-1;function Pl(t){return t==null}function nl(t){return t===0&&1/t==-1/0}function X0(t){return typeof t=="number"&&Number.isInteger(t)&&!nl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g="";function Y0(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=If(e)),e=Z0(t.get(n),e);return If(e)}function Z0(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case $g:n+="";break;default:n+=i}}return n}function If(t){return t+$g+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function es(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Bg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n){this.comparator=e,this.root=n||At.EMPTY}insert(e,n){return new tt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,At.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,At.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wa(this.root,e,this.comparator,!1)}getReverseIterator(){return new wa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wa(this.root,e,this.comparator,!0)}}class wa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class At{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??At.RED,this.left=s??At.EMPTY,this.right=i??At.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new At(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return At.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return At.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,At.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,At.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw pe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw pe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw pe(27949);return e+(this.isRed()?0:1)}}At.EMPTY=null,At.RED=!0,At.BLACK=!1;At.EMPTY=new class{constructor(){this.size=0}get key(){throw pe(57766)}get value(){throw pe(16141)}get color(){throw pe(16727)}get left(){throw pe(29726)}get right(){throw pe(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new At(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Af(this.data.getIterator())}getIteratorFrom(e){return new Af(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof mt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new mt(this.comparator);return n.data=e,n}}class Af{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.fields=e,e.sort(St.comparator)}static empty(){return new on([])}unionWith(e){let n=new mt(St.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new on(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ai(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new jg("Invalid base64 string: "+i):i}})(e);return new Ct(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new Ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ct.EMPTY_BYTE_STRING=new Ct("");const eb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gr(t){if(Fe(!!t,39018),typeof t=="string"){let e=0;const n=eb.exec(t);if(Fe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:lt(t.seconds),nanos:lt(t.nanos)}}function lt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Qr(t){return typeof t=="string"?Ct.fromBase64String(t):Ct.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg="server_timestamp",zg="__type__",Hg="__previous_value__",Wg="__local_write_time__";function th(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[zg])===null||n===void 0?void 0:n.stringValue)===qg}function kl(t){const e=t.mapValue.fields[Hg];return th(e)?kl(e):e}function To(t){const e=Gr(t.mapValue.fields[Wg].timestampValue);return new Je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,n,r,s,i,o,l,c,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=f}}const rl="(default)";class Io{constructor(e,n){this.projectId=e,this.database=n||rl}static empty(){return new Io("","")}get isDefaultDatabase(){return this.database===rl}isEqual(e){return e instanceof Io&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg="__type__",nb="__max__",Ea={mapValue:{}},Gg="__vector__",sl="value";function Jr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?th(t)?4:sb(t)?9007199254740991:rb(t)?10:11:pe(28295,{value:t})}function Zn(t,e){if(t===e)return!0;const n=Jr(t);if(n!==Jr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return To(t).isEqual(To(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Gr(s.timestampValue),l=Gr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return Qr(s.bytesValue).isEqual(Qr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return lt(s.geoPointValue.latitude)===lt(i.geoPointValue.latitude)&&lt(s.geoPointValue.longitude)===lt(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return lt(s.integerValue)===lt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=lt(s.doubleValue),l=lt(i.doubleValue);return o===l?nl(o)===nl(l):isNaN(o)&&isNaN(l)}return!1})(t,e);case 9:return ai(t.arrayValue.values||[],e.arrayValue.values||[],Zn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(bf(o)!==bf(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Zn(o[c],l[c])))return!1;return!0})(t,e);default:return pe(52216,{left:t})}}function bo(t,e){return(t.values||[]).find((n=>Zn(n,e)))!==void 0}function li(t,e){if(t===e)return 0;const n=Jr(t),r=Jr(e);if(n!==r)return Ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const l=lt(i.integerValue||i.doubleValue),c=lt(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return Sf(t.timestampValue,e.timestampValue);case 4:return Sf(To(t),To(e));case 5:return nu(t.stringValue,e.stringValue);case 6:return(function(i,o){const l=Qr(i),c=Qr(o);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=Ae(l[h],c[h]);if(f!==0)return f}return Ae(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const l=Ae(lt(i.latitude),lt(o.latitude));return l!==0?l:Ae(lt(i.longitude),lt(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return Cf(t.arrayValue,e.arrayValue);case 10:return(function(i,o){var l,c,h,f;const g=i.fields||{},y=o.fields||{},P=(l=g[sl])===null||l===void 0?void 0:l.arrayValue,V=(c=y[sl])===null||c===void 0?void 0:c.arrayValue,x=Ae(((h=P==null?void 0:P.values)===null||h===void 0?void 0:h.length)||0,((f=V==null?void 0:V.values)===null||f===void 0?void 0:f.length)||0);return x!==0?x:Cf(P,V)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Ea.mapValue&&o===Ea.mapValue)return 0;if(i===Ea.mapValue)return 1;if(o===Ea.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=o.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let g=0;g<c.length&&g<f.length;++g){const y=nu(c[g],f[g]);if(y!==0)return y;const P=li(l[c[g]],h[f[g]]);if(P!==0)return P}return Ae(c.length,f.length)})(t.mapValue,e.mapValue);default:throw pe(23264,{le:n})}}function Sf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=Gr(t),r=Gr(e),s=Ae(n.seconds,r.seconds);return s!==0?s:Ae(n.nanos,r.nanos)}function Cf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=li(n[s],r[s]);if(i)return i}return Ae(n.length,r.length)}function ci(t){return ru(t)}function ru(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=Gr(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Qr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return ce.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ru(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ru(n.fields[o])}`;return s+"}"})(t.mapValue):pe(61005,{value:t})}function xa(t){switch(Jr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=kl(t);return e?16+xa(e):16;case 5:return 2*t.stringValue.length;case 6:return Qr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+xa(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return es(r.fields,((i,o)=>{s+=i.length+xa(o)})),s})(t.mapValue);default:throw pe(13486,{value:t})}}function Rf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function su(t){return!!t&&"integerValue"in t}function nh(t){return!!t&&"arrayValue"in t}function Pf(t){return!!t&&"nullValue"in t}function kf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Oa(t){return!!t&&"mapValue"in t}function rb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Kg])===null||n===void 0?void 0:n.stringValue)===Gg}function io(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return es(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=io(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=io(t.arrayValue.values[n]);return e}return Object.assign({},t)}function sb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===nb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.value=e}static empty(){return new Qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Oa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=io(n)}setAll(e){let n=St.emptyPath(),r={},s=[];e.forEach(((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=io(o):s.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Oa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Oa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){es(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Qt(io(this.value))}}function Qg(t){const e=[];return es(t.fields,((n,r)=>{const s=new St([n]);if(Oa(r)){const i=Qg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new on(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Lt(e,0,ve.min(),ve.min(),ve.min(),Qt.empty(),0)}static newFoundDocument(e,n,r,s){return new Lt(e,1,n,ve.min(),r,s,0)}static newNoDocument(e,n){return new Lt(e,2,n,ve.min(),ve.min(),Qt.empty(),0)}static newUnknownDocument(e,n){return new Lt(e,3,n,ve.min(),ve.min(),Qt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n){this.position=e,this.inclusive=n}}function Df(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ce.comparator(ce.fromName(o.referenceValue),n.key):r=li(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Vf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,n="asc"){this.field=e,this.dir=n}}function ib(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{}class dt extends Jg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ab(e,n,r):n==="array-contains"?new ub(e,r):n==="in"?new hb(e,r):n==="not-in"?new db(e,r):n==="array-contains-any"?new fb(e,r):new dt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new lb(e,r):new cb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(li(n,this.value)):n!==null&&Jr(this.value)===Jr(n)&&this.matchesComparison(li(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Cn extends Jg{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new Cn(e,n)}matches(e){return Xg(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Xg(t){return t.op==="and"}function Yg(t){return ob(t)&&Xg(t)}function ob(t){for(const e of t.filters)if(e instanceof Cn)return!1;return!0}function iu(t){if(t instanceof dt)return t.field.canonicalString()+t.op.toString()+ci(t.value);if(Yg(t))return t.filters.map((e=>iu(e))).join(",");{const e=t.filters.map((n=>iu(n))).join(",");return`${t.op}(${e})`}}function Zg(t,e){return t instanceof dt?(function(r,s){return s instanceof dt&&r.op===s.op&&r.field.isEqual(s.field)&&Zn(r.value,s.value)})(t,e):t instanceof Cn?(function(r,s){return s instanceof Cn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,l)=>i&&Zg(o,s.filters[l])),!0):!1})(t,e):void pe(19439)}function e_(t){return t instanceof dt?(function(n){return`${n.field.canonicalString()} ${n.op} ${ci(n.value)}`})(t):t instanceof Cn?(function(n){return n.op.toString()+" {"+n.getFilters().map(e_).join(" ,")+"}"})(t):"Filter"}class ab extends dt{constructor(e,n,r){super(e,n,r),this.key=ce.fromName(r.referenceValue)}matches(e){const n=ce.comparator(e.key,this.key);return this.matchesComparison(n)}}class lb extends dt{constructor(e,n){super(e,"in",n),this.keys=t_("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class cb extends dt{constructor(e,n){super(e,"not-in",n),this.keys=t_("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function t_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map((r=>ce.fromName(r.referenceValue)))}class ub extends dt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return nh(n)&&bo(n.arrayValue,this.value)}}class hb extends dt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&bo(this.value.arrayValue,n)}}class db extends dt{constructor(e,n){super(e,"not-in",n)}matches(e){if(bo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!bo(this.value.arrayValue,n)}}class fb extends dt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!nh(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>bo(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Pe=null}}function Nf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new pb(t,e,n,r,s,i,o)}function rh(t){const e=we(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>iu(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Pl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>ci(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>ci(r))).join(",")),e.Pe=n}return e.Pe}function sh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ib(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Zg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vf(t.startAt,e.startAt)&&Vf(t.endAt,e.endAt)}function ou(t){return ce.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function mb(t,e,n,r,s,i,o,l){return new yi(t,e,n,r,s,i,o,l)}function Dl(t){return new yi(t)}function xf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function n_(t){return t.collectionGroup!==null}function oo(t){const e=we(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new mt(St.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((h=>{h.isInequality()&&(l=l.add(h.field))}))})),l})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Ao(i,r))})),n.has(St.keyField().canonicalString())||e.Te.push(new Ao(St.keyField(),r))}return e.Te}function zn(t){const e=we(t);return e.Ie||(e.Ie=gb(e,oo(t))),e.Ie}function gb(t,e){if(t.limitType==="F")return Nf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Ao(s.field,i)}));const n=t.endAt?new il(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new il(t.startAt.position,t.startAt.inclusive):null;return Nf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function au(t,e){const n=t.filters.concat([e]);return new yi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function lu(t,e,n){return new yi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Vl(t,e){return sh(zn(t),zn(e))&&t.limitType===e.limitType}function r_(t){return`${rh(zn(t))}|lt:${t.limitType}`}function Gs(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>e_(s))).join(", ")}]`),Pl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>ci(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>ci(s))).join(",")),`Target(${r})`})(zn(t))}; limitType=${t.limitType})`}function Nl(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ce.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of oo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,l,c){const h=Df(o,l,c);return o.inclusive?h<=0:h<0})(r.startAt,oo(r),s)||r.endAt&&!(function(o,l,c){const h=Df(o,l,c);return o.inclusive?h>=0:h>0})(r.endAt,oo(r),s))})(t,e)}function _b(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function s_(t){return(e,n)=>{let r=!1;for(const s of oo(t)){const i=yb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function yb(t,e,n){const r=t.field.isKeyField()?ce.comparator(e.key,n.key):(function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?li(c,h):pe(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return pe(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){es(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Bg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb=new tt(ce.comparator);function _r(){return vb}const i_=new tt(ce.comparator);function Hi(...t){let e=i_;for(const n of t)e=e.insert(n.key,n);return e}function o_(t){let e=i_;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function vs(){return ao()}function a_(){return ao()}function ao(){return new ks((t=>t.toString()),((t,e)=>t.isEqual(e)))}const wb=new tt(ce.comparator),Eb=new mt(ce.comparator);function Re(...t){let e=Eb;for(const n of t)e=e.add(n);return e}const Tb=new mt(Ae);function Ib(){return Tb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nl(e)?"-0":e}}function l_(t){return{integerValue:""+t}}function bb(t,e){return X0(e)?l_(e):ih(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(){this._=void 0}}function Ab(t,e,n){return t instanceof So?(function(s,i){const o={fields:{[zg]:{stringValue:qg},[Wg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&th(i)&&(i=kl(i)),i&&(o.fields[Hg]=i),{mapValue:o}})(n,e):t instanceof Co?u_(t,e):t instanceof Ro?h_(t,e):(function(s,i){const o=c_(s,i),l=Of(o)+Of(s.Ee);return su(o)&&su(s.Ee)?l_(l):ih(s.serializer,l)})(t,e)}function Sb(t,e,n){return t instanceof Co?u_(t,e):t instanceof Ro?h_(t,e):n}function c_(t,e){return t instanceof ol?(function(r){return su(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class So extends xl{}class Co extends xl{constructor(e){super(),this.elements=e}}function u_(t,e){const n=d_(e);for(const r of t.elements)n.some((s=>Zn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Ro extends xl{constructor(e){super(),this.elements=e}}function h_(t,e){let n=d_(e);for(const r of t.elements)n=n.filter((s=>!Zn(s,r)));return{arrayValue:{values:n}}}class ol extends xl{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Of(t){return lt(t.integerValue||t.doubleValue)}function d_(t){return nh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,n){this.field=e,this.transform=n}}function Rb(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof Co&&s instanceof Co||r instanceof Ro&&s instanceof Ro?ai(r.elements,s.elements,Zn):r instanceof ol&&s instanceof ol?Zn(r.Ee,s.Ee):r instanceof So&&s instanceof So})(t.transform,e.transform)}class Pb{constructor(e,n){this.version=e,this.transformResults=n}}class bn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new bn}static exists(e){return new bn(void 0,e)}static updateTime(e){return new bn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ma(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ol{}function f_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new oh(t.key,bn.none()):new Uo(t.key,t.data,bn.none());{const n=t.data,r=Qt.empty();let s=new mt(St.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ts(t.key,r,new on(s.toArray()),bn.none())}}function kb(t,e,n){t instanceof Uo?(function(s,i,o){const l=s.value.clone(),c=Lf(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):t instanceof ts?(function(s,i,o){if(!Ma(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Lf(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(p_(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function lo(t,e,n,r){return t instanceof Uo?(function(i,o,l,c){if(!Ma(i.precondition,o))return l;const h=i.value.clone(),f=Ff(i.fieldTransforms,c,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null})(t,e,n,r):t instanceof ts?(function(i,o,l,c){if(!Ma(i.precondition,o))return l;const h=Ff(i.fieldTransforms,c,o),f=o.data;return f.setAll(p_(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((g=>g.field)))})(t,e,n,r):(function(i,o,l){return Ma(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(t,e,n)}function Db(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=c_(r.transform,s||null);i!=null&&(n===null&&(n=Qt.empty()),n.set(r.field,i))}return n||null}function Mf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ai(r,s,((i,o)=>Rb(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Uo extends Ol{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ts extends Ol{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function p_(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Lf(t,e,n){const r=new Map;Fe(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,Sb(o,l,n[s]))}return r}function Ff(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Ab(i,o,e))}return r}class oh extends Ol{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Vb extends Ol{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&kb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=lo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=lo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=a_();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=f_(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ve.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Re())}isEqual(e){return this.batchId===e.batchId&&ai(this.mutations,e.mutations,((n,r)=>Mf(n,r)))&&ai(this.baseMutations,e.baseMutations,((n,r)=>Mf(n,r)))}}class ah{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Fe(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return wb})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ah(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht,ke;function Mb(t){switch(t){case $.OK:return pe(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return pe(15467,{code:t})}}function m_(t){if(t===void 0)return gr("GRPC error has no .code"),$.UNKNOWN;switch(t){case ht.OK:return $.OK;case ht.CANCELLED:return $.CANCELLED;case ht.UNKNOWN:return $.UNKNOWN;case ht.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case ht.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case ht.INTERNAL:return $.INTERNAL;case ht.UNAVAILABLE:return $.UNAVAILABLE;case ht.UNAUTHENTICATED:return $.UNAUTHENTICATED;case ht.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case ht.NOT_FOUND:return $.NOT_FOUND;case ht.ALREADY_EXISTS:return $.ALREADY_EXISTS;case ht.PERMISSION_DENIED:return $.PERMISSION_DENIED;case ht.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case ht.ABORTED:return $.ABORTED;case ht.OUT_OF_RANGE:return $.OUT_OF_RANGE;case ht.UNIMPLEMENTED:return $.UNIMPLEMENTED;case ht.DATA_LOSS:return $.DATA_LOSS;default:return pe(39323,{code:t})}}(ke=ht||(ht={}))[ke.OK=0]="OK",ke[ke.CANCELLED=1]="CANCELLED",ke[ke.UNKNOWN=2]="UNKNOWN",ke[ke.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ke[ke.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ke[ke.NOT_FOUND=5]="NOT_FOUND",ke[ke.ALREADY_EXISTS=6]="ALREADY_EXISTS",ke[ke.PERMISSION_DENIED=7]="PERMISSION_DENIED",ke[ke.UNAUTHENTICATED=16]="UNAUTHENTICATED",ke[ke.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ke[ke.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ke[ke.ABORTED=10]="ABORTED",ke[ke.OUT_OF_RANGE=11]="OUT_OF_RANGE",ke[ke.UNIMPLEMENTED=12]="UNIMPLEMENTED",ke[ke.INTERNAL=13]="INTERNAL",ke[ke.UNAVAILABLE=14]="UNAVAILABLE",ke[ke.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb=new jr([4294967295,4294967295],0);function Uf(t){const e=Lg().encode(t),n=new Pg;return n.update(e),new Uint8Array(n.digest())}function $f(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new jr([n,r],0),new jr([s,i],0)]}class lh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Wi(`Invalid padding: ${n}`);if(r<0)throw new Wi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Wi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Wi(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=jr.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(jr.fromNumber(r)));return s.compare(Lb)===1&&(s=new jr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=Uf(e),[r,s]=$f(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);if(!this.ye(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new lh(i,s,n);return r.forEach((l=>o.insert(l))),o}insert(e){if(this.fe===0)return;const n=Uf(e),[r,s]=$f(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Wi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,$o.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ml(ve.min(),s,new tt(Ae),_r(),Re())}}class $o{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new $o(r,n,Re(),Re(),Re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class g_{constructor(e,n){this.targetId=e,this.De=n}}class __{constructor(e,n,r=Ct.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Bf{constructor(){this.ve=0,this.Ce=jf(),this.Fe=Ct.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Re(),n=Re(),r=Re();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:pe(38017,{changeType:i})}})),new $o(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=jf()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Fe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Fb{constructor(e){this.We=e,this.Ge=new Map,this.ze=_r(),this.je=Ta(),this.Je=Ta(),this.He=new tt(Ae)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,(n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:pe(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach(((r,s)=>{this.nt(s)&&n(s)}))}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(ou(i))if(r===0){const o=new ce(i.path);this.Xe(n,o,Lt.newNoDocument(o,ve.min()))}else Fe(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),c=l?this.ut(l,e,o):1;if(c!==0){this.rt(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,h)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Qr(r).toUint8Array()}catch(c){if(c instanceof jg)return Wr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new lh(o,s,i)}catch(c){return Wr(c instanceof Wi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,i,null),s++)})),s}Pt(e){const n=new Map;this.Ge.forEach(((i,o)=>{const l=this.st(o);if(l){if(i.current&&ou(l.target)){const c=new ce(l.target.path);this.Tt(c).has(o)||this.It(o,c)||this.Xe(o,c,Lt.newNoDocument(c,e))}i.Ne&&(n.set(o,i.Le()),i.ke())}}));let r=Re();this.Je.forEach(((i,o)=>{let l=!0;o.forEachWhile((c=>{const h=this.st(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.ze.forEach(((i,o)=>o.setReadTime(e)));const s=new Ml(e,n,this.He,this.ze,r);return this.ze=_r(),this.je=Ta(),this.Je=Ta(),this.He=new tt(Ae),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new Bf,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new mt(Ae),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new mt(Ae),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||se("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Bf),this.We.getRemoteKeysForTarget(e).forEach((n=>{this.Xe(e,n,null)}))}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function Ta(){return new tt(ce.comparator)}function jf(){return new tt(ce.comparator)}const Ub={asc:"ASCENDING",desc:"DESCENDING"},$b={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Bb={and:"AND",or:"OR"};class jb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function cu(t,e){return t.useProto3Json||Pl(e)?e:{value:e}}function al(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function y_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function qb(t,e){return al(t,e.toTimestamp())}function Hn(t){return Fe(!!t,49232),ve.fromTimestamp((function(n){const r=Gr(n);return new Je(r.seconds,r.nanos)})(t))}function ch(t,e){return uu(t,e).canonicalString()}function uu(t,e){const n=(function(s){return new Ge(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function v_(t){const e=Ge.fromString(t);return Fe(b_(e),10190,{key:e.toString()}),e}function hu(t,e){return ch(t.databaseId,e.path)}function Ic(t,e){const n=v_(e);if(n.get(1)!==t.databaseId.projectId)throw new re($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new re($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ce(E_(n))}function w_(t,e){return ch(t.databaseId,e)}function zb(t){const e=v_(t);return e.length===4?Ge.emptyPath():E_(e)}function du(t){return new Ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function E_(t){return Fe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function qf(t,e,n){return{name:hu(t,e),fields:n.value.mapValue.fields}}function Hb(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:pe(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,f){return h.useProto3Json?(Fe(f===void 0||typeof f=="string",58123),Ct.fromBase64String(f||"")):(Fe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ct.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(h){const f=h.code===void 0?$.UNKNOWN:m_(h.code);return new re(f,h.message||"")})(o);n=new __(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ic(t,r.document.name),i=Hn(r.document.updateTime),o=r.document.createTime?Hn(r.document.createTime):ve.min(),l=new Qt({mapValue:{fields:r.document.fields}}),c=Lt.newFoundDocument(s,i,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new La(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ic(t,r.document),i=r.readTime?Hn(r.readTime):ve.min(),o=Lt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new La([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ic(t,r.document),i=r.removedTargetIds||[];n=new La([],i,s,null)}else{if(!("filter"in e))return pe(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Ob(s,i),l=r.targetId;n=new g_(l,o)}}return n}function Wb(t,e){let n;if(e instanceof Uo)n={update:qf(t,e.key,e.value)};else if(e instanceof oh)n={delete:hu(t,e.key)};else if(e instanceof ts)n={update:qf(t,e.key,e.data),updateMask:t1(e.fieldMask)};else{if(!(e instanceof Vb))return pe(16599,{Rt:e.type});n={verify:hu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const l=o.transform;if(l instanceof So)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Co)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ro)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ol)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw pe(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:qb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:pe(27497)})(t,e.precondition)),n}function Kb(t,e){return t&&t.length>0?(Fe(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?Hn(s.updateTime):Hn(i);return o.isEqual(ve.min())&&(o=Hn(i)),new Pb(o,s.transformResults||[])})(n,e)))):[]}function Gb(t,e){return{documents:[w_(t,e.path)]}}function Qb(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=w_(t,s);const i=(function(h){if(h.length!==0)return I_(Cn.create(h,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(h){if(h.length!==0)return h.map((f=>(function(y){return{field:Qs(y.field),direction:Yb(y.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=cu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{Vt:n,parent:s}}function Jb(t){let e=zb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Fe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(g){const y=T_(g);return y instanceof Cn&&Yg(y)?y.getFilters():[y]})(n.where));let o=[];n.orderBy&&(o=(function(g){return g.map((y=>(function(V){return new Ao(Js(V.field),(function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(y)))})(n.orderBy));let l=null;n.limit&&(l=(function(g){let y;return y=typeof g=="object"?g.value:g,Pl(y)?null:y})(n.limit));let c=null;n.startAt&&(c=(function(g){const y=!!g.before,P=g.values||[];return new il(P,y)})(n.startAt));let h=null;return n.endAt&&(h=(function(g){const y=!g.before,P=g.values||[];return new il(P,y)})(n.endAt)),mb(e,s,o,i,l,"F",c,h)}function Xb(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function T_(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Js(n.unaryFilter.field);return dt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Js(n.unaryFilter.field);return dt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Js(n.unaryFilter.field);return dt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Js(n.unaryFilter.field);return dt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return pe(61313);default:return pe(60726)}})(t):t.fieldFilter!==void 0?(function(n){return dt.create(Js(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return pe(58110);default:return pe(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Cn.create(n.compositeFilter.filters.map((r=>T_(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return pe(1026)}})(n.compositeFilter.op))})(t):pe(30097,{filter:t})}function Yb(t){return Ub[t]}function Zb(t){return $b[t]}function e1(t){return Bb[t]}function Qs(t){return{fieldPath:t.canonicalString()}}function Js(t){return St.fromServerFormat(t.fieldPath)}function I_(t){return t instanceof dt?(function(n){if(n.op==="=="){if(kf(n.value))return{unaryFilter:{field:Qs(n.field),op:"IS_NAN"}};if(Pf(n.value))return{unaryFilter:{field:Qs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(kf(n.value))return{unaryFilter:{field:Qs(n.field),op:"IS_NOT_NAN"}};if(Pf(n.value))return{unaryFilter:{field:Qs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qs(n.field),op:Zb(n.op),value:n.value}}})(t):t instanceof Cn?(function(n){const r=n.getFilters().map((s=>I_(s)));return r.length===1?r[0]:{compositeFilter:{op:e1(n.op),filters:r}}})(t):pe(54877,{filter:t})}function t1(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function b_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n,r,s,i=ve.min(),o=ve.min(),l=Ct.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e){this.gt=e}}function r1(t){const e=Jb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?lu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(){this.Dn=new i1}addToCollectionParentIndex(e,n){return this.Dn.add(n),q.resolve()}getCollectionParents(e,n){return q.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return q.resolve()}deleteFieldIndex(e,n){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,n){return q.resolve()}getDocumentsMatchingTarget(e,n){return q.resolve(null)}getIndexType(e,n){return q.resolve(0)}getFieldIndexes(e,n){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,n){return q.resolve(Kr.min())}getMinOffsetFromCollectionGroup(e,n){return q.resolve(Kr.min())}updateCollectionGroup(e,n,r){return q.resolve()}updateIndexEntries(e,n){return q.resolve()}}class i1{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new mt(Ge.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new mt(Ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},A_=41943040;class Gt{static withCacheSize(e){return new Gt(e,Gt.DEFAULT_COLLECTION_PERCENTILE,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt.DEFAULT_COLLECTION_PERCENTILE=10,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Gt.DEFAULT=new Gt(A_,Gt.DEFAULT_COLLECTION_PERCENTILE,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Gt.DISABLED=new Gt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new ui(0)}static ur(){return new ui(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf="LruGarbageCollector",o1=1048576;function Wf([t,e],[n,r]){const s=Ae(t,n);return s===0?Ae(e,r):s}class a1{constructor(e){this.Tr=e,this.buffer=new mt(Wf),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Wf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class l1{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){se(Hf,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){_i(n)?se(Hf,"Ignoring IndexedDB error during garbage collection: ",n):await gi(n)}await this.Rr(3e5)}))}}class c1{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return q.resolve(Rl.ue);const r=new a1(n);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(se("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(zf)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(se("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),zf):this.pr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,o,l,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(se("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,o=Date.now(),this.nthSequenceNumber(e,s)))).next((g=>(r=g,l=Date.now(),this.removeTargets(e,r,n)))).next((g=>(i=g,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((g=>(h=Date.now(),Ks()<=Ce.DEBUG&&se("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${g} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g}))))}}function u1(t,e){return new c1(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(){this.changes=new ks((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?q.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&lo(r.mutation,s,on.empty(),Je.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,Re()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=Re()){const s=vs();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=Hi();return i.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=vs();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,Re())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,l)=>{n.set(o,l)}))}))}computeViews(e,n,r,s){let i=_r();const o=ao(),l=(function(){return ao()})();return n.forEach(((c,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof ts)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),lo(f.mutation,h,f.mutation.getFieldMask(),Je.now())):o.set(h.key,on.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((h,f)=>o.set(h,f))),n.forEach(((h,f)=>{var g;return l.set(h,new d1(f,(g=o.get(h))!==null&&g!==void 0?g:null))})),l)))}recalculateAndSaveOverlays(e,n){const r=ao();let s=new tt(((o,l)=>o-l)),i=Re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const l of o)l.keys().forEach((c=>{const h=n.get(c);if(h===null)return;let f=r.get(c)||on.empty();f=l.applyToLocalView(h,f),r.set(c,f);const g=(s.get(l.batchId)||Re()).add(c);s=s.insert(l.batchId,g)}))})).next((()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,g=a_();f.forEach((y=>{if(!i.has(y)){const P=f_(n.get(y),r.get(y));P!==null&&g.set(y,P),i=i.add(y)}})),o.push(this.documentOverlayCache.saveOverlays(e,h,g))}return q.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return ce.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):n_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):q.resolve(vs());let l=Eo,c=i;return o.next((h=>q.forEach(h,((f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(f)?q.resolve():this.remoteDocumentCache.getEntry(e,f).next((y=>{c=c.insert(f,y)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,c,h,Re()))).next((f=>({batchId:l,changes:o_(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ce(n)).next((r=>{let s=Hi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Hi();return this.indexManager.getCollectionParents(e,i).next((l=>q.forEach(l,(c=>{const h=(function(g,y){return new yi(y,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((f=>{f.forEach(((g,y)=>{o=o.insert(g,y)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((c,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Lt.newInvalidDocument(f)))}));let l=Hi();return o.forEach(((c,h)=>{const f=i.get(c);f!==void 0&&lo(f.mutation,h,on.empty(),Je.now()),Nl(n,h)&&(l=l.insert(c,h))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return q.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Hn(s.createTime)}})(n)),q.resolve()}getNamedQuery(e,n){return q.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,(function(s){return{name:s.name,query:r1(s.bundledQuery),readTime:Hn(s.readTime)}})(n)),q.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(){this.overlays=new tt(ce.comparator),this.kr=new Map}getOverlay(e,n){return q.resolve(this.overlays.get(n))}getOverlays(e,n){const r=vs();return q.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.wt(e,n,i)})),q.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),q.resolve()}getOverlaysForCollection(e,n,r){const s=vs(),i=n.length+1,o=new ce(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return q.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new tt(((h,f)=>h-f));const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=vs(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=vs(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((h,f)=>l.set(h,f))),!(l.size()>=s)););return q.resolve(l)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new xb(n,r));let i=this.kr.get(n);i===void 0&&(i=Re(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(){this.sessionToken=Ct.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(){this.qr=new mt(wt.Qr),this.$r=new mt(wt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new wt(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Wr(new wt(e,n))}Gr(e,n){e.forEach((r=>this.removeReference(r,n)))}zr(e){const n=new ce(new Ge([])),r=new wt(n,e),s=new wt(n,e+1),i=[];return this.$r.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new ce(new Ge([])),r=new wt(n,e),s=new wt(n,e+1);let i=Re();return this.$r.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new wt(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class wt{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return ce.comparator(e.key,n.key)||Ae(e.Hr,n.Hr)}static Ur(e,n){return Ae(e.Hr,n.Hr)||ce.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new mt(wt.Qr)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Nb(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Yr=this.Yr.add(new wt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return q.resolve(o)}lookupMutationBatch(e,n){return q.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return q.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?eh:this.er-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new wt(n,0),s=new wt(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(o=>{const l=this.Zr(o.Hr);i.push(l)})),q.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new mt(Ae);return n.forEach((s=>{const i=new wt(s,0),o=new wt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],(l=>{r=r.add(l.Hr)}))})),q.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ce.isDocumentKey(i)||(i=i.child(""));const o=new wt(new ce(i),0);let l=new mt(Ae);return this.Yr.forEachWhile((c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Hr)),!0)}),o),q.resolve(this.ei(l))}ei(e){const n=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Fe(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return q.forEach(n.mutations,(s=>{const i=new wt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,n){const r=new wt(n,0),s=this.Yr.firstAfterOrEqual(r);return q.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e){this.ni=e,this.docs=(function(){return new tt(ce.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return q.resolve(r?r.document.mutableCopy():Lt.newInvalidDocument(n))}getEntries(e,n){let r=_r();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Lt.newInvalidDocument(s))})),q.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=_r();const o=n.path,l=new ce(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||K0(W0(f),r)<=0||(s.has(f.key)||Nl(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return q.resolve(i)}getAllFromCollectionGroup(e,n,r,s){pe(9500)}ri(e,n){return q.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new v1(this)}getSize(e){return q.resolve(this.size)}}class v1 extends h1{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),q.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e){this.persistence=e,this.ii=new ks((n=>rh(n)),sh),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.si=0,this.oi=new uh,this.targetCount=0,this._i=ui.ar()}forEachTarget(e,n){return this.ii.forEach(((r,s)=>n(s))),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),q.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new ui(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,q.resolve()}updateTargetData(e,n){return this.hr(n),q.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach(((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),q.waitFor(i).next((()=>s))}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return q.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),q.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),q.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),q.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return q.resolve(r)}containsKey(e,n){return q.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e,n){this.ai={},this.overlays={},this.ui=new Rl(0),this.ci=!1,this.ci=!0,this.li=new g1,this.referenceDelegate=e(this),this.hi=new w1(this),this.indexManager=new s1,this.remoteDocumentCache=(function(s){return new y1(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new n1(n),this.Ti=new p1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new m1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new _1(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){se("MemoryPersistence","Starting transaction:",e);const s=new E1(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,n){return q.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,n))))}}class E1 extends Q0{constructor(e){super(),this.currentSequenceNumber=e}}class hh{constructor(e){this.persistence=e,this.Ai=new uh,this.Ri=null}static Vi(e){return new hh(e)}get mi(){if(this.Ri)return this.Ri;throw pe(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),q.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),q.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),q.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.mi,(r=>{const s=ce.fromPath(r);return this.fi(e,s).next((i=>{i||n.removeEntry(s,ve.min())}))})).next((()=>(this.Ri=null,n.apply(e))))}updateLimboDocument(e,n){return this.fi(e,n).next((r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())}))}Pi(e){return 0}fi(e,n){return q.or([()=>q.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class ll{constructor(e,n){this.persistence=e,this.gi=new ks((r=>Y0(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=u1(this,n)}static Vi(e,n){return new ll(e,n)}Ii(){}di(e){return q.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}yr(e){let n=0;return this.gr(e,(r=>{n++})).next((()=>n))}gr(e,n){return q.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?q.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(o=>this.Sr(e,o,n).next((l=>{l||(r++,i.removeEntry(o,ve.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),q.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),q.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),q.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=xa(e.data.value)),n}Sr(e,n,r){return q.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return q.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=Re(),s=Re();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new dh(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return gE()?8:J0(Ut())>0?6:4})()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ys(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new T1;return this.ws(e,n,o).next((l=>{if(i.result=l,this.Rs)return this.Ss(e,n,o,l.size)}))})).next((()=>i.result))}Ss(e,n,r,s){return r.documentReadCount<this.Vs?(Ks()<=Ce.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",Gs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),q.resolve()):(Ks()<=Ce.DEBUG&&se("QueryEngine","Query:",Gs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Ks()<=Ce.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",Gs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,zn(n))):q.resolve())}ps(e,n){if(xf(n))return q.resolve(null);let r=zn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=lu(n,null,"F"),r=zn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=Re(...i);return this.gs.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const h=this.bs(n,l);return this.Ds(n,h,o,c.readTime)?this.ps(e,lu(n,null,"F")):this.vs(e,h,n,c)}))))})))))}ys(e,n,r,s){return xf(n)||s.isEqual(ve.min())?q.resolve(null):this.gs.getDocuments(e,r).next((i=>{const o=this.bs(n,i);return this.Ds(n,o,r,s)?q.resolve(null):(Ks()<=Ce.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Gs(n)),this.vs(e,o,n,H0(s,Eo)).next((l=>l)))}))}bs(e,n){let r=new mt(s_(e));return n.forEach(((s,i)=>{Nl(e,i)&&(r=r.add(i))})),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return Ks()<=Ce.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",Gs(n)),this.gs.getDocumentsMatchingQuery(e,n,Kr.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="LocalStore",b1=3e8;class A1{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new tt(Ae),this.Ms=new ks((i=>rh(i)),sh),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new f1(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Fs)))}}function S1(t,e,n,r){return new A1(t,e,n,r)}async function C_(t,e){const n=we(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],l=[];let c=Re();for(const h of s){o.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next((h=>({Bs:h,removedBatchIds:o,addedBatchIds:l})))}))}))}function C1(t,e){const n=we(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return(function(l,c,h,f){const g=h.batch,y=g.keys();let P=q.resolve();return y.forEach((V=>{P=P.next((()=>f.getEntry(c,V))).next((x=>{const L=h.docVersions.get(V);Fe(L!==null,48541),x.version.compareTo(L)<0&&(g.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),f.addEntry(x)))}))})),P.next((()=>l.mutationQueue.removeMutationBatch(c,g)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let c=Re();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function R_(t){const e=we(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.hi.getLastRemoteSnapshotVersion(n)))}function R1(t,e){const n=we(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const l=[];e.targetChanges.forEach(((f,g)=>{const y=s.get(g);if(!y)return;l.push(n.hi.removeMatchingKeys(i,f.removedDocuments,g).next((()=>n.hi.addMatchingKeys(i,f.addedDocuments,g))));let P=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?P=P.withResumeToken(Ct.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):f.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(f.resumeToken,r)),s=s.insert(g,P),(function(x,L,Y){return x.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=b1?!0:Y.addedDocuments.size+Y.modifiedDocuments.size+Y.removedDocuments.size>0})(y,P,f)&&l.push(n.hi.updateTargetData(i,P))}));let c=_r(),h=Re();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),l.push(P1(i,o,e.documentUpdates).next((f=>{c=f.Ls,h=f.ks}))),!r.isEqual(ve.min())){const f=n.hi.getLastRemoteSnapshotVersion(i).next((g=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(f)}return q.waitFor(l).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,h))).next((()=>c))})).then((i=>(n.Fs=s,i)))}function P1(t,e,n){let r=Re(),s=Re();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=_r();return n.forEach(((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ve.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):se(fh,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)})),{Ls:o,ks:s}}))}function k1(t,e){const n=we(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=eh),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function D1(t,e){const n=we(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.hi.getTargetData(r,e).next((i=>i?(s=i,q.resolve(s)):n.hi.allocateTargetId(r).next((o=>(s=new Mr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r}))}async function fu(t,e,n){const r=we(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!_i(o))throw o;se(fh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function Kf(t,e,n){const r=we(t);let s=ve.min(),i=Re();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,h,f){const g=we(c),y=g.Ms.get(f);return y!==void 0?q.resolve(g.Fs.get(y)):g.hi.getTargetData(h,f)})(r,o,zn(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next((c=>{i=c}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:ve.min(),n?i:Re()))).next((l=>(V1(r,_b(e),l),{documents:l,qs:i})))))}function V1(t,e,n){let r=t.xs.get(e)||ve.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.xs.set(e,r)}class Gf{constructor(){this.activeTargetIds=Ib()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class N1{constructor(){this.Fo=new Gf,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Gf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf="ConnectivityMonitor";class Jf{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){se(Qf,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){se(Qf,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ia=null;function pu(){return Ia===null?Ia=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ia++,"0x"+Ia.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc="RestConnection",O1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class M1{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===rl?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=pu(),l=this.Go(e,n.toUriEncodedString());se(bc,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,s,i);const{host:h}=new URL(l),f=di(h);return this.jo(e,l,c,r,f).then((g=>(se(bc,`Received RPC '${e}' ${o}: `,g),g)),(g=>{throw Wr(bc,`RPC '${e}' ${o} failed with error: `,g,"url: ",l,"request:",r),g}))}Jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+mi})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,n){const r=O1[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt="WebChannelConnection";class F1 extends M1{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const o=pu();return new Promise(((l,c)=>{const h=new kg;h.setWithCredentials(!0),h.listenOnce(Dg.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Na.NO_ERROR:const g=h.getResponseJson();se(Nt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(g)),l(g);break;case Na.TIMEOUT:se(Nt,`RPC '${e}' ${o} timed out`),c(new re($.DEADLINE_EXCEEDED,"Request time out"));break;case Na.HTTP_ERROR:const y=h.getStatus();if(se(Nt,`RPC '${e}' ${o} failed with status:`,y,"response text:",h.getResponseText()),y>0){let P=h.getResponseJson();Array.isArray(P)&&(P=P[0]);const V=P==null?void 0:P.error;if(V&&V.status&&V.message){const x=(function(Y){const W=Y.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(W)>=0?W:$.UNKNOWN})(V.status);c(new re(x,V.message))}else c(new re($.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new re($.UNAVAILABLE,"Connection failed."));break;default:pe(9055,{c_:e,streamId:o,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{se(Nt,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);se(Nt,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",f,r,15)}))}P_(e,n,r){const s=pu(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=xg(),l=Ng(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");se(Nt,`Creating RPC '${e}' stream ${s}: ${f}`,c);const g=o.createWebChannel(f,c);this.T_(g);let y=!1,P=!1;const V=new L1({Ho:L=>{P?se(Nt,`Not sending because RPC '${e}' stream ${s} is closed:`,L):(y||(se(Nt,`Opening RPC '${e}' stream ${s} transport.`),g.open(),y=!0),se(Nt,`RPC '${e}' stream ${s} sending:`,L),g.send(L))},Yo:()=>g.close()}),x=(L,Y,W)=>{L.listen(Y,(ne=>{try{W(ne)}catch(Q){setTimeout((()=>{throw Q}),0)}}))};return x(g,zi.EventType.OPEN,(()=>{P||(se(Nt,`RPC '${e}' stream ${s} transport opened.`),V.s_())})),x(g,zi.EventType.CLOSE,(()=>{P||(P=!0,se(Nt,`RPC '${e}' stream ${s} transport closed`),V.__(),this.I_(g))})),x(g,zi.EventType.ERROR,(L=>{P||(P=!0,Wr(Nt,`RPC '${e}' stream ${s} transport errored. Name:`,L.name,"Message:",L.message),V.__(new re($.UNAVAILABLE,"The operation could not be completed")))})),x(g,zi.EventType.MESSAGE,(L=>{var Y;if(!P){const W=L.data[0];Fe(!!W,16349);const ne=W,Q=(ne==null?void 0:ne.error)||((Y=ne[0])===null||Y===void 0?void 0:Y.error);if(Q){se(Nt,`RPC '${e}' stream ${s} received error:`,Q);const he=Q.status;let be=(function(T){const R=ht[T];if(R!==void 0)return m_(R)})(he),S=Q.message;be===void 0&&(be=$.INTERNAL,S="Unknown error status: "+he+" with message "+Q.message),P=!0,V.__(new re(be,S)),g.close()}else se(Nt,`RPC '${e}' stream ${s} received:`,W),V.a_(W)}})),x(l,Vg.STAT_EVENT,(L=>{L.stat===tu.PROXY?se(Nt,`RPC '${e}' stream ${s} detected buffering proxy`):L.stat===tu.NOPROXY&&se(Nt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{V.o_()}),0),V}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((n=>n===e))}}function Ac(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(t){return new jb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&se("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf="PersistentStream";class k_{constructor(e,n,r,s,i,o,l,c){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new P_(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(gr(n.toString()),gr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===n&&this.W_(r,s)}),(r=>{e((()=>{const s=new re($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return se(Xf,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget((()=>this.b_===e?n():(se(Xf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class U1 extends k_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=Hb(this.serializer,e),r=(function(i){if(!("targetChange"in i))return ve.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ve.min():o.readTime?Hn(o.readTime):ve.min()})(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=du(this.serializer),n.addTarget=(function(i,o){let l;const c=o.target;if(l=ou(c)?{documents:Gb(i,c)}:{query:Qb(i,c).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=y_(i,o.resumeToken);const h=cu(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(ve.min())>0){l.readTime=al(i,o.snapshotVersion.toTimestamp());const h=cu(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l})(this.serializer,e);const r=Xb(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=du(this.serializer),n.removeTarget=e,this.k_(n)}}class $1 extends k_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=Kb(e.writeResults,e.commitTime),r=Hn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=du(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>Wb(this.serializer,r)))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{}class j1 extends B1{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new re($.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,uu(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new re($.UNKNOWN,i.toString())}))}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Jo(e,uu(n,r),s,o,l,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new re($.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class q1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(gr(n),this._a=!1):se("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs="RemoteStore";class z1{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((o=>{r.enqueueAndForget((async()=>{Ds(this)&&(se(Rs,"Restarting streams for network reachability change."),await(async function(c){const h=we(c);h.Ia.add(4),await Bo(h),h.Aa.set("Unknown"),h.Ia.delete(4),await Fl(h)})(this))}))})),this.Aa=new q1(r,s)}}async function Fl(t){if(Ds(t))for(const e of t.da)await e(!0)}async function Bo(t){for(const e of t.da)await e(!1)}function D_(t,e){const n=we(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),_h(n)?gh(n):vi(n).x_()&&mh(n,e))}function ph(t,e){const n=we(t),r=vi(n);n.Ta.delete(e),r.x_()&&V_(n,e),n.Ta.size===0&&(r.x_()?r.B_():Ds(n)&&n.Aa.set("Unknown"))}function mh(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}vi(t).H_(e)}function V_(t,e){t.Ra.$e(e),vi(t).Y_(e)}function gh(t){t.Ra=new Fb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),vi(t).start(),t.Aa.aa()}function _h(t){return Ds(t)&&!vi(t).M_()&&t.Ta.size>0}function Ds(t){return we(t).Ia.size===0}function N_(t){t.Ra=void 0}async function H1(t){t.Aa.set("Online")}async function W1(t){t.Ta.forEach(((e,n)=>{mh(t,e)}))}async function K1(t,e){N_(t),_h(t)?(t.Aa.la(e),gh(t)):t.Aa.set("Unknown")}async function G1(t,e,n){if(t.Aa.set("Online"),e instanceof __&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ta.delete(l),s.Ra.removeTarget(l))})(t,e)}catch(r){se(Rs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await cl(t,r)}else if(e instanceof La?t.Ra.Ye(e):e instanceof g_?t.Ra.it(e):t.Ra.et(e),!n.isEqual(ve.min()))try{const r=await R_(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const l=i.Ra.Pt(o);return l.targetChanges.forEach(((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ta.get(h);f&&i.Ta.set(h,f.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,h)=>{const f=i.Ta.get(c);if(!f)return;i.Ta.set(c,f.withResumeToken(Ct.EMPTY_BYTE_STRING,f.snapshotVersion)),V_(i,c);const g=new Mr(f.target,c,h,f.sequenceNumber);mh(i,g)})),i.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(r){se(Rs,"Failed to raise snapshot:",r),await cl(t,r)}}async function cl(t,e,n){if(!_i(e))throw e;t.Ia.add(1),await Bo(t),t.Aa.set("Offline"),n||(n=()=>R_(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{se(Rs,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Fl(t)}))}function x_(t,e){return e().catch((n=>cl(t,n,e)))}async function Ul(t){const e=we(t),n=Xr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:eh;for(;Q1(e);)try{const s=await k1(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,J1(e,s)}catch(s){await cl(e,s)}O_(e)&&M_(e)}function Q1(t){return Ds(t)&&t.Pa.length<10}function J1(t,e){t.Pa.push(e);const n=Xr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function O_(t){return Ds(t)&&!Xr(t).M_()&&t.Pa.length>0}function M_(t){Xr(t).start()}async function X1(t){Xr(t).na()}async function Y1(t){const e=Xr(t);for(const n of t.Pa)e.X_(n.mutations)}async function Z1(t,e,n){const r=t.Pa.shift(),s=ah.from(r,e,n);await x_(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Ul(t)}async function eA(t,e){e&&Xr(t).Z_&&await(async function(r,s){if((function(o){return Mb(o)&&o!==$.ABORTED})(s.code)){const i=r.Pa.shift();Xr(r).N_(),await x_(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Ul(r)}})(t,e),O_(t)&&M_(t)}async function Yf(t,e){const n=we(t);n.asyncQueue.verifyOperationInProgress(),se(Rs,"RemoteStore received new credentials");const r=Ds(n);n.Ia.add(3),await Bo(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Fl(n)}async function tA(t,e){const n=we(t);e?(n.Ia.delete(2),await Fl(n)):e||(n.Ia.add(2),await Bo(n),n.Aa.set("Unknown"))}function vi(t){return t.Va||(t.Va=(function(n,r,s){const i=we(n);return i.ia(),new U1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:H1.bind(null,t),e_:W1.bind(null,t),n_:K1.bind(null,t),J_:G1.bind(null,t)}),t.da.push((async e=>{e?(t.Va.N_(),_h(t)?gh(t):t.Aa.set("Unknown")):(await t.Va.stop(),N_(t))}))),t.Va}function Xr(t){return t.ma||(t.ma=(function(n,r,s){const i=we(n);return i.ia(),new $1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:X1.bind(null,t),n_:eA.bind(null,t),ea:Y1.bind(null,t),ta:Z1.bind(null,t)}),t.da.push((async e=>{e?(t.ma.N_(),await Ul(t)):(await t.ma.stop(),t.Pa.length>0&&(se(Rs,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))}))),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new yh(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vh(t,e){if(gr("AsyncQueue",`${e}: ${t}`),_i(t))return new re($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{static emptySet(e){return new ti(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ce.comparator(n.key,r.key):(n,r)=>ce.comparator(n.key,r.key),this.keyedMap=Hi(),this.sortedSet=new tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ti)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ti;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(){this.fa=new tt(ce.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):pe(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal(((n,r)=>{e.push(r)})),e}}class hi{constructor(e,n,r,s,i,o,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((l=>{o.push({type:0,doc:l})})),new hi(e,n,ti.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class rA{constructor(){this.queries=ep(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=we(n),i=s.queries;s.queries=ep(),i.forEach(((o,l)=>{for(const c of l.wa)c.onError(r)}))})(this,new re($.ABORTED,"Firestore shutting down"))}}function ep(){return new ks((t=>r_(t)),Vl)}async function L_(t,e){const n=we(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new nA,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=vh(o,`Initialization of query '${Gs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&wh(n)}async function F_(t,e){const n=we(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function sA(t,e){const n=we(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.wa)l.Ca(s)&&(r=!0);o.ya=s}}r&&wh(n)}function iA(t,e,n){const r=we(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function wh(t){t.Da.forEach((e=>{e.next()}))}var mu,tp;(tp=mu||(mu={})).Fa="default",tp.Cache="cache";class U_{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new hi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=hi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==mu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e){this.key=e}}class B_{constructor(e){this.key=e}}class oA{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Re(),this.mutatedKeys=Re(),this.Xa=s_(e),this.eu=new ti(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new Zf,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,g)=>{const y=s.get(f),P=Nl(this.query,g)?g:null,V=!!y&&this.mutatedKeys.has(y.key),x=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let L=!1;y&&P?y.data.isEqual(P.data)?V!==x&&(r.track({type:3,doc:P}),L=!0):this.iu(y,P)||(r.track({type:2,doc:P}),L=!0,(c&&this.Xa(P,c)>0||h&&this.Xa(P,h)<0)&&(l=!0)):!y&&P?(r.track({type:0,doc:P}),L=!0):y&&!P&&(r.track({type:1,doc:y}),L=!0,(c||h)&&(l=!0)),L&&(P?(o=o.add(P),i=x?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:l,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort(((f,g)=>(function(P,V){const x=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe(20277,{At:L})}};return x(P)-x(V)})(f.type,g.type)||this.Xa(f.doc,g.doc))),this.su(r),s=s!=null&&s;const l=n&&!s?this.ou():[],c=this.Za.size===0&&this.current&&!s?1:0,h=c!==this.Ya;return this.Ya=c,o.length!==0||h?{snapshot:new hi(this.query,e.eu,i,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Zf,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((n=>this.Ha=this.Ha.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ha=this.Ha.delete(n))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Re(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const n=[];return e.forEach((r=>{this.Za.has(r)||n.push(new B_(r))})),this.Za.forEach((r=>{e.has(r)||n.push(new $_(r))})),n}uu(e){this.Ha=e.qs,this.Za=Re();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return hi.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Eh="SyncEngine";class aA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class lA{constructor(e){this.key=e,this.lu=!1}}class cA{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new ks((l=>r_(l)),Vl),this.Tu=new Map,this.Iu=new Set,this.du=new tt(ce.comparator),this.Eu=new Map,this.Au=new uh,this.Ru={},this.Vu=new Map,this.mu=ui.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function uA(t,e,n=!0){const r=K_(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await j_(r,e,n,!0),s}async function hA(t,e){const n=K_(t);await j_(n,e,!0,!1)}async function j_(t,e,n,r){const s=await D1(t.localStore,zn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await dA(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&D_(t.remoteStore,s),l}async function dA(t,e,n,r,s){t.gu=(g,y,P)=>(async function(x,L,Y,W){let ne=L.view.nu(Y);ne.Ds&&(ne=await Kf(x.localStore,L.query,!1).then((({documents:S})=>L.view.nu(S,ne))));const Q=W&&W.targetChanges.get(L.targetId),he=W&&W.targetMismatches.get(L.targetId)!=null,be=L.view.applyChanges(ne,x.isPrimaryClient,Q,he);return rp(x,L.targetId,be._u),be.snapshot})(t,g,y,P);const i=await Kf(t.localStore,e,!0),o=new oA(e,i.qs),l=o.nu(i.documents),c=$o.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,c);rp(t,n,h._u);const f=new aA(e,n,o);return t.Pu.set(e,f),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),h.snapshot}async function fA(t,e,n){const r=we(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((o=>!Vl(o,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await fu(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&ph(r.remoteStore,s.targetId),gu(r,s.targetId)})).catch(gi)):(gu(r,s.targetId),await fu(r.localStore,s.targetId,!0))}async function pA(t,e){const n=we(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ph(n.remoteStore,r.targetId))}async function mA(t,e,n){const r=TA(t);try{const s=await(function(o,l){const c=we(o),h=Je.now(),f=l.reduce(((P,V)=>P.add(V.key)),Re());let g,y;return c.persistence.runTransaction("Locally write mutations","readwrite",(P=>{let V=_r(),x=Re();return c.Os.getEntries(P,f).next((L=>{V=L,V.forEach(((Y,W)=>{W.isValidDocument()||(x=x.add(Y))}))})).next((()=>c.localDocuments.getOverlayedDocuments(P,V))).next((L=>{g=L;const Y=[];for(const W of l){const ne=Db(W,g.get(W.key).overlayedDocument);ne!=null&&Y.push(new ts(W.key,ne,Qg(ne.value.mapValue),bn.exists(!0)))}return c.mutationQueue.addMutationBatch(P,h,Y,l)})).next((L=>{y=L;const Y=L.applyToLocalDocumentSet(g,x);return c.documentOverlayCache.saveOverlays(P,L.batchId,Y)}))})).then((()=>({batchId:y.batchId,changes:o_(g)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,l,c){let h=o.Ru[o.currentUser.toKey()];h||(h=new tt(Ae)),h=h.insert(l,c),o.Ru[o.currentUser.toKey()]=h})(r,s.batchId,n),await jo(r,s.changes),await Ul(r.remoteStore)}catch(s){const i=vh(s,"Failed to persist write");n.reject(i)}}async function q_(t,e){const n=we(t);try{const r=await R1(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Eu.get(i);o&&(Fe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?Fe(o.lu,14607):s.removedDocuments.size>0&&(Fe(o.lu,42227),o.lu=!1))})),await jo(n,r,e)}catch(r){await gi(r)}}function np(t,e,n){const r=we(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach(((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(o,l){const c=we(o);c.onlineState=l;let h=!1;c.queries.forEach(((f,g)=>{for(const y of g.wa)y.va(l)&&(h=!0)})),h&&wh(c)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function gA(t,e,n){const r=we(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new tt(ce.comparator);o=o.insert(i,Lt.newNoDocument(i,ve.min()));const l=Re().add(i),c=new Ml(ve.min(),new Map,new tt(Ae),o,l);await q_(r,c),r.du=r.du.remove(i),r.Eu.delete(e),Th(r)}else await fu(r.localStore,e,!1).then((()=>gu(r,e,n))).catch(gi)}async function _A(t,e){const n=we(t),r=e.batch.batchId;try{const s=await C1(n.localStore,e);H_(n,r,null),z_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await jo(n,s)}catch(s){await gi(s)}}async function yA(t,e,n){const r=we(t);try{const s=await(function(o,l){const c=we(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next((g=>(Fe(g!==null,37113),f=g.keys(),c.mutationQueue.removeMutationBatch(h,g)))).next((()=>c.mutationQueue.performConsistencyCheck(h))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f))).next((()=>c.localDocuments.getDocuments(h,f)))}))})(r.localStore,e);H_(r,e,n),z_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await jo(r,s)}catch(s){await gi(s)}}function z_(t,e){(t.Vu.get(e)||[]).forEach((n=>{n.resolve()})),t.Vu.delete(e)}function H_(t,e,n){const r=we(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function gu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach((r=>{t.Au.containsKey(r)||W_(t,r)}))}function W_(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(ph(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),Th(t))}function rp(t,e,n){for(const r of n)r instanceof $_?(t.Au.addReference(r.key,e),vA(t,r)):r instanceof B_?(se(Eh,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||W_(t,r.key)):pe(19791,{yu:r})}function vA(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(se(Eh,"New document in limbo: "+n),t.Iu.add(r),Th(t))}function Th(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new ce(Ge.fromString(e)),r=t.mu.next();t.Eu.set(r,new lA(n)),t.du=t.du.insert(n,r),D_(t.remoteStore,new Mr(zn(Dl(n.path)),r,"TargetPurposeLimboResolution",Rl.ue))}}async function jo(t,e,n){const r=we(t),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach(((l,c)=>{o.push(r.gu(c,e,n).then((h=>{var f;if((h||n)&&r.isPrimaryClient){const g=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(h){s.push(h);const g=dh.Es(c.targetId,h);i.push(g)}})))})),await Promise.all(o),r.hu.J_(s),await(async function(c,h){const f=we(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>q.forEach(h,(y=>q.forEach(y.Is,(P=>f.persistence.referenceDelegate.addReference(g,y.targetId,P))).next((()=>q.forEach(y.ds,(P=>f.persistence.referenceDelegate.removeReference(g,y.targetId,P)))))))))}catch(g){if(!_i(g))throw g;se(fh,"Failed to update sequence numbers: "+g)}for(const g of h){const y=g.targetId;if(!g.fromCache){const P=f.Fs.get(y),V=P.snapshotVersion,x=P.withLastLimboFreeSnapshotVersion(V);f.Fs=f.Fs.insert(y,x)}}})(r.localStore,i))}async function wA(t,e){const n=we(t);if(!n.currentUser.isEqual(e)){se(Eh,"User change. New user:",e.toKey());const r=await C_(n.localStore,e);n.currentUser=e,(function(i,o){i.Vu.forEach((l=>{l.forEach((c=>{c.reject(new re($.CANCELLED,o))}))})),i.Vu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await jo(n,r.Bs)}}function EA(t,e){const n=we(t),r=n.Eu.get(e);if(r&&r.lu)return Re().add(r.key);{let s=Re();const i=n.Tu.get(e);if(!i)return s;for(const o of i){const l=n.Pu.get(o);s=s.unionWith(l.view.tu)}return s}}function K_(t){const e=we(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=q_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=EA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gA.bind(null,e),e.hu.J_=sA.bind(null,e.eventManager),e.hu.pu=iA.bind(null,e.eventManager),e}function TA(t){const e=we(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_A.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yA.bind(null,e),e}class ul{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ll(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return S1(this.persistence,new I1,e.initialUser,this.serializer)}Du(e){return new S_(hh.Vi,this.serializer)}bu(e){return new N1}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ul.provider={build:()=>new ul};class IA extends ul{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){Fe(this.persistence.referenceDelegate instanceof ll,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new l1(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?Gt.withCacheSize(this.cacheSizeBytes):Gt.DEFAULT;return new S_((r=>ll.Vi(r,n)),this.serializer)}}class _u{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>np(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=wA.bind(null,this.syncEngine),await tA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new rA})()}createDatastore(e){const n=Ll(e.databaseInfo.databaseId),r=(function(i){return new F1(i)})(e.databaseInfo);return(function(i,o,l,c){return new j1(i,o,l,c)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,l){return new z1(r,s,i,o,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>np(this.syncEngine,n,0)),(function(){return Jf.C()?new Jf:new x1})())}createSyncEngine(e,n){return(function(s,i,o,l,c,h,f){const g=new cA(s,i,o,l,c,h);return f&&(g.fu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=we(s);se(Rs,"RemoteStore shutting down."),i.Ia.add(5),await Bo(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}_u.provider={build:()=>new _u};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):gr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr="FirestoreClient";class bA{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ot.UNAUTHENTICATED,this.clientId=Zu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{se(Yr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(se(Yr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=vh(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Sc(t,e){t.asyncQueue.verifyOperationInProgress(),se(Yr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await C_(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Wr("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then((()=>{se("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Wr("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),t._offlineComponents=e}async function sp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await AA(t);se(Yr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>Yf(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>Yf(e.remoteStore,s))),t._onlineComponents=e}async function AA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){se(Yr,"Using user provided OfflineComponentProvider");try{await Sc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===$.FAILED_PRECONDITION||s.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Wr("Error using user provided cache. Falling back to memory cache: "+n),await Sc(t,new ul)}}else se(Yr,"Using default OfflineComponentProvider"),await Sc(t,new IA(void 0));return t._offlineComponents}async function Q_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(se(Yr,"Using user provided OnlineComponentProvider"),await sp(t,t._uninitializedComponentsProvider._online)):(se(Yr,"Using default OnlineComponentProvider"),await sp(t,new _u))),t._onlineComponents}function SA(t){return Q_(t).then((e=>e.syncEngine))}async function yu(t){const e=await Q_(t),n=e.eventManager;return n.onListen=uA.bind(null,e.syncEngine),n.onUnlisten=fA.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=hA.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=pA.bind(null,e.syncEngine),n}function CA(t,e,n={}){const r=new qr;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,h){const f=new G_({next:y=>{f.Ou(),o.enqueueAndForget((()=>F_(i,g)));const P=y.docs.has(l);!P&&y.fromCache?h.reject(new re($.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&y.fromCache&&c&&c.source==="server"?h.reject(new re($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),g=new U_(Dl(l.path),f,{includeMetadataChanges:!0,ka:!0});return L_(i,g)})(await yu(t),t.asyncQueue,e,n,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_="firestore.googleapis.com",op=!0;class ap{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=X_,this.ssl=op}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:op;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=A_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<o1)throw new re($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}z0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=J_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new re($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new re($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new re($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class $l{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ap({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ap(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new O0;switch(r.type){case"firstParty":return new U0(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=ip.get(n);r&&(se("ComponentProvider","Removing Datastore"),ip.delete(n),r.terminate())})(this),Promise.resolve()}}function RA(t,e,n,r={}){var s;t=In(t,$l);const i=di(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(Hm(`https://${c}`),Wm("Firestore",!0)),o.host!==X_&&o.host!==c&&Wr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:r});if(!bs(h,l)&&(t._setSettings(h),r.mockUserToken)){let f,g;if(typeof r.mockUserToken=="string")f=r.mockUserToken,g=Ot.MOCK_USER;else{f=aE(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new re($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Ot(y)}t._authCredentials=new M0(new Mg(f,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Vs(this.firestore,e,this._query)}}class ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}toJSON(){return{type:ot._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Fo(n,ot._jsonSchema))return new ot(e,r||null,new ce(Ge.fromString(n.referencePath)))}}ot._jsonSchemaVersion="firestore/documentReference/1.0",ot._jsonSchema={type:ft("string",ot._jsonSchemaVersion),referencePath:ft("string")};class zr extends Vs{constructor(e,n,r){super(e,n,Dl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new ce(e))}withConverter(e){return new zr(this.firestore,e,this._path)}}function Cc(t,e,...n){if(t=Et(t),Fg("collection","path",e),t instanceof $l){const r=Ge.fromString(e,...n);return wf(r),new zr(t,null,r)}{if(!(t instanceof ot||t instanceof zr))throw new re($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ge.fromString(e,...n));return wf(r),new zr(t.firestore,null,r)}}function gn(t,e,...n){if(t=Et(t),arguments.length===1&&(e=Zu.newId()),Fg("doc","path",e),t instanceof $l){const r=Ge.fromString(e,...n);return vf(r),new ot(t,null,new ce(r))}{if(!(t instanceof ot||t instanceof zr))throw new re($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ge.fromString(e,...n));return vf(r),new ot(t.firestore,t instanceof zr?t.converter:null,new ce(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp="AsyncQueue";class cp{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new P_(this,"async_queue_retry"),this.oc=()=>{const r=Ac();r&&se(lp,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=Ac();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Ac();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const n=new qr;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!_i(e))throw e;se(lp,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const n=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,gr("INTERNAL UNHANDLED ERROR: ",up(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=yh.createAndSchedule(this,e,n,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&pe(47125,{hc:up(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function up(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}class Ps extends $l{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new cp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new cp(e),this._firestoreClient=void 0,await e}}}function PA(t,e){const n=typeof t=="object"?t:Jm(),r=typeof t=="string"?t:rl,s=$u(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=iE("firestore");i&&RA(s,...i)}return s}function Ih(t){if(t._terminated)throw new re($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||kA(t),t._firestoreClient}function kA(t){var e,n,r;const s=t._freezeSettings(),i=(function(l,c,h,f){return new tb(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,J_(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new bA(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&(function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cn(Ct.fromBase64String(e))}catch(n){throw new re($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new cn(Ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:cn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Fo(e,cn._jsonSchema))return cn.fromBase64String(e.bytes)}}cn._jsonSchemaVersion="firestore/bytes/1.0",cn._jsonSchema={type:ft("string",cn._jsonSchemaVersion),bytes:ft("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new St(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Wn._jsonSchemaVersion}}static fromJSON(e){if(Fo(e,Wn._jsonSchema))return new Wn(e.latitude,e.longitude)}}Wn._jsonSchemaVersion="firestore/geoPoint/1.0",Wn._jsonSchema={type:ft("string",Wn._jsonSchemaVersion),latitude:ft("number"),longitude:ft("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Kn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Fo(e,Kn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Kn(e.vectorValues);throw new re($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Kn._jsonSchemaVersion="firestore/vectorValue/1.0",Kn._jsonSchema={type:ft("string",Kn._jsonSchemaVersion),vectorValues:ft("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=/^__.*__$/;class VA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ts(e,this.data,this.fieldMask,n,this.fieldTransforms):new Uo(e,this.data,n,this.fieldTransforms)}}class Y_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ts(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Z_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe(40011,{Ec:t})}}class bh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new bh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return hl(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Z_(this.Ec)&&DA.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class NA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ll(e)}Dc(e,n,r,s=!1){return new bh({Ec:e,methodName:n,bc:r,path:St.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ah(t){const e=t._freezeSettings(),n=Ll(t._databaseId);return new NA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function xA(t,e,n,r,s,i={}){const o=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);Ch("Data must be an object, but it was:",o,r);const l=ey(r,o);let c,h;if(i.merge)c=new on(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const y=vu(e,g,n);if(!o.contains(y))throw new re($.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);ny(f,y)||f.push(y)}c=new on(f),h=o.fieldTransforms.filter((g=>c.covers(g.field)))}else c=null,h=o.fieldTransforms;return new VA(new Qt(l),c,h)}class qo extends jl{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qo}}class Sh extends jl{_toFieldTransform(e){return new Cb(e.path,new So)}isEqual(e){return e instanceof Sh}}function OA(t,e,n,r){const s=t.Dc(1,e,n);Ch("Data must be an object, but it was:",s,r);const i=[],o=Qt.empty();es(r,((c,h)=>{const f=Rh(e,c,n);h=Et(h);const g=s.gc(f);if(h instanceof qo)i.push(f);else{const y=zo(h,g);y!=null&&(i.push(f),o.set(f,y))}}));const l=new on(i);return new Y_(o,l,s.fieldTransforms)}function MA(t,e,n,r,s,i){const o=t.Dc(1,e,n),l=[vu(e,r,n)],c=[s];if(i.length%2!=0)throw new re($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<i.length;y+=2)l.push(vu(e,i[y])),c.push(i[y+1]);const h=[],f=Qt.empty();for(let y=l.length-1;y>=0;--y)if(!ny(h,l[y])){const P=l[y];let V=c[y];V=Et(V);const x=o.gc(P);if(V instanceof qo)h.push(P);else{const L=zo(V,x);L!=null&&(h.push(P),f.set(P,L))}}const g=new on(h);return new Y_(f,g,o.fieldTransforms)}function LA(t,e,n,r=!1){return zo(n,t.Dc(r?4:3,e))}function zo(t,e){if(ty(t=Et(t)))return Ch("Unsupported field value:",e,t),ey(t,e);if(t instanceof jl)return(function(r,s){if(!Z_(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const l of r){let c=zo(l,s.yc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=Et(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return bb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Je.fromDate(r);return{timestampValue:al(s.serializer,i)}}if(r instanceof Je){const i=new Je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:al(s.serializer,i)}}if(r instanceof Wn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cn)return{bytesValue:y_(s.serializer,r._byteString)};if(r instanceof ot){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ch(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Kn)return(function(o,l){return{mapValue:{fields:{[Kg]:{stringValue:Gg},[sl]:{arrayValue:{values:o.toArray().map((h=>{if(typeof h!="number")throw l.wc("VectorValues must only contain numeric values.");return ih(l.serializer,h)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${Cl(r)}`)})(t,e)}function ey(t,e){const n={};return Bg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):es(t,((r,s)=>{const i=zo(s,e.Vc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function ty(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Je||t instanceof Wn||t instanceof cn||t instanceof ot||t instanceof jl||t instanceof Kn)}function Ch(t,e,n){if(!ty(n)||!Ug(n)){const r=Cl(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function vu(t,e,n){if((e=Et(e))instanceof Bl)return e._internalPath;if(typeof e=="string")return Rh(t,e);throw hl("Field path arguments must be of type string or ",t,!1,void 0,n)}const FA=new RegExp("[~\\*/\\[\\]]");function Rh(t,e,n){if(e.search(FA)>=0)throw hl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Bl(...e.split("."))._internalPath}catch{throw hl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function hl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new re($.INVALID_ARGUMENT,l+t+c)}function ny(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new UA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ph("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class UA extends ry{data(){return super.data()}}function Ph(t,e){return typeof e=="string"?Rh(t,e):e instanceof Bl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new re($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kh{}class sy extends kh{}function dp(t,e,...n){let r=[];e instanceof kh&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((c=>c instanceof Vh)).length,l=i.filter((c=>c instanceof Dh)).length;if(o>1||o>0&&l>0)throw new re($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class Dh extends sy{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Dh(e,n,r)}_apply(e){const n=this._parse(e);return iy(e._query,n),new Vs(e.firestore,e.converter,au(e._query,n))}_parse(e){const n=Ah(e.firestore);return(function(i,o,l,c,h,f,g){let y;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new re($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){mp(g,f);const V=[];for(const x of g)V.push(pp(c,i,x));y={arrayValue:{values:V}}}else y=pp(c,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||mp(g,f),y=LA(l,o,g,f==="in"||f==="not-in");return dt.create(h,f,y)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Vh extends kh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Vh(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:Cn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)iy(o,c),o=au(o,c)})(e._query,n),new Vs(e.firestore,e.converter,au(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Nh extends sy{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Nh(e,n)}_apply(e){const n=(function(s,i,o){if(s.startAt!==null)throw new re($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new re($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ao(i,o)})(e._query,this._field,this._direction);return new Vs(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new yi(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,n))}}function fp(t,e="asc"){const n=e,r=Ph("orderBy",t);return Nh._create(r,n)}function pp(t,e,n){if(typeof(n=Et(n))=="string"){if(n==="")throw new re($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!n_(e)&&n.indexOf("/")!==-1)throw new re($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ge.fromString(n));if(!ce.isDocumentKey(r))throw new re($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Rf(t,new ce(r))}if(n instanceof ot)return Rf(t,n._key);throw new re($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Cl(n)}.`)}function mp(t,e){if(!Array.isArray(t)||t.length===0)throw new re($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function iy(t,e){const n=(function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new re($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new re($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class BA{convertValue(e,n="none"){switch(Jr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Qr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw pe(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return es(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[sl].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((o=>lt(o.doubleValue)));return new Kn(i)}convertGeoPoint(e){return new Wn(lt(e.latitude),lt(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=kl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(To(e));default:return null}}convertTimestamp(e){const n=Gr(e);return new Je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ge.fromString(e);Fe(b_(r),9688,{name:e});const s=new Io(r.get(1),r.get(3)),i=new ce(r.popFirst(5));return s.isEqual(n)||gr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Ki{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Is extends ry{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Fa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ph("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new re($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Is._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Is._jsonSchemaVersion="firestore/documentSnapshot/1.0",Is._jsonSchema={type:ft("string",Is._jsonSchemaVersion),bundleSource:ft("string","DocumentSnapshot"),bundleName:ft("string"),bundle:ft("string")};class Fa extends Is{data(e={}){return super.data(e)}}class ni{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ki(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new Fa(this._firestore,this._userDataWriter,r.key,r,new Ki(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new re($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((l=>{const c=new Fa(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ki(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new Fa(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ki(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:qA(l.type),doc:c,oldIndex:h,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new re($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ni._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Zu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function qA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(t){t=In(t,ot);const e=In(t.firestore,Ps);return CA(Ih(e),t._key).then((n=>ay(e,t,n)))}ni._jsonSchemaVersion="firestore/querySnapshot/1.0",ni._jsonSchema={type:ft("string",ni._jsonSchemaVersion),bundleSource:ft("string","QuerySnapshot"),bundleName:ft("string"),bundle:ft("string")};class oy extends BA{constructor(e){super(),this.firestore=e}convertBytes(e){return new cn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,n)}}function Li(t,e,n){t=In(t,ot);const r=In(t.firestore,Ps),s=jA(t.converter,e,n);return xh(r,[xA(Ah(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,bn.none())])}function Fi(t,e,n,...r){t=In(t,ot);const s=In(t.firestore,Ps),i=Ah(s);let o;return o=typeof(e=Et(e))=="string"||e instanceof Bl?MA(i,"updateDoc",t._key,e,n,r):OA(i,"updateDoc",t._key,e),xh(s,[o.toMutation(t._key,bn.exists(!0))])}function HA(t){return xh(In(t.firestore,Ps),[new oh(t._key,bn.none())])}function ba(t,...e){var n,r,s;t=Et(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||hp(e[o])||(i=e[o++]);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(hp(e[o])){const g=e[o];e[o]=(n=g.next)===null||n===void 0?void 0:n.bind(g),e[o+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[o+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let c,h,f;if(t instanceof ot)h=In(t.firestore,Ps),f=Dl(t._key.path),c={next:g=>{e[o]&&e[o](ay(h,t,g))},error:e[o+1],complete:e[o+2]};else{const g=In(t,Vs);h=In(g.firestore,Ps),f=g._query;const y=new oy(h);c={next:P=>{e[o]&&e[o](new ni(h,y,g,P))},error:e[o+1],complete:e[o+2]},$A(t._query)}return(function(y,P,V,x){const L=new G_(x),Y=new U_(P,L,V);return y.asyncQueue.enqueueAndForget((async()=>L_(await yu(y),Y))),()=>{L.Ou(),y.asyncQueue.enqueueAndForget((async()=>F_(await yu(y),Y)))}})(Ih(h),f,l,c)}function xh(t,e){return(function(r,s){const i=new qr;return r.asyncQueue.enqueueAndForget((async()=>mA(await SA(r),s,i))),i.promise})(Ih(t),e)}function ay(t,e,n){const r=n.docs.get(e._key),s=new oy(t);return new Is(t,s,e._key,r,new Ki(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(){return new qo("deleteField")}function Ui(){return new Sh("serverTimestamp")}(function(e,n=!0){(function(s){mi=s})(fi),ii(new As("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Ps(new L0(r.getProvider("auth-internal")),new $0(o,r.getProvider("app-check-internal")),(function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new re($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Io(h.options.projectId,f)})(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),Br(pf,mf,e),Br(pf,mf,"esm2017")})();var WA="firebase",KA="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Br(WA,KA,"app");const Ua={apiKey:"AIzaSyApsoJQfyOGdk_mjXTDm-XRGEoOLNqC97Q",authDomain:"diet-67.firebaseapp.com",projectId:"diet-67",storageBucket:"diet-67.firebasestorage.app",messagingSenderId:"680276410340",appId:"1:680276410340:web:7a414f113cf43212ddd1f1"},ly=!!(Ua.apiKey&&Ua.projectId&&Ua.appId),dl=ly?Qm(Ua):null,qs=dl?N0(dl):null,Qe=dl?PA(dl):null,GA=new cr,cy=["calories","carbs","protein","fat","fiber","salt"];function uy(){return{calories:null,carbs:null,protein:null,fat:null,fiber:null,salt:null}}function QA(t){return typeof t=="object"&&t!==null?t:void 0}function hy(t){if(typeof t=="object"&&t!==null){const n=t;return hy(n.value_computed??n.value??n.value_string)}if(typeof t!="number"&&typeof t!="string"||String(t).trim()==="")return null;const e=Number(t);return Number.isFinite(e)&&e>=0?e:null}function Pc(t){const e=QA(t);if(!e)return;const n=uy();let r=!1;for(const s of cy){const i=hy(e[s]);n[s]=i,i!==null&&(r=!0)}return r?n:void 0}function kc(t){var n;const e={};for(const r of cy){let s=0,i=0;for(const l of t){const c=String(l.quantity??"").trim();if(!c)continue;const h=Number(c);if(!Number.isFinite(h)||h<0)continue;const f=l.nutritionBasis||"100g",g=l.quantityUnit||"g";if(!(f==="100g"&&g==="g"||f==="unit"&&g==="unit"))continue;const P=(n=l.nutrition)==null?void 0:n[r];typeof P!="number"||!Number.isFinite(P)||P<0||(s+=P*(f==="100g"?h/100:h),i+=1)}const o={value:i?Number(s.toFixed(2)):null,knownIngredients:i,totalIngredients:t.length};e[r]=o}return e}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Dc(t){return t!=null}function JA(t,e={}){var y,P;const n=e.attributeNames??{},r=V=>n[V]??V,s=t.size??t.width??fs.width,i=t.size??t.height??fs.height,o=((y=t.aliases)==null?void 0:y.filter(V=>typeof V=="string"&&V.trim()!=="").map(V=>`lucide-${V}`))??[],l=[...t.name?[`lucide-${t.name}`]:[],...o],c=((P=e.className)==null?void 0:P.split(" ").filter(Boolean))??[],h=e.includeDefaultClasses===!1?gp(...c):gp("lucide",...l,...c),f=e.absoluteStrokeWidth?Number(e.strokeWidth??fs["stroke-width"])*Number(t.size??t.width??fs.width)/Number(e.size??e.width??fs.width):e.strokeWidth??fs["stroke-width"];return["svg",{...Object.entries(fs).reduce((V,[x,L])=>(V[r(x)]=L,V),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&Dc(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&Dc(e.width)&&{[r("width")]:e.width},..."height"in e&&Dc(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:f,...h&&{[r("class")]:h},[r("viewBox")]:`0 0 ${s} ${i}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(V=>{const[x,L,Y]=V,W=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...L}:L;return Y?[x,W,Y]:[x,W]})]}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=t=>t==="";/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=Symbol("lucide-icons");function eS(){return Xi(ZA,{})}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=({name:t,iconNode:e,"icon-node":n,icon:r={name:t&&YA(t),node:e??n??[],size:24,aliases:[]},absoluteStrokeWidth:s,"absolute-stroke-width":i,nonScalingStroke:o,"non-scaling-stroke":l,strokeWidth:c,"stroke-width":h,size:f,width:g=f,height:y=f,color:P,...V},{slots:x})=>{var k;const{size:L,color:Y,strokeWidth:W=2,absoluteStrokeWidth:ne=!1,nonScalingStroke:Q=!1,class:he=""}=eS(),be=Aa(s)||Aa(i)||s===!0||i===!0||ne===!0,S=Aa(o)||Aa(l)||o===!0||l===!0||Q===!0;delete V.class;const v=(k=x.default)==null?void 0:k.call(x),[,T,R=[]]=JA(r,{color:P??Y,width:g??f??L,height:y??f??L,strokeWidth:c??h??W,absoluteStrokeWidth:be,nonScalingStroke:S,className:he,hasA11yProp:v!=null&&v.length>0||XA(V),attributes:V});return Hc("svg",T,[...R.map(([D,b])=>Hc(D,b)),...v??[]])};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Xe(t,e=[]){const n=typeof t=="string"?{name:t,node:e}:t;return(r,{slots:s})=>Hc(tS,{...r,icon:n},s.default?{default:s.default}:void 0)}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS={name:"chart-pie",size:24,node:[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]],aliases:["pie-chart"]},rS=Xe(nS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]},zs=Xe(sS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS={name:"chef-hat",size:24,node:[["path",{d:"M10 11v5",key:"urfl79"}],["path",{d:"M14 11v5",key:"w9lfkh"}],["path",{d:"M6 12.65c0-.457-.316-.844-.727-1.041A4 4 0 017.52 4.034a1.53 1.53 0 001.367-.547 4 4 0 016.225 0 1.53 1.53 0 001.367.547 4 4 0 012.248 7.575c-.411.197-.727.584-.727 1.04V19a2 2 0 01-2 2H8a2 2 0 01-2-2z",key:"1dq1bt"}],["path",{d:"M6 16h12",key:"u522kt"}]]},_p=Xe(iS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]},aS=Xe(oS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]},yp=Xe(lS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]},Hs=Xe(cS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS={name:"chevron-up",size:24,node:[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]},hS=Xe(uS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]},vp=Xe(dS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]},wp=Xe(fS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS={name:"layout-grid",size:24,node:[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]},mS=Xe(pS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS={name:"list",size:24,node:[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]]},_S=Xe(gS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]},vS=Xe(yS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]},ES=Xe(wS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS={name:"pencil",size:24,node:[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]},IS=Xe(TS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]},Vc=Xe(bS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]},SS=Xe(AS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS={name:"shopping-basket",size:24,node:[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]]},Ep=Xe(CS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS={name:"shopping-cart",size:24,node:[["path",{d:"m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18",key:"uebgi3"}],["path",{d:"M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25",key:"1j7c9p"}],["circle",{cx:"18",cy:"20",r:"2",key:"t9985n"}],["circle",{cx:"8",cy:"20",r:"2",key:"ckkr5m"}]]},PS=Xe(RS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS={name:"sliders-horizontal",size:24,node:[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]]},Tp=Xe(kS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]},VS=Xe(DS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS={name:"store",size:24,node:[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5",key:"slp6dd"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",key:"o0xfot"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05",key:"wn3emo"}]]},Ip=Xe(NS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]},OS=Xe(xS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]},bp=Xe(MS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS={name:"utensils",size:24,node:[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],aliases:["fork-knife"]},Ap=Xe(LS);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]},$i=Xe(FS),US={key:0,class:"auth-screen center-state"},$S={class:"state-icon"},BS={key:1,class:"auth-screen center-state"},jS={key:2,class:"auth-screen login-state"},qS={class:"hero-orbit"},zS={class:"hero-plate"},HS={key:0,class:"error-text"},WS={key:3,class:"auth-screen center-state"},KS={class:"state-icon"},GS={key:4,class:"app-shell"},QS={class:"app-topbar"},JS={class:"header-main-row"},XS={class:"brand top-brand"},YS={class:"brand-mark"},ZS={class:"brand-copy"},eC={class:"brand-version"},tC={class:"header-date"},nC={class:"top-actions"},rC=["title"],sC={class:"top-nav","aria-label":"Main navigation"},iC=["onClick"],oC={class:"main-content"},aC={key:0,class:"page plan-page"},lC={class:"page-heading compact plan-heading section-heading"},cC={class:"plan-toolbar"},uC={class:"mobile-plan-view-toolbar",role:"group","aria-label":"Weekly view"},hC=["aria-pressed"],dC=["aria-pressed"],fC=["disabled"],pC={class:"week-range-display","aria-live":"polite"},mC=["data-day-key"],gC={class:"plan-day-heading"},_C={class:"day-weekday"},yC={key:0,class:"today-marker"},vC={class:"plan-day-meals"},wC={class:"plan-meal-meta"},EC={class:"day-meal-type"},TC={class:"day-meal-time"},IC={class:"meal-picker-actions day-meal-picker-actions"},bC=["aria-expanded","onClick"],AC=["onClick"],SC={key:0,class:"day-meal-actions"},CC=["onClick"],RC=["onClick"],PC={key:1,class:"page"},kC={class:"page-heading compact section-heading meals-page-heading"},DC={class:"meals-heading-actions"},VC={class:"meals-filter-toggle"},NC={class:"search-box meals-search-box"},xC={key:0,class:"meals-list"},OC={class:"meal-row-number"},MC={class:"meal-row-main"},LC={class:"meal-title"},FC={key:0,class:"meal-nutrition-indicator",title:"Nutrition values are present.","aria-label":"Nutrition values are present.",role:"img"},UC={key:0,class:"ingredient-preview"},$C={key:0},BC={key:1},jC={class:"meal-controls"},qC={class:"frequency"},zC={class:"meal-variable-toggle"},HC=["onUpdate:modelValue","onChange"],WC={class:"frequency-metric"},KC={class:"frequency-metric"},GC={class:"row-actions"},QC=["onClick"],JC=["onClick"],XC=["onClick"],YC={key:1,class:"empty-collection"},ZC={class:"state-icon"},eR={key:2,class:"page insights-page"},tR={class:"page-heading compact section-heading insights-heading"},nR={class:"insights-heading-actions"},rR={key:0,class:"nutrition-profile-panel"},sR={class:"nutrition-profile-grid"},iR={class:"nutrition-profile-footer"},oR={class:"nutrition-profile-actions"},aR={role:"status"},lR=["disabled"],cR={class:"insights-section"},uR={class:"insights-section-heading insights-week-heading"},hR={class:"plan-toolbar insights-week-toolbar"},dR=["disabled"],fR={class:"week-range-display","aria-live":"polite"},pR={class:"insights-summary-grid"},mR={class:"insights-section"},gR={class:"insights-days"},_R={class:"insight-day-heading"},yR={class:"insight-daily-reference-grid"},vR={key:0,class:"insight-day-meals"},wR={class:"insight-meal-title"},ER={class:"insight-nutrient-values"},TR={key:1,class:"insight-empty-day"},IR={key:3,class:"page shopping-page"},bR={class:"page-heading compact section-heading shopping-page-heading"},AR={class:"shopping-heading-actions"},SR={class:"shopping-filter-toggle"},CR=["aria-expanded"],RR={key:0,class:"shopping-groups"},PR={class:"shopping-store-heading"},kR={class:"shopping-item-info"},DR={key:0},VR={key:1},NR=["aria-label"],xR=["onClick"],OR=["onClick"],MR=["onClick"],LR={key:1,class:"empty-collection"},FR={class:"muted"},UR={class:"meal-modal store-priority-modal"},$R={class:"modal-header"},BR={key:0,class:"store-priority-list"},jR={class:"priority-position"},qR={class:"store-priority-item-info"},zR={class:"priority-reorder-actions"},HR=["disabled","onClick"],WR=["disabled","onClick"],KR={key:1,class:"empty-priority-state"},GR={class:"modal-actions"},QR=["disabled"],JR={class:"modal-header"},XR={key:0,class:"meal-view-content"},YR={key:0,class:"empty-form-hint"},ZR={class:"meal-view-ingredient-heading"},eP={key:0,class:"meal-view-quantity"},tP={class:"meal-view-nutrition"},nP={class:"meal-view-nutrition-basis"},rP={key:0,class:"meal-view-nutrition-values"},sP={key:1,class:"meal-view-no-nutrition"},iP={key:1,class:"meal-editor-fieldset"},oP={class:"form-field meal-name-field"},aP={class:"ingredients-editor"},lP={class:"ingredients-editor-heading"},cP={key:0,class:"empty-form-hint"},uP={class:"ingredient-editor-fields"},hP={class:"form-field ingredient-name-field"},dP=["onUpdate:modelValue"],fP={class:"form-field ingredient-quantity-field"},pP=["value","step","inputmode","placeholder","onInput"],mP=["aria-expanded","onClick"],gP=["onClick"],_P=["onClick"],yP={class:"quantity-option-symbol"},vP={class:"store-picker-line"},wP=["aria-expanded","onClick"],EP=["onClick"],TP=["onClick"],IP=["aria-expanded","aria-controls","aria-label","onClick"],bP=["onClick"],AP=["id"],SP=["onKeydown"],CP=["disabled","onClick"],RP={class:"nutrition-editor-content"},PP={class:"nutrition-basis-row"},kP=["for"],DP=["id","value","onChange"],VP={key:0,class:"nutrition-unit-warning"},NP={class:"nutrition-input-grid"},xP=["value","onInput"],OP={key:2,class:"modal-actions"},Sp="2026-11-16",MP=mv({__name:"App",setup(t){const e=Jw.version,n=De(null),r=De(!1),s=De(!0),i=De(""),o=De([]),l=De([]),c=De({}),h=De("home"),f=De(localStorage.getItem("diet-theme")||"dark"),g=De(""),y=De(!0),P=De("inline"),V=De({weightKg:60,heightCm:170,age:null,sex:"",activityLevel:"sedentary"}),x=De(!1),L=De(!1),Y=De(""),W=De(!1),ne=De(null),Q=De(!1),he=De(null),be=De(null),S=De({visibility:"hidden"}),v=De({name:"",variable:!1,ingredients:[]}),T=De(null),R=De(""),k=De({}),D=De([]),b=De([]),Ye=De(!1),Jt=vt(()=>{const I=new Map(l.value.map(A=>[A.id,A])),p=D.value.map(A=>I.get(A)).filter(A=>!!A),m=new Set(p.map(A=>A.id));return[...p,...l.value.filter(A=>!m.has(A.id))]}),nt=vt(()=>{const I=new Map(l.value.map(p=>[p.id,p]));return b.value.map(p=>I.get(p)).filter(p=>!!p)}),Ve=["breakfast","lunch","snack","dinner"],Pe={home:"Home",meals:"Meals",shopping:"Shopping",insights:"Insights"},Ht={breakfast:"Breakfast",lunch:"Lunch",snack:"Snack",dinner:"Dinner"},er=["10:00","13:00","16:00","20:00"],ct=new Date,me=I=>`${I.getFullYear()}-${String(I.getMonth()+1).padStart(2,"0")}-${String(I.getDate()).padStart(2,"0")}`,Ze=me(ct),Rn=new Date(2026,10,16),fn=ct<Rn?Rn:ct,Wt=new Date(ct);ct.getDay()===6?Wt.setDate(Wt.getDate()+2):ct.getDay()===0&&Wt.setDate(Wt.getDate()+1);const $t=De(new Date(Wt<Rn?Rn:Wt)),pn=De(ct.getDay()===0||ct.getDay()===6?"next":"this"),Xt=De(!0),ns=vt(()=>me($t.value)),E=I=>{const[p,m,A]=I.split("-").map(Number);return new Date(p,m-1,A)},C=I=>{const p=new Date(I);return p.setHours(0,0,0,0),p.setDate(p.getDate()-(p.getDay()+6)%7),p},O=me(C(Rn)),H=vt(()=>{const I=C(ct);return pn.value==="next"&&I.setDate(I.getDate()+7),me(I)}),B=vt(()=>me(C($t.value))>O),z=I=>new Intl.DateTimeFormat("en-US",{weekday:"long",day:"numeric",month:"long"}).format(I),J=I=>new Intl.DateTimeFormat("en-US",{day:"numeric",month:"short"}).format(I),X=vt(()=>o.value.filter(I=>!y.value||!I.variable).filter(I=>I.name.toLowerCase().includes(g.value.toLowerCase())).sort((I,p)=>I.name.localeCompare(p.name))),G=vt(()=>{const I=C($t.value);return Array.from({length:7},(p,m)=>{const A=new Date(I);return A.setDate(I.getDate()+m),A})}),j=vt(()=>{const I=G.value[0],p=G.value[6],m=new Intl.DateTimeFormat("en-US",{month:"short"}).format(I);return I.getMonth()===p.getMonth()&&I.getFullYear()===p.getFullYear()?`${m} ${I.getDate()}–${p.getDate()}`:`${J(I)} – ${J(p)}`}),ie=vt(()=>[{key:"calories",label:"Calories",shortLabel:"kcal",unit:"kcal"},{key:"carbs",label:"Carbohydrates",shortLabel:"Carbs",unit:"g"},{key:"protein",label:"Protein",shortLabel:"Protein",unit:"g"},{key:"fat",label:"Fat",shortLabel:"Fat",unit:"g"},{key:"fiber",label:"Fiber",shortLabel:"Fiber",unit:"g"},{key:"salt",label:"Salt",shortLabel:"Salt",unit:"g"}]),te=vt(()=>G.value.map(I=>{const p=me(I),m=Ve.flatMap(A=>{var Se,xe;const U=(xe=(Se=c.value[p])==null?void 0:Se.meals)==null?void 0:xe[A];if(!U)return[];const oe=o.value.find(ze=>ze.id===U.mealId),Ie=(oe==null?void 0:oe.ingredients)||[];return[{type:A,name:(oe==null?void 0:oe.name)||U.mealName,ingredients:Ie,nutrition:kc(Ie)}]});return{date:I,key:p,meals:m,nutrition:kc(m.flatMap(A=>A.ingredients))}})),ae=vt(()=>kc(te.value.flatMap(I=>I.meals.flatMap(p=>p.ingredients)))),de={sedentary:1.2,light:1.375,moderate:1.55,high:1.725},Te=vt(()=>{const I=V.value;return Number.isFinite(I.weightKg)&&I.weightKg>=20&&I.weightKg<=300&&Number.isFinite(I.heightCm)&&I.heightCm>=120&&I.heightCm<=230&&typeof I.age=="number"&&Number.isInteger(I.age)&&I.age>=19&&I.age<=78&&(I.sex==="female"||I.sex==="male")}),_e=vt(()=>{if(!Te.value)return null;const I=V.value,p=10*I.weightKg+6.25*I.heightCm-5*I.age+(I.sex==="male"?5:-161),m=Math.round(p*de[I.activityLevel]),A=m*.45/4,U=m*.6/4,oe=m*.2/9,Ie=m*.35/9;return{calories:{min:m*.9,max:m*1.1,goal:m},carbs:{min:A,max:U,goal:(A+U)/2},protein:{min:I.weightKg*.83,max:null,goal:I.weightKg*.83},fat:{min:oe,max:Ie,goal:(oe+Ie)/2},fiber:{min:25,max:null,goal:25},salt:{min:null,max:5,goal:5}}}),ye=me(C(fn)),Ue=new Date(C(fn));Ue.setDate(Ue.getDate()+6);const rt=me(Ue),Rt=I=>me(C(E(I)));function Bt(I){return Object.entries(c.value).reduce((p,[m,A])=>Rt(m)!==ye?p:p+Object.values(A.meals||{}).filter(U=>(U==null?void 0:U.mealId)===I).length,0)}function _t(I){const p=Object.entries(c.value).filter(([xe,ze])=>xe>=Sp&&xe<=rt&&Object.values(ze.meals||{}).some(st=>(st==null?void 0:st.mealId)===I)).sort(([xe],[ze])=>xe.localeCompare(ze));if(!p.length)return 0;const m=C(E(p[0][0])),A=C(fn),U=Date.UTC(m.getFullYear(),m.getMonth(),m.getDate()),oe=Date.UTC(A.getFullYear(),A.getMonth(),A.getDate()),Ie=Math.floor((oe-U)/(10080*60*1e3))+1,Se=p.reduce((xe,[,ze])=>xe+Object.values(ze.meals||{}).filter(st=>(st==null?void 0:st.mealId)===I).length,0);return Number((Se/Math.max(1,Ie)).toFixed(1))}function wr(I){return I>=3?"high":I>=1.5?"medium":"low"}function yt(I){if(typeof I!="string"&&typeof I!="number")return"";const p=String(I).trim();if(!p)return"";const m=p.match(/^([0-9]+(?:[.,][0-9]+)?)\s*(g|gr|grammi|grams|kg|kilogrammi|kilograms)?$/i);if(!m)return"";const A=Number(m[1].replace(",",".")),U=/^k/i.test(m[2]||"")?A*1e3:A;return Number.isFinite(U)&&U>=0?String(Number(U.toFixed(3))):""}function Pt(I){if(typeof I!="string"&&typeof I!="number")return"";const p=String(I).trim();if(!p)return"";const m=p.match(/^([0-9]+(?:[.,][0-9]+)?)\s*(?:u|unit(?:à|a)?|units?|pcs?|pieces?|pezzi)?$/i);if(!m)return"";const A=Number(m[1].replace(",","."));return Number.isFinite(A)&&A>=0?String(Number(A.toFixed(3))):""}function Er(I,p){return p==="unit"?Pt(I):yt(I)}function rs(I){return Array.isArray(I)?I.map(p=>{if(typeof p=="string")return{name:p,quantity:"",quantityUnit:"g",storeIds:[],nutritionBasis:"100g"};if(p&&typeof p=="object"){const m=p,A=typeof m.storeId=="string"&&m.storeId?[m.storeId]:[],U=Array.isArray(m.storeIds)?m.storeIds.filter(xe=>typeof xe=="string"&&!!xe):A,oe=m.quantityUnit==="unit"?"unit":"g",Ie=Pc(m.nutrition),Se=m.nutritionBasis==="unit"||!m.nutritionBasis&&oe==="unit"?"unit":"100g";return{name:typeof m.name=="string"?m.name:"",quantity:Er(m.quantity,oe),quantityUnit:oe,storeIds:[...new Set(U)],nutritionBasis:Se,...Ie?{nutrition:Ie}:{}}}return{name:"",quantity:"",quantityUnit:"g",storeIds:[],nutritionBasis:"100g"}}).filter(p=>p.name.trim()):[]}let Kt,Yt,Zt,kt,Tr;function wi(){Qe&&(Kt==null||Kt(),Yt==null||Yt(),Zt==null||Zt(),kt==null||kt(),Kt=ba(dp(Cc(Qe,"meals"),fp("name")),I=>{o.value=I.docs.map(p=>{const m=p.data();return{id:p.id,name:String(m.name||""),ingredients:rs(m.ingredients),variable:m.variable===!0,createdAt:m.createdAt}})}),Yt=ba(Cc(Qe,"plan"),I=>{const p={};I.docs.forEach(m=>{const A=m.data();p[m.id]={id:m.id,date:String(A.date||m.id),meals:A.meals||{}}}),c.value=p}),Zt=ba(dp(Cc(Qe,"stores"),fp("name")),I=>{l.value=I.docs.map(p=>({id:p.id,name:String(p.data().name||"")}))}),kt=ba(gn(Qe,"shoppingLists","current"),I=>{const p=I.data()||{},m=p.statuses||{},A=Array.isArray(p.storePriorityOrder)?p.storePriorityOrder.filter(U=>typeof U=="string"&&!!U):[];k.value=Object.fromEntries(Object.entries(m).map(([U,oe])=>[U,oe==="todo"?"buy":oe])),D.value=[...new Set(A)]}))}function Pn(){V.value={weightKg:60,heightCm:170,age:null,sex:"",activityLevel:"sedentary"},Y.value=""}function Ho(I){if(typeof I!="object"||I===null){Pn();return}const p=I;V.value={weightKg:typeof p.weightKg=="number"&&Number.isFinite(p.weightKg)?p.weightKg:60,heightCm:typeof p.heightCm=="number"&&Number.isFinite(p.heightCm)?p.heightCm:170,age:typeof p.age=="number"&&Number.isInteger(p.age)?p.age:null,sex:p.sex==="female"||p.sex==="male"?p.sex:"",activityLevel:p.activityLevel==="light"||p.activityLevel==="moderate"||p.activityLevel==="high"?p.activityLevel:"sedentary"},Y.value=""}async function Ns(){if(!(!Qe||!n.value||!Te.value||L.value)){L.value=!0,Y.value="";try{await Fi(gn(Qe,"users",n.value.uid),{nutritionProfile:{weightKg:V.value.weightKg,heightCm:V.value.heightCm,age:V.value.age,sex:V.value.sex,activityLevel:V.value.activityLevel}}),Y.value="Reference profile saved."}catch(I){console.error("Unable to save nutrition profile:",I),Y.value="Could not save the profile. Check Firestore permissions."}finally{L.value=!1}}}async function Wo(I){if(!Qe){s.value=!1;return}try{const p=await zA(gn(Qe,"users",I.uid)),m=p.exists()?p.data():void 0;r.value=(m==null?void 0:m.enabled)===!0,m&&r.value&&(Ho(m.nutritionProfile),wi())}catch(p){console.error("Unable to verify user access:",p),r.value=!1}finally{s.value=!1}}function en(){he.value=null,be.value=null,S.value={visibility:"hidden"}}function Ei(){en()}function at(){const I=be.value;if(!I||!I.isConnected||!he.value)return;const p=I.getBoundingClientRect(),m=document.querySelector(".dropdown-menu-portal"),A=he.value.startsWith("quantity-"),U=A?140:245,oe=Math.min((m==null?void 0:m.scrollHeight)||U,U),Ie=7,Se=8,xe=Math.max(0,window.innerHeight-p.bottom-Ie-Se),ze=Math.max(0,p.top-Ie-Se),st=xe<oe&&ze>xe,xn=Math.min(U,st?ze:xe),Us=Math.min(oe,xn),Cr=st?Math.max(Se,p.top-Ie-Us):Math.min(window.innerHeight-Se,p.bottom+Ie),ki=Math.min(A?172:p.width,window.innerWidth-Se*2),Ql=A?p.right-ki:p.left,Jl=Math.max(Se,Math.min(Ql,window.innerWidth-ki-Se));S.value={top:`${Cr}px`,left:`${Jl}px`,width:`${ki}px`,maxHeight:`${xn}px`,visibility:"visible"}}dm(()=>{if(document.addEventListener("click",Ei),document.addEventListener("scroll",at,!0),window.addEventListener("resize",at),!qs||!Qe){s.value=!1;return}Tr=EI(qs,async I=>{n.value=I,r.value=!1,s.value=!0,Kt==null||Kt(),Yt==null||Yt(),Zt==null||Zt(),kt==null||kt(),o.value=[],c.value={},l.value=[],k.value={},D.value=[],b.value=[],Pn(),x.value=!1,I?await Wo(I):s.value=!1})}),fm(()=>{document.removeEventListener("click",Ei),document.removeEventListener("scroll",at,!0),window.removeEventListener("resize",at),Tr==null||Tr(),Kt==null||Kt(),Yt==null||Yt(),Zt==null||Zt(),kt==null||kt()}),Ca(f,I=>{document.documentElement.dataset.theme=I,localStorage.setItem("diet-theme",I)},{immediate:!0});async function Ko(){if(qs){i.value="";try{await jI(qs,GA)}catch(I){i.value=I instanceof Error?I.message:"Authentication failed"}}}async function Ir(){qs&&await TI(qs)}async function kn(I,p){if(he.value===I){en();return}he.value=I,be.value=p.currentTarget,S.value={visibility:"hidden"},await Vu(),at()}function Go(I){pn.value=I,en()}function ql(I,p,m){Pi(I,p,m),en()}function br(I,p){Pi(I,p,""),en()}function zl(I,p){var A,U,oe;const m=(oe=(U=(A=c.value[I])==null?void 0:A.meals)==null?void 0:U[p])==null?void 0:oe.mealId;return o.value.find(Ie=>Ie.id===m)}function Hl(I,p){var A,U,oe;const m=(U=(A=c.value[I])==null?void 0:A.meals)==null?void 0:U[p];if(m)return((oe=o.value.find(Ie=>Ie.id===m.mealId))==null?void 0:oe.name)||m.mealName||void 0}function ss(I,p){if(!p){I.storeIds=[],en();return}I.storeIds=I.storeIds.includes(p)?I.storeIds.filter(m=>m!==p):[...I.storeIds,p]}function Ti(I){return l.value.filter(p=>I.includes(p.id)).map(p=>p.name).join(", ")}function Ii(I){const p=I.length;return p?p===1?Ti(I)||"Choose stores":`${p} shops selected`:"Choose stores"}function Ar(I){return I==="unit"?"pcs":"g"}function an(I,p){if(!I)return"";const m=p==="unit"&&Number(I)===1?"pc":Ar(p);return`${I} ${m}`}function is(I){return!!Pc(I.nutrition)}function Qo(I){return I.ingredients.length>0&&I.ingredients.every(is)}function xs(I,p){I.quantityUnit=p,!!I.nutrition&&Object.values(I.nutrition).some(A=>typeof A=="number")||(I.nutritionBasis=p==="g"?"100g":"unit"),en()}function bi(I,p,m){const A=m.target.value,U=A.trim()===""?null:Number(A);U!==null&&(!Number.isFinite(U)||U<0)||(I.nutrition={...uy(),...I.nutrition||{},[p]:U})}function tr(I,p){if(I===null||!Number.isFinite(I))return"—";const m=p==="kcal"?Math.round(I):Number(I.toFixed(1));return`${new Intl.NumberFormat("en-US").format(m)} ${p}`}function Jo(I,p){const m=p.target.value;m!=="100g"&&m!=="unit"||I.nutritionBasis!==m&&(I.nutritionBasis=m,I.nutrition=void 0)}function Ai(I,p){var A;const m=(A=_e.value)==null?void 0:A[I];return m?{min:m.min===null?null:m.min*p,max:m.max===null?null:m.max*p,goal:m.goal*p}:null}function os(I,p=1){const m=Ai(I,p);if(!m)return"Set profile to calculate";const A=I==="calories"?"kcal":"g",U=oe=>tr(I==="calories"?oe:Math.round(oe),A);return I==="calories"?`Target: ${U(m.goal)}`:I==="salt"?`Limit: < ${U(m.max??0)}`:m.min!==null&&m.max!==null?`Range: ${U(m.min)}–${U(m.max)}`:m.min!==null?`Minimum: ${U(m.min)}`:`Maximum: ${U(m.max??0)}`}function Si(I,p,m=1){const A=Ai(I,m);return!A||p===null||!Number.isFinite(p)||A.goal<=0?"0%":`${Math.min(100,Math.max(0,p/A.goal*100)).toFixed(1)}%`}function Sr(I,p,m=1){const A=Ai(I,m);return!A||p===null||!Number.isFinite(p)?"no-reference":p<(A.min??-1/0)?"below-target":p>(A.max??1/0)?"above-target":"on-target"}function Dn(I,p=!1){Q.value=p,ne.value=I||null,v.value=I?{name:I.name,variable:I.variable,ingredients:rs(I.ingredients).map(m=>({...m,localId:crypto.randomUUID()}))}:{name:"",variable:!1,ingredients:[]},T.value=null,R.value="",he.value=null,W.value=!0}function Vn(I){Dn(I,!0)}function Ci(I,p){var U,oe,Ie;const m=(Ie=(oe=(U=c.value[me(I)])==null?void 0:U.meals)==null?void 0:oe[p])==null?void 0:Ie.mealId,A=o.value.find(Se=>Se.id===m);A&&Vn(A)}function Wl(){v.value.ingredients.push({localId:crypto.randomUUID(),name:"",quantity:"",quantityUnit:"g",storeIds:[],nutritionBasis:"100g"})}function Xo(I){v.value.ingredients=v.value.ingredients.filter(p=>p.localId!==I),T.value===I&&(T.value=null)}async function Yo(I){if(!Qe)return;const p=!I.variable;try{await Fi(gn(Qe,"meals",I.id),{variable:I.variable})}catch(m){I.variable=p,console.error("Unable to update meal variability:",m)}}async function Zo(){if(!Qe||!v.value.name.trim())return;const I=v.value.ingredients.filter(m=>m.name.trim()).map(m=>{const A=Pc(m.nutrition);return{name:m.name.trim(),quantity:Er(m.quantity,m.quantityUnit),quantityUnit:m.quantityUnit,storeIds:[...new Set(m.storeIds)],nutritionBasis:m.nutritionBasis||(m.quantityUnit==="g"?"100g":"unit"),...A?{nutrition:A}:{}}}),p={name:v.value.name.trim(),ingredients:I,variable:v.value.variable,updatedAt:Ui()};ne.value?await Fi(gn(Qe,"meals",ne.value.id),{...p,description:Rc(),tags:Rc()}):await Li(gn(Qe,"meals",crypto.randomUUID()),{...p,createdAt:Ui()}),W.value=!1}async function Ri(I){!Qe||!confirm("Delete this meal?")||await HA(gn(Qe,"meals",I.id))}async function Os(I){if(!Qe||!R.value.trim())return;const p=crypto.randomUUID(),m=R.value.trim();await Li(gn(Qe,"stores",p),{name:m,createdAt:Ui()});const A=v.value.ingredients.find(U=>U.localId===I);A&&(A.storeIds=[...new Set([...A.storeIds,p])]),R.value="",T.value=null}async function Pi(I,p,m){var Ie,Se;if(!Qe)return;const A=me(I),U=gn(Qe,"plan",A),oe=o.value.find(xe=>xe.id===m);if(oe){const xe={mealId:oe.id,mealName:oe.name};c.value[A]?await Fi(U,{[`meals.${p}`]:xe}):await Li(U,{date:A,meals:{[p]:xe}},{merge:!0});return}(Se=(Ie=c.value[A])==null?void 0:Ie.meals)!=null&&Se[p]&&await Fi(U,{[`meals.${p}`]:Rc()})}function as(I){const p=new Date($t.value);p.setDate(p.getDate()+I*7),!(me(C(p))<O)&&($t.value=p)}const Kl=vt(()=>{const I=C(ct);return pn.value==="next"&&I.setDate(I.getDate()+7),Array.from({length:7},(m,A)=>{const U=new Date(I);return U.setDate(I.getDate()+A),U}).filter(m=>me(m)>=Ze&&me(m)>=Sp)});function ea(I,p,m){const A=`${H.value}:${I.trim().toLocaleLowerCase()}:${p||"none"}`;return m==="unit"?`${A}:unit`:A}function ta(I,p){const m=I.map(U=>Number(Er(U,p))).filter(U=>Number.isFinite(U)&&U>0);if(!m.length)return"";const A=m.reduce((U,oe)=>U+oe,0);return String(Number(A.toFixed(3)))}const Ms=vt(()=>{const I=new Map;for(const A of Kl.value){const U=c.value[me(A)];for(const oe of Object.values((U==null?void 0:U.meals)||{})){if(!oe)continue;const Ie=o.value.find(Se=>Se.id===oe.mealId);if(!(!Ie||Ie.variable))for(const Se of Ie.ingredients){const xe=Se.name.trim();if(!xe)continue;const ze=Se.quantityUnit||"g",st=qe(xe),Fs=`${st}:${ze}`,xn=I.get(Fs);xn?(xn.occurrences+=1,Se.storeIds.forEach(Us=>xn.storeIds.add(Us)),Se.quantity.trim()&&xn.quantities.push(Se.quantity.trim())):I.set(Fs,{name:xe,ingredientKey:st,quantityUnit:ze,storeIds:new Set(Se.storeIds),quantities:Se.quantity.trim()?[Se.quantity.trim()]:[],occurrences:1})}}}const p=new Map;for(const A of I.values()){const U=p.get(A.ingredientKey)||new Set;A.storeIds.forEach(oe=>U.add(oe)),p.set(A.ingredientKey,U)}const m=new Map(Jt.value.map((A,U)=>[A.id,U]));return[...I.values()].map(A=>{const U=p.get(A.ingredientKey)||A.storeIds,oe=Jt.value.filter(ze=>U.has(ze.id)),Ie=oe[0],Se=(Ie==null?void 0:Ie.id)||"",xe=ea(A.name,Se,A.quantityUnit);return{...A,storeIds:oe.map(ze=>ze.id),storeOptions:oe,storeId:Se,storeName:(Ie==null?void 0:Ie.name)||"No store",quantity:ta(A.quantities,A.quantityUnit),key:xe,status:k.value[xe]||oe.map(ze=>ea(A.name,ze.id,A.quantityUnit)).map(ze=>k.value[ze]).find(Boolean)||"buy"}}).sort((A,U)=>(m.get(A.storeId)??Number.MAX_SAFE_INTEGER)-(m.get(U.storeId)??Number.MAX_SAFE_INTEGER)||A.storeName.localeCompare(U.storeName)||A.name.localeCompare(U.name))}),Gl=vt(()=>{const I=new Map;for(const m of Ms.value){const A=I.get(m.storeId)||[];A.push(m),I.set(m.storeId,A)}const p=new Map(Jt.value.map((m,A)=>[m.id,A]));return[...I.entries()].sort(([m],[A])=>(p.get(m)??Number.MAX_SAFE_INTEGER)-(p.get(A)??Number.MAX_SAFE_INTEGER)).map(([m,A])=>{var U;return{id:m,name:((U=l.value.find(oe=>oe.id===m))==null?void 0:U.name)||"No store",items:A}})}),Nn=vt(()=>Gl.value.map(I=>({...I,items:I.items.filter(p=>!Xt.value||p.status!=="home")})).filter(I=>I.items.length>0));async function tn(I,p){Qe&&(k.value={...k.value,[I]:p},await Li(gn(Qe,"shoppingLists","current"),{statuses:k.value,updatedAt:Ui()},{merge:!0}))}function Ls(){b.value=Jt.value.map(I=>I.id),Ye.value=!0}function ls(I,p){const m=I+p;if(m<0||m>=b.value.length)return;const A=[...b.value];[A[I],A[m]]=[A[m],A[I]],b.value=A}async function na(){if(!Qe)return;const I=[...D.value],p=[...new Set(b.value.filter(m=>l.value.some(A=>A.id===m)))];l.value.forEach(m=>{p.includes(m.id)||p.push(m.id)}),D.value=p;try{await Li(gn(Qe,"shoppingLists","current"),{storePriorityOrder:p,updatedAt:Ui()},{merge:!0}),Ye.value=!1}catch(m){D.value=I,console.error("Unable to save global store priority:",m)}}function qe(I){return encodeURIComponent(I.trim().toLocaleLowerCase()).replace(/\./g,"%2E")}return(I,p)=>le(ly)?s.value?(K(),Z("div",BS,[...p[40]||(p[40]=[w("div",{class:"loader"},null,-1),w("p",null,"Loading…",-1)])])):n.value?r.value?(K(),Z("div",GS,[w("header",QS,[w("div",JS,[w("div",XS,[w("div",YS,[fe(le(Ap),{size:18})]),w("span",ZS,[p[47]||(p[47]=w("span",{class:"brand-name"},[ut("diet"),w("span",{class:"brand-dot"},".")],-1)),w("span",eC,"v"+F(le(e)),1)])]),w("div",tC,F(z(new Date)),1),w("div",nC,[w("button",{class:"icon-btn",onClick:p[0]||(p[0]=m=>f.value=f.value==="dark"?"light":"dark"),title:f.value==="dark"?"Light mode":"Dark mode"},[f.value==="dark"?(K(),It(le(OS),{key:0})):(K(),It(le(ES),{key:1}))],8,rC),w("button",{class:"icon-btn",onClick:Ir,title:"Sign out"},[fe(le(vS))])])]),w("nav",sC,[(K(),Z(Me,null,pt(["home","meals","shopping","insights"],m=>w("button",{key:m,class:je(["top-nav-item",{active:h.value===m}]),onClick:A=>h.value=m},[m==="home"?(K(),It(le(wp),{key:0})):m==="meals"?(K(),It(le(_p),{key:1})):m==="shopping"?(K(),It(le(Ep),{key:2})):(K(),It(le(rS),{key:3})),w("span",null,F(Pe[m]),1)],10,iC)),64))])]),w("main",oC,[h.value==="home"?(K(),Z("section",aC,[w("div",lC,[p[48]||(p[48]=w("h1",null,F("Home"),-1)),w("div",cC,[w("div",uC,[w("button",{type:"button",class:je(["mobile-plan-view-button",{active:P.value==="inline"}]),"aria-pressed":P.value==="inline",title:"Inline view","aria-label":"Inline view",onClick:p[1]||(p[1]=m=>P.value="inline")},[fe(le(_S),{size:16})],10,hC),w("button",{type:"button",class:je(["mobile-plan-view-button",{active:P.value==="grid"}]),"aria-pressed":P.value==="grid",title:"Grid view","aria-label":"Grid view",onClick:p[2]||(p[2]=m=>P.value="grid")},[fe(le(mS),{size:16})],10,dC)]),w("button",{class:"icon-btn plan-arrow",title:"Previous week",disabled:!B.value,onClick:p[3]||(p[3]=m=>as(-1))},[fe(le(yp))],8,fC),w("div",pC,F(j.value),1),w("button",{class:"icon-btn plan-arrow",title:"Next week",onClick:p[4]||(p[4]=m=>as(1))},[fe(le(Hs))])])]),w("div",{class:je(["plan-day-list",{"plan-day-list-grid":P.value==="grid"}])},[(K(!0),Z(Me,null,pt(G.value,m=>(K(),Z("article",{key:me(m),"data-day-key":me(m),class:je(["plan-day-row",{"plan-day-row-today":me(m)===le(Ze),"plan-day-row-focused":me(m)===ns.value}])},[w("header",gC,[w("div",null,[w("span",_C,F(new Intl.DateTimeFormat("en-US",{weekday:"long"}).format(m)),1),w("h2",null,F(J(m)),1)]),me(m)===le(Ze)?(K(),Z("span",yC,F("Today"))):$e("",!0)]),w("div",vC,[(K(),Z(Me,null,pt(Ve,(A,U)=>w("div",{key:A,class:"plan-meal-slot"},[w("div",wC,[w("span",EC,F(Ht[A]),1),w("span",TC,F(er[U]),1)]),w("div",IC,[w("div",{class:"custom-select-wrap day-meal-select",onClick:p[6]||(p[6]=rn(()=>{},["stop"]))},[w("button",{class:"custom-select-trigger","aria-expanded":he.value===`plan-${me(m)}-${A}`,onClick:oe=>kn(`plan-${me(m)}-${A}`,oe)},[w("span",null,F(Hl(me(m),A)||"Choose a meal"),1),fe(le(Hs),{class:"select-chevron",size:15})],8,bC),(K(),It(ma,{to:"body"},[he.value===`plan-${me(m)}-${A}`?(K(),Z("div",{key:0,class:"custom-select-menu dropdown-menu-portal",style:ir(S.value),onClick:p[5]||(p[5]=rn(()=>{},["stop"]))},[(K(!0),Z(Me,null,pt(o.value,oe=>{var Ie,Se;return K(),Z("button",{key:oe.id,class:je(["custom-select-option",{selected:((Se=(Ie=c.value[me(m)])==null?void 0:Ie.meals[A])==null?void 0:Se.mealId)===oe.id}]),onClick:xe=>ql(m,A,oe.id)},F(oe.name),11,AC)}),128))],4)):$e("",!0)]))]),zl(me(m),A)?(K(),Z("div",SC,[w("button",{type:"button",class:"icon-btn day-meal-view-btn",title:"View meal","aria-label":"View meal",onClick:oe=>Ci(m,A)},[fe(le(vp),{size:15})],8,CC),w("button",{type:"button",class:"icon-btn clear-meal-btn",title:"Clear meal","aria-label":"Clear meal",onClick:oe=>br(m,A)},[fe(le($i),{size:15})],8,RC)])):$e("",!0)])])),64))])],10,mC))),128))],2)])):h.value==="meals"?(K(),Z("section",PC,[w("div",kC,[p[52]||(p[52]=w("h1",null,F("Meals"),-1)),w("div",DC,[w("label",VC,[ln(w("input",{"onUpdate:modelValue":p[7]||(p[7]=m=>y.value=m),type:"checkbox"},null,512),[[mc,y.value]]),p[49]||(p[49]=w("span",{class:"meals-filter-switch","aria-hidden":"true"},[w("span")],-1)),p[50]||(p[50]=w("span",null,F("Exclude variable meals"),-1))]),w("div",NC,[fe(le(SS),{size:17}),ln(w("input",{"onUpdate:modelValue":p[8]||(p[8]=m=>g.value=m),placeholder:"Search meals…"},null,512),[[ds,g.value]])]),w("button",{class:"primary-btn",onClick:p[9]||(p[9]=m=>Dn())},[fe(le(Vc),{size:17}),p[51]||(p[51]=ut(F("Add meal"),-1))])])]),X.value.length?(K(),Z("div",xC,[(K(!0),Z(Me,null,pt(X.value,(m,A)=>(K(),Z("article",{key:m.id,class:"meal-row"},[w("div",OC,F(String(A+1).padStart(2,"0")),1),w("div",MC,[w("h3",LC,[ut(F(m.name)+" ",1),Qo(m)?(K(),Z("span",FC,[fe(le(zs),{size:15})])):$e("",!0)]),m.ingredients.length?(K(),Z("div",UC,[(K(!0),Z(Me,null,pt(m.ingredients,U=>(K(),Z("span",{key:`${U.name}-${U.storeIds.join(",")}`,class:"ingredient-chip"},[ut(F(U.name),1),U.quantity?(K(),Z("small",$C,F(an(U.quantity,U.quantityUnit)),1)):$e("",!0),U.storeIds.length?(K(),Z("small",BC,"· "+F(Ti(U.storeIds)),1)):$e("",!0)]))),128))])):$e("",!0)]),w("div",jC,[w("div",qC,[w("label",zC,[ln(w("input",{"onUpdate:modelValue":U=>m.variable=U,type:"checkbox","aria-label":"Variable",onChange:U=>Yo(m)},null,40,HC),[[mc,m.variable]]),p[53]||(p[53]=w("span",{class:"meal-variable-switch","aria-hidden":"true"},[w("span")],-1)),p[54]||(p[54]=w("span",null,F("Variable"),-1))]),w("div",WC,[p[55]||(p[55]=w("div",{class:"frequency-label"},F("This week"),-1)),w("strong",{class:je(wr(Bt(m.id)))},F(Bt(m.id)),3)]),w("div",KC,[p[56]||(p[56]=w("div",{class:"frequency-label"},F("Average per week"),-1)),w("strong",{class:je(wr(_t(m.id)))},F(_t(m.id)),3)])]),w("div",GC,[w("button",{type:"button",class:"icon-btn meal-action-btn meal-action-view",title:"View meal","aria-label":"View meal",onClick:U=>Vn(m)},[fe(le(vp))],8,QC),w("button",{type:"button",class:"icon-btn meal-action-btn meal-action-edit",title:"Edit meal","aria-label":"Edit meal",onClick:U=>Dn(m)},[fe(le(IS))],8,JC),w("button",{type:"button",class:"icon-btn meal-action-btn meal-action-delete",title:"Delete","aria-label":"Delete",onClick:U=>Ri(m)},[fe(le(bp))],8,XC)])])]))),128))])):(K(),Z("div",YC,[w("div",ZC,[fe(le(_p))]),p[57]||(p[57]=w("h3",null,F("No meals yet. Add your first dish."),-1)),w("button",{class:"text-btn",onClick:p[10]||(p[10]=m=>Dn())},F("Add meal")+" +")]))])):h.value==="insights"?(K(),Z("section",eR,[w("div",tR,[p[58]||(p[58]=w("div",null,[w("h1",null,F("Insights")),w("p",{class:"insights-intro"},F("Daily and weekly nutrition compared with estimated reference values."))],-1)),w("div",nR,[w("button",{type:"button",class:"secondary-btn small-btn",onClick:p[11]||(p[11]=m=>x.value=!x.value)},[fe(le(Tp),{size:15}),ut(" "+F(x.value?"Close profile":Te.value?"Edit reference profile":"Set reference profile"),1)])])]),x.value?(K(),Z("section",rR,[w("form",{class:"nutrition-profile-form",onSubmit:rn(Ns,["prevent"])},[w("div",sR,[w("label",null,[p[59]||(p[59]=ut("Weight (kg) ",-1)),ln(w("input",{"onUpdate:modelValue":p[12]||(p[12]=m=>V.value.weightKg=m),type:"number",min:"20",max:"300",step:"0.1",required:""},null,512),[[ds,V.value.weightKg,void 0,{number:!0}]])]),w("label",null,[p[60]||(p[60]=ut("Height (cm) ",-1)),ln(w("input",{"onUpdate:modelValue":p[13]||(p[13]=m=>V.value.heightCm=m),type:"number",min:"120",max:"230",step:"0.1",required:""},null,512),[[ds,V.value.heightCm,void 0,{number:!0}]])]),w("label",null,[p[61]||(p[61]=ut("Age ",-1)),ln(w("input",{"onUpdate:modelValue":p[14]||(p[14]=m=>V.value.age=m),type:"number",min:"19",max:"78",step:"1",required:"",placeholder:"Years"},null,512),[[ds,V.value.age,void 0,{number:!0}]])]),w("label",null,[p[63]||(p[63]=ut("Sex used in the estimate ",-1)),ln(w("select",{"onUpdate:modelValue":p[15]||(p[15]=m=>V.value.sex=m),required:""},[...p[62]||(p[62]=[w("option",{value:"",disabled:""},"Select",-1),w("option",{value:"female"},"Female",-1),w("option",{value:"male"},"Male",-1)])],512),[[xd,V.value.sex]])]),w("label",null,[p[65]||(p[65]=ut("Activity level ",-1)),ln(w("select",{"onUpdate:modelValue":p[16]||(p[16]=m=>V.value.activityLevel=m)},[...p[64]||(p[64]=[w("option",{value:"sedentary"},"Sedentary · little or no exercise",-1),w("option",{value:"light"},"Light · 1–3 days/week",-1),w("option",{value:"moderate"},"Moderate · 3–5 days/week",-1),w("option",{value:"high"},"High · 6–7 days/week",-1)])],512),[[xd,V.value.activityLevel]])])]),w("div",iR,[p[66]||(p[66]=w("p",{class:"nutrition-profile-note"},"Calories use the Mifflin–St Jeor estimate and an activity factor. Nutrient references follow EFSA adult reference ranges and WHO salt guidance.",-1)),w("div",oR,[w("span",aR,F(Y.value),1),w("button",{class:"primary-btn small-btn",type:"submit",disabled:!Te.value||L.value},F(L.value?"Saving…":"Save profile"),9,lR)])])],32)])):$e("",!0),w("section",cR,[w("div",uR,[p[67]||(p[67]=w("h2",null,F("Weekly nutrition"),-1)),w("div",hR,[w("button",{class:"icon-btn plan-arrow",title:"Previous week","aria-label":"Previous week",disabled:!B.value,onClick:p[17]||(p[17]=m=>as(-1))},[fe(le(yp))],8,dR),w("div",fR,F(j.value),1),w("button",{class:"icon-btn plan-arrow",title:"Next week","aria-label":"Next week",onClick:p[18]||(p[18]=m=>as(1))},[fe(le(Hs))])])]),w("div",pR,[(K(!0),Z(Me,null,pt(ie.value,m=>(K(),Z("article",{key:m.key,class:je(["insight-metric-card",Sr(m.key,ae.value[m.key].value,7)])},[w("span",null,F(m.label),1),w("strong",null,F(tr(ae.value[m.key].value,m.unit)),1),w("small",null,F(os(m.key,7)),1),w("div",{class:je(["insight-progress",Sr(m.key,ae.value[m.key].value,7)]),"aria-hidden":"true"},[w("span",{style:ir({width:Si(m.key,ae.value[m.key].value,7)})},null,4)],2)],2))),128))])]),w("section",mR,[p[68]||(p[68]=w("div",{class:"insights-section-heading"},[w("h2",null,F("Daily and meal breakdown")),w("span",null,F("Values are calculated from the quantities saved in each recipe."))],-1)),w("div",gR,[(K(!0),Z(Me,null,pt(te.value,m=>(K(),Z("article",{key:m.key,class:"insight-day-card"},[w("header",_R,[w("div",null,[w("span",null,F(new Intl.DateTimeFormat("en-US",{weekday:"long"}).format(m.date)),1),w("h3",null,F(J(m.date)),1)])]),w("div",yR,[(K(!0),Z(Me,null,pt(ie.value,A=>(K(),Z("article",{key:A.key,class:je(["insight-daily-reference-item",Sr(A.key,m.nutrition[A.key].value)])},[w("small",null,F(A.shortLabel),1),w("strong",null,F(tr(m.nutrition[A.key].value,A.unit)),1),w("span",null,F(os(A.key)),1),w("div",{class:je(["insight-progress",Sr(A.key,m.nutrition[A.key].value)]),"aria-hidden":"true"},[w("span",{style:ir({width:Si(A.key,m.nutrition[A.key].value)})},null,4)],2)],2))),128))]),m.meals.length?(K(),Z("div",vR,[(K(!0),Z(Me,null,pt(m.meals,A=>(K(),Z("article",{key:A.type,class:"insight-meal-row"},[w("div",wR,[w("span",null,F(Ht[A.type]),1),w("strong",null,F(A.name),1)]),w("div",ER,[(K(!0),Z(Me,null,pt(ie.value,U=>(K(),Z("span",{key:U.key},[w("small",null,F(U.shortLabel),1),w("strong",null,F(tr(A.nutrition[U.key].value,U.unit)),1)]))),128))])]))),128))])):(K(),Z("p",TR,F("No meals planned for this day.")))]))),128))])])])):(K(),Z("section",IR,[w("div",bR,[p[72]||(p[72]=w("h1",null,F("Shopping"),-1)),w("div",AR,[w("label",SR,[ln(w("input",{"onUpdate:modelValue":p[19]||(p[19]=m=>Xt.value=m),type:"checkbox"},null,512),[[mc,Xt.value]]),p[69]||(p[69]=w("span",{class:"shopping-filter-switch","aria-hidden":"true"},[w("span")],-1)),p[70]||(p[70]=w("span",{class:"shopping-filter-label"},F("Exclude already at home"),-1))]),w("div",{class:"custom-select-wrap shopping-week-selector",onClick:p[24]||(p[24]=rn(()=>{},["stop"]))},[w("button",{class:"custom-select-trigger","aria-expanded":he.value==="shopping-week",onClick:p[20]||(p[20]=m=>kn("shopping-week",m))},[w("span",null,F(pn.value==="this"?"This week":"Next week"),1),fe(le(Hs),{class:"select-chevron",size:15})],8,CR),(K(),It(ma,{to:"body"},[he.value==="shopping-week"?(K(),Z("div",{key:0,class:"custom-select-menu dropdown-menu-portal",style:ir(S.value),onClick:p[23]||(p[23]=rn(()=>{},["stop"]))},[w("button",{class:je(["custom-select-option",{selected:pn.value==="this"}]),onClick:p[21]||(p[21]=m=>Go("this"))},F("This week"),2),w("button",{class:je(["custom-select-option",{selected:pn.value==="next"}]),onClick:p[22]||(p[22]=m=>Go("next"))},F("Next week"),2)],4)):$e("",!0)]))]),w("button",{class:"secondary-btn store-priority-trigger",onClick:Ls},[fe(le(Tp),{size:16}),p[71]||(p[71]=ut(F("Store priorities"),-1))])])]),Nn.value.length?(K(),Z("div",RR,[(K(!0),Z(Me,null,pt(Nn.value,m=>(K(),Z("section",{key:m.id||"no-store",class:"shopping-store-group"},[w("header",PR,[fe(le(Ip),{size:17}),w("h2",null,F(m.name),1),w("span",null,F(m.items.length),1)]),(K(!0),Z(Me,null,pt(m.items,A=>(K(),Z("article",{key:A.key,class:"shopping-item-row"},[w("div",kR,[w("h3",null,F(A.name),1),w("p",null,[A.quantity?(K(),Z("span",DR,F(an(A.quantity,A.quantityUnit)),1)):$e("",!0),!A.quantity&&A.occurrences>1?(K(),Z("span",VR,F(A.occurrences)+"×",1)):$e("",!0)])]),w("div",{class:"shopping-status-control",role:"group","aria-label":A.name},[w("button",{class:je({selected:A.status==="home"}),onClick:U=>tn(A.key,"home")},[fe(le(wp),{size:14}),p[73]||(p[73]=w("span",null,F("Already at home"),-1))],10,xR),w("button",{class:je({selected:A.status==="bought"}),onClick:U=>tn(A.key,"bought")},[fe(le(zs),{size:14}),p[74]||(p[74]=w("span",null,F("Bought"),-1))],10,OR),w("button",{class:je({selected:A.status==="buy"}),onClick:U=>tn(A.key,"buy")},[fe(le(PS),{size:14}),p[75]||(p[75]=w("span",null,F("To buy"),-1))],10,MR)],8,NR)]))),128))]))),128))])):(K(),Z("div",LR,[fe(le(Ep),{size:30}),w("h3",null,F(Ms.value.length&&Xt.value?"Everything is already at home":"Nothing to buy yet"),1),w("p",FR,F(Ms.value.length&&Xt.value?"Turn off the filter to see all planned ingredients.":"Add ingredients to meals and schedule them this week."),1)]))]))]),Ye.value?(K(),Z("div",{key:0,class:"modal-backdrop",onClick:p[27]||(p[27]=rn(m=>Ye.value=!1,["self"]))},[w("section",UR,[w("div",$R,[p[76]||(p[76]=w("div",null,[w("p",{class:"eyebrow"},F("Shopping")),w("h2",null,F("Store priorities")),w("p",{class:"modal-description"},F("Set one global order for your shops. Items available in multiple shops will be assigned to the highest-priority shop available."))],-1)),w("button",{class:"icon-btn","aria-label":"Close",onClick:p[25]||(p[25]=m=>Ye.value=!1)},[fe(le($i))])]),nt.value.length?(K(),Z("div",BR,[p[77]||(p[77]=w("p",{class:"priority-order-hint"},F("Move shops up or down. Shops higher in the list are preferred whenever an ingredient is available in more than one place."),-1)),(K(!0),Z(Me,null,pt(nt.value,(m,A)=>(K(),Z("article",{key:m.id,class:"store-priority-row"},[w("span",jR,F(String(A+1).padStart(2,"0")),1),w("div",qR,[w("h3",null,F(m.name),1),w("p",null,F(A===0?"First choice":`Priority #${A+1}`),1)]),w("div",zR,[w("button",{type:"button",class:"icon-btn priority-move-btn",disabled:A===0,"aria-label":"Move shop up",title:"Move shop up",onClick:U=>ls(A,-1)},[fe(le(hS),{size:16})],8,HR),w("button",{type:"button",class:"icon-btn priority-move-btn",disabled:A===nt.value.length-1,"aria-label":"Move shop down",title:"Move shop down",onClick:U=>ls(A,1)},[fe(le(aS),{size:16})],8,WR)])]))),128))])):(K(),Z("div",KR,[fe(le(Ip),{size:26}),p[78]||(p[78]=w("h3",null,F("No shops yet. Add the places where you shop."),-1)),p[79]||(p[79]=w("p",null,F("Add shops from the ingredient editor. Their global priority can be set here."),-1))])),w("div",GR,[w("button",{type:"button",class:"secondary-btn",onClick:p[26]||(p[26]=m=>Ye.value=!1)},F("Cancel")),w("button",{type:"button",class:"primary-btn",disabled:!nt.value.length,onClick:na},F("Save"),8,QR)])])])):$e("",!0),W.value?(K(),Z("div",{key:1,class:"modal-backdrop",onClick:p[36]||(p[36]=rn(m=>W.value=!1,["self"]))},[w("section",{class:je(["meal-modal",{"meal-view-modal":Q.value}])},[w("div",JR,[w("div",null,[p[80]||(p[80]=w("p",{class:"eyebrow"},"MEAL LIBRARY",-1)),w("h2",null,F(Q.value?v.value.name:ne.value?"Edit meal":"Add meal"),1)]),w("button",{class:"icon-btn","aria-label":"Close",onClick:p[28]||(p[28]=m=>W.value=!1)},[fe(le($i))])]),w("form",{onSubmit:rn(Zo,["prevent"])},[Q.value?(K(),Z("div",XR,[p[81]||(p[81]=w("div",{class:"ingredients-editor-heading meal-view-section-heading"},[w("h3",null,F("Ingredients"))],-1)),v.value.ingredients.length?$e("",!0):(K(),Z("p",YR,F("No ingredients added yet."))),(K(!0),Z(Me,null,pt(v.value.ingredients,m=>(K(),Z("article",{key:m.localId,class:je(["meal-view-ingredient",is(m)?"has-nutrition":"missing-nutrition"])},[w("div",ZR,[w("h3",null,F(m.name),1),m.quantity?(K(),Z("span",eP,F(an(m.quantity,m.quantityUnit)),1)):$e("",!0)]),w("div",tP,[w("div",nP,F("Nutrition")+" · "+F("Values")+" "+F(m.nutritionBasis==="unit"?"unit":"100 g"),1),is(m)?(K(),Z("div",rP,[(K(!0),Z(Me,null,pt(ie.value,A=>{var U;return K(),Z("span",{key:A.key},[w("small",null,F(A.shortLabel),1),w("strong",null,F(tr(((U=m.nutrition)==null?void 0:U[A.key])??null,A.unit)),1)])}),128))])):(K(),Z("p",sP,F("Not enough data")))])],2))),128))])):(K(),Z("fieldset",iP,[w("label",oP,[p[82]||(p[82]=ut(F("Meal name"),-1)),ln(w("input",{"onUpdate:modelValue":p[29]||(p[29]=m=>v.value.name=m),required:"",maxlength:"90",autofocus:""},null,512),[[ds,v.value.name]])]),w("div",aP,[w("div",lP,[p[84]||(p[84]=w("h3",null,F("Ingredients"),-1)),Q.value?$e("",!0):(K(),Z("button",{key:0,type:"button",class:"secondary-btn small-btn",onClick:Wl},[fe(le(Vc),{size:15}),p[83]||(p[83]=ut(F("Add ingredient"),-1))]))]),v.value.ingredients.length?$e("",!0):(K(),Z("p",cP,F("No ingredients added yet."))),(K(!0),Z(Me,null,pt(v.value.ingredients,m=>(K(),Z("div",{key:m.localId,class:"ingredient-editor-row"},[w("div",uP,[w("label",hP,[p[85]||(p[85]=ut(F("Ingredient"),-1)),ln(w("input",{"onUpdate:modelValue":A=>m.name=A,required:"",placeholder:"Ingredient"},null,8,dP),[[ds,m.name]])]),w("div",fP,[p[89]||(p[89]=w("span",null,F("Quantity"),-1)),w("span",{class:"quantity-input-wrap",onClick:p[31]||(p[31]=rn(()=>{},["stop"]))},[w("input",{value:m.quantity,"aria-label":"Quantity",type:"number",min:"0",step:m.quantityUnit==="unit"?1:"any",inputmode:m.quantityUnit==="unit"?"numeric":"decimal",placeholder:m.quantityUnit==="unit"?"1":"200",onInput:A=>m.quantity=A.target.value},null,40,pP),w("button",{type:"button",class:"quantity-unit quantity-unit-select","aria-expanded":he.value===`quantity-${m.localId}`,onClick:A=>kn(`quantity-${m.localId}`,A)},[ut(F(Ar(m.quantityUnit)),1),fe(le(Hs),{size:12})],8,mP),(K(),It(ma,{to:"body"},[he.value===`quantity-${m.localId}`?(K(),Z("div",{key:0,class:"quantity-unit-menu dropdown-menu-portal",style:ir(S.value),onClick:p[30]||(p[30]=rn(()=>{},["stop"]))},[w("button",{type:"button",class:je(["quantity-unit-option",{selected:m.quantityUnit==="g"}]),onClick:A=>xs(m,"g")},[p[86]||(p[86]=w("span",{class:"quantity-option-symbol"},"g",-1)),p[87]||(p[87]=w("span",{class:"quantity-option-label"},F("Grams (g)"),-1)),m.quantityUnit==="g"?(K(),It(le(zs),{key:0,size:14})):$e("",!0)],10,gP),w("button",{type:"button",class:je(["quantity-unit-option",{selected:m.quantityUnit==="unit"}]),onClick:A=>xs(m,"unit")},[w("span",yP,F(Ar("unit")),1),p[88]||(p[88]=w("span",{class:"quantity-option-label"},F("Units"),-1)),m.quantityUnit==="unit"?(K(),It(le(zs),{key:0,size:14})):$e("",!0)],10,_P)],4)):$e("",!0)]))])])]),w("div",vP,[p[92]||(p[92]=w("span",{class:"field-caption"},F("Stores"),-1)),w("div",{class:"custom-select-wrap store-select-wrap",onClick:p[33]||(p[33]=rn(()=>{},["stop"]))},[w("button",{type:"button",class:"custom-select-trigger","aria-expanded":he.value===`store-${m.localId}`,onClick:A=>kn(`store-${m.localId}`,A)},[w("span",null,F(Ii(m.storeIds)),1),fe(le(Hs),{class:"select-chevron",size:15})],8,wP),(K(),It(ma,{to:"body"},[he.value===`store-${m.localId}`?(K(),Z("div",{key:0,class:"custom-select-menu store-select-menu dropdown-menu-portal",style:ir(S.value),onClick:p[32]||(p[32]=rn(()=>{},["stop"]))},[w("button",{type:"button",class:je(["custom-select-option",{selected:!m.storeIds.length}]),onClick:A=>ss(m,"")},[p[90]||(p[90]=ut(F("No store"),-1)),m.storeIds.length?$e("",!0):(K(),It(le(zs),{key:0,size:14}))],10,EP),(K(!0),Z(Me,null,pt(l.value,A=>(K(),Z("button",{key:A.id,type:"button",class:je(["custom-select-option multi-select-option",{selected:m.storeIds.includes(A.id)}]),onClick:U=>ss(m,A.id)},[ut(F(A.name),1),m.storeIds.includes(A.id)?(K(),It(le(zs),{key:0,size:14})):$e("",!0)],10,TP))),128))],4)):$e("",!0)]))]),Q.value?$e("",!0):(K(),Z("button",{key:0,type:"button",class:je(["text-btn add-store-link",{active:T.value===m.localId}]),"aria-expanded":T.value===m.localId,"aria-controls":`new-store-${m.localId}`,"aria-label":T.value===m.localId?"Close":"Add shop",onClick:A=>T.value=T.value===m.localId?null:m.localId},[T.value===m.localId?(K(),It(le($i),{key:0,size:14})):(K(),It(le(Vc),{key:1,size:14})),p[91]||(p[91]=w("span",null,F("Add shop"),-1))],10,IP)),Q.value?$e("",!0):(K(),Z("button",{key:1,type:"button",class:"icon-btn remove-ingredient",title:"Remove",onClick:A=>Xo(m.localId)},[fe(le(bp),{size:15})],8,bP))]),!Q.value&&T.value===m.localId?(K(),Z("div",{key:0,id:`new-store-${m.localId}`,class:"new-store-form",role:"region","aria-label":"Add shop"},[ln(w("input",{"onUpdate:modelValue":p[34]||(p[34]=A=>R.value=A),placeholder:"New shop name",maxlength:"60",onKeydown:Bw(rn(A=>Os(m.localId),["prevent"]),["enter"])},null,40,SP),[[ds,R.value]]),w("button",{class:"primary-btn small-btn",type:"button",disabled:!R.value.trim(),onClick:A=>Os(m.localId)},F("Save shop"),8,CP)],8,AP)):$e("",!0),w("details",{class:je(["ingredient-nutrition-editor",is(m)?"has-nutrition":"missing-nutrition"])},[w("summary",null,[p[93]||(p[93]=w("span",null,F("Nutrition"),-1)),w("small",null,F("Values")+" "+F(m.nutritionBasis==="unit"?"unit":"100 g"),1)]),w("div",RP,[w("div",PP,[w("label",{for:"nutrition-basis-"+m.localId},F("Values per"),8,kP),w("select",{id:"nutrition-basis-"+m.localId,value:m.nutritionBasis||"100g",onChange:A=>Jo(m,A)},[...p[94]||(p[94]=[w("option",{value:"100g"},F("100 g"),-1),w("option",{value:"unit"},F("unit"),-1)])],40,DP)]),m.nutritionBasis==="100g"&&m.quantityUnit==="unit"||m.nutritionBasis==="unit"&&m.quantityUnit==="g"?(K(),Z("p",VP,F("The quantity unit and nutrition basis do not match, so this ingredient is excluded from totals."))):$e("",!0),w("div",NP,[(K(!0),Z(Me,null,pt(ie.value,A=>{var U;return K(),Z("label",{key:A.key},[w("span",null,[ut(F(A.label)+" ",1),w("small",null,"("+F(A.unit)+")",1)]),w("input",{type:"number",min:"0",step:"any",value:((U=m.nutrition)==null?void 0:U[A.key])??"",onInput:oe=>bi(m,A.key,oe)},null,40,xP)])}),128))]),p[95]||(p[95]=w("p",{class:"nutrition-editor-hint"},F("Enter values per 100 g or per unit.")+" "+F("Changing the basis clears the entered values so they are not misinterpreted."),-1))])],2)]))),128))])])),Q.value?$e("",!0):(K(),Z("div",OP,[w("button",{type:"button",class:"secondary-btn",onClick:p[35]||(p[35]=m=>W.value=!1)},F("Cancel")),p[96]||(p[96]=w("button",{class:"primary-btn",type:"submit"},F("Save"),-1))]))],32)],2)])):$e("",!0)])):(K(),Z("div",WS,[w("div",KS,[fe(le($i))]),p[45]||(p[45]=w("h2",null,F("This account is not enabled for this app."),-1)),p[46]||(p[46]=w("p",{class:"muted"},"Ask the administrator to enable your UID in Firestore.",-1)),w("code",null,F(n.value.uid),1),w("button",{class:"text-btn",onClick:Ir},F("Sign out"))])):(K(),Z("div",jS,[w("div",qS,[w("div",zS,[fe(le(Ap),{size:34})])]),p[42]||(p[42]=w("p",{class:"eyebrow"},"A MORE MINDFUL ROUTINE",-1)),p[43]||(p[43]=w("h1",null,F("Your personal meal planner"),-1)),p[44]||(p[44]=w("p",{class:"muted"},"Plan ahead. Eat well. Find your rhythm.",-1)),w("button",{class:"primary-btn google-btn",onClick:Ko},[...p[41]||(p[41]=[w("span",{class:"google-g"},"G",-1),ut(F("Continue with Google"),-1)])]),i.value?(K(),Z("p",HS,F(i.value),1)):$e("",!0)])):(K(),Z("div",US,[w("div",$S,[fe(le(VS))]),p[37]||(p[37]=w("h1",null,F("Your personal meal planner"),-1)),p[38]||(p[38]=w("p",null,F("Configure Firebase to get started."),-1)),p[39]||(p[39]=w("code",null,"cp .env.example .env.local",-1))]))}});zw(MP).use(Gw()).mount("#app");
