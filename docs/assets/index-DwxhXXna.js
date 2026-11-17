(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const tt={},Ps=[],Jn=()=>{},dg=()=>!1,Zl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ec=t=>t.startsWith("onUpdate:"),Nt=Object.assign,Eh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},XE=Object.prototype.hasOwnProperty,qe=(t,e)=>XE.call(t,e),ye=Array.isArray,Gr=t=>ca(t)==="[object Map]",wi=t=>ca(t)==="[object Set]",md=t=>ca(t)==="[object Date]",Se=t=>typeof t=="function",dt=t=>typeof t=="string",sr=t=>typeof t=="symbol",Ge=t=>t!==null&&typeof t=="object",pg=t=>(Ge(t)||Se(t))&&Se(t.then)&&Se(t.catch),mg=Object.prototype.toString,ca=t=>mg.call(t),JE=t=>ca(t).slice(8,-1),gg=t=>ca(t)==="[object Object]",Ih=t=>dt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,So=vh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),tc=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},ZE=/-\w/g,Ln=tc(t=>t.replace(ZE,e=>e.slice(1).toUpperCase())),eI=/\B([A-Z])/g,us=tc(t=>t.replace(eI,"-$1").toLowerCase()),_g=tc(t=>t.charAt(0).toUpperCase()+t.slice(1)),$c=tc(t=>t?`on${_g(t)}`:""),Xn=(t,e)=>!Object.is(t,e),al=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},yg=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Th=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let gd;const nc=()=>gd||(gd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ks(t){if(ye(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=dt(r)?sI(r):ks(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(dt(t)||Ge(t))return t}const tI=/;(?![^(]*\))/g,nI=/:([^]+)/,rI=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function sI(t){const e={};return t.replace(rI,n=>n.startsWith("/*")?"":n).split(tI).forEach(n=>{if(n){const r=n.split(nI);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Pt(t){let e="";if(dt(t))e=t;else if(ye(t))for(let n=0;n<t.length;n++){const r=Pt(t[n]);r&&(e+=r+" ")}else if(Ge(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const iI="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",oI=vh(iI);function vg(t){return!!t||t===""}function aI(t,e,n){if(t.length!==e.length)return!1;let r=!0;for(let s=0;r&&s<t.length;s++)r=Li(t[s],e[s],n);return r}function _d(t,e,n){if(t.size!==e.size)return!1;const r=Array.from(e),s=new Uint8Array(r.length);for(const i of t){let o=-1;for(let l=0;l<r.length;l++)if(!s[l]&&Li(i,r[l],n)){o=l;break}if(o<0)return!1;s[o]=1}return!0}function lI(t,e,n){let r=Gr(t),s=Gr(e);if(r||s||(r=wi(t),s=wi(e),r||s))return r&&s?_d(t,e,n):!1;const i=Object.keys(t).length,o=Object.keys(e).length;if(i!==o)return!1;for(const l in t){const c=t.hasOwnProperty(l),u=e.hasOwnProperty(l);if(c&&!u||!c&&u||!Li(t[l],e[l],n))return!1}return String(t)===String(e)}function yd(t,e,n,r){n||(n=[new Map,new Map]);const[s,i]=n;if(s.has(t)||i.has(e))return s.get(t)===e&&i.get(e)===t;s.set(t,e),i.set(e,t);const o=r(t,e,n);return s.delete(t),i.delete(e),o}function Li(t,e,n){if(t===e)return!0;let r=md(t),s=md(e);return r||s?r&&s?t.getTime()===e.getTime():!1:(r=sr(t),s=sr(e),r||s?t===e:(r=ye(t),s=ye(e),r||s?r&&s?yd(t,e,n,aI):!1:(r=Ge(t),s=Ge(e),r||s?!r||!s?!1:yd(t,e,n,lI):String(t)===String(e))))}function Eg(t,e){return t.findIndex(n=>Li(n,e))}const Ig=t=>!!(t&&t.__v_isRef===!0),Y=t=>dt(t)?t:t==null?"":ye(t)||Ge(t)&&(t.toString===mg||!Se(t.toString))?Ig(t)?Y(t.value):JSON.stringify(t,Tg,2):String(t),Tg=(t,e)=>Ig(e)?Tg(t,e.value):Gr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[jc(r,i)+" =>"]=s,n),{})}:wi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>jc(n))}:sr(e)?jc(e):Ge(e)&&!ye(e)&&!gg(e)?String(e):e,jc=(t,e="")=>{var n;return sr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let At;class bg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&At&&(At.active?(this.parent=At,this.index=(At.scopes||(At.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const r=this.scopes.slice();for(e=0,n=r.length;e<n;e++)r[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}const r=this.effects.slice();for(e=0,n=r.length;e<n;e++)r[e].resume()}}run(e){if(this._active){const n=At;try{return At=this,e()}finally{At=n}}}on(){++this._on===1&&(this.prevScope=At,At=this)}off(){if(this._on>0&&--this._on===0){if(At===this)At=this.prevScope;else{let e=At;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,r=s.length;n<r;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function wg(t){return new bg(t)}function Ag(){return At}function cI(t,e=!1){At&&(At.active?At.cleanups.push(t):t())}let rt;const Bc=new WeakSet;class Sg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,At&&(At.active?At.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Bc.has(this)&&(Bc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Rg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,vd(this),Pg(this);const e=rt,n=Vn;rt=this,Vn=!0;try{return this.fn()}finally{kg(this),rt=e,Vn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ah(e);this.deps=this.depsTail=void 0,vd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Bc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){wu(this)&&this.run()}get dirty(){return wu(this)}}let Cg=0,Co,Ro;function Rg(t,e=!1){if(t.flags|=8,e){t.next=Ro,Ro=t;return}t.next=Co,Co=t}function bh(){Cg++}function wh(){if(--Cg>0)return;if(Ro){let e=Ro;for(Ro=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Co;){let e=Co;for(Co=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Pg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function kg(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ah(r),uI(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function wu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ng(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ng(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===$o)||(t.globalVersion=$o,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!wu(t))))return;t.flags|=2;const e=t.dep,n=rt,r=Vn;rt=t,Vn=!0;try{Pg(t);const s=t.fn(t._value);(e.version===0||Xn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{rt=n,Vn=r,kg(t),t.flags&=-3}}function Ah(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ah(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function uI(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Vn=!0;const Dg=[];function ir(){Dg.push(Vn),Vn=!1}function or(){const t=Dg.pop();Vn=t===void 0?!0:t}function vd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=rt;rt=void 0;try{e()}finally{rt=n}}}let $o=0;class hI{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Sh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!rt||!Vn||rt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==rt)n=this.activeLink=new hI(rt,this),rt.deps?(n.prevDep=rt.depsTail,rt.depsTail.nextDep=n,rt.depsTail=n):rt.deps=rt.depsTail=n,Og(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=rt.depsTail,n.nextDep=void 0,rt.depsTail.nextDep=n,rt.depsTail=n,rt.deps===n&&(rt.deps=r)}return n}trigger(e){this.version++,$o++,this.notify(e)}notify(e){bh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{wh()}}}function Og(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Og(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Au=new WeakMap,Ls=Symbol(""),Su=Symbol(""),jo=Symbol("");function Zt(t,e,n){if(Vn&&rt){let r=Au.get(t);r||Au.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Sh),s.map=r,s.key=n),s.track()}}function yr(t,e,n,r,s,i){const o=Au.get(t);if(!o){$o++;return}const l=c=>{c&&c.trigger()};if(bh(),e==="clear")o.forEach(l);else{const c=ye(t),u=c&&Ih(n);if(c&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===jo||!sr(m)&&m>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(jo)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Ls)),Gr(t)&&l(o.get(Su)));break;case"delete":c||(l(o.get(Ls)),Gr(t)&&l(o.get(Su)));break;case"set":Gr(t)&&l(o.get(Ls));break}}wh()}function oi(t){const e=We(t);return e===t||(Zt(e,"iterate",jo),An(t))?e:ar(t)?Qr(t)?e.map(n=>ns(Sn(n))):e.map(ns):e.map(Sn)}function rc(t){return Zt(t=We(t),"iterate",jo),t}function Gn(t,e){return ar(t)?ns(Qr(t)?Sn(e):e):Sn(e)}const fI={__proto__:null,[Symbol.iterator](){return qc(this,Symbol.iterator,t=>Gn(this,t))},concat(...t){return oi(this).concat(...t.map(e=>ye(e)?oi(e):e))},entries(){return qc(this,"entries",t=>(t[1]=Gn(this,t[1]),t))},every(t,e){return dr(this,"every",t,e,void 0,arguments)},filter(t,e){return dr(this,"filter",t,e,n=>n.map(r=>Gn(this,r)),arguments)},find(t,e){return dr(this,"find",t,e,n=>Gn(this,n),arguments)},findIndex(t,e){return dr(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return dr(this,"findLast",t,e,n=>Gn(this,n),arguments)},findLastIndex(t,e){return dr(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return dr(this,"forEach",t,e,void 0,arguments)},includes(...t){return Hc(this,"includes",t)},indexOf(...t){return Hc(this,"indexOf",t)},join(t){return oi(this).join(t)},lastIndexOf(...t){return Hc(this,"lastIndexOf",t)},map(t,e){return dr(this,"map",t,e,void 0,arguments)},pop(){return ho(this,"pop")},push(...t){return ho(this,"push",t)},reduce(t,...e){return Id(this,"reduce",t,e)},reduceRight(t,...e){return Id(this,"reduceRight",t,e)},shift(){return ho(this,"shift")},some(t,e){return dr(this,"some",t,e,void 0,arguments)},splice(...t){return ho(this,"splice",t)},toReversed(){return oi(this).toReversed()},toSorted(t){return oi(this).toSorted(t)},toSpliced(...t){return oi(this).toSpliced(...t)},unshift(...t){return ho(this,"unshift",t)},values(){return qc(this,"values",t=>Gn(this,t))}};function qc(t,e,n){const r=rc(t),s=r[e],i=s.call(r);if(r!==t&&!An(t)){if(i[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(i));return o.next=()=>Ed(i.next(),n),s!==Lg[e]&&Object.defineProperties(o,{return:{get(){const l=i.return;return typeof l=="function"?l.bind(i):l}},throw:{get(){const l=i.throw;return typeof l=="function"?l.bind(i):l}}}),o}i._next=i.next,i.next=()=>Ed(i._next(),n)}return i}function Ed(t,e){return t.done||(t.value=e(t.value)),t}const Lg=Array.prototype;function dr(t,e,n,r,s,i){const o=rc(t),l=o!==t&&!An(t),c=o[e];if(c!==Lg[e]){const p=c.apply(t,i);return l?Sn(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,Gn(t,p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=c.call(o,u,r);return l&&s?s(f):f}function Id(t,e,n,r){const s=rc(t),i=s!==t&&!An(t);let o=n,l=!1;s!==t&&(i?(l=r.length===0,o=function(u,f,p){return l&&(l=!1,u=Gn(t,u)),n.call(this,u,Gn(t,f),p,t)}):n.length>3&&(o=function(u,f,p){return n.call(this,u,f,p,t)}));const c=s[e](o,...r);return l?Gn(t,c):c}function Hc(t,e,n){const r=We(t);Zt(r,"iterate",jo);const s=r[e](...n);return(s===-1||s===!1)&&kh(n[0])?(n[0]=We(n[0]),r[e](...n)):s}function ho(t,e,n=[]){ir(),bh();const r=We(t)[e].apply(t,n);return wh(),or(),r}const dI=vh("__proto__,__v_isRef,__isVue"),Vg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(sr));function pI(t){sr(t)||(t=String(t));const e=We(this);return Zt(e,"has",t),e.hasOwnProperty(t)}class Mg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?wI:$g:i?Ug:Fg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ye(e);if(!s){let c;if(o&&(c=fI[n]))return c;if(n==="hasOwnProperty")return pI}const l=Reflect.get(e,n,Ht(e)?e:r);if((sr(n)?Vg.has(n):dI(n))||(s||Zt(e,"get",n),i))return l;if(Ht(l)){const c=o&&Ih(n)?l:l.value;return s&&Ge(c)?Ru(c):c}return Ge(l)?s?Ru(l):Rh(l):l}}class xg extends Mg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=ye(e)&&Ih(n);if(!this._isShallow){const u=ar(i);if(!An(r)&&!ar(r)&&(i=We(i),r=We(r)),!o&&Ht(i)&&!Ht(r))return u||(i.value=r),!0}const l=o?Number(n)<e.length:qe(e,n),c=Reflect.set(e,n,r,Ht(e)?e:s);return e===We(s)&&c&&(l?Xn(r,i)&&yr(e,"set",n,r):yr(e,"add",n,r)),c}deleteProperty(e,n){const r=qe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&yr(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!sr(n)||!Vg.has(n))&&Zt(e,"has",n),r}ownKeys(e){return Zt(e,"iterate",ye(e)?"length":Ls),Reflect.ownKeys(e)}}class mI extends Mg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const gI=new xg,_I=new mI,yI=new xg(!0);const Cu=t=>t,Ua=t=>Reflect.getPrototypeOf(t);function vI(t,e,n){return function(...r){const s=this.__v_raw,i=We(s),o=Gr(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?Cu:e?ns:Sn;return!e&&Zt(i,"iterate",c?Su:Ls),Nt(Object.create(u),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[f(p[0]),f(p[1])]:f(p),done:m}}})}}function $a(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function EI(t,e){const n={get(s){const i=this.__v_raw,o=We(i),l=We(s);t||(Xn(s,l)&&Zt(o,"get",s),Zt(o,"get",l));const{has:c}=Ua(o),u=e?Cu:t?ns:Sn;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Zt(We(s),"iterate",Ls),s.size},has(s){const i=this.__v_raw,o=We(i),l=We(s);return t||(Xn(s,l)&&Zt(o,"has",s),Zt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=We(l),u=e?Cu:t?ns:Sn;return!t&&Zt(c,"iterate",Ls),l.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return Nt(n,t?{add:$a("add"),set:$a("set"),delete:$a("delete"),clear:$a("clear")}:{add(s){const i=We(this),o=Ua(i),l=We(s),c=!e&&!An(s)&&!ar(s)?l:s;return o.has.call(i,c)||Xn(s,c)&&o.has.call(i,s)||Xn(l,c)&&o.has.call(i,l)||(i.add(c),yr(i,"add",c,c)),this},set(s,i){!e&&!An(i)&&!ar(i)&&(i=We(i));const o=We(this),{has:l,get:c}=Ua(o);let u=l.call(o,s);u||(s=We(s),u=l.call(o,s));const f=c.call(o,s);return o.set(s,i),u?Xn(i,f)&&yr(o,"set",s,i):yr(o,"add",s,i),this},delete(s){const i=We(this),{has:o,get:l}=Ua(i);let c=o.call(i,s);c||(s=We(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&yr(i,"delete",s,void 0),u},clear(){const s=We(this),i=s.size!==0,o=s.clear();return i&&yr(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=vI(s,t,e)}),n}function Ch(t,e){const n=EI(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_isShallow"?e:s==="__v_raw"?r:Reflect.get(qe(n,s)&&s in r?n:r,s,i)}const II={get:Ch(!1,!1)},TI={get:Ch(!1,!0)},bI={get:Ch(!0,!1)};const Fg=new WeakMap,Ug=new WeakMap,$g=new WeakMap,wI=new WeakMap;function AI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rh(t){return ar(t)?t:Ph(t,!1,gI,II,Fg)}function SI(t){return Ph(t,!1,yI,TI,Ug)}function Ru(t){return Ph(t,!0,_I,bI,$g)}function Ph(t,e,n,r,s){if(!Ge(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=s.get(t);if(i)return i;const o=AI(JE(t));if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function Qr(t){return ar(t)?Qr(t.__v_raw):!!(t&&t.__v_isReactive)}function ar(t){return!!(t&&t.__v_isReadonly)}function An(t){return!!(t&&t.__v_isShallow)}function kh(t){return t?!!t.__v_raw:!1}function We(t){const e=t&&t.__v_raw;return e?We(e):t}function jg(t){return!qe(t,"__v_skip")&&Object.isExtensible(t)&&yg(t,"__v_skip",!0),t}const Sn=t=>Ge(t)?Rh(t):t,ns=t=>Ge(t)?Ru(t):t;function Ht(t){return t?t.__v_isRef===!0:!1}function et(t){return Bg(t,!1)}function CI(t){return Bg(t,!0)}function Bg(t,e){return Ht(t)?t:new RI(t,e)}class RI{constructor(e,n){this.dep=new Sh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:We(e),this._value=n?e:Sn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||An(e)||ar(e);e=r?e:We(e),Xn(e,n)&&(this._rawValue=e,this._value=r?e:Sn(e),this.dep.trigger())}}function q(t){return Ht(t)?t.value:t}const PI={get:(t,e,n)=>e==="__v_raw"?t:q(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ht(s)&&!Ht(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function qg(t){return Qr(t)?t:new Proxy(t,PI)}class kI{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Sh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=$o-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&rt!==this)return Rg(this,!0),!0}get value(){const e=this.dep.track();return Ng(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function NI(t,e,n=!1){let r,s;return Se(t)?r=t:(r=t.get,s=t.set),new kI(r,s,n)}const ja={},Il=new WeakMap;let As;function DI(t,e=!1,n=As){if(n){let r=Il.get(n);r||Il.set(n,r=[]),r.push(t)}}function OI(t,e,n=tt){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=U=>s?U:An(U)||s===!1||s===0?vr(U,1):vr(U);let f,p,m,T,P=!1,V=!1;if(Ht(t)?(p=()=>t.value,P=An(t)):Qr(t)?(p=()=>u(t),P=!0):ye(t)?(V=!0,P=t.some(U=>Qr(U)||An(U)),p=()=>t.map(U=>{if(Ht(U))return U.value;if(Qr(U))return u(U);if(Se(U))return c?c(U,2):U()})):Se(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){ir();try{m()}finally{or()}}const U=As;As=f;try{return c?c(t,3,[T]):t(T)}finally{As=U}}:p=Jn,e&&s){const U=p,Z=s===!0?1/0:s;p=()=>vr(U(),Z)}const O=Ag(),N=()=>{f.stop(),O&&O.active&&Eh(O.effects,f)};if(i&&e){const U=e;e=(...Z)=>{try{return U(...Z)}finally{N()}}}let F=V?new Array(t.length).fill(ja):ja;const H=U=>{if(!(!(f.flags&1)||!f.dirty&&!U))if(e){const Z=f.run();if(U||s||P||(V?Z.some((ne,_)=>Xn(ne,F[_])):Xn(Z,F))){const ne=As;ir();try{m&&m(),As=f;const _=[Z,F===ja?void 0:V&&F[0]===ja?[]:F,T];F=Z,c?c(e,3,_):e(..._)}finally{As=ne,or()}}}else f.run()};return l&&l(H),f=new Sg(p),f.scheduler=o?()=>o(H,!1):H,T=U=>DI(U,!1,f),m=f.onStop=()=>{const U=Il.get(f);if(U){if(c)c(U,4);else for(const Z of U)Z();Il.delete(f)}},e?r?H(!0):F=f.run():o?o(H.bind(null,!0),!0):f.run(),N.pause=f.pause.bind(f),N.resume=f.resume.bind(f),N.stop=N,N}function vr(t,e=1/0,n){if(e<=0||!Ge(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ht(t))vr(t.value,e,n);else if(ye(t))for(let r=0;r<t.length;r++)vr(t[r],e,n);else if(wi(t)||Gr(t))t.forEach(r=>{vr(r,e,n)});else if(gg(t)){for(const r in t)vr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&vr(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ua(t,e,n,r){try{return r?t(...r):t()}catch(s){sc(s,e,n)}}function Un(t,e,n,r){if(Se(t)){const s=ua(t,e,n,r);return s&&pg(s)&&s.catch(i=>{sc(i,e,n,void 0,!0)}),s}if(ye(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Un(t[i],e,n,r));return s}}function sc(t,e,n,r=!0,s=!1){const i=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:l}=e&&e.appContext.config||tt;if(e){let c=e.parent;const u=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const p=c.ec;if(p&&!c.isUnmounted&&(!s||c.scope.active)){for(let m=0;m<p.length;m++)if(p[m](t,u,f)===!1)return}c=c.parent}if(o){ir(),ua(o,null,10,[t,u,f]),or();return}}LI(t,n,i,r,l)}function LI(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const on=[];let Nn=-1;const Qn=[];let jr=null,ci=0;const Hg=Promise.resolve();let Tl=null;function Wg(t){const e=Tl||Hg;return t?e.then(this?t.bind(this):t):e}function VI(t){let e=Nn+1,n=on.length;for(;e<n;){const r=e+n>>>1,s=on[r],i=Bo(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Nh(t){if(!(t.flags&1)){const e=Bo(t),n=on[on.length-1];!n||!(t.flags&2)&&e>=Bo(n)?on.push(t):on.splice(VI(e),0,t),t.flags|=1,zg()}}function zg(){Tl||(Tl=Hg.then(Qg))}function MI(t){if(!ye(t))jr&&t.id===-1?jr.splice(ci+1,0,t):t.flags&1||(Qn.push(t),t.flags|=1);else for(let e=0;e<t.length;e++)Qn.push(t[e]);zg()}function Kg(t,e,n,r=Nn+1){for(;r<on.length;r++){const s=on[r];if(s&&s.flags&2){if(t&&s.id!==t.uid||e!==void 0&&!(s.id>=e))continue;on.splice(r,1),r=t?r-1:Nn,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Gg(t,e,n=0){if(Qn.length){let r=Qn,s=0;if(e){r=[];for(let o=0;o<Qn.length;o++){const l=Qn[o];(l.i!==void 0?!l.i||l.i.uid<n:e.has(l))?Qn[s++]=l:r.push(l)}}const i=[...new Set(r)].sort((o,l)=>Bo(o)-Bo(l));if(Qn.length=s,jr){for(let o=0;o<i.length;o++)jr.push(i[o]);return}for(jr=i,ci=0;ci<jr.length;ci++){const o=jr[ci];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}jr=null,ci=0}}let Wc=!1;function xI(t,e){if(Wc){t();return}const n=e===void 0?void 0:new Set(Qn);t(),Wc=!0;try{Kg(void 0,e),Gg(void 0,n,e)}finally{Wc=!1}}const Bo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Qg(t){try{for(Nn=0;Nn<on.length;Nn++){const e=on[Nn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ua(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Nn<on.length;Nn++){const e=on[Nn];e&&(e.flags&=-2)}Nn=-1,on.length=0,Gg(),Tl=null,(on.length||Qn.length)&&Qg()}}let bn=null,Yg=null;function bl(t){const e=bn;return bn=t,Yg=t&&t.type.__scopeId||null,e}function FI(t,e=bn,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Sl(-1);const i=bl(e),o=Vs.length;let l;try{l=t(...s)}finally{for(let c=Vs.length;c>o;c--)v_();bl(i),r._d&&Sl(1)}return l};return r._n=!0,r._c=!0,r._d=!0,r}function fo(t,e){if(bn===null)return t;const n=lc(bn),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=tt]=e[s];i&&(Se(i)&&(i={mounted:i,updated:i}),i.deep&&vr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Ts(t,e,n,r){let s=t;if(r==="beforeMount")t._mount=t;else if(r==="beforeUpdate"){const l=e&&e._mount;l&&(l._latest=t,t._mount=l)}else if(r==="mounted"){const l=t._latest;t._mount=t._latest=void 0,l&&(s=l,l._mount=void 0)}const i=s.dirs,o=e&&e.dirs;for(let l=0;l<i.length;l++){let c=i[l];o?c.oldValue=o[l].value:r==="mounted"&&c.oldValue!==void 0&&(c=Nt({},c,{oldValue:void 0}));let u=c.dir[r];u&&(ir(),Un(u,n,8,[t.el,c,s,e]),or())}}function UI(t,e){if(an){let n=an.provides;const r=an.parent&&an.parent.provides;r===n&&(n=an.provides=Object.create(r)),n[t]=e}}function _i(t,e,n=!1){const r=b_();if(r||yi){let s=yi?yi._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Se(e)?e.call(r&&r.proxy):e}}const $I=Symbol.for("v-scx"),jI=()=>_i($I);function Sr(t,e,n){return Xg(t,e,n)}function Xg(t,e,n=tt){const{immediate:r,deep:s,flush:i,once:o}=n,l=Nt({},n),c=e&&r||!e&&i!=="post";let u;if(Ko){if(i==="sync"){const T=jI();u=T.__watcherHandles||(T.__watcherHandles=[])}else if(!c){const T=()=>{};return T.stop=Jn,T.resume=Jn,T.pause=Jn,T}}const f=an;l.call=(T,P,V)=>Un(T,f,P,V);let p=!1;i==="post"?l.scheduler=T=>{T.i=f,Yt(T,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(T,P)=>{P?T():Nh(T)}),l.augmentJob=T=>{e&&(T.flags|=4),p&&(T.flags|=2,f&&(T.id=f.uid,T.i=f))};const m=OI(t,e,l);return Ko&&(u?u.push(m):c&&m()),m}function BI(t,e,n){const r=this.proxy,s=dt(t)?t.includes(".")?Jg(r,t):()=>r[t]:t.bind(r,r);let i;Se(e)?i=e:(i=e.handler,n=e);const o=fa(this),l=Xg(s,i.bind(r),n);return o(),l}function Jg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const $r=new WeakMap,Zg=Symbol("_vte"),ic=t=>t.__isTeleport,Cs=t=>t&&(t.disabled||t.disabled===""),qI=t=>t&&(t.defer||t.defer===""),Td=t=>typeof SVGElement<"u"&&t instanceof SVGElement,bd=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Pu=(t,e)=>{const n=t&&t.to;return dt(n)?e?e(n):null:n},HI={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,l,c,u){const{mc:f,pc:p,pbc:m,o:{insert:T,querySelector:P,createText:V,createComment:O,parentNode:N}}=u,F=Cs(e.props);let{dynamicChildren:H}=e;const U=(_,E,I)=>{_.shapeFlag&16&&f(_.children,E,I,s,i,o,l,c)},Z=(_=e)=>{const E=Cs(_.props),I=_.target=Pu(_.props,P),S=ku(I,_,V,T);I&&(o!=="svg"&&Td(I)?o="svg":o!=="mathml"&&bd(I)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(I),E||(U(_,I,S),vo(_,!1)))},ne=_=>{const E=()=>{if($r.get(_)===E){if($r.delete(_),Cs(_.props)){const I=N(_.el)||n;U(_,I,_.anchor),vo(_,!0)}Z(_)}};$r.set(_,E),Yt(E,i)};if(t==null){const _=e.el=V(""),E=e.anchor=V("");if(T(_,n,r),T(E,n,r),qI(e.props)||i&&i.pendingBranch){ne(e);return}F&&(U(e,n,E),vo(e,!0)),Z()}else{e.el=t.el;const _=e.anchor=t.anchor,E=$r.get(t);if(E){E.flags|=8,$r.delete(t),ne(e);return}e.targetStart=t.targetStart;const I=e.target=t.target,S=e.targetAnchor=t.targetAnchor,k=Cs(t.props),x=k?n:I,A=k?_:S;if(o==="svg"||Td(I)?o="svg":(o==="mathml"||bd(I))&&(o="mathml"),H?(m(t.dynamicChildren,H,x,s,i,o,l),xh(t,e,!0)):c||p(t,e,x,A,s,i,o,l,!1),F)k?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Ba(e,n,_,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const Ve=Pu(e.props,P);Ve&&(e.target=Ve,Ba(e,Ve,null,u,0))}else k&&Ba(e,I,S,u,1);vo(e,F)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:l,anchor:c,targetStart:u,targetAnchor:f,target:p,props:m}=t,T=Cs(m),P=i||!T,V=$r.get(t);if(V&&(V.flags|=8,$r.delete(t)),p&&(s(u),s(f)),i&&s(c),!V&&(T||p)&&o&16)for(let O=0;O<l.length;O++){const N=l[O];r(N,e,n,P,!!N.dynamicChildren)}},move:Ba,hydrate:WI};function Ba(t,e,n,{o:{insert:r},m:s},i=2){i===0&&(t.targetStart&&r(t.targetStart,e,n),r(t.targetAnchor,e,n),n=t.targetAnchor);const{el:o,anchor:l,shapeFlag:c,children:u,props:f}=t,p=i===2;if(p&&r(o,e,n),!$r.has(t)&&(!p||Cs(f))&&c&16)for(let m=0;m<u.length;m++)s(u[m],e,n,2);p&&r(l,e,n)}function WI(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:l,querySelector:c,insert:u,createText:f}},p){function m(O,N){let F=N;for(;F;){if(F&&F.nodeType===8){if(F.data==="teleport start anchor")e.targetStart=F;else if(F.data==="teleport anchor"){e.targetAnchor=F,O._lpa=e.targetAnchor&&o(e.targetAnchor);break}}F=o(F)}}function T(O,N){N.anchor=p(o(O),N,l(O),n,r,s,i)}const P=e.target=Pu(e.props,c),V=Cs(e.props);if(P){const O=P._lpa||P.firstChild;e.shapeFlag&16&&(V?(T(t,e),m(P,O),e.targetAnchor||ku(P,e,f,u,l(t)===P?t:null)):(e.anchor=o(t),m(P,O),e.targetAnchor||ku(P,e,f,u),p(O&&o(O),e,P,n,r,s,i))),vo(e,V)}else V&&e.shapeFlag&16&&(T(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const qa=HI;function vo(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function ku(t,e,n,r,s=null){const i=e.targetStart=n(""),o=e.targetAnchor=n("");return i[Zg]=o,t&&(r(i,t,s),r(o,t,s)),o}const zc=Symbol("_leaveCb");function zI(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==$n){e=n;break}}return e}function e_(t){if(!Dh(t))return ic(t.type)&&t.children?zI(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Se(n.default))return n.default()}}function Po(t,e){if(t.shapeFlag&6&&t.component){t.transition=e;const n=t.component.subTree;Po(ic(n.type)&&e_(n)||n,e)}else if(t.shapeFlag&128){const n=t.suspense;if(n){const r=n.isHydrating?n.pendingBranch:n.activeBranch;r&&Po(r,e.clone(r))}else t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)}else if(t.transition=e,t.type===Be&&ye(t.children)){const n=a_(t.children,!1);n&&Po(n,e)}}function Nu(t){if(t.component)return Nu(t.component.subTree);if(t.type===Be){const e=ye(t.children)&&a_(t.children,!1);return e?Nu(e):void 0}if(t.type!==$n)return t}function oc(t,e){return Se(t)?Nt({name:t.name},e,{setup:t}):t}function t_(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function wd(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const wl=new WeakMap;function ko(t,e,n,r,s=!1){if(ye(t)){t.forEach((V,O)=>ko(V,e&&(ye(e)?e[O]:e),n,r,s));return}if(No(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ko(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?lc(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===tt?l.refs={}:l.refs,p=l.setupState,m=We(p),T=p===tt?dg:V=>wd(f,V)?!1:qe(m,V),P=(V,O)=>!(O&&wd(f,O));if(u!=null&&u!==c){if(Ad(e),dt(u))f[u]=null,T(u)&&(p[u]=null);else if(Ht(u)){const V=e;P(u,V.k)&&(u.value=null),V.k&&(f[V.k]=null)}}if(Se(c))ua(c,l,12,[o,f]);else{const V=dt(c),O=Ht(c);if(V||O){const N=()=>{if(t.f){const F=V?T(c)?p[c]:f[c]:P()||!t.k?c.value:f[t.k];if(s)ye(F)&&Eh(F,i);else if(ye(F))F.includes(i)||F.push(i);else if(V)f[c]=[i],T(c)&&(p[c]=f[c]);else{const H=[i];P(c,t.k)&&(c.value=H),t.k&&(f[t.k]=H)}}else V?(f[c]=o,T(c)&&(p[c]=o)):O&&(P(c,t.k)&&(c.value=o),t.k&&(f[t.k]=o))};if(o){const F=()=>{N(),wl.delete(t)};F.id=-1,wl.set(t,F),Yt(F,n)}else Ad(t),N()}}}function Ad(t){const e=wl.get(t);e&&(e.flags|=8,wl.delete(t))}nc().requestIdleCallback;nc().cancelIdleCallback;const No=t=>!!t.type.__asyncLoader,Dh=t=>t.type.__isKeepAlive;function KI(t,e){n_(t,"a",e)}function GI(t,e){n_(t,"da",e)}function n_(t,e,n=an){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(qo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Dh(s.parent.vnode)&&QI(r,e,n,s),s=s.parent}}function QI(t,e,n,r){const s=qo(e,t,r,!0),i=qo("um",()=>Eh(r[e],s),n);i.flags=16}function qo(t,e,n=an,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{ir();const l=fa(n),c=Un(e,n,t,o);return l(),or(),c});return r?s.unshift(i):s.push(i),i}}const Nr=t=>(e,n=an)=>{(!Ko||t==="sp")&&qo(t,(...r)=>e(...r),n)},YI=Nr("bm"),Oh=Nr("m"),XI=Nr("bu"),JI=Nr("u"),ZI=Nr("bum"),Lh=Nr("um"),eT=Nr("sp"),tT=Nr("rtg"),nT=Nr("rtc");function rT(t,e=an){qo("ec",t,e)}const sT=Symbol.for("v-ndc");function Lt(t,e,n,r){let s;const i=n,o=ye(t);if(o||dt(t)){const l=o&&Qr(t);let c=!1,u=!1;l&&(c=!An(t),u=ar(t),t=rc(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(c?u?ns(Sn(t[f])):Sn(t[f]):t[f],f,void 0,i)}else if(typeof t=="number")if(!Number.isInteger(t)||t<0)s=[];else{s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Ge(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const Du=t=>t?w_(t)?lc(t):Du(t.parent):null,Do=Nt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Du(t.parent),$root:t=>Du(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>s_(t),$forceUpdate:t=>t.f||(t.f=()=>{Nh(t.update)}),$nextTick:t=>t.n||(t.n=Wg.bind(t.proxy)),$watch:t=>BI.bind(t)}),Kc=(t,e)=>t!==tt&&!t.__isScriptSetup&&qe(t,e),iT={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Kc(r,e))return o[e]=1,r[e];if(s!==tt&&qe(s,e))return o[e]=2,s[e];if(qe(i,e))return o[e]=3,i[e];if(n!==tt&&qe(n,e))return o[e]=4,n[e];Ou&&(o[e]=0)}}const u=Do[e];let f,p;if(u)return e==="$attrs"&&Zt(t.attrs,"get",""),u(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==tt&&qe(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,qe(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Kc(s,e)?(s[e]=n,!0):r!==tt&&qe(r,e)?(r[e]=n,!0):qe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},l){let c;return!!(n[l]||t!==tt&&l[0]!=="$"&&qe(t,l)||Kc(e,l)||qe(i,l)||qe(r,l)||qe(Do,l)||qe(s.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:qe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Sd(t){return ye(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ou=!0;function oT(t){const e=s_(t),n=t.proxy,r=t.ctx;Ou=!1,e.beforeCreate&&Cd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:T,updated:P,activated:V,deactivated:O,beforeDestroy:N,beforeUnmount:F,destroyed:H,unmounted:U,render:Z,renderTracked:ne,renderTriggered:_,errorCaptured:E,serverPrefetch:I,expose:S,inheritAttrs:k,components:x,directives:A,filters:Ve}=e;if(u&&aT(u,r,null),o)for(const Re in o){const Ce=o[Re];Se(Ce)&&(r[Re]=Ce.bind(n))}if(s){const Re=s.call(n,n);Ge(Re)&&(t.data=Rh(Re))}if(Ou=!0,i)for(const Re in i){const Ce=i[Re],gt=Se(Ce)?Ce.bind(n,n):Se(Ce.get)?Ce.get.bind(n,n):Jn,Dt=!Se(Ce)&&Se(Ce.set)?Ce.set.bind(n):Jn,Xe=yt({get:gt,set:Dt});Object.defineProperty(r,Re,{enumerable:!0,configurable:!0,get:()=>Xe.value,set:je=>Xe.value=je})}if(l)for(const Re in l)r_(l[Re],r,n,Re);if(c){const Re=Se(c)?c.call(n):c;Reflect.ownKeys(Re).forEach(Ce=>{UI(Ce,Re[Ce])})}f&&Cd(f,t,"c");function it(Re,Ce){ye(Ce)?Ce.forEach(gt=>Re(gt.bind(n))):Ce&&Re(Ce.bind(n))}if(it(YI,p),it(Oh,m),it(XI,T),it(JI,P),it(KI,V),it(GI,O),it(rT,E),it(nT,ne),it(tT,_),it(ZI,F),it(Lh,U),it(eT,I),ye(S))if(S.length){const Re=t.exposed||(t.exposed={});S.forEach(Ce=>{Object.defineProperty(Re,Ce,{get:()=>n[Ce],set:gt=>n[Ce]=gt,enumerable:!0})})}else t.exposed||(t.exposed={});Z&&t.render===Jn&&(t.render=Z),k!=null&&(t.inheritAttrs=k),x&&(t.components=x),A&&(t.directives=A),I&&t_(t)}function aT(t,e,n=Jn){ye(t)&&(t=Lu(t));for(const r in t){const s=t[r];let i;Ge(s)?"default"in s?i=_i(s.from||r,s.default,!0):i=_i(s.from||r):i=_i(s),Ht(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Cd(t,e,n){Un(ye(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function r_(t,e,n,r){let s=r.includes(".")?Jg(n,r):()=>n[r];if(dt(t)){const i=e[t];Se(i)&&Sr(s,i)}else if(Se(t))Sr(s,t.bind(n));else if(Ge(t))if(ye(t))t.forEach(i=>r_(i,e,n,r));else{const i=Se(t.handler)?t.handler.bind(n):e[t.handler];Se(i)&&Sr(s,i,t)}}function s_(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Al(c,u,o,!0)),Al(c,e,o)),Ge(e)&&i.set(e,c),c}function Al(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Al(t,i,n,!0),s&&s.forEach(o=>Al(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=lT[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const lT={data:Rd,props:Pd,emits:Pd,methods:Eo,computed:Eo,beforeCreate:sn,created:sn,beforeMount:sn,mounted:sn,beforeUpdate:sn,updated:sn,beforeDestroy:sn,beforeUnmount:sn,destroyed:sn,unmounted:sn,activated:sn,deactivated:sn,errorCaptured:sn,serverPrefetch:sn,components:Eo,directives:Eo,watch:uT,provide:Rd,inject:cT};function Rd(t,e){return e?t?function(){return Nt(Se(t)?t.call(this,this):t,Se(e)?e.call(this,this):e)}:e:t}function cT(t,e){return Eo(Lu(t),Lu(e))}function Lu(t){if(ye(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function sn(t,e){return t?[...new Set([].concat(t,e))]:e}function Eo(t,e){return t?Nt(Object.create(null),t,e):e}function Pd(t,e){return t?ye(t)&&ye(e)?[...new Set([...t,...e])]:Nt(Object.create(null),Sd(t),Sd(e??{})):e}function uT(t,e){if(!t)return e;if(!e)return t;const n=Nt(Object.create(null),t);for(const r in e)n[r]=sn(t[r],e[r]);return n}function i_(){return{app:null,config:{isNativeTag:dg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hT=0;function fT(t,e){return function(r,s=null){Se(r)||(r=Nt({},r)),s!=null&&!Ge(s)&&(s=null);const i=i_(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:hT++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:qT,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&Se(f.install)?(o.add(f),f.install(u,...p)):Se(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!c){const T=u._ceVNode||Ie(r,s);return T.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(T,f,m),c=!0,u._container=f,f.__vue_app__=u,lc(T.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Un(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=yi;yi=u;try{return f()}finally{yi=p}}};return u}}let yi=null;const dT=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ln(e)}Modifiers`]||t[`${us(e)}Modifiers`];function pT(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||tt;let s=n;const i=e.startsWith("update:"),o=i&&dT(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>dt(f)?f.trim():f)),o.number&&(s=s.map(Th)));let l,c=r[l=$c(e)]||r[l=$c(Ln(e))];!c&&i&&(c=r[l=$c(us(e))]),c&&Un(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Un(u,t,6,s)}}const mT=new WeakMap;function o_(t,e,n=!1){const r=n?mT:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!Se(t)){const c=u=>{const f=o_(u,e,!0);f&&(l=!0,Nt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Ge(t)&&r.set(t,null),null):(ye(i)?i.forEach(c=>o[c]=null):Nt(o,i),Ge(t)&&r.set(t,o),o)}function ac(t,e){return!t||!Zl(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),qe(t,e[0].toLowerCase()+e.slice(1))||qe(t,us(e))||qe(t,e))}function kd(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:p,data:m,setupState:T,ctx:P,inheritAttrs:V}=t,O=bl(t);let N,F;try{if(n.shapeFlag&4){const U=s||r,Z=U;N=Yn(u.call(Z,U,f,p,T,m,P)),F=l}else{const U=e;N=Yn(U.length>1?U(p,{attrs:l,slots:o,emit:c}):U(p,null)),F=e.props?l:gT(l)}}catch(U){Vs.length=0,sc(U,t,1),N=Ie($n)}let H=N;if(F&&V!==!1){const U=Object.keys(F),{shapeFlag:Z}=H;U.length&&Z&7&&(i&&U.some(ec)&&(F=_T(F,i)),H=Ai(H,F,!1,!0))}if(n.dirs&&(H=Ai(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition){const U=ic(H.type)&&e_(H)||H;Po(U,n.transition)}return N=H,bl(O),N}function a_(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(Wo(s)){if(s.type!==$n||s.children==="v-if"){if(n)return;n=s}}else return}return n}const gT=t=>{let e;for(const n in t)(n==="class"||n==="style"||Zl(n))&&((e||(e={}))[n]=t[n]);return e},_T=(t,e)=>{const n={};for(const r in t)(!ec(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function yT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Nd(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(l_(o,r,m)&&!ac(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Nd(r,o,u):!0:!!o;return!1}function Nd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(!qe(t,i)||l_(e,t,i)&&!ac(n,i))return!0}return!1}function l_(t,e,n){const r=t[n],s=e[n];return n==="style"&&Ge(r)&&Ge(s)?!Li(r,s):r!==s}function vT({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const c_={},u_=()=>Object.create(c_),h_=t=>Object.getPrototypeOf(t)===c_;function ET(t,e,n,r=!1){const s={},i=u_();t.propsDefaults=Object.create(null),f_(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:SI(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function IT(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=We(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(ac(t.emitsOptions,m))continue;const T=e[m];if(c)if(qe(i,m))T!==i[m]&&(i[m]=T,u=!0);else{const P=Ln(m);s[P]=Vu(c,l,P,T,t,!1)}else T!==i[m]&&(i[m]=T,u=!0)}}}else{f_(t,e,s,i)&&(u=!0);let f;for(const p in l)(!e||!qe(e,p)&&((f=us(p))===p||!qe(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Vu(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!qe(e,p))&&(delete i[p],u=!0)}u&&yr(t.attrs,"set","")}function f_(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(So(c))continue;const u=e[c];let f;s&&qe(s,f=Ln(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:ac(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=We(n),u=l||tt;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Vu(s,c,p,u[p],t,!qe(u,p))}}return o}function Vu(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=qe(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Se(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=fa(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===us(n))&&(r=!0))}return r}const TT=new WeakMap;function d_(t,e,n=!1){const r=n?TT:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!Se(t)){const f=p=>{c=!0;const[m,T]=d_(p,e,!0);Nt(o,m),T&&l.push(...T)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Ge(t)&&r.set(t,Ps),Ps;if(ye(i))for(let f=0;f<i.length;f++){const p=Ln(i[f]);Dd(p)&&(o[p]=tt)}else if(i)for(const f in i){const p=Ln(f);if(Dd(p)){const m=i[f],T=o[p]=ye(m)||Se(m)?{type:m}:Nt({},m),P=T.type;let V=!1,O=!0;if(ye(P))for(let N=0;N<P.length;++N){const F=P[N],H=Se(F)&&F.name;if(H==="Boolean"){V=!0;break}else H==="String"&&(O=!1)}else V=Se(P)&&P.name==="Boolean";T[0]=V,T[1]=O,(V||qe(T,"default"))&&l.push(p)}}const u=[o,l];return Ge(t)&&r.set(t,u),u}function Dd(t){return t[0]!=="$"&&!So(t)}const Vh=t=>t==="_"||t==="_ctx"||t==="$stable",Mh=t=>ye(t)?t.map(Yn):[Yn(t)],bT=(t,e,n)=>{if(e._n)return e;const r=FI((...s)=>Mh(e(...s)),n);return r._c=!1,r},p_=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Vh(s))continue;const i=t[s];if(Se(i))e[s]=bT(s,i,r);else if(i!=null){const o=Mh(i);e[s]=()=>o}}},m_=(t,e)=>{const n=Mh(e);t.slots.default=()=>n},g_=(t,e,n)=>{for(const r in e)(n||!Vh(r))&&(t[r]=e[r])},wT=(t,e,n)=>{const r=t.slots=u_();if(t.vnode.shapeFlag&32){const s=e._;s?(g_(r,e,n),n&&yg(r,"_",s,!0)):p_(e,r)}else e&&m_(t,e)},AT=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=tt;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:g_(s,e,n):(i=!e.$stable,p_(e,s)),o=e}else e&&(m_(t,e),o={default:1});if(i)for(const l in s)!Vh(l)&&o[l]==null&&delete s[l]},Yt=NT;function ST(t){return CT(t)}function CT(t,e){const n=nc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:T=Jn,insertStaticContent:P}=t,V=(w,D,W,te=null,G=null,X=null,se=void 0,oe=null,y=!!D.dynamicChildren)=>{if(w===D)return;w&&!po(w,D)&&(te=un(w),je(w,G,X,!0),w=null),D.patchFlag===-2&&(y=!1,D.dynamicChildren=null),D.dynamicChildren&&w&&w.dynamicChildren&&w.dynamicChildren.hasOnce&&(D.dynamicChildren===Ps&&(D.dynamicChildren=[]),D.dynamicChildren.hasOnce=!0);const{type:v,ref:B,shapeFlag:z}=D;switch(v){case ha:O(w,D,W,te);break;case $n:N(w,D,W,te);break;case Qc:w==null&&F(D,W,te,se);break;case Be:x(w,D,W,te,G,X,se,oe,y);break;default:z&1?Z(w,D,W,te,G,X,se,oe,y):z&6?A(w,D,W,te,G,X,se,oe,y):(z&64||z&128)&&v.process(w,D,W,te,G,X,se,oe,y,mn)}B!=null&&G?ko(B,w&&w.ref,X,D||w,!D):B==null&&w&&w.ref!=null&&ko(w.ref,null,X,w,!0)},O=(w,D,W,te)=>{if(w==null)r(D.el=l(D.children),W,te);else{const G=D.el=w.el;D.children!==w.children&&u(G,D.children)}},N=(w,D,W,te)=>{w==null?r(D.el=c(D.children||""),W,te):D.el=w.el},F=(w,D,W,te)=>{[w.el,w.anchor]=P(w.children,D,W,te,w.el,w.anchor)},H=({el:w,anchor:D},W,te)=>{let G;for(;w&&w!==D;)G=m(w),r(w,W,te),w=G;r(D,W,te)},U=({el:w,anchor:D})=>{let W;for(;w&&w!==D;)W=m(w),s(w),w=W;s(D)},Z=(w,D,W,te,G,X,se,oe,y)=>{if(D.type==="svg"?se="svg":D.type==="math"&&(se="mathml"),w==null)ne(D,W,te,G,X,se,oe,y);else{const v=w.el&&w.el._isVueCE?w.el:null;try{v&&v._beginPatch(),I(w,D,G,X,se,oe,y)}finally{v&&v._endPatch()}}},ne=(w,D,W,te,G,X,se,oe)=>{let y,v;const{props:B,shapeFlag:z,transition:ae,dirs:ce}=w;if(y=w.el=o(w.type,X,B&&B.is,B),z&8?f(y,w.children):z&16&&E(w.children,y,null,te,G,Gc(w,X),se,oe),ce&&Ts(w,null,te,"created"),_(y,w,w.scopeId,se,te),B){for(const de in B)de!=="value"&&!So(de)&&i(y,de,null,B[de],X,te);"value"in B&&i(y,"value",null,B.value,X),(v=B.onVnodeBeforeMount)&&Hn(v,te,w)}ce&&Ts(w,null,te,"beforeMount");const _e=RT(G,ae);_e?ae.beforeEnter(y):ae&&!ae.persisted&&(y[kT]=!0),r(y,D,W),((v=B&&B.onVnodeMounted)||_e||ce)&&Yt(()=>{try{v&&Hn(v,te,w),_e&&ae.enter(y),ce&&Ts(w,null,te,"mounted")}finally{}},G)},_=(w,D,W,te,G)=>{if(W&&T(w,W),te)for(let X=0;X<te.length;X++)T(w,te[X]);if(G){let X=G.subTree;if(D===X||y_(X.type)&&(X.ssContent===D||X.ssFallback===D)){const se=G.vnode;_(w,se,se.scopeId,se.slotScopeIds,G.parent)}}},E=(w,D,W,te,G,X,se,oe,y=0)=>{for(let v=y;v<w.length;v++){const B=w[v]=oe?_r(w[v]):Yn(w[v]);V(null,B,D,W,te,G,X,se,oe)}},I=(w,D,W,te,G,X,se)=>{const oe=D.el=w.el;let{patchFlag:y,dynamicChildren:v,dirs:B}=D;y|=w.patchFlag&16;const z=w.props||tt,ae=D.props||tt;let ce;if(W&&bs(W,!1),(ce=ae.onVnodeBeforeUpdate)&&Hn(ce,W,D,w),B&&Ts(D,w,W,"beforeUpdate"),W&&bs(W,!0),v&&(!w.dynamicChildren||w.dynamicChildren.length!==v.length)&&(y=0,se=!1,v=null),(z.innerHTML&&ae.innerHTML==null||z.textContent&&ae.textContent==null)&&f(oe,""),v?S(w.dynamicChildren,v,oe,W,te,Gc(D,G),X):se||Ce(w,D,oe,null,W,te,Gc(D,G),X,!1),y>0){if(y&16)k(oe,z,ae,W,G);else if(y&2&&z.class!==ae.class&&i(oe,"class",null,ae.class,G),y&4&&i(oe,"style",z.style,ae.style,G),y&8){const _e=D.dynamicProps;for(let de=0;de<_e.length;de++){const $=_e[de],Q=z[$],ge=ae[$];(ge!==Q||$==="value")&&i(oe,$,Q,ge,G,W)}}y&1&&w.children!==D.children&&f(oe,D.children)}else!se&&v==null&&k(oe,z,ae,W,G);((ce=ae.onVnodeUpdated)||B)&&Yt(()=>{ce&&Hn(ce,W,D,w),B&&Ts(D,w,W,"updated")},te)},S=(w,D,W,te,G,X,se)=>{for(let oe=0;oe<D.length;oe++){const y=w[oe],v=D[oe],B=y.el||Oo(y),z=B&&(y.type===Be||!po(y,v)||y.shapeFlag&198)?p(B):W;V(y,v,z,null,te,G,X,se,!0)}},k=(w,D,W,te,G)=>{if(D!==W){if(D!==tt)for(const X in D)!So(X)&&!(X in W)&&i(w,X,D[X],null,G,te);for(const X in W){if(So(X))continue;const se=W[X],oe=D[X];se!==oe&&X!=="value"&&i(w,X,oe,se,G,te)}"value"in W&&i(w,"value",D.value,W.value,G)}},x=(w,D,W,te,G,X,se,oe,y)=>{const v=D.el=w?w.el:l(""),B=D.anchor=w?w.anchor:l("");let{patchFlag:z,dynamicChildren:ae,slotScopeIds:ce}=D;ce&&(oe=oe?oe.concat(ce):ce),w==null?(r(v,W,te),r(B,W,te),E(D.children||[],W,B,G,X,se,oe,y)):z>0&&z&64&&ae&&w.dynamicChildren&&w.dynamicChildren.length===ae.length?(S(w.dynamicChildren,ae,W,G,X,se,oe),(D.key!=null||G&&D===G.subTree)&&xh(w,D,!0)):Ce(w,D,W,B,G,X,se,oe,y)},A=(w,D,W,te,G,X,se,oe,y)=>{D.slotScopeIds=oe,w==null?D.shapeFlag&512?G.ctx.activate(D,W,te,se,y):Ve(D,W,te,G,X,se,y):Ne(w,D,y)},Ve=(w,D,W,te,G,X,se)=>{const oe=w.component=xT(w,te,G);if(Dh(w)&&(oe.ctx.renderer=mn),FT(oe,!1,se),oe.asyncDep){if(G&&G.registerDep(oe,it,se,X),!w.el){const y=oe.subTree=Ie($n);N(null,y,D,W),w.placeholder=y.el}}else it(oe,w,D,W,G,X,se)},Ne=(w,D,W)=>{const te=D.component=w.component;if(yT(w,D,W))if(te.asyncDep&&!te.asyncResolved){D.el=w.el,D.placeholder=w.placeholder,Re(te,D,W);return}else te.next=D,te.update();else D.el=w.el,D.placeholder=w.placeholder,te.vnode=D},it=(w,D,W,te,G,X,se)=>{const oe=()=>{if(w.isMounted){let{next:z,bu:ae,u:ce,parent:_e,vnode:de}=w;{const Ue=__(w);if(Ue){z&&(z.el=de.el,Re(w,z,se)),Ue.asyncDep.then(()=>{const Qe=()=>{w.job.flags&8||(G&&G.pendingBranch?Yt(Qe,G):v())};Qe.flags=48,Yt(Qe,G)});return}}let $=z,Q;bs(w,!1),z?(z.el=de.el,Re(w,z,se)):z=de,ae&&al(ae),(Q=z.props&&z.props.onVnodeBeforeUpdate)&&Hn(Q,_e,z,de),bs(w,!0);const ge=kd(w),be=w.subTree;w.subTree=ge,V(be,ge,p(be.el||Oo(be)),un(be),w,G,X),z.el=ge.el,$===null&&vT(w,ge.el),ce&&Yt(ce,G),(Q=z.props&&z.props.onVnodeUpdated)&&Yt(()=>Hn(Q,_e,z,de),G)}else{let z;const{el:ae,props:ce}=D,{bm:_e,m:de,parent:$,root:Q,type:ge}=w,be=No(D);bs(w,!1),_e&&al(_e),!be&&(z=ce&&ce.onVnodeBeforeMount)&&Hn(z,$,D),bs(w,!0);{Q.ce&&Q.ce._hasShadowRoot()&&Q.ce._injectChildStyle(ge,w.parent?w.parent.type:void 0);const Ue=w.subTree=kd(w);V(null,Ue,W,te,w,G,X),D.el=Ue.el}if(de&&Yt(de,G),!be&&(z=ce&&ce.onVnodeMounted)){const Ue=D;Yt(()=>Hn(z,$,Ue),G)}(D.shapeFlag&256||$&&No($.vnode)&&$.vnode.shapeFlag&256)&&w.a&&Yt(w.a,G),w.isMounted=!0,D=W=te=null}};w.scope.on();const y=w.effect=new Sg(oe);w.scope.off();const v=w.update=y.run.bind(y),B=w.job=y.runIfDirty.bind(y);B.i=w,B.id=w.uid,y.scheduler=()=>Nh(B),bs(w,!0),v()},Re=(w,D,W)=>{D.component=w;const te=w.vnode.props;w.vnode=D,w.next=null,IT(w,D.props,te,W),AT(w,D.children,W),ir(),Kg(w),or()},Ce=(w,D,W,te,G,X,se,oe,y=!1)=>{const v=w&&w.children,B=w?w.shapeFlag:0,z=D.children,{patchFlag:ae,shapeFlag:ce}=D;if(ae>0){if(ae&128){Dt(v,z,W,te,G,X,se,oe,y);return}else if(ae&256){gt(v,z,W,te,G,X,se,oe,y);return}}ce&8?(B&16&&cn(v,G,X),z!==v&&f(W,z)):B&16?ce&16?Dt(v,z,W,te,G,X,se,oe,y):cn(v,G,X,!0):(B&8&&f(W,""),ce&16&&E(z,W,te,G,X,se,oe,y))},gt=(w,D,W,te,G,X,se,oe,y)=>{w=w||Ps,D=D||Ps;const v=w.length,B=D.length,z=Math.min(v,B);let ae;for(ae=0;ae<z;ae++){const ce=D[ae]=y?_r(D[ae]):Yn(D[ae]);V(w[ae],ce,W,null,G,X,se,oe,y)}v>B?cn(w,G,X,!0,!1,z):E(D,W,te,G,X,se,oe,y,z)},Dt=(w,D,W,te,G,X,se,oe,y)=>{let v=0;const B=D.length;let z=w.length-1,ae=B-1;for(;v<=z&&v<=ae;){const ce=w[v],_e=D[v]=y?_r(D[v]):Yn(D[v]);if(po(ce,_e))V(ce,_e,W,null,G,X,se,oe,y);else break;v++}for(;v<=z&&v<=ae;){const ce=w[z],_e=D[ae]=y?_r(D[ae]):Yn(D[ae]);if(po(ce,_e))V(ce,_e,W,null,G,X,se,oe,y);else break;z--,ae--}if(v>z){if(v<=ae){const ce=ae+1,_e=ce<B?D[ce].el:te;for(;v<=ae;)V(null,D[v]=y?_r(D[v]):Yn(D[v]),W,_e,G,X,se,oe,y),v++}}else if(v>ae)for(;v<=z;)je(w[v],G,X,!0),v++;else{const ce=v,_e=v,de=new Map;for(v=_e;v<=ae;v++){const bt=D[v]=y?_r(D[v]):Yn(D[v]);bt.key!=null&&de.set(bt.key,v)}let $,Q=0;const ge=ae-_e+1;let be=!1,Ue=0;const Qe=new Array(ge);for(v=0;v<ge;v++)Qe[v]=0;for(v=ce;v<=z;v++){const bt=w[v];if(Q>=ge){je(bt,G,X,!0);continue}let Ut;if(bt.key!=null)Ut=de.get(bt.key);else for($=_e;$<=ae;$++)if(Qe[$-_e]===0&&po(bt,D[$])){Ut=$;break}Ut===void 0?je(bt,G,X,!0):(Qe[Ut-_e]=v+1,Ut>=Ue?Ue=Ut:be=!0,V(bt,D[Ut],W,null,G,X,se,oe,y),Q++)}const Ft=be?PT(Qe):Ps;for($=Ft.length-1,v=ge-1;v>=0;v--){const bt=_e+v,Ut=D[bt],En=D[bt+1],gs=bt+1<B?En.el||Oo(En):te;Qe[v]===0?V(null,Ut,W,gs,G,X,se,oe,y):be&&($<0||v!==Ft[$]?Xe(Ut,W,gs,2):$--)}}},Xe=(w,D,W,te,G=null)=>{const{el:X,type:se,transition:oe,children:y,shapeFlag:v}=w;if(v&6){Xe(w.component.subTree,D,W,te);return}if(v&128){w.suspense.move(D,W,te);return}if(v&64){se.move(w,D,W,mn);return}if(se===Be){r(X,D,W);for(let z=0;z<y.length;z++)Xe(y[z],D,W,te);r(w.anchor,D,W);return}if(se===Qc){H(w,D,W);return}if(te!==2&&v&1&&oe)if(te===0)oe.persisted&&!X[zc]?r(X,D,W):(oe.beforeEnter(X),r(X,D,W),Yt(()=>oe.enter(X),G));else{const{leave:z,delayLeave:ae,afterLeave:ce}=oe,_e=()=>{w.ctx.isUnmounted?s(X):r(X,D,W)},de=()=>{const $=X._isLeaving||!!X[zc];X._isLeaving&&X[zc](!0),oe.persisted&&!$?_e():z(X,()=>{_e(),ce&&ce()})};ae?ae(X,_e,de):de()}else r(X,D,W)},je=(w,D,W,te=!1,G=!1)=>{const{type:X,props:se,ref:oe,children:y,dynamicChildren:v,shapeFlag:B,patchFlag:z,dirs:ae,cacheIndex:ce,memo:_e}=w;if((z===-2||v&&v.hasOnce)&&(G=!1),oe!=null&&(ir(),ko(oe,null,W,w,!0),or()),ce!=null&&(!w.ctx||w.ctx===D)&&(D.renderCache[ce]=void 0),B&256&&D.ctx.deactivate(w))return;const de=B&1&&ae,$=!No(w);let Q;if($&&(Q=se&&se.onVnodeBeforeUnmount)&&Hn(Q,D,w),B&6)ht(w.component,W,te);else{if(B&128){w.suspense.unmount(W,te);return}de&&Ts(w,null,D,"beforeUnmount"),B&64?w.type.remove(w,D,W,mn,te):v&&!v.hasOnce&&(X!==Be||z>0&&z&64)?cn(v,D,W,!1,!0):(X===Be&&z&384||!G&&B&16)&&cn(y,D,W),te&&ot(w)}const ge=_e!=null&&ce==null;($&&(Q=se&&se.onVnodeUnmounted)||de||ge)&&Yt(()=>{Q&&Hn(Q,D,w),de&&Ts(w,null,D,"unmounted"),ge&&(w.el=null)},W)},ot=w=>{const{type:D,el:W,anchor:te,transition:G}=w,X=D===Be;if(X&&!G){Cn(W,te);return}if(D===Qc){U(w),G&&!G.persisted&&G.afterLeave&&G.afterLeave();return}const se=X?Nu(w):w,oe=()=>{X?p(W)&&Cn(W,te):s(W),G&&!G.persisted&&G.afterLeave&&G.afterLeave()};if(se&&se.shapeFlag&1&&G&&!G.persisted){const{leave:y,delayLeave:v}=G,B=se.el,z=()=>y(B,oe);v?v(B,oe,z):z()}else oe()},Cn=(w,D)=>{let W;for(;w!==D;)W=m(w),s(w),w=W;s(D)},ht=(w,D,W)=>{const{bum:te,scope:G,job:X,subTree:se,um:oe,m:y,a:v}=w;Od(y),Od(v),te&&al(te),G.stop(),X?(X.flags|=8,je(se,w,D,W)):se&&(se.transition=w.vnode.transition,je(se,w,D,W)),oe&&Yt(oe,D);const B=()=>{w.isUnmounted=!0};B.flags=16,Yt(B,D)},cn=(w,D,W,te=!1,G=!1,X=0)=>{for(let se=X;se<w.length;se++)je(w[se],D,W,te,G)},un=w=>{if(w.shapeFlag&6)return un(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const D=m(w.anchor||w.el),W=D&&D[Zg];return W?m(W):D},Rn=(w,D,W)=>{const te=w&&D._vnode?void 0:w&&w.component?w.component.uid:MT();xI(()=>{w==null?D._vnode&&je(D._vnode,null,null,!0):V(D._vnode||null,w,D,null,null,null,W),D._vnode=w},te)},mn={p:V,um:je,m:Xe,r:ot,mt:Ve,mc:E,pc:Ce,pbc:S,n:un,o:t};return{render:Rn,hydrate:void 0,createApp:fT(Rn)}}function Gc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function bs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function RT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function xh(t,e,n=!1){const r=t.children,s=e.children;if(ye(r)&&ye(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=_r(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&xh(o,l)),l.type===ha&&(l.patchFlag===-1&&(l=s[i]=_r(l)),l.el=o.el),l.type===$n&&!l.el&&(l.el=o.el)}}function PT(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function __(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:__(e)}function Od(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Oo(t){if(t.placeholder)return t.placeholder;const e=t.component;if(e)return Oo(e.subTree);const n=t.suspense;return n&&n.activeBranch?Oo(n.activeBranch):null}const y_=t=>t.__isSuspense,kT=Symbol("_deferredEnter");function NT(t,e){e&&e.pendingBranch?ye(t)?e.effects.push(...t):e.effects.push(t):MI(t)}const Be=Symbol.for("v-fgt"),ha=Symbol.for("v-txt"),$n=Symbol.for("v-cmt"),Qc=Symbol.for("v-stc"),Vs=[];let yn=null;function ie(t=!1){Vs.push(yn=t?null:[])}function v_(){Vs.pop(),yn=Vs[Vs.length-1]||null}let Ho=1;function Sl(t,e=!1){Ho+=t,t<0&&yn&&e&&(yn.hasOnce=!0)}function E_(t){return t.dynamicChildren=Ho>0?yn||Ps:null,v_(),Ho>0&&yn&&yn.push(t),t}function ue(t,e,n,r,s,i){return E_(R(t,e,n,r,s,i,!0))}function jt(t,e,n,r,s){return E_(Ie(t,e,n,r,s,!0))}function Wo(t){return t?t.__v_isVNode===!0:!1}function po(t,e){return t.type===e.type&&t.key===e.key}const I_=({key:t})=>t??null,ll=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?dt(t)||Ht(t)||Se(t)?{i:bn,r:t,k:e,f:!!n}:t:null);function R(t,e=null,n=null,r=0,s=null,i=t===Be?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&I_(e),ref:e&&ll(e),scopeId:Yg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:bn};return l?(Cl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=dt(n)?8:16),Ho>0&&!o&&yn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&yn.push(c),c}const Ie=DT;function DT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===sT)&&(t=$n),Wo(t)){const l=Ai(t,e,!0);return n&&Cl(l,n),Ho>0&&!i&&yn&&(l.shapeFlag&6?yn[yn.indexOf(t)]=l:yn.push(l)),l.patchFlag=-2,l}if(BT(t)&&(t=t.__vccOpts),e){e=OT(e);let{class:l,style:c}=e;l&&!dt(l)&&(e.class=Pt(l)),Ge(c)&&(kh(c)&&!ye(c)&&(c=Nt({},c)),e.style=ks(c))}const o=dt(t)?1:y_(t)?128:ic(t)?64:Ge(t)?4:Se(t)?2:0;return R(t,e,n,r,s,o,i,!0)}function OT(t){return t?kh(t)?Nt({},t):h_(t)?Nt({},t[S_]||t):t:null}function Ai(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?LT(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&I_(u),ref:e&&e.ref?n&&i?ye(i)?i.concat(ll(e)):[i,ll(e)]:ll(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Be?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ai(t.ssContent),ssFallback:t.ssFallback&&Ai(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce,cacheIndex:t.cacheIndex};return c&&r&&Po(f,c.clone(f)),f}function hn(t=" ",e=0){return Ie(ha,null,t,e)}function ft(t="",e=!1){return e?(ie(),jt($n,null,t)):Ie($n,null,t)}function Yn(t){return t==null||typeof t=="boolean"?Ie($n):ye(t)?Ie(Be,null,t.slice()):Wo(t)?_r(t):Ie(ha,null,String(t))}function _r(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ai(t)}function Cl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ye(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Cl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!h_(e)?e._ctx=bn:s===3&&bn&&(bn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(Se(e)){if(r&65){Cl(t,{default:e});return}e={default:e,_ctx:bn},n=32}else e=String(e),r&64?(n=16,e=[hn(e)]):n=8;t.children=e,t.shapeFlag|=n}function LT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Pt([e.class,r.class]));else if(s==="style")e.style=ks([e.style,r.style]);else if(Zl(s)){const i=e[s],o=r[s];o&&i!==o&&!(ye(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!ec(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function Hn(t,e,n,r=null){Un(t,e,7,[n,r])}const VT=i_();let T_=0;function MT(){return T_}function xT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||VT,i={uid:T_++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new bg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:d_(r,s),emitsOptions:o_(r,s),emit:null,emitted:null,propsDefaults:tt,inheritAttrs:r.inheritAttrs,ctx:tt,data:tt,props:tt,attrs:tt,slots:tt,refs:tt,setupState:tt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=pT.bind(null,i),t.ce&&t.ce(i),i}let an=null;const b_=()=>an||bn;let Rl,zo;{const t=nc(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Rl=e("__VUE_INSTANCE_SETTERS__",n=>an=n),zo=e("__VUE_SSR_SETTERS__",n=>Ko=n)}const fa=t=>{const e=an;return Rl(t),t.scope.on(),()=>{t.scope.off(),Rl(e)}},Ld=()=>{an&&an.scope.off(),Rl(null)};function w_(t){return t.vnode.shapeFlag&4}let Ko=!1;function FT(t,e=!1,n=!1){e&&zo(e);const{props:r,children:s}=t.vnode,i=w_(t);ET(t,r,i,e),wT(t,s,n||e);const o=i?UT(t,e):void 0;return e&&zo(!1),o}function UT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,iT);const{setup:r}=n;if(r){ir();const s=t.setupContext=r.length>1?jT(t):null,i=fa(t),o=ua(r,t,0,[t.props,s]),l=pg(o);if(or(),i(),(l||t.sp)&&!No(t)&&t_(t),l){if(o.then(Ld,Ld),e)return o.then(c=>{zo(!0);try{Vd(t,c,e)}finally{zo(!1)}}).catch(c=>{sc(c,t,0,void 0,!0),t.ssrRender=(u,f)=>f("<!---->")});t.asyncDep=o}else Vd(t,o)}else A_(t)}function Vd(t,e,n){Se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ge(e)&&(t.setupState=qg(e)),A_(t)}function A_(t,e,n){const r=t.type;t.render||(t.render=r.render||Jn);{const s=fa(t);ir();try{oT(t)}finally{or(),s()}}}const S_=Symbol(),$T={get(t,e){return Zt(t,"get",""),e===S_?t:t[e]}};function jT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,$T),slots:t.slots,emit:t.emit,expose:e}}function lc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(qg(jg(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Do)return Do[n](t)},has(e,n){return n in e||n in Do}})):t.proxy}function BT(t){return Se(t)&&"__vccOpts"in t}const yt=(t,e)=>NI(t,e,Ko);function Fs(t,e,n){try{Sl(-1);const r=arguments.length;return r===2?Ge(e)&&!ye(e)?Wo(e)?Ie(t,null,[e]):Ie(t,e):Ie(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Wo(n)&&(n=[n]),Ie(t,e,n))}finally{Sl(1)}}const qT="3.5.45";/**
* @vue/runtime-dom v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Mu;const Md=typeof window<"u"&&window.trustedTypes;if(Md)try{Mu=Md.createPolicy("vue",{createHTML:t=>t})}catch{}const C_=Mu?t=>Mu.createHTML(t):t=>t,HT="http://www.w3.org/2000/svg",WT="http://www.w3.org/1998/Math/MathML",gr=typeof document<"u"?document:null,xd=gr&&gr.createElement("template"),zT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?gr.createElementNS(HT,t):e==="mathml"?gr.createElementNS(WT,t):n?gr.createElement(t,{is:n}):gr.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>gr.createTextNode(t),createComment:t=>gr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>gr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{xd.innerHTML=C_(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=xd.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},KT=Symbol("_vtc");function GT(t,e,n){const r=t[KT];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Fd=Symbol("_vod"),QT=Symbol("_vsh"),YT=Symbol(""),XT=/(?:^|;)\s*display\s*:/;function JT(t,e,n){const r=t.style,s=dt(n);let i=!1;if(n&&!s){if(e)if(dt(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Io(r,l,"")}else for(const o in e)n[o]==null&&Io(r,o,"");for(const o in n){o==="display"&&(i=!0);const l=n[o];l!=null?eb(t,o,!dt(e)&&e?e[o]:void 0,l)||Io(r,o,l):Io(r,o,"")}}else if(s){if(e!==n){const o=r[YT];o&&(n+=";"+o),r.cssText=n,i=XT.test(n)}}else e&&t.removeAttribute("style");Fd in t&&((!s||e!==n)&&(t[Fd]=i?r.display:""),t[QT]&&(r.display="none"))}const Ha=/\s*!important$/;function Io(t,e,n){if(ye(n))n.forEach(r=>Io(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))Ha.test(n)?t.setProperty(e,n.replace(Ha,""),"important"):t.setProperty(e,n);else{const r=ZT(t,e);Ha.test(n)?t.setProperty(us(r),n.replace(Ha,""),"important"):t[r]=n}}const Ud=["Webkit","Moz","ms"],Yc={};function ZT(t,e){const n=Yc[e];if(n)return n;let r=Ln(e);if(r!=="filter"&&r in t)return Yc[e]=r;r=_g(r);for(let s=0;s<Ud.length;s++){const i=Ud[s]+r;if(i in t)return Yc[e]=i}return e}function eb(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&dt(r)&&n===r}const $d="http://www.w3.org/1999/xlink";function jd(t,e,n,r,s,i=oI(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS($d,e.slice(6,e.length)):t.setAttributeNS($d,e,n):n==null||i&&!vg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":sr(n)?String(n):n)}function Bd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?C_(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=vg(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Rs(t,e,n,r){t.addEventListener(e,n,r)}function tb(t,e,n,r){t.removeEventListener(e,n,r)}const qd=Symbol("_vei");function nb(t,e,n,r,s=null){const i=t[qd]||(t[qd]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=ib(e);if(r){const u=i[e]=lb(r,s);Rs(t,l,u,c)}else o&&(tb(t,l,o,c),i[e]=void 0)}}const rb=/(Once|Passive|Capture)$/,sb=/^on:?(?:Once|Passive|Capture)$/;function ib(t){let e,n;for(;(n=t.match(rb))&&!sb.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):us(t.slice(2)),e]}let Xc=0;const ob=Promise.resolve(),ab=()=>Xc||(ob.then(()=>Xc=0),Xc=Date.now());function lb(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(ye(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const o=s.slice(),l=[r];for(let c=0;c<o.length&&!r._stopped;c++){const u=o[c];u&&Un(u,e,5,l)}}else Un(s,e,5,[r])};return n.value=t,n.attached=ab(),n}const Hd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,cb=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?GT(t,r,o):e==="style"?JT(t,n,r):Zl(e)?ec(e)||nb(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ub(t,e,r,o))?(Bd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&jd(t,e,r,o,i,e!=="value")):t._isVueCE&&(hb(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!dt(r)))?Bd(t,Ln(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),jd(t,e,r,o))};function ub(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Hd(e)&&Se(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Hd(e)&&dt(n)?!1:e in t}function hb(t,e){const n=t._def.props;if(!n)return!1;const r=Ln(e);return Array.isArray(n)?n.some(s=>Ln(s)===r):Object.keys(n).some(s=>Ln(s)===r)}const Pl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ye(e)?n=>al(e,n):e};function fb(t){t.target.composing=!0}function Wd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ns=Symbol("_assign"),Wa=Symbol("_initialValue");function Jc(t,e,n){return e&&(t=t.trim()),n&&(t=Th(t)),t}const za={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t.parentNode&&(t.type==="text"?t[Wa]=t.defaultValue.replace(/[\r\n]/g,""):t.type==="textarea"&&(t[Wa]=t.defaultValue.replace(/\r\n?/g,`
`))),t[Ns]=Pl(s);const i=r||s.props&&s.props.type==="number";Rs(t,e?"change":"input",o=>{o.target.composing||t[Ns](Jc(t.value,n,i))}),(n||i)&&Rs(t,"change",()=>{t.value=Jc(t.value,n,i)}),e||(Rs(t,"compositionstart",fb),Rs(t,"compositionend",Wd),Rs(t,"change",Wd))},mounted(t,{value:e,modifiers:{trim:n,number:r}}){const s=e??"",i=t[Wa];delete t[Wa],i!==void 0&&(t.type==="text"||t.type==="textarea")&&t.value!==i?t[Ns](Jc(t.value,n,r)):t.value=s},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Ns]=Pl(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Th(t.value):t.value,c=e??"";if(l===c)return;const u=t.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c)}},db={deep:!0,created(t,e,n){t[Ns]=Pl(n),Rs(t,"change",()=>{const r=t._modelValue,s=pb(t),i=t.checked,o=t[Ns];if(ye(r)){const l=Eg(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(wi(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(R_(t,i))})},mounted:zd,beforeUpdate(t,e,n){t[Ns]=Pl(n),zd(t,e,n)}};function zd(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ye(e))s=Eg(e,r.props.value)>-1;else if(wi(e))s=e.has(r.props.value);else{if(e===n)return;s=Li(e,R_(t,!0))}t.checked!==s&&(t.checked=s)}function pb(t){return"_value"in t?t._value:t.value}function R_(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const mb=["ctrl","shift","alt","meta"],gb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>mb.some(n=>t[`${n}Key`]&&!e.includes(n))},In=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const l=gb[e[o]];if(l&&l(s,e))return}return t(s,...i)}))},_b={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},yb=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=(s=>{if(!("key"in s))return;const i=us(s.key);if(e.some(o=>o===i||_b[o]===i))return t(s)}))},vb=Nt({patchProp:cb},zT);let Kd;function Eb(){return Kd||(Kd=ST(vb))}const Ib=((...t)=>{const e=Eb().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=bb(r);if(!s)return;const i=e._component;!Se(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Tb(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function Tb(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function bb(t){return dt(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const wb=Symbol();var Gd;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Gd||(Gd={}));function Ab(){const t=wg(!0),e=t.run(()=>et({}));let n=[],r=[];const s=jg({install(i){s._a=i,i.provide(wb,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * shared v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */const kl=typeof window<"u",hs=(t,e=!1)=>e?Symbol.for(t):Symbol(t),Sb=(t,e,n)=>Cb({l:t,k:e,s:n}),Cb=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),Ct=t=>typeof t=="number"&&isFinite(t),P_=t=>Uh(t)==="[object Date]",Us=t=>Uh(t)==="[object RegExp]",Fh=t=>nt(t)&&Object.keys(t).length===0,Tt=Object.assign,Rb=Object.create,Ke=(t=null)=>Rb(t);let Qd;const zr=()=>Qd||(Qd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:Ke()),Pb=Object.prototype.hasOwnProperty;function wn(t,e){return Pb.call(t,e)}function Mt(t,e){const n=t[e];return wn(t,e)?n:void 0}function k_(t){return wn(Object.prototype,t)}const ct=Array.isArray,lt=t=>typeof t=="function",pe=t=>typeof t=="string",Ye=t=>typeof t=="boolean",xe=t=>t!==null&&typeof t=="object",kb=t=>xe(t)&&lt(t.then)&&lt(t.catch),N_=Object.prototype.toString,Uh=t=>N_.call(t),nt=t=>Uh(t)==="[object Object]",Nb=t=>t==null?"":ct(t)||nt(t)&&t.toString===N_?JSON.stringify(t,null,2):String(t);function $h(t,e=""){return t.reduce((n,r,s)=>s===0?n+r:n+e+r,"")}function Db(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}function Yd(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2F;").replace(/=/g,"&#x3D;")}function Ob(t){return t.replace(/&(?![a-z0-9#]{2,6};)/gi,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const Lb=/^javascript:/i,Vb=/^(?:href|xlink:href|src|action|formaction)$/i,Mb=/&#(?:x([0-9a-f]+)|(\d+));?/gi,xb=/&(?:Tab|NewLine);/g,Fb=/&colon;?/gi,Ub=/[\u0000-\u0020\u007f-\u009f]/g,$b=/^on\w/i,jb=/^srcdoc$/i,Bb=/^(?:base|animate|set|script|plaintext)$/i,qb=/^(?:iframe|noembed|noframes|noscript|style|textarea|title|xmp)$/i,Zc=/<(\/?)([a-z][^\t\n\f\r />]*)/iy,eu=/([\t\n\f\r /]*)(?:(>)|([^\t\n\f\r />][^\t\n\f\r />=]*)(?:[\t\n\f\r ]*=[\t\n\f\r ]*(?:(["'])([\s\S]*?)(\4|$)|([^\t\n\f\r >]*)))?)/y,Ka=/<!--(?:>|->|[\s\S]*?--!?>)/y;function Hb(t,e,n){const r=e||n;if(!r)return t;const s=Number.parseInt(r,e?16:10);return s<=127?String.fromCharCode(s):t}function D_(t){const e=t.replace(Mb,Hb).replace(xb,"").replace(Fb,":").replace(Ub,"");return Lb.test(e)}function Wb(t){const e=/url\s*\(/gi;let n="",r=0,s;for(;(s=e.exec(t))!==null;){const i=s.index,o=e.lastIndex-1;let l=o+1,c=1,u=null;for(;l<t.length;l++){const m=t[l];if(u){m===u&&(u=null);continue}if(m==='"'||m==="'")u=m;else if(m==="(")c++;else if(m===")"&&(c--,c===0))break}if(c!==0)break;const f=t.slice(o+1,l).trim(),p=f.startsWith('"')&&f.endsWith('"')||f.startsWith("'")&&f.endsWith("'")?f.slice(1,-1).trim():f;n+=t.slice(r,i),n+=D_(p)?"url(about:blank)":t.slice(i,l+1),r=l+1}return n+t.slice(r)}function zb(t,e){if(Vb.test(t)&&D_(e))return"about:blank";const n=t.toLowerCase()==="style"?Wb(e):e;return Ob(n)}function Ga(t){return t.replace(/</g,"&lt;")}function Kb(t,e,n,r){let s=t;if($b.test(t)?(r.eventHandler=!0,s=`&#111;n${t.slice(2)}`):jb.test(t)&&(r.srcdoc=!0,s=`&#115;${t.slice(1)}`),e===void 0)return s;const i=n||"";return`${s}=${i}${zb(t,e)}${i}`}function O_(t,e,n){Zc.lastIndex=e;const r=Zc.exec(t);if(!r)return;const[,s,i]=r;let o=r[0],l;for(eu.lastIndex=Zc.lastIndex;l=eu.exec(t);){const[c,u,f,p,m,T,P,V]=l;if(f){const O=eu.lastIndex;return[s?t.slice(e,O):o+c,i,O]}if(m&&!P)break;s||(o+=u+Kb(p,m?T:V,m,n))}return[o,i,-1]}function Gb(t,e,n){for(let r=t.indexOf("</",e);r!==-1;r=t.indexOf("</",r+2)){const s=O_(t,r,{});if(s&&s[1].toLowerCase()===n.toLowerCase())return s[2]===-1?-1:r}return-1}function Qb(t){const e={};let n="",r=0,s;for(;(s=t.indexOf("<",r))!==-1;){n+=t.slice(r,s),r=s+1;const i=O_(t,s,e);if(i){const[o,l,c]=i;if(c===-1){e.unclosed=!0,n+=Ga(t.slice(s)),r=t.length;break}if(r=c,o[1]==="/")n+=o;else if(Bb.test(l))e.element=!0,n+=Ga(o);else if(qb.test(l)){const u=Gb(t,c,l);u===-1?(e.unclosed=!0,n+=Ga(o)):(n+=o+Ga(t.slice(c,u)),r=u)}else n+=o;continue}if(Ka.lastIndex=s,Ka.test(t)){n+=t.slice(s,Ka.lastIndex),r=Ka.lastIndex;continue}t.startsWith("<!--",s)&&(e.unclosed=!0),n+="&lt;"}return n+=t.slice(r),n}const Xd=t=>!xe(t)||ct(t);function cl(t,e){if(Xd(t)||Xd(e)||e===Object.prototype)throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:r,des:s}=n.pop();Object.keys(r).forEach(i=>{if(i==="__proto__")return;const o=r[i];if(ct(o)){const l=[];l.length=o.length,s[i]=l,n.push({src:o,des:l})}else xe(o)?((!xe(s[i])||ct(s[i]))&&(s[i]=Ke()),n.push({src:o,des:s[i]})):s[i]=o})}}/*!
  * message-compiler v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */function Yb(t,e,n){return{line:t,column:e,offset:n}}function xu(t,e,n){return{start:t,end:e}}const He={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14},Xb=17;function cc(t,e,n={}){const{domain:r,messages:s,args:i}=n,o=t,l=new SyntaxError(String(o));return l.code=t,e&&(l.location=e),l.domain=r,l}function Jb(t){throw t}const Wn=" ",Zb="\r",Xt=`
`,ew="\u2028",tw="\u2029";function nw(t){const e=t;let n=0,r=1,s=1,i=0;const o=_=>e[_]===Zb&&e[_+1]===Xt,l=_=>e[_]===Xt,c=_=>e[_]===tw,u=_=>e[_]===ew,f=_=>o(_)||l(_)||c(_)||u(_),p=()=>n,m=()=>r,T=()=>s,P=()=>i,V=_=>o(_)||c(_)||u(_)?Xt:e[_],O=()=>V(n),N=()=>V(n+i);function F(){return i=0,f(n)&&(r++,s=0),o(n)&&n++,n++,s++,e[n]}function H(){return o(n+i)&&i++,i++,e[n+i]}function U(){n=0,r=1,s=1,i=0}function Z(_=0){i=_}function ne(){const _=n+i;for(;_!==n;)F();i=0}return{index:p,line:m,column:T,peekOffset:P,charAt:V,currentChar:O,currentPeek:N,next:F,peek:H,reset:U,resetPeek:Z,skipToPeek:ne}}const pr=void 0,Jd="	",Zd="'",rw="tokenizer";function sw(t,e={}){const n=e.location!==!1,r=nw(t),s=()=>r.index(),i=()=>Yb(r.line(),r.column(),r.index()),o=i(),l=s(),c={currentType:13,offset:l,startLoc:o,endLoc:o,lastType:13,lastOffset:l,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},u=()=>c,{onError:f}=e;function p(y,v,B,...z){const ae=u();if(v.column+=B,v.offset+=B,f){const ce=n?xu(ae.startLoc,v):null,_e=cc(y,ce,{domain:rw,args:z});f(_e)}}function m(y,v,B){y.endLoc=i(),y.currentType=v;const z={type:v};return n&&(z.loc=xu(y.startLoc,y.endLoc)),B!=null&&(z.value=B),z}const T=y=>m(y,13);function P(y,v){return y.currentChar()===v?(y.next(),v):(p(He.EXPECTED_TOKEN,i(),0,v),"")}function V(y){let v="";for(;y.currentPeek()===Wn||y.currentPeek()===Xt;)v+=y.currentPeek(),y.peek();return v}function O(y){const v=V(y);return y.skipToPeek(),v}function N(y){if(y===pr)return!1;const v=y.charCodeAt(0);return v>=97&&v<=122||v>=65&&v<=90||v===95}function F(y){if(y===pr)return!1;const v=y.charCodeAt(0);return v>=48&&v<=57}function H(y,v){const{currentType:B}=v;if(B!==2)return!1;V(y);const z=N(y.currentPeek());return y.resetPeek(),z}function U(y,v){const{currentType:B}=v;if(B!==2)return!1;V(y);const z=y.currentPeek()==="-"?y.peek():y.currentPeek(),ae=F(z);return y.resetPeek(),ae}function Z(y,v){const{currentType:B}=v;if(B!==2)return!1;V(y);const z=y.currentPeek()===Zd;return y.resetPeek(),z}function ne(y,v){const{currentType:B}=v;if(B!==7)return!1;V(y);const z=y.currentPeek()===".";return y.resetPeek(),z}function _(y,v){const{currentType:B}=v;if(B!==8)return!1;V(y);const z=N(y.currentPeek());return y.resetPeek(),z}function E(y,v){const{currentType:B}=v;if(!(B===7||B===11))return!1;V(y);const z=y.currentPeek()===":";return y.resetPeek(),z}function I(y,v){const{currentType:B}=v;if(B!==9)return!1;const z=()=>{const ce=y.currentPeek();return ce==="{"?N(y.peek()):ce==="@"||ce==="|"||ce===":"||ce==="."||ce===Wn||!ce?!1:ce===Xt?(y.peek(),z()):k(y,!1)},ae=z();return y.resetPeek(),ae}function S(y){V(y);const v=y.currentPeek()==="|";return y.resetPeek(),v}function k(y,v=!0){const B=(ae=!1,ce="")=>{const _e=y.currentPeek();return _e==="{"||_e==="@"||!_e?ae:_e==="|"?!(ce===Wn||ce===Xt):_e===Wn?(y.peek(),B(!0,Wn)):_e===Xt?(y.peek(),B(!0,Xt)):!0},z=B();return v&&y.resetPeek(),z}function x(y,v){const B=y.currentChar();return B===pr?pr:v(B)?(y.next(),B):null}function A(y){const v=y.charCodeAt(0);return v>=97&&v<=122||v>=65&&v<=90||v>=48&&v<=57||v===95||v===36}function Ve(y){return x(y,A)}function Ne(y){const v=y.charCodeAt(0);return v>=97&&v<=122||v>=65&&v<=90||v>=48&&v<=57||v===95||v===36||v===45}function it(y){return x(y,Ne)}function Re(y){const v=y.charCodeAt(0);return v>=48&&v<=57}function Ce(y){return x(y,Re)}function gt(y){const v=y.charCodeAt(0);return v>=48&&v<=57||v>=65&&v<=70||v>=97&&v<=102}function Dt(y){return x(y,gt)}function Xe(y){let v="",B="";for(;v=Ce(y);)B+=v;return B}function je(y){let v="";for(;;){const B=y.currentChar();if(B==="\\"){const z=y.peek();z==="{"||z==="}"||z==="@"||z==="|"||z==="\\"?(v+=B+z,y.next(),y.next()):(y.resetPeek(),v+=B,y.next())}else{if(B==="{"||B==="}"||B==="@"||B==="|"||!B)break;if(B===Wn||B===Xt)if(k(y))v+=B,y.next();else{if(S(y))break;v+=B,y.next()}else v+=B,y.next()}}return v}function ot(y){O(y);let v="",B="";for(;v=it(y);)B+=v;const z=y.currentChar();if(z&&z!=="}"&&z!==pr&&z!==Wn&&z!==Xt&&z!=="　"){const ae=nn(y);return p(He.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,B+ae),B+ae}return y.currentChar()===pr&&p(He.UNTERMINATED_CLOSING_BRACE,i(),0),B}function Cn(y){O(y);let v="";return y.currentChar()==="-"?(y.next(),v+=`-${Xe(y)}`):v+=Xe(y),y.currentChar()===pr&&p(He.UNTERMINATED_CLOSING_BRACE,i(),0),v}function ht(y){return y!==Zd&&y!==Xt}function cn(y){O(y),P(y,"'");let v="",B="";for(;v=x(y,ht);)v==="\\"?B+=un(y):B+=v;const z=y.currentChar();return z===Xt||z===pr?(p(He.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,i(),0),z===Xt&&(y.next(),P(y,"'")),B):(P(y,"'"),B)}function un(y){const v=y.currentChar();switch(v){case"\\":case"'":return y.next(),`\\${v}`;case"u":return Rn(y,v,4);case"U":return Rn(y,v,6);default:return p(He.UNKNOWN_ESCAPE_SEQUENCE,i(),0,v),""}}function Rn(y,v,B){P(y,v);let z="";for(let ae=0;ae<B;ae++){const ce=Dt(y);if(!ce){p(He.INVALID_UNICODE_ESCAPE_SEQUENCE,i(),0,`\\${v}${z}${y.currentChar()}`);break}z+=ce}return`\\${v}${z}`}function mn(y){return y!=="{"&&y!=="}"&&y!==Wn&&y!==Xt}function nn(y){O(y);let v="",B="";for(;v=x(y,mn);)B+=v;return B}function w(y){let v="",B="";for(;v=Ve(y);)B+=v;return B}function D(y){return!(y==="{"||y==="@"||y==="|"||y==="("||y===")"||y===Wn||y===Jd||y===Xt)}function W(y){for(;y.currentChar()===Jd;)y.next();let v="",B;for(;(B=y.currentChar())&&D(B);)v+=B,y.next();return v}function te(y){O(y);const v=P(y,"|");return O(y),v}function G(y,v){let B=null;switch(y.currentChar()){case"{":return v.braceNest>=1&&p(He.NOT_ALLOW_NEST_PLACEHOLDER,i(),0),y.next(),B=m(v,2,"{"),O(y),v.braceNest++,B;case"}":return v.braceNest>0&&v.currentType===2&&p(He.EMPTY_PLACEHOLDER,i(),0),y.next(),B=m(v,3,"}"),v.braceNest--,v.braceNest>0&&O(y),v.inLinked&&v.braceNest===0&&(v.inLinked=!1),B;case"@":return v.braceNest>0&&p(He.UNTERMINATED_CLOSING_BRACE,i(),0),B=X(y,v)||T(v),v.braceNest=0,B;default:{let ae=!0,ce=!0,_e=!0;if(S(y))return v.braceNest>0&&p(He.UNTERMINATED_CLOSING_BRACE,i(),0),B=m(v,1,te(y)),v.braceNest=0,v.inLinked=!1,B;if(v.braceNest>0&&(v.currentType===4||v.currentType===5||v.currentType===6))return p(He.UNTERMINATED_CLOSING_BRACE,i(),0),v.braceNest=0,se(y,v);if(ae=H(y,v))return B=m(v,4,ot(y)),O(y),B;if(ce=U(y,v))return B=m(v,5,Cn(y)),O(y),B;if(_e=Z(y,v))return B=m(v,6,cn(y)),O(y),B;if(!ae&&!ce&&!_e)return B=m(v,12,nn(y)),p(He.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,B.value),O(y),B;break}}return B}function X(y,v){const{currentType:B}=v;let z=null;const ae=y.currentChar();switch((B===7||B===8||B===11||B===9)&&(ae===Xt||ae===Wn)&&p(He.INVALID_LINKED_FORMAT,i(),0),ae){case"@":return y.next(),z=m(v,7,"@"),v.inLinked=!0,z;case".":return O(y),y.next(),m(v,8,".");case":":return O(y),y.next(),m(v,9,":");default:return S(y)?(z=m(v,1,te(y)),v.braceNest=0,v.inLinked=!1,z):ne(y,v)||E(y,v)?(O(y),X(y,v)):_(y,v)?(O(y),m(v,11,w(y))):I(y,v)?(O(y),ae==="{"?G(y,v)||z:m(v,10,W(y))):(B===7&&p(He.INVALID_LINKED_FORMAT,i(),0),v.braceNest=0,v.inLinked=!1,se(y,v))}}function se(y,v){let B={type:13};if(v.braceNest>0)return G(y,v)||T(v);if(v.inLinked)return X(y,v)||T(v);switch(y.currentChar()){case"{":return G(y,v)||T(v);case"}":return p(He.UNBALANCED_CLOSING_BRACE,i(),0),y.next(),m(v,3,"}");case"@":return X(y,v)||T(v);default:{if(S(y))return B=m(v,1,te(y)),v.braceNest=0,v.inLinked=!1,B;if(k(y))return m(v,0,je(y));break}}return B}function oe(){const{currentType:y,offset:v,startLoc:B,endLoc:z}=c;return c.lastType=y,c.lastOffset=v,c.lastStartLoc=B,c.lastEndLoc=z,c.offset=s(),c.startLoc=i(),r.currentChar()===pr?m(c,13):se(r,c)}return{nextToken:oe,currentOffset:s,currentPosition:i,context:u}}const iw="parser",ow=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g,aw=/\\([\\@{}|])/g;function lw(t,e){return e}function cw(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const r=parseInt(e||n,16);return r<=55295||r>=57344?String.fromCodePoint(r):"�"}}}function uw(t={}){const e=t.location!==!1,{onError:n}=t;function r(N,F,H,U,...Z){const ne=N.currentPosition();if(ne.offset+=U,ne.column+=U,n){const _=e?xu(H,ne):null,E=cc(F,_,{domain:iw,args:Z});n(E)}}function s(N,F,H){const U={type:N};return e&&(U.start=F,U.end=F,U.loc={start:H,end:H}),U}function i(N,F,H,U){e&&(N.end=F,N.loc&&(N.loc.end=H))}function o(N,F){const H=N.context(),U=s(3,H.offset,H.startLoc);return U.value=F.replace(aw,lw),i(U,N.currentOffset(),N.currentPosition()),U}function l(N,F){const H=N.context(),{lastOffset:U,lastStartLoc:Z}=H,ne=s(5,U,Z);return ne.index=parseInt(F,10),N.nextToken(),i(ne,N.currentOffset(),N.currentPosition()),ne}function c(N,F){const H=N.context(),{lastOffset:U,lastStartLoc:Z}=H,ne=s(4,U,Z);return ne.key=F,N.nextToken(),i(ne,N.currentOffset(),N.currentPosition()),ne}function u(N,F){const H=N.context(),{lastOffset:U,lastStartLoc:Z}=H,ne=s(9,U,Z);return ne.value=F.replace(ow,cw),N.nextToken(),i(ne,N.currentOffset(),N.currentPosition()),ne}function f(N){const F=N.nextToken(),H=N.context(),{lastOffset:U,lastStartLoc:Z}=H,ne=s(8,U,Z);return F.type!==11?(r(N,He.UNEXPECTED_EMPTY_LINKED_MODIFIER,H.lastStartLoc,0),ne.value="",i(ne,U,Z),{nextConsumeToken:F,node:ne}):(F.value==null&&r(N,He.UNEXPECTED_LEXICAL_ANALYSIS,H.lastStartLoc,0,zn(F)),ne.value=F.value||"",i(ne,N.currentOffset(),N.currentPosition()),{node:ne})}function p(N,F){const H=N.context(),U=s(7,H.offset,H.startLoc);return U.value=F,i(U,N.currentOffset(),N.currentPosition()),U}function m(N){const F=N.context(),H=s(6,F.offset,F.startLoc);let U=N.nextToken();if(U.type===8){const Z=f(N);H.modifier=Z.node,U=Z.nextConsumeToken||N.nextToken()}switch(U.type!==9&&r(N,He.UNEXPECTED_LEXICAL_ANALYSIS,F.lastStartLoc,0,zn(U)),U=N.nextToken(),U.type===2&&(U=N.nextToken()),U.type){case 10:U.value==null&&r(N,He.UNEXPECTED_LEXICAL_ANALYSIS,F.lastStartLoc,0,zn(U)),H.key=p(N,U.value||"");break;case 4:U.value==null&&r(N,He.UNEXPECTED_LEXICAL_ANALYSIS,F.lastStartLoc,0,zn(U)),H.key=c(N,U.value||"");break;case 5:U.value==null&&r(N,He.UNEXPECTED_LEXICAL_ANALYSIS,F.lastStartLoc,0,zn(U)),H.key=l(N,U.value||"");break;case 6:U.value==null&&r(N,He.UNEXPECTED_LEXICAL_ANALYSIS,F.lastStartLoc,0,zn(U)),H.key=u(N,U.value||"");break;default:{r(N,He.UNEXPECTED_EMPTY_LINKED_KEY,F.lastStartLoc,0);const Z=N.context(),ne=s(7,Z.offset,Z.startLoc);return ne.value="",i(ne,Z.offset,Z.startLoc),H.key=ne,i(H,Z.offset,Z.startLoc),{nextConsumeToken:U,node:H}}}return i(H,N.currentOffset(),N.currentPosition()),{node:H}}function T(N){const F=N.context(),H=F.currentType===1?N.currentOffset():F.offset,U=F.currentType===1?F.endLoc:F.startLoc,Z=s(2,H,U);Z.items=[];let ne=null;do{const I=ne||N.nextToken();switch(ne=null,I.type){case 0:I.value==null&&r(N,He.UNEXPECTED_LEXICAL_ANALYSIS,F.lastStartLoc,0,zn(I)),Z.items.push(o(N,I.value||""));break;case 5:I.value==null&&r(N,He.UNEXPECTED_LEXICAL_ANALYSIS,F.lastStartLoc,0,zn(I)),Z.items.push(l(N,I.value||""));break;case 4:I.value==null&&r(N,He.UNEXPECTED_LEXICAL_ANALYSIS,F.lastStartLoc,0,zn(I)),Z.items.push(c(N,I.value||""));break;case 6:I.value==null&&r(N,He.UNEXPECTED_LEXICAL_ANALYSIS,F.lastStartLoc,0,zn(I)),Z.items.push(u(N,I.value||""));break;case 7:{const S=m(N);Z.items.push(S.node),ne=S.nextConsumeToken||null;break}}}while(F.currentType!==13&&F.currentType!==1);const _=F.currentType===1?F.lastOffset:N.currentOffset(),E=F.currentType===1?F.lastEndLoc:N.currentPosition();return i(Z,_,E),Z}function P(N,F,H,U){const Z=N.context();let ne=U.items.length===0;const _=s(1,F,H);_.cases=[],_.cases.push(U);do{const E=T(N);ne||(ne=E.items.length===0),_.cases.push(E)}while(Z.currentType!==13);return ne&&r(N,He.MUST_HAVE_MESSAGES_IN_PLURAL,H,0),i(_,N.currentOffset(),N.currentPosition()),_}function V(N){const F=N.context(),{offset:H,startLoc:U}=F,Z=T(N);return F.currentType===13?Z:P(N,H,U,Z)}function O(N){const F=sw(N,Tt({},t)),H=F.context(),U=s(0,H.offset,H.startLoc);return e&&U.loc&&(U.loc.source=N),U.body=V(F),t.onCacheKey&&(U.cacheKey=t.onCacheKey(N)),H.currentType!==13&&r(F,He.UNEXPECTED_LEXICAL_ANALYSIS,H.lastStartLoc,0,N[H.offset]||""),i(U,F.currentOffset(),F.currentPosition()),U}return{parse:O}}function zn(t){if(t.type===13)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function hw(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:i=>(n.helpers.add(i),i)}}function ep(t,e){for(let n=0;n<t.length;n++)jh(t[n],e)}function jh(t,e){switch(t.type){case 1:ep(t.cases,e),e.helper("plural");break;case 2:ep(t.items,e);break;case 6:{jh(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function fw(t,e={}){const n=hw(t);n.helper("normalize"),t.body&&jh(t.body,n);const r=n.context();t.helpers=Array.from(r.helpers)}function dw(t){const e=t.body;return e.type===2?tp(e):e.cases.forEach(n=>tp(n)),t}function tp(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const r=t.items[n];if(!(r.type===3||r.type===9)||r.value==null)break;e.push(r.value)}if(e.length===t.items.length){t.static=$h(e);for(let n=0;n<t.items.length;n++){const r=t.items[n];(r.type===3||r.type===9)&&delete r.value}}}}function ui(t){switch(t.t=t.type,t.type){case 0:{const e=t;ui(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let r=0;r<n.length;r++)ui(n[r]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let r=0;r<n.length;r++)ui(n[r]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;ui(e.key),e.k=e.key,delete e.key,e.modifier&&(ui(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}}delete t.type}function pw(t,e){const{filename:n,breakLineCode:r,needIndent:s}=e,i=e.location!==!1,o={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:r,needIndent:s,indentLevel:0};i&&t.loc&&(o.source=t.loc.source);const l=()=>o;function c(V,O){o.code+=V}function u(V,O=!0){const N=O?r:"";c(s?N+"  ".repeat(V):N)}function f(V=!0){const O=++o.indentLevel;V&&u(O)}function p(V=!0){const O=--o.indentLevel;V&&u(O)}function m(){u(o.indentLevel)}return{context:l,push:c,indent:f,deindent:p,newline:m,helper:V=>`_${V}`,needIndent:()=>o.needIndent}}function mw(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),Si(t,e.key),e.modifier?(t.push(", "),Si(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function gw(t,e){const{helper:n,needIndent:r}=t;t.push(`${n("normalize")}([`),t.indent(r());const s=e.items.length;for(let i=0;i<s&&(Si(t,e.items[i]),i!==s-1);i++)t.push(", ");t.deindent(r()),t.push("])")}function _w(t,e){const{helper:n,needIndent:r}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(r());const s=e.cases.length;for(let i=0;i<s&&(Si(t,e.cases[i]),i!==s-1);i++)t.push(", ");t.deindent(r()),t.push("])")}}function yw(t,e){e.body?Si(t,e.body):t.push("null")}function Si(t,e){const{helper:n}=t;switch(e.type){case 0:yw(t,e);break;case 1:_w(t,e);break;case 2:gw(t,e);break;case 6:mw(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break}}const vw=(t,e={})=>{const n=pe(e.mode)?e.mode:"normal",r=pe(e.filename)?e.filename:"message.intl";e.sourceMap;const s=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,i=e.needIndent?e.needIndent:n!=="arrow",o=t.helpers||[],l=pw(t,{filename:r,breakLineCode:s,needIndent:i});l.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(i),o.length>0&&(l.push(`const { ${$h(o.map(f=>`${f}: _${f}`),", ")} } = ctx`),l.newline()),l.push("return "),Si(l,t),l.deindent(i),l.push("}"),delete t.helpers;const{code:c,map:u}=l.context();return{ast:t,code:c,map:u?u.toJSON():void 0}};function Ew(t,e={}){const n=Tt({},e),r=!!n.jit,s=!!n.minify,i=n.optimize==null?!0:n.optimize,l=uw(n).parse(t);return r?(i&&dw(l),s&&ui(l),{ast:l,code:""}):(fw(l,n),vw(l,n))}/*!
  * core-base v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */function Iw(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(zr().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(zr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function $s(t){return xe(t)&&Bh(t)===0&&(wn(t,"b")||wn(t,"body"))}const L_=["b","body"];function Tw(t){return fs(t,L_)}const V_=["c","cases"];function bw(t){return fs(t,V_,[])}const M_=["s","static"];function ww(t){return fs(t,M_)}const x_=["i","items"];function Aw(t){return fs(t,x_,[])}const F_=["t","type"];function Bh(t){return fs(t,F_)}const U_=["v","value"];function Qa(t,e){const n=fs(t,U_);if(n!=null)return n;throw Go(e)}const $_=["m","modifier"];function Sw(t){return fs(t,$_)}const j_=["k","key"];function Cw(t){const e=fs(t,j_);if(e)return e;throw Go(6)}function fs(t,e,n){for(let r=0;r<e.length;r++){const s=e[r];if(wn(t,s)&&t[s]!=null)return t[s]}return n}const B_=[...L_,...V_,...M_,...x_,...j_,...$_,...U_,...F_];function Go(t){return new Error(`unhandled node type: ${t}`)}function tu(t){return n=>Rw(n,t)}function Rw(t,e){const n=Tw(e);if(n==null)throw Go(0);if(Bh(n)===1){const i=bw(n);return t.plural(i.reduce((o,l)=>[...o,np(t,l)],[]))}else return np(t,n)}function np(t,e){const n=ww(e);if(n!=null)return t.type==="text"?n:t.normalize([n]);{const r=Aw(e).reduce((s,i)=>[...s,Fu(t,i)],[]);return t.normalize(r)}}function Fu(t,e){const n=Bh(e);switch(n){case 3:return Qa(e,n);case 9:return Qa(e,n);case 4:{const r=e;if(wn(r,"k")&&r.k)return t.interpolate(t.named(r.k));if(wn(r,"key")&&r.key)return t.interpolate(t.named(r.key));throw Go(n)}case 5:{const r=e;if(wn(r,"i")&&Ct(r.i))return t.interpolate(t.list(r.i));if(wn(r,"index")&&Ct(r.index))return t.interpolate(t.list(r.index));throw Go(n)}case 6:{const r=e,s=Sw(r),i=Cw(r);return t.linked(Fu(t,i),s?Fu(t,s):void 0,t.type)}case 7:return Qa(e,n);case 8:return Qa(e,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const Pw=t=>t;let Ya=Ke();function kw(t,e={}){let n=!1;const r=e.onError||Jb;return e.onError=s=>{n=!0,r(s)},{...Ew(t,e),detectError:n}}function Nw(t,e){if(!__INTLIFY_DROP_MESSAGE_COMPILER__&&pe(t)){Ye(e.warnHtmlMessage)&&e.warnHtmlMessage;const r=(e.onCacheKey||Pw)(t),s=Ya[r];if(s)return s;const{ast:i,detectError:o}=kw(t,{...e,location:!1,jit:!0}),l=tu(i);return o?l:Ya[r]=l}else{if(!$s(t))return(()=>t);const n=t.cacheKey;if(n){const r=Ya[n];return r||(Ya[n]=tu(t))}else return tu(t)}}let Qo=null;function Dw(t){Qo=t}function Ow(t,e,n){Qo&&Qo.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const Lw=Vw("function:translate");function Vw(t){return e=>Qo&&Qo.emit(t,e)}const Ir={INVALID_ARGUMENT:Xb,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},Mw=24;function Tr(t){return cc(t,null,void 0)}function qh(t,e){return e.locale!=null?rp(e.locale):rp(t.locale)}let nu;function rp(t){if(pe(t))return t;if(lt(t)){if(t.resolvedOnce&&nu!=null)return nu;if(t.constructor.name==="Function"){const e=t();if(kb(e))throw Tr(Ir.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return nu=e}else throw Tr(Ir.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw Tr(Ir.NOT_SUPPORT_LOCALE_TYPE)}function xw(t,e,n){return[...new Set([n,...ct(e)?e:xe(e)?Object.keys(e).filter(r=>r!=="default"):pe(e)?[e]:[n]])]}function Fw(t,e,n){const r=pe(n)?n:Yo,s=t;let i;xe(e)?(s.__localeChainObjectCache||(s.__localeChainObjectCache=new WeakMap),i=s.__localeChainObjectCache.get(e),i||(i=new Map,s.__localeChainObjectCache.set(e,i))):(s.__localeChainCache||(s.__localeChainCache=new Map),i=s.__localeChainCache.get(e),i||(i=new Map,s.__localeChainCache.set(e,i)));const o=i.get(r);if(o)return o;const l=[];let c=[n];for(;ct(c);)c=sp(l,c,e);const u=ct(e)||!nt(e)?e:e.default?e.default:null;return c=pe(u)?[u]:u,ct(c)&&sp(l,c,!1),i.set(r,l),l}function sp(t,e,n){let r=!0;for(let s=0;s<e.length&&Ye(r);s++){const i=e[s];pe(i)&&(r=Uw(t,e[s],n))}return r}function Uw(t,e,n){let r;const s=e.split("-");do{const i=s.join("-");r=$w(t,i,n),s.splice(-1,1)}while(s.length&&r===!0);return r}function $w(t,e,n){let r=!1;if(!t.includes(e)&&(r=!0,e)){r=e[e.length-1]!=="!";const s=e.replace(/!/g,"");t.push(s),(ct(n)||nt(n))&&n[s]&&(r=n[s])}return r}const ds=[];ds[0]={w:[0],i:[3,0],"[":[4],o:[7]};ds[1]={w:[1],".":[2],"[":[4],o:[7]};ds[2]={w:[2],i:[3,0],0:[3,0]};ds[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};ds[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};ds[5]={"'":[4,0],o:8,l:[5,0]};ds[6]={'"':[4,0],o:8,l:[6,0]};const jw=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function Bw(t){return jw.test(t)}function qw(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function Hw(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function Ww(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:Bw(e)?qw(e):"*"+e}function zw(t){const e=[];let n=-1,r=0,s=0,i,o,l,c,u,f,p;const m=[];m[0]=()=>{o===void 0?o=l:o+=l},m[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},m[2]=()=>{m[0](),s++},m[3]=()=>{if(s>0)s--,r=4,m[0]();else{if(s=0,o===void 0||(o=Ww(o),o===!1))return!1;m[1]()}};function T(){const P=t[n+1];if(r===5&&P==="'"||r===6&&P==='"')return n++,l="\\"+P,m[0](),!0}for(;r!==null;)if(n++,i=t[n],!(i==="\\"&&T())){if(c=Hw(i),p=ds[r],u=p[c]||p.l||8,u===8||(r=u[0],u[1]!==void 0&&(f=m[u[1]],f&&(l=i,f()===!1))))return;if(r===7)return e}}const ip=new Map;function Kw(t,e){return xe(t)?Mt(t,e):null}function Gw(t,e){if(!xe(t))return null;let n=ip.get(e);if(n||(n=zw(e),n&&ip.set(e,n)),!n)return null;const r=n.length;let s=t,i=0;for(;i<r;){const o=n[i];if(B_.includes(o)&&$s(s)||!xe(s)||!wn(s,o))return null;const l=s[o];if(l===void 0||lt(s))return null;s=l,i++}return s}const Qw="11.4.20",uc=-1,Yo="en-US",Nl="",op=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function Yw(){return{upper:(t,e)=>e==="text"&&pe(t)?t.toUpperCase():e==="vnode"&&xe(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&pe(t)?t.toLowerCase():e==="vnode"&&xe(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&pe(t)?op(t):e==="vnode"&&xe(t)&&"__v_isVNode"in t?op(t.children):t}}let q_;function Xw(t){q_=t}let H_;function Jw(t){H_=t}let W_;function Zw(t){W_=t}let z_=null;const e0=t=>{z_=t},t0=()=>z_;let K_=null;const ap=t=>{K_=t},n0=()=>K_;let lp=0;function r0(t={}){const e=lt(t.onWarn)?t.onWarn:Db,n=pe(t.version)?t.version:Qw,r=pe(t.locale)||lt(t.locale)?t.locale:Yo,s=lt(r)?Yo:r,i=ct(t.fallbackLocale)||nt(t.fallbackLocale)||pe(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:s,o=nt(t.messages)?t.messages:ru(s),l=nt(t.datetimeFormats)?t.datetimeFormats:ru(s),c=nt(t.numberFormats)?t.numberFormats:ru(s),u=Tt(Ke(),t.modifiers,Yw()),f=t.pluralRules||Ke(),p=lt(t.missing)?t.missing:null,m=Ye(t.missingWarn)||Us(t.missingWarn)?t.missingWarn:!0,T=Ye(t.fallbackWarn)||Us(t.fallbackWarn)?t.fallbackWarn:!0,P=!!t.fallbackFormat,V=!!t.unresolving,O=lt(t.postTranslation)?t.postTranslation:null,N=nt(t.processor)?t.processor:null,F=Ye(t.warnHtmlMessage)?t.warnHtmlMessage:!0,H=!!t.escapeParameter,U=lt(t.messageCompiler)?t.messageCompiler:q_,Z=lt(t.messageResolver)?t.messageResolver:H_||Kw,ne=lt(t.localeFallbacker)?t.localeFallbacker:W_||xw,_=xe(t.fallbackContext)?t.fallbackContext:void 0,E=t,I=xe(E.__datetimeFormatters)?E.__datetimeFormatters:new Map,S=xe(E.__numberFormatters)?E.__numberFormatters:new Map,k=xe(E.__meta)?E.__meta:{};lp++;const x={version:n,cid:lp,locale:r,fallbackLocale:i,messages:o,modifiers:u,pluralRules:f,missing:p,missingWarn:m,fallbackWarn:T,fallbackFormat:P,unresolving:V,postTranslation:O,processor:N,warnHtmlMessage:F,escapeParameter:H,messageCompiler:U,messageResolver:Z,localeFallbacker:ne,fallbackContext:_,onWarn:e,__meta:k};return x.datetimeFormats=l,x.numberFormats=c,x.__datetimeFormatters=I,x.__numberFormatters=S,__INTLIFY_PROD_DEVTOOLS__&&Ow(x,n,k),x}const ru=t=>({[t]:Ke()});function G_(t,e,n,r,s){const{missing:i,onWarn:o}=t;if(i!==null){const l=i(t,n,e,s);return pe(l)?l:e}else return e}function cp(t,e){var r,s;const n=t;xe(e)?(r=n.__localeChainObjectCache)==null||r.delete(e):(s=n.__localeChainCache)==null||s.delete(e)}function Xa(t,e,n){cp(t,n),t.fallbackContext&&cp(t.fallbackContext,n),t.localeFallbacker(t,n,e)}function s0(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function i0(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let r=n+1;r<e.length;r++)if(s0(t,e[r]))return!0;return!1}function Q_(t,e,n,r,s,i,o){const{fallbackLocale:l,localeFallbacker:c,onWarn:u}=t,f=c(t,l,n);for(let p=0;p<f.length;p++){const m=f[p],T=Mt(Mt(r,m)||{},e);if(nt(T)&&pe(m))return m;G_(t,e,m,s,o)}return null}function Y_(t,e,n){let r=`${t}__${e}`;return nt(n)&&!Fh(n)&&(r=`${r}__${JSON.stringify(n)}`),r}function X_(t,e,n){for(const r in n){const s=`${e}__${r}`;for(const i of t.keys())(i===s||i.startsWith(`${s}__`))&&t.delete(i)}}function J_(t,e,n,r){const[,s,i,o]=t;let l=n;return pe(s)?e.key=s:nt(s)&&Object.keys(s).forEach(c=>{r.includes(c)?l[c]=s[c]:e[c]=s[c]}),pe(i)?e.locale=i:nt(i)&&(l=i),nt(o)&&(l=o),l}function up(t,...e){const{datetimeFormats:n,unresolving:r,onWarn:s}=t,{__datetimeFormatters:i}=t;if(!pe(e[0])&&!P_(e[0])&&!Ct(e[0]))return Nl;const[o,l,c,u]=Uu(...e),f=Ye(c.missingWarn)?c.missingWarn:t.missingWarn,p=Ye(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,m=!!c.part,T=qh(t,c);if(!pe(o)||o===""){const F=new Intl.DateTimeFormat(T.replace(/!/g,""),u);return m?F.formatToParts(l):F.format(l)}const P=Q_(t,o,T,n,f,p,"datetime format");if(!pe(P))return r?uc:o;const V=n[P][o],O=Y_(P,o,u);let N=i.get(O);return N||(N=new Intl.DateTimeFormat(P,Tt({},V,u)),i.set(O,N)),m?N.formatToParts(l):N.format(l)}const Z_=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Uu(...t){const[e]=t,n=Ke(),r=Ke();let s;if(pe(e)){const o=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!o)throw Tr(Ir.INVALID_ISO_DATE_ARGUMENT);const l=o[3]?o[3].trim().startsWith("T")?`${o[1].trim()}${o[3].trim()}`:`${o[1].trim()}T${o[3].trim()}`:o[1].trim();s=new Date(l);try{s.toISOString()}catch{throw Tr(Ir.INVALID_ISO_DATE_ARGUMENT)}}else if(P_(e)){if(isNaN(e.getTime()))throw Tr(Ir.INVALID_DATE_ARGUMENT);s=e}else if(Ct(e))s=e;else throw Tr(Ir.INVALID_ARGUMENT);const i=J_(t,n,r,Z_);return[n.key||"",s,n,i]}function hp(t,e,n){X_(t.__datetimeFormatters,e,n)}function fp(t,...e){const{numberFormats:n,unresolving:r,onWarn:s}=t,{__numberFormatters:i}=t;if(!Ct(e[0]))return Nl;const[o,l,c,u]=$u(...e),f=Ye(c.missingWarn)?c.missingWarn:t.missingWarn,p=Ye(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,m=!!c.part,T=qh(t,c);if(!pe(o)||o===""){const F=new Intl.NumberFormat(T.replace(/!/g,""),u);return m?F.formatToParts(l):F.format(l)}const P=Q_(t,o,T,n,f,p,"number format");if(!pe(P))return r?uc:o;const V=n[P][o],O=Y_(P,o,u);let N=i.get(O);return N||(N=new Intl.NumberFormat(P,Tt({},V,u)),i.set(O,N)),m?N.formatToParts(l):N.format(l)}const ey=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function $u(...t){const[e]=t,n=Ke(),r=Ke();if(!Ct(e))throw Tr(Ir.INVALID_ARGUMENT);const s=e,i=J_(t,n,r,ey);return[n.key||"",s,n,i]}function dp(t,e,n){X_(t.__numberFormatters,e,n)}const o0=t=>t,a0=t=>"",l0="text",c0=t=>t.length===0?"":$h(t),u0=Nb;function su(t,e){return t=Math.abs(t),e===2?t===1?0:1:Math.min(t,2)}function h0(t){var n,r;const e=Ct(t.pluralIndex)?t.pluralIndex:-1;return Ct((n=t.named)==null?void 0:n.count)?t.named.count:Ct((r=t.named)==null?void 0:r.n)?t.named.n:e}function f0(t={}){var F,H,U;const e=t.locale,n=h0(t),r=pe(e)&&t.pluralRules&&lt(Mt(t.pluralRules,e))?t.pluralRules[e]:su,s=r===su?void 0:su,i=Z=>Z[r(n,Z.length,s)],o=t.list||[],l=Z=>o[Z],c=t.named||Ke(),u=Ct(t.pluralIndex),f=Z=>{const ne=k_(Z)?Mt(c,Z):c[Z];return u&&!ne&&(Z==="count"||Z==="n")?t.pluralIndex:ne};function p(Z,ne){const _=lt(t.messages)?t.messages(Z,!!ne):xe(t.messages)?t.messages[Z]:!1;return _||(t.parent?t.parent.message(Z):a0)}const m=Z=>t.modifiers?Mt(t.modifiers,Z):o0,T=lt((F=t.processor)==null?void 0:F.normalize)?t.processor.normalize:c0,P=lt((H=t.processor)==null?void 0:H.interpolate)?t.processor.interpolate:u0,V=pe((U=t.processor)==null?void 0:U.type)?t.processor.type:l0,N={list:l,named:f,plural:i,linked:(Z,...ne)=>{const[_,E]=ne;let I="text",S="";ne.length===1?xe(_)?(S=_.modifier||S,I=_.type||I):pe(_)&&(S=_||S):ne.length===2&&(pe(_)&&(S=_||S),pe(E)&&(I=E||I));const k=p(Z,!0)(N),x=k===""||k===void 0?Z:k,A=I==="vnode"&&ct(x)&&S?x[0]:x;if(!S)return A;const Ve=m(S);return lt(Ve)?Ve(A,I):A},message:p,type:V,interpolate:P,normalize:T,values:Tt(Ke(),o,c,u?{count:f("count"),n:f("n")}:{})};return N}const pp=()=>"",br=t=>lt(t),Dl=t=>pe(t)||$s(t)||br(t);function mp(t,...e){const{fallbackFormat:n,postTranslation:r,unresolving:s,messageCompiler:i,fallbackLocale:o,messages:l}=t,[c,u]=ju(...e),f=Ye(u.missingWarn)?u.missingWarn:t.missingWarn,p=Ye(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn,m=Ye(u.escapeParameter)?u.escapeParameter:t.escapeParameter,T=!!u.resolvedMessage,P=pe(u.default)||Ye(u.default)?Ye(u.default)?i?c:()=>c:u.default:n?i?c:()=>c:null,V=n||P!=null&&(pe(P)||lt(P)),O=qh(t,u);m&&d0(u);let[N,F,H]=T?[c,O,Mt(l,O)||Ke()]:ty(t,c,O,o,p,f),U=N,Z=c;if(!T&&!Dl(U)&&V&&(U=P,Z=U),!T&&(!Dl(U)||!pe(F)))return s?uc:c;let ne=!1;const _=()=>{ne=!0},E=br(U)?U:ny(t,c,F,U,Z,_);if(ne)return U;const I=g0(t,F,H,u),S=f0(I),k=p0(t,E,S);let x=r?r(k,c):k;if(m&&pe(x)&&(x=Qb(x)),__INTLIFY_PROD_DEVTOOLS__){const A={timestamp:Date.now(),key:pe(c)?c:br(U)?U.key:"",locale:F||(br(U)?U.locale:""),format:pe(U)?U:br(U)?U.source:"",message:x};A.meta=Tt({},t.__meta,t0()||{}),Lw(A)}return x}function d0(t){if(ct(t.list)&&(t.list=t.list.map(e=>pe(e)?Yd(e):e)),xe(t.named)){const e=t.named,n=Ke();for(const r of Object.keys(e)){const s=e[r];n[r]=pe(s)?Yd(s):s}t.named=n}}function ty(t,e,n,r,s,i){const{messages:o,onWarn:l,messageResolver:c,localeFallbacker:u}=t,f=u(t,r,n);let p=Ke(),m,T=null;const P="translate";for(let V=0;V<f.length&&(m=f[V],p=Mt(o,m)||Ke(),(T=c(p,e))===null&&(T=Mt(p,e)),!Dl(T));V++)if(!i0(m,f)){const O=G_(t,e,m,i,P);O!==e&&(T=O)}return[T,m,p]}function ny(t,e,n,r,s,i){const{messageCompiler:o,warnHtmlMessage:l}=t;if(br(r)){const u=r;return u.locale=u.locale||n,u.key=u.key||e,u}if(o==null){const u=(()=>r);return u.locale=n,u.key=e,u}const c=o(r,m0(t,n,s,r,l,i));return c.locale=n,c.key=e,c.source=r,c}function p0(t,e,n){return e(n)}function ju(...t){const[e,n,r]=t,s=Ke();if(!pe(e)&&!Ct(e)&&!br(e)&&!$s(e))throw Tr(Ir.INVALID_ARGUMENT);const i=Ct(e)?String(e):(br(e),e);return Ct(n)?s.plural=n:pe(n)?s.default=n:nt(n)&&!Fh(n)?s.named=n:ct(n)&&(s.list=n),Ct(r)?s.plural=r:pe(r)?s.default=r:nt(r)&&Tt(s,r),[i,s]}function m0(t,e,n,r,s,i){return{locale:e,key:n,warnHtmlMessage:s,onError:o=>{throw i&&i(o),o},onCacheKey:o=>Sb(e,n,o)}}function g0(t,e,n,r){const{modifiers:s,pluralRules:i,messageResolver:o,fallbackLocale:l,fallbackWarn:c,missingWarn:u,fallbackContext:f}=t,m={locale:e,modifiers:s,pluralRules:i,messages:(T,P)=>{let V=o(n,T);if(V==null&&(f||P)){const[O,,N]=ty(f||t,T,e,l,c,u);V=O??o(N,T)}if(pe(V)||$s(V)){let O=!1;const F=ny(t,T,e,V,T,()=>{O=!0});return O?pp:F}else return br(V)?V:pp}};return t.processor&&(m.processor=t.processor),r.list&&(m.list=r.list),r.named&&(m.named=r.named),Ct(r.plural)&&(m.pluralIndex=r.plural),m}Iw();/*!
  * vue-i18n v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */const _0="11.4.20";function y0(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(zr().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(zr().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(zr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(zr().__INTLIFY_PROD_DEVTOOLS__=!1)}const ln={UNEXPECTED_RETURN_TYPE:Mw,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32,NOT_AVAILABLE_COMPOSITION_IN_LEGACY:34};function pn(t,...e){return cc(t,null,void 0)}const Bu=hs("__translateVNode"),qu=hs("__datetimeParts"),Hu=hs("__numberParts"),ry=hs("__setPluralRules"),sy=hs("__injectWithOption"),mi=hs("__dispose");let iy=null;{const t=zr().__VUE_INSTANCE_SETTERS__;ct(t)&&t.push(e=>{iy=e})}function Br(t){return!!k_(t)}function Xo(t){if(!xe(t)||$s(t))return t;for(const e in t)if(wn(t,e))if(!e.includes("."))xe(t[e])&&Xo(t[e]);else{const n=e.split("."),r=n.length-1;let s=t,i=!1;for(let l=0;l<r;l++){if(n[l]==="__proto__")throw new Error(`unsafe key: ${n[l]}`);if(n[l]in s||(s[n[l]]=Ke()),!xe(s[n[l]])){i=!0;break}if($s(s[n[l]])&&(B_.includes(n[l+1])||n[l+1]==="cacheKey")){i=!0;break}s=s[n[l]]}i||(s[n[r]]=t[e],delete t[e]);const o=s[n[r]];xe(o)&&Xo(o)}return t}function Hh(t,e){const{messages:n,__i18n:r,messageResolver:s,flatJson:i}=e,o=nt(n)?n:ct(r)?Ke():{[t]:Ke()};if(ct(r)&&r.forEach(l=>{if("locale"in l&&"resource"in l){const{locale:c,resource:u}=l;if(c){if(Br(c))return;o[c]=Mt(o,c)||Ke(),cl(u,o[c])}else cl(u,o)}else pe(l)&&cl(JSON.parse(l),o)}),s==null&&i)for(const l in o)wn(o,l)&&Xo(o[l]);return o}function oy(t){return t.type}function ay(t,e,n){let r=xe(e.messages)?e.messages:Ke();"__i18nGlobal"in n&&(r=Hh(t.locale.value,{messages:r,__i18n:n.__i18nGlobal}));const s=Object.keys(r);s.length&&s.forEach(i=>{t.mergeLocaleMessage(i,r[i])});{if(xe(e.datetimeFormats)){const i=Object.keys(e.datetimeFormats);i.length&&i.forEach(o=>{t.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(xe(e.numberFormats)){const i=Object.keys(e.numberFormats);i.length&&i.forEach(o=>{t.mergeNumberFormat(o,e.numberFormats[o])})}}}function gp(t){return Ie(ha,null,t,0)}function Jo(){return iy??b_()}const _p="__INTLIFY_META__",yp=()=>[],v0=()=>!1;let vp=0;function Ep(t){return((e,n,r,s)=>t(n,r,Jo()||void 0,s))}const E0=()=>{const t=Jo();let e=null;return t&&(e=oy(t)[_p])?{[_p]:e}:null};function Ol(t={}){const{__root:e,__injectWithOption:n}=t,r=e===void 0,s=t.flatJson,i=kl?et:CI;let o=Ye(t.inheritLocale)?t.inheritLocale:!0;const l=i(e&&o?e.locale.value:pe(t.locale)?t.locale:Yo),c=i(e&&o?e.fallbackLocale.value:pe(t.fallbackLocale)||ct(t.fallbackLocale)||nt(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:l.value),u=i(Hh(l.value,t)),f=i(nt(t.datetimeFormats)?t.datetimeFormats:{[l.value]:{}}),p=i(nt(t.numberFormats)?t.numberFormats:{[l.value]:{}});let m=e?e.missingWarn:Ye(t.missingWarn)||Us(t.missingWarn)?t.missingWarn:!0,T=e?e.fallbackWarn:Ye(t.fallbackWarn)||Us(t.fallbackWarn)?t.fallbackWarn:!0,P=e?e.fallbackRoot:Ye(t.fallbackRoot)?t.fallbackRoot:!0,V=!!t.fallbackFormat,O=lt(t.missing)?t.missing:null,N=lt(t.missing)?Ep(t.missing):null,F=lt(t.postTranslation)?t.postTranslation:null,H=e?e.warnHtmlMessage:Ye(t.warnHtmlMessage)?t.warnHtmlMessage:!0,U=!!t.escapeParameter;const Z=e?e.modifiers:nt(t.modifiers)?t.modifiers:{};let ne=t.pluralRules||e&&e.pluralRules,_;_=(()=>{r&&ap(null);const $={version:_0,locale:l.value,fallbackLocale:c.value,messages:u.value,modifiers:Z,pluralRules:ne,missing:N===null?void 0:N,missingWarn:m,fallbackWarn:T,fallbackFormat:V,unresolving:!0,postTranslation:F===null?void 0:F,warnHtmlMessage:H,escapeParameter:U,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};$.datetimeFormats=f.value,$.numberFormats=p.value;const Q=r0($);return r&&ap(Q),Q})(),Xa(_,l.value,c.value);function I(){return[l.value,c.value,u.value,f.value,p.value]}const S=yt({get:()=>l.value,set:$=>{_.locale=$,l.value=$}});function k($){r||(_.fallbackContext=n0());try{return $()}finally{r||(_.fallbackContext=void 0)}}function x($){k(()=>Xa(_,l.value,$))}const A=yt({get:()=>c.value,set:$=>{c.value=$,_.fallbackLocale=c.value,x(c.value)}}),Ve=yt(()=>u.value),Ne=yt(()=>f.value),it=yt(()=>p.value);function Re(){return lt(F)?F:null}function Ce($){F=$,_.postTranslation=$}function gt(){return O}function Dt($){$!==null&&(N=Ep($)),O=$,_.missing=N}const Xe=($,Q,ge,be,Ue,Qe)=>{I();let Ft;try{__INTLIFY_PROD_DEVTOOLS__,Ft=k(()=>$(_))}finally{__INTLIFY_PROD_DEVTOOLS__}if(ge!=="translate exists"&&Ct(Ft)&&Ft===uc||ge==="translate exists"&&!Ft){const[bt,Ut]=Q();return e&&P?be(e):Ue(bt)}else{if(Qe(Ft))return Ft;throw pn(ln.UNEXPECTED_RETURN_TYPE)}};function je(...$){return Xe(Q=>Reflect.apply(mp,null,[Q,...$]),()=>ju(...$),"translate",Q=>Reflect.apply(Q.t,Q,[...$]),Q=>Q,Q=>pe(Q))}function ot(...$){const[Q,ge,be]=$;if(be&&!xe(be))throw pn(ln.INVALID_ARGUMENT);return je(Q,ge,Tt({resolvedMessage:!0},be||{}))}function Cn(...$){return Xe(Q=>Reflect.apply(up,null,[Q,...$]),()=>Uu(...$),"datetime format",Q=>Reflect.apply(Q.d,Q,[...$]),()=>Nl,Q=>pe(Q)||ct(Q))}function ht(...$){return Xe(Q=>Reflect.apply(fp,null,[Q,...$]),()=>$u(...$),"number format",Q=>Reflect.apply(Q.n,Q,[...$]),()=>Nl,Q=>pe(Q)||ct(Q))}function cn($){return $.map(Q=>pe(Q)||Ct(Q)||Ye(Q)?gp(String(Q)):Q)}const Rn={normalize:cn,interpolate:$=>$,type:"vnode"};function mn(...$){return Xe(Q=>{let ge;const be=Q;try{be.processor=Rn,ge=Reflect.apply(mp,null,[be,...$])}finally{be.processor=null}return ge},()=>ju(...$),"translate",Q=>Q[Bu](...$),Q=>[gp(Q)],Q=>ct(Q))}function nn(...$){return Xe(Q=>Reflect.apply(fp,null,[Q,...$]),()=>$u(...$),"number format",Q=>Q[Hu](...$),yp,Q=>pe(Q)||ct(Q))}function w(...$){return Xe(Q=>Reflect.apply(up,null,[Q,...$]),()=>Uu(...$),"datetime format",Q=>Q[qu](...$),yp,Q=>pe(Q)||ct(Q))}function D($){ne=$,_.pluralRules=ne}function W($,Q){const ge=se($),be=_.messageResolver(ge,Q);return be===null?Mt(ge,Q):be}function te($,Q){return Xe(()=>{if(!$)return!1;const ge=pe(Q)?Q:l.value,be=pe(Q)?[ge]:_.localeFallbacker(_,c.value,ge);for(let Ue=0;Ue<be.length;Ue++)if(Dl(W(be[Ue],$)))return!0;return!1},()=>[$],"translate exists",ge=>Reflect.apply(ge.te,ge,[$,Q]),v0,ge=>Ye(ge))}function G($){let Q=null;const ge=_.localeFallbacker(_,c.value,l.value);for(let be=0;be<ge.length;be++){const Ue=W(ge[be],$);if(Ue!=null){Q=Ue;break}}return Q}function X($){const Q=G($);return Q??(e?e.tm($)||{}:{})}function se($){return Mt(u.value,$)||{}}function oe($,Q){Br($)||(s&&Xo(Q),u.value[$]=Q,_.messages=u.value)}function y($,Q){Br($)||(u.value[$]=Mt(u.value,$)||{},s&&Xo(Q),cl(Q,u.value[$]),_.messages=u.value)}function v($){return Mt(f.value,$)||{}}function B($,Q){Br($)||(f.value[$]=Q,_.datetimeFormats=f.value,hp(_,$,Q))}function z($,Q){Br($)||(f.value[$]=Tt(Mt(f.value,$)||{},Q),_.datetimeFormats=f.value,hp(_,$,Q))}function ae($){return Mt(p.value,$)||{}}function ce($,Q){Br($)||(p.value[$]=Q,_.numberFormats=p.value,dp(_,$,Q))}function _e($,Q){Br($)||(p.value[$]=Tt(Mt(p.value,$)||{},Q),_.numberFormats=p.value,dp(_,$,Q))}vp++,Sr(c,()=>x(c.value),{deep:!0,flush:"sync"}),e&&kl&&(Sr(e.locale,$=>{o&&(l.value=$,_.locale=$,Xa(_,l.value,c.value))}),Sr(e.fallbackLocale,$=>{o&&(c.value=$,_.fallbackLocale=c.value,Xa(_,l.value,c.value))}));const de={id:vp,locale:S,fallbackLocale:A,get inheritLocale(){return o},set inheritLocale($){o=$,$&&e&&(S.value=e.locale.value,A.value=e.fallbackLocale.value)},get availableLocales(){return Object.keys(u.value).sort()},messages:Ve,get modifiers(){return Z},get pluralRules(){return ne||{}},get isGlobal(){return r},get missingWarn(){return m},set missingWarn($){m=$,_.missingWarn=m},get fallbackWarn(){return T},set fallbackWarn($){T=$,_.fallbackWarn=T},get fallbackRoot(){return P},set fallbackRoot($){P=$},get fallbackFormat(){return V},set fallbackFormat($){V=$,_.fallbackFormat=V},get warnHtmlMessage(){return H},set warnHtmlMessage($){H=$,_.warnHtmlMessage=$},get escapeParameter(){return U},set escapeParameter($){U=$,_.escapeParameter=$},t:je,getLocaleMessage:se,setLocaleMessage:oe,mergeLocaleMessage:y,getPostTranslationHandler:Re,setPostTranslationHandler:Ce,getMissingHandler:gt,setMissingHandler:Dt,[ry]:D};return de.datetimeFormats=Ne,de.numberFormats=it,de.rt=ot,de.te=te,de.tm=X,de.d=Cn,de.n=ht,de.getDateTimeFormat=v,de.setDateTimeFormat=B,de.mergeDateTimeFormat=z,de.getNumberFormat=ae,de.setNumberFormat=ce,de.mergeNumberFormat=_e,de[sy]=n,de[Bu]=mn,de[qu]=w,de[Hu]=nn,de}const iu=new WeakMap;function gi(t){if(!Us(t))return!t;let e=iu.get(t);return e||(e=new RegExp(`^(?![\\s\\S]*(?:${t.source}))`,t.flags.replace(/[gy]/g,"")),iu.set(t,e),iu.set(e,t)),e}function I0(t){const e=pe(t.locale)?t.locale:Yo,n=pe(t.fallbackLocale)||ct(t.fallbackLocale)||nt(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,r=lt(t.missing)?t.missing:void 0,s=Ye(t.silentTranslationWarn)||Us(t.silentTranslationWarn)?gi(t.silentTranslationWarn):!0,i=Ye(t.silentFallbackWarn)||Us(t.silentFallbackWarn)?gi(t.silentFallbackWarn):!0,o=Ye(t.fallbackRoot)?t.fallbackRoot:!0,l=!!t.formatFallbackMessages,c=nt(t.modifiers)?t.modifiers:{},u=t.pluralizationRules,f=lt(t.postTranslation)?t.postTranslation:void 0,p=pe(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,m=!!t.escapeParameterHtml,T=Ye(t.sync)?t.sync:!0;let P=t.messages;if(nt(t.sharedMessages)){const Z=t.sharedMessages;P=Object.keys(Z).reduce((_,E)=>{if(Br(E))return _;const I=Mt(_,E)||(_[E]={});return Tt(I,Z[E]),_},P||{})}const{__i18n:V,__root:O,__injectWithOption:N}=t,F=t.datetimeFormats,H=t.numberFormats,U=t.flatJson;return{locale:e,fallbackLocale:n,messages:P,flatJson:U,datetimeFormats:F,numberFormats:H,missing:r,missingWarn:s,fallbackWarn:i,fallbackRoot:o,fallbackFormat:l,modifiers:c,pluralRules:u,postTranslation:f,warnHtmlMessage:p,escapeParameter:m,messageResolver:t.messageResolver,inheritLocale:T,__i18n:V,__root:O,__injectWithOption:N}}function Wu(t={}){const e=Ol(I0(t)),{__extender:n}=t,r={id:e.id,get locale(){return e.locale.value},set locale(s){e.locale.value=s},get fallbackLocale(){return e.fallbackLocale.value},set fallbackLocale(s){e.fallbackLocale.value=s},get messages(){return e.messages.value},get datetimeFormats(){return e.datetimeFormats.value},get numberFormats(){return e.numberFormats.value},get availableLocales(){return e.availableLocales},get missing(){return e.getMissingHandler()},set missing(s){e.setMissingHandler(s)},get silentTranslationWarn(){return gi(e.missingWarn)},set silentTranslationWarn(s){e.missingWarn=gi(s)},get silentFallbackWarn(){return gi(e.fallbackWarn)},set silentFallbackWarn(s){e.fallbackWarn=gi(s)},get modifiers(){return e.modifiers},get formatFallbackMessages(){return e.fallbackFormat},set formatFallbackMessages(s){e.fallbackFormat=s},get postTranslation(){return e.getPostTranslationHandler()},set postTranslation(s){e.setPostTranslationHandler(s)},get sync(){return e.inheritLocale},set sync(s){e.inheritLocale=s},get warnHtmlInMessage(){return e.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(s){e.warnHtmlMessage=s!=="off"},get escapeParameterHtml(){return e.escapeParameter},set escapeParameterHtml(s){e.escapeParameter=s},get pluralizationRules(){return e.pluralRules||{}},__composer:e,t(...s){return Reflect.apply(e.t,e,[...s])},rt(...s){return Reflect.apply(e.rt,e,[...s])},te(s,i){return e.te(s,i)},tm(s){return e.tm(s)},getLocaleMessage(s){return e.getLocaleMessage(s)},setLocaleMessage(s,i){e.setLocaleMessage(s,i)},mergeLocaleMessage(s,i){e.mergeLocaleMessage(s,i)},d(...s){return Reflect.apply(e.d,e,[...s])},getDateTimeFormat(s){return e.getDateTimeFormat(s)},setDateTimeFormat(s,i){e.setDateTimeFormat(s,i)},mergeDateTimeFormat(s,i){e.mergeDateTimeFormat(s,i)},n(...s){return Reflect.apply(e.n,e,[...s])},getNumberFormat(s){return e.getNumberFormat(s)},setNumberFormat(s,i){e.setNumberFormat(s,i)},mergeNumberFormat(s,i){e.mergeNumberFormat(s,i)}};return r.__extender=n,r}function T0(t,e,n){return{beforeCreate(){const r=Jo();if(!r)throw pn(ln.UNEXPECTED_ERROR);const s=this.$options;if(s.i18n){const i=Tt({},s.i18n);if(s.__i18n&&(i.__i18n=s.__i18n),i.__root=e,this===this.$root)this.$i18n=Ip(t,i);else{i.__injectWithOption=!0,i.__extender=n.__vueI18nExtend,this.$i18n=Wu(i);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(s.__i18n)if(this===this.$root)this.$i18n=Ip(t,s);else{this.$i18n=Wu({__i18n:s.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const i=this.$i18n;i.__extender&&(i.__disposer=i.__extender(this.$i18n))}else this.$i18n=t;s.__i18nGlobal&&ay(e,s,s),this.$t=(...i)=>this.$i18n.t(...i),this.$rt=(...i)=>this.$i18n.rt(...i),this.$te=(i,o)=>this.$i18n.te(i,o),this.$d=(...i)=>this.$i18n.d(...i),this.$n=(...i)=>this.$i18n.n(...i),this.$tm=i=>this.$i18n.tm(i),n.__setInstance(r,this.$i18n)},mounted(){},unmounted(){const r=Jo();if(!r)throw pn(ln.UNEXPECTED_ERROR);const s=this.$i18n;s&&(delete this.$t,delete this.$rt,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,s!=null&&s.__disposer&&(s.__disposer(),delete s.__disposer,delete s.__extender),n.__deleteInstance(r),delete this.$i18n)}}}function Ip(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[ry](e.pluralizationRules||t.pluralizationRules);const n=Hh(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(r=>t.mergeLocaleMessage(r,n[r])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(r=>t.mergeDateTimeFormat(r,e.datetimeFormats[r])),e.numberFormats&&Object.keys(e.numberFormats).forEach(r=>t.mergeNumberFormat(r,e.numberFormats[r])),t}const Wh={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function b0({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((r,s)=>[...r,...s.type===Be?s.children:[s]],[]):e.reduce((n,r)=>{const s=t[r];return s&&(n[r]=s()),n},Ke())}function ly(){return Be}const w0=oc({name:"i18n-t",props:Tt({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>Ct(t)||!isNaN(t)}},Wh),setup(t,e){const{slots:n,attrs:r}=e,s=t.i18n||hc({useScope:t.scope,__useComponent:!0});return()=>{const i=()=>{const c=Object.keys(n).filter(p=>p[0]!=="_"),u=Ke();t.locale&&(u.locale=t.locale),t.plural!==void 0&&(u.plural=pe(t.plural)?+t.plural:t.plural);const f=b0(e,c);return s[Bu](t.keypath,f,u)},o=Tt(Ke(),r),l=pe(t.tag)||xe(t.tag)?t.tag:ly();return xe(l)?Fs(l,o,{default:i}):Fs(l,o,i())}}}),Tp=w0;function A0(t){return ct(t)&&!pe(t[0])}function cy(t,e,n,r){const{slots:s,attrs:i}=e;return()=>{const o=()=>{const u={part:!0};let f=Ke();t.locale&&(u.locale=t.locale),pe(t.format)?u.key=t.format:xe(t.format)&&(pe(t.format.key)&&(u.key=t.format.key),f=Object.keys(t.format).reduce((T,P)=>n.includes(P)?Tt(Ke(),T,{[P]:t.format[P]}):T,Ke()));const p=r(t.value,u,f);let m=[u.key];return ct(p)?m=p.map((T,P)=>{const V=s[T.type],O=V?V({[T.type]:T.value,index:P,parts:p}):[T.value];return A0(O)&&(O[0].key=`${T.type}-${P}`),O}):pe(p)&&(m=[p]),m},l=Tt(Ke(),i),c=pe(t.tag)||xe(t.tag)?t.tag:ly();return xe(c)?Fs(c,l,{default:o}):Fs(c,l,o())}}const S0=oc({name:"i18n-n",props:Tt({value:{type:Number,required:!0},format:{type:[String,Object]}},Wh),setup(t,e){const n=t.i18n||hc({useScope:t.scope,__useComponent:!0});return cy(t,e,ey,(...r)=>n[Hu](...r))}}),bp=S0;function C0(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const r=n.__getInstance(e);return r!=null?r.__composer:t.global.__composer}}function R0(t){const e=o=>{const{instance:l,value:c}=o;if(!l||!l.$)throw pn(ln.UNEXPECTED_ERROR);const u=C0(t,l.$),f=wp(c);return[Reflect.apply(u.t,u,[...Ap(f)]),u]};return{created:(o,l)=>{const[c,u]=e(l);kl&&(o.__i18nWatcher=Sr(u.locale,()=>{l.instance&&l.instance.$forceUpdate()})),o.__composer=u,o.textContent=c},unmounted:o=>{kl&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:l})=>{if(o.__composer){const c=o.__composer,u=wp(l);o.textContent=Reflect.apply(c.t,c,[...Ap(u)])}},getSSRProps:o=>{const[l]=e(o);return{textContent:l}}}}function wp(t){if(pe(t))return{path:t};if(nt(t)){if(!("path"in t))throw pn(ln.REQUIRED_VALUE,"path");return t}else throw pn(ln.INVALID_VALUE)}function Ap(t){const{path:e,locale:n,args:r,choice:s,plural:i}=t,o={},l=r||{};return pe(n)&&(o.locale=n),Ct(s)&&(o.plural=s),Ct(i)&&(o.plural=i),[e,l,o]}function P0(t,e,...n){const r=nt(n[0])?n[0]:{};(Ye(r.globalInstall)?r.globalInstall:!0)&&([Tp.name,"I18nT"].forEach(i=>t.component(i,Tp)),[bp.name,"I18nN"].forEach(i=>t.component(i,bp)),[Rp.name,"I18nD"].forEach(i=>t.component(i,Rp))),t.directive("t",R0(e))}const k0=hs("global-vue-i18n");function N0(t={}){const e=__VUE_I18N_LEGACY_API__&&Ye(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,n=Ye(t.globalInjection)?t.globalInjection:!0,r=new Map,[s,i]=D0(t,e),o=hs("");function l(p){return r.get(p)||null}function c(p,m){r.set(p,m)}function u(p){r.delete(p)}const f={get mode(){return __VUE_I18N_LEGACY_API__&&e?"legacy":"composition"},install(p,...m){if(p.__VUE_I18N_SYMBOL__=o,p.provide(p.__VUE_I18N_SYMBOL__,f),nt(m[0])){const V=m[0];f.__composerExtend=V.__composerExtend,f.__vueI18nExtend=V.__vueI18nExtend}let T=null;!e&&n&&(T=U0(p,f.global)),__VUE_I18N_FULL_INSTALL__&&P0(p,f,...m),__VUE_I18N_LEGACY_API__&&e&&p.mixin(T0(i,i.__composer,f));const P=p.unmount;p.unmount=()=>{T&&T(),f.dispose(),P()}},get global(){return i},dispose(){s.stop()},__instances:r,__getInstance:l,__setInstance:c,__deleteInstance:u};return f}function hc(t={}){const e=Jo();if(e==null)throw pn(ln.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw pn(ln.NOT_INSTALLED);const n=O0(e),r=V0(n),s=oy(e),i=L0(t,s);if(i==="global")return ay(r,t,s),r;if(i==="parent"){let c=Sp(n,e,t.__useComponent);return c==null&&(c=r),c}if(i==="isolated"){if(n.mode!=="composition")throw pn(ln.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const c=n,u=Tt({},t),f=Sp(n,e);u.__root=f||r;const p=Ol(u);return c.__composerExtend&&(p[mi]=c.__composerExtend(p)),Ag()&&cI(()=>{const T=p[mi];T&&(T(),delete p[mi])}),p}const o=n;let l=o.__getInstance(e);if(l==null){const c=Tt({},t);"__i18n"in s&&(c.__i18n=s.__i18n),r&&(c.__root=r),l=Ol(c),o.__composerExtend&&(l[mi]=o.__composerExtend(l)),x0(o,e,l),o.__setInstance(e,l)}return l}function D0(t,e){const n=wg(),r=__VUE_I18N_LEGACY_API__&&e?n.run(()=>Wu(t)):n.run(()=>Ol(t));if(r==null)throw pn(ln.UNEXPECTED_ERROR);return[n,r]}function O0(t){const e=_i(t.isCE?k0:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw pn(t.isCE?ln.NOT_INSTALLED_WITH_PROVIDE:ln.UNEXPECTED_ERROR);return e}function L0(t,e){return Fh(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function V0(t){return t.mode==="composition"?t.global:t.global.__composer}function Sp(t,e,n=!1){let r=null;const s=e.root;let i=M0(e,n);for(;i!=null;){const o=t;if(t.mode==="composition")r=o.__getInstance(i);else if(__VUE_I18N_LEGACY_API__){const l=o.__getInstance(i);l!=null&&(r=l.__composer,n&&r&&!r[sy]&&(r=null))}if(r!=null||s===i)break;i=i.parent}return r}function M0(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function x0(t,e,n){Oh(()=>{},e),Lh(()=>{const r=n;t.__deleteInstance(e);const s=r[mi];s&&(s(),delete r[mi])},e)}const F0=["locale","fallbackLocale","availableLocales"],Cp=["t","rt","d","n","tm","te"];function U0(t,e){const n=Object.create(null);return F0.forEach(s=>{const i=Object.getOwnPropertyDescriptor(e,s);if(!i)throw pn(ln.UNEXPECTED_ERROR);const o=Ht(i.value)?{get(){return i.value.value},set(l){i.value.value=l}}:{get(){return i.get&&i.get()}};Object.defineProperty(n,s,o)}),t.config.globalProperties.$i18n=n,Cp.forEach(s=>{const i=Object.getOwnPropertyDescriptor(e,s);if(!i||!i.value)throw pn(ln.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${s}`,i)}),()=>{delete t.config.globalProperties.$i18n,Cp.forEach(s=>{delete t.config.globalProperties[`$${s}`]})}}const $0=oc({name:"i18n-d",props:Tt({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Wh),setup(t,e){const n=t.i18n||hc({useScope:t.scope,__useComponent:!0});return cy(t,e,Z_,(...r)=>n[qu](...r))}}),Rp=$0;y0();Xw(Nw);Jw(Gw);Zw(Fw);if(__INTLIFY_PROD_DEVTOOLS__){const t=zr();t.__INTLIFY__=!0,Dw(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const j0="1.6.8",B0={version:j0},q0=()=>{};var Pp={};/**
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
 */const uy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},H0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},hy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,T=u&63;c||(T=64,o||(m=64)),r.push(n[f],n[p],n[m],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(uy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):H0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new W0;const m=i<<2|l>>4;if(r.push(m),u!==64){const T=l<<4&240|u>>2;if(r.push(T),p!==64){const P=u<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class W0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const z0=function(t){const e=uy(t);return hy.encodeByteArray(e,!0)},Ll=function(t){return z0(t).replace(/\./g,"")},fy=function(t){try{return hy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function K0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const G0=()=>K0().__FIREBASE_DEFAULTS__,Q0=()=>{if(typeof process>"u"||typeof Pp>"u")return;const t=Pp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Y0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fy(t[1]);return e&&JSON.parse(e)},fc=()=>{try{return q0()||G0()||Q0()||Y0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},dy=t=>{var e,n;return(n=(e=fc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},X0=t=>{const e=dy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},py=()=>{var t;return(t=fc())===null||t===void 0?void 0:t.config},my=t=>{var e;return(e=fc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class J0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Vi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function gy(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Z0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ll(JSON.stringify(n)),Ll(JSON.stringify(o)),""].join(".")}const Lo={};function eA(){const t={prod:[],emulator:[]};for(const e of Object.keys(Lo))Lo[e]?t.emulator.push(e):t.prod.push(e);return t}function tA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let kp=!1;function _y(t,e){if(typeof window>"u"||typeof document>"u"||!Vi(window.location.host)||Lo[t]===e||Lo[t]||kp)return;Lo[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=eA().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,T){m.setAttribute("width","24"),m.setAttribute("id",T),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{kp=!0,o()},m}function f(m,T){m.setAttribute("id",T),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=tA(r),T=n("text"),P=document.getElementById(T)||document.createElement("span"),V=n("learnmore"),O=document.getElementById(V)||document.createElement("a"),N=n("preprendIcon"),F=document.getElementById(N)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const H=m.element;l(H),f(O,V);const U=u();c(F,N),H.append(F,P,O,U),document.body.appendChild(H)}i?(P.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",T)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function tn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tn())}function rA(){var t;const e=(t=fc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function sA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function iA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function oA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function aA(){const t=tn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function lA(){return!rA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function cA(){try{return typeof indexedDB=="object"}catch{return!1}}function uA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const hA="FirebaseError";class Dr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=hA,Object.setPrototypeOf(this,Dr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,da.prototype.create)}}class da{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?fA(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Dr(s,l,r)}}function fA(t,e){return t.replace(dA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const dA=/\{\$([^}]+)}/g;function pA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function js(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Np(i)&&Np(o)){if(!js(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Np(t){return t!==null&&typeof t=="object"}/**
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
 */function pa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function mA(t,e){const n=new gA(t,e);return n.subscribe.bind(n)}class gA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");_A(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ou),s.error===void 0&&(s.error=ou),s.complete===void 0&&(s.complete=ou);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _A(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ou(){}/**
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
 */function xt(t){return t&&t._delegate?t._delegate:t}class Bs{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ss="[DEFAULT]";/**
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
 */class yA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new J0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(EA(e))try{this.getOrInitializeService({instanceIdentifier:Ss})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ss){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ss){return this.instances.has(e)}getOptions(e=Ss){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ss){return this.component?this.component.multipleInstances?e:Ss:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vA(t){return t===Ss?void 0:t}function EA(t){return t.instantiationMode==="EAGER"}/**
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
 */class IA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Oe||(Oe={}));const TA={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},bA=Oe.INFO,wA={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},AA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=wA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zh{constructor(e){this.name=e,this._logLevel=bA,this._logHandler=AA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?TA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const SA=(t,e)=>e.some(n=>t instanceof n);let Dp,Op;function CA(){return Dp||(Dp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function RA(){return Op||(Op=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yy=new WeakMap,zu=new WeakMap,vy=new WeakMap,au=new WeakMap,Kh=new WeakMap;function PA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Yr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&yy.set(n,t)}).catch(()=>{}),Kh.set(e,t),e}function kA(t){if(zu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});zu.set(t,e)}let Ku={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function NA(t){Ku=t(Ku)}function DA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(lu(this),e,...n);return vy.set(r,e.sort?e.sort():[e]),Yr(r)}:RA().includes(t)?function(...e){return t.apply(lu(this),e),Yr(yy.get(this))}:function(...e){return Yr(t.apply(lu(this),e))}}function OA(t){return typeof t=="function"?DA(t):(t instanceof IDBTransaction&&kA(t),SA(t,CA())?new Proxy(t,Ku):t)}function Yr(t){if(t instanceof IDBRequest)return PA(t);if(au.has(t))return au.get(t);const e=OA(t);return e!==t&&(au.set(t,e),Kh.set(e,t)),e}const lu=t=>Kh.get(t);function LA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Yr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Yr(o.result),c.oldVersion,c.newVersion,Yr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const VA=["get","getKey","getAll","getAllKeys","count"],MA=["put","add","delete","clear"],cu=new Map;function Lp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cu.get(e))return cu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=MA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||VA.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return cu.set(e,i),i}NA(t=>({...t,get:(e,n,r)=>Lp(e,n)||t.get(e,n,r),has:(e,n)=>!!Lp(e,n)||t.has(e,n)}));/**
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
 */class xA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(FA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function FA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gu="@firebase/app",Vp="0.13.2";/**
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
 */const Cr=new zh("@firebase/app"),UA="@firebase/app-compat",$A="@firebase/analytics-compat",jA="@firebase/analytics",BA="@firebase/app-check-compat",qA="@firebase/app-check",HA="@firebase/auth",WA="@firebase/auth-compat",zA="@firebase/database",KA="@firebase/data-connect",GA="@firebase/database-compat",QA="@firebase/functions",YA="@firebase/functions-compat",XA="@firebase/installations",JA="@firebase/installations-compat",ZA="@firebase/messaging",e1="@firebase/messaging-compat",t1="@firebase/performance",n1="@firebase/performance-compat",r1="@firebase/remote-config",s1="@firebase/remote-config-compat",i1="@firebase/storage",o1="@firebase/storage-compat",a1="@firebase/firestore",l1="@firebase/ai",c1="@firebase/firestore-compat",u1="firebase",h1="11.10.0";/**
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
 */const Qu="[DEFAULT]",f1={[Gu]:"fire-core",[UA]:"fire-core-compat",[jA]:"fire-analytics",[$A]:"fire-analytics-compat",[qA]:"fire-app-check",[BA]:"fire-app-check-compat",[HA]:"fire-auth",[WA]:"fire-auth-compat",[zA]:"fire-rtdb",[KA]:"fire-data-connect",[GA]:"fire-rtdb-compat",[QA]:"fire-fn",[YA]:"fire-fn-compat",[XA]:"fire-iid",[JA]:"fire-iid-compat",[ZA]:"fire-fcm",[e1]:"fire-fcm-compat",[t1]:"fire-perf",[n1]:"fire-perf-compat",[r1]:"fire-rc",[s1]:"fire-rc-compat",[i1]:"fire-gcs",[o1]:"fire-gcs-compat",[a1]:"fire-fst",[c1]:"fire-fst-compat",[l1]:"fire-vertex","fire-js":"fire-js",[u1]:"fire-js-all"};/**
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
 */const Vl=new Map,d1=new Map,Yu=new Map;function Mp(t,e){try{t.container.addComponent(e)}catch(n){Cr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ci(t){const e=t.name;if(Yu.has(e))return Cr.debug(`There were multiple attempts to register component ${e}.`),!1;Yu.set(e,t);for(const n of Vl.values())Mp(n,t);for(const n of d1.values())Mp(n,t);return!0}function Gh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Dn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const p1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xr=new da("app","Firebase",p1);/**
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
 */class m1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xr.create("app-deleted",{appName:this._name})}}/**
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
 */const Mi=h1;function Ey(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qu,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Xr.create("bad-app-name",{appName:String(s)});if(n||(n=py()),!n)throw Xr.create("no-options");const i=Vl.get(s);if(i){if(js(n,i.options)&&js(r,i.config))return i;throw Xr.create("duplicate-app",{appName:s})}const o=new IA(s);for(const c of Yu.values())o.addComponent(c);const l=new m1(n,r,o);return Vl.set(s,l),l}function Iy(t=Qu){const e=Vl.get(t);if(!e&&t===Qu&&py())return Ey();if(!e)throw Xr.create("no-app",{appName:t});return e}function Jr(t,e,n){var r;let s=(r=f1[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cr.warn(l.join(" "));return}Ci(new Bs(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const g1="firebase-heartbeat-database",_1=1,Zo="firebase-heartbeat-store";let uu=null;function Ty(){return uu||(uu=LA(g1,_1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Zo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Xr.create("idb-open",{originalErrorMessage:t.message})})),uu}async function y1(t){try{const n=(await Ty()).transaction(Zo),r=await n.objectStore(Zo).get(by(t));return await n.done,r}catch(e){if(e instanceof Dr)Cr.warn(e.message);else{const n=Xr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cr.warn(n.message)}}}async function xp(t,e){try{const r=(await Ty()).transaction(Zo,"readwrite");await r.objectStore(Zo).put(e,by(t)),await r.done}catch(n){if(n instanceof Dr)Cr.warn(n.message);else{const r=Xr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cr.warn(r.message)}}}function by(t){return`${t.name}!${t.options.appId}`}/**
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
 */const v1=1024,E1=30;class I1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new b1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Fp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>E1){const o=w1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Cr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Fp(),{heartbeatsToSend:r,unsentEntries:s}=T1(this._heartbeatsCache.heartbeats),i=Ll(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Cr.warn(n),""}}}function Fp(){return new Date().toISOString().substring(0,10)}function T1(t,e=v1){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Up(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Up(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class b1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cA()?uA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await y1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return xp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return xp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Up(t){return Ll(JSON.stringify({version:2,heartbeats:t})).length}function w1(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function A1(t){Ci(new Bs("platform-logger",e=>new xA(e),"PRIVATE")),Ci(new Bs("heartbeat",e=>new I1(e),"PRIVATE")),Jr(Gu,Vp,t),Jr(Gu,Vp,"esm2017"),Jr("fire-js","")}A1("");function Qh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function wy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const S1=wy,Ay=new da("auth","Firebase",wy());/**
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
 */const Ml=new zh("@firebase/auth");function C1(t,...e){Ml.logLevel<=Oe.WARN&&Ml.warn(`Auth (${Mi}): ${t}`,...e)}function ul(t,...e){Ml.logLevel<=Oe.ERROR&&Ml.error(`Auth (${Mi}): ${t}`,...e)}/**
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
 */function lr(t,...e){throw Xh(t,...e)}function Mn(t,...e){return Xh(t,...e)}function Yh(t,e,n){const r=Object.assign(Object.assign({},S1()),{[e]:n});return new da("auth","Firebase",r).create(e,{appName:t.name})}function Ms(t){return Yh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function R1(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&lr(t,"argument-error"),Yh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ay.create(t,...e)}function Te(t,e,...n){if(!t)throw Xh(e,...n)}function wr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ul(e),new Error(e)}function Rr(t,e){t||wr(e)}/**
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
 */function Xu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function P1(){return $p()==="http:"||$p()==="https:"}function $p(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function k1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(P1()||iA()||"connection"in navigator)?navigator.onLine:!0}function N1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ma{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rr(n>e,"Short delay should be less than long delay!"),this.isMobile=nA()||oA()}get(){return k1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Jh(t,e){Rr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Sy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const D1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const O1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],L1=new ma(3e4,6e4);function Zh(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function xi(t,e,n,r,s={}){return Cy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=pa(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return sA()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Vi(t.emulatorConfig.host)&&(u.credentials="include"),Sy.fetch()(await Ry(t,t.config.apiHost,n,l),u)})}async function Cy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},D1),e);try{const s=new M1(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ja(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ja(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ja(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ja(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Yh(t,f,u);lr(t,f)}}catch(s){if(s instanceof Dr)throw s;lr(t,"network-request-failed",{message:String(s)})}}async function V1(t,e,n,r,s={}){const i=await xi(t,e,n,r,s);return"mfaPendingCredential"in i&&lr(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Ry(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Jh(t.config,s):`${t.config.apiScheme}://${s}`;return O1.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class M1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Mn(this.auth,"network-request-failed")),L1.get())})}}function Ja(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Mn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function x1(t,e){return xi(t,"POST","/v1/accounts:delete",e)}async function xl(t,e){return xi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Vo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function F1(t,e=!1){const n=xt(t),r=await n.getIdToken(e),s=ef(r);Te(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Vo(hu(s.auth_time)),issuedAtTime:Vo(hu(s.iat)),expirationTime:Vo(hu(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function hu(t){return Number(t)*1e3}function ef(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ul("JWT malformed, contained fewer than 3 sections"),null;try{const s=fy(n);return s?JSON.parse(s):(ul("Failed to decode base64 JWT payload"),null)}catch(s){return ul("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function jp(t){const e=ef(t);return Te(e,"internal-error"),Te(typeof e.exp<"u","internal-error"),Te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ea(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dr&&U1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function U1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class $1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ju{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vo(this.lastLoginAt),this.creationTime=Vo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ea(t,xl(n,{idToken:r}));Te(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Py(i.providerUserInfo):[],l=B1(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Ju(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function j1(t){const e=xt(t);await Fl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function B1(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Py(t){return t.map(e=>{var{providerId:n}=e,r=Qh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function q1(t,e){const n=await Cy(t,{},async()=>{const r=pa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Ry(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&Vi(t.emulatorConfig.host)&&(c.credentials="include"),Sy.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function H1(t,e){return xi(t,"POST","/v2/accounts:revokeToken",Zh(t,e))}/**
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
 */class vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Te(e.idToken,"internal-error"),Te(typeof e.idToken<"u","internal-error"),Te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Te(e.length!==0,"internal-error");const n=jp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await q1(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new vi;return r&&(Te(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Te(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Te(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vi,this.toJSON())}_performRefresh(){return wr("not implemented")}}/**
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
 */function Ur(t,e){Te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class On{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Qh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ju(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ea(this,this.stsTokenManager.getToken(this.auth,e));return Te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return F1(this,e)}reload(){return j1(this)}_assign(e){this!==e&&(Te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new On(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dn(this.auth.app))return Promise.reject(Ms(this.auth));const e=await this.getIdToken();return await ea(this,x1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,T=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,V=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,N=(u=n.createdAt)!==null&&u!==void 0?u:void 0,F=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:H,emailVerified:U,isAnonymous:Z,providerData:ne,stsTokenManager:_}=n;Te(H&&_,e,"internal-error");const E=vi.fromJSON(this.name,_);Te(typeof H=="string",e,"internal-error"),Ur(p,e.name),Ur(m,e.name),Te(typeof U=="boolean",e,"internal-error"),Te(typeof Z=="boolean",e,"internal-error"),Ur(T,e.name),Ur(P,e.name),Ur(V,e.name),Ur(O,e.name),Ur(N,e.name),Ur(F,e.name);const I=new On({uid:H,auth:e,email:m,emailVerified:U,displayName:p,isAnonymous:Z,photoURL:P,phoneNumber:T,tenantId:V,stsTokenManager:E,createdAt:N,lastLoginAt:F});return ne&&Array.isArray(ne)&&(I.providerData=ne.map(S=>Object.assign({},S))),O&&(I._redirectEventId=O),I}static async _fromIdTokenResponse(e,n,r=!1){const s=new vi;s.updateFromServerResponse(n);const i=new On({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Fl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Te(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Py(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new vi;l.updateFromIdToken(r);const c=new On({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ju(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const Bp=new Map;function Ar(t){Rr(t instanceof Function,"Expected a class definition");let e=Bp.get(t);return e?(Rr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bp.set(t,e),e)}/**
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
 */class ky{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ky.type="NONE";const qp=ky;/**
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
 */function hl(t,e,n){return`firebase:${t}:${e}:${n}`}class Ei{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=hl(this.userKey,s.apiKey,i),this.fullPersistenceKey=hl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await xl(this.auth,{idToken:e}).catch(()=>{});return n?On._fromGetAccountInfoResponse(this.auth,n,e):null}return On._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ei(Ar(qp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Ar(qp);const o=hl(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await xl(e,{idToken:f}).catch(()=>{});if(!m)break;p=await On._fromGetAccountInfoResponse(e,m,f)}else p=On._fromJSON(e,f);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ei(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ei(i,e,r))}}/**
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
 */function Hp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ly(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ny(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(My(e))return"Blackberry";if(xy(e))return"Webos";if(Dy(e))return"Safari";if((e.includes("chrome/")||Oy(e))&&!e.includes("edge/"))return"Chrome";if(Vy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ny(t=tn()){return/firefox\//i.test(t)}function Dy(t=tn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Oy(t=tn()){return/crios\//i.test(t)}function Ly(t=tn()){return/iemobile/i.test(t)}function Vy(t=tn()){return/android/i.test(t)}function My(t=tn()){return/blackberry/i.test(t)}function xy(t=tn()){return/webos/i.test(t)}function tf(t=tn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function W1(t=tn()){var e;return tf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function z1(){return aA()&&document.documentMode===10}function Fy(t=tn()){return tf(t)||Vy(t)||xy(t)||My(t)||/windows phone/i.test(t)||Ly(t)}/**
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
 */function Uy(t,e=[]){let n;switch(t){case"Browser":n=Hp(tn());break;case"Worker":n=`${Hp(tn())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mi}/${r}`}/**
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
 */class K1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function G1(t,e={}){return xi(t,"GET","/v2/passwordPolicy",Zh(t,e))}/**
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
 */const Q1=6;class Y1{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Q1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class X1{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wp(this),this.idTokenSubscription=new Wp(this),this.beforeStateQueue=new K1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ay,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ar(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Ei.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await xl(this,{idToken:e}),r=await On._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Dn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=N1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dn(this.app))return Promise.reject(Ms(this));const n=e?xt(e):null;return n&&Te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dn(this.app)?Promise.reject(Ms(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dn(this.app)?Promise.reject(Ms(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ar(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await G1(this),n=new Y1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new da("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await H1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ar(e)||this._popupRedirectResolver;Te(n,this,"argument-error"),this.redirectPersistenceManager=await Ei.create(this,[Ar(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Te(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Dn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&C1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function dc(t){return xt(t)}class Wp{constructor(e){this.auth=e,this.observer=null,this.addObserver=mA(n=>this.observer=n)}get next(){return Te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let nf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function J1(t){nf=t}function Z1(t){return nf.loadJS(t)}function eS(){return nf.gapiScript}function tS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function nS(t,e){const n=Gh(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(js(i,e??{}))return s;lr(s,"already-initialized")}return n.initialize({options:e})}function rS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ar);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function sS(t,e,n){const r=dc(t);Te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=$y(e),{host:o,port:l}=iS(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Te(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Te(js(u,r.config.emulator)&&js(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Vi(o)?(gy(`${i}//${o}${c}`),_y("Auth",!0)):oS()}function $y(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function iS(t){const e=$y(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:zp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:zp(o)}}}function zp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function oS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class jy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wr("not implemented")}_getIdTokenResponse(e){return wr("not implemented")}_linkToIdToken(e,n){return wr("not implemented")}_getReauthenticationResolver(e){return wr("not implemented")}}/**
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
 */async function Ii(t,e){return V1(t,"POST","/v1/accounts:signInWithIdp",Zh(t,e))}/**
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
 */const aS="http://localhost";class qs extends jy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):lr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Qh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new qs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ii(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ii(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ii(e,n)}buildRequest(){const e={requestUri:aS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=pa(n)}return e}}/**
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
 */class rf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ga extends rf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class qr extends ga{constructor(){super("facebook.com")}static credential(e){return qs._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qr.credential(e.oauthAccessToken)}catch{return null}}}qr.FACEBOOK_SIGN_IN_METHOD="facebook.com";qr.PROVIDER_ID="facebook.com";/**
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
 */class Er extends ga{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qs._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Er.credential(n,r)}catch{return null}}}Er.GOOGLE_SIGN_IN_METHOD="google.com";Er.PROVIDER_ID="google.com";/**
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
 */class Hr extends ga{constructor(){super("github.com")}static credential(e){return qs._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hr.credential(e.oauthAccessToken)}catch{return null}}}Hr.GITHUB_SIGN_IN_METHOD="github.com";Hr.PROVIDER_ID="github.com";/**
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
 */class Wr extends ga{constructor(){super("twitter.com")}static credential(e,n){return qs._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Wr.credentialFromTaggedObject(e)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Wr.credential(n,r)}catch{return null}}}Wr.TWITTER_SIGN_IN_METHOD="twitter.com";Wr.PROVIDER_ID="twitter.com";/**
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
 */class Ri{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await On._fromIdTokenResponse(e,r,s),o=Kp(r);return new Ri({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Kp(r);return new Ri({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Kp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ul extends Dr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ul.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ul(e,n,r,s)}}function By(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ul._fromErrorAndOperation(t,i,e,r):i})}async function lS(t,e,n=!1){const r=await ea(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ri._forOperation(t,"link",r)}/**
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
 */async function cS(t,e,n=!1){const{auth:r}=t;if(Dn(r.app))return Promise.reject(Ms(r));const s="reauthenticate";try{const i=await ea(t,By(r,s,e,t),n);Te(i.idToken,r,"internal-error");const o=ef(i.idToken);Te(o,r,"internal-error");const{sub:l}=o;return Te(t.uid===l,r,"user-mismatch"),Ri._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&lr(r,"user-mismatch"),i}}/**
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
 */async function uS(t,e,n=!1){if(Dn(t.app))return Promise.reject(Ms(t));const r="signIn",s=await By(t,r,e),i=await Ri._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function hS(t,e,n,r){return xt(t).onIdTokenChanged(e,n,r)}function fS(t,e,n){return xt(t).beforeAuthStateChanged(e,n)}function dS(t,e,n,r){return xt(t).onAuthStateChanged(e,n,r)}function pS(t){return xt(t).signOut()}const $l="__sak";/**
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
 */class qy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($l,"1"),this.storage.removeItem($l),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const mS=1e3,gS=10;class Hy extends qy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Fy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);z1()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,gS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},mS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hy.type="LOCAL";const _S=Hy;/**
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
 */class Wy extends qy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Wy.type="SESSION";const zy=Wy;/**
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
 */function yS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class pc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new pc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await yS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pc.receivers=[];/**
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
 */function sf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class vS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=sf("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Zn(){return window}function ES(t){Zn().location.href=t}/**
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
 */function Ky(){return typeof Zn().WorkerGlobalScope<"u"&&typeof Zn().importScripts=="function"}async function IS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function bS(){return Ky()?self:null}/**
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
 */const Gy="firebaseLocalStorageDb",wS=1,jl="firebaseLocalStorage",Qy="fbase_key";class _a{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mc(t,e){return t.transaction([jl],e?"readwrite":"readonly").objectStore(jl)}function AS(){const t=indexedDB.deleteDatabase(Gy);return new _a(t).toPromise()}function Zu(){const t=indexedDB.open(Gy,wS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(jl,{keyPath:Qy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(jl)?e(r):(r.close(),await AS(),e(await Zu()))})})}async function Gp(t,e,n){const r=mc(t,!0).put({[Qy]:e,value:n});return new _a(r).toPromise()}async function SS(t,e){const n=mc(t,!1).get(e),r=await new _a(n).toPromise();return r===void 0?null:r.value}function Qp(t,e){const n=mc(t,!0).delete(e);return new _a(n).toPromise()}const CS=800,RS=3;class Yy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>RS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ky()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pc._getInstance(bS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await IS(),!this.activeServiceWorker)return;this.sender=new vS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zu();return await Gp(e,$l,"1"),await Qp(e,$l),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>SS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=mc(s,!1).getAll();return new _a(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),CS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yy.type="LOCAL";const PS=Yy;new ma(3e4,6e4);/**
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
 */function Xy(t,e){return e?Ar(e):(Te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class of extends jy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ii(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ii(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ii(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kS(t){return uS(t.auth,new of(t),t.bypassAuthState)}function NS(t){const{auth:e,user:n}=t;return Te(n,e,"internal-error"),cS(n,new of(t),t.bypassAuthState)}async function DS(t){const{auth:e,user:n}=t;return Te(n,e,"internal-error"),lS(n,new of(t),t.bypassAuthState)}/**
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
 */class Jy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kS;case"linkViaPopup":case"linkViaRedirect":return DS;case"reauthViaPopup":case"reauthViaRedirect":return NS;default:lr(this.auth,"internal-error")}}resolve(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const OS=new ma(2e3,1e4);async function LS(t,e,n){if(Dn(t.app))return Promise.reject(Mn(t,"operation-not-supported-in-this-environment"));const r=dc(t);R1(t,e,rf);const s=Xy(r,n);return new Ds(r,"signInViaPopup",e,s).executeNotNull()}class Ds extends Jy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ds.currentPopupAction&&Ds.currentPopupAction.cancel(),Ds.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Te(e,this.auth,"internal-error"),e}async onExecution(){Rr(this.filter.length===1,"Popup operations only handle one event");const e=sf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ds.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,OS.get())};e()}}Ds.currentPopupAction=null;/**
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
 */const VS="pendingRedirect",fl=new Map;class MS extends Jy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fl.get(this.auth._key());if(!e){try{const r=await xS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fl.set(this.auth._key(),e)}return this.bypassAuthState||fl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xS(t,e){const n=$S(e),r=US(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function FS(t,e){fl.set(t._key(),e)}function US(t){return Ar(t._redirectPersistence)}function $S(t){return hl(VS,t.config.apiKey,t.name)}async function jS(t,e,n=!1){if(Dn(t.app))return Promise.reject(Ms(t));const r=dc(t),s=Xy(r,e),o=await new MS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const BS=600*1e3;class qS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Zy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Mn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=BS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yp(e))}saveEventToCache(e){this.cachedEventUids.add(Yp(e)),this.lastProcessedEventTime=Date.now()}}function Yp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Zy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zy(t);default:return!1}}/**
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
 */async function WS(t,e={}){return xi(t,"GET","/v1/projects",e)}/**
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
 */const zS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KS=/^https?/;async function GS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await WS(t);for(const n of e)try{if(QS(n))return}catch{}lr(t,"unauthorized-domain")}function QS(t){const e=Xu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!KS.test(n))return!1;if(zS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const YS=new ma(3e4,6e4);function Xp(){const t=Zn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function XS(t){return new Promise((e,n)=>{var r,s,i;function o(){Xp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xp(),n(Mn(t,"network-request-failed"))},timeout:YS.get()})}if(!((s=(r=Zn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Zn().gapi)===null||i===void 0)&&i.load)o();else{const l=tS("iframefcb");return Zn()[l]=()=>{gapi.load?o():n(Mn(t,"network-request-failed"))},Z1(`${eS()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw dl=null,e})}let dl=null;function JS(t){return dl=dl||XS(t),dl}/**
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
 */const ZS=new ma(5e3,15e3),eC="__/auth/iframe",tC="emulator/auth/iframe",nC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sC(t){const e=t.config;Te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Jh(e,tC):`https://${t.config.authDomain}/${eC}`,r={apiKey:e.apiKey,appName:t.name,v:Mi},s=rC.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${pa(r).slice(1)}`}async function iC(t){const e=await JS(t),n=Zn().gapi;return Te(n,t,"internal-error"),e.open({where:document.body,url:sC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Mn(t,"network-request-failed"),l=Zn().setTimeout(()=>{i(o)},ZS.get());function c(){Zn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const oC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aC=500,lC=600,cC="_blank",uC="http://localhost";class Jp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hC(t,e,n,r=aC,s=lC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},oC),{width:r.toString(),height:s.toString(),top:i,left:o}),u=tn().toLowerCase();n&&(l=Oy(u)?cC:n),Ny(u)&&(e=e||uC,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[T,P])=>`${m}${T}=${P},`,"");if(W1(u)&&l!=="_self")return fC(e||"",l),new Jp(null);const p=window.open(e||"",l,f);Te(p,t,"popup-blocked");try{p.focus()}catch{}return new Jp(p)}function fC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const dC="__/auth/handler",pC="emulator/auth/handler",mC=encodeURIComponent("fac");async function Zp(t,e,n,r,s,i){Te(t.config.authDomain,t,"auth-domain-config-required"),Te(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Mi,eventId:s};if(e instanceof rf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof ga){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${mC}=${encodeURIComponent(c)}`:"";return`${gC(t)}?${pa(l).slice(1)}${u}`}function gC({config:t}){return t.emulator?Jh(t,pC):`https://${t.authDomain}/${dC}`}/**
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
 */const fu="webStorageSupport";class _C{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zy,this._completeRedirectFn=jS,this._overrideRedirectResult=FS}async _openPopup(e,n,r,s){var i;Rr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Zp(e,n,r,Xu(),s);return hC(e,o,sf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Zp(e,n,r,Xu(),s);return ES(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Rr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await iC(e),r=new qS(e);return n.register("authEvent",s=>(Te(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fu,{type:fu},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[fu];o!==void 0&&n(!!o),lr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=GS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Fy()||Dy()||tf()}}const yC=_C;var em="@firebase/auth",tm="1.10.8";/**
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
 */class vC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function EC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function IC(t){Ci(new Bs("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Te(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uy(t)},u=new X1(r,s,i,c);return rS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ci(new Bs("auth-internal",e=>{const n=dc(e.getProvider("auth").getImmediate());return(r=>new vC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jr(em,tm,EC(t)),Jr(em,tm,"esm2017")}/**
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
 */const TC=300,bC=my("authIdTokenMaxAge")||TC;let nm=null;const wC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>bC)return;const s=n==null?void 0:n.token;nm!==s&&(nm=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function AC(t=Iy()){const e=Gh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=nS(t,{popupRedirectResolver:yC,persistence:[PS,_S,zy]}),r=my("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=wC(i.toString());fS(n,o,()=>o(n.currentUser)),hS(n,l=>o(l))}}const s=dy("auth");return s&&sS(n,`http://${s}`),n}function SC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}J1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Mn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",SC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});IC("Browser");var rm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zr,ev;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,E){function I(){}I.prototype=E.prototype,_.D=E.prototype,_.prototype=new I,_.prototype.constructor=_,_.C=function(S,k,x){for(var A=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)A[Ve-2]=arguments[Ve];return E.prototype[k].apply(S,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(_,E,I){I||(I=0);var S=Array(16);if(typeof E=="string")for(var k=0;16>k;++k)S[k]=E.charCodeAt(I++)|E.charCodeAt(I++)<<8|E.charCodeAt(I++)<<16|E.charCodeAt(I++)<<24;else for(k=0;16>k;++k)S[k]=E[I++]|E[I++]<<8|E[I++]<<16|E[I++]<<24;E=_.g[0],I=_.g[1],k=_.g[2];var x=_.g[3],A=E+(x^I&(k^x))+S[0]+3614090360&4294967295;E=I+(A<<7&4294967295|A>>>25),A=x+(k^E&(I^k))+S[1]+3905402710&4294967295,x=E+(A<<12&4294967295|A>>>20),A=k+(I^x&(E^I))+S[2]+606105819&4294967295,k=x+(A<<17&4294967295|A>>>15),A=I+(E^k&(x^E))+S[3]+3250441966&4294967295,I=k+(A<<22&4294967295|A>>>10),A=E+(x^I&(k^x))+S[4]+4118548399&4294967295,E=I+(A<<7&4294967295|A>>>25),A=x+(k^E&(I^k))+S[5]+1200080426&4294967295,x=E+(A<<12&4294967295|A>>>20),A=k+(I^x&(E^I))+S[6]+2821735955&4294967295,k=x+(A<<17&4294967295|A>>>15),A=I+(E^k&(x^E))+S[7]+4249261313&4294967295,I=k+(A<<22&4294967295|A>>>10),A=E+(x^I&(k^x))+S[8]+1770035416&4294967295,E=I+(A<<7&4294967295|A>>>25),A=x+(k^E&(I^k))+S[9]+2336552879&4294967295,x=E+(A<<12&4294967295|A>>>20),A=k+(I^x&(E^I))+S[10]+4294925233&4294967295,k=x+(A<<17&4294967295|A>>>15),A=I+(E^k&(x^E))+S[11]+2304563134&4294967295,I=k+(A<<22&4294967295|A>>>10),A=E+(x^I&(k^x))+S[12]+1804603682&4294967295,E=I+(A<<7&4294967295|A>>>25),A=x+(k^E&(I^k))+S[13]+4254626195&4294967295,x=E+(A<<12&4294967295|A>>>20),A=k+(I^x&(E^I))+S[14]+2792965006&4294967295,k=x+(A<<17&4294967295|A>>>15),A=I+(E^k&(x^E))+S[15]+1236535329&4294967295,I=k+(A<<22&4294967295|A>>>10),A=E+(k^x&(I^k))+S[1]+4129170786&4294967295,E=I+(A<<5&4294967295|A>>>27),A=x+(I^k&(E^I))+S[6]+3225465664&4294967295,x=E+(A<<9&4294967295|A>>>23),A=k+(E^I&(x^E))+S[11]+643717713&4294967295,k=x+(A<<14&4294967295|A>>>18),A=I+(x^E&(k^x))+S[0]+3921069994&4294967295,I=k+(A<<20&4294967295|A>>>12),A=E+(k^x&(I^k))+S[5]+3593408605&4294967295,E=I+(A<<5&4294967295|A>>>27),A=x+(I^k&(E^I))+S[10]+38016083&4294967295,x=E+(A<<9&4294967295|A>>>23),A=k+(E^I&(x^E))+S[15]+3634488961&4294967295,k=x+(A<<14&4294967295|A>>>18),A=I+(x^E&(k^x))+S[4]+3889429448&4294967295,I=k+(A<<20&4294967295|A>>>12),A=E+(k^x&(I^k))+S[9]+568446438&4294967295,E=I+(A<<5&4294967295|A>>>27),A=x+(I^k&(E^I))+S[14]+3275163606&4294967295,x=E+(A<<9&4294967295|A>>>23),A=k+(E^I&(x^E))+S[3]+4107603335&4294967295,k=x+(A<<14&4294967295|A>>>18),A=I+(x^E&(k^x))+S[8]+1163531501&4294967295,I=k+(A<<20&4294967295|A>>>12),A=E+(k^x&(I^k))+S[13]+2850285829&4294967295,E=I+(A<<5&4294967295|A>>>27),A=x+(I^k&(E^I))+S[2]+4243563512&4294967295,x=E+(A<<9&4294967295|A>>>23),A=k+(E^I&(x^E))+S[7]+1735328473&4294967295,k=x+(A<<14&4294967295|A>>>18),A=I+(x^E&(k^x))+S[12]+2368359562&4294967295,I=k+(A<<20&4294967295|A>>>12),A=E+(I^k^x)+S[5]+4294588738&4294967295,E=I+(A<<4&4294967295|A>>>28),A=x+(E^I^k)+S[8]+2272392833&4294967295,x=E+(A<<11&4294967295|A>>>21),A=k+(x^E^I)+S[11]+1839030562&4294967295,k=x+(A<<16&4294967295|A>>>16),A=I+(k^x^E)+S[14]+4259657740&4294967295,I=k+(A<<23&4294967295|A>>>9),A=E+(I^k^x)+S[1]+2763975236&4294967295,E=I+(A<<4&4294967295|A>>>28),A=x+(E^I^k)+S[4]+1272893353&4294967295,x=E+(A<<11&4294967295|A>>>21),A=k+(x^E^I)+S[7]+4139469664&4294967295,k=x+(A<<16&4294967295|A>>>16),A=I+(k^x^E)+S[10]+3200236656&4294967295,I=k+(A<<23&4294967295|A>>>9),A=E+(I^k^x)+S[13]+681279174&4294967295,E=I+(A<<4&4294967295|A>>>28),A=x+(E^I^k)+S[0]+3936430074&4294967295,x=E+(A<<11&4294967295|A>>>21),A=k+(x^E^I)+S[3]+3572445317&4294967295,k=x+(A<<16&4294967295|A>>>16),A=I+(k^x^E)+S[6]+76029189&4294967295,I=k+(A<<23&4294967295|A>>>9),A=E+(I^k^x)+S[9]+3654602809&4294967295,E=I+(A<<4&4294967295|A>>>28),A=x+(E^I^k)+S[12]+3873151461&4294967295,x=E+(A<<11&4294967295|A>>>21),A=k+(x^E^I)+S[15]+530742520&4294967295,k=x+(A<<16&4294967295|A>>>16),A=I+(k^x^E)+S[2]+3299628645&4294967295,I=k+(A<<23&4294967295|A>>>9),A=E+(k^(I|~x))+S[0]+4096336452&4294967295,E=I+(A<<6&4294967295|A>>>26),A=x+(I^(E|~k))+S[7]+1126891415&4294967295,x=E+(A<<10&4294967295|A>>>22),A=k+(E^(x|~I))+S[14]+2878612391&4294967295,k=x+(A<<15&4294967295|A>>>17),A=I+(x^(k|~E))+S[5]+4237533241&4294967295,I=k+(A<<21&4294967295|A>>>11),A=E+(k^(I|~x))+S[12]+1700485571&4294967295,E=I+(A<<6&4294967295|A>>>26),A=x+(I^(E|~k))+S[3]+2399980690&4294967295,x=E+(A<<10&4294967295|A>>>22),A=k+(E^(x|~I))+S[10]+4293915773&4294967295,k=x+(A<<15&4294967295|A>>>17),A=I+(x^(k|~E))+S[1]+2240044497&4294967295,I=k+(A<<21&4294967295|A>>>11),A=E+(k^(I|~x))+S[8]+1873313359&4294967295,E=I+(A<<6&4294967295|A>>>26),A=x+(I^(E|~k))+S[15]+4264355552&4294967295,x=E+(A<<10&4294967295|A>>>22),A=k+(E^(x|~I))+S[6]+2734768916&4294967295,k=x+(A<<15&4294967295|A>>>17),A=I+(x^(k|~E))+S[13]+1309151649&4294967295,I=k+(A<<21&4294967295|A>>>11),A=E+(k^(I|~x))+S[4]+4149444226&4294967295,E=I+(A<<6&4294967295|A>>>26),A=x+(I^(E|~k))+S[11]+3174756917&4294967295,x=E+(A<<10&4294967295|A>>>22),A=k+(E^(x|~I))+S[2]+718787259&4294967295,k=x+(A<<15&4294967295|A>>>17),A=I+(x^(k|~E))+S[9]+3951481745&4294967295,_.g[0]=_.g[0]+E&4294967295,_.g[1]=_.g[1]+(k+(A<<21&4294967295|A>>>11))&4294967295,_.g[2]=_.g[2]+k&4294967295,_.g[3]=_.g[3]+x&4294967295}r.prototype.u=function(_,E){E===void 0&&(E=_.length);for(var I=E-this.blockSize,S=this.B,k=this.h,x=0;x<E;){if(k==0)for(;x<=I;)s(this,_,x),x+=this.blockSize;if(typeof _=="string"){for(;x<E;)if(S[k++]=_.charCodeAt(x++),k==this.blockSize){s(this,S),k=0;break}}else for(;x<E;)if(S[k++]=_[x++],k==this.blockSize){s(this,S),k=0;break}}this.h=k,this.o+=E},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var E=1;E<_.length-8;++E)_[E]=0;var I=8*this.o;for(E=_.length-8;E<_.length;++E)_[E]=I&255,I/=256;for(this.u(_),_=Array(16),E=I=0;4>E;++E)for(var S=0;32>S;S+=8)_[I++]=this.g[E]>>>S&255;return _};function i(_,E){var I=l;return Object.prototype.hasOwnProperty.call(I,_)?I[_]:I[_]=E(_)}function o(_,E){this.h=E;for(var I=[],S=!0,k=_.length-1;0<=k;k--){var x=_[k]|0;S&&x==E||(I[k]=x,S=!1)}this.g=I}var l={};function c(_){return-128<=_&&128>_?i(_,function(E){return new o([E|0],0>E?-1:0)}):new o([_|0],0>_?-1:0)}function u(_){if(isNaN(_)||!isFinite(_))return p;if(0>_)return O(u(-_));for(var E=[],I=1,S=0;_>=I;S++)E[S]=_/I|0,I*=4294967296;return new o(E,0)}function f(_,E){if(_.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(_.charAt(0)=="-")return O(f(_.substring(1),E));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=u(Math.pow(E,8)),S=p,k=0;k<_.length;k+=8){var x=Math.min(8,_.length-k),A=parseInt(_.substring(k,k+x),E);8>x?(x=u(Math.pow(E,x)),S=S.j(x).add(u(A))):(S=S.j(I),S=S.add(u(A)))}return S}var p=c(0),m=c(1),T=c(16777216);t=o.prototype,t.m=function(){if(V(this))return-O(this).m();for(var _=0,E=1,I=0;I<this.g.length;I++){var S=this.i(I);_+=(0<=S?S:4294967296+S)*E,E*=4294967296}return _},t.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(P(this))return"0";if(V(this))return"-"+O(this).toString(_);for(var E=u(Math.pow(_,6)),I=this,S="";;){var k=U(I,E).g;I=N(I,k.j(E));var x=((0<I.g.length?I.g[0]:I.h)>>>0).toString(_);if(I=k,P(I))return x+S;for(;6>x.length;)x="0"+x;S=x+S}},t.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function P(_){if(_.h!=0)return!1;for(var E=0;E<_.g.length;E++)if(_.g[E]!=0)return!1;return!0}function V(_){return _.h==-1}t.l=function(_){return _=N(this,_),V(_)?-1:P(_)?0:1};function O(_){for(var E=_.g.length,I=[],S=0;S<E;S++)I[S]=~_.g[S];return new o(I,~_.h).add(m)}t.abs=function(){return V(this)?O(this):this},t.add=function(_){for(var E=Math.max(this.g.length,_.g.length),I=[],S=0,k=0;k<=E;k++){var x=S+(this.i(k)&65535)+(_.i(k)&65535),A=(x>>>16)+(this.i(k)>>>16)+(_.i(k)>>>16);S=A>>>16,x&=65535,A&=65535,I[k]=A<<16|x}return new o(I,I[I.length-1]&-2147483648?-1:0)};function N(_,E){return _.add(O(E))}t.j=function(_){if(P(this)||P(_))return p;if(V(this))return V(_)?O(this).j(O(_)):O(O(this).j(_));if(V(_))return O(this.j(O(_)));if(0>this.l(T)&&0>_.l(T))return u(this.m()*_.m());for(var E=this.g.length+_.g.length,I=[],S=0;S<2*E;S++)I[S]=0;for(S=0;S<this.g.length;S++)for(var k=0;k<_.g.length;k++){var x=this.i(S)>>>16,A=this.i(S)&65535,Ve=_.i(k)>>>16,Ne=_.i(k)&65535;I[2*S+2*k]+=A*Ne,F(I,2*S+2*k),I[2*S+2*k+1]+=x*Ne,F(I,2*S+2*k+1),I[2*S+2*k+1]+=A*Ve,F(I,2*S+2*k+1),I[2*S+2*k+2]+=x*Ve,F(I,2*S+2*k+2)}for(S=0;S<E;S++)I[S]=I[2*S+1]<<16|I[2*S];for(S=E;S<2*E;S++)I[S]=0;return new o(I,0)};function F(_,E){for(;(_[E]&65535)!=_[E];)_[E+1]+=_[E]>>>16,_[E]&=65535,E++}function H(_,E){this.g=_,this.h=E}function U(_,E){if(P(E))throw Error("division by zero");if(P(_))return new H(p,p);if(V(_))return E=U(O(_),E),new H(O(E.g),O(E.h));if(V(E))return E=U(_,O(E)),new H(O(E.g),E.h);if(30<_.g.length){if(V(_)||V(E))throw Error("slowDivide_ only works with positive integers.");for(var I=m,S=E;0>=S.l(_);)I=Z(I),S=Z(S);var k=ne(I,1),x=ne(S,1);for(S=ne(S,2),I=ne(I,2);!P(S);){var A=x.add(S);0>=A.l(_)&&(k=k.add(I),x=A),S=ne(S,1),I=ne(I,1)}return E=N(_,k.j(E)),new H(k,E)}for(k=p;0<=_.l(E);){for(I=Math.max(1,Math.floor(_.m()/E.m())),S=Math.ceil(Math.log(I)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),x=u(I),A=x.j(E);V(A)||0<A.l(_);)I-=S,x=u(I),A=x.j(E);P(x)&&(x=m),k=k.add(x),_=N(_,A)}return new H(k,_)}t.A=function(_){return U(this,_).h},t.and=function(_){for(var E=Math.max(this.g.length,_.g.length),I=[],S=0;S<E;S++)I[S]=this.i(S)&_.i(S);return new o(I,this.h&_.h)},t.or=function(_){for(var E=Math.max(this.g.length,_.g.length),I=[],S=0;S<E;S++)I[S]=this.i(S)|_.i(S);return new o(I,this.h|_.h)},t.xor=function(_){for(var E=Math.max(this.g.length,_.g.length),I=[],S=0;S<E;S++)I[S]=this.i(S)^_.i(S);return new o(I,this.h^_.h)};function Z(_){for(var E=_.g.length+1,I=[],S=0;S<E;S++)I[S]=_.i(S)<<1|_.i(S-1)>>>31;return new o(I,_.h)}function ne(_,E){var I=E>>5;E%=32;for(var S=_.g.length-I,k=[],x=0;x<S;x++)k[x]=0<E?_.i(x+I)>>>E|_.i(x+I+1)<<32-E:_.i(x+I);return new o(k,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ev=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Zr=o}).apply(typeof rm<"u"?rm:typeof self<"u"?self:typeof window<"u"?window:{});var Za=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tv,To,nv,pl,eh,rv,sv,iv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Za=="object"&&Za];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var j=a[g];if(!(j in d))break e;d=d[j]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var d=0,g=!1,j={next:function(){if(!g&&d<a.length){var K=d++;return{value:h(K,a[K]),done:!1}}return g=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,g),a.apply(h,j)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function T(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function P(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,j,K){for(var le=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)le[Ze-2]=arguments[Ze];return h.prototype[j].apply(g,le)}}function V(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function O(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(c(g)){const j=a.length||0,K=g.length||0;a.length=j+K;for(let le=0;le<K;le++)a[j+le]=g[le]}else a.push(g)}}class N{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function F(a){return/^[\s\xa0]*$/.test(a)}function H(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function U(a){return U[" "](a),a}U[" "]=function(){};var Z=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function ne(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function _(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function E(a){const h={};for(const d in a)h[d]=a[d];return h}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,h){let d,g;for(let j=1;j<arguments.length;j++){g=arguments[j];for(d in g)a[d]=g[d];for(let K=0;K<I.length;K++)d=I[K],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function k(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function x(a){l.setTimeout(()=>{throw a},0)}function A(){var a=gt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Ve{constructor(){this.h=this.g=null}add(h,d){const g=Ne.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Ne=new N(()=>new it,a=>a.reset());class it{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Re,Ce=!1,gt=new Ve,Dt=()=>{const a=l.Promise.resolve(void 0);Re=()=>{a.then(Xe)}};var Xe=()=>{for(var a;a=A();){try{a.h.call(a.g)}catch(d){x(d)}var h=Ne;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Ce=!1};function je(){this.s=this.s,this.C=this.C}je.prototype.s=!1,je.prototype.ma=function(){this.s||(this.s=!0,this.N())},je.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ot(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var Cn=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a})();function ht(a,h){if(ot.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(Z){e:{try{U(h.nodeName);var j=!0;break e}catch{}j=!1}j||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:cn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ht.aa.h.call(this)}}P(ht,ot);var cn={2:"touch",3:"pen",4:"mouse"};ht.prototype.h=function(){ht.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var un="closure_listenable_"+(1e6*Math.random()|0),Rn=0;function mn(a,h,d,g,j){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=j,this.key=++Rn,this.da=this.fa=!1}function nn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function w(a){this.src=a,this.g={},this.h=0}w.prototype.add=function(a,h,d,g,j){var K=a.toString();a=this.g[K],a||(a=this.g[K]=[],this.h++);var le=W(a,h,g,j);return-1<le?(h=a[le],d||(h.fa=!1)):(h=new mn(h,this.src,K,!!g,j),h.fa=d,a.push(h)),h};function D(a,h){var d=h.type;if(d in a.g){var g=a.g[d],j=Array.prototype.indexOf.call(g,h,void 0),K;(K=0<=j)&&Array.prototype.splice.call(g,j,1),K&&(nn(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function W(a,h,d,g){for(var j=0;j<a.length;++j){var K=a[j];if(!K.da&&K.listener==h&&K.capture==!!d&&K.ha==g)return j}return-1}var te="closure_lm_"+(1e6*Math.random()|0),G={};function X(a,h,d,g,j){if(Array.isArray(h)){for(var K=0;K<h.length;K++)X(a,h[K],d,g,j);return null}return d=_e(d),a&&a[un]?a.K(h,d,u(g)?!!g.capture:!1,j):se(a,h,d,!1,g,j)}function se(a,h,d,g,j,K){if(!h)throw Error("Invalid event type");var le=u(j)?!!j.capture:!!j,Ze=ae(a);if(Ze||(a[te]=Ze=new w(a)),d=Ze.add(h,d,g,le,K),d.proxy)return d;if(g=oe(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)Cn||(j=le),j===void 0&&(j=!1),a.addEventListener(h.toString(),g,j);else if(a.attachEvent)a.attachEvent(B(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function oe(){function a(d){return h.call(a.src,a.listener,d)}const h=z;return a}function y(a,h,d,g,j){if(Array.isArray(h))for(var K=0;K<h.length;K++)y(a,h[K],d,g,j);else g=u(g)?!!g.capture:!!g,d=_e(d),a&&a[un]?(a=a.i,h=String(h).toString(),h in a.g&&(K=a.g[h],d=W(K,d,g,j),-1<d&&(nn(K[d]),Array.prototype.splice.call(K,d,1),K.length==0&&(delete a.g[h],a.h--)))):a&&(a=ae(a))&&(h=a.g[h.toString()],a=-1,h&&(a=W(h,d,g,j)),(d=-1<a?h[a]:null)&&v(d))}function v(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[un])D(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(B(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=ae(h))?(D(d,a),d.h==0&&(d.src=null,h[te]=null)):nn(a)}}}function B(a){return a in G?G[a]:G[a]="on"+a}function z(a,h){if(a.da)a=!0;else{h=new ht(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&v(a),a=d.call(g,h)}return a}function ae(a){return a=a[te],a instanceof w?a:null}var ce="__closure_events_fn_"+(1e9*Math.random()>>>0);function _e(a){return typeof a=="function"?a:(a[ce]||(a[ce]=function(h){return a.handleEvent(h)}),a[ce])}function de(){je.call(this),this.i=new w(this),this.M=this,this.F=null}P(de,je),de.prototype[un]=!0,de.prototype.removeEventListener=function(a,h,d,g){y(this,a,h,d,g)};function $(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new ot(h,a);else if(h instanceof ot)h.target=h.target||a;else{var j=h;h=new ot(g,a),S(h,j)}if(j=!0,d)for(var K=d.length-1;0<=K;K--){var le=h.g=d[K];j=Q(le,g,!0,h)&&j}if(le=h.g=a,j=Q(le,g,!0,h)&&j,j=Q(le,g,!1,h)&&j,d)for(K=0;K<d.length;K++)le=h.g=d[K],j=Q(le,g,!1,h)&&j}de.prototype.N=function(){if(de.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)nn(d[g]);delete a.g[h],a.h--}}this.F=null},de.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},de.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function Q(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var j=!0,K=0;K<h.length;++K){var le=h[K];if(le&&!le.da&&le.capture==d){var Ze=le.listener,$t=le.ha||le.src;le.fa&&D(a.i,le),j=Ze.call($t,g)!==!1&&j}}return j&&!g.defaultPrevented}function ge(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function be(a){a.g=ge(()=>{a.g=null,a.i&&(a.i=!1,be(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Ue extends je{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:be(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qe(a){je.call(this),this.h=a,this.g={}}P(Qe,je);var Ft=[];function bt(a){ne(a.g,function(h,d){this.g.hasOwnProperty(d)&&v(h)},a),a.g={}}Qe.prototype.N=function(){Qe.aa.N.call(this),bt(this)},Qe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ut=l.JSON.stringify,En=l.JSON.parse,gs=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function ur(){}ur.prototype.h=null;function Aa(a){return a.h||(a.h=a.i())}function qi(){}var Bn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ys(){ot.call(this,"d")}P(Ys,ot);function Hi(){ot.call(this,"c")}P(Hi,ot);var hr={},Sa=null;function _s(){return Sa=Sa||new de}hr.La="serverreachability";function Wi(a){ot.call(this,hr.La,a)}P(Wi,ot);function ys(a){const h=_s();$(h,new Wi(h))}hr.STAT_EVENT="statevent";function Xs(a,h){ot.call(this,hr.STAT_EVENT,a),this.stat=h}P(Xs,ot);function Ot(a){const h=_s();$(h,new Xs(h,a))}hr.Ma="timingevent";function zi(a,h){ot.call(this,hr.Ma,a),this.size=h}P(zi,ot);function Or(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Lr(){this.g=!0}Lr.prototype.xa=function(){this.g=!1};function Dc(a,h,d,g,j,K){a.info(function(){if(a.g)if(K)for(var le="",Ze=K.split("&"),$t=0;$t<Ze.length;$t++){var $e=Ze[$t].split("=");if(1<$e.length){var Kt=$e[0];$e=$e[1];var Gt=Kt.split("_");le=2<=Gt.length&&Gt[1]=="type"?le+(Kt+"="+$e+"&"):le+(Kt+"=redacted&")}}else le=null;else le=K;return"XMLHTTP REQ ("+g+") [attempt "+j+"]: "+h+`
`+d+`
`+le})}function Js(a,h,d,g,j,K,le){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+j+"]: "+h+`
`+d+`
`+K+" "+le})}function Vr(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Ki(a,d)+(g?" "+g:"")})}function Oc(a,h){a.info(function(){return"TIMEOUT: "+h})}Lr.prototype.info=function(){};function Ki(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var j=g[1];if(Array.isArray(j)&&!(1>j.length)){var K=j[0];if(K!="noop"&&K!="stop"&&K!="close")for(var le=1;le<j.length;le++)j[le]=""}}}}return Ut(d)}catch{return h}}var Zs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ca={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Gi;function ei(){}P(ei,ur),ei.prototype.g=function(){return new XMLHttpRequest},ei.prototype.i=function(){return{}},Gi=new ei;function Pn(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new Qe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Qi}function Qi(){this.i=null,this.g="",this.h=!1}var Yi={},Xi={};function Ji(a,h,d){a.L=1,a.v=ka(gn(h)),a.m=d,a.P=!0,Zi(a,null)}function Zi(a,h){a.F=Date.now(),ti(a),a.A=gn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Kf(d.i,"t",g),a.C=0,d=a.j.J,a.h=new Qi,a.g=hd(a.j,d?h:null,!a.m),0<a.O&&(a.M=new Ue(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var j="readystatechange";Array.isArray(j)||(j&&(Ft[0]=j.toString()),j=Ft);for(var K=0;K<j.length;K++){var le=X(d,j[K],g||h.handleEvent,!1,h.h||h);if(!le)break;h.g[le.key]=le}h=a.H?E(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ys(),Dc(a.i,a.u,a.A,a.l,a.R,a.m)}Pn.prototype.ca=function(a){a=a.target;const h=this.M;h&&fr(a)==3?h.j():this.Y(a)},Pn.prototype.Y=function(a){try{if(a==this.g)e:{const Gt=fr(this.g);var h=this.g.Ba();const ii=this.g.Z();if(!(3>Gt)&&(Gt!=3||this.g&&(this.h.h||this.g.oa()||ed(this.g)))){this.J||Gt!=4||h==7||(h==8||0>=ii?ys(3):ys(2)),vs(this);var d=this.g.Z();this.X=d;t:if(Ra(this)){var g=ed(this.g);a="";var j=g.length,K=fr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qn(this),Es(this);var le="";break t}this.h.i=new l.TextDecoder}for(h=0;h<j;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(K&&h==j-1)});g.length=0,this.h.g+=a,this.C=0,le=this.h.g}else le=this.g.oa();if(this.o=d==200,Js(this.i,this.u,this.A,this.l,this.R,Gt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Ze,$t=this.g;if((Ze=$t.g?$t.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(Ze)){var $e=Ze;break t}}$e=null}if(d=$e)Vr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,no(this,d);else{this.o=!1,this.s=3,Ot(12),qn(this),Es(this);break e}}if(this.P){d=!0;let kn;for(;!this.J&&this.C<le.length;)if(kn=eo(this,le),kn==Xi){Gt==4&&(this.s=4,Ot(14),d=!1),Vr(this.i,this.l,null,"[Incomplete Response]");break}else if(kn==Yi){this.s=4,Ot(15),Vr(this.i,this.l,le,"[Invalid Chunk]"),d=!1;break}else Vr(this.i,this.l,kn,null),no(this,kn);if(Ra(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Gt!=4||le.length!=0||this.h.h||(this.s=1,Ot(16),d=!1),this.o=this.o&&d,!d)Vr(this.i,this.l,le,"[Invalid Chunked Response]"),qn(this),Es(this);else if(0<le.length&&!this.W){this.W=!0;var Kt=this.j;Kt.g==this&&Kt.ba&&!Kt.M&&(Kt.j.info("Great, no buffering proxy detected. Bytes received: "+le.length),Fc(Kt),Kt.M=!0,Ot(11))}}else Vr(this.i,this.l,le,null),no(this,le);Gt==4&&qn(this),this.o&&!this.J&&(Gt==4?ad(this.j,this):(this.o=!1,ti(this)))}else QE(this.g),d==400&&0<le.indexOf("Unknown SID")?(this.s=3,Ot(12)):(this.s=0,Ot(13)),qn(this),Es(this)}}}catch{}finally{}};function Ra(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function eo(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?Xi:(d=Number(h.substring(d,g)),isNaN(d)?Yi:(g+=1,g+d>h.length?Xi:(h=h.slice(g,g+d),a.C=g+d,h)))}Pn.prototype.cancel=function(){this.J=!0,qn(this)};function ti(a){a.S=Date.now()+a.I,to(a,a.I)}function to(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Or(m(a.ba,a),h)}function vs(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Pn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Oc(this.i,this.A),this.L!=2&&(ys(),Ot(17)),qn(this),this.s=2,Es(this)):to(this,this.S-a)};function Es(a){a.j.G==0||a.J||ad(a.j,a)}function qn(a){vs(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,bt(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function no(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||M(d.h,a))){if(!a.K&&M(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var j=g;if(j[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Ma(d),La(d);else break e;xc(d),Ot(18)}}else d.za=j[1],0<d.za-d.T&&37500>j[2]&&d.F&&d.v==0&&!d.C&&(d.C=Or(m(d.Za,d),6e3));if(1>=b(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Is(d,11)}else if((a.K||d.g==a)&&Ma(d),!F(h))for(j=d.Da.g.parse(h),h=0;h<j.length;h++){let $e=j[h];if(d.T=$e[0],$e=$e[1],d.G==2)if($e[0]=="c"){d.K=$e[1],d.ia=$e[2];const Kt=$e[3];Kt!=null&&(d.la=Kt,d.j.info("VER="+d.la));const Gt=$e[4];Gt!=null&&(d.Aa=Gt,d.j.info("SVER="+d.Aa));const ii=$e[5];ii!=null&&typeof ii=="number"&&0<ii&&(g=1.5*ii,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const kn=a.g;if(kn){const Fa=kn.g?kn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fa){var K=g.h;K.g||Fa.indexOf("spdy")==-1&&Fa.indexOf("quic")==-1&&Fa.indexOf("h2")==-1||(K.j=K.l,K.g=new Set,K.h&&(re(K,K.h),K.h=null))}if(g.D){const Uc=kn.g?kn.g.getResponseHeader("X-HTTP-Session-Id"):null;Uc&&(g.ya=Uc,Je(g.I,g.D,Uc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var le=a;if(g.qa=ud(g,g.J?g.ia:null,g.W),le.K){Ee(g.h,le);var Ze=le,$t=g.L;$t&&(Ze.I=$t),Ze.B&&(vs(Ze),ti(Ze)),g.g=le}else id(g);0<d.i.length&&Va(d)}else $e[0]!="stop"&&$e[0]!="close"||Is(d,7);else d.G==3&&($e[0]=="stop"||$e[0]=="close"?$e[0]=="stop"?Is(d,7):Mc(d):$e[0]!="noop"&&d.l&&d.l.ta($e),d.v=0)}}ys(4)}catch{}}var Lc=class{constructor(a,h){this.g=a,this.map=h}};function L(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function C(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function b(a){return a.h?1:a.g?a.g.size:0}function M(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function re(a,h){a.g?a.g.add(h):a.h=h}function Ee(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}L.prototype.cancel=function(){if(this.i=Pe(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Pe(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return V(a.i)}function De(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function Fe(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function at(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=Fe(a),g=De(a),j=g.length,K=0;K<j;K++)h.call(void 0,g[K],d&&d[K],a)}var zt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ro(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),j=null;if(0<=g){var K=a[d].substring(0,g);j=a[d].substring(g+1)}else K=a[d];h(K,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function rn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof rn){this.h=a.h,ni(this,a.j),this.o=a.o,this.g=a.g,Mr(this,a.s),this.l=a.l;var h=a.i,d=new oo;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Pa(this,d),this.m=a.m}else a&&(h=String(a).match(zt))?(this.h=!1,ni(this,h[1]||"",!0),this.o=so(h[2]||""),this.g=so(h[3]||"",!0),Mr(this,h[4]),this.l=so(h[5]||"",!0),Pa(this,h[6]||"",!0),this.m=so(h[7]||"")):(this.h=!1,this.i=new oo(null,this.h))}rn.prototype.toString=function(){var a=[],h=this.j;h&&a.push(io(h,Hf,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(io(h,Hf,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(io(d,d.charAt(0)=="/"?UE:FE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",io(d,jE)),a.join("")};function gn(a){return new rn(a)}function ni(a,h,d){a.j=d?so(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Mr(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Pa(a,h,d){h instanceof oo?(a.i=h,BE(a.i,a.h)):(d||(h=io(h,$E)),a.i=new oo(h,a.h))}function Je(a,h,d){a.i.set(h,d)}function ka(a){return Je(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function so(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function io(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,xE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function xE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Hf=/[#\/\?@]/g,FE=/[#\?:]/g,UE=/[#\?]/g,$E=/[#\?@]/g,jE=/#/g;function oo(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function xr(a){a.g||(a.g=new Map,a.h=0,a.i&&ro(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=oo.prototype,t.add=function(a,h){xr(this),this.i=null,a=ri(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Wf(a,h){xr(a),h=ri(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function zf(a,h){return xr(a),h=ri(a,h),a.g.has(h)}t.forEach=function(a,h){xr(this),this.g.forEach(function(d,g){d.forEach(function(j){a.call(h,j,g,this)},this)},this)},t.na=function(){xr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const j=a[g];for(let K=0;K<j.length;K++)d.push(h[g])}return d},t.V=function(a){xr(this);let h=[];if(typeof a=="string")zf(this,a)&&(h=h.concat(this.g.get(ri(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return xr(this),this.i=null,a=ri(this,a),zf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Kf(a,h,d){Wf(a,h),0<d.length&&(a.i=null,a.g.set(ri(a,h),V(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const K=encodeURIComponent(String(g)),le=this.V(g);for(g=0;g<le.length;g++){var j=K;le[g]!==""&&(j+="="+encodeURIComponent(String(le[g]))),a.push(j)}}return this.i=a.join("&")};function ri(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function BE(a,h){h&&!a.j&&(xr(a),a.i=null,a.g.forEach(function(d,g){var j=g.toLowerCase();g!=j&&(Wf(this,g),Kf(this,j,d))},a)),a.j=h}function qE(a,h){const d=new Lr;if(l.Image){const g=new Image;g.onload=T(Fr,d,"TestLoadImage: loaded",!0,h,g),g.onerror=T(Fr,d,"TestLoadImage: error",!1,h,g),g.onabort=T(Fr,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=T(Fr,d,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function HE(a,h){const d=new Lr,g=new AbortController,j=setTimeout(()=>{g.abort(),Fr(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(K=>{clearTimeout(j),K.ok?Fr(d,"TestPingServer: ok",!0,h):Fr(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(j),Fr(d,"TestPingServer: error",!1,h)})}function Fr(a,h,d,g,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),g(d)}catch{}}function WE(){this.g=new gs}function zE(a,h,d){const g=d||"";try{at(a,function(j,K){let le=j;u(j)&&(le=Ut(j)),h.push(g+K+"="+encodeURIComponent(le))})}catch(j){throw h.push(g+"type="+encodeURIComponent("_badmap")),j}}function Na(a){this.l=a.Ub||null,this.j=a.eb||!1}P(Na,ur),Na.prototype.g=function(){return new Da(this.l,this.j)},Na.prototype.i=(function(a){return function(){return a}})({});function Da(a,h){de.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Da,de),t=Da.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,lo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ao(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,lo(this)),this.g&&(this.readyState=3,lo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Gf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Gf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ao(this):lo(this),this.readyState==3&&Gf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ao(this))},t.Qa=function(a){this.g&&(this.response=a,ao(this))},t.ga=function(){this.g&&ao(this)};function ao(a){a.readyState=4,a.l=null,a.j=null,a.v=null,lo(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function lo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Da.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Qf(a){let h="";return ne(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function Vc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Qf(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Je(a,h,d))}function _t(a){de.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(_t,de);var KE=/^https?$/i,GE=["POST","PUT"];t=_t.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Gi.g(),this.v=this.o?Aa(this.o):Aa(Gi),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(K){Yf(this,K);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var j in g)d.set(j,g[j]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const K of g.keys())d.set(K,g.get(K));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(K=>K.toLowerCase()=="content-type"),j=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(GE,h,void 0))||g||j||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[K,le]of d)this.g.setRequestHeader(K,le);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Zf(this),this.u=!0,this.g.send(a),this.u=!1}catch(K){Yf(this,K)}};function Yf(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Xf(a),Oa(a)}function Xf(a){a.A||(a.A=!0,$(a,"complete"),$(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,$(this,"complete"),$(this,"abort"),Oa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Oa(this,!0)),_t.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Jf(this):this.bb())},t.bb=function(){Jf(this)};function Jf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||fr(a)!=4||a.Z()!=2)){if(a.u&&fr(a)==4)ge(a.Ea,0,a);else if($(a,"readystatechange"),fr(a)==4){a.h=!1;try{const le=a.Z();e:switch(le){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=le===0){var j=String(a.D).match(zt)[1]||null;!j&&l.self&&l.self.location&&(j=l.self.location.protocol.slice(0,-1)),g=!KE.test(j?j.toLowerCase():"")}d=g}if(d)$(a,"complete"),$(a,"success");else{a.m=6;try{var K=2<fr(a)?a.g.statusText:""}catch{K=""}a.l=K+" ["+a.Z()+"]",Xf(a)}}finally{Oa(a)}}}}function Oa(a,h){if(a.g){Zf(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||$(a,"ready");try{d.onreadystatechange=g}catch{}}}function Zf(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function fr(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<fr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),En(h)}};function ed(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function QE(a){const h={};a=(a.g&&2<=fr(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(F(a[g]))continue;var d=k(a[g]);const j=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const K=h[j]||[];h[j]=K,K.push(d)}_(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function co(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function td(a){this.Aa=0,this.i=[],this.j=new Lr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=co("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=co("baseRetryDelayMs",5e3,a),this.cb=co("retryDelaySeedMs",1e4,a),this.Wa=co("forwardChannelMaxRetries",2,a),this.wa=co("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new L(a&&a.concurrentRequestLimit),this.Da=new WE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=td.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){Ot(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=ud(this,null,this.W),Va(this)};function Mc(a){if(nd(a),a.G==3){var h=a.U++,d=gn(a.I);if(Je(d,"SID",a.K),Je(d,"RID",h),Je(d,"TYPE","terminate"),uo(a,d),h=new Pn(a,a.j,h),h.L=2,h.v=ka(gn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=hd(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ti(h)}cd(a)}function La(a){a.g&&(Fc(a),a.g.cancel(),a.g=null)}function nd(a){La(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ma(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Va(a){if(!C(a.h)&&!a.s){a.s=!0;var h=a.Ga;Re||Dt(),Ce||(Re(),Ce=!0),gt.add(h,a),a.B=0}}function YE(a,h){return b(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Or(m(a.Ga,a,h),ld(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const j=new Pn(this,this.j,a);let K=this.o;if(this.S&&(K?(K=E(K),S(K,this.S)):K=this.S),this.m!==null||this.O||(j.H=K,K=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=sd(this,j,h),d=gn(this.I),Je(d,"RID",a),Je(d,"CVER",22),this.D&&Je(d,"X-HTTP-Session-Id",this.D),uo(this,d),K&&(this.O?h="headers="+encodeURIComponent(String(Qf(K)))+"&"+h:this.m&&Vc(d,this.m,K)),re(this.h,j),this.Ua&&Je(d,"TYPE","init"),this.P?(Je(d,"$req",h),Je(d,"SID","null"),j.T=!0,Ji(j,d,null)):Ji(j,d,h),this.G=2}}else this.G==3&&(a?rd(this,a):this.i.length==0||C(this.h)||rd(this))};function rd(a,h){var d;h?d=h.l:d=a.U++;const g=gn(a.I);Je(g,"SID",a.K),Je(g,"RID",d),Je(g,"AID",a.T),uo(a,g),a.m&&a.o&&Vc(g,a.m,a.o),d=new Pn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=sd(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),re(a.h,d),Ji(d,g,h)}function uo(a,h){a.H&&ne(a.H,function(d,g){Je(h,g,d)}),a.l&&at({},function(d,g){Je(h,g,d)})}function sd(a,h,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var j=a.i;let K=-1;for(;;){const le=["count="+d];K==-1?0<d?(K=j[0].g,le.push("ofs="+K)):K=0:le.push("ofs="+K);let Ze=!0;for(let $t=0;$t<d;$t++){let $e=j[$t].g;const Kt=j[$t].map;if($e-=K,0>$e)K=Math.max(0,j[$t].g-100),Ze=!1;else try{zE(Kt,le,"req"+$e+"_")}catch{g&&g(Kt)}}if(Ze){g=le.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function id(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Re||Dt(),Ce||(Re(),Ce=!0),gt.add(h,a),a.v=0}}function xc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Or(m(a.Fa,a),ld(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,od(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Or(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ot(10),La(this),od(this))};function Fc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function od(a){a.g=new Pn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=gn(a.qa);Je(h,"RID","rpc"),Je(h,"SID",a.K),Je(h,"AID",a.T),Je(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Je(h,"TO",a.ja),Je(h,"TYPE","xmlhttp"),uo(a,h),a.m&&a.o&&Vc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=ka(gn(h)),d.m=null,d.P=!0,Zi(d,a)}t.Za=function(){this.C!=null&&(this.C=null,La(this),xc(this),Ot(19))};function Ma(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function ad(a,h){var d=null;if(a.g==h){Ma(a),Fc(a),a.g=null;var g=2}else if(M(a.h,h))d=h.D,Ee(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var j=a.B;g=_s(),$(g,new zi(g,d)),Va(a)}else id(a);else if(j=h.s,j==3||j==0&&0<h.X||!(g==1&&YE(a,h)||g==2&&xc(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),j){case 1:Is(a,5);break;case 4:Is(a,10);break;case 3:Is(a,6);break;default:Is(a,2)}}}function ld(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Is(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),g=a.Xa;const j=!g;g=new rn(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ni(g,"https"),ka(g),j?qE(g.toString(),d):HE(g.toString(),d)}else Ot(2);a.G=0,a.l&&a.l.sa(h),cd(a),nd(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ot(2)):(this.j.info("Failed to ping google.com"),Ot(1))};function cd(a){if(a.G=0,a.ka=[],a.l){const h=Pe(a.h);(h.length!=0||a.i.length!=0)&&(O(a.ka,h),O(a.ka,a.i),a.h.i.length=0,V(a.i),a.i.length=0),a.l.ra()}}function ud(a,h,d){var g=d instanceof rn?gn(d):new rn(d);if(g.g!="")h&&(g.g=h+"."+g.g),Mr(g,g.s);else{var j=l.location;g=j.protocol,h=h?h+"."+j.hostname:j.hostname,j=+j.port;var K=new rn(null);g&&ni(K,g),h&&(K.g=h),j&&Mr(K,j),d&&(K.l=d),g=K}return d=a.D,h=a.ya,d&&h&&Je(g,d,h),Je(g,"VER",a.la),uo(a,g),g}function hd(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new _t(new Na({eb:d})):new _t(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function fd(){}t=fd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function xa(){}xa.prototype.g=function(a,h){return new _n(a,h)};function _n(a,h){de.call(this),this.g=new td(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!F(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!F(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new si(this)}P(_n,de),_n.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_n.prototype.close=function(){Mc(this.g)},_n.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Ut(a),a=d);h.i.push(new Lc(h.Ya++,a)),h.G==3&&Va(h)},_n.prototype.N=function(){this.g.l=null,delete this.j,Mc(this.g),delete this.g,_n.aa.N.call(this)};function dd(a){Ys.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}P(dd,Ys);function pd(){Hi.call(this),this.status=1}P(pd,Hi);function si(a){this.g=a}P(si,fd),si.prototype.ua=function(){$(this.g,"a")},si.prototype.ta=function(a){$(this.g,new dd(a))},si.prototype.sa=function(a){$(this.g,new pd)},si.prototype.ra=function(){$(this.g,"b")},xa.prototype.createWebChannel=xa.prototype.g,_n.prototype.send=_n.prototype.o,_n.prototype.open=_n.prototype.m,_n.prototype.close=_n.prototype.close,iv=function(){return new xa},sv=function(){return _s()},rv=hr,eh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Zs.NO_ERROR=0,Zs.TIMEOUT=8,Zs.HTTP_ERROR=6,pl=Zs,Ca.COMPLETE="complete",nv=Ca,qi.EventType=Bn,Bn.OPEN="a",Bn.CLOSE="b",Bn.ERROR="c",Bn.MESSAGE="d",de.prototype.listen=de.prototype.K,To=qi,_t.prototype.listenOnce=_t.prototype.L,_t.prototype.getLastError=_t.prototype.Ka,_t.prototype.getLastErrorCode=_t.prototype.Ba,_t.prototype.getStatus=_t.prototype.Z,_t.prototype.getResponseJson=_t.prototype.Oa,_t.prototype.getResponseText=_t.prototype.oa,_t.prototype.send=_t.prototype.ea,_t.prototype.setWithCredentials=_t.prototype.Ha,tv=_t}).apply(typeof Za<"u"?Za:typeof self<"u"?self:typeof window<"u"?window:{});const sm="@firebase/firestore",im="4.8.0";/**
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
 */class Jt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Jt.UNAUTHENTICATED=new Jt(null),Jt.GOOGLE_CREDENTIALS=new Jt("google-credentials-uid"),Jt.FIRST_PARTY=new Jt("first-party-uid"),Jt.MOCK_USER=new Jt("mock-user");/**
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
 */let Fi="11.10.0";/**
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
 */const Hs=new zh("@firebase/firestore");function hi(){return Hs.logLevel}function fe(t,...e){if(Hs.logLevel<=Oe.DEBUG){const n=e.map(af);Hs.debug(`Firestore (${Fi}): ${t}`,...n)}}function Pr(t,...e){if(Hs.logLevel<=Oe.ERROR){const n=e.map(af);Hs.error(`Firestore (${Fi}): ${t}`,...n)}}function rs(t,...e){if(Hs.logLevel<=Oe.WARN){const n=e.map(af);Hs.warn(`Firestore (${Fi}): ${t}`,...n)}}function af(t){if(typeof t=="string")return t;try{/**
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
 */function ve(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,ov(t,r,n)}function ov(t,e,n){let r=`FIRESTORE (${Fi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Pr(r),new Error(r)}function ze(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||ov(e,s,r)}function Ae(t,e){return t}/**
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
 */const J={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends Dr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class es{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class av{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class CC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Jt.UNAUTHENTICATED)))}shutdown(){}}class RC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class PC{constructor(e){this.t=e,this.currentUser=Jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ze(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new es;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new es,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},l=c=>{fe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(fe("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new es)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(fe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ze(typeof r.accessToken=="string",31837,{l:r}),new av(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string",2055,{h:e}),new Jt(e)}}class kC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Jt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class NC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new kC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Jt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class om{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class DC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Dn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ze(this.o===void 0,3512);const r=i=>{i.error!=null&&fe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,fe("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{fe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):fe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new om(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(ze(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new om(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function OC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function lv(){return new TextEncoder}/**
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
 */class lf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=OC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ke(t,e){return t<e?-1:t>e?1:0}function th(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ke(r,s);{const i=lv(),o=LC(i.encode(am(t,n)),i.encode(am(e,n)));return o!==0?o:ke(r,s)}}n+=r>65535?2:1}return ke(t.length,e.length)}function am(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function LC(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ke(t[n],e[n]);return ke(t.length,e.length)}function Pi(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
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
 */const lm="__name__";class Kn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ve(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ve(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Kn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Kn?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Kn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ke(e.length,n.length)}static compareSegments(e,n){const r=Kn.isNumericId(e),s=Kn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Kn.extractNumericId(e).compare(Kn.extractNumericId(n)):th(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Zr.fromString(e.substring(4,e.length-2))}}class st extends Kn{construct(e,n,r){return new st(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new he(J.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new st(n)}static emptyPath(){return new st([])}}const VC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qt extends Kn{construct(e,n,r){return new qt(e,n,r)}static isValidIdentifier(e){return VC.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===lm}static keyField(){return new qt([lm])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new he(J.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new he(J.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new he(J.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new he(J.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qt(n)}static emptyPath(){return new qt([])}}/**
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
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(st.fromString(e))}static fromName(e){return new me(st.fromString(e).popFirst(5))}static empty(){return new me(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&st.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return st.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new st(e.slice()))}}/**
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
 */function cv(t,e,n){if(!n)throw new he(J.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function MC(t,e,n,r){if(e===!0&&r===!0)throw new he(J.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function cm(t){if(!me.isDocumentKey(t))throw new he(J.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function um(t){if(me.isDocumentKey(t))throw new he(J.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function uv(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function gc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ve(12329,{type:typeof t})}function xn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new he(J.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gc(t);throw new he(J.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Rt(t,e){const n={typeString:t};return e&&(n.value=e),n}function ya(t,e){if(!uv(t))throw new he(J.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new he(J.INVALID_ARGUMENT,n);return!0}/**
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
 */const hm=-62135596800,fm=1e6;class ut{static now(){return ut.fromMillis(Date.now())}static fromDate(e){return ut.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*fm);return new ut(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new he(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new he(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<hm)throw new he(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/fm}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ut._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ya(e,ut._jsonSchema))return new ut(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-hm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ut._jsonSchemaVersion="firestore/timestamp/1.0",ut._jsonSchema={type:Rt("string",ut._jsonSchemaVersion),seconds:Rt("number"),nanoseconds:Rt("number")};/**
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
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new ut(0,0))}static max(){return new we(new ut(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ta=-1;function xC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=we.fromTimestamp(r===1e9?new ut(n+1,0):new ut(n,r));return new ss(s,me.empty(),e)}function FC(t){return new ss(t.readTime,t.key,ta)}class ss{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ss(we.min(),me.empty(),ta)}static max(){return new ss(we.max(),me.empty(),ta)}}function UC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=me.comparator(t.documentKey,e.documentKey),n!==0?n:ke(t.largestBatchId,e.largestBatchId))}/**
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
 */const $C="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Ui(t){if(t.code!==J.FAILED_PRECONDITION||t.message!==$C)throw t;fe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ee{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ve(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new ee(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof ee?n:ee.resolve(n)}catch(n){return ee.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):ee.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):ee.reject(n)}static resolve(e){return new ee(((n,r)=>{n(e)}))}static reject(e){return new ee(((n,r)=>{r(e)}))}static waitFor(e){return new ee(((n,r)=>{let s=0,i=0,o=!1;e.forEach((l=>{++s,l.next((()=>{++i,o&&i===s&&n()}),(c=>r(c)))})),o=!0,i===s&&n()}))}static or(e){let n=ee.resolve(!1);for(const r of e)n=n.next((s=>s?ee.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new ee(((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next((f=>{o[u]=f,++l,l===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new ee(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function BC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function $i(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class _c{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}_c.ue=-1;/**
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
 */const cf=-1;function yc(t){return t==null}function Bl(t){return t===0&&1/t==-1/0}function qC(t){return typeof t=="number"&&Number.isInteger(t)&&!Bl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const hv="";function HC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=dm(e)),e=WC(t.get(n),e);return dm(e)}function WC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case hv:n+="";break;default:n+=i}}return n}function dm(t){return t+hv+""}/**
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
 */function pm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ps(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function fv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class pt{constructor(e,n){this.comparator=e,this.root=n||Bt.EMPTY}insert(e,n){return new pt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Bt.BLACK,null,null))}remove(e){return new pt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Bt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new el(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new el(this.root,e,this.comparator,!1)}getReverseIterator(){return new el(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new el(this.root,e,this.comparator,!0)}}class el{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Bt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Bt.RED,this.left=s??Bt.EMPTY,this.right=i??Bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Bt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Bt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ve(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ve(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ve(27949);return e+(this.isRed()?0:1)}}Bt.EMPTY=null,Bt.RED=!0,Bt.BLACK=!1;Bt.EMPTY=new class{constructor(){this.size=0}get key(){throw ve(57766)}get value(){throw ve(16141)}get color(){throw ve(16727)}get left(){throw ve(29726)}get right(){throw ve(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Bt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class kt{constructor(e){this.comparator=e,this.data=new pt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new mm(this.data.getIterator())}getIteratorFrom(e){return new mm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof kt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new kt(this.comparator);return n.data=e,n}}class mm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class vn{constructor(e){this.fields=e,e.sort(qt.comparator)}static empty(){return new vn([])}unionWith(e){let n=new kt(qt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new vn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Pi(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class dv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Wt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new dv("Invalid base64 string: "+i):i}})(e);return new Wt(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new Wt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Wt.EMPTY_BYTE_STRING=new Wt("");const zC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function is(t){if(ze(!!t,39018),typeof t=="string"){let e=0;const n=zC.exec(t);if(ze(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:It(t.seconds),nanos:It(t.nanos)}}function It(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function os(t){return typeof t=="string"?Wt.fromBase64String(t):Wt.fromUint8Array(t)}/**
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
 */const pv="server_timestamp",mv="__type__",gv="__previous_value__",_v="__local_write_time__";function uf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[mv])===null||n===void 0?void 0:n.stringValue)===pv}function vc(t){const e=t.mapValue.fields[gv];return uf(e)?vc(e):e}function na(t){const e=is(t.mapValue.fields[_v].timestampValue);return new ut(e.seconds,e.nanos)}/**
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
 */class KC{constructor(e,n,r,s,i,o,l,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const ql="(default)";class ra{constructor(e,n){this.projectId=e,this.database=n||ql}static empty(){return new ra("","")}get isDefaultDatabase(){return this.database===ql}isEqual(e){return e instanceof ra&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const yv="__type__",GC="__max__",tl={mapValue:{}},vv="__vector__",Hl="value";function as(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?uf(t)?4:YC(t)?9007199254740991:QC(t)?10:11:ve(28295,{value:t})}function cr(t,e){if(t===e)return!0;const n=as(t);if(n!==as(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return na(t).isEqual(na(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=is(s.timestampValue),l=is(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return os(s.bytesValue).isEqual(os(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return It(s.geoPointValue.latitude)===It(i.geoPointValue.latitude)&&It(s.geoPointValue.longitude)===It(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return It(s.integerValue)===It(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=It(s.doubleValue),l=It(i.doubleValue);return o===l?Bl(o)===Bl(l):isNaN(o)&&isNaN(l)}return!1})(t,e);case 9:return Pi(t.arrayValue.values||[],e.arrayValue.values||[],cr);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(pm(o)!==pm(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!cr(o[c],l[c])))return!1;return!0})(t,e);default:return ve(52216,{left:t})}}function sa(t,e){return(t.values||[]).find((n=>cr(n,e)))!==void 0}function ki(t,e){if(t===e)return 0;const n=as(t),r=as(e);if(n!==r)return ke(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ke(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const l=It(i.integerValue||i.doubleValue),c=It(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return gm(t.timestampValue,e.timestampValue);case 4:return gm(na(t),na(e));case 5:return th(t.stringValue,e.stringValue);case 6:return(function(i,o){const l=os(i),c=os(o);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=ke(l[u],c[u]);if(f!==0)return f}return ke(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const l=ke(It(i.latitude),It(o.latitude));return l!==0?l:ke(It(i.longitude),It(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return _m(t.arrayValue,e.arrayValue);case 10:return(function(i,o){var l,c,u,f;const p=i.fields||{},m=o.fields||{},T=(l=p[Hl])===null||l===void 0?void 0:l.arrayValue,P=(c=m[Hl])===null||c===void 0?void 0:c.arrayValue,V=ke(((u=T==null?void 0:T.values)===null||u===void 0?void 0:u.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return V!==0?V:_m(T,P)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===tl.mapValue&&o===tl.mapValue)return 0;if(i===tl.mapValue)return 1;if(o===tl.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=th(c[p],f[p]);if(m!==0)return m;const T=ki(l[c[p]],u[f[p]]);if(T!==0)return T}return ke(c.length,f.length)})(t.mapValue,e.mapValue);default:throw ve(23264,{le:n})}}function gm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ke(t,e);const n=is(t),r=is(e),s=ke(n.seconds,r.seconds);return s!==0?s:ke(n.nanos,r.nanos)}function _m(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ki(n[s],r[s]);if(i)return i}return ke(n.length,r.length)}function Ni(t){return nh(t)}function nh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=is(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return os(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return me.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=nh(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${nh(n.fields[o])}`;return s+"}"})(t.mapValue):ve(61005,{value:t})}function ml(t){switch(as(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=vc(t);return e?16+ml(e):16;case 5:return 2*t.stringValue.length;case 6:return os(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+ml(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return ps(r.fields,((i,o)=>{s+=i.length+ml(o)})),s})(t.mapValue);default:throw ve(13486,{value:t})}}function ym(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function rh(t){return!!t&&"integerValue"in t}function hf(t){return!!t&&"arrayValue"in t}function vm(t){return!!t&&"nullValue"in t}function Em(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function gl(t){return!!t&&"mapValue"in t}function QC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[yv])===null||n===void 0?void 0:n.stringValue)===vv}function Mo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ps(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Mo(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Mo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function YC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===GC}/**
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
 */class dn{constructor(e){this.value=e}static empty(){return new dn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!gl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Mo(n)}setAll(e){let n=qt.emptyPath(),r={},s=[];e.forEach(((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Mo(o):s.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());gl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];gl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ps(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new dn(Mo(this.value))}}function Ev(t){const e=[];return ps(t.fields,((n,r)=>{const s=new qt([n]);if(gl(r)){const i=Ev(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new vn(e)}/**
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
 */class en{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new en(e,0,we.min(),we.min(),we.min(),dn.empty(),0)}static newFoundDocument(e,n,r,s){return new en(e,1,n,we.min(),r,s,0)}static newNoDocument(e,n){return new en(e,2,n,we.min(),we.min(),dn.empty(),0)}static newUnknownDocument(e,n){return new en(e,3,n,we.min(),we.min(),dn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof en&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new en(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Wl{constructor(e,n){this.position=e,this.inclusive=n}}function Im(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=me.comparator(me.fromName(o.referenceValue),n.key):r=ki(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Tm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ia{constructor(e,n="asc"){this.field=e,this.dir=n}}function XC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Iv{}class St extends Iv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ZC(e,n,r):n==="array-contains"?new nR(e,r):n==="in"?new rR(e,r):n==="not-in"?new sR(e,r):n==="array-contains-any"?new iR(e,r):new St(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new eR(e,r):new tR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ki(n,this.value)):n!==null&&as(this.value)===as(n)&&this.matchesComparison(ki(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jn extends Iv{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new jn(e,n)}matches(e){return Tv(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Tv(t){return t.op==="and"}function bv(t){return JC(t)&&Tv(t)}function JC(t){for(const e of t.filters)if(e instanceof jn)return!1;return!0}function sh(t){if(t instanceof St)return t.field.canonicalString()+t.op.toString()+Ni(t.value);if(bv(t))return t.filters.map((e=>sh(e))).join(",");{const e=t.filters.map((n=>sh(n))).join(",");return`${t.op}(${e})`}}function wv(t,e){return t instanceof St?(function(r,s){return s instanceof St&&r.op===s.op&&r.field.isEqual(s.field)&&cr(r.value,s.value)})(t,e):t instanceof jn?(function(r,s){return s instanceof jn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,l)=>i&&wv(o,s.filters[l])),!0):!1})(t,e):void ve(19439)}function Av(t){return t instanceof St?(function(n){return`${n.field.canonicalString()} ${n.op} ${Ni(n.value)}`})(t):t instanceof jn?(function(n){return n.op.toString()+" {"+n.getFilters().map(Av).join(" ,")+"}"})(t):"Filter"}class ZC extends St{constructor(e,n,r){super(e,n,r),this.key=me.fromName(r.referenceValue)}matches(e){const n=me.comparator(e.key,this.key);return this.matchesComparison(n)}}class eR extends St{constructor(e,n){super(e,"in",n),this.keys=Sv("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class tR extends St{constructor(e,n){super(e,"not-in",n),this.keys=Sv("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function Sv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map((r=>me.fromName(r.referenceValue)))}class nR extends St{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hf(n)&&sa(n.arrayValue,this.value)}}class rR extends St{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&sa(this.value.arrayValue,n)}}class sR extends St{constructor(e,n){super(e,"not-in",n)}matches(e){if(sa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!sa(this.value.arrayValue,n)}}class iR extends St{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hf(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>sa(this.value.arrayValue,r)))}}/**
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
 */class oR{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Pe=null}}function bm(t,e=null,n=[],r=[],s=null,i=null,o=null){return new oR(t,e,n,r,s,i,o)}function ff(t){const e=Ae(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>sh(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),yc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Ni(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Ni(r))).join(",")),e.Pe=n}return e.Pe}function df(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!XC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!wv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Tm(t.startAt,e.startAt)&&Tm(t.endAt,e.endAt)}function ih(t){return me.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ji{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function aR(t,e,n,r,s,i,o,l){return new ji(t,e,n,r,s,i,o,l)}function Ec(t){return new ji(t)}function wm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Cv(t){return t.collectionGroup!==null}function xo(t){const e=Ae(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new kt(qt.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(l=l.add(u.field))}))})),l})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new ia(i,r))})),n.has(qt.keyField().canonicalString())||e.Te.push(new ia(qt.keyField(),r))}return e.Te}function er(t){const e=Ae(t);return e.Ie||(e.Ie=lR(e,xo(t))),e.Ie}function lR(t,e){if(t.limitType==="F")return bm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new ia(s.field,i)}));const n=t.endAt?new Wl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Wl(t.startAt.position,t.startAt.inclusive):null;return bm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function oh(t,e){const n=t.filters.concat([e]);return new ji(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ah(t,e,n){return new ji(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ic(t,e){return df(er(t),er(e))&&t.limitType===e.limitType}function Rv(t){return`${ff(er(t))}|lt:${t.limitType}`}function fi(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>Av(s))).join(", ")}]`),yc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Ni(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Ni(s))).join(",")),`Target(${r})`})(er(t))}; limitType=${t.limitType})`}function Tc(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):me.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of xo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,l,c){const u=Im(o,l,c);return o.inclusive?u<=0:u<0})(r.startAt,xo(r),s)||r.endAt&&!(function(o,l,c){const u=Im(o,l,c);return o.inclusive?u>=0:u>0})(r.endAt,xo(r),s))})(t,e)}function cR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Pv(t){return(e,n)=>{let r=!1;for(const s of xo(t)){const i=uR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function uR(t,e,n){const r=t.field.isKeyField()?me.comparator(e.key,n.key):(function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?ki(c,u):ve(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ve(19790,{direction:t.dir})}}/**
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
 */class Ks{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ps(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return fv(this.inner)}size(){return this.innerSize}}/**
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
 */const hR=new pt(me.comparator);function kr(){return hR}const kv=new pt(me.comparator);function bo(...t){let e=kv;for(const n of t)e=e.insert(n.key,n);return e}function Nv(t){let e=kv;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Os(){return Fo()}function Dv(){return Fo()}function Fo(){return new Ks((t=>t.toString()),((t,e)=>t.isEqual(e)))}const fR=new pt(me.comparator),dR=new kt(me.comparator);function Le(...t){let e=dR;for(const n of t)e=e.add(n);return e}const pR=new kt(ke);function mR(){return pR}/**
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
 */function pf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bl(e)?"-0":e}}function Ov(t){return{integerValue:""+t}}function gR(t,e){return qC(e)?Ov(e):pf(t,e)}/**
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
 */class bc{constructor(){this._=void 0}}function _R(t,e,n){return t instanceof oa?(function(s,i){const o={fields:{[mv]:{stringValue:pv},[_v]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&uf(i)&&(i=vc(i)),i&&(o.fields[gv]=i),{mapValue:o}})(n,e):t instanceof aa?Vv(t,e):t instanceof la?Mv(t,e):(function(s,i){const o=Lv(s,i),l=Am(o)+Am(s.Ee);return rh(o)&&rh(s.Ee)?Ov(l):pf(s.serializer,l)})(t,e)}function yR(t,e,n){return t instanceof aa?Vv(t,e):t instanceof la?Mv(t,e):n}function Lv(t,e){return t instanceof zl?(function(r){return rh(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class oa extends bc{}class aa extends bc{constructor(e){super(),this.elements=e}}function Vv(t,e){const n=xv(e);for(const r of t.elements)n.some((s=>cr(s,r)))||n.push(r);return{arrayValue:{values:n}}}class la extends bc{constructor(e){super(),this.elements=e}}function Mv(t,e){let n=xv(e);for(const r of t.elements)n=n.filter((s=>!cr(s,r)));return{arrayValue:{values:n}}}class zl extends bc{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Am(t){return It(t.integerValue||t.doubleValue)}function xv(t){return hf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class vR{constructor(e,n){this.field=e,this.transform=n}}function ER(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof aa&&s instanceof aa||r instanceof la&&s instanceof la?Pi(r.elements,s.elements,cr):r instanceof zl&&s instanceof zl?cr(r.Ee,s.Ee):r instanceof oa&&s instanceof oa})(t.transform,e.transform)}class IR{constructor(e,n){this.version=e,this.transformResults=n}}class Fn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Fn}static exists(e){return new Fn(void 0,e)}static updateTime(e){return new Fn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _l(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class wc{}function Fv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new mf(t.key,Fn.none()):new va(t.key,t.data,Fn.none());{const n=t.data,r=dn.empty();let s=new kt(qt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ms(t.key,r,new vn(s.toArray()),Fn.none())}}function TR(t,e,n){t instanceof va?(function(s,i,o){const l=s.value.clone(),c=Cm(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):t instanceof ms?(function(s,i,o){if(!_l(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Cm(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Uv(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Uo(t,e,n,r){return t instanceof va?(function(i,o,l,c){if(!_l(i.precondition,o))return l;const u=i.value.clone(),f=Rm(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof ms?(function(i,o,l,c){if(!_l(i.precondition,o))return l;const u=Rm(i.fieldTransforms,c,o),f=o.data;return f.setAll(Uv(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,l){return _l(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(t,e,n)}function bR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Lv(r.transform,s||null);i!=null&&(n===null&&(n=dn.empty()),n.set(r.field,i))}return n||null}function Sm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Pi(r,s,((i,o)=>ER(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class va extends wc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ms extends wc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Uv(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Cm(t,e,n){const r=new Map;ze(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,yR(o,l,n[s]))}return r}function Rm(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,_R(i,o,e))}return r}class mf extends wc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wR extends wc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class AR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&TR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Uo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Uo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Dv();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=Fv(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(we.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Le())}isEqual(e){return this.batchId===e.batchId&&Pi(this.mutations,e.mutations,((n,r)=>Sm(n,r)))&&Pi(this.baseMutations,e.baseMutations,((n,r)=>Sm(n,r)))}}class gf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ze(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return fR})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new gf(e,n,r,s)}}/**
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
 */class SR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class CR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var wt,Me;function RR(t){switch(t){case J.OK:return ve(64938);case J.CANCELLED:case J.UNKNOWN:case J.DEADLINE_EXCEEDED:case J.RESOURCE_EXHAUSTED:case J.INTERNAL:case J.UNAVAILABLE:case J.UNAUTHENTICATED:return!1;case J.INVALID_ARGUMENT:case J.NOT_FOUND:case J.ALREADY_EXISTS:case J.PERMISSION_DENIED:case J.FAILED_PRECONDITION:case J.ABORTED:case J.OUT_OF_RANGE:case J.UNIMPLEMENTED:case J.DATA_LOSS:return!0;default:return ve(15467,{code:t})}}function $v(t){if(t===void 0)return Pr("GRPC error has no .code"),J.UNKNOWN;switch(t){case wt.OK:return J.OK;case wt.CANCELLED:return J.CANCELLED;case wt.UNKNOWN:return J.UNKNOWN;case wt.DEADLINE_EXCEEDED:return J.DEADLINE_EXCEEDED;case wt.RESOURCE_EXHAUSTED:return J.RESOURCE_EXHAUSTED;case wt.INTERNAL:return J.INTERNAL;case wt.UNAVAILABLE:return J.UNAVAILABLE;case wt.UNAUTHENTICATED:return J.UNAUTHENTICATED;case wt.INVALID_ARGUMENT:return J.INVALID_ARGUMENT;case wt.NOT_FOUND:return J.NOT_FOUND;case wt.ALREADY_EXISTS:return J.ALREADY_EXISTS;case wt.PERMISSION_DENIED:return J.PERMISSION_DENIED;case wt.FAILED_PRECONDITION:return J.FAILED_PRECONDITION;case wt.ABORTED:return J.ABORTED;case wt.OUT_OF_RANGE:return J.OUT_OF_RANGE;case wt.UNIMPLEMENTED:return J.UNIMPLEMENTED;case wt.DATA_LOSS:return J.DATA_LOSS;default:return ve(39323,{code:t})}}(Me=wt||(wt={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const PR=new Zr([4294967295,4294967295],0);function Pm(t){const e=lv().encode(t),n=new ev;return n.update(e),new Uint8Array(n.digest())}function km(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Zr([n,r],0),new Zr([s,i],0)]}class _f{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new wo(`Invalid padding: ${n}`);if(r<0)throw new wo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new wo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new wo(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=Zr.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(Zr.fromNumber(r)));return s.compare(PR)===1&&(s=new Zr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=Pm(e),[r,s]=km(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);if(!this.ye(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new _f(i,s,n);return r.forEach((l=>o.insert(l))),o}insert(e){if(this.fe===0)return;const n=Pm(e),[r,s]=km(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class wo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ac{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ea.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ac(we.min(),s,new pt(ke),kr(),Le())}}class Ea{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ea(r,n,Le(),Le(),Le())}}/**
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
 */class yl{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class jv{constructor(e,n){this.targetId=e,this.De=n}}class Bv{constructor(e,n,r=Wt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Nm{constructor(){this.ve=0,this.Ce=Dm(),this.Fe=Wt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Le(),n=Le(),r=Le();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ve(38017,{changeType:i})}})),new Ea(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=Dm()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,ze(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class kR{constructor(e){this.We=e,this.Ge=new Map,this.ze=kr(),this.je=nl(),this.Je=nl(),this.He=new pt(ke)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,(n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:ve(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach(((r,s)=>{this.nt(s)&&n(s)}))}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(ih(i))if(r===0){const o=new me(i.path);this.Xe(n,o,en.newNoDocument(o,we.min()))}else ze(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),c=l?this.ut(l,e,o):1;if(c!==0){this.rt(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,u)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=os(r).toUint8Array()}catch(c){if(c instanceof dv)return rs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new _f(o,s,i)}catch(c){return rs(c instanceof wo?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,i,null),s++)})),s}Pt(e){const n=new Map;this.Ge.forEach(((i,o)=>{const l=this.st(o);if(l){if(i.current&&ih(l.target)){const c=new me(l.target.path);this.Tt(c).has(o)||this.It(o,c)||this.Xe(o,c,en.newNoDocument(c,e))}i.Ne&&(n.set(o,i.Le()),i.ke())}}));let r=Le();this.Je.forEach(((i,o)=>{let l=!0;o.forEachWhile((c=>{const u=this.st(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.ze.forEach(((i,o)=>o.setReadTime(e)));const s=new Ac(e,n,this.He,this.ze,r);return this.ze=kr(),this.je=nl(),this.Je=nl(),this.He=new pt(ke),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new Nm,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new kt(ke),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new kt(ke),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||fe("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Nm),this.We.getRemoteKeysForTarget(e).forEach((n=>{this.Xe(e,n,null)}))}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function nl(){return new pt(me.comparator)}function Dm(){return new pt(me.comparator)}const NR={asc:"ASCENDING",desc:"DESCENDING"},DR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},OR={and:"AND",or:"OR"};class LR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function lh(t,e){return t.useProto3Json||yc(e)?e:{value:e}}function Kl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function VR(t,e){return Kl(t,e.toTimestamp())}function tr(t){return ze(!!t,49232),we.fromTimestamp((function(n){const r=is(n);return new ut(r.seconds,r.nanos)})(t))}function yf(t,e){return ch(t,e).canonicalString()}function ch(t,e){const n=(function(s){return new st(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function Hv(t){const e=st.fromString(t);return ze(Qv(e),10190,{key:e.toString()}),e}function uh(t,e){return yf(t.databaseId,e.path)}function du(t,e){const n=Hv(e);if(n.get(1)!==t.databaseId.projectId)throw new he(J.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new he(J.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new me(zv(n))}function Wv(t,e){return yf(t.databaseId,e)}function MR(t){const e=Hv(t);return e.length===4?st.emptyPath():zv(e)}function hh(t){return new st(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function zv(t){return ze(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Om(t,e,n){return{name:uh(t,e),fields:n.value.mapValue.fields}}function xR(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ve(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(ze(f===void 0||typeof f=="string",58123),Wt.fromBase64String(f||"")):(ze(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Wt.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(u){const f=u.code===void 0?J.UNKNOWN:$v(u.code);return new he(f,u.message||"")})(o);n=new Bv(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=du(t,r.document.name),i=tr(r.document.updateTime),o=r.document.createTime?tr(r.document.createTime):we.min(),l=new dn({mapValue:{fields:r.document.fields}}),c=en.newFoundDocument(s,i,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new yl(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=du(t,r.document),i=r.readTime?tr(r.readTime):we.min(),o=en.newNoDocument(s,i),l=r.removedTargetIds||[];n=new yl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=du(t,r.document),i=r.removedTargetIds||[];n=new yl([],i,s,null)}else{if(!("filter"in e))return ve(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new CR(s,i),l=r.targetId;n=new jv(l,o)}}return n}function FR(t,e){let n;if(e instanceof va)n={update:Om(t,e.key,e.value)};else if(e instanceof mf)n={delete:uh(t,e.key)};else if(e instanceof ms)n={update:Om(t,e.key,e.data),updateMask:KR(e.fieldMask)};else{if(!(e instanceof wR))return ve(16599,{Rt:e.type});n={verify:uh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const l=o.transform;if(l instanceof oa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof aa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof la)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof zl)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw ve(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:VR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ve(27497)})(t,e.precondition)),n}function UR(t,e){return t&&t.length>0?(ze(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?tr(s.updateTime):tr(i);return o.isEqual(we.min())&&(o=tr(i)),new IR(o,s.transformResults||[])})(n,e)))):[]}function $R(t,e){return{documents:[Wv(t,e.path)]}}function jR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Wv(t,s);const i=(function(u){if(u.length!==0)return Gv(jn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:di(m.field),direction:HR(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=lh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{Vt:n,parent:s}}function BR(t){let e=MR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ze(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=Kv(p);return m instanceof jn&&bv(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(P){return new ia(pi(P.field),(function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(P.direction))})(m)))})(n.orderBy));let l=null;n.limit&&(l=(function(p){let m;return m=typeof p=="object"?p.value:p,yc(m)?null:m})(n.limit));let c=null;n.startAt&&(c=(function(p){const m=!!p.before,T=p.values||[];return new Wl(T,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,T=p.values||[];return new Wl(T,m)})(n.endAt)),aR(e,s,o,i,l,"F",c,u)}function qR(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Kv(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=pi(n.unaryFilter.field);return St.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=pi(n.unaryFilter.field);return St.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=pi(n.unaryFilter.field);return St.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=pi(n.unaryFilter.field);return St.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ve(61313);default:return ve(60726)}})(t):t.fieldFilter!==void 0?(function(n){return St.create(pi(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ve(58110);default:return ve(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return jn.create(n.compositeFilter.filters.map((r=>Kv(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ve(1026)}})(n.compositeFilter.op))})(t):ve(30097,{filter:t})}function HR(t){return NR[t]}function WR(t){return DR[t]}function zR(t){return OR[t]}function di(t){return{fieldPath:t.canonicalString()}}function pi(t){return qt.fromServerFormat(t.fieldPath)}function Gv(t){return t instanceof St?(function(n){if(n.op==="=="){if(Em(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NAN"}};if(vm(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Em(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NOT_NAN"}};if(vm(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:di(n.field),op:WR(n.op),value:n.value}}})(t):t instanceof jn?(function(n){const r=n.getFilters().map((s=>Gv(s)));return r.length===1?r[0]:{compositeFilter:{op:zR(n.op),filters:r}}})(t):ve(54877,{filter:t})}function KR(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function Qv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Kr{constructor(e,n,r,s,i=we.min(),o=we.min(),l=Wt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Kr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class GR{constructor(e){this.gt=e}}function QR(t){const e=BR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ah(e,e.limit,"L"):e}/**
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
 */class YR{constructor(){this.Dn=new XR}addToCollectionParentIndex(e,n){return this.Dn.add(n),ee.resolve()}getCollectionParents(e,n){return ee.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return ee.resolve()}deleteFieldIndex(e,n){return ee.resolve()}deleteAllFieldIndexes(e){return ee.resolve()}createTargetIndexes(e,n){return ee.resolve()}getDocumentsMatchingTarget(e,n){return ee.resolve(null)}getIndexType(e,n){return ee.resolve(0)}getFieldIndexes(e,n){return ee.resolve([])}getNextCollectionGroupToUpdate(e){return ee.resolve(null)}getMinOffset(e,n){return ee.resolve(ss.min())}getMinOffsetFromCollectionGroup(e,n){return ee.resolve(ss.min())}updateCollectionGroup(e,n,r){return ee.resolve()}updateIndexEntries(e,n){return ee.resolve()}}class XR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new kt(st.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new kt(st.comparator)).toArray()}}/**
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
 */const Lm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Yv=41943040;class fn{static withCacheSize(e){return new fn(e,fn.DEFAULT_COLLECTION_PERCENTILE,fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */fn.DEFAULT_COLLECTION_PERCENTILE=10,fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,fn.DEFAULT=new fn(Yv,fn.DEFAULT_COLLECTION_PERCENTILE,fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),fn.DISABLED=new fn(-1,0,0);/**
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
 */class Di{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Di(0)}static ur(){return new Di(-1)}}/**
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
 */const Vm="LruGarbageCollector",JR=1048576;function Mm([t,e],[n,r]){const s=ke(t,n);return s===0?ke(e,r):s}class ZR{constructor(e){this.Tr=e,this.buffer=new kt(Mm),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Mm(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class eP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){fe(Vm,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){$i(n)?fe(Vm,"Ignoring IndexedDB error during garbage collection: ",n):await Ui(n)}await this.Rr(3e5)}))}}class tP{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return ee.resolve(_c.ue);const r=new ZR(n);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(fe("LruGarbageCollector","Garbage collection skipped; disabled"),ee.resolve(Lm)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(fe("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Lm):this.pr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(fe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,l=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),hi()<=Oe.DEBUG&&fe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),ee.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function nP(t,e){return new tP(t,e)}/**
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
 */class rP{constructor(){this.changes=new Ks((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,en.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?ee.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class sP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class iP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&Uo(r.mutation,s,vn.empty(),ut.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,Le()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=Le()){const s=Os();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=bo();return i.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=Os();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,Le())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,l)=>{n.set(o,l)}))}))}computeViews(e,n,r,s){let i=kr();const o=Fo(),l=(function(){return Fo()})();return n.forEach(((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof ms)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Uo(f.mutation,u,f.mutation.getFieldMask(),ut.now())):o.set(u.key,vn.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>{var p;return l.set(u,new sP(f,(p=o.get(u))!==null&&p!==void 0?p:null))})),l)))}recalculateAndSaveOverlays(e,n){const r=Fo();let s=new pt(((o,l)=>o-l)),i=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const l of o)l.keys().forEach((c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||vn.empty();f=l.applyToLocalView(u,f),r.set(c,f);const p=(s.get(l.batchId)||Le()).add(c);s=s.insert(l.batchId,p)}))})).next((()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=Dv();f.forEach((m=>{if(!i.has(m)){const T=Fv(n.get(m),r.get(m));T!==null&&p.set(m,T),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return ee.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return me.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Cv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):ee.resolve(Os());let l=ta,c=i;return o.next((u=>ee.forEach(u,((f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?ee.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{c=c.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,c,u,Le()))).next((f=>({batchId:l,changes:Nv(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new me(n)).next((r=>{let s=bo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=bo();return this.indexManager.getCollectionParents(e,i).next((l=>ee.forEach(l,(c=>{const u=(function(p,m){return new ji(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,en.newInvalidDocument(f)))}));let l=bo();return o.forEach(((c,u)=>{const f=i.get(c);f!==void 0&&Uo(f.mutation,u,vn.empty(),ut.now()),Tc(n,u)&&(l=l.insert(c,u))})),l}))}}/**
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
 */class oP{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return ee.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:tr(s.createTime)}})(n)),ee.resolve()}getNamedQuery(e,n){return ee.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,(function(s){return{name:s.name,query:QR(s.bundledQuery),readTime:tr(s.readTime)}})(n)),ee.resolve()}}/**
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
 */class aP{constructor(){this.overlays=new pt(me.comparator),this.kr=new Map}getOverlay(e,n){return ee.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Os();return ee.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.wt(e,n,i)})),ee.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),ee.resolve()}getOverlaysForCollection(e,n,r){const s=Os(),i=n.length+1,o=new me(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return ee.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new pt(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Os(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=Os(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,f)=>l.set(u,f))),!(l.size()>=s)););return ee.resolve(l)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new SR(n,r));let i=this.kr.get(n);i===void 0&&(i=Le(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
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
 */class lP{constructor(){this.sessionToken=Wt.EMPTY_BYTE_STRING}getSessionToken(e){return ee.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,ee.resolve()}}/**
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
 */class vf{constructor(){this.qr=new kt(Vt.Qr),this.$r=new kt(Vt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new Vt(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Wr(new Vt(e,n))}Gr(e,n){e.forEach((r=>this.removeReference(r,n)))}zr(e){const n=new me(new st([])),r=new Vt(n,e),s=new Vt(n,e+1),i=[];return this.$r.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new me(new st([])),r=new Vt(n,e),s=new Vt(n,e+1);let i=Le();return this.$r.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new Vt(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Vt{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return me.comparator(e.key,n.key)||ke(e.Hr,n.Hr)}static Ur(e,n){return ke(e.Hr,n.Hr)||me.comparator(e.key,n.key)}}/**
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
 */class cP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new kt(Vt.Qr)}checkEmpty(e){return ee.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new AR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Yr=this.Yr.add(new Vt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return ee.resolve(o)}lookupMutationBatch(e,n){return ee.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return ee.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return ee.resolve(this.mutationQueue.length===0?cf:this.er-1)}getAllMutationBatches(e){return ee.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Vt(n,0),s=new Vt(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(o=>{const l=this.Zr(o.Hr);i.push(l)})),ee.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new kt(ke);return n.forEach((s=>{const i=new Vt(s,0),o=new Vt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],(l=>{r=r.add(l.Hr)}))})),ee.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;me.isDocumentKey(i)||(i=i.child(""));const o=new Vt(new me(i),0);let l=new kt(ke);return this.Yr.forEachWhile((c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Hr)),!0)}),o),ee.resolve(this.ei(l))}ei(e){const n=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){ze(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return ee.forEach(n.mutations,(s=>{const i=new Vt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,n){const r=new Vt(n,0),s=this.Yr.firstAfterOrEqual(r);return ee.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,ee.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class uP{constructor(e){this.ni=e,this.docs=(function(){return new pt(me.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return ee.resolve(r?r.document.mutableCopy():en.newInvalidDocument(n))}getEntries(e,n){let r=kr();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():en.newInvalidDocument(s))})),ee.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=kr();const o=n.path,l=new me(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||UC(FC(f),r)<=0||(s.has(f.key)||Tc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return ee.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ve(9500)}ri(e,n){return ee.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new hP(this)}getSize(e){return ee.resolve(this.size)}}class hP extends rP{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),ee.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
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
 */class fP{constructor(e){this.persistence=e,this.ii=new Ks((n=>ff(n)),df),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.si=0,this.oi=new vf,this.targetCount=0,this._i=Di.ar()}forEachTarget(e,n){return this.ii.forEach(((r,s)=>n(s))),ee.resolve()}getLastRemoteSnapshotVersion(e){return ee.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ee.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),ee.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),ee.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new Di(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,ee.resolve()}updateTargetData(e,n){return this.hr(n),ee.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,ee.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach(((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),ee.waitFor(i).next((()=>s))}getTargetCount(e){return ee.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return ee.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),ee.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),ee.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),ee.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return ee.resolve(r)}containsKey(e,n){return ee.resolve(this.oi.containsKey(n))}}/**
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
 */class Xv{constructor(e,n){this.ai={},this.overlays={},this.ui=new _c(0),this.ci=!1,this.ci=!0,this.li=new lP,this.referenceDelegate=e(this),this.hi=new fP(this),this.indexManager=new YR,this.remoteDocumentCache=(function(s){return new uP(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new GR(n),this.Ti=new oP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new aP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new cP(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){fe("MemoryPersistence","Starting transaction:",e);const s=new dP(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,n){return ee.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,n))))}}class dP extends jC{constructor(e){super(),this.currentSequenceNumber=e}}class Ef{constructor(e){this.persistence=e,this.Ai=new vf,this.Ri=null}static Vi(e){return new Ef(e)}get mi(){if(this.Ri)return this.Ri;throw ve(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),ee.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),ee.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),ee.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ee.forEach(this.mi,(r=>{const s=me.fromPath(r);return this.fi(e,s).next((i=>{i||n.removeEntry(s,we.min())}))})).next((()=>(this.Ri=null,n.apply(e))))}updateLimboDocument(e,n){return this.fi(e,n).next((r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())}))}Pi(e){return 0}fi(e,n){return ee.or([()=>ee.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Gl{constructor(e,n){this.persistence=e,this.gi=new Ks((r=>HC(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=nP(this,n)}static Vi(e,n){return new Gl(e,n)}Ii(){}di(e){return ee.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}yr(e){let n=0;return this.gr(e,(r=>{n++})).next((()=>n))}gr(e,n){return ee.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?ee.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(o=>this.Sr(e,o,n).next((l=>{l||(r++,i.removeEntry(o,we.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),ee.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),ee.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),ee.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),ee.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ml(e.data.value)),n}Sr(e,n,r){return ee.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return ee.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class If{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=Le(),s=Le();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new If(e,n.fromCache,r,s)}}/**
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
 */class pP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class mP{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return lA()?8:BC(tn())>0?6:4})()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ys(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new pP;return this.ws(e,n,o).next((l=>{if(i.result=l,this.Rs)return this.Ss(e,n,o,l.size)}))})).next((()=>i.result))}Ss(e,n,r,s){return r.documentReadCount<this.Vs?(hi()<=Oe.DEBUG&&fe("QueryEngine","SDK will not create cache indexes for query:",fi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),ee.resolve()):(hi()<=Oe.DEBUG&&fe("QueryEngine","Query:",fi(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(hi()<=Oe.DEBUG&&fe("QueryEngine","The SDK decides to create cache indexes for query:",fi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,er(n))):ee.resolve())}ps(e,n){if(wm(n))return ee.resolve(null);let r=er(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=ah(n,null,"F"),r=er(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=Le(...i);return this.gs.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const u=this.bs(n,l);return this.Ds(n,u,o,c.readTime)?this.ps(e,ah(n,null,"F")):this.vs(e,u,n,c)}))))})))))}ys(e,n,r,s){return wm(n)||s.isEqual(we.min())?ee.resolve(null):this.gs.getDocuments(e,r).next((i=>{const o=this.bs(n,i);return this.Ds(n,o,r,s)?ee.resolve(null):(hi()<=Oe.DEBUG&&fe("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),fi(n)),this.vs(e,o,n,xC(s,ta)).next((l=>l)))}))}bs(e,n){let r=new kt(Pv(e));return n.forEach(((s,i)=>{Tc(e,i)&&(r=r.add(i))})),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return hi()<=Oe.DEBUG&&fe("QueryEngine","Using full collection scan to execute query:",fi(n)),this.gs.getDocumentsMatchingQuery(e,n,ss.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
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
 */const Tf="LocalStore",gP=3e8;class _P{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new pt(ke),this.Ms=new Ks((i=>ff(i)),df),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new iP(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Fs)))}}function yP(t,e,n,r){return new _P(t,e,n,r)}async function Jv(t,e){const n=Ae(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],l=[];let c=Le();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next((u=>({Bs:u,removedBatchIds:o,addedBatchIds:l})))}))}))}function vP(t,e){const n=Ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return(function(l,c,u,f){const p=u.batch,m=p.keys();let T=ee.resolve();return m.forEach((P=>{T=T.next((()=>f.getEntry(c,P))).next((V=>{const O=u.docVersions.get(P);ze(O!==null,48541),V.version.compareTo(O)<0&&(p.applyToRemoteDocument(V,u),V.isValidDocument()&&(V.setReadTime(u.commitVersion),f.addEntry(V)))}))})),T.next((()=>l.mutationQueue.removeMutationBatch(c,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let c=Le();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function Zv(t){const e=Ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.hi.getLastRemoteSnapshotVersion(n)))}function EP(t,e){const n=Ae(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const l=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;l.push(n.hi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.hi.addMatchingKeys(i,f.addedDocuments,p))));let T=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(Wt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,r)),s=s.insert(p,T),(function(V,O,N){return V.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=gP?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0})(m,T,f)&&l.push(n.hi.updateTargetData(i,T))}));let c=kr(),u=Le();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),l.push(IP(i,o,e.documentUpdates).next((f=>{c=f.Ls,u=f.ks}))),!r.isEqual(we.min())){const f=n.hi.getLastRemoteSnapshotVersion(i).next((p=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(f)}return ee.waitFor(l).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,u))).next((()=>c))})).then((i=>(n.Fs=s,i)))}function IP(t,e,n){let r=Le(),s=Le();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=kr();return n.forEach(((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(we.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):fe(Tf,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)})),{Ls:o,ks:s}}))}function TP(t,e){const n=Ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=cf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function bP(t,e){const n=Ae(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.hi.getTargetData(r,e).next((i=>i?(s=i,ee.resolve(s)):n.hi.allocateTargetId(r).next((o=>(s=new Kr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r}))}async function fh(t,e,n){const r=Ae(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!$i(o))throw o;fe(Tf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function xm(t,e,n){const r=Ae(t);let s=we.min(),i=Le();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,f){const p=Ae(c),m=p.Ms.get(f);return m!==void 0?ee.resolve(p.Fs.get(m)):p.hi.getTargetData(u,f)})(r,o,er(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next((c=>{i=c}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:we.min(),n?i:Le()))).next((l=>(wP(r,cR(e),l),{documents:l,qs:i})))))}function wP(t,e,n){let r=t.xs.get(e)||we.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.xs.set(e,r)}class Fm{constructor(){this.activeTargetIds=mR()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class AP{constructor(){this.Fo=new Fm,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Fm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class SP{xo(e){}shutdown(){}}/**
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
 */const Um="ConnectivityMonitor";class $m{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){fe(Um,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){fe(Um,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let rl=null;function dh(){return rl===null?rl=(function(){return 268435456+Math.round(2147483648*Math.random())})():rl++,"0x"+rl.toString(16)}/**
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
 */const pu="RestConnection",CP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class RP{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===ql?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=dh(),l=this.Go(e,n.toUriEncodedString());fe(pu,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,s,i);const{host:u}=new URL(l),f=Vi(u);return this.jo(e,l,c,r,f).then((p=>(fe(pu,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw rs(pu,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p}))}Jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Fi})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,n){const r=CP[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
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
 */class PP{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Qt="WebChannelConnection";class kP extends RP{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const o=dh();return new Promise(((l,c)=>{const u=new tv;u.setWithCredentials(!0),u.listenOnce(nv.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case pl.NO_ERROR:const p=u.getResponseJson();fe(Qt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case pl.TIMEOUT:fe(Qt,`RPC '${e}' ${o} timed out`),c(new he(J.DEADLINE_EXCEEDED,"Request time out"));break;case pl.HTTP_ERROR:const m=u.getStatus();if(fe(Qt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let T=u.getResponseJson();Array.isArray(T)&&(T=T[0]);const P=T==null?void 0:T.error;if(P&&P.status&&P.message){const V=(function(N){const F=N.toLowerCase().replace(/_/g,"-");return Object.values(J).indexOf(F)>=0?F:J.UNKNOWN})(P.status);c(new he(V,P.message))}else c(new he(J.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new he(J.UNAVAILABLE,"Connection failed."));break;default:ve(9055,{c_:e,streamId:o,l_:u.getLastErrorCode(),h_:u.getLastError()})}}finally{fe(Qt,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);fe(Qt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}P_(e,n,r){const s=dh(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=iv(),l=sv(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");fe(Qt,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=o.createWebChannel(f,c);this.T_(p);let m=!1,T=!1;const P=new PP({Ho:O=>{T?fe(Qt,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(m||(fe(Qt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),fe(Qt,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},Yo:()=>p.close()}),V=(O,N,F)=>{O.listen(N,(H=>{try{F(H)}catch(U){setTimeout((()=>{throw U}),0)}}))};return V(p,To.EventType.OPEN,(()=>{T||(fe(Qt,`RPC '${e}' stream ${s} transport opened.`),P.s_())})),V(p,To.EventType.CLOSE,(()=>{T||(T=!0,fe(Qt,`RPC '${e}' stream ${s} transport closed`),P.__(),this.I_(p))})),V(p,To.EventType.ERROR,(O=>{T||(T=!0,rs(Qt,`RPC '${e}' stream ${s} transport errored. Name:`,O.name,"Message:",O.message),P.__(new he(J.UNAVAILABLE,"The operation could not be completed")))})),V(p,To.EventType.MESSAGE,(O=>{var N;if(!T){const F=O.data[0];ze(!!F,16349);const H=F,U=(H==null?void 0:H.error)||((N=H[0])===null||N===void 0?void 0:N.error);if(U){fe(Qt,`RPC '${e}' stream ${s} received error:`,U);const Z=U.status;let ne=(function(I){const S=wt[I];if(S!==void 0)return $v(S)})(Z),_=U.message;ne===void 0&&(ne=J.INTERNAL,_="Unknown error status: "+Z+" with message "+U.message),T=!0,P.__(new he(ne,_)),p.close()}else fe(Qt,`RPC '${e}' stream ${s} received:`,F),P.a_(F)}})),V(l,rv.STAT_EVENT,(O=>{O.stat===eh.PROXY?fe(Qt,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===eh.NOPROXY&&fe(Qt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{P.o_()}),0),P}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((n=>n===e))}}function mu(){return typeof document<"u"?document:null}/**
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
 */function Sc(t){return new LR(t,!0)}/**
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
 */class eE{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&fe("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const jm="PersistentStream";class tE{constructor(e,n,r,s,i,o,l,c){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new eE(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===J.RESOURCE_EXHAUSTED?(Pr(n.toString()),Pr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===J.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===n&&this.W_(r,s)}),(r=>{e((()=>{const s=new he(J.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return fe(jm,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget((()=>this.b_===e?n():(fe(jm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class NP extends tE{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=xR(this.serializer,e),r=(function(i){if(!("targetChange"in i))return we.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?we.min():o.readTime?tr(o.readTime):we.min()})(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=hh(this.serializer),n.addTarget=(function(i,o){let l;const c=o.target;if(l=ih(c)?{documents:$R(i,c)}:{query:jR(i,c).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=qv(i,o.resumeToken);const u=lh(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(we.min())>0){l.readTime=Kl(i,o.snapshotVersion.toTimestamp());const u=lh(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l})(this.serializer,e);const r=qR(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=hh(this.serializer),n.removeTarget=e,this.k_(n)}}class DP extends tE{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=UR(e.writeResults,e.commitTime),r=tr(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=hh(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>FR(this.serializer,r)))};this.k_(n)}}/**
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
 */class OP{}class LP extends OP{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new he(J.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,ch(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new he(J.UNKNOWN,i.toString())}))}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Jo(e,ch(n,r),s,o,l,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new he(J.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class VP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Pr(n),this._a=!1):fe("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Ws="RemoteStore";class MP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((o=>{r.enqueueAndForget((async()=>{Gs(this)&&(fe(Ws,"Restarting streams for network reachability change."),await(async function(c){const u=Ae(c);u.Ia.add(4),await Ia(u),u.Aa.set("Unknown"),u.Ia.delete(4),await Cc(u)})(this))}))})),this.Aa=new VP(r,s)}}async function Cc(t){if(Gs(t))for(const e of t.da)await e(!0)}async function Ia(t){for(const e of t.da)await e(!1)}function nE(t,e){const n=Ae(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Sf(n)?Af(n):Bi(n).x_()&&wf(n,e))}function bf(t,e){const n=Ae(t),r=Bi(n);n.Ta.delete(e),r.x_()&&rE(n,e),n.Ta.size===0&&(r.x_()?r.B_():Gs(n)&&n.Aa.set("Unknown"))}function wf(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Bi(t).H_(e)}function rE(t,e){t.Ra.$e(e),Bi(t).Y_(e)}function Af(t){t.Ra=new kR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Bi(t).start(),t.Aa.aa()}function Sf(t){return Gs(t)&&!Bi(t).M_()&&t.Ta.size>0}function Gs(t){return Ae(t).Ia.size===0}function sE(t){t.Ra=void 0}async function xP(t){t.Aa.set("Online")}async function FP(t){t.Ta.forEach(((e,n)=>{wf(t,e)}))}async function UP(t,e){sE(t),Sf(t)?(t.Aa.la(e),Af(t)):t.Aa.set("Unknown")}async function $P(t,e,n){if(t.Aa.set("Online"),e instanceof Bv&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ta.delete(l),s.Ra.removeTarget(l))})(t,e)}catch(r){fe(Ws,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ql(t,r)}else if(e instanceof yl?t.Ra.Ye(e):e instanceof jv?t.Ra.it(e):t.Ra.et(e),!n.isEqual(we.min()))try{const r=await Zv(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const l=i.Ra.Pt(o);return l.targetChanges.forEach(((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ta.get(u);f&&i.Ta.set(u,f.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,u)=>{const f=i.Ta.get(c);if(!f)return;i.Ta.set(c,f.withResumeToken(Wt.EMPTY_BYTE_STRING,f.snapshotVersion)),rE(i,c);const p=new Kr(f.target,c,u,f.sequenceNumber);wf(i,p)})),i.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(r){fe(Ws,"Failed to raise snapshot:",r),await Ql(t,r)}}async function Ql(t,e,n){if(!$i(e))throw e;t.Ia.add(1),await Ia(t),t.Aa.set("Offline"),n||(n=()=>Zv(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{fe(Ws,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Cc(t)}))}function iE(t,e){return e().catch((n=>Ql(t,n,e)))}async function Rc(t){const e=Ae(t),n=ls(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:cf;for(;jP(e);)try{const s=await TP(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,BP(e,s)}catch(s){await Ql(e,s)}oE(e)&&aE(e)}function jP(t){return Gs(t)&&t.Pa.length<10}function BP(t,e){t.Pa.push(e);const n=ls(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function oE(t){return Gs(t)&&!ls(t).M_()&&t.Pa.length>0}function aE(t){ls(t).start()}async function qP(t){ls(t).na()}async function HP(t){const e=ls(t);for(const n of t.Pa)e.X_(n.mutations)}async function WP(t,e,n){const r=t.Pa.shift(),s=gf.from(r,e,n);await iE(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Rc(t)}async function zP(t,e){e&&ls(t).Z_&&await(async function(r,s){if((function(o){return RR(o)&&o!==J.ABORTED})(s.code)){const i=r.Pa.shift();ls(r).N_(),await iE(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Rc(r)}})(t,e),oE(t)&&aE(t)}async function Bm(t,e){const n=Ae(t);n.asyncQueue.verifyOperationInProgress(),fe(Ws,"RemoteStore received new credentials");const r=Gs(n);n.Ia.add(3),await Ia(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Cc(n)}async function KP(t,e){const n=Ae(t);e?(n.Ia.delete(2),await Cc(n)):e||(n.Ia.add(2),await Ia(n),n.Aa.set("Unknown"))}function Bi(t){return t.Va||(t.Va=(function(n,r,s){const i=Ae(n);return i.ia(),new NP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:xP.bind(null,t),e_:FP.bind(null,t),n_:UP.bind(null,t),J_:$P.bind(null,t)}),t.da.push((async e=>{e?(t.Va.N_(),Sf(t)?Af(t):t.Aa.set("Unknown")):(await t.Va.stop(),sE(t))}))),t.Va}function ls(t){return t.ma||(t.ma=(function(n,r,s){const i=Ae(n);return i.ia(),new DP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:qP.bind(null,t),n_:zP.bind(null,t),ea:HP.bind(null,t),ta:WP.bind(null,t)}),t.da.push((async e=>{e?(t.ma.N_(),await Rc(t)):(await t.ma.stop(),t.Pa.length>0&&(fe(Ws,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))}))),t.ma}/**
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
 */class Cf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new es,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Cf(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(J.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rf(t,e){if(Pr("AsyncQueue",`${e}: ${t}`),$i(t))return new he(J.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ti{static emptySet(e){return new Ti(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||me.comparator(n.key,r.key):(n,r)=>me.comparator(n.key,r.key),this.keyedMap=bo(),this.sortedSet=new pt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ti)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ti;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class qm{constructor(){this.fa=new pt(me.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):ve(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Oi{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((l=>{o.push({type:0,doc:l})})),new Oi(e,n,Ti.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ic(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class GP{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class QP{constructor(){this.queries=Hm(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=Ae(n),i=s.queries;s.queries=Hm(),i.forEach(((o,l)=>{for(const c of l.wa)c.onError(r)}))})(this,new he(J.ABORTED,"Firestore shutting down"))}}function Hm(){return new Ks((t=>Rv(t)),Ic)}async function lE(t,e){const n=Ae(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new GP,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Rf(o,`Initialization of query '${fi(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&Pf(n)}async function cE(t,e){const n=Ae(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function YP(t,e){const n=Ae(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.wa)l.Ca(s)&&(r=!0);o.ya=s}}r&&Pf(n)}function XP(t,e,n){const r=Ae(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function Pf(t){t.Da.forEach((e=>{e.next()}))}var ph,Wm;(Wm=ph||(ph={})).Fa="default",Wm.Cache="cache";class uE{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Oi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=Oi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==ph.Cache}}/**
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
 */class hE{constructor(e){this.key=e}}class fE{constructor(e){this.key=e}}class JP{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Le(),this.mutatedKeys=Le(),this.Xa=Pv(e),this.eu=new Ti(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new qm,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),T=Tc(this.query,p)?p:null,P=!!m&&this.mutatedKeys.has(m.key),V=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let O=!1;m&&T?m.data.isEqual(T.data)?P!==V&&(r.track({type:3,doc:T}),O=!0):this.iu(m,T)||(r.track({type:2,doc:T}),O=!0,(c&&this.Xa(T,c)>0||u&&this.Xa(T,u)<0)&&(l=!0)):!m&&T?(r.track({type:0,doc:T}),O=!0):m&&!T&&(r.track({type:1,doc:m}),O=!0,(c||u)&&(l=!0)),O&&(T?(o=o.add(T),i=V?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:l,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort(((f,p)=>(function(T,P){const V=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve(20277,{At:O})}};return V(T)-V(P)})(f.type,p.type)||this.Xa(f.doc,p.doc))),this.su(r),s=s!=null&&s;const l=n&&!s?this.ou():[],c=this.Za.size===0&&this.current&&!s?1:0,u=c!==this.Ya;return this.Ya=c,o.length!==0||u?{snapshot:new Oi(this.query,e.eu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new qm,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((n=>this.Ha=this.Ha.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ha=this.Ha.delete(n))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Le(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const n=[];return e.forEach((r=>{this.Za.has(r)||n.push(new fE(r))})),this.Za.forEach((r=>{e.has(r)||n.push(new hE(r))})),n}uu(e){this.Ha=e.qs,this.Za=Le();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return Oi.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const kf="SyncEngine";class ZP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class ek{constructor(e){this.key=e,this.lu=!1}}class tk{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Ks((l=>Rv(l)),Ic),this.Tu=new Map,this.Iu=new Set,this.du=new pt(me.comparator),this.Eu=new Map,this.Au=new vf,this.Ru={},this.Vu=new Map,this.mu=Di.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function nk(t,e,n=!0){const r=yE(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await dE(r,e,n,!0),s}async function rk(t,e){const n=yE(t);await dE(n,e,!0,!1)}async function dE(t,e,n,r){const s=await bP(t.localStore,er(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await sk(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&nE(t.remoteStore,s),l}async function sk(t,e,n,r,s){t.gu=(p,m,T)=>(async function(V,O,N,F){let H=O.view.nu(N);H.Ds&&(H=await xm(V.localStore,O.query,!1).then((({documents:_})=>O.view.nu(_,H))));const U=F&&F.targetChanges.get(O.targetId),Z=F&&F.targetMismatches.get(O.targetId)!=null,ne=O.view.applyChanges(H,V.isPrimaryClient,U,Z);return Km(V,O.targetId,ne._u),ne.snapshot})(t,p,m,T);const i=await xm(t.localStore,e,!0),o=new JP(e,i.qs),l=o.nu(i.documents),c=Ea.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);Km(t,n,u._u);const f=new ZP(e,n,o);return t.Pu.set(e,f),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),u.snapshot}async function ik(t,e,n){const r=Ae(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((o=>!Ic(o,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await fh(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&bf(r.remoteStore,s.targetId),mh(r,s.targetId)})).catch(Ui)):(mh(r,s.targetId),await fh(r.localStore,s.targetId,!0))}async function ok(t,e){const n=Ae(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),bf(n.remoteStore,r.targetId))}async function ak(t,e,n){const r=pk(t);try{const s=await(function(o,l){const c=Ae(o),u=ut.now(),f=l.reduce(((T,P)=>T.add(P.key)),Le());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",(T=>{let P=kr(),V=Le();return c.Os.getEntries(T,f).next((O=>{P=O,P.forEach(((N,F)=>{F.isValidDocument()||(V=V.add(N))}))})).next((()=>c.localDocuments.getOverlayedDocuments(T,P))).next((O=>{p=O;const N=[];for(const F of l){const H=bR(F,p.get(F.key).overlayedDocument);H!=null&&N.push(new ms(F.key,H,Ev(H.value.mapValue),Fn.exists(!0)))}return c.mutationQueue.addMutationBatch(T,u,N,l)})).next((O=>{m=O;const N=O.applyToLocalDocumentSet(p,V);return c.documentOverlayCache.saveOverlays(T,O.batchId,N)}))})).then((()=>({batchId:m.batchId,changes:Nv(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,l,c){let u=o.Ru[o.currentUser.toKey()];u||(u=new pt(ke)),u=u.insert(l,c),o.Ru[o.currentUser.toKey()]=u})(r,s.batchId,n),await Ta(r,s.changes),await Rc(r.remoteStore)}catch(s){const i=Rf(s,"Failed to persist write");n.reject(i)}}async function pE(t,e){const n=Ae(t);try{const r=await EP(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Eu.get(i);o&&(ze(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?ze(o.lu,14607):s.removedDocuments.size>0&&(ze(o.lu,42227),o.lu=!1))})),await Ta(n,r,e)}catch(r){await Ui(r)}}function zm(t,e,n){const r=Ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach(((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(o,l){const c=Ae(o);c.onlineState=l;let u=!1;c.queries.forEach(((f,p)=>{for(const m of p.wa)m.va(l)&&(u=!0)})),u&&Pf(c)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function lk(t,e,n){const r=Ae(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new pt(me.comparator);o=o.insert(i,en.newNoDocument(i,we.min()));const l=Le().add(i),c=new Ac(we.min(),new Map,new pt(ke),o,l);await pE(r,c),r.du=r.du.remove(i),r.Eu.delete(e),Nf(r)}else await fh(r.localStore,e,!1).then((()=>mh(r,e,n))).catch(Ui)}async function ck(t,e){const n=Ae(t),r=e.batch.batchId;try{const s=await vP(n.localStore,e);gE(n,r,null),mE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ta(n,s)}catch(s){await Ui(s)}}async function uk(t,e,n){const r=Ae(t);try{const s=await(function(o,l){const c=Ae(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next((p=>(ze(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>c.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);gE(r,e,n),mE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ta(r,s)}catch(s){await Ui(s)}}function mE(t,e){(t.Vu.get(e)||[]).forEach((n=>{n.resolve()})),t.Vu.delete(e)}function gE(t,e,n){const r=Ae(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function mh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach((r=>{t.Au.containsKey(r)||_E(t,r)}))}function _E(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(bf(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),Nf(t))}function Km(t,e,n){for(const r of n)r instanceof hE?(t.Au.addReference(r.key,e),hk(t,r)):r instanceof fE?(fe(kf,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||_E(t,r.key)):ve(19791,{yu:r})}function hk(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(fe(kf,"New document in limbo: "+n),t.Iu.add(r),Nf(t))}function Nf(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new me(st.fromString(e)),r=t.mu.next();t.Eu.set(r,new ek(n)),t.du=t.du.insert(n,r),nE(t.remoteStore,new Kr(er(Ec(n.path)),r,"TargetPurposeLimboResolution",_c.ue))}}async function Ta(t,e,n){const r=Ae(t),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach(((l,c)=>{o.push(r.gu(c,e,n).then((u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=If.Es(c.targetId,u);i.push(p)}})))})),await Promise.all(o),r.hu.J_(s),await(async function(c,u){const f=Ae(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>ee.forEach(u,(m=>ee.forEach(m.Is,(T=>f.persistence.referenceDelegate.addReference(p,m.targetId,T))).next((()=>ee.forEach(m.ds,(T=>f.persistence.referenceDelegate.removeReference(p,m.targetId,T)))))))))}catch(p){if(!$i(p))throw p;fe(Tf,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const T=f.Fs.get(m),P=T.snapshotVersion,V=T.withLastLimboFreeSnapshotVersion(P);f.Fs=f.Fs.insert(m,V)}}})(r.localStore,i))}async function fk(t,e){const n=Ae(t);if(!n.currentUser.isEqual(e)){fe(kf,"User change. New user:",e.toKey());const r=await Jv(n.localStore,e);n.currentUser=e,(function(i,o){i.Vu.forEach((l=>{l.forEach((c=>{c.reject(new he(J.CANCELLED,o))}))})),i.Vu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ta(n,r.Bs)}}function dk(t,e){const n=Ae(t),r=n.Eu.get(e);if(r&&r.lu)return Le().add(r.key);{let s=Le();const i=n.Tu.get(e);if(!i)return s;for(const o of i){const l=n.Pu.get(o);s=s.unionWith(l.view.tu)}return s}}function yE(t){const e=Ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=pE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=dk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lk.bind(null,e),e.hu.J_=YP.bind(null,e.eventManager),e.hu.pu=XP.bind(null,e.eventManager),e}function pk(t){const e=Ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ck.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=uk.bind(null,e),e}class Yl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Sc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return yP(this.persistence,new mP,e.initialUser,this.serializer)}Du(e){return new Xv(Ef.Vi,this.serializer)}bu(e){return new AP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Yl.provider={build:()=>new Yl};class mk extends Yl{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){ze(this.persistence.referenceDelegate instanceof Gl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new eP(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?fn.withCacheSize(this.cacheSizeBytes):fn.DEFAULT;return new Xv((r=>Gl.Vi(r,n)),this.serializer)}}class gh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>zm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=fk.bind(null,this.syncEngine),await KP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new QP})()}createDatastore(e){const n=Sc(e.databaseInfo.databaseId),r=(function(i){return new kP(i)})(e.databaseInfo);return(function(i,o,l,c){return new LP(i,o,l,c)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,l){return new MP(r,s,i,o,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>zm(this.syncEngine,n,0)),(function(){return $m.C()?new $m:new SP})())}createSyncEngine(e,n){return(function(s,i,o,l,c,u,f){const p=new tk(s,i,o,l,c,u);return f&&(p.fu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=Ae(s);fe(Ws,"RemoteStore shutting down."),i.Ia.add(5),await Ia(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}gh.provider={build:()=>new gh};/**
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
 */class vE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Pr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const cs="FirestoreClient";class gk{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Jt.UNAUTHENTICATED,this.clientId=lf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{fe(cs,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(fe(cs,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new es;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Rf(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function gu(t,e){t.asyncQueue.verifyOperationInProgress(),fe(cs,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Jv(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{rs("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then((()=>{fe("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{rs("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),t._offlineComponents=e}async function Gm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _k(t);fe(cs,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>Bm(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>Bm(e.remoteStore,s))),t._onlineComponents=e}async function _k(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){fe(cs,"Using user provided OfflineComponentProvider");try{await gu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===J.FAILED_PRECONDITION||s.code===J.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;rs("Error using user provided cache. Falling back to memory cache: "+n),await gu(t,new Yl)}}else fe(cs,"Using default OfflineComponentProvider"),await gu(t,new mk(void 0));return t._offlineComponents}async function EE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(fe(cs,"Using user provided OnlineComponentProvider"),await Gm(t,t._uninitializedComponentsProvider._online)):(fe(cs,"Using default OnlineComponentProvider"),await Gm(t,new gh))),t._onlineComponents}function yk(t){return EE(t).then((e=>e.syncEngine))}async function _h(t){const e=await EE(t),n=e.eventManager;return n.onListen=nk.bind(null,e.syncEngine),n.onUnlisten=ik.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=rk.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ok.bind(null,e.syncEngine),n}function vk(t,e,n={}){const r=new es;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,u){const f=new vE({next:m=>{f.Ou(),o.enqueueAndForget((()=>cE(i,p)));const T=m.docs.has(l);!T&&m.fromCache?u.reject(new he(J.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&m.fromCache&&c&&c.source==="server"?u.reject(new he(J.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new uE(Ec(l.path),f,{includeMetadataChanges:!0,ka:!0});return lE(i,p)})(await _h(t),t.asyncQueue,e,n,r))),r.promise}/**
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
 */function IE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Qm=new Map;/**
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
 */const TE="firestore.googleapis.com",Ym=!0;class Xm{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new he(J.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=TE,this.ssl=Ym}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Ym;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Yv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<JR)throw new he(J.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}MC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=IE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new he(J.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new he(J.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new he(J.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Pc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(J.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(J.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new CC;switch(r.type){case"firstParty":return new NC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new he(J.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Qm.get(n);r&&(fe("ComponentProvider","Removing Datastore"),Qm.delete(n),r.terminate())})(this),Promise.resolve()}}function Ek(t,e,n,r={}){var s;t=xn(t,Pc);const i=Vi(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(gy(`https://${c}`),_y("Firestore",!0)),o.host!==TE&&o.host!==c&&rs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:r});if(!js(u,l)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Jt.MOCK_USER;else{f=Z0(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new he(J.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Jt(m)}t._authCredentials=new RC(new av(f,p))}}/**
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
 */class Qs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Qs(this.firestore,e,this._query)}}class vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ts(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}toJSON(){return{type:vt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ya(n,vt._jsonSchema))return new vt(e,r||null,new me(st.fromString(n.referencePath)))}}vt._jsonSchemaVersion="firestore/documentReference/1.0",vt._jsonSchema={type:Rt("string",vt._jsonSchemaVersion),referencePath:Rt("string")};class ts extends Qs{constructor(e,n,r){super(e,n,Ec(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new me(e))}withConverter(e){return new ts(this.firestore,e,this._path)}}function _u(t,e,...n){if(t=xt(t),cv("collection","path",e),t instanceof Pc){const r=st.fromString(e,...n);return um(r),new ts(t,null,r)}{if(!(t instanceof vt||t instanceof ts))throw new he(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(st.fromString(e,...n));return um(r),new ts(t.firestore,null,r)}}function mr(t,e,...n){if(t=xt(t),arguments.length===1&&(e=lf.newId()),cv("doc","path",e),t instanceof Pc){const r=st.fromString(e,...n);return cm(r),new vt(t,null,new me(r))}{if(!(t instanceof vt||t instanceof ts))throw new he(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(st.fromString(e,...n));return cm(r),new vt(t.firestore,t instanceof ts?t.converter:null,new me(r))}}/**
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
 */const Jm="AsyncQueue";class Zm{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new eE(this,"async_queue_retry"),this.oc=()=>{const r=mu();r&&fe(Jm,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=mu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=mu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const n=new es;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!$i(e))throw e;fe(Jm,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const n=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Pr("INTERNAL UNHANDLED ERROR: ",eg(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=Cf.createAndSchedule(this,e,n,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&ve(47125,{hc:eg(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function eg(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function tg(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}class zs extends Pc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Zm,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Zm(e),this._firestoreClient=void 0,await e}}}function Ik(t,e){const n=typeof t=="object"?t:Iy(),r=typeof t=="string"?t:ql,s=Gh(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=X0("firestore");i&&Ek(s,...i)}return s}function Df(t){if(t._terminated)throw new he(J.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Tk(t),t._firestoreClient}function Tk(t){var e,n,r;const s=t._freezeSettings(),i=(function(l,c,u,f){return new KC(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,IE(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new gk(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&(function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}})(t._componentsProvider))}/**
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
 */class Tn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Tn(Wt.fromBase64String(e))}catch(n){throw new he(J.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Tn(Wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Tn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ya(e,Tn._jsonSchema))return Tn.fromBase64String(e.bytes)}}Tn._jsonSchemaVersion="firestore/bytes/1.0",Tn._jsonSchema={type:Rt("string",Tn._jsonSchemaVersion),bytes:Rt("string")};/**
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
 */class kc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new he(J.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Nc{constructor(e){this._methodName=e}}/**
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
 */class nr{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new he(J.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new he(J.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:nr._jsonSchemaVersion}}static fromJSON(e){if(ya(e,nr._jsonSchema))return new nr(e.latitude,e.longitude)}}nr._jsonSchemaVersion="firestore/geoPoint/1.0",nr._jsonSchema={type:Rt("string",nr._jsonSchemaVersion),latitude:Rt("number"),longitude:Rt("number")};/**
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
 */class rr{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:rr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ya(e,rr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new rr(e.vectorValues);throw new he(J.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}rr._jsonSchemaVersion="firestore/vectorValue/1.0",rr._jsonSchema={type:Rt("string",rr._jsonSchemaVersion),vectorValues:Rt("object")};/**
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
 */const bk=/^__.*__$/;class wk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ms(e,this.data,this.fieldMask,n,this.fieldTransforms):new va(e,this.data,n,this.fieldTransforms)}}class bE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ms(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function wE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve(40011,{Ec:t})}}class Of{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Of(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Xl(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(wE(this.Ec)&&bk.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Ak{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Sc(e)}Dc(e,n,r,s=!1){return new Of({Ec:e,methodName:n,bc:r,path:qt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Lf(t){const e=t._freezeSettings(),n=Sc(t._databaseId);return new Ak(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Sk(t,e,n,r,s,i={}){const o=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);Mf("Data must be an object, but it was:",o,r);const l=AE(r,o);let c,u;if(i.merge)c=new vn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=yh(e,p,n);if(!o.contains(m))throw new he(J.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);CE(f,m)||f.push(m)}c=new vn(f),u=o.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,u=o.fieldTransforms;return new wk(new dn(l),c,u)}class ba extends Nc{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ba}}class Vf extends Nc{_toFieldTransform(e){return new vR(e.path,new oa)}isEqual(e){return e instanceof Vf}}function Ck(t,e,n,r){const s=t.Dc(1,e,n);Mf("Data must be an object, but it was:",s,r);const i=[],o=dn.empty();ps(r,((c,u)=>{const f=xf(e,c,n);u=xt(u);const p=s.gc(f);if(u instanceof ba)i.push(f);else{const m=wa(u,p);m!=null&&(i.push(f),o.set(f,m))}}));const l=new vn(i);return new bE(o,l,s.fieldTransforms)}function Rk(t,e,n,r,s,i){const o=t.Dc(1,e,n),l=[yh(e,r,n)],c=[s];if(i.length%2!=0)throw new he(J.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(yh(e,i[m])),c.push(i[m+1]);const u=[],f=dn.empty();for(let m=l.length-1;m>=0;--m)if(!CE(u,l[m])){const T=l[m];let P=c[m];P=xt(P);const V=o.gc(T);if(P instanceof ba)u.push(T);else{const O=wa(P,V);O!=null&&(u.push(T),f.set(T,O))}}const p=new vn(u);return new bE(f,p,o.fieldTransforms)}function Pk(t,e,n,r=!1){return wa(n,t.Dc(r?4:3,e))}function wa(t,e){if(SE(t=xt(t)))return Mf("Unsupported field value:",e,t),AE(t,e);if(t instanceof Nc)return(function(r,s){if(!wE(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const l of r){let c=wa(l,s.yc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=xt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return gR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ut.fromDate(r);return{timestampValue:Kl(s.serializer,i)}}if(r instanceof ut){const i=new ut(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Kl(s.serializer,i)}}if(r instanceof nr)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Tn)return{bytesValue:qv(s.serializer,r._byteString)};if(r instanceof vt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:yf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof rr)return(function(o,l){return{mapValue:{fields:{[yv]:{stringValue:vv},[Hl]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw l.wc("VectorValues must only contain numeric values.");return pf(l.serializer,u)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${gc(r)}`)})(t,e)}function AE(t,e){const n={};return fv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ps(t,((r,s)=>{const i=wa(s,e.Vc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function SE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ut||t instanceof nr||t instanceof Tn||t instanceof vt||t instanceof Nc||t instanceof rr)}function Mf(t,e,n){if(!SE(n)||!uv(n)){const r=gc(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function yh(t,e,n){if((e=xt(e))instanceof kc)return e._internalPath;if(typeof e=="string")return xf(t,e);throw Xl("Field path arguments must be of type string or ",t,!1,void 0,n)}const kk=new RegExp("[~\\*/\\[\\]]");function xf(t,e,n){if(e.search(kk)>=0)throw Xl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new kc(...e.split("."))._internalPath}catch{throw Xl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Xl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new he(J.INVALID_ARGUMENT,l+t+c)}function CE(t,e){return t.some((n=>n.isEqual(e)))}/**
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
 */class RE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Nk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ff("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Nk extends RE{data(){return super.data()}}function Ff(t,e){return typeof e=="string"?xf(t,e):e instanceof kc?e._internalPath:e._delegate._internalPath}/**
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
 */function Dk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new he(J.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uf{}class PE extends Uf{}function ng(t,e,...n){let r=[];e instanceof Uf&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((c=>c instanceof jf)).length,l=i.filter((c=>c instanceof $f)).length;if(o>1||o>0&&l>0)throw new he(J.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class $f extends PE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new $f(e,n,r)}_apply(e){const n=this._parse(e);return kE(e._query,n),new Qs(e.firestore,e.converter,oh(e._query,n))}_parse(e){const n=Lf(e.firestore);return(function(i,o,l,c,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new he(J.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){ig(p,f);const P=[];for(const V of p)P.push(sg(c,i,V));m={arrayValue:{values:P}}}else m=sg(c,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||ig(p,f),m=Pk(l,o,p,f==="in"||f==="not-in");return St.create(u,f,m)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class jf extends Uf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new jf(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:jn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)kE(o,c),o=oh(o,c)})(e._query,n),new Qs(e.firestore,e.converter,oh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Bf extends PE{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Bf(e,n)}_apply(e){const n=(function(s,i,o){if(s.startAt!==null)throw new he(J.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new he(J.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ia(i,o)})(e._query,this._field,this._direction);return new Qs(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new ji(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,n))}}function rg(t,e="asc"){const n=e,r=Ff("orderBy",t);return Bf._create(r,n)}function sg(t,e,n){if(typeof(n=xt(n))=="string"){if(n==="")throw new he(J.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Cv(e)&&n.indexOf("/")!==-1)throw new he(J.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(st.fromString(n));if(!me.isDocumentKey(r))throw new he(J.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ym(t,new me(r))}if(n instanceof vt)return ym(t,n._key);throw new he(J.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gc(n)}.`)}function ig(t,e){if(!Array.isArray(t)||t.length===0)throw new he(J.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function kE(t,e){const n=(function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new he(J.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new he(J.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Ok{convertValue(e,n="none"){switch(as(e)){case 0:return null;case 1:return e.booleanValue;case 2:return It(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(os(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ve(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ps(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Hl].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((o=>It(o.doubleValue)));return new rr(i)}convertGeoPoint(e){return new nr(It(e.latitude),It(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=vc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(na(e));default:return null}}convertTimestamp(e){const n=is(e);return new ut(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=st.fromString(e);ze(Qv(r),9688,{name:e});const s=new ra(r.get(1),r.get(3)),i=new me(r.popFirst(5));return s.isEqual(n)||Pr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Lk(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Ao{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xs extends RE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new vl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ff("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new he(J.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=xs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}xs._jsonSchemaVersion="firestore/documentSnapshot/1.0",xs._jsonSchema={type:Rt("string",xs._jsonSchemaVersion),bundleSource:Rt("string","DocumentSnapshot"),bundleName:Rt("string"),bundle:Rt("string")};class vl extends xs{data(e={}){return super.data(e)}}class bi{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ao(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new vl(this._firestore,this._userDataWriter,r.key,r,new Ao(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new he(J.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((l=>{const c=new vl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ao(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new vl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ao(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:Vk(l.type),doc:c,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new he(J.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=bi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=lf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Vk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve(61501,{type:t})}}/**
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
 */function Mk(t){t=xn(t,vt);const e=xn(t.firestore,zs);return vk(Df(e),t._key).then((n=>DE(e,t,n)))}bi._jsonSchemaVersion="firestore/querySnapshot/1.0",bi._jsonSchema={type:Rt("string",bi._jsonSchemaVersion),bundleSource:Rt("string","QuerySnapshot"),bundleName:Rt("string"),bundle:Rt("string")};class NE extends Ok{constructor(e){super(),this.firestore=e}convertBytes(e){return new Tn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,n)}}function mo(t,e,n){t=xn(t,vt);const r=xn(t.firestore,zs),s=Lk(t.converter,e,n);return qf(r,[Sk(Lf(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Fn.none())])}function yu(t,e,n,...r){t=xn(t,vt);const s=xn(t.firestore,zs),i=Lf(s);let o;return o=typeof(e=xt(e))=="string"||e instanceof kc?Rk(i,"updateDoc",t._key,e,n,r):Ck(i,"updateDoc",t._key,e),qf(s,[o.toMutation(t._key,Fn.exists(!0))])}function xk(t){return qf(xn(t.firestore,zs),[new mf(t._key,Fn.none())])}function sl(t,...e){var n,r,s;t=xt(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||tg(e[o])||(i=e[o++]);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(tg(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,u,f;if(t instanceof vt)u=xn(t.firestore,zs),f=Ec(t._key.path),c={next:p=>{e[o]&&e[o](DE(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=xn(t,Qs);u=xn(p.firestore,zs),f=p._query;const m=new NE(u);c={next:T=>{e[o]&&e[o](new bi(u,m,p,T))},error:e[o+1],complete:e[o+2]},Dk(t._query)}return(function(m,T,P,V){const O=new vE(V),N=new uE(T,O,P);return m.asyncQueue.enqueueAndForget((async()=>lE(await _h(m),N))),()=>{O.Ou(),m.asyncQueue.enqueueAndForget((async()=>cE(await _h(m),N)))}})(Df(u),f,l,c)}function qf(t,e){return(function(r,s){const i=new es;return r.asyncQueue.enqueueAndForget((async()=>ak(await yk(r),s,i))),i.promise})(Df(t),e)}function DE(t,e,n){const r=n.docs.get(e._key),s=new NE(t);return new xs(t,s,e._key,r,new Ao(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */function vu(){return new ba("deleteField")}function go(){return new Vf("serverTimestamp")}(function(e,n=!0){(function(s){Fi=s})(Mi),Ci(new Bs("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new zs(new PC(r.getProvider("auth-internal")),new DC(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new he(J.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ra(u.options.projectId,f)})(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),Jr(sm,im,e),Jr(sm,im,"esm2017")})();var Fk="firebase",Uk="11.10.0";/**
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
 */Jr(Fk,Uk,"app");const El={apiKey:"AIzaSyApsoJQfyOGdk_mjXTDm-XRGEoOLNqC97Q",authDomain:"diet-67.firebaseapp.com",projectId:"diet-67",storageBucket:"diet-67.firebasestorage.app",messagingSenderId:"680276410340",appId:"1:680276410340:web:7a414f113cf43212ddd1f1"},OE=!!(El.apiKey&&El.projectId&&El.appId),Jl=OE?Ey(El):null,ai=Jl?AC(Jl):null,Et=Jl?Ik(Jl):null,$k=new Er,LE=["calories","carbs","protein","fat","fiber","salt"];function VE(){return{calories:null,carbs:null,protein:null,fat:null,fiber:null,salt:null}}function jk(t){return typeof t=="object"&&t!==null?t:void 0}function ME(t){if(typeof t=="object"&&t!==null){const n=t;return ME(n.value_computed??n.value??n.value_string)}if(typeof t!="number"&&typeof t!="string"||String(t).trim()==="")return null;const e=Number(t);return Number.isFinite(e)&&e>=0?e:null}function Eu(t){const e=jk(t);if(!e)return;const n=VE();let r=!1;for(const s of LE){const i=ME(e[s]);n[s]=i,i!==null&&(r=!0)}return r?n:void 0}function il(t){var n;const e={};for(const r of LE){let s=0,i=0;for(const l of t){const c=String(l.quantity??"").trim();if(!c)continue;const u=Number(c);if(!Number.isFinite(u)||u<0)continue;const f=l.nutritionBasis||"100g",p=l.quantityUnit||"g";if(!(f==="100g"&&p==="g"||f==="unit"&&p==="unit"))continue;const T=(n=l.nutrition)==null?void 0:n[r];typeof T!="number"||!Number.isFinite(T)||T<0||(s+=T*(f==="100g"?u/100:u),i+=1)}const o={value:i?Number(s.toFixed(2)):null,knownIngredients:i,totalIngredients:t.length};e[r]=o}return e}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Iu(t){return t!=null}function Bk(t,e={}){var m,T;const n=e.attributeNames??{},r=P=>n[P]??P,s=t.size??t.width??ws.width,i=t.size??t.height??ws.height,o=((m=t.aliases)==null?void 0:m.filter(P=>typeof P=="string"&&P.trim()!=="").map(P=>`lucide-${P}`))??[],l=[...t.name?[`lucide-${t.name}`]:[],...o],c=((T=e.className)==null?void 0:T.split(" ").filter(Boolean))??[],u=e.includeDefaultClasses===!1?og(...c):og("lucide",...l,...c),f=e.absoluteStrokeWidth?Number(e.strokeWidth??ws["stroke-width"])*Number(t.size??t.width??ws.width)/Number(e.size??e.width??ws.width):e.strokeWidth??ws["stroke-width"];return["svg",{...Object.entries(ws).reduce((P,[V,O])=>(P[r(V)]=O,P),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&Iu(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&Iu(e.width)&&{[r("width")]:e.width},..."height"in e&&Iu(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:f,...u&&{[r("class")]:u},[r("viewBox")]:`0 0 ${s} ${i}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(P=>{const[V,O,N]=P,F=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...O}:O;return N?[V,F,N]:[V,F]})]}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=t=>t==="";/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk=Symbol("lucide-icons");function zk(){return _i(Wk,{})}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=({name:t,iconNode:e,"icon-node":n,icon:r={name:t&&Hk(t),node:e??n??[],size:24,aliases:[]},absoluteStrokeWidth:s,"absolute-stroke-width":i,nonScalingStroke:o,"non-scaling-stroke":l,strokeWidth:c,"stroke-width":u,size:f,width:p=f,height:m=f,color:T,...P},{slots:V})=>{var k;const{size:O,color:N,strokeWidth:F=2,absoluteStrokeWidth:H=!1,nonScalingStroke:U=!1,class:Z=""}=zk(),ne=ol(s)||ol(i)||s===!0||i===!0||H===!0,_=ol(o)||ol(l)||o===!0||l===!0||U===!0;delete P.class;const E=(k=V.default)==null?void 0:k.call(V),[,I,S=[]]=Bk(r,{color:T??N,width:p??f??O,height:m??f??O,strokeWidth:c??u??F,absoluteStrokeWidth:ne,nonScalingStroke:_,className:Z,hasA11yProp:E!=null&&E.length>0||qk(P),attributes:P});return Fs("svg",I,[...S.map(([x,A])=>Fs(x,A)),...E??[]])};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function mt(t,e=[]){const n=typeof t=="string"?{name:t,node:e}:t;return(r,{slots:s})=>Fs(Kk,{...r,icon:n},s.default?{default:s.default}:void 0)}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk={name:"chart-pie",size:24,node:[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]],aliases:["pie-chart"]},Qk=mt(Gk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]},li=mt(Yk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xk={name:"chef-hat",size:24,node:[["path",{d:"M10 11v5",key:"urfl79"}],["path",{d:"M14 11v5",key:"w9lfkh"}],["path",{d:"M6 12.65c0-.457-.316-.844-.727-1.041A4 4 0 017.52 4.034a1.53 1.53 0 001.367-.547 4 4 0 016.225 0 1.53 1.53 0 001.367.547 4 4 0 012.248 7.575c-.411.197-.727.584-.727 1.04V19a2 2 0 01-2 2H8a2 2 0 01-2-2z",key:"1dq1bt"}],["path",{d:"M6 16h12",key:"u522kt"}]]},Tu=mt(Xk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]},Zk=mt(Jk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eN={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]},tN=mt(eN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nN={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]},_o=mt(nN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rN={name:"chevron-up",size:24,node:[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]},sN=mt(rN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iN={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]},ag=mt(iN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oN={name:"languages",size:24,node:[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]},aN=mt(oN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lN={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]},cN=mt(lN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uN={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]},hN=mt(uN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fN={name:"pencil",size:24,node:[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]},dN=mt(fN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pN={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]},bu=mt(pN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mN={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]},gN=mt(mN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _N={name:"shopping-basket",size:24,node:[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]]},lg=mt(_N);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yN={name:"shopping-cart",size:24,node:[["path",{d:"m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18",key:"uebgi3"}],["path",{d:"M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25",key:"1j7c9p"}],["circle",{cx:"18",cy:"20",r:"2",key:"t9985n"}],["circle",{cx:"8",cy:"20",r:"2",key:"ckkr5m"}]]},vN=mt(yN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EN={name:"sliders-horizontal",size:24,node:[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]]},IN=mt(EN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TN={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]},bN=mt(TN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wN={name:"store",size:24,node:[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5",key:"slp6dd"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",key:"o0xfot"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05",key:"wn3emo"}]]},cg=mt(wN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AN={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]},SN=mt(AN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CN={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]},ug=mt(CN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RN={name:"utensils",size:24,node:[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],aliases:["fork-knife"]},hg=mt(RN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PN={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]},yo=mt(PN),kN={key:0,class:"auth-screen center-state"},NN={class:"state-icon"},DN={key:1,class:"auth-screen center-state"},ON={key:2,class:"auth-screen login-state"},LN={class:"hero-orbit"},VN={class:"hero-plate"},MN={key:0,class:"error-text"},xN={key:3,class:"auth-screen center-state"},FN={class:"state-icon"},UN={key:4,class:"app-shell"},$N={class:"app-topbar"},jN={class:"header-main-row"},BN={class:"brand top-brand"},qN={class:"brand-mark"},HN={class:"brand-copy"},WN={class:"brand-version"},zN={class:"header-date"},KN={class:"top-actions"},GN=["title"],QN=["title"],YN=["title"],XN={class:"top-nav","aria-label":"Main navigation"},JN=["onClick"],ZN={class:"main-content"},eD={key:0,class:"page plan-page"},tD={class:"page-heading compact plan-heading section-heading"},nD={class:"plan-toolbar"},rD=["title","disabled"],sD=["title"],iD={class:"plan-day-list"},oD=["data-day-key"],aD={class:"plan-day-heading"},lD={class:"day-weekday"},cD={key:0,class:"today-marker"},uD={class:"plan-day-meals"},hD={class:"plan-meal-meta"},fD={class:"day-meal-type"},dD={class:"day-meal-time"},pD={class:"meal-picker-actions day-meal-picker-actions"},mD=["aria-expanded","onClick"],gD=["onClick"],_D=["title","aria-label","onClick"],yD={key:1,class:"page"},vD={class:"page-heading compact section-heading meals-page-heading"},ED={class:"meals-heading-actions"},ID={class:"search-box meals-search-box"},TD=["placeholder"],bD={key:0,class:"meals-list"},wD={class:"meal-row-number"},AD={class:"meal-row-main"},SD={class:"meal-title"},CD=["title","aria-label"],RD={key:0,class:"ingredient-preview"},PD={key:0},kD={key:1},ND={class:"frequency"},DD={class:"frequency-metric"},OD={class:"frequency-label"},LD={class:"frequency-metric"},VD={class:"frequency-label"},MD={class:"row-actions"},xD=["title","onClick"],FD=["title","onClick"],UD={key:1,class:"empty-collection"},$D={class:"state-icon"},jD={key:2,class:"page insights-page"},BD={class:"page-heading compact section-heading insights-heading"},qD={class:"insights-intro"},HD={class:"insights-week-label"},WD={class:"insights-section"},zD={class:"insights-section-heading"},KD={class:"insights-summary-grid"},GD={class:"insights-section"},QD={class:"insights-section-heading"},YD={class:"insights-days"},XD={class:"insight-day-heading"},JD={key:0,class:"insight-day-meals"},ZD={class:"insight-meal-title"},eO={class:"insight-nutrient-values"},tO={key:1,class:"insight-empty-day"},nO={class:"insights-section"},rO={class:"insights-section-heading"},sO={key:0,class:"insights-dish-grid"},iO={key:0,class:"insight-nutrient-values dish-nutrient-values"},oO={key:1,class:"empty-collection"},aO={class:"insights-footnote"},lO={key:3,class:"page shopping-page"},cO={class:"page-heading compact section-heading shopping-page-heading"},uO={class:"shopping-heading-actions"},hO={class:"shopping-filter-toggle"},fO={class:"shopping-filter-label"},dO=["aria-expanded"],pO={key:0,class:"shopping-groups"},mO={class:"shopping-store-heading"},gO={class:"shopping-item-info"},_O={key:0},yO={key:1},vO=["aria-label"],EO=["onClick"],IO=["onClick"],TO=["onClick"],bO={key:1,class:"empty-collection"},wO={class:"muted"},AO={class:"meal-modal store-priority-modal"},SO={class:"modal-header"},CO={class:"eyebrow"},RO={class:"modal-description"},PO=["aria-label"],kO={key:0,class:"store-priority-list"},NO={class:"priority-order-hint"},DO={class:"priority-position"},OO={class:"store-priority-item-info"},LO={class:"priority-reorder-actions"},VO=["disabled","aria-label","title","onClick"],MO=["disabled","aria-label","title","onClick"],xO={key:1,class:"empty-priority-state"},FO={class:"modal-actions"},UO=["disabled"],$O={class:"meal-modal"},jO={class:"modal-header"},BO={class:"form-field"},qO={class:"ingredients-editor"},HO={class:"ingredients-editor-heading"},WO={key:0,class:"empty-form-hint"},zO={class:"ingredient-editor-fields"},KO={class:"form-field ingredient-name-field"},GO=["onUpdate:modelValue","placeholder"],QO={class:"form-field ingredient-quantity-field"},YO=["value","aria-label","step","inputmode","placeholder","onInput"],XO=["aria-expanded","onClick"],JO=["onClick"],ZO={class:"quantity-option-label"},eL=["onClick"],tL={class:"quantity-option-symbol"},nL={class:"quantity-option-label"},rL={class:"store-picker-line"},sL={class:"field-caption"},iL=["aria-expanded","onClick"],oL=["onClick"],aL=["onClick"],lL=["aria-expanded","aria-controls","aria-label","onClick"],cL=["title","onClick"],uL=["id","aria-label"],hL=["placeholder","onKeydown"],fL=["disabled","onClick"],dL={class:"nutrition-editor-content"},pL={class:"nutrition-basis-row"},mL=["for"],gL=["id","value","onChange"],_L={value:"100g"},yL={value:"unit"},vL={key:0,class:"nutrition-unit-warning"},EL={class:"nutrition-input-grid"},IL=["value","onInput"],TL={class:"nutrition-editor-hint"},bL={class:"modal-actions"},wL={class:"primary-btn",type:"submit"},fg="2026-11-16",AL=oc({__name:"App",setup(t){const{t:e,locale:n}=hc(),r=B0.version,s=et(null),i=et(!1),o=et(!0),l=et(""),c=et([]),u=et([]),f=et({}),p=et("home"),m=et(localStorage.getItem("diet-theme")||"dark"),T=et(""),P=et(!1),V=et(null),O=et(null),N=et(null),F=et({visibility:"hidden"}),H=et({name:"",ingredients:[]}),U=et(null),Z=et(""),ne=et({}),_=et([]),E=et([]),I=et(!1),S=yt(()=>{const L=new Map(u.value.map(M=>[M.id,M])),C=_.value.map(M=>L.get(M)).filter(M=>!!M),b=new Set(C.map(M=>M.id));return[...C,...u.value.filter(M=>!b.has(M.id))]}),k=yt(()=>{const L=new Map(u.value.map(C=>[C.id,C]));return E.value.map(C=>L.get(C)).filter(C=>!!C)}),x=["breakfast","lunch","snack","dinner"],A=["10:00","13:00","16:00","20:00"],Ve=new Date,Ne=L=>`${L.getFullYear()}-${String(L.getMonth()+1).padStart(2,"0")}-${String(L.getDate()).padStart(2,"0")}`,it=Ne(Ve),Re=new Date(2026,10,16),Ce=Ve<Re?Re:Ve,gt=new Date(Ve);Ve.getDay()===6?gt.setDate(gt.getDate()+2):Ve.getDay()===0&&gt.setDate(gt.getDate()+1);const Dt=et(new Date(gt<Re?Re:gt)),Xe=et(Ve.getDay()===0||Ve.getDay()===6?"next":"this"),je=et(!1),ot=yt(()=>Ne(Dt.value)),Cn=L=>{const[C,b,M]=L.split("-").map(Number);return new Date(C,b-1,M)},ht=L=>{const C=new Date(L);return C.setHours(0,0,0,0),C.setDate(C.getDate()-(C.getDay()+6)%7),C},cn=Ne(ht(Re)),un=yt(()=>{const L=ht(Ve);return Xe.value==="next"&&L.setDate(L.getDate()+7),Ne(L)}),Rn=yt(()=>Ne(ht(Dt.value))>cn),mn=L=>new Intl.DateTimeFormat(n.value==="it"?"it-IT":"en-US",{weekday:"long",day:"numeric",month:"long"}).format(L),nn=L=>new Intl.DateTimeFormat(n.value==="it"?"it-IT":"en-US",{day:"numeric",month:"short"}).format(L),w=yt(()=>c.value.filter(L=>L.name.toLowerCase().includes(T.value.toLowerCase())).sort((L,C)=>L.name.localeCompare(C.name))),D=yt(()=>{const L=ht(Dt.value);return Array.from({length:7},(C,b)=>{const M=new Date(L);return M.setDate(L.getDate()+b),M})}),W=yt(()=>[{key:"calories",label:e("calories"),shortLabel:"kcal",unit:"kcal"},{key:"carbs",label:e("carbohydrates"),shortLabel:e("carbsShort"),unit:"g"},{key:"protein",label:e("protein"),shortLabel:e("proteinShort"),unit:"g"},{key:"fat",label:e("fat"),shortLabel:e("fat"),unit:"g"},{key:"fiber",label:e("fiber"),shortLabel:e("fiber"),unit:"g"},{key:"salt",label:e("salt"),shortLabel:e("salt"),unit:"g"}]),te=yt(()=>D.value.map(L=>{const C=Ne(L),b=x.flatMap(M=>{var De,Fe;const re=(Fe=(De=f.value[C])==null?void 0:De.meals)==null?void 0:Fe[M];if(!re)return[];const Ee=c.value.find(at=>at.id===re.mealId),Pe=(Ee==null?void 0:Ee.ingredients)||[];return[{type:M,name:(Ee==null?void 0:Ee.name)||re.mealName,ingredients:Pe,nutrition:il(Pe)}]});return{date:L,key:C,meals:b,nutrition:il(b.flatMap(M=>M.ingredients))}})),G=yt(()=>il(te.value.flatMap(L=>L.meals.flatMap(C=>C.ingredients)))),X=yt(()=>c.value.map(L=>({id:L.id,name:L.name,nutrition:il(L.ingredients),hasNutrition:Or(L)}))),se=yt(()=>`${nn(D.value[0])} – ${nn(D.value[6])}`),oe=Ne(ht(Ce)),y=new Date(ht(Ce));y.setDate(y.getDate()+6);const v=Ne(y),B=L=>Ne(ht(Cn(L)));function z(L){return Object.entries(f.value).reduce((C,[b,M])=>B(b)!==oe?C:C+Object.values(M.meals||{}).filter(re=>(re==null?void 0:re.mealId)===L).length,0)}function ae(L){const C=Object.entries(f.value).filter(([Fe,at])=>Fe>=fg&&Fe<=v&&Object.values(at.meals||{}).some(zt=>(zt==null?void 0:zt.mealId)===L)).sort(([Fe],[at])=>Fe.localeCompare(at));if(!C.length)return 0;const b=ht(Cn(C[0][0])),M=ht(Ce),re=Date.UTC(b.getFullYear(),b.getMonth(),b.getDate()),Ee=Date.UTC(M.getFullYear(),M.getMonth(),M.getDate()),Pe=Math.floor((Ee-re)/(10080*60*1e3))+1,De=C.reduce((Fe,[,at])=>Fe+Object.values(at.meals||{}).filter(zt=>(zt==null?void 0:zt.mealId)===L).length,0);return Number((De/Math.max(1,Pe)).toFixed(1))}function ce(L){return L>=3?"high":L>=1.5?"medium":"low"}function _e(L){if(typeof L!="string"&&typeof L!="number")return"";const C=String(L).trim();if(!C)return"";const b=C.match(/^([0-9]+(?:[.,][0-9]+)?)\s*(g|gr|grammi|grams|kg|kilogrammi|kilograms)?$/i);if(!b)return"";const M=Number(b[1].replace(",",".")),re=/^k/i.test(b[2]||"")?M*1e3:M;return Number.isFinite(re)&&re>=0?String(Number(re.toFixed(3))):""}function de(L){if(typeof L!="string"&&typeof L!="number")return"";const C=String(L).trim();if(!C)return"";const b=C.match(/^([0-9]+(?:[.,][0-9]+)?)\s*(?:u|unit(?:à|a)?|units?|pcs?|pieces?|pezzi)?$/i);if(!b)return"";const M=Number(b[1].replace(",","."));return Number.isFinite(M)&&M>=0?String(Number(M.toFixed(3))):""}function $(L,C){return C==="unit"?de(L):_e(L)}function Q(L){return Array.isArray(L)?L.map(C=>{if(typeof C=="string")return{name:C,quantity:"",quantityUnit:"g",storeIds:[],nutritionBasis:"100g"};if(C&&typeof C=="object"){const b=C,M=typeof b.storeId=="string"&&b.storeId?[b.storeId]:[],re=Array.isArray(b.storeIds)?b.storeIds.filter(Fe=>typeof Fe=="string"&&!!Fe):M,Ee=b.quantityUnit==="unit"?"unit":"g",Pe=Eu(b.nutrition),De=b.nutritionBasis==="unit"||!b.nutritionBasis&&Ee==="unit"?"unit":"100g";return{name:typeof b.name=="string"?b.name:"",quantity:$(b.quantity,Ee),quantityUnit:Ee,storeIds:[...new Set(re)],nutritionBasis:De,...Pe?{nutrition:Pe}:{}}}return{name:"",quantity:"",quantityUnit:"g",storeIds:[],nutritionBasis:"100g"}}).filter(C=>C.name.trim()):[]}let ge,be,Ue,Qe,Ft;function bt(){Et&&(ge==null||ge(),be==null||be(),Ue==null||Ue(),Qe==null||Qe(),ge=sl(ng(_u(Et,"meals"),rg("name")),L=>{c.value=L.docs.map(C=>{const b=C.data();return{id:C.id,name:String(b.name||""),ingredients:Q(b.ingredients),createdAt:b.createdAt}})}),be=sl(_u(Et,"plan"),L=>{const C={};L.docs.forEach(b=>{const M=b.data();C[b.id]={id:b.id,date:String(M.date||b.id),meals:M.meals||{}}}),f.value=C}),Ue=sl(ng(_u(Et,"stores"),rg("name")),L=>{u.value=L.docs.map(C=>({id:C.id,name:String(C.data().name||"")}))}),Qe=sl(mr(Et,"shoppingLists","current"),L=>{const C=L.data()||{},b=C.statuses||{},M=Array.isArray(C.storePriorityOrder)?C.storePriorityOrder.filter(re=>typeof re=="string"&&!!re):[];ne.value=Object.fromEntries(Object.entries(b).map(([re,Ee])=>[re,Ee==="todo"?"buy":Ee])),_.value=[...new Set(M)]}))}async function Ut(L){if(!Et){o.value=!1;return}try{const C=await Mk(mr(Et,"users",L.uid));i.value=C.exists()&&C.data().enabled===!0,i.value&&bt()}catch(C){console.error("Unable to verify user access:",C),i.value=!1}finally{o.value=!1}}function En(){O.value=null,N.value=null,F.value={visibility:"hidden"}}function gs(){En()}function ur(){const L=N.value;if(!L||!L.isConnected||!O.value)return;const C=L.getBoundingClientRect(),b=document.querySelector(".dropdown-menu-portal"),M=O.value.startsWith("quantity-"),re=M?140:245,Ee=Math.min((b==null?void 0:b.scrollHeight)||re,re),Pe=7,De=8,Fe=Math.max(0,window.innerHeight-C.bottom-Pe-De),at=Math.max(0,C.top-Pe-De),zt=Fe<Ee&&at>Fe,rn=Math.min(re,zt?at:Fe),gn=Math.min(Ee,rn),ni=zt?Math.max(De,C.top-Pe-gn):Math.min(window.innerHeight-De,C.bottom+Pe),Mr=Math.min(M?172:C.width,window.innerWidth-De*2),Pa=M?C.right-Mr:C.left,Je=Math.max(De,Math.min(Pa,window.innerWidth-Mr-De));F.value={top:`${ni}px`,left:`${Je}px`,width:`${Mr}px`,maxHeight:`${rn}px`,visibility:"visible"}}Oh(()=>{if(document.addEventListener("click",gs),document.addEventListener("scroll",ur,!0),window.addEventListener("resize",ur),!ai||!Et){o.value=!1;return}Ft=dS(ai,async L=>{s.value=L,i.value=!1,o.value=!0,ge==null||ge(),be==null||be(),Ue==null||Ue(),Qe==null||Qe(),c.value=[],f.value={},u.value=[],ne.value={},_.value=[],E.value=[],L?await Ut(L):o.value=!1})}),Lh(()=>{document.removeEventListener("click",gs),document.removeEventListener("scroll",ur,!0),window.removeEventListener("resize",ur),Ft==null||Ft(),ge==null||ge(),be==null||be(),Ue==null||Ue(),Qe==null||Qe()}),Sr(m,L=>{document.documentElement.dataset.theme=L,localStorage.setItem("diet-theme",L)},{immediate:!0}),Sr(n,L=>localStorage.setItem("diet-language",L));async function Aa(){if(ai){l.value="";try{await LS(ai,$k)}catch(L){l.value=L instanceof Error?L.message:"Authentication failed"}}}async function qi(){ai&&await pS(ai)}async function Bn(L,C){if(O.value===L){En();return}O.value=L,N.value=C.currentTarget,F.value={visibility:"hidden"},await Wg(),ur()}function Ys(L){Xe.value=L,En()}function Hi(L,C,b){Qi(L,C,b),En()}function hr(L,C){Qi(L,C,""),En()}function Sa(L,C){var M,re,Ee;const b=(re=(M=f.value[L])==null?void 0:M.meals)==null?void 0:re[C];if(b)return((Ee=c.value.find(Pe=>Pe.id===b.mealId))==null?void 0:Ee.name)||b.mealName||void 0}function _s(L,C){if(!C){L.storeIds=[],En();return}L.storeIds=L.storeIds.includes(C)?L.storeIds.filter(b=>b!==C):[...L.storeIds,C]}function Wi(L){return u.value.filter(C=>L.includes(C.id)).map(C=>C.name).join(", ")}function ys(L){const C=L.length;return C?C===1?Wi(L)||e("chooseStores"):e("storesSelected",{count:C}):e("chooseStores")}function Xs(L){return L==="unit"?e("quantityUnitPiecesShort"):"g"}function Ot(L,C){if(!L)return"";const b=C==="unit"&&n.value==="en"&&Number(L)===1?"pc":Xs(C);return`${L} ${b}`}function zi(L){return!!Eu(L.nutrition)}function Or(L){return L.ingredients.length>0&&L.ingredients.every(zi)}function Lr(L,C){L.quantityUnit=C,!!L.nutrition&&Object.values(L.nutrition).some(M=>typeof M=="number")||(L.nutritionBasis=C==="g"?"100g":"unit"),En()}function Dc(L,C,b){const M=b.target.value,re=M.trim()===""?null:Number(M);re!==null&&(!Number.isFinite(re)||re<0)||(L.nutrition={...VE(),...L.nutrition||{},[C]:re})}function Js(L,C){if(L===null||!Number.isFinite(L))return"—";const b=C==="kcal"?Math.round(L):Number(L.toFixed(1));return`${new Intl.NumberFormat(n.value==="it"?"it-IT":"en-US").format(b)} ${C}`}function Vr(L,C){const b=C.target.value;b!=="100g"&&b!=="unit"||L.nutritionBasis!==b&&(L.nutritionBasis=b,L.nutrition=void 0)}function Oc(L){return!L.totalIngredients||!L.knownIngredients?e("nutritionMissing"):L.knownIngredients<L.totalIngredients?e("nutritionPartialCoverage",{known:L.knownIngredients,total:L.totalIngredients}):e("nutritionComplete")}function Ki(L){V.value=L||null,H.value=L?{name:L.name,ingredients:Q(L.ingredients).map(C=>({...C,localId:crypto.randomUUID()}))}:{name:"",ingredients:[]},U.value=null,Z.value="",P.value=!0}function Zs(){H.value.ingredients.push({localId:crypto.randomUUID(),name:"",quantity:"",quantityUnit:"g",storeIds:[],nutritionBasis:"100g"})}function Ca(L){H.value.ingredients=H.value.ingredients.filter(C=>C.localId!==L),U.value===L&&(U.value=null)}async function Gi(){if(!Et||!H.value.name.trim())return;const L=H.value.ingredients.filter(b=>b.name.trim()).map(b=>{const M=Eu(b.nutrition);return{name:b.name.trim(),quantity:$(b.quantity,b.quantityUnit),quantityUnit:b.quantityUnit,storeIds:[...new Set(b.storeIds)],nutritionBasis:b.nutritionBasis||(b.quantityUnit==="g"?"100g":"unit"),...M?{nutrition:M}:{}}}),C={name:H.value.name.trim(),ingredients:L,updatedAt:go()};V.value?await yu(mr(Et,"meals",V.value.id),{...C,description:vu(),tags:vu()}):await mo(mr(Et,"meals",crypto.randomUUID()),{...C,createdAt:go()}),P.value=!1}async function ei(L){!Et||!confirm(e("confirmDelete"))||await xk(mr(Et,"meals",L.id))}async function Pn(L){if(!Et||!Z.value.trim())return;const C=crypto.randomUUID(),b=Z.value.trim();await mo(mr(Et,"stores",C),{name:b,createdAt:go()});const M=H.value.ingredients.find(re=>re.localId===L);M&&(M.storeIds=[...new Set([...M.storeIds,C])]),Z.value="",U.value=null}async function Qi(L,C,b){var Pe,De;if(!Et)return;const M=Ne(L),re=mr(Et,"plan",M),Ee=c.value.find(Fe=>Fe.id===b);if(Ee){const Fe={mealId:Ee.id,mealName:Ee.name};f.value[M]?await yu(re,{[`meals.${C}`]:Fe}):await mo(re,{date:M,meals:{[C]:Fe}},{merge:!0});return}(De=(Pe=f.value[M])==null?void 0:Pe.meals)!=null&&De[C]&&await yu(re,{[`meals.${C}`]:vu()})}function Yi(L){const C=new Date(Dt.value);C.setDate(C.getDate()+L*7),!(Ne(ht(C))<cn)&&(Dt.value=C)}function Xi(){Dt.value=new Date(Ce)}const Ji=yt(()=>{const L=ht(Ve);return Xe.value==="next"&&L.setDate(L.getDate()+7),Array.from({length:7},(b,M)=>{const re=new Date(L);return re.setDate(L.getDate()+M),re}).filter(b=>Ne(b)>=it&&Ne(b)>=fg)});function Zi(L,C,b){const M=`${un.value}:${L.trim().toLocaleLowerCase()}:${C||"none"}`;return b==="unit"?`${M}:unit`:M}function Ra(L,C){const b=L.map(re=>Number($(re,C))).filter(re=>Number.isFinite(re)&&re>0);if(!b.length)return"";const M=b.reduce((re,Ee)=>re+Ee,0);return String(Number(M.toFixed(3)))}const eo=yt(()=>{const L=new Map;for(const M of Ji.value){const re=f.value[Ne(M)];for(const Ee of Object.values((re==null?void 0:re.meals)||{})){if(!Ee)continue;const Pe=c.value.find(De=>De.id===Ee.mealId);for(const De of(Pe==null?void 0:Pe.ingredients)||[]){const Fe=De.name.trim();if(!Fe)continue;const at=De.quantityUnit||"g",zt=Lc(Fe),ro=`${zt}:${at}`,rn=L.get(ro);rn?(rn.occurrences+=1,De.storeIds.forEach(gn=>rn.storeIds.add(gn)),De.quantity.trim()&&rn.quantities.push(De.quantity.trim())):L.set(ro,{name:Fe,ingredientKey:zt,quantityUnit:at,storeIds:new Set(De.storeIds),quantities:De.quantity.trim()?[De.quantity.trim()]:[],occurrences:1})}}}const C=new Map;for(const M of L.values()){const re=C.get(M.ingredientKey)||new Set;M.storeIds.forEach(Ee=>re.add(Ee)),C.set(M.ingredientKey,re)}const b=new Map(S.value.map((M,re)=>[M.id,re]));return[...L.values()].map(M=>{const re=C.get(M.ingredientKey)||M.storeIds,Ee=S.value.filter(at=>re.has(at.id)),Pe=Ee[0],De=(Pe==null?void 0:Pe.id)||"",Fe=Zi(M.name,De,M.quantityUnit);return{...M,storeIds:Ee.map(at=>at.id),storeOptions:Ee,storeId:De,storeName:(Pe==null?void 0:Pe.name)||e("noStore"),quantity:Ra(M.quantities,M.quantityUnit),key:Fe,status:ne.value[Fe]||Ee.map(at=>Zi(M.name,at.id,M.quantityUnit)).map(at=>ne.value[at]).find(Boolean)||"buy"}}).sort((M,re)=>(b.get(M.storeId)??Number.MAX_SAFE_INTEGER)-(b.get(re.storeId)??Number.MAX_SAFE_INTEGER)||M.storeName.localeCompare(re.storeName)||M.name.localeCompare(re.name))}),ti=yt(()=>{const L=new Map;for(const b of eo.value){const M=L.get(b.storeId)||[];M.push(b),L.set(b.storeId,M)}const C=new Map(S.value.map((b,M)=>[b.id,M]));return[...L.entries()].sort(([b],[M])=>(C.get(b)??Number.MAX_SAFE_INTEGER)-(C.get(M)??Number.MAX_SAFE_INTEGER)).map(([b,M])=>{var re;return{id:b,name:((re=u.value.find(Ee=>Ee.id===b))==null?void 0:re.name)||e("noStore"),items:M}})}),to=yt(()=>ti.value.map(L=>({...L,items:L.items.filter(C=>!je.value||C.status!=="home")})).filter(L=>L.items.length>0));async function vs(L,C){Et&&(ne.value={...ne.value,[L]:C},await mo(mr(Et,"shoppingLists","current"),{statuses:ne.value,updatedAt:go()},{merge:!0}))}function Es(){E.value=S.value.map(L=>L.id),I.value=!0}function qn(L,C){const b=L+C;if(b<0||b>=E.value.length)return;const M=[...E.value];[M[L],M[b]]=[M[b],M[L]],E.value=M}async function no(){if(!Et)return;const L=[..._.value],C=[...new Set(E.value.filter(b=>u.value.some(M=>M.id===b)))];u.value.forEach(b=>{C.includes(b.id)||C.push(b.id)}),_.value=C;try{await mo(mr(Et,"shoppingLists","current"),{storePriorityOrder:C,updatedAt:go()},{merge:!0}),I.value=!1}catch(b){_.value=L,console.error("Unable to save global store priority:",b)}}function Lc(L){return encodeURIComponent(L.trim().toLocaleLowerCase()).replace(/\./g,"%2E")}return(L,C)=>q(OE)?o.value?(ie(),ue("div",DN,[...C[28]||(C[28]=[R("div",{class:"loader"},null,-1),R("p",null,"Loading…",-1)])])):s.value?i.value?(ie(),ue("div",UN,[R("header",$N,[R("div",jN,[R("div",BN,[R("div",qN,[Ie(q(hg),{size:18})]),R("span",HN,[C[33]||(C[33]=R("span",{class:"brand-name"},[hn("diet"),R("span",{class:"brand-dot"},".")],-1)),R("span",WN,"v"+Y(q(r)),1)])]),R("div",zN,Y(mn(new Date)),1),R("div",KN,[R("button",{class:"icon-btn",onClick:C[0]||(C[0]=b=>m.value=m.value==="dark"?"light":"dark"),title:q(e)(m.value==="dark"?"light":"dark")},[m.value==="dark"?(ie(),jt(q(SN),{key:0})):(ie(),jt(q(hN),{key:1}))],8,GN),R("button",{class:"icon-btn",onClick:C[1]||(C[1]=b=>n.value=q(n)==="en"?"it":"en"),title:q(e)("language")},[Ie(q(aN))],8,QN),R("button",{class:"icon-btn",onClick:qi,title:q(e)("signOut")},[Ie(q(cN))],8,YN)])]),R("nav",XN,[(ie(),ue(Be,null,Lt(["home","meals","shopping","insights"],b=>R("button",{key:b,class:Pt(["top-nav-item",{active:p.value===b}]),onClick:M=>p.value=b},[b==="home"?(ie(),jt(q(ag),{key:0})):b==="meals"?(ie(),jt(q(Tu),{key:1})):b==="shopping"?(ie(),jt(q(lg),{key:2})):(ie(),jt(q(Qk),{key:3})),R("span",null,Y(q(e)(b)),1)],10,JN)),64))])]),R("main",ZN,[p.value==="home"?(ie(),ue("section",eD,[R("div",tD,[R("h1",null,Y(q(e)("home")),1),R("div",nD,[R("button",{class:"icon-btn plan-arrow",title:q(e)("previous"),disabled:!Rn.value,onClick:C[2]||(C[2]=b=>Yi(-1))},[Ie(q(tN))],8,rD),R("button",{class:"secondary-btn this-week-btn",onClick:Xi},Y(q(e)("thisWeek")),1),R("button",{class:"icon-btn plan-arrow",title:q(e)("next"),onClick:C[3]||(C[3]=b=>Yi(1))},[Ie(q(_o))],8,sD)])]),R("div",iD,[(ie(!0),ue(Be,null,Lt(D.value,b=>(ie(),ue("article",{key:Ne(b),"data-day-key":Ne(b),class:Pt(["plan-day-row",{"plan-day-row-today":Ne(b)===q(it),"plan-day-row-focused":Ne(b)===ot.value}])},[R("header",aD,[R("div",null,[R("span",lD,Y(new Intl.DateTimeFormat(q(n)==="it"?"it-IT":"en-US",{weekday:"long"}).format(b)),1),R("h2",null,Y(nn(b)),1)]),Ne(b)===q(it)?(ie(),ue("span",cD,Y(q(e)("today")),1)):ft("",!0)]),R("div",uD,[(ie(),ue(Be,null,Lt(x,(M,re)=>{var Ee;return R("div",{key:M,class:"plan-meal-slot"},[R("div",hD,[R("span",fD,Y(q(e)(M)),1),R("span",dD,Y(A[re]),1)]),R("div",pD,[R("div",{class:"custom-select-wrap day-meal-select",onClick:C[5]||(C[5]=In(()=>{},["stop"]))},[R("button",{class:"custom-select-trigger","aria-expanded":O.value===`plan-${Ne(b)}-${M}`,onClick:Pe=>Bn(`plan-${Ne(b)}-${M}`,Pe)},[R("span",null,Y(Sa(Ne(b),M)||q(e)("selectDish")),1),Ie(q(_o),{class:"select-chevron",size:15})],8,mD),(ie(),jt(qa,{to:"body"},[O.value===`plan-${Ne(b)}-${M}`?(ie(),ue("div",{key:0,class:"custom-select-menu dropdown-menu-portal",style:ks(F.value),onClick:C[4]||(C[4]=In(()=>{},["stop"]))},[(ie(!0),ue(Be,null,Lt(c.value,Pe=>{var De,Fe;return ie(),ue("button",{key:Pe.id,class:Pt(["custom-select-option",{selected:((Fe=(De=f.value[Ne(b)])==null?void 0:De.meals[M])==null?void 0:Fe.mealId)===Pe.id}]),onClick:at=>Hi(b,M,Pe.id)},Y(Pe.name),11,gD)}),128))],4)):ft("",!0)]))]),(Ee=f.value[Ne(b)])!=null&&Ee.meals[M]?(ie(),ue("button",{key:0,type:"button",class:"icon-btn clear-meal-btn",title:q(e)("clearMeal"),"aria-label":q(e)("clearMeal"),onClick:Pe=>hr(b,M)},[Ie(q(yo),{size:15})],8,_D)):ft("",!0)])])}),64))])],10,oD))),128))])])):p.value==="meals"?(ie(),ue("section",yD,[R("div",vD,[R("h1",null,Y(q(e)("meals")),1),R("div",ED,[R("div",ID,[Ie(q(gN),{size:17}),fo(R("input",{"onUpdate:modelValue":C[6]||(C[6]=b=>T.value=b),placeholder:q(e)("search")},null,8,TD),[[za,T.value]])]),R("button",{class:"primary-btn",onClick:C[7]||(C[7]=b=>Ki())},[Ie(q(bu),{size:17}),hn(Y(q(e)("addMeal")),1)])])]),w.value.length?(ie(),ue("div",bD,[(ie(!0),ue(Be,null,Lt(w.value,(b,M)=>(ie(),ue("article",{key:b.id,class:"meal-row"},[R("div",wD,Y(String(M+1).padStart(2,"0")),1),R("div",AD,[R("h3",SD,[hn(Y(b.name)+" ",1),Or(b)?(ie(),ue("span",{key:0,class:"meal-nutrition-indicator",title:q(e)("nutritionValuesPresent"),"aria-label":q(e)("nutritionValuesPresent"),role:"img"},[Ie(q(li),{size:15})],8,CD)):ft("",!0)]),b.ingredients.length?(ie(),ue("div",RD,[(ie(!0),ue(Be,null,Lt(b.ingredients,re=>(ie(),ue("span",{key:`${re.name}-${re.storeIds.join(",")}`,class:"ingredient-chip"},[hn(Y(re.name),1),re.quantity?(ie(),ue("small",PD,Y(Ot(re.quantity,re.quantityUnit)),1)):ft("",!0),re.storeIds.length?(ie(),ue("small",kD,"· "+Y(Wi(re.storeIds)),1)):ft("",!0)]))),128))])):ft("",!0)]),R("div",ND,[R("div",DD,[R("div",OD,Y(q(e)("thisWeek")),1),R("strong",{class:Pt(ce(z(b.id)))},Y(z(b.id)),3)]),R("div",LD,[R("div",VD,Y(q(e)("averagePerWeek")),1),R("strong",{class:Pt(ce(ae(b.id)))},Y(ae(b.id)),3)])]),R("div",MD,[R("button",{class:"icon-btn",title:q(e)("editMeal"),onClick:re=>Ki(b)},[Ie(q(dN))],8,xD),R("button",{class:"icon-btn danger",title:q(e)("delete"),onClick:re=>ei(b)},[Ie(q(ug))],8,FD)])]))),128))])):(ie(),ue("div",UD,[R("div",$D,[Ie(q(Tu))]),R("h3",null,Y(q(e)("noMeals")),1),R("button",{class:"text-btn",onClick:C[8]||(C[8]=b=>Ki())},Y(q(e)("addMeal"))+" +",1)]))])):p.value==="insights"?(ie(),ue("section",jD,[R("div",BD,[R("div",null,[R("h1",null,Y(q(e)("insights")),1),R("p",qD,Y(q(e)("insightsIntro")),1)]),R("span",HD,Y(se.value),1)]),R("section",WD,[R("div",zD,[R("h2",null,Y(q(e)("weekNutrition")),1),R("span",null,Y(q(e)("selectedWeek")),1)]),R("div",KD,[(ie(!0),ue(Be,null,Lt(W.value,b=>(ie(),ue("article",{key:b.key,class:"insight-metric-card"},[R("span",null,Y(b.label),1),R("strong",null,Y(Js(G.value[b.key].value,b.unit)),1),R("small",null,Y(Oc(G.value[b.key])),1)]))),128))])]),R("section",GD,[R("div",QD,[R("h2",null,Y(q(e)("dailyMeals")),1),R("span",null,Y(q(e)("dailyMealsHint")),1)]),R("div",YD,[(ie(!0),ue(Be,null,Lt(te.value,b=>(ie(),ue("article",{key:b.key,class:"insight-day-card"},[R("header",XD,[R("div",null,[R("span",null,Y(new Intl.DateTimeFormat(q(n)==="it"?"it-IT":"en-US",{weekday:"long"}).format(b.date)),1),R("h3",null,Y(nn(b.date)),1)]),R("strong",null,Y(Js(b.nutrition.calories.value,"kcal")),1)]),b.meals.length?(ie(),ue("div",JD,[(ie(!0),ue(Be,null,Lt(b.meals,M=>(ie(),ue("article",{key:M.type,class:"insight-meal-row"},[R("div",ZD,[R("span",null,Y(q(e)(M.type)),1),R("strong",null,Y(M.name),1)]),R("div",eO,[(ie(!0),ue(Be,null,Lt(W.value,re=>(ie(),ue("span",{key:re.key},[R("small",null,Y(re.shortLabel),1),R("strong",null,Y(Js(M.nutrition[re.key].value,re.unit)),1),R("em",null,Y(M.nutrition[re.key].knownIngredients)+"/"+Y(M.nutrition[re.key].totalIngredients),1)]))),128))])]))),128))])):(ie(),ue("p",tO,Y(q(e)("noMealsPlanned")),1))]))),128))])]),R("section",nO,[R("div",rO,[R("h2",null,Y(q(e)("dishNutrition")),1),R("span",null,Y(q(e)("dishNutritionHint")),1)]),X.value.length?(ie(),ue("div",sO,[(ie(!0),ue(Be,null,Lt(X.value,b=>(ie(),ue("article",{key:b.id,class:"insight-dish-card"},[R("h3",null,Y(b.name),1),b.hasNutrition?(ie(),ue("div",iO,[(ie(!0),ue(Be,null,Lt(W.value,M=>(ie(),ue("span",{key:M.key},[R("small",null,Y(M.shortLabel),1),R("strong",null,Y(Js(b.nutrition[M.key].value,M.unit)),1),R("em",null,Y(b.nutrition[M.key].knownIngredients)+"/"+Y(b.nutrition[M.key].totalIngredients),1)]))),128))])):ft("",!0)]))),128))])):(ie(),ue("div",oO,[Ie(q(Tu),{size:28}),R("h3",null,Y(q(e)("noMeals")),1)]))]),R("p",aO,Y(q(e)("nutritionCalculationNote")),1)])):(ie(),ue("section",lO,[R("div",cO,[R("h1",null,Y(q(e)("shopping")),1),R("div",uO,[R("label",hO,[fo(R("input",{"onUpdate:modelValue":C[9]||(C[9]=b=>je.value=b),type:"checkbox"},null,512),[[db,je.value]]),C[34]||(C[34]=R("span",{class:"shopping-filter-switch","aria-hidden":"true"},[R("span")],-1)),R("span",fO,Y(q(e)("excludeAlreadyAtHome")),1)]),R("div",{class:"custom-select-wrap shopping-week-selector",onClick:C[14]||(C[14]=In(()=>{},["stop"]))},[R("button",{class:"custom-select-trigger","aria-expanded":O.value==="shopping-week",onClick:C[10]||(C[10]=b=>Bn("shopping-week",b))},[R("span",null,Y(Xe.value==="this"?q(e)("thisWeek"):q(e)("next")),1),Ie(q(_o),{class:"select-chevron",size:15})],8,dO),(ie(),jt(qa,{to:"body"},[O.value==="shopping-week"?(ie(),ue("div",{key:0,class:"custom-select-menu dropdown-menu-portal",style:ks(F.value),onClick:C[13]||(C[13]=In(()=>{},["stop"]))},[R("button",{class:Pt(["custom-select-option",{selected:Xe.value==="this"}]),onClick:C[11]||(C[11]=b=>Ys("this"))},Y(q(e)("thisWeek")),3),R("button",{class:Pt(["custom-select-option",{selected:Xe.value==="next"}]),onClick:C[12]||(C[12]=b=>Ys("next"))},Y(q(e)("next")),3)],4)):ft("",!0)]))]),R("button",{class:"secondary-btn store-priority-trigger",onClick:Es},[Ie(q(IN),{size:16}),hn(Y(q(e)("storePriorities")),1)])])]),to.value.length?(ie(),ue("div",pO,[(ie(!0),ue(Be,null,Lt(to.value,b=>(ie(),ue("section",{key:b.id||"no-store",class:"shopping-store-group"},[R("header",mO,[Ie(q(cg),{size:17}),R("h2",null,Y(b.name),1),R("span",null,Y(b.items.length),1)]),(ie(!0),ue(Be,null,Lt(b.items,M=>(ie(),ue("article",{key:M.key,class:"shopping-item-row"},[R("div",gO,[R("h3",null,Y(M.name),1),R("p",null,[M.quantity?(ie(),ue("span",_O,Y(Ot(M.quantity,M.quantityUnit)),1)):ft("",!0),!M.quantity&&M.occurrences>1?(ie(),ue("span",yO,Y(M.occurrences)+"×",1)):ft("",!0)])]),R("div",{class:"shopping-status-control",role:"group","aria-label":M.name},[R("button",{class:Pt({selected:M.status==="home"}),onClick:re=>vs(M.key,"home")},[Ie(q(ag),{size:14}),R("span",null,Y(q(e)("alreadyAtHome")),1)],10,EO),R("button",{class:Pt({selected:M.status==="bought"}),onClick:re=>vs(M.key,"bought")},[Ie(q(li),{size:14}),R("span",null,Y(q(e)("bought")),1)],10,IO),R("button",{class:Pt({selected:M.status==="buy"}),onClick:re=>vs(M.key,"buy")},[Ie(q(vN),{size:14}),R("span",null,Y(q(e)("toBuy")),1)],10,TO)],8,vO)]))),128))]))),128))])):(ie(),ue("div",bO,[Ie(q(lg),{size:30}),R("h3",null,Y(eo.value.length&&je.value?q(e)("shoppingAllAtHome"):q(e)("shoppingEmpty")),1),R("p",wO,Y(eo.value.length&&je.value?q(e)("shoppingAllAtHomeHint"):q(e)("shoppingEmptyHint")),1)]))]))]),I.value?(ie(),ue("div",{key:0,class:"modal-backdrop",onClick:C[17]||(C[17]=In(b=>I.value=!1,["self"]))},[R("section",AO,[R("div",SO,[R("div",null,[R("p",CO,Y(q(e)("shopping")),1),R("h2",null,Y(q(e)("storePriorities")),1),R("p",RO,Y(q(e)("storePrioritiesHint")),1)]),R("button",{class:"icon-btn","aria-label":q(e)("close"),onClick:C[15]||(C[15]=b=>I.value=!1)},[Ie(q(yo))],8,PO)]),k.value.length?(ie(),ue("div",kO,[R("p",NO,Y(q(e)("storePriorityOrderHint")),1),(ie(!0),ue(Be,null,Lt(k.value,(b,M)=>(ie(),ue("article",{key:b.id,class:"store-priority-row"},[R("span",DO,Y(String(M+1).padStart(2,"0")),1),R("div",OO,[R("h3",null,Y(b.name),1),R("p",null,Y(M===0?q(e)("highestPriority"):q(e)("priorityNumber",{number:M+1})),1)]),R("div",LO,[R("button",{type:"button",class:"icon-btn priority-move-btn",disabled:M===0,"aria-label":q(e)("moveStoreUp"),title:q(e)("moveStoreUp"),onClick:re=>qn(M,-1)},[Ie(q(sN),{size:16})],8,VO),R("button",{type:"button",class:"icon-btn priority-move-btn",disabled:M===k.value.length-1,"aria-label":q(e)("moveStoreDown"),title:q(e)("moveStoreDown"),onClick:re=>qn(M,1)},[Ie(q(Zk),{size:16})],8,MO)])]))),128))])):(ie(),ue("div",xO,[Ie(q(cg),{size:26}),R("h3",null,Y(q(e)("noStores")),1),R("p",null,Y(q(e)("storesHint")),1)])),R("div",FO,[R("button",{type:"button",class:"secondary-btn",onClick:C[16]||(C[16]=b=>I.value=!1)},Y(q(e)("cancel")),1),R("button",{type:"button",class:"primary-btn",disabled:!k.value.length,onClick:no},Y(q(e)("save")),9,UO)])])])):ft("",!0),P.value?(ie(),ue("div",{key:1,class:"modal-backdrop",onClick:C[26]||(C[26]=In(b=>P.value=!1,["self"]))},[R("section",$O,[R("div",jO,[R("div",null,[C[35]||(C[35]=R("p",{class:"eyebrow"},"MEAL LIBRARY",-1)),R("h2",null,Y(V.value?q(e)("editMeal"):q(e)("addMeal")),1)]),R("button",{class:"icon-btn",onClick:C[18]||(C[18]=b=>P.value=!1)},[Ie(q(yo))])]),R("form",{onSubmit:In(Gi,["prevent"])},[R("label",BO,[hn(Y(q(e)("mealName")),1),fo(R("input",{"onUpdate:modelValue":C[19]||(C[19]=b=>H.value.name=b),required:"",maxlength:"90",autofocus:""},null,512),[[za,H.value.name]])]),R("div",qO,[R("div",HO,[R("h3",null,Y(q(e)("ingredients")),1),R("button",{type:"button",class:"secondary-btn small-btn",onClick:Zs},[Ie(q(bu),{size:15}),hn(Y(q(e)("addIngredient")),1)])]),H.value.ingredients.length?ft("",!0):(ie(),ue("p",WO,Y(q(e)("ingredientsEmpty")),1)),(ie(!0),ue(Be,null,Lt(H.value.ingredients,b=>(ie(),ue("div",{key:b.localId,class:"ingredient-editor-row"},[R("div",zO,[R("label",KO,[hn(Y(q(e)("ingredientName")),1),fo(R("input",{"onUpdate:modelValue":M=>b.name=M,required:"",placeholder:q(e)("ingredientName")},null,8,GO),[[za,b.name]])]),R("div",QO,[R("span",null,Y(q(e)("quantity")),1),R("span",{class:"quantity-input-wrap",onClick:C[21]||(C[21]=In(()=>{},["stop"]))},[R("input",{value:b.quantity,"aria-label":q(e)("quantity"),type:"number",min:"0",step:b.quantityUnit==="unit"?1:"any",inputmode:b.quantityUnit==="unit"?"numeric":"decimal",placeholder:b.quantityUnit==="unit"?"1":"200",onInput:M=>b.quantity=M.target.value},null,40,YO),R("button",{type:"button",class:"quantity-unit quantity-unit-select","aria-expanded":O.value===`quantity-${b.localId}`,onClick:M=>Bn(`quantity-${b.localId}`,M)},[hn(Y(Xs(b.quantityUnit)),1),Ie(q(_o),{size:12})],8,XO),(ie(),jt(qa,{to:"body"},[O.value===`quantity-${b.localId}`?(ie(),ue("div",{key:0,class:"quantity-unit-menu dropdown-menu-portal",style:ks(F.value),onClick:C[20]||(C[20]=In(()=>{},["stop"]))},[R("button",{type:"button",class:Pt(["quantity-unit-option",{selected:b.quantityUnit==="g"}]),onClick:M=>Lr(b,"g")},[C[36]||(C[36]=R("span",{class:"quantity-option-symbol"},"g",-1)),R("span",ZO,Y(q(e)("quantityUnitGrams")),1),b.quantityUnit==="g"?(ie(),jt(q(li),{key:0,size:14})):ft("",!0)],10,JO),R("button",{type:"button",class:Pt(["quantity-unit-option",{selected:b.quantityUnit==="unit"}]),onClick:M=>Lr(b,"unit")},[R("span",tL,Y(Xs("unit")),1),R("span",nL,Y(q(e)("quantityUnitPieces")),1),b.quantityUnit==="unit"?(ie(),jt(q(li),{key:0,size:14})):ft("",!0)],10,eL)],4)):ft("",!0)]))])])]),R("div",rL,[R("span",sL,Y(q(e)("store")),1),R("div",{class:"custom-select-wrap store-select-wrap",onClick:C[23]||(C[23]=In(()=>{},["stop"]))},[R("button",{type:"button",class:"custom-select-trigger","aria-expanded":O.value===`store-${b.localId}`,onClick:M=>Bn(`store-${b.localId}`,M)},[R("span",null,Y(ys(b.storeIds)),1),Ie(q(_o),{class:"select-chevron",size:15})],8,iL),(ie(),jt(qa,{to:"body"},[O.value===`store-${b.localId}`?(ie(),ue("div",{key:0,class:"custom-select-menu dropdown-menu-portal",style:ks(F.value),onClick:C[22]||(C[22]=In(()=>{},["stop"]))},[R("button",{type:"button",class:Pt(["custom-select-option",{selected:!b.storeIds.length}]),onClick:M=>_s(b,"")},[hn(Y(q(e)("noStore")),1),b.storeIds.length?ft("",!0):(ie(),jt(q(li),{key:0,size:14}))],10,oL),(ie(!0),ue(Be,null,Lt(u.value,M=>(ie(),ue("button",{key:M.id,type:"button",class:Pt(["custom-select-option multi-select-option",{selected:b.storeIds.includes(M.id)}]),onClick:re=>_s(b,M.id)},[hn(Y(M.name),1),b.storeIds.includes(M.id)?(ie(),jt(q(li),{key:0,size:14})):ft("",!0)],10,aL))),128))],4)):ft("",!0)]))]),R("button",{type:"button",class:Pt(["text-btn add-store-link",{active:U.value===b.localId}]),"aria-expanded":U.value===b.localId,"aria-controls":`new-store-${b.localId}`,"aria-label":U.value===b.localId?q(e)("close"):q(e)("addStore"),onClick:M=>U.value=U.value===b.localId?null:b.localId},[U.value===b.localId?(ie(),jt(q(yo),{key:0,size:14})):(ie(),jt(q(bu),{key:1,size:14})),R("span",null,Y(q(e)("addStore")),1)],10,lL),R("button",{type:"button",class:"icon-btn remove-ingredient",title:q(e)("remove"),onClick:M=>Ca(b.localId)},[Ie(q(ug),{size:15})],8,cL)]),U.value===b.localId?(ie(),ue("div",{key:0,id:`new-store-${b.localId}`,class:"new-store-form",role:"region","aria-label":q(e)("addStore")},[fo(R("input",{"onUpdate:modelValue":C[24]||(C[24]=M=>Z.value=M),placeholder:q(e)("newStore"),maxlength:"60",onKeydown:yb(In(M=>Pn(b.localId),["prevent"]),["enter"])},null,40,hL),[[za,Z.value]]),R("button",{class:"primary-btn small-btn",type:"button",disabled:!Z.value.trim(),onClick:M=>Pn(b.localId)},Y(q(e)("saveStore")),9,fL)],8,uL)):ft("",!0),R("details",{class:Pt(["ingredient-nutrition-editor",zi(b)?"has-nutrition":"missing-nutrition"])},[R("summary",null,[R("span",null,Y(q(e)("nutrition")),1),R("small",null,Y(q(e)("nutritionPer"))+" "+Y(b.nutritionBasis==="unit"?q(e)("perUnit"):q(e)("per100g")),1)]),R("div",dL,[R("div",pL,[R("label",{for:"nutrition-basis-"+b.localId},Y(q(e)("nutritionBasis")),9,mL),R("select",{id:"nutrition-basis-"+b.localId,value:b.nutritionBasis||"100g",onChange:M=>Vr(b,M)},[R("option",_L,Y(q(e)("per100g")),1),R("option",yL,Y(q(e)("perUnit")),1)],40,gL)]),b.nutritionBasis==="100g"&&b.quantityUnit==="unit"||b.nutritionBasis==="unit"&&b.quantityUnit==="g"?(ie(),ue("p",vL,Y(q(e)("nutritionUnitMismatch")),1)):ft("",!0),R("div",EL,[(ie(!0),ue(Be,null,Lt(W.value,M=>{var re;return ie(),ue("label",{key:M.key},[R("span",null,[hn(Y(M.label)+" ",1),R("small",null,"("+Y(M.unit)+")",1)]),R("input",{type:"number",min:"0",step:"any",value:((re=b.nutrition)==null?void 0:re[M.key])??"",onInput:Ee=>Dc(b,M.key,Ee)},null,40,IL)])}),128))]),R("p",TL,Y(q(e)("nutritionEntryHint"))+" "+Y(q(e)("nutritionBasisChangeHint")),1)])],2)]))),128))]),R("div",bL,[R("button",{type:"button",class:"secondary-btn",onClick:C[25]||(C[25]=b=>P.value=!1)},Y(q(e)("cancel")),1),R("button",wL,Y(q(e)("save")),1)])],32)])])):ft("",!0)])):(ie(),ue("div",xN,[R("div",FN,[Ie(q(yo))]),R("h2",null,Y(q(e)("accessDenied")),1),C[32]||(C[32]=R("p",{class:"muted"},"Ask the administrator to enable your UID in Firestore.",-1)),R("code",null,Y(s.value.uid),1),R("button",{class:"text-btn",onClick:qi},Y(q(e)("signOut")),1)])):(ie(),ue("div",ON,[R("div",LN,[R("div",VN,[Ie(q(hg),{size:34})])]),C[30]||(C[30]=R("p",{class:"eyebrow"},"A MORE MINDFUL ROUTINE",-1)),R("h1",null,Y(q(e)("welcome")),1),C[31]||(C[31]=R("p",{class:"muted"},"Plan ahead. Eat well. Find your rhythm.",-1)),R("button",{class:"primary-btn google-btn",onClick:Aa},[C[29]||(C[29]=R("span",{class:"google-g"},"G",-1)),hn(Y(q(e)("signIn")),1)]),l.value?(ie(),ue("p",MN,Y(l.value),1)):ft("",!0)])):(ie(),ue("div",kN,[R("div",NN,[Ie(q(bN))]),R("h1",null,Y(q(e)("welcome")),1),R("p",null,Y(q(e)("setup")),1),C[27]||(C[27]=R("code",null,"cp .env.example .env.local",-1))]))}}),SL={en:{home:"Home",today:"Today",tomorrow:"Tomorrow",meals:"Meals",plan:"Plan",shopping:"Shopping",breakfast:"Breakfast",lunch:"Lunch",snack:"Snack",dinner:"Dinner",addMeal:"Add meal",editMeal:"Edit meal",mealName:"Meal name",averagePerWeek:"Average per week",ingredients:"Ingredients",ingredientsHelp:"Ingredients for this meal",ingredientName:"Ingredient",quantity:"Quantity",quantityUnitGrams:"Grams (g)",quantityUnitPieces:"Units",quantityUnitPiecesShort:"pcs",store:"Stores",selectStore:"Choose a store",chooseStores:"Choose stores",storesSelected:"{count} shops selected",newStore:"New shop name",saveStore:"Save shop",ingredientsEmpty:"No ingredients added yet.",remove:"Remove",backToPlan:"Back to plan",alreadyAtHome:"Already at home",excludeAlreadyAtHome:"Exclude already at home",shoppingAllAtHome:"Everything is already at home",shoppingAllAtHomeHint:"Turn off the filter to see all planned ingredients.",bought:"Bought",toBuy:"To buy",noStore:"No store",storePriorities:"Store priorities",storePrioritiesHint:"Set one global order for your shops. Items available in multiple shops will be assigned to the highest-priority shop available.",storePriorityOrderHint:"Move shops up or down. Shops higher in the list are preferred whenever an ingredient is available in more than one place.",highestPriority:"First choice",priorityNumber:"Priority #{number}",moveStoreUp:"Move shop up",moveStoreDown:"Move shop down",addIngredient:"Add ingredient",removeIngredient:"Remove ingredient",manageStores:"Manage stores",stores:"Shops",storeName:"Shop name",addStore:"Add shop",noStores:"No shops yet. Add the places where you shop.",deleteStore:"Delete shop",save:"Save",cancel:"Cancel",delete:"Delete",search:"Search meals…",alphabetical:"A–Z",noMeals:"No meals yet. Add your first dish.",thisWeek:"This week",previous:"Previous week",next:"Next week",signIn:"Continue with Google",signOut:"Sign out",accessDenied:"This account is not enabled for this app.",setup:"Configure Firebase to get started.",language:"Language",dark:"Dark mode",light:"Light mode",emptyDay:"No meal selected",noMealSelected:"No meal selected",selectDish:"Choose a meal",changeMeal:"Change meal",clearMeal:"Clear meal",weekOf:"Week of",mealCount:"{count} meals",confirmDelete:"Delete this meal?",allMeals:"Your meals",welcome:"Your personal meal planner",shoppingSubtitle:"THIS WEEK",shoppingFromPlan:"What you need for the meals planned this week.",shoppingEmpty:"Nothing to buy yet",shoppingEmptyHint:"Add ingredients to meals and schedule them this week.",statusHome:"Already at home",statusBought:"Bought",statusBuy:"To buy",neededFor:"Needed for",quantities:"Quantity",noQuantity:"Quantity not set",history:"History",backToWeek:"Back to week",noHistory:"No past meal plans yet.",historyFrom:"History from",todayDate:"Today",confirmDeleteStore:"Delete this shop? Existing ingredients will keep an unassigned shop.",confirmDeleteMeal:"Delete this meal?",close:"Close",mealCountLabel:"planned",planWeekTitle:"Weekly plan",storesHint:"Add shops from the ingredient editor. Their global priority can be set here.",insights:"Insights",insightsIntro:"Nutrition totals for the week selected on Home. Ingredient quantities are required for calculations.",weekNutrition:"Weekly nutrition",selectedWeek:"Selected Home week",dailyMeals:"Daily and meal breakdown",dailyMealsHint:"Values are calculated from the quantities saved in each recipe.",dishNutrition:"Nutrition by dish",dishNutritionHint:"Recipe totals based on the ingredients and quantities saved in Meals.",calories:"Calories",carbohydrates:"Carbohydrates",carbsShort:"Carbs",protein:"Protein",proteinShort:"Protein",fat:"Fat",fiber:"Fiber",salt:"Salt",nutrition:"Nutrition",nutritionPer:"Values",nutritionBasis:"Values per",per100g:"100 g",perUnit:"unit",nutritionValuesPresent:"Nutrition values are present.",nutritionUnitMismatch:"The quantity unit and nutrition basis do not match, so this ingredient is excluded from totals.",nutritionEntryHint:"Enter values per 100 g or per unit.",nutritionMissing:"Not enough data",nutritionPartialCoverage:"{known}/{total} ingredients included",nutritionComplete:"All ingredients included",noMealsPlanned:"No meals planned for this day.",nutritionCalculationNote:"Totals include only ingredients with a quantity, a matching nutrition basis and the relevant nutrient value. Missing values are not treated as zero.",nutritionBasisChangeHint:"Changing the basis clears the entered values so they are not misinterpreted."},it:{home:"Home",today:"Oggi",tomorrow:"Domani",meals:"Piatti",plan:"Piano",shopping:"Spesa",breakfast:"Colazione",lunch:"Pranzo",snack:"Merenda",dinner:"Cena",addMeal:"Aggiungi piatto",editMeal:"Modifica piatto",mealName:"Nome del piatto",averagePerWeek:"Media settimanale",ingredients:"Ingredienti",ingredientsHelp:"Ingredienti del piatto",ingredientName:"Ingrediente",quantity:"Quantità",quantityUnitGrams:"Grammi (g)",quantityUnitPieces:"Unità",quantityUnitPiecesShort:"pz",store:"Negozi",selectStore:"Scegli un negozio",chooseStores:"Scegli i negozi",storesSelected:"{count} negozi selezionati",newStore:"Nome del nuovo negozio",saveStore:"Salva negozio",ingredientsEmpty:"Nessun ingrediente inserito.",remove:"Rimuovi",backToPlan:"Torna al piano",alreadyAtHome:"Già in casa",excludeAlreadyAtHome:"Escludi ciò che è già in casa",shoppingAllAtHome:"È già tutto in casa",shoppingAllAtHomeHint:"Disattiva il filtro per visualizzare tutti gli ingredienti pianificati.",bought:"Comprato",toBuy:"Da comprare",noStore:"Nessun negozio",storePriorities:"Priorità negozi",storePrioritiesHint:"Imposta un unico ordine globale dei negozi. Gli articoli disponibili in più negozi verranno assegnati al negozio con la priorità più alta tra quelli disponibili.",storePriorityOrderHint:"Sposta i negozi verso l’alto o il basso. I negozi più in alto hanno la precedenza quando un ingrediente è disponibile in più posti.",highestPriority:"Prima scelta",priorityNumber:"Priorità #{number}",moveStoreUp:"Sposta negozio in alto",moveStoreDown:"Sposta negozio in basso",addIngredient:"Aggiungi ingrediente",removeIngredient:"Rimuovi ingrediente",manageStores:"Gestisci negozi",stores:"Negozi",storeName:"Nome negozio",addStore:"Aggiungi negozio",noStores:"Nessun negozio. Aggiungi i luoghi in cui fai la spesa.",deleteStore:"Elimina negozio",save:"Salva",cancel:"Annulla",delete:"Elimina",search:"Cerca piatti…",alphabetical:"A–Z",noMeals:"Nessun piatto. Aggiungi la tua prima ricetta.",thisWeek:"Questa settimana",previous:"Settimana precedente",next:"Settimana successiva",signIn:"Accedi con Google",signOut:"Esci",accessDenied:"Questo account non è abilitato all’applicazione.",setup:"Configura Firebase per iniziare.",language:"Lingua",dark:"Modalità scura",light:"Modalità chiara",emptyDay:"Nessun pasto selezionato",noMealSelected:"Nessun pasto selezionato",selectDish:"Scegli un piatto",changeMeal:"Cambia pasto",clearMeal:"Rimuovi pasto",weekOf:"Settimana del",mealCount:"{count} piatti",confirmDelete:"Eliminare questo piatto?",allMeals:"I tuoi piatti",welcome:"La tua agenda dei pasti",shoppingSubtitle:"QUESTA SETTIMANA",shoppingFromPlan:"Cosa serve comprare per i pasti pianificati questa settimana.",shoppingEmpty:"Non c’è niente da comprare",shoppingEmptyHint:"Aggiungi ingredienti ai piatti e pianificali per questa settimana.",statusHome:"Già a casa",statusBought:"Comprato",statusBuy:"Da comprare",neededFor:"Serve per",quantities:"Quantità",noQuantity:"Quantità non indicata",history:"Storico",backToWeek:"Torna alla settimana",noHistory:"Non ci sono ancora pasti nello storico.",historyFrom:"Storico dal",todayDate:"Oggi",confirmDeleteStore:"Eliminare questo negozio? Gli ingredienti associati resteranno senza negozio.",confirmDeleteMeal:"Eliminare questo piatto?",close:"Chiudi",mealCountLabel:"pianificati",planWeekTitle:"Piano settimanale",storesHint:"Aggiungi i negozi dall’editor degli ingredienti. Qui puoi impostarne la priorità globale.",insights:"Insights",insightsIntro:"Valori nutrizionali della settimana selezionata in Home. Per i calcoli è necessaria la quantità di ogni ingrediente.",weekNutrition:"Valori nutrizionali settimanali",selectedWeek:"Settimana selezionata in Home",dailyMeals:"Dettaglio giornaliero e per pasto",dailyMealsHint:"I valori sono calcolati sulle quantità salvate in ogni ricetta.",dishNutrition:"Valori nutrizionali per piatto",dishNutritionHint:"Totali delle ricette in base agli ingredienti e alle quantità salvate in Piatti.",calories:"Calorie",carbohydrates:"Carboidrati",carbsShort:"Carboidrati",protein:"Proteine",proteinShort:"Proteine",fat:"Grassi",fiber:"Fibre",salt:"Sale",nutrition:"Valori nutrizionali",nutritionPer:"Valori",nutritionBasis:"Valori per",per100g:"100 g",perUnit:"unità",nutritionValuesPresent:"Valori nutrizionali presenti.",nutritionUnitMismatch:"Unità della quantità e base nutrizionale non corrispondono: questo ingrediente è escluso dai totali.",nutritionEntryHint:"Inserisci i valori per 100 g o per unità.",nutritionMissing:"Dati insufficienti",nutritionPartialCoverage:"{known}/{total} ingredienti inclusi",nutritionComplete:"Tutti gli ingredienti inclusi",noMealsPlanned:"Nessun pasto pianificato per questo giorno.",nutritionCalculationNote:"I totali includono solo ingredienti con quantità, base nutrizionale compatibile e valore del nutriente disponibile. I dati mancanti non vengono considerati pari a zero.",nutritionBasisChangeHint:"La modifica della base elimina i valori inseriti per evitare interpretazioni errate."}},CL=N0({legacy:!1,locale:localStorage.getItem("diet-language")||"en",fallbackLocale:"en",messages:SL});Ib(AL).use(Ab()).use(CL).mount("#app");
