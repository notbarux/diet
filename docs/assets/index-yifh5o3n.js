(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function uh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Je={},Rs=[],Qn=()=>{},lg=()=>!1,Kl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Gl=t=>t.startsWith("onUpdate:"),Pt=Object.assign,hh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},zE=Object.prototype.hasOwnProperty,je=(t,e)=>zE.call(t,e),_e=Array.isArray,Kr=t=>Xo(t)==="[object Map]",Ei=t=>Xo(t)==="[object Set]",cd=t=>Xo(t)==="[object Date]",be=t=>typeof t=="function",ht=t=>typeof t=="string",tr=t=>typeof t=="symbol",Ke=t=>t!==null&&typeof t=="object",cg=t=>(Ke(t)||be(t))&&be(t.then)&&be(t.catch),ug=Object.prototype.toString,Xo=t=>ug.call(t),KE=t=>Xo(t).slice(8,-1),hg=t=>Xo(t)==="[object Object]",fh=t=>ht(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,po=uh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ql=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},GE=/-\w/g,Nn=Ql(t=>t.replace(GE,e=>e.slice(1).toUpperCase())),QE=/\B([A-Z])/g,cs=Ql(t=>t.replace(QE,"-$1").toLowerCase()),fg=Ql(t=>t.charAt(0).toUpperCase()+t.slice(1)),Oc=Ql(t=>t?`on${fg(t)}`:""),Gn=(t,e)=>!Object.is(t,e),tl=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},dg=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},dh=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ud;const Yl=()=>ud||(ud=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ps(t){if(_e(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ht(r)?ZE(r):Ps(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ht(t)||Ke(t))return t}const YE=/;(?![^(]*\))/g,XE=/:([^]+)/,JE=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function ZE(t){const e={};return t.replace(JE,n=>n.startsWith("/*")?"":n).split(YE).forEach(n=>{if(n){const r=n.split(XE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ot(t){let e="";if(ht(t))e=t;else if(_e(t))for(let n=0;n<t.length;n++){const r=Ot(t[n]);r&&(e+=r+" ")}else if(Ke(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const eT="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",tT=uh(eT);function pg(t){return!!t||t===""}function nT(t,e,n){if(t.length!==e.length)return!1;let r=!0;for(let s=0;r&&s<t.length;s++)r=ki(t[s],e[s],n);return r}function hd(t,e,n){if(t.size!==e.size)return!1;const r=Array.from(e),s=new Uint8Array(r.length);for(const i of t){let o=-1;for(let l=0;l<r.length;l++)if(!s[l]&&ki(i,r[l],n)){o=l;break}if(o<0)return!1;s[o]=1}return!0}function rT(t,e,n){let r=Kr(t),s=Kr(e);if(r||s||(r=Ei(t),s=Ei(e),r||s))return r&&s?hd(t,e,n):!1;const i=Object.keys(t).length,o=Object.keys(e).length;if(i!==o)return!1;for(const l in t){const c=t.hasOwnProperty(l),u=e.hasOwnProperty(l);if(c&&!u||!c&&u||!ki(t[l],e[l],n))return!1}return String(t)===String(e)}function fd(t,e,n,r){n||(n=[new Map,new Map]);const[s,i]=n;if(s.has(t)||i.has(e))return s.get(t)===e&&i.get(e)===t;s.set(t,e),i.set(e,t);const o=r(t,e,n);return s.delete(t),i.delete(e),o}function ki(t,e,n){if(t===e)return!0;let r=cd(t),s=cd(e);return r||s?r&&s?t.getTime()===e.getTime():!1:(r=tr(t),s=tr(e),r||s?t===e:(r=_e(t),s=_e(e),r||s?r&&s?fd(t,e,n,nT):!1:(r=Ke(t),s=Ke(e),r||s?!r||!s?!1:fd(t,e,n,rT):String(t)===String(e))))}function mg(t,e){return t.findIndex(n=>ki(n,e))}const gg=t=>!!(t&&t.__v_isRef===!0),le=t=>ht(t)?t:t==null?"":_e(t)||Ke(t)&&(t.toString===ug||!be(t.toString))?gg(t)?le(t.value):JSON.stringify(t,_g,2):String(t),_g=(t,e)=>gg(e)?_g(t,e.value):Kr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Lc(r,i)+" =>"]=s,n),{})}:Ei(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Lc(n))}:tr(e)?Lc(e):Ke(e)&&!_e(e)&&!hg(e)?String(e):e,Lc=(t,e="")=>{var n;return tr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bt;class yg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&bt&&(bt.active?(this.parent=bt,this.index=(bt.scopes||(bt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const r=this.scopes.slice();for(e=0,n=r.length;e<n;e++)r[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}const r=this.effects.slice();for(e=0,n=r.length;e<n;e++)r[e].resume()}}run(e){if(this._active){const n=bt;try{return bt=this,e()}finally{bt=n}}}on(){++this._on===1&&(this.prevScope=bt,bt=this)}off(){if(this._on>0&&--this._on===0){if(bt===this)bt=this.prevScope;else{let e=bt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,r=s.length;n<r;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function vg(t){return new yg(t)}function Eg(){return bt}function sT(t,e=!1){bt&&(bt.active?bt.cleanups.push(t):t())}let et;const Vc=new WeakSet;class Tg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,bt&&(bt.active?bt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Vc.has(this)&&(Vc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||wg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,dd(this),bg(this);const e=et,n=Dn;et=this,Dn=!0;try{return this.fn()}finally{Ag(this),et=e,Dn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)gh(e);this.deps=this.depsTail=void 0,dd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Vc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){mu(this)&&this.run()}get dirty(){return mu(this)}}let Ig=0,mo,go;function wg(t,e=!1){if(t.flags|=8,e){t.next=go,go=t;return}t.next=mo,mo=t}function ph(){Ig++}function mh(){if(--Ig>0)return;if(go){let e=go;for(go=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;mo;){let e=mo;for(mo=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function bg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ag(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),gh(r),iT(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function mu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Sg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Sg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ro)||(t.globalVersion=Ro,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!mu(t))))return;t.flags|=2;const e=t.dep,n=et,r=Dn;et=t,Dn=!0;try{bg(t);const s=t.fn(t._value);(e.version===0||Gn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{et=n,Dn=r,Ag(t),t.flags&=-3}}function gh(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)gh(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function iT(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Dn=!0;const Cg=[];function nr(){Cg.push(Dn),Dn=!1}function rr(){const t=Cg.pop();Dn=t===void 0?!0:t}function dd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=et;et=void 0;try{e()}finally{et=n}}}let Ro=0;class oT{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class _h{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!et||!Dn||et===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==et)n=this.activeLink=new oT(et,this),et.deps?(n.prevDep=et.depsTail,et.depsTail.nextDep=n,et.depsTail=n):et.deps=et.depsTail=n,Rg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=et.depsTail,n.nextDep=void 0,et.depsTail.nextDep=n,et.depsTail=n,et.deps===n&&(et.deps=r)}return n}trigger(e){this.version++,Ro++,this.notify(e)}notify(e){ph();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{mh()}}}function Rg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Rg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const gu=new WeakMap,Os=Symbol(""),_u=Symbol(""),Po=Symbol("");function Xt(t,e,n){if(Dn&&et){let r=gu.get(t);r||gu.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new _h),s.map=r,s.key=n),s.track()}}function mr(t,e,n,r,s,i){const o=gu.get(t);if(!o){Ro++;return}const l=c=>{c&&c.trigger()};if(ph(),e==="clear")o.forEach(l);else{const c=_e(t),u=c&&fh(n);if(c&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===Po||!tr(m)&&m>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Po)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Os)),Kr(t)&&l(o.get(_u)));break;case"delete":c||(l(o.get(Os)),Kr(t)&&l(o.get(_u)));break;case"set":Kr(t)&&l(o.get(Os));break}}mh()}function ri(t){const e=qe(t);return e===t||(Xt(e,"iterate",Po),Tn(t))?e:sr(t)?Gr(t)?e.map(n=>ts(In(n))):e.map(ts):e.map(In)}function Xl(t){return Xt(t=qe(t),"iterate",Po),t}function Wn(t,e){return sr(t)?ts(Gr(t)?In(e):e):In(e)}const aT={__proto__:null,[Symbol.iterator](){return Mc(this,Symbol.iterator,t=>Wn(this,t))},concat(...t){return ri(this).concat(...t.map(e=>_e(e)?ri(e):e))},entries(){return Mc(this,"entries",t=>(t[1]=Wn(this,t[1]),t))},every(t,e){return ur(this,"every",t,e,void 0,arguments)},filter(t,e){return ur(this,"filter",t,e,n=>n.map(r=>Wn(this,r)),arguments)},find(t,e){return ur(this,"find",t,e,n=>Wn(this,n),arguments)},findIndex(t,e){return ur(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ur(this,"findLast",t,e,n=>Wn(this,n),arguments)},findLastIndex(t,e){return ur(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ur(this,"forEach",t,e,void 0,arguments)},includes(...t){return xc(this,"includes",t)},indexOf(...t){return xc(this,"indexOf",t)},join(t){return ri(this).join(t)},lastIndexOf(...t){return xc(this,"lastIndexOf",t)},map(t,e){return ur(this,"map",t,e,void 0,arguments)},pop(){return Ji(this,"pop")},push(...t){return Ji(this,"push",t)},reduce(t,...e){return md(this,"reduce",t,e)},reduceRight(t,...e){return md(this,"reduceRight",t,e)},shift(){return Ji(this,"shift")},some(t,e){return ur(this,"some",t,e,void 0,arguments)},splice(...t){return Ji(this,"splice",t)},toReversed(){return ri(this).toReversed()},toSorted(t){return ri(this).toSorted(t)},toSpliced(...t){return ri(this).toSpliced(...t)},unshift(...t){return Ji(this,"unshift",t)},values(){return Mc(this,"values",t=>Wn(this,t))}};function Mc(t,e,n){const r=Xl(t),s=r[e],i=s.call(r);if(r!==t&&!Tn(t)){if(i[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(i));return o.next=()=>pd(i.next(),n),s!==Pg[e]&&Object.defineProperties(o,{return:{get(){const l=i.return;return typeof l=="function"?l.bind(i):l}},throw:{get(){const l=i.throw;return typeof l=="function"?l.bind(i):l}}}),o}i._next=i.next,i.next=()=>pd(i._next(),n)}return i}function pd(t,e){return t.done||(t.value=e(t.value)),t}const Pg=Array.prototype;function ur(t,e,n,r,s,i){const o=Xl(t),l=o!==t&&!Tn(t),c=o[e];if(c!==Pg[e]){const p=c.apply(t,i);return l?In(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,Wn(t,p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=c.call(o,u,r);return l&&s?s(f):f}function md(t,e,n,r){const s=Xl(t),i=s!==t&&!Tn(t);let o=n,l=!1;s!==t&&(i?(l=r.length===0,o=function(u,f,p){return l&&(l=!1,u=Wn(t,u)),n.call(this,u,Wn(t,f),p,t)}):n.length>3&&(o=function(u,f,p){return n.call(this,u,f,p,t)}));const c=s[e](o,...r);return l?Wn(t,c):c}function xc(t,e,n){const r=qe(t);Xt(r,"iterate",Po);const s=r[e](...n);return(s===-1||s===!1)&&Th(n[0])?(n[0]=qe(n[0]),r[e](...n)):s}function Ji(t,e,n=[]){nr(),ph();const r=qe(t)[e].apply(t,n);return mh(),rr(),r}const lT=uh("__proto__,__v_isRef,__isVue"),kg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(tr));function cT(t){tr(t)||(t=String(t));const e=qe(this);return Xt(e,"has",t),e.hasOwnProperty(t)}class Ng{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?vT:Vg:i?Lg:Og).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=_e(e);if(!s){let c;if(o&&(c=aT[n]))return c;if(n==="hasOwnProperty")return cT}const l=Reflect.get(e,n,Bt(e)?e:r);if((tr(n)?kg.has(n):lT(n))||(s||Xt(e,"get",n),i))return l;if(Bt(l)){const c=o&&fh(n)?l:l.value;return s&&Ke(c)?vu(c):c}return Ke(l)?s?vu(l):vh(l):l}}class Dg extends Ng{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=_e(e)&&fh(n);if(!this._isShallow){const u=sr(i);if(!Tn(r)&&!sr(r)&&(i=qe(i),r=qe(r)),!o&&Bt(i)&&!Bt(r))return u||(i.value=r),!0}const l=o?Number(n)<e.length:je(e,n),c=Reflect.set(e,n,r,Bt(e)?e:s);return e===qe(s)&&c&&(l?Gn(r,i)&&mr(e,"set",n,r):mr(e,"add",n,r)),c}deleteProperty(e,n){const r=je(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&mr(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!tr(n)||!kg.has(n))&&Xt(e,"has",n),r}ownKeys(e){return Xt(e,"iterate",_e(e)?"length":Os),Reflect.ownKeys(e)}}class uT extends Ng{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const hT=new Dg,fT=new uT,dT=new Dg(!0);const yu=t=>t,La=t=>Reflect.getPrototypeOf(t);function pT(t,e,n){return function(...r){const s=this.__v_raw,i=qe(s),o=Kr(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?yu:e?ts:In;return!e&&Xt(i,"iterate",c?_u:Os),Pt(Object.create(u),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[f(p[0]),f(p[1])]:f(p),done:m}}})}}function Va(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function mT(t,e){const n={get(s){const i=this.__v_raw,o=qe(i),l=qe(s);t||(Gn(s,l)&&Xt(o,"get",s),Xt(o,"get",l));const{has:c}=La(o),u=e?yu:t?ts:In;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Xt(qe(s),"iterate",Os),s.size},has(s){const i=this.__v_raw,o=qe(i),l=qe(s);return t||(Gn(s,l)&&Xt(o,"has",s),Xt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=qe(l),u=e?yu:t?ts:In;return!t&&Xt(c,"iterate",Os),l.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return Pt(n,t?{add:Va("add"),set:Va("set"),delete:Va("delete"),clear:Va("clear")}:{add(s){const i=qe(this),o=La(i),l=qe(s),c=!e&&!Tn(s)&&!sr(s)?l:s;return o.has.call(i,c)||Gn(s,c)&&o.has.call(i,s)||Gn(l,c)&&o.has.call(i,l)||(i.add(c),mr(i,"add",c,c)),this},set(s,i){!e&&!Tn(i)&&!sr(i)&&(i=qe(i));const o=qe(this),{has:l,get:c}=La(o);let u=l.call(o,s);u||(s=qe(s),u=l.call(o,s));const f=c.call(o,s);return o.set(s,i),u?Gn(i,f)&&mr(o,"set",s,i):mr(o,"add",s,i),this},delete(s){const i=qe(this),{has:o,get:l}=La(i);let c=o.call(i,s);c||(s=qe(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&mr(i,"delete",s,void 0),u},clear(){const s=qe(this),i=s.size!==0,o=s.clear();return i&&mr(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=pT(s,t,e)}),n}function yh(t,e){const n=mT(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_isShallow"?e:s==="__v_raw"?r:Reflect.get(je(n,s)&&s in r?n:r,s,i)}const gT={get:yh(!1,!1)},_T={get:yh(!1,!0)},yT={get:yh(!0,!1)};const Og=new WeakMap,Lg=new WeakMap,Vg=new WeakMap,vT=new WeakMap;function ET(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vh(t){return sr(t)?t:Eh(t,!1,hT,gT,Og)}function TT(t){return Eh(t,!1,dT,_T,Lg)}function vu(t){return Eh(t,!0,fT,yT,Vg)}function Eh(t,e,n,r,s){if(!Ke(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=s.get(t);if(i)return i;const o=ET(KE(t));if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function Gr(t){return sr(t)?Gr(t.__v_raw):!!(t&&t.__v_isReactive)}function sr(t){return!!(t&&t.__v_isReadonly)}function Tn(t){return!!(t&&t.__v_isShallow)}function Th(t){return t?!!t.__v_raw:!1}function qe(t){const e=t&&t.__v_raw;return e?qe(e):t}function Mg(t){return!je(t,"__v_skip")&&Object.isExtensible(t)&&dg(t,"__v_skip",!0),t}const In=t=>Ke(t)?vh(t):t,ts=t=>Ke(t)?vu(t):t;function Bt(t){return t?t.__v_isRef===!0:!1}function Xe(t){return xg(t,!1)}function IT(t){return xg(t,!0)}function xg(t,e){return Bt(t)?t:new wT(t,e)}class wT{constructor(e,n){this.dep=new _h,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:qe(e),this._value=n?e:In(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Tn(e)||sr(e);e=r?e:qe(e),Gn(e,n)&&(this._rawValue=e,this._value=r?e:In(e),this.dep.trigger())}}function K(t){return Bt(t)?t.value:t}const bT={get:(t,e,n)=>e==="__v_raw"?t:K(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Bt(s)&&!Bt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Fg(t){return Gr(t)?t:new Proxy(t,bT)}class AT{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new _h(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ro-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&et!==this)return wg(this,!0),!0}get value(){const e=this.dep.track();return Sg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ST(t,e,n=!1){let r,s;return be(t)?r=t:(r=t.get,s=t.set),new AT(r,s,n)}const Ma={},ml=new WeakMap;let bs;function CT(t,e=!1,n=bs){if(n){let r=ml.get(n);r||ml.set(n,r=[]),r.push(t)}}function RT(t,e,n=Je){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=M=>s?M:Tn(M)||s===!1||s===0?gr(M,1):gr(M);let f,p,m,I,C=!1,O=!1;if(Bt(t)?(p=()=>t.value,C=Tn(t)):Gr(t)?(p=()=>u(t),C=!0):_e(t)?(O=!0,C=t.some(M=>Gr(M)||Tn(M)),p=()=>t.map(M=>{if(Bt(M))return M.value;if(Gr(M))return u(M);if(be(M))return c?c(M,2):M()})):be(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){nr();try{m()}finally{rr()}}const M=bs;bs=f;try{return c?c(t,3,[I]):t(I)}finally{bs=M}}:p=Qn,e&&s){const M=p,X=s===!0?1/0:s;p=()=>gr(M(),X)}const D=Eg(),P=()=>{f.stop(),D&&D.active&&hh(D.effects,f)};if(i&&e){const M=e;e=(...X)=>{try{return M(...X)}finally{P()}}}let V=O?new Array(t.length).fill(Ma):Ma;const q=M=>{if(!(!(f.flags&1)||!f.dirty&&!M))if(e){const X=f.run();if(M||s||C||(O?X.some((te,_)=>Gn(te,V[_])):Gn(X,V))){const te=bs;nr();try{m&&m(),bs=f;const _=[X,V===Ma?void 0:O&&V[0]===Ma?[]:V,I];V=X,c?c(e,3,_):e(..._)}finally{bs=te,rr()}}}else f.run()};return l&&l(q),f=new Tg(p),f.scheduler=o?()=>o(q,!1):q,I=M=>CT(M,!1,f),m=f.onStop=()=>{const M=ml.get(f);if(M){if(c)c(M,4);else for(const X of M)X();ml.delete(f)}},e?r?q(!0):V=f.run():o?o(q.bind(null,!0),!0):f.run(),P.pause=f.pause.bind(f),P.resume=f.resume.bind(f),P.stop=P,P}function gr(t,e=1/0,n){if(e<=0||!Ke(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Bt(t))gr(t.value,e,n);else if(_e(t))for(let r=0;r<t.length;r++)gr(t[r],e,n);else if(Ei(t)||Kr(t))t.forEach(r=>{gr(r,e,n)});else if(hg(t)){for(const r in t)gr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&gr(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Jo(t,e,n,r){try{return r?t(...r):t()}catch(s){Jl(s,e,n)}}function Mn(t,e,n,r){if(be(t)){const s=Jo(t,e,n,r);return s&&cg(s)&&s.catch(i=>{Jl(i,e,n,void 0,!0)}),s}if(_e(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Mn(t[i],e,n,r));return s}}function Jl(t,e,n,r=!0,s=!1){const i=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:l}=e&&e.appContext.config||Je;if(e){let c=e.parent;const u=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const p=c.ec;if(p&&!c.isUnmounted&&(!s||c.scope.active)){for(let m=0;m<p.length;m++)if(p[m](t,u,f)===!1)return}c=c.parent}if(o){nr(),Jo(o,null,10,[t,u,f]),rr();return}}PT(t,n,i,r,l)}function PT(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const nn=[];let Rn=-1;const zn=[];let $r=null,ii=0;const Ug=Promise.resolve();let gl=null;function $g(t){const e=gl||Ug;return t?e.then(this?t.bind(this):t):e}function kT(t){let e=Rn+1,n=nn.length;for(;e<n;){const r=e+n>>>1,s=nn[r],i=ko(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Ih(t){if(!(t.flags&1)){const e=ko(t),n=nn[nn.length-1];!n||!(t.flags&2)&&e>=ko(n)?nn.push(t):nn.splice(kT(e),0,t),t.flags|=1,jg()}}function jg(){gl||(gl=Ug.then(Hg))}function NT(t){if(!_e(t))$r&&t.id===-1?$r.splice(ii+1,0,t):t.flags&1||(zn.push(t),t.flags|=1);else for(let e=0;e<t.length;e++)zn.push(t[e]);jg()}function Bg(t,e,n,r=Rn+1){for(;r<nn.length;r++){const s=nn[r];if(s&&s.flags&2){if(t&&s.id!==t.uid||e!==void 0&&!(s.id>=e))continue;nn.splice(r,1),r=t?r-1:Rn,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function qg(t,e,n=0){if(zn.length){let r=zn,s=0;if(e){r=[];for(let o=0;o<zn.length;o++){const l=zn[o];(l.i!==void 0?!l.i||l.i.uid<n:e.has(l))?zn[s++]=l:r.push(l)}}const i=[...new Set(r)].sort((o,l)=>ko(o)-ko(l));if(zn.length=s,$r){for(let o=0;o<i.length;o++)$r.push(i[o]);return}for($r=i,ii=0;ii<$r.length;ii++){const o=$r[ii];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}$r=null,ii=0}}let Fc=!1;function DT(t,e){if(Fc){t();return}const n=e===void 0?void 0:new Set(zn);t(),Fc=!0;try{Bg(void 0,e),qg(void 0,n,e)}finally{Fc=!1}}const ko=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Hg(t){try{for(Rn=0;Rn<nn.length;Rn++){const e=nn[Rn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Jo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Rn<nn.length;Rn++){const e=nn[Rn];e&&(e.flags&=-2)}Rn=-1,nn.length=0,qg(),gl=null,(nn.length||zn.length)&&Hg()}}let vn=null,Wg=null;function _l(t){const e=vn;return vn=t,Wg=t&&t.type.__scopeId||null,e}function OT(t,e=vn,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&El(-1);const i=_l(e),o=Ls.length;let l;try{l=t(...s)}finally{for(let c=Ls.length;c>o;c--)p_();_l(i),r._d&&El(1)}return l};return r._n=!0,r._c=!0,r._d=!0,r}function Zi(t,e){if(vn===null)return t;const n=nc(vn),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Je]=e[s];i&&(be(i)&&(i={mounted:i,updated:i}),i.deep&&gr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Ts(t,e,n,r){let s=t;if(r==="beforeMount")t._mount=t;else if(r==="beforeUpdate"){const l=e&&e._mount;l&&(l._latest=t,t._mount=l)}else if(r==="mounted"){const l=t._latest;t._mount=t._latest=void 0,l&&(s=l,l._mount=void 0)}const i=s.dirs,o=e&&e.dirs;for(let l=0;l<i.length;l++){let c=i[l];o?c.oldValue=o[l].value:r==="mounted"&&c.oldValue!==void 0&&(c=Pt({},c,{oldValue:void 0}));let u=c.dir[r];u&&(nr(),Mn(u,n,8,[t.el,c,s,e]),rr())}}function LT(t,e){if(rn){let n=rn.provides;const r=rn.parent&&rn.parent.provides;r===n&&(n=rn.provides=Object.create(r)),n[t]=e}}function di(t,e,n=!1){const r=y_();if(r||pi){let s=pi?pi._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&be(e)?e.call(r&&r.proxy):e}}const VT=Symbol.for("v-scx"),MT=()=>di(VT);function wr(t,e,n){return zg(t,e,n)}function zg(t,e,n=Je){const{immediate:r,deep:s,flush:i,once:o}=n,l=Pt({},n),c=e&&r||!e&&i!=="post";let u;if(Vo){if(i==="sync"){const I=MT();u=I.__watcherHandles||(I.__watcherHandles=[])}else if(!c){const I=()=>{};return I.stop=Qn,I.resume=Qn,I.pause=Qn,I}}const f=rn;l.call=(I,C,O)=>Mn(I,f,C,O);let p=!1;i==="post"?l.scheduler=I=>{I.i=f,Gt(I,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(I,C)=>{C?I():Ih(I)}),l.augmentJob=I=>{e&&(I.flags|=4),p&&(I.flags|=2,f&&(I.id=f.uid,I.i=f))};const m=RT(t,e,l);return Vo&&(u?u.push(m):c&&m()),m}function xT(t,e,n){const r=this.proxy,s=ht(t)?t.includes(".")?Kg(r,t):()=>r[t]:t.bind(r,r);let i;be(e)?i=e:(i=e.handler,n=e);const o=ea(this),l=zg(s,i.bind(r),n);return o(),l}function Kg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Ur=new WeakMap,Gg=Symbol("_vte"),Zl=t=>t.__isTeleport,Ss=t=>t&&(t.disabled||t.disabled===""),FT=t=>t&&(t.defer||t.defer===""),gd=t=>typeof SVGElement<"u"&&t instanceof SVGElement,_d=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Eu=(t,e)=>{const n=t&&t.to;return ht(n)?e?e(n):null:n},UT={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,l,c,u){const{mc:f,pc:p,pbc:m,o:{insert:I,querySelector:C,createText:O,createComment:D,parentNode:P}}=u,V=Ss(e.props);let{dynamicChildren:q}=e;const M=(_,E,T)=>{_.shapeFlag&16&&f(_.children,E,T,s,i,o,l,c)},X=(_=e)=>{const E=Ss(_.props),T=_.target=Eu(_.props,C),A=Tu(T,_,O,I);T&&(o!=="svg"&&gd(T)?o="svg":o!=="mathml"&&_d(T)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(T),E||(M(_,T,A),oo(_,!1)))},te=_=>{const E=()=>{if(Ur.get(_)===E){if(Ur.delete(_),Ss(_.props)){const T=P(_.el)||n;M(_,T,_.anchor),oo(_,!0)}X(_)}};Ur.set(_,E),Gt(E,i)};if(t==null){const _=e.el=O(""),E=e.anchor=O("");if(I(_,n,r),I(E,n,r),FT(e.props)||i&&i.pendingBranch){te(e);return}V&&(M(e,n,E),oo(e,!0)),X()}else{e.el=t.el;const _=e.anchor=t.anchor,E=Ur.get(t);if(E){E.flags|=8,Ur.delete(t),te(e);return}e.targetStart=t.targetStart;const T=e.target=t.target,A=e.targetAnchor=t.targetAnchor,R=Ss(t.props),L=R?n:T,b=R?_:A;if(o==="svg"||gd(T)?o="svg":(o==="mathml"||_d(T))&&(o="mathml"),q?(m(t.dynamicChildren,q,L,s,i,o,l),Rh(t,e,!0)):c||p(t,e,L,b,s,i,o,l,!1),V)R?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):xa(e,n,_,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const Le=Eu(e.props,C);Le&&(e.target=Le,xa(e,Le,null,u,0))}else R&&xa(e,T,A,u,1);oo(e,V)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:l,anchor:c,targetStart:u,targetAnchor:f,target:p,props:m}=t,I=Ss(m),C=i||!I,O=Ur.get(t);if(O&&(O.flags|=8,Ur.delete(t)),p&&(s(u),s(f)),i&&s(c),!O&&(I||p)&&o&16)for(let D=0;D<l.length;D++){const P=l[D];r(P,e,n,C,!!P.dynamicChildren)}},move:xa,hydrate:$T};function xa(t,e,n,{o:{insert:r},m:s},i=2){i===0&&(t.targetStart&&r(t.targetStart,e,n),r(t.targetAnchor,e,n),n=t.targetAnchor);const{el:o,anchor:l,shapeFlag:c,children:u,props:f}=t,p=i===2;if(p&&r(o,e,n),!Ur.has(t)&&(!p||Ss(f))&&c&16)for(let m=0;m<u.length;m++)s(u[m],e,n,2);p&&r(l,e,n)}function $T(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:l,querySelector:c,insert:u,createText:f}},p){function m(D,P){let V=P;for(;V;){if(V&&V.nodeType===8){if(V.data==="teleport start anchor")e.targetStart=V;else if(V.data==="teleport anchor"){e.targetAnchor=V,D._lpa=e.targetAnchor&&o(e.targetAnchor);break}}V=o(V)}}function I(D,P){P.anchor=p(o(D),P,l(D),n,r,s,i)}const C=e.target=Eu(e.props,c),O=Ss(e.props);if(C){const D=C._lpa||C.firstChild;e.shapeFlag&16&&(O?(I(t,e),m(C,D),e.targetAnchor||Tu(C,e,f,u,l(t)===C?t:null)):(e.anchor=o(t),m(C,D),e.targetAnchor||Tu(C,e,f,u),p(D&&o(D),e,C,n,r,s,i))),oo(e,O)}else O&&e.shapeFlag&16&&(I(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const Fa=UT;function oo(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Tu(t,e,n,r,s=null){const i=e.targetStart=n(""),o=e.targetAnchor=n("");return i[Gg]=o,t&&(r(i,t,s),r(o,t,s)),o}const Uc=Symbol("_leaveCb");function jT(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==xn){e=n;break}}return e}function Qg(t){if(!wh(t))return Zl(t.type)&&t.children?jT(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&be(n.default))return n.default()}}function _o(t,e){if(t.shapeFlag&6&&t.component){t.transition=e;const n=t.component.subTree;_o(Zl(n.type)&&Qg(n)||n,e)}else if(t.shapeFlag&128){const n=t.suspense;if(n){const r=n.isHydrating?n.pendingBranch:n.activeBranch;r&&_o(r,e.clone(r))}else t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)}else if(t.transition=e,t.type===ct&&_e(t.children)){const n=n_(t.children,!1);n&&_o(n,e)}}function Iu(t){if(t.component)return Iu(t.component.subTree);if(t.type===ct){const e=_e(t.children)&&n_(t.children,!1);return e?Iu(e):void 0}if(t.type!==xn)return t}function ec(t,e){return be(t)?Pt({name:t.name},e,{setup:t}):t}function Yg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function yd(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const yl=new WeakMap;function yo(t,e,n,r,s=!1){if(_e(t)){t.forEach((O,D)=>yo(O,e&&(_e(e)?e[D]:e),n,r,s));return}if(vo(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&yo(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?nc(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===Je?l.refs={}:l.refs,p=l.setupState,m=qe(p),I=p===Je?lg:O=>yd(f,O)?!1:je(m,O),C=(O,D)=>!(D&&yd(f,D));if(u!=null&&u!==c){if(vd(e),ht(u))f[u]=null,I(u)&&(p[u]=null);else if(Bt(u)){const O=e;C(u,O.k)&&(u.value=null),O.k&&(f[O.k]=null)}}if(be(c))Jo(c,l,12,[o,f]);else{const O=ht(c),D=Bt(c);if(O||D){const P=()=>{if(t.f){const V=O?I(c)?p[c]:f[c]:C()||!t.k?c.value:f[t.k];if(s)_e(V)&&hh(V,i);else if(_e(V))V.includes(i)||V.push(i);else if(O)f[c]=[i],I(c)&&(p[c]=f[c]);else{const q=[i];C(c,t.k)&&(c.value=q),t.k&&(f[t.k]=q)}}else O?(f[c]=o,I(c)&&(p[c]=o)):D&&(C(c,t.k)&&(c.value=o),t.k&&(f[t.k]=o))};if(o){const V=()=>{P(),yl.delete(t)};V.id=-1,yl.set(t,V),Gt(V,n)}else vd(t),P()}}}function vd(t){const e=yl.get(t);e&&(e.flags|=8,yl.delete(t))}Yl().requestIdleCallback;Yl().cancelIdleCallback;const vo=t=>!!t.type.__asyncLoader,wh=t=>t.type.__isKeepAlive;function BT(t,e){Xg(t,"a",e)}function qT(t,e){Xg(t,"da",e)}function Xg(t,e,n=rn){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(No(e,r,n),n){let s=n.parent;for(;s&&s.parent;)wh(s.parent.vnode)&&HT(r,e,n,s),s=s.parent}}function HT(t,e,n,r){const s=No(e,t,r,!0),i=No("um",()=>hh(r[e],s),n);i.flags=16}function No(t,e,n=rn,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{nr();const l=ea(n),c=Mn(e,n,t,o);return l(),rr(),c});return r?s.unshift(i):s.push(i),i}}const Rr=t=>(e,n=rn)=>{(!Vo||t==="sp")&&No(t,(...r)=>e(...r),n)},WT=Rr("bm"),bh=Rr("m"),zT=Rr("bu"),KT=Rr("u"),GT=Rr("bum"),Ah=Rr("um"),QT=Rr("sp"),YT=Rr("rtg"),XT=Rr("rtc");function JT(t,e=rn){No("ec",t,e)}const ZT=Symbol.for("v-ndc");function Cn(t,e,n,r){let s;const i=n,o=_e(t);if(o||ht(t)){const l=o&&Gr(t);let c=!1,u=!1;l&&(c=!Tn(t),u=sr(t),t=Xl(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(c?u?ts(In(t[f])):In(t[f]):t[f],f,void 0,i)}else if(typeof t=="number")if(!Number.isInteger(t)||t<0)s=[];else{s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Ke(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const wu=t=>t?v_(t)?nc(t):wu(t.parent):null,Eo=Pt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>wu(t.parent),$root:t=>wu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Zg(t),$forceUpdate:t=>t.f||(t.f=()=>{Ih(t.update)}),$nextTick:t=>t.n||(t.n=$g.bind(t.proxy)),$watch:t=>xT.bind(t)}),$c=(t,e)=>t!==Je&&!t.__isScriptSetup&&je(t,e),eI={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if($c(r,e))return o[e]=1,r[e];if(s!==Je&&je(s,e))return o[e]=2,s[e];if(je(i,e))return o[e]=3,i[e];if(n!==Je&&je(n,e))return o[e]=4,n[e];bu&&(o[e]=0)}}const u=Eo[e];let f,p;if(u)return e==="$attrs"&&Xt(t.attrs,"get",""),u(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==Je&&je(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,je(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return $c(s,e)?(s[e]=n,!0):r!==Je&&je(r,e)?(r[e]=n,!0):je(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},l){let c;return!!(n[l]||t!==Je&&l[0]!=="$"&&je(t,l)||$c(e,l)||je(i,l)||je(r,l)||je(Eo,l)||je(s.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:je(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ed(t){return _e(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let bu=!0;function tI(t){const e=Zg(t),n=t.proxy,r=t.ctx;bu=!1,e.beforeCreate&&Td(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:I,updated:C,activated:O,deactivated:D,beforeDestroy:P,beforeUnmount:V,destroyed:q,unmounted:M,render:X,renderTracked:te,renderTriggered:_,errorCaptured:E,serverPrefetch:T,expose:A,inheritAttrs:R,components:L,directives:b,filters:Le}=e;if(u&&nI(u,r,null),o)for(const Ce in o){const Ae=o[Ce];be(Ae)&&(r[Ce]=Ae.bind(n))}if(s){const Ce=s.call(n,n);Ke(Ce)&&(t.data=vh(Ce))}if(bu=!0,i)for(const Ce in i){const Ae=i[Ce],dt=be(Ae)?Ae.bind(n,n):be(Ae.get)?Ae.get.bind(n,n):Qn,kt=!be(Ae)&&be(Ae.set)?Ae.set.bind(n):Qn,Qe=Ut({get:dt,set:kt});Object.defineProperty(r,Ce,{enumerable:!0,configurable:!0,get:()=>Qe.value,set:$e=>Qe.value=$e})}if(l)for(const Ce in l)Jg(l[Ce],r,n,Ce);if(c){const Ce=be(c)?c.call(n):c;Reflect.ownKeys(Ce).forEach(Ae=>{LT(Ae,Ce[Ae])})}f&&Td(f,t,"c");function nt(Ce,Ae){_e(Ae)?Ae.forEach(dt=>Ce(dt.bind(n))):Ae&&Ce(Ae.bind(n))}if(nt(WT,p),nt(bh,m),nt(zT,I),nt(KT,C),nt(BT,O),nt(qT,D),nt(JT,E),nt(XT,te),nt(YT,_),nt(GT,V),nt(Ah,M),nt(QT,T),_e(A))if(A.length){const Ce=t.exposed||(t.exposed={});A.forEach(Ae=>{Object.defineProperty(Ce,Ae,{get:()=>n[Ae],set:dt=>n[Ae]=dt,enumerable:!0})})}else t.exposed||(t.exposed={});X&&t.render===Qn&&(t.render=X),R!=null&&(t.inheritAttrs=R),L&&(t.components=L),b&&(t.directives=b),T&&Yg(t)}function nI(t,e,n=Qn){_e(t)&&(t=Au(t));for(const r in t){const s=t[r];let i;Ke(s)?"default"in s?i=di(s.from||r,s.default,!0):i=di(s.from||r):i=di(s),Bt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Td(t,e,n){Mn(_e(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Jg(t,e,n,r){let s=r.includes(".")?Kg(n,r):()=>n[r];if(ht(t)){const i=e[t];be(i)&&wr(s,i)}else if(be(t))wr(s,t.bind(n));else if(Ke(t))if(_e(t))t.forEach(i=>Jg(i,e,n,r));else{const i=be(t.handler)?t.handler.bind(n):e[t.handler];be(i)&&wr(s,i,t)}}function Zg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>vl(c,u,o,!0)),vl(c,e,o)),Ke(e)&&i.set(e,c),c}function vl(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&vl(t,i,n,!0),s&&s.forEach(o=>vl(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=rI[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const rI={data:Id,props:wd,emits:wd,methods:ao,computed:ao,beforeCreate:tn,created:tn,beforeMount:tn,mounted:tn,beforeUpdate:tn,updated:tn,beforeDestroy:tn,beforeUnmount:tn,destroyed:tn,unmounted:tn,activated:tn,deactivated:tn,errorCaptured:tn,serverPrefetch:tn,components:ao,directives:ao,watch:iI,provide:Id,inject:sI};function Id(t,e){return e?t?function(){return Pt(be(t)?t.call(this,this):t,be(e)?e.call(this,this):e)}:e:t}function sI(t,e){return ao(Au(t),Au(e))}function Au(t){if(_e(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function tn(t,e){return t?[...new Set([].concat(t,e))]:e}function ao(t,e){return t?Pt(Object.create(null),t,e):e}function wd(t,e){return t?_e(t)&&_e(e)?[...new Set([...t,...e])]:Pt(Object.create(null),Ed(t),Ed(e??{})):e}function iI(t,e){if(!t)return e;if(!e)return t;const n=Pt(Object.create(null),t);for(const r in e)n[r]=tn(t[r],e[r]);return n}function e_(){return{app:null,config:{isNativeTag:lg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let oI=0;function aI(t,e){return function(r,s=null){be(r)||(r=Pt({},r)),s!=null&&!Ke(s)&&(s=null);const i=e_(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:oI++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:FI,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&be(f.install)?(o.add(f),f.install(u,...p)):be(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!c){const I=u._ceVNode||Ee(r,s);return I.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(I,f,m),c=!0,u._container=f,f.__vue_app__=u,nc(I.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Mn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=pi;pi=u;try{return f()}finally{pi=p}}};return u}}let pi=null;const lI=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Nn(e)}Modifiers`]||t[`${cs(e)}Modifiers`];function cI(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Je;let s=n;const i=e.startsWith("update:"),o=i&&lI(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>ht(f)?f.trim():f)),o.number&&(s=s.map(dh)));let l,c=r[l=Oc(e)]||r[l=Oc(Nn(e))];!c&&i&&(c=r[l=Oc(cs(e))]),c&&Mn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Mn(u,t,6,s)}}const uI=new WeakMap;function t_(t,e,n=!1){const r=n?uI:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!be(t)){const c=u=>{const f=t_(u,e,!0);f&&(l=!0,Pt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Ke(t)&&r.set(t,null),null):(_e(i)?i.forEach(c=>o[c]=null):Pt(o,i),Ke(t)&&r.set(t,o),o)}function tc(t,e){return!t||!Kl(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),je(t,e[0].toLowerCase()+e.slice(1))||je(t,cs(e))||je(t,e))}function bd(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:p,data:m,setupState:I,ctx:C,inheritAttrs:O}=t,D=_l(t);let P,V;try{if(n.shapeFlag&4){const M=s||r,X=M;P=Kn(u.call(X,M,f,p,I,m,C)),V=l}else{const M=e;P=Kn(M.length>1?M(p,{attrs:l,slots:o,emit:c}):M(p,null)),V=e.props?l:hI(l)}}catch(M){Ls.length=0,Jl(M,t,1),P=Ee(xn)}let q=P;if(V&&O!==!1){const M=Object.keys(V),{shapeFlag:X}=q;M.length&&X&7&&(i&&M.some(Gl)&&(V=fI(V,i)),q=Ti(q,V,!1,!0))}if(n.dirs&&(q=Ti(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition){const M=Zl(q.type)&&Qg(q)||q;_o(M,n.transition)}return P=q,_l(D),P}function n_(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(Oo(s)){if(s.type!==xn||s.children==="v-if"){if(n)return;n=s}}else return}return n}const hI=t=>{let e;for(const n in t)(n==="class"||n==="style"||Kl(n))&&((e||(e={}))[n]=t[n]);return e},fI=(t,e)=>{const n={};for(const r in t)(!Gl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function dI(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ad(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(r_(o,r,m)&&!tc(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Ad(r,o,u):!0:!!o;return!1}function Ad(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(!je(t,i)||r_(e,t,i)&&!tc(n,i))return!0}return!1}function r_(t,e,n){const r=t[n],s=e[n];return n==="style"&&Ke(r)&&Ke(s)?!ki(r,s):r!==s}function pI({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const s_={},i_=()=>Object.create(s_),o_=t=>Object.getPrototypeOf(t)===s_;function mI(t,e,n,r=!1){const s={},i=i_();t.propsDefaults=Object.create(null),a_(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:TT(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function gI(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=qe(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(tc(t.emitsOptions,m))continue;const I=e[m];if(c)if(je(i,m))I!==i[m]&&(i[m]=I,u=!0);else{const C=Nn(m);s[C]=Su(c,l,C,I,t,!1)}else I!==i[m]&&(i[m]=I,u=!0)}}}else{a_(t,e,s,i)&&(u=!0);let f;for(const p in l)(!e||!je(e,p)&&((f=cs(p))===p||!je(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Su(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!je(e,p))&&(delete i[p],u=!0)}u&&mr(t.attrs,"set","")}function a_(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(po(c))continue;const u=e[c];let f;s&&je(s,f=Nn(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:tc(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=qe(n),u=l||Je;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Su(s,c,p,u[p],t,!je(u,p))}}return o}function Su(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=je(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&be(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=ea(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===cs(n))&&(r=!0))}return r}const _I=new WeakMap;function l_(t,e,n=!1){const r=n?_I:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!be(t)){const f=p=>{c=!0;const[m,I]=l_(p,e,!0);Pt(o,m),I&&l.push(...I)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Ke(t)&&r.set(t,Rs),Rs;if(_e(i))for(let f=0;f<i.length;f++){const p=Nn(i[f]);Sd(p)&&(o[p]=Je)}else if(i)for(const f in i){const p=Nn(f);if(Sd(p)){const m=i[f],I=o[p]=_e(m)||be(m)?{type:m}:Pt({},m),C=I.type;let O=!1,D=!0;if(_e(C))for(let P=0;P<C.length;++P){const V=C[P],q=be(V)&&V.name;if(q==="Boolean"){O=!0;break}else q==="String"&&(D=!1)}else O=be(C)&&C.name==="Boolean";I[0]=O,I[1]=D,(O||je(I,"default"))&&l.push(p)}}const u=[o,l];return Ke(t)&&r.set(t,u),u}function Sd(t){return t[0]!=="$"&&!po(t)}const Sh=t=>t==="_"||t==="_ctx"||t==="$stable",Ch=t=>_e(t)?t.map(Kn):[Kn(t)],yI=(t,e,n)=>{if(e._n)return e;const r=OT((...s)=>Ch(e(...s)),n);return r._c=!1,r},c_=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Sh(s))continue;const i=t[s];if(be(i))e[s]=yI(s,i,r);else if(i!=null){const o=Ch(i);e[s]=()=>o}}},u_=(t,e)=>{const n=Ch(e);t.slots.default=()=>n},h_=(t,e,n)=>{for(const r in e)(n||!Sh(r))&&(t[r]=e[r])},vI=(t,e,n)=>{const r=t.slots=i_();if(t.vnode.shapeFlag&32){const s=e._;s?(h_(r,e,n),n&&dg(r,"_",s,!0)):c_(e,r)}else e&&u_(t,e)},EI=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Je;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:h_(s,e,n):(i=!e.$stable,c_(e,s)),o=e}else e&&(u_(t,e),o={default:1});if(i)for(const l in s)!Sh(l)&&o[l]==null&&delete s[l]},Gt=SI;function TI(t){return II(t)}function II(t,e){const n=Yl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:I=Qn,insertStaticContent:C}=t,O=(w,N,H,ee=null,Q=null,J=null,ne=void 0,re=null,y=!!N.dynamicChildren)=>{if(w===N)return;w&&!eo(w,N)&&(ee=an(w),$e(w,Q,J,!0),w=null),N.patchFlag===-2&&(y=!1,N.dynamicChildren=null),N.dynamicChildren&&w&&w.dynamicChildren&&w.dynamicChildren.hasOnce&&(N.dynamicChildren===Rs&&(N.dynamicChildren=[]),N.dynamicChildren.hasOnce=!0);const{type:v,ref:j,shapeFlag:W}=N;switch(v){case Zo:D(w,N,H,ee);break;case xn:P(w,N,H,ee);break;case Bc:w==null&&V(N,H,ee,ne);break;case ct:L(w,N,H,ee,Q,J,ne,re,y);break;default:W&1?X(w,N,H,ee,Q,J,ne,re,y):W&6?b(w,N,H,ee,Q,J,ne,re,y):(W&64||W&128)&&v.process(w,N,H,ee,Q,J,ne,re,y,hn)}j!=null&&Q?yo(j,w&&w.ref,J,N||w,!N):j==null&&w&&w.ref!=null&&yo(w.ref,null,J,w,!0)},D=(w,N,H,ee)=>{if(w==null)r(N.el=l(N.children),H,ee);else{const Q=N.el=w.el;N.children!==w.children&&u(Q,N.children)}},P=(w,N,H,ee)=>{w==null?r(N.el=c(N.children||""),H,ee):N.el=w.el},V=(w,N,H,ee)=>{[w.el,w.anchor]=C(w.children,N,H,ee,w.el,w.anchor)},q=({el:w,anchor:N},H,ee)=>{let Q;for(;w&&w!==N;)Q=m(w),r(w,H,ee),w=Q;r(N,H,ee)},M=({el:w,anchor:N})=>{let H;for(;w&&w!==N;)H=m(w),s(w),w=H;s(N)},X=(w,N,H,ee,Q,J,ne,re,y)=>{if(N.type==="svg"?ne="svg":N.type==="math"&&(ne="mathml"),w==null)te(N,H,ee,Q,J,ne,re,y);else{const v=w.el&&w.el._isVueCE?w.el:null;try{v&&v._beginPatch(),T(w,N,Q,J,ne,re,y)}finally{v&&v._endPatch()}}},te=(w,N,H,ee,Q,J,ne,re)=>{let y,v;const{props:j,shapeFlag:W,transition:se,dirs:oe}=w;if(y=w.el=o(w.type,J,j&&j.is,j),W&8?f(y,w.children):W&16&&E(w.children,y,null,ee,Q,jc(w,J),ne,re),oe&&Ts(w,null,ee,"created"),_(y,w,w.scopeId,ne,ee),j){for(const ce in j)ce!=="value"&&!po(ce)&&i(y,ce,null,j[ce],J,ee);"value"in j&&i(y,"value",null,j.value,J),(v=j.onVnodeBeforeMount)&&jn(v,ee,w)}oe&&Ts(w,null,ee,"beforeMount");const pe=wI(Q,se);pe?se.beforeEnter(y):se&&!se.persisted&&(y[AI]=!0),r(y,N,H),((v=j&&j.onVnodeMounted)||pe||oe)&&Gt(()=>{try{v&&jn(v,ee,w),pe&&se.enter(y),oe&&Ts(w,null,ee,"mounted")}finally{}},Q)},_=(w,N,H,ee,Q)=>{if(H&&I(w,H),ee)for(let J=0;J<ee.length;J++)I(w,ee[J]);if(Q){let J=Q.subTree;if(N===J||d_(J.type)&&(J.ssContent===N||J.ssFallback===N)){const ne=Q.vnode;_(w,ne,ne.scopeId,ne.slotScopeIds,Q.parent)}}},E=(w,N,H,ee,Q,J,ne,re,y=0)=>{for(let v=y;v<w.length;v++){const j=w[v]=re?pr(w[v]):Kn(w[v]);O(null,j,N,H,ee,Q,J,ne,re)}},T=(w,N,H,ee,Q,J,ne)=>{const re=N.el=w.el;let{patchFlag:y,dynamicChildren:v,dirs:j}=N;y|=w.patchFlag&16;const W=w.props||Je,se=N.props||Je;let oe;if(H&&Is(H,!1),(oe=se.onVnodeBeforeUpdate)&&jn(oe,H,N,w),j&&Ts(N,w,H,"beforeUpdate"),H&&Is(H,!0),v&&(!w.dynamicChildren||w.dynamicChildren.length!==v.length)&&(y=0,ne=!1,v=null),(W.innerHTML&&se.innerHTML==null||W.textContent&&se.textContent==null)&&f(re,""),v?A(w.dynamicChildren,v,re,H,ee,jc(N,Q),J):ne||Ae(w,N,re,null,H,ee,jc(N,Q),J,!1),y>0){if(y&16)R(re,W,se,H,Q);else if(y&2&&W.class!==se.class&&i(re,"class",null,se.class,Q),y&4&&i(re,"style",W.style,se.style,Q),y&8){const pe=N.dynamicProps;for(let ce=0;ce<pe.length;ce++){const x=pe[ce],G=W[x],Ie=se[x];(Ie!==G||x==="value")&&i(re,x,G,Ie,Q,H)}}y&1&&w.children!==N.children&&f(re,N.children)}else!ne&&v==null&&R(re,W,se,H,Q);((oe=se.onVnodeUpdated)||j)&&Gt(()=>{oe&&jn(oe,H,N,w),j&&Ts(N,w,H,"updated")},ee)},A=(w,N,H,ee,Q,J,ne)=>{for(let re=0;re<N.length;re++){const y=w[re],v=N[re],j=y.el||To(y),W=j&&(y.type===ct||!eo(y,v)||y.shapeFlag&198)?p(j):H;O(y,v,W,null,ee,Q,J,ne,!0)}},R=(w,N,H,ee,Q)=>{if(N!==H){if(N!==Je)for(const J in N)!po(J)&&!(J in H)&&i(w,J,N[J],null,Q,ee);for(const J in H){if(po(J))continue;const ne=H[J],re=N[J];ne!==re&&J!=="value"&&i(w,J,re,ne,Q,ee)}"value"in H&&i(w,"value",N.value,H.value,Q)}},L=(w,N,H,ee,Q,J,ne,re,y)=>{const v=N.el=w?w.el:l(""),j=N.anchor=w?w.anchor:l("");let{patchFlag:W,dynamicChildren:se,slotScopeIds:oe}=N;oe&&(re=re?re.concat(oe):oe),w==null?(r(v,H,ee),r(j,H,ee),E(N.children||[],H,j,Q,J,ne,re,y)):W>0&&W&64&&se&&w.dynamicChildren&&w.dynamicChildren.length===se.length?(A(w.dynamicChildren,se,H,Q,J,ne,re),(N.key!=null||Q&&N===Q.subTree)&&Rh(w,N,!0)):Ae(w,N,H,j,Q,J,ne,re,y)},b=(w,N,H,ee,Q,J,ne,re,y)=>{N.slotScopeIds=re,w==null?N.shapeFlag&512?Q.ctx.activate(N,H,ee,ne,y):Le(N,H,ee,Q,J,ne,y):Pe(w,N,y)},Le=(w,N,H,ee,Q,J,ne)=>{const re=w.component=DI(w,ee,Q);if(wh(w)&&(re.ctx.renderer=hn),OI(re,!1,ne),re.asyncDep){if(Q&&Q.registerDep(re,nt,ne,J),!w.el){const y=re.subTree=Ee(xn);P(null,y,N,H),w.placeholder=y.el}}else nt(re,w,N,H,Q,J,ne)},Pe=(w,N,H)=>{const ee=N.component=w.component;if(dI(w,N,H))if(ee.asyncDep&&!ee.asyncResolved){N.el=w.el,N.placeholder=w.placeholder,Ce(ee,N,H);return}else ee.next=N,ee.update();else N.el=w.el,N.placeholder=w.placeholder,ee.vnode=N},nt=(w,N,H,ee,Q,J,ne)=>{const re=()=>{if(w.isMounted){let{next:W,bu:se,u:oe,parent:pe,vnode:ce}=w;{const We=f_(w);if(We){W&&(W.el=ce.el,Ce(w,W,ne)),We.asyncDep.then(()=>{const Et=()=>{w.job.flags&8||(Q&&Q.pendingBranch?Gt(Et,Q):v())};Et.flags=48,Gt(Et,Q)});return}}let x=W,G;Is(w,!1),W?(W.el=ce.el,Ce(w,W,ne)):W=ce,se&&tl(se),(G=W.props&&W.props.onVnodeBeforeUpdate)&&jn(G,pe,W,ce),Is(w,!0);const Ie=bd(w),Ne=w.subTree;w.subTree=Ie,O(Ne,Ie,p(Ne.el||To(Ne)),an(Ne),w,Q,J),W.el=Ie.el,x===null&&pI(w,Ie.el),oe&&Gt(oe,Q),(G=W.props&&W.props.onVnodeUpdated)&&Gt(()=>jn(G,pe,W,ce),Q)}else{let W;const{el:se,props:oe}=N,{bm:pe,m:ce,parent:x,root:G,type:Ie}=w,Ne=vo(N);Is(w,!1),pe&&tl(pe),!Ne&&(W=oe&&oe.onVnodeBeforeMount)&&jn(W,x,N),Is(w,!0);{G.ce&&G.ce._hasShadowRoot()&&G.ce._injectChildStyle(Ie,w.parent?w.parent.type:void 0);const We=w.subTree=bd(w);O(null,We,H,ee,w,Q,J),N.el=We.el}if(ce&&Gt(ce,Q),!Ne&&(W=oe&&oe.onVnodeMounted)){const We=N;Gt(()=>jn(W,x,We),Q)}(N.shapeFlag&256||x&&vo(x.vnode)&&x.vnode.shapeFlag&256)&&w.a&&Gt(w.a,Q),w.isMounted=!0,N=H=ee=null}};w.scope.on();const y=w.effect=new Tg(re);w.scope.off();const v=w.update=y.run.bind(y),j=w.job=y.runIfDirty.bind(y);j.i=w,j.id=w.uid,y.scheduler=()=>Ih(j),Is(w,!0),v()},Ce=(w,N,H)=>{N.component=w;const ee=w.vnode.props;w.vnode=N,w.next=null,gI(w,N.props,ee,H),EI(w,N.children,H),nr(),Bg(w),rr()},Ae=(w,N,H,ee,Q,J,ne,re,y=!1)=>{const v=w&&w.children,j=w?w.shapeFlag:0,W=N.children,{patchFlag:se,shapeFlag:oe}=N;if(se>0){if(se&128){kt(v,W,H,ee,Q,J,ne,re,y);return}else if(se&256){dt(v,W,H,ee,Q,J,ne,re,y);return}}oe&8?(j&16&&on(v,Q,J),W!==v&&f(H,W)):j&16?oe&16?kt(v,W,H,ee,Q,J,ne,re,y):on(v,Q,J,!0):(j&8&&f(H,""),oe&16&&E(W,H,ee,Q,J,ne,re,y))},dt=(w,N,H,ee,Q,J,ne,re,y)=>{w=w||Rs,N=N||Rs;const v=w.length,j=N.length,W=Math.min(v,j);let se;for(se=0;se<W;se++){const oe=N[se]=y?pr(N[se]):Kn(N[se]);O(w[se],oe,H,null,Q,J,ne,re,y)}v>j?on(w,Q,J,!0,!1,W):E(N,H,ee,Q,J,ne,re,y,W)},kt=(w,N,H,ee,Q,J,ne,re,y)=>{let v=0;const j=N.length;let W=w.length-1,se=j-1;for(;v<=W&&v<=se;){const oe=w[v],pe=N[v]=y?pr(N[v]):Kn(N[v]);if(eo(oe,pe))O(oe,pe,H,null,Q,J,ne,re,y);else break;v++}for(;v<=W&&v<=se;){const oe=w[W],pe=N[se]=y?pr(N[se]):Kn(N[se]);if(eo(oe,pe))O(oe,pe,H,null,Q,J,ne,re,y);else break;W--,se--}if(v>W){if(v<=se){const oe=se+1,pe=oe<j?N[oe].el:ee;for(;v<=se;)O(null,N[v]=y?pr(N[v]):Kn(N[v]),H,pe,Q,J,ne,re,y),v++}}else if(v>se)for(;v<=W;)$e(w[v],Q,J,!0),v++;else{const oe=v,pe=v,ce=new Map;for(v=pe;v<=se;v++){const Tt=N[v]=y?pr(N[v]):Kn(N[v]);Tt.key!=null&&ce.set(Tt.key,v)}let x,G=0;const Ie=se-pe+1;let Ne=!1,We=0;const Et=new Array(Ie);for(v=0;v<Ie;v++)Et[v]=0;for(v=oe;v<=W;v++){const Tt=w[v];if(G>=Ie){$e(Tt,Q,J,!0);continue}let Dt;if(Tt.key!=null)Dt=ce.get(Tt.key);else for(x=pe;x<=se;x++)if(Et[x-pe]===0&&eo(Tt,N[x])){Dt=x;break}Dt===void 0?$e(Tt,Q,J,!0):(Et[Dt-pe]=v+1,Dt>=We?We=Dt:Ne=!0,O(Tt,N[Dt],H,null,Q,J,ne,re,y),G++)}const Nt=Ne?bI(Et):Rs;for(x=Nt.length-1,v=Ie-1;v>=0;v--){const Tt=pe+v,Dt=N[Tt],ar=N[Tt+1],ms=Tt+1<j?ar.el||To(ar):ee;Et[v]===0?O(null,Dt,H,ms,Q,J,ne,re,y):Ne&&(x<0||v!==Nt[x]?Qe(Dt,H,ms,2):x--)}}},Qe=(w,N,H,ee,Q=null)=>{const{el:J,type:ne,transition:re,children:y,shapeFlag:v}=w;if(v&6){Qe(w.component.subTree,N,H,ee);return}if(v&128){w.suspense.move(N,H,ee);return}if(v&64){ne.move(w,N,H,hn);return}if(ne===ct){r(J,N,H);for(let W=0;W<y.length;W++)Qe(y[W],N,H,ee);r(w.anchor,N,H);return}if(ne===Bc){q(w,N,H);return}if(ee!==2&&v&1&&re)if(ee===0)re.persisted&&!J[Uc]?r(J,N,H):(re.beforeEnter(J),r(J,N,H),Gt(()=>re.enter(J),Q));else{const{leave:W,delayLeave:se,afterLeave:oe}=re,pe=()=>{w.ctx.isUnmounted?s(J):r(J,N,H)},ce=()=>{const x=J._isLeaving||!!J[Uc];J._isLeaving&&J[Uc](!0),re.persisted&&!x?pe():W(J,()=>{pe(),oe&&oe()})};se?se(J,pe,ce):ce()}else r(J,N,H)},$e=(w,N,H,ee=!1,Q=!1)=>{const{type:J,props:ne,ref:re,children:y,dynamicChildren:v,shapeFlag:j,patchFlag:W,dirs:se,cacheIndex:oe,memo:pe}=w;if((W===-2||v&&v.hasOnce)&&(Q=!1),re!=null&&(nr(),yo(re,null,H,w,!0),rr()),oe!=null&&(!w.ctx||w.ctx===N)&&(N.renderCache[oe]=void 0),j&256&&N.ctx.deactivate(w))return;const ce=j&1&&se,x=!vo(w);let G;if(x&&(G=ne&&ne.onVnodeBeforeUnmount)&&jn(G,N,w),j&6)ut(w.component,H,ee);else{if(j&128){w.suspense.unmount(H,ee);return}ce&&Ts(w,null,N,"beforeUnmount"),j&64?w.type.remove(w,N,H,hn,ee):v&&!v.hasOnce&&(J!==ct||W>0&&W&64)?on(v,N,H,!1,!0):(J===ct&&W&384||!Q&&j&16)&&on(y,N,H),ee&&rt(w)}const Ie=pe!=null&&oe==null;(x&&(G=ne&&ne.onVnodeUnmounted)||ce||Ie)&&Gt(()=>{G&&jn(G,N,w),ce&&Ts(w,null,N,"unmounted"),Ie&&(w.el=null)},H)},rt=w=>{const{type:N,el:H,anchor:ee,transition:Q}=w,J=N===ct;if(J&&!Q){wn(H,ee);return}if(N===Bc){M(w),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave();return}const ne=J?Iu(w):w,re=()=>{J?p(H)&&wn(H,ee):s(H),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(ne&&ne.shapeFlag&1&&Q&&!Q.persisted){const{leave:y,delayLeave:v}=Q,j=ne.el,W=()=>y(j,re);v?v(j,re,W):W()}else re()},wn=(w,N)=>{let H;for(;w!==N;)H=m(w),s(w),w=H;s(N)},ut=(w,N,H)=>{const{bum:ee,scope:Q,job:J,subTree:ne,um:re,m:y,a:v}=w;Cd(y),Cd(v),ee&&tl(ee),Q.stop(),J?(J.flags|=8,$e(ne,w,N,H)):ne&&(ne.transition=w.vnode.transition,$e(ne,w,N,H)),re&&Gt(re,N);const j=()=>{w.isUnmounted=!0};j.flags=16,Gt(j,N)},on=(w,N,H,ee=!1,Q=!1,J=0)=>{for(let ne=J;ne<w.length;ne++)$e(w[ne],N,H,ee,Q)},an=w=>{if(w.shapeFlag&6)return an(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const N=m(w.anchor||w.el),H=N&&N[Gg];return H?m(H):N},bn=(w,N,H)=>{const ee=w&&N._vnode?void 0:w&&w.component?w.component.uid:NI();DT(()=>{w==null?N._vnode&&$e(N._vnode,null,null,!0):O(N._vnode||null,w,N,null,null,null,H),N._vnode=w},ee)},hn={p:O,um:$e,m:Qe,r:rt,mt:Le,mc:E,pc:Ae,pbc:A,n:an,o:t};return{render:bn,hydrate:void 0,createApp:aI(bn)}}function jc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Is({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function wI(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Rh(t,e,n=!1){const r=t.children,s=e.children;if(_e(r)&&_e(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=pr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Rh(o,l)),l.type===Zo&&(l.patchFlag===-1&&(l=s[i]=pr(l)),l.el=o.el),l.type===xn&&!l.el&&(l.el=o.el)}}function bI(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function f_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:f_(e)}function Cd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function To(t){if(t.placeholder)return t.placeholder;const e=t.component;if(e)return To(e.subTree);const n=t.suspense;return n&&n.activeBranch?To(n.activeBranch):null}const d_=t=>t.__isSuspense,AI=Symbol("_deferredEnter");function SI(t,e){e&&e.pendingBranch?_e(t)?e.effects.push(...t):e.effects.push(t):NT(t)}const ct=Symbol.for("v-fgt"),Zo=Symbol.for("v-txt"),xn=Symbol.for("v-cmt"),Bc=Symbol.for("v-stc"),Ls=[];let dn=null;function fe(t=!1){Ls.push(dn=t?null:[])}function p_(){Ls.pop(),dn=Ls[Ls.length-1]||null}let Do=1;function El(t,e=!1){Do+=t,t<0&&dn&&e&&(dn.hasOnce=!0)}function m_(t){return t.dynamicChildren=Do>0?dn||Rs:null,p_(),Do>0&&dn&&dn.push(t),t}function ge(t,e,n,r,s,i){return m_(F(t,e,n,r,s,i,!0))}function Kt(t,e,n,r,s){return m_(Ee(t,e,n,r,s,!0))}function Oo(t){return t?t.__v_isVNode===!0:!1}function eo(t,e){return t.type===e.type&&t.key===e.key}const g_=({key:t})=>t??null,nl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ht(t)||Bt(t)||be(t)?{i:vn,r:t,k:e,f:!!n}:t:null);function F(t,e=null,n=null,r=0,s=null,i=t===ct?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&g_(e),ref:e&&nl(e),scopeId:Wg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:vn};return l?(Tl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ht(n)?8:16),Do>0&&!o&&dn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&dn.push(c),c}const Ee=CI;function CI(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===ZT)&&(t=xn),Oo(t)){const l=Ti(t,e,!0);return n&&Tl(l,n),Do>0&&!i&&dn&&(l.shapeFlag&6?dn[dn.indexOf(t)]=l:dn.push(l)),l.patchFlag=-2,l}if(xI(t)&&(t=t.__vccOpts),e){e=RI(e);let{class:l,style:c}=e;l&&!ht(l)&&(e.class=Ot(l)),Ke(c)&&(Th(c)&&!_e(c)&&(c=Pt({},c)),e.style=Ps(c))}const o=ht(t)?1:d_(t)?128:Zl(t)?64:Ke(t)?4:be(t)?2:0;return F(t,e,n,r,s,o,i,!0)}function RI(t){return t?Th(t)?Pt({},t):o_(t)?Pt({},t[T_]||t):t:null}function Ti(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?PI(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&g_(u),ref:e&&e.ref?n&&i?_e(i)?i.concat(nl(e)):[i,nl(e)]:nl(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ct?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ti(t.ssContent),ssFallback:t.ssFallback&&Ti(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce,cacheIndex:t.cacheIndex};return c&&r&&_o(f,c.clone(f)),f}function _n(t=" ",e=0){return Ee(Zo,null,t,e)}function It(t="",e=!1){return e?(fe(),Kt(xn,null,t)):Ee(xn,null,t)}function Kn(t){return t==null||typeof t=="boolean"?Ee(xn):_e(t)?Ee(ct,null,t.slice()):Oo(t)?pr(t):Ee(Zo,null,String(t))}function pr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ti(t)}function Tl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(_e(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Tl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!o_(e)?e._ctx=vn:s===3&&vn&&(vn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(be(e)){if(r&65){Tl(t,{default:e});return}e={default:e,_ctx:vn},n=32}else e=String(e),r&64?(n=16,e=[_n(e)]):n=8;t.children=e,t.shapeFlag|=n}function PI(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ot([e.class,r.class]));else if(s==="style")e.style=Ps([e.style,r.style]);else if(Kl(s)){const i=e[s],o=r[s];o&&i!==o&&!(_e(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!Gl(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function jn(t,e,n,r=null){Mn(t,e,7,[n,r])}const kI=e_();let __=0;function NI(){return __}function DI(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||kI,i={uid:__++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new yg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:l_(r,s),emitsOptions:t_(r,s),emit:null,emitted:null,propsDefaults:Je,inheritAttrs:r.inheritAttrs,ctx:Je,data:Je,props:Je,attrs:Je,slots:Je,refs:Je,setupState:Je,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=cI.bind(null,i),t.ce&&t.ce(i),i}let rn=null;const y_=()=>rn||vn;let Il,Lo;{const t=Yl(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Il=e("__VUE_INSTANCE_SETTERS__",n=>rn=n),Lo=e("__VUE_SSR_SETTERS__",n=>Vo=n)}const ea=t=>{const e=rn;return Il(t),t.scope.on(),()=>{t.scope.off(),Il(e)}},Rd=()=>{rn&&rn.scope.off(),Il(null)};function v_(t){return t.vnode.shapeFlag&4}let Vo=!1;function OI(t,e=!1,n=!1){e&&Lo(e);const{props:r,children:s}=t.vnode,i=v_(t);mI(t,r,i,e),vI(t,s,n||e);const o=i?LI(t,e):void 0;return e&&Lo(!1),o}function LI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,eI);const{setup:r}=n;if(r){nr();const s=t.setupContext=r.length>1?MI(t):null,i=ea(t),o=Jo(r,t,0,[t.props,s]),l=cg(o);if(rr(),i(),(l||t.sp)&&!vo(t)&&Yg(t),l){if(o.then(Rd,Rd),e)return o.then(c=>{Lo(!0);try{Pd(t,c,e)}finally{Lo(!1)}}).catch(c=>{Jl(c,t,0,void 0,!0),t.ssrRender=(u,f)=>f("<!---->")});t.asyncDep=o}else Pd(t,o)}else E_(t)}function Pd(t,e,n){be(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ke(e)&&(t.setupState=Fg(e)),E_(t)}function E_(t,e,n){const r=t.type;t.render||(t.render=r.render||Qn);{const s=ea(t);nr();try{tI(t)}finally{rr(),s()}}}const T_=Symbol(),VI={get(t,e){return Xt(t,"get",""),e===T_?t:t[e]}};function MI(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,VI),slots:t.slots,emit:t.emit,expose:e}}function nc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Fg(Mg(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Eo)return Eo[n](t)},has(e,n){return n in e||n in Eo}})):t.proxy}function xI(t){return be(t)&&"__vccOpts"in t}const Ut=(t,e)=>ST(t,e,Vo);function xs(t,e,n){try{El(-1);const r=arguments.length;return r===2?Ke(e)&&!_e(e)?Oo(e)?Ee(t,null,[e]):Ee(t,e):Ee(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Oo(n)&&(n=[n]),Ee(t,e,n))}finally{El(1)}}const FI="3.5.45";/**
* @vue/runtime-dom v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Cu;const kd=typeof window<"u"&&window.trustedTypes;if(kd)try{Cu=kd.createPolicy("vue",{createHTML:t=>t})}catch{}const I_=Cu?t=>Cu.createHTML(t):t=>t,UI="http://www.w3.org/2000/svg",$I="http://www.w3.org/1998/Math/MathML",dr=typeof document<"u"?document:null,Nd=dr&&dr.createElement("template"),jI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?dr.createElementNS(UI,t):e==="mathml"?dr.createElementNS($I,t):n?dr.createElement(t,{is:n}):dr.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>dr.createTextNode(t),createComment:t=>dr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>dr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Nd.innerHTML=I_(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Nd.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},BI=Symbol("_vtc");function qI(t,e,n){const r=t[BI];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Dd=Symbol("_vod"),HI=Symbol("_vsh"),WI=Symbol(""),zI=/(?:^|;)\s*display\s*:/;function KI(t,e,n){const r=t.style,s=ht(n);let i=!1;if(n&&!s){if(e)if(ht(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&lo(r,l,"")}else for(const o in e)n[o]==null&&lo(r,o,"");for(const o in n){o==="display"&&(i=!0);const l=n[o];l!=null?QI(t,o,!ht(e)&&e?e[o]:void 0,l)||lo(r,o,l):lo(r,o,"")}}else if(s){if(e!==n){const o=r[WI];o&&(n+=";"+o),r.cssText=n,i=zI.test(n)}}else e&&t.removeAttribute("style");Dd in t&&((!s||e!==n)&&(t[Dd]=i?r.display:""),t[HI]&&(r.display="none"))}const Ua=/\s*!important$/;function lo(t,e,n){if(_e(n))n.forEach(r=>lo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))Ua.test(n)?t.setProperty(e,n.replace(Ua,""),"important"):t.setProperty(e,n);else{const r=GI(t,e);Ua.test(n)?t.setProperty(cs(r),n.replace(Ua,""),"important"):t[r]=n}}const Od=["Webkit","Moz","ms"],qc={};function GI(t,e){const n=qc[e];if(n)return n;let r=Nn(e);if(r!=="filter"&&r in t)return qc[e]=r;r=fg(r);for(let s=0;s<Od.length;s++){const i=Od[s]+r;if(i in t)return qc[e]=i}return e}function QI(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&ht(r)&&n===r}const Ld="http://www.w3.org/1999/xlink";function Vd(t,e,n,r,s,i=tT(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ld,e.slice(6,e.length)):t.setAttributeNS(Ld,e,n):n==null||i&&!pg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":tr(n)?String(n):n)}function Md(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?I_(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=pg(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Cs(t,e,n,r){t.addEventListener(e,n,r)}function YI(t,e,n,r){t.removeEventListener(e,n,r)}const xd=Symbol("_vei");function XI(t,e,n,r,s=null){const i=t[xd]||(t[xd]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=ew(e);if(r){const u=i[e]=rw(r,s);Cs(t,l,u,c)}else o&&(YI(t,l,o,c),i[e]=void 0)}}const JI=/(Once|Passive|Capture)$/,ZI=/^on:?(?:Once|Passive|Capture)$/;function ew(t){let e,n;for(;(n=t.match(JI))&&!ZI.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):cs(t.slice(2)),e]}let Hc=0;const tw=Promise.resolve(),nw=()=>Hc||(tw.then(()=>Hc=0),Hc=Date.now());function rw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(_e(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const o=s.slice(),l=[r];for(let c=0;c<o.length&&!r._stopped;c++){const u=o[c];u&&Mn(u,e,5,l)}}else Mn(s,e,5,[r])};return n.value=t,n.attached=nw(),n}const Fd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,sw=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?qI(t,r,o):e==="style"?KI(t,n,r):Kl(e)?Gl(e)||XI(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):iw(t,e,r,o))?(Md(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Vd(t,e,r,o,i,e!=="value")):t._isVueCE&&(ow(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!ht(r)))?Md(t,Nn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Vd(t,e,r,o))};function iw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Fd(e)&&be(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Fd(e)&&ht(n)?!1:e in t}function ow(t,e){const n=t._def.props;if(!n)return!1;const r=Nn(e);return Array.isArray(n)?n.some(s=>Nn(s)===r):Object.keys(n).some(s=>Nn(s)===r)}const wl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return _e(e)?n=>tl(e,n):e};function aw(t){t.target.composing=!0}function Ud(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ks=Symbol("_assign"),$a=Symbol("_initialValue");function Wc(t,e,n){return e&&(t=t.trim()),n&&(t=dh(t)),t}const ja={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t.parentNode&&(t.type==="text"?t[$a]=t.defaultValue.replace(/[\r\n]/g,""):t.type==="textarea"&&(t[$a]=t.defaultValue.replace(/\r\n?/g,`
`))),t[ks]=wl(s);const i=r||s.props&&s.props.type==="number";Cs(t,e?"change":"input",o=>{o.target.composing||t[ks](Wc(t.value,n,i))}),(n||i)&&Cs(t,"change",()=>{t.value=Wc(t.value,n,i)}),e||(Cs(t,"compositionstart",aw),Cs(t,"compositionend",Ud),Cs(t,"change",Ud))},mounted(t,{value:e,modifiers:{trim:n,number:r}}){const s=e??"",i=t[$a];delete t[$a],i!==void 0&&(t.type==="text"||t.type==="textarea")&&t.value!==i?t[ks](Wc(t.value,n,r)):t.value=s},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[ks]=wl(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?dh(t.value):t.value,c=e??"";if(l===c)return;const u=t.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c)}},lw={deep:!0,created(t,e,n){t[ks]=wl(n),Cs(t,"change",()=>{const r=t._modelValue,s=cw(t),i=t.checked,o=t[ks];if(_e(r)){const l=mg(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(Ei(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(w_(t,i))})},mounted:$d,beforeUpdate(t,e,n){t[ks]=wl(n),$d(t,e,n)}};function $d(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(_e(e))s=mg(e,r.props.value)>-1;else if(Ei(e))s=e.has(r.props.value);else{if(e===n)return;s=ki(e,w_(t,!0))}t.checked!==s&&(t.checked=s)}function cw(t){return"_value"in t?t._value:t.value}function w_(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const uw=["ctrl","shift","alt","meta"],hw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>uw.some(n=>t[`${n}Key`]&&!e.includes(n))},gn=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const l=hw[e[o]];if(l&&l(s,e))return}return t(s,...i)}))},fw={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},dw=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=(s=>{if(!("key"in s))return;const i=cs(s.key);if(e.some(o=>o===i||fw[o]===i))return t(s)}))},pw=Pt({patchProp:sw},jI);let jd;function mw(){return jd||(jd=TI(pw))}const gw=((...t)=>{const e=mw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=yw(r);if(!s)return;const i=e._component;!be(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,_w(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function _w(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function yw(t){return ht(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const vw=Symbol();var Bd;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Bd||(Bd={}));function Ew(){const t=vg(!0),e=t.run(()=>Xe({}));let n=[],r=[];const s=Mg({install(i){s._a=i,i.provide(vw,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * shared v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */const bl=typeof window<"u",us=(t,e=!1)=>e?Symbol.for(t):Symbol(t),Tw=(t,e,n)=>Iw({l:t,k:e,s:n}),Iw=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),St=t=>typeof t=="number"&&isFinite(t),b_=t=>kh(t)==="[object Date]",Fs=t=>kh(t)==="[object RegExp]",Ph=t=>Ze(t)&&Object.keys(t).length===0,vt=Object.assign,ww=Object.create,ze=(t=null)=>ww(t);let qd;const Wr=()=>qd||(qd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:ze()),bw=Object.prototype.hasOwnProperty;function En(t,e){return bw.call(t,e)}function Vt(t,e){const n=t[e];return En(t,e)?n:void 0}function A_(t){return En(Object.prototype,t)}const ot=Array.isArray,it=t=>typeof t=="function",de=t=>typeof t=="string",Ge=t=>typeof t=="boolean",xe=t=>t!==null&&typeof t=="object",Aw=t=>xe(t)&&it(t.then)&&it(t.catch),S_=Object.prototype.toString,kh=t=>S_.call(t),Ze=t=>kh(t)==="[object Object]",Sw=t=>t==null?"":ot(t)||Ze(t)&&t.toString===S_?JSON.stringify(t,null,2):String(t);function Nh(t,e=""){return t.reduce((n,r,s)=>s===0?n+r:n+e+r,"")}function Cw(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}function Hd(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2F;").replace(/=/g,"&#x3D;")}function Rw(t){return t.replace(/&(?![a-z0-9#]{2,6};)/gi,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const Pw=/^javascript:/i,kw=/^(?:href|xlink:href|src|action|formaction)$/i,Nw=/&#(?:x([0-9a-f]+)|(\d+));?/gi,Dw=/&(?:Tab|NewLine);/g,Ow=/&colon;?/gi,Lw=/[\u0000-\u0020\u007f-\u009f]/g,Vw=/^on\w/i,Mw=/^srcdoc$/i,xw=/^(?:base|animate|set|script|plaintext)$/i,Fw=/^(?:iframe|noembed|noframes|noscript|style|textarea|title|xmp)$/i,zc=/<(\/?)([a-z][^\t\n\f\r />]*)/iy,Kc=/([\t\n\f\r /]*)(?:(>)|([^\t\n\f\r />][^\t\n\f\r />=]*)(?:[\t\n\f\r ]*=[\t\n\f\r ]*(?:(["'])([\s\S]*?)(\4|$)|([^\t\n\f\r >]*)))?)/y,Ba=/<!--(?:>|->|[\s\S]*?--!?>)/y;function Uw(t,e,n){const r=e||n;if(!r)return t;const s=Number.parseInt(r,e?16:10);return s<=127?String.fromCharCode(s):t}function C_(t){const e=t.replace(Nw,Uw).replace(Dw,"").replace(Ow,":").replace(Lw,"");return Pw.test(e)}function $w(t){const e=/url\s*\(/gi;let n="",r=0,s;for(;(s=e.exec(t))!==null;){const i=s.index,o=e.lastIndex-1;let l=o+1,c=1,u=null;for(;l<t.length;l++){const m=t[l];if(u){m===u&&(u=null);continue}if(m==='"'||m==="'")u=m;else if(m==="(")c++;else if(m===")"&&(c--,c===0))break}if(c!==0)break;const f=t.slice(o+1,l).trim(),p=f.startsWith('"')&&f.endsWith('"')||f.startsWith("'")&&f.endsWith("'")?f.slice(1,-1).trim():f;n+=t.slice(r,i),n+=C_(p)?"url(about:blank)":t.slice(i,l+1),r=l+1}return n+t.slice(r)}function jw(t,e){if(kw.test(t)&&C_(e))return"about:blank";const n=t.toLowerCase()==="style"?$w(e):e;return Rw(n)}function qa(t){return t.replace(/</g,"&lt;")}function Bw(t,e,n,r){let s=t;if(Vw.test(t)?(r.eventHandler=!0,s=`&#111;n${t.slice(2)}`):Mw.test(t)&&(r.srcdoc=!0,s=`&#115;${t.slice(1)}`),e===void 0)return s;const i=n||"";return`${s}=${i}${jw(t,e)}${i}`}function R_(t,e,n){zc.lastIndex=e;const r=zc.exec(t);if(!r)return;const[,s,i]=r;let o=r[0],l;for(Kc.lastIndex=zc.lastIndex;l=Kc.exec(t);){const[c,u,f,p,m,I,C,O]=l;if(f){const D=Kc.lastIndex;return[s?t.slice(e,D):o+c,i,D]}if(m&&!C)break;s||(o+=u+Bw(p,m?I:O,m,n))}return[o,i,-1]}function qw(t,e,n){for(let r=t.indexOf("</",e);r!==-1;r=t.indexOf("</",r+2)){const s=R_(t,r,{});if(s&&s[1].toLowerCase()===n.toLowerCase())return s[2]===-1?-1:r}return-1}function Hw(t){const e={};let n="",r=0,s;for(;(s=t.indexOf("<",r))!==-1;){n+=t.slice(r,s),r=s+1;const i=R_(t,s,e);if(i){const[o,l,c]=i;if(c===-1){e.unclosed=!0,n+=qa(t.slice(s)),r=t.length;break}if(r=c,o[1]==="/")n+=o;else if(xw.test(l))e.element=!0,n+=qa(o);else if(Fw.test(l)){const u=qw(t,c,l);u===-1?(e.unclosed=!0,n+=qa(o)):(n+=o+qa(t.slice(c,u)),r=u)}else n+=o;continue}if(Ba.lastIndex=s,Ba.test(t)){n+=t.slice(s,Ba.lastIndex),r=Ba.lastIndex;continue}t.startsWith("<!--",s)&&(e.unclosed=!0),n+="&lt;"}return n+=t.slice(r),n}const Wd=t=>!xe(t)||ot(t);function rl(t,e){if(Wd(t)||Wd(e)||e===Object.prototype)throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:r,des:s}=n.pop();Object.keys(r).forEach(i=>{if(i==="__proto__")return;const o=r[i];if(ot(o)){const l=[];l.length=o.length,s[i]=l,n.push({src:o,des:l})}else xe(o)?((!xe(s[i])||ot(s[i]))&&(s[i]=ze()),n.push({src:o,des:s[i]})):s[i]=o})}}/*!
  * message-compiler v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */function Ww(t,e,n){return{line:t,column:e,offset:n}}function Ru(t,e,n){return{start:t,end:e}}const Be={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14},zw=17;function rc(t,e,n={}){const{domain:r,messages:s,args:i}=n,o=t,l=new SyntaxError(String(o));return l.code=t,e&&(l.location=e),l.domain=r,l}function Kw(t){throw t}const Bn=" ",Gw="\r",Qt=`
`,Qw="\u2028",Yw="\u2029";function Xw(t){const e=t;let n=0,r=1,s=1,i=0;const o=_=>e[_]===Gw&&e[_+1]===Qt,l=_=>e[_]===Qt,c=_=>e[_]===Yw,u=_=>e[_]===Qw,f=_=>o(_)||l(_)||c(_)||u(_),p=()=>n,m=()=>r,I=()=>s,C=()=>i,O=_=>o(_)||c(_)||u(_)?Qt:e[_],D=()=>O(n),P=()=>O(n+i);function V(){return i=0,f(n)&&(r++,s=0),o(n)&&n++,n++,s++,e[n]}function q(){return o(n+i)&&i++,i++,e[n+i]}function M(){n=0,r=1,s=1,i=0}function X(_=0){i=_}function te(){const _=n+i;for(;_!==n;)V();i=0}return{index:p,line:m,column:I,peekOffset:C,charAt:O,currentChar:D,currentPeek:P,next:V,peek:q,reset:M,resetPeek:X,skipToPeek:te}}const hr=void 0,zd="	",Kd="'",Jw="tokenizer";function Zw(t,e={}){const n=e.location!==!1,r=Xw(t),s=()=>r.index(),i=()=>Ww(r.line(),r.column(),r.index()),o=i(),l=s(),c={currentType:13,offset:l,startLoc:o,endLoc:o,lastType:13,lastOffset:l,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},u=()=>c,{onError:f}=e;function p(y,v,j,...W){const se=u();if(v.column+=j,v.offset+=j,f){const oe=n?Ru(se.startLoc,v):null,pe=rc(y,oe,{domain:Jw,args:W});f(pe)}}function m(y,v,j){y.endLoc=i(),y.currentType=v;const W={type:v};return n&&(W.loc=Ru(y.startLoc,y.endLoc)),j!=null&&(W.value=j),W}const I=y=>m(y,13);function C(y,v){return y.currentChar()===v?(y.next(),v):(p(Be.EXPECTED_TOKEN,i(),0,v),"")}function O(y){let v="";for(;y.currentPeek()===Bn||y.currentPeek()===Qt;)v+=y.currentPeek(),y.peek();return v}function D(y){const v=O(y);return y.skipToPeek(),v}function P(y){if(y===hr)return!1;const v=y.charCodeAt(0);return v>=97&&v<=122||v>=65&&v<=90||v===95}function V(y){if(y===hr)return!1;const v=y.charCodeAt(0);return v>=48&&v<=57}function q(y,v){const{currentType:j}=v;if(j!==2)return!1;O(y);const W=P(y.currentPeek());return y.resetPeek(),W}function M(y,v){const{currentType:j}=v;if(j!==2)return!1;O(y);const W=y.currentPeek()==="-"?y.peek():y.currentPeek(),se=V(W);return y.resetPeek(),se}function X(y,v){const{currentType:j}=v;if(j!==2)return!1;O(y);const W=y.currentPeek()===Kd;return y.resetPeek(),W}function te(y,v){const{currentType:j}=v;if(j!==7)return!1;O(y);const W=y.currentPeek()===".";return y.resetPeek(),W}function _(y,v){const{currentType:j}=v;if(j!==8)return!1;O(y);const W=P(y.currentPeek());return y.resetPeek(),W}function E(y,v){const{currentType:j}=v;if(!(j===7||j===11))return!1;O(y);const W=y.currentPeek()===":";return y.resetPeek(),W}function T(y,v){const{currentType:j}=v;if(j!==9)return!1;const W=()=>{const oe=y.currentPeek();return oe==="{"?P(y.peek()):oe==="@"||oe==="|"||oe===":"||oe==="."||oe===Bn||!oe?!1:oe===Qt?(y.peek(),W()):R(y,!1)},se=W();return y.resetPeek(),se}function A(y){O(y);const v=y.currentPeek()==="|";return y.resetPeek(),v}function R(y,v=!0){const j=(se=!1,oe="")=>{const pe=y.currentPeek();return pe==="{"||pe==="@"||!pe?se:pe==="|"?!(oe===Bn||oe===Qt):pe===Bn?(y.peek(),j(!0,Bn)):pe===Qt?(y.peek(),j(!0,Qt)):!0},W=j();return v&&y.resetPeek(),W}function L(y,v){const j=y.currentChar();return j===hr?hr:v(j)?(y.next(),j):null}function b(y){const v=y.charCodeAt(0);return v>=97&&v<=122||v>=65&&v<=90||v>=48&&v<=57||v===95||v===36}function Le(y){return L(y,b)}function Pe(y){const v=y.charCodeAt(0);return v>=97&&v<=122||v>=65&&v<=90||v>=48&&v<=57||v===95||v===36||v===45}function nt(y){return L(y,Pe)}function Ce(y){const v=y.charCodeAt(0);return v>=48&&v<=57}function Ae(y){return L(y,Ce)}function dt(y){const v=y.charCodeAt(0);return v>=48&&v<=57||v>=65&&v<=70||v>=97&&v<=102}function kt(y){return L(y,dt)}function Qe(y){let v="",j="";for(;v=Ae(y);)j+=v;return j}function $e(y){let v="";for(;;){const j=y.currentChar();if(j==="\\"){const W=y.peek();W==="{"||W==="}"||W==="@"||W==="|"||W==="\\"?(v+=j+W,y.next(),y.next()):(y.resetPeek(),v+=j,y.next())}else{if(j==="{"||j==="}"||j==="@"||j==="|"||!j)break;if(j===Bn||j===Qt)if(R(y))v+=j,y.next();else{if(A(y))break;v+=j,y.next()}else v+=j,y.next()}}return v}function rt(y){D(y);let v="",j="";for(;v=nt(y);)j+=v;const W=y.currentChar();if(W&&W!=="}"&&W!==hr&&W!==Bn&&W!==Qt&&W!=="　"){const se=mn(y);return p(Be.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,j+se),j+se}return y.currentChar()===hr&&p(Be.UNTERMINATED_CLOSING_BRACE,i(),0),j}function wn(y){D(y);let v="";return y.currentChar()==="-"?(y.next(),v+=`-${Qe(y)}`):v+=Qe(y),y.currentChar()===hr&&p(Be.UNTERMINATED_CLOSING_BRACE,i(),0),v}function ut(y){return y!==Kd&&y!==Qt}function on(y){D(y),C(y,"'");let v="",j="";for(;v=L(y,ut);)v==="\\"?j+=an(y):j+=v;const W=y.currentChar();return W===Qt||W===hr?(p(Be.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,i(),0),W===Qt&&(y.next(),C(y,"'")),j):(C(y,"'"),j)}function an(y){const v=y.currentChar();switch(v){case"\\":case"'":return y.next(),`\\${v}`;case"u":return bn(y,v,4);case"U":return bn(y,v,6);default:return p(Be.UNKNOWN_ESCAPE_SEQUENCE,i(),0,v),""}}function bn(y,v,j){C(y,v);let W="";for(let se=0;se<j;se++){const oe=kt(y);if(!oe){p(Be.INVALID_UNICODE_ESCAPE_SEQUENCE,i(),0,`\\${v}${W}${y.currentChar()}`);break}W+=oe}return`\\${v}${W}`}function hn(y){return y!=="{"&&y!=="}"&&y!==Bn&&y!==Qt}function mn(y){D(y);let v="",j="";for(;v=L(y,hn);)j+=v;return j}function w(y){let v="",j="";for(;v=Le(y);)j+=v;return j}function N(y){return!(y==="{"||y==="@"||y==="|"||y==="("||y===")"||y===Bn||y===zd||y===Qt)}function H(y){for(;y.currentChar()===zd;)y.next();let v="",j;for(;(j=y.currentChar())&&N(j);)v+=j,y.next();return v}function ee(y){D(y);const v=C(y,"|");return D(y),v}function Q(y,v){let j=null;switch(y.currentChar()){case"{":return v.braceNest>=1&&p(Be.NOT_ALLOW_NEST_PLACEHOLDER,i(),0),y.next(),j=m(v,2,"{"),D(y),v.braceNest++,j;case"}":return v.braceNest>0&&v.currentType===2&&p(Be.EMPTY_PLACEHOLDER,i(),0),y.next(),j=m(v,3,"}"),v.braceNest--,v.braceNest>0&&D(y),v.inLinked&&v.braceNest===0&&(v.inLinked=!1),j;case"@":return v.braceNest>0&&p(Be.UNTERMINATED_CLOSING_BRACE,i(),0),j=J(y,v)||I(v),v.braceNest=0,j;default:{let se=!0,oe=!0,pe=!0;if(A(y))return v.braceNest>0&&p(Be.UNTERMINATED_CLOSING_BRACE,i(),0),j=m(v,1,ee(y)),v.braceNest=0,v.inLinked=!1,j;if(v.braceNest>0&&(v.currentType===4||v.currentType===5||v.currentType===6))return p(Be.UNTERMINATED_CLOSING_BRACE,i(),0),v.braceNest=0,ne(y,v);if(se=q(y,v))return j=m(v,4,rt(y)),D(y),j;if(oe=M(y,v))return j=m(v,5,wn(y)),D(y),j;if(pe=X(y,v))return j=m(v,6,on(y)),D(y),j;if(!se&&!oe&&!pe)return j=m(v,12,mn(y)),p(Be.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,j.value),D(y),j;break}}return j}function J(y,v){const{currentType:j}=v;let W=null;const se=y.currentChar();switch((j===7||j===8||j===11||j===9)&&(se===Qt||se===Bn)&&p(Be.INVALID_LINKED_FORMAT,i(),0),se){case"@":return y.next(),W=m(v,7,"@"),v.inLinked=!0,W;case".":return D(y),y.next(),m(v,8,".");case":":return D(y),y.next(),m(v,9,":");default:return A(y)?(W=m(v,1,ee(y)),v.braceNest=0,v.inLinked=!1,W):te(y,v)||E(y,v)?(D(y),J(y,v)):_(y,v)?(D(y),m(v,11,w(y))):T(y,v)?(D(y),se==="{"?Q(y,v)||W:m(v,10,H(y))):(j===7&&p(Be.INVALID_LINKED_FORMAT,i(),0),v.braceNest=0,v.inLinked=!1,ne(y,v))}}function ne(y,v){let j={type:13};if(v.braceNest>0)return Q(y,v)||I(v);if(v.inLinked)return J(y,v)||I(v);switch(y.currentChar()){case"{":return Q(y,v)||I(v);case"}":return p(Be.UNBALANCED_CLOSING_BRACE,i(),0),y.next(),m(v,3,"}");case"@":return J(y,v)||I(v);default:{if(A(y))return j=m(v,1,ee(y)),v.braceNest=0,v.inLinked=!1,j;if(R(y))return m(v,0,$e(y));break}}return j}function re(){const{currentType:y,offset:v,startLoc:j,endLoc:W}=c;return c.lastType=y,c.lastOffset=v,c.lastStartLoc=j,c.lastEndLoc=W,c.offset=s(),c.startLoc=i(),r.currentChar()===hr?m(c,13):ne(r,c)}return{nextToken:re,currentOffset:s,currentPosition:i,context:u}}const eb="parser",tb=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g,nb=/\\([\\@{}|])/g;function rb(t,e){return e}function sb(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const r=parseInt(e||n,16);return r<=55295||r>=57344?String.fromCodePoint(r):"�"}}}function ib(t={}){const e=t.location!==!1,{onError:n}=t;function r(P,V,q,M,...X){const te=P.currentPosition();if(te.offset+=M,te.column+=M,n){const _=e?Ru(q,te):null,E=rc(V,_,{domain:eb,args:X});n(E)}}function s(P,V,q){const M={type:P};return e&&(M.start=V,M.end=V,M.loc={start:q,end:q}),M}function i(P,V,q,M){e&&(P.end=V,P.loc&&(P.loc.end=q))}function o(P,V){const q=P.context(),M=s(3,q.offset,q.startLoc);return M.value=V.replace(nb,rb),i(M,P.currentOffset(),P.currentPosition()),M}function l(P,V){const q=P.context(),{lastOffset:M,lastStartLoc:X}=q,te=s(5,M,X);return te.index=parseInt(V,10),P.nextToken(),i(te,P.currentOffset(),P.currentPosition()),te}function c(P,V){const q=P.context(),{lastOffset:M,lastStartLoc:X}=q,te=s(4,M,X);return te.key=V,P.nextToken(),i(te,P.currentOffset(),P.currentPosition()),te}function u(P,V){const q=P.context(),{lastOffset:M,lastStartLoc:X}=q,te=s(9,M,X);return te.value=V.replace(tb,sb),P.nextToken(),i(te,P.currentOffset(),P.currentPosition()),te}function f(P){const V=P.nextToken(),q=P.context(),{lastOffset:M,lastStartLoc:X}=q,te=s(8,M,X);return V.type!==11?(r(P,Be.UNEXPECTED_EMPTY_LINKED_MODIFIER,q.lastStartLoc,0),te.value="",i(te,M,X),{nextConsumeToken:V,node:te}):(V.value==null&&r(P,Be.UNEXPECTED_LEXICAL_ANALYSIS,q.lastStartLoc,0,qn(V)),te.value=V.value||"",i(te,P.currentOffset(),P.currentPosition()),{node:te})}function p(P,V){const q=P.context(),M=s(7,q.offset,q.startLoc);return M.value=V,i(M,P.currentOffset(),P.currentPosition()),M}function m(P){const V=P.context(),q=s(6,V.offset,V.startLoc);let M=P.nextToken();if(M.type===8){const X=f(P);q.modifier=X.node,M=X.nextConsumeToken||P.nextToken()}switch(M.type!==9&&r(P,Be.UNEXPECTED_LEXICAL_ANALYSIS,V.lastStartLoc,0,qn(M)),M=P.nextToken(),M.type===2&&(M=P.nextToken()),M.type){case 10:M.value==null&&r(P,Be.UNEXPECTED_LEXICAL_ANALYSIS,V.lastStartLoc,0,qn(M)),q.key=p(P,M.value||"");break;case 4:M.value==null&&r(P,Be.UNEXPECTED_LEXICAL_ANALYSIS,V.lastStartLoc,0,qn(M)),q.key=c(P,M.value||"");break;case 5:M.value==null&&r(P,Be.UNEXPECTED_LEXICAL_ANALYSIS,V.lastStartLoc,0,qn(M)),q.key=l(P,M.value||"");break;case 6:M.value==null&&r(P,Be.UNEXPECTED_LEXICAL_ANALYSIS,V.lastStartLoc,0,qn(M)),q.key=u(P,M.value||"");break;default:{r(P,Be.UNEXPECTED_EMPTY_LINKED_KEY,V.lastStartLoc,0);const X=P.context(),te=s(7,X.offset,X.startLoc);return te.value="",i(te,X.offset,X.startLoc),q.key=te,i(q,X.offset,X.startLoc),{nextConsumeToken:M,node:q}}}return i(q,P.currentOffset(),P.currentPosition()),{node:q}}function I(P){const V=P.context(),q=V.currentType===1?P.currentOffset():V.offset,M=V.currentType===1?V.endLoc:V.startLoc,X=s(2,q,M);X.items=[];let te=null;do{const T=te||P.nextToken();switch(te=null,T.type){case 0:T.value==null&&r(P,Be.UNEXPECTED_LEXICAL_ANALYSIS,V.lastStartLoc,0,qn(T)),X.items.push(o(P,T.value||""));break;case 5:T.value==null&&r(P,Be.UNEXPECTED_LEXICAL_ANALYSIS,V.lastStartLoc,0,qn(T)),X.items.push(l(P,T.value||""));break;case 4:T.value==null&&r(P,Be.UNEXPECTED_LEXICAL_ANALYSIS,V.lastStartLoc,0,qn(T)),X.items.push(c(P,T.value||""));break;case 6:T.value==null&&r(P,Be.UNEXPECTED_LEXICAL_ANALYSIS,V.lastStartLoc,0,qn(T)),X.items.push(u(P,T.value||""));break;case 7:{const A=m(P);X.items.push(A.node),te=A.nextConsumeToken||null;break}}}while(V.currentType!==13&&V.currentType!==1);const _=V.currentType===1?V.lastOffset:P.currentOffset(),E=V.currentType===1?V.lastEndLoc:P.currentPosition();return i(X,_,E),X}function C(P,V,q,M){const X=P.context();let te=M.items.length===0;const _=s(1,V,q);_.cases=[],_.cases.push(M);do{const E=I(P);te||(te=E.items.length===0),_.cases.push(E)}while(X.currentType!==13);return te&&r(P,Be.MUST_HAVE_MESSAGES_IN_PLURAL,q,0),i(_,P.currentOffset(),P.currentPosition()),_}function O(P){const V=P.context(),{offset:q,startLoc:M}=V,X=I(P);return V.currentType===13?X:C(P,q,M,X)}function D(P){const V=Zw(P,vt({},t)),q=V.context(),M=s(0,q.offset,q.startLoc);return e&&M.loc&&(M.loc.source=P),M.body=O(V),t.onCacheKey&&(M.cacheKey=t.onCacheKey(P)),q.currentType!==13&&r(V,Be.UNEXPECTED_LEXICAL_ANALYSIS,q.lastStartLoc,0,P[q.offset]||""),i(M,V.currentOffset(),V.currentPosition()),M}return{parse:D}}function qn(t){if(t.type===13)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function ob(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:i=>(n.helpers.add(i),i)}}function Gd(t,e){for(let n=0;n<t.length;n++)Dh(t[n],e)}function Dh(t,e){switch(t.type){case 1:Gd(t.cases,e),e.helper("plural");break;case 2:Gd(t.items,e);break;case 6:{Dh(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function ab(t,e={}){const n=ob(t);n.helper("normalize"),t.body&&Dh(t.body,n);const r=n.context();t.helpers=Array.from(r.helpers)}function lb(t){const e=t.body;return e.type===2?Qd(e):e.cases.forEach(n=>Qd(n)),t}function Qd(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const r=t.items[n];if(!(r.type===3||r.type===9)||r.value==null)break;e.push(r.value)}if(e.length===t.items.length){t.static=Nh(e);for(let n=0;n<t.items.length;n++){const r=t.items[n];(r.type===3||r.type===9)&&delete r.value}}}}function oi(t){switch(t.t=t.type,t.type){case 0:{const e=t;oi(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let r=0;r<n.length;r++)oi(n[r]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let r=0;r<n.length;r++)oi(n[r]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;oi(e.key),e.k=e.key,delete e.key,e.modifier&&(oi(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}}delete t.type}function cb(t,e){const{filename:n,breakLineCode:r,needIndent:s}=e,i=e.location!==!1,o={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:r,needIndent:s,indentLevel:0};i&&t.loc&&(o.source=t.loc.source);const l=()=>o;function c(O,D){o.code+=O}function u(O,D=!0){const P=D?r:"";c(s?P+"  ".repeat(O):P)}function f(O=!0){const D=++o.indentLevel;O&&u(D)}function p(O=!0){const D=--o.indentLevel;O&&u(D)}function m(){u(o.indentLevel)}return{context:l,push:c,indent:f,deindent:p,newline:m,helper:O=>`_${O}`,needIndent:()=>o.needIndent}}function ub(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),Ii(t,e.key),e.modifier?(t.push(", "),Ii(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function hb(t,e){const{helper:n,needIndent:r}=t;t.push(`${n("normalize")}([`),t.indent(r());const s=e.items.length;for(let i=0;i<s&&(Ii(t,e.items[i]),i!==s-1);i++)t.push(", ");t.deindent(r()),t.push("])")}function fb(t,e){const{helper:n,needIndent:r}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(r());const s=e.cases.length;for(let i=0;i<s&&(Ii(t,e.cases[i]),i!==s-1);i++)t.push(", ");t.deindent(r()),t.push("])")}}function db(t,e){e.body?Ii(t,e.body):t.push("null")}function Ii(t,e){const{helper:n}=t;switch(e.type){case 0:db(t,e);break;case 1:fb(t,e);break;case 2:hb(t,e);break;case 6:ub(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break}}const pb=(t,e={})=>{const n=de(e.mode)?e.mode:"normal",r=de(e.filename)?e.filename:"message.intl";e.sourceMap;const s=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,i=e.needIndent?e.needIndent:n!=="arrow",o=t.helpers||[],l=cb(t,{filename:r,breakLineCode:s,needIndent:i});l.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(i),o.length>0&&(l.push(`const { ${Nh(o.map(f=>`${f}: _${f}`),", ")} } = ctx`),l.newline()),l.push("return "),Ii(l,t),l.deindent(i),l.push("}"),delete t.helpers;const{code:c,map:u}=l.context();return{ast:t,code:c,map:u?u.toJSON():void 0}};function mb(t,e={}){const n=vt({},e),r=!!n.jit,s=!!n.minify,i=n.optimize==null?!0:n.optimize,l=ib(n).parse(t);return r?(i&&lb(l),s&&oi(l),{ast:l,code:""}):(ab(l,n),pb(l,n))}/*!
  * core-base v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */function gb(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Wr().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Wr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function Us(t){return xe(t)&&Oh(t)===0&&(En(t,"b")||En(t,"body"))}const P_=["b","body"];function _b(t){return hs(t,P_)}const k_=["c","cases"];function yb(t){return hs(t,k_,[])}const N_=["s","static"];function vb(t){return hs(t,N_)}const D_=["i","items"];function Eb(t){return hs(t,D_,[])}const O_=["t","type"];function Oh(t){return hs(t,O_)}const L_=["v","value"];function Ha(t,e){const n=hs(t,L_);if(n!=null)return n;throw Mo(e)}const V_=["m","modifier"];function Tb(t){return hs(t,V_)}const M_=["k","key"];function Ib(t){const e=hs(t,M_);if(e)return e;throw Mo(6)}function hs(t,e,n){for(let r=0;r<e.length;r++){const s=e[r];if(En(t,s)&&t[s]!=null)return t[s]}return n}const x_=[...P_,...k_,...N_,...D_,...M_,...V_,...L_,...O_];function Mo(t){return new Error(`unhandled node type: ${t}`)}function Gc(t){return n=>wb(n,t)}function wb(t,e){const n=_b(e);if(n==null)throw Mo(0);if(Oh(n)===1){const i=yb(n);return t.plural(i.reduce((o,l)=>[...o,Yd(t,l)],[]))}else return Yd(t,n)}function Yd(t,e){const n=vb(e);if(n!=null)return t.type==="text"?n:t.normalize([n]);{const r=Eb(e).reduce((s,i)=>[...s,Pu(t,i)],[]);return t.normalize(r)}}function Pu(t,e){const n=Oh(e);switch(n){case 3:return Ha(e,n);case 9:return Ha(e,n);case 4:{const r=e;if(En(r,"k")&&r.k)return t.interpolate(t.named(r.k));if(En(r,"key")&&r.key)return t.interpolate(t.named(r.key));throw Mo(n)}case 5:{const r=e;if(En(r,"i")&&St(r.i))return t.interpolate(t.list(r.i));if(En(r,"index")&&St(r.index))return t.interpolate(t.list(r.index));throw Mo(n)}case 6:{const r=e,s=Tb(r),i=Ib(r);return t.linked(Pu(t,i),s?Pu(t,s):void 0,t.type)}case 7:return Ha(e,n);case 8:return Ha(e,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const bb=t=>t;let Wa=ze();function Ab(t,e={}){let n=!1;const r=e.onError||Kw;return e.onError=s=>{n=!0,r(s)},{...mb(t,e),detectError:n}}function Sb(t,e){if(!__INTLIFY_DROP_MESSAGE_COMPILER__&&de(t)){Ge(e.warnHtmlMessage)&&e.warnHtmlMessage;const r=(e.onCacheKey||bb)(t),s=Wa[r];if(s)return s;const{ast:i,detectError:o}=Ab(t,{...e,location:!1,jit:!0}),l=Gc(i);return o?l:Wa[r]=l}else{if(!Us(t))return(()=>t);const n=t.cacheKey;if(n){const r=Wa[n];return r||(Wa[n]=Gc(t))}else return Gc(t)}}let xo=null;function Cb(t){xo=t}function Rb(t,e,n){xo&&xo.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const Pb=kb("function:translate");function kb(t){return e=>xo&&xo.emit(t,e)}const yr={INVALID_ARGUMENT:zw,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},Nb=24;function vr(t){return rc(t,null,void 0)}function Lh(t,e){return e.locale!=null?Xd(e.locale):Xd(t.locale)}let Qc;function Xd(t){if(de(t))return t;if(it(t)){if(t.resolvedOnce&&Qc!=null)return Qc;if(t.constructor.name==="Function"){const e=t();if(Aw(e))throw vr(yr.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return Qc=e}else throw vr(yr.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw vr(yr.NOT_SUPPORT_LOCALE_TYPE)}function Db(t,e,n){return[...new Set([n,...ot(e)?e:xe(e)?Object.keys(e).filter(r=>r!=="default"):de(e)?[e]:[n]])]}function Ob(t,e,n){const r=de(n)?n:Fo,s=t;let i;xe(e)?(s.__localeChainObjectCache||(s.__localeChainObjectCache=new WeakMap),i=s.__localeChainObjectCache.get(e),i||(i=new Map,s.__localeChainObjectCache.set(e,i))):(s.__localeChainCache||(s.__localeChainCache=new Map),i=s.__localeChainCache.get(e),i||(i=new Map,s.__localeChainCache.set(e,i)));const o=i.get(r);if(o)return o;const l=[];let c=[n];for(;ot(c);)c=Jd(l,c,e);const u=ot(e)||!Ze(e)?e:e.default?e.default:null;return c=de(u)?[u]:u,ot(c)&&Jd(l,c,!1),i.set(r,l),l}function Jd(t,e,n){let r=!0;for(let s=0;s<e.length&&Ge(r);s++){const i=e[s];de(i)&&(r=Lb(t,e[s],n))}return r}function Lb(t,e,n){let r;const s=e.split("-");do{const i=s.join("-");r=Vb(t,i,n),s.splice(-1,1)}while(s.length&&r===!0);return r}function Vb(t,e,n){let r=!1;if(!t.includes(e)&&(r=!0,e)){r=e[e.length-1]!=="!";const s=e.replace(/!/g,"");t.push(s),(ot(n)||Ze(n))&&n[s]&&(r=n[s])}return r}const fs=[];fs[0]={w:[0],i:[3,0],"[":[4],o:[7]};fs[1]={w:[1],".":[2],"[":[4],o:[7]};fs[2]={w:[2],i:[3,0],0:[3,0]};fs[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};fs[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};fs[5]={"'":[4,0],o:8,l:[5,0]};fs[6]={'"':[4,0],o:8,l:[6,0]};const Mb=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function xb(t){return Mb.test(t)}function Fb(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function Ub(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function $b(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:xb(e)?Fb(e):"*"+e}function jb(t){const e=[];let n=-1,r=0,s=0,i,o,l,c,u,f,p;const m=[];m[0]=()=>{o===void 0?o=l:o+=l},m[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},m[2]=()=>{m[0](),s++},m[3]=()=>{if(s>0)s--,r=4,m[0]();else{if(s=0,o===void 0||(o=$b(o),o===!1))return!1;m[1]()}};function I(){const C=t[n+1];if(r===5&&C==="'"||r===6&&C==='"')return n++,l="\\"+C,m[0](),!0}for(;r!==null;)if(n++,i=t[n],!(i==="\\"&&I())){if(c=Ub(i),p=fs[r],u=p[c]||p.l||8,u===8||(r=u[0],u[1]!==void 0&&(f=m[u[1]],f&&(l=i,f()===!1))))return;if(r===7)return e}}const Zd=new Map;function Bb(t,e){return xe(t)?Vt(t,e):null}function qb(t,e){if(!xe(t))return null;let n=Zd.get(e);if(n||(n=jb(e),n&&Zd.set(e,n)),!n)return null;const r=n.length;let s=t,i=0;for(;i<r;){const o=n[i];if(x_.includes(o)&&Us(s)||!xe(s)||!En(s,o))return null;const l=s[o];if(l===void 0||it(s))return null;s=l,i++}return s}const Hb="11.4.20",sc=-1,Fo="en-US",Al="",ep=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function Wb(){return{upper:(t,e)=>e==="text"&&de(t)?t.toUpperCase():e==="vnode"&&xe(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&de(t)?t.toLowerCase():e==="vnode"&&xe(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&de(t)?ep(t):e==="vnode"&&xe(t)&&"__v_isVNode"in t?ep(t.children):t}}let F_;function zb(t){F_=t}let U_;function Kb(t){U_=t}let $_;function Gb(t){$_=t}let j_=null;const Qb=t=>{j_=t},Yb=()=>j_;let B_=null;const tp=t=>{B_=t},Xb=()=>B_;let np=0;function Jb(t={}){const e=it(t.onWarn)?t.onWarn:Cw,n=de(t.version)?t.version:Hb,r=de(t.locale)||it(t.locale)?t.locale:Fo,s=it(r)?Fo:r,i=ot(t.fallbackLocale)||Ze(t.fallbackLocale)||de(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:s,o=Ze(t.messages)?t.messages:Yc(s),l=Ze(t.datetimeFormats)?t.datetimeFormats:Yc(s),c=Ze(t.numberFormats)?t.numberFormats:Yc(s),u=vt(ze(),t.modifiers,Wb()),f=t.pluralRules||ze(),p=it(t.missing)?t.missing:null,m=Ge(t.missingWarn)||Fs(t.missingWarn)?t.missingWarn:!0,I=Ge(t.fallbackWarn)||Fs(t.fallbackWarn)?t.fallbackWarn:!0,C=!!t.fallbackFormat,O=!!t.unresolving,D=it(t.postTranslation)?t.postTranslation:null,P=Ze(t.processor)?t.processor:null,V=Ge(t.warnHtmlMessage)?t.warnHtmlMessage:!0,q=!!t.escapeParameter,M=it(t.messageCompiler)?t.messageCompiler:F_,X=it(t.messageResolver)?t.messageResolver:U_||Bb,te=it(t.localeFallbacker)?t.localeFallbacker:$_||Db,_=xe(t.fallbackContext)?t.fallbackContext:void 0,E=t,T=xe(E.__datetimeFormatters)?E.__datetimeFormatters:new Map,A=xe(E.__numberFormatters)?E.__numberFormatters:new Map,R=xe(E.__meta)?E.__meta:{};np++;const L={version:n,cid:np,locale:r,fallbackLocale:i,messages:o,modifiers:u,pluralRules:f,missing:p,missingWarn:m,fallbackWarn:I,fallbackFormat:C,unresolving:O,postTranslation:D,processor:P,warnHtmlMessage:V,escapeParameter:q,messageCompiler:M,messageResolver:X,localeFallbacker:te,fallbackContext:_,onWarn:e,__meta:R};return L.datetimeFormats=l,L.numberFormats=c,L.__datetimeFormatters=T,L.__numberFormatters=A,__INTLIFY_PROD_DEVTOOLS__&&Rb(L,n,R),L}const Yc=t=>({[t]:ze()});function q_(t,e,n,r,s){const{missing:i,onWarn:o}=t;if(i!==null){const l=i(t,n,e,s);return de(l)?l:e}else return e}function rp(t,e){var r,s;const n=t;xe(e)?(r=n.__localeChainObjectCache)==null||r.delete(e):(s=n.__localeChainCache)==null||s.delete(e)}function za(t,e,n){rp(t,n),t.fallbackContext&&rp(t.fallbackContext,n),t.localeFallbacker(t,n,e)}function Zb(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function e0(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let r=n+1;r<e.length;r++)if(Zb(t,e[r]))return!0;return!1}function H_(t,e,n,r,s,i,o){const{fallbackLocale:l,localeFallbacker:c,onWarn:u}=t,f=c(t,l,n);for(let p=0;p<f.length;p++){const m=f[p],I=Vt(Vt(r,m)||{},e);if(Ze(I)&&de(m))return m;q_(t,e,m,s,o)}return null}function W_(t,e,n){let r=`${t}__${e}`;return Ze(n)&&!Ph(n)&&(r=`${r}__${JSON.stringify(n)}`),r}function z_(t,e,n){for(const r in n){const s=`${e}__${r}`;for(const i of t.keys())(i===s||i.startsWith(`${s}__`))&&t.delete(i)}}function K_(t,e,n,r){const[,s,i,o]=t;let l=n;return de(s)?e.key=s:Ze(s)&&Object.keys(s).forEach(c=>{r.includes(c)?l[c]=s[c]:e[c]=s[c]}),de(i)?e.locale=i:Ze(i)&&(l=i),Ze(o)&&(l=o),l}function sp(t,...e){const{datetimeFormats:n,unresolving:r,onWarn:s}=t,{__datetimeFormatters:i}=t;if(!de(e[0])&&!b_(e[0])&&!St(e[0]))return Al;const[o,l,c,u]=ku(...e),f=Ge(c.missingWarn)?c.missingWarn:t.missingWarn,p=Ge(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,m=!!c.part,I=Lh(t,c);if(!de(o)||o===""){const V=new Intl.DateTimeFormat(I.replace(/!/g,""),u);return m?V.formatToParts(l):V.format(l)}const C=H_(t,o,I,n,f,p,"datetime format");if(!de(C))return r?sc:o;const O=n[C][o],D=W_(C,o,u);let P=i.get(D);return P||(P=new Intl.DateTimeFormat(C,vt({},O,u)),i.set(D,P)),m?P.formatToParts(l):P.format(l)}const G_=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function ku(...t){const[e]=t,n=ze(),r=ze();let s;if(de(e)){const o=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!o)throw vr(yr.INVALID_ISO_DATE_ARGUMENT);const l=o[3]?o[3].trim().startsWith("T")?`${o[1].trim()}${o[3].trim()}`:`${o[1].trim()}T${o[3].trim()}`:o[1].trim();s=new Date(l);try{s.toISOString()}catch{throw vr(yr.INVALID_ISO_DATE_ARGUMENT)}}else if(b_(e)){if(isNaN(e.getTime()))throw vr(yr.INVALID_DATE_ARGUMENT);s=e}else if(St(e))s=e;else throw vr(yr.INVALID_ARGUMENT);const i=K_(t,n,r,G_);return[n.key||"",s,n,i]}function ip(t,e,n){z_(t.__datetimeFormatters,e,n)}function op(t,...e){const{numberFormats:n,unresolving:r,onWarn:s}=t,{__numberFormatters:i}=t;if(!St(e[0]))return Al;const[o,l,c,u]=Nu(...e),f=Ge(c.missingWarn)?c.missingWarn:t.missingWarn,p=Ge(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,m=!!c.part,I=Lh(t,c);if(!de(o)||o===""){const V=new Intl.NumberFormat(I.replace(/!/g,""),u);return m?V.formatToParts(l):V.format(l)}const C=H_(t,o,I,n,f,p,"number format");if(!de(C))return r?sc:o;const O=n[C][o],D=W_(C,o,u);let P=i.get(D);return P||(P=new Intl.NumberFormat(C,vt({},O,u)),i.set(D,P)),m?P.formatToParts(l):P.format(l)}const Q_=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Nu(...t){const[e]=t,n=ze(),r=ze();if(!St(e))throw vr(yr.INVALID_ARGUMENT);const s=e,i=K_(t,n,r,Q_);return[n.key||"",s,n,i]}function ap(t,e,n){z_(t.__numberFormatters,e,n)}const t0=t=>t,n0=t=>"",r0="text",s0=t=>t.length===0?"":Nh(t),i0=Sw;function Xc(t,e){return t=Math.abs(t),e===2?t===1?0:1:Math.min(t,2)}function o0(t){var n,r;const e=St(t.pluralIndex)?t.pluralIndex:-1;return St((n=t.named)==null?void 0:n.count)?t.named.count:St((r=t.named)==null?void 0:r.n)?t.named.n:e}function a0(t={}){var V,q,M;const e=t.locale,n=o0(t),r=de(e)&&t.pluralRules&&it(Vt(t.pluralRules,e))?t.pluralRules[e]:Xc,s=r===Xc?void 0:Xc,i=X=>X[r(n,X.length,s)],o=t.list||[],l=X=>o[X],c=t.named||ze(),u=St(t.pluralIndex),f=X=>{const te=A_(X)?Vt(c,X):c[X];return u&&!te&&(X==="count"||X==="n")?t.pluralIndex:te};function p(X,te){const _=it(t.messages)?t.messages(X,!!te):xe(t.messages)?t.messages[X]:!1;return _||(t.parent?t.parent.message(X):n0)}const m=X=>t.modifiers?Vt(t.modifiers,X):t0,I=it((V=t.processor)==null?void 0:V.normalize)?t.processor.normalize:s0,C=it((q=t.processor)==null?void 0:q.interpolate)?t.processor.interpolate:i0,O=de((M=t.processor)==null?void 0:M.type)?t.processor.type:r0,P={list:l,named:f,plural:i,linked:(X,...te)=>{const[_,E]=te;let T="text",A="";te.length===1?xe(_)?(A=_.modifier||A,T=_.type||T):de(_)&&(A=_||A):te.length===2&&(de(_)&&(A=_||A),de(E)&&(T=E||T));const R=p(X,!0)(P),L=R===""||R===void 0?X:R,b=T==="vnode"&&ot(L)&&A?L[0]:L;if(!A)return b;const Le=m(A);return it(Le)?Le(b,T):b},message:p,type:O,interpolate:C,normalize:I,values:vt(ze(),o,c,u?{count:f("count"),n:f("n")}:{})};return P}const lp=()=>"",Er=t=>it(t),Sl=t=>de(t)||Us(t)||Er(t);function cp(t,...e){const{fallbackFormat:n,postTranslation:r,unresolving:s,messageCompiler:i,fallbackLocale:o,messages:l}=t,[c,u]=Du(...e),f=Ge(u.missingWarn)?u.missingWarn:t.missingWarn,p=Ge(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn,m=Ge(u.escapeParameter)?u.escapeParameter:t.escapeParameter,I=!!u.resolvedMessage,C=de(u.default)||Ge(u.default)?Ge(u.default)?i?c:()=>c:u.default:n?i?c:()=>c:null,O=n||C!=null&&(de(C)||it(C)),D=Lh(t,u);m&&l0(u);let[P,V,q]=I?[c,D,Vt(l,D)||ze()]:Y_(t,c,D,o,p,f),M=P,X=c;if(!I&&!Sl(M)&&O&&(M=C,X=M),!I&&(!Sl(M)||!de(V)))return s?sc:c;let te=!1;const _=()=>{te=!0},E=Er(M)?M:X_(t,c,V,M,X,_);if(te)return M;const T=h0(t,V,q,u),A=a0(T),R=c0(t,E,A);let L=r?r(R,c):R;if(m&&de(L)&&(L=Hw(L)),__INTLIFY_PROD_DEVTOOLS__){const b={timestamp:Date.now(),key:de(c)?c:Er(M)?M.key:"",locale:V||(Er(M)?M.locale:""),format:de(M)?M:Er(M)?M.source:"",message:L};b.meta=vt({},t.__meta,Yb()||{}),Pb(b)}return L}function l0(t){if(ot(t.list)&&(t.list=t.list.map(e=>de(e)?Hd(e):e)),xe(t.named)){const e=t.named,n=ze();for(const r of Object.keys(e)){const s=e[r];n[r]=de(s)?Hd(s):s}t.named=n}}function Y_(t,e,n,r,s,i){const{messages:o,onWarn:l,messageResolver:c,localeFallbacker:u}=t,f=u(t,r,n);let p=ze(),m,I=null;const C="translate";for(let O=0;O<f.length&&(m=f[O],p=Vt(o,m)||ze(),(I=c(p,e))===null&&(I=Vt(p,e)),!Sl(I));O++)if(!e0(m,f)){const D=q_(t,e,m,i,C);D!==e&&(I=D)}return[I,m,p]}function X_(t,e,n,r,s,i){const{messageCompiler:o,warnHtmlMessage:l}=t;if(Er(r)){const u=r;return u.locale=u.locale||n,u.key=u.key||e,u}if(o==null){const u=(()=>r);return u.locale=n,u.key=e,u}const c=o(r,u0(t,n,s,r,l,i));return c.locale=n,c.key=e,c.source=r,c}function c0(t,e,n){return e(n)}function Du(...t){const[e,n,r]=t,s=ze();if(!de(e)&&!St(e)&&!Er(e)&&!Us(e))throw vr(yr.INVALID_ARGUMENT);const i=St(e)?String(e):(Er(e),e);return St(n)?s.plural=n:de(n)?s.default=n:Ze(n)&&!Ph(n)?s.named=n:ot(n)&&(s.list=n),St(r)?s.plural=r:de(r)?s.default=r:Ze(r)&&vt(s,r),[i,s]}function u0(t,e,n,r,s,i){return{locale:e,key:n,warnHtmlMessage:s,onError:o=>{throw i&&i(o),o},onCacheKey:o=>Tw(e,n,o)}}function h0(t,e,n,r){const{modifiers:s,pluralRules:i,messageResolver:o,fallbackLocale:l,fallbackWarn:c,missingWarn:u,fallbackContext:f}=t,m={locale:e,modifiers:s,pluralRules:i,messages:(I,C)=>{let O=o(n,I);if(O==null&&(f||C)){const[D,,P]=Y_(f||t,I,e,l,c,u);O=D??o(P,I)}if(de(O)||Us(O)){let D=!1;const V=X_(t,I,e,O,I,()=>{D=!0});return D?lp:V}else return Er(O)?O:lp}};return t.processor&&(m.processor=t.processor),r.list&&(m.list=r.list),r.named&&(m.named=r.named),St(r.plural)&&(m.pluralIndex=r.plural),m}gb();/*!
  * vue-i18n v11.4.20
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */const f0="11.4.20";function d0(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(Wr().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(Wr().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Wr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Wr().__INTLIFY_PROD_DEVTOOLS__=!1)}const sn={UNEXPECTED_RETURN_TYPE:Nb,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32,NOT_AVAILABLE_COMPOSITION_IN_LEGACY:34};function un(t,...e){return rc(t,null,void 0)}const Ou=us("__translateVNode"),Lu=us("__datetimeParts"),Vu=us("__numberParts"),J_=us("__setPluralRules"),Z_=us("__injectWithOption"),hi=us("__dispose");let ey=null;{const t=Wr().__VUE_INSTANCE_SETTERS__;ot(t)&&t.push(e=>{ey=e})}function jr(t){return!!A_(t)}function Uo(t){if(!xe(t)||Us(t))return t;for(const e in t)if(En(t,e))if(!e.includes("."))xe(t[e])&&Uo(t[e]);else{const n=e.split("."),r=n.length-1;let s=t,i=!1;for(let l=0;l<r;l++){if(n[l]==="__proto__")throw new Error(`unsafe key: ${n[l]}`);if(n[l]in s||(s[n[l]]=ze()),!xe(s[n[l]])){i=!0;break}if(Us(s[n[l]])&&(x_.includes(n[l+1])||n[l+1]==="cacheKey")){i=!0;break}s=s[n[l]]}i||(s[n[r]]=t[e],delete t[e]);const o=s[n[r]];xe(o)&&Uo(o)}return t}function Vh(t,e){const{messages:n,__i18n:r,messageResolver:s,flatJson:i}=e,o=Ze(n)?n:ot(r)?ze():{[t]:ze()};if(ot(r)&&r.forEach(l=>{if("locale"in l&&"resource"in l){const{locale:c,resource:u}=l;if(c){if(jr(c))return;o[c]=Vt(o,c)||ze(),rl(u,o[c])}else rl(u,o)}else de(l)&&rl(JSON.parse(l),o)}),s==null&&i)for(const l in o)En(o,l)&&Uo(o[l]);return o}function ty(t){return t.type}function ny(t,e,n){let r=xe(e.messages)?e.messages:ze();"__i18nGlobal"in n&&(r=Vh(t.locale.value,{messages:r,__i18n:n.__i18nGlobal}));const s=Object.keys(r);s.length&&s.forEach(i=>{t.mergeLocaleMessage(i,r[i])});{if(xe(e.datetimeFormats)){const i=Object.keys(e.datetimeFormats);i.length&&i.forEach(o=>{t.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(xe(e.numberFormats)){const i=Object.keys(e.numberFormats);i.length&&i.forEach(o=>{t.mergeNumberFormat(o,e.numberFormats[o])})}}}function up(t){return Ee(Zo,null,t,0)}function $o(){return ey??y_()}const hp="__INTLIFY_META__",fp=()=>[],p0=()=>!1;let dp=0;function pp(t){return((e,n,r,s)=>t(n,r,$o()||void 0,s))}const m0=()=>{const t=$o();let e=null;return t&&(e=ty(t)[hp])?{[hp]:e}:null};function Cl(t={}){const{__root:e,__injectWithOption:n}=t,r=e===void 0,s=t.flatJson,i=bl?Xe:IT;let o=Ge(t.inheritLocale)?t.inheritLocale:!0;const l=i(e&&o?e.locale.value:de(t.locale)?t.locale:Fo),c=i(e&&o?e.fallbackLocale.value:de(t.fallbackLocale)||ot(t.fallbackLocale)||Ze(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:l.value),u=i(Vh(l.value,t)),f=i(Ze(t.datetimeFormats)?t.datetimeFormats:{[l.value]:{}}),p=i(Ze(t.numberFormats)?t.numberFormats:{[l.value]:{}});let m=e?e.missingWarn:Ge(t.missingWarn)||Fs(t.missingWarn)?t.missingWarn:!0,I=e?e.fallbackWarn:Ge(t.fallbackWarn)||Fs(t.fallbackWarn)?t.fallbackWarn:!0,C=e?e.fallbackRoot:Ge(t.fallbackRoot)?t.fallbackRoot:!0,O=!!t.fallbackFormat,D=it(t.missing)?t.missing:null,P=it(t.missing)?pp(t.missing):null,V=it(t.postTranslation)?t.postTranslation:null,q=e?e.warnHtmlMessage:Ge(t.warnHtmlMessage)?t.warnHtmlMessage:!0,M=!!t.escapeParameter;const X=e?e.modifiers:Ze(t.modifiers)?t.modifiers:{};let te=t.pluralRules||e&&e.pluralRules,_;_=(()=>{r&&tp(null);const x={version:f0,locale:l.value,fallbackLocale:c.value,messages:u.value,modifiers:X,pluralRules:te,missing:P===null?void 0:P,missingWarn:m,fallbackWarn:I,fallbackFormat:O,unresolving:!0,postTranslation:V===null?void 0:V,warnHtmlMessage:q,escapeParameter:M,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};x.datetimeFormats=f.value,x.numberFormats=p.value;const G=Jb(x);return r&&tp(G),G})(),za(_,l.value,c.value);function T(){return[l.value,c.value,u.value,f.value,p.value]}const A=Ut({get:()=>l.value,set:x=>{_.locale=x,l.value=x}});function R(x){r||(_.fallbackContext=Xb());try{return x()}finally{r||(_.fallbackContext=void 0)}}function L(x){R(()=>za(_,l.value,x))}const b=Ut({get:()=>c.value,set:x=>{c.value=x,_.fallbackLocale=c.value,L(c.value)}}),Le=Ut(()=>u.value),Pe=Ut(()=>f.value),nt=Ut(()=>p.value);function Ce(){return it(V)?V:null}function Ae(x){V=x,_.postTranslation=x}function dt(){return D}function kt(x){x!==null&&(P=pp(x)),D=x,_.missing=P}const Qe=(x,G,Ie,Ne,We,Et)=>{T();let Nt;try{__INTLIFY_PROD_DEVTOOLS__,Nt=R(()=>x(_))}finally{__INTLIFY_PROD_DEVTOOLS__}if(Ie!=="translate exists"&&St(Nt)&&Nt===sc||Ie==="translate exists"&&!Nt){const[Tt,Dt]=G();return e&&C?Ne(e):We(Tt)}else{if(Et(Nt))return Nt;throw un(sn.UNEXPECTED_RETURN_TYPE)}};function $e(...x){return Qe(G=>Reflect.apply(cp,null,[G,...x]),()=>Du(...x),"translate",G=>Reflect.apply(G.t,G,[...x]),G=>G,G=>de(G))}function rt(...x){const[G,Ie,Ne]=x;if(Ne&&!xe(Ne))throw un(sn.INVALID_ARGUMENT);return $e(G,Ie,vt({resolvedMessage:!0},Ne||{}))}function wn(...x){return Qe(G=>Reflect.apply(sp,null,[G,...x]),()=>ku(...x),"datetime format",G=>Reflect.apply(G.d,G,[...x]),()=>Al,G=>de(G)||ot(G))}function ut(...x){return Qe(G=>Reflect.apply(op,null,[G,...x]),()=>Nu(...x),"number format",G=>Reflect.apply(G.n,G,[...x]),()=>Al,G=>de(G)||ot(G))}function on(x){return x.map(G=>de(G)||St(G)||Ge(G)?up(String(G)):G)}const bn={normalize:on,interpolate:x=>x,type:"vnode"};function hn(...x){return Qe(G=>{let Ie;const Ne=G;try{Ne.processor=bn,Ie=Reflect.apply(cp,null,[Ne,...x])}finally{Ne.processor=null}return Ie},()=>Du(...x),"translate",G=>G[Ou](...x),G=>[up(G)],G=>ot(G))}function mn(...x){return Qe(G=>Reflect.apply(op,null,[G,...x]),()=>Nu(...x),"number format",G=>G[Vu](...x),fp,G=>de(G)||ot(G))}function w(...x){return Qe(G=>Reflect.apply(sp,null,[G,...x]),()=>ku(...x),"datetime format",G=>G[Lu](...x),fp,G=>de(G)||ot(G))}function N(x){te=x,_.pluralRules=te}function H(x,G){const Ie=ne(x),Ne=_.messageResolver(Ie,G);return Ne===null?Vt(Ie,G):Ne}function ee(x,G){return Qe(()=>{if(!x)return!1;const Ie=de(G)?G:l.value,Ne=de(G)?[Ie]:_.localeFallbacker(_,c.value,Ie);for(let We=0;We<Ne.length;We++)if(Sl(H(Ne[We],x)))return!0;return!1},()=>[x],"translate exists",Ie=>Reflect.apply(Ie.te,Ie,[x,G]),p0,Ie=>Ge(Ie))}function Q(x){let G=null;const Ie=_.localeFallbacker(_,c.value,l.value);for(let Ne=0;Ne<Ie.length;Ne++){const We=H(Ie[Ne],x);if(We!=null){G=We;break}}return G}function J(x){const G=Q(x);return G??(e?e.tm(x)||{}:{})}function ne(x){return Vt(u.value,x)||{}}function re(x,G){jr(x)||(s&&Uo(G),u.value[x]=G,_.messages=u.value)}function y(x,G){jr(x)||(u.value[x]=Vt(u.value,x)||{},s&&Uo(G),rl(G,u.value[x]),_.messages=u.value)}function v(x){return Vt(f.value,x)||{}}function j(x,G){jr(x)||(f.value[x]=G,_.datetimeFormats=f.value,ip(_,x,G))}function W(x,G){jr(x)||(f.value[x]=vt(Vt(f.value,x)||{},G),_.datetimeFormats=f.value,ip(_,x,G))}function se(x){return Vt(p.value,x)||{}}function oe(x,G){jr(x)||(p.value[x]=G,_.numberFormats=p.value,ap(_,x,G))}function pe(x,G){jr(x)||(p.value[x]=vt(Vt(p.value,x)||{},G),_.numberFormats=p.value,ap(_,x,G))}dp++,wr(c,()=>L(c.value),{deep:!0,flush:"sync"}),e&&bl&&(wr(e.locale,x=>{o&&(l.value=x,_.locale=x,za(_,l.value,c.value))}),wr(e.fallbackLocale,x=>{o&&(c.value=x,_.fallbackLocale=c.value,za(_,l.value,c.value))}));const ce={id:dp,locale:A,fallbackLocale:b,get inheritLocale(){return o},set inheritLocale(x){o=x,x&&e&&(A.value=e.locale.value,b.value=e.fallbackLocale.value)},get availableLocales(){return Object.keys(u.value).sort()},messages:Le,get modifiers(){return X},get pluralRules(){return te||{}},get isGlobal(){return r},get missingWarn(){return m},set missingWarn(x){m=x,_.missingWarn=m},get fallbackWarn(){return I},set fallbackWarn(x){I=x,_.fallbackWarn=I},get fallbackRoot(){return C},set fallbackRoot(x){C=x},get fallbackFormat(){return O},set fallbackFormat(x){O=x,_.fallbackFormat=O},get warnHtmlMessage(){return q},set warnHtmlMessage(x){q=x,_.warnHtmlMessage=x},get escapeParameter(){return M},set escapeParameter(x){M=x,_.escapeParameter=x},t:$e,getLocaleMessage:ne,setLocaleMessage:re,mergeLocaleMessage:y,getPostTranslationHandler:Ce,setPostTranslationHandler:Ae,getMissingHandler:dt,setMissingHandler:kt,[J_]:N};return ce.datetimeFormats=Pe,ce.numberFormats=nt,ce.rt=rt,ce.te=ee,ce.tm=J,ce.d=wn,ce.n=ut,ce.getDateTimeFormat=v,ce.setDateTimeFormat=j,ce.mergeDateTimeFormat=W,ce.getNumberFormat=se,ce.setNumberFormat=oe,ce.mergeNumberFormat=pe,ce[Z_]=n,ce[Ou]=hn,ce[Lu]=w,ce[Vu]=mn,ce}const Jc=new WeakMap;function fi(t){if(!Fs(t))return!t;let e=Jc.get(t);return e||(e=new RegExp(`^(?![\\s\\S]*(?:${t.source}))`,t.flags.replace(/[gy]/g,"")),Jc.set(t,e),Jc.set(e,t)),e}function g0(t){const e=de(t.locale)?t.locale:Fo,n=de(t.fallbackLocale)||ot(t.fallbackLocale)||Ze(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,r=it(t.missing)?t.missing:void 0,s=Ge(t.silentTranslationWarn)||Fs(t.silentTranslationWarn)?fi(t.silentTranslationWarn):!0,i=Ge(t.silentFallbackWarn)||Fs(t.silentFallbackWarn)?fi(t.silentFallbackWarn):!0,o=Ge(t.fallbackRoot)?t.fallbackRoot:!0,l=!!t.formatFallbackMessages,c=Ze(t.modifiers)?t.modifiers:{},u=t.pluralizationRules,f=it(t.postTranslation)?t.postTranslation:void 0,p=de(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,m=!!t.escapeParameterHtml,I=Ge(t.sync)?t.sync:!0;let C=t.messages;if(Ze(t.sharedMessages)){const X=t.sharedMessages;C=Object.keys(X).reduce((_,E)=>{if(jr(E))return _;const T=Vt(_,E)||(_[E]={});return vt(T,X[E]),_},C||{})}const{__i18n:O,__root:D,__injectWithOption:P}=t,V=t.datetimeFormats,q=t.numberFormats,M=t.flatJson;return{locale:e,fallbackLocale:n,messages:C,flatJson:M,datetimeFormats:V,numberFormats:q,missing:r,missingWarn:s,fallbackWarn:i,fallbackRoot:o,fallbackFormat:l,modifiers:c,pluralRules:u,postTranslation:f,warnHtmlMessage:p,escapeParameter:m,messageResolver:t.messageResolver,inheritLocale:I,__i18n:O,__root:D,__injectWithOption:P}}function Mu(t={}){const e=Cl(g0(t)),{__extender:n}=t,r={id:e.id,get locale(){return e.locale.value},set locale(s){e.locale.value=s},get fallbackLocale(){return e.fallbackLocale.value},set fallbackLocale(s){e.fallbackLocale.value=s},get messages(){return e.messages.value},get datetimeFormats(){return e.datetimeFormats.value},get numberFormats(){return e.numberFormats.value},get availableLocales(){return e.availableLocales},get missing(){return e.getMissingHandler()},set missing(s){e.setMissingHandler(s)},get silentTranslationWarn(){return fi(e.missingWarn)},set silentTranslationWarn(s){e.missingWarn=fi(s)},get silentFallbackWarn(){return fi(e.fallbackWarn)},set silentFallbackWarn(s){e.fallbackWarn=fi(s)},get modifiers(){return e.modifiers},get formatFallbackMessages(){return e.fallbackFormat},set formatFallbackMessages(s){e.fallbackFormat=s},get postTranslation(){return e.getPostTranslationHandler()},set postTranslation(s){e.setPostTranslationHandler(s)},get sync(){return e.inheritLocale},set sync(s){e.inheritLocale=s},get warnHtmlInMessage(){return e.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(s){e.warnHtmlMessage=s!=="off"},get escapeParameterHtml(){return e.escapeParameter},set escapeParameterHtml(s){e.escapeParameter=s},get pluralizationRules(){return e.pluralRules||{}},__composer:e,t(...s){return Reflect.apply(e.t,e,[...s])},rt(...s){return Reflect.apply(e.rt,e,[...s])},te(s,i){return e.te(s,i)},tm(s){return e.tm(s)},getLocaleMessage(s){return e.getLocaleMessage(s)},setLocaleMessage(s,i){e.setLocaleMessage(s,i)},mergeLocaleMessage(s,i){e.mergeLocaleMessage(s,i)},d(...s){return Reflect.apply(e.d,e,[...s])},getDateTimeFormat(s){return e.getDateTimeFormat(s)},setDateTimeFormat(s,i){e.setDateTimeFormat(s,i)},mergeDateTimeFormat(s,i){e.mergeDateTimeFormat(s,i)},n(...s){return Reflect.apply(e.n,e,[...s])},getNumberFormat(s){return e.getNumberFormat(s)},setNumberFormat(s,i){e.setNumberFormat(s,i)},mergeNumberFormat(s,i){e.mergeNumberFormat(s,i)}};return r.__extender=n,r}function _0(t,e,n){return{beforeCreate(){const r=$o();if(!r)throw un(sn.UNEXPECTED_ERROR);const s=this.$options;if(s.i18n){const i=vt({},s.i18n);if(s.__i18n&&(i.__i18n=s.__i18n),i.__root=e,this===this.$root)this.$i18n=mp(t,i);else{i.__injectWithOption=!0,i.__extender=n.__vueI18nExtend,this.$i18n=Mu(i);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(s.__i18n)if(this===this.$root)this.$i18n=mp(t,s);else{this.$i18n=Mu({__i18n:s.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const i=this.$i18n;i.__extender&&(i.__disposer=i.__extender(this.$i18n))}else this.$i18n=t;s.__i18nGlobal&&ny(e,s,s),this.$t=(...i)=>this.$i18n.t(...i),this.$rt=(...i)=>this.$i18n.rt(...i),this.$te=(i,o)=>this.$i18n.te(i,o),this.$d=(...i)=>this.$i18n.d(...i),this.$n=(...i)=>this.$i18n.n(...i),this.$tm=i=>this.$i18n.tm(i),n.__setInstance(r,this.$i18n)},mounted(){},unmounted(){const r=$o();if(!r)throw un(sn.UNEXPECTED_ERROR);const s=this.$i18n;s&&(delete this.$t,delete this.$rt,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,s!=null&&s.__disposer&&(s.__disposer(),delete s.__disposer,delete s.__extender),n.__deleteInstance(r),delete this.$i18n)}}}function mp(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[J_](e.pluralizationRules||t.pluralizationRules);const n=Vh(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(r=>t.mergeLocaleMessage(r,n[r])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(r=>t.mergeDateTimeFormat(r,e.datetimeFormats[r])),e.numberFormats&&Object.keys(e.numberFormats).forEach(r=>t.mergeNumberFormat(r,e.numberFormats[r])),t}const Mh={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function y0({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((r,s)=>[...r,...s.type===ct?s.children:[s]],[]):e.reduce((n,r)=>{const s=t[r];return s&&(n[r]=s()),n},ze())}function ry(){return ct}const v0=ec({name:"i18n-t",props:vt({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>St(t)||!isNaN(t)}},Mh),setup(t,e){const{slots:n,attrs:r}=e,s=t.i18n||ic({useScope:t.scope,__useComponent:!0});return()=>{const i=()=>{const c=Object.keys(n).filter(p=>p[0]!=="_"),u=ze();t.locale&&(u.locale=t.locale),t.plural!==void 0&&(u.plural=de(t.plural)?+t.plural:t.plural);const f=y0(e,c);return s[Ou](t.keypath,f,u)},o=vt(ze(),r),l=de(t.tag)||xe(t.tag)?t.tag:ry();return xe(l)?xs(l,o,{default:i}):xs(l,o,i())}}}),gp=v0;function E0(t){return ot(t)&&!de(t[0])}function sy(t,e,n,r){const{slots:s,attrs:i}=e;return()=>{const o=()=>{const u={part:!0};let f=ze();t.locale&&(u.locale=t.locale),de(t.format)?u.key=t.format:xe(t.format)&&(de(t.format.key)&&(u.key=t.format.key),f=Object.keys(t.format).reduce((I,C)=>n.includes(C)?vt(ze(),I,{[C]:t.format[C]}):I,ze()));const p=r(t.value,u,f);let m=[u.key];return ot(p)?m=p.map((I,C)=>{const O=s[I.type],D=O?O({[I.type]:I.value,index:C,parts:p}):[I.value];return E0(D)&&(D[0].key=`${I.type}-${C}`),D}):de(p)&&(m=[p]),m},l=vt(ze(),i),c=de(t.tag)||xe(t.tag)?t.tag:ry();return xe(c)?xs(c,l,{default:o}):xs(c,l,o())}}const T0=ec({name:"i18n-n",props:vt({value:{type:Number,required:!0},format:{type:[String,Object]}},Mh),setup(t,e){const n=t.i18n||ic({useScope:t.scope,__useComponent:!0});return sy(t,e,Q_,(...r)=>n[Vu](...r))}}),_p=T0;function I0(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const r=n.__getInstance(e);return r!=null?r.__composer:t.global.__composer}}function w0(t){const e=o=>{const{instance:l,value:c}=o;if(!l||!l.$)throw un(sn.UNEXPECTED_ERROR);const u=I0(t,l.$),f=yp(c);return[Reflect.apply(u.t,u,[...vp(f)]),u]};return{created:(o,l)=>{const[c,u]=e(l);bl&&(o.__i18nWatcher=wr(u.locale,()=>{l.instance&&l.instance.$forceUpdate()})),o.__composer=u,o.textContent=c},unmounted:o=>{bl&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:l})=>{if(o.__composer){const c=o.__composer,u=yp(l);o.textContent=Reflect.apply(c.t,c,[...vp(u)])}},getSSRProps:o=>{const[l]=e(o);return{textContent:l}}}}function yp(t){if(de(t))return{path:t};if(Ze(t)){if(!("path"in t))throw un(sn.REQUIRED_VALUE,"path");return t}else throw un(sn.INVALID_VALUE)}function vp(t){const{path:e,locale:n,args:r,choice:s,plural:i}=t,o={},l=r||{};return de(n)&&(o.locale=n),St(s)&&(o.plural=s),St(i)&&(o.plural=i),[e,l,o]}function b0(t,e,...n){const r=Ze(n[0])?n[0]:{};(Ge(r.globalInstall)?r.globalInstall:!0)&&([gp.name,"I18nT"].forEach(i=>t.component(i,gp)),[_p.name,"I18nN"].forEach(i=>t.component(i,_p)),[Ip.name,"I18nD"].forEach(i=>t.component(i,Ip))),t.directive("t",w0(e))}const A0=us("global-vue-i18n");function S0(t={}){const e=__VUE_I18N_LEGACY_API__&&Ge(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,n=Ge(t.globalInjection)?t.globalInjection:!0,r=new Map,[s,i]=C0(t,e),o=us("");function l(p){return r.get(p)||null}function c(p,m){r.set(p,m)}function u(p){r.delete(p)}const f={get mode(){return __VUE_I18N_LEGACY_API__&&e?"legacy":"composition"},install(p,...m){if(p.__VUE_I18N_SYMBOL__=o,p.provide(p.__VUE_I18N_SYMBOL__,f),Ze(m[0])){const O=m[0];f.__composerExtend=O.__composerExtend,f.__vueI18nExtend=O.__vueI18nExtend}let I=null;!e&&n&&(I=L0(p,f.global)),__VUE_I18N_FULL_INSTALL__&&b0(p,f,...m),__VUE_I18N_LEGACY_API__&&e&&p.mixin(_0(i,i.__composer,f));const C=p.unmount;p.unmount=()=>{I&&I(),f.dispose(),C()}},get global(){return i},dispose(){s.stop()},__instances:r,__getInstance:l,__setInstance:c,__deleteInstance:u};return f}function ic(t={}){const e=$o();if(e==null)throw un(sn.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw un(sn.NOT_INSTALLED);const n=R0(e),r=k0(n),s=ty(e),i=P0(t,s);if(i==="global")return ny(r,t,s),r;if(i==="parent"){let c=Ep(n,e,t.__useComponent);return c==null&&(c=r),c}if(i==="isolated"){if(n.mode!=="composition")throw un(sn.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const c=n,u=vt({},t),f=Ep(n,e);u.__root=f||r;const p=Cl(u);return c.__composerExtend&&(p[hi]=c.__composerExtend(p)),Eg()&&sT(()=>{const I=p[hi];I&&(I(),delete p[hi])}),p}const o=n;let l=o.__getInstance(e);if(l==null){const c=vt({},t);"__i18n"in s&&(c.__i18n=s.__i18n),r&&(c.__root=r),l=Cl(c),o.__composerExtend&&(l[hi]=o.__composerExtend(l)),D0(o,e,l),o.__setInstance(e,l)}return l}function C0(t,e){const n=vg(),r=__VUE_I18N_LEGACY_API__&&e?n.run(()=>Mu(t)):n.run(()=>Cl(t));if(r==null)throw un(sn.UNEXPECTED_ERROR);return[n,r]}function R0(t){const e=di(t.isCE?A0:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw un(t.isCE?sn.NOT_INSTALLED_WITH_PROVIDE:sn.UNEXPECTED_ERROR);return e}function P0(t,e){return Ph(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function k0(t){return t.mode==="composition"?t.global:t.global.__composer}function Ep(t,e,n=!1){let r=null;const s=e.root;let i=N0(e,n);for(;i!=null;){const o=t;if(t.mode==="composition")r=o.__getInstance(i);else if(__VUE_I18N_LEGACY_API__){const l=o.__getInstance(i);l!=null&&(r=l.__composer,n&&r&&!r[Z_]&&(r=null))}if(r!=null||s===i)break;i=i.parent}return r}function N0(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function D0(t,e,n){bh(()=>{},e),Ah(()=>{const r=n;t.__deleteInstance(e);const s=r[hi];s&&(s(),delete r[hi])},e)}const O0=["locale","fallbackLocale","availableLocales"],Tp=["t","rt","d","n","tm","te"];function L0(t,e){const n=Object.create(null);return O0.forEach(s=>{const i=Object.getOwnPropertyDescriptor(e,s);if(!i)throw un(sn.UNEXPECTED_ERROR);const o=Bt(i.value)?{get(){return i.value.value},set(l){i.value.value=l}}:{get(){return i.get&&i.get()}};Object.defineProperty(n,s,o)}),t.config.globalProperties.$i18n=n,Tp.forEach(s=>{const i=Object.getOwnPropertyDescriptor(e,s);if(!i||!i.value)throw un(sn.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${s}`,i)}),()=>{delete t.config.globalProperties.$i18n,Tp.forEach(s=>{delete t.config.globalProperties[`$${s}`]})}}const V0=ec({name:"i18n-d",props:vt({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Mh),setup(t,e){const n=t.i18n||ic({useScope:t.scope,__useComponent:!0});return sy(t,e,G_,(...r)=>n[Lu](...r))}}),Ip=V0;d0();zb(Sb);Kb(qb);Gb(Ob);if(__INTLIFY_PROD_DEVTOOLS__){const t=Wr();t.__INTLIFY__=!0,Cb(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const M0="1.6.3",x0={version:M0},F0=()=>{};var wp={};/**
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
 */const iy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},U0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},oy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,I=u&63;c||(I=64,o||(m=64)),r.push(n[f],n[p],n[m],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(iy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):U0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new $0;const m=i<<2|l>>4;if(r.push(m),u!==64){const I=l<<4&240|u>>2;if(r.push(I),p!==64){const C=u<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const j0=function(t){const e=iy(t);return oy.encodeByteArray(e,!0)},Rl=function(t){return j0(t).replace(/\./g,"")},ay=function(t){try{return oy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function B0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const q0=()=>B0().__FIREBASE_DEFAULTS__,H0=()=>{if(typeof process>"u"||typeof wp>"u")return;const t=wp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},W0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ay(t[1]);return e&&JSON.parse(e)},oc=()=>{try{return F0()||q0()||H0()||W0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ly=t=>{var e,n;return(n=(e=oc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},z0=t=>{const e=ly(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},cy=()=>{var t;return(t=oc())===null||t===void 0?void 0:t.config},uy=t=>{var e;return(e=oc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class K0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ni(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function hy(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function G0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Rl(JSON.stringify(n)),Rl(JSON.stringify(o)),""].join(".")}const Io={};function Q0(){const t={prod:[],emulator:[]};for(const e of Object.keys(Io))Io[e]?t.emulator.push(e):t.prod.push(e);return t}function Y0(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let bp=!1;function fy(t,e){if(typeof window>"u"||typeof document>"u"||!Ni(window.location.host)||Io[t]===e||Io[t]||bp)return;Io[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=Q0().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,I){m.setAttribute("width","24"),m.setAttribute("id",I),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{bp=!0,o()},m}function f(m,I){m.setAttribute("id",I),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=Y0(r),I=n("text"),C=document.getElementById(I)||document.createElement("span"),O=n("learnmore"),D=document.getElementById(O)||document.createElement("a"),P=n("preprendIcon"),V=document.getElementById(P)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const q=m.element;l(q),f(D,O);const M=u();c(V,P),q.append(V,C,D,M),document.body.appendChild(q)}i?(C.innerText="Preview backend disconnected.",V.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(V.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function Zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function X0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Zt())}function J0(){var t;const e=(t=oc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Z0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function eA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nA(){const t=Zt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rA(){return!J0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sA(){try{return typeof indexedDB=="object"}catch{return!1}}function iA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const oA="FirebaseError";class Pr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=oA,Object.setPrototypeOf(this,Pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ta.prototype.create)}}class ta{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?aA(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Pr(s,l,r)}}function aA(t,e){return t.replace(lA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const lA=/\{\$([^}]+)}/g;function cA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $s(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ap(i)&&Ap(o)){if(!$s(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ap(t){return t!==null&&typeof t=="object"}/**
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
 */function na(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function uA(t,e){const n=new hA(t,e);return n.subscribe.bind(n)}class hA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Zc),s.error===void 0&&(s.error=Zc),s.complete===void 0&&(s.complete=Zc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zc(){}/**
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
 */function Mt(t){return t&&t._delegate?t._delegate:t}class js{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const As="[DEFAULT]";/**
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
 */class dA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new K0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mA(e))try{this.getOrInitializeService({instanceIdentifier:As})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=As){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=As){return this.instances.has(e)}getOptions(e=As){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=As){return this.component?this.component.multipleInstances?e:As:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pA(t){return t===As?void 0:t}function mA(t){return t.instantiationMode==="EAGER"}/**
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
 */class gA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var De;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(De||(De={}));const _A={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},yA=De.INFO,vA={[De.DEBUG]:"log",[De.VERBOSE]:"log",[De.INFO]:"info",[De.WARN]:"warn",[De.ERROR]:"error"},EA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=vA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xh{constructor(e){this.name=e,this._logLevel=yA,this._logHandler=EA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in De))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_A[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,De.DEBUG,...e),this._logHandler(this,De.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,De.VERBOSE,...e),this._logHandler(this,De.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,De.INFO,...e),this._logHandler(this,De.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,De.WARN,...e),this._logHandler(this,De.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,De.ERROR,...e),this._logHandler(this,De.ERROR,...e)}}const TA=(t,e)=>e.some(n=>t instanceof n);let Sp,Cp;function IA(){return Sp||(Sp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wA(){return Cp||(Cp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dy=new WeakMap,xu=new WeakMap,py=new WeakMap,eu=new WeakMap,Fh=new WeakMap;function bA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Qr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&dy.set(n,t)}).catch(()=>{}),Fh.set(e,t),e}function AA(t){if(xu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});xu.set(t,e)}let Fu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||py.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function SA(t){Fu=t(Fu)}function CA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(tu(this),e,...n);return py.set(r,e.sort?e.sort():[e]),Qr(r)}:wA().includes(t)?function(...e){return t.apply(tu(this),e),Qr(dy.get(this))}:function(...e){return Qr(t.apply(tu(this),e))}}function RA(t){return typeof t=="function"?CA(t):(t instanceof IDBTransaction&&AA(t),TA(t,IA())?new Proxy(t,Fu):t)}function Qr(t){if(t instanceof IDBRequest)return bA(t);if(eu.has(t))return eu.get(t);const e=RA(t);return e!==t&&(eu.set(t,e),Fh.set(e,t)),e}const tu=t=>Fh.get(t);function PA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Qr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Qr(o.result),c.oldVersion,c.newVersion,Qr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const kA=["get","getKey","getAll","getAllKeys","count"],NA=["put","add","delete","clear"],nu=new Map;function Rp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nu.get(e))return nu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=NA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||kA.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return nu.set(e,i),i}SA(t=>({...t,get:(e,n,r)=>Rp(e,n)||t.get(e,n,r),has:(e,n)=>!!Rp(e,n)||t.has(e,n)}));/**
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
 */class DA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(OA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function OA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Uu="@firebase/app",Pp="0.13.2";/**
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
 */const br=new xh("@firebase/app"),LA="@firebase/app-compat",VA="@firebase/analytics-compat",MA="@firebase/analytics",xA="@firebase/app-check-compat",FA="@firebase/app-check",UA="@firebase/auth",$A="@firebase/auth-compat",jA="@firebase/database",BA="@firebase/data-connect",qA="@firebase/database-compat",HA="@firebase/functions",WA="@firebase/functions-compat",zA="@firebase/installations",KA="@firebase/installations-compat",GA="@firebase/messaging",QA="@firebase/messaging-compat",YA="@firebase/performance",XA="@firebase/performance-compat",JA="@firebase/remote-config",ZA="@firebase/remote-config-compat",e1="@firebase/storage",t1="@firebase/storage-compat",n1="@firebase/firestore",r1="@firebase/ai",s1="@firebase/firestore-compat",i1="firebase",o1="11.10.0";/**
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
 */const $u="[DEFAULT]",a1={[Uu]:"fire-core",[LA]:"fire-core-compat",[MA]:"fire-analytics",[VA]:"fire-analytics-compat",[FA]:"fire-app-check",[xA]:"fire-app-check-compat",[UA]:"fire-auth",[$A]:"fire-auth-compat",[jA]:"fire-rtdb",[BA]:"fire-data-connect",[qA]:"fire-rtdb-compat",[HA]:"fire-fn",[WA]:"fire-fn-compat",[zA]:"fire-iid",[KA]:"fire-iid-compat",[GA]:"fire-fcm",[QA]:"fire-fcm-compat",[YA]:"fire-perf",[XA]:"fire-perf-compat",[JA]:"fire-rc",[ZA]:"fire-rc-compat",[e1]:"fire-gcs",[t1]:"fire-gcs-compat",[n1]:"fire-fst",[s1]:"fire-fst-compat",[r1]:"fire-vertex","fire-js":"fire-js",[i1]:"fire-js-all"};/**
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
 */const Pl=new Map,l1=new Map,ju=new Map;function kp(t,e){try{t.container.addComponent(e)}catch(n){br.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wi(t){const e=t.name;if(ju.has(e))return br.debug(`There were multiple attempts to register component ${e}.`),!1;ju.set(e,t);for(const n of Pl.values())kp(n,t);for(const n of l1.values())kp(n,t);return!0}function Uh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Pn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const c1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yr=new ta("app","Firebase",c1);/**
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
 */class u1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new js("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yr.create("app-deleted",{appName:this._name})}}/**
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
 */const Di=o1;function my(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:$u,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Yr.create("bad-app-name",{appName:String(s)});if(n||(n=cy()),!n)throw Yr.create("no-options");const i=Pl.get(s);if(i){if($s(n,i.options)&&$s(r,i.config))return i;throw Yr.create("duplicate-app",{appName:s})}const o=new gA(s);for(const c of ju.values())o.addComponent(c);const l=new u1(n,r,o);return Pl.set(s,l),l}function gy(t=$u){const e=Pl.get(t);if(!e&&t===$u&&cy())return my();if(!e)throw Yr.create("no-app",{appName:t});return e}function Xr(t,e,n){var r;let s=(r=a1[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),br.warn(l.join(" "));return}wi(new js(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const h1="firebase-heartbeat-database",f1=1,jo="firebase-heartbeat-store";let ru=null;function _y(){return ru||(ru=PA(h1,f1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(jo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Yr.create("idb-open",{originalErrorMessage:t.message})})),ru}async function d1(t){try{const n=(await _y()).transaction(jo),r=await n.objectStore(jo).get(yy(t));return await n.done,r}catch(e){if(e instanceof Pr)br.warn(e.message);else{const n=Yr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});br.warn(n.message)}}}async function Np(t,e){try{const r=(await _y()).transaction(jo,"readwrite");await r.objectStore(jo).put(e,yy(t)),await r.done}catch(n){if(n instanceof Pr)br.warn(n.message);else{const r=Yr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});br.warn(r.message)}}}function yy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const p1=1024,m1=30;class g1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new y1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Dp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>m1){const o=v1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){br.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Dp(),{heartbeatsToSend:r,unsentEntries:s}=_1(this._heartbeatsCache.heartbeats),i=Rl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return br.warn(n),""}}}function Dp(){return new Date().toISOString().substring(0,10)}function _1(t,e=p1){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Op(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Op(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class y1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sA()?iA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await d1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Np(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Np(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Op(t){return Rl(JSON.stringify({version:2,heartbeats:t})).length}function v1(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function E1(t){wi(new js("platform-logger",e=>new DA(e),"PRIVATE")),wi(new js("heartbeat",e=>new g1(e),"PRIVATE")),Xr(Uu,Pp,t),Xr(Uu,Pp,"esm2017"),Xr("fire-js","")}E1("");function $h(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function vy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const T1=vy,Ey=new ta("auth","Firebase",vy());/**
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
 */const kl=new xh("@firebase/auth");function I1(t,...e){kl.logLevel<=De.WARN&&kl.warn(`Auth (${Di}): ${t}`,...e)}function sl(t,...e){kl.logLevel<=De.ERROR&&kl.error(`Auth (${Di}): ${t}`,...e)}/**
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
 */function ir(t,...e){throw Bh(t,...e)}function On(t,...e){return Bh(t,...e)}function jh(t,e,n){const r=Object.assign(Object.assign({},T1()),{[e]:n});return new ta("auth","Firebase",r).create(e,{appName:t.name})}function Vs(t){return jh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function w1(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ir(t,"argument-error"),jh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ey.create(t,...e)}function ve(t,e,...n){if(!t)throw Bh(e,...n)}function Tr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw sl(e),new Error(e)}function Ar(t,e){t||Tr(e)}/**
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
 */function Bu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function b1(){return Lp()==="http:"||Lp()==="https:"}function Lp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function A1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(b1()||eA()||"connection"in navigator)?navigator.onLine:!0}function S1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ra{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ar(n>e,"Short delay should be less than long delay!"),this.isMobile=X0()||tA()}get(){return A1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function qh(t,e){Ar(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ty{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const C1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const R1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],P1=new ra(3e4,6e4);function Hh(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Oi(t,e,n,r,s={}){return Iy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=na(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return Z0()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Ni(t.emulatorConfig.host)&&(u.credentials="include"),Ty.fetch()(await wy(t,t.config.apiHost,n,l),u)})}async function Iy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},C1),e);try{const s=new N1(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ka(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ka(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ka(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ka(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw jh(t,f,u);ir(t,f)}}catch(s){if(s instanceof Pr)throw s;ir(t,"network-request-failed",{message:String(s)})}}async function k1(t,e,n,r,s={}){const i=await Oi(t,e,n,r,s);return"mfaPendingCredential"in i&&ir(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function wy(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?qh(t.config,s):`${t.config.apiScheme}://${s}`;return R1.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class N1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(On(this.auth,"network-request-failed")),P1.get())})}}function Ka(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=On(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function D1(t,e){return Oi(t,"POST","/v1/accounts:delete",e)}async function Nl(t,e){return Oi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function wo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function O1(t,e=!1){const n=Mt(t),r=await n.getIdToken(e),s=Wh(r);ve(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:wo(su(s.auth_time)),issuedAtTime:wo(su(s.iat)),expirationTime:wo(su(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function su(t){return Number(t)*1e3}function Wh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return sl("JWT malformed, contained fewer than 3 sections"),null;try{const s=ay(n);return s?JSON.parse(s):(sl("Failed to decode base64 JWT payload"),null)}catch(s){return sl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Vp(t){const e=Wh(t);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Bo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pr&&L1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function L1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class V1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class qu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wo(this.lastLoginAt),this.creationTime=wo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Dl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Bo(t,Nl(n,{idToken:r}));ve(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?by(i.providerUserInfo):[],l=x1(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new qu(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function M1(t){const e=Mt(t);await Dl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function x1(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function by(t){return t.map(e=>{var{providerId:n}=e,r=$h(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function F1(t,e){const n=await Iy(t,{},async()=>{const r=na({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await wy(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&Ni(t.emulatorConfig.host)&&(c.credentials="include"),Ty.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function U1(t,e){return Oi(t,"POST","/v2/accounts:revokeToken",Hh(t,e))}/**
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
 */class mi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const n=Vp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await F1(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new mi;return r&&(ve(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ve(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ve(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mi,this.toJSON())}_performRefresh(){return Tr("not implemented")}}/**
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
 */function Fr(t,e){ve(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class kn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=$h(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new V1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new qu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Bo(this,this.stsTokenManager.getToken(this.auth,e));return ve(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return O1(this,e)}reload(){return M1(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new kn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Dl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pn(this.auth.app))return Promise.reject(Vs(this.auth));const e=await this.getIdToken();return await Bo(this,D1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,I=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,P=(u=n.createdAt)!==null&&u!==void 0?u:void 0,V=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:q,emailVerified:M,isAnonymous:X,providerData:te,stsTokenManager:_}=n;ve(q&&_,e,"internal-error");const E=mi.fromJSON(this.name,_);ve(typeof q=="string",e,"internal-error"),Fr(p,e.name),Fr(m,e.name),ve(typeof M=="boolean",e,"internal-error"),ve(typeof X=="boolean",e,"internal-error"),Fr(I,e.name),Fr(C,e.name),Fr(O,e.name),Fr(D,e.name),Fr(P,e.name),Fr(V,e.name);const T=new kn({uid:q,auth:e,email:m,emailVerified:M,displayName:p,isAnonymous:X,photoURL:C,phoneNumber:I,tenantId:O,stsTokenManager:E,createdAt:P,lastLoginAt:V});return te&&Array.isArray(te)&&(T.providerData=te.map(A=>Object.assign({},A))),D&&(T._redirectEventId=D),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new mi;s.updateFromServerResponse(n);const i=new kn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Dl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ve(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?by(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new mi;l.updateFromIdToken(r);const c=new kn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new qu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const Mp=new Map;function Ir(t){Ar(t instanceof Function,"Expected a class definition");let e=Mp.get(t);return e?(Ar(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mp.set(t,e),e)}/**
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
 */class Ay{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ay.type="NONE";const xp=Ay;/**
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
 */function il(t,e,n){return`firebase:${t}:${e}:${n}`}class gi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=il(this.userKey,s.apiKey,i),this.fullPersistenceKey=il("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Nl(this.auth,{idToken:e}).catch(()=>{});return n?kn._fromGetAccountInfoResponse(this.auth,n,e):null}return kn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new gi(Ir(xp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Ir(xp);const o=il(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await Nl(e,{idToken:f}).catch(()=>{});if(!m)break;p=await kn._fromGetAccountInfoResponse(e,m,f)}else p=kn._fromJSON(e,f);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new gi(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new gi(i,e,r))}}/**
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
 */function Fp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Py(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ny(e))return"Blackberry";if(Dy(e))return"Webos";if(Cy(e))return"Safari";if((e.includes("chrome/")||Ry(e))&&!e.includes("edge/"))return"Chrome";if(ky(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Sy(t=Zt()){return/firefox\//i.test(t)}function Cy(t=Zt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ry(t=Zt()){return/crios\//i.test(t)}function Py(t=Zt()){return/iemobile/i.test(t)}function ky(t=Zt()){return/android/i.test(t)}function Ny(t=Zt()){return/blackberry/i.test(t)}function Dy(t=Zt()){return/webos/i.test(t)}function zh(t=Zt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $1(t=Zt()){var e;return zh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function j1(){return nA()&&document.documentMode===10}function Oy(t=Zt()){return zh(t)||ky(t)||Dy(t)||Ny(t)||/windows phone/i.test(t)||Py(t)}/**
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
 */function Ly(t,e=[]){let n;switch(t){case"Browser":n=Fp(Zt());break;case"Worker":n=`${Fp(Zt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Di}/${r}`}/**
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
 */class B1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function q1(t,e={}){return Oi(t,"GET","/v2/passwordPolicy",Hh(t,e))}/**
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
 */const H1=6;class W1{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:H1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class z1{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Up(this),this.idTokenSubscription=new Up(this),this.beforeStateQueue=new B1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ey,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ir(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await gi.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Nl(this,{idToken:e}),r=await kn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Pn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Dl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=S1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pn(this.app))return Promise.reject(Vs(this));const n=e?Mt(e):null;return n&&ve(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pn(this.app)?Promise.reject(Vs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pn(this.app)?Promise.reject(Vs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ir(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await q1(this),n=new W1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ta("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await U1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ir(e)||this._popupRedirectResolver;ve(n,this,"argument-error"),this.redirectPersistenceManager=await gi.create(this,[Ir(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ly(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Pn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&I1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ac(t){return Mt(t)}class Up{constructor(e){this.auth=e,this.observer=null,this.addObserver=uA(n=>this.observer=n)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Kh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function K1(t){Kh=t}function G1(t){return Kh.loadJS(t)}function Q1(){return Kh.gapiScript}function Y1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function X1(t,e){const n=Uh(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if($s(i,e??{}))return s;ir(s,"already-initialized")}return n.initialize({options:e})}function J1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ir);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Z1(t,e,n){const r=ac(t);ve(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Vy(e),{host:o,port:l}=eS(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ve(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ve($s(u,r.config.emulator)&&$s(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ni(o)?(hy(`${i}//${o}${c}`),fy("Auth",!0)):tS()}function Vy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function eS(t){const e=Vy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:$p(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:$p(o)}}}function $p(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function tS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class My{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tr("not implemented")}_getIdTokenResponse(e){return Tr("not implemented")}_linkToIdToken(e,n){return Tr("not implemented")}_getReauthenticationResolver(e){return Tr("not implemented")}}/**
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
 */async function _i(t,e){return k1(t,"POST","/v1/accounts:signInWithIdp",Hh(t,e))}/**
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
 */const nS="http://localhost";class Bs extends My{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Bs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ir("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=$h(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Bs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _i(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_i(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_i(e,n)}buildRequest(){const e={requestUri:nS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=na(n)}return e}}/**
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
 */class Gh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class sa extends Gh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Br extends sa{constructor(){super("facebook.com")}static credential(e){return Bs._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Br.credential(e.oauthAccessToken)}catch{return null}}}Br.FACEBOOK_SIGN_IN_METHOD="facebook.com";Br.PROVIDER_ID="facebook.com";/**
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
 */class _r extends sa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Bs._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _r.credential(n,r)}catch{return null}}}_r.GOOGLE_SIGN_IN_METHOD="google.com";_r.PROVIDER_ID="google.com";/**
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
 */class qr extends sa{constructor(){super("github.com")}static credential(e){return Bs._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qr.credential(e.oauthAccessToken)}catch{return null}}}qr.GITHUB_SIGN_IN_METHOD="github.com";qr.PROVIDER_ID="github.com";/**
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
 */class Hr extends sa{constructor(){super("twitter.com")}static credential(e,n){return Bs._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Hr.credential(n,r)}catch{return null}}}Hr.TWITTER_SIGN_IN_METHOD="twitter.com";Hr.PROVIDER_ID="twitter.com";/**
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
 */class bi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await kn._fromIdTokenResponse(e,r,s),o=jp(r);return new bi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=jp(r);return new bi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function jp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ol extends Pr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ol.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ol(e,n,r,s)}}function xy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ol._fromErrorAndOperation(t,i,e,r):i})}async function rS(t,e,n=!1){const r=await Bo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bi._forOperation(t,"link",r)}/**
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
 */async function sS(t,e,n=!1){const{auth:r}=t;if(Pn(r.app))return Promise.reject(Vs(r));const s="reauthenticate";try{const i=await Bo(t,xy(r,s,e,t),n);ve(i.idToken,r,"internal-error");const o=Wh(i.idToken);ve(o,r,"internal-error");const{sub:l}=o;return ve(t.uid===l,r,"user-mismatch"),bi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ir(r,"user-mismatch"),i}}/**
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
 */async function iS(t,e,n=!1){if(Pn(t.app))return Promise.reject(Vs(t));const r="signIn",s=await xy(t,r,e),i=await bi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function oS(t,e,n,r){return Mt(t).onIdTokenChanged(e,n,r)}function aS(t,e,n){return Mt(t).beforeAuthStateChanged(e,n)}function lS(t,e,n,r){return Mt(t).onAuthStateChanged(e,n,r)}function cS(t){return Mt(t).signOut()}const Ll="__sak";/**
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
 */class Fy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ll,"1"),this.storage.removeItem(Ll),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const uS=1e3,hS=10;class Uy extends Fy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Oy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);j1()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,hS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},uS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Uy.type="LOCAL";const fS=Uy;/**
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
 */class $y extends Fy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$y.type="SESSION";const jy=$y;/**
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
 */function dS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class lc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new lc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await dS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lc.receivers=[];/**
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
 */function Qh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class pS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Qh("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Yn(){return window}function mS(t){Yn().location.href=t}/**
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
 */function By(){return typeof Yn().WorkerGlobalScope<"u"&&typeof Yn().importScripts=="function"}async function gS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _S(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function yS(){return By()?self:null}/**
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
 */const qy="firebaseLocalStorageDb",vS=1,Vl="firebaseLocalStorage",Hy="fbase_key";class ia{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function cc(t,e){return t.transaction([Vl],e?"readwrite":"readonly").objectStore(Vl)}function ES(){const t=indexedDB.deleteDatabase(qy);return new ia(t).toPromise()}function Hu(){const t=indexedDB.open(qy,vS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Vl,{keyPath:Hy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Vl)?e(r):(r.close(),await ES(),e(await Hu()))})})}async function Bp(t,e,n){const r=cc(t,!0).put({[Hy]:e,value:n});return new ia(r).toPromise()}async function TS(t,e){const n=cc(t,!1).get(e),r=await new ia(n).toPromise();return r===void 0?null:r.value}function qp(t,e){const n=cc(t,!0).delete(e);return new ia(n).toPromise()}const IS=800,wS=3;class Wy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>wS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return By()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lc._getInstance(yS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await gS(),!this.activeServiceWorker)return;this.sender=new pS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_S()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hu();return await Bp(e,Ll,"1"),await qp(e,Ll),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Bp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>TS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>qp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=cc(s,!1).getAll();return new ia(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),IS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wy.type="LOCAL";const bS=Wy;new ra(3e4,6e4);/**
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
 */function zy(t,e){return e?Ir(e):(ve(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Yh extends My{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _i(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _i(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _i(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function AS(t){return iS(t.auth,new Yh(t),t.bypassAuthState)}function SS(t){const{auth:e,user:n}=t;return ve(n,e,"internal-error"),sS(n,new Yh(t),t.bypassAuthState)}async function CS(t){const{auth:e,user:n}=t;return ve(n,e,"internal-error"),rS(n,new Yh(t),t.bypassAuthState)}/**
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
 */class Ky{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AS;case"linkViaPopup":case"linkViaRedirect":return CS;case"reauthViaPopup":case"reauthViaRedirect":return SS;default:ir(this.auth,"internal-error")}}resolve(e){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const RS=new ra(2e3,1e4);async function PS(t,e,n){if(Pn(t.app))return Promise.reject(On(t,"operation-not-supported-in-this-environment"));const r=ac(t);w1(t,e,Gh);const s=zy(r,n);return new Ns(r,"signInViaPopup",e,s).executeNotNull()}class Ns extends Ky{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ns.currentPopupAction&&Ns.currentPopupAction.cancel(),Ns.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){Ar(this.filter.length===1,"Popup operations only handle one event");const e=Qh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(On(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(On(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ns.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(On(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,RS.get())};e()}}Ns.currentPopupAction=null;/**
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
 */const kS="pendingRedirect",ol=new Map;class NS extends Ky{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ol.get(this.auth._key());if(!e){try{const r=await DS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ol.set(this.auth._key(),e)}return this.bypassAuthState||ol.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DS(t,e){const n=VS(e),r=LS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function OS(t,e){ol.set(t._key(),e)}function LS(t){return Ir(t._redirectPersistence)}function VS(t){return il(kS,t.config.apiKey,t.name)}async function MS(t,e,n=!1){if(Pn(t.app))return Promise.reject(Vs(t));const r=ac(t),s=zy(r,e),o=await new NS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const xS=600*1e3;class FS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!US(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Gy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(On(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hp(e))}saveEventToCache(e){this.cachedEventUids.add(Hp(e)),this.lastProcessedEventTime=Date.now()}}function Hp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Gy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function US(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gy(t);default:return!1}}/**
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
 */async function $S(t,e={}){return Oi(t,"GET","/v1/projects",e)}/**
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
 */const jS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BS=/^https?/;async function qS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $S(t);for(const n of e)try{if(HS(n))return}catch{}ir(t,"unauthorized-domain")}function HS(t){const e=Bu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!BS.test(n))return!1;if(jS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const WS=new ra(3e4,6e4);function Wp(){const t=Yn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zS(t){return new Promise((e,n)=>{var r,s,i;function o(){Wp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wp(),n(On(t,"network-request-failed"))},timeout:WS.get()})}if(!((s=(r=Yn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Yn().gapi)===null||i===void 0)&&i.load)o();else{const l=Y1("iframefcb");return Yn()[l]=()=>{gapi.load?o():n(On(t,"network-request-failed"))},G1(`${Q1()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw al=null,e})}let al=null;function KS(t){return al=al||zS(t),al}/**
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
 */const GS=new ra(5e3,15e3),QS="__/auth/iframe",YS="emulator/auth/iframe",XS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZS(t){const e=t.config;ve(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qh(e,YS):`https://${t.config.authDomain}/${QS}`,r={apiKey:e.apiKey,appName:t.name,v:Di},s=JS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${na(r).slice(1)}`}async function eC(t){const e=await KS(t),n=Yn().gapi;return ve(n,t,"internal-error"),e.open({where:document.body,url:ZS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=On(t,"network-request-failed"),l=Yn().setTimeout(()=>{i(o)},GS.get());function c(){Yn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const tC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nC=500,rC=600,sC="_blank",iC="http://localhost";class zp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oC(t,e,n,r=nC,s=rC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},tC),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Zt().toLowerCase();n&&(l=Ry(u)?sC:n),Sy(u)&&(e=e||iC,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[I,C])=>`${m}${I}=${C},`,"");if($1(u)&&l!=="_self")return aC(e||"",l),new zp(null);const p=window.open(e||"",l,f);ve(p,t,"popup-blocked");try{p.focus()}catch{}return new zp(p)}function aC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const lC="__/auth/handler",cC="emulator/auth/handler",uC=encodeURIComponent("fac");async function Kp(t,e,n,r,s,i){ve(t.config.authDomain,t,"auth-domain-config-required"),ve(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Di,eventId:s};if(e instanceof Gh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",cA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof sa){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${uC}=${encodeURIComponent(c)}`:"";return`${hC(t)}?${na(l).slice(1)}${u}`}function hC({config:t}){return t.emulator?qh(t,cC):`https://${t.authDomain}/${lC}`}/**
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
 */const iu="webStorageSupport";class fC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jy,this._completeRedirectFn=MS,this._overrideRedirectResult=OS}async _openPopup(e,n,r,s){var i;Ar((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Kp(e,n,r,Bu(),s);return oC(e,o,Qh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Kp(e,n,r,Bu(),s);return mS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ar(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await eC(e),r=new FS(e);return n.register("authEvent",s=>(ve(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(iu,{type:iu},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[iu];o!==void 0&&n(!!o),ir(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Oy()||Cy()||zh()}}const dC=fC;var Gp="@firebase/auth",Qp="1.10.8";/**
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
 */class pC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function mC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gC(t){wi(new js("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ve(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ly(t)},u=new z1(r,s,i,c);return J1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),wi(new js("auth-internal",e=>{const n=ac(e.getProvider("auth").getImmediate());return(r=>new pC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xr(Gp,Qp,mC(t)),Xr(Gp,Qp,"esm2017")}/**
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
 */const _C=300,yC=uy("authIdTokenMaxAge")||_C;let Yp=null;const vC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>yC)return;const s=n==null?void 0:n.token;Yp!==s&&(Yp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function EC(t=gy()){const e=Uh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=X1(t,{popupRedirectResolver:dC,persistence:[bS,fS,jy]}),r=uy("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=vC(i.toString());aS(n,o,()=>o(n.currentUser)),oS(n,l=>o(l))}}const s=ly("auth");return s&&Z1(n,`http://${s}`),n}function TC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}K1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=On("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",TC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gC("Browser");var Xp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jr,Qy;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,E){function T(){}T.prototype=E.prototype,_.D=E.prototype,_.prototype=new T,_.prototype.constructor=_,_.C=function(A,R,L){for(var b=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)b[Le-2]=arguments[Le];return E.prototype[R].apply(A,b)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(_,E,T){T||(T=0);var A=Array(16);if(typeof E=="string")for(var R=0;16>R;++R)A[R]=E.charCodeAt(T++)|E.charCodeAt(T++)<<8|E.charCodeAt(T++)<<16|E.charCodeAt(T++)<<24;else for(R=0;16>R;++R)A[R]=E[T++]|E[T++]<<8|E[T++]<<16|E[T++]<<24;E=_.g[0],T=_.g[1],R=_.g[2];var L=_.g[3],b=E+(L^T&(R^L))+A[0]+3614090360&4294967295;E=T+(b<<7&4294967295|b>>>25),b=L+(R^E&(T^R))+A[1]+3905402710&4294967295,L=E+(b<<12&4294967295|b>>>20),b=R+(T^L&(E^T))+A[2]+606105819&4294967295,R=L+(b<<17&4294967295|b>>>15),b=T+(E^R&(L^E))+A[3]+3250441966&4294967295,T=R+(b<<22&4294967295|b>>>10),b=E+(L^T&(R^L))+A[4]+4118548399&4294967295,E=T+(b<<7&4294967295|b>>>25),b=L+(R^E&(T^R))+A[5]+1200080426&4294967295,L=E+(b<<12&4294967295|b>>>20),b=R+(T^L&(E^T))+A[6]+2821735955&4294967295,R=L+(b<<17&4294967295|b>>>15),b=T+(E^R&(L^E))+A[7]+4249261313&4294967295,T=R+(b<<22&4294967295|b>>>10),b=E+(L^T&(R^L))+A[8]+1770035416&4294967295,E=T+(b<<7&4294967295|b>>>25),b=L+(R^E&(T^R))+A[9]+2336552879&4294967295,L=E+(b<<12&4294967295|b>>>20),b=R+(T^L&(E^T))+A[10]+4294925233&4294967295,R=L+(b<<17&4294967295|b>>>15),b=T+(E^R&(L^E))+A[11]+2304563134&4294967295,T=R+(b<<22&4294967295|b>>>10),b=E+(L^T&(R^L))+A[12]+1804603682&4294967295,E=T+(b<<7&4294967295|b>>>25),b=L+(R^E&(T^R))+A[13]+4254626195&4294967295,L=E+(b<<12&4294967295|b>>>20),b=R+(T^L&(E^T))+A[14]+2792965006&4294967295,R=L+(b<<17&4294967295|b>>>15),b=T+(E^R&(L^E))+A[15]+1236535329&4294967295,T=R+(b<<22&4294967295|b>>>10),b=E+(R^L&(T^R))+A[1]+4129170786&4294967295,E=T+(b<<5&4294967295|b>>>27),b=L+(T^R&(E^T))+A[6]+3225465664&4294967295,L=E+(b<<9&4294967295|b>>>23),b=R+(E^T&(L^E))+A[11]+643717713&4294967295,R=L+(b<<14&4294967295|b>>>18),b=T+(L^E&(R^L))+A[0]+3921069994&4294967295,T=R+(b<<20&4294967295|b>>>12),b=E+(R^L&(T^R))+A[5]+3593408605&4294967295,E=T+(b<<5&4294967295|b>>>27),b=L+(T^R&(E^T))+A[10]+38016083&4294967295,L=E+(b<<9&4294967295|b>>>23),b=R+(E^T&(L^E))+A[15]+3634488961&4294967295,R=L+(b<<14&4294967295|b>>>18),b=T+(L^E&(R^L))+A[4]+3889429448&4294967295,T=R+(b<<20&4294967295|b>>>12),b=E+(R^L&(T^R))+A[9]+568446438&4294967295,E=T+(b<<5&4294967295|b>>>27),b=L+(T^R&(E^T))+A[14]+3275163606&4294967295,L=E+(b<<9&4294967295|b>>>23),b=R+(E^T&(L^E))+A[3]+4107603335&4294967295,R=L+(b<<14&4294967295|b>>>18),b=T+(L^E&(R^L))+A[8]+1163531501&4294967295,T=R+(b<<20&4294967295|b>>>12),b=E+(R^L&(T^R))+A[13]+2850285829&4294967295,E=T+(b<<5&4294967295|b>>>27),b=L+(T^R&(E^T))+A[2]+4243563512&4294967295,L=E+(b<<9&4294967295|b>>>23),b=R+(E^T&(L^E))+A[7]+1735328473&4294967295,R=L+(b<<14&4294967295|b>>>18),b=T+(L^E&(R^L))+A[12]+2368359562&4294967295,T=R+(b<<20&4294967295|b>>>12),b=E+(T^R^L)+A[5]+4294588738&4294967295,E=T+(b<<4&4294967295|b>>>28),b=L+(E^T^R)+A[8]+2272392833&4294967295,L=E+(b<<11&4294967295|b>>>21),b=R+(L^E^T)+A[11]+1839030562&4294967295,R=L+(b<<16&4294967295|b>>>16),b=T+(R^L^E)+A[14]+4259657740&4294967295,T=R+(b<<23&4294967295|b>>>9),b=E+(T^R^L)+A[1]+2763975236&4294967295,E=T+(b<<4&4294967295|b>>>28),b=L+(E^T^R)+A[4]+1272893353&4294967295,L=E+(b<<11&4294967295|b>>>21),b=R+(L^E^T)+A[7]+4139469664&4294967295,R=L+(b<<16&4294967295|b>>>16),b=T+(R^L^E)+A[10]+3200236656&4294967295,T=R+(b<<23&4294967295|b>>>9),b=E+(T^R^L)+A[13]+681279174&4294967295,E=T+(b<<4&4294967295|b>>>28),b=L+(E^T^R)+A[0]+3936430074&4294967295,L=E+(b<<11&4294967295|b>>>21),b=R+(L^E^T)+A[3]+3572445317&4294967295,R=L+(b<<16&4294967295|b>>>16),b=T+(R^L^E)+A[6]+76029189&4294967295,T=R+(b<<23&4294967295|b>>>9),b=E+(T^R^L)+A[9]+3654602809&4294967295,E=T+(b<<4&4294967295|b>>>28),b=L+(E^T^R)+A[12]+3873151461&4294967295,L=E+(b<<11&4294967295|b>>>21),b=R+(L^E^T)+A[15]+530742520&4294967295,R=L+(b<<16&4294967295|b>>>16),b=T+(R^L^E)+A[2]+3299628645&4294967295,T=R+(b<<23&4294967295|b>>>9),b=E+(R^(T|~L))+A[0]+4096336452&4294967295,E=T+(b<<6&4294967295|b>>>26),b=L+(T^(E|~R))+A[7]+1126891415&4294967295,L=E+(b<<10&4294967295|b>>>22),b=R+(E^(L|~T))+A[14]+2878612391&4294967295,R=L+(b<<15&4294967295|b>>>17),b=T+(L^(R|~E))+A[5]+4237533241&4294967295,T=R+(b<<21&4294967295|b>>>11),b=E+(R^(T|~L))+A[12]+1700485571&4294967295,E=T+(b<<6&4294967295|b>>>26),b=L+(T^(E|~R))+A[3]+2399980690&4294967295,L=E+(b<<10&4294967295|b>>>22),b=R+(E^(L|~T))+A[10]+4293915773&4294967295,R=L+(b<<15&4294967295|b>>>17),b=T+(L^(R|~E))+A[1]+2240044497&4294967295,T=R+(b<<21&4294967295|b>>>11),b=E+(R^(T|~L))+A[8]+1873313359&4294967295,E=T+(b<<6&4294967295|b>>>26),b=L+(T^(E|~R))+A[15]+4264355552&4294967295,L=E+(b<<10&4294967295|b>>>22),b=R+(E^(L|~T))+A[6]+2734768916&4294967295,R=L+(b<<15&4294967295|b>>>17),b=T+(L^(R|~E))+A[13]+1309151649&4294967295,T=R+(b<<21&4294967295|b>>>11),b=E+(R^(T|~L))+A[4]+4149444226&4294967295,E=T+(b<<6&4294967295|b>>>26),b=L+(T^(E|~R))+A[11]+3174756917&4294967295,L=E+(b<<10&4294967295|b>>>22),b=R+(E^(L|~T))+A[2]+718787259&4294967295,R=L+(b<<15&4294967295|b>>>17),b=T+(L^(R|~E))+A[9]+3951481745&4294967295,_.g[0]=_.g[0]+E&4294967295,_.g[1]=_.g[1]+(R+(b<<21&4294967295|b>>>11))&4294967295,_.g[2]=_.g[2]+R&4294967295,_.g[3]=_.g[3]+L&4294967295}r.prototype.u=function(_,E){E===void 0&&(E=_.length);for(var T=E-this.blockSize,A=this.B,R=this.h,L=0;L<E;){if(R==0)for(;L<=T;)s(this,_,L),L+=this.blockSize;if(typeof _=="string"){for(;L<E;)if(A[R++]=_.charCodeAt(L++),R==this.blockSize){s(this,A),R=0;break}}else for(;L<E;)if(A[R++]=_[L++],R==this.blockSize){s(this,A),R=0;break}}this.h=R,this.o+=E},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var E=1;E<_.length-8;++E)_[E]=0;var T=8*this.o;for(E=_.length-8;E<_.length;++E)_[E]=T&255,T/=256;for(this.u(_),_=Array(16),E=T=0;4>E;++E)for(var A=0;32>A;A+=8)_[T++]=this.g[E]>>>A&255;return _};function i(_,E){var T=l;return Object.prototype.hasOwnProperty.call(T,_)?T[_]:T[_]=E(_)}function o(_,E){this.h=E;for(var T=[],A=!0,R=_.length-1;0<=R;R--){var L=_[R]|0;A&&L==E||(T[R]=L,A=!1)}this.g=T}var l={};function c(_){return-128<=_&&128>_?i(_,function(E){return new o([E|0],0>E?-1:0)}):new o([_|0],0>_?-1:0)}function u(_){if(isNaN(_)||!isFinite(_))return p;if(0>_)return D(u(-_));for(var E=[],T=1,A=0;_>=T;A++)E[A]=_/T|0,T*=4294967296;return new o(E,0)}function f(_,E){if(_.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(_.charAt(0)=="-")return D(f(_.substring(1),E));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=u(Math.pow(E,8)),A=p,R=0;R<_.length;R+=8){var L=Math.min(8,_.length-R),b=parseInt(_.substring(R,R+L),E);8>L?(L=u(Math.pow(E,L)),A=A.j(L).add(u(b))):(A=A.j(T),A=A.add(u(b)))}return A}var p=c(0),m=c(1),I=c(16777216);t=o.prototype,t.m=function(){if(O(this))return-D(this).m();for(var _=0,E=1,T=0;T<this.g.length;T++){var A=this.i(T);_+=(0<=A?A:4294967296+A)*E,E*=4294967296}return _},t.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(C(this))return"0";if(O(this))return"-"+D(this).toString(_);for(var E=u(Math.pow(_,6)),T=this,A="";;){var R=M(T,E).g;T=P(T,R.j(E));var L=((0<T.g.length?T.g[0]:T.h)>>>0).toString(_);if(T=R,C(T))return L+A;for(;6>L.length;)L="0"+L;A=L+A}},t.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function C(_){if(_.h!=0)return!1;for(var E=0;E<_.g.length;E++)if(_.g[E]!=0)return!1;return!0}function O(_){return _.h==-1}t.l=function(_){return _=P(this,_),O(_)?-1:C(_)?0:1};function D(_){for(var E=_.g.length,T=[],A=0;A<E;A++)T[A]=~_.g[A];return new o(T,~_.h).add(m)}t.abs=function(){return O(this)?D(this):this},t.add=function(_){for(var E=Math.max(this.g.length,_.g.length),T=[],A=0,R=0;R<=E;R++){var L=A+(this.i(R)&65535)+(_.i(R)&65535),b=(L>>>16)+(this.i(R)>>>16)+(_.i(R)>>>16);A=b>>>16,L&=65535,b&=65535,T[R]=b<<16|L}return new o(T,T[T.length-1]&-2147483648?-1:0)};function P(_,E){return _.add(D(E))}t.j=function(_){if(C(this)||C(_))return p;if(O(this))return O(_)?D(this).j(D(_)):D(D(this).j(_));if(O(_))return D(this.j(D(_)));if(0>this.l(I)&&0>_.l(I))return u(this.m()*_.m());for(var E=this.g.length+_.g.length,T=[],A=0;A<2*E;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<_.g.length;R++){var L=this.i(A)>>>16,b=this.i(A)&65535,Le=_.i(R)>>>16,Pe=_.i(R)&65535;T[2*A+2*R]+=b*Pe,V(T,2*A+2*R),T[2*A+2*R+1]+=L*Pe,V(T,2*A+2*R+1),T[2*A+2*R+1]+=b*Le,V(T,2*A+2*R+1),T[2*A+2*R+2]+=L*Le,V(T,2*A+2*R+2)}for(A=0;A<E;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=E;A<2*E;A++)T[A]=0;return new o(T,0)};function V(_,E){for(;(_[E]&65535)!=_[E];)_[E+1]+=_[E]>>>16,_[E]&=65535,E++}function q(_,E){this.g=_,this.h=E}function M(_,E){if(C(E))throw Error("division by zero");if(C(_))return new q(p,p);if(O(_))return E=M(D(_),E),new q(D(E.g),D(E.h));if(O(E))return E=M(_,D(E)),new q(D(E.g),E.h);if(30<_.g.length){if(O(_)||O(E))throw Error("slowDivide_ only works with positive integers.");for(var T=m,A=E;0>=A.l(_);)T=X(T),A=X(A);var R=te(T,1),L=te(A,1);for(A=te(A,2),T=te(T,2);!C(A);){var b=L.add(A);0>=b.l(_)&&(R=R.add(T),L=b),A=te(A,1),T=te(T,1)}return E=P(_,R.j(E)),new q(R,E)}for(R=p;0<=_.l(E);){for(T=Math.max(1,Math.floor(_.m()/E.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),L=u(T),b=L.j(E);O(b)||0<b.l(_);)T-=A,L=u(T),b=L.j(E);C(L)&&(L=m),R=R.add(L),_=P(_,b)}return new q(R,_)}t.A=function(_){return M(this,_).h},t.and=function(_){for(var E=Math.max(this.g.length,_.g.length),T=[],A=0;A<E;A++)T[A]=this.i(A)&_.i(A);return new o(T,this.h&_.h)},t.or=function(_){for(var E=Math.max(this.g.length,_.g.length),T=[],A=0;A<E;A++)T[A]=this.i(A)|_.i(A);return new o(T,this.h|_.h)},t.xor=function(_){for(var E=Math.max(this.g.length,_.g.length),T=[],A=0;A<E;A++)T[A]=this.i(A)^_.i(A);return new o(T,this.h^_.h)};function X(_){for(var E=_.g.length+1,T=[],A=0;A<E;A++)T[A]=_.i(A)<<1|_.i(A-1)>>>31;return new o(T,_.h)}function te(_,E){var T=E>>5;E%=32;for(var A=_.g.length-T,R=[],L=0;L<A;L++)R[L]=0<E?_.i(L+T)>>>E|_.i(L+T+1)<<32-E:_.i(L+T);return new o(R,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Qy=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Jr=o}).apply(typeof Xp<"u"?Xp:typeof self<"u"?self:typeof window<"u"?window:{});var Ga=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yy,co,Xy,ll,Wu,Jy,Zy,ev;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ga=="object"&&Ga];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var $=a[g];if(!($ in d))break e;d=d[$]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var d=0,g=!1,$={next:function(){if(!g&&d<a.length){var z=d++;return{value:h(z,a[z]),done:!1}}return g=!0,{done:!0,value:void 0}}};return $[Symbol.iterator]=function(){return $},$}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var $=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply($,g),a.apply(h,$)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function I(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function C(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,$,z){for(var ae=Array(arguments.length-2),Ye=2;Ye<arguments.length;Ye++)ae[Ye-2]=arguments[Ye];return h.prototype[$].apply(g,ae)}}function O(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function D(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(c(g)){const $=a.length||0,z=g.length||0;a.length=$+z;for(let ae=0;ae<z;ae++)a[$+ae]=g[ae]}else a.push(g)}}class P{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function V(a){return/^[\s\xa0]*$/.test(a)}function q(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function M(a){return M[" "](a),a}M[" "]=function(){};var X=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function te(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function _(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function E(a){const h={};for(const d in a)h[d]=a[d];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let d,g;for(let $=1;$<arguments.length;$++){g=arguments[$];for(d in g)a[d]=g[d];for(let z=0;z<T.length;z++)d=T[z],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function R(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function L(a){l.setTimeout(()=>{throw a},0)}function b(){var a=dt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Le{constructor(){this.h=this.g=null}add(h,d){const g=Pe.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Pe=new P(()=>new nt,a=>a.reset());class nt{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ce,Ae=!1,dt=new Le,kt=()=>{const a=l.Promise.resolve(void 0);Ce=()=>{a.then(Qe)}};var Qe=()=>{for(var a;a=b();){try{a.h.call(a.g)}catch(d){L(d)}var h=Pe;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Ae=!1};function $e(){this.s=this.s,this.C=this.C}$e.prototype.s=!1,$e.prototype.ma=function(){this.s||(this.s=!0,this.N())},$e.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function rt(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}rt.prototype.h=function(){this.defaultPrevented=!0};var wn=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a})();function ut(a,h){if(rt.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(X){e:{try{M(h.nodeName);var $=!0;break e}catch{}$=!1}$||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:on[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ut.aa.h.call(this)}}C(ut,rt);var on={2:"touch",3:"pen",4:"mouse"};ut.prototype.h=function(){ut.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var an="closure_listenable_"+(1e6*Math.random()|0),bn=0;function hn(a,h,d,g,$){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=$,this.key=++bn,this.da=this.fa=!1}function mn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function w(a){this.src=a,this.g={},this.h=0}w.prototype.add=function(a,h,d,g,$){var z=a.toString();a=this.g[z],a||(a=this.g[z]=[],this.h++);var ae=H(a,h,g,$);return-1<ae?(h=a[ae],d||(h.fa=!1)):(h=new hn(h,this.src,z,!!g,$),h.fa=d,a.push(h)),h};function N(a,h){var d=h.type;if(d in a.g){var g=a.g[d],$=Array.prototype.indexOf.call(g,h,void 0),z;(z=0<=$)&&Array.prototype.splice.call(g,$,1),z&&(mn(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function H(a,h,d,g){for(var $=0;$<a.length;++$){var z=a[$];if(!z.da&&z.listener==h&&z.capture==!!d&&z.ha==g)return $}return-1}var ee="closure_lm_"+(1e6*Math.random()|0),Q={};function J(a,h,d,g,$){if(Array.isArray(h)){for(var z=0;z<h.length;z++)J(a,h[z],d,g,$);return null}return d=pe(d),a&&a[an]?a.K(h,d,u(g)?!!g.capture:!1,$):ne(a,h,d,!1,g,$)}function ne(a,h,d,g,$,z){if(!h)throw Error("Invalid event type");var ae=u($)?!!$.capture:!!$,Ye=se(a);if(Ye||(a[ee]=Ye=new w(a)),d=Ye.add(h,d,g,ae,z),d.proxy)return d;if(g=re(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)wn||($=ae),$===void 0&&($=!1),a.addEventListener(h.toString(),g,$);else if(a.attachEvent)a.attachEvent(j(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function re(){function a(d){return h.call(a.src,a.listener,d)}const h=W;return a}function y(a,h,d,g,$){if(Array.isArray(h))for(var z=0;z<h.length;z++)y(a,h[z],d,g,$);else g=u(g)?!!g.capture:!!g,d=pe(d),a&&a[an]?(a=a.i,h=String(h).toString(),h in a.g&&(z=a.g[h],d=H(z,d,g,$),-1<d&&(mn(z[d]),Array.prototype.splice.call(z,d,1),z.length==0&&(delete a.g[h],a.h--)))):a&&(a=se(a))&&(h=a.g[h.toString()],a=-1,h&&(a=H(h,d,g,$)),(d=-1<a?h[a]:null)&&v(d))}function v(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[an])N(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(j(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=se(h))?(N(d,a),d.h==0&&(d.src=null,h[ee]=null)):mn(a)}}}function j(a){return a in Q?Q[a]:Q[a]="on"+a}function W(a,h){if(a.da)a=!0;else{h=new ut(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&v(a),a=d.call(g,h)}return a}function se(a){return a=a[ee],a instanceof w?a:null}var oe="__closure_events_fn_"+(1e9*Math.random()>>>0);function pe(a){return typeof a=="function"?a:(a[oe]||(a[oe]=function(h){return a.handleEvent(h)}),a[oe])}function ce(){$e.call(this),this.i=new w(this),this.M=this,this.F=null}C(ce,$e),ce.prototype[an]=!0,ce.prototype.removeEventListener=function(a,h,d,g){y(this,a,h,d,g)};function x(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new rt(h,a);else if(h instanceof rt)h.target=h.target||a;else{var $=h;h=new rt(g,a),A(h,$)}if($=!0,d)for(var z=d.length-1;0<=z;z--){var ae=h.g=d[z];$=G(ae,g,!0,h)&&$}if(ae=h.g=a,$=G(ae,g,!0,h)&&$,$=G(ae,g,!1,h)&&$,d)for(z=0;z<d.length;z++)ae=h.g=d[z],$=G(ae,g,!1,h)&&$}ce.prototype.N=function(){if(ce.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)mn(d[g]);delete a.g[h],a.h--}}this.F=null},ce.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},ce.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function G(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var $=!0,z=0;z<h.length;++z){var ae=h[z];if(ae&&!ae.da&&ae.capture==d){var Ye=ae.listener,Ft=ae.ha||ae.src;ae.fa&&N(a.i,ae),$=Ye.call(Ft,g)!==!1&&$}}return $&&!g.defaultPrevented}function Ie(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Ne(a){a.g=Ie(()=>{a.g=null,a.i&&(a.i=!1,Ne(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class We extends $e{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ne(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Et(a){$e.call(this),this.h=a,this.g={}}C(Et,$e);var Nt=[];function Tt(a){te(a.g,function(h,d){this.g.hasOwnProperty(d)&&v(h)},a),a.g={}}Et.prototype.N=function(){Et.aa.N.call(this),Tt(this)},Et.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Dt=l.JSON.stringify,ar=l.JSON.parse,ms=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ui(){}Ui.prototype.h=null;function da(a){return a.h||(a.h=a.i())}function pa(){}var kr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Qs(){rt.call(this,"d")}C(Qs,rt);function $i(){rt.call(this,"c")}C($i,rt);var An={},ji=null;function gs(){return ji=ji||new ce}An.La="serverreachability";function Ys(a){rt.call(this,An.La,a)}C(Ys,rt);function _s(a){const h=gs();x(h,new Ys(h))}An.STAT_EVENT="statevent";function ma(a,h){rt.call(this,An.STAT_EVENT,a),this.stat=h}C(ma,rt);function xt(a){const h=gs();x(h,new ma(h,a))}An.Ma="timingevent";function ga(a,h){rt.call(this,An.Ma,a),this.size=h}C(ga,rt);function Nr(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Dr(){this.g=!0}Dr.prototype.xa=function(){this.g=!1};function _a(a,h,d,g,$,z){a.info(function(){if(a.g)if(z)for(var ae="",Ye=z.split("&"),Ft=0;Ft<Ye.length;Ft++){var Ue=Ye[Ft].split("=");if(1<Ue.length){var Ht=Ue[0];Ue=Ue[1];var Wt=Ht.split("_");ae=2<=Wt.length&&Wt[1]=="type"?ae+(Ht+"="+Ue+"&"):ae+(Ht+"=redacted&")}}else ae=null;else ae=z;return"XMLHTTP REQ ("+g+") [attempt "+$+"]: "+h+`
`+d+`
`+ae})}function Sc(a,h,d,g,$,z,ae){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+$+"]: "+h+`
`+d+`
`+z+" "+ae})}function Or(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Cc(a,d)+(g?" "+g:"")})}function ya(a,h){a.info(function(){return"TIMEOUT: "+h})}Dr.prototype.info=function(){};function Cc(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var $=g[1];if(Array.isArray($)&&!(1>$.length)){var z=$[0];if(z!="noop"&&z!="stop"&&z!="close")for(var ae=1;ae<$.length;ae++)$[ae]=""}}}}return Dt(d)}catch{return h}}var Lr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},va={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xs;function Vr(){}C(Vr,Ui),Vr.prototype.g=function(){return new XMLHttpRequest},Vr.prototype.i=function(){return{}},Xs=new Vr;function Un(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new Et(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Bi}function Bi(){this.i=null,this.g="",this.h=!1}var Ea={},qi={};function U(a,h,d){a.L=1,a.v=Aa(lr(h)),a.m=d,a.P=!0,S(a,null)}function S(a,h){a.F=Date.now(),ie(a),a.A=lr(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),jf(d.i,"t",g),a.C=0,d=a.j.J,a.h=new Bi,a.g=id(a.j,d?h:null,!a.m),0<a.O&&(a.M=new We(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var $="readystatechange";Array.isArray($)||($&&(Nt[0]=$.toString()),$=Nt);for(var z=0;z<$.length;z++){var ae=J(d,$[z],g||h.handleEvent,!1,h.h||h);if(!ae)break;h.g[ae.key]=ae}h=a.H?E(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),_s(),_a(a.i,a.u,a.A,a.l,a.R,a.m)}Un.prototype.ca=function(a){a=a.target;const h=this.M;h&&cr(a)==3?h.j():this.Y(a)},Un.prototype.Y=function(a){try{if(a==this.g)e:{const Wt=cr(this.g);var h=this.g.Ba();const ni=this.g.Z();if(!(3>Wt)&&(Wt!=3||this.g&&(this.h.h||this.g.oa()||Gf(this.g)))){this.J||Wt!=4||h==7||(h==8||0>=ni?_s(3):_s(2)),ke(this);var d=this.g.Z();this.X=d;t:if(k(this)){var g=Gf(this.g);a="";var $=g.length,z=cr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fe(this),Ve(this);var ae="";break t}this.h.i=new l.TextDecoder}for(h=0;h<$;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(z&&h==$-1)});g.length=0,this.h.g+=a,this.C=0,ae=this.h.g}else ae=this.g.oa();if(this.o=d==200,Sc(this.i,this.u,this.A,this.l,this.R,Wt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Ye,Ft=this.g;if((Ye=Ft.g?Ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(Ye)){var Ue=Ye;break t}}Ue=null}if(d=Ue)Or(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,lt(this,d);else{this.o=!1,this.s=3,xt(12),Fe(this),Ve(this);break e}}if(this.P){d=!0;let Sn;for(;!this.J&&this.C<ae.length;)if(Sn=B(this,ae),Sn==qi){Wt==4&&(this.s=4,xt(14),d=!1),Or(this.i,this.l,null,"[Incomplete Response]");break}else if(Sn==Ea){this.s=4,xt(15),Or(this.i,this.l,ae,"[Invalid Chunk]"),d=!1;break}else Or(this.i,this.l,Sn,null),lt(this,Sn);if(k(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Wt!=4||ae.length!=0||this.h.h||(this.s=1,xt(16),d=!1),this.o=this.o&&d,!d)Or(this.i,this.l,ae,"[Invalid Chunked Response]"),Fe(this),Ve(this);else if(0<ae.length&&!this.W){this.W=!0;var Ht=this.j;Ht.g==this&&Ht.ba&&!Ht.M&&(Ht.j.info("Great, no buffering proxy detected. Bytes received: "+ae.length),Nc(Ht),Ht.M=!0,xt(11))}}else Or(this.i,this.l,ae,null),lt(this,ae);Wt==4&&Fe(this),this.o&&!this.J&&(Wt==4?td(this.j,this):(this.o=!1,ie(this)))}else HE(this.g),d==400&&0<ae.indexOf("Unknown SID")?(this.s=3,xt(12)):(this.s=0,xt(13)),Fe(this),Ve(this)}}}catch{}finally{}};function k(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function B(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?qi:(d=Number(h.substring(d,g)),isNaN(d)?Ea:(g+=1,g+d>h.length?qi:(h=h.slice(g,g+d),a.C=g+d,h)))}Un.prototype.cancel=function(){this.J=!0,Fe(this)};function ie(a){a.S=Date.now()+a.I,Se(a,a.I)}function Se(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Nr(m(a.ba,a),h)}function ke(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Un.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(ya(this.i,this.A),this.L!=2&&(_s(),xt(17)),Fe(this),this.s=2,Ve(this)):Se(this,this.S-a)};function Ve(a){a.j.G==0||a.J||td(a.j,a)}function Fe(a){ke(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Tt(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function lt(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||Hi(d.h,a))){if(!a.K&&Hi(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var $=g;if($[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Na(d),Pa(d);else break e;kc(d),xt(18)}}else d.za=$[1],0<d.za-d.T&&37500>$[2]&&d.F&&d.v==0&&!d.C&&(d.C=Nr(m(d.Za,d),6e3));if(1>=Zs(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Es(d,11)}else if((a.K||d.g==a)&&Na(d),!V(h))for($=d.Da.g.parse(h),h=0;h<$.length;h++){let Ue=$[h];if(d.T=Ue[0],Ue=Ue[1],d.G==2)if(Ue[0]=="c"){d.K=Ue[1],d.ia=Ue[2];const Ht=Ue[3];Ht!=null&&(d.la=Ht,d.j.info("VER="+d.la));const Wt=Ue[4];Wt!=null&&(d.Aa=Wt,d.j.info("SVER="+d.Aa));const ni=Ue[5];ni!=null&&typeof ni=="number"&&0<ni&&(g=1.5*ni,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Sn=a.g;if(Sn){const Oa=Sn.g?Sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Oa){var z=g.h;z.g||Oa.indexOf("spdy")==-1&&Oa.indexOf("quic")==-1&&Oa.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(ys(z,z.h),z.h=null))}if(g.D){const Dc=Sn.g?Sn.g.getResponseHeader("X-HTTP-Session-Id"):null;Dc&&(g.ya=Dc,st(g.I,g.D,Dc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var ae=a;if(g.qa=sd(g,g.J?g.ia:null,g.W),ae.K){Ta(g.h,ae);var Ye=ae,Ft=g.L;Ft&&(Ye.I=Ft),Ye.B&&(ke(Ye),ie(Ye)),g.g=ae}else Zf(g);0<d.i.length&&ka(d)}else Ue[0]!="stop"&&Ue[0]!="close"||Es(d,7);else d.G==3&&(Ue[0]=="stop"||Ue[0]=="close"?Ue[0]=="stop"?Es(d,7):Pc(d):Ue[0]!="noop"&&d.l&&d.l.ta(Ue),d.v=0)}}_s(4)}catch{}}var en=class{constructor(a,h){this.g=a,this.map=h}};function Js(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $n(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Zs(a){return a.h?1:a.g?a.g.size:0}function Hi(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ys(a,h){a.g?a.g.add(h):a.h=h}function Ta(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Js.prototype.cancel=function(){if(this.i=Ia(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ia(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return O(a.i)}function PE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function kE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function Vf(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=kE(a),g=PE(a),$=g.length,z=0;z<$;z++)h.call(void 0,g[z],d&&d[z],a)}var Mf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function NE(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),$=null;if(0<=g){var z=a[d].substring(0,g);$=a[d].substring(g+1)}else z=a[d];h(z,$?decodeURIComponent($.replace(/\+/g," ")):"")}}}function vs(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof vs){this.h=a.h,wa(this,a.j),this.o=a.o,this.g=a.g,ba(this,a.s),this.l=a.l;var h=a.i,d=new Ki;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),xf(this,d),this.m=a.m}else a&&(h=String(a).match(Mf))?(this.h=!1,wa(this,h[1]||"",!0),this.o=Wi(h[2]||""),this.g=Wi(h[3]||"",!0),ba(this,h[4]),this.l=Wi(h[5]||"",!0),xf(this,h[6]||"",!0),this.m=Wi(h[7]||"")):(this.h=!1,this.i=new Ki(null,this.h))}vs.prototype.toString=function(){var a=[],h=this.j;h&&a.push(zi(h,Ff,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(zi(h,Ff,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(zi(d,d.charAt(0)=="/"?LE:OE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",zi(d,ME)),a.join("")};function lr(a){return new vs(a)}function wa(a,h,d){a.j=d?Wi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ba(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function xf(a,h,d){h instanceof Ki?(a.i=h,xE(a.i,a.h)):(d||(h=zi(h,VE)),a.i=new Ki(h,a.h))}function st(a,h,d){a.i.set(h,d)}function Aa(a){return st(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Wi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function zi(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,DE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function DE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ff=/[#\/\?@]/g,OE=/[#\?:]/g,LE=/[#\?]/g,VE=/[#\?@]/g,ME=/#/g;function Ki(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Mr(a){a.g||(a.g=new Map,a.h=0,a.i&&NE(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Ki.prototype,t.add=function(a,h){Mr(this),this.i=null,a=ei(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Uf(a,h){Mr(a),h=ei(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function $f(a,h){return Mr(a),h=ei(a,h),a.g.has(h)}t.forEach=function(a,h){Mr(this),this.g.forEach(function(d,g){d.forEach(function($){a.call(h,$,g,this)},this)},this)},t.na=function(){Mr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const $=a[g];for(let z=0;z<$.length;z++)d.push(h[g])}return d},t.V=function(a){Mr(this);let h=[];if(typeof a=="string")$f(this,a)&&(h=h.concat(this.g.get(ei(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return Mr(this),this.i=null,a=ei(this,a),$f(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function jf(a,h,d){Uf(a,h),0<d.length&&(a.i=null,a.g.set(ei(a,h),O(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const z=encodeURIComponent(String(g)),ae=this.V(g);for(g=0;g<ae.length;g++){var $=z;ae[g]!==""&&($+="="+encodeURIComponent(String(ae[g]))),a.push($)}}return this.i=a.join("&")};function ei(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function xE(a,h){h&&!a.j&&(Mr(a),a.i=null,a.g.forEach(function(d,g){var $=g.toLowerCase();g!=$&&(Uf(this,g),jf(this,$,d))},a)),a.j=h}function FE(a,h){const d=new Dr;if(l.Image){const g=new Image;g.onload=I(xr,d,"TestLoadImage: loaded",!0,h,g),g.onerror=I(xr,d,"TestLoadImage: error",!1,h,g),g.onabort=I(xr,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=I(xr,d,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function UE(a,h){const d=new Dr,g=new AbortController,$=setTimeout(()=>{g.abort(),xr(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(z=>{clearTimeout($),z.ok?xr(d,"TestPingServer: ok",!0,h):xr(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout($),xr(d,"TestPingServer: error",!1,h)})}function xr(a,h,d,g,$){try{$&&($.onload=null,$.onerror=null,$.onabort=null,$.ontimeout=null),g(d)}catch{}}function $E(){this.g=new ms}function jE(a,h,d){const g=d||"";try{Vf(a,function($,z){let ae=$;u($)&&(ae=Dt($)),h.push(g+z+"="+encodeURIComponent(ae))})}catch($){throw h.push(g+"type="+encodeURIComponent("_badmap")),$}}function Sa(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Sa,Ui),Sa.prototype.g=function(){return new Ca(this.l,this.j)},Sa.prototype.i=(function(a){return function(){return a}})({});function Ca(a,h){ce.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Ca,ce),t=Ca.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Qi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Qi(this)),this.g&&(this.readyState=3,Qi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Bf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Bf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Gi(this):Qi(this),this.readyState==3&&Bf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Gi(this))},t.Qa=function(a){this.g&&(this.response=a,Gi(this))},t.ga=function(){this.g&&Gi(this)};function Gi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Qi(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Qi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ca.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function qf(a){let h="";return te(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function Rc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=qf(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):st(a,h,d))}function pt(a){ce.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(pt,ce);var BE=/^https?$/i,qE=["POST","PUT"];t=pt.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xs.g(),this.v=this.o?da(this.o):da(Xs),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(z){Hf(this,z);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var $ in g)d.set($,g[$]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const z of g.keys())d.set(z,g.get(z));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(z=>z.toLowerCase()=="content-type"),$=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(qE,h,void 0))||g||$||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,ae]of d)this.g.setRequestHeader(z,ae);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Kf(this),this.u=!0,this.g.send(a),this.u=!1}catch(z){Hf(this,z)}};function Hf(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Wf(a),Ra(a)}function Wf(a){a.A||(a.A=!0,x(a,"complete"),x(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,x(this,"complete"),x(this,"abort"),Ra(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ra(this,!0)),pt.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?zf(this):this.bb())},t.bb=function(){zf(this)};function zf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||cr(a)!=4||a.Z()!=2)){if(a.u&&cr(a)==4)Ie(a.Ea,0,a);else if(x(a,"readystatechange"),cr(a)==4){a.h=!1;try{const ae=a.Z();e:switch(ae){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=ae===0){var $=String(a.D).match(Mf)[1]||null;!$&&l.self&&l.self.location&&($=l.self.location.protocol.slice(0,-1)),g=!BE.test($?$.toLowerCase():"")}d=g}if(d)x(a,"complete"),x(a,"success");else{a.m=6;try{var z=2<cr(a)?a.g.statusText:""}catch{z=""}a.l=z+" ["+a.Z()+"]",Wf(a)}}finally{Ra(a)}}}}function Ra(a,h){if(a.g){Kf(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||x(a,"ready");try{d.onreadystatechange=g}catch{}}}function Kf(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function cr(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<cr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),ar(h)}};function Gf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function HE(a){const h={};a=(a.g&&2<=cr(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(V(a[g]))continue;var d=R(a[g]);const $=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const z=h[$]||[];h[$]=z,z.push(d)}_(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Yi(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Qf(a){this.Aa=0,this.i=[],this.j=new Dr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Yi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Yi("baseRetryDelayMs",5e3,a),this.cb=Yi("retryDelaySeedMs",1e4,a),this.Wa=Yi("forwardChannelMaxRetries",2,a),this.wa=Yi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Js(a&&a.concurrentRequestLimit),this.Da=new $E,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Qf.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){xt(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=sd(this,null,this.W),ka(this)};function Pc(a){if(Yf(a),a.G==3){var h=a.U++,d=lr(a.I);if(st(d,"SID",a.K),st(d,"RID",h),st(d,"TYPE","terminate"),Xi(a,d),h=new Un(a,a.j,h),h.L=2,h.v=Aa(lr(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=id(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ie(h)}rd(a)}function Pa(a){a.g&&(Nc(a),a.g.cancel(),a.g=null)}function Yf(a){Pa(a),a.u&&(l.clearTimeout(a.u),a.u=null),Na(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ka(a){if(!$n(a.h)&&!a.s){a.s=!0;var h=a.Ga;Ce||kt(),Ae||(Ce(),Ae=!0),dt.add(h,a),a.B=0}}function WE(a,h){return Zs(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Nr(m(a.Ga,a,h),nd(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const $=new Un(this,this.j,a);let z=this.o;if(this.S&&(z?(z=E(z),A(z,this.S)):z=this.S),this.m!==null||this.O||($.H=z,z=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Jf(this,$,h),d=lr(this.I),st(d,"RID",a),st(d,"CVER",22),this.D&&st(d,"X-HTTP-Session-Id",this.D),Xi(this,d),z&&(this.O?h="headers="+encodeURIComponent(String(qf(z)))+"&"+h:this.m&&Rc(d,this.m,z)),ys(this.h,$),this.Ua&&st(d,"TYPE","init"),this.P?(st(d,"$req",h),st(d,"SID","null"),$.T=!0,U($,d,null)):U($,d,h),this.G=2}}else this.G==3&&(a?Xf(this,a):this.i.length==0||$n(this.h)||Xf(this))};function Xf(a,h){var d;h?d=h.l:d=a.U++;const g=lr(a.I);st(g,"SID",a.K),st(g,"RID",d),st(g,"AID",a.T),Xi(a,g),a.m&&a.o&&Rc(g,a.m,a.o),d=new Un(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Jf(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ys(a.h,d),U(d,g,h)}function Xi(a,h){a.H&&te(a.H,function(d,g){st(h,g,d)}),a.l&&Vf({},function(d,g){st(h,g,d)})}function Jf(a,h,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var $=a.i;let z=-1;for(;;){const ae=["count="+d];z==-1?0<d?(z=$[0].g,ae.push("ofs="+z)):z=0:ae.push("ofs="+z);let Ye=!0;for(let Ft=0;Ft<d;Ft++){let Ue=$[Ft].g;const Ht=$[Ft].map;if(Ue-=z,0>Ue)z=Math.max(0,$[Ft].g-100),Ye=!1;else try{jE(Ht,ae,"req"+Ue+"_")}catch{g&&g(Ht)}}if(Ye){g=ae.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function Zf(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Ce||kt(),Ae||(Ce(),Ae=!0),dt.add(h,a),a.v=0}}function kc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Nr(m(a.Fa,a),nd(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,ed(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Nr(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,xt(10),Pa(this),ed(this))};function Nc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function ed(a){a.g=new Un(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=lr(a.qa);st(h,"RID","rpc"),st(h,"SID",a.K),st(h,"AID",a.T),st(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&st(h,"TO",a.ja),st(h,"TYPE","xmlhttp"),Xi(a,h),a.m&&a.o&&Rc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Aa(lr(h)),d.m=null,d.P=!0,S(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Pa(this),kc(this),xt(19))};function Na(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function td(a,h){var d=null;if(a.g==h){Na(a),Nc(a),a.g=null;var g=2}else if(Hi(a.h,h))d=h.D,Ta(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var $=a.B;g=gs(),x(g,new ga(g,d)),ka(a)}else Zf(a);else if($=h.s,$==3||$==0&&0<h.X||!(g==1&&WE(a,h)||g==2&&kc(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),$){case 1:Es(a,5);break;case 4:Es(a,10);break;case 3:Es(a,6);break;default:Es(a,2)}}}function nd(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Es(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),g=a.Xa;const $=!g;g=new vs(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||wa(g,"https"),Aa(g),$?FE(g.toString(),d):UE(g.toString(),d)}else xt(2);a.G=0,a.l&&a.l.sa(h),rd(a),Yf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),xt(2)):(this.j.info("Failed to ping google.com"),xt(1))};function rd(a){if(a.G=0,a.ka=[],a.l){const h=Ia(a.h);(h.length!=0||a.i.length!=0)&&(D(a.ka,h),D(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function sd(a,h,d){var g=d instanceof vs?lr(d):new vs(d);if(g.g!="")h&&(g.g=h+"."+g.g),ba(g,g.s);else{var $=l.location;g=$.protocol,h=h?h+"."+$.hostname:$.hostname,$=+$.port;var z=new vs(null);g&&wa(z,g),h&&(z.g=h),$&&ba(z,$),d&&(z.l=d),g=z}return d=a.D,h=a.ya,d&&h&&st(g,d,h),st(g,"VER",a.la),Xi(a,g),g}function id(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new pt(new Sa({eb:d})):new pt(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function od(){}t=od.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Da(){}Da.prototype.g=function(a,h){return new fn(a,h)};function fn(a,h){ce.call(this),this.g=new Qf(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!V(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!V(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ti(this)}C(fn,ce),fn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},fn.prototype.close=function(){Pc(this.g)},fn.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Dt(a),a=d);h.i.push(new en(h.Ya++,a)),h.G==3&&ka(h)},fn.prototype.N=function(){this.g.l=null,delete this.j,Pc(this.g),delete this.g,fn.aa.N.call(this)};function ad(a){Qs.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}C(ad,Qs);function ld(){$i.call(this),this.status=1}C(ld,$i);function ti(a){this.g=a}C(ti,od),ti.prototype.ua=function(){x(this.g,"a")},ti.prototype.ta=function(a){x(this.g,new ad(a))},ti.prototype.sa=function(a){x(this.g,new ld)},ti.prototype.ra=function(){x(this.g,"b")},Da.prototype.createWebChannel=Da.prototype.g,fn.prototype.send=fn.prototype.o,fn.prototype.open=fn.prototype.m,fn.prototype.close=fn.prototype.close,ev=function(){return new Da},Zy=function(){return gs()},Jy=An,Wu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Lr.NO_ERROR=0,Lr.TIMEOUT=8,Lr.HTTP_ERROR=6,ll=Lr,va.COMPLETE="complete",Xy=va,pa.EventType=kr,kr.OPEN="a",kr.CLOSE="b",kr.ERROR="c",kr.MESSAGE="d",ce.prototype.listen=ce.prototype.K,co=pa,pt.prototype.listenOnce=pt.prototype.L,pt.prototype.getLastError=pt.prototype.Ka,pt.prototype.getLastErrorCode=pt.prototype.Ba,pt.prototype.getStatus=pt.prototype.Z,pt.prototype.getResponseJson=pt.prototype.Oa,pt.prototype.getResponseText=pt.prototype.oa,pt.prototype.send=pt.prototype.ea,pt.prototype.setWithCredentials=pt.prototype.Ha,Yy=pt}).apply(typeof Ga<"u"?Ga:typeof self<"u"?self:typeof window<"u"?window:{});const Jp="@firebase/firestore",Zp="4.8.0";/**
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
 */class Yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Yt.UNAUTHENTICATED=new Yt(null),Yt.GOOGLE_CREDENTIALS=new Yt("google-credentials-uid"),Yt.FIRST_PARTY=new Yt("first-party-uid"),Yt.MOCK_USER=new Yt("mock-user");/**
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
 */let Li="11.10.0";/**
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
 */const qs=new xh("@firebase/firestore");function ai(){return qs.logLevel}function he(t,...e){if(qs.logLevel<=De.DEBUG){const n=e.map(Xh);qs.debug(`Firestore (${Li}): ${t}`,...n)}}function Sr(t,...e){if(qs.logLevel<=De.ERROR){const n=e.map(Xh);qs.error(`Firestore (${Li}): ${t}`,...n)}}function ns(t,...e){if(qs.logLevel<=De.WARN){const n=e.map(Xh);qs.warn(`Firestore (${Li}): ${t}`,...n)}}function Xh(t){if(typeof t=="string")return t;try{/**
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
 */function ye(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,tv(t,r,n)}function tv(t,e,n){let r=`FIRESTORE (${Li}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Sr(r),new Error(r)}function He(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||tv(e,s,r)}function we(t,e){return t}/**
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
 */const Y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends Pr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Zr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class nv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class IC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Yt.UNAUTHENTICATED)))}shutdown(){}}class wC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class bC{constructor(e){this.t=e,this.currentUser=Yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){He(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Zr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Zr,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},l=c=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Zr)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(He(typeof r.accessToken=="string",31837,{l:r}),new nv(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return He(e===null||typeof e=="string",2055,{h:e}),new Yt(e)}}class AC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Yt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class SC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new AC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Yt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class em{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Pn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){He(this.o===void 0,3512);const r=i=>{i.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,he("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new em(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(He(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new em(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function RC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function rv(){return new TextEncoder}/**
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
 */class Jh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=RC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Re(t,e){return t<e?-1:t>e?1:0}function zu(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return Re(r,s);{const i=rv(),o=PC(i.encode(tm(t,n)),i.encode(tm(e,n)));return o!==0?o:Re(r,s)}}n+=r>65535?2:1}return Re(t.length,e.length)}function tm(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function PC(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Re(t[n],e[n]);return Re(t.length,e.length)}function Ai(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
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
 */const nm="__name__";class Hn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ye(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ye(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Hn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Hn?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Hn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Re(e.length,n.length)}static compareSegments(e,n){const r=Hn.isNumericId(e),s=Hn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Hn.extractNumericId(e).compare(Hn.extractNumericId(n)):zu(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Jr.fromString(e.substring(4,e.length-2))}}class tt extends Hn{construct(e,n,r){return new tt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ue(Y.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new tt(n)}static emptyPath(){return new tt([])}}const kC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class jt extends Hn{construct(e,n,r){return new jt(e,n,r)}static isValidIdentifier(e){return kC.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),jt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===nm}static keyField(){return new jt([nm])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ue(Y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ue(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ue(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new ue(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new jt(n)}static emptyPath(){return new jt([])}}/**
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
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(tt.fromString(e))}static fromName(e){return new me(tt.fromString(e).popFirst(5))}static empty(){return new me(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&tt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return tt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new tt(e.slice()))}}/**
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
 */function sv(t,e,n){if(!n)throw new ue(Y.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function NC(t,e,n,r){if(e===!0&&r===!0)throw new ue(Y.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function rm(t){if(!me.isDocumentKey(t))throw new ue(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function sm(t){if(me.isDocumentKey(t))throw new ue(Y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function iv(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function uc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ye(12329,{type:typeof t})}function Ln(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ue(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=uc(t);throw new ue(Y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Ct(t,e){const n={typeString:t};return e&&(n.value=e),n}function oa(t,e){if(!iv(t))throw new ue(Y.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new ue(Y.INVALID_ARGUMENT,n);return!0}/**
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
 */const im=-62135596800,om=1e6;class at{static now(){return at.fromMillis(Date.now())}static fromDate(e){return at.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*om);return new at(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ue(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ue(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<im)throw new ue(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/om}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:at._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(oa(e,at._jsonSchema))return new at(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-im;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}at._jsonSchemaVersion="firestore/timestamp/1.0",at._jsonSchema={type:Ct("string",at._jsonSchemaVersion),seconds:Ct("number"),nanoseconds:Ct("number")};/**
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
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new at(0,0))}static max(){return new Te(new at(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const qo=-1;function DC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Te.fromTimestamp(r===1e9?new at(n+1,0):new at(n,r));return new rs(s,me.empty(),e)}function OC(t){return new rs(t.readTime,t.key,qo)}class rs{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new rs(Te.min(),me.empty(),qo)}static max(){return new rs(Te.max(),me.empty(),qo)}}function LC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=me.comparator(t.documentKey,e.documentKey),n!==0?n:Re(t.largestBatchId,e.largestBatchId))}/**
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
 */const VC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class MC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Vi(t){if(t.code!==Y.FAILED_PRECONDITION||t.message!==VC)throw t;he("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ye(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new Z(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof Z?n:Z.resolve(n)}catch(n){return Z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):Z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):Z.reject(n)}static resolve(e){return new Z(((n,r)=>{n(e)}))}static reject(e){return new Z(((n,r)=>{r(e)}))}static waitFor(e){return new Z(((n,r)=>{let s=0,i=0,o=!1;e.forEach((l=>{++s,l.next((()=>{++i,o&&i===s&&n()}),(c=>r(c)))})),o=!0,i===s&&n()}))}static or(e){let n=Z.resolve(!1);for(const r of e)n=n.next((s=>s?Z.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new Z(((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next((f=>{o[u]=f,++l,l===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new Z(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function xC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Mi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class hc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}hc.ue=-1;/**
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
 */const Zh=-1;function fc(t){return t==null}function Ml(t){return t===0&&1/t==-1/0}function FC(t){return typeof t=="number"&&Number.isInteger(t)&&!Ml(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const ov="";function UC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=am(e)),e=$C(t.get(n),e);return am(e)}function $C(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case ov:n+="";break;default:n+=i}}return n}function am(t){return t+ov+""}/**
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
 */function lm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ds(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function av(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ft{constructor(e,n){this.comparator=e,this.root=n||$t.EMPTY}insert(e,n){return new ft(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,$t.BLACK,null,null))}remove(e){return new ft(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$t.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qa(this.root,e,this.comparator,!0)}}class Qa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $t{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??$t.RED,this.left=s??$t.EMPTY,this.right=i??$t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new $t(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return $t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return $t.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ye(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ye(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ye(27949);return e+(this.isRed()?0:1)}}$t.EMPTY=null,$t.RED=!0,$t.BLACK=!1;$t.EMPTY=new class{constructor(){this.size=0}get key(){throw ye(57766)}get value(){throw ye(16141)}get color(){throw ye(16727)}get left(){throw ye(29726)}get right(){throw ye(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new $t(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Rt{constructor(e){this.comparator=e,this.data=new ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new cm(this.data.getIterator())}getIteratorFrom(e){return new cm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof Rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Rt(this.comparator);return n.data=e,n}}class cm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class pn{constructor(e){this.fields=e,e.sort(jt.comparator)}static empty(){return new pn([])}unionWith(e){let n=new Rt(jt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new pn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ai(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class lv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class qt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new lv("Invalid base64 string: "+i):i}})(e);return new qt(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new qt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qt.EMPTY_BYTE_STRING=new qt("");const jC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ss(t){if(He(!!t,39018),typeof t=="string"){let e=0;const n=jC.exec(t);if(He(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:yt(t.seconds),nanos:yt(t.nanos)}}function yt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function is(t){return typeof t=="string"?qt.fromBase64String(t):qt.fromUint8Array(t)}/**
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
 */const cv="server_timestamp",uv="__type__",hv="__previous_value__",fv="__local_write_time__";function ef(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[uv])===null||n===void 0?void 0:n.stringValue)===cv}function dc(t){const e=t.mapValue.fields[hv];return ef(e)?dc(e):e}function Ho(t){const e=ss(t.mapValue.fields[fv].timestampValue);return new at(e.seconds,e.nanos)}/**
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
 */class BC{constructor(e,n,r,s,i,o,l,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const xl="(default)";class Wo{constructor(e,n){this.projectId=e,this.database=n||xl}static empty(){return new Wo("","")}get isDefaultDatabase(){return this.database===xl}isEqual(e){return e instanceof Wo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const dv="__type__",qC="__max__",Ya={mapValue:{}},pv="__vector__",Fl="value";function os(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ef(t)?4:WC(t)?9007199254740991:HC(t)?10:11:ye(28295,{value:t})}function or(t,e){if(t===e)return!0;const n=os(t);if(n!==os(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ho(t).isEqual(Ho(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ss(s.timestampValue),l=ss(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return is(s.bytesValue).isEqual(is(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return yt(s.geoPointValue.latitude)===yt(i.geoPointValue.latitude)&&yt(s.geoPointValue.longitude)===yt(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return yt(s.integerValue)===yt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=yt(s.doubleValue),l=yt(i.doubleValue);return o===l?Ml(o)===Ml(l):isNaN(o)&&isNaN(l)}return!1})(t,e);case 9:return Ai(t.arrayValue.values||[],e.arrayValue.values||[],or);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(lm(o)!==lm(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!or(o[c],l[c])))return!1;return!0})(t,e);default:return ye(52216,{left:t})}}function zo(t,e){return(t.values||[]).find((n=>or(n,e)))!==void 0}function Si(t,e){if(t===e)return 0;const n=os(t),r=os(e);if(n!==r)return Re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Re(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const l=yt(i.integerValue||i.doubleValue),c=yt(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return um(t.timestampValue,e.timestampValue);case 4:return um(Ho(t),Ho(e));case 5:return zu(t.stringValue,e.stringValue);case 6:return(function(i,o){const l=is(i),c=is(o);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=Re(l[u],c[u]);if(f!==0)return f}return Re(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const l=Re(yt(i.latitude),yt(o.latitude));return l!==0?l:Re(yt(i.longitude),yt(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return hm(t.arrayValue,e.arrayValue);case 10:return(function(i,o){var l,c,u,f;const p=i.fields||{},m=o.fields||{},I=(l=p[Fl])===null||l===void 0?void 0:l.arrayValue,C=(c=m[Fl])===null||c===void 0?void 0:c.arrayValue,O=Re(((u=I==null?void 0:I.values)===null||u===void 0?void 0:u.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return O!==0?O:hm(I,C)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Ya.mapValue&&o===Ya.mapValue)return 0;if(i===Ya.mapValue)return 1;if(o===Ya.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=zu(c[p],f[p]);if(m!==0)return m;const I=Si(l[c[p]],u[f[p]]);if(I!==0)return I}return Re(c.length,f.length)})(t.mapValue,e.mapValue);default:throw ye(23264,{le:n})}}function um(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Re(t,e);const n=ss(t),r=ss(e),s=Re(n.seconds,r.seconds);return s!==0?s:Re(n.nanos,r.nanos)}function hm(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Si(n[s],r[s]);if(i)return i}return Re(n.length,r.length)}function Ci(t){return Ku(t)}function Ku(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=ss(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return is(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return me.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ku(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ku(n.fields[o])}`;return s+"}"})(t.mapValue):ye(61005,{value:t})}function cl(t){switch(os(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=dc(t);return e?16+cl(e):16;case 5:return 2*t.stringValue.length;case 6:return is(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+cl(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return ds(r.fields,((i,o)=>{s+=i.length+cl(o)})),s})(t.mapValue);default:throw ye(13486,{value:t})}}function fm(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Gu(t){return!!t&&"integerValue"in t}function tf(t){return!!t&&"arrayValue"in t}function dm(t){return!!t&&"nullValue"in t}function pm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ul(t){return!!t&&"mapValue"in t}function HC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[dv])===null||n===void 0?void 0:n.stringValue)===pv}function bo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ds(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=bo(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=bo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function WC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===qC}/**
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
 */class cn{constructor(e){this.value=e}static empty(){return new cn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ul(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=bo(n)}setAll(e){let n=jt.emptyPath(),r={},s=[];e.forEach(((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=bo(o):s.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ul(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return or(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ul(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ds(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new cn(bo(this.value))}}function mv(t){const e=[];return ds(t.fields,((n,r)=>{const s=new jt([n]);if(ul(r)){const i=mv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new pn(e)}/**
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
 */class Jt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Jt(e,0,Te.min(),Te.min(),Te.min(),cn.empty(),0)}static newFoundDocument(e,n,r,s){return new Jt(e,1,n,Te.min(),r,s,0)}static newNoDocument(e,n){return new Jt(e,2,n,Te.min(),Te.min(),cn.empty(),0)}static newUnknownDocument(e,n){return new Jt(e,3,n,Te.min(),Te.min(),cn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=cn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=cn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ul{constructor(e,n){this.position=e,this.inclusive=n}}function mm(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=me.comparator(me.fromName(o.referenceValue),n.key):r=Si(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function gm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!or(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ko{constructor(e,n="asc"){this.field=e,this.dir=n}}function zC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class gv{}class At extends gv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new GC(e,n,r):n==="array-contains"?new XC(e,r):n==="in"?new JC(e,r):n==="not-in"?new ZC(e,r):n==="array-contains-any"?new eR(e,r):new At(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new QC(e,r):new YC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Si(n,this.value)):n!==null&&os(this.value)===os(n)&&this.matchesComparison(Si(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fn extends gv{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new Fn(e,n)}matches(e){return _v(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function _v(t){return t.op==="and"}function yv(t){return KC(t)&&_v(t)}function KC(t){for(const e of t.filters)if(e instanceof Fn)return!1;return!0}function Qu(t){if(t instanceof At)return t.field.canonicalString()+t.op.toString()+Ci(t.value);if(yv(t))return t.filters.map((e=>Qu(e))).join(",");{const e=t.filters.map((n=>Qu(n))).join(",");return`${t.op}(${e})`}}function vv(t,e){return t instanceof At?(function(r,s){return s instanceof At&&r.op===s.op&&r.field.isEqual(s.field)&&or(r.value,s.value)})(t,e):t instanceof Fn?(function(r,s){return s instanceof Fn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,l)=>i&&vv(o,s.filters[l])),!0):!1})(t,e):void ye(19439)}function Ev(t){return t instanceof At?(function(n){return`${n.field.canonicalString()} ${n.op} ${Ci(n.value)}`})(t):t instanceof Fn?(function(n){return n.op.toString()+" {"+n.getFilters().map(Ev).join(" ,")+"}"})(t):"Filter"}class GC extends At{constructor(e,n,r){super(e,n,r),this.key=me.fromName(r.referenceValue)}matches(e){const n=me.comparator(e.key,this.key);return this.matchesComparison(n)}}class QC extends At{constructor(e,n){super(e,"in",n),this.keys=Tv("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class YC extends At{constructor(e,n){super(e,"not-in",n),this.keys=Tv("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function Tv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map((r=>me.fromName(r.referenceValue)))}class XC extends At{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return tf(n)&&zo(n.arrayValue,this.value)}}class JC extends At{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&zo(this.value.arrayValue,n)}}class ZC extends At{constructor(e,n){super(e,"not-in",n)}matches(e){if(zo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!zo(this.value.arrayValue,n)}}class eR extends At{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!tf(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>zo(this.value.arrayValue,r)))}}/**
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
 */class tR{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Pe=null}}function _m(t,e=null,n=[],r=[],s=null,i=null,o=null){return new tR(t,e,n,r,s,i,o)}function nf(t){const e=we(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>Qu(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),fc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Ci(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Ci(r))).join(",")),e.Pe=n}return e.Pe}function rf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!zC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!vv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!gm(t.startAt,e.startAt)&&gm(t.endAt,e.endAt)}function Yu(t){return me.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class xi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function nR(t,e,n,r,s,i,o,l){return new xi(t,e,n,r,s,i,o,l)}function pc(t){return new xi(t)}function ym(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Iv(t){return t.collectionGroup!==null}function Ao(t){const e=we(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Rt(jt.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(l=l.add(u.field))}))})),l})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Ko(i,r))})),n.has(jt.keyField().canonicalString())||e.Te.push(new Ko(jt.keyField(),r))}return e.Te}function Xn(t){const e=we(t);return e.Ie||(e.Ie=rR(e,Ao(t))),e.Ie}function rR(t,e){if(t.limitType==="F")return _m(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Ko(s.field,i)}));const n=t.endAt?new Ul(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ul(t.startAt.position,t.startAt.inclusive):null;return _m(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Xu(t,e){const n=t.filters.concat([e]);return new xi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ju(t,e,n){return new xi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function mc(t,e){return rf(Xn(t),Xn(e))&&t.limitType===e.limitType}function wv(t){return`${nf(Xn(t))}|lt:${t.limitType}`}function li(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>Ev(s))).join(", ")}]`),fc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Ci(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Ci(s))).join(",")),`Target(${r})`})(Xn(t))}; limitType=${t.limitType})`}function gc(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):me.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of Ao(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,l,c){const u=mm(o,l,c);return o.inclusive?u<=0:u<0})(r.startAt,Ao(r),s)||r.endAt&&!(function(o,l,c){const u=mm(o,l,c);return o.inclusive?u>=0:u>0})(r.endAt,Ao(r),s))})(t,e)}function sR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function bv(t){return(e,n)=>{let r=!1;for(const s of Ao(t)){const i=iR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function iR(t,e,n){const r=t.field.isKeyField()?me.comparator(e.key,n.key):(function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Si(c,u):ye(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ye(19790,{direction:t.dir})}}/**
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
 */class zs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ds(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return av(this.inner)}size(){return this.innerSize}}/**
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
 */const oR=new ft(me.comparator);function Cr(){return oR}const Av=new ft(me.comparator);function uo(...t){let e=Av;for(const n of t)e=e.insert(n.key,n);return e}function Sv(t){let e=Av;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Ds(){return So()}function Cv(){return So()}function So(){return new zs((t=>t.toString()),((t,e)=>t.isEqual(e)))}const aR=new ft(me.comparator),lR=new Rt(me.comparator);function Oe(...t){let e=lR;for(const n of t)e=e.add(n);return e}const cR=new Rt(Re);function uR(){return cR}/**
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
 */function sf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ml(e)?"-0":e}}function Rv(t){return{integerValue:""+t}}function hR(t,e){return FC(e)?Rv(e):sf(t,e)}/**
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
 */class _c{constructor(){this._=void 0}}function fR(t,e,n){return t instanceof Go?(function(s,i){const o={fields:{[uv]:{stringValue:cv},[fv]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ef(i)&&(i=dc(i)),i&&(o.fields[hv]=i),{mapValue:o}})(n,e):t instanceof Qo?kv(t,e):t instanceof Yo?Nv(t,e):(function(s,i){const o=Pv(s,i),l=vm(o)+vm(s.Ee);return Gu(o)&&Gu(s.Ee)?Rv(l):sf(s.serializer,l)})(t,e)}function dR(t,e,n){return t instanceof Qo?kv(t,e):t instanceof Yo?Nv(t,e):n}function Pv(t,e){return t instanceof $l?(function(r){return Gu(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Go extends _c{}class Qo extends _c{constructor(e){super(),this.elements=e}}function kv(t,e){const n=Dv(e);for(const r of t.elements)n.some((s=>or(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Yo extends _c{constructor(e){super(),this.elements=e}}function Nv(t,e){let n=Dv(e);for(const r of t.elements)n=n.filter((s=>!or(s,r)));return{arrayValue:{values:n}}}class $l extends _c{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function vm(t){return yt(t.integerValue||t.doubleValue)}function Dv(t){return tf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class pR{constructor(e,n){this.field=e,this.transform=n}}function mR(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof Qo&&s instanceof Qo||r instanceof Yo&&s instanceof Yo?Ai(r.elements,s.elements,or):r instanceof $l&&s instanceof $l?or(r.Ee,s.Ee):r instanceof Go&&s instanceof Go})(t.transform,e.transform)}class gR{constructor(e,n){this.version=e,this.transformResults=n}}class Vn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Vn}static exists(e){return new Vn(void 0,e)}static updateTime(e){return new Vn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function hl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class yc{}function Ov(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new of(t.key,Vn.none()):new aa(t.key,t.data,Vn.none());{const n=t.data,r=cn.empty();let s=new Rt(jt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ps(t.key,r,new pn(s.toArray()),Vn.none())}}function _R(t,e,n){t instanceof aa?(function(s,i,o){const l=s.value.clone(),c=Tm(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):t instanceof ps?(function(s,i,o){if(!hl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Tm(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Lv(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Co(t,e,n,r){return t instanceof aa?(function(i,o,l,c){if(!hl(i.precondition,o))return l;const u=i.value.clone(),f=Im(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof ps?(function(i,o,l,c){if(!hl(i.precondition,o))return l;const u=Im(i.fieldTransforms,c,o),f=o.data;return f.setAll(Lv(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,l){return hl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(t,e,n)}function yR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Pv(r.transform,s||null);i!=null&&(n===null&&(n=cn.empty()),n.set(r.field,i))}return n||null}function Em(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ai(r,s,((i,o)=>mR(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class aa extends yc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ps extends yc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Lv(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Tm(t,e,n){const r=new Map;He(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,dR(o,l,n[s]))}return r}function Im(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,fR(i,o,e))}return r}class of extends yc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vR extends yc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ER{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&_R(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Co(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Co(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Cv();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=Ov(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(Te.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Oe())}isEqual(e){return this.batchId===e.batchId&&Ai(this.mutations,e.mutations,((n,r)=>Em(n,r)))&&Ai(this.baseMutations,e.baseMutations,((n,r)=>Em(n,r)))}}class af{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){He(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return aR})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new af(e,n,r,s)}}/**
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
 */class TR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class IR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var wt,Me;function wR(t){switch(t){case Y.OK:return ye(64938);case Y.CANCELLED:case Y.UNKNOWN:case Y.DEADLINE_EXCEEDED:case Y.RESOURCE_EXHAUSTED:case Y.INTERNAL:case Y.UNAVAILABLE:case Y.UNAUTHENTICATED:return!1;case Y.INVALID_ARGUMENT:case Y.NOT_FOUND:case Y.ALREADY_EXISTS:case Y.PERMISSION_DENIED:case Y.FAILED_PRECONDITION:case Y.ABORTED:case Y.OUT_OF_RANGE:case Y.UNIMPLEMENTED:case Y.DATA_LOSS:return!0;default:return ye(15467,{code:t})}}function Vv(t){if(t===void 0)return Sr("GRPC error has no .code"),Y.UNKNOWN;switch(t){case wt.OK:return Y.OK;case wt.CANCELLED:return Y.CANCELLED;case wt.UNKNOWN:return Y.UNKNOWN;case wt.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case wt.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case wt.INTERNAL:return Y.INTERNAL;case wt.UNAVAILABLE:return Y.UNAVAILABLE;case wt.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case wt.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case wt.NOT_FOUND:return Y.NOT_FOUND;case wt.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case wt.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case wt.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case wt.ABORTED:return Y.ABORTED;case wt.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case wt.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case wt.DATA_LOSS:return Y.DATA_LOSS;default:return ye(39323,{code:t})}}(Me=wt||(wt={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const bR=new Jr([4294967295,4294967295],0);function wm(t){const e=rv().encode(t),n=new Qy;return n.update(e),new Uint8Array(n.digest())}function bm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Jr([n,r],0),new Jr([s,i],0)]}class lf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ho(`Invalid padding: ${n}`);if(r<0)throw new ho(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ho(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ho(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=Jr.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(Jr.fromNumber(r)));return s.compare(bR)===1&&(s=new Jr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=wm(e),[r,s]=bm(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);if(!this.ye(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new lf(i,s,n);return r.forEach((l=>o.insert(l))),o}insert(e){if(this.fe===0)return;const n=wm(e),[r,s]=bm(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ho extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class vc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,la.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new vc(Te.min(),s,new ft(Re),Cr(),Oe())}}class la{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new la(r,n,Oe(),Oe(),Oe())}}/**
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
 */class fl{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class Mv{constructor(e,n){this.targetId=e,this.De=n}}class xv{constructor(e,n,r=qt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Am{constructor(){this.ve=0,this.Ce=Sm(),this.Fe=qt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Oe(),n=Oe(),r=Oe();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ye(38017,{changeType:i})}})),new la(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=Sm()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,He(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class AR{constructor(e){this.We=e,this.Ge=new Map,this.ze=Cr(),this.je=Xa(),this.Je=Xa(),this.He=new ft(Re)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,(n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:ye(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach(((r,s)=>{this.nt(s)&&n(s)}))}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(Yu(i))if(r===0){const o=new me(i.path);this.Xe(n,o,Jt.newNoDocument(o,Te.min()))}else He(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),c=l?this.ut(l,e,o):1;if(c!==0){this.rt(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,u)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=is(r).toUint8Array()}catch(c){if(c instanceof lv)return ns("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new lf(o,s,i)}catch(c){return ns(c instanceof ho?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,i,null),s++)})),s}Pt(e){const n=new Map;this.Ge.forEach(((i,o)=>{const l=this.st(o);if(l){if(i.current&&Yu(l.target)){const c=new me(l.target.path);this.Tt(c).has(o)||this.It(o,c)||this.Xe(o,c,Jt.newNoDocument(c,e))}i.Ne&&(n.set(o,i.Le()),i.ke())}}));let r=Oe();this.Je.forEach(((i,o)=>{let l=!0;o.forEachWhile((c=>{const u=this.st(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.ze.forEach(((i,o)=>o.setReadTime(e)));const s=new vc(e,n,this.He,this.ze,r);return this.ze=Cr(),this.je=Xa(),this.Je=Xa(),this.He=new ft(Re),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new Am,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new Rt(Re),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new Rt(Re),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||he("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Am),this.We.getRemoteKeysForTarget(e).forEach((n=>{this.Xe(e,n,null)}))}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function Xa(){return new ft(me.comparator)}function Sm(){return new ft(me.comparator)}const SR={asc:"ASCENDING",desc:"DESCENDING"},CR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},RR={and:"AND",or:"OR"};class PR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Zu(t,e){return t.useProto3Json||fc(e)?e:{value:e}}function jl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Fv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function kR(t,e){return jl(t,e.toTimestamp())}function Jn(t){return He(!!t,49232),Te.fromTimestamp((function(n){const r=ss(n);return new at(r.seconds,r.nanos)})(t))}function cf(t,e){return eh(t,e).canonicalString()}function eh(t,e){const n=(function(s){return new tt(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function Uv(t){const e=tt.fromString(t);return He(Hv(e),10190,{key:e.toString()}),e}function th(t,e){return cf(t.databaseId,e.path)}function ou(t,e){const n=Uv(e);if(n.get(1)!==t.databaseId.projectId)throw new ue(Y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ue(Y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new me(jv(n))}function $v(t,e){return cf(t.databaseId,e)}function NR(t){const e=Uv(t);return e.length===4?tt.emptyPath():jv(e)}function nh(t){return new tt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function jv(t){return He(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Cm(t,e,n){return{name:th(t,e),fields:n.value.mapValue.fields}}function DR(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ye(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(He(f===void 0||typeof f=="string",58123),qt.fromBase64String(f||"")):(He(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),qt.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(u){const f=u.code===void 0?Y.UNKNOWN:Vv(u.code);return new ue(f,u.message||"")})(o);n=new xv(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ou(t,r.document.name),i=Jn(r.document.updateTime),o=r.document.createTime?Jn(r.document.createTime):Te.min(),l=new cn({mapValue:{fields:r.document.fields}}),c=Jt.newFoundDocument(s,i,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new fl(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ou(t,r.document),i=r.readTime?Jn(r.readTime):Te.min(),o=Jt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new fl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ou(t,r.document),i=r.removedTargetIds||[];n=new fl([],i,s,null)}else{if(!("filter"in e))return ye(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new IR(s,i),l=r.targetId;n=new Mv(l,o)}}return n}function OR(t,e){let n;if(e instanceof aa)n={update:Cm(t,e.key,e.value)};else if(e instanceof of)n={delete:th(t,e.key)};else if(e instanceof ps)n={update:Cm(t,e.key,e.data),updateMask:BR(e.fieldMask)};else{if(!(e instanceof vR))return ye(16599,{Rt:e.type});n={verify:th(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const l=o.transform;if(l instanceof Go)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Qo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Yo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof $l)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw ye(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:kR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ye(27497)})(t,e.precondition)),n}function LR(t,e){return t&&t.length>0?(He(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?Jn(s.updateTime):Jn(i);return o.isEqual(Te.min())&&(o=Jn(i)),new gR(o,s.transformResults||[])})(n,e)))):[]}function VR(t,e){return{documents:[$v(t,e.path)]}}function MR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=$v(t,s);const i=(function(u){if(u.length!==0)return qv(Fn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:ci(m.field),direction:UR(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Zu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{Vt:n,parent:s}}function xR(t){let e=NR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){He(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=Bv(p);return m instanceof Fn&&yv(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(C){return new Ko(ui(C.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(m)))})(n.orderBy));let l=null;n.limit&&(l=(function(p){let m;return m=typeof p=="object"?p.value:p,fc(m)?null:m})(n.limit));let c=null;n.startAt&&(c=(function(p){const m=!!p.before,I=p.values||[];return new Ul(I,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,I=p.values||[];return new Ul(I,m)})(n.endAt)),nR(e,s,o,i,l,"F",c,u)}function FR(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Bv(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ui(n.unaryFilter.field);return At.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ui(n.unaryFilter.field);return At.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ui(n.unaryFilter.field);return At.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ui(n.unaryFilter.field);return At.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ye(61313);default:return ye(60726)}})(t):t.fieldFilter!==void 0?(function(n){return At.create(ui(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ye(58110);default:return ye(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Fn.create(n.compositeFilter.filters.map((r=>Bv(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ye(1026)}})(n.compositeFilter.op))})(t):ye(30097,{filter:t})}function UR(t){return SR[t]}function $R(t){return CR[t]}function jR(t){return RR[t]}function ci(t){return{fieldPath:t.canonicalString()}}function ui(t){return jt.fromServerFormat(t.fieldPath)}function qv(t){return t instanceof At?(function(n){if(n.op==="=="){if(pm(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NAN"}};if(dm(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(pm(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NOT_NAN"}};if(dm(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ci(n.field),op:$R(n.op),value:n.value}}})(t):t instanceof Fn?(function(n){const r=n.getFilters().map((s=>qv(s)));return r.length===1?r[0]:{compositeFilter:{op:jR(n.op),filters:r}}})(t):ye(54877,{filter:t})}function BR(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function Hv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class zr{constructor(e,n,r,s,i=Te.min(),o=Te.min(),l=qt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new zr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class qR{constructor(e){this.gt=e}}function HR(t){const e=xR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ju(e,e.limit,"L"):e}/**
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
 */class WR{constructor(){this.Dn=new zR}addToCollectionParentIndex(e,n){return this.Dn.add(n),Z.resolve()}getCollectionParents(e,n){return Z.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return Z.resolve()}deleteFieldIndex(e,n){return Z.resolve()}deleteAllFieldIndexes(e){return Z.resolve()}createTargetIndexes(e,n){return Z.resolve()}getDocumentsMatchingTarget(e,n){return Z.resolve(null)}getIndexType(e,n){return Z.resolve(0)}getFieldIndexes(e,n){return Z.resolve([])}getNextCollectionGroupToUpdate(e){return Z.resolve(null)}getMinOffset(e,n){return Z.resolve(rs.min())}getMinOffsetFromCollectionGroup(e,n){return Z.resolve(rs.min())}updateCollectionGroup(e,n,r){return Z.resolve()}updateIndexEntries(e,n){return Z.resolve()}}class zR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Rt(tt.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Rt(tt.comparator)).toArray()}}/**
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
 */const Rm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Wv=41943040;class ln{static withCacheSize(e){return new ln(e,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ln.DEFAULT_COLLECTION_PERCENTILE=10,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ln.DEFAULT=new ln(Wv,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ln.DISABLED=new ln(-1,0,0);/**
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
 */class Ri{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Ri(0)}static ur(){return new Ri(-1)}}/**
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
 */const Pm="LruGarbageCollector",KR=1048576;function km([t,e],[n,r]){const s=Re(t,n);return s===0?Re(e,r):s}class GR{constructor(e){this.Tr=e,this.buffer=new Rt(km),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();km(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class QR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){he(Pm,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Mi(n)?he(Pm,"Ignoring IndexedDB error during garbage collection: ",n):await Vi(n)}await this.Rr(3e5)}))}}class YR{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return Z.resolve(hc.ue);const r=new GR(n);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(he("LruGarbageCollector","Garbage collection skipped; disabled"),Z.resolve(Rm)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(he("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Rm):this.pr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(he("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,l=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),ai()<=De.DEBUG&&he("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),Z.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function XR(t,e){return new YR(t,e)}/**
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
 */class JR{constructor(){this.changes=new zs((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Jt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?Z.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ZR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class eP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&Co(r.mutation,s,pn.empty(),at.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,Oe()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=Oe()){const s=Ds();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=uo();return i.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=Ds();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,Oe())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,l)=>{n.set(o,l)}))}))}computeViews(e,n,r,s){let i=Cr();const o=So(),l=(function(){return So()})();return n.forEach(((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof ps)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Co(f.mutation,u,f.mutation.getFieldMask(),at.now())):o.set(u.key,pn.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>{var p;return l.set(u,new ZR(f,(p=o.get(u))!==null&&p!==void 0?p:null))})),l)))}recalculateAndSaveOverlays(e,n){const r=So();let s=new ft(((o,l)=>o-l)),i=Oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const l of o)l.keys().forEach((c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||pn.empty();f=l.applyToLocalView(u,f),r.set(c,f);const p=(s.get(l.batchId)||Oe()).add(c);s=s.insert(l.batchId,p)}))})).next((()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=Cv();f.forEach((m=>{if(!i.has(m)){const I=Ov(n.get(m),r.get(m));I!==null&&p.set(m,I),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return Z.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return me.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Iv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):Z.resolve(Ds());let l=qo,c=i;return o.next((u=>Z.forEach(u,((f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?Z.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{c=c.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,c,u,Oe()))).next((f=>({batchId:l,changes:Sv(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new me(n)).next((r=>{let s=uo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=uo();return this.indexManager.getCollectionParents(e,i).next((l=>Z.forEach(l,(c=>{const u=(function(p,m){return new xi(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Jt.newInvalidDocument(f)))}));let l=uo();return o.forEach(((c,u)=>{const f=i.get(c);f!==void 0&&Co(f.mutation,u,pn.empty(),at.now()),gc(n,u)&&(l=l.insert(c,u))})),l}))}}/**
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
 */class tP{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return Z.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Jn(s.createTime)}})(n)),Z.resolve()}getNamedQuery(e,n){return Z.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,(function(s){return{name:s.name,query:HR(s.bundledQuery),readTime:Jn(s.readTime)}})(n)),Z.resolve()}}/**
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
 */class nP{constructor(){this.overlays=new ft(me.comparator),this.kr=new Map}getOverlay(e,n){return Z.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ds();return Z.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.wt(e,n,i)})),Z.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),Z.resolve()}getOverlaysForCollection(e,n,r){const s=Ds(),i=n.length+1,o=new me(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return Z.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ft(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Ds(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=Ds(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,f)=>l.set(u,f))),!(l.size()>=s)););return Z.resolve(l)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new TR(n,r));let i=this.kr.get(n);i===void 0&&(i=Oe(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
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
 */class rP{constructor(){this.sessionToken=qt.EMPTY_BYTE_STRING}getSessionToken(e){return Z.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,Z.resolve()}}/**
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
 */class uf{constructor(){this.qr=new Rt(Lt.Qr),this.$r=new Rt(Lt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new Lt(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Wr(new Lt(e,n))}Gr(e,n){e.forEach((r=>this.removeReference(r,n)))}zr(e){const n=new me(new tt([])),r=new Lt(n,e),s=new Lt(n,e+1),i=[];return this.$r.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new me(new tt([])),r=new Lt(n,e),s=new Lt(n,e+1);let i=Oe();return this.$r.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new Lt(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Lt{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return me.comparator(e.key,n.key)||Re(e.Hr,n.Hr)}static Ur(e,n){return Re(e.Hr,n.Hr)||me.comparator(e.key,n.key)}}/**
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
 */class sP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Rt(Lt.Qr)}checkEmpty(e){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ER(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Yr=this.Yr.add(new Lt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return Z.resolve(o)}lookupMutationBatch(e,n){return Z.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return Z.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?Zh:this.er-1)}getAllMutationBatches(e){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Lt(n,0),s=new Lt(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(o=>{const l=this.Zr(o.Hr);i.push(l)})),Z.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Rt(Re);return n.forEach((s=>{const i=new Lt(s,0),o=new Lt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],(l=>{r=r.add(l.Hr)}))})),Z.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;me.isDocumentKey(i)||(i=i.child(""));const o=new Lt(new me(i),0);let l=new Rt(Re);return this.Yr.forEachWhile((c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Hr)),!0)}),o),Z.resolve(this.ei(l))}ei(e){const n=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){He(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return Z.forEach(n.mutations,(s=>{const i=new Lt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,n){const r=new Lt(n,0),s=this.Yr.firstAfterOrEqual(r);return Z.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,Z.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class iP{constructor(e){this.ni=e,this.docs=(function(){return new ft(me.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return Z.resolve(r?r.document.mutableCopy():Jt.newInvalidDocument(n))}getEntries(e,n){let r=Cr();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Jt.newInvalidDocument(s))})),Z.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Cr();const o=n.path,l=new me(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||LC(OC(f),r)<=0||(s.has(f.key)||gc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return Z.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ye(9500)}ri(e,n){return Z.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new oP(this)}getSize(e){return Z.resolve(this.size)}}class oP extends JR{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),Z.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
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
 */class aP{constructor(e){this.persistence=e,this.ii=new zs((n=>nf(n)),rf),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.si=0,this.oi=new uf,this.targetCount=0,this._i=Ri.ar()}forEachTarget(e,n){return this.ii.forEach(((r,s)=>n(s))),Z.resolve()}getLastRemoteSnapshotVersion(e){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Z.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),Z.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new Ri(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,Z.resolve()}updateTargetData(e,n){return this.hr(n),Z.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,Z.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach(((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),Z.waitFor(i).next((()=>s))}getTargetCount(e){return Z.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return Z.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),Z.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),Z.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),Z.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return Z.resolve(r)}containsKey(e,n){return Z.resolve(this.oi.containsKey(n))}}/**
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
 */class zv{constructor(e,n){this.ai={},this.overlays={},this.ui=new hc(0),this.ci=!1,this.ci=!0,this.li=new rP,this.referenceDelegate=e(this),this.hi=new aP(this),this.indexManager=new WR,this.remoteDocumentCache=(function(s){return new iP(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new qR(n),this.Ti=new tP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new nP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new sP(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){he("MemoryPersistence","Starting transaction:",e);const s=new lP(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,n){return Z.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,n))))}}class lP extends MC{constructor(e){super(),this.currentSequenceNumber=e}}class hf{constructor(e){this.persistence=e,this.Ai=new uf,this.Ri=null}static Vi(e){return new hf(e)}get mi(){if(this.Ri)return this.Ri;throw ye(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),Z.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),Z.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),Z.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.mi,(r=>{const s=me.fromPath(r);return this.fi(e,s).next((i=>{i||n.removeEntry(s,Te.min())}))})).next((()=>(this.Ri=null,n.apply(e))))}updateLimboDocument(e,n){return this.fi(e,n).next((r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())}))}Pi(e){return 0}fi(e,n){return Z.or([()=>Z.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Bl{constructor(e,n){this.persistence=e,this.gi=new zs((r=>UC(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=XR(this,n)}static Vi(e,n){return new Bl(e,n)}Ii(){}di(e){return Z.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}yr(e){let n=0;return this.gr(e,(r=>{n++})).next((()=>n))}gr(e,n){return Z.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?Z.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(o=>this.Sr(e,o,n).next((l=>{l||(r++,i.removeEntry(o,Te.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),Z.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),Z.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),Z.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),Z.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=cl(e.data.value)),n}Sr(e,n,r){return Z.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return Z.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ff{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=Oe(),s=Oe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ff(e,n.fromCache,r,s)}}/**
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
 */class cP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class uP{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return rA()?8:xC(Zt())>0?6:4})()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ys(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new cP;return this.ws(e,n,o).next((l=>{if(i.result=l,this.Rs)return this.Ss(e,n,o,l.size)}))})).next((()=>i.result))}Ss(e,n,r,s){return r.documentReadCount<this.Vs?(ai()<=De.DEBUG&&he("QueryEngine","SDK will not create cache indexes for query:",li(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Z.resolve()):(ai()<=De.DEBUG&&he("QueryEngine","Query:",li(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(ai()<=De.DEBUG&&he("QueryEngine","The SDK decides to create cache indexes for query:",li(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xn(n))):Z.resolve())}ps(e,n){if(ym(n))return Z.resolve(null);let r=Xn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=Ju(n,null,"F"),r=Xn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=Oe(...i);return this.gs.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const u=this.bs(n,l);return this.Ds(n,u,o,c.readTime)?this.ps(e,Ju(n,null,"F")):this.vs(e,u,n,c)}))))})))))}ys(e,n,r,s){return ym(n)||s.isEqual(Te.min())?Z.resolve(null):this.gs.getDocuments(e,r).next((i=>{const o=this.bs(n,i);return this.Ds(n,o,r,s)?Z.resolve(null):(ai()<=De.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),li(n)),this.vs(e,o,n,DC(s,qo)).next((l=>l)))}))}bs(e,n){let r=new Rt(bv(e));return n.forEach(((s,i)=>{gc(e,i)&&(r=r.add(i))})),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return ai()<=De.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",li(n)),this.gs.getDocumentsMatchingQuery(e,n,rs.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
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
 */const df="LocalStore",hP=3e8;class fP{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new ft(Re),this.Ms=new zs((i=>nf(i)),rf),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new eP(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Fs)))}}function dP(t,e,n,r){return new fP(t,e,n,r)}async function Kv(t,e){const n=we(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],l=[];let c=Oe();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next((u=>({Bs:u,removedBatchIds:o,addedBatchIds:l})))}))}))}function pP(t,e){const n=we(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return(function(l,c,u,f){const p=u.batch,m=p.keys();let I=Z.resolve();return m.forEach((C=>{I=I.next((()=>f.getEntry(c,C))).next((O=>{const D=u.docVersions.get(C);He(D!==null,48541),O.version.compareTo(D)<0&&(p.applyToRemoteDocument(O,u),O.isValidDocument()&&(O.setReadTime(u.commitVersion),f.addEntry(O)))}))})),I.next((()=>l.mutationQueue.removeMutationBatch(c,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let c=Oe();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function Gv(t){const e=we(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.hi.getLastRemoteSnapshotVersion(n)))}function mP(t,e){const n=we(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const l=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;l.push(n.hi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.hi.addMatchingKeys(i,f.addedDocuments,p))));let I=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(qt.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),s=s.insert(p,I),(function(O,D,P){return O.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=hP?!0:P.addedDocuments.size+P.modifiedDocuments.size+P.removedDocuments.size>0})(m,I,f)&&l.push(n.hi.updateTargetData(i,I))}));let c=Cr(),u=Oe();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),l.push(gP(i,o,e.documentUpdates).next((f=>{c=f.Ls,u=f.ks}))),!r.isEqual(Te.min())){const f=n.hi.getLastRemoteSnapshotVersion(i).next((p=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(f)}return Z.waitFor(l).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,u))).next((()=>c))})).then((i=>(n.Fs=s,i)))}function gP(t,e,n){let r=Oe(),s=Oe();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=Cr();return n.forEach(((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(Te.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):he(df,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)})),{Ls:o,ks:s}}))}function _P(t,e){const n=we(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Zh),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function yP(t,e){const n=we(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.hi.getTargetData(r,e).next((i=>i?(s=i,Z.resolve(s)):n.hi.allocateTargetId(r).next((o=>(s=new zr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r}))}async function rh(t,e,n){const r=we(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Mi(o))throw o;he(df,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function Nm(t,e,n){const r=we(t);let s=Te.min(),i=Oe();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,f){const p=we(c),m=p.Ms.get(f);return m!==void 0?Z.resolve(p.Fs.get(m)):p.hi.getTargetData(u,f)})(r,o,Xn(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next((c=>{i=c}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:Te.min(),n?i:Oe()))).next((l=>(vP(r,sR(e),l),{documents:l,qs:i})))))}function vP(t,e,n){let r=t.xs.get(e)||Te.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.xs.set(e,r)}class Dm{constructor(){this.activeTargetIds=uR()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class EP{constructor(){this.Fo=new Dm,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Dm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class TP{xo(e){}shutdown(){}}/**
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
 */const Om="ConnectivityMonitor";class Lm{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){he(Om,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){he(Om,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ja=null;function sh(){return Ja===null?Ja=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ja++,"0x"+Ja.toString(16)}/**
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
 */const au="RestConnection",IP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class wP{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===xl?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=sh(),l=this.Go(e,n.toUriEncodedString());he(au,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,s,i);const{host:u}=new URL(l),f=Ni(u);return this.jo(e,l,c,r,f).then((p=>(he(au,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw ns(au,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p}))}Jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Li})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,n){const r=IP[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
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
 */class bP{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const zt="WebChannelConnection";class AP extends wP{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const o=sh();return new Promise(((l,c)=>{const u=new Yy;u.setWithCredentials(!0),u.listenOnce(Xy.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case ll.NO_ERROR:const p=u.getResponseJson();he(zt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case ll.TIMEOUT:he(zt,`RPC '${e}' ${o} timed out`),c(new ue(Y.DEADLINE_EXCEEDED,"Request time out"));break;case ll.HTTP_ERROR:const m=u.getStatus();if(he(zt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let I=u.getResponseJson();Array.isArray(I)&&(I=I[0]);const C=I==null?void 0:I.error;if(C&&C.status&&C.message){const O=(function(P){const V=P.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf(V)>=0?V:Y.UNKNOWN})(C.status);c(new ue(O,C.message))}else c(new ue(Y.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new ue(Y.UNAVAILABLE,"Connection failed."));break;default:ye(9055,{c_:e,streamId:o,l_:u.getLastErrorCode(),h_:u.getLastError()})}}finally{he(zt,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);he(zt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}P_(e,n,r){const s=sh(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ev(),l=Zy(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");he(zt,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=o.createWebChannel(f,c);this.T_(p);let m=!1,I=!1;const C=new bP({Ho:D=>{I?he(zt,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(m||(he(zt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),he(zt,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},Yo:()=>p.close()}),O=(D,P,V)=>{D.listen(P,(q=>{try{V(q)}catch(M){setTimeout((()=>{throw M}),0)}}))};return O(p,co.EventType.OPEN,(()=>{I||(he(zt,`RPC '${e}' stream ${s} transport opened.`),C.s_())})),O(p,co.EventType.CLOSE,(()=>{I||(I=!0,he(zt,`RPC '${e}' stream ${s} transport closed`),C.__(),this.I_(p))})),O(p,co.EventType.ERROR,(D=>{I||(I=!0,ns(zt,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),C.__(new ue(Y.UNAVAILABLE,"The operation could not be completed")))})),O(p,co.EventType.MESSAGE,(D=>{var P;if(!I){const V=D.data[0];He(!!V,16349);const q=V,M=(q==null?void 0:q.error)||((P=q[0])===null||P===void 0?void 0:P.error);if(M){he(zt,`RPC '${e}' stream ${s} received error:`,M);const X=M.status;let te=(function(T){const A=wt[T];if(A!==void 0)return Vv(A)})(X),_=M.message;te===void 0&&(te=Y.INTERNAL,_="Unknown error status: "+X+" with message "+M.message),I=!0,C.__(new ue(te,_)),p.close()}else he(zt,`RPC '${e}' stream ${s} received:`,V),C.a_(V)}})),O(l,Jy.STAT_EVENT,(D=>{D.stat===Wu.PROXY?he(zt,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===Wu.NOPROXY&&he(zt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{C.o_()}),0),C}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((n=>n===e))}}function lu(){return typeof document<"u"?document:null}/**
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
 */function Ec(t){return new PR(t,!0)}/**
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
 */class Qv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&he("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Vm="PersistentStream";class Yv{constructor(e,n,r,s,i,o,l,c){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Qv(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===Y.RESOURCE_EXHAUSTED?(Sr(n.toString()),Sr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===Y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===n&&this.W_(r,s)}),(r=>{e((()=>{const s=new ue(Y.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return he(Vm,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget((()=>this.b_===e?n():(he(Vm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class SP extends Yv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=DR(this.serializer,e),r=(function(i){if(!("targetChange"in i))return Te.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Te.min():o.readTime?Jn(o.readTime):Te.min()})(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=nh(this.serializer),n.addTarget=(function(i,o){let l;const c=o.target;if(l=Yu(c)?{documents:VR(i,c)}:{query:MR(i,c).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Fv(i,o.resumeToken);const u=Zu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(Te.min())>0){l.readTime=jl(i,o.snapshotVersion.toTimestamp());const u=Zu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l})(this.serializer,e);const r=FR(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=nh(this.serializer),n.removeTarget=e,this.k_(n)}}class CP extends Yv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return He(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,He(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){He(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=LR(e.writeResults,e.commitTime),r=Jn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=nh(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>OR(this.serializer,r)))};this.k_(n)}}/**
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
 */class RP{}class PP extends RP{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new ue(Y.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,eh(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ue(Y.UNKNOWN,i.toString())}))}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Jo(e,eh(n,r),s,o,l,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ue(Y.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class kP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Sr(n),this._a=!1):he("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Hs="RemoteStore";class NP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((o=>{r.enqueueAndForget((async()=>{Ks(this)&&(he(Hs,"Restarting streams for network reachability change."),await(async function(c){const u=we(c);u.Ia.add(4),await ca(u),u.Aa.set("Unknown"),u.Ia.delete(4),await Tc(u)})(this))}))})),this.Aa=new kP(r,s)}}async function Tc(t){if(Ks(t))for(const e of t.da)await e(!0)}async function ca(t){for(const e of t.da)await e(!1)}function Xv(t,e){const n=we(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),_f(n)?gf(n):Fi(n).x_()&&mf(n,e))}function pf(t,e){const n=we(t),r=Fi(n);n.Ta.delete(e),r.x_()&&Jv(n,e),n.Ta.size===0&&(r.x_()?r.B_():Ks(n)&&n.Aa.set("Unknown"))}function mf(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Fi(t).H_(e)}function Jv(t,e){t.Ra.$e(e),Fi(t).Y_(e)}function gf(t){t.Ra=new AR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Fi(t).start(),t.Aa.aa()}function _f(t){return Ks(t)&&!Fi(t).M_()&&t.Ta.size>0}function Ks(t){return we(t).Ia.size===0}function Zv(t){t.Ra=void 0}async function DP(t){t.Aa.set("Online")}async function OP(t){t.Ta.forEach(((e,n)=>{mf(t,e)}))}async function LP(t,e){Zv(t),_f(t)?(t.Aa.la(e),gf(t)):t.Aa.set("Unknown")}async function VP(t,e,n){if(t.Aa.set("Online"),e instanceof xv&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ta.delete(l),s.Ra.removeTarget(l))})(t,e)}catch(r){he(Hs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ql(t,r)}else if(e instanceof fl?t.Ra.Ye(e):e instanceof Mv?t.Ra.it(e):t.Ra.et(e),!n.isEqual(Te.min()))try{const r=await Gv(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const l=i.Ra.Pt(o);return l.targetChanges.forEach(((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ta.get(u);f&&i.Ta.set(u,f.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,u)=>{const f=i.Ta.get(c);if(!f)return;i.Ta.set(c,f.withResumeToken(qt.EMPTY_BYTE_STRING,f.snapshotVersion)),Jv(i,c);const p=new zr(f.target,c,u,f.sequenceNumber);mf(i,p)})),i.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(r){he(Hs,"Failed to raise snapshot:",r),await ql(t,r)}}async function ql(t,e,n){if(!Mi(e))throw e;t.Ia.add(1),await ca(t),t.Aa.set("Offline"),n||(n=()=>Gv(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{he(Hs,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Tc(t)}))}function eE(t,e){return e().catch((n=>ql(t,n,e)))}async function Ic(t){const e=we(t),n=as(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Zh;for(;MP(e);)try{const s=await _P(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,xP(e,s)}catch(s){await ql(e,s)}tE(e)&&nE(e)}function MP(t){return Ks(t)&&t.Pa.length<10}function xP(t,e){t.Pa.push(e);const n=as(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function tE(t){return Ks(t)&&!as(t).M_()&&t.Pa.length>0}function nE(t){as(t).start()}async function FP(t){as(t).na()}async function UP(t){const e=as(t);for(const n of t.Pa)e.X_(n.mutations)}async function $P(t,e,n){const r=t.Pa.shift(),s=af.from(r,e,n);await eE(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Ic(t)}async function jP(t,e){e&&as(t).Z_&&await(async function(r,s){if((function(o){return wR(o)&&o!==Y.ABORTED})(s.code)){const i=r.Pa.shift();as(r).N_(),await eE(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Ic(r)}})(t,e),tE(t)&&nE(t)}async function Mm(t,e){const n=we(t);n.asyncQueue.verifyOperationInProgress(),he(Hs,"RemoteStore received new credentials");const r=Ks(n);n.Ia.add(3),await ca(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Tc(n)}async function BP(t,e){const n=we(t);e?(n.Ia.delete(2),await Tc(n)):e||(n.Ia.add(2),await ca(n),n.Aa.set("Unknown"))}function Fi(t){return t.Va||(t.Va=(function(n,r,s){const i=we(n);return i.ia(),new SP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:DP.bind(null,t),e_:OP.bind(null,t),n_:LP.bind(null,t),J_:VP.bind(null,t)}),t.da.push((async e=>{e?(t.Va.N_(),_f(t)?gf(t):t.Aa.set("Unknown")):(await t.Va.stop(),Zv(t))}))),t.Va}function as(t){return t.ma||(t.ma=(function(n,r,s){const i=we(n);return i.ia(),new CP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:FP.bind(null,t),n_:jP.bind(null,t),ea:UP.bind(null,t),ta:$P.bind(null,t)}),t.da.push((async e=>{e?(t.ma.N_(),await Ic(t)):(await t.ma.stop(),t.Pa.length>0&&(he(Hs,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))}))),t.ma}/**
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
 */class yf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Zr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new yf(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(Y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vf(t,e){if(Sr("AsyncQueue",`${e}: ${t}`),Mi(t))return new ue(Y.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class yi{static emptySet(e){return new yi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||me.comparator(n.key,r.key):(n,r)=>me.comparator(n.key,r.key),this.keyedMap=uo(),this.sortedSet=new ft(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof yi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new yi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class xm{constructor(){this.fa=new ft(me.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):ye(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Pi{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((l=>{o.push({type:0,doc:l})})),new Pi(e,n,yi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&mc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class qP{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class HP{constructor(){this.queries=Fm(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=we(n),i=s.queries;s.queries=Fm(),i.forEach(((o,l)=>{for(const c of l.wa)c.onError(r)}))})(this,new ue(Y.ABORTED,"Firestore shutting down"))}}function Fm(){return new zs((t=>wv(t)),mc)}async function rE(t,e){const n=we(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new qP,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=vf(o,`Initialization of query '${li(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&Ef(n)}async function sE(t,e){const n=we(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function WP(t,e){const n=we(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.wa)l.Ca(s)&&(r=!0);o.ya=s}}r&&Ef(n)}function zP(t,e,n){const r=we(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function Ef(t){t.Da.forEach((e=>{e.next()}))}var ih,Um;(Um=ih||(ih={})).Fa="default",Um.Cache="cache";class iE{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Pi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=Pi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==ih.Cache}}/**
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
 */class oE{constructor(e){this.key=e}}class aE{constructor(e){this.key=e}}class KP{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Oe(),this.mutatedKeys=Oe(),this.Xa=bv(e),this.eu=new yi(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new xm,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),I=gc(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),O=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let D=!1;m&&I?m.data.isEqual(I.data)?C!==O&&(r.track({type:3,doc:I}),D=!0):this.iu(m,I)||(r.track({type:2,doc:I}),D=!0,(c&&this.Xa(I,c)>0||u&&this.Xa(I,u)<0)&&(l=!0)):!m&&I?(r.track({type:0,doc:I}),D=!0):m&&!I&&(r.track({type:1,doc:m}),D=!0,(c||u)&&(l=!0)),D&&(I?(o=o.add(I),i=O?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:l,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort(((f,p)=>(function(I,C){const O=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye(20277,{At:D})}};return O(I)-O(C)})(f.type,p.type)||this.Xa(f.doc,p.doc))),this.su(r),s=s!=null&&s;const l=n&&!s?this.ou():[],c=this.Za.size===0&&this.current&&!s?1:0,u=c!==this.Ya;return this.Ya=c,o.length!==0||u?{snapshot:new Pi(this.query,e.eu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new xm,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((n=>this.Ha=this.Ha.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ha=this.Ha.delete(n))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Oe(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const n=[];return e.forEach((r=>{this.Za.has(r)||n.push(new aE(r))})),this.Za.forEach((r=>{e.has(r)||n.push(new oE(r))})),n}uu(e){this.Ha=e.qs,this.Za=Oe();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return Pi.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Tf="SyncEngine";class GP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class QP{constructor(e){this.key=e,this.lu=!1}}class YP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new zs((l=>wv(l)),mc),this.Tu=new Map,this.Iu=new Set,this.du=new ft(me.comparator),this.Eu=new Map,this.Au=new uf,this.Ru={},this.Vu=new Map,this.mu=Ri.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function XP(t,e,n=!0){const r=dE(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await lE(r,e,n,!0),s}async function JP(t,e){const n=dE(t);await lE(n,e,!0,!1)}async function lE(t,e,n,r){const s=await yP(t.localStore,Xn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await ZP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Xv(t.remoteStore,s),l}async function ZP(t,e,n,r,s){t.gu=(p,m,I)=>(async function(O,D,P,V){let q=D.view.nu(P);q.Ds&&(q=await Nm(O.localStore,D.query,!1).then((({documents:_})=>D.view.nu(_,q))));const M=V&&V.targetChanges.get(D.targetId),X=V&&V.targetMismatches.get(D.targetId)!=null,te=D.view.applyChanges(q,O.isPrimaryClient,M,X);return jm(O,D.targetId,te._u),te.snapshot})(t,p,m,I);const i=await Nm(t.localStore,e,!0),o=new KP(e,i.qs),l=o.nu(i.documents),c=la.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);jm(t,n,u._u);const f=new GP(e,n,o);return t.Pu.set(e,f),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),u.snapshot}async function ek(t,e,n){const r=we(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((o=>!mc(o,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await rh(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&pf(r.remoteStore,s.targetId),oh(r,s.targetId)})).catch(Vi)):(oh(r,s.targetId),await rh(r.localStore,s.targetId,!0))}async function tk(t,e){const n=we(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),pf(n.remoteStore,r.targetId))}async function nk(t,e,n){const r=ck(t);try{const s=await(function(o,l){const c=we(o),u=at.now(),f=l.reduce(((I,C)=>I.add(C.key)),Oe());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",(I=>{let C=Cr(),O=Oe();return c.Os.getEntries(I,f).next((D=>{C=D,C.forEach(((P,V)=>{V.isValidDocument()||(O=O.add(P))}))})).next((()=>c.localDocuments.getOverlayedDocuments(I,C))).next((D=>{p=D;const P=[];for(const V of l){const q=yR(V,p.get(V.key).overlayedDocument);q!=null&&P.push(new ps(V.key,q,mv(q.value.mapValue),Vn.exists(!0)))}return c.mutationQueue.addMutationBatch(I,u,P,l)})).next((D=>{m=D;const P=D.applyToLocalDocumentSet(p,O);return c.documentOverlayCache.saveOverlays(I,D.batchId,P)}))})).then((()=>({batchId:m.batchId,changes:Sv(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,l,c){let u=o.Ru[o.currentUser.toKey()];u||(u=new ft(Re)),u=u.insert(l,c),o.Ru[o.currentUser.toKey()]=u})(r,s.batchId,n),await ua(r,s.changes),await Ic(r.remoteStore)}catch(s){const i=vf(s,"Failed to persist write");n.reject(i)}}async function cE(t,e){const n=we(t);try{const r=await mP(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Eu.get(i);o&&(He(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?He(o.lu,14607):s.removedDocuments.size>0&&(He(o.lu,42227),o.lu=!1))})),await ua(n,r,e)}catch(r){await Vi(r)}}function $m(t,e,n){const r=we(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach(((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(o,l){const c=we(o);c.onlineState=l;let u=!1;c.queries.forEach(((f,p)=>{for(const m of p.wa)m.va(l)&&(u=!0)})),u&&Ef(c)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function rk(t,e,n){const r=we(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new ft(me.comparator);o=o.insert(i,Jt.newNoDocument(i,Te.min()));const l=Oe().add(i),c=new vc(Te.min(),new Map,new ft(Re),o,l);await cE(r,c),r.du=r.du.remove(i),r.Eu.delete(e),If(r)}else await rh(r.localStore,e,!1).then((()=>oh(r,e,n))).catch(Vi)}async function sk(t,e){const n=we(t),r=e.batch.batchId;try{const s=await pP(n.localStore,e);hE(n,r,null),uE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ua(n,s)}catch(s){await Vi(s)}}async function ik(t,e,n){const r=we(t);try{const s=await(function(o,l){const c=we(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next((p=>(He(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>c.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);hE(r,e,n),uE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ua(r,s)}catch(s){await Vi(s)}}function uE(t,e){(t.Vu.get(e)||[]).forEach((n=>{n.resolve()})),t.Vu.delete(e)}function hE(t,e,n){const r=we(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function oh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach((r=>{t.Au.containsKey(r)||fE(t,r)}))}function fE(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(pf(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),If(t))}function jm(t,e,n){for(const r of n)r instanceof oE?(t.Au.addReference(r.key,e),ok(t,r)):r instanceof aE?(he(Tf,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||fE(t,r.key)):ye(19791,{yu:r})}function ok(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(he(Tf,"New document in limbo: "+n),t.Iu.add(r),If(t))}function If(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new me(tt.fromString(e)),r=t.mu.next();t.Eu.set(r,new QP(n)),t.du=t.du.insert(n,r),Xv(t.remoteStore,new zr(Xn(pc(n.path)),r,"TargetPurposeLimboResolution",hc.ue))}}async function ua(t,e,n){const r=we(t),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach(((l,c)=>{o.push(r.gu(c,e,n).then((u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=ff.Es(c.targetId,u);i.push(p)}})))})),await Promise.all(o),r.hu.J_(s),await(async function(c,u){const f=we(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>Z.forEach(u,(m=>Z.forEach(m.Is,(I=>f.persistence.referenceDelegate.addReference(p,m.targetId,I))).next((()=>Z.forEach(m.ds,(I=>f.persistence.referenceDelegate.removeReference(p,m.targetId,I)))))))))}catch(p){if(!Mi(p))throw p;he(df,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const I=f.Fs.get(m),C=I.snapshotVersion,O=I.withLastLimboFreeSnapshotVersion(C);f.Fs=f.Fs.insert(m,O)}}})(r.localStore,i))}async function ak(t,e){const n=we(t);if(!n.currentUser.isEqual(e)){he(Tf,"User change. New user:",e.toKey());const r=await Kv(n.localStore,e);n.currentUser=e,(function(i,o){i.Vu.forEach((l=>{l.forEach((c=>{c.reject(new ue(Y.CANCELLED,o))}))})),i.Vu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ua(n,r.Bs)}}function lk(t,e){const n=we(t),r=n.Eu.get(e);if(r&&r.lu)return Oe().add(r.key);{let s=Oe();const i=n.Tu.get(e);if(!i)return s;for(const o of i){const l=n.Pu.get(o);s=s.unionWith(l.view.tu)}return s}}function dE(t){const e=we(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=cE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rk.bind(null,e),e.hu.J_=WP.bind(null,e.eventManager),e.hu.pu=zP.bind(null,e.eventManager),e}function ck(t){const e=we(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ik.bind(null,e),e}class Hl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ec(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return dP(this.persistence,new uP,e.initialUser,this.serializer)}Du(e){return new zv(hf.Vi,this.serializer)}bu(e){return new EP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hl.provider={build:()=>new Hl};class uk extends Hl{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){He(this.persistence.referenceDelegate instanceof Bl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new QR(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?ln.withCacheSize(this.cacheSizeBytes):ln.DEFAULT;return new zv((r=>Bl.Vi(r,n)),this.serializer)}}class ah{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$m(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ak.bind(null,this.syncEngine),await BP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new HP})()}createDatastore(e){const n=Ec(e.databaseInfo.databaseId),r=(function(i){return new AP(i)})(e.databaseInfo);return(function(i,o,l,c){return new PP(i,o,l,c)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,l){return new NP(r,s,i,o,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>$m(this.syncEngine,n,0)),(function(){return Lm.C()?new Lm:new TP})())}createSyncEngine(e,n){return(function(s,i,o,l,c,u,f){const p=new YP(s,i,o,l,c,u);return f&&(p.fu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=we(s);he(Hs,"RemoteStore shutting down."),i.Ia.add(5),await ca(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}ah.provider={build:()=>new ah};/**
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
 */class pE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Sr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const ls="FirestoreClient";class hk{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Yt.UNAUTHENTICATED,this.clientId=Jh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{he(ls,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(he(ls,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=vf(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function cu(t,e){t.asyncQueue.verifyOperationInProgress(),he(ls,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Kv(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{ns("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then((()=>{he("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{ns("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),t._offlineComponents=e}async function Bm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await fk(t);he(ls,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>Mm(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>Mm(e.remoteStore,s))),t._onlineComponents=e}async function fk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){he(ls,"Using user provided OfflineComponentProvider");try{await cu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===Y.FAILED_PRECONDITION||s.code===Y.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;ns("Error using user provided cache. Falling back to memory cache: "+n),await cu(t,new Hl)}}else he(ls,"Using default OfflineComponentProvider"),await cu(t,new uk(void 0));return t._offlineComponents}async function mE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(he(ls,"Using user provided OnlineComponentProvider"),await Bm(t,t._uninitializedComponentsProvider._online)):(he(ls,"Using default OnlineComponentProvider"),await Bm(t,new ah))),t._onlineComponents}function dk(t){return mE(t).then((e=>e.syncEngine))}async function lh(t){const e=await mE(t),n=e.eventManager;return n.onListen=XP.bind(null,e.syncEngine),n.onUnlisten=ek.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=JP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=tk.bind(null,e.syncEngine),n}function pk(t,e,n={}){const r=new Zr;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,u){const f=new pE({next:m=>{f.Ou(),o.enqueueAndForget((()=>sE(i,p)));const I=m.docs.has(l);!I&&m.fromCache?u.reject(new ue(Y.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&m.fromCache&&c&&c.source==="server"?u.reject(new ue(Y.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new iE(pc(l.path),f,{includeMetadataChanges:!0,ka:!0});return rE(i,p)})(await lh(t),t.asyncQueue,e,n,r))),r.promise}/**
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
 */function gE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const qm=new Map;/**
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
 */const _E="firestore.googleapis.com",Hm=!0;class Wm{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ue(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_E,this.ssl=Hm}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Hm;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Wv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<KR)throw new ue(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}NC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ue(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ue(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ue(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new IC;switch(r.type){case"firstParty":return new SC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ue(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=qm.get(n);r&&(he("ComponentProvider","Removing Datastore"),qm.delete(n),r.terminate())})(this),Promise.resolve()}}function mk(t,e,n,r={}){var s;t=Ln(t,wc);const i=Ni(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(hy(`https://${c}`),fy("Firestore",!0)),o.host!==_E&&o.host!==c&&ns("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:r});if(!$s(u,l)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Yt.MOCK_USER;else{f=G0(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new ue(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Yt(m)}t._authCredentials=new wC(new nv(f,p))}}/**
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
 */class Gs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Gs(this.firestore,e,this._query)}}class mt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new es(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mt(this.firestore,e,this._key)}toJSON(){return{type:mt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(oa(n,mt._jsonSchema))return new mt(e,r||null,new me(tt.fromString(n.referencePath)))}}mt._jsonSchemaVersion="firestore/documentReference/1.0",mt._jsonSchema={type:Ct("string",mt._jsonSchemaVersion),referencePath:Ct("string")};class es extends Gs{constructor(e,n,r){super(e,n,pc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mt(this.firestore,null,new me(e))}withConverter(e){return new es(this.firestore,e,this._path)}}function uu(t,e,...n){if(t=Mt(t),sv("collection","path",e),t instanceof wc){const r=tt.fromString(e,...n);return sm(r),new es(t,null,r)}{if(!(t instanceof mt||t instanceof es))throw new ue(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(tt.fromString(e,...n));return sm(r),new es(t.firestore,null,r)}}function fr(t,e,...n){if(t=Mt(t),arguments.length===1&&(e=Jh.newId()),sv("doc","path",e),t instanceof wc){const r=tt.fromString(e,...n);return rm(r),new mt(t,null,new me(r))}{if(!(t instanceof mt||t instanceof es))throw new ue(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(tt.fromString(e,...n));return rm(r),new mt(t.firestore,t instanceof es?t.converter:null,new me(r))}}/**
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
 */const zm="AsyncQueue";class Km{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Qv(this,"async_queue_retry"),this.oc=()=>{const r=lu();r&&he(zm,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=lu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=lu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const n=new Zr;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Mi(e))throw e;he(zm,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const n=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Sr("INTERNAL UNHANDLED ERROR: ",Gm(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=yf.createAndSchedule(this,e,n,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&ye(47125,{hc:Gm(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Gm(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function Qm(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}class Ws extends wc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Km,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Km(e),this._firestoreClient=void 0,await e}}}function gk(t,e){const n=typeof t=="object"?t:gy(),r=typeof t=="string"?t:xl,s=Uh(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=z0("firestore");i&&mk(s,...i)}return s}function wf(t){if(t._terminated)throw new ue(Y.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||_k(t),t._firestoreClient}function _k(t){var e,n,r;const s=t._freezeSettings(),i=(function(l,c,u,f){return new BC(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,gE(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new hk(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&(function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}})(t._componentsProvider))}/**
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
 */class yn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yn(qt.fromBase64String(e))}catch(n){throw new ue(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new yn(qt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:yn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(oa(e,yn._jsonSchema))return yn.fromBase64String(e.bytes)}}yn._jsonSchemaVersion="firestore/bytes/1.0",yn._jsonSchema={type:Ct("string",yn._jsonSchemaVersion),bytes:Ct("string")};/**
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
 */class bc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ue(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new jt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ac{constructor(e){this._methodName=e}}/**
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
 */class Zn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ue(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ue(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Zn._jsonSchemaVersion}}static fromJSON(e){if(oa(e,Zn._jsonSchema))return new Zn(e.latitude,e.longitude)}}Zn._jsonSchemaVersion="firestore/geoPoint/1.0",Zn._jsonSchema={type:Ct("string",Zn._jsonSchemaVersion),latitude:Ct("number"),longitude:Ct("number")};/**
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
 */class er{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:er._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(oa(e,er._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new er(e.vectorValues);throw new ue(Y.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}er._jsonSchemaVersion="firestore/vectorValue/1.0",er._jsonSchema={type:Ct("string",er._jsonSchemaVersion),vectorValues:Ct("object")};/**
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
 */const yk=/^__.*__$/;class vk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ps(e,this.data,this.fieldMask,n,this.fieldTransforms):new aa(e,this.data,n,this.fieldTransforms)}}class yE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ps(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function vE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye(40011,{Ec:t})}}class bf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new bf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Wl(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(vE(this.Ec)&&yk.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Ek{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ec(e)}Dc(e,n,r,s=!1){return new bf({Ec:e,methodName:n,bc:r,path:jt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Af(t){const e=t._freezeSettings(),n=Ec(t._databaseId);return new Ek(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Tk(t,e,n,r,s,i={}){const o=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);Cf("Data must be an object, but it was:",o,r);const l=EE(r,o);let c,u;if(i.merge)c=new pn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=ch(e,p,n);if(!o.contains(m))throw new ue(Y.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);IE(f,m)||f.push(m)}c=new pn(f),u=o.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,u=o.fieldTransforms;return new vk(new cn(l),c,u)}class ha extends Ac{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ha}}class Sf extends Ac{_toFieldTransform(e){return new pR(e.path,new Go)}isEqual(e){return e instanceof Sf}}function Ik(t,e,n,r){const s=t.Dc(1,e,n);Cf("Data must be an object, but it was:",s,r);const i=[],o=cn.empty();ds(r,((c,u)=>{const f=Rf(e,c,n);u=Mt(u);const p=s.gc(f);if(u instanceof ha)i.push(f);else{const m=fa(u,p);m!=null&&(i.push(f),o.set(f,m))}}));const l=new pn(i);return new yE(o,l,s.fieldTransforms)}function wk(t,e,n,r,s,i){const o=t.Dc(1,e,n),l=[ch(e,r,n)],c=[s];if(i.length%2!=0)throw new ue(Y.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(ch(e,i[m])),c.push(i[m+1]);const u=[],f=cn.empty();for(let m=l.length-1;m>=0;--m)if(!IE(u,l[m])){const I=l[m];let C=c[m];C=Mt(C);const O=o.gc(I);if(C instanceof ha)u.push(I);else{const D=fa(C,O);D!=null&&(u.push(I),f.set(I,D))}}const p=new pn(u);return new yE(f,p,o.fieldTransforms)}function bk(t,e,n,r=!1){return fa(n,t.Dc(r?4:3,e))}function fa(t,e){if(TE(t=Mt(t)))return Cf("Unsupported field value:",e,t),EE(t,e);if(t instanceof Ac)return(function(r,s){if(!vE(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const l of r){let c=fa(l,s.yc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=Mt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return hR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=at.fromDate(r);return{timestampValue:jl(s.serializer,i)}}if(r instanceof at){const i=new at(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:jl(s.serializer,i)}}if(r instanceof Zn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof yn)return{bytesValue:Fv(s.serializer,r._byteString)};if(r instanceof mt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:cf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof er)return(function(o,l){return{mapValue:{fields:{[dv]:{stringValue:pv},[Fl]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw l.wc("VectorValues must only contain numeric values.");return sf(l.serializer,u)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${uc(r)}`)})(t,e)}function EE(t,e){const n={};return av(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ds(t,((r,s)=>{const i=fa(s,e.Vc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function TE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof at||t instanceof Zn||t instanceof yn||t instanceof mt||t instanceof Ac||t instanceof er)}function Cf(t,e,n){if(!TE(n)||!iv(n)){const r=uc(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function ch(t,e,n){if((e=Mt(e))instanceof bc)return e._internalPath;if(typeof e=="string")return Rf(t,e);throw Wl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Ak=new RegExp("[~\\*/\\[\\]]");function Rf(t,e,n){if(e.search(Ak)>=0)throw Wl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new bc(...e.split("."))._internalPath}catch{throw Wl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ue(Y.INVALID_ARGUMENT,l+t+c)}function IE(t,e){return t.some((n=>n.isEqual(e)))}/**
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
 */class wE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Sk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Pf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Sk extends wE{data(){return super.data()}}function Pf(t,e){return typeof e=="string"?Rf(t,e):e instanceof bc?e._internalPath:e._delegate._internalPath}/**
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
 */function Ck(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ue(Y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kf{}class bE extends kf{}function Ym(t,e,...n){let r=[];e instanceof kf&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((c=>c instanceof Df)).length,l=i.filter((c=>c instanceof Nf)).length;if(o>1||o>0&&l>0)throw new ue(Y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class Nf extends bE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Nf(e,n,r)}_apply(e){const n=this._parse(e);return AE(e._query,n),new Gs(e.firestore,e.converter,Xu(e._query,n))}_parse(e){const n=Af(e.firestore);return(function(i,o,l,c,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new ue(Y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Zm(p,f);const C=[];for(const O of p)C.push(Jm(c,i,O));m={arrayValue:{values:C}}}else m=Jm(c,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Zm(p,f),m=bk(l,o,p,f==="in"||f==="not-in");return At.create(u,f,m)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Df extends kf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Df(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:Fn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)AE(o,c),o=Xu(o,c)})(e._query,n),new Gs(e.firestore,e.converter,Xu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Of extends bE{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Of(e,n)}_apply(e){const n=(function(s,i,o){if(s.startAt!==null)throw new ue(Y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new ue(Y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ko(i,o)})(e._query,this._field,this._direction);return new Gs(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new xi(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,n))}}function Xm(t,e="asc"){const n=e,r=Pf("orderBy",t);return Of._create(r,n)}function Jm(t,e,n){if(typeof(n=Mt(n))=="string"){if(n==="")throw new ue(Y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Iv(e)&&n.indexOf("/")!==-1)throw new ue(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(tt.fromString(n));if(!me.isDocumentKey(r))throw new ue(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return fm(t,new me(r))}if(n instanceof mt)return fm(t,n._key);throw new ue(Y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${uc(n)}.`)}function Zm(t,e){if(!Array.isArray(t)||t.length===0)throw new ue(Y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function AE(t,e){const n=(function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new ue(Y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ue(Y.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Rk{convertValue(e,n="none"){switch(os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return yt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(is(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ye(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ds(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Fl].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((o=>yt(o.doubleValue)));return new er(i)}convertGeoPoint(e){return new Zn(yt(e.latitude),yt(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=dc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ho(e));default:return null}}convertTimestamp(e){const n=ss(e);return new at(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=tt.fromString(e);He(Hv(r),9688,{name:e});const s=new Wo(r.get(1),r.get(3)),i=new me(r.popFirst(5));return s.isEqual(n)||Sr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Pk(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class fo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ms extends wE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new dl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Pf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ue(Y.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ms._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ms._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ms._jsonSchema={type:Ct("string",Ms._jsonSchemaVersion),bundleSource:Ct("string","DocumentSnapshot"),bundleName:Ct("string"),bundle:Ct("string")};class dl extends Ms{data(e={}){return super.data(e)}}class vi{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new fo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new dl(this._firestore,this._userDataWriter,r.key,r,new fo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ue(Y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((l=>{const c=new dl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new fo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new dl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new fo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:kk(l.type),doc:c,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ue(Y.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=vi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Jh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function kk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye(61501,{type:t})}}/**
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
 */function Nk(t){t=Ln(t,mt);const e=Ln(t.firestore,Ws);return pk(wf(e),t._key).then((n=>CE(e,t,n)))}vi._jsonSchemaVersion="firestore/querySnapshot/1.0",vi._jsonSchema={type:Ct("string",vi._jsonSchemaVersion),bundleSource:Ct("string","QuerySnapshot"),bundleName:Ct("string"),bundle:Ct("string")};class SE extends Rk{constructor(e){super(),this.firestore=e}convertBytes(e){return new yn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new mt(this.firestore,null,n)}}function to(t,e,n){t=Ln(t,mt);const r=Ln(t.firestore,Ws),s=Pk(t.converter,e,n);return Lf(r,[Tk(Af(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Vn.none())])}function hu(t,e,n,...r){t=Ln(t,mt);const s=Ln(t.firestore,Ws),i=Af(s);let o;return o=typeof(e=Mt(e))=="string"||e instanceof bc?wk(i,"updateDoc",t._key,e,n,r):Ik(i,"updateDoc",t._key,e),Lf(s,[o.toMutation(t._key,Vn.exists(!0))])}function Dk(t){return Lf(Ln(t.firestore,Ws),[new of(t._key,Vn.none())])}function Za(t,...e){var n,r,s;t=Mt(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Qm(e[o])||(i=e[o++]);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Qm(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,u,f;if(t instanceof mt)u=Ln(t.firestore,Ws),f=pc(t._key.path),c={next:p=>{e[o]&&e[o](CE(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Ln(t,Gs);u=Ln(p.firestore,Ws),f=p._query;const m=new SE(u);c={next:I=>{e[o]&&e[o](new vi(u,m,p,I))},error:e[o+1],complete:e[o+2]},Ck(t._query)}return(function(m,I,C,O){const D=new pE(O),P=new iE(I,D,C);return m.asyncQueue.enqueueAndForget((async()=>rE(await lh(m),P))),()=>{D.Ou(),m.asyncQueue.enqueueAndForget((async()=>sE(await lh(m),P)))}})(wf(u),f,l,c)}function Lf(t,e){return(function(r,s){const i=new Zr;return r.asyncQueue.enqueueAndForget((async()=>nk(await dk(r),s,i))),i.promise})(wf(t),e)}function CE(t,e,n){const r=n.docs.get(e._key),s=new SE(t);return new Ms(t,s,e._key,r,new fo(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */function fu(){return new ha("deleteField")}function no(){return new Sf("serverTimestamp")}(function(e,n=!0){(function(s){Li=s})(Di),wi(new js("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Ws(new bC(r.getProvider("auth-internal")),new CC(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ue(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wo(u.options.projectId,f)})(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),Xr(Jp,Zp,e),Xr(Jp,Zp,"esm2017")})();var Ok="firebase",Lk="11.10.0";/**
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
 */Xr(Ok,Lk,"app");const pl={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0},RE=!!(pl.apiKey&&pl.projectId&&pl.appId),zl=RE?my(pl):null,si=zl?EC(zl):null,_t=zl?gk(zl):null,Vk=new _r;/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function du(t){return t!=null}function Mk(t,e={}){var m,I;const n=e.attributeNames??{},r=C=>n[C]??C,s=t.size??t.width??ws.width,i=t.size??t.height??ws.height,o=((m=t.aliases)==null?void 0:m.filter(C=>typeof C=="string"&&C.trim()!=="").map(C=>`lucide-${C}`))??[],l=[...t.name?[`lucide-${t.name}`]:[],...o],c=((I=e.className)==null?void 0:I.split(" ").filter(Boolean))??[],u=e.includeDefaultClasses===!1?eg(...c):eg("lucide",...l,...c),f=e.absoluteStrokeWidth?Number(e.strokeWidth??ws["stroke-width"])*Number(t.size??t.width??ws.width)/Number(e.size??e.width??ws.width):e.strokeWidth??ws["stroke-width"];return["svg",{...Object.entries(ws).reduce((C,[O,D])=>(C[r(O)]=D,C),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&du(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&du(e.width)&&{[r("width")]:e.width},..."height"in e&&du(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:f,...u&&{[r("class")]:u},[r("viewBox")]:`0 0 ${s} ${i}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(C=>{const[O,D,P]=C,V=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...D}:D;return P?[O,V,P]:[O,V]})]}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xk=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=t=>t==="";/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk=Symbol("lucide-icons");function $k(){return di(Uk,{})}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk=({name:t,iconNode:e,"icon-node":n,icon:r={name:t&&Fk(t),node:e??n??[],size:24,aliases:[]},absoluteStrokeWidth:s,"absolute-stroke-width":i,nonScalingStroke:o,"non-scaling-stroke":l,strokeWidth:c,"stroke-width":u,size:f,width:p=f,height:m=f,color:I,...C},{slots:O})=>{var R;const{size:D,color:P,strokeWidth:V=2,absoluteStrokeWidth:q=!1,nonScalingStroke:M=!1,class:X=""}=$k(),te=el(s)||el(i)||s===!0||i===!0||q===!0,_=el(o)||el(l)||o===!0||l===!0||M===!0;delete C.class;const E=(R=O.default)==null?void 0:R.call(O),[,T,A=[]]=Mk(r,{color:I??P,width:p??f??D,height:m??f??D,strokeWidth:c??u??V,absoluteStrokeWidth:te,nonScalingStroke:_,className:X,hasA11yProp:E!=null&&E.length>0||xk(C),attributes:C});return xs("svg",T,[...A.map(([L,b])=>xs(L,b)),...E??[]])};/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function gt(t,e=[]){const n=typeof t=="string"?{name:t,node:e}:t;return(r,{slots:s})=>xs(jk,{...r,icon:n},s.default?{default:s.default}:void 0)}/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]},ro=gt(Bk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk={name:"chef-hat",size:24,node:[["path",{d:"M10 11v5",key:"urfl79"}],["path",{d:"M14 11v5",key:"w9lfkh"}],["path",{d:"M6 12.65c0-.457-.316-.844-.727-1.041A4 4 0 017.52 4.034a1.53 1.53 0 001.367-.547 4 4 0 016.225 0 1.53 1.53 0 001.367.547 4 4 0 012.248 7.575c-.411.197-.727.584-.727 1.04V19a2 2 0 01-2 2H8a2 2 0 01-2-2z",key:"1dq1bt"}],["path",{d:"M6 16h12",key:"u522kt"}]]},tg=gt(qk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]},Wk=gt(Hk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]},Kk=gt(zk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]},so=gt(Gk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qk={name:"chevron-up",size:24,node:[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]},Yk=gt(Qk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xk={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]},ng=gt(Xk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk={name:"languages",size:24,node:[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]},Zk=gt(Jk);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eN={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]},tN=gt(eN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nN={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]},rN=gt(nN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sN={name:"pencil",size:24,node:[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]},iN=gt(sN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oN={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]},pu=gt(oN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aN={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]},lN=gt(aN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cN={name:"shopping-basket",size:24,node:[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]]},rg=gt(cN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uN={name:"shopping-cart",size:24,node:[["path",{d:"m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18",key:"uebgi3"}],["path",{d:"M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25",key:"1j7c9p"}],["circle",{cx:"18",cy:"20",r:"2",key:"t9985n"}],["circle",{cx:"8",cy:"20",r:"2",key:"ckkr5m"}]]},hN=gt(uN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fN={name:"sliders-horizontal",size:24,node:[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]]},dN=gt(fN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pN={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]},mN=gt(pN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gN={name:"store",size:24,node:[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5",key:"slp6dd"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",key:"o0xfot"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05",key:"wn3emo"}]]},sg=gt(gN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _N={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]},yN=gt(_N);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vN={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]},ig=gt(vN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EN={name:"utensils",size:24,node:[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],aliases:["fork-knife"]},og=gt(EN);/**
 * @license @lucide/vue v1.73.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TN={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]},io=gt(TN),IN={key:0,class:"auth-screen center-state"},wN={class:"state-icon"},bN={key:1,class:"auth-screen center-state"},AN={key:2,class:"auth-screen login-state"},SN={class:"hero-orbit"},CN={class:"hero-plate"},RN={key:0,class:"error-text"},PN={key:3,class:"auth-screen center-state"},kN={class:"state-icon"},NN={key:4,class:"app-shell"},DN={class:"app-topbar"},ON={class:"header-main-row"},LN={class:"brand top-brand"},VN={class:"brand-mark"},MN={class:"brand-copy"},xN={class:"brand-version"},FN={class:"header-date"},UN={class:"top-actions"},$N=["title"],jN=["title"],BN=["title"],qN={class:"top-nav","aria-label":"Main navigation"},HN=["onClick"],WN={class:"main-content"},zN={key:0,class:"page plan-page"},KN={class:"page-heading compact plan-heading section-heading"},GN={class:"plan-toolbar"},QN=["title","disabled"],YN=["title"],XN={class:"plan-day-list"},JN=["data-day-key"],ZN={class:"plan-day-heading"},eD={class:"day-weekday"},tD={key:0,class:"today-marker"},nD={class:"plan-day-meals"},rD={class:"plan-meal-meta"},sD={class:"day-meal-type"},iD={class:"day-meal-time"},oD={class:"meal-picker-actions day-meal-picker-actions"},aD=["aria-expanded","onClick"],lD=["onClick"],cD=["title","aria-label","onClick"],uD={key:1,class:"page"},hD={class:"page-heading compact section-heading meals-page-heading"},fD={class:"meals-heading-actions"},dD={class:"search-box meals-search-box"},pD=["placeholder"],mD={key:0,class:"meals-list"},gD={class:"meal-row-number"},_D={class:"meal-row-main"},yD={key:0,class:"ingredient-preview"},vD={key:0},ED={key:1},TD={class:"frequency"},ID={class:"frequency-metric"},wD={class:"frequency-label"},bD={class:"frequency-metric"},AD={class:"frequency-label"},SD={class:"row-actions"},CD=["title","onClick"],RD=["title","onClick"],PD={key:1,class:"empty-collection"},kD={class:"state-icon"},ND={key:2,class:"page shopping-page"},DD={class:"page-heading compact section-heading shopping-page-heading"},OD={class:"shopping-heading-actions"},LD={class:"shopping-filter-toggle"},VD={class:"shopping-filter-label"},MD=["aria-expanded"],xD={key:0,class:"shopping-groups"},FD={class:"shopping-store-heading"},UD={class:"shopping-item-info"},$D={key:0},jD={key:1},BD=["aria-label"],qD=["onClick"],HD=["onClick"],WD=["onClick"],zD={key:1,class:"empty-collection"},KD={class:"muted"},GD={class:"meal-modal store-priority-modal"},QD={class:"modal-header"},YD={class:"eyebrow"},XD={class:"modal-description"},JD=["aria-label"],ZD={key:0,class:"store-priority-list"},eO={class:"priority-order-hint"},tO={class:"priority-position"},nO={class:"store-priority-item-info"},rO={class:"priority-reorder-actions"},sO=["disabled","aria-label","title","onClick"],iO=["disabled","aria-label","title","onClick"],oO={key:1,class:"empty-priority-state"},aO={class:"modal-actions"},lO=["disabled"],cO={class:"meal-modal"},uO={class:"modal-header"},hO={class:"form-field"},fO={class:"ingredients-editor"},dO={class:"ingredients-editor-heading"},pO={key:0,class:"empty-form-hint"},mO={class:"ingredient-editor-fields"},gO={class:"form-field ingredient-name-field"},_O=["onUpdate:modelValue","placeholder"],yO={class:"form-field ingredient-quantity-field"},vO=["value","aria-label","step","inputmode","placeholder","onInput"],EO=["aria-expanded","onClick"],TO=["onClick"],IO={class:"quantity-option-label"},wO=["onClick"],bO={class:"quantity-option-symbol"},AO={class:"quantity-option-label"},SO={class:"store-picker-line"},CO={class:"field-caption"},RO=["aria-expanded","onClick"],PO=["onClick"],kO=["onClick"],NO=["aria-expanded","aria-controls","aria-label","onClick"],DO=["title","onClick"],OO=["id","aria-label"],LO=["placeholder","onKeydown"],VO=["disabled","onClick"],MO={class:"modal-actions"},xO={class:"primary-btn",type:"submit"},ag="2026-11-16",FO=ec({__name:"App",setup(t){const{t:e,locale:n}=ic(),r=x0.version,s=Xe(null),i=Xe(!1),o=Xe(!0),l=Xe(""),c=Xe([]),u=Xe([]),f=Xe({}),p=Xe("home"),m=Xe(localStorage.getItem("diet-theme")||"dark"),I=Xe(""),C=Xe(!1),O=Xe(null),D=Xe(null),P=Xe(null),V=Xe({visibility:"hidden"}),q=Xe({name:"",ingredients:[]}),M=Xe(null),X=Xe(""),te=Xe({}),_=Xe([]),E=Xe([]),T=Xe(!1),A=Ut(()=>{const U=new Map(u.value.map(B=>[B.id,B])),S=_.value.map(B=>U.get(B)).filter(B=>!!B),k=new Set(S.map(B=>B.id));return[...S,...u.value.filter(B=>!k.has(B.id))]}),R=Ut(()=>{const U=new Map(u.value.map(S=>[S.id,S]));return E.value.map(S=>U.get(S)).filter(S=>!!S)}),L=["breakfast","lunch","snack","dinner"],b=["10:00","13:00","16:00","20:00"],Le=new Date,Pe=U=>`${U.getFullYear()}-${String(U.getMonth()+1).padStart(2,"0")}-${String(U.getDate()).padStart(2,"0")}`,nt=Pe(Le),Ce=new Date(2026,10,16),Ae=Le<Ce?Ce:Le,dt=new Date(Le);Le.getDay()===6?dt.setDate(dt.getDate()+2):Le.getDay()===0&&dt.setDate(dt.getDate()+1);const kt=Xe(new Date(dt<Ce?Ce:dt)),Qe=Xe(Le.getDay()===0||Le.getDay()===6?"next":"this"),$e=Xe(!1),rt=Ut(()=>Pe(kt.value)),wn=U=>{const[S,k,B]=U.split("-").map(Number);return new Date(S,k-1,B)},ut=U=>{const S=new Date(U);return S.setHours(0,0,0,0),S.setDate(S.getDate()-(S.getDay()+6)%7),S},on=Pe(ut(Ce)),an=Ut(()=>{const U=ut(Le);return Qe.value==="next"&&U.setDate(U.getDate()+7),Pe(U)}),bn=Ut(()=>Pe(ut(kt.value))>on),hn=U=>new Intl.DateTimeFormat(n.value==="it"?"it-IT":"en-US",{weekday:"long",day:"numeric",month:"long"}).format(U),mn=U=>new Intl.DateTimeFormat(n.value==="it"?"it-IT":"en-US",{day:"numeric",month:"short"}).format(U),w=Ut(()=>c.value.filter(U=>U.name.toLowerCase().includes(I.value.toLowerCase())).sort((U,S)=>U.name.localeCompare(S.name))),N=Ut(()=>{const U=ut(kt.value);return Array.from({length:7},(S,k)=>{const B=new Date(U);return B.setDate(U.getDate()+k),B})}),H=Pe(ut(Ae)),ee=new Date(ut(Ae));ee.setDate(ee.getDate()+6);const Q=Pe(ee),J=U=>Pe(ut(wn(U)));function ne(U){return Object.entries(f.value).reduce((S,[k,B])=>J(k)!==H?S:S+Object.values(B.meals||{}).filter(ie=>(ie==null?void 0:ie.mealId)===U).length,0)}function re(U){const S=Object.entries(f.value).filter(([Fe,lt])=>Fe>=ag&&Fe<=Q&&Object.values(lt.meals||{}).some(en=>(en==null?void 0:en.mealId)===U)).sort(([Fe],[lt])=>Fe.localeCompare(lt));if(!S.length)return 0;const k=ut(wn(S[0][0])),B=ut(Ae),ie=Date.UTC(k.getFullYear(),k.getMonth(),k.getDate()),Se=Date.UTC(B.getFullYear(),B.getMonth(),B.getDate()),ke=Math.floor((Se-ie)/(10080*60*1e3))+1,Ve=S.reduce((Fe,[,lt])=>Fe+Object.values(lt.meals||{}).filter(en=>(en==null?void 0:en.mealId)===U).length,0);return Number((Ve/Math.max(1,ke)).toFixed(1))}function y(U){return U>=3?"high":U>=1.5?"medium":"low"}function v(U){if(typeof U!="string"&&typeof U!="number")return"";const S=String(U).trim();if(!S)return"";const k=S.match(/^([0-9]+(?:[.,][0-9]+)?)\s*(g|gr|grammi|grams|kg|kilogrammi|kilograms)?$/i);if(!k)return"";const B=Number(k[1].replace(",",".")),ie=/^k/i.test(k[2]||"")?B*1e3:B;return Number.isFinite(ie)&&ie>=0?String(Number(ie.toFixed(3))):""}function j(U){if(typeof U!="string"&&typeof U!="number")return"";const S=String(U).trim();if(!S)return"";const k=S.match(/^([0-9]+(?:[.,][0-9]+)?)\s*(?:u|unit(?:à|a)?|units?|pcs?|pieces?|pezzi)?$/i);if(!k)return"";const B=Number(k[1].replace(",","."));return Number.isFinite(B)&&B>=0?String(Number(B.toFixed(3))):""}function W(U,S){return S==="unit"?j(U):v(U)}function se(U){return Array.isArray(U)?U.map(S=>{if(typeof S=="string")return{name:S,quantity:"",quantityUnit:"g",storeIds:[]};if(S&&typeof S=="object"){const k=S,B=typeof k.storeId=="string"&&k.storeId?[k.storeId]:[],ie=Array.isArray(k.storeIds)?k.storeIds.filter(ke=>typeof ke=="string"&&!!ke):B,Se=k.quantityUnit==="unit"?"unit":"g";return{name:typeof k.name=="string"?k.name:"",quantity:W(k.quantity,Se),quantityUnit:Se,storeIds:[...new Set(ie)]}}return{name:"",quantity:"",quantityUnit:"g",storeIds:[]}}).filter(S=>S.name.trim()):[]}let oe,pe,ce,x,G;function Ie(){_t&&(oe==null||oe(),pe==null||pe(),ce==null||ce(),x==null||x(),oe=Za(Ym(uu(_t,"meals"),Xm("name")),U=>{c.value=U.docs.map(S=>{const k=S.data();return{id:S.id,name:String(k.name||""),ingredients:se(k.ingredients),createdAt:k.createdAt}})}),pe=Za(uu(_t,"plan"),U=>{const S={};U.docs.forEach(k=>{const B=k.data();S[k.id]={id:k.id,date:String(B.date||k.id),meals:B.meals||{}}}),f.value=S}),ce=Za(Ym(uu(_t,"stores"),Xm("name")),U=>{u.value=U.docs.map(S=>({id:S.id,name:String(S.data().name||"")}))}),x=Za(fr(_t,"shoppingLists","current"),U=>{const S=U.data()||{},k=S.statuses||{},B=Array.isArray(S.storePriorityOrder)?S.storePriorityOrder.filter(ie=>typeof ie=="string"&&!!ie):[];te.value=Object.fromEntries(Object.entries(k).map(([ie,Se])=>[ie,Se==="todo"?"buy":Se])),_.value=[...new Set(B)]}))}async function Ne(U){if(!_t){o.value=!1;return}try{const S=await Nk(fr(_t,"users",U.uid));i.value=S.exists()&&S.data().enabled===!0,i.value&&Ie()}catch(S){console.error("Unable to verify user access:",S),i.value=!1}finally{o.value=!1}}function We(){D.value=null,P.value=null,V.value={visibility:"hidden"}}function Et(){We()}function Nt(){const U=P.value;if(!U||!U.isConnected||!D.value)return;const S=U.getBoundingClientRect(),k=document.querySelector(".dropdown-menu-portal"),B=D.value.startsWith("quantity-"),ie=B?140:245,Se=Math.min((k==null?void 0:k.scrollHeight)||ie,ie),ke=7,Ve=8,Fe=Math.max(0,window.innerHeight-S.bottom-ke-Ve),lt=Math.max(0,S.top-ke-Ve),en=Fe<Se&&lt>Fe,$n=Math.min(ie,en?lt:Fe),Zs=Math.min(Se,$n),Hi=en?Math.max(Ve,S.top-ke-Zs):Math.min(window.innerHeight-Ve,S.bottom+ke),ys=Math.min(B?172:S.width,window.innerWidth-Ve*2),Ta=B?S.right-ys:S.left,Ia=Math.max(Ve,Math.min(Ta,window.innerWidth-ys-Ve));V.value={top:`${Hi}px`,left:`${Ia}px`,width:`${ys}px`,maxHeight:`${$n}px`,visibility:"visible"}}bh(()=>{if(document.addEventListener("click",Et),document.addEventListener("scroll",Nt,!0),window.addEventListener("resize",Nt),!si||!_t){o.value=!1;return}G=lS(si,async U=>{s.value=U,i.value=!1,o.value=!0,oe==null||oe(),pe==null||pe(),ce==null||ce(),x==null||x(),c.value=[],f.value={},u.value=[],te.value={},_.value=[],E.value=[],U?await Ne(U):o.value=!1})}),Ah(()=>{document.removeEventListener("click",Et),document.removeEventListener("scroll",Nt,!0),window.removeEventListener("resize",Nt),G==null||G(),oe==null||oe(),pe==null||pe(),ce==null||ce(),x==null||x()}),wr(m,U=>{document.documentElement.dataset.theme=U,localStorage.setItem("diet-theme",U)},{immediate:!0}),wr(n,U=>localStorage.setItem("diet-language",U));async function Tt(){if(si){l.value="";try{await PS(si,Vk)}catch(U){l.value=U instanceof Error?U.message:"Authentication failed"}}}async function Dt(){si&&await cS(si)}async function ar(U,S){if(D.value===U){We();return}D.value=U,P.value=S.currentTarget,V.value={visibility:"hidden"},await $g(),Nt()}function ms(U){Qe.value=U,We()}function Ui(U,S,k){Dr(U,S,k),We()}function da(U,S){Dr(U,S,""),We()}function pa(U,S){var B,ie,Se;const k=(ie=(B=f.value[U])==null?void 0:B.meals)==null?void 0:ie[S];if(k)return((Se=c.value.find(ke=>ke.id===k.mealId))==null?void 0:Se.name)||k.mealName||void 0}function kr(U,S){if(!S){U.storeIds=[],We();return}U.storeIds=U.storeIds.includes(S)?U.storeIds.filter(k=>k!==S):[...U.storeIds,S]}function Qs(U){return u.value.filter(S=>U.includes(S.id)).map(S=>S.name).join(", ")}function $i(U){const S=U.length;return S?S===1?Qs(U)||e("chooseStores"):e("storesSelected",{count:S}):e("chooseStores")}function An(U){return U==="unit"?e("quantityUnitPiecesShort"):"g"}function ji(U,S){if(!U)return"";const k=S==="unit"&&n.value==="en"&&Number(U)===1?"pc":An(S);return`${U} ${k}`}function gs(U,S){U.quantityUnit=S,We()}function Ys(U){O.value=U||null,q.value=U?{name:U.name,ingredients:se(U.ingredients).map(S=>({...S,localId:crypto.randomUUID()}))}:{name:"",ingredients:[]},M.value=null,X.value="",C.value=!0}function _s(){q.value.ingredients.push({localId:crypto.randomUUID(),name:"",quantity:"",quantityUnit:"g",storeIds:[]})}function ma(U){q.value.ingredients=q.value.ingredients.filter(S=>S.localId!==U),M.value===U&&(M.value=null)}async function xt(){if(!_t||!q.value.name.trim())return;const U=q.value.ingredients.filter(k=>k.name.trim()).map(({name:k,quantity:B,quantityUnit:ie,storeIds:Se})=>({name:k.trim(),quantity:W(B,ie),quantityUnit:ie,storeIds:[...new Set(Se)]})),S={name:q.value.name.trim(),ingredients:U,updatedAt:no()};O.value?await hu(fr(_t,"meals",O.value.id),{...S,description:fu(),tags:fu()}):await to(fr(_t,"meals",crypto.randomUUID()),{...S,createdAt:no()}),C.value=!1}async function ga(U){!_t||!confirm(e("confirmDelete"))||await Dk(fr(_t,"meals",U.id))}async function Nr(U){if(!_t||!X.value.trim())return;const S=crypto.randomUUID(),k=X.value.trim();await to(fr(_t,"stores",S),{name:k,createdAt:no()});const B=q.value.ingredients.find(ie=>ie.localId===U);B&&(B.storeIds=[...new Set([...B.storeIds,S])]),X.value="",M.value=null}async function Dr(U,S,k){var ke,Ve;if(!_t)return;const B=Pe(U),ie=fr(_t,"plan",B),Se=c.value.find(Fe=>Fe.id===k);if(Se){const Fe={mealId:Se.id,mealName:Se.name};f.value[B]?await hu(ie,{[`meals.${S}`]:Fe}):await to(ie,{date:B,meals:{[S]:Fe}},{merge:!0});return}(Ve=(ke=f.value[B])==null?void 0:ke.meals)!=null&&Ve[S]&&await hu(ie,{[`meals.${S}`]:fu()})}function _a(U){const S=new Date(kt.value);S.setDate(S.getDate()+U*7),!(Pe(ut(S))<on)&&(kt.value=S)}function Sc(){kt.value=new Date(Ae)}const Or=Ut(()=>{const U=ut(Le);return Qe.value==="next"&&U.setDate(U.getDate()+7),Array.from({length:7},(k,B)=>{const ie=new Date(U);return ie.setDate(U.getDate()+B),ie}).filter(k=>Pe(k)>=nt&&Pe(k)>=ag)});function ya(U,S,k){const B=`${an.value}:${U.trim().toLocaleLowerCase()}:${S||"none"}`;return k==="unit"?`${B}:unit`:B}function Cc(U,S){const k=U.map(ie=>Number(W(ie,S))).filter(ie=>Number.isFinite(ie)&&ie>0);if(!k.length)return"";const B=k.reduce((ie,Se)=>ie+Se,0);return String(Number(B.toFixed(3)))}const Lr=Ut(()=>{const U=new Map;for(const B of Or.value){const ie=f.value[Pe(B)];for(const Se of Object.values((ie==null?void 0:ie.meals)||{})){if(!Se)continue;const ke=c.value.find(Ve=>Ve.id===Se.mealId);for(const Ve of(ke==null?void 0:ke.ingredients)||[]){const Fe=Ve.name.trim();if(!Fe)continue;const lt=Ve.quantityUnit||"g",en=qi(Fe),Js=`${en}:${lt}`,$n=U.get(Js);$n?($n.occurrences+=1,Ve.storeIds.forEach(Zs=>$n.storeIds.add(Zs)),Ve.quantity.trim()&&$n.quantities.push(Ve.quantity.trim())):U.set(Js,{name:Fe,ingredientKey:en,quantityUnit:lt,storeIds:new Set(Ve.storeIds),quantities:Ve.quantity.trim()?[Ve.quantity.trim()]:[],occurrences:1})}}}const S=new Map;for(const B of U.values()){const ie=S.get(B.ingredientKey)||new Set;B.storeIds.forEach(Se=>ie.add(Se)),S.set(B.ingredientKey,ie)}const k=new Map(A.value.map((B,ie)=>[B.id,ie]));return[...U.values()].map(B=>{const ie=S.get(B.ingredientKey)||B.storeIds,Se=A.value.filter(lt=>ie.has(lt.id)),ke=Se[0],Ve=(ke==null?void 0:ke.id)||"",Fe=ya(B.name,Ve,B.quantityUnit);return{...B,storeIds:Se.map(lt=>lt.id),storeOptions:Se,storeId:Ve,storeName:(ke==null?void 0:ke.name)||e("noStore"),quantity:Cc(B.quantities,B.quantityUnit),key:Fe,status:te.value[Fe]||Se.map(lt=>ya(B.name,lt.id,B.quantityUnit)).map(lt=>te.value[lt]).find(Boolean)||"buy"}}).sort((B,ie)=>(k.get(B.storeId)??Number.MAX_SAFE_INTEGER)-(k.get(ie.storeId)??Number.MAX_SAFE_INTEGER)||B.storeName.localeCompare(ie.storeName)||B.name.localeCompare(ie.name))}),va=Ut(()=>{const U=new Map;for(const k of Lr.value){const B=U.get(k.storeId)||[];B.push(k),U.set(k.storeId,B)}const S=new Map(A.value.map((k,B)=>[k.id,B]));return[...U.entries()].sort(([k],[B])=>(S.get(k)??Number.MAX_SAFE_INTEGER)-(S.get(B)??Number.MAX_SAFE_INTEGER)).map(([k,B])=>{var ie;return{id:k,name:((ie=u.value.find(Se=>Se.id===k))==null?void 0:ie.name)||e("noStore"),items:B}})}),Xs=Ut(()=>va.value.map(U=>({...U,items:U.items.filter(S=>!$e.value||S.status!=="home")})).filter(U=>U.items.length>0));async function Vr(U,S){_t&&(te.value={...te.value,[U]:S},await to(fr(_t,"shoppingLists","current"),{statuses:te.value,updatedAt:no()},{merge:!0}))}function Un(){E.value=A.value.map(U=>U.id),T.value=!0}function Bi(U,S){const k=U+S;if(k<0||k>=E.value.length)return;const B=[...E.value];[B[U],B[k]]=[B[k],B[U]],E.value=B}async function Ea(){if(!_t)return;const U=[..._.value],S=[...new Set(E.value.filter(k=>u.value.some(B=>B.id===k)))];u.value.forEach(k=>{S.includes(k.id)||S.push(k.id)}),_.value=S;try{await to(fr(_t,"shoppingLists","current"),{storePriorityOrder:S,updatedAt:no()},{merge:!0}),T.value=!1}catch(k){_.value=U,console.error("Unable to save global store priority:",k)}}function qi(U){return encodeURIComponent(U.trim().toLocaleLowerCase()).replace(/\./g,"%2E")}return(U,S)=>K(RE)?o.value?(fe(),ge("div",bN,[...S[28]||(S[28]=[F("div",{class:"loader"},null,-1),F("p",null,"Loading…",-1)])])):s.value?i.value?(fe(),ge("div",NN,[F("header",DN,[F("div",ON,[F("div",LN,[F("div",VN,[Ee(K(og),{size:18})]),F("span",MN,[S[33]||(S[33]=F("span",{class:"brand-name"},[_n("diet"),F("span",{class:"brand-dot"},".")],-1)),F("span",xN,"v"+le(K(r)),1)])]),F("div",FN,le(hn(new Date)),1),F("div",UN,[F("button",{class:"icon-btn",onClick:S[0]||(S[0]=k=>m.value=m.value==="dark"?"light":"dark"),title:K(e)(m.value==="dark"?"light":"dark")},[m.value==="dark"?(fe(),Kt(K(yN),{key:0})):(fe(),Kt(K(rN),{key:1}))],8,$N),F("button",{class:"icon-btn",onClick:S[1]||(S[1]=k=>n.value=K(n)==="en"?"it":"en"),title:K(e)("language")},[Ee(K(Zk))],8,jN),F("button",{class:"icon-btn",onClick:Dt,title:K(e)("signOut")},[Ee(K(tN))],8,BN)])]),F("nav",qN,[(fe(),ge(ct,null,Cn(["home","meals","shopping"],k=>F("button",{key:k,class:Ot(["top-nav-item",{active:p.value===k}]),onClick:B=>p.value=k},[k==="home"?(fe(),Kt(K(ng),{key:0})):k==="meals"?(fe(),Kt(K(tg),{key:1})):(fe(),Kt(K(rg),{key:2})),F("span",null,le(K(e)(k)),1)],10,HN)),64))])]),F("main",WN,[p.value==="home"?(fe(),ge("section",zN,[F("div",KN,[F("h1",null,le(K(e)("home")),1),F("div",GN,[F("button",{class:"icon-btn plan-arrow",title:K(e)("previous"),disabled:!bn.value,onClick:S[2]||(S[2]=k=>_a(-1))},[Ee(K(Kk))],8,QN),F("button",{class:"secondary-btn this-week-btn",onClick:Sc},le(K(e)("thisWeek")),1),F("button",{class:"icon-btn plan-arrow",title:K(e)("next"),onClick:S[3]||(S[3]=k=>_a(1))},[Ee(K(so))],8,YN)])]),F("div",XN,[(fe(!0),ge(ct,null,Cn(N.value,k=>(fe(),ge("article",{key:Pe(k),"data-day-key":Pe(k),class:Ot(["plan-day-row",{"plan-day-row-today":Pe(k)===K(nt),"plan-day-row-focused":Pe(k)===rt.value}])},[F("header",ZN,[F("div",null,[F("span",eD,le(new Intl.DateTimeFormat(K(n)==="it"?"it-IT":"en-US",{weekday:"long"}).format(k)),1),F("h2",null,le(mn(k)),1)]),Pe(k)===K(nt)?(fe(),ge("span",tD,le(K(e)("today")),1)):It("",!0)]),F("div",nD,[(fe(),ge(ct,null,Cn(L,(B,ie)=>{var Se;return F("div",{key:B,class:"plan-meal-slot"},[F("div",rD,[F("span",sD,le(K(e)(B)),1),F("span",iD,le(b[ie]),1)]),F("div",oD,[F("div",{class:"custom-select-wrap day-meal-select",onClick:S[5]||(S[5]=gn(()=>{},["stop"]))},[F("button",{class:"custom-select-trigger","aria-expanded":D.value===`plan-${Pe(k)}-${B}`,onClick:ke=>ar(`plan-${Pe(k)}-${B}`,ke)},[F("span",null,le(pa(Pe(k),B)||K(e)("selectDish")),1),Ee(K(so),{class:"select-chevron",size:15})],8,aD),(fe(),Kt(Fa,{to:"body"},[D.value===`plan-${Pe(k)}-${B}`?(fe(),ge("div",{key:0,class:"custom-select-menu dropdown-menu-portal",style:Ps(V.value),onClick:S[4]||(S[4]=gn(()=>{},["stop"]))},[(fe(!0),ge(ct,null,Cn(c.value,ke=>{var Ve,Fe;return fe(),ge("button",{key:ke.id,class:Ot(["custom-select-option",{selected:((Fe=(Ve=f.value[Pe(k)])==null?void 0:Ve.meals[B])==null?void 0:Fe.mealId)===ke.id}]),onClick:lt=>Ui(k,B,ke.id)},le(ke.name),11,lD)}),128))],4)):It("",!0)]))]),(Se=f.value[Pe(k)])!=null&&Se.meals[B]?(fe(),ge("button",{key:0,type:"button",class:"icon-btn clear-meal-btn",title:K(e)("clearMeal"),"aria-label":K(e)("clearMeal"),onClick:ke=>da(k,B)},[Ee(K(io),{size:15})],8,cD)):It("",!0)])])}),64))])],10,JN))),128))])])):p.value==="meals"?(fe(),ge("section",uD,[F("div",hD,[F("h1",null,le(K(e)("meals")),1),F("div",fD,[F("div",dD,[Ee(K(lN),{size:17}),Zi(F("input",{"onUpdate:modelValue":S[6]||(S[6]=k=>I.value=k),placeholder:K(e)("search")},null,8,pD),[[ja,I.value]])]),F("button",{class:"primary-btn",onClick:S[7]||(S[7]=k=>Ys())},[Ee(K(pu),{size:17}),_n(le(K(e)("addMeal")),1)])])]),w.value.length?(fe(),ge("div",mD,[(fe(!0),ge(ct,null,Cn(w.value,(k,B)=>(fe(),ge("article",{key:k.id,class:"meal-row"},[F("div",gD,le(String(B+1).padStart(2,"0")),1),F("div",_D,[F("h3",null,le(k.name),1),k.ingredients.length?(fe(),ge("div",yD,[(fe(!0),ge(ct,null,Cn(k.ingredients,ie=>(fe(),ge("span",{key:`${ie.name}-${ie.storeIds.join(",")}`,class:"ingredient-chip"},[_n(le(ie.name),1),ie.quantity?(fe(),ge("small",vD,le(ji(ie.quantity,ie.quantityUnit)),1)):It("",!0),ie.storeIds.length?(fe(),ge("small",ED,"· "+le(Qs(ie.storeIds)),1)):It("",!0)]))),128))])):It("",!0)]),F("div",TD,[F("div",ID,[F("div",wD,le(K(e)("thisWeek")),1),F("strong",{class:Ot(y(ne(k.id)))},le(ne(k.id)),3)]),F("div",bD,[F("div",AD,le(K(e)("averagePerWeek")),1),F("strong",{class:Ot(y(re(k.id)))},le(re(k.id)),3)])]),F("div",SD,[F("button",{class:"icon-btn",title:K(e)("editMeal"),onClick:ie=>Ys(k)},[Ee(K(iN))],8,CD),F("button",{class:"icon-btn danger",title:K(e)("delete"),onClick:ie=>ga(k)},[Ee(K(ig))],8,RD)])]))),128))])):(fe(),ge("div",PD,[F("div",kD,[Ee(K(tg))]),F("h3",null,le(K(e)("noMeals")),1),F("button",{class:"text-btn",onClick:S[8]||(S[8]=k=>Ys())},le(K(e)("addMeal"))+" +",1)]))])):(fe(),ge("section",ND,[F("div",DD,[F("h1",null,le(K(e)("shopping")),1),F("div",OD,[F("label",LD,[Zi(F("input",{"onUpdate:modelValue":S[9]||(S[9]=k=>$e.value=k),type:"checkbox"},null,512),[[lw,$e.value]]),S[34]||(S[34]=F("span",{class:"shopping-filter-switch","aria-hidden":"true"},[F("span")],-1)),F("span",VD,le(K(e)("excludeAlreadyAtHome")),1)]),F("div",{class:"custom-select-wrap shopping-week-selector",onClick:S[14]||(S[14]=gn(()=>{},["stop"]))},[F("button",{class:"custom-select-trigger","aria-expanded":D.value==="shopping-week",onClick:S[10]||(S[10]=k=>ar("shopping-week",k))},[F("span",null,le(Qe.value==="this"?K(e)("thisWeek"):K(e)("next")),1),Ee(K(so),{class:"select-chevron",size:15})],8,MD),(fe(),Kt(Fa,{to:"body"},[D.value==="shopping-week"?(fe(),ge("div",{key:0,class:"custom-select-menu dropdown-menu-portal",style:Ps(V.value),onClick:S[13]||(S[13]=gn(()=>{},["stop"]))},[F("button",{class:Ot(["custom-select-option",{selected:Qe.value==="this"}]),onClick:S[11]||(S[11]=k=>ms("this"))},le(K(e)("thisWeek")),3),F("button",{class:Ot(["custom-select-option",{selected:Qe.value==="next"}]),onClick:S[12]||(S[12]=k=>ms("next"))},le(K(e)("next")),3)],4)):It("",!0)]))]),F("button",{class:"secondary-btn store-priority-trigger",onClick:Un},[Ee(K(dN),{size:16}),_n(le(K(e)("storePriorities")),1)])])]),Xs.value.length?(fe(),ge("div",xD,[(fe(!0),ge(ct,null,Cn(Xs.value,k=>(fe(),ge("section",{key:k.id||"no-store",class:"shopping-store-group"},[F("header",FD,[Ee(K(sg),{size:17}),F("h2",null,le(k.name),1),F("span",null,le(k.items.length),1)]),(fe(!0),ge(ct,null,Cn(k.items,B=>(fe(),ge("article",{key:B.key,class:"shopping-item-row"},[F("div",UD,[F("h3",null,le(B.name),1),F("p",null,[B.quantity?(fe(),ge("span",$D,le(ji(B.quantity,B.quantityUnit)),1)):It("",!0),!B.quantity&&B.occurrences>1?(fe(),ge("span",jD,le(B.occurrences)+"×",1)):It("",!0)])]),F("div",{class:"shopping-status-control",role:"group","aria-label":B.name},[F("button",{class:Ot({selected:B.status==="home"}),onClick:ie=>Vr(B.key,"home")},[Ee(K(ng),{size:14}),F("span",null,le(K(e)("alreadyAtHome")),1)],10,qD),F("button",{class:Ot({selected:B.status==="bought"}),onClick:ie=>Vr(B.key,"bought")},[Ee(K(ro),{size:14}),F("span",null,le(K(e)("bought")),1)],10,HD),F("button",{class:Ot({selected:B.status==="buy"}),onClick:ie=>Vr(B.key,"buy")},[Ee(K(hN),{size:14}),F("span",null,le(K(e)("toBuy")),1)],10,WD)],8,BD)]))),128))]))),128))])):(fe(),ge("div",zD,[Ee(K(rg),{size:30}),F("h3",null,le(Lr.value.length&&$e.value?K(e)("shoppingAllAtHome"):K(e)("shoppingEmpty")),1),F("p",KD,le(Lr.value.length&&$e.value?K(e)("shoppingAllAtHomeHint"):K(e)("shoppingEmptyHint")),1)]))]))]),T.value?(fe(),ge("div",{key:0,class:"modal-backdrop",onClick:S[17]||(S[17]=gn(k=>T.value=!1,["self"]))},[F("section",GD,[F("div",QD,[F("div",null,[F("p",YD,le(K(e)("shopping")),1),F("h2",null,le(K(e)("storePriorities")),1),F("p",XD,le(K(e)("storePrioritiesHint")),1)]),F("button",{class:"icon-btn","aria-label":K(e)("close"),onClick:S[15]||(S[15]=k=>T.value=!1)},[Ee(K(io))],8,JD)]),R.value.length?(fe(),ge("div",ZD,[F("p",eO,le(K(e)("storePriorityOrderHint")),1),(fe(!0),ge(ct,null,Cn(R.value,(k,B)=>(fe(),ge("article",{key:k.id,class:"store-priority-row"},[F("span",tO,le(String(B+1).padStart(2,"0")),1),F("div",nO,[F("h3",null,le(k.name),1),F("p",null,le(B===0?K(e)("highestPriority"):K(e)("priorityNumber",{number:B+1})),1)]),F("div",rO,[F("button",{type:"button",class:"icon-btn priority-move-btn",disabled:B===0,"aria-label":K(e)("moveStoreUp"),title:K(e)("moveStoreUp"),onClick:ie=>Bi(B,-1)},[Ee(K(Yk),{size:16})],8,sO),F("button",{type:"button",class:"icon-btn priority-move-btn",disabled:B===R.value.length-1,"aria-label":K(e)("moveStoreDown"),title:K(e)("moveStoreDown"),onClick:ie=>Bi(B,1)},[Ee(K(Wk),{size:16})],8,iO)])]))),128))])):(fe(),ge("div",oO,[Ee(K(sg),{size:26}),F("h3",null,le(K(e)("noStores")),1),F("p",null,le(K(e)("storesHint")),1)])),F("div",aO,[F("button",{type:"button",class:"secondary-btn",onClick:S[16]||(S[16]=k=>T.value=!1)},le(K(e)("cancel")),1),F("button",{type:"button",class:"primary-btn",disabled:!R.value.length,onClick:Ea},le(K(e)("save")),9,lO)])])])):It("",!0),C.value?(fe(),ge("div",{key:1,class:"modal-backdrop",onClick:S[26]||(S[26]=gn(k=>C.value=!1,["self"]))},[F("section",cO,[F("div",uO,[F("div",null,[S[35]||(S[35]=F("p",{class:"eyebrow"},"MEAL LIBRARY",-1)),F("h2",null,le(O.value?K(e)("editMeal"):K(e)("addMeal")),1)]),F("button",{class:"icon-btn",onClick:S[18]||(S[18]=k=>C.value=!1)},[Ee(K(io))])]),F("form",{onSubmit:gn(xt,["prevent"])},[F("label",hO,[_n(le(K(e)("mealName")),1),Zi(F("input",{"onUpdate:modelValue":S[19]||(S[19]=k=>q.value.name=k),required:"",maxlength:"90",autofocus:""},null,512),[[ja,q.value.name]])]),F("div",fO,[F("div",dO,[F("h3",null,le(K(e)("ingredients")),1),F("button",{type:"button",class:"secondary-btn small-btn",onClick:_s},[Ee(K(pu),{size:15}),_n(le(K(e)("addIngredient")),1)])]),q.value.ingredients.length?It("",!0):(fe(),ge("p",pO,le(K(e)("ingredientsEmpty")),1)),(fe(!0),ge(ct,null,Cn(q.value.ingredients,k=>(fe(),ge("div",{key:k.localId,class:"ingredient-editor-row"},[F("div",mO,[F("label",gO,[_n(le(K(e)("ingredientName")),1),Zi(F("input",{"onUpdate:modelValue":B=>k.name=B,required:"",placeholder:K(e)("ingredientName")},null,8,_O),[[ja,k.name]])]),F("div",yO,[F("span",null,le(K(e)("quantity")),1),F("span",{class:"quantity-input-wrap",onClick:S[21]||(S[21]=gn(()=>{},["stop"]))},[F("input",{value:k.quantity,"aria-label":K(e)("quantity"),type:"number",min:"0",step:k.quantityUnit==="unit"?1:"any",inputmode:k.quantityUnit==="unit"?"numeric":"decimal",placeholder:k.quantityUnit==="unit"?"1":"200",onInput:B=>k.quantity=B.target.value},null,40,vO),F("button",{type:"button",class:"quantity-unit quantity-unit-select","aria-expanded":D.value===`quantity-${k.localId}`,onClick:B=>ar(`quantity-${k.localId}`,B)},[_n(le(An(k.quantityUnit)),1),Ee(K(so),{size:12})],8,EO),(fe(),Kt(Fa,{to:"body"},[D.value===`quantity-${k.localId}`?(fe(),ge("div",{key:0,class:"quantity-unit-menu dropdown-menu-portal",style:Ps(V.value),onClick:S[20]||(S[20]=gn(()=>{},["stop"]))},[F("button",{type:"button",class:Ot(["quantity-unit-option",{selected:k.quantityUnit==="g"}]),onClick:B=>gs(k,"g")},[S[36]||(S[36]=F("span",{class:"quantity-option-symbol"},"g",-1)),F("span",IO,le(K(e)("quantityUnitGrams")),1),k.quantityUnit==="g"?(fe(),Kt(K(ro),{key:0,size:14})):It("",!0)],10,TO),F("button",{type:"button",class:Ot(["quantity-unit-option",{selected:k.quantityUnit==="unit"}]),onClick:B=>gs(k,"unit")},[F("span",bO,le(An("unit")),1),F("span",AO,le(K(e)("quantityUnitPieces")),1),k.quantityUnit==="unit"?(fe(),Kt(K(ro),{key:0,size:14})):It("",!0)],10,wO)],4)):It("",!0)]))])])]),F("div",SO,[F("span",CO,le(K(e)("store")),1),F("div",{class:"custom-select-wrap store-select-wrap",onClick:S[23]||(S[23]=gn(()=>{},["stop"]))},[F("button",{type:"button",class:"custom-select-trigger","aria-expanded":D.value===`store-${k.localId}`,onClick:B=>ar(`store-${k.localId}`,B)},[F("span",null,le($i(k.storeIds)),1),Ee(K(so),{class:"select-chevron",size:15})],8,RO),(fe(),Kt(Fa,{to:"body"},[D.value===`store-${k.localId}`?(fe(),ge("div",{key:0,class:"custom-select-menu dropdown-menu-portal",style:Ps(V.value),onClick:S[22]||(S[22]=gn(()=>{},["stop"]))},[F("button",{type:"button",class:Ot(["custom-select-option",{selected:!k.storeIds.length}]),onClick:B=>kr(k,"")},[_n(le(K(e)("noStore")),1),k.storeIds.length?It("",!0):(fe(),Kt(K(ro),{key:0,size:14}))],10,PO),(fe(!0),ge(ct,null,Cn(u.value,B=>(fe(),ge("button",{key:B.id,type:"button",class:Ot(["custom-select-option multi-select-option",{selected:k.storeIds.includes(B.id)}]),onClick:ie=>kr(k,B.id)},[_n(le(B.name),1),k.storeIds.includes(B.id)?(fe(),Kt(K(ro),{key:0,size:14})):It("",!0)],10,kO))),128))],4)):It("",!0)]))]),F("button",{type:"button",class:Ot(["text-btn add-store-link",{active:M.value===k.localId}]),"aria-expanded":M.value===k.localId,"aria-controls":`new-store-${k.localId}`,"aria-label":M.value===k.localId?K(e)("close"):K(e)("addStore"),onClick:B=>M.value=M.value===k.localId?null:k.localId},[M.value===k.localId?(fe(),Kt(K(io),{key:0,size:14})):(fe(),Kt(K(pu),{key:1,size:14})),F("span",null,le(K(e)("addStore")),1)],10,NO),F("button",{type:"button",class:"icon-btn remove-ingredient",title:K(e)("remove"),onClick:B=>ma(k.localId)},[Ee(K(ig),{size:15})],8,DO)]),M.value===k.localId?(fe(),ge("div",{key:0,id:`new-store-${k.localId}`,class:"new-store-form",role:"region","aria-label":K(e)("addStore")},[Zi(F("input",{"onUpdate:modelValue":S[24]||(S[24]=B=>X.value=B),placeholder:K(e)("newStore"),maxlength:"60",onKeydown:dw(gn(B=>Nr(k.localId),["prevent"]),["enter"])},null,40,LO),[[ja,X.value]]),F("button",{class:"primary-btn small-btn",type:"button",disabled:!X.value.trim(),onClick:B=>Nr(k.localId)},le(K(e)("saveStore")),9,VO)],8,OO)):It("",!0)]))),128))]),F("div",MO,[F("button",{type:"button",class:"secondary-btn",onClick:S[25]||(S[25]=k=>C.value=!1)},le(K(e)("cancel")),1),F("button",xO,le(K(e)("save")),1)])],32)])])):It("",!0)])):(fe(),ge("div",PN,[F("div",kN,[Ee(K(io))]),F("h2",null,le(K(e)("accessDenied")),1),S[32]||(S[32]=F("p",{class:"muted"},"Ask the administrator to enable your UID in Firestore.",-1)),F("code",null,le(s.value.uid),1),F("button",{class:"text-btn",onClick:Dt},le(K(e)("signOut")),1)])):(fe(),ge("div",AN,[F("div",SN,[F("div",CN,[Ee(K(og),{size:34})])]),S[30]||(S[30]=F("p",{class:"eyebrow"},"A MORE MINDFUL ROUTINE",-1)),F("h1",null,le(K(e)("welcome")),1),S[31]||(S[31]=F("p",{class:"muted"},"Plan ahead. Eat well. Find your rhythm.",-1)),F("button",{class:"primary-btn google-btn",onClick:Tt},[S[29]||(S[29]=F("span",{class:"google-g"},"G",-1)),_n(le(K(e)("signIn")),1)]),l.value?(fe(),ge("p",RN,le(l.value),1)):It("",!0)])):(fe(),ge("div",IN,[F("div",wN,[Ee(K(mN))]),F("h1",null,le(K(e)("welcome")),1),F("p",null,le(K(e)("setup")),1),S[27]||(S[27]=F("code",null,"cp .env.example .env.local",-1))]))}}),UO={en:{home:"Home",today:"Today",tomorrow:"Tomorrow",meals:"Meals",plan:"Plan",shopping:"Shopping",breakfast:"Breakfast",lunch:"Lunch",snack:"Snack",dinner:"Dinner",addMeal:"Add meal",editMeal:"Edit meal",mealName:"Meal name",averagePerWeek:"Average per week",ingredients:"Ingredients",ingredientsHelp:"Ingredients for this meal",ingredientName:"Ingredient",quantity:"Quantity",quantityUnitGrams:"Grams (g)",quantityUnitPieces:"Units",quantityUnitPiecesShort:"pcs",store:"Stores",selectStore:"Choose a store",chooseStores:"Choose stores",storesSelected:"{count} shops selected",newStore:"New shop name",saveStore:"Save shop",ingredientsEmpty:"No ingredients added yet.",remove:"Remove",backToPlan:"Back to plan",alreadyAtHome:"Already at home",excludeAlreadyAtHome:"Exclude already at home",shoppingAllAtHome:"Everything is already at home",shoppingAllAtHomeHint:"Turn off the filter to see all planned ingredients.",bought:"Bought",toBuy:"To buy",noStore:"No store",storePriorities:"Store priorities",storePrioritiesHint:"Set one global order for your shops. Items available in multiple shops will be assigned to the highest-priority shop available.",storePriorityOrderHint:"Move shops up or down. Shops higher in the list are preferred whenever an ingredient is available in more than one place.",highestPriority:"First choice",priorityNumber:"Priority #{number}",moveStoreUp:"Move shop up",moveStoreDown:"Move shop down",addIngredient:"Add ingredient",removeIngredient:"Remove ingredient",manageStores:"Manage stores",stores:"Shops",storeName:"Shop name",addStore:"Add shop",noStores:"No shops yet. Add the places where you shop.",deleteStore:"Delete shop",save:"Save",cancel:"Cancel",delete:"Delete",search:"Search meals…",alphabetical:"A–Z",noMeals:"No meals yet. Add your first dish.",thisWeek:"This week",previous:"Previous week",next:"Next week",signIn:"Continue with Google",signOut:"Sign out",accessDenied:"This account is not enabled for this app.",setup:"Configure Firebase to get started.",language:"Language",dark:"Dark mode",light:"Light mode",emptyDay:"No meal selected",noMealSelected:"No meal selected",selectDish:"Choose a meal",changeMeal:"Change meal",clearMeal:"Clear meal",weekOf:"Week of",mealCount:"{count} meals",confirmDelete:"Delete this meal?",allMeals:"Your meals",welcome:"Your personal meal planner",shoppingSubtitle:"THIS WEEK",shoppingFromPlan:"What you need for the meals planned this week.",shoppingEmpty:"Nothing to buy yet",shoppingEmptyHint:"Add ingredients to meals and schedule them this week.",statusHome:"Already at home",statusBought:"Bought",statusBuy:"To buy",neededFor:"Needed for",quantities:"Quantity",noQuantity:"Quantity not set",history:"History",backToWeek:"Back to week",noHistory:"No past meal plans yet.",historyFrom:"History from",todayDate:"Today",confirmDeleteStore:"Delete this shop? Existing ingredients will keep an unassigned shop.",confirmDeleteMeal:"Delete this meal?",close:"Close",mealCountLabel:"planned",planWeekTitle:"Weekly plan",storesHint:"Add shops from the ingredient editor. Their global priority can be set here."},it:{home:"Home",today:"Oggi",tomorrow:"Domani",meals:"Piatti",plan:"Piano",shopping:"Spesa",breakfast:"Colazione",lunch:"Pranzo",snack:"Merenda",dinner:"Cena",addMeal:"Aggiungi piatto",editMeal:"Modifica piatto",mealName:"Nome del piatto",averagePerWeek:"Media settimanale",ingredients:"Ingredienti",ingredientsHelp:"Ingredienti del piatto",ingredientName:"Ingrediente",quantity:"Quantità",quantityUnitGrams:"Grammi (g)",quantityUnitPieces:"Unità",quantityUnitPiecesShort:"pz",store:"Negozi",selectStore:"Scegli un negozio",chooseStores:"Scegli i negozi",storesSelected:"{count} negozi selezionati",newStore:"Nome del nuovo negozio",saveStore:"Salva negozio",ingredientsEmpty:"Nessun ingrediente inserito.",remove:"Rimuovi",backToPlan:"Torna al piano",alreadyAtHome:"Già in casa",excludeAlreadyAtHome:"Escludi ciò che è già in casa",shoppingAllAtHome:"È già tutto in casa",shoppingAllAtHomeHint:"Disattiva il filtro per visualizzare tutti gli ingredienti pianificati.",bought:"Comprato",toBuy:"Da comprare",noStore:"Nessun negozio",storePriorities:"Priorità negozi",storePrioritiesHint:"Imposta un unico ordine globale dei negozi. Gli articoli disponibili in più negozi verranno assegnati al negozio con la priorità più alta tra quelli disponibili.",storePriorityOrderHint:"Sposta i negozi verso l’alto o il basso. I negozi più in alto hanno la precedenza quando un ingrediente è disponibile in più posti.",highestPriority:"Prima scelta",priorityNumber:"Priorità #{number}",moveStoreUp:"Sposta negozio in alto",moveStoreDown:"Sposta negozio in basso",addIngredient:"Aggiungi ingrediente",removeIngredient:"Rimuovi ingrediente",manageStores:"Gestisci negozi",stores:"Negozi",storeName:"Nome negozio",addStore:"Aggiungi negozio",noStores:"Nessun negozio. Aggiungi i luoghi in cui fai la spesa.",deleteStore:"Elimina negozio",save:"Salva",cancel:"Annulla",delete:"Elimina",search:"Cerca piatti…",alphabetical:"A–Z",noMeals:"Nessun piatto. Aggiungi la tua prima ricetta.",thisWeek:"Questa settimana",previous:"Settimana precedente",next:"Settimana successiva",signIn:"Accedi con Google",signOut:"Esci",accessDenied:"Questo account non è abilitato all’applicazione.",setup:"Configura Firebase per iniziare.",language:"Lingua",dark:"Modalità scura",light:"Modalità chiara",emptyDay:"Nessun pasto selezionato",noMealSelected:"Nessun pasto selezionato",selectDish:"Scegli un piatto",changeMeal:"Cambia pasto",clearMeal:"Rimuovi pasto",weekOf:"Settimana del",mealCount:"{count} piatti",confirmDelete:"Eliminare questo piatto?",allMeals:"I tuoi piatti",welcome:"La tua agenda dei pasti",shoppingSubtitle:"QUESTA SETTIMANA",shoppingFromPlan:"Cosa serve comprare per i pasti pianificati questa settimana.",shoppingEmpty:"Non c’è niente da comprare",shoppingEmptyHint:"Aggiungi ingredienti ai piatti e pianificali per questa settimana.",statusHome:"Già a casa",statusBought:"Comprato",statusBuy:"Da comprare",neededFor:"Serve per",quantities:"Quantità",noQuantity:"Quantità non indicata",history:"Storico",backToWeek:"Torna alla settimana",noHistory:"Non ci sono ancora pasti nello storico.",historyFrom:"Storico dal",todayDate:"Oggi",confirmDeleteStore:"Eliminare questo negozio? Gli ingredienti associati resteranno senza negozio.",confirmDeleteMeal:"Eliminare questo piatto?",close:"Chiudi",mealCountLabel:"pianificati",planWeekTitle:"Piano settimanale",storesHint:"Aggiungi i negozi dall’editor degli ingredienti. Qui puoi impostarne la priorità globale."}},$O=S0({legacy:!1,locale:localStorage.getItem("diet-language")||"en",fallbackLocale:"en",messages:UO});gw(FO).use(Ew()).use($O).mount("#app");
